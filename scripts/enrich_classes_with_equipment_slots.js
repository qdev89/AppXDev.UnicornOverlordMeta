const fs = require('fs');
const path = require('path');

const classesFile = path.join(__dirname, '../src/data/classes.ts');
const rawClasses = fs.readFileSync(classesFile, 'utf-8');
const classes = eval(rawClasses.match(/\[[\s\S]*\]/)[0]);

const CLASS_SLOTS_DATA = {
  'valkyria': {
    equipmentSlots: ['Weapon', 'Shield', 'Shield', 'Accessory'],
    specialEquipmentTrait: 'Dual Shield',
    specialTraitDescription: 'Dual Shield Master: Can equip 2 shields simultaneously, stacking Guard Rate, Phys/Mag DEF, and unique shield retaliation skills.'
  },
  'crusader': {
    equipmentSlots: ['Weapon', 'Shield', 'Shield', 'Accessory'],
    specialEquipmentTrait: 'Dual Shield',
    specialTraitDescription: 'Dual Shield Master: Can equip 2 shields simultaneously, stacking Guard Rate, Phys/Mag DEF, and unique shield retaliation skills.'
  },
  'swordmaster': {
    equipmentSlots: ['Weapon', 'Weapon', 'Accessory', 'Accessory'],
    specialEquipmentTrait: 'Dual Wield',
    specialTraitDescription: 'Dual Wield Specialist: Equips 2 swords simultaneously, gaining attack power and granted skills from both blades.'
  },
  'high-lord': {
    equipmentSlots: ['Weapon', 'Shield', 'Accessory', 'Accessory'],
    specialEquipmentTrait: 'Standard',
    specialTraitDescription: 'Royal High Lord: Equips royal sword, greatshield, and 2 accessories.'
  },
  'lord': {
    equipmentSlots: ['Weapon', 'Shield', 'Accessory', 'Accessory'],
    specialEquipmentTrait: 'Standard',
    specialTraitDescription: 'Royal Commander: Equips sword, shield, and 2 accessories.'
  },
  'legionnaire': {
    equipmentSlots: ['Weapon', 'Shield', 'Accessory', 'Accessory'],
    specialEquipmentTrait: 'Greatshield Specialist',
    specialTraitDescription: 'Greatshield Fortress: Equips spear, greatshield, and 2 accessories for ultimate physical mitigation.'
  },
  'vanguard': {
    equipmentSlots: ['Weapon', 'Shield', 'Accessory', 'Accessory'],
    specialEquipmentTrait: 'Standard',
    specialTraitDescription: 'Frontline Defender: Equips sword, shield, and 2 accessories with Arrow Cover.'
  },
  'great-knight': {
    equipmentSlots: ['Weapon', 'Shield', 'Accessory', 'Accessory'],
    specialEquipmentTrait: 'Standard',
    specialTraitDescription: 'Heavy Cavalry: Equips spear, shield, and 2 accessories.'
  },
  'sainted-knight': {
    equipmentSlots: ['Weapon', 'Shield', 'Accessory', 'Accessory'],
    specialEquipmentTrait: 'Standard',
    specialTraitDescription: 'Holy Cavalry: Equips sword, shield, and 2 accessories with magic barriers.'
  },
  'doom-knight': {
    equipmentSlots: ['Weapon', 'Shield', 'Accessory', 'Accessory'],
    specialEquipmentTrait: 'Standard',
    specialTraitDescription: 'Dark Knight: Equips spear, shield, and 2 accessories with demonic vengeance.'
  },
  'renegade': {
    equipmentSlots: ['Weapon', 'Shield', 'Accessory', 'Accessory'],
    specialEquipmentTrait: 'Standard',
    specialTraitDescription: 'Dark Marquess: Equips axe, shield, and 2 accessories with affliction dominion.'
  },
  'shieldshooter': {
    equipmentSlots: ['Weapon', 'Shield', 'Accessory', 'Accessory'],
    specialEquipmentTrait: 'Greatshield Specialist',
    specialTraitDescription: 'Greatshield Marksman: Special archer class capable of equipping greatshields.'
  },
  'dreadnought': {
    equipmentSlots: ['Weapon', 'Shield', 'Accessory', 'Accessory'],
    specialEquipmentTrait: 'Greatshield Specialist',
    specialTraitDescription: 'Colossal Vanguard: Equips greatsword, greatshield, and 2 accessories.'
  },
  'werebear': {
    equipmentSlots: ['Weapon', 'Shield', 'Accessory', 'Accessory'],
    specialEquipmentTrait: 'Greatshield Specialist',
    specialTraitDescription: 'Bestral Fortress: Equips greataxe, greatshield/buckler, and 2 accessories.'
  },
  'feathersword': {
    equipmentSlots: ['Weapon', 'Shield', 'Accessory', 'Accessory'],
    specialEquipmentTrait: 'Standard',
    specialTraitDescription: 'Aerial Duelist: Flying class equipped with sword, shield, and 2 accessories.'
  },
  'landsknecht': {
    equipmentSlots: ['Weapon', 'Shield', 'Accessory', 'Accessory'],
    specialEquipmentTrait: 'Standard',
    specialTraitDescription: 'Mercenary Slayer: Equips sword, shield, and 2 accessories.'
  },

  // 3 Accessories (No Shield)
  'sergeant': {
    equipmentSlots: ['Weapon', 'Accessory', 'Accessory', 'Accessory'],
    specialEquipmentTrait: 'Standard',
    specialTraitDescription: 'Tactical Commander: Equips spear and 3 accessories for maximum team buffing.'
  },
  'high-priestess': {
    equipmentSlots: ['Weapon', 'Accessory', 'Accessory', 'Accessory'],
    specialEquipmentTrait: 'Standard',
    specialTraitDescription: 'Sacred High Priestess: Equips staff and 3 sacred accessories.'
  },
  'prince': {
    equipmentSlots: ['Weapon', 'Accessory', 'Accessory', 'Accessory'],
    specialEquipmentTrait: 'Standard',
    specialTraitDescription: 'Royal Prince: Equips royal saber and 3 command accessories.'
  },
  'snow-ranger': {
    equipmentSlots: ['Weapon', 'Accessory', 'Accessory', 'Accessory'],
    specialEquipmentTrait: 'Standard',
    specialTraitDescription: 'Glacial Marksman: Equips bow and 3 accessories.'
  },
  'wyvern-master': {
    equipmentSlots: ['Weapon', 'Accessory', 'Accessory', 'Accessory'],
    specialEquipmentTrait: 'Standard',
    specialTraitDescription: 'Aerial Dragoon: Equips spear and 3 aerial accessories.'
  },
  'gryphon-master': {
    equipmentSlots: ['Weapon', 'Accessory', 'Accessory', 'Accessory'],
    specialEquipmentTrait: 'Standard',
    specialTraitDescription: 'Sky Reaver: Equips axe and 3 flight accessories.'
  },
  'breaker': {
    equipmentSlots: ['Weapon', 'Accessory', 'Accessory', 'Accessory'],
    specialEquipmentTrait: 'Standard',
    specialTraitDescription: 'Armor Crusher: Equips heavy hammer/axe and 3 accessories.'
  },
  'berserker': {
    equipmentSlots: ['Weapon', 'Accessory', 'Accessory', 'Accessory'],
    specialEquipmentTrait: 'Standard',
    specialTraitDescription: 'Gladiator: Equips axe and 3 accessories.'
  },
  'sniper': {
    equipmentSlots: ['Weapon', 'Accessory', 'Accessory', 'Accessory'],
    specialEquipmentTrait: 'Standard',
    specialTraitDescription: 'Marksman: Equips bow and 3 precision accessories.'
  },
  'elven-archer': {
    equipmentSlots: ['Weapon', 'Accessory', 'Accessory', 'Accessory'],
    specialEquipmentTrait: 'Standard',
    specialTraitDescription: 'Elven Marksman: Equips bow and 3 magic accessories.'
  },
  'elven-fencer': {
    equipmentSlots: ['Weapon', 'Accessory', 'Accessory', 'Accessory'],
    specialEquipmentTrait: 'Standard',
    specialTraitDescription: 'Elven Spellblade: Equips sword and 3 accessories.'
  },
  'elven-augur': {
    equipmentSlots: ['Weapon', 'Accessory', 'Accessory', 'Accessory'],
    specialEquipmentTrait: 'Standard',
    specialTraitDescription: 'Elheim Augur: Equips spear and 3 royal accessories.'
  },
  'elven-sibyl': {
    equipmentSlots: ['Weapon', 'Accessory', 'Accessory', 'Accessory'],
    specialEquipmentTrait: 'Standard',
    specialTraitDescription: 'Elheim Sibyl: Equips royal lance and 3 accessories.'
  },
  'featherbow': {
    equipmentSlots: ['Weapon', 'Accessory', 'Accessory', 'Accessory'],
    specialEquipmentTrait: 'Standard',
    specialTraitDescription: 'Celestial Archer: Equips bow and 3 flight accessories.'
  },
  'featherstaff': {
    equipmentSlots: ['Weapon', 'Accessory', 'Accessory', 'Accessory'],
    specialEquipmentTrait: 'Standard',
    specialTraitDescription: 'Divine Staff: Equips staff and 3 sacred accessories.'
  },
  'werewolf': {
    equipmentSlots: ['Weapon', 'Accessory', 'Accessory', 'Accessory'],
    specialEquipmentTrait: 'Standard',
    specialTraitDescription: 'Bastorias Alpha: Equips sword and 3 bestral accessories.'
  },
  'wereowl': {
    equipmentSlots: ['Weapon', 'Accessory', 'Accessory', 'Accessory'],
    specialEquipmentTrait: 'Standard',
    specialTraitDescription: 'Bestral Battery: Equips rod and 3 accessories.'
  },
  'rogue': {
    equipmentSlots: ['Weapon', 'Accessory', 'Accessory', 'Accessory'],
    specialEquipmentTrait: 'Standard',
    specialTraitDescription: 'Shadow Rogue: Equips sword and 3 evasion accessories.'
  },
  'sorcerer': {
    equipmentSlots: ['Weapon', 'Accessory', 'Accessory', 'Accessory'],
    specialEquipmentTrait: 'Standard',
    specialTraitDescription: 'Grand Magus: Equips staff and 3 magic accessories.'
  },
  'sorceress': {
    equipmentSlots: ['Weapon', 'Accessory', 'Accessory', 'Accessory'],
    specialEquipmentTrait: 'Standard',
    specialTraitDescription: 'Witch: Equips staff and 3 focus accessories.'
  },
  'bishop': {
    equipmentSlots: ['Weapon', 'Accessory', 'Accessory', 'Accessory'],
    specialEquipmentTrait: 'Standard',
    specialTraitDescription: 'Holy Bishop: Equips staff and 3 healing accessories.'
  },
  'druid': {
    equipmentSlots: ['Weapon', 'Accessory', 'Accessory', 'Accessory'],
    specialEquipmentTrait: 'Standard',
    specialTraitDescription: 'Curse Shaman: Equips staff and 3 curse accessories.'
  }
};

const updatedClasses = classes.map(c => {
  const extra = CLASS_SLOTS_DATA[c.id] || {
    equipmentSlots: ['Weapon', 'Accessory', 'Accessory', 'Accessory'],
    specialEquipmentTrait: 'Standard',
    specialTraitDescription: 'Standard class equipment slots.'
  };
  return {
    ...c,
    equipmentSlots: extra.equipmentSlots,
    specialEquipmentTrait: extra.specialEquipmentTrait,
    specialTraitDescription: extra.specialTraitDescription
  };
});

const content = `import { UnitClass } from '@/types';\n\nexport const CLASSES_DATA: UnitClass[] = ${JSON.stringify(updatedClasses, null, 2)};\n`;

fs.writeFileSync(classesFile, content, 'utf8');
console.log('Successfully updated classes.ts with equipmentSlots and specialEquipmentTrait for all classes!');
