const fs = require('fs');
const path = require('path');
const classesRaw = fs.readFileSync(path.join(__dirname, '../src/data/classes.ts'), 'utf-8');
const cleanClasses = classesRaw.substring(classesRaw.indexOf('['), classesRaw.lastIndexOf(']') + 1);
const classes = eval(cleanClasses);
classes.slice(0, 23).forEach((c, idx) => {
  console.log(`${idx + 1}. [${c.id}] ${c.name} (${(c.activeSkills || []).length} active, ${(c.passiveSkills || []).length} passive)`);
  console.log(`   Active: ${(c.activeSkills || []).map(s => s.name + ' (' + s.apCost + 'AP)').join(', ')}`);
  console.log(`   Passive: ${(c.passiveSkills || []).map(s => s.name + ' (' + s.ppCost + 'PP)').join(', ')}`);
});
