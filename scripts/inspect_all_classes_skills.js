const fs = require('fs');
const path = require('path');

const classesRaw = fs.readFileSync(path.join(__dirname, '../src/data/classes.ts'), 'utf-8');
const cleanClasses = classesRaw.substring(classesRaw.indexOf('['), classesRaw.lastIndexOf(']') + 1);
let classes;
try {
  classes = JSON.parse(cleanClasses);
} catch(e) {
  classes = eval(cleanClasses);
}

console.log(`=== ALL ${classes.length} CLASSES IN CLASSES_DATA ===\n`);

classes.forEach((c, idx) => {
  console.log(`${idx + 1}. [${c.id}] ${c.name} (${c.role}, ${c.category})`);
  console.log(`   Image: ${c.image || 'NONE'}`);
  console.log(`   Active Skills:`);
  (c.activeSkills || []).forEach(s => {
    console.log(`     - ${s.name} (${s.apCost} AP, target: ${s.target || 'None'}) | ${s.description?.slice(0, 60)}...`);
  });
  console.log(`   Passive Skills:`);
  (c.passiveSkills || []).forEach(s => {
    console.log(`     - ${s.name} (${s.ppCost} PP, trigger: ${s.trigger || 'None'}) | ${s.description?.slice(0, 60)}...`);
  });
  console.log('');
});
