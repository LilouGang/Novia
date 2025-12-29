import { useState, useEffect } from 'react';
import { CardData, MissionUI, TrainingStats, ReplayStep, SavedReplay } from '../types';
import { REAL_MISSION_LOGBOOK } from '../data/real_missions';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';
const IS_DEV_MODE = typeof window !== 'undefined' && window.location.hostname === 'localhost';

// --- HELPERS STRICTS ---

const computeCommunicationType = (card: CardData, hand: CardData[]): string => {
    // Filtre les cartes de la même couleur dans la main
    const sameColor = hand.filter(c => c.color === card.color && c.color !== 'Rocket');
    if (sameColor.length === 0) return 'MID'; // Bizarre mais sécu

    const isMax = card.value === Math.max(...sameColor.map(c => c.value));
    const isMin = card.value === Math.min(...sameColor.map(c => c.value));

    if (sameColor.length === 1) return 'MID'; // Seule carte -> Unique
    if (isMax) return 'TOP';
    if (isMin) return 'BOT';
    return 'MID'; // Par défaut (ne devrait pas arriver si règles strictes, mais ok pour démo)
};

const getCardFromIndex = (idx: number): { color: string, value: number } | null => {
    if (idx < 0 || idx > 39) return null;
    if (idx < 9) return { color: 'Blue', value: idx + 1 };
    if (idx < 18) return { color: 'Green', value: idx - 8 };
    if (idx < 27) return { color: 'Pink', value: idx - 17 };
    if (idx < 36) return { color: 'Yellow', value: idx - 26 };
    return { color: 'Rocket', value: idx - 35 };
};

