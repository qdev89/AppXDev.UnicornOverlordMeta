const fs = require('fs');

// We can compile TypeScript files or evaluate their data
// Let's inspect items.ts, zeroOverlapSquads.ts, squads.ts, classes.ts, skills.ts

const itemsRaw = fs.readFileSync('./src/data/items.ts', 'utf8');
const squadsRaw = fs.readFileSync('./src/data/zeroOverlapSquads.ts', 'utf8');
const classesRaw = fs.readFileSync('./src/data/classes.ts', 'utf8');
const skillsRaw = fs.readFileSync('./src/data/skills.ts', 'utf8');
const compendiumRaw = fs.existsSync('./src/data/full_game_compendium.ts') ? fs.readFileSync('./src/data/full_game_compendium.ts', 'utf8') : '';

console.log('--- AUDITING ITEMS & TACTICS ---');

// Extract all item names from items.ts
const itemNameRegex = /name:\s*['"]([^'"]+)['"]/g;
const itemNames = new Set();
let match;
while ((match = itemNameRegex.exec(itemsRaw)) !== null) {
  itemNames.add(match[1]);
}

console.log('Total items registered in items.ts:', itemNames.size);

// Extract all items mentioned in zeroOverlapSquads
const keyItemRegex = /"keyItems":\s*\[([\s\S]*?)\]/g;
const referencedKeyItems = new Set();
while ((match = keyItemRegex.exec(squadsRaw)) !== null) {
  const items = match[1].match(/"([^"]+)"/g) || [];
  items.forEach(i => referencedKeyItems.add(i.replace(/"/g, '')));
}

const bisRegex = /"bestInSlot":\s*"([^"]+)"/g;
const referencedBisItems = new Set();
while ((match = bisRegex.exec(squadsRaw)) !== null) {
  referencedBisItems.add(match[1]);
}

const altRegex = /"optimalAlternatives":\s*\[([\s\S]*?)\]/g;
const referencedAltItems = new Set();
while ((match = altRegex.exec(squadsRaw)) !== null) {
  const items = match[1].match(/"([^"]+)"/g) || [];
  items.forEach(i => referencedAltItems.add(i.replace(/"/g, '')));
}

const allReferencedItems = new Set([...referencedKeyItems, ...referencedBisItems, ...referencedAltItems]);
console.log('Total unique items referenced in zeroOverlapSquads:', allReferencedItems.size);

const missingItems = [];
allReferencedItems.forEach(item => {
  // clean comparison
  const clean = item.toLowerCase().replace(/[^a-z0-9]/g, '');
  let found = false;
  for (const registered of itemNames) {
    const regClean = registered.toLowerCase().replace(/[^a-z0-9]/g, '');
    if (regClean === clean || regClean.includes(clean) || clean.includes(regClean)) {
      found = true;
      break;
    }
  }
  if (!found) {
    missingItems.push(item);
  }
});

console.log('Missing / unregistered items in items.ts:', missingItems.length);
if (missingItems.length > 0) {
  console.log('Missing list:', missingItems);
}

// Check skills in skills.ts and classes.ts
const skillNameRegex = /name:\s*['"]([^'"]+)['"]/g;
const skillNames = new Set();
while ((match = skillNameRegex.exec(skillsRaw)) !== null) {
  skillNames.add(match[1]);
}
while ((match = skillNameRegex.exec(classesRaw)) !== null) {
  skillNames.add(match[1]);
}

console.log('Total skills found in skills.ts and classes.ts:', skillNames.size);

// Extract tactics skills from zeroOverlapSquads
const tacticSkillRegex = /"skill":\s*"([^"]+)"/g;
const referencedTacticSkills = new Set();
while ((match = tacticSkillRegex.exec(squadsRaw)) !== null) {
  referencedTacticSkills.add(match[1]);
}

console.log('Total tactic skills referenced in zeroOverlapSquads:', referencedTacticSkills.size);

const missingSkills = [];
referencedTacticSkills.forEach(skill => {
  const clean = skill.toLowerCase().replace(/[^a-z0-9]/g, '');
  let found = false;
  for (const s of skillNames) {
    const sClean = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    if (sClean === clean || sClean.includes(clean) || clean.includes(sClean)) {
      found = true;
      break;
    }
  }
  if (!found) {
    missingSkills.push(skill);
  }
});

console.log('Missing / unregistered skills:', missingSkills.length);
if (missingSkills.length > 0) {
  console.log('Missing skills list:', missingSkills);
}
