const fs = require('fs');
const path = require('path');
const itemsRaw = fs.readFileSync(path.join(__dirname, '../src/data/items.ts'), 'utf-8');
const items = eval(itemsRaw.substring(itemsRaw.indexOf('['), itemsRaw.lastIndexOf(']') + 1));

console.log('--- ALL SHIELDS IN DATABASE ---');
items.filter(i => i.type === 'Shield').forEach(s => {
  console.log(`  [${s.id}] "${s.name}" -> ${s.statBoosts} | Granted: ${s.grantedSkill?.name || 'None'}`);
});

console.log('\n--- ALL ACCESSORIES IN DATABASE ---');
console.log(`Total accessories: ${items.filter(i => i.type === 'Accessory').length}`);
