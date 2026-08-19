const fs = require('fs');
const path = require('path');
const itemsRaw = fs.readFileSync(path.join(__dirname, '../src/data/items.ts'), 'utf-8');
const match = itemsRaw.match(/export const ITEMS_DATA:[^=]*=\s*(\[[\\s\\S]*?\]);\s*export/);
let items;
try {
  const cleanStr = itemsRaw.slice(itemsRaw.indexOf('['), itemsRaw.lastIndexOf(']') + 1);
  items = JSON.parse(cleanStr);
} catch(e) {
  // eval fallback
  items = eval(itemsRaw.substring(itemsRaw.indexOf('['), itemsRaw.lastIndexOf(']') + 1));
}

const testItems = ["Pursuant's Blade", "Thief's Mantle", "Ring of the Unicorn", "Raven Plume"];
testItems.forEach(name => {
  const clean = name.toLowerCase();
  const found = items.find(
    (i) => i.name.toLowerCase() === clean || clean.includes(i.name.toLowerCase()) || i.name.toLowerCase().includes(clean)
  );
  console.log('Testing item:', name, '-> Matched item in DB:', found ? found.name : 'none', '| Granted Skill:', found?.grantedSkill);
});