const convertBackendToFrontend = (d: any): CardData[] => {
    if (!d || !d.players || !Array.isArray(d.players)) return [];
    return d.players.flatMap((hand: any[], pIdx: number) => 
        hand.map((c: any) => ({
            id: `${c.color}-${c.value}`, 
            color: c.color, 
            value: Number(c.value), // ⚠️ FORCE EN NOMBRE
            owner: pIdx,
            status: 'HAND', 
            zIndex: 0, 
            tableRotation: ((Number(c.value) * 100 + pIdx * 50 + c.color.length) % 40) - 20, 
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

// --- HELPER : MISSIONS ---
const generateMissionSetup = (mid: number, cards: CardData[]) => {
    const mDef = REAL_MISSION_LOGBOOK.find(m => m.id === mid);
    if (!mDef) return null;
    const cmdIdx = cards.find(c => c.color === 'Rocket' && c.value === 4)?.owner ?? 0;
    const nMissions: MissionUI[] = [];
    const valid = cards.filter(c => c.color !== 'Rocket').sort(() => Math.random() - 0.5);
    
    let tIdx = 0;
    let tDistrib: { token: string }[] = [];

    mDef.constraints.forEach(c => { if (c.type === 'TARGET_CARD') for(let i=0; i<(c.args.count||1); i++) tDistrib.push({ token: 'None' }); });
    let absCount = 0;
    mDef.constraints.forEach(c => {
        if (c.type === 'ORDER_ABSOLUTE') { for(let i=0; i < c.args.count; i++) if (tDistrib[i]) tDistrib[i].token = (i + 1).toString(); absCount = c.args.count; }
        if (c.type === 'ORDER_RELATIVE') { const toks = ['>', '>>', '>>>', '>>>>']; const start = c.args.startIndex ?? absCount; for(let i=0; i < c.args.count; i++) if (tDistrib[start + i]) tDistrib[start + i].token = toks[i]; }
        if (c.type === 'ORDER_OMEGA' && tDistrib.length) tDistrib[tDistrib.length - 1].token = 'Omega';
    });

    tDistrib.forEach((t, i) => {
        if (tIdx >= valid.length) return;
        nMissions.push({ 
            cardColor: valid[tIdx].color, cardValue: valid[tIdx].value, 
            ownerIndex: (cmdIdx + i) % 4, token: t.token, status: 'PENDING'
        });
        tIdx++;
    });
    return { missions: nMissions, commander: cmdIdx };
};

export const useAiMode = () => {
    // --- ÉTATS ---
    const [allCards, setAllCards] = useState<CardData[]>([]);
    const [missions, setMissions] = useState<MissionUI[]>([]);
    const [communications, setCommunications] = useState<Record<number, { cardId: string, type: string }>>({});
    
    const [activePlayer, setActivePlayer] = useState(0); 
    const [trickCards, setTrickCards] = useState<CardData[]>([]); 
    const [playedHistory, setPlayedHistory] = useState<any[]>([]);

    const [isThinking, setIsThinking] = useState(false);
    const [logs, setLogs] = useState<string[]>([]);
    const [currentStepText, setCurrentStepText] = useState("En attente...");
    
    const [isTraining, setIsTraining] = useState(false);
    const [isAutoPlaying, setIsAutoPlaying] = useState(false);
    
    const [trainingStats, setTrainingStats] = useState<TrainingStats | null>(null);
    const [milestones, setMilestones] = useState<SavedReplay[]>([]);
    const [replayData, setReplayData] = useState<ReplayStep[] | null>(null);
    const [isReplayMode, setIsReplayMode] = useState(false);
    const [replayStepIndex, setReplayStepIndex] = useState(-1);
    const [currentMilestoneId, setCurrentMilestoneId] = useState<number | null>(null);

    const addLog = (msg: string) => setLogs(prev => [`> ${msg}`, ...prev].slice(0, 50));
    const getPlayerName = (idx: number) => ['Sud', 'Ouest', 'Nord', 'Est'][idx];

    const resetGameStates = () => {
        setAllCards([]); setMissions([]); setLogs([]); setCommunications({});
        setPlayedHistory([]); setTrickCards([]); setActivePlayer(0);
        setIsReplayMode(false); setIsAutoPlaying(false);
    };

    // --- 1. INITIALISATION ---
    const initializeMission = async (missionId: number) => {
        resetGameStates(); setIsThinking(true); setCurrentStepText("Distribution...");
        try {
            const res = await fetch(`${API_URL}/start-game`);
            const gData = await res.json();
            const cards = convertBackendToFrontend(gData);
            setAllCards(cards);
            const setup = generateMissionSetup(missionId, cards);
            if (setup) {
                setMissions(setup.missions); setActivePlayer(setup.commander);
                setCurrentStepText(`Mission ${missionId}. Au tour de ${getPlayerName(setup.commander)}.`);
            } else {
                setMissions([]); setActivePlayer(gData.current_player || 0);
            }
        } catch (e) { console.error(e); setCurrentStepText("Erreur serveur."); } 
        finally { setIsThinking(false); }
    };

    // --- 2. CONSTRUIRE L'ÉTAT ACTUEL (CLEAN) ---
    const buildFreshGameState = () => {
        const playersHands: any[] = [[], [], [], []];
        
        allCards.forEach(c => {
            // ✅ CORRECTION ICI : On inclut HAND *ET* COMMUNICATED
            // Car une carte communiquée est toujours techniquement dans la main du joueur
            if (c.status === 'HAND' || c.status === 'COMMUNICATED') {
                playersHands[c.owner].push({ color: c.color, value: Number(c.value) });
            }
        });

        const currentTrickFormatted = trickCards.map(c => ({
            player: c.owner, card: { color: c.color, value: Number(c.value) }
        }));
        
        // ... le reste ne change pas ...
        const missionsFormatted = missions.map(m => ({
            card: { color: m.cardColor, value: Number(m.cardValue) },
            ownerIndex: m.ownerIndex, token: m.token, status: m.status
        }));
        const commsFormatted = Object.entries(communications).map(([pid, val]) => {
             const card = allCards.find(c => c.id === val.cardId);
             return {
                 player: parseInt(pid), type: val.type,
                 card: card ? { color: card.color, value: Number(card.value) } : null
             };
        });

        return {
            current_player: activePlayer,
            players: playersHands,
            current_trick: currentTrickFormatted,
            missions: missionsFormatted,
            played_history: playedHistory,
            communications: commsFormatted
        };
    };

    // --- 3. INFÉRENCE IA (Modifiée : Arrêt silencieux en cas de pépin) ---
    const playOneMove = async () => {
        if (trickCards.length === 4) return;
        setIsThinking(true);
        try {
            const freshState = buildFreshGameState();
            
            // Console log discret pour le dev (F12) uniquement
            // console.log("📤 IA State:", freshState.players[activePlayer]);

            const res = await fetch(`${API_URL}/predict`, {
                method: 'POST', headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(freshState)
            });
            const data = await res.json();

            if (!res.ok || data.action === undefined) {
                // Arrêt silencieux si le serveur plante
                setIsAutoPlaying(false); 
                return;
            }

            const rawAction = data.action;

            // === CAS 1 : COMMUNICATION (Index >= 40) ===
            if (rawAction >= 40) {
                const cardIdx = rawAction - 40;
                const targetCardInfo = getCardFromIndex(cardIdx);

                if (targetCardInfo) {
                    const cardInHand = allCards.find(c => 
                        c.color === targetCardInfo.color && 
                        Number(c.value) === Number(targetCardInfo.value) && 
                        c.owner === activePlayer && 
                        (c.status === 'HAND' || c.status === 'COMMUNICATED')
                    );

                    if (cardInHand) {
                        const playerHand = allCards.filter(c => c.owner === activePlayer && c.status === 'HAND');
                        const tokenType = computeCommunicationType(cardInHand, playerHand);

                        addLog(`📢 IA (J${activePlayer+1}) communique : ${cardInHand.color} ${cardInHand.value} (${tokenType})`);
                        
                        setCommunications(prev => ({
                            ...prev,
                            [activePlayer]: { cardId: cardInHand.id, type: tokenType }
                        }));
                        
                        setAllCards(prev => prev.map(c => 
                            c.id === cardInHand.id ? { ...c, status: 'COMMUNICATED' } : c
                        ));
                    } else {
                        // Carte introuvable -> On stop juste
                        setIsAutoPlaying(false);
                    }
                }
            } 
            
            // === CAS 2 : JEU CLASSIQUE (Index < 40) ===
            else {
                const targetCard = getCardFromIndex(rawAction);
                if (targetCard) {
                    const cardInHand = allCards.find(c => 
                        c.color === targetCard.color && 
                        Number(c.value) === Number(targetCard.value) && 
                        c.owner === activePlayer && 
                        (c.status === 'HAND' || c.status === 'COMMUNICATED')
                    );

                    if (cardInHand) {
                        addLog(`🤖 IA (J${activePlayer+1}) joue : ${cardInHand.color} ${cardInHand.value}`);
                        playCard(cardInHand.id);
                    } else {
                        // Carte introuvable -> On stop juste
                        setIsAutoPlaying(false);
                    }
                }
            }
        } catch (e) { 
            // En cas d'erreur réseau, on stop aussi
            setIsAutoPlaying(false);
        } finally { setIsThinking(false); }
    };

    // --- 4. MOTEUR DE JEU ---
    const playCard = (cid: string) => {
        const idx = allCards.findIndex(c => c.id === cid);
        if (idx === -1) return;
        const card = allCards[idx];
        if (card.owner !== activePlayer) return;

        const newCards = [...allCards];
        newCards[idx].status = 'TABLE';
        newCards[idx].zIndex = 200 + trickCards.length;
        newCards[idx].tableRotation = (Math.random() * 30) - 15;
        setAllCards(newCards);

        const newTrick = [...trickCards, newCards[idx]];
        setTrickCards(newTrick);
        setPlayedHistory(prev => [...prev, { color: card.color, value: Number(card.value), owner: card.owner }]);

        if (newTrick.length === 4) {
            setTimeout(() => {
                const winIdx = getTrickWinner(newTrick);
                setAllCards(p => p.map(c => c.status === 'TABLE' ? { ...c, status: 'WON', winnerIndex: winIdx, zIndex: 500 } : c));
                setMissions(p => p.map(m => {
                    const tc = newCards.find(c => c.id === `${m.cardColor}-${m.cardValue}`);
                    if (!tc || tc.status !== 'TABLE') return m; 
                    return (tc.id === `${m.cardColor}-${m.cardValue}` && winIdx === m.ownerIndex) ? { ...m, status: 'SUCCESS' } : (tc.id === `${m.cardColor}-${m.cardValue}`) ? { ...m, status: 'FAILED' } : m;
                }));
                setTrickCards([]); setActivePlayer(winIdx); 
                setCurrentStepText(`Pli remporté par ${getPlayerName(winIdx)}`);
            }, 1200);
        } else {
            setActivePlayer((activePlayer + 1) % 4);
        }
    };

    // --- 5. ENTRAINEMENT (LOCAL) ---
    const startTraining = async (episodesCount: number, missionId: number) => {
        if (!IS_DEV_MODE) return;
        setIsTraining(true); resetGameStates(); setTrainingStats(null); 
        addLog(`🚀 Entraînement ${episodesCount} épisodes...`);
        try {
            const res = await fetch(`${API_URL}/train-ai`, { 
                method: 'POST', headers: { 'Content-Type': 'application/json' },
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
                            if (data.milestone_replay?.length > 0) {
                                setMilestones(prev => [...prev, {
                                    episode: data.total_lifetime_games,
                                    replay: data.milestone_replay,
                                    reward: data.avg_reward,
                                    initial_missions: data.milestone_missions || [],
                                    initial_hands: data.milestone_hands || []
                                }]);
                            }
                        }
                        if (data.type === 'TRAINING_COMPLETE') { setIsTraining(false); addLog("Fin Session."); }
                    } catch (e) {}
                }
            }
        } catch (e) { setIsTraining(false); }
    };

    // --- 6. REPLAY ---
    const loadReplay = (replaySteps?: ReplayStep[], milestoneId?: number) => {
        const dataToLoad = replaySteps || replayData;
        if (!dataToLoad) return;
        setIsReplayMode(true); setReplayData(dataToLoad); setReplayStepIndex(-1);
        setTrickCards([]); setCommunications({}); setCurrentMilestoneId(milestoneId || null);
        let savedMilestone = milestones.find(m => m.episode === milestoneId);
        if (savedMilestone) {
            if (savedMilestone.initial_missions) setMissions(savedMilestone.initial_missions.map(m => ({...m, status: 'PENDING'})));
            if (savedMilestone.initial_hands) {
                setAllCards(savedMilestone.initial_hands.map(c => ({
                    id: `${c.color}-${c.value}`, color: c.color as any, value: Number(c.value), owner: c.owner,
                    status: 'HAND', zIndex: 0, tableRotation: 0, winnerIndex: undefined
                })));
            }
        }
        setCurrentStepText(`Replay ${milestoneId || ''} chargé.`);
    };

    const nextReplayStep = () => {
        if (!replayData || replayStepIndex >= replayData.length - 1) return;
        let nextIdx = replayStepIndex + 1;
        let move = replayData[nextIdx];
        if (move.action_type === 'COLLECT') {
             setAllCards(prev => prev.map(c => c.status === 'TABLE' ? { ...c, status: 'WON', winnerIndex: move.player, zIndex: 500 } : c));
             setReplayStepIndex(nextIdx); return;
        }
        if (move.card && move.action_type === 'PLAY') {
             const cardId = `${move.card.color}-${move.card.value}`;
             setAllCards(prev => prev.map(c => c.id === cardId ? { ...c, status: 'TABLE', zIndex: 200 } : c));
        }
        setReplayStepIndex(nextIdx);
    };

    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (isAutoPlaying && !isReplayMode && !isTraining) {
            interval = setInterval(() => { if (!isThinking && trickCards.length < 4) playOneMove(); }, 1500);
        }
        return () => clearInterval(interval);
    }, [isAutoPlaying, isThinking, trickCards, isReplayMode, isTraining, allCards, activePlayer]);

    return {
        allCards, missions, communications, logs, currentStepText, activePlayer, isThinking, 
        isTraining, trainingStats, milestones, isReplayMode, replayData, currentMilestoneId, isAutoPlaying, isDevMode: IS_DEV_MODE,
        initializeMission, playOneMove, toggleAutoPlay: () => setIsAutoPlaying(!isAutoPlaying), onReset: resetGameStates,
        startTraining, loadReplay, nextReplayStep, exitReplay: () => { setIsReplayMode(false); resetGameStates(); }
    };
};