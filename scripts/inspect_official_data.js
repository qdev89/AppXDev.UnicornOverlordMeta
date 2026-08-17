const fs = require('fs');

const compRaw = fs.readFileSync('./src/data/full_game_compendium.ts', 'utf8');

const nameRegex = /"name":\s*"([^"]+)"/g;
const officialItems = [];
let m;
while ((m = nameRegex.exec(compRaw)) !== null) {
  officialItems.push(m[1]);
}

console.log('Total official items in compendium:', officialItems.length);

const catRegex = /"name":\s*"([^"]+)",\s*"category":\s*"([^"]+)"/g;
const itemsByCategory = {
  Weapon: [],
  Shield: [],
  Accessory: []
};

while ((m = catRegex.exec(compRaw)) !== null) {
  if (itemsByCategory[m[2]]) {
    itemsByCategory[m[2]].push(m[1]);
  }
}

console.log('Weapons count:', itemsByCategory.Weapon.length);
console.log('Shields count:', itemsByCategory.Shield.length);
console.log('Accessories count:', itemsByCategory.Accessory.length);

console.log('\n--- SAMPLE OFFICIAL WEAPONS ---');
console.log(itemsByCategory.Weapon.slice(0, 20));

console.log('\n--- SAMPLE OFFICIAL SHIELDS ---');
console.log(itemsByCategory.Shield.slice(0, 20));

console.log('\n--- SAMPLE OFFICIAL ACCESSORIES ---');
console.log(itemsByCategory.Accessory.slice(0, 20));
