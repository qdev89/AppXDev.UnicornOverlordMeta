'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Zap,
  Shield,
  Sword,
  AlertTriangle,
  Plus,
  Trash2,
  Download,
  Upload,
  Share2,
  Check,
  RotateCcw,
  Sparkles,
  ChevronRight,
  Sliders,
  X,
  Bookmark,
  PlusCircle,
  Swords,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { CLASSES_DATA } from '@/data/classes';
import { ITEMS_DATA } from '@/data/items';
import { SQUADS_DATA } from '@/data/squads';
import { UnitClass, RelicItem, SquadSlot, SynergyAnalysis, SquadBuild, TacticsRule, UnitGearConfig } from '@/types';
import { TacticsEditorModal } from '@/components/builder/TacticsEditorModal';
import { EquipmentModal } from '@/components/builder/EquipmentModal';
import { BattleSimulator } from '@/components/builder/BattleSimulator';
import { calculateUnitApPp } from '@/utils/apPpCalculator';
import { getUnitClass, getUnitGearConfig, convertBuildToSlots, getHeroPortraitImage } from '@/utils/squadUtils';
import { HeroFrame } from '@/components/common/HeroFrame';

interface SquadBuilderProps {
  initialSquad?: SquadBuild | null;
}

export const SquadBuilder: React.FC<SquadBuilderProps> = ({ initialSquad }) => {
  // 5 slots state: front-0, front-1, back-0, back-1, back-2
  const [slots, setSlots] = useState<SquadSlot[]>(() => {
    if (initialSquad) {
      return convertBuildToSlots(initialSquad);
    }
    return [
      { slotId: 'front-0', row: 'front', index: 0, unitId: 'alain-high-lord', growthTypes: ['All-Rounder', 'Offensive'] },
      { slotId: 'front-1', row: 'front', index: 1, unitId: 'berengaria-renegade', growthTypes: ['Offensive', 'Keen'] },
      { slotId: 'back-0', row: 'back', index: 0, unitId: 'cleric', growthTypes: ['Guardian', 'All-Rounder'] },
      { slotId: 'back-1', row: 'back', index: 1, unitId: 'selvie-druid', growthTypes: ['Speedster', 'Guardian'] },
      { slotId: 'back-2', row: 'back', index: 2, unitId: 'gilbert-prince', growthTypes: ['Speedster', 'Guardian'] },
    ];
  });

  const [squadName, setSquadName] = useState<string>(initialSquad ? initialSquad.name : 'Custom Victory Squad');
  const [activeSlotModal, setActiveSlotModal] = useState<SquadSlot | null>(null);
  const [activeTacticsSlot, setActiveTacticsSlot] = useState<SquadSlot | null>(null);
  const [activeEquipmentSlot, setActiveEquipmentSlot] = useState<SquadSlot | null>(null);
  const [activeViewMode, setActiveViewMode] = useState<'grid' | 'simulator'>('grid');

  const handleSaveEquipment = (slotId: string, itemIds: (string | null)[]) => {
    setSlots((prev) =>
      prev.map((s) => (s.slotId === slotId ? { ...s, customItems: itemIds as any } : s))
    );
  };
  const [unitSearchQuery, setUnitSearchQuery] = useState<string>('');
  const [copiedShareLink, setCopiedShareLink] = useState<boolean>(false);
  const [savedSuccess, setSavedSuccess] = useState<boolean>(false);
  const [showImportModal, setShowImportModal] = useState<boolean>(false);
  const [importJsonText, setImportJsonText] = useState<string>('');
  const [importError, setImportError] = useState<string>('');

  // 1. Load Preset from initialSquad prop
  React.useEffect(() => {
    if (initialSquad) {
      const converted = convertBuildToSlots(initialSquad);
      setSlots(converted);
      setSquadName(initialSquad.name);
      try {
        localStorage.setItem(
          'unicorn_squad_builder_wip',
          JSON.stringify({
            squadName: initialSquad.name,
            slots: converted,
          })
        );
      } catch (e) {
        // ignore
      }
    }
  }, [initialSquad]);

  // 2. Load Shared Squad Code from URL Hash or Load WIP
  React.useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.includes('code=')) {
        const match = hash.match(/code=([^&]+)/);
        if (match && match[1]) {
          try {
            const decoded = atob(match[1]);
            const unitIds = decoded.split(',');
            if (unitIds.length === 5) {
              setSlots((prev) =>
                prev.map((s, idx) => ({
                  ...s,
                  unitId: unitIds[idx] === 'empty' ? null : unitIds[idx],
                }))
              );
            }
          } catch (e) {
            console.error('Failed to decode share code from hash', e);
          }
        }
      } else if (!initialSquad) {
        const savedWip = localStorage.getItem('unicorn_squad_builder_wip');
        if (savedWip) {
          try {
            const parsed = JSON.parse(savedWip);
            if (parsed.slots && Array.isArray(parsed.slots)) {
              setSlots(parsed.slots);
            }
            if (parsed.squadName) {
              setSquadName(parsed.squadName);
            }
          } catch (e) {
            console.error('Failed to load WIP squad from localStorage', e);
          }
        }
      }
    };

    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [initialSquad]);

  // 3. Auto-save current WIP to localStorage on slot or name change
  React.useEffect(() => {
    const isWipNotEmpty = slots.some((s) => s.unitId !== null);
    if (isWipNotEmpty) {
      const wipData = {
        squadName,
        slots,
      };
      localStorage.setItem('unicorn_squad_builder_wip', JSON.stringify(wipData));
    }
  }, [slots, squadName]);

  // Real-Time Synergy & Logic Analyzer Engine
  const synergy: SynergyAnalysis = useMemo(() => {
    let cavalryCount = 0;
    let flyingCount = 0;
    let armoredCount = 0;
    const startOfBattleUnits: { unitId: string; unitName: string; skillName: string; initiative: number }[] = [];
    const initiativeTimeline: { slotId: string; unitName: string; speed: number; position: string }[] = [];
    let guardScore = 0;

    slots.forEach((slot) => {
      const unit = getUnitClass(slot.unitId);
      if (unit) {
        if (unit.category === 'Cavalry') cavalryCount++;
        if (unit.category === 'Flying') flyingCount++;
        if (unit.category === 'Armored') armoredCount++;

        if (unit.role === 'Tank' || unit.category === 'Armored') guardScore += 35;
        if (unit.role === 'Support') guardScore += 20;

        // Check for Start of Battle passive skills
        unit.passiveSkills.forEach((ps) => {
          if (ps.isStartOfBattle || ps.trigger === 'Start of Battle') {
            startOfBattleUnits.push({
              unitId: unit.id,
              unitName: unit.name,
              skillName: ps.name,
              initiative: unit.baseStats.initiative,
            });
          }
        });

        // Add to timeline
        initiativeTimeline.push({
          slotId: slot.slotId,
          unitName: unit.name,
          speed: unit.baseStats.initiative,
          position: slot.row === 'front' ? `Front ${slot.index + 1}` : `Back ${slot.index + 1}`,
        });
      }
    });

    initiativeTimeline.sort((a, b) => b.speed - a.speed);
    startOfBattleUnits.sort((a, b) => b.initiative - a.initiative);

    const startOfBattleConflict = startOfBattleUnits.length > 1;
    const conflictWinner = startOfBattleUnits.length > 0 ? startOfBattleUnits[0].unitName : undefined;
    const cavalryCallBonus = Math.min(cavalryCount * 20, 60);

    let sustainRating: 'Low' | 'Moderate' | 'High' | 'Godly' = 'Low';
    if (guardScore >= 70) sustainRating = 'Godly';
    else if (guardScore >= 45) sustainRating = 'High';
    else if (guardScore >= 20) sustainRating = 'Moderate';

    let offenseRating: 'Low' | 'Moderate' | 'High' | 'S-Tier' = 'Low';
    const dpsCount = slots.filter((s) => {
      const u = getUnitClass(s.unitId);
      return u && (u.role === 'Physical DPS' || u.role === 'Magic DPS');
    }).length;
    if (dpsCount >= 3 || cavalryCallBonus >= 40) offenseRating = 'S-Tier';
    else if (dpsCount === 2) offenseRating = 'High';
    else if (dpsCount === 1) offenseRating = 'Moderate';

    return {
      cavalryCount,
      flyingCount,
      armoredCount,
      cavalryCallBonus,
      flyingSquadBonus: flyingCount > 0,
      startOfBattleUnits,
      startOfBattleConflict,
      conflictWinner,
      initiativeTimeline,
      guardCoverage: Math.min(guardScore, 100),
      sustainRating,
      offenseRating,
    };
  }, [slots]);

  // Slot handlers
  const handleSelectUnitForSlot = (slotId: string, unitId: string | null) => {
    setSlots((prev) =>
      prev.map((s) => (s.slotId === slotId ? { ...s, unitId, customTactics: undefined } : s))
    );
    setActiveSlotModal(null);
  };

  const handleClearSlot = (slotId: string) => {
    setSlots((prev) =>
      prev.map((s) => (s.slotId === slotId ? { ...s, unitId: null, customTactics: undefined } : s))
    );
  };

  const handleSaveCustomTactics = (slotId: string, tactics: TacticsRule[]) => {
    setSlots((prev) =>
      prev.map((s) => (s.slotId === slotId ? { ...s, customTactics: tactics } : s))
    );
  };

  const handlePresetLoad = (squad: SquadBuild) => {
    setSquadName(squad.name);
    setSlots(convertBuildToSlots(squad));
  };

  // Export JSON
  const handleExportJson = () => {
    const data = {
      squadName,
      exportedAt: new Date().toISOString(),
      slots: slots.map((s) => ({
        slotId: s.slotId,
        unit: getUnitClass(s.unitId)?.name || 'Empty',
        unitId: s.unitId,
        tacticsRules: s.customTactics || [],
      })),
      synergySummary: {
        cavalryBonus: synergy.cavalryCallBonus,
        startOfBattleWinner: synergy.conflictWinner,
        initiativeOrder: synergy.initiativeTimeline.map((i) => `${i.unitName} (SPD ${i.speed})`),
      },
    };
    const jsonStr = JSON.stringify(data, null, 2);
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${squadName.toLowerCase().replace(/\s+/g, '-')}-squad.json`;
    a.click();
    URL.revokeObjectURL(url);

    try {
      confetti({ particleCount: 50, spread: 60, origin: { y: 0.7 } });
    } catch (e) {
      // ignore
    }
  };

  // Save as Custom Build Guide to LocalStorage
  const handleSaveAsCustomBuildGuide = () => {
    try {
      const frontRowIds = slots.filter((s) => s.row === 'front').map((s) => s.unitId);
      const backRowIds = slots.filter((s) => s.row === 'back').map((s) => s.unitId);

      const keyItems: string[] = [];
      slots.forEach((s) => {
        if (s.customItems) {
          s.customItems.forEach((it) => {
            if (it && !keyItems.includes(it)) keyItems.push(it);
          });
        }
      });
      if (keyItems.length === 0) keyItems.push('Custom Gear Loadout');

      const newBuild: SquadBuild = {
        id: `custom-build-${Date.now()}`,
        name: squadName || 'Custom Tactical Squad',
        archetype: 'Instant Board Wipe',
        tier: 'S',
        description: `User-created 5-unit custom formation with custom tactics programming.`,
        keyItems,
        frontRow: frontRowIds,
        backRow: backRowIds,
        tacticsSequence: synergy.initiativeTimeline.map((item, idx) => ({
          step: idx + 1,
          unit: item.unitName,
          skill: 'Primary Active Skill',
          condition1: '[Target: Highest Priority]',
          condition2: '[AP >= 1]',
          notes: `Position: ${item.position}, SPD ${item.speed}`,
        })),
        pros: ['Customized tactical formation', 'Flexible skill rule priority'],
        cons: ['Requires manual testing in Coliseum'],
        counters: ['Check Coliseum Counter Matrix for specific unit counters'],
        isCustom: true,
      };

      const existingStored = localStorage.getItem('unicorn_saved_builds');
      const existingList: SquadBuild[] = existingStored ? JSON.parse(existingStored) : [];
      const updatedList = [newBuild, ...existingList];
      localStorage.setItem('unicorn_saved_builds', JSON.stringify(updatedList));

      setSavedSuccess(true);
      setTimeout(() => setSavedSuccess(false), 3000);
      try {
        confetti({ particleCount: 60, spread: 70, origin: { y: 0.7 } });
      } catch (e) {
        // ignore
      }
    } catch (err) {
      console.error('Failed to save build guide to localStorage', err);
    }
  };

  // Copy Shareable Link / Code
  const handleCopyShareLink = () => {
    const unitIds = slots.map((s) => s.unitId || 'empty').join(',');
    const encoded = btoa(unitIds);
    const shareUrl = `${window.location.origin}${window.location.pathname}#builder?code=${encoded}`;
    navigator.clipboard.writeText(shareUrl);
    setCopiedShareLink(true);
    setTimeout(() => setCopiedShareLink(false), 3000);
  };

  // Import JSON handler
  const handleImportJson = () => {
    try {
      setImportError('');
      const parsed = JSON.parse(importJsonText);
      if (parsed.slots && Array.isArray(parsed.slots)) {
        const newSlots: SquadSlot[] = slots.map((s) => {
          const match = parsed.slots.find((p: any) => p.slotId === s.slotId);
          return match
            ? { ...s, unitId: match.unitId || null, customTactics: match.tacticsRules }
            : s;
        });
        setSlots(newSlots);
        if (parsed.squadName) setSquadName(parsed.squadName);
        setShowImportModal(false);
        setImportJsonText('');
      } else {
        setImportError('Invalid JSON structure: missing slots array');
      }
    } catch (err) {
      setImportError('Invalid JSON syntax. Please paste a valid squad JSON.');
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="relative rounded-2xl bg-gradient-to-r from-slate-950 via-slate-900 to-[#121826] p-6 sm:p-8 border border-amber-500/30 overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl -z-10 pointer-events-none" />
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Zap className="w-6 h-6 text-amber-400" />
              <input
                type="text"
                value={squadName}
                onChange={(e) => setSquadName(e.target.value)}
                className="font-serif text-2xl sm:text-3xl font-bold bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 bg-clip-text text-transparent bg-transparent border-b border-transparent hover:border-amber-500/40 focus:border-amber-400 focus:outline-none px-1"
              />
            </div>
            <p className="text-sm text-slate-300 max-w-2xl font-sans">
              Interactive 5-Unit tactics sandbox. Click any slot to assign classes, edit custom dual-condition tactics rules, and step through simulated battle rounds in real-time.
            </p>
          </div>

          {/* Action Toolbar */}
          <div className="flex flex-wrap items-center gap-2">
            <div className="flex items-center p-1 rounded-lg bg-slate-950 border border-slate-800 mr-2">
              <button
                onClick={() => setActiveViewMode('grid')}
                className={`px-3 py-1 rounded text-xs font-bold transition ${
                  activeViewMode === 'grid'
                    ? 'bg-amber-500 text-slate-950 shadow'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                2x3 Formation Grid
              </button>
              <button
                onClick={() => setActiveViewMode('simulator')}
                className={`px-3 py-1 rounded text-xs font-bold transition flex items-center gap-1.5 ${
                  activeViewMode === 'simulator'
                    ? 'bg-amber-500 text-slate-950 shadow'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Swords className="w-3.5 h-3.5" />
                <span>Battle Simulator</span>
              </button>
            </div>

            <button
              onClick={handleSaveAsCustomBuildGuide}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/20 border border-emerald-500/50 text-emerald-300 hover:bg-emerald-500/30 text-xs font-bold transition shadow"
            >
              {savedSuccess ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400 font-bold">Saved Guide!</span>
                </>
              ) : (
                <>
                  <Bookmark className="w-3.5 h-3.5" />
                  <span>Save to Build Guides</span>
                </>
              )}
            </button>

            <button
              onClick={handleExportJson}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-300 hover:bg-amber-500/20 text-xs font-semibold transition"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Export JSON</span>
            </button>

            <button
              onClick={handleCopyShareLink}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-purple-500/10 border border-purple-500/30 text-purple-300 hover:bg-purple-500/20 text-xs font-semibold transition"
            >
              {copiedShareLink ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Copied!</span>
                </>
              ) : (
                <>
                  <Share2 className="w-3.5 h-3.5" />
                  <span>Share Build</span>
                </>
              )}
            </button>

            <button
              onClick={() => setShowImportModal(true)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-slate-300 hover:text-white text-xs font-semibold transition"
            >
              <Upload className="w-3.5 h-3.5" />
              <span>Import</span>
            </button>
          </div>
        </div>

        {/* Preset Loaders Bar */}
        <div className="mt-6 pt-4 border-t border-slate-800 flex items-center gap-2 overflow-x-auto no-scrollbar">
          <span className="text-xs font-semibold text-slate-400 shrink-0">Quick Presets:</span>
          {SQUADS_DATA.map((sq) => (
            <button
              key={sq.id}
              onClick={() => handlePresetLoad(sq)}
              className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 hover:border-amber-500/40 text-slate-300 hover:text-amber-200 text-xs font-medium whitespace-nowrap transition"
            >
              ⚡ {sq.name}
            </button>
          ))}
        </div>
      </div>

      {/* Real-time Start of Battle Conflict Warning Banner */}
      {synergy.startOfBattleConflict && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-4 rounded-xl bg-amber-950/60 border-2 border-amber-500/60 text-amber-200 shadow-xl flex items-start gap-3"
        >
          <AlertTriangle className="w-6 h-6 text-amber-400 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <h4 className="font-bold text-sm text-amber-300">
              ⚠️ Start-of-Battle Passive Conflict Detected!
            </h4>
            <p className="text-xs text-amber-100/90 leading-relaxed">
              Unicorn Overlord mechanics dictate that only <strong>ONE</strong> Start-of-Battle skill triggers per battle! Currently, <strong>{synergy.startOfBattleUnits.length} units</strong> have Start-of-Battle passives in this squad:
            </p>
            <div className="flex flex-wrap gap-2 pt-1">
              {synergy.startOfBattleUnits.map((u, i) => (
                <span
                  key={i}
                  className={`text-xs px-2 py-0.5 rounded font-semibold border ${
                    i === 0
                      ? 'bg-emerald-950 text-emerald-300 border-emerald-500/50 font-bold'
                      : 'bg-red-950 text-red-300 border-red-500/40 line-through opacity-75'
                  }`}
                >
                  {u.unitName} ({u.skillName}) — SPD {u.initiative} {i === 0 ? '👑 WILL TRIGGER' : '⛔ SUPPRESSED'}
                </span>
              ))}
            </div>
            <p className="text-[11px] text-amber-400 pt-1">
              💡 <em>Winner: <strong>{synergy.conflictWinner}</strong> has the highest initiative speed ({synergy.startOfBattleUnits[0]?.initiative}) and will trigger their passive first!</em>
            </p>
          </div>
        </motion.div>
      )}

      {/* Mode View: Simulator vs Grid */}
      {activeViewMode === 'simulator' ? (
        <BattleSimulator slots={slots} />
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left 7 Columns: Interactive 2x3 Formation Grid */}
          <div className="lg:col-span-7 space-y-4">
            <div className="p-5 rounded-2xl bg-slate-900/80 border border-amber-500/20 shadow-xl space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <h3 className="font-serif text-base font-bold text-amber-200 flex items-center gap-2">
                  <Shield className="w-4 h-4 text-amber-400" />
                  <span>2x3 Battle Formation Grid</span>
                </h3>
                <span className="text-xs text-slate-400">Click unit slot to change class or edit tactics</span>
              </div>

              {/* Grid Container */}
              <div className="stage-pedestal grid grid-cols-1 md:grid-cols-2 gap-5 p-5 rounded-2xl border-2 border-amber-500/40 shadow-2xl filigree-box">
                {/* Front Row (2 Slots) */}
                <div className="space-y-3">
                  <div className="vanguard-banner py-1.5 px-3 rounded-t-lg text-xs font-serif font-bold text-center tracking-widest shadow-md">
                    🛡️ VANGUARD ROW (FRONT TANK)
                  </div>
                  <div className="space-y-3">
                    {slots
                      .filter((s) => s.row === 'front')
                      .map((slot) => {
                        const unit = getUnitClass(slot.unitId);
                        const slotGear: UnitGearConfig | undefined = slot.customItems ? {
                          unitId: slot.unitId || '',
                          unitName: unit?.name || '',
                          weapon: slot.customItems[0] || undefined,
                          shieldOrHelm: slot.customItems[1] || undefined,
                          accessory1: slot.customItems[2] || undefined,
                          accessory2: slot.customItems[3] || undefined,
                        } : undefined;
                        const slotApPp = calculateUnitApPp(unit, slotGear);
                        return (
                          <div
                            key={slot.slotId}
                            onClick={() => setActiveSlotModal(slot)}
                            className={`relative p-4 rounded-xl border-2 transition-all cursor-pointer group flex flex-col justify-between min-h-[160px] ${
                              unit
                                ? 'bg-slate-950/90 border-amber-500/60 hover:border-amber-300 shadow-xl hover:shadow-[0_0_20px_rgba(245,158,11,0.3)]'
                                : 'bg-[#0a0f1d]/60 border-amber-500/20 border-dashed hover:border-amber-400'
                            }`}
                          >
                            {unit ? (
                              <>
                                <div className="flex items-start justify-between">
                                  <div className="flex items-center gap-3">
                                    <HeroFrame
                                      image={unit.image || getHeroPortraitImage(slot.unitId)}
                                      name={unit.name}
                                      icon={unit.icon}
                                      size="lg"
                                      frameVariant="gold"
                                    />
                                    <div>
                                      <h4 className="font-serif font-bold text-base text-amber-100 group-hover:text-amber-300 drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                                        {unit.name}
                                      </h4>
                                      <div className="flex items-center gap-1.5 mt-0.5">
                                        <span className="text-[10px] font-semibold text-amber-300/80 font-serif">{unit.category}</span>
                                        <span className="text-[9px] text-slate-500">•</span>
                                        <span className="text-[10px] font-semibold text-purple-300/80 font-serif">{unit.role}</span>
                                      </div>
                                    </div>
                                  </div>
                                  <button
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      handleClearSlot(slot.slotId);
                                    }}
                                    className="p-1.5 rounded-lg bg-slate-950/80 border border-slate-800 text-slate-400 hover:text-red-400 hover:border-red-500/40 transition"
                                  >
                                    <Trash2 className="w-4 h-4" />
                                  </button>
                                </div>

                                <div className="flex items-center justify-between border-t border-amber-500/20 pt-3 gap-2 mt-2">
                                  <div className="flex items-center gap-1.5">
                                    <button
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        setActiveTacticsSlot(slot);
                                      }}
                                      className="px-2.5 py-1 rounded-lg bg-amber-500/20 border border-amber-400/50 text-amber-300 hover:bg-amber-400 hover:text-slate-950 text-[10px] font-serif font-bold flex items-center gap-1 shadow transition"
                                    >
                                      <Sliders className="w-3 h-3" />
                                      <span>Tactics</span>
                                    </button>
                                    <button
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        setActiveEquipmentSlot(slot);
                                      }}
                                      className="px-2.5 py-1 rounded-lg bg-purple-500/20 border border-purple-400/50 text-purple-200 hover:bg-purple-400 hover:text-slate-950 text-[10px] font-serif font-bold flex items-center gap-1 shadow transition"
                                    >
                                      <Shield className="w-3 h-3" />
                                      <span>Items</span>
                                    </button>
                                  </div>

                                  <div className="flex items-center gap-1.5">
                                    <span className="ap-gem text-xs px-2 py-0.5 rounded font-serif">{slotApPp.totalAp} AP</span>
                                    <span className="pp-gem text-xs px-2 py-0.5 rounded font-serif">{slotApPp.totalPp} PP</span>
                                  </div>
                                </div>
                              </>
                            ) : (
                              <div className="flex flex-col items-center justify-center h-full text-slate-500 py-4">
                                <PlusCircle className="w-8 h-8 text-amber-500/40 mb-2 group-hover:scale-110 transition-transform" />
                                <span className="text-xs font-serif font-bold text-amber-200/80 uppercase tracking-wider">Assign Frontliner</span>
                                <span className="text-[10px] text-slate-400 font-sans">Front Slot #{slot.index + 1}</span>
                              </div>
                            )}
                          </div>
                        );
                      })}
                  </div>
                </div>

                {/* Back Row (3 Slots) */}
                <div className="space-y-3">
                  <div className="rearguard-banner py-1.5 px-3 rounded-t-lg text-xs font-serif font-bold text-center tracking-widest shadow-md">
                    ⚔️ REARGUARD ROW (BACK DPS / SUPPORT)
                  </div>
                  <div className="space-y-2.5">
                    {slots
                      .filter((s) => s.row === 'back')
                      .map((slot) => {
                        const unit = getUnitClass(slot.unitId);
                        const slotGear: UnitGearConfig | undefined = slot.customItems ? {
                          unitId: slot.unitId || '',
                          unitName: unit?.name || '',
                          weapon: slot.customItems[0] || undefined,
                          shieldOrHelm: slot.customItems[1] || undefined,
                          accessory1: slot.customItems[2] || undefined,
                          accessory2: slot.customItems[3] || undefined,
                        } : undefined;
                        const slotApPp = calculateUnitApPp(unit, slotGear);
                        return (
                          <div
                            key={slot.slotId}
                            onClick={() => setActiveSlotModal(slot)}
                            className={`relative p-3.5 rounded-xl border-2 transition-all cursor-pointer group flex flex-col justify-between min-h-[105px] ${
                              unit
                                ? 'game-card hover:border-purple-400 shadow-lg hover:shadow-[0_0_15px_rgba(168,85,247,0.3)]'
                                : 'bg-[#0a0f1d]/60 border-purple-500/20 border-dashed hover:border-purple-400 py-3'
                            }`}
                          >
                            {unit ? (
                              <>
                                <div className="flex items-center justify-between">
                                  <div className="flex items-center gap-3">
                                    <HeroFrame
                                      image={unit.image || getHeroPortraitImage(slot.unitId)}
                                      name={unit.name}
                                      icon={unit.icon}
                                      size="md"
                                      frameVariant="purple"
                                    />
                                    <div>
                                      <h4 className="font-serif font-bold text-sm text-purple-100 group-hover:text-purple-300">
                                        {unit.name}
                                      </h4>
                                      <span className="text-[10px] text-slate-400 font-serif">{unit.role}</span>
                                    </div>
                                  </div>
                                  <div className="flex items-center gap-1.5">
                                    <span className="ap-gem text-[9px] px-1.5 py-0.2 rounded font-serif">{slotApPp.totalAp} AP</span>
                                    <span className="pp-gem text-[9px] px-1.5 py-0.2 rounded font-serif">{slotApPp.totalPp} PP</span>
                                    <button
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        handleClearSlot(slot.slotId);
                                      }}
                                      className="p-1 rounded bg-slate-950/80 border border-slate-800 text-slate-500 hover:text-red-400 transition"
                                    >
                                      <Trash2 className="w-3.5 h-3.5" />
                                    </button>
                                  </div>
                                </div>

                                <div className="flex items-center justify-between border-t border-purple-500/20 pt-2 gap-1 mt-2">
                                  <div className="flex items-center gap-1">
                                    <button
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        setActiveTacticsSlot(slot);
                                      }}
                                      className="px-2 py-0.5 rounded bg-amber-500/20 border border-amber-400/40 text-amber-300 hover:bg-amber-400 hover:text-slate-950 text-[10px] font-serif font-bold flex items-center gap-1"
                                    >
                                      <Sliders className="w-2.5 h-2.5" />
                                      <span>Tactics</span>
                                    </button>
                                    <button
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        setActiveEquipmentSlot(slot);
                                      }}
                                      className="px-2 py-0.5 rounded bg-purple-500/20 border border-purple-400/40 text-purple-200 hover:bg-purple-400 hover:text-slate-950 text-[10px] font-serif font-bold flex items-center gap-1"
                                    >
                                      <Shield className="w-2.5 h-2.5" />
                                      <span>Items</span>
                                    </button>
                                  </div>
                                  <span className="text-[10px] font-mono text-cyan-300 font-bold">SPD {unit.baseStats.initiative}</span>
                                </div>
                              </>
                            ) : (
                              <div className="flex items-center justify-center gap-2 h-full text-slate-500 py-1">
                                <PlusCircle className="w-4 h-4 text-purple-400/60" />
                                <span className="text-xs font-serif font-bold text-purple-200/70">Back Slot #{slot.index + 1}</span>
                              </div>
                            )}
                          </div>
                        );
                      })}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right 5 Columns: Real-Time Synergy & Turn Timeline */}
          <div className="lg:col-span-5 space-y-4">
            {/* Initiative Turn Sequence Timeline */}
            <div className="p-5 rounded-2xl bg-slate-900/80 border border-amber-500/20 shadow-xl space-y-3">
              <h3 className="font-serif text-sm font-bold text-amber-300 uppercase tracking-wider flex items-center gap-2 border-b border-slate-800 pb-2">
                <Zap className="w-4 h-4 text-amber-400" />
                <span>Initiative Turn Sequence Timeline</span>
              </h3>

              <div className="space-y-2">
                {synergy.initiativeTimeline.map((item, idx) => {
                  const itemClass = getUnitClass(item.slotId) || getUnitClass(item.unitName);
                  return (
                    <div
                      key={idx}
                      className="flex items-center justify-between p-2.5 rounded-lg bg-slate-950 border border-slate-800 text-xs"
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-300 font-bold text-[10px] flex items-center justify-center border border-amber-500/30">
                          {idx + 1}
                        </span>
                        <HeroFrame
                          image={itemClass?.image || getHeroPortraitImage(item.unitName)}
                          name={item.unitName}
                          icon={itemClass?.icon}
                          size="xs"
                        />
                        <span className="font-serif font-bold text-slate-200">{item.unitName}</span>
                        <span className="text-[10px] text-slate-400 font-serif">({item.position})</span>
                      </div>
                      <span className="font-mono text-cyan-300 font-bold">SPD {item.speed}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Battle Synergy Analyzer */}
            <div className="p-5 rounded-2xl bg-slate-900/80 border border-amber-500/20 shadow-xl space-y-3">
              <h3 className="font-serif text-sm font-bold text-amber-300 uppercase tracking-wider flex items-center gap-2 border-b border-slate-800 pb-2">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>Squad Composition Synergy Engine</span>
              </h3>

              <div className="space-y-2 text-xs">
                {/* Cavalry Call Bonus */}
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
                  <div className="flex items-center justify-between font-semibold">
                    <span className="text-amber-200">🐴 Cavalry Count ({synergy.cavalryCount}):</span>
                    <span className={synergy.cavalryCount >= 2 ? 'text-emerald-400 font-bold' : 'text-slate-500'}>
                      {synergy.cavalryCount >= 2 ? `+${synergy.cavalryCallBonus}% Phys Atk Bonus` : 'Requires 2+ Cavalry'}
                    </span>
                  </div>
                </div>

                {/* Flying Squad Evasion Bonus */}
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
                  <div className="flex items-center justify-between font-semibold">
                    <span className="text-purple-200">🪶 Flying Squad Mobility:</span>
                    <span className={synergy.flyingSquadBonus ? 'text-emerald-400 font-bold' : 'text-slate-500'}>
                      {synergy.flyingSquadBonus ? 'Active (+25% Evasion)' : 'None'}
                    </span>
                  </div>
                </div>

                {/* Guard Coverage & Sustain Rating */}
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-300 font-semibold">Guard & Sustain Rating:</span>
                    <span className="font-bold text-amber-300">{synergy.sustainRating}</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-slate-900 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-amber-500 to-emerald-400 rounded-full transition-all duration-500"
                      style={{ width: `${synergy.guardCoverage}%` }}
                    />
                  </div>
                </div>

                {/* Offense Power Rating */}
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between">
                  <span className="text-slate-300 font-semibold">Offensive Potency:</span>
                  <span className="font-bold text-purple-400">{synergy.offenseRating}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tactics Editor Modal */}
      {activeTacticsSlot && (
        <TacticsEditorModal
          slot={activeTacticsSlot}
          isOpen={!!activeTacticsSlot}
          onClose={() => setActiveTacticsSlot(null)}
          onSaveTactics={handleSaveCustomTactics}
        />
      )}

      {/* Slot Unit Selection Modal */}
      <AnimatePresence>
        {activeSlotModal && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md"
            onClick={() => setActiveSlotModal(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto bg-[#0e1422] border border-amber-500/40 rounded-2xl shadow-2xl p-6 space-y-4 no-scrollbar"
            >
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <h3 className="font-serif text-lg font-bold text-amber-200">
                  Select Unit for {activeSlotModal.row.toUpperCase()} Row (Slot {activeSlotModal.index + 1})
                </h3>
                <button
                  onClick={() => setActiveSlotModal(null)}
                  className="p-1 text-slate-400 hover:text-white rounded-md hover:bg-slate-800"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <input
                type="text"
                placeholder="Filter class by name or role..."
                value={unitSearchQuery}
                onChange={(e) => setUnitSearchQuery(e.target.value)}
                className="w-full px-3.5 py-2 rounded-lg bg-slate-950 border border-slate-800 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-amber-400"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-96 overflow-y-auto pr-1">
                {CLASSES_DATA.filter((c) =>
                  c.name.toLowerCase().includes(unitSearchQuery.toLowerCase())
                ).map((cls) => (
                  <div
                    key={cls.id}
                    onClick={() => handleSelectUnitForSlot(activeSlotModal.slotId, cls.id)}
                    className="p-3 rounded-xl bg-slate-900 border border-slate-800 hover:border-amber-500/50 hover:bg-slate-800/80 cursor-pointer flex items-center justify-between transition group"
                  >
                    <div className="flex items-center gap-3">
                      <HeroFrame
                        image={cls.image}
                        name={cls.name}
                        icon={cls.icon}
                        size="sm"
                      />
                      <div>
                        <h4 className="font-semibold text-xs text-slate-100 group-hover:text-amber-300">
                          {cls.name}
                        </h4>
                        <span className="text-[10px] text-slate-400">
                          {cls.category} • {cls.role}
                        </span>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-amber-400">{cls.tier}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Import Modal */}
      <AnimatePresence>
        {showImportModal && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md"
            onClick={() => setShowImportModal(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-lg bg-[#0e1422] border border-amber-500/40 rounded-2xl shadow-2xl p-6 space-y-4"
            >
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <h3 className="font-serif text-lg font-bold text-amber-200">Import Squad JSON</h3>
                <button
                  onClick={() => setShowImportModal(false)}
                  className="p-1 text-slate-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <textarea
                rows={8}
                placeholder="Paste squad JSON here..."
                value={importJsonText}
                onChange={(e) => setImportJsonText(e.target.value)}
                className="w-full p-3 rounded-lg bg-slate-950 border border-slate-800 text-xs font-mono text-slate-200 focus:outline-none focus:border-amber-400"
              />

              {importError && <p className="text-xs text-red-400 font-semibold">{importError}</p>}

              <div className="flex justify-end gap-2">
                <button
                  onClick={() => setShowImportModal(false)}
                  className="px-4 py-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 text-xs font-semibold"
                >
                  Cancel
                </button>
                <button
                  onClick={handleImportJson}
                  className="px-4 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs shadow-md"
                >
                  Import Squad
                </button>
              </div>
            </motion.div>
          </div>
        )}

        {/* Equipment Loadout Modal */}
        {activeEquipmentSlot && (
          <EquipmentModal
            slot={activeEquipmentSlot}
            unit={getUnitClass(activeEquipmentSlot.unitId)!}
            onClose={() => setActiveEquipmentSlot(null)}
            onSaveEquipment={handleSaveEquipment}
          />
        )}
      </AnimatePresence>
    </div>
  );
};
