import { SquadBuild } from '@/types';
import { ZERO_OVERLAP_SQUADS } from './zeroOverlapSquads';

const COMMUNITY_SQUADS: SquadBuild[] = [
  {
    id: 'meta-11-double-elemental-roar',
    name: '11. Double Elemental Roar Tempest',
    archetype: 'Magic Nuke',
    tier: 'SS',
    pvpRating: 'SS-Tier (Double Turn-1 Elven Blast)',
    pveRating: 'Godly (Wipes all Elheim & Albion maps)',
    description: 'The Elven Sisters combo (Rosalinde & Eltolinde). Rosalinde opens with Rage of the Faeries (Row Stun) and channels Elemental Roar, followed immediately by Eltolinde\'s Elemental Roar boosted by Faerie charges.',
    keyItems: ['Elven Crown', 'Sylphid Spear', 'Familiar\'s Choker', 'Cat-Ear Hood'],
    frontRow: ['alain-high-lord', 'feathersword'],
    backRow: ['rosalinde-elven-prophet', 'elven-augur', 'cleric'],
    pros: ['Dual battlefield hybrid physical/magical nukes', 'Rosalinde Turn 0 frontline stun', 'Faerie Heal passive squad sustain'],
    cons: ['Requires high PP investments on both Elven sisters'],
    counters: ['Featherstaff Magic Reflect'],
    strategyGuide: {
      winCondition: 'Deliver two consecutive 2000+ potency Elemental Roar spells before the enemy takes a turn.',
      overview: 'Rosalinde casts Rage of the Faeries to stun the enemy front row. On Turn 1, Rosalinde casts Elemental Roar. Eltolinde immediately follows up with a second Elemental Roar using Cat-Ear Hood.',
      combatSequenceNotes: [
        'Turn 0: Rosalinde casts Rage of the Faeries -> Stuns enemy front row.',
        'Turn 1: Rosalinde casts Elemental Roar -> 200+ potency hybrid magic nuke.',
        'Turn 1: Cleric triggers Quick Impetus -> Eltolinde casts second Elemental Roar.'
      ]
    },
    unitGearConfigs: [
      {
        unitId: 'rosalinde-elven-prophet',
        unitName: 'Rosalinde (Elven Prophet)',
        roleTitle: 'Primary Elven Nuke',
        weapon: 'Sylphid Spear (Elven Spear)',
        shieldOrHelm: 'Elven Crown',
        accessory1: 'Familiar\'s Choker (+50% Mag Atk)',
        accessory2: 'Carnelian Pendant (+1 AP)',
        statPriorities: ['Mag Atk (S+)', 'Initiative (S)'],
        growthTypes: ['Offensive', 'Keen']
      },
      {
        unitId: 'elven-augur',
        unitName: 'Eltolinde (Elven Augur)',
        roleTitle: 'Secondary Elven Nuke & Healer',
        weapon: 'Elven Spear',
        shieldOrHelm: 'Elven Tiara',
        accessory1: 'Lapis Pendant (+1 PP)',
        accessory2: 'Carnelian Pendant (+1 AP)',
        statPriorities: ['Mag Atk (S)', 'Initiative (A)'],
        growthTypes: ['Speedster', 'Keen']
      },
      {
        unitId: 'cleric',
        unitName: 'Sharon (Bishop / Cleric)',
        roleTitle: 'Turn Enabler',
        weapon: 'Hallow Staff',
        shieldOrHelm: 'Cat-Ear Hood (Quick Impetus)',
        accessory1: 'Lapis Pendant (+1 PP)',
        accessory2: 'Lapis Pendant (+1 PP)',
        statPriorities: ['PP (+4 Required)', 'Initiative (B)'],
        growthTypes: ['Guardian', 'Speedster']
      },
      {
        unitId: 'alain-high-lord',
        unitName: 'Alain (High Lord)',
        roleTitle: 'Vanguard Wall',
        weapon: 'Gran Barret Greatsword',
        shieldOrHelm: 'Greatshield of the Maiden',
        accessory1: 'Ring of the Unicorn',
        accessory2: 'Carnelian Pendant (+1 AP)',
        statPriorities: ['Phys Def (S)', 'Phys Atk (A)'],
        growthTypes: ['All-Rounder', 'Offensive']
      },
      {
        unitId: 'feathersword',
        unitName: 'Ochlys (Feathersword)',
        roleTitle: 'Evasive Tank',
        weapon: 'Celestial Sword',
        shieldOrHelm: 'Angel Shield',
        accessory1: 'Feather Amulet',
        accessory2: 'Lapis Pendant (+1 PP)',
        statPriorities: ['Evasion (S+)', 'Phys Def (B)'],
        growthTypes: ['Speedster', 'Defender']
      }
    ],
    tacticsSequence: [
      { step: 1, unit: 'Rosalinde', skill: 'Rage of the Faeries', condition1: '[Start of Battle]', condition2: '[Front Row Enemies]', notes: 'Row Stun' },
      { step: 2, unit: 'Rosalinde', skill: 'Elemental Roar', condition1: '[Target: All Enemies]', condition2: '[Self AP >= 3]', notes: 'First Nuke' },
      { step: 3, unit: 'Eltolinde', skill: 'Elemental Roar', condition1: '[Target: All Enemies]', condition2: '[Self AP >= 3]', notes: 'Second Nuke' }
    ]
  },
  {
    id: 'meta-12-yahna-quick-cast-meteor',
    name: '12. Yahna Quick Cast Meteor Nuke',
    archetype: 'Magic Nuke',
    tier: 'SS',
    pvpRating: 'SS-Tier (Start of Battle Fast Nuke)',
    pveRating: 'Godly (Deletes bosses on Turn 1)',
    description: 'Sorceress Yahna uses Quick Cast at Start of Battle to cast a massive instant magic spell before any combatant can act.',
    keyItems: ['Millennium Scepter', 'Familiar\'s Choker', 'Sniper\'s Amber Lens', 'Raven Plume'],
    frontRow: ['hoplite', 'radiant-knight'],
    backRow: ['sorceress', 'warlock', 'cleric'],
    pros: ['Instant Start-of-Battle spell execution', '100% True-Strike Critical hit', 'Massive AOE magic damage'],
    cons: ['Consumes 3 AP on Turn 1'],
    counters: ['Featherstaff Barrier'],
    strategyGuide: {
      winCondition: 'Cast Quick Cast Meteor/Trinity Rain at Start of Battle to vaporize the enemy lineup.',
      overview: 'Yahna triggers Quick Cast at Start of Battle to cast Trinity Rain instantly. Auch boosts her magic attack, and Sharon heals the frontline.',
      combatSequenceNotes: [
        'Turn 0: Yahna casts Quick Cast -> Immediately executes 4 AP magic nuke.',
        'Turn 1: Auch cleans up with Fireball / Volcano.'
      ]
    },
    unitGearConfigs: [
      {
        unitId: 'sorceress',
        unitName: 'Yahna (Sorceress)',
        roleTitle: 'Quick Cast Nuke',
        weapon: 'Millennium Scepter',
        shieldOrHelm: 'Mage Tiara',
        accessory1: 'Sniper\'s Amber Lens',
        accessory2: 'Carnelian Pendant (+1 AP)',
        statPriorities: ['Mag Atk (S+)', 'Initiative (S)'],
        growthTypes: ['Offensive', 'Keen']
      },
      {
        unitId: 'warlock',
        unitName: 'Auch (Warlock)',
        roleTitle: 'Magic Supporter',
        weapon: 'Mistral Staff',
        shieldOrHelm: 'Sorcerer Hood',
        accessory1: 'Familiar\'s Choker',
        accessory2: 'Raven Plume',
        statPriorities: ['Mag Atk (S)', 'Initiative (A)'],
        growthTypes: ['Offensive', 'Speedster']
      },
      {
        unitId: 'cleric',
        unitName: 'Sharon (Bishop)',
        roleTitle: 'Healer',
        weapon: 'Hallow Staff',
        shieldOrHelm: 'Cleric Hat',
        accessory1: 'Lapis Pendant (+1 PP)',
        accessory2: 'First Aid Kit',
        statPriorities: ['Healing (S)', 'PP (+2)'],
        growthTypes: ['Guardian', 'Speedster']
      },
      {
        unitId: 'hoplite',
        unitName: 'Hodrick (Legionnaire)',
        roleTitle: 'Frontline Shield',
        weapon: 'Iron Spear',
        shieldOrHelm: 'Greatshield of Fortitude',
        accessory1: 'Heavy Guard Ring',
        accessory2: 'Lapis Pendant (+1 PP)',
        statPriorities: ['Phys Def (S+)', 'Guard Rate (100%)'],
        growthTypes: ['Guardian', 'Guardian']
      },
      {
        unitId: 'radiant-knight',
        unitName: 'Miriam (Radiant Knight)',
        roleTitle: 'Magic Defense Support',
        weapon: 'Rune Sword',
        shieldOrHelm: 'Radiant Shield',
        accessory1: 'White Knight Plume',
        accessory2: 'Lapis Pendant (+1 PP)',
        statPriorities: ['Mag Def (S)', 'Phys Def (B)'],
        growthTypes: ['Defender', 'Speedster']
      }
    ],
    tacticsSequence: [
      { step: 1, unit: 'Yahna', skill: 'Quick Cast', condition1: '[Start of Battle]', condition2: '[Self AP >= 3]', notes: 'Instant Spell' }
    ]
  },
  {
    id: 'meta-13-ochlys-evade-blitz',
    name: '13. Ochlys Evade Feathersword Blitz',
    archetype: 'Heavy Sustain',
    tier: 'S+',
    pvpRating: 'S+-Tier (Evasive Aerial Wall)',
    pveRating: 'Godly (Invincible against melee physical)',
    description: 'Ochlys and Umerus stack 100+ Evasion, evading 99% of melee strikes while parrying and retaliating with Spiral Sword.',
    keyItems: ['Celestial Sword', 'Angel Shield', 'Feather Amulet', 'Silverscale Shield'],
    frontRow: ['feathersword', 'feathersword'],
    backRow: ['featherstaff', 'featherbow', 'radiant-knight'],
    pros: ['100+ Evasion renders melee physical useless', 'Angel Shield magic reflection', 'Airborne mobility'],
    cons: ['Vulnerable to True-Strike Marksmen'],
    counters: ['Sniper True-Strike Arrow Rain'],
    strategyGuide: {
      winCondition: 'Dodge all incoming physical strikes and counter with Spiral Sword row cuts.',
      overview: 'Ochlys and Umerus evade attacks, gaining AP/PP per dodge. Raenys blinds ranged attackers with Shining Arrow.',
      combatSequenceNotes: [
        'Turn 0: Raenys casts Shining Arrow -> Blinds enemy bowmen.',
        'Turn 1: Ochlys evades attacks and retaliates with Evasive Thrust.'
      ]
    },
    unitGearConfigs: [
      {
        unitId: 'feathersword',
        unitName: 'Ochlys (Feathersword)',
        roleTitle: 'Evasion Leader',
        weapon: 'Celestial Sword',
        shieldOrHelm: 'Angel Shield',
        accessory1: 'Feather Amulet',
        accessory2: 'Carnelian Pendant (+1 AP)',
        statPriorities: ['Evasion (S+)', 'Phys Atk (B)'],
        growthTypes: ['Speedster', 'Defender']
      },
      {
        unitId: 'feathersword',
        unitName: 'Umerus (Feathersword)',
        roleTitle: 'Secondary Evasion Striker',
        weapon: 'Divine Sword',
        shieldOrHelm: 'Angel\'s Reflection Shield',
        accessory1: 'Silverscale Shield',
        accessory2: 'Lapis Pendant (+1 PP)',
        statPriorities: ['Evasion (S+)', 'Phys Atk (B)'],
        growthTypes: ['Speedster', 'Keen']
      },
      {
        unitId: 'featherstaff',
        unitName: 'Sanatio (Featherstaff)',
        roleTitle: 'Barrier Leader',
        weapon: 'Sacred Feather Rod',
        shieldOrHelm: 'Angel Cap',
        accessory1: 'Holy Maiden Ring',
        accessory2: 'Lapis Pendant (+1 PP)',
        statPriorities: ['Mag Def (S+)', 'Initiative (S)'],
        growthTypes: ['Speedster', 'Defender']
      },
      {
        unitId: 'featherbow',
        unitName: 'Raenys (Featherbow)',
        roleTitle: 'Blindness Supporter',
        weapon: 'Divine Bow',
        shieldOrHelm: 'Feather Hood',
        accessory1: 'Photon Earring',
        accessory2: 'Lapis Pendant (+1 PP)',
        statPriorities: ['Initiative (S+)', 'Acc (S)'],
        growthTypes: ['Speedster', 'Speedster']
      },
      {
        unitId: 'radiant-knight',
        unitName: 'Miriam (Radiant Knight)',
        roleTitle: 'Magic Barrier Support',
        weapon: 'Rune Sword',
        shieldOrHelm: 'Radiant Shield',
        accessory1: 'White Knight Plume',
        accessory2: 'Lapis Pendant (+1 PP)',
        statPriorities: ['Mag Def (S)', 'Phys Def (B)'],
        growthTypes: ['Defender', 'Speedster']
      }
    ],
    tacticsSequence: [
      { step: 1, unit: 'Raenys', skill: 'Shining Arrow', condition1: '[Start of Battle]', condition2: '[Ranged Enemies]', notes: 'Blindness' }
    ]
  }
];

export const SQUADS_DATA: SquadBuild[] = [
  ...ZERO_OVERLAP_SQUADS,
  ...COMMUNITY_SQUADS
];
