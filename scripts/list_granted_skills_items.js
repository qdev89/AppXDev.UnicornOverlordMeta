const fs = require('fs');
const path = require('path');

const itemsRaw = fs.readFileSync(path.join(__dirname, '../src/data/items.ts'), 'utf-8');
const cleanItems = itemsRaw.substring(itemsRaw.indexOf('['), itemsRaw.lastIndexOf(']') + 1);
const items = eval(cleanItems);

console.log(`=== ALL ITEMS WITH GRANTED SKILLS (${items.filter(i => i.grantedSkill).length} items) ===\n`);

items.filter(i => i.grantedSkill).forEach(i => {
  console.log(`- [${i.id}] ${i.name} (${i.type}):`);
  console.log(`    Stat Boosts: ${i.statBoosts}`);
  console.log(`    Granted Skill: ${i.grantedSkill.name} (${i.grantedSkill.cost}) - ${i.grantedSkill.description}`);
});
