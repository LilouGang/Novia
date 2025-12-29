import { useState } from 'react';
import { CardData, MissionUI, BackendConstraint, TrainingStats, ReplayStep, SavedReplay } from '../types';
import { REAL_MISSION_LOGBOOK } from '../data/real_missions';

// --- HELPERS ---

const convertBackendToFrontend = (d: any): CardData[] => {
    return ['player_1', 'player_2', 'player_3', 'player_4'].flatMap((k, pIdx) => 
        d[k].map((c: any) => ({
            id: `${c.color}-${c.value}`, 
            color: c.color, 
            value: c.value, 
            owner: pIdx,
            status: 'HAND', 
            zIndex: 0, 
            tableRotation: ((c.value * 100 + pIdx * 50 + c.color.length) % 40) - 20, 
            winnerIndex: undefined
        }))
    );
};

const getTrickWinner = (cards: CardData[]): number => {
    if (cards.length !== 4) return 0;
    let best = cards[0];
    const lead = best.color;
    for (let i = 1; i < 4; i++) {
        const curr = cards[i], isR = curr.color === 'Rocket', bestR = best.color === 'Rocket';
        if ((isR && (!bestR || curr.value > best.value)) || (!isR && curr.color === lead && !bestR && curr.value > best.value)) best = curr;
    }
    return best.owner;
};

const generateMissionSetup = (mid: number, cards: CardData[]) => {
    const mDef = REAL_MISSION_LOGBOOK.find(m => m.id === mid);
    if (!mDef) return null;
    const cmdIdx = cards.find(c => c.color === 'Rocket' && c.value === 4)?.owner ?? 0;
    const nMissions: MissionUI[] = [], nConstrs: BackendConstraint[] = [];
    const valid = cards.filter(c => c.color !== 'Rocket').sort(() => Math.random() - 0.5);
    let tIdx = 0, tDistrib: { token: string }[] = [];

    mDef.constraints.forEach(c => { if (c.type === 'TARGET_CARD') for(let i=0; i<(c.args.count||1); i++) tDistrib.push({ token: 'None' }); });
    let absCount = 0;
    mDef.constraints.forEach(c => {
        if (c.type === 'ORDER_ABSOLUTE') { for(let i=0; i < c.args.count; i++) if (tDistrib[i]) tDistrib[i].token = (i + 1).toString(); absCount = c.args.count; }
        if (c.type === 'ORDER_RELATIVE') { const toks = ['>', '>>', '>>>', '>>>>'], start = c.args.startIndex ?? absCount; for(let i=0; i < c.args.count; i++) if (tDistrib[start + i]) tDistrib[start + i].token = toks[i]; }
        if (c.type === 'ORDER_OMEGA' && tDistrib.length) tDistrib[tDistrib.length - 1].token = 'Omega';
    });

    tDistrib.forEach((t, i) => {
        if (tIdx >= valid.length) return;
        nMissions.push({ cardColor: valid[tIdx].color, cardValue: valid[tIdx].value, ownerIndex: (cmdIdx + i) % 4, token: t.token });
        tIdx++;
    });

    mDef.constraints.forEach(c => {
        if(c.type === 'NO_TRICKS') nConstrs.push({ type: 'NO_TRICKS', player: (cmdIdx + 1) % 4 });
        else if (c.type === 'TRICK_COUNT') nConstrs.push({ type: 'TRICK_COUNT', player: 0, count: c.args.count });
    });
    return { missions: nMissions, constraints: nConstrs };
};

// --- HOOK PRINCIPAL ---

