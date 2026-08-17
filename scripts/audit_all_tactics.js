const fs = require('fs');

const squadsRaw = fs.readFileSync('./src/data/zeroOverlapSquads.ts', 'utf8');
const squadsOldRaw = fs.readFileSync('./src/data/squads.ts', 'utf8');
const classesRaw = fs.readFileSync('./src/data/classes.ts', 'utf8');
const skillsRaw = fs.readFileSync('./src/data/skills.ts', 'utf8');
const itemsRaw = fs.readFileSync('./src/data/items.ts', 'utf8');

console.log('=== AUDITING ALL SQUAD TACTICS & SKILLS ===');

// Extract tactics sequences from zeroOverlapSquads
const tacticsRegex = /"tacticsSequence":\s*\[([\s\S]*?)\]\s*,\s*"(?:pros|cons|strategyGuide|unitGearConfigs)/g;
let match;
let squadIndex = 1;

while ((match = tacticsRegex.exec(squadsRaw)) !== null) {
  console.log(`\nSquad ${squadIndex} Tactics:`);
  const rawTactics = match[1];
  const stepRegex = /\{[\s\S]*?"step":\s*(\d+)[\s\S]*?"unit":\s*"([^"]+)"[\s\S]*?"skill":\s*"([^"]+)"[\s\S]*?"condition1":\s*"([^"]+)"[\s\S]*?"condition2":\s*"([^"]+)"[\s\S]*?"notes":\s*"([^"]+)"[\s\S]*?\}/g;
  let stepMatch;
  let count = 0;
  while ((stepMatch = stepRegex.exec(rawTactics)) !== null) {
    count++;
    console.log(`  Step ${stepMatch[1]}: [${stepMatch[2]}] uses [${stepMatch[3]}] | Cond1: "${stepMatch[4]}" | Cond2: "${stepMatch[5]}"`);
  }
  if (count === 0) {
    console.log('  (No standard steps matched, raw length:', rawTactics.length, ')');
  }
  squadIndex++;
}
