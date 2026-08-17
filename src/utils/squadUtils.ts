import { SquadBuild, UnitClass, UnitGearConfig, SquadSlot } from '@/types';
import { CLASSES_DATA } from '@/data/classes';

// Comprehensive alias dictionary mapping any shorthand, class name, or canonical hero name to class ID
export const ALIAS_MAP: Record<string, string> = {
  // Aliases & Promoted Names
  'virginia-crusader': 'virginia-valkyria',
  'virginia': 'virginia-valkyria',
  'valkyrie': 'virginia-valkyria',
  'valkyria': 'virginia-valkyria',
  'fencer': 'elven-fencer',
  'berengaria-dark-marquess': 'berengaria-renegade',
  'dark-marquess': 'berengaria-renegade',
  'berengaria': 'berengaria-renegade',
  'eltolinde-elven-prophet': 'eltolinde-elven-sibyl',
  'eltolinde': 'eltolinde-elven-sibyl',
  'elven-sibyl': 'eltolinde-elven-sibyl',
  'rosalinde': 'rosalinde-elven-augur',
  'rosalinde-elven-prophet': 'rosalinde-elven-augur',
  'elven-augur': 'rosalinde-elven-augur',
  'arbalest': 'liza-shieldshooter',
  'snow-ranger': 'yunifi-snow-ranger',
  'yunifi': 'yunifi-snow-ranger',
  'prince': 'gilbert-prince',
  'gilbert': 'gilbert-prince',
  'featherbow': 'raenys-featherbow',
  'raenys': 'raenys-featherbow',
  'raenys-feather-sword': 'raenys-featherbow',
  'high-priestess': 'scarlett-high-priestess',
  'scarlett': 'scarlett-high-priestess',
  'druid': 'selvie-druid',
  'selvie': 'selvie-druid',
  'chloe': 'chloe-sergeant',
  'sergeant': 'chloe-sergeant',
  'melisandre': 'melisandre-swordmaster',
  'swordmaster': 'melisandre-swordmaster',
  'clive': 'clive-great-knight',
  'great-knight': 'clive-great-knight',
  'auch': 'auch-sorcerer',
  'sorcerer': 'auch-sorcerer',
  'warlock': 'auch-sorcerer',
  'yahna': 'yahna-sorceress',
  'sorceress': 'yahna-sorceress',
  'witch': 'yahna-sorceress',
  'sharon': 'sharon-bishop',
  'bishop': 'sharon-bishop',
  'cleric': 'sharon-bishop',
  'hodrick': 'hodrick-legionnaire',
  'legionnaire': 'hodrick-legionnaire',
  'hoplite': 'hodrick-legionnaire',
  'hilda': 'hilda-wyvern-master',
  'wyvern-master': 'hilda-wyvern-master',
  'fran': 'fran-gryphon-master',
  'gryphon-master': 'fran-gryphon-master',
  'miriam': 'miriam-sainted-knight',
  'sainted-knight': 'miriam-sainted-knight',
  'radiant-knight': 'miriam-sainted-knight',
  'primm': 'primm-bishop',
  'travis': 'travis-rogue',
  'thief': 'travis-rogue',
  'rogue': 'travis-rogue',
  'nina': 'nina-breaker',
  'breaker': 'nina-breaker',
  'warrior': 'nina-breaker',
  'liza': 'liza-shieldshooter',
  'shieldshooter': 'liza-shieldshooter',
  'bruno': 'bruno-berserker',
  'berserker': 'bruno-berserker',
  'gladiator': 'bruno-berserker',
  'colm': 'colm-vanguard',
  'vanguard': 'colm-vanguard',
  'fighter': 'colm-vanguard',
  'leah': 'leah-swordmaster',
  'kitra': 'kitra-breaker',
  'rolf': 'rolf-sniper',
  'sniper': 'rolf-sniper',
  'hunter': 'rolf-sniper',
  'ramona': 'ramona-wereowl',
  'wereowl': 'ramona-wereowl',
  'ridiel': 'ridiel-elven-archer',
  'elven-archer': 'ridiel-elven-archer',
  'bryce': 'bryce-legionnaire',
  'lex': 'lex-vanguard',
  'ithilion': 'ithilion-elven-fencer',
  'railanor': 'railanor-elven-fencer',
  'galadmir': 'galadmir-elven-archer',
  'amalia': 'amalia-dreadnought',
  'dreadnought': 'amalia-dreadnought',
  'bertrand': 'bertrand-werebear',
  'werebear': 'bertrand-werebear',
  'monica': 'monica-sainted-knight',
  'aramis': 'aramis-swordmaster',
  'mandrin': 'mandrin-sniper',
  'dinah': 'dinah-werewolf',
  'werewolf': 'dinah-werewolf',
  'govil': 'govil-werewolf',
  'morpan': 'morpan-werebear',
  'jeremy': 'jeremy-landsknecht',
  'landsknecht': 'jeremy-landsknecht',
  'ochlys': 'ochlys-feathersword',
  'feathersword': 'ochlys-feathersword',
  'umerus': 'umerus-feathersword',
  'sanatio': 'sanatio-featherstaff',
  'featherstaff': 'sanatio-featherstaff',
  'tatiana': 'tatiana-bishop',
  'gloucester': 'gloucester-doom-knight',
  'doom-knight': 'gloucester-doom-knight',
  'dark-knight': 'gloucester-doom-knight',
};

