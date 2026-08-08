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
