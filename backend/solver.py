import time
import random
from game import GameRules, Card, ROCKET

class TheCrewSolver:
    def __init__(self, game_state_json, missions, constraints=[]):
        self.original_hands = [
            [Card(c['color'], c['value']) for c in game_state_json['player_1']],
            [Card(c['color'], c['value']) for c in game_state_json['player_2']],
            [Card(c['color'], c['value']) for c in game_state_json['player_3']],
            [Card(c['color'], c['value']) for c in game_state_json['player_4']]
        ]
        self.missions = missions
        self.constraints = constraints
        
        self.iterations = 0
        self.start_time = 0
        self.solution = []
        self.memo = {}
        self.randomize_search_order = False

        # Map des cartes cibles pour accès rapide
        self.target_map = {}
        for idx, m in enumerate(missions):
            key = f"{m['card']['color']}-{m['card']['value']}"
            self.target_map[key] = {'owner': m['owner'], 'idx': idx}

        # Contraintes pré-calculées
        self.banned_players = set()
        self.trick_counts = {}
        self.trick_specific_winner = {}
        self.forbidden_wins = []
        self.balance_constraint = None
        self.min_win_value_constraints = []
        self.sequence_constraint = None

        for c in constraints:
            ctype = c.get('type')
            args = c.get('args', {}) 
            player = c.get('player') if 'player' in c else args.get('who')
            count = c.get('count') if 'count' in c else args.get('count')

            if ctype == 'NO_TRICKS':
                if player is not None: self.banned_players.add(player)
            elif ctype == 'TRICK_COUNT':
                if player is not None and count is not None: self.trick_counts[player] = count
                if 'trick' in args: self.trick_specific_winner[args['trick']] = args.get('who_idx', player)
            elif ctype == 'FORBIDDEN_WIN_CARD':
                self.forbidden_wins.append(args)
            elif ctype == 'BALANCE':
                self.balance_constraint = args.get('maxDiff', 2)
            elif ctype == 'SPECIFIC_WIN':
                if 'withCardValue' in args: self.min_win_value_constraints.append(args)
            elif ctype == 'TRICK_SEQUENCE':
                self.sequence_constraint = args.get('sequence', [])

    def solve(self, forced_first_move=None):
        self.start_time = time.time()
        self.iterations = 0
        self.solution = []
        self.memo = {}
        
        start_player = self._find_commander()
        
        initial_mission_ticks = tuple([0] * len(self.missions))
        initial_winners_count = (0, 0, 0, 0)
        initial_seq_index = 0 
        initial_specific_count = 0

        found = self._dfs(
            hands=self.original_hands, 
            current_trick=[], 
            trick_starter=start_player, 
            current_player=start_player,
            history=[],
            mission_ticks=initial_mission_ticks,
            trick_number=1,
            winners_count=initial_winners_count,
            seq_index=initial_seq_index,
            specific_win_count=initial_specific_count,
            forced_first_card=forced_first_move
        )
        
        return {
            "iterations": self.iterations,
            "solutionFound": found,
            "time": int((time.time() - self.start_time) * 1000),
            "solution_steps": self.solution
        }

    def _find_commander(self):
        for player_idx, hand in enumerate(self.original_hands):
            for card in hand:
                if card.color == ROCKET and card.value == 4:
                    return player_idx
        return 0

    def _get_state_key(self, hands, mission_ticks, trick_starter, current_trick, winners_count, seq_index, specific_win_count):
        # On utilise une signature simplifiée des mains pour le cache
        hands_sig = tuple(tuple(sorted([(c.color, c.value) for c in h], key=lambda x: (x[0], x[1]))) for h in hands)
        trick_sig = tuple((p, c.color, c.value) for p, c in current_trick)
        return (hands_sig, mission_ticks, trick_starter, trick_sig, winners_count, seq_index, specific_win_count)

    # --- NOUVEAU : OPTIMISATION DES COUPS ÉQUIVALENTS ---
    def _optimize_valid_cards(self, valid_cards, current_trick):
        """
        Réduit le nombre de cartes à tester en supprimant les doublons stratégiques.
        Si on ne joue pas la couleur demandée (défausse) et que ce n'est pas un atout,
        jouer le 3 ou le 4 d'une couleur inutile est identique.
        """
        # Si on a peu de choix, pas besoin d'optimiser
        if len(valid_cards) <= 2: return valid_cards

        optimized = []
        
        # On sépare par couleur
        by_suit = {}
        for c in valid_cards:
            if c.color not in by_suit: by_suit[c.color] = []
            by_suit[c.color].append(c)

        lead_color = current_trick[0][1].color if current_trick else None

        for color, cards in by_suit.items():
            # 1. Si c'est des Fusées : On garde tout (trop important)
            if color == ROCKET:
                optimized.extend(cards)
                continue
            
            # 2. Si c'est la couleur demandée : On garde tout (bataille précise)
            if lead_color and color == lead_color:
                optimized.extend(cards)
                continue

            # 3. Si c'est une défausse (couleur != lead_color)
            # On vérifie si certaines cartes sont des Missions
            mission_cards = []
            non_mission_cards = []
            
            for c in cards:
                key = f"{c.color}-{c.value}"
                if key in self.target_map: mission_cards.append(c)
                else: non_mission_cards.append(c)

            # On garde TOUTES les cartes liées à une mission
            optimized.extend(mission_cards)

            # Pour les cartes "neutres", on ne garde que la PLUS FAIBLE et la PLUS FORTE
            # (La faible pour garder ses forces, la forte pour se débarrasser d'un pli potentiel futur)
            if non_mission_cards:
                non_mission_cards.sort(key=lambda x: x.value)
                optimized.append(non_mission_cards[0]) # Min
                if len(non_mission_cards) > 1:
                    optimized.append(non_mission_cards[-1]) # Max
        
        return optimized

    def _check_mission_tokens(self, mission_ticks):
        token_ticks = {}
        for i, m in enumerate(self.missions):
            token = m.get('token', 'None')
            tick = mission_ticks[i]
            if token not in token_ticks: token_ticks[token] = []
            token_ticks[token].append(tick)

        # Vérification 1, 2, 3...
        check_order = ['1', '2', '3', '4', '5']
        for k in range(len(check_order) - 1):
            t_curr, t_next = check_order[k], check_order[k+1]
            if t_curr in token_ticks and t_next in token_ticks:
                tick_c, tick_n = max(token_ticks[t_curr]), max(token_ticks[t_next])
                if tick_c > 0 and tick_n > 0 and tick_c > tick_n: return False
                if tick_n > 0 and tick_c == 0: return False

        # Vérification >, >>...
        arrow_order = ['>', '>>', '>>>', '>>>>']
        for k in range(len(arrow_order) - 1):
            t_curr, t_next = arrow_order[k], arrow_order[k+1]
            if t_curr in token_ticks and t_next in token_ticks:
                tick_c, tick_n = max(token_ticks[t_curr]), max(token_ticks[t_next])
                if tick_c > 0 and tick_n > 0 and tick_c > tick_n: return False
                if tick_n > 0 and tick_c == 0: return False
        
        return True

    def _dfs(self, hands, current_trick, trick_starter, current_player, history, mission_ticks, trick_number, winners_count, seq_index, specific_win_count, forced_first_card=None):
        self.iterations += 1
        # Limite de sécurité (peut être augmentée grâce au pruning)
        if self.iterations > 2000000: return False

        # Cache basique pour éviter de recalculer les mêmes fins de partie
        if len(current_trick) == 0:
            state_key = self._get_state_key(hands, mission_ticks, trick_starter, current_trick, winners_count, seq_index, specific_win_count)
            if state_key in self.memo: return False

        # --- VICTOIRE ---
        if all(len(h) == 0 for h in hands):
            # Tous les ticks > 0 ?
            if not all(t > 0 for t in mission_ticks): return False
            # Ordre respecté ?
            if not self._check_mission_tokens(mission_ticks): return False
            
            # Omega check
            omega_idx = next((i for i, m in enumerate(self.missions) if m.get('token') == 'Omega'), -1)
            if omega_idx != -1:
                omega_tick = mission_ticks[omega_idx]
                other_ticks = [t for i, t in enumerate(mission_ticks) if i != omega_idx]
                if other_ticks and omega_tick < max(other_ticks): return False

            # Constraints check
            if self.balance_constraint:
                if max(winners_count) - min(winners_count) > self.balance_constraint: return False
            for c in self.min_win_value_constraints:
                if specific_win_count < c.get('minCount', 1): return False
            for p, count in self.trick_counts.items():
                if winners_count[p] != count: return False

            self.solution = history
            return True

        # --- JEU ---
        my_hand = hands[current_player]
        lead_card = current_trick[0][1] if current_trick else None
        valid_cards = [c for c in my_hand if GameRules.is_move_valid(my_hand, c, lead_card)]

        # --- PRUNING JOUEUR 3 (Optimisation Critique) ---
        if len(current_trick) == 3:
            optimized_trick_cards = []
            for card in valid_cards:
                temp_trick = current_trick + [(current_player, card)]
                cards_obj = [None]*4
                for p, c in temp_trick: cards_obj[p] = c
                winner = GameRules.get_trick_winner(cards_obj, trick_starter)
                w_card = cards_obj[winner]

                # Check rapide des contraintes "Hard" (Echec immédiat)
                if winner in self.banned_players: continue 
                if winner in self.trick_counts and winners_count[winner] + 1 > self.trick_counts[winner]: continue
                if trick_number in self.trick_specific_winner and winner != self.trick_specific_winner[trick_number]: continue

                is_forbidden = False
                for f in self.forbidden_wins:
                    if 'value' in f and w_card.value == f['value']: is_forbidden = True
                    if 'color' in f and w_card.color == f['color']: is_forbidden = True
                if is_forbidden: continue

                if self.sequence_constraint and w_card.color == ROCKET:
                    expected_val = int(self.sequence_constraint[seq_index].replace('R','').replace('ocket',''))
                    if w_card.value != expected_val: continue

                # Check Mission Ownership
                mission_fail = False
                for p_idx, c_played in temp_trick:
                    key = f"{c_played.color}-{c_played.value}"
                    if key in self.target_map:
                        target = self.target_map[key]
                        if winner != target['owner']: mission_fail = True; break
                if mission_fail: continue
                
                optimized_trick_cards.append(card)
            
            valid_cards = optimized_trick_cards
            if not valid_cards:
                if len(current_trick) == 0: self.memo[state_key] = False
                return False

        # --- LOGIQUE DE FORCE POUR MCTS ---
        if forced_first_card and len(history) == 0 and current_player == forced_first_card['player']:
            target = forced_first_card['card']
            forced_c = next((c for c in valid_cards if c.color == target['color'] and c.value == target['value']), None)
            if forced_c:
                valid_cards = [forced_c]
            else:
                return False 

        # --- OPTIMISATION GENERALE DES COUPS (Pruning) ---
        # Si on n'est pas le 4ème joueur (déjà traité plus haut)
        if len(current_trick) < 3:
            valid_cards = self._optimize_valid_cards(valid_cards, current_trick)

        # --- TRI / SHUFFLE ---
        if self.randomize_search_order:
            random.shuffle(valid_cards)
        else:
            valid_cards.sort(key=lambda x: (x.color == ROCKET, x.value), reverse=True)

        for card in valid_cards:
            new_hands = [h[:] for h in hands]
            new_hands[current_player].remove(card)
            new_trick = current_trick + [(current_player, card)]
            move_info = {"player": current_player, "card": {"color": card.color, "value": card.value}}
            
            if len(new_trick) == 4:
                # FIN DE PLI
                cards_obj = [None]*4
                for p, c in new_trick: cards_obj[p] = c
                winner = GameRules.get_trick_winner(cards_obj, trick_starter)
                w_card = cards_obj[winner]

                # Update compteurs
                new_winners_count = list(winners_count)
                new_winners_count[winner] += 1
                new_winners_count = tuple(new_winners_count)

                # Update Specific Win
                new_spec_count = specific_win_count
                for c in self.min_win_value_constraints:
                    if w_card.value == c.get('withCardValue'): new_spec_count += 1

                # Update Sequence
                new_seq_index = seq_index
                if self.sequence_constraint and w_card.color == ROCKET:
                    expected = int(self.sequence_constraint[seq_index].replace('R',''))
                    if w_card.value == expected: new_seq_index += 1 

                # Update Missions
                new_mission_ticks = list(mission_ticks)
                for p_idx, c_played in new_trick:
                    key = f"{c_played.color}-{c_played.value}"
                    if key in self.target_map:
                        target = self.target_map[key]
                        if new_mission_ticks[target['idx']] == 0:
                            new_mission_ticks[target['idx']] = trick_number
                
                new_mission_ticks_tuple = tuple(new_mission_ticks)
                
                # Check immédiat des tokens pour couper la branche si fail
                if not self._check_mission_tokens(new_mission_ticks_tuple):
                    continue

                if self._dfs(new_hands, [], winner, winner, history + [move_info], new_mission_ticks_tuple, trick_number + 1, new_winners_count, new_seq_index, new_spec_count, forced_first_card=None):
                    return True
            
            else:
                # CONTINUER LE PLI
                if self._dfs(new_hands, new_trick, trick_starter, (current_player + 1) % 4, history + [move_info], mission_ticks, trick_number, winners_count, seq_index, specific_win_count, forced_first_card=None):
                    return True

        if len(current_trick) == 0:
            self.memo[state_key] = False
            
        return False