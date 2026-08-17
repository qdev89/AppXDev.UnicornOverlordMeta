const fs = require('fs');

const itemsRaw = fs.readFileSync('./src/data/items.ts', 'utf8');
const squadsRaw = fs.readFileSync('./src/data/zeroOverlapSquads.ts', 'utf8');
const classesRaw = fs.readFileSync('./src/data/classes.ts', 'utf8');
const skillsRaw = fs.readFileSync('./src/data/skills.ts', 'utf8');

// Parse items from items.ts
const itemNames = new Set();
const itemSkillMap = new Map();
const itemObjRegex = /"name":\s*["']([^"']+)["']/g;
let m;
while ((m = itemObjRegex.exec(itemsRaw)) !== null) {
  itemNames.add(m[1]);
}

console.log('Parsed registered items in items.ts:', itemNames.size);

// Extract all items from zeroOverlapSquads.ts
const squadItems = new Set();
const keyItemRegex = /"keyItems":\s*\[([\s\S]*?)\]/g;
while ((m = keyItemRegex.exec(squadsRaw)) !== null) {
  const items = m[1].match(/"([^"]+)"/g) || [];
  items.forEach(i => squadItems.add(i.replace(/"/g, '').trim()));
}

const bisRegex = /"bestInSlot":\s*"([^"]+)"/g;
while ((m = bisRegex.exec(squadsRaw)) !== null) {
  squadItems.add(m[1].trim());
}

const altRegex = /"optimalAlternatives":\s*\[([\s\S]*?)\]/g;
while ((m = altRegex.exec(squadsRaw)) !== null) {
  const items = m[1].match(/"([^"]+)"/g) || [];
  items.forEach(i => squadItems.add(i.replace(/"/g, '').trim()));
}

const directWeaponRegex = /"(?:weapon|shieldOrHelm|accessory1|accessory2)":\s*"([^"]+)"/g;
while ((m = directWeaponRegex.exec(squadsRaw)) !== null) {
  squadItems.add(m[1].trim());
}

console.log('Total items in squad builds:', squadItems.size);

const unindexedItems = [];
squadItems.forEach(item => {
  const clean = item.toLowerCase().replace(/[^a-z0-9]/g, '');
  let found = false;
  for (const reg of itemNames) {
    const regClean = reg.toLowerCase().replace(/[^a-z0-9]/g, '');
    if (regClean === clean || regClean.includes(clean) || clean.includes(regClean)) {
      found = true;
      break;
    }
  }
  if (!found) {
    unindexedItems.push(item);
  }
});

console.log('\n--- UNINDEXED ITEMS (' + unindexedItems.length + ') ---');
console.log(JSON.stringify(unindexedItems, null, 2));
