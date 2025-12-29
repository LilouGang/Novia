import React, { useEffect, useState } from 'react';
import { CardData, MissionUI } from '../../types/index';
import Card from '../Card';

// =================================================================================
// 🛠️ CONFIGURATION 1 : ZONES D'INFO (Missions + Slot Indice)
// =================================================================================
const INFO_POSITIONS = {
    0: { x: 150,    y: 190,  rotation: 0 },    // SUD
    1: { x: -120,   y: 40,    rotation: 90 },   // OUEST
    2: { x: 150,    y: -110, rotation: 180 },  // NORD
    3: { x: 420,    y: 40,    rotation: -90 },  // EST
};

// =================================================================================
// 🛠️ CONFIGURATION 2 : CENTRE DES MAINS
// =================================================================================
const HAND_POSITIONS = {
    0: { x: 0,    y: 260,  rotation: 0 },    // SUD
    1: { x: -380, y: 0,    rotation: 90 },   // OUEST
    2: { x: 0,    y: -260, rotation: 180 },  // NORD
    3: { x: 380,  y: 0,    rotation: -90 },  // EST
};

// =================================================================================
// 🛠️ CONFIGURATION 3 : OFFSET DES CARTES COMMUNIQUÉES
// =================================================================================
const COMM_CARD_OFFSETS = {
    0: { x: -110,  y: -40 },   // SUD
    1: { x: 0,     y: 150 },    // OUEST
    2: { x: 190,   y: 40 },    // NORD
    3: { x: 80,    y: -150 },   // EST
};

// =================================================================================
// 🛠️ CONFIGURATION 4 : POSITION DU JETON SUR LA CARTE
// =================================================================================
const TOKEN_POSITIONS_CONFIG = {
    0: { TOP: { x: 0, y: -45 }, MID: { x: 30, y: 0 }, BOT: { x: 0, y: 45 } },
    1: { TOP: { x: 0, y: -45 }, MID: { x: 30, y: 0 }, BOT: { x: 0, y: 45 } },
    2: { TOP: { x: 0, y: -45 }, MID: { x: 30, y: 0 }, BOT: { x: 0, y: 45 } },
    3: { TOP: { x: 0, y: -45 }, MID: { x: 30, y: 0 }, BOT: { x: 0, y: 45 } }
};

const MissionToken: React.FC<{ mission: MissionUI }> = ({ mission }) => {
    const statusClass = mission.status === 'SUCCESS' 
        ? 'border-green-500 shadow-[0_0_15px_rgba(34,197,94,0.5)] bg-green-900/80' 
        : mission.status === 'FAILED' 
            ? 'border-red-500 opacity-60 bg-red-900/50' 
            : 'border-gray-500 bg-gray-900';

    const token = mission.token;
    const isSpecial = mission.cardColor === 'Special' || mission.cardValue === 0;
    
    const specialLabels: Record<string, string> = {
        'NO_TRICKS': '0 PLI', 'NO_TRICKS_PLAYER': '0 PLI (J)', 'ALL_ROCKETS': '🚀 ALL', 'SPECIFIC_WIN_1': 'WIN 1', 'NO_9_WIN': 'NO 9',
    };
    const label = (token && specialLabels[token]) || token;

    return (
        <div className={`relative w-10 h-14 rounded border-2 ${statusClass} flex flex-col items-center justify-center transform transition-all z-20 shrink-0 select-none`}>
            {!isSpecial && token !== 'None' && (
                <div className="absolute -top-3 -right-3 bg-purple-600 rounded-full w-5 h-5 flex items-center justify-center text-[10px] text-white font-bold shadow border border-white/20 z-30">
                    {token === 'Omega' ? 'Ω' : token}
                </div>
            )}
            
            {!isSpecial ? (
                <>
                    <div className={`w-full h-1.5 mb-1 ${mission.cardColor === 'Pink' ? 'bg-pink-500' : mission.cardColor === 'Green' ? 'bg-green-500' : mission.cardColor === 'Blue' ? 'bg-blue-600' : mission.cardColor === 'Yellow' ? 'bg-yellow-400' : mission.cardColor === 'Rocket' ? 'bg-gray-700' : 'bg-gray-600'}`}></div>
                    <div className="text-white font-bold text-lg leading-none">{mission.cardValue}</div>
                </>
            ) : (
                <div className="flex flex-col items-center justify-center h-full w-full p-0.5 text-center">
                    <span className="text-[8px] font-black text-gray-300 leading-tight uppercase">{label}</span>
                </div>
            )}

            {mission.status === 'SUCCESS' && <div className="absolute -bottom-2 -left-2 bg-white border border-green-500 rounded-full w-5 h-5 flex items-center justify-center shadow-md z-40"><span className="text-green-600 font-bold text-xs">✔</span></div>}
            {mission.status === 'FAILED' && <div className="absolute -bottom-2 -right-2 bg-white border border-red-500 rounded-full w-5 h-5 flex items-center justify-center shadow-md z-40"><span className="text-red-500 font-bold text-xs">✕</span></div>}
        </div>
    );
};

