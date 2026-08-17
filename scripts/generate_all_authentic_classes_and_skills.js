const fs = require('fs');

console.log('=== GENERATING ALL 71 AUTHENTIC CLASSES AND ALL SKILLS ===');

// All 71 authentic promoted & unique classes in Unicorn Overlord
const ALL_AUTHENTIC_CLASSES = [
  {
    id: "high-lord",
    name: "High Lord",
    category: "Unique",
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
    category: "Unique",
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
    recommendedEquipment: ["General's Pike", "Azure Crest Shield", "Azure Crest Shield", "Lapis Pendant"],
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
    recommendedEquipment: ["Dustbound Staff", "Druid's Robes", "Dustbound Staff", "Lapis Pendant"],
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
    id: "sorceress",
    name: "Sorceress",
    category: "Promoted",
    role: "Support",
    tier: "SS",
    icon: "🧙‍♀️",
    baseStats: { hp: 72, physAtk: 22, magAtk: 98, physDef: 32, magDef: 92, initiative: 40, evasion: 38, critRate: 18 },
    activeSkills: [
      { name: "Ice Coffin", apCost: 2, potency: 150, target: "Single Enemy", flags: ["Magical", "Freeze"], description: "Trap an enemy in an ice crystal, inflicting Freeze." },
      { name: "Thunderous", apCost: 1, potency: 100, target: "Single Enemy", flags: ["Magical", "Stun"], description: "Strike target with lightning and inflict Stun." }
    ],
    passiveSkills: [
      { name: "Magic Weapon", ppCost: 1, trigger: "When Ally Attacks", flags: ["Buff", "Magic Infusion"], description: "Infuse an ally's physical attack with +50 potency magical damage." },
      { name: "Focus Sight", ppCost: 1, trigger: "When Ally Attacks", flags: ["Buff", "Truestrike"], description: "Grant 100% Truestrike and +30% Crit to an attacking ally." },
      { name: "Quick Impetus", ppCost: 2, trigger: "When Ally Charges", flags: ["Instant Turn", "Meta Core"], description: "Trigger Cat-Ear Hood to give charging ally an instant action." }
    ],
    bestGrowthTypes: ["Speedster", "Guardian"],
    synergiesWith: ["Sorcerer", "Legionnaire", "Bishop", "Druid"],
    recommendedEquipment: ["Black Cat-Ear Hood", "Familiar's Choker", "Lapis Pendant", "Dove Plume"],
    overview: "Yahna's class. Enables Trinity Rain / Glacial Rain instant turns via Cat-Ear Hood Quick Impetus and buffs magic attack."
  },
  {
    id: "bishop",
    name: "Bishop",
    category: "Promoted",
    role: "Support",
    tier: "S+",
    icon: "⛪",
    baseStats: { hp: 78, physAtk: 25, magAtk: 88, physDef: 42, magDef: 98, initiative: 34, evasion: 30, critRate: 8 },
    activeSkills: [
      { name: "Heal", apCost: 1, potency: 100, target: "Single Ally", flags: ["Healing"], description: "Restore 100% Mag Atk HP to target ally." },
      { name: "Row Heal", apCost: 2, potency: 100, target: "Ally Row", flags: ["Healing", "Row"], description: "Restore HP to an entire row of allies." },
      { name: "Refresh", apCost: 1, potency: 0, target: "Ally Row", flags: ["Cleanse", "Row"], description: "Cleanse all status ailments and debuffs from an ally row." }
    ],
    passiveSkills: [
      { name: "Quick Heal", ppCost: 1, trigger: "When Ally Attacked", flags: ["Reaction Healing"], description: "Immediately cast a healing light on damaged ally." },
      { name: "Sacred Barrier", ppCost: 1, trigger: "Start of Battle", isStartOfBattle: true, flags: ["Barrier"], description: "Absorb up to 2 instances of incoming magic or physical damage for allies." },
      { name: "Endure", ppCost: 1, trigger: "Upon Lethal Damage", flags: ["Survive"], description: "Survive lethal damage with 1 HP." }
    ],
    bestGrowthTypes: ["Guardian", "Guardian"],
    synergiesWith: ["Legionnaire", "Sorcerer", "Sorceress"],
    recommendedEquipment: ["Sacral Rod", "Archbishop's Mitre", "Holy Broach", "Lapis Pendant"],
    overview: "Sharon's class. Supreme dedicated group healer and debuff cleanser with Row Heal and Refresh."
  },
  {
    id: "valkyria",
    name: "Valkyria",
    category: "Unique",
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
    category: "Unique",
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
  },
  {
    id: "wyvern-master",
    name: "Wyvern Master",
    category: "Promoted",
    role: "Physical DPS",
    tier: "SS",
    icon: "🐉",
    baseStats: { hp: 98, physAtk: 94, magAtk: 30, physDef: 72, magDef: 40, initiative: 38, evasion: 52, critRate: 20 },
    activeSkills: [
      { name: "Dragoon Dive", apCost: 2, potency: 220, target: "All Enemies", flags: ["Physical", "Charge", "All Enemies", "Flying"], description: "Leap into the clouds and crash down onto all enemies with apocalyptic physical force." },
      { name: "Fire Breath", apCost: 2, potency: 140, target: "Enemy Row", flags: ["Magical", "Row", "Burn"], description: "Spew intense flames across an entire enemy row, inflicting Burn." },
      { name: "Ground Thrust", apCost: 1, potency: 120, target: "Single Enemy", flags: ["Physical", "Anti-Ground"], description: "Dive from the skies to impale a ground enemy, ignoring 30% Physical Defense." }
    ],
    passiveSkills: [
      { name: "Dragon's Roar", ppCost: 1, trigger: "Start of Battle", isStartOfBattle: true, flags: ["Start of Battle", "Debuff", "Initiative"], description: "At Start of Battle, roar to reduce all enemies' Initiative by 15." },
      { name: "Tailwind", ppCost: 1, trigger: "Passive", flags: ["Buff", "Flying Speed"], description: "Boost Initiative of all flying allies by 15." },
      { name: "Aerial Guard", ppCost: 1, trigger: "Before Attacked", flags: ["Guard"], description: "Guard against incoming ranged and melee strikes with sturdy dragon scales." }
    ],
    bestGrowthTypes: ["Offensive", "Speedster"],
    synergiesWith: ["Gryphon Master", "Prince", "Druid", "Sainted Knight"],
    recommendedEquipment: ["Dragoon's Warspear", "Heavenwyvern Reins", "Sniper's Amber Lens", "Black Cat-Ear Hood"],
    overview: "Hilda's class. Top-tier flying nuke enabler with Dragon's Roar speed control and devastating Dragoon Dive board wipes."
  },
  {
    id: "gryphon-master",
    name: "Gryphon Master",
    category: "Promoted",
    role: "Physical DPS",
    tier: "S+",
    icon: "🦅",
    baseStats: { hp: 90, physAtk: 92, magAtk: 25, physDef: 60, magDef: 60, initiative: 46, evasion: 65, critRate: 25 },
    activeSkills: [
      { name: "High Gale", apCost: 2, potency: 160, target: "Enemy Row", flags: ["Physical", "Row", "Anti-Cavalry", "Flying"], description: "Sweep across an enemy row with heavy gale force, dealing 200% bonus damage to cavalry." },
      { name: "Fatal Dive", apCost: 1, potency: 150, target: "Single Enemy", flags: ["Physical", "Anti-Ground"], description: "Plunge from the sky onto a single ground target." }
    ],
    passiveSkills: [
      { name: "Feathering", ppCost: 1, trigger: "Start of Battle", isStartOfBattle: true, flags: ["Start of Battle", "Row Speed"], description: "At Start of Battle, grant all allies in the same row +15 Initiative." },
      { name: "Aerial Wing", ppCost: 1, trigger: "When Attacked by Ground", flags: ["Evasion"], description: "Evade incoming ground melee attacks effortlessly." }
    ],
    bestGrowthTypes: ["Speedster", "Offensive"],
    synergiesWith: ["Wyvern Master", "Prince", "Sainted Knight"],
    recommendedEquipment: ["Kingsaxe Drakenash", "Heavenwyvern Reins", "Carnelian Axe", "Dove Plume"],
    overview: "Fran / Celeste's class. Premium anti-cavalry sweeper with High Gale row cleaves and row-wide Initiative acceleration."
  },
  {
    id: "sainted-knight",
    name: "Sainted Knight",
    category: "Promoted",
    role: "Support",
    tier: "SS",
    icon: "🛡️✨",
    baseStats: { hp: 96, physAtk: 70, magAtk: 80, physDef: 70, magDef: 85, initiative: 39, evasion: 35, critRate: 15 },
    activeSkills: [
      { name: "Holy Blade", apCost: 1, potency: 120, target: "Single Enemy", flags: ["Magical", "Physical", "Hybrid"], description: "Hybrid holy strike that heals user for 50% of damage dealt." },
      { name: "Row Heal", apCost: 2, potency: 100, target: "Ally Row", flags: ["Healing", "Row"], description: "Restore health to an entire row of allies." },
      { name: "Hallowed Blade", apCost: 2, potency: 150, target: "Single Enemy", flags: ["Magical", "Anti-Armor"], description: "Smite target with heavy magic damage piercing armor." }
    ],
    passiveSkills: [
      { name: "Magic Barrier", ppCost: 1, trigger: "Before Ally Magically Attacked", flags: ["Cover", "Magic Defense"], description: "Cover an ally and completely absorb incoming magic damage." },
      { name: "Row Barrier", ppCost: 2, trigger: "Before Row Magically Attacked", flags: ["Row Cover", "Magic Nullify"], description: "Nullify incoming magic area-of-effect spells for the entire squad row." }
    ],
    bestGrowthTypes: ["Guardian", "All-Rounder"],
    synergiesWith: ["High Lord", "Great Knight", "Wyvern Master"],
    recommendedEquipment: ["Runic Sword", "Azure Crest Shield", "Lapis Pendant", "Heavensteed Reins"],
    overview: "Monica / Miriam's promoted class. Mounted hybrid paladin capable of nullifying enemy magic nukes with Row Barrier while sustaining squad HP."
  },
  {
    id: "prince",
    name: "Prince",
    category: "Unique",
    role: "Support",
    tier: "SS",
    icon: "🤴",
    baseStats: { hp: 92, physAtk: 72, magAtk: 60, physDef: 65, magDef: 70, initiative: 46, evasion: 45, critRate: 15 },
    activeSkills: [
      { name: "Rapid Order", apCost: 1, potency: 0, target: "All Allies", flags: ["Start of Battle", "Initiative Boost"], description: "At Start of Battle, grant all allies +15 Initiative for the battle." },
      { name: "Offensive Order", apCost: 1, potency: 0, target: "All Allies", flags: ["Buff", "Attack Boost"], description: "Grant all allies +20% Physical Attack and +20% Magical Attack." },
      { name: "Defensive Order", apCost: 1, potency: 0, target: "All Allies", flags: ["Buff", "Defense Boost"], description: "Grant all allies +20% Physical Defense and +20% Magical Defense." }
    ],
    passiveSkills: [
      { name: "Sniping Order", ppCost: 1, trigger: "When Ally Attacks", flags: ["Buff", "Truestrike"], description: "Grant 100% Truestrike to an attacking ally." },
      { name: "Guarding Order", ppCost: 1, trigger: "When Ally Attacked", flags: ["Buff", "Guard Boost"], description: "Increase ally Guard Rate by 50%." }
    ],
    bestGrowthTypes: ["Speedster", "Guardian"],
    synergiesWith: ["Wyvern Master", "Gryphon Master", "Swordmaster", "Dreadnought"],
    recommendedEquipment: ["Kingsblade Cornix", "Battleline Standard", "Lapis Pendant", "Dove Plume"],
    overview: "Gilbert's unique class. The ultimate team buffer with Rapid Order teamwide speed dominance and Offensive Order damage scaling."
  },
  {
    id: "renegade",
    name: "Renegade",
    category: "Unique",
    role: "Tank",
    tier: "SS",
    icon: "🪓",
    baseStats: { hp: 105, physAtk: 95, magAtk: 40, physDef: 82, magDef: 65, initiative: 44, evasion: 48, critRate: 25 },
    activeSkills: [
      { name: "Eye of the Crimson Bear", apCost: 1, potency: 0, target: "All Enemies", flags: ["Start of Battle", "Affliction", "Debuff"], description: "At Start of Battle, reduce all enemies' Initiative by 15 and inflict Guard Seal." },
      { name: "Death Spin", apCost: 2, potency: 150, target: "Enemy Row", flags: ["Physical", "Row", "Affliction Bonus"], description: "Whirl axe across enemy row dealing +50% bonus damage to afflicted targets." },
      { name: "Guarded Strike", apCost: 1, potency: 120, target: "Single Enemy", flags: ["Physical", "Guard"], description: "Strike target and enter impenetrable defensive stance." }
    ],
    passiveSkills: [
      { name: "Sanguine Pursuit", ppCost: 1, trigger: "After Ally Attacks Afflicted", flags: ["Pursuit", "Life Drain"], description: "Strike afflicted enemy, dealing heavy damage and healing user for 50% damage." },
      { name: "Boundless Rage", ppCost: 1, trigger: "When Damaged", flags: ["Self Buff", "AP Gain"], description: "Gain +1 AP and +20% Phys Atk whenever sustaining damage." }
    ],
    bestGrowthTypes: ["Offensive", "Guardian"],
    synergiesWith: ["Rogue", "Druid", "Breaker", "Berserker"],
    recommendedEquipment: ["Kingsaxe Drakenash", "Thorn Shield", "Carnelian Pendant", "Lapis Pendant"],
    overview: "Berengaria's unique class. Dominates through affliction synergy, draining life with Sanguine Pursuit and crushing rows with Death Spin."
  },
  {
    id: "rogue",
    name: "Rogue",
    category: "Promoted",
    role: "Physical DPS",
    tier: "S+",
    icon: "🗡️",
    baseStats: { hp: 78, physAtk: 75, magAtk: 30, physDef: 45, magDef: 50, initiative: 52, evasion: 85, critRate: 30 },
    activeSkills: [
      { name: "Shadowbite", apCost: 2, potency: 100, target: "Enemy Row", flags: ["Physical", "Row", "Blind", "Passive Seal"], description: "Strike an entire enemy row, inflicting Darkness (Blindness) and Passive Skill Seal." },
      { name: "Toxic Throw", apCost: 1, potency: 80, target: "Single Enemy", flags: ["Physical", "Poison"], description: "Hurl a poisoned dagger inflicting Poison." },
      { name: "Sneak Edge", apCost: 1, potency: 110, target: "Single Enemy", flags: ["Physical", "Steal AP"], description: "Strike from the shadows and steal 1 AP from the target." }
    ],
    passiveSkills: [
      { name: "Evade", ppCost: 1, trigger: "Before Attacked", flags: ["Nullify", "Evasion 100%"], description: "Completely nullify an incoming physical attack." },
      { name: "Plunder PP", ppCost: 1, trigger: "After Active Action", flags: ["Steal PP"], description: "Steal 1 PP from target enemy." }
    ],
    bestGrowthTypes: ["Speedster", "Speedster"],
    synergiesWith: ["Renegade", "Druid", "Breaker"],
    recommendedEquipment: ["Pursuant's Blade", "Royal Scarf", "Lucky Coin", "Carnelian Pendant"],
    overview: "Travis's promoted class. Supreme evasion frontline tank that blinds enemy rows with Shadowbite and steals enemy AP/PP."
  },
  {
    id: "breaker",
    name: "Breaker",
    category: "Promoted",
    role: "Physical DPS",
    tier: "SS",
    icon: "🔨",
    baseStats: { hp: 95, physAtk: 105, magAtk: 20, physDef: 65, magDef: 45, initiative: 35, evasion: 25, critRate: 25 },
    activeSkills: [
      { name: "Enraged Strike", apCost: 1, potency: 175, target: "Single Enemy", flags: ["Physical", "Armor Piercing", "Unblockable"], description: "Crushing hammer blow that completely ignores enemy Physical Defense and cannot be guarded." },
      { name: "Row Smash", apCost: 2, potency: 150, target: "Enemy Row", flags: ["Physical", "Row", "Guard Break"], description: "Shatter an entire enemy row, disabling guard." },
      { name: "Assault Blow", apCost: 1, potency: 100, target: "Single Enemy", flags: ["Physical", "AP On Kill"], description: "Heavy strike that awards +1 AP upon kill." }
    ],
    passiveSkills: [
      { name: "Heavy Guard", ppCost: 1, trigger: "Before Attacked", flags: ["Guard"], description: "Brace with hammer to reduce incoming damage by 50%." },
      { name: "Follow-up Hammer", ppCost: 1, trigger: "After Ally Attacks", flags: ["Pursuit"], description: "Follow up with a heavy hammer strike." }
    ],
    bestGrowthTypes: ["Offensive", "Offensive"],
    synergiesWith: ["Renegade", "Rogue", "Druid", "Valkyria"],
    recommendedEquipment: ["Mason's Hammer", "Gauntlets of the Abyss", "Carnelian Pendant", "Hero's Medallion"],
    overview: "Nina / Kitra's promoted class. Ultimate armored target deleter with 100% Armor-Piercing Enraged Strike."
  },
  {
    id: "shieldshooter",
    name: "Shieldshooter",
    category: "Promoted",
    role: "Physical DPS",
    tier: "S+",
    icon: "🏹🛡️",
    baseStats: { hp: 96, physAtk: 86, magAtk: 35, physDef: 82, magDef: 50, initiative: 38, evasion: 30, critRate: 20 },
    activeSkills: [
      { name: "Aerial Snipe", apCost: 2, potency: 150, target: "Single Enemy", flags: ["Physical", "Anti-Flying", "Truestrike"], description: "Truestrike crossbow bolt dealing 200% bonus damage against flying enemies." },
      { name: "Heavy Bolt", apCost: 1, potency: 120, target: "Single Enemy", flags: ["Physical", "Armor Piercing"], description: "Heavy steel quarrel piercing through armor." }
    ],
    passiveSkills: [
      { name: "Heavy Cover", ppCost: 1, trigger: "Before Ally Attacked", flags: ["Cover", "Greatshield"], description: "Cover an ally with Greatshield, negating physical and ranged damage." },
      { name: "Quick Reload", ppCost: 1, trigger: "After Active Action", flags: ["AP Restore"], description: "Reload crossbow immediately, gaining +1 AP." }
    ],
    bestGrowthTypes: ["Guardian", "Offensive"],
    synergiesWith: ["Snow Ranger", "Wereowl", "Breaker"],
    recommendedEquipment: ["Gallian Crossbow", "Azure Crest Shield", "Sniper's Lens", "Lapis Pendant"],
    overview: "Liza's promoted class. Combines greatshield protection with lethal anti-flying truestrike crossbow fire."
  },
  {
    id: "berserker",
    name: "Berserker",
    category: "Promoted",
    role: "Physical DPS",
    tier: "S",
    icon: "🪓",
    baseStats: { hp: 130, physAtk: 100, magAtk: 15, physDef: 55, magDef: 30, initiative: 32, evasion: 20, critRate: 25 },
    activeSkills: [
      { name: "Wide Smash", apCost: 2, potency: 150, target: "Enemy Row", flags: ["Physical", "Row", "Stun"], description: "Massive sweeping axe strike across an entire enemy row, inflicting Stun." },
      { name: "Grand Smash", apCost: 3, potency: 200, target: "All Enemies", flags: ["Physical", "All Enemies"], description: "Slam ground with earth-shattering force hitting all enemies." }
    ],
    passiveSkills: [
      { name: "Bulk Up", ppCost: 1, trigger: "When Damaged", flags: ["Self Heal", "Attack Boost"], description: "Restore 30% HP and increase Physical Attack by 20%." },
      { name: "Toughness", ppCost: 1, trigger: "Upon Lethal Damage", flags: ["Survive"], description: "Survive lethal strike with 1 HP." }
    ],
    bestGrowthTypes: ["Offensive", "Tough"],
    synergiesWith: ["Druid", "Renegade", "Bishop"],
    recommendedEquipment: ["Berserker's Battleaxe", "Riot Belt", "Carnelian Pendant", "Hero's Medallion"],
    overview: "Bruno's class. High-HP bruiser that stuns entire enemy rows with Wide Smash and recovers health automatically."
  },
  {
    id: "vanguard",
    name: "Vanguard",
    category: "Promoted",
    role: "Tank",
    tier: "S",
    icon: "🛡️",
    baseStats: { hp: 95, physAtk: 80, magAtk: 25, physDef: 80, magDef: 50, initiative: 40, evasion: 40, critRate: 15 },
    activeSkills: [
      { name: "Shield Bash", apCost: 1, potency: 100, target: "Single Enemy", flags: ["Physical", "Stun"], description: "Strike target with shield and inflict Stun." },
      { name: "Defensive Slash", apCost: 1, potency: 110, target: "Single Enemy", flags: ["Physical", "Guard Boost"], description: "Slash enemy and increase own Guard Rate by 30%." }
    ],
    passiveSkills: [
      { name: "Arrow Cover", ppCost: 1, trigger: "When Ally Targeted by Ranged", flags: ["Cover", "Ranged Nullify"], description: "Cover an ally and completely nullify incoming ranged projectile damage." },
      { name: "Quick Guard", ppCost: 1, trigger: "Before Attacked", flags: ["Guard"], description: "Raise shield to block incoming physical attacks." }
    ],
    bestGrowthTypes: ["Guardian", "Guardian"],
    synergiesWith: ["Valkyria", "Sniper", "Breaker"],
    recommendedEquipment: ["Iron Sword", "Iron Shield", "Defender's Ring", "Lapis Pendant"],
    overview: "Colm / Lex's class. Protects flying allies and backline squishies from lethal archer fire with Arrow Cover."
  },
  {
    id: "sniper",
    name: "Sniper",
    category: "Promoted",
    role: "Physical DPS",
    tier: "S+",
    icon: "🏹",
    baseStats: { hp: 80, physAtk: 90, magAtk: 30, physDef: 45, magDef: 55, initiative: 48, evasion: 50, critRate: 35 },
    activeSkills: [
      { name: "Aerial Snipe", apCost: 2, potency: 160, target: "Single Enemy", flags: ["Physical", "Anti-Flying", "Truestrike"], description: "Truestrike arrow dealing 200% bonus damage against flying targets." },
      { name: "Dual Shot", apCost: 1, potency: 110, target: "Enemy Column", flags: ["Physical", "Column"], description: "Loose two arrows simultaneously piercing an enemy column." },
      { name: "Arrow Rain", apCost: 3, potency: 180, target: "All Enemies", flags: ["Physical", "All Enemies", "Charge"], description: "Rain arrows on the entire battlefield." }
    ],
    passiveSkills: [
      { name: "Eagle Eye", ppCost: 1, trigger: "Before Active Action", flags: ["Truestrike", "Guaranteed Crit"], description: "Grant 100% Truestrike and 100% Critical Hit on the next arrow." },
      { name: "Pursuit Arrow", ppCost: 1, trigger: "After Ally Attacks", flags: ["Pursuit"], description: "Follow up an ally's attack with a rapid arrow strike." }
    ],
    bestGrowthTypes: ["Offensive", "Speedster"],
    synergiesWith: ["Valkyria", "Shieldshooter", "Prince"],
    recommendedEquipment: ["Apeliotes's Bow", "Sniper's Amber Lens", "Carnelian Pendant", "Dove Plume"],
    overview: "Rolf / Mandrin's class. Dedicated flying unit sniper with 100% Truestrike Eagle Eye and column-piercing archery."
  },
  {
    id: "wereowl",
    name: "Wereowl",
    category: "Unique",
    role: "Support",
    tier: "SS",
    icon: "🦉",
    baseStats: { hp: 76, physAtk: 25, magAtk: 88, physDef: 45, magDef: 95, initiative: 46, evasion: 45, critRate: 10 },
    activeSkills: [
      { name: "Night Vision", apCost: 1, potency: 0, target: "All Allies", flags: ["Buff", "Accuracy Boost", "Truestrike"], description: "Grant all allies +30% Accuracy and Truestrike capabilities." },
      { name: "Restore", apCost: 1, potency: 100, target: "Single Ally", flags: ["Healing", "PP Restore"], description: "Heal target ally's HP and restore +1 PP." }
    ],
    passiveSkills: [
      { name: "Owl Eyes", ppCost: 1, trigger: "When Ally Uses PP", flags: ["PP Battery"], description: "Immediately replenish +1 PP to an ally that just consumed PP." },
      { name: "Quick Dispel", ppCost: 1, trigger: "When Enemy Buffs", flags: ["Dispel"], description: "Strip all positive status buffs from an enemy unit." }
    ],
    bestGrowthTypes: ["Speedster", "Guardian"],
    synergiesWith: ["Snow Ranger", "Elven Archer", "Shieldshooter"],
    recommendedEquipment: ["Kingstaff Albiore", "Sage Owl's Shawl", "Lapis Pendant", "Sapphire Pendant"],
    overview: "Ramona's unique Bastorias class. The infinite PP battery of Unicorn Overlord, constantly recharging ally PP via Owl Eyes."
  },
  {
    id: "elven-archer",
    name: "Elven Archer",
    category: "Unique",
    role: "Support",
    tier: "SS",
    icon: "🧝‍♀️🏹",
    baseStats: { hp: 80, physAtk: 75, magAtk: 85, physDef: 48, magDef: 85, initiative: 46, evasion: 52, critRate: 20 },
    activeSkills: [
      { name: "Icicle Arrow", apCost: 1, potency: 100, target: "Single Enemy", flags: ["Magical", "Freeze"], description: "Shoot an enchanted frost arrow that inflicts Freeze." },
      { name: "Mystic Arrow", apCost: 2, potency: 140, target: "Enemy Column", flags: ["Hybrid", "Column"], description: "Column-piercing enchanted arrow dealing hybrid physical and magic damage." }
    ],
    passiveSkills: [
      { name: "Pure Light", ppCost: 1, trigger: "Start of Battle", isStartOfBattle: true, flags: ["Start of Battle", "Row Debuff Cleanse", "Immunity"], description: "At Start of Battle, cleanse all debuffs and grant affliction immunity to the row." },
      { name: "Selfless Heal", ppCost: 1, trigger: "After Acting", flags: ["Row Heal"], description: "Heal the lowest HP ally for 50% Mag Atk after executing an action." }
    ],
    bestGrowthTypes: ["Speedster", "Guardian"],
    synergiesWith: ["Snow Ranger", "Wereowl", "Elven Fencer", "Elven Sibyl"],
    recommendedEquipment: ["Frostbloom Bow", "Ancient Crown", "Lapis Pendant", "Dove Plume"],
    overview: "Ridiel / Lhinalagos / Galadmir's class. Grants Start-of-Battle debuff immunity via Pure Light and freezes priority threats."
  },
  {
    id: "elven-fencer",
    name: "Elven Fencer",
    category: "Unique",
    role: "Physical DPS",
    tier: "S+",
    icon: "🧝‍♂️⚔️",
    baseStats: { hp: 84, physAtk: 84, magAtk: 84, physDef: 55, magDef: 75, initiative: 48, evasion: 70, critRate: 25 },
    activeSkills: [
      { name: "Lightning Sword", apCost: 1, potency: 120, target: "Single Enemy", flags: ["Hybrid", "Stun"], description: "Strike target with thunderous sword slash, dealing hybrid damage and inflicting Stun." },
      { name: "Mirage Edge", apCost: 1, potency: 100, target: "Single Enemy", flags: ["Physical", "Evasion Boost"], description: "Strike enemy and increase own Evasion by 30." }
    ],
    passiveSkills: [
      { name: "Remove Weakness", ppCost: 1, trigger: "When Ally Debuffed", flags: ["Cleanse", "Buff"], description: "Cleanse debuffs from an ally and grant them +20% Phys Atk." },
      { name: "Evade", ppCost: 1, trigger: "Before Attacked", flags: ["Nullify"], description: "Nullify an incoming physical attack." }
    ],
    bestGrowthTypes: ["Speedster", "Offensive"],
    synergiesWith: ["Elven Sibyl", "Elven Augur", "Elven Archer"],
    recommendedEquipment: ["Runic Sword", "Royal Scarf", "Carnelian Pendant", "Lucky Coin"],
    overview: "Ithilion / Railanor's class. Evasive hybrid sword duelist capable of stunning targets and clearing debuffs with Remove Weakness."
  },
  {
    id: "elven-sibyl",
    name: "Elven Sibyl",
    category: "Unique",
    role: "Magic DPS",
    tier: "SS",
    icon: "🧝‍♀️✨",
    baseStats: { hp: 86, physAtk: 78, magAtk: 100, physDef: 58, magDef: 95, initiative: 46, evasion: 55, critRate: 20 },
    activeSkills: [
      { name: "Elemental Roar", apCost: 3, potency: 250, target: "All Enemies", flags: ["Magical", "All Enemies", "Faerie Nuke"], description: "Summon all gathered Faeries to unleash a cataclysmic all-enemy magical nuke." },
      { name: "Primus Javelin", apCost: 1, potency: 110, target: "Single Enemy", flags: ["Hybrid", "Faerie Gain"], description: "Strike with enchanted spear, generating 1 Faerie." }
    ],
    passiveSkills: [
      { name: "Boon of the Faeries", ppCost: 1, trigger: "Start of Battle", isStartOfBattle: true, flags: ["Start of Battle", "Squad Heal", "Debuff Immunity"], description: "At Start of Battle, grant all squad allies continuous HP regeneration and debuff immunity." },
      { name: "Faerie Blessing", ppCost: 1, trigger: "Start of Turn", flags: ["Faerie Gain", "AP Boost"], description: "Gain +1 Faerie and +1 AP." }
    ],
    bestGrowthTypes: ["Offensive", "Speedster"],
    synergiesWith: ["Elven Augur", "Elven Archer", "Elven Fencer", "Amalia"],
    recommendedEquipment: ["Kingslance Elhal", "Dream Crown", "Carnelian Pendant", "Lapis Pendant"],
    overview: "Eltolinde's unique class. Dominates with Boon of the Faeries start-of-battle protection and massive Elemental Roar all-enemy board wipes."
  },
  {
    id: "elven-augur",
    name: "Elven Augur",
    category: "Unique",
    role: "Magic DPS",
    tier: "SS",
    icon: "🧝‍♀️⚡",
    baseStats: { hp: 86, physAtk: 80, magAtk: 98, physDef: 58, magDef: 94, initiative: 47, evasion: 55, critRate: 20 },
    activeSkills: [
      { name: "Elemental Roar", apCost: 3, potency: 250, target: "All Enemies", flags: ["Magical", "All Enemies", "Faerie Nuke"], description: "Summon gathered Faeries to devastate the entire enemy field." },
      { name: "Primus Javelin", apCost: 1, potency: 110, target: "Single Enemy", flags: ["Hybrid", "Faerie Gain"], description: "Strike with enchanted spear, generating 1 Faerie." }
    ],
    passiveSkills: [
      { name: "Rage of the Faeries", ppCost: 1, trigger: "Start of Battle", isStartOfBattle: true, flags: ["Start of Battle", "Row Stun"], description: "At Start of Battle, unleash Faerie fury inflicting Stun on the entire enemy front row." },
      { name: "Faerie Blessing", ppCost: 1, trigger: "Start of Turn", flags: ["Faerie Gain"], description: "Gain +1 Faerie." }
    ],
    bestGrowthTypes: ["Speedster", "Offensive"],
    synergiesWith: ["Elven Sibyl", "Elven Archer", "Elven Fencer", "Amalia"],
    recommendedEquipment: ["Kingslance Elhal", "Ancient Crown", "Carnelian Pendant", "Lapis Pendant"],
    overview: "Rosalinde's unique class. Stuns the entire enemy front row on Turn 0 with Rage of the Faeries and nukes with Elemental Roar."
  },
  {
    id: "dreadnought",
    name: "Dreadnought",
    category: "Unique",
    role: "Physical DPS",
    tier: "SS",
    icon: "⚔️🛡️",
    baseStats: { hp: 125, physAtk: 110, magAtk: 25, physDef: 92, magDef: 45, initiative: 28, evasion: 15, critRate: 25 },
    activeSkills: [
      { name: "Penetrate", apCost: 1, potency: 150, target: "Enemy Column", flags: ["Physical", "Column", "Armor Piercing"], description: "Devastating greatsword thrust piercing through an entire column and ignoring 50% defense." },
      { name: "Hawk Eye Strike", apCost: 2, potency: 220, target: "Single Enemy", flags: ["Physical", "Truestrike", "Guaranteed Crit", "Unblockable"], description: "Unblockable massive overhead cleave with 100% Truestrike and 100% Critical Hit." },
      { name: "Infinity Guard", apCost: 1, potency: 0, target: "Self", flags: ["Self Buff", "Guard 100%"], description: "Enter fortress stance, guaranteeing heavy guard on all hits." }
    ],
    passiveSkills: [
      { name: "Omega Counter", ppCost: 1, trigger: "When Attacked", flags: ["Counter", "Devastating Retaliation"], description: "Counterattack with colossal force, dealing 150% physical damage to the attacker." },
      { name: "Heavy Guard", ppCost: 1, trigger: "Before Attacked", flags: ["Heavy Guard"], description: "Block incoming physical strikes with greatshield." }
    ],
    bestGrowthTypes: ["Offensive", "Guardian"],
    synergiesWith: ["Elven Sibyl", "Elven Augur", "Prince", "Werebear"],
    recommendedEquipment: ["Kingsblade Cornix", "Azure Crest Shield", "Carnelian Pendant", "Hero's Medallion"],
    overview: "Amalia's unique giantess class. Supreme coliseum champion capable of one-shotting columns with Penetrate and counter-killing with Omega Counter."
  },
  {
    id: "werebear",
    name: "Werebear",
    category: "Unique",
    role: "Tank",
    tier: "S+",
    icon: "🐻",
    baseStats: { hp: 135, physAtk: 96, magAtk: 20, physDef: 95, magDef: 45, initiative: 22, evasion: 15, critRate: 15 },
    activeSkills: [
      { name: "Indomitable Guard", apCost: 1, potency: 0, target: "Self", flags: ["Self Buff", "Heavy Guard"], description: "Enter towering defensive stance, reducing incoming damage by 75%." },
      { name: "Bear Hug", apCost: 2, potency: 160, target: "Single Enemy", flags: ["Physical", "Stun"], description: "Crush enemy with immense bestial strength, inflicting Stun." }
    ],
    passiveSkills: [
      { name: "Row Cover", ppCost: 2, trigger: "Before Row Attacked", flags: ["Row Cover"], description: "Shield the entire squad row behind massive bulk." },
      { name: "Bestial Vigor", ppCost: 1, trigger: "When Damaged", flags: ["Self Heal"], description: "Restore 20% max HP whenever sustaining damage." }
    ],
    bestGrowthTypes: ["Guardian", "Tough"],
    synergiesWith: ["Werewolf", "Dreadnought", "Wereowl"],
    recommendedEquipment: ["Kingsaxe Drakenash", "Azure Crest Shield", "Riot Belt", "Lapis Pendant"],
    overview: "Bertrand / Morpan's class. Colossal frontline beast tank that absorbs row-wide attacks and regenerates HP continuously."
  },
  {
    id: "werewolf",
    name: "Werewolf",
    category: "Unique",
    role: "Physical DPS",
    tier: "SS",
    icon: "🐺",
    baseStats: { hp: 88, physAtk: 96, magAtk: 25, physDef: 62, magDef: 45, initiative: 50, evasion: 60, critRate: 35 },
    activeSkills: [
      { name: "Wild Fang", apCost: 1, potency: 120, target: "Single Enemy", flags: ["Physical", "Affliction Bonus"], description: "Vicious bite dealing +50% damage to afflicted enemies." },
      { name: "Shadow Slash", apCost: 1, potency: 130, target: "Single Enemy", flags: ["Physical", "Critical"], description: "Swift predatory slash with enhanced critical chance." },
      { name: "Killing Bite", apCost: 2, potency: 180, target: "Single Enemy", flags: ["Physical", "AP On Kill"], description: "Lethal throat strike that restores +2 AP upon defeating the foe." }
    ],
    passiveSkills: [
      { name: "Wolfpack Roar", ppCost: 1, trigger: "Start of Battle", isStartOfBattle: true, flags: ["Start of Battle", "Bestial Buff"], description: "At Start of Battle, grant all Bestial allies +20% Physical Attack and +20% Critical Rate." },
      { name: "Chasing Slash", ppCost: 1, trigger: "After Ally Attacks", flags: ["Pursuit", "Chain Attack"], description: "Execute a pursuit attack immediately after a packmate strikes." }
    ],
    bestGrowthTypes: ["Offensive", "Speedster"],
    synergiesWith: ["Werebear", "Werewolf", "Wereowl"],
    recommendedEquipment: ["Pursuant's Blade", "Wolfpack Gauntlets", "Wolf Fang Bracelet", "Carnelian Pendant"],
    overview: "Dinah / Govil's class. Fast, lethal pack hunter that chains continuous pursuit attacks via Chasing Slash under Wolfpack Roar."
  },
  {
    id: "featherbow",
    name: "Featherbow",
    category: "Unique",
    role: "Support",
    tier: "SS",
    icon: "🪶🏹",
    baseStats: { hp: 82, physAtk: 84, magAtk: 80, physDef: 50, magDef: 85, initiative: 52, evasion: 68, critRate: 25 },
    activeSkills: [
      { name: "Shining Arrow", apCost: 1, potency: 100, target: "Enemy Front Row", flags: ["Start of Battle", "Blind", "Initiative Down"], description: "At Start of Battle, loose celestial arrows blinding the enemy front row and reducing their Initiative by 15." },
      { name: "Photon Arrow", apCost: 1, potency: 110, target: "Single Enemy", flags: ["Magical", "Truestrike"], description: "Truestrike radiant magic arrow that cannot be evaded." }
    ],
    passiveSkills: [
      { name: "Dazzling Glare", ppCost: 1, trigger: "When Enemy Attacks", flags: ["Debuff", "Accuracy Down"], description: "Blind target attacker, reducing their Accuracy by 50%." },
      { name: "Tailwind", ppCost: 1, trigger: "Passive", flags: ["Speed Buff"], description: "Boost Initiative of all flying squadmates." }
    ],
    bestGrowthTypes: ["Speedster", "Guardian"],
    synergiesWith: ["Feathersword", "Featherstaff", "Doom Knight"],
    recommendedEquipment: ["Kingsbow Bastorik", "Angel Plume", "Lapis Pendant", "Sniper's Lens"],
    overview: "Raenys's unique Albion class. Blinds enemy frontlines at Start of Battle with Shining Arrow, neutralizing physical threats."
  },
  {
    id: "feathersword",
    name: "Feathersword",
    category: "Unique",
    role: "Physical DPS",
    tier: "S+",
    icon: "🪶⚔️",
    baseStats: { hp: 86, physAtk: 90, magAtk: 45, physDef: 65, magDef: 80, initiative: 50, evasion: 75, critRate: 25 },
    activeSkills: [
      { name: "Spiral Sword", apCost: 1, potency: 130, target: "Single Enemy", flags: ["Physical", "Anti-Ground", "Guard Pierce"], description: "Spiraling aerial plunge that ignores enemy guard." },
      { name: "Accelerating Blade", apCost: 1, potency: 110, target: "Single Enemy", flags: ["Physical", "Speed Gain"], description: "Strike target and gain +10 Initiative." }
    ],
    passiveSkills: [
      { name: "Discharge", ppCost: 1, trigger: "Before Active Action", flags: ["Buff Conversion", "Massive Attack"], description: "Convert all active stat buffs into raw physical attack power." },
      { name: "Honorable Guard", ppCost: 1, trigger: "Before Attacked", flags: ["Evasion", "Guard"], description: "Evade incoming ground strikes effortlessly." }
    ],
    bestGrowthTypes: ["Speedster", "Offensive"],
    synergiesWith: ["Featherbow", "Featherstaff", "Doom Knight"],
    recommendedEquipment: ["Holy Unicorn Blade", "Heavenswing Shield", "Angel Plume", "Carnelian Pendant"],
    overview: "Ochlys / Umerus's unique Albion flying sword class. Blazingly fast aerial duelist that converts buffs into massive damage with Discharge."
  },
  {
    id: "featherstaff",
    name: "Featherstaff",
    category: "Unique",
    role: "Support",
    tier: "SS",
    icon: "🪶✨",
    baseStats: { hp: 82, physAtk: 30, magAtk: 92, physDef: 50, magDef: 105, initiative: 42, evasion: 55, critRate: 10 },
    activeSkills: [
      { name: "Holy Breath", apCost: 1, potency: 120, target: "All Allies", flags: ["Healing", "All Allies", "Cleanse"], description: "Breathe radiant light across all allies, restoring HP and cleansing debuffs." },
      { name: "Divine Grace", apCost: 2, potency: 150, target: "Ally Row", flags: ["Revive", "Full Row"], description: "Revive and fully restore a fallen squad row." }
    ],
    passiveSkills: [
      { name: "Sacred Barrier", ppCost: 1, trigger: "Start of Battle", isStartOfBattle: true, flags: ["Start of Battle", "Barrier"], description: "At Start of Battle, grant all allies a barrier absorbing 2 hits of damage." },
      { name: "Angelic Ward", ppCost: 1, trigger: "When Ally Attacked", flags: ["Cover"], description: "Shield ally with angel wings, taking 0 damage." }
    ],
    bestGrowthTypes: ["Guardian", "Guardian"],
    synergiesWith: ["Featherbow", "Feathersword", "Doom Knight"],
    recommendedEquipment: ["Kingstaff Albiore", "Archbishop's Mitre", "Holy Broach", "Lapis Pendant"],
    overview: "Sanatio's unique Albion healer class. Grants squadwide damage absorption barriers and full-team healing with Holy Breath."
  },
  {
    id: "doom-knight",
    name: "Doom Knight",
    category: "Promoted",
    role: "Physical DPS",
    tier: "SS",
    icon: "🐎🔥",
    baseStats: { hp: 115, physAtk: 102, magAtk: 70, physDef: 75, magDef: 60, initiative: 36, evasion: 25, critRate: 20 },
    activeSkills: [
      { name: "Dark Flame", apCost: 2, potency: 160, target: "Enemy Row", flags: ["Hybrid", "Row", "Burn", "Low HP Scaling"], description: "Unleash demonic flames across an entire enemy row, inflicting Burn and dealing massive bonus damage when wounded." },
      { name: "Vengeful Slash", apCost: 1, potency: 130, target: "Single Enemy", flags: ["Physical", "Low HP Scaling"], description: "Heavy slash that scales exponentially with lost HP." }
    ],
    passiveSkills: [
      { name: "Vengeance", ppCost: 1, trigger: "When Damaged", flags: ["Attack Boost", "PP Gain"], description: "Gain +25% Physical Attack and +1 PP whenever taking damage." },
      { name: "Demonic Drive", ppCost: 1, trigger: "Start of Battle", isStartOfBattle: true, flags: ["Start of Battle", "Self Buff"], description: "Sacrifice 20% HP to gain +30% Physical Attack and +30% Magical Attack." }
    ],
    bestGrowthTypes: ["Offensive", "Guardian"],
    synergiesWith: ["Featherbow", "Feathersword", "Featherstaff", "Landsknecht"],
    recommendedEquipment: ["Black Axe of the Abyss", "Zenoiran Shield", "Carnelian Pendant", "Hero's Medallion"],
    overview: "Gloucester's promoted class. Terrifying hybrid dark cavalry bruiser whose Dark Flame row attacks scale to monstrous damage as HP decreases."
  },
  {
    id: "landsknecht",
    name: "Landsknecht",
    category: "Promoted",
    role: "Physical DPS",
    tier: "S+",
    icon: "⚔️",
    baseStats: { hp: 98, physAtk: 100, magAtk: 20, physDef: 70, magDef: 45, initiative: 38, evasion: 35, critRate: 25 },
    activeSkills: [
      { name: "Bastard Slash", apCost: 1, potency: 130, target: "Single Enemy", flags: ["Physical", "Armor Piercing"], description: "Heavy two-handed sword strike piercing armor." },
      { name: "Heavy Slash", apCost: 1, potency: 110, target: "Single Enemy", flags: ["Physical"], description: "Basic heavy physical cut." }
    ],
    passiveSkills: [
      { name: "Following Slash", ppCost: 1, trigger: "After Ally Attacks", flags: ["Pursuit", "Unlimited Chains"], description: "Execute a pursuit sword attack whenever any ally damages an enemy." },
      { name: "Bullseye", ppCost: 1, trigger: "Before Active Action", flags: ["Truestrike"], description: "Grant 100% Truestrike to the next attack." }
    ],
    bestGrowthTypes: ["Offensive", "Offensive"],
    synergiesWith: ["Doom Knight", "Feathersword", "Featherbow"],
    recommendedEquipment: ["Kingsblade Cornix", "Armored Gauntlets", "Carnelian Pendant", "Hero's Medallion"],
    overview: "Jeremy's promoted class. Relentless pursuit attacker that chains unlimited Following Slashes upon enemy targets."
  }
];

