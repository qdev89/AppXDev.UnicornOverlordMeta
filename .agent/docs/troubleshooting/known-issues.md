# Known Issues & Gotchas

## 1. Next.js Windows Build File Locking (`EPERM: operation not permitted`)
- **Symptom:** `npm run build` fails with `uncaughtException [Error: EPERM: operation not permitted, open '.next\trace']`.
- **Root Cause:** Next.js development server (`npm run dev`) holds an exclusive file lock on `.next/trace` on Windows operating systems.
- **Solution:** Cancel or kill the running dev server task (`manage_task` kill or `Ctrl+C`) before executing `npm run build`.

## 2. In-Game Tactics Unit Scope Mismatch
- **Symptom:** When clicking on a unit in `BuildDetailModal.tsx`, the tactics table only showed 1 single tactic row or defaulted to the team's opening spell.
- **Root Cause:** Squad tactics sequences only recorded 1-2 high-level team combat steps.
- **Solution:** Implemented `generateComprehensiveTactics(...)` in `BuildDetailModal.tsx` to automatically generate 4 to 6 prioritized in-game rules (AOE Row Nukes, Single-target Finishers/Sustain, Item Granted Skills, Start-of-Battle passives, Reaction guards/covers, and Synergy buffs) for every hero.

## 3. Active vs Passive Skill Classification
- **Symptom:** Active skills containing words like "light" (e.g. `Holy Light`) were misclassified as passive blue banners.
- **Root Cause:** Overly broad substring matching on skill names.
- **Solution:** Classify skills based on `AP` vs `PP` resource costs and `Start of Battle` triggers directly from condition 1 & 2 definitions.

## 4. Duplicate React Keys in Map Loops
- **Symptom:** React warning in browser console about duplicate child keys when rendering lists of squad members.
- **Root Cause:** Multiple squad members sharing generic class IDs (e.g. 2x `great-knight` or 2x `sorceress`).
- **Solution:** Always suffix loop keys with the index: `key={`${u.unitId}-${uIdx}`}`.

## 5. Grammarly / Chrome Extension Hydration Mismatch
- **Symptom:** React hydration warnings on initial page load in developer console.
- **Root Cause:** Browser extensions injecting DOM attributes (`data-new-gr-c-s-check-loaded`) on `<body>` before React hydration finishes.
- **Solution:** Added `suppressHydrationWarning` on `<html>` and `<body>` in `src/app/layout.tsx`.
