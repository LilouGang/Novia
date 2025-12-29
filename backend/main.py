import asyncio
import json
import traceback 
from typing import List, Dict, Any, Optional
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import StreamingResponse
from pydantic import BaseModel

# INITIALISATION DES MODULES AVEC GESTION D'ERREURS
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

# INITIALISATION DU JEU (MODE DIEU)
if Game:
    try:
        print("⏳ Initialisation du Jeu (Mode Dieu)...")
        game_instance = Game(allow_communication=False)
        print("✅ Jeu prêt (Communication OFF).")
    except Exception as e:
        print(f"❌ CRASH Initialisation Jeu: {e}")
        traceback.print_exc()
else:
    print("⚠️ Classe Game non disponible, le mode Dieu ne fonctionnera pas.")

# INITIALISATION DU TRAINER (MODE IA)
if Trainer:
    try:
        print("⏳ Initialisation du Trainer (Chargement Cerveau)...")
        ai_trainer = Trainer()
        print("✅ Trainer prêt.")
    except Exception as e:
        trainer_error = str(e)
        print(f"❌ CRASH Initialisation Trainer: {e}")
        traceback.print_exc()
else:
    print("⚠️ Classe Trainer non disponible, l'entraînement ne fonctionnera pas.")


# --- MODÈLES DE DONNÉES ---

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
        raise HTTPException(status_code=500, detail="Jeu non initialisé (vérifiez les logs backend)")
    
    try:
        game_instance.deal_cards()
        return game_instance.get_state()
    except Exception as e:
        print(f"❌ Erreur pendant deal_cards: {e}")
        raise HTTPException(status_code=500, detail=str(e))

@app.post("/train-ai")
async def train_ai_endpoint(req: TrainRequest):
    global training_lock
    
    # 1. Vérification du Verrou
    if training_lock:
        print("⛔ REJET : Un entraînement est déjà en cours !")
        async def busy_stream():
            yield json.dumps({"type": "TRAINING_COMPLETE", "error": "Entraînement déjà en cours !"}) + "\n"
        return StreamingResponse(busy_stream(), media_type="application/x-ndjson")

    if not ai_trainer:
        return StreamingResponse(iter([json.dumps({"error": "Trainer non chargé"})]), media_type="application/json")

    print(f"🔔 REÇU /train-ai : {req.episodes} épisodes, Mission {req.mission_id}")
    
    # 2. Activation du Verrou
    training_lock = True 

    async def safe_stream():
        global training_lock
        try:
            # On force la conversion en int pour être sûr
            safe_episodes = int(req.episodes)
            print("▶️ Lancement du stream...")
            
            async for chunk in ai_trainer.train_stream(max_episodes=safe_episodes, mission_id=req.mission_id):
                yield chunk
                
        except Exception as e:
            print(f"❌ CRASH PENDANT STREAM: {e}")
            traceback.print_exc()
            yield json.dumps({"type": "TRAINING_COMPLETE", "error": str(e)}) + "\n"
        finally:
            # 3. Libération du Verrou (Quoi qu'il arrive)
            print("🔓 Fin de l'entraînement, verrou libéré.")
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
        if not TheCrewSolver:
             return {"error": "Module Solver non chargé"}
             
        loop = asyncio.get_event_loop()
        def run_god_solver():
            try:
                solver = TheCrewSolver(game_state, req.missions, req.constraints)
                return solver.solve()
            except Exception as e:
                print(f"❌ Erreur Solver: {e}")
                traceback.print_exc()
                return {"error": str(e)}
        
        result = await loop.run_in_executor(None, run_god_solver)
        return {"stats": result}

    elif req.mode == "AI_DL":
        if not ai_trainer:
             return {"error": f"Trainer non initialisé: {trainer_error}", "probabilities": {}, "bestMove": None}
             
        try:
            probs = ai_trainer.get_action_probabilities(
                game_state, 
                req.agent_player_idx, 
                req.missions
            )
            best_move = max(probs, key=probs.get) if probs else None
            return {
                "type": "PLAY",
                "probabilities": probs,
                "bestMove": best_move,
                "solutionFound": True
            }
        except Exception as e:
            print(f"Erreur AI_DL: {e}")
            traceback.print_exc()
            return {"error": str(e), "probabilities": {}, "bestMove": None}

    return {"error": "Mode inconnu."}