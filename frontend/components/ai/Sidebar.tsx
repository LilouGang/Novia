import React, { useState } from 'react';
import { REAL_MISSION_LOGBOOK } from '../../data/real_missions';
import { TrainingStats, ReplayStep, SavedReplay } from '../../types';

type AISidebarProps = {
    // --- ÉTATS ---
    currentStepText: string;
    logs: string[];
    isThinking: boolean;
    activePlayer: number;

    // --- MODES ---
    isDevMode: boolean;        // Vrai si localhost
    isTraining: boolean;       // Vrai si entraînement en cours
    isAutoPlaying: boolean;    // Vrai si le mode démo tourne
    isReplayMode: boolean;     // Vrai si on regarde un replay
    
    // --- DATA ---
    trainingStats: TrainingStats | null;
    replayData: ReplayStep[] | null;
    milestones: SavedReplay[];
    currentMilestoneId: number | null;
    
    // --- ACTIONS ---
    onStartTraining: (count: number, missionId: number) => void; 
    onLoadReplay: (data?: ReplayStep[], id?: number) => void;
    onNextReplayStep: () => void;
    onExitReplay: () => void;
    
    // Actions Jeu / Démo
    initializeMission: (id: number) => void; // Distribuer
    playOneMove: () => void;                 // 1 coup
    toggleAutoPlay: () => void;              // Auto
    onReset: () => void;
    
    // Navigation
    onBackToMenu?: () => void;
};

