const CLASS_EQUIPMENT_RULES = {
  // Dual Shield
  'valkyria': {
    name: 'Valkyria (Virginia)',
    special: 'Dual Shield',
    slots: ['Weapon:Sword', 'Shield', 'ShieldOrAccessory', 'Accessory']
  },
  'crusader': {
    name: 'Crusader (Virginia)',
    special: 'Dual Shield',
    slots: ['Weapon:Sword', 'Shield', 'ShieldOrAccessory', 'Accessory']
  },

  // Dual Wield
  'swordmaster': {
    name: 'Swordmaster',
    special: 'Dual Wield',
    slots: ['Weapon:Sword', 'Weapon:Sword', 'Accessory', 'Accessory']
  },

  // Weapon + Shield + 2 Accessories
  'high-lord': {
    name: 'High Lord (Alain)',
    slots: ['Weapon:Sword', 'Shield', 'Accessory', 'Accessory']
  },
  'lord': {
    name: 'Lord (Alain)',
    slots: ['Weapon:Sword', 'Shield', 'Accessory', 'Accessory']
  },
  'legionnaire': {
    name: 'Legionnaire (Hoplite)',
    slots: ['Weapon:Spear', 'Shield', 'Accessory', 'Accessory']
  },
  'vanguard': {
    name: 'Vanguard (Fighter)',
    slots: ['Weapon:Sword', 'Shield', 'Accessory', 'Accessory']
  },
  'great-knight': {
    name: 'Great Knight (Knight)',
    slots: ['Weapon:Spear', 'Shield', 'Accessory', 'Accessory']
  },
  'sainted-knight': {
    name: 'Sainted Knight (Radiant Knight)',
    slots: ['Weapon:Sword', 'Shield', 'Accessory', 'Accessory']
  },
  'doom-knight': {
    name: 'Doom Knight (Black Knight)',
    slots: ['Weapon:Spear', 'Shield', 'Accessory', 'Accessory']
  },
  'renegade': {
    name: 'Dark Marquess - Axe (Berengaria)',
    slots: ['Weapon:Axe', 'Shield', 'Accessory', 'Accessory']
  },
  'shieldshooter': {
    name: 'Shieldshooter (Arbalest)',
    slots: ['Weapon:Bow', 'Shield', 'Accessory', 'Accessory']
  },
  'dreadnought': {
    name: 'Dreadnought (Amalia)',
    slots: ['Weapon:Sword', 'Shield', 'Accessory', 'Accessory']
  },
  'werebear': {
    name: 'Werebear',
    slots: ['Weapon:Axe', 'Shield', 'Accessory', 'Accessory']
  },
  'feathersword': {
    name: 'Feathersword',
    slots: ['Weapon:Sword', 'Shield', 'Accessory', 'Accessory']
  },
  'landsknecht': {
    name: 'Landsknecht (Mercenary)',
    slots: ['Weapon:Sword', 'Shield', 'Accessory', 'Accessory']
  },

  // Weapon + 3 Accessories (NO SHIELD)
  'sergeant': {
    name: 'Sergeant (Chloe)',
    slots: ['Weapon:Spear', 'Accessory', 'Accessory', 'Accessory']
  },
  'high-priestess': {
    name: 'High Priestess (Scarlett)',
    slots: ['Weapon:Staff', 'Accessory', 'Accessory', 'Accessory']
  },
  'prince': {
    name: 'Prince (Gilbert)',
    slots: ['Weapon:Sword', 'Accessory', 'Accessory', 'Accessory']
  },
  'snow-ranger': {
    name: 'Snow Ranger (Yunifi)',
    slots: ['Weapon:Bow', 'Accessory', 'Accessory', 'Accessory']
  },
  'wyvern-master': {
    name: 'Wyvern Master (Hilda)',
    slots: ['Weapon:Spear', 'Accessory', 'Accessory', 'Accessory']
  },
  'gryphon-master': {
    name: 'Gryphon Master (Fran)',
    slots: ['Weapon:Axe', 'Accessory', 'Accessory', 'Accessory']
  },
  'breaker': {
    name: 'Breaker (Nina/Kitra)',
    slots: ['Weapon:Axe', 'Accessory', 'Accessory', 'Accessory']
  },
  'berserker': {
    name: 'Berserker (Bruno)',
    slots: ['Weapon:Axe', 'Accessory', 'Accessory', 'Accessory']
  },
  'sniper': {
    name: 'Sniper (Rolf/Mandrin)',
    slots: ['Weapon:Bow', 'Accessory', 'Accessory', 'Accessory']
  },
  'elven-archer': {
    name: 'Elven Archer (Ridiel/Galadmir)',
    slots: ['Weapon:Bow', 'Accessory', 'Accessory', 'Accessory']
  },
  'elven-fencer': {
    name: 'Elven Fencer (Ithilion/Railanor)',
    slots: ['Weapon:Sword', 'Accessory', 'Accessory', 'Accessory']
  },
  'elven-augur': {
    name: 'Elven Augur (Rosalinde)',
    slots: ['Weapon:Spear', 'Accessory', 'Accessory', 'Accessory']
  },
  'elven-sibyl': {
    name: 'Elven Sibyl (Eltolinde)',
    slots: ['Weapon:Spear', 'Accessory', 'Accessory', 'Accessory']
  },
  'featherbow': {
    name: 'Featherbow (Raenys)',
    slots: ['Weapon:Bow', 'Accessory', 'Accessory', 'Accessory']
  },
  'featherstaff': {
    name: 'Featherstaff (Sanatio)',
    slots: ['Weapon:Staff', 'Accessory', 'Accessory', 'Accessory']
  },
  'werewolf': {
    name: 'Werewolf (Dinah/Govil)',
    slots: ['Weapon:Sword', 'Accessory', 'Accessory', 'Accessory']
  },
  'wereowl': {
    name: 'Wereowl (Ramona)',
    slots: ['Weapon:Staff', 'Accessory', 'Accessory', 'Accessory']
  },
  'rogue': {
    name: 'Rogue (Travis)',
    slots: ['Weapon:Sword', 'Accessory', 'Accessory', 'Accessory']
  },
  'sorcerer': {
    name: 'Sorcerer (Auch)',
    slots: ['Weapon:Staff', 'Accessory', 'Accessory', 'Accessory']
  },
  'sorceress': {
    name: 'Sorceress (Yahna)',
    slots: ['Weapon:Staff', 'Accessory', 'Accessory', 'Accessory']
  },
  'bishop': {
    name: 'Bishop (Sharon/Primm/Tatiana)',
    slots: ['Weapon:Staff', 'Accessory', 'Accessory', 'Accessory']
  },
  'druid': {
    name: 'Druid (Selvie)',
    slots: ['Weapon:Staff', 'Accessory', 'Accessory', 'Accessory']
  }
};

