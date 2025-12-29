(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/data/missions.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MISSION_LOGBOOK",
    ()=>MISSION_LOGBOOK
]);
const MISSION_LOGBOOK = [
    // --- NIVEAU 1 : INTRODUCTION ---
    {
        id: 1,
        description: "Gagner 1 carte mission.",
        slots: [
            {
                token: 'None'
            }
        ]
    },
    {
        id: 2,
        description: "Gagner 2 cartes mission.",
        slots: [
            {
                token: 'None'
            },
            {
                token: 'None'
            }
        ]
    },
    {
        id: 3,
        description: "Gagner 2 cartes (Ordre : 1 > 2).",
        slots: [
            {
                token: '1'
            },
            {
                token: '2'
            }
        ]
    },
    {
        id: 4,
        description: "Gagner 3 cartes mission.",
        slots: [
            {
                token: 'None'
            },
            {
                token: 'None'
            },
            {
                token: 'None'
            }
        ]
    },
    {
        id: 5,
        description: "Gagner 2 cartes. La carte '1' ne doit pas être gagnée en dernier.",
        slots: [
            {
                token: '1'
            },
            {
                token: 'None'
            }
        ]
    },
    // --- NIVEAU 2 : PREMIERS DEFIS ---
    {
        id: 6,
        description: "Gagner 3 cartes (Ordre : 1 > 2 > 3).",
        slots: [
            {
                token: '1'
            },
            {
                token: '2'
            },
            {
                token: '3'
            }
        ]
    },
    {
        id: 7,
        description: "Gagner 3 cartes (Ordre : A avant B).",
        slots: [
            {
                token: '>'
            },
            {
                token: '>>'
            },
            {
                token: 'None'
            }
        ]
    },
    {
        id: 8,
        description: "Gagner 3 cartes (Ordre : A avant B avant C).",
        slots: [
            {
                token: '>'
            },
            {
                token: '>>'
            },
            {
                token: '>>>'
            }
        ]
    },
    {
        id: 9,
        description: "Gagner 4 cartes (Ordre : A avant B).",
        slots: [
            {
                token: '>'
            },
            {
                token: '>>'
            },
            {
                token: 'None'
            },
            {
                token: 'None'
            }
        ]
    },
    {
        id: 10,
        description: "Gagner 4 cartes (Ordre : 1 > 2 > 3 > 4).",
        slots: [
            {
                token: '1'
            },
            {
                token: '2'
            },
            {
                token: '3'
            },
            {
                token: '4'
            }
        ]
    },
    // --- NIVEAU 3 : COMPLEXIFICATION ---
    {
        id: 11,
        description: "Gagner 4 cartes (Ordre : A > B > C).",
        slots: [
            {
                token: '>'
            },
            {
                token: '>>'
            },
            {
                token: '>>>'
            },
            {
                token: 'None'
            }
        ]
    },
    {
        id: 12,
        description: "Gagner 4 cartes (Ordre : A > B > C > D).",
        slots: [
            {
                token: '>'
            },
            {
                token: '>>'
            },
            {
                token: '>>>'
            },
            {
                token: '>>>>'
            }
        ]
    },
    {
        id: 13,
        description: "Gagner 5 cartes (Ordre : A > B > C).",
        slots: [
            {
                token: '>'
            },
            {
                token: '>>'
            },
            {
                token: '>>>'
            },
            {
                token: 'None'
            },
            {
                token: 'None'
            }
        ]
    },
    {
        id: 14,
        description: "Gagner 5 cartes (Ordre : A > B > C > D > E).",
        slots: [
            {
                token: '>'
            },
            {
                token: '>>'
            },
            {
                token: '>>>'
            },
            {
                token: '>>>>'
            },
            {
                token: '>>>>>'
            }
        ]
    },
    {
        id: 15,
        description: "Gagner 6 cartes sans ordre.",
        slots: Array(6).fill({
            token: 'None'
        })
    },
    // --- NIVEAU 4 : LE FACTEUR OMEGA ---
    {
        id: 16,
        description: "Gagner 1 carte (Ordre : Ω Dernier pli).",
        slots: [
            {
                token: 'Omega'
            }
        ]
    },
    {
        id: 17,
        description: "Gagner 2 cartes (Ordre : 1 > 2, le 2 est Ω).",
        slots: [
            {
                token: '1'
            },
            {
                token: '2'
            }
        ]
    },
    {
        id: 18,
        description: "Gagner 5 cartes (1 Ω).",
        slots: [
            {
                token: 'None'
            },
            {
                token: 'None'
            },
            {
                token: 'None'
            },
            {
                token: 'None'
            },
            {
                token: 'Omega'
            }
        ]
    },
    {
        id: 19,
        description: "Gagner 3 cartes (1 > 2, et une Ω).",
        slots: [
            {
                token: '1'
            },
            {
                token: '2'
            },
            {
                token: 'Omega'
            }
        ]
    },
    {
        id: 20,
        description: "Gagner 2 cartes (A > B, B est Ω).",
        slots: [
            {
                token: '>'
            },
            {
                token: 'Omega'
            }
        ]
    },
    // --- NIVEAU 5 : MISSIONS INTENSES ---
    {
        id: 21,
        description: "Gagner 5 cartes (A > B).",
        slots: [
            {
                token: '>'
            },
            {
                token: '>>'
            },
            {
                token: 'None'
            },
            {
                token: 'None'
            },
            {
                token: 'None'
            }
        ]
    },
    {
        id: 22,
        description: "Gagner 6 cartes (A > B > C).",
        slots: [
            {
                token: '>'
            },
            {
                token: '>>'
            },
            {
                token: '>>>'
            },
            {
                token: 'None'
            },
            {
                token: 'None'
            },
            {
                token: 'None'
            }
        ]
    },
    {
        id: 23,
        description: "Gagner 5 cartes (1 > 2 > 3 > 4).",
        slots: [
            {
                token: '1'
            },
            {
                token: '2'
            },
            {
                token: '3'
            },
            {
                token: '4'
            },
            {
                token: 'None'
            }
        ]
    },
    {
        id: 24,
        description: "Gagner 6 cartes (1 > 2).",
        slots: [
            {
                token: '1'
            },
            {
                token: '2'
            },
            {
                token: 'None'
            },
            {
                token: 'None'
            },
            {
                token: 'None'
            },
            {
                token: 'None'
            }
        ]
    },
    {
        id: 25,
        description: "Gagner 7 cartes sans ordre.",
        slots: Array(7).fill({
            token: 'None'
        })
    },
    // --- NIVEAU 6 : IMPOSSIBLE ? ---
    {
        id: 26,
        description: "Gagner 2 cartes (1 > 2) et 2 cartes (A > B).",
        slots: [
            {
                token: '1'
            },
            {
                token: '2'
            },
            {
                token: '>'
            },
            {
                token: '>>'
            }
        ]
    },
    {
        id: 27,
        description: "Gagner 3 cartes (1 > 2 > 3) et une Ω.",
        slots: [
            {
                token: '1'
            },
            {
                token: '2'
            },
            {
                token: '3'
            },
            {
                token: 'Omega'
            }
        ]
    },
    {
        id: 28,
        description: "Gagner 8 cartes sans ordre.",
        slots: Array(8).fill({
            token: 'None'
        })
    },
    {
        id: 29,
        description: "Gagner 4 cartes (A > B > C > D) dont D est Ω.",
        slots: [
            {
                token: '>'
            },
            {
                token: '>>'
            },
            {
                token: '>>>'
            },
            {
                token: 'Omega'
            }
        ]
    },
    {
        id: 30,
        description: "Gagner 6 cartes (1 > 2 > 3 > 4 > 5 > 6).",
        slots: [
            {
                token: '1'
            },
            {
                token: '2'
            },
            {
                token: '3'
            },
            {
                token: '4'
            },
            {
                token: '5'
            },
            {
                token: '6'
            }
        ]
    },
    // --- NIVEAU EXPERT ---
    {
        id: 31,
        description: "Gagner 3 cartes (1 > 2) + (A > B).",
        slots: [
            {
                token: '1'
            },
            {
                token: '2'
            },
            {
                token: '>'
            },
            {
                token: '>>'
            },
            {
                token: 'None'
            }
        ]
    },
    {
        id: 32,
        description: "Gagner 9 cartes.",
        slots: Array(9).fill({
            token: 'None'
        })
    },
    {
        id: 33,
        description: "Gagner 5 cartes, dont une seule Ω.",
        slots: [
            {
                token: 'Omega'
            },
            {
                token: 'None'
            },
            {
                token: 'None'
            },
            {
                token: 'None'
            },
            {
                token: 'None'
            }
        ]
    },
    {
        id: 34,
        description: "Gagner 4 cartes avec ordre > > > et une Ω séparée.",
        slots: [
            {
                token: '>'
            },
            {
                token: '>>'
            },
            {
                token: '>>>'
            },
            {
                token: 'Omega'
            }
        ]
    },
    {
        id: 35,
        description: "Gagner 10 cartes (Toutes les missions).",
        slots: Array(10).fill({
            token: 'None'
        })
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hooks/useGameLogic.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useGameLogic",
    ()=>useGameLogic
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$missions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/missions.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
const ANIMATION_SPEED = 600;
const TRICK_WAIT_ON_TABLE = 1000;
// Helper interne
const convertBackendToFrontend = (gameData)=>{
    const generatedCards = [];
    [
        'player_1',
        'player_2',
        'player_3',
        'player_4'
    ].forEach((key, playerIdx)=>{
        gameData[key].forEach((c)=>{
            const seed = c.value * 100 + playerIdx * 50 + c.color.length;
            generatedCards.push({
                id: `${c.color}-${c.value}`,
                color: c.color,
                value: c.value,
                owner: playerIdx,
                status: 'HAND',
                zIndex: 0,
                tableRotation: seed % 40 - 20,
                winnerIndex: undefined
            });
        });
    });
    return generatedCards;
};
const useGameLogic = ()=>{
    _s();
    // --- ÉTATS ---
    const [allCards, setAllCards] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [stats, setStats] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [currentMoveIndex, setCurrentMoveIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isPlaying, setIsPlaying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isThinking, setIsThinking] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [logs, setLogs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [missions, setMissions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [bookMissionId, setBookMissionId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isAutoFinding, setIsAutoFinding] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [editingPlayer, setEditingPlayer] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // --- REFS ---
    const timerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const abortControllerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // --- LOGS ---
    const addLog = (msg)=>setLogs((prev)=>[
                `> ${msg}`,
                ...prev
            ]);
    // --- ANIMATION LOOP ---
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useGameLogic.useEffect": ()=>{
            if (!isPlaying || !stats) return;
            const playNext = {
                "useGameLogic.useEffect.playNext": ()=>{
                    if (currentMoveIndex >= stats.solution_steps.length) {
                        setIsPlaying(false);
                        return;
                    }
                    let nextStep = 0;
                    let delay = ANIMATION_SPEED;
                    if (currentMoveIndex % 1 !== 0) {
                        nextStep = Math.floor(currentMoveIndex) + 1;
                    } else if ((currentMoveIndex + 1) % 4 === 0) {
                        nextStep = currentMoveIndex + 0.5;
                        delay = TRICK_WAIT_ON_TABLE;
                    } else {
                        nextStep = currentMoveIndex + 1;
                    }
                    goToStep(nextStep);
                    timerRef.current = setTimeout(playNext, delay);
                }
            }["useGameLogic.useEffect.playNext"];
            timerRef.current = setTimeout(playNext, ANIMATION_SPEED);
            return ({
                "useGameLogic.useEffect": ()=>{
                    if (timerRef.current) clearTimeout(timerRef.current);
                }
            })["useGameLogic.useEffect"];
        }
    }["useGameLogic.useEffect"], [
        isPlaying,
        currentMoveIndex,
        stats
    ]);
    // --- LOGIQUE METIER ---
    const getTrickWinner = (moves)=>{
        const leadColor = moves[0].card.color;
        let bestMove = moves[0];
        for(let i = 1; i < 4; i++){
            const current = moves[i];
            const isRocket = current.card.color === 'Rocket';
            const isBestRocket = bestMove.card.color === 'Rocket';
            if (isRocket) {
                if (!isBestRocket) bestMove = current;
                else if (current.card.value > bestMove.card.value) bestMove = current;
            } else if (current.card.color === leadColor && !isBestRocket) {
                if (current.card.value > bestMove.card.value) bestMove = current;
            }
        }
        return bestMove.player;
    };
    const goToStep = (targetStep)=>{
        if (!stats) return;
        const target = Math.max(0, Math.min(targetStep, stats.solution_steps.length));
        const floorStep = Math.floor(target);
        const isCollectionPhase = target % 1 !== 0;
        const newCards = allCards.map((c)=>({
                ...c,
                status: 'HAND',
                zIndex: 0,
                winnerIndex: undefined
            }));
        for(let i = 0; i <= floorStep; i++){
            if (i >= stats.solution_steps.length) break;
            const move = stats.solution_steps[i];
            const cIdx = newCards.findIndex((c)=>c.id === `${move.card.color}-${move.card.value}`);
            if (cIdx !== -1) {
                newCards[cIdx].status = 'TABLE';
                newCards[cIdx].zIndex = 100 + i % 4;
            }
            if ((i + 1) % 4 === 0) {
                const isCurrentStep = i === floorStep;
                if (!isCurrentStep || isCurrentStep && isCollectionPhase) {
                    const trickMoves = stats.solution_steps.slice(i - 3, i + 1);
                    const winner = getTrickWinner(trickMoves);
                    const trickIds = trickMoves.map((m)=>`${m.card.color}-${m.card.value}`);
                    trickIds.forEach((tid)=>{
                        const idx = newCards.findIndex((c)=>c.id === tid);
                        if (idx !== -1) {
                            newCards[idx].status = 'WON';
                            newCards[idx].winnerIndex = winner;
                        }
                    });
                }
            }
        }
        setAllCards(newCards);
        setCurrentMoveIndex(target);
    };
    // --- API CALLS & ACTIONS ---
    const startNewGame = async ()=>{
        if (abortControllerRef.current) {
            abortControllerRef.current.abort();
            abortControllerRef.current = null;
        }
        setIsPlaying(false);
        setStats(null);
        setMissions([]);
        setBookMissionId(0);
        setCurrentMoveIndex(-1);
        setIsThinking(false);
        if (timerRef.current) clearTimeout(timerRef.current);
        try {
            const res = await fetch('http://localhost:8000/start-game');
            const gameData = await res.json();
            setAllCards(convertBackendToFrontend(gameData));
            addLog("Nouvelle donne prête.");
        } catch (e) {
            addLog("Erreur Backend");
        }
    };
    // 1. Ouvrir l'éditeur pour un joueur spécifique
    const openEditor = (playerIndex)=>{
        setIsPlaying(false); // On met pause si ça jouait
        setEditingPlayer(playerIndex);
    };
    // 2. Fermer l'éditeur
    const closeEditor = ()=>{
        setEditingPlayer(null);
    };
    // 3. Ajouter ou retirer une carte
    const toggleCard = (color, value)=>{
        if (editingPlayer === null) return;
        setAllCards((prev)=>{
            const cardId = `${color}-${value}`;
            const existsIndex = prev.findIndex((c)=>c.id === cardId);
            // CAS 1 : La carte existe déjà
            if (existsIndex !== -1) {
                const card = prev[existsIndex];
                // Si c'est ma carte -> Je la retire
                if (card.owner === editingPlayer) {
                    return prev.filter((c)=>c.id !== cardId);
                }
                // Si c'est à un autre -> Je ne fais rien (ou on pourrait la voler, mais restons simple)
                return prev;
            }
            // CAS 2 : La carte n'existe pas -> Je l'ajoute
            const newCard = {
                id: cardId,
                color: color,
                value: value,
                owner: editingPlayer,
                status: 'HAND',
                zIndex: 0,
                tableRotation: Math.random() * 40 - 20,
                winnerIndex: undefined
            };
            return [
                ...prev,
                newCard
            ];
        });
    };
    const launchSolver = async ()=>{
        if (abortControllerRef.current) abortControllerRef.current.abort();
        const controller = new AbortController();
        abortControllerRef.current = controller;
        setIsThinking(true);
        setStats(null);
        goToStep(-1);
        const handsForBackend = {
            player_1: [],
            player_2: [],
            player_3: [],
            player_4: []
        };
        allCards.forEach((c)=>{
            handsForBackend[`player_${c.owner + 1}`].push({
                color: c.color,
                value: c.value
            });
        });
        const realMissions = missions.map((m)=>({
                card: {
                    color: m.cardColor,
                    value: m.cardValue
                },
                owner: m.ownerIndex,
                token: m.token
            }));
        try {
            const res = await fetch('http://localhost:8000/solve-game', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    ...handsForBackend,
                    missions: realMissions
                }),
                signal: controller.signal
            });
            if (!res.ok) throw new Error(`HTTP Error: ${res.status}`);
            const data = await res.json();
            setStats(data.stats);
            if (data.stats.solutionFound) addLog(`Solution trouvée !`);
            else addLog("Pas de solution trouvée.");
        } catch (e) {
            if (e.name === 'AbortError') addLog("Calcul annulé.");
            else addLog(`Erreur Solver: ${e.message}`);
        } finally{
            setIsThinking(false);
            abortControllerRef.current = null;
        }
    };
    const autoFindSolution = async ()=>{
        if (bookMissionId === 0) {
            addLog("⚠️ Sélectionnez une mission du Livre d'abord.");
            return;
        }
        if (abortControllerRef.current) abortControllerRef.current.abort();
        const controller = new AbortController();
        abortControllerRef.current = controller;
        setIsAutoFinding(true);
        addLog("🎰 Recherche d'une donne GAGNANTE...");
        const MAX_ATTEMPTS = 500;
        let attempts = 0;
        let found = false;
        const missionDef = __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$missions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MISSION_LOGBOOK"].find((m)=>m.id === bookMissionId);
        if (!missionDef) return;
        try {
            while(!found && attempts < MAX_ATTEMPTS){
                if (controller.signal.aborted) break;
                attempts++;
                const resDeal = await fetch('http://localhost:8000/start-game', {
                    signal: controller.signal
                });
                if (!resDeal.ok) continue;
                const gameData = await resDeal.json();
                const flatDeck = [];
                [
                    'player_1',
                    'player_2',
                    'player_3',
                    'player_4'
                ].forEach((key, pIdx)=>{
                    gameData[key].forEach((c)=>{
                        if (c.color !== 'Rocket') flatDeck.push({
                            ...c,
                            owner: pIdx
                        });
                    });
                });
                const shuffledTasks = flatDeck.sort(()=>Math.random() - 0.5);
                const testMissions = missionDef.slots.map((slot, i)=>{
                    const taskCard = shuffledTasks[i];
                    return {
                        card: {
                            color: taskCard.color,
                            value: taskCard.value
                        },
                        owner: Math.floor(Math.random() * 4),
                        token: slot.token
                    };
                });
                const payload = {
                    player_1: gameData.player_1,
                    player_2: gameData.player_2,
                    player_3: gameData.player_3,
                    player_4: gameData.player_4,
                    missions: testMissions
                };
                const resSolve = await fetch('http://localhost:8000/solve-game', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(payload),
                    signal: controller.signal
                });
                if (!resSolve.ok) continue;
                const solveData = await resSolve.json();
                if (solveData.stats.solutionFound) {
                    found = true;
                    addLog(`✅ CONFIGURATION GAGNANTE TROUVÉE (Essai ${attempts}) !`);
                    setAllCards(convertBackendToFrontend(gameData));
                    setMissions(testMissions.map((tm)=>({
                            cardColor: tm.card.color,
                            cardValue: tm.card.value,
                            ownerIndex: tm.owner,
                            token: tm.token
                        })));
                    setStats(solveData.stats);
                } else if (attempts % 10 === 0) {
                    addLog(`... Essai ${attempts} échoué ...`);
                }
            }
            if (!found) addLog(`❌ Echec après ${MAX_ATTEMPTS} essais.`);
        } catch (e) {
            if (e.name !== 'AbortError') console.error(e);
        } finally{
            setIsAutoFinding(false);
            abortControllerRef.current = null;
        }
    };
    // --- HELPERS DE MISSION ---
    const shuffleOwners = ()=>setMissions((prev)=>prev.map((m)=>({
                    ...m,
                    ownerIndex: Math.floor(Math.random() * 4)
                })));
    const shuffleCards = ()=>{
        if (allCards.length === 0) return;
        const validTaskCards = allCards.filter((c)=>c.color !== 'Rocket');
        const shuffled = [
            ...validTaskCards
        ].sort(()=>Math.random() - 0.5);
        setMissions((prev)=>prev.map((m, i)=>{
                if (!shuffled[i]) return m;
                return {
                    ...m,
                    cardColor: shuffled[i].color,
                    cardValue: shuffled[i].value
                };
            }));
    };
    const loadMissionFromBook = (id)=>{
        setBookMissionId(id);
        const missionDef = __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$missions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MISSION_LOGBOOK"].find((m)=>m.id === id);
        if (!missionDef || allCards.length === 0) return;
        const validTaskCards = allCards.filter((c)=>c.color !== 'Rocket');
        const shuffledTasks = [
            ...validTaskCards
        ].sort(()=>Math.random() - 0.5);
        const commander = allCards.find((c)=>c.color === 'Rocket' && c.value === 4);
        const startPlayerIdx = commander ? commander.owner : 0;
        const newMissions = missionDef.slots.map((slot, index)=>{
            const targetCard = shuffledTasks[index];
            const assignedOwner = (startPlayerIdx + index) % 4;
            return {
                cardColor: targetCard.color,
                cardValue: targetCard.value,
                ownerIndex: assignedOwner,
                token: slot.token
            };
        });
        setMissions(newMissions);
        addLog(`Mission ${id} chargée.`);
    };
    // Navigation manuelle
    const handleNext = ()=>{
        setIsPlaying(false);
        if (Number.isInteger(currentMoveIndex) && (currentMoveIndex + 1) % 4 === 0) goToStep(currentMoveIndex + 0.5);
        else if (currentMoveIndex % 1 !== 0) goToStep(Math.floor(currentMoveIndex) + 1);
        else goToStep(currentMoveIndex + 1);
    };
    const handlePrev = ()=>{
        setIsPlaying(false);
        if (currentMoveIndex % 1 !== 0) goToStep(Math.floor(currentMoveIndex));
        else {
            const prevIndex = currentMoveIndex - 1;
            if (prevIndex >= 0 && (prevIndex + 1) % 4 === 0) goToStep(prevIndex + 0.5);
            else goToStep(prevIndex);
        }
    };
    const togglePlay = ()=>setIsPlaying((prev)=>!prev);
    // On retourne TOUT ce dont l'UI a besoin
    return {
        allCards,
        stats,
        currentMoveIndex,
        isPlaying,
        isThinking,
        logs,
        missions,
        setMissions,
        bookMissionId,
        isAutoFinding,
        startNewGame,
        launchSolver,
        autoFindSolution,
        shuffleOwners,
        shuffleCards,
        loadMissionFromBook,
        handleNext,
        handlePrev,
        togglePlay,
        editingPlayer,
        openEditor,
        closeEditor,
        toggleCard
    };
};
_s(useGameLogic, "paoRrSLedrHUBt1OtLtoepPtCXA=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/TrickHistory.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TrickHistory
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function TrickHistory({ steps }) {
    // On découpe les coups (40 cartes) en plis (10 paquets de 4)
    const tricks = [];
    for(let i = 0; i < steps.length; i += 4){
        tricks.push(steps.slice(i, i + 4));
    }
    // Helpers d'affichage
    const getPlayerName = (idx)=>[
            'Sud',
            'Ouest',
            'Nord',
            'Est'
        ][idx];
    const getColorClass = (color)=>{
        switch(color){
            case 'Blue':
                return 'bg-blue-900 text-blue-200 border-blue-700';
            case 'Green':
                return 'bg-green-900 text-green-200 border-green-700';
            case 'Pink':
                return 'bg-pink-900 text-pink-200 border-pink-700';
            case 'Yellow':
                return 'bg-yellow-900 text-yellow-200 border-yellow-700';
            case 'Rocket':
                return 'bg-gray-700 text-white border-gray-500 shadow-inner';
            default:
                return 'bg-gray-800';
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-2 mt-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-xs font-bold text-gray-400 uppercase border-b border-gray-700 pb-1 flex justify-between items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "📝 Détail de la solution"
                    }, void 0, false, {
                        fileName: "[project]/components/TrickHistory.tsx",
                        lineNumber: 33,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[9px] bg-gray-800 px-1 rounded text-gray-500",
                        children: [
                            tricks.length,
                            " Plis"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/TrickHistory.tsx",
                        lineNumber: 34,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/TrickHistory.tsx",
                lineNumber: 32,
                columnNumber: 13
            }, this),
            tricks.map((trick, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-black/30 p-2 rounded border border-white/5 text-[10px] hover:bg-black/40 transition-colors",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between mb-1 text-gray-400 font-mono border-b border-white/5 pb-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-bold text-gray-300",
                                    children: [
                                        "Pli #",
                                        i + 1
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/TrickHistory.tsx",
                                    lineNumber: 40,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: [
                                        "Entame: ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-gray-200",
                                            children: getPlayerName(trick[0].player)
                                        }, void 0, false, {
                                            fileName: "[project]/components/TrickHistory.tsx",
                                            lineNumber: 41,
                                            columnNumber: 39
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/TrickHistory.tsx",
                                    lineNumber: 41,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/TrickHistory.tsx",
                            lineNumber: 39,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-4 gap-1",
                            children: trick.map((move, j)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col items-center group",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[8px] text-gray-500 mb-0.5 group-hover:text-gray-300 transition-colors",
                                            children: getPlayerName(move.player).substring(0, 1)
                                        }, void 0, false, {
                                            fileName: "[project]/components/TrickHistory.tsx",
                                            lineNumber: 47,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `w-full text-center py-0.5 rounded border ${getColorClass(move.card.color)} font-bold text-[9px]`,
                                            children: move.card.value
                                        }, void 0, false, {
                                            fileName: "[project]/components/TrickHistory.tsx",
                                            lineNumber: 50,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, j, true, {
                                    fileName: "[project]/components/TrickHistory.tsx",
                                    lineNumber: 46,
                                    columnNumber: 29
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/TrickHistory.tsx",
                            lineNumber: 44,
                            columnNumber: 21
                        }, this)
                    ]
                }, i, true, {
                    fileName: "[project]/components/TrickHistory.tsx",
                    lineNumber: 38,
                    columnNumber: 17
                }, this)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center pt-2",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-[9px] text-gray-600 italic",
                    children: "Fin de la partie"
                }, void 0, false, {
                    fileName: "[project]/components/TrickHistory.tsx",
                    lineNumber: 61,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/TrickHistory.tsx",
                lineNumber: 60,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/TrickHistory.tsx",
        lineNumber: 31,
        columnNumber: 9
    }, this);
}
_c = TrickHistory;
var _c;
__turbopack_context__.k.register(_c, "TrickHistory");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Sidebar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Sidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$missions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/missions.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$TrickHistory$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/TrickHistory.tsx [app-client] (ecmascript)");
;
;
;
function Sidebar(props) {
    const { startNewGame, bookMissionId, loadMissionFromBook, missions, setMissions, shuffleOwners, shuffleCards, autoFindSolution, isAutoFinding, launchSolver, isThinking, stats, currentMoveIndex, isPlaying, togglePlay, handlePrev, handleNext, logs, allCards } = props;
    // Helper local pour la suppression
    const removeMission = (index)=>setMissions((prev)=>prev.filter((_, i)=>i !== index));
    const getPlayerName = (idx)=>[
            'Sud',
            'Ouest',
            'Nord',
            'Est'
        ][idx];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-[30%] min-w-[250px] bg-gray-900 border-r border-gray-700 flex flex-col z-50 shadow-2xl h-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4 border-b border-gray-800 shrink-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-xl font-bold text-white",
                    children: [
                        "The Crew ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-purple-500",
                            children: "Solver"
                        }, void 0, false, {
                            fileName: "[project]/components/Sidebar.tsx",
                            lineNumber: 43,
                            columnNumber: 71
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Sidebar.tsx",
                    lineNumber: 43,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Sidebar.tsx",
                lineNumber: 42,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 overflow-y-auto p-4 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-3 mb-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: startNewGame,
                                className: "bg-gray-800 hover:bg-gray-700 text-white py-3 rounded font-bold text-sm border border-gray-600",
                                children: "🔄 Nouvelle Donne"
                            }, void 0, false, {
                                fileName: "[project]/components/Sidebar.tsx",
                                lineNumber: 48,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-black/20 p-3 rounded border border-white/10 flex flex-col gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-xs font-bold text-gray-400 mb-1 uppercase flex items-center gap-2",
                                                children: [
                                                    "📖 Livre de Bord",
                                                    bookMissionId > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-purple-400 text-[10px]",
                                                        children: bookMissionId
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Sidebar.tsx",
                                                        lineNumber: 58,
                                                        columnNumber: 55
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/Sidebar.tsx",
                                                lineNumber: 56,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                className: "w-full bg-gray-800 text-white text-xs p-2 rounded border border-gray-600 outline-none focus:border-purple-500",
                                                value: bookMissionId,
                                                onChange: (e)=>loadMissionFromBook(Number(e.target.value)),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "0",
                                                        children: "-- Choisir une mission --"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Sidebar.tsx",
                                                        lineNumber: 65,
                                                        columnNumber: 33
                                                    }, this),
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$missions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MISSION_LOGBOOK"].map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: m.id,
                                                            children: [
                                                                "Mission ",
                                                                m.id,
                                                                " (",
                                                                m.slots.length,
                                                                " cartes)"
                                                            ]
                                                        }, m.id, true, {
                                                            fileName: "[project]/components/Sidebar.tsx",
                                                            lineNumber: 67,
                                                            columnNumber: 37
                                                        }, this))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/Sidebar.tsx",
                                                lineNumber: 60,
                                                columnNumber: 29
                                            }, this),
                                            bookMissionId > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[9px] text-gray-400 italic leading-tight px-1 mb-2",
                                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$missions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MISSION_LOGBOOK"].find((m)=>m.id === bookMissionId)?.description
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Sidebar.tsx",
                                                        lineNumber: 75,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex gap-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: shuffleOwners,
                                                                className: "flex-1 bg-gray-700 hover:bg-gray-600 text-[9px] text-white py-1 rounded border border-gray-600 active:scale-95 transition",
                                                                children: "👤 Mix Joueurs"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/Sidebar.tsx",
                                                                lineNumber: 79,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: shuffleCards,
                                                                className: "flex-1 bg-gray-700 hover:bg-gray-600 text-[9px] text-white py-1 rounded border border-gray-600 active:scale-95 transition",
                                                                children: "🃏 Mix Cartes"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/Sidebar.tsx",
                                                                lineNumber: 80,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: autoFindSolution,
                                                                disabled: isAutoFinding,
                                                                className: `flex-2 py-3 rounded text-[10px] font-bold border transition flex items-center justify-center gap-2 shadow-lg ${isAutoFinding ? 'bg-purple-900/80 border-purple-500 text-purple-200 animate-pulse cursor-wait' : 'bg-gradient-to-r from-purple-700 to-indigo-700 hover:from-purple-600 hover:to-indigo-600 text-white border-indigo-500'}`,
                                                                children: isAutoFinding ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                    children: "🎲 Recherche..."
                                                                }, void 0, false) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                    children: "🎰 Trouver GAGNANT"
                                                                }, void 0, false)
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/Sidebar.tsx",
                                                                lineNumber: 81,
                                                                columnNumber: 41
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/Sidebar.tsx",
                                                        lineNumber: 78,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/Sidebar.tsx",
                                                lineNumber: 74,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "h-[1px] bg-white/10 mt-2"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Sidebar.tsx",
                                                lineNumber: 87,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Sidebar.tsx",
                                        lineNumber: 55,
                                        columnNumber: 26
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2 pr-1",
                                        children: [
                                            missions.map((m, i)=>{
                                                const targetId = `${m.cardColor}-${m.cardValue}`;
                                                const targetCard = allCards.find((c)=>c.id === targetId);
                                                const isAccomplished = targetCard?.status === 'WON' && targetCard?.winnerIndex === m.ownerIndex;
                                                const isFailed = targetCard?.status === 'WON' && targetCard?.winnerIndex !== undefined && targetCard?.winnerIndex !== m.ownerIndex;
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `p-2 rounded border transition-colors ${isAccomplished ? 'bg-green-900/30 border-green-500/50' : isFailed ? 'bg-red-900/30 border-red-500/50' : 'bg-gray-800 border-gray-600'}`,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex justify-between items-center mb-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center gap-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-xs",
                                                                            children: isAccomplished ? '✅' : isFailed ? '❌' : '🎯'
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/Sidebar.tsx",
                                                                            lineNumber: 102,
                                                                            columnNumber: 45
                                                                        }, this),
                                                                        m.token !== 'None' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "bg-purple-600 text-white px-1.5 rounded text-[9px] font-bold",
                                                                            children: m.token === 'Omega' ? 'Ω' : m.token
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/Sidebar.tsx",
                                                                            lineNumber: 103,
                                                                            columnNumber: 69
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/Sidebar.tsx",
                                                                    lineNumber: 101,
                                                                    columnNumber: 41
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>removeMission(i),
                                                                    className: "text-gray-500 hover:text-red-400 text-xs",
                                                                    children: "✕"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/Sidebar.tsx",
                                                                    lineNumber: 105,
                                                                    columnNumber: 41
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/Sidebar.tsx",
                                                            lineNumber: 100,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex gap-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                    className: "bg-black/30 text-white text-[10px] p-1 rounded w-16 outline-none",
                                                                    value: m.ownerIndex,
                                                                    onChange: (e)=>{
                                                                        const newMissions = [
                                                                            ...missions
                                                                        ];
                                                                        newMissions[i].ownerIndex = Number(e.target.value);
                                                                        setMissions(newMissions);
                                                                    },
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: 0,
                                                                            children: "Sud"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/Sidebar.tsx",
                                                                            lineNumber: 109,
                                                                            columnNumber: 45
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: 1,
                                                                            children: "Ouest"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/Sidebar.tsx",
                                                                            lineNumber: 109,
                                                                            columnNumber: 75
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: 2,
                                                                            children: "Nord"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/Sidebar.tsx",
                                                                            lineNumber: 109,
                                                                            columnNumber: 107
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: 3,
                                                                            children: "Est"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/Sidebar.tsx",
                                                                            lineNumber: 109,
                                                                            columnNumber: 138
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/Sidebar.tsx",
                                                                    lineNumber: 108,
                                                                    columnNumber: 41
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                    className: "bg-black/30 text-white text-[10px] p-1 rounded w-10 text-center outline-none",
                                                                    value: m.cardValue,
                                                                    onChange: (e)=>{
                                                                        const newMissions = [
                                                                            ...missions
                                                                        ];
                                                                        newMissions[i].cardValue = Number(e.target.value);
                                                                        setMissions(newMissions);
                                                                    },
                                                                    children: [
                                                                        1,
                                                                        2,
                                                                        3,
                                                                        4,
                                                                        5,
                                                                        6,
                                                                        7,
                                                                        8,
                                                                        9
                                                                    ].map((n)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: n,
                                                                            children: n
                                                                        }, n, false, {
                                                                            fileName: "[project]/components/Sidebar.tsx",
                                                                            lineNumber: 112,
                                                                            columnNumber: 75
                                                                        }, this))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/Sidebar.tsx",
                                                                    lineNumber: 111,
                                                                    columnNumber: 41
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                    className: `text-[10px] p-1 rounded flex-1 font-bold outline-none ${m.cardColor === 'Blue' ? 'bg-blue-900/50 text-blue-200' : m.cardColor === 'Green' ? 'bg-green-900/50 text-green-200' : m.cardColor === 'Pink' ? 'bg-pink-900/50 text-pink-200' : m.cardColor === 'Yellow' ? 'bg-yellow-900/50 text-yellow-200' : 'bg-gray-700 text-white'}`,
                                                                    value: m.cardColor,
                                                                    onChange: (e)=>{
                                                                        const newMissions = [
                                                                            ...missions
                                                                        ];
                                                                        newMissions[i].cardColor = e.target.value;
                                                                        setMissions(newMissions);
                                                                    },
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: "Blue",
                                                                            children: "Bleu"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/Sidebar.tsx",
                                                                            lineNumber: 115,
                                                                            columnNumber: 45
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: "Green",
                                                                            children: "Vert"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/Sidebar.tsx",
                                                                            lineNumber: 115,
                                                                            columnNumber: 79
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: "Pink",
                                                                            children: "Rose"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/Sidebar.tsx",
                                                                            lineNumber: 115,
                                                                            columnNumber: 114
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: "Yellow",
                                                                            children: "Jaune"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/Sidebar.tsx",
                                                                            lineNumber: 115,
                                                                            columnNumber: 148
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: "Rocket",
                                                                            children: "Fusée"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/Sidebar.tsx",
                                                                            lineNumber: 115,
                                                                            columnNumber: 185
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/Sidebar.tsx",
                                                                    lineNumber: 114,
                                                                    columnNumber: 41
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/Sidebar.tsx",
                                                            lineNumber: 107,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, i, true, {
                                                    fileName: "[project]/components/Sidebar.tsx",
                                                    lineNumber: 99,
                                                    columnNumber: 33
                                                }, this);
                                            }),
                                            missions.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-gray-500 text-[10px] text-center py-2",
                                                children: "Aucune mission active"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Sidebar.tsx",
                                                lineNumber: 120,
                                                columnNumber: 55
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Sidebar.tsx",
                                        lineNumber: 91,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setMissions((prev)=>[
                                                    ...prev,
                                                    {
                                                        cardColor: 'Blue',
                                                        cardValue: 1,
                                                        ownerIndex: 0,
                                                        token: 'None'
                                                    }
                                                ]),
                                        className: "w-full border border-dashed border-gray-600 text-gray-400 hover:text-white text-[10px] py-1 rounded transition-colors hover:border-gray-400",
                                        children: "+ Ajouter slot manuel"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Sidebar.tsx",
                                        lineNumber: 122,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Sidebar.tsx",
                                lineNumber: 53,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: launchSolver,
                                disabled: isThinking,
                                className: `py-3 rounded font-bold transition text-sm ${isThinking ? 'bg-purple-900 text-purple-300' : 'bg-purple-600 hover:bg-purple-500 text-white'}`,
                                children: isThinking ? 'Calcul en cours...' : '⚡️ Lancer Solver'
                            }, void 0, false, {
                                fileName: "[project]/components/Sidebar.tsx",
                                lineNumber: 127,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Sidebar.tsx",
                        lineNumber: 47,
                        columnNumber: 17
                    }, this),
                    stats && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-black/40 p-3 rounded-lg border border-white/10 mb-4 animate-fade-in",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between items-center mb-2 text-xs text-gray-400 font-mono",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            "Coup ",
                                            Math.ceil(currentMoveIndex + 1),
                                            " / ",
                                            stats.solution_steps.length
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Sidebar.tsx",
                                        lineNumber: 136,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: isPlaying ? '▶ LECTURE' : '⏸ PAUSE'
                                    }, void 0, false, {
                                        fileName: "[project]/components/Sidebar.tsx",
                                        lineNumber: 137,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Sidebar.tsx",
                                lineNumber: 135,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full h-1.5 bg-gray-700 rounded-full mb-4 overflow-hidden",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300",
                                    style: {
                                        width: `${(currentMoveIndex + 1) / stats.solution_steps.length * 100}%`
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/components/Sidebar.tsx",
                                    lineNumber: 139,
                                    columnNumber: 101
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/Sidebar.tsx",
                                lineNumber: 139,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handlePrev,
                                        className: "flex-1 bg-gray-700 hover:bg-gray-600 text-white py-2 rounded text-lg active:scale-95",
                                        children: "⏮"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Sidebar.tsx",
                                        lineNumber: 141,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: togglePlay,
                                        className: `flex-1 py-2 rounded text-lg font-bold active:scale-95 text-white ${isPlaying ? 'bg-yellow-600 hover:bg-yellow-500' : 'bg-green-600 hover:bg-green-500'}`,
                                        children: isPlaying ? '⏸' : '▶'
                                    }, void 0, false, {
                                        fileName: "[project]/components/Sidebar.tsx",
                                        lineNumber: 142,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleNext,
                                        className: "flex-1 bg-gray-700 hover:bg-gray-600 text-white py-2 rounded text-lg active:scale-95",
                                        children: "⏭"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Sidebar.tsx",
                                        lineNumber: 143,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Sidebar.tsx",
                                lineNumber: 140,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Sidebar.tsx",
                        lineNumber: 134,
                        columnNumber: 21
                    }, this),
                    stats && stats.solutionFound && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 overflow-y-auto min-h-[150px] mb-4 pr-1 scrollbar-thin scrollbar-thumb-gray-700",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$TrickHistory$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            steps: stats.solution_steps
                        }, void 0, false, {
                            fileName: "[project]/components/Sidebar.tsx",
                            lineNumber: 151,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/Sidebar.tsx",
                        lineNumber: 150,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-black/40 rounded p-2 font-mono text-[10px] text-gray-400 border border-white/5 min-h-[100px]",
                        children: logs.map((l, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-1",
                                children: l
                            }, i, false, {
                                fileName: "[project]/components/Sidebar.tsx",
                                lineNumber: 157,
                                columnNumber: 41
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/Sidebar.tsx",
                        lineNumber: 156,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Sidebar.tsx",
                lineNumber: 46,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Sidebar.tsx",
        lineNumber: 41,
        columnNumber: 9
    }, this);
}
_c = Sidebar;
var _c;
__turbopack_context__.k.register(_c, "Sidebar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Card
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function Card({ color, value, className = '' }) {
    // Définition des couleurs exactes du jeu (approximatives pour le style néon)
    const getColors = (c)=>{
        switch(c){
            case 'Blue':
                return {
                    bg: 'bg-blue-900',
                    border: 'border-blue-400',
                    text: 'text-blue-300',
                    icon: '#60a5fa'
                };
            case 'Green':
                return {
                    bg: 'bg-green-900',
                    border: 'border-green-400',
                    text: 'text-green-300',
                    icon: '#4ade80'
                };
            case 'Pink':
                return {
                    bg: 'bg-pink-900',
                    border: 'border-pink-400',
                    text: 'text-pink-300',
                    icon: '#f472b6'
                };
            case 'Yellow':
                return {
                    bg: 'bg-yellow-900',
                    border: 'border-yellow-400',
                    text: 'text-yellow-300',
                    icon: '#facc15'
                };
            case 'Rocket':
                return {
                    bg: 'bg-gray-800',
                    border: 'border-gray-400',
                    text: 'text-white',
                    icon: '#ffffff'
                };
            default:
                return {
                    bg: 'bg-gray-800',
                    border: 'border-gray-500',
                    text: 'text-gray-400',
                    icon: '#9ca3af'
                };
        }
    };
    const theme = getColors(color);
    const isRocket = color === 'Rocket';
    // --- SYMBOLES SVG ---
    const renderIcon = ()=>{
        switch(color){
            case 'Blue':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    viewBox: "0 0 24 24",
                    fill: "none",
                    className: "w-full h-full opacity-30",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "12",
                            cy: "12",
                            r: "6",
                            stroke: theme.icon,
                            strokeWidth: "2",
                            fill: theme.icon,
                            fillOpacity: "0.2"
                        }, void 0, false, {
                            fileName: "[project]/components/Card.tsx",
                            lineNumber: 32,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M7 16C7 16 9 18 12 18C15 18 17 16 17 16",
                            stroke: theme.icon,
                            strokeWidth: "2",
                            strokeLinecap: "round"
                        }, void 0, false, {
                            fileName: "[project]/components/Card.tsx",
                            lineNumber: 33,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                            cx: "12",
                            cy: "12",
                            rx: "9",
                            ry: "3",
                            stroke: theme.icon,
                            strokeWidth: "1.5",
                            transform: "rotate(-15 12 12)"
                        }, void 0, false, {
                            fileName: "[project]/components/Card.tsx",
                            lineNumber: 34,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Card.tsx",
                    lineNumber: 31,
                    columnNumber: 11
                }, this);
            case 'Green':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    viewBox: "0 0 24 24",
                    fill: "none",
                    className: "w-full h-full opacity-30",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z",
                            stroke: theme.icon,
                            strokeWidth: "1.5"
                        }, void 0, false, {
                            fileName: "[project]/components/Card.tsx",
                            lineNumber: 40,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z",
                            stroke: theme.icon,
                            strokeWidth: "1.5"
                        }, void 0, false, {
                            fileName: "[project]/components/Card.tsx",
                            lineNumber: 41,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "12",
                            cy: "12",
                            r: "2",
                            fill: theme.icon
                        }, void 0, false, {
                            fileName: "[project]/components/Card.tsx",
                            lineNumber: 42,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M12 12L16 8",
                            stroke: theme.icon,
                            strokeWidth: "1.5"
                        }, void 0, false, {
                            fileName: "[project]/components/Card.tsx",
                            lineNumber: 43,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Card.tsx",
                    lineNumber: 39,
                    columnNumber: 11
                }, this);
            case 'Pink':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    viewBox: "0 0 24 24",
                    fill: "none",
                    className: "w-full h-full opacity-30",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                            x: "5",
                            y: "5",
                            width: "14",
                            height: "14",
                            rx: "4",
                            stroke: theme.icon,
                            strokeWidth: "2",
                            fill: theme.icon,
                            fillOpacity: "0.1"
                        }, void 0, false, {
                            fileName: "[project]/components/Card.tsx",
                            lineNumber: 49,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M9 12H15",
                            stroke: theme.icon,
                            strokeWidth: "2",
                            strokeLinecap: "round"
                        }, void 0, false, {
                            fileName: "[project]/components/Card.tsx",
                            lineNumber: 50,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M12 9V15",
                            stroke: theme.icon,
                            strokeWidth: "2",
                            strokeLinecap: "round"
                        }, void 0, false, {
                            fileName: "[project]/components/Card.tsx",
                            lineNumber: 51,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Card.tsx",
                    lineNumber: 48,
                    columnNumber: 13
                }, this);
            case 'Yellow':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    viewBox: "0 0 24 24",
                    fill: "none",
                    className: "w-full h-full opacity-30",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z",
                        stroke: theme.icon,
                        strokeWidth: "2",
                        fill: theme.icon,
                        fillOpacity: "0.2"
                    }, void 0, false, {
                        fileName: "[project]/components/Card.tsx",
                        lineNumber: 57,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/Card.tsx",
                    lineNumber: 56,
                    columnNumber: 11
                }, this);
            case 'Rocket':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    viewBox: "0 0 24 24",
                    fill: "none",
                    className: "w-full h-full opacity-40",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M12 2.5C12 2.5 15.5 8 15.5 13C15.5 16.5 14.5 18 12 21.5C9.5 18 8.5 16.5 8.5 13C8.5 8 12 2.5 12 2.5Z",
                            fill: "white"
                        }, void 0, false, {
                            fileName: "[project]/components/Card.tsx",
                            lineNumber: 64,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M12 14.5C12.8284 14.5 13.5 13.8284 13.5 13C13.5 12.1716 12.8284 11.5 12 11.5C11.1716 11.5 10.5 12.1716 10.5 13C10.5 13.8284 11.1716 14.5 12 14.5Z",
                            fill: "black"
                        }, void 0, false, {
                            fileName: "[project]/components/Card.tsx",
                            lineNumber: 65,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M15.5 16.5L18 20.5",
                            stroke: "white",
                            strokeWidth: "2",
                            strokeLinecap: "round"
                        }, void 0, false, {
                            fileName: "[project]/components/Card.tsx",
                            lineNumber: 66,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M8.5 16.5L6 20.5",
                            stroke: "white",
                            strokeWidth: "2",
                            strokeLinecap: "round"
                        }, void 0, false, {
                            fileName: "[project]/components/Card.tsx",
                            lineNumber: 67,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Card.tsx",
                    lineNumber: 63,
                    columnNumber: 11
                }, this);
            default:
                return null;
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `relative rounded-lg shadow-xl overflow-hidden select-none transition-transform ${theme.bg} ${theme.border} border-2 ${className}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 flex items-center justify-center p-2",
                children: renderIcon()
            }, void 0, false, {
                fileName: "[project]/components/Card.tsx",
                lineNumber: 78,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `absolute inset-0 flex items-center justify-center font-black text-4xl drop-shadow-md ${theme.text}`,
                children: value
            }, void 0, false, {
                fileName: "[project]/components/Card.tsx",
                lineNumber: 83,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `absolute top-1 left-1.5 text-xs font-bold ${theme.text}`,
                children: value
            }, void 0, false, {
                fileName: "[project]/components/Card.tsx",
                lineNumber: 88,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `absolute bottom-1 right-1.5 text-xs font-bold ${theme.text} rotate-180`,
                children: value
            }, void 0, false, {
                fileName: "[project]/components/Card.tsx",
                lineNumber: 93,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Card.tsx",
        lineNumber: 75,
        columnNumber: 5
    }, this);
}
_c = Card;
var _c;
__turbopack_context__.k.register(_c, "Card");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/GameBoard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>GameBoard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Card.tsx [app-client] (ecmascript)");
;
;
function GameBoard({ allCards, onPlayerClick }) {
    // ====================================================================
    // 🎛️ CONFIGURATION GÉOMÉTRIQUE
    // ====================================================================
    // 1. POSITION DES JOUEURS (Mains)
    const DIST_NORD = 240;
    const DIST_SUD = 240;
    const DIST_OUEST = 400;
    const DIST_EST = 400;
    // 2. POSITION DES TEXTES (Directions)
    // On les met plus proches du centre que les joueurs (environ à mi-chemin)
    const LABEL_DIST_Y = 140; // Distance pour Nord/Sud depuis le centre
    const LABEL_DIST_X = 300; // Distance pour Ouest/Est depuis le centre
    // 3. CONFIGURATION DE L'ÉVENTAIL
    const HAND_RADIUS = 600;
    const ANGLE_STEP = 4;
    // Debug
    const SHOW_DEBUG_CENTER = false;
    // ====================================================================
    const getCardStyle = (card)=>{
        // --- LOGIQUE GAGNÉ ---
        if (card.status === 'WON') {
            const winPos = [
                `translate(0px, 500px)`,
                `translate(-600px, 0px)`,
                `translate(0px, -500px)`,
                `translate(600px, 0px)` // Est
            ];
            return {
                transform: `translate(-50%, -50%) ${winPos[card.winnerIndex || 0]} scale(0.4)`,
                opacity: 0,
                zIndex: card.zIndex
            };
        }
        // --- LOGIQUE TABLE ---
        if (card.status === 'TABLE') {
            const rX = card.tableRotation * 5 % 15 - 7;
            const rY = card.tableRotation * 7 % 15 - 7;
            return {
                transform: `translate(-50%, -50%) translate(${rX}px, ${rY}px) rotate(${card.tableRotation}deg) scale(1.1)`,
                opacity: 1,
                zIndex: card.zIndex
            };
        }
        // --- LOGIQUE MAIN (ÉVENTAIL) ---
        const cardsInHand = allCards.filter((c)=>c.owner === card.owner && c.status === 'HAND');
        const colorPriority = {
            'Blue': 1,
            'Green': 2,
            'Pink': 3,
            'Yellow': 4,
            'Rocket': 5
        };
        cardsInHand.sort((a, b)=>{
            if (a.color !== b.color) return colorPriority[a.color] - colorPriority[b.color];
            return a.value - b.value;
        });
        const myIndex = cardsInHand.findIndex((c)=>c.id === card.id);
        const total = cardsInHand.length;
        const angle = (myIndex - (total - 1) / 2) * ANGLE_STEP;
        const centerHTML = "translate(-50%, -50%)";
        let playerRotation = 0;
        let distance = 0;
        switch(card.owner){
            case 0:
                playerRotation = 0;
                distance = DIST_SUD;
                break;
            case 1:
                playerRotation = 90;
                distance = DIST_OUEST;
                break;
            case 2:
                playerRotation = 180;
                distance = DIST_NORD;
                break;
            case 3:
                playerRotation = -90;
                distance = DIST_EST;
                break;
        }
        const transform = `
        ${centerHTML} 
        rotate(${playerRotation}deg) 
        translate(0px, ${distance + HAND_RADIUS}px) 
        rotate(${angle}deg) 
        translate(0px, -${HAND_RADIUS}px)
      `;
        return {
            transform,
            opacity: 1,
            zIndex: myIndex
        };
    };
    // Style de base pour les textes
    const labelStyle = {
        position: 'absolute',
        color: 'rgba(255,255,255,0.15)',
        fontWeight: 'bold',
        letterSpacing: '0.2em',
        fontSize: '1.2rem',
        pointerEvents: 'none',
        textAlign: 'center',
        width: '200px',
        // On centre le point de pivot du texte pour que la rotation soit propre
        transformOrigin: 'center center'
    };
    // Helper pour générer un bouton de joueur stylé
    const renderPlayerLabel = (label, index, style)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: ()=>onPlayerClick(index),
            className: "absolute group flex flex-col items-center justify-center transition-transform hover:scale-110 active:scale-95 z-50",
            style: style,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-white/40 font-bold tracking-[0.2em] text-sm group-hover:text-purple-400 transition-colors",
                    children: label
                }, void 0, false, {
                    fileName: "[project]/components/GameBoard.tsx",
                    lineNumber: 127,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-[10px] text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1",
                    children: "✏️ Éditer"
                }, void 0, false, {
                    fileName: "[project]/components/GameBoard.tsx",
                    lineNumber: 130,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/GameBoard.tsx",
            lineNumber: 122,
            columnNumber: 7
        }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full h-full relative bg-[#2c3e50] overflow-hidden shadow-inner flex items-center justify-center",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative w-0 h-0 flex items-center justify-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        ...labelStyle,
                        transform: `translate(0px, -${LABEL_DIST_Y}px)`
                    },
                    children: "NORD"
                }, void 0, false, {
                    fileName: "[project]/components/GameBoard.tsx",
                    lineNumber: 146,
                    columnNumber: 13
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        ...labelStyle,
                        transform: `translate(0px, ${LABEL_DIST_Y}px)`
                    },
                    children: "SUD"
                }, void 0, false, {
                    fileName: "[project]/components/GameBoard.tsx",
                    lineNumber: 151,
                    columnNumber: 13
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        ...labelStyle,
                        transform: `translate(-${LABEL_DIST_X}px, 0px) rotate(90deg)`
                    },
                    children: "OUEST"
                }, void 0, false, {
                    fileName: "[project]/components/GameBoard.tsx",
                    lineNumber: 156,
                    columnNumber: 13
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        ...labelStyle,
                        transform: `translate(${LABEL_DIST_X}px, 0px) rotate(-90deg)`
                    },
                    children: "EST"
                }, void 0, false, {
                    fileName: "[project]/components/GameBoard.tsx",
                    lineNumber: 161,
                    columnNumber: 13
                }, this),
                allCards.map((card)=>{
                    const style = getCardStyle(card);
                    const speed = card.status === 'WON' ? '1000ms' : '600ms';
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-0 left-0 w-16 aspect-[2/3] transition-all ease-in-out",
                        style: {
                            ...style,
                            transitionProperty: 'transform, opacity',
                            transitionDuration: speed,
                            willChange: 'transform'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            color: card.color,
                            value: card.value,
                            className: "w-full h-full shadow-2xl border border-black/30 rounded-lg"
                        }, void 0, false, {
                            fileName: "[project]/components/GameBoard.tsx",
                            lineNumber: 181,
                            columnNumber: 25
                        }, this)
                    }, card.id, false, {
                        fileName: "[project]/components/GameBoard.tsx",
                        lineNumber: 171,
                        columnNumber: 21
                    }, this);
                })
            ]
        }, void 0, true, {
            fileName: "[project]/components/GameBoard.tsx",
            lineNumber: 140,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/GameBoard.tsx",
        lineNumber: 137,
        columnNumber: 5
    }, this);
}
_c = GameBoard;
var _c;
__turbopack_context__.k.register(_c, "GameBoard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useGameLogic$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useGameLogic.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Sidebar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$GameBoard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/GameBoard.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function Home() {
    _s();
    // On récupère toute la logique depuis notre hook
    const game = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useGameLogic$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGameLogic"])();
    // Gestion clavier (peut aussi être déplacée dans le hook si tu préfères, mais ok ici)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            const handleKeyDown = {
                "Home.useEffect.handleKeyDown": (e)=>{
                    if ([
                        'INPUT',
                        'SELECT',
                        'TEXTAREA'
                    ].includes(e.target.tagName)) return;
                    if (e.key === 'ArrowRight') game.handleNext();
                    if (e.key === 'ArrowLeft') game.handlePrev();
                    if (e.key === ' ') {
                        e.preventDefault();
                        game.togglePlay();
                    }
                }
            }["Home.useEffect.handleKeyDown"];
            window.addEventListener('keydown', handleKeyDown);
            return ({
                "Home.useEffect": ()=>window.removeEventListener('keydown', handleKeyDown)
            })["Home.useEffect"];
        }
    }["Home.useEffect"], [
        game.handleNext,
        game.handlePrev,
        game.togglePlay
    ]);
    // Initialisation du jeu au montage
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            game.startNewGame();
        }
    }["Home.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-screen w-screen flex overflow-hidden bg-[#2c3e50] font-sans",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                ...game,
                removeMission: (idx)=>game.setMissions((p)=>p.filter((_, i)=>i !== idx))
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$GameBoard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                allCards: game.allCards
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, this);
}
_s(Home, "xRxxF3PRcAWfUM5yXD0nlWtfVRw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useGameLogic$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGameLogic"]
    ];
});
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_369310c1._.js.map