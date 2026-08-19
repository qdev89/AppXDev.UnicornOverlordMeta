import { SquadBuild, UnitClass, UnitGearConfig, SquadSlot } from '@/types';
import { CLASSES_DATA } from '@/data/classes';

// Comprehensive alias dictionary mapping any shorthand, class name, or canonical hero name to class ID
export const ALIAS_MAP: Record<string, string> = {
  // Alain & Core
  'alain': 'high-lord',
  'alain-high-lord': 'high-lord',
  'high-lord': 'high-lord',
  'lord': 'high-lord',

  // Scarlett
  'scarlett': 'high-priestess',
  'scarlett-high-priestess': 'high-priestess',
  'high-priestess': 'high-priestess',
  'priestess': 'high-priestess',

  // Clive
  'clive': 'great-knight',
  'clive-great-knight': 'great-knight',
  'great-knight': 'great-knight',
  'knight': 'great-knight',

  // Chloe
  'chloe': 'sergeant',
  'chloe-sergeant': 'sergeant',
  'sergeant': 'sergeant',
  'soldier': 'sergeant',

  // Melisandre
  'melisandre': 'swordmaster',
  'melisandre-swordmaster': 'swordmaster',
  'swordmaster': 'swordmaster',

  // Auch
  'auch': 'sorcerer',
  'auch-sorcerer': 'sorcerer',
  'sorcerer': 'sorcerer',
  'warlock': 'sorcerer',
  'wizard': 'sorcerer',

  // Sharon
  'sharon': 'bishop',
  'sharon-bishop': 'bishop',
  'bishop': 'bishop',
  'cleric': 'bishop',

  // Yahna
  'yahna': 'sorceress',
  'yahna-sorceress': 'sorceress',
  'sorceress': 'sorceress',
  'witch': 'sorceress',

  // Hodrick
  'hodrick': 'legionnaire',
  'hodrick-legionnaire': 'legionnaire',
  'legionnaire': 'legionnaire',
  'hoplite': 'legionnaire',

  // Selvie
  'selvie': 'druid',
  'selvie-druid': 'druid',
  'druid': 'druid',
  'shaman': 'druid',

  // Hilda
  'hilda': 'wyvern-master',
  'hilda-wyvern-master': 'wyvern-master',
  'wyvern-master': 'wyvern-master',
  'wyvern-knight': 'wyvern-master',

  // Fran
  'fran': 'gryphon-master',
  'fran-gryphon-master': 'gryphon-master',
  'gryphon-master': 'gryphon-master',
  'gryphon-knight': 'gryphon-master',

  // Miriam & Monica
  'miriam': 'sainted-knight',
  'miriam-sainted-knight': 'sainted-knight',
  'monica': 'sainted-knight',
  'monica-sainted-knight': 'sainted-knight',
  'sainted-knight': 'sainted-knight',
  'radiant-knight': 'sainted-knight',

  // Primm & Tatiana
  'primm': 'bishop',
  'primm-bishop': 'bishop',
  'tatiana': 'bishop',
  'tatiana-bishop': 'bishop',

  // Gilbert
  'gilbert': 'prince',
  'gilbert-prince': 'prince',
  'prince': 'prince',

  // Berengaria
  'berengaria': 'renegade',
  'berengaria-renegade': 'renegade',
  'berengaria-dark-marquess': 'renegade',
  'dark-marquess': 'renegade',
  'renegade': 'renegade',

  // Travis
  'travis': 'rogue',
  'travis-rogue': 'rogue',
  'rogue': 'rogue',
  'thief': 'rogue',

  // Nina & Kitra
  'nina': 'breaker',
  'nina-breaker': 'breaker',
  'kitra': 'breaker',
  'kitra-breaker': 'breaker',
  'breaker': 'breaker',
  'warrior': 'breaker',

  // Liza
  'liza': 'shieldshooter',
  'liza-shieldshooter': 'shieldshooter',
  'shieldshooter': 'shieldshooter',
  'arbalist': 'shieldshooter',

  // Bruno
  'bruno': 'berserker',
  'bruno-berserker': 'berserker',
  'berserker': 'berserker',
  'gladiator': 'berserker',

  // Virginia
  'virginia': 'valkyria',
  'virginia-valkyria': 'valkyria',
  'virginia-crusader': 'valkyria',
  'valkyria': 'valkyria',
  'valkyrie': 'valkyria',
  'crusader': 'valkyria',

  // Colm & Lex
  'colm': 'vanguard',
  'colm-vanguard': 'vanguard',
  'lex': 'vanguard',
  'lex-vanguard': 'vanguard',
  'vanguard': 'vanguard',
  'fighter': 'vanguard',

  // Leah & Aramis
  'leah': 'swordmaster',
  'leah-swordmaster': 'swordmaster',
  'aramis': 'swordmaster',
  'aramis-swordmaster': 'swordmaster',

  // Rolf & Mandrin
  'rolf': 'sniper',
  'rolf-sniper': 'sniper',
  'mandrin': 'sniper',
  'mandrin-sniper': 'sniper',
  'sniper': 'sniper',
  'hunter': 'sniper',

  // Yunifi
  'yunifi': 'snow-ranger',
  'yunifi-snow-ranger': 'snow-ranger',
  'snow-ranger': 'snow-ranger',

  // Ramona
  'ramona': 'wereowl',
  'ramona-wereowl': 'wereowl',
  'wereowl': 'wereowl',

  // Ridiel & Galadmir
  'ridiel': 'elven-archer',
  'ridiel-elven-archer': 'elven-archer',
  'galadmir': 'elven-archer',
  'galadmir-elven-archer': 'elven-archer',
  'elven-archer': 'elven-archer',

  // Bryce
  'bryce': 'legionnaire',
  'bryce-legionnaire': 'legionnaire',

  // Rosalinde & Eltolinde
  'rosalinde': 'elven-augur',
  'rosalinde-elven-augur': 'elven-augur',
  'rosalinde-elven-prophet': 'elven-augur',
  'elven-augur': 'elven-augur',
  'elven-prophet': 'elven-augur',
  'eltolinde': 'elven-sibyl',
  'eltolinde-elven-sibyl': 'elven-sibyl',
  'eltolinde-elven-prophet': 'elven-sibyl',
  'elven-sibyl': 'elven-sibyl',

  // Ithilion & Railanor
  'ithilion': 'elven-fencer',
  'ithilion-elven-fencer': 'elven-fencer',
  'railanor': 'elven-fencer',
  'railanor-elven-fencer': 'elven-fencer',
  'elven-fencer': 'elven-fencer',
  'fencer': 'elven-fencer',

  // Amalia
  'amalia': 'dreadnought',
  'amalia-dreadnought': 'dreadnought',
  'dreadnought': 'dreadnought',

  // Bertrand & Morpan
  'bertrand': 'werebear',
  'bertrand-werebear': 'werebear',
  'morpan': 'werebear',
  'morpan-werebear': 'werebear',
  'werebear': 'werebear',

  // Dinah & Govil
  'dinah': 'werewolf',
  'dinah-werewolf': 'werewolf',
  'govil': 'werewolf',
  'govil-werewolf': 'werewolf',
  'werewolf': 'werewolf',

  // Jeremy
  'jeremy': 'landsknecht',
  'jeremy-landsknecht': 'landsknecht',
  'landsknecht': 'landsknecht',

  // Raenys
  'raenys': 'featherbow',
  'raenys-featherbow': 'featherbow',
  'featherbow': 'featherbow',

  // Sanatio
  'sanatio': 'featherstaff',
  'sanatio-featherstaff': 'featherstaff',
  'featherstaff': 'featherstaff',

  // Ochlys & Umerus
  'ochlys': 'feathersword',
  'ochlys-feathersword': 'feathersword',
  'umerus': 'feathersword',
  'umerus-feathersword': 'feathersword',
  'feathersword': 'feathersword',

  // Gloucester
  'gloucester': 'doom-knight',
  'gloucester-doom-knight': 'doom-knight',
  'doom-knight': 'doom-knight',
  'dark-knight': 'doom-knight',
};

