export type CardColor = 'Blue' | 'Green' | 'Pink' | 'Yellow' | 'Rocket';

export interface Card {
    color: CardColor;
    value: number;
}

export interface Mission {
    card: Card;
    owner: number;
    token?: string;
}

export interface Constraint {
    type: string;
    args?: any;
    player?: number;
    count?: number;
}

interface MoveInfo {
    player: number;
    card: Card;
}

interface SolveResult {
    iterations: number;
    solutionFound: boolean;
    time: number;
    solution_steps: MoveInfo[];
}


class GameRules {
    static isMoveValid(hand: Card[], card: Card, leadCard: Card | null): boolean {
        if (!leadCard) return true;
        if (card.color === leadCard.color) return true;
        
        const hasLeadColor = hand.some(c => c.color === leadCard.color);
        return !hasLeadColor;
    }

    static getTrickWinner(cards: Card[], starter: number): number {
        
        let bestPlayer = starter;
        let bestCard = cards[starter];
        const leadColor = bestCard.color;

        for (let i = 1; i < 4; i++) {
            const pIdx = (starter + i) % 4;
            const currentCard = cards[pIdx];

            const isBestRocket = bestCard.color === 'Rocket';
            const isCurrentRocket = currentCard.color === 'Rocket';

            if (isCurrentRocket) {
                if (!isBestRocket) {
                    bestCard = currentCard;
                    bestPlayer = pIdx;
                } else {
                    if (currentCard.value > bestCard.value) {
                        bestCard = currentCard;
                        bestPlayer = pIdx;
                    }
                }
            } else if (!isBestRocket && currentCard.color === leadColor) {
                if (currentCard.value > bestCard.value) {
                    bestCard = currentCard;
                    bestPlayer = pIdx;
                }
            }
        }
        return bestPlayer;
    }
}

export class TheCrewSolverJS {
    private originalHands: Card[][];
    private missions: Mission[];
    private iterations: number = 0;
    private startTime: number = 0;
    private solution: MoveInfo[] = [];
    private memo: Map<string, boolean> = new Map();
    private targetMap: Record<string, { owner: number, idx: number }> = {};
    private bannedPlayers: Set<number> = new Set();
    private trickCounts: Record<number, number> = {};
    private trickSpecificWinner: Record<number, number> = {};
    private forbiddenWins: any[] = [];
    private balanceConstraint: number | null = null;
    private minWinValueConstraints: any[] = [];
    private sequenceConstraint: string[] | null = null;

