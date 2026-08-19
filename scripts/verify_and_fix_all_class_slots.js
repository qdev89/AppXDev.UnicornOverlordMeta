const fs = require('fs');
const path = require('path');

// 1. Update classes.ts with explicit equipmentSlots
const classesFile = path.join(__dirname, '../src/data/classes.ts');
let classesContent = fs.readFileSync(classesFile, 'utf-8');

const CLASS_SLOTS_MAP = {
  'high-lord': ['Weapon', 'Shield', 'Accessory', 'Accessory'],
  'lord': ['Weapon', 'Shield', 'Accessory', 'Accessory'],
  'swordmaster': ['Weapon', 'Weapon', 'Accessory', 'Accessory'], // DUAL WIELD
  'valkyria': ['Weapon', 'Shield', 'Shield', 'Accessory'], // DUAL SHIELD!
  'crusader': ['Weapon', 'Shield', 'Shield', 'Accessory'], // DUAL SHIELD!
  'legionnaire': ['Weapon', 'Shield', 'Accessory', 'Accessory'],
  'vanguard': ['Weapon', 'Shield', 'Accessory', 'Accessory'],
  'great-knight': ['Weapon', 'Shield', 'Accessory', 'Accessory'],
  'sainted-knight': ['Weapon', 'Shield', 'Accessory', 'Accessory'],
  'doom-knight': ['Weapon', 'Shield', 'Accessory', 'Accessory'],
  'renegade': ['Weapon', 'Shield', 'Accessory', 'Accessory'],
  'shieldshooter': ['Weapon', 'Shield', 'Accessory', 'Accessory'],
  'dreadnought': ['Weapon', 'Shield', 'Accessory', 'Accessory'],
  'werebear': ['Weapon', 'Shield', 'Accessory', 'Accessory'],
  'feathersword': ['Weapon', 'Shield', 'Accessory', 'Accessory'],
  'landsknecht': ['Weapon', 'Shield', 'Accessory', 'Accessory'],
  
  // 3 Accessories (No Shield)
  'high-priestess': ['Weapon', 'Accessory', 'Accessory', 'Accessory'],
  'sergeant': ['Weapon', 'Accessory', 'Accessory', 'Accessory'],
  'prince': ['Weapon', 'Accessory', 'Accessory', 'Accessory'],
  'snow-ranger': ['Weapon', 'Accessory', 'Accessory', 'Accessory'],
  'wyvern-master': ['Weapon', 'Accessory', 'Accessory', 'Accessory'],
  'gryphon-master': ['Weapon', 'Accessory', 'Accessory', 'Accessory'],
  'breaker': ['Weapon', 'Accessory', 'Accessory', 'Accessory'],
  'berserker': ['Weapon', 'Accessory', 'Accessory', 'Accessory'],
  'sniper': ['Weapon', 'Accessory', 'Accessory', 'Accessory'],
  'elven-archer': ['Weapon', 'Accessory', 'Accessory', 'Accessory'],
  'elven-fencer': ['Weapon', 'Accessory', 'Accessory', 'Accessory'],
  'elven-augur': ['Weapon', 'Accessory', 'Accessory', 'Accessory'],
  'elven-sibyl': ['Weapon', 'Accessory', 'Accessory', 'Accessory'],
  'featherbow': ['Weapon', 'Accessory', 'Accessory', 'Accessory'],
  'featherstaff': ['Weapon', 'Accessory', 'Accessory', 'Accessory'],
  'werewolf': ['Weapon', 'Accessory', 'Accessory', 'Accessory'],
  'wereowl': ['Weapon', 'Accessory', 'Accessory', 'Accessory'],
  'rogue': ['Weapon', 'Accessory', 'Accessory', 'Accessory'],
  'sorcerer': ['Weapon', 'Accessory', 'Accessory', 'Accessory'],
  'sorceress': ['Weapon', 'Accessory', 'Accessory', 'Accessory'],
  'bishop': ['Weapon', 'Accessory', 'Accessory', 'Accessory'],
  'druid': ['Weapon', 'Accessory', 'Accessory', 'Accessory']
};

console.log('Class equipment slots mapping ready.');
