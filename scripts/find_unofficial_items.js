const fs = require('fs');

const squadsRaw = fs.readFileSync('./src/data/zeroOverlapSquads.ts', 'utf8');
const officialItems = JSON.parse(fs.readFileSync('./scripts/official_items_extracted.json', 'utf8'));

const officialItemNames = new Set(officialItems.map(i => i.name.toLowerCase().trim()));

// Let's find all items in zeroOverlapSquads that are NOT in officialItemNames
const bisMatches = squadsRaw.match(/"bestInSlot":\s*"([^"]+)"/g) || [];
const altMatches = squadsRaw.match(/"optimalAlternatives":\s*\[([\s\S]*?)\]/g) || [];
const keyMatches = squadsRaw.match(/"keyItems":\s*\[([\s\S]*?)\]/g) || [];

const usedItems = new Set();
bisMatches.forEach(m => usedItems.add(m.replace(/"bestInSlot":\s*"/, '').replace(/"/, '').trim()));
altMatches.forEach(m => {
  const items = m.match(/"([^"]+)"/g) || [];
  items.forEach(i => usedItems.add(i.replace(/"/g, '').trim()));
});
keyMatches.forEach(m => {
  const items = m.match(/"([^"]+)"/g) || [];
  items.forEach(i => usedItems.add(i.replace(/"/g, '').trim()));
});

const invalidItems = [];
usedItems.forEach(item => {
  if (!officialItemNames.has(item.toLowerCase().trim())) {
    // Check if there is a close match
    let matched = false;
    for (const off of officialItemNames) {
      if (off === item.toLowerCase() || off.replace(/[^a-z0-9]/g, '') === item.toLowerCase().replace(/[^a-z0-9]/g, '')) {
        matched = true;
        break;
      }
    }
    if (!matched) {
      invalidItems.push(item);
    }
  }
});

console.log('Total unique items used in zeroOverlapSquads:', usedItems.size);
console.log('Items NOT in official 425 Unicorn Overlord equipment compendium:', invalidItems.length);
console.log(invalidItems);
