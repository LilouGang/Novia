import React from 'react';
import { CardData } from '../../types';
import Card from '../Card';

type CardPickerProps = {
    currentPlayer: number; // 0=Sud, 1=Ouest, 2=Nord, 3=Est
    allCards: CardData[];
    onToggleCard: (color: string, value: number) => void;
    onClose: () => void;
};

export default function CardPicker({ currentPlayer, allCards, onToggleCard, onClose }: CardPickerProps) {
    const COLORS = ['Blue', 'Green', 'Pink', 'Yellow', 'Rocket'];
    const PLAYER_NAMES = ['SUD', 'OUEST', 'NORD', 'EST'];

    // Combien de cartes ce joueur a-t-il déjà ?
    const myCount = allCards.filter(c => c.owner === currentPlayer && c.status === 'HAND').length;

    return (
        <div className="fixed inset-0 bg-black/85 z-[9999] flex items-center justify-center backdrop-blur-md animate-fade-in p-4">
            
            <div className="bg-gray-900 border border-gray-600 rounded-xl shadow-2xl w-full max-w-6xl max-h-[95vh] flex flex-col">
                
                {/* En-tête (Fixe) */}
                <div className="flex justify-between items-center p-6 border-b border-gray-700 bg-gray-900 rounded-t-xl z-10">
                    <div>
                        <h2 className="text-3xl font-bold text-white flex items-center gap-3">
                            Main de <span className="text-purple-400">{PLAYER_NAMES[currentPlayer]}</span>
                        </h2>
                        <p className="text-sm text-gray-400 mt-1">
                            <span className="font-bold text-white">{myCount}</span> cartes sélectionnée(s).
                        </p>
                    </div>
                    <button onClick={onClose} className="text-gray-400 hover:text-white bg-gray-800 hover:bg-gray-700 w-12 h-12 rounded-full font-bold text-xl transition">✕</button>
                </div>

                {/* Grille des cartes (Scrollable) */}
                <div className="overflow-y-auto p-6 space-y-6 flex-1">
                    {COLORS.map(color => (
                        <div key={color} className="flex flex-col md:flex-row gap-6 items-start bg-gray-800/40 p-4 rounded-xl border border-white/5">
                            {/* Label Couleur */}
                            <div className={`md:w-24 pt-4 text-sm font-black tracking-widest uppercase md:text-right ${color === 'Rocket' ? 'text-gray-400' : 'text-'+color.toLowerCase()+'-400'}`}>
                                {color}
                            </div>
                            
                            {/* Liste des boutons */}
                            <div className="flex flex-wrap gap-3">
                                {(color === 'Rocket' ? [1,2,3,4] : [1,2,3,4,5,6,7,8,9]).map(val => {
                                    
                                    const cardId = `${color}-${val}`;
                                    const existingCard = allCards.find(c => c.id === cardId);
                                    
                                    // États de la carte
                                    const isMine = existingCard?.owner === currentPlayer;
                                    const isTaken = existingCard !== undefined && !isMine; // Prise par un autre
                                    
                                    return (
                                        <button
                                            key={val}
                                            // MODIF: On appelle toggleCard même si c'est pris (pour le vol)
                                            onClick={() => onToggleCard(color, val)}
                                            // MODIF: On ne désactive plus le bouton
                                            // disabled={isTaken} 
                                            className={`
                                                relative w-20 aspect-[2/3] rounded-lg transition-all duration-200 group
                                                ${isMine 
                                                    ? 'ring-4 ring-green-500 scale-105 z-10 shadow-2xl' 
                                                    : isTaken 
                                                        // MODIF: Style spécifique pour indiquer qu'on peut voler (curseur main, un peu transparent mais pas trop)
                                                        ? 'opacity-60 grayscale hover:grayscale-0 hover:opacity-100 cursor-pointer ring-2 ring-red-500/30 hover:ring-red-500/80' 
                                                        : 'hover:scale-110 hover:z-20 hover:shadow-xl opacity-80 hover:opacity-100'
                                                }
                                            `}
                                        >
                                            <div className="w-full h-full pointer-events-none rounded-lg overflow-hidden border border-black/20 shadow-sm">
                                                <Card color={color as any} value={val} className="w-full h-full" />
                                            </div>
                                            
                                            {/* Badge si sélectionné (Checkmark) */}
                                            {isMine && (
                                                <div className="absolute -top-2 -right-2 bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center shadow-lg border-2 border-gray-900 font-bold text-xs">
                                                    ✓
                                                </div>
                                            )}

                                            {/* Badge si prise par un autre */}
                                            {isTaken && existingCard && (
                                                <div className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-lg backdrop-blur-[1px] group-hover:bg-black/30 transition-colors">
                                                    <span className="text-xs font-bold text-white bg-red-600 px-2 py-1 rounded shadow-lg border border-red-400 group-hover:scale-110 transition-transform">
                                                        {PLAYER_NAMES[existingCard.owner]}
                                                    </span>
                                                </div>
                                            )}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pied de page (Fixe) */}
                <div className="p-6 border-t border-gray-700 bg-gray-900 rounded-b-xl flex justify-end z-10">
                    <button 
                        onClick={onClose}
                        className="bg-white text-gray-900 hover:bg-gray-200 py-3 px-10 rounded-lg font-bold shadow-lg transition active:scale-95 text-lg"
                    >
                        Terminé
                    </button>
                </div>

            </div>
        </div>
    );
}