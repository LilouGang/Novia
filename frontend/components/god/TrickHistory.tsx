import React from 'react';
import { MoveStep } from '../../types';

type TrickHistoryProps = {
    steps: MoveStep[];
};

export default function TrickHistory({ steps }: TrickHistoryProps) {
    
    // On découpe les coups (40 cartes) en plis (10 paquets de 4)
    const tricks = [];
    for (let i = 0; i < steps.length; i += 4) {
        tricks.push(steps.slice(i, i + 4));
    }

    // Helpers d'affichage
    const getPlayerName = (idx: number) => ['Sud', 'Ouest', 'Nord', 'Est'][idx];
    
    const getColorClass = (color: string) => {
        switch(color) {
            case 'Blue': return 'bg-blue-900 text-blue-200 border-blue-700';
            case 'Green': return 'bg-green-900 text-green-200 border-green-700';
            case 'Pink': return 'bg-pink-900 text-pink-200 border-pink-700';
            case 'Yellow': return 'bg-yellow-900 text-yellow-200 border-yellow-700';
            case 'Rocket': return 'bg-gray-700 text-white border-gray-500 shadow-inner';
            default: return 'bg-gray-800';
        }
    };

    return (
        <div className="space-y-2 mt-4">
            <h3 className="text-xs font-bold text-gray-400 uppercase border-b border-gray-700 pb-1 flex justify-between items-center">
                <span>📝 Détail de la solution</span>
                <span className="text-[9px] bg-gray-800 px-1 rounded text-gray-500">{tricks.length} Plis</span>
            </h3>
            
            {tricks.map((trick, i) => (
                <div key={i} className="bg-black/30 p-2 rounded border border-white/5 text-[10px] hover:bg-black/40 transition-colors">
                    <div className="flex justify-between mb-1 text-gray-400 font-mono border-b border-white/5 pb-1">
                        <span className="font-bold text-gray-300">Pli #{i + 1}</span>
                        <span>Entame: <span className="text-gray-200">{getPlayerName(trick[0].player)}</span></span>
                    </div>
                    
                    <div className="grid grid-cols-4 gap-1">
                        {trick.map((move, j) => (
                            <div key={j} className="flex flex-col items-center group">
                                <span className="text-[8px] text-gray-500 mb-0.5 group-hover:text-gray-300 transition-colors">
                                    {getPlayerName(move.player).substring(0,1)}
                                </span>
                                <div className={`w-full text-center py-0.5 rounded border ${getColorClass(move.card.color)} font-bold text-[9px]`}>
                                    {move.card.value}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
            
            {/* Petit footer pour indiquer la fin */}
            <div className="text-center pt-2">
                <span className="text-[9px] text-gray-600 italic">Fin de la partie</span>
            </div>
        </div>
    );
}