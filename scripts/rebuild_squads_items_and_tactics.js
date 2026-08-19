const fs = require('fs');
const path = require('path');

// 1. Load and fix zeroOverlapSquads.ts
const squadsFile = path.join(__dirname, '../src/data/zeroOverlapSquads.ts');
let squadsContent = fs.readFileSync(squadsFile, 'utf-8');

// Parse squads array
const cleanSquadsStr = squadsContent.substring(squadsContent.indexOf('['), squadsContent.lastIndexOf(']') + 1);
const squads = eval(cleanSquadsStr);

// Fix Travis in Squad 4
const squad4 = squads.find(s => s.id.includes('berengaria') || s.name.includes('Berengaria'));
if (squad4) {
  const travis = squad4.unitGearConfigs.find(u => u.characterName === 'Travis' || u.unitId.includes('travis'));
  if (travis) {
    travis.accessory1 = "Lucky Coin";
    travis.slot3Accessory = {
      bestInSlot: "Lucky Coin",
      optimalAlternatives: ["Silken Scarf", "Thief's Bell", "Skillful Amulet"],
      slotType: "Accessory",
      notes: "Evasion +20, Crit Rate +20% for frontline evasion tanking"
    };
    travis.slot2ShieldOrOffhand = {
      bestInSlot: "Thief's Mantle",
      optimalAlternatives: ["Silk Hood", "Leather Hood", "Silken Scarf"],
      slotType: "Helm",
      notes: "Evasion +20, Grants Evade (1 PP)"
    };
    travis.slot1Weapon.notes = "Phys Atk +18, Grants Pursuit (1 PP)";
    travis.slot4Accessory.notes = "Initiative +15 for Turn-1 Shadowbite row blind";
  }
}

// Fix Sanatio in Squad 10
const squad10 = squads.find(s => s.id.includes('sanatio') || s.name.includes('Sanatio'));
if (squad10) {
  const sanatio = squad10.unitGearConfigs.find(u => u.characterName === 'Sanatio' || u.unitId.includes('sanatio'));
  if (sanatio) {
    sanatio.accessory1 = "Celestial Talisman";
    sanatio.slot3Accessory = {
      bestInSlot: "Celestial Talisman",
      optimalAlternatives: ["Archbishop's Pendant", "Lapis Pendant", "Holy Broach"],
      slotType: "Accessory",
      notes: "Mag Def +5, Affliction Resistance +50%"
    };
  }
}

// Fix Virginia in Squad 5 keyItems
const squad5 = squads.find(s => s.id.includes('virginia') || s.name.includes('Virginia'));
if (squad5) {
  squad5.keyItems = [
    "Blue Rose Sword",
    "Blue Rose Shield",
    "Counter Belt",
    "Apeliotes's Bow"
  ];
}

// Format and write back zeroOverlapSquads.ts
const newSquadsExport = `import { SquadBuild } from '@/types';\n\nexport const ZERO_OVERLAP_SQUADS: SquadBuild[] = ${JSON.stringify(squads, null, 2)};\n`;
fs.writeFileSync(squadsFile, newSquadsExport, 'utf-8');
console.log('✅ Updated zeroOverlapSquads.ts with clean item assignments and notes.');
