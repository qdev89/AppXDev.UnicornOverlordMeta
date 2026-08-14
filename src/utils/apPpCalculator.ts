import { RelicItem, UnitGearConfig, UnitClass } from '@/types';
import { ITEMS_DATA } from '@/data/items';

export interface UnitApPpBreakdown {
  baseAp: number;
  bonusAp: number;
  totalAp: number;
  basePp: number;
  bonusPp: number;
  totalPp: number;
  sources: {
    ap: { name: string; bonus: number }[];
    pp: { name: string; bonus: number }[];
  };
}

/**
 * Parses item name, notes, and ITEMS_DATA statBoosts to extract AP/PP bonuses
 */
export function extractItemApPp(itemNameOrId?: string | null, customNotes?: string): { ap: number; pp: number } {
  if (!itemNameOrId) return { ap: 0, pp: 0 };

  const clean = itemNameOrId.toLowerCase();
  let ap = 0;
  let pp = 0;

  // 1. Direct item lookup in ITEMS_DATA
  const foundItem = ITEMS_DATA.find((i) => {
    const iName = i.name.toLowerCase();
    const iId = i.id.toLowerCase();
    return iName === clean || iId === clean || iName.includes(clean) || clean.includes(iName);
  });

  const textToScan = `${itemNameOrId} ${customNotes || ''} ${foundItem?.statBoosts || ''}`.toLowerCase();

  // AP checks
  if (textToScan.includes('ap +2') || textToScan.includes('+2 ap') || textToScan.includes('ruby pendant')) {
    ap += 2;
  } else if (
    textToScan.includes('ap +1') ||
    textToScan.includes('+1 ap') ||
    textToScan.includes('carnelian pendant') ||
    textToScan.includes('carnelian spear') ||
    textToScan.includes('carnelian staff') ||
    textToScan.includes('carnelian greataxe') ||
    textToScan.includes('carnelian blade') ||
    textToScan.includes('holy unicorn blade') ||
    textToScan.includes('ring of the unicorn') ||
    textToScan.includes('ring of the maiden')
  ) {
    ap += 1;
  }

  // PP checks
  if (textToScan.includes('pp +2') || textToScan.includes('+2 pp') || textToScan.includes('sapphire pendant')) {
    pp += 2;
  } else if (
    textToScan.includes('pp +1') ||
    textToScan.includes('+1 pp') ||
    textToScan.includes('lapis pendant') ||
    textToScan.includes('cat-ear hood') ||
    textToScan.includes('white cat-ear hood') ||
    textToScan.includes('ring of the unicorn') ||
    textToScan.includes('ring of the maiden') ||
    textToScan.includes('rose shield') ||
    textToScan.includes('maiden\'s sword') ||
    textToScan.includes('dragonbone axe') ||
    textToScan.includes('scarlett\'s ribbon') ||
    textToScan.includes('elven crown') ||
    textToScan.includes('elven tiara')
  ) {
    pp += 1;
  }

  return { ap, pp };
}

/**
 * Calculates complete Base + Gear AP and PP for a unit
 */
export function calculateUnitApPp(
  unitClass?: UnitClass | { [key: string]: any } | null,
  gearConfig?: UnitGearConfig | null
): UnitApPpBreakdown {
  // Promoted units at endgame (Lv 30-50) have 2 Base AP and 2 Base PP
  // Unpromoted classes start with 1 Base AP and 1 Base PP
  const isPromoted = unitClass?.category === 'Promoted' || unitClass?.category === 'Unique' || true;
  const baseAp = isPromoted ? 2 : 1;
  const basePp = isPromoted ? 2 : 1;

  let bonusAp = 0;
  let bonusPp = 0;
  const apSources: { name: string; bonus: number }[] = [];
  const ppSources: { name: string; bonus: number }[] = [];

  const itemsToInspect = [
    { name: gearConfig?.slot1Weapon?.bestInSlot || gearConfig?.weapon, notes: gearConfig?.slot1Weapon?.notes },
    { name: gearConfig?.slot2ShieldOrOffhand?.bestInSlot || gearConfig?.shieldOrHelm, notes: gearConfig?.slot2ShieldOrOffhand?.notes },
    { name: gearConfig?.slot3Accessory?.bestInSlot || gearConfig?.accessory1, notes: gearConfig?.slot3Accessory?.notes },
    { name: gearConfig?.slot4Accessory?.bestInSlot || gearConfig?.accessory2, notes: gearConfig?.slot4Accessory?.notes },
  ];

  itemsToInspect.forEach((item) => {
    if (!item.name) return;
    const { ap, pp } = extractItemApPp(item.name, item.notes);
    if (ap > 0) {
      bonusAp += ap;
      apSources.push({ name: item.name, bonus: ap });
    }
    if (pp > 0) {
      bonusPp += pp;
      ppSources.push({ name: item.name, bonus: pp });
    }
  });

  const totalAp = Math.min(4, baseAp + bonusAp);
  const totalPp = Math.min(4, basePp + bonusPp);

  return {
    baseAp,
    bonusAp,
    totalAp,
    basePp,
    bonusPp,
    totalPp,
    sources: {
      ap: apSources,
      pp: ppSources,
    },
  };
}
