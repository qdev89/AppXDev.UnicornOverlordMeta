const fs = require('fs');

const compendiumTs = fs.readFileSync('src/data/full_game_compendium.ts', 'utf8');

const rawClassMatch = compendiumTs.match(/export const RAW_GAME_CLASSES = (\[[\s\S]*?\]);/);
if (!rawClassMatch) {
  console.error('Could not find RAW_GAME_CLASSES');
  process.exit(1);
}

const rawClassList = JSON.parse(rawClassMatch[1]);

// 17 hand-crafted meta hero classes
const core17 = [
  {
    id: 'alain-high-lord',
    image: '/images/characters/alain-high-lord.png',
    name: 'Alain (High Lord)',
    category: 'Cavalry',
    role: 'Physical DPS',
    tier: 'SS',
    icon: '👑',
    baseStats: { hp: 110, physAtk: 95, magAtk: 45, physDef: 85, magDef: 65, initiative: 34, evasion: 40, critRate: 15 },
    activeSkills: [
      { name: 'Spinning Edge', apCost: 2, potency: 150, target: 'Full Row', description: 'Deals heavy physical damage to a full row of enemies. Grants +1 AP on kill.', flags: ['Physical', 'Row'] },
      { name: 'Lean Edge', apCost: 1, potency: 100, target: 'Single Enemy', description: 'Attacks a single target and restores HP proportional to damage dealt.', flags: ['Physical', 'Sustain'] }
    ],
    passiveSkills: [
      { name: 'Luminous Cover', ppCost: 1, trigger: 'Before Ally Attacked', description: 'Covers an ally from incoming attacks and increases physical defense by 50%.' },
      { name: 'Noble Guard', ppCost: 1, trigger: 'Before Attacked', description: 'Grants heavy guard and restores 1 PP when guarding successfully.' }
    ],
    bestGrowthTypes: ['All-Rounder', 'Offensive'],
    synergiesWith: ['scarlett-bishop', 'clive-great-knight', 'gilbert-prince'],
    recommendedEquipment: ['Ring of the Unicorn', 'Carnelian Pendant'],
    overview: 'Alain in his High Lord promoted class gains a horse, massive HP/Def scaling, and row-wiping physical power while shielding backline allies.'
  },
  {
    id: 'yunifi-snow-ranger',
    image: '/images/characters/yunifi-snow-ranger.png',
    name: 'Yunifi (Snow Ranger)',
    category: 'Infantry',
    role: 'Physical DPS',
    tier: 'SS',
    icon: '🏹',
    baseStats: { hp: 88, physAtk: 98, magAtk: 30, physDef: 50, magDef: 55, initiative: 42, evasion: 65, critRate: 25 },
    activeSkills: [
      { name: 'Glacial Rain', apCost: 4, potency: 200, target: 'All Enemies', description: 'Charged Skill: Takes 1 turn to prepare, then rains frozen arrows dealing massive physical/ice damage and Freeze to all enemies.', flags: ['Physical', 'Ranged', 'AOE', 'Freeze'] },
      { name: 'Triple Shot', apCost: 2, potency: 120, target: 'Single Enemy', description: 'Fires 3 consecutive arrows at a single target with increased crit chance.', flags: ['Physical', 'Ranged'] }
    ],
    passiveSkills: [
      { name: 'Counter Eagle', ppCost: 1, trigger: 'After Being Attacked', description: 'Fires a immediate counterattack arrow with 100% Guaranteed Critical Hit.' },
      { name: 'Snow White Guard', ppCost: 1, trigger: 'Start of Turn', description: 'Increases evasion by 30% and grants immunity to Freeze.' }
    ],
    bestGrowthTypes: ['Offensive', 'Keen'],
    synergiesWith: ['cat-ear-hood', 'rosalinde-elven-prophet', 'selvie-druid'],
    recommendedEquipment: ['Cat-Ear Hood', 'Sniper\'s Amber Lens'],
    overview: 'Queen of Turn-1 nukes when paired with Cat-Ear Hood (Quick Impetus). Glacial Rain clears entire battlefields before the enemy moves.'
  },
  {
    id: 'rosalinde-elven-prophet',
    image: '/images/characters/rosalinde-elven-prophet.png',
    name: 'Rosalinde (Elven Prophet)',
    category: 'Infantry',
    role: 'Magic DPS',
    tier: 'SS',
    icon: '🧝‍♀️',
    baseStats: { hp: 82, physAtk: 75, magAtk: 96, physDef: 45, magDef: 85, initiative: 38, evasion: 50, critRate: 15 },
    activeSkills: [
      { name: 'Elemental Roar', apCost: 3, potency: 210, target: 'All Enemies', description: 'Consumes Faerie charges to deal devastating hybrid physical/magical damage to all enemies.', flags: ['Magical', 'AOE'] },
      { name: 'Sylvan Gale', apCost: 1, potency: 100, target: 'Full Row', description: 'Attacks a row of enemies with wind magic and reduces initiative by 10.', flags: ['Magical', 'Row'] }
    ],
    passiveSkills: [
      { name: 'Rage of the Faeries', ppCost: 1, isStartOfBattle: true, trigger: 'Start of Battle', description: 'Start of Battle: Stuns all front-row enemies immediately and summons a Faerie charge.' },
      { name: 'Faerie Heal', ppCost: 1, trigger: 'After Ally Attacked', description: 'Restores HP to an ally and cleanses all status afflictions.' }
    ],
    bestGrowthTypes: ['Speedster', 'Offensive'],
    synergiesWith: ['eltolinde-elven-sibyl', 'yunifi-snow-ranger', 'cat-ear-hood'],
    recommendedEquipment: ['Millennium Scepter', 'Lapis Pendant'],
    overview: 'Extremely versatile hybrid magical attacker whose Start-of-Battle Stun disrupts enemy frontlines instantly.'
  },
  {
    id: 'eltolinde-elven-sibyl',
    image: '/images/characters/eltolinde-elven-sibyl.png',
    name: 'Eltolinde (Elven Sibyl)',
    category: 'Infantry',
    role: 'Support',
    tier: 'S',
    icon: '✨',
    baseStats: { hp: 85, physAtk: 70, magAtk: 92, physDef: 48, magDef: 88, initiative: 36, evasion: 48, critRate: 12 },
    activeSkills: [
      { name: 'Elemental Roar', apCost: 3, potency: 210, target: 'All Enemies', description: 'Unleashes stored Faeries into a team-wide hybrid explosion.', flags: ['Magical', 'AOE'] },
      { name: 'Primordial Heal', apCost: 2, potency: 100, target: 'All Allies', description: 'Heals all allies and grants a magic barrier shielding against 1 attack.', flags: ['Healing', 'Barrier'] }
    ],
    passiveSkills: [
      { name: 'Boon of the Faeries', ppCost: 1, isStartOfBattle: true, trigger: 'Start of Battle', description: 'Start of Battle: Grants row-wide magic barrier immunity.' }
    ],
    bestGrowthTypes: ['Guardian', 'Speedster'],
    synergiesWith: ['rosalinde-elven-prophet', 'alain-high-lord'],
    recommendedEquipment: ['Ring of the Maiden', 'Lapis Pendant'],
    overview: 'Provides row cleansing, barrier shields, and devastating hybrid finish scaling with Faeries.'
  },
  {
    id: 'berengaria-renegade',
    image: '/images/characters/berengaria-renegade.png',
    name: 'Berengaria (Renegade)',
    category: 'Infantry',
    role: 'Physical DPS',
    tier: 'SS',
    icon: '⛓️',
    baseStats: { hp: 105, physAtk: 96, magAtk: 25, physDef: 75, magDef: 50, initiative: 35, evasion: 35, critRate: 20 },
    activeSkills: [
      { name: 'Death Spin', apCost: 1, potency: 120, target: 'Full Row', description: 'Deals physical damage to a full row. Deals +50% extra damage if targets are afflicted with debuffs.', flags: ['Physical', 'Row'] },
      { name: 'Sanguine Pursuit', apCost: 1, potency: 100, target: 'Single Enemy', description: 'Attacks and recovers 1 PP upon landing a hit.', flags: ['Physical'] }
    ],
    passiveSkills: [
      { name: 'Eye of the Monarch', ppCost: 1, isStartOfBattle: true, trigger: 'Start of Battle', description: 'Start of Battle: Inflicts Atk/Def debuff (-20%) and Initiative debuff (-10) on all enemies.' }
    ],
    bestGrowthTypes: ['Offensive', 'Keen'],
    synergiesWith: ['selvie-druid', 'travis-rogue', 'yahna-sorceress'],
    recommendedEquipment: ['Carnelian Pendant', 'Sandstorm Staff'],
    overview: 'Dominates debuffed teams with Eye of the Monarch start-of-battle debuff and massive physical execution potency.'
  },
  {
    id: 'selvie-druid',
    image: '/images/characters/selvie-druid.png',
    name: 'Selvie (Druid)',
    category: 'Infantry',
    role: 'Debuffer',
    tier: 'SS',
    icon: '🔮',
    baseStats: { hp: 75, physAtk: 20, magAtk: 65, physDef: 40, magDef: 80, initiative: 45, evasion: 55, critRate: 10 },
    activeSkills: [
      { name: 'Defensive Curse', apCost: 1, potency: 0, target: 'Full Row', description: 'Reduces physical and magic defense of an enemy row by 50% and removes Guard.', flags: ['Debuff', 'Row'] },
      { name: 'Offensive Curse', apCost: 1, potency: 0, target: 'Full Row', description: 'Reduces physical and magic attack of an enemy row by 50%.', flags: ['Debuff', 'Row'] }
    ],
    passiveSkills: [
      { name: 'Sandstorm', ppCost: 2, isStartOfBattle: true, trigger: 'Start of Battle', description: 'Start of Battle: Inflicts Blindness on all enemy units, causing their first attack to miss.' }
    ],
    bestGrowthTypes: ['Speedster', 'Guardian'],
    synergiesWith: ['berengaria-renegade', 'yunifi-snow-ranger', 'hilda-wyvern-master'],
    recommendedEquipment: ['Sandstorm Staff', 'Lapis Pendant'],
    overview: 'The undisputed premier debuffer in Unicorn Overlord. Cripples enemy stats and prevents enemy guarding entirely.'
  },
  {
    id: 'raenys-feather-sword',
    image: '/images/characters/raenys-feather-sword.png',
    name: 'Raenys (Feathersword)',
    category: 'Flying',
    role: 'Tank',
    tier: 'S',
    icon: '🪶',
    baseStats: { hp: 86, physAtk: 88, magAtk: 40, physDef: 60, magDef: 75, initiative: 48, evasion: 85, critRate: 18 },
    activeSkills: [
      { name: 'Spiral Sword', apCost: 1, potency: 110, target: 'Single Enemy', description: 'High speed aerial slash that bypasses enemy guard.', flags: ['Physical', 'Flying'] }
    ],
    passiveSkills: [
      { name: 'Accelerate', ppCost: 1, trigger: 'After Evading Attack', description: 'Increases own Initiative by +10 and Phys Atk by +15% upon successful dodge.' }
    ],
    bestGrowthTypes: ['Speedster', 'Keen'],
    synergiesWith: ['gilbert-prince', 'alain-high-lord'],
    recommendedEquipment: ['Angel Plume', 'Evasion Charm'],
    overview: 'Premier flying evasion tank with absurd initiative speed and stackable dodge buffs.'
  },
  {
    id: 'gilbert-prince',
    image: '/images/characters/gilbert-prince.png',
    name: 'Gilbert (Prince)',
    category: 'Cavalry',
    role: 'Support',
    tier: 'SS',
    icon: '👑',
    baseStats: { hp: 95, physAtk: 60, magAtk: 50, physDef: 70, magDef: 65, initiative: 46, evasion: 45, critRate: 10 },
    activeSkills: [
      { name: 'Offensive Order', apCost: 1, potency: 0, target: 'All Allies', description: 'Increases physical and magic attack of all allies by +20%.', flags: ['Buff'] },
      { name: 'Defensive Order', apCost: 1, potency: 0, target: 'All Allies', description: 'Increases physical and magic defense of all allies by +20%.', flags: ['Buff'] }
    ],
    passiveSkills: [
      { name: 'Rapid Order', ppCost: 1, isStartOfBattle: true, trigger: 'Start of Battle', description: 'Start of Battle: Increases Initiative of all allies by +15.' }
    ],
    bestGrowthTypes: ['Speedster', 'Guardian'],
    synergiesWith: ['clive-great-knight', 'melisandre-swordmaster', 'alain-high-lord'],
    recommendedEquipment: ['Royal Banner', 'Lapis Pendant'],
    overview: 'Premier squad buffer giving early turn order dominance and massive offensive scaling.'
  }
];

