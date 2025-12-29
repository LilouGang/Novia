import random
from game import Game
from vectorizer import get_card_index, get_card_from_index
from mission_rules import get_mission_constraints

# --- CONFIGURATION DES RÉCOMPENSES (TUNING) ---

# On ne punit plus le temps qui passe. L'IA a le droit de réfléchir/jouer long.
R_STEP_PENALTY = 0   

# Actions
R_CARD_PLAYED = 0       
R_VALID_COMM = 2.0      # On encourage un peu plus la comm

# Résultats du Pli
R_TRICK_WIN_NEUTRAL = 0 
R_TRICK_CONTAINS_TARGET = 0 

# Mission (L'AJUSTEMENT CRUCIAL EST ICI)
# Avant : +25 / -100 (Trop punitif)
# Maintenant : +80 / -40 (Encourageant)

R_TARGET_WON_BY_OWNER = 80      # GROS CADEAU si elle réussit une tâche
R_TARGET_WON_BY_WRONG = -40     # Punition modérée. Ce n'est pas la fin du monde.
R_ORDER_FAIL = -40              # Idem pour l'ordre.

# Fin de partie
R_GAME_WIN = 100        # La victoire reste le but ultime
R_GAME_LOSE = -20       # Perdre n'est pas grave si on a essayé

