const fs = require('fs');

let squadsRaw = fs.readFileSync('./src/data/zeroOverlapSquads.ts', 'utf8');

// Fix item spelling
squadsRaw = squadsRaw.replace(/Dragoon's War Spear/g, "Dragoon's Warspear");
squadsRaw = squadsRaw.replace(/Wolf-Fang Bracelet/g, "Wolf Fang Bracelet");

// Fix tactic skill names
const SKILL_NAME_FIXES = {
  "Sacred Light": "Holy Light",
  "Line Charge": "Wild Rush",
  "Parrying Slash": "Parry",
  "Sandstorm": "Defensive Curse",
  "Row Cover": "Heavy Cover",
  "Grand Crusher": "Enraged Strike"
};

for (const [oldSkill, newSkill] of Object.entries(SKILL_NAME_FIXES)) {
  const reg = new RegExp(`"skill":\\s*"${oldSkill}"`, 'g');
  squadsRaw = squadsRaw.replace(reg, `"skill": "${newSkill}"`);
}

fs.writeFileSync('./src/data/zeroOverlapSquads.ts', squadsRaw);
console.log('Fixed item names and tactic skill names in zeroOverlapSquads.ts!');
