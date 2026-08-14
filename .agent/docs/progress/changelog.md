# Changelog - AppXDev.UnicornOverlordMeta

All notable changes to the Unicorn Overlord Meta Engine & Master Tactics Hub.

## [1.1.0] - 2026-08-15
### Added
- **4 to 6 Row In-Game Tactics Gambit System:** Upgraded `BuildDetailModal.tsx` and `ZeroOverlapTop10.tsx` with `generateComprehensiveTactics` providing every hero with 4-6 prioritized rules (AOE Row Nukes, Single-target Finishers/Sustain, Granted Item Skills, Start-of-Battle passives, Reaction guards/covers, and Synergy buffs).
- **Dynamic AP & PP Action Economy Engine:** Built `src/utils/apPpCalculator.ts` calculating promoted base stats (2 AP / 2 PP) + equipped item bonuses (Carnelian, Ruby, Lapis, Sapphire, Ring of the Unicorn, Cat-Ear Hood, etc.) capped at 4 AP / 4 PP.
- **Visual AP/PP Diamonds:** Red AP diamond badges and Blue PP diamond badges across hero cards, formation grids, gear matrix tables, and tactical inspection modals.
- **Tactics Preset View Mode:** Added full squad combat sequences for all 10 Zero-Overlap squads in `ZeroOverlapTop10.tsx`.

## [1.0.4] - 2026-08-14
### Added
- **Top 10 Zero-Overlap Endgame Squads Compendium:** 10 full 5-unit squads with 50 canonical unique heroes in their promoted classes (0 character duplicates, 0 key relic conflict).
- **4-Slot Equipment Matrix:** Weapon, Shield/Offhand, Accessory 1, Accessory 2 with Best-in-Slot (BIS) and Optimal Alternative (Opt) recommendations.
- **50-Hero Conflict Auditor:** Interactive directory verifying zero character overlap across all squads.

## [1.0.0] - 2026-08-13
### Added
- Initial release of Unicorn Overlord Meta Engine & Master Tactics Hub.
- 5v5 interactive squad builder with 2x3 formation grid and Base64 URL share codes.
- Class compendium with Lv. 1-50 stat progression slider and growth type simulator.
- Coliseum counter matrix and relic catalog.
- Divine Shard & Renown shop calculator.
