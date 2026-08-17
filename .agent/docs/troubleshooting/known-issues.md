# Known Issues & Gotchas

## 1. Missing Hero Portrait Frames & Raw Emoji Fallback
- **Symptom:** In `BuildDetailModal.tsx` and squad lists, character avatars fell back to raw emojis (`🐉`, `🦅`, `🛡️`, `⛪`, `👑`) instead of character portraits.
- **Root Cause:** 
  1. `CLASSES_DATA` items in `src/data/classes.ts` lacked `image` properties.
  2. Character names in squad loadouts were not mapped to the corresponding character PNG image assets in `public/images/characters/`.
  3. `onError` handlers on `<img>` tags hid broken images, leaving empty dark boxes.
- **Solution:** 
  1. Added `image` paths to all 36 classes in `src/data/classes.ts`.
  2. Created `HERO_IMAGE_MAP` and `getHeroPortraitImage()` in `src/utils/squadUtils.ts` to map all 50 unique heroes to authentic portraits.
  3. Built `<HeroFrame />` in `src/components/common/HeroFrame.tsx` with golden filigree frames, size presets, and resilient fallback handling.
  4. Unified all components (`BuildDetailModal`, `ZeroOverlapTop10`, `MetaCompositions`, `SquadBuilder`, `BattleSimulator`) to use `<HeroFrame />`.

## 2. Next.js Windows Build File Locking (`EPERM: operation not permitted`)
- **Symptom:** `npm run build` fails with `uncaughtException [Error: EPERM: operation not permitted, open '.next\trace']`.
- **Root Cause:** Next.js development server (`npm run dev`) holds an exclusive file lock on `.next/trace` on Windows operating systems.
- **Solution:** Cancel or kill the running dev server task (`manage_task` kill or `Ctrl+C`) before executing `npm run build`.

## 3. Shadowed `getUnitClass` Function in Components
- **Symptom:** Components using locally defined `getUnitClass` functions missed global portrait mappings or had outdated fallback dictionaries.
- **Root Cause:** Redundant local helpers shadowing the centralized `getUnitClass` in `src/utils/squadUtils.ts`.
- **Solution:** Removed local helper functions in `MetaCompositions.tsx` and `ZeroOverlapTop10.tsx` in favor of centralized `squadUtils.ts` imports.

## 4. In-Game Tactics Unit Scope Mismatch
- **Symptom:** When clicking on a unit in `BuildDetailModal.tsx`, the tactics table only showed 1 single tactic row or defaulted to the team's opening spell.
- **Root Cause:** Squad tactics sequences only recorded 1-2 high-level team combat steps.
- **Solution:** Implemented `generateComprehensiveTactics(...)` in `BuildDetailModal.tsx` to automatically generate 4 to 6 prioritized in-game rules (AOE Row Nukes, Single-target Finishers/Sustain, Item Granted Skills, Start-of-Battle passives, Reaction guards/covers, and Synergy buffs) for every hero.

## 5. Active vs Passive Skill Classification
- **Symptom:** Active skills containing words like "light" (e.g. `Holy Light`) were misclassified as passive blue banners.
- **Root Cause:** Overly broad substring matching on skill names.
- **Solution:** Classify skills based on `AP` vs `PP` resource costs and `Start of Battle` triggers directly from condition 1 & 2 definitions.

## 6. Duplicate React Keys in Map Loops
- **Symptom:** React warning in browser console about duplicate child keys when rendering lists of squad members.
- **Root Cause:** Multiple squad members sharing generic class IDs (e.g. 2x `great-knight` or 2x `sorceress`).
- **Solution:** Always suffix loop keys with the index: `key={`${u.unitId}-${uIdx}`}`.

## 7. Grammarly / Chrome Extension Hydration Mismatch
- **Symptom:** React hydration warnings on initial page load in developer console.
- **Root Cause:** Browser extensions injecting DOM attributes (`data-new-gr-c-s-check-loaded`) on `<body>` before React hydration finishes.
- **Solution:** Added `suppressHydrationWarning` on `<html>` and `<body>` in `src/app/layout.tsx`.
