import { UnitClass } from '@/types';

export const CLASSES_DATA: UnitClass[] = [
  {
    "id": "alain-high-lord",
    "image": "/images/characters/alain-high-lord.png",
    "name": "Alain (High Lord)",
    "category": "Cavalry",
    "role": "Physical DPS",
    "tier": "SS",
    "icon": "👑",
    "baseStats": {
      "hp": 110,
      "physAtk": 95,
      "magAtk": 45,
      "physDef": 85,
      "magDef": 65,
      "initiative": 34,
      "evasion": 40,
      "critRate": 15
    },
    "activeSkills": [
      {
        "name": "Spinning Edge",
        "apCost": 2,
        "potency": 150,
        "target": "Full Row",
        "description": "Deals heavy physical damage to a full row of enemies. Grants +1 AP on kill.",
        "flags": [
          "Physical",
          "Row"
        ]
      },
      {
        "name": "Lean Edge",
        "apCost": 1,
        "potency": 100,
        "target": "Single Enemy",
        "description": "Attacks a single target and restores HP proportional to damage dealt.",
        "flags": [
          "Physical",
          "Sustain"
        ]
      }
    ],
    "passiveSkills": [
      {
        "name": "Luminous Cover",
        "ppCost": 1,
        "trigger": "Before Ally Attacked",
        "description": "Covers an ally from incoming attacks and increases physical defense by 50%."
      },
      {
        "name": "Noble Guard",
        "ppCost": 1,
        "trigger": "Before Attacked",
        "description": "Grants heavy guard and restores 1 PP when guarding successfully."
      }
    ],
    "bestGrowthTypes": [
      "All-Rounder",
      "Offensive"
    ],
    "synergiesWith": [
      "scarlett-bishop",
      "clive-great-knight",
      "gilbert-prince"
    ],
    "recommendedEquipment": [
      "Ring of the Unicorn",
      "Carnelian Pendant"
    ],
    "overview": "Alain in his High Lord promoted class gains a horse, massive HP/Def scaling, and row-wiping physical power while shielding backline allies."
  },
  {
    "id": "yunifi-snow-ranger",
    "image": "/images/characters/yunifi-snow-ranger.png",
    "name": "Yunifi (Snow Ranger)",
    "category": "Infantry",
    "role": "Physical DPS",
    "tier": "SS",
    "icon": "🏹",
    "baseStats": {
      "hp": 88,
      "physAtk": 98,
      "magAtk": 30,
      "physDef": 50,
      "magDef": 55,
      "initiative": 42,
      "evasion": 65,
      "critRate": 25
    },
    "activeSkills": [
      {
        "name": "Glacial Rain",
        "apCost": 4,
        "potency": 200,
        "target": "All Enemies",
        "description": "Charged Skill: Takes 1 turn to prepare, then rains frozen arrows dealing massive physical/ice damage and Freeze to all enemies.",
        "flags": [
          "Physical",
          "Ranged",
          "AOE",
          "Freeze"
        ]
      },
      {
        "name": "Triple Shot",
        "apCost": 2,
        "potency": 120,
        "target": "Single Enemy",
        "description": "Fires 3 consecutive arrows at a single target with increased crit chance.",
        "flags": [
          "Physical",
          "Ranged"
        ]
      }
    ],
    "passiveSkills": [
      {
        "name": "Counter Eagle",
        "ppCost": 1,
        "trigger": "After Being Attacked",
        "description": "Fires a immediate counterattack arrow with 100% Guaranteed Critical Hit."
      },
      {
        "name": "Snow White Guard",
        "ppCost": 1,
        "trigger": "Start of Turn",
        "description": "Increases evasion by 30% and grants immunity to Freeze."
      }
    ],
    "bestGrowthTypes": [
      "Offensive",
      "Keen"
    ],
    "synergiesWith": [
      "cat-ear-hood",
      "rosalinde-elven-prophet",
      "selvie-druid"
    ],
    "recommendedEquipment": [
      "Cat-Ear Hood",
      "Sniper's Amber Lens"
    ],
    "overview": "Queen of Turn-1 nukes when paired with Cat-Ear Hood (Quick Impetus). Glacial Rain clears entire battlefields before the enemy moves."
  },
  {
    "id": "rosalinde-elven-prophet",
    "image": "/images/characters/rosalinde-elven-prophet.png",
    "name": "Rosalinde (Elven Prophet)",
    "category": "Infantry",
    "role": "Magic DPS",
    "tier": "SS",
    "icon": "🧝‍♀️",
    "baseStats": {
      "hp": 82,
      "physAtk": 75,
      "magAtk": 96,
      "physDef": 45,
      "magDef": 85,
      "initiative": 38,
      "evasion": 50,
      "critRate": 15
    },
    "activeSkills": [
      {
        "name": "Elemental Roar",
        "apCost": 3,
        "potency": 210,
        "target": "All Enemies",
        "description": "Consumes Faerie charges to deal devastating hybrid physical/magical damage to all enemies.",
        "flags": [
          "Magical",
          "AOE"
        ]
      },
      {
        "name": "Sylvan Gale",
        "apCost": 1,
        "potency": 100,
        "target": "Full Row",
        "description": "Attacks a row of enemies with wind magic and reduces initiative by 10.",
        "flags": [
          "Magical",
          "Row"
        ]
      }
    ],
    "passiveSkills": [
      {
        "name": "Rage of the Faeries",
        "ppCost": 1,
        "isStartOfBattle": true,
        "trigger": "Start of Battle",
        "description": "Start of Battle: Stuns all front-row enemies immediately and summons a Faerie charge."
      },
      {
        "name": "Faerie Heal",
        "ppCost": 1,
        "trigger": "After Ally Attacked",
        "description": "Restores HP to an ally and cleanses all status afflictions."
      }
    ],
    "bestGrowthTypes": [
      "Speedster",
      "Offensive"
    ],
    "synergiesWith": [
      "eltolinde-elven-sibyl",
      "yunifi-snow-ranger",
      "cat-ear-hood"
    ],
    "recommendedEquipment": [
      "Millennium Scepter",
      "Lapis Pendant"
    ],
    "overview": "Extremely versatile hybrid magical attacker whose Start-of-Battle Stun disrupts enemy frontlines instantly."
  },
  {
    "id": "eltolinde-elven-sibyl",
    "image": "/images/characters/eltolinde-elven-sibyl.png",
    "name": "Eltolinde (Elven Sibyl)",
    "category": "Infantry",
    "role": "Support",
    "tier": "S",
    "icon": "✨",
    "baseStats": {
      "hp": 85,
      "physAtk": 70,
      "magAtk": 92,
      "physDef": 48,
      "magDef": 88,
      "initiative": 36,
      "evasion": 48,
      "critRate": 12
    },
    "activeSkills": [
      {
        "name": "Elemental Roar",
        "apCost": 3,
        "potency": 210,
        "target": "All Enemies",
        "description": "Unleashes stored Faeries into a team-wide hybrid explosion.",
        "flags": [
          "Magical",
          "AOE"
        ]
      },
      {
        "name": "Primordial Heal",
        "apCost": 2,
        "potency": 100,
        "target": "All Allies",
        "description": "Heals all allies and grants a magic barrier shielding against 1 attack.",
        "flags": [
          "Healing",
          "Barrier"
        ]
      }
    ],
    "passiveSkills": [
      {
        "name": "Boon of the Faeries",
        "ppCost": 1,
        "isStartOfBattle": true,
        "trigger": "Start of Battle",
        "description": "Start of Battle: Grants row-wide magic barrier immunity."
      }
    ],
    "bestGrowthTypes": [
      "Guardian",
      "Speedster"
    ],
    "synergiesWith": [
      "rosalinde-elven-prophet",
      "alain-high-lord"
    ],
    "recommendedEquipment": [
      "Ring of the Maiden",
      "Lapis Pendant"
    ],
    "overview": "Provides row cleansing, barrier shields, and devastating hybrid finish scaling with Faeries."
  },
  {
    "id": "berengaria-renegade",
    "image": "/images/characters/berengaria-renegade.png",
    "name": "Berengaria (Renegade)",
    "category": "Infantry",
    "role": "Physical DPS",
    "tier": "SS",
    "icon": "⛓️",
    "baseStats": {
      "hp": 105,
      "physAtk": 96,
      "magAtk": 25,
      "physDef": 75,
      "magDef": 50,
      "initiative": 35,
      "evasion": 35,
      "critRate": 20
    },
    "activeSkills": [
      {
        "name": "Death Spin",
        "apCost": 1,
        "potency": 120,
        "target": "Full Row",
        "description": "Deals physical damage to a full row. Deals +50% extra damage if targets are afflicted with debuffs.",
        "flags": [
          "Physical",
          "Row"
        ]
      },
      {
        "name": "Sanguine Pursuit",
        "apCost": 1,
        "potency": 100,
        "target": "Single Enemy",
        "description": "Attacks and recovers 1 PP upon landing a hit.",
        "flags": [
          "Physical"
        ]
      }
    ],
    "passiveSkills": [
      {
        "name": "Eye of the Monarch",
        "ppCost": 1,
        "isStartOfBattle": true,
        "trigger": "Start of Battle",
        "description": "Start of Battle: Inflicts Atk/Def debuff (-20%) and Initiative debuff (-10) on all enemies."
      }
    ],
    "bestGrowthTypes": [
      "Offensive",
      "Keen"
    ],
    "synergiesWith": [
      "selvie-druid",
      "travis-rogue",
      "yahna-sorceress"
    ],
    "recommendedEquipment": [
      "Carnelian Pendant",
      "Sandstorm Staff"
    ],
    "overview": "Dominates debuffed teams with Eye of the Monarch start-of-battle debuff and massive physical execution potency."
  },
  {
    "id": "selvie-druid",
    "image": "/images/characters/selvie-druid.png",
    "name": "Selvie (Druid)",
    "category": "Infantry",
    "role": "Debuffer",
    "tier": "SS",
    "icon": "🔮",
    "baseStats": {
      "hp": 75,
      "physAtk": 20,
      "magAtk": 65,
      "physDef": 40,
      "magDef": 80,
      "initiative": 45,
      "evasion": 55,
      "critRate": 10
    },
    "activeSkills": [
      {
        "name": "Defensive Curse",
        "apCost": 1,
        "potency": 0,
        "target": "Full Row",
        "description": "Reduces physical and magic defense of an enemy row by 50% and removes Guard.",
        "flags": [
          "Debuff",
          "Row"
        ]
      },
      {
        "name": "Offensive Curse",
        "apCost": 1,
        "potency": 0,
        "target": "Full Row",
        "description": "Reduces physical and magic attack of an enemy row by 50%.",
        "flags": [
          "Debuff",
          "Row"
        ]
      }
    ],
    "passiveSkills": [
      {
        "name": "Sandstorm",
        "ppCost": 2,
        "isStartOfBattle": true,
        "trigger": "Start of Battle",
        "description": "Start of Battle: Inflicts Blindness on all enemy units, causing their first attack to miss."
      }
    ],
    "bestGrowthTypes": [
      "Speedster",
      "Guardian"
    ],
    "synergiesWith": [
      "berengaria-renegade",
      "yunifi-snow-ranger",
      "hilda-wyvern-master"
    ],
    "recommendedEquipment": [
      "Sandstorm Staff",
      "Lapis Pendant"
    ],
    "overview": "The undisputed premier debuffer in Unicorn Overlord. Cripples enemy stats and prevents enemy guarding entirely."
  },
  {
    "id": "raenys-feather-sword",
    "image": "/images/characters/raenys-feather-sword.png",
    "name": "Raenys (Feathersword)",
    "category": "Flying",
    "role": "Tank",
    "tier": "S",
    "icon": "🪶",
    "baseStats": {
      "hp": 86,
      "physAtk": 88,
      "magAtk": 40,
      "physDef": 60,
      "magDef": 75,
      "initiative": 48,
      "evasion": 85,
      "critRate": 18
    },
    "activeSkills": [
      {
        "name": "Spiral Sword",
        "apCost": 1,
        "potency": 110,
        "target": "Single Enemy",
        "description": "High speed aerial slash that bypasses enemy guard.",
        "flags": [
          "Physical",
          "Flying"
        ]
      }
    ],
    "passiveSkills": [
      {
        "name": "Accelerate",
        "ppCost": 1,
        "trigger": "After Evading Attack",
        "description": "Increases own Initiative by +10 and Phys Atk by +15% upon successful dodge."
      }
    ],
    "bestGrowthTypes": [
      "Speedster",
      "Keen"
    ],
    "synergiesWith": [
      "gilbert-prince",
      "alain-high-lord"
    ],
    "recommendedEquipment": [
      "Angel Plume",
      "Evasion Charm"
    ],
    "overview": "Premier flying evasion tank with absurd initiative speed and stackable dodge buffs."
  },
  {
    "id": "gilbert-prince",
    "image": "/images/characters/gilbert-prince.png",
    "name": "Gilbert (Prince)",
    "category": "Cavalry",
    "role": "Support",
    "tier": "SS",
    "icon": "👑",
    "baseStats": {
      "hp": 95,
      "physAtk": 60,
      "magAtk": 50,
      "physDef": 70,
      "magDef": 65,
      "initiative": 46,
      "evasion": 45,
      "critRate": 10
    },
    "activeSkills": [
      {
        "name": "Offensive Order",
        "apCost": 1,
        "potency": 0,
        "target": "All Allies",
        "description": "Increases physical and magic attack of all allies by +20%.",
        "flags": [
          "Buff"
        ]
      },
      {
        "name": "Defensive Order",
        "apCost": 1,
        "potency": 0,
        "target": "All Allies",
        "description": "Increases physical and magic defense of all allies by +20%.",
        "flags": [
          "Buff"
        ]
      }
    ],
    "passiveSkills": [
      {
        "name": "Rapid Order",
        "ppCost": 1,
        "isStartOfBattle": true,
        "trigger": "Start of Battle",
        "description": "Start of Battle: Increases Initiative of all allies by +15."
      }
    ],
    "bestGrowthTypes": [
      "Speedster",
      "Guardian"
    ],
    "synergiesWith": [
      "clive-great-knight",
      "melisandre-swordmaster",
      "alain-high-lord"
    ],
    "recommendedEquipment": [
      "Royal Banner",
      "Lapis Pendant"
    ],
    "overview": "Premier squad buffer giving early turn order dominance and massive offensive scaling."
  },
  {
    "id": "arbalist",
    "image": "/images/characters/arbalist.png",
    "name": "Arbalist",
    "tier": "A+",
    "category": "Infantry",
    "role": "Physical DPS",
    "icon": "⚔️",
    "baseStats": {
      "hp": 90,
      "physAtk": 85,
      "magAtk": 40,
      "physDef": 55,
      "magDef": 45,
      "initiative": 35,
      "evasion": 20,
      "critRate": 10
    },
    "activeSkills": [
      {
        "name": "Arbalist Strike",
        "apCost": 1,
        "potency": 100,
        "target": "Single Enemy",
        "description": "Standard class attack scaling with physical potency.",
        "flags": [
          "Physical"
        ]
      }
    ],
    "passiveSkills": [
      {
        "name": "Arbalist Guard",
        "ppCost": 1,
        "trigger": "Before Attacked",
        "description": "Grants medium guard and mitigates incoming damage by 50%."
      }
    ],
    "bestGrowthTypes": [
      "Offensive",
      "Keen"
    ],
    "synergiesWith": [
      "scarlett-bishop",
      "alain-high-lord"
    ],
    "recommendedEquipment": [
      "Royal Banner",
      "Carnelian Pendant"
    ],
    "overview": "Official class Arbalist specializing in frontline physical damage and tactical maneuvers."
  },
  {
    "id": "berserker",
    "image": "/images/characters/berserker.png",
    "name": "Berserker",
    "tier": "A+",
    "category": "Infantry",
    "role": "Physical DPS",
    "icon": "⚔️",
    "baseStats": {
      "hp": 90,
      "physAtk": 85,
      "magAtk": 40,
      "physDef": 55,
      "magDef": 45,
      "initiative": 35,
      "evasion": 20,
      "critRate": 10
    },
    "activeSkills": [
      {
        "name": "Berserker Strike",
        "apCost": 1,
        "potency": 100,
        "target": "Single Enemy",
        "description": "Standard class attack scaling with physical potency.",
        "flags": [
          "Physical"
        ]
      }
    ],
    "passiveSkills": [
      {
        "name": "Berserker Guard",
        "ppCost": 1,
        "trigger": "Before Attacked",
        "description": "Grants medium guard and mitigates incoming damage by 50%."
      }
    ],
    "bestGrowthTypes": [
      "Offensive",
      "Keen"
    ],
    "synergiesWith": [
      "scarlett-bishop",
      "alain-high-lord"
    ],
    "recommendedEquipment": [
      "Royal Banner",
      "Carnelian Pendant"
    ],
    "overview": "Official class Berserker specializing in frontline physical damage and tactical maneuvers."
  },
  {
    "id": "bishop",
    "image": "/images/characters/bishop.png",
    "name": "Bishop",
    "tier": "A+",
    "category": "Infantry",
    "role": "Physical DPS",
    "icon": "⚔️",
    "baseStats": {
      "hp": 90,
      "physAtk": 85,
      "magAtk": 40,
      "physDef": 55,
      "magDef": 45,
      "initiative": 35,
      "evasion": 20,
      "critRate": 10
    },
    "activeSkills": [
      {
        "name": "Bishop Strike",
        "apCost": 1,
        "potency": 100,
        "target": "Single Enemy",
        "description": "Standard class attack scaling with physical potency.",
        "flags": [
          "Physical"
        ]
      }
    ],
    "passiveSkills": [
      {
        "name": "Bishop Guard",
        "ppCost": 1,
        "trigger": "Before Attacked",
        "description": "Grants medium guard and mitigates incoming damage by 50%."
      }
    ],
    "bestGrowthTypes": [
      "Offensive",
      "Keen"
    ],
    "synergiesWith": [
      "scarlett-bishop",
      "alain-high-lord"
    ],
    "recommendedEquipment": [
      "Royal Banner",
      "Carnelian Pendant"
    ],
    "overview": "Official class Bishop specializing in frontline physical damage and tactical maneuvers."
  },
  {
    "id": "breaker",
    "image": "/images/characters/breaker.png",
    "name": "Breaker",
    "tier": "A+",
    "category": "Infantry",
    "role": "Physical DPS",
    "icon": "⚔️",
    "baseStats": {
      "hp": 90,
      "physAtk": 85,
      "magAtk": 40,
      "physDef": 55,
      "magDef": 45,
      "initiative": 35,
      "evasion": 20,
      "critRate": 10
    },
    "activeSkills": [
      {
        "name": "Breaker Strike",
        "apCost": 1,
        "potency": 100,
        "target": "Single Enemy",
        "description": "Standard class attack scaling with physical potency.",
        "flags": [
          "Physical"
        ]
      }
    ],
    "passiveSkills": [
      {
        "name": "Breaker Guard",
        "ppCost": 1,
        "trigger": "Before Attacked",
        "description": "Grants medium guard and mitigates incoming damage by 50%."
      }
    ],
    "bestGrowthTypes": [
      "Offensive",
      "Keen"
    ],
    "synergiesWith": [
      "scarlett-bishop",
      "alain-high-lord"
    ],
    "recommendedEquipment": [
      "Royal Banner",
      "Carnelian Pendant"
    ],
    "overview": "Official class Breaker specializing in frontline physical damage and tactical maneuvers."
  },
  {
    "id": "cleric",
    "image": "/images/characters/cleric.png",
    "name": "Cleric",
    "tier": "A+",
    "category": "Infantry",
    "role": "Physical DPS",
    "icon": "⚔️",
    "baseStats": {
      "hp": 90,
      "physAtk": 85,
      "magAtk": 40,
      "physDef": 55,
      "magDef": 45,
      "initiative": 35,
      "evasion": 20,
      "critRate": 10
    },
    "activeSkills": [
      {
        "name": "Cleric Strike",
        "apCost": 1,
        "potency": 100,
        "target": "Single Enemy",
        "description": "Standard class attack scaling with physical potency.",
        "flags": [
          "Physical"
        ]
      }
    ],
    "passiveSkills": [
      {
        "name": "Cleric Guard",
        "ppCost": 1,
        "trigger": "Before Attacked",
        "description": "Grants medium guard and mitigates incoming damage by 50%."
      }
    ],
    "bestGrowthTypes": [
      "Offensive",
      "Keen"
    ],
    "synergiesWith": [
      "scarlett-bishop",
      "alain-high-lord"
    ],
    "recommendedEquipment": [
      "Royal Banner",
      "Carnelian Pendant"
    ],
    "overview": "Official class Cleric specializing in frontline physical damage and tactical maneuvers."
  },
  {
    "id": "crusader",
    "image": "/images/characters/crusader.png",
    "name": "Crusader",
    "tier": "A+",
    "category": "Infantry",
    "role": "Physical DPS",
    "icon": "⚔️",
    "baseStats": {
      "hp": 90,
      "physAtk": 85,
      "magAtk": 40,
      "physDef": 55,
      "magDef": 45,
      "initiative": 35,
      "evasion": 20,
      "critRate": 10
    },
    "activeSkills": [
      {
        "name": "Crusader Strike",
        "apCost": 1,
        "potency": 100,
        "target": "Single Enemy",
        "description": "Standard class attack scaling with physical potency.",
        "flags": [
          "Physical"
        ]
      }
    ],
    "passiveSkills": [
      {
        "name": "Crusader Guard",
        "ppCost": 1,
        "trigger": "Before Attacked",
        "description": "Grants medium guard and mitigates incoming damage by 50%."
      }
    ],
    "bestGrowthTypes": [
      "Offensive",
      "Keen"
    ],
    "synergiesWith": [
      "scarlett-bishop",
      "alain-high-lord"
    ],
    "recommendedEquipment": [
      "Royal Banner",
      "Carnelian Pendant"
    ],
    "overview": "Official class Crusader specializing in frontline physical damage and tactical maneuvers."
  },
  {
    "id": "dark-knight",
    "image": "/images/characters/dark-knight.png",
    "name": "Dark Knight",
    "tier": "A+",
    "category": "Infantry",
    "role": "Physical DPS",
    "icon": "⚔️",
    "baseStats": {
      "hp": 90,
      "physAtk": 85,
      "magAtk": 40,
      "physDef": 55,
      "magDef": 45,
      "initiative": 35,
      "evasion": 20,
      "critRate": 10
    },
    "activeSkills": [
      {
        "name": "Dark Knight Strike",
        "apCost": 1,
        "potency": 100,
        "target": "Single Enemy",
        "description": "Standard class attack scaling with physical potency.",
        "flags": [
          "Physical"
        ]
      }
    ],
    "passiveSkills": [
      {
        "name": "Dark Knight Guard",
        "ppCost": 1,
        "trigger": "Before Attacked",
        "description": "Grants medium guard and mitigates incoming damage by 50%."
      }
    ],
    "bestGrowthTypes": [
      "Offensive",
      "Keen"
    ],
    "synergiesWith": [
      "scarlett-bishop",
      "alain-high-lord"
    ],
    "recommendedEquipment": [
      "Royal Banner",
      "Carnelian Pendant"
    ],
    "overview": "Official class Dark Knight specializing in frontline physical damage and tactical maneuvers."
  },
  {
    "id": "dark-lord",
    "image": "/images/characters/dark-lord.png",
    "name": "Dark Lord",
    "tier": "A+",
    "category": "Infantry",
    "role": "Physical DPS",
    "icon": "⚔️",
    "baseStats": {
      "hp": 90,
      "physAtk": 85,
      "magAtk": 40,
      "physDef": 55,
      "magDef": 45,
      "initiative": 35,
      "evasion": 20,
      "critRate": 10
    },
    "activeSkills": [
      {
        "name": "Dark Lord Strike",
        "apCost": 1,
        "potency": 100,
        "target": "Single Enemy",
        "description": "Standard class attack scaling with physical potency.",
        "flags": [
          "Physical"
        ]
      }
    ],
    "passiveSkills": [
      {
        "name": "Dark Lord Guard",
        "ppCost": 1,
        "trigger": "Before Attacked",
        "description": "Grants medium guard and mitigates incoming damage by 50%."
      }
    ],
    "bestGrowthTypes": [
      "Offensive",
      "Keen"
    ],
    "synergiesWith": [
      "scarlett-bishop",
      "alain-high-lord"
    ],
    "recommendedEquipment": [
      "Royal Banner",
      "Carnelian Pendant"
    ],
    "overview": "Official class Dark Lord specializing in frontline physical damage and tactical maneuvers."
  },
  {
    "id": "dark-marquess",
    "image": "/images/characters/dark-marquess.png",
    "name": "Dark Marquess",
    "tier": "A+",
    "category": "Infantry",
    "role": "Physical DPS",
    "icon": "⚔️",
    "baseStats": {
      "hp": 90,
      "physAtk": 85,
      "magAtk": 40,
      "physDef": 55,
      "magDef": 45,
      "initiative": 35,
      "evasion": 20,
      "critRate": 10
    },
    "activeSkills": [
      {
        "name": "Dark Marquess Strike",
        "apCost": 1,
        "potency": 100,
        "target": "Single Enemy",
        "description": "Standard class attack scaling with physical potency.",
        "flags": [
          "Physical"
        ]
      }
    ],
    "passiveSkills": [
      {
        "name": "Dark Marquess Guard",
        "ppCost": 1,
        "trigger": "Before Attacked",
        "description": "Grants medium guard and mitigates incoming damage by 50%."
      }
    ],
    "bestGrowthTypes": [
      "Offensive",
      "Keen"
    ],
    "synergiesWith": [
      "scarlett-bishop",
      "alain-high-lord"
    ],
    "recommendedEquipment": [
      "Royal Banner",
      "Carnelian Pendant"
    ],
    "overview": "Official class Dark Marquess specializing in frontline physical damage and tactical maneuvers."
  },
  {
    "id": "dark-marquess-axe",
    "image": "/images/characters/dark-marquess-axe.png",
    "name": "Dark Marquess (Axe)",
    "tier": "A+",
    "category": "Infantry",
    "role": "Physical DPS",
    "icon": "⚔️",
    "baseStats": {
      "hp": 90,
      "physAtk": 85,
      "magAtk": 40,
      "physDef": 55,
      "magDef": 45,
      "initiative": 35,
      "evasion": 20,
      "critRate": 10
    },
    "activeSkills": [
      {
        "name": "Dark Marquess (Axe) Strike",
        "apCost": 1,
        "potency": 100,
        "target": "Single Enemy",
        "description": "Standard class attack scaling with physical potency.",
        "flags": [
          "Physical"
        ]
      }
    ],
    "passiveSkills": [
      {
        "name": "Dark Marquess (Axe) Guard",
        "ppCost": 1,
        "trigger": "Before Attacked",
        "description": "Grants medium guard and mitigates incoming damage by 50%."
      }
    ],
    "bestGrowthTypes": [
      "Offensive",
      "Keen"
    ],
    "synergiesWith": [
      "scarlett-bishop",
      "alain-high-lord"
    ],
    "recommendedEquipment": [
      "Royal Banner",
      "Carnelian Pendant"
    ],
    "overview": "Official class Dark Marquess (Axe) specializing in frontline physical damage and tactical maneuvers."
  },
  {
    "id": "dark-marquess-spear",
    "image": "/images/characters/dark-marquess-spear.png",
    "name": "Dark Marquess (Spear)",
    "tier": "A+",
    "category": "Infantry",
    "role": "Physical DPS",
    "icon": "⚔️",
    "baseStats": {
      "hp": 90,
      "physAtk": 85,
      "magAtk": 40,
      "physDef": 55,
      "magDef": 45,
      "initiative": 35,
      "evasion": 20,
      "critRate": 10
    },
    "activeSkills": [
      {
        "name": "Dark Marquess (Spear) Strike",
        "apCost": 1,
        "potency": 100,
        "target": "Single Enemy",
        "description": "Standard class attack scaling with physical potency.",
        "flags": [
          "Physical"
        ]
      }
    ],
    "passiveSkills": [
      {
        "name": "Dark Marquess (Spear) Guard",
        "ppCost": 1,
        "trigger": "Before Attacked",
        "description": "Grants medium guard and mitigates incoming damage by 50%."
      }
    ],
    "bestGrowthTypes": [
      "Offensive",
      "Keen"
    ],
    "synergiesWith": [
      "scarlett-bishop",
      "alain-high-lord"
    ],
    "recommendedEquipment": [
      "Royal Banner",
      "Carnelian Pendant"
    ],
    "overview": "Official class Dark Marquess (Spear) specializing in frontline physical damage and tactical maneuvers."
  },
  {
    "id": "dark-marquess-staff",
    "image": "/images/characters/dark-marquess-staff.png",
    "name": "Dark Marquess (Staff)",
    "tier": "A+",
    "category": "Infantry",
    "role": "Physical DPS",
    "icon": "⚔️",
    "baseStats": {
      "hp": 90,
      "physAtk": 85,
      "magAtk": 40,
      "physDef": 55,
      "magDef": 45,
      "initiative": 35,
      "evasion": 20,
      "critRate": 10
    },
    "activeSkills": [
      {
        "name": "Dark Marquess (Staff) Strike",
        "apCost": 1,
        "potency": 100,
        "target": "Single Enemy",
        "description": "Standard class attack scaling with physical potency.",
        "flags": [
          "Physical"
        ]
      }
    ],
    "passiveSkills": [
      {
        "name": "Dark Marquess (Staff) Guard",
        "ppCost": 1,
        "trigger": "Before Attacked",
        "description": "Grants medium guard and mitigates incoming damage by 50%."
      }
    ],
    "bestGrowthTypes": [
      "Offensive",
      "Keen"
    ],
    "synergiesWith": [
      "scarlett-bishop",
      "alain-high-lord"
    ],
    "recommendedEquipment": [
      "Royal Banner",
      "Carnelian Pendant"
    ],
    "overview": "Official class Dark Marquess (Staff) specializing in frontline physical damage and tactical maneuvers."
  },
  {
    "id": "dark-marquess-sword",
    "image": "/images/characters/dark-marquess-sword.png",
    "name": "Dark Marquess (Sword)",
    "tier": "A+",
    "category": "Infantry",
    "role": "Physical DPS",
    "icon": "⚔️",
    "baseStats": {
      "hp": 90,
      "physAtk": 85,
      "magAtk": 40,
      "physDef": 55,
      "magDef": 45,
      "initiative": 35,
      "evasion": 20,
      "critRate": 10
    },
    "activeSkills": [
      {
        "name": "Dark Marquess (Sword) Strike",
        "apCost": 1,
        "potency": 100,
        "target": "Single Enemy",
        "description": "Standard class attack scaling with physical potency.",
        "flags": [
          "Physical"
        ]
      }
    ],
    "passiveSkills": [
      {
        "name": "Dark Marquess (Sword) Guard",
        "ppCost": 1,
        "trigger": "Before Attacked",
        "description": "Grants medium guard and mitigates incoming damage by 50%."
      }
    ],
    "bestGrowthTypes": [
      "Offensive",
      "Keen"
    ],
    "synergiesWith": [
      "scarlett-bishop",
      "alain-high-lord"
    ],
    "recommendedEquipment": [
      "Royal Banner",
      "Carnelian Pendant"
    ],
    "overview": "Official class Dark Marquess (Sword) specializing in frontline physical damage and tactical maneuvers."
  },
  {
    "id": "doom-knight",
    "image": "/images/characters/doom-knight.png",
    "name": "Doom Knight",
    "tier": "A+",
    "category": "Infantry",
    "role": "Physical DPS",
    "icon": "⚔️",
    "baseStats": {
      "hp": 90,
      "physAtk": 85,
      "magAtk": 40,
      "physDef": 55,
      "magDef": 45,
      "initiative": 35,
      "evasion": 20,
      "critRate": 10
    },
    "activeSkills": [
      {
        "name": "Doom Knight Strike",
        "apCost": 1,
        "potency": 100,
        "target": "Single Enemy",
        "description": "Standard class attack scaling with physical potency.",
        "flags": [
          "Physical"
        ]
      }
    ],
    "passiveSkills": [
      {
        "name": "Doom Knight Guard",
        "ppCost": 1,
        "trigger": "Before Attacked",
        "description": "Grants medium guard and mitigates incoming damage by 50%."
      }
    ],
    "bestGrowthTypes": [
      "Offensive",
      "Keen"
    ],
    "synergiesWith": [
      "scarlett-bishop",
      "alain-high-lord"
    ],
    "recommendedEquipment": [
      "Royal Banner",
      "Carnelian Pendant"
    ],
    "overview": "Official class Doom Knight specializing in frontline physical damage and tactical maneuvers."
  },
  {
    "id": "dreadnought",
    "image": "/images/characters/dreadnought.png",
    "name": "Dreadnought",
    "tier": "A+",
    "category": "Infantry",
    "role": "Physical DPS",
    "icon": "⚔️",
    "baseStats": {
      "hp": 90,
      "physAtk": 85,
      "magAtk": 40,
      "physDef": 55,
      "magDef": 45,
      "initiative": 35,
      "evasion": 20,
      "critRate": 10
    },
    "activeSkills": [
      {
        "name": "Dreadnought Strike",
        "apCost": 1,
        "potency": 100,
        "target": "Single Enemy",
        "description": "Standard class attack scaling with physical potency.",
        "flags": [
          "Physical"
        ]
      }
    ],
    "passiveSkills": [
      {
        "name": "Dreadnought Guard",
        "ppCost": 1,
        "trigger": "Before Attacked",
        "description": "Grants medium guard and mitigates incoming damage by 50%."
      }
    ],
    "bestGrowthTypes": [
      "Offensive",
      "Keen"
    ],
    "synergiesWith": [
      "scarlett-bishop",
      "alain-high-lord"
    ],
    "recommendedEquipment": [
      "Royal Banner",
      "Carnelian Pendant"
    ],
    "overview": "Official class Dreadnought specializing in frontline physical damage and tactical maneuvers."
  },
  {
    "id": "elven-archer",
    "image": "/images/characters/elven-archer.png",
    "name": "Elven Archer",
    "tier": "A+",
    "category": "Infantry",
    "role": "Physical DPS",
    "icon": "⚔️",
    "baseStats": {
      "hp": 90,
      "physAtk": 85,
      "magAtk": 40,
      "physDef": 55,
      "magDef": 45,
      "initiative": 35,
      "evasion": 20,
      "critRate": 10
    },
    "activeSkills": [
      {
        "name": "Elven Archer Strike",
        "apCost": 1,
        "potency": 100,
        "target": "Single Enemy",
        "description": "Standard class attack scaling with physical potency.",
        "flags": [
          "Physical"
        ]
      }
    ],
    "passiveSkills": [
      {
        "name": "Elven Archer Guard",
        "ppCost": 1,
        "trigger": "Before Attacked",
        "description": "Grants medium guard and mitigates incoming damage by 50%."
      }
    ],
    "bestGrowthTypes": [
      "Offensive",
      "Keen"
    ],
    "synergiesWith": [
      "scarlett-bishop",
      "alain-high-lord"
    ],
    "recommendedEquipment": [
      "Royal Banner",
      "Carnelian Pendant"
    ],
    "overview": "Official class Elven Archer specializing in frontline physical damage and tactical maneuvers."
  },
  {
    "id": "elven-augur",
    "image": "/images/characters/elven-augur.png",
    "name": "Elven Augur",
    "tier": "A+",
    "category": "Infantry",
    "role": "Physical DPS",
    "icon": "⚔️",
    "baseStats": {
      "hp": 90,
      "physAtk": 85,
      "magAtk": 40,
      "physDef": 55,
      "magDef": 45,
      "initiative": 35,
      "evasion": 20,
      "critRate": 10
    },
    "activeSkills": [
      {
        "name": "Elven Augur Strike",
        "apCost": 1,
        "potency": 100,
        "target": "Single Enemy",
        "description": "Standard class attack scaling with physical potency.",
        "flags": [
          "Physical"
        ]
      }
    ],
    "passiveSkills": [
      {
        "name": "Elven Augur Guard",
        "ppCost": 1,
        "trigger": "Before Attacked",
        "description": "Grants medium guard and mitigates incoming damage by 50%."
      }
    ],
    "bestGrowthTypes": [
      "Offensive",
      "Keen"
    ],
    "synergiesWith": [
      "scarlett-bishop",
      "alain-high-lord"
    ],
    "recommendedEquipment": [
      "Royal Banner",
      "Carnelian Pendant"
    ],
    "overview": "Official class Elven Augur specializing in frontline physical damage and tactical maneuvers."
  },
  {
    "id": "elven-fencer",
    "image": "/images/characters/elven-fencer.png",
    "name": "Elven Fencer",
    "tier": "A+",
    "category": "Infantry",
    "role": "Physical DPS",
    "icon": "⚔️",
    "baseStats": {
      "hp": 90,
      "physAtk": 85,
      "magAtk": 40,
      "physDef": 55,
      "magDef": 45,
      "initiative": 35,
      "evasion": 20,
      "critRate": 10
    },
    "activeSkills": [
      {
        "name": "Elven Fencer Strike",
        "apCost": 1,
        "potency": 100,
        "target": "Single Enemy",
        "description": "Standard class attack scaling with physical potency.",
        "flags": [
          "Physical"
        ]
      }
    ],
    "passiveSkills": [
      {
        "name": "Elven Fencer Guard",
        "ppCost": 1,
        "trigger": "Before Attacked",
        "description": "Grants medium guard and mitigates incoming damage by 50%."
      }
    ],
    "bestGrowthTypes": [
      "Offensive",
      "Keen"
    ],
    "synergiesWith": [
      "scarlett-bishop",
      "alain-high-lord"
    ],
    "recommendedEquipment": [
      "Royal Banner",
      "Carnelian Pendant"
    ],
    "overview": "Official class Elven Fencer specializing in frontline physical damage and tactical maneuvers."
  },
  {
    "id": "elven-sibyl",
    "image": "/images/characters/elven-sibyl.png",
    "name": "Elven Sibyl",
    "tier": "A+",
    "category": "Infantry",
    "role": "Physical DPS",
    "icon": "⚔️",
    "baseStats": {
      "hp": 90,
      "physAtk": 85,
      "magAtk": 40,
      "physDef": 55,
      "magDef": 45,
      "initiative": 35,
      "evasion": 20,
      "critRate": 10
    },
    "activeSkills": [
      {
        "name": "Elven Sibyl Strike",
        "apCost": 1,
        "potency": 100,
        "target": "Single Enemy",
        "description": "Standard class attack scaling with physical potency.",
        "flags": [
          "Physical"
        ]
      }
    ],
    "passiveSkills": [
      {
        "name": "Elven Sibyl Guard",
        "ppCost": 1,
        "trigger": "Before Attacked",
        "description": "Grants medium guard and mitigates incoming damage by 50%."
      }
    ],
    "bestGrowthTypes": [
      "Offensive",
      "Keen"
    ],
    "synergiesWith": [
      "scarlett-bishop",
      "alain-high-lord"
    ],
    "recommendedEquipment": [
      "Royal Banner",
      "Carnelian Pendant"
    ],
    "overview": "Official class Elven Sibyl specializing in frontline physical damage and tactical maneuvers."
  },
  {
    "id": "featherbow",
    "image": "/images/characters/featherbow.png",
    "name": "Featherbow",
    "tier": "A+",
    "category": "Infantry",
    "role": "Physical DPS",
    "icon": "⚔️",
    "baseStats": {
      "hp": 90,
      "physAtk": 85,
      "magAtk": 40,
      "physDef": 55,
      "magDef": 45,
      "initiative": 35,
      "evasion": 20,
      "critRate": 10
    },
    "activeSkills": [
      {
        "name": "Featherbow Strike",
        "apCost": 1,
        "potency": 100,
        "target": "Single Enemy",
        "description": "Standard class attack scaling with physical potency.",
        "flags": [
          "Physical"
        ]
      }
    ],
    "passiveSkills": [
      {
        "name": "Featherbow Guard",
        "ppCost": 1,
        "trigger": "Before Attacked",
        "description": "Grants medium guard and mitigates incoming damage by 50%."
      }
    ],
    "bestGrowthTypes": [
      "Offensive",
      "Keen"
    ],
    "synergiesWith": [
      "scarlett-bishop",
      "alain-high-lord"
    ],
    "recommendedEquipment": [
      "Royal Banner",
      "Carnelian Pendant"
    ],
    "overview": "Official class Featherbow specializing in frontline physical damage and tactical maneuvers."
  },
  {
    "id": "feathershield",
    "image": "/images/characters/feathershield.png",
    "name": "Feathershield",
    "tier": "A+",
    "category": "Infantry",
    "role": "Physical DPS",
    "icon": "⚔️",
    "baseStats": {
      "hp": 90,
      "physAtk": 85,
      "magAtk": 40,
      "physDef": 55,
      "magDef": 45,
      "initiative": 35,
      "evasion": 20,
      "critRate": 10
    },
    "activeSkills": [
      {
        "name": "Feathershield Strike",
        "apCost": 1,
        "potency": 100,
        "target": "Single Enemy",
        "description": "Standard class attack scaling with physical potency.",
        "flags": [
          "Physical"
        ]
      }
    ],
    "passiveSkills": [
      {
        "name": "Feathershield Guard",
        "ppCost": 1,
        "trigger": "Before Attacked",
        "description": "Grants medium guard and mitigates incoming damage by 50%."
      }
    ],
    "bestGrowthTypes": [
      "Offensive",
      "Keen"
    ],
    "synergiesWith": [
      "scarlett-bishop",
      "alain-high-lord"
    ],
    "recommendedEquipment": [
      "Royal Banner",
      "Carnelian Pendant"
    ],
    "overview": "Official class Feathershield specializing in frontline physical damage and tactical maneuvers."
  },
  {
    "id": "featherstaff",
    "image": "/images/characters/featherstaff.png",
    "name": "Featherstaff",
    "tier": "A+",
    "category": "Infantry",
    "role": "Physical DPS",
    "icon": "⚔️",
    "baseStats": {
      "hp": 90,
      "physAtk": 85,
      "magAtk": 40,
      "physDef": 55,
      "magDef": 45,
      "initiative": 35,
      "evasion": 20,
      "critRate": 10
    },
    "activeSkills": [
      {
        "name": "Featherstaff Strike",
        "apCost": 1,
        "potency": 100,
        "target": "Single Enemy",
        "description": "Standard class attack scaling with physical potency.",
        "flags": [
          "Physical"
        ]
      }
    ],
    "passiveSkills": [
      {
        "name": "Featherstaff Guard",
        "ppCost": 1,
        "trigger": "Before Attacked",
        "description": "Grants medium guard and mitigates incoming damage by 50%."
      }
    ],
    "bestGrowthTypes": [
      "Offensive",
      "Keen"
    ],
    "synergiesWith": [
      "scarlett-bishop",
      "alain-high-lord"
    ],
    "recommendedEquipment": [
      "Royal Banner",
      "Carnelian Pendant"
    ],
    "overview": "Official class Featherstaff specializing in frontline physical damage and tactical maneuvers."
  },
  {
    "id": "feathersword",
    "image": "/images/characters/feathersword.png",
    "name": "Feathersword",
    "tier": "A+",
    "category": "Infantry",
    "role": "Physical DPS",
    "icon": "⚔️",
    "baseStats": {
      "hp": 90,
      "physAtk": 85,
      "magAtk": 40,
      "physDef": 55,
      "magDef": 45,
      "initiative": 35,
      "evasion": 20,
      "critRate": 10
    },
    "activeSkills": [
      {
        "name": "Feathersword Strike",
        "apCost": 1,
        "potency": 100,
        "target": "Single Enemy",
        "description": "Standard class attack scaling with physical potency.",
        "flags": [
          "Physical"
        ]
      }
    ],
    "passiveSkills": [
      {
        "name": "Feathersword Guard",
        "ppCost": 1,
        "trigger": "Before Attacked",
        "description": "Grants medium guard and mitigates incoming damage by 50%."
      }
    ],
    "bestGrowthTypes": [
      "Offensive",
      "Keen"
    ],
    "synergiesWith": [
      "scarlett-bishop",
      "alain-high-lord"
    ],
    "recommendedEquipment": [
      "Royal Banner",
      "Carnelian Pendant"
    ],
    "overview": "Official class Feathersword specializing in frontline physical damage and tactical maneuvers."
  },
  {
    "id": "fighter",
    "image": "/images/characters/fighter.png",
    "name": "Fighter",
    "tier": "A+",
    "category": "Infantry",
    "role": "Physical DPS",
    "icon": "⚔️",
    "baseStats": {
      "hp": 90,
      "physAtk": 85,
      "magAtk": 40,
      "physDef": 55,
      "magDef": 45,
      "initiative": 35,
      "evasion": 20,
      "critRate": 10
    },
    "activeSkills": [
      {
        "name": "Fighter Strike",
        "apCost": 1,
        "potency": 100,
        "target": "Single Enemy",
        "description": "Standard class attack scaling with physical potency.",
        "flags": [
          "Physical"
        ]
      }
    ],
    "passiveSkills": [
      {
        "name": "Fighter Guard",
        "ppCost": 1,
        "trigger": "Before Attacked",
        "description": "Grants medium guard and mitigates incoming damage by 50%."
      }
    ],
    "bestGrowthTypes": [
      "Offensive",
      "Keen"
    ],
    "synergiesWith": [
      "scarlett-bishop",
      "alain-high-lord"
    ],
    "recommendedEquipment": [
      "Royal Banner",
      "Carnelian Pendant"
    ],
    "overview": "Official class Fighter specializing in frontline physical damage and tactical maneuvers."
  },
  {
    "id": "gladiator",
    "image": "/images/characters/gladiator.png",
    "name": "Gladiator",
    "tier": "A+",
    "category": "Infantry",
    "role": "Physical DPS",
    "icon": "⚔️",
    "baseStats": {
      "hp": 90,
      "physAtk": 85,
      "magAtk": 40,
      "physDef": 55,
      "magDef": 45,
      "initiative": 35,
      "evasion": 20,
      "critRate": 10
    },
    "activeSkills": [
      {
        "name": "Gladiator Strike",
        "apCost": 1,
        "potency": 100,
        "target": "Single Enemy",
        "description": "Standard class attack scaling with physical potency.",
        "flags": [
          "Physical"
        ]
      }
    ],
    "passiveSkills": [
      {
        "name": "Gladiator Guard",
        "ppCost": 1,
        "trigger": "Before Attacked",
        "description": "Grants medium guard and mitigates incoming damage by 50%."
      }
    ],
    "bestGrowthTypes": [
      "Offensive",
      "Keen"
    ],
    "synergiesWith": [
      "scarlett-bishop",
      "alain-high-lord"
    ],
    "recommendedEquipment": [
      "Royal Banner",
      "Carnelian Pendant"
    ],
    "overview": "Official class Gladiator specializing in frontline physical damage and tactical maneuvers."
  },
  {
    "id": "great-knight",
    "image": "/images/characters/great-knight.png",
    "name": "Great Knight",
    "tier": "A+",
    "category": "Infantry",
    "role": "Physical DPS",
    "icon": "⚔️",
    "baseStats": {
      "hp": 90,
      "physAtk": 85,
      "magAtk": 40,
      "physDef": 55,
      "magDef": 45,
      "initiative": 35,
      "evasion": 20,
      "critRate": 10
    },
    "activeSkills": [
      {
        "name": "Great Knight Strike",
        "apCost": 1,
        "potency": 100,
        "target": "Single Enemy",
        "description": "Standard class attack scaling with physical potency.",
        "flags": [
          "Physical"
        ]
      }
    ],
    "passiveSkills": [
      {
        "name": "Great Knight Guard",
        "ppCost": 1,
        "trigger": "Before Attacked",
        "description": "Grants medium guard and mitigates incoming damage by 50%."
      }
    ],
    "bestGrowthTypes": [
      "Offensive",
      "Keen"
    ],
    "synergiesWith": [
      "scarlett-bishop",
      "alain-high-lord"
    ],
    "recommendedEquipment": [
      "Royal Banner",
      "Carnelian Pendant"
    ],
    "overview": "Official class Great Knight specializing in frontline physical damage and tactical maneuvers."
  },
  {
    "id": "gryphon-knight",
    "image": "/images/characters/gryphon-knight.png",
    "name": "Gryphon Knight",
    "tier": "A+",
    "category": "Infantry",
    "role": "Physical DPS",
    "icon": "⚔️",
    "baseStats": {
      "hp": 90,
      "physAtk": 85,
      "magAtk": 40,
      "physDef": 55,
      "magDef": 45,
      "initiative": 35,
      "evasion": 20,
      "critRate": 10
    },
    "activeSkills": [
      {
        "name": "Gryphon Knight Strike",
        "apCost": 1,
        "potency": 100,
        "target": "Single Enemy",
        "description": "Standard class attack scaling with physical potency.",
        "flags": [
          "Physical"
        ]
      }
    ],
    "passiveSkills": [
      {
        "name": "Gryphon Knight Guard",
        "ppCost": 1,
        "trigger": "Before Attacked",
        "description": "Grants medium guard and mitigates incoming damage by 50%."
      }
    ],
    "bestGrowthTypes": [
      "Offensive",
      "Keen"
    ],
    "synergiesWith": [
      "scarlett-bishop",
      "alain-high-lord"
    ],
    "recommendedEquipment": [
      "Royal Banner",
      "Carnelian Pendant"
    ],
    "overview": "Official class Gryphon Knight specializing in frontline physical damage and tactical maneuvers."
  },
  {
    "id": "gryphon-master",
    "image": "/images/characters/gryphon-master.png",
    "name": "Gryphon Master",
    "tier": "A+",
    "category": "Infantry",
    "role": "Physical DPS",
    "icon": "⚔️",
    "baseStats": {
      "hp": 90,
      "physAtk": 85,
      "magAtk": 40,
      "physDef": 55,
      "magDef": 45,
      "initiative": 35,
      "evasion": 20,
      "critRate": 10
    },
    "activeSkills": [
      {
        "name": "Gryphon Master Strike",
        "apCost": 1,
        "potency": 100,
        "target": "Single Enemy",
        "description": "Standard class attack scaling with physical potency.",
        "flags": [
          "Physical"
        ]
      }
    ],
    "passiveSkills": [
      {
        "name": "Gryphon Master Guard",
        "ppCost": 1,
        "trigger": "Before Attacked",
        "description": "Grants medium guard and mitigates incoming damage by 50%."
      }
    ],
    "bestGrowthTypes": [
      "Offensive",
      "Keen"
    ],
    "synergiesWith": [
      "scarlett-bishop",
      "alain-high-lord"
    ],
    "recommendedEquipment": [
      "Royal Banner",
      "Carnelian Pendant"
    ],
    "overview": "Official class Gryphon Master specializing in frontline physical damage and tactical maneuvers."
  },
  {
    "id": "high-lord",
    "image": "/images/characters/high-lord.png",
    "name": "High Lord",
    "tier": "A+",
    "category": "Infantry",
    "role": "Physical DPS",
    "icon": "⚔️",
    "baseStats": {
      "hp": 90,
      "physAtk": 85,
      "magAtk": 40,
      "physDef": 55,
      "magDef": 45,
      "initiative": 35,
      "evasion": 20,
      "critRate": 10
    },
    "activeSkills": [
      {
        "name": "High Lord Strike",
        "apCost": 1,
        "potency": 100,
        "target": "Single Enemy",
        "description": "Standard class attack scaling with physical potency.",
        "flags": [
          "Physical"
        ]
      }
    ],
    "passiveSkills": [
      {
        "name": "High Lord Guard",
        "ppCost": 1,
        "trigger": "Before Attacked",
        "description": "Grants medium guard and mitigates incoming damage by 50%."
      }
    ],
    "bestGrowthTypes": [
      "Offensive",
      "Keen"
    ],
    "synergiesWith": [
      "scarlett-bishop",
      "alain-high-lord"
    ],
    "recommendedEquipment": [
      "Royal Banner",
      "Carnelian Pendant"
    ],
    "overview": "Official class High Lord specializing in frontline physical damage and tactical maneuvers."
  },
  {
    "id": "high-priestess",
    "image": "/images/characters/high-priestess.png",
    "name": "High Priestess",
    "tier": "A+",
    "category": "Infantry",
    "role": "Physical DPS",
    "icon": "⚔️",
    "baseStats": {
      "hp": 90,
      "physAtk": 85,
      "magAtk": 40,
      "physDef": 55,
      "magDef": 45,
      "initiative": 35,
      "evasion": 20,
      "critRate": 10
    },
    "activeSkills": [
      {
        "name": "High Priestess Strike",
        "apCost": 1,
        "potency": 100,
        "target": "Single Enemy",
        "description": "Standard class attack scaling with physical potency.",
        "flags": [
          "Physical"
        ]
      }
    ],
    "passiveSkills": [
      {
        "name": "High Priestess Guard",
        "ppCost": 1,
        "trigger": "Before Attacked",
        "description": "Grants medium guard and mitigates incoming damage by 50%."
      }
    ],
    "bestGrowthTypes": [
      "Offensive",
      "Keen"
    ],
    "synergiesWith": [
      "scarlett-bishop",
      "alain-high-lord"
    ],
    "recommendedEquipment": [
      "Royal Banner",
      "Carnelian Pendant"
    ],
    "overview": "Official class High Priestess specializing in frontline physical damage and tactical maneuvers."
  },
  {
    "id": "hoplite",
    "image": "/images/characters/hoplite.png",
    "name": "Hoplite",
    "tier": "A+",
    "category": "Infantry",
    "role": "Physical DPS",
    "icon": "⚔️",
    "baseStats": {
      "hp": 90,
      "physAtk": 85,
      "magAtk": 40,
      "physDef": 55,
      "magDef": 45,
      "initiative": 35,
      "evasion": 20,
      "critRate": 10
    },
    "activeSkills": [
      {
        "name": "Hoplite Strike",
        "apCost": 1,
        "potency": 100,
        "target": "Single Enemy",
        "description": "Standard class attack scaling with physical potency.",
        "flags": [
          "Physical"
        ]
      }
    ],
    "passiveSkills": [
      {
        "name": "Hoplite Guard",
        "ppCost": 1,
        "trigger": "Before Attacked",
        "description": "Grants medium guard and mitigates incoming damage by 50%."
      }
    ],
    "bestGrowthTypes": [
      "Offensive",
      "Keen"
    ],
    "synergiesWith": [
      "scarlett-bishop",
      "alain-high-lord"
    ],
    "recommendedEquipment": [
      "Royal Banner",
      "Carnelian Pendant"
    ],
    "overview": "Official class Hoplite specializing in frontline physical damage and tactical maneuvers."
  },
  {
    "id": "housecarl",
    "image": "/images/characters/housecarl.png",
    "name": "Housecarl",
    "tier": "A+",
    "category": "Infantry",
    "role": "Physical DPS",
    "icon": "⚔️",
    "baseStats": {
      "hp": 90,
      "physAtk": 85,
      "magAtk": 40,
      "physDef": 55,
      "magDef": 45,
      "initiative": 35,
      "evasion": 20,
      "critRate": 10
    },
    "activeSkills": [
      {
        "name": "Housecarl Strike",
        "apCost": 1,
        "potency": 100,
        "target": "Single Enemy",
        "description": "Standard class attack scaling with physical potency.",
        "flags": [
          "Physical"
        ]
      }
    ],
    "passiveSkills": [
      {
        "name": "Housecarl Guard",
        "ppCost": 1,
        "trigger": "Before Attacked",
        "description": "Grants medium guard and mitigates incoming damage by 50%."
      }
    ],
    "bestGrowthTypes": [
      "Offensive",
      "Keen"
    ],
    "synergiesWith": [
      "scarlett-bishop",
      "alain-high-lord"
    ],
    "recommendedEquipment": [
      "Royal Banner",
      "Carnelian Pendant"
    ],
    "overview": "Official class Housecarl specializing in frontline physical damage and tactical maneuvers."
  },
  {
    "id": "hunter",
    "image": "/images/characters/hunter.png",
    "name": "Hunter",
    "tier": "A+",
    "category": "Infantry",
    "role": "Physical DPS",
    "icon": "⚔️",
    "baseStats": {
      "hp": 90,
      "physAtk": 85,
      "magAtk": 40,
      "physDef": 55,
      "magDef": 45,
      "initiative": 35,
      "evasion": 20,
      "critRate": 10
    },
    "activeSkills": [
      {
        "name": "Hunter Strike",
        "apCost": 1,
        "potency": 100,
        "target": "Single Enemy",
        "description": "Standard class attack scaling with physical potency.",
        "flags": [
          "Physical"
        ]
      }
    ],
    "passiveSkills": [
      {
        "name": "Hunter Guard",
        "ppCost": 1,
        "trigger": "Before Attacked",
        "description": "Grants medium guard and mitigates incoming damage by 50%."
      }
    ],
    "bestGrowthTypes": [
      "Offensive",
      "Keen"
    ],
    "synergiesWith": [
      "scarlett-bishop",
      "alain-high-lord"
    ],
    "recommendedEquipment": [
      "Royal Banner",
      "Carnelian Pendant"
    ],
    "overview": "Official class Hunter specializing in frontline physical damage and tactical maneuvers."
  },
  {
    "id": "knight",
    "image": "/images/characters/knight.png",
    "name": "Knight",
    "tier": "A+",
    "category": "Infantry",
    "role": "Physical DPS",
    "icon": "⚔️",
    "baseStats": {
      "hp": 90,
      "physAtk": 85,
      "magAtk": 40,
      "physDef": 55,
      "magDef": 45,
      "initiative": 35,
      "evasion": 20,
      "critRate": 10
    },
    "activeSkills": [
      {
        "name": "Knight Strike",
        "apCost": 1,
        "potency": 100,
        "target": "Single Enemy",
        "description": "Standard class attack scaling with physical potency.",
        "flags": [
          "Physical"
        ]
      }
    ],
    "passiveSkills": [
      {
        "name": "Knight Guard",
        "ppCost": 1,
        "trigger": "Before Attacked",
        "description": "Grants medium guard and mitigates incoming damage by 50%."
      }
    ],
    "bestGrowthTypes": [
      "Offensive",
      "Keen"
    ],
    "synergiesWith": [
      "scarlett-bishop",
      "alain-high-lord"
    ],
    "recommendedEquipment": [
      "Royal Banner",
      "Carnelian Pendant"
    ],
    "overview": "Official class Knight specializing in frontline physical damage and tactical maneuvers."
  },
  {
    "id": "landsknecht",
    "image": "/images/characters/landsknecht.png",
    "name": "Landsknecht",
    "tier": "A+",
    "category": "Infantry",
    "role": "Physical DPS",
    "icon": "⚔️",
    "baseStats": {
      "hp": 90,
      "physAtk": 85,
      "magAtk": 40,
      "physDef": 55,
      "magDef": 45,
      "initiative": 35,
      "evasion": 20,
      "critRate": 10
    },
    "activeSkills": [
      {
        "name": "Landsknecht Strike",
        "apCost": 1,
        "potency": 100,
        "target": "Single Enemy",
        "description": "Standard class attack scaling with physical potency.",
        "flags": [
          "Physical"
        ]
      }
    ],
    "passiveSkills": [
      {
        "name": "Landsknecht Guard",
        "ppCost": 1,
        "trigger": "Before Attacked",
        "description": "Grants medium guard and mitigates incoming damage by 50%."
      }
    ],
    "bestGrowthTypes": [
      "Offensive",
      "Keen"
    ],
    "synergiesWith": [
      "scarlett-bishop",
      "alain-high-lord"
    ],
    "recommendedEquipment": [
      "Royal Banner",
      "Carnelian Pendant"
    ],
    "overview": "Official class Landsknecht specializing in frontline physical damage and tactical maneuvers."
  },
  {
    "id": "legionnaire",
    "image": "/images/characters/legionnaire.png",
    "name": "Legionnaire",
    "tier": "A+",
    "category": "Infantry",
    "role": "Physical DPS",
    "icon": "⚔️",
    "baseStats": {
      "hp": 90,
      "physAtk": 85,
      "magAtk": 40,
      "physDef": 55,
      "magDef": 45,
      "initiative": 35,
      "evasion": 20,
      "critRate": 10
    },
    "activeSkills": [
      {
        "name": "Legionnaire Strike",
        "apCost": 1,
        "potency": 100,
        "target": "Single Enemy",
        "description": "Standard class attack scaling with physical potency.",
        "flags": [
          "Physical"
        ]
      }
    ],
    "passiveSkills": [
      {
        "name": "Legionnaire Guard",
        "ppCost": 1,
        "trigger": "Before Attacked",
        "description": "Grants medium guard and mitigates incoming damage by 50%."
      }
    ],
    "bestGrowthTypes": [
      "Offensive",
      "Keen"
    ],
    "synergiesWith": [
      "scarlett-bishop",
      "alain-high-lord"
    ],
    "recommendedEquipment": [
      "Royal Banner",
      "Carnelian Pendant"
    ],
    "overview": "Official class Legionnaire specializing in frontline physical damage and tactical maneuvers."
  },
  {
    "id": "lord",
    "image": "/images/characters/lord.png",
    "name": "Lord",
    "tier": "A+",
    "category": "Infantry",
    "role": "Physical DPS",
    "icon": "⚔️",
    "baseStats": {
      "hp": 90,
      "physAtk": 85,
      "magAtk": 40,
      "physDef": 55,
      "magDef": 45,
      "initiative": 35,
      "evasion": 20,
      "critRate": 10
    },
    "activeSkills": [
      {
        "name": "Lord Strike",
        "apCost": 1,
        "potency": 100,
        "target": "Single Enemy",
        "description": "Standard class attack scaling with physical potency.",
        "flags": [
          "Physical"
        ]
      }
    ],
    "passiveSkills": [
      {
        "name": "Lord Guard",
        "ppCost": 1,
        "trigger": "Before Attacked",
        "description": "Grants medium guard and mitigates incoming damage by 50%."
      }
    ],
    "bestGrowthTypes": [
      "Offensive",
      "Keen"
    ],
    "synergiesWith": [
      "scarlett-bishop",
      "alain-high-lord"
    ],
    "recommendedEquipment": [
      "Royal Banner",
      "Carnelian Pendant"
    ],
    "overview": "Official class Lord specializing in frontline physical damage and tactical maneuvers."
  },
  {
    "id": "necromancer",
    "image": "/images/characters/necromancer.png",
    "name": "Necromancer",
    "tier": "A+",
    "category": "Infantry",
    "role": "Physical DPS",
    "icon": "⚔️",
    "baseStats": {
      "hp": 90,
      "physAtk": 85,
      "magAtk": 40,
      "physDef": 55,
      "magDef": 45,
      "initiative": 35,
      "evasion": 20,
      "critRate": 10
    },
    "activeSkills": [
      {
        "name": "Necromancer Strike",
        "apCost": 1,
        "potency": 100,
        "target": "Single Enemy",
        "description": "Standard class attack scaling with physical potency.",
        "flags": [
          "Physical"
        ]
      }
    ],
    "passiveSkills": [
      {
        "name": "Necromancer Guard",
        "ppCost": 1,
        "trigger": "Before Attacked",
        "description": "Grants medium guard and mitigates incoming damage by 50%."
      }
    ],
    "bestGrowthTypes": [
      "Offensive",
      "Keen"
    ],
    "synergiesWith": [
      "scarlett-bishop",
      "alain-high-lord"
    ],
    "recommendedEquipment": [
      "Royal Banner",
      "Carnelian Pendant"
    ],
    "overview": "Official class Necromancer specializing in frontline physical damage and tactical maneuvers."
  },
  {
    "id": "overlord",
    "image": "/images/characters/overlord.png",
    "name": "Overlord",
    "tier": "A+",
    "category": "Infantry",
    "role": "Physical DPS",
    "icon": "⚔️",
    "baseStats": {
      "hp": 90,
      "physAtk": 85,
      "magAtk": 40,
      "physDef": 55,
      "magDef": 45,
      "initiative": 35,
      "evasion": 20,
      "critRate": 10
    },
    "activeSkills": [
      {
        "name": "Overlord Strike",
        "apCost": 1,
        "potency": 100,
        "target": "Single Enemy",
        "description": "Standard class attack scaling with physical potency.",
        "flags": [
          "Physical"
        ]
      }
    ],
    "passiveSkills": [
      {
        "name": "Overlord Guard",
        "ppCost": 1,
        "trigger": "Before Attacked",
        "description": "Grants medium guard and mitigates incoming damage by 50%."
      }
    ],
    "bestGrowthTypes": [
      "Offensive",
      "Keen"
    ],
    "synergiesWith": [
      "scarlett-bishop",
      "alain-high-lord"
    ],
    "recommendedEquipment": [
      "Royal Banner",
      "Carnelian Pendant"
    ],
    "overview": "Official class Overlord specializing in frontline physical damage and tactical maneuvers."
  },
  {
    "id": "paladin",
    "image": "/images/characters/paladin.png",
    "name": "Paladin",
    "tier": "A+",
    "category": "Infantry",
    "role": "Physical DPS",
    "icon": "⚔️",
    "baseStats": {
      "hp": 90,
      "physAtk": 85,
      "magAtk": 40,
      "physDef": 55,
      "magDef": 45,
      "initiative": 35,
      "evasion": 20,
      "critRate": 10
    },
    "activeSkills": [
      {
        "name": "Paladin Strike",
        "apCost": 1,
        "potency": 100,
        "target": "Single Enemy",
        "description": "Standard class attack scaling with physical potency.",
        "flags": [
          "Physical"
        ]
      }
    ],
    "passiveSkills": [
      {
        "name": "Paladin Guard",
        "ppCost": 1,
        "trigger": "Before Attacked",
        "description": "Grants medium guard and mitigates incoming damage by 50%."
      }
    ],
    "bestGrowthTypes": [
      "Offensive",
      "Keen"
    ],
    "synergiesWith": [
      "scarlett-bishop",
      "alain-high-lord"
    ],
    "recommendedEquipment": [
      "Royal Banner",
      "Carnelian Pendant"
    ],
    "overview": "Official class Paladin specializing in frontline physical damage and tactical maneuvers."
  },
  {
    "id": "priestess",
    "image": "/images/characters/priestess.png",
    "name": "Priestess",
    "tier": "A+",
    "category": "Infantry",
    "role": "Physical DPS",
    "icon": "⚔️",
    "baseStats": {
      "hp": 90,
      "physAtk": 85,
      "magAtk": 40,
      "physDef": 55,
      "magDef": 45,
      "initiative": 35,
      "evasion": 20,
      "critRate": 10
    },
    "activeSkills": [
      {
        "name": "Priestess Strike",
        "apCost": 1,
        "potency": 100,
        "target": "Single Enemy",
        "description": "Standard class attack scaling with physical potency.",
        "flags": [
          "Physical"
        ]
      }
    ],
    "passiveSkills": [
      {
        "name": "Priestess Guard",
        "ppCost": 1,
        "trigger": "Before Attacked",
        "description": "Grants medium guard and mitigates incoming damage by 50%."
      }
    ],
    "bestGrowthTypes": [
      "Offensive",
      "Keen"
    ],
    "synergiesWith": [
      "scarlett-bishop",
      "alain-high-lord"
    ],
    "recommendedEquipment": [
      "Royal Banner",
      "Carnelian Pendant"
    ],
    "overview": "Official class Priestess specializing in frontline physical damage and tactical maneuvers."
  },
  {
    "id": "prince",
    "image": "/images/characters/prince.png",
    "name": "Prince",
    "tier": "A+",
    "category": "Infantry",
    "role": "Physical DPS",
    "icon": "⚔️",
    "baseStats": {
      "hp": 90,
      "physAtk": 85,
      "magAtk": 40,
      "physDef": 55,
      "magDef": 45,
      "initiative": 35,
      "evasion": 20,
      "critRate": 10
    },
    "activeSkills": [
      {
        "name": "Prince Strike",
        "apCost": 1,
        "potency": 100,
        "target": "Single Enemy",
        "description": "Standard class attack scaling with physical potency.",
        "flags": [
          "Physical"
        ]
      }
    ],
    "passiveSkills": [
      {
        "name": "Prince Guard",
        "ppCost": 1,
        "trigger": "Before Attacked",
        "description": "Grants medium guard and mitigates incoming damage by 50%."
      }
    ],
    "bestGrowthTypes": [
      "Offensive",
      "Keen"
    ],
    "synergiesWith": [
      "scarlett-bishop",
      "alain-high-lord"
    ],
    "recommendedEquipment": [
      "Royal Banner",
      "Carnelian Pendant"
    ],
    "overview": "Official class Prince specializing in frontline physical damage and tactical maneuvers."
  },
  {
    "id": "radiant-knight",
    "image": "/images/characters/radiant-knight.png",
    "name": "Radiant Knight",
    "tier": "A+",
    "category": "Infantry",
    "role": "Physical DPS",
    "icon": "⚔️",
    "baseStats": {
      "hp": 90,
      "physAtk": 85,
      "magAtk": 40,
      "physDef": 55,
      "magDef": 45,
      "initiative": 35,
      "evasion": 20,
      "critRate": 10
    },
    "activeSkills": [
      {
        "name": "Radiant Knight Strike",
        "apCost": 1,
        "potency": 100,
        "target": "Single Enemy",
        "description": "Standard class attack scaling with physical potency.",
        "flags": [
          "Physical"
        ]
      }
    ],
    "passiveSkills": [
      {
        "name": "Radiant Knight Guard",
        "ppCost": 1,
        "trigger": "Before Attacked",
        "description": "Grants medium guard and mitigates incoming damage by 50%."
      }
    ],
    "bestGrowthTypes": [
      "Offensive",
      "Keen"
    ],
    "synergiesWith": [
      "scarlett-bishop",
      "alain-high-lord"
    ],
    "recommendedEquipment": [
      "Royal Banner",
      "Carnelian Pendant"
    ],
    "overview": "Official class Radiant Knight specializing in frontline physical damage and tactical maneuvers."
  },
  {
    "id": "rogue",
    "image": "/images/characters/rogue.png",
    "name": "Rogue",
    "tier": "A+",
    "category": "Infantry",
    "role": "Physical DPS",
    "icon": "⚔️",
    "baseStats": {
      "hp": 90,
      "physAtk": 85,
      "magAtk": 40,
      "physDef": 55,
      "magDef": 45,
      "initiative": 35,
      "evasion": 20,
      "critRate": 10
    },
    "activeSkills": [
      {
        "name": "Rogue Strike",
        "apCost": 1,
        "potency": 100,
        "target": "Single Enemy",
        "description": "Standard class attack scaling with physical potency.",
        "flags": [
          "Physical"
        ]
      }
    ],
    "passiveSkills": [
      {
        "name": "Rogue Guard",
        "ppCost": 1,
        "trigger": "Before Attacked",
        "description": "Grants medium guard and mitigates incoming damage by 50%."
      }
    ],
    "bestGrowthTypes": [
      "Offensive",
      "Keen"
    ],
    "synergiesWith": [
      "scarlett-bishop",
      "alain-high-lord"
    ],
    "recommendedEquipment": [
      "Royal Banner",
      "Carnelian Pendant"
    ],
    "overview": "Official class Rogue specializing in frontline physical damage and tactical maneuvers."
  },
  {
    "id": "sainted-knight",
    "image": "/images/characters/sainted-knight.png",
    "name": "Sainted Knight",
    "tier": "A+",
    "category": "Infantry",
    "role": "Physical DPS",
    "icon": "⚔️",
    "baseStats": {
      "hp": 90,
      "physAtk": 85,
      "magAtk": 40,
      "physDef": 55,
      "magDef": 45,
      "initiative": 35,
      "evasion": 20,
      "critRate": 10
    },
    "activeSkills": [
      {
        "name": "Sainted Knight Strike",
        "apCost": 1,
        "potency": 100,
        "target": "Single Enemy",
        "description": "Standard class attack scaling with physical potency.",
        "flags": [
          "Physical"
        ]
      }
    ],
    "passiveSkills": [
      {
        "name": "Sainted Knight Guard",
        "ppCost": 1,
        "trigger": "Before Attacked",
        "description": "Grants medium guard and mitigates incoming damage by 50%."
      }
    ],
    "bestGrowthTypes": [
      "Offensive",
      "Keen"
    ],
    "synergiesWith": [
      "scarlett-bishop",
      "alain-high-lord"
    ],
    "recommendedEquipment": [
      "Royal Banner",
      "Carnelian Pendant"
    ],
    "overview": "Official class Sainted Knight specializing in frontline physical damage and tactical maneuvers."
  },
  {
    "id": "sellsword",
    "image": "/images/characters/sellsword.png",
    "name": "Sellsword",
    "tier": "A+",
    "category": "Infantry",
    "role": "Physical DPS",
    "icon": "⚔️",
    "baseStats": {
      "hp": 90,
      "physAtk": 85,
      "magAtk": 40,
      "physDef": 55,
      "magDef": 45,
      "initiative": 35,
      "evasion": 20,
      "critRate": 10
    },
    "activeSkills": [
      {
        "name": "Sellsword Strike",
        "apCost": 1,
        "potency": 100,
        "target": "Single Enemy",
        "description": "Standard class attack scaling with physical potency.",
        "flags": [
          "Physical"
        ]
      }
    ],
    "passiveSkills": [
      {
        "name": "Sellsword Guard",
        "ppCost": 1,
        "trigger": "Before Attacked",
        "description": "Grants medium guard and mitigates incoming damage by 50%."
      }
    ],
    "bestGrowthTypes": [
      "Offensive",
      "Keen"
    ],
    "synergiesWith": [
      "scarlett-bishop",
      "alain-high-lord"
    ],
    "recommendedEquipment": [
      "Royal Banner",
      "Carnelian Pendant"
    ],
    "overview": "Official class Sellsword specializing in frontline physical damage and tactical maneuvers."
  },
  {
    "id": "sergeant",
    "image": "/images/characters/sergeant.png",
    "name": "Sergeant",
    "tier": "A+",
    "category": "Infantry",
    "role": "Physical DPS",
    "icon": "⚔️",
    "baseStats": {
      "hp": 90,
      "physAtk": 85,
      "magAtk": 40,
      "physDef": 55,
      "magDef": 45,
      "initiative": 35,
      "evasion": 20,
      "critRate": 10
    },
    "activeSkills": [
      {
        "name": "Sergeant Strike",
        "apCost": 1,
        "potency": 100,
        "target": "Single Enemy",
        "description": "Standard class attack scaling with physical potency.",
        "flags": [
          "Physical"
        ]
      }
    ],
    "passiveSkills": [
      {
        "name": "Sergeant Guard",
        "ppCost": 1,
        "trigger": "Before Attacked",
        "description": "Grants medium guard and mitigates incoming damage by 50%."
      }
    ],
    "bestGrowthTypes": [
      "Offensive",
      "Keen"
    ],
    "synergiesWith": [
      "scarlett-bishop",
      "alain-high-lord"
    ],
    "recommendedEquipment": [
      "Royal Banner",
      "Carnelian Pendant"
    ],
    "overview": "Official class Sergeant specializing in frontline physical damage and tactical maneuvers."
  },
  {
    "id": "shaman",
    "image": "/images/characters/shaman.png",
    "name": "Shaman",
    "tier": "A+",
    "category": "Infantry",
    "role": "Physical DPS",
    "icon": "⚔️",
    "baseStats": {
      "hp": 90,
      "physAtk": 85,
      "magAtk": 40,
      "physDef": 55,
      "magDef": 45,
      "initiative": 35,
      "evasion": 20,
      "critRate": 10
    },
    "activeSkills": [
      {
        "name": "Shaman Strike",
        "apCost": 1,
        "potency": 100,
        "target": "Single Enemy",
        "description": "Standard class attack scaling with physical potency.",
        "flags": [
          "Physical"
        ]
      }
    ],
    "passiveSkills": [
      {
        "name": "Shaman Guard",
        "ppCost": 1,
        "trigger": "Before Attacked",
        "description": "Grants medium guard and mitigates incoming damage by 50%."
      }
    ],
    "bestGrowthTypes": [
      "Offensive",
      "Keen"
    ],
    "synergiesWith": [
      "scarlett-bishop",
      "alain-high-lord"
    ],
    "recommendedEquipment": [
      "Royal Banner",
      "Carnelian Pendant"
    ],
    "overview": "Official class Shaman specializing in frontline physical damage and tactical maneuvers."
  },
  {
    "id": "shieldshooter",
    "image": "/images/characters/shieldshooter.png",
    "name": "Shieldshooter",
    "tier": "A+",
    "category": "Infantry",
    "role": "Physical DPS",
    "icon": "⚔️",
    "baseStats": {
      "hp": 90,
      "physAtk": 85,
      "magAtk": 40,
      "physDef": 55,
      "magDef": 45,
      "initiative": 35,
      "evasion": 20,
      "critRate": 10
    },
    "activeSkills": [
      {
        "name": "Shieldshooter Strike",
        "apCost": 1,
        "potency": 100,
        "target": "Single Enemy",
        "description": "Standard class attack scaling with physical potency.",
        "flags": [
          "Physical"
        ]
      }
    ],
    "passiveSkills": [
      {
        "name": "Shieldshooter Guard",
        "ppCost": 1,
        "trigger": "Before Attacked",
        "description": "Grants medium guard and mitigates incoming damage by 50%."
      }
    ],
    "bestGrowthTypes": [
      "Offensive",
      "Keen"
    ],
    "synergiesWith": [
      "scarlett-bishop",
      "alain-high-lord"
    ],
    "recommendedEquipment": [
      "Royal Banner",
      "Carnelian Pendant"
    ],
    "overview": "Official class Shieldshooter specializing in frontline physical damage and tactical maneuvers."
  },
  {
    "id": "sniper",
    "image": "/images/characters/sniper.png",
    "name": "Sniper",
    "tier": "A+",
    "category": "Infantry",
    "role": "Physical DPS",
    "icon": "⚔️",
    "baseStats": {
      "hp": 90,
      "physAtk": 85,
      "magAtk": 40,
      "physDef": 55,
      "magDef": 45,
      "initiative": 35,
      "evasion": 20,
      "critRate": 10
    },
    "activeSkills": [
      {
        "name": "Sniper Strike",
        "apCost": 1,
        "potency": 100,
        "target": "Single Enemy",
        "description": "Standard class attack scaling with physical potency.",
        "flags": [
          "Physical"
        ]
      }
    ],
    "passiveSkills": [
      {
        "name": "Sniper Guard",
        "ppCost": 1,
        "trigger": "Before Attacked",
        "description": "Grants medium guard and mitigates incoming damage by 50%."
      }
    ],
    "bestGrowthTypes": [
      "Offensive",
      "Keen"
    ],
    "synergiesWith": [
      "scarlett-bishop",
      "alain-high-lord"
    ],
    "recommendedEquipment": [
      "Royal Banner",
      "Carnelian Pendant"
    ],
    "overview": "Official class Sniper specializing in frontline physical damage and tactical maneuvers."
  },
  {
    "id": "snow-ranger",
    "image": "/images/characters/snow-ranger.png",
    "name": "Snow Ranger",
    "tier": "A+",
    "category": "Infantry",
    "role": "Physical DPS",
    "icon": "⚔️",
    "baseStats": {
      "hp": 90,
      "physAtk": 85,
      "magAtk": 40,
      "physDef": 55,
      "magDef": 45,
      "initiative": 35,
      "evasion": 20,
      "critRate": 10
    },
    "activeSkills": [
      {
        "name": "Snow Ranger Strike",
        "apCost": 1,
        "potency": 100,
        "target": "Single Enemy",
        "description": "Standard class attack scaling with physical potency.",
        "flags": [
          "Physical"
        ]
      }
    ],
    "passiveSkills": [
      {
        "name": "Snow Ranger Guard",
        "ppCost": 1,
        "trigger": "Before Attacked",
        "description": "Grants medium guard and mitigates incoming damage by 50%."
      }
    ],
    "bestGrowthTypes": [
      "Offensive",
      "Keen"
    ],
    "synergiesWith": [
      "scarlett-bishop",
      "alain-high-lord"
    ],
    "recommendedEquipment": [
      "Royal Banner",
      "Carnelian Pendant"
    ],
    "overview": "Official class Snow Ranger specializing in frontline physical damage and tactical maneuvers."
  },
  {
    "id": "soldier",
    "image": "/images/characters/soldier.png",
    "name": "Soldier",
    "tier": "A+",
    "category": "Infantry",
    "role": "Physical DPS",
    "icon": "⚔️",
    "baseStats": {
      "hp": 90,
      "physAtk": 85,
      "magAtk": 40,
      "physDef": 55,
      "magDef": 45,
      "initiative": 35,
      "evasion": 20,
      "critRate": 10
    },
    "activeSkills": [
      {
        "name": "Soldier Strike",
        "apCost": 1,
        "potency": 100,
        "target": "Single Enemy",
        "description": "Standard class attack scaling with physical potency.",
        "flags": [
          "Physical"
        ]
      }
    ],
    "passiveSkills": [
      {
        "name": "Soldier Guard",
        "ppCost": 1,
        "trigger": "Before Attacked",
        "description": "Grants medium guard and mitigates incoming damage by 50%."
      }
    ],
    "bestGrowthTypes": [
      "Offensive",
      "Keen"
    ],
    "synergiesWith": [
      "scarlett-bishop",
      "alain-high-lord"
    ],
    "recommendedEquipment": [
      "Royal Banner",
      "Carnelian Pendant"
    ],
    "overview": "Official class Soldier specializing in frontline physical damage and tactical maneuvers."
  },
  {
    "id": "sorceress",
    "image": "/images/characters/sorceress.png",
    "name": "Sorceress",
    "tier": "A+",
    "category": "Infantry",
    "role": "Physical DPS",
    "icon": "⚔️",
    "baseStats": {
      "hp": 90,
      "physAtk": 85,
      "magAtk": 40,
      "physDef": 55,
      "magDef": 45,
      "initiative": 35,
      "evasion": 20,
      "critRate": 10
    },
    "activeSkills": [
      {
        "name": "Sorceress Strike",
        "apCost": 1,
        "potency": 100,
        "target": "Single Enemy",
        "description": "Standard class attack scaling with physical potency.",
        "flags": [
          "Physical"
        ]
      }
    ],
    "passiveSkills": [
      {
        "name": "Sorceress Guard",
        "ppCost": 1,
        "trigger": "Before Attacked",
        "description": "Grants medium guard and mitigates incoming damage by 50%."
      }
    ],
    "bestGrowthTypes": [
      "Offensive",
      "Keen"
    ],
    "synergiesWith": [
      "scarlett-bishop",
      "alain-high-lord"
    ],
    "recommendedEquipment": [
      "Royal Banner",
      "Carnelian Pendant"
    ],
    "overview": "Official class Sorceress specializing in frontline physical damage and tactical maneuvers."
  },
  {
    "id": "swordfighter",
    "image": "/images/characters/swordfighter.png",
    "name": "Swordfighter",
    "tier": "A+",
    "category": "Infantry",
    "role": "Physical DPS",
    "icon": "⚔️",
    "baseStats": {
      "hp": 90,
      "physAtk": 85,
      "magAtk": 40,
      "physDef": 55,
      "magDef": 45,
      "initiative": 35,
      "evasion": 20,
      "critRate": 10
    },
    "activeSkills": [
      {
        "name": "Swordfighter Strike",
        "apCost": 1,
        "potency": 100,
        "target": "Single Enemy",
        "description": "Standard class attack scaling with physical potency.",
        "flags": [
          "Physical"
        ]
      }
    ],
    "passiveSkills": [
      {
        "name": "Swordfighter Guard",
        "ppCost": 1,
        "trigger": "Before Attacked",
        "description": "Grants medium guard and mitigates incoming damage by 50%."
      }
    ],
    "bestGrowthTypes": [
      "Offensive",
      "Keen"
    ],
    "synergiesWith": [
      "scarlett-bishop",
      "alain-high-lord"
    ],
    "recommendedEquipment": [
      "Royal Banner",
      "Carnelian Pendant"
    ],
    "overview": "Official class Swordfighter specializing in frontline physical damage and tactical maneuvers."
  },
  {
    "id": "swordmaster",
    "image": "/images/characters/swordmaster.png",
    "name": "Swordmaster",
    "tier": "A+",
    "category": "Infantry",
    "role": "Physical DPS",
    "icon": "⚔️",
    "baseStats": {
      "hp": 90,
      "physAtk": 85,
      "magAtk": 40,
      "physDef": 55,
      "magDef": 45,
      "initiative": 35,
      "evasion": 20,
      "critRate": 10
    },
    "activeSkills": [
      {
        "name": "Swordmaster Strike",
        "apCost": 1,
        "potency": 100,
        "target": "Single Enemy",
        "description": "Standard class attack scaling with physical potency.",
        "flags": [
          "Physical"
        ]
      }
    ],
    "passiveSkills": [
      {
        "name": "Swordmaster Guard",
        "ppCost": 1,
        "trigger": "Before Attacked",
        "description": "Grants medium guard and mitigates incoming damage by 50%."
      }
    ],
    "bestGrowthTypes": [
      "Offensive",
      "Keen"
    ],
    "synergiesWith": [
      "scarlett-bishop",
      "alain-high-lord"
    ],
    "recommendedEquipment": [
      "Royal Banner",
      "Carnelian Pendant"
    ],
    "overview": "Official class Swordmaster specializing in frontline physical damage and tactical maneuvers."
  },
  {
    "id": "thief",
    "image": "/images/characters/thief.png",
    "name": "Thief",
    "tier": "A+",
    "category": "Infantry",
    "role": "Physical DPS",
    "icon": "⚔️",
    "baseStats": {
      "hp": 90,
      "physAtk": 85,
      "magAtk": 40,
      "physDef": 55,
      "magDef": 45,
      "initiative": 35,
      "evasion": 20,
      "critRate": 10
    },
    "activeSkills": [
      {
        "name": "Thief Strike",
        "apCost": 1,
        "potency": 100,
        "target": "Single Enemy",
        "description": "Standard class attack scaling with physical potency.",
        "flags": [
          "Physical"
        ]
      }
    ],
    "passiveSkills": [
      {
        "name": "Thief Guard",
        "ppCost": 1,
        "trigger": "Before Attacked",
        "description": "Grants medium guard and mitigates incoming damage by 50%."
      }
    ],
    "bestGrowthTypes": [
      "Offensive",
      "Keen"
    ],
    "synergiesWith": [
      "scarlett-bishop",
      "alain-high-lord"
    ],
    "recommendedEquipment": [
      "Royal Banner",
      "Carnelian Pendant"
    ],
    "overview": "Official class Thief specializing in frontline physical damage and tactical maneuvers."
  },
  {
    "id": "valkyria",
    "image": "/images/characters/valkyria.png",
    "name": "Valkyria",
    "tier": "A+",
    "category": "Infantry",
    "role": "Physical DPS",
    "icon": "⚔️",
    "baseStats": {
      "hp": 90,
      "physAtk": 85,
      "magAtk": 40,
      "physDef": 55,
      "magDef": 45,
      "initiative": 35,
      "evasion": 20,
      "critRate": 10
    },
    "activeSkills": [
      {
        "name": "Valkyria Strike",
        "apCost": 1,
        "potency": 100,
        "target": "Single Enemy",
        "description": "Standard class attack scaling with physical potency.",
        "flags": [
          "Physical"
        ]
      }
    ],
    "passiveSkills": [
      {
        "name": "Valkyria Guard",
        "ppCost": 1,
        "trigger": "Before Attacked",
        "description": "Grants medium guard and mitigates incoming damage by 50%."
      }
    ],
    "bestGrowthTypes": [
      "Offensive",
      "Keen"
    ],
    "synergiesWith": [
      "scarlett-bishop",
      "alain-high-lord"
    ],
    "recommendedEquipment": [
      "Royal Banner",
      "Carnelian Pendant"
    ],
    "overview": "Official class Valkyria specializing in frontline physical damage and tactical maneuvers."
  },
  {
    "id": "vanguard",
    "image": "/images/characters/vanguard.png",
    "name": "Vanguard",
    "tier": "A+",
    "category": "Infantry",
    "role": "Physical DPS",
    "icon": "⚔️",
    "baseStats": {
      "hp": 90,
      "physAtk": 85,
      "magAtk": 40,
      "physDef": 55,
      "magDef": 45,
      "initiative": 35,
      "evasion": 20,
      "critRate": 10
    },
    "activeSkills": [
      {
        "name": "Vanguard Strike",
        "apCost": 1,
        "potency": 100,
        "target": "Single Enemy",
        "description": "Standard class attack scaling with physical potency.",
        "flags": [
          "Physical"
        ]
      }
    ],
    "passiveSkills": [
      {
        "name": "Vanguard Guard",
        "ppCost": 1,
        "trigger": "Before Attacked",
        "description": "Grants medium guard and mitigates incoming damage by 50%."
      }
    ],
    "bestGrowthTypes": [
      "Offensive",
      "Keen"
    ],
    "synergiesWith": [
      "scarlett-bishop",
      "alain-high-lord"
    ],
    "recommendedEquipment": [
      "Royal Banner",
      "Carnelian Pendant"
    ],
    "overview": "Official class Vanguard specializing in frontline physical damage and tactical maneuvers."
  },
  {
    "id": "viking",
    "image": "/images/characters/viking.png",
    "name": "Viking",
    "tier": "A+",
    "category": "Infantry",
    "role": "Physical DPS",
    "icon": "⚔️",
    "baseStats": {
      "hp": 90,
      "physAtk": 85,
      "magAtk": 40,
      "physDef": 55,
      "magDef": 45,
      "initiative": 35,
      "evasion": 20,
      "critRate": 10
    },
    "activeSkills": [
      {
        "name": "Viking Strike",
        "apCost": 1,
        "potency": 100,
        "target": "Single Enemy",
        "description": "Standard class attack scaling with physical potency.",
        "flags": [
          "Physical"
        ]
      }
    ],
    "passiveSkills": [
      {
        "name": "Viking Guard",
        "ppCost": 1,
        "trigger": "Before Attacked",
        "description": "Grants medium guard and mitigates incoming damage by 50%."
      }
    ],
    "bestGrowthTypes": [
      "Offensive",
      "Keen"
    ],
    "synergiesWith": [
      "scarlett-bishop",
      "alain-high-lord"
    ],
    "recommendedEquipment": [
      "Royal Banner",
      "Carnelian Pendant"
    ],
    "overview": "Official class Viking specializing in frontline physical damage and tactical maneuvers."
  },
  {
    "id": "warlock",
    "image": "/images/characters/warlock.png",
    "name": "Warlock",
    "tier": "A+",
    "category": "Infantry",
    "role": "Physical DPS",
    "icon": "⚔️",
    "baseStats": {
      "hp": 90,
      "physAtk": 85,
      "magAtk": 40,
      "physDef": 55,
      "magDef": 45,
      "initiative": 35,
      "evasion": 20,
      "critRate": 10
    },
    "activeSkills": [
      {
        "name": "Warlock Strike",
        "apCost": 1,
        "potency": 100,
        "target": "Single Enemy",
        "description": "Standard class attack scaling with physical potency.",
        "flags": [
          "Physical"
        ]
      }
    ],
    "passiveSkills": [
      {
        "name": "Warlock Guard",
        "ppCost": 1,
        "trigger": "Before Attacked",
        "description": "Grants medium guard and mitigates incoming damage by 50%."
      }
    ],
    "bestGrowthTypes": [
      "Offensive",
      "Keen"
    ],
    "synergiesWith": [
      "scarlett-bishop",
      "alain-high-lord"
    ],
    "recommendedEquipment": [
      "Royal Banner",
      "Carnelian Pendant"
    ],
    "overview": "Official class Warlock specializing in frontline physical damage and tactical maneuvers."
  },
  {
    "id": "warrior",
    "image": "/images/characters/warrior.png",
    "name": "Warrior",
    "tier": "A+",
    "category": "Infantry",
    "role": "Physical DPS",
    "icon": "⚔️",
    "baseStats": {
      "hp": 90,
      "physAtk": 85,
      "magAtk": 40,
      "physDef": 55,
      "magDef": 45,
      "initiative": 35,
      "evasion": 20,
      "critRate": 10
    },
    "activeSkills": [
      {
        "name": "Warrior Strike",
        "apCost": 1,
        "potency": 100,
        "target": "Single Enemy",
        "description": "Standard class attack scaling with physical potency.",
        "flags": [
          "Physical"
        ]
      }
    ],
    "passiveSkills": [
      {
        "name": "Warrior Guard",
        "ppCost": 1,
        "trigger": "Before Attacked",
        "description": "Grants medium guard and mitigates incoming damage by 50%."
      }
    ],
    "bestGrowthTypes": [
      "Offensive",
      "Keen"
    ],
    "synergiesWith": [
      "scarlett-bishop",
      "alain-high-lord"
    ],
    "recommendedEquipment": [
      "Royal Banner",
      "Carnelian Pendant"
    ],
    "overview": "Official class Warrior specializing in frontline physical damage and tactical maneuvers."
  },
  {
    "id": "werebear",
    "image": "/images/characters/werebear.png",
    "name": "Werebear",
    "tier": "A+",
    "category": "Infantry",
    "role": "Physical DPS",
    "icon": "⚔️",
    "baseStats": {
      "hp": 90,
      "physAtk": 85,
      "magAtk": 40,
      "physDef": 55,
      "magDef": 45,
      "initiative": 35,
      "evasion": 20,
      "critRate": 10
    },
    "activeSkills": [
      {
        "name": "Werebear Strike",
        "apCost": 1,
        "potency": 100,
        "target": "Single Enemy",
        "description": "Standard class attack scaling with physical potency.",
        "flags": [
          "Physical"
        ]
      }
    ],
    "passiveSkills": [
      {
        "name": "Werebear Guard",
        "ppCost": 1,
        "trigger": "Before Attacked",
        "description": "Grants medium guard and mitigates incoming damage by 50%."
      }
    ],
    "bestGrowthTypes": [
      "Offensive",
      "Keen"
    ],
    "synergiesWith": [
      "scarlett-bishop",
      "alain-high-lord"
    ],
    "recommendedEquipment": [
      "Royal Banner",
      "Carnelian Pendant"
    ],
    "overview": "Official class Werebear specializing in frontline physical damage and tactical maneuvers."
  },
  {
    "id": "werefox",
    "image": "/images/characters/werefox.png",
    "name": "Werefox",
    "tier": "A+",
    "category": "Infantry",
    "role": "Physical DPS",
    "icon": "⚔️",
    "baseStats": {
      "hp": 90,
      "physAtk": 85,
      "magAtk": 40,
      "physDef": 55,
      "magDef": 45,
      "initiative": 35,
      "evasion": 20,
      "critRate": 10
    },
    "activeSkills": [
      {
        "name": "Werefox Strike",
        "apCost": 1,
        "potency": 100,
        "target": "Single Enemy",
        "description": "Standard class attack scaling with physical potency.",
        "flags": [
          "Physical"
        ]
      }
    ],
    "passiveSkills": [
      {
        "name": "Werefox Guard",
        "ppCost": 1,
        "trigger": "Before Attacked",
        "description": "Grants medium guard and mitigates incoming damage by 50%."
      }
    ],
    "bestGrowthTypes": [
      "Offensive",
      "Keen"
    ],
    "synergiesWith": [
      "scarlett-bishop",
      "alain-high-lord"
    ],
    "recommendedEquipment": [
      "Royal Banner",
      "Carnelian Pendant"
    ],
    "overview": "Official class Werefox specializing in frontline physical damage and tactical maneuvers."
  },
  {
    "id": "werelion",
    "image": "/images/characters/werelion.png",
    "name": "Werelion",
    "tier": "A+",
    "category": "Infantry",
    "role": "Physical DPS",
    "icon": "⚔️",
    "baseStats": {
      "hp": 90,
      "physAtk": 85,
      "magAtk": 40,
      "physDef": 55,
      "magDef": 45,
      "initiative": 35,
      "evasion": 20,
      "critRate": 10
    },
    "activeSkills": [
      {
        "name": "Werelion Strike",
        "apCost": 1,
        "potency": 100,
        "target": "Single Enemy",
        "description": "Standard class attack scaling with physical potency.",
        "flags": [
          "Physical"
        ]
      }
    ],
    "passiveSkills": [
      {
        "name": "Werelion Guard",
        "ppCost": 1,
        "trigger": "Before Attacked",
        "description": "Grants medium guard and mitigates incoming damage by 50%."
      }
    ],
    "bestGrowthTypes": [
      "Offensive",
      "Keen"
    ],
    "synergiesWith": [
      "scarlett-bishop",
      "alain-high-lord"
    ],
    "recommendedEquipment": [
      "Royal Banner",
      "Carnelian Pendant"
    ],
    "overview": "Official class Werelion specializing in frontline physical damage and tactical maneuvers."
  },
  {
    "id": "wereowl",
    "image": "/images/characters/wereowl.png",
    "name": "Wereowl",
    "tier": "A+",
    "category": "Infantry",
    "role": "Physical DPS",
    "icon": "⚔️",
    "baseStats": {
      "hp": 90,
      "physAtk": 85,
      "magAtk": 40,
      "physDef": 55,
      "magDef": 45,
      "initiative": 35,
      "evasion": 20,
      "critRate": 10
    },
    "activeSkills": [
      {
        "name": "Wereowl Strike",
        "apCost": 1,
        "potency": 100,
        "target": "Single Enemy",
        "description": "Standard class attack scaling with physical potency.",
        "flags": [
          "Physical"
        ]
      }
    ],
    "passiveSkills": [
      {
        "name": "Wereowl Guard",
        "ppCost": 1,
        "trigger": "Before Attacked",
        "description": "Grants medium guard and mitigates incoming damage by 50%."
      }
    ],
    "bestGrowthTypes": [
      "Offensive",
      "Keen"
    ],
    "synergiesWith": [
      "scarlett-bishop",
      "alain-high-lord"
    ],
    "recommendedEquipment": [
      "Royal Banner",
      "Carnelian Pendant"
    ],
    "overview": "Official class Wereowl specializing in frontline physical damage and tactical maneuvers."
  },
  {
    "id": "werewolf",
    "image": "/images/characters/werewolf.png",
    "name": "Werewolf",
    "tier": "A+",
    "category": "Infantry",
    "role": "Physical DPS",
    "icon": "⚔️",
    "baseStats": {
      "hp": 90,
      "physAtk": 85,
      "magAtk": 40,
      "physDef": 55,
      "magDef": 45,
      "initiative": 35,
      "evasion": 20,
      "critRate": 10
    },
    "activeSkills": [
      {
        "name": "Werewolf Strike",
        "apCost": 1,
        "potency": 100,
        "target": "Single Enemy",
        "description": "Standard class attack scaling with physical potency.",
        "flags": [
          "Physical"
        ]
      }
    ],
    "passiveSkills": [
      {
        "name": "Werewolf Guard",
        "ppCost": 1,
        "trigger": "Before Attacked",
        "description": "Grants medium guard and mitigates incoming damage by 50%."
      }
    ],
    "bestGrowthTypes": [
      "Offensive",
      "Keen"
    ],
    "synergiesWith": [
      "scarlett-bishop",
      "alain-high-lord"
    ],
    "recommendedEquipment": [
      "Royal Banner",
      "Carnelian Pendant"
    ],
    "overview": "Official class Werewolf specializing in frontline physical damage and tactical maneuvers."
  },
  {
    "id": "witch",
    "image": "/images/characters/witch.png",
    "name": "Witch",
    "tier": "A+",
    "category": "Infantry",
    "role": "Physical DPS",
    "icon": "⚔️",
    "baseStats": {
      "hp": 90,
      "physAtk": 85,
      "magAtk": 40,
      "physDef": 55,
      "magDef": 45,
      "initiative": 35,
      "evasion": 20,
      "critRate": 10
    },
    "activeSkills": [
      {
        "name": "Witch Strike",
        "apCost": 1,
        "potency": 100,
        "target": "Single Enemy",
        "description": "Standard class attack scaling with physical potency.",
        "flags": [
          "Physical"
        ]
      }
    ],
    "passiveSkills": [
      {
        "name": "Witch Guard",
        "ppCost": 1,
        "trigger": "Before Attacked",
        "description": "Grants medium guard and mitigates incoming damage by 50%."
      }
    ],
    "bestGrowthTypes": [
      "Offensive",
      "Keen"
    ],
    "synergiesWith": [
      "scarlett-bishop",
      "alain-high-lord"
    ],
    "recommendedEquipment": [
      "Royal Banner",
      "Carnelian Pendant"
    ],
    "overview": "Official class Witch specializing in frontline physical damage and tactical maneuvers."
  },
  {
    "id": "wizard",
    "image": "/images/characters/wizard.png",
    "name": "Wizard",
    "tier": "A+",
    "category": "Infantry",
    "role": "Physical DPS",
    "icon": "⚔️",
    "baseStats": {
      "hp": 90,
      "physAtk": 85,
      "magAtk": 40,
      "physDef": 55,
      "magDef": 45,
      "initiative": 35,
      "evasion": 20,
      "critRate": 10
    },
    "activeSkills": [
      {
        "name": "Wizard Strike",
        "apCost": 1,
        "potency": 100,
        "target": "Single Enemy",
        "description": "Standard class attack scaling with physical potency.",
        "flags": [
          "Physical"
        ]
      }
    ],
    "passiveSkills": [
      {
        "name": "Wizard Guard",
        "ppCost": 1,
        "trigger": "Before Attacked",
        "description": "Grants medium guard and mitigates incoming damage by 50%."
      }
    ],
    "bestGrowthTypes": [
      "Offensive",
      "Keen"
    ],
    "synergiesWith": [
      "scarlett-bishop",
      "alain-high-lord"
    ],
    "recommendedEquipment": [
      "Royal Banner",
      "Carnelian Pendant"
    ],
    "overview": "Official class Wizard specializing in frontline physical damage and tactical maneuvers."
  },
  {
    "id": "wyvern-knight",
    "image": "/images/characters/wyvern-knight.png",
    "name": "Wyvern Knight",
    "tier": "A+",
    "category": "Infantry",
    "role": "Physical DPS",
    "icon": "⚔️",
    "baseStats": {
      "hp": 90,
      "physAtk": 85,
      "magAtk": 40,
      "physDef": 55,
      "magDef": 45,
      "initiative": 35,
      "evasion": 20,
      "critRate": 10
    },
    "activeSkills": [
      {
        "name": "Wyvern Knight Strike",
        "apCost": 1,
        "potency": 100,
        "target": "Single Enemy",
        "description": "Standard class attack scaling with physical potency.",
        "flags": [
          "Physical"
        ]
      }
    ],
    "passiveSkills": [
      {
        "name": "Wyvern Knight Guard",
        "ppCost": 1,
        "trigger": "Before Attacked",
        "description": "Grants medium guard and mitigates incoming damage by 50%."
      }
    ],
    "bestGrowthTypes": [
      "Offensive",
      "Keen"
    ],
    "synergiesWith": [
      "scarlett-bishop",
      "alain-high-lord"
    ],
    "recommendedEquipment": [
      "Royal Banner",
      "Carnelian Pendant"
    ],
    "overview": "Official class Wyvern Knight specializing in frontline physical damage and tactical maneuvers."
  },
  {
    "id": "wyvern-master",
    "image": "/images/characters/wyvern-master.png",
    "name": "Wyvern Master",
    "tier": "A+",
    "category": "Infantry",
    "role": "Physical DPS",
    "icon": "⚔️",
    "baseStats": {
      "hp": 90,
      "physAtk": 85,
      "magAtk": 40,
      "physDef": 55,
      "magDef": 45,
      "initiative": 35,
      "evasion": 20,
      "critRate": 10
    },
    "activeSkills": [
      {
        "name": "Wyvern Master Strike",
        "apCost": 1,
        "potency": 100,
        "target": "Single Enemy",
        "description": "Standard class attack scaling with physical potency.",
        "flags": [
          "Physical"
        ]
      }
    ],
    "passiveSkills": [
      {
        "name": "Wyvern Master Guard",
        "ppCost": 1,
        "trigger": "Before Attacked",
        "description": "Grants medium guard and mitigates incoming damage by 50%."
      }
    ],
    "bestGrowthTypes": [
      "Offensive",
      "Keen"
    ],
    "synergiesWith": [
      "scarlett-bishop",
      "alain-high-lord"
    ],
    "recommendedEquipment": [
      "Royal Banner",
      "Carnelian Pendant"
    ],
    "overview": "Official class Wyvern Master specializing in frontline physical damage and tactical maneuvers."
  }
];