// Complete canonical hero-to-portrait mapping for all 50 unique heroes
export const HERO_IMAGE_MAP: Record<string, string> = {
  'alain': '/images/characters/alain-high-lord.png',
  'scarlett': '/images/characters/scarlett-high-priestess.png',
  'clive': '/images/characters/great-knight.png',
  'chloe': '/images/characters/soldier.png',
  'melisandre': '/images/characters/swordmaster.png',
  
  'auch': '/images/characters/warlock.png',
  'sharon': '/images/characters/bishop.png',
  'yahna': '/images/characters/sorceress.png',
  'hodrick': '/images/characters/legionnaire.png',
  'selvie': '/images/characters/selvie-druid.png',
  
  'hilda': '/images/characters/wyvern-master.png',
  'fran': '/images/characters/gryphon-master.png',
  'miriam': '/images/characters/sainted-knight.png',
  'primm': '/images/characters/cleric.png',
  'gilbert': '/images/characters/gilbert-prince.png',
  
  'berengaria': '/images/characters/berengaria-renegade.png',
  'travis': '/images/characters/rogue.png',
  'nina': '/images/characters/breaker.png',
  'liza': '/images/characters/arbalist.png',
  'bruno': '/images/characters/berserker.png',
  
  'virginia': '/images/characters/valkyria.png',
  'colm': '/images/characters/vanguard.png',
  'leah': '/images/characters/swordmaster.png',
  'kitra': '/images/characters/breaker.png',
  'rolf': '/images/characters/sniper.png',
  
  'yunifi': '/images/characters/yunifi-snow-ranger.png',
  'ramona': '/images/characters/priestess.png',
  'ridiel': '/images/characters/elven-fencer.png',
  'bryce': '/images/characters/hoplite.png',
  'lex': '/images/characters/fighter.png',
  
  'rosalinde': '/images/characters/rosalinde-elven-prophet.png',
  'eltolinde': '/images/characters/eltolinde-elven-sibyl.png',
  'ithilion': '/images/characters/elven-fencer.png',
  'railanor': '/images/characters/elven-fencer.png',
  'galadmir': '/images/characters/hunter.png',
  
  'amalia': '/images/characters/high-lord.png',
  'bertrand': '/images/characters/gladiator.png',
  'monica': '/images/characters/radiant-knight.png',
  'aramis': '/images/characters/swordmaster.png',
  'mandrin': '/images/characters/hunter.png',
  
  'dinah': '/images/characters/werewolf.png',
  'govil': '/images/characters/werewolf.png',
  'morpan': '/images/characters/werelion.png',
  'jeremy': '/images/characters/landsknecht.png',
  'raenys': '/images/characters/raenys-featherbow.png',
  
  'sanatio': '/images/characters/bishop.png',
  'ochlys': '/images/characters/valkyria.png',
  'umerus': '/images/characters/swordmaster.png',
  'tatiana': '/images/characters/cleric.png',
  'gloucester': '/images/characters/doom-knight.png',
};