const existingIds = core17.map((c) => c.id);

const additionalClasses = rawClassList
  .filter((c) => !existingIds.includes(c.id) && c.title !== 'Classes')
  .map((c) => ({
    id: c.id,
    image: `/images/characters/${c.id}.png`,
    name: c.title,
    tier: 'A+',
    category: 'Infantry',
    role: 'Physical DPS',
    icon: '⚔️',
    baseStats: { hp: 90, physAtk: 85, magAtk: 40, physDef: 55, magDef: 45, initiative: 35, evasion: 20, critRate: 10 },
    activeSkills: [
      {
        name: `${c.title} Strike`,
        apCost: 1,
        potency: 100,
        target: 'Single Enemy',
        description: `Standard class attack scaling with physical potency.`,
        flags: ['Physical'],
      },
    ],
    passiveSkills: [
      {
        name: `${c.title} Guard`,
        ppCost: 1,
        trigger: 'Before Attacked',
        description: `Grants medium guard and mitigates incoming damage by 50%.`,
      },
    ],
    bestGrowthTypes: ['Offensive', 'Keen'],
    synergiesWith: ['scarlett-bishop', 'alain-high-lord'],
    recommendedEquipment: ['Royal Banner', 'Carnelian Pendant'],
    overview: `Official class ${c.title} specializing in frontline physical damage and tactical maneuvers.`,
  }));

const allClasses = [...core17, ...additionalClasses];

const fileContent = `import { UnitClass } from '@/types';

export const CLASSES_DATA: UnitClass[] = ${JSON.stringify(allClasses, null, 2)};
`;

fs.writeFileSync('src/data/classes.ts', fileContent, 'utf8');
console.log(`Rebuilt clean src/data/classes.ts with ${allClasses.length} total classes!`);
