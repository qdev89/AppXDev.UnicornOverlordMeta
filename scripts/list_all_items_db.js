const fs = require('fs');
const path = require('path');

const itemsRaw = fs.readFileSync(path.join(__dirname, '../src/data/items.ts'), 'utf-8');
const items = eval(itemsRaw.substring(itemsRaw.indexOf('['), itemsRaw.lastIndexOf(']') + 1));

console.log(`Total items in database: ${items.length}`);

const byType = {};
items.forEach(i => {
  byType[i.type] = (byType[i.type] || 0) + 1;
});
console.log('Items by type:', byType);

console.log('\n--- WEAPONS ---');
items.filter(i => i.type === 'Weapon').forEach(w => {
  console.log(`  [${w.id}] "${w.name}" -> ${w.statBoosts} | Granted: ${w.grantedSkill?.name || 'None'}`);
});

console.log('\n--- SHIELDS ---');
items.filter(i => i.type === 'Shield').forEach(s => {
  console.log(`  [${s.id}] "${s.name}" -> ${s.statBoosts} | Granted: ${s.grantedSkill?.name || 'None'}`);
});
