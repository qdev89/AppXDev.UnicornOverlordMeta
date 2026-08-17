const fs = require('fs');

const itemsRaw = fs.readFileSync('./src/data/items.ts', 'utf8');
const squadsRaw = fs.readFileSync('./src/data/zeroOverlapSquads.ts', 'utf8');
const classesRaw = fs.readFileSync('./src/data/classes.ts', 'utf8');
const skillsRaw = fs.readFileSync('./src/data/skills.ts', 'utf8');

console.log('=== UNICORN OVERLORD META MASTER AUDIT ===\n');

// 1. Audit Items
const itemNames = new Set();
const itemObjRegex = /"name":\s*"([^"]+)"/g;
let m;
while ((m = itemObjRegex.exec(itemsRaw)) !== null) {
  itemNames.add(m[1].toLowerCase().trim());
}

const squadItems = new Set();
const bisRegex = /"bestInSlot":\s*"([^"]+)"/g;
while ((m = bisRegex.exec(squadsRaw)) !== null) squadItems.add(m[1].trim());

const altRegex = /"optimalAlternatives":\s*\[([\s\S]*?)\]/g;
while ((m = altRegex.exec(squadsRaw)) !== null) {
  const items = m[1].match(/"([^"]+)"/g) || [];
  items.forEach(i => squadItems.add(i.replace(/"/g, '').trim()));
}

const keyRegex = /"keyItems":\s*\[([\s\S]*?)\]/g;
while ((m = keyRegex.exec(squadsRaw)) !== null) {
  const items = m[1].match(/"([^"]+)"/g) || [];
  items.forEach(i => squadItems.add(i.replace(/"/g, '').trim()));
}

let missingItems = [];
squadItems.forEach(item => {
  if (!itemNames.has(item.toLowerCase())) {
    missingItems.push(item);
  }
});

console.log(`1. ITEMS AUDIT:`);
console.log(`   - Master Items Database: ${itemNames.size} items`);
console.log(`   - Unique Items in Squads: ${squadItems.size} items`);
console.log(`   - Missing Items: ${missingItems.length}`);
if (missingItems.length > 0) console.log('     ', missingItems);

// 2. Audit Tactics & Skills
const skillNames = new Set();
const skillRegex = /"name":\s*"([^"]+)"/g;
while ((m = skillRegex.exec(skillsRaw)) !== null) {
  skillNames.add(m[1].toLowerCase().trim());
}

const squadSkills = new Set();
const tacticRegex = /"skill":\s*"([^"]+)"/g;
while ((m = tacticRegex.exec(squadsRaw)) !== null) squadSkills.add(m[1].trim());

let missingSkills = [];
squadSkills.forEach(skill => {
  if (!skillNames.has(skill.toLowerCase())) {
    missingSkills.push(skill);
  }
});

console.log(`\n2. TACTICS & SKILLS AUDIT:`);
console.log(`   - Master Skills Database: ${skillNames.size} skills`);
console.log(`   - Unique Tactic Skills in Squads: ${squadSkills.size} skills`);
console.log(`   - Missing Skills: ${missingSkills.length}`);
if (missingSkills.length > 0) console.log('     ', missingSkills);

// 3. Audit Classes & Heroes
const classIds = new Set();
const classIdRegex = /"id":\s*"([^"]+)"/g;
while ((m = classIdRegex.exec(classesRaw)) !== null) {
  classIds.add(m[1].toLowerCase().trim());
}

// Add canonical aliases
const resolveUnitClassId = (unitId) => {
  const cleanId = unitId.toLowerCase().trim();
  if (classIds.has(cleanId)) return cleanId;

  // Extract class part after last dash if matches
  const parts = cleanId.split('-');
  for (let i = 1; i < parts.length; i++) {
    const candidate = parts.slice(i).join('-');
    if (classIds.has(candidate)) return candidate;
  }

  // Common aliases
  if (cleanId.includes('sainted-knight')) return 'sainted-knight';
  if (cleanId.includes('bishop') || cleanId.includes('cleric')) return 'bishop';
  if (cleanId.includes('prince')) return 'prince';
  if (cleanId.includes('renegade') || cleanId.includes('dark-marquess')) return 'renegade';
  if (cleanId.includes('shieldshooter') || cleanId.includes('arbalist')) return 'shieldshooter';
  if (cleanId.includes('vanguard')) return 'vanguard';
  if (cleanId.includes('legionnaire') || cleanId.includes('hoplite')) return 'legionnaire';
  if (cleanId.includes('snow-ranger')) return 'snow-ranger';
  if (cleanId.includes('elven-fencer')) return 'elven-fencer';
  if (cleanId.includes('elven-augur')) return 'elven-augur';
  if (cleanId.includes('elven-sibyl')) return 'elven-sibyl';
  if (cleanId.includes('elven-archer')) return 'elven-archer';
  if (cleanId.includes('dreadnought')) return 'dreadnought';
  if (cleanId.includes('werebear')) return 'werebear';
  if (cleanId.includes('werewolf')) return 'werewolf';
  if (cleanId.includes('featherbow')) return 'featherbow';
  if (cleanId.includes('feathersword')) return 'feathersword';
  if (cleanId.includes('featherstaff')) return 'featherstaff';
  if (cleanId.includes('doom-knight')) return 'doom-knight';
  if (cleanId.includes('landsknecht')) return 'landsknecht';
  if (cleanId.includes('wyvern-master')) return 'wyvern-master';
  if (cleanId.includes('gryphon-master')) return 'gryphon-master';

  return null;
};

const squadUnits = new Set();
const rowRegex = /"(?:frontRow|backRow)":\s*\[([\s\S]*?)\]/g;
while ((m = rowRegex.exec(squadsRaw)) !== null) {
  const units = m[1].match(/"([^"]+)"/g) || [];
  units.forEach(u => squadUnits.add(u.replace(/"/g, '').trim()));
}

let missingUnits = [];
squadUnits.forEach(u => {
  const resolved = resolveUnitClassId(u);
  if (!resolved || !classIds.has(resolved)) {
    missingUnits.push(u);
  }
});

console.log(`\n3. ROSTER & UNITS AUDIT:`);
console.log(`   - Master Classes Database: ${classIds.size} classes`);
console.log(`   - Unique Heroes in Squads: ${squadUnits.size} units`);
console.log(`   - Missing Units: ${missingUnits.length}`);
if (missingUnits.length > 0) console.log('     ', missingUnits);

if (missingItems.length === 0 && missingSkills.length === 0 && missingUnits.length === 0) {
  console.log('\n>>> AUDIT PASSED WITH 100% DATA INTEGRITY! <<<');
} else {
  console.log('\n>>> AUDIT FOUND MISSING ENTRIES! <<<');
}