// Fallback lookup table for key heroes
const FALLBACK_HERO_MAP: Record<string, { image: string; name: string; role: string; tier: string; category: string }> = {
  'alain-high-lord': { image: '/images/characters/alain-high-lord.png', name: 'Alain (High Lord)', role: 'Physical DPS', tier: 'SS', category: 'Cavalry' },
  'rosalinde-elven-augur': { image: '/images/characters/rosalinde-elven-prophet.png', name: 'Rosalinde (Elven Augur)', role: 'Magic DPS', tier: 'SS', category: 'Unique' },
  'eltolinde-elven-sibyl': { image: '/images/characters/eltolinde-elven-sibyl.png', name: 'Eltolinde (Elven Sibyl)', role: 'Support', tier: 'SS', category: 'Unique' },
  'berengaria-renegade': { image: '/images/characters/berengaria-renegade.png', name: 'Berengaria (Dark Marquess)', role: 'Physical DPS', tier: 'SS', category: 'Infantry' },
  'yunifi-snow-ranger': { image: '/images/characters/yunifi-snow-ranger.png', name: 'Yunifi (Snow Ranger)', role: 'Physical DPS', tier: 'SS', category: 'Infantry' },
  'gilbert-prince': { image: '/images/characters/gilbert-prince.png', name: 'Gilbert (Prince)', role: 'Support', tier: 'S+', category: 'Infantry' },
  'raenys-featherbow': { image: '/images/characters/raenys-featherbow.png', name: 'Raenys (Featherbow)', role: 'Debuffer', tier: 'S+', category: 'Flying' },
  'scarlett-high-priestess': { image: '/images/characters/scarlett-high-priestess.png', name: 'Scarlett (High Priestess)', role: 'Support', tier: 'SS', category: 'Infantry' },
  'chloe-sergeant': { image: '/images/characters/valkyria.png', name: 'Chloe (Sergeant)', role: 'Support', tier: 'S+', category: 'Infantry' },
  'melisandre-swordmaster': { image: '/images/characters/swordmaster.png', name: 'Melisandre (Swordmaster)', role: 'Physical DPS', tier: 'S+', category: 'Infantry' },
  'clive-great-knight': { image: '/images/characters/great-knight.png', name: 'Clive (Great Knight)', role: 'Physical DPS', tier: 'SS', category: 'Cavalry' },
  'auch-sorcerer': { image: '/images/characters/warlock.png', name: 'Auch (Sorcerer)', role: 'Magic DPS', tier: 'SS', category: 'Infantry' },
  'yahna-sorceress': { image: '/images/characters/sorceress.png', name: 'Yahna (Sorceress)', role: 'Magic DPS', tier: 'S+', category: 'Infantry' },
  'sharon-bishop': { image: '/images/characters/bishop.png', name: 'Sharon (Bishop)', role: 'Support', tier: 'S+', category: 'Infantry' },
  'hodrick-legionnaire': { image: '/images/characters/hoplite.png', name: 'Hodrick (Legionnaire)', role: 'Tank', tier: 'SS', category: 'Armored' },
  'selvie-druid': { image: '/images/characters/druid.png', name: 'Selvie (Druid)', role: 'Debuffer', tier: 'SS', category: 'Infantry' },
  'hilda-wyvern-master': { image: '/images/characters/wyvern-master.png', name: 'Hilda (Wyvern Master)', role: 'Physical DPS', tier: 'SS', category: 'Flying' },
  'fran-gryphon-master': { image: '/images/characters/gryphon-master.png', name: 'Fran (Gryphon Master)', role: 'Physical DPS', tier: 'S+', category: 'Flying' },
  'miriam-sainted-knight': { image: '/images/characters/radiant-knight.png', name: 'Miriam (Sainted Knight)', role: 'Support', tier: 'S+', category: 'Cavalry' },
  'primm-bishop': { image: '/images/characters/cleric.png', name: 'Primm (Bishop)', role: 'Support', tier: 'S', category: 'Infantry' },
  'travis-rogue': { image: '/images/characters/rogue.png', name: 'Travis (Rogue)', role: 'Debuffer', tier: 'S+', category: 'Infantry' },
  'nina-breaker': { image: '/images/characters/breaker.png', name: 'Nina (Breaker)', role: 'Physical DPS', tier: 'S+', category: 'Infantry' },
  'liza-shieldshooter': { image: '/images/characters/arbalist.png', name: 'Liza (Shieldshooter)', role: 'Support', tier: 'S', category: 'Infantry' },
  'bruno-berserker': { image: '/images/characters/gladiator.png', name: 'Bruno (Berserker)', role: 'Physical DPS', tier: 'S', category: 'Infantry' },
  'virginia-valkyria': { image: '/images/characters/valkyria.png', name: 'Virginia (Valkyria)', role: 'Tank', tier: 'S+', category: 'Infantry' },
  'colm-vanguard': { image: '/images/characters/vanguard.png', name: 'Colm (Vanguard)', role: 'Tank', tier: 'A+', category: 'Infantry' },
  'leah-swordmaster': { image: '/images/characters/swordmaster.png', name: 'Leah (Swordmaster)', role: 'Physical DPS', tier: 'S+', category: 'Infantry' },
  'kitra-breaker': { image: '/images/characters/breaker.png', name: 'Kitra (Breaker)', role: 'Physical DPS', tier: 'S+', category: 'Infantry' },
  'rolf-sniper': { image: '/images/characters/sniper.png', name: 'Rolf (Sniper)', role: 'Physical DPS', tier: 'S', category: 'Infantry' },
  'ramona-wereowl': { image: '/images/characters/cleric.png', name: 'Ramona (Wereowl)', role: 'Support', tier: 'SS', category: 'Flying' },
  'ridiel-elven-archer': { image: '/images/characters/elven-fencer.png', name: 'Ridiel (Elven Archer)', role: 'Support', tier: 'S+', category: 'Infantry' },
  'bryce-legionnaire': { image: '/images/characters/hoplite.png', name: 'Bryce (Legionnaire)', role: 'Tank', tier: 'S+', category: 'Armored' },
  'lex-vanguard': { image: '/images/characters/vanguard.png', name: 'Lex (Vanguard)', role: 'Tank', tier: 'A+', category: 'Infantry' },
  'ithilion-elven-fencer': { image: '/images/characters/elven-fencer.png', name: 'Ithilion (Elven Fencer)', role: 'Physical DPS', tier: 'S+', category: 'Infantry' },
  'railanor-elven-fencer': { image: '/images/characters/elven-fencer.png', name: 'Railanor (Elven Fencer)', role: 'Physical DPS', tier: 'S+', category: 'Infantry' },
  'galadmir-elven-archer': { image: '/images/characters/elven-fencer.png', name: 'Galadmir (Elven Archer)', role: 'Support', tier: 'S+', category: 'Infantry' },
  'amalia-dreadnought': { image: '/images/characters/high-lord.png', name: 'Amalia (Dreadnought)', role: 'Physical DPS', tier: 'S+', category: 'Infantry' },
  'bertrand-werebear': { image: '/images/characters/gladiator.png', name: 'Bertrand (Werebear)', role: 'Tank', tier: 'S', category: 'Armored' },
  'monica-sainted-knight': { image: '/images/characters/radiant-knight.png', name: 'Monica (Sainted Knight)', role: 'Support', tier: 'S+', category: 'Cavalry' },
  'aramis-swordmaster': { image: '/images/characters/swordmaster.png', name: 'Aramis (Swordmaster)', role: 'Physical DPS', tier: 'S+', category: 'Infantry' },
  'mandrin-sniper': { image: '/images/characters/sniper.png', name: 'Mandrin (Sniper)', role: 'Physical DPS', tier: 'S', category: 'Infantry' },
  'dinah-werewolf': { image: '/images/characters/werewolf.png', name: 'Dinah (Werewolf)', role: 'Physical DPS', tier: 'S+', category: 'Infantry' },
  'govil-werewolf': { image: '/images/characters/werewolf.png', name: 'Govil (Werewolf)', role: 'Physical DPS', tier: 'S+', category: 'Infantry' },
  'morpan-werebear': { image: '/images/characters/gladiator.png', name: 'Morpan (Werebear)', role: 'Tank', tier: 'S', category: 'Armored' },
  'jeremy-landsknecht': { image: '/images/characters/landsknecht.png', name: 'Jeremy (Landsknecht)', role: 'Physical DPS', tier: 'S+', category: 'Infantry' },
  'ochlys-feathersword': { image: '/images/characters/feathersword.png', name: 'Ochlys (Feathersword)', role: 'Tank', tier: 'S+', category: 'Flying' },
  'umerus-feathersword': { image: '/images/characters/feathersword.png', name: 'Umerus (Feathersword)', role: 'Physical DPS', tier: 'S+', category: 'Flying' },
  'sanatio-featherstaff': { image: '/images/characters/bishop.png', name: 'Sanatio (Featherstaff)', role: 'Support', tier: 'S+', category: 'Flying' },
  'tatiana-bishop': { image: '/images/characters/cleric.png', name: 'Tatiana (Bishop)', role: 'Support', tier: 'S', category: 'Infantry' },
  'gloucester-doom-knight': { image: '/images/characters/doom-knight.png', name: 'Gloucester (Doom Knight)', role: 'Magic DPS', tier: 'S+', category: 'Cavalry' },
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
    if (FALLBACK_HERO_MAP[raw]?.image) return FALLBACK_HERO_MAP[raw].image;
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
  const aliased = (ALIAS_MAP[raw] || raw).toLowerCase();
  const heroSpecificImage = getHeroPortraitImage(raw, null, aliased);

  // 1. Direct ID match
  let found = CLASSES_DATA.find(
    (c) => c.id.toLowerCase() === aliased || c.id.toLowerCase() === raw
  );
  if (found) {
    return {
      ...found,
      image: heroSpecificImage || found.image || `/images/characters/${found.id}.png`,
    };
  }

  // 2. Character name / class name match
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

  // 3. Fallback to known hero directory
  const fallback = FALLBACK_HERO_MAP[aliased] || FALLBACK_HERO_MAP[raw];
  if (fallback) {
    return {
      id: aliased,
      name: fallback.name,
      image: heroSpecificImage || fallback.image,
      category: fallback.category as any,
      role: fallback.role as any,
      tier: fallback.tier as any,
      icon: '⚔️',
      baseStats: { hp: 100, physAtk: 80, magAtk: 50, physDef: 70, magDef: 60, initiative: 30, evasion: 30, critRate: 10 },
      activeSkills: [],
      passiveSkills: [],
      bestGrowthTypes: ['All-Rounder', 'Offensive'],
      synergiesWith: [],
      recommendedEquipment: [],
      overview: 'Promoted endgame meta hero.'
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
      uName.startsWith(firstWord) ||
      uName.includes(`(${target}`) ||
      uName.includes(` ${target}`) ||
      (firstWord.length > 2 && uName.toLowerCase().includes(firstWord))
    );
  });
  if (found) return found;

  // 4. ClassName or UnitName includes match
  found = squad.unitGearConfigs.find((g) => {
    const uName = g.unitName.toLowerCase();
    const gId = g.unitId.toLowerCase();
    return (
      uName.includes(target.replace(/-/g, ' ')) ||
      gId.includes(target) ||
      target.includes(gId)
    );
  });
  if (found) return found;

  return undefined;
}