const ClueSlot: React.FC = () => (
    <div className="w-12 h-16 relative shrink-0 flex items-center justify-center">
        <div className="absolute inset-0 border-2 border-dashed border-white/10 rounded flex items-center justify-center">
            <span className="text-[9px] text-white/20 font-medium tracking-widest text-center">INDICE</span>
        </div>
    </div>
);

const CommunicationToken: React.FC<{ type: string, playerIndex: number }> = ({ type, playerIndex }) => {
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => { const timer = setTimeout(() => setIsVisible(true), 500); return () => clearTimeout(timer); }, []);

    const playerConfig = TOKEN_POSITIONS_CONFIG[playerIndex as keyof typeof TOKEN_POSITIONS_CONFIG];
    const pos = playerConfig[type as keyof typeof playerConfig] || { x: 0, y: 0 };

    return (
        <div 
            className={`absolute w-7 h-7 bg-green-500 rounded-full border-2 border-green-300 shadow-[0_0_15px_rgba(34,197,94,0.9)] z-[1000] transition-all duration-500 ease-out ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}
            style={{ transform: `translate(-50%, -50%) translate(${pos.x}px, ${pos.y}px)` }}
        ></div>
    );
};

// =================================================================================
// 🎨 COMPOSANT PRINCIPAL (Mise à jour Props)
// =================================================================================

type AIGameBoardProps = {
    allCards?: CardData[];
    missions?: MissionUI[];
    probabilities?: Record<string, number>;
    suggestedCardId?: string | null;
    activePlayer?: number;
    isTraining?: boolean;     // (Garde pour compatibilité, mais moins utilisé)
    isAutoPlaying?: boolean;  // Nouveau : Indique si l'IA joue toute seule
    isReplayMode?: boolean;
    communications?: Record<number, { cardId: string, type: string }>;
};

export default function AIGameBoard({ 
    allCards = [], missions = [], probabilities = {}, suggestedCardId, activePlayer = 0, 
    isTraining = false, isAutoPlaying = false, isReplayMode = false, communications = {}
}: AIGameBoardProps) {

  const HAND_RADIUS = 600; 
  const ANGLE_STEP = 5;

  const getCardStyle = (card: CardData): React.CSSProperties => {
      // 1. VICTOIRE
      if (card.status === 'WON') {
          const winPositions = [`translate(0px, 600px)`, `translate(-800px, 0px)`, `translate(0px, -600px)`, `translate(800px, 0px)`];
          return { 
              transform: `translate(-50%, -50%) ${winPositions[card.winnerIndex || 0]} scale(0.4)`, 
              opacity: 0, 
              zIndex: 500, 
              transition: 'transform 0.8s ease-in-out, opacity 0.8s ease-in-out'
          };
      }
      
      // 2. TABLE (Cartes jouées)
      if (card.status === 'TABLE') {
          const rX = (card.tableRotation * 5) % 15 - 7;
          const rY = (card.tableRotation * 7) % 15 - 7;
          return { 
              transform: `translate(-50%, -50%) translate(${rX}px, ${rY}px) rotate(${card.tableRotation}deg) scale(1.1)`, 
              opacity: 1, 
              zIndex: card.zIndex, 
              transition: 'transform 0.5s ease-in-out, opacity 0.5s ease-in-out'
          };
      }
      
      // 3. COMMUNICATION
      if (card.status === 'COMMUNICATED') {
          const infoPos = INFO_POSITIONS[card.owner as keyof typeof INFO_POSITIONS];
          const offset = COMM_CARD_OFFSETS[card.owner as keyof typeof COMM_CARD_OFFSETS] || { x: 0, y: 0 };
          const rad = (infoPos.rotation * Math.PI) / 180;
          const cos = Math.cos(rad);
          const sin = Math.sin(rad);
          const rotOffsetX = offset.x * cos - offset.y * sin;
          const rotOffsetY = offset.x * sin + offset.y * cos;
          const finalX = infoPos.x + rotOffsetX;
          const finalY = infoPos.y + rotOffsetY;

          return {
              transform: `translate(-50%, -50%) translate(${finalX}px, ${finalY}px) rotate(${infoPos.rotation}deg) scale(0.6)`,
              opacity: 1,
              zIndex: 50,
              transition: 'transform 0.5s ease-out' 
          };
      }
      
      // 4. MAIN
      const cardsInHand = allCards.filter(c => c.owner === card.owner && c.status === 'HAND');
      const colorPriority: Record<string, number> = { 'Blue': 1, 'Green': 2, 'Pink': 3, 'Yellow': 4, 'Rocket': 5 };
      cardsInHand.sort((a, b) => { if (a.color !== b.color) return colorPriority[a.color] - colorPriority[b.color]; return a.value - b.value; });
      
      const myIndex = cardsInHand.findIndex(c => c.id === card.id);
      const angle = (myIndex - (cardsInHand.length - 1) / 2) * ANGLE_STEP;
      const pos = HAND_POSITIONS[card.owner as keyof typeof HAND_POSITIONS] || { x: 0, y: 0, rotation: 0 };
      const centerHTML = `translate(calc(-50% + ${pos.x}px), calc(-50% + ${pos.y}px))`;

      return { 
          transform: `${centerHTML} rotate(${pos.rotation}deg) translate(0px, ${HAND_RADIUS}px) rotate(${angle}deg) translate(0px, -${HAND_RADIUS}px)`,
          opacity: 1, 
          zIndex: myIndex,
          transition: 'transform 0.5s ease-out'
      };
  };

  const getInfoZoneStyle = (playerIndex: number): React.CSSProperties => {
      const pos = INFO_POSITIONS[playerIndex as keyof typeof INFO_POSITIONS];
      return { 
          transform: `translate(-50%, -50%) translate(${pos.x}px, ${pos.y}px) rotate(${pos.rotation}deg)` 
      };
  };

  // Logique d'affichage des textes d'ambiance
  const showIdleText = !isTraining && !isReplayMode && allCards.length === 0;
  const showProcessingText = isTraining || isAutoPlaying;

  return (
    <div className="w-full h-screen relative bg-[#1e293b] overflow-hidden shadow-inner flex items-center justify-center select-none font-sans">
        
        {/* TEXTE D'AMBIANCE */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-[1000]">
            {showIdleText && (
                <div className="animate-fade-in text-center">
                    <h2 className="text-3xl font-bold text-blue-400 mb-2 drop-shadow-md">Novia - Mode Démo</h2>
                    <p className="text-gray-400 font-medium drop-shadow">Choisissez une mission pour voir l'IA jouer</p>
                </div>
            )}
            
            {showProcessingText && (
                <div className="text-center animate-pulse bg-black/40 p-4 rounded-xl backdrop-blur-sm border border-purple-500/20">
                    <div className="text-5xl mb-2">⚡</div>
                    <h2 className="text-xl font-bold text-purple-400 mb-1 drop-shadow-[0_0_10px_rgba(168,85,247,0.5)]">
                        Partie en cours...
                    </h2>
                    <p className="text-gray-300 text-sm">Le réseau de neurones calcule le meilleur coup</p>
                </div>
            )}
        </div>

        <div className="relative w-0 h-0 flex items-center justify-center">

            {/* ZONES D'INFORMATION JOUEURS */}
            {allCards.length > 0 && [0, 1, 2, 3].map(pid => {
                const pMissions = missions.filter(m => m.ownerIndex === pid);
                return (
                    <div 
                        key={pid} 
                        className="absolute w-[300px] h-[80px] pointer-events-none transition-all duration-500" 
                        style={getInfoZoneStyle(pid)}
                    >
                        <div className="absolute left-1/2 top-1/2 -translate-y-1/2 w-px h-8 bg-white/20"></div>
                        <div className="absolute left-1/2 top-1/2 -translate-y-1/2 ml-4"><ClueSlot /></div>
                        <div className="absolute right-1/2 top-1/2 -translate-y-1/2 mr-4 flex gap-2 justify-end items-center">
                            {pMissions.map((m, i) => <MissionToken key={i} mission={m} />)}
                        </div>
                    </div>
                );
            })}

            {/* CARTES DU JEU */}
            {allCards.map((card) => {
                const style = getCardStyle(card);
                const probKey = `${card.color}-${card.value}`;
                const prob = probabilities[probKey];
                const isSuggested = suggestedCardId === probKey;
                
                const isThisCommunicated = card.status === 'COMMUNICATED';
                const commData = communications[card.owner];
                const showToken = isThisCommunicated && commData && commData.cardId === card.id;

                return (
                    <div 
                        key={card.id}
                        className={`absolute top-0 left-0 w-20 aspect-[2/3]`}
                        style={{ 
                            ...style, 
                            willChange: 'transform, opacity',
                            boxShadow: isSuggested ? '0 0 30px 10px rgba(59, 130, 246, 0.7)' : undefined
                        }}
                    >
                        {isSuggested && <div className="absolute -inset-1 bg-blue-500 rounded-lg animate-pulse blur-sm -z-10"></div>}
                        
                        <Card color={card.color} value={card.value} className="w-full h-full shadow-2xl border border-black/30 rounded-lg" />
                        
                        {/* Jeton Communication */}
                        {showToken && (
                            <div className="absolute top-1/2 left-1/2 w-0 h-0 z-50">
                                <CommunicationToken type={commData.type} playerIndex={card.owner} />
                            </div>
                        )}

                        {/* Pourcentage de confiance */}
                        {prob !== undefined && (
                            <div className="absolute top-8 left-0 right-0 flex justify-center z-50">
                                <div className="bg-black/80 backdrop-blur-[2px] rounded px-1.5 py-0.5 shadow border border-white/20">
                                    <span className={`text-xs font-black ${prob >= 80 ? 'text-green-400' : prob <= 20 ? 'text-red-400' : 'text-yellow-400'}`}>{prob}%</span>
                                </div>
                            </div>
                        )}
                    </div>
                );
            })}
        </div>
    </div>
  );
}