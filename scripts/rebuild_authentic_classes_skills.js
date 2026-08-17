const fs = require('fs');

// Master Authentic Unicorn Overlord Class Definitions
const AUTHENTIC_CLASSES = [
  {
    id: "high-lord",
    name: "High Lord",
    category: "Promoted",
    role: "Tank",
    tier: "SS",
    icon: "👑",
    baseStats: { hp: 110, physAtk: 95, magAtk: 35, physDef: 90, magDef: 65, initiative: 42, evasion: 45, critRate: 15 },
    activeSkills: [
      { name: "Lean Edge", apCost: 1, potency: 100, target: "Single Enemy", flags: ["Physical", "Sustain"], description: "Strike a single target and heal HP equal to 50% of damage dealt." },
      { name: "Spinning Edge", apCost: 2, potency: 150, target: "Enemy Row", flags: ["Physical", "Row", "AP Restore"], description: "Cleave an entire enemy row with heavy physical damage. Grants +1 AP on kill." },
      { name: "Shield Bash", apCost: 1, potency: 100, target: "Single Enemy", flags: ["Physical", "Stun"], description: "Strike with shield, dealing physical damage and inflicting Stun." }
    ],
    passiveSkills: [
      { name: "Luminous Cover", ppCost: 1, trigger: "Before Ally Attacked", flags: ["Cover", "Defense"], description: "Cover an ally from incoming attacks and increase physical defense by 50%." },
      { name: "Noble Guard", ppCost: 1, trigger: "Before Attacked", flags: ["Guard", "PP Restore"], description: "Execute a heavy guard and restore 1 PP upon guarding successfully." },
      { name: "Cavalry Call", ppCost: 1, trigger: "Start of Battle", isStartOfBattle: true, flags: ["Buff", "Cavalry"], description: "At Start of Battle, grant all cavalry allies +20% Physical Attack." }
    ],
    bestGrowthTypes: ["All-Rounder", "Offensive"],
    synergiesWith: ["Great Knight", "Sergeant", "High Priestess", "Swordmaster"],
    recommendedEquipment: ["Holy Unicorn Blade", "Azure Crest Shield", "Ring of the Unicorn", "Carnelian Pendant"],
    overview: "Alain's promoted class. Supreme frontline leader with heavy guard sustain, row-cleaving attack power, and cavalry offensive synergy."
  },
  {
    id: "swordmaster",
    name: "Swordmaster",
    category: "Promoted",
    role: "Physical DPS",
    tier: "S+",
    icon: "⚔️",
    baseStats: { hp: 82, physAtk: 92, magAtk: 30, physDef: 52, magDef: 50, initiative: 46, evasion: 72, critRate: 35 },
    activeSkills: [
      { name: "First Strike", apCost: 1, potency: 100, target: "Single Enemy", flags: ["Physical", "High Speed"], description: "Swift strike that attacks before the enemy can act." },
      { name: "Keen Edge", apCost: 1, potency: 100, target: "Single Enemy", flags: ["Physical", "Crit Boost"], description: "Strike an enemy, granting self +50% Critical Rate for the rest of the battle." },
      { name: "Meteor Slash", apCost: 2, potency: 225, target: "Single Enemy", flags: ["Physical", "Multi-Hit", "Critical"], description: "Unleash a 9-hit blinding flurry of slashes against a single target with guaranteed critical hits." },
      { name: "Hastened Strike", apCost: 1, potency: 100, target: "Single Enemy", flags: ["Start of Battle", "Truestrike"], description: "At Start of Battle, immediately strike a priority enemy before any turns begin." }
    ],
    passiveSkills: [
      { name: "Parry", ppCost: 1, trigger: "Before Attacked", flags: ["Nullify", "AP Restore"], description: "Completely nullify an incoming melee physical attack and restore +1 AP." },
      { name: "Focus", ppCost: 1, trigger: "Before Active Action", flags: ["Self Buff", "Crit Rate"], description: "Sharpen focus, granting +30% Accuracy and +30% Critical Rate." },
      { name: "Following Slash", ppCost: 1, trigger: "After Ally Attacks", flags: ["Pursuit"], description: "Follow up an ally's attack with a rapid physical strike." }
    ],
    bestGrowthTypes: ["Keen", "Keen"],
    synergiesWith: ["High Lord", "Sergeant", "Prince"],
    recommendedEquipment: ["Kingsblade Cornix", "Pursuant's Blade", "Lucky Coin", "Carnelian Pendant"],
    overview: "Dual-wielding master duelist capable of parrying physical strikes, earning extra AP, and shredding targets with 9-hit Meteor Slash."
  },
  {
    id: "high-priestess",
    name: "High Priestess",
    category: "Promoted",
    role: "Support",
    tier: "SS",
    icon: "✨",
    baseStats: { hp: 80, physAtk: 30, magAtk: 90, physDef: 45, magDef: 95, initiative: 35, evasion: 40, critRate: 10 },
    activeSkills: [
      { name: "Holy Light", apCost: 1, potency: 100, target: "Ally / Undead", flags: ["Healing", "Cleanse", "Anti-Undead"], description: "Heal an ally's HP and cleanse all status ailments. Deals heavy magic damage to Undead." },
      { name: "Innocent Ray", apCost: 2, potency: 150, target: "Enemy Column", flags: ["Magical", "Column"], description: "Blast a radiant pillar of light piercing through an enemy column." },
      { name: "Curative Heal", apCost: 1, potency: 120, target: "Single Ally", flags: ["Healing"], description: "Restore high HP to target ally and grant continuous HP regeneration." }
    ],
    passiveSkills: [
      { name: "Passive Supply", ppCost: 1, trigger: "Start of Turn", flags: ["Support", "PP Grant"], description: "Transfer 1 Passive Point to an ally with low PP." },
      { name: "Quick Heal", ppCost: 1, trigger: "When Ally Attacked", flags: ["Reactive Healing"], description: "Immediately heal an ally when they sustain significant damage." },
      { name: "Parting Resurrection", ppCost: 2, trigger: "End of Battle", flags: ["Revive"], description: "Resurrect a fallen ally at the conclusion of combat with 50% HP." }
    ],
    bestGrowthTypes: ["Guardian", "All-Rounder"],
    synergiesWith: ["High Lord", "Great Knight", "Legionnaire"],
    recommendedEquipment: ["Sacral Rod", "Blessed Roundshield", "Scarlett's Ribbon", "Lapis Pendant"],
    overview: "Scarlett's unique high priestess class. Combines column magic nuking with supreme single-target sustain, ailment dispelling, and passive PP supply."
  },
  {
    id: "great-knight",
    name: "Great Knight",
    category: "Promoted",
    role: "Physical DPS",
    tier: "S+",
    icon: "🐎",
    baseStats: { hp: 102, physAtk: 92, magAtk: 25, physDef: 75, magDef: 45, initiative: 40, evasion: 30, critRate: 15 },
    activeSkills: [
      { name: "Assaulting Lance", apCost: 1, potency: 100, target: "Single Enemy", flags: ["Physical", "AP On Kill"], description: "Powerful spear strike that restores +1 AP upon defeating the target." },
      { name: "Wild Rush", apCost: 2, potency: 150, target: "Enemy Column", flags: ["Physical", "Column", "Stun", "Anti-Infantry"], description: "Trample through an enemy column with 200% bonus damage to infantry and inflict Stun." },
      { name: "Pile Thrust", apCost: 1, potency: 120, target: "Single Enemy", flags: ["Physical", "Armor Piercing"], description: "Heavy thrust piercing through 30% of target Physical Defense." }
    ],
    passiveSkills: [
      { name: "Knight's Pursuit", ppCost: 1, trigger: "After Ally Attacks", flags: ["Pursuit", "Cavalry"], description: "Trample in with a pursuit spear strike following an ally's attack." },
      { name: "Cavalry Call", ppCost: 1, trigger: "Start of Battle", isStartOfBattle: true, flags: ["Buff", "Cavalry"], description: "Increase Physical Attack of all cavalry allies in the squad by 20%." }
    ],
    bestGrowthTypes: ["Offensive", "All-Rounder"],
    synergiesWith: ["High Lord", "Sergeant", "Radiant Knight"],
    recommendedEquipment: ["Dragoon's Warspear", "Chivalric Shield", "Heavensteed Reins", "Carnelian Pendant"],
    overview: "Devastating cavalry powerhouse. Wild Rush column sweeps annihilate infantry, while Assaulting Lance chains kills."
  },
  {
    id: "sergeant",
    name: "Sergeant",
    category: "Promoted",
    role: "Support",
    tier: "SS",
    icon: "🚩",
    baseStats: { hp: 88, physAtk: 78, magAtk: 35, physDef: 60, magDef: 60, initiative: 44, evasion: 40, critRate: 20 },
    activeSkills: [
      { name: "Javelin", apCost: 1, potency: 100, target: "Single Enemy", flags: ["Physical", "Ranged"], description: "Hurl a spear at any target, ignoring frontline protection." },
      { name: "Long Thrust", apCost: 1, potency: 120, target: "Enemy Column", flags: ["Physical", "Column", "Truestrike"], description: "Pierce through an enemy column with 100% Truestrike accuracy." },
      { name: "Wide Needle", apCost: 2, potency: 150, target: "Enemy Row", flags: ["Physical", "Row"], description: "Sweep spear across an entire enemy row, piercing armor." }
    ],
    passiveSkills: [
      { name: "Keen Call", ppCost: 1, trigger: "When Ally Attacks", flags: ["Buff", "Guaranteed Crit"], description: "Grant 100% Guaranteed Critical Hit on an attacking ally's active skill." },
      { name: "First Aid", ppCost: 1, trigger: "End of Battle", flags: ["Healing"], description: "Heal all wounded squad members for 25% HP at the end of combat." },
      { name: "Active Supply", ppCost: 1, trigger: "Start of Turn", flags: ["Support", "AP Grant"], description: "Grant +1 AP to an adjacent ally." }
    ],
    bestGrowthTypes: ["Speedster", "Guardian"],
    synergiesWith: ["High Lord", "Great Knight", "Swordmaster", "Breaker"],
    recommendedEquipment: ["Sacral Spear", "Chloe's Charm", "Dove Plume", "Lapis Pendant"],
    overview: "The core engine of burst damage teams. Keen Call guarantees critical hits for heavy nukers, while Long Thrust pierces evasion units."
  },
  {
    id: "legionnaire",
    name: "Legionnaire",
    category: "Promoted",
    role: "Tank",
    tier: "S+",
    icon: "🛡️",
    baseStats: { hp: 120, physAtk: 65, magAtk: 15, physDef: 105, magDef: 30, initiative: 18, evasion: 10, critRate: 5 },
    activeSkills: [
      { name: "Heavy Slash", apCost: 1, potency: 100, target: "Single Enemy", flags: ["Physical"], description: "Deliver a heavy shield-assisted sword strike." },
      { name: "Guard Stance", apCost: 1, potency: 0, target: "Self", flags: ["Self Buff", "Guard 100%"], description: "Enter defensive stance, guaranteeing 100% heavy guards on all incoming hits." }
    ],
    passiveSkills: [
      { name: "Heavy Cover", ppCost: 1, trigger: "Before Ally Attacked", flags: ["Cover", "Damage Immunity"], description: "Cover an ally with Greatshield, taking 0 damage from ranged and physical attacks." },
      { name: "Row Cover", ppCost: 2, trigger: "Before Row Attacked", flags: ["Row Cover", "Protection"], description: "Cover an entire row of allies from wide sweep attacks." },
      { name: "Indomitable", ppCost: 1, trigger: "Upon Lethal Damage", flags: ["Survive"], description: "Survive lethal damage with 1 HP remaining." }
    ],
    bestGrowthTypes: ["Guardian", "Tough"],
    synergiesWith: ["Sorcerer", "Sorceress", "Bishop", "Druid"],
    recommendedEquipment: ["General's Pike", "Azure Crest Shield", "Heavy Guard Shield", "Lapis Pendant"],
    overview: "Impentrable physical fortress. Heavy Cover and Row Cover completely protect fragile backline casters from all physical harm."
  },
  {
    id: "druid",
    name: "Druid",
    category: "Promoted",
    role: "Debuffer",
    tier: "SS",
    icon: "🔮",
    baseStats: { hp: 75, physAtk: 20, magAtk: 80, physDef: 40, magDef: 90, initiative: 45, evasion: 35, critRate: 10 },
    activeSkills: [
      { name: "Defensive Curse", apCost: 1, potency: 0, target: "Enemy Row", flags: ["Debuff", "Row", "Armor Break"], description: "Reduce enemy row Physical Defense and Magical Defense by 50% and disable guard." },
      { name: "Offensive Curse", apCost: 1, potency: 0, target: "Enemy Row", flags: ["Debuff", "Row", "Attack Break"], description: "Reduce enemy row Physical Attack and Magical Attack by 50%." },
      { name: "Gravity", apCost: 1, potency: 0, target: "Enemy Row", flags: ["Debuff", "Initiative Down"], description: "Reduce enemy row Initiative by 20 and drain 1 AP." }
    ],
    passiveSkills: [
      { name: "Quick Curse", ppCost: 1, trigger: "Before Enemy Attacks", flags: ["Reaction", "Debuff"], description: "Reduce an enemy's damage output by 50% immediately before they hit." },
      { name: "Cursed Swamp", ppCost: 2, trigger: "Start of Battle", isStartOfBattle: true, flags: ["Start of Battle", "Row Debuff"], description: "At Start of Battle, reduce all ground enemies' Initiative by 15 and remove their Guard capability." },
      { name: "Parting Curse", ppCost: 1, trigger: "Upon Death", flags: ["Retaliation Debuff"], description: "Inflict heavy stat debuffs on all enemies upon falling." }
    ],
    bestGrowthTypes: ["Speedster", "Guardian"],
    synergiesWith: ["Sorcerer", "Sorceress", "Legionnaire", "Berengaria"],
    recommendedEquipment: ["Dustbound Staff", "Druid's Robes", "Sandstorm Staff", "Lapis Pendant"],
    overview: "Selvie's class. The most dominant debuffer in the game. Strips 50% of enemy defenses and negates enemy turn advantage with Cursed Swamp."
  },
  {
    id: "sorcerer",
    name: "Sorcerer",
    category: "Promoted",
    role: "Magic DPS",
    tier: "SS",
    icon: "⚡",
    baseStats: { hp: 74, physAtk: 20, magAtk: 105, physDef: 30, magDef: 95, initiative: 33, evasion: 25, critRate: 20 },
    activeSkills: [
      { name: "Fireball", apCost: 1, potency: 100, target: "Single Enemy", flags: ["Magical", "Burn"], description: "Cast a blazing fireball that inflicts Burn." },
      { name: "Flame Burst", apCost: 2, potency: 150, target: "Enemy Column", flags: ["Magical", "Column", "Burn"], description: "Explode a column with volcanic flames, inflicting heavy Burn." },
      { name: "Volcano", apCost: 3, potency: 200, target: "All Enemies", flags: ["Magical", "All Enemies", "Charge"], description: "Erupt a massive volcano raining fiery devastation on all enemies." }
    ],
    passiveSkills: [
      { name: "Focus Sight", ppCost: 1, trigger: "Before Active Action", flags: ["Truestrike"], description: "Grant 100% Truestrike and +30% Magic Crit to next active spell." },
      { name: "Sorcerous Connection", ppCost: 1, trigger: "When Ally Casts Magic", flags: ["Magic Boost"], description: "Grant +50% Magic Attack and +30% Magic Crit to casting ally." },
      { name: "Magic Pursuit", ppCost: 1, trigger: "After Ally Attacks", flags: ["Magic Pursuit"], description: "Follow up an ally's strike with a magical bolt." }
    ],
    bestGrowthTypes: ["Offensive", "Offensive"],
    synergiesWith: ["Sorceress", "Bishop", "Legionnaire", "Druid"],
    recommendedEquipment: ["Millenium Scepter", "Sniper's Amber Lens", "Black Cat-Ear Hood", "Carnelian Pendant"],
    overview: "Auch's class. Supreme magic damage dealer capable of board-wiping with Millenium Scepter's Trinity Rain when fueled by Quick Impetus."
  },
  {
    id: "valkyria",
    name: "Valkyria",
    category: "Promoted",
    role: "Tank",
    tier: "SS",
    icon: "🛡️",
    baseStats: { hp: 100, physAtk: 88, magAtk: 40, physDef: 85, magDef: 75, initiative: 36, evasion: 40, critRate: 20 },
    activeSkills: [
      { name: "Vertical Edge", apCost: 1, potency: 120, target: "Single Enemy", flags: ["Physical", "Anti-Flying", "Anti-Infantry"], description: "Vertical overhead slash dealing bonus damage against flying and infantry." },
      { name: "Maiden's Hammer", apCost: 2, potency: 180, target: "Single Enemy", flags: ["Physical", "Guard Break", "Anti-Armor"], description: "Shatter enemy guard with a crushing blow that ignores physical defense on armored targets." },
      { name: "Shield Smite", apCost: 1, potency: 130, target: "Single Enemy", flags: ["Physical", "Stun"], description: "Smash target with dual shields, inflicting Stun." }
    ],
    passiveSkills: [
      { name: "Iron Veil", ppCost: 1, trigger: "Start of Battle", isStartOfBattle: true, flags: ["Start of Battle", "Buff", "Defense"], description: "At Start of Battle, grant all squad allies +30% Physical Defense and +20% Guard Rate." },
      { name: "Impassioned Guard", ppCost: 1, trigger: "Before Attacked", flags: ["Heavy Guard", "AP Gain"], description: "Execute a heavy guard, take reduced damage, and gain +1 AP." },
      { name: "Unwavering Stance", ppCost: 1, trigger: "Passive", flags: ["Immunity"], description: "Immune to Stun, Freeze, and Knockback effects." }
    ],
    bestGrowthTypes: ["Guardian", "Offensive"],
    synergiesWith: ["Swordmaster", "Breaker", "Sniper", "Radiant Knight"],
    recommendedEquipment: ["Kingsblade Cornix", "Blue Rose Shield", "Azure Crest Shield", "Rose Broach"],
    overview: "Virginia's unique dual-shield class. Grants Start-of-Battle squad defense with Iron Veil, counters melee attackers, and shatters guards with Maiden's Hammer."
  },
  {
    id: "snow-ranger",
    name: "Snow Ranger",
    category: "Promoted",
    role: "Physical DPS",
    tier: "SS",
    icon: "🏹",
    baseStats: { hp: 85, physAtk: 92, magAtk: 60, physDef: 55, magDef: 65, initiative: 48, evasion: 55, critRate: 30 },
    activeSkills: [
      { name: "Glacial Rain", apCost: 2, potency: 150, target: "All Enemies", flags: ["Physical", "Charge", "All Enemies", "Freeze"], description: "Charge a devastating blizzard arrow volley striking all enemies and inflicting Freeze." },
      { name: "Triple Snipe", apCost: 2, potency: 180, target: "Single Enemy", flags: ["Physical", "3 Hits"], description: "Loose 3 rapid-fire piercing frost arrows at a priority target." },
      { name: "Sonic Shaft", apCost: 1, potency: 100, target: "Single Enemy", flags: ["Physical", "Truestrike"], description: "High-speed arrow with guaranteed 100% Truestrike." }
    ],
    passiveSkills: [
      { name: "Triple Counter", ppCost: 1, trigger: "When Attacked", flags: ["Counter", "3 Hits"], description: "Evade and retaliate with 3 frost counter-arrows against the attacker." },
      { name: "Eagle Eye", ppCost: 1, trigger: "Before Active Action", flags: ["Truestrike", "Guaranteed Crit"], description: "Grant 100% Truestrike and 100% Critical Hit on the next arrow attack." },
      { name: "White Out", ppCost: 1, trigger: "Start of Battle", isStartOfBattle: true, flags: ["Start of Battle", "Freeze"], description: "At Start of Battle, unleash a snow squall inflicting -20 Initiative on all enemies." }
    ],
    bestGrowthTypes: ["Offensive", "Speedster"],
    synergiesWith: ["Wereowl", "Elven Archer", "Shieldshooter"],
    recommendedEquipment: ["Icefall Bow", "Black Cat-Ear Hood", "Sniper's Amber Lens", "Carnelian Pendant"],
    overview: "Yunifi's unique Bastorias class. Instant Absolute Zero board-wipe enabler with Glacial Rain, backed by deadly Triple Counter reactions."
  }
];

