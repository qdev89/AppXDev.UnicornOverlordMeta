import { SquadBuild } from '@/types';

export const ZERO_OVERLAP_SQUADS: SquadBuild[] = [
  {
    id: 'zero-1-trinity-rain',
    name: '1. Trinity Rain Instant Nuke',
    archetype: 'Magic Nuke',
    tier: 'SS',
    pvpRating: 'SS-Tier (Turn-1 Arena Board Wipe)',
    pveRating: 'Godly (Wipes 99% Zenoira / Expert Enemy Formations)',
    description: 'The premier Turn-1 Magic Nuke. Sorceress Auch channels Trinity Rain on Turn 1, instantly accelerated by Cleric Sharon using Cat-Ear Hood (Quick Impetus) and boosted by Witch Yahna using Familiar\'s Choker (+50% Mag Atk) while Selvie curses enemy defenses.',
    keyItems: ['Millennium Scepter', 'Cat-Ear Hood', 'Familiar\'s Choker', 'Sniper\'s Amber Lens'],
    frontRow: ['hoplite', 'paladin'],
    backRow: ['warlock', 'sorceress', 'bishop'],
    pros: ['Turn 1 instant battlefield wipe (2500+ magic dmg)', '100% Critical + True-Strike (bypasses Evasion)', 'Stuns & debuffs enemy front row on Turn 0'],
    cons: ['Requires high PP investments on Cleric (+4 PP)', 'Vulnerable to start-of-battle magic reflect if un-dispelled'],
    counters: ['Featherstaff Magic Reflect', 'Start-of-Battle Silence'],
    strategyGuide: {
      winCondition: 'Unleash a 3-hit battlefield-wide magic nuke of 2500+ damage on Turn 1 before enemies take a single action.',
      overview: 'Selvie opens with Sandstorm/Defensive Curse at start of battle to blind enemy strikers and strip magic defense. Sorceress Auch initiates Trinity Rain (4 AP). Cleric Sharon uses Cat-Ear Hood (Quick Impetus) for instant turn execution. Yahna grants +50% Mag Atk via Familiar\'s Choker, and Auch activates Eagle Eye for 100% Critical True-Strike damage.',
      combatSequenceNotes: [
        'Turn 0: Selvie casts Defensive Curse / Sandstorm -> Reduces enemy M.Def by 50% and inflicts Blindness.',
        'Turn 1: Auch initiates Trinity Rain (4 AP charge).',
        'Turn 1: Sharon triggers Quick Impetus (Cat-Ear Hood) -> Grants Auch +1 AP and immediate instant turn.',
        'Turn 1: Yahna activates Sorcerous Connection (Familiar\'s Choker) -> Grants Auch +50% Magic Attack.',
        'Turn 1: Auch activates Eagle Eye (Sniper Lens) -> Trinity Rain strikes all 5 enemies for 3-wave un-dodgeable critical magic damage!'
      ]
    },
    unitGearConfigs: [
      {
        unitId: 'warlock',
        unitName: 'Auch (Warlock / Sorcerer)',
        roleTitle: 'Primary Spell Nuke',
        weapon: 'Millennium Scepter (Grants Trinity Rain)',
        shieldOrHelm: 'Sorcerer\'s Crown (+5 Initiative)',
        accessory1: 'Sniper\'s Amber Lens (Eagle Eye: Guaranteed Crit + True Strike)',
        accessory2: 'Carnelian Pendant (+1 AP)',
        statPriorities: ['Mag Atk (S+)', 'Initiative (S)', 'Crit Rate (A)'],
        growthTypes: ['Offensive', 'Keen']
      },
      {
        unitId: 'bishop',
        unitName: 'Sharon (Bishop / Cleric)',
        roleTitle: 'Turn Acceleration Enabler',
        weapon: 'Hallow Staff',
        shieldOrHelm: 'Cat-Ear Hood (Grants Quick Impetus on Ally Charge Skill)',
        accessory1: 'Lapis Pendant (+1 PP)',
        accessory2: 'Lapis Pendant (+1 PP)',
        statPriorities: ['PP (+4 Required)', 'Initiative (A)'],
        growthTypes: ['Speedster', 'Guardian']
      },
      {
        unitId: 'sorceress',
        unitName: 'Yahna (Witch / Sorceress)',
        roleTitle: 'Magic Buffer & Focus',
        weapon: 'Mistral Staff',
        shieldOrHelm: 'Mage Hat',
        accessory1: 'Familiar\'s Choker (Grants Sorcerous Connection: +50% Mag Atk)',
        accessory2: 'Raven Plume (+15 Initiative)',
        statPriorities: ['Initiative (S+)', 'Mag Atk (A)'],
        growthTypes: ['Speedster', 'Speedster']
      },
      {
        unitId: 'hoplite',
        unitName: 'Hodrick (Legionnaire / Hoplite)',
        roleTitle: 'Physical Wall Tank',
        weapon: 'Heavy Iron Shield Lance',
        shieldOrHelm: 'Greatshield of Fortitude',
        accessory1: 'Heavy Guard Ring',
        accessory2: 'Lapis Pendant (+1 PP)',
        statPriorities: ['Phys Def (S+)', 'Guard Rate (100%)'],
        growthTypes: ['Guardian', 'Guardian']
      },
      {
        unitId: 'paladin',
        unitName: 'Josef (Paladin / High Knight)',
        roleTitle: 'Frontline Support & Guard',
        weapon: 'Holy Knight Sword',
        shieldOrHelm: 'Silver Shield',
        accessory1: 'Scarlet Plume (+10 Initiative)',
        accessory2: 'Carnelian Pendant (+1 AP)',
        statPriorities: ['Phys Def (A)', 'Healing (S)'],
        growthTypes: ['All-Rounder', 'Defender']
      }
    ],
    tacticsSequence: [
      { step: 1, unit: 'Selvie', skill: 'Defensive Curse', condition1: '[Start of Battle]', condition2: '[Full Health Enemies]', notes: 'Cuts enemy M.Def by 50%' },
      { step: 2, unit: 'Auch', skill: 'Trinity Rain', condition1: '[Target: All Enemies]', condition2: '[Self AP >= 4]', notes: 'Channels 3-hit battlefield spell' },
      { step: 3, unit: 'Sharon', skill: 'Quick Impetus', condition1: '[Ally Using Charge Skill]', condition2: '[Target: Auch]', notes: 'Cat-Ear Hood instant turn' },
      { step: 4, unit: 'Yahna', skill: 'Sorcerous Connection', condition1: '[Ally Using Active Skill]', condition2: '[Target: Auch]', notes: '+50% Magic Damage buff' },
      { step: 5, unit: 'Auch', skill: 'Eagle Eye', condition1: '[Before Executing Trinity Rain]', condition2: '[Self PP >= 1]', notes: '100% True-Strike Critical' }
    ],
    substitutes: { earlyGame: ['Wizard Auch', 'Cleric Primm', 'Hoplite Bryce'], endgameAlternatives: ['Selvie replacing Witch'] }
  },
  {
    id: 'zero-2-alain-royal-dreadnought',
    name: '2. Alain Royal Dreadnought',
    archetype: 'Cavalry Burst',
    tier: 'SS',
    pvpRating: 'SS-Tier (Dominant Frontline Lead)',
    pveRating: 'Godly (Clears All Main Story & Postgame Campaign)',
    description: 'Alain leads a heavy frontline blitz. Rosalinde locks down enemy vanguards at battle start with Rage of the Faeries, Chloe grants guaranteed critical hits via Keen Call, and Renault crushes armor line after line.',
    keyItems: ['Gran Barret Greatsword', 'Ring of the Maiden', 'Elven Crown', 'Sylphid Bow'],
    frontRow: ['alain-high-lord', 'landsknecht'],
    backRow: ['rosalinde-elven-prophet', 'valkyrie', 'great-knight'],
    pros: ['Extremely balanced physical and magic damage', 'Rosalinde Turn 0 frontline stun', 'Alain Spinning Edge row wiping power with Keen Call'],
    cons: ['Vulnerable to flying anti-cavalry spikes if un-guarded'],
    counters: ['Flying Wyvern/Gryphon Row Sweeps'],
    strategyGuide: {
      winCondition: 'Stun enemy frontline on Turn 0, then steamroll with Alain\'s Spin Edge and Renault\'s Line Charge backed by guaranteed crits.',
      overview: 'Rosalinde casts Rage of the Faeries at start of battle to freeze enemy vanguards. Alain uses Spinning Edge to wipe rows while absorbing physical hits with Ring of the Maiden. Chloe uses Keen Call to give Alain 100% crit chance. Renault cleans up remaining enemies with Cavalry boosted Line Charge.',
      combatSequenceNotes: [
        'Turn 0: Rosalinde triggers Rage of the Faeries -> Stuns entire enemy front row.',
        'Turn 1: Alain casts Spinning Edge boosted by Chloe\'s Keen Call -> 100% Crit row damage.',
        'Turn 1: Renault executes Line Charge against cavalry/infantry row.',
        'Turn 1: Berenice executes Following Slash on killed enemies to restore AP.'
      ]
    },
    unitGearConfigs: [
      {
        unitId: 'alain-high-lord',
        unitName: 'Alain (High Lord)',
        roleTitle: 'Royal Commander & Vanguard',
        weapon: 'Gran Barret Greatsword',
        shieldOrHelm: 'Greatshield of the Maiden',
        accessory1: 'Ring of the Maiden (Affliction Immunity + Defense)',
        accessory2: 'Carnelian Pendant (+1 AP)',
        statPriorities: ['Phys Def (S)', 'Phys Atk (S)', 'Initiative (A)'],
        growthTypes: ['All-Rounder', 'Offensive']
      },
      {
        unitId: 'rosalinde-elven-prophet',
        unitName: 'Rosalinde (Elven Prophet)',
        roleTitle: 'Start-of-Battle Stun & Elemental Nuke',
        weapon: 'Sylphid Bow',
        shieldOrHelm: 'Elven Crown',
        accessory1: 'Ruby Pendant (+1 AP)',
        accessory2: 'Raven Plume (+15 Initiative)',
        statPriorities: ['Initiative (S+)', 'Mag Atk (A)'],
        growthTypes: ['Speedster', 'Keen']
      },
      {
        unitId: 'valkyrie',
        unitName: 'Chloe (Sergeant / Valkyrie)',
        roleTitle: 'Crit Enabler & Frontline Support',
        weapon: 'Hero\'s Spear',
        shieldOrHelm: 'Sergeant\'s Shield',
        accessory1: 'Keen Earring (Grants Keen Call)',
        accessory2: 'Lapis Pendant (+1 PP)',
        statPriorities: ['Initiative (A)', 'Phys Atk (B)'],
        growthTypes: ['Offensive', 'Speedster']
      },
      {
        unitId: 'great-knight',
        unitName: 'Renault (Great Knight)',
        roleTitle: 'Cavalry Line Sweeper',
        weapon: 'Iron Knight Lance',
        shieldOrHelm: 'Cavalry Shield',
        accessory1: 'Carnelian Pendant (+1 AP)',
        accessory2: 'Warhorse Reins (+15% Cav Atk)',
        statPriorities: ['Phys Atk (S+)', 'Initiative (A)'],
        growthTypes: ['Offensive', 'Offensive']
      },
      {
        unitId: 'landsknecht',
        unitName: 'Berenice (Landsknecht)',
        roleTitle: 'Executioner & Pursuer',
        weapon: 'Broadsword of Execution',
        shieldOrHelm: 'Steel Helm',
        accessory1: 'Lapis Pendant (+1 PP)',
        accessory2: 'Gauntlets of Power',
        statPriorities: ['Phys Atk (S)', 'Crit Rate (A)'],
        growthTypes: ['Offensive', 'Keen']
      }
    ],
    tacticsSequence: [
      { step: 1, unit: 'Rosalinde', skill: 'Rage of the Faeries', condition1: '[Start of Battle]', condition2: '[Front Row Enemies]', notes: 'Stuns frontline tanks' },
      { step: 2, unit: 'Chloe', skill: 'Keen Call', condition1: '[Ally Active Skill]', condition2: '[Target: Alain]', notes: 'Grants guaranteed Critical' },
      { step: 3, unit: 'Alain', skill: 'Spinning Edge', condition1: '[Front Row Enemies >= 2]', condition2: '[Self AP >= 2]', notes: 'Row wiping strike' },
      { step: 4, unit: 'Renault', skill: 'Line Charge', condition1: '[Target Column]', condition2: '[Self AP >= 2]', notes: 'Piercing cavalry push' }
    ],
    substitutes: { earlyGame: ['Lex Vanguard', 'Chloe Sergeant'], endgameAlternatives: ['Eltolinde replacing Rosalinde'] }
  },
  {
    id: 'zero-3-dragoon-glacial-tempest',
    name: '3. Dragoon Glacial Tempest',
    archetype: 'Instant Board Wipe',
    tier: 'SS',
    pvpRating: 'SS-Tier (Top-Rank Arena Aerial Wipe)',
    pveRating: 'Godly (Wipes all Bastorias & Albion maps)',
    description: 'Hilda delivers a devastating Dragoon Dive aerial bomb. Eltolinde channels Faerie Blessing at battle start, while Celeste pulls flying/evade backliners and Miriam provides magic protection.',
    keyItems: ['Dragoon\'s Glave', 'Angel Plume', 'Glacial Staff', 'White Cat-Ear Cap'],
    frontRow: ['wyvern-master', 'radiant-knight'],
    backRow: ['elven-augur', 'cleric', 'gryphon-master'],
    pros: ['Turn-1 Dragoon Dive aerial nuke hits all 5 enemies', '+20 Squad Initiative via Tailwind Array', 'Bypasses ground melee guards'],
    cons: ['Vulnerable to anti-flying ranged marksmen if un-shielded'],
    counters: ['Sniper Aerial Snipe'],
    strategyGuide: {
      winCondition: 'Launch a Turn-1 Dragoon Dive aerial bombardment boosted by Tailwind Array (+20 Initiative & AP refund).',
      overview: 'Eltolinde starts battle with Faerie Blessing. Hilda uses Dragoon Dive (4 AP aerial charge). Primm uses White Cat-Ear Cap (Quick Impetus) to immediately fire the dive. Angel Plume grants +20 Initiative to the squad. Celeste pulls backline units with Aerial Sweeper.',
      combatSequenceNotes: [
        'Turn 0: Eltolinde triggers Faerie Blessing -> Grants elemental defense and passive healing.',
        'Turn 1: Hilda channels Dragoon Dive aerial charge.',
        'Turn 1: Primm uses Quick Impetus to instantly land Dragoon Dive on all 5 enemies.',
        'Turn 1: Celeste cleans up survivors with High Gale.'
      ]
    },
    unitGearConfigs: [
      {
        unitId: 'wyvern-master',
        unitName: 'Hilda (Wyvern Master)',
        roleTitle: 'Aerial Nuke Leader',
        weapon: 'Dragoon\'s Glave (Grants Dragoon Dive)',
        shieldOrHelm: 'Wyvern Helm (+10% Phys Atk)',
        accessory1: 'Sniper\'s Amber Lens (Eagle Eye True-Strike)',
        accessory2: 'Carnelian Pendant (+1 AP)',
        statPriorities: ['Phys Atk (S+)', 'Initiative (A)'],
        growthTypes: ['Offensive', 'Keen']
      },
      {
        unitId: 'elven-augur',
        unitName: 'Eltolinde (Elven Augur)',
        roleTitle: 'Start-of-Battle Healer & Faerie Buffer',
        weapon: 'Glacial Staff',
        shieldOrHelm: 'Elven Tiara',
        accessory1: 'Angel Plume (Grants Tailwind Array: +20 Squad Initiative)',
        accessory2: 'Lapis Pendant (+1 PP)',
        statPriorities: ['Initiative (S+)', 'Mag Atk (A)'],
        growthTypes: ['Speedster', 'Speedster']
      },
      {
        unitId: 'cleric',
        unitName: 'Primm (Bishop / Cleric)',
        roleTitle: 'Instant Charge Accelerator',
        weapon: 'Hallow Cane',
        shieldOrHelm: 'White Cat-Ear Cap (Quick Impetus)',
        accessory1: 'Lapis Pendant (+1 PP)',
        accessory2: 'Lapis Pendant (+1 PP)',
        statPriorities: ['PP (+4 Required)', 'Initiative (B)'],
        growthTypes: ['Guardian', 'Speedster']
      },
      {
        unitId: 'radiant-knight',
        unitName: 'Miriam (Radiant Knight)',
        roleTitle: 'Magic Defense Wall & Healer',
        weapon: 'Rune Sword',
        shieldOrHelm: 'Radiant Shield',
        accessory1: 'Lapis Pendant (+1 PP)',
        accessory2: 'White Knight Plume',
        statPriorities: ['Mag Def (S)', 'Phys Def (B)'],
        growthTypes: ['Defender', 'All-Rounder']
      },
      {
        unitId: 'gryphon-master',
        unitName: 'Celeste (Gryphon Master)',
        roleTitle: 'Backline Sky Sweeper',
        weapon: 'Windstorm Spear',
        shieldOrHelm: 'Gryphon Shield',
        accessory1: 'Carnelian Pendant (+1 AP)',
        accessory2: 'Feather Amulet',
        statPriorities: ['Initiative (S)', 'Phys Atk (A)'],
        growthTypes: ['Offensive', 'Speedster']
      }
    ],
    tacticsSequence: [
      { step: 1, unit: 'Eltolinde', skill: 'Tailwind Array', condition1: '[Start of Battle]', condition2: '[Full Squad]', notes: '+20 Squad Initiative' },
      { step: 2, unit: 'Hilda', skill: 'Dragoon Dive', condition1: '[Target: All Enemies]', condition2: '[Self AP >= 4]', notes: 'Aerial 4 AP Charge' },
      { step: 3, unit: 'Primm', skill: 'Quick Impetus', condition1: '[Ally Using Charge Skill]', condition2: '[Target: Hilda]', notes: 'Instant Dive execution' },
      { step: 4, unit: 'Hilda', skill: 'Eagle Eye', condition1: '[Before Executing Dragoon Dive]', condition2: '[Self PP >= 1]', notes: '100% True-Strike Crit' }
    ],
    substitutes: { earlyGame: ['Fran Gryphon', 'Sharon Cleric'], endgameAlternatives: ['Glacial Rain Sorceress'] }
  },
  {
    id: 'zero-4-berengaria-affliction-lockdown',
    name: '4. Berengaria Affliction & Stun Lockdown',
    archetype: 'Affliction Control',
    tier: 'SS',
    pvpRating: 'SS-Tier (Oppressive Stun Lockdown)',
    pveRating: 'Godly (Infinite Sustain & Armor Annihilation)',
    description: 'Berengaria exploits enemy afflictions. Travis opens with row-wide Blindness via Shadowbite, triggering Berengaria\'s Eye of the Crimson Bear and Sanguine Pursuit to perpetually freeze enemy turns.',
    keyItems: ['Carnelian Greataxe', 'Poisoner\'s Bow', 'Executioner\'s Eye', 'Phantom Ring'],
    frontRow: ['dark-marquess', 'rogue'],
    backRow: ['breaker', 'shieldshooter', 'feathersword'],
    pros: ['Perpetual pursuit strikes on afflicted targets', 'Eye of the Crimson Bear cuts enemy stats', 'Nina shreds heavy armor tanks'],
    cons: ['Requires hit accuracy against high evasion scouts'],
    counters: ['Affliction Immunity Rings'],
    strategyGuide: {
      winCondition: 'Apply row afflictions on Turn 1 to trigger Berengaria\'s passive pursuits and Eye of the Crimson Bear stat debuffs.',
      overview: 'Travis uses Shadowbite to blind entire enemy row. Berengaria activates Eye of the Crimson Bear (-20% Atk/Def to afflicted targets) and follows up every enemy movement with Sanguine Pursuit. Nina shreds heavy armors with Assault Blow, while Liza provides healing crossbow cover.',
      combatSequenceNotes: [
        'Turn 0: Berengaria triggers Eye of the Crimson Bear -> Instantly debuffs enemy Atk/Def.',
        'Turn 1: Travis casts Shadowbite -> Blinds & afflicts enemy row.',
        'Turn 1: Berengaria triggers Sanguine Pursuit -> Recovers AP/PP upon hitting afflicted targets.',
        'Turn 1: Nina executes Enraged Strike on stunned armor targets.'
      ]
    },
    unitGearConfigs: [
      {
        unitId: 'dark-marquess',
        unitName: 'Berengaria (Dark Marquess - Axe)',
        roleTitle: 'Affliction Dominator & Off-Tank',
        weapon: 'Carnelian Greataxe',
        shieldOrHelm: 'Nightmare Shield',
        accessory1: 'Executioner\'s Eye (Grants Pursuit Crit)',
        accessory2: 'Carnelian Pendant (+1 AP)',
        statPriorities: ['Phys Atk (S+)', 'Phys Def (A)', 'Initiative (S)'],
        growthTypes: ['Offensive', 'Keen']
      },
      {
        unitId: 'rogue',
        unitName: 'Travis (Rogue / Thief)',
        roleTitle: 'Row Affliction Enabler',
        weapon: 'Poisoner\'s Dagger',
        shieldOrHelm: 'Shadow Hood',
        accessory1: 'Phantom Ring (Grants Shadowbite)',
        accessory2: 'Raven Plume (+15 Initiative)',
        statPriorities: ['Initiative (S+)', 'Evasion (S+)'],
        growthTypes: ['Speedster', 'Speedster']
      },
      {
        unitId: 'breaker',
        unitName: 'Nina (Breaker / Warrior)',
        roleTitle: 'Armor Crusher',
        weapon: 'Warhammer of Destruction',
        shieldOrHelm: 'Iron Cuirass',
        accessory1: 'Lapis Pendant (+1 PP)',
        accessory2: 'Heavy Gauntlets',
        statPriorities: ['Phys Atk (S+)', 'Crit Rate (B)'],
        growthTypes: ['Offensive', 'Offensive']
      },
      {
        unitId: 'shieldshooter',
        unitName: 'Liza (Shieldshooter)',
        roleTitle: 'Ranged Cover & Medical Support',
        weapon: 'Arbalest of Healing',
        shieldOrHelm: 'Greatshield of Aegis',
        accessory1: 'First Aid Kit',
        accessory2: 'Lapis Pendant (+1 PP)',
        statPriorities: ['Phys Def (A)', 'Phys Atk (B)'],
        growthTypes: ['Guardian', 'Defender']
      },
      {
        unitId: 'feathersword',
        unitName: 'Ochlys (Feathersword)',
        roleTitle: 'Evasive Vanguard',
        weapon: 'Celestial Sword',
        shieldOrHelm: 'Angel Shield',
        accessory1: 'Silverscale Shield',
        accessory2: 'Feather Amulet',
        statPriorities: ['Evasion (S+)', 'Phys Atk (B)'],
        growthTypes: ['Speedster', 'Defender']
      }
    ],
    tacticsSequence: [
      { step: 1, unit: 'Berengaria', skill: 'Eye of the Crimson Bear', condition1: '[Start of Battle]', condition2: '[All Enemies]', notes: '-20% Atk/Def debuff' },
      { step: 2, unit: 'Travis', skill: 'Shadowbite', condition1: '[Front Row Enemies]', condition2: '[Self AP >= 2]', notes: 'Row Blindness affliction' },
      { step: 3, unit: 'Berengaria', skill: 'Sanguine Pursuit', condition1: '[Enemy Afflicted]', condition2: '[Self PP >= 1]', notes: 'AP restoring follow-up' },
      { step: 4, unit: 'Nina', skill: 'Enraged Strike', condition1: '[Armored Enemy]', condition2: '[Self AP >= 1]', notes: '100% Armor bypass' }
    ],
    substitutes: { earlyGame: ['Travis Thief', 'Nina Warrior'], endgameAlternatives: ['Bruno Berserker replacing Breaker'] }
  },
  {
    id: 'zero-5-virginia-maiden-counter-tempest',
    name: '5. Virginia Maiden Counter Tempest',
    archetype: 'Heavy Sustain',
    tier: 'S+',
    pvpRating: 'S+-Tier (Unbreakable Counter Fortress)',
    pveRating: 'Godly (Invincible against melee physical squads)',
    description: 'Virginia anchors a counter-attack fortress. Gilbert buff Initiative and Attack on Turn 0 with Offensive Order, allowing Virginia, Melisandre, and Leah to punish every enemy swing with lethal parries.',
    keyItems: ['Maiden\'s Sword', 'Rose Shield', 'Counter Earring', 'Defensive Ring'],
    frontRow: ['valkyria', 'swordmaster'],
    backRow: ['prince', 'swordmaster', 'sniper'],
    pros: ['Invincible physical counter-attack mechanics', 'Gilbert Turn 0 squad initiative buff', 'Melisandre & Leah True-Strike duelists'],
    cons: ['Lower direct magic defense'],
    counters: ['Heavy Row Magic Nukes'],
    strategyGuide: {
      winCondition: 'Absorb and parry physical attacks, retaliating with Maiden\'s Hammer and True-Strike Meteor Slash.',
      overview: 'Gilbert starts battle with Offensive Order (+20% Phys Atk & Initiative to squad). Virginia guards frontline physical strikes with Rose Shield and counters with Maiden\'s Hammer. Melisandre and Leah execute Parrying Slash and Meteor Slash to obliterate evade tanks.',
      combatSequenceNotes: [
        'Turn 0: Gilbert triggers Offensive Order -> Squad gains +20% Phys Atk and Initiative.',
        'Turn 1: Virginia counters physical strikes with Vertical Edge / Maiden\'s Hammer.',
        'Turn 1: Melisandre uses Parrying Slash to negate incoming attack and strike back.',
        'Turn 1: Rolf snipes enemy fliers with Aerial Snipe.'
      ]
    },
    unitGearConfigs: [
      {
        unitId: 'valkyria',
        unitName: 'Virginia (Valkyria)',
        roleTitle: 'Counter Tank Leader',
        weapon: 'Maiden\'s Sword',
        shieldOrHelm: 'Rose Shield',
        accessory1: 'Counter Earring (Grants Retaliation)',
        accessory2: 'Carnelian Pendant (+1 AP)',
        statPriorities: ['Phys Def (S+)', 'Phys Atk (A)', 'Guard Rate (S)'],
        growthTypes: ['Offensive', 'Guardian']
      },
      {
        unitId: 'swordmaster',
        unitName: 'Melisandre (Swordmaster)',
        roleTitle: 'True-Strike Parry Duelist',
        weapon: 'Keen Broadsword',
        shieldOrHelm: 'Duelist Guard',
        accessory1: 'Parrying Ring',
        accessory2: 'Lapis Pendant (+1 PP)',
        statPriorities: ['Crit Rate (S+)', 'Initiative (S)'],
        growthTypes: ['Keen', 'Keen']
      },
      {
        unitId: 'prince',
        unitName: 'Gilbert (Prince)',
        roleTitle: 'Squad Commander & Order Buffer',
        weapon: 'Royal Guard Rapier',
        shieldOrHelm: 'Crown Shield',
        accessory1: 'Commander\'s Crest',
        accessory2: 'Lapis Pendant (+1 PP)',
        statPriorities: ['Initiative (S+)', 'Phys Def (B)'],
        growthTypes: ['Speedster', 'All-Rounder']
      },
      {
        unitId: 'swordmaster',
        unitName: 'Leah (Swordmaster)',
        roleTitle: 'Secondary Parry Striker',
        weapon: 'Steel Blade',
        shieldOrHelm: 'Leather Guards',
        accessory1: 'Critical Ring',
        accessory2: 'Carnelian Pendant (+1 AP)',
        statPriorities: ['Crit Rate (S)', 'Initiative (A)'],
        growthTypes: ['Keen', 'Offensive']
      },
      {
        unitId: 'sniper',
        unitName: 'Rolf (Sniper / Marksman)',
        roleTitle: 'Anti-Air Ranged Sweeper',
        weapon: 'Eagle Eye Bow',
        shieldOrHelm: 'Sniper Hood',
        accessory1: 'Archer\'s Eyepatch',
        accessory2: 'Lapis Pendant (+1 PP)',
        statPriorities: ['Phys Atk (A)', 'Acc (S+)'],
        growthTypes: ['Offensive', 'Keen']
      }
    ],
    tacticsSequence: [
      { step: 1, unit: 'Gilbert', skill: 'Offensive Order', condition1: '[Start of Battle]', condition2: '[Full Squad]', notes: '+20% Phys Atk & Initiative' },
      { step: 2, unit: 'Virginia', skill: 'Maiden\'s Hammer', condition1: '[Enemy Guarding]', condition2: '[Self AP >= 2]', notes: 'Guard breaking strike' },
      { step: 3, unit: 'Melisandre', skill: 'Parrying Slash', condition1: '[Attacked by Physical]', condition2: '[Self PP >= 1]', notes: 'Negates damage & counters' },
      { step: 4, unit: 'Rolf', skill: 'Aerial Snipe', condition1: '[Flying Enemy]', condition2: '[Self AP >= 1]', notes: '200% flying multiplier' }
    ],
    substitutes: { earlyGame: ['Aramis Swordmaster', 'Rolf Hunter'], endgameAlternatives: ['Miriam replacing Prince'] }
  },
  {
    id: 'zero-6-yunifi-glacial-freeze-death',
    name: '6. Yunifi Glacial Rain Freeze Death',
    archetype: 'Affliction Control',
    tier: 'SS',
    pvpRating: 'SS-Tier (Row Freeze Lockdown)',
    pveRating: 'Godly (Freezes entire enemy armies)',
    description: 'Yunifi freezes the entire enemy force on Turn 1 with Glacial Rain. Ramona (Wereowl) refills squad PP with Owl Eyes, while Ridiel cleanses incoming debuffs and Bryce holds an unbreachable wall.',
    keyItems: ['Glacial Bow', 'Ice Crystal Ring', 'Owl Pin', 'Sacred Archstaff'],
    frontRow: ['hoplite', 'vanguard'],
    backRow: ['snow-ranger', 'wereowl', 'elven-archer'],
    pros: ['Row-wide Freeze disables entire enemy turn', 'Ramona infinite PP battery', 'Ridiel row cleanse'],
    cons: ['Requires protection against fast Turn-1 stun snipers'],
    counters: ['Stun / Blindness at Start of Battle'],
    strategyGuide: {
      winCondition: 'Channel Glacial Rain to freeze all 5 enemy units, then pick them off with Triple Counter and Cleansing Arrows.',
      overview: 'Yunifi channels Glacial Rain at start of combat. Ramona uses Quick Reload / Owl Eyes to maintain PP reserves. Ridiel uses Pure Light to clear enemy afflictions and heal. Bryce blocks enemy physical attacks.',
      combatSequenceNotes: [
        'Turn 0: Yunifi triggers Snow White Guard -> Grants defense against ranged arrows.',
        'Turn 1: Yunifi channels Glacial Rain (3 AP arrow volley).',
        'Turn 1: Glacial Rain impacts enemy row -> Inflicts Freeze status on all hit targets.',
        'Turn 1: Ramona restores PP to Yunifi for Triple Counter.'
      ]
    },
    unitGearConfigs: [
      {
        unitId: 'snow-ranger',
        unitName: 'Yunifi (Snow Ranger)',
        roleTitle: 'Freeze Nuke Archer',
        weapon: 'Glacial Bow (Grants Glacial Rain)',
        shieldOrHelm: 'Snow Wolf Hood',
        accessory1: 'Ice Crystal Ring (Freeze damage buff)',
        accessory2: 'Carnelian Pendant (+1 AP)',
        statPriorities: ['Phys Atk (S+)', 'Initiative (S)', 'Crit Rate (A)'],
        growthTypes: ['Offensive', 'Keen']
      },
      {
        unitId: 'wereowl',
        unitName: 'Ramona (Wereowl)',
        roleTitle: 'Bestral PP Battery & Supporter',
        weapon: 'Owl Staff',
        shieldOrHelm: 'Feathered Cap',
        accessory1: 'Owl Pin (Owl Eyes PP restoration)',
        accessory2: 'Lapis Pendant (+1 PP)',
        statPriorities: ['Initiative (S)', 'Mag Atk (B)'],
        growthTypes: ['Speedster', 'Defender']
      },
      {
        unitId: 'elven-archer',
        unitName: 'Ridiel (Elven Archer)',
        roleTitle: 'Cleanse & Hybrid Archery',
        weapon: 'Sacred Archstaff',
        shieldOrHelm: 'Elven Crown',
        accessory1: 'Pure Light Amulet',
        accessory2: 'Lapis Pendant (+1 PP)',
        statPriorities: ['Mag Atk (A)', 'Phys Atk (B)'],
        growthTypes: ['All-Rounder', 'Speedster']
      },
      {
        unitId: 'hoplite',
        unitName: 'Bryce (Hoplite / Legionnaire)',
        roleTitle: 'Heavy Frontline Shield',
        weapon: 'Bastorias Steel Lance',
        shieldOrHelm: 'Heavy Tower Shield',
        accessory1: 'Guardian Ring',
        accessory2: 'Lapis Pendant (+1 PP)',
        statPriorities: ['Phys Def (S+)', 'Guard Rate (100%)'],
        growthTypes: ['Guardian', 'Guardian']
      },
      {
        unitId: 'vanguard',
        unitName: 'Colm (Vanguard)',
        roleTitle: 'Arrow Cover Vanguard',
        weapon: 'Vanguard Saber',
        shieldOrHelm: 'Deflect Shield',
        accessory1: 'Heavy Guard Ring',
        accessory2: 'Carnelian Pendant (+1 AP)',
        statPriorities: ['Phys Def (A)', 'Guard Rate (A)'],
        growthTypes: ['Defender', 'Guardian']
      }
    ],
    tacticsSequence: [
      { step: 1, unit: 'Yunifi', skill: 'Glacial Rain', condition1: '[Target: All Enemies]', condition2: '[Self AP >= 3]', notes: 'Row Freeze Arrow Rain' },
      { step: 2, unit: 'Ramona', skill: 'Owl Eyes', condition1: '[Ally Used Active Skill]', condition2: '[Target: Yunifi]', notes: 'Restores 1 PP to ally' },
      { step: 3, unit: 'Ridiel', skill: 'Pure Light', condition1: '[Ally Afflicted]', condition2: '[Self PP >= 1]', notes: 'Cleanses debuffs row-wide' },
      { step: 4, unit: 'Yunifi', skill: 'Triple Counter', condition1: '[Attacked by Enemy]', condition2: '[Self PP >= 1]', notes: '3-hit counter attack' }
    ],
    substitutes: { earlyGame: ['Liza Shieldshooter', 'Chloe Sergeant'], endgameAlternatives: ['Morax replacing Vanguard'] }
  },
  {
    id: 'zero-7-amalia-gigantic-grand-crusher',
    name: '7. Amalia Gigantic Grand Crusher',
    archetype: 'Heavy Armor Crusher',
    tier: 'S+',
    pvpRating: 'S+-Tier (Guard Bypassing Breaker)',
    pveRating: 'Godly (Obliterates boss encounters)',
    description: 'Amalia channels massive armor-ignoring slash damage with Grand Crusher Greatsword. Bertrand taunts physical threats, Aramis shreds squishies, and Monica provides magical shielding.',
    keyItems: ['Grand Crusher Greatsword', 'Berserker Band', 'Heavy Guard Shield', 'Radiant Sword'],
    frontRow: ['dreadnought', 'werebear'],
    backRow: ['radiant-knight', 'swordmaster', 'elven-archer'],
    pros: ['Amalia armor-ignoring column slashes', 'Bertrand bestral frontline taunt wall', 'Aramis dual swordmaster executioner'],
    cons: ['Slower base squad movement speed on map'],
    counters: ['Heavy Ranged Flying Gunners'],
    strategyGuide: {
      winCondition: 'Crush high-defense enemy vanguards with Amalia\'s Penetrate and Wild Slash.',
      overview: 'Bertrand draws enemy fire with Ground Slam / Taunt. Amalia uses Penetrate to hit column targets and Wild Slash to shatter shields. Aramis cuts down scouts, while Monica heals and maintains Magic Barrier.',
      combatSequenceNotes: [
        'Turn 0: Bertrand triggers Indomitable Guard -> Gains massive physical damage reduction.',
        'Turn 1: Amalia casts Penetrate -> Strikes two column targets ignoring 50% Defense.',
        'Turn 1: Aramis uses Shadow Step to dodge physical counters.',
        'Turn 1: Lhona fires Icicle Arrow to freeze backline casters.'
      ]
    },
    unitGearConfigs: [
      {
        unitId: 'dreadnought',
        unitName: 'Amalia (Dreadnought)',
        roleTitle: 'Colossal Physical Striker',
        weapon: 'Grand Crusher Greatsword',
        shieldOrHelm: 'Heavy Guard Shield',
        accessory1: 'Berserker Band (+20% Phys Atk)',
        accessory2: 'Carnelian Pendant (+1 AP)',
        statPriorities: ['Phys Atk (S+)', 'Crit Rate (A)'],
        growthTypes: ['Offensive', 'Offensive']
      },
      {
        unitId: 'werebear',
        unitName: 'Bertrand (Werebear)',
        roleTitle: 'Bestral Frontline Taunt Wall',
        weapon: 'Bear Claw Mace',
        shieldOrHelm: 'Greatshield of Fortitude',
        accessory1: 'Heavy Guard Ring',
        accessory2: 'Lapis Pendant (+1 PP)',
        statPriorities: ['Max HP (S+)', 'Phys Def (S)'],
        growthTypes: ['Guardian', 'Defender']
      },
      {
        unitId: 'radiant-knight',
        unitName: 'Monica (Radiant Knight)',
        roleTitle: 'Support Knight & Healing',
        weapon: 'Radiant Sword',
        shieldOrHelm: 'Radiant Shield',
        accessory1: 'Lapis Pendant (+1 PP)',
        accessory2: 'Scarlet Plume (+10 Initiative)',
        statPriorities: ['Mag Def (S)', 'Initiative (A)'],
        growthTypes: ['Defender', 'Speedster']
      },
      {
        unitId: 'swordmaster',
        unitName: 'Aramis (Swordmaster)',
        roleTitle: 'Scout Executioner',
        weapon: 'Duelling Saber',
        shieldOrHelm: 'Duelist Guard',
        accessory1: 'Critical Ring',
        accessory2: 'Carnelian Pendant (+1 AP)',
        statPriorities: ['Crit Rate (S+)', 'Initiative (A)'],
        growthTypes: ['Keen', 'Keen']
      },
      {
        unitId: 'elven-archer',
        unitName: 'Lhona (Elven Archer)',
        roleTitle: 'Hybrid Backline Support',
        weapon: 'Hunter\'s Bow',
        shieldOrHelm: 'Elven Hood',
        accessory1: 'Pure Light Amulet',
        accessory2: 'Lapis Pendant (+1 PP)',
        statPriorities: ['Mag Atk (B)', 'Initiative (A)'],
        growthTypes: ['All-Rounder', 'Speedster']
      }
    ],
    tacticsSequence: [
      { step: 1, unit: 'Bertrand', skill: 'Indomitable Guard', condition1: '[Start of Battle]', condition2: '[Self HP == 100%]', notes: 'Massive HP/Def boost' },
      { step: 2, unit: 'Amalia', skill: 'Penetrate', condition1: '[Target Column]', condition2: '[Self AP >= 2]', notes: 'Ignores 50% defense' },
      { step: 3, unit: 'Monica', skill: 'Row Heal', condition1: '[Ally HP <= 50%]', condition2: '[Self PP >= 1]', notes: 'Sustain frontline' },
      { step: 4, unit: 'Aramis', skill: 'Blade Dance', condition1: '[Low HP Enemy]', condition2: '[Self AP >= 2]', notes: 'Executes targets' }
    ],
    substitutes: { earlyGame: ['Mordon Warrior', 'Josef Paladin'], endgameAlternatives: ['Morax replacing Werebear'] }
  },
  {
    id: 'zero-8-triple-knight-cavalry-avalanche',
    name: '8. Triple Knight Cavalry Avalanche',
    archetype: 'Cavalry Burst',
    tier: 'SS',
    pvpRating: 'SS-Tier (Cavalry Steamroller)',
    pveRating: 'Godly (Wipes any infantry formation in 1 second)',
    description: 'Clive and Adel stack Cavalry passive buffs (+50% Phys Atk against infantry). Fran sweeps airborne targets, while Mordon shatters enemy heavy shields.',
    keyItems: ['Knight\'s Lance', 'Silver Shield', 'Vanguard Banner', 'Iron Greataxe'],
    frontRow: ['great-knight', 'great-knight'],
    backRow: ['paladin', 'gryphon-master', 'warrior'],
    pros: ['300% bonus damage vs infantry rows', 'High overworld mobility (300 speed)', 'Clive & Adel twin Line Charge trample'],
    cons: ['Needs Gryphon flier support against enemy Wyverns'],
    counters: ['Heavy Flying Evasion Squads'],
    strategyGuide: {
      winCondition: 'Stack Cavalry Synergy passives and push Line Charge across all rows for 300% infantry damage.',
      overview: 'Clive and Adel form a twin Great Knight front row. Their passive skills stack Cavalry attack bonuses up to +50%. Fran eliminates enemy scout/flying counters with High Gale, while Mordon breaks armor shields.',
      combatSequenceNotes: [
        'Turn 0: Clive triggers Vanguard Banner -> Grants cavalry movement speed and squad attack.',
        'Turn 1: Clive casts Line Charge on primary infantry row.',
        'Turn 1: Adel casts Line Charge on secondary column.',
        'Turn 1: Fran executes High Gale on backline casters.'
      ]
    },
    unitGearConfigs: [
      {
        unitId: 'great-knight',
        unitName: 'Clive (Great Knight)',
        roleTitle: 'Cavalry Vanguard Lead',
        weapon: 'Knight\'s Lance',
        shieldOrHelm: 'Silver Shield',
        accessory1: 'Vanguard Banner (Cavalry Squad Buff)',
        accessory2: 'Carnelian Pendant (+1 AP)',
        statPriorities: ['Phys Atk (S+)', 'Initiative (A)'],
        growthTypes: ['Offensive', 'Offensive']
      },
      {
        unitId: 'great-knight',
        unitName: 'Adel (Great Knight)',
        roleTitle: 'Twin Cavalry Striker',
        weapon: 'Heavy Iron Lance',
        shieldOrHelm: 'Knight Shield',
        accessory1: 'Warhorse Reins',
        accessory2: 'Carnelian Pendant (+1 AP)',
        statPriorities: ['Phys Atk (S+)', 'Initiative (A)'],
        growthTypes: ['Offensive', 'Keen']
      },
      {
        unitId: 'paladin',
        unitName: 'Josef (Paladin / High Knight)',
        roleTitle: 'Cavalry Support & Healer',
        weapon: 'Holy Blade',
        shieldOrHelm: 'Paladin Shield',
        accessory1: 'Lapis Pendant (+1 PP)',
        accessory2: 'First Aid Kit',
        statPriorities: ['Healing (A)', 'Phys Def (B)'],
        growthTypes: ['All-Rounder', 'Defender']
      },
      {
        unitId: 'gryphon-master',
        unitName: 'Fran (Gryphon Master)',
        roleTitle: 'Anti-Ground Sky Flanker',
        weapon: 'Wind Lance',
        shieldOrHelm: 'Gryphon Crest',
        accessory1: 'Gryphon Brooch',
        accessory2: 'Carnelian Pendant (+1 AP)',
        statPriorities: ['Phys Atk (A)', 'Initiative (S)'],
        growthTypes: ['Offensive', 'Speedster']
      },
      {
        unitId: 'warrior',
        unitName: 'Mordon (Warrior / Breaker)',
        roleTitle: 'Guard Breaker',
        weapon: 'Iron Greataxe',
        shieldOrHelm: 'Warrior Helm',
        accessory1: 'Heavy Gauntlets',
        accessory2: 'Lapis Pendant (+1 PP)',
        statPriorities: ['Phys Atk (S+)', 'Crit Rate (B)'],
        growthTypes: ['Offensive', 'Offensive']
      }
    ],
    tacticsSequence: [
      { step: 1, unit: 'Clive', skill: 'Line Charge', condition1: '[Infantry Row]', condition2: '[Self AP >= 2]', notes: '200% damage vs infantry' },
      { step: 2, unit: 'Adel', skill: 'Wild Rush', condition1: '[Column Enemies]', condition2: '[Self AP >= 2]', notes: 'Stun & cavalry push' },
      { step: 3, unit: 'Fran', skill: 'High Gale', condition1: '[Back Row Enemies]', condition2: '[Self AP >= 2]', notes: 'Row sweep' },
      { step: 4, unit: 'Mordon', skill: 'Assault Blow', condition1: '[Armored Target]', condition2: '[Self AP >= 1]', notes: 'Shield shattering hit' }
    ],
    substitutes: { earlyGame: ['Clive Knight', 'Adel Knight'], endgameAlternatives: ['Renault replacing Paladin'] }
  },
  {
    id: 'zero-9-dinah-bestral-night-blitz',
    name: '9. Dinah Bestral Night Blitz',
    archetype: 'Affliction Control',
    tier: 'S+',
    pvpRating: 'S+-Tier (Night Ambush Lethality)',
    pveRating: 'Godly (Night Map Specialist & High Evasion)',
    description: 'Dinah and Govil unleash Bestral Night ferocity. Night Vision Ring grants +20% stats during night battles, Govil pierces row defenses, and Raenys blinds frontliners.',
    keyItems: ['Wolfpack Gauntlets', 'Beast Ring', 'Shadow Dagger', 'Night Vision Ring'],
    frontRow: ['werewolf', 'werefox'],
    backRow: ['vanguard', 'featherbow', 'landsknecht'],
    pros: ['Night battle stat multiplication (+35% stats)', 'Govil row armor piercing', 'Raenys Turn 0 Blindness'],
    cons: ['Slightly lower stats during daytime encounters'],
    counters: ['True-Strike Bow Strikers'],
    strategyGuide: {
      winCondition: 'Exploit Bestral Night stat bonuses and execution pursuits to rapidly pick off enemy vanguards.',
      overview: 'Dinah and Govil gain massive stat boosts during night battles. Govil uses Shadow Pierce to bypass frontline armor and apply defense down. Dinah uses Chasing Slash to finish off low HP targets, while Raenys blinds the enemy squad at battle start.',
      combatSequenceNotes: [
        'Turn 0: Raenys triggers Shining Arrow -> Inflicts Blindness on enemy front row.',
        'Turn 1: Govil casts Shadow Pierce -> Strikes backline through frontline.',
        'Turn 1: Dinah executes Night Hunt / Chasing Slash on critical targets.',
        'Turn 1: Morax taunts physical attackers.'
      ]
    },
    unitGearConfigs: [
      {
        unitId: 'werewolf',
        unitName: 'Dinah (Werewolf)',
        roleTitle: 'Bestral Assassin Leader',
        weapon: 'Wolfpack Gauntlets',
        shieldOrHelm: 'Wolf Cap',
        accessory1: 'Beast Ring (+15% Bestral Stats)',
        accessory2: 'Carnelian Pendant (+1 AP)',
        statPriorities: ['Crit Rate (S+)', 'Phys Atk (S)', 'Initiative (A)'],
        growthTypes: ['Keen', 'Offensive']
      },
      {
        unitId: 'werefox',
        unitName: 'Govil (Werefox)',
        roleTitle: 'Evasive Armor Piercer',
        weapon: 'Shadow Dagger',
        shieldOrHelm: 'Fox Cloak',
        accessory1: 'Night Vision Ring',
        accessory2: 'Lapis Pendant (+1 PP)',
        statPriorities: ['Initiative (S+)', 'Evasion (S+)'],
        growthTypes: ['Speedster', 'Keen']
      },
      {
        unitId: 'featherbow',
        unitName: 'Raenys (Featherbow)',
        roleTitle: 'Start-of-Battle Blindness Buffer',
        weapon: 'Divine Bow',
        shieldOrHelm: 'Feather Hood',
        accessory1: 'Photon Earring',
        accessory2: 'Lapis Pendant (+1 PP)',
        statPriorities: ['Initiative (S+)', 'Acc (S)'],
        growthTypes: ['Speedster', 'Speedster']
      },
      {
        unitId: 'vanguard',
        unitName: 'Morax (Vanguard / Legionnaire)',
        roleTitle: 'Frontline Shield',
        weapon: 'Bastorias Sword',
        shieldOrHelm: 'Heavy Tower Shield',
        accessory1: 'Heavy Guard Ring',
        accessory2: 'Lapis Pendant (+1 PP)',
        statPriorities: ['Phys Def (S)', 'Guard Rate (A)'],
        growthTypes: ['Guardian', 'Defender']
      },
      {
        unitId: 'landsknecht',
        unitName: 'Jeremy (Landsknecht)',
        roleTitle: 'Follow-up Striker',
        weapon: 'Iron Broadsword',
        shieldOrHelm: 'Steel Helm',
        accessory1: 'Carnelian Pendant (+1 AP)',
        accessory2: 'Power Gauntlets',
        statPriorities: ['Phys Atk (S)', 'Crit Rate (B)'],
        growthTypes: ['Offensive', 'Keen']
      }
    ],
    tacticsSequence: [
      { step: 1, unit: 'Raenys', skill: 'Shining Arrow', condition1: '[Start of Battle]', condition2: '[Front Row Enemies]', notes: 'Blindness application' },
      { step: 2, unit: 'Govil', skill: 'Shadow Pierce', condition1: '[Column Enemies]', condition2: '[Self AP >= 2]', notes: 'Pass-through armor break' },
      { step: 3, unit: 'Dinah', skill: 'Chasing Slash', condition1: '[Enemy HP <= 50%]', condition2: '[Self PP >= 1]', notes: 'Executes targets' },
      { step: 4, unit: 'Jeremy', skill: 'Following Slash', condition1: '[Ally Hit Target]', condition2: '[Self PP >= 1]', notes: 'Follow up strike' }
    ],
    substitutes: { earlyGame: ['Travis Thief', 'Berenice Landsknecht'], endgameAlternatives: ['Bertrand Werebear replacing Vanguard'] }
  },
  {
    id: 'zero-10-sanatio-divine-sacred-zenith',
    name: '10. Sanatio Divine Sacred Zenith',
    archetype: 'Heavy Sustain',
    tier: 'S+',
    pvpRating: 'S+-Tier (Unkillable Reflection Barrier)',
    pveRating: 'Godly (Invincible against Magic & Affliction comps)',
    description: 'Sanatio protects the squad with Sacred Barrier on Turn 0, granting hit immunity. Umerus counters aerial/melee attacks with evasive thrusts, while Scarlett and Tatiana maintain 100% squad health.',
    keyItems: ['Sacred Feather Rod', 'Angel\'s Reflection Shield', 'Holy Maiden Ring', 'Dark Flame Spear'],
    frontRow: ['feathersword', 'high-priestess'],
    backRow: ['featherstaff', 'bishop', 'doom-knight'],
    pros: ['Turn 0 hit nullification via Sacred Barrier', 'Angel Reflection Shield reflects magic back', 'Dual Scarlett & Tatiana row healing'],
    cons: ['Requires AP/PP management for Doom Knight offense'],
    counters: ['Heavy Armor Guard Breakers'],
    strategyGuide: {
      winCondition: 'Negate enemy nukes with Sacred Barrier and reflect magic attacks back at the caster.',
      overview: 'Sanatio casts Sacred Barrier at start of battle to grant hit immunity. Umerus uses Evasive Thrust to dodge attacks and counter. Scarlett provides Holy Light healing and affliction immunity. Dark Knight delivers revenge magic damage.',
      combatSequenceNotes: [
        'Turn 0: Sanatio triggers Sacred Barrier -> Grants 2 hits of nullification to all squad members.',
        'Turn 1: Umerus uses Spiral Sword to slice enemy front row.',
        'Turn 1: Scarlett uses Innocent Light to clear enemy buffs.',
        'Turn 1: Dark Knight uses Dark Flame to deal devastating magic/physical damage.'
      ]
    },
    unitGearConfigs: [
      {
        unitId: 'featherstaff',
        unitName: 'Sanatio (Featherstaff)',
        roleTitle: 'Divine Barrier Leader',
        weapon: 'Sacred Feather Rod',
        shieldOrHelm: 'Angel Cap',
        accessory1: 'Holy Maiden Ring (Sacred Barrier)',
        accessory2: 'Lapis Pendant (+1 PP)',
        statPriorities: ['Mag Def (S+)', 'Initiative (S)'],
        growthTypes: ['Speedster', 'Defender']
      },
      {
        unitId: 'feathersword',
        unitName: 'Umerus (Feathersword)',
        roleTitle: 'Evasive Counter Duelist',
        weapon: 'Divine Sword',
        shieldOrHelm: 'Angel\'s Reflection Shield',
        accessory1: 'Feather Amulet',
        accessory2: 'Carnelian Pendant (+1 AP)',
        statPriorities: ['Evasion (S+)', 'Phys Atk (A)'],
        growthTypes: ['Speedster', 'Keen']
      },
      {
        unitId: 'high-priestess',
        unitName: 'Scarlett (High Priestess)',
        roleTitle: 'Sacred Healer & Dispeller',
        weapon: 'Sacred Staff',
        shieldOrHelm: 'Priestess Ribbon',
        accessory1: 'Ring of the Maiden',
        accessory2: 'Lapis Pendant (+1 PP)',
        statPriorities: ['Healing (S+)', 'Mag Def (S)'],
        growthTypes: ['All-Rounder', 'Defender']
      },
      {
        unitId: 'bishop',
        unitName: 'Tatiana (Bishop / Cleric)',
        roleTitle: 'Row Refresh & Barrier Support',
        weapon: 'Hallow Rod',
        shieldOrHelm: 'Cleric Hat',
        accessory1: 'First Aid Kit',
        accessory2: 'Lapis Pendant (+1 PP)',
        statPriorities: ['PP (+4 Required)', 'Healing (S)'],
        growthTypes: ['Guardian', 'Defender']
      },
      {
        unitId: 'doom-knight',
        unitName: 'Dark Knight (Doom Knight)',
        roleTitle: 'Vengeful Magic Striker',
        weapon: 'Dark Flame Spear',
        shieldOrHelm: 'Doom Shield',
        accessory1: 'Carnelian Pendant (+1 AP)',
        accessory2: 'Cursed Ring',
        statPriorities: ['Phys Atk (S)', 'Mag Atk (B)'],
        growthTypes: ['Offensive', 'Offensive']
      }
    ],
    tacticsSequence: [
      { step: 1, unit: 'Sanatio', skill: 'Sacred Barrier', condition1: '[Start of Battle]', condition2: '[Full Squad]', notes: '2 hits nullification barrier' },
      { step: 2, unit: 'Umerus', skill: 'Spiral Sword', condition1: '[Front Row Enemies]', condition2: '[Self AP >= 2]', notes: 'Evasive row slice' },
      { step: 3, unit: 'Scarlett', skill: 'Innocent Light', condition1: '[Enemy Buffed]', condition2: '[Self AP >= 1]', notes: 'Removes enemy buffs' },
      { step: 4, unit: 'Dark Knight', skill: 'Dark Flame', condition1: '[Full Health Target]', condition2: '[Self AP >= 2]', notes: 'Row magic flame hit' }
    ],
    substitutes: { earlyGame: ['Sharon Cleric', 'Ochlys Feathersword'], endgameAlternatives: ['Renault replacing Doom Knight'] }
  }
];
