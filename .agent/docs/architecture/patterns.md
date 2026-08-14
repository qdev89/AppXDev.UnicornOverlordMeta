# Established Code Patterns & Conventions

## 1. AP/PP Action Economy Calculation Pattern
```typescript
import { calculateUnitApPp } from '@/utils/apPpCalculator';

// Compute total AP and PP for any unit given class ID and equipped items
const apPp = calculateUnitApPp({
  classId: 'alain-high-lord',
  items: [
    gearConfig?.slot1Weapon?.bestInSlot,
    gearConfig?.slot2ShieldOrOffhand?.bestInSlot,
    gearConfig?.slot3Accessory?.bestInSlot,
    gearConfig?.slot4Accessory?.bestInSlot,
  ],
  customNotes: gearConfig?.notes,
});

// Render with diamond badge:
// <span className="ap-diamond" /> {apPp.totalAp} AP
// <span className="pp-diamond" /> {apPp.totalPp} PP
```

## 2. In-Game Tactics Rule Schema
Every tactics rule in Unicorn Overlord follows:
```typescript
interface TacticsStep {
  step: number;        // Priority 1 to 6
  unit: string;        // Unit name / class
  skill: string;       // Action or Passive Skill Name
  condition1: string;  // Target condition (e.g. "[Target: Full Row (2+ Enemies)]", "[Start of Battle]")
  condition2: string;  // Self/resource condition (e.g. "[Self AP >= 2]", "[Self PP >= 1]")
  notes: string;       // Combat rationale & potency description
}
```

## 3. 4-Slot Loadout Structure Pattern
```typescript
interface UnitGearConfig {
  unitId: string;
  unitName: string;
  characterName?: string;
  className?: string;
  roleTitle?: string;
  slot1Weapon: UnitSlotGear;
  slot2ShieldOrOffhand: UnitSlotGear;
  slot3Accessory: UnitSlotGear;
  slot4Accessory: UnitSlotGear;
}

interface UnitSlotGear {
  name: string;
  bestInSlot: string;
  optimalAlternative: string;
  note?: string;
}
```

## 4. Unique React Key Convention
When mapping through units or squad members where class IDs or unit names might appear multiple times:
```tsx
{squad.unitGearConfigs.map((u, uIdx) => (
  <div key={`${u.unitId}-${uIdx}`}>...</div>
))}
```

## 5. Hydration-Safe LocalStorage Pattern
Always access `localStorage` inside `useEffect` or state initializer guards to prevent SSR mismatch:
```tsx
const [data, setData] = useState<T | null>(null);

useEffect(() => {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) {
    try {
      setData(JSON.parse(saved));
    } catch (e) {
      console.error(e);
    }
  }
}, []);
```
