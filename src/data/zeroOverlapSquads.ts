import { SquadBuild } from '@/types';

export const ZERO_OVERLAP_SQUADS: SquadBuild[] = [
  {
    "id": "zero-1-alain-holy-vanguard",
    "name": "1. Alain Holy Vanguard & Cavalry Blitz",
    "archetype": "Cavalry Burst",
    "tier": "SS",
    "pvpRating": "99.5/100",
    "description": "The premier flagship cavalry shock comp. Alain commands the frontline with high defense and true-strike row stuns, while Clive executes relentless Line Charge chains powered by Chloe's 100% Critical Keen Call.",
    "frontRow": [
      "alain-high-lord",
      "melisandre-swordmaster"
    ],
    "backRow": [
      "scarlett-high-priestess",
      "clive-great-knight",
      "chloe-sergeant"
    ],
    "keyItems": [
      "Holy Unicorn Blade",
      "Holy Unicorn Shield",
      "Ring of the Unicorn",
      "Chloe's Charm"
    ],
    "counters": [
      "Infantry heavy formations",
      "Magic glass cannons"
    ],
    "strategyGuide": {
      "overview": "Alain leads the vanguard, soaking damage and triggering Start-of-Battle Cavalry Call for +20% Phys Atk. Chloe buffs Alain/Clive with Keen Call for 100% Critical Damage, while Melisandre parries and executes high-evasion scouts.",
      "winCondition": "Turn 1 cavalry sweep wiping enemy vanguard before they can act.",
      "combatSequenceNotes": [
        "Chloe casts Keen Call on Alain before he executes Spinning Edge.",
        "Alain cleaves frontline with 100% critical damage and gains +1 AP on kill.",
        "Clive charges column to clean up armored infantry.",
        "Melisandre deletes high-evasion scouts with True-Strike Meteor Slash.",
        "Scarlett dispels debuffs and heals any chip damage."
      ]
    },
    "unitGearConfigs": [
      {
        "unitId": "alain-high-lord",
        "unitName": "Alain (High Lord)",
        "characterName": "Alain",
        "className": "High Lord",
        "roleTitle": "Royal Commander & Vanguard Lead",
        "growthTypes": [
          "All-Rounder",
          "Offensive"
        ],
        "slot1Weapon": {
          "bestInSlot": "Holy Unicorn Blade",
          "optimalAlternatives": [
            "Kingsblade Cornix",
            "Hallowed Blade",
            "Meteorite Sword"
          ],
          "slotType": "Weapon",
          "notes": "Phys Atk +28, All Stats +5, AP +1. Alain's canonical royal sword."
        },
        "slot2ShieldOrOffhand": {
          "bestInSlot": "Holy Unicorn Shield",
          "optimalAlternatives": [
            "Azure Crest Shield",
            "Chivalric Shield",
            "Steel Shield"
          ],
          "slotType": "Shield",
          "notes": "Phys Def +8, Debuff Immunity, Quick Cover."
        },
        "slot3Accessory": {
          "bestInSlot": "Ring of the Unicorn",
          "optimalAlternatives": [
            "Royal Brooch",
            "Warrior's Medallion",
            "Dragonbone Ring"
          ],
          "slotType": "Accessory",
          "notes": "All Stats +5, AP +1, PP +1, Affliction Immunity, Grants Astral Blade."
        },
        "slot4Accessory": {
          "bestInSlot": "Carnelian Pendant",
          "optimalAlternatives": [
            "Ruby Pendant",
            "Warrior's Medallion",
            "Vitality Talisman"
          ],
          "slotType": "Accessory",
          "notes": "AP +1 for extra Spinning Edge executions."
        }
      },
      {
        "unitId": "melisandre-swordmaster",
        "unitName": "Melisandre (Swordmaster)",
        "characterName": "Melisandre",
        "className": "Swordmaster",
        "roleTitle": "Dual-Wield True-Strike Parry Duelist",
        "growthTypes": [
          "Offensive",
          "Keen"
        ],
        "slot1Weapon": {
          "bestInSlot": "Kingsblade Cornix",
          "optimalAlternatives": [
            "Notos's Sword",
            "Meteorite Sword",
            "General's Saber"
          ],
          "slotType": "Weapon",
          "notes": "Main-Hand Slot: Phys Atk +28, All Stats +5."
        },
        "slot2ShieldOrOffhand": {
          "bestInSlot": "Black-Iron Sword",
          "optimalAlternatives": [
            "Flamberge",
            "Notos's Sword",
            "Meteorite Sword"
          ],
          "slotType": "Weapon",
          "notes": "Dual-Wield Off-Hand Slot: Phys Atk +17, Crit Rate +5%. House Meillet relic."
        },
        "slot3Accessory": {
          "bestInSlot": "Parrying Amulet",
          "optimalAlternatives": [
            "Retaliation Earrings",
            "Warrior's Medallion",
            "Lucky Coin"
          ],
          "slotType": "Accessory",
          "notes": "Guard Cure, Negates physical melee and counters."
        },
        "slot4Accessory": {
          "bestInSlot": "Carnelian Pendant",
          "optimalAlternatives": [
            "Ruby Pendant",
            "Sniper's Lens",
            "Critical Talisman"
          ],
          "slotType": "Accessory",
          "notes": "AP +1 for Meteor Slash flurries."
        }
      },
      {
        "unitId": "scarlett-high-priestess",
        "unitName": "Scarlett (High Priestess)",
        "characterName": "Scarlett",
        "className": "High Priestess",
        "roleTitle": "Sacred Healer, Buffer & Dispeller",
        "growthTypes": [
          "Go-Getter",
          "Support"
        ],
        "slot1Weapon": {
          "bestInSlot": "Papal Crosier",
          "optimalAlternatives": [
            "Sacral Rod",
            "Hallowed Staff",
            "Euros's Staff"
          ],
          "slotType": "Weapon",
          "notes": "Mag Atk +26, Healing +20%, AP +1. Scarlett's sacred relic."
        },
        "slot2ShieldOrOffhand": {
          "bestInSlot": "Scarlett's Ribbon",
          "optimalAlternatives": [
            "Archbishop's Mitre",
            "Silk Hood",
            "Holy Brooch"
          ],
          "slotType": "Accessory",
          "notes": "Healing +20, Mag Def +8, PP +1, Grants Quick Heal."
        },
        "slot3Accessory": {
          "bestInSlot": "Ring of the Maiden",
          "optimalAlternatives": [
            "Holy Unicorn Signet",
            "Celestial Talisman",
            "Saint's Brooch"
          ],
          "slotType": "Accessory",
          "notes": "Mag Def +10, AP +1, PP +1, Maiden's Protection, All Affliction Immunity."
        },
        "slot4Accessory": {
          "bestInSlot": "Lapis Pendant",
          "optimalAlternatives": [
            "Sapphire Pendant",
            "First Aid Kit",
            "Vitality Talisman"
          ],
          "slotType": "Accessory",
          "notes": "PP +1 for Passive Supply and Holy Light."
        }
      },
      {
        "unitId": "clive-great-knight",
        "unitName": "Clive (Great Knight)",
        "characterName": "Clive",
        "className": "Great Knight",
        "roleTitle": "Anti-Infantry Line Charge Sweeper",
        "growthTypes": [
          "Offensive",
          "Offensive"
        ],
        "slot1Weapon": {
          "bestInSlot": "Carnelian Spear",
          "optimalAlternatives": [
            "Meteorite Lance",
            "Dragonbone Spear",
            "General's Pike"
          ],
          "slotType": "Weapon",
          "notes": "Phys Atk +25, AP +1."
        },
        "slot2ShieldOrOffhand": {
          "bestInSlot": "Chivalric Shield",
          "optimalAlternatives": [
            "Steel Shield",
            "Azure Crest Shield",
            "Knight's Shield"
          ],
          "slotType": "Shield",
          "notes": "Phys Def +6, Guard Rate +25%, Stun/Guard Seal Immunity."
        },
        "slot3Accessory": {
          "bestInSlot": "Heavensteed Reins",
          "optimalAlternatives": [
            "Cavalry Hunter's Buckler",
            "Warrior's Medallion",
            "Knight's Brooch"
          ],
          "slotType": "Accessory",
          "notes": "Cavalry Attack +15%, Guard Rate +10%, Grants Dynamic Glide."
        },
        "slot4Accessory": {
          "bestInSlot": "Carnelian Pendant",
          "optimalAlternatives": [
            "Ruby Pendant",
            "Power Belt",
            "Critical Talisman"
          ],
          "slotType": "Accessory",
          "notes": "AP +1 for Line Charge chaining."
        }
      },
      {
        "unitId": "chloe-sergeant",
        "unitName": "Chloe (Sergeant)",
        "characterName": "Chloe",
        "className": "Sergeant",
        "roleTitle": "100% Critical Keen Call Enabler",
        "growthTypes": [
          "Support",
          "Go-Getter"
        ],
        "slot1Weapon": {
          "bestInSlot": "General's Pike",
          "optimalAlternatives": [
            "Meteorite Lance",
            "Sacral Spear",
            "Iron Lance"
          ],
          "slotType": "Weapon",
          "notes": "Phys Atk +22, Initiative +4, True Strike."
        },
        "slot2ShieldOrOffhand": {
          "bestInSlot": "Dancer's Bracelet",
          "optimalAlternatives": [
            "Silk Hood",
            "Verdant Ribbon",
            "Silk Scarf"
          ],
          "slotType": "Accessory",
          "notes": "Phys Def +1, Mag Def +1, Grants Powerful Call (+20% Phys Atk to ally)."
        },
        "slot3Accessory": {
          "bestInSlot": "Verdant Ribbon",
          "optimalAlternatives": [
            "Lapis Bell",
            "Raven Plume",
            "Commander's Crest"
          ],
          "slotType": "Accessory",
          "notes": "Mag Def +3, boosts magic resistance to sustain backline support."
        },
        "slot4Accessory": {
          "bestInSlot": "Lapis Pendant",
          "optimalAlternatives": [
            "Sapphire Pendant",
            "First Aid Kit",
            "Vitality Talisman"
          ],
          "slotType": "Accessory",
          "notes": "PP +1 to sustain Keen Call activations."
        }
      }
    ],
    "tacticsSequence": [
      {
        "step": 1,
        "unit": "Chloe",
        "skill": "Keen Call",
        "condition1": "[Target: Highest ATK Cavalry Ally]",
        "condition2": "[Self PP >= 1]",
        "notes": "Buffs Alain and Clive with 100% Guaranteed Critical Strike."
      },
      {
        "step": 2,
        "unit": "Alain",
        "skill": "Spinning Edge",
        "condition1": "[Target: Front Row (2+ Enemies)]",
        "condition2": "[Self AP >= 2]",
        "notes": "Row-cleaving physical assault dealing massive damage."
      },
      {
        "step": 3,
        "unit": "Clive",
        "skill": "Wild Rush",
        "condition1": "[Target: Column (Infantry Priority)]",
        "condition2": "[Self AP >= 2]",
        "notes": "Column-piercing charge knocking back infantry defenders."
      },
      {
        "step": 4,
        "unit": "Melisandre",
        "skill": "Meteor Slash",
        "condition1": "[Target: Scout / Evasive Enemy]",
        "condition2": "[Self AP >= 2]",
        "notes": "9-hit true strike deleting evasive backline threats."
      },
      {
        "step": 5,
        "unit": "Scarlett",
        "skill": "Holy Light",
        "condition1": "[Target: Lowest HP % Enemy]",
        "condition2": "[Self AP >= 1]",
        "notes": "Magic finisher bypassing heavy physical armor."
      }
    ]
  },
  {
    "id": "zero-2-trinity-rain-apocalypse",
    "name": "2. Trinity Rain Instant Apocalypse",
    "archetype": "Magic Nuke",
    "tier": "SS",
    "pvpRating": "99.0/100",
    "description": "The definitive turn-0 board wiper. Auch channels Trinity Rain with 100% True-Strike + 100% Critical Hit, while Sharon accelerates the cast immediately with Quick Impetus.",
    "frontRow": [
      "hodrick-legionnaire",
      "selvie-druid"
    ],
    "backRow": [
      "auch-sorcerer",
      "yahna-sorceress",
      "sharon-bishop"
    ],
    "keyItems": [
      "Millenium Scepter",
      "Black Cat-Ear Hood",
      "Sniper's Amber Lens",
      "Familiar's Choker"
    ],
    "counters": [
      "Armored formations",
      "Physical dodge tanks",
      "Ground infantry"
    ],
    "strategyGuide": {
      "overview": "Selvie opens battle with Sandstorm / Defensive Curse. Auch begins charging Trinity Rain. Yahna triggers Sorcerous Connection for +50% Mag Atk. Sharon triggers Quick Impetus with Black Cat-Ear Hood to instantly fire Trinity Rain before enemy acts.",
      "winCondition": "Trinity Rain hits all enemies for 300+ unblockable critical magic damage on Turn 1.",
      "combatSequenceNotes": [
        "Selvie blinds enemy frontline on Turn 0 with Sandstorm.",
        "Auch initiates Trinity Rain channel.",
        "Yahna buffs Auch with Sorcerous Connection (+50% Mag Atk).",
        "Sharon grants Quick Impetus, triggering instant Trinity Rain burst.",
        "Hodrick protects squishy casters with Heavy Cover."
      ]
    },
    "unitGearConfigs": [
      {
        "unitId": "auch-sorcerer",
        "unitName": "Auch (Sorcerer)",
        "characterName": "Auch",
        "className": "Sorcerer",
        "roleTitle": "Primary Spell Nuke Channeler",
        "growthTypes": [
          "Offensive",
          "Offensive"
        ],
        "slot1Weapon": {
          "bestInSlot": "Millenium Scepter",
          "optimalAlternatives": [
            "Grand Magus Staff",
            "Carnelian Staff",
            "Sacral Rod"
          ],
          "slotType": "Weapon",
          "notes": "Trinity Rain 4 AP, Mag Atk +25, Mag Def +8."
        },
        "slot2ShieldOrOffhand": {
          "bestInSlot": "Sage's Hood",
          "optimalAlternatives": [
            "Silk Hood",
            "Wizard's Hat",
            "Sorcerer's Robes"
          ],
          "slotType": "Accessory",
          "notes": "Mag Atk +5, Mag Def +5, Initiative +4."
        },
        "slot3Accessory": {
          "bestInSlot": "Sniper's Amber Lens",
          "optimalAlternatives": [
            "Sniper's Lens",
            "Eyepatch of True Sight",
            "Critical Ring"
          ],
          "slotType": "Accessory",
          "notes": "Grants Hawk Eye: Guaranteed 100% Crit + True Strike on Trinity Rain."
        },
        "slot4Accessory": {
          "bestInSlot": "Carnelian Pendant",
          "optimalAlternatives": [
            "Ruby Pendant",
            "Sapphire Pendant",
            "Magick Brooch"
          ],
          "slotType": "Accessory",
          "notes": "AP +1 required to cast Trinity Rain (4 AP)."
        }
      },
      {
        "unitId": "sharon-bishop",
        "unitName": "Sharon (Bishop)",
        "characterName": "Sharon",
        "className": "Bishop",
        "roleTitle": "Instant Turn Acceleration Enabler",
        "growthTypes": [
          "Support",
          "Go-Getter"
        ],
        "slot1Weapon": {
          "bestInSlot": "Euros's Staff",
          "optimalAlternatives": [
            "Sacral Rod",
            "Hallowed Staff",
            "Cleric's Cane"
          ],
          "slotType": "Weapon",
          "notes": "Mag Atk +25, Initiative +5."
        },
        "slot2ShieldOrOffhand": {
          "bestInSlot": "Black Cat-Ear Hood",
          "optimalAlternatives": [
            "White Cat-Ear Hood",
            "Archbishop's Mitre",
            "Silk Hood"
          ],
          "slotType": "Accessory",
          "notes": "Quick Impetus: +100% Turn Bar to charging ally, PP +1."
        },
        "slot3Accessory": {
          "bestInSlot": "Lapis Pendant",
          "optimalAlternatives": [
            "Sapphire Pendant",
            "First Aid Kit",
            "Vitality Talisman"
          ],
          "slotType": "Accessory",
          "notes": "PP +1 required for Quick Impetus (3 PP)."
        },
        "slot4Accessory": {
          "bestInSlot": "Sapphire Pendant",
          "optimalAlternatives": [
            "Lapis Pendant",
            "Raven Plume",
            "Saint's Talisman"
          ],
          "slotType": "Accessory",
          "notes": "PP +2 ensuring total PP >= 4."
        }
      },
      {
        "unitId": "yahna-sorceress",
        "unitName": "Yahna (Sorceress)",
        "characterName": "Yahna",
        "className": "Sorceress",
        "roleTitle": "Magic Buffer & Focus Booster",
        "growthTypes": [
          "Offensive",
          "Go-Getter"
        ],
        "slot1Weapon": {
          "bestInSlot": "Carnelian Staff",
          "optimalAlternatives": [
            "Dustbound Staff",
            "Grand Magus Staff",
            "Runic Staff"
          ],
          "slotType": "Weapon",
          "notes": "Mag Atk +25, AP +1."
        },
        "slot2ShieldOrOffhand": {
          "bestInSlot": "Silk Hood",
          "optimalAlternatives": [
            "Sage's Hood",
            "Sorceress Robes",
            "Magick Brooch"
          ],
          "slotType": "Accessory",
          "notes": "Mag Def +4, Initiative +3."
        },
        "slot3Accessory": {
          "bestInSlot": "Familiar's Choker",
          "optimalAlternatives": [
            "Sorcerer's Medallion",
            "Magick Pendant",
            "Crown of Wisdom"
          ],
          "slotType": "Accessory",
          "notes": "Sorcerous Connection: +50% Magic Attack to Auch."
        },
        "slot4Accessory": {
          "bestInSlot": "Raven Plume",
          "optimalAlternatives": [
            "Angel Plume",
            "Wind Talisman",
            "Speed Belt"
          ],
          "slotType": "Accessory",
          "notes": "Initiative +15 to buff Auch before cast."
        }
      },
      {
        "unitId": "hodrick-legionnaire",
        "unitName": "Hodrick (Legionnaire)",
        "characterName": "Hodrick",
        "className": "Legionnaire",
        "roleTitle": "Physical Wall & Fortress Guard",
        "growthTypes": [
          "Guardian",
          "Survivor"
        ],
        "slot1Weapon": {
          "bestInSlot": "Zenoiran Spear",
          "optimalAlternatives": [
            "Meteorite Lance",
            "Dragonbone Spear",
            "Heavy Lance"
          ],
          "slotType": "Weapon",
          "notes": "Phys Atk +22, Guard Rate +15%."
        },
        "slot2ShieldOrOffhand": {
          "bestInSlot": "Unyielding Shield",
          "optimalAlternatives": [
            "Azure Crest Shield",
            "Golden Ram Shield",
            "Steel Shield"
          ],
          "slotType": "Shield",
          "notes": "Greatshield Slot: Phys Def +7, Enduring Guard, Guard Rate +45%, Max HP +20."
        },
        "slot3Accessory": {
          "bestInSlot": "Defensive Ring",
          "optimalAlternatives": [
            "Guardian Gloves",
            "Tower Shield Belt",
            "Vitality Talisman"
          ],
          "slotType": "Accessory",
          "notes": "Phys Def +5, Guard Rate +10%, Grants Quick Barrier."
        },
        "slot4Accessory": {
          "bestInSlot": "Lapis Pendant",
          "optimalAlternatives": [
            "Sapphire Pendant",
            "Heavy Armor Brooch",
            "First Aid Kit"
          ],
          "slotType": "Accessory",
          "notes": "PP +1 for Heavy Cover activations."
        }
      },
      {
        "unitId": "selvie-druid",
        "unitName": "Selvie (Druid)",
        "characterName": "Selvie",
        "className": "Druid",
        "roleTitle": "Start-of-Battle Curse & Blindness Controller",
        "growthTypes": [
          "Go-Getter",
          "Support"
        ],
        "slot1Weapon": {
          "bestInSlot": "Dustbound Staff",
          "optimalAlternatives": [
            "Chiropteran Staff",
            "Flame-Hex Staff",
            "Sacral Rod"
          ],
          "slotType": "Weapon",
          "notes": "Sandstorm: Start of Battle Blindness."
        },
        "slot2ShieldOrOffhand": {
          "bestInSlot": "Druid's Robes",
          "optimalAlternatives": [
            "Dusk Robes",
            "Silk Hood",
            "Curse Brooch"
          ],
          "slotType": "Accessory",
          "notes": "Mag Def +10, Initiative +6, Debuff Resistance +50%."
        },
        "slot3Accessory": {
          "bestInSlot": "Raven Plume",
          "optimalAlternatives": [
            "Angel Plume",
            "Wind Brooch",
            "Speed Amulet"
          ],
          "slotType": "Accessory",
          "notes": "Initiative +15 to ensure Turn-0 curse application."
        },
        "slot4Accessory": {
          "bestInSlot": "Lapis Pendant",
          "optimalAlternatives": [
            "Sapphire Pendant",
            "Cursed Talisman",
            "Vitality Talisman"
          ],
          "slotType": "Accessory",
          "notes": "PP +1 for Defensive Curse and Quick Guard."
        }
      }
    ],
    "tacticsSequence": [
      {
        "step": 1,
        "unit": "Selvie",
        "skill": "Sandstorm",
        "condition1": "[Start of Battle]",
        "condition2": "[Target: All Enemies]",
        "notes": "Turn-0 Blindness preventing enemy physical burst."
      },
      {
        "step": 2,
        "unit": "Yahna",
        "skill": "Sorcerous Connection",
        "condition1": "[Before Ally Magic Attack]",
        "condition2": "[Self PP >= 1]",
        "notes": "Grants +50% Magic Attack to Auch."
      },
      {
        "step": 3,
        "unit": "Auch",
        "skill": "Trinity Rain",
        "condition1": "[Target: All Enemies (Turn 1)]",
        "condition2": "[Self AP >= 4]",
        "notes": "Charges 3-hit catastrophic battlefield wipe."
      },
      {
        "step": 4,
        "unit": "Sharon",
        "skill": "Quick Impetus",
        "condition1": "[Target: Auch (After Charge)]",
        "condition2": "[Self PP >= 3]",
        "notes": "Instant turn reset allowing Trinity Rain to trigger immediately."
      },
      {
        "step": 5,
        "unit": "Hodrick",
        "skill": "Heavy Cover",
        "condition1": "[Before Ally Attacked (Back Row)]",
        "condition2": "[Self PP >= 1]",
        "notes": "100% physical mitigation protecting squishy spellcasters."
      }
    ]
  },
  {
    "id": "zero-3-dragoon-aerial-tempest",
    "name": "3. Dragoon Glacial Tempest (Aerial Bombardment)",
    "archetype": "Instant Board Wipe",
    "tier": "SS",
    "pvpRating": "98.5/100",
    "description": "The physical aerial nuke counterpart to Trinity Rain. Hilda ascends into Dragoon Dive, accelerated by Primm's White Cat-Ear Hood, while Fran and Gilbert amplify aerial speed and physical power.",
    "frontRow": [
      "hilda-wyvern-master",
      "fran-gryphon-master"
    ],
    "backRow": [
      "miriam-sainted-knight",
      "primm-bishop",
      "gilbert-prince"
    ],
    "keyItems": [
      "Dragoon's Warspear",
      "White Cat-Ear Hood",
      "Heavenwyvern Reins",
      "Royal Saber"
    ],
    "counters": [
      "Cavalry squads",
      "Low P.Def infantry",
      "Armored frontline walls"
    ],
    "strategyGuide": {
      "overview": "Gilbert opens with Rapid Order (+20 Initiative). Hilda initiates Dragoon Dive. Primm uses White Cat-Ear Hood for Quick Impetus, instantly dropping Hilda onto the entire enemy board. Fran sweeps remaining survivors.",
      "winCondition": "Turn 1 Dragoon Dive crashing down for 300+ physical area damage.",
      "combatSequenceNotes": [
        "Gilbert grants +20 Initiative with Rapid Order.",
        "Hilda initiates Dragoon Dive.",
        "Primm triggers Quick Impetus with White Cat-Ear Hood.",
        "Hilda lands for 300 potency area strike.",
        "Fran follows up with High Gale on surviving enemies."
      ]
    },
    "unitGearConfigs": [
      {
        "unitId": "hilda-wyvern-master",
        "unitName": "Hilda (Wyvern Master)",
        "characterName": "Hilda",
        "className": "Wyvern Master",
        "roleTitle": "Aerial Nuke Leader & Dragoon Diver",
        "growthTypes": [
          "Offensive",
          "Keen"
        ],
        "slot1Weapon": {
          "bestInSlot": "Dragoon's Warspear",
          "optimalAlternatives": [
            "Meteorite Lance",
            "Carnelian Spear",
            "Dragonbone Spear"
          ],
          "slotType": "Weapon",
          "notes": "Dragoon Dive 4 AP, Phys Atk +24, Initiative +5."
        },
        "slot2ShieldOrOffhand": {
          "bestInSlot": "Wyvern Reins",
          "optimalAlternatives": [
            "Heavensteed Reins",
            "Winged Brooch",
            "Flight Scarf"
          ],
          "slotType": "Accessory",
          "notes": "Flying Atk +10%, Initiative +5, Grants Aerial Wing."
        },
        "slot3Accessory": {
          "bestInSlot": "Hero's Medallion",
          "optimalAlternatives": [
            "Warrior's Medallion",
            "Critical Talisman",
            "Sniper's Lens"
          ],
          "slotType": "Accessory",
          "notes": "Phys Atk +20%, Base AP +1, Base PP +1. Coliseum Champion Crown."
        },
        "slot4Accessory": {
          "bestInSlot": "Carnelian Pendant",
          "optimalAlternatives": [
            "Ruby Pendant",
            "Power Belt",
            "Vitality Talisman"
          ],
          "slotType": "Accessory",
          "notes": "AP +1 for 4 AP Dragoon Dive execution."
        }
      },
      {
        "unitId": "fran-gryphon-master",
        "unitName": "Fran (Gryphon Master)",
        "characterName": "Fran",
        "className": "Gryphon Master",
        "roleTitle": "Anti-Cavalry Sky Sweeper",
        "growthTypes": [
          "Offensive",
          "Keen"
        ],
        "slot1Weapon": {
          "bestInSlot": "Boreas's Axe",
          "optimalAlternatives": [
            "Carnelian Axe",
            "Meteorite Axe",
            "Rose Knight Axe"
          ],
          "slotType": "Weapon",
          "notes": "Phys Atk +26, Initiative +5, Crit +10%."
        },
        "slot2ShieldOrOffhand": {
          "bestInSlot": "Heavenwyvern Reins",
          "optimalAlternatives": [
            "Wyvern Reins",
            "Flight Brooch",
            "Wind Talisman"
          ],
          "slotType": "Accessory",
          "notes": "Flying Atk +15%, Initiative +10, Grants Aerial Wing."
        },
        "slot3Accessory": {
          "bestInSlot": "Wingline Standard",
          "optimalAlternatives": [
            "Angel Plume",
            "Feather Brooch",
            "Gryphon Crest"
          ],
          "slotType": "Accessory",
          "notes": "Squad Flying Atk +15%, Initiative +5, Grants Aerial Alignment."
        },
        "slot4Accessory": {
          "bestInSlot": "Carnelian Pendant",
          "optimalAlternatives": [
            "Ruby Pendant",
            "Power Belt",
            "Critical Talisman"
          ],
          "slotType": "Accessory",
          "notes": "AP +1 for High Gale row sweeps."
        }
      },
      {
        "unitId": "miriam-sainted-knight",
        "unitName": "Miriam (Sainted Knight)",
        "characterName": "Miriam",
        "className": "Sainted Knight",
        "roleTitle": "Magic Defense Wall & Row Healer",
        "growthTypes": [
          "Support",
          "Guardian"
        ],
        "slot1Weapon": {
          "bestInSlot": "Runic Sword",
          "optimalAlternatives": [
            "Rosularis Sword",
            "Hallowed Blade",
            "White Knight Blade"
          ],
          "slotType": "Weapon",
          "notes": "Phys Atk +8, Mag Atk +14, Magick Attack, Mag Def +3."
        },
        "slot2ShieldOrOffhand": {
          "bestInSlot": "Luminous Shield",
          "optimalAlternatives": [
            "Holy Knight's Shield",
            "Azure Crest Shield",
            "Steel Shield"
          ],
          "slotType": "Shield",
          "notes": "Phys Def +6, Poison/Blindness Immunity, Guard Rate +25%."
        },
        "slot3Accessory": {
          "bestInSlot": "Lapis Pendant",
          "optimalAlternatives": [
            "Sapphire Pendant",
            "Magick Brooch",
            "Celestial Talisman"
          ],
          "slotType": "Accessory",
          "notes": "PP +1 for Magic Barrier triggers."
        },
        "slot4Accessory": {
          "bestInSlot": "First Aid Kit",
          "optimalAlternatives": [
            "Vitality Talisman",
            "Healing Brooch",
            "Saint's Talisman"
          ],
          "slotType": "Accessory",
          "notes": "Grants First Aid: End of battle squad heal sustain."
        }
      },
      {
        "unitId": "primm-bishop",
        "unitName": "Primm (Bishop)",
        "characterName": "Primm",
        "className": "Bishop",
        "roleTitle": "Dragoon Turn Accelerator",
        "growthTypes": [
          "Support",
          "Go-Getter"
        ],
        "slot1Weapon": {
          "bestInSlot": "Hallowed Staff",
          "optimalAlternatives": [
            "Sacral Rod",
            "Euros's Staff",
            "Cleric's Cane"
          ],
          "slotType": "Weapon",
          "notes": "Mag Atk +22, HP Regen +10%."
        },
        "slot2ShieldOrOffhand": {
          "bestInSlot": "White Cat-Ear Hood",
          "optimalAlternatives": [
            "Black Cat-Ear Hood",
            "Archbishop's Mitre",
            "Silk Hood"
          ],
          "slotType": "Accessory",
          "notes": "Quick Impetus: +100% Turn Bar to Hilda, PP +1."
        },
        "slot3Accessory": {
          "bestInSlot": "Lapis Pendant",
          "optimalAlternatives": [
            "Sapphire Pendant",
            "First Aid Kit",
            "Vitality Talisman"
          ],
          "slotType": "Accessory",
          "notes": "PP +1 required for Quick Impetus."
        },
        "slot4Accessory": {
          "bestInSlot": "Sapphire Pendant",
          "optimalAlternatives": [
            "Lapis Pendant",
            "Raven Plume",
            "Saint's Brooch"
          ],
          "slotType": "Accessory",
          "notes": "PP +2 ensuring total PP >= 4."
        }
      },
      {
        "unitId": "gilbert-prince",
        "unitName": "Gilbert (Prince)",
        "characterName": "Gilbert",
        "className": "Prince",
        "roleTitle": "Squad Commander & Order Buffer",
        "growthTypes": [
          "Support",
          "Go-Getter"
        ],
        "slot1Weapon": {
          "bestInSlot": "Royal Saber",
          "optimalAlternatives": [
            "Kingsblade Cornix",
            "Notos's Sword",
            "General's Saber"
          ],
          "slotType": "Weapon",
          "notes": "Phys Atk +18, Initiative +5. Gilbert's royal command blade."
        },
        "slot2ShieldOrOffhand": {
          "bestInSlot": "Royal Scarf",
          "optimalAlternatives": [
            "Prince's Crown",
            "Silk Scarf",
            "Commander's Crest"
          ],
          "slotType": "Accessory",
          "notes": "Initiative +5, Evasion +10."
        },
        "slot3Accessory": {
          "bestInSlot": "Angel Plume",
          "optimalAlternatives": [
            "Raven Plume",
            "Wind Brooch",
            "Royal Medallion"
          ],
          "slotType": "Accessory",
          "notes": "Tailwind Array: Start of Battle +20 Squad Initiative."
        },
        "slot4Accessory": {
          "bestInSlot": "Lapis Pendant",
          "optimalAlternatives": [
            "Sapphire Pendant",
            "Vitality Talisman",
            "First Aid Kit"
          ],
          "slotType": "Accessory",
          "notes": "PP +1 for Rapid Order & Offensive Order."
        }
      }
    ],
    "tacticsSequence": [
      {
        "step": 1,
        "unit": "Gilbert",
        "skill": "Rapid Order",
        "condition1": "[Start of Battle]",
        "condition2": "[Self PP >= 1]",
        "notes": "Grants +20 Initiative to entire squad guaranteeing turn priority."
      },
      {
        "step": 2,
        "unit": "Gilbert",
        "skill": "Offensive Order",
        "condition1": "[Target: Back Row Allies]",
        "condition2": "[Self PP >= 1]",
        "notes": "Increases Hilda's physical attack power by 20%."
      },
      {
        "step": 3,
        "unit": "Hilda",
        "skill": "Dragoon Dive",
        "condition1": "[Target: Full Row (3+ Enemies)]",
        "condition2": "[Self AP >= 4]",
        "notes": "Launches skyward for devastating 300 potency dive bomb."
      },
      {
        "step": 4,
        "unit": "Primm",
        "skill": "Quick Impetus",
        "condition1": "[Target: Hilda (After Charge)]",
        "condition2": "[Self PP >= 3]",
        "notes": "Instantly grants 100% turn bar to crash down on Turn 1."
      },
      {
        "step": 5,
        "unit": "Fran",
        "skill": "High Gale",
        "condition1": "[Target: Cavalry / Front Row]",
        "condition2": "[Self AP >= 2]",
        "notes": "Sweeps surviving cavalry and infantry with 2x damage."
      }
    ]
  },
  {
    "id": "zero-4-berengaria-affliction-lockdown",
    "name": "4. Berengaria Affliction & Death Spiral",
    "archetype": "Affliction Control",
    "tier": "SS",
    "pvpRating": "98.0/100",
    "description": "The masterclass debuff and pursuit engine. Travis inflicts row-wide darkness with Shadowbite, triggering Berengaria's Sanguine Pursuit and Death Spin for +50% bonus damage and AP recovery.",
    "frontRow": [
      "berengaria-renegade",
      "travis-rogue"
    ],
    "backRow": [
      "nina-breaker",
      "liza-shieldshooter",
      "bruno-berserker"
    ],
    "keyItems": [
      "Carnelian Axe",
      "Kaikias's Shield",
      "Earrings of Pursuit",
      "Pursuant's Blade",
      "Lucky Coin"
    ],
    "counters": [
      "Physical frontline tanks",
      "Scouts and evasion units",
      "Unshielded backlines"
    ],
    "strategyGuide": {
      "overview": "Berengaria activates Eye of the Crimson Bear at Start of Battle (-15 Init, -20% Atk to all enemies). Travis applies Row Blindness with Shadowbite. Berengaria follows up with Sanguine Pursuit, while Nina and Bruno crush guards and cleave rows.",
      "winCondition": "Locking enemy frontline in Blindness while Berengaria loops Death Spin and Sanguine Pursuit.",
      "combatSequenceNotes": [
        "Berengaria applies -15 Initiative and -20% Attack on Turn 0.",
        "Travis casts Shadowbite, blinding and sealing passive skills on enemy row.",
        "Berengaria executes Death Spin on blinded targets (+50% damage).",
        "Berengaria triggers Sanguine Pursuit on weakened foes (+1 AP on kill).",
        "Nina shatters guards while Bruno sweeps with Wide Smash."
      ]
    },
    "unitGearConfigs": [
      {
        "unitId": "berengaria-renegade",
        "unitName": "Berengaria (Dark Marquess - Axe)",
        "characterName": "Berengaria",
        "className": "Dark Marquess (Axe)",
        "roleTitle": "Affliction Dominator & Executioner Lead",
        "growthTypes": [
          "Offensive",
          "All-Rounder"
        ],
        "slot1Weapon": {
          "bestInSlot": "Carnelian Axe",
          "optimalAlternatives": [
            "Meteorite Axe",
            "Dragonbone Axe",
            "Boreas's Axe"
          ],
          "slotType": "Weapon",
          "notes": "Phys Atk +25, AP +1."
        },
        "slot2ShieldOrOffhand": {
          "bestInSlot": "Kaikias's Shield",
          "optimalAlternatives": [
            "Zenoiran Shield",
            "Chivalric Shield",
            "Steel Shield",
            "Battler's Shield"
          ],
          "slotType": "Shield",
          "notes": "Phys Def +8, Guard Rate +30%, Guard Efficiency +25%, Initiative +10."
        },
        "slot3Accessory": {
          "bestInSlot": "Earrings of Pursuit",
          "optimalAlternatives": [
            "Warrior's Medallion",
            "Veteran's Eyepatch",
            "Counter Belt"
          ],
          "slotType": "Accessory",
          "notes": "Phys Def +1, Follow-up Skills Deal +40 Damage, maximizing Sanguine Pursuit."
        },
        "slot4Accessory": {
          "bestInSlot": "Carnelian Pendant",
          "optimalAlternatives": [
            "Ruby Pendant",
            "Power Belt",
            "Vitality Talisman"
          ],
          "slotType": "Accessory",
          "notes": "AP +1 for Death Spin row sweeps."
        }
      },
      {
        "unitId": "travis-rogue",
        "unitName": "Travis (Rogue)",
        "characterName": "Travis",
        "className": "Rogue",
        "roleTitle": "Row Blindness & Evasion Tank",
        "growthTypes": [
          "Keen",
          "Go-Getter"
        ],
        "slot1Weapon": {
          "bestInSlot": "Pursuant's Blade",
          "optimalAlternatives": [
            "Venom Blade",
            "Notos's Sword",
            "Bandit Longsword"
          ],
          "slotType": "Weapon",
          "notes": "Phys Atk +18, Grants Pursuit (1 PP)."
        },
        "slot2ShieldOrOffhand": {
          "bestInSlot": "Thief's Mantle",
          "optimalAlternatives": [
            "Illusory Cloak",
            "Dusk Robes",
            "Silk Scarf"
          ],
          "slotType": "Accessory",
          "notes": "Evasion +20, Grants Evade (1 PP)."
        },
        "slot3Accessory": {
          "bestInSlot": "Lucky Coin",
          "optimalAlternatives": [
            "Evasion Ring",
            "Raven Plume",
            "Wind Brooch"
          ],
          "slotType": "Accessory",
          "notes": "Evasion +20, Crit Rate +20% for frontline evasion tanking."
        },
        "slot4Accessory": {
          "bestInSlot": "Raven Plume",
          "optimalAlternatives": [
            "Angel Plume",
            "Speed Belt",
            "Wind Talisman"
          ],
          "slotType": "Accessory",
          "notes": "Initiative +15 for Turn-1 Shadowbite row blind."
        }
      },
      {
        "unitId": "nina-breaker",
        "unitName": "Nina (Breaker)",
        "characterName": "Nina",
        "className": "Breaker",
        "roleTitle": "Heavy Armor Crusher",
        "growthTypes": [
          "Offensive",
          "Offensive"
        ],
        "slot1Weapon": {
          "bestInSlot": "Juggernaut",
          "optimalAlternatives": [
            "Mason's Hammer",
            "Rose Knight Hammer",
            "Meteorite Axe"
          ],
          "slotType": "Weapon",
          "notes": "Phys Atk +26, Stun Multiplier, Grants Ground Strike."
        },
        "slot2ShieldOrOffhand": {
          "bestInSlot": "Master's Gauntlets",
          "optimalAlternatives": [
            "Armored Gauntlets",
            "Power Belt",
            "Warrior's Medallion"
          ],
          "slotType": "Accessory",
          "notes": "Phys Atk +5, Guard Pierce +10%, Grants Nimble Fighter."
        },
        "slot3Accessory": {
          "bestInSlot": "Lapis Pendant",
          "optimalAlternatives": [
            "Sapphire Pendant",
            "Critical Ring",
            "Vitality Talisman"
          ],
          "slotType": "Accessory",
          "notes": "PP +1 for Heavy Impact."
        },
        "slot4Accessory": {
          "bestInSlot": "Carnelian Pendant",
          "optimalAlternatives": [
            "Ruby Pendant",
            "Power Belt",
            "Strength Brooch"
          ],
          "slotType": "Accessory",
          "notes": "AP +1 for Assault Blow executions."
        }
      },
      {
        "unitId": "rolf-sniper",
        "unitName": "Rolf (Sniper)",
        "characterName": "Rolf",
        "className": "Sniper",
        "roleTitle": "True-Strike Anti-Flying Marksman",
        "growthTypes": [
          "Offensive",
          "Keen"
        ],
        "slot1Weapon": {
          "bestInSlot": "Apeliotes's Bow",
          "optimalAlternatives": [
            "Zenoiran Bow",
            "Runic Bow",
            "Dragonbone Bow"
          ],
          "slotType": "Weapon",
          "notes": "Phys Atk +25, Initiative +5, True Strike."
        },
        "slot2ShieldOrOffhand": {
          "bestInSlot": "Sniper's Lens",
          "optimalAlternatives": [
            "Mirrored Spectacles",
            "Hunter's Cap",
            "Veteran's Eyepatch"
          ],
          "slotType": "Accessory",
          "notes": "Crit Rate +10%, Acc +15, Grants Eagle Eye."
        },
        "slot3Accessory": {
          "bestInSlot": "Mirrored Spectacles",
          "optimalAlternatives": [
            "Veteran's Eyepatch",
            "Warrior's Medallion",
            "Raven Plume"
          ],
          "slotType": "Accessory",
          "notes": "Phys Def +2, Accuracy +30."
        },
        "slot4Accessory": {
          "bestInSlot": "Lapis Pendant",
          "optimalAlternatives": [
            "Sapphire Pendant",
            "First Aid Kit",
            "Vitality Talisman"
          ],
          "slotType": "Accessory",
          "notes": "PP +1 for Eagle Eye triggers."
        }
      },
      {
        "unitId": "bruno-berserker",
        "unitName": "Bruno (Berserker)",
        "characterName": "Bruno",
        "className": "Berserker",
        "roleTitle": "Colossal HP Row Cleaver",
        "growthTypes": [
          "Offensive",
          "Survivor"
        ],
        "slot1Weapon": {
          "bestInSlot": "Dragonbone Axe",
          "optimalAlternatives": [
            "Meteorite Axe",
            "Carnelian Axe",
            "Boreas's Axe"
          ],
          "slotType": "Weapon",
          "notes": "Phys Atk +22, PP +1."
        },
        "slot2ShieldOrOffhand": {
          "bestInSlot": "Power Belt",
          "optimalAlternatives": [
            "Warrior's Medallion",
            "Armored Gauntlets",
            "Brawler Ring"
          ],
          "slotType": "Accessory",
          "notes": "Phys Atk +1, Grants Toughness, Max HP +10."
        },
        "slot3Accessory": {
          "bestInSlot": "Carnelian Pendant",
          "optimalAlternatives": [
            "Ruby Pendant",
            "Power Belt",
            "Strength Brooch"
          ],
          "slotType": "Accessory",
          "notes": "AP +1 for Wide Smash row sweeps."
        },
        "slot4Accessory": {
          "bestInSlot": "Vitality Talisman",
          "optimalAlternatives": [
            "Ruby Pendant",
            "Lifeblood Talisman",
            "Survivor Ring"
          ],
          "slotType": "Accessory",
          "notes": "Max HP +10, synergy with Bulk Up."
        }
      }
    ],
    "tacticsSequence": [
      {
        "step": 1,
        "unit": "Berengaria",
        "skill": "Eye of the Crimson Bear",
        "condition1": "[Start of Battle]",
        "condition2": "[Self PP >= 1]",
        "notes": "Inflicts -15 Initiative and -20% Attack on all enemies."
      },
      {
        "step": 2,
        "unit": "Travis",
        "skill": "Shadowbite",
        "condition1": "[Target: Front Row (2+ Enemies)]",
        "condition2": "[Self AP >= 2]",
        "notes": "Blinds enemy frontline and seals passive reactions."
      },
      {
        "step": 3,
        "unit": "Berengaria",
        "skill": "Death Spin",
        "condition1": "[Target: Front Row (Afflicted)]",
        "condition2": "[Self AP >= 2]",
        "notes": "Row-cleave axe spin dealing +50% bonus damage to blinded targets."
      },
      {
        "step": 4,
        "unit": "Berengaria",
        "skill": "Sanguine Pursuit",
        "condition1": "[After Ally Attacks]",
        "condition2": "[Self PP >= 1]",
        "notes": "Executes follow-up strike restoring +1 AP on kill."
      },
      {
        "step": 5,
        "unit": "Nina",
        "skill": "Heavy Impact",
        "condition1": "[Target: Armored / Guarding Enemy]",
        "condition2": "[Self AP >= 2]",
        "notes": "Shatters enemy heavy shields with 100% guard pierce."
      }
    ]
  },
  {
    "id": "zero-5-virginia-valkyrian-counter",
    "name": "5. Virginia Valkyrian Counter Fortress",
    "archetype": "Heavy Sustain",
    "tier": "SS",
    "pvpRating": "98.0/100",
    "description": "The ultimate impenetrable counter-attack fortress. Virginia commands dual shields with Start-of-Battle Iron Veil, while Liza and Colm provide continuous First Aid sustain and shield cover.",
    "frontRow": [
      "virginia-valkyria",
      "colm-vanguard"
    ],
    "backRow": [
      "leah-swordmaster",
      "kitra-breaker",
      "liza-shieldshooter"
    ],
    "keyItems": [
      "Blue Rose Sword",
      "Blue Rose Shield",
      "Parrying Shield",
      "Gallian Crossbow",
      "First Aid Kit"
    ],
    "counters": [
      "Multi-hit physical attackers",
      "Swordmasters",
      "Cavalry chargers",
      "Flying attackers"
    ],
    "strategyGuide": {
      "overview": "Virginia opens battle with Iron Veil (+50% Defense to entire squad). Dual-wielding Blue Rose Shield and Parrying Shield gives Virginia maximum guard efficiency and dual counter-attacks. Liza provides continuous First Aid reactive healing whenever frontline tanks are struck.",
      "winCondition": "Out-sustaining enemy offense with First Aid + Iron Veil while crushing them with continuous dual-shield counter-attacks.",
      "combatSequenceNotes": [
        "Virginia casts Iron Veil on Turn 0, boosting squad physical defense and guard rate by 50%.",
        "Colm absorbs incoming arrows with Arrow Cover and uses First Aid Kit Quick Heal if needed.",
        "Liza triggers First Aid / Aid Cover to heal Virginia and Colm back to full HP upon being hit.",
        "Virginia counters attacking enemies with Maiden's Hammer and Parrying Shield counters.",
        "Leah executes Parrying Slash counters while Kitra shatters enemy heavy armor."
      ]
    },
    "unitGearConfigs": [
      {
        "unitId": "virginia-valkyria",
        "unitName": "Virginia (Valkyria)",
        "characterName": "Virginia",
        "className": "Valkyria",
        "roleTitle": "Dual-Shield Counter Vanguard Leader",
        "growthTypes": [
          "Offensive",
          "Guardian"
        ],
        "slot1Weapon": {
          "bestInSlot": "Blue Rose Sword",
          "optimalAlternatives": [
            "Rosularis Sword",
            "Kingsblade Cornix",
            "Meteorite Sword"
          ],
          "slotType": "Weapon",
          "notes": "Phys Atk +24, Base AP +1, Crit Rate +10%, Phys Def +3. Virginia's canonical royal blade."
        },
        "slot2ShieldOrOffhand": {
          "bestInSlot": "Blue Rose Shield",
          "optimalAlternatives": [
            "Azure Crest Shield",
            "Chivalric Shield",
            "Steel Shield"
          ],
          "slotType": "Shield",
          "notes": "Main Shield Slot: Phys Def +6, Royal Guard, Guard Rate +25%, Base PP +1. Virginia's signature shield."
        },
        "slot3Accessory": {
          "bestInSlot": "Parrying Shield",
          "optimalAlternatives": [
            "Zenoiran Shield",
            "Counter Belt",
            "Tower Shield",
            "Azure Crest Shield"
          ],
          "slotType": "Shield",
          "notes": "Dual-Shield Slot: Phys Def +2, Parry, Guard Rate +25%, Counter Skills Deal +50 Damage."
        },
        "slot4Accessory": {
          "bestInSlot": "Carnelian Pendant",
          "optimalAlternatives": [
            "Ruby Pendant",
            "Vitality Talisman",
            "Strength Brooch"
          ],
          "slotType": "Accessory",
          "notes": "AP +1 for Maiden's Hammer strikes."
        }
      },
      {
        "unitId": "colm-vanguard",
        "unitName": "Colm (Vanguard)",
        "characterName": "Colm",
        "className": "Vanguard",
        "roleTitle": "Frontline Shield & Quick Heal Support",
        "growthTypes": [
          "Guardian",
          "Survivor"
        ],
        "slot1Weapon": {
          "bestInSlot": "Meteorite Sword",
          "optimalAlternatives": [
            "Zenoiran Sword",
            "Iron Sword",
            "Bronze Sword"
          ],
          "slotType": "Weapon",
          "notes": "Phys Atk +24, Max HP +20, Guard +10%."
        },
        "slot2ShieldOrOffhand": {
          "bestInSlot": "Arrowshield",
          "optimalAlternatives": [
            "Battler's Shield",
            "Steel Shield",
            "Guard's Shield"
          ],
          "slotType": "Shield",
          "notes": "Phys Def +2, Arrow Cover, Guard Rate +25%."
        },
        "slot3Accessory": {
          "bestInSlot": "First Aid Kit",
          "optimalAlternatives": [
            "Defender's Ring",
            "Guardian Gloves",
            "Vitality Talisman"
          ],
          "slotType": "Accessory",
          "notes": "Grants Quick Heal (50% HP heal to frontline ally) for emergency sustain."
        },
        "slot4Accessory": {
          "bestInSlot": "Lapis Pendant",
          "optimalAlternatives": [
            "Sapphire Pendant",
            "Knight's Crest",
            "Defender's Ring"
          ],
          "slotType": "Accessory",
          "notes": "PP +1 for Arrow Cover and Quick Heal activations."
        }
      },
      {
        "unitId": "leah-swordmaster",
        "unitName": "Leah (Swordmaster)",
        "characterName": "Leah",
        "className": "Swordmaster",
        "roleTitle": "True-Strike Parry Duelist",
        "growthTypes": [
          "Offensive",
          "Keen"
        ],
        "slot1Weapon": {
          "bestInSlot": "Notos's Sword",
          "optimalAlternatives": [
            "Kingsblade Cornix",
            "Meteorite Sword",
            "General's Saber"
          ],
          "slotType": "Weapon",
          "notes": "Main-Hand Slot: Phys Atk +25, Initiative +5."
        },
        "slot2ShieldOrOffhand": {
          "bestInSlot": "Flamberge",
          "optimalAlternatives": [
            "Black-Iron Sword",
            "Pursuant's Blade",
            "Vorpal Sword"
          ],
          "slotType": "Weapon",
          "notes": "Dual-Wield Off-Hand Slot: Phys Atk +21, Burn Immunity, Grants Grisly Fire."
        },
        "slot3Accessory": {
          "bestInSlot": "Retaliation Earrings",
          "optimalAlternatives": [
            "Parrying Amulet",
            "Warrior's Medallion",
            "Evasion Ring"
          ],
          "slotType": "Accessory",
          "notes": "Phys Def +1, Counterattack Skills Deal +40 Damage."
        },
        "slot4Accessory": {
          "bestInSlot": "Carnelian Pendant",
          "optimalAlternatives": [
            "Ruby Pendant",
            "Sniper's Lens",
            "Critical Talisman"
          ],
          "slotType": "Accessory",
          "notes": "AP +1 for Meteor Slash executions."
        }
      },
      {
        "unitId": "kitra-breaker",
        "unitName": "Kitra (Breaker)",
        "characterName": "Kitra",
        "className": "Breaker",
        "roleTitle": "Armor Shatterer",
        "growthTypes": [
          "Offensive",
          "Offensive"
        ],
        "slot1Weapon": {
          "bestInSlot": "Rose Knight Hammer",
          "optimalAlternatives": [
            "Juggernaut",
            "Mason's Hammer",
            "Meteorite Axe"
          ],
          "slotType": "Weapon",
          "notes": "Phys Atk +15, Initiative +3, Accuracy +10."
        },
        "slot2ShieldOrOffhand": {
          "bestInSlot": "Armored Gauntlets",
          "optimalAlternatives": [
            "Master's Gauntlets",
            "Power Belt",
            "Warrior's Medallion"
          ],
          "slotType": "Accessory",
          "notes": "Phys Atk +4, Phys Def +4, Grants Binding Guard."
        },
        "slot3Accessory": {
          "bestInSlot": "Carnelian Pendant",
          "optimalAlternatives": [
            "Ruby Pendant",
            "Strength Brooch",
            "Power Belt"
          ],
          "slotType": "Accessory",
          "notes": "AP +1 for Enraged Strike armor crushes."
        },
        "slot4Accessory": {
          "bestInSlot": "Lapis Pendant",
          "optimalAlternatives": [
            "Sapphire Pendant",
            "Vitality Talisman",
            "Critical Ring"
          ],
          "slotType": "Accessory",
          "notes": "PP +1 for Heavy Smash follow-ups."
        }
      },
      {
        "unitId": "liza-shieldshooter",
        "unitName": "Liza (Shieldshooter)",
        "characterName": "Liza",
        "className": "Shieldshooter",
        "roleTitle": "First Aid Sustain Healer & Anti-Flyer Cover",
        "growthTypes": [
          "Guardian",
          "Support"
        ],
        "slot1Weapon": {
          "bestInSlot": "Gallian Crossbow",
          "optimalAlternatives": [
            "Zenoiran Bow",
            "Apeliotes's Bow",
            "Runic Bow"
          ],
          "slotType": "Weapon",
          "notes": "Phys Atk +24, Anti-Flying 200%, Grants Harpoon Bolt."
        },
        "slot2ShieldOrOffhand": {
          "bestInSlot": "Zenoiran Knight's Shield",
          "optimalAlternatives": [
            "Unyielding Shield",
            "Azure Crest Shield",
            "Steel Shield"
          ],
          "slotType": "Shield",
          "notes": "Greatshield Slot: Phys Def +6, Enduring Guard, Guard Rate +25%, Max HP +15."
        },
        "slot3Accessory": {
          "bestInSlot": "Defender's Ring",
          "optimalAlternatives": [
            "Vitality Talisman",
            "Healing Brooch",
            "Saint's Talisman"
          ],
          "slotType": "Accessory",
          "notes": "Guard Rate +15%, boosts squad frontline stability."
        },
        "slot4Accessory": {
          "bestInSlot": "Lapis Pendant",
          "optimalAlternatives": [
            "Sapphire Pendant",
            "Guardian Gloves",
            "Defender's Ring"
          ],
          "slotType": "Accessory",
          "notes": "PP +1 for First Aid reactive healing & Greatshield Cover."
        }
      }
    ],
    "tacticsSequence": [
      {
        "step": 1,
        "unit": "Virginia",
        "skill": "Iron Veil",
        "condition1": "[Start of Battle]",
        "condition2": "[Self PP >= 1]",
        "notes": "Grants +50% Physical Defense to entire squad."
      },
      {
        "step": 2,
        "unit": "Liza",
        "skill": "First Aid",
        "condition1": "[After Ally Attacked]",
        "condition2": "[Target: Ally HP <= 75%]",
        "notes": "Automatically casts 50% HP reactive heal on Virginia or Colm when attacked."
      },
      {
        "step": 3,
        "unit": "Colm",
        "skill": "Arrow Cover",
        "condition1": "[Before Ally Attacked (Ranged)]",
        "condition2": "[Self PP >= 1]",
        "notes": "Negates 100% ranged and flying projectile damage."
      },
      {
        "step": 4,
        "unit": "Virginia",
        "skill": "Maiden's Hammer",
        "condition1": "[Target: Armored / Guarding Enemy]",
        "condition2": "[Self AP >= 2]",
        "notes": "Heavy armor-piercing strike ignoring enemy defense."
      },
      {
        "step": 5,
        "unit": "Leah",
        "skill": "Meteor Slash",
        "condition1": "[Target: Lowest HP % Enemy]",
        "condition2": "[Self AP >= 2]",
        "notes": "9-hit flurry tearing through softened targets."
      }
    ]
  },
  {
    "id": "zero-6-yunifi-glacial-rain",
    "name": "6. Yunifi Glacial Rain Absolute Zero",
    "archetype": "Affliction Control",
    "tier": "SS",
    "pvpRating": "98.5/100",
    "description": "The unstoppable absolute zero freeze lockdown. Yunifi blankets the enemy squad in Glacial Rain via Celestial Talisman Hastened Charge, permanently freezing all units while Ramona feeds infinite AP and PP.",
    "frontRow": [
      "bryce-legionnaire",
      "lex-vanguard"
    ],
    "backRow": [
      "yunifi-snow-ranger",
      "ramona-wereowl",
      "ridiel-elven-archer"
    ],
    "keyItems": [
      "Zenoiran Bow",
      "Celestial Talisman",
      "Glacial Ring",
      "Lapis Bell",
      "Sage Owl's Shawl"
    ],
    "counters": [
      "Melee infantry squads",
      "High speed burst formations",
      "Clustered frontlines"
    ],
    "strategyGuide": {
      "overview": "Yunifi unleashes Turn-1 Glacial Rain via Celestial Talisman (Hastened Charge), freezing all enemies. Ramona uses Restore to recharge Yunifi's PP, while Ridiel adds magic power with Mystic Conferral. Bryce (Heavy Cover) and Lex (Arrow Cover) shield the squad.",
      "winCondition": "Turn 1 instant Glacial Rain freezing entire enemy squad, followed by execute cleanup.",
      "combatSequenceNotes": [
        "Start of Battle: Yunifi activates Hastened Charge from Celestial Talisman.",
        "Turn 1: Yunifi unleashes Glacial Rain (Freeze All Enemies) with 100% Truestrike Critical.",
        "Ridiel enchants attacks with Mystic Conferral and cleanses debuffs with Pure Light.",
        "Ramona restores PP to Yunifi upon active attack with Restore and Passive Gift.",
        "Bryce and Lex absorb any surviving counter-attacks with Heavy Cover and Arrow Cover."
      ]
    },
    "unitGearConfigs": [
      {
        "unitId": "yunifi-snow-ranger",
        "unitName": "Yunifi (Snow Ranger)",
        "characterName": "Yunifi",
        "className": "Snow Ranger",
        "roleTitle": "Battlefield Freeze Nuke Archer",
        "growthTypes": [
          "Offensive",
          "Keen"
        ],
        "slot1Weapon": {
          "bestInSlot": "Zenoiran Bow",
          "optimalAlternatives": [
            "Meteorite Bow",
            "Apeliotes's Bow",
            "Dragonbone Bow"
          ],
          "slotType": "Weapon",
          "notes": "Phys Atk +24, Crit Rate +10%, Anti-Flying. Authentic Zenoiran longbow."
        },
        "slot2ShieldOrOffhand": {
          "bestInSlot": "Celestial Talisman",
          "optimalAlternatives": [
            "Sniper's Amber Lens",
            "Silken Scarf",
            "Thief's Mantle"
          ],
          "slotType": "Accessory",
          "notes": "Grants Hastened Charge (Start of Battle): Activates charge immediately so Glacial Rain executes on Turn 1!"
        },
        "slot3Accessory": {
          "bestInSlot": "Carnelian Pendant",
          "optimalAlternatives": [
            "Ruby Pendant",
            "Power Belt",
            "Vitality Talisman"
          ],
          "slotType": "Accessory",
          "notes": "AP +1 (offsets Celestial Talisman -1 AP) giving Yunifi 2 AP to cast Glacial Rain."
        },
        "slot4Accessory": {
          "bestInSlot": "Glacial Ring",
          "optimalAlternatives": [
            "Lucky Coin",
            "Raven Plume",
            "Sniper's Amber Lens"
          ],
          "slotType": "Accessory",
          "notes": "Mag Def +8, Freeze Immunity, Max HP +5."
        }
      },
      {
        "unitId": "ramona-wereowl",
        "unitName": "Ramona (Wereowl)",
        "characterName": "Ramona",
        "className": "Wereowl",
        "roleTitle": "Bestral Infinite PP/AP Battery",
        "growthTypes": [
          "Support",
          "Go-Getter"
        ],
        "slot1Weapon": {
          "bestInSlot": "Meteorite Rod",
          "optimalAlternatives": [
            "Sacral Rod",
            "Hallowed Staff",
            "Euros's Staff"
          ],
          "slotType": "Weapon",
          "notes": "Mag Atk +24, Max HP +20."
        },
        "slot2ShieldOrOffhand": {
          "bestInSlot": "Sage Owl's Shawl",
          "optimalAlternatives": [
            "Archbishop's Mitre",
            "Silk Hood",
            "Shawl of Repose"
          ],
          "slotType": "Accessory",
          "notes": "Mag Def +8, Initiative +6, Grants Quick Dispel."
        },
        "slot3Accessory": {
          "bestInSlot": "Lapis Bell",
          "optimalAlternatives": [
            "Lapis Pendant",
            "White Ribbon",
            "Sapphire Pendant"
          ],
          "slotType": "Accessory",
          "notes": "Base PP +1, Passive Gift: Restores 1 PP to Ally using Active Skill."
        },
        "slot4Accessory": {
          "bestInSlot": "Lapis Pendant",
          "optimalAlternatives": [
            "Sapphire Pendant",
            "First Aid Kit",
            "Vitality Talisman"
          ],
          "slotType": "Accessory",
          "notes": "PP +1 for continuous Restore casting."
        }
      },
      {
        "unitId": "ridiel-elven-archer",
        "unitName": "Ridiel (Elven Archer)",
        "characterName": "Ridiel",
        "className": "Elven Archer",
        "roleTitle": "Pure Light Row Cleanse & Magic Conferral",
        "growthTypes": [
          "Support",
          "Offensive"
        ],
        "slot1Weapon": {
          "bestInSlot": "Runic Bow",
          "optimalAlternatives": [
            "Sacral Bow",
            "Apeliotes's Bow",
            "Elven Bow"
          ],
          "slotType": "Weapon",
          "notes": "Phys Atk +8, Mag Atk +14, Magick Attack."
        },
        "slot2ShieldOrOffhand": {
          "bestInSlot": "Silver Circlet",
          "optimalAlternatives": [
            "Dream Crown",
            "Silk Hood",
            "Magick Brooch"
          ],
          "slotType": "Accessory",
          "notes": "Mag Atk +5, Mag Def +5, PP +1."
        },
        "slot3Accessory": {
          "bestInSlot": "Clearsight Amulet",
          "optimalAlternatives": [
            "First Aid Kit",
            "Lapis Pendant",
            "White Ribbon"
          ],
          "slotType": "Accessory",
          "notes": "Mag Def +1, Blindness Immunity, guarantees archer accuracy."
        },
        "slot4Accessory": {
          "bestInSlot": "Lapis Pendant",
          "optimalAlternatives": [
            "Sapphire Pendant",
            "Raven Plume",
            "Vitality Talisman"
          ],
          "slotType": "Accessory",
          "notes": "PP +1 for Mystic Conferral & Selfless Heal."
        }
      },
      {
        "unitId": "bryce-legionnaire",
        "unitName": "Bryce (Legionnaire)",
        "characterName": "Bryce",
        "className": "Legionnaire",
        "roleTitle": "Heavy Frontline Shield",
        "growthTypes": [
          "Guardian",
          "Survivor"
        ],
        "slot1Weapon": {
          "bestInSlot": "Meteorite Lance",
          "optimalAlternatives": [
            "Zenoiran Spear",
            "Carnelian Spear",
            "Dragonbone Spear"
          ],
          "slotType": "Weapon",
          "notes": "Phys Atk +24, Max HP +20."
        },
        "slot2ShieldOrOffhand": {
          "bestInSlot": "Golden Ram Shield",
          "optimalAlternatives": [
            "Azure Crest Shield",
            "Unyielding Shield",
            "Steel Shield"
          ],
          "slotType": "Shield",
          "notes": "Greatshield Slot: Phys Def +5, Max HP +10, Stun Immunity, Guard Rate +25%."
        },
        "slot3Accessory": {
          "bestInSlot": "Guardian Gloves",
          "optimalAlternatives": [
            "Defensive Ring",
            "Armored Gauntlets",
            "Vitality Talisman"
          ],
          "slotType": "Accessory",
          "notes": "Guard Rate +15%, Grants Guarding Fighter."
        },
        "slot4Accessory": {
          "bestInSlot": "Lapis Pendant",
          "optimalAlternatives": [
            "Sapphire Pendant",
            "Tower Shield Belt",
            "First Aid Kit"
          ],
          "slotType": "Accessory",
          "notes": "PP +1 for Heavy Cover."
        }
      },
      {
        "unitId": "lex-vanguard",
        "unitName": "Lex (Vanguard)",
        "characterName": "Lex",
        "className": "Vanguard",
        "roleTitle": "Anti-Ranged Arrow Cover Vanguard",
        "growthTypes": [
          "Guardian",
          "All-Rounder"
        ],
        "slot1Weapon": {
          "bestInSlot": "Zenoiran Sword",
          "optimalAlternatives": [
            "Meteorite Sword",
            "Iron Sword",
            "Bronze Sword"
          ],
          "slotType": "Weapon",
          "notes": "Phys Atk +22, Phys Def +5."
        },
        "slot2ShieldOrOffhand": {
          "bestInSlot": "Battler's Shield",
          "optimalAlternatives": [
            "Arrowshield",
            "Parrying Shield",
            "Steel Shield"
          ],
          "slotType": "Shield",
          "notes": "Phys Def +2, Phys Atk +2, Guard Rate +25%."
        },
        "slot3Accessory": {
          "bestInSlot": "Warrior's Medallion",
          "optimalAlternatives": [
            "Defender's Ring",
            "Power Belt",
            "Vitality Talisman"
          ],
          "slotType": "Accessory",
          "notes": "Phys Atk +3, Guard Rate +10%."
        },
        "slot4Accessory": {
          "bestInSlot": "Lapis Pendant",
          "optimalAlternatives": [
            "Sapphire Pendant",
            "First Aid Kit",
            "Speed Belt"
          ],
          "slotType": "Accessory",
          "notes": "PP +1 for Arrow Cover."
        }
      }
    ],
    "tacticsSequence": [
      {
        "step": 1,
        "unit": "Yunifi",
        "skill": "Glacial Rain",
        "condition1": "[Target: All Enemies (Turn 1)]",
        "condition2": "[Self AP >= 4]",
        "notes": "Freezes entire enemy formation in ice."
      },
      {
        "step": 2,
        "unit": "Ramona",
        "skill": "Restore",
        "condition1": "[Target: Ally using Active Skill]",
        "condition2": "[Self PP >= 1]",
        "notes": "Restores 1 PP to Yunifi / Ridiel upon action."
      },
      {
        "step": 3,
        "unit": "Ridiel",
        "skill": "Mystic Conferral",
        "condition1": "[Before Ally Magic / Phys Attack]",
        "condition2": "[Self PP >= 1]",
        "notes": "Enchants attacks with bonus magic damage."
      },
      {
        "step": 4,
        "unit": "Bryce",
        "skill": "Heavy Cover",
        "condition1": "[Before Ally Attacked (Back Row)]",
        "condition2": "[Self PP >= 1]",
        "notes": "Soaks physical strikes targeting backline."
      },
      {
        "step": 5,
        "unit": "Lex",
        "skill": "Arrow Cover",
        "condition1": "[Before Ally Attacked (Ranged)]",
        "condition2": "[Self PP >= 1]",
        "notes": "Absorbs and negates enemy ranged arrows."
      }
    ]
  },
  {
    "id": "zero-7-elven-sisters-elemental-tempest",
    "name": "7. Elven Twin Sisters Elemental Tempest",
    "archetype": "Magic Nuke",
    "tier": "SS",
    "pvpRating": "98.5/100",
    "description": "The harmonic elemental apocalypse. Rosalinde and Eltolinde summon Faerie spirits to cast twin Elemental Roars, devastating enemies with hybrid physical/magic damage while faerie barriers absorb incoming attacks.",
    "frontRow": [
      "ithilion-elven-fencer",
      "railanor-elven-fencer"
    ],
    "backRow": [
      "rosalinde-elven-augur",
      "eltolinde-elven-sibyl",
      "galadmir-elven-archer"
    ],
    "keyItems": [
      "Sacral Spear",
      "Kingslance Elhal",
      "Ancient Crown",
      "Dream Crown"
    ],
    "counters": [
      "Heavy armored walls",
      "Infantry ground formations",
      "Mixed hybrid defenses"
    ],
    "strategyGuide": {
      "overview": "Rosalinde triggers Rage of the Faeries at Start of Battle (Stun Front Row). Eltolinde deploys Boon of the Faeries (Barrier). Both sisters stack Faeries and cast Elemental Roar, sweeping all enemies with unblockable hybrid damage.",
      "winCondition": "Turn 1 double Elemental Roar devastating the battlefield.",
      "combatSequenceNotes": [
        "Rosalinde stuns enemy front row at Start of Battle with Rage of the Faeries.",
        "Eltolinde deploys full-squad damage nullification with Boon of the Faeries.",
        "Rosalinde fires Elemental Roar hitting all enemies.",
        "Eltolinde follows up with second Elemental Roar wiping survivors.",
        "Ithilion and Railanor finish evasive units with Lightning Sword."
      ]
    },
    "unitGearConfigs": [
      {
        "unitId": "rosalinde-elven-augur",
        "unitName": "Rosalinde (Elven Augur)",
        "characterName": "Rosalinde",
        "className": "Elven Augur",
        "roleTitle": "Start-of-Battle Stun & Elemental Nuke Lead",
        "growthTypes": [
          "Offensive",
          "All-Rounder"
        ],
        "slot1Weapon": {
          "bestInSlot": "Sacral Spear",
          "optimalAlternatives": [
            "Kingslance Elhal",
            "Carnelian Spear",
            "Dragonbone Spear"
          ],
          "slotType": "Weapon",
          "notes": "Phys Atk +25, Affliction Immunity, Heal 20% HP on active skill."
        },
        "slot2ShieldOrOffhand": {
          "bestInSlot": "Ancient Crown",
          "optimalAlternatives": [
            "Dream Crown",
            "Silk Hood",
            "Silver Circlet"
          ],
          "slotType": "Accessory",
          "notes": "Mag Atk +8, Mag Def +8, PP +1, Initiative +5."
        },
        "slot3Accessory": {
          "bestInSlot": "Old Witch's Ring",
          "optimalAlternatives": [
            "Old Witch's Ring",
            "Celestial Talisman",
            "Raven Plume"
          ],
          "slotType": "Accessory",
          "notes": "Mag Def +3, Magick Conversion, Mag Atk +2."
        },
        "slot4Accessory": {
          "bestInSlot": "Carnelian Pendant",
          "optimalAlternatives": [
            "Ruby Pendant",
            "Sapphire Pendant",
            "Vitality Talisman"
          ],
          "slotType": "Accessory",
          "notes": "AP +1 for Elemental Roar (3 AP)."
        }
      },
      {
        "unitId": "eltolinde-elven-sibyl",
        "unitName": "Eltolinde (Elven Sibyl)",
        "characterName": "Eltolinde",
        "className": "Elven Sibyl",
        "roleTitle": "Faerie Barrier Buffer & Secondary Nuke",
        "growthTypes": [
          "Support",
          "Offensive"
        ],
        "slot1Weapon": {
          "bestInSlot": "Kingslance Elhal",
          "optimalAlternatives": [
            "Sacral Spear",
            "Meteorite Lance",
            "Runic Spear"
          ],
          "slotType": "Weapon",
          "notes": "Phys Atk +28, All Stats +5. Eltolinde's royal Elheim lance."
        },
        "slot2ShieldOrOffhand": {
          "bestInSlot": "Dream Crown",
          "optimalAlternatives": [
            "Ancient Crown",
            "Silk Hood",
            "Silver Circlet"
          ],
          "slotType": "Accessory",
          "notes": "Mag Atk +6, Mag Def +6, PP +1."
        },
        "slot3Accessory": {
          "bestInSlot": "Elite Standard",
          "optimalAlternatives": [
            "Celestial Talisman",
            "Lapis Pendant",
            "First Aid Kit"
          ],
          "slotType": "Accessory",
          "notes": "United Front: Boosts squad offensive and defensive stats in formation."
        },
        "slot4Accessory": {
          "bestInSlot": "Carnelian Pendant",
          "optimalAlternatives": [
            "Ruby Pendant",
            "Power Belt",
            "Vitality Talisman"
          ],
          "slotType": "Accessory",
          "notes": "AP +1 for second Elemental Roar."
        }
      },
      {
        "unitId": "ithilion-elven-fencer",
        "unitName": "Ithilion (Elven Fencer)",
        "characterName": "Ithilion",
        "className": "Elven Fencer",
        "roleTitle": "Hybrid Lightning Stun Duelist",
        "growthTypes": [
          "Offensive",
          "Keen"
        ],
        "slot1Weapon": {
          "bestInSlot": "Phantom Knight's Sword",
          "optimalAlternatives": [
            "Spellsteel Sword",
            "Runic Sword",
            "Notos's Sword"
          ],
          "slotType": "Weapon",
          "notes": "Mag Atk +22, Mag Def +5, Initiative +3, Grants Phantom Attack."
        },
        "slot2ShieldOrOffhand": {
          "bestInSlot": "Illusory Cloak",
          "optimalAlternatives": [
            "Thief's Mantle",
            "Dusk Robes",
            "Silk Scarf"
          ],
          "slotType": "Accessory",
          "notes": "Evasion +20, Grants Phantom Step."
        },
        "slot3Accessory": {
          "bestInSlot": "Raven Plume",
          "optimalAlternatives": [
            "Angel Plume",
            "Wind Brooch",
            "Evasion Ring"
          ],
          "slotType": "Accessory",
          "notes": "Initiative +15 for Turn-1 frontline stun."
        },
        "slot4Accessory": {
          "bestInSlot": "Carnelian Pendant",
          "optimalAlternatives": [
            "Ruby Pendant",
            "Power Belt",
            "Vitality Talisman"
          ],
          "slotType": "Accessory",
          "notes": "AP +1 for Lightning Sword."
        }
      },
      {
        "unitId": "railanor-elven-fencer",
        "unitName": "Railanor (Elven Fencer)",
        "characterName": "Railanor",
        "className": "Elven Fencer",
        "roleTitle": "Frontline Evasion & Wind Blade Sweeper",
        "growthTypes": [
          "Offensive",
          "Keen"
        ],
        "slot1Weapon": {
          "bestInSlot": "Spellsteel Sword",
          "optimalAlternatives": [
            "Runic Sword",
            "Phantom Knight's Sword",
            "Zephyrus Sword"
          ],
          "slotType": "Weapon",
          "notes": "Phys Atk +18, Mag Atk +16, Evasion +10."
        },
        "slot2ShieldOrOffhand": {
          "bestInSlot": "Dusk Robes",
          "optimalAlternatives": [
            "Illusory Cloak",
            "Silk Hood",
            "Evasion Scarf"
          ],
          "slotType": "Accessory",
          "notes": "Mag Def +12, Evasion +10, Grants Nocturnal Impetus."
        },
        "slot3Accessory": {
          "bestInSlot": "Lapis Pendant",
          "optimalAlternatives": [
            "Sapphire Pendant",
            "Raven Plume",
            "Wind Talisman"
          ],
          "slotType": "Accessory",
          "notes": "PP +1 for Mirage Step dodges."
        },
        "slot4Accessory": {
          "bestInSlot": "Carnelian Pendant",
          "optimalAlternatives": [
            "Ruby Pendant",
            "Critical Talisman",
            "Power Belt"
          ],
          "slotType": "Accessory",
          "notes": "AP +1 for Windstorm Blade."
        }
      },
      {
        "unitId": "galadmir-elven-archer",
        "unitName": "Galadmir (Elven Archer)",
        "characterName": "Galadmir",
        "className": "Elven Archer",
        "roleTitle": "Backline Freeze & Row Cleanse",
        "growthTypes": [
          "Support",
          "Offensive"
        ],
        "slot1Weapon": {
          "bestInSlot": "Sacral Bow",
          "optimalAlternatives": [
            "Runic Bow",
            "Apeliotes's Bow",
            "Dragonbone Bow"
          ],
          "slotType": "Weapon",
          "notes": "Phys Atk +25, Affliction Immunity, Heal 20% HP on active skill."
        },
        "slot2ShieldOrOffhand": {
          "bestInSlot": "Silk Hood",
          "optimalAlternatives": [
            "Elven Tiara",
            "Dream Crown",
            "Magick Brooch"
          ],
          "slotType": "Accessory",
          "notes": "Mag Def +4, Initiative +3."
        },
        "slot3Accessory": {
          "bestInSlot": "Detoxifying Amulet",
          "optimalAlternatives": [
            "Celestial Talisman",
            "First Aid Kit",
            "Lapis Pendant"
          ],
          "slotType": "Accessory",
          "notes": "Affliction Resistance +50%, Grants Row Refresh."
        },
        "slot4Accessory": {
          "bestInSlot": "Lapis Pendant",
          "optimalAlternatives": [
            "Sapphire Pendant",
            "Raven Plume",
            "Vitality Talisman"
          ],
          "slotType": "Accessory",
          "notes": "PP +1 for Icicle Arrow & Mystic Conferral."
        }
      }
    ],
    "tacticsSequence": [
      {
        "step": 1,
        "unit": "Rosalinde",
        "skill": "Rage of the Faeries",
        "condition1": "[Start of Battle]",
        "condition2": "[Self PP >= 1]",
        "notes": "Stuns enemy front row at the start of battle."
      },
      {
        "step": 2,
        "unit": "Eltolinde",
        "skill": "Boon of the Faeries",
        "condition1": "[Start of Battle]",
        "condition2": "[Self PP >= 1]",
        "notes": "Deploys 1-hit complete damage nullification barrier to entire squad."
      },
      {
        "step": 3,
        "unit": "Rosalinde",
        "skill": "Elemental Roar",
        "condition1": "[Target: All Enemies]",
        "condition2": "[Self AP >= 3]",
        "notes": "Fires massive hybrid physical/magic full-board strike."
      },
      {
        "step": 4,
        "unit": "Eltolinde",
        "skill": "Elemental Roar",
        "condition1": "[Target: All Enemies]",
        "condition2": "[Self AP >= 3]",
        "notes": "Follows up with second full-board elemental wipe."
      },
      {
        "step": 5,
        "unit": "Ithilion",
        "skill": "Lightning Sword",
        "condition1": "[Target: Scout / Evasion Enemy]",
        "condition2": "[Self AP >= 1]",
        "notes": "Stuns and destroys remaining high-evasion survivors."
      }
    ]
  },
  {
    "id": "zero-8-amalia-grand-crusher",
    "name": "8. Amalia Colossal Shield & Armor Obliteration",
    "archetype": "Heavy Armor Crusher",
    "tier": "S+",
    "pvpRating": "97.0/100",
    "description": "The unstoppable boss shredder. Amalia wields colossal physical power with 100% guard pierce and Wide Counter, while Bertrand tanks frontline punishment and Monica provides magic barriers and sustain.",
    "frontRow": [
      "amalia-dreadnought",
      "bertrand-werebear"
    ],
    "backRow": [
      "monica-sainted-knight",
      "aramis-swordmaster",
      "mandrin-sniper"
    ],
    "keyItems": [
      "Mason's Hammer",
      "Azure Crest Shield",
      "Greatwood Greataxe",
      "Riot Belt"
    ],
    "counters": [
      "Legionnaires and armored walls",
      "Boss targets",
      "Single vanguard units"
    ],
    "strategyGuide": {
      "overview": "Bertrand draws enemy fire with Indomitable Guard and Ground Slam. Amalia executes Penetrate and Hawk Eye slashes, shattering enemy shields. Monica prevents magic spikes with Magic Barrier.",
      "winCondition": "Amalia one-shotting enemy frontline tanks and cleaving backline columns.",
      "combatSequenceNotes": [
        "Bertrand stuns and taunts enemy frontline with Ground Slam.",
        "Amalia pierces through enemy column with Penetrate (100% Guard Pierce).",
        "Monica intercepts enemy spells with Magic Barrier.",
        "Aramis executes weakened survivors with Meteor Slash.",
        "Mandrin snipes aerial scouts with True-Strike Dual Shot."
      ]
    },
    "unitGearConfigs": [
      {
        "unitId": "amalia-dreadnought",
        "unitName": "Amalia (Dreadnought)",
        "characterName": "Amalia",
        "className": "Dreadnought",
        "roleTitle": "Colossal Greatsword Boss Obliterator",
        "growthTypes": [
          "Offensive",
          "Offensive"
        ],
        "slot1Weapon": {
          "bestInSlot": "Mason's Hammer",
          "optimalAlternatives": [
            "Dragonbone Sword",
            "Kingsblade Cornix",
            "Meteorite Sword"
          ],
          "slotType": "Weapon",
          "notes": "Phys Atk +28, Guard Piercing +50%, Grants Powerful Impact."
        },
        "slot2ShieldOrOffhand": {
          "bestInSlot": "Azure Crest Shield",
          "optimalAlternatives": [
            "Holy Unicorn Shield",
            "Chivalric Shield",
            "Steel Shield"
          ],
          "slotType": "Shield",
          "notes": "Greatshield Slot: Phys Def +5, Base PP +1, Guard Rate +25%."
        },
        "slot3Accessory": {
          "bestInSlot": "Riot Belt",
          "optimalAlternatives": [
            "Power Belt",
            "Warrior's Medallion",
            "Counter Belt"
          ],
          "slotType": "Accessory",
          "notes": "Phys Atk +20%, Grants Wide Counter."
        },
        "slot4Accessory": {
          "bestInSlot": "Carnelian Pendant",
          "optimalAlternatives": [
            "Ruby Pendant",
            "Strength Brooch",
            "Vitality Talisman"
          ],
          "slotType": "Accessory",
          "notes": "AP +1 for Penetrate column strikes."
        }
      },
      {
        "unitId": "bertrand-werebear",
        "unitName": "Bertrand (Werebear)",
        "characterName": "Bertrand",
        "className": "Werebear",
        "roleTitle": "Bestral Frontline Taunt Wall",
        "growthTypes": [
          "Guardian",
          "Survivor"
        ],
        "slot1Weapon": {
          "bestInSlot": "Greatwood Greataxe",
          "optimalAlternatives": [
            "Boreas's Axe",
            "Dragonbone Axe",
            "Meteorite Axe"
          ],
          "slotType": "Weapon",
          "notes": "Phys Atk +24, Mag Def +4, Guard +10%."
        },
        "slot2ShieldOrOffhand": {
          "bestInSlot": "Beast Hunter's Buckler",
          "optimalAlternatives": [
            "Ironclad Buckler",
            "Unyielding Shield",
            "Golden Ram Shield"
          ],
          "slotType": "Shield",
          "notes": "Greatshield Slot: Phys Def +6, Bestral Guard, Guard Rate +25%."
        },
        "slot3Accessory": {
          "bestInSlot": "Lifeblood Talisman",
          "optimalAlternatives": [
            "Ruby Pendant",
            "Vitality Talisman",
            "Survivor Ring"
          ],
          "slotType": "Accessory",
          "notes": "Max HP +20, Indomitable Guard synergy."
        },
        "slot4Accessory": {
          "bestInSlot": "Lapis Pendant",
          "optimalAlternatives": [
            "Sapphire Pendant",
            "Heavy Armor Belt",
            "First Aid Kit"
          ],
          "slotType": "Accessory",
          "notes": "PP +1 for Ground Slam taunt."
        }
      },
      {
        "unitId": "monica-sainted-knight",
        "unitName": "Monica (Sainted Knight)",
        "characterName": "Monica",
        "className": "Sainted Knight",
        "roleTitle": "Support Knight & Magic Barrier Protector",
        "growthTypes": [
          "Support",
          "Guardian"
        ],
        "slot1Weapon": {
          "bestInSlot": "Rosularis Sword",
          "optimalAlternatives": [
            "Runic Sword",
            "Hallowed Blade",
            "White Knight Blade"
          ],
          "slotType": "Weapon",
          "notes": "Phys Atk +25, Base PP +1, HP Recovery +30%."
        },
        "slot2ShieldOrOffhand": {
          "bestInSlot": "Holy Knight's Shield",
          "optimalAlternatives": [
            "Luminous Shield",
            "Azure Crest Shield",
            "Steel Shield"
          ],
          "slotType": "Shield",
          "notes": "Phys Def +7, Holy Guard, Heal 10% HP on active action."
        },
        "slot3Accessory": {
          "bestInSlot": "Lapis Pendant",
          "optimalAlternatives": [
            "Sapphire Pendant",
            "Magick Brooch",
            "Celestial Talisman"
          ],
          "slotType": "Accessory",
          "notes": "PP +1 for Magic Barrier."
        },
        "slot4Accessory": {
          "bestInSlot": "First Aid Kit",
          "optimalAlternatives": [
            "Vitality Talisman",
            "Healing Brooch",
            "Saint's Talisman"
          ],
          "slotType": "Accessory",
          "notes": "End of battle sustain."
        }
      },
      {
        "unitId": "aramis-swordmaster",
        "unitName": "Aramis (Swordmaster)",
        "characterName": "Aramis",
        "className": "Swordmaster",
        "roleTitle": "Scout Executioner & True-Strike Finisher",
        "growthTypes": [
          "Offensive",
          "Keen"
        ],
        "slot1Weapon": {
          "bestInSlot": "Vorpal Sword",
          "optimalAlternatives": [
            "Kingsblade Cornix",
            "Notos's Sword",
            "General's Saber"
          ],
          "slotType": "Weapon",
          "notes": "Main-Hand Slot: Phys Atk +23, Initiative +3."
        },
        "slot2ShieldOrOffhand": {
          "bestInSlot": "Dragonbone Sword",
          "optimalAlternatives": [
            "Vorpal Sword",
            "Venom Blade",
            "Pursuant's Blade"
          ],
          "slotType": "Weapon",
          "notes": "Dual-Wield Off-Hand Slot: Phys Atk +22, PP +1, Initiative -10."
        },
        "slot3Accessory": {
          "bestInSlot": "Parrying Amulet",
          "optimalAlternatives": [
            "Retaliation Earrings",
            "Warrior's Medallion",
            "Evasion Ring"
          ],
          "slotType": "Accessory",
          "notes": "Mag Def +1, Guard Cure, Guard Seal Immunity."
        },
        "slot4Accessory": {
          "bestInSlot": "Carnelian Pendant",
          "optimalAlternatives": [
            "Ruby Pendant",
            "Sniper's Lens",
            "Critical Talisman"
          ],
          "slotType": "Accessory",
          "notes": "AP +1 for Meteor Slash executions."
        }
      },
      {
        "unitId": "mandrin-sniper",
        "unitName": "Mandrin (Sniper)",
        "characterName": "Mandrin",
        "className": "Sniper",
        "roleTitle": "Anti-Air True Strike Sniper",
        "growthTypes": [
          "Offensive",
          "Keen"
        ],
        "slot1Weapon": {
          "bestInSlot": "Meteorite Bow",
          "optimalAlternatives": [
            "Apeliotes's Bow",
            "Runic Bow",
            "Dragonbone Bow"
          ],
          "slotType": "Weapon",
          "notes": "Phys Atk +24, Max HP +20, Guard Rate +10%."
        },
        "slot2ShieldOrOffhand": {
          "bestInSlot": "Mercenary's Eyepatch",
          "optimalAlternatives": [
            "Sniper's Lens",
            "Veteran's Eyepatch",
            "Hunter's Cap"
          ],
          "slotType": "Accessory",
          "notes": "Phys Def +1, Critical Rate +20%."
        },
        "slot3Accessory": {
          "bestInSlot": "Veteran's Eyepatch",
          "optimalAlternatives": [
            "Mirrored Spectacles",
            "Warrior's Medallion",
            "Sniper's Lens"
          ],
          "slotType": "Accessory",
          "notes": "Phys Def +2, Critical Rate +30%."
        },
        "slot4Accessory": {
          "bestInSlot": "Lapis Pendant",
          "optimalAlternatives": [
            "Sapphire Pendant",
            "First Aid Kit",
            "Vitality Talisman"
          ],
          "slotType": "Accessory",
          "notes": "PP +1 for Eagle Eye."
        }
      }
    ],
    "tacticsSequence": [
      {
        "step": 1,
        "unit": "Bertrand",
        "skill": "Ground Slam",
        "condition1": "[Target: Front Row (2+ Enemies)]",
        "condition2": "[Self AP >= 2]",
        "notes": "Taunts and stuns enemy frontline."
      },
      {
        "step": 2,
        "unit": "Amalia",
        "skill": "Penetrate",
        "condition1": "[Target: Column (Armored Priority)]",
        "condition2": "[Self AP >= 2]",
        "notes": "Pierce through enemy column ignoring armor."
      },
      {
        "step": 3,
        "unit": "Monica",
        "skill": "Magic Barrier",
        "condition1": "[Before Magic Attack]",
        "condition2": "[Self PP >= 1]",
        "notes": "Protects Bertrand and Amalia from enemy spells."
      },
      {
        "step": 4,
        "unit": "Aramis",
        "skill": "Meteor Slash",
        "condition1": "[Target: Lowest HP % Enemy]",
        "condition2": "[Self AP >= 2]",
        "notes": "9-hit physical flurry executing weakened targets."
      },
      {
        "step": 5,
        "unit": "Mandrin",
        "skill": "Dual Shot",
        "condition1": "[Target: Flying Enemies Priority]",
        "condition2": "[Self AP >= 1]",
        "notes": "Eliminates aerial scouts with True Strike."
      }
    ]
  },
  {
    "id": "zero-9-bestral-midnight-hunt",
    "name": "9. Bestral Midnight Hunt Pack",
    "archetype": "Affliction Control",
    "tier": "S+",
    "pvpRating": "96.5/100",
    "description": "The savage Bastorias nocturnal hunting pack. Dinah and Govil shred armor and chain multi-target Pursuits amplified by Wolfpack Gauntlets, while Raenys inflicts turn-0 blindness and Jeremy executes bleeding foes.",
    "frontRow": [
      "dinah-werewolf",
      "govil-werewolf"
    ],
    "backRow": [
      "morpan-werebear",
      "raenys-featherbow",
      "jeremy-landsknecht"
    ],
    "keyItems": [
      "Beastfang Blade",
      "Wolfpack Gauntlets",
      "Wolf Fang Bracelet",
      "Holy Angel Bow"
    ],
    "counters": [
      "Light armored infantry",
      "Scouts and evasion units",
      "Unshielded casters"
    ],
    "strategyGuide": {
      "overview": "Raenys triggers Shining Arrow at Start of Battle to blind enemy row. Dinah applies Night Hunt and Piercing Claw. Govil chains Chasing Slash on bleeding foes, while Jeremy resets AP on every kill with Killing Chain.",
      "winCondition": "Chaining continuous Pursuit and Killing Chain resets.",
      "combatSequenceNotes": [
        "Raenys blinds enemy front row on Turn 0 with Shining Arrow.",
        "Dinah shreds defense and bleeds targets with Piercing Claw.",
        "Govil follows up with Chasing Slash (+100% damage on bleeding targets).",
        "Jeremy resets AP on each kill with Killing Chain.",
        "Morpan guards backline from retaliation with Heavy Cover."
      ]
    },
    "unitGearConfigs": [
      {
        "unitId": "dinah-werewolf",
        "unitName": "Dinah (Werewolf)",
        "characterName": "Dinah",
        "className": "Werewolf",
        "roleTitle": "Bestral Alpha Assassin & Pursuit Lead",
        "growthTypes": [
          "Offensive",
          "Keen"
        ],
        "slot1Weapon": {
          "bestInSlot": "Venom Blade",
          "optimalAlternatives": [
            "Carnelian Blade",
            "Pursuant's Blade",
            "Dragonbone Blade"
          ],
          "slotType": "Weapon",
          "notes": "Phys Atk +22, Crit Rate +15%, Initiative +5."
        },
        "slot2ShieldOrOffhand": {
          "bestInSlot": "Badger Gauntlets",
          "optimalAlternatives": [
            "Twilight Cloak",
            "Evasion Ring",
            "Feral Brooch"
          ],
          "slotType": "Accessory",
          "notes": "Initiative +5, Crit Rate +10%, Grants Killing Pursuit."
        },
        "slot3Accessory": {
          "bestInSlot": "Wolfpack Gauntlets",
          "optimalAlternatives": [
            "Warrior's Medallion",
            "Critical Talisman",
            "Predator Ring"
          ],
          "slotType": "Accessory",
          "notes": "Phys Atk +5, Bestral Boost, Grants Wolf Pack."
        },
        "slot4Accessory": {
          "bestInSlot": "Carnelian Pendant",
          "optimalAlternatives": [
            "Ruby Pendant",
            "Power Belt",
            "Vitality Talisman"
          ],
          "slotType": "Accessory",
          "notes": "AP +1 for Piercing Claw & Night Hunt."
        }
      },
      {
        "unitId": "govil-werewolf",
        "unitName": "Govil (Werewolf)",
        "characterName": "Govil",
        "className": "Werewolf",
        "roleTitle": "Armor Shredder & Pursuit Striker",
        "growthTypes": [
          "Offensive",
          "Offensive"
        ],
        "slot1Weapon": {
          "bestInSlot": "Carnelian Blade",
          "optimalAlternatives": [
            "Beastfang Blade",
            "Meteorite Sword",
            "Dragonbone Blade"
          ],
          "slotType": "Weapon",
          "notes": "Phys Atk +25, AP +1."
        },
        "slot2ShieldOrOffhand": {
          "bestInSlot": "Twilight Cloak",
          "optimalAlternatives": [
            "Thief's Mantle",
            "Silk Scarf",
            "Evasion Ring"
          ],
          "slotType": "Accessory",
          "notes": "Evasion +15, Initiative +5, Grants Nocturnal Evade."
        },
        "slot3Accessory": {
          "bestInSlot": "Raven Plume",
          "optimalAlternatives": [
            "Angel Plume",
            "Wind Brooch",
            "Speed Talisman"
          ],
          "slotType": "Accessory",
          "notes": "Initiative +15 for early turn order."
        },
        "slot4Accessory": {
          "bestInSlot": "Lapis Pendant",
          "optimalAlternatives": [
            "Sapphire Pendant",
            "Power Belt",
            "Critical Talisman"
          ],
          "slotType": "Accessory",
          "notes": "PP +1 for Chasing Slash follow-ups."
        }
      },
      {
        "unitId": "morpan-werebear",
        "unitName": "Morpan (Werebear)",
        "characterName": "Morpan",
        "className": "Werebear",
        "roleTitle": "Bestral Frontline Shield & Ground Slammer",
        "growthTypes": [
          "Guardian",
          "Survivor"
        ],
        "slot1Weapon": {
          "bestInSlot": "Meteorite Axe",
          "optimalAlternatives": [
            "Boreas's Axe",
            "Dragonbone Axe",
            "Carnelian Axe"
          ],
          "slotType": "Weapon",
          "notes": "Phys Atk +24, Max HP +20."
        },
        "slot2ShieldOrOffhand": {
          "bestInSlot": "Ironclad Buckler",
          "optimalAlternatives": [
            "Beast Hunter's Buckler",
            "Unyielding Shield",
            "Steel Shield"
          ],
          "slotType": "Shield",
          "notes": "Greatshield Slot: Phys Def +5, Wall, Guard Rate +25%."
        },
        "slot3Accessory": {
          "bestInSlot": "Lifeblood Talisman",
          "optimalAlternatives": [
            "Ruby Pendant",
            "Vitality Talisman",
            "Survivor Ring"
          ],
          "slotType": "Accessory",
          "notes": "Max HP +20."
        },
        "slot4Accessory": {
          "bestInSlot": "Lapis Pendant",
          "optimalAlternatives": [
            "Sapphire Pendant",
            "Heavy Armor Belt",
            "First Aid Kit"
          ],
          "slotType": "Accessory",
          "notes": "PP +1 for Heavy Cover."
        }
      },
      {
        "unitId": "raenys-featherbow",
        "unitName": "Raenys (Featherbow)",
        "characterName": "Raenys",
        "className": "Featherbow",
        "roleTitle": "Turn-0 Blindness Disruptor",
        "growthTypes": [
          "Go-Getter",
          "Support"
        ],
        "slot1Weapon": {
          "bestInSlot": "Holy Angel Bow",
          "optimalAlternatives": [
            "Apeliotes's Bow",
            "Zenoiran Bow",
            "Runic Bow"
          ],
          "slotType": "Weapon",
          "notes": "Phys Atk +24, Mag Atk +18, Blindness Affliction +20%."
        },
        "slot2ShieldOrOffhand": {
          "bestInSlot": "Silken Scarf",
          "optimalAlternatives": [
            "Angel Plume",
            "Silk Hood",
            "Feather Plume"
          ],
          "slotType": "Accessory",
          "notes": "Phys Def +1, Evasion +20."
        },
        "slot3Accessory": {
          "bestInSlot": "Raven Plume",
          "optimalAlternatives": [
            "Wind Brooch",
            "Speed Belt",
            "Celestial Talisman"
          ],
          "slotType": "Accessory",
          "notes": "Initiative +15 for undisputed Turn-0 speed."
        },
        "slot4Accessory": {
          "bestInSlot": "Lapis Pendant",
          "optimalAlternatives": [
            "Sapphire Pendant",
            "First Aid Kit",
            "Vitality Talisman"
          ],
          "slotType": "Accessory",
          "notes": "PP +1 for Shining Arrow activations."
        }
      },
      {
        "unitId": "jeremy-landsknecht",
        "unitName": "Jeremy (Landsknecht)",
        "characterName": "Jeremy",
        "className": "Landsknecht",
        "roleTitle": "Following Slash Executioner",
        "growthTypes": [
          "Offensive",
          "Offensive"
        ],
        "slot1Weapon": {
          "bestInSlot": "Executioner's Blade",
          "optimalAlternatives": [
            "Kingsblade Cornix",
            "Notos's Sword",
            "Dragonbone Sword"
          ],
          "slotType": "Weapon",
          "notes": "Phys Atk +26, Crit Rate +10%, AP +1 on Kill."
        },
        "slot2ShieldOrOffhand": {
          "bestInSlot": "Mercenary's Shield",
          "optimalAlternatives": [
            "Steel Shield",
            "Chivalric Shield",
            "Parrying Shield"
          ],
          "slotType": "Shield",
          "notes": "Phys Def +6, Vengeful Guard, Guard Rate +25%, Crit +5%."
        },
        "slot3Accessory": {
          "bestInSlot": "Carnelian Pendant",
          "optimalAlternatives": [
            "Ruby Pendant",
            "Power Belt",
            "Strength Brooch"
          ],
          "slotType": "Accessory",
          "notes": "AP +1 for Killing Chain executions."
        },
        "slot4Accessory": {
          "bestInSlot": "Power Belt",
          "optimalAlternatives": [
            "Warrior's Medallion",
            "Armored Gauntlets",
            "Vitality Talisman"
          ],
          "slotType": "Accessory",
          "notes": "Phys Atk +1, Grants Toughness, Max HP +10."
        }
      }
    ],
    "tacticsSequence": [
      {
        "step": 1,
        "unit": "Raenys",
        "skill": "Shining Arrow",
        "condition1": "[Start of Battle]",
        "condition2": "[Target: Enemy Front Row]",
        "notes": "Turn-0 blindness rendering enemy physical attackers useless."
      },
      {
        "step": 2,
        "unit": "Dinah",
        "skill": "Piercing Claw",
        "condition1": "[Target: Armored Enemy]",
        "condition2": "[Self AP >= 1]",
        "notes": "Shreds enemy physical defense by 50%."
      },
      {
        "step": 3,
        "unit": "Govil",
        "skill": "Chasing Slash",
        "condition1": "[After Ally Attacks]",
        "condition2": "[Self PP >= 1]",
        "notes": "Follow-up strike against bleeding and weakened targets."
      },
      {
        "step": 4,
        "unit": "Jeremy",
        "skill": "Killing Chain",
        "condition1": "[Target: Lowest HP % Enemy]",
        "condition2": "[Self AP >= 1]",
        "notes": "Executes targets and restores +1 AP on kill."
      },
      {
        "step": 5,
        "unit": "Morpan",
        "skill": "Heavy Cover",
        "condition1": "[Before Ally Attacked (Back Row)]",
        "condition2": "[Self PP >= 1]",
        "notes": "Guards backline shooters from enemy retaliations."
      }
    ]
  },
  {
    "id": "zero-10-sanatio-divine-reflection",
    "name": "10. Sanatio Divine Sacred Zenith & Magic Reflection",
    "archetype": "Heavy Sustain",
    "tier": "S+",
    "pvpRating": "97.0/100",
    "description": "The holy fortress of Albion. Sanatio provides 2-hit absolute damage nullification with Start-of-Battle Sacred Barrier, Ochlys reflects all enemy spells with Heavenswing Shield, and Gloucester delivers massive dark flame vengeance.",
    "frontRow": [
      "ochlys-feathersword",
      "umerus-feathersword"
    ],
    "backRow": [
      "sanatio-featherstaff",
      "tatiana-bishop",
      "gloucester-doom-knight"
    ],
    "keyItems": [
      "Kingstaff Albiore",
      "Heavenswing Shield",
      "Monk's Mitre",
      "Wingcrest Shield"
    ],
    "counters": [
      "Trinity Rain / Magic Nuke squads",
      "Low accuracy melee compositions"
    ],
    "strategyGuide": {
      "overview": "Sanatio opens with Sacred Barrier (2-hit complete damage nullification to entire squad). Ochlys and Umerus evade physical attacks and reflect magic spells back at enemy casters. Gloucester unleashes Dark Flame for crushing revenge damage.",
      "winCondition": "Completely nullifying enemy opening burst while reflecting spells and counter-slashing.",
      "combatSequenceNotes": [
        "Sanatio deploys 2-hit damage nullification barrier on Turn 0.",
        "Ochlys reflects incoming enemy magic spells with Heavenswing Shield.",
        "Gloucester deals heavy row damage with Dark Flame.",
        "Tatiana cleanses debuffs and heals squad with Row Heal.",
        "Umerus counter-attacks with Spiral Sword."
      ]
    },
    "unitGearConfigs": [
      {
        "unitId": "sanatio-featherstaff",
        "unitName": "Sanatio (Featherstaff)",
        "characterName": "Sanatio",
        "className": "Featherstaff",
        "roleTitle": "Divine Barrier Leader & Sacred Guardian",
        "growthTypes": [
          "Support",
          "Guardian"
        ],
        "slot1Weapon": {
          "bestInSlot": "Kingstaff Albiore",
          "optimalAlternatives": [
            "Sacral Rod",
            "Hallowed Staff",
            "Euros's Staff"
          ],
          "slotType": "Weapon",
          "notes": "Mag Atk +28, All Stats +5, Sacred Barrier: Start of Battle 2-Hit Squad Nullification."
        },
        "slot2ShieldOrOffhand": {
          "bestInSlot": "Monk's Mitre",
          "optimalAlternatives": [
            "Silk Hood",
            "Sage's Hood",
            "Saint's Mitre"
          ],
          "slotType": "Accessory",
          "notes": "Phys Def +1, Mag Def +1, Grants Quick Heal."
        },
        "slot3Accessory": {
          "bestInSlot": "Holy Broach",
          "optimalAlternatives": [
            "Sacral Broach",
            "Rose Broach",
            "Leaf Broach"
          ],
          "slotType": "Accessory",
          "notes": "Phys Def +2, Mag Def +2, Heal 20% HP when using Active skill."
        },
        "slot4Accessory": {
          "bestInSlot": "Lapis Pendant",
          "optimalAlternatives": [
            "Sapphire Pendant",
            "First Aid Kit",
            "Vitality Talisman"
          ],
          "slotType": "Accessory",
          "notes": "PP +1 for Sacred Heal."
        }
      },
      {
        "unitId": "ochlys-feathersword",
        "unitName": "Ochlys (Feathersword)",
        "characterName": "Ochlys",
        "className": "Feathersword",
        "roleTitle": "Evasive Flying Tank & Magic Reflector",
        "growthTypes": [
          "Offensive",
          "Keen"
        ],
        "slot1Weapon": {
          "bestInSlot": "Zephyrus Sword",
          "optimalAlternatives": [
            "Notos's Sword",
            "Hallowed Blade",
            "Meteorite Sword"
          ],
          "slotType": "Weapon",
          "notes": "Phys Atk +24, Initiative +8, Evasion +15."
        },
        "slot2ShieldOrOffhand": {
          "bestInSlot": "Heavenswing Shield",
          "optimalAlternatives": [
            "Wingcrest Shield",
            "Azure Crest Shield",
            "Steel Shield"
          ],
          "slotType": "Shield",
          "notes": "Phys Def +5, Accuracy +10, Evasion +10, Magic Reflect."
        },
        "slot3Accessory": {
          "bestInSlot": "Lucky Coin",
          "optimalAlternatives": [
            "Silken Scarf",
            "Evasion Ring",
            "Wind Brooch"
          ],
          "slotType": "Accessory",
          "notes": "Critical Rate +20%, Evasion +20 for maximum aerial dodging."
        },
        "slot4Accessory": {
          "bestInSlot": "Carnelian Pendant",
          "optimalAlternatives": [
            "Ruby Pendant",
            "Power Belt",
            "Vitality Talisman"
          ],
          "slotType": "Accessory",
          "notes": "AP +1 for Spiral Sword slashes."
        }
      },
      {
        "unitId": "umerus-feathersword",
        "unitName": "Umerus (Feathersword)",
        "characterName": "Umerus",
        "className": "Feathersword",
        "roleTitle": "Evasive Counter Aerial Duelist",
        "growthTypes": [
          "Offensive",
          "Keen"
        ],
        "slot1Weapon": {
          "bestInSlot": "Hallowed Blade",
          "optimalAlternatives": [
            "Zephyrus Sword",
            "Notos's Sword",
            "Meteorite Sword"
          ],
          "slotType": "Weapon",
          "notes": "Phys Atk +24, HP Regen +10%."
        },
        "slot2ShieldOrOffhand": {
          "bestInSlot": "Wingcrest Shield",
          "optimalAlternatives": [
            "Heavenswing Shield",
            "Chivalric Shield",
            "Steel Shield"
          ],
          "slotType": "Shield",
          "notes": "Phys Def +7, Base PP +1, Critical Rate -20%."
        },
        "slot3Accessory": {
          "bestInSlot": "Shawl of Repose",
          "optimalAlternatives": [
            "Silken Scarf",
            "Angel Plume",
            "Evasion Ring"
          ],
          "slotType": "Accessory",
          "notes": "Phys Def +1, Grants Wing Rest."
        },
        "slot4Accessory": {
          "bestInSlot": "Carnelian Pendant",
          "optimalAlternatives": [
            "Ruby Pendant",
            "Power Belt",
            "Vitality Talisman"
          ],
          "slotType": "Accessory",
          "notes": "AP +1 for Spiral Sword attacks."
        }
      },
      {
        "unitId": "tatiana-bishop",
        "unitName": "Tatiana (Bishop)",
        "characterName": "Tatiana",
        "className": "Bishop",
        "roleTitle": "Row Refresh & Barrier Support",
        "growthTypes": [
          "Support",
          "Go-Getter"
        ],
        "slot1Weapon": {
          "bestInSlot": "Sacral Rod",
          "optimalAlternatives": [
            "Hallowed Staff",
            "Euros's Staff",
            "Cleric's Cane"
          ],
          "slotType": "Weapon",
          "notes": "Mag Atk +25, Affliction Immunity, Heal 20% HP on active action."
        },
        "slot2ShieldOrOffhand": {
          "bestInSlot": "Silk Hood",
          "optimalAlternatives": [
            "Archbishop's Mitre",
            "Saint's Hood",
            "Magick Brooch"
          ],
          "slotType": "Accessory",
          "notes": "Mag Def +4, Initiative +3."
        },
        "slot3Accessory": {
          "bestInSlot": "First Aid Kit",
          "optimalAlternatives": [
            "Celestial Talisman",
            "Healing Brooch",
            "Saint's Talisman"
          ],
          "slotType": "Accessory",
          "notes": "End of battle emergency healing."
        },
        "slot4Accessory": {
          "bestInSlot": "Lapis Pendant",
          "optimalAlternatives": [
            "Sapphire Pendant",
            "Raven Plume",
            "Vitality Talisman"
          ],
          "slotType": "Accessory",
          "notes": "PP +1 for Row Heal and Holy Refresh."
        }
      },
      {
        "unitId": "gloucester-doom-knight",
        "unitName": "Gloucester (Doom Knight)",
        "characterName": "Gloucester",
        "className": "Doom Knight",
        "roleTitle": "Vengeful Magic Dark Flame Striker",
        "growthTypes": [
          "Offensive",
          "All-Rounder"
        ],
        "slot1Weapon": {
          "bestInSlot": "Black-Iron Spear",
          "optimalAlternatives": [
            "Carnelian Spear",
            "Dragonbone Spear",
            "Meteorite Lance"
          ],
          "slotType": "Weapon",
          "notes": "Phys Atk +25, Mag Atk +15, Vengeance Multiplier."
        },
        "slot2ShieldOrOffhand": {
          "bestInSlot": "Zenoiran Shield",
          "optimalAlternatives": [
            "Azure Crest Shield",
            "Chivalric Shield",
            "Steel Shield"
          ],
          "slotType": "Shield",
          "notes": "Phys Def +3, Guard Rate +25%, Max HP +10."
        },
        "slot3Accessory": {
          "bestInSlot": "Carnelian Pendant",
          "optimalAlternatives": [
            "Ruby Pendant",
            "Power Belt",
            "Strength Brooch"
          ],
          "slotType": "Accessory",
          "notes": "AP +1 for Dark Flame row attacks."
        },
        "slot4Accessory": {
          "bestInSlot": "Power Belt",
          "optimalAlternatives": [
            "Warrior's Medallion",
            "Vitality Talisman",
            "Critical Talisman"
          ],
          "slotType": "Accessory",
          "notes": "Phys Atk +5, Mag Atk +5, Grants Toughness."
        }
      }
    ],
    "tacticsSequence": [
      {
        "step": 1,
        "unit": "Sanatio",
        "skill": "Sacred Barrier",
        "condition1": "[Start of Battle]",
        "condition2": "[Self PP >= 1]",
        "notes": "Grants 2-hit absolute damage nullification barrier to entire squad."
      },
      {
        "step": 2,
        "unit": "Ochlys",
        "skill": "Spiral Sword",
        "condition1": "[Target: Front Row (2+ Enemies)]",
        "condition2": "[Self AP >= 2]",
        "notes": "Aerial row strike dealing heavy physical damage."
      },
      {
        "step": 3,
        "unit": "Gloucester",
        "skill": "Dark Flame",
        "condition1": "[Target: Enemy Row]",
        "condition2": "[Self AP >= 2]",
        "notes": "Unleashes dark magical flame afflicting targets with Burn."
      },
      {
        "step": 4,
        "unit": "Tatiana",
        "skill": "Row Heal",
        "condition1": "[Ally HP <= 50%]",
        "condition2": "[Self AP >= 1]",
        "notes": "Restores critical squad health across entire row."
      },
      {
        "step": 5,
        "unit": "Umerus",
        "skill": "Aerial Guard",
        "condition1": "[Before Being Attacked]",
        "condition2": "[Self PP >= 1]",
        "notes": "Evades incoming ground attacks with aerial mobility."
      }
    ]
  }
];
