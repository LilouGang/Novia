import React from 'react';
import { CardData, MissionUI } from '../../types';
import Card from '../Card';

// =================================================================================
// 🛠️ CONFIGURATION 1 : ZONES D'INFO (Missions uniquement)
// =================================================================================
const INFO_POSITIONS = {
    0: { x: 150,    y: 200,  rotation: 0 },    // SUD
    1: { x: -140,   y: 40,    rotation: 90 },   // OUEST (Ajusté pour centrage vertical)
    2: { x: 150,    y: -120, rotation: 180 },  // NORD
    3: { x: 440,    y: 40,    rotation: -90 },  // EST
};

// =================================================================================
// 🛠️ CONFIGURATION 2 : CENTRE DES MAINS
// =================================================================================
const HAND_POSITIONS = {
    0: { x: 0,    y: 260,  rotation: 0 },    // SUD (Un peu plus bas pour aérer)
    1: { x: -400, y: 0,    rotation: 90 },   // OUEST
    2: { x: 0,    y: -260, rotation: 180 },  // NORD
    3: { x: 400,  y: 0,    rotation: -90 },  // EST
};

// --- COMPOSANT MISSION (Affichage des jetons et status) ---
const MissionToken: React.FC<{ mission: MissionUI }> = ({ mission }) => {
    const statusClass = mission.status === 'SUCCESS' 
        ? 'border-green-500 shadow-[0_0_15px_rgba(34,197,94,0.5)] bg-green-900/80' 
        : mission.status === 'FAILED' 
            ? 'border-red-500 opacity-60 bg-red-900/50' 
            : 'border-gray-500 bg-gray-900';

    const token = mission.token;
    const isSpecial = mission.cardColor === 'Special' || mission.cardValue === 0;
    
    const specialLabels: Record<string, string> = {
        'NO_TRICKS': '0 PLI',
        'NO_TRICKS_PLAYER': '0 PLI (J)',
        'ALL_ROCKETS': '🚀 ALL',
        'SPECIFIC_WIN_1': 'WIN 1',
        'NO_9_WIN': 'NO 9',
    };
    const label = (token && specialLabels[token]) || token;

    return (
        <div className={`relative w-10 h-14 rounded border-2 ${statusClass} flex flex-col items-center justify-center transform transition-all z-20 shrink-0 select-none`}>
            {/* PASTILLE JETON */}
            {!isSpecial && token !== 'None' && (
                <div className="absolute -top-3 -right-3 bg-purple-600 rounded-full w-5 h-5 flex items-center justify-center text-[10px] text-white font-bold shadow border border-white/20 z-30">
                    {token === 'Omega' ? 'Ω' : token}
                </div>
            )}
            
            {/* CONTENU */}
            {!isSpecial ? (
                <>
                    <div className={`w-full h-1.5 mb-1 ${
                        mission.cardColor === 'Pink' ? 'bg-pink-500' : 
                        mission.cardColor === 'Green' ? 'bg-green-500' : 
                        mission.cardColor === 'Blue' ? 'bg-blue-600' : 
                        mission.cardColor === 'Yellow' ? 'bg-yellow-400' : 
                        mission.cardColor === 'Rocket' ? 'bg-gray-700' : 'bg-gray-600'
                    }`}></div>
                    <div className="text-white font-bold text-lg leading-none">{mission.cardValue}</div>
                </>
            ) : (
                <div className="flex flex-col items-center justify-center h-full w-full p-0.5 text-center">
                    <span className="text-[8px] font-black text-gray-300 leading-tight uppercase">
                        {label}
                    </span>
                </div>
            )}

            {/* STATUS ICONS */}
            {mission.status === 'SUCCESS' && (
                <div className="absolute -bottom-2 -left-2 bg-white border border-green-500 rounded-full w-5 h-5 flex items-center justify-center shadow-md z-40">
                    <span className="text-green-600 font-bold text-xs">✔</span>
                </div>
            )}
            {mission.status === 'FAILED' && (
                <div className="absolute -bottom-2 -right-2 bg-white border border-red-500 rounded-full w-5 h-5 flex items-center justify-center shadow-md z-40">
                    <span className="text-red-500 font-bold text-xs">✕</span>
                </div>
            )}
        </div>
    );
};

// --- PROPS DU PLATEAU ---
type GodGameBoardProps = {
    allCards?: CardData[];
    missions?: MissionUI[];
    onPlayerClick?: (playerIndex: number) => void;
};

