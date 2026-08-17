# Established Code Patterns & Conventions

## 1. Universal Hero Frame & Character Portrait Pattern
```tsx
import { HeroFrame } from '@/components/common/HeroFrame';
import { getUnitClass, getUnitGearConfig, getHeroPortraitImage } from '@/utils/squadUtils';

// 1. Resolve canonical hero portrait and class info
const unitClass = getUnitClass(unitId);
const heroImage = getHeroPortraitImage(unitId, gearConfig?.characterName, unitClass?.id) || unitClass?.image;
const displayName = gearConfig?.characterName || gearConfig?.unitName || unitClass?.name || unitId;

// 2. Render with HeroFrame:
<HeroFrame
  image={heroImage}
  name={displayName}
  icon={unitClass?.icon || '⚔️'}
  size="md"                    // 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
  frameVariant="gold"          // 'gold' | 'purple' | 'cyan' | 'silver' | 'ruby'
  showGlow={isSelected}
  tier={unitClass?.tier}       // 'SS' | 'S+' | 'S' | 'A'
  ap={calculatedAp}            // Optional AP overlay
  pp={calculatedPp}            // Optional PP overlay
/>
```

## 2. AP/PP Action Economy Calculation Pattern
```typescript
import { calculateUnitApPp } from '@/utils/apPpCalculator';

// Compute total AP and PP for any unit given unit class and gear config
const apPp = calculateUnitApPp(unitClass, unitGearConfig);

// Render with diamond badges:
<div className="flex items-center gap-1">
  <span className="px-1.5 py-0.5 rounded bg-red-950/80 border border-red-500/40 text-[10px] font-mono font-bold text-red-300">
    {apPp.totalAp} AP
  </span>
  <span className="px-1.5 py-0.5 rounded bg-blue-950/80 border border-blue-500/40 text-[10px] font-mono font-bold text-blue-300">
    {apPp.totalPp} PP
  </span>
</div>
```

## 3. In-Game Tactics Rule Schema
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

## 4. 4-Slot Loadout Structure Pattern
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

## 5. Unique React Key Convention
When mapping through units or squad members where class IDs or unit names might appear multiple times:
```tsx
{squad.unitGearConfigs.map((u, uIdx) => (
  <div key={`${u.unitId}-${uIdx}`}>...</div>
))}
```

## 6. Hydration-Safe LocalStorage Pattern
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
