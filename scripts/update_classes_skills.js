const fs = require('fs');
const path = require('path');

const classesFile = path.join(__dirname, '../src/data/classes.ts');
let raw = fs.readFileSync(classesFile, 'utf-8');
let classes = eval(raw.substring(raw.indexOf('['), raw.lastIndexOf(']') + 1));

// Update Renegade (Dark Marquess)
const renegade = classes.find(c => c.id === 'renegade' || c.name.includes('Marquess') || c.name.includes('Renegade'));
if (renegade) {
  renegade.name = "Dark Marquess (Axe)";
  renegade.activeSkills = [
    {
      name: "Death Spin",
      apCost: 2,
      potency: 150,
      target: "Enemy Row",
      flags: ["Physical", "Row", "Affliction Bonus"],
      description: "Whirl axe across enemy row dealing +50% bonus damage to afflicted targets."
    },
    {
      name: "Guarded Strike",
      apCost: 1,
      potency: 100,
      target: "Single Enemy",
      flags: ["Physical", "Guard"],
      description: "Strike enemy with shield, dealing physical damage and entering Medium Guard."
    },
    {
      name: "Carnage",
      apCost: 2,
      potency: 175,
      target: "Single Enemy",
      flags: ["Physical", "Finisher"],
      description: "Execute a target enemy, restoring +1 AP if target is defeated."
    }
  ];
  renegade.passiveSkills = [
    {
      name: "Eye of the Crimson Bear",
      ppCost: 1,
      trigger: "Start of Battle",
      isStartOfBattle: true,
      flags: ["Debuff", "Start of Battle"],
      description: "At Start of Battle, reduce all enemies' Initiative by 15 and Physical Attack by 20%."
    },
    {
      name: "Sanguine Pursuit",
      ppCost: 1,
      trigger: "After Ally Attacks",
      flags: ["Pursuit", "Heal", "Affliction"],
      description: "Follow-up attack afflicted enemies, dealing heavy damage and recovering 1 AP."
    },
    {
      name: "Boundless Rage",
      ppCost: 1,
      trigger: "When Damaged",
      flags: ["Buff", "AP Gain"],
      description: "Gain +1 AP and +20% Phys Atk whenever sustaining damage."
    }
  ];
}

// Write back classes.ts
const newClassesExport = `import { UnitClass } from '@/types';\n\nexport const CLASSES_DATA: UnitClass[] = ${JSON.stringify(classes, null, 2)};\n`;
fs.writeFileSync(classesFile, newClassesExport, 'utf-8');
console.log('✅ Successfully updated CLASSES_DATA in src/data/classes.ts');