/**
 * Converts a SquadBuild into SquadSlot array for the SquadBuilder
 */
export function convertBuildToSlots(squad: SquadBuild): SquadSlot[] {
  const getSlotConfig = (uId: string | null) => {
    if (!uId) return undefined;
    return getUnitGearConfig(squad, uId);
  };

  const createSlot = (
    slotId: 'front-0' | 'front-1' | 'back-0' | 'back-1' | 'back-2',
    row: 'front' | 'back',
    index: number,
    uId: string | null
  ): SquadSlot => {
    const config = getSlotConfig(uId);
    return {
      slotId,
      row,
      index,
      unitId: uId || null,
      growthTypes: config?.growthTypes,
      customItems: config
        ? [
            config.slot1Weapon?.bestInSlot || config.weapon || null,
            config.slot2ShieldOrOffhand?.bestInSlot || config.shieldOrHelm || null,
            config.slot3Accessory?.bestInSlot || config.accessory1 || null,
            config.slot4Accessory?.bestInSlot || config.accessory2 || null,
          ]
        : undefined,
    };
  };

  return [
    createSlot('front-0', 'front', 0, squad.frontRow?.[0] || null),
    createSlot('front-1', 'front', 1, squad.frontRow?.[1] || null),
    createSlot('back-0', 'back', 0, squad.backRow?.[0] || null),
    createSlot('back-1', 'back', 1, squad.backRow?.[1] || null),
    createSlot('back-2', 'back', 2, squad.backRow?.[2] || null),
  ];
}
