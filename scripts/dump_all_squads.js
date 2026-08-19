const fs = require('fs');
const path = require('path');

const squadsRaw = fs.readFileSync(path.join(__dirname, '../src/data/zeroOverlapSquads.ts'), 'utf-8');
const cleanStr = squadsRaw.substring(squadsRaw.indexOf('['), squadsRaw.lastIndexOf(']') + 1);
const squads = eval(cleanStr);

squads.forEach((squad, i) => {
  console.log(`\n==================================================`);
  console.log(`SQUAD ${i+1}: ${squad.name}`);
  console.log(`Front: ${squad.frontRow.join(', ')} | Back: ${squad.backRow.join(', ')}`);
  console.log(`==================================================`);
  squad.unitGearConfigs.forEach(u => {
    console.log(`\n  Unit: ${u.characterName} (${u.className}) [ID: ${u.unitId}]`);
    console.log(`    W:   ${u.slot1Weapon?.bestInSlot} -> "${u.slot1Weapon?.notes}"`);
    console.log(`    S/H: ${u.slot2ShieldOrOffhand?.bestInSlot} -> "${u.slot2ShieldOrOffhand?.notes}"`);
    console.log(`    A1:  ${u.slot3Accessory?.bestInSlot} -> "${u.slot3Accessory?.notes}"`);
    console.log(`    A2:  ${u.slot4Accessory?.bestInSlot} -> "${u.slot4Accessory?.notes}"`);
  });
  console.log(`\n  Tactics Sequence (${(squad.tacticsSequence || []).length} steps):`);
  (squad.tacticsSequence || []).forEach(t => {
    console.log(`    Step ${t.step}: [${t.unit}] ${t.skill} | Cond1: ${t.condition1} | Cond2: ${t.condition2} | "${t.notes}"`);
  });
});
