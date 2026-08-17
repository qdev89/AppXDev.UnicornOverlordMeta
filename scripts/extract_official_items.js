const fs = require('fs');
const compRaw = fs.readFileSync('./src/data/full_game_compendium.ts', 'utf8');

const regex = /"id":\s*"([^"]+)",\s*"name":\s*"([^"]+)",\s*"category":\s*"([^"]+)",\s*"pageid":\s*(\d+)/g;
const items = [];
let m;
while ((m = regex.exec(compRaw)) !== null) {
  items.push({ id: m[1], name: m[2], category: m[3], pageid: parseInt(m[4]) });
}

fs.writeFileSync('./scripts/official_items_extracted.json', JSON.stringify(items, null, 2));
console.log('Saved', items.length, 'official items to scripts/official_items_extracted.json');

// Group by category and print counts
const byCat = {};
items.forEach(i => {
  byCat[i.category] = (byCat[i.category] || 0) + 1;
});
console.log('Category breakdown:', byCat);
