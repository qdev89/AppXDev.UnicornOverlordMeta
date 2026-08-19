const fs = require('fs');
const path = require('path');

// 1. First, check items in src/data/items.ts
const itemsFile = path.join(__dirname, '../src/data/items.ts');
let itemsContent = fs.readFileSync(itemsFile, 'utf-8');
let items = eval(itemsContent.match(/\[[\s\S]*\]/)[0]);

// Remove any non-existent items and ensure all real items are present with exact stats
const AUTHENTIC_ITEMS_TO_ENSURE = [
  {
    id: 'spiked-shield',
    name: 'Spiked Shield',
    type: 'Shield',
    icon: '🛡️',
    statBoosts: 'Phys Def +4, Physickal Attack +3, Guard Efficiency +25%, Counter',
    acquisition: 'Can be bought at Gran Corrine or found in Drakenhold.',
    isMetaCore: true,
    grantedSkill: {
      name: 'Counter',
      cost: '1 PP',
      description: 'Retaliate against an attacker with a physical strike.'
    },
    metaSquads: []
  },
  {
    id: 'brawler-s-medallion',
    name: "Brawler's Medallion",
    type: 'Accessory',
    icon: '🏅',
    statBoosts: 'Physickal Attack +10%, Critical Damage +20%',
    acquisition: 'Found in Drakenhold Colosseum / arena rewards.',
    isMetaCore: true,
    metaSquads: []
  },
  {
    id: 'retaliation-earrings',
    name: 'Retaliation Earrings',
    type: 'Accessory',
    icon: '💍',
    statBoosts: 'Phys Def +1, Counterattack Skills Deal +40 Damage',
    acquisition: 'Can be bought at Drakenhold accessory merchant.',
    isMetaCore: true,
    metaSquads: []
  },
  {
    id: 'mirrored-spectacles',
    name: 'Mirrored Spectacles',
    type: 'Accessory',
    icon: '👓',
    statBoosts: 'Phys Def +2, Accuracy +30',
    acquisition: 'Found in Bastorias accessory shops.',
    isMetaCore: true,
    metaSquads: []
  },
  {
    id: 'glacial-ring',
    name: 'Glacial Ring',
    type: 'Accessory',
    icon: '💍',
    statBoosts: 'Mag Def +8, Freeze Immunity, Max HP +5',
    acquisition: 'Found in Bastorias freezing caverns.',
    isMetaCore: true,
    metaSquads: []
  },
  {
    id: 'lapis-bell',
    name: 'Lapis Bell',
    type: 'Accessory',
    icon: '🔔',
    statBoosts: 'Passive Gift',
    acquisition: 'Starting equipment / Bastorias chest.',
    isMetaCore: true,
    grantedSkill: {
      name: 'Passive Gift',
      cost: '1 PP',
      description: 'Restores 1 PP to an ally using an Active Skill.'
    },
    metaSquads: []
  },
  {
    id: 'shawl-of-repose',
    name: 'Shawl of Repose',
    type: 'Accessory',
    icon: '🧣',
    statBoosts: 'Phys Def +1, Wing Rest',
    acquisition: 'Albion church shops.',
    isMetaCore: true,
    metaSquads: []
  },
  {
    id: 'monk-s-mitre',
    name: "Monk's Mitre",
    type: 'Accessory',
    icon: '👑',
    statBoosts: 'Phys Def +1, Mag Def +1, Quick Heal',
    acquisition: 'Albion sanctuaries.',
    isMetaCore: true,
    grantedSkill: {
      name: 'Quick Heal',
      cost: '1 PP',
      description: 'Heal an ally immediately upon taking damage.'
    },
    metaSquads: []
  },
  {
    id: 'holy-broach',
    name: 'Holy Broach',
    type: 'Accessory',
    icon: '✨',
    statBoosts: 'Phys Def +2, Mag Def +2, Heal 20% HP when using Active skill',
    acquisition: 'Albion cathedral.',
    isMetaCore: true,
    metaSquads: []
  },
  {
    id: 'lifeblood-talisman',
    name: 'Lifeblood Talisman',
    type: 'Accessory',
    icon: '🧿',
    statBoosts: 'Max HP +20',
    acquisition: 'Drakenhold / Elheim shops.',
    isMetaCore: true,
    metaSquads: []
  },
  {
    id: 'ervelda-s-talisman',
    name: "Ervélda's Talisman",
    type: 'Accessory',
    icon: '🧿',
    statBoosts: 'Max HP +30, Max HP +10%',
    acquisition: 'Elheim sanctuary treasure.',
    isMetaCore: true,
    metaSquads: []
  },
  {
    id: 'vitality-talisman',
    name: 'Vitality Talisman',
    type: 'Accessory',
    icon: '🧿',
    statBoosts: 'Max HP +10',
    acquisition: 'Coringia / early towns.',
    isMetaCore: true,
    metaSquads: []
  }
];

// Merge into ITEMS_DATA
AUTHENTIC_ITEMS_TO_ENSURE.forEach(newItem => {
  const existingIdx = items.findIndex(i => i.name.toLowerCase() === newItem.name.toLowerCase() || i.id === newItem.id);
  if (existingIdx >= 0) {
    items[existingIdx] = { ...items[existingIdx], ...newItem };
  } else {
    items.push(newItem);
  }
});

// Remove fake items like Thorn Shield and Executioner's Ring
items = items.filter(i => 
  i.name !== 'Thorn Shield' && 
  i.name !== "Executioner's Ring" && 
  i.name !== 'Snow White Cloak' && 
  i.name !== 'Frost Charm' && 
  i.name !== 'Owl Feather Ring' && 
  i.name !== 'Retaliation Brooch' && 
  i.name !== 'Eagle Eye Ring'
);

const newItemsContent = `import { RelicItem } from '@/types';\n\nexport const ITEMS_DATA: RelicItem[] = ${JSON.stringify(items, null, 2)};\n`;
fs.writeFileSync(itemsFile, newItemsContent, 'utf8');
console.log('Successfully sanitized src/data/items.ts with authentic in-game items and real stats!');
