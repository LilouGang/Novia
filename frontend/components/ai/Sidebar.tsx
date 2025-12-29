import React, { useState } from 'react';
import { REAL_MISSION_LOGBOOK } from '../../data/real_missions';
import { TrainingStats, ReplayStep, SavedReplay } from '../../types';

type AISidebarProps = {
    currentStepText: string;
    logs: string[];
    isThinking: boolean;
    isTraining: boolean;
    trainingStats: TrainingStats | null;
    replayData: ReplayStep[] | null;
    isReplayMode: boolean;
    milestones: SavedReplay[];
    currentMilestoneId: number | null;
    
    onStartTraining: (count: number, missionId: number) => void; 
    onLoadReplay: (data?: ReplayStep[], id?: number) => void;
    onNextStep: () => void;
    onLoadMission: (id: number) => void;
    onReset: () => void;
    onNextReplayStep: () => void;
    onExitReplay: () => void;
    // Prop optionnelle pour la compatibilité, mais recommandée
    onBackToMenu?: () => void;
};

export default function AISidebar({ 
    currentStepText, logs, isThinking, isTraining, trainingStats, replayData, isReplayMode, milestones, currentMilestoneId,
    onReset, onStartTraining, onLoadReplay, onNextReplayStep, onExitReplay, onLoadMission, onNextStep, 
    onBackToMenu
}: AISidebarProps) {
    const [selectedMission, setSelectedMission] = useState(1);
    const [trainCount, setTrainCount] = useState(100);

    return (
        <div className="w-96 bg-[#0f172a] border-r border-gray-800 flex flex-col h-full shadow-2xl z-20 font-sans text-gray-300">
            
            {/* --- HEADER & NAVIGATION --- */}
            <div className="p-4 border-b border-gray-800 bg-[#1e293b] flex justify-between items-center shadow-md z-30">
                <div>
                    <h1 className="text-xl font-black text-white tracking-wider flex items-center gap-2">
                        <span>Novia <span className="text-purple-400">Agent</span></span>
                    </h1>
                    <div className="text-[9px] text-gray-500 font-bold tracking-widest mt-0.5">
                        Q-Learning Algorithm
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
            
            {/* --- CONTROLES D'ENTRAINEMENT --- */}
            <div className="p-5 border-b border-gray-800 bg-[#1e293b]/50 relative">
                
                {/* 1. CONFIGURATION (Visible si inactif) */}
                {!isTraining && !isReplayMode && (
                    <div className="animate-fade-in">
                        <div className="flex justify-between items-end mb-1">
                            <span className="text-[9px] text-gray-500 font-bold uppercase">Durée (Épisodes)</span>
                            <span className="text-[9px] text-gray-500 font-bold uppercase">Action</span>
                        </div>
                        <div className="flex gap-2">
                            <input 
                                type="number" 
                                value={trainCount}
                                onChange={(e) => setTrainCount(Number(e.target.value))}
                                className="w-24 bg-gray-900 border border-purple-500/30 text-white text-xs font-bold text-center rounded focus:outline-none focus:border-purple-500 h-9 transition-colors"
                                step="100"
                                min="100"
                            />
                            <button 
                                onClick={() => onStartTraining(trainCount, selectedMission)} 
                                className="flex-1 h-9 bg-purple-600 hover:bg-purple-500 text-white text-xs font-black tracking-wide rounded shadow-lg shadow-purple-900/20 transition-all active:scale-95 flex items-center justify-center gap-2 border-t border-purple-400"
                            >
                                <span>LANCER L'ENTRAÎNEMENT</span>
                                <span className="text-purple-200">▶</span>
                            </button>
                        </div>
                    </div>
                )}

                {/* 2. STATISTIQUES LIVE (Visible pendant training) */}
                {(isTraining || trainingStats) && !isReplayMode && (
                    <div className="space-y-3 animate-fade-in">
                        <div className="flex justify-between items-baseline text-[10px] font-mono font-bold text-gray-400">
                            <span className="text-white">SESSION EN COURS...</span>
                            <span>TOTAL: <span className="text-blue-400">{trainingStats?.total_lifetime_games}</span></span>
                        </div>
                        
                        {/* Barre de progression */}
                        <div className="relative w-full h-2 bg-gray-900 rounded-full overflow-hidden border border-white/5">
                            <div 
                                className="absolute top-0 left-0 h-full bg-gradient-to-r from-purple-600 to-blue-500 transition-all duration-300 shadow-[0_0_10px_rgba(168,85,247,0.5)]" 
                                style={{ width: `${((trainingStats?.episode||0)/(trainingStats?.max_episodes||1))*100}%` }}
                            ></div>
                        </div>
                        <div className="text-right text-[9px] text-gray-500 -mt-1 font-mono">
                            {trainingStats?.episode} / {trainingStats?.max_episodes} ({Math.round(((trainingStats?.episode||0)/(trainingStats?.max_episodes||1))*100)}%)
                        </div>
                        
                        {/* Grid Stats */}
                         <div className="grid grid-cols-2 gap-2 mt-2">
                            <div className="bg-black/30 p-2 rounded border border-white/5 flex flex-col items-center group hover:border-green-500/30 transition-colors">
                                <span className="text-[8px] text-gray-500 uppercase font-bold tracking-wider mb-0.5">Score Moyen</span>
                                <span className={`text-base font-black font-mono ${(trainingStats?.avg_reward||0)>0?'text-green-400':'text-red-400'}`}>
                                    {trainingStats?.avg_reward}
                                </span>
                            </div>
                            <div className="bg-black/30 p-2 rounded border border-white/5 flex flex-col items-center group hover:border-blue-500/30 transition-colors">
                                <span className="text-[8px] text-gray-500 uppercase font-bold tracking-wider mb-0.5">Créativité (Epsilon)</span>
                                <span className="text-base font-black font-mono text-blue-400">
                                    {((trainingStats?.epsilon || 0) * 100).toFixed(1)}%
                                </span>
                            </div>
                        </div>
                    </div>
                )}
                
                {/* 3. LISTE DES REPLAYS */}
                 {!isReplayMode && milestones.length > 0 && (
                    <div className="mt-4 border-t border-white/10 pt-3">
                        <h2 className="text-[9px] font-black text-gray-500 mb-2 uppercase flex justify-between items-center tracking-widest">
                            <span>Archives (Best of 10)</span>
                            <span className="bg-gray-800 text-gray-300 px-1.5 py-0.5 rounded text-[8px]">{milestones.length}</span>
                        </h2>
                        <div className="grid grid-cols-3 gap-2 max-h-40 overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent">
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

                {/* 4. CONTROLEUR REPLAY */}
                 {isReplayMode && (
                    <div className="bg-blue-950/30 border border-blue-500/30 p-3 rounded mt-2 animate-slide-in shadow-[0_0_20px_rgba(59,130,246,0.1)]">
                        <div className="flex justify-between items-center mb-3 border-b border-blue-500/20 pb-2">
                            <div className="flex flex-col">
                                <span className="text-[8px] text-blue-400 font-bold uppercase tracking-wider">Mode Replay</span>
                                <span className="text-xs font-black text-white">
                                    SESSION #{currentMilestoneId || '?'}
                                </span>
                            </div>
                            <button onClick={onExitReplay} className="text-red-400 hover:text-white hover:bg-red-500/20 text-[9px] font-bold px-2 py-1 rounded transition-colors border border-transparent hover:border-red-500/30">
                                QUITTER ✕
                            </button>
                        </div>
                        <button 
                            onClick={onNextReplayStep} 
                            className="w-full py-2.5 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white text-xs font-black tracking-wide rounded shadow-lg border-t border-blue-400 active:scale-[0.98] transition-all"
                        >
                            COUP SUIVANT ▶
                        </button>
                    </div>
                )}
            </div>

            {/* --- SELECTION MISSION --- */}
            <div className={`p-4 border-b border-gray-800 bg-[#1e293b] ${isTraining||isReplayMode ? 'opacity-40 pointer-events-none grayscale' : ''} transition-all duration-500`}>
                <div className="mb-1 text-[9px] text-gray-500 uppercase font-black tracking-wider">Cible d'entraînement</div>
                <div className="relative group">
                    <select 
                        className="w-full appearance-none bg-gray-900 text-white text-[10px] font-medium p-2.5 pl-3 rounded border border-gray-700 hover:border-gray-500 focus:border-blue-500 outline-none cursor-pointer transition-colors" 
                        value={selectedMission} 
                        onChange={(e) => setSelectedMission(Number(e.target.value))}
                    >
                        <option value={0} className="font-bold text-yellow-400 bg-gray-800">★ MISSION 0 - Mission Aléatoire (Mix)</option>
                        {REAL_MISSION_LOGBOOK.map(m => (
                            <option key={m.id} value={m.id}>
                                MISSION {m.id} - {m.description.substring(0, 35)}{m.description.length > 35 ? '...' : ''}
                            </option>
                        ))}
                    </select>
                    {/* Petite flèche custom pour le select */}
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500 text-[8px]">▼</div>
                </div>
                
                <div className="mt-4 flex justify-end">
                    <button onClick={onReset} className="text-[9px] text-red-400/70 hover:text-red-400 font-bold transition-colors flex items-center gap-1">
                        <span>🗑</span> Réinitialiser tout
                    </button>
                </div>
            </div>

            {/* --- CONSOLE LOGS --- */}
            <div className="p-3 border-b border-gray-800 bg-[#0f172a] shadow-inner">
                <div className="text-xs font-bold text-blue-400 min-h-[1.5rem] flex items-center gap-2">
                   {isThinking ? (
                       <div className="w-3 h-3 border-2 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
                   ) : (
                       <span className="text-blue-500">ℹ</span>
                   )}
                   <span className="truncate">{currentStepText}</span>
                </div>
            </div>

            <div className="flex-1 overflow-y-auto p-3 space-y-1.5 font-mono text-[9px] text-gray-500 bg-black/20 scrollbar-thin scrollbar-thumb-gray-800">
                {logs.length === 0 && <div className="text-center italic opacity-30 mt-10">En attente d'actions...</div>}
                {logs.map((log, i) => (
                    <div key={i} className="border-l-2 border-gray-800 pl-2 hover:border-gray-600 hover:text-gray-300 transition-colors break-words leading-tight">
                        {log}
                    </div>
                ))}
            </div>
            
            {/* Footer discret */}
            <div className="p-1 bg-black text-[8px] text-center text-gray-700 font-mono uppercase tracking-widest">
                v1.0.2 • PyTorch Backend
            </div>
        </div>
    );
}