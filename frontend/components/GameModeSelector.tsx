import React from 'react';

type GameModeSelectorProps = {
    onSelectMode: (mode: 'GOD' | 'AI') => void;
};

export default function GameModeSelector({ onSelectMode }: GameModeSelectorProps) {
    return (
        <div className="min-h-screen w-full bg-[#0b1121] flex flex-col items-center justify-center p-8 font-sans relative overflow-hidden">
            
            {/* BACKGROUND (Subtile) */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>
            <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-indigo-900/20 rounded-full blur-[120px] pointer-events-none"></div>

            {/* HEADER */}
            <div className="text-center mb-12 relative z-10">
                <div className="inline-block mb-4 px-3 py-1 rounded-full border border-gray-700 bg-gray-800/50 text-gray-400 text-[10px] font-bold tracking-widest uppercase">
                    Projet de Recherche • The Crew
                </div>
                <h1 className="text-6xl font-black text-white tracking-tighter mb-4 drop-shadow-xl">
                    NOV<span className="text-blue-500">IA</span>
                </h1>
                <p className="text-slate-400 text-base font-normal max-w-lg mx-auto leading-relaxed">
                    Comparateur d'algorithmes pour le jeu de pli coopératif.
                    <br/>
                    <span className="text-slate-500 text-sm">Choix de l'approche : Analytique vs Apprentissage.</span>
                </p>
            </div>

            {/* GRILLE DE SÉLECTION */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full relative z-10">
                
                {/* 1. MODE SOLVER (L'EXCELLENCE) */}
                <button 
                    onClick={() => onSelectMode('GOD')}
                    className="group relative bg-[#1e293b]/40 backdrop-blur-md border border-white/10 p-8 rounded-2xl hover:bg-[#1e293b]/80 hover:border-purple-500/50 transition-all duration-300 text-left hover:-translate-y-1 shadow-lg"
                >
                    <div className="absolute top-6 right-6 p-2 rounded-lg bg-purple-500/10 text-purple-400">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    </div>
                    
                    <div className="mb-6">
                        <div className="text-xs font-bold text-purple-400 mb-2 uppercase tracking-wide">Référence</div>
                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">Solver Analytique</h3>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            L'algorithme parfait. Il connaît la position de toutes les cartes (Mode Dieu) et calcule mathématiquement le meilleur chemin vers la victoire.
                        </p>
                    </div>

                    <div className="border-t border-white/5 pt-4">
                        <ul className="space-y-2 text-xs text-slate-300 font-medium">
                            <li className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span> 100% Taux de réussite
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span> Solution Optimale
                            </li>
                        </ul>
                    </div>
                </button>

                {/* 2. MODE IA (L'EXPÉRIMENTAL) */}
                <button 
                    onClick={() => onSelectMode('AI')}
                    className="group relative bg-[#1e293b]/40 backdrop-blur-md border border-white/10 p-8 rounded-2xl hover:bg-[#1e293b]/80 hover:border-blue-500/50 transition-all duration-300 text-left hover:-translate-y-1 shadow-lg"
                >
                     <div className="absolute top-6 right-6 p-2 rounded-lg bg-blue-500/10 text-blue-400">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
                    </div>

                    <div className="mb-6">
                        <div className="text-xs font-bold text-blue-400 mb-2 uppercase tracking-wide flex items-center gap-2">
                            <span className="relative flex h-2 w-2">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                            </span>
                            En Entraînement
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">Réseau de Neurones</h3>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            Une IA expérimentale (Deep Q-Network) qui apprend à jouer sans tricher. Elle ne voit que ses propres cartes et tente de développer une intuition.
                        </p>
                    </div>

                    <div className="border-t border-white/5 pt-4">
                        <ul className="space-y-2 text-xs text-slate-300 font-medium">
                            <li className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> Vision réaliste (Brouillard)
                            </li>
                            <li className="flex items-center gap-2 text-yellow-500">
                                <span className="w-1.5 h-1.5 rounded-full bg-yellow-500"></span> Performances variables
                            </li>
                        </ul>
                    </div>
                </button>

                {/* 3. MULTIJOUEUR (HORS SERVICE) */}
                <div className="relative bg-[#0f172a]/20 border border-white/5 p-8 rounded-2xl flex flex-col h-full opacity-50 grayscale">
                    <div className="mb-auto">
                        <h3 className="text-2xl font-bold text-slate-600 mb-2">Humain vs IA</h3>
                        <p className="text-slate-600 text-sm leading-relaxed">
                            Mode multijoueur pour tester votre synergie avec le modèle entraîné.
                        </p>
                    </div>
                    <div className="pt-4 mt-4">
                        <span className="text-[10px] font-bold bg-slate-800 text-slate-500 px-2 py-1 rounded">INDISPONIBLE</span>
                    </div>
                </div>

            </div>

            {/* FOOTER SIMPLE */}
            <div className="absolute bottom-4 text-[10px] text-slate-700 font-mono">
                Novia Project v2.1 • Killian D.
            </div>
        </div>
    );
}