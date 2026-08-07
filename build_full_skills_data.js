const fs = require('fs');

const classesTs = fs.readFileSync('src/data/classes.ts', 'utf8');
const itemsTs = fs.readFileSync('src/data/items.ts', 'utf8');

// Parse classes array string
const classMatches = [...classesTs.matchAll(/"name":\s*"([^"]+)",[\s\S]*?"activeSkills":\s*(\[[\s\S]*?\]),\s*"passiveSkills":\s*(\[[\s\S]*?\])/g)];

console.log(`Matched ${classMatches.length} class skill definitions.`);

const skillsList = [];

// Hero & Class Skills
classMatches.forEach((m) => {
  const className = m[1];
  try {
    const actives = JSON.parse(m[2]);
    const passives = JSON.parse(m[3]);

    actives.forEach((a) => {
      skillsList.push({
        id: a.name.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
        name: a.name,
        type: 'Active',
        cost: `${a.apCost} AP`,
        potency: a.potency,
        target: a.target,
        classSource: className,
        description: a.description,
        flags: a.flags || ['Physical'],
      });
    });

    passives.forEach((p) => {
      skillsList.push({
        id: p.name.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
        name: p.name,
        type: p.isStartOfBattle || p.trigger === 'Start of Battle' ? 'Start of Battle' : 'Passive',
        cost: `${p.ppCost} PP`,
        potency: 0,
        target: 'Self / Allies',
        classSource: className,
        description: p.description,
        flags: [p.trigger || 'Passive'],
      });
    });
  } catch (err) {
    // Ignore parse errors on individual regex matches
  }
});

// Iconic Valor Skills
const valorSkills = [
  {
    id: 'cavalry-call',
    name: 'Cavalry Call',
    type: 'Valor',
    cost: '1 VP',
    target: 'Area',
    classSource: 'Great Knight',
    description: 'Increases movement speed of all nearby cavalry units by +50% for 30 seconds.',
    flags: ['Field Movement', 'Buff'],
  },
  {
    id: 'arrow-rain-valor',
    name: 'Arrow Rain',
    type: 'Valor',
    cost: '2 VP',
    target: 'Target Area',
    classSource: 'Snow Ranger',
    description: 'Fires a volley of arrows dealing physical damage to enemy units in target area.',
    flags: ['Field Damage', 'Ranged'],
  },
  {
    id: 'wild-surge',
    name: 'Wild Surge',
    type: 'Valor',
    cost: '1 VP',
    target: 'Self Squad',
    classSource: 'Renegade',
    description: 'Instantly recovers 2 AP for all units in current squad.',
    flags: ['AP Recovery', 'Squad Buff'],
  },
  {
    id: 'teleport-valor',
    name: 'Teleport',
    type: 'Valor',
    cost: '1 VP',
    target: 'Ally Garrison',
    classSource: 'Sorceress',
    description: 'Instantly teleports user squad to any captured allied garrison.',
    flags: ['Field Mobility'],
  },
  {
    id: 'sanctuary',
    name: 'Sanctuary',
    type: 'Valor',
    cost: '2 VP',
    target: 'Area',
    classSource: 'Bishop',
    description: 'Heals 50% HP for all allied squads within area of effect.',
    flags: ['Field Heal'],
  },
  {
    id: 'blade-storm-valor',
    name: 'Blade Storm',
    type: 'Valor',
    cost: '2 VP',
    target: 'Target Area',
    classSource: 'Swordmaster',
    description: 'Unleashes a storm of slashes dealing 150 potency physical damage.',
    flags: ['Field Damage'],
  },
  {
    id: 'sandstorm-field',
    name: 'Sandstorm Field',
    type: 'Valor',
    cost: '2 VP',
    target: 'Enemy Squad',
    classSource: 'Druid',
    description: 'Inflicts Blindness and reduces movement speed by 40% on targeted enemy squad.',
    flags: ['Field Debuff'],
  },
  {
    id: 'royal-order-valor',
    name: 'Royal Order',
    type: 'Valor',
    cost: '1 VP',
    target: 'Self Squad',
    classSource: 'High Lord',
    description: 'Increases Valor EXP gained from current combat encounter by +100%.',
    flags: ['EXP Buff'],
  },
];

const allSkills = [...skillsList, ...valorSkills];

const fileContent = `import { GameSkill } from '@/types';

export const SKILLS_DATA: GameSkill[] = ${JSON.stringify(allSkills, null, 2)};
`;

fs.writeFileSync('src/data/skills.ts', fileContent, 'utf8');
console.log(`Generated src/data/skills.ts with ${allSkills.length} total skills.`);
