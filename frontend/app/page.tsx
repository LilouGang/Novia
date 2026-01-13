'use client';

import React, { useState } from 'react';

// --- IMPORTS MODE DIEU ---
import { useGodMode } from '../hooks/useGodMode';
import GodSidebar from '../components/god/Sidebar';
import GodGameBoard from '../components/god/GameBoard';
import CardPicker from '../components/god/CardPicker';

// --- IMPORTS MODE AI ---
import { useAiMode } from '../hooks/useAIMode';
import AISidebar from '../components/ai/Sidebar';
import AIGameBoard from '../components/ai/GameBoard';

// --- IMPORT COMMUN ---
import GameModeSelector from '../components/GameModeSelector';

export default function Home() {
  const [gameMode, setGameMode] = useState<'GOD' | 'AI' | null>(null);

  const godGame = useGodMode();
  const aiGame = useAiMode();

  // --- SÉLECTEUR DE MODE ---
  if (!gameMode) {
      return <GameModeSelector onSelectMode={(mode) => {
          setGameMode(mode);
          if (mode === 'GOD') godGame.startNewGame();
      }} />;
  }

  // --- RENDU MODE DIEU ---
  if (gameMode === 'GOD') {
      return (
        <div className="h-screen w-screen flex overflow-hidden bg-[#2c3e50] font-sans relative">
            <GodSidebar 
                {...godGame} 
                removeMission={(idx) => godGame.setMissions(p => p.filter((_, i) => i !== idx))} 
                globalConstraints={godGame.globalConstraints}
                clearAllHands={godGame.clearAllHands}
                clearStats={godGame.clearStats}
                communications={godGame.communications}
                addCommunication={godGame.addCommunication}
                gameMode="GOD"
                onBackToMenu={() => setGameMode(null)}
            />
            
            <GodGameBoard 
                allCards={godGame.allCards}
                missions={godGame.missions}
                onPlayerClick={godGame.openEditor}
            />

            {godGame.editingPlayer !== null && (
                <CardPicker 
                    currentPlayer={godGame.editingPlayer}
                    allCards={godGame.allCards}
                    onToggleCard={godGame.toggleCard}
                    onClose={godGame.closeEditor}
                />
            )}
        </div>
      );
  }

  // --- RENDU MODE IA ---
  if (gameMode === 'AI') {
        return (
            <div className="h-screen w-screen flex overflow-hidden bg-[#111827] font-sans relative">
                <AISidebar 
                    // --- ÉTATS ---
                    currentStepText={aiGame.currentStepText}
                    logs={aiGame.logs}
                    isThinking={aiGame.isThinking}
                    activePlayer={aiGame.activePlayer}
                    
                    // --- CONNEXION ICI ---
                    // On connecte la variable du hook. Si elle n'existe pas encore dans useAiMode,
                    // cela renverra undefined (donc false), ce qui ne cassera rien.
                    isServerWakingUp={aiGame.isServerWakingUp} 

                    // --- MODES ---
                    isDevMode={aiGame.isDevMode}
                    isTraining={aiGame.isTraining}
                    isAutoPlaying={aiGame.isAutoPlaying}
                    isReplayMode={aiGame.isReplayMode}

                    // --- DATA ---
                    trainingStats={aiGame.trainingStats}
                    replayData={aiGame.replayData}
                    milestones={aiGame.milestones}
                    currentMilestoneId={aiGame.currentMilestoneId}

                    // --- ACTIONS REPLAY & TRAINING ---
                    onLoadReplay={aiGame.loadReplay}
                    onNextReplayStep={aiGame.nextReplayStep}
                    onExitReplay={aiGame.exitReplay}
                    onStartTraining={aiGame.startTraining}

                    // --- ACTIONS JEU ---
                    initializeMission={aiGame.initializeMission}
                    playOneMove={aiGame.playOneMove}
                    toggleAutoPlay={aiGame.toggleAutoPlay}
                    onReset={aiGame.onReset}

                    // --- NAVIGATION ---
                    onBackToMenu={() => setGameMode(null)} 
                />
                
                <AIGameBoard 
                    allCards={aiGame.allCards}
                    missions={aiGame.missions}
                    activePlayer={aiGame.activePlayer}
                    isTraining={aiGame.isTraining}
                    isReplayMode={aiGame.isReplayMode}
                    isAutoPlaying={aiGame.isAutoPlaying}
                    communications={aiGame.communications}
                />
            </div>
        );
    }

  return null;
}