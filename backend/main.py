import asyncio
import json
import traceback 
from typing import List, Dict, Any, Optional
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import StreamingResponse
from pydantic import BaseModel
import numpy as np
import torch

# --- 1. FONCTIONS UTILITAIRES POUR LES CARTES ---
COLORS = ['Blue', 'Green', 'Pink', 'Yellow', 'Rocket']
COLOR_OFFSET = {'Blue': 0, 'Green': 9, 'Pink': 18, 'Yellow': 27, 'Rocket': 36}

def get_card_index(color, value):
    """Convertit une couleur/valeur en index 0-39"""
    if color not in COLOR_OFFSET: return -1
    if value is None: return -1
    return COLOR_OFFSET[color] + (value - 1)

# --- 2. CLASSE GAMESTATE (Ce que le Frontend envoie) ---
class GameState(BaseModel):
    current_player: int
    players: List[List[Dict[str, Any]]]  # Les mains des joueurs
    current_trick: List[Dict[str, Any]]  # Le pli en cours
    missions: List[Dict[str, Any]]       # Les missions
    played_history: List[Dict[str, Any]] # Cartes déjà jouées
    communications: List[Dict[str, Any]] # Indices donnés

    def _extract_card_info(self, card_data):
        if card_data is None: return None, None
        if isinstance(card_data, dict):
            if 'color' in card_data: return card_data['color'], card_data['value']
            if 'card' in card_data: return self._extract_card_info(card_data['card'])
        if hasattr(card_data, 'color') and hasattr(card_data, 'value'): 
            return card_data.color, card_data.value
        return None, None

    def to_vector(self):
        """Transforme l'état du jeu en vecteur pour l'IA (Taille 1022)"""
        input_size = 1022
        vec = np.zeros(input_size, dtype=np.float32)
        cursor = 0

        # A. MAIN DU JOUEUR ACTUEL
        try:
            my_hand = self.players[self.current_player]
            for c in my_hand:
                col, val = self._extract_card_info(c)
                idx = get_card_index(col, val)
                if idx != -1: vec[cursor + idx] = 1.0
        except: pass
        cursor += 40

        # B. TABLE
        for move in self.current_trick:
            p = move['player']
            col, val = self._extract_card_info(move.get('card'))
            idx = get_card_index(col, val)
            if idx != -1: vec[cursor + (p * 40) + idx] = 1.0
        cursor += 160

        # C. MISSIONS
        for m in self.missions:
            status = m.get('status', 'PENDING')
            if status != 'SUCCESS':
                c_info = m.get('card')
                token = str(m.get('token', 'None'))
                col, val = self._extract_card_info(c_info)
                idx = get_card_index(col, val)
                if idx != -1:
                    base = cursor + (idx * 11)
                    vec[base + 0] = 1.0
                    if token == '1': vec[base + 1] = 1.0
                    if token == '2': vec[base + 2] = 1.0
                    if token == '3': vec[base + 3] = 1.0
                    if token == '4': vec[base + 4] = 1.0
                    if token == '5': vec[base + 5] = 1.0
                    if token == 'Omega': vec[base + 6] = 1.0
                    if token == '>':     vec[base + 7] = 1.0
                    if token == '>>':    vec[base + 8] = 1.0
                    if token == '>>>':   vec[base + 9] = 1.0
                    if token == '>>>>':  vec[base + 10] = 1.0
        cursor += 440

        # D. PROPRIÉTAIRES MISSIONS
        for m in self.missions:
            c_info = m.get('card')
            owner = m.get('owner', m.get('ownerIndex'))
            col, val = self._extract_card_info(c_info)
            idx = get_card_index(col, val)
            if idx != -1 and owner is not None: 
                vec[cursor + (int(owner) * 40) + idx] = 1.0
        cursor += 160

        # E. MÉMOIRE
        for item in self.played_history:
            col, val = self._extract_card_info(item)
            idx = get_card_index(col, val)
            if idx != -1: vec[cursor + idx] = 1.0
        cursor += 40
        
        # F. CONTEXTE
        if 0 <= self.current_player < 4: vec[cursor + self.current_player] = 1.0
        if self.current_trick:
            lead_player = self.current_trick[0]['player']
            vec[cursor + 4 + lead_player] = 1.0
        else:
             vec[cursor + 4 + self.current_player] = 1.0
        cursor += 10
        
        # G. COMMUNICATIONS
        for comm in self.communications:
            p = comm['player']
            col, val = self._extract_card_info(comm.get('card'))
            t_type = comm['type']
            base_idx = cursor + (p * 43)
            idx = get_card_index(col, val)
            if idx != -1: vec[base_idx + idx] = 1.0
            if t_type == 'TOP': vec[base_idx + 40] = 1.0
            elif t_type == 'MID': vec[base_idx + 41] = 1.0
            elif t_type == 'BOT': vec[base_idx + 42] = 1.0
        cursor += 172
        
        return vec