const fs = require('fs');
const path = require('path');

const squadsRaw = fs.readFileSync(path.join(__dirname, '../src/data/zeroOverlapSquads.ts'), 'utf-8');
const squads = eval(squadsRaw.substring(squadsRaw.indexOf('['), squadsRaw.lastIndexOf(']') + 1));

const ALIAS_MAP = {
  'virginia-valkyria': 'valkyria',
  'alain-high-lord': 'high-lord',
  'rosalinde-elven-augur': 'elven-augur',
  'eltolinde-elven-sibyl': 'elven-sibyl',
  'berengaria-renegade': 'renegade',
  'yunifi-snow-ranger': 'snow-ranger',
  'gilbert-prince': 'prince',
  'raenys-featherbow': 'featherbow',
  'scarlett-high-priestess': 'high-priestess',
  'chloe-sergeant': 'sergeant',
  'melisandre-swordmaster': 'swordmaster',
  'clive-great-knight': 'great-knight',
  'auch-sorcerer': 'sorcerer',
  'yahna-sorceress': 'sorceress',
  'sharon-bishop': 'bishop',
  'hodrick-legionnaire': 'legionnaire',
  'selvie-druid': 'druid',
  'hilda-wyvern-master': 'wyvern-master',
  'fran-gryphon-master': 'gryphon-master',
  'miriam-sainted-knight': 'sainted-knight',
  'primm-bishop': 'bishop',
  'travis-rogue': 'rogue',
  'nina-breaker': 'breaker',
  'liza-shieldshooter': 'shieldshooter',
  'bruno-berserker': 'berserker',
  'colm-vanguard': 'vanguard',
  'leah-swordmaster': 'swordmaster',
  'kitra-breaker': 'breaker',
  'rolf-sniper': 'sniper',
  'ramona-wereowl': 'wereowl',
  'ridiel-elven-archer': 'elven-archer',
  'bryce-legionnaire': 'legionnaire',
  'lex-vanguard': 'vanguard',
  'ithilion-elven-fencer': 'elven-fencer',
  'railanor-elven-fencer': 'elven-fencer',
  'galadmir-elven-archer': 'elven-archer',
  'amalia-dreadnought': 'dreadnought',
  'bertrand-werebear': 'werebear',
  'monica-sainted-knight': 'sainted-knight',
  'aramis-swordmaster': 'swordmaster',
  'mandrin-sniper': 'sniper',
  'dinah-werewolf': 'werewolf',
  'govil-werewolf': 'werewolf',
  'morpan-werebear': 'werebear',
  'jeremy-landsknecht': 'landsknecht',
  'ochlys-feathersword': 'feathersword',
  'umerus-feathersword': 'feathersword',
  'sanatio-featherstaff': 'featherstaff',
  'tatiana-bishop': 'bishop',
  'gloucester-doom-knight': 'doom-knight',
};

console.log('=== AUDITING ALL 50 HEROES AGAINST AUTHENTIC CLASS EQUIPMENT RULES ===\n');

squads.forEach((sq, sIdx) => {
  console.log(`Squad ${sIdx + 1}: ${sq.name}`);
  sq.unitGearConfigs?.forEach(u => {
    const classId = ALIAS_MAP[u.unitId] || u.unitId;
    const rule = CLASS_EQUIPMENT_RULES[classId];
    if (!rule) {
      console.log(`  ❌ NO RULE FOUND FOR ${u.characterName} (${u.unitId})`);
      return;
    }

    const s1 = u.slot1Weapon;
    const s2 = u.slot2ShieldOrOffhand;
    const s3 = u.slot3Accessory;
    const s4 = u.slot4Accessory;

    console.log(`  [${u.characterName}] (${rule.name}) -> Slots Rule: [${rule.slots.join(' | ')}]`);
    console.log(`    Slot 1: ${s1?.bestInSlot} (${s1?.slotType})`);
    console.log(`    Slot 2: ${s2?.bestInSlot} (${s2?.slotType})`);
    console.log(`    Slot 3: ${s3?.bestInSlot} (${s3?.slotType})`);
    console.log(`    Slot 4: ${s4?.bestInSlot} (${s4?.slotType})`);

    // Validation
    if (rule.special === 'Dual Shield') {
      console.log(`    🛡️ SPECIAL: DUAL SHIELD CLASS! Can equip 2 shields!`);
    } else if (rule.special === 'Dual Wield') {
      console.log(`    ⚔️ SPECIAL: DUAL WIELD CLASS! Equips 2 weapons!`);
    }
  });
  console.log('');
});
