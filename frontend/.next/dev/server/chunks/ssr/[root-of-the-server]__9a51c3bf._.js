module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/data/real_missions.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
            } // Tokens: 1, 2
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
        description: "Un joueur (PAS le commandant) ne doit remporter aucun pli.",
        constraints: [
            {
                type: 'NO_TRICKS',
                args: {
                    who: 'RANDOM_NOT_COMMANDER'
                }
            }
        ]
    },
    {
        id: 6,
        description: "3 tâches, ordre relatif (> et >>). Communication interdite.",
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
            },
            {
                type: 'COMMUNICATION',
                args: {
                    mode: 'NONE'
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
            } // Token: Omega
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
        description: "Au moins 1 pli doit être remporté par une carte de valeur 1.",
        constraints: [
            {
                type: 'SPECIFIC_WIN',
                args: {
                    withCardValue: 1,
                    minCount: 1
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
        description: "4 tâches, ordre 1. Le joueur avec la tâche 1 n'est PAS le commandant et ne peut pas communiquer.",
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
            },
            {
                type: 'DISTRIBUTION',
                args: {
                    taskOneTo: 'NOT_COMMANDER'
                }
            },
            {
                type: 'COMMUNICATION',
                args: {
                    who: 'TASK_1_HOLDER',
                    mode: 'NONE'
                }
            }
        ]
    },
    {
        id: 12,
        description: "4 tâches, un Omega. Après le pli 1, chacun donne une carte à droite.",
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
            },
            {
                type: 'GAME_MODIFIER',
                args: {
                    type: 'PASS_CARD',
                    direction: 'RIGHT',
                    when: 'AFTER_TRICK_1'
                }
            }
        ]
    },
    {
        id: 13,
        description: "Chaque fusée doit remporter un pli.",
        constraints: [
            {
                type: 'SPECIFIC_WIN',
                args: {
                    withColor: 'Rocket',
                    mustWinAll: true
                }
            }
        ]
    },
    {
        id: 14,
        description: "4 tâches, ordre >, >>, >>>. Aucune communication.",
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
            },
            {
                type: 'COMMUNICATION',
                args: {
                    mode: 'NONE'
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
        description: "Aucun pli ne doit être remporté avec un 9.",
        constraints: [
            {
                type: 'FORBIDDEN_WIN_CARD',
                args: {
                    value: 9
                }
            }
        ]
    },
    {
        id: 17,
        description: "2 tâches. Aucun pli ne doit être remporté avec un 9.",
        constraints: [
            {
                type: 'TARGET_CARD',
                args: {
                    count: 2
                }
            },
            {
                type: 'FORBIDDEN_WIN_CARD',
                args: {
                    value: 9
                }
            }
        ]
    },
    {
        id: 18,
        description: "5 tâches. Pas de communication avant le 2ème pli.",
        constraints: [
            {
                type: 'TARGET_CARD',
                args: {
                    count: 5
                }
            },
            {
                type: 'COMMUNICATION',
                args: {
                    mode: 'NONE',
                    until: 'TRICK_2_START'
                }
            }
        ]
    },
    {
        id: 19,
        description: "5 tâches, ordre 1. Pas de communication avant le 3ème pli.",
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
            },
            {
                type: 'COMMUNICATION',
                args: {
                    mode: 'NONE',
                    until: 'TRICK_3_START'
                }
            }
        ]
    },
    {
        id: 20,
        description: "2 tâches attribuées à une seule personne (aléatoire).",
        constraints: [
            {
                type: 'TARGET_CARD',
                args: {
                    count: 2
                }
            },
            {
                type: 'DISTRIBUTION',
                args: {
                    mode: 'ALL_TO_ONE_RANDOM'
                }
            }
        ]
    },
    {
        id: 21,
        description: "5 tâches, ordre 1 et 2. Aucune communication.",
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
            },
            {
                type: 'COMMUNICATION',
                args: {
                    mode: 'NONE'
                }
            }
        ]
    },
    {
        id: 22,
        description: "5 tâches, ordre >, >>, >>>, >>>>.",
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
        description: "5 tâches, ordre 1, 2, 3, 4, 5. Deux tâches peuvent être échangées.",
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
            },
            {
                type: 'GAME_MODIFIER',
                args: {
                    type: 'MOVE_TOKEN',
                    count: 1
                }
            }
        ]
    },
    {
        id: 24,
        description: "6 tâches. Le commandant décide qui prend quoi.",
        constraints: [
            {
                type: 'TARGET_CARD',
                args: {
                    count: 6
                }
            },
            {
                type: 'DISTRIBUTION',
                args: {
                    mode: 'COMMANDER_DECIDES'
                }
            }
        ]
    },
    {
        id: 25,
        description: "6 tâches, ordre > et >>. Aucune communication.",
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
            },
            {
                type: 'COMMUNICATION',
                args: {
                    mode: 'NONE'
                }
            }
        ]
    },
    {
        id: 26,
        description: "Au moins deux plis remportés avec une carte de valeur 1.",
        constraints: [
            {
                type: 'SPECIFIC_WIN',
                args: {
                    withCardValue: 1,
                    minCount: 2
                }
            }
        ]
    },
    {
        id: 27,
        description: "3 tâches pour une personne aléatoire (PAS le commandant).",
        constraints: [
            {
                type: 'TARGET_CARD',
                args: {
                    count: 3
                }
            },
            {
                type: 'DISTRIBUTION',
                args: {
                    mode: 'ALL_TO_ONE_NOT_COMMANDER'
                }
            }
        ]
    },
    {
        id: 28,
        description: "6 tâches, ordre 1 et Omega. Pas de communication avant pli 3.",
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
            },
            {
                type: 'COMMUNICATION',
                args: {
                    mode: 'NONE',
                    until: 'TRICK_3_START'
                }
            }
        ]
    },
    {
        id: 29,
        description: "Jamais plus de 2 plis d'écart entre deux joueurs. Pas de communication.",
        constraints: [
            {
                type: 'BALANCE',
                args: {
                    maxDiff: 2
                }
            },
            {
                type: 'COMMUNICATION',
                args: {
                    mode: 'NONE'
                }
            }
        ]
    },
    {
        id: 30,
        description: "6 tâches, ordre >, >>, >>>. Pas de communication avant pli 2.",
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
            },
            {
                type: 'COMMUNICATION',
                args: {
                    mode: 'NONE',
                    until: 'TRICK_2_START'
                }
            }
        ]
    },
    {
        id: 31,
        description: "6 tâches, ordre 1, 2, 3.",
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
        description: "7 tâches. Le commandant distribue.",
        constraints: [
            {
                type: 'TARGET_CARD',
                args: {
                    count: 7
                }
            },
            {
                type: 'DISTRIBUTION',
                args: {
                    mode: 'COMMANDER_DECIDES'
                }
            }
        ]
    },
    {
        id: 33,
        description: "Un volontaire (pas commandant) doit gagner 1 pli exactement (sans fusée).",
        constraints: [
            {
                type: 'TRICK_COUNT',
                args: {
                    who: 'VOLUNTEER_NOT_COMMANDER',
                    count: 1
                }
            },
            {
                type: 'FORBIDDEN_WIN_CARD',
                args: {
                    who: 'VOLUNTEER_NOT_COMMANDER',
                    color: 'Rocket'
                }
            }
        ]
    },
    {
        id: 34,
        description: "Pas plus de 2 plis d'écart. Le commandant gagne le 1er et le dernier pli.",
        constraints: [
            {
                type: 'BALANCE',
                args: {
                    maxDiff: 2
                }
            },
            {
                type: 'SPECIFIC_WIN',
                args: {
                    trick: 1,
                    who: 'COMMANDER'
                }
            },
            {
                type: 'SPECIFIC_WIN',
                args: {
                    trick: 10,
                    who: 'COMMANDER'
                }
            }
        ]
    },
    {
        id: 35,
        description: "7 tâches, ordre >, >>, >>>.",
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
        description: "7 tâches, ordre 1 et 2. Le commandant distribue.",
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
            },
            {
                type: 'DISTRIBUTION',
                args: {
                    mode: 'COMMANDER_DECIDES'
                }
            }
        ]
    },
    {
        id: 37,
        description: "4 tâches pour une seule personne (pas commandant).",
        constraints: [
            {
                type: 'TARGET_CARD',
                args: {
                    count: 4
                }
            },
            {
                type: 'DISTRIBUTION',
                args: {
                    mode: 'ALL_TO_ONE_NOT_COMMANDER'
                }
            }
        ]
    },
    {
        id: 38,
        description: "8 tâches. Pas de communication avant pli 3.",
        constraints: [
            {
                type: 'TARGET_CARD',
                args: {
                    count: 8
                }
            },
            {
                type: 'COMMUNICATION',
                args: {
                    mode: 'NONE',
                    until: 'TRICK_3_START'
                }
            }
        ]
    },
    {
        id: 39,
        description: "8 tâches, ordre >, >>, >>>. Pas de communication.",
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
            },
            {
                type: 'COMMUNICATION',
                args: {
                    mode: 'NONE'
                }
            }
        ]
    },
    {
        id: 40,
        description: "8 tâches, ordre 1, 2, 3. Possibilité de déplacer un jeton.",
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
            },
            {
                type: 'GAME_MODIFIER',
                args: {
                    type: 'MOVE_TOKEN',
                    count: 1
                }
            }
        ]
    },
    {
        id: 41,
        description: "Un joueur (pas commandant) doit gagner le 1er et le dernier pli, et c'est tout.",
        constraints: [
            {
                type: 'TRICK_COUNT',
                args: {
                    who: 'NOT_COMMANDER',
                    count: 2
                }
            },
            {
                type: 'SPECIFIC_WIN',
                args: {
                    trick: 1,
                    who: 'SAME_PLAYER'
                }
            },
            {
                type: 'SPECIFIC_WIN',
                args: {
                    trick: 10,
                    who: 'SAME_PLAYER'
                }
            }
        ]
    },
    {
        id: 42,
        description: "9 tâches.",
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
        description: "9 tâches. Le commandant distribue.",
        constraints: [
            {
                type: 'TARGET_CARD',
                args: {
                    count: 9
                }
            },
            {
                type: 'DISTRIBUTION',
                args: {
                    mode: 'COMMANDER_DECIDES'
                }
            }
        ]
    },
    {
        id: 44,
        description: "Fusée 1 gagne un pli, puis Fusée 2, puis Fusée 3, puis Fusée 4.",
        constraints: [
            {
                type: 'TRICK_SEQUENCE',
                args: {
                    sequence: [
                        'R1',
                        'R2',
                        'R3',
                        'R4'
                    ]
                }
            }
        ]
    },
    {
        id: 45,
        description: "9 tâches, ordre >, >>, >>>.",
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
        description: "Le joueur à gauche de celui qui a le 9 Rose doit gagner toutes les cartes roses.",
        constraints: [
            {
                type: 'SPECIFIC_WIN',
                args: {
                    who: 'LEFT_OF_PINK_9',
                    captureColor: 'Pink',
                    captureAll: true
                }
            }
        ]
    },
    {
        id: 47,
        description: "10 tâches.",
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
        description: "3 tâches, avec Omega (à faire au dernier pli).",
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
        id: 49,
        description: "10 tâches, ordre >, >>, >>>.",
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
        description: "Membre A gagne 4 premiers plis. Membre B le dernier. Les autres gagnent le reste.",
        constraints: [
            {
                type: 'TRICK_COUNT',
                args: {
                    who: 'PLAYER_A',
                    count: 4,
                    tricks: [
                        1,
                        2,
                        3,
                        4
                    ]
                }
            },
            {
                type: 'TRICK_COUNT',
                args: {
                    who: 'PLAYER_B',
                    count: 1,
                    tricks: [
                        10
                    ]
                }
            },
            {
                type: 'TRICK_COUNT',
                args: {
                    who: 'OTHERS',
                    tricks: [
                        5,
                        6,
                        7,
                        8,
                        9
                    ]
                }
            }
        ]
    }
];
}),
"[project]/hooks/useGodMode.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useGameLogic",
    ()=>useGameLogic
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$real_missions$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/real_missions.ts [app-ssr] (ecmascript)");
;
;
const ANIMATION_SPEED = 600;
const TRICK_WAIT_ON_TABLE = 1000;
// Helper interne : Conversion Backend -> Frontend
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
    // --- ÉTATS ---
    const [allCards, setAllCards] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [stats, setStats] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [currentMoveIndex, setCurrentMoveIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isPlaying, setIsPlaying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isThinking, setIsThinking] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [logs, setLogs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [missions, setMissions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [bookMissionId, setBookMissionId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isAutoFinding, setIsAutoFinding] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [editingPlayer, setEditingPlayer] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [globalConstraints, setGlobalConstraints] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [communications, setCommunications] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    // --- REFS ---
    const timerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const abortControllerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // --- LOGS ---
    const addLog = (msg)=>setLogs((prev)=>[
                `> ${msg}`,
                ...prev
            ]);
    // --- ANIMATION LOOP ---
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!isPlaying || !stats) return;
        const playNext = ()=>{
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
    // --- LOGIQUE METIER (Frontend) ---
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
    const startNewGame = async ()=>{
        if (abortControllerRef.current) {
            abortControllerRef.current.abort();
            abortControllerRef.current = null;
        }
        setIsPlaying(false);
        setStats(null);
        setMissions([]);
        setGlobalConstraints([]);
        setCommunications([]);
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
    const addCommunication = (comm)=>{
        // On remplace si le joueur a déjà communiqué (une seule comm par joueur max dans The Crew 1)
        setCommunications((prev)=>[
                ...prev.filter((c)=>c.player !== comm.player),
                comm
            ]);
        addLog(`Joueur ${[
            'Sud',
            'Ouest',
            'Nord',
            'Est'
        ][comm.player]} communique : ${comm.card.color} ${comm.card.value} (${comm.type})`);
    };
    // --- MOTEUR DE GÉNÉRATION DE MISSION (COMPLEXE) ---
    const generateMissionSetup = (missionId, cards)=>{
        const missionDef = __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$real_missions$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["REAL_MISSION_LOGBOOK"].find((m)=>m.id === missionId);
        if (!missionDef) return null;
        // 1. ANALYSE DU TERRAIN (Rôles)
        const commanderCard = cards.find((c)=>c.color === 'Rocket' && c.value === 4);
        const commanderIdx = commanderCard ? commanderCard.owner : 0;
        // Rôles spécifiques (Mission 46: 9 Rose)
        const pink9Card = cards.find((c)=>c.color === 'Pink' && c.value === 9);
        const pink9Owner = pink9Card ? pink9Card.owner : -1;
        // Helper pour résoudre "who" -> index joueur
        const resolvePlayer = (who)=>{
            if (who === 'COMMANDER') return commanderIdx;
            if (who === 'NOT_COMMANDER') return (commanderIdx + 1) % 4; // Simplification pour "un autre"
            if (who === 'COMMANDER_LEFT') return (commanderIdx + 1) % 4;
            if (who === 'COMMANDER_RIGHT') return (commanderIdx + 3) % 4;
            if (who === 'COMMANDER_OPPOSITE') return (commanderIdx + 2) % 4;
            if (who === 'RANDOM_NOT_COMMANDER' || who === 'VOLUNTEER_NOT_COMMANDER') {
                // On prend arbitrairement le voisin de gauche pour le setup auto
                return (commanderIdx + 1) % 4;
            }
            if (who === 'LEFT_OF_PINK_9' && pink9Owner !== -1) return (pink9Owner + 1) % 4;
            // Pour les missions où "A" et "B" sont arbitraires (Mission 50)
            if (who === 'PLAYER_A') return commanderIdx;
            if (who === 'PLAYER_B') return (commanderIdx + 1) % 4;
            if (who === 'OTHERS') return -1; // Cas spécial géré par le backend ou boucle
            return 0; // Fallback
        };
        const newMissions = [];
        const newConstraints = [];
        // 2. PRÉPARATION DES TÂCHES
        const validTaskCards = cards.filter((c)=>c.color !== 'Rocket');
        const shuffledTasks = [
            ...validTaskCards
        ].sort(()=>Math.random() - 0.5);
        let taskIndex = 0;
        // --- PHASE A : DÉTERMINER COMBIEN DE TÂCHES ET QUI LES PREND ---
        let tasksToDistribute = [];
        let distributionMode = 'DEFAULT'; // DEFAULT, ALL_TO_ONE, COMMANDER_DECIDES...
        let distributionTarget = -1;
        // A1. On scanne pour voir s'il y a une règle de distribution
        missionDef.constraints.forEach((c)=>{
            if (c.type === 'DISTRIBUTION') {
                distributionMode = c.args.mode || 'DEFAULT';
                if (c.args.taskOneTo === 'NOT_COMMANDER') {}
                if (distributionMode === 'ALL_TO_ONE_NOT_COMMANDER' || distributionMode === 'ALL_TO_ONE_RANDOM') {
                    distributionTarget = (commanderIdx + 1) % 4;
                }
            }
        });
        // A2. On génère les placeholders de tâches
        missionDef.constraints.forEach((c)=>{
            if (c.type === 'TARGET_CARD') {
                const count = c.args.count || 1;
                for(let i = 0; i < count; i++){
                    tasksToDistribute.push({
                        token: 'None'
                    });
                }
            }
        });
        // A3. On applique les Tokens (ORDRE) sur les placeholders
        let absoluteCount = 0;
        let relativeCount = 0;
        let hasOmega = false;
        missionDef.constraints.forEach((c)=>{
            if (c.type === 'ORDER_ABSOLUTE') {
                for(let i = 0; i < c.args.count; i++){
                    if (tasksToDistribute[i]) tasksToDistribute[i].token = (i + 1).toString();
                }
                absoluteCount = c.args.count;
            }
            if (c.type === 'ORDER_RELATIVE') {
                const tokens = [
                    '>',
                    '>>',
                    '>>>',
                    '>>>>',
                    '>>>>>'
                ];
                // Si on a déjà mis des nombres, on commence après (Missions mixtes)
                let startIdx = absoluteCount;
                if (c.args.startIndex) startIdx = c.args.startIndex; // Cas complexe
                for(let i = 0; i < c.args.count; i++){
                    if (tasksToDistribute[startIdx + i]) tasksToDistribute[startIdx + i].token = tokens[i];
                }
            }
            if (c.type === 'ORDER_OMEGA') {
                hasOmega = true;
                // Omega est souvent la dernière tâche de la liste visuelle
                if (tasksToDistribute.length > 0) {
                    tasksToDistribute[tasksToDistribute.length - 1].token = 'Omega';
                }
            }
        });
        // A4. On assigne les cartes et les propriétaires
        tasksToDistribute.forEach((task, i)=>{
            if (taskIndex >= shuffledTasks.length) return;
            const card = shuffledTasks[taskIndex];
            let owner = 0;
            if (distributionMode === 'DEFAULT') {
                owner = (commanderIdx + i) % 4; // Distribution cyclique classique
            } else if (distributionTarget !== -1) {
                owner = distributionTarget;
            } else if (distributionMode === 'COMMANDER_DECIDES') {
                // Pour l'auto-setup, on simule une décision équilibrée
                owner = (commanderIdx + i) % 4;
            }
            // Cas spécial Mission 11 : Tâche 1 à un non-commandant
            if (task.token === '1' && missionDef.constraints.some((c)=>c.type === 'DISTRIBUTION' && c.args.taskOneTo === 'NOT_COMMANDER')) {
                owner = (commanderIdx + 1) % 4;
            }
            newMissions.push({
                cardColor: card.color,
                cardValue: card.value,
                ownerIndex: owner,
                token: task.token
            });
            taskIndex++;
        });
        // --- PHASE B : LES CONTRAINTES GLOBALES ---
        missionDef.constraints.forEach((c)=>{
            // NO_TRICKS
            if (c.type === 'NO_TRICKS') {
                newConstraints.push({
                    type: 'NO_TRICKS',
                    player: resolvePlayer(c.args.who)
                });
            } else if (c.type === 'TRICK_COUNT') {
                // Cas complexe : Plusieurs joueurs définis (Mission 50)
                if (c.args.who === 'OTHERS' && c.args.tricks) {
                // On ne l'envoie pas au backend car c'est implicite (si A et B ont leurs plis, les autres ont le reste)
                } else if (c.args.tricks) {
                    // Liste de plis spécifiques (ex: 1, 2, 3, 4) -> TRICK_SPECIFIC multiples
                    c.args.tricks.forEach((tNum)=>{
                        newConstraints.push({
                            type: 'TRICK_COUNT',
                            player: resolvePlayer(c.args.who),
                            args: {
                                trick: tNum,
                                who_idx: resolvePlayer(c.args.who)
                            } // On passe trick spécifique
                        });
                    });
                } else {
                    // Compte simple
                    newConstraints.push({
                        type: 'TRICK_COUNT',
                        player: resolvePlayer(c.args.who),
                        count: c.args.count
                    });
                }
            } else if (c.type === 'FORBIDDEN_WIN_CARD') {
                newConstraints.push({
                    type: 'FORBIDDEN_WIN_CARD',
                    args: c.args
                });
            } else if (c.type === 'BALANCE') {
                newConstraints.push({
                    type: 'BALANCE',
                    args: c.args
                });
            } else if (c.type === 'TRICK_SEQUENCE') {
                newConstraints.push({
                    type: 'TRICK_SEQUENCE',
                    args: c.args
                });
            } else if (c.type === 'SPECIFIC_WIN') {
                const player = c.args.who ? resolvePlayer(c.args.who) : undefined;
                // Cas: Gagner pli X (ex: Pli 1)
                if (c.args.trick) {
                    newConstraints.push({
                        type: 'TRICK_COUNT',
                        player: player,
                        args: {
                            trick: c.args.trick,
                            who_idx: player
                        }
                    });
                } else {
                    // Cas: Gagner avec condition (Valeur 1, Couleur...)
                    newConstraints.push({
                        type: 'SPECIFIC_WIN',
                        args: c.args
                    });
                }
            }
        });
        return {
            missions: newMissions,
            constraints: newConstraints
        };
    };
    // --- CHARGER DEPUIS LE LIVRE ---
    const loadMissionFromBook = (id)=>{
        setBookMissionId(id);
        if (allCards.length === 0) return;
        const setup = generateMissionSetup(id, allCards);
        if (setup) {
            setMissions(setup.missions);
            setGlobalConstraints(setup.constraints);
            const desc = __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$real_missions$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["REAL_MISSION_LOGBOOK"].find((m)=>m.id === id)?.description;
            addLog(`Mission ${id} chargée : ${desc?.substring(0, 30)}...`);
        }
    };
    // --- RECHERCHE AUTOMATIQUE (SOLVER SUR DONNES VIRTUELLES) ---
    const autoFindSolution = async ()=>{
        if (bookMissionId === 0) {
            addLog("⚠️ Sélectionnez une mission.");
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
        try {
            while(!found && attempts < MAX_ATTEMPTS){
                if (controller.signal.aborted) break;
                attempts++;
                // A. Donne virtuelle
                const resDeal = await fetch('http://localhost:8000/start-game', {
                    signal: controller.signal
                });
                if (!resDeal.ok) continue;
                const gameData = await resDeal.json();
                // Conversion temporaire pour notre générateur de mission
                const virtualCards = convertBackendToFrontend(gameData);
                // B. Génération Mission pour cette donne
                const setup = generateMissionSetup(bookMissionId, virtualCards);
                if (!setup) break;
                // C. Envoi au solver
                const payload = {
                    player_1: gameData.player_1,
                    player_2: gameData.player_2,
                    player_3: gameData.player_3,
                    player_4: gameData.player_4,
                    missions: setup.missions.map((m)=>({
                            card: {
                                color: m.cardColor,
                                value: m.cardValue
                            },
                            owner: m.ownerIndex,
                            token: m.token
                        })),
                    constraints: setup.constraints
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
                    addLog(`✅ CONFIGURATION GAGNANTE (Essai ${attempts}) !`);
                    // Appliquer à l'UI
                    setAllCards(virtualCards);
                    setMissions(setup.missions);
                    setGlobalConstraints(setup.constraints);
                    setStats(solveData.stats);
                } else if (attempts % 20 === 0) {
                    addLog(`... Essai ${attempts} ...`);
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
    // --- HELPERS BASIQUES ---
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
    const openEditor = (playerIndex)=>{
        setIsPlaying(false);
        setEditingPlayer(playerIndex);
    };
    const closeEditor = ()=>{
        setEditingPlayer(null);
    };
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
    const toggleCard = (color, value)=>{
        if (editingPlayer === null) return;
        setAllCards((prev)=>{
            const cardId = `${color}-${value}`;
            const existsIndex = prev.findIndex((c)=>c.id === cardId);
            if (existsIndex !== -1) {
                const card = prev[existsIndex];
                if (card.owner === editingPlayer) return prev.filter((c)=>c.id !== cardId);
                const newCards = [
                    ...prev
                ];
                newCards[existsIndex] = {
                    ...card,
                    owner: editingPlayer,
                    status: 'HAND',
                    zIndex: 0
                };
                return newCards;
            }
            return [
                ...prev,
                {
                    id: cardId,
                    color: color,
                    value: value,
                    owner: editingPlayer,
                    status: 'HAND',
                    zIndex: 0,
                    tableRotation: Math.random() * 40 - 20,
                    winnerIndex: undefined
                }
            ];
        });
    };
    const clearAllHands = ()=>{
        setAllCards([]);
    };
    const launchSolver = async (mode = 'GOD', agentIdx = 0)=>{
        if (abortControllerRef.current) abortControllerRef.current.abort();
        const controller = new AbortController();
        abortControllerRef.current = controller;
        // Sécurité pour le mode ML qui n'est pas encore codé
        if (mode === 'ML') {
            addLog("⚠️ Le mode Deep Learning n'est pas encore disponible.");
            return;
        }
        setIsThinking(true);
        // En mode GOD, on reset stats. En MCTS, on garde peut-être pour voir l'historique (optionnel)
        if (mode === 'GOD') {
            setStats(null);
            goToStep(-1);
        }
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
        // On ajoute les communications aux contraintes pour le backend (si nécessaire plus tard)
        // Pour l'instant le backend MCTS les attendra potentiellement dans un champ à part ou dans constraints
        // Simplifions en envoyant tout.
        try {
            const res = await fetch('http://localhost:8000/solve-game', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    ...handsForBackend,
                    missions: realMissions,
                    constraints: globalConstraints,
                    mode: mode,
                    agent_player_idx: agentIdx // <--- Envoi de qui joue
                }),
                signal: controller.signal
            });
            if (!res.ok) throw new Error(`HTTP Error: ${res.status}`);
            const data = await res.json();
            if (mode === 'GOD') {
                setStats(data.stats);
                if (data.stats.solutionFound) addLog(`Solution trouvée !`);
                else addLog("Pas de solution trouvée.");
            } else {
                // MODE MCTS : On reçoit juste le prochain coup
                if (data.stats.solutionFound) {
                    const step = data.stats.solution_steps[0];
                    addLog(`🤖 L'agent suggère : ${step.card.color} ${step.card.value}`);
                    // On pourrait afficher ça différemment, mais utilisons stats pour l'instant
                    setStats(data.stats);
                } else {
                    addLog("🤖 L'agent ne sait pas quoi faire...");
                }
            }
        } catch (e) {
            if (e.name === 'AbortError') addLog("Calcul annulé.");
            else addLog(`Erreur Solver: ${e.message}`);
        } finally{
            setIsThinking(false);
            abortControllerRef.current = null;
        }
    };
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
        toggleCard,
        globalConstraints,
        clearAllHands,
        communications,
        addCommunication
    };
};
}),
"[project]/components/TrickHistory.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TrickHistory
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-2 mt-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-xs font-bold text-gray-400 uppercase border-b border-gray-700 pb-1 flex justify-between items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "📝 Détail de la solution"
                    }, void 0, false, {
                        fileName: "[project]/components/TrickHistory.tsx",
                        lineNumber: 33,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
            tricks.map((trick, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-black/30 p-2 rounded border border-white/5 text-[10px] hover:bg-black/40 transition-colors",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between mb-1 text-gray-400 font-mono border-b border-white/5 pb-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: [
                                        "Entame: ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-4 gap-1",
                            children: trick.map((move, j)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col items-center group",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[8px] text-gray-500 mb-0.5 group-hover:text-gray-300 transition-colors",
                                            children: getPlayerName(move.player).substring(0, 1)
                                        }, void 0, false, {
                                            fileName: "[project]/components/TrickHistory.tsx",
                                            lineNumber: 47,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center pt-2",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
}),
"[project]/components/god/Sidebar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Sidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$real_missions$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/real_missions.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$TrickHistory$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/TrickHistory.tsx [app-ssr] (ecmascript)");
;
;
;
;
// --- PETITS COMPOSANTS VISUELS ---
const TokenBadge = ({ token })=>{
    if (token === 'None') return null;
    let styleClass = "";
    let content = token;
    // Logique visuelle des jetons
    if ([
        '1',
        '2',
        '3',
        '4',
        '5'
    ].includes(token)) {
        // Ordre Absolu (Cercle Vert)
        styleClass = "bg-green-600 text-white rounded-full w-6 h-6";
    } else if (token.includes('>')) {
        // Ordre Relatif (Carré Bleu)
        styleClass = "bg-blue-600 text-white rounded w-6 h-6";
    } else if (token === 'Omega') {
        // Omega (Cercle Rouge/Rose)
        styleClass = "bg-pink-600 text-white rounded-full w-6 h-6";
        content = "Ω";
    } else {
        styleClass = "bg-gray-600 text-white px-2 py-0.5 rounded";
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `${styleClass} flex items-center justify-center text-[10px] font-bold shadow-md border border-white/20 shrink-0`,
        children: content
    }, void 0, false, {
        fileName: "[project]/components/god/Sidebar.tsx",
        lineNumber: 58,
        columnNumber: 9
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
    const { startNewGame, bookMissionId, loadMissionFromBook, missions, setMissions, shuffleOwners, shuffleCards, autoFindSolution, isAutoFinding, launchSolver, isThinking, stats, currentMoveIndex, isPlaying, togglePlay, handlePrev, handleNext, logs, allCards, globalConstraints, clearAllHands, communications, addCommunication, gameMode } = props;
    const removeMission = (index)=>setMissions((prev)=>prev.filter((_, i)=>i !== index));
    // État local pour le formulaire de communication
    const [commPlayer, setCommPlayer] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState(0);
    const [commColor, setCommColor] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState('Green');
    const [commValue, setCommValue] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState(1);
    const [commType, setCommType] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState('TOP');
    // État local pour choisir quel agent joue
    const [agentPlayer, setAgentPlayer] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState(0);
    // Fonction wrapper pour lancer le solver avec les bons params
    const handleLaunch = ()=>{
        // On passe les arguments mode et agent à la fonction launchSolver modifiée
        launchSolver(gameMode, agentPlayer);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-[30%] min-w-[300px] bg-gray-900 border-r border-gray-700 flex flex-col z-50 shadow-2xl h-full font-sans",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4 border-b border-gray-800 shrink-0 bg-gray-900",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-xl font-bold text-white tracking-tight",
                    children: [
                        "The Crew ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: gameMode === 'MCTS' ? "text-blue-500" : "text-purple-500",
                            children: gameMode === 'MCTS' ? 'Agent' : 'Solver'
                        }, void 0, false, {
                            fileName: "[project]/components/god/Sidebar.tsx",
                            lineNumber: 104,
                            columnNumber: 30
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/god/Sidebar.tsx",
                    lineNumber: 103,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/god/Sidebar.tsx",
                lineNumber: 102,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 overflow-y-auto p-4 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent space-y-6",
                children: [
                    gameMode === 'MCTS' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-6 bg-blue-900/20 border border-blue-500/30 rounded p-3 animate-fade-in",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-xs font-bold text-blue-300 uppercase mb-2",
                                children: "📡 Communication Radio"
                            }, void 0, false, {
                                fileName: "[project]/components/god/Sidebar.tsx",
                                lineNumber: 115,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-1 mb-3",
                                children: [
                                    communications.map((c, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between items-center bg-black/40 p-1.5 rounded text-xs",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-bold text-gray-300",
                                                    children: [
                                                        'Sud',
                                                        'Ouest',
                                                        'Nord',
                                                        'Est'
                                                    ][c.player]
                                                }, void 0, false, {
                                                    fileName: "[project]/components/god/Sidebar.tsx",
                                                    lineNumber: 121,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: `px-1 rounded ${c.card.color === 'Pink' ? 'bg-pink-600' : c.card.color === 'Green' ? 'bg-green-600' : c.card.color === 'Blue' ? 'bg-blue-600' : 'bg-yellow-500'} text-white`,
                                                    children: c.card.value
                                                }, void 0, false, {
                                                    fileName: "[project]/components/god/Sidebar.tsx",
                                                    lineNumber: 122,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-gray-400 text-[10px]",
                                                    children: c.type === 'TOP' ? 'Unique/Max' : c.type === 'BOTTOM' ? 'Min' : 'Milieu'
                                                }, void 0, false, {
                                                    fileName: "[project]/components/god/Sidebar.tsx",
                                                    lineNumber: 125,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, i, true, {
                                            fileName: "[project]/components/god/Sidebar.tsx",
                                            lineNumber: 120,
                                            columnNumber: 33
                                        }, this)),
                                    communications.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-[10px] text-gray-500 italic",
                                        children: "Silence radio..."
                                    }, void 0, false, {
                                        fileName: "[project]/components/god/Sidebar.tsx",
                                        lineNumber: 130,
                                        columnNumber: 61
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/god/Sidebar.tsx",
                                lineNumber: 118,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-1 mb-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        className: "bg-gray-800 text-white text-[10px] rounded p-1",
                                        value: commPlayer,
                                        onChange: (e)=>setCommPlayer(Number(e.target.value)),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: 0,
                                                children: "Sud"
                                            }, void 0, false, {
                                                fileName: "[project]/components/god/Sidebar.tsx",
                                                lineNumber: 136,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: 1,
                                                children: "Ouest"
                                            }, void 0, false, {
                                                fileName: "[project]/components/god/Sidebar.tsx",
                                                lineNumber: 136,
                                                columnNumber: 63
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: 2,
                                                children: "Nord"
                                            }, void 0, false, {
                                                fileName: "[project]/components/god/Sidebar.tsx",
                                                lineNumber: 136,
                                                columnNumber: 95
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: 3,
                                                children: "Est"
                                            }, void 0, false, {
                                                fileName: "[project]/components/god/Sidebar.tsx",
                                                lineNumber: 136,
                                                columnNumber: 126
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/god/Sidebar.tsx",
                                        lineNumber: 135,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        className: "bg-gray-800 text-white text-[10px] rounded p-1 w-10",
                                        value: commValue,
                                        onChange: (e)=>setCommValue(Number(e.target.value)),
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
                                        ].map((n)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: n,
                                                children: n
                                            }, n, false, {
                                                fileName: "[project]/components/god/Sidebar.tsx",
                                                lineNumber: 139,
                                                columnNumber: 63
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/god/Sidebar.tsx",
                                        lineNumber: 138,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        className: "bg-gray-800 text-white text-[10px] rounded p-1 flex-1",
                                        value: commColor,
                                        onChange: (e)=>setCommColor(e.target.value),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "Blue",
                                                children: "Bleu"
                                            }, void 0, false, {
                                                fileName: "[project]/components/god/Sidebar.tsx",
                                                lineNumber: 142,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "Green",
                                                children: "Vert"
                                            }, void 0, false, {
                                                fileName: "[project]/components/god/Sidebar.tsx",
                                                lineNumber: 142,
                                                columnNumber: 67
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "Pink",
                                                children: "Rose"
                                            }, void 0, false, {
                                                fileName: "[project]/components/god/Sidebar.tsx",
                                                lineNumber: 142,
                                                columnNumber: 102
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "Yellow",
                                                children: "Jaune"
                                            }, void 0, false, {
                                                fileName: "[project]/components/god/Sidebar.tsx",
                                                lineNumber: 142,
                                                columnNumber: 136
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/god/Sidebar.tsx",
                                        lineNumber: 141,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/god/Sidebar.tsx",
                                lineNumber: 134,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setCommType('TOP'),
                                        className: `flex-1 py-1 text-[10px] rounded border ${commType === 'TOP' ? 'bg-blue-600 border-blue-400 text-white' : 'bg-gray-800 border-gray-600 text-gray-400'}`,
                                        children: "Haut"
                                    }, void 0, false, {
                                        fileName: "[project]/components/god/Sidebar.tsx",
                                        lineNumber: 146,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setCommType('MIDDLE'),
                                        className: `flex-1 py-1 text-[10px] rounded border ${commType === 'MIDDLE' ? 'bg-blue-600 border-blue-400 text-white' : 'bg-gray-800 border-gray-600 text-gray-400'}`,
                                        children: "Milieu"
                                    }, void 0, false, {
                                        fileName: "[project]/components/god/Sidebar.tsx",
                                        lineNumber: 147,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setCommType('BOTTOM'),
                                        className: `flex-1 py-1 text-[10px] rounded border ${commType === 'BOTTOM' ? 'bg-blue-600 border-blue-400 text-white' : 'bg-gray-800 border-gray-600 text-gray-400'}`,
                                        children: "Bas"
                                    }, void 0, false, {
                                        fileName: "[project]/components/god/Sidebar.tsx",
                                        lineNumber: 148,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/god/Sidebar.tsx",
                                lineNumber: 145,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>addCommunication({
                                        player: commPlayer,
                                        card: {
                                            color: commColor,
                                            value: commValue
                                        },
                                        type: commType
                                    }),
                                className: "w-full mt-2 bg-blue-700 hover:bg-blue-600 text-white text-xs py-1 rounded shadow",
                                children: "+ Déclarer"
                            }, void 0, false, {
                                fileName: "[project]/components/god/Sidebar.tsx",
                                lineNumber: 150,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/god/Sidebar.tsx",
                        lineNumber: 114,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: startNewGame,
                                className: "bg-gray-800 hover:bg-gray-700 text-gray-200 py-2 rounded text-xs font-bold border border-gray-600 transition-colors",
                                children: "🔄 Nouvelle Donne"
                            }, void 0, false, {
                                fileName: "[project]/components/god/Sidebar.tsx",
                                lineNumber: 161,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: clearAllHands,
                                className: "bg-red-900/20 hover:bg-red-900/40 text-red-300 py-2 rounded text-xs font-bold border border-red-900/30 transition-colors",
                                children: "🧹 Vider table"
                            }, void 0, false, {
                                fileName: "[project]/components/god/Sidebar.tsx",
                                lineNumber: 164,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/god/Sidebar.tsx",
                        lineNumber: 160,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-gray-800/50 p-3 rounded-lg border border-gray-700",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between items-center mb-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-xs font-bold text-gray-400 uppercase tracking-wider flex items-center gap-2",
                                        children: "📖 Livre de Bord"
                                    }, void 0, false, {
                                        fileName: "[project]/components/god/Sidebar.tsx",
                                        lineNumber: 172,
                                        columnNumber: 25
                                    }, this),
                                    bookMissionId > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "bg-purple-900/50 text-purple-300 text-[10px] px-2 py-0.5 rounded border border-purple-500/30",
                                        children: [
                                            "Mission #",
                                            bookMissionId
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/god/Sidebar.tsx",
                                        lineNumber: 175,
                                        columnNumber: 47
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/god/Sidebar.tsx",
                                lineNumber: 171,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                className: "w-full bg-gray-900 text-white text-xs p-2 rounded border border-gray-600 outline-none focus:border-purple-500 mb-2",
                                value: bookMissionId,
                                onChange: (e)=>loadMissionFromBook(Number(e.target.value)),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "0",
                                        children: "-- Sélectionner une mission --"
                                    }, void 0, false, {
                                        fileName: "[project]/components/god/Sidebar.tsx",
                                        lineNumber: 183,
                                        columnNumber: 25
                                    }, this),
                                    __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$real_missions$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["REAL_MISSION_LOGBOOK"].map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: m.id,
                                            children: [
                                                m.id,
                                                ". ",
                                                m.description.substring(0, 40),
                                                "..."
                                            ]
                                        }, m.id, true, {
                                            fileName: "[project]/components/god/Sidebar.tsx",
                                            lineNumber: 185,
                                            columnNumber: 29
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/god/Sidebar.tsx",
                                lineNumber: 178,
                                columnNumber: 21
                            }, this),
                            bookMissionId > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "animate-fade-in",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[10px] text-gray-400 italic leading-relaxed px-1 mb-3 border-l-2 border-purple-500/30 pl-2",
                                        children: [
                                            '"',
                                            __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$real_missions$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["REAL_MISSION_LOGBOOK"].find((m)=>m.id === bookMissionId)?.description,
                                            '"'
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/god/Sidebar.tsx",
                                        lineNumber: 193,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: shuffleOwners,
                                                className: "flex-1 bg-gray-700 hover:bg-gray-600 text-[10px] text-white py-1.5 rounded border border-gray-600 transition",
                                                children: "👤 Mix Joueurs"
                                            }, void 0, false, {
                                                fileName: "[project]/components/god/Sidebar.tsx",
                                                lineNumber: 197,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: shuffleCards,
                                                className: "flex-1 bg-gray-700 hover:bg-gray-600 text-[10px] text-white py-1.5 rounded border border-gray-600 transition",
                                                children: "🃏 Mix Tâches"
                                            }, void 0, false, {
                                                fileName: "[project]/components/god/Sidebar.tsx",
                                                lineNumber: 198,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/god/Sidebar.tsx",
                                        lineNumber: 196,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: autoFindSolution,
                                        disabled: isAutoFinding,
                                        className: `w-full mt-2 py-2 rounded text-xs font-bold border transition flex items-center justify-center gap-2 shadow-lg ${isAutoFinding ? 'bg-purple-900/80 border-purple-500 text-purple-200 animate-pulse cursor-wait' : 'bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white border-transparent'}`,
                                        children: isAutoFinding ? '🎲 Recherche en cours...' : '🎰 Trouver une donne GAGNANTE'
                                    }, void 0, false, {
                                        fileName: "[project]/components/god/Sidebar.tsx",
                                        lineNumber: 200,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/god/Sidebar.tsx",
                                lineNumber: 192,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/god/Sidebar.tsx",
                        lineNumber: 170,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-xs font-bold text-gray-400 uppercase tracking-wider border-b border-gray-700 pb-1",
                                children: "Objectifs de la partie"
                            }, void 0, false, {
                                fileName: "[project]/components/god/Sidebar.tsx",
                                lineNumber: 213,
                                columnNumber: 21
                            }, this),
                            globalConstraints.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: globalConstraints.map((c, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3 bg-gray-800/80 p-2 rounded border-l-4 border-l-yellow-500 border border-gray-700 shadow-sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-xl",
                                                children: c.type === 'NO_TRICKS' ? '🚫' : '🔢'
                                            }, void 0, false, {
                                                fileName: "[project]/components/god/Sidebar.tsx",
                                                lineNumber: 222,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-[10px] font-bold text-gray-400 uppercase",
                                                        children: c.type === 'NO_TRICKS' ? 'Interdiction' : 'Protocole'
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/god/Sidebar.tsx",
                                                        lineNumber: 226,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-xs text-gray-200",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-bold text-white",
                                                                children: [
                                                                    'Sud',
                                                                    'Ouest',
                                                                    'Nord',
                                                                    'Est'
                                                                ][c.player || 0]
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/god/Sidebar.tsx",
                                                                lineNumber: 230,
                                                                columnNumber: 45
                                                            }, this),
                                                            c.type === 'NO_TRICKS' ? ' ne doit faire aucun pli.' : ` doit faire exactement ${c.count} pli(s).`
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/god/Sidebar.tsx",
                                                        lineNumber: 229,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/god/Sidebar.tsx",
                                                lineNumber: 225,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, i, true, {
                                        fileName: "[project]/components/god/Sidebar.tsx",
                                        lineNumber: 221,
                                        columnNumber: 33
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/god/Sidebar.tsx",
                                lineNumber: 219,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: [
                                    missions.map((m, i)=>{
                                        const targetId = `${m.cardColor}-${m.cardValue}`;
                                        const targetCard = allCards.find((c)=>c.id === targetId);
                                        const isAccomplished = targetCard?.status === 'WON' && targetCard?.winnerIndex === m.ownerIndex;
                                        const isFailed = targetCard?.status === 'WON' && targetCard?.winnerIndex !== undefined && targetCard?.winnerIndex !== m.ownerIndex;
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `relative flex items-center gap-2 p-2 rounded border transition-all ${getBorderColor(m.cardColor)} ${isAccomplished ? 'opacity-50 grayscale-[0.5]' : ''}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute top-0 right-0 p-1",
                                                    children: [
                                                        isAccomplished && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-green-400 text-xs",
                                                            children: "✅"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/god/Sidebar.tsx",
                                                            lineNumber: 252,
                                                            columnNumber: 60
                                                        }, this),
                                                        isFailed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-red-400 text-xs",
                                                            children: "❌"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/god/Sidebar.tsx",
                                                            lineNumber: 253,
                                                            columnNumber: 54
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/god/Sidebar.tsx",
                                                    lineNumber: 251,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TokenBadge, {
                                                    token: m.token
                                                }, void 0, false, {
                                                    fileName: "[project]/components/god/Sidebar.tsx",
                                                    lineNumber: 257,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex-1 flex flex-col gap-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center justify-between",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-[10px] text-gray-400 uppercase font-bold",
                                                                    children: "Joueur"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/god/Sidebar.tsx",
                                                                    lineNumber: 263,
                                                                    columnNumber: 45
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                    className: "bg-gray-900 text-white text-[10px] py-0.5 px-1 rounded border border-gray-600 outline-none focus:border-purple-500",
                                                                    value: m.ownerIndex,
                                                                    onChange: (e)=>{
                                                                        const newMissions = [
                                                                            ...missions
                                                                        ];
                                                                        newMissions[i].ownerIndex = Number(e.target.value);
                                                                        setMissions(newMissions);
                                                                    },
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: 0,
                                                                            children: "Sud"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/god/Sidebar.tsx",
                                                                            lineNumber: 269,
                                                                            columnNumber: 49
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: 1,
                                                                            children: "Ouest"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/god/Sidebar.tsx",
                                                                            lineNumber: 269,
                                                                            columnNumber: 79
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: 2,
                                                                            children: "Nord"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/god/Sidebar.tsx",
                                                                            lineNumber: 269,
                                                                            columnNumber: 111
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: 3,
                                                                            children: "Est"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/god/Sidebar.tsx",
                                                                            lineNumber: 269,
                                                                            columnNumber: 142
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/god/Sidebar.tsx",
                                                                    lineNumber: 264,
                                                                    columnNumber: 45
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/god/Sidebar.tsx",
                                                            lineNumber: 262,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex gap-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                    className: "bg-gray-900 text-white text-xs font-bold py-1 px-1 rounded border border-gray-600 outline-none w-12 text-center",
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
                                                                    ].map((n)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: n,
                                                                            children: n
                                                                        }, n, false, {
                                                                            fileName: "[project]/components/god/Sidebar.tsx",
                                                                            lineNumber: 280,
                                                                            columnNumber: 79
                                                                        }, this))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/god/Sidebar.tsx",
                                                                    lineNumber: 275,
                                                                    columnNumber: 45
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
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
                                                                    },
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: "Blue",
                                                                            className: "bg-blue-600",
                                                                            children: "Bleu"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/god/Sidebar.tsx",
                                                                            lineNumber: 288,
                                                                            columnNumber: 49
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: "Green",
                                                                            className: "bg-green-600",
                                                                            children: "Vert"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/god/Sidebar.tsx",
                                                                            lineNumber: 289,
                                                                            columnNumber: 49
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: "Pink",
                                                                            className: "bg-pink-600",
                                                                            children: "Rose"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/god/Sidebar.tsx",
                                                                            lineNumber: 290,
                                                                            columnNumber: 49
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: "Yellow",
                                                                            className: "bg-yellow-500",
                                                                            children: "Jaune"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/god/Sidebar.tsx",
                                                                            lineNumber: 291,
                                                                            columnNumber: 49
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: "Rocket",
                                                                            className: "bg-gray-700",
                                                                            children: "Fusée"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/god/Sidebar.tsx",
                                                                            lineNumber: 292,
                                                                            columnNumber: 49
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/god/Sidebar.tsx",
                                                                    lineNumber: 282,
                                                                    columnNumber: 45
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/god/Sidebar.tsx",
                                                            lineNumber: 274,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/god/Sidebar.tsx",
                                                    lineNumber: 260,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>removeMission(i),
                                                    className: "self-start text-gray-500 hover:text-red-400 text-xs px-1",
                                                    children: "✕"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/god/Sidebar.tsx",
                                                    lineNumber: 298,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, i, true, {
                                            fileName: "[project]/components/god/Sidebar.tsx",
                                            lineNumber: 248,
                                            columnNumber: 33
                                        }, this);
                                    }),
                                    missions.length === 0 && globalConstraints.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-gray-500 text-xs text-center py-6 border border-dashed border-gray-700 rounded bg-gray-800/30",
                                        children: "Aucune mission active"
                                    }, void 0, false, {
                                        fileName: "[project]/components/god/Sidebar.tsx",
                                        lineNumber: 304,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/god/Sidebar.tsx",
                                lineNumber: 240,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setMissions((prev)=>[
                                            ...prev,
                                            {
                                                cardColor: 'Blue',
                                                cardValue: 1,
                                                ownerIndex: 0,
                                                token: 'None'
                                            }
                                        ]),
                                className: "w-full py-2 border border-dashed border-gray-600 text-gray-400 hover:text-white hover:border-gray-400 text-xs rounded transition-colors flex items-center justify-center gap-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "+"
                                    }, void 0, false, {
                                        fileName: "[project]/components/god/Sidebar.tsx",
                                        lineNumber: 314,
                                        columnNumber: 25
                                    }, this),
                                    " Ajouter une tâche"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/god/Sidebar.tsx",
                                lineNumber: 310,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/god/Sidebar.tsx",
                        lineNumber: 212,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-[1px] bg-gray-800 my-4"
                    }, void 0, false, {
                        fileName: "[project]/components/god/Sidebar.tsx",
                        lineNumber: 318,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-4",
                        children: [
                            gameMode === 'MCTS' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between items-center mb-1 px-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] text-gray-400 uppercase font-bold",
                                        children: "Qui réfléchit ?"
                                    }, void 0, false, {
                                        fileName: "[project]/components/god/Sidebar.tsx",
                                        lineNumber: 323,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        className: "bg-gray-800 text-blue-300 text-xs font-bold p-1 rounded border border-blue-500/30 outline-none",
                                        value: agentPlayer,
                                        onChange: (e)=>setAgentPlayer(Number(e.target.value)),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: 0,
                                                children: "🤖 Agent Sud"
                                            }, void 0, false, {
                                                fileName: "[project]/components/god/Sidebar.tsx",
                                                lineNumber: 329,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: 1,
                                                children: "🤖 Agent Ouest"
                                            }, void 0, false, {
                                                fileName: "[project]/components/god/Sidebar.tsx",
                                                lineNumber: 330,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: 2,
                                                children: "🤖 Agent Nord"
                                            }, void 0, false, {
                                                fileName: "[project]/components/god/Sidebar.tsx",
                                                lineNumber: 331,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: 3,
                                                children: "🤖 Agent Est"
                                            }, void 0, false, {
                                                fileName: "[project]/components/god/Sidebar.tsx",
                                                lineNumber: 332,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/god/Sidebar.tsx",
                                        lineNumber: 324,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/god/Sidebar.tsx",
                                lineNumber: 322,
                                columnNumber: 26
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleLaunch,
                                disabled: isThinking,
                                className: `w-full py-4 rounded-lg font-bold text-sm shadow-xl transition-all active:scale-95 
                            ${isThinking ? 'bg-gray-800 text-gray-400 cursor-wait' : gameMode === 'MCTS' ? 'bg-blue-600 hover:bg-blue-500 text-white ring-1 ring-blue-400' : 'bg-purple-600 hover:bg-purple-500 text-white ring-1 ring-purple-400'}`,
                                children: isThinking ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "flex items-center justify-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "animate-spin text-lg",
                                            children: "⚙️"
                                        }, void 0, false, {
                                            fileName: "[project]/components/god/Sidebar.tsx",
                                            lineNumber: 350,
                                            columnNumber: 33
                                        }, this),
                                        " ",
                                        gameMode === 'MCTS' ? 'L\'agent réfléchit...' : 'Calcul en cours...'
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/god/Sidebar.tsx",
                                    lineNumber: 349,
                                    columnNumber: 29
                                }, this) : gameMode === 'MCTS' ? '🧠 DEMANDER À L\'AGENT' : '⚡️ LANCER LE SOLVER'
                            }, void 0, false, {
                                fileName: "[project]/components/god/Sidebar.tsx",
                                lineNumber: 337,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/god/Sidebar.tsx",
                        lineNumber: 320,
                        columnNumber: 17
                    }, this),
                    stats && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-6 bg-gray-800 rounded-lg border border-gray-700 overflow-hidden animate-slide-up",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-gray-900 px-3 py-2 border-b border-gray-700 flex justify-between items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs font-bold text-gray-400 uppercase",
                                        children: "Lecteur de Solution"
                                    }, void 0, false, {
                                        fileName: "[project]/components/god/Sidebar.tsx",
                                        lineNumber: 360,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] bg-purple-900 text-purple-200 px-1.5 rounded",
                                        children: [
                                            currentMoveIndex >= 0 ? Math.ceil(currentMoveIndex + 1) : 0,
                                            " / ",
                                            stats.solution_steps.length
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/god/Sidebar.tsx",
                                        lineNumber: 361,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/god/Sidebar.tsx",
                                lineNumber: 359,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-full h-1.5 bg-gray-700 rounded-full mb-4 overflow-hidden",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 ease-linear",
                                            style: {
                                                width: `${(currentMoveIndex + 1) / stats.solution_steps.length * 100}%`
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/components/god/Sidebar.tsx",
                                            lineNumber: 367,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/god/Sidebar.tsx",
                                        lineNumber: 366,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: handlePrev,
                                                className: "flex-1 bg-gray-700 hover:bg-gray-600 text-white py-2 rounded active:scale-95 transition",
                                                children: "⏮"
                                            }, void 0, false, {
                                                fileName: "[project]/components/god/Sidebar.tsx",
                                                lineNumber: 375,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: togglePlay,
                                                className: `flex-1 py-2 rounded font-bold text-white active:scale-95 transition ${isPlaying ? 'bg-yellow-600 hover:bg-yellow-500' : 'bg-green-600 hover:bg-green-500'}`,
                                                children: isPlaying ? '⏸' : '▶'
                                            }, void 0, false, {
                                                fileName: "[project]/components/god/Sidebar.tsx",
                                                lineNumber: 376,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: handleNext,
                                                className: "flex-1 bg-gray-700 hover:bg-gray-600 text-white py-2 rounded active:scale-95 transition",
                                                children: "⏭"
                                            }, void 0, false, {
                                                fileName: "[project]/components/god/Sidebar.tsx",
                                                lineNumber: 379,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/god/Sidebar.tsx",
                                        lineNumber: 374,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/god/Sidebar.tsx",
                                lineNumber: 364,
                                columnNumber: 25
                            }, this),
                            stats.solutionFound && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "border-t border-gray-700 max-h-[200px] overflow-y-auto bg-black/20 p-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$TrickHistory$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    steps: stats.solution_steps
                                }, void 0, false, {
                                    fileName: "[project]/components/god/Sidebar.tsx",
                                    lineNumber: 385,
                                    columnNumber: 33
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/god/Sidebar.tsx",
                                lineNumber: 384,
                                columnNumber: 29
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/god/Sidebar.tsx",
                        lineNumber: 358,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-4 bg-black/40 rounded p-2 font-mono text-[10px] text-gray-500 border border-white/5 h-[120px] overflow-y-auto",
                        children: logs.map((l, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-0.5 border-l-2 border-transparent hover:border-purple-500 pl-1",
                                children: l
                            }, i, false, {
                                fileName: "[project]/components/god/Sidebar.tsx",
                                lineNumber: 393,
                                columnNumber: 41
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/god/Sidebar.tsx",
                        lineNumber: 392,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/god/Sidebar.tsx",
                lineNumber: 111,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/god/Sidebar.tsx",
        lineNumber: 100,
        columnNumber: 9
    }, this);
}
}),
"[project]/components/Card.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Card
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
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
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    viewBox: "0 0 24 24",
                    fill: "none",
                    className: "w-full h-full opacity-30",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M7 16C7 16 9 18 12 18C15 18 17 16 17 16",
                            stroke: theme.icon,
                            strokeWidth: "2",
                            strokeLinecap: "round"
                        }, void 0, false, {
                            fileName: "[project]/components/Card.tsx",
                            lineNumber: 33,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
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
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    viewBox: "0 0 24 24",
                    fill: "none",
                    className: "w-full h-full opacity-30",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z",
                            stroke: theme.icon,
                            strokeWidth: "1.5"
                        }, void 0, false, {
                            fileName: "[project]/components/Card.tsx",
                            lineNumber: 40,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z",
                            stroke: theme.icon,
                            strokeWidth: "1.5"
                        }, void 0, false, {
                            fileName: "[project]/components/Card.tsx",
                            lineNumber: 41,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "12",
                            cy: "12",
                            r: "2",
                            fill: theme.icon
                        }, void 0, false, {
                            fileName: "[project]/components/Card.tsx",
                            lineNumber: 42,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    viewBox: "0 0 24 24",
                    fill: "none",
                    className: "w-full h-full opacity-30",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M9 12H15",
                            stroke: theme.icon,
                            strokeWidth: "2",
                            strokeLinecap: "round"
                        }, void 0, false, {
                            fileName: "[project]/components/Card.tsx",
                            lineNumber: 50,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    viewBox: "0 0 24 24",
                    fill: "none",
                    className: "w-full h-full opacity-30",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    viewBox: "0 0 24 24",
                    fill: "none",
                    className: "w-full h-full opacity-40",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M12 2.5C12 2.5 15.5 8 15.5 13C15.5 16.5 14.5 18 12 21.5C9.5 18 8.5 16.5 8.5 13C8.5 8 12 2.5 12 2.5Z",
                            fill: "white"
                        }, void 0, false, {
                            fileName: "[project]/components/Card.tsx",
                            lineNumber: 64,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M12 14.5C12.8284 14.5 13.5 13.8284 13.5 13C13.5 12.1716 12.8284 11.5 12 11.5C11.1716 11.5 10.5 12.1716 10.5 13C10.5 13.8284 11.1716 14.5 12 14.5Z",
                            fill: "black"
                        }, void 0, false, {
                            fileName: "[project]/components/Card.tsx",
                            lineNumber: 65,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M15.5 16.5L18 20.5",
                            stroke: "white",
                            strokeWidth: "2",
                            strokeLinecap: "round"
                        }, void 0, false, {
                            fileName: "[project]/components/Card.tsx",
                            lineNumber: 66,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `relative rounded-lg shadow-xl overflow-hidden select-none transition-transform ${theme.bg} ${theme.border} border-2 ${className}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 flex items-center justify-center p-2",
                children: renderIcon()
            }, void 0, false, {
                fileName: "[project]/components/Card.tsx",
                lineNumber: 78,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `absolute inset-0 flex items-center justify-center font-black text-4xl drop-shadow-md ${theme.text}`,
                children: value
            }, void 0, false, {
                fileName: "[project]/components/Card.tsx",
                lineNumber: 83,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `absolute top-1 left-1.5 text-xs font-bold ${theme.text}`,
                children: value
            }, void 0, false, {
                fileName: "[project]/components/Card.tsx",
                lineNumber: 88,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
}),
"[project]/components/CardPicker.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CardPicker
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Card.tsx [app-ssr] (ecmascript)");
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 bg-black/85 z-[9999] flex items-center justify-center backdrop-blur-md animate-fade-in p-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-gray-900 border border-gray-600 rounded-xl shadow-2xl w-full max-w-6xl max-h-[95vh] flex flex-col",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-between items-center p-6 border-b border-gray-700 bg-gray-900 rounded-t-xl z-10",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-3xl font-bold text-white flex items-center gap-3",
                                    children: [
                                        "Main de ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-purple-400",
                                            children: PLAYER_NAMES[currentPlayer]
                                        }, void 0, false, {
                                            fileName: "[project]/components/CardPicker.tsx",
                                            lineNumber: 28,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/CardPicker.tsx",
                                    lineNumber: 27,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-gray-400 mt-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-bold text-white",
                                            children: myCount
                                        }, void 0, false, {
                                            fileName: "[project]/components/CardPicker.tsx",
                                            lineNumber: 31,
                                            columnNumber: 29
                                        }, this),
                                        " cartes sélectionnée(s)."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/CardPicker.tsx",
                                    lineNumber: 30,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/CardPicker.tsx",
                            lineNumber: 26,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            className: "text-gray-400 hover:text-white bg-gray-800 hover:bg-gray-700 w-12 h-12 rounded-full font-bold text-xl transition",
                            children: "✕"
                        }, void 0, false, {
                            fileName: "[project]/components/CardPicker.tsx",
                            lineNumber: 34,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/CardPicker.tsx",
                    lineNumber: 25,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "overflow-y-auto p-6 space-y-6 flex-1",
                    children: COLORS.map((color)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col md:flex-row gap-6 items-start bg-gray-800/40 p-4 rounded-xl border border-white/5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `md:w-24 pt-4 text-sm font-black tracking-widest uppercase md:text-right ${color === 'Rocket' ? 'text-gray-400' : 'text-' + color.toLowerCase() + '-400'}`,
                                    children: color
                                }, void 0, false, {
                                    fileName: "[project]/components/CardPicker.tsx",
                                    lineNumber: 42,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            // MODIF: On appelle toggleCard même si c'est pris (pour le vol)
                                            onClick: ()=>onToggleCard(color, val),
                                            // MODIF: On ne désactive plus le bouton
                                            // disabled={isTaken} 
                                            className: `
                                                relative w-20 aspect-[2/3] rounded-lg transition-all duration-200 group
                                                ${isMine ? 'ring-4 ring-green-500 scale-105 z-10 shadow-2xl' : isTaken ? 'opacity-60 grayscale hover:grayscale-0 hover:opacity-100 cursor-pointer ring-2 ring-red-500/30 hover:ring-red-500/80' : 'hover:scale-110 hover:z-20 hover:shadow-xl opacity-80 hover:opacity-100'}
                                            `,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-full h-full pointer-events-none rounded-lg overflow-hidden border border-black/20 shadow-sm",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        color: color,
                                                        value: val,
                                                        className: "w-full h-full"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/CardPicker.tsx",
                                                        lineNumber: 76,
                                                        columnNumber: 49
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/CardPicker.tsx",
                                                    lineNumber: 75,
                                                    columnNumber: 45
                                                }, this),
                                                isMine && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute -top-2 -right-2 bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center shadow-lg border-2 border-gray-900 font-bold text-xs",
                                                    children: "✓"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/CardPicker.tsx",
                                                    lineNumber: 81,
                                                    columnNumber: 49
                                                }, this),
                                                isTaken && existingCard && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute inset-0 flex items-center justify-center bg-black/50 rounded-lg backdrop-blur-[1px] group-hover:bg-black/30 transition-colors",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs font-bold text-white bg-red-600 px-2 py-1 rounded shadow-lg border border-red-400 group-hover:scale-110 transition-transform",
                                                        children: PLAYER_NAMES[existingCard.owner]
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/CardPicker.tsx",
                                                        lineNumber: 89,
                                                        columnNumber: 53
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/CardPicker.tsx",
                                                    lineNumber: 88,
                                                    columnNumber: 49
                                                }, this)
                                            ]
                                        }, val, true, {
                                            fileName: "[project]/components/CardPicker.tsx",
                                            lineNumber: 58,
                                            columnNumber: 41
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/components/CardPicker.tsx",
                                    lineNumber: 47,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, color, true, {
                            fileName: "[project]/components/CardPicker.tsx",
                            lineNumber: 40,
                            columnNumber: 25
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/CardPicker.tsx",
                    lineNumber: 38,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-6 border-t border-gray-700 bg-gray-900 rounded-b-xl flex justify-end z-10",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onClose,
                        className: "bg-white text-gray-900 hover:bg-gray-200 py-3 px-10 rounded-lg font-bold shadow-lg transition active:scale-95 text-lg",
                        children: "Terminé"
                    }, void 0, false, {
                        fileName: "[project]/components/CardPicker.tsx",
                        lineNumber: 104,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/CardPicker.tsx",
                    lineNumber: 103,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/CardPicker.tsx",
            lineNumber: 22,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/CardPicker.tsx",
        lineNumber: 20,
        columnNumber: 9
    }, this);
}
}),
"[project]/components/GameModeSelector.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>GameModeSelector
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function GameModeSelector({ onSelectMode }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-screen w-screen bg-[#1a202c] flex flex-col items-center justify-center text-white p-8 font-sans",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center mb-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-6xl font-black mb-4 tracking-tighter",
                        children: [
                            "THE CREW ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600",
                                children: "AI"
                            }, void 0, false, {
                                fileName: "[project]/components/GameModeSelector.tsx",
                                lineNumber: 12,
                                columnNumber: 30
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/GameModeSelector.tsx",
                        lineNumber: 11,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-400 text-lg",
                        children: "Choisissez votre moteur de résolution"
                    }, void 0, false, {
                        fileName: "[project]/components/GameModeSelector.tsx",
                        lineNumber: 14,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/GameModeSelector.tsx",
                lineNumber: 10,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>onSelectMode('GOD'),
                        className: "group relative bg-gray-800 border border-gray-700 p-8 rounded-2xl hover:border-purple-500 transition-all duration-300 text-left hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-4 right-4 text-4xl opacity-20 group-hover:opacity-100 transition-opacity",
                                children: "👁️"
                            }, void 0, false, {
                                fileName: "[project]/components/GameModeSelector.tsx",
                                lineNumber: 24,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-2xl font-bold mb-2 text-purple-400",
                                children: 'Mode "Dieu" (Solver)'
                            }, void 0, false, {
                                fileName: "[project]/components/GameModeSelector.tsx",
                                lineNumber: 25,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-gray-400 mb-4",
                                children: "Omniscient."
                            }, void 0, false, {
                                fileName: "[project]/components/GameModeSelector.tsx",
                                lineNumber: 26,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "text-xs text-gray-500 space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "✅ Voit toutes les cartes"
                                    }, void 0, false, {
                                        fileName: "[project]/components/GameModeSelector.tsx",
                                        lineNumber: 28,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "✅ Trouve la solution parfaite"
                                    }, void 0, false, {
                                        fileName: "[project]/components/GameModeSelector.tsx",
                                        lineNumber: 29,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "❌ Ne gère pas la communication"
                                    }, void 0, false, {
                                        fileName: "[project]/components/GameModeSelector.tsx",
                                        lineNumber: 30,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "❌ Ne gère pas le choix de mission"
                                    }, void 0, false, {
                                        fileName: "[project]/components/GameModeSelector.tsx",
                                        lineNumber: 31,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/GameModeSelector.tsx",
                                lineNumber: 27,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/GameModeSelector.tsx",
                        lineNumber: 20,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>onSelectMode('MCTS'),
                        className: "group relative bg-gray-800 border border-gray-700 p-8 rounded-2xl hover:border-blue-500 transition-all duration-300 text-left hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-4 right-4 text-4xl opacity-20 group-hover:opacity-100 transition-opacity",
                                children: "🤖"
                            }, void 0, false, {
                                fileName: "[project]/components/GameModeSelector.tsx",
                                lineNumber: 40,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-2xl font-bold mb-2 text-blue-400",
                                children: 'Mode "Agent" (MCTS)'
                            }, void 0, false, {
                                fileName: "[project]/components/GameModeSelector.tsx",
                                lineNumber: 41,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-gray-400 mb-4",
                                children: "Probabiliste & Humain."
                            }, void 0, false, {
                                fileName: "[project]/components/GameModeSelector.tsx",
                                lineNumber: 42,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "text-xs text-gray-500 space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "✅ Simule 1000 scénarios"
                                    }, void 0, false, {
                                        fileName: "[project]/components/GameModeSelector.tsx",
                                        lineNumber: 44,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "✅ Gère l'information cachée"
                                    }, void 0, false, {
                                        fileName: "[project]/components/GameModeSelector.tsx",
                                        lineNumber: 45,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "✅ Gère la communication"
                                    }, void 0, false, {
                                        fileName: "[project]/components/GameModeSelector.tsx",
                                        lineNumber: 46,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "⚠️ Peut se tromper (comme un humain)"
                                    }, void 0, false, {
                                        fileName: "[project]/components/GameModeSelector.tsx",
                                        lineNumber: 47,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/GameModeSelector.tsx",
                                lineNumber: 43,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/GameModeSelector.tsx",
                        lineNumber: 36,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        disabled: true,
                        className: "group relative bg-gray-900 border border-gray-800 p-8 rounded-2xl opacity-50 cursor-not-allowed text-left",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-4 right-4 text-4xl opacity-20",
                                children: "🧠"
                            }, void 0, false, {
                                fileName: "[project]/components/GameModeSelector.tsx",
                                lineNumber: 56,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-2xl font-bold mb-2 text-gray-500",
                                children: "Deep Learning"
                            }, void 0, false, {
                                fileName: "[project]/components/GameModeSelector.tsx",
                                lineNumber: 57,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-gray-600 mb-4",
                                children: "Réseaux de Neurones."
                            }, void 0, false, {
                                fileName: "[project]/components/GameModeSelector.tsx",
                                lineNumber: 58,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "text-xs text-gray-600 space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "🔒 En développement"
                                    }, void 0, false, {
                                        fileName: "[project]/components/GameModeSelector.tsx",
                                        lineNumber: 60,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "🔒 Reinforcement Learning"
                                    }, void 0, false, {
                                        fileName: "[project]/components/GameModeSelector.tsx",
                                        lineNumber: 61,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/GameModeSelector.tsx",
                                lineNumber: 59,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/GameModeSelector.tsx",
                        lineNumber: 52,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/GameModeSelector.tsx",
                lineNumber: 17,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/GameModeSelector.tsx",
        lineNumber: 9,
        columnNumber: 9
    }, this);
}
}),
"[project]/app/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useGodMode$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useGodMode.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$god$2f$Sidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/god/Sidebar.tsx [app-ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '../components/GameBoard'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CardPicker$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/CardPicker.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$GameModeSelector$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/GameModeSelector.tsx [app-ssr] (ecmascript)"); // <--- Import
'use client';
;
;
;
;
;
;
;
function Home() {
    const game = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useGodMode$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useGameLogic"])();
    // Nouvel état : Le mode de jeu
    const [gameMode, setGameMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // Gestion clavier
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleKeyDown = (e)=>{
            if ([
                'INPUT',
                'SELECT',
                'TEXTAREA'
            ].includes(e.target.tagName)) return;
            if (gameMode !== null) {
                if (e.key === 'ArrowRight') game.handleNext();
                if (e.key === 'ArrowLeft') game.handlePrev();
                if (e.key === ' ') {
                    e.preventDefault();
                    game.togglePlay();
                }
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return ()=>window.removeEventListener('keydown', handleKeyDown);
    }, [
        game.handleNext,
        game.handlePrev,
        game.togglePlay,
        gameMode
    ]);
    // Initialisation au montage (Optionnel : si on veut reset le jeu quand on change de mode)
    // useEffect(() => { if(gameMode) game.startNewGame(); }, [gameMode]);
    // 1. SI PAS DE MODE CHOISI -> LANDING PAGE
    if (!gameMode) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$GameModeSelector$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            onSelectMode: (mode)=>{
                setGameMode(mode);
                game.startNewGame(); // On lance une partie quand on choisit
            // Ici, tu pourras plus tard dire au backend quel mode utiliser via game.setSolverMode(mode)
            }
        }, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 35,
            columnNumber: 14
        }, this);
    }
    // 2. SI MODE CHOISI -> LE JEU (Interface Classique)
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-screen w-screen flex overflow-hidden bg-[#2c3e50] font-sans relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setGameMode(null),
                className: "absolute top-2 left-2 z-[100] bg-black/30 text-white/30 hover:text-white px-2 py-1 text-xs rounded",
                children: "← Menu"
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$god$2f$Sidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                ...game,
                removeMission: (idx)=>game.setMissions((p)=>p.filter((_, i)=>i !== idx)),
                globalConstraints: game.globalConstraints,
                clearAllHands: game.clearAllHands,
                // NOUVELLES PROPS
                gameMode: gameMode || 'GOD',
                communications: game.communications,
                addCommunication: game.addCommunication
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 54,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(GameBoard, {
                allCards: game.allCards,
                onPlayerClick: game.openEditor
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 66,
                columnNumber: 7
            }, this),
            game.editingPlayer !== null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CardPicker$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                currentPlayer: game.editingPlayer,
                allCards: game.allCards,
                onToggleCard: game.toggleCard,
                onClose: game.closeEditor
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 72,
                columnNumber: 11
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 44,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__9a51c3bf._.js.map