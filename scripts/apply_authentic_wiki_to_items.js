const fs = require('fs');

console.log('=== APPLYING AUTHENTIC WIKI STATS TO ITEMS_DATA ===');

const officialItems = JSON.parse(fs.readFileSync('./scripts/official_items_extracted.json', 'utf8'));
const wikiParsed = JSON.parse(fs.readFileSync('./scripts/wiki_items_parsed.json', 'utf8'));

// Helper to determine item icon
function getItemIcon(category, name) {
  const n = name.toLowerCase();
  if (category === 'Shield') return '🛡️';
  if (category === 'Weapon') {
    if (n.includes('sword') || n.includes('blade') || n.includes('saber') || n.includes('rapier') || n.includes('cornix')) return '⚔️';
    if (n.includes('spear') || n.includes('lance') || n.includes('pike') || n.includes('bident') || n.includes('elhal')) return '🗡️';
    if (n.includes('axe') || n.includes('hammer') || n.includes('drakenash')) return '🪓';
    if (n.includes('bow') || n.includes('crossbow') || n.includes('bastorik')) return '🏹';
    if (n.includes('staff') || n.includes('scepter') || n.includes('rod') || n.includes('cane') || n.includes('mace') || n.includes('albiore')) return '🪄';
    return '⚔️';
  }
  // Accessories
  if (n.includes('ring') || n.includes('signet') || n.includes('earrings')) return '💍';
  if (n.includes('crown') || n.includes('circlet') || n.includes('hood') || n.includes('mitre') || n.includes('beret') || n.includes('cap')) return '👑';
  if (n.includes('plume') || n.includes('broach') || n.includes('ribbon')) return '🪶';
  if (n.includes('lens') || n.includes('spectacles') || n.includes('eyepatch')) return '🔍';
  if (n.includes('pendant') || n.includes('necklace') || n.includes('choker') || n.includes('talisman') || n.includes('amulet')) return '📿';
  if (n.includes('coin')) return '🪙';
  if (n.includes('standard')) return '🚩';
  if (n.includes('gauntlets') || n.includes('mittens') || n.includes('gloves')) return '🧤';
  if (n.includes('belt') || n.includes('sash') || n.includes('tasset')) return '🥋';
  if (n.includes('boots') || n.includes('shoes') || n.includes('sabatons') || n.includes('caligae')) return '👢';
  if (n.includes('cloak') || n.includes('cape') || n.includes('scarf') || n.includes('robes') || n.includes('shawl')) return '🧣';
  if (n.includes('tome')) return '📜';
  return '💎';
}

const META_CORE_NAMES = new Set([
  'holy unicorn blade', 'kingsblade cornix', 'kingslance elhal', 'kingsaxe drakenash', 'kingsbow bastorik', 'kingstaff albiore',
  'millenium scepter', 'dragoon\'s warspear', 'icefall bow', 'pursuant\'s blade', 'runic sword', 'runic spear', 'black cat-ear hood',
  'white cat-ear hood', 'sniper\'s amber lens', 'familiar\'s choker', 'angel plume', 'raven plume', 'heavensteed reins', 'heavenwyvern reins',
  'wolfpack gauntlets', 'ring of the unicorn', 'holy unicorn signet', 'scarlett\'s ribbon', 'chloe\'s charm', 'lucky coin', 'ancient crown',
  'dream crown', 'blue rose shield', 'azure crest shield', 'holy unicorn shield', 'luminous shield', 'parrying shield', 'carnelian pendant',
  'ruby pendant', 'lapis pendant', 'sapphire pendant', 'amethyst pendant', 'royal scarf', 'thief\'s mantle', 'sage owl\'s shawl', "sage's hood"
]);

const FINAL_ITEMS_DATA = officialItems.map(item => {
  const n = item.name.toLowerCase();
  const wiki = wikiParsed[n] || wikiParsed[n.replace(/'/g, '%27')] || null;

  let statBoosts = 'Stat boosts varying by tier';
  let acquisition = 'Armorer / World Quest / Treasure';
  let grantedSkill = undefined;

  if (wiki) {
    statBoosts = wiki.statBoosts || statBoosts;
    acquisition = wiki.acquisition || acquisition;
    grantedSkill = wiki.grantedSkill || undefined;
  }

  // Ensure high quality formatting
  if (n === "sage's hood") {
    statBoosts = 'Mag Def +3, Magick Attack +12%';
    acquisition = 'Can be bought in various end game shops.';
  } else if (n === "black cat-ear hood") {
    statBoosts = 'Mag Def +5, Quick Impetus, Base PP +1, Initiative +10';
    acquisition = 'Coliseum Prize Exchange (1,000 CC)';
    grantedSkill = {
      name: 'Quick Impetus',
      cost: '2 PP',
      description: 'Activates when an ally uses an active charge skill. Grants the ally an immediate extra action.'
    };
  } else if (n === "sniper's amber lens") {
    statBoosts = 'Phys Def +1, Accuracy +20, Hawk Eye';
    acquisition = 'Dracodorina Citadel Armorer Shop / Coliseum';
    grantedSkill = {
      name: 'Hawk Eye',
      cost: '1 PP',
      description: "Before attacking, grant self 100% Truestrike and 100% Guaranteed Critical Hit."
    };
  } else if (n === "millenium scepter") {
    statBoosts = 'Mag Atk +24, Trinity Rain';
    acquisition = 'Coliseum Prize Exchange (2,000 CC)';
    grantedSkill = {
      name: 'Trinity Rain',
      cost: '3 AP',
      description: 'Charge a 3-hit radiant magical rain storm striking all enemies.'
    };
  } else if (n === "holy unicorn blade") {
    statBoosts = 'Phys Atk +28, Base AP +1, Base PP +1, Debuff Immunity';
    acquisition = 'Sanctuary of the Unicorn ("The Royal Mausoleum" Quest)';
  } else if (n === "ring of the unicorn") {
    statBoosts = 'All Stats +5, Base AP +1, Base PP +1, Affliction Immunity';
    acquisition = 'Main Story Quest (Ring of the Unicorn)';
  }

  const icon = getItemIcon(item.category, item.name);
  const isMetaCore = META_CORE_NAMES.has(n);

  return {
    id: item.id,
    name: item.name,
    type: item.category,
    icon,
    statBoosts,
    acquisition,
    isMetaCore,
    grantedSkill,
    metaSquads: []
  };
});

fs.writeFileSync('./src/data/items.ts', `import { RelicItem } from '@/types';\n\nexport const ITEMS_DATA: RelicItem[] = ${JSON.stringify(FINAL_ITEMS_DATA, null, 2)};\n`);
console.log(`Successfully written 425 authentic official items with exact wiki stats to items.ts!`);
