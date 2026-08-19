const fs = require('fs');
const path = require('path');

const squadsRaw = fs.readFileSync(path.join(__dirname, '../src/data/zeroOverlapSquads.ts'), 'utf-8');
const cleanStr = squadsRaw.substring(squadsRaw.indexOf('['), squadsRaw.lastIndexOf(']') + 1);
const squads = eval(cleanStr);

const itemsRaw = fs.readFileSync(path.join(__dirname, '../src/data/items.ts'), 'utf-8');
const cleanItems = itemsRaw.substring(itemsRaw.indexOf('['), itemsRaw.lastIndexOf(']') + 1);
const items = eval(cleanItems);

const itemsMap = new Map();
items.forEach(item => {
  itemsMap.set(item.name.toLowerCase(), item);
  itemsMap.set(item.id.toLowerCase(), item);
});

let out = '';

squads.forEach((squad, sIdx) => {
  out += `\n================================================================================\n`;
  out += `SQUAD ${sIdx + 1}: ${squad.name} (${squad.archetype}) [ID: ${squad.id}]\n`;
  out += `Key Items: ${squad.keyItems.join(', ')}\n`;
  out += `================================================================================\n`;

  (squad.unitGearConfigs || []).forEach(u => {
    out += `\nHERO: ${u.characterName} | Class: ${u.className || u.unitName} [ID: ${u.unitId}] | Role: ${u.roleTitle}\n`;
    
    [
      { name: 'Slot 1 (Weapon)', data: u.slot1Weapon },
      { name: 'Slot 2 (Shield/Helm)', data: u.slot2ShieldOrOffhand },
      { name: 'Slot 3 (Accessory 1)', data: u.slot3Accessory },
      { name: 'Slot 4 (Accessory 2)', data: u.slot4Accessory },
    ].forEach(slot => {
      if (!slot.data) return;
      const bis = slot.data.bestInSlot;
      const itemInfo = itemsMap.get(bis?.toLowerCase());
      const itemType = itemInfo ? itemInfo.type : 'UNKNOWN';
      const grantedSkill = itemInfo && itemInfo.grantedSkill ? itemInfo.grantedSkill.name : 'None';
      out += `  ${slot.name}: "${bis}" [DB Type: ${itemType}] [Granted: ${grantedSkill}]\n`;
      out += `    Note: "${slot.data.notes}"\n`;
      out += `    Alternatives: ${(slot.data.alternatives || []).join(', ')}\n`;
    });
  });
});

fs.writeFileSync(path.join(__dirname, 'all_squads_dump.txt'), out, 'utf8');
console.log('Successfully wrote to scripts/all_squads_dump.txt');
