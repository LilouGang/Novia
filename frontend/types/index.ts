export type CardData = {
  id: string; 
  color: 'Blue' | 'Green' | 'Pink' | 'Yellow' | 'Rocket';
  value: number;
  owner: number;
  // AJOUT DE 'COMMUNICATED' ICI
  status: 'HAND' | 'TABLE' | 'WON' | 'COMMUNICATED';
  zIndex: number;
  tableRotation: number;
  winnerIndex?: number;
};

export type MoveStep = {
    player: number;
    card: { color: string, value: number };
};

export type SolverStats = {
  solution_steps: MoveStep[];
  solutionFound: boolean;
  iterations: number;
};

export type MissionStatus = 'PENDING' | 'SUCCESS' | 'FAILED';

export type MissionUI = {
    cardColor: string;
    cardValue: number;
    ownerIndex: number;
    token: string;
    status?: MissionStatus;
};

export type ConstraintType = 
    | 'TARGET_CARD'        
    | 'TRICK_COUNT'        
    | 'NO_TRICKS'          
    | 'SPECIFIC_WIN'       
    | 'FORBIDDEN_WIN_CARD' 
    | 'ORDER_ABSOLUTE'     
    | 'ORDER_RELATIVE'     
    | 'ORDER_OMEGA'        
    | 'COMMUNICATION'      
    | 'DISTRIBUTION'       
    | 'GAME_MODIFIER'      
    | 'TRICK_SEQUENCE'     
    | 'BALANCE';           

export type MissionConstraintDef = {
    type: ConstraintType;
    args: any; 
};

export type RealMissionDef = {
    id: number;
    description: string;
    constraints: MissionConstraintDef[];
};

export type BackendConstraint = {
    type: ConstraintType;
    player?: number; 
    count?: number;
    args?: any; 
};

export type Communication = {
    player: number; 
    card: { color: string, value: number };
    type: 'TOP' | 'MIDDLE' | 'BOTTOM';
};

export type ReplayStep = {
    player: number;
    card: { color: string, value: number };
    reward?: number;
    step_info?: string;
    // AJOUT DE 'COMMUNICATE' ICI
    action_type?: 'PLAY' | 'COLLECT' | 'INFO' | 'COMMUNICATE'; 
};

export type SavedReplay = {
    episode: number;
    replay: ReplayStep[];
    reward: number;
    initial_missions: MissionUI[];
    initial_hands?: { color: string, value: number, owner: number }[];
};

export type TrainingStats = {
    episode: number;
    max_episodes: number;
    avg_reward: number;
    epsilon: number;
    last_game_result: 'WIN' | 'LOSE';
    best_replay?: ReplayStep[]; 
    milestone_replay?: ReplayStep[]; 
    milestone_missions?: MissionUI[];
    total_lifetime_games: number;
};