const fs = require('fs');
const path = require('path');

const squadsRaw = fs.readFileSync(path.join(__dirname, '../src/data/zeroOverlapSquads.ts'), 'utf-8');
const squads = eval(squadsRaw.substring(squadsRaw.indexOf('['), squadsRaw.lastIndexOf(']') + 1));

const itemsRaw = fs.readFileSync(path.join(__dirname, '../src/data/items.ts'), 'utf-8');
const items = eval(itemsRaw.substring(itemsRaw.indexOf('['), itemsRaw.lastIndexOf(']') + 1));

const classesRaw = fs.readFileSync(path.join(__dirname, '../src/data/classes.ts'), 'utf-8');
const classes = eval(classesRaw.substring(classesRaw.indexOf('['), classesRaw.lastIndexOf(']') + 1));

const itemsMap = new Map();
items.forEach(i => {
  itemsMap.set(i.name.toLowerCase().trim(), i);
  itemsMap.set(i.id.toLowerCase().trim(), i);
});

const classesMap = new Map();
classes.forEach(c => {
  classesMap.set(c.id.toLowerCase().trim(), c);
  classesMap.set(c.name.toLowerCase().trim(), c);
});

console.log('=== 1. CHECKING WEAPON / SHIELD / ACCESSORY OVERLAPS ===');
const weaponCounts = {};
const shieldCounts = {};
const accessoryCounts = {};

squads.forEach((sq, sqIdx) => {
  (sq.unitGearConfigs || []).forEach(u => {
    // Slot 1
    const s1 = u.slot1Weapon?.bestInSlot;
    if (s1) {
      weaponCounts[s1] = (weaponCounts[s1] || []);
      weaponCounts[s1].push(`Squad ${sqIdx + 1} (${u.characterName})`);
    }
    // Slot 2
    const s2 = u.slot2ShieldOrOffhand?.bestInSlot;
    if (s2) {
      const itemInfo = itemsMap.get(s2.toLowerCase().trim());
      if (itemInfo?.type === 'Shield') {
        shieldCounts[s2] = (shieldCounts[s2] || []);
        shieldCounts[s2].push(`Squad ${sqIdx + 1} (${u.characterName})`);
      } else if (itemInfo?.type === 'Weapon') {
        weaponCounts[s2] = (weaponCounts[s2] || []);
        weaponCounts[s2].push(`Squad ${sqIdx + 1} (${u.characterName} - Slot 2 Dual Wield)`);
      } else {
        accessoryCounts[s2] = (accessoryCounts[s2] || []);
        accessoryCounts[s2].push(`Squad ${sqIdx + 1} (${u.characterName} - Slot 2)`);
      }
    }
    // Slot 3
    const s3 = u.slot3Accessory?.bestInSlot;
    if (s3) {
      accessoryCounts[s3] = (accessoryCounts[s3] || []);
      accessoryCounts[s3].push(`Squad ${sqIdx + 1} (${u.characterName} - Slot 3)`);
    }
    // Slot 4
    const s4 = u.slot4Accessory?.bestInSlot;
    if (s4) {
      accessoryCounts[s4] = (accessoryCounts[s4] || []);
      accessoryCounts[s4].push(`Squad ${sqIdx + 1} (${u.characterName} - Slot 4)`);
    }
  });
});

console.log('\n--- WEAPONS WITH OVERLAP ---');
Object.entries(weaponCounts).forEach(([w, users]) => {
  if (users.length > 1) {
    console.log(`❌ "${w}" used ${users.length} times: ${users.join(', ')}`);
  }
});

console.log('\n--- SHIELDS WITH OVERLAP ---');
Object.entries(shieldCounts).forEach(([s, users]) => {
  if (users.length > 1) {
    console.log(`❌ "${s}" used ${users.length} times: ${users.join(', ')}`);
  }
});

console.log('\n--- UNIQUE ACCESSORIES WITH SUSPICIOUS OVERLAP ---');
const uniqueAccessories = [
  'Ring of the Unicorn', 'Ring of the Maiden', 'Chloe\'s Charm', 'Black Cat-Ear Hood', 
  'White Cat-Ear Hood', 'Sniper\'s Amber Lens', 'Wolfpack Gauntlets', 'Sage Owl\'s Shawl',
  'Ancient Crown', 'Dream Crown', 'Familiar\'s Choker', 'Heavensteed Reins', 'Wyvern Reins',
  'Heavenwyvern Reins', 'Angel Plume', 'Wingline Standard', 'Wolf Fang Bracelet'
];
uniqueAccessories.forEach(acc => {
  const users = accessoryCounts[acc];
  if (users && users.length > 1) {
    console.log(`⚠️ Unique Relic "${acc}" used ${users.length} times: ${users.join(', ')}`);
  }
});
