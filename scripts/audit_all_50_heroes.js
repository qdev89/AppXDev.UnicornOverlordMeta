const fs = require('fs');
const path = require('path');

const squadsRaw = fs.readFileSync(path.join(__dirname, '../src/data/zeroOverlapSquads.ts'), 'utf-8');
const cleanStr = squadsRaw.substring(squadsRaw.indexOf('['), squadsRaw.lastIndexOf(']') + 1);
let squads;
try {
  squads = JSON.parse(cleanStr);
} catch(e) {
  squads = eval(cleanStr);
}

const itemsRaw = fs.readFileSync(path.join(__dirname, '../src/data/items.ts'), 'utf-8');
const cleanItems = itemsRaw.substring(itemsRaw.indexOf('['), itemsRaw.lastIndexOf(']') + 1);
let items;
try {
  items = JSON.parse(cleanItems);
} catch(e) {
  items = eval(cleanItems);
}

console.log('=== SQUAD ITEM ASSIGNMENTS & NOTES AUDIT ===\n');

const uniqueStoryItems = [
  'Ring of the Unicorn',
  'Holy Unicorn Blade',
  'Holy Unicorn Signet',
  'Ring of the Maiden',
  'Blue Rose Shield',
  'Kingslance Elhal',
  'Kingsblade Cornix',
  'Kingstaff Albiore',
  'Sacral Spear',
  'Sacral Rod'
];

squads.forEach((squad, sIdx) => {
  console.log(`\n========================================`);
  console.log(`Squad ${sIdx + 1}: ${squad.name}`);
  console.log(`========================================`);

  (squad.unitGearConfigs || []).forEach(u => {
    console.log(`\nHero: ${u.characterName} (${u.className || u.unitName}) [ID: ${u.unitId}]`);
    console.log(`  Role: ${u.roleTitle}`);
    console.log(`  Slot 1 (Weapon):        ${u.slot1Weapon?.bestInSlot} | Notes: "${u.slot1Weapon?.notes}"`);
    console.log(`  Slot 2 (Shield/Helm):   ${u.slot2ShieldOrOffhand?.bestInSlot} | Notes: "${u.slot2ShieldOrOffhand?.notes}"`);
    console.log(`  Slot 3 (Accessory 1):   ${u.slot3Accessory?.bestInSlot} | Notes: "${u.slot3Accessory?.notes}"`);
    console.log(`  Slot 4 (Accessory 2):   ${u.slot4Accessory?.bestInSlot} | Notes: "${u.slot4Accessory?.notes}"`);

    // Flag suspicious notes
    [u.slot1Weapon, u.slot2ShieldOrOffhand, u.slot3Accessory, u.slot4Accessory].forEach((slot, idx) => {
      if (!slot) return;
      const bis = slot.bestInSlot;
      const note = slot.notes || '';
      
      // Check if note mentions a skill that is a class skill
      if (note.includes('Shadowbite') && bis.includes('Ring')) {
        console.log(`  ⚠️ SUSPICIOUS NOTE on Slot ${idx+1} (${bis}): "${note}"`);
      }
      if (uniqueStoryItems.includes(bis) && sIdx !== 0 && bis.includes('Unicorn')) {
        console.log(`  ⚠️ UNIQUE UNICORN ITEM in non-Alain squad! Slot ${idx+1}: ${bis}`);
      }
    });
  });
});