export default function AISidebar({ 
    currentStepText, logs, isThinking, activePlayer,
    isDevMode, isTraining, isAutoPlaying, isReplayMode,
    trainingStats, milestones, currentMilestoneId,
    onReset, onStartTraining, onLoadReplay, onNextReplayStep, onExitReplay, 
    initializeMission, playOneMove, toggleAutoPlay,
    onBackToMenu
}: AISidebarProps) {
    
    // États locaux pour le formulaire
    const [selectedMission, setSelectedMission] = useState(1);
    const [trainCount, setTrainCount] = useState(1000);

    return (
        <div className="w-96 bg-[#0f172a] border-r border-gray-800 flex flex-col h-full shadow-2xl z-20 font-sans text-gray-300">
            
            {/* =========================================================================
               1. HEADER & NAVIGATION
               ========================================================================= */}
            <div className="p-4 border-b border-gray-800 bg-[#1e293b] flex justify-between items-center shadow-md z-30">
                <div>
                    <h1 className="text-xl font-black text-white tracking-wider flex items-center gap-2">
                        <span>Novia <span className="text-purple-400">Agent</span></span>
                    </h1>
                    <div className="text-[9px] text-gray-500 font-bold tracking-widest mt-0.5 flex gap-2">
                        <span>Q-LEARNING V2</span>
                        {isDevMode && <span className="text-yellow-500 bg-yellow-900/20 px-1 rounded">DEV MODE</span>}
                    </div>
                </div>

                {onBackToMenu && (
                    <button 
                        onClick={onBackToMenu}
                        className="text-[10px] bg-gray-800 hover:bg-gray-700 text-gray-400 hover:text-white px-3 py-1.5 rounded border border-gray-700 transition-all uppercase font-bold flex items-center gap-1 group"
                    >
                        <span>Menu</span>
                        <span className="group-hover:-translate-x-0.5 transition-transform">↩</span>
                    </button>
                )}
            </div>
            
            {/* =========================================================================
               2. PANNEAU DE CONTRÔLE PRINCIPAL
               ========================================================================= */}
            <div className="p-5 border-b border-gray-800 bg-[#1e293b]/50 relative space-y-4">
                
                {/* A. SÉLECTEUR DE MISSION (Visible tout le temps sauf Replay/Training) */}
                {!isTraining && !isReplayMode && (
                    <div className="space-y-1">
                        <div className="text-[9px] text-gray-500 uppercase font-bold tracking-wider">Configuration Mission</div>
                        <div className="relative group">
                            <select 
                                className="w-full appearance-none bg-gray-900 text-white text-[10px] font-medium p-2.5 pl-3 rounded border border-gray-700 hover:border-gray-500 focus:border-blue-500 outline-none cursor-pointer transition-colors" 
                                value={selectedMission} 
                                onChange={(e) => setSelectedMission(Number(e.target.value))}
                            >
                                <option value={0} className="font-bold text-yellow-400 bg-gray-800">★ MISSION ALÉATOIRE (Mix)</option>
                                {REAL_MISSION_LOGBOOK.map(m => (
                                    <option key={m.id} value={m.id}>
                                        MISSION {m.id} - {m.description.substring(0, 35)}{m.description.length > 35 ? '...' : ''}
                                    </option>
                                ))}
                            </select>
                            <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500 text-[8px]">▼</div>
                        </div>
                    </div>
                )}

                {/* B. BOUTONS D'ACTION (JEU / PUBLIC) */}
                {!isTraining && !isReplayMode && (
                    <div className="grid grid-cols-2 gap-2">
                        {/* 1. DISTRIBUER */}
                        <button 
                            onClick={() => initializeMission(selectedMission)}
                            className="col-span-2 h-10 bg-blue-600 hover:bg-blue-500 text-white text-xs font-black tracking-wide rounded shadow-lg transition-all active:scale-95 flex items-center justify-center gap-2 border-t border-blue-400"
                        >
                            <span>NOUVELLE DONNE</span>
                            <span>🃏</span>
                        </button>
                        
                        {/* 2. JOUER 1 COUP */}
                        <button 
                            onClick={playOneMove}
                            disabled={isThinking || isAutoPlaying}
                            className={`h-9 rounded text-[10px] font-bold border transition-all flex items-center justify-center gap-1
                                ${isThinking ? 'bg-gray-800 text-gray-600 border-gray-700' : 'bg-gray-700 hover:bg-gray-600 text-white border-gray-600'}`}
                        >
                            {isThinking ? '...' : '1 COUP'} ▶
                        </button>

                        {/* 3. AUTO PLAY */}
                        <button 
                            onClick={toggleAutoPlay}
                            className={`h-9 rounded text-[10px] font-bold border transition-all flex items-center justify-center gap-1
                                ${isAutoPlaying 
                                    ? 'bg-red-500/20 text-red-400 border-red-500/50 animate-pulse' 
                                    : 'bg-green-600/20 hover:bg-green-600/30 text-green-400 border-green-500/30'}`}
                        >
                            {isAutoPlaying ? 'STOP AUTO' : 'AUTO PLAY'} ⏩
                        </button>
                    </div>
                )}

                {/* C. ZONE ADMIN / ENTRAINEMENT (Visible seulement en Dev Mode) */}
                {isDevMode && !isTraining && !isReplayMode && (
                    <div className="pt-4 mt-2 border-t border-dashed border-gray-700">
                        <div className="flex justify-between items-end mb-2">
                            <span className="text-[9px] text-yellow-500 font-bold uppercase">Zone Entraînement (Local)</span>
                        </div>
                        <div className="flex gap-2">
                            <input 
                                type="number" 
                                value={trainCount}
                                onChange={(e) => setTrainCount(Number(e.target.value))}
                                className="w-20 bg-gray-900 border border-yellow-500/30 text-white text-xs font-bold text-center rounded focus:outline-none focus:border-yellow-500 h-9"
                                step="100" min="100"
                            />
                            <button 
                                onClick={() => onStartTraining(trainCount, selectedMission)} 
                                className="flex-1 h-9 bg-yellow-700 hover:bg-yellow-600 text-white text-[10px] font-black tracking-wide rounded shadow transition-all active:scale-95 flex items-center justify-center gap-2 border-t border-yellow-500/50"
                            >
                                <span>LANCER TRAIN</span>
                                <span>⚡</span>
                            </button>
                        </div>
                    </div>
                )}
            </div>

            {/* =========================================================================
               3. PANNEAU DE STATISTIQUES & PROGRESSION
               ========================================================================= */}
            
            {/* A. ENTRAINEMENT EN COURS */}
            {isTraining && (
                <div className="p-5 border-b border-gray-800 bg-[#0f172a] animate-fade-in space-y-3">
                    <div className="flex justify-between items-baseline text-[10px] font-mono font-bold text-gray-400">
                        <span className="text-white animate-pulse">TRAINING...</span>
                        <span>SESSION: <span className="text-blue-400">{trainingStats?.total_lifetime_games}</span></span>
                    </div>
                    
                    {/* Barre de progression */}
                    <div className="relative w-full h-2 bg-gray-900 rounded-full overflow-hidden border border-white/5">
                        <div 
                            className="absolute top-0 left-0 h-full bg-gradient-to-r from-purple-600 to-blue-500 transition-all duration-300" 
                            style={{ width: `${((trainingStats?.episode||0)/(trainingStats?.max_episodes||1))*100}%` }}
                        ></div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-2 mt-2">
                        <div className="bg-black/30 p-2 rounded border border-white/5 flex flex-col items-center">
                            <span className="text-[8px] text-gray-500 uppercase font-bold">Score Moyen</span>
                            <span className={`text-base font-black font-mono ${(trainingStats?.avg_reward||0)>0?'text-green-400':'text-red-400'}`}>
                                {trainingStats?.avg_reward?.toFixed(1) || '0.0'}
                            </span>
                        </div>
                        <div className="bg-black/30 p-2 rounded border border-white/5 flex flex-col items-center">
                            <span className="text-[8px] text-gray-500 uppercase font-bold">Exploration</span>
                            <span className="text-base font-black font-mono text-blue-400">
                                {((trainingStats?.epsilon || 0) * 100).toFixed(1)}%
                            </span>
                        </div>
                    </div>
                </div>
            )}

            {/* B. MODE REPLAY */}
            {isReplayMode && (
                <div className="p-4 bg-blue-950/20 border-b border-blue-500/20 animate-slide-in">
                    <div className="flex justify-between items-center mb-3">
                        <div className="flex flex-col">
                            <span className="text-[8px] text-blue-400 font-bold uppercase tracking-wider">Mode Replay</span>
                            <span className="text-xs font-black text-white">ARCHIVE #{currentMilestoneId}</span>
                        </div>
                        <button onClick={onExitReplay} className="text-red-400 hover:text-white hover:bg-red-500/20 text-[9px] font-bold px-2 py-1 rounded transition-colors border border-transparent hover:border-red-500/30">
                            FERMER
                        </button>
                    </div>
                    <button 
                        onClick={onNextReplayStep} 
                        className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white text-xs font-black rounded shadow border-t border-blue-400 active:scale-[0.98] transition-all"
                    >
                        ÉTAPE SUIVANTE ▶
                    </button>
                </div>
            )}

            {/* =========================================================================
               4. ARCHIVES / MILESTONES (Seulement si des sauvegardes existent)
               ========================================================================= */}
            {!isReplayMode && milestones.length > 0 && (
                <div className="p-4 border-b border-gray-800 bg-[#1e293b]/30">
                    <h2 className="text-[9px] font-black text-gray-500 mb-2 uppercase flex justify-between items-center tracking-widest">
                        <span>Archives (Meilleures parties)</span>
                        <span className="bg-gray-800 text-gray-300 px-1.5 py-0.5 rounded text-[8px]">{milestones.length}</span>
                    </h2>
                    <div className="grid grid-cols-3 gap-2 max-h-32 overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-gray-700">
                        {milestones.map((m, i) => (
                            <button 
                                key={i}
                                onClick={() => onLoadReplay(m.replay, m.episode)}
                                className="bg-gray-800/50 hover:bg-gray-700 border border-gray-700 hover:border-blue-500 rounded p-1.5 flex flex-col items-center transition-all group relative overflow-hidden"
                            >
                                <span className="text-[8px] text-blue-300/70 font-bold group-hover:text-blue-300 mb-0.5">#{m.episode}</span>
                                <span className={`text-[10px] font-black font-mono ${m.reward > 0 ? "text-green-400" : "text-red-400"}`}>
                                    {m.reward.toFixed(0)}
                                </span>
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {/* =========================================================================
               5. CONSOLE LOGS
               ========================================================================= */}
            <div className="p-3 border-b border-gray-800 bg-[#0f172a] shadow-inner flex items-center justify-between">
                <div className="text-xs font-bold text-blue-400 flex items-center gap-2">
                   {isThinking ? (
                       <div className="w-3 h-3 border-2 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
                   ) : (
                       <span className="text-blue-500">ℹ</span>
                   )}
                   <span className="truncate max-w-[200px]">{currentStepText}</span>
                </div>
                <button onClick={onReset} className="text-[9px] text-red-500/50 hover:text-red-400 uppercase font-bold">
                    Reset
                </button>
            </div>

            <div className="flex-1 overflow-y-auto p-3 space-y-1.5 font-mono text-[9px] text-gray-500 bg-black/20 scrollbar-thin scrollbar-thumb-gray-800">
                {logs.length === 0 && <div className="text-center italic opacity-30 mt-10">En attente d'actions...</div>}
                {logs.map((log, i) => (
                    <div key={i} className="border-l-2 border-gray-800 pl-2 hover:border-gray-600 hover:text-gray-300 transition-colors break-words leading-tight">
                        {log}
                    </div>
                ))}
            </div>
            
            {/* FOOTER */}
            <div className="p-1 bg-black text-[8px] text-center text-gray-700 font-mono uppercase tracking-widest">
                Novia Neural v2.0 • {isDevMode ? 'Local Dev' : 'Prod Cloud'}
            </div>
        </div>
    );
}