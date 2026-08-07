export type UnitCategory = 'Unique' | 'Infantry' | 'Cavalry' | 'Flying' | 'Armored';
export type UnitRole = 'Tank' | 'Physical DPS' | 'Magic DPS' | 'Support' | 'Debuffer';
export type UnitTier = 'SS' | 'S' | 'A+' | 'A' | 'B' | 'C';
export type ItemType = 'Weapon' | 'Shield' | 'Accessory' | 'Tome';
export type SquadArchetype = 
  | 'Instant Board Wipe' 
  | 'Heavy Sustain' 
  | 'Cavalry Burst' 
  | 'Affliction Control' 
  | 'Magic Nuke';

export interface ActiveSkill {
  name: string;
  apCost: number;
  potency: number;
  target: string;
  flags: string[];
  description: string;
}

export interface PassiveSkill {
  name: string;
  ppCost: number;
  trigger: string;
  isStartOfBattle?: boolean;
  description: string;
}

export interface ValorSkill {
  name: string;
  vpCost: number;
  effect: string;
  areaOfEffect: string;
  description: string;
}

export interface GameSkill {
  id: string;
  name: string;
  type: 'Active' | 'Passive' | 'Valor' | 'Start of Battle';
  cost: string;
  potency?: number;
  target?: string;
  classSource: string;
  description: string;
  flags: string[];
}

export interface UnitClass {
  id: string;
  name: string;
  category: UnitCategory;
  role: UnitRole;
  tier: UnitTier;
  icon: string;
  baseStats: {
    hp: number;
    physAtk: number;
    magAtk: number;
    physDef: number;
    magDef: number;
    initiative: number;
    evasion: number;
    critRate: number;
  };
  activeSkills: ActiveSkill[];
  passiveSkills: PassiveSkill[];
  bestGrowthTypes: string[];
  synergiesWith: string[];
  recommendedEquipment: string[];
  overview: string;
  image?: string;
}

export interface TacticsRule {
  id: string;
  skillName: string;
  skillType: 'active' | 'passive';
  cost: number;
  condition1: string;
  condition2: string;
  isEnabled: boolean;
}

export interface TacticsStep {
  step: number;
  unit: string;
  skill: string;
  condition1: string;
  condition2: string;
  notes: string;
}

export interface UnitGearConfig {
  unitId: string;
  unitName: string;
  roleTitle?: string;
  weapon?: string;
  shieldOrHelm?: string;
  accessory1?: string;
  accessory2?: string;
  statPriorities?: string[];
  growthTypes?: [string, string];
}

export interface StrategyGuide {
  winCondition: string;
  overview: string;
  combatSequenceNotes: string[];
}

export interface ItemSubstitutes {
  earlyGame: string[];
  endgameAlternatives: string[];
}

export interface SquadBuild {
  id: string;
  name: string;
  archetype: SquadArchetype;
  tier: UnitTier;
  description: string;
  keyItems: string[];
  frontRow: (string | null)[];
  backRow: (string | null)[];
  tacticsSequence: TacticsStep[];
  pros: string[];
  cons: string[];
  counters: string[];
  isCustom?: boolean;
  isFavorite?: boolean;
  strategyGuide?: StrategyGuide;
  unitGearConfigs?: UnitGearConfig[];
  substitutes?: ItemSubstitutes;
  pvpRating?: string;
  pveRating?: string;
}

export interface RelicItem {
  id: string;
  name: string;
  type: ItemType;
  icon: string;
  grantedSkill?: {
    name: string;
    cost: string;
    description: string;
    isStartOfBattle?: boolean;
  };
  statBoosts: string;
  acquisition: string;
  isMetaCore: boolean;
  metaSquads: string[];
  image?: string;
}

export interface CounterStrategy {
  id: string;
  enemyArchetype: string;
  threatDescription: string;
  keyCounters: string[];
  recommendedUnits: string[];
  mustHaveItems: string[];
  tacticsConditions: string[];
  tacticalTip: string;
}

export interface SquadSlot {
  slotId: 'front-0' | 'front-1' | 'back-0' | 'back-1' | 'back-2';
  row: 'front' | 'back';
  index: number;
  unitId: string | null;
  growthTypes?: [string, string];
  customItems?: [string | null, string | null, string | null, string | null];
  customTactics?: TacticsRule[];
}

export interface SynergyAnalysis {
  cavalryCount: number;
  flyingCount: number;
  armoredCount: number;
  cavalryCallBonus: number;
  flyingSquadBonus: boolean;
  startOfBattleUnits: { unitId: string; unitName: string; skillName: string; initiative: number }[];
  startOfBattleConflict: boolean;
  conflictWinner?: string;
  initiativeTimeline: { slotId: string; unitName: string; speed: number; position: string }[];
  guardCoverage: number;
  sustainRating: 'Low' | 'Moderate' | 'High' | 'Godly';
  offenseRating: 'Low' | 'Moderate' | 'High' | 'S-Tier';
}

export interface SimulatedTurnStep {
  turnNumber: number;
  unitName: string;
  unitIcon: string;
  side?: 'player' | 'enemy';
  targetName?: string;
  skillName: string;
  skillType: 'active' | 'passive' | 'start_of_battle';
  costType: 'AP' | 'PP';
  costAmount: number;
  condition1: string;
  condition2: string;
  conditionStatus: 'PASS' | 'FAIL';
  damageDealt: number;
  healAmount: number;
  statusInflicted?: string;
  logMessage: string;
  apRemaining: number;
  ppRemaining: number;
}

export interface Battle5v5Result {
  winner: 'player' | 'enemy' | 'draw';
  playerWinRate: number;
  playerTotalDamage: number;
  enemyTotalDamage: number;
  playerCasualties: number;
  enemyCasualties: number;
  mvpUnit: string;
  combatSteps: SimulatedTurnStep[];
}
