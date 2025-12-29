import React from 'react';
import { MissionUI, SolverStats, CardData, BackendConstraint, Communication } from '../../types';
import { REAL_MISSION_LOGBOOK } from '../../data/real_missions';
import TrickHistory from '../god/TrickHistory';

type SidebarProps = {
    startNewGame: () => void;
    bookMissionId: number;
    loadMissionFromBook: (id: number) => void;
    missions: MissionUI[];
    setMissions: React.Dispatch<React.SetStateAction<MissionUI[]>>;
    shuffleOwners: () => void;
    shuffleCards: () => void;
    autoFindSolution: () => void;
    isAutoFinding: boolean;
    removeMission: (index: number) => void;
    launchSolver: (mode: 'GOD' | 'MCTS' | 'ML', agentIdx: number) => void;
    isThinking: boolean;
    stats: SolverStats | null;
    currentMoveIndex: number;
    isPlaying: boolean;
    togglePlay: () => void;
    handlePrev: () => void;
    handleNext: () => void;
    logs: string[];
    allCards: CardData[];
    globalConstraints: BackendConstraint[];
    clearAllHands: () => void;
    communications: Communication[];
    addCommunication: (c: Communication) => void;
    gameMode: 'GOD' | 'MCTS' | 'ML';
    clearStats?: () => void;
    // AJOUT : Nouvelle prop pour revenir au menu
    onBackToMenu?: () => void;
};

// --- COMPOSANTS UTILITAIRES ---
const TokenBadge = ({ token }: { token: string }) => {
    if (token === 'None') return null;
    let styleClass = "";
    let content = token;
    if (['1', '2', '3', '4', '5'].includes(token)) styleClass = "bg-green-600 text-white rounded-full w-6 h-6";
    else if (token.includes('>')) styleClass = "bg-blue-600 text-white rounded w-6 h-6";
    else if (token === 'Omega') { styleClass = "bg-pink-600 text-white rounded-full w-6 h-6"; content = "Ω"; }
    else styleClass = "bg-gray-600 text-white px-2 py-0.5 rounded";
    return <div className={`${styleClass} flex items-center justify-center text-[10px] font-bold shadow-md border border-white/20 shrink-0`}>{content}</div>;
};

const getBorderColor = (color: string) => {
    switch (color) {
        case 'Blue': return 'border-blue-500/50 bg-blue-900/10';
        case 'Green': return 'border-green-500/50 bg-green-900/10';
        case 'Pink': return 'border-pink-500/50 bg-pink-900/10';
        case 'Yellow': return 'border-yellow-500/50 bg-yellow-900/10';
        case 'Rocket': return 'border-gray-500/50 bg-gray-800/50';
        default: return 'border-gray-600';
    }
};

