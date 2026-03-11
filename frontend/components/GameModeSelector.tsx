import React, { useEffect, useState } from 'react';

const Icons = {
  Eye: ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ),
  Brain: ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z" />
      <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z" />
    </svg>
  ),
  Users: ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
  Construction: ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="2" y="6" width="20" height="8" rx="1" />
      <path d="M17 14v7" />
      <path d="M7 14v7" />
      <path d="M17 3v3" />
      <path d="M7 3v3" />
      <path d="M10 14 2.3 6.3" />
      <path d="m14 6 7.7 7.7" />
      <path d="m8 6 8 8" />
    </svg>
  ),
  ChevronRight: ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
};

type GameModeSelectorProps = {
  onSelectMode: (mode: 'GOD' | 'AI') => void;
};

export default function GameModeSelector({ onSelectMode }: GameModeSelectorProps) {
  const [stars, setStars] = useState<{ top: string; left: string; size: string; delay: string }[]>([]);

  useEffect(() => {
    const newStars = Array.from({ length: 100 }).map(() => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: `${Math.random() * 2 + 1}px`,
      delay: `${Math.random() * 5}s`,
    }));
    setStars(newStars);
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-[#0B1026] overflow-hidden flex flex-col items-center justify-center font-sans text-white selection:bg-blue-500 selection:text-white">
      
      <style>{`
        @keyframes drift-subtle {
          0% { transform: translateY(0); }
          50% { transform: translateY(-5px); } 
          100% { transform: translateY(0); }
        }
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
        @keyframes rotate-nebula {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-drift-subtle { animation: drift-subtle 8s ease-in-out infinite; }
        .star { animation: twinkle 4s infinite ease-in-out; }
      `}</style>

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40">
        <div 
          className="w-200 h-200 bg-linear-to-r from-blue-900 via-indigo-900 to-slate-900 rounded-full blur-[130px]"
          style={{ animation: 'rotate-nebula 120s linear infinite' }}
        ></div>
      </div>

      <div className="absolute inset-0 pointer-events-none z-0">
        {stars.map((star, i) => (
          <div
            key={i}
            className="star absolute bg-blue-100/80 rounded-full shadow-[0_0_2px_#fff]"
            style={{
              top: star.top,
              left: star.left,
              width: star.size,
              height: star.size,
              animationDelay: star.delay,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 w-full max-w-7xl px-6 flex flex-col items-center py-10">
        
        <header className="text-center mb-14 animate-drift-subtle select-none">
          <h1 className="text-6xl md:text-8xl font-thin tracking-widest uppercase mb-3 drop-shadow-2xl cursor-default">
            <span className="text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">NOV</span>
            <span className="text-blue-500 font-light drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]">IA</span>
          </h1>
          
          <div className="flex items-center justify-center gap-3 text-blue-200/60 font-mono text-xs md:text-sm tracking-widest uppercase">
            <span className="w-8 h-px bg-blue-500/50"></span>
            Algorithmes de résolution pour The Crew
            <span className="w-8 h-px bg-blue-500/50"></span>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
          
          <button
            onClick={() => onSelectMode('GOD')}
            className="group relative h-85 w-full bg-[#131b36]/60 backdrop-blur-md hover:bg-[#1a2545]/80 border border-white/5 hover:border-purple-400/30 rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_40px_-10px_rgba(168,85,247,0.2)] flex flex-col text-left overflow-hidden"
          >
            <div className="absolute top-[-50%] right-[-50%] w-64 h-64 bg-purple-600/20 blur-[60px] rounded-full transition-opacity duration-500 opacity-0 group-hover:opacity-100"></div>

            <div className="flex items-start justify-between mb-6">
              <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center ring-1 ring-purple-500/20 group-hover:bg-purple-500/20 transition-colors">
                <Icons.Eye className="w-6 h-6 text-purple-300" />
              </div>
            </div>

            <h2 className="text-2xl font-medium text-white mb-3">L'Omniscient</h2>
            
            <p className="text-slate-300 text-sm leading-relaxed mb-auto">
              Solveur analytique explorant l'espace complet des états du jeu. Il accède aux cartes cachées pour calculer la séquence mathématiquement optimale.
            </p>

            <div className="pt-4 border-t border-white/5 flex items-center text-xs text-purple-300/80 font-mono group-hover:text-purple-300 transition-colors">
              <span className="grow uppercase tracking-wider">Lancer l'analyse</span>
              <Icons.ChevronRight className="w-4 h-4 ml-2 opacity-50 group-hover:translate-x-1 transition-transform" />
            </div>
          </button>

          <button
            onClick={() => onSelectMode('AI')}
            className="group relative h-85 w-full bg-[#131b36]/60 backdrop-blur-md hover:bg-[#1a2545]/80 border border-white/5 hover:border-blue-400/30 rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_40px_-10px_rgba(59,130,246,0.2)] flex flex-col text-left overflow-hidden"
          >
             <div className="absolute top-[-50%] right-[-50%] w-64 h-64 bg-blue-600/20 blur-[60px] rounded-full transition-opacity duration-500 opacity-0 group-hover:opacity-100"></div>

             <div className="flex items-start justify-between mb-6">
              <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center ring-1 ring-blue-500/20 group-hover:bg-blue-500/20 transition-colors">
                <Icons.Brain className="w-6 h-6 text-blue-300" />
              </div>
            </div>

            <h2 className="text-2xl font-medium text-white mb-3">Réseau Neuronal</h2>
            
            <p className="text-slate-300 text-sm leading-relaxed mb-auto">
              Agent entraîné par apprentissage. Il opère sans connaître les cartes des autres joueurs, simulant une intuition de jeu réaliste.
            </p>

            <div className="pt-4 border-t border-white/5 flex items-center text-xs text-blue-300/80 font-mono group-hover:text-blue-300 transition-colors">
              <span className="grow uppercase tracking-wider">Lancer la simulation</span>
              <Icons.ChevronRight className="w-4 h-4 ml-2 opacity-50 group-hover:translate-x-1 transition-transform" />
            </div>
          </button>

           <div className="relative h-85 w-full bg-[#0d1221]/40 backdrop-blur-sm border border-white/5 rounded-2xl p-7 flex flex-col text-left overflow-hidden grayscale opacity-70 cursor-not-allowed">
            
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-slate-700/20 rounded-xl flex items-center justify-center ring-1 ring-slate-600/30">
                <Icons.Users className="w-6 h-6 text-slate-400" />
              </div>
              
              <div className="inline-flex items-center gap-1.5 px-2 py-1 rounded bg-amber-500/10 border border-amber-500/20 text-[9px] text-amber-500 font-bold uppercase tracking-wider">
                <Icons.Construction className="w-3 h-3" /> En construction
              </div>
            </div>

            <h2 className="text-2xl font-medium text-slate-400 mb-3">Mode Hybride</h2>
            
            <p className="text-slate-500 text-sm leading-relaxed mb-auto">
              Interface d'expérimentation permettant à un joueur humain de coopérer avec les agents IA pour tester la synergie Homme-Machine.
            </p>

            <div className="pt-4 border-t border-white/5 flex items-center text-xs text-slate-600 font-mono">
              <span className="grow uppercase tracking-wider">Bientôt disponible</span>
            </div>
          </div>

        </div>
      </div>
      
      <div className="absolute bottom-6 text-slate-400 text-[11px] tracking-[0.2em] uppercase font-medium hover:text-white transition-colors cursor-default">
        Projet Novia • Killian Lacaque
      </div>
    </div>
  );
}