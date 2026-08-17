const fs = require('fs');
const squads = fs.readFileSync('./src/data/zeroOverlapSquads.ts', 'utf8');
const lines = squads.split('\n');
lines.forEach((l, i) => {
  if (l.includes('"id":') && l.includes('zero-')) {
    console.log(`${i+1}: ${l.trim()}`);
  }
});