export const useAIMode = () => {
    const [allCards, setAllCards] = useState<CardData[]>([]);
    const [missions, setMissions] = useState<MissionUI[]>([]);
    const [communications, setCommunications] = useState<Record<number, { cardId: string, type: string }>>({});
    const [globalConstraints, setGlobalConstraints] = useState<BackendConstraint[]>([]);
    const [activePlayer, setActivePlayer] = useState(0); 
    const [trickCards, setTrickCards] = useState<CardData[]>([]); 
    const [playedHistory, setPlayedHistory] = useState<any[]>([]);

    const [isThinking, setIsThinking] = useState(false);
    const [logs, setLogs] = useState<string[]>([]);
    const [currentStepText, setCurrentStepText] = useState("En attente de mission...");
    const [probabilities, setProbabilities] = useState<Record<string, number>>({});
    const [suggestedCardId, setSuggestedCardId] = useState<string | null>(null);

    const [isTraining, setIsTraining] = useState(false);
    const [trainingStats, setTrainingStats] = useState<TrainingStats | null>(null);
    const [replayData, setReplayData] = useState<ReplayStep[] | null>(null);
    const [isReplayMode, setIsReplayMode] = useState(false);
    const [replayStepIndex, setReplayStepIndex] = useState(-1);

    const [milestones, setMilestones] = useState<SavedReplay[]>([]);
    const [currentMilestoneId, setCurrentMilestoneId] = useState<number | null>(null);

    const addLog = (msg: string) => setLogs(prev => [`> ${msg}`, ...prev]);
    const getPlayerName = (idx: number) => ['Sud', 'Ouest', 'Nord', 'Est'][idx];

    // DÉFINITION DE L'URL API (Vercel ou Localhost)
    const API_URL = ((import.meta as any).env?.VITE_API_URL) || 'http://localhost:8000';

    const resetGameStates = () => {
        setAllCards([]); setMissions([]); setLogs([]); setProbabilities({});
        setPlayedHistory([]); setTrickCards([]); setActivePlayer(0);
        setSuggestedCardId(null); setIsReplayMode(false);
        setCommunications({});
    };

    // --- ENTRAINEMENT ---
    const startTraining = async (episodesCount: number, missionId: number) => {
        setIsTraining(true); 
        resetGameStates();
        setTrainingStats(null); 
        addLog(`🚀 Entraînement ${episodesCount} itérations (Mission ${missionId})...`);
        
        try {
            // UTILISATION DE API_URL
            const res = await fetch(`${API_URL}/train-ai`, { 
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ episodes: episodesCount, mission_id: missionId })
            });
            if (!res.body) return;
            const reader = res.body.getReader();
            const decoder = new TextDecoder();
            let buffer = '';
            while (true) {
                const { done, value } = await reader.read();
                if (done) break;
                buffer += decoder.decode(value, { stream: true });
                const lines = buffer.split('\n');
                buffer = lines.pop() || '';
                for (const line of lines) {
                    if (!line.trim()) continue;
                    try {
                        const data = JSON.parse(line);
                        
                        if (data.type === 'TRAINING_UPDATE') {
                            setTrainingStats(data);
                            if (data.milestone_replay && data.milestone_replay.length > 0) {
                                const newMilestone: SavedReplay = {
                                    episode: data.total_lifetime_games,
                                    replay: data.milestone_replay,
                                    reward: data.avg_reward,
                                    initial_missions: data.milestone_missions || [],
                                    initial_hands: data.milestone_hands || []
                                };
                                setMilestones(prev => [...prev, newMilestone]);
                                addLog(`💾 Replay sauvegardé (Itération ${data.total_lifetime_games})`);
                            }
                        }
                        
                        if (data.type === 'TRAINING_COMPLETE') { 
                            addLog("✅ Session terminée."); 
                            setIsTraining(false); 
                        }
                    } catch (e) { console.error(e); }
                }
            }
        } catch (e) { 
            console.error(e); 
            setIsTraining(false); 
            addLog("❌ Erreur de connexion au serveur (Trainer)"); 
        }
    };

    // --- REPLAY (Identique, pas d'appel réseau) ---
    const loadReplay = (replaySteps?: ReplayStep[], milestoneId?: number) => {
        const dataToLoad = replaySteps || replayData;
        if (!dataToLoad) return;
        
        setIsReplayMode(true); 
        setReplayData(dataToLoad); 
        setReplayStepIndex(-1);
        setTrickCards([]);
        setCommunications({});
        setCurrentMilestoneId(milestoneId || null);
        
        let savedMilestone: SavedReplay | undefined;
        if (milestoneId) {
            savedMilestone = milestones.find(m => m.episode === milestoneId);
            if (savedMilestone && savedMilestone.initial_missions) {
                const freshMissions = savedMilestone.initial_missions.map(m => ({...m, status: 'PENDING' as const}));
                setMissions(freshMissions);
            }
        }

        if (savedMilestone && savedMilestone.initial_hands && savedMilestone.initial_hands.length > 0) {
            const loadedCards: CardData[] = savedMilestone.initial_hands.map(c => ({
                id: `${c.color}-${c.value}`, color: c.color as any, value: c.value, owner: c.owner,
                status: 'HAND', zIndex: 0, tableRotation: ((c.value * 100 + c.owner * 50 + c.color.length) % 40) - 20, winnerIndex: undefined
            }));
            setAllCards(loadedCards);
        } else {
            const uniqueCardsMap = new Map();
            dataToLoad.forEach(step => {
                if (!step.card || step.card.color === 'Unknown' || step.action_type === 'COLLECT' || step.action_type === 'INFO') return;
                const id = `${step.card.color}-${step.card.value}`;
                if (!uniqueCardsMap.has(id)) {
                    uniqueCardsMap.set(id, {
                        id: id, color: step.card.color as any, value: step.card.value,
                        owner: step.player, status: 'HAND', zIndex: 0, tableRotation: 0
                    });
                }
            });
            setAllCards(Array.from(uniqueCardsMap.values()));
        }

        setCurrentStepText(milestoneId ? `Replay chargé (Itération ${milestoneId}). Prêt.` : "Mode Replay Prêt.");
    };

    const nextReplayStep = () => {
        if (!replayData || replayStepIndex >= replayData.length - 1) return;
        
        let nextIdx = replayStepIndex + 1;
        let move = replayData[nextIdx];
        
        if (move.action_type === 'INFO') {
            setCurrentStepText(`ℹ️ ${move.step_info}`);
            setReplayStepIndex(nextIdx);
            return;
        }

        if (move.action_type === 'COMMUNICATE') {
            const cardId = `${move.card.color}-${move.card.value}`;
            let tokenType = 'MID';
            if (move.step_info?.includes('TOP')) tokenType = 'TOP';
            else if (move.step_info?.includes('BOT')) tokenType = 'BOT';
            else if (move.step_info?.includes('MID')) tokenType = 'MID';

            setCurrentStepText(`📢 J${move.player + 1} communique : ${move.card.value} ${move.card.color} (${tokenType})`);
            setCommunications(prev => ({ ...prev, [move.player]: { cardId, type: tokenType } }));
            setAllCards(prev => prev.map(c => c.id === cardId ? { ...c, status: 'COMMUNICATED' as any } : c));
            setReplayStepIndex(nextIdx);
            return;
        }

        if (move.action_type === 'COLLECT') {
            setCurrentStepText(`✋ Pli terminé. Joueur ${move.player + 1} ramasse.`);
            setAllCards(prev => prev.map(c => c.status === 'TABLE' ? { ...c, status: 'WON', winnerIndex: move.player, zIndex: 500 } : c));
            
            setMissions(prev => prev.map(m => {
                const targetId = `${m.cardColor}-${m.cardValue}`;
                const isTargetOnTable = allCards.some(c => c.id === targetId && c.status === 'TABLE');
                if (isTargetOnTable) {
                    return (move.player === m.ownerIndex) ? { ...m, status: 'SUCCESS' } : { ...m, status: 'FAILED' };
                }
                return m;
            }));

            let skipCount = 0;
            while (
                nextIdx + 1 + skipCount < replayData.length && 
                replayData[nextIdx + 1 + skipCount].action_type === 'INFO'
            ) {
                skipCount++;
            }
            setReplayStepIndex(nextIdx + skipCount);
            return;
        }

        const cardId = `${move.card.color}-${move.card.value}`;
        const scoreInfo = move.reward ? `(${move.reward > 0 ? '+' : ''}${move.reward})` : '';
        setCurrentStepText(`J${move.player + 1}: ${move.card.value} ${move.card.color} ${scoreInfo} ${move.step_info || ''}`);

        setAllCards(prev => {
            const cardsOnTableCount = prev.filter(c => c.status === 'TABLE').length;
            const newZIndex = 100 + cardsOnTableCount;
            return prev.map(c => c.id === cardId ? { ...c, status: 'TABLE', zIndex: newZIndex, tableRotation: (Math.random() * 20) - 10, winnerIndex: undefined } : c);
        });

        let skipCount = 0;
        while (nextIdx + 1 + skipCount < replayData.length && replayData[nextIdx + 1 + skipCount].action_type === 'INFO') {
            skipCount++;
        }
        setReplayStepIndex(nextIdx + skipCount);
    };

    const initializeMission = async (missionId: number) => {
        resetGameStates(); setIsThinking(true); setCurrentStepText("Distribution...");
        try {
            // UTILISATION DE API_URL
            const res = await fetch(`${API_URL}/start-game`);
            const gData = await res.json();
            const cards = convertBackendToFrontend(gData);
            setAllCards(cards);
            const setup = generateMissionSetup(missionId, cards);
            if (setup) {
                setMissions(setup.missions); setGlobalConstraints(setup.constraints);
                const cmd = cards.find(c => c.color === 'Rocket' && c.value === 4)?.owner || 0;
                setActivePlayer(cmd); setCurrentStepText(`Mission ${missionId} chargée. Au tour de ${getPlayerName(cmd)}.`);
            }
        } catch (e) { console.error(e); setCurrentStepText("Erreur serveur."); } finally { setIsThinking(false); }
    };

    const askAI = async () => {
        if (trickCards.length === 4) return;
        setIsThinking(true); setProbabilities({}); setSuggestedCardId(null);
        try {
            const hands: any = { player_1: [], player_2: [], player_3: [], player_4: [] };
            allCards.forEach(c => { if(c.status === 'HAND') hands[`player_${c.owner + 1}`].push({ color: c.color, value: c.value }); });
            
            // UTILISATION DE API_URL
            const res = await fetch(`${API_URL}/solve-game`, {
                method: 'POST', headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ 
                    ...hands, missions: missions.map(m => ({ card: {color: m.cardColor, value: m.cardValue}, owner: m.ownerIndex, token: m.token })),
                    constraints: globalConstraints, mode: 'AI_DL', agent_player_idx: activePlayer, played_history: playedHistory
                })
            });
            const data = await res.json();
            if (data.probabilities) setProbabilities(data.probabilities);
            if (data.bestMove) { setSuggestedCardId(data.bestMove); addLog(`💡 IA: ${data.bestMove}`); }
        } catch (e) { console.error(e); } finally { setIsThinking(false); }
    };

    const playCard = (cid: string) => {
        if (isThinking || isReplayMode) return;
        const idx = allCards.findIndex(c => c.id === cid);
        if (idx === -1 || allCards[idx].owner !== activePlayer) return;
        
        const newCards = [...allCards];
        newCards[idx].status = 'TABLE';
        newCards[idx].zIndex = 200 + trickCards.length;
        newCards[idx].tableRotation = (Math.random() * 30) - 15;
        setAllCards(newCards);

        const newTrick = [...trickCards, newCards[idx]];
        setTrickCards(newTrick);
        setPlayedHistory(p => [...p, { color: newCards[idx].color, value: newCards[idx].value, owner: newCards[idx].owner }]);
        setProbabilities({}); setSuggestedCardId(null);

        if (newTrick.length === 4) {
            setTimeout(() => {
                const winIdx = getTrickWinner(newTrick);
                setAllCards(p => p.map(c => c.status === 'TABLE' ? { ...c, status: 'WON', winnerIndex: winIdx, zIndex: 500 } : c));
                setMissions(p => p.map(m => {
                    const tc = newCards.find(c => c.id === `${m.cardColor}-${m.cardValue}`);
                    if (!tc || tc.status !== 'TABLE') return m; 
                    return (tc.id === `${m.cardColor}-${m.cardValue}` && winIdx === m.ownerIndex) ? { ...m, status: 'SUCCESS' } : (tc.id === `${m.cardColor}-${m.cardValue}`) ? { ...m, status: 'FAILED' } : m;
                }));
                setTrickCards([]); setActivePlayer(winIdx); setCurrentStepText(`Pli remporté par ${getPlayerName(winIdx)}`);
            }, 1200);
        } else {
            setActivePlayer((activePlayer + 1) % 4);
        }
    };

    return {
        allCards, missions, communications, isThinking, logs, currentStepText, probabilities, suggestedCardId, activePlayer, 
        initializeMission, askAI, playCard, onReset: () => { resetGameStates(); setCurrentStepText("Prêt."); },
        startTraining, isTraining, trainingStats,
        loadReplay, nextReplayStep, exitReplay: () => { setIsReplayMode(false); resetGameStates(); }, isReplayMode, replayData,
        milestones, currentMilestoneId
    };
};