# --- 3. INITIALISATION DES MODULES ---
Game = None
TheCrewSolver = None
Trainer = None

try:
    from game import Game
    print("✅ Module 'game' importé.")
except ImportError as e:
    print(f"❌ Erreur import game: {e}")

try:
    from solver import TheCrewSolver
    print("✅ Module 'solver' importé.")
except ImportError as e:
    print(f"❌ Erreur import solver: {e}")

try:
    from trainer import Trainer
    print("✅ Module 'trainer' importé.")
except ImportError as e:
    print(f"❌ Erreur import trainer: {e}")


app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

game_instance = None
ai_trainer = None
trainer_error = None
training_lock = False

# INIT GAME
if Game:
    try:
        game_instance = Game(allow_communication=False)
    except Exception as e:
        print(f"❌ CRASH Initialisation Jeu: {e}")

# INIT TRAINER (CHARGE LE CERVEAU)
if Trainer:
    try:
        print("⏳ Initialisation du Trainer (Chargement Cerveau)...")
        ai_trainer = Trainer()
        print("✅ Trainer prêt.")
    except Exception as e:
        trainer_error = str(e)
        print(f"❌ CRASH Initialisation Trainer: {e}")
        traceback.print_exc()


# --- MODÈLES DE DONNÉES RESTANTS ---
class TrainRequest(BaseModel):
    episodes: int
    mission_id: int = 0

class SolveRequest(BaseModel):
    player_1: List[dict]
    player_2: List[dict]
    player_3: List[dict]
    player_4: List[dict]
    missions: List[dict]
    constraints: List[dict] = []
    mode: str = "GOD"
    agent_player_idx: int = 0
    phase: str = "PLAY"
    played_history: List[dict] = []

# --- ROUTES ---

