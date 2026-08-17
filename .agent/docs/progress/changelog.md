# Changelog - AppXDev.UnicornOverlordMeta

All notable changes to the Unicorn Overlord Meta Engine & Master Tactics Hub.

## [1.2.0] - 2026-08-18
### Added
- **Universal Hero Frame Engine (`HeroFrame.tsx`):** Created a rich, reusable hero frame component with golden filigree ornate corners, glow variants (`gold`, `purple`, `cyan`, `silver`, `ruby`), size presets (`xs`, `sm`, `md`, `lg`, `xl`, `2xl`), AP/PP badges, and Tier badges.
- **Universal Hero Portrait Resolution (`squadUtils.ts`):** Added `HERO_IMAGE_MAP` and `getHeroPortraitImage()` resolving all 50 unique story heroes (*Alain, Berengaria, Hilda, Fran, Miriam, Primm, Gilbert, Yunifi, Virginia, Rosalinde, Eltolinde, Scarlett, Selvie, Raenys*, etc.) directly to their authentic high-res PNG portraits.
- **Complete Class Image Mapping (`classes.ts`):** Attached canonical image paths to all 36 classes in `CLASSES_DATA`.
- **UI-Wide HeroFrame Integration:** Upgraded `BuildDetailModal.tsx`, `ZeroOverlapTop10.tsx`, `MetaCompositions.tsx`, `SquadBuilder.tsx`, and `BattleSimulator.tsx` to use `<HeroFrame />`, eliminating fallback emojis and ensuring 100% visual consistency.
- **Authentic Game Compendium Overhaul:** Rebuilt `skills.ts`, `items.ts`, and `zeroOverlapSquads.ts` with authentic wiki data, AP/PP costs, trigger phases, and item stat boosts.

### Fixed
- **Missing Hero Portraits & Emoji Fallbacks:** Eliminated raw emoji icons (`🐉`, `🦅`, `🛡️`, `⛪`, `👑`) across squad views and modals, replacing them with ornate golden portrait frames.
- **Shadowed `getUnitClass` in `MetaCompositions.tsx`:** Removed shadowing local function in favor of centralized `squadUtils.getUnitClass`.
- **EPERM Trace File Lock on Windows:** Handled concurrent Next.js dev server file lock during builds.

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
