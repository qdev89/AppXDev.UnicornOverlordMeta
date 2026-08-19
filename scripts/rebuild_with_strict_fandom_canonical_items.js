const fs = require('fs');
const path = require('path');

// 1. Sanitize items.ts with verified canonical Unicorn Overlord items
const itemsFile = path.join(__dirname, '../src/data/items.ts');
let itemsData = eval(fs.readFileSync(itemsFile, 'utf-8').match(/\[[\s\S]*\]/)[0]);

// Remove all fabricated items
const BANNED_ITEMS = [
  'Spiked Shield',
  "Brawler's Medallion",
  "General's Medallion",
  "Executioner's Ring",
  'Thorn Shield',
  'Dragon\'s Choker',
  'Boon Standard',
  'Sorcerous Ring',
  'Elven Tiara',
  'Pure Talisman',
  "Viper's Fang",
  'Starlight Sword',
  'Snow White Cloak',
  'Frost Charm',
  'Owl Feather Ring',
  'Retaliation Brooch',
  'Eagle Eye Ring',
  "Chloe's Ribbon",
  "Duelist's Buckler",
  'Feather Scarf',
  'Feather Plume',
  'Hawk Eye Brooch',
  'Marksman\'s Monocle'
];

itemsData = itemsData.filter(i => !BANNED_ITEMS.includes(i.name));

// Ensure authentic items are present in items.ts with exact stats
const CANONICAL_ITEMS_TO_ADD = [
  {
    id: 'kaikias-s-shield',
    name: "Kaikias's Shield",
    type: 'Shield',
    icon: '🛡️',
    statBoosts: 'Phys Def +8, Guard Rate +30%, Guard Efficiency +25%, Initiative +10',
    acquisition: 'Found in Bastorias / Elheim treasure or Armorer Shops.',
    isMetaCore: true,
    metaSquads: []
  },
  {
    id: 'earrings-of-pursuit',
    name: 'Earrings of Pursuit',
    type: 'Accessory',
    icon: '💍',
    statBoosts: 'Phys Def +1, Follow-up Skills Deal +40 Damage',
    acquisition: 'Can be bought at Drakenhold accessory merchant.',
    isMetaCore: true,
    metaSquads: []
  },
  {
    id: 'venom-blade',
    name: 'Venom Blade',
    type: 'Weapon',
    icon: '🗡️',
    statBoosts: 'Physickal Attack +18, Poison Strike',
    acquisition: 'Sold at Cornia Black Market / Drakenhold Armorer.',
    isMetaCore: true,
    metaSquads: []
  },
  {
    id: 'vorpal-sword',
    name: 'Vorpal Sword',
    type: 'Weapon',
    icon: '🗡️',
    statBoosts: 'Physickal Attack +23, Initiative +3',
    acquisition: 'Found in late-game Bastorias / Albion shops.',
    isMetaCore: true,
    metaSquads: []
  },
  {
    id: 'elite-standard',
    name: 'Elite Standard',
    type: 'Accessory',
    icon: '🚩',
    statBoosts: 'United Front: Boosts squad offensive and defensive stats in formation',
    acquisition: 'Arena reward / Albion shop.',
    isMetaCore: true,
    metaSquads: []
  },
  {
    id: 'detoxifying-amulet',
    name: 'Detoxifying Amulet',
    type: 'Accessory',
    icon: '🧿',
    statBoosts: 'Mag Def +1, Poison Cure, Poison Immunity',
    acquisition: 'Bought in early/mid game armorer shops.',
    isMetaCore: true,
    metaSquads: []
  }
];

CANONICAL_ITEMS_TO_ADD.forEach(newItem => {
  const idx = itemsData.findIndex(i => i.name.toLowerCase() === newItem.name.toLowerCase() || i.id === newItem.id);
  if (idx >= 0) {
    itemsData[idx] = { ...itemsData[idx], ...newItem };
  } else {
    itemsData.push(newItem);
  }
});

fs.writeFileSync(itemsFile, `import { RelicItem } from '@/types';\n\nexport const ITEMS_DATA: RelicItem[] = ${JSON.stringify(itemsData, null, 2)};\n`, 'utf-8');
console.log('Successfully sanitized src/data/items.ts!');
