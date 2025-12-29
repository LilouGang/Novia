import React from 'react';

type CardProps = {
  color: string;
  value: number;
  className?: string;
};

export default function Card({ color, value, className = '' }: CardProps) {
  
  // Définition des couleurs exactes du jeu (approximatives pour le style néon)
  const getColors = (c: string) => {
    switch (c) {
      case 'Blue': return { bg: 'bg-blue-900', border: 'border-blue-400', text: 'text-blue-300', icon: '#60a5fa' };
      case 'Green': return { bg: 'bg-green-900', border: 'border-green-400', text: 'text-green-300', icon: '#4ade80' };
      case 'Pink': return { bg: 'bg-pink-900', border: 'border-pink-400', text: 'text-pink-300', icon: '#f472b6' };
      case 'Yellow': return { bg: 'bg-yellow-900', border: 'border-yellow-400', text: 'text-yellow-300', icon: '#facc15' };
      case 'Rocket': return { bg: 'bg-gray-800', border: 'border-gray-400', text: 'text-white', icon: '#ffffff' };
      default: return { bg: 'bg-gray-800', border: 'border-gray-500', text: 'text-gray-400', icon: '#9ca3af' };
    }
  };

  const theme = getColors(color);
  const isRocket = color === 'Rocket';

  // --- SYMBOLES SVG ---
  const renderIcon = () => {
    switch (color) {
      case 'Blue': // Planète avec anneau
        return (
          <svg viewBox="0 0 24 24" fill="none" className="w-full h-full opacity-30">
            <circle cx="12" cy="12" r="6" stroke={theme.icon} strokeWidth="2" fill={theme.icon} fillOpacity="0.2"/>
            <path d="M7 16C7 16 9 18 12 18C15 18 17 16 17 16" stroke={theme.icon} strokeWidth="2" strokeLinecap="round"/>
            <ellipse cx="12" cy="12" rx="9" ry="3" stroke={theme.icon} strokeWidth="1.5" transform="rotate(-15 12 12)"/>
          </svg>
        );
      case 'Green': // Radar / Onde
        return (
          <svg viewBox="0 0 24 24" fill="none" className="w-full h-full opacity-30">
            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke={theme.icon} strokeWidth="1.5"/>
            <path d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z" stroke={theme.icon} strokeWidth="1.5"/>
            <circle cx="12" cy="12" r="2" fill={theme.icon}/>
            <path d="M12 12L16 8" stroke={theme.icon} strokeWidth="1.5"/>
          </svg>
        );
      case 'Pink': // Casque / Forme organique
        return (
            <svg viewBox="0 0 24 24" fill="none" className="w-full h-full opacity-30">
            <rect x="5" y="5" width="14" height="14" rx="4" stroke={theme.icon} strokeWidth="2" fill={theme.icon} fillOpacity="0.1"/>
            <path d="M9 12H15" stroke={theme.icon} strokeWidth="2" strokeLinecap="round"/>
            <path d="M12 9V15" stroke={theme.icon} strokeWidth="2" strokeLinecap="round"/>
            </svg>
        );
      case 'Yellow': // Étoile / Soleil
        return (
          <svg viewBox="0 0 24 24" fill="none" className="w-full h-full opacity-30">
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" 
                stroke={theme.icon} strokeWidth="2" fill={theme.icon} fillOpacity="0.2"/>
          </svg>
        );
      case 'Rocket': // Fusée noire
        return (
          <svg viewBox="0 0 24 24" fill="none" className="w-full h-full opacity-40">
            <path d="M12 2.5C12 2.5 15.5 8 15.5 13C15.5 16.5 14.5 18 12 21.5C9.5 18 8.5 16.5 8.5 13C8.5 8 12 2.5 12 2.5Z" fill="white"/>
            <path d="M12 14.5C12.8284 14.5 13.5 13.8284 13.5 13C13.5 12.1716 12.8284 11.5 12 11.5C11.1716 11.5 10.5 12.1716 10.5 13C10.5 13.8284 11.1716 14.5 12 14.5Z" fill="black"/>
            <path d="M15.5 16.5L18 20.5" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            <path d="M8.5 16.5L6 20.5" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        );
      default: return null;
    }
  };

  return (
    <div className={`relative rounded-lg shadow-xl overflow-hidden select-none transition-transform ${theme.bg} ${theme.border} border-2 ${className}`}>
      
      {/* Fond Décoratif (Icone géante) */}
      <div className="absolute inset-0 flex items-center justify-center p-2">
        {renderIcon()}
      </div>

      {/* Valeur Centrale */}
      <div className={`absolute inset-0 flex items-center justify-center font-black text-4xl drop-shadow-md ${theme.text}`}>
        {value}
      </div>

      {/* Petit index en haut à gauche */}
      <div className={`absolute top-1 left-1.5 text-xs font-bold ${theme.text}`}>
        {value}
      </div>

      {/* Petit index en bas à droite (renversé) */}
      <div className={`absolute bottom-1 right-1.5 text-xs font-bold ${theme.text} rotate-180`}>
        {value}
      </div>
    </div>
  );
}