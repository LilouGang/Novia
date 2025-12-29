import torch
import torch.optim as optim
import torch.nn.functional as F
import random
import json
import asyncio
import collections
import os
import traceback
import numpy as np
import math
from vectorizer import GameVectorizer, get_card_from_index
from network import TheCrewNetwork 
from game_env import TrainingEnv

BATCH_SIZE = 128
GAMMA = 0.95 
EPS_START = 1.0
EPS_END = 0.05

EPS_DECAY = 200000 

TARGET_UPDATE = 50
MEMORY_SIZE = 50000
LR = 1e-4

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
MODEL_PATH = os.path.join(BASE_DIR, "crew_brain.pth")
META_PATH = os.path.join(BASE_DIR, "training_meta.json")

class ReplayMemory:
    def __init__(self, capacity):
        self.memory = collections.deque(maxlen=capacity)
    def push(self, state, action, next_state, reward):
        self.memory.append((state, action, next_state, reward))
    def sample(self, batch_size):
        batch = random.sample(self.memory, batch_size)
        state, action, next_state, reward = zip(*batch)
        return state, action, next_state, reward
    def __len__(self):
        return len(self.memory)

class Trainer:
    def __init__(self):
        print("🔧 [DEBUG] Initialisation du Trainer...")
        try:
            total_cores = os.cpu_count() or 4 # Nombre de coeurs physiques
            limit_cores = max(1, int(total_cores * 0.50)) # On en prend 50% (minimum 1)
            
            torch.set_num_threads(limit_cores)
            torch.set_num_interop_threads(limit_cores)
            
            print(f"🛑 [CPU LIMIT] Restriction active : Utilisation de {limit_cores} cœurs sur {total_cores} (50%)")
        except Exception as e:
            print(f"⚠️ Impossible de limiter le CPU : {e}")
            
        try:
            self.vectorizer = GameVectorizer()
            self.input_size = self.vectorizer.input_size
            
            self.device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
            print(f"🔧 [DEBUG] Device: {self.device}")
            print(f"🔧 [DEBUG] Input Size: {self.input_size} | Output Size: 80")

            self.output_size = 80

            self.policy_net = TheCrewNetwork(self.input_size, self.output_size).to(self.device)
            self.target_net = TheCrewNetwork(self.input_size, self.output_size).to(self.device)
            self.optimizer = optim.Adam(self.policy_net.parameters(), lr=LR)
            self.memory = ReplayMemory(MEMORY_SIZE)
            
            print("🔧 [DEBUG] Création de l'environnement de jeu...")
            self.env = TrainingEnv()
            print("🔧 [DEBUG] Environnement créé !")

            self.steps_done = 0
            self.total_episodes_counter = 0

            self.load_model()
            self.target_net.load_state_dict(self.policy_net.state_dict())
            self.target_net.eval()
            print("✅ [DEBUG] Trainer prêt !")
            
        except Exception as e:
            print(f"❌ [CRASH] Erreur dans __init__ Trainer : {e}")
            traceback.print_exc()

    def load_model(self):
        if os.path.exists(MODEL_PATH):
            try:
                saved_state = torch.load(MODEL_PATH, map_location=self.device)
                if 'head.weight' in saved_state:
                    saved_size = saved_state['head.weight'].shape[0]
                    if saved_size != self.output_size:
                        print(f"⚠️ [DEBUG] Incompatibilité modèle (Saved: {saved_size} vs New: {self.output_size}). Reset.")
                        return
                self.policy_net.load_state_dict(saved_state)
                print(f"✅ [DEBUG] Modèle chargé.")
            except Exception as e:
                print(f"⚠️ [DEBUG] Erreur chargement modèle: {e}")

        if os.path.exists(META_PATH):
            try:
                with open(META_PATH, "r") as f:
                    meta = json.load(f)
                    self.total_episodes_counter = meta.get("total_episodes", 0)
                    self.steps_done = meta.get("steps_done", 0)
            except Exception: pass

    def save_model(self):
        try:
            torch.save(self.policy_net.state_dict(), MODEL_PATH)
            with open(META_PATH, "w") as f:
                json.dump({"total_episodes": self.total_episodes_counter, "steps_done": self.steps_done}, f)
        except Exception: pass

    def select_action(self, state_tensor, valid_actions_indices):
        sample = random.random()
        # La valeur d'Epsilon dépend maintenant de steps_done avec un decay de 200 000
        eps_threshold = EPS_END + (EPS_START - EPS_END) * math.exp(-1. * self.steps_done / EPS_DECAY)
        self.steps_done += 1
        if sample < eps_threshold: return random.choice(valid_actions_indices)
        with torch.no_grad():
            q_values = self.policy_net(state_tensor.to(self.device))
            mask = torch.full_like(q_values, -float('inf'))
            mask[0, valid_actions_indices] = 0
            return (q_values + mask).max(1)[1].item()

    def optimize_model(self):
        if len(self.memory) < BATCH_SIZE: return
        states, actions, next_states, rewards = self.memory.sample(BATCH_SIZE)
        state_batch = torch.cat(states).to(self.device)
        action_batch = torch.tensor(actions, device=self.device).unsqueeze(1)
        reward_batch = torch.tensor(rewards, device=self.device)
        non_final_mask = torch.tensor(tuple(map(lambda s: s is not None, next_states)), device=self.device, dtype=torch.bool)
        non_final_next_states = torch.cat([s for s in next_states if s is not None]).to(self.device) if any(s is not None for s in next_states) else None
        state_action_values = self.policy_net(state_batch).gather(1, action_batch)
        next_state_values = torch.zeros(BATCH_SIZE, device=self.device)
        if non_final_next_states is not None:
            next_state_values[non_final_mask] = self.target_net(non_final_next_states).max(1)[0].detach()
        expected_state_action_values = (next_state_values * GAMMA) + reward_batch
        loss = F.smooth_l1_loss(state_action_values, expected_state_action_values.unsqueeze(1))
        self.optimizer.zero_grad()
        loss.backward()
        for param in self.policy_net.parameters(): param.grad.data.clamp_(-1, 1)
        self.optimizer.step()

    async def train_stream(self, max_episodes=10, mission_id=0):
        print(f"🚀 [DEBUG] Démarrage train_stream (Ep: {max_episodes}, Mission: {mission_id})")
        yield json.dumps({"type": "LOG", "message": "Démarrage..."}) + "\n"

        recent_rewards = collections.deque(maxlen=20)
        best_milestone_reward = -float('inf')
        best_milestone_replay = []
        best_milestone_missions = []
        best_milestone_hands = []

        try:
            for i_episode in range(max_episodes):
                # 1. RESET
                state_dict, _ = self.env.reset(forced_mission_id=mission_id)
                
                current_initial_hands = []
                for p_idx, hand in enumerate(state_dict['players']):
                    for c in hand:
                        current_initial_hands.append({'color': c['color'], 'value': c['value'], 'owner': p_idx})

                current_missions_ui = []
                for m in self.env.missions:
                    current_missions_ui.append({
                        "cardColor": m['card']['color'], "cardValue": m['card']['value'],
                        "ownerIndex": m['owner'], "token": m.get('token', 'None'), "status": "PENDING"
                    })

                current_replay_history = []
                episode_reward = 0
                
                # 2. GAME LOOP
                while not self.env.game.is_game_over():
                    player_idx = self.env.game.active_player
                    state_dict = self.env.game.get_state()
                    missions = self.env.missions
                    
                    state_tensor = self.vectorizer.state_to_tensor(state_dict, player_idx, missions).unsqueeze(0)
                    valid_cards = self.env.get_legal_actions(player_idx)
                    if not valid_cards: break
                    
                    action_idx = self.select_action(state_tensor, valid_cards)
                    next_state_dict, reward, done, info = self.env.step(player_idx, action_idx)
                    
                    if "moves" in info:
                        for move in info["moves"]:
                            c = move['card']
                            if c is None: card_dict = {'color': 'Unknown', 'value': 0}
                            elif isinstance(c, dict): card_dict = c
                            else: card_dict = {'color': c.color, 'value': c.value}
                            current_replay_history.append({
                                "player": move['player'], "card": card_dict, "reward": move['reward'],
                                "step_info": move['step_info'], "action_type": move['action_type']
                            })
                            
                    episode_reward += reward
                    
                    if done: next_state_tensor = None
                    else: next_state_tensor = self.vectorizer.state_to_tensor(next_state_dict, player_idx, missions).unsqueeze(0)
                    
                    self.memory.push(state_tensor, action_idx, next_state_tensor, reward)
                    self.optimize_model()
                    
                    if done: break
                    if info.get("repeat_turn"): continue

                # 3. END EPISODE
                recent_rewards.append(episode_reward)
                self.total_episodes_counter += 1

                if i_episode % TARGET_UPDATE == 0:
                    self.target_net.load_state_dict(self.policy_net.state_dict())

                if episode_reward > best_milestone_reward:
                    best_milestone_reward = episode_reward
                    best_milestone_replay = list(current_replay_history)
                    best_milestone_missions = list(current_missions_ui)
                    best_milestone_hands = list(current_initial_hands)

                if i_episode % 5 == 0: await asyncio.sleep(0.001)

                is_last = (i_episode == max_episodes - 1)
                
                # --- CORRECTION 2 : Logique d'affichage (10, 20, 30...) ---
                # On utilise (i_episode + 1) pour vérifier le modulo
                should_send_stats = ((i_episode + 1) % 10 == 0)
                should_send_replay = (self.total_episodes_counter % 10 == 0) or is_last

                if should_send_stats or should_send_replay:
                    avg_r = sum(recent_rewards) / len(recent_rewards)
                    eps = EPS_END + (EPS_START - EPS_END) * math.exp(-1. * self.steps_done / EPS_DECAY)

                    data = {
                        "type": "TRAINING_UPDATE",
                        "episode": i_episode + 1,
                        "max_episodes": max_episodes,
                        "avg_reward": round(avg_r, 2),
                        "epsilon": round(eps, 3),
                        "last_game_result": "WIN" if episode_reward > 0 else "LOSE",
                        "total_lifetime_games": self.total_episodes_counter,
                        "milestone_replay": best_milestone_replay if should_send_replay else None,
                        "milestone_missions": best_milestone_missions if should_send_replay else None,
                        "milestone_hands": best_milestone_hands if should_send_replay else None
                    }
                    yield json.dumps(data) + "\n"
                    
                    if should_send_replay:
                        best_milestone_reward = -float('inf')
                        best_milestone_replay = []
                        best_milestone_missions = []
                        best_milestone_hands = []

                if i_episode > 0 and i_episode % 50 == 0: self.save_model()

            self.save_model()
            yield json.dumps({"type": "TRAINING_COMPLETE"}) + "\n"

        except Exception as e:
            print(f"❌ [CRASH] ERREUR PENDANT LE STREAM : {e}")
            traceback.print_exc()
            yield json.dumps({"type": "TRAINING_COMPLETE", "error": str(e)}) + "\n"

    def get_action_probabilities(self, game_state, player_idx, missions):
        self.policy_net.eval()
        with torch.no_grad():
            tensor = self.vectorizer.state_to_tensor(game_state, player_idx, missions).unsqueeze(0).to(self.device)
            output = self.policy_net(tensor)
            probs = F.softmax(output, dim=1).squeeze(0)
            result = {}
            for idx, prob in enumerate(probs):
                if idx < 40 and prob.item() * 100 > 0.01:
                    c = get_card_from_index(idx)
                    result[f"{c['color']}-{c['value']}"] = round(prob.item() * 100, 1)
            return result