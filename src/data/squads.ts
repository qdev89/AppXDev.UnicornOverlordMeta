import { SquadBuild } from '@/types';

export const SQUADS_DATA: SquadBuild[] = [
  {
    id: 'dragoon-dive-turn-1-wipe',
    name: 'Dragoon Dive Turn-1 Wipe',
    archetype: 'Instant Board Wipe',
    tier: 'SS',
    description: 'The premier speed-clearing meta composition. Wyvern Master charges Dragoon Dive instantly triggered by Cat-Ear Hood (Quick Impetus) before enemies take a single action.',
    keyItems: ['Cat-Ear Hood', 'Dragoon\'s War Spear', 'Sniper\'s Amber Lens', 'Lapis Pendant'],
    frontRow: ['wyvern-master', 'alain-high-lord'],
    backRow: ['cleric', 'selvie-druid', 'gilbert-prince'],
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
      'Counters like Featherbow Magic Reflect can reflect damage',
      'High PP reliance requires specific 3-PP gear'
    ],
    counters: [
      'Featherbow with Magic Barrier / Reflect',
      'Rosalinde Start-of-Battle Stun',
      'Angel Plume Initiative Denial'
    ]
  },
  {
    id: 'alain-scarlett-undefeatable-ace',
    name: 'Alain & Scarlett Undefeatable Ace',
    archetype: 'Heavy Sustain',
    tier: 'SS',
    description: 'An unstoppable front-line wall anchored by High Lord Alain, supported by Scarlett\'s infinite cleanses, shields, and passive AP generation.',
    keyItems: ['Ring of the Unicorn', 'Ring of the Maiden', 'Carnelian Pendant', 'Lapis Pendant'],
    frontRow: ['alain-high-lord', 'berengaria-renegade'],
    backRow: ['cleric', 'gilbert-prince', 'sainted-knight'],
    tacticsSequence: [
      {
        step: 1,
        unit: 'Alain (High Lord)',
        skill: 'Luminous Cover',
        condition1: '[Start of Battle]',
        condition2: '[Prioritize Back Row]',
        notes: 'Immunizes back-row healers against physical damage.'
      },
      {
        step: 2,
        unit: 'Gilbert (Prince)',
        skill: 'Offensive Order',
        condition1: '[Full Squad]',
        condition2: '[Always Active]',
        notes: 'Boosts team physical & magical attack by 20%.'
      },
      {
        step: 3,
        unit: 'Berengaria (Renegade)',
        skill: 'Dead Eye Carnage',
        condition1: '[Target: Full Row]',
        condition2: '[Condition: Afflicted Enemy]',
        notes: 'Sweeps enemies with double damage against debuffed targets.'
      },
      {
        step: 4,
        unit: 'Alain (High Lord)',
        skill: 'Spinning Edge',
        condition1: '[Full Row]',
        condition2: '[Prioritize Front Row]',
        notes: 'Clean row-clearing slash restoring Alain\'s AP.'
      }
    ],
    pros: [
      'Near-infinite durability with dual-layer active heals & shields',
      'Alain is completely immune to afflictions via Ring of the Unicorn',
      'High single-target and row damage output'
    ],
    cons: [
      'Slower turn 1 execution compared to glass-cannon nuke teams',
      'Heavy AP/PP investment across all 5 units'
    ],
    counters: [
      'Magic Armor Bypass (Sorceress)',
      'Guard Seal from Druid'
    ]
  },
  {
    id: 'triple-cavalry-steamroller',
    name: 'Triple Cavalry Steamroller',
    archetype: 'Cavalry Burst',
    tier: 'S',
    description: 'Combines 3 Cavalry units to stack "Cavalry Call" passive buff up to +60% Physical Attack, crushing ground units with double damage bonuses.',
    keyItems: ['Dragoon\'s War Spear', 'Carnelian Pendant', 'Lapis Pendant'],
    frontRow: ['great-knight', 'alain-high-lord'],
    backRow: ['sainted-knight', 'great-knight', 'selvie-druid'],
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
    id: 'heavy-durability-glacial-rain',
    name: 'Heavy Durability Glacial Rain',
    archetype: 'Affliction Control',
    tier: 'SS',
    description: 'Anchored by Yunifi\'s Glacial Rain. Freezes the entire enemy battlefield on Turn 1 while a Hoplite wall absorbs all counter-strikes.',
    keyItems: ['Cat-Ear Hood', 'Sniper\'s Amber Lens', 'Snow White Bow'],
    frontRow: ['hoplite', 'alain-high-lord'],
    backRow: ['yunifi-snow-ranger', 'cleric', 'selvie-druid'],
    tacticsSequence: [
      {
        step: 1,
        unit: 'Yunifi (Snow Ranger)',
        skill: 'Glacial Rain',
        condition1: '[All Enemies]',
        condition2: '[AP >= 4]',
        notes: 'Prepares Glacial Rain nuke.'
      },
      {
        step: 2,
        unit: 'Cleric (Cat-Ear Hood)',
        skill: 'Quick Impetus',
        condition1: '[Target: Ally Charge]',
        condition2: '[PP >= 3]',
        notes: 'Gives Yunifi immediate turn execution.'
      },
      {
        step: 3,
        unit: 'Yunifi (Snow Ranger)',
        skill: 'Glacial Rain Execution',
        condition1: '[True Strike + Crit]',
        condition2: '[Inflicts Freeze]',
        notes: 'Freezes all surviving enemies, rendering them unable to act.'
      }
    ],
    pros: [
      'Complete lockdown control via battlefield-wide Freeze',
      'Hoplite frontline handles any surprise surviving physical attacks'
    ],
    cons: [
      'Freeze can be cleansed by Bishop Refresh',
      'Requires high PP investment on Cat-Ear Hood holder'
    ],
    counters: [
      'Bishop Row Cleanse (Refresh)',
      'Elven Sibyl Boon of Faerie'
    ]
  },
  {
    id: 'berengaria-affliction-lock',
    name: 'Berengaria Affliction Lock',
    archetype: 'Affliction Control',
    tier: 'S',
    description: 'Synergizes Berengaria\'s Eye of the Monarch with Selvie\'s Sandstorm to keep enemies permanently debuffed, blinded, and taking double damage.',
    keyItems: ['Sandstorm Staff', 'Renegade Shield', 'Carnelian Pendant'],
    frontRow: ['berengaria-renegade', 'rogue'],
    backRow: ['selvie-druid', 'cleric', 'sorceress'],
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
    id: 'double-trinity-rain',
    name: 'Double Trinity Rain',
    archetype: 'Magic Nuke',
    tier: 'SS',
    description: 'Unleashes double wave Trinity Rain spellcraft powered by Sorceress + Rosalinde, wiping high physical armor teams in seconds.',
    keyItems: ['Millennium Scepter', 'Cat-Ear Hood', 'Lapis Pendant'],
    frontRow: ['hoplite', 'sainted-knight'],
    backRow: ['sorceress', 'rosalinde-elven-prophet', 'cleric'],
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
        condition1: '[All Enemies]',
        condition2: '[AP >= 4]',
        notes: 'Initiates Trinity Rain charge.'
      },
      {
        step: 3,
        unit: 'Cleric (Cat-Ear Hood)',
        skill: 'Quick Impetus',
        condition1: '[Target: Ally Charge]',
        condition2: '[PP >= 3]',
        notes: 'Triggers instantaneous cast.'
      }
    ],
    pros: [
      'Melts heavy armor, Hoplites, and high-health targets effortlessly',
      'Overcomes physical evasion entirely'
    ],
    cons: [
      'Feathershield Magic Reflect can reflect damage back to wipe own team',
      'High magic defense comps can survive'
    ],
    counters: [
      'Feathershield Magic Reflect',
      'Sainted Knight Magic Barrier'
    ]
  }
];
