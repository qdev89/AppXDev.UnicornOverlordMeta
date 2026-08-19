const fs = require('fs');
const path = require('path');

const itemsRaw = fs.readFileSync(path.join(__dirname, '../src/data/items.ts'), 'utf-8');
const items = eval(itemsRaw.substring(itemsRaw.indexOf('['), itemsRaw.lastIndexOf(']') + 1));

const itemsSet = new Set(items.map(i => i.name.toLowerCase().trim()));

const desiredItems = [
  // Squad 1
  'Holy Unicorn Blade', 'Holy Unicorn Shield', 'Ring of the Unicorn', 'Carnelian Pendant',
  'Kingsblade Cornix', 'Viper\'s Fang', 'Parrying Amulet',
  'Sacred Papal Staff', 'Scarlett\'s Ribbon', 'Ring of the Maiden', 'Lapis Pendant',
  'Carnelian Spear', 'Chivalric Shield', 'Heavensteed Reins',
  'General\'s Pike', 'Battler\'s Shield', 'Chloe\'s Charm',
  
  // Squad 2
  'Millenium Scepter', 'Sage\'s Hood', 'Sniper\'s Amber Lens',
  'Euros\'s Staff', 'Black Cat-Ear Hood', 'Sapphire Pendant',
  'Carnelian Staff', 'Silk Hood', 'Familiar\'s Choker', 'Raven Plume',
  'Zenoiran Spear', 'Unyielding Shield', 'Defensive Ring',
  'Dustbound Staff', 'Druid\'s Robes',

  // Squad 3
  'Dragoon\'s Warspear', 'Wyvern Reins', 'Dragon\'s Choker',
  'Boreas\'s Axe', 'Heavenwyvern Reins', 'Wingline Standard',
  'Runic Sword', 'Luminous Shield', 'First Aid Kit',
  'Hallowed Staff', 'White Cat-Ear Hood',
  'Royal Saber', 'Royal Scarf', 'Angel Plume',

  // Squad 4
  'Carnelian Axe', 'Thorn Shield', 'Executioner\'s Ring',
  'Pursuant\'s Blade', 'Thief\'s Mantle', 'Lucky Coin',
  'Juggernaut', 'Master\'s Gauntlets',
  'Gallian Crossbow', 'Zenoiran Knight\'s Shield',
  'Dragonbone Axe', 'Power Belt', 'Vitality Talisman',

  // Squad 5
  'Blue Rose Sword', 'Blue Rose Shield', 'Counter Belt',
  'Meteorite Sword', 'Parrying Shield', 'Defender\'s Ring',
  'Notos\'s Sword', 'Starlight Sword', 'Retaliation Brooch',
  'Rose Knight Hammer', 'Armored Gauntlets',
  'Apeliotes\'s Bow', 'Sniper\'s Lens', 'Eagle Eye Ring',

  // Squad 6
  'Icefall Bow', 'Snow White Cloak', 'Frost Charm',
  'Meteorite Rod', 'Sage Owl\'s Shawl', 'Owl Feather Ring',
  'Runic Bow', 'Elven Tiara', 'Celestial Talisman',
  'Meteorite Lance', 'Golden Ram Shield', 'Guardian Gloves',
  'Zenoiran Sword', 'Arrowshield', 'Warrior\'s Medallion',

  // Squad 7
  'Sacral Spear', 'Ancient Crown', 'Sorcerous Ring',
  'Kingslance Elhal', 'Dream Crown', 'Boon Standard',
  'Phantom Knight\'s Sword', 'Illusory Cloak',
  'Spellsteel Sword', 'Dusk Robes',
  'Sacral Bow', 'Pure Talisman',

  // Squad 8
  'Mason\'s Hammer', 'Azure Crest Shield', 'Riot Belt',
  'Greatwood Greataxe', 'Beast Hunter\'s Buckler',
  'Rosularis Sword', 'Holy Knight\'s Shield',
  'Spada d\'Onore', 'Duelist\'s Buckler',
  'Zenoiran Bow', 'Marksman\'s Monocle', 'Hawk Eye Brooch',

  // Squad 9
  'Beastfang Blade', 'Wolf Fang Bracelet', 'Wolfpack Gauntlets',
  'Carnelian Blade', 'Twilight Cloak',
  'Meteorite Axe', 'Ironclad Buckler',
  'Holy Angel Bow', 'Feather Plume',
  'Executioner\'s Blade', 'Mercenary\'s Shield',

  // Squad 10
  'Kingstaff Albiore', 'Archbishop\'s Mitre',
  'Zephyrus Sword', 'Heavenswing Shield', 'Angel Hunter\'s Buckler',
  'Hallowed Blade', 'Wingcrest Shield', 'Angel Crest',
  'Sacral Rod',
  'Black-Iron Spear', 'Zenoiran Shield',
];

console.log(`Checking ${desiredItems.length} candidate items against ITEMS_DATA...`);
const missing = [];
desiredItems.forEach(item => {
  if (!itemsSet.has(item.toLowerCase().trim())) {
    missing.push(item);
  }
});

console.log(`Missing items in DB (${missing.length}):`, missing);