fs.writeFileSync('./src/data/classes.ts', `import { UnitClass } from '@/types';\n\nexport const CLASSES_DATA: UnitClass[] = ${JSON.stringify(AUTHENTIC_CLASSES, null, 2)};\n`);
console.log('Written authentic CLASSES_DATA with real skills and stats!');

// Also write SKILLS_DATA
const allSkills = [];
AUTHENTIC_CLASSES.forEach(c => {
  c.activeSkills.forEach(a => {
    allSkills.push({
      id: a.name.toLowerCase().replace(/[^a-z0-9]/g, '-'),
      name: a.name,
      type: "Active",
      cost: `${a.apCost} AP`,
      potency: a.potency,
      target: a.target,
      classSource: c.name,
      description: a.description,
      flags: a.flags
    });
  });
  c.passiveSkills.forEach(p => {
    allSkills.push({
      id: p.name.toLowerCase().replace(/[^a-z0-9]/g, '-'),
      name: p.name,
      type: "Passive",
      cost: `${p.ppCost} PP`,
      potency: 0,
      target: p.trigger,
      classSource: c.name,
      description: p.description,
      flags: p.flags
    });
  });
});

// Add key item skills
const ITEM_SKILLS = [
  {
    id: "trinity-rain",
    name: "Trinity Rain",
    type: "Active",
    cost: "3 AP",
    potency: 300,
    target: "All Enemies",
    classSource: "Item (Millenium Scepter)",
    description: "Charge a supreme 3-hit radiant magical rain storm striking all combatants.",
    flags: ["Magical", "Charge", "All Enemies", "Nuke"]
  },
  {
    id: "quick-impetus",
    name: "Quick Impetus",
    type: "Passive",
    cost: "2 PP",
    potency: 0,
    target: "Charging Ally",
    classSource: "Item (Cat-Ear Hood / White Cat-Ear Hood)",
    description: "When an ally uses an active charging skill, grant them an immediate action, skipping the charge turn.",
    flags: ["Instant Action", "Buff", "Meta Core"]
  },
  {
    id: "dragoon-dive",
    name: "Dragoon Dive",
    type: "Active",
    cost: "2 AP",
    potency: 220,
    target: "All Enemies",
    classSource: "Item (Dragoon's Warspear)",
    description: "Leap into the clouds and crash down onto all enemies with apocalyptic physical force.",
    flags: ["Physical", "Charge", "All Enemies", "Flying"]
  },
  {
    id: "eagle-eye",
    name: "Eagle Eye",
    type: "Passive",
    cost: "1 PP",
    potency: 0,
    target: "Self",
    classSource: "Item (Sniper's Amber Lens)",
    description: "Before attacking, grant self 100% Truestrike and 100% Guaranteed Critical Hit.",
    flags: ["Truestrike", "Critical", "Self Buff"]
  },
  {
    id: "tailwind",
    name: "Tailwind",
    type: "Passive",
    cost: "1 PP",
    potency: 0,
    target: "All Allies",
    classSource: "Item (Angel Plume)",
    description: "At Start of Battle, grant all allies +15 Initiative for the skirmish.",
    flags: ["Start of Battle", "Buff", "Speed"]
  }
];

ITEM_SKILLS.forEach(s => allSkills.push(s));

fs.writeFileSync('./src/data/skills.ts', `import { GameSkill } from '@/types';\n\nexport const SKILLS_DATA: GameSkill[] = ${JSON.stringify(allSkills, null, 2)};\n`);
console.log('Written authentic SKILLS_DATA with ' + allSkills.length + ' real skills!');
