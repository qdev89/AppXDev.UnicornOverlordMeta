# Architecture Overview - AppXDev.UnicornOverlordMeta

## 🏛️ Architecture & Component Design

```
src/
├── app/
│   ├── layout.tsx                # Root Layout (Cinzel/Inter fonts, suppressHydrationWarning)
│   ├── page.tsx                  # Main Tab Controller & Navigation Hub
│   └── globals.css               # Design System, Filigree borders, Custom Glows & Banners
├── components/
│   ├── Header.tsx                # Sticky Navigation Header & Active Tab Controls
│   ├── GlobalSearchModal.tsx     # Cmd+K / Global Search Across Units, Relics & Squads
│   ├── tabs/
│   │   ├── ZeroOverlapTop10.tsx  # Top 10 Endgame 0-Overlap Squad Compendium
│   │   ├── MetaCompositions.tsx  # Full Meta Squad Index with Filter Chips
│   │   ├── ClassDatabase.tsx     # Hero Class Catalog + Lv. 1-50 Stat Growth Calculator
│   │   ├── RelicCatalog.tsx      # Equipment & Relics Catalog with Meta Core Filters
│   │   ├── SkillCompendium.tsx   # Active, Passive & Valor Skills Reference
│   │   ├── SquadBuilder.tsx      # 5v5 Squad Formation & Tactics Programming Editor
│   │   ├── CounterMatrix.tsx     # Coliseum Matchup Heatmap & Threat Counter Guides
│   │   └── DivineShardCalculator.tsx # Divine Shard & Renown Cost Calculator
│   └── builder/
│       ├── BuildDetailModal.tsx   # Detailed Unit Inspector & In-Game Tactics Table
│       ├── GrowthCalculator.tsx   # Stat Progression Formula & Dual Growth Type Simulator
│       ├── TacticsEditorModal.tsx # Priority & Condition Editor for Custom Tactics
│       ├── EquipmentModal.tsx     # Slot Item Selector & Stat Bonus Calculator
│       └── BattleSimulator.tsx    # Step-by-Step Turn Order & Combat Engine Simulator
├── data/
│   ├── classes.ts                 # Full Class Definitions (Stats, Skills, Recommended Gear)
│   ├── items.ts                   # Relics, Weapons, Shields & Accessories Data
│   ├── squads.ts                  # Community Meta Squads Definitions
│   ├── zeroOverlapSquads.ts       # Verified 10 Top Zero-Overlap Squads
│   ├── skills.ts                  # Skill Compendium Master List
│   └── counters.ts                # Coliseum Archetype Counter Strategies
├── types/
│   └── index.ts                   # Master TypeScript Interfaces & Types
└── utils/
    └── exportUtils.ts             # JSON Export, Image Card Exporter & Share Hash Generator
```

## 🔐 Reliability & Safety Patterns
1. **Hydration Protection:** `suppressHydrationWarning` on `layout.tsx`, `useEffect` wrapping for `localStorage` reads.
2. **Deterministic React Keys:** Uniquely formatted `${unitId}-${index}` keys in map loops to avoid collisions when squads use duplicate unit classes.
3. **Fallback Tactics Generator:** Dynamic generation of hero-specific active/passive tactics rules when explicit steps aren't provided in the squad sequence.
