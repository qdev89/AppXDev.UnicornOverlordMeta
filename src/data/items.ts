import { RelicItem } from '@/types';

export const ITEMS_DATA: RelicItem[] = [
{
    id: 'cat-ear-hood',
    image: '/images/items/cat-ear-hood.png',
    name: 'Cat-Ear Hood',
    type: 'Accessory',
    icon: '🐱',
    grantedSkill: {
      name: 'Quick Impetus',
      cost: '3 PP',
      description: 'Triggered when an ally completes a charged active skill: Immediately grants +100% Turn Bar to that ally and refunds 1 AP.'
    },
    statBoosts: 'Phys Def +2, Mag Def +5, PP +1',
    acquisition: 'Divine Shard Shop (30 Divine Shards) at Heaven\'s Haven Trader',
    isMetaCore: true,
    metaSquads: ['Dragoon Dive Turn-1 Wipe', 'Double Trinity Rain', 'Glacial Rain Instant Wipe']
  },
  {
    id: 'dragoons-war-spear',
    image: '/images/items/dragoons-war-spear.png',
    name: 'Dragoon\'s War Spear',
    type: 'Weapon',
    icon: '🔱',
    grantedSkill: {
      name: 'Dragoon Dive',
      cost: '4 AP',
      description: 'Charged Skill: Takes 1 turn to prepare, then leaps into the air and crashes down dealing 220 physical potency to all enemies.'
    },
    statBoosts: 'Phys Atk +24, Initiative +5',
    acquisition: 'Drakenhold Region Quest: "The Dragon Rider\'s Treasure"',
    isMetaCore: true,
    metaSquads: ['Dragoon Dive Turn-1 Wipe']
  },
  {
    id: 'millennium-scepter',
    image: '/images/items/millennium-scepter.png',
    name: 'Millennium Scepter',
    type: 'Weapon',
    icon: '🔮',
    grantedSkill: {
      name: 'Trinity Rain',
      cost: '4 AP',
      description: 'Charged Skill: Summons 3 waves of magic rain dealing 210 total potency across all enemy units.'
    },
    statBoosts: 'Mag Atk +25, Mag Def +8',
    acquisition: 'Divine Shard Shop (30 Divine Shards)',
    isMetaCore: true,
    metaSquads: ['Double Trinity Rain', 'Heavy Durability Glacial Rain']
  },
  {
    id: 'snipers-amber-lens',
    image: '/images/items/snipers-amber-lens.png',
    name: 'Sniper\'s Amber Lens',
    type: 'Accessory',
    icon: '🔍',
    grantedSkill: {
      name: 'Eagle Eye',
      cost: '2 PP',
      description: 'Grants Guaranteed Critical Hit and True Strike (bypasses Evasion and Guard) on next active attack.'
    },
    statBoosts: 'Crit Rate +10%, Crit Damage +20%',
    acquisition: 'Elheim Region Blacksmith / Coliseum Shop',
    isMetaCore: true,
    metaSquads: ['Dragoon Dive Turn-1 Wipe', 'Heavy Durability Glacial Rain']
  },
  {
    id: 'ring-of-the-unicorn',
    image: '/images/items/ring-of-the-unicorn.png',
    name: 'Ring of the Unicorn',
    type: 'Accessory',
    icon: '🦄',
    grantedSkill: {
      name: 'Unicorn\'s Grace',
      cost: '1 PP',
      description: 'Immunizes wearer to all status afflictions and debuffs.'
    },
    statBoosts: 'All Stats +5, AP +1, PP +1',
    acquisition: 'Main Story Quest: Alain Ring Ceremony',
    isMetaCore: true,
    metaSquads: ['Alain & Scarlett Undefeatable Ace', 'Triple Cavalry Steamroller']
  },
  {
    id: 'ring-of-the-maiden',
    image: '/images/items/ring-of-the-maiden.png',
    name: 'Ring of the Maiden',
    type: 'Accessory',
    icon: '💍',
    grantedSkill: {
      name: 'Maiden\'s Protection',
      cost: '1 PP',
      isStartOfBattle: true,
      description: 'Grants a row-wide immunity barrier against physical and magic status effects at battle start.'
    },
    statBoosts: 'Mag Def +10, AP +1, PP +1',
    acquisition: 'Main Story Quest: Covenant Maiden Choice',
    isMetaCore: true,
    metaSquads: ['Alain & Scarlett Undefeatable Ace', 'Double Trinity Rain']
  },
  {
    id: 'lapis-pendant',
    image: '/images/items/lapis-pendant.png',
    name: 'Lapis Pendant',
    type: 'Accessory',
    icon: '💎',
    statBoosts: 'PP +1',
    acquisition: 'General Armorer towns in Cornia / Drakenhold',
    isMetaCore: true,
    metaSquads: ['Dragoon Dive Turn-1 Wipe', 'Berengaria Affliction Lock', 'Double Trinity Rain']
  },
  {
    id: 'carnelian-pendant',
    image: '/images/items/carnelian-pendant.png',
    name: 'Carnelian Pendant',
    type: 'Accessory',
    icon: '🔴',
    statBoosts: 'AP +1',
    acquisition: 'General Armorer towns in Cornia / Drakenhold',
    isMetaCore: true,
    metaSquads: ['Alain & Scarlett Undefeatable Ace', 'Triple Cavalry Steamroller']
  },
  {
    id: 'sandstorm-staff',
    image: '/images/items/sandstorm-staff.png',
    name: 'Sandstorm Staff',
    type: 'Weapon',
    icon: '📜',
    grantedSkill: {
      name: 'Sandstorm',
      cost: '2 PP',
      isStartOfBattle: true,
      description: 'Start of Battle: Inflicts Blindness on all enemy units, causing their first attack to miss.'
    },
    statBoosts: 'Mag Atk +18, Initiative +4',
    acquisition: 'Bastorias Region Hidden Treasure Map',
    isMetaCore: true,
    metaSquads: ['Berengaria Affliction Lock']
  },
  {
    id: 'banishment-ring',
    image: '/images/items/banishment-ring.png',
    name: 'Banishment Ring',
    type: 'Accessory',
    icon: '⭕',
    grantedSkill: {
      name: 'PP Drain',
      cost: '1 AP',
      description: 'Seals enemy Passive Points for 2 turns.'
    },
    statBoosts: 'Initiative +8, Evasion +10',
    acquisition: 'Coliseum Coin Exchange',
    isMetaCore: false,
    metaSquads: ['Coliseum Counter Anti-Meta']
  },
  {
  "id": "adept-s-shortspear",
  "image": "/images/items/adept-s-shortspear.png",
  "name": "Adept's Shortspear",
  "type": "Weapon",
  "icon": "⚔️",
  "statBoosts": "Phys Atk +18, Initiative +2",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "alminster",
  "image": "/images/items/alminster.png",
  "name": "Alminster",
  "type": "Weapon",
  "icon": "⚔️",
  "statBoosts": "Phys Atk +18, Initiative +2",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "apeliotes-s-bow",
  "image": "/images/items/apeliotes-s-bow.png",
  "name": "Apeliotes's Bow",
  "type": "Weapon",
  "icon": "⚔️",
  "statBoosts": "Phys Atk +18, Initiative +2",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "astral-pike",
  "image": "/images/items/astral-pike.png",
  "name": "Astral Pike",
  "type": "Weapon",
  "icon": "⚔️",
  "statBoosts": "Phys Atk +18, Initiative +2",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "bandit-longsword",
  "image": "/images/items/bandit-longsword.png",
  "name": "Bandit Longsword",
  "type": "Weapon",
  "icon": "⚔️",
  "statBoosts": "Phys Atk +18, Initiative +2",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "bandit-s-handaxe",
  "image": "/images/items/bandit-s-handaxe.png",
  "name": "Bandit's Handaxe",
  "type": "Weapon",
  "icon": "⚔️",
  "statBoosts": "Phys Atk +18, Initiative +2",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "banishing-hammer",
  "image": "/images/items/banishing-hammer.png",
  "name": "Banishing Hammer",
  "type": "Weapon",
  "icon": "⚔️",
  "statBoosts": "Phys Atk +18, Initiative +2",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "barbarian-s-axe",
  "image": "/images/items/barbarian-s-axe.png",
  "name": "Barbarian's Axe",
  "type": "Weapon",
  "icon": "⚔️",
  "statBoosts": "Phys Atk +18, Initiative +2",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "barbarian-s-might",
  "image": "/images/items/barbarian-s-might.png",
  "name": "Barbarian's Might",
  "type": "Weapon",
  "icon": "⚔️",
  "statBoosts": "Phys Atk +18, Initiative +2",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "baroque-axe",
  "image": "/images/items/baroque-axe.png",
  "name": "Baroque Axe",
  "type": "Weapon",
  "icon": "⚔️",
  "statBoosts": "Phys Atk +18, Initiative +2",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "baroque-bow",
  "image": "/images/items/baroque-bow.png",
  "name": "Baroque Bow",
  "type": "Weapon",
  "icon": "⚔️",
  "statBoosts": "Phys Atk +18, Initiative +2",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "baroque-rod",
  "image": "/images/items/baroque-rod.png",
  "name": "Baroque Rod",
  "type": "Weapon",
  "icon": "⚔️",
  "statBoosts": "Phys Atk +18, Initiative +2",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "baroque-spear",
  "image": "/images/items/baroque-spear.png",
  "name": "Baroque Spear",
  "type": "Weapon",
  "icon": "⚔️",
  "statBoosts": "Phys Atk +18, Initiative +2",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "baroque-sword",
  "image": "/images/items/baroque-sword.png",
  "name": "Baroque Sword",
  "type": "Weapon",
  "icon": "⚔️",
  "statBoosts": "Phys Atk +18, Initiative +2",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "berserker-s-battleaxe",
  "image": "/images/items/berserker-s-battleaxe.png",
  "name": "Berserker's Battleaxe",
  "type": "Weapon",
  "icon": "⚔️",
  "statBoosts": "Phys Atk +18, Initiative +2",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "black-axe-of-the-abyss",
  "image": "/images/items/black-axe-of-the-abyss.png",
  "name": "Black Axe of the Abyss",
  "type": "Weapon",
  "icon": "⚔️",
  "statBoosts": "Phys Atk +18, Initiative +2",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "black-iron-axe",
  "image": "/images/items/black-iron-axe.png",
  "name": "Black-Iron Axe",
  "type": "Weapon",
  "icon": "⚔️",
  "statBoosts": "Phys Atk +18, Initiative +2",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "black-iron-bow",
  "image": "/images/items/black-iron-bow.png",
  "name": "Black-Iron Bow",
  "type": "Weapon",
  "icon": "⚔️",
  "statBoosts": "Phys Atk +18, Initiative +2",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "black-iron-spear",
  "image": "/images/items/black-iron-spear.png",
  "name": "Black-Iron Spear",
  "type": "Weapon",
  "icon": "⚔️",
  "statBoosts": "Phys Atk +18, Initiative +2",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "black-iron-staff",
  "image": "/images/items/black-iron-staff.png",
  "name": "Black-Iron Staff",
  "type": "Weapon",
  "icon": "⚔️",
  "statBoosts": "Phys Atk +18, Initiative +2",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "black-iron-sword",
  "image": "/images/items/black-iron-sword.png",
  "name": "Black-Iron Sword",
  "type": "Weapon",
  "icon": "⚔️",
  "statBoosts": "Phys Atk +18, Initiative +2",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "bloodmoon-rod",
  "image": "/images/items/bloodmoon-rod.png",
  "name": "Bloodmoon Rod",
  "type": "Weapon",
  "icon": "⚔️",
  "statBoosts": "Phys Atk +18, Initiative +2",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "bloody-spear",
  "image": "/images/items/bloody-spear.png",
  "name": "Bloody Spear",
  "type": "Weapon",
  "icon": "⚔️",
  "statBoosts": "Phys Atk +18, Initiative +2",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "blue-rose",
  "image": "/images/items/blue-rose.png",
  "name": "Blue Rose",
  "type": "Weapon",
  "icon": "⚔️",
  "statBoosts": "Phys Atk +18, Initiative +2",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "boreas-s-axe",
  "image": "/images/items/boreas-s-axe.png",
  "name": "Boreas's Axe",
  "type": "Weapon",
  "icon": "⚔️",
  "statBoosts": "Phys Atk +18, Initiative +2",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "bow-of-swiftness",
  "image": "/images/items/bow-of-swiftness.png",
  "name": "Bow of Swiftness",
  "type": "Weapon",
  "icon": "⚔️",
  "statBoosts": "Phys Atk +18, Initiative +2",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "bronze-axe",
  "image": "/images/items/bronze-axe.png",
  "name": "Bronze Axe",
  "type": "Weapon",
  "icon": "⚔️",
  "statBoosts": "Phys Atk +18, Initiative +2",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "bronze-bow",
  "image": "/images/items/bronze-bow.png",
  "name": "Bronze Bow",
  "type": "Weapon",
  "icon": "⚔️",
  "statBoosts": "Phys Atk +18, Initiative +2",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "bronze-spear",
  "image": "/images/items/bronze-spear.png",
  "name": "Bronze Spear",
  "type": "Weapon",
  "icon": "⚔️",
  "statBoosts": "Phys Atk +18, Initiative +2",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "bronze-staff",
  "image": "/images/items/bronze-staff.png",
  "name": "Bronze Staff",
  "type": "Weapon",
  "icon": "⚔️",
  "statBoosts": "Phys Atk +18, Initiative +2",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "bronze-sword",
  "image": "/images/items/bronze-sword.png",
  "name": "Bronze Sword",
  "type": "Weapon",
  "icon": "⚔️",
  "statBoosts": "Phys Atk +18, Initiative +2",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "canyon-lance",
  "image": "/images/items/canyon-lance.png",
  "name": "Canyon Lance",
  "type": "Weapon",
  "icon": "⚔️",
  "statBoosts": "Phys Atk +18, Initiative +2",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "cardinal-s-mace",
  "image": "/images/items/cardinal-s-mace.png",
  "name": "Cardinal's Mace",
  "type": "Weapon",
  "icon": "⚔️",
  "statBoosts": "Phys Atk +18, Initiative +2",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "carnat-axe",
  "image": "/images/items/carnat-axe.png",
  "name": "Carnat Axe",
  "type": "Weapon",
  "icon": "⚔️",
  "statBoosts": "Phys Atk +18, Initiative +2",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "carnat-bow",
  "image": "/images/items/carnat-bow.png",
  "name": "Carnat Bow",
  "type": "Weapon",
  "icon": "⚔️",
  "statBoosts": "Phys Atk +18, Initiative +2",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "carnat-rod",
  "image": "/images/items/carnat-rod.png",
  "name": "Carnat Rod",
  "type": "Weapon",
  "icon": "⚔️",
  "statBoosts": "Phys Atk +18, Initiative +2",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "carnat-spear",
  "image": "/images/items/carnat-spear.png",
  "name": "Carnat Spear",
  "type": "Weapon",
  "icon": "⚔️",
  "statBoosts": "Phys Atk +18, Initiative +2",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "carnat-sword",
  "image": "/images/items/carnat-sword.png",
  "name": "Carnat Sword",
  "type": "Weapon",
  "icon": "⚔️",
  "statBoosts": "Phys Atk +18, Initiative +2",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "carnelian-axe",
  "image": "/images/items/carnelian-axe.png",
  "name": "Carnelian Axe",
  "type": "Weapon",
  "icon": "⚔️",
  "statBoosts": "Phys Atk +18, Initiative +2",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "carnelian-blade",
  "image": "/images/items/carnelian-blade.png",
  "name": "Carnelian Blade",
  "type": "Weapon",
  "icon": "⚔️",
  "statBoosts": "Phys Atk +18, Initiative +2",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "carnelian-bow",
  "image": "/images/items/carnelian-bow.png",
  "name": "Carnelian Bow",
  "type": "Weapon",
  "icon": "⚔️",
  "statBoosts": "Phys Atk +18, Initiative +2",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "carnelian-spear",
  "image": "/images/items/carnelian-spear.png",
  "name": "Carnelian Spear",
  "type": "Weapon",
  "icon": "⚔️",
  "statBoosts": "Phys Atk +18, Initiative +2",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "carnelian-staff",
  "image": "/images/items/carnelian-staff.png",
  "name": "Carnelian Staff",
  "type": "Weapon",
  "icon": "⚔️",
  "statBoosts": "Phys Atk +18, Initiative +2",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "chiropteran-staff",
  "image": "/images/items/chiropteran-staff.png",
  "name": "Chiropteran Staff",
  "type": "Weapon",
  "icon": "⚔️",
  "statBoosts": "Phys Atk +18, Initiative +2",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "chlorotic",
  "image": "/images/items/chlorotic.png",
  "name": "Chlorotic",
  "type": "Weapon",
  "icon": "⚔️",
  "statBoosts": "Phys Atk +18, Initiative +2",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "cleric-s-cane",
  "image": "/images/items/cleric-s-cane.png",
  "name": "Cleric's Cane",
  "type": "Weapon",
  "icon": "⚔️",
  "statBoosts": "Phys Atk +18, Initiative +2",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "corroded-spear",
  "image": "/images/items/corroded-spear.png",
  "name": "Corroded Spear",
  "type": "Weapon",
  "icon": "⚔️",
  "statBoosts": "Phys Atk +18, Initiative +2",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "crane-bow",
  "image": "/images/items/crane-bow.png",
  "name": "Crane Bow",
  "type": "Weapon",
  "icon": "⚔️",
  "statBoosts": "Phys Atk +18, Initiative +2",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "crimson-sarissa",
  "image": "/images/items/crimson-sarissa.png",
  "name": "Crimson Sarissa",
  "type": "Weapon",
  "icon": "⚔️",
  "statBoosts": "Phys Atk +18, Initiative +2",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "crimson-p-e",
  "image": "/images/items/crimson-p-e.png",
  "name": "Crimson Épée",
  "type": "Weapon",
  "icon": "⚔️",
  "statBoosts": "Phys Atk +18, Initiative +2",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "crushing-axe",
  "image": "/images/items/crushing-axe.png",
  "name": "Crushing Axe",
  "type": "Weapon",
  "icon": "⚔️",
  "statBoosts": "Phys Atk +18, Initiative +2",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "cursed-axe-of-the-abyss",
  "image": "/images/items/cursed-axe-of-the-abyss.png",
  "name": "Cursed Axe of the Abyss",
  "type": "Weapon",
  "icon": "⚔️",
  "statBoosts": "Phys Atk +18, Initiative +2",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "cursed-blade-of-the-abyss",
  "image": "/images/items/cursed-blade-of-the-abyss.png",
  "name": "Cursed Blade of the Abyss",
  "type": "Weapon",
  "icon": "⚔️",
  "statBoosts": "Phys Atk +18, Initiative +2",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "cursed-lance-of-the-abyss",
  "image": "/images/items/cursed-lance-of-the-abyss.png",
  "name": "Cursed Lance of the Abyss",
  "type": "Weapon",
  "icon": "⚔️",
  "statBoosts": "Phys Atk +18, Initiative +2",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "cursed-staff-of-the-abyss",
  "image": "/images/items/cursed-staff-of-the-abyss.png",
  "name": "Cursed Staff of the Abyss",
  "type": "Weapon",
  "icon": "⚔️",
  "statBoosts": "Phys Atk +18, Initiative +2",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "cutthroat-s-boon",
  "image": "/images/items/cutthroat-s-boon.png",
  "name": "Cutthroat's Boon",
  "type": "Weapon",
  "icon": "⚔️",
  "statBoosts": "Phys Atk +18, Initiative +2",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "dancer-s-delight",
  "image": "/images/items/dancer-s-delight.png",
  "name": "Dancer's Delight",
  "type": "Weapon",
  "icon": "⚔️",
  "statBoosts": "Phys Atk +18, Initiative +2",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "dark-knight-cleaver",
  "image": "/images/items/dark-knight-cleaver.png",
  "name": "Dark Knight Cleaver",
  "type": "Weapon",
  "icon": "⚔️",
  "statBoosts": "Phys Atk +18, Initiative +2",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "death-pillar",
  "image": "/images/items/death-pillar.png",
  "name": "Death Pillar",
  "type": "Weapon",
  "icon": "⚔️",
  "statBoosts": "Phys Atk +18, Initiative +2",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "defender-s-mace",
  "image": "/images/items/defender-s-mace.png",
  "name": "Defender's Mace",
  "type": "Weapon",
  "icon": "⚔️",
  "statBoosts": "Phys Atk +18, Initiative +2",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "desert-bow",
  "image": "/images/items/desert-bow.png",
  "name": "Desert Bow",
  "type": "Weapon",
  "icon": "⚔️",
  "statBoosts": "Phys Atk +18, Initiative +2",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "dragonbone-axe",
  "image": "/images/items/dragonbone-axe.png",
  "name": "Dragonbone Axe",
  "type": "Weapon",
  "icon": "⚔️",
  "statBoosts": "Phys Atk +18, Initiative +2",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "dragonbone-blade",
  "image": "/images/items/dragonbone-blade.png",
  "name": "Dragonbone Blade",
  "type": "Weapon",
  "icon": "⚔️",
  "statBoosts": "Phys Atk +18, Initiative +2",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "dragonbone-bow",
  "image": "/images/items/dragonbone-bow.png",
  "name": "Dragonbone Bow",
  "type": "Weapon",
  "icon": "⚔️",
  "statBoosts": "Phys Atk +18, Initiative +2",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "dragonbone-spear",
  "image": "/images/items/dragonbone-spear.png",
  "name": "Dragonbone Spear",
  "type": "Weapon",
  "icon": "⚔️",
  "statBoosts": "Phys Atk +18, Initiative +2",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "dragonbone-staff",
  "image": "/images/items/dragonbone-staff.png",
  "name": "Dragonbone Staff",
  "type": "Weapon",
  "icon": "⚔️",
  "statBoosts": "Phys Atk +18, Initiative +2",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "dragoon-s-warspear",
  "image": "/images/items/dragoon-s-warspear.png",
  "name": "Dragoon's Warspear",
  "type": "Weapon",
  "icon": "⚔️",
  "statBoosts": "Phys Atk +18, Initiative +2",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "dustbound-staff",
  "image": "/images/items/dustbound-staff.png",
  "name": "Dustbound Staff",
  "type": "Weapon",
  "icon": "⚔️",
  "statBoosts": "Phys Atk +18, Initiative +2",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "ein-seeker",
  "image": "/images/items/ein-seeker.png",
  "name": "Ein Seeker",
  "type": "Weapon",
  "icon": "⚔️",
  "statBoosts": "Phys Atk +18, Initiative +2",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "elfeater",
  "image": "/images/items/elfeater.png",
  "name": "Elfeater",
  "type": "Weapon",
  "icon": "⚔️",
  "statBoosts": "Phys Atk +18, Initiative +2",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "eliminator",
  "image": "/images/items/eliminator.png",
  "name": "Eliminator",
  "type": "Weapon",
  "icon": "⚔️",
  "statBoosts": "Phys Atk +18, Initiative +2",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "euros-s-staff",
  "image": "/images/items/euros-s-staff.png",
  "name": "Euros's Staff",
  "type": "Weapon",
  "icon": "⚔️",
  "statBoosts": "Phys Atk +18, Initiative +2",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "flamberge",
  "image": "/images/items/flamberge.png",
  "name": "Flamberge",
  "type": "Weapon",
  "icon": "⚔️",
  "statBoosts": "Phys Atk +18, Initiative +2",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "flame-bow",
  "image": "/images/items/flame-bow.png",
  "name": "Flame Bow",
  "type": "Weapon",
  "icon": "⚔️",
  "statBoosts": "Phys Atk +18, Initiative +2",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "flame-javelin",
  "image": "/images/items/flame-javelin.png",
  "name": "Flame Javelin",
  "type": "Weapon",
  "icon": "⚔️",
  "statBoosts": "Phys Atk +18, Initiative +2",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "flame-hex-staff",
  "image": "/images/items/flame-hex-staff.png",
  "name": "Flame-Hex Staff",
  "type": "Weapon",
  "icon": "⚔️",
  "statBoosts": "Phys Atk +18, Initiative +2",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "frostbloom-bow",
  "image": "/images/items/frostbloom-bow.png",
  "name": "Frostbloom Bow",
  "type": "Weapon",
  "icon": "⚔️",
  "statBoosts": "Phys Atk +18, Initiative +2",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "frozen-battleaxe",
  "image": "/images/items/frozen-battleaxe.png",
  "name": "Frozen Battleaxe",
  "type": "Weapon",
  "icon": "⚔️",
  "statBoosts": "Phys Atk +18, Initiative +2",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "galecutter",
  "image": "/images/items/galecutter.png",
  "name": "Galecutter",
  "type": "Weapon",
  "icon": "⚔️",
  "statBoosts": "Phys Atk +18, Initiative +2",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "gallian-crossbow",
  "image": "/images/items/gallian-crossbow.png",
  "name": "Gallian Crossbow",
  "type": "Weapon",
  "icon": "⚔️",
  "statBoosts": "Phys Atk +18, Initiative +2",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "general-s-longbow",
  "image": "/images/items/general-s-longbow.png",
  "name": "General's Longbow",
  "type": "Weapon",
  "icon": "⚔️",
  "statBoosts": "Phys Atk +18, Initiative +2",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "general-s-pike",
  "image": "/images/items/general-s-pike.png",
  "name": "General's Pike",
  "type": "Weapon",
  "icon": "⚔️",
  "statBoosts": "Phys Atk +18, Initiative +2",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "giant-s-greataxe",
  "image": "/images/items/giant-s-greataxe.png",
  "name": "Giant's Greataxe",
  "type": "Weapon",
  "icon": "⚔️",
  "statBoosts": "Phys Atk +18, Initiative +2",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "glaive",
  "image": "/images/items/glaive.png",
  "name": "Glaive",
  "type": "Weapon",
  "icon": "⚔️",
  "statBoosts": "Phys Atk +18, Initiative +2",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "gleaming-mace",
  "image": "/images/items/gleaming-mace.png",
  "name": "Gleaming Mace",
  "type": "Weapon",
  "icon": "⚔️",
  "statBoosts": "Phys Atk +18, Initiative +2",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "golden-ram-axe",
  "image": "/images/items/golden-ram-axe.png",
  "name": "Golden Ram Axe",
  "type": "Weapon",
  "icon": "⚔️",
  "statBoosts": "Phys Atk +18, Initiative +2",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "grand-magus-staff",
  "image": "/images/items/grand-magus-staff.png",
  "name": "Grand Magus Staff",
  "type": "Weapon",
  "icon": "⚔️",
  "statBoosts": "Phys Atk +18, Initiative +2",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "greatsword",
  "image": "/images/items/greatsword.png",
  "name": "Greatsword",
  "type": "Weapon",
  "icon": "⚔️",
  "statBoosts": "Phys Atk +18, Initiative +2",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "greatsword-of-the-abyss",
  "image": "/images/items/greatsword-of-the-abyss.png",
  "name": "Greatsword of the Abyss",
  "type": "Weapon",
  "icon": "⚔️",
  "statBoosts": "Phys Atk +18, Initiative +2",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "greatwood-axe",
  "image": "/images/items/greatwood-axe.png",
  "name": "Greatwood Axe",
  "type": "Weapon",
  "icon": "⚔️",
  "statBoosts": "Phys Atk +18, Initiative +2",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "greatwood-bow",
  "image": "/images/items/greatwood-bow.png",
  "name": "Greatwood Bow",
  "type": "Weapon",
  "icon": "⚔️",
  "statBoosts": "Phys Atk +18, Initiative +2",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "greatwood-spear",
  "image": "/images/items/greatwood-spear.png",
  "name": "Greatwood Spear",
  "type": "Weapon",
  "icon": "⚔️",
  "statBoosts": "Phys Atk +18, Initiative +2",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "greatwood-spiritbow",
  "image": "/images/items/greatwood-spiritbow.png",
  "name": "Greatwood Spiritbow",
  "type": "Weapon",
  "icon": "⚔️",
  "statBoosts": "Phys Atk +18, Initiative +2",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "greatwood-staff",
  "image": "/images/items/greatwood-staff.png",
  "name": "Greatwood Staff",
  "type": "Weapon",
  "icon": "⚔️",
  "statBoosts": "Phys Atk +18, Initiative +2",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "greatwood-sword",
  "image": "/images/items/greatwood-sword.png",
  "name": "Greatwood Sword",
  "type": "Weapon",
  "icon": "⚔️",
  "statBoosts": "Phys Atk +18, Initiative +2",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "hailstorm-edge",
  "image": "/images/items/hailstorm-edge.png",
  "name": "Hailstorm Edge",
  "type": "Weapon",
  "icon": "⚔️",
  "statBoosts": "Phys Atk +18, Initiative +2",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "hallowed-blade",
  "image": "/images/items/hallowed-blade.png",
  "name": "Hallowed Blade",
  "type": "Weapon",
  "icon": "⚔️",
  "statBoosts": "Phys Atk +18, Initiative +2",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "hallowed-mace",
  "image": "/images/items/hallowed-mace.png",
  "name": "Hallowed Mace",
  "type": "Weapon",
  "icon": "⚔️",
  "statBoosts": "Phys Atk +18, Initiative +2",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "headsman-s-axe",
  "image": "/images/items/headsman-s-axe.png",
  "name": "Headsman's Axe",
  "type": "Weapon",
  "icon": "⚔️",
  "statBoosts": "Phys Atk +18, Initiative +2",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "heavenswing-staff",
  "image": "/images/items/heavenswing-staff.png",
  "name": "Heavenswing Staff",
  "type": "Weapon",
  "icon": "⚔️",
  "statBoosts": "Phys Atk +18, Initiative +2",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "heavenswing-sword",
  "image": "/images/items/heavenswing-sword.png",
  "name": "Heavenswing Sword",
  "type": "Weapon",
  "icon": "⚔️",
  "statBoosts": "Phys Atk +18, Initiative +2",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "helix-spear",
  "image": "/images/items/helix-spear.png",
  "name": "Helix Spear",
  "type": "Weapon",
  "icon": "⚔️",
  "statBoosts": "Phys Atk +18, Initiative +2",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "helleborus-axe",
  "image": "/images/items/helleborus-axe.png",
  "name": "Helleborus Axe",
  "type": "Weapon",
  "icon": "⚔️",
  "statBoosts": "Phys Atk +18, Initiative +2",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "hoarfrost-axe",
  "image": "/images/items/hoarfrost-axe.png",
  "name": "Hoarfrost Axe",
  "type": "Weapon",
  "icon": "⚔️",
  "statBoosts": "Phys Atk +18, Initiative +2",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "holy-unicorn-blade",
  "image": "/images/items/holy-unicorn-blade.png",
  "name": "Holy Unicorn Blade",
  "type": "Weapon",
  "icon": "⚔️",
  "statBoosts": "Phys Atk +18, Initiative +2",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "hunter-s-claymore",
  "image": "/images/items/hunter-s-claymore.png",
  "name": "Hunter's Claymore",
  "type": "Weapon",
  "icon": "⚔️",
  "statBoosts": "Phys Atk +18, Initiative +2",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "hunter-s-halberd",
  "image": "/images/items/hunter-s-halberd.png",
  "name": "Hunter's Halberd",
  "type": "Weapon",
  "icon": "⚔️",
  "statBoosts": "Phys Atk +18, Initiative +2",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "icefall-axe",
  "image": "/images/items/icefall-axe.png",
  "name": "Icefall Axe",
  "type": "Weapon",
  "icon": "⚔️",
  "statBoosts": "Phys Atk +18, Initiative +2",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "icefall-blade",
  "image": "/images/items/icefall-blade.png",
  "name": "Icefall Blade",
  "type": "Weapon",
  "icon": "⚔️",
  "statBoosts": "Phys Atk +18, Initiative +2",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "icefall-bow",
  "image": "/images/items/icefall-bow.png",
  "name": "Icefall Bow",
  "type": "Weapon",
  "icon": "⚔️",
  "statBoosts": "Phys Atk +18, Initiative +2",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "icefall-spear",
  "image": "/images/items/icefall-spear.png",
  "name": "Icefall Spear",
  "type": "Weapon",
  "icon": "⚔️",
  "statBoosts": "Phys Atk +18, Initiative +2",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "icefall-staff",
  "image": "/images/items/icefall-staff.png",
  "name": "Icefall Staff",
  "type": "Weapon",
  "icon": "⚔️",
  "statBoosts": "Phys Atk +18, Initiative +2",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "icestorm-staff",
  "image": "/images/items/icestorm-staff.png",
  "name": "Icestorm Staff",
  "type": "Weapon",
  "icon": "⚔️",
  "statBoosts": "Phys Atk +18, Initiative +2",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "infamous-bow",
  "image": "/images/items/infamous-bow.png",
  "name": "Infamous Bow",
  "type": "Weapon",
  "icon": "⚔️",
  "statBoosts": "Phys Atk +18, Initiative +2",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "interrogator-s-bow",
  "image": "/images/items/interrogator-s-bow.png",
  "name": "Interrogator's Bow",
  "type": "Weapon",
  "icon": "⚔️",
  "statBoosts": "Phys Atk +18, Initiative +2",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "iron-axe",
  "image": "/images/items/iron-axe.png",
  "name": "Iron Axe",
  "type": "Weapon",
  "icon": "⚔️",
  "statBoosts": "Phys Atk +18, Initiative +2",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "iron-bow",
  "image": "/images/items/iron-bow.png",
  "name": "Iron Bow",
  "type": "Weapon",
  "icon": "⚔️",
  "statBoosts": "Phys Atk +18, Initiative +2",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "iron-spear",
  "image": "/images/items/iron-spear.png",
  "name": "Iron Spear",
  "type": "Weapon",
  "icon": "⚔️",
  "statBoosts": "Phys Atk +18, Initiative +2",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "iron-staff",
  "image": "/images/items/iron-staff.png",
  "name": "Iron Staff",
  "type": "Weapon",
  "icon": "⚔️",
  "statBoosts": "Phys Atk +18, Initiative +2",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "iron-sword",
  "image": "/images/items/iron-sword.png",
  "name": "Iron Sword",
  "type": "Weapon",
  "icon": "⚔️",
  "statBoosts": "Phys Atk +18, Initiative +2",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "juggernaut",
  "image": "/images/items/juggernaut.png",
  "name": "Juggernaut",
  "type": "Weapon",
  "icon": "⚔️",
  "statBoosts": "Phys Atk +18, Initiative +2",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "kingsaxe-drakenash",
  "image": "/images/items/kingsaxe-drakenash.png",
  "name": "Kingsaxe Drakenash",
  "type": "Weapon",
  "icon": "⚔️",
  "statBoosts": "Phys Atk +18, Initiative +2",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "kingsblade-cornix",
  "image": "/images/items/kingsblade-cornix.png",
  "name": "Kingsblade Cornix",
  "type": "Weapon",
  "icon": "⚔️",
  "statBoosts": "Phys Atk +18, Initiative +2",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "kingsbow-bastorik",
  "image": "/images/items/kingsbow-bastorik.png",
  "name": "Kingsbow Bastorik",
  "type": "Weapon",
  "icon": "⚔️",
  "statBoosts": "Phys Atk +18, Initiative +2",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "kingslance-elhal",
  "image": "/images/items/kingslance-elhal.png",
  "name": "Kingslance Elhal",
  "type": "Weapon",
  "icon": "⚔️",
  "statBoosts": "Phys Atk +18, Initiative +2",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "kingstaff-albiore",
  "image": "/images/items/kingstaff-albiore.png",
  "name": "Kingstaff Albiore",
  "type": "Weapon",
  "icon": "⚔️",
  "statBoosts": "Phys Atk +18, Initiative +2",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "knot-of-ruin",
  "image": "/images/items/knot-of-ruin.png",
  "name": "Knot of Ruin",
  "type": "Weapon",
  "icon": "⚔️",
  "statBoosts": "Phys Atk +18, Initiative +2",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "labrys",
  "image": "/images/items/labrys.png",
  "name": "Labrys",
  "type": "Weapon",
  "icon": "⚔️",
  "statBoosts": "Phys Atk +18, Initiative +2",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "lance-of-devotion",
  "image": "/images/items/lance-of-devotion.png",
  "name": "Lance of Devotion",
  "type": "Weapon",
  "icon": "⚔️",
  "statBoosts": "Phys Atk +18, Initiative +2",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "libera",
  "image": "/images/items/libera.png",
  "name": "Libera",
  "type": "Weapon",
  "icon": "⚔️",
  "statBoosts": "Phys Atk +18, Initiative +2",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "liberator-s-staff",
  "image": "/images/items/liberator-s-staff.png",
  "name": "Liberator's Staff",
  "type": "Weapon",
  "icon": "⚔️",
  "statBoosts": "Phys Atk +18, Initiative +2",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "lifeblood-staff",
  "image": "/images/items/lifeblood-staff.png",
  "name": "Lifeblood Staff",
  "type": "Weapon",
  "icon": "⚔️",
  "statBoosts": "Phys Atk +18, Initiative +2",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "lupinus-staff",
  "image": "/images/items/lupinus-staff.png",
  "name": "Lupinus Staff",
  "type": "Weapon",
  "icon": "⚔️",
  "statBoosts": "Phys Atk +18, Initiative +2",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "lyrical-wand",
  "image": "/images/items/lyrical-wand.png",
  "name": "Lyrical Wand",
  "type": "Weapon",
  "icon": "⚔️",
  "statBoosts": "Phys Atk +18, Initiative +2",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "magebane-bow",
  "image": "/images/items/magebane-bow.png",
  "name": "Magebane Bow",
  "type": "Weapon",
  "icon": "⚔️",
  "statBoosts": "Phys Atk +18, Initiative +2",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "mason-s-hammer",
  "image": "/images/items/mason-s-hammer.png",
  "name": "Mason's Hammer",
  "type": "Weapon",
  "icon": "⚔️",
  "statBoosts": "Phys Atk +18, Initiative +2",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "meteorite-axe",
  "image": "/images/items/meteorite-axe.png",
  "name": "Meteorite Axe",
  "type": "Weapon",
  "icon": "⚔️",
  "statBoosts": "Phys Atk +18, Initiative +2",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "meteorite-bow",
  "image": "/images/items/meteorite-bow.png",
  "name": "Meteorite Bow",
  "type": "Weapon",
  "icon": "⚔️",
  "statBoosts": "Phys Atk +18, Initiative +2",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "meteorite-lance",
  "image": "/images/items/meteorite-lance.png",
  "name": "Meteorite Lance",
  "type": "Weapon",
  "icon": "⚔️",
  "statBoosts": "Phys Atk +18, Initiative +2",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "meteorite-rod",
  "image": "/images/items/meteorite-rod.png",
  "name": "Meteorite Rod",
  "type": "Weapon",
  "icon": "⚔️",
  "statBoosts": "Phys Atk +18, Initiative +2",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "meteorite-sword",
  "image": "/images/items/meteorite-sword.png",
  "name": "Meteorite Sword",
  "type": "Weapon",
  "icon": "⚔️",
  "statBoosts": "Phys Atk +18, Initiative +2",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "millenium-scepter",
  "image": "/images/items/millenium-scepter.png",
  "name": "Millenium Scepter",
  "type": "Weapon",
  "icon": "⚔️",
  "statBoosts": "Phys Atk +18, Initiative +2",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "mist-scimitar",
  "image": "/images/items/mist-scimitar.png",
  "name": "Mist Scimitar",
  "type": "Weapon",
  "icon": "⚔️",
  "statBoosts": "Phys Atk +18, Initiative +2",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "moonlight-rapier",
  "image": "/images/items/moonlight-rapier.png",
  "name": "Moonlight Rapier",
  "type": "Weapon",
  "icon": "⚔️",
  "statBoosts": "Phys Atk +18, Initiative +2",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "morningstar",
  "image": "/images/items/morningstar.png",
  "name": "Morningstar",
  "type": "Weapon",
  "icon": "⚔️",
  "statBoosts": "Phys Atk +18, Initiative +2",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "mother-laelia-s-staff",
  "image": "/images/items/mother-laelia-s-staff.png",
  "name": "Mother Laelia's Staff",
  "type": "Weapon",
  "icon": "⚔️",
  "statBoosts": "Phys Atk +18, Initiative +2",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "nameless-greataxe",
  "image": "/images/items/nameless-greataxe.png",
  "name": "Nameless Greataxe",
  "type": "Weapon",
  "icon": "⚔️",
  "statBoosts": "Phys Atk +18, Initiative +2",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "nameless-greatbow",
  "image": "/images/items/nameless-greatbow.png",
  "name": "Nameless Greatbow",
  "type": "Weapon",
  "icon": "⚔️",
  "statBoosts": "Phys Atk +18, Initiative +2",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "nameless-greatspear",
  "image": "/images/items/nameless-greatspear.png",
  "name": "Nameless Greatspear",
  "type": "Weapon",
  "icon": "⚔️",
  "statBoosts": "Phys Atk +18, Initiative +2",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "nameless-greatstaff",
  "image": "/images/items/nameless-greatstaff.png",
  "name": "Nameless Greatstaff",
  "type": "Weapon",
  "icon": "⚔️",
  "statBoosts": "Phys Atk +18, Initiative +2",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "nameless-greatsword",
  "image": "/images/items/nameless-greatsword.png",
  "name": "Nameless Greatsword",
  "type": "Weapon",
  "icon": "⚔️",
  "statBoosts": "Phys Atk +18, Initiative +2",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "nameless-guard-s-bow",
  "image": "/images/items/nameless-guard-s-bow.png",
  "name": "Nameless Guard's Bow",
  "type": "Weapon",
  "icon": "⚔️",
  "statBoosts": "Phys Atk +18, Initiative +2",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "nameless-guard-s-spear",
  "image": "/images/items/nameless-guard-s-spear.png",
  "name": "Nameless Guard's Spear",
  "type": "Weapon",
  "icon": "⚔️",
  "statBoosts": "Phys Atk +18, Initiative +2",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "notos-s-sword",
  "image": "/images/items/notos-s-sword.png",
  "name": "Notos's Sword",
  "type": "Weapon",
  "icon": "⚔️",
  "statBoosts": "Phys Atk +18, Initiative +2",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "obsidian-axe",
  "image": "/images/items/obsidian-axe.png",
  "name": "Obsidian Axe",
  "type": "Weapon",
  "icon": "⚔️",
  "statBoosts": "Phys Atk +18, Initiative +2",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "obsidian-bow",
  "image": "/images/items/obsidian-bow.png",
  "name": "Obsidian Bow",
  "type": "Weapon",
  "icon": "⚔️",
  "statBoosts": "Phys Atk +18, Initiative +2",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "obsidian-spear",
  "image": "/images/items/obsidian-spear.png",
  "name": "Obsidian Spear",
  "type": "Weapon",
  "icon": "⚔️",
  "statBoosts": "Phys Atk +18, Initiative +2",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "obsidian-staff",
  "image": "/images/items/obsidian-staff.png",
  "name": "Obsidian Staff",
  "type": "Weapon",
  "icon": "⚔️",
  "statBoosts": "Phys Atk +18, Initiative +2",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "obsidian-sword",
  "image": "/images/items/obsidian-sword.png",
  "name": "Obsidian Sword",
  "type": "Weapon",
  "icon": "⚔️",
  "statBoosts": "Phys Atk +18, Initiative +2",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "orchis-spear",
  "image": "/images/items/orchis-spear.png",
  "name": "Orchis Spear",
  "type": "Weapon",
  "icon": "⚔️",
  "statBoosts": "Phys Atk +18, Initiative +2",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "papal-crosier",
  "image": "/images/items/papal-crosier.png",
  "name": "Papal Crosier",
  "type": "Weapon",
  "icon": "⚔️",
  "statBoosts": "Phys Atk +18, Initiative +2",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "pestilent-staff",
  "image": "/images/items/pestilent-staff.png",
  "name": "Pestilent Staff",
  "type": "Weapon",
  "icon": "⚔️",
  "statBoosts": "Phys Atk +18, Initiative +2",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "phantom-knight-s-axe",
  "image": "/images/items/phantom-knight-s-axe.png",
  "name": "Phantom Knight's Axe",
  "type": "Weapon",
  "icon": "⚔️",
  "statBoosts": "Phys Atk +18, Initiative +2",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "phantom-knight-s-bow",
  "image": "/images/items/phantom-knight-s-bow.png",
  "name": "Phantom Knight's Bow",
  "type": "Weapon",
  "icon": "⚔️",
  "statBoosts": "Phys Atk +18, Initiative +2",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "phantom-knight-s-spear",
  "image": "/images/items/phantom-knight-s-spear.png",
  "name": "Phantom Knight's Spear",
  "type": "Weapon",
  "icon": "⚔️",
  "statBoosts": "Phys Atk +18, Initiative +2",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "phantom-knight-s-staff",
  "image": "/images/items/phantom-knight-s-staff.png",
  "name": "Phantom Knight's Staff",
  "type": "Weapon",
  "icon": "⚔️",
  "statBoosts": "Phys Atk +18, Initiative +2",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "phantom-knight-s-sword",
  "image": "/images/items/phantom-knight-s-sword.png",
  "name": "Phantom Knight's Sword",
  "type": "Weapon",
  "icon": "⚔️",
  "statBoosts": "Phys Atk +18, Initiative +2",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "pheasant-bow",
  "image": "/images/items/pheasant-bow.png",
  "name": "Pheasant Bow",
  "type": "Weapon",
  "icon": "⚔️",
  "statBoosts": "Phys Atk +18, Initiative +2",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "phosphorescent-staff",
  "image": "/images/items/phosphorescent-staff.png",
  "name": "Phosphorescent Staff",
  "type": "Weapon",
  "icon": "⚔️",
  "statBoosts": "Phys Atk +18, Initiative +2",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "piercing-bow",
  "image": "/images/items/piercing-bow.png",
  "name": "Piercing Bow",
  "type": "Weapon",
  "icon": "⚔️",
  "statBoosts": "Phys Atk +18, Initiative +2",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "piercing-strongbow",
  "image": "/images/items/piercing-strongbow.png",
  "name": "Piercing Strongbow",
  "type": "Weapon",
  "icon": "⚔️",
  "statBoosts": "Phys Atk +18, Initiative +2",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "poison-hex-staff",
  "image": "/images/items/poison-hex-staff.png",
  "name": "Poison-Hex Staff",
  "type": "Weapon",
  "icon": "⚔️",
  "statBoosts": "Phys Atk +18, Initiative +2",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "precious-rod",
  "image": "/images/items/precious-rod.png",
  "name": "Precious Rod",
  "type": "Weapon",
  "icon": "⚔️",
  "statBoosts": "Phys Atk +18, Initiative +2",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "purifier",
  "image": "/images/items/purifier.png",
  "name": "Purifier",
  "type": "Weapon",
  "icon": "⚔️",
  "statBoosts": "Phys Atk +18, Initiative +2",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "pursuant-s-blade",
  "image": "/images/items/pursuant-s-blade.png",
  "name": "Pursuant's Blade",
  "type": "Weapon",
  "icon": "⚔️",
  "statBoosts": "Phys Atk +18, Initiative +2",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "quartz-rod",
  "image": "/images/items/quartz-rod.png",
  "name": "Quartz Rod",
  "type": "Weapon",
  "icon": "⚔️",
  "statBoosts": "Phys Atk +18, Initiative +2",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "quince-bow",
  "image": "/images/items/quince-bow.png",
  "name": "Quince Bow",
  "type": "Weapon",
  "icon": "⚔️",
  "statBoosts": "Phys Atk +18, Initiative +2",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "raven-staff",
  "image": "/images/items/raven-staff.png",
  "name": "Raven Staff",
  "type": "Weapon",
  "icon": "⚔️",
  "statBoosts": "Phys Atk +18, Initiative +2",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "recruit-s-handaxe",
  "image": "/images/items/recruit-s-handaxe.png",
  "name": "Recruit's Handaxe",
  "type": "Weapon",
  "icon": "⚔️",
  "statBoosts": "Phys Atk +18, Initiative +2",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "recruit-s-shortbow",
  "image": "/images/items/recruit-s-shortbow.png",
  "name": "Recruit's Shortbow",
  "type": "Weapon",
  "icon": "⚔️",
  "statBoosts": "Phys Atk +18, Initiative +2",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "recruit-s-shortspear",
  "image": "/images/items/recruit-s-shortspear.png",
  "name": "Recruit's Shortspear",
  "type": "Weapon",
  "icon": "⚔️",
  "statBoosts": "Phys Atk +18, Initiative +2",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "recruit-s-shortsword",
  "image": "/images/items/recruit-s-shortsword.png",
  "name": "Recruit's Shortsword",
  "type": "Weapon",
  "icon": "⚔️",
  "statBoosts": "Phys Atk +18, Initiative +2",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "recruit-s-staff",
  "image": "/images/items/recruit-s-staff.png",
  "name": "Recruit's Staff",
  "type": "Weapon",
  "icon": "⚔️",
  "statBoosts": "Phys Atk +18, Initiative +2",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "red-rose",
  "image": "/images/items/red-rose.png",
  "name": "Red Rose",
  "type": "Weapon",
  "icon": "⚔️",
  "statBoosts": "Phys Atk +18, Initiative +2",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "red-bark-staff",
  "image": "/images/items/red-bark-staff.png",
  "name": "Red-Bark Staff",
  "type": "Weapon",
  "icon": "⚔️",
  "statBoosts": "Phys Atk +18, Initiative +2",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "replica-alminster",
  "image": "/images/items/replica-alminster.png",
  "name": "Replica Alminster",
  "type": "Weapon",
  "icon": "⚔️",
  "statBoosts": "Phys Atk +18, Initiative +2",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "ringed-staff",
  "image": "/images/items/ringed-staff.png",
  "name": "Ringed Staff",
  "type": "Weapon",
  "icon": "⚔️",
  "statBoosts": "Phys Atk +18, Initiative +2",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "rose-knight-axe",
  "image": "/images/items/rose-knight-axe.png",
  "name": "Rose Knight Axe",
  "type": "Weapon",
  "icon": "⚔️",
  "statBoosts": "Phys Atk +18, Initiative +2",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "rose-knight-hammer",
  "image": "/images/items/rose-knight-hammer.png",
  "name": "Rose Knight Hammer",
  "type": "Weapon",
  "icon": "⚔️",
  "statBoosts": "Phys Atk +18, Initiative +2",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "rose-knight-sword",
  "image": "/images/items/rose-knight-sword.png",
  "name": "Rose Knight Sword",
  "type": "Weapon",
  "icon": "⚔️",
  "statBoosts": "Phys Atk +18, Initiative +2",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "rosularis-sword",
  "image": "/images/items/rosularis-sword.png",
  "name": "Rosularis Sword",
  "type": "Weapon",
  "icon": "⚔️",
  "statBoosts": "Phys Atk +18, Initiative +2",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "royal-saber",
  "image": "/images/items/royal-saber.png",
  "name": "Royal Saber",
  "type": "Weapon",
  "icon": "⚔️",
  "statBoosts": "Phys Atk +18, Initiative +2",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "runic-axe",
  "image": "/images/items/runic-axe.png",
  "name": "Runic Axe",
  "type": "Weapon",
  "icon": "⚔️",
  "statBoosts": "Phys Atk +18, Initiative +2",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "runic-bow",
  "image": "/images/items/runic-bow.png",
  "name": "Runic Bow",
  "type": "Weapon",
  "icon": "⚔️",
  "statBoosts": "Phys Atk +18, Initiative +2",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "runic-spear",
  "image": "/images/items/runic-spear.png",
  "name": "Runic Spear",
  "type": "Weapon",
  "icon": "⚔️",
  "statBoosts": "Phys Atk +18, Initiative +2",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "runic-sword",
  "image": "/images/items/runic-sword.png",
  "name": "Runic Sword",
  "type": "Weapon",
  "icon": "⚔️",
  "statBoosts": "Phys Atk +18, Initiative +2",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "sacral-axe",
  "image": "/images/items/sacral-axe.png",
  "name": "Sacral Axe",
  "type": "Weapon",
  "icon": "⚔️",
  "statBoosts": "Phys Atk +18, Initiative +2",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "sacral-bow",
  "image": "/images/items/sacral-bow.png",
  "name": "Sacral Bow",
  "type": "Weapon",
  "icon": "⚔️",
  "statBoosts": "Phys Atk +18, Initiative +2",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "sacral-rod",
  "image": "/images/items/sacral-rod.png",
  "name": "Sacral Rod",
  "type": "Weapon",
  "icon": "⚔️",
  "statBoosts": "Phys Atk +18, Initiative +2",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "sacral-spear",
  "image": "/images/items/sacral-spear.png",
  "name": "Sacral Spear",
  "type": "Weapon",
  "icon": "⚔️",
  "statBoosts": "Phys Atk +18, Initiative +2",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "angel-hunter-s-buckler",
  "image": "/images/items/angel-hunter-s-buckler.png",
  "name": "Angel Hunter's Buckler",
  "type": "Shield",
  "icon": "🛡️",
  "statBoosts": "Phys Def +12, Guard Rate +15%",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "arrowshield",
  "image": "/images/items/arrowshield.png",
  "name": "Arrowshield",
  "type": "Shield",
  "icon": "🛡️",
  "statBoosts": "Phys Def +12, Guard Rate +15%",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "azure-crest-shield",
  "image": "/images/items/azure-crest-shield.png",
  "name": "Azure Crest Shield",
  "type": "Shield",
  "icon": "🛡️",
  "statBoosts": "Phys Def +12, Guard Rate +15%",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "baroque-shield",
  "image": "/images/items/baroque-shield.png",
  "name": "Baroque Shield",
  "type": "Shield",
  "icon": "🛡️",
  "statBoosts": "Phys Def +12, Guard Rate +15%",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "battler-s-shield",
  "image": "/images/items/battler-s-shield.png",
  "name": "Battler's Shield",
  "type": "Shield",
  "icon": "🛡️",
  "statBoosts": "Phys Def +12, Guard Rate +15%",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "beast-hunter-s-buckler",
  "image": "/images/items/beast-hunter-s-buckler.png",
  "name": "Beast Hunter's Buckler",
  "type": "Shield",
  "icon": "🛡️",
  "statBoosts": "Phys Def +12, Guard Rate +15%",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "black-iron-shield",
  "image": "/images/items/black-iron-shield.png",
  "name": "Black-Iron Shield",
  "type": "Shield",
  "icon": "🛡️",
  "statBoosts": "Phys Def +12, Guard Rate +15%",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "blessed-roundshield",
  "image": "/images/items/blessed-roundshield.png",
  "name": "Blessed Roundshield",
  "type": "Shield",
  "icon": "🛡️",
  "statBoosts": "Phys Def +12, Guard Rate +15%",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "blue-rose-shield",
  "image": "/images/items/blue-rose-shield.png",
  "name": "Blue Rose Shield",
  "type": "Shield",
  "icon": "🛡️",
  "statBoosts": "Phys Def +12, Guard Rate +15%",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "bronze-shield",
  "image": "/images/items/bronze-shield.png",
  "name": "Bronze Shield",
  "type": "Shield",
  "icon": "🛡️",
  "statBoosts": "Phys Def +12, Guard Rate +15%",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "carnat-shield",
  "image": "/images/items/carnat-shield.png",
  "name": "Carnat Shield",
  "type": "Shield",
  "icon": "🛡️",
  "statBoosts": "Phys Def +12, Guard Rate +15%",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "cavalry-hunter-s-buckler",
  "image": "/images/items/cavalry-hunter-s-buckler.png",
  "name": "Cavalry Hunter's Buckler",
  "type": "Shield",
  "icon": "🛡️",
  "statBoosts": "Phys Def +12, Guard Rate +15%",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "chivalric-shield",
  "image": "/images/items/chivalric-shield.png",
  "name": "Chivalric Shield",
  "type": "Shield",
  "icon": "🛡️",
  "statBoosts": "Phys Def +12, Guard Rate +15%",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "dragonbone-shield",
  "image": "/images/items/dragonbone-shield.png",
  "name": "Dragonbone Shield",
  "type": "Shield",
  "icon": "🛡️",
  "statBoosts": "Phys Def +12, Guard Rate +15%",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "golden-ram-shield",
  "image": "/images/items/golden-ram-shield.png",
  "name": "Golden Ram Shield",
  "type": "Shield",
  "icon": "🛡️",
  "statBoosts": "Phys Def +12, Guard Rate +15%",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "greatwood-shield",
  "image": "/images/items/greatwood-shield.png",
  "name": "Greatwood Shield",
  "type": "Shield",
  "icon": "🛡️",
  "statBoosts": "Phys Def +12, Guard Rate +15%",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "guard-s-shield",
  "image": "/images/items/guard-s-shield.png",
  "name": "Guard's Shield",
  "type": "Shield",
  "icon": "🛡️",
  "statBoosts": "Phys Def +12, Guard Rate +15%",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "heavenswing-shield",
  "image": "/images/items/heavenswing-shield.png",
  "name": "Heavenswing Shield",
  "type": "Shield",
  "icon": "🛡️",
  "statBoosts": "Phys Def +12, Guard Rate +15%",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "hoarfrost-shield",
  "image": "/images/items/hoarfrost-shield.png",
  "name": "Hoarfrost Shield",
  "type": "Shield",
  "icon": "🛡️",
  "statBoosts": "Phys Def +12, Guard Rate +15%",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "holy-knight-s-shield",
  "image": "/images/items/holy-knight-s-shield.png",
  "name": "Holy Knight's Shield",
  "type": "Shield",
  "icon": "🛡️",
  "statBoosts": "Phys Def +12, Guard Rate +15%",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "holy-unicorn-shield",
  "image": "/images/items/holy-unicorn-shield.png",
  "name": "Holy Unicorn Shield",
  "type": "Shield",
  "icon": "🛡️",
  "statBoosts": "Phys Def +12, Guard Rate +15%",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "hunter-s-buckler",
  "image": "/images/items/hunter-s-buckler.png",
  "name": "Hunter's Buckler",
  "type": "Shield",
  "icon": "🛡️",
  "statBoosts": "Phys Def +12, Guard Rate +15%",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "icefall-shield",
  "image": "/images/items/icefall-shield.png",
  "name": "Icefall Shield",
  "type": "Shield",
  "icon": "🛡️",
  "statBoosts": "Phys Def +12, Guard Rate +15%",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "iron-shield",
  "image": "/images/items/iron-shield.png",
  "name": "Iron Shield",
  "type": "Shield",
  "icon": "🛡️",
  "statBoosts": "Phys Def +12, Guard Rate +15%",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "ironclad-buckler",
  "image": "/images/items/ironclad-buckler.png",
  "name": "Ironclad Buckler",
  "type": "Shield",
  "icon": "🛡️",
  "statBoosts": "Phys Def +12, Guard Rate +15%",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "kaikias-s-shield",
  "image": "/images/items/kaikias-s-shield.png",
  "name": "Kaikias's Shield",
  "type": "Shield",
  "icon": "🛡️",
  "statBoosts": "Phys Def +12, Guard Rate +15%",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "luminous-shield",
  "image": "/images/items/luminous-shield.png",
  "name": "Luminous Shield",
  "type": "Shield",
  "icon": "🛡️",
  "statBoosts": "Phys Def +12, Guard Rate +15%",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "manalith-buckler",
  "image": "/images/items/manalith-buckler.png",
  "name": "Manalith Buckler",
  "type": "Shield",
  "icon": "🛡️",
  "statBoosts": "Phys Def +12, Guard Rate +15%",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "mercenary-s-shield",
  "image": "/images/items/mercenary-s-shield.png",
  "name": "Mercenary's Shield",
  "type": "Shield",
  "icon": "🛡️",
  "statBoosts": "Phys Def +12, Guard Rate +15%",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "moonlight-shield",
  "image": "/images/items/moonlight-shield.png",
  "name": "Moonlight Shield",
  "type": "Shield",
  "icon": "🛡️",
  "statBoosts": "Phys Def +12, Guard Rate +15%",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "nameless-guard-s-shield",
  "image": "/images/items/nameless-guard-s-shield.png",
  "name": "Nameless Guard's Shield",
  "type": "Shield",
  "icon": "🛡️",
  "statBoosts": "Phys Def +12, Guard Rate +15%",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "obsidian-shield",
  "image": "/images/items/obsidian-shield.png",
  "name": "Obsidian Shield",
  "type": "Shield",
  "icon": "🛡️",
  "statBoosts": "Phys Def +12, Guard Rate +15%",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "parrying-shield",
  "image": "/images/items/parrying-shield.png",
  "name": "Parrying Shield",
  "type": "Shield",
  "icon": "🛡️",
  "statBoosts": "Phys Def +12, Guard Rate +15%",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "phantom-knight-s-shield",
  "image": "/images/items/phantom-knight-s-shield.png",
  "name": "Phantom Knight's Shield",
  "type": "Shield",
  "icon": "🛡️",
  "statBoosts": "Phys Def +12, Guard Rate +15%",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "recruit-s-shield",
  "image": "/images/items/recruit-s-shield.png",
  "name": "Recruit's Shield",
  "type": "Shield",
  "icon": "🛡️",
  "statBoosts": "Phys Def +12, Guard Rate +15%",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "scarlet-crest-shield",
  "image": "/images/items/scarlet-crest-shield.png",
  "name": "Scarlet Crest Shield",
  "type": "Shield",
  "icon": "🛡️",
  "statBoosts": "Phys Def +12, Guard Rate +15%",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "searing-shield",
  "image": "/images/items/searing-shield.png",
  "name": "Searing Shield",
  "type": "Shield",
  "icon": "🛡️",
  "statBoosts": "Phys Def +12, Guard Rate +15%",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "spellsteel-shield",
  "image": "/images/items/spellsteel-shield.png",
  "name": "Spellsteel Shield",
  "type": "Shield",
  "icon": "🛡️",
  "statBoosts": "Phys Def +12, Guard Rate +15%",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "squire-s-shield",
  "image": "/images/items/squire-s-shield.png",
  "name": "Squire's Shield",
  "type": "Shield",
  "icon": "🛡️",
  "statBoosts": "Phys Def +12, Guard Rate +15%",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "steel-shield",
  "image": "/images/items/steel-shield.png",
  "name": "Steel Shield",
  "type": "Shield",
  "icon": "🛡️",
  "statBoosts": "Phys Def +12, Guard Rate +15%",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "templar-s-shield",
  "image": "/images/items/templar-s-shield.png",
  "name": "Templar's Shield",
  "type": "Shield",
  "icon": "🛡️",
  "statBoosts": "Phys Def +12, Guard Rate +15%",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "thorn-shield",
  "image": "/images/items/thorn-shield.png",
  "name": "Thorn Shield",
  "type": "Shield",
  "icon": "🛡️",
  "statBoosts": "Phys Def +12, Guard Rate +15%",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "twin-dragon-shield",
  "image": "/images/items/twin-dragon-shield.png",
  "name": "Twin Dragon Shield",
  "type": "Shield",
  "icon": "🛡️",
  "statBoosts": "Phys Def +12, Guard Rate +15%",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "unfettered-shield",
  "image": "/images/items/unfettered-shield.png",
  "name": "Unfettered Shield",
  "type": "Shield",
  "icon": "🛡️",
  "statBoosts": "Phys Def +12, Guard Rate +15%",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "unyielding-shield",
  "image": "/images/items/unyielding-shield.png",
  "name": "Unyielding Shield",
  "type": "Shield",
  "icon": "🛡️",
  "statBoosts": "Phys Def +12, Guard Rate +15%",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "viper-shield",
  "image": "/images/items/viper-shield.png",
  "name": "Viper Shield",
  "type": "Shield",
  "icon": "🛡️",
  "statBoosts": "Phys Def +12, Guard Rate +15%",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "vorpal-shield",
  "image": "/images/items/vorpal-shield.png",
  "name": "Vorpal Shield",
  "type": "Shield",
  "icon": "🛡️",
  "statBoosts": "Phys Def +12, Guard Rate +15%",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "watchman-s-buckler",
  "image": "/images/items/watchman-s-buckler.png",
  "name": "Watchman's Buckler",
  "type": "Shield",
  "icon": "🛡️",
  "statBoosts": "Phys Def +12, Guard Rate +15%",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "white-knight-s-shield",
  "image": "/images/items/white-knight-s-shield.png",
  "name": "White Knight's Shield",
  "type": "Shield",
  "icon": "🛡️",
  "statBoosts": "Phys Def +12, Guard Rate +15%",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "white-rider-s-shield",
  "image": "/images/items/white-rider-s-shield.png",
  "name": "White Rider's Shield",
  "type": "Shield",
  "icon": "🛡️",
  "statBoosts": "Phys Def +12, Guard Rate +15%",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "wingcrest-shield",
  "image": "/images/items/wingcrest-shield.png",
  "name": "Wingcrest Shield",
  "type": "Shield",
  "icon": "🛡️",
  "statBoosts": "Phys Def +12, Guard Rate +15%",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "zenoiran-knight-s-shield",
  "image": "/images/items/zenoiran-knight-s-shield.png",
  "name": "Zenoiran Knight's Shield",
  "type": "Shield",
  "icon": "🛡️",
  "statBoosts": "Phys Def +12, Guard Rate +15%",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "zenoiran-shield",
  "image": "/images/items/zenoiran-shield.png",
  "name": "Zenoiran Shield",
  "type": "Shield",
  "icon": "🛡️",
  "statBoosts": "Phys Def +12, Guard Rate +15%",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "acrobat-s-shoes",
  "image": "/images/items/acrobat-s-shoes.png",
  "name": "Acrobat's Shoes",
  "type": "Accessory",
  "icon": "💍",
  "statBoosts": "AP +1 / PP +1",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "amethyst-pendant",
  "image": "/images/items/amethyst-pendant.png",
  "name": "Amethyst Pendant",
  "type": "Accessory",
  "icon": "💍",
  "statBoosts": "AP +1 / PP +1",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "ancient-crown",
  "image": "/images/items/ancient-crown.png",
  "name": "Ancient Crown",
  "type": "Accessory",
  "icon": "💍",
  "statBoosts": "AP +1 / PP +1",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "angel-plume",
  "image": "/images/items/angel-plume.png",
  "name": "Angel Plume",
  "type": "Accessory",
  "icon": "💍",
  "statBoosts": "AP +1 / PP +1",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "archbishop-s-mitre",
  "image": "/images/items/archbishop-s-mitre.png",
  "name": "Archbishop's Mitre",
  "type": "Accessory",
  "icon": "💍",
  "statBoosts": "AP +1 / PP +1",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "armored-gauntlets",
  "image": "/images/items/armored-gauntlets.png",
  "name": "Armored Gauntlets",
  "type": "Accessory",
  "icon": "💍",
  "statBoosts": "AP +1 / PP +1",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "aurora-ring",
  "image": "/images/items/aurora-ring.png",
  "name": "Aurora Ring",
  "type": "Accessory",
  "icon": "💍",
  "statBoosts": "AP +1 / PP +1",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "awakening-amulet",
  "image": "/images/items/awakening-amulet.png",
  "name": "Awakening Amulet",
  "type": "Accessory",
  "icon": "💍",
  "statBoosts": "AP +1 / PP +1",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "badger-gauntlets",
  "image": "/images/items/badger-gauntlets.png",
  "name": "Badger Gauntlets",
  "type": "Accessory",
  "icon": "💍",
  "statBoosts": "AP +1 / PP +1",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "barbed-ribbon",
  "image": "/images/items/barbed-ribbon.png",
  "name": "Barbed Ribbon",
  "type": "Accessory",
  "icon": "💍",
  "statBoosts": "AP +1 / PP +1",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "battleline-standard",
  "image": "/images/items/battleline-standard.png",
  "name": "Battleline Standard",
  "type": "Accessory",
  "icon": "💍",
  "statBoosts": "AP +1 / PP +1",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "black-cat-ear-hood",
  "image": "/images/items/black-cat-ear-hood.png",
  "name": "Black Cat-Ear Hood",
  "type": "Accessory",
  "icon": "💍",
  "statBoosts": "AP +1 / PP +1",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "bloodbrand-tome",
  "image": "/images/items/bloodbrand-tome.png",
  "name": "Bloodbrand Tome",
  "type": "Accessory",
  "icon": "💍",
  "statBoosts": "AP +1 / PP +1",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "bloodmoon-earrings",
  "image": "/images/items/bloodmoon-earrings.png",
  "name": "Bloodmoon Earrings",
  "type": "Accessory",
  "icon": "💍",
  "statBoosts": "AP +1 / PP +1",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "bloodstained-ribbon",
  "image": "/images/items/bloodstained-ribbon.png",
  "name": "Bloodstained Ribbon",
  "type": "Accessory",
  "icon": "💍",
  "statBoosts": "AP +1 / PP +1",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "blue-spectacles",
  "image": "/images/items/blue-spectacles.png",
  "name": "Blue Spectacles",
  "type": "Accessory",
  "icon": "💍",
  "statBoosts": "AP +1 / PP +1",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "bronze-bangle",
  "image": "/images/items/bronze-bangle.png",
  "name": "Bronze Bangle",
  "type": "Accessory",
  "icon": "💍",
  "statBoosts": "AP +1 / PP +1",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "bronze-circlet",
  "image": "/images/items/bronze-circlet.png",
  "name": "Bronze Circlet",
  "type": "Accessory",
  "icon": "💍",
  "statBoosts": "AP +1 / PP +1",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "brown-beret",
  "image": "/images/items/brown-beret.png",
  "name": "Brown Beret",
  "type": "Accessory",
  "icon": "💍",
  "statBoosts": "AP +1 / PP +1",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "celestial-talisman",
  "image": "/images/items/celestial-talisman.png",
  "name": "Celestial Talisman",
  "type": "Accessory",
  "icon": "💍",
  "statBoosts": "AP +1 / PP +1",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "charm-of-land-sea",
  "image": "/images/items/charm-of-land-sea.png",
  "name": "Charm of Land & Sea",
  "type": "Accessory",
  "icon": "💍",
  "statBoosts": "AP +1 / PP +1",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "charm-of-sun-moon",
  "image": "/images/items/charm-of-sun-moon.png",
  "name": "Charm of Sun & Moon",
  "type": "Accessory",
  "icon": "💍",
  "statBoosts": "AP +1 / PP +1",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "charm-of-warding",
  "image": "/images/items/charm-of-warding.png",
  "name": "Charm of Warding",
  "type": "Accessory",
  "icon": "💍",
  "statBoosts": "AP +1 / PP +1",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "chloe-s-charm",
  "image": "/images/items/chloe-s-charm.png",
  "name": "Chloe's Charm",
  "type": "Accessory",
  "icon": "💍",
  "statBoosts": "AP +1 / PP +1",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "citadel-guard-s-sabatons",
  "image": "/images/items/citadel-guard-s-sabatons.png",
  "name": "Citadel Guard's Sabatons",
  "type": "Accessory",
  "icon": "💍",
  "statBoosts": "AP +1 / PP +1",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "clearsight-amulet",
  "image": "/images/items/clearsight-amulet.png",
  "name": "Clearsight Amulet",
  "type": "Accessory",
  "icon": "💍",
  "statBoosts": "AP +1 / PP +1",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "cleric-s-bracelet",
  "image": "/images/items/cleric-s-bracelet.png",
  "name": "Cleric's Bracelet",
  "type": "Accessory",
  "icon": "💍",
  "statBoosts": "AP +1 / PP +1",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "cleric-s-medallion",
  "image": "/images/items/cleric-s-medallion.png",
  "name": "Cleric's Medallion",
  "type": "Accessory",
  "icon": "💍",
  "statBoosts": "AP +1 / PP +1",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "cloth-gauntlets",
  "image": "/images/items/cloth-gauntlets.png",
  "name": "Cloth Gauntlets",
  "type": "Accessory",
  "icon": "💍",
  "statBoosts": "AP +1 / PP +1",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "cooling-bandana",
  "image": "/images/items/cooling-bandana.png",
  "name": "Cooling Bandana",
  "type": "Accessory",
  "icon": "💍",
  "statBoosts": "AP +1 / PP +1",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "counter-belt",
  "image": "/images/items/counter-belt.png",
  "name": "Counter Belt",
  "type": "Accessory",
  "icon": "💍",
  "statBoosts": "AP +1 / PP +1",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "courser-s-reins",
  "image": "/images/items/courser-s-reins.png",
  "name": "Courser's Reins",
  "type": "Accessory",
  "icon": "💍",
  "statBoosts": "AP +1 / PP +1",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "critical-damage",
  "image": "/images/items/critical-damage.png",
  "name": "Critical Damage +",
  "type": "Accessory",
  "icon": "💍",
  "statBoosts": "AP +1 / PP +1",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "crown-of-the-abyss",
  "image": "/images/items/crown-of-the-abyss.png",
  "name": "Crown of the Abyss",
  "type": "Accessory",
  "icon": "💍",
  "statBoosts": "AP +1 / PP +1",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "crude-tasset",
  "image": "/images/items/crude-tasset.png",
  "name": "Crude Tasset",
  "type": "Accessory",
  "icon": "💍",
  "statBoosts": "AP +1 / PP +1",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "daemon-s-shackles",
  "image": "/images/items/daemon-s-shackles.png",
  "name": "Daemon's Shackles",
  "type": "Accessory",
  "icon": "💍",
  "statBoosts": "AP +1 / PP +1",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "dancer-s-anklet",
  "image": "/images/items/dancer-s-anklet.png",
  "name": "Dancer's Anklet",
  "type": "Accessory",
  "icon": "💍",
  "statBoosts": "AP +1 / PP +1",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "dancer-s-bracelet",
  "image": "/images/items/dancer-s-bracelet.png",
  "name": "Dancer's Bracelet",
  "type": "Accessory",
  "icon": "💍",
  "statBoosts": "AP +1 / PP +1",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "dawn-robes",
  "image": "/images/items/dawn-robes.png",
  "name": "Dawn Robes",
  "type": "Accessory",
  "icon": "💍",
  "statBoosts": "AP +1 / PP +1",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "defender-s-ring",
  "image": "/images/items/defender-s-ring.png",
  "name": "Defender's Ring",
  "type": "Accessory",
  "icon": "💍",
  "statBoosts": "AP +1 / PP +1",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "defensive-gauntlets",
  "image": "/images/items/defensive-gauntlets.png",
  "name": "Defensive Gauntlets",
  "type": "Accessory",
  "icon": "💍",
  "statBoosts": "AP +1 / PP +1",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "defensive-ring",
  "image": "/images/items/defensive-ring.png",
  "name": "Defensive Ring",
  "type": "Accessory",
  "icon": "💍",
  "statBoosts": "AP +1 / PP +1",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "defrosting-amulet",
  "image": "/images/items/defrosting-amulet.png",
  "name": "Defrosting Amulet",
  "type": "Accessory",
  "icon": "💍",
  "statBoosts": "AP +1 / PP +1",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "detoxifying-amulet",
  "image": "/images/items/detoxifying-amulet.png",
  "name": "Detoxifying Amulet",
  "type": "Accessory",
  "icon": "💍",
  "statBoosts": "AP +1 / PP +1",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "dirty-gambler-s-coin",
  "image": "/images/items/dirty-gambler-s-coin.png",
  "name": "Dirty Gambler's Coin",
  "type": "Accessory",
  "icon": "💍",
  "statBoosts": "AP +1 / PP +1",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "dove-plume",
  "image": "/images/items/dove-plume.png",
  "name": "Dove Plume",
  "type": "Accessory",
  "icon": "💍",
  "statBoosts": "AP +1 / PP +1",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "dream-crown",
  "image": "/images/items/dream-crown.png",
  "name": "Dream Crown",
  "type": "Accessory",
  "icon": "💍",
  "statBoosts": "AP +1 / PP +1",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "druid-s-robes",
  "image": "/images/items/druid-s-robes.png",
  "name": "Druid's Robes",
  "type": "Accessory",
  "icon": "💍",
  "statBoosts": "AP +1 / PP +1",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "dusk-robes",
  "image": "/images/items/dusk-robes.png",
  "name": "Dusk Robes",
  "type": "Accessory",
  "icon": "💍",
  "statBoosts": "AP +1 / PP +1",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "earrings-of-pursuit",
  "image": "/images/items/earrings-of-pursuit.png",
  "name": "Earrings of Pursuit",
  "type": "Accessory",
  "icon": "💍",
  "statBoosts": "AP +1 / PP +1",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "elite-beret",
  "image": "/images/items/elite-beret.png",
  "name": "Elite Beret",
  "type": "Accessory",
  "icon": "💍",
  "statBoosts": "AP +1 / PP +1",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "elite-standard",
  "image": "/images/items/elite-standard.png",
  "name": "Elite Standard",
  "type": "Accessory",
  "icon": "💍",
  "statBoosts": "AP +1 / PP +1",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "erv-lda-s-talisman",
  "image": "/images/items/erv-lda-s-talisman.png",
  "name": "Ervélda's Talisman",
  "type": "Accessory",
  "icon": "💍",
  "statBoosts": "AP +1 / PP +1",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "familiar-s-choker",
  "image": "/images/items/familiar-s-choker.png",
  "name": "Familiar's Choker",
  "type": "Accessory",
  "icon": "💍",
  "statBoosts": "AP +1 / PP +1",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "first-aid-kit",
  "image": "/images/items/first-aid-kit.png",
  "name": "First Aid Kit",
  "type": "Accessory",
  "icon": "💍",
  "statBoosts": "AP +1 / PP +1",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "flamebrand-tome",
  "image": "/images/items/flamebrand-tome.png",
  "name": "Flamebrand Tome",
  "type": "Accessory",
  "icon": "💍",
  "statBoosts": "AP +1 / PP +1",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "fluffy-cape",
  "image": "/images/items/fluffy-cape.png",
  "name": "Fluffy Cape",
  "type": "Accessory",
  "icon": "💍",
  "statBoosts": "AP +1 / PP +1",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "frostbrand-tome",
  "image": "/images/items/frostbrand-tome.png",
  "name": "Frostbrand Tome",
  "type": "Accessory",
  "icon": "💍",
  "statBoosts": "AP +1 / PP +1",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "gambler-s-coin",
  "image": "/images/items/gambler-s-coin.png",
  "name": "Gambler's Coin",
  "type": "Accessory",
  "icon": "💍",
  "statBoosts": "AP +1 / PP +1",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "gauntlets",
  "image": "/images/items/gauntlets.png",
  "name": "Gauntlets",
  "type": "Accessory",
  "icon": "💍",
  "statBoosts": "AP +1 / PP +1",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "gauntlets-of-the-abyss",
  "image": "/images/items/gauntlets-of-the-abyss.png",
  "name": "Gauntlets of the Abyss",
  "type": "Accessory",
  "icon": "💍",
  "statBoosts": "AP +1 / PP +1",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "glacial-ring",
  "image": "/images/items/glacial-ring.png",
  "name": "Glacial Ring",
  "type": "Accessory",
  "icon": "💍",
  "statBoosts": "AP +1 / PP +1",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "glory-sash",
  "image": "/images/items/glory-sash.png",
  "name": "Glory Sash",
  "type": "Accessory",
  "icon": "💍",
  "statBoosts": "AP +1 / PP +1",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "gold-bangle",
  "image": "/images/items/gold-bangle.png",
  "name": "Gold Bangle",
  "type": "Accessory",
  "icon": "💍",
  "statBoosts": "AP +1 / PP +1",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "gold-circlet",
  "image": "/images/items/gold-circlet.png",
  "name": "Gold Circlet",
  "type": "Accessory",
  "icon": "💍",
  "statBoosts": "AP +1 / PP +1",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "gold-goblet",
  "image": "/images/items/gold-goblet.png",
  "name": "Gold Goblet",
  "type": "Accessory",
  "icon": "💍",
  "statBoosts": "AP +1 / PP +1",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "golden-egg",
  "image": "/images/items/golden-egg.png",
  "name": "Golden Egg",
  "type": "Accessory",
  "icon": "💍",
  "statBoosts": "AP +1 / PP +1",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "gravekeeper-boots",
  "image": "/images/items/gravekeeper-boots.png",
  "name": "Gravekeeper Boots",
  "type": "Accessory",
  "icon": "💍",
  "statBoosts": "AP +1 / PP +1",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "gravekeeper-lantern",
  "image": "/images/items/gravekeeper-lantern.png",
  "name": "Gravekeeper Lantern",
  "type": "Accessory",
  "icon": "💍",
  "statBoosts": "AP +1 / PP +1",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "green-beret",
  "image": "/images/items/green-beret.png",
  "name": "Green Beret",
  "type": "Accessory",
  "icon": "💍",
  "statBoosts": "AP +1 / PP +1",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "guardian-gloves",
  "image": "/images/items/guardian-gloves.png",
  "name": "Guardian Gloves",
  "type": "Accessory",
  "icon": "💍",
  "statBoosts": "AP +1 / PP +1",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "gust-bracelet",
  "image": "/images/items/gust-bracelet.png",
  "name": "Gust Bracelet",
  "type": "Accessory",
  "icon": "💍",
  "statBoosts": "AP +1 / PP +1",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "heavensteed-reins",
  "image": "/images/items/heavensteed-reins.png",
  "name": "Heavensteed Reins",
  "type": "Accessory",
  "icon": "💍",
  "statBoosts": "AP +1 / PP +1",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "heavenwyvern-reins",
  "image": "/images/items/heavenwyvern-reins.png",
  "name": "Heavenwyvern Reins",
  "type": "Accessory",
  "icon": "💍",
  "statBoosts": "AP +1 / PP +1",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "hero-s-medallion",
  "image": "/images/items/hero-s-medallion.png",
  "name": "Hero's Medallion",
  "type": "Accessory",
  "icon": "💍",
  "statBoosts": "AP +1 / PP +1",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "holy-broach",
  "image": "/images/items/holy-broach.png",
  "name": "Holy Broach",
  "type": "Accessory",
  "icon": "💍",
  "statBoosts": "AP +1 / PP +1",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "holy-unicorn-signet",
  "image": "/images/items/holy-unicorn-signet.png",
  "name": "Holy Unicorn Signet",
  "type": "Accessory",
  "icon": "💍",
  "statBoosts": "AP +1 / PP +1",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "hp-200",
  "image": "/images/items/hp-200.png",
  "name": "HP +200",
  "type": "Accessory",
  "icon": "💍",
  "statBoosts": "AP +1 / PP +1",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "hp-50",
  "image": "/images/items/hp-50.png",
  "name": "HP +50",
  "type": "Accessory",
  "icon": "💍",
  "statBoosts": "AP +1 / PP +1",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "illusory-cloak",
  "image": "/images/items/illusory-cloak.png",
  "name": "Illusory Cloak",
  "type": "Accessory",
  "icon": "💍",
  "statBoosts": "AP +1 / PP +1",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "iron-shackles",
  "image": "/images/items/iron-shackles.png",
  "name": "Iron Shackles",
  "type": "Accessory",
  "icon": "💍",
  "statBoosts": "AP +1 / PP +1",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "knight-s-medallion",
  "image": "/images/items/knight-s-medallion.png",
  "name": "Knight's Medallion",
  "type": "Accessory",
  "icon": "💍",
  "statBoosts": "AP +1 / PP +1",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "lamplight-ring",
  "image": "/images/items/lamplight-ring.png",
  "name": "Lamplight Ring",
  "type": "Accessory",
  "icon": "💍",
  "statBoosts": "AP +1 / PP +1",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "lapis-bell",
  "image": "/images/items/lapis-bell.png",
  "name": "Lapis Bell",
  "type": "Accessory",
  "icon": "💍",
  "statBoosts": "AP +1 / PP +1",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "large-aid-kit",
  "image": "/images/items/large-aid-kit.png",
  "name": "Large Aid Kit",
  "type": "Accessory",
  "icon": "💍",
  "statBoosts": "AP +1 / PP +1",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "leaf-broach",
  "image": "/images/items/leaf-broach.png",
  "name": "Leaf Broach",
  "type": "Accessory",
  "icon": "💍",
  "statBoosts": "AP +1 / PP +1",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "leather-hood",
  "image": "/images/items/leather-hood.png",
  "name": "Leather Hood",
  "type": "Accessory",
  "icon": "💍",
  "statBoosts": "AP +1 / PP +1",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "liberator-s-belt",
  "image": "/images/items/liberator-s-belt.png",
  "name": "Liberator's Belt",
  "type": "Accessory",
  "icon": "💍",
  "statBoosts": "AP +1 / PP +1",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "liberator-s-bracelet",
  "image": "/images/items/liberator-s-bracelet.png",
  "name": "Liberator's Bracelet",
  "type": "Accessory",
  "icon": "💍",
  "statBoosts": "AP +1 / PP +1",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "lifeblood-talisman",
  "image": "/images/items/lifeblood-talisman.png",
  "name": "Lifeblood Talisman",
  "type": "Accessory",
  "icon": "💍",
  "statBoosts": "AP +1 / PP +1",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "lionheart",
  "image": "/images/items/lionheart.png",
  "name": "Lionheart",
  "type": "Accessory",
  "icon": "💍",
  "statBoosts": "AP +1 / PP +1",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "lips-s-ring",
  "image": "/images/items/lips-s-ring.png",
  "name": "Lips's Ring",
  "type": "Accessory",
  "icon": "💍",
  "statBoosts": "AP +1 / PP +1",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "lucky-coin",
  "image": "/images/items/lucky-coin.png",
  "name": "Lucky Coin",
  "type": "Accessory",
  "icon": "💍",
  "statBoosts": "AP +1 / PP +1",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "mage-s-gloves",
  "image": "/images/items/mage-s-gloves.png",
  "name": "Mage's Gloves",
  "type": "Accessory",
  "icon": "💍",
  "statBoosts": "AP +1 / PP +1",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "magia-heart",
  "image": "/images/items/magia-heart.png",
  "name": "Magia Heart",
  "type": "Accessory",
  "icon": "💍",
  "statBoosts": "AP +1 / PP +1",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "magia-soul",
  "image": "/images/items/magia-soul.png",
  "name": "Magia Soul",
  "type": "Accessory",
  "icon": "💍",
  "statBoosts": "AP +1 / PP +1",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "magical-attack",
  "image": "/images/items/magical-attack.png",
  "name": "Magical Attack +",
  "type": "Accessory",
  "icon": "💍",
  "statBoosts": "AP +1 / PP +1",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "master-s-gauntlets",
  "image": "/images/items/master-s-gauntlets.png",
  "name": "Master's Gauntlets",
  "type": "Accessory",
  "icon": "💍",
  "statBoosts": "AP +1 / PP +1",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "medical-kit",
  "image": "/images/items/medical-kit.png",
  "name": "Medical Kit",
  "type": "Accessory",
  "icon": "💍",
  "statBoosts": "AP +1 / PP +1",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "mercenary-s-eyepatch",
  "image": "/images/items/mercenary-s-eyepatch.png",
  "name": "Mercenary's Eyepatch",
  "type": "Accessory",
  "icon": "💍",
  "statBoosts": "AP +1 / PP +1",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "mirrored-spectacles",
  "image": "/images/items/mirrored-spectacles.png",
  "name": "Mirrored Spectacles",
  "type": "Accessory",
  "icon": "💍",
  "statBoosts": "AP +1 / PP +1",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "miser-s-bracelet",
  "image": "/images/items/miser-s-bracelet.png",
  "name": "Miser's Bracelet",
  "type": "Accessory",
  "icon": "💍",
  "statBoosts": "AP +1 / PP +1",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "mistletoe-charm",
  "image": "/images/items/mistletoe-charm.png",
  "name": "Mistletoe Charm",
  "type": "Accessory",
  "icon": "💍",
  "statBoosts": "AP +1 / PP +1",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "monk-s-mitre",
  "image": "/images/items/monk-s-mitre.png",
  "name": "Monk's Mitre",
  "type": "Accessory",
  "icon": "💍",
  "statBoosts": "AP +1 / PP +1",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "necromancer-s-lantern",
  "image": "/images/items/necromancer-s-lantern.png",
  "name": "Necromancer's Lantern",
  "type": "Accessory",
  "icon": "💍",
  "statBoosts": "AP +1 / PP +1",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "old-witch-s-ring",
  "image": "/images/items/old-witch-s-ring.png",
  "name": "Old Witch's Ring",
  "type": "Accessory",
  "icon": "💍",
  "statBoosts": "AP +1 / PP +1",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "onyx-pendant",
  "image": "/images/items/onyx-pendant.png",
  "name": "Onyx Pendant",
  "type": "Accessory",
  "icon": "💍",
  "statBoosts": "AP +1 / PP +1",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "outlaw-s-bracelet",
  "image": "/images/items/outlaw-s-bracelet.png",
  "name": "Outlaw's Bracelet",
  "type": "Accessory",
  "icon": "💍",
  "statBoosts": "AP +1 / PP +1",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "parrying-amulet",
  "image": "/images/items/parrying-amulet.png",
  "name": "Parrying Amulet",
  "type": "Accessory",
  "icon": "💍",
  "statBoosts": "AP +1 / PP +1",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "phoenix-s-plume",
  "image": "/images/items/phoenix-s-plume.png",
  "name": "Phoenix's Plume",
  "type": "Accessory",
  "icon": "💍",
  "statBoosts": "AP +1 / PP +1",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "physical-attack",
  "image": "/images/items/physical-attack.png",
  "name": "Physical Attack +",
  "type": "Accessory",
  "icon": "💍",
  "statBoosts": "AP +1 / PP +1",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "power-belt",
  "image": "/images/items/power-belt.png",
  "name": "Power Belt",
  "type": "Accessory",
  "icon": "💍",
  "statBoosts": "AP +1 / PP +1",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "prisoner-s-shackles",
  "image": "/images/items/prisoner-s-shackles.png",
  "name": "Prisoner's Shackles",
  "type": "Accessory",
  "icon": "💍",
  "statBoosts": "AP +1 / PP +1",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "pursuant-s-bracelet",
  "image": "/images/items/pursuant-s-bracelet.png",
  "name": "Pursuant's Bracelet",
  "type": "Accessory",
  "icon": "💍",
  "statBoosts": "AP +1 / PP +1",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "quenching-amulet",
  "image": "/images/items/quenching-amulet.png",
  "name": "Quenching Amulet",
  "type": "Accessory",
  "icon": "💍",
  "statBoosts": "AP +1 / PP +1",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "raven-plume",
  "image": "/images/items/raven-plume.png",
  "name": "Raven Plume",
  "type": "Accessory",
  "icon": "💍",
  "statBoosts": "AP +1 / PP +1",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "retaliation-earrings",
  "image": "/images/items/retaliation-earrings.png",
  "name": "Retaliation Earrings",
  "type": "Accessory",
  "icon": "💍",
  "statBoosts": "AP +1 / PP +1",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "riot-belt",
  "image": "/images/items/riot-belt.png",
  "name": "Riot Belt",
  "type": "Accessory",
  "icon": "💍",
  "statBoosts": "AP +1 / PP +1",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "rookie-egg",
  "image": "/images/items/rookie-egg.png",
  "name": "Rookie Egg",
  "type": "Accessory",
  "icon": "💍",
  "statBoosts": "AP +1 / PP +1",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "rose-broach",
  "image": "/images/items/rose-broach.png",
  "name": "Rose Broach",
  "type": "Accessory",
  "icon": "💍",
  "statBoosts": "AP +1 / PP +1",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "royal-scarf",
  "image": "/images/items/royal-scarf.png",
  "name": "Royal Scarf",
  "type": "Accessory",
  "icon": "💍",
  "statBoosts": "AP +1 / PP +1",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "ruby-pendant",
  "image": "/images/items/ruby-pendant.png",
  "name": "Ruby Pendant",
  "type": "Accessory",
  "icon": "💍",
  "statBoosts": "AP +1 / PP +1",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "sacral-broach",
  "image": "/images/items/sacral-broach.png",
  "name": "Sacral Broach",
  "type": "Accessory",
  "icon": "💍",
  "statBoosts": "AP +1 / PP +1",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "sage-owl-s-shawl",
  "image": "/images/items/sage-owl-s-shawl.png",
  "name": "Sage Owl's Shawl",
  "type": "Accessory",
  "icon": "💍",
  "statBoosts": "AP +1 / PP +1",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "sage-s-hood",
  "image": "/images/items/sage-s-hood.png",
  "name": "Sage's Hood",
  "type": "Accessory",
  "icon": "💍",
  "statBoosts": "AP +1 / PP +1",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "salamander-ring",
  "image": "/images/items/salamander-ring.png",
  "name": "Salamander Ring",
  "type": "Accessory",
  "icon": "💍",
  "statBoosts": "AP +1 / PP +1",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "sapphire-pendant",
  "image": "/images/items/sapphire-pendant.png",
  "name": "Sapphire Pendant",
  "type": "Accessory",
  "icon": "💍",
  "statBoosts": "AP +1 / PP +1",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "scarlett-s-ribbon",
  "image": "/images/items/scarlett-s-ribbon.png",
  "name": "Scarlett's Ribbon",
  "type": "Accessory",
  "icon": "💍",
  "statBoosts": "AP +1 / PP +1",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "self-aid-kit",
  "image": "/images/items/self-aid-kit.png",
  "name": "Self-Aid Kit",
  "type": "Accessory",
  "icon": "💍",
  "statBoosts": "AP +1 / PP +1",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "shawl-of-repose",
  "image": "/images/items/shawl-of-repose.png",
  "name": "Shawl of Repose",
  "type": "Accessory",
  "icon": "💍",
  "statBoosts": "AP +1 / PP +1",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "silk-hood",
  "image": "/images/items/silk-hood.png",
  "name": "Silk Hood",
  "type": "Accessory",
  "icon": "💍",
  "statBoosts": "AP +1 / PP +1",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "silken-scarf",
  "image": "/images/items/silken-scarf.png",
  "name": "Silken Scarf",
  "type": "Accessory",
  "icon": "💍",
  "statBoosts": "AP +1 / PP +1",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "silver-bangle",
  "image": "/images/items/silver-bangle.png",
  "name": "Silver Bangle",
  "type": "Accessory",
  "icon": "💍",
  "statBoosts": "AP +1 / PP +1",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "silver-circlet",
  "image": "/images/items/silver-circlet.png",
  "name": "Silver Circlet",
  "type": "Accessory",
  "icon": "💍",
  "statBoosts": "AP +1 / PP +1",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "silver-goblet",
  "image": "/images/items/silver-goblet.png",
  "name": "Silver Goblet",
  "type": "Accessory",
  "icon": "💍",
  "statBoosts": "AP +1 / PP +1",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "skillful-amulet",
  "image": "/images/items/skillful-amulet.png",
  "name": "Skillful Amulet",
  "type": "Accessory",
  "icon": "💍",
  "statBoosts": "AP +1 / PP +1",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "sniper-s-amber-lens",
  "image": "/images/items/sniper-s-amber-lens.png",
  "name": "Sniper's Amber Lens",
  "type": "Accessory",
  "icon": "💍",
  "statBoosts": "AP +1 / PP +1",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "sniper-s-lens",
  "image": "/images/items/sniper-s-lens.png",
  "name": "Sniper's Lens",
  "type": "Accessory",
  "icon": "💍",
  "statBoosts": "AP +1 / PP +1",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "soothing-plume",
  "image": "/images/items/soothing-plume.png",
  "name": "Soothing Plume",
  "type": "Accessory",
  "icon": "💍",
  "statBoosts": "AP +1 / PP +1",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "sorcerer-s-gauntlets",
  "image": "/images/items/sorcerer-s-gauntlets.png",
  "name": "Sorcerer's Gauntlets",
  "type": "Accessory",
  "icon": "💍",
  "statBoosts": "AP +1 / PP +1",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "sorcerer-s-medallion",
  "image": "/images/items/sorcerer-s-medallion.png",
  "name": "Sorcerer's Medallion",
  "type": "Accessory",
  "icon": "💍",
  "statBoosts": "AP +1 / PP +1",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "spirit-s-necklace",
  "image": "/images/items/spirit-s-necklace.png",
  "name": "Spirit's Necklace",
  "type": "Accessory",
  "icon": "💍",
  "statBoosts": "AP +1 / PP +1",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "squall-bracelet",
  "image": "/images/items/squall-bracelet.png",
  "name": "Squall Bracelet",
  "type": "Accessory",
  "icon": "💍",
  "statBoosts": "AP +1 / PP +1",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "str-100",
  "image": "/images/items/str-100.png",
  "name": "STR +100",
  "type": "Accessory",
  "icon": "💍",
  "statBoosts": "AP +1 / PP +1",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "tailwind-cape",
  "image": "/images/items/tailwind-cape.png",
  "name": "Tailwind Cape",
  "type": "Accessory",
  "icon": "💍",
  "statBoosts": "AP +1 / PP +1",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "talisman-of-the-abyss",
  "image": "/images/items/talisman-of-the-abyss.png",
  "name": "Talisman of the Abyss",
  "type": "Accessory",
  "icon": "💍",
  "statBoosts": "AP +1 / PP +1",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "thief-s-bell",
  "image": "/images/items/thief-s-bell.png",
  "name": "Thief's Bell",
  "type": "Accessory",
  "icon": "💍",
  "statBoosts": "AP +1 / PP +1",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "thief-s-mantle",
  "image": "/images/items/thief-s-mantle.png",
  "name": "Thief's Mantle",
  "type": "Accessory",
  "icon": "💍",
  "statBoosts": "AP +1 / PP +1",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "thunderbrand-tome",
  "image": "/images/items/thunderbrand-tome.png",
  "name": "Thunderbrand Tome",
  "type": "Accessory",
  "icon": "💍",
  "statBoosts": "AP +1 / PP +1",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "thunderclap-ring",
  "image": "/images/items/thunderclap-ring.png",
  "name": "Thunderclap Ring",
  "type": "Accessory",
  "icon": "💍",
  "statBoosts": "AP +1 / PP +1",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "truestrike-star",
  "image": "/images/items/truestrike-star.png",
  "name": "Truestrike Star",
  "type": "Accessory",
  "icon": "💍",
  "statBoosts": "AP +1 / PP +1",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "twilight-cloak",
  "image": "/images/items/twilight-cloak.png",
  "name": "Twilight Cloak",
  "type": "Accessory",
  "icon": "💍",
  "statBoosts": "AP +1 / PP +1",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "undead-ring",
  "image": "/images/items/undead-ring.png",
  "name": "Undead Ring",
  "type": "Accessory",
  "icon": "💍",
  "statBoosts": "AP +1 / PP +1",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "vengeful-caligae",
  "image": "/images/items/vengeful-caligae.png",
  "name": "Vengeful Caligae",
  "type": "Accessory",
  "icon": "💍",
  "statBoosts": "AP +1 / PP +1",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "verdant-ribbon",
  "image": "/images/items/verdant-ribbon.png",
  "name": "Verdant Ribbon",
  "type": "Accessory",
  "icon": "💍",
  "statBoosts": "AP +1 / PP +1",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "veteran-s-eyepatch",
  "image": "/images/items/veteran-s-eyepatch.png",
  "name": "Veteran's Eyepatch",
  "type": "Accessory",
  "icon": "💍",
  "statBoosts": "AP +1 / PP +1",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "vitality-talisman",
  "image": "/images/items/vitality-talisman.png",
  "name": "Vitality Talisman",
  "type": "Accessory",
  "icon": "💍",
  "statBoosts": "AP +1 / PP +1",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "warrior-s-medallion",
  "image": "/images/items/warrior-s-medallion.png",
  "name": "Warrior's Medallion",
  "type": "Accessory",
  "icon": "💍",
  "statBoosts": "AP +1 / PP +1",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "watchman-s-horn",
  "image": "/images/items/watchman-s-horn.png",
  "name": "Watchman's Horn",
  "type": "Accessory",
  "icon": "💍",
  "statBoosts": "AP +1 / PP +1",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "watchman-s-lantern",
  "image": "/images/items/watchman-s-lantern.png",
  "name": "Watchman's Lantern",
  "type": "Accessory",
  "icon": "💍",
  "statBoosts": "AP +1 / PP +1",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "white-cat-ear-hood",
  "image": "/images/items/white-cat-ear-hood.png",
  "name": "White Cat-Ear Hood",
  "type": "Accessory",
  "icon": "💍",
  "statBoosts": "AP +1 / PP +1",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "white-ribbon",
  "image": "/images/items/white-ribbon.png",
  "name": "White Ribbon",
  "type": "Accessory",
  "icon": "💍",
  "statBoosts": "AP +1 / PP +1",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "wind-faerie-s-bell",
  "image": "/images/items/wind-faerie-s-bell.png",
  "name": "Wind Faerie's Bell",
  "type": "Accessory",
  "icon": "💍",
  "statBoosts": "AP +1 / PP +1",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "wingline-standard",
  "image": "/images/items/wingline-standard.png",
  "name": "Wingline Standard",
  "type": "Accessory",
  "icon": "💍",
  "statBoosts": "AP +1 / PP +1",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "wolf-fang-bracelet",
  "image": "/images/items/wolf-fang-bracelet.png",
  "name": "Wolf Fang Bracelet",
  "type": "Accessory",
  "icon": "💍",
  "statBoosts": "AP +1 / PP +1",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "wolfpack-gauntlets",
  "image": "/images/items/wolfpack-gauntlets.png",
  "name": "Wolfpack Gauntlets",
  "type": "Accessory",
  "icon": "💍",
  "statBoosts": "AP +1 / PP +1",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "wooly-mittens",
  "image": "/images/items/wooly-mittens.png",
  "name": "Wooly Mittens",
  "type": "Accessory",
  "icon": "💍",
  "statBoosts": "AP +1 / PP +1",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "wyvern-claw",
  "image": "/images/items/wyvern-claw.png",
  "name": "Wyvern Claw",
  "type": "Accessory",
  "icon": "💍",
  "statBoosts": "AP +1 / PP +1",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
},
  {
  "id": "wyvern-reins",
  "image": "/images/items/wyvern-reins.png",
  "name": "Wyvern Reins",
  "type": "Accessory",
  "icon": "💍",
  "statBoosts": "AP +1 / PP +1",
  "acquisition": "Armorer Town / Quest Reward / Divine Shard Shop",
  "isMetaCore": false,
  "metaSquads": [
    "Custom Competitive Builds"
  ]
}
];
