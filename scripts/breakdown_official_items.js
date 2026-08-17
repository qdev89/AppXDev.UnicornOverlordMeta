const fs = require('fs');
const items = JSON.parse(fs.readFileSync('./scripts/official_items_extracted.json', 'utf8'));

console.log('=== OFFICIAL UNICORN OVERLORD ITEMS AUDIT ===');

const swords = items.filter(i => i.name.toLowerCase().includes('sword') || i.name.toLowerCase().includes('blade') || i.name.toLowerCase().includes('saber') || i.name.toLowerCase().includes('rapier') || i.name.toLowerCase().includes('scimitar') || i.name.toLowerCase().includes('cornix'));
console.log('\n--- OFFICIAL SWORDS (' + swords.length + ') ---');
console.log(swords.map(s => s.name).join(', '));

const spears = items.filter(i => i.name.toLowerCase().includes('spear') || i.name.toLowerCase().includes('lance') || i.name.toLowerCase().includes('bident') || i.name.toLowerCase().includes('pike') || i.name.toLowerCase().includes('halberd') || i.name.toLowerCase().includes('elhal'));
console.log('\n--- OFFICIAL SPEARS/LANCES (' + spears.length + ') ---');
console.log(spears.map(s => s.name).join(', '));

const axes = items.filter(i => i.name.toLowerCase().includes('axe') || i.name.toLowerCase().includes('hammer') || i.name.toLowerCase().includes('drakenash'));
console.log('\n--- OFFICIAL AXES/HAMMERS (' + axes.length + ') ---');
console.log(axes.map(s => s.name).join(', '));

const bows = items.filter(i => i.name.toLowerCase().includes('bow') || i.name.toLowerCase().includes('crossbow') || i.name.toLowerCase().includes('bastorik'));
console.log('\n--- OFFICIAL BOWS (' + bows.length + ') ---');
console.log(bows.map(s => s.name).join(', '));

const staffs = items.filter(i => i.name.toLowerCase().includes('staff') || i.name.toLowerCase().includes('scepter') || i.name.toLowerCase().includes('rod') || i.name.toLowerCase().includes('cane') || i.name.toLowerCase().includes('mace') || i.name.toLowerCase().includes('albiore'));
console.log('\n--- OFFICIAL STAFFS/RODS (' + staffs.length + ') ---');
console.log(staffs.map(s => s.name).join(', '));

const shields = items.filter(i => i.category === 'Shield');
console.log('\n--- OFFICIAL SHIELDS/GREATSHIELDS (' + shields.length + ') ---');
console.log(shields.map(s => s.name).join(', '));

const accessories = items.filter(i => i.category === 'Accessory');
console.log('\n--- OFFICIAL ACCESSORIES (' + accessories.length + ') ---');
console.log(accessories.map(s => s.name).join(', '));