/**
 * Resolves the absolute best hero portrait image for a given unitId / characterName
 */
export function getHeroPortraitImage(
  unitId?: string | null,
  characterName?: string | null,
  fallbackClassId?: string | null
): string | null {
  if (characterName) {
    const charKey = characterName.toLowerCase().trim().split(' ')[0];
    if (HERO_IMAGE_MAP[charKey]) return HERO_IMAGE_MAP[charKey];
  }
  if (unitId) {
    const raw = unitId.toLowerCase().trim();
    const firstWord = raw.split('-')[0];
    if (HERO_IMAGE_MAP[firstWord]) return HERO_IMAGE_MAP[firstWord];
    if (HERO_IMAGE_MAP[raw]) return HERO_IMAGE_MAP[raw];
  }
  if (fallbackClassId) {
    const cleanClass = fallbackClassId.toLowerCase().trim();
    const foundClass = CLASSES_DATA.find((c) => c.id.toLowerCase() === cleanClass);
    if (foundClass?.image) return foundClass.image;
  }
  return null;
}

/**
 * Resolves a unit identifier to its corresponding UnitClass from CLASSES_DATA
 */
export function getUnitClass(unitId: string | null | undefined): UnitClass | null {
  if (!unitId) return null;
  const raw = unitId.toLowerCase().trim();
  const classKey = (ALIAS_MAP[raw] || raw).toLowerCase();
  const heroSpecificImage = getHeroPortraitImage(raw, null, classKey);

  // 1. Match by mapped classKey or direct ID
  let found = CLASSES_DATA.find(
    (c) => c.id.toLowerCase() === classKey || c.id.toLowerCase() === raw
  );
  if (found) {
    return {
      ...found,
      image: heroSpecificImage || found.image || `/images/characters/${found.id}.png`,
    };
  }

  // 2. Match by clean name (e.g. "dark marquess", "snow ranger", "high lord")
  const cleanId = raw.replace(/-/g, ' ');
  found = CLASSES_DATA.find(
    (c) =>
      c.name.toLowerCase() === cleanId ||
      c.name.toLowerCase().includes(cleanId) ||
      cleanId.includes(c.name.toLowerCase()) ||
      c.id.toLowerCase().includes(raw) ||
      raw.includes(c.id.toLowerCase())
  );
  if (found) {
    return {
      ...found,
      image: heroSpecificImage || found.image || `/images/characters/${found.id}.png`,
    };
  }

  return null;
}

