const fs = require('fs');

const squads = JSON.parse(fs.readFileSync('./scripts/squad1_fixed.json', 'utf8'));

// Let's read current zeroOverlapSquads
const raw = fs.readFileSync('./src/data/zeroOverlapSquads.ts', 'utf8');

// Replace Squad 1 in zeroOverlapSquads with the fixed Squad 1!
const squad1Replacement = JSON.stringify(squads, null, 2);

// Let's replace squad 1 in zeroOverlapSquads.ts
const fixedContent = raw.replace(
  /\{\s*"id":\s*"zero-1-alain-holy-vanguard"[\s\S]*?substitutes:\s*\{[\s\S]*?\}\s*\}/,
  squad1Replacement
);

fs.writeFileSync('./src/data/zeroOverlapSquads.ts', fixedContent);
console.log('Successfully updated Squad 1 in zeroOverlapSquads.ts!');
