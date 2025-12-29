def get_mission_constraints(mission_id):
    # --- 1-10 ---
    if mission_id == 1: return {'count': 1, 'type': 'NORMAL'}
    if mission_id == 2: return {'count': 2, 'type': 'NORMAL'}
    if mission_id == 3: return {'count': 2, 'type': 'ORDER_ABSOLUTE'}
    if mission_id == 4: return {'count': 3, 'type': 'NORMAL'}
    if mission_id == 5: return {'count': 3, 'type': 'NORMAL'}
    if mission_id == 6: return {'count': 3, 'type': 'ORDER_RELATIVE'}
    if mission_id == 7: return {'count': 3, 'type': 'OMEGA'}
    if mission_id == 8: return {'count': 3, 'type': 'ORDER_ABSOLUTE'}
    if mission_id == 9: return {'count': 3, 'type': 'NORMAL'}
    if mission_id == 10: return {'count': 4, 'type': 'NORMAL'}
    
    # --- 11-20 ---
    if mission_id == 11: return {'count': 4, 'type': 'ORDER_ABSOLUTE'}
    if mission_id == 12: return {'count': 4, 'type': 'OMEGA'}
    if mission_id == 13: return {'count': 4, 'type': 'NORMAL'}
    if mission_id == 14: return {'count': 4, 'type': 'ORDER_RELATIVE'}
    if mission_id == 15: return {'count': 4, 'type': 'ORDER_ABSOLUTE'}
    if mission_id == 16: return {'count': 4, 'type': 'NORMAL'}
    if mission_id == 17: return {'count': 5, 'type': 'NORMAL'}
    if mission_id == 18: return {'count': 5, 'type': 'NORMAL'}
    if mission_id == 19: return {'count': 5, 'type': 'ORDER_ABSOLUTE'}
    if mission_id == 20: return {'count': 5, 'type': 'NORMAL'}
    
    # --- 21-30 ---
    if mission_id == 21: return {'count': 5, 'type': 'ORDER_ABSOLUTE'}
    if mission_id == 22: return {'count': 5, 'type': 'ORDER_RELATIVE'}
    if mission_id == 23: return {'count': 5, 'type': 'ORDER_ABSOLUTE'}
    if mission_id == 24: return {'count': 6, 'type': 'NORMAL'}
    if mission_id == 25: return {'count': 6, 'type': 'ORDER_RELATIVE'}
    if mission_id == 26: return {'count': 6, 'type': 'NORMAL'}
    if mission_id == 27: return {'count': 6, 'type': 'NORMAL'}
    if mission_id == 28: return {'count': 6, 'type': 'ORDER_ABSOLUTE_OMEGA'}
    if mission_id == 29: return {'count': 6, 'type': 'NORMAL'}
    if mission_id == 30: return {'count': 6, 'type': 'ORDER_RELATIVE'}
    
    # --- 31-40 ---
    if mission_id == 31: return {'count': 6, 'type': 'ORDER_ABSOLUTE'}
    if mission_id == 32: return {'count': 7, 'type': 'NORMAL'}
    if mission_id == 33: return {'count': 7, 'type': 'NORMAL'}
    if mission_id == 34: return {'count': 7, 'type': 'NORMAL'}
    if mission_id == 35: return {'count': 7, 'type': 'ORDER_RELATIVE'}
    if mission_id == 36: return {'count': 7, 'type': 'ORDER_ABSOLUTE'}
    if mission_id == 37: return {'count': 8, 'type': 'NORMAL'}
    if mission_id == 38: return {'count': 8, 'type': 'NORMAL'}
    if mission_id == 39: return {'count': 8, 'type': 'ORDER_RELATIVE'}
    if mission_id == 40: return {'count': 8, 'type': 'ORDER_ABSOLUTE'}
    
    # --- 41-50 ---
    if mission_id == 41: return {'count': 8, 'type': 'NORMAL'}
    if mission_id == 42: return {'count': 9, 'type': 'NORMAL'}
    if mission_id == 43: return {'count': 9, 'type': 'NORMAL'}
    if mission_id == 44: return {'count': 9, 'type': 'NORMAL'}
    if mission_id == 45: return {'count': 9, 'type': 'ORDER_RELATIVE'}
    if mission_id == 46: return {'count': 9, 'type': 'NORMAL'}
    if mission_id == 47: return {'count': 10, 'type': 'NORMAL'}
    if mission_id == 48: return {'count': 9, 'type': 'OMEGA'}
    if mission_id == 49: return {'count': 10, 'type': 'ORDER_RELATIVE'}
    if mission_id == 50: return {'count': 10, 'type': 'NORMAL'}
    
    return {'count': 1, 'type': 'NORMAL'}