export default function Sidebar(props: SidebarProps) {
    const { 
        startNewGame, bookMissionId, loadMissionFromBook, missions, setMissions,
        shuffleOwners, shuffleCards, autoFindSolution, isAutoFinding, 
        launchSolver, isThinking, stats, currentMoveIndex, isPlaying, togglePlay, handlePrev, handleNext, logs, allCards, 
        globalConstraints, clearAllHands, communications, addCommunication, gameMode,
        clearStats, onBackToMenu // On récupère la prop
    } = props;

    const handleResetStats = () => {
        if (clearStats) clearStats();
    };

    const removeMission = (index: number) => {
        setMissions(prev => prev.filter((_, i) => i !== index));
        handleResetStats();
    };

    const [agentPlayer, setAgentPlayer] = React.useState(0);

    const handleLaunch = () => {
        launchSolver(gameMode, agentPlayer);
    };

    const totalSteps = stats?.solution_steps?.length || 0;
    const progressWidth = totalSteps > 0 ? ((currentMoveIndex + 1) / totalSteps) * 100 : 0;
    
    // Correction Typage : on force le boolean avec !!
    const hasFailed = !!stats && !stats.solutionFound && !isThinking;

    return (
        <div className="w-[30%] min-w-[300px] bg-gray-900 border-r border-gray-700 flex flex-col z-50 shadow-2xl h-full font-sans">
            
            {/* HEADER MODIFIÉ : Flexbox pour aligner Titre et Bouton */}
            <div className="p-4 border-b border-gray-800 shrink-0 bg-gray-900 flex justify-between items-center">
                <div>
                    <h1 className="text-xl font-black text-white tracking-tight leading-none">
                        <span>Novia <span className="text-purple-400">Solver</span></span>
                    </h1>
                    <div className="text-[9px] font-bold text-gray-500 tracking-widest mt-1">
                        Deterministic Algorithm
                    </div>
                </div>

                {onBackToMenu && (
                    <button 
                        onClick={onBackToMenu}
                        className="text-[10px] bg-gray-800 hover:bg-gray-700 text-gray-400 hover:text-white px-2 py-1 rounded border border-gray-700 transition-colors uppercase font-bold"
                    >
                        Menu ↩
                    </button>
                )}
            </div>

            <div className="flex-1 overflow-y-auto p-4 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent space-y-6">

                {/* --- COMMANDES GLOBALES --- */}
                <div className="grid grid-cols-2 gap-2">
                    <button onClick={() => { startNewGame(); handleResetStats(); }} className="bg-gray-800 hover:bg-gray-700 text-gray-200 py-2 rounded text-xs font-bold border border-gray-600 transition-colors">
                        🔄 Nouvelle Donne
                    </button>
                    <button onClick={() => { clearAllHands(); handleResetStats(); }} className="bg-red-900/20 hover:bg-red-900/40 text-red-300 py-2 rounded text-xs font-bold border border-red-900/30 transition-colors">
                        🧹 Vider table
                    </button>
                </div>

                {/* --- LIVRE DE BORD --- */}
                <div className="bg-gray-800/50 p-3 rounded-lg border border-gray-700">
                    <div className="flex justify-between items-center mb-2">
                        <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider flex items-center gap-2">
                            📖 Livre de Bord
                        </h3>
                        {bookMissionId > 0 && <span className="bg-purple-900/50 text-purple-300 text-[10px] px-2 py-0.5 rounded border border-purple-500/30">Mission #{bookMissionId}</span>}
                    </div>
                    
                    <select 
                        className="w-full bg-gray-900 text-white text-xs p-2 rounded border border-gray-600 outline-none focus:border-purple-500 mb-2" 
                        value={bookMissionId} 
                        onChange={(e) => { loadMissionFromBook(Number(e.target.value)); handleResetStats(); }}
                    >
                        <option value="0">-- Sélectionner une mission --</option>
                        {REAL_MISSION_LOGBOOK.map(m => <option key={m.id} value={m.id}>{m.id}. {m.description.substring(0, 40)}...</option>)}
                    </select>
                    
                    {bookMissionId > 0 && (
                        <div className="animate-fade-in">
                            <p className="text-[10px] text-gray-400 italic leading-relaxed px-1 mb-3 border-l-2 border-purple-500/30 pl-2">
                                "{REAL_MISSION_LOGBOOK.find(m => m.id === bookMissionId)?.description}"
                            </p>
                            <div className="flex gap-1">
                                <button onClick={() => { shuffleOwners(); handleResetStats(); }} className="flex-1 bg-gray-700 hover:bg-gray-600 text-[10px] text-white py-1.5 rounded border border-gray-600 transition">👤 Mix Joueurs</button>
                                <button onClick={() => { shuffleCards(); handleResetStats(); }} className="flex-1 bg-gray-700 hover:bg-gray-600 text-[10px] text-white py-1.5 rounded border border-gray-600 transition">🃏 Mix Tâches</button>
                            </div>
                            <button onClick={() => { autoFindSolution(); handleResetStats(); }} disabled={isAutoFinding} className={`w-full mt-2 py-2 rounded text-xs font-bold border transition flex items-center justify-center gap-2 shadow-lg ${isAutoFinding ? 'bg-purple-900/80 border-purple-500 text-purple-200 animate-pulse cursor-wait' : 'bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white border-transparent'}`}>
                                {isAutoFinding ? '🎲 Recherche en cours...' : '🎰 Trouver une donne GAGNANTE'}
                            </button>
                        </div>
                    )}
                </div>

                {/* --- LISTE DES MISSIONS --- */}
                <div className="space-y-3">
                    <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider border-b border-gray-700 pb-1">Objectifs</h3>
                    
                    {globalConstraints.length > 0 && (
                        <div className="space-y-2">
                            {globalConstraints.map((c, i) => (
                                <div key={i} className="flex items-center gap-3 bg-gray-800/80 p-2 rounded border-l-4 border-l-yellow-500 border border-gray-700 shadow-sm">
                                    <div className="text-xl">{c.type === 'NO_TRICKS' ? '🚫' : '🔢'}</div>
                                    <div className="flex-1">
                                        <div className="text-[10px] font-bold text-gray-400 uppercase">{c.type === 'NO_TRICKS' ? 'Interdiction' : 'Protocole'}</div>
                                        <div className="text-xs text-gray-200">
                                            <span className="font-bold text-white">{['Sud','Ouest','Nord','Est'][c.player || 0]}</span>
                                            {c.type === 'NO_TRICKS' ? ' ne doit faire aucun pli.' : ` doit faire exactement ${c.count} pli(s).`}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    <div className="space-y-2">
                        {missions.map((m, i) => {
                            const targetId = `${m.cardColor}-${m.cardValue}`;
                            const targetCard = allCards.find(c => c.id === targetId);
                            const isAccomplished = targetCard?.status === 'WON' && targetCard?.winnerIndex === m.ownerIndex;
                            const isFailed = targetCard?.status === 'WON' && targetCard?.winnerIndex !== undefined && targetCard?.winnerIndex !== m.ownerIndex;

                            return (
                                <div key={i} className={`relative flex items-center gap-2 p-2 rounded border transition-all ${getBorderColor(m.cardColor)} ${isAccomplished ? 'opacity-50 grayscale-[0.5]' : ''}`}>
                                    <div className="absolute top-0 right-0 p-1">
                                        {isAccomplished && <span className="text-green-400 text-xs">✅</span>}
                                        {isFailed && <span className="text-red-400 text-xs">❌</span>}
                                    </div>
                                    <TokenBadge token={m.token} />
                                    <div className="flex-1 flex flex-col gap-1">
                                        <div className="flex items-center justify-between">
                                            <span className="text-[10px] text-gray-400 uppercase font-bold">Joueur</span>
                                            <select 
                                                className="bg-gray-900 text-white text-[10px] py-0.5 px-1 rounded border border-gray-600 outline-none focus:border-purple-500" 
                                                value={m.ownerIndex} 
                                                onChange={(e) => { 
                                                    const newMissions = [...missions]; newMissions[i].ownerIndex = Number(e.target.value); setMissions(newMissions); 
                                                    handleResetStats();
                                                }}
                                            >
                                                <option value={0}>Sud</option><option value={1}>Ouest</option><option value={2}>Nord</option><option value={3}>Est</option>
                                            </select>
                                        </div>
                                        <div className="flex gap-1">
                                            <select 
                                                className="bg-gray-900 text-white text-xs font-bold py-1 px-1 rounded border border-gray-600 outline-none w-12 text-center" 
                                                value={m.cardValue} 
                                                onChange={(e) => { 
                                                    const newMissions = [...missions]; newMissions[i].cardValue = Number(e.target.value); setMissions(newMissions); 
                                                    handleResetStats();
                                                }}
                                            >
                                                {[1,2,3,4,5,6,7,8,9].map(n => <option key={n} value={n}>{n}</option>)}
                                            </select>
                                            <select 
                                                className={`flex-1 text-xs font-bold py-1 px-2 rounded outline-none border border-black/20 appearance-none ${m.cardColor === 'Rocket' ? 'bg-gray-700 text-white' : `bg-${m.cardColor.toLowerCase()}-500 text-white`}`} 
                                                style={{ backgroundColor: m.cardColor === 'Rocket' ? '#374151' : undefined }} 
                                                value={m.cardColor} 
                                                onChange={(e) => { 
                                                    const newMissions = [...missions]; newMissions[i].cardColor = e.target.value; setMissions(newMissions); 
                                                    handleResetStats();
                                                }}
                                            >
                                                <option value="Blue" className="bg-blue-600">Bleu</option>
                                                <option value="Green" className="bg-green-600">Vert</option>
                                                <option value="Pink" className="bg-pink-600">Rose</option>
                                                <option value="Yellow" className="bg-yellow-500">Jaune</option>
                                                <option value="Rocket" className="bg-gray-700">Fusée</option>
                                            </select>
                                        </div>
                                    </div>
                                    <button onClick={() => removeMission(i)} className="self-start text-gray-500 hover:text-red-400 text-xs px-1">✕</button>
                                </div>
                            );
                        })}
                    </div>
                    <button onClick={() => { setMissions(prev => [...prev, { cardColor: 'Blue', cardValue: 1, ownerIndex: 0, token: 'None' }]); handleResetStats(); }} className="w-full py-2 border border-dashed border-gray-600 text-gray-400 hover:text-white hover:border-gray-400 text-xs rounded transition-colors flex items-center justify-center gap-1"><span>+</span> Ajouter une tâche</button>
                </div>

                <div className="h-[1px] bg-gray-800 my-4"></div>

                {/* --- BOUTON DE LANCEMENT --- */}
                <div className="mt-4">
                    {gameMode === 'MCTS' && (
                         <div className="flex justify-between items-center mb-1 px-1">
                            <span className="text-[10px] text-gray-400 uppercase font-bold">Qui réfléchit ?</span>
                            <select className="bg-gray-800 text-blue-300 text-xs font-bold p-1 rounded border border-blue-500/30 outline-none" value={agentPlayer} onChange={(e) => setAgentPlayer(Number(e.target.value))}>
                                <option value={0}>🤖 Agent Sud</option><option value={1}>🤖 Agent Ouest</option><option value={2}>🤖 Agent Nord</option><option value={3}>🤖 Agent Est</option>
                            </select>
                        </div>
                    )}

                    <button 
                        onClick={handleLaunch} 
                        disabled={isThinking || hasFailed} 
                        className={`
                            w-full py-4 rounded-lg font-bold text-sm shadow-xl transition-all
                            ${isThinking 
                                ? 'bg-gray-800 text-gray-400 cursor-wait' 
                                : hasFailed 
                                    ? 'bg-red-900/80 text-red-200 border border-red-500 cursor-not-allowed opacity-100' 
                                    : gameMode === 'MCTS' 
                                        ? 'bg-blue-600 hover:bg-blue-500 text-white ring-1 ring-blue-400 active:scale-95' 
                                        : 'bg-purple-600 hover:bg-purple-500 text-white ring-1 ring-purple-400 active:scale-95'
                            }
                        `}
                    >
                        {isThinking ? (
                            <span className="flex items-center justify-center gap-2">
                                <span className="animate-spin text-lg">⚙️</span> 
                                {gameMode === 'MCTS' ? 'L\'agent réfléchit...' : 'Calcul en cours...'}
                            </span>
                        ) : hasFailed ? (
                            <span className="flex items-center justify-center gap-2">
                                🚫 AUCUNE SOLUTION POSSIBLE
                            </span>
                        ) : (
                            gameMode === 'MCTS' ? '🧠 DEMANDER À L\'AGENT' : '⚡️ LANCER LE SOLVER'
                        )}
                    </button>
                </div>

                {/* --- LECTEUR DE SOLUTION --- */}
                {stats && stats.solutionFound && (
                    <div className="mt-6 bg-gray-800 rounded-lg border border-gray-700 overflow-hidden animate-slide-up">
                        <div className="bg-gray-900 px-3 py-2 border-b border-gray-700 flex justify-between items-center">
                            <span className="text-xs font-bold text-gray-400 uppercase">Lecteur de Solution</span>
                            <span className="text-[10px] bg-purple-900 text-purple-200 px-1.5 rounded">
                                {currentMoveIndex >= 0 ? Math.ceil(currentMoveIndex + 1) : 0} / {totalSteps}
                            </span>
                        </div>
                        
                        <div className="p-3">
                            <div className="w-full h-1.5 bg-gray-700 rounded-full mb-4 overflow-hidden">
                                <div 
                                    className="h-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 ease-linear" 
                                    style={{ width: `${progressWidth}%` }}
                                ></div>
                            </div>
                            
                            <div className="flex gap-2">
                                <button onClick={handlePrev} className="flex-1 bg-gray-700 hover:bg-gray-600 text-white py-2 rounded active:scale-95 transition">⏮</button>
                                <button onClick={togglePlay} className={`flex-1 py-2 rounded font-bold text-white active:scale-95 transition ${isPlaying ? 'bg-yellow-600 hover:bg-yellow-500' : 'bg-green-600 hover:bg-green-500'}`}>
                                    {isPlaying ? '⏸' : '▶'}
                                </button>
                                <button onClick={handleNext} className="flex-1 bg-gray-700 hover:bg-gray-600 text-white py-2 rounded active:scale-95 transition">⏭</button>
                            </div>
                        </div>

                        <div className="border-t border-gray-700 max-h-[200px] overflow-y-auto bg-black/20 p-2">
                            <TrickHistory steps={stats.solution_steps} />
                        </div>
                    </div>
                )}

                <div className="mt-4 bg-black/40 rounded p-2 font-mono text-[10px] text-gray-500 border border-white/5 h-[120px] overflow-y-auto">
                    {logs.map((l, i) => <div key={i} className="mb-0.5 border-l-2 border-transparent hover:border-purple-500 pl-1">{l}</div>)}
                </div>
            </div>
        </div>
    );
}