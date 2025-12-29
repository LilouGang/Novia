import React from 'react';

type GameModeSelectorProps = {
    onSelectMode: (mode: 'GOD' | 'AI') => void;
};

export default function GameModeSelector({ onSelectMode }: GameModeSelectorProps) {
    return (
        <div className="min-h-screen w-full bg-[#0b1121] flex flex-col items-center justify-center p-8 font-sans relative overflow-hidden">
            
            {/* BACKGROUND (Effet "Tech") */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-15 pointer-events-none"></div>
            <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-indigo-900/20 rounded-full blur-[120px] pointer-events-none"></div>

            {/* HEADER */}
            <div className="text-center mb-12 relative z-10 max-w-3xl">
                <div className="inline-flex items-center gap-2 mb-5 px-3 py-1.5 rounded border border-slate-700 bg-slate-800/40 backdrop-blur-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
                    <span className="text-slate-300 text-[10px] font-mono font-bold tracking-widest uppercase">
                        IMPLÉMENTATION AVANCÉE • SYSTÈMES DE DÉCISION POUR THE CREW (IELLO)
                    </span>
                </div>
                
                <h1 className="text-7xl font-black text-white tracking-tighter mb-4 drop-shadow-2xl">
                    NOV<span className="text-blue-500">IA</span>
                </h1>
                
                <div className="space-y-2">
                    <h2 className="text-lg font-bold text-white tracking-wide">
                        Systèmes de décision pour jeu de plis coopératif à information imparfaite
                    </h2>
                    <p className="text-slate-400 text-sm font-mono opacity-80">
                        Deux paradigmes : <span className="text-purple-400">exploration exhaustive</span> vs <span className="text-blue-400">apprentissage par renforcement</span>
                    </p>
                </div>
            </div>

            {/* GRILLE DE SÉLECTION */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full relative z-10">
                
                {/* 1. MODE SOLVER (Approche Analytique) */}
                <button 
                    onClick={() => onSelectMode('GOD')}
                    className="group relative bg-[#1e293b]/40 backdrop-blur-md border border-white/10 p-8 rounded-xl hover:bg-[#1e293b]/80 hover:border-purple-500/50 transition-all duration-300 text-left hover:-translate-y-1 shadow-lg overflow-hidden"
                >
                    {/* Effet Hover Glow */}
                    <div className="absolute -right-10 -top-10 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl group-hover:bg-purple-500/20 transition-all"></div>

                    <div className="mb-6 relative">
                        <div className="text-[10px] font-mono font-bold text-purple-400 mb-2 uppercase tracking-wider border border-purple-500/30 w-fit px-2 py-0.5 rounded bg-purple-500/10">
                            Approche Déterministe
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                            Solver Omniscient
                        </h3>
                        <p className="text-slate-400 text-xs leading-relaxed">
                            Moteur de résolution déterministe explorant l’espace des états du jeu. Accède à l’ensemble des informations cachées afin d’évaluer exhaustivement les séquences de coups et d’identifier des choix optimaux.
                        </p>
                    </div>

                    <div className="border-t border-white/5 pt-4">
                        <ul className="space-y-2 text-[10px] text-slate-300 font-mono">
                            <li className="flex items-center gap-2">
                                <span className="w-1 h-1 rounded-full bg-purple-500"></span> Exploration complète de l’espace d’états
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-1 h-1 rounded-full bg-green-500"></span> Référence algorithmique haute performance
                            </li>
                        </ul>
                    </div>
                </button>

                {/* 2. MODE IA (Approche Apprentissage) */}
                <button 
                    onClick={() => onSelectMode('AI')}
                    className="group relative bg-[#1e293b]/40 backdrop-blur-md border border-white/10 p-8 rounded-xl hover:bg-[#1e293b]/80 hover:border-blue-500/50 transition-all duration-300 text-left hover:-translate-y-1 shadow-lg ring-1 ring-white/5 hover:ring-blue-500/30 overflow-hidden"
                >
                    {/* Effet Hover Glow */}
                    <div className="absolute -right-10 -top-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl group-hover:bg-blue-500/20 transition-all"></div>

                    <div className="mb-6 relative">
                        <div className="flex justify-between items-center mb-2">
                            <div className="text-[10px] font-mono font-bold text-blue-400 uppercase tracking-wider border border-blue-500/30 w-fit px-2 py-0.5 rounded bg-blue-500/10">
                                Apprentissage automatique
                            </div>
                            <span className="flex h-1.5 w-1.5 relative">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-blue-500"></span>
                            </span>
                        </div>
                        
                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                            Agent neuronal distribué
                        </h3>
                        <p className="text-slate-400 text-xs leading-relaxed">
                            Agent entraîné par apprentissage par renforcement profond (DQN). Opère sous contrainte d’information partielle et apprend une politique d’action à partir de milliers de parties simulées.
                        </p>
                    </div>

                    <div className="border-t border-white/5 pt-4">
                        <ul className="space-y-2 text-[10px] text-slate-300 font-mono">
                            <li className="flex items-center gap-2">
                                <span className="w-1 h-1 rounded-full bg-blue-500"></span> Information locale et incertitude
                            </li>
                            <li className="flex items-center gap-2 text-yellow-500">
                                <span className="w-1 h-1 rounded-full bg-yellow-500"></span> Comportement émergent dépendant de l’entraînement
                            </li>
                        </ul>
                    </div>
                </button>

                {/* 3. MULTIJOUEUR (Indisponible) */}
                <div className="relative bg-[#0f172a]/20 border border-white/5 p-8 rounded-xl flex flex-col h-full opacity-40 grayscale pointer-events-none">
                    <div className="mb-auto">
                        <div className="text-[10px] font-mono font-bold text-slate-500 mb-2 uppercase tracking-wider border border-slate-700 w-fit px-2 py-0.5 rounded">
                            En cours de conception
                        </div>
                        <h3 className="text-xl font-bold text-slate-600 mb-2">Humain + agents artificiels</h3>
                        <p className="text-slate-600 text-xs leading-relaxed">
                            Intégration d’un joueur humain au sein d’un système multi-agents. Objectif : analyser la compatibilité entre stratégies humaines et décisions générées par les modèles.
                        </p>
                    </div>
                </div>

            </div>

            {/* FOOTER */}
            <div className="absolute bottom-6 w-full text-center">
                <div className="text-[9px] text-slate-600 font-mono tracking-widest uppercase">
                    Novia • Architecture & Simulation • v2.1
                </div>
            </div>
        </div>
    );
}