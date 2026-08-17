# Architecture Overview - AppXDev.UnicornOverlordMeta

## 🏛️ Architecture & Component Design

```
src/
├── app/
│   ├── layout.tsx                # Root Layout (Cinzel/Inter fonts, suppressHydrationWarning)
│   ├── page.tsx                  # Main Tab Controller & Navigation Hub
│   └── globals.css               # Design System, Filigree borders, Custom Glows, AP/PP diamonds & Banners
├── components/
│   ├── Header.tsx                # Sticky Navigation Header & Active Tab Controls
│   ├── GlobalSearchModal.tsx     # Cmd+K / Global Search Across Units, Relics & Squads
│   ├── common/
│   │   └── HeroFrame.tsx         # Unified Ornate Hero Portrait Frame (Gold/Purple filigree, AP/PP, glow, tiers)
│   ├── tabs/
│   │   ├── ZeroOverlapTop10.tsx  # Top 10 Endgame 0-Overlap Squad Compendium (Cards, Tactics, Gear Matrix)
│   │   ├── MetaCompositions.tsx  # Full Meta Squad Index with Filter Chips
│   │   ├── ClassDatabase.tsx     # Hero Class Catalog + Lv. 1-50 Stat Growth Calculator
│   │   ├── RelicCatalog.tsx      # Equipment & Relics Catalog with Meta Core Filters
│   │   ├── SkillCompendium.tsx   # Active, Passive & Valor Skills Reference
│   │   ├── SquadBuilder.tsx      # 5v5 Squad Formation & Tactics Programming Editor
│   │   ├── CounterMatrix.tsx     # Coliseum Matchup Heatmap & Threat Counter Guides
│   │   └── DivineShardCalculator.tsx # Divine Shard & Renown Cost Calculator
│   └── builder/
│       ├── BuildDetailModal.tsx   # Detailed Unit Inspector & In-Game Tactics Gambit Table (4-6 rules)
│       ├── GrowthCalculator.tsx   # Stat Progression Formula & Dual Growth Type Simulator
│       ├── TacticsEditorModal.tsx # Priority & Condition Editor for Custom Tactics
│       ├── EquipmentModal.tsx     # Slot Item Selector & Stat Bonus Calculator
│       └── BattleSimulator.tsx    # Step-by-Step Turn Order & Combat Engine Simulator
├── data/
│   ├── classes.ts                 # 36 Promoted & Base Class Definitions (Stats, Skills, Gear, Image Assets)
│   ├── items.ts                   # Relics, Weapons, Shields & Accessories Data
│   ├── squads.ts                  # Community Meta Squads Definitions
│   ├── zeroOverlapSquads.ts       # 10 Zero-Overlap Squads (50 Promoted Heroes, 4-Slot BIS & Opt Gear)
│   ├── skills.ts                  # Skill Compendium Master List
│   └── counters.ts                # Coliseum Archetype Counter Strategies
├── types/
│   └── index.ts                   # Master TypeScript Interfaces & Types (UnitSlotGear, UnitGearConfig, etc.)
└── utils/
    ├── apPpCalculator.ts          # Action Economy (AP/PP) Calculation Engine
    ├── squadUtils.ts              # Hero Portrait Mapping (HERO_IMAGE_MAP), Class Resolver, Build Slot Converter
    └── exportUtils.ts             # JSON Export, Image Card Exporter & Share Hash Generator
```

## 💎 Core Architecture Systems