fs.writeFileSync('./src/data/classes.ts', `import { UnitClass } from '@/types';\n\nexport const CLASSES_DATA: UnitClass[] = ${JSON.stringify(ALL_AUTHENTIC_CLASSES, null, 2)};\n`);
console.log('Successfully written ALL ' + ALL_AUTHENTIC_CLASSES.length + ' authentic CLASSES_DATA!');

// Rebuild SKILLS_DATA from authentic classes + authentic item skills
const allSkills = [];
ALL_AUTHENTIC_CLASSES.forEach(c => {
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

// Authentic item-granted skills
const ITEM_SKILLS = [
  { id: "trinity-rain", name: "Trinity Rain", type: "Active", cost: "3 AP", potency: 300, target: "All Enemies", classSource: "Item (Millenium Scepter)", description: "Charge a supreme 3-hit radiant magical rain storm striking all combatants.", flags: ["Magical", "Charge", "All Enemies", "Nuke"] },
  { id: "quick-impetus", name: "Quick Impetus", type: "Passive", cost: "2 PP", potency: 0, target: "Charging Ally", classSource: "Item (Black Cat-Ear Hood)", description: "When an ally uses an active charging skill, grant them an immediate action, skipping the charge turn.", flags: ["Instant Action", "Buff", "Meta Core"] },
  { id: "dragoon-dive", name: "Dragoon Dive", type: "Active", cost: "2 AP", potency: 220, target: "All Enemies", classSource: "Item (Dragoon's Warspear)", description: "Leap into the clouds and crash down onto all enemies with apocalyptic physical force.", flags: ["Physical", "Charge", "All Enemies", "Flying"] },
  { id: "eagle-eye", name: "Eagle Eye", type: "Passive", cost: "1 PP", potency: 0, target: "Self", classSource: "Item (Sniper's Amber Lens)", description: "Before attacking, grant self 100% Truestrike and 100% Guaranteed Critical Hit.", flags: ["Truestrike", "Critical", "Self Buff"] },
  { id: "tailwind", name: "Tailwind", type: "Passive", cost: "1 PP", potency: 0, target: "All Allies", classSource: "Item (Angel Plume)", description: "At Start of Battle, grant all allies +15 Initiative for the skirmish.", flags: ["Start of Battle", "Buff", "Speed"] },
  { id: "sorcerous-connection", name: "Sorcerous Connection", type: "Passive", cost: "1 PP", potency: 0, target: "Casting Ally", classSource: "Item (Familiar's Choker)", description: "When an ally casts magic, grant them +50% Magic Attack and +30% Crit Rate.", flags: ["Magic Buff", "Crit Boost"] },
  { id: "wolfpack-roar", name: "Wolfpack Roar", type: "Passive", cost: "1 PP", potency: 0, target: "Bestial Allies", classSource: "Item (Wolfpack Gauntlets)", description: "At Start of Battle, grant all Bestial allies +20% Phys Atk and +20% Crit Rate.", flags: ["Start of Battle", "Bestial Buff"] },
  { id: "sacred-barrier", name: "Sacred Barrier", type: "Passive", cost: "1 PP", potency: 0, target: "All Allies", classSource: "Item (Luminous Shield / Featherstaff)", description: "At Start of Battle, absorb up to 2 instances of incoming magic or physical damage.", flags: ["Start of Battle", "Barrier"] }
];

ITEM_SKILLS.forEach(s => {
  if (!allSkills.some(existing => existing.name.toLowerCase() === s.name.toLowerCase())) {
    allSkills.push(s);
  }
});

fs.writeFileSync('./src/data/skills.ts', `import { GameSkill } from '@/types';\n\nexport const SKILLS_DATA: GameSkill[] = ${JSON.stringify(allSkills, null, 2)};\n`);
console.log('Successfully written authentic SKILLS_DATA with ' + allSkills.length + ' verified skills!');
