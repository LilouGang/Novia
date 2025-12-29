import { useState, useRef, useEffect } from 'react';
import { CardData, MissionUI, SolverStats, MoveStep, BackendConstraint, Communication, MissionStatus } from '../types';
import { REAL_MISSION_LOGBOOK } from '../data/real_missions';

const ANIMATION_SPEED = 600;
const TRICK_WAIT = 1000;

const convertBackendToFrontend = (d: any): CardData[] => {
    if (d.players && Array.isArray(d.players)) {
        return d.players.flatMap((hand: any[], pIdx: number) => 
            hand.map((c: any) => ({
                id: `${c.color}-${c.value}`, color: c.color, value: c.value, owner: pIdx,
                status: 'HAND', zIndex: 0, tableRotation: ((c.value * 100 + pIdx * 50 + c.color.length) % 40) - 20, winnerIndex: undefined
            }))
        );
    }
    return [];
};

export const useGodMode = () => {
    const [allCards, setAllCards] = useState<CardData[]>([]);
    const [stats, setStats] = useState<SolverStats | null>(null);
    const [currentMoveIndex, setCMI] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isThinking, setIsThinking] = useState(false);
    const [logs, setLogs] = useState<string[]>([]);
    const [missions, setMissions] = useState<MissionUI[]>([]);
    const [bookMissionId, setBookMissionId] = useState<number>(0);
    const [isAutoFinding, setIsAutoFinding] = useState(false);
    const [editingPlayer, setEditingPlayer] = useState<number | null>(null);
    const [globalConstraints, setGlobalConstraints] = useState<BackendConstraint[]>([]);
    const [communications, setCommunications] = useState<Communication[]>([]);

    const timerRef = useRef<NodeJS.Timeout | null>(null);
    const abortCtrl = useRef<AbortController | null>(null);

    // DÉFINITION DE L'URL API (Vercel ou Localhost)
    const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

    const addLog = (m: string) => setLogs(p => [`> ${m}`, ...p]);

    useEffect(() => {
        if (!isPlaying || !stats || !stats.solution_steps) return;
        const playNext = () => {
            if (currentMoveIndex >= stats.solution_steps.length) return setIsPlaying(false);
            const isTrickEnd = (currentMoveIndex + 1) % 4 === 0;
            const next = currentMoveIndex % 1 !== 0 ? Math.floor(currentMoveIndex) + 1 : isTrickEnd ? currentMoveIndex + 0.5 : currentMoveIndex + 1;
            goToStep(next);
            timerRef.current = setTimeout(playNext, isTrickEnd && currentMoveIndex % 1 === 0 ? TRICK_WAIT : ANIMATION_SPEED);
        };
        timerRef.current = setTimeout(playNext, ANIMATION_SPEED);
        return () => { if (timerRef.current) clearTimeout(timerRef.current); };
    }, [isPlaying, currentMoveIndex, stats]);

    const getTrickWinner = (moves: MoveStep[]) => {
        if (!moves || moves.length === 0) return 0;
        let best = moves[0];
        const lead = best.card.color;
        for (let i = 1; i < moves.length; i++) {
            const curr = moves[i], isR = curr.card.color === 'Rocket', bestR = best.card.color === 'Rocket';
            if ((isR && (!bestR || curr.card.value > best.card.value)) || (!isR && curr.card.color === lead && !bestR && curr.card.value > best.card.value)) best = curr;
        }
        return best.player;
    };

    const checkMissionStatus = (currentCards: CardData[]) => {
        setMissions(prevMissions => {
            let hasChanged = false;
            
            const newMissions = prevMissions.map(m => {
                if (m.cardValue === 0 || m.cardColor === 'Special') return m;
                const targetCard = currentCards.find(c => c.color === m.cardColor && c.value === m.cardValue);
                if (!targetCard || targetCard.status !== 'WON') {
                    if (m.status !== 'PENDING') { hasChanged = true; return { ...m, status: 'PENDING' as MissionStatus }; }
                    return m;
                }
                const isWin = targetCard.winnerIndex === m.ownerIndex;
                const newStatus: MissionStatus = isWin ? 'SUCCESS' : 'FAILED';
                if (m.status !== newStatus) { hasChanged = true; return { ...m, status: newStatus }; }
                return m;
            });
            return hasChanged ? newMissions : prevMissions;
        });
    };

    const goToStep = (target: number) => {
        if (!stats || !stats.solution_steps) return;
        target = Math.max(0, Math.min(target, stats.solution_steps.length));
        const floor = Math.floor(target);
        const nc = allCards.map(c => ({ ...c, status: 'HAND', zIndex: 0, winnerIndex: undefined })) as CardData[];

        for (let i = 0; i <= floor; i++) {
            if (i >= stats.solution_steps.length) break;
            const m = stats.solution_steps[i];
            const idx = nc.findIndex(c => c.id === `${m.card.color}-${m.card.value}`);
            if (idx !== -1) { nc[idx].status = 'TABLE'; nc[idx].zIndex = 100 + (i % 4); }

            if ((i + 1) % 4 === 0) {
                if (i !== floor || (i === floor && target % 1 !== 0)) {
                    const tMoves = stats.solution_steps.slice(i - 3, i + 1);
                    const win = getTrickWinner(tMoves); 
                    tMoves.forEach(tm => {
                        const cIdx = nc.findIndex(c => c.id === `${tm.card.color}-${tm.card.value}`);
                        if (cIdx !== -1) { nc[cIdx].status = 'WON'; nc[cIdx].winnerIndex = win; }
                    });
                }
            }
        }
        setAllCards(nc); setCMI(target); checkMissionStatus(nc);
    };

    const startNewGame = async () => {
        abortCtrl.current?.abort(); abortCtrl.current = null;
        if (timerRef.current) clearTimeout(timerRef.current);
        setIsPlaying(false); setStats(null); setMissions([]); setGlobalConstraints([]); 
        setCommunications([]); setBookMissionId(0); setCMI(-1); setIsThinking(false);
        
        try {
            // UTILISATION API_URL
            const res = await fetch(`${API_URL}/start-game`);
            if (!res.ok) throw new Error("Erreur Backend");
            const data = await res.json();
            const cards = convertBackendToFrontend(data);
            if (cards.length === 0) throw new Error("Aucune carte");
            setAllCards(cards);
            addLog("Nouvelle donne prête.");
        } catch (e: any) { addLog(`Erreur: ${e.message}`); }
    };

    const generateMissionSetup = (mid: number, cards: CardData[]) => {
        const mDef = REAL_MISSION_LOGBOOK.find(m => m.id === mid);
        if (!mDef) return null;
        
        const cmdIdx = cards.find(c => c.color === 'Rocket' && c.value === 4)?.owner ?? 0;
        const p9Idx = cards.find(c => c.color === 'Pink' && c.value === 9)?.owner ?? -1;
        
        const resolve = (w: string) => {
            if (w === 'COMMANDER' || w === 'PLAYER_A') return cmdIdx;
            if (['NOT_COMMANDER', 'COMMANDER_LEFT', 'RANDOM_NOT_COMMANDER', 'VOLUNTEER_NOT_COMMANDER', 'PLAYER_B'].includes(w)) return (cmdIdx + 1) % 4;
            if (w === 'COMMANDER_RIGHT') return (cmdIdx + 3) % 4;
            if (w === 'COMMANDER_OPPOSITE') return (cmdIdx + 2) % 4;
            if (w === 'LEFT_OF_PINK_9' && p9Idx !== -1) return (p9Idx + 1) % 4;
            if (w === 'SAME_PLAYER') return (cmdIdx + 1) % 4;
            return 0;
        };

        const nMissions: MissionUI[] = [];
        const nConstrs: BackendConstraint[] = [];
        const valid = cards.filter(c => c.color !== 'Rocket').sort(() => Math.random() - 0.5);
        let tIdx = 0;
        let tDistrib: { token: string }[] = [];
        let dMode = 'DEFAULT', dTarget = -1;

        mDef.constraints.forEach(c => {
            if (c.type === 'DISTRIBUTION') {
                dMode = c.args.mode || 'DEFAULT';
                if (['ALL_TO_ONE_NOT_COMMANDER', 'ALL_TO_ONE_RANDOM'].includes(dMode)) dTarget = (cmdIdx + 1) % 4;
            }
            if (c.type === 'TARGET_CARD') for(let i=0; i<(c.args.count||1); i++) tDistrib.push({ token: 'None' });
        });

        let absCount = 0;
        mDef.constraints.forEach(c => {
            if (c.type === 'ORDER_ABSOLUTE') {
                for(let i=0; i < c.args.count; i++) if (tDistrib[i]) tDistrib[i].token = (i + 1).toString();
                absCount = c.args.count;
            }
            if (c.type === 'ORDER_RELATIVE') {
                const toks = ['>', '>>', '>>>', '>>>>', '>>>>>'];
                const start = c.args.startIndex ?? absCount;
                for(let i=0; i < c.args.count; i++) if (tDistrib[start + i]) tDistrib[start + i].token = toks[i];
            }
            if (c.type === 'ORDER_OMEGA' && tDistrib.length) tDistrib[tDistrib.length - 1].token = 'Omega';
        });

        tDistrib.forEach((t, i) => {
            if (tIdx >= valid.length) return;
            let own = (dMode === 'DEFAULT' || dMode === 'COMMANDER_DECIDES') ? (cmdIdx + i) % 4 : dTarget !== -1 ? dTarget : 0;
            if (t.token === '1' && mDef.constraints.some(c => c.type === 'DISTRIBUTION' && c.args.taskOneTo === 'NOT_COMMANDER')) {
                if (own === cmdIdx) own = (cmdIdx + 1) % 4;
            }
            nMissions.push({ cardColor: valid[tIdx].color, cardValue: valid[tIdx].value, ownerIndex: own, token: t.token });
            tIdx++;
        });

        mDef.constraints.forEach(c => {
            const p = c.args.who ? resolve(c.args.who) : undefined;
            if (c.type === 'NO_TRICKS') nConstrs.push({ type: 'NO_TRICKS', player: p });
            else if (c.type === 'TRICK_COUNT') {
                if (c.args.tricks && c.args.who !== 'OTHERS') c.args.tricks.forEach((t: number) => nConstrs.push({ type: 'TRICK_COUNT', player: p, args: { trick: t, who_idx: p } }));
                else if (!c.args.tricks) nConstrs.push({ type: 'TRICK_COUNT', player: p, count: c.args.count });
            }
            else if (['FORBIDDEN_WIN_CARD', 'BALANCE', 'TRICK_SEQUENCE'].includes(c.type)) nConstrs.push({ type: c.type as any, args: c.args });
            else if (c.type === 'SPECIFIC_WIN') nConstrs.push(c.args.trick ? { type: 'TRICK_COUNT', player: p, args: { trick: c.args.trick, who_idx: p } } : { type: 'SPECIFIC_WIN', args: c.args });

            let specialToken = null;
            let specialOwner = p ?? cmdIdx;

            if (c.type === 'NO_TRICKS') specialToken = c.args.who === 'RANDOM_NOT_COMMANDER' ? 'NO_TRICKS_PLAYER' : 'NO_TRICKS';
            else if (c.type === 'FORBIDDEN_WIN_CARD' && c.args.value === 9) specialToken = 'NO_9_WIN';
            else if (c.type === 'SPECIFIC_WIN' && c.args.withColor === 'Rocket' && c.args.mustWinAll) specialToken = 'ALL_ROCKETS';
            else if (c.type === 'SPECIFIC_WIN' && c.args.withCardValue === 1) specialToken = 'SPECIFIC_WIN_1';

            if (specialToken) {
                nMissions.push({ cardColor: 'Special', cardValue: 0, ownerIndex: specialOwner, token: specialToken, status: 'PENDING' });
            }
        });

        return { missions: nMissions, constraints: nConstrs };
    };

    const loadMissionFromBook = (id: number) => {
        setBookMissionId(id);
        const setup = allCards.length ? generateMissionSetup(id, allCards) : null;
        if (setup) {
            setMissions(setup.missions); setGlobalConstraints(setup.constraints);
            addLog(`Mission ${id} chargée.`);
        } else {
            addLog("⚠️ Distribuez les cartes d'abord !");
        }
    };

    const autoFindSolution = async () => {
        if (missions.length === 0) return addLog("⚠️ Ajoutez des missions avant de chercher.");
        const fixedMissions = [...missions];
        const fixedConstraints = [...globalConstraints];

        abortCtrl.current?.abort();
        const ctrl = new AbortController(); 
        abortCtrl.current = ctrl;
        
        setIsAutoFinding(true); 
        addLog("🎰 Recherche d'une main compatible...");
        
        let attempts = 0;
        let found = false;
        
        try {
            while (!found && attempts < 1000) {
                if (ctrl.signal.aborted) break;
                attempts++;
                
                // UTILISATION API_URL
                const rD = await fetch(`${API_URL}/start-game`, { signal: ctrl.signal });
                if (!rD.ok) continue;
                const gD = await rD.json();
                const vC = convertBackendToFrontend(gD);

                // UTILISATION API_URL
                const rS = await fetch(`${API_URL}/solve-game`, {
                    method: 'POST', 
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ 
                        player_1: gD.players[0],
                        player_2: gD.players[1], 
                        player_3: gD.players[2], 
                        player_4: gD.players[3],
                        missions: fixedMissions.map(m => ({ 
                            card: { color: m.cardColor, value: m.cardValue }, 
                            owner: m.ownerIndex, 
                            token: m.token 
                        })),
                        constraints: fixedConstraints, 
                        mode: 'GOD' 
                    }), 
                    signal: ctrl.signal
                });

                if (!rS.ok) continue;
                const sD = await rS.json();
                
                if (sD.stats && sD.stats.solutionFound) {
                    found = true; 
                    setAllCards(vC); 
                    setGlobalConstraints(fixedConstraints); 
                    setStats(sD.stats);
                    setCMI(-1);
                    addLog(`✅ Trouvé au tirage n°${attempts}`);
                }
            }
            if (!found) addLog(`❌ Echec après ${attempts} essais. Impossible avec ces contraintes.`);
        } catch (e: any) { 
            if (e.name !== 'AbortError') console.error(e); 
        } finally { 
            setIsAutoFinding(false); 
            abortCtrl.current = null; 
        }
    };

    const shuffleOwners = () => setMissions(p => p.map(m => ({ ...m, ownerIndex: Math.floor(Math.random() * 4) })));
    const shuffleCards = () => {
        const s = allCards.filter(c => c.color !== 'Rocket').sort(() => Math.random() - 0.5);
        setMissions(p => p.map((m, i) => s[i] ? { ...m, cardColor: s[i].color, cardValue: s[i].value } : m));
    };

    const toggleCard = (col: string, val: number) => {
        if (editingPlayer === null) return;
        setAllCards(p => {
            const id = `${col}-${val}`, idx = p.findIndex(c => c.id === id);
            if (idx !== -1 && p[idx].owner === editingPlayer) return p.filter(c => c.id !== id);
            const nc = [...p], c = { id, color: col as any, value: val, owner: editingPlayer, status: 'HAND' as const, zIndex: 0, tableRotation: (Math.random()*40)-20, winnerIndex: undefined };
            if (idx !== -1) nc[idx] = c; else nc.push(c);
            return nc;
        });
    };

    const launchSolver = async (mode: 'GOD' | 'MCTS' | 'ML', agentIdx: number) => {
        if (allCards.length !== 40) { addLog("⚠️ Distribution incomplète"); return; }
        abortCtrl.current?.abort(); const ctrl = new AbortController(); abortCtrl.current = ctrl;
        setIsThinking(true); setStats(null); goToStep(-1);
        const hands: any = { player_1: [], player_2: [], player_3: [], player_4: [] };
        allCards.forEach(c => hands[`player_${c.owner + 1}`].push({ color: c.color, value: c.value }));
        try {
            // UTILISATION API_URL
            const res = await fetch(`${API_URL}/solve-game`, {
                method: 'POST', headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ...hands, missions: missions.map(m => ({ card: { color: m.cardColor, value: m.cardValue }, owner: m.ownerIndex, token: m.token })), constraints: globalConstraints, mode: mode, agent_player_idx: agentIdx }),
                signal: ctrl.signal
            });
            const data = await res.json();
            if (data.error) addLog(`Erreur: ${data.error}`);
            else if (data.stats) { setStats(data.stats); addLog(data.stats.solutionFound ? "✅ Solution !" : "❌ Pas de solution."); if(data.stats.solutionFound) setCMI(-1); }
            else if (data.bestMove) addLog(`🤖 Agent: ${data.bestMove}`);
        } catch(e: any) { if (e.name !== 'AbortError') addLog(`Erreur: ${e.message}`); } 
        finally { setIsThinking(false); abortCtrl.current = null; }
    };

    const addCommunication = (c: Communication) => setCommunications(prev => [...prev, c]);

    return {
        allCards, stats, currentMoveIndex, isPlaying, isThinking, logs, missions, setMissions, bookMissionId, isAutoFinding,
        startNewGame, launchSolver, autoFindSolution, shuffleOwners, shuffleCards, loadMissionFromBook,
        handleNext: () => { 
            if (!stats || !stats.solution_steps) return;
            const isTrickEnd = (currentMoveIndex + 1) % 4 === 0;
            let next = currentMoveIndex + 1;
            if (isTrickEnd && Number.isInteger(currentMoveIndex)) next = currentMoveIndex + 0.5;
            else if (currentMoveIndex % 1 !== 0) next = Math.floor(currentMoveIndex) + 1;
            setIsPlaying(false); goToStep(next); 
        },
        handlePrev: () => { setIsPlaying(false); const prev = currentMoveIndex % 1 !== 0 ? Math.floor(currentMoveIndex) : (currentMoveIndex - 1); goToStep(prev); },
        togglePlay: () => setIsPlaying(p => !p), editingPlayer, openEditor: (i:number) => { setIsPlaying(false); setEditingPlayer(i); }, closeEditor: () => setEditingPlayer(null), 
        toggleCard, globalConstraints, clearAllHands: () => setAllCards([]), communications, addCommunication, setGlobalConstraints, clearStats: () => setStats(null),
    };
};