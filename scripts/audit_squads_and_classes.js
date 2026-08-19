const fs = require('fs');
const path = require('path');

// Read files
const classesRaw = fs.readFileSync(path.join(__dirname, '../src/data/classes.ts'), 'utf-8');
const squadsRaw = fs.readFileSync(path.join(__dirname, '../src/data/zeroOverlapSquads.ts'), 'utf-8');
const itemsRaw = fs.readFileSync(path.join(__dirname, '../src/data/items.ts'), 'utf-8');

// Parse JSON objects from export
function extractArray(content, varName) {
  const match = content.match(new RegExp(`export const ${varName}:?\\s*[^=]*=\\s*(\\[[\\s\\S]*?\\]);?\\s*(export|$)`));
  if (!match) return null;
  try {
    return eval(match[1]);
  } catch (e) {
    console.error(`Failed to eval ${varName}:`, e.message);
    return null;
  }
}

const classesData = extractArray(classesRaw, 'CLASSES_DATA') || [];
const squadsData = extractArray(squadsRaw, 'ZERO_OVERLAP_SQUADS') || [];
const itemsData = extractArray(itemsRaw, 'ITEMS_DATA') || [];

console.log(`Parsed ${classesData.length} classes, ${squadsData.length} squads, ${itemsData.length} items.`);

const classIdSet = new Set(classesData.map(c => c.id.toLowerCase()));
console.log('Class IDs present:', Array.from(classIdSet).sort());

// Check all 50 heroes in squads
console.log('\n--- Checking 50 Heroes across 10 Squads ---');
const missingClasses = new Set();
const allAssignedItems = [];

squadsData.forEach((squad, sIdx) => {
  console.log(`\nSquad ${sIdx + 1}: ${squad.name}`);
  const units = squad.unitGearConfigs || [];
  units.forEach(u => {
    const uClass = classesData.find(c => c.id.toLowerCase() === u.unitId.toLowerCase() || c.name.toLowerCase() === u.className?.toLowerCase());
    if (!uClass) {
      missingClasses.add(`${u.unitId} (${u.className || u.characterName})`);
      console.log(`  ❌ Missing class in CLASSES_DATA for hero: ${u.characterName} (${u.unitId}, class: ${u.className})`);
    } else {
      const activeCount = uClass.activeSkills ? uClass.activeSkills.length : 0;
      const passiveCount = uClass.passiveSkills ? uClass.passiveSkills.length : 0;
      console.log(`  ✅ ${u.characterName} -> class "${uClass.name}" (id: ${uClass.id}) with ${activeCount} active, ${passiveCount} passive skills`);
    }

    // Check items
    const s1 = u.slot1Weapon?.bestInSlot;
    const s2 = u.slot2ShieldOrOffhand?.bestInSlot;
    const s3 = u.slot3Accessory?.bestInSlot;
    const s4 = u.slot4Accessory?.bestInSlot;
    console.log(`     Items: [W: ${s1}] [S/H: ${s2}] [A1: ${s3}] [A2: ${s4}]`);
    console.log(`     A1 Notes: "${u.slot3Accessory?.notes}" | A2 Notes: "${u.slot4Accessory?.notes}"`);
  });
});

console.log('\n--- Summary of Missing Classes in CLASSES_DATA ---');
console.log(Array.from(missingClasses));
