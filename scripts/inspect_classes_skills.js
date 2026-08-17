const fs = require('fs');

const classesRaw = fs.readFileSync('./src/data/classes.ts', 'utf8');

// Extract all classes and their skills
const classBlockRegex = /\{[\s\S]*?"id":\s*"([^"]+)"[\s\S]*?"name":\s*"([^"]+)"[\s\S]*?"activeSkills":\s*\[([\s\S]*?)\]\s*,\s*"passiveSkills":\s*\[([\s\S]*?)\]/g;
let m;
const classSkills = {};

while ((m = classBlockRegex.exec(classesRaw)) !== null) {
  const classId = m[1];
  const className = m[2];
  const activeRaw = m[3];
  const passiveRaw = m[4];

  const activeNames = (activeRaw.match(/"name":\s*"([^"]+)"/g) || []).map(s => s.replace(/"name":\s*"/, '').replace(/"/, ''));
  const passiveNames = (passiveRaw.match(/"name":\s*"([^"]+)"/g) || []).map(s => s.replace(/"name":\s*"/, '').replace(/"/, ''));

  classSkills[classId] = {
    name: className,
    active: activeNames,
    passive: passiveNames
  };
}

console.log('Total classes parsed from classes.ts:', Object.keys(classSkills).length);
console.log('\n--- SAMPLE CLASSES & SKILLS ---');
['high-lord', 'swordmaster', 'high-priestess', 'great-knight', 'sergeant', 'legionnaire', 'druid', 'sorcerer', 'sorceress', 'bishop', 'valkyria', 'dreadnought', 'prince', 'featherstaff', 'feathersword', 'doom-knight', 'werewolf', 'snow-ranger'].forEach(id => {
  if (classSkills[id]) {
    console.log(`\n[${classSkills[id].name}] (${id}):`);
    console.log('  Active:', classSkills[id].active.join(', '));
    console.log('  Passive:', classSkills[id].passive.join(', '));
  }
});
