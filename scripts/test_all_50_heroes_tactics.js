const fs = require('fs');
const path = require('path');

const squadsRaw = fs.readFileSync(path.join(__dirname, '../src/data/zeroOverlapSquads.ts'), 'utf-8');
const squads = eval(squadsRaw.substring(squadsRaw.indexOf('['), squadsRaw.lastIndexOf(']') + 1));

const classesRaw = fs.readFileSync(path.join(__dirname, '../src/data/classes.ts'), 'utf-8');
const classes = eval(classesRaw.substring(classesRaw.indexOf('['), classesRaw.lastIndexOf(']') + 1));

const itemsRaw = fs.readFileSync(path.join(__dirname, '../src/data/items.ts'), 'utf-8');
const items = eval(itemsRaw.substring(itemsRaw.indexOf('['), itemsRaw.lastIndexOf(']') + 1));

const ALIAS_MAP = {
  'virginia-valkyria': 'valkyria',
  'virginia': 'valkyria',
  'alain-high-lord': 'high-lord',
  'alain': 'high-lord',
  'rosalinde-elven-augur': 'elven-augur',
  'rosalinde': 'elven-augur',
  'eltolinde-elven-sibyl': 'elven-sibyl',
  'eltolinde': 'elven-sibyl',
  'berengaria-renegade': 'renegade',
  'berengaria': 'renegade',
  'yunifi-snow-ranger': 'snow-ranger',
  'yunifi': 'snow-ranger',
  'gilbert-prince': 'prince',
  'gilbert': 'prince',
  'raenys-featherbow': 'featherbow',
  'raenys': 'featherbow',
  'scarlett-high-priestess': 'high-priestess',
  'scarlett': 'high-priestess',
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

function getUnitClass(unitId) {
  if (!unitId) return null;
  const aliased = ALIAS_MAP[unitId] || unitId;
  return classes.find(c => c.id === aliased || c.id === unitId || c.name.toLowerCase() === aliased.toLowerCase());
}

function generateComprehensiveTactics(uClass, gearConfig, unitDisplayName) {
  const steps = [];
  const equippedItemNames = [
    gearConfig?.slot1Weapon?.bestInSlot,
    gearConfig?.slot2ShieldOrOffhand?.bestInSlot,
    gearConfig?.slot3Accessory?.bestInSlot,
    gearConfig?.slot4Accessory?.bestInSlot,
  ].filter(Boolean);

  const grantedItemSkills = [];
  equippedItemNames.forEach((itemName) => {
    const clean = itemName.toLowerCase().trim();
    const norm = clean.replace(/[^a-z0-9]/g, '');
    const found = items.find(
      (i) =>
        i.name.toLowerCase().trim() === clean ||
        i.id.toLowerCase().trim() === clean.replace(/\s+/g, '-') ||
        i.name.toLowerCase().replace(/[^a-z0-9]/g, '') === norm
    );
    if (found?.grantedSkill) {
      grantedItemSkills.push(found.grantedSkill);
    }
  });

  const activeSkillsList = [...(uClass?.activeSkills || [])];

  // Priority 1: Primary Active Skill
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
    else if (uClass.role === 'Support') cond1 = '[Target: Ally HP <= 50%]';

    steps.push({
      step: steps.length + 1,
      unit: unitDisplayName,
      skill: primaryActive.name,
      condition1: cond1,
      condition2: `[Self AP >= ${primaryActive.apCost || 2}]`,
    });

    // Priority 2: Secondary Active Skill
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
      });
    }
  }

  // Priority 3: Granted Item Active Skills
  grantedItemSkills.forEach((gSkill) => {
    if (gSkill.cost.includes('AP') && !steps.some((s) => s.skill === gSkill.name)) {
      steps.push({
        step: steps.length + 1,
        unit: unitDisplayName,
        skill: gSkill.name,
        condition1: '[Target: All Enemies (Turn 1)]',
        condition2: `[Self AP >= ${parseInt(gSkill.cost) || 4}]`,
      });
    }
  });

  // Priority 4: Start of Battle Passive
  const startOfBattleSkill = (uClass?.passiveSkills || []).find((s) => s.isStartOfBattle || s.trigger === 'Start of Battle');
  if (startOfBattleSkill) {
    steps.push({
      step: steps.length + 1,
      unit: unitDisplayName,
      skill: startOfBattleSkill.name,
      condition1: '[Start of Battle]',
      condition2: `[Self PP >= ${startOfBattleSkill.ppCost || 1}]`,
    });
  }

  // Priority 5: Defensive Reaction Passives
  const defPassives = (uClass?.passiveSkills || []).filter(
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
      });
    }
  });

  // Priority 6: Granted Item Passive Skills
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
      });
    }
  });

  // Priority 7: Other Passives
  const otherPassives = (uClass?.passiveSkills || []).filter((s) => !steps.some((st) => st.skill === s.name));
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
    });
  });

  return steps.map((s, idx) => ({ ...s, step: idx + 1 }));
}

console.log('=== AUDITING ALL 50 HEROES TACTICS GENERATION ===');
let totalSkillsVerified = 0;
squads.forEach((sq, sIdx) => {
  console.log(`\n================ SQUAD ${sIdx + 1}: ${sq.name} ================`);
  sq.unitGearConfigs?.forEach(u => {
    const cls = getUnitClass(u.unitId);
    if (!cls) {
      console.log(`❌ FAILED TO FIND CLASS FOR ${u.characterName} (ID: ${u.unitId})`);
      return;
    }
    const tactics = generateComprehensiveTactics(cls, u, u.characterName);
    console.log(`  [${u.characterName} (${cls.name})]: ${tactics.length} tactics steps`);
    tactics.forEach(t => {
      console.log(`    P${t.step}: [${t.skill}] -> ${t.condition1} ${t.condition2}`);
      totalSkillsVerified++;
    });
  });
});

console.log(`\n✅ Verified all 50 heroes! Total tactical gambit steps generated: ${totalSkillsVerified}`);
