# Active Context - AppXDev.UnicornOverlordMeta

## 🎯 Current Focus
- **Hero Frame System & Full Asset Portrait Resolution**: Fully unified using the `<HeroFrame />` component, `HERO_IMAGE_MAP`, and `getHeroPortraitImage()` in `src/utils/squadUtils.ts`.
- **100% Zero-Overlap Top 10 Squads, Action Economy & In-Game Tactics System**: Completed with 50 unique canonical heroes, 0 character overlap, 4-slot Best-in-Slot (BIS) + Optimal Alternatives (Opt) gear recommendations, dynamic AP/PP badges, and full 4–6 row prioritized in-game tactics programming tables.
- **Verification**: Dev server running on port 3001, TypeScript check (`npx tsc --noEmit`) clean, Next.js build clean, live Playwright verification of Squad 3, Top 10 cards, and 5-Unit Builder all verified.

## 🔑 Key Recent Changes
- **Universal Hero Frame Component** (`src/components/common/HeroFrame.tsx`): Built ornate golden/purple filigree portrait frames with size presets, glow variants, AP/PP badges, and tier badges.
- **Canonical Hero Portrait Mapping** (`src/utils/squadUtils.ts`): Built `HERO_IMAGE_MAP` and `getHeroPortraitImage()` resolving all 50 unique heroes to high-res PNG portraits in `public/images/characters/`.
- **Class Data Image Additions** (`src/data/classes.ts`): Added `image` paths to all 36 classes in `CLASSES_DATA`.
- **UI-Wide HeroFrame Integration**: Replaced direct images and fallback emojis across `BuildDetailModal`, `ZeroOverlapTop10`, `MetaCompositions`, `SquadBuilder`, and `BattleSimulator`.
- **Zero-Overlap Squad Roster Overhaul** (`zeroOverlapSquads.ts`): Rebuilt all 10 squads using 50 unique canonical story heroes across 10 distinct meta archetypes with zero duplication.
- **4-Slot BIS + Opt Item System** (`zeroOverlapSquads.ts`, `items.ts`, `BuildDetailModal.tsx`): Configured comprehensive loadout recommendations for Slot 1 (Weapon), Slot 2 (Shield/Offhand/Armor), Slot 3 (Accessory 1), and Slot 4 (Accessory 2).
- **Dynamic AP & PP Action Economy Engine** (`apPpCalculator.ts`): Computes base promoted stats (2 AP / 2 PP) + equipped item bonuses capped at 4 AP / 4 PP.
- **4 to 6 Row In-Game Tactics Programming Engine** (`BuildDetailModal.tsx`, `ZeroOverlapTop10.tsx`): Implemented `generateComprehensiveTactics(...)` and `getSquadTacticsSequence(...)`.
