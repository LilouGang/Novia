import torch
import numpy as np

COLORS = ['Blue', 'Green', 'Pink', 'Yellow', 'Rocket']
COLOR_OFFSET = {'Blue': 0, 'Green': 9, 'Pink': 18, 'Yellow': 27, 'Rocket': 36}

def get_card_index(color, value):
    if color not in COLOR_OFFSET: return -1
    if value is None: return -1
    return COLOR_OFFSET[color] + (value - 1)

def get_card_from_index(idx):
    if idx >= 40: idx -= 40
    if idx < 0: return {'color': 'Unknown', 'value': 0}
    
    color_idx = idx // 9
    val = (idx % 9) + 1
    if color_idx == 4:
        val = (idx % 4) + 1
        if idx >= 36: return {'color': 'Rocket', 'value': idx - 36 + 1}
    if color_idx < 4:
        return {'color': COLORS[color_idx], 'value': val}
    return {'color': 'Unknown', 'value': 0}

class GameVectorizer:
    def __init__(self):
        self.input_size = 0
        self.input_size += 40 # Main
        self.input_size += 160 # Table
        # 40 cartes * 11 features (Tokens: 1,2,3,4,5, Omega, >, >>, >>>, >>>>)
        self.input_size += 440 
        self.input_size += 160 # Owners
        self.input_size += 40 # Mémoire
        self.input_size += 10 # Contexte
        self.input_size += 172 # Communications

    def _extract_card_info(self, card_data):
        if card_data is None: return None, None
        if isinstance(card_data, dict) and 'card' in card_data: card_data = card_data['card']
        if isinstance(card_data, dict): return card_data.get('color'), card_data.get('value')
        if hasattr(card_data, 'color') and hasattr(card_data, 'value'): return card_data.color, card_data.value
        return None, None

    def state_to_tensor(self, game_state, player_idx, missions):
        vec = np.zeros(self.input_size, dtype=np.float32)
        cursor = 0

        # --- 1. MAIN (CORRIGÉ) ---
        # On essaie d'abord de récupérer via la liste 'players' (format Game)
        my_hand = []
        if 'players' in game_state and isinstance(game_state['players'], list):
            my_hand = game_state['players'][player_idx]
        # Sinon on tente le format dictionnaire (format Solver/API)
        elif f'player_{player_idx + 1}' in game_state:
            my_hand = game_state[f'player_{player_idx + 1}']
        
        for c in my_hand:
            col, val = self._extract_card_info(c)
            idx = get_card_index(col, val)
            if idx != -1: vec[cursor + idx] = 1.0
        cursor += 40

        # --- 2. TABLE ---
        current_trick = game_state.get('current_trick', [])
        for move in current_trick:
            p = move['player']
            col, val = self._extract_card_info(move['card'])
            idx = get_card_index(col, val)
            if idx != -1: vec[cursor + (p * 40) + idx] = 1.0
        cursor += 160

        # --- 3. MISSIONS (Avec Jeton 5) ---
        for m in missions:
            status = m.get('status')
            if status != 'SUCCESS':
                c_info = m.get('card')
                token = m.get('token', 'None')
                col, val = self._extract_card_info(c_info)
                
                idx = get_card_index(col, val)
                if idx != -1:
                    base = cursor + (idx * 11)
                    vec[base + 0] = 1.0 # Exist
                    if token == '1': vec[base + 1] = 1.0
                    if token == '2': vec[base + 2] = 1.0
                    if token == '3': vec[base + 3] = 1.0
                    if token == '4': vec[base + 4] = 1.0
                    if token == '5': vec[base + 5] = 1.0 # Jeton 5
                    
                    if token == 'Omega': vec[base + 6] = 1.0
                    if token == '>':     vec[base + 7] = 1.0
                    if token == '>>':    vec[base + 8] = 1.0
                    if token == '>>>':   vec[base + 9] = 1.0
                    if token == '>>>>':  vec[base + 10] = 1.0
        cursor += 440

        # --- 4. OWNERS ---
        for m in missions:
            c_info = m.get('card')
            owner = m.get('owner')
            col, val = self._extract_card_info(c_info)
            idx = get_card_index(col, val)
            if idx != -1 and owner is not None: 
                vec[cursor + (owner * 40) + idx] = 1.0
        cursor += 160

        # --- 5. MÉMOIRE ---
        played = game_state.get('played_history', [])
        for item in played:
            col, val = self._extract_card_info(item)
            idx = get_card_index(col, val)
            if idx != -1: vec[cursor + idx] = 1.0
        cursor += 40
        
        # --- 6. CONTEXTE ---
        if 0 <= player_idx < 4: vec[cursor + player_idx] = 1.0
        if current_trick:
            lead_player = current_trick[0]['player']
            vec[cursor + 4 + lead_player] = 1.0
        cursor += 10
        
        # --- 7. COMMUNICATIONS ---
        comms = game_state.get('communications', [])
        for comm in comms:
            p = comm['player']
            col, val = self._extract_card_info(comm['card'])
            t_type = comm['type']
            base_idx = cursor + (p * 43)
            
            idx = get_card_index(col, val)
            if idx != -1: vec[base_idx + idx] = 1.0
            
            if t_type == 'TOP': vec[base_idx + 40] = 1.0
            elif t_type == 'MID': vec[base_idx + 41] = 1.0
            elif t_type == 'BOT': vec[base_idx + 42] = 1.0
        cursor += 172
        
        return torch.FloatTensor(vec)