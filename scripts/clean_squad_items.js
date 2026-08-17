const fs = require('fs');

// 1. Read existing files
let zeroOverlapRaw = fs.readFileSync('./src/data/zeroOverlapSquads.ts', 'utf8');
let itemsRaw = fs.readFileSync('./src/data/items.ts', 'utf8');
let skillsRaw = fs.readFileSync('./src/data/skills.ts', 'utf8');

// 2. Clean dirty item strings in zeroOverlapSquads
const stringReplacements = [
  ['"Icefall Bow (Glacial Bow)"', '"Glacial Bow"'],
  ['"Owl Pin (Owl Eyes PP restoration)"', '"Owl Pin"'],
  ['"Cursed Ring (Power Belt)"', '"Power Belt"'],
  ['"Parrying Dagger (Second Blade)"', '"Parrying Dagger"'],
  ['"Sylphid Spear (Elven Spear)"', '"Sylphid Spear"'],
  ['"Hallow Cane"', '"Hallowed Cane"'],
  ['"Rose Broach"', '"Rose Brooch"'],
  ['"Holy Broach"', '"Holy Brooch"'],
  ['"Gryphon Broach"', '"Gryphon Brooch"'],
  ['"Carnat Axe"', '"Carnelian Axe"'],
  ['"Carnat Shield"', '"Carnat Shield"'],
  ['"Chlorotic"', '"Chlorotic Staff"']
];

for (const [from, to] of stringReplacements) {
  while (zeroOverlapRaw.includes(from)) {
    zeroOverlapRaw = zeroOverlapRaw.replace(from, to);
  }
}

fs.writeFileSync('./src/data/zeroOverlapSquads.ts', zeroOverlapRaw);
console.log('Cleaned up item names in zeroOverlapSquads.ts');