@app.get("/start-game")
def start_game():
    if not game_instance:
        raise HTTPException(status_code=500, detail="Jeu non initialisé")
    try:
        game_instance.deal_cards()
        return game_instance.get_state()
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.post("/predict")
async def predict_move(state: GameState):
    if not ai_trainer:
        raise HTTPException(status_code=503, detail="L'IA n'est pas chargée")

    try:
        # 1. Récupération Modèle
        model = getattr(ai_trainer, 'model', None)
        if not model: model = getattr(ai_trainer, 'policy_net', None)
        if not model:
            agent = getattr(ai_trainer, 'agent', None)
            if agent: model = getattr(agent, 'brain', None) or getattr(agent, 'policy_net', None)

        if not model: raise HTTPException(status_code=500, detail="Modèle IA introuvable")

        if hasattr(model, 'model'): model = model.model
        model.eval() 
        
        # 2. Vectorisation
        vec = state.to_vector()
        state_tensor = torch.FloatTensor(vec).unsqueeze(0)
        
        with torch.no_grad():
            q_values = model(state_tensor)
            
            # --- MASQUE DE LÉGALITÉ (JEU + COMMUNICATION) ---
            
            # A. Analyse de la main
            current_hand = []
            try:
                for c_data in state.players[state.current_player]:
                    col, val = state._extract_card_info(c_data)
                    if col and val: current_hand.append({'color': col, 'value': val})
            except: pass

            # B. Analyse du pli (Couleur demandée)
            lead_color = None
            if state.current_trick and len(state.current_trick) > 0:
                first_card_data = state.current_trick[0].get('card')
                lead_color, _ = state._extract_card_info(first_card_data)

            # C. Vérif si on a la couleur demandée
            has_lead_color = False
            if lead_color:
                for card in current_hand:
                    if card['color'] == lead_color:
                        has_lead_color = True
                        break
            
            # D. Vérif si on a déjà communiqué (Pour autoriser/interdire la comm)
            has_communicated = False
            for comm in state.communications:
                if comm['player'] == state.current_player:
                    has_communicated = True
                    break

            # E. Construction des indices valides
            valid_indices = []
            for card in current_hand:
                play_idx = get_card_index(card['color'], card['value'])
                if play_idx == -1: continue

                # 1. INDICES DE JEU (0-39)
                if has_lead_color and lead_color:
                    if card['color'] == lead_color:
                        valid_indices.append(play_idx)
                else:
                    valid_indices.append(play_idx)
                
                # 2. INDICES DE COMMUNICATION (40-79)
                # Si pas encore communiqué ET pas de carte "Rocket" (interdit de communiquer Rocket)
                if not has_communicated and card['color'] != 'Rocket':
                     # On décale de 40 (ex: Blue 1 est index 0 pour jouer, et 40 pour communiquer)
                     valid_indices.append(play_idx + 40)

            # F. Application du Masque
            if valid_indices:
                mask = torch.full_like(q_values, -float('inf'))
                output_size = q_values.shape[1]
                for idx in valid_indices:
                    if idx < output_size:
                        mask[0, idx] = 0
                
                masked_q_values = q_values + mask
                action_idx = torch.argmax(masked_q_values).item()
            else:
                action_idx = torch.argmax(q_values).item()
            
        return {"action": action_idx}

    except Exception as e:
        print(f"❌ Erreur PREDICT: {e}")
        traceback.print_exc()
        raise HTTPException(status_code=500, detail=str(e))
        
@app.post("/train-ai")
async def train_ai_endpoint(req: TrainRequest):
    global training_lock
    if training_lock:
        async def busy_stream(): yield json.dumps({"type": "TRAINING_COMPLETE", "error": "Occupé!"}) + "\n"
        return StreamingResponse(busy_stream(), media_type="application/x-ndjson")

    if not ai_trainer:
        return StreamingResponse(iter([json.dumps({"error": "Trainer non chargé"})]), media_type="application/json")
    
    training_lock = True 
    async def safe_stream():
        global training_lock
        try:
            async for chunk in ai_trainer.train_stream(max_episodes=int(req.episodes), mission_id=req.mission_id):
                yield chunk
        except Exception as e:
            yield json.dumps({"type": "TRAINING_COMPLETE", "error": str(e)}) + "\n"
        finally:
            training_lock = False

    return StreamingResponse(safe_stream(), media_type="application/x-ndjson")

@app.post("/solve-game")
async def solve_game(req: SolveRequest):
    current_trick = []
    if req.played_history:
        trick_size = len(req.played_history) % 4
        if trick_size > 0:
            current_trick = req.played_history[-trick_size:]
            
    game_state = {
        'player_1': req.player_1,
        'player_2': req.player_2,
        'player_3': req.player_3,
        'player_4': req.player_4,
        'played_history': req.played_history,
        'current_trick': current_trick
    }
    
    if req.mode == "GOD":
        if not TheCrewSolver: return {"error": "Module Solver non chargé"}
        loop = asyncio.get_event_loop()
        def run_god_solver():
            try:
                solver = TheCrewSolver(game_state, req.missions, req.constraints)
                return solver.solve()
            except Exception as e:
                return {"error": str(e)}
        result = await loop.run_in_executor(None, run_god_solver)
        return {"stats": result}

    elif req.mode == "AI_DL":
        if not ai_trainer: return {"error": "Trainer non chargé", "probabilities": {}, "bestMove": None}
        try:
            probs = ai_trainer.get_action_probabilities(game_state, req.agent_player_idx, req.missions)
            best_move = max(probs, key=probs.get) if probs else None
            return {"type": "PLAY", "probabilities": probs, "bestMove": best_move, "solutionFound": True}
        except Exception as e:
            return {"error": str(e), "probabilities": {}, "bestMove": None}

    return {"error": "Mode inconnu."}