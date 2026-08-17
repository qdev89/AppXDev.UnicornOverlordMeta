const fs = require('fs');

const skillsRaw = fs.readFileSync('./src/data/skills.ts', 'utf8');
const squadsRaw = fs.readFileSync('./src/data/zeroOverlapSquads.ts', 'utf8');

// Extract all skills from skills.ts
const skillsInDatabase = new Set();
const skillRegex = /"name":\s*"([^"]+)"/g;
let m;
while ((m = skillRegex.exec(skillsRaw)) !== null) {
  skillsInDatabase.add(m[1].toLowerCase().trim());
}

// Extract tactic skills from zeroOverlapSquads
const tacticSkills = new Set();
const tacticRegex = /"skill":\s*"([^"]+)"/g;
while ((m = tacticRegex.exec(squadsRaw)) !== null) {
  tacticSkills.add(m[1].trim());
}

console.log('Total tactic skills in squads:', tacticSkills.size);
const missingInSkillsData = [];

tacticSkills.forEach(skill => {
  if (!skillsInDatabase.has(skill.toLowerCase())) {
    missingInSkillsData.push(skill);
  }
});

console.log('Tactic skills missing from SKILLS_DATA:', missingInSkillsData.length);
if (missingInSkillsData.length > 0) {
  console.log('Missing list:', missingInSkillsData);
}
