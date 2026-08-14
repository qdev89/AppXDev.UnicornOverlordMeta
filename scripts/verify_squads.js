const fs = require('fs');

const tsFile = fs.readFileSync('src/data/zeroOverlapSquads.ts', 'utf8');
const jsonMatch = tsFile.match(/export const ZERO_OVERLAP_SQUADS: SquadBuild\[\] = (\[[\s\S]*?\]);\s*$/);
if (!jsonMatch) {
  console.error('Could not extract JSON from zeroOverlapSquads.ts');
  process.exit(1);
}

const squads = JSON.parse(jsonMatch[1]);
console.log(`=== ZERO OVERLAP AUDIT ===`);
console.log(`Squads count: ${squads.length}`);

const characterNames = [];
const unitIds = [];

squads.forEach((squad, sIdx) => {
  console.log(`Squad #${sIdx + 1}: ${squad.name} (${squad.archetype})`);
  squad.unitGearConfigs.forEach((u, uIdx) => {
    characterNames.push(u.characterName);
    unitIds.push(u.unitId);
    if (!u.slot1Weapon || !u.slot2ShieldOrOffhand || !u.slot3Accessory || !u.slot4Accessory) {
      console.error(`  ERROR: Unit ${u.unitName} missing 4-slot gear config!`);
    }
  });
});

console.log(`\nTotal Assigned Heroes: ${characterNames.length}`);
const uniqueNames = new Set(characterNames);
const uniqueIds = new Set(unitIds);

console.log(`Unique Character Names: ${uniqueNames.size} / 50`);
console.log(`Unique Unit IDs: ${uniqueIds.size} / 50`);

if (uniqueNames.size === 50 && uniqueIds.size === 50) {
  console.log(`\n✅ 100% PERFECT ZERO OVERLAP VERIFIED: All 50 Heroes are Unique!`);
} else {
  console.error(`\n❌ DUPLICATES DETECTED!`);
}
