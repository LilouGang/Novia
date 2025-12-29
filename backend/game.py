import random

COLORS = ['Blue', 'Green', 'Pink', 'Yellow']
ROCKET = 'Rocket'

class Card:
    def __init__(self, color, value, owner=-1):
        self.color = color
        self.value = value
        self.owner = owner

    def __repr__(self):
        return f"{self.color}-{self.value}"

    def __eq__(self, other):
        if isinstance(other, dict):
            return self.color == other.get('color') and self.value == other.get('value')
        return isinstance(other, Card) and self.color == other.color and self.value == other.value
    
    def __hash__(self):
        return hash((self.color, self.value))

# --- RÈGLES DU JEU ---
class GameRules:
    @staticmethod
    def is_move_valid(hand, card, lead_card=None):
        if card not in hand: return False
        if not lead_card: return True
        if card.color == lead_card.color: return True
        has_lead_color = any(c.color == lead_card.color for c in hand)
        if has_lead_color: return False
        return True

    @staticmethod
    def get_trick_winner(cards, start_player):
        best_player = start_player
        best_card = cards[start_player]
        lead_color = best_card.color

        for i in range(1, 4):
            p_idx = (start_player + i) % 4
            current_card = cards[p_idx]
            
            if current_card.color == ROCKET:
                if best_card.color != ROCKET:
                    best_card = current_card
                    best_player = p_idx
                elif current_card.value > best_card.value:
                    best_card = current_card
                    best_player = p_idx
            elif current_card.color == lead_color and best_card.color != ROCKET:
                if current_card.value > best_card.value:
                    best_card = current_card
                    best_player = p_idx
        return best_player

# --- MOTEUR DE JEU ---
class Game:
    def __init__(self, allow_communication=True):
        self.players = [[], [], [], []] 
        self.current_trick = []   
        self.played_history = []  
        self.active_player = 0    
        self.trick_winner_history = [] 
        self.communications = {} 
        self.allow_communication = allow_communication

    @property
    def player_1(self): return self.players[0]
    @player_1.setter
    def player_1(self, val): self.players[0] = val
    @property
    def player_2(self): return self.players[1]
    @player_2.setter
    def player_2(self, val): self.players[1] = val
    @property
    def player_3(self): return self.players[2]
    @player_3.setter
    def player_3(self, val): self.players[2] = val
    @property
    def player_4(self): return self.players[3]
    @player_4.setter
    def player_4(self, val): self.players[3] = val

    def deal_cards(self):
        deck = []
        for color in COLORS:
            for value in range(1, 10):
                deck.append(Card(color, value))
        for value in range(1, 5):
            deck.append(Card(ROCKET, value))
        
        random.shuffle(deck)
        self.players = [deck[0:10], deck[10:20], deck[20:30], deck[30:40]]
        
        for p_idx, hand in enumerate(self.players):
            self._sort_hand(hand)
            for card in hand:
                card.owner = p_idx
        
        found = False
        for p_idx, hand in enumerate(self.players):
            for card in hand:
                if card.color == ROCKET and card.value == 4:
                    self.active_player = p_idx
                    found = True
                    break
            if found: break
        if not found: self.active_player = 0
        
        self.communications = {}

    def _sort_hand(self, hand):
        order = {ROCKET: 0, 'Blue': 1, 'Green': 2, 'Pink': 3, 'Yellow': 4}
        hand.sort(key=lambda c: (order.get(c.color, 99), c.value))

    def get_hand(self, player_idx):
        return self.players[player_idx]

    def get_state(self):
        comms_list = []
        if self.allow_communication:
            comms_list = [
                {'player': p, 'card': {'color': c['card'].color, 'value': c['card'].value}, 'type': c['type']}
                for p, c in self.communications.items()
            ]

        return {
            "players": [[{'color': c.color, 'value': c.value} for c in p] for p in self.players],
            "current_trick": self.current_trick,
            "played_history": self.played_history,
            "active_player": self.active_player,
            "communications": comms_list
        }

    def is_game_over(self):
        return all(len(h) == 0 for h in self.players)

    # --- CORRECTION ICI : ON RENVOIE MAINTENANT (BOOL, STRING) ---
    def is_move_valid(self, player_idx, card):
        valid = GameRules.is_move_valid(self.players[player_idx], card, self.current_trick[0]['card'] if self.current_trick else None)
        return valid, "OK" if valid else "Invalid Move"

    # --- COMMUNICATION ---
    def check_communication_validity(self, player_idx, card):
        if not self.allow_communication: return False, "Disabled", None
        if player_idx in self.communications: return False, "Déjà communiqué", None
        hand = self.players[player_idx]
        if card not in hand: return False, "Carte non possédée", None
        if card.color == ROCKET: return False, "Interdit Fusée", None

        same_color = [c for c in hand if c.color == card.color]
        token_type = None
        if len(same_color) == 1: token_type = "MID"
        elif card.value == max(c.value for c in same_color): token_type = "TOP"
        elif card.value == min(c.value for c in same_color): token_type = "BOT"
        else: return False, "Ni Max, Ni Min, Ni Unique", None

        return True, "OK", token_type

    def communicate_card(self, player_idx, card):
        if not self.allow_communication: return False, "Disabled", None
        valid, reason, token = self.check_communication_validity(player_idx, card)
        if not valid: return False, reason, None
        self.communications[player_idx] = {'card': card, 'type': token}
        return True, "OK", token

    def play_card(self, player_idx, card):
        # Cette ligne plantait avant car is_move_valid ne renvoyait qu'une valeur
        valid, reason = self.is_move_valid(player_idx, card)
        if not valid: return False, reason, None

        hand = self.players[player_idx]
        for i, c in enumerate(hand):
            if c == card:
                hand.pop(i)
                break
        
        move = {'player': player_idx, 'card': card}
        self.current_trick.append(move)
        self.played_history.append(move)

        winner_idx = None
        if len(self.current_trick) == 4:
            cards_obj = [None]*4
            for m in self.current_trick: cards_obj[m['player']] = m['card']
            # On utilise GameRules pour la résolution
            start_p = self.current_trick[0]['player']
            winner_idx = GameRules.get_trick_winner(cards_obj, start_p)
            
            self.trick_winner_history.append(winner_idx)
            self.active_player = winner_idx 
            self.current_trick = [] 
        else:
            self.active_player = (self.active_player + 1) % 4

        return True, "OK", winner_idx