const fs = require('fs');
const path = require('path');

const classesRaw = fs.readFileSync(path.join(__dirname, '../src/data/classes.ts'), 'utf-8');
const cleanClasses = classesRaw.substring(classesRaw.indexOf('['), classesRaw.lastIndexOf(']') + 1);
const CLASSES_DATA = eval(cleanClasses);

const squadsRaw = fs.readFileSync(path.join(__dirname, '../src/data/zeroOverlapSquads.ts'), 'utf-8');
const cleanSquads = squadsRaw.substring(squadsRaw.indexOf('['), squadsRaw.lastIndexOf(']') + 1);
const ZERO_OVERLAP_SQUADS = eval(cleanSquads);

const itemsRaw = fs.readFileSync(path.join(__dirname, '../src/data/items.ts'), 'utf-8');
const cleanItems = itemsRaw.substring(itemsRaw.indexOf('['), itemsRaw.lastIndexOf(']') + 1);
const ITEMS_DATA = eval(cleanItems);

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

function generateComprehensiveTactics(uClass, gearConfig) {
  if (!uClass) return [];
  const steps = [];
  const unitDisplayName = gearConfig?.characterName || gearConfig?.unitName || uClass.name;

  // Gather equipped items and find granted skills
  const equippedItemNames = [
    gearConfig?.slot1Weapon?.bestInSlot || gearConfig?.weapon,
    gearConfig?.slot2ShieldOrOffhand?.bestInSlot || gearConfig?.shieldOrHelm,
    gearConfig?.slot3Accessory?.bestInSlot || gearConfig?.accessory1,
    gearConfig?.slot4Accessory?.bestInSlot || gearConfig?.accessory2,
  ].filter(Boolean);

  const grantedItemSkills = [];
  equippedItemNames.forEach((itemName) => {
    const clean = itemName.toLowerCase().trim();
    const norm = clean.replace(/[^a-z0-9]/g, '');
    const found = ITEMS_DATA.find(
      (i) =>
        i.name.toLowerCase().trim() === clean ||
        i.id.toLowerCase().trim() === clean.replace(/\s+/g, '-') ||
        i.name.toLowerCase().replace(/[^a-z0-9]/g, '') === norm
    );
    if (found?.grantedSkill) {
      grantedItemSkills.push(found.grantedSkill);
    }
  });

  const activeSkillsList = [...(uClass.activeSkills || [])];

  // 1. Primary Active (High AP / AOE / Row / Column / Core Strike)
  if (activeSkillsList.length > 0) {
    const primaryActive = activeSkillsList.reduce(
      (prev, curr) => ((curr.apCost || 1) >= (prev.apCost || 1) ? curr : prev),
      activeSkillsList[0]
    );
    let cond1 = '[Target: Front Row (2+ Enemies)]';
    if (primaryActive.target === 'Full Row' || primaryActive.target === 'Enemy Row') cond1 = '[Target: Front Row (2+ Enemies)]';
    else if (primaryActive.target === 'All Enemies') cond1 = '[Target: All Enemies]';
    else if (primaryActive.target === 'Column' || primaryActive.target === 'Enemy Column') cond1 = '[Target: Column (Infantry Priority)]';
    else if (primaryActive.flags?.includes('True-Strike') || primaryActive.name.toLowerCase().includes('keen'))
      cond1 = '[Target: Prioritize Scouts / Evasion]';
    else if (uClass.category === 'Cavalry') cond1 = '[Target: Prioritize Infantry]';
    else if (uClass.role === 'Physical DPS') cond1 = '[Target: Prioritize Low Phys DEF]';
    else if (uClass.role === 'Support' || uClass.role === 'Healer') cond1 = '[Target: Ally HP <= 50%]';

    steps.push({
      step: steps.length + 1,
      unit: unitDisplayName,
      skill: primaryActive.name,
      condition1: cond1,
      condition2: `[Self AP >= ${primaryActive.apCost || 2}]`,
      notes: primaryActive.description || `Primary tactical strike with ${primaryActive.potency || 100}% potency.`,
    });

    // 2. Secondary Active (Single Target / Finisher / Cleanse / Secondary AP)
    const secondaryActive = activeSkillsList.find((s) => s.name !== primaryActive.name);
    if (secondaryActive) {
      let sCond1 = '[Target: Lowest HP %]';
      if (secondaryActive.name.toLowerCase().includes('heal') || secondaryActive.name.toLowerCase().includes('light')) {
        sCond1 = '[Target: Ally HP <= 75%]';
      } else if (secondaryActive.flags?.includes('Anti-Flying') || secondaryActive.name.toLowerCase().includes('snipe')) {
        sCond1 = '[Target: Flying Enemies Priority]';
      } else if (secondaryActive.flags?.includes('Anti-Armor') || secondaryActive.name.toLowerCase().includes('smash') || secondaryActive.name.toLowerCase().includes('strike')) {
        sCond1 = '[Target: Armored Enemies Priority]';
      }

      steps.push({
        step: steps.length + 1,
        unit: unitDisplayName,
        skill: secondaryActive.name,
        condition1: sCond1,
        condition2: `[Self AP >= ${secondaryActive.apCost || 1}]`,
        notes: secondaryActive.description || `Secondary tactical action.`,
      });
    }
  }

  // 3. Granted Item Active Skills (e.g. Trinity Rain, Dragoon Dive, Arrow Rain)
  grantedItemSkills.forEach((gSkill) => {
    if (gSkill.cost.includes('AP') && !steps.some((s) => s.skill === gSkill.name)) {
      steps.push({
        step: steps.length + 1,
        unit: unitDisplayName,
        skill: gSkill.name,
        condition1: '[Target: All Enemies (Turn 1)]',
        condition2: `[Self AP >= ${parseInt(gSkill.cost) || 4}]`,
        notes: `${gSkill.description} (Granted from equipped item)`,
      });
    }
  });

  // 4. Start of Battle Passive Trigger
  const startOfBattleSkill = (uClass.passiveSkills || []).find((s) => s.isStartOfBattle || s.trigger === 'Start of Battle');
  if (startOfBattleSkill) {
    steps.push({
      step: steps.length + 1,
      unit: unitDisplayName,
      skill: startOfBattleSkill.name,
      condition1: '[Start of Battle]',
      condition2: `[Self PP >= ${startOfBattleSkill.ppCost || 1}]`,
      notes: startOfBattleSkill.description || 'Start of Battle tactical field activation.',
    });
  }

  // 5. Defensive / Cover / Guard / Evade / Parry / Reactive Passives
  const defPassives = (uClass.passiveSkills || []).filter(
    (s) =>
      !s.isStartOfBattle &&
      (s.trigger?.toLowerCase().includes('attack') ||
        s.trigger?.toLowerCase().includes('guard') ||
        s.name.toLowerCase().includes('guard') ||
        s.name.toLowerCase().includes('cover') ||
        s.name.toLowerCase().includes('parry') ||
        s.name.toLowerCase().includes('evade') ||
        s.name.toLowerCase().includes('heal') ||
        s.name.toLowerCase().includes('shield'))
  );
  defPassives.forEach((dp) => {
    if (!steps.some((s) => s.skill === dp.name)) {
      let cond1 = '[Before Being Attacked]';
      if (dp.name.toLowerCase().includes('cover')) cond1 = '[Before Ally Attacked (Back Row)]';
      else if (dp.name.toLowerCase().includes('parry')) cond1 = '[Before Melee Physical Attack]';
      else if (dp.name.toLowerCase().includes('evade')) cond1 = '[Before Being Attacked]';
      else if (dp.name.toLowerCase().includes('heal')) cond1 = '[Ally HP <= 50%]';
      else if (dp.trigger) cond1 = `[${dp.trigger}]`;

      steps.push({
        step: steps.length + 1,
        unit: unitDisplayName,
        skill: dp.name,
        condition1: cond1,
        condition2: `[Self PP >= ${dp.ppCost || 1}]`,
        notes: dp.description || 'Defensive reaction preserving squad formation health.',
      });
    }
  });

  // 6. Granted Item Passive Skills (e.g. Quick Impetus, Hawk Eye, Eagle Eye, Pursuit, Toughness)
  grantedItemSkills.forEach((gSkill) => {
    if (gSkill.cost.includes('PP') && !steps.some((s) => s.skill === gSkill.name)) {
      let cond1 = '[After Ally Acts]';
      if (gSkill.name.toLowerCase().includes('impetus')) cond1 = '[Target: Highest ATK Ally (Turn 1)]';
      else if (gSkill.name.toLowerCase().includes('eye') || gSkill.name.toLowerCase().includes('lens') || gSkill.name.toLowerCase().includes('hawk'))
        cond1 = '[Self: Before Attacking (AOE)]';
      else if (gSkill.name.toLowerCase().includes('barrier') || gSkill.name.toLowerCase().includes('shield'))
        cond1 = '[Before Magic Attack]';
      else if (gSkill.name.toLowerCase().includes('pursuit'))
        cond1 = '[After Ally Attacks]';

      steps.push({
        step: steps.length + 1,
        unit: unitDisplayName,
        skill: gSkill.name,
        condition1: cond1,
        condition2: `[Self PP >= ${parseInt(gSkill.cost) || 1}]`,
        notes: `${gSkill.description} (Granted from equipped item)`,
      });
    }
  });

  // 7. Remaining Buff / Follow-up / Pursuit / Plunder Passives
  const otherPassives = (uClass.passiveSkills || []).filter((s) => !steps.some((st) => st.skill === s.name));
  otherPassives.forEach((op) => {
    let cond1 = op.trigger ? `[${op.trigger}]` : '[After Ally Attack]';
    if (op.name.toLowerCase().includes('call')) cond1 = '[Before Ally Physical Attack]';
    else if (op.name.toLowerCase().includes('conferral') || op.name.toLowerCase().includes('weapon')) cond1 = '[Before Ally Physical Attack]';
    else if (op.name.toLowerCase().includes('pursuit') || op.name.toLowerCase().includes('following') || op.name.toLowerCase().includes('chasing')) cond1 = '[After Ally Attacks]';
    else if (op.name.toLowerCase().includes('plunder') || op.name.toLowerCase().includes('steal')) cond1 = '[After Active Action]';
    else if (op.name.toLowerCase().includes('eyes')) cond1 = '[When Ally Uses PP]';

    steps.push({
      step: steps.length + 1,
      unit: unitDisplayName,
      skill: op.name,
      condition1: cond1,
      condition2: `[Self PP >= ${op.ppCost || 1}]`,
      notes: op.description || 'Offensive passive enabler powering squad synergy combinations.',
    });
  });

  // Re-index steps cleanly 1..N
  return steps.map((s, idx) => ({ ...s, step: idx + 1 }));
}

