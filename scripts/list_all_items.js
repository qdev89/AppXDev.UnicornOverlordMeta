const fs = require('fs');

const squadsRaw = fs.readFileSync('./src/data/zeroOverlapSquads.ts', 'utf8');
const squadsOldRaw = fs.readFileSync('./src/data/squads.ts', 'utf8');
const compendiumRaw = fs.readFileSync('./src/data/full_game_compendium.ts', 'utf8');

const allSquadText = squadsRaw + ' ' + squadsOldRaw;

const allItemMatches = new Set();
const bisMatches = allSquadText.match(/"bestInSlot":\s*"([^"]+)"/g) || [];
bisMatches.forEach(m => allItemMatches.add(m.replace(/"bestInSlot":\s*"/, '').replace(/"/, '').trim()));

const altMatches = allSquadText.match(/"optimalAlternatives":\s*\[([\s\S]*?)\]/g) || [];
altMatches.forEach(m => {
  const items = m.match(/"([^"]+)"/g) || [];
  items.forEach(i => allItemMatches.add(i.replace(/"/g, '').trim()));
});

const keyMatches = allSquadText.match(/"keyItems":\s*\[([\s\S]*?)\]/g) || [];
keyMatches.forEach(m => {
  const items = m.match(/"([^"]+)"/g) || [];
  items.forEach(i => allItemMatches.add(i.replace(/"/g, '').trim()));
});

const directMatches = allSquadText.match(/"(?:weapon|shieldOrHelm|accessory1|accessory2)":\s*"([^"]+)"/g) || [];
directMatches.forEach(m => {
  const val = m.split(':')[1].replace(/"/g, '').trim();
  if (val) allItemMatches.add(val);
});

console.log('Total unique items found:', allItemMatches.size);
console.log(Array.from(allItemMatches).sort());
