import { CounterStrategy } from '@/types';

export const COUNTERS_DATA: CounterStrategy[] = [
  {
    id: 'hoplite-physical-wall',
    enemyArchetype: 'Hoplite Physical Wall',
    threatDescription: 'Frontline Hoplite / Legionnaire wall equipped with Heavy Cover and Greatshields, absorbing 75%-100% of physical damage intended for back-row damage dealers.',
    keyCounters: [
      'Guard Seal debuffs (Selvie Druid)',
      'Direct Magic Nukes (Sorceress / Rosalinde)',
      'Armor-Bypass skills (Warrior Heavy Slash / Shieldbreaker)'
    ],
    recommendedUnits: ['selvie-druid', 'sorceress', 'rosalinde-elven-prophet'],
    mustHaveItems: ['Sandstorm Staff', 'Millennium Scepter', 'Ring of the Maiden'],
    tacticsConditions: [
      'Selvie: Guard Curse -> [Target: Armored]',
      'Sorceress: Icicle Dart -> [Target: Highest Phys Def]',
      'Warrior: Heavy Slash -> [Target: Armored]'
    ],
    tacticalTip: 'Do NOT hit a Hoplite with physical attacks without Guard Seal. Use Selvie\'s Guard Curse to freeze their shield passive, turning their 110 Physical Defense into tissue paper.'
  },
  {
    id: 'flying-evasion-team',
    enemyArchetype: 'Flying Evasion Team (Wyverns & Gryphons)',
    threatDescription: 'High-speed Wyvern and Gryphon flyers with +50% evasion against ground units, dodging standard physical attacks and threatening double damage against Cavalry.',
    keyCounters: [
      'True Strike skills (Yunifi Sonic Shaft / Sniper Lens)',
      'Ranged Archers (High Accuracy vs Flying)',
      'Row Blindness (Rogue Shadow Bite)'
    ],
    recommendedUnits: ['yunifi-snow-ranger', 'raenys-featherbow', 'swordmaster'],
    mustHaveItems: ['Sniper\'s Amber Lens', 'Snow White Bow'],
    tacticsConditions: [
      'Yunifi: Sonic Shaft -> [Target: Flying]',
      'Archer: Dual Shot -> [Target: Flying]',
      'Raenys: Tailwind Town -> [Start of Battle]'
    ],
    tacticalTip: 'Ground melee units have a 50% hit penalty against Flying. Equip Sniper\'s Amber Lens for Eagle Eye (Guaranteed True Strike) or deploy Archers who gain +100% accuracy scaling against flyers.'
  },
  {
    id: 'magic-reflect-feathershields',
    enemyArchetype: 'Magic Reflect Feathershields',
    threatDescription: 'Feathershields using Magic Reflect passive to bounce incoming Magic Nukes (Trinity Rain, Elemental Roar) back at your squad, causing instant self-destruction.',
    keyCounters: [
      'Pure Physical Board Wipes (Dragoon Dive)',
      'PP Drain / Passive Seal (Rogue Passive Steal / Banishment Ring)',
      'Stun at Start of Battle (Rosalinde Rage of the Faeries)'
    ],
    recommendedUnits: ['wyvern-master', 'rogue', 'berengaria-renegade'],
    mustHaveItems: ['Dragoon\'s War Spear', 'Banishment Ring', 'Thief\'s Dagger'],
    tacticsConditions: [
      'Wyvern Master: Dragoon Dive -> [Target: All Enemies]',
      'Rogue: Passive Steal -> [Target: Highest PP]',
      'Berengaria: Sanguine Strike -> [Target: Feathershield]'
    ],
    tacticalTip: 'NEVER use Trinity Rain against Feathershields! Switch your main dps from Magic to Physical Dragoon Dive, or drain their PP on turn 1 using Rogue Passive Steal so they cannot trigger Magic Reflect.'
  },
  {
    id: 'turn-1-quick-impetus-wipe',
    enemyArchetype: 'Turn-1 Quick Impetus Wipe (Dragoon / Glacial Rain)',
    threatDescription: 'Enemy glass-cannon team using Cat-Ear Hood (Quick Impetus) to trigger a 4-AP charged nuke immediately on Turn 1 before your team can react.',
    keyCounters: [
      'Start-of-Battle Stun (Rosalinde Rage of the Faeries)',
      'Start-of-Battle Blindness (Selvie Sandstorm)',
      'Initiative Out-Speeding (Gilbert Rapid Order + Angel Plume)'
    ],
    recommendedUnits: ['rosalinde-elven-prophet', 'selvie-druid', 'gilbert-prince'],
    mustHaveItems: ['Sandstorm Staff', 'Angel Plume', 'Ring of the Maiden'],
    tacticsConditions: [
      'Rosalinde: Rage of the Faeries -> [Start of Battle] (Stuns charger)',
      'Selvie: Sandstorm -> [Start of Battle] (Blinds charger)',
      'Sainted Knight: Magic Barrier -> [When Ally Casts]'
    ],
    tacticalTip: 'Start-of-Battle skills interrupt Turn-1 nukes! Deploy Rosalinde to Stun the charging unit or Selvie with Sandstorm Staff to Blind them so their Quick Impetus nuke completely misses.'
  },
  {
    id: 'affliction-stun-lock',
    enemyArchetype: 'Affliction Stun / Freeze Lock',
    threatDescription: 'Enemy debuff team spamming Freeze, Stun, and Poison to lock your squad in permanent CC while slowly draining health.',
    keyCounters: [
      'Debuff Immunity (Ring of the Unicorn & Ring of the Maiden)',
      'Row Cleansing (Cleric Refresh / Elven Sibyl Boon)',
      'Passive Cleanse (Bishop Refresh)'
    ],
    recommendedUnits: ['cleric', 'eltolinde-elven-sibyl', 'alain-high-lord'],
    mustHaveItems: ['Ring of the Unicorn', 'Ring of the Maiden', 'Pure Maiden Spear'],
    tacticsConditions: [
      'Cleric: Refresh -> [Target: Full Row] -> [Condition: Afflicted Ally]',
      'Alain: Ring of the Unicorn -> [Always Equipped]',
      'Eltolinde: Boon of the Faerie -> [Condition: Debuffed Ally]'
    ],
    tacticalTip: 'Equip Ring of the Unicorn on your main front-liner for total debuff immunity. Set your Cleric\'s Refresh condition to "[Condition: Afflicted Ally]" so PP is only spent when someone is actually frozen or stunned.'
  }
];
