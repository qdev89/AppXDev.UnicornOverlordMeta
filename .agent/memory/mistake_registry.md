# Mistake Registry - AppXDev.UnicornOverlordMeta

| # | Mistake | Root Cause | Impact | Prevention / Fix |
|---|---|---|---|---|
| 1 | Single tactic row shown in modal | Filtering `squad.tacticsSequence` for units where squad overview only wrote 1 general step. | User saw only 1 tactic row instead of full in-game tactics setup. | Built `generateComprehensiveTactics(...)` combining class active/passive skills, item granted skills, and authentic conditions to guarantee 4–6 prioritized rules. |
| 2 | Active skill misclassified as passive | Substring matching on names matched "light" in `Holy Light` as passive. | Incorrect blue badge for an AP attack. | Check resource costs (`AP` vs `PP`) and `Start of Battle` triggers directly from condition definitions. |
| 3 | Duplicate React Keys in list renderings | Using raw `u.unitId` when squads share generic class identifiers. | React console key warning. | Always use `${u.unitId}-${uIdx}` for guaranteed uniqueness. |
| 4 | Chrome extension hydration mismatch | Chrome extensions modifying `<body>` before React hydration. | React console error. | Add `suppressHydrationWarning` to `<html>` and `<body>` in `layout.tsx`. |