/**
 * Accurately finds the UnitGearConfig matching a given unitId within a SquadBuild
 */
export function getUnitGearConfig(
  squad: SquadBuild | null | undefined,
  unitId: string | null | undefined
): UnitGearConfig | undefined {
  if (!squad || !squad.unitGearConfigs || squad.unitGearConfigs.length === 0 || !unitId) {
    return undefined;
  }

  const target = unitId.toLowerCase().trim();
  const aliased = (ALIAS_MAP[target] || target).toLowerCase();
  const firstWord = target.split('-')[0]; // e.g. "auch", "hodrick", "selvie", "yahna", "sharon"

  // 1. Direct exact unitId match
  let found = squad.unitGearConfigs.find(
    (g) => g.unitId.toLowerCase() === target || g.unitId.toLowerCase() === aliased
  );
  if (found) return found;

  // 2. Normalized unitId match (without hyphens/spaces)
  const normTarget = target.replace(/[^a-z0-9]/g, '');
  found = squad.unitGearConfigs.find(
    (g) => g.unitId.replace(/[^a-z0-9]/g, '').toLowerCase() === normTarget
  );
  if (found) return found;

  // 3. CharacterName exact or first word match
  found = squad.unitGearConfigs.find((g) => {
    const charName = g.characterName?.toLowerCase() || '';
    const uName = g.unitName.toLowerCase();
    return (
      charName === firstWord ||
      charName === target ||
      uName.includes(firstWord) ||
      uName.includes(target)
    );
  });
  if (found) return found;

  // 4. ClassName / RoleTitle match
  found = squad.unitGearConfigs.find((g) => {
    const clsName = (g.className || '').toLowerCase();
    return (
      clsName.includes(aliased) ||
      aliased.includes(clsName) ||
      clsName.includes(firstWord) ||
      firstWord.includes(clsName)
    );
  });

  return found;
}

/**
 * Converts a SquadBuild's 2x3 formation and unitGearConfigs into a SquadSlot array
 */
export function convertBuildToSlots(squad: SquadBuild): SquadSlot[] {
  const slots: SquadSlot[] = [];
  const front = squad.frontRow || [];
  const back = squad.backRow || [];

  // Front Row positions: front-0, front-1
  front.slice(0, 2).forEach((unitId, idx) => {
    const gearConfig = getUnitGearConfig(squad, unitId);
    slots.push({
      slotId: `front-${idx}` as 'front-0' | 'front-1',
      row: 'front',
      index: idx,
      unitId: unitId || null,
      customItems: gearConfig ? [
        gearConfig.slot1Weapon?.bestInSlot || null,
        gearConfig.slot2ShieldOrOffhand?.bestInSlot || null,
        gearConfig.slot3Accessory?.bestInSlot || null,
        gearConfig.slot4Accessory?.bestInSlot || null,
      ] : undefined,
    });
  });

  // Back Row positions: back-0, back-1, back-2
  back.slice(0, 3).forEach((unitId, idx) => {
    const gearConfig = getUnitGearConfig(squad, unitId);
    slots.push({
      slotId: `back-${idx}` as 'back-0' | 'back-1' | 'back-2',
      row: 'back',
      index: idx,
      unitId: unitId || null,
      customItems: gearConfig ? [
        gearConfig.slot1Weapon?.bestInSlot || null,
        gearConfig.slot2ShieldOrOffhand?.bestInSlot || null,
        gearConfig.slot3Accessory?.bestInSlot || null,
        gearConfig.slot4Accessory?.bestInSlot || null,
      ] : undefined,
    });
  });

  return slots;
}

