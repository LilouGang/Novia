import { RealMissionDef } from '../types';

export const REAL_MISSION_LOGBOOK: RealMissionDef[] = [
    {
        id: 1,
        description: "Accomplissez 1 tâche.",
        constraints: [
            { type: 'TARGET_CARD', args: { count: 1 } }
        ]
    },
    {
        id: 2,
        description: "Accomplissez 2 tâches.",
        constraints: [
            { type: 'TARGET_CARD', args: { count: 2 } }
        ]
    },
    {
        id: 3,
        description: "Accomplissez 2 tâches dans l'ordre strict (1 puis 2).",
        constraints: [
            { type: 'TARGET_CARD', args: { count: 2 } },
            { type: 'ORDER_ABSOLUTE', args: { count: 2 } }
        ]
    },
    {
        id: 4,
        description: "Accomplissez 3 tâches.",
        constraints: [
            { type: 'TARGET_CARD', args: { count: 3 } }
        ]
    },
    {
        id: 5,
        description: "Accomplissez 3 tâches.",
        constraints: [
            { type: 'TARGET_CARD', args: { count: 3 } }
        ]
    },
    {
        id: 6,
        description: "3 tâches, ordre relatif (> et >>).",
        constraints: [
            { type: 'TARGET_CARD', args: { count: 3 } },
            { type: 'ORDER_RELATIVE', args: { count: 2 } }
        ]
    },
    {
        id: 7,
        description: "3 tâches, dont une doit être faite en dernier (Omega).",
        constraints: [
            { type: 'TARGET_CARD', args: { count: 3 } },
            { type: 'ORDER_OMEGA', args: { count: 1 } }
        ]
    },
    {
        id: 8,
        description: "3 tâches dans l'ordre strict (1, 2, 3).",
        constraints: [
            { type: 'TARGET_CARD', args: { count: 3 } },
            { type: 'ORDER_ABSOLUTE', args: { count: 3 } }
        ]
    },
    {
        id: 9,
        description: "Accomplissez 3 tâches.",
        constraints: [
            { type: 'TARGET_CARD', args: { count: 3 } }
        ]
    },
    {
        id: 10,
        description: "Accomplissez 4 tâches.",
        constraints: [
            { type: 'TARGET_CARD', args: { count: 4 } }
        ]
    },
    {
        id: 11,
        description: "4 tâches, dont la tâche 1 doit être faite en premier.",
        constraints: [
            { type: 'TARGET_CARD', args: { count: 4 } },
            { type: 'ORDER_ABSOLUTE', args: { count: 1 } }
        ]
    },
    {
        id: 12,
        description: "4 tâches, dont une doit être faite en dernier (Omega).",
        constraints: [
            { type: 'TARGET_CARD', args: { count: 4 } },
            { type: 'ORDER_OMEGA', args: { count: 1 } }
        ]
    },
    {
        id: 13,
        description: "Accomplissez 4 tâches.",
        constraints: [
            { type: 'TARGET_CARD', args: { count: 4 } }
        ]
    },
    {
        id: 14,
        description: "4 tâches, ordre relatif (>, >>, >>>).",
        constraints: [
            { type: 'TARGET_CARD', args: { count: 4 } },
            { type: 'ORDER_RELATIVE', args: { count: 3 } }
        ]
    },
    {
        id: 15,
        description: "4 tâches dans l'ordre strict (1, 2, 3, 4).",
        constraints: [
            { type: 'TARGET_CARD', args: { count: 4 } },
            { type: 'ORDER_ABSOLUTE', args: { count: 4 } }
        ]
    },
    {
        id: 16,
        description: "Accomplissez 4 tâches.",
        constraints: [
            { type: 'TARGET_CARD', args: { count: 4 } }
        ]
    },
    {
        id: 17,
        description: "Accomplissez 5 tâches.",
        constraints: [
            { type: 'TARGET_CARD', args: { count: 5 } }
        ]
    },
    {
        id: 18,
        description: "Accomplissez 5 tâches.",
        constraints: [
            { type: 'TARGET_CARD', args: { count: 5 } }
        ]
    },
    {
        id: 19,
        description: "5 tâches, dont la tâche 1 doit être faite en premier.",
        constraints: [
            { type: 'TARGET_CARD', args: { count: 5 } },
            { type: 'ORDER_ABSOLUTE', args: { count: 1 } }
        ]
    },
    {
        id: 20,
        description: "Accomplissez 5 tâches.",
        constraints: [
            { type: 'TARGET_CARD', args: { count: 5 } }
        ]
    },
    {
        id: 21,
        description: "5 tâches, dont les tâches 1 et 2 dans l'ordre strict.",
        constraints: [
            { type: 'TARGET_CARD', args: { count: 5 } },
            { type: 'ORDER_ABSOLUTE', args: { count: 2 } }
        ]
    },
    {
        id: 22,
        description: "5 tâches, ordre relatif (>, >>, >>>, >>>>).",
        constraints: [
            { type: 'TARGET_CARD', args: { count: 5 } },
            { type: 'ORDER_RELATIVE', args: { count: 4 } }
        ]
    },
    {
        id: 23,
        description: "5 tâches dans l'ordre strict (1, 2, 3, 4, 5).",
        constraints: [
            { type: 'TARGET_CARD', args: { count: 5 } },
            { type: 'ORDER_ABSOLUTE', args: { count: 5 } }
        ]
    },
    {
        id: 24,
        description: "Accomplissez 6 tâches.",
        constraints: [
            { type: 'TARGET_CARD', args: { count: 6 } }
        ]
    },
    {
        id: 25,
        description: "6 tâches, ordre relatif (> et >>).",
        constraints: [
            { type: 'TARGET_CARD', args: { count: 6 } },
            { type: 'ORDER_RELATIVE', args: { count: 2 } }
        ]
    },
    {
        id: 26,
        description: "Accomplissez 6 tâches.",
        constraints: [
            { type: 'TARGET_CARD', args: { count: 6 } }
        ]
    },
    {
        id: 27,
        description: "Accomplissez 6 tâches.",
        constraints: [
            { type: 'TARGET_CARD', args: { count: 6 } }
        ]
    },
    {
        id: 28,
        description: "6 tâches, dont la tâche 1 en premier et Omega en dernier.",
        constraints: [
            { type: 'TARGET_CARD', args: { count: 6 } },
            { type: 'ORDER_ABSOLUTE', args: { count: 1 } },
            { type: 'ORDER_OMEGA', args: { count: 1 } }
        ]
    },
    {
        id: 29,
        description: "Accomplissez 6 tâches.",
        constraints: [
            { type: 'TARGET_CARD', args: { count: 6 } }
        ]
    },
    {
        id: 30,
        description: "6 tâches, ordre relatif (>, >>, >>>).",
        constraints: [
            { type: 'TARGET_CARD', args: { count: 6 } },
            { type: 'ORDER_RELATIVE', args: { count: 3 } }
        ]
    },
    {
        id: 31,
        description: "6 tâches, dont les tâches 1, 2 et 3 dans l'ordre strict.",
        constraints: [
            { type: 'TARGET_CARD', args: { count: 6 } },
            { type: 'ORDER_ABSOLUTE', args: { count: 3 } }
        ]
    },
    {
        id: 32,
        description: "Accomplissez 7 tâches.",
        constraints: [
            { type: 'TARGET_CARD', args: { count: 7 } }
        ]
    },
    {
        id: 33,
        description: "Accomplissez 7 tâches.",
        constraints: [
            { type: 'TARGET_CARD', args: { count: 7 } }
        ]
    },
    {
        id: 34,
        description: "Accomplissez 7 tâches.",
        constraints: [
            { type: 'TARGET_CARD', args: { count: 7 } }
        ]
    },
    {
        id: 35,
        description: "7 tâches, ordre relatif (>, >>, >>>).",
        constraints: [
            { type: 'TARGET_CARD', args: { count: 7 } },
            { type: 'ORDER_RELATIVE', args: { count: 3 } }
        ]
    },
    {
        id: 36,
        description: "7 tâches, dont les tâches 1 et 2 dans l'ordre strict.",
        constraints: [
            { type: 'TARGET_CARD', args: { count: 7 } },
            { type: 'ORDER_ABSOLUTE', args: { count: 2 } }
        ]
    },
    {
        id: 37,
        description: "Accomplissez 8 tâches.",
        constraints: [
            { type: 'TARGET_CARD', args: { count: 8 } }
        ]
    },
    {
        id: 38,
        description: "Accomplissez 8 tâches.",
        constraints: [
            { type: 'TARGET_CARD', args: { count: 8 } }
        ]
    },
    {
        id: 39,
        description: "8 tâches, ordre relatif (>, >>, >>>).",
        constraints: [
            { type: 'TARGET_CARD', args: { count: 8 } },
            { type: 'ORDER_RELATIVE', args: { count: 3 } }
        ]
    },
    {
        id: 40,
        description: "8 tâches, dont les tâches 1, 2 et 3 dans l'ordre strict.",
        constraints: [
            { type: 'TARGET_CARD', args: { count: 8 } },
            { type: 'ORDER_ABSOLUTE', args: { count: 3 } }
        ]
    },
    {
        id: 41,
        description: "Accomplissez 8 tâches.",
        constraints: [
            { type: 'TARGET_CARD', args: { count: 8 } }
        ]
    },
    {
        id: 42,
        description: "Accomplissez 9 tâches.",
        constraints: [
            { type: 'TARGET_CARD', args: { count: 9 } }
        ]
    },
    {
        id: 43,
        description: "Accomplissez 9 tâches.",
        constraints: [
            { type: 'TARGET_CARD', args: { count: 9 } }
        ]
    },
    {
        id: 44,
        description: "Accomplissez 9 tâches.",
        constraints: [
            { type: 'TARGET_CARD', args: { count: 9 } }
        ]
    },
    {
        id: 45,
        description: "9 tâches, ordre relatif (>, >>, >>>).",
        constraints: [
            { type: 'TARGET_CARD', args: { count: 9 } },
            { type: 'ORDER_RELATIVE', args: { count: 3 } }
        ]
    },
    {
        id: 46,
        description: "Accomplissez 9 tâches.",
        constraints: [
            { type: 'TARGET_CARD', args: { count: 9 } }
        ]
    },
    {
        id: 47,
        description: "Accomplissez 10 tâches.",
        constraints: [
            { type: 'TARGET_CARD', args: { count: 10 } }
        ]
    },
    {
        id: 48,
        description: "9 tâches, dont une doit être faite en dernier (Omega).",
        constraints: [
            { type: 'TARGET_CARD', args: { count: 9 } },
            { type: 'ORDER_OMEGA', args: { count: 1 } }
        ]
    },
    {
        id: 49,
        description: "10 tâches, ordre relatif (>, >>, >>>).",
        constraints: [
            { type: 'TARGET_CARD', args: { count: 10 } },
            { type: 'ORDER_RELATIVE', args: { count: 3 } }
        ]
    },
    {
        id: 50,
        description: "Accomplissez 10 tâches.",
        constraints: [
            { type: 'TARGET_CARD', args: { count: 10 } }
        ]
    }
];