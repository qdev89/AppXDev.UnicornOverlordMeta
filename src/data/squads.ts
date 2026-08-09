import { SquadBuild } from '@/types';
import { ZERO_OVERLAP_SQUADS } from './zeroOverlapSquads';

export const SQUADS_DATA: SquadBuild[] = [
  ...ZERO_OVERLAP_SQUADS,
  {
    id: 'trinity-rain-instant-nuke',
    name: 'Trinity Rain Instant Nuke',
    archetype: 'Magic Nuke',
    tier: 'SS',
    pvpRating: 'SS-Tier (Top Arena 1-Turn Wipe)',
    pveRating: 'Godly (Wipes 99% Story Comps on Expert)',
    description: 'The supreme magic nuke team sourced from r/UnicornOverlord. Sorceress/Auch charges Trinity Rain on Turn 1, immediately accelerated by Cat-Ear Hood (Quick Impetus) and buffed by Familiar\'s Choker (+50% Mag Atk) while Rosalinde stuns enemy frontliners at battle start.',
    keyItems: ['Millennium Scepter', 'Cat-Ear Hood', 'Sniper\'s Amber Lens', 'Familiar\'s Choker'],
    frontRow: ['hoplite', 'alain-high-lord'],
    backRow: ['sorceress', 'rosalinde-elven-prophet', 'cleric'],
    strategyGuide: {
      winCondition: 'Deliver a 3-hit battlefield-wide magic nuke of 2500+ damage on Turn 1 before enemies take a single action.',
      overview: 'Rosalinde triggers Rage of the Faeries at start of battle to stun enemy frontline tanks. Sorceress casts Trinity Rain (4 AP). Cleric immediately uses Cat-Ear Hood (Quick Impetus) to grant Sorceress an instant turn, while Rosalinde/Witch applies Sorcerous Connection (+50% Mag Atk) via Familiar\'s Choker. Sorceress executes True-Strike Trinity Rain.',
      combatSequenceNotes: [
        'Turn 0: Rosalinde casts Rage of the Faeries -> Stuns enemy front row (prevents guards/counters).',
        'Turn 1: Sorceress initiates Trinity Rain (4 AP charge).',
        'Turn 1: Cleric triggers Quick Impetus (Cat-Ear Hood) -> Grants Sorceress +1 AP and immediate turn.',
        'Turn 1: Support unit uses Sorcerous Connection (Familiar\'s Choker) -> Grants +50% Magic Attack.',
        'Turn 1: Sorceress activates Eagle Eye (Sniper Lens) -> Trinity Rain strikes all 5 enemies for 3-wave un-dodgeable critical magic damage!'
      ]
    },
    unitGearConfigs: [
      {
        unitId: 'sorceress',
        unitName: 'Sorceress / Warlock',
        roleTitle: 'Primary Spell Nuke',
        weapon: 'Millennium Scepter (Grants Trinity Rain)',
        shieldOrHelm: 'Sorcerer\'s Crown (+5 Initiative)',
        accessory1: 'Sniper\'s Amber Lens (Grants Eagle Eye: Guaranteed Crit + True Strike)',
        accessory2: 'Carnelian Pendant (+1 AP)',
        statPriorities: ['Mag Atk (S+)', 'Initiative (S)', 'Crit Rate (A)'],
        growthTypes: ['Offensive', 'Keen']
      },
      {
        unitId: 'cleric',
        unitName: 'Cleric / Bishop',
        roleTitle: 'Turn Acceleration Enabler',
        weapon: 'Hallow Staff',
        shieldOrHelm: 'Cat-Ear Hood (Grants Quick Impetus on Ally Charge Skill)',
        accessory1: 'Lapis Pendant (+1 PP)',
        accessory2: 'Lapis Pendant (+1 PP)',
        statPriorities: ['PP (+4 Required)', 'Initiative (A)'],
        growthTypes: ['Speedster', 'Guardian']
      },
      {
        unitId: 'rosalinde-elven-prophet',
        unitName: 'Rosalinde (Elven Prophet)',
        roleTitle: 'Start-of-Battle Stunner & Magic Buffer',
        weapon: 'Sylphid Bow / Elven Staff',
        shieldOrHelm: 'Elven Crown',
        accessory1: 'Familiar\'s Choker (Grants Sorcerous Connection: +50% Mag Atk to ally)',
        accessory2: 'Raven Plume (+15 Initiative)',
        statPriorities: ['Initiative (S+)', 'Mag Atk (A)'],
        growthTypes: ['Speedster', 'Speedster']
      },
      {
        unitId: 'alain-high-lord',
        unitName: 'Alain (High Lord)',
        roleTitle: 'Vanguard Anchor Tank',
        weapon: 'Gran Barret Greatsword',
        shieldOrHelm: 'Greatshield of the Maiden',
        accessory1: 'Ring of the Unicorn (Affliction Immunity)',
        accessory2: 'Carnelian Pendant (+1 AP)',
        statPriorities: ['Phys Def (S)', 'Phys Atk (A)'],
        growthTypes: ['All-Rounder', 'Offensive']
      },
      {
        unitId: 'hoplite',
        unitName: 'Hoplite / Legionnaire',
        roleTitle: 'Physical Wall & Guard',
        weapon: 'Heavy Iron Shield Lance',
        shieldOrHelm: 'Greatshield of Fortitude',
        accessory1: 'Heavy Guard Ring',
        accessory2: 'Lapis Pendant (+1 PP)',
        statPriorities: ['Phys Def (S+)', 'Guard Rate (100%)'],
        growthTypes: ['Guardian', 'Guardian']
      }
    ],
    substitutes: {
      earlyGame: ['Witch Yahna', 'Wizard Auch', 'Priestess Scarlett', 'Hoplite Bryce'],
      endgameAlternatives: ['Eltolinde substituting Rosalinde', 'Wereowl substituting Cleric']
    },
    tacticsSequence: [
      {
        step: 1,
        unit: 'Rosalinde',
        skill: 'Rage of the Faeries',
        condition1: '[Start of Battle]',
        condition2: '[Front Row Enemies]',
        notes: 'Stuns enemy frontline tanks so they cannot guard.'
      },
      {
        step: 2,
        unit: 'Sorceress',
        skill: 'Trinity Rain',
        condition1: '[Target: All Enemies]',
        condition2: '[AP >= 4]',
        notes: 'Initiates 4-AP Trinity Rain spell charge.'
      },
      {
        step: 3,
        unit: 'Cleric (Cat-Ear Hood)',
        skill: 'Quick Impetus',
        condition1: '[Target: Ally Charged Skill]',
        condition2: '[PP >= 3]',
        notes: 'Instantly grants 100% turn bar + 1 AP to Sorceress!'
      },
      {
        step: 4,
        unit: 'Rosalinde (Familiar Choker)',
        skill: 'Sorcerous Connection',
        condition1: '[Target: Ally Magic Attacker]',
        condition2: '[PP >= 2]',
        notes: 'Boosts Sorceress Magic Attack by +50%.'
      },
      {
        step: 5,
        unit: 'Sorceress',
        skill: 'Eagle Eye (Sniper Lens)',
        condition1: '[Target: All Enemies]',
        condition2: '[Guaranteed Crit + True Strike]',
        notes: 'Trinity Rain lands for 3-wave un-blockable 2500+ critical magic damage!'
      }
    ],
    pros: [
      'Erases 99% of enemy squads on Turn 1 regardless of physical armor or shields',
      'True Strike bypasses high evasion scouts (Thieves, Gryphons, Elven Fencers)',
      'Frontline Stun prevents enemy Start-of-Battle counters'
    ],
    cons: [
      'Feathershield Magic Reflect can reflect nuke back to wipe own team',
      'High PP requirement (3-4 PP on support units)'
    ],
    counters: [
      'Feathershield with Magic Barrier / Reflect',
      'Sainted Knight Magic Barrier',
      'Angel Plume Initiative Denial'
    ]
  },
  {
    id: 'glacial-rain-freeze-lock',
    name: 'Glacial Rain Freeze Lock',
    archetype: 'Affliction Control',
    tier: 'SS',
    pvpRating: 'SS-Tier (Total Enemy Battlefield Lockdown)',
    pveRating: 'SS-Tier (100% Zero Casualty Map Clear)',
    description: 'Yunifi\'s signature Glacial Rain meta setup. Prepares Glacial Rain on turn 1, instantly executed via Cat-Ear Hood Quick Impetus to freeze all 5 enemy units while true-striking evasive targets.',
    keyItems: ['Snow White Bow', 'Cat-Ear Hood', 'Sniper\'s Amber Lens', 'Lapis Pendant'],
    frontRow: ['hoplite', 'alain-high-lord'],
    backRow: ['yunifi-snow-ranger', 'cleric', 'selvie-druid'],
    strategyGuide: {
      winCondition: 'Freeze all 5 enemy units on Turn 1, rendering them completely unable to act or counterattack.',
      overview: 'Yunifi possesses extremely high base initiative. She charges Glacial Rain (4 AP). Cleric immediately uses Cat-Ear Hood (Quick Impetus) to give Yunifi an instant turn. Glacial Rain lands with True-Strike Crit, inflicting Freeze on all surviving units.',
      combatSequenceNotes: [
        'Turn 1: Selvie casts Defensive Cursing (-50% enemy physical defense).',
        'Turn 1: Yunifi charges Glacial Rain (4 AP).',
        'Turn 1: Cleric triggers Quick Impetus (Cat-Ear Hood) -> Yunifi acts instantly.',
        'Turn 1: Yunifi activates Eagle Eye -> Glacial Rain freezes entire enemy squad.'
      ]
    },
    unitGearConfigs: [
      {
        unitId: 'yunifi-snow-ranger',
        unitName: 'Yunifi (Snow Ranger)',
        roleTitle: 'Primary Freeze Nuke',
        weapon: 'Snow White Bow (Grants Glacial Rain)',
        shieldOrHelm: 'Snow Ranger Hood (+5 Initiative)',
        accessory1: 'Sniper\'s Amber Lens (True Strike + Crit)',
        accessory2: 'Carnelian Pendant (+1 AP)',
        statPriorities: ['Phys Atk (S+)', 'Initiative (S)', 'Crit Damage (A)'],
        growthTypes: ['Offensive', 'Speedster']
      },
      {
        unitId: 'cleric',
        unitName: 'Cleric / Bishop',
        roleTitle: 'Quick Impetus Enabler',
        weapon: 'Healing Staff',
        shieldOrHelm: 'Cat-Ear Hood',
        accessory1: 'Lapis Pendant (+1 PP)',
        accessory2: 'Lapis Pendant (+1 PP)',
        statPriorities: ['PP (+4 Required)', 'Initiative (A)'],
        growthTypes: ['Speedster', 'Guardian']
      }
    ],
    substitutes: {
      earlyGame: ['Arbalest Liza', 'Hoplite Bryce', 'Druid Selvie'],
      endgameAlternatives: ['Wereowl substituting Cleric for extra PP battery']
    },
    tacticsSequence: [
      {
        step: 1,
        unit: 'Selvie (Druid)',
        skill: 'Defensive Cursing',
        condition1: '[Full Row]',
        condition2: '[Prioritize Highest Phys Def]',
        notes: 'Strips 50% physical defense from enemy frontline.'
      },
      {
        step: 2,
        unit: 'Yunifi (Snow Ranger)',
        skill: 'Glacial Rain',
        condition1: '[Target: All Enemies]',
        condition2: '[AP >= 4]',
        notes: 'Initiates 4-AP Glacial Rain charge.'
      },
      {
        step: 3,
        unit: 'Cleric (Cat-Ear Hood)',
        skill: 'Quick Impetus',
        condition1: '[Target: Ally Charge]',
        condition2: '[PP >= 3]',
        notes: 'Gives Yunifi immediate turn execution.'
      },
      {
        step: 4,
        unit: 'Yunifi (Snow Ranger)',
        skill: 'Eagle Eye (Sniper Lens)',
        condition1: '[Target: All Enemies]',
        condition2: '[True Strike + Crit]',
        notes: 'Glacial Rain freezes all 5 enemy units!'
      }
    ],
    pros: [
      'Complete battlefield control via 100% Freeze rate',
      'True-Strike destroys evasive flying/thief comps',
      'Extremely safe clearing'
    ],
    cons: [
      'Freeze can be cleansed by enemy Bishop Refresh',
      'Requires high PP on Cat-Ear Hood wearer'
    ],
    counters: [
      'Bishop Row Cleanse (Refresh)',
      'Elven Prophet Boon of Faerie'
    ]
  },
  {
    id: 'elemental-roar-sisterhood',
    name: 'Elemental Roar Sisterhood Nuke',
    archetype: 'Magic Nuke',
    tier: 'SS',
    pvpRating: 'SS-Tier (Dual Physical & Magic Hybrid Nuke)',
    pveRating: 'SS-Tier (Instant Screen Wipe)',
    description: 'Unites the Elven Sisters (Rosalinde & Eltolinde). Uses Faerie Gathering to accumulate elemental faeries, unleashing a hybrid Physical + Magic Elemental Roar that bypasses physical armor and magic barrier defenses simultaneously.',
    keyItems: ['Sylphid Bow', 'Cat-Ear Hood', 'Sorcerer\'s Connection Ring', 'Lapis Pendant'],
    frontRow: ['alain-high-lord', 'sainted-knight'],
    backRow: ['rosalinde-elven-prophet', 'eltolinde-elven-prophet', 'selvie-druid'],
    strategyGuide: {
      winCondition: 'Unleash full 2-Faerie boosted hybrid Elemental Roar dealing simultaneous Physical and Magic row-sweeping damage.',
      overview: 'Rosalinde and Eltolinde generate Faeries at start of battle. Selvie debuffs enemy defenses. Rosalinde/Eltolinde casts Elemental Roar, which deals double damage (50% Physical + 50% Magic) to hit every enemy.',
      combatSequenceNotes: [
        'Turn 0: Rosalinde casts Primordial Protection / Rage of the Faeries.',
        'Turn 1: Selvie casts Defensive & Offensive Cursing.',
        'Turn 1: Rosalinde executes Elemental Roar with 2 Faeries stacked -> Hybrid wipe!'
      ]
    },
    unitGearConfigs: [
      {
        unitId: 'rosalinde-elven-prophet',
        unitName: 'Rosalinde (Elven Prophet)',
        roleTitle: 'Hybrid Nuke Sweeper',
        weapon: 'Sylphid Bow (+5 Initiative, +1 AP)',
        shieldOrHelm: 'Elven Crown',
        accessory1: 'Carnelian Pendant (+1 AP)',
        accessory2: 'Lapis Pendant (+1 PP)',
        statPriorities: ['Mag Atk (S)', 'Phys Atk (A)', 'Initiative (S+)'],
        growthTypes: ['Speedster', 'Offensive']
      },
      {
        unitId: 'eltolinde-elven-prophet',
        unitName: 'Eltolinde (Elven Prophet)',
        roleTitle: 'Sisterhood Enabler & Healer',
        weapon: 'Elven Staff',
        shieldOrHelm: 'Elven Tiara',
        accessory1: 'Lapis Pendant (+1 PP)',
        accessory2: 'Raven Plume (+15 Initiative)',
        statPriorities: ['Mag Atk (S)', 'Initiative (S)'],
        growthTypes: ['Speedster', 'Guardian']
      }
    ],
    substitutes: {
      earlyGame: ['Elven Fencer Ithilion', 'Elven Archer Rosalinde', 'Witch Yahna'],
      endgameAlternatives: ['Gilbert substituting Sainted Knight']
    },
    tacticsSequence: [
      {
        step: 1,
        unit: 'Rosalinde',
        skill: 'Rage of the Faeries',
        condition1: '[Start of Battle]',
        condition2: '[Front Row Enemies]',
        notes: 'Stuns frontline tanks.'
      },
      {
        step: 2,
        unit: 'Selvie (Druid)',
        skill: 'Defensive Cursing',
        condition1: '[Full Row]',
        condition2: '[Prioritize Highest Phys Def]',
        notes: 'Strips defense.'
      },
      {
        step: 3,
        unit: 'Rosalinde',
        skill: 'Elemental Roar',
        condition1: '[Target: All Enemies]',
        condition2: '[Faeries >= 1]',
        notes: 'Deals dual 200 potency Physical + Magic damage across enemy battlefield.'
      }
    ],
    pros: [
      'Dual Physical + Magic hybrid damage bypasses single-type armor',
      'Does not require 1-turn charge skills',
      'High mobility on world map'
    ],
    cons: [
      'Requires both Elven Sisters unlocked (Elheim campaign)',
      'High AP investment'
    ],
    counters: [
      'Feathershield Magic Reflect',
      'Heavy Evasion Scouts'
    ]
  },
  {
    id: 'dragoon-dive-turn-1-wipe',
    name: 'Dragoon Dive True-Strike Cleave',
    archetype: 'Instant Board Wipe',
    tier: 'SS',
    pvpRating: 'S-Tier (98% Winrate vs Ground Units)',
    pveRating: 'Godly (Speedruns Story Maps)',
    description: 'The premier speed-clearing meta composition from Reddit. Wyvern Master charges Dragoon Dive instantly triggered by Cat-Ear Hood (Quick Impetus) before enemies take a single action.',
    keyItems: ['Cat-Ear Hood', 'Dragoon\'s War Spear', 'Sniper\'s Amber Lens', 'Lapis Pendant'],
    frontRow: ['wyvern-master', 'alain-high-lord'],
    backRow: ['cleric', 'selvie-druid', 'gilbert-prince'],
    strategyGuide: {
      winCondition: 'Deliver an instant 2000+ critical True-Strike physical nuke across all 5 enemy units before their frontline can act or guard.',
      overview: 'Gilbert grants team +10 Initiative at start of battle. Selvie reduces enemy physical defense by 50%. Wyvern Master initiates Dragoon Dive (4 AP). Cleric immediately uses Cat-Ear Hood (Quick Impetus) to give Wyvern Master an instant turn, unleashing a guaranteed critical true-strike board wipe.',
      combatSequenceNotes: [
        'Turn 0: Gilbert casts Rapid Order (+10 Initiative to entire squad).',
        'Turn 0: Selvie casts Defensive Cursing on enemy front row (-50% Phys Def).',
        'Turn 1: Wyvern Master spends 4 AP on Dragoon Dive charge.',
        'Turn 1: Cleric triggers Quick Impetus (Cat-Ear Hood) -> Wyvern Master instantly acts.',
        'Turn 1: Wyvern Master activates Eagle Eye (Sniper Lens) -> Dragoon Dive strikes all enemies for 2000+ critical un-dodgeable damage!'
      ]
    },
    unitGearConfigs: [
      {
        unitId: 'wyvern-master',
        unitName: 'Wyvern Master',
        roleTitle: 'Primary AOE Nuke',
        weapon: 'Dragoon\'s War Spear (+2 AP, Grants Dragoon Dive)',
        shieldOrHelm: 'Wyvern Helm (+5 Initiative)',
        accessory1: 'Sniper\'s Amber Lens (Grants Eagle Eye: Guaranteed Crit + True Strike)',
        accessory2: 'Carnelian Pendant (+1 AP)',
        statPriorities: ['Phys Atk (S)', 'Initiative (A)', 'Crit Damage (S)'],
        growthTypes: ['Offensive', 'Keen']
      },
      {
        unitId: 'cleric',
        unitName: 'Cleric / Bishop',
        roleTitle: 'Turn Enabler Healer',
        weapon: 'Hallow Staff',
        shieldOrHelm: 'Cat-Ear Hood',
        accessory1: 'Lapis Pendant (+1 PP)',
        accessory2: 'Lapis Pendant (+1 PP)',
        statPriorities: ['PP (+4 Required)', 'Initiative (A)'],
        growthTypes: ['Speedster', 'Guardian']
      }
    ],
    substitutes: {
      earlyGame: ['Wyvern Knight Hilda', 'Housecarl', 'Priestess Scarlett'],
      endgameAlternatives: ['Yunifi substituting Wyvern Master']
    },
    tacticsSequence: [
      {
        step: 1,
        unit: 'Gilbert (Prince)',
        skill: 'Rapid Order',
        condition1: '[Start of Battle]',
        condition2: '[Prioritize Highest Initiative]',
        notes: 'Grants team +10 Initiative to ensure Wyvern Master moves first.'
      },
      {
        step: 2,
        unit: 'Selvie (Druid)',
        skill: 'Defensive Cursing',
        condition1: '[Full Row]',
        condition2: '[Prioritize Highest Phys Def]',
        notes: 'Reduces enemy front-row physical defense by 50%.'
      },
      {
        step: 3,
        unit: 'Wyvern Master',
        skill: 'Dragoon Dive',
        condition1: '[Target: All Enemies]',
        condition2: '[AP >= 4]',
        notes: 'Starts 4-AP charge skill. Triggers Cat-Ear Hood on Cleric.'
      },
      {
        step: 4,
        unit: 'Cleric (with Cat-Ear Hood)',
        skill: 'Quick Impetus',
        condition1: '[Target: Ally Charged Skill]',
        condition2: '[PP >= 3]',
        notes: 'Instantly grants 100% turn bar to Wyvern Master, executing Dragoon Dive immediately!'
      },
      {
        step: 5,
        unit: 'Wyvern Master',
        skill: 'Eagle Eye (Sniper Lens)',
        condition1: '[Target: All Enemies]',
        condition2: '[Guaranteed Crit + True Strike]',
        notes: 'Dragoon Dive strikes all enemies for 2000+ critical un-dodgeable damage.'
      }
    ],
    pros: [
      'Wipes 95% of story and PvP enemy compositions on turn 1',
      'True Strike bypasses high Evasion scouts and flying units',
      'Un-guardable physical damage destroys non-heavy armor'
    ],
    cons: [
      'Vulnerable to enemy Start-of-Battle Stun (e.g. Rosalinde)',
      'Counters like Featherbow Magic Reflect can reflect damage'
    ],
    counters: [
      'Featherbow with Magic Barrier / Reflect',
      'Rosalinde Start-of-Battle Stun'
    ]
  },
  {
    id: 'berengaria-affliction-lock',
    name: 'Berengaria Affliction Executioner',
    archetype: 'Affliction Control',
    tier: 'S',
    pvpRating: 'S-Tier (Dominates Physical Melee Comps)',
    pveRating: 'SS-Tier (High Sustained Clearing)',
    description: 'Synergizes Berengaria\'s Eye of the Monarch with Selvie\'s Sandstorm to keep enemies permanently debuffed, blinded, and taking double damage.',
    keyItems: ['Sandstorm Staff', 'Renegade Shield', 'Carnelian Pendant'],
    frontRow: ['berengaria-renegade', 'rogue'],
    backRow: ['selvie-druid', 'cleric', 'sorceress'],
    strategyGuide: {
      winCondition: 'Keep enemy team permanently Blinded & Stunned while Berengaria sweeps with 2x damage scaling.',
      overview: 'Selvie starts Sandstorm (Blinds all enemies). Berengaria triggers Eye of the Monarch (-20% enemy stats). Berengaria uses Sanguine Strike/Dead Eye Carnage for massive drain damage.',
      combatSequenceNotes: [
        'Turn 0: Selvie casts Sandstorm.',
        'Turn 0: Berengaria casts Eye of the Monarch.',
        'Turn 1: Berengaria executes Sanguine Strike.'
      ]
    },
    unitGearConfigs: [
      {
        unitId: 'berengaria-renegade',
        unitName: 'Berengaria (Renegade)',
        roleTitle: 'Debuff Executioner',
        weapon: 'Blood-Thirst Axe',
        shieldOrHelm: 'Renegade Shield',
        accessory1: 'Carnelian Pendant (+1 AP)',
        accessory2: 'Lapis Pendant (+1 PP)',
        statPriorities: ['Phys Atk (S)', 'Initiative (A)'],
        growthTypes: ['Offensive', 'Keen']
      }
    ],
    substitutes: {
      earlyGame: ['Thief Travis', 'Witch Yahna', 'Housecarl'],
      endgameAlternatives: ['Doom Knight substituting Rogue']
    },
    tacticsSequence: [
      {
        step: 1,
        unit: 'Selvie (Druid)',
        skill: 'Sandstorm',
        condition1: '[Start of Battle]',
        condition2: '[All Enemies]',
        notes: 'Inflicts Blindness on all enemies at battle start.'
      },
      {
        step: 2,
        unit: 'Berengaria (Renegade)',
        skill: 'Eye of the Monarch',
        condition1: '[Start of Battle]',
        condition2: '[All Enemies]',
        notes: 'Cuts enemy Initiative & Attack by -20%.'
      },
      {
        step: 3,
        unit: 'Berengaria (Renegade)',
        skill: 'Sanguine Strike / Dead Eye Carnage',
        condition1: '[Target: Afflicted Enemy]',
        condition2: '[AP >= 2]',
        notes: 'Deals 2x damage and recovers PP endlessly.'
      }
    ],
    pros: [
      'Enemies miss 90% of physical strikes due to Blindness',
      'Berengaria gains endless PP & HP sustain',
      'Extremely frustrating in PvP defense setups'
    ],
    cons: [
      'Debuff Immunity rings neutralize the affliction synergy',
      'Magic attacks bypass Blindness'
    ],
    counters: [
      'Ring of the Unicorn (Debuff Immunity)',
      'Elven Prophet Cleansing'
    ]
  },
  {
    id: 'triple-cavalry-steamroller',
    name: 'Triple Cavalry Steamroller',
    archetype: 'Cavalry Burst',
    tier: 'S',
    pvpRating: 'S-Tier (Crushes Ground & Armored Defense Setup)',
    pveRating: 'S-Tier (Highest World Map Speed)',
    description: 'Combines 3 Cavalry units to stack "Cavalry Call" passive buff up to +60% Physical Attack, crushing ground units with double damage bonuses.',
    keyItems: ['Dragoon\'s War Spear', 'Carnelian Pendant', 'Lapis Pendant'],
    frontRow: ['great-knight', 'alain-high-lord'],
    backRow: ['sainted-knight', 'great-knight', 'selvie-druid'],
    strategyGuide: {
      winCondition: 'Stack Cavalry Call passive to max 3x (+60% Phys Atk) and Trample/Wild Rush through infantry columns.',
      overview: 'Selvie strips defense from enemy frontline tanks. Great Knights initiate Wild Rush to stun columns while triggering Cavalry Call on each other, boosting Alain and all riders into lethal territory.',
      combatSequenceNotes: [
        'Turn 1: Selvie casts Defensive Cursing.',
        'Turn 1: Knight #1 casts Wild Rush (Stuns column).',
        'Turn 1: Knight #2 triggers Cavalry Call (+20% team cavalry attack).',
        'Turn 2: Alain executes Spinning Edge with +60% stacked attack buff.'
      ]
    },
    substitutes: {
      earlyGame: ['Knight Clive', 'Knight Adel', 'Radiant Knight Monica'],
      endgameAlternatives: ['Josef Paladin substituting Sainted Knight']
    },
    tacticsSequence: [
      {
        step: 1,
        unit: 'Selvie (Druid)',
        skill: 'Defensive Cursing',
        condition1: '[Full Row]',
        condition2: '[Prioritize Armored]',
        notes: 'Strips defense from tanks so cavalry deal max impact.'
      },
      {
        step: 2,
        unit: 'Great Knight #1',
        skill: 'Wild Rush',
        condition1: '[Column]',
        condition2: '[AP >= 2]',
        notes: 'Stuns enemy column while triggering Cavalry Call on allies.'
      },
      {
        step: 3,
        unit: 'Great Knight #2',
        skill: 'Cavalry Call Stacks',
        condition1: '[Passive Trigger]',
        condition2: '[Stack 3x]',
        notes: 'Grants +60% physical attack multiplier to all 3 cavalry riders.'
      },
      {
        step: 4,
        unit: 'Alain (High Lord)',
        skill: 'Spinning Edge',
        condition1: '[Full Row]',
        condition2: '[Prioritize Full Row]',
        notes: 'Executes row with +60% buffed attack.'
      }
    ],
    pros: [
      'Deals double damage against all Infantry and Armored units',
      'Insane movement speed on world map',
      'Simple setup with high scaling multipliers'
    ],
    cons: [
      'Vulnerable to Flying units (Wyverns/Gryphons deal double damage to Cavalry)',
      'Requires heavy frontline protection'
    ],
    counters: [
      'Wyvern Master / Gryphon Master flying squads',
      'High Evasion Scouts'
    ]
  },
  {
    id: 'virginia-crusader-retaliation',
    name: 'Virginia Crusader Retaliation Rampage',
    archetype: 'Heavy Sustain',
    tier: 'S',
    pvpRating: 'S-Tier (Crushes Aggressive Speed Comps)',
    pveRating: 'SS-Tier (High Durability Frontline)',
    description: 'Virginia Crusader meta comp anchored by Maiden Shield and Iron Veil. Triggers continuous physical parry counters whenever allies are attacked, retaliating with Brandish row slashes.',
    keyItems: ['Maiden Shield', 'Ring of the Maiden', 'Carnelian Pendant', 'Lapis Pendant'],
    frontRow: ['virginia-crusader', 'alain-high-lord'],
    backRow: ['sainted-knight', 'cleric', 'arbalest'],
    strategyGuide: {
      winCondition: 'Absorb all incoming physical attacks with 100% Guard Rate, triggering Virginia\'s Guard Counter and Brandish row sweeps.',
      overview: 'Virginia activates Maiden Shield to gain 100% Guard Rate and physical damage reduction. Whenever enemies strike, Virginia parries and retaliates with instant counter-slashes.',
      combatSequenceNotes: [
        'Turn 0: Virginia casts Iron Veil (+30% team Guard Rate).',
        'Turn 1: Enemy attacks frontline -> Virginia guards & counters with Maiden\'s Hammer.',
        'Turn 2: Virginia executes Brandish on enemy front row.'
      ]
    },
    substitutes: {
      earlyGame: ['Cruusader Virginia', 'Radiant Knight Monica', 'Sellsword Berenice'],
      endgameAlternatives: ['Legionnaire substituting Alain']
    },
    tacticsSequence: [
      {
        step: 1,
        unit: 'Virginia (Crusader)',
        skill: 'Iron Veil',
        condition1: '[Start of Battle]',
        condition2: '[Full Squad]',
        notes: 'Boosts entire squad Guard Rate by +30%.'
      },
      {
        step: 2,
        unit: 'Virginia (Crusader)',
        skill: 'Vertical Edge / Brandish',
        condition1: '[Target: Front Row]',
        condition2: '[AP >= 2]',
        notes: 'Slashes enemy row ignoring 50% physical defense.'
      }
    ],
    pros: [
      'Un-killable physical frontline with 100% Guard Rate',
      'Punishes enemy aggressive physical attackers with free counter strikes'
    ],
    cons: [
      'Vulnerable to Magic Guard-Bypass spells (Sorceress Trinity Rain)',
      'Requires heavy PP on Virginia for parry counters'
    ],
    counters: [
      'Sorceress Magic Nuke',
      'Druid Guard Seal'
    ]
  },
  {
    id: 'legionnaire-invincible-fortress',
    name: 'Legionnaire Invincible Fortress',
    archetype: 'Heavy Sustain',
    tier: 'A+',
    pvpRating: 'A+-Tier (Brick Wall Defensive Setup)',
    pveRating: 'S-Tier (Tank Boss Strikes Effortlessly)',
    description: 'The ultimate defensive turtle composition. Anchored by Legionnaire\'s Row Cover and Heavy Cover, shielding the entire squad against physical strikes while Sorceress and Arbalest chip enemies down.',
    keyItems: ['Greatshield of Fortitude', 'Lapis Pendant', 'Carnelian Pendant'],
    frontRow: ['hoplite', 'alain-high-lord'],
    backRow: ['cleric', 'sorceress', 'arbalest'],
    strategyGuide: {
      winCondition: 'Block 100% of enemy physical attacks using Row Cover while backline mages eliminate high armor targets.',
      overview: 'Legionnaire uses Row Cover to interpose and take damage for all 3 backline units whenever they are targeted by ranged physical strikes.',
      combatSequenceNotes: [
        'Turn 1: Legionnaire activates Heavy Cover whenever backline is targeted.',
        'Turn 1: Cleric heals any chip damage.',
        'Turn 2: Sorceress executes Magic Missiles to clear enemy tanks.'
      ]
    },
    substitutes: {
      earlyGame: ['Hoplite Bryce', 'Priestess Scarlett', 'Wizard Auch'],
      endgameAlternatives: ['Vanguard substituting Alain']
    },
    tacticsSequence: [
      {
        step: 1,
        unit: 'Hoplite / Legionnaire',
        skill: 'Row Cover',
        condition1: '[Target: Back Row Ally Attacked]',
        condition2: '[PP >= 1]',
        notes: 'Interposes to absorb physical damage for backline.'
      }
    ],
    pros: [
      'Backline units are completely immune to physical ranged/flying strikes',
      'Extremely forgiving for beginner players'
    ],
    cons: [
      'Slower clearing speed',
      'Vulnerable to Magic Guard Bypass'
    ],
    counters: [
      'Sorceress Magic Nuke',
      'Druid Guard Seal'
    ]
  },
  {
    id: 'aramis-swordmaster-counter-cleave',
    name: 'Aramis Swordmaster Critical Counter Cleave',
    archetype: 'Physical DPS',
    tier: 'S',
    pvpRating: 'S-Tier (Critical Parry & Instant Retaliation)',
    pveRating: 'S-Tier (Melts High Evasion Units & Bosses)',
    description: 'High-speed duel composition featuring Swordmaster Aramis and Melisandre. Stacks 100% Critical Rate and Parry passives to nullify incoming physical strikes while executing Meteor Slash.',
    keyItems: ['Master Sword', 'Parry Shield', 'Sniper\'s Amber Lens', 'Carnelian Pendant'],
    frontRow: ['swordmaster', 'fencer'],
    backRow: ['sellsword', 'sergeant', 'bishop'],
    strategyGuide: {
      winCondition: 'Parry all enemy physical attacks and retaliate with guaranteed 100% Critical Meteor Slash bursts.',
      overview: 'Swordmasters use Parry to negate incoming physical attacks, gaining +1 AP per successful parry. Backline Sergeant buffs Critical Rate while Bishop ensures debuff cleansing.',
      combatSequenceNotes: [
        'Turn 1: Swordmaster uses Parry on physical attack -> Nullifies damage and gains +1 AP.',
        'Turn 1: Swordmaster executes Meteor Slash (9-hit combo) on frontliner.',
        'Turn 2: Sellsword triggers Following Slash to finish off weakened targets.'
      ]
    },
    substitutes: {
      earlyGame: ['Swordfighter Leah', 'Fighter Lex', 'Soldier Chloe'],
      endgameAlternatives: ['Landsknecht substituting Sellsword']
    },
    tacticsSequence: [
      {
        step: 1,
        unit: 'Swordmaster',
        skill: 'Parry',
        condition1: '[Before Attacked]',
        condition2: '[Physical Attack]',
        notes: 'Nullifies physical attack and generates +1 AP.'
      },
      {
        step: 2,
        unit: 'Swordmaster',
        skill: 'Meteor Slash',
        condition1: '[Target: Lowest HP Enemy]',
        condition2: '[AP >= 2]',
        notes: '9-hit barrage with boosted critical chance.'
      }
    ],
    pros: [
      '100% Critical Rate potential',
      'Immune to single-target physical melee strikes'
    ],
    cons: [
      'Vulnerable to Magic Attacks',
      'Requires heavy AP investment'
    ],
    counters: [
      'Trinity Rain Sorceress',
      'Elven Prophet Magic Blast'
    ]
  },
  {
    id: 'scarlett-high-priestess-divine-protection',
    name: 'Scarlett High Priestess Divine Battery',
    archetype: 'Heavy Sustain',
    tier: 'SS',
    pvpRating: 'SS-Tier (Unkillable Defensive Buffer)',
    pveRating: 'Godly (100% Safety for Hard/Expert Run)',
    description: 'Premier storyline holy composition centered on Scarlett High Priestess and Alain. Combines Divine Barrier, Heavy Healing, and Resurrection with Alain\'s frontliner protection.',
    keyItems: ['Holy Maiden Wand', 'Ring of the Maiden', 'Lapis Pendant', 'Carnelian Pendant'],
    frontRow: ['alain-high-lord', 'sainted-knight'],
    backRow: ['priestess', 'featherbow', 'shaman'],
    strategyGuide: {
      winCondition: 'Sustain squad indefinitely through Divine Protection shields and rapid HP regeneration.',
      overview: 'Scarlett casts Divine Protection at battle start, granting all allies a barrier shielding 50% max HP. Sainted Knight provides Magic Barrier while Alain tanks physical damage.',
      combatSequenceNotes: [
        'Turn 0: Scarlett casts Divine Protection -> Shields all 5 allies with 50% HP barrier.',
        'Turn 1: Shaman casts Offensive Cursing -> Reduces enemy Phys/Mag Atk by 50%.',
        'Turn 1: Alain executes Spinning Edge to sweep enemy front row.'
      ]
    },
    substitutes: {
      earlyGame: ['Cleric Sharon', 'Radiant Knight Miriam', 'Hoplite Bryce'],
      endgameAlternatives: ['Bishop substituting Priestess']
    },
    tacticsSequence: [
      {
        step: 1,
        unit: 'Scarlett (High Priestess)',
        skill: 'Divine Protection',
        condition1: '[Start of Battle]',
        condition2: '[Full Squad]',
        notes: 'Shields all allies at battle start.'
      }
    ],
    pros: [
      'Extreme durability against burst nukes',
      'Full status effect immunity'
    ],
    cons: [
      'Requires turn acceleration for offensive pressure'
    ],
    counters: [
      'Dispel & Buff Cleansing'
    ]
  },
  {
    id: 'yahna-witch-magic-conferral-burst',
    name: 'Yahna Witch Magic Conferral True-Strike Nuke',
    archetype: 'Magic Nuke',
    tier: 'S+',
    pvpRating: 'S+-Tier (Magic Conferral Sweeper)',
    pveRating: 'S+-Tier (Destroys Armored & Evasive Units)',
    description: 'High-synergy magic enhancement composition. Witch Yahna uses Magic Conferral to add heavy magic damage to physical multi-hit attacks, backed by Sorceress ice freeze control.',
    keyItems: ['Sorcerer\'s Ring', 'Focusing Lens', 'Carnelian Pendant'],
    frontRow: ['gryphon-master', 'wyvern-master'],
    backRow: ['witch', 'sorceress', 'shaman'],
    strategyGuide: {
      winCondition: 'Empower Gryphon/Wyvern multi-target physical attacks with Magic Conferral and True Strike.',
      overview: 'Witch Yahna triggers Magic Conferral on Gryphon Master\'s High Gryphon Strike, dealing dual physical/magic damage to full rows.',
      combatSequenceNotes: [
        'Turn 1: Gryphon Master initiates Aerial Strike.',
        'Turn 1: Witch Yahna casts Magic Conferral -> Adds +50 Mag Atk damage to Gryphon attack.'
      ]
    },
    substitutes: {
      earlyGame: ['Witch Yahna', 'Hoplite Lex', 'Hunter Rolf'],
      endgameAlternatives: ['Elven Fencer substituting Witch']
    },
    tacticsSequence: [
      {
        step: 1,
        unit: 'Witch Yahna',
        skill: 'Magic Conferral',
        condition1: '[Target: Flying Ally Attacked]',
        condition2: '[PP >= 1]',
        notes: 'Grants magic damage bonus to physical strikes.'
      }
    ],
    pros: [
      'Bypasses physical defense and armor',
      'Freezes evasive enemy backlines'
    ],
    cons: [
      'Vulnerable to Featherbow Magic Reflect'
    ],
    counters: [
      'Featherbow Magic Mirror'
    ]
  },
  {
    id: 'gryphon-master-aerial-row-sweep',
    name: 'Gryphon Master Aerial Row Sweep',
    archetype: 'Instant Board Wipe',
    tier: 'S+',
    pvpRating: 'S+-Tier (Cavalry Demolition Unit)',
    pveRating: 'Godly (Deletes Ground & Cavalry Squads)',
    description: 'Aerial assault team composed of 2x Gryphon Masters and Gilbert. Deals 200% bonus physical damage against Cavalry units while ignoring ground melee strikes.',
    keyItems: ['Gryphon Reaver Axe', 'Cat-Ear Hood', 'Raven Plume'],
    frontRow: ['gryphon-master', 'gryphon-master'],
    backRow: ['prince', 'featherbow', 'cleric'],
    strategyGuide: {
      winCondition: 'Wipe enemy frontline cavalry and infantry with high-initiative row sweeps before ground units move.',
      overview: 'Gilbert Prince buffs Initiative (+10 SPD) and Physical Attack (+20%). Dual Gryphon Masters execute High Gryphon Strike to wipe front/back rows simultaneously.',
      combatSequenceNotes: [
        'Turn 1: Gilbert casts Rapid Order (+10 Initiative to squad).',
        'Turn 1: Gryphon Master #1 executes High Gryphon Strike on enemy front row.'
      ]
    },
    substitutes: {
      earlyGame: ['Gryphon Knight Celeste', 'Soldier Chloe', 'Cleric Sharon'],
      endgameAlternatives: ['Wyvern Master substituting Gryphon']
    },
    tacticsSequence: [
      {
        step: 1,
        unit: 'Gryphon Master',
        skill: 'High Gryphon Strike',
        condition1: '[Target: Full Row]',
        condition2: '[AP >= 2]',
        notes: 'Sweeps row with 200% bonus vs Cavalry.'
      }
    ],
    pros: [
      'Absolute hard counter to Great Knights',
      'High natural evasion against melee'
    ],
    cons: [
      'Vulnerable to Archers (Hunter / Sniper / Shieldshooter)'
    ],
    counters: [
      'Sniper True-Strike Lock'
    ]
  },
  {
    id: 'viking-armor-shatter-engine',
    name: 'Viking Armor Shatter & Defense Drain',
    archetype: 'Physical DPS',
    tier: 'S',
    pvpRating: 'S-Tier (Defensive Wall Breaker)',
    pveRating: 'S-Tier (Crushes Armored Bosses)',
    description: 'Heavy physical armor-shattering composition. Viking Aubin uses War Horn and Armor Shatter to reduce enemy Physical Defense to 0, enabling Landsknecht multi-cleave wipes.',
    keyItems: ['Berserker Axe', 'War Horn', 'Carnelian Pendant'],
    frontRow: ['viking', 'landsknecht'],
    backRow: ['sergeant', 'arbalest', 'bishop'],
    strategyGuide: {
      winCondition: 'Reduce enemy physical defense to 0% with War Horn and execute full-team physical sweeps.',
      overview: 'Viking casts War Horn at battle start to make all physical attacks unblockable. Armor Shatter reduces target Physical Def by 50%.',
      combatSequenceNotes: [
        'Turn 0: Viking casts War Horn -> All ally physical attacks ignore enemy guard.',
        'Turn 1: Viking executes Armor Shatter on enemy tank -> Reduces Phys Def by 50%.'
      ]
    },
    substitutes: {
      earlyGame: ['Housecarl Aubin', 'Sellsword Berenice', 'Soldier Chloe'],
      endgameAlternatives: ['Breaker substituting Landsknecht']
    },
    tacticsSequence: [
      {
        step: 1,
        unit: 'Viking',
        skill: 'War Horn',
        condition1: '[Start of Battle]',
        condition2: '[Full Squad]',
        notes: 'Grants Guard Bypass to all ally physical strikes.'
      }
    ],
    pros: [
      'Bypasses 100% Guard Rate shields',
      'High single-target burst'
    ],
    cons: [
      'Moderate Initiative speed'
    ],
    counters: [
      'High Evasion Rogue / Feathersword'
    ]
  },
  {
    id: 'feathershield-magic-reflect-fortress',
    name: 'Feathershield Magic Reflect Albion Fortress',
    archetype: 'Heavy Sustain',
    tier: 'SS',
    pvpRating: 'SS-Tier (Ultimate Anti-Mage PvP Counter)',
    pveRating: 'S-Tier (Albion End-Game Dominance)',
    description: 'Albion angelic defensive composition. Feathershield uses Magic Reflect to bounce Trinity Rain and Glacial Rain back onto enemy mages while Featherstaff provides mass healing.',
    keyItems: ['Angelic Shield', 'Reflect Charm', 'Lapis Pendant'],
    frontRow: ['feathershield', 'feathersword'],
    backRow: ['featherstaff', 'featherbow', 'bishop'],
    strategyGuide: {
      winCondition: 'Reflect 100% of enemy magic spells back onto enemy casters while maintaining airborne evasion.',
      overview: 'Feathershield triggers Magic Reflect whenever an enemy casts a magic attack, turning Trinity Rain into an instant self-wipe for the enemy team.',
      combatSequenceNotes: [
        'Turn 1: Enemy mages initiate Trinity Rain.',
        'Turn 1: Feathershield triggers Magic Reflect -> Reflects spell back onto enemy casters for instant victory!'
      ]
    },
    substitutes: {
      earlyGame: ['Sainted Knight', 'Hoplite Bryce', 'Cleric Sharon'],
      endgameAlternatives: ['Paladin Josef substituting Feathersword']
    },
    tacticsSequence: [
      {
        step: 1,
        unit: 'Feathershield',
        skill: 'Magic Reflect',
        condition1: '[Target: Ally Targeted by Magic]',
        condition2: '[PP >= 1]',
        notes: 'Reflects enemy spell back onto attacker.'
      }
    ],
    pros: [
      '100% Hard counter to Trinity Rain and magic nukes',
      'High evasion and flight mobility'
    ],
    cons: [
      'Lower physical attack potency'
    ],
    counters: [
      'Heavy Physical Armor Breaker'
    ]
  },
  {
    id: 'werewolf-night-hunting-pack',
    name: 'Werewolf Night Hunting Pack',
    archetype: 'Cavalry Burst',
    tier: 'S+',
    pvpRating: 'S+-Tier (High-Speed Pursuit Chasing)',
    pveRating: 'S+-Tier (Night Time Map Wiping)',
    description: 'Bastorias beastfolk night-hunting squad. Stacks Werewolf Pursuit passives to trigger up to 6 bonus physical chase attacks per turn, amplified by Night Time stat bonuses.',
    keyItems: ['Beastfang Dagger', 'Wolfpack Gauntlets', 'Raven Plume'],
    frontRow: ['werewolf', 'werewolf'],
    backRow: ['werewolf', 'werebear', 'wereowl'],
    strategyGuide: {
      winCondition: 'Trigger endless Pursuit chase attacks whenever any enemy takes damage.',
      overview: 'Werewolves gain +20% Phys Atk and Initiative at Night. Pursuit allows every Werewolf to attack immediately after an ally damages an enemy.',
      combatSequenceNotes: [
        'Turn 1: Werewolf #1 attacks enemy.',
        'Turn 1: Werewolf #2 triggers Pursuit -> Immediately strikes target.',
        'Turn 1: Werewolf #3 triggers Pursuit -> Striking target again!'
      ]
    },
    substitutes: {
      earlyGame: ['Sellsword Berenice', 'Thief Travis', 'Viking Aubin'],
      endgameAlternatives: ['Werelion substituting Werebear']
    },
    tacticsSequence: [
      {
        step: 1,
        unit: 'Werewolf',
        skill: 'Pursuit',
        condition1: '[Target: Ally Attacks Enemy]',
        condition2: '[PP >= 1]',
        notes: 'Triggers instant chase attack on damaged target.'
      }
    ],
    pros: [
      'Extremely high attack frequency per turn',
      'Devastating at Night Time'
    ],
    cons: [
      'Reduced stats during Day Time'
    ],
    counters: [
      'Heavy Armored Tank with Row Cover'
    ]
  },
  {
    id: 'morion-dark-marquess-affliction-lockdown',
    name: 'Morion Dark Marquess Affliction Lockdown',
    archetype: 'Affliction Control',
    tier: 'SS',
    pvpRating: 'SS-Tier (Debuff & AP/PP Lockdown)',
    pveRating: 'Godly (Completely Disables Boss Mechanics)',
    description: 'Drakenhold elite dark composition combining Dark Marquess Axe, Spear, and Sword. Imposes Stun, Poison, Passive Seal, and Attack Down on enemy squads while harvesting AP.',
    keyItems: ['Dark Marquess Axe', 'Cursed Ring', 'Carnelian Pendant'],
    frontRow: ['dark-marquess', 'berengaria-dark-marquess'],
    backRow: ['shaman', 'rogue', 'bishop'],
    strategyGuide: {
      winCondition: 'Lock down enemy AP/PP actions through multi-afflictions while Dark Marquess deals 200% bonus damage to afflicted targets.',
      overview: 'Selvie Shaman casts Sandstorm to inflict Blind/Debuffs. Berengaria and Dark Marquess trigger Carnage and Sanguine Pursuit to drain AP/PP.',
      combatSequenceNotes: [
        'Turn 0: Shaman casts Sandstorm -> Blinds enemy frontline.',
        'Turn 1: Dark Marquess executes Executioner -> 200% damage to afflicted targets.'
      ]
    },
    substitutes: {
      earlyGame: ['Berengaria', 'Thief Travis', 'Shaman Selvie'],
      endgameAlternatives: ['Dreadnought substituting Dark Marquess']
    },
    tacticsSequence: [
      {
        step: 1,
        unit: 'Dark Marquess',
        skill: 'Carnage',
        condition1: '[Start of Battle]',
        condition2: '[Full Squad]',
        notes: 'Lowers enemy initiative and physical attack.'
      }
    ],
    pros: [
      'Complete battlefield control',
      'Massive damage vs debuffed targets'
    ],
    cons: [
      'Vulnerable to Cleric Refresh / Debuff Cleanse'
    ],
    counters: [
      'Cleric Refresh & Cleanse'
    ]
  }
];