    constructor(
        gameStateJson: { player_1: any[], player_2: any[], player_3: any[], player_4: any[] },
        missions: Mission[],
        constraints: Constraint[] = []
    ) {
        this.originalHands = [
            gameStateJson.player_1.map(c => ({ color: c.color, value: Number(c.value) })),
            gameStateJson.player_2.map(c => ({ color: c.color, value: Number(c.value) })),
            gameStateJson.player_3.map(c => ({ color: c.color, value: Number(c.value) })),
            gameStateJson.player_4.map(c => ({ color: c.color, value: Number(c.value) }))
        ];

        this.missions = missions;

        this.missions.forEach((m, idx) => {
            const key = `${m.card.color}-${m.card.value}`;
            this.targetMap[key] = { owner: m.owner, idx };
        });

        constraints.forEach(c => {
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

    public solve(): SolveResult {
        this.startTime = performance.now();
        this.iterations = 0;
        this.solution = [];
        this.memo.clear();

        const startPlayer = this.findCommander();
        
        const initialMissionTicks = new Array(this.missions.length).fill(0);
        const initialWinnersCount = [0, 0, 0, 0];
        
        const found = this.dfs(
            this.originalHands,
            [],
            startPlayer,
            startPlayer,
            [],
            initialMissionTicks,
            1,
            initialWinnersCount,
            0,
            0
        );

        return {
            iterations: this.iterations,
            solutionFound: found,
            time: Math.floor(performance.now() - this.startTime),
            solution_steps: this.solution
        };
    }

    private findCommander(): number {
        for (let i = 0; i < 4; i++) {
            if (this.originalHands[i].some(c => c.color === 'Rocket' && c.value === 4)) return i;
        }
        return 0;
    }

    private getStateKey(hands: Card[][], missionTicks: number[], trickStarter: number, currentTrick: {p: number, c: Card}[], winnersCount: number[], seqIdx: number, specCount: number): string {
        const handsSig = hands.map(h => 
            h.map(c => c.color[0] + c.value).sort().join(',')
        ).join('|');
        
        const trickSig = currentTrick.map(t => `${t.p}:${t.c.color[0]}${t.c.value}`).join(';');
        
        return `${handsSig}#${missionTicks.join(',')}#${trickStarter}#${trickSig}#${winnersCount.join(',')}#${seqIdx}#${specCount}`;
    }

    private optimizeValidCards(validCards: Card[], currentTrick: {p: number, c: Card}[]): Card[] {
        if (validCards.length <= 2) return validCards;

        const optimized: Card[] = [];
        const bySuit: Record<string, Card[]> = {};

        validCards.forEach(c => {
            if (!bySuit[c.color]) bySuit[c.color] = [];
            bySuit[c.color].push(c);
        });

        const leadColor = currentTrick.length > 0 ? currentTrick[0].c.color : null;

        for (const color in bySuit) {
            const cards = bySuit[color];
            
            if (color === 'Rocket') {
                optimized.push(...cards);
                continue;
            }

            if (leadColor && color === leadColor) {
                optimized.push(...cards);
                continue;
            }

            const missionCards: Card[] = [];
            const garbageCards: Card[] = [];

            cards.forEach(c => {
                if (this.targetMap[`${c.color}-${c.value}`]) missionCards.push(c);
                else garbageCards.push(c);
            });

            optimized.push(...missionCards);

            if (garbageCards.length > 0) {
                garbageCards.sort((a, b) => a.value - b.value);
                optimized.push(garbageCards[0]);
                if (garbageCards.length > 1) {
                    optimized.push(garbageCards[garbageCards.length - 1]);
                }
            }
        }
        return optimized;
    }

    private checkMissionTokens(missionTicks: number[]): boolean {
        const tokenTicks: Record<string, number[]> = {};
        
        this.missions.forEach((m, i) => {
            const token = m.token || 'None';
            const tick = missionTicks[i];
            if (!tokenTicks[token]) tokenTicks[token] = [];
            tokenTicks[token].push(tick);
        });

        const checkOrder = ['1', '2', '3', '4', '5'];
        for (let k = 0; k < checkOrder.length - 1; k++) {
            const tCurr = checkOrder[k];
            const tNext = checkOrder[k+1];
            if (tokenTicks[tCurr] && tokenTicks[tNext]) {
                const tickC = Math.max(...tokenTicks[tCurr]);
                const tickN = Math.max(...tokenTicks[tNext]);
                if (tickC > 0 && tickN > 0 && tickC > tickN) return false;
                if (tickN > 0 && tickC === 0) return false;
            }
        }

        const arrowOrder = ['>', '>>', '>>>', '>>>>'];
        for (let k = 0; k < arrowOrder.length - 1; k++) {
            const tCurr = arrowOrder[k];
            const tNext = arrowOrder[k+1];
            if (tokenTicks[tCurr] && tokenTicks[tNext]) {
                const tickC = Math.max(...tokenTicks[tCurr]);
                const tickN = Math.max(...tokenTicks[tNext]);
                if (tickC > 0 && tickN > 0 && tickC > tickN) return false;
                if (tickN > 0 && tickC === 0) return false;
            }
        }

        return true;
    }

    private dfs(
        hands: Card[][], 
        currentTrick: {p: number, c: Card}[], 
        trickStarter: number, 
        currentPlayer: number, 
        history: MoveInfo[], 
        missionTicks: number[], 
        trickNumber: number, 
        winnersCount: number[], 
        seqIndex: number, 
        specCount: number
    ): boolean {
        this.iterations++;
        if (this.iterations > 2500000) return false;
        if (this.iterations % 5000 === 0 && (performance.now() - this.startTime > 3000)) return false;

        let stateKey = "";
        if (currentTrick.length === 0) {
            stateKey = this.getStateKey(hands, missionTicks, trickStarter, currentTrick, winnersCount, seqIndex, specCount);
            if (this.memo.has(stateKey)) return false;
        }

        if (hands.every(h => h.length === 0)) {
            if (!missionTicks.every(t => t > 0)) return false;
            if (!this.checkMissionTokens(missionTicks)) return false;

            const omegaIdx = this.missions.findIndex(m => m.token === 'Omega');
            if (omegaIdx !== -1) {
                const omegaTick = missionTicks[omegaIdx];
                const maxOther = Math.max(...missionTicks.filter((_, i) => i !== omegaIdx));
                if (omegaTick < maxOther) return false;
            }

            if (this.balanceConstraint !== null) {
                const min = Math.min(...winnersCount);
                const max = Math.max(...winnersCount);
                if (max - min > this.balanceConstraint) return false;
            }
            for (const c of this.minWinValueConstraints) {
                if (specCount < (c.minCount || 1)) return false;
            }
            for (const p in this.trickCounts) {
                if (winnersCount[parseInt(p)] !== this.trickCounts[p]) return false;
            }

            this.solution = history;
            return true;
        }

        const myHand = hands[currentPlayer];
        const leadCard = currentTrick.length > 0 ? currentTrick[0].c : null;
        
        let validCards = myHand.filter(c => GameRules.isMoveValid(myHand, c, leadCard));
        if (currentTrick.length === 3) {
            const optimizedTrickCards: Card[] = [];
            
            for (const card of validCards) {
                const tempTrick = [...currentTrick, {p: currentPlayer, c: card}];
                const cardsObj: Card[] = new Array(4);
                tempTrick.forEach(t => cardsObj[t.p] = t.c);
                
                const winner = GameRules.getTrickWinner(cardsObj, trickStarter);
                const wCard = cardsObj[winner];

                if (this.bannedPlayers.has(winner)) continue;
                if (this.trickCounts[winner] !== undefined && winnersCount[winner] + 1 > this.trickCounts[winner]) continue;
                if (this.trickSpecificWinner[trickNumber] !== undefined && winner !== this.trickSpecificWinner[trickNumber]) continue;

                let isForbidden = false;
                for (const f of this.forbiddenWins) {
                    if (f.value && wCard.value === f.value) isForbidden = true;
                    if (f.color && wCard.color === f.color) isForbidden = true;
                }
                if (isForbidden) continue;

                if (this.sequenceConstraint && wCard.color === 'Rocket') {
                     const expectedVal = parseInt(this.sequenceConstraint[seqIndex].replace(/\D/g, ''));
                     if (wCard.value !== expectedVal) continue;
                }

                let missionFail = false;
                for (const played of tempTrick) {
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
            
            if (validCards.length === 0) {``
                return false;
            }
        }

        if (currentTrick.length < 3) {
            validCards = this.optimizeValidCards(validCards, currentTrick);
        }

        validCards.sort((a, b) => {
            if (a.color === 'Rocket' && b.color !== 'Rocket') return -1;
            if (b.color === 'Rocket' && a.color !== 'Rocket') return 1;
            return b.value - a.value;
        });

        for (const card of validCards) {
            const newHands = hands.map((h, i) => i === currentPlayer ? h.filter(c => c !== card) : h);
            
            const moveInfo: MoveInfo = { player: currentPlayer, card: { color: card.color, value: card.value } };
            const newTrick = [...currentTrick, { p: currentPlayer, c: card }];

            if (newTrick.length === 4) {
                const cardsObj: Card[] = new Array(4);
                newTrick.forEach(t => cardsObj[t.p] = t.c);
                
                const winner = GameRules.getTrickWinner(cardsObj, trickStarter);
                const wCard = cardsObj[winner];

                const newWinnersCount = [...winnersCount];
                newWinnersCount[winner]++;

                let newSpecCount = specCount;
                this.minWinValueConstraints.forEach(c => {
                    if (wCard.value === c.withCardValue) newSpecCount++;
                });

                let newSeqIndex = seqIndex;
                if (this.sequenceConstraint && wCard.color === 'Rocket') {
                    const expected = parseInt(this.sequenceConstraint[seqIndex].replace(/\D/g, ''));
                    if (wCard.value === expected) newSeqIndex++;
                }

                const newMissionTicks = [...missionTicks];
                for (const played of newTrick) {
                    const key = `${played.c.color}-${played.c.value}`;
                    if (this.targetMap[key]) {
                        const target = this.targetMap[key];
                        if (newMissionTicks[target.idx] === 0) {
                            newMissionTicks[target.idx] = trickNumber;
                        }
                    }
                }

                if (!this.checkMissionTokens(newMissionTicks)) continue;

                if (this.dfs(
                    newHands, 
                    [],
                    winner,
                    winner, 
                    [...history, moveInfo], 
                    newMissionTicks, 
                    trickNumber + 1, 
                    newWinnersCount, 
                    newSeqIndex, 
                    newSpecCount
                )) return true;

            } else {
                if (this.dfs(
                    newHands, 
                    newTrick, 
                    trickStarter, 
                    (currentPlayer + 1) % 4, 
                    [...history, moveInfo], 
                    missionTicks, 
                    trickNumber, 
                    winnersCount, 
                    seqIndex, 
                    specCount
                )) return true;
            }
        }

        if (currentTrick.length === 0) {
            this.memo.set(stateKey, false);
        }

        return false;
    }
}