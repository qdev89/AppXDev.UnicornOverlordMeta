# Decision Log - AppXDev.UnicornOverlordMeta

| Date | Decision | Rationale | Impact |
|---|---|---|---|
| 2026-08-13 | Local Wiki Asset Pipeline | MediaWiki images were getting blocked by external CORS. | Extracted and saved all 735 images locally under `/public/images/`. |
| 2026-08-14 | Zero-Overlap 50-Hero Constraint | User requested 10 endgame squads with zero duplicate heroes. | Structured 10 squads using 50 unique canonical story heroes in their promoted classes. |
| 2026-08-14 | 4-Slot BIS & Opt Gear Matrix | Build recommendations needed comprehensive loadouts per unit. | Created 4-slot schema (Weapon, Shield/Helm, Accessory 1, Accessory 2) with Best-in-Slot and Optimal alternatives. |
| 2026-08-15 | Dynamic AP & PP Engine | Static AP/PP counts failed to reflect equipment bonuses. | Created `src/utils/apPpCalculator.ts` dynamically computing total AP/PP with hard caps at 4/4. |
| 2026-08-15 | Comprehensive 4-6 Row Tactics Gambit Engine | Modal was showing only 1 tactic row due to partial squad summary filters. | Implemented `generateComprehensiveTactics(...)` in `BuildDetailModal.tsx` and `getSquadTacticsSequence(...)` in `ZeroOverlapTop10.tsx`. |
