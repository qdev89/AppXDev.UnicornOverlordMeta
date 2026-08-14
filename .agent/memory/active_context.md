# Active Context - AppXDev.UnicornOverlordMeta

## 🎯 Current Focus
- **100% Zero-Overlap Top 10 Squads, Action Economy & In-Game Tactics System**: Completed with 50 unique canonical heroes, 0 character overlap, 4-slot Best-in-Slot (BIS) + Optimal Alternatives (Opt) gear recommendations, dynamic AP/PP badges, and full 4–6 row prioritized in-game tactics programming tables.
- **Verification**: TypeScript check (`npx tsc --noEmit`) and live browser testing passed with 0 errors.

## 🔑 Key Recent Changes
- **Zero-Overlap Squad Roster Overhaul** (`zeroOverlapSquads.ts`): Rebuilt all 10 squads using 50 unique canonical story heroes across 10 distinct meta archetypes with zero duplication.
- **4-Slot BIS + Opt Item System** (`zeroOverlapSquads.ts`, `items.ts`, `BuildDetailModal.tsx`): Configured comprehensive loadout recommendations for Slot 1 (Weapon), Slot 2 (Shield/Offhand/Armor), Slot 3 (Accessory 1), and Slot 4 (Accessory 2) with Best-in-Slot badges, granted stats/skills, and optimal alternatives.
- **Dynamic AP & PP Action Economy Engine** (`apPpCalculator.ts`): Computes base promoted stats (2 AP / 2 PP) + equipped item bonuses (Carnelian, Ruby, Lapis, Sapphire, Ring of the Unicorn, Cat-Ear Hood, etc.) capped at 4 AP / 4 PP.
- **4 to 6 Row In-Game Tactics Programming Engine** (`BuildDetailModal.tsx`, `ZeroOverlapTop10.tsx`): Implemented `generateComprehensiveTactics(...)` and `getSquadTacticsSequence(...)` guaranteeing that every hero and squad has full prioritized in-game gambit rules with Active (Red) vs Passive (Blue) diamond badges, Condition 1, Condition 2, and interactive notes.
- **Promoted Class & Hero Canon Corrections** (`classes.ts`, `zeroOverlapSquads.ts`): Corrected names across the board (e.g. *Chloe: Sergeant*, *Scarlett: High Priestess*, *Auch: Sorcerer*, *Yahna: Sorceress*, *Hodrick & Bryce: Legionnaire*, *Miriam & Monica: Sainted Knight*, *Virginia: Valkyria*, *Raenys: Featherbow*, *Rosalinde: Elven Augur*, *Eltolinde: Elven Sibyl*, *Gloucester: Doom Knight*).
