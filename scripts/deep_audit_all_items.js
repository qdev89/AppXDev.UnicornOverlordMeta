const fs = require('fs');
const path = require('path');

const rebuildScript = path.join(__dirname, 'rebuild_all_10_zero_overlap_squads.js');
const content = fs.readFileSync(rebuildScript, 'utf-8');
const squads = eval(content.match(/const ZERO_OVERLAP_SQUADS = (\[[\s\S]*?\]);\n\n/)[1]);

const itemsFile = path.join(__dirname, '../src/data/items.ts');
const itemsContent = fs.readFileSync(itemsFile, 'utf-8');
const itemsData = eval(itemsContent.match(/\[[\s\S]*\]/)[0]);
const itemMap = new Map();
itemsData.forEach(i => itemMap.set(i.name.toLowerCase(), i));

console.log('Total squads loaded:', squads.length);
console.log('Total items in items.ts:', itemsData.length);

console.log('\n=== ITEM VERIFICATION REPORT ===\n');

let issues = 0;
squads.forEach((sq, sIdx) => {
  sq.unitGearConfigs.forEach(u => {
    ['slot1Weapon', 'slot2ShieldOrOffhand', 'slot3Accessory', 'slot4Accessory'].forEach(slot => {
      const g = u[slot];
      if (g) {
        const itemInfo = itemMap.get(g.bestInSlot.toLowerCase());
        const exists = !!itemInfo;
        let noteIssue = false;
        
        // Specific known stat checks
        if (g.bestInSlot.toLowerCase() === 'vitality talisman' && g.notes.includes('+25')) {
          noteIssue = true;
        }

        if (!exists || noteIssue) {
          issues++;
          console.log(`❌ [Squad ${sIdx + 1} - ${sq.name}] ${u.characterName} -> ${slot}: "${g.bestInSlot}" (${g.slotType})`);
          console.log(`    Note: "${g.notes}" | Exists in DB: ${exists} | NoteIssue: ${noteIssue}`);
        }
      }
    });
  });
});

console.log(`\nTotal Issues Found: ${issues}`);
