module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/frontend/data/real_missions.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "REAL_MISSION_LOGBOOK",
    ()=>REAL_MISSION_LOGBOOK
]);
const REAL_MISSION_LOGBOOK = [
    {
        id: 1,
        description: "Accomplissez 1 tâche.",
        constraints: [
            {
                type: 'TARGET_CARD',
                args: {
                    count: 1
                }
            }
        ]
    },
    {
        id: 2,
        description: "Accomplissez 2 tâches.",
        constraints: [
            {
                type: 'TARGET_CARD',
                args: {
                    count: 2
                }
            }
        ]
    },
    {
        id: 3,
        description: "Accomplissez 2 tâches dans l'ordre strict (1 puis 2).",
        constraints: [
            {
                type: 'TARGET_CARD',
                args: {
                    count: 2
                }
            },
            {
                type: 'ORDER_ABSOLUTE',
                args: {
                    count: 2
                }
            }
        ]
    },
    {
        id: 4,
        description: "Accomplissez 3 tâches.",
        constraints: [
            {
                type: 'TARGET_CARD',
                args: {
                    count: 3
                }
            }
        ]
    },
    {
        id: 5,
        description: "Accomplissez 3 tâches.",
        constraints: [
            {
                type: 'TARGET_CARD',
                args: {
                    count: 3
                }
            }
        ]
    },
    {
        id: 6,
        description: "3 tâches, ordre relatif (> et >>).",
        constraints: [
            {
                type: 'TARGET_CARD',
                args: {
                    count: 3
                }
            },
            {
                type: 'ORDER_RELATIVE',
                args: {
                    count: 2
                }
            }
        ]
    },
    {
        id: 7,
        description: "3 tâches, dont une doit être faite en dernier (Omega).",
        constraints: [
            {
                type: 'TARGET_CARD',
                args: {
                    count: 3
                }
            },
            {
                type: 'ORDER_OMEGA',
                args: {
                    count: 1
                }
            }
        ]
    },
    {
        id: 8,
        description: "3 tâches dans l'ordre strict (1, 2, 3).",
        constraints: [
            {
                type: 'TARGET_CARD',
                args: {
                    count: 3
                }
            },
            {
                type: 'ORDER_ABSOLUTE',
                args: {
                    count: 3
                }
            }
        ]
    },
    {
        id: 9,
        description: "Accomplissez 3 tâches.",
        constraints: [
            {
                type: 'TARGET_CARD',
                args: {
                    count: 3
                }
            }
        ]
    },
    {
        id: 10,
        description: "Accomplissez 4 tâches.",
        constraints: [
            {
                type: 'TARGET_CARD',
                args: {
                    count: 4
                }
            }
        ]
    },
    {
        id: 11,
        description: "4 tâches, dont la tâche 1 doit être faite en premier.",
        constraints: [
            {
                type: 'TARGET_CARD',
                args: {
                    count: 4
                }
            },
            {
                type: 'ORDER_ABSOLUTE',
                args: {
                    count: 1
                }
            }
        ]
    },
    {
        id: 12,
        description: "4 tâches, dont une doit être faite en dernier (Omega).",
        constraints: [
            {
                type: 'TARGET_CARD',
                args: {
                    count: 4
                }
            },
            {
                type: 'ORDER_OMEGA',
                args: {
                    count: 1
                }
            }
        ]
    },
    {
        id: 13,
        description: "Accomplissez 4 tâches.",
        constraints: [
            {
                type: 'TARGET_CARD',
                args: {
                    count: 4
                }
            }
        ]
    },
    {
        id: 14,
        description: "4 tâches, ordre relatif (>, >>, >>>).",
        constraints: [
            {
                type: 'TARGET_CARD',
                args: {
                    count: 4
                }
            },
            {
                type: 'ORDER_RELATIVE',
                args: {
                    count: 3
                }
            }
        ]
    },
    {
        id: 15,
        description: "4 tâches dans l'ordre strict (1, 2, 3, 4).",
        constraints: [
            {
                type: 'TARGET_CARD',
                args: {
                    count: 4
                }
            },
            {
                type: 'ORDER_ABSOLUTE',
                args: {
                    count: 4
                }
            }
        ]
    },
    {
        id: 16,
        description: "Accomplissez 4 tâches.",
        constraints: [
            {
                type: 'TARGET_CARD',
                args: {
                    count: 4
                }
            }
        ]
    },
    {
        id: 17,
        description: "Accomplissez 5 tâches.",
        constraints: [
            {
                type: 'TARGET_CARD',
                args: {
                    count: 5
                }
            }
        ]
    },
    {
        id: 18,
        description: "Accomplissez 5 tâches.",
        constraints: [
            {
                type: 'TARGET_CARD',
                args: {
                    count: 5
                }
            }
        ]
    },
    {
        id: 19,
        description: "5 tâches, dont la tâche 1 doit être faite en premier.",
        constraints: [
            {
                type: 'TARGET_CARD',
                args: {
                    count: 5
                }
            },
            {
                type: 'ORDER_ABSOLUTE',
                args: {
                    count: 1
                }
            }
        ]
    },
    {
        id: 20,
        description: "Accomplissez 5 tâches.",
        constraints: [
            {
                type: 'TARGET_CARD',
                args: {
                    count: 5
                }
            }
        ]
    },
    {
        id: 21,
        description: "5 tâches, dont les tâches 1 et 2 dans l'ordre strict.",
        constraints: [
            {
                type: 'TARGET_CARD',
                args: {
                    count: 5
                }
            },
            {
                type: 'ORDER_ABSOLUTE',
                args: {
                    count: 2
                }
            }
        ]
    },
    {
        id: 22,
        description: "5 tâches, ordre relatif (>, >>, >>>, >>>>).",
        constraints: [
            {
                type: 'TARGET_CARD',
                args: {
                    count: 5
                }
            },
            {
                type: 'ORDER_RELATIVE',
                args: {
                    count: 4
                }
            }
        ]
    },
    {
        id: 23,
        description: "5 tâches dans l'ordre strict (1, 2, 3, 4, 5).",
        constraints: [
            {
                type: 'TARGET_CARD',
                args: {
                    count: 5
                }
            },
            {
                type: 'ORDER_ABSOLUTE',
                args: {
                    count: 5
                }
            }
        ]
    },
    {
        id: 24,
        description: "Accomplissez 6 tâches.",
        constraints: [
            {
                type: 'TARGET_CARD',
                args: {
                    count: 6
                }
            }
        ]
    },
    {
        id: 25,
        description: "6 tâches, ordre relatif (> et >>).",
        constraints: [
            {
                type: 'TARGET_CARD',
                args: {
                    count: 6
                }
            },
            {
                type: 'ORDER_RELATIVE',
                args: {
                    count: 2
                }
            }
        ]
    },
    {
        id: 26,
        description: "Accomplissez 6 tâches.",
        constraints: [
            {
                type: 'TARGET_CARD',
                args: {
                    count: 6
                }
            }
        ]
    },
    {
        id: 27,
        description: "Accomplissez 6 tâches.",
        constraints: [
            {
                type: 'TARGET_CARD',
                args: {
                    count: 6
                }
            }
        ]
    },
    {
        id: 28,
        description: "6 tâches, dont la tâche 1 en premier et Omega en dernier.",
        constraints: [
            {
                type: 'TARGET_CARD',
                args: {
                    count: 6
                }
            },
            {
                type: 'ORDER_ABSOLUTE',
                args: {
                    count: 1
                }
            },
            {
                type: 'ORDER_OMEGA',
                args: {
                    count: 1
                }
            }
        ]
    },
    {
        id: 29,
        description: "Accomplissez 6 tâches.",
        constraints: [
            {
                type: 'TARGET_CARD',
                args: {
                    count: 6
                }
            }
        ]
    },
    {
        id: 30,
        description: "6 tâches, ordre relatif (>, >>, >>>).",
        constraints: [
            {
                type: 'TARGET_CARD',
                args: {
                    count: 6
                }
            },
            {
                type: 'ORDER_RELATIVE',
                args: {
                    count: 3
                }
            }
        ]
    },
    {
        id: 31,
        description: "6 tâches, dont les tâches 1, 2 et 3 dans l'ordre strict.",
        constraints: [
            {
                type: 'TARGET_CARD',
                args: {
                    count: 6
                }
            },
            {
                type: 'ORDER_ABSOLUTE',
                args: {
                    count: 3
                }
            }
        ]
    },
    {
        id: 32,
        description: "Accomplissez 7 tâches.",
        constraints: [
            {
                type: 'TARGET_CARD',
                args: {
                    count: 7
                }
            }
        ]
    },
    {
        id: 33,
        description: "Accomplissez 7 tâches.",
        constraints: [
            {
                type: 'TARGET_CARD',
                args: {
                    count: 7
                }
            }
        ]
    },
    {
        id: 34,
        description: "Accomplissez 7 tâches.",
        constraints: [
            {
                type: 'TARGET_CARD',
                args: {
                    count: 7
                }
            }
        ]
    },
    {
        id: 35,
        description: "7 tâches, ordre relatif (>, >>, >>>).",
        constraints: [
            {
                type: 'TARGET_CARD',
                args: {
                    count: 7
                }
            },
            {
                type: 'ORDER_RELATIVE',
                args: {
                    count: 3
                }
            }
        ]
    },
    {
        id: 36,
        description: "7 tâches, dont les tâches 1 et 2 dans l'ordre strict.",
        constraints: [
            {
                type: 'TARGET_CARD',
                args: {
                    count: 7
                }
            },
            {
                type: 'ORDER_ABSOLUTE',
                args: {
                    count: 2
                }
            }
        ]
    },
    {
        id: 37,
        description: "Accomplissez 8 tâches.",
        constraints: [
            {
                type: 'TARGET_CARD',
                args: {
                    count: 8
                }
            }
        ]
    },
    {
        id: 38,
        description: "Accomplissez 8 tâches.",
        constraints: [
            {
                type: 'TARGET_CARD',
                args: {
                    count: 8
                }
            }
        ]
    },
    {
        id: 39,
        description: "8 tâches, ordre relatif (>, >>, >>>).",
        constraints: [
            {
                type: 'TARGET_CARD',
                args: {
                    count: 8
                }
            },
            {
                type: 'ORDER_RELATIVE',
                args: {
                    count: 3
                }
            }
        ]
    },
    {
        id: 40,
        description: "8 tâches, dont les tâches 1, 2 et 3 dans l'ordre strict.",
        constraints: [
            {
                type: 'TARGET_CARD',
                args: {
                    count: 8
                }
            },
            {
                type: 'ORDER_ABSOLUTE',
                args: {
                    count: 3
                }
            }
        ]
    },
    {
        id: 41,
        description: "Accomplissez 8 tâches.",
        constraints: [
            {
                type: 'TARGET_CARD',
                args: {
                    count: 8
                }
            }
        ]
    },
    {
        id: 42,
        description: "Accomplissez 9 tâches.",
        constraints: [
            {
                type: 'TARGET_CARD',
                args: {
                    count: 9
                }
            }
        ]
    },
    {
        id: 43,
        description: "Accomplissez 9 tâches.",
        constraints: [
            {
                type: 'TARGET_CARD',
                args: {
                    count: 9
                }
            }
        ]
    },
    {
        id: 44,
        description: "Accomplissez 9 tâches.",
        constraints: [
            {
                type: 'TARGET_CARD',
                args: {
                    count: 9
                }
            }
        ]
    },
    {
        id: 45,
        description: "9 tâches, ordre relatif (>, >>, >>>).",
        constraints: [
            {
                type: 'TARGET_CARD',
                args: {
                    count: 9
                }
            },
            {
                type: 'ORDER_RELATIVE',
                args: {
                    count: 3
                }
            }
        ]
    },
    {
        id: 46,
        description: "Accomplissez 9 tâches.",
        constraints: [
            {
                type: 'TARGET_CARD',
                args: {
                    count: 9
                }
            }
        ]
    },
    {
        id: 47,
        description: "Accomplissez 10 tâches.",
        constraints: [
            {
                type: 'TARGET_CARD',
                args: {
                    count: 10
                }
            }
        ]
    },
    {
        id: 48,
        description: "9 tâches, dont une doit être faite en dernier (Omega).",
        constraints: [
            {
                type: 'TARGET_CARD',
                args: {
                    count: 9
                }
            },
            {
                type: 'ORDER_OMEGA',
                args: {
                    count: 1
                }
            }
        ]
    },
    {
        id: 49,
        description: "10 tâches, ordre relatif (>, >>, >>>).",
        constraints: [
            {
                type: 'TARGET_CARD',
                args: {
                    count: 10
                }
            },
            {
                type: 'ORDER_RELATIVE',
                args: {
                    count: 3
                }
            }
        ]
    },
    {
        id: 50,
        description: "Accomplissez 10 tâches.",
        constraints: [
            {
                type: 'TARGET_CARD',
                args: {
                    count: 10
                }
            }
        ]
    }
];
}),
"[project]/frontend/utils/solver.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// frontend/utils/theCrewSolver.ts
// --- TYPES & INTERFACES ---
__turbopack_context__.s([
    "TheCrewSolverJS",
    ()=>TheCrewSolverJS
]);
// --- LOGIQUE DU JEU (RÈGLES) ---
class GameRules {
    static isMoveValid(hand, card, leadCard) {
        if (!leadCard) return true; // Premier joueur du pli : tout est valide
        if (card.color === leadCard.color) return true; // On joue la couleur demandée
        // Si on ne joue pas la couleur, on doit vérifier qu'on ne l'a pas en main
        const hasLeadColor = hand.some((c)=>c.color === leadCard.color);
        return !hasLeadColor; // Valide seulement si on n'a pas la couleur
    }
    static getTrickWinner(cards, starter) {
        // cards est un tableau de 4 Cartes, indexé par le joueur [J0, J1, J2, J3]
        // Les cartes non jouées doivent être gérées, mais ici on appelle à la fin du pli.
        let bestPlayer = starter;
        let bestCard = cards[starter];
        const leadColor = bestCard.color;
        // On parcourt les 3 autres cartes dans l'ordre de jeu
        for(let i = 1; i < 4; i++){
            const pIdx = (starter + i) % 4;
            const currentCard = cards[pIdx];
            const isBestRocket = bestCard.color === 'Rocket';
            const isCurrentRocket = currentCard.color === 'Rocket';
            if (isCurrentRocket) {
                if (!isBestRocket) {
                    // La fusée coupe
                    bestCard = currentCard;
                    bestPlayer = pIdx;
                } else {
                    // Bataille de fusées
                    if (currentCard.value > bestCard.value) {
                        bestCard = currentCard;
                        bestPlayer = pIdx;
                    }
                }
            } else if (!isBestRocket && currentCard.color === leadColor) {
                // Bataille de couleur demandée
                if (currentCard.value > bestCard.value) {
                    bestCard = currentCard;
                    bestPlayer = pIdx;
                }
            }
        }
        return bestPlayer;
    }
}
class TheCrewSolverJS {
    originalHands;
    missions;
    // Stats
    iterations = 0;
    startTime = 0;
    solution = [];
    memo = new Map();
    // Lookup & Contraintes
    targetMap = {};
    bannedPlayers = new Set();
    trickCounts = {};
    trickSpecificWinner = {};
    forbiddenWins = [];
    balanceConstraint = null;
    minWinValueConstraints = [];
    sequenceConstraint = null;
    constructor(gameStateJson, missions, constraints = []){
        // 1. Conversion des mains
        this.originalHands = [
            gameStateJson.player_1.map((c)=>({
                    color: c.color,
                    value: Number(c.value)
                })),
            gameStateJson.player_2.map((c)=>({
                    color: c.color,
                    value: Number(c.value)
                })),
            gameStateJson.player_3.map((c)=>({
                    color: c.color,
                    value: Number(c.value)
                })),
            gameStateJson.player_4.map((c)=>({
                    color: c.color,
                    value: Number(c.value)
                }))
        ];
        this.missions = missions;
        // 2. Map des missions
        this.missions.forEach((m, idx)=>{
            const key = `${m.card.color}-${m.card.value}`;
            this.targetMap[key] = {
                owner: m.owner,
                idx
            };
        });
        // 3. Parse Contraintes
        constraints.forEach((c)=>{
            const type = c.type;
            const args = c.args || {};
            const player = c.player ?? args.who;
            const count = c.count ?? args.count;
            if (type === 'NO_TRICKS' && player !== undefined) this.bannedPlayers.add(player);
            else if (type === 'TRICK_COUNT' && player !== undefined && count !== undefined) this.trickCounts[player] = count;
            else if (type === 'TRICK_COUNT' && args.trick) this.trickSpecificWinner[args.trick] = args.who_idx ?? player;
            else if (type === 'FORBIDDEN_WIN_CARD') this.forbiddenWins.push(args);
            else if (type === 'BALANCE') this.balanceConstraint = args.maxDiff ?? 2;
            else if (type === 'SPECIFIC_WIN' && args.withCardValue) this.minWinValueConstraints.push(args);
            else if (type === 'TRICK_SEQUENCE') this.sequenceConstraint = args.sequence || [];
        });
    }
    solve() {
        this.startTime = performance.now();
        this.iterations = 0;
        this.solution = [];
        this.memo.clear();
        const startPlayer = this.findCommander();
        // États initiaux
        const initialMissionTicks = new Array(this.missions.length).fill(0);
        const initialWinnersCount = [
            0,
            0,
            0,
            0
        ];
        const found = this.dfs(this.originalHands, [], startPlayer, startPlayer, [], initialMissionTicks, 1, initialWinnersCount, 0, 0 // specificWinCount
        );
        return {
            iterations: this.iterations,
            solutionFound: found,
            time: Math.floor(performance.now() - this.startTime),
            solution_steps: this.solution
        };
    }
    findCommander() {
        for(let i = 0; i < 4; i++){
            if (this.originalHands[i].some((c)=>c.color === 'Rocket' && c.value === 4)) return i;
        }
        return 0;
    }
    getStateKey(hands, missionTicks, trickStarter, currentTrick, winnersCount, seqIdx, specCount) {
        // Optimisation : On génère une clé string unique pour l'état
        // Signature des mains (triées)
        const handsSig = hands.map((h)=>h.map((c)=>c.color[0] + c.value).sort().join(',')).join('|');
        const trickSig = currentTrick.map((t)=>`${t.p}:${t.c.color[0]}${t.c.value}`).join(';');
        return `${handsSig}#${missionTicks.join(',')}#${trickStarter}#${trickSig}#${winnersCount.join(',')}#${seqIdx}#${specCount}`;
    }
    optimizeValidCards(validCards, currentTrick) {
        if (validCards.length <= 2) return validCards;
        const optimized = [];
        const bySuit = {};
        validCards.forEach((c)=>{
            if (!bySuit[c.color]) bySuit[c.color] = [];
            bySuit[c.color].push(c);
        });
        const leadColor = currentTrick.length > 0 ? currentTrick[0].c.color : null;
        for(const color in bySuit){
            const cards = bySuit[color];
            // 1. Fusées -> On garde tout
            if (color === 'Rocket') {
                optimized.push(...cards);
                continue;
            }
            // 2. Couleur demandée -> On garde tout (bataille précise)
            if (leadColor && color === leadColor) {
                optimized.push(...cards);
                continue;
            }
            // 3. Défausse (Couleurs inutiles pour le pli)
            const missionCards = [];
            const garbageCards = [];
            cards.forEach((c)=>{
                if (this.targetMap[`${c.color}-${c.value}`]) missionCards.push(c);
                else garbageCards.push(c);
            });
            // On garde les cartes de mission
            optimized.push(...missionCards);
            // Pour les déchets, on ne garde que la Min et la Max
            if (garbageCards.length > 0) {
                garbageCards.sort((a, b)=>a.value - b.value);
                optimized.push(garbageCards[0]);
                if (garbageCards.length > 1) {
                    optimized.push(garbageCards[garbageCards.length - 1]);
                }
            }
        }
        return optimized;
    }
    checkMissionTokens(missionTicks) {
        // Groupement par token
        const tokenTicks = {};
        this.missions.forEach((m, i)=>{
            const token = m.token || 'None';
            const tick = missionTicks[i];
            if (!tokenTicks[token]) tokenTicks[token] = [];
            tokenTicks[token].push(tick);
        });
        // 1, 2, 3, 4, 5
        const checkOrder = [
            '1',
            '2',
            '3',
            '4',
            '5'
        ];
        for(let k = 0; k < checkOrder.length - 1; k++){
            const tCurr = checkOrder[k];
            const tNext = checkOrder[k + 1];
            if (tokenTicks[tCurr] && tokenTicks[tNext]) {
                const tickC = Math.max(...tokenTicks[tCurr]);
                const tickN = Math.max(...tokenTicks[tNext]);
                // Si la tache 1 est faite après la 2, ou si la 2 est faite avant la 1
                if (tickC > 0 && tickN > 0 && tickC > tickN) return false;
                if (tickN > 0 && tickC === 0) return false;
            }
        }
        // >, >>, >>>, >>>>
        const arrowOrder = [
            '>',
            '>>',
            '>>>',
            '>>>>'
        ];
        for(let k = 0; k < arrowOrder.length - 1; k++){
            const tCurr = arrowOrder[k];
            const tNext = arrowOrder[k + 1];
            if (tokenTicks[tCurr] && tokenTicks[tNext]) {
                const tickC = Math.max(...tokenTicks[tCurr]);
                const tickN = Math.max(...tokenTicks[tNext]);
                if (tickC > 0 && tickN > 0 && tickC > tickN) return false;
                if (tickN > 0 && tickC === 0) return false;
            }
        }
        return true;
    }
    dfs(hands, currentTrick, trickStarter, currentPlayer, history, missionTicks, trickNumber, winnersCount, seqIndex, specCount) {
        this.iterations++;
        // Limite de sécurité (Performance)
        if (this.iterations > 2500000) return false;
        // Sécurité temps (2.5 secondes max pour ne pas freeze l'UI)
        if (this.iterations % 5000 === 0 && performance.now() - this.startTime > 3000) return false;
        // Memoization pour les débuts de pli uniquement
        let stateKey = "";
        if (currentTrick.length === 0) {
            stateKey = this.getStateKey(hands, missionTicks, trickStarter, currentTrick, winnersCount, seqIndex, specCount);
            if (this.memo.has(stateKey)) return false;
        }
        // --- VICTOIRE (Mains vides) ---
        if (hands.every((h)=>h.length === 0)) {
            // Toutes les missions accomplies ?
            if (!missionTicks.every((t)=>t > 0)) return false;
            if (!this.checkMissionTokens(missionTicks)) return false;
            // Omega
            const omegaIdx = this.missions.findIndex((m)=>m.token === 'Omega');
            if (omegaIdx !== -1) {
                const omegaTick = missionTicks[omegaIdx];
                const maxOther = Math.max(...missionTicks.filter((_, i)=>i !== omegaIdx));
                if (omegaTick < maxOther) return false;
            }
            // Constraints check
            if (this.balanceConstraint !== null) {
                const min = Math.min(...winnersCount);
                const max = Math.max(...winnersCount);
                if (max - min > this.balanceConstraint) return false;
            }
            // Min Count Specific Win
            for (const c of this.minWinValueConstraints){
                if (specCount < (c.minCount || 1)) return false;
            }
            // Trick Counts
            for(const p in this.trickCounts){
                if (winnersCount[parseInt(p)] !== this.trickCounts[p]) return false;
            }
            this.solution = history;
            return true;
        }
        // --- JEU ---
        const myHand = hands[currentPlayer];
        const leadCard = currentTrick.length > 0 ? currentTrick[0].c : null;
        let validCards = myHand.filter((c)=>GameRules.isMoveValid(myHand, c, leadCard));
        // --- PRUNING JOUEUR 3 (Le dernier à jouer) ---
        // Ici on simule la fin du pli pour voir si c'est un échec critique immédiat
        if (currentTrick.length === 3) {
            const optimizedTrickCards = [];
            for (const card of validCards){
                // Simulation virtuelle
                const tempTrick = [
                    ...currentTrick,
                    {
                        p: currentPlayer,
                        c: card
                    }
                ];
                // Reconstruire le tableau de cartes pour getTrickWinner
                const cardsObj = new Array(4);
                tempTrick.forEach((t)=>cardsObj[t.p] = t.c);
                const winner = GameRules.getTrickWinner(cardsObj, trickStarter);
                const wCard = cardsObj[winner];
                // Check "Hard" Constraints
                if (this.bannedPlayers.has(winner)) continue;
                if (this.trickCounts[winner] !== undefined && winnersCount[winner] + 1 > this.trickCounts[winner]) continue;
                if (this.trickSpecificWinner[trickNumber] !== undefined && winner !== this.trickSpecificWinner[trickNumber]) continue;
                // Forbidden Win Card
                let isForbidden = false;
                for (const f of this.forbiddenWins){
                    if (f.value && wCard.value === f.value) isForbidden = true;
                    if (f.color && wCard.color === f.color) isForbidden = true;
                }
                if (isForbidden) continue;
                // Sequence Constraint
                if (this.sequenceConstraint && wCard.color === 'Rocket') {
                    // ex: "Rocket1" -> 1
                    const expectedVal = parseInt(this.sequenceConstraint[seqIndex].replace(/\D/g, ''));
                    if (wCard.value !== expectedVal) continue;
                }
                // Check Mission Ownership (Le gagnant DOIT être le propriétaire si une carte mission est jouée)
                let missionFail = false;
                for (const played of tempTrick){
                    const key = `${played.c.color}-${played.c.value}`;
                    if (this.targetMap[key]) {
                        const target = this.targetMap[key];
                        if (winner !== target.owner) {
                            missionFail = true;
                            break;
                        }
                    }
                }
                if (missionFail) continue;
                optimizedTrickCards.push(card);
            }
            validCards = optimizedTrickCards;
            // Si aucune carte valide ne marche, c'est une impasse
            if (validCards.length === 0) {
                ``;
                return false;
            }
        }
        // --- OPTIMISATION GENERALE ---
        if (currentTrick.length < 3) {
            validCards = this.optimizeValidCards(validCards, currentTrick);
        }
        // Tri (Heuristique : Fort -> Faible, Atout en premier)
        validCards.sort((a, b)=>{
            if (a.color === 'Rocket' && b.color !== 'Rocket') return -1;
            if (b.color === 'Rocket' && a.color !== 'Rocket') return 1;
            return b.value - a.value;
        });
        // --- BOUCLE DE RECURSION ---
        for (const card of validCards){
            // Clonage main
            const newHands = hands.map((h, i)=>i === currentPlayer ? h.filter((c)=>c !== card) : h); // filter by ref marche car objets uniques
            // Info coup
            const moveInfo = {
                player: currentPlayer,
                card: {
                    color: card.color,
                    value: card.value
                }
            };
            const newTrick = [
                ...currentTrick,
                {
                    p: currentPlayer,
                    c: card
                }
            ];
            if (newTrick.length === 4) {
                // --- FIN DE PLI ---
                const cardsObj = new Array(4);
                newTrick.forEach((t)=>cardsObj[t.p] = t.c);
                const winner = GameRules.getTrickWinner(cardsObj, trickStarter);
                const wCard = cardsObj[winner];
                // Update Stats
                const newWinnersCount = [
                    ...winnersCount
                ];
                newWinnersCount[winner]++;
                let newSpecCount = specCount;
                this.minWinValueConstraints.forEach((c)=>{
                    if (wCard.value === c.withCardValue) newSpecCount++;
                });
                let newSeqIndex = seqIndex;
                if (this.sequenceConstraint && wCard.color === 'Rocket') {
                    const expected = parseInt(this.sequenceConstraint[seqIndex].replace(/\D/g, ''));
                    if (wCard.value === expected) newSeqIndex++;
                }
                // Update Missions Ticks
                const newMissionTicks = [
                    ...missionTicks
                ];
                for (const played of newTrick){
                    const key = `${played.c.color}-${played.c.value}`;
                    if (this.targetMap[key]) {
                        const target = this.targetMap[key];
                        // On marque le pli si pas encore marqué
                        if (newMissionTicks[target.idx] === 0) {
                            newMissionTicks[target.idx] = trickNumber;
                        }
                    }
                }
                // Pruning Tokens immédiat
                if (!this.checkMissionTokens(newMissionTicks)) continue;
                if (this.dfs(newHands, [], winner, winner, [
                    ...history,
                    moveInfo
                ], newMissionTicks, trickNumber + 1, newWinnersCount, newSeqIndex, newSpecCount)) return true;
            } else {
                // --- CONTINUER LE PLI ---
                if (this.dfs(newHands, newTrick, trickStarter, (currentPlayer + 1) % 4, [
                    ...history,
                    moveInfo
                ], missionTicks, trickNumber, winnersCount, seqIndex, specCount)) return true;
            }
        }
        // Si on a tout essayé sans succès
        if (currentTrick.length === 0) {
            this.memo.set(stateKey, false);
        }
        return false;
    }
}
}),
"[project]/frontend/hooks/useGodMode.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useGodMode",
    ()=>useGodMode
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$data$2f$real_missions$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/data/real_missions.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$utils$2f$solver$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/utils/solver.ts [app-ssr] (ecmascript)");
;
;
;
const ANIMATION_SPEED = 600;
const TRICK_WAIT = 1000;
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';
const distributeLocalCards = ()=>{
    const colors = [
        'Blue',
        'Green',
        'Pink',
        'Yellow'
    ];
    const deck = [];
    colors.forEach((c)=>{
        for(let i = 1; i <= 9; i++)deck.push({
            color: c,
            value: i
        });
    });
    for(let i = 1; i <= 4; i++)deck.push({
        color: 'Rocket',
        value: i
    });
    for(let i = deck.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [
            deck[j],
            deck[i]
        ];
    }
    return deck.map((c, index)=>({
            id: `${c.color}-${c.value}`,
            color: c.color,
            value: c.value,
            owner: Math.floor(index / 10),
            status: 'HAND',
            zIndex: 0,
            tableRotation: (c.value * 100 + Math.floor(index / 10) * 50 + c.color.length) % 40 - 20,
            winnerIndex: undefined
        }));
};
const convertBackendToFrontend = (d)=>{
    if (d.players && Array.isArray(d.players)) {
        return d.players.flatMap((hand, pIdx)=>hand.map((c)=>({
                    id: `${c.color}-${c.value}`,
                    color: c.color,
                    value: c.value,
                    owner: pIdx,
                    status: 'HAND',
                    zIndex: 0,
                    tableRotation: (c.value * 100 + pIdx * 50 + c.color.length) % 40 - 20,
                    winnerIndex: undefined
                })));
    }
    return [];
};
const useGodMode = ()=>{
    const [allCards, setAllCards] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [stats, setStats] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [currentMoveIndex, setCMI] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isPlaying, setIsPlaying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isThinking, setIsThinking] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [logs, setLogs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [missions, setMissions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [bookMissionId, setBookMissionId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isAutoFinding, setIsAutoFinding] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [editingPlayer, setEditingPlayer] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [globalConstraints, setGlobalConstraints] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [communications, setCommunications] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const timerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const abortCtrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const addLog = (m)=>setLogs((p)=>[
                `> ${m}`,
                ...p
            ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!isPlaying || !stats || !stats.solution_steps) return;
        const playNext = ()=>{
            if (currentMoveIndex >= stats.solution_steps.length) return setIsPlaying(false);
            const isTrickEnd = (currentMoveIndex + 1) % 4 === 0;
            const next = currentMoveIndex % 1 !== 0 ? Math.floor(currentMoveIndex) + 1 : isTrickEnd ? currentMoveIndex + 0.5 : currentMoveIndex + 1;
            goToStep(next);
            timerRef.current = setTimeout(playNext, isTrickEnd && currentMoveIndex % 1 === 0 ? TRICK_WAIT : ANIMATION_SPEED);
        };
        timerRef.current = setTimeout(playNext, ANIMATION_SPEED);
        return ()=>{
            if (timerRef.current) clearTimeout(timerRef.current);
        };
    }, [
        isPlaying,
        currentMoveIndex,
        stats
    ]);
    const getTrickWinner = (moves)=>{
        if (!moves || moves.length === 0) return 0;
        let best = moves[0];
        const lead = best.card.color;
        for(let i = 1; i < moves.length; i++){
            const curr = moves[i], isR = curr.card.color === 'Rocket', bestR = best.card.color === 'Rocket';
            if (isR && (!bestR || curr.card.value > best.card.value) || !isR && curr.card.color === lead && !bestR && curr.card.value > best.card.value) best = curr;
        }
        return best.player;
    };
    const checkMissionStatus = (currentCards)=>{
        setMissions((prevMissions)=>{
            let hasChanged = false;
            const newMissions = prevMissions.map((m)=>{
                if (m.cardValue === 0 || m.cardColor === 'Special') return m;
                const targetCard = currentCards.find((c)=>c.color === m.cardColor && c.value === m.cardValue);
                if (!targetCard || targetCard.status !== 'WON') {
                    if (m.status !== 'PENDING') {
                        hasChanged = true;
                        return {
                            ...m,
                            status: 'PENDING'
                        };
                    }
                    return m;
                }
                const isWin = targetCard.winnerIndex === m.ownerIndex;
                const newStatus = isWin ? 'SUCCESS' : 'FAILED';
                if (m.status !== newStatus) {
                    hasChanged = true;
                    return {
                        ...m,
                        status: newStatus
                    };
                }
                return m;
            });
            return hasChanged ? newMissions : prevMissions;
        });
    };
    const goToStep = (target)=>{
        if (!stats || !stats.solution_steps) return;
        target = Math.max(0, Math.min(target, stats.solution_steps.length));
        const floor = Math.floor(target);
        const nc = allCards.map((c)=>({
                ...c,
                status: 'HAND',
                zIndex: 0,
                winnerIndex: undefined
            }));
        for(let i = 0; i <= floor; i++){
            if (i >= stats.solution_steps.length) break;
            const m = stats.solution_steps[i];
            const idx = nc.findIndex((c)=>c.id === `${m.card.color}-${m.card.value}`);
            if (idx !== -1) {
                nc[idx].status = 'TABLE';
                nc[idx].zIndex = 100 + i % 4;
            }
            if ((i + 1) % 4 === 0) {
                if (i !== floor || i === floor && target % 1 !== 0) {
                    const tMoves = stats.solution_steps.slice(i - 3, i + 1);
                    const win = getTrickWinner(tMoves);
                    tMoves.forEach((tm)=>{
                        const cIdx = nc.findIndex((c)=>c.id === `${tm.card.color}-${tm.card.value}`);
                        if (cIdx !== -1) {
                            nc[cIdx].status = 'WON';
                            nc[cIdx].winnerIndex = win;
                        }
                    });
                }
            }
        }
        setAllCards(nc);
        setCMI(target);
        checkMissionStatus(nc);
    };
    const startNewGame = async ()=>{
        abortCtrl.current?.abort();
        abortCtrl.current = null;
        if (timerRef.current) clearTimeout(timerRef.current);
        setIsPlaying(false);
        setStats(null);
        setMissions([]);
        setGlobalConstraints([]);
        setCommunications([]);
        setBookMissionId(0);
        setCMI(-1);
        setIsThinking(false);
        try {
            const cards = distributeLocalCards();
            setAllCards(cards);
            addLog("Nouvelle donne (Générée localement).");
        } catch (e) {
            addLog(`Erreur: ${e.message}`);
        }
    };
    const generateMissionSetup = (mid, cards)=>{
        const mDef = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$data$2f$real_missions$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["REAL_MISSION_LOGBOOK"].find((m)=>m.id === mid);
        if (!mDef) return null;
        const cmdIdx = cards.find((c)=>c.color === 'Rocket' && c.value === 4)?.owner ?? 0;
        const p9Idx = cards.find((c)=>c.color === 'Pink' && c.value === 9)?.owner ?? -1;
        const resolve = (w)=>{
            if (w === 'COMMANDER' || w === 'PLAYER_A') return cmdIdx;
            if ([
                'NOT_COMMANDER',
                'COMMANDER_LEFT',
                'RANDOM_NOT_COMMANDER',
                'VOLUNTEER_NOT_COMMANDER',
                'PLAYER_B'
            ].includes(w)) return (cmdIdx + 1) % 4;
            if (w === 'COMMANDER_RIGHT') return (cmdIdx + 3) % 4;
            if (w === 'COMMANDER_OPPOSITE') return (cmdIdx + 2) % 4;
            if (w === 'LEFT_OF_PINK_9' && p9Idx !== -1) return (p9Idx + 1) % 4;
            if (w === 'SAME_PLAYER') return (cmdIdx + 1) % 4;
            return 0;
        };
        const nMissions = [];
        const nConstrs = [];
        const valid = cards.filter((c)=>c.color !== 'Rocket').sort(()=>Math.random() - 0.5);
        let tIdx = 0;
        let tDistrib = [];
        let dMode = 'DEFAULT', dTarget = -1;
        mDef.constraints.forEach((c)=>{
            if (c.type === 'DISTRIBUTION') {
                dMode = c.args.mode || 'DEFAULT';
                if ([
                    'ALL_TO_ONE_NOT_COMMANDER',
                    'ALL_TO_ONE_RANDOM'
                ].includes(dMode)) dTarget = (cmdIdx + 1) % 4;
            }
            if (c.type === 'TARGET_CARD') for(let i = 0; i < (c.args.count || 1); i++)tDistrib.push({
                token: 'None'
            });
        });
        let absCount = 0;
        mDef.constraints.forEach((c)=>{
            if (c.type === 'ORDER_ABSOLUTE') {
                for(let i = 0; i < c.args.count; i++)if (tDistrib[i]) tDistrib[i].token = (i + 1).toString();
                absCount = c.args.count;
            }
            if (c.type === 'ORDER_RELATIVE') {
                const toks = [
                    '>',
                    '>>',
                    '>>>',
                    '>>>>',
                    '>>>>>'
                ];
                const start = c.args.startIndex ?? absCount;
                for(let i = 0; i < c.args.count; i++)if (tDistrib[start + i]) tDistrib[start + i].token = toks[i];
            }
            if (c.type === 'ORDER_OMEGA' && tDistrib.length) tDistrib[tDistrib.length - 1].token = 'Omega';
        });
        tDistrib.forEach((t, i)=>{
            if (tIdx >= valid.length) return;
            let own = dMode === 'DEFAULT' || dMode === 'COMMANDER_DECIDES' ? (cmdIdx + i) % 4 : dTarget !== -1 ? dTarget : 0;
            if (t.token === '1' && mDef.constraints.some((c)=>c.type === 'DISTRIBUTION' && c.args.taskOneTo === 'NOT_COMMANDER')) {
                if (own === cmdIdx) own = (cmdIdx + 1) % 4;
            }
            nMissions.push({
                cardColor: valid[tIdx].color,
                cardValue: valid[tIdx].value,
                ownerIndex: own,
                token: t.token
            });
            tIdx++;
        });
        mDef.constraints.forEach((c)=>{
            const p = c.args.who ? resolve(c.args.who) : undefined;
            if (c.type === 'NO_TRICKS') nConstrs.push({
                type: 'NO_TRICKS',
                player: p
            });
            else if (c.type === 'TRICK_COUNT') {
                if (c.args.tricks && c.args.who !== 'OTHERS') c.args.tricks.forEach((t)=>nConstrs.push({
                        type: 'TRICK_COUNT',
                        player: p,
                        args: {
                            trick: t,
                            who_idx: p
                        }
                    }));
                else if (!c.args.tricks) nConstrs.push({
                    type: 'TRICK_COUNT',
                    player: p,
                    count: c.args.count
                });
            } else if ([
                'FORBIDDEN_WIN_CARD',
                'BALANCE',
                'TRICK_SEQUENCE'
            ].includes(c.type)) nConstrs.push({
                type: c.type,
                args: c.args
            });
            else if (c.type === 'SPECIFIC_WIN') nConstrs.push(c.args.trick ? {
                type: 'TRICK_COUNT',
                player: p,
                args: {
                    trick: c.args.trick,
                    who_idx: p
                }
            } : {
                type: 'SPECIFIC_WIN',
                args: c.args
            });
            let specialToken = null;
            let specialOwner = p ?? cmdIdx;
            if (c.type === 'NO_TRICKS') specialToken = c.args.who === 'RANDOM_NOT_COMMANDER' ? 'NO_TRICKS_PLAYER' : 'NO_TRICKS';
            else if (c.type === 'FORBIDDEN_WIN_CARD' && c.args.value === 9) specialToken = 'NO_9_WIN';
            else if (c.type === 'SPECIFIC_WIN' && c.args.withColor === 'Rocket' && c.args.mustWinAll) specialToken = 'ALL_ROCKETS';
            else if (c.type === 'SPECIFIC_WIN' && c.args.withCardValue === 1) specialToken = 'SPECIFIC_WIN_1';
            if (specialToken) nMissions.push({
                cardColor: 'Special',
                cardValue: 0,
                ownerIndex: specialOwner,
                token: specialToken,
                status: 'PENDING'
            });
        });
        return {
            missions: nMissions,
            constraints: nConstrs
        };
    };
    const loadMissionFromBook = (id)=>{
        setBookMissionId(id);
        const setup = allCards.length ? generateMissionSetup(id, allCards) : null;
        if (setup) {
            setMissions(setup.missions);
            setGlobalConstraints(setup.constraints);
            addLog(`Mission ${id} chargée.`);
        } else {
            addLog("⚠️ Distribuez les cartes d'abord !");
        }
    };
    const runLocalSolver = ()=>{
        const playersHands = [
            [],
            [],
            [],
            []
        ];
        allCards.forEach((c)=>{
            // @ts-ignore
            playersHands[c.owner].push({
                color: c.color,
                value: c.value
            });
        });
        const gameStateJson = {
            player_1: playersHands[0],
            player_2: playersHands[1],
            player_3: playersHands[2],
            player_4: playersHands[3]
        };
        const solverMissions = missions.map((m)=>({
                card: {
                    color: m.cardColor,
                    value: m.cardValue
                },
                owner: m.ownerIndex,
                token: m.token
            }));
        // @ts-ignore
        const solver = new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$utils$2f$solver$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TheCrewSolverJS"](gameStateJson, solverMissions, globalConstraints);
        const result = solver.solve();
        return result;
    };
    const autoFindSolution = async ()=>{
        if (missions.length === 0) return addLog("⚠️ Ajoutez des missions d'abord.");
        const fixedMissions = missions.map((m)=>({
                card: {
                    color: m.cardColor,
                    value: m.cardValue
                },
                owner: m.ownerIndex,
                token: m.token
            }));
        const fixedConstraints = [
            ...globalConstraints
        ];
        abortCtrl.current?.abort();
        const ctrl = new AbortController();
        abortCtrl.current = ctrl;
        setIsAutoFinding(true);
        addLog("⚡ Recherche 100% Locale (CPU)...");
        let attempts = 0;
        let found = false;
        const startTime = performance.now();
        try {
            while(!found && attempts < 10000){
                if (ctrl.signal.aborted) break;
                attempts++;
                const tempAllCards = distributeLocalCards();
                const playersHands = [
                    [],
                    [],
                    [],
                    []
                ];
                tempAllCards.forEach((c)=>{
                    playersHands[c.owner].push({
                        color: c.color,
                        value: c.value
                    });
                });
                const gameStateJson = {
                    player_1: playersHands[0],
                    player_2: playersHands[1],
                    player_3: playersHands[2],
                    player_4: playersHands[3]
                };
                // @ts-ignore
                const solver = new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$utils$2f$solver$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TheCrewSolverJS"](gameStateJson, fixedMissions, fixedConstraints);
                const result = solver.solve();
                if (result.solutionFound) {
                    found = true;
                    setAllCards(tempAllCards);
                    setGlobalConstraints(fixedConstraints);
                    setStats(result);
                    setCMI(-1);
                    const totalTime = (performance.now() - startTime).toFixed(0);
                    addLog(`✅ TROUVÉ ! (Essai n°${attempts} en ${totalTime}ms)`);
                }
                if (attempts % 100 === 0) await new Promise((r)=>setTimeout(r, 0));
            }
            if (!found) addLog(`❌ Rien trouvé après ${attempts} essais.`);
        } catch (e) {
            if (e.name !== 'AbortError') console.error(e);
        } finally{
            setIsAutoFinding(false);
            abortCtrl.current = null;
        }
    };
    const launchSolver = async ()=>{
        if (allCards.length !== 40) {
            addLog("⚠️ Distribution incomplète");
            return;
        }
        setIsThinking(true);
        setStats(null);
        goToStep(-1);
        setTimeout(()=>{
            try {
                const playersHands = [
                    [],
                    [],
                    [],
                    []
                ];
                allCards.forEach((c)=>{
                    // @ts-ignore
                    if (c.status === 'HAND' || c.status === 'COMMUNICATED') {
                        playersHands[c.owner].push({
                            color: c.color,
                            value: c.value
                        });
                    }
                });
                const gameStateJson = {
                    player_1: playersHands[0],
                    player_2: playersHands[1],
                    player_3: playersHands[2],
                    player_4: playersHands[3]
                };
                const solverMissions = missions.map((m)=>({
                        card: {
                            color: m.cardColor,
                            value: m.cardValue
                        },
                        owner: m.ownerIndex,
                        token: m.token
                    }));
                // @ts-ignore
                const solver = new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$utils$2f$solver$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TheCrewSolverJS"](gameStateJson, solverMissions, globalConstraints);
                const result = solver.solve();
                setStats(result);
                addLog(result.solutionFound ? `✅ Solution trouvée (${result.time}ms)` : "❌ Aucune solution.");
                if (result.solutionFound) setCMI(-1);
            } catch (e) {
                addLog(`Erreur JS: ${e.message}`);
                console.error(e);
            } finally{
                setIsThinking(false);
            }
        }, 50);
    };
    const shuffleOwners = ()=>setMissions((p)=>p.map((m)=>({
                    ...m,
                    ownerIndex: Math.floor(Math.random() * 4)
                })));
    const shuffleCards = ()=>{
        const s = allCards.filter((c)=>c.color !== 'Rocket').sort(()=>Math.random() - 0.5);
        setMissions((p)=>p.map((m, i)=>s[i] ? {
                    ...m,
                    cardColor: s[i].color,
                    cardValue: s[i].value
                } : m));
    };
    const toggleCard = (col, val)=>{
        if (editingPlayer === null) return;
        setAllCards((p)=>{
            const id = `${col}-${val}`, idx = p.findIndex((c)=>c.id === id);
            if (idx !== -1 && p[idx].owner === editingPlayer) return p.filter((c)=>c.id !== id);
            const nc = [
                ...p
            ], c = {
                id,
                color: col,
                value: val,
                owner: editingPlayer,
                status: 'HAND',
                zIndex: 0,
                tableRotation: Math.random() * 40 - 20,
                winnerIndex: undefined
            };
            if (idx !== -1) nc[idx] = c;
            else nc.push(c);
            return nc;
        });
    };
    const addCommunication = (c)=>setCommunications((prev)=>[
                ...prev,
                c
            ]);
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
        handleNext: ()=>{
            if (!stats || !stats.solution_steps) return;
            const isTrickEnd = (currentMoveIndex + 1) % 4 === 0;
            let next = currentMoveIndex + 1;
            if (isTrickEnd && Number.isInteger(currentMoveIndex)) next = currentMoveIndex + 0.5;
            else if (currentMoveIndex % 1 !== 0) next = Math.floor(currentMoveIndex) + 1;
            setIsPlaying(false);
            goToStep(next);
        },
        handlePrev: ()=>{
            setIsPlaying(false);
            const prev = currentMoveIndex % 1 !== 0 ? Math.floor(currentMoveIndex) : currentMoveIndex - 1;
            goToStep(prev);
        },
        togglePlay: ()=>setIsPlaying((p)=>!p),
        editingPlayer,
        openEditor: (i)=>{
            setIsPlaying(false);
            setEditingPlayer(i);
        },
        closeEditor: ()=>setEditingPlayer(null),
        toggleCard,
        globalConstraints,
        clearAllHands: ()=>setAllCards([]),
        communications,
        addCommunication,
        setGlobalConstraints,
        clearStats: ()=>setStats(null)
    };
};
}),
"[project]/frontend/components/god/TrickHistory.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TrickHistory
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-2 mt-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-xs font-bold text-gray-400 uppercase border-b border-gray-700 pb-1 flex justify-between items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "📝 Détail de la solution"
                    }, void 0, false, {
                        fileName: "[project]/frontend/components/god/TrickHistory.tsx",
                        lineNumber: 33,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[9px] bg-gray-800 px-1 rounded text-gray-500",
                        children: [
                            tricks.length,
                            " Plis"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/components/god/TrickHistory.tsx",
                        lineNumber: 34,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/components/god/TrickHistory.tsx",
                lineNumber: 32,
                columnNumber: 13
            }, this),
            tricks.map((trick, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-black/30 p-2 rounded border border-white/5 text-[10px] hover:bg-black/40 transition-colors",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between mb-1 text-gray-400 font-mono border-b border-white/5 pb-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-bold text-gray-300",
                                    children: [
                                        "Pli #",
                                        i + 1
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/components/god/TrickHistory.tsx",
                                    lineNumber: 40,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: [
                                        "Entame: ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-gray-200",
                                            children: getPlayerName(trick[0].player)
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/components/god/TrickHistory.tsx",
                                            lineNumber: 41,
                                            columnNumber: 39
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/components/god/TrickHistory.tsx",
                                    lineNumber: 41,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/components/god/TrickHistory.tsx",
                            lineNumber: 39,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-4 gap-1",
                            children: trick.map((move, j)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col items-center group",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[8px] text-gray-500 mb-0.5 group-hover:text-gray-300 transition-colors",
                                            children: getPlayerName(move.player).substring(0, 1)
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/components/god/TrickHistory.tsx",
                                            lineNumber: 47,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `w-full text-center py-0.5 rounded border ${getColorClass(move.card.color)} font-bold text-[9px]`,
                                            children: move.card.value
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/components/god/TrickHistory.tsx",
                                            lineNumber: 50,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, j, true, {
                                    fileName: "[project]/frontend/components/god/TrickHistory.tsx",
                                    lineNumber: 46,
                                    columnNumber: 29
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/frontend/components/god/TrickHistory.tsx",
                            lineNumber: 44,
                            columnNumber: 21
                        }, this)
                    ]
                }, i, true, {
                    fileName: "[project]/frontend/components/god/TrickHistory.tsx",
                    lineNumber: 38,
                    columnNumber: 17
                }, this)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center pt-2",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-[9px] text-gray-600 italic",
                    children: "Fin de la partie"
                }, void 0, false, {
                    fileName: "[project]/frontend/components/god/TrickHistory.tsx",
                    lineNumber: 61,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/frontend/components/god/TrickHistory.tsx",
                lineNumber: 60,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/components/god/TrickHistory.tsx",
        lineNumber: 31,
        columnNumber: 9
    }, this);
}
}),
"[project]/frontend/components/god/Sidebar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Sidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$data$2f$real_missions$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/data/real_missions.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$god$2f$TrickHistory$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/components/god/TrickHistory.tsx [app-ssr] (ecmascript)");
;
;
;
;
// --- COMPOSANTS UTILITAIRES ---
const TokenBadge = ({ token })=>{
    if (token === 'None') return null;
    let styleClass = "";
    let content = token;
    if ([
        '1',
        '2',
        '3',
        '4',
        '5'
    ].includes(token)) styleClass = "bg-green-600 text-white rounded-full w-6 h-6";
    else if (token.includes('>')) styleClass = "bg-blue-600 text-white rounded w-6 h-6";
    else if (token === 'Omega') {
        styleClass = "bg-pink-600 text-white rounded-full w-6 h-6";
        content = "Ω";
    } else styleClass = "bg-gray-600 text-white px-2 py-0.5 rounded";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `${styleClass} flex items-center justify-center text-[10px] font-bold shadow-md border border-white/20 shrink-0`,
        children: content
    }, void 0, false, {
        fileName: "[project]/frontend/components/god/Sidebar.tsx",
        lineNumber: 46,
        columnNumber: 12
    }, ("TURBOPACK compile-time value", void 0));
};
const getBorderColor = (color)=>{
    switch(color){
        case 'Blue':
            return 'border-blue-500/50 bg-blue-900/10';
        case 'Green':
            return 'border-green-500/50 bg-green-900/10';
        case 'Pink':
            return 'border-pink-500/50 bg-pink-900/10';
        case 'Yellow':
            return 'border-yellow-500/50 bg-yellow-900/10';
        case 'Rocket':
            return 'border-gray-500/50 bg-gray-800/50';
        default:
            return 'border-gray-600';
    }
};
function Sidebar(props) {
    const { startNewGame, bookMissionId, loadMissionFromBook, missions, setMissions, shuffleOwners, shuffleCards, autoFindSolution, isAutoFinding, launchSolver, isThinking, stats, currentMoveIndex, isPlaying, togglePlay, handlePrev, handleNext, logs, allCards, globalConstraints, clearAllHands, communications, addCommunication, gameMode, clearStats, onBackToMenu// On récupère la prop
     } = props;
    const handleResetStats = ()=>{
        if (clearStats) clearStats();
    };
    const removeMission = (index)=>{
        setMissions((prev)=>prev.filter((_, i)=>i !== index));
        handleResetStats();
    };
    const [agentPlayer, setAgentPlayer] = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState(0);
    const handleLaunch = ()=>{
        launchSolver(gameMode, agentPlayer);
    };
    const totalSteps = stats?.solution_steps?.length || 0;
    const progressWidth = totalSteps > 0 ? (currentMoveIndex + 1) / totalSteps * 100 : 0;
    // Correction Typage : on force le boolean avec !!
    const hasFailed = !!stats && !stats.solutionFound && !isThinking;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-[30%] min-w-75 bg-gray-900 border-r border-gray-700 flex flex-col z-50 shadow-2xl h-full font-sans",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4 border-b border-gray-800 shrink-0 bg-gray-900 flex justify-between items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-xl font-black text-white tracking-tight leading-none",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: [
                                        "Novia ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-purple-400",
                                            children: "Solver"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/components/god/Sidebar.tsx",
                                            lineNumber: 97,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/components/god/Sidebar.tsx",
                                    lineNumber: 97,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/frontend/components/god/Sidebar.tsx",
                                lineNumber: 96,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-[9px] font-bold text-gray-500 tracking-widest mt-1",
                                children: "Deterministic Algorithm"
                            }, void 0, false, {
                                fileName: "[project]/frontend/components/god/Sidebar.tsx",
                                lineNumber: 99,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/components/god/Sidebar.tsx",
                        lineNumber: 95,
                        columnNumber: 17
                    }, this),
                    onBackToMenu && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onBackToMenu,
                        className: "text-[10px] bg-gray-800 hover:bg-gray-700 text-gray-400 hover:text-white px-2 py-1 rounded border border-gray-700 transition-colors uppercase font-bold",
                        children: "Menu ↩"
                    }, void 0, false, {
                        fileName: "[project]/frontend/components/god/Sidebar.tsx",
                        lineNumber: 105,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/components/god/Sidebar.tsx",
                lineNumber: 94,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 overflow-y-auto p-4 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent space-y-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    startNewGame();
                                    handleResetStats();
                                },
                                className: "bg-gray-800 hover:bg-gray-700 text-gray-200 py-2 rounded text-xs font-bold border border-gray-600 transition-colors",
                                children: "🔄 Nouvelle Donne"
                            }, void 0, false, {
                                fileName: "[project]/frontend/components/god/Sidebar.tsx",
                                lineNumber: 118,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    clearAllHands();
                                    handleResetStats();
                                },
                                className: "bg-red-900/20 hover:bg-red-900/40 text-red-300 py-2 rounded text-xs font-bold border border-red-900/30 transition-colors",
                                children: "🧹 Vider table"
                            }, void 0, false, {
                                fileName: "[project]/frontend/components/god/Sidebar.tsx",
                                lineNumber: 121,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/components/god/Sidebar.tsx",
                        lineNumber: 117,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-gray-800/50 p-3 rounded-lg border border-gray-700",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between items-center mb-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-xs font-bold text-gray-400 uppercase tracking-wider flex items-center gap-2",
                                        children: "📖 Livre de Bord"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/components/god/Sidebar.tsx",
                                        lineNumber: 129,
                                        columnNumber: 25
                                    }, this),
                                    bookMissionId > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "bg-purple-900/50 text-purple-300 text-[10px] px-2 py-0.5 rounded border border-purple-500/30",
                                        children: [
                                            "Mission #",
                                            bookMissionId
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/components/god/Sidebar.tsx",
                                        lineNumber: 132,
                                        columnNumber: 47
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/components/god/Sidebar.tsx",
                                lineNumber: 128,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                className: "w-full bg-gray-900 text-white text-xs p-2 rounded border border-gray-600 outline-none focus:border-purple-500 mb-2",
                                value: bookMissionId,
                                onChange: (e)=>{
                                    loadMissionFromBook(Number(e.target.value));
                                    handleResetStats();
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "0",
                                        children: "-- Sélectionner une mission --"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/components/god/Sidebar.tsx",
                                        lineNumber: 140,
                                        columnNumber: 25
                                    }, this),
                                    __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$data$2f$real_missions$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["REAL_MISSION_LOGBOOK"].map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: m.id,
                                            children: [
                                                m.id,
                                                ". ",
                                                m.description.substring(0, 40),
                                                "..."
                                            ]
                                        }, m.id, true, {
                                            fileName: "[project]/frontend/components/god/Sidebar.tsx",
                                            lineNumber: 141,
                                            columnNumber: 56
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/components/god/Sidebar.tsx",
                                lineNumber: 135,
                                columnNumber: 21
                            }, this),
                            bookMissionId > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "animate-fade-in",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[10px] text-gray-400 italic leading-relaxed px-1 mb-3 border-l-2 border-purple-500/30 pl-2",
                                        children: [
                                            '"',
                                            __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$data$2f$real_missions$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["REAL_MISSION_LOGBOOK"].find((m)=>m.id === bookMissionId)?.description,
                                            '"'
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/components/god/Sidebar.tsx",
                                        lineNumber: 146,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>{
                                                    shuffleOwners();
                                                    handleResetStats();
                                                },
                                                className: "flex-1 bg-gray-700 hover:bg-gray-600 text-[10px] text-white py-1.5 rounded border border-gray-600 transition",
                                                children: "👤 Mix Joueurs"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/components/god/Sidebar.tsx",
                                                lineNumber: 150,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>{
                                                    shuffleCards();
                                                    handleResetStats();
                                                },
                                                className: "flex-1 bg-gray-700 hover:bg-gray-600 text-[10px] text-white py-1.5 rounded border border-gray-600 transition",
                                                children: "🃏 Mix Tâches"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/components/god/Sidebar.tsx",
                                                lineNumber: 151,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/components/god/Sidebar.tsx",
                                        lineNumber: 149,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>{
                                            autoFindSolution();
                                            handleResetStats();
                                        },
                                        disabled: isAutoFinding,
                                        className: `w-full mt-2 py-2 rounded text-xs font-bold border transition flex items-center justify-center gap-2 shadow-lg ${isAutoFinding ? 'bg-purple-900/80 border-purple-500 text-purple-200 animate-pulse cursor-wait' : 'bg-linear-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white border-transparent'}`,
                                        children: isAutoFinding ? '🎲 Recherche en cours...' : '🎰 Trouver une donne GAGNANTE'
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/components/god/Sidebar.tsx",
                                        lineNumber: 153,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/components/god/Sidebar.tsx",
                                lineNumber: 145,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/components/god/Sidebar.tsx",
                        lineNumber: 127,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-xs font-bold text-gray-400 uppercase tracking-wider border-b border-gray-700 pb-1",
                                children: "Objectifs"
                            }, void 0, false, {
                                fileName: "[project]/frontend/components/god/Sidebar.tsx",
                                lineNumber: 162,
                                columnNumber: 21
                            }, this),
                            globalConstraints.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: globalConstraints.map((c, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3 bg-gray-800/80 p-2 rounded border-l-4 border-l-yellow-500 border border-gray-700 shadow-sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-xl",
                                                children: c.type === 'NO_TRICKS' ? '🚫' : '🔢'
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/components/god/Sidebar.tsx",
                                                lineNumber: 168,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-[10px] font-bold text-gray-400 uppercase",
                                                        children: c.type === 'NO_TRICKS' ? 'Interdiction' : 'Protocole'
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/components/god/Sidebar.tsx",
                                                        lineNumber: 170,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-xs text-gray-200",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-bold text-white",
                                                                children: [
                                                                    'Sud',
                                                                    'Ouest',
                                                                    'Nord',
                                                                    'Est'
                                                                ][c.player || 0]
                                                            }, void 0, false, {
                                                                fileName: "[project]/frontend/components/god/Sidebar.tsx",
                                                                lineNumber: 172,
                                                                columnNumber: 45
                                                            }, this),
                                                            c.type === 'NO_TRICKS' ? ' ne doit faire aucun pli.' : ` doit faire exactement ${c.count} pli(s).`
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/frontend/components/god/Sidebar.tsx",
                                                        lineNumber: 171,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/frontend/components/god/Sidebar.tsx",
                                                lineNumber: 169,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, i, true, {
                                        fileName: "[project]/frontend/components/god/Sidebar.tsx",
                                        lineNumber: 167,
                                        columnNumber: 33
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/frontend/components/god/Sidebar.tsx",
                                lineNumber: 165,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: missions.map((m, i)=>{
                                    const targetId = `${m.cardColor}-${m.cardValue}`;
                                    const targetCard = allCards.find((c)=>c.id === targetId);
                                    const isAccomplished = targetCard?.status === 'WON' && targetCard?.winnerIndex === m.ownerIndex;
                                    const isFailed = targetCard?.status === 'WON' && targetCard?.winnerIndex !== undefined && targetCard?.winnerIndex !== m.ownerIndex;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `relative flex items-center gap-2 p-2 rounded border transition-all ${getBorderColor(m.cardColor)} ${isAccomplished ? 'opacity-50 grayscale-[0.5]' : ''}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute top-0 right-0 p-1",
                                                children: [
                                                    isAccomplished && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-green-400 text-xs",
                                                        children: "✅"
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/components/god/Sidebar.tsx",
                                                        lineNumber: 191,
                                                        columnNumber: 60
                                                    }, this),
                                                    isFailed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-red-400 text-xs",
                                                        children: "❌"
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/components/god/Sidebar.tsx",
                                                        lineNumber: 192,
                                                        columnNumber: 54
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/frontend/components/god/Sidebar.tsx",
                                                lineNumber: 190,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TokenBadge, {
                                                token: m.token
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/components/god/Sidebar.tsx",
                                                lineNumber: 194,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1 flex flex-col gap-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[10px] text-gray-400 uppercase font-bold",
                                                                children: "Joueur"
                                                            }, void 0, false, {
                                                                fileName: "[project]/frontend/components/god/Sidebar.tsx",
                                                                lineNumber: 197,
                                                                columnNumber: 45
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                className: "bg-gray-900 text-white text-[10px] py-0.5 px-1 rounded border border-gray-600 outline-none focus:border-purple-500",
                                                                value: m.ownerIndex,
                                                                onChange: (e)=>{
                                                                    const newMissions = [
                                                                        ...missions
                                                                    ];
                                                                    newMissions[i].ownerIndex = Number(e.target.value);
                                                                    setMissions(newMissions);
                                                                    handleResetStats();
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: 0,
                                                                        children: "Sud"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/frontend/components/god/Sidebar.tsx",
                                                                        lineNumber: 206,
                                                                        columnNumber: 49
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: 1,
                                                                        children: "Ouest"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/frontend/components/god/Sidebar.tsx",
                                                                        lineNumber: 206,
                                                                        columnNumber: 79
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: 2,
                                                                        children: "Nord"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/frontend/components/god/Sidebar.tsx",
                                                                        lineNumber: 206,
                                                                        columnNumber: 111
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: 3,
                                                                        children: "Est"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/frontend/components/god/Sidebar.tsx",
                                                                        lineNumber: 206,
                                                                        columnNumber: 142
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/frontend/components/god/Sidebar.tsx",
                                                                lineNumber: 198,
                                                                columnNumber: 45
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/frontend/components/god/Sidebar.tsx",
                                                        lineNumber: 196,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex gap-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                className: "bg-gray-900 text-white text-xs font-bold py-1 px-1 rounded border border-gray-600 outline-none w-12 text-center",
                                                                value: m.cardValue,
                                                                onChange: (e)=>{
                                                                    const newMissions = [
                                                                        ...missions
                                                                    ];
                                                                    newMissions[i].cardValue = Number(e.target.value);
                                                                    setMissions(newMissions);
                                                                    handleResetStats();
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
                                                                ].map((n)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: n,
                                                                        children: n
                                                                    }, n, false, {
                                                                        fileName: "[project]/frontend/components/god/Sidebar.tsx",
                                                                        lineNumber: 218,
                                                                        columnNumber: 79
                                                                    }, this))
                                                            }, void 0, false, {
                                                                fileName: "[project]/frontend/components/god/Sidebar.tsx",
                                                                lineNumber: 210,
                                                                columnNumber: 45
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                className: `flex-1 text-xs font-bold py-1 px-2 rounded outline-none border border-black/20 appearance-none ${m.cardColor === 'Rocket' ? 'bg-gray-700 text-white' : `bg-${m.cardColor.toLowerCase()}-500 text-white`}`,
                                                                style: {
                                                                    backgroundColor: m.cardColor === 'Rocket' ? '#374151' : undefined
                                                                },
                                                                value: m.cardColor,
                                                                onChange: (e)=>{
                                                                    const newMissions = [
                                                                        ...missions
                                                                    ];
                                                                    newMissions[i].cardColor = e.target.value;
                                                                    setMissions(newMissions);
                                                                    handleResetStats();
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: "Blue",
                                                                        className: "bg-blue-600",
                                                                        children: "Bleu"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/frontend/components/god/Sidebar.tsx",
                                                                        lineNumber: 229,
                                                                        columnNumber: 49
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: "Green",
                                                                        className: "bg-green-600",
                                                                        children: "Vert"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/frontend/components/god/Sidebar.tsx",
                                                                        lineNumber: 230,
                                                                        columnNumber: 49
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: "Pink",
                                                                        className: "bg-pink-600",
                                                                        children: "Rose"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/frontend/components/god/Sidebar.tsx",
                                                                        lineNumber: 231,
                                                                        columnNumber: 49
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: "Yellow",
                                                                        className: "bg-yellow-500",
                                                                        children: "Jaune"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/frontend/components/god/Sidebar.tsx",
                                                                        lineNumber: 232,
                                                                        columnNumber: 49
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: "Rocket",
                                                                        className: "bg-gray-700",
                                                                        children: "Fusée"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/frontend/components/god/Sidebar.tsx",
                                                                        lineNumber: 233,
                                                                        columnNumber: 49
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/frontend/components/god/Sidebar.tsx",
                                                                lineNumber: 220,
                                                                columnNumber: 45
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/frontend/components/god/Sidebar.tsx",
                                                        lineNumber: 209,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/frontend/components/god/Sidebar.tsx",
                                                lineNumber: 195,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>removeMission(i),
                                                className: "self-start text-gray-500 hover:text-red-400 text-xs px-1",
                                                children: "✕"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/components/god/Sidebar.tsx",
                                                lineNumber: 237,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, i, true, {
                                        fileName: "[project]/frontend/components/god/Sidebar.tsx",
                                        lineNumber: 189,
                                        columnNumber: 33
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/frontend/components/god/Sidebar.tsx",
                                lineNumber: 181,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    setMissions((prev)=>[
                                            ...prev,
                                            {
                                                cardColor: 'Blue',
                                                cardValue: 1,
                                                ownerIndex: 0,
                                                token: 'None'
                                            }
                                        ]);
                                    handleResetStats();
                                },
                                className: "w-full py-2 border border-dashed border-gray-600 text-gray-400 hover:text-white hover:border-gray-400 text-xs rounded transition-colors flex items-center justify-center gap-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "+"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/components/god/Sidebar.tsx",
                                        lineNumber: 242,
                                        columnNumber: 355
                                    }, this),
                                    " Ajouter une tâche"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/components/god/Sidebar.tsx",
                                lineNumber: 242,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/components/god/Sidebar.tsx",
                        lineNumber: 161,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-px bg-gray-800 my-4"
                    }, void 0, false, {
                        fileName: "[project]/frontend/components/god/Sidebar.tsx",
                        lineNumber: 245,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-4",
                        children: [
                            gameMode === 'MCTS' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between items-center mb-1 px-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] text-gray-400 uppercase font-bold",
                                        children: "Qui réfléchit ?"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/components/god/Sidebar.tsx",
                                        lineNumber: 251,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        className: "bg-gray-800 text-blue-300 text-xs font-bold p-1 rounded border border-blue-500/30 outline-none",
                                        value: agentPlayer,
                                        onChange: (e)=>setAgentPlayer(Number(e.target.value)),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: 0,
                                                children: "🤖 Agent Sud"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/components/god/Sidebar.tsx",
                                                lineNumber: 253,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: 1,
                                                children: "🤖 Agent Ouest"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/components/god/Sidebar.tsx",
                                                lineNumber: 253,
                                                columnNumber: 72
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: 2,
                                                children: "🤖 Agent Nord"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/components/god/Sidebar.tsx",
                                                lineNumber: 253,
                                                columnNumber: 113
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: 3,
                                                children: "🤖 Agent Est"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/components/god/Sidebar.tsx",
                                                lineNumber: 253,
                                                columnNumber: 153
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/components/god/Sidebar.tsx",
                                        lineNumber: 252,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/components/god/Sidebar.tsx",
                                lineNumber: 250,
                                columnNumber: 26
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleLaunch,
                                disabled: isThinking || hasFailed,
                                className: `
                            w-full py-4 rounded-lg font-bold text-sm shadow-xl transition-all
                            ${isThinking ? 'bg-gray-800 text-gray-400 cursor-wait' : hasFailed ? 'bg-red-900/80 text-red-200 border border-red-500 cursor-not-allowed opacity-100' : gameMode === 'MCTS' ? 'bg-blue-600 hover:bg-blue-500 text-white ring-1 ring-blue-400 active:scale-95' : 'bg-purple-600 hover:bg-purple-500 text-white ring-1 ring-purple-400 active:scale-95'}
                        `,
                                children: isThinking ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "flex items-center justify-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "animate-spin text-lg",
                                            children: "⚙️"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/components/god/Sidebar.tsx",
                                            lineNumber: 275,
                                            columnNumber: 33
                                        }, this),
                                        gameMode === 'MCTS' ? 'L\'agent réfléchit...' : 'Calcul en cours...'
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/components/god/Sidebar.tsx",
                                    lineNumber: 274,
                                    columnNumber: 29
                                }, this) : hasFailed ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "flex items-center justify-center gap-2",
                                    children: "🚫 AUCUNE SOLUTION POSSIBLE"
                                }, void 0, false, {
                                    fileName: "[project]/frontend/components/god/Sidebar.tsx",
                                    lineNumber: 279,
                                    columnNumber: 29
                                }, this) : gameMode === 'MCTS' ? '🧠 DEMANDER À L\'AGENT' : '⚡️ LANCER LE SOLVER'
                            }, void 0, false, {
                                fileName: "[project]/frontend/components/god/Sidebar.tsx",
                                lineNumber: 258,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/components/god/Sidebar.tsx",
                        lineNumber: 248,
                        columnNumber: 17
                    }, this),
                    stats && stats.solutionFound && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-6 bg-gray-800 rounded-lg border border-gray-700 overflow-hidden animate-slide-up",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-gray-900 px-3 py-2 border-b border-gray-700 flex justify-between items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs font-bold text-gray-400 uppercase",
                                        children: "Lecteur de Solution"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/components/god/Sidebar.tsx",
                                        lineNumber: 292,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] bg-purple-900 text-purple-200 px-1.5 rounded",
                                        children: [
                                            currentMoveIndex >= 0 ? Math.ceil(currentMoveIndex + 1) : 0,
                                            " / ",
                                            totalSteps
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/components/god/Sidebar.tsx",
                                        lineNumber: 293,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/components/god/Sidebar.tsx",
                                lineNumber: 291,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-full h-1.5 bg-gray-700 rounded-full mb-4 overflow-hidden",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-full bg-linear-to-r from-purple-500 to-pink-500 transition-all duration-300 ease-linear",
                                            style: {
                                                width: `${progressWidth}%`
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/components/god/Sidebar.tsx",
                                            lineNumber: 300,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/components/god/Sidebar.tsx",
                                        lineNumber: 299,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: handlePrev,
                                                className: "flex-1 bg-gray-700 hover:bg-gray-600 text-white py-2 rounded active:scale-95 transition",
                                                children: "⏮"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/components/god/Sidebar.tsx",
                                                lineNumber: 307,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: togglePlay,
                                                className: `flex-1 py-2 rounded font-bold text-white active:scale-95 transition ${isPlaying ? 'bg-yellow-600 hover:bg-yellow-500' : 'bg-green-600 hover:bg-green-500'}`,
                                                children: isPlaying ? '⏸' : '▶'
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/components/god/Sidebar.tsx",
                                                lineNumber: 308,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: handleNext,
                                                className: "flex-1 bg-gray-700 hover:bg-gray-600 text-white py-2 rounded active:scale-95 transition",
                                                children: "⏭"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/components/god/Sidebar.tsx",
                                                lineNumber: 311,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/components/god/Sidebar.tsx",
                                        lineNumber: 306,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/components/god/Sidebar.tsx",
                                lineNumber: 298,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "border-t border-gray-700 max-h-50 overflow-y-auto bg-black/20 p-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$god$2f$TrickHistory$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    steps: stats.solution_steps
                                }, void 0, false, {
                                    fileName: "[project]/frontend/components/god/Sidebar.tsx",
                                    lineNumber: 316,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/frontend/components/god/Sidebar.tsx",
                                lineNumber: 315,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/components/god/Sidebar.tsx",
                        lineNumber: 290,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-4 bg-black/40 rounded p-2 font-mono text-[10px] text-gray-500 border border-white/5 h-30 overflow-y-auto",
                        children: logs.map((l, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-0.5 border-l-2 border-transparent hover:border-purple-500 pl-1",
                                children: l
                            }, i, false, {
                                fileName: "[project]/frontend/components/god/Sidebar.tsx",
                                lineNumber: 322,
                                columnNumber: 41
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/frontend/components/god/Sidebar.tsx",
                        lineNumber: 321,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/components/god/Sidebar.tsx",
                lineNumber: 114,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/components/god/Sidebar.tsx",
        lineNumber: 91,
        columnNumber: 9
    }, this);
}
}),
"[project]/frontend/components/Card.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Card
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
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
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    viewBox: "0 0 24 24",
                    fill: "none",
                    className: "w-full h-full opacity-30",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "12",
                            cy: "12",
                            r: "6",
                            stroke: theme.icon,
                            strokeWidth: "2",
                            fill: theme.icon,
                            fillOpacity: "0.2"
                        }, void 0, false, {
                            fileName: "[project]/frontend/components/Card.tsx",
                            lineNumber: 32,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M7 16C7 16 9 18 12 18C15 18 17 16 17 16",
                            stroke: theme.icon,
                            strokeWidth: "2",
                            strokeLinecap: "round"
                        }, void 0, false, {
                            fileName: "[project]/frontend/components/Card.tsx",
                            lineNumber: 33,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                            cx: "12",
                            cy: "12",
                            rx: "9",
                            ry: "3",
                            stroke: theme.icon,
                            strokeWidth: "1.5",
                            transform: "rotate(-15 12 12)"
                        }, void 0, false, {
                            fileName: "[project]/frontend/components/Card.tsx",
                            lineNumber: 34,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/frontend/components/Card.tsx",
                    lineNumber: 31,
                    columnNumber: 11
                }, this);
            case 'Green':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    viewBox: "0 0 24 24",
                    fill: "none",
                    className: "w-full h-full opacity-30",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z",
                            stroke: theme.icon,
                            strokeWidth: "1.5"
                        }, void 0, false, {
                            fileName: "[project]/frontend/components/Card.tsx",
                            lineNumber: 40,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z",
                            stroke: theme.icon,
                            strokeWidth: "1.5"
                        }, void 0, false, {
                            fileName: "[project]/frontend/components/Card.tsx",
                            lineNumber: 41,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "12",
                            cy: "12",
                            r: "2",
                            fill: theme.icon
                        }, void 0, false, {
                            fileName: "[project]/frontend/components/Card.tsx",
                            lineNumber: 42,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M12 12L16 8",
                            stroke: theme.icon,
                            strokeWidth: "1.5"
                        }, void 0, false, {
                            fileName: "[project]/frontend/components/Card.tsx",
                            lineNumber: 43,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/frontend/components/Card.tsx",
                    lineNumber: 39,
                    columnNumber: 11
                }, this);
            case 'Pink':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    viewBox: "0 0 24 24",
                    fill: "none",
                    className: "w-full h-full opacity-30",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
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
                            fileName: "[project]/frontend/components/Card.tsx",
                            lineNumber: 49,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M9 12H15",
                            stroke: theme.icon,
                            strokeWidth: "2",
                            strokeLinecap: "round"
                        }, void 0, false, {
                            fileName: "[project]/frontend/components/Card.tsx",
                            lineNumber: 50,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M12 9V15",
                            stroke: theme.icon,
                            strokeWidth: "2",
                            strokeLinecap: "round"
                        }, void 0, false, {
                            fileName: "[project]/frontend/components/Card.tsx",
                            lineNumber: 51,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/frontend/components/Card.tsx",
                    lineNumber: 48,
                    columnNumber: 13
                }, this);
            case 'Yellow':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    viewBox: "0 0 24 24",
                    fill: "none",
                    className: "w-full h-full opacity-30",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z",
                        stroke: theme.icon,
                        strokeWidth: "2",
                        fill: theme.icon,
                        fillOpacity: "0.2"
                    }, void 0, false, {
                        fileName: "[project]/frontend/components/Card.tsx",
                        lineNumber: 57,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/frontend/components/Card.tsx",
                    lineNumber: 56,
                    columnNumber: 11
                }, this);
            case 'Rocket':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    viewBox: "0 0 24 24",
                    fill: "none",
                    className: "w-full h-full opacity-40",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M12 2.5C12 2.5 15.5 8 15.5 13C15.5 16.5 14.5 18 12 21.5C9.5 18 8.5 16.5 8.5 13C8.5 8 12 2.5 12 2.5Z",
                            fill: "white"
                        }, void 0, false, {
                            fileName: "[project]/frontend/components/Card.tsx",
                            lineNumber: 64,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M12 14.5C12.8284 14.5 13.5 13.8284 13.5 13C13.5 12.1716 12.8284 11.5 12 11.5C11.1716 11.5 10.5 12.1716 10.5 13C10.5 13.8284 11.1716 14.5 12 14.5Z",
                            fill: "black"
                        }, void 0, false, {
                            fileName: "[project]/frontend/components/Card.tsx",
                            lineNumber: 65,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M15.5 16.5L18 20.5",
                            stroke: "white",
                            strokeWidth: "2",
                            strokeLinecap: "round"
                        }, void 0, false, {
                            fileName: "[project]/frontend/components/Card.tsx",
                            lineNumber: 66,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M8.5 16.5L6 20.5",
                            stroke: "white",
                            strokeWidth: "2",
                            strokeLinecap: "round"
                        }, void 0, false, {
                            fileName: "[project]/frontend/components/Card.tsx",
                            lineNumber: 67,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/frontend/components/Card.tsx",
                    lineNumber: 63,
                    columnNumber: 11
                }, this);
            default:
                return null;
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `relative rounded-lg shadow-xl overflow-hidden select-none transition-transform ${theme.bg} ${theme.border} border-2 ${className}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 flex items-center justify-center p-2",
                children: renderIcon()
            }, void 0, false, {
                fileName: "[project]/frontend/components/Card.tsx",
                lineNumber: 78,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `absolute inset-0 flex items-center justify-center font-black text-4xl drop-shadow-md ${theme.text}`,
                children: value
            }, void 0, false, {
                fileName: "[project]/frontend/components/Card.tsx",
                lineNumber: 83,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `absolute top-1 left-1.5 text-xs font-bold ${theme.text}`,
                children: value
            }, void 0, false, {
                fileName: "[project]/frontend/components/Card.tsx",
                lineNumber: 88,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `absolute bottom-1 right-1.5 text-xs font-bold ${theme.text} rotate-180`,
                children: value
            }, void 0, false, {
                fileName: "[project]/frontend/components/Card.tsx",
                lineNumber: 93,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/components/Card.tsx",
        lineNumber: 75,
        columnNumber: 5
    }, this);
}
}),
"[project]/frontend/components/god/GameBoard.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>GodGameBoard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$Card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/components/Card.tsx [app-ssr] (ecmascript)");
;
;
// =================================================================================
// 🛠️ CONFIGURATION 1 : ZONES D'INFO (Missions uniquement)
// =================================================================================
const INFO_POSITIONS = {
    0: {
        x: 150,
        y: 200,
        rotation: 0
    },
    1: {
        x: -140,
        y: 40,
        rotation: 90
    },
    2: {
        x: 150,
        y: -120,
        rotation: 180
    },
    3: {
        x: 440,
        y: 40,
        rotation: -90
    }
};
// =================================================================================
// 🛠️ CONFIGURATION 2 : CENTRE DES MAINS
// =================================================================================
const HAND_POSITIONS = {
    0: {
        x: 0,
        y: 260,
        rotation: 0
    },
    1: {
        x: -400,
        y: 0,
        rotation: 90
    },
    2: {
        x: 0,
        y: -260,
        rotation: 180
    },
    3: {
        x: 400,
        y: 0,
        rotation: -90
    }
};
// --- COMPOSANT MISSION (Affichage des jetons et status) ---
const MissionToken = ({ mission })=>{
    const statusClass = mission.status === 'SUCCESS' ? 'border-green-500 shadow-[0_0_15px_rgba(34,197,94,0.5)] bg-green-900/80' : mission.status === 'FAILED' ? 'border-red-500 opacity-60 bg-red-900/50' : 'border-gray-500 bg-gray-900';
    const token = mission.token;
    const isSpecial = mission.cardColor === 'Special' || mission.cardValue === 0;
    const specialLabels = {
        'NO_TRICKS': '0 PLI',
        'NO_TRICKS_PLAYER': '0 PLI (J)',
        'ALL_ROCKETS': '🚀 ALL',
        'SPECIFIC_WIN_1': 'WIN 1',
        'NO_9_WIN': 'NO 9'
    };
    const label = token && specialLabels[token] || token;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `relative w-10 h-14 rounded border-2 ${statusClass} flex flex-col items-center justify-center transform transition-all z-20 shrink-0 select-none`,
        children: [
            !isSpecial && token !== 'None' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute -top-3 -right-3 bg-purple-600 rounded-full w-5 h-5 flex items-center justify-center text-[10px] text-white font-bold shadow border border-white/20 z-30",
                children: token === 'Omega' ? 'Ω' : token
            }, void 0, false, {
                fileName: "[project]/frontend/components/god/GameBoard.tsx",
                lineNumber: 49,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0)),
            !isSpecial ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `w-full h-1.5 mb-1 ${mission.cardColor === 'Pink' ? 'bg-pink-500' : mission.cardColor === 'Green' ? 'bg-green-500' : mission.cardColor === 'Blue' ? 'bg-blue-600' : mission.cardColor === 'Yellow' ? 'bg-yellow-400' : mission.cardColor === 'Rocket' ? 'bg-gray-700' : 'bg-gray-600'}`
                    }, void 0, false, {
                        fileName: "[project]/frontend/components/god/GameBoard.tsx",
                        lineNumber: 57,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-white font-bold text-lg leading-none",
                        children: mission.cardValue
                    }, void 0, false, {
                        fileName: "[project]/frontend/components/god/GameBoard.tsx",
                        lineNumber: 64,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-center justify-center h-full w-full p-0.5 text-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-[8px] font-black text-gray-300 leading-tight uppercase",
                    children: label
                }, void 0, false, {
                    fileName: "[project]/frontend/components/god/GameBoard.tsx",
                    lineNumber: 68,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/frontend/components/god/GameBoard.tsx",
                lineNumber: 67,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0)),
            mission.status === 'SUCCESS' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute -bottom-2 -left-2 bg-white border border-green-500 rounded-full w-5 h-5 flex items-center justify-center shadow-md z-40",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-green-600 font-bold text-xs",
                    children: "✔"
                }, void 0, false, {
                    fileName: "[project]/frontend/components/god/GameBoard.tsx",
                    lineNumber: 77,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/frontend/components/god/GameBoard.tsx",
                lineNumber: 76,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0)),
            mission.status === 'FAILED' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute -bottom-2 -right-2 bg-white border border-red-500 rounded-full w-5 h-5 flex items-center justify-center shadow-md z-40",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-red-500 font-bold text-xs",
                    children: "✕"
                }, void 0, false, {
                    fileName: "[project]/frontend/components/god/GameBoard.tsx",
                    lineNumber: 82,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/frontend/components/god/GameBoard.tsx",
                lineNumber: 81,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/components/god/GameBoard.tsx",
        lineNumber: 46,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
function GodGameBoard({ allCards = [], missions = [], onPlayerClick }) {
    const safeCards = Array.isArray(allCards) ? allCards : [];
    const safeMissions = Array.isArray(missions) ? missions : [];
    const HAND_RADIUS = 600;
    const ANGLE_STEP = 5;
    // --- POSITIONNEMENT DES TITRES (PLUS PRÈS DU CENTRE) ---
    const getTitleStyle = (playerIndex)=>{
        const base = "translate(-50%, -50%)";
        switch(playerIndex){
            case 0:
                return {
                    transform: `${base} translate(25px, 120px)`
                }; // SUD
            case 1:
                return {
                    transform: `${base} translate(-200px, 15px) rotate(90deg)`
                }; // OUEST
            case 2:
                return {
                    transform: `${base} translate(35px, -90px)`
                }; // NORD
            case 3:
                return {
                    transform: `${base} translate(260px, 15px) rotate(-90deg)`
                }; // EST
            default:
                return {};
        }
    };
    const getInfoZoneStyle = (playerIndex)=>{
        const pos = INFO_POSITIONS[playerIndex];
        return {
            transform: `translate(-50%, -50%) translate(${pos.x}px, ${pos.y}px) rotate(${pos.rotation}deg)`
        };
    };
    const getCardStyle = (card)=>{
        // 1. CARTE GAGNÉE
        if (card.status === 'WON') {
            const winPositions = [
                `translate(0px, 600px)`,
                `translate(-800px, 0px)`,
                `translate(0px, -600px)`,
                `translate(800px, 0px)`
            ];
            return {
                transform: `translate(-50%, -50%) ${winPositions[card.winnerIndex || 0]} scale(0.4)`,
                opacity: 0,
                zIndex: 500,
                transition: 'transform 0.8s ease-in-out, opacity 0.8s ease-in-out'
            };
        }
        // 2. CARTE SUR TABLE
        if (card.status === 'TABLE') {
            const rX = card.tableRotation * 5 % 15 - 7;
            const rY = card.tableRotation * 7 % 15 - 7;
            return {
                transform: `translate(-50%, -50%) translate(${rX}px, ${rY}px) rotate(${card.tableRotation}deg) scale(1.1)`,
                opacity: 1,
                zIndex: 200 + card.zIndex,
                transition: 'transform 0.5s ease-in-out, opacity 0.5s ease-in-out'
            };
        }
        // 3. MAIN (Communication retirée ici)
        const cardsInHand = safeCards.filter((c)=>c.owner === card.owner && c.status === 'HAND');
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
        const angle = (myIndex - (cardsInHand.length - 1) / 2) * ANGLE_STEP;
        const pos = HAND_POSITIONS[card.owner] || {
            x: 0,
            y: 0,
            rotation: 0
        };
        return {
            transform: `translate(calc(-50% + ${pos.x}px), calc(-50% + ${pos.y}px)) rotate(${pos.rotation}deg) translate(0px, ${HAND_RADIUS}px) rotate(${angle}deg) translate(0px, -${HAND_RADIUS}px)`,
            opacity: 1,
            zIndex: myIndex,
            transition: 'transform 0.5s ease-out'
        };
    };
    const playerNames = [
        'SUD',
        'OUEST',
        'NORD',
        'EST'
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full h-full relative bg-[#2c3e50] overflow-hidden shadow-inner flex items-center justify-center select-none",
        children: [
            onPlayerClick && [
                0,
                1,
                2,
                3
            ].map((pid)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute z-0 cursor-pointer font-black text-white/30 hover:text-white text-lg uppercase tracking-[0.2em] transition-colors",
                    style: getTitleStyle(pid),
                    onClick: ()=>onPlayerClick(pid),
                    children: playerNames[pid]
                }, `title-${pid}`, false, {
                    fileName: "[project]/frontend/components/god/GameBoard.tsx",
                    lineNumber: 173,
                    columnNumber: 13
                }, this)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-0 h-0 flex items-center justify-center z-10",
                children: [
                    safeCards.length > 0 && [
                        0,
                        1,
                        2,
                        3
                    ].map((pid)=>{
                        const pMissions = safeMissions.filter((m)=>m.ownerIndex === pid);
                        if (pMissions.length === 0) return null;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            // Container centré, largeur ajustée pour centrer les missions
                            className: "absolute w-75 h-20 pointer-events-none transition-all duration-500 z-60 flex items-center justify-center gap-2",
                            style: getInfoZoneStyle(pid),
                            children: pMissions.map((m, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(MissionToken, {
                                    mission: m
                                }, i, false, {
                                    fileName: "[project]/frontend/components/god/GameBoard.tsx",
                                    lineNumber: 198,
                                    columnNumber: 29
                                }, this))
                        }, pid, false, {
                            fileName: "[project]/frontend/components/god/GameBoard.tsx",
                            lineNumber: 191,
                            columnNumber: 21
                        }, this);
                    }),
                    safeCards.map((card)=>{
                        const style = getCardStyle(card);
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute top-0 left-0 w-20 aspect-2/3 pointer-events-none",
                            style: {
                                ...style,
                                willChange: 'transform, opacity'
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$Card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                color: card.color,
                                value: card.value,
                                className: "w-full h-full shadow-2xl border border-black/30 rounded-lg"
                            }, void 0, false, {
                                fileName: "[project]/frontend/components/god/GameBoard.tsx",
                                lineNumber: 213,
                                columnNumber: 25
                            }, this)
                        }, card.id, false, {
                            fileName: "[project]/frontend/components/god/GameBoard.tsx",
                            lineNumber: 208,
                            columnNumber: 21
                        }, this);
                    })
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/components/god/GameBoard.tsx",
                lineNumber: 183,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/components/god/GameBoard.tsx",
        lineNumber: 169,
        columnNumber: 5
    }, this);
}
}),
"[project]/frontend/components/god/CardPicker.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CardPicker
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$Card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/components/Card.tsx [app-ssr] (ecmascript)");
;
;
function CardPicker({ currentPlayer, allCards, onToggleCard, onClose }) {
    const COLORS = [
        'Blue',
        'Green',
        'Pink',
        'Yellow',
        'Rocket'
    ];
    const PLAYER_NAMES = [
        'SUD',
        'OUEST',
        'NORD',
        'EST'
    ];
    // Combien de cartes ce joueur a-t-il déjà ?
    const myCount = allCards.filter((c)=>c.owner === currentPlayer && c.status === 'HAND').length;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 bg-black/85 z-9999 flex items-center justify-center backdrop-blur-md animate-fade-in p-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-gray-900 border border-gray-600 rounded-xl shadow-2xl w-full max-w-6xl max-h-[95vh] flex flex-col",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-between items-center p-6 border-b border-gray-700 bg-gray-900 rounded-t-xl z-10",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-3xl font-bold text-white flex items-center gap-3",
                                    children: [
                                        "Main de ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-purple-400",
                                            children: PLAYER_NAMES[currentPlayer]
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/components/god/CardPicker.tsx",
                                            lineNumber: 28,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/components/god/CardPicker.tsx",
                                    lineNumber: 27,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-gray-400 mt-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-bold text-white",
                                            children: myCount
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/components/god/CardPicker.tsx",
                                            lineNumber: 31,
                                            columnNumber: 29
                                        }, this),
                                        " cartes sélectionnée(s)."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/components/god/CardPicker.tsx",
                                    lineNumber: 30,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/components/god/CardPicker.tsx",
                            lineNumber: 26,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            className: "text-gray-400 hover:text-white bg-gray-800 hover:bg-gray-700 w-12 h-12 rounded-full font-bold text-xl transition",
                            children: "✕"
                        }, void 0, false, {
                            fileName: "[project]/frontend/components/god/CardPicker.tsx",
                            lineNumber: 34,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/frontend/components/god/CardPicker.tsx",
                    lineNumber: 25,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "overflow-y-auto p-6 space-y-6 flex-1",
                    children: COLORS.map((color)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col md:flex-row gap-6 items-start bg-gray-800/40 p-4 rounded-xl border border-white/5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `md:w-24 pt-4 text-sm font-black tracking-widest uppercase md:text-right ${color === 'Rocket' ? 'text-gray-400' : 'text-' + color.toLowerCase() + '-400'}`,
                                    children: color
                                }, void 0, false, {
                                    fileName: "[project]/frontend/components/god/CardPicker.tsx",
                                    lineNumber: 42,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-wrap gap-3",
                                    children: (color === 'Rocket' ? [
                                        1,
                                        2,
                                        3,
                                        4
                                    ] : [
                                        1,
                                        2,
                                        3,
                                        4,
                                        5,
                                        6,
                                        7,
                                        8,
                                        9
                                    ]).map((val)=>{
                                        const cardId = `${color}-${val}`;
                                        const existingCard = allCards.find((c)=>c.id === cardId);
                                        // États de la carte
                                        const isMine = existingCard?.owner === currentPlayer;
                                        const isTaken = existingCard !== undefined && !isMine; // Prise par un autre
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            // MODIF: On appelle toggleCard même si c'est pris (pour le vol)
                                            onClick: ()=>onToggleCard(color, val),
                                            // MODIF: On ne désactive plus le bouton
                                            // disabled={isTaken} 
                                            className: `
                                                relative w-20 aspect-2/3 rounded-lg transition-all duration-200 group
                                                ${isMine ? 'ring-4 ring-green-500 scale-105 z-10 shadow-2xl' : isTaken ? 'opacity-60 grayscale hover:grayscale-0 hover:opacity-100 cursor-pointer ring-2 ring-red-500/30 hover:ring-red-500/80' : 'hover:scale-110 hover:z-20 hover:shadow-xl opacity-80 hover:opacity-100'}
                                            `,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-full h-full pointer-events-none rounded-lg overflow-hidden border border-black/20 shadow-sm",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$Card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        color: color,
                                                        value: val,
                                                        className: "w-full h-full"
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/components/god/CardPicker.tsx",
                                                        lineNumber: 76,
                                                        columnNumber: 49
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/components/god/CardPicker.tsx",
                                                    lineNumber: 75,
                                                    columnNumber: 45
                                                }, this),
                                                isMine && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute -top-2 -right-2 bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center shadow-lg border-2 border-gray-900 font-bold text-xs",
                                                    children: "✓"
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/components/god/CardPicker.tsx",
                                                    lineNumber: 81,
                                                    columnNumber: 49
                                                }, this),
                                                isTaken && existingCard && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute inset-0 flex items-center justify-center bg-black/50 rounded-lg backdrop-blur-[1px] group-hover:bg-black/30 transition-colors",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs font-bold text-white bg-red-600 px-2 py-1 rounded shadow-lg border border-red-400 group-hover:scale-110 transition-transform",
                                                        children: PLAYER_NAMES[existingCard.owner]
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/components/god/CardPicker.tsx",
                                                        lineNumber: 89,
                                                        columnNumber: 53
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/components/god/CardPicker.tsx",
                                                    lineNumber: 88,
                                                    columnNumber: 49
                                                }, this)
                                            ]
                                        }, val, true, {
                                            fileName: "[project]/frontend/components/god/CardPicker.tsx",
                                            lineNumber: 58,
                                            columnNumber: 41
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/frontend/components/god/CardPicker.tsx",
                                    lineNumber: 47,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, color, true, {
                            fileName: "[project]/frontend/components/god/CardPicker.tsx",
                            lineNumber: 40,
                            columnNumber: 25
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/frontend/components/god/CardPicker.tsx",
                    lineNumber: 38,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-6 border-t border-gray-700 bg-gray-900 rounded-b-xl flex justify-end z-10",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onClose,
                        className: "bg-white text-gray-900 hover:bg-gray-200 py-3 px-10 rounded-lg font-bold shadow-lg transition active:scale-95 text-lg",
                        children: "Terminé"
                    }, void 0, false, {
                        fileName: "[project]/frontend/components/god/CardPicker.tsx",
                        lineNumber: 104,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/frontend/components/god/CardPicker.tsx",
                    lineNumber: 103,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/components/god/CardPicker.tsx",
            lineNumber: 22,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/frontend/components/god/CardPicker.tsx",
        lineNumber: 20,
        columnNumber: 9
    }, this);
}
}),
"[project]/frontend/hooks/useAIMode.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useAiMode",
    ()=>useAiMode
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$data$2f$real_missions$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/data/real_missions.ts [app-ssr] (ecmascript)");
;
;
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';
const IS_DEV_MODE = ("TURBOPACK compile-time value", "undefined") !== 'undefined' && window.location.hostname === 'localhost';
// --- HELPERS STRICTS ---
const computeCommunicationType = (card, hand)=>{
    // Filtre les cartes de la même couleur dans la main
    const sameColor = hand.filter((c)=>c.color === card.color && c.color !== 'Rocket');
    if (sameColor.length === 0) return 'MID'; // Bizarre mais sécu
    const isMax = card.value === Math.max(...sameColor.map((c)=>c.value));
    const isMin = card.value === Math.min(...sameColor.map((c)=>c.value));
    if (sameColor.length === 1) return 'MID'; // Seule carte -> Unique
    if (isMax) return 'TOP';
    if (isMin) return 'BOT';
    return 'MID'; // Par défaut (ne devrait pas arriver si règles strictes, mais ok pour démo)
};
const getCardFromIndex = (idx)=>{
    if (idx < 0 || idx > 39) return null;
    if (idx < 9) return {
        color: 'Blue',
        value: idx + 1
    };
    if (idx < 18) return {
        color: 'Green',
        value: idx - 8
    };
    if (idx < 27) return {
        color: 'Pink',
        value: idx - 17
    };
    if (idx < 36) return {
        color: 'Yellow',
        value: idx - 26
    };
    return {
        color: 'Rocket',
        value: idx - 35
    };
};
const convertBackendToFrontend = (d)=>{
    if (!d || !d.players || !Array.isArray(d.players)) return [];
    return d.players.flatMap((hand, pIdx)=>hand.map((c)=>({
                id: `${c.color}-${c.value}`,
                color: c.color,
                value: Number(c.value),
                owner: pIdx,
                status: 'HAND',
                zIndex: 0,
                tableRotation: (Number(c.value) * 100 + pIdx * 50 + c.color.length) % 40 - 20,
                winnerIndex: undefined
            })));
};
const getTrickWinner = (cards)=>{
    if (cards.length !== 4) return 0;
    let best = cards[0];
    const lead = best.color;
    for(let i = 1; i < 4; i++){
        const curr = cards[i], isR = curr.color === 'Rocket', bestR = best.color === 'Rocket';
        if (isR && (!bestR || curr.value > best.value) || !isR && curr.color === lead && !bestR && curr.value > best.value) best = curr;
    }
    return best.owner;
};
// --- HELPER : MISSIONS ---
const generateMissionSetup = (mid, cards)=>{
    const mDef = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$data$2f$real_missions$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["REAL_MISSION_LOGBOOK"].find((m)=>m.id === mid);
    if (!mDef) return null;
    const cmdIdx = cards.find((c)=>c.color === 'Rocket' && c.value === 4)?.owner ?? 0;
    const nMissions = [];
    const valid = cards.filter((c)=>c.color !== 'Rocket').sort(()=>Math.random() - 0.5);
    let tIdx = 0;
    let tDistrib = [];
    mDef.constraints.forEach((c)=>{
        if (c.type === 'TARGET_CARD') for(let i = 0; i < (c.args.count || 1); i++)tDistrib.push({
            token: 'None'
        });
    });
    let absCount = 0;
    mDef.constraints.forEach((c)=>{
        if (c.type === 'ORDER_ABSOLUTE') {
            for(let i = 0; i < c.args.count; i++)if (tDistrib[i]) tDistrib[i].token = (i + 1).toString();
            absCount = c.args.count;
        }
        if (c.type === 'ORDER_RELATIVE') {
            const toks = [
                '>',
                '>>',
                '>>>',
                '>>>>'
            ];
            const start = c.args.startIndex ?? absCount;
            for(let i = 0; i < c.args.count; i++)if (tDistrib[start + i]) tDistrib[start + i].token = toks[i];
        }
        if (c.type === 'ORDER_OMEGA' && tDistrib.length) tDistrib[tDistrib.length - 1].token = 'Omega';
    });
    tDistrib.forEach((t, i)=>{
        if (tIdx >= valid.length) return;
        nMissions.push({
            cardColor: valid[tIdx].color,
            cardValue: valid[tIdx].value,
            ownerIndex: (cmdIdx + i) % 4,
            token: t.token,
            status: 'PENDING'
        });
        tIdx++;
    });
    return {
        missions: nMissions,
        commander: cmdIdx
    };
};
const useAiMode = ()=>{
    // --- ÉTATS ---
    const [allCards, setAllCards] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [missions, setMissions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [communications, setCommunications] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [activePlayer, setActivePlayer] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [trickCards, setTrickCards] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [playedHistory, setPlayedHistory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isThinking, setIsThinking] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isServerWakingUp, setIsServerWakingUp] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false); // <--- NOUVEL ÉTAT
    const [logs, setLogs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [currentStepText, setCurrentStepText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("En attente...");
    const [isTraining, setIsTraining] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isAutoPlaying, setIsAutoPlaying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [trainingStats, setTrainingStats] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [milestones, setMilestones] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [replayData, setReplayData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isReplayMode, setIsReplayMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [replayStepIndex, setReplayStepIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(-1);
    const [currentMilestoneId, setCurrentMilestoneId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const addLog = (msg)=>setLogs((prev)=>[
                `> ${msg}`,
                ...prev
            ].slice(0, 50));
    const getPlayerName = (idx)=>[
            'Sud',
            'Ouest',
            'Nord',
            'Est'
        ][idx];
    const resetGameStates = ()=>{
        setAllCards([]);
        setMissions([]);
        setLogs([]);
        setCommunications({});
        setPlayedHistory([]);
        setTrickCards([]);
        setActivePlayer(0);
        setIsReplayMode(false);
        setIsAutoPlaying(false);
    };
    // --- 1. INITIALISATION ---
    const initializeMission = async (missionId)=>{
        resetGameStates();
        setIsThinking(true);
        setCurrentStepText("Distribution...");
        // Timer pour détecter le Cold Start (si > 2 secondes)
        const coldStartTimer = setTimeout(()=>{
            setIsServerWakingUp(true);
        }, 1000);
        try {
            const res = await fetch(`${API_URL}/start-game`);
            const gData = await res.json();
            const cards = convertBackendToFrontend(gData);
            setAllCards(cards);
            const setup = generateMissionSetup(missionId, cards);
            if (setup) {
                setMissions(setup.missions);
                setActivePlayer(setup.commander);
                setCurrentStepText(`Mission ${missionId}. Au tour de ${getPlayerName(setup.commander)}.`);
            } else {
                setMissions([]);
                setActivePlayer(gData.current_player || 0);
            }
        } catch (e) {
            console.error(e);
            setCurrentStepText("Erreur serveur.");
        } finally{
            clearTimeout(coldStartTimer); // On annule le timer si c'était rapide
            setIsServerWakingUp(false); // On désactive l'alerte
            setIsThinking(false);
        }
    };
    // --- 2. CONSTRUIRE L'ÉTAT ACTUEL (CLEAN) ---
    const buildFreshGameState = ()=>{
        const playersHands = [
            [],
            [],
            [],
            []
        ];
        allCards.forEach((c)=>{
            if (c.status === 'HAND' || c.status === 'COMMUNICATED') {
                playersHands[c.owner].push({
                    color: c.color,
                    value: Number(c.value)
                });
            }
        });
        const currentTrickFormatted = trickCards.map((c)=>({
                player: c.owner,
                card: {
                    color: c.color,
                    value: Number(c.value)
                }
            }));
        const missionsFormatted = missions.map((m)=>({
                card: {
                    color: m.cardColor,
                    value: Number(m.cardValue)
                },
                ownerIndex: m.ownerIndex,
                token: m.token,
                status: m.status
            }));
        const commsFormatted = Object.entries(communications).map(([pid, val])=>{
            const card = allCards.find((c)=>c.id === val.cardId);
            return {
                player: parseInt(pid),
                type: val.type,
                card: card ? {
                    color: card.color,
                    value: Number(card.value)
                } : null
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
    // --- 3. INFÉRENCE IA ---
    const playOneMove = async ()=>{
        if (trickCards.length === 4) return;
        setIsThinking(true);
        try {
            const freshState = buildFreshGameState();
            const res = await fetch(`${API_URL}/predict`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(freshState)
            });
            const data = await res.json();
            if (!res.ok || data.action === undefined) {
                setIsAutoPlaying(false);
                return;
            }
            const rawAction = data.action;
            // CAS 1 : COMMUNICATION
            if (rawAction >= 40) {
                const cardIdx = rawAction - 40;
                const targetCardInfo = getCardFromIndex(cardIdx);
                if (targetCardInfo) {
                    const cardInHand = allCards.find((c)=>c.color === targetCardInfo.color && Number(c.value) === Number(targetCardInfo.value) && c.owner === activePlayer && (c.status === 'HAND' || c.status === 'COMMUNICATED'));
                    if (cardInHand) {
                        const playerHand = allCards.filter((c)=>c.owner === activePlayer && c.status === 'HAND');
                        const tokenType = computeCommunicationType(cardInHand, playerHand);
                        addLog(`📢 IA (J${activePlayer + 1}) communique : ${cardInHand.color} ${cardInHand.value} (${tokenType})`);
                        setCommunications((prev)=>({
                                ...prev,
                                [activePlayer]: {
                                    cardId: cardInHand.id,
                                    type: tokenType
                                }
                            }));
                        setAllCards((prev)=>prev.map((c)=>c.id === cardInHand.id ? {
                                    ...c,
                                    status: 'COMMUNICATED'
                                } : c));
                    } else {
                        setIsAutoPlaying(false);
                    }
                }
            } else {
                const targetCard = getCardFromIndex(rawAction);
                if (targetCard) {
                    const cardInHand = allCards.find((c)=>c.color === targetCard.color && Number(c.value) === Number(targetCard.value) && c.owner === activePlayer && (c.status === 'HAND' || c.status === 'COMMUNICATED'));
                    if (cardInHand) {
                        addLog(`🤖 IA (J${activePlayer + 1}) joue : ${cardInHand.color} ${cardInHand.value}`);
                        playCard(cardInHand.id);
                    } else {
                        setIsAutoPlaying(false);
                    }
                }
            }
        } catch (e) {
            setIsAutoPlaying(false);
        } finally{
            setIsThinking(false);
        }
    };
    // --- 4. MOTEUR DE JEU ---
    const playCard = (cid)=>{
        const idx = allCards.findIndex((c)=>c.id === cid);
        if (idx === -1) return;
        const card = allCards[idx];
        if (card.owner !== activePlayer) return;
        const newCards = [
            ...allCards
        ];
        newCards[idx].status = 'TABLE';
        newCards[idx].zIndex = 200 + trickCards.length;
        newCards[idx].tableRotation = Math.random() * 30 - 15;
        setAllCards(newCards);
        const newTrick = [
            ...trickCards,
            newCards[idx]
        ];
        setTrickCards(newTrick);
        setPlayedHistory((prev)=>[
                ...prev,
                {
                    color: card.color,
                    value: Number(card.value),
                    owner: card.owner
                }
            ]);
        if (newTrick.length === 4) {
            setTimeout(()=>{
                const winIdx = getTrickWinner(newTrick);
                setAllCards((p)=>p.map((c)=>c.status === 'TABLE' ? {
                            ...c,
                            status: 'WON',
                            winnerIndex: winIdx,
                            zIndex: 500
                        } : c));
                setMissions((p)=>p.map((m)=>{
                        const tc = newCards.find((c)=>c.id === `${m.cardColor}-${m.cardValue}`);
                        if (!tc || tc.status !== 'TABLE') return m;
                        return tc.id === `${m.cardColor}-${m.cardValue}` && winIdx === m.ownerIndex ? {
                            ...m,
                            status: 'SUCCESS'
                        } : tc.id === `${m.cardColor}-${m.cardValue}` ? {
                            ...m,
                            status: 'FAILED'
                        } : m;
                    }));
                setTrickCards([]);
                setActivePlayer(winIdx);
                setCurrentStepText(`Pli remporté par ${getPlayerName(winIdx)}`);
            }, 1200);
        } else {
            setActivePlayer((activePlayer + 1) % 4);
        }
    };
    // --- 5. ENTRAINEMENT (LOCAL) ---
    const startTraining = async (episodesCount, missionId)=>{
        if ("TURBOPACK compile-time truthy", 1) return;
        //TURBOPACK unreachable
        ;
    };
    // --- 6. REPLAY ---
    const loadReplay = (replaySteps, milestoneId)=>{
        const dataToLoad = replaySteps || replayData;
        if (!dataToLoad) return;
        setIsReplayMode(true);
        setReplayData(dataToLoad);
        setReplayStepIndex(-1);
        setTrickCards([]);
        setCommunications({});
        setCurrentMilestoneId(milestoneId || null);
        let savedMilestone = milestones.find((m)=>m.episode === milestoneId);
        if (savedMilestone) {
            if (savedMilestone.initial_missions) setMissions(savedMilestone.initial_missions.map((m)=>({
                    ...m,
                    status: 'PENDING'
                })));
            if (savedMilestone.initial_hands) {
                setAllCards(savedMilestone.initial_hands.map((c)=>({
                        id: `${c.color}-${c.value}`,
                        color: c.color,
                        value: Number(c.value),
                        owner: c.owner,
                        status: 'HAND',
                        zIndex: 0,
                        tableRotation: 0,
                        winnerIndex: undefined
                    })));
            }
        }
        setCurrentStepText(`Replay ${milestoneId || ''} chargé.`);
    };
    const nextReplayStep = ()=>{
        if (!replayData || replayStepIndex >= replayData.length - 1) return;
        let nextIdx = replayStepIndex + 1;
        let move = replayData[nextIdx];
        if (move.action_type === 'COLLECT') {
            setAllCards((prev)=>prev.map((c)=>c.status === 'TABLE' ? {
                        ...c,
                        status: 'WON',
                        winnerIndex: move.player,
                        zIndex: 500
                    } : c));
            setReplayStepIndex(nextIdx);
            return;
        }
        if (move.card && move.action_type === 'PLAY') {
            const cardId = `${move.card.color}-${move.card.value}`;
            setAllCards((prev)=>prev.map((c)=>c.id === cardId ? {
                        ...c,
                        status: 'TABLE',
                        zIndex: 200
                    } : c));
        }
        setReplayStepIndex(nextIdx);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let interval;
        if (isAutoPlaying && !isReplayMode && !isTraining) {
            interval = setInterval(()=>{
                if (!isThinking && trickCards.length < 4) playOneMove();
            }, 1500);
        }
        return ()=>clearInterval(interval);
    }, [
        isAutoPlaying,
        isThinking,
        trickCards,
        isReplayMode,
        isTraining,
        allCards,
        activePlayer
    ]);
    return {
        allCards,
        missions,
        communications,
        logs,
        currentStepText,
        activePlayer,
        isThinking,
        isServerWakingUp,
        isTraining,
        trainingStats,
        milestones,
        isReplayMode,
        replayData,
        currentMilestoneId,
        isAutoPlaying,
        isDevMode: IS_DEV_MODE,
        initializeMission,
        playOneMove,
        toggleAutoPlay: ()=>setIsAutoPlaying(!isAutoPlaying),
        onReset: resetGameStates,
        startTraining,
        loadReplay,
        nextReplayStep,
        exitReplay: ()=>{
            setIsReplayMode(false);
            resetGameStates();
        }
    };
};
}),
"[project]/frontend/components/ai/Sidebar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AISidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$data$2f$real_missions$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/data/real_missions.ts [app-ssr] (ecmascript)");
;
;
;
function AISidebar({ currentStepText, logs, isThinking, activePlayer, isServerWakingUp, isDevMode, isTraining, isAutoPlaying, isReplayMode, trainingStats, milestones, currentMilestoneId, onReset, onStartTraining, onLoadReplay, onNextReplayStep, onExitReplay, initializeMission, playOneMove, toggleAutoPlay, onBackToMenu }) {
    // États locaux pour le formulaire
    const [selectedMission, setSelectedMission] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1);
    const [trainCount, setTrainCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1000);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-96 bg-[#0f172a] border-r border-gray-800 flex flex-col h-full shadow-2xl z-20 font-sans text-gray-300",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4 border-b border-gray-800 bg-[#1e293b] flex justify-between items-center shadow-md z-30",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-xl font-black text-white tracking-wider flex items-center gap-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: [
                                        "Novia ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-purple-400",
                                            children: "Agent"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/components/ai/Sidebar.tsx",
                                            lineNumber: 66,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/components/ai/Sidebar.tsx",
                                    lineNumber: 66,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/frontend/components/ai/Sidebar.tsx",
                                lineNumber: 65,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-[9px] text-gray-500 font-bold tracking-widest mt-0.5 flex gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Q-LEARNING V2"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/components/ai/Sidebar.tsx",
                                        lineNumber: 69,
                                        columnNumber: 25
                                    }, this),
                                    isDevMode && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-yellow-500 bg-yellow-900/20 px-1 rounded",
                                        children: "DEV MODE"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/components/ai/Sidebar.tsx",
                                        lineNumber: 70,
                                        columnNumber: 39
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/components/ai/Sidebar.tsx",
                                lineNumber: 68,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/components/ai/Sidebar.tsx",
                        lineNumber: 64,
                        columnNumber: 17
                    }, this),
                    onBackToMenu && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onBackToMenu,
                        className: "text-[10px] bg-gray-800 hover:bg-gray-700 text-gray-400 hover:text-white px-3 py-1.5 rounded border border-gray-700 transition-all uppercase font-bold flex items-center gap-1 group",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Menu"
                            }, void 0, false, {
                                fileName: "[project]/frontend/components/ai/Sidebar.tsx",
                                lineNumber: 79,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "group-hover:-translate-x-0.5 transition-transform",
                                children: "↩"
                            }, void 0, false, {
                                fileName: "[project]/frontend/components/ai/Sidebar.tsx",
                                lineNumber: 80,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/components/ai/Sidebar.tsx",
                        lineNumber: 75,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/components/ai/Sidebar.tsx",
                lineNumber: 63,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-5 border-b border-gray-800 bg-[#1e293b]/50 relative space-y-4",
                children: isServerWakingUp ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-amber-500/5 border border-amber-500/20 rounded-lg p-4 flex flex-col items-center text-center gap-3 animate-pulse",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-6 h-6 border-2 border-amber-500 border-t-transparent rounded-full animate-spin"
                        }, void 0, false, {
                            fileName: "[project]/frontend/components/ai/Sidebar.tsx",
                            lineNumber: 94,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-amber-500 font-bold text-xs uppercase tracking-wider mb-1",
                                    children: "Démarrage du serveur"
                                }, void 0, false, {
                                    fileName: "[project]/frontend/components/ai/Sidebar.tsx",
                                    lineNumber: 96,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[10px] text-amber-200/60 leading-relaxed",
                                    children: [
                                        "Le système sort de veille (Cold Start).",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/frontend/components/ai/Sidebar.tsx",
                                            lineNumber: 100,
                                            columnNumber: 72
                                        }, this),
                                        "Veuillez patienter, cela peut prendre",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/frontend/components/ai/Sidebar.tsx",
                                            lineNumber: 101,
                                            columnNumber: 70
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-amber-400 font-mono",
                                            children: "30 à 50 secondes"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/components/ai/Sidebar.tsx",
                                            lineNumber: 102,
                                            columnNumber: 33
                                        }, this),
                                        "."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/components/ai/Sidebar.tsx",
                                    lineNumber: 99,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/components/ai/Sidebar.tsx",
                            lineNumber: 95,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/frontend/components/ai/Sidebar.tsx",
                    lineNumber: 93,
                    columnNumber: 21
                }, this) : /* === CONTRÔLES NORMAUX (Si serveur prêt) === */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        !isTraining && !isReplayMode && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-[9px] text-gray-500 uppercase font-bold tracking-wider",
                                    children: "Configuration Mission"
                                }, void 0, false, {
                                    fileName: "[project]/frontend/components/ai/Sidebar.tsx",
                                    lineNumber: 112,
                                    columnNumber: 33
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative group",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            className: "w-full appearance-none bg-gray-900 text-white text-[10px] font-medium p-2.5 pl-3 rounded border border-gray-700 hover:border-gray-500 focus:border-blue-500 outline-none cursor-pointer transition-colors",
                                            value: selectedMission,
                                            onChange: (e)=>setSelectedMission(Number(e.target.value)),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: 0,
                                                    className: "font-bold text-yellow-400 bg-gray-800",
                                                    children: "★ MISSION ALÉATOIRE (Mix)"
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/components/ai/Sidebar.tsx",
                                                    lineNumber: 119,
                                                    columnNumber: 41
                                                }, this),
                                                __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$data$2f$real_missions$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["REAL_MISSION_LOGBOOK"].map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: m.id,
                                                        children: [
                                                            "MISSION ",
                                                            m.id,
                                                            " - ",
                                                            m.description.substring(0, 35),
                                                            m.description.length > 35 ? '...' : ''
                                                        ]
                                                    }, m.id, true, {
                                                        fileName: "[project]/frontend/components/ai/Sidebar.tsx",
                                                        lineNumber: 121,
                                                        columnNumber: 45
                                                    }, this))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/frontend/components/ai/Sidebar.tsx",
                                            lineNumber: 114,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500 text-[8px]",
                                            children: "▼"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/components/ai/Sidebar.tsx",
                                            lineNumber: 126,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/components/ai/Sidebar.tsx",
                                    lineNumber: 113,
                                    columnNumber: 33
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/components/ai/Sidebar.tsx",
                            lineNumber: 111,
                            columnNumber: 29
                        }, this),
                        !isTraining && !isReplayMode && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-2 gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>initializeMission(selectedMission),
                                    className: "col-span-2 h-10 bg-blue-600 hover:bg-blue-500 text-white text-xs font-black tracking-wide rounded shadow-lg transition-all active:scale-95 flex items-center justify-center gap-2 border-t border-blue-400",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "NOUVELLE DONNE"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/components/ai/Sidebar.tsx",
                                            lineNumber: 139,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "🃏"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/components/ai/Sidebar.tsx",
                                            lineNumber: 140,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/components/ai/Sidebar.tsx",
                                    lineNumber: 135,
                                    columnNumber: 33
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: playOneMove,
                                    disabled: isThinking || isAutoPlaying,
                                    className: `h-9 rounded text-[10px] font-bold border transition-all flex items-center justify-center gap-1
                                        ${isThinking ? 'bg-gray-800 text-gray-600 border-gray-700' : 'bg-gray-700 hover:bg-gray-600 text-white border-gray-600'}`,
                                    children: [
                                        isThinking ? '...' : '1 COUP',
                                        " ▶"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/components/ai/Sidebar.tsx",
                                    lineNumber: 144,
                                    columnNumber: 33
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: toggleAutoPlay,
                                    className: `h-9 rounded text-[10px] font-bold border transition-all flex items-center justify-center gap-1
                                        ${isAutoPlaying ? 'bg-red-500/20 text-red-400 border-red-500/50 animate-pulse' : 'bg-green-600/20 hover:bg-green-600/30 text-green-400 border-green-500/30'}`,
                                    children: [
                                        isAutoPlaying ? 'STOP AUTO' : 'AUTO PLAY',
                                        " ⏩"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/components/ai/Sidebar.tsx",
                                    lineNumber: 154,
                                    columnNumber: 33
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/components/ai/Sidebar.tsx",
                            lineNumber: 133,
                            columnNumber: 29
                        }, this),
                        isDevMode && !isTraining && !isReplayMode && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "pt-4 mt-2 border-t border-dashed border-gray-700",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-between items-end mb-2",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[9px] text-yellow-500 font-bold uppercase",
                                        children: "Zone Entraînement (Local)"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/components/ai/Sidebar.tsx",
                                        lineNumber: 170,
                                        columnNumber: 37
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/frontend/components/ai/Sidebar.tsx",
                                    lineNumber: 169,
                                    columnNumber: 33
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "number",
                                            value: trainCount,
                                            onChange: (e)=>setTrainCount(Number(e.target.value)),
                                            className: "w-20 bg-gray-900 border border-yellow-500/30 text-white text-xs font-bold text-center rounded focus:outline-none focus:border-yellow-500 h-9",
                                            step: "100",
                                            min: "100"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/components/ai/Sidebar.tsx",
                                            lineNumber: 173,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>onStartTraining(trainCount, selectedMission),
                                            className: "flex-1 h-9 bg-yellow-700 hover:bg-yellow-600 text-white text-[10px] font-black tracking-wide rounded shadow transition-all active:scale-95 flex items-center justify-center gap-2 border-t border-yellow-500/50",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "LANCER TRAIN"
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/components/ai/Sidebar.tsx",
                                                    lineNumber: 184,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "⚡"
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/components/ai/Sidebar.tsx",
                                                    lineNumber: 185,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/frontend/components/ai/Sidebar.tsx",
                                            lineNumber: 180,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/components/ai/Sidebar.tsx",
                                    lineNumber: 172,
                                    columnNumber: 33
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/components/ai/Sidebar.tsx",
                            lineNumber: 168,
                            columnNumber: 29
                        }, this)
                    ]
                }, void 0, true)
            }, void 0, false, {
                fileName: "[project]/frontend/components/ai/Sidebar.tsx",
                lineNumber: 88,
                columnNumber: 13
            }, this),
            isTraining && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-5 border-b border-gray-800 bg-[#0f172a] animate-fade-in space-y-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between items-baseline text-[10px] font-mono font-bold text-gray-400",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-white animate-pulse",
                                children: "TRAINING..."
                            }, void 0, false, {
                                fileName: "[project]/frontend/components/ai/Sidebar.tsx",
                                lineNumber: 202,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    "SESSION: ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-blue-400",
                                        children: trainingStats?.total_lifetime_games
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/components/ai/Sidebar.tsx",
                                        lineNumber: 203,
                                        columnNumber: 40
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/components/ai/Sidebar.tsx",
                                lineNumber: 203,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/components/ai/Sidebar.tsx",
                        lineNumber: 201,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative w-full h-2 bg-gray-900 rounded-full overflow-hidden border border-white/5",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute top-0 left-0 h-full bg-linear-to-r from-purple-600 to-blue-500 transition-all duration-300",
                            style: {
                                width: `${(trainingStats?.episode || 0) / (trainingStats?.max_episodes || 1) * 100}%`
                            }
                        }, void 0, false, {
                            fileName: "[project]/frontend/components/ai/Sidebar.tsx",
                            lineNumber: 208,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/frontend/components/ai/Sidebar.tsx",
                        lineNumber: 207,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 gap-2 mt-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-black/30 p-2 rounded border border-white/5 flex flex-col items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[8px] text-gray-500 uppercase font-bold",
                                        children: "Score Moyen"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/components/ai/Sidebar.tsx",
                                        lineNumber: 216,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `text-base font-black font-mono ${(trainingStats?.avg_reward || 0) > 0 ? 'text-green-400' : 'text-red-400'}`,
                                        children: trainingStats?.avg_reward?.toFixed(1) || '0.0'
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/components/ai/Sidebar.tsx",
                                        lineNumber: 217,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/components/ai/Sidebar.tsx",
                                lineNumber: 215,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-black/30 p-2 rounded border border-white/5 flex flex-col items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[8px] text-gray-500 uppercase font-bold",
                                        children: "Exploration"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/components/ai/Sidebar.tsx",
                                        lineNumber: 222,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-base font-black font-mono text-blue-400",
                                        children: [
                                            ((trainingStats?.epsilon || 0) * 100).toFixed(1),
                                            "%"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/components/ai/Sidebar.tsx",
                                        lineNumber: 223,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/components/ai/Sidebar.tsx",
                                lineNumber: 221,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/components/ai/Sidebar.tsx",
                        lineNumber: 214,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/components/ai/Sidebar.tsx",
                lineNumber: 200,
                columnNumber: 17
            }, this),
            isReplayMode && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4 bg-blue-950/20 border-b border-blue-500/20 animate-slide-in",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between items-center mb-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[8px] text-blue-400 font-bold uppercase tracking-wider",
                                        children: "Mode Replay"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/components/ai/Sidebar.tsx",
                                        lineNumber: 236,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs font-black text-white",
                                        children: [
                                            "ARCHIVE #",
                                            currentMilestoneId
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/components/ai/Sidebar.tsx",
                                        lineNumber: 237,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/components/ai/Sidebar.tsx",
                                lineNumber: 235,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onExitReplay,
                                className: "text-red-400 hover:text-white hover:bg-red-500/20 text-[9px] font-bold px-2 py-1 rounded transition-colors border border-transparent hover:border-red-500/30",
                                children: "FERMER"
                            }, void 0, false, {
                                fileName: "[project]/frontend/components/ai/Sidebar.tsx",
                                lineNumber: 239,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/components/ai/Sidebar.tsx",
                        lineNumber: 234,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onNextReplayStep,
                        className: "w-full py-3 bg-blue-600 hover:bg-blue-500 text-white text-xs font-black rounded shadow border-t border-blue-400 active:scale-[0.98] transition-all",
                        children: "ÉTAPE SUIVANTE ▶"
                    }, void 0, false, {
                        fileName: "[project]/frontend/components/ai/Sidebar.tsx",
                        lineNumber: 243,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/components/ai/Sidebar.tsx",
                lineNumber: 233,
                columnNumber: 17
            }, this),
            !isReplayMode && milestones.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4 border-b border-gray-800 bg-[#1e293b]/30",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-[9px] font-black text-gray-500 mb-2 uppercase flex justify-between items-center tracking-widest",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Archives (Meilleures parties)"
                            }, void 0, false, {
                                fileName: "[project]/frontend/components/ai/Sidebar.tsx",
                                lineNumber: 258,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "bg-gray-800 text-gray-300 px-1.5 py-0.5 rounded text-[8px]",
                                children: milestones.length
                            }, void 0, false, {
                                fileName: "[project]/frontend/components/ai/Sidebar.tsx",
                                lineNumber: 259,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/components/ai/Sidebar.tsx",
                        lineNumber: 257,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-3 gap-2 max-h-32 overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-gray-700",
                        children: milestones.map((m, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>onLoadReplay(m.replay, m.episode),
                                className: "bg-gray-800/50 hover:bg-gray-700 border border-gray-700 hover:border-blue-500 rounded p-1.5 flex flex-col items-center transition-all group relative overflow-hidden",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[8px] text-blue-300/70 font-bold group-hover:text-blue-300 mb-0.5",
                                        children: [
                                            "#",
                                            m.episode
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/components/ai/Sidebar.tsx",
                                        lineNumber: 268,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `text-[10px] font-black font-mono ${m.reward > 0 ? "text-green-400" : "text-red-400"}`,
                                        children: m.reward.toFixed(0)
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/components/ai/Sidebar.tsx",
                                        lineNumber: 269,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, i, true, {
                                fileName: "[project]/frontend/components/ai/Sidebar.tsx",
                                lineNumber: 263,
                                columnNumber: 29
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/frontend/components/ai/Sidebar.tsx",
                        lineNumber: 261,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/components/ai/Sidebar.tsx",
                lineNumber: 256,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-3 border-b border-gray-800 bg-[#0f172a] shadow-inner flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-xs font-bold text-blue-400 flex items-center gap-2",
                        children: [
                            isThinking ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-3 h-3 border-2 border-blue-400 border-t-transparent rounded-full animate-spin"
                            }, void 0, false, {
                                fileName: "[project]/frontend/components/ai/Sidebar.tsx",
                                lineNumber: 284,
                                columnNumber: 24
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-blue-500",
                                children: "ℹ"
                            }, void 0, false, {
                                fileName: "[project]/frontend/components/ai/Sidebar.tsx",
                                lineNumber: 286,
                                columnNumber: 24
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "truncate max-w-50",
                                children: currentStepText
                            }, void 0, false, {
                                fileName: "[project]/frontend/components/ai/Sidebar.tsx",
                                lineNumber: 288,
                                columnNumber: 20
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/components/ai/Sidebar.tsx",
                        lineNumber: 282,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onReset,
                        className: "text-[9px] text-red-500/50 hover:text-red-400 uppercase font-bold",
                        children: "Reset"
                    }, void 0, false, {
                        fileName: "[project]/frontend/components/ai/Sidebar.tsx",
                        lineNumber: 290,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/components/ai/Sidebar.tsx",
                lineNumber: 281,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 overflow-y-auto p-3 space-y-1.5 font-mono text-[9px] text-gray-500 bg-black/20 scrollbar-thin scrollbar-thumb-gray-800",
                children: [
                    logs.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center italic opacity-30 mt-10",
                        children: "En attente d'actions..."
                    }, void 0, false, {
                        fileName: "[project]/frontend/components/ai/Sidebar.tsx",
                        lineNumber: 296,
                        columnNumber: 39
                    }, this),
                    logs.map((log, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "border-l-2 border-gray-800 pl-2 hover:border-gray-600 hover:text-gray-300 transition-colors wrap-break-word leading-tight",
                            children: log
                        }, i, false, {
                            fileName: "[project]/frontend/components/ai/Sidebar.tsx",
                            lineNumber: 298,
                            columnNumber: 21
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/components/ai/Sidebar.tsx",
                lineNumber: 295,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-1 bg-black text-[8px] text-center text-gray-700 font-mono uppercase tracking-widest",
                children: [
                    "Novia Neural v2.0 • ",
                    isDevMode ? 'Local Dev' : 'Prod Cloud'
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/components/ai/Sidebar.tsx",
                lineNumber: 305,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/components/ai/Sidebar.tsx",
        lineNumber: 58,
        columnNumber: 9
    }, this);
}
}),
"[project]/frontend/components/ai/GameBoard.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AIGameBoard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$Card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/components/Card.tsx [app-ssr] (ecmascript)");
;
;
;
// =================================================================================
// 🛠️ CONFIGURATION 1 : ZONES D'INFO (Missions + Slot Indice)
// =================================================================================
const INFO_POSITIONS = {
    0: {
        x: 150,
        y: 190,
        rotation: 0
    },
    1: {
        x: -120,
        y: 40,
        rotation: 90
    },
    2: {
        x: 150,
        y: -110,
        rotation: 180
    },
    3: {
        x: 420,
        y: 40,
        rotation: -90
    }
};
// =================================================================================
// 🛠️ CONFIGURATION 2 : CENTRE DES MAINS
// =================================================================================
const HAND_POSITIONS = {
    0: {
        x: 0,
        y: 260,
        rotation: 0
    },
    1: {
        x: -380,
        y: 0,
        rotation: 90
    },
    2: {
        x: 0,
        y: -260,
        rotation: 180
    },
    3: {
        x: 380,
        y: 0,
        rotation: -90
    }
};
// =================================================================================
// 🛠️ CONFIGURATION 3 : OFFSET DES CARTES COMMUNIQUÉES
// =================================================================================
const COMM_CARD_OFFSETS = {
    0: {
        x: -110,
        y: -40
    },
    1: {
        x: 0,
        y: 150
    },
    2: {
        x: 190,
        y: 40
    },
    3: {
        x: 80,
        y: -150
    }
};
// =================================================================================
// 🛠️ CONFIGURATION 4 : POSITION DU JETON SUR LA CARTE
// =================================================================================
const TOKEN_POSITIONS_CONFIG = {
    0: {
        TOP: {
            x: 0,
            y: -45
        },
        MID: {
            x: 30,
            y: 0
        },
        BOT: {
            x: 0,
            y: 45
        }
    },
    1: {
        TOP: {
            x: 0,
            y: -45
        },
        MID: {
            x: 30,
            y: 0
        },
        BOT: {
            x: 0,
            y: 45
        }
    },
    2: {
        TOP: {
            x: 0,
            y: -45
        },
        MID: {
            x: 30,
            y: 0
        },
        BOT: {
            x: 0,
            y: 45
        }
    },
    3: {
        TOP: {
            x: 0,
            y: -45
        },
        MID: {
            x: 30,
            y: 0
        },
        BOT: {
            x: 0,
            y: 45
        }
    }
};
const MissionToken = ({ mission })=>{
    const statusClass = mission.status === 'SUCCESS' ? 'border-green-500 shadow-[0_0_15px_rgba(34,197,94,0.5)] bg-green-900/80' : mission.status === 'FAILED' ? 'border-red-500 opacity-60 bg-red-900/50' : 'border-gray-500 bg-gray-900';
    const token = mission.token;
    const isSpecial = mission.cardColor === 'Special' || mission.cardValue === 0;
    const specialLabels = {
        'NO_TRICKS': '0 PLI',
        'NO_TRICKS_PLAYER': '0 PLI (J)',
        'ALL_ROCKETS': '🚀 ALL',
        'SPECIFIC_WIN_1': 'WIN 1',
        'NO_9_WIN': 'NO 9'
    };
    const label = token && specialLabels[token] || token;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `relative w-10 h-14 rounded border-2 ${statusClass} flex flex-col items-center justify-center transform transition-all z-20 shrink-0 select-none`,
        children: [
            !isSpecial && token !== 'None' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute -top-3 -right-3 bg-purple-600 rounded-full w-5 h-5 flex items-center justify-center text-[10px] text-white font-bold shadow border border-white/20 z-30",
                children: token === 'Omega' ? 'Ω' : token
            }, void 0, false, {
                fileName: "[project]/frontend/components/ai/GameBoard.tsx",
                lineNumber: 63,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0)),
            !isSpecial ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `w-full h-1.5 mb-1 ${mission.cardColor === 'Pink' ? 'bg-pink-500' : mission.cardColor === 'Green' ? 'bg-green-500' : mission.cardColor === 'Blue' ? 'bg-blue-600' : mission.cardColor === 'Yellow' ? 'bg-yellow-400' : mission.cardColor === 'Rocket' ? 'bg-gray-700' : 'bg-gray-600'}`
                    }, void 0, false, {
                        fileName: "[project]/frontend/components/ai/GameBoard.tsx",
                        lineNumber: 70,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-white font-bold text-lg leading-none",
                        children: mission.cardValue
                    }, void 0, false, {
                        fileName: "[project]/frontend/components/ai/GameBoard.tsx",
                        lineNumber: 71,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-center justify-center h-full w-full p-0.5 text-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-[8px] font-black text-gray-300 leading-tight uppercase",
                    children: label
                }, void 0, false, {
                    fileName: "[project]/frontend/components/ai/GameBoard.tsx",
                    lineNumber: 75,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/frontend/components/ai/GameBoard.tsx",
                lineNumber: 74,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0)),
            mission.status === 'SUCCESS' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute -bottom-2 -left-2 bg-white border border-green-500 rounded-full w-5 h-5 flex items-center justify-center shadow-md z-40",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-green-600 font-bold text-xs",
                    children: "✔"
                }, void 0, false, {
                    fileName: "[project]/frontend/components/ai/GameBoard.tsx",
                    lineNumber: 79,
                    columnNumber: 192
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/frontend/components/ai/GameBoard.tsx",
                lineNumber: 79,
                columnNumber: 46
            }, ("TURBOPACK compile-time value", void 0)),
            mission.status === 'FAILED' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute -bottom-2 -right-2 bg-white border border-red-500 rounded-full w-5 h-5 flex items-center justify-center shadow-md z-40",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-red-500 font-bold text-xs",
                    children: "✕"
                }, void 0, false, {
                    fileName: "[project]/frontend/components/ai/GameBoard.tsx",
                    lineNumber: 80,
                    columnNumber: 190
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/frontend/components/ai/GameBoard.tsx",
                lineNumber: 80,
                columnNumber: 45
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/components/ai/GameBoard.tsx",
        lineNumber: 61,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const ClueSlot = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-12 h-16 relative shrink-0 flex items-center justify-center",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 border-2 border-dashed border-white/10 rounded flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-[9px] text-white/20 font-medium tracking-widest text-center",
                children: "INDICE"
            }, void 0, false, {
                fileName: "[project]/frontend/components/ai/GameBoard.tsx",
                lineNumber: 88,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/frontend/components/ai/GameBoard.tsx",
            lineNumber: 87,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/frontend/components/ai/GameBoard.tsx",
        lineNumber: 86,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
const CommunicationToken = ({ type, playerIndex })=>{
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const timer = setTimeout(()=>setIsVisible(true), 500);
        return ()=>clearTimeout(timer);
    }, []);
    const playerConfig = TOKEN_POSITIONS_CONFIG[playerIndex];
    const pos = playerConfig[type] || {
        x: 0,
        y: 0
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `absolute w-7 h-7 bg-green-500 rounded-full border-2 border-green-300 shadow-[0_0_15px_rgba(34,197,94,0.9)] z-1000 transition-all duration-500 ease-out ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`,
        style: {
            transform: `translate(-50%, -50%) translate(${pos.x}px, ${pos.y}px)`
        }
    }, void 0, false, {
        fileName: "[project]/frontend/components/ai/GameBoard.tsx",
        lineNumber: 101,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
function AIGameBoard({ allCards = [], missions = [], probabilities = {}, suggestedCardId, activePlayer = 0, isTraining = false, isAutoPlaying = false, isReplayMode = false, communications = {} }) {
    const HAND_RADIUS = 600;
    const ANGLE_STEP = 5;
    const getCardStyle = (card)=>{
        // 1. VICTOIRE
        if (card.status === 'WON') {
            const winPositions = [
                `translate(0px, 600px)`,
                `translate(-800px, 0px)`,
                `translate(0px, -600px)`,
                `translate(800px, 0px)`
            ];
            return {
                transform: `translate(-50%, -50%) ${winPositions[card.winnerIndex || 0]} scale(0.4)`,
                opacity: 0,
                zIndex: 500,
                transition: 'transform 0.8s ease-in-out, opacity 0.8s ease-in-out'
            };
        }
        // 2. TABLE (Cartes jouées)
        if (card.status === 'TABLE') {
            const rX = card.tableRotation * 5 % 15 - 7;
            const rY = card.tableRotation * 7 % 15 - 7;
            return {
                transform: `translate(-50%, -50%) translate(${rX}px, ${rY}px) rotate(${card.tableRotation}deg) scale(1.1)`,
                opacity: 1,
                zIndex: card.zIndex,
                transition: 'transform 0.5s ease-in-out, opacity 0.5s ease-in-out'
            };
        }
        // 3. COMMUNICATION
        if (card.status === 'COMMUNICATED') {
            const infoPos = INFO_POSITIONS[card.owner];
            const offset = COMM_CARD_OFFSETS[card.owner] || {
                x: 0,
                y: 0
            };
            const rad = infoPos.rotation * Math.PI / 180;
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
        const angle = (myIndex - (cardsInHand.length - 1) / 2) * ANGLE_STEP;
        const pos = HAND_POSITIONS[card.owner] || {
            x: 0,
            y: 0,
            rotation: 0
        };
        const centerHTML = `translate(calc(-50% + ${pos.x}px), calc(-50% + ${pos.y}px))`;
        return {
            transform: `${centerHTML} rotate(${pos.rotation}deg) translate(0px, ${HAND_RADIUS}px) rotate(${angle}deg) translate(0px, -${HAND_RADIUS}px)`,
            opacity: 1,
            zIndex: myIndex,
            transition: 'transform 0.5s ease-out'
        };
    };
    const getInfoZoneStyle = (playerIndex)=>{
        const pos = INFO_POSITIONS[playerIndex];
        return {
            transform: `translate(-50%, -50%) translate(${pos.x}px, ${pos.y}px) rotate(${pos.rotation}deg)`
        };
    };
    // Logique d'affichage des textes d'ambiance
    const showIdleText = !isTraining && !isReplayMode && allCards.length === 0;
    const showProcessingText = isTraining || isAutoPlaying;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full h-screen relative bg-[#1e293b] overflow-hidden shadow-inner flex items-center justify-center select-none font-sans",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 flex items-center justify-center pointer-events-none z-1000",
                children: [
                    showIdleText && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "animate-fade-in text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-3xl font-bold text-blue-400 mb-2 drop-shadow-md",
                                children: "Novia - Mode Démo"
                            }, void 0, false, {
                                fileName: "[project]/frontend/components/ai/GameBoard.tsx",
                                lineNumber: 212,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-400 font-medium drop-shadow",
                                children: "Choisissez une mission pour voir l'IA jouer"
                            }, void 0, false, {
                                fileName: "[project]/frontend/components/ai/GameBoard.tsx",
                                lineNumber: 213,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/components/ai/GameBoard.tsx",
                        lineNumber: 211,
                        columnNumber: 17
                    }, this),
                    showProcessingText && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center animate-pulse bg-black/40 p-4 rounded-xl backdrop-blur-sm border border-purple-500/20",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-5xl mb-2",
                                children: "⚡"
                            }, void 0, false, {
                                fileName: "[project]/frontend/components/ai/GameBoard.tsx",
                                lineNumber: 219,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-xl font-bold text-purple-400 mb-1 drop-shadow-[0_0_10px_rgba(168,85,247,0.5)]",
                                children: "Partie en cours..."
                            }, void 0, false, {
                                fileName: "[project]/frontend/components/ai/GameBoard.tsx",
                                lineNumber: 220,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-300 text-sm",
                                children: "Le réseau de neurones calcule le meilleur coup"
                            }, void 0, false, {
                                fileName: "[project]/frontend/components/ai/GameBoard.tsx",
                                lineNumber: 223,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/components/ai/GameBoard.tsx",
                        lineNumber: 218,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/components/ai/GameBoard.tsx",
                lineNumber: 209,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-0 h-0 flex items-center justify-center",
                children: [
                    allCards.length > 0 && [
                        0,
                        1,
                        2,
                        3
                    ].map((pid)=>{
                        const pMissions = missions.filter((m)=>m.ownerIndex === pid);
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute w-75 h-20 pointer-events-none transition-all duration-500",
                            style: getInfoZoneStyle(pid),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute left-1/2 top-1/2 -translate-y-1/2 w-px h-8 bg-white/20"
                                }, void 0, false, {
                                    fileName: "[project]/frontend/components/ai/GameBoard.tsx",
                                    lineNumber: 239,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute left-1/2 top-1/2 -translate-y-1/2 ml-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ClueSlot, {}, void 0, false, {
                                        fileName: "[project]/frontend/components/ai/GameBoard.tsx",
                                        lineNumber: 240,
                                        columnNumber: 90
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/frontend/components/ai/GameBoard.tsx",
                                    lineNumber: 240,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute right-1/2 top-1/2 -translate-y-1/2 mr-4 flex gap-2 justify-end items-center",
                                    children: pMissions.map((m, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(MissionToken, {
                                            mission: m
                                        }, i, false, {
                                            fileName: "[project]/frontend/components/ai/GameBoard.tsx",
                                            lineNumber: 242,
                                            columnNumber: 54
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/frontend/components/ai/GameBoard.tsx",
                                    lineNumber: 241,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, pid, true, {
                            fileName: "[project]/frontend/components/ai/GameBoard.tsx",
                            lineNumber: 234,
                            columnNumber: 21
                        }, this);
                    }),
                    allCards.map((card)=>{
                        const style = getCardStyle(card);
                        const probKey = `${card.color}-${card.value}`;
                        const prob = probabilities[probKey];
                        const isSuggested = suggestedCardId === probKey;
                        const isThisCommunicated = card.status === 'COMMUNICATED';
                        const commData = communications[card.owner];
                        const showToken = isThisCommunicated && commData && commData.cardId === card.id;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `absolute top-0 left-0 w-20 aspect-2/3`,
                            style: {
                                ...style,
                                willChange: 'transform, opacity',
                                boxShadow: isSuggested ? '0 0 30px 10px rgba(59, 130, 246, 0.7)' : undefined
                            },
                            children: [
                                isSuggested && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute -inset-1 bg-blue-500 rounded-lg animate-pulse blur-sm -z-10"
                                }, void 0, false, {
                                    fileName: "[project]/frontend/components/ai/GameBoard.tsx",
                                    lineNumber: 269,
                                    columnNumber: 41
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$Card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    color: card.color,
                                    value: card.value,
                                    className: "w-full h-full shadow-2xl border border-black/30 rounded-lg"
                                }, void 0, false, {
                                    fileName: "[project]/frontend/components/ai/GameBoard.tsx",
                                    lineNumber: 271,
                                    columnNumber: 25
                                }, this),
                                showToken && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute top-1/2 left-1/2 w-0 h-0 z-50",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CommunicationToken, {
                                        type: commData.type,
                                        playerIndex: card.owner
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/components/ai/GameBoard.tsx",
                                        lineNumber: 276,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/frontend/components/ai/GameBoard.tsx",
                                    lineNumber: 275,
                                    columnNumber: 29
                                }, this),
                                prob !== undefined && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute top-8 left-0 right-0 flex justify-center z-50",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-black/80 backdrop-blur-[2px] rounded px-1.5 py-0.5 shadow border border-white/20",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `text-xs font-black ${prob >= 80 ? 'text-green-400' : prob <= 20 ? 'text-red-400' : 'text-yellow-400'}`,
                                            children: [
                                                prob,
                                                "%"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/frontend/components/ai/GameBoard.tsx",
                                            lineNumber: 284,
                                            columnNumber: 37
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/components/ai/GameBoard.tsx",
                                        lineNumber: 283,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/frontend/components/ai/GameBoard.tsx",
                                    lineNumber: 282,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, card.id, true, {
                            fileName: "[project]/frontend/components/ai/GameBoard.tsx",
                            lineNumber: 260,
                            columnNumber: 21
                        }, this);
                    })
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/components/ai/GameBoard.tsx",
                lineNumber: 228,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/components/ai/GameBoard.tsx",
        lineNumber: 206,
        columnNumber: 5
    }, this);
}
}),
"[project]/frontend/components/GameModeSelector.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>GameModeSelector
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
;
const Icons = {
    Eye: ({ className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            className: className,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"
                }, void 0, false, {
                    fileName: "[project]/frontend/components/GameModeSelector.tsx",
                    lineNumber: 6,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "12",
                    cy: "12",
                    r: "3"
                }, void 0, false, {
                    fileName: "[project]/frontend/components/GameModeSelector.tsx",
                    lineNumber: 7,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/components/GameModeSelector.tsx",
            lineNumber: 5,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0)),
    Brain: ({ className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            className: className,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"
                }, void 0, false, {
                    fileName: "[project]/frontend/components/GameModeSelector.tsx",
                    lineNumber: 12,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"
                }, void 0, false, {
                    fileName: "[project]/frontend/components/GameModeSelector.tsx",
                    lineNumber: 13,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/components/GameModeSelector.tsx",
            lineNumber: 11,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0)),
    Users: ({ className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            className: className,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"
                }, void 0, false, {
                    fileName: "[project]/frontend/components/GameModeSelector.tsx",
                    lineNumber: 18,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "9",
                    cy: "7",
                    r: "4"
                }, void 0, false, {
                    fileName: "[project]/frontend/components/GameModeSelector.tsx",
                    lineNumber: 19,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M22 21v-2a4 4 0 0 0-3-3.87"
                }, void 0, false, {
                    fileName: "[project]/frontend/components/GameModeSelector.tsx",
                    lineNumber: 20,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M16 3.13a4 4 0 0 1 0 7.75"
                }, void 0, false, {
                    fileName: "[project]/frontend/components/GameModeSelector.tsx",
                    lineNumber: 21,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/components/GameModeSelector.tsx",
            lineNumber: 17,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0)),
    Construction: ({ className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            className: className,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                    x: "2",
                    y: "6",
                    width: "20",
                    height: "8",
                    rx: "1"
                }, void 0, false, {
                    fileName: "[project]/frontend/components/GameModeSelector.tsx",
                    lineNumber: 26,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M17 14v7"
                }, void 0, false, {
                    fileName: "[project]/frontend/components/GameModeSelector.tsx",
                    lineNumber: 27,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M7 14v7"
                }, void 0, false, {
                    fileName: "[project]/frontend/components/GameModeSelector.tsx",
                    lineNumber: 28,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M17 3v3"
                }, void 0, false, {
                    fileName: "[project]/frontend/components/GameModeSelector.tsx",
                    lineNumber: 29,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M7 3v3"
                }, void 0, false, {
                    fileName: "[project]/frontend/components/GameModeSelector.tsx",
                    lineNumber: 30,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M10 14 2.3 6.3"
                }, void 0, false, {
                    fileName: "[project]/frontend/components/GameModeSelector.tsx",
                    lineNumber: 31,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "m14 6 7.7 7.7"
                }, void 0, false, {
                    fileName: "[project]/frontend/components/GameModeSelector.tsx",
                    lineNumber: 32,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "m8 6 8 8"
                }, void 0, false, {
                    fileName: "[project]/frontend/components/GameModeSelector.tsx",
                    lineNumber: 33,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/components/GameModeSelector.tsx",
            lineNumber: 25,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0)),
    ChevronRight: ({ className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            className: className,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "m9 18 6-6-6-6"
            }, void 0, false, {
                fileName: "[project]/frontend/components/GameModeSelector.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/frontend/components/GameModeSelector.tsx",
            lineNumber: 37,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
};
function GameModeSelector({ onSelectMode }) {
    // Génération des étoiles
    const [stars, setStars] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const newStars = Array.from({
            length: 100
        }).map(()=>({
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                size: `${Math.random() * 2 + 1}px`,
                delay: `${Math.random() * 5}s`
            }));
        setStars(newStars);
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative w-full min-h-screen bg-[#0B1026] overflow-hidden flex flex-col items-center justify-center font-sans text-white selection:bg-blue-500 selection:text-white",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
        @keyframes drift-subtle {
          0% { transform: translateY(0); }
          50% { transform: translateY(-5px); } 
          100% { transform: translateY(0); }
        }
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
        @keyframes rotate-nebula {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-drift-subtle { animation: drift-subtle 8s ease-in-out infinite; }
        .star { animation: twinkle 4s infinite ease-in-out; }
      `
            }, void 0, false, {
                fileName: "[project]/frontend/components/GameModeSelector.tsx",
                lineNumber: 64,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 flex items-center justify-center pointer-events-none opacity-40",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-200 h-200 bg-linear-to-r from-blue-900 via-indigo-900 to-slate-900 rounded-full blur-[130px]",
                    style: {
                        animation: 'rotate-nebula 120s linear infinite'
                    }
                }, void 0, false, {
                    fileName: "[project]/frontend/components/GameModeSelector.tsx",
                    lineNumber: 83,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/frontend/components/GameModeSelector.tsx",
                lineNumber: 82,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 pointer-events-none z-0",
                children: stars.map((star, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "star absolute bg-blue-100/80 rounded-full shadow-[0_0_2px_#fff]",
                        style: {
                            top: star.top,
                            left: star.left,
                            width: star.size,
                            height: star.size,
                            animationDelay: star.delay
                        }
                    }, i, false, {
                        fileName: "[project]/frontend/components/GameModeSelector.tsx",
                        lineNumber: 91,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/frontend/components/GameModeSelector.tsx",
                lineNumber: 89,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 w-full max-w-7xl px-6 flex flex-col items-center py-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                        className: "text-center mb-14 animate-drift-subtle select-none",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-6xl md:text-8xl font-thin tracking-widest uppercase mb-3 drop-shadow-2xl cursor-default",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]",
                                        children: "NOV"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/components/GameModeSelector.tsx",
                                        lineNumber: 109,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-blue-500 font-light drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]",
                                        children: "IA"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/components/GameModeSelector.tsx",
                                        lineNumber: 110,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/components/GameModeSelector.tsx",
                                lineNumber: 108,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-center gap-3 text-blue-200/60 font-mono text-xs md:text-sm tracking-widest uppercase",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "w-8 h-px bg-blue-500/50"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/components/GameModeSelector.tsx",
                                        lineNumber: 114,
                                        columnNumber: 13
                                    }, this),
                                    "Algorithmes de résolution pour The Crew",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "w-8 h-px bg-blue-500/50"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/components/GameModeSelector.tsx",
                                        lineNumber: 116,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/components/GameModeSelector.tsx",
                                lineNumber: 113,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/components/GameModeSelector.tsx",
                        lineNumber: 107,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>onSelectMode('GOD'),
                                className: "group relative h-85 w-full bg-[#131b36]/60 backdrop-blur-md hover:bg-[#1a2545]/80 border border-white/5 hover:border-purple-400/30 rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_40px_-10px_rgba(168,85,247,0.2)] flex flex-col text-left overflow-hidden",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute top-[-50%] right-[-50%] w-64 h-64 bg-purple-600/20 blur-[60px] rounded-full transition-opacity duration-500 opacity-0 group-hover:opacity-100"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/components/GameModeSelector.tsx",
                                        lineNumber: 127,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-start justify-between mb-6",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center ring-1 ring-purple-500/20 group-hover:bg-purple-500/20 transition-colors",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icons.Eye, {
                                                className: "w-6 h-6 text-purple-300"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/components/GameModeSelector.tsx",
                                                lineNumber: 131,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/components/GameModeSelector.tsx",
                                            lineNumber: 130,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/components/GameModeSelector.tsx",
                                        lineNumber: 129,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-2xl font-medium text-white mb-3",
                                        children: "L'Omniscient"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/components/GameModeSelector.tsx",
                                        lineNumber: 135,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-slate-300 text-sm leading-relaxed mb-auto",
                                        children: "Solveur analytique explorant l'espace complet des états du jeu. Il accède aux cartes cachées pour calculer la séquence mathématiquement optimale."
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/components/GameModeSelector.tsx",
                                        lineNumber: 137,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "pt-4 border-t border-white/5 flex items-center text-xs text-purple-300/80 font-mono group-hover:text-purple-300 transition-colors",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "grow uppercase tracking-wider",
                                                children: "Lancer l'analyse"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/components/GameModeSelector.tsx",
                                                lineNumber: 142,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icons.ChevronRight, {
                                                className: "w-4 h-4 ml-2 opacity-50 group-hover:translate-x-1 transition-transform"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/components/GameModeSelector.tsx",
                                                lineNumber: 143,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/components/GameModeSelector.tsx",
                                        lineNumber: 141,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/components/GameModeSelector.tsx",
                                lineNumber: 122,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>onSelectMode('AI'),
                                className: "group relative h-85 w-full bg-[#131b36]/60 backdrop-blur-md hover:bg-[#1a2545]/80 border border-white/5 hover:border-blue-400/30 rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_40px_-10px_rgba(59,130,246,0.2)] flex flex-col text-left overflow-hidden",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute top-[-50%] right-[-50%] w-64 h-64 bg-blue-600/20 blur-[60px] rounded-full transition-opacity duration-500 opacity-0 group-hover:opacity-100"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/components/GameModeSelector.tsx",
                                        lineNumber: 151,
                                        columnNumber: 14
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-start justify-between mb-6",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center ring-1 ring-blue-500/20 group-hover:bg-blue-500/20 transition-colors",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icons.Brain, {
                                                className: "w-6 h-6 text-blue-300"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/components/GameModeSelector.tsx",
                                                lineNumber: 155,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/components/GameModeSelector.tsx",
                                            lineNumber: 154,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/components/GameModeSelector.tsx",
                                        lineNumber: 153,
                                        columnNumber: 14
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-2xl font-medium text-white mb-3",
                                        children: "Réseau Neuronal"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/components/GameModeSelector.tsx",
                                        lineNumber: 159,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-slate-300 text-sm leading-relaxed mb-auto",
                                        children: "Agent entraîné par apprentissage. Il opère sans connaître les cartes des autres joueurs, simulant une intuition de jeu réaliste."
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/components/GameModeSelector.tsx",
                                        lineNumber: 161,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "pt-4 border-t border-white/5 flex items-center text-xs text-blue-300/80 font-mono group-hover:text-blue-300 transition-colors",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "grow uppercase tracking-wider",
                                                children: "Lancer la simulation"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/components/GameModeSelector.tsx",
                                                lineNumber: 166,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icons.ChevronRight, {
                                                className: "w-4 h-4 ml-2 opacity-50 group-hover:translate-x-1 transition-transform"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/components/GameModeSelector.tsx",
                                                lineNumber: 167,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/components/GameModeSelector.tsx",
                                        lineNumber: 165,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/components/GameModeSelector.tsx",
                                lineNumber: 147,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative h-85 w-full bg-[#0d1221]/40 backdrop-blur-sm border border-white/5 rounded-2xl p-7 flex flex-col text-left overflow-hidden grayscale opacity-70 cursor-not-allowed",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-4 mb-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-12 h-12 bg-slate-700/20 rounded-xl flex items-center justify-center ring-1 ring-slate-600/30",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icons.Users, {
                                                    className: "w-6 h-6 text-slate-400"
                                                }, void 0, false, {
                                                    fileName: "[project]/frontend/components/GameModeSelector.tsx",
                                                    lineNumber: 175,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/components/GameModeSelector.tsx",
                                                lineNumber: 174,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "inline-flex items-center gap-1.5 px-2 py-1 rounded bg-amber-500/10 border border-amber-500/20 text-[9px] text-amber-500 font-bold uppercase tracking-wider",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icons.Construction, {
                                                        className: "w-3 h-3"
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/components/GameModeSelector.tsx",
                                                        lineNumber: 179,
                                                        columnNumber: 17
                                                    }, this),
                                                    " En construction"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/frontend/components/GameModeSelector.tsx",
                                                lineNumber: 178,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/components/GameModeSelector.tsx",
                                        lineNumber: 173,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-2xl font-medium text-slate-400 mb-3",
                                        children: "Mode Hybride"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/components/GameModeSelector.tsx",
                                        lineNumber: 183,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-slate-500 text-sm leading-relaxed mb-auto",
                                        children: "Interface d'expérimentation permettant à un joueur humain de coopérer avec les agents IA pour tester la synergie Homme-Machine."
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/components/GameModeSelector.tsx",
                                        lineNumber: 185,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "pt-4 border-t border-white/5 flex items-center text-xs text-slate-600 font-mono",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "grow uppercase tracking-wider",
                                            children: "Bientôt disponible"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/components/GameModeSelector.tsx",
                                            lineNumber: 190,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/components/GameModeSelector.tsx",
                                        lineNumber: 189,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/components/GameModeSelector.tsx",
                                lineNumber: 171,
                                columnNumber: 12
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/components/GameModeSelector.tsx",
                        lineNumber: 120,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/components/GameModeSelector.tsx",
                lineNumber: 105,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-6 text-slate-400 text-[11px] tracking-[0.2em] uppercase font-medium hover:text-white transition-colors cursor-default",
                children: "Projet Novia • Killian Lacaque"
            }, void 0, false, {
                fileName: "[project]/frontend/components/GameModeSelector.tsx",
                lineNumber: 197,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/components/GameModeSelector.tsx",
        lineNumber: 62,
        columnNumber: 5
    }, this);
}
}),
"[project]/frontend/app/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
// --- IMPORTS MODE DIEU ---
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$hooks$2f$useGodMode$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/hooks/useGodMode.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$god$2f$Sidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/components/god/Sidebar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$god$2f$GameBoard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/components/god/GameBoard.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$god$2f$CardPicker$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/components/god/CardPicker.tsx [app-ssr] (ecmascript)");
// --- IMPORTS MODE AI ---
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$hooks$2f$useAIMode$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/hooks/useAIMode.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$ai$2f$Sidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/components/ai/Sidebar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$ai$2f$GameBoard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/components/ai/GameBoard.tsx [app-ssr] (ecmascript)");
// --- IMPORT COMMUN ---
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$GameModeSelector$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/components/GameModeSelector.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
function Home() {
    const [gameMode, setGameMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const godGame = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$hooks$2f$useGodMode$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useGodMode"])();
    const aiGame = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$hooks$2f$useAIMode$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAiMode"])();
    // --- SÉLECTEUR DE MODE ---
    if (!gameMode) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$GameModeSelector$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            onSelectMode: (mode)=>{
                setGameMode(mode);
                if (mode === 'GOD') godGame.startNewGame();
            }
        }, void 0, false, {
            fileName: "[project]/frontend/app/page.tsx",
            lineNumber: 27,
            columnNumber: 14
        }, this);
    }
    // --- RENDU MODE DIEU ---
    if (gameMode === 'GOD') {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-screen w-screen flex overflow-hidden bg-[#2c3e50] font-sans relative",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$god$2f$Sidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    ...godGame,
                    removeMission: (idx)=>godGame.setMissions((p)=>p.filter((_, i)=>i !== idx)),
                    globalConstraints: godGame.globalConstraints,
                    clearAllHands: godGame.clearAllHands,
                    clearStats: godGame.clearStats,
                    communications: godGame.communications,
                    addCommunication: godGame.addCommunication,
                    gameMode: "GOD",
                    onBackToMenu: ()=>setGameMode(null)
                }, void 0, false, {
                    fileName: "[project]/frontend/app/page.tsx",
                    lineNumber: 37,
                    columnNumber: 13
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$god$2f$GameBoard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    allCards: godGame.allCards,
                    missions: godGame.missions,
                    onPlayerClick: godGame.openEditor
                }, void 0, false, {
                    fileName: "[project]/frontend/app/page.tsx",
                    lineNumber: 49,
                    columnNumber: 13
                }, this),
                godGame.editingPlayer !== null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$god$2f$CardPicker$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    currentPlayer: godGame.editingPlayer,
                    allCards: godGame.allCards,
                    onToggleCard: godGame.toggleCard,
                    onClose: godGame.closeEditor
                }, void 0, false, {
                    fileName: "[project]/frontend/app/page.tsx",
                    lineNumber: 56,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/app/page.tsx",
            lineNumber: 36,
            columnNumber: 9
        }, this);
    }
    // --- RENDU MODE IA ---
    if (gameMode === 'AI') {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-screen w-screen flex overflow-hidden bg-[#111827] font-sans relative",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$ai$2f$Sidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    // --- ÉTATS ---
                    currentStepText: aiGame.currentStepText,
                    logs: aiGame.logs,
                    isThinking: aiGame.isThinking,
                    activePlayer: aiGame.activePlayer,
                    // --- CONNEXION ICI ---
                    // On connecte la variable du hook. Si elle n'existe pas encore dans useAiMode,
                    // cela renverra undefined (donc false), ce qui ne cassera rien.
                    isServerWakingUp: aiGame.isServerWakingUp,
                    // --- MODES ---
                    isDevMode: aiGame.isDevMode,
                    isTraining: aiGame.isTraining,
                    isAutoPlaying: aiGame.isAutoPlaying,
                    isReplayMode: aiGame.isReplayMode,
                    // --- DATA ---
                    trainingStats: aiGame.trainingStats,
                    replayData: aiGame.replayData,
                    milestones: aiGame.milestones,
                    currentMilestoneId: aiGame.currentMilestoneId,
                    // --- ACTIONS REPLAY & TRAINING ---
                    onLoadReplay: aiGame.loadReplay,
                    onNextReplayStep: aiGame.nextReplayStep,
                    onExitReplay: aiGame.exitReplay,
                    onStartTraining: aiGame.startTraining,
                    // --- ACTIONS JEU ---
                    initializeMission: aiGame.initializeMission,
                    playOneMove: aiGame.playOneMove,
                    toggleAutoPlay: aiGame.toggleAutoPlay,
                    onReset: aiGame.onReset,
                    // --- NAVIGATION ---
                    onBackToMenu: ()=>setGameMode(null)
                }, void 0, false, {
                    fileName: "[project]/frontend/app/page.tsx",
                    lineNumber: 71,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$ai$2f$GameBoard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    allCards: aiGame.allCards,
                    missions: aiGame.missions,
                    activePlayer: aiGame.activePlayer,
                    isTraining: aiGame.isTraining,
                    isReplayMode: aiGame.isReplayMode,
                    isAutoPlaying: aiGame.isAutoPlaying,
                    communications: aiGame.communications
                }, void 0, false, {
                    fileName: "[project]/frontend/app/page.tsx",
                    lineNumber: 111,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/app/page.tsx",
            lineNumber: 70,
            columnNumber: 13
        }, this);
    }
    return null;
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__6ea9c3b2._.js.map