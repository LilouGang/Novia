module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/components/Card.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Card
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function Card({ color, value, onClick, className = "" }) {
    const getColorStyles = ()=>{
        switch(color){
            case 'Blue':
                return 'bg-blue-500 border-blue-700 text-white';
            case 'Green':
                return 'bg-green-600 border-green-800 text-white';
            case 'Pink':
                return 'bg-pink-500 border-pink-700 text-white';
            case 'Yellow':
                return 'bg-yellow-400 border-yellow-600 text-black';
            case 'Rocket':
                return 'bg-gray-800 border-gray-950 text-white';
            default:
                return 'bg-gray-200';
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        onClick: onClick,
        className: `
        ${getColorStyles()}
        ${className} 
        w-20 h-32 rounded-lg border-b-4 shadow-xl 
        flex flex-col items-center justify-center 
        cursor-pointer transition-all duration-200 ease-out
        relative select-none box-border
      `,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "absolute top-1 left-1 text-xs font-bold opacity-80",
                children: value
            }, void 0, false, {
                fileName: "[project]/components/Card.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-4xl font-black font-mono",
                children: color === 'Rocket' ? '🚀' : value
            }, void 0, false, {
                fileName: "[project]/components/Card.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "absolute bottom-1 right-1 text-xs font-bold opacity-80 rotate-180",
                children: value
            }, void 0, false, {
                fileName: "[project]/components/Card.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Card.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
}),
"[project]/data/missions.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/app/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Card.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$missions$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/missions.ts [app-ssr] (ecmascript)"); // Assure-toi que ce fichier existe
'use client';
;
;
;
;
// --- CONFIGURATION ---
const ANIMATION_SPEED = 600;
const TRICK_WAIT_ON_TABLE = 1000;
// --- COMPOSANT D'AFFICHAGE DES PLIS ---
const TrickHistory = ({ steps })=>{
    // On découpe les 40 coups en 10 plis de 4 cartes
    const tricks = [];
    for(let i = 0; i < steps.length; i += 4){
        tricks.push(steps.slice(i, i + 4));
    }
    // Petite fonction pour trouver le gagnant d'un pli (logique simplifiée pour l'affichage)
    const getWinnerIndex = (trick)=>{
        // Cette logique est purement visuelle, le vrai gagnant est calculé par le backend
        // Mais on peut le déduire : Le backend renvoie les coups dans l'ordre.
        // Le gagnant du pli N commence le pli N+1.
        // Donc le joueur qui joue la 1ère carte du pli suivant EST le gagnant de ce pli.
        // Sauf pour le dernier pli... 
        // Pour faire simple ici, on affiche juste les cartes jouées.
        return trick[0].player; // Celui qui entame (visuel simple)
    };
    const getPlayerName = (idx)=>[
            'Sud',
            'Ouest',
            'Nord',
            'Est'
        ][idx];
    // Couleurs CSS pour les badges
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
                return 'bg-gray-700 text-white border-gray-500';
            default:
                return 'bg-gray-800';
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-2 mt-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-xs font-bold text-gray-400 uppercase border-b border-gray-700 pb-1",
                children: "📝 Détail de la solution"
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 76,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            tricks.map((trick, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-black/30 p-2 rounded border border-white/5 text-[10px]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between mb-1 text-gray-400 font-mono",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: [
                                        "Pli #",
                                        i + 1
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 82,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: [
                                        "Entame: ",
                                        getPlayerName(trick[0].player)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 83,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 81,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-4 gap-1",
                            children: trick.map((move, j)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col items-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[8px] text-gray-500 mb-0.5",
                                            children: getPlayerName(move.player).substring(0, 1)
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 88,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `w-full text-center py-0.5 rounded border ${getColorClass(move.card.color)} font-bold`,
                                            children: move.card.value
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 89,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, j, true, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 87,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)))
                        }, void 0, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 85,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, i, true, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 80,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)))
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 75,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
function Home() {
    const [allCards, setAllCards] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [stats, setStats] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // Controls
    const [currentMoveIndex, setCurrentMoveIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isPlaying, setIsPlaying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isThinking, setIsThinking] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [logs, setLogs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    // --- ETATS POUR LES MISSIONS ---
    const [missions, setMissions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [bookMissionId, setBookMissionId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isAutoFinding, setIsAutoFinding] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const timerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const abortControllerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const addLog = (msg)=>setLogs((prev)=>[
                `> ${msg}`,
                ...prev
            ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        startNewGame();
    }, []);
    // --- MOTEUR DE JEU (AUTO PLAY) ---
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!isPlaying || !stats) return;
        const playNext = ()=>{
            if (currentMoveIndex >= stats.solution_steps.length) {
                setIsPlaying(false);
                return;
            }
            let nextStep = 0;
            let delay = ANIMATION_SPEED;
            // Est-ce qu'on est sur une étape "Ramassage" (X.5) ?
            if (currentMoveIndex % 1 !== 0) {
                nextStep = Math.floor(currentMoveIndex) + 1;
                delay = ANIMATION_SPEED;
            } else if ((currentMoveIndex + 1) % 4 === 0) {
                nextStep = currentMoveIndex + 0.5;
                delay = TRICK_WAIT_ON_TABLE;
            } else {
                nextStep = currentMoveIndex + 1;
                delay = ANIMATION_SPEED;
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
    // --- CALCUL DE POSITION (L'ÉVENTAIL) ---
    const getCardStyle = (card)=>{
        // 1. CARTE GAGNÉE
        if (card.status === 'WON') {
            const winPos = [
                "translate(-50%, 800px)",
                "translate(-1200px, -50%)",
                "translate(-50%, -1000px)",
                "translate(1200px, -50%)" // Est
            ];
            return {
                transform: winPos[card.winnerIndex || 0] + " scale(0.4)",
                opacity: 0,
                zIndex: card.zIndex
            };
        }
        // 2. CARTE SUR TABLE
        if (card.status === 'TABLE') {
            const seed = card.tableRotation;
            const rX = seed * 5 % 20 - 10;
            const rY = seed * 7 % 20 - 10;
            return {
                transform: `translate(calc(-50% + ${rX}px), calc(-50% + ${rY}px)) rotate(${card.tableRotation}deg) scale(1.1)`,
                opacity: 1,
                zIndex: card.zIndex
            };
        }
        // 3. CARTE EN MAIN
        const cardsInHand = allCards.filter((c)=>c.owner === card.owner && c.status === 'HAND');
        // Tri par Couleur puis Valeur
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
        const FIXED_ANGLE = 6;
        const xSpacing = 4.5;
        const yArch = 0.03;
        const totalSpread = (total - 1) * FIXED_ANGLE;
        const rotation = myIndex * FIXED_ANGLE - totalSpread / 2;
        const xOffset = rotation * xSpacing;
        const yOffset = rotation * rotation * yArch;
        let baseTransform = "";
        switch(card.owner){
            case 0:
                baseTransform = `translate(calc(-50% + ${xOffset}px), calc(200px + ${yOffset}px)) rotate(${rotation}deg)`;
                break;
            case 1:
                baseTransform = `translate(calc(-540px - ${yOffset}px), calc(-50% + ${xOffset}px)) rotate(${90 + rotation}deg)`;
                break;
            case 2:
                baseTransform = `translate(calc(-50% - ${xOffset}px), calc(-320px - ${yOffset}px)) rotate(${180 + rotation}deg)`;
                break;
            case 3:
                baseTransform = `translate(calc(450px + ${yOffset}px), calc(-50% - ${xOffset}px)) rotate(${-90 + rotation}deg)`;
                break;
        }
        return {
            transform: baseTransform,
            opacity: 1,
            zIndex: myIndex
        };
    };
    // --- LOGIQUE ETAPES ---
    const goToStep = (targetStep)=>{
        if (!stats) return;
        const target = Math.max(0, Math.min(targetStep, stats.solution_steps.length));
        const floorStep = Math.floor(target);
        const isCollectionPhase = target % 1 !== 0;
        // Reset
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
    // --- FONCTIONS DE MELANGE ---
    // 1. Mélanger UNIQUEMENT les propriétaires (Qui fait la mission ?)
    const shuffleOwners = ()=>{
        setMissions((prev)=>prev.map((m)=>({
                    ...m,
                    // Choisit un joueur au hasard entre 0 et 3
                    ownerIndex: Math.floor(Math.random() * 4)
                })));
    };
    // 2. Mélanger UNIQUEMENT les cartes (Quelle est la mission ?)
    const shuffleCards = ()=>{
        if (allCards.length === 0) return;
        // On récupère toutes les cartes valides pour des missions (Pas de fusées)
        const validTaskCards = allCards.filter((c)=>c.color !== 'Rocket');
        // On mélange ce paquet
        const shuffled = [
            ...validTaskCards
        ].sort(()=>Math.random() - 0.5);
        // On met à jour chaque mission avec une nouvelle carte du paquet mélangé
        setMissions((prev)=>prev.map((m, i)=>{
                // Sécurité : s'il y a plus de missions que de cartes disponibles
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
        const missionDef = __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$missions$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MISSION_LOGBOOK"].find((m)=>m.id === id);
        if (!missionDef) return;
        // Sécurité : Si pas de cartes distribuées, on ne peut pas générer de missions aléatoires
        if (allCards.length === 0) {
            addLog("⚠️ Distribuez d'abord les cartes !");
            return;
        }
        // 1. Trouver les cartes éligibles (Couleurs 1-9, PAS DE FUSEES)
        const validTaskCards = allCards.filter((c)=>c.color !== 'Rocket');
        // 2. Mélanger aléatoirement le paquet de tâches
        // (Algorithme de tri aléatoire simple)
        const shuffledTasks = [
            ...validTaskCards
        ].sort(()=>Math.random() - 0.5);
        // 3. Identifier le Commandant (Celui qui a le 4 Fusée)
        // C'est lui qui reçoit la première mission par défaut dans cette version auto
        const commander = allCards.find((c)=>c.color === 'Rocket' && c.value === 4);
        const startPlayerIdx = commander ? commander.owner : 0; // Par défaut Sud si pas trouvé
        // 4. Créer les missions en distribuant de manière horaire
        const newMissions = missionDef.slots.map((slot, index)=>{
            // On prend la carte suivante dans le paquet mélangé
            const targetCard = shuffledTasks[index];
            // Distribution horaire : (Commandant + 0, Commandant + 1...) % 4
            const assignedOwner = (startPlayerIdx + index) % 4;
            return {
                cardColor: targetCard.color,
                cardValue: targetCard.value,
                ownerIndex: assignedOwner,
                token: slot.token
            };
        });
        setMissions(newMissions);
        addLog(`Mission ${id} chargée : ${missionDef.description}`);
    };
    const removeMission = (index)=>{
        setMissions((prev)=>prev.filter((_, i)=>i !== index));
    };
    const getPlayerName = (idx)=>[
            'Sud',
            'Ouest',
            'Nord',
            'Est'
        ][idx];
    // --- ACTIONS JEU ---
    const handleNext = ()=>{
        setIsPlaying(false);
        if (Number.isInteger(currentMoveIndex) && (currentMoveIndex + 1) % 4 === 0) {
            goToStep(currentMoveIndex + 0.5);
        } else if (currentMoveIndex % 1 !== 0) {
            goToStep(Math.floor(currentMoveIndex) + 1);
        } else {
            goToStep(currentMoveIndex + 1);
        }
    };
    const handlePrev = ()=>{
        setIsPlaying(false);
        if (currentMoveIndex % 1 !== 0) {
            goToStep(Math.floor(currentMoveIndex));
        } else {
            const prevIndex = currentMoveIndex - 1;
            if (prevIndex >= 0 && (prevIndex + 1) % 4 === 0) {
                goToStep(prevIndex + 0.5);
            } else {
                goToStep(prevIndex);
            }
        }
    };
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
    const startNewGame = async ()=>{
        console.log("startNewGame : Début...");
        // --- AJOUTER CE BLOC ---
        // Si une requête est en cours, on l'annule !
        if (abortControllerRef.current) {
            abortControllerRef.current.abort();
            abortControllerRef.current = null;
        }
        // -----------------------
        setIsPlaying(false);
        setStats(null);
        setMissions([]);
        setBookMissionId(0);
        setCurrentMoveIndex(-1);
        setIsThinking(false); // Force l'arrêt du mode "pensée"
        if (timerRef.current) clearTimeout(timerRef.current);
        try {
            const res = await fetch('http://localhost:8000/start-game');
            const gameData = await res.json();
            const generatedCards = [];
            [
                gameData.player_1,
                gameData.player_2,
                gameData.player_3,
                gameData.player_4
            ].forEach((hand, playerIdx)=>{
                hand.forEach((c)=>{
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
            setAllCards(generatedCards);
            addLog("Nouvelle donne prête.");
        } catch (e) {
            addLog("Erreur Backend");
        }
    };
    const launchSolver = async ()=>{
        console.log("launchSolver : Début...");
        // --- AJOUTER CE BLOC ---
        // On annule toute requête précédente par sécurité
        if (abortControllerRef.current) {
            abortControllerRef.current.abort();
        }
        // On crée un nouveau contrôleur pour cette nouvelle demande
        const controller = new AbortController();
        abortControllerRef.current = controller;
        // -----------------------
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
            console.log("Envoi au solver...", realMissions);
            const res = await fetch('http://localhost:8000/solve-game', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    ...handsForBackend,
                    missions: realMissions
                }),
                // --- AJOUTER CECI : ---
                signal: controller.signal // On lie le signal d'annulation ici
            });
            if (!res.ok) throw new Error(`HTTP Error: ${res.status}`);
            const data = await res.json();
            console.log("Réponse solver:", data);
            setStats(data.stats);
            if (data.stats.solutionFound) addLog(`Solution trouvée !`);
            else addLog("Pas de solution trouvée.");
        } catch (e) {
            // --- MODIFIER LA GESTION D'ERREUR ---
            if (e.name === 'AbortError') {
                addLog("Calcul annulé."); // Ce n'est pas une vraie erreur
            } else {
                console.error("ERREUR SOLVER:", e);
                addLog(`Erreur Solver: ${e.message}`);
            }
        } finally{
            setIsThinking(false);
            abortControllerRef.current = null; // Nettoyage
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-screen w-screen flex overflow-hidden bg-[#2c3e50] font-sans",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-[20%] min-w-[250px] bg-gray-900 border-r border-gray-700 flex flex-col z-50 shadow-2xl h-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4 border-b border-gray-800 shrink-0",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-xl font-bold text-white",
                            children: [
                                "The Crew ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-purple-500",
                                    children: "Solver"
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 515,
                                    columnNumber: 67
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 515,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 514,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 overflow-y-auto p-4 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-3 mb-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: startNewGame,
                                        className: "bg-gray-800 hover:bg-gray-700 text-white py-3 rounded font-bold text-sm border border-gray-600",
                                        children: "🔄 Nouvelle Donne"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 522,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-black/20 p-3 rounded border border-white/10 flex flex-col gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-xs font-bold text-gray-400 mb-1 uppercase flex items-center gap-2",
                                                        children: [
                                                            "📖 Livre de Bord",
                                                            bookMissionId > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-purple-400 text-[10px]",
                                                                children: bookMissionId
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/page.tsx",
                                                                lineNumber: 533,
                                                                columnNumber: 51
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/page.tsx",
                                                        lineNumber: 531,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        className: "w-full bg-gray-800 text-white text-xs p-2 rounded border border-gray-600 outline-none focus:border-purple-500",
                                                        value: bookMissionId,
                                                        onChange: (e)=>loadMissionFromBook(Number(e.target.value)),
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "0",
                                                                children: "-- Choisir une mission --"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/page.tsx",
                                                                lineNumber: 540,
                                                                columnNumber: 29
                                                            }, this),
                                                            __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$missions$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MISSION_LOGBOOK"].map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: m.id,
                                                                    children: [
                                                                        "Mission ",
                                                                        m.id,
                                                                        " (",
                                                                        m.slots.length,
                                                                        " cartes)"
                                                                    ]
                                                                }, m.id, true, {
                                                                    fileName: "[project]/app/page.tsx",
                                                                    lineNumber: 542,
                                                                    columnNumber: 33
                                                                }, this))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/page.tsx",
                                                        lineNumber: 535,
                                                        columnNumber: 25
                                                    }, this),
                                                    bookMissionId > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mt-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-[9px] text-gray-400 italic leading-tight px-1 mb-2",
                                                                children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$missions$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MISSION_LOGBOOK"].find((m)=>m.id === bookMissionId)?.description
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/page.tsx",
                                                                lineNumber: 550,
                                                                columnNumber: 30
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex gap-1",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: shuffleOwners,
                                                                        className: "flex-1 bg-gray-700 hover:bg-gray-600 text-[9px] text-white py-1 rounded border border-gray-600 active:scale-95 transition",
                                                                        title: "Changer aléatoirement qui doit faire les missions",
                                                                        children: "👤 Mix Joueurs"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/page.tsx",
                                                                        lineNumber: 556,
                                                                        columnNumber: 34
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: shuffleCards,
                                                                        className: "flex-1 bg-gray-700 hover:bg-gray-600 text-[9px] text-white py-1 rounded border border-gray-600 active:scale-95 transition",
                                                                        title: "Changer aléatoirement les cartes cibles",
                                                                        children: "🃏 Mix Cartes"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/page.tsx",
                                                                        lineNumber: 563,
                                                                        columnNumber: 34
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/page.tsx",
                                                                lineNumber: 555,
                                                                columnNumber: 30
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/page.tsx",
                                                        lineNumber: 548,
                                                        columnNumber: 26
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "h-[1px] bg-white/10 mt-2"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.tsx",
                                                        lineNumber: 574,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 530,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-2 pr-1",
                                                children: [
                                                    missions.map((m, i)=>{
                                                        const targetId = `${m.cardColor}-${m.cardValue}`;
                                                        const targetCard = allCards.find((c)=>c.id === targetId);
                                                        const isAccomplished = targetCard?.status === 'WON' && targetCard?.winnerIndex === m.ownerIndex;
                                                        const isFailed = targetCard?.status === 'WON' && targetCard?.winnerIndex !== undefined && targetCard?.winnerIndex !== m.ownerIndex;
                                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: `p-2 rounded border transition-colors ${isAccomplished ? 'bg-green-900/30 border-green-500/50' : isFailed ? 'bg-red-900/30 border-red-500/50' : 'bg-gray-800 border-gray-600'}`,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex justify-between items-center mb-1",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex items-center gap-2",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "text-xs",
                                                                                    children: isAccomplished ? '✅' : isFailed ? '❌' : '🎯'
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/page.tsx",
                                                                                    lineNumber: 595,
                                                                                    columnNumber: 41
                                                                                }, this),
                                                                                m.token !== 'None' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "bg-purple-600 text-white px-1.5 rounded text-[9px] font-bold",
                                                                                    children: m.token === 'Omega' ? 'Ω' : m.token
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/page.tsx",
                                                                                    lineNumber: 597,
                                                                                    columnNumber: 45
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/page.tsx",
                                                                            lineNumber: 594,
                                                                            columnNumber: 37
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            onClick: ()=>removeMission(i),
                                                                            className: "text-gray-500 hover:text-red-400 text-xs",
                                                                            children: "✕"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/page.tsx",
                                                                            lineNumber: 602,
                                                                            columnNumber: 37
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/page.tsx",
                                                                    lineNumber: 593,
                                                                    columnNumber: 33
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex gap-1",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
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
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                    value: 0,
                                                                                    children: "Sud"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/page.tsx",
                                                                                    lineNumber: 615,
                                                                                    columnNumber: 41
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                    value: 1,
                                                                                    children: "Ouest"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/page.tsx",
                                                                                    lineNumber: 616,
                                                                                    columnNumber: 41
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                    value: 2,
                                                                                    children: "Nord"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/page.tsx",
                                                                                    lineNumber: 617,
                                                                                    columnNumber: 41
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                    value: 3,
                                                                                    children: "Est"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/page.tsx",
                                                                                    lineNumber: 618,
                                                                                    columnNumber: 41
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/page.tsx",
                                                                            lineNumber: 606,
                                                                            columnNumber: 37
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
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
                                                                            ].map((n)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                    value: n,
                                                                                    children: n
                                                                                }, n, false, {
                                                                                    fileName: "[project]/app/page.tsx",
                                                                                    lineNumber: 630,
                                                                                    columnNumber: 71
                                                                                }, this))
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/page.tsx",
                                                                            lineNumber: 621,
                                                                            columnNumber: 37
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
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
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                    value: "Blue",
                                                                                    children: "Bleu"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/page.tsx",
                                                                                    lineNumber: 648,
                                                                                    columnNumber: 41
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                    value: "Green",
                                                                                    children: "Vert"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/page.tsx",
                                                                                    lineNumber: 649,
                                                                                    columnNumber: 41
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                    value: "Pink",
                                                                                    children: "Rose"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/page.tsx",
                                                                                    lineNumber: 650,
                                                                                    columnNumber: 41
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                    value: "Yellow",
                                                                                    children: "Jaune"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/page.tsx",
                                                                                    lineNumber: 651,
                                                                                    columnNumber: 41
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                    value: "Rocket",
                                                                                    children: "Fusée"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/page.tsx",
                                                                                    lineNumber: 652,
                                                                                    columnNumber: 41
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/page.tsx",
                                                                            lineNumber: 633,
                                                                            columnNumber: 37
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/page.tsx",
                                                                    lineNumber: 605,
                                                                    columnNumber: 33
                                                                }, this)
                                                            ]
                                                        }, i, true, {
                                                            fileName: "[project]/app/page.tsx",
                                                            lineNumber: 588,
                                                            columnNumber: 29
                                                        }, this);
                                                    }),
                                                    missions.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-gray-500 text-[10px] text-center py-2",
                                                        children: "Aucune mission active"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.tsx",
                                                        lineNumber: 657,
                                                        columnNumber: 51
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 580,
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
                                                className: "w-full border border-dashed border-gray-600 text-gray-400 hover:text-white text-[10px] py-1 rounded transition-colors hover:border-gray-400",
                                                children: "+ Ajouter slot manuel"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 660,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 527,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: launchSolver,
                                        disabled: isThinking,
                                        className: `py-3 rounded font-bold transition text-sm ${isThinking ? 'bg-purple-900 text-purple-300' : 'bg-purple-600 hover:bg-purple-500 text-white'}`,
                                        children: isThinking ? 'Calcul en cours...' : '⚡️ Lancer Solver'
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 669,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 521,
                                columnNumber: 13
                            }, this),
                            stats && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-black/40 p-3 rounded-lg border border-white/10 mb-4 animate-fade-in",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between items-center mb-2 text-xs text-gray-400 font-mono",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    "Coup ",
                                                    Math.ceil(currentMoveIndex + 1),
                                                    " / ",
                                                    stats.solution_steps.length
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 682,
                                                columnNumber: 25
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: isPlaying ? '▶ LECTURE' : '⏸ PAUSE'
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 683,
                                                columnNumber: 25
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 681,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-full h-1.5 bg-gray-700 rounded-full mb-4 overflow-hidden",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300",
                                            style: {
                                                width: `${(currentMoveIndex + 1) / stats.solution_steps.length * 100}%`
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 686,
                                            columnNumber: 25
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 685,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: handlePrev,
                                                className: "flex-1 bg-gray-700 hover:bg-gray-600 text-white py-2 rounded text-lg active:scale-95",
                                                children: "⏮"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 692,
                                                columnNumber: 25
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setIsPlaying(!isPlaying),
                                                className: `flex-1 py-2 rounded text-lg font-bold active:scale-95 text-white ${isPlaying ? 'bg-yellow-600 hover:bg-yellow-500' : 'bg-green-600 hover:bg-green-500'}`,
                                                children: isPlaying ? '⏸' : '▶'
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 693,
                                                columnNumber: 25
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: handleNext,
                                                className: "flex-1 bg-gray-700 hover:bg-gray-600 text-white py-2 rounded text-lg active:scale-95",
                                                children: "⏭"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 694,
                                                columnNumber: 25
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 691,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 680,
                                columnNumber: 17
                            }, this),
                            stats && stats.solutionFound && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 overflow-y-auto min-h-[150px] mb-4 pr-1 scrollbar-thin scrollbar-thumb-gray-700",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TrickHistory, {
                                    steps: stats.solution_steps
                                }, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 702,
                                    columnNumber: 21
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 701,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-black/40 rounded p-2 font-mono text-[10px] text-gray-400 border border-white/5 min-h-[100px]",
                                children: logs.map((l, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mb-1",
                                        children: l
                                    }, i, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 708,
                                        columnNumber: 37
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 707,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 519,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 511,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-[80%] relative bg-[#2c3e50] overflow-hidden shadow-inner",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-45 left-1/2 -translate-x-1/2 text-white/20 font-bold tracking-[0.5em]",
                        children: "NORD"
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 716,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-45 left-1/2 -translate-x-1/2 text-white/20 font-bold tracking-[0.5em]",
                        children: "SUD"
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 717,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute left-45 top-1/2 -translate-y-1/2 text-white/20 font-bold tracking-[0.5em] [writing-mode:vertical-lr] rotate-180",
                        children: "OUEST"
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 718,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute right-45 top-1/2 -translate-y-1/2 text-white/20 font-bold tracking-[0.5em] [writing-mode:vertical-lr]",
                        children: "EST"
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 719,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border-2 border-white/5 bg-white/5 pointer-events-none"
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 721,
                        columnNumber: 9
                    }, this),
                    allCards.map((card)=>{
                        const style = getCardStyle(card);
                        const speed = card.status === 'WON' ? '1000ms' : '600ms';
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute top-1/2 left-1/2 transition-all ease-in-out",
                            style: {
                                ...style,
                                width: '5rem',
                                transitionProperty: 'transform, opacity',
                                transitionDuration: speed
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                color: card.color,
                                value: card.value,
                                className: "w-20 shadow-xl border border-black/20"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 737,
                                columnNumber: 21
                            }, this)
                        }, card.id, false, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 727,
                            columnNumber: 17
                        }, this);
                    })
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 715,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 508,
        columnNumber: 5
    }, this);
}
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        if ("TURBOPACK compile-time truthy", 1) {
            if ("TURBOPACK compile-time truthy", 1) {
                module.exports = __turbopack_context__.r("[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)");
            } else //TURBOPACK unreachable
            ;
        } else //TURBOPACK unreachable
        ;
    }
} //# sourceMappingURL=module.compiled.js.map
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].React; //# sourceMappingURL=react.js.map
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__744e2e5b._.js.map