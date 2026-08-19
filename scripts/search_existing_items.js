const fs = require('fs');
const path = require('path');

const itemsRaw = fs.readFileSync(path.join(__dirname, '../src/data/items.ts'), 'utf-8');
const items = eval(itemsRaw.substring(itemsRaw.indexOf('['), itemsRaw.lastIndexOf(']') + 1));

console.log('--- SEARCHING ITEMS IN DB ---');
['rose', 'blue', 'zenoiran', 'maiden', 'choker', 'papal', 'spear', 'staff', 'blade', 'sword', 'axe', 'bow'].forEach(term => {
  const matches = items.filter(i => i.name.toLowerCase().includes(term));
  console.log(`\nMatches for "${term}" (${matches.length}):`);
  matches.slice(0, 10).forEach(m => console.log(`  [${m.id}] "${m.name}" (${m.type})`));
});
