import { SquadBuild } from '@/types';

export const ZERO_OVERLAP_SQUADS: SquadBuild[] = [
  {
    "id": "zero-1-alain-holy-vanguard",
    "name": "1. Alain Holy Vanguard & Cavalry Blitz",
    "archetype": "Cavalry Burst",
    "tier": "SS",
    "pvpRating": "SS-Tier (Dominant Frontline Lead & 100% Crit Trample)",
    "pveRating": "Godly (Clears All Main Story & Zenoira Postgame)",
    "description": "Alain leads the Royal Vanguard. Chloe guarantees 100% Critical Hits via Keen Call, powering Alain's Spinning Edge row cleaves and Clive's 200% anti-infantry Line Charge sweeps. Melisandre punishes melee attackers with parries while Scarlett cleanses debuffs and sustains health.",
    "keyItems": [
      "Holy Unicorn Blade",
      "Ring of the Unicorn",
      "Chloe's Charm (Keen Earring)",
      "Heavensteed Reins"
    ],
    "frontRow": [
      "alain-high-lord",
      "melisandre-swordmaster"
    ],
    "backRow": [
      "scarlett-high-priestess",
      "clive-great-knight",
      "chloe-sergeant"
    ],
    "pros": [
      "100% Guaranteed Critical Hits on all active attacks via Chloe's Keen Call",
      "Alain Spinning Edge wipes entire front rows and earns +1 AP on kill",
      "Clive Line Charge deals 200% devastating bonus damage against infantry",
      "Melisandre True-Strike parries eliminate evasion scouts without taking damage",
      "Scarlett grants start-of-battle passive squad HP regen and instant debuff cleanse"
    ],
    "cons": [
      "Requires positioning fliers cautiously against anti-cavalry pikes"
    ],
    "counters": [
      "Heavy Anti-Cavalry Flying Squads",
      "Start-of-Battle Dispel"
    ],
    "strategyGuide": {
      "winCondition": "Deliver guaranteed critical Spinning Edge and Line Charge strikes to wipe enemy rows before they can act.",
      "overview": "Scarlett activates Sacred Light at battle start to grant squad regeneration. Melisandre and Alain hold the frontline with parries and high guard defense. When Alain executes Spinning Edge, Chloe triggers Keen Call for guaranteed 100% Critical True-Strike damage. Clive immediately follows with Line Charge across the backline.",
      "combatSequenceNotes": [
        "Turn 0: Scarlett triggers Sacred Light -> Squad gains HP regen and affliction immunity.",
        "Turn 1: Alain casts Spinning Edge -> Chloe activates Keen Call (100% Guaranteed Critical Hit) -> Front row deleted!",
        "Turn 1: Clive casts Line Charge -> 200% bonus critical damage through enemy infantry row.",
        "Turn 1: Melisandre triggers Parrying Slash on incoming physical attacks -> 0 damage taken + instant counter kill.",
        "Turn 1: Scarlett uses Innocent Light to strip any surviving enemy buffs."
      ]
    },
    "unitGearConfigs": [
      {
        "unitId": "alain-high-lord",
        "unitName": "Alain (High Lord)",
        "characterName": "Alain",
        "className": "High Lord",
        "roleTitle": "Royal Commander & Vanguard Lead",
        "weapon": "Holy Unicorn Blade",
        "shieldOrHelm": "Greatshield of the Maiden",
        "accessory1": "Ring of the Unicorn",
        "accessory2": "Carnelian Pendant",
        "slot1Weapon": {
          "bestInSlot": "Holy Unicorn Blade",
          "optimalAlternatives": [
            "Kingsblade Cornix",
            "Notos's Sword",
            "Meteorite Sword"
          ],
          "slotType": "Weapon",
          "notes": "Phys Atk +28, All Stats +5, AP +1"
        },
        "slot2ShieldOrOffhand": {
          "bestInSlot": "Greatshield of the Maiden",
          "optimalAlternatives": [
            "Azure Crest Shield",
            "Silver Shield",
            "Knight Shield"
          ],
          "slotType": "Shield",
          "notes": "Phys Def +16, Guard Rate +40%, Quick Cover"
        },
        "slot3Accessory": {
          "bestInSlot": "Ring of the Unicorn",
          "optimalAlternatives": [
            "Holy Unicorn Signet",
            "Hero's Medallion",
            "Lionheart"
          ],
          "slotType": "Accessory",
          "notes": "All Stats +5, AP +1, PP +1, Affliction Immunity"
        },
        "slot4Accessory": {
          "bestInSlot": "Carnelian Pendant",
          "optimalAlternatives": [
            "Ruby Pendant",
            "Warrior's Medallion",
            "Amethyst Pendant"
          ],
          "slotType": "Accessory",
          "notes": "AP +1 for extra Spinning Edge executions"
        },
        "statPriorities": [
          "Phys Atk (S+)",
          "Phys Def (S)",
          "Initiative (A)"
        ],
        "growthTypes": [
          "All-Rounder",
          "Offensive"
        ]
      },
      {
        "unitId": "melisandre-swordmaster",
        "unitName": "Melisandre (Swordmaster)",
        "characterName": "Melisandre",
        "className": "Swordmaster",
        "roleTitle": "Dual-Wield True-Strike Parry Duelist",
        "weapon": "Kingsblade Cornix",
        "shieldOrHelm": "Parrying Dagger (Second Blade)",
        "accessory1": "Parrying Amulet",
        "accessory2": "Carnelian Pendant",
        "slot1Weapon": {
          "bestInSlot": "Kingsblade Cornix",
          "optimalAlternatives": [
            "Notos's Sword",
            "Meteorite Sword",
            "Keen Broadsword"
          ],
          "slotType": "Weapon",
          "notes": "Phys Atk +28, All Stats +5"
        },
        "slot2ShieldOrOffhand": {
          "bestInSlot": "Parrying Dagger (Second Blade)",
          "optimalAlternatives": [
            "Pursuant's Blade",
            "Carnelian Blade",
            "Steel Blade"
          ],
          "slotType": "Offhand",
          "notes": "Dual-Wield Slot: Evasion +15, Parrying Slash"
        },
        "slot3Accessory": {
          "bestInSlot": "Parrying Amulet",
          "optimalAlternatives": [
            "Lucky Coin",
            "Thief's Mantle",
            "Skillful Amulet"
          ],
          "slotType": "Accessory",
          "notes": "Parrying Slash: Negates physical melee and counters"
        },
        "slot4Accessory": {
          "bestInSlot": "Carnelian Pendant",
          "optimalAlternatives": [
            "Ruby Pendant",
            "Critical Ring",
            "Skillful Amulet"
          ],
          "slotType": "Accessory",
          "notes": "AP +1 for Meteor Slash flurries"
        },
        "statPriorities": [
          "Crit Rate (S+)",
          "Initiative (S)",
          "Phys Atk (A)"
        ],
        "growthTypes": [
          "Keen",
          "Keen"
        ]
      },
      {
        "unitId": "scarlett-high-priestess",
        "unitName": "Scarlett (High Priestess)",
        "characterName": "Scarlett",
        "className": "High Priestess",
        "roleTitle": "Sacred Healer, Buffer & Dispeller",
        "weapon": "Hallowed Blade (Staff)",
        "shieldOrHelm": "Scarlett's Ribbon",
        "accessory1": "Ring of the Maiden",
        "accessory2": "Lapis Pendant",
        "slot1Weapon": {
          "bestInSlot": "Hallowed Blade (Staff)",
          "optimalAlternatives": [
            "Sacral Rod",
            "Meteorite Rod",
            "Kingstaff Albiore"
          ],
          "slotType": "Weapon",
          "notes": "Mag Atk +24, HP Regen +10%"
        },
        "slot2ShieldOrOffhand": {
          "bestInSlot": "Scarlett's Ribbon",
          "optimalAlternatives": [
            "Archbishop's Mitre",
            "Monk's Mitre",
            "Priestess Ribbon"
          ],
          "slotType": "Helm",
          "notes": "Healing +20, Mag Def +8, PP +1"
        },
        "slot3Accessory": {
          "bestInSlot": "Ring of the Maiden",
          "optimalAlternatives": [
            "Holy Broach",
            "Celestial Talisman",
            "Lifeblood Talisman"
          ],
          "slotType": "Accessory",
          "notes": "Mag Def +10, AP +1, PP +1, Maiden's Protection"
        },
        "slot4Accessory": {
          "bestInSlot": "Lapis Pendant",
          "optimalAlternatives": [
            "Sapphire Pendant",
            "First Aid Kit",
            "Dove Plume"
          ],
          "slotType": "Accessory",
          "notes": "PP +1 for Passive Supply and Holy Light"
        },
        "statPriorities": [
          "Healing (S+)",
          "Mag Def (S)",
          "Initiative (A)"
        ],
        "growthTypes": [
          "Guardian",
          "Defender"
        ]
      },
      {
        "unitId": "clive-great-knight",
        "unitName": "Clive (Great Knight)",
        "characterName": "Clive",
        "className": "Great Knight",
        "roleTitle": "Anti-Infantry Line Charge Sweeper",
        "weapon": "Carnelian Spear",
        "shieldOrHelm": "Knight Shield",
        "accessory1": "Heavensteed Reins",
        "accessory2": "Carnelian Pendant",
        "slot1Weapon": {
          "bestInSlot": "Carnelian Spear",
          "optimalAlternatives": [
            "Meteorite Lance",
            "Kingslance Elhal",
            "Heavy Iron Lance"
          ],
          "slotType": "Weapon",
          "notes": "Phys Atk +25, AP +1"
        },
        "slot2ShieldOrOffhand": {
          "bestInSlot": "Knight Shield",
          "optimalAlternatives": [
            "Silver Shield",
            "Azure Crest Shield",
            "Cloth Gauntlets"
          ],
          "slotType": "Shield",
          "notes": "Phys Def +10, Guard Rate +25%"
        },
        "slot3Accessory": {
          "bestInSlot": "Heavensteed Reins",
          "optimalAlternatives": [
            "Courser's Reins",
            "Battleline Standard",
            "Elite Standard"
          ],
          "slotType": "Accessory",
          "notes": "Cavalry Attack +15%, Guard Rate +10%"
        },
        "slot4Accessory": {
          "bestInSlot": "Carnelian Pendant",
          "optimalAlternatives": [
            "Ruby Pendant",
            "Warrior's Medallion",
            "Power Belt"
          ],
          "slotType": "Accessory",
          "notes": "AP +1 for Line Charge chaining"
        },
        "statPriorities": [
          "Phys Atk (S+)",
          "Initiative (A)",
          "Guard Rate (B)"
        ],
        "growthTypes": [
          "Offensive",
          "Offensive"
        ]
      },
      {
        "unitId": "chloe-sergeant",
        "unitName": "Chloe (Sergeant)",
        "characterName": "Chloe",
        "className": "Sergeant",
        "roleTitle": "100% Critical Keen Call Enabler",
        "weapon": "Meteorite Lance",
        "shieldOrHelm": "Silver Shield",
        "accessory1": "Chloe's Charm (Keen Earring)",
        "accessory2": "Lapis Pendant",
        "slot1Weapon": {
          "bestInSlot": "Meteorite Lance",
          "optimalAlternatives": [
            "Runic Spear",
            "Iron Spear",
            "Carnelian Spear"
          ],
          "slotType": "Weapon",
          "notes": "Phys Atk +24, Max HP +20"
        },
        "slot2ShieldOrOffhand": {
          "bestInSlot": "Silver Shield",
          "optimalAlternatives": [
            "Knight Shield",
            "Cloth Gauntlets",
            "Bronze Shield"
          ],
          "slotType": "Shield",
          "notes": "Phys Def +11, Guard Rate +25%"
        },
        "slot3Accessory": {
          "bestInSlot": "Chloe's Charm (Keen Earring)",
          "optimalAlternatives": [
            "Lapis Pendant",
            "Retaliation Earrings",
            "Skillful Amulet"
          ],
          "slotType": "Accessory",
          "notes": "Keen Call: Grants 100% Guaranteed Crit to Alain / Clive"
        },
        "slot4Accessory": {
          "bestInSlot": "Lapis Pendant",
          "optimalAlternatives": [
            "Sapphire Pendant",
            "Dove Plume",
            "First Aid Kit"
          ],
          "slotType": "Accessory",
          "notes": "PP +1 to sustain Keen Call activations"
        },
        "statPriorities": [
          "PP (+4 Required)",
          "Initiative (A)",
          "Phys Atk (B)"
        ],
        "growthTypes": [
          "Speedster",
          "Keen"
        ]
      }
    ],
    "tacticsSequence": [
      {
        "step": 1,
        "unit": "Scarlett",
        "skill": "Sacred Light",
        "condition1": "[Start of Battle]",
        "condition2": "[Full Squad]",
        "notes": "Squad HP regen & affliction immunity"
      },
      {
        "step": 2,
        "unit": "Chloe",
        "skill": "Keen Call",
        "condition1": "[Ally Active Attack]",
        "condition2": "[Target: Alain]",
        "notes": "Grants 100% Guaranteed Critical Hit"
      },
      {
        "step": 3,
        "unit": "Alain",
        "skill": "Spinning Edge",
        "condition1": "[Front Row Enemies >= 2]",
        "condition2": "[Self AP >= 2]",
        "notes": "100% Crit Row Wipe strike"
      },
      {
        "step": 4,
        "unit": "Clive",
        "skill": "Line Charge",
        "condition1": "[Target Column/Row]",
        "condition2": "[Self AP >= 2]",
        "notes": "200% bonus vs infantry"
      },
      {
        "step": 5,
        "unit": "Melisandre",
        "skill": "Parrying Slash",
        "condition1": "[Attacked by Physical]",
        "condition2": "[Self PP >= 1]",
        "notes": "Negates damage & counters"
      }
    ],
    "substitutes": {
      "earlyGame": [
        "Lex Vanguard",
        "Josef Paladin"
      ],
      "endgameAlternatives": [
        "Monica Sainted Knight replacing Chloe"
      ]
    }
  },
  {
    "id": "zero-2-trinity-rain-apocalypse",
    "name": "2. Trinity Rain Instant Apocalypse",
    "archetype": "Magic Nuke",
    "tier": "SS",
    "pvpRating": "SS-Tier (Turn-1 Arena Board Wipe)",
    "pveRating": "Godly (Wipes 99% Zenoira / Expert Enemy Formations)",
    "description": "The definitive Turn-1 Magic Nuke. Sorcerer Auch channels Trinity Rain on Turn 1 with Millennium Scepter, instantly accelerated by Bishop Sharon using Cat-Ear Hood (Quick Impetus), boosted by Sorceress Yahna (+50% Mag Atk via Familiar's Choker), and backed by Selvie's Turn-0 Sandstorm Blindness and Hodrick's impenetrable wall.",
    "keyItems": [
      "Millennium Scepter",
      "Cat-Ear Hood",
      "Familiar's Choker",
      "Sniper's Amber Lens"
    ],
    "frontRow": [
      "hodrick-legionnaire",
      "selvie-druid"
    ],
    "backRow": [
      "auch-sorcerer",
      "yahna-sorceress",
      "sharon-bishop"
    ],
    "pros": [
      "Turn 1 instant battlefield wipe (2500+ magic damage across all 5 enemies)",
      "100% Critical + True-Strike (bypasses Evasion and Guard completely)",
      "Selvie Start-of-Battle Sandstorm blinds enemy strikers on Turn 0",
      "Hodrick absorbs any surviving stray physical hits with 100% Guard Rate"
    ],
    "cons": [
      "Requires +4 PP investment on Bishop Sharon for Quick Impetus trigger"
    ],
    "counters": [
      "Featherstaff Magic Reflect",
      "Start-of-Battle Silence"
    ],
    "strategyGuide": {
      "winCondition": "Unleash a 3-hit battlefield-wide magic nuke of 2500+ damage on Turn 1 before enemies take a single action.",
      "overview": "Selvie opens battle with Sandstorm to blind enemy strikers and Defensive Curse to strip 50% magic defense. Sorcerer Auch initiates Trinity Rain (4 AP charge). Bishop Sharon triggers Cat-Ear Hood Quick Impetus for instant turn execution. Yahna grants +50% Mag Atk via Familiar's Choker, and Auch activates Eagle Eye for 100% Critical True-Strike damage!",
      "combatSequenceNotes": [
        "Turn 0: Selvie casts Sandstorm / Defensive Curse -> Blinds enemies and shreds 50% Magic Defense.",
        "Turn 1: Auch initiates Trinity Rain (4 AP charge).",
        "Turn 1: Sharon triggers Quick Impetus (Cat-Ear Hood) -> Grants Auch +1 AP and immediate instant turn execution.",
        "Turn 1: Yahna activates Sorcerous Connection (Familiar's Choker) -> Grants Auch +50% Magic Attack.",
        "Turn 1: Auch activates Eagle Eye (Sniper Lens) -> Trinity Rain strikes all 5 enemies for 3 waves of un-dodgeable critical magic devastation!"
      ]
    },
    "unitGearConfigs": [
      {
        "unitId": "auch-sorcerer",
        "unitName": "Auch (Sorcerer)",
        "characterName": "Auch",
        "className": "Sorcerer",
        "roleTitle": "Primary Spell Nuke Channeler",
        "weapon": "Millennium Scepter",
        "shieldOrHelm": "Sage's Hood",
        "accessory1": "Sniper's Amber Lens",
        "accessory2": "Carnelian Pendant",
        "slot1Weapon": {
          "bestInSlot": "Millennium Scepter",
          "optimalAlternatives": [
            "Euros's Staff",
            "Carnelian Staff",
            "Kingstaff Albiore"
          ],
          "slotType": "Weapon",
          "notes": "Trinity Rain 4 AP, Mag Atk +25, Mag Def +8"
        },
        "slot2ShieldOrOffhand": {
          "bestInSlot": "Sage's Hood",
          "optimalAlternatives": [
            "Silk Hood",
            "Mage's Gloves",
            "Ancient Crown"
          ],
          "slotType": "Helm",
          "notes": "Mag Atk +5, Mag Def +5, Initiative +4"
        },
        "slot3Accessory": {
          "bestInSlot": "Sniper's Amber Lens",
          "optimalAlternatives": [
            "Sniper's Lens",
            "Sorcerer's Medallion",
            "Magia Heart"
          ],
          "slotType": "Accessory",
          "notes": "Eagle Eye: Guaranteed 100% Crit + True Strike"
        },
        "slot4Accessory": {
          "bestInSlot": "Carnelian Pendant",
          "optimalAlternatives": [
            "Ruby Pendant",
            "Amethyst Pendant",
            "Raven Plume"
          ],
          "slotType": "Accessory",
          "notes": "AP +1 required to cast Trinity Rain (4 AP)"
        },
        "statPriorities": [
          "Mag Atk (S+)",
          "Initiative (S)",
          "Crit Rate (A)"
        ],
        "growthTypes": [
          "Offensive",
          "Keen"
        ]
      },
      {
        "unitId": "sharon-bishop",
        "unitName": "Sharon (Bishop)",
        "characterName": "Sharon",
        "className": "Bishop",
        "roleTitle": "Instant Turn Acceleration Enabler",
        "weapon": "Euros's Staff",
        "shieldOrHelm": "Cat-Ear Hood",
        "accessory1": "Lapis Pendant",
        "accessory2": "Sapphire Pendant",
        "slot1Weapon": {
          "bestInSlot": "Euros's Staff",
          "optimalAlternatives": [
            "Meteorite Rod",
            "Sacral Rod",
            "Hallow Cane"
          ],
          "slotType": "Weapon",
          "notes": "Mag Atk +25, Initiative +5"
        },
        "slot2ShieldOrOffhand": {
          "bestInSlot": "Cat-Ear Hood",
          "optimalAlternatives": [
            "White Cat-Ear Hood",
            "Archbishop's Mitre",
            "Silk Hood"
          ],
          "slotType": "Helm",
          "notes": "Quick Impetus: +100% Turn Bar to charging ally, PP +1"
        },
        "slot3Accessory": {
          "bestInSlot": "Lapis Pendant",
          "optimalAlternatives": [
            "Sapphire Pendant",
            "Amethyst Pendant",
            "Onyx Pendant"
          ],
          "slotType": "Accessory",
          "notes": "PP +1 required for Quick Impetus (3 PP)"
        },
        "slot4Accessory": {
          "bestInSlot": "Sapphire Pendant",
          "optimalAlternatives": [
            "Lapis Pendant",
            "Onyx Pendant",
            "Dove Plume"
          ],
          "slotType": "Accessory",
          "notes": "PP +2 ensuring total PP >= 4"
        },
        "statPriorities": [
          "PP (+4 Required)",
          "Initiative (A)",
          "Healing (S)"
        ],
        "growthTypes": [
          "Guardian",
          "Speedster"
        ]
      },
      {
        "unitId": "yahna-sorceress",
        "unitName": "Yahna (Sorceress)",
        "characterName": "Yahna",
        "className": "Sorceress",
        "roleTitle": "Magic Buffer & Focus Booster",
        "weapon": "Carnelian Staff",
        "shieldOrHelm": "Silk Hood",
        "accessory1": "Familiar's Choker",
        "accessory2": "Raven Plume",
        "slot1Weapon": {
          "bestInSlot": "Carnelian Staff",
          "optimalAlternatives": [
            "Meteorite Rod",
            "Runic Rod",
            "Chlorotic"
          ],
          "slotType": "Weapon",
          "notes": "Mag Atk +25, AP +1"
        },
        "slot2ShieldOrOffhand": {
          "bestInSlot": "Silk Hood",
          "optimalAlternatives": [
            "Sage's Hood",
            "Dusk Robes",
            "Dawn Robes"
          ],
          "slotType": "Helm",
          "notes": "Mag Def +4, Initiative +3"
        },
        "slot3Accessory": {
          "bestInSlot": "Familiar's Choker",
          "optimalAlternatives": [
            "Magia Heart",
            "Magia Soul",
            "Sorcerer's Medallion"
          ],
          "slotType": "Accessory",
          "notes": "Sorcerous Connection: +50% Magic Attack to Auch"
        },
        "slot4Accessory": {
          "bestInSlot": "Raven Plume",
          "optimalAlternatives": [
            "Dove Plume",
            "Carnelian Pendant",
            "Lapis Pendant"
          ],
          "slotType": "Accessory",
          "notes": "Initiative +15 to buff Auch before cast"
        },
        "statPriorities": [
          "Initiative (S+)",
          "Mag Atk (A)",
          "PP +2"
        ],
        "growthTypes": [
          "Speedster",
          "Speedster"
        ]
      },
      {
        "unitId": "hodrick-legionnaire",
        "unitName": "Hodrick (Legionnaire)",
        "characterName": "Hodrick",
        "className": "Legionnaire",
        "roleTitle": "Physical Wall & Fortress Guard",
        "weapon": "Meteorite Lance",
        "shieldOrHelm": "Greatshield of Fortitude",
        "accessory1": "Defensive Ring",
        "accessory2": "Lapis Pendant",
        "slot1Weapon": {
          "bestInSlot": "Meteorite Lance",
          "optimalAlternatives": [
            "Heavy Iron Lance",
            "Bronze Spear",
            "Carnelian Spear"
          ],
          "slotType": "Weapon",
          "notes": "Phys Atk +24, Max HP +20"
        },
        "slot2ShieldOrOffhand": {
          "bestInSlot": "Greatshield of Fortitude",
          "optimalAlternatives": [
            "Heavy Guard Shield",
            "Tower Shield",
            "Azure Crest Shield"
          ],
          "slotType": "Shield",
          "notes": "Phys Def +18, Guard Rate +45%, Max HP +20"
        },
        "slot3Accessory": {
          "bestInSlot": "Defensive Ring",
          "optimalAlternatives": [
            "Guardian Gloves",
            "Vitality Talisman",
            "Defender's Ring"
          ],
          "slotType": "Accessory",
          "notes": "Phys Def +5, Guard Rate +10%"
        },
        "slot4Accessory": {
          "bestInSlot": "Lapis Pendant",
          "optimalAlternatives": [
            "Sapphire Pendant",
            "Heavy Guard Ring",
            "Vitality Talisman"
          ],
          "slotType": "Accessory",
          "notes": "PP +1 for Heavy Cover activations"
        },
        "statPriorities": [
          "Phys Def (S+)",
          "Guard Rate (100%)",
          "Max HP (S)"
        ],
        "growthTypes": [
          "Guardian",
          "Guardian"
        ]
      },
      {
        "unitId": "selvie-druid",
        "unitName": "Selvie (Druid)",
        "characterName": "Selvie",
        "className": "Druid",
        "roleTitle": "Start-of-Battle Curse & Blindness Controller",
        "weapon": "Sandstorm Staff",
        "shieldOrHelm": "Druid's Robes",
        "accessory1": "Raven Plume",
        "accessory2": "Lapis Pendant",
        "slot1Weapon": {
          "bestInSlot": "Sandstorm Staff",
          "optimalAlternatives": [
            "Pestilent Staff",
            "Poison Hex Staff",
            "Euros's Staff"
          ],
          "slotType": "Weapon",
          "notes": "Sandstorm: Start of Battle Blindness"
        },
        "slot2ShieldOrOffhand": {
          "bestInSlot": "Druid's Robes",
          "optimalAlternatives": [
            "Dusk Robes",
            "Silk Hood",
            "Sage's Hood"
          ],
          "slotType": "Helm",
          "notes": "Mag Def +10, Initiative +6, Debuff Resistance +50%"
        },
        "slot3Accessory": {
          "bestInSlot": "Raven Plume",
          "optimalAlternatives": [
            "Angel Plume",
            "Dove Plume",
            "Thief's Mantle"
          ],
          "slotType": "Accessory",
          "notes": "Initiative +15 to ensure Turn-0 curse application"
        },
        "slot4Accessory": {
          "bestInSlot": "Lapis Pendant",
          "optimalAlternatives": [
            "Sapphire Pendant",
            "Amethyst Pendant",
            "First Aid Kit"
          ],
          "slotType": "Accessory",
          "notes": "PP +1 for Defensive Curse and Quick Guard"
        },
        "statPriorities": [
          "Initiative (S+)",
          "Debuff Potency (S)",
          "Evasion (A)"
        ],
        "growthTypes": [
          "Speedster",
          "Guardian"
        ]
      }
    ],
    "tacticsSequence": [
      {
        "step": 1,
        "unit": "Selvie",
        "skill": "Sandstorm",
        "condition1": "[Start of Battle]",
        "condition2": "[All Enemies]",
        "notes": "Blinds enemy attackers on Turn 0"
      },
      {
        "step": 2,
        "unit": "Selvie",
        "skill": "Defensive Curse",
        "condition1": "[Front Row Enemies]",
        "condition2": "[Self AP >= 1]",
        "notes": "Cuts enemy M.Def by 50%"
      },
      {
        "step": 3,
        "unit": "Auch",
        "skill": "Trinity Rain",
        "condition1": "[Target: All Enemies]",
        "condition2": "[Self AP >= 4]",
        "notes": "Channels 3-wave battlefield magic spell"
      },
      {
        "step": 4,
        "unit": "Sharon",
        "skill": "Quick Impetus",
        "condition1": "[Ally Using Charge Skill]",
        "condition2": "[Target: Auch]",
        "notes": "Cat-Ear Hood instant turn execution"
      },
      {
        "step": 5,
        "unit": "Yahna",
        "skill": "Sorcerous Connection",
        "condition1": "[Ally Using Active Magic]",
        "condition2": "[Target: Auch]",
        "notes": "+50% Magic Attack boost"
      },
      {
        "step": 6,
        "unit": "Auch",
        "skill": "Eagle Eye",
        "condition1": "[Before Trinity Rain Hits]",
        "condition2": "[Self PP >= 1]",
        "notes": "100% Critical True-Strike wipe"
      }
    ],
    "substitutes": {
      "earlyGame": [
        "Wizard Auch",
        "Cleric Sharon",
        "Hoplite Hodrick"
      ],
      "endgameAlternatives": [
        "Rosalinde replacing Yahna"
      ]
    }
  },
  {
    "id": "zero-3-dragoon-aerial-tempest",
    "name": "3. Dragoon Glacial Tempest (Aerial Bombardment)",
    "archetype": "Instant Board Wipe",
    "tier": "SS",
    "pvpRating": "SS-Tier (Top-Rank Arena Aerial Wipe)",
    "pveRating": "Godly (Wipes all Drakenhold, Bastorias & Albion maps)",
    "description": "Hilda delivers an earth-shattering Dragoon Dive aerial bombardment (4 AP). Gilbert provides Turn-0 Rapid Order (+15 Squad Initiative) and Offensive Order (+20% Atk), Primm accelerates the dive instantly with White Cat-Ear Hood, Miriam protects against magic with Magic Barrier, and Fran clears airborne and cavalry units with High Gale.",
    "keyItems": [
      "Dragoon's War Spear",
      "White Cat-Ear Hood",
      "Angel Plume",
      "Wingline Standard"
    ],
    "frontRow": [
      "hilda-wyvern-master",
      "fran-gryphon-master"
    ],
    "backRow": [
      "miriam-sainted-knight",
      "primm-bishop",
      "gilbert-prince"
    ],
    "pros": [
      "Turn-1 Dragoon Dive aerial bomb lands on all 5 enemies before they act",
      "+20 Squad Initiative dominance via Gilbert Rapid Order + Angel Plume",
      "Fran High Gale sweeps enemy cavalry with 200% bonus damage",
      "Miriam Magic Barrier completely nullifies enemy magic attacks"
    ],
    "cons": [
      "Vulnerable to enemy true-strike archers if not properly shielded"
    ],
    "counters": [
      "Sniper Aerial Snipe True-Strike",
      "Anti-Flying Balistas"
    ],
    "strategyGuide": {
      "winCondition": "Deliver an instant Turn-1 Dragoon Dive aerial strike boosted by +15 Initiative, +20% Atk, and guaranteed True-Strike criticals.",
      "overview": "Gilbert opens combat with Rapid Order (+15 Initiative) and Angel Plume (+20 Initiative). Hilda initiates Dragoon Dive. Primm uses White Cat-Ear Hood (Quick Impetus) to immediately fire the dive. Hilda triggers Eagle Eye for 100% Critical True-Strike damage, obliterating all ground units.",
      "combatSequenceNotes": [
        "Turn 0: Gilbert triggers Rapid Order & Angel Plume -> Squad gains +35 Initiative.",
        "Turn 1: Hilda channels Dragoon Dive (4 AP aerial strike).",
        "Turn 1: Primm triggers Quick Impetus (White Cat-Ear Hood) -> Hilda takes instant turn.",
        "Turn 1: Hilda triggers Eagle Eye -> Dragoon Dive crashes down for 220 physical potency across all 5 enemies!",
        "Turn 1: Fran cleanses remaining fliers with High Gale."
      ]
    },
    "unitGearConfigs": [
      {
        "unitId": "hilda-wyvern-master",
        "unitName": "Hilda (Wyvern Master)",
        "characterName": "Hilda",
        "className": "Wyvern Master",
        "roleTitle": "Aerial Nuke Leader & Dragoon Diver",
        "weapon": "Dragoon's War Spear",
        "shieldOrHelm": "Wyvern Reins",
        "accessory1": "Sniper's Amber Lens",
        "accessory2": "Carnelian Pendant",
        "slot1Weapon": {
          "bestInSlot": "Dragoon's War Spear",
          "optimalAlternatives": [
            "Kingslance Elhal",
            "Meteorite Lance",
            "Runic Spear"
          ],
          "slotType": "Weapon",
          "notes": "Dragoon Dive 4 AP, Phys Atk +24, Initiative +5"
        },
        "slot2ShieldOrOffhand": {
          "bestInSlot": "Wyvern Reins",
          "optimalAlternatives": [
            "Heavenwyvern Reins",
            "Wyvern Claw",
            "Silver Shield"
          ],
          "slotType": "Shield",
          "notes": "Flying Atk +10%, Initiative +5"
        },
        "slot3Accessory": {
          "bestInSlot": "Sniper's Amber Lens",
          "optimalAlternatives": [
            "Sniper's Lens",
            "Hero's Medallion",
            "Warrior's Medallion"
          ],
          "slotType": "Accessory",
          "notes": "Eagle Eye: Guaranteed 100% Crit + True Strike"
        },
        "slot4Accessory": {
          "bestInSlot": "Carnelian Pendant",
          "optimalAlternatives": [
            "Ruby Pendant",
            "Warrior's Medallion",
            "Amethyst Pendant"
          ],
          "slotType": "Accessory",
          "notes": "AP +1 for 4 AP Dragoon Dive execution"
        },
        "statPriorities": [
          "Phys Atk (S+)",
          "Initiative (A)",
          "Crit Rate (A)"
        ],
        "growthTypes": [
          "Offensive",
          "Keen"
        ]
      },
      {
        "unitId": "fran-gryphon-master",
        "unitName": "Fran (Gryphon Master)",
        "characterName": "Fran",
        "className": "Gryphon Master",
        "roleTitle": "Anti-Cavalry Sky Sweeper",
        "weapon": "Boreas's Axe",
        "shieldOrHelm": "Heavenwyvern Reins",
        "accessory1": "Wingline Standard",
        "accessory2": "Carnelian Pendant",
        "slot1Weapon": {
          "bestInSlot": "Boreas's Axe",
          "optimalAlternatives": [
            "Meteorite Axe",
            "Carnat Axe",
            "Dragonbone Axe"
          ],
          "slotType": "Weapon",
          "notes": "Phys Atk +26, Initiative +5, Crit +10%"
        },
        "slot2ShieldOrOffhand": {
          "bestInSlot": "Heavenwyvern Reins",
          "optimalAlternatives": [
            "Gryphon Shield",
            "Wyvern Reins",
            "Silver Shield"
          ],
          "slotType": "Shield",
          "notes": "Flying Atk +15%, Initiative +10"
        },
        "slot3Accessory": {
          "bestInSlot": "Wingline Standard",
          "optimalAlternatives": [
            "Battleline Standard",
            "Elite Standard",
            "Gryphon Brooch"
          ],
          "slotType": "Accessory",
          "notes": "Squad Flying Atk +15%, Initiative +5"
        },
        "slot4Accessory": {
          "bestInSlot": "Carnelian Pendant",
          "optimalAlternatives": [
            "Ruby Pendant",
            "Raven Plume",
            "Warrior's Medallion"
          ],
          "slotType": "Accessory",
          "notes": "AP +1 for High Gale row sweeps"
        },
        "statPriorities": [
          "Phys Atk (S)",
          "Initiative (S)",
          "Evasion (A)"
        ],
        "growthTypes": [
          "Offensive",
          "Speedster"
        ]
      },
      {
        "unitId": "miriam-sainted-knight",
        "unitName": "Miriam (Sainted Knight)",
        "characterName": "Miriam",
        "className": "Sainted Knight",
        "roleTitle": "Magic Defense Wall & Row Healer",
        "weapon": "Runic Sword",
        "shieldOrHelm": "Radiant Shield",
        "accessory1": "Lapis Pendant",
        "accessory2": "First Aid Kit",
        "slot1Weapon": {
          "bestInSlot": "Runic Sword",
          "optimalAlternatives": [
            "Phantom Knight's Sword",
            "Notos's Sword",
            "Hallowed Blade"
          ],
          "slotType": "Weapon",
          "notes": "Phys Atk +18, Mag Atk +24, Magick Attack"
        },
        "slot2ShieldOrOffhand": {
          "bestInSlot": "Radiant Shield",
          "optimalAlternatives": [
            "Silver Shield",
            "Azure Crest Shield",
            "Knight Shield"
          ],
          "slotType": "Shield",
          "notes": "Phys Def +12, Mag Def +12, Magic Barrier"
        },
        "slot3Accessory": {
          "bestInSlot": "Lapis Pendant",
          "optimalAlternatives": [
            "Sapphire Pendant",
            "White Knight Plume",
            "Amethyst Pendant"
          ],
          "slotType": "Accessory",
          "notes": "PP +1 for Magic Barrier triggers"
        },
        "slot4Accessory": {
          "bestInSlot": "First Aid Kit",
          "optimalAlternatives": [
            "Large Aid Kit",
            "Lapis Pendant",
            "Vitality Talisman"
          ],
          "slotType": "Accessory",
          "notes": "End of battle squad heal sustain"
        },
        "statPriorities": [
          "Mag Def (S+)",
          "Healing (S)",
          "Phys Def (B)"
        ],
        "growthTypes": [
          "Defender",
          "All-Rounder"
        ]
      },
      {
        "unitId": "primm-bishop",
        "unitName": "Primm (Bishop)",
        "characterName": "Primm",
        "className": "Bishop",
        "roleTitle": "Dragoon Turn Accelerator",
        "weapon": "Sacral Rod",
        "shieldOrHelm": "White Cat-Ear Hood",
        "accessory1": "Lapis Pendant",
        "accessory2": "Sapphire Pendant",
        "slot1Weapon": {
          "bestInSlot": "Sacral Rod",
          "optimalAlternatives": [
            "Meteorite Rod",
            "Hallowed Mace",
            "Euros's Staff"
          ],
          "slotType": "Weapon",
          "notes": "Mag Atk +25, HP +15"
        },
        "slot2ShieldOrOffhand": {
          "bestInSlot": "White Cat-Ear Hood",
          "optimalAlternatives": [
            "Cat-Ear Hood",
            "Archbishop's Mitre",
            "Silk Hood"
          ],
          "slotType": "Helm",
          "notes": "Quick Impetus: +100% Turn Bar to Hilda, PP +1"
        },
        "slot3Accessory": {
          "bestInSlot": "Lapis Pendant",
          "optimalAlternatives": [
            "Sapphire Pendant",
            "Amethyst Pendant",
            "Dove Plume"
          ],
          "slotType": "Accessory",
          "notes": "PP +1 required for Quick Impetus (3 PP)"
        },
        "slot4Accessory": {
          "bestInSlot": "Sapphire Pendant",
          "optimalAlternatives": [
            "Lapis Pendant",
            "Onyx Pendant",
            "First Aid Kit"
          ],
          "slotType": "Accessory",
          "notes": "PP +2 ensuring total PP >= 4"
        },
        "statPriorities": [
          "PP (+4 Required)",
          "Initiative (B)",
          "Healing (A)"
        ],
        "growthTypes": [
          "Guardian",
          "Speedster"
        ]
      },
      {
        "unitId": "gilbert-prince",
        "unitName": "Gilbert (Prince)",
        "characterName": "Gilbert",
        "className": "Prince",
        "roleTitle": "Squad Commander & Order Buffer",
        "weapon": "Notos's Sword",
        "shieldOrHelm": "Royal Scarf",
        "accessory1": "Angel Plume",
        "accessory2": "Lapis Pendant",
        "slot1Weapon": {
          "bestInSlot": "Notos's Sword",
          "optimalAlternatives": [
            "Royal Saber",
            "Meteorite Sword",
            "Hallowed Blade"
          ],
          "slotType": "Weapon",
          "notes": "Phys Atk +25, Initiative +5"
        },
        "slot2ShieldOrOffhand": {
          "bestInSlot": "Royal Scarf",
          "optimalAlternatives": [
            "Crown Shield",
            "Silver Shield",
            "Leather Hood"
          ],
          "slotType": "Helm",
          "notes": "Initiative +5, Evasion +10"
        },
        "slot3Accessory": {
          "bestInSlot": "Angel Plume",
          "optimalAlternatives": [
            "Raven Plume",
            "Dove Plume",
            "Wingline Standard"
          ],
          "slotType": "Accessory",
          "notes": "Tailwind Array: Start of Battle +20 Squad Initiative"
        },
        "slot4Accessory": {
          "bestInSlot": "Lapis Pendant",
          "optimalAlternatives": [
            "Carnelian Pendant",
            "Commander's Crest",
            "Sapphire Pendant"
          ],
          "slotType": "Accessory",
          "notes": "PP +1 for Rapid Order & Offensive Order"
        },
        "statPriorities": [
          "Initiative (S+)",
          "Phys Def (B)",
          "PP +2"
        ],
        "growthTypes": [
          "Speedster",
          "Guardian"
        ]
      }
    ],
    "tacticsSequence": [
      {
        "step": 1,
        "unit": "Gilbert",
        "skill": "Rapid Order",
        "condition1": "[Start of Battle]",
        "condition2": "[Full Squad]",
        "notes": "+15 Squad Initiative buff"
      },
      {
        "step": 2,
        "unit": "Gilbert",
        "skill": "Offensive Order",
        "condition1": "[Start of Battle]",
        "condition2": "[Full Squad]",
        "notes": "+20% Phys/Mag Attack buff"
      },
      {
        "step": 3,
        "unit": "Hilda",
        "skill": "Dragoon Dive",
        "condition1": "[Target: All Enemies]",
        "condition2": "[Self AP >= 4]",
        "notes": "Aerial 4 AP charge bomb"
      },
      {
        "step": 4,
        "unit": "Primm",
        "skill": "Quick Impetus",
        "condition1": "[Ally Using Charge Skill]",
        "condition2": "[Target: Hilda]",
        "notes": "White Cat-Ear instant dive"
      },
      {
        "step": 5,
        "unit": "Hilda",
        "skill": "Eagle Eye",
        "condition1": "[Before Dragoon Dive Hits]",
        "condition2": "[Self PP >= 1]",
        "notes": "100% Critical True Strike wipe"
      },
      {
        "step": 6,
        "unit": "Fran",
        "skill": "High Gale",
        "condition1": "[Back Row / Cavalry]",
        "condition2": "[Self AP >= 2]",
        "notes": "Cleans up survivors"
      }
    ],
    "substitutes": {
      "earlyGame": [
        "Celeste Gryphon",
        "Sharon Cleric"
      ],
      "endgameAlternatives": [
        "Celeste replacing Fran"
      ]
    }
  },
  {
    "id": "zero-4-berengaria-affliction-lockdown",
    "name": "4. Berengaria Affliction & Death Spiral",
    "archetype": "Affliction Control",
    "tier": "SS",
    "pvpRating": "SS-Tier (Oppressive Stun & Affliction Lockdown)",
    "pveRating": "Godly (Infinite Sustain & Armor Annihilation)",
    "description": "Berengaria exploits afflicted targets. Travis opens battle with row-wide Blindness via Shadowbite, triggering Berengaria's Eye of the Crimson Bear (-20% Atk/Def to all enemies) and Sanguine Pursuit to perpetually freeze enemy turns. Nina shatters heavy armor with Enraged Strike, Bruno cleaves rows with Wide Smash, and Liza provides medical cover.",
    "keyItems": [
      "Carnelian Greataxe",
      "Poisoner's Dagger",
      "Executioner's Eye",
      "Phantom Ring"
    ],
    "frontRow": [
      "berengaria-renegade",
      "travis-rogue"
    ],
    "backRow": [
      "nina-breaker",
      "liza-shieldshooter",
      "bruno-berserker"
    ],
    "pros": [
      "Eye of the Crimson Bear strips -20% Atk/Def and -10 Initiative from all enemies at Turn 0",
      "Travis Shadowbite blinds entire enemy rows with high evasion dodge",
      "Berengaria Sanguine Pursuit refunds PP/AP on hitting afflicted targets",
      "Nina Enraged Strike ignores 100% of enemy physical defense",
      "Bruno Wide Smash cleaves entire enemy rows with high HP sustain"
    ],
    "cons": [
      "Requires affliction application against affliction-immune enemies"
    ],
    "counters": [
      "Affliction Immunity Rings (Ring of the Unicorn/Maiden)"
    ],
    "strategyGuide": {
      "winCondition": "Blind and debuff enemy rows on Turn 1 to trigger Berengaria's infinite pursuit chains and Nina's armor execution.",
      "overview": "Berengaria activates Eye of the Crimson Bear at start of combat. Travis casts Shadowbite to blind the enemy front row. Berengaria triggers Sanguine Pursuit on all afflicted targets, refunding AP/PP. Nina executes high-defense tanks with Enraged Strike, Bruno cleaves the backline with Wide Smash, and Liza cures debuffs.",
      "combatSequenceNotes": [
        "Turn 0: Berengaria triggers Eye of the Crimson Bear -> -20% Atk/Def and -10 Init to all enemies.",
        "Turn 1: Travis casts Shadowbite -> Blinds and afflicts the enemy front row.",
        "Turn 1: Berengaria executes Death Spin & Sanguine Pursuit on afflicted targets.",
        "Turn 1: Nina casts Enraged Strike on armored tanks -> 100% defense bypass kill!",
        "Turn 1: Bruno cleans up backline survivors with Wide Smash."
      ]
    },
    "unitGearConfigs": [
      {
        "unitId": "berengaria-renegade",
        "unitName": "Berengaria (Dark Marquess - Axe)",
        "characterName": "Berengaria",
        "className": "Dark Marquess (Axe)",
        "roleTitle": "Affliction Dominator & Executioner Lead",
        "weapon": "Carnelian Greataxe",
        "shieldOrHelm": "Nightmare Shield",
        "accessory1": "Executioner's Eye",
        "accessory2": "Carnelian Pendant",
        "slot1Weapon": {
          "bestInSlot": "Carnelian Greataxe",
          "optimalAlternatives": [
            "Kingsaxe Drakenash",
            "Boreas's Axe",
            "Meteorite Axe"
          ],
          "slotType": "Weapon",
          "notes": "Phys Atk +25, AP +1"
        },
        "slot2ShieldOrOffhand": {
          "bestInSlot": "Nightmare Shield",
          "optimalAlternatives": [
            "Azure Crest Shield",
            "Rose Shield",
            "Silver Shield"
          ],
          "slotType": "Shield",
          "notes": "Phys Def +14, Affliction Potency +20%"
        },
        "slot3Accessory": {
          "bestInSlot": "Executioner's Eye",
          "optimalAlternatives": [
            "Earrings of Pursuit",
            "Critical Ring",
            "Warrior's Medallion"
          ],
          "slotType": "Accessory",
          "notes": "Pursuit Crit +20% on Sanguine Pursuit"
        },
        "slot4Accessory": {
          "bestInSlot": "Carnelian Pendant",
          "optimalAlternatives": [
            "Ruby Pendant",
            "Warrior's Medallion",
            "Power Belt"
          ],
          "slotType": "Accessory",
          "notes": "AP +1 for Death Spin row attacks"
        },
        "statPriorities": [
          "Phys Atk (S+)",
          "Initiative (S)",
          "Phys Def (A)"
        ],
        "growthTypes": [
          "Offensive",
          "Keen"
        ]
      },
      {
        "unitId": "travis-rogue",
        "unitName": "Travis (Rogue)",
        "characterName": "Travis",
        "className": "Rogue",
        "roleTitle": "Row Blindness & Evasion Tank",
        "weapon": "Poisoner's Dagger",
        "shieldOrHelm": "Thief's Mantle",
        "accessory1": "Phantom Ring",
        "accessory2": "Raven Plume",
        "slot1Weapon": {
          "bestInSlot": "Poisoner's Dagger",
          "optimalAlternatives": [
            "Shadow Dagger",
            "Thief's Dagger",
            "Notos's Sword"
          ],
          "slotType": "Weapon",
          "notes": "Phys Atk +18, Poison Affliction on hit"
        },
        "slot2ShieldOrOffhand": {
          "bestInSlot": "Thief's Mantle",
          "optimalAlternatives": [
            "Shadow Hood",
            "Silk Hood",
            "Leather Hood"
          ],
          "slotType": "Helm",
          "notes": "Evasion +20, Evade PP +1"
        },
        "slot3Accessory": {
          "bestInSlot": "Phantom Ring",
          "optimalAlternatives": [
            "Lucky Coin",
            "Thief's Bell",
            "Skillful Amulet"
          ],
          "slotType": "Accessory",
          "notes": "Shadowbite: Row Blindness affliction"
        },
        "slot4Accessory": {
          "bestInSlot": "Raven Plume",
          "optimalAlternatives": [
            "Dove Plume",
            "Lapis Pendant",
            "Carnelian Pendant"
          ],
          "slotType": "Accessory",
          "notes": "Initiative +15 for Turn-1 Shadowbite"
        },
        "statPriorities": [
          "Initiative (S+)",
          "Evasion (S+)",
          "PP +2"
        ],
        "growthTypes": [
          "Speedster",
          "Speedster"
        ]
      },
      {
        "unitId": "nina-breaker",
        "unitName": "Nina (Breaker)",
        "characterName": "Nina",
        "className": "Breaker",
        "roleTitle": "Heavy Armor Crusher",
        "weapon": "Juggernaut",
        "shieldOrHelm": "Gauntlets of Power",
        "accessory1": "Lapis Pendant",
        "accessory2": "Carnelian Pendant",
        "slot1Weapon": {
          "bestInSlot": "Juggernaut",
          "optimalAlternatives": [
            "Meteorite Axe",
            "Giant's Greataxe",
            "Carnelian Axe"
          ],
          "slotType": "Weapon",
          "notes": "Phys Atk +26, Stun Multiplier"
        },
        "slot2ShieldOrOffhand": {
          "bestInSlot": "Gauntlets of Power",
          "optimalAlternatives": [
            "Armored Gauntlets",
            "Heavy Gauntlets",
            "Power Belt"
          ],
          "slotType": "Helm",
          "notes": "Phys Atk +5, Guard Pierce +10%"
        },
        "slot3Accessory": {
          "bestInSlot": "Lapis Pendant",
          "optimalAlternatives": [
            "Sapphire Pendant",
            "Warrior's Medallion",
            "Power Belt"
          ],
          "slotType": "Accessory",
          "notes": "PP +1 for Heavy Impact"
        },
        "slot4Accessory": {
          "bestInSlot": "Carnelian Pendant",
          "optimalAlternatives": [
            "Ruby Pendant",
            "Power Belt",
            "Critical Ring"
          ],
          "slotType": "Accessory",
          "notes": "AP +1 for Assault Blow executions"
        },
        "statPriorities": [
          "Phys Atk (S+)",
          "Crit Rate (B)",
          "AP +1"
        ],
        "growthTypes": [
          "Offensive",
          "Offensive"
        ]
      },
      {
        "unitId": "liza-shieldshooter",
        "unitName": "Liza (Shieldshooter)",
        "characterName": "Liza",
        "className": "Shieldshooter",
        "roleTitle": "Medical Bolt Healer & Anti-Flyer Cover",
        "weapon": "Gallian Crossbow",
        "shieldOrHelm": "Greatshield of Fortitude",
        "accessory1": "First Aid Kit",
        "accessory2": "Lapis Pendant",
        "slot1Weapon": {
          "bestInSlot": "Gallian Crossbow",
          "optimalAlternatives": [
            "Apeliotes's Bow",
            "Carnelian Bow",
            "Meteorite Bow"
          ],
          "slotType": "Weapon",
          "notes": "Phys Atk +24, Anti-Flying 200%"
        },
        "slot2ShieldOrOffhand": {
          "bestInSlot": "Greatshield of Fortitude",
          "optimalAlternatives": [
            "Deflect Shield",
            "Silver Shield",
            "Heavy Guard Shield"
          ],
          "slotType": "Shield",
          "notes": "Phys Def +18, Guard Rate +45%"
        },
        "slot3Accessory": {
          "bestInSlot": "First Aid Kit",
          "optimalAlternatives": [
            "Large Aid Kit",
            "Medical Kit",
            "Self-Aid Kit"
          ],
          "slotType": "Accessory",
          "notes": "End of battle emergency healing"
        },
        "slot4Accessory": {
          "bestInSlot": "Lapis Pendant",
          "optimalAlternatives": [
            "Carnelian Pendant",
            "Dove Plume",
            "Vitality Talisman"
          ],
          "slotType": "Accessory",
          "notes": "PP +1 for Medical Shot & Greatshield Cover"
        },
        "statPriorities": [
          "Phys Def (A)",
          "Healing (A)",
          "Phys Atk (B)"
        ],
        "growthTypes": [
          "Guardian",
          "Defender"
        ]
      },
      {
        "unitId": "bruno-berserker",
        "unitName": "Bruno (Berserker)",
        "characterName": "Bruno",
        "className": "Berserker",
        "roleTitle": "Colossal HP Row Cleaver",
        "weapon": "Dragonbone Axe",
        "shieldOrHelm": "Power Belt",
        "accessory1": "Carnelian Pendant",
        "accessory2": "Vitality Talisman",
        "slot1Weapon": {
          "bestInSlot": "Dragonbone Axe",
          "optimalAlternatives": [
            "Meteorite Axe",
            "Carnelian Axe",
            "Giant's Greataxe"
          ],
          "slotType": "Weapon",
          "notes": "Phys Atk +22, PP +1"
        },
        "slot2ShieldOrOffhand": {
          "bestInSlot": "Power Belt",
          "optimalAlternatives": [
            "Riot Belt",
            "Counter Belt",
            "Armored Gauntlets"
          ],
          "slotType": "Helm",
          "notes": "Phys Atk +5, Guard Mitigate +10%"
        },
        "slot3Accessory": {
          "bestInSlot": "Carnelian Pendant",
          "optimalAlternatives": [
            "Ruby Pendant",
            "Warrior's Medallion",
            "Power Belt"
          ],
          "slotType": "Accessory",
          "notes": "AP +1 for Wide Smash row sweeps"
        },
        "slot4Accessory": {
          "bestInSlot": "Vitality Talisman",
          "optimalAlternatives": [
            "Lifeblood Talisman",
            "Lapis Pendant",
            "Lionheart"
          ],
          "slotType": "Accessory",
          "notes": "Max HP +25, synergy with Bulk Up"
        },
        "statPriorities": [
          "Max HP (S+)",
          "Phys Atk (S)",
          "Sustain (A)"
        ],
        "growthTypes": [
          "Offensive",
          "Guardian"
        ]
      }
    ],
    "tacticsSequence": [
      {
        "step": 1,
        "unit": "Berengaria",
        "skill": "Eye of the Crimson Bear",
        "condition1": "[Start of Battle]",
        "condition2": "[All Enemies]",
        "notes": "-20% Atk/Def & -10 Init debuff"
      },
      {
        "step": 2,
        "unit": "Travis",
        "skill": "Shadowbite",
        "condition1": "[Front Row Enemies]",
        "condition2": "[Self AP >= 2]",
        "notes": "Inflicts Row Blindness & Affliction"
      },
      {
        "step": 3,
        "unit": "Berengaria",
        "skill": "Sanguine Pursuit",
        "condition1": "[Target Afflicted]",
        "condition2": "[Self PP >= 1]",
        "notes": "Recovers AP/PP upon hit"
      },
      {
        "step": 4,
        "unit": "Nina",
        "skill": "Enraged Strike",
        "condition1": "[Armored Target]",
        "condition2": "[Self AP >= 1]",
        "notes": "100% Physical Defense bypass"
      },
      {
        "step": 5,
        "unit": "Bruno",
        "skill": "Wide Smash",
        "condition1": "[Enemy Row >= 2]",
        "condition2": "[Self AP >= 2]",
        "notes": "Cleaves entire enemy row"
      }
    ],
    "substitutes": {
      "earlyGame": [
        "Travis Thief",
        "Nina Warrior",
        "Bruno Gladiator"
      ],
      "endgameAlternatives": [
        "Morax replacing Bruno"
      ]
    }
  },
  {
    "id": "zero-5-virginia-valkyrian-counter",
    "name": "5. Virginia Valkyrian Counter Fortress",
    "archetype": "Heavy Sustain",
    "tier": "SS",
    "pvpRating": "SS-Tier (Unbreakable Physical Counter Fortress)",
    "pveRating": "Godly (Invincible against melee physical armies)",
    "description": "Virginia commands an unyielding counter-attack fortress. Dual-wielding swords and shields with Maiden's Hammer, Virginia buffs squad physical defense by +30% on Turn 0 with Iron Veil. Leah delivers lethal True-Strike parries, Kitra shatters enemy armor, Rolf snipes flying threats with 100% True Strike, and Colm blocks all incoming arrow volleys with Arrow Cover.",
    "keyItems": [
      "Maiden's Sword",
      "Rose Shield",
      "Counter Belt",
      "Apeliotes's Bow"
    ],
    "frontRow": [
      "virginia-valkyria",
      "colm-vanguard"
    ],
    "backRow": [
      "leah-swordmaster",
      "kitra-breaker",
      "rolf-sniper"
    ],
    "pros": [
      "Iron Veil start-of-battle passive grants +30% Phys Def & Guard Rate to squad",
      "Virginia Maiden's Hammer deals 200% bonus damage to guarding foes and breaks shields",
      "Leah Parrying Slash negates 100% incoming melee damage and retaliates instantly",
      "Rolf Eagle Eye Aerial Snipe permanently clears airborne counters with True Strike",
      "Colm Arrow Cover completely neutralizes anti-infantry bow attacks"
    ],
    "cons": [
      "Lower base Magic Defense against multi-target sorcerers"
    ],
    "counters": [
      "Heavy Row Magic Nukes (Trinity Rain)"
    ],
    "strategyGuide": {
      "winCondition": "Absorb all physical enemy swings with 100% guard and parries, retaliating with Maiden's Hammer and True-Strike Meteor Slash.",
      "overview": "Virginia starts battle with Iron Veil (+30% Phys Def to squad). When enemies attack Virginia or Leah, they parry and retaliate with high potency counter strikes. Kitra smashes armored Legionnaires, Rolf deletes flying threats, and Colm shields the squad from archers.",
      "combatSequenceNotes": [
        "Turn 0: Virginia triggers Iron Veil -> Squad gains +30% Physical Defense and Guard Rate.",
        "Turn 1: Enemy attacks frontline -> Virginia & Leah parry and counterattack immediately.",
        "Turn 1: Virginia casts Maiden's Hammer -> Breaks enemy guard for 200% damage.",
        "Turn 1: Leah executes Meteor Slash on low-health targets.",
        "Turn 1: Rolf casts Aerial Snipe on flying enemies with True Strike."
      ]
    },
    "unitGearConfigs": [
      {
        "unitId": "virginia-valkyria",
        "unitName": "Virginia (Valkyria)",
        "characterName": "Virginia",
        "className": "Valkyria",
        "roleTitle": "Dual-Sword & Shield Counter Vanguard",
        "weapon": "Maiden's Sword",
        "shieldOrHelm": "Rose Shield",
        "accessory1": "Counter Belt",
        "accessory2": "Carnelian Pendant",
        "slot1Weapon": {
          "bestInSlot": "Maiden's Sword",
          "optimalAlternatives": [
            "Kingsblade Cornix",
            "Hallowed Blade",
            "Meteorite Sword"
          ],
          "slotType": "Weapon",
          "notes": "Phys Atk +23, Phys Def +5, PP +1"
        },
        "slot2ShieldOrOffhand": {
          "bestInSlot": "Rose Shield",
          "optimalAlternatives": [
            "Greatshield of the Maiden",
            "Azure Crest Shield",
            "Silver Shield"
          ],
          "slotType": "Shield",
          "notes": "Phys Def +15, Guard Rate +35%, Retaliation Counter, PP +1"
        },
        "slot3Accessory": {
          "bestInSlot": "Counter Belt",
          "optimalAlternatives": [
            "Retaliation Earrings",
            "Rose Broach",
            "Lionheart"
          ],
          "slotType": "Accessory",
          "notes": "Counter Slash retaliation upon guarding"
        },
        "slot4Accessory": {
          "bestInSlot": "Carnelian Pendant",
          "optimalAlternatives": [
            "Ruby Pendant",
            "Warrior's Medallion",
            "Vitality Talisman"
          ],
          "slotType": "Accessory",
          "notes": "AP +1 for Maiden's Hammer strikes"
        },
        "statPriorities": [
          "Phys Def (S+)",
          "Guard Rate (100%)",
          "Phys Atk (A)"
        ],
        "growthTypes": [
          "Offensive",
          "Guardian"
        ]
      },
      {
        "unitId": "colm-vanguard",
        "unitName": "Colm (Vanguard)",
        "characterName": "Colm",
        "className": "Vanguard",
        "roleTitle": "Frontline Shield & Arrow Cover",
        "weapon": "Meteorite Sword",
        "shieldOrHelm": "Deflect Shield",
        "accessory1": "Heavy Guard Ring",
        "accessory2": "Lapis Pendant",
        "slot1Weapon": {
          "bestInSlot": "Meteorite Sword",
          "optimalAlternatives": [
            "Hallowed Blade",
            "Iron Sword",
            "Bronze Sword"
          ],
          "slotType": "Weapon",
          "notes": "Phys Atk +24, Max HP +20, Guard +10%"
        },
        "slot2ShieldOrOffhand": {
          "bestInSlot": "Deflect Shield",
          "optimalAlternatives": [
            "Silver Shield",
            "Knight Shield",
            "Azure Crest Shield"
          ],
          "slotType": "Shield",
          "notes": "Arrow Deflect: Negates 100% arrow damage"
        },
        "slot3Accessory": {
          "bestInSlot": "Heavy Guard Ring",
          "optimalAlternatives": [
            "Defender's Ring",
            "Guardian Gloves",
            "Defensive Ring"
          ],
          "slotType": "Accessory",
          "notes": "Guard Rate +15%"
        },
        "slot4Accessory": {
          "bestInSlot": "Lapis Pendant",
          "optimalAlternatives": [
            "Carnelian Pendant",
            "Vitality Talisman",
            "Dove Plume"
          ],
          "slotType": "Accessory",
          "notes": "PP +1 for Arrow Cover activations"
        },
        "statPriorities": [
          "Phys Def (S)",
          "Guard Rate (A)",
          "HP (A)"
        ],
        "growthTypes": [
          "Guardian",
          "Defender"
        ]
      },
      {
        "unitId": "leah-swordmaster",
        "unitName": "Leah (Swordmaster)",
        "characterName": "Leah",
        "className": "Swordmaster",
        "roleTitle": "True-Strike Parry Duelist",
        "weapon": "Notos's Sword",
        "shieldOrHelm": "Parrying Dagger (Second Blade)",
        "accessory1": "Parrying Amulet",
        "accessory2": "Carnelian Pendant",
        "slot1Weapon": {
          "bestInSlot": "Notos's Sword",
          "optimalAlternatives": [
            "Meteorite Sword",
            "Keen Broadsword",
            "Kingsblade Cornix"
          ],
          "slotType": "Weapon",
          "notes": "Phys Atk +25, Initiative +5"
        },
        "slot2ShieldOrOffhand": {
          "bestInSlot": "Parrying Dagger (Second Blade)",
          "optimalAlternatives": [
            "Pursuant's Blade",
            "Carnelian Blade",
            "Steel Blade"
          ],
          "slotType": "Offhand",
          "notes": "Evasion +15, Parrying Slash"
        },
        "slot3Accessory": {
          "bestInSlot": "Parrying Amulet",
          "optimalAlternatives": [
            "Lucky Coin",
            "Critical Ring",
            "Skillful Amulet"
          ],
          "slotType": "Accessory",
          "notes": "Parrying Slash retaliation on melee strike"
        },
        "slot4Accessory": {
          "bestInSlot": "Carnelian Pendant",
          "optimalAlternatives": [
            "Ruby Pendant",
            "Warrior's Medallion",
            "Critical Ring"
          ],
          "slotType": "Accessory",
          "notes": "AP +1 for Meteor Slash executions"
        },
        "statPriorities": [
          "Crit Rate (S+)",
          "Initiative (S)",
          "Phys Atk (A)"
        ],
        "growthTypes": [
          "Keen",
          "Offensive"
        ]
      },
      {
        "unitId": "kitra-breaker",
        "unitName": "Kitra (Breaker)",
        "characterName": "Kitra",
        "className": "Breaker",
        "roleTitle": "Armor Shatterer",
        "weapon": "Meteorite Axe",
        "shieldOrHelm": "Armored Gauntlets",
        "accessory1": "Carnelian Pendant",
        "accessory2": "Lapis Pendant",
        "slot1Weapon": {
          "bestInSlot": "Meteorite Axe",
          "optimalAlternatives": [
            "Juggernaut",
            "Giant's Greataxe",
            "Carnat Axe"
          ],
          "slotType": "Weapon",
          "notes": "Phys Atk +24, Max HP +20"
        },
        "slot2ShieldOrOffhand": {
          "bestInSlot": "Armored Gauntlets",
          "optimalAlternatives": [
            "Heavy Gauntlets",
            "Power Belt",
            "Gauntlets of Power"
          ],
          "slotType": "Helm",
          "notes": "Phys Atk +4, Phys Def +4"
        },
        "slot3Accessory": {
          "bestInSlot": "Carnelian Pendant",
          "optimalAlternatives": [
            "Ruby Pendant",
            "Warrior's Medallion",
            "Power Belt"
          ],
          "slotType": "Accessory",
          "notes": "AP +1 for Enraged Strike armor crushes"
        },
        "slot4Accessory": {
          "bestInSlot": "Lapis Pendant",
          "optimalAlternatives": [
            "Sapphire Pendant",
            "Power Belt",
            "Critical Ring"
          ],
          "slotType": "Accessory",
          "notes": "PP +1 for Heavy Smash follow-ups"
        },
        "statPriorities": [
          "Phys Atk (S+)",
          "Crit Rate (B)",
          "AP +1"
        ],
        "growthTypes": [
          "Offensive",
          "Offensive"
        ]
      },
      {
        "unitId": "rolf-sniper",
        "unitName": "Rolf (Sniper)",
        "characterName": "Rolf",
        "className": "Sniper",
        "roleTitle": "True-Strike Anti-Flying Marksman",
        "weapon": "Apeliotes's Bow",
        "shieldOrHelm": "Sniper Hood",
        "accessory1": "Sniper's Lens",
        "accessory2": "Lapis Pendant",
        "slot1Weapon": {
          "bestInSlot": "Apeliotes's Bow",
          "optimalAlternatives": [
            "Meteorite Bow",
            "Eagle Eye Bow",
            "Carnelian Bow"
          ],
          "slotType": "Weapon",
          "notes": "Phys Atk +25, Initiative +5, True Strike"
        },
        "slot2ShieldOrOffhand": {
          "bestInSlot": "Sniper Hood",
          "optimalAlternatives": [
            "Silk Hood",
            "Elite Beret",
            "Leather Hood"
          ],
          "slotType": "Helm",
          "notes": "Crit Rate +10%, Acc +15"
        },
        "slot3Accessory": {
          "bestInSlot": "Sniper's Lens",
          "optimalAlternatives": [
            "Sniper's Amber Lens",
            "Skillful Amulet",
            "Archer's Eyepatch"
          ],
          "slotType": "Accessory",
          "notes": "Hawkeye: 100% True Strike"
        },
        "slot4Accessory": {
          "bestInSlot": "Lapis Pendant",
          "optimalAlternatives": [
            "Carnelian Pendant",
            "Dove Plume",
            "Warrior's Medallion"
          ],
          "slotType": "Accessory",
          "notes": "PP +1 for Eagle Eye triggers"
        },
        "statPriorities": [
          "Phys Atk (S)",
          "Accuracy (S+)",
          "Crit Rate (A)"
        ],
        "growthTypes": [
          "Offensive",
          "Keen"
        ]
      }
    ],
    "tacticsSequence": [
      {
        "step": 1,
        "unit": "Virginia",
        "skill": "Iron Veil",
        "condition1": "[Start of Battle]",
        "condition2": "[Full Squad]",
        "notes": "+30% Phys Def & Guard Rate"
      },
      {
        "step": 2,
        "unit": "Virginia",
        "skill": "Maiden's Hammer",
        "condition1": "[Enemy Guarding]",
        "condition2": "[Self AP >= 2]",
        "notes": "Breaks enemy guard for 200% damage"
      },
      {
        "step": 3,
        "unit": "Leah",
        "skill": "Parrying Slash",
        "condition1": "[Attacked by Melee]",
        "condition2": "[Self PP >= 1]",
        "notes": "Negates 100% damage & strikes back"
      },
      {
        "step": 4,
        "unit": "Kitra",
        "skill": "Enraged Strike",
        "condition1": "[Armored Enemy]",
        "condition2": "[Self AP >= 1]",
        "notes": "100% Physical Defense bypass"
      },
      {
        "step": 5,
        "unit": "Rolf",
        "skill": "Aerial Snipe",
        "condition1": "[Flying Enemy]",
        "condition2": "[Self AP >= 1]",
        "notes": "200% flying multiplier True Strike"
      }
    ],
    "substitutes": {
      "earlyGame": [
        "Lex Fighter",
        "Rolf Hunter"
      ],
      "endgameAlternatives": [
        "Miriam Sainted Knight replacing Colm"
      ]
    }
  },
  {
    "id": "zero-6-yunifi-glacial-rain-freeze",
    "name": "6. Yunifi Glacial Rain Absolute Zero",
    "archetype": "Affliction Control",
    "tier": "SS",
    "pvpRating": "SS-Tier (Battlefield-Wide Freeze Lockdown)",
    "pveRating": "Godly (Freezes and obliterates entire enemy armies)",
    "description": "Yunifi freezes the entire enemy force on Turn 1 with Glacial Rain (4 AP). Ramona (Wereowl) acts as an infinite PP battery with Owl Eyes, Ridiel cleanses incoming debuffs with Pure Light and adds magic conferral, while Bryce and Lex build an impenetrable wall.",
    "keyItems": [
      "Icefall Bow (Glacial Bow)",
      "Ice Crystal Ring",
      "Owl Pin",
      "Pure Light Amulet"
    ],
    "frontRow": [
      "bryce-legionnaire",
      "lex-vanguard"
    ],
    "backRow": [
      "yunifi-snow-ranger",
      "ramona-wereowl",
      "ridiel-elven-archer"
    ],
    "pros": [
      "Battlefield-wide Freeze status completely skips enemy turns",
      "Ramona Owl Eyes refunds PP to Yunifi on every active action",
      "Ridiel Pure Light cleanses squad afflictions immediately",
      "Yunifi Triple Counter unleashes 3-hit guaranteed critical arrows on attackers"
    ],
    "cons": [
      "Requires charge acceleration protection against Turn-1 stun snipers"
    ],
    "counters": [
      "Freeze Immunity Amulets",
      "Start-of-Battle Stun"
    ],
    "strategyGuide": {
      "winCondition": "Channel Glacial Rain to freeze all 5 enemy units, then execute survivors with Triple Counter and Icicle Arrows.",
      "overview": "Yunifi channels Glacial Rain at start of combat. Ramona uses Owl Eyes to restore PP continuously. Ridiel uses Pure Light to cleanse any incoming debuffs and buffs Yunifi with Mystic Conferral. Bryce and Lex intercept all incoming physical attacks.",
      "combatSequenceNotes": [
        "Turn 0: Yunifi triggers Snow White Guard -> Grants 30% evasion and Freeze immunity.",
        "Turn 1: Yunifi channels Glacial Rain (4 AP arrow volley).",
        "Turn 1: Glacial Rain impacts enemy formation -> Inflicts Freeze status on all 5 targets.",
        "Turn 1: Ramona activates Owl Eyes -> Restores 1 PP to Yunifi for Triple Counter.",
        "Turn 1: Ridiel fires Icicle Arrow on any unfrozen targets."
      ]
    },
    "unitGearConfigs": [
      {
        "unitId": "yunifi-snow-ranger",
        "unitName": "Yunifi (Snow Ranger)",
        "characterName": "Yunifi",
        "className": "Snow Ranger",
        "roleTitle": "Battlefield Freeze Nuke Archer",
        "weapon": "Icefall Bow (Glacial Bow)",
        "shieldOrHelm": "Snow Wolf Hood",
        "accessory1": "Sniper's Amber Lens",
        "accessory2": "Carnelian Pendant",
        "slot1Weapon": {
          "bestInSlot": "Icefall Bow (Glacial Bow)",
          "optimalAlternatives": [
            "Kingsbow Bastorik",
            "Meteorite Bow",
            "Apeliotes's Bow"
          ],
          "slotType": "Weapon",
          "notes": "Glacial Rain 4 AP, Freeze, Phys Atk +22"
        },
        "slot2ShieldOrOffhand": {
          "bestInSlot": "Snow Wolf Hood",
          "optimalAlternatives": [
            "Elite Beret",
            "Leather Hood",
            "Silk Hood"
          ],
          "slotType": "Helm",
          "notes": "Phys Atk +5, Freeze Potency +20%"
        },
        "slot3Accessory": {
          "bestInSlot": "Sniper's Amber Lens",
          "optimalAlternatives": [
            "Ice Crystal Ring",
            "Sniper's Lens",
            "Skillful Amulet"
          ],
          "slotType": "Accessory",
          "notes": "Eagle Eye: Guaranteed 100% Crit + True Strike"
        },
        "slot4Accessory": {
          "bestInSlot": "Carnelian Pendant",
          "optimalAlternatives": [
            "Ruby Pendant",
            "Lucky Coin",
            "Warrior's Medallion"
          ],
          "slotType": "Accessory",
          "notes": "AP +1 for 4 AP Glacial Rain"
        },
        "statPriorities": [
          "Phys Atk (S+)",
          "Initiative (S)",
          "Crit Rate (A)"
        ],
        "growthTypes": [
          "Offensive",
          "Keen"
        ]
      },
      {
        "unitId": "ramona-wereowl",
        "unitName": "Ramona (Wereowl)",
        "characterName": "Ramona",
        "className": "Wereowl",
        "roleTitle": "Bestral Infinite PP/AP Battery",
        "weapon": "Meteorite Rod",
        "shieldOrHelm": "Sage's Owl Shawl",
        "accessory1": "Owl Pin (Owl Eyes PP restoration)",
        "accessory2": "Lapis Pendant",
        "slot1Weapon": {
          "bestInSlot": "Meteorite Rod",
          "optimalAlternatives": [
            "Sacral Rod",
            "Kingstaff Albiore",
            "Euros's Staff"
          ],
          "slotType": "Weapon",
          "notes": "Mag Atk +24, Max HP +20"
        },
        "slot2ShieldOrOffhand": {
          "bestInSlot": "Sage's Owl Shawl",
          "optimalAlternatives": [
            "Silk Hood",
            "Druid's Robes",
            "Dusk Robes"
          ],
          "slotType": "Helm",
          "notes": "Mag Def +8, Initiative +6"
        },
        "slot3Accessory": {
          "bestInSlot": "Owl Pin (Owl Eyes PP restoration)",
          "optimalAlternatives": [
            "Lapis Pendant",
            "Sapphire Pendant",
            "Dove Plume"
          ],
          "slotType": "Accessory",
          "notes": "Owl Eyes: Restores 1 PP to ally using active skill"
        },
        "slot4Accessory": {
          "bestInSlot": "Lapis Pendant",
          "optimalAlternatives": [
            "Sapphire Pendant",
            "Dove Plume",
            "Amethyst Pendant"
          ],
          "slotType": "Accessory",
          "notes": "PP +1 for continuous Restore casting"
        },
        "statPriorities": [
          "Initiative (S)",
          "PP (S+)",
          "Mag Atk (B)"
        ],
        "growthTypes": [
          "Speedster",
          "Guardian"
        ]
      },
      {
        "unitId": "ridiel-elven-archer",
        "unitName": "Ridiel (Elven Archer)",
        "characterName": "Ridiel",
        "className": "Elven Archer",
        "roleTitle": "Pure Light Row Cleanse & Magic Conferral",
        "weapon": "Runic Bow",
        "shieldOrHelm": "Elven Tiara",
        "accessory1": "Pure Light Amulet",
        "accessory2": "Lapis Pendant",
        "slot1Weapon": {
          "bestInSlot": "Runic Bow",
          "optimalAlternatives": [
            "Meteorite Bow",
            "Sacral Bow",
            "Apeliotes's Bow"
          ],
          "slotType": "Weapon",
          "notes": "Phys Atk +18, Mag Atk +24"
        },
        "slot2ShieldOrOffhand": {
          "bestInSlot": "Elven Tiara",
          "optimalAlternatives": [
            "Silk Hood",
            "Sage's Hood",
            "Elite Beret"
          ],
          "slotType": "Helm",
          "notes": "Mag Atk +5, Mag Def +5"
        },
        "slot3Accessory": {
          "bestInSlot": "Pure Light Amulet",
          "optimalAlternatives": [
            "Clearsight Amulet",
            "Detoxifying Amulet",
            "Lapis Pendant"
          ],
          "slotType": "Accessory",
          "notes": "Pure Light: Row-wide cleanse on affliction"
        },
        "slot4Accessory": {
          "bestInSlot": "Lapis Pendant",
          "optimalAlternatives": [
            "Carnelian Pendant",
            "Dove Plume",
            "Skillful Amulet"
          ],
          "slotType": "Accessory",
          "notes": "PP +1 for Mystic Conferral"
        },
        "statPriorities": [
          "Mag Atk (A)",
          "Initiative (A)",
          "Phys Atk (B)"
        ],
        "growthTypes": [
          "All-Rounder",
          "Speedster"
        ]
      },
      {
        "unitId": "bryce-legionnaire",
        "unitName": "Bryce (Legionnaire)",
        "characterName": "Bryce",
        "className": "Legionnaire",
        "roleTitle": "Heavy Frontline Shield",
        "weapon": "Meteorite Lance",
        "shieldOrHelm": "Greatshield of Fortitude",
        "accessory1": "Guardian Gloves",
        "accessory2": "Lapis Pendant",
        "slot1Weapon": {
          "bestInSlot": "Meteorite Lance",
          "optimalAlternatives": [
            "Heavy Iron Lance",
            "Bronze Spear",
            "Carnelian Spear"
          ],
          "slotType": "Weapon",
          "notes": "Phys Atk +24, Max HP +20"
        },
        "slot2ShieldOrOffhand": {
          "bestInSlot": "Greatshield of Fortitude",
          "optimalAlternatives": [
            "Heavy Guard Shield",
            "Tower Shield",
            "Azure Crest Shield"
          ],
          "slotType": "Shield",
          "notes": "Phys Def +18, Guard Rate +45%"
        },
        "slot3Accessory": {
          "bestInSlot": "Guardian Gloves",
          "optimalAlternatives": [
            "Defender's Ring",
            "Defensive Ring",
            "Heavy Guard Ring"
          ],
          "slotType": "Accessory",
          "notes": "Guard Rate +15%"
        },
        "slot4Accessory": {
          "bestInSlot": "Lapis Pendant",
          "optimalAlternatives": [
            "Sapphire Pendant",
            "Vitality Talisman",
            "Lifeblood Talisman"
          ],
          "slotType": "Accessory",
          "notes": "PP +1 for Heavy Cover"
        },
        "statPriorities": [
          "Phys Def (S+)",
          "Guard Rate (100%)",
          "Max HP (S)"
        ],
        "growthTypes": [
          "Guardian",
          "Guardian"
        ]
      },
      {
        "unitId": "lex-vanguard",
        "unitName": "Lex (Vanguard)",
        "characterName": "Lex",
        "className": "Vanguard",
        "roleTitle": "Anti-Ranged Arrow Cover Vanguard",
        "weapon": "Meteorite Sword",
        "shieldOrHelm": "Deflect Shield",
        "accessory1": "Heavy Guard Ring",
        "accessory2": "Lapis Pendant",
        "slot1Weapon": {
          "bestInSlot": "Meteorite Sword",
          "optimalAlternatives": [
            "Hallowed Blade",
            "Iron Sword",
            "Bronze Sword"
          ],
          "slotType": "Weapon",
          "notes": "Phys Atk +24, HP +20"
        },
        "slot2ShieldOrOffhand": {
          "bestInSlot": "Deflect Shield",
          "optimalAlternatives": [
            "Silver Shield",
            "Knight Shield",
            "Azure Crest Shield"
          ],
          "slotType": "Shield",
          "notes": "Arrow Deflect: Negates 100% arrow damage"
        },
        "slot3Accessory": {
          "bestInSlot": "Heavy Guard Ring",
          "optimalAlternatives": [
            "Defender's Ring",
            "Guardian Gloves",
            "Defensive Ring"
          ],
          "slotType": "Accessory",
          "notes": "Guard Rate +15%"
        },
        "slot4Accessory": {
          "bestInSlot": "Lapis Pendant",
          "optimalAlternatives": [
            "Carnelian Pendant",
            "Vitality Talisman",
            "Dove Plume"
          ],
          "slotType": "Accessory",
          "notes": "PP +1 for Arrow Cover"
        },
        "statPriorities": [
          "Phys Def (A)",
          "Guard Rate (A)",
          "HP (B)"
        ],
        "growthTypes": [
          "Guardian",
          "Defender"
        ]
      }
    ],
    "tacticsSequence": [
      {
        "step": 1,
        "unit": "Yunifi",
        "skill": "Glacial Rain",
        "condition1": "[Target: All Enemies]",
        "condition2": "[Self AP >= 4]",
        "notes": "Battlefield Freeze Arrow Volley"
      },
      {
        "step": 2,
        "unit": "Ramona",
        "skill": "Owl Eyes",
        "condition1": "[Ally Used Active Skill]",
        "condition2": "[Target: Yunifi]",
        "notes": "Restores 1 PP to Yunifi"
      },
      {
        "step": 3,
        "unit": "Ridiel",
        "skill": "Pure Light",
        "condition1": "[Ally Afflicted]",
        "condition2": "[Self PP >= 1]",
        "notes": "Cleanses debuffs row-wide"
      },
      {
        "step": 4,
        "unit": "Yunifi",
        "skill": "Triple Counter",
        "condition1": "[Attacked by Enemy]",
        "condition2": "[Self PP >= 1]",
        "notes": "3-hit counter attack with 100% Crit"
      }
    ],
    "substitutes": {
      "earlyGame": [
        "Rolf Hunter",
        "Chloe Soldier"
      ],
      "endgameAlternatives": [
        "Morax replacing Lex"
      ]
    }
  },
  {
    "id": "zero-7-elven-sisters-elemental-tempest",
    "name": "7. Elven Twin Sisters Elemental Tempest",
    "archetype": "Magic Nuke",
    "tier": "SS",
    "pvpRating": "SS-Tier (Dual Consecutive Elemental Roar Wipes)",
    "pveRating": "Godly (Wipes all Elheim, Bastorias & Albion maps)",
    "description": "The Elven Sisters combo (Rosalinde & Eltolinde). Rosalinde opens with Rage of the Faeries (Turn-0 Front Row Stun), channels Elemental Roar (210 potency hybrid nuke), followed immediately by Eltolinde's second Elemental Roar boosted by Faerie charges, while Ithilion and Railanor provide agile hybrid frontline evasion and Galadmir freezes backline threats.",
    "keyItems": [
      "Kingslance Elhal",
      "Sylphid Spear",
      "Elven Crown",
      "Familiar's Choker"
    ],
    "frontRow": [
      "ithilion-elven-fencer",
      "railanor-elven-fencer"
    ],
    "backRow": [
      "rosalinde-elven-augur",
      "eltolinde-elven-sibyl",
      "galadmir-elven-archer"
    ],
    "pros": [
      "Dual consecutive 210 potency hybrid physical/magical Elemental Roar nukes",
      "Rosalinde Rage of the Faeries Turn-0 frontline stun disrupts enemy tanks",
      "Eltolinde Boon of the Faeries grants row-wide magic barrier immunity",
      "Ithilion & Railanor provide high evasion frontline hybrid melee damage"
    ],
    "cons": [
      "Requires PP management across both Elven sisters"
    ],
    "counters": [
      "Featherstaff Magic Reflection"
    ],
    "strategyGuide": {
      "winCondition": "Stun enemy frontline on Turn 0, then deliver two consecutive 2000+ potency Elemental Roar spells.",
      "overview": "Rosalinde casts Rage of the Faeries to stun the enemy front row. On Turn 1, Rosalinde casts Elemental Roar. Eltolinde immediately follows up with a second Elemental Roar with Faerie charges. Ithilion and Railanor stun remaining threats with Lightning Sword.",
      "combatSequenceNotes": [
        "Turn 0: Rosalinde casts Rage of the Faeries -> Stuns enemy front row.",
        "Turn 0: Eltolinde triggers Boon of the Faeries -> Grants magic barrier to squad.",
        "Turn 1: Rosalinde casts Elemental Roar -> 210 potency hybrid nuke impacts all enemies.",
        "Turn 1: Eltolinde casts second Elemental Roar -> Complete team wipe!",
        "Turn 1: Ithilion and Railanor clean up with Lightning Sword."
      ]
    },
    "unitGearConfigs": [
      {
        "unitId": "rosalinde-elven-augur",
        "unitName": "Rosalinde (Elven Augur)",
        "characterName": "Rosalinde",
        "className": "Elven Augur",
        "roleTitle": "Start-of-Battle Stun & Elemental Nuke Lead",
        "weapon": "Sylphid Spear",
        "shieldOrHelm": "Elven Crown",
        "accessory1": "Familiar's Choker",
        "accessory2": "Carnelian Pendant",
        "slot1Weapon": {
          "bestInSlot": "Sylphid Spear",
          "optimalAlternatives": [
            "Kingslance Elhal",
            "Runic Spear",
            "Meteorite Lance"
          ],
          "slotType": "Weapon",
          "notes": "Phys Atk +22, Mag Atk +20, Initiative +8"
        },
        "slot2ShieldOrOffhand": {
          "bestInSlot": "Elven Crown",
          "optimalAlternatives": [
            "Ancient Crown",
            "Sage's Hood",
            "Silk Hood"
          ],
          "slotType": "Helm",
          "notes": "Mag Atk +8, Mag Def +8, PP +1, Initiative +5"
        },
        "slot3Accessory": {
          "bestInSlot": "Familiar's Choker",
          "optimalAlternatives": [
            "Magia Heart",
            "Magia Soul",
            "Sorcerer's Medallion"
          ],
          "slotType": "Accessory",
          "notes": "Sorcerous Connection: +50% Magic Attack"
        },
        "slot4Accessory": {
          "bestInSlot": "Carnelian Pendant",
          "optimalAlternatives": [
            "Ruby Pendant",
            "Raven Plume",
            "Amethyst Pendant"
          ],
          "slotType": "Accessory",
          "notes": "AP +1 for Elemental Roar (3 AP)"
        },
        "statPriorities": [
          "Mag Atk (S+)",
          "Initiative (S)",
          "Phys Atk (A)"
        ],
        "growthTypes": [
          "Speedster",
          "Offensive"
        ]
      },
      {
        "unitId": "eltolinde-elven-sibyl",
        "unitName": "Eltolinde (Elven Sibyl)",
        "characterName": "Eltolinde",
        "className": "Elven Sibyl",
        "roleTitle": "Faerie Barrier Buffer & Secondary Nuke",
        "weapon": "Kingslance Elhal",
        "shieldOrHelm": "Elven Tiara",
        "accessory1": "Lapis Pendant",
        "accessory2": "Carnelian Pendant",
        "slot1Weapon": {
          "bestInSlot": "Kingslance Elhal",
          "optimalAlternatives": [
            "Sylphid Spear",
            "Runic Spear",
            "Meteorite Lance"
          ],
          "slotType": "Weapon",
          "notes": "Phys Atk +28, All Stats +5"
        },
        "slot2ShieldOrOffhand": {
          "bestInSlot": "Elven Tiara",
          "optimalAlternatives": [
            "Archbishop's Mitre",
            "Silk Hood",
            "Sage's Hood"
          ],
          "slotType": "Helm",
          "notes": "Mag Atk +6, Mag Def +6, PP +1"
        },
        "slot3Accessory": {
          "bestInSlot": "Lapis Pendant",
          "optimalAlternatives": [
            "Sapphire Pendant",
            "Amethyst Pendant",
            "Celestial Talisman"
          ],
          "slotType": "Accessory",
          "notes": "PP +1 for Boon of the Faeries barrier"
        },
        "slot4Accessory": {
          "bestInSlot": "Carnelian Pendant",
          "optimalAlternatives": [
            "Ruby Pendant",
            "Dove Plume",
            "Warrior's Medallion"
          ],
          "slotType": "Accessory",
          "notes": "AP +1 for second Elemental Roar"
        },
        "statPriorities": [
          "Mag Atk (S)",
          "Initiative (A)",
          "Healing (S)"
        ],
        "growthTypes": [
          "Guardian",
          "Speedster"
        ]
      },
      {
        "unitId": "ithilion-elven-fencer",
        "unitName": "Ithilion (Elven Fencer)",
        "characterName": "Ithilion",
        "className": "Elven Fencer",
        "roleTitle": "Hybrid Lightning Stun Duelist",
        "weapon": "Phantom Knight's Sword",
        "shieldOrHelm": "Mirage Cloak",
        "accessory1": "Raven Plume",
        "accessory2": "Carnelian Pendant",
        "slot1Weapon": {
          "bestInSlot": "Phantom Knight's Sword",
          "optimalAlternatives": [
            "Runic Sword",
            "Notos's Sword",
            "Meteorite Sword"
          ],
          "slotType": "Weapon",
          "notes": "Mag Atk +22, Mag Def +5, Initiative +3"
        },
        "slot2ShieldOrOffhand": {
          "bestInSlot": "Mirage Cloak",
          "optimalAlternatives": [
            "Thief's Mantle",
            "Silk Hood",
            "Leather Hood"
          ],
          "slotType": "Helm",
          "notes": "Evasion +20, Mirage Step"
        },
        "slot3Accessory": {
          "bestInSlot": "Raven Plume",
          "optimalAlternatives": [
            "Dove Plume",
            "Lucky Coin",
            "Thief's Bell"
          ],
          "slotType": "Accessory",
          "notes": "Initiative +15 for Turn-1 frontline stun"
        },
        "slot4Accessory": {
          "bestInSlot": "Carnelian Pendant",
          "optimalAlternatives": [
            "Lapis Pendant",
            "Skillful Amulet",
            "Ruby Pendant"
          ],
          "slotType": "Accessory",
          "notes": "AP +1 for Lightning Sword"
        },
        "statPriorities": [
          "Initiative (S+)",
          "Evasion (S)",
          "Mag Atk (A)"
        ],
        "growthTypes": [
          "Speedster",
          "Keen"
        ]
      },
      {
        "unitId": "railanor-elven-fencer",
        "unitName": "Railanor (Elven Fencer)",
        "characterName": "Railanor",
        "className": "Elven Fencer",
        "roleTitle": "Frontline Evasion & Wind Blade Sweeper",
        "weapon": "Runic Sword",
        "shieldOrHelm": "Dusk Robes",
        "accessory1": "Lapis Pendant",
        "accessory2": "Carnelian Pendant",
        "slot1Weapon": {
          "bestInSlot": "Runic Sword",
          "optimalAlternatives": [
            "Phantom Knight's Sword",
            "Meteorite Sword",
            "Hallowed Blade"
          ],
          "slotType": "Weapon",
          "notes": "Phys Atk +18, Mag Atk +24"
        },
        "slot2ShieldOrOffhand": {
          "bestInSlot": "Dusk Robes",
          "optimalAlternatives": [
            "Dawn Robes",
            "Silk Hood",
            "Druid's Robes"
          ],
          "slotType": "Helm",
          "notes": "Mag Def +12, Evasion +10"
        },
        "slot3Accessory": {
          "bestInSlot": "Lapis Pendant",
          "optimalAlternatives": [
            "Sapphire Pendant",
            "Raven Plume",
            "Dove Plume"
          ],
          "slotType": "Accessory",
          "notes": "PP +1 for Mirage Step dodges"
        },
        "slot4Accessory": {
          "bestInSlot": "Carnelian Pendant",
          "optimalAlternatives": [
            "Ruby Pendant",
            "Lucky Coin",
            "Critical Ring"
          ],
          "slotType": "Accessory",
          "notes": "AP +1 for Windstorm Blade"
        },
        "statPriorities": [
          "Evasion (S)",
          "Mag Atk (A)",
          "Initiative (A)"
        ],
        "growthTypes": [
          "Speedster",
          "Speedster"
        ]
      },
      {
        "unitId": "galadmir-elven-archer",
        "unitName": "Galadmir (Elven Archer)",
        "characterName": "Galadmir",
        "className": "Elven Archer",
        "roleTitle": "Backline Freeze & Row Cleanse",
        "weapon": "Runic Bow",
        "shieldOrHelm": "Silk Hood",
        "accessory1": "Pure Light Amulet",
        "accessory2": "Lapis Pendant",
        "slot1Weapon": {
          "bestInSlot": "Runic Bow",
          "optimalAlternatives": [
            "Meteorite Bow",
            "Apeliotes's Bow",
            "Sacral Bow"
          ],
          "slotType": "Weapon",
          "notes": "Phys Atk +18, Mag Atk +24"
        },
        "slot2ShieldOrOffhand": {
          "bestInSlot": "Silk Hood",
          "optimalAlternatives": [
            "Sage's Hood",
            "Elite Beret",
            "Leather Hood"
          ],
          "slotType": "Helm",
          "notes": "Mag Def +4, Initiative +3"
        },
        "slot3Accessory": {
          "bestInSlot": "Pure Light Amulet",
          "optimalAlternatives": [
            "Clearsight Amulet",
            "Detoxifying Amulet",
            "Lapis Pendant"
          ],
          "slotType": "Accessory",
          "notes": "Pure Light: Row-wide cleanse"
        },
        "slot4Accessory": {
          "bestInSlot": "Lapis Pendant",
          "optimalAlternatives": [
            "Carnelian Pendant",
            "Dove Plume",
            "Skillful Amulet"
          ],
          "slotType": "Accessory",
          "notes": "PP +1 for Icicle Arrow & Mystic Conferral"
        },
        "statPriorities": [
          "Mag Atk (A)",
          "Initiative (A)",
          "Healing (B)"
        ],
        "growthTypes": [
          "All-Rounder",
          "Speedster"
        ]
      }
    ],
    "tacticsSequence": [
      {
        "step": 1,
        "unit": "Rosalinde",
        "skill": "Rage of the Faeries",
        "condition1": "[Start of Battle]",
        "condition2": "[Front Row Enemies]",
        "notes": "Stuns frontline tanks"
      },
      {
        "step": 2,
        "unit": "Eltolinde",
        "skill": "Boon of the Faeries",
        "condition1": "[Start of Battle]",
        "condition2": "[Full Squad]",
        "notes": "Magic barrier immunity"
      },
      {
        "step": 3,
        "unit": "Rosalinde",
        "skill": "Elemental Roar",
        "condition1": "[Target: All Enemies]",
        "condition2": "[Self AP >= 3]",
        "notes": "First 210 potency hybrid nuke"
      },
      {
        "step": 4,
        "unit": "Eltolinde",
        "skill": "Elemental Roar",
        "condition1": "[Target: All Enemies]",
        "condition2": "[Self AP >= 3]",
        "notes": "Second consecutive hybrid nuke"
      },
      {
        "step": 5,
        "unit": "Ithilion",
        "skill": "Lightning Sword",
        "condition1": "[Enemy Not Stunned]",
        "condition2": "[Self AP >= 1]",
        "notes": "Stuns any survivors"
      }
    ],
    "substitutes": {
      "earlyGame": [
        "Ridiel Elven Archer",
        "Lhinalo Elven Archer"
      ],
      "endgameAlternatives": [
        "Yahna replacing Galadmir"
      ]
    }
  },
  {
    "id": "zero-8-amalia-grand-crusher",
    "name": "8. Amalia Colossal Shield & Armor Obliteration",
    "archetype": "Heavy Armor Crusher",
    "tier": "SS",
    "pvpRating": "SS-Tier (Colossal Guard-Bypassing Boss Obliteration)",
    "pveRating": "Godly (Shatters all heavy armor, boss & coliseum encounters)",
    "description": "Amalia channels colossal greatsword damage (120 base Phys Atk) with Grand Crusher Greatsword and Penetrate, ignoring 50% physical defense across full columns. Bertrand (Werebear) taunts physical threats with Indomitable Guard and Ground Slam stuns, Monica provides Magic Barrier and healing, Aramis executes scouts, and Mandrin deletes fliers.",
    "keyItems": [
      "Grand Crusher Greatsword",
      "Berserker Band",
      "Heavy Guard Shield",
      "Radiant Shield"
    ],
    "frontRow": [
      "amalia-dreadnought",
      "bertrand-werebear"
    ],
    "backRow": [
      "monica-sainted-knight",
      "aramis-swordmaster",
      "mandrin-sniper"
    ],
    "pros": [
      "Amalia boasts the highest single-target physical attack in the game (120 base Atk)",
      "Penetrate strikes full columns bypassing 50% defense and breaking guard",
      "Bertrand Indomitable Guard taunt wall absorbs all incoming physical strikes",
      "Monica Magic Barrier and Row Heal sustain the frontline",
      "Mandrin Aerial Snipe eliminates flying evasion counters"
    ],
    "cons": [
      "Lower base movement speed on overworld map"
    ],
    "counters": [
      "Heavy Ranged Flying Squads (neutralized by Mandrin)"
    ],
    "strategyGuide": {
      "winCondition": "Crush high-defense enemy vanguards with Amalia's Penetrate and Wild Slash while Bertrand tanks physical hits.",
      "overview": "Bertrand draws enemy fire with Indomitable Guard. Amalia casts Penetrate to hit column targets ignoring 50% Defense. Aramis cuts down low-health scouts, Mandrin snipes fliers, and Monica keeps the squad shielded with Magic Barrier.",
      "combatSequenceNotes": [
        "Turn 0: Bertrand triggers Indomitable Guard -> Gains massive HP and 40% physical reduction.",
        "Turn 1: Amalia casts Penetrate -> Hits column targets ignoring 50% Defense.",
        "Turn 1: Mandrin casts Aerial Snipe on flying threats with True Strike.",
        "Turn 1: Aramis uses Meteor Slash on weakened backliners.",
        "Turn 1: Monica triggers Row Heal on frontline."
      ]
    },
    "unitGearConfigs": [
      {
        "unitId": "amalia-dreadnought",
        "unitName": "Amalia (Dreadnought)",
        "characterName": "Amalia",
        "className": "Dreadnought",
        "roleTitle": "Colossal Greatsword Boss Obliterator",
        "weapon": "Grand Crusher Greatsword",
        "shieldOrHelm": "Heavy Guard Shield",
        "accessory1": "Berserker Band",
        "accessory2": "Carnelian Pendant",
        "slot1Weapon": {
          "bestInSlot": "Grand Crusher Greatsword",
          "optimalAlternatives": [
            "Kingsblade Cornix",
            "Meteorite Sword",
            "Juggernaut"
          ],
          "slotType": "Weapon",
          "notes": "Phys Atk +28, Guard Piercing +50%"
        },
        "slot2ShieldOrOffhand": {
          "bestInSlot": "Heavy Guard Shield",
          "optimalAlternatives": [
            "Greatshield of Fortitude",
            "Silver Shield",
            "Azure Crest Shield"
          ],
          "slotType": "Shield",
          "notes": "Phys Def +14, Guard Rate +30%"
        },
        "slot3Accessory": {
          "bestInSlot": "Berserker Band",
          "optimalAlternatives": [
            "Warrior's Medallion",
            "Power Belt",
            "Lionheart"
          ],
          "slotType": "Accessory",
          "notes": "Phys Atk +20%"
        },
        "slot4Accessory": {
          "bestInSlot": "Carnelian Pendant",
          "optimalAlternatives": [
            "Ruby Pendant",
            "Sniper's Amber Lens",
            "Critical Ring"
          ],
          "slotType": "Accessory",
          "notes": "AP +1 for Penetrate column strikes"
        },
        "statPriorities": [
          "Phys Atk (S+)",
          "Crit Rate (A)",
          "AP +1"
        ],
        "growthTypes": [
          "Offensive",
          "Offensive"
        ]
      },
      {
        "unitId": "bertrand-werebear",
        "unitName": "Bertrand (Werebear)",
        "characterName": "Bertrand",
        "className": "Werebear",
        "roleTitle": "Bestral Frontline Taunt Wall",
        "weapon": "Boreas's Axe",
        "shieldOrHelm": "Greatshield of Fortitude",
        "accessory1": "Vitality Talisman",
        "accessory2": "Lapis Pendant",
        "slot1Weapon": {
          "bestInSlot": "Boreas's Axe",
          "optimalAlternatives": [
            "Meteorite Axe",
            "Carnat Axe",
            "Dragonbone Axe"
          ],
          "slotType": "Weapon",
          "notes": "Phys Atk +26, Initiative +5"
        },
        "slot2ShieldOrOffhand": {
          "bestInSlot": "Greatshield of Fortitude",
          "optimalAlternatives": [
            "Heavy Guard Shield",
            "Tower Shield",
            "Azure Crest Shield"
          ],
          "slotType": "Shield",
          "notes": "Phys Def +18, Guard Rate +45%, Max HP +20"
        },
        "slot3Accessory": {
          "bestInSlot": "Vitality Talisman",
          "optimalAlternatives": [
            "Lifeblood Talisman",
            "Guardian Gloves",
            "Defender's Ring"
          ],
          "slotType": "Accessory",
          "notes": "Max HP +25, Indomitable Guard synergy"
        },
        "slot4Accessory": {
          "bestInSlot": "Lapis Pendant",
          "optimalAlternatives": [
            "Sapphire Pendant",
            "Heavy Guard Ring",
            "Defender's Ring"
          ],
          "slotType": "Accessory",
          "notes": "PP +1 for Ground Slam taunt"
        },
        "statPriorities": [
          "Max HP (S+)",
          "Phys Def (S)",
          "Guard Rate (A)"
        ],
        "growthTypes": [
          "Guardian",
          "Defender"
        ]
      },
      {
        "unitId": "monica-sainted-knight",
        "unitName": "Monica (Sainted Knight)",
        "characterName": "Monica",
        "className": "Sainted Knight",
        "roleTitle": "Support Knight & Magic Barrier Protector",
        "weapon": "Runic Sword",
        "shieldOrHelm": "Radiant Shield",
        "accessory1": "Lapis Pendant",
        "accessory2": "First Aid Kit",
        "slot1Weapon": {
          "bestInSlot": "Runic Sword",
          "optimalAlternatives": [
            "Hallowed Blade",
            "Notos's Sword",
            "Phantom Knight's Sword"
          ],
          "slotType": "Weapon",
          "notes": "Phys Atk +18, Mag Atk +24"
        },
        "slot2ShieldOrOffhand": {
          "bestInSlot": "Radiant Shield",
          "optimalAlternatives": [
            "Silver Shield",
            "Azure Crest Shield",
            "Knight Shield"
          ],
          "slotType": "Shield",
          "notes": "Phys Def +12, Mag Def +12, Magic Barrier"
        },
        "slot3Accessory": {
          "bestInSlot": "Lapis Pendant",
          "optimalAlternatives": [
            "Sapphire Pendant",
            "White Knight Plume",
            "Amethyst Pendant"
          ],
          "slotType": "Accessory",
          "notes": "PP +1 for Magic Barrier"
        },
        "slot4Accessory": {
          "bestInSlot": "First Aid Kit",
          "optimalAlternatives": [
            "Large Aid Kit",
            "Lapis Pendant",
            "Vitality Talisman"
          ],
          "slotType": "Accessory",
          "notes": "End of battle sustain"
        },
        "statPriorities": [
          "Mag Def (S)",
          "Healing (S)",
          "Initiative (A)"
        ],
        "growthTypes": [
          "Defender",
          "Speedster"
        ]
      },
      {
        "unitId": "aramis-swordmaster",
        "unitName": "Aramis (Swordmaster)",
        "characterName": "Aramis",
        "className": "Swordmaster",
        "roleTitle": "Scout Executioner & True-Strike Finisher",
        "weapon": "Notos's Sword",
        "shieldOrHelm": "Parrying Dagger (Second Blade)",
        "accessory1": "Parrying Amulet",
        "accessory2": "Carnelian Pendant",
        "slot1Weapon": {
          "bestInSlot": "Notos's Sword",
          "optimalAlternatives": [
            "Meteorite Sword",
            "Keen Broadsword",
            "Kingsblade Cornix"
          ],
          "slotType": "Weapon",
          "notes": "Phys Atk +25, Initiative +5"
        },
        "slot2ShieldOrOffhand": {
          "bestInSlot": "Parrying Dagger (Second Blade)",
          "optimalAlternatives": [
            "Pursuant's Blade",
            "Carnelian Blade",
            "Steel Blade"
          ],
          "slotType": "Offhand",
          "notes": "Evasion +15, Parrying Slash"
        },
        "slot3Accessory": {
          "bestInSlot": "Parrying Amulet",
          "optimalAlternatives": [
            "Lucky Coin",
            "Critical Ring",
            "Skillful Amulet"
          ],
          "slotType": "Accessory",
          "notes": "Parrying Slash: Negates melee and counters"
        },
        "slot4Accessory": {
          "bestInSlot": "Carnelian Pendant",
          "optimalAlternatives": [
            "Ruby Pendant",
            "Warrior's Medallion",
            "Critical Ring"
          ],
          "slotType": "Accessory",
          "notes": "AP +1 for Meteor Slash executions"
        },
        "statPriorities": [
          "Crit Rate (S+)",
          "Initiative (A)",
          "Phys Atk (A)"
        ],
        "growthTypes": [
          "Keen",
          "Keen"
        ]
      },
      {
        "unitId": "mandrin-sniper",
        "unitName": "Mandrin (Sniper)",
        "characterName": "Mandrin",
        "className": "Sniper",
        "roleTitle": "Anti-Air True Strike Sniper",
        "weapon": "Apeliotes's Bow",
        "shieldOrHelm": "Sniper Hood",
        "accessory1": "Sniper's Lens",
        "accessory2": "Lapis Pendant",
        "slot1Weapon": {
          "bestInSlot": "Apeliotes's Bow",
          "optimalAlternatives": [
            "Meteorite Bow",
            "Eagle Eye Bow",
            "Carnelian Bow"
          ],
          "slotType": "Weapon",
          "notes": "Phys Atk +25, Initiative +5, True Strike"
        },
        "slot2ShieldOrOffhand": {
          "bestInSlot": "Sniper Hood",
          "optimalAlternatives": [
            "Silk Hood",
            "Elite Beret",
            "Leather Hood"
          ],
          "slotType": "Helm",
          "notes": "Crit Rate +10%, Acc +15"
        },
        "slot3Accessory": {
          "bestInSlot": "Sniper's Lens",
          "optimalAlternatives": [
            "Sniper's Amber Lens",
            "Skillful Amulet",
            "Archer's Eyepatch"
          ],
          "slotType": "Accessory",
          "notes": "Hawkeye: 100% True Strike"
        },
        "slot4Accessory": {
          "bestInSlot": "Lapis Pendant",
          "optimalAlternatives": [
            "Carnelian Pendant",
            "Dove Plume",
            "Warrior's Medallion"
          ],
          "slotType": "Accessory",
          "notes": "PP +1 for Eagle Eye"
        },
        "statPriorities": [
          "Phys Atk (A)",
          "Accuracy (S+)",
          "Crit Rate (A)"
        ],
        "growthTypes": [
          "Offensive",
          "Keen"
        ]
      }
    ],
    "tacticsSequence": [
      {
        "step": 1,
        "unit": "Bertrand",
        "skill": "Indomitable Guard",
        "condition1": "[Start of Battle]",
        "condition2": "[Self HP == 100%]",
        "notes": "Massive HP & Def boost"
      },
      {
        "step": 2,
        "unit": "Amalia",
        "skill": "Penetrate",
        "condition1": "[Target Column]",
        "condition2": "[Self AP >= 2]",
        "notes": "Ignores 50% defense & breaks guard"
      },
      {
        "step": 3,
        "unit": "Mandrin",
        "skill": "Aerial Snipe",
        "condition1": "[Flying Enemy]",
        "condition2": "[Self AP >= 1]",
        "notes": "200% anti-flying damage"
      },
      {
        "step": 4,
        "unit": "Monica",
        "skill": "Row Heal",
        "condition1": "[Ally HP <= 50%]",
        "condition2": "[Self PP >= 1]",
        "notes": "Sustains frontline"
      },
      {
        "step": 5,
        "unit": "Aramis",
        "skill": "Meteor Slash",
        "condition1": "[Low HP Enemy]",
        "condition2": "[Self AP >= 2]",
        "notes": "Executes targets"
      }
    ],
    "substitutes": {
      "earlyGame": [
        "Mordon Warrior",
        "Josef Paladin"
      ],
      "endgameAlternatives": [
        "Morax replacing Bertrand"
      ]
    }
  },
  {
    "id": "zero-9-bestral-midnight-hunt",
    "name": "9. Bestral Midnight Hunt Pack",
    "archetype": "Affliction Control",
    "tier": "SS",
    "pvpRating": "SS-Tier (Bestral Night Stat Lethality & Pursuit Blitz)",
    "pveRating": "Godly (Night Map Specialist & Unstoppable Evasion)",
    "description": "Dinah and Govil unleash Bestral Night ferocity. Wolfpack Gauntlets grants +20% Phys Atk to all bestrals, Raenys inflicts Turn-0 Blindness with Shining Arrow, Dinah and Govil shred armor with Piercing Claw and chain Chasing Slash pursuit executions, while Morpan holds the front with tower guard and Jeremy delivers Following Slash finishes.",
    "keyItems": [
      "Wolfpack Gauntlets",
      "Wolf-Fang Bracelet",
      "Shadow Dagger",
      "Divine Bow"
    ],
    "frontRow": [
      "dinah-werewolf",
      "govil-werewolf"
    ],
    "backRow": [
      "morpan-werebear",
      "raenys-featherbow",
      "jeremy-landsknecht"
    ],
    "pros": [
      "Wolfpack Gauntlets + Wolfpack Roar grants +40% Phys Atk & Initiative to Bestrals",
      "Raenys Shining Arrow applies Turn-0 front row Blindness with highest speed in game",
      "Dinah & Govil chain endless Chasing Slash pursuits on damaged enemies",
      "Morpan tower shield protects fragile bestrals from heavy physical hits",
      "Jeremy Following Slash guarantees follow-up executions on critical targets"
    ],
    "cons": [
      "Slightly reduced base stats during daytime map encounters"
    ],
    "counters": [
      "True-Strike Bow Strikers"
    ],
    "strategyGuide": {
      "winCondition": "Blind enemies on Turn 0 with Raenys, then stack Bestral Attack buffs to trigger endless pursuit execution chains.",
      "overview": "Raenys blinds enemy frontliners at battle start with Shining Arrow. Dinah activates Wolfpack Roar (+20% Bestral Atk & Initiative). Dinah and Govil cast Piercing Claw and Shadow Slash, then immediately trigger Chasing Slash on any target hit. Jeremy follows up with Following Slash.",
      "combatSequenceNotes": [
        "Turn 0: Raenys triggers Shining Arrow -> Blinds enemy front row immediately.",
        "Turn 0: Dinah triggers Wolfpack Roar -> Grants +20% Atk & Init to all Bestrals.",
        "Turn 1: Govil casts Shadow Slash -> Shreds enemy armor.",
        "Turn 1: Dinah executes Piercing Claw & Chasing Slash on weakened targets.",
        "Turn 1: Jeremy triggers Following Slash to finish off the enemy."
      ]
    },
    "unitGearConfigs": [
      {
        "unitId": "dinah-werewolf",
        "unitName": "Dinah (Werewolf)",
        "characterName": "Dinah",
        "className": "Werewolf",
        "roleTitle": "Bestral Alpha Assassin & Pursuit Lead",
        "weapon": "Wolfpack Gauntlets",
        "shieldOrHelm": "Wolf Cap",
        "accessory1": "Wolf-Fang Bracelet",
        "accessory2": "Carnelian Pendant",
        "slot1Weapon": {
          "bestInSlot": "Wolfpack Gauntlets",
          "optimalAlternatives": [
            "Carnelian Blade",
            "Notos's Sword",
            "Meteorite Sword"
          ],
          "slotType": "Weapon",
          "notes": "Wolfpack Strike: +20% Bestral Atk, Phys Atk +5, Crit +10%"
        },
        "slot2ShieldOrOffhand": {
          "bestInSlot": "Wolf Cap",
          "optimalAlternatives": [
            "Leather Hood",
            "Elite Beret",
            "Silk Hood"
          ],
          "slotType": "Helm",
          "notes": "Initiative +5, Crit Rate +10%"
        },
        "slot3Accessory": {
          "bestInSlot": "Wolf-Fang Bracelet",
          "optimalAlternatives": [
            "Beast Ring",
            "Lucky Coin",
            "Warrior's Medallion"
          ],
          "slotType": "Accessory",
          "notes": "Phys Atk +5, Bestral Boost"
        },
        "slot4Accessory": {
          "bestInSlot": "Carnelian Pendant",
          "optimalAlternatives": [
            "Ruby Pendant",
            "Raven Plume",
            "Power Belt"
          ],
          "slotType": "Accessory",
          "notes": "AP +1 for Piercing Claw & Night Hunt"
        },
        "statPriorities": [
          "Crit Rate (S+)",
          "Phys Atk (S)",
          "Initiative (A)"
        ],
        "growthTypes": [
          "Keen",
          "Offensive"
        ]
      },
      {
        "unitId": "govil-werewolf",
        "unitName": "Govil (Werewolf)",
        "characterName": "Govil",
        "className": "Werewolf",
        "roleTitle": "Armor Shredder & Pursuit Striker",
        "weapon": "Carnelian Blade",
        "shieldOrHelm": "Fox Cloak",
        "accessory1": "Raven Plume",
        "accessory2": "Lapis Pendant",
        "slot1Weapon": {
          "bestInSlot": "Carnelian Blade",
          "optimalAlternatives": [
            "Meteorite Sword",
            "Shadow Dagger",
            "Iron Sword"
          ],
          "slotType": "Weapon",
          "notes": "Phys Atk +25, AP +1"
        },
        "slot2ShieldOrOffhand": {
          "bestInSlot": "Fox Cloak",
          "optimalAlternatives": [
            "Thief's Mantle",
            "Silk Hood",
            "Leather Hood"
          ],
          "slotType": "Helm",
          "notes": "Evasion +15, Initiative +5"
        },
        "slot3Accessory": {
          "bestInSlot": "Raven Plume",
          "optimalAlternatives": [
            "Dove Plume",
            "Wolf-Fang Bracelet",
            "Lucky Coin"
          ],
          "slotType": "Accessory",
          "notes": "Initiative +15 for early turn order"
        },
        "slot4Accessory": {
          "bestInSlot": "Lapis Pendant",
          "optimalAlternatives": [
            "Sapphire Pendant",
            "Skillful Amulet",
            "Earrings of Pursuit"
          ],
          "slotType": "Accessory",
          "notes": "PP +1 for Chasing Slash follow-ups"
        },
        "statPriorities": [
          "Initiative (S+)",
          "Evasion (S)",
          "Phys Atk (A)"
        ],
        "growthTypes": [
          "Offensive",
          "Keen"
        ]
      },
      {
        "unitId": "morpan-werebear",
        "unitName": "Morpan (Werebear)",
        "characterName": "Morpan",
        "className": "Werebear",
        "roleTitle": "Bestral Frontline Shield & Ground Slammer",
        "weapon": "Meteorite Axe",
        "shieldOrHelm": "Greatshield of Fortitude",
        "accessory1": "Vitality Talisman",
        "accessory2": "Lapis Pendant",
        "slot1Weapon": {
          "bestInSlot": "Meteorite Axe",
          "optimalAlternatives": [
            "Giant's Greataxe",
            "Juggernaut",
            "Carnat Axe"
          ],
          "slotType": "Weapon",
          "notes": "Phys Atk +24, Max HP +20"
        },
        "slot2ShieldOrOffhand": {
          "bestInSlot": "Greatshield of Fortitude",
          "optimalAlternatives": [
            "Heavy Guard Shield",
            "Tower Shield",
            "Azure Crest Shield"
          ],
          "slotType": "Shield",
          "notes": "Phys Def +18, Guard Rate +45%"
        },
        "slot3Accessory": {
          "bestInSlot": "Vitality Talisman",
          "optimalAlternatives": [
            "Lifeblood Talisman",
            "Guardian Gloves",
            "Defender's Ring"
          ],
          "slotType": "Accessory",
          "notes": "Max HP +25"
        },
        "slot4Accessory": {
          "bestInSlot": "Lapis Pendant",
          "optimalAlternatives": [
            "Sapphire Pendant",
            "Heavy Guard Ring",
            "Defender's Ring"
          ],
          "slotType": "Accessory",
          "notes": "PP +1 for Heavy Cover"
        },
        "statPriorities": [
          "Max HP (S+)",
          "Phys Def (S)",
          "Guard Rate (A)"
        ],
        "growthTypes": [
          "Guardian",
          "Defender"
        ]
      },
      {
        "unitId": "raenys-featherbow",
        "unitName": "Raenys (Featherbow)",
        "characterName": "Raenys",
        "className": "Featherbow",
        "roleTitle": "Turn-0 Blindness Disruptor",
        "weapon": "Apeliotes's Bow",
        "shieldOrHelm": "Angel Plume",
        "accessory1": "Raven Plume",
        "accessory2": "Lapis Pendant",
        "slot1Weapon": {
          "bestInSlot": "Apeliotes's Bow",
          "optimalAlternatives": [
            "Meteorite Bow",
            "Divine Bow",
            "Carnelian Bow"
          ],
          "slotType": "Weapon",
          "notes": "Phys Atk +25, Initiative +5, True Strike"
        },
        "slot2ShieldOrOffhand": {
          "bestInSlot": "Angel Plume",
          "optimalAlternatives": [
            "Wingline Standard",
            "Silk Hood",
            "Sage's Hood"
          ],
          "slotType": "Helm",
          "notes": "Tailwind Array: Start of Battle +20 Squad Initiative"
        },
        "slot3Accessory": {
          "bestInSlot": "Raven Plume",
          "optimalAlternatives": [
            "Dove Plume",
            "Sniper's Lens",
            "Skillful Amulet"
          ],
          "slotType": "Accessory",
          "notes": "Initiative +15 for undisputed Turn-0 speed"
        },
        "slot4Accessory": {
          "bestInSlot": "Lapis Pendant",
          "optimalAlternatives": [
            "Sapphire Pendant",
            "Amethyst Pendant",
            "First Aid Kit"
          ],
          "slotType": "Accessory",
          "notes": "PP +1 for Shining Arrow activations"
        },
        "statPriorities": [
          "Initiative (S+ #1 in Game)",
          "Evasion (S+)",
          "Accuracy (S)"
        ],
        "growthTypes": [
          "Speedster",
          "Speedster"
        ]
      },
      {
        "unitId": "jeremy-landsknecht",
        "unitName": "Jeremy (Landsknecht)",
        "characterName": "Jeremy",
        "className": "Landsknecht",
        "roleTitle": "Following Slash Executioner",
        "weapon": "Kingsblade Cornix",
        "shieldOrHelm": "Silver Shield",
        "accessory1": "Carnelian Pendant",
        "accessory2": "Power Belt",
        "slot1Weapon": {
          "bestInSlot": "Kingsblade Cornix",
          "optimalAlternatives": [
            "Meteorite Sword",
            "Hallowed Blade",
            "Iron Broadsword"
          ],
          "slotType": "Weapon",
          "notes": "Phys Atk +28, All Stats +5"
        },
        "slot2ShieldOrOffhand": {
          "bestInSlot": "Silver Shield",
          "optimalAlternatives": [
            "Knight Shield",
            "Cloth Gauntlets",
            "Bronze Shield"
          ],
          "slotType": "Shield",
          "notes": "Phys Def +11, Guard Rate +25%"
        },
        "slot3Accessory": {
          "bestInSlot": "Carnelian Pendant",
          "optimalAlternatives": [
            "Ruby Pendant",
            "Warrior's Medallion",
            "Critical Ring"
          ],
          "slotType": "Accessory",
          "notes": "AP +1 for Killing Chain executions"
        },
        "slot4Accessory": {
          "bestInSlot": "Power Belt",
          "optimalAlternatives": [
            "Lapis Pendant",
            "Earrings of Pursuit",
            "Gauntlets of Power"
          ],
          "slotType": "Accessory",
          "notes": "Phys Atk +5, Following Slash booster"
        },
        "statPriorities": [
          "Phys Atk (S)",
          "Crit Rate (A)",
          "AP +1"
        ],
        "growthTypes": [
          "Offensive",
          "Keen"
        ]
      }
    ],
    "tacticsSequence": [
      {
        "step": 1,
        "unit": "Raenys",
        "skill": "Shining Arrow",
        "condition1": "[Start of Battle]",
        "condition2": "[Front Row Enemies]",
        "notes": "Inflicts Blindness on front row"
      },
      {
        "step": 2,
        "unit": "Dinah",
        "skill": "Wolfpack Roar",
        "condition1": "[Start of Battle]",
        "condition2": "[Full Squad]",
        "notes": "+20% Bestral Atk & Initiative"
      },
      {
        "step": 3,
        "unit": "Govil",
        "skill": "Shadow Slash",
        "condition1": "[Front Row Target]",
        "condition2": "[Self AP >= 1]",
        "notes": "Shreds armor & triggers pursuit"
      },
      {
        "step": 4,
        "unit": "Dinah",
        "skill": "Chasing Slash",
        "condition1": "[Enemy Damaged]",
        "condition2": "[Self PP >= 1]",
        "notes": "Immediate execution pursuit"
      },
      {
        "step": 5,
        "unit": "Jeremy",
        "skill": "Following Slash",
        "condition1": "[Ally Hit Target]",
        "condition2": "[Self PP >= 1]",
        "notes": "Follow-up fatal strike"
      }
    ],
    "substitutes": {
      "earlyGame": [
        "Travis Thief",
        "Berenice Landsknecht"
      ],
      "endgameAlternatives": [
        "Bertrand Werebear replacing Morpan"
      ]
    }
  },
  {
    "id": "zero-10-sanatio-divine-sacred-zenith",
    "name": "10. Sanatio Divine Sacred Zenith & Magic Reflection",
    "archetype": "Heavy Sustain",
    "tier": "SS",
    "pvpRating": "SS-Tier (Unkillable Sacred Barrier & Magic Reflection)",
    "pveRating": "Godly (Invincible against all Magic, Affliction & Heavy Nukes)",
    "description": "Sanatio protects the squad with Sacred Barrier on Turn 0 (granting a 2-hit complete damage nullification barrier to the entire squad). Ochlys and Umerus counter aerial and melee threats with evasive spiral thrusts and magic reflection, Tatiana maintains 100% squad health, and Gloucester delivers devastating revenge damage with Dark Flame.",
    "keyItems": [
      "Sacred Feather Rod",
      "Angel's Reflection Shield",
      "Ring of the Maiden",
      "Dark Knight Cleaver"
    ],
    "frontRow": [
      "ochlys-feathersword",
      "umerus-feathersword"
    ],
    "backRow": [
      "sanatio-featherstaff",
      "tatiana-bishop",
      "gloucester-doom-knight"
    ],
    "pros": [
      "Turn 0 Sacred Barrier grants 2 hits of complete damage nullification to entire squad",
      "Angel's Reflection Shield reflects magic damage directly back at enemy casters",
      "Ochlys & Umerus high evasion spiral swords bypass guard and shred backlines",
      "Tatiana Holy Refresh maintains 100% squad health with row healing",
      "Gloucester Dark Flame deals colossal hybrid physical/magic vengeance damage"
    ],
    "cons": [
      "Requires managing Gloucester's AP/PP for Dark Flame output"
    ],
    "counters": [
      "Continuous Multi-Hit True-Strike Attacks"
    ],
    "strategyGuide": {
      "winCondition": "Negate enemy Turn-1 nukes with Sacred Barrier, reflect magic attacks, and counterattack with Spiral Sword and Dark Flame.",
      "overview": "Sanatio casts Sacred Barrier at start of battle to grant 2 hits of damage immunity to all allies. Ochlys and Umerus dodge physical swings and reflect magic back. Tatiana heals any damage, and Gloucester delivers massive revenge damage with Dark Flame.",
      "combatSequenceNotes": [
        "Turn 0: Sanatio triggers Sacred Barrier -> Grants 2 hits of nullification barrier to all squad members.",
        "Turn 1: Enemy attacks -> Attacks are completely absorbed by Sacred Barrier or reflected.",
        "Turn 1: Ochlys & Umerus use Spiral Sword -> Evasive aerial slashes bypass guard.",
        "Turn 1: Gloucester casts Dark Flame -> Row magic flame hit devastates enemy formation.",
        "Turn 1: Tatiana casts Row Heal to keep all squad members at 100% HP."
      ]
    },
    "unitGearConfigs": [
      {
        "unitId": "sanatio-featherstaff",
        "unitName": "Sanatio (Featherstaff)",
        "characterName": "Sanatio",
        "className": "Featherstaff",
        "roleTitle": "Divine Barrier Leader & Sacred Guardian",
        "weapon": "Sacred Feather Rod",
        "shieldOrHelm": "Archbishop's Mitre",
        "accessory1": "Ring of the Maiden",
        "accessory2": "Lapis Pendant",
        "slot1Weapon": {
          "bestInSlot": "Sacred Feather Rod",
          "optimalAlternatives": [
            "Kingstaff Albiore",
            "Euros's Staff",
            "Sacral Rod"
          ],
          "slotType": "Weapon",
          "notes": "Sacred Barrier: Start of Battle 2-Hit Squad Nullification"
        },
        "slot2ShieldOrOffhand": {
          "bestInSlot": "Archbishop's Mitre",
          "optimalAlternatives": [
            "Monk's Mitre",
            "Angel Cap",
            "Silk Hood"
          ],
          "slotType": "Helm",
          "notes": "Row Refresh, Mag Def +10, Healing +20"
        },
        "slot3Accessory": {
          "bestInSlot": "Ring of the Maiden",
          "optimalAlternatives": [
            "Holy Maiden Ring",
            "Holy Broach",
            "Celestial Talisman"
          ],
          "slotType": "Accessory",
          "notes": "Mag Def +10, AP +1, PP +1, Maiden's Protection"
        },
        "slot4Accessory": {
          "bestInSlot": "Lapis Pendant",
          "optimalAlternatives": [
            "Sapphire Pendant",
            "Amethyst Pendant",
            "Dove Plume"
          ],
          "slotType": "Accessory",
          "notes": "PP +1 for Sacred Heal"
        },
        "statPriorities": [
          "Mag Def (S+)",
          "Initiative (S)",
          "Healing (S)"
        ],
        "growthTypes": [
          "Guardian",
          "Speedster"
        ]
      },
      {
        "unitId": "ochlys-feathersword",
        "unitName": "Ochlys (Feathersword)",
        "characterName": "Ochlys",
        "className": "Feathersword",
        "roleTitle": "Evasive Flying Tank & Magic Reflector",
        "weapon": "Notos's Sword",
        "shieldOrHelm": "Angel's Reflection Shield",
        "accessory1": "Angel Shield (Feather Amulet)",
        "accessory2": "Carnelian Pendant",
        "slot1Weapon": {
          "bestInSlot": "Notos's Sword",
          "optimalAlternatives": [
            "Hallowed Blade",
            "Meteorite Sword",
            "Divine Sword"
          ],
          "slotType": "Weapon",
          "notes": "Phys Atk +25, Initiative +5, Evasion +10"
        },
        "slot2ShieldOrOffhand": {
          "bestInSlot": "Angel's Reflection Shield",
          "optimalAlternatives": [
            "Azure Crest Shield",
            "Silver Shield",
            "Knight Shield"
          ],
          "slotType": "Shield",
          "notes": "Magic Reflect: Reflects magic damage back at attacker"
        },
        "slot3Accessory": {
          "bestInSlot": "Angel Shield (Feather Amulet)",
          "optimalAlternatives": [
            "Thief's Mantle",
            "Lucky Coin",
            "Silverscale Shield"
          ],
          "slotType": "Accessory",
          "notes": "Evasion +15, Initiative +5"
        },
        "slot4Accessory": {
          "bestInSlot": "Carnelian Pendant",
          "optimalAlternatives": [
            "Ruby Pendant",
            "Lapis Pendant",
            "Warrior's Medallion"
          ],
          "slotType": "Accessory",
          "notes": "AP +1 for Spiral Sword slashes"
        },
        "statPriorities": [
          "Evasion (S+)",
          "Initiative (S)",
          "Phys Atk (A)"
        ],
        "growthTypes": [
          "Speedster",
          "Keen"
        ]
      },
      {
        "unitId": "umerus-feathersword",
        "unitName": "Umerus (Feathersword)",
        "characterName": "Umerus",
        "className": "Feathersword",
        "roleTitle": "Evasive Counter Aerial Duelist",
        "weapon": "Hallowed Blade",
        "shieldOrHelm": "Silver Shield",
        "accessory1": "Wingline Standard",
        "accessory2": "Carnelian Pendant",
        "slot1Weapon": {
          "bestInSlot": "Hallowed Blade",
          "optimalAlternatives": [
            "Notos's Sword",
            "Meteorite Sword",
            "Divine Sword"
          ],
          "slotType": "Weapon",
          "notes": "Phys Atk +24, HP Regen +10%"
        },
        "slot2ShieldOrOffhand": {
          "bestInSlot": "Silver Shield",
          "optimalAlternatives": [
            "Azure Crest Shield",
            "Angel Shield",
            "Knight Shield"
          ],
          "slotType": "Shield",
          "notes": "Phys Def +11, Guard Rate +25%"
        },
        "slot3Accessory": {
          "bestInSlot": "Wingline Standard",
          "optimalAlternatives": [
            "Feather Amulet",
            "Skillful Amulet",
            "Lucky Coin"
          ],
          "slotType": "Accessory",
          "notes": "Squad Flying Atk +15%, Initiative +5"
        },
        "slot4Accessory": {
          "bestInSlot": "Carnelian Pendant",
          "optimalAlternatives": [
            "Ruby Pendant",
            "Lapis Pendant",
            "Warrior's Medallion"
          ],
          "slotType": "Accessory",
          "notes": "AP +1 for Spiral Sword attacks"
        },
        "statPriorities": [
          "Evasion (S+)",
          "Phys Atk (A)",
          "Initiative (A)"
        ],
        "growthTypes": [
          "Speedster",
          "Offensive"
        ]
      },
      {
        "unitId": "tatiana-bishop",
        "unitName": "Tatiana (Bishop)",
        "characterName": "Tatiana",
        "className": "Bishop",
        "roleTitle": "Row Refresh & Barrier Support",
        "weapon": "Sacral Rod",
        "shieldOrHelm": "Silk Hood",
        "accessory1": "First Aid Kit",
        "accessory2": "Lapis Pendant",
        "slot1Weapon": {
          "bestInSlot": "Sacral Rod",
          "optimalAlternatives": [
            "Meteorite Rod",
            "Hallowed Mace",
            "Euros's Staff"
          ],
          "slotType": "Weapon",
          "notes": "Mag Atk +25, HP +15"
        },
        "slot2ShieldOrOffhand": {
          "bestInSlot": "Silk Hood",
          "optimalAlternatives": [
            "Archbishop's Mitre",
            "Monk's Mitre",
            "Cleric Hat"
          ],
          "slotType": "Helm",
          "notes": "Mag Def +4, Initiative +3"
        },
        "slot3Accessory": {
          "bestInSlot": "First Aid Kit",
          "optimalAlternatives": [
            "Large Aid Kit",
            "Medical Kit",
            "Self-Aid Kit"
          ],
          "slotType": "Accessory",
          "notes": "End of battle emergency healing"
        },
        "slot4Accessory": {
          "bestInSlot": "Lapis Pendant",
          "optimalAlternatives": [
            "Sapphire Pendant",
            "Amethyst Pendant",
            "Dove Plume"
          ],
          "slotType": "Accessory",
          "notes": "PP +1 for Row Heal and Holy Refresh"
        },
        "statPriorities": [
          "Healing (S+)",
          "Mag Def (S)",
          "PP (+4 Required)"
        ],
        "growthTypes": [
          "Guardian",
          "Defender"
        ]
      },
      {
        "unitId": "gloucester-doom-knight",
        "unitName": "Gloucester (Doom Knight)",
        "characterName": "Gloucester",
        "className": "Doom Knight",
        "roleTitle": "Vengeful Magic Dark Flame Striker",
        "weapon": "Dark Knight Cleaver (Dark Flame Spear)",
        "shieldOrHelm": "Doom Shield",
        "accessory1": "Carnelian Pendant",
        "accessory2": "Cursed Ring (Power Belt)",
        "slot1Weapon": {
          "bestInSlot": "Dark Knight Cleaver (Dark Flame Spear)",
          "optimalAlternatives": [
            "Kingslance Elhal",
            "Meteorite Lance",
            "Runic Spear"
          ],
          "slotType": "Weapon",
          "notes": "Phys Atk +25, Mag Atk +15, Vengeance Multiplier"
        },
        "slot2ShieldOrOffhand": {
          "bestInSlot": "Doom Shield",
          "optimalAlternatives": [
            "Silver Shield",
            "Knight Shield",
            "Azure Crest Shield"
          ],
          "slotType": "Shield",
          "notes": "Phys Def +12, Mag Def +8, Vengeance Guard"
        },
        "slot3Accessory": {
          "bestInSlot": "Carnelian Pendant",
          "optimalAlternatives": [
            "Ruby Pendant",
            "Warrior's Medallion",
            "Power Belt"
          ],
          "slotType": "Accessory",
          "notes": "AP +1 for Dark Flame row attacks"
        },
        "slot4Accessory": {
          "bestInSlot": "Cursed Ring (Power Belt)",
          "optimalAlternatives": [
            "Lapis Pendant",
            "Retaliation Earrings",
            "Power Belt"
          ],
          "slotType": "Accessory",
          "notes": "Phys Atk +5, Mag Atk +5"
        },
        "statPriorities": [
          "Phys Atk (S)",
          "Mag Atk (B)",
          "AP +1"
        ],
        "growthTypes": [
          "Offensive",
          "Offensive"
        ]
      }
    ],
    "tacticsSequence": [
      {
        "step": 1,
        "unit": "Sanatio",
        "skill": "Sacred Barrier",
        "condition1": "[Start of Battle]",
        "condition2": "[Full Squad]",
        "notes": "2 hits nullification barrier to squad"
      },
      {
        "step": 2,
        "unit": "Ochlys",
        "skill": "Spiral Sword",
        "condition1": "[Front Row Enemies]",
        "condition2": "[Self AP >= 1]",
        "notes": "Evasive aerial row slice"
      },
      {
        "step": 3,
        "unit": "Umerus",
        "skill": "Spiral Sword",
        "condition1": "[Low HP Enemy]",
        "condition2": "[Self AP >= 1]",
        "notes": "Guard-bypassing thrust"
      },
      {
        "step": 4,
        "unit": "Gloucester",
        "skill": "Dark Flame",
        "condition1": "[Enemy Row >= 2]",
        "condition2": "[Self AP >= 2]",
        "notes": "Row magic flame hit scaling with vengeance"
      },
      {
        "step": 5,
        "unit": "Tatiana",
        "skill": "Row Heal",
        "condition1": "[Ally HP <= 75%]",
        "condition2": "[Self PP >= 1]",
        "notes": "Maintains 100% squad health"
      }
    ],
    "substitutes": {
      "earlyGame": [
        "Sharon Cleric",
        "Ochlys Feathersword"
      ],
      "endgameAlternatives": [
        "Renault Great Knight replacing Doom Knight"
      ]
    }
  }
];
