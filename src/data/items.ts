import { RelicItem } from '@/types';

export const ITEMS_DATA: RelicItem[] = [
  {
    "id": "millennium-scepter",
    "name": "Millennium Scepter",
    "image": "/images/items/millennium-scepter.png",
    "type": "Weapon",
    "icon": "⚔️",
    "grantedSkill": {
      "name": "Trinity Rain",
      "cost": "4 AP",
      "description": "Charged Skill: Summons 3 waves of magic rain dealing 210 total potency across all enemy units."
    },
    "statBoosts": "Mag Atk +25, Mag Def +8",
    "acquisition": "Divine Shard Shop (30 Divine Shards)",
    "isMetaCore": true,
    "metaSquads": [
      "1. Trinity Rain Instant Nuke",
      "11. Double Elemental Roar Tempest"
    ]
  },
  {
    "id": "cat-ear-hood",
    "name": "Cat-Ear Hood",
    "image": "/images/items/cat-ear-hood.png",
    "type": "Helm",
    "icon": "🪖",
    "grantedSkill": {
      "name": "Quick Impetus",
      "cost": "3 PP",
      "description": "Triggered when an ally completes a charged active skill: Immediately grants +100% Turn Bar to that ally and refunds 1 AP."
    },
    "statBoosts": "Phys Def +2, Mag Def +5, PP +1",
    "acquisition": "Divine Shard Shop (30 Divine Shards)",
    "isMetaCore": true,
    "metaSquads": [
      "1. Trinity Rain Instant Nuke",
      "3. Dragoon Glacial Tempest"
    ]
  },
  {
    "id": "snipers-amber-lens",
    "name": "Sniper's Amber Lens",
    "image": "/images/items/snipers-amber-lens.png",
    "type": "Accessory",
    "icon": "💎",
    "grantedSkill": {
      "name": "Eagle Eye",
      "cost": "2 PP",
      "description": "Grants Guaranteed Critical Hit and True Strike (bypasses Evasion and Guard) on next active attack."
    },
    "statBoosts": "Crit Rate +10%, Crit Damage +20%",
    "acquisition": "Elheim Region Blacksmith / Coliseum Shop",
    "isMetaCore": true,
    "metaSquads": [
      "1. Trinity Rain Instant Nuke",
      "3. Dragoon Glacial Tempest"
    ]
  },
  {
    "id": "familiars-choker",
    "name": "Familiar's Choker",
    "image": "/images/items/familiar-s-choker.png",
    "type": "Accessory",
    "icon": "💎",
    "grantedSkill": {
      "name": "Sorcerous Connection",
      "cost": "2 PP",
      "description": "Triggered when an ally casts an active magic attack: Grants +50% Magic Attack to that ally."
    },
    "statBoosts": "Mag Atk +10, Mag Def +5",
    "acquisition": "Bastorias Region Trader",
    "isMetaCore": true,
    "metaSquads": [
      "1. Trinity Rain Instant Nuke"
    ]
  },
  {
    "id": "dragoons-war-spear",
    "name": "Dragoon's War Spear",
    "image": "/images/items/dragoon-s-warspear.png",
    "type": "Weapon",
    "icon": "⚔️",
    "grantedSkill": {
      "name": "Dragoon Dive",
      "cost": "4 AP",
      "description": "Charged Skill: Takes 1 turn to prepare, then leaps into the air and crashes down dealing 220 physical potency to all enemies."
    },
    "statBoosts": "Phys Atk +24, Initiative +5",
    "acquisition": "Drakenhold Region Quest: \"The Dragon Rider's Treasure\"",
    "isMetaCore": true,
    "metaSquads": [
      "3. Dragoon Glacial Tempest"
    ]
  },
  {
    "id": "ring-of-the-unicorn",
    "name": "Ring of the Unicorn",
    "image": "/images/items/ring-of-the-unicorn.png",
    "type": "Accessory",
    "icon": "💎",
    "grantedSkill": {
      "name": "Unicorn's Grace",
      "cost": "1 PP",
      "description": "Immunizes wearer to all status afflictions and debuffs."
    },
    "statBoosts": "All Stats +5, AP +1, PP +1",
    "acquisition": "Main Story Quest: Alain Ring Ceremony",
    "isMetaCore": true,
    "metaSquads": [
      "2. Alain Royal Dreadnought"
    ]
  },
  {
    "id": "ring-of-the-maiden",
    "name": "Ring of the Maiden",
    "image": "/images/items/ring-of-the-maiden.png",
    "type": "Accessory",
    "icon": "💎",
    "grantedSkill": {
      "name": "Maiden's Protection",
      "cost": "1 PP",
      "description": "Grants a row-wide immunity barrier against physical and magic status effects at battle start."
    },
    "statBoosts": "Mag Def +10, AP +1, PP +1",
    "acquisition": "Main Story Quest: Covenant Maiden Choice",
    "isMetaCore": true,
    "metaSquads": [
      "2. Alain Royal Dreadnought"
    ]
  },
  {
    "id": "angel-plume",
    "name": "Angel Plume",
    "image": "/images/items/angel-plume.png",
    "type": "Accessory",
    "icon": "💎",
    "grantedSkill": {
      "name": "Tailwind Array",
      "cost": "1 PP",
      "description": "Start of Battle: Grants +20 Initiative to all allies for 1 turn."
    },
    "statBoosts": "Initiative +15, Speed +1",
    "acquisition": "Divine Shard Shop (20 Divine Shards)",
    "isMetaCore": true,
    "metaSquads": [
      "3. Dragoon Glacial Tempest"
    ]
  },
  {
    "id": "glacial-bow",
    "name": "Glacial Bow",
    "image": "/images/items/icefall-bow.png",
    "type": "Weapon",
    "icon": "⚔️",
    "grantedSkill": {
      "name": "Glacial Rain",
      "cost": "4 AP",
      "description": "Charged Skill: Takes 1 turn to prepare, then rains frozen arrows dealing 200 physical damage and Freeze to all enemies."
    },
    "statBoosts": "Phys Atk +22, Crit Rate +10%",
    "acquisition": "Bastorias Region Treasury Quest",
    "isMetaCore": true,
    "metaSquads": [
      "6. Yunifi Glacial Rain Freeze Death"
    ]
  },
  {
    "id": "carnelian-greataxe",
    "name": "Carnelian Greataxe",
    "image": "/images/items/carnelian-axe.png",
    "type": "Weapon",
    "icon": "⚔️",
    "statBoosts": "Phys Atk +25, AP +1",
    "acquisition": "Drakenhold Blacksmith",
    "isMetaCore": true,
    "metaSquads": [
      "4. Berengaria Affliction & Stun Lockdown"
    ]
  },
  {
    "id": "maidens-sword",
    "name": "Maiden's Sword",
    "image": "/images/items/hallowed-blade.png",
    "type": "Weapon",
    "icon": "⚔️",
    "statBoosts": "Phys Atk +23, Phys Def +5, PP +1",
    "acquisition": "Main Story Quest: Maiden's Choice",
    "isMetaCore": true,
    "metaSquads": [
      "5. Virginia Maiden Counter Tempest"
    ]
  },
  {
    "id": "grand-crusher-greatsword",
    "name": "Grand Crusher Greatsword",
    "image": "/images/items/giant-s-greataxe.png",
    "type": "Weapon",
    "icon": "⚔️",
    "statBoosts": "Phys Atk +28, Guard Piercing +50%",
    "acquisition": "Coliseum Rank 1 Reward (Amalia)",
    "isMetaCore": true,
    "metaSquads": [
      "7. Amalia Gigantic Grand Crusher"
    ]
  },
  {
    "id": "wolfpack-gauntlets",
    "name": "Wolfpack Gauntlets",
    "image": "/images/items/wolfpack-gauntlets.png",
    "type": "Weapon",
    "icon": "⚔️",
    "grantedSkill": {
      "name": "Wolfpack Strike",
      "cost": "1 PP",
      "description": "Start of Battle: Increases Phys Atk by 20% for all Bestral allies."
    },
    "statBoosts": "Phys Atk +5, Crit Rate +10%",
    "acquisition": "Bastorias Region Trader",
    "isMetaCore": true,
    "metaSquads": [
      "9. Dinah Bestral Night Blitz"
    ]
  },
  {
    "id": "sacred-feather-rod",
    "name": "Sacred Feather Rod",
    "image": "/images/items/mother-laelia-s-staff.png",
    "type": "Weapon",
    "icon": "⚔️",
    "grantedSkill": {
      "name": "Sacred Barrier",
      "cost": "1 PP",
      "description": "Start of Battle: Grants a 2-hit nullification barrier against all damage to the entire squad."
    },
    "statBoosts": "Mag Atk +24, Mag Def +10",
    "acquisition": "Albion Haven Church",
    "isMetaCore": true,
    "metaSquads": [
      "10. Sanatio Divine Sacred Zenith"
    ]
  }
];