// Test Travis tactics
const squad4 = ZERO_OVERLAP_SQUADS.find(s => s.id.includes('berengaria'));
const travisConfig = squad4.unitGearConfigs.find(u => u.characterName === 'Travis');
const travisClass = getUnitClass(travisConfig.unitId);
const travisTactics = generateComprehensiveTactics(travisClass, travisConfig);

console.log('=== TRAVIS TACTICS GENERATION TEST ===');
console.log('Class:', travisClass.name);
console.log('Items:', travisConfig.slot1Weapon.bestInSlot, travisConfig.slot2ShieldOrOffhand.bestInSlot, travisConfig.slot3Accessory.bestInSlot, travisConfig.slot4Accessory.bestInSlot);
travisTactics.forEach(t => {
  console.log(`P${t.step}: [${t.skill}] | Cond1: ${t.condition1} | Cond2: ${t.condition2} | Notes: ${t.notes}`);
});

console.log('\n=== ALAIN TACTICS GENERATION TEST ===');
const squad1 = ZERO_OVERLAP_SQUADS[0];
const alainConfig = squad1.unitGearConfigs.find(u => u.characterName === 'Alain');
const alainClass = getUnitClass(alainConfig.unitId);
const alainTactics = generateComprehensiveTactics(alainClass, alainConfig);
alainTactics.forEach(t => {
  console.log(`P${t.step}: [${t.skill}] | Cond1: ${t.condition1} | Cond2: ${t.condition2} | Notes: ${t.notes}`);
});

console.log('\n=== BERENGARIA TACTICS GENERATION TEST ===');
const berengariaConfig = squad4.unitGearConfigs.find(u => u.characterName === 'Berengaria');
const berengariaClass = getUnitClass(berengariaConfig.unitId);
const berengariaTactics = generateComprehensiveTactics(berengariaClass, berengariaConfig);
berengariaTactics.forEach(t => {
  console.log(`P${t.step}: [${t.skill}] | Cond1: ${t.condition1} | Cond2: ${t.condition2} | Notes: ${t.notes}`);
});
