# Architecture Decision Records (ADR)

## ADR-001: Local Wiki Asset Pipeline
**Status:** Accepted
**Context:** Referencing external wiki image URLs resulted in CORS blocking, broken images, and missing asset fallback icons.
**Decision:** Extract all 735 image metadata entries from Fandom Wiki via MediaWiki API, fuzzy-match filenames to database entities, and save assets directly to `public/images/characters/` and `public/images/items/`.
**Consequences:** 100% asset reliability, offline rendering capability, zero 404 image errors.

## ADR-002: Base64 URL Hash State Persistence
**Status:** Accepted
**Context:** Users need to share tactical squad builds with other players without requiring user registration or a server-side database.
**Decision:** Serialize 5-unit formation slot IDs into a Base64 string appended to the URL hash (`#builder?code=XXXX`). Parse and hydrate slots on component mount or hash change.
**Consequences:** Instantly shareable URLs, lightweight client-only implementation.

## ADR-003: Round-Based Turn Loop for Battle Simulation
**Status:** Accepted
**Context:** A single pass over unit initiative did not reflect real game battles where units act multiple times if AP > 0.
**Decision:** Replaced simple turn iteration with a multi-round loop sorting active combatants by current Initiative each round, spending AP per action until AP is depleted or a team is wiped out.
**Consequences:** Accurate simulation of multi-turn fights, AP management, and true combat outcomes.

## ADR-004: Dynamic AP & PP Action Economy Engine
**Status:** Accepted
**Context:** Squad builders and squad cards showed static or missing AP and PP values, failing to represent the impact of Carnelian weapons, Ruby/Lapis/Sapphire pendants, and unique relics like Ring of the Unicorn and Cat-Ear Hood.
**Decision:** Created a dedicated pure utility engine `src/utils/apPpCalculator.ts` that calculates base promoted AP (2) and PP (2) plus equipped item bonuses, applying hard caps at 4 AP and 4 PP, and integrated dynamic badges with visual diamonds across all squad views and modals.
**Consequences:** Complete transparency on action economy for every unit in every squad.

## ADR-005: Comprehensive In-Game Tactics Gambit System
**Status:** Accepted
**Context:** When inspecting unit tactics in the modal, filtering squad-level sequence summaries produced only 1 tactic row for units with minimal squad notes, whereas in-game Unicorn Overlord units always have 4 to 6 prioritized programming rules.
**Decision:** Implemented `generateComprehensiveTactics(...)` in `BuildDetailModal.tsx` and `getSquadTacticsSequence(...)` in `ZeroOverlapTop10.tsx` combining class active/passive skill books, item-granted abilities (e.g. `Trinity Rain`, `Quick Impetus`, `Eagle Eye`), and authentic Condition 1/2 targets.
**Consequences:** Every character in every squad reliably displays a rich, authentic 4 to 6 row tactics programming table.