// --- COMPOSANT PRINCIPAL ---
export default function GodGameBoard({ 
    allCards = [], missions = [], onPlayerClick 
}: GodGameBoardProps) {
  
  const safeCards = Array.isArray(allCards) ? allCards : [];
  const safeMissions = Array.isArray(missions) ? missions : [];
  
  const HAND_RADIUS = 600; 
  const ANGLE_STEP = 5;

  // --- POSITIONNEMENT DES TITRES (PLUS PRÈS DU CENTRE) ---
  const getTitleStyle = (playerIndex: number): React.CSSProperties => {
      const base = "translate(-50%, -50%)";

      switch(playerIndex) {
          case 0: return { transform: `${base} translate(25px, 120px)` }; // SUD
          case 1: return { transform: `${base} translate(-200px, 15px) rotate(90deg)` }; // OUEST
          case 2: return { transform: `${base} translate(35px, -90px)` }; // NORD
          case 3: return { transform: `${base} translate(260px, 15px) rotate(-90deg)` }; // EST
          default: return {};
      }
  };

  const getInfoZoneStyle = (playerIndex: number): React.CSSProperties => {
      const pos = INFO_POSITIONS[playerIndex as keyof typeof INFO_POSITIONS];
      return { 
          transform: `translate(-50%, -50%) translate(${pos.x}px, ${pos.y}px) rotate(${pos.rotation}deg)` 
      };
  };

  const getCardStyle = (card: CardData): React.CSSProperties => {
      // 1. CARTE GAGNÉE
      if (card.status === 'WON') {
          const winPositions = [
              `translate(0px, 600px)`, `translate(-800px, 0px)`, `translate(0px, -600px)`, `translate(800px, 0px)`
            ];
          return { 
              transform: `translate(-50%, -50%) ${winPositions[card.winnerIndex || 0]} scale(0.4)`, 
              opacity: 0, zIndex: 500, transition: 'transform 0.8s ease-in-out, opacity 0.8s ease-in-out'
          };
      }
      
      // 2. CARTE SUR TABLE
      if (card.status === 'TABLE') {
          const rX = (card.tableRotation * 5) % 15 - 7;
          const rY = (card.tableRotation * 7) % 15 - 7;
          return { 
              transform: `translate(-50%, -50%) translate(${rX}px, ${rY}px) rotate(${card.tableRotation}deg) scale(1.1)`, 
              opacity: 1, zIndex: 200 + card.zIndex, transition: 'transform 0.5s ease-in-out, opacity 0.5s ease-in-out'
          };
      }

      // 3. MAIN (Communication retirée ici)
      const cardsInHand = safeCards.filter(c => c.owner === card.owner && c.status === 'HAND');
      const colorPriority: Record<string, number> = { 'Blue': 1, 'Green': 2, 'Pink': 3, 'Yellow': 4, 'Rocket': 5 };
      cardsInHand.sort((a, b) => { 
          if (a.color !== b.color) return colorPriority[a.color] - colorPriority[b.color]; 
          return a.value - b.value; 
      });
      const myIndex = cardsInHand.findIndex(c => c.id === card.id);
      const angle = (myIndex - (cardsInHand.length - 1) / 2) * ANGLE_STEP;
      const pos = HAND_POSITIONS[card.owner as keyof typeof HAND_POSITIONS] || { x: 0, y: 0, rotation: 0 };
      
      return { 
          transform: `translate(calc(-50% + ${pos.x}px), calc(-50% + ${pos.y}px)) rotate(${pos.rotation}deg) translate(0px, ${HAND_RADIUS}px) rotate(${angle}deg) translate(0px, -${HAND_RADIUS}px)`,
          opacity: 1, zIndex: myIndex, transition: 'transform 0.5s ease-out'
      };
  };

  const playerNames = ['SUD', 'OUEST', 'NORD', 'EST'];

  return (
    <div className="w-full h-full relative bg-[#2c3e50] overflow-hidden shadow-inner flex items-center justify-center select-none">
        
        {/* TITRES DES JOUEURS (Au centre, sous les missions) */}
        {onPlayerClick && [0, 1, 2, 3].map(pid => (
            <div 
                key={`title-${pid}`}
                className="absolute z-0 cursor-pointer font-black text-white/30 hover:text-white text-lg uppercase tracking-[0.2em] transition-colors"
                style={getTitleStyle(pid) as any}
                onClick={() => onPlayerClick(pid)}
            >
                {playerNames[pid]}
            </div>
        ))}

        <div className="relative w-0 h-0 flex items-center justify-center z-10">
            
            {/* ZONES D'INFORMATION JOUEURS (Missions Uniquement) */}
            {safeCards.length > 0 && [0, 1, 2, 3].map(pid => {
                const pMissions = safeMissions.filter(m => m.ownerIndex === pid);
                if (pMissions.length === 0) return null;

                return (
                    <div 
                        key={pid} 
                        // Container centré, largeur ajustée pour centrer les missions
                        className="absolute w-[300px] h-[80px] pointer-events-none transition-all duration-500 z-[60] flex items-center justify-center gap-2" 
                        style={getInfoZoneStyle(pid)}
                    >
                        {pMissions.map((m, i) => (
                            <MissionToken key={i} mission={m} />
                        ))}
                    </div>
                );
            })}

            {/* CARTES DU JEU */}
            {safeCards.map((card) => {
                const style = getCardStyle(card);
                return (
                    <div 
                        key={card.id}
                        className="absolute top-0 left-0 w-20 aspect-[2/3] pointer-events-none"
                        style={{ ...style, willChange: 'transform, opacity' }}
                    >
                        <Card color={card.color} value={card.value} className="w-full h-full shadow-2xl border border-black/30 rounded-lg" />
                    </div>
                );
            })}
        </div>
      </div>
  );
}