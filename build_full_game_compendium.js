const fs = require('fs');
const path = require('path');

let rawStr = fs.readFileSync('game_metadata_raw.json', 'utf8');
if (rawStr.startsWith('\uFEFF')) {
  rawStr = rawStr.slice(1);
}
const rawData = JSON.parse(rawStr);

console.log(`Classes: ${rawData.classes.length}`);
console.log(`Weapons: ${rawData.weapons.length}`);
console.log(`Accessories: ${rawData.accessories.length}`);
console.log(`Shields: ${rawData.shields.length}`);

// Clean title helper
function cleanId(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

// Generate TS output for full game compendium
const formattedClasses = rawData.classes.map((c) => ({
  id: cleanId(c.title),
  title: c.title,
  pageid: c.pageid,
}));

const formattedEquipment = [
  ...rawData.weapons.map((w) => ({ id: cleanId(w.title), name: w.title, category: 'Weapon', pageid: w.pageid })),
  ...rawData.shields.map((s) => ({ id: cleanId(s.title), name: s.title, category: 'Shield', pageid: s.pageid })),
  ...rawData.accessories.map((a) => ({ id: cleanId(a.title), name: a.title, category: 'Accessory', pageid: a.pageid })),
];

const tsContent = `// Unicorn Overlord Full Official Metadata Compendium (496 Game Entities)

export interface GameEntityMeta {
  id: string;
  name: string;
  category: 'Class' | 'Weapon' | 'Shield' | 'Accessory';
  wikiPageId: number;
  wikiUrl: string;
}

export const FULL_GAME_CLASSES_COUNT = ${rawData.classes.length};
export const FULL_GAME_EQUIPMENT_COUNT = ${formattedEquipment.length};

export const RAW_GAME_CLASSES = ${JSON.stringify(formattedClasses, null, 2)};
export const RAW_GAME_EQUIPMENT = ${JSON.stringify(formattedEquipment, null, 2)};
`;

fs.writeFileSync('src/data/full_game_compendium.ts', tsContent, 'utf8');
console.log('Successfully generated src/data/full_game_compendium.ts');
