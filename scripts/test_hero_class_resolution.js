const fs = require('fs');
const path = require('path');

const classesRaw = fs.readFileSync(path.join(__dirname, '../src/data/classes.ts'), 'utf-8');
const cleanClasses = classesRaw.substring(classesRaw.indexOf('['), classesRaw.lastIndexOf(']') + 1);
const CLASSES_DATA = eval(cleanClasses);

const squadsRaw = fs.readFileSync(path.join(__dirname, '../src/data/zeroOverlapSquads.ts'), 'utf-8');
const cleanSquads = squadsRaw.substring(squadsRaw.indexOf('['), squadsRaw.lastIndexOf(']') + 1);
const ZERO_OVERLAP_SQUADS = eval(cleanSquads);

const HERO_TO_CLASS_MAP = {
  'alain': 'high-lord', 'alain-high-lord': 'high-lord', 'high-lord': 'high-lord',
  'scarlett': 'high-priestess', 'scarlett-high-priestess': 'high-priestess', 'high-priestess': 'high-priestess',
  'clive': 'great-knight', 'clive-great-knight': 'great-knight', 'great-knight': 'great-knight',
  'chloe': 'sergeant', 'chloe-sergeant': 'sergeant', 'sergeant': 'sergeant',
  'melisandre': 'swordmaster', 'melisandre-swordmaster': 'swordmaster', 'swordmaster': 'swordmaster',
  'auch': 'sorcerer', 'auch-sorcerer': 'sorcerer', 'sorcerer': 'sorcerer',
  'sharon': 'bishop', 'sharon-bishop': 'bishop', 'bishop': 'bishop',
  'yahna': 'sorceress', 'yahna-sorceress': 'sorceress', 'sorceress': 'sorceress',
  'hodrick': 'legionnaire', 'hodrick-legionnaire': 'legionnaire', 'legionnaire': 'legionnaire',
  'selvie': 'druid', 'selvie-druid': 'druid', 'druid': 'druid',
  'hilda': 'wyvern-master', 'hilda-wyvern-master': 'wyvern-master', 'wyvern-master': 'wyvern-master',
  'fran': 'gryphon-master', 'fran-gryphon-master': 'gryphon-master', 'gryphon-master': 'gryphon-master',
  'miriam': 'sainted-knight', 'miriam-sainted-knight': 'sainted-knight', 'sainted-knight': 'sainted-knight',
  'primm': 'bishop', 'primm-bishop': 'bishop',
  'gilbert': 'prince', 'gilbert-prince': 'prince', 'prince': 'prince',
  'berengaria': 'renegade', 'berengaria-renegade': 'renegade', 'dark-marquess': 'renegade', 'renegade': 'renegade',
  'travis': 'rogue', 'travis-rogue': 'rogue', 'rogue': 'rogue',
  'nina': 'breaker', 'nina-breaker': 'breaker', 'breaker': 'breaker',
  'liza': 'shieldshooter', 'liza-shieldshooter': 'shieldshooter', 'shieldshooter': 'shieldshooter',
  'bruno': 'berserker', 'bruno-berserker': 'berserker', 'berserker': 'berserker',
  'virginia': 'valkyria', 'virginia-valkyria': 'valkyria', 'valkyria': 'valkyria',
  'colm': 'vanguard', 'colm-vanguard': 'vanguard', 'vanguard': 'vanguard',
  'leah': 'swordmaster', 'leah-swordmaster': 'swordmaster',
  'kitra': 'breaker', 'kitra-breaker': 'breaker',
  'rolf': 'sniper', 'rolf-sniper': 'sniper', 'sniper': 'sniper',
  'yunifi': 'snow-ranger', 'yunifi-snow-ranger': 'snow-ranger', 'snow-ranger': 'snow-ranger',
  'ramona': 'wereowl', 'ramona-wereowl': 'wereowl', 'wereowl': 'wereowl',
  'ridiel': 'elven-archer', 'ridiel-elven-archer': 'elven-archer', 'elven-archer': 'elven-archer',
  'bryce': 'legionnaire', 'bryce-legionnaire': 'legionnaire',
  'lex': 'vanguard', 'lex-vanguard': 'vanguard',
  'rosalinde': 'elven-augur', 'rosalinde-elven-augur': 'elven-augur', 'elven-augur': 'elven-augur',
  'eltolinde': 'elven-sibyl', 'eltolinde-elven-sibyl': 'elven-sibyl', 'elven-sibyl': 'elven-sibyl',
  'ithilion': 'elven-fencer', 'ithilion-elven-fencer': 'elven-fencer', 'elven-fencer': 'elven-fencer',
  'railanor': 'elven-fencer', 'railanor-elven-fencer': 'elven-fencer',
  'galadmir': 'elven-archer', 'galadmir-elven-archer': 'elven-archer',
  'amalia': 'dreadnought', 'amalia-dreadnought': 'dreadnought', 'dreadnought': 'dreadnought',
  'bertrand': 'werebear', 'bertrand-werebear': 'werebear', 'werebear': 'werebear',
  'monica': 'sainted-knight', 'monica-sainted-knight': 'sainted-knight',
  'aramis': 'swordmaster', 'aramis-swordmaster': 'swordmaster',
  'mandrin': 'sniper', 'mandrin-sniper': 'sniper',
  'dinah': 'werewolf', 'dinah-werewolf': 'werewolf', 'werewolf': 'werewolf',
  'govil': 'werewolf', 'govil-werewolf': 'werewolf',
  'morpan': 'werebear', 'morpan-werebear': 'werebear',
  'jeremy': 'landsknecht', 'jeremy-landsknecht': 'landsknecht', 'landsknecht': 'landsknecht',
  'raenys': 'featherbow', 'raenys-featherbow': 'featherbow', 'featherbow': 'featherbow',
  'sanatio': 'featherstaff', 'sanatio-featherstaff': 'featherstaff', 'featherstaff': 'featherstaff',
  'ochlys': 'feathersword', 'ochlys-feathersword': 'feathersword', 'feathersword': 'feathersword',
  'umerus': 'feathersword', 'umerus-feathersword': 'feathersword',
  'tatiana': 'bishop', 'tatiana-bishop': 'bishop',
  'gloucester': 'doom-knight', 'gloucester-doom-knight': 'doom-knight', 'doom-knight': 'doom-knight'
};

function getUnitClass(unitId) {
  if (!unitId) return null;
  const raw = unitId.toLowerCase().trim();
  const classKey = (HERO_TO_CLASS_MAP[raw] || raw).toLowerCase();
  return CLASSES_DATA.find(c => c.id.toLowerCase() === classKey || c.id.toLowerCase() === raw) || null;
}

let failed = 0;
ZERO_OVERLAP_SQUADS.forEach(s => {
  s.unitGearConfigs.forEach(u => {
    const res = getUnitClass(u.unitId);
    if (!res || !res.activeSkills?.length || !res.passiveSkills?.length) {
      console.log(`❌ Failed for ${u.characterName} (${u.unitId}): found=${!!res}, active=${res?.activeSkills?.length}, passive=${res?.passiveSkills?.length}`);
      failed++;
    } else {
      console.log(`✅ ${u.characterName} -> ${res.name} (Active: ${res.activeSkills.map(s => s.name).join(', ')} | Passive: ${res.passiveSkills.map(s => s.name).join(', ')})`);
    }
  });
});

console.log(`\nResult: ${50 - failed}/50 heroes correctly resolved with full skills!`);
