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
      "scarlett-high-priestess",
      "clive-great-knight",
      "chloe-sergeant",
      "melisandre-swordmaster"
    ],
    "recommendedEquipment": [
      "Holy Unicorn Blade",
      "Ring of the Unicorn"
    ],
    "overview": "Alain in his High Lord promoted class gains a mount, massive HP/Def scaling, and row-wiping physical power while shielding backline allies."
  },
  {
    "id": "scarlett-high-priestess",
    "image": "/images/characters/high-priestess.png",
    "name": "Scarlett (High Priestess)",
    "category": "Infantry",
    "role": "Support",
    "tier": "SS",
    "icon": "✨",
    "baseStats": {
      "hp": 80,
      "physAtk": 35,
      "magAtk": 90,
      "physDef": 50,
      "magDef": 95,
      "initiative": 32,
      "evasion": 35,
      "critRate": 10
    },
    "activeSkills": [
      {
        "name": "Innocent Light",
        "apCost": 1,
        "potency": 120,
        "target": "Single Enemy",
        "description": "Deals magic damage and removes all buffs from the target.",
        "flags": [
          "Magical",
          "Dispel"
        ]
      },
      {
        "name": "Holy Light",
        "apCost": 1,
        "potency": 100,
        "target": "Single Ally",
        "description": "Restores HP to an ally and cleanses all debuffs.",
        "flags": [
          "Healing",
          "Cleanse"
        ]
      }
    ],
    "passiveSkills": [
      {
        "name": "Sacred Light",
        "ppCost": 1,
        "isStartOfBattle": true,
        "trigger": "Start of Battle",
        "description": "Start of Battle: Bestows HP regeneration and affliction immunity on the squad."
      },
      {
        "name": "Passive Supply",
        "ppCost": 1,
        "trigger": "End of Turn",
        "description": "Restores 1 PP to the lowest PP ally."
      }
    ],
    "bestGrowthTypes": [
      "Guardian",
      "Defender"
    ],
    "synergiesWith": [
      "alain-high-lord",
      "clive-great-knight"
    ],
    "recommendedEquipment": [
      "Scarlett's Ribbon",
      "Ring of the Maiden"
    ],
    "overview": "Unique promoted support capable of dispelling enemy buffs, granting passive squad HP regen, and providing emergency medical cover."
  },
  {
    "id": "chloe-sergeant",
    "image": "/images/characters/soldier.png",
    "name": "Chloe (Sergeant)",
    "category": "Infantry",
    "role": "Support",
    "tier": "S+",
    "icon": "🛡️",
    "baseStats": {
      "hp": 88,
      "physAtk": 82,
      "magAtk": 45,
      "physDef": 65,
      "magDef": 60,
      "initiative": 36,
      "evasion": 38,
      "critRate": 18
    },
    "activeSkills": [
      {
        "name": "Javelin Strike",
        "apCost": 1,
        "potency": 110,
        "target": "Column",
        "description": "Pierces through a column of enemies with true-thrust damage.",
        "flags": [
          "Physical",
          "Column"
        ]
      },
      {
        "name": "Keen Edge",
        "apCost": 1,
        "potency": 100,
        "target": "Single Enemy",
        "description": "Attacks an enemy and boosts self critical rate.",
        "flags": [
          "Physical"
        ]
      }
    ],
    "passiveSkills": [
      {
        "name": "Keen Call",
        "ppCost": 1,
        "trigger": "Before Ally Attacked",
        "description": "Grants 100% Guaranteed Critical Hit to an ally about to execute an active attack."
      },
      {
        "name": "Active Heal",
        "ppCost": 1,
        "trigger": "After Ally Action",
        "description": "Heals an ally after they take an action."
      }
    ],
    "bestGrowthTypes": [
      "Speedster",
      "Keen"
    ],
    "synergiesWith": [
      "alain-high-lord",
      "clive-great-knight",
      "hilda-wyvern-master"
    ],
    "recommendedEquipment": [
      "Chloe's Charm",
      "Lapis Pendant"
    ],
    "overview": "Promoted from Soldier to Sergeant. Chloe is the meta engine behind guaranteed 100% Critical setups via Keen Call."
  },
  {
    "id": "clive-great-knight",
    "image": "/images/characters/great-knight.png",
    "name": "Clive (Great Knight)",
    "category": "Cavalry",
    "role": "Physical DPS",
    "tier": "SS",
    "icon": "🐎",
    "baseStats": {
      "hp": 102,
      "physAtk": 96,
      "magAtk": 30,
      "physDef": 78,
      "magDef": 52,
      "initiative": 35,
      "evasion": 30,
      "critRate": 18
    },
    "activeSkills": [
      {
        "name": "Line Charge",
        "apCost": 2,
        "potency": 150,
        "target": "Row",
        "description": "Charges a full row of enemies. Deals 200% damage to infantry targets.",
        "flags": [
          "Physical",
          "Row",
          "Anti-Infantry"
        ]
      },
      {
        "name": "Assaulting Lance",
        "apCost": 1,
        "potency": 120,
        "target": "Single Enemy",
        "description": "Heavy thrust that refunds 1 AP upon killing the enemy.",
        "flags": [
          "Physical"
        ]
      }
    ],
    "passiveSkills": [
      {
        "name": "Cavalry Synergy",
        "ppCost": 1,
        "trigger": "Start of Battle",
        "description": "Increases Phys Atk by +15% for all cavalry allies in squad."
      },
      {
        "name": "Heavy Shield Guard",
        "ppCost": 1,
        "trigger": "Before Attacked",
        "description": "Reduces incoming physical damage by 50%."
      }
    ],
    "bestGrowthTypes": [
      "Offensive",
      "Offensive"
    ],
    "synergiesWith": [
      "alain-high-lord",
      "chloe-sergeant",
      "adel-great-knight"
    ],
    "recommendedEquipment": [
      "Heavensteed Reins",
      "Carnelian Pendant"
    ],
    "overview": "Devastating cavalry sweeper who tramples enemy infantry rows with Line Charge and stacks cavalry synergy attack buffs."
  },
  {
    "id": "melisandre-swordmaster",
    "image": "/images/characters/swordmaster.png",
    "name": "Melisandre (Swordmaster)",
    "category": "Infantry",
    "role": "Physical DPS",
    "tier": "S+",
    "icon": "⚔️",
    "baseStats": {
      "hp": 82,
      "physAtk": 92,
      "magAtk": 30,
      "physDef": 52,
      "magDef": 50,
      "initiative": 46,
      "evasion": 68,
      "critRate": 35
    },
    "activeSkills": [
      {
        "name": "Meteor Slash",
        "apCost": 2,
        "potency": 180,
        "target": "Single Enemy",
        "description": "Strikes 9 times in rapid succession with high critical chance.",
        "flags": [
          "Physical",
          "Multi-Hit"
        ]
      },
      {
        "name": "True Strike Blade",
        "apCost": 1,
        "potency": 100,
        "target": "Single Enemy",
        "description": "Undodgeable attack that bypasses evasion entirely.",
        "flags": [
          "Physical",
          "True-Strike"
        ]
      }
    ],
    "passiveSkills": [
      {
        "name": "Parrying Slash",
        "ppCost": 1,
        "trigger": "When Attacked by Melee",
        "description": "Negates 100% damage from incoming physical melee attack and counters immediately.",
        "flags": [
          "Parry",
          "Counter"
        ]
      },
      {
        "name": "Keen Edge",
        "ppCost": 1,
        "trigger": "After Landing Critical",
        "description": "Restores 1 AP when scoring a critical hit."
      }
    ],
    "bestGrowthTypes": [
      "Keen",
      "Keen"
    ],
    "synergiesWith": [
      "alain-high-lord",
      "chloe-sergeant",
      "gilbert-prince"
    ],
    "recommendedEquipment": [
      "Parrying Amulet",
      "Carnelian Pendant"
    ],
    "overview": "Dual-wielding Swordmaster capable of parrying physical attacks, nullifying damage, and deleting evasive scouts with True Strike."
  },
  {
    "id": "auch-sorcerer",
    "image": "/images/characters/warlock.png",
    "name": "Auch (Sorcerer)",
    "category": "Infantry",
    "role": "Magic DPS",
    "tier": "SS",
    "icon": "🧙‍♂️",
    "baseStats": {
      "hp": 74,
      "physAtk": 25,
      "magAtk": 104,
      "physDef": 40,
      "magDef": 90,
      "initiative": 33,
      "evasion": 30,
      "critRate": 15
    },
    "activeSkills": [
      {
        "name": "Trinity Rain",
        "apCost": 4,
        "potency": 210,
        "target": "All Enemies",
        "description": "Charged Skill: Calls down 3 waves of magic rain dealing devastating multi-target damage.",
        "flags": [
          "Magical",
          "AOE"
        ]
      },
      {
        "name": "Fireball",
        "apCost": 1,
        "potency": 110,
        "target": "Single Enemy",
        "description": "Deals fire magic damage and inflicts Burn.",
        "flags": [
          "Magical",
          "Burn"
        ]
      }
    ],
    "passiveSkills": [
      {
        "name": "Focus Sight",
        "ppCost": 1,
        "trigger": "Before Magic Attack",
        "description": "Increases magic accuracy and guarantees True Strike."
      },
      {
        "name": "Magick Boost",
        "ppCost": 1,
        "trigger": "Start of Turn",
        "description": "Increases own Mag Atk by +20%."
      }
    ],
    "bestGrowthTypes": [
      "Offensive",
      "Keen"
    ],
    "synergiesWith": [
      "sharon-bishop",
      "yahna-sorceress",
      "selvie-druid"
    ],
    "recommendedEquipment": [
      "Millennium Scepter",
      "Sniper's Amber Lens"
    ],
    "overview": "Promoted from Wizard to Sorcerer. The premier channeler of Trinity Rain capable of wiping entire enemy boards on Turn 1."
  },
  {
    "id": "yahna-sorceress",
    "image": "/images/characters/sorceress.png",
    "name": "Yahna (Sorceress)",
    "category": "Infantry",
    "role": "Magic DPS",
    "tier": "SS",
    "icon": "🧙‍♀️",
    "baseStats": {
      "hp": 72,
      "physAtk": 20,
      "magAtk": 102,
      "physDef": 38,
      "magDef": 92,
      "initiative": 38,
      "evasion": 45,
      "critRate": 15
    },
    "activeSkills": [
      {
        "name": "Ice Coffin",
        "apCost": 2,
        "potency": 120,
        "target": "Row",
        "description": "Freezes an enemy row with ice magic.",
        "flags": [
          "Magical",
          "Freeze",
          "Row"
        ]
      },
      {
        "name": "Magick Missile",
        "apCost": 1,
        "potency": 100,
        "target": "Single Enemy",
        "description": "Fires tracking magic missiles that cannot be guarded.",
        "flags": [
          "Magical",
          "True-Strike"
        ]
      }
    ],
    "passiveSkills": [
      {
        "name": "Sorcerous Connection",
        "ppCost": 2,
        "trigger": "When Ally Casts Magic",
        "description": "Grants +50% Magic Attack to the casting ally via Familiar's Choker."
      },
      {
        "name": "Quick Cast",
        "ppCost": 2,
        "isStartOfBattle": true,
        "trigger": "Start of Battle",
        "description": "Takes the immediate first turn of battle before all other combatants."
      }
    ],
    "bestGrowthTypes": [
      "Speedster",
      "Speedster"
    ],
    "synergiesWith": [
      "auch-sorcerer",
      "sharon-bishop",
      "selvie-druid"
    ],
    "recommendedEquipment": [
      "Familiar's Choker",
      "Raven Plume"
    ],
    "overview": "Promoted from Witch to Sorceress. Provides massive +50% magic attack buffs and row-freezing ice magic."
  },
  {
    "id": "sharon-bishop",
    "image": "/images/characters/bishop.png",
    "name": "Sharon (Bishop)",
    "category": "Infantry",
    "role": "Support",
    "tier": "SS",
    "icon": "🕊️",
    "baseStats": {
      "hp": 78,
      "physAtk": 25,
      "magAtk": 85,
      "physDef": 50,
      "magDef": 94,
      "initiative": 30,
      "evasion": 30,
      "critRate": 10
    },
    "activeSkills": [
      {
        "name": "Row Heal",
        "apCost": 1,
        "potency": 100,
        "target": "Row",
        "description": "Heals all allies in a row and removes negative afflictions.",
        "flags": [
          "Healing",
          "Cleanse"
        ]
      },
      {
        "name": "Resurrection",
        "apCost": 2,
        "potency": 100,
        "target": "Fallen Ally",
        "description": "Revives a fallen ally with 50% HP.",
        "flags": [
          "Revive"
        ]
      }
    ],
    "passiveSkills": [
      {
        "name": "Quick Impetus",
        "ppCost": 3,
        "trigger": "When Ally Channels Charge",
        "description": "Immediately grants +100% Turn Bar to the charging ally and refunds 1 AP via Cat-Ear Hood."
      },
      {
        "name": "Holy Guard",
        "ppCost": 1,
        "trigger": "Before Ally Attacked",
        "description": "Grants a protective barrier shielding an ally."
      }
    ],
    "bestGrowthTypes": [
      "Guardian",
      "Defender"
    ],
    "synergiesWith": [
      "auch-sorcerer",
      "yahna-sorceress",
      "hodrick-legionnaire"
    ],
    "recommendedEquipment": [
      "Cat-Ear Hood",
      "Lapis Pendant"
    ],
    "overview": "Promoted from Cleric to Bishop. The essential accelerator in Turn-1 nuke strategies through Cat-Ear Hood Quick Impetus."
  },
  {
    "id": "hodrick-legionnaire",
    "image": "/images/characters/legionnaire.png",
    "name": "Hodrick (Legionnaire)",
    "category": "Armored",
    "role": "Tank",
    "tier": "SS",
    "icon": "🛡️",
    "baseStats": {
      "hp": 120,
      "physAtk": 70,
      "magAtk": 20,
      "physDef": 105,
      "magDef": 45,
      "initiative": 18,
      "evasion": 10,
      "critRate": 8
    },
    "activeSkills": [
      {
        "name": "Heavy Shield Bash",
        "apCost": 1,
        "potency": 100,
        "target": "Single Enemy",
        "description": "Bashes an enemy with tower shield and inflicts Stun.",
        "flags": [
          "Physical",
          "Stun"
        ]
      },
      {
        "name": "Fortress Wall",
        "apCost": 1,
        "potency": 0,
        "target": "Self",
        "description": "Increases own Guard Rate to 100% and halves all incoming damage.",
        "flags": [
          "Buff"
        ]
      }
    ],
    "passiveSkills": [
      {
        "name": "Heavy Cover",
        "ppCost": 1,
        "trigger": "Before Ally Attacked",
        "description": "Covers an ally and reduces damage taken by 75%."
      },
      {
        "name": "Greatshield Fortitude",
        "ppCost": 1,
        "trigger": "After Guarding",
        "description": "Recovers 1 PP whenever a heavy guard is triggered."
      }
    ],
    "bestGrowthTypes": [
      "Guardian",
      "Guardian"
    ],
    "synergiesWith": [
      "sharon-bishop",
      "selvie-druid",
      "auch-sorcerer"
    ],
    "recommendedEquipment": [
      "Greatshield of the Maiden",
      "Heavy Guard Shield"
    ],
    "overview": "Promoted from Hoplite to Legionnaire. The ultimate impenetrable physical fortress who absorbs all damage aimed at backline casters."
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
      "auch-sorcerer",
      "yahna-sorceress",
      "berengaria-renegade"
    ],
    "recommendedEquipment": [
      "Sandstorm Staff",
      "Lapis Pendant"
    ],
    "overview": "Promoted from Shaman to Druid. The undisputed queen of debuffs who strips 50% defenses and blinds enemy teams at battle start."
  },
  {
    "id": "hilda-wyvern-master",
    "image": "/images/characters/wyvern-master.png",
    "name": "Hilda (Wyvern Master)",
    "category": "Flying",
    "role": "Physical DPS",
    "tier": "SS",
    "icon": "🐉",
    "baseStats": {
      "hp": 98,
      "physAtk": 98,
      "magAtk": 35,
      "physDef": 75,
      "magDef": 55,
      "initiative": 38,
      "evasion": 60,
      "critRate": 20
    },
    "activeSkills": [
      {
        "name": "Dragoon Dive",
        "apCost": 4,
        "potency": 220,
        "target": "All Enemies",
        "description": "Charged Skill: Takes flight and crashes down dealing colossal physical damage to all 5 enemies.",
        "flags": [
          "Physical",
          "Flying",
          "AOE"
        ]
      },
      {
        "name": "Fire Breath",
        "apCost": 1,
        "potency": 100,
        "target": "Row",
        "description": "Breathes flames across an enemy row inflicting Burn.",
        "flags": [
          "Physical",
          "Burn",
          "Row"
        ]
      }
    ],
    "passiveSkills": [
      {
        "name": "Dragon Roar",
        "ppCost": 1,
        "isStartOfBattle": true,
        "trigger": "Start of Battle",
        "description": "Start of Battle: Reduces Initiative of all enemy units by -15."
      },
      {
        "name": "Deflect Airborne",
        "ppCost": 1,
        "trigger": "Before Attacked",
        "description": "Evades incoming ground attacks."
      }
    ],
    "bestGrowthTypes": [
      "Offensive",
      "Keen"
    ],
    "synergiesWith": [
      "gilbert-prince",
      "primm-bishop",
      "fran-gryphon-master"
    ],
    "recommendedEquipment": [
      "Dragoon's War Spear",
      "Sniper's Amber Lens"
    ],
    "overview": "Promoted from Wyvern Knight to Wyvern Master. Channels Dragoon Dive to annihilate entire enemy formations from above."
  },
  {
    "id": "fran-gryphon-master",
    "image": "/images/characters/gryphon-master.png",
    "name": "Fran (Gryphon Master)",
    "category": "Flying",
    "role": "Physical DPS",
    "tier": "S+",
    "icon": "🦅",
    "baseStats": {
      "hp": 92,
      "physAtk": 94,
      "magAtk": 30,
      "physDef": 60,
      "magDef": 65,
      "initiative": 42,
      "evasion": 65,
      "critRate": 22
    },
    "activeSkills": [
      {
        "name": "High Gale",
        "apCost": 2,
        "potency": 150,
        "target": "Row",
        "description": "Sweeps an enemy row dealing 200% bonus damage to cavalry units.",
        "flags": [
          "Physical",
          "Flying",
          "Anti-Cavalry",
          "Row"
        ]
      },
      {
        "name": "Aerial Slicer",
        "apCost": 1,
        "potency": 110,
        "target": "Single Enemy",
        "description": "Swift axe strike targeting backline units directly.",
        "flags": [
          "Physical"
        ]
      }
    ],
    "passiveSkills": [
      {
        "name": "Tailwind Boost",
        "ppCost": 1,
        "trigger": "Start of Turn",
        "description": "Increases own Initiative and physical attack."
      },
      {
        "name": "Winged Evasion",
        "ppCost": 1,
        "trigger": "When Attacked",
        "description": "Grants 100% evasion against ground melee strikes."
      }
    ],
    "bestGrowthTypes": [
      "Offensive",
      "Speedster"
    ],
    "synergiesWith": [
      "hilda-wyvern-master",
      "gilbert-prince",
      "miriam-sainted-knight"
    ],
    "recommendedEquipment": [
      "Boreas's Axe",
      "Wingline Standard"
    ],
    "overview": "Promoted from Gryphon Knight to Gryphon Master. Sweeps enemy backlines and demolishes enemy cavalry with High Gale."
  },
  {
    "id": "miriam-sainted-knight",
    "image": "/images/characters/sainted-knight.png",
    "name": "Miriam (Sainted Knight)",
    "category": "Cavalry",
    "role": "Support",
    "tier": "S+",
    "icon": "🛡️",
    "baseStats": {
      "hp": 94,
      "physAtk": 65,
      "magAtk": 80,
      "physDef": 70,
      "magDef": 92,
      "initiative": 36,
      "evasion": 35,
      "critRate": 12
    },
    "activeSkills": [
      {
        "name": "Row Heal",
        "apCost": 1,
        "potency": 100,
        "target": "Row",
        "description": "Restores HP to an entire row of allies.",
        "flags": [
          "Healing",
          "Row"
        ]
      },
      {
        "name": "Holy Blade",
        "apCost": 1,
        "potency": 100,
        "target": "Single Enemy",
        "description": "Attacks with magic sword and recovers HP.",
        "flags": [
          "Magical"
        ]
      }
    ],
    "passiveSkills": [
      {
        "name": "Magic Barrier",
        "ppCost": 1,
        "trigger": "When Ally Hit by Magic",
        "description": "Nullifies magic damage aimed at an allied row."
      },
      {
        "name": "Row Guard",
        "ppCost": 1,
        "trigger": "Before Attacked",
        "description": "Increases squad Magic Defense by +30%."
      }
    ],
    "bestGrowthTypes": [
      "Defender",
      "All-Rounder"
    ],
    "synergiesWith": [
      "hilda-wyvern-master",
      "primm-bishop",
      "gilbert-prince"
    ],
    "recommendedEquipment": [
      "Runic Sword",
      "Radiant Shield"
    ],
    "overview": "Promoted from Radiant Knight to Sainted Knight. Grants total squad immunity against enemy magic nukes while healing frontline fliers."
  },
  {
    "id": "primm-bishop",
    "image": "/images/characters/cleric.png",
    "name": "Primm (Bishop)",
    "category": "Infantry",
    "role": "Support",
    "tier": "S+",
    "icon": "🕊️",
    "baseStats": {
      "hp": 76,
      "physAtk": 24,
      "magAtk": 84,
      "physDef": 48,
      "magDef": 92,
      "initiative": 30,
      "evasion": 30,
      "critRate": 10
    },
    "activeSkills": [
      {
        "name": "Quick Refresh",
        "apCost": 1,
        "potency": 100,
        "target": "Single Ally",
        "description": "Cleanses all debuffs and restores health.",
        "flags": [
          "Healing",
          "Cleanse"
        ]
      },
      {
        "name": "Holy Shield",
        "apCost": 1,
        "potency": 0,
        "target": "Row",
        "description": "Grants a 1-hit nullification barrier to a row of allies.",
        "flags": [
          "Barrier"
        ]
      }
    ],
    "passiveSkills": [
      {
        "name": "Quick Impetus",
        "ppCost": 3,
        "trigger": "When Ally Channels Charge",
        "description": "Instantly fires Hilda's Dragoon Dive via White Cat-Ear Hood."
      }
    ],
    "bestGrowthTypes": [
      "Guardian",
      "Speedster"
    ],
    "synergiesWith": [
      "hilda-wyvern-master",
      "gilbert-prince",
      "fran-gryphon-master"
    ],
    "recommendedEquipment": [
      "White Cat-Ear Hood",
      "Lapis Pendant"
    ],
    "overview": "Promoted from Cleric to Bishop. The turn accelerator for Hilda's Turn-1 Dragoon Dive bombardment."
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
      "hilda-wyvern-master",
      "fran-gryphon-master",
      "miriam-sainted-knight"
    ],
    "recommendedEquipment": [
      "Royal Banner",
      "Lapis Pendant"
    ],
    "overview": "Unique Prince class giving start-of-battle initiative dominance (+15 Initiative) and massive squad attack buffs (+20% Atk)."
  },
  {
    "id": "berengaria-renegade",
    "image": "/images/characters/berengaria-renegade.png",
    "name": "Berengaria (Dark Marquess - Axe)",
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
        "description": "Attacks and recovers 1 PP upon landing a hit on afflicted enemies.",
        "flags": [
          "Physical"
        ]
      }
    ],
    "passiveSkills": [
      {
        "name": "Eye of the Crimson Bear",
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
      "travis-rogue",
      "nina-breaker",
      "liza-shieldshooter"
    ],
    "recommendedEquipment": [
      "Carnelian Greataxe",
      "Executioner's Eye"
    ],
    "overview": "Dominates debuffed teams with Eye of the Crimson Bear start-of-battle debuff and endless pursuit executions."
  },
  {
    "id": "travis-rogue",
    "image": "/images/characters/rogue.png",
    "name": "Travis (Rogue)",
    "category": "Infantry",
    "role": "Debuffer",
    "tier": "SS",
    "icon": "🗡️",
    "baseStats": {
      "hp": 80,
      "physAtk": 78,
      "magAtk": 20,
      "physDef": 45,
      "magDef": 45,
      "initiative": 48,
      "evasion": 95,
      "critRate": 25
    },
    "activeSkills": [
      {
        "name": "Shadowbite",
        "apCost": 2,
        "potency": 100,
        "target": "Row",
        "description": "Attacks an enemy row and inflicts Blindness & Affliction.",
        "flags": [
          "Physical",
          "Row",
          "Blind"
        ]
      },
      {
        "name": "Passive Steal",
        "apCost": 1,
        "potency": 80,
        "target": "Single Enemy",
        "description": "Steals 1 PP from the enemy and grants it to self.",
        "flags": [
          "Physical",
          "Steal"
        ]
      }
    ],
    "passiveSkills": [
      {
        "name": "Evade",
        "ppCost": 1,
        "trigger": "When Attacked",
        "description": "Completely dodges 1 incoming physical attack.",
        "flags": [
          "Dodge"
        ]
      },
      {
        "name": "Sneak Attack",
        "ppCost": 1,
        "trigger": "Start of Battle",
        "description": "Inflicts defense debuff on target."
      }
    ],
    "bestGrowthTypes": [
      "Speedster",
      "Speedster"
    ],
    "synergiesWith": [
      "berengaria-renegade",
      "nina-breaker",
      "liza-shieldshooter"
    ],
    "recommendedEquipment": [
      "Poisoner's Dagger",
      "Raven Plume"
    ],
    "overview": "Promoted from Thief to Rogue. Blinds entire enemy rows with Shadowbite and acts as an untouchable evasion tank."
  },
  {
    "id": "nina-breaker",
    "image": "/images/characters/breaker.png",
    "name": "Nina (Breaker)",
    "category": "Infantry",
    "role": "Physical DPS",
    "tier": "S+",
    "icon": "🔨",
    "baseStats": {
      "hp": 96,
      "physAtk": 108,
      "magAtk": 15,
      "physDef": 60,
      "magDef": 35,
      "initiative": 28,
      "evasion": 25,
      "critRate": 20
    },
    "activeSkills": [
      {
        "name": "Enraged Strike",
        "apCost": 1,
        "potency": 150,
        "target": "Single Enemy",
        "description": "Shatters enemy armor, bypassing 100% of Physical Defense.",
        "flags": [
          "Physical",
          "Armor-Pierce"
        ]
      },
      {
        "name": "Assault Blow",
        "apCost": 1,
        "potency": 120,
        "target": "Single Enemy",
        "description": "Crushing blow that refunds 1 AP upon killing the target.",
        "flags": [
          "Physical"
        ]
      }
    ],
    "passiveSkills": [
      {
        "name": "Heavy Impact",
        "ppCost": 1,
        "trigger": "After Attack",
        "description": "Increases own physical attack by +15% per hit landed."
      }
    ],
    "bestGrowthTypes": [
      "Offensive",
      "Offensive"
    ],
    "synergiesWith": [
      "berengaria-renegade",
      "travis-rogue",
      "bruno-berserker"
    ],
    "recommendedEquipment": [
      "Juggernaut",
      "Carnelian Pendant"
    ],
    "overview": "Promoted from Warrior to Breaker. Obliterates armored Legionnaires with 100% defense-bypassing Enraged Strike."
  },
  {
    "id": "liza-shieldshooter",
    "image": "/images/characters/arbalist.png",
    "name": "Liza (Shieldshooter)",
    "category": "Infantry",
    "role": "Support",
    "tier": "S+",
    "icon": "🏹",
    "baseStats": {
      "hp": 90,
      "physAtk": 84,
      "magAtk": 30,
      "physDef": 72,
      "magDef": 55,
      "initiative": 32,
      "evasion": 30,
      "critRate": 15
    },
    "activeSkills": [
      {
        "name": "Medical Shot",
        "apCost": 1,
        "potency": 100,
        "target": "Ally",
        "description": "Fires healing medicinal bolt restoring ally HP and removing afflictions.",
        "flags": [
          "Healing"
        ]
      },
      {
        "name": "Heavy Bolt",
        "apCost": 1,
        "potency": 120,
        "target": "Flying Enemy",
        "description": "Deals 200% damage to flying targets.",
        "flags": [
          "Physical",
          "Anti-Flying"
        ]
      }
    ],
    "passiveSkills": [
      {
        "name": "Greatshield Cover",
        "ppCost": 1,
        "trigger": "Before Ally Attacked",
        "description": "Covers backline ally with heavy shield."
      }
    ],
    "bestGrowthTypes": [
      "Guardian",
      "Defender"
    ],
    "synergiesWith": [
      "berengaria-renegade",
      "travis-rogue"
    ],
    "recommendedEquipment": [
      "First Aid Kit",
      "Lapis Pendant"
    ],
    "overview": "Promoted from Arbalist to Shieldshooter. Provides cross-field healing bolts and shields allies with greatshield cover."
  },
  {
    "id": "bruno-berserker",
    "image": "/images/characters/berserker.png",
    "name": "Bruno (Berserker)",
    "category": "Infantry",
    "role": "Physical DPS",
    "tier": "S+",
    "icon": "🪓",
    "baseStats": {
      "hp": 125,
      "physAtk": 102,
      "magAtk": 10,
      "physDef": 55,
      "magDef": 30,
      "initiative": 25,
      "evasion": 20,
      "critRate": 18
    },
    "activeSkills": [
      {
        "name": "Wide Smash",
        "apCost": 2,
        "potency": 140,
        "target": "Row",
        "description": "Devastating greataxe swing hitting an entire enemy row.",
        "flags": [
          "Physical",
          "Row"
        ]
      },
      {
        "name": "Heavy Swing",
        "apCost": 1,
        "potency": 110,
        "target": "Single Enemy",
        "description": "High damage strike with armor break.",
        "flags": [
          "Physical"
        ]
      }
    ],
    "passiveSkills": [
      {
        "name": "Bulk Up",
        "ppCost": 1,
        "trigger": "Start of Turn",
        "description": "Restores 30% of max HP and cures all status afflictions."
      },
      {
        "name": "Toughness",
        "ppCost": 1,
        "trigger": "Before Fatal Hit",
        "description": "Survives lethal blow with 1 HP remaining."
      }
    ],
    "bestGrowthTypes": [
      "Offensive",
      "Guardian"
    ],
    "synergiesWith": [
      "berengaria-renegade",
      "nina-breaker"
    ],
    "recommendedEquipment": [
      "Dragonbone Axe",
      "Carnelian Pendant"
    ],
    "overview": "Promoted from Gladiator to Berserker. Boasts colossal HP pools, row-wide greataxe cleaves, and self-healing Bulk Up."
  },
  {
    "id": "virginia-valkyria",
    "image": "/images/characters/valkyria.png",
    "name": "Virginia (Valkyria)",
    "category": "Infantry",
    "role": "Tank",
    "tier": "SS",
    "icon": "👑",
    "baseStats": {
      "hp": 108,
      "physAtk": 92,
      "magAtk": 40,
      "physDef": 95,
      "magDef": 70,
      "initiative": 35,
      "evasion": 35,
      "critRate": 20
    },
    "activeSkills": [
      {
        "name": "Maiden's Hammer",
        "apCost": 2,
        "potency": 150,
        "target": "Guarding Enemy",
        "description": "Shatters enemy guard and deals 200% bonus damage to shielded foes.",
        "flags": [
          "Physical",
          "Guard-Break"
        ]
      },
      {
        "name": "Vertical Edge",
        "apCost": 1,
        "potency": 110,
        "target": "Column",
        "description": "Strikes through an enemy column with dual blades.",
        "flags": [
          "Physical",
          "Column"
        ]
      }
    ],
    "passiveSkills": [
      {
        "name": "Iron Veil",
        "ppCost": 1,
        "isStartOfBattle": true,
        "trigger": "Start of Battle",
        "description": "Start of Battle: Increases physical and guard defense of entire squad by +30%."
      },
      {
        "name": "Retaliation Counter",
        "ppCost": 1,
        "trigger": "After Guarding Strike",
        "description": "Launches an immediate high potency counterattack."
      }
    ],
    "bestGrowthTypes": [
      "Offensive",
      "Guardian"
    ],
    "synergiesWith": [
      "leah-swordmaster",
      "kitra-breaker",
      "rolf-sniper",
      "colm-vanguard"
    ],
    "recommendedEquipment": [
      "Maiden's Sword",
      "Rose Shield"
    ],
    "overview": "Promoted from Crusader to Valkyria. Dual-wields sword and shield to create an impenetrable counter-attack fortress."
  },
  {
    "id": "leah-swordmaster",
    "image": "/images/characters/swordmaster.png",
    "name": "Leah (Swordmaster)",
    "category": "Infantry",
    "role": "Physical DPS",
    "tier": "S+",
    "icon": "⚔️",
    "baseStats": {
      "hp": 80,
      "physAtk": 90,
      "magAtk": 28,
      "physDef": 50,
      "magDef": 48,
      "initiative": 48,
      "evasion": 70,
      "critRate": 35
    },
    "activeSkills": [
      {
        "name": "Meteor Slash",
        "apCost": 2,
        "potency": 180,
        "target": "Single Enemy",
        "description": "9-hit rapid sword thrust flurry with high critical scaling.",
        "flags": [
          "Physical",
          "Multi-Hit"
        ]
      }
    ],
    "passiveSkills": [
      {
        "name": "Parrying Slash",
        "ppCost": 1,
        "trigger": "When Attacked by Melee",
        "description": "Negates 100% damage and counters instantly.",
        "flags": [
          "Parry"
        ]
      }
    ],
    "bestGrowthTypes": [
      "Keen",
      "Offensive"
    ],
    "synergiesWith": [
      "virginia-valkyria",
      "kitra-breaker"
    ],
    "recommendedEquipment": [
      "Parrying Amulet",
      "Carnelian Pendant"
    ],
    "overview": "Promoted from Swordfighter to Swordmaster. Punishes incoming melee attacks with lethal parries and True Strike."
  },
  {
    "id": "kitra-breaker",
    "image": "/images/characters/breaker.png",
    "name": "Kitra (Breaker)",
    "category": "Infantry",
    "role": "Physical DPS",
    "tier": "S+",
    "icon": "🔨",
    "baseStats": {
      "hp": 95,
      "physAtk": 106,
      "magAtk": 15,
      "physDef": 62,
      "magDef": 36,
      "initiative": 27,
      "evasion": 22,
      "critRate": 20
    },
    "activeSkills": [
      {
        "name": "Enraged Strike",
        "apCost": 1,
        "potency": 150,
        "target": "Armored Enemy",
        "description": "Ignores 100% of enemy physical defense.",
        "flags": [
          "Physical",
          "Armor-Pierce"
        ]
      }
    ],
    "passiveSkills": [
      {
        "name": "Heavy Smash",
        "ppCost": 1,
        "trigger": "After Attack",
        "description": "Increases own physical attack."
      }
    ],
    "bestGrowthTypes": [
      "Offensive",
      "Offensive"
    ],
    "synergiesWith": [
      "virginia-valkyria",
      "rolf-sniper"
    ],
    "recommendedEquipment": [
      "Meteorite Axe",
      "Carnelian Pendant"
    ],
    "overview": "Promoted from Warrior to Breaker. High-potency armor crusher supporting Virginia's frontline counter squad."
  },
  {
    "id": "rolf-sniper",
    "image": "/images/characters/sniper.png",
    "name": "Rolf (Sniper)",
    "category": "Infantry",
    "role": "Physical DPS",
    "tier": "S+",
    "icon": "🏹",
    "baseStats": {
      "hp": 82,
      "physAtk": 92,
      "magAtk": 25,
      "physDef": 50,
      "magDef": 50,
      "initiative": 44,
      "evasion": 40,
      "critRate": 28
    },
    "activeSkills": [
      {
        "name": "Aerial Snipe",
        "apCost": 1,
        "potency": 120,
        "target": "Flying Enemy",
        "description": "Deals 200% critical damage to flying foes with True Strike.",
        "flags": [
          "Physical",
          "Anti-Flying",
          "True-Strike"
        ]
      }
    ],
    "passiveSkills": [
      {
        "name": "Eagle Eye",
        "ppCost": 1,
        "trigger": "Before Attack",
        "description": "Guarantees True Strike and 100% Critical Hit."
      }
    ],
    "bestGrowthTypes": [
      "Offensive",
      "Keen"
    ],
    "synergiesWith": [
      "virginia-valkyria",
      "colm-vanguard"
    ],
    "recommendedEquipment": [
      "Apeliotes's Bow",
      "Sniper's Amber Lens"
    ],
    "overview": "Promoted from Hunter to Sniper. Deletes enemy fliers with 100% True Strike precision."
  },
  {
    "id": "colm-vanguard",
    "image": "/images/characters/vanguard.png",
    "name": "Colm (Vanguard)",
    "category": "Infantry",
    "role": "Tank",
    "tier": "S+",
    "icon": "🛡️",
    "baseStats": {
      "hp": 98,
      "physAtk": 78,
      "magAtk": 20,
      "physDef": 85,
      "magDef": 55,
      "initiative": 32,
      "evasion": 30,
      "critRate": 15
    },
    "activeSkills": [
      {
        "name": "Shield Bash",
        "apCost": 1,
        "potency": 100,
        "target": "Single Enemy",
        "description": "Stuns the target with heavy shield impact.",
        "flags": [
          "Physical",
          "Stun"
        ]
      }
    ],
    "passiveSkills": [
      {
        "name": "Arrow Cover",
        "ppCost": 1,
        "trigger": "When Ally Targeted by Arrow",
        "description": "Negates 100% damage from incoming ranged missile attacks."
      }
    ],
    "bestGrowthTypes": [
      "Guardian",
      "Defender"
    ],
    "synergiesWith": [
      "virginia-valkyria",
      "leah-swordmaster"
    ],
    "recommendedEquipment": [
      "Deflect Shield",
      "Lapis Pendant"
    ],
    "overview": "Promoted from Fighter to Vanguard. Shields backline allies from anti-infantry and bow strikes with Arrow Cover."
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
        "name": "Triple Counter",
        "ppCost": 1,
        "trigger": "After Being Attacked",
        "description": "Fires 3 immediate counterattack arrows with 100% Guaranteed Critical Hit."
      },
      {
        "name": "Snow White Guard",
        "ppCost": 1,
        "trigger": "Start of Battle",
        "description": "Increases evasion by 30% and grants immunity to Freeze."
      }
    ],
    "bestGrowthTypes": [
      "Offensive",
      "Keen"
    ],
    "synergiesWith": [
      "ramona-wereowl",
      "ridiel-elven-archer",
      "bryce-legionnaire"
    ],
    "recommendedEquipment": [
      "Icefall Bow",
      "Sniper's Amber Lens"
    ],
    "overview": "Unique Bestral Snow Ranger. Freezes entire enemy armies on Turn 1 with Glacial Rain."
  },
  {
    "id": "ramona-wereowl",
    "image": "/images/characters/cleric.png",
    "name": "Ramona (Wereowl)",
    "category": "Flying",
    "role": "Support",
    "tier": "SS",
    "icon": "🦉",
    "baseStats": {
      "hp": 82,
      "physAtk": 30,
      "magAtk": 88,
      "physDef": 45,
      "magDef": 95,
      "initiative": 45,
      "evasion": 65,
      "critRate": 10
    },
    "activeSkills": [
      {
        "name": "Restore",
        "apCost": 1,
        "potency": 100,
        "target": "Ally",
        "description": "Heals an ally and grants magic defense bonus.",
        "flags": [
          "Healing"
        ]
      }
    ],
    "passiveSkills": [
      {
        "name": "Owl Eyes",
        "ppCost": 1,
        "trigger": "When Ally Uses Active Skill",
        "description": "Restores 1 PP to the attacking ally."
      },
      {
        "name": "Quick Reload",
        "ppCost": 1,
        "trigger": "After Ally Action",
        "description": "Restores 1 AP to ally."
      }
    ],
    "bestGrowthTypes": [
      "Speedster",
      "Guardian"
    ],
    "synergiesWith": [
      "yunifi-snow-ranger",
      "ridiel-elven-archer"
    ],
    "recommendedEquipment": [
      "Meteorite Rod",
      "Lapis Pendant"
    ],
    "overview": "Unique Bestral Wereowl. Acts as an infinite PP/AP battery through Owl Eyes."
  },
  {
    "id": "ridiel-elven-archer",
    "image": "/images/characters/elven-fencer.png",
    "name": "Ridiel (Elven Archer)",
    "category": "Infantry",
    "role": "Support",
    "tier": "S+",
    "icon": "🧝‍♀️",
    "baseStats": {
      "hp": 84,
      "physAtk": 78,
      "magAtk": 82,
      "physDef": 50,
      "magDef": 75,
      "initiative": 40,
      "evasion": 45,
      "critRate": 18
    },
    "activeSkills": [
      {
        "name": "Icicle Arrow",
        "apCost": 1,
        "potency": 100,
        "target": "Single Enemy",
        "description": "Inflicts Freeze on target.",
        "flags": [
          "Magical",
          "Freeze"
        ]
      }
    ],
    "passiveSkills": [
      {
        "name": "Pure Light",
        "ppCost": 1,
        "trigger": "When Ally Afflicted",
        "description": "Instantly cleanses debuffs row-wide and heals."
      },
      {
        "name": "Mystic Conferral",
        "ppCost": 1,
        "trigger": "Before Ally Attack",
        "description": "Adds magic damage to ally attacks."
      }
    ],
    "bestGrowthTypes": [
      "All-Rounder",
      "Speedster"
    ],
    "synergiesWith": [
      "yunifi-snow-ranger",
      "ramona-wereowl"
    ],
    "recommendedEquipment": [
      "Runic Bow",
      "Pure Light Amulet"
    ],
    "overview": "Advanced Elven Archer offering row cleansing with Pure Light and magic damage conferral."
  },
  {
    "id": "bryce-legionnaire",
    "image": "/images/characters/legionnaire.png",
    "name": "Bryce (Legionnaire)",
    "category": "Armored",
    "role": "Tank",
    "tier": "S+",
    "icon": "🛡️",
    "baseStats": {
      "hp": 118,
      "physAtk": 72,
      "magAtk": 18,
      "physDef": 102,
      "magDef": 44,
      "initiative": 19,
      "evasion": 10,
      "critRate": 8
    },
    "activeSkills": [
      {
        "name": "Heavy Shield Bash",
        "apCost": 1,
        "potency": 100,
        "target": "Single Enemy",
        "description": "Stuns the target with heavy shield bash.",
        "flags": [
          "Physical",
          "Stun"
        ]
      }
    ],
    "passiveSkills": [
      {
        "name": "Heavy Cover",
        "ppCost": 1,
        "trigger": "Before Ally Attacked",
        "description": "Covers an ally from physical damage."
      }
    ],
    "bestGrowthTypes": [
      "Guardian",
      "Guardian"
    ],
    "synergiesWith": [
      "yunifi-snow-ranger",
      "lex-vanguard"
    ],
    "recommendedEquipment": [
      "Greatshield of Fortitude",
      "Heavy Guard Shield"
    ],
    "overview": "Promoted from Hoplite to Legionnaire. The frontline shield protecting Yunifi and Ramona."
  },
  {
    "id": "lex-vanguard",
    "image": "/images/characters/vanguard.png",
    "name": "Lex (Vanguard)",
    "category": "Infantry",
    "role": "Tank",
    "tier": "S+",
    "icon": "🛡️",
    "baseStats": {
      "hp": 96,
      "physAtk": 80,
      "magAtk": 22,
      "physDef": 84,
      "magDef": 54,
      "initiative": 33,
      "evasion": 30,
      "critRate": 15
    },
    "activeSkills": [
      {
        "name": "Shield Bash",
        "apCost": 1,
        "potency": 100,
        "target": "Single Enemy",
        "description": "Stuns target with shield.",
        "flags": [
          "Physical",
          "Stun"
        ]
      }
    ],
    "passiveSkills": [
      {
        "name": "Arrow Cover",
        "ppCost": 1,
        "trigger": "When Ally Targeted by Arrow",
        "description": "Interceps and negates 100% arrow damage."
      }
    ],
    "bestGrowthTypes": [
      "Guardian",
      "Defender"
    ],
    "synergiesWith": [
      "bryce-legionnaire",
      "yunifi-snow-ranger"
    ],
    "recommendedEquipment": [
      "Deflect Shield",
      "Lapis Pendant"
    ],
    "overview": "Promoted from Fighter to Vanguard. Covers Ramona and Yunifi against anti-flying and bow strikes."
  },
  {
    "id": "rosalinde-elven-augur",
    "image": "/images/characters/rosalinde-elven-prophet.png",
    "name": "Rosalinde (Elven Augur)",
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
      "ithilion-elven-fencer",
      "railanor-elven-fencer"
    ],
    "recommendedEquipment": [
      "Sylphid Spear",
      "Elven Crown"
    ],
    "overview": "Unique Elven Augur. Stuns enemy frontlines at battle start and unleashes 210 potency Elemental Roar."
  },
  {
    "id": "eltolinde-elven-sibyl",
    "image": "/images/characters/eltolinde-elven-sibyl.png",
    "name": "Eltolinde (Elven Sibyl)",
    "category": "Infantry",
    "role": "Support",
    "tier": "SS",
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
      "rosalinde-elven-augur",
      "galadmir-elven-archer"
    ],
    "recommendedEquipment": [
      "Kingslance Elhal",
      "Lapis Pendant"
    ],
    "overview": "Unique Elven Sibyl. Pairs with Rosalinde for consecutive Elemental Roar nukes with Faerie barriers."
  },
  {
    "id": "ithilion-elven-fencer",
    "image": "/images/characters/elven-fencer.png",
    "name": "Ithilion (Elven Fencer)",
    "category": "Infantry",
    "role": "Physical DPS",
    "tier": "S+",
    "icon": "⚔️",
    "baseStats": {
      "hp": 86,
      "physAtk": 85,
      "magAtk": 85,
      "physDef": 55,
      "magDef": 65,
      "initiative": 44,
      "evasion": 72,
      "critRate": 20
    },
    "activeSkills": [
      {
        "name": "Lightning Sword",
        "apCost": 1,
        "potency": 120,
        "target": "Single Enemy",
        "description": "Hybrid physical/magic thrust that inflicts Stun.",
        "flags": [
          "Physical",
          "Magical",
          "Stun"
        ]
      }
    ],
    "passiveSkills": [
      {
        "name": "Mirage Step",
        "ppCost": 1,
        "trigger": "When Attacked",
        "description": "Evades attack and increases own evasion."
      }
    ],
    "bestGrowthTypes": [
      "Speedster",
      "Keen"
    ],
    "synergiesWith": [
      "rosalinde-elven-augur",
      "eltolinde-elven-sibyl"
    ],
    "recommendedEquipment": [
      "Phantom Knight's Sword",
      "Raven Plume"
    ],
    "overview": "Advanced Elven Fencer providing agile hybrid frontline evasion and lightning stuns."
  },
  {
    "id": "railanor-elven-fencer",
    "image": "/images/characters/elven-fencer.png",
    "name": "Railanor (Elven Fencer)",
    "category": "Infantry",
    "role": "Physical DPS",
    "tier": "S+",
    "icon": "⚔️",
    "baseStats": {
      "hp": 84,
      "physAtk": 84,
      "magAtk": 86,
      "physDef": 54,
      "magDef": 66,
      "initiative": 45,
      "evasion": 74,
      "critRate": 20
    },
    "activeSkills": [
      {
        "name": "Windstorm Blade",
        "apCost": 1,
        "potency": 110,
        "target": "Row",
        "description": "Sweeps an enemy row with wind magic.",
        "flags": [
          "Magical",
          "Row"
        ]
      }
    ],
    "passiveSkills": [
      {
        "name": "Mirage Step",
        "ppCost": 1,
        "trigger": "When Attacked",
        "description": "Guarantees dodge against physical strikes."
      }
    ],
    "bestGrowthTypes": [
      "Speedster",
      "Speedster"
    ],
    "synergiesWith": [
      "rosalinde-elven-augur",
      "ithilion-elven-fencer"
    ],
    "recommendedEquipment": [
      "Runic Sword",
      "Lapis Pendant"
    ],
    "overview": "Advanced Elven Fencer offering frontline hybrid evasion and wind sword strikes."
  },
  {
    "id": "galadmir-elven-archer",
    "image": "/images/characters/elven-fencer.png",
    "name": "Galadmir (Elven Archer)",
    "category": "Infantry",
    "role": "Support",
    "tier": "S+",
    "icon": "🏹",
    "baseStats": {
      "hp": 82,
      "physAtk": 76,
      "magAtk": 84,
      "physDef": 48,
      "magDef": 78,
      "initiative": 41,
      "evasion": 46,
      "critRate": 18
    },
    "activeSkills": [
      {
        "name": "Icicle Arrow",
        "apCost": 1,
        "potency": 100,
        "target": "Back Row Enemy",
        "description": "Freezes backline casters.",
        "flags": [
          "Magical",
          "Freeze"
        ]
      }
    ],
    "passiveSkills": [
      {
        "name": "Pure Light",
        "ppCost": 1,
        "trigger": "When Ally Afflicted",
        "description": "Cleanses debuffs row-wide."
      }
    ],
    "bestGrowthTypes": [
      "All-Rounder",
      "Speedster"
    ],
    "synergiesWith": [
      "rosalinde-elven-augur",
      "eltolinde-elven-sibyl"
    ],
    "recommendedEquipment": [
      "Runic Bow",
      "Pure Light Amulet"
    ],
    "overview": "Advanced Elven Archer freezing backline threats and cleansing squad debuffs."
  },
  {
    "id": "amalia-dreadnought",
    "image": "/images/characters/high-lord.png",
    "name": "Amalia (Dreadnought)",
    "category": "Infantry",
    "role": "Physical DPS",
    "tier": "SS",
    "icon": "👑",
    "baseStats": {
      "hp": 130,
      "physAtk": 120,
      "magAtk": 10,
      "physDef": 80,
      "magDef": 40,
      "initiative": 22,
      "evasion": 15,
      "critRate": 25
    },
    "activeSkills": [
      {
        "name": "Penetrate",
        "apCost": 2,
        "potency": 180,
        "target": "Column",
        "description": "Shatters an entire column of enemies ignoring 50% defense.",
        "flags": [
          "Physical",
          "Column",
          "Armor-Pierce"
        ]
      },
      {
        "name": "Wild Slash",
        "apCost": 1,
        "potency": 140,
        "target": "Single Enemy",
        "description": "Massive greatsword cleave that breaks guard.",
        "flags": [
          "Physical",
          "Guard-Break"
        ]
      }
    ],
    "passiveSkills": [
      {
        "name": "Colossal Guard",
        "ppCost": 1,
        "trigger": "Before Attacked",
        "description": "Reduces incoming physical damage by 50%."
      },
      {
        "name": "Hawkeye Focus",
        "ppCost": 1,
        "trigger": "Before Attack",
        "description": "Grants True Strike and 100% Critical Hit."
      }
    ],
    "bestGrowthTypes": [
      "Offensive",
      "Offensive"
    ],
    "synergiesWith": [
      "bertrand-werebear",
      "monica-sainted-knight",
      "aramis-swordmaster"
    ],
    "recommendedEquipment": [
      "Grand Crusher Greatsword",
      "Heavy Guard Shield"
    ],
    "overview": "Coliseum Champion Dreadnought wielding colossal greatswords with 120 base attack and column-piercing power."
  },
  {
    "id": "bertrand-werebear",
    "image": "/images/characters/gladiator.png",
    "name": "Bertrand (Werebear)",
    "category": "Armored",
    "role": "Tank",
    "tier": "S+",
    "icon": "🐻",
    "baseStats": {
      "hp": 135,
      "physAtk": 88,
      "magAtk": 15,
      "physDef": 95,
      "magDef": 45,
      "initiative": 20,
      "evasion": 10,
      "critRate": 10
    },
    "activeSkills": [
      {
        "name": "Ground Slam",
        "apCost": 1,
        "potency": 110,
        "target": "Row",
        "description": "Slams ground and inflicts Stun on enemy row.",
        "flags": [
          "Physical",
          "Stun",
          "Row"
        ]
      }
    ],
    "passiveSkills": [
      {
        "name": "Indomitable Guard",
        "ppCost": 1,
        "isStartOfBattle": true,
        "trigger": "Start of Battle",
        "description": "Start of Battle: Boosts own Max HP and physical defense by +40%."
      }
    ],
    "bestGrowthTypes": [
      "Guardian",
      "Defender"
    ],
    "synergiesWith": [
      "amalia-dreadnought",
      "monica-sainted-knight"
    ],
    "recommendedEquipment": [
      "Greatshield of Fortitude",
      "Carnelian Pendant"
    ],
    "overview": "Unique Bestral Werebear. Taunts enemy physical threats with colossal HP pools and Ground Slam stuns."
  },
  {
    "id": "monica-sainted-knight",
    "image": "/images/characters/sainted-knight.png",
    "name": "Monica (Sainted Knight)",
    "category": "Cavalry",
    "role": "Support",
    "tier": "S+",
    "icon": "🛡️",
    "baseStats": {
      "hp": 92,
      "physAtk": 64,
      "magAtk": 78,
      "physDef": 68,
      "magDef": 90,
      "initiative": 35,
      "evasion": 34,
      "critRate": 12
    },
    "activeSkills": [
      {
        "name": "Row Heal",
        "apCost": 1,
        "potency": 100,
        "target": "Row",
        "description": "Heals frontline allies and removes status effects.",
        "flags": [
          "Healing",
          "Cleanse"
        ]
      }
    ],
    "passiveSkills": [
      {
        "name": "Magic Barrier",
        "ppCost": 1,
        "trigger": "When Hit by Magic",
        "description": "Shields allies from magic attacks."
      }
    ],
    "bestGrowthTypes": [
      "Defender",
      "Speedster"
    ],
    "synergiesWith": [
      "amalia-dreadnought",
      "bertrand-werebear"
    ],
    "recommendedEquipment": [
      "Radiant Shield",
      "Lapis Pendant"
    ],
    "overview": "Promoted from Radiant Knight to Sainted Knight. Sustains Amalia's frontline with healing and Magic Barrier."
  },
  {
    "id": "aramis-swordmaster",
    "image": "/images/characters/swordmaster.png",
    "name": "Aramis (Swordmaster)",
    "category": "Infantry",
    "role": "Physical DPS",
    "tier": "S+",
    "icon": "⚔️",
    "baseStats": {
      "hp": 82,
      "physAtk": 92,
      "magAtk": 28,
      "physDef": 52,
      "magDef": 48,
      "initiative": 46,
      "evasion": 68,
      "critRate": 35
    },
    "activeSkills": [
      {
        "name": "Meteor Slash",
        "apCost": 2,
        "potency": 180,
        "target": "Single Enemy",
        "description": "Rapid 9-hit blade flurry with high critical multiplier.",
        "flags": [
          "Physical",
          "Multi-Hit"
        ]
      }
    ],
    "passiveSkills": [
      {
        "name": "Parrying Slash",
        "ppCost": 1,
        "trigger": "When Attacked",
        "description": "Parries physical strike and retaliates.",
        "flags": [
          "Parry"
        ]
      }
    ],
    "bestGrowthTypes": [
      "Keen",
      "Keen"
    ],
    "synergiesWith": [
      "amalia-dreadnought",
      "mandrin-sniper"
    ],
    "recommendedEquipment": [
      "Notos's Sword",
      "Parrying Amulet"
    ],
    "overview": "Promoted from Swordfighter to Swordmaster. Precision duelist who finishes off targets weakened by Amalia."
  },
  {
    "id": "mandrin-sniper",
    "image": "/images/characters/sniper.png",
    "name": "Mandrin (Sniper)",
    "category": "Infantry",
    "role": "Physical DPS",
    "tier": "S+",
    "icon": "🏹",
    "baseStats": {
      "hp": 80,
      "physAtk": 90,
      "magAtk": 24,
      "physDef": 48,
      "magDef": 48,
      "initiative": 43,
      "evasion": 38,
      "critRate": 28
    },
    "activeSkills": [
      {
        "name": "Aerial Snipe",
        "apCost": 1,
        "potency": 120,
        "target": "Flying Enemy",
        "description": "True-strike anti-flying arrow shot.",
        "flags": [
          "Physical",
          "Anti-Flying",
          "True-Strike"
        ]
      }
    ],
    "passiveSkills": [
      {
        "name": "Eagle Eye",
        "ppCost": 1,
        "trigger": "Before Attack",
        "description": "100% Critical Hit and True Strike."
      }
    ],
    "bestGrowthTypes": [
      "Offensive",
      "Keen"
    ],
    "synergiesWith": [
      "amalia-dreadnought",
      "aramis-swordmaster"
    ],
    "recommendedEquipment": [
      "Apeliotes's Bow",
      "Sniper's Amber Lens"
    ],
    "overview": "Promoted from Hunter to Sniper. Eliminates flying scouts and evasive threats with True Strike."
  },
  {
    "id": "dinah-werewolf",
    "image": "/images/characters/werewolf.png",
    "name": "Dinah (Werewolf)",
    "category": "Infantry",
    "role": "Physical DPS",
    "tier": "SS",
    "icon": "🐺",
    "baseStats": {
      "hp": 92,
      "physAtk": 104,
      "magAtk": 20,
      "physDef": 60,
      "magDef": 45,
      "initiative": 48,
      "evasion": 65,
      "critRate": 30
    },
    "activeSkills": [
      {
        "name": "Piercing Claw",
        "apCost": 1,
        "potency": 130,
        "target": "Column",
        "description": "Strikes through a column of enemies with savage claws.",
        "flags": [
          "Physical",
          "Column"
        ]
      },
      {
        "name": "Night Hunt",
        "apCost": 1,
        "potency": 120,
        "target": "Low HP Enemy",
        "description": "Deals 200% damage to targets below 50% HP.",
        "flags": [
          "Physical",
          "Execute"
        ]
      }
    ],
    "passiveSkills": [
      {
        "name": "Wolfpack Roar",
        "ppCost": 1,
        "isStartOfBattle": true,
        "trigger": "Start of Battle",
        "description": "Start of Battle: Increases Phys Atk and Initiative of Bestral allies by +20%."
      },
      {
        "name": "Chasing Slash",
        "ppCost": 1,
        "trigger": "After Ally Lands Hit",
        "description": "Pursues the damaged enemy with an immediate claw strike."
      }
    ],
    "bestGrowthTypes": [
      "Keen",
      "Offensive"
    ],
    "synergiesWith": [
      "govil-werewolf",
      "morpan-werebear",
      "raenys-featherbow"
    ],
    "recommendedEquipment": [
      "Wolfpack Gauntlets",
      "Carnelian Pendant"
    ],
    "overview": "Unique Bestral Werewolf leader. Stacks Bestral Night stats and executes low HP targets with Chasing Slash."
  },
  {
    "id": "govil-werewolf",
    "image": "/images/characters/werewolf.png",
    "name": "Govil (Werewolf)",
    "category": "Infantry",
    "role": "Physical DPS",
    "tier": "S+",
    "icon": "🐺",
    "baseStats": {
      "hp": 90,
      "physAtk": 100,
      "magAtk": 20,
      "physDef": 58,
      "magDef": 44,
      "initiative": 46,
      "evasion": 62,
      "critRate": 28
    },
    "activeSkills": [
      {
        "name": "Shadow Slash",
        "apCost": 1,
        "potency": 120,
        "target": "Single Enemy",
        "description": "Attacks enemy with armor-shredding claw.",
        "flags": [
          "Physical"
        ]
      }
    ],
    "passiveSkills": [
      {
        "name": "Chasing Slash",
        "ppCost": 1,
        "trigger": "After Ally Lands Hit",
        "description": "Follow-up pursuit strike."
      }
    ],
    "bestGrowthTypes": [
      "Offensive",
      "Keen"
    ],
    "synergiesWith": [
      "dinah-werewolf",
      "morpan-werebear"
    ],
    "recommendedEquipment": [
      "Carnelian Blade",
      "Raven Plume"
    ],
    "overview": "Unique Bestral Werewolf striker. Chains pursuit attacks in tandem with Dinah."
  },
  {
    "id": "morpan-werebear",
    "image": "/images/characters/gladiator.png",
    "name": "Morpan (Werebear)",
    "category": "Armored",
    "role": "Tank",
    "tier": "S+",
    "icon": "🐻",
    "baseStats": {
      "hp": 130,
      "physAtk": 85,
      "magAtk": 15,
      "physDef": 92,
      "magDef": 42,
      "initiative": 20,
      "evasion": 10,
      "critRate": 10
    },
    "activeSkills": [
      {
        "name": "Ground Slam",
        "apCost": 1,
        "potency": 100,
        "target": "Row",
        "description": "Stuns front row enemies.",
        "flags": [
          "Physical",
          "Stun"
        ]
      }
    ],
    "passiveSkills": [
      {
        "name": "Heavy Cover",
        "ppCost": 1,
        "trigger": "Before Ally Attacked",
        "description": "Protects fragile bestrals."
      }
    ],
    "bestGrowthTypes": [
      "Guardian",
      "Defender"
    ],
    "synergiesWith": [
      "dinah-werewolf",
      "govil-werewolf"
    ],
    "recommendedEquipment": [
      "Heavy Guard Shield",
      "Lapis Pendant"
    ],
    "overview": "Bestral frontline tank absorbing blows and stunning enemy vanguards."
  },
  {
    "id": "raenys-featherbow",
    "image": "/images/characters/raenys-featherbow.png",
    "name": "Raenys (Featherbow)",
    "category": "Flying",
    "role": "Debuffer",
    "tier": "SS",
    "icon": "🪶",
    "baseStats": {
      "hp": 80,
      "physAtk": 86,
      "magAtk": 50,
      "physDef": 50,
      "magDef": 85,
      "initiative": 52,
      "evasion": 88,
      "critRate": 20
    },
    "activeSkills": [
      {
        "name": "Shining Arrow",
        "apCost": 1,
        "potency": 100,
        "target": "Row",
        "description": "Fires radiant arrows that inflict Blindness on entire enemy row.",
        "flags": [
          "Magical",
          "Row",
          "Blind"
        ]
      }
    ],
    "passiveSkills": [
      {
        "name": "Photon Arrow",
        "ppCost": 1,
        "isStartOfBattle": true,
        "trigger": "Start of Battle",
        "description": "Start of Battle: Blinds front row enemy strikers immediately."
      },
      {
        "name": "Sky Evasion",
        "ppCost": 1,
        "trigger": "When Attacked",
        "description": "Evades ground attacks."
      }
    ],
    "bestGrowthTypes": [
      "Speedster",
      "Speedster"
    ],
    "synergiesWith": [
      "dinah-werewolf",
      "govil-werewolf"
    ],
    "recommendedEquipment": [
      "Apeliotes's Bow",
      "Angel Plume"
    ],
    "overview": "Unique Angel Featherbow. Highest base initiative in the game with Start-of-Battle row Blindness."
  },
  {
    "id": "jeremy-landsknecht",
    "image": "/images/characters/landsknecht.png",
    "name": "Jeremy (Landsknecht)",
    "category": "Infantry",
    "role": "Physical DPS",
    "tier": "S+",
    "icon": "🗡️",
    "baseStats": {
      "hp": 96,
      "physAtk": 100,
      "magAtk": 20,
      "physDef": 65,
      "magDef": 40,
      "initiative": 32,
      "evasion": 25,
      "critRate": 22
    },
    "activeSkills": [
      {
        "name": "Killing Chain",
        "apCost": 1,
        "potency": 130,
        "target": "Single Enemy",
        "description": "Powerful strike that refunds AP on kill.",
        "flags": [
          "Physical"
        ]
      }
    ],
    "passiveSkills": [
      {
        "name": "Following Slash",
        "ppCost": 1,
        "trigger": "After Ally Hits Target",
        "description": "Performs an immediate follow-up slash."
      }
    ],
    "bestGrowthTypes": [
      "Offensive",
      "Keen"
    ],
    "synergiesWith": [
      "dinah-werewolf",
      "govil-werewolf"
    ],
    "recommendedEquipment": [
      "Kingsblade Cornix",
      "Carnelian Pendant"
    ],
    "overview": "Promoted from Mercenary to Landsknecht. Chains Following Slash pursuits to execute damaged foes."
  },
  {
    "id": "sanatio-featherstaff",
    "image": "/images/characters/bishop.png",
    "name": "Sanatio (Featherstaff)",
    "category": "Flying",
    "role": "Support",
    "tier": "SS",
    "icon": "🪶",
    "baseStats": {
      "hp": 86,
      "physAtk": 30,
      "magAtk": 92,
      "physDef": 55,
      "magDef": 105,
      "initiative": 40,
      "evasion": 70,
      "critRate": 10
    },
    "activeSkills": [
      {
        "name": "Sacred Heal",
        "apCost": 1,
        "potency": 120,
        "target": "All Allies",
        "description": "Heals all allies and bestows magic resistance.",
        "flags": [
          "Healing"
        ]
      }
    ],
    "passiveSkills": [
      {
        "name": "Sacred Barrier",
        "ppCost": 1,
        "isStartOfBattle": true,
        "trigger": "Start of Battle",
        "description": "Start of Battle: Grants a 2-hit damage nullification barrier to entire squad."
      },
      {
        "name": "Holy Refresh",
        "ppCost": 1,
        "trigger": "When Ally Afflicted",
        "description": "Cleanses afflictions."
      }
    ],
    "bestGrowthTypes": [
      "Guardian",
      "Speedster"
    ],
    "synergiesWith": [
      "ochlys-feathersword",
      "umerus-feathersword",
      "tatiana-bishop"
    ],
    "recommendedEquipment": [
      "Sacred Feather Rod",
      "Archbishop's Mitre"
    ],
    "overview": "Unique Angel Featherstaff. Protects the squad with Sacred Barrier (2-hit complete damage nullification at battle start)."
  },
  {
    "id": "ochlys-feathersword",
    "image": "/images/characters/feathersword.png",
    "name": "Ochlys (Feathersword)",
    "category": "Flying",
    "role": "Tank",
    "tier": "S+",
    "icon": "🪶",
    "baseStats": {
      "hp": 86,
      "physAtk": 88,
      "magAtk": 40,
      "physDef": 60,
      "magDef": 75,
      "initiative": 48,
      "evasion": 88,
      "critRate": 20
    },
    "activeSkills": [
      {
        "name": "Spiral Sword",
        "apCost": 1,
        "potency": 110,
        "target": "Single Enemy",
        "description": "High speed aerial slash that bypasses guard.",
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
        "description": "Increases own Initiative by +10 and Phys Atk by +15% upon dodging."
      },
      {
        "name": "Shield Reflect",
        "ppCost": 1,
        "trigger": "Before Attacked",
        "description": "Reflects incoming magic damage back."
      }
    ],
    "bestGrowthTypes": [
      "Speedster",
      "Keen"
    ],
    "synergiesWith": [
      "sanatio-featherstaff",
      "umerus-feathersword"
    ],
    "recommendedEquipment": [
      "Angel's Reflection Shield",
      "Notos's Sword"
    ],
    "overview": "Unique Angel Feathersword. Evasion tank with stacking dodge speed buffs and magic reflection."
  },
  {
    "id": "umerus-feathersword",
    "image": "/images/characters/valkyria.png",
    "name": "Umerus (Feathersword)",
    "category": "Flying",
    "role": "Physical DPS",
    "tier": "S+",
    "icon": "🪶",
    "baseStats": {
      "hp": 84,
      "physAtk": 90,
      "magAtk": 38,
      "physDef": 58,
      "magDef": 74,
      "initiative": 47,
      "evasion": 86,
      "critRate": 22
    },
    "activeSkills": [
      {
        "name": "Spiral Sword",
        "apCost": 1,
        "potency": 110,
        "target": "Single Enemy",
        "description": "Guard-bypassing aerial thrust.",
        "flags": [
          "Physical"
        ]
      }
    ],
    "passiveSkills": [
      {
        "name": "Accelerate",
        "ppCost": 1,
        "trigger": "After Evading",
        "description": "Boosts attack and speed on dodge."
      }
    ],
    "bestGrowthTypes": [
      "Speedster",
      "Offensive"
    ],
    "synergiesWith": [
      "sanatio-featherstaff",
      "ochlys-feathersword"
    ],
    "recommendedEquipment": [
      "Hallowed Blade",
      "Wingline Standard"
    ],
    "overview": "Unique Angel Feathersword. High agility aerial duelist pairing with Ochlys."
  },
  {
    "id": "tatiana-bishop",
    "image": "/images/characters/bishop.png",
    "name": "Tatiana (Bishop)",
    "category": "Infantry",
    "role": "Support",
    "tier": "S+",
    "icon": "🕊️",
    "baseStats": {
      "hp": 78,
      "physAtk": 24,
      "magAtk": 86,
      "physDef": 50,
      "magDef": 94,
      "initiative": 31,
      "evasion": 30,
      "critRate": 10
    },
    "activeSkills": [
      {
        "name": "Row Heal",
        "apCost": 1,
        "potency": 100,
        "target": "Row",
        "description": "Heals an entire row and removes debuffs.",
        "flags": [
          "Healing",
          "Cleanse"
        ]
      }
    ],
    "passiveSkills": [
      {
        "name": "Holy Refresh",
        "ppCost": 1,
        "trigger": "When Ally Afflicted",
        "description": "Removes negative status effects."
      }
    ],
    "bestGrowthTypes": [
      "Guardian",
      "Defender"
    ],
    "synergiesWith": [
      "sanatio-featherstaff",
      "gloucester-doom-knight"
    ],
    "recommendedEquipment": [
      "Ring of the Maiden",
      "Lapis Pendant"
    ],
    "overview": "Promoted from Cleric to Bishop. Maintains 100% squad health behind Sanatio's Sacred Barrier."
  },
  {
    "id": "gloucester-doom-knight",
    "image": "/images/characters/doom-knight.png",
    "name": "Gloucester (Doom Knight)",
    "category": "Cavalry",
    "role": "Magic DPS",
    "tier": "S+",
    "icon": "🔥",
    "baseStats": {
      "hp": 105,
      "physAtk": 95,
      "magAtk": 70,
      "physDef": 72,
      "magDef": 60,
      "initiative": 32,
      "evasion": 25,
      "critRate": 15
    },
    "activeSkills": [
      {
        "name": "Dark Flame",
        "apCost": 2,
        "potency": 160,
        "target": "Row",
        "description": "Unleashes dark flames across an enemy row scaling with lost HP.",
        "flags": [
          "Magical",
          "Physical",
          "Row"
        ]
      }
    ],
    "passiveSkills": [
      {
        "name": "Vengeful Guard",
        "ppCost": 1,
        "trigger": "After Taking Damage",
        "description": "Increases own physical and magic attack by +25%."
      }
    ],
    "bestGrowthTypes": [
      "Offensive",
      "Offensive"
    ],
    "synergiesWith": [
      "sanatio-featherstaff",
      "tatiana-bishop"
    ],
    "recommendedEquipment": [
      "Dark Knight Cleaver",
      "Carnelian Pendant"
    ],
    "overview": "Promoted from Dark Knight to Doom Knight. Unleashes devastating hybrid Dark Flame row nukes powered by vengeance."
  },
  {
    "id": "josef-paladin",
    "image": "/images/characters/paladin.png",
    "name": "Josef (Paladin)",
    "category": "Cavalry",
    "role": "Support",
    "tier": "S+",
    "icon": "🛡️",
    "baseStats": {
      "hp": 98,
      "physAtk": 78,
      "magAtk": 65,
      "physDef": 75,
      "magDef": 80,
      "initiative": 34,
      "evasion": 30,
      "critRate": 12
    },
    "activeSkills": [
      {
        "name": "Holy Strike",
        "apCost": 1,
        "potency": 110,
        "target": "Single Enemy",
        "description": "Strikes target and heals adjacent ally.",
        "flags": [
          "Physical",
          "Healing"
        ]
      }
    ],
    "passiveSkills": [
      {
        "name": "Divine Guard",
        "ppCost": 1,
        "trigger": "Before Ally Attacked",
        "description": "Covers an ally and halves damage."
      }
    ],
    "bestGrowthTypes": [
      "All-Rounder",
      "Defender"
    ],
    "synergiesWith": [
      "alain-high-lord"
    ],
    "recommendedEquipment": [
      "Hallowed Blade",
      "Lapis Pendant"
    ],
    "overview": "Unique promoted Paladin offering hybrid cavalry healing and frontline cover."
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
      "alain-high-lord"
    ],
    "recommendedEquipment": [
      "Carnelian Pendant",
      "Lapis Pendant"
    ],
    "overview": "Official class Arbalist specializing in tactical combat maneuvers."
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
      "alain-high-lord"
    ],
    "recommendedEquipment": [
      "Carnelian Pendant",
      "Lapis Pendant"
    ],
    "overview": "Official class Berserker specializing in tactical combat maneuvers."
  },
  {
    "id": "bishop",
    "image": "/images/characters/bishop.png",
    "name": "Bishop",
    "tier": "A+",
    "category": "Infantry",
    "role": "Support",
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
      "alain-high-lord"
    ],
    "recommendedEquipment": [
      "Carnelian Pendant",
      "Lapis Pendant"
    ],
    "overview": "Official class Bishop specializing in tactical combat maneuvers."
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
      "alain-high-lord"
    ],
    "recommendedEquipment": [
      "Carnelian Pendant",
      "Lapis Pendant"
    ],
    "overview": "Official class Breaker specializing in tactical combat maneuvers."
  },
  {
    "id": "cleric",
    "image": "/images/characters/cleric.png",
    "name": "Cleric",
    "tier": "A+",
    "category": "Infantry",
    "role": "Support",
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
      "alain-high-lord"
    ],
    "recommendedEquipment": [
      "Carnelian Pendant",
      "Lapis Pendant"
    ],
    "overview": "Official class Cleric specializing in tactical combat maneuvers."
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
      "alain-high-lord"
    ],
    "recommendedEquipment": [
      "Carnelian Pendant",
      "Lapis Pendant"
    ],
    "overview": "Official class Crusader specializing in tactical combat maneuvers."
  },
  {
    "id": "dark-knight",
    "image": "/images/characters/dark-knight.png",
    "name": "Dark Knight",
    "tier": "A+",
    "category": "Cavalry",
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
      "alain-high-lord"
    ],
    "recommendedEquipment": [
      "Carnelian Pendant",
      "Lapis Pendant"
    ],
    "overview": "Official class Dark Knight specializing in tactical combat maneuvers."
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
      "alain-high-lord"
    ],
    "recommendedEquipment": [
      "Carnelian Pendant",
      "Lapis Pendant"
    ],
    "overview": "Official class Dark Lord specializing in tactical combat maneuvers."
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
      "alain-high-lord"
    ],
    "recommendedEquipment": [
      "Carnelian Pendant",
      "Lapis Pendant"
    ],
    "overview": "Official class Dark Marquess specializing in tactical combat maneuvers."
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
      "alain-high-lord"
    ],
    "recommendedEquipment": [
      "Carnelian Pendant",
      "Lapis Pendant"
    ],
    "overview": "Official class Dark Marquess (Axe) specializing in tactical combat maneuvers."
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
      "alain-high-lord"
    ],
    "recommendedEquipment": [
      "Carnelian Pendant",
      "Lapis Pendant"
    ],
    "overview": "Official class Dark Marquess (Spear) specializing in tactical combat maneuvers."
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
      "alain-high-lord"
    ],
    "recommendedEquipment": [
      "Carnelian Pendant",
      "Lapis Pendant"
    ],
    "overview": "Official class Dark Marquess (Staff) specializing in tactical combat maneuvers."
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
      "alain-high-lord"
    ],
    "recommendedEquipment": [
      "Carnelian Pendant",
      "Lapis Pendant"
    ],
    "overview": "Official class Dark Marquess (Sword) specializing in tactical combat maneuvers."
  },
  {
    "id": "doom-knight",
    "image": "/images/characters/doom-knight.png",
    "name": "Doom Knight",
    "tier": "A+",
    "category": "Cavalry",
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
      "alain-high-lord"
    ],
    "recommendedEquipment": [
      "Carnelian Pendant",
      "Lapis Pendant"
    ],
    "overview": "Official class Doom Knight specializing in tactical combat maneuvers."
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
      "alain-high-lord"
    ],
    "recommendedEquipment": [
      "Carnelian Pendant",
      "Lapis Pendant"
    ],
    "overview": "Official class Dreadnought specializing in tactical combat maneuvers."
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
      "alain-high-lord"
    ],
    "recommendedEquipment": [
      "Carnelian Pendant",
      "Lapis Pendant"
    ],
    "overview": "Official class Elven Archer specializing in tactical combat maneuvers."
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
      "alain-high-lord"
    ],
    "recommendedEquipment": [
      "Carnelian Pendant",
      "Lapis Pendant"
    ],
    "overview": "Official class Elven Augur specializing in tactical combat maneuvers."
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
      "alain-high-lord"
    ],
    "recommendedEquipment": [
      "Carnelian Pendant",
      "Lapis Pendant"
    ],
    "overview": "Official class Elven Fencer specializing in tactical combat maneuvers."
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
      "alain-high-lord"
    ],
    "recommendedEquipment": [
      "Carnelian Pendant",
      "Lapis Pendant"
    ],
    "overview": "Official class Elven Sibyl specializing in tactical combat maneuvers."
  },
  {
    "id": "featherbow",
    "image": "/images/characters/featherbow.png",
    "name": "Featherbow",
    "tier": "A+",
    "category": "Flying",
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
      "alain-high-lord"
    ],
    "recommendedEquipment": [
      "Carnelian Pendant",
      "Lapis Pendant"
    ],
    "overview": "Official class Featherbow specializing in tactical combat maneuvers."
  },
  {
    "id": "feathershield",
    "image": "/images/characters/feathershield.png",
    "name": "Feathershield",
    "tier": "A+",
    "category": "Flying",
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
      "alain-high-lord"
    ],
    "recommendedEquipment": [
      "Carnelian Pendant",
      "Lapis Pendant"
    ],
    "overview": "Official class Feathershield specializing in tactical combat maneuvers."
  },
  {
    "id": "featherstaff",
    "image": "/images/characters/featherstaff.png",
    "name": "Featherstaff",
    "tier": "A+",
    "category": "Flying",
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
      "alain-high-lord"
    ],
    "recommendedEquipment": [
      "Carnelian Pendant",
      "Lapis Pendant"
    ],
    "overview": "Official class Featherstaff specializing in tactical combat maneuvers."
  },
  {
    "id": "feathersword",
    "image": "/images/characters/feathersword.png",
    "name": "Feathersword",
    "tier": "A+",
    "category": "Flying",
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
      "alain-high-lord"
    ],
    "recommendedEquipment": [
      "Carnelian Pendant",
      "Lapis Pendant"
    ],
    "overview": "Official class Feathersword specializing in tactical combat maneuvers."
  },
  {
    "id": "fighter",
    "image": "/images/characters/fighter.png",
    "name": "Fighter",
    "tier": "A+",
    "category": "Infantry",
    "role": "Tank",
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
      "alain-high-lord"
    ],
    "recommendedEquipment": [
      "Carnelian Pendant",
      "Lapis Pendant"
    ],
    "overview": "Official class Fighter specializing in tactical combat maneuvers."
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
      "alain-high-lord"
    ],
    "recommendedEquipment": [
      "Carnelian Pendant",
      "Lapis Pendant"
    ],
    "overview": "Official class Gladiator specializing in tactical combat maneuvers."
  },
  {
    "id": "great-knight",
    "image": "/images/characters/great-knight.png",
    "name": "Great Knight",
    "tier": "A+",
    "category": "Cavalry",
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
      "alain-high-lord"
    ],
    "recommendedEquipment": [
      "Carnelian Pendant",
      "Lapis Pendant"
    ],
    "overview": "Official class Great Knight specializing in tactical combat maneuvers."
  },
  {
    "id": "gryphon-knight",
    "image": "/images/characters/gryphon-knight.png",
    "name": "Gryphon Knight",
    "tier": "A+",
    "category": "Cavalry",
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
      "alain-high-lord"
    ],
    "recommendedEquipment": [
      "Carnelian Pendant",
      "Lapis Pendant"
    ],
    "overview": "Official class Gryphon Knight specializing in tactical combat maneuvers."
  },
  {
    "id": "gryphon-master",
    "image": "/images/characters/gryphon-master.png",
    "name": "Gryphon Master",
    "tier": "A+",
    "category": "Flying",
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
      "alain-high-lord"
    ],
    "recommendedEquipment": [
      "Carnelian Pendant",
      "Lapis Pendant"
    ],
    "overview": "Official class Gryphon Master specializing in tactical combat maneuvers."
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
      "alain-high-lord"
    ],
    "recommendedEquipment": [
      "Carnelian Pendant",
      "Lapis Pendant"
    ],
    "overview": "Official class High Lord specializing in tactical combat maneuvers."
  },
  {
    "id": "high-priestess",
    "image": "/images/characters/high-priestess.png",
    "name": "High Priestess",
    "tier": "A+",
    "category": "Infantry",
    "role": "Support",
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
      "alain-high-lord"
    ],
    "recommendedEquipment": [
      "Carnelian Pendant",
      "Lapis Pendant"
    ],
    "overview": "Official class High Priestess specializing in tactical combat maneuvers."
  },
  {
    "id": "hoplite",
    "image": "/images/characters/hoplite.png",
    "name": "Hoplite",
    "tier": "A+",
    "category": "Armored",
    "role": "Tank",
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
      "alain-high-lord"
    ],
    "recommendedEquipment": [
      "Carnelian Pendant",
      "Lapis Pendant"
    ],
    "overview": "Official class Hoplite specializing in tactical combat maneuvers."
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
      "alain-high-lord"
    ],
    "recommendedEquipment": [
      "Carnelian Pendant",
      "Lapis Pendant"
    ],
    "overview": "Official class Housecarl specializing in tactical combat maneuvers."
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
      "alain-high-lord"
    ],
    "recommendedEquipment": [
      "Carnelian Pendant",
      "Lapis Pendant"
    ],
    "overview": "Official class Hunter specializing in tactical combat maneuvers."
  },
  {
    "id": "knight",
    "image": "/images/characters/knight.png",
    "name": "Knight",
    "tier": "A+",
    "category": "Cavalry",
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
      "alain-high-lord"
    ],
    "recommendedEquipment": [
      "Carnelian Pendant",
      "Lapis Pendant"
    ],
    "overview": "Official class Knight specializing in tactical combat maneuvers."
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
      "alain-high-lord"
    ],
    "recommendedEquipment": [
      "Carnelian Pendant",
      "Lapis Pendant"
    ],
    "overview": "Official class Landsknecht specializing in tactical combat maneuvers."
  },
  {
    "id": "legionnaire",
    "image": "/images/characters/legionnaire.png",
    "name": "Legionnaire",
    "tier": "A+",
    "category": "Armored",
    "role": "Tank",
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
      "alain-high-lord"
    ],
    "recommendedEquipment": [
      "Carnelian Pendant",
      "Lapis Pendant"
    ],
    "overview": "Official class Legionnaire specializing in tactical combat maneuvers."
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
      "alain-high-lord"
    ],
    "recommendedEquipment": [
      "Carnelian Pendant",
      "Lapis Pendant"
    ],
    "overview": "Official class Lord specializing in tactical combat maneuvers."
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
      "alain-high-lord"
    ],
    "recommendedEquipment": [
      "Carnelian Pendant",
      "Lapis Pendant"
    ],
    "overview": "Official class Necromancer specializing in tactical combat maneuvers."
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
      "alain-high-lord"
    ],
    "recommendedEquipment": [
      "Carnelian Pendant",
      "Lapis Pendant"
    ],
    "overview": "Official class Overlord specializing in tactical combat maneuvers."
  },
  {
    "id": "paladin",
    "image": "/images/characters/paladin.png",
    "name": "Paladin",
    "tier": "A+",
    "category": "Cavalry",
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
      "alain-high-lord"
    ],
    "recommendedEquipment": [
      "Carnelian Pendant",
      "Lapis Pendant"
    ],
    "overview": "Official class Paladin specializing in tactical combat maneuvers."
  },
  {
    "id": "priestess",
    "image": "/images/characters/priestess.png",
    "name": "Priestess",
    "tier": "A+",
    "category": "Infantry",
    "role": "Support",
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
      "alain-high-lord"
    ],
    "recommendedEquipment": [
      "Carnelian Pendant",
      "Lapis Pendant"
    ],
    "overview": "Official class Priestess specializing in tactical combat maneuvers."
  },
  {
    "id": "prince",
    "image": "/images/characters/prince.png",
    "name": "Prince",
    "tier": "A+",
    "category": "Infantry",
    "role": "Support",
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
      "alain-high-lord"
    ],
    "recommendedEquipment": [
      "Carnelian Pendant",
      "Lapis Pendant"
    ],
    "overview": "Official class Prince specializing in tactical combat maneuvers."
  },
  {
    "id": "radiant-knight",
    "image": "/images/characters/radiant-knight.png",
    "name": "Radiant Knight",
    "tier": "A+",
    "category": "Cavalry",
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
      "alain-high-lord"
    ],
    "recommendedEquipment": [
      "Carnelian Pendant",
      "Lapis Pendant"
    ],
    "overview": "Official class Radiant Knight specializing in tactical combat maneuvers."
  },
  {
    "id": "rogue",
    "image": "/images/characters/rogue.png",
    "name": "Rogue",
    "tier": "A+",
    "category": "Infantry",
    "role": "Debuffer",
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
      "alain-high-lord"
    ],
    "recommendedEquipment": [
      "Carnelian Pendant",
      "Lapis Pendant"
    ],
    "overview": "Official class Rogue specializing in tactical combat maneuvers."
  },
  {
    "id": "sainted-knight",
    "image": "/images/characters/sainted-knight.png",
    "name": "Sainted Knight",
    "tier": "A+",
    "category": "Cavalry",
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
      "alain-high-lord"
    ],
    "recommendedEquipment": [
      "Carnelian Pendant",
      "Lapis Pendant"
    ],
    "overview": "Official class Sainted Knight specializing in tactical combat maneuvers."
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
      "alain-high-lord"
    ],
    "recommendedEquipment": [
      "Carnelian Pendant",
      "Lapis Pendant"
    ],
    "overview": "Official class Sellsword specializing in tactical combat maneuvers."
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
      "alain-high-lord"
    ],
    "recommendedEquipment": [
      "Carnelian Pendant",
      "Lapis Pendant"
    ],
    "overview": "Official class Sergeant specializing in tactical combat maneuvers."
  },
  {
    "id": "shaman",
    "image": "/images/characters/shaman.png",
    "name": "Shaman",
    "tier": "A+",
    "category": "Infantry",
    "role": "Debuffer",
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
      "alain-high-lord"
    ],
    "recommendedEquipment": [
      "Carnelian Pendant",
      "Lapis Pendant"
    ],
    "overview": "Official class Shaman specializing in tactical combat maneuvers."
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
      "alain-high-lord"
    ],
    "recommendedEquipment": [
      "Carnelian Pendant",
      "Lapis Pendant"
    ],
    "overview": "Official class Shieldshooter specializing in tactical combat maneuvers."
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
      "alain-high-lord"
    ],
    "recommendedEquipment": [
      "Carnelian Pendant",
      "Lapis Pendant"
    ],
    "overview": "Official class Sniper specializing in tactical combat maneuvers."
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
      "alain-high-lord"
    ],
    "recommendedEquipment": [
      "Carnelian Pendant",
      "Lapis Pendant"
    ],
    "overview": "Official class Snow Ranger specializing in tactical combat maneuvers."
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
      "alain-high-lord"
    ],
    "recommendedEquipment": [
      "Carnelian Pendant",
      "Lapis Pendant"
    ],
    "overview": "Official class Soldier specializing in tactical combat maneuvers."
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
      "alain-high-lord"
    ],
    "recommendedEquipment": [
      "Carnelian Pendant",
      "Lapis Pendant"
    ],
    "overview": "Official class Sorceress specializing in tactical combat maneuvers."
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
      "alain-high-lord"
    ],
    "recommendedEquipment": [
      "Carnelian Pendant",
      "Lapis Pendant"
    ],
    "overview": "Official class Swordfighter specializing in tactical combat maneuvers."
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
      "alain-high-lord"
    ],
    "recommendedEquipment": [
      "Carnelian Pendant",
      "Lapis Pendant"
    ],
    "overview": "Official class Swordmaster specializing in tactical combat maneuvers."
  },
  {
    "id": "thief",
    "image": "/images/characters/thief.png",
    "name": "Thief",
    "tier": "A+",
    "category": "Infantry",
    "role": "Debuffer",
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
      "alain-high-lord"
    ],
    "recommendedEquipment": [
      "Carnelian Pendant",
      "Lapis Pendant"
    ],
    "overview": "Official class Thief specializing in tactical combat maneuvers."
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
      "alain-high-lord"
    ],
    "recommendedEquipment": [
      "Carnelian Pendant",
      "Lapis Pendant"
    ],
    "overview": "Official class Valkyria specializing in tactical combat maneuvers."
  },
  {
    "id": "vanguard",
    "image": "/images/characters/vanguard.png",
    "name": "Vanguard",
    "tier": "A+",
    "category": "Infantry",
    "role": "Tank",
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
      "alain-high-lord"
    ],
    "recommendedEquipment": [
      "Carnelian Pendant",
      "Lapis Pendant"
    ],
    "overview": "Official class Vanguard specializing in tactical combat maneuvers."
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
      "alain-high-lord"
    ],
    "recommendedEquipment": [
      "Carnelian Pendant",
      "Lapis Pendant"
    ],
    "overview": "Official class Viking specializing in tactical combat maneuvers."
  },
  {
    "id": "warlock",
    "image": "/images/characters/warlock.png",
    "name": "Warlock",
    "tier": "A+",
    "category": "Infantry",
    "role": "Magic DPS",
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
      "alain-high-lord"
    ],
    "recommendedEquipment": [
      "Carnelian Pendant",
      "Lapis Pendant"
    ],
    "overview": "Official class Warlock specializing in tactical combat maneuvers."
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
      "alain-high-lord"
    ],
    "recommendedEquipment": [
      "Carnelian Pendant",
      "Lapis Pendant"
    ],
    "overview": "Official class Warrior specializing in tactical combat maneuvers."
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
      "alain-high-lord"
    ],
    "recommendedEquipment": [
      "Carnelian Pendant",
      "Lapis Pendant"
    ],
    "overview": "Official class Werebear specializing in tactical combat maneuvers."
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
      "alain-high-lord"
    ],
    "recommendedEquipment": [
      "Carnelian Pendant",
      "Lapis Pendant"
    ],
    "overview": "Official class Werefox specializing in tactical combat maneuvers."
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
      "alain-high-lord"
    ],
    "recommendedEquipment": [
      "Carnelian Pendant",
      "Lapis Pendant"
    ],
    "overview": "Official class Werelion specializing in tactical combat maneuvers."
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
      "alain-high-lord"
    ],
    "recommendedEquipment": [
      "Carnelian Pendant",
      "Lapis Pendant"
    ],
    "overview": "Official class Wereowl specializing in tactical combat maneuvers."
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
      "alain-high-lord"
    ],
    "recommendedEquipment": [
      "Carnelian Pendant",
      "Lapis Pendant"
    ],
    "overview": "Official class Werewolf specializing in tactical combat maneuvers."
  },
  {
    "id": "witch",
    "image": "/images/characters/witch.png",
    "name": "Witch",
    "tier": "A+",
    "category": "Infantry",
    "role": "Magic DPS",
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
      "alain-high-lord"
    ],
    "recommendedEquipment": [
      "Carnelian Pendant",
      "Lapis Pendant"
    ],
    "overview": "Official class Witch specializing in tactical combat maneuvers."
  },
  {
    "id": "wizard",
    "image": "/images/characters/wizard.png",
    "name": "Wizard",
    "tier": "A+",
    "category": "Infantry",
    "role": "Magic DPS",
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
      "alain-high-lord"
    ],
    "recommendedEquipment": [
      "Carnelian Pendant",
      "Lapis Pendant"
    ],
    "overview": "Official class Wizard specializing in tactical combat maneuvers."
  },
  {
    "id": "wyvern-knight",
    "image": "/images/characters/wyvern-knight.png",
    "name": "Wyvern Knight",
    "tier": "A+",
    "category": "Cavalry",
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
      "alain-high-lord"
    ],
    "recommendedEquipment": [
      "Carnelian Pendant",
      "Lapis Pendant"
    ],
    "overview": "Official class Wyvern Knight specializing in tactical combat maneuvers."
  },
  {
    "id": "wyvern-master",
    "image": "/images/characters/wyvern-master.png",
    "name": "Wyvern Master",
    "tier": "A+",
    "category": "Flying",
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
      "alain-high-lord"
    ],
    "recommendedEquipment": [
      "Carnelian Pendant",
      "Lapis Pendant"
    ],
    "overview": "Official class Wyvern Master specializing in tactical combat maneuvers."
  }
];
