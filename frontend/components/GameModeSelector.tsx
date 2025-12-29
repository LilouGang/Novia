import React from 'react';

// On aligne les types avec ce que Home.tsx attend ('GOD' | 'AI')
type GameModeSelectorProps = {
    onSelectMode: (mode: 'GOD' | 'AI') => void;
};

export default function GameModeSelector({ onSelectMode }: GameModeSelectorProps) {
    return (
        <div className="min-h-screen w-full bg-[#0b1121] flex flex-col items-center justify-center p-8 font-sans relative overflow-hidden">
            
            {/* BACKGROUND EFFET (Grille subtile + Glow) */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none"></div>

            {/* HEADER */}
            <div className="text-center mb-16 relative z-10">
                <div className="inline-block mb-3 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-[10px] font-bold tracking-widest uppercase">
                    Version 2.0 • Neural Network Edition
                </div>
                <h1 className="text-7xl font-black text-white tracking-tighter mb-2 drop-shadow-2xl">
                    NOV<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-indigo-800">IA</span>
                </h1>
                <p className="text-slate-400 text-lg font-light max-w-lg mx-auto">
                    Exploration des stratégies coopératives par Intelligence Artificielle et Solver Analytique.
                </p>
            </div>

            {/* GRILLE DE SÉLECTION */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl w-full relative z-10">
                
                {/* 1. MODE DIEU (SOLVER) */}
                <button 
                    onClick={() => onSelectMode('GOD')}
                    className="group relative bg-[#1e293b]/50 backdrop-blur-xl border border-white/5 p-8 rounded-3xl hover:border-purple-500/50 hover:bg-[#1e293b]/80 transition-all duration-500 text-left hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(168,85,247,0.3)] flex flex-col h-full"
                >
                    <div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500">
                        <span className="text-6xl filter drop-shadow-[0_0_10px_rgba(168,85,247,0.5)]">👁️</span>
                    </div>
                    
                    <div className="mb-auto">
                        <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-purple-400 transition-colors">Solver "Dieu"</h3>
                        <p className="text-xs font-mono text-purple-400/70 mb-6">ALGORITHME DÉTERMINISTE</p>
                        <p className="text-slate-400 text-sm leading-relaxed mb-6">
                            Utilise la force brute et une connaissance parfaite des mains cachées pour trouver la solution optimale mathématique.
                        </p>
                    </div>

                    <div className="border-t border-white/5 pt-6 mt-6">
                        <ul className="space-y-3 text-xs font-medium text-slate-300">
                            <li className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span> Vision Omnisciente (Triche)
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span> Taux de réussite 100%
                            </li>
                            <li className="flex items-center gap-2 text-slate-500">
                                <span className="w-1.5 h-1.5 rounded-full bg-slate-600"></span> Lent (Force Brute)
                            </li>
                        </ul>
                    </div>
                </button>

                {/* 2. MODE DEEP LEARNING (LE VRAI) */}
                <button 
                    onClick={() => onSelectMode('AI')}
                    className="group relative bg-[#1e293b]/50 backdrop-blur-xl border border-blue-500/30 p-8 rounded-3xl hover:border-blue-400 hover:bg-[#1e293b]/80 transition-all duration-500 text-left hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(59,130,246,0.4)] flex flex-col h-full ring-1 ring-blue-500/20"
                >
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-lg shadow-blue-600/40">
                        RECOMMANDÉ
                    </div>
                    <div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500">
                        <span className="text-6xl filter drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]">🧠</span>
                    </div>

                    <div className="mb-auto">
                        <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">Deep Learning</h3>
                        <p className="text-xs font-mono text-blue-400/70 mb-6">RÉSEAU DE NEURONES (DQN)</p>
                        <p className="text-slate-400 text-sm leading-relaxed mb-6">
                            Une IA qui apprend par elle-même en jouant des milliers de parties. Développe une "intuition" humaine sans tricher.
                        </p>
                    </div>

                    <div className="border-t border-white/5 pt-6 mt-6">
                        <ul className="space-y-3 text-xs font-medium text-slate-300">
                            <li className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> Entraînement Temps Réel
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> Décision Instantanée (0.01s)
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> Respect du brouillard de guerre
                            </li>
                        </ul>
                    </div>
                </button>

                {/* 3. MODE FUTUR (Placeholder) */}
                <button 
                    disabled
                    className="group relative bg-[#0f172a]/30 backdrop-blur-sm border border-white/5 p-8 rounded-3xl opacity-60 cursor-not-allowed text-left flex flex-col h-full grayscale hover:grayscale-0 transition-all duration-500"
                >
                    <div className="absolute top-0 right-0 p-6 opacity-10">
                        <span className="text-6xl">👥</span>
                    </div>

                    <div className="mb-auto">
                        <h3 className="text-2xl font-bold text-slate-500 mb-1">Multijoueur</h3>
                        <p className="text-xs font-mono text-slate-600 mb-6">HUMAN VS AI</p>
                        <p className="text-slate-500 text-sm leading-relaxed mb-6">
                            Rejoignez une partie avec 3 agents IA entraînés pour tester votre synergie avec le réseau de neurones.
                        </p>
                    </div>

                    <div className="border-t border-white/5 pt-6 mt-6">
                        <div className="flex items-center gap-2 text-xs font-bold text-slate-600 bg-slate-800/50 px-3 py-2 rounded-lg w-fit">
                            🔒 EN DÉVELOPPEMENT
                        </div>
                    </div>
                </button>

            </div>

            {/* FOOTER */}
            <div className="absolute bottom-6 text-[10px] text-slate-600 font-mono">
                SYSTEME: ONLINE • GPU: READY • PYTORCH: ACTIVE
            </div>
        </div>
    );
}