### 1. Hero Frame & Portrait Resolution Engine
- **Component:** [`src/components/common/HeroFrame.tsx`](file:///d:/Workspaces/Private/AppXDev.UnicornOverlordMeta/src/components/common/HeroFrame.tsx)
- **Utility:** [`src/utils/squadUtils.ts`](file:///d:/Workspaces/Private/AppXDev.UnicornOverlordMeta/src/utils/squadUtils.ts) (`HERO_IMAGE_MAP`, `getHeroPortraitImage()`)
- **Resolution Strategy:**
  1. Check `HERO_IMAGE_MAP` by character name or unitId.
  2. Check `CLASSES_DATA` by classId for canonical class artwork.
  3. Fallback to Unicode / SVG class icon if image asset is unavailable.
  4. Graceful fallback on `onError` event to prevent broken image UI.
- **Visual Variants:**
  - Presets: `xs` (24px), `sm` (32px), `md` (40px), `lg` (56px), `xl` (64px), `2xl` (80px).
  - Glow borders: `gold`, `purple`, `cyan`, `silver`, `ruby`.
  - Tier badges: `SS`, `S+`, `S`, `A`.

### 2. Zero-Overlap Roster & 4-Slot Gear Matrix
- **Data Model:** [`src/data/zeroOverlapSquads.ts`](file:///d:/Workspaces/Private/AppXDev.UnicornOverlordMeta/src/data/zeroOverlapSquads.ts) defines 10 squads with exactly 5 unique story characters per squad (50 canonical heroes total).
- **Promoted Class Hierarchy:** Every hero is represented in their promoted class (e.g. Alain High Lord, Virginia Valkyria, Berengaria Dark Marquess, Rosalinde Elven Augur, Eltolinde Elven Sibyl, Gilbert Prince, etc.).
- **4-Slot Equipment Schema:**
  - `slot1Weapon`: `{ name, bestInSlot, optimalAlternative, note }`
  - `slot2ShieldOrOffhand`: `{ name, bestInSlot, optimalAlternative, note }`
  - `slot3Accessory`: `{ name, bestInSlot, optimalAlternative, note }`
  - `slot4Accessory`: `{ name, bestInSlot, optimalAlternative, note }`

### 3. Action Economy (AP & PP) Calculation Engine
- Located in [`src/utils/apPpCalculator.ts`](file:///d:/Workspaces/Private/AppXDev.UnicornOverlordMeta/src/utils/apPpCalculator.ts).
- Computes baseline stats for promoted units (Base: 2 AP, 2 PP) and aggregates bonuses from equipped weapons, shields, and accessories.
- Applies game rules and caps (maximum 4 AP, 4 PP).
- Returns `{ totalAp, totalPp, baseAp, basePp, bonusAp, bonusPp, details }`.

### 4. In-Game Tactics Gambit System
- Located in [`src/components/builder/BuildDetailModal.tsx`](file:///d:/Workspaces/Private/AppXDev.UnicornOverlordMeta/src/components/builder/BuildDetailModal.tsx) and [`src/components/tabs/ZeroOverlapTop10.tsx`](file:///d:/Workspaces/Private/AppXDev.UnicornOverlordMeta/src/components/tabs/ZeroOverlapTop10.tsx).
- Generates 4 to 6 prioritized in-game rules per hero.
- Categorizes skills into Active (Red AP diamond) and Passive (Blue PP diamond).
- Provides explicit Condition 1 and Condition 2 targets (e.g. `[Target: Full Row (2+ Enemies)]`, `[Self AP >= 2]`, `[Ally HP <= 50%]`).

### 5. Battle Simulator Engine
- Located in [`src/components/builder/BattleSimulator.tsx`](file:///d:/Workspaces/Private/AppXDev.UnicornOverlordMeta/src/components/builder/BattleSimulator.tsx).
- Simulates complete combat encounters turn-by-turn with initiative ordering, Start-of-Battle resolution, and real-time AP/PP point deduction.

## 🔐 Reliability & Safety Patterns
1. **Hydration Protection:** `suppressHydrationWarning` on `layout.tsx`, `useEffect` wrapping for `localStorage` reads.
2. **Deterministic React Keys:** Uniquely formatted `${unitId}-${index}` keys in map loops to avoid collisions when squads use duplicate unit classes.
3. **Comprehensive Tactics Generator:** Ensures every hero in every squad has 4–6 full tactics rules even if squad-level overview only noted 1–2 main actions.
4. **Hero Frame Fallback Shield:** Ensures UI never breaks or renders empty placeholder boxes if image paths fail or characters have custom aliases.