class TrainingEnv:
    def __init__(self):
        self.game = Game(allow_communication=True)
        self.missions = []
        self.missions_completed_count = 0
        self.start_player_idx = 0

    def reset(self, forced_mission_id=0):
        self.game = Game(allow_communication=True)
        self.game.deal_cards()
        self.missions_completed_count = 0
        self.start_player_idx = self.game.active_player
        
        # 1. Choix Mission
        if forced_mission_id > 0: mission_id = forced_mission_id
        else: mission_id = random.randint(1, 50)
            
        config = get_mission_constraints(mission_id)
        count = config['count']
        m_type = config['type']
        
        # 2. Cartes Cibles
        all_cards = [c for p in self.game.players for c in p if c.color != 'Rocket']
        if len(all_cards) < count: count = len(all_cards)
        random.shuffle(all_cards)
        target_cards = all_cards[:count]
        
        # 3. Propriétaires
        owners = []
        for i in range(count): owners.append((self.start_player_idx + i) % 4)
        
        # 4. Tokens
        self.missions = []
        for i, card in enumerate(target_cards):
            token = 'None'
            if 'ORDER_ABSOLUTE' in m_type: token = str(i + 1)
            elif 'OMEGA' in m_type and i == count - 1: token = 'Omega'
            elif 'ORDER_RELATIVE' in m_type:
                tokens = ['>', '>>', '>>>', '>>>>', '>>>>>']
                if i < len(tokens): token = tokens[i]
            
            self.missions.append({
                'card': {'color': card.color, 'value': card.value},
                'owner': owners[i],
                'status': 'PENDING',
                'token': token
            })
        
        return self.game.get_state(), []

    def get_legal_actions(self, player_idx):
        hand = self.game.get_hand(player_idx)
        valid_indices = []
        
        # JEU
        for c in hand:
            is_valid, _ = self.game.is_move_valid(player_idx, c)
            if is_valid: valid_indices.append(get_card_index(c.color, c.value))
        
        # COMM (Seulement si on a encore des cartes en main et pas déjà comm)
        if player_idx not in self.game.communications and len(hand) > 0:
            for c in hand:
                is_valid, _, _ = self.game.check_communication_validity(player_idx, c)
                if is_valid: valid_indices.append(get_card_index(c.color, c.value) + 40)
                    
        return valid_indices

    def step(self, player_idx, action_idx):
        step_moves = []
        reward = R_STEP_PENALTY # Petite pression temporelle
        done = False
        info = {"moves": [], "repeat_turn": False}

        # --- ACTION: COMMUNICATION ---
        if action_idx >= 40:
            real_card_idx = action_idx - 40
            c_dict = get_card_from_index(real_card_idx)
            hand = self.game.get_hand(player_idx)
            card_obj = next((c for c in hand if c.color == c_dict['color'] and c.value == c_dict['value']), None)
            
            if card_obj:
                success, reason, token = self.game.communicate_card(player_idx, card_obj)
                if success:
                    reward += R_VALID_COMM
                    self._log_move(step_moves, player_idx, card_obj, R_VALID_COMM, f"Indice {token}", "COMMUNICATE")
                    info["moves"] = step_moves; info["repeat_turn"] = True 
                    return self.game.get_state(), reward, False, info
            return self.game.get_state(), -5, True, info

        # --- ACTION: JOUER CARTE ---
        hand = self.game.get_hand(player_idx)
        card_to_play = next((c for c in hand if get_card_index(c.color, c.value) == action_idx), None)
        
        if not card_to_play: return self.game.get_state(), -50, True, info

        success, reason, trick_winner = self.game.play_card(player_idx, card_to_play)
        if not success: return self.game.get_state(), -50, True, info

        reward += R_CARD_PLAYED
        self._log_move(step_moves, player_idx, card_to_play, 0, "Joue", "PLAY")

        # --- FIN DE PLI ---
        if trick_winner is not None:
             reward_trick, failed, fail_reason = self._handle_trick_end(step_moves, trick_winner)
             reward += reward_trick
             
             if failed:
                 # ECHEC CRITIQUE
                 done = True
                 reward += R_GAME_LOSE # Double peine (Mission Fail + Game Lose)
                 step_moves.append({"player": trick_winner, "card": None, "reward": R_GAME_LOSE, "step_info": f"ECHEC: {fail_reason}", "action_type": "INFO"})
                 info["moves"] = step_moves
                 return self.game.get_state(), reward, done, info

        # --- FIN DE PARTIE (Si on a vidé les mains sans échouer) ---
        if self.game.is_game_over():
            # Si on arrive ici, c'est qu'aucune mission n'a échoué (sinon done=True avant)
            # MAIS il faut vérifier qu'elles sont toutes SUCCESS (cas rare où une mission n'est pas sortie ?)
            all_ok = all(m['status'] == 'SUCCESS' for m in self.missions)
            
            if all_ok:
                done = True
                reward += R_GAME_WIN
                step_moves[-1]["reward"] += R_GAME_WIN
                step_moves[-1]["step_info"] = "VICTOIRE !"
            else:
                # Cas limite : Partie finie mais mission pas remplie (ex: carte cible dans le dernier pli mais gagnée par le mauvais joueur, géré dans handle_trick normalement)
                done = True
                reward += R_GAME_LOSE
                step_moves[-1]["step_info"] = "FIN (Incomplet)"

        info["moves"] = step_moves
        return self.game.get_state(), reward, done, info

    def _handle_trick_end(self, moves_list, winner_idx):
        reward = R_TRICK_WIN_NEUTRAL
        last_trick = self.game.played_history[-4:]
        
        # Analyse des cartes du pli
        for card_played in last_trick:
            c_obj = card_played['card']
            
            # Est-ce une carte cible ?
            target_mission = next((m for m in self.missions if m['card']['color'] == c_obj.color and m['card']['value'] == c_obj.value), None)
            
            if target_mission:
                # Si la mission est déjà finie (ne devrait pas arriver car carte unique), on ignore
                if target_mission['status'] != 'PENDING': continue

                # 1. LE MAUVAIS JOUEUR GAGNE LA CARTE
                if winner_idx != target_mission['owner']:
                    target_mission['status'] = 'FAILED'
                    return R_TARGET_WON_BY_WRONG, True, "Mauvais Vainqueur"
                
                # 2. VÉRIFICATION DE L'ORDRE
                token = target_mission.get('token', 'None')
                
                # Ordre Absolu (1, 2, 3...)
                if token.isdigit():
                    expected_num = self.missions_completed_count + 1
                    if int(token) != expected_num:
                        target_mission['status'] = 'FAILED'
                        return R_ORDER_FAIL, True, f"Ordre invalide (Attendu {expected_num}, Reçu {token})"
                
                # Ordre Relatif (>, >>...)
                if set(token) <= {'>'}:
                    lvl = len(token)
                    # Y a-t-il une mission de niveau inférieur encore en cours ?
                    for om in self.missions:
                        if om['status'] == 'PENDING' and om != target_mission:
                            ot = om.get('token', '')
                            if set(ot) <= {'>'} and len(ot) < lvl:
                                target_mission['status'] = 'FAILED'
                                return R_ORDER_FAIL, True, f"Ordre relatif invalide ({ot} avant {token})"
                
                # Ordre Omega
                if token == 'Omega':
                    remaining = [om for om in self.missions if om['status'] == 'PENDING' and om != target_mission]
                    if len(remaining) > 0:
                        target_mission['status'] = 'FAILED'
                        return R_ORDER_FAIL, True, "Omega joué trop tôt"

                # SI TOUT EST OK
                target_mission['status'] = 'SUCCESS'
                self.missions_completed_count += 1
                reward += R_TARGET_WON_BY_OWNER # Gros bonus immédiat !
                moves_list.append({
                    "player": winner_idx, "card": None, "reward": R_TARGET_WON_BY_OWNER,
                    "step_info": f"MISSION {token} OK", "action_type": "INFO"
                })

        self._log_move(moves_list, winner_idx, None, 0, f"J{winner_idx+1} gagne", "COLLECT")
        return reward, False, None

    def _log_move(self, moves_list, player, card, reward, info, type):
        moves_list.append({ "player": player, "card": card if card else {'color': 'Unknown', 'value': 0}, "reward": reward, "step_info": info, "action_type": type })