const fs = require('fs');

const officialItems = JSON.parse(fs.readFileSync('./scripts/official_items_extracted.json', 'utf8'));
const officialNamesMap = new Map();
officialItems.forEach(i => officialNamesMap.set(i.name.toLowerCase(), i.name));

// Exact Canonical Item Replacements for all non-canonical names
const ITEM_REPLACEMENTS = {
  // Non-canonical swords / daggers / weapons
  "Parrying Dagger": "Pursuant's Blade",
  "Poisoner's Dagger": "Pursuant's Blade",
  "Viper Sword": "Pursuant's Blade",
  "Ring of the Maiden": "Holy Unicorn Signet",
  "Shadow Dagger": "Phantom Knight's Sword",
  "Thief's Dagger": "Bandit Longsword",
  "Maiden's Sword": "Holy Unicorn Blade",
  "Divine Sword": "Kingsblade Cornix",
  "Grand Crusher Greatsword": "Mason's Hammer",
  "Keen Broadsword": "Iron Sword",
  "Steel Blade": "Iron Sword",
  "Iron Broadsword": "Iron Sword",

  // Non-canonical lances / spears
  "Sylphid Spear": "Sacral Spear",
  "Dark Flame Spear": "Black-Iron Spear",
  "Heavy Iron Lance": "Iron Spear",

  // Non-canonical axes / hammers
  "Carnelian Greataxe": "Carnelian Axe",

  // Non-canonical bows
  "Glacial Bow": "Icefall Bow",
  "Eagle Eye Bow": "Apeliotes's Bow",
  "Divine Bow": "Kingsbow Bastorik",

  // Non-canonical staves / rods
  "Millennium Scepter": "Millenium Scepter",
  "Hallowed Staff": "Sacral Rod",
  "Hallowed Cane": "Sacral Rod",
  "Runic Rod": "Quartz Rod",
  "Chlorotic Staff": "Flame-Hex Staff",
  "Sandstorm Staff": "Dustbound Staff",
  "Sacred Feather Rod": "Kingstaff Albiore",
  "Poison Hex Staff": "Pestilent Staff",

  // Non-canonical shields / greatshields
  "Greatshield of the Maiden": "Holy Unicorn Shield",
  "Greatshield of Fortitude": "Unyielding Shield",
  "Nightmare Shield": "Thorn Shield",
  "Radiant Shield": "Luminous Shield",
  "Rose Shield": "Blue Rose Shield",
  "Deflect Shield": "Parrying Shield",
  "Heavy Guard Shield": "Azure Crest Shield",
  "Angel Shield": "Angel Hunter's Buckler",
  "Angel's Reflection Shield": "Heavenswing Shield",
  "Doom Shield": "Zenoiran Shield",
  "Knight Shield": "Chivalric Shield",
  "Silver Shield": "Steel Shield",
  "Tower Shield": "Greatwood Shield",
  "Gryphon Shield": "Wingcrest Shield",
  "Crown Shield": "Golden Ram Shield",
  "Silverscale Shield": "Dragonbone Shield",

  // Non-canonical accessories
  "Cat-Ear Hood": "Black Cat-Ear Hood",
  "Snow Wolf Hood": "Wolfpack Gauntlets",
  "Sniper Hood": "Sniper's Lens",
  "Shadow Hood": "Thief's Mantle",
  "Angel Cap": "Angel Plume",
  "Wolf Cap": "Wolf Fang Bracelet",
  "Cleric Hat": "Archbishop's Mitre",
  "Sage's Owl Shawl": "Sage Owl's Shawl",
  "Owl Pin": "Sage Owl's Shawl",
  "Elven Tiara": "Dream Crown",
  "Elven Crown": "Ancient Crown",
  "Pure Light Amulet": "Celestial Talisman",
  "Feather Amulet": "Angel Plume",
  "Mirage Cloak": "Illusory Cloak",
  "Fox Cloak": "Twilight Cloak",
  "Gauntlets of Power": "Master's Gauntlets",
  "Heavy Gauntlets": "Armored Gauntlets",
  "Berserker Band": "Riot Belt",
  "Critical Ring": "Lucky Coin",
  "Heavy Guard Ring": "Defender's Ring",
  "Ice Crystal Ring": "Glacial Ring",
  "Beast Ring": "Wolf Fang Bracelet",
  "Holy Maiden Ring": "Ring of the Maiden",
  "Priestess Ribbon": "Scarlett's Ribbon",
  "Holy Brooch": "Holy Broach",
  "Rose Brooch": "Rose Broach",
  "Gryphon Brooch": "Angel Plume",
  "White Knight Plume": "Dove Plume",
  "Commander's Crest": "Battleline Standard",
  "Archer's Eyepatch": "Sniper's Lens",
  "Executioner's Eye": "Sniper's Amber Lens",
  "Phantom Ring": "Ring of the Unicorn"
};

let zeroSquads = fs.readFileSync('./src/data/zeroOverlapSquads.ts', 'utf8');

for (const [bad, good] of Object.entries(ITEM_REPLACEMENTS)) {
  const regex = new RegExp(`"${bad}"`, 'g');
  zeroSquads = zeroSquads.replace(regex, `"${good}"`);
}

// Ensure Melisandre's Slot 2 is labeled Dual-Wield Weapon (Sword) and uses Pursuant's Blade
zeroSquads = zeroSquads.replace(
  /"slot2ShieldOrOffhand":\s*\{\s*"bestInSlot":\s*"[^"]*",[\s\S]*?"slotType":\s*"[^"]*",/g,
  (match) => {
    return match.replace(/"slotType":\s*"Offhand"/, '"slotType": "Weapon"');
  }
);

fs.writeFileSync('./src/data/zeroOverlapSquads.ts', zeroSquads);
console.log('Sanitized all items in zeroOverlapSquads.ts!');

// Do the same for squads.ts if it exists
if (fs.existsSync('./src/data/squads.ts')) {
  let squadsData = fs.readFileSync('./src/data/squads.ts', 'utf8');
  for (const [bad, good] of Object.entries(ITEM_REPLACEMENTS)) {
    const regex = new RegExp(`"${bad}"`, 'g');
    squadsData = squadsData.replace(regex, `"${good}"`);
  }
  fs.writeFileSync('./src/data/squads.ts', squadsData);
  console.log('Sanitized all items in squads.ts!');
}
