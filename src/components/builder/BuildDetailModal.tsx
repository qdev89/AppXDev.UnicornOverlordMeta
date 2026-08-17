'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Shield,
  Zap,
  Sword,
  Crown,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  XCircle,
  Sliders,
  BookOpen,
  Layers,
  Heart,
  Share2,
  Check,
  ExternalLink,
  Award,
  Download,
  Users,
} from 'lucide-react';
import { SquadBuild, UnitClass, UnitGearConfig, TacticsStep } from '@/types';
import { CLASSES_DATA } from '@/data/classes';
import { ITEMS_DATA } from '@/data/items';
import { downloadSquadAsJson, generateSquadImageCard } from '@/utils/exportUtils';
import { calculateUnitApPp } from '@/utils/apPpCalculator';
import { getUnitClass, getUnitGearConfig, getHeroPortraitImage } from '@/utils/squadUtils';
import { HeroFrame } from '@/components/common/HeroFrame';

interface BuildDetailModalProps {
  squad: SquadBuild | null;
  isOpen: boolean;
  onClose: () => void;
  onLoadIntoBuilder: (squad: SquadBuild) => void;
  isFavorite?: boolean;
  onToggleFavorite?: (squadId: string) => void;
}

export const BuildDetailModal: React.FC<BuildDetailModalProps> = ({
  squad,
  isOpen,
  onClose,
  onLoadIntoBuilder,
  isFavorite = false,
  onToggleFavorite,
}) => {
  const [selectedUnitId, setSelectedUnitId] = useState<string | null>(null);
  const [selectedTacticsIndex, setSelectedTacticsIndex] = useState<number>(0);
  const [copiedLink, setCopiedLink] = useState<boolean>(false);

  // Reset selected unit state whenever squad changes or modal opens
  useEffect(() => {
    if (isOpen && squad) {
      const initialUnit = squad.frontRow[0] || squad.backRow[0] || null;
      setSelectedUnitId(initialUnit);
      setSelectedTacticsIndex(0);
    }
  }, [squad?.id, isOpen]);

  if (!isOpen || !squad) return null;

  const allUnitsInSquad = [...(squad.frontRow || []), ...(squad.backRow || [])].filter(Boolean) as string[];
  const activeUnitId = (selectedUnitId && allUnitsInSquad.includes(selectedUnitId) ? selectedUnitId : allUnitsInSquad[0]) || allUnitsInSquad[0];

  const currentUnitClass = getUnitClass(activeUnitId);
  const currentUnitGearConfig = getUnitGearConfig(squad, activeUnitId);

  const handleShare = () => {
    const shareUrl = `${window.location.origin}${window.location.pathname}#build=${squad.id}`;
    navigator.clipboard.writeText(shareUrl);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  // Helper to generate rich, complete 4-6 prioritized in-game tactics rules for any unit
  const generateComprehensiveTactics = (
    uClass: UnitClass | null,
    gearConfig?: UnitGearConfig,
    squadObj?: SquadBuild | null
  ): TacticsStep[] => {
    if (!uClass) return [];

    const unitDisplayName = gearConfig?.characterName || gearConfig?.unitName?.split(' ')[0] || uClass.name.split(' ')[0] || uClass.name;
    const steps: TacticsStep[] = [];

    // Gather equipped items and find granted skills
    const equippedItemNames = [
      gearConfig?.slot1Weapon?.bestInSlot || gearConfig?.weapon,
      gearConfig?.slot2ShieldOrOffhand?.bestInSlot || gearConfig?.shieldOrHelm,
      gearConfig?.slot3Accessory?.bestInSlot || gearConfig?.accessory1,
      gearConfig?.slot4Accessory?.bestInSlot || gearConfig?.accessory2,
    ].filter(Boolean) as string[];

    const grantedItemSkills: { name: string; cost: string; description: string; isStartOfBattle?: boolean }[] = [];
    equippedItemNames.forEach((itemName) => {
      const clean = itemName.toLowerCase();
      const found = ITEMS_DATA.find(
        (i) => i.name.toLowerCase() === clean || clean.includes(i.name.toLowerCase()) || i.name.toLowerCase().includes(clean)
      );
      if (found?.grantedSkill) {
        grantedItemSkills.push(found.grantedSkill);
      }
    });

    const activeSkillsList = [...(uClass.activeSkills || [])];

    // Priority 1: Primary Active Skill (Highest AP cost / Row Attack / AOE Strike / Core Nuke)
    if (activeSkillsList.length > 0) {
      const primaryActive = activeSkillsList.reduce(
        (prev, curr) => ((curr.apCost || 1) >= (prev.apCost || 1) ? curr : prev),
        activeSkillsList[0]
      );
      let cond1 = '[Target: Frontline Row]';
      if (primaryActive.target === 'Full Row') cond1 = '[Target: Full Row (2+ Enemies)]';
      else if (primaryActive.target === 'All Enemies') cond1 = '[Target: All Enemies]';
      else if (primaryActive.target === 'Column') cond1 = '[Target: Column (Infantry Priority)]';
      else if (primaryActive.flags?.includes('True-Strike') || primaryActive.name.toLowerCase().includes('keen'))
        cond1 = '[Target: Prioritize Scouts / Evasion]';
      else if (uClass.category === 'Cavalry') cond1 = '[Target: Prioritize Infantry]';
      else if (uClass.role === 'Physical DPS') cond1 = '[Target: Prioritize Low Phys DEF]';

      steps.push({
        step: 1,
        unit: unitDisplayName,
        skill: primaryActive.name,
        condition1: cond1,
        condition2: `[Self AP >= ${primaryActive.apCost || 2}]`,
        notes: primaryActive.description || `Primary tactical strike with ${primaryActive.potency || 100}% potency.`,
      });
    }

    // Priority 2: Granted Item Active Skills (e.g. Trinity Rain, Dragoon Dive, Arrow Rain, Glacial Tempest)
    grantedItemSkills.forEach((gSkill) => {
      if (gSkill.cost.includes('AP') && !steps.some((s) => s.skill === gSkill.name)) {
        steps.push({
          step: steps.length + 1,
          unit: unitDisplayName,
          skill: gSkill.name,
          condition1: '[Target: All Enemies (Turn 1)]',
          condition2: `[Self AP >= ${parseInt(gSkill.cost) || 4}]`,
          notes: `${gSkill.description} (Granted from equipped weapon/relic loadout)`,
        });
      }
    });

    // Priority 3: Start of Battle Passive Trigger
    const startOfBattleSkill = (uClass.passiveSkills || []).find((s) => s.isStartOfBattle || s.trigger === 'Start of Battle');
    if (startOfBattleSkill) {
      steps.push({
        step: steps.length + 1,
        unit: unitDisplayName,
        skill: startOfBattleSkill.name,
        condition1: '[Start of Battle]',
        condition2: `[Self PP >= ${startOfBattleSkill.ppCost || 1}]`,
        notes: startOfBattleSkill.description || 'Start of Battle tactical field activation.',
      });
    }

    // Priority 4: Defensive Reaction / Cover / Guard / Sustain Passives
    const defPassives = (uClass.passiveSkills || []).filter(
      (s) =>
        !s.isStartOfBattle &&
        (s.trigger?.toLowerCase().includes('attack') ||
          s.trigger?.toLowerCase().includes('guard') ||
          s.name.toLowerCase().includes('guard') ||
          s.name.toLowerCase().includes('cover') ||
          s.name.toLowerCase().includes('parry') ||
          s.name.toLowerCase().includes('heal') ||
          s.name.toLowerCase().includes('shield'))
    );
    defPassives.forEach((dp) => {
      if (!steps.some((s) => s.skill === dp.name)) {
        let cond1 = '[Before Being Attacked]';
        if (dp.name.toLowerCase().includes('cover')) cond1 = '[Before Ally Attacked (Back Row)]';
        else if (dp.name.toLowerCase().includes('parry')) cond1 = '[Before Melee Physical Attack]';
        else if (dp.name.toLowerCase().includes('heal')) cond1 = '[Ally HP <= 50%]';
        else if (dp.trigger) cond1 = `[${dp.trigger}]`;

        steps.push({
          step: steps.length + 1,
          unit: unitDisplayName,
          skill: dp.name,
          condition1: cond1,
          condition2: `[Self PP >= ${dp.ppCost || 1}]`,
          notes: dp.description || 'Defensive reaction preserving squad formation health.',
        });
      }
    });

    // Priority 5: Granted Item Passive Skills (e.g. Quick Impetus, Eagle Eye, Parting Resurrection)
    grantedItemSkills.forEach((gSkill) => {
      if (gSkill.cost.includes('PP') && !steps.some((s) => s.skill === gSkill.name)) {
        let cond1 = '[After Ally Acts]';
        if (gSkill.name.toLowerCase().includes('impetus')) cond1 = '[Target: Highest ATK Ally (Turn 1)]';
        else if (gSkill.name.toLowerCase().includes('eye') || gSkill.name.toLowerCase().includes('lens'))
          cond1 = '[Self: Before Attacking (AOE)]';
        else if (gSkill.name.toLowerCase().includes('barrier') || gSkill.name.toLowerCase().includes('shield'))
          cond1 = '[Before Magic Attack]';

        steps.push({
          step: steps.length + 1,
          unit: unitDisplayName,
          skill: gSkill.name,
          condition1: cond1,
          condition2: `[Self PP >= ${parseInt(gSkill.cost) || 1}]`,
          notes: `${gSkill.description} (Granted from equipped accessory/shield loadout)`,
        });
      }
    });

    // Priority 6: Remaining Buff / Follow-up Passive Skills
    const otherPassives = (uClass.passiveSkills || []).filter((s) => !steps.some((st) => st.skill === s.name));
    otherPassives.forEach((op) => {
      let cond1 = op.trigger ? `[${op.trigger}]` : '[After Ally Attack]';
      if (op.name.toLowerCase().includes('call')) cond1 = '[After Ally Attack (Row Attack)]';
      else if (op.name.toLowerCase().includes('conferral')) cond1 = '[Before Ally Physical Attack]';
      else if (op.name.toLowerCase().includes('pursuit')) cond1 = '[After Ally Attacks Weakened Foe]';

      steps.push({
        step: steps.length + 1,
        unit: unitDisplayName,
        skill: op.name,
        condition1: cond1,
        condition2: `[Self PP >= ${op.ppCost || 1}]`,
        notes: op.description || 'Offensive passive enabler powering squad synergy combinations.',
      });
    });

    // Ensure at least 4 complete tactical programming steps
    if (steps.length < 4) {
      if (uClass.role === 'Tank' || uClass.category === 'Armored') {
        steps.push({
          step: steps.length + 1,
          unit: unitDisplayName,
          skill: 'Heavy Guard',
          condition1: '[Before Physical Attack]',
          condition2: '[Self PP >= 1]',
          notes: 'Standard heavy shield block reaction to mitigate incoming strikes.',
        });
      } else if (uClass.role === 'Support') {
        steps.push({
          step: steps.length + 1,
          unit: unitDisplayName,
          skill: 'Quick Heal',
          condition1: '[Ally HP <= 50%]',
          condition2: '[Self PP >= 1]',
          notes: 'Immediate single-target healing to rescue critical squadmates.',
        });
      } else {
        steps.push({
          step: steps.length + 1,
          unit: unitDisplayName,
          skill: 'Focus Strike',
          condition1: '[Target: Lowest HP %]',
          condition2: '[Self AP >= 1]',
          notes: 'Target prioritized single attack to guarantee knockout.',
        });
      }
    }

    // Re-index steps cleanly 1..N
    return steps.map((s, idx) => ({ ...s, step: idx + 1 }));
  };

  // Filter tactics belonging to active unit, or generate full comprehensive 4-6 tactics rules
  const matchedUnitTactics = (squad.tacticsSequence || []).filter((t) => {
    const tUnitLower = t.unit.toLowerCase();
    const classNameLower = currentUnitClass?.name.toLowerCase() || '';
    const classIdLower = currentUnitClass?.id.toLowerCase() || '';
    const gearUnitNameLower = currentUnitGearConfig?.unitName.toLowerCase() || '';
    const gearUnitIdLower = currentUnitGearConfig?.unitId.toLowerCase() || '';
    const charNameLower = currentUnitGearConfig?.characterName?.toLowerCase() || '';

    const firstWordGear = gearUnitNameLower.split(' ')[0];
    const firstWordClass = classNameLower.split(' ')[0];

    return (
      (charNameLower && (tUnitLower.includes(charNameLower) || charNameLower.includes(tUnitLower))) ||
      (classNameLower && tUnitLower.includes(classNameLower)) ||
      (classNameLower && classNameLower.includes(tUnitLower)) ||
      (classIdLower && tUnitLower.includes(classIdLower.split('-')[0])) ||
      (gearUnitIdLower && tUnitLower.includes(gearUnitIdLower)) ||
      (gearUnitNameLower && (tUnitLower.includes(gearUnitNameLower) || gearUnitNameLower.includes(tUnitLower))) ||
      (firstWordGear.length > 2 && tUnitLower.includes(firstWordGear)) ||
      (firstWordClass.length > 2 && tUnitLower.includes(firstWordClass))
    );
  });

  const displayedTactics =
    matchedUnitTactics.length >= 4
      ? matchedUnitTactics.map((t, i) => ({ ...t, step: i + 1 }))
      : generateComprehensiveTactics(currentUnitClass, currentUnitGearConfig, squad);

  const selectedTactic = displayedTactics[selectedTacticsIndex] || displayedTactics[0];

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-[#03050a]/90 backdrop-blur-md"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.96 }}
          transition={{ duration: 0.2 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-6xl max-h-[96vh] overflow-hidden bg-[#070b15] border-2 border-amber-500/80 rounded-2xl shadow-[0_0_80px_rgba(0,0,0,0.95)] flex flex-col filigree-box filigree-bottom"
        >
          {/* Top In-Game Header Bar */}
          <div className="px-5 py-3 border-b-2 border-amber-500/40 bg-gradient-to-r from-[#070b15] via-[#11192e] to-[#070b15] flex items-center justify-between gap-4 shrink-0">
            {/* Left Header Crest Badge */}
            <div className="flex items-center gap-3">
              <div className="px-4 py-1.5 rounded-lg bg-gradient-to-r from-amber-600 via-amber-500 to-amber-700 text-slate-950 font-serif font-extrabold text-sm shadow-md border border-amber-300 flex items-center gap-2">
                <Crown className="w-4 h-4 fill-slate-950" />
                <span>Unit Details & Tactics</span>
              </div>
              <div>
                <h2 className="font-serif text-base sm:text-lg font-bold text-amber-200">
                  {squad.name}
                </h2>
                <span className="text-[10px] text-amber-300/80 font-serif block">
                  Tier {squad.tier} • {squad.archetype}
                </span>
              </div>
            </div>

            {/* Quick Export Actions */}
            <div className="flex items-center gap-2">
              <button
                onClick={handleShare}
                className="p-2 rounded-lg bg-slate-950 border border-amber-500/30 text-amber-300 hover:text-amber-100 transition text-xs font-serif font-bold flex items-center gap-1"
                title="Share Link"
              >
                <Share2 className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">{copiedLink ? 'Copied!' : 'Share'}</span>
              </button>

              <button
                onClick={() => downloadSquadAsJson(squad)}
                className="p-2 rounded-lg bg-slate-950 border border-amber-500/30 text-amber-300 hover:text-amber-100 transition text-xs font-serif font-bold flex items-center gap-1"
                title="Export JSON"
              >
                <Download className="w-3.5 h-3.5 text-cyan-400" />
                <span className="hidden sm:inline">JSON</span>
              </button>

              <button
                onClick={async () => {
                  const imgUrl = await generateSquadImageCard(squad);
                  const a = document.createElement('a');
                  a.href = imgUrl;
                  a.download = `${squad.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}-card.png`;
                  a.click();
                }}
                className="p-2 rounded-lg bg-slate-950 border border-amber-500/30 text-amber-300 hover:text-amber-100 transition text-xs font-serif font-bold flex items-center gap-1"
                title="Download Image Card"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span className="hidden sm:inline">Card</span>
              </button>

              <button
                onClick={() => {
                  onLoadIntoBuilder(squad);
                  onClose();
                }}
                className="px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-serif font-extrabold text-xs shadow-md transition"
              >
                ⚡ Load Builder
              </button>

              <button
                onClick={onClose}
                className="p-1.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* MAIN DUAL COLUMN IN-GAME LAYOUT */}
          <div className="p-4 sm:p-5 overflow-y-auto max-h-[88vh] grid grid-cols-1 lg:grid-cols-12 gap-5 no-scrollbar">
            {/* LEFT COLUMN: Clean 2D Battle Stage Pedestal & Member Selector */}
            <div className="lg:col-span-5 space-y-4">
              {/* 5-Hero Member Quick Selector Ribbon */}
              <div className="p-3 rounded-xl bg-slate-950 border border-amber-500/40 space-y-2">
                <div className="flex items-center justify-between border-b border-slate-800 pb-1.5">
                  <span className="text-xs font-serif font-bold text-amber-300 uppercase tracking-wider flex items-center gap-1.5">
                    <Users className="w-4 h-4 text-amber-400" />
                    <span>Select Member to Inspect ({allUnitsInSquad.length} Units)</span>
                  </span>
                  <span className="text-[10px] text-slate-400 font-sans">Click slot below</span>
                </div>

                <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
                  {allUnitsInSquad.map((unitId, idx) => {
                    const uCls = getUnitClass(unitId);
                    const uGear = getUnitGearConfig(squad, unitId);
                    const isSelected = unitId === activeUnitId;
                    const displayName = uGear?.characterName || uGear?.unitName?.split(' ')[0] || uCls?.name || unitId;
                    const classSubtitle = uGear?.className || uCls?.role || 'Lv. 40';
                    const heroImg = getHeroPortraitImage(unitId, uGear?.characterName, uCls?.id) || uCls?.image;
                    return (
                      <button
                        key={unitId || idx}
                        onClick={() => {
                          setSelectedUnitId(unitId);
                          setSelectedTacticsIndex(0);
                        }}
                        className={`flex items-center gap-2 p-1.5 rounded-xl border transition-all shrink-0 ${
                          isSelected
                            ? 'bg-amber-500/20 border-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.4)]'
                            : 'bg-slate-900 border-slate-800 hover:border-amber-500/40 text-slate-400'
                        }`}
                      >
                        <HeroFrame
                          image={heroImg}
                          name={displayName}
                          icon={uCls?.icon || '⚔️'}
                          size="sm"
                          frameVariant={isSelected ? 'gold' : 'silver'}
                          showGlow={isSelected}
                        />
                        <div className="text-left pr-1 hidden sm:block">
                          <span className={`text-xs font-serif font-bold block ${isSelected ? 'text-amber-200' : 'text-slate-300'}`}>
                            {displayName}
                          </span>
                          <span className="text-[9px] font-mono text-emerald-400">{classSubtitle}</span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* CLEAN 2D BATTLE FORMATION STAGE BOARD */}
              <div className="p-4 rounded-xl bg-slate-950 border-2 border-amber-500/50 shadow-2xl space-y-3 filigree-box">
                <div className="flex items-center justify-between border-b border-amber-500/30 pb-1.5">
                  <span className="text-xs font-serif font-bold text-amber-300 uppercase tracking-wider">
                    ⚔️ 2D Formation Grid (2 Vanguard / 3 Rearguard)
                  </span>
                  <span className="text-[10px] text-amber-400 font-mono">Click unit to view gear & tactics</span>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {/* Vanguard Row */}
                  <div className="space-y-2">
                    <div className="vanguard-banner text-[10px] font-serif font-bold uppercase text-center py-1 rounded">
                      Front Row (Vanguard)
                    </div>
                    {squad.frontRow.map((uId, i) => {
                      const u = getUnitClass(uId);
                      const isSelected = uId === activeUnitId;
                      const uGearConfig = getUnitGearConfig(squad, uId);
                      const uApPp = calculateUnitApPp(u, uGearConfig);
                      const heroImg = getHeroPortraitImage(uId, uGearConfig?.characterName, u?.id) || u?.image;
                      return (
                        <div
                          key={uId || i}
                          onClick={() => {
                            if (uId) {
                              setSelectedUnitId(uId);
                              setSelectedTacticsIndex(0);
                            }
                          }}
                          className={`p-2.5 rounded-xl border-2 transition-all cursor-pointer space-y-1.5 ${
                            isSelected
                              ? 'bg-amber-500/20 border-amber-400 shadow-[0_0_20px_rgba(245,158,11,0.5)]'
                              : u
                              ? 'bg-slate-900 border-amber-500/30 hover:border-amber-400/60'
                              : 'bg-slate-950/60 border-slate-800 border-dashed text-slate-600'
                          }`}
                        >
                          {u ? (
                            <>
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                  <HeroFrame
                                    image={heroImg}
                                    name={uGearConfig?.characterName || uGearConfig?.unitName || u.name}
                                    icon={u.icon || '⚔️'}
                                    size="md"
                                    frameVariant={isSelected ? 'gold' : 'silver'}
                                    showGlow={isSelected}
                                  />
                                  <div>
                                    <span className="font-serif font-bold text-xs text-amber-200 truncate block">
                                      {uGearConfig?.characterName || uGearConfig?.unitName || u.name}
                                    </span>
                                    <span className="text-[9px] font-mono text-emerald-400 font-bold">
                                      HP {u.baseStats.hp || 100}/100
                                    </span>
                                  </div>
                                </div>
                                <div className="flex items-center gap-1">
                                  <div className="flex items-center gap-0.5 px-1 py-0.5 rounded bg-red-950/80 border border-red-500/40 text-[9px] font-mono font-bold text-red-300">
                                    <span>{uApPp.totalAp}</span>
                                    <span className="ap-diamond scale-75" />
                                  </div>
                                  <div className="flex items-center gap-0.5 px-1 py-0.5 rounded bg-blue-950/80 border border-blue-500/40 text-[9px] font-mono font-bold text-blue-300">
                                    <span>{uApPp.totalPp}</span>
                                    <span className="pp-diamond scale-75" />
                                  </div>
                                </div>
                              </div>
                              {isSelected && (
                                <div className="text-[9px] font-serif font-bold text-amber-300 bg-amber-500/30 px-2 py-0.5 rounded text-center uppercase tracking-wider">
                                  ★ INSPECTING MEMBER ★
                                </div>
                              )}
                            </>
                          ) : (
                            <span className="text-[11px] font-serif text-slate-500">Empty Slot</span>
                          )}
                        </div>
                      );
                    })}
                  </div>

                  {/* Rearguard Row */}
                  <div className="space-y-2">
                    <div className="rearguard-banner text-[10px] font-serif font-bold uppercase text-center py-1 rounded">
                      Back Row (Rearguard)
                    </div>
                    {squad.backRow.map((uId, i) => {
                      const u = getUnitClass(uId);
                      const isSelected = uId === activeUnitId;
                      const uGearConfig = getUnitGearConfig(squad, uId);
                      const uApPp = calculateUnitApPp(u, uGearConfig);
                      const heroImg = getHeroPortraitImage(uId, uGearConfig?.characterName, u?.id) || u?.image;
                      return (
                        <div
                          key={uId || i}
                          onClick={() => {
                            if (uId) {
                              setSelectedUnitId(uId);
                              setSelectedTacticsIndex(0);
                            }
                          }}
                          className={`p-2.5 rounded-xl border-2 transition-all cursor-pointer space-y-1.5 ${
                            isSelected
                              ? 'bg-purple-500/20 border-purple-400 shadow-[0_0_20px_rgba(168,85,247,0.5)]'
                              : u
                              ? 'bg-slate-900 border-purple-500/30 hover:border-purple-400/60'
                              : 'bg-slate-950/60 border-slate-800 border-dashed text-slate-600'
                          }`}
                        >
                          {u ? (
                            <>
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                  <HeroFrame
                                    image={heroImg}
                                    name={uGearConfig?.characterName || uGearConfig?.unitName || u.name}
                                    icon={u.icon || '⚔️'}
                                    size="md"
                                    frameVariant={isSelected ? 'purple' : 'silver'}
                                    showGlow={isSelected}
                                  />
                                  <div>
                                    <span className="font-serif font-bold text-xs text-purple-200 truncate block">
                                      {uGearConfig?.characterName || uGearConfig?.unitName || u.name}
                                    </span>
                                    <span className="text-[9px] font-mono text-emerald-400 font-bold">
                                      HP {u.baseStats.hp || 90}/90
                                    </span>
                                  </div>
                                </div>
                                <div className="flex items-center gap-1">
                                  <div className="flex items-center gap-0.5 px-1 py-0.5 rounded bg-red-950/80 border border-red-500/40 text-[9px] font-mono font-bold text-red-300">
                                    <span>{uApPp.totalAp}</span>
                                    <span className="ap-diamond scale-75" />
                                  </div>
                                  <div className="flex items-center gap-0.5 px-1 py-0.5 rounded bg-blue-950/80 border border-blue-500/40 text-[9px] font-mono font-bold text-blue-300">
                                    <span>{uApPp.totalPp}</span>
                                    <span className="pp-diamond scale-75" />
                                  </div>
                                </div>
                              </div>
                              {isSelected && (
                                <div className="text-[9px] font-serif font-bold text-purple-300 bg-purple-500/30 px-2 py-0.5 rounded text-center uppercase tracking-wider">
                                  ★ INSPECTING MEMBER ★
                                </div>
                              )}
                            </>
                          ) : (
                            <span className="text-[11px] font-serif text-slate-500">Empty Slot</span>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Bottom Left - Leader Effect & Tactical Role Panel */}
              <div className="p-4 rounded-xl bg-slate-950 border border-amber-500/30 space-y-2">
                <div className="flex items-center justify-between border-b border-slate-800 pb-1.5">
                  <span className="font-serif font-bold text-xs text-amber-300 uppercase tracking-wider">
                    👑 Member Role: {currentUnitGearConfig?.roleTitle || currentUnitClass?.role}
                  </span>
                  <span className="text-[10px] font-mono text-slate-400">Mobility 119</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed font-sans">
                  {currentUnitClass?.overview || squad.strategyGuide?.overview || ''}
                </p>
              </div>
            </div>

            {/* RIGHT COLUMN: Selected Unit Equipment, Stats & Tactics Sequence */}
            <div className="lg:col-span-7 space-y-4">
              {/* Selected Unit Header Badge with Calculated Total AP & PP */}
              {(() => {
                const inspectedApPp = calculateUnitApPp(currentUnitClass, currentUnitGearConfig);
                const activeHeroImg = getHeroPortraitImage(activeUnitId, currentUnitGearConfig?.characterName, currentUnitClass?.id) || currentUnitClass?.image;
                return (
                  <div className="p-4 rounded-xl bg-gradient-to-r from-slate-950 via-[#10192e] to-slate-950 border border-amber-500/40 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow filigree-box">
                    <div className="flex items-center gap-3">
                      <HeroFrame
                        image={activeHeroImg}
                        name={currentUnitGearConfig?.characterName || currentUnitClass?.name || 'Selected Unit'}
                        icon={currentUnitClass?.icon || '👑'}
                        size="lg"
                        frameVariant="gold"
                        showGlow={true}
                        tier={currentUnitClass?.tier}
                      />
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-serif font-bold text-lg text-amber-100">
                            {currentUnitGearConfig?.characterName || currentUnitClass?.name || 'Selected Unit'}
                          </h3>
                          <span className="text-xs font-mono font-extrabold px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/40">
                            {currentUnitGearConfig?.className || 'Lv. 40'}
                          </span>
                        </div>
                        <span className="text-xs text-purple-300 font-serif font-semibold">
                          {currentUnitGearConfig?.roleTitle || currentUnitClass?.category} • Growth: {currentUnitGearConfig?.growthTypes?.join(' / ') || 'Offensive'}
                        </span>
                      </div>
                    </div>

                    {/* AP & PP Count Badges with Visual Diamonds */}
                    <div className="flex items-center gap-2.5 shrink-0">
                      {/* AP Box */}
                      <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-red-950/80 border border-red-500/60 shadow-lg">
                        <div className="text-right">
                          <span className="text-[10px] text-red-400/80 font-mono block leading-none">Total AP</span>
                          <span className="text-sm font-serif font-extrabold text-red-200">{inspectedApPp.totalAp}</span>
                        </div>
                        <div className="flex items-center gap-0.5">
                          {Array.from({ length: inspectedApPp.totalAp }).map((_, i) => (
                            <span key={i} className="ap-diamond" />
                          ))}
                        </div>
                      </div>

                      {/* PP Box */}
                      <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-blue-950/80 border border-blue-500/60 shadow-lg">
                        <div className="text-right">
                          <span className="text-[10px] text-blue-400/80 font-mono block leading-none">Total PP</span>
                          <span className="text-sm font-serif font-extrabold text-blue-200">{inspectedApPp.totalPp}</span>
                        </div>
                        <div className="flex items-center gap-0.5">
                          {Array.from({ length: inspectedApPp.totalPp }).map((_, i) => (
                            <span key={i} className="pp-diamond" />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })()}

              {/* EQUIPMENT & STATS GRID */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Selected Unit Equipment Panel (4 Slots with BIS & Opt) */}
                <div className="p-4 rounded-xl bg-slate-950 border border-amber-500/30 space-y-3 filigree-box">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-1.5">
                    <h4 className="font-serif text-xs font-bold text-amber-300 uppercase tracking-wider">
                      ⚔️ 4-Slot Equipment Loadout (BIS & Opt)
                    </h4>
                    <span className="text-[10px] font-mono text-emerald-400">Class Match</span>
                  </div>

                  <div className="space-y-2">
                    {/* Slot 1: Weapon */}
                    <div className="p-2.5 rounded-lg bg-slate-900/90 border border-amber-500/30 space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono font-bold text-amber-400 flex items-center gap-1">
                          🗡️ Slot 1: {currentUnitGearConfig?.slot1Weapon?.slotType || 'Weapon'}
                        </span>
                        <span className="text-[9px] px-1.5 py-0.2 rounded bg-amber-500/20 text-amber-300 font-serif font-extrabold border border-amber-500/30">
                          BIS
                        </span>
                      </div>
                      <div className="text-xs font-serif font-bold text-amber-100">
                        {currentUnitGearConfig?.slot1Weapon?.bestInSlot || currentUnitGearConfig?.weapon || currentUnitClass?.recommendedEquipment[0] || 'Standard Weapon'}
                      </div>
                      {currentUnitGearConfig?.slot1Weapon?.notes && (
                        <div className="text-[10px] text-slate-300 font-mono">
                          {currentUnitGearConfig.slot1Weapon.notes}
                        </div>
                      )}
                      {currentUnitGearConfig?.slot1Weapon?.optimalAlternatives && currentUnitGearConfig.slot1Weapon.optimalAlternatives.length > 0 && (
                        <div className="text-[9px] text-slate-400 pt-0.5 border-t border-slate-800/80">
                          <span className="text-slate-500 font-bold">Alternatives (Opt):</span> {currentUnitGearConfig.slot1Weapon.optimalAlternatives.join(', ')}
                        </div>
                      )}
                    </div>

                    {/* Slot 2: Shield / Offhand / Helm */}
                    <div className="p-2.5 rounded-lg bg-slate-900/90 border border-cyan-500/30 space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono font-bold text-cyan-400 flex items-center gap-1">
                          🛡️ Slot 2: {currentUnitGearConfig?.slot2ShieldOrOffhand?.slotType || 'Shield / Armor'}
                        </span>
                        <span className="text-[9px] px-1.5 py-0.2 rounded bg-cyan-500/20 text-cyan-300 font-serif font-extrabold border border-cyan-500/30">
                          BIS
                        </span>
                      </div>
                      <div className="text-xs font-serif font-bold text-cyan-100">
                        {currentUnitGearConfig?.slot2ShieldOrOffhand?.bestInSlot || currentUnitGearConfig?.shieldOrHelm || currentUnitClass?.recommendedEquipment[1] || 'Standard Shield / Armor'}
                      </div>
                      {currentUnitGearConfig?.slot2ShieldOrOffhand?.notes && (
                        <div className="text-[10px] text-slate-300 font-mono">
                          {currentUnitGearConfig.slot2ShieldOrOffhand.notes}
                        </div>
                      )}
                      {currentUnitGearConfig?.slot2ShieldOrOffhand?.optimalAlternatives && currentUnitGearConfig.slot2ShieldOrOffhand.optimalAlternatives.length > 0 && (
                        <div className="text-[9px] text-slate-400 pt-0.5 border-t border-slate-800/80">
                          <span className="text-slate-500 font-bold">Alternatives (Opt):</span> {currentUnitGearConfig.slot2ShieldOrOffhand.optimalAlternatives.join(', ')}
                        </div>
                      )}
                    </div>

                    {/* Slot 3: Accessory 1 */}
                    <div className="p-2.5 rounded-lg bg-slate-900/90 border border-emerald-500/30 space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono font-bold text-emerald-400 flex items-center gap-1">
                          👑 Slot 3: Accessory 1
                        </span>
                        <span className="text-[9px] px-1.5 py-0.2 rounded bg-emerald-500/20 text-emerald-300 font-serif font-extrabold border border-emerald-500/30">
                          BIS
                        </span>
                      </div>
                      <div className="text-xs font-serif font-bold text-emerald-100">
                        {currentUnitGearConfig?.slot3Accessory?.bestInSlot || currentUnitGearConfig?.accessory1 || currentUnitClass?.recommendedEquipment[2] || 'Key Accessory 1'}
                      </div>
                      {currentUnitGearConfig?.slot3Accessory?.notes && (
                        <div className="text-[10px] text-slate-300 font-mono">
                          {currentUnitGearConfig.slot3Accessory.notes}
                        </div>
                      )}
                      {currentUnitGearConfig?.slot3Accessory?.optimalAlternatives && currentUnitGearConfig.slot3Accessory.optimalAlternatives.length > 0 && (
                        <div className="text-[9px] text-slate-400 pt-0.5 border-t border-slate-800/80">
                          <span className="text-slate-500 font-bold">Alternatives (Opt):</span> {currentUnitGearConfig.slot3Accessory.optimalAlternatives.join(', ')}
                        </div>
                      )}
                    </div>

                    {/* Slot 4: Accessory 2 */}
                    <div className="p-2.5 rounded-lg bg-slate-900/90 border border-purple-500/30 space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono font-bold text-purple-400 flex items-center gap-1">
                          💍 Slot 4: Accessory 2
                        </span>
                        <span className="text-[9px] px-1.5 py-0.2 rounded bg-purple-500/20 text-purple-300 font-serif font-extrabold border border-purple-500/30">
                          BIS
                        </span>
                      </div>
                      <div className="text-xs font-serif font-bold text-purple-100">
                        {currentUnitGearConfig?.slot4Accessory?.bestInSlot || currentUnitGearConfig?.accessory2 || 'Key Accessory 2'}
                      </div>
                      {currentUnitGearConfig?.slot4Accessory?.notes && (
                        <div className="text-[10px] text-slate-300 font-mono">
                          {currentUnitGearConfig.slot4Accessory.notes}
                        </div>
                      )}
                      {currentUnitGearConfig?.slot4Accessory?.optimalAlternatives && currentUnitGearConfig.slot4Accessory.optimalAlternatives.length > 0 && (
                        <div className="text-[9px] text-slate-400 pt-0.5 border-t border-slate-800/80">
                          <span className="text-slate-500 font-bold">Alternatives (Opt):</span> {currentUnitGearConfig.slot4Accessory.optimalAlternatives.join(', ')}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Selected Unit Base Stats Panel */}
                <div className="p-4 rounded-xl bg-slate-950 border border-amber-500/30 space-y-2.5 filigree-box">
                  <h4 className="font-serif text-xs font-bold text-amber-300 uppercase tracking-wider border-b border-slate-800 pb-1">
                    📈 Member Stat Metrics
                  </h4>

                  <div className="grid grid-cols-2 gap-1.5 text-xs font-mono">
                    <div className="flex justify-between p-1 rounded bg-slate-900">
                      <span className="text-slate-400">HP:</span>
                      <span className="text-emerald-400 font-bold">{currentUnitClass?.baseStats.hp || 100} / 100</span>
                    </div>
                    <div className="flex justify-between p-1 rounded bg-slate-900">
                      <span className="text-slate-400">Initiative:</span>
                      <span className="text-cyan-400 font-bold">{currentUnitClass?.baseStats.initiative || 45}</span>
                    </div>
                    <div className="flex justify-between p-1 rounded bg-slate-900">
                      <span className="text-slate-400">Phys. ATK:</span>
                      <span className="text-amber-400 font-bold">{currentUnitClass?.baseStats.physAtk || 85}</span>
                    </div>
                    <div className="flex justify-between p-1 rounded bg-slate-900">
                      <span className="text-slate-400">Accuracy:</span>
                      <span className="text-slate-200 font-bold">143</span>
                    </div>
                    <div className="flex justify-between p-1 rounded bg-slate-900">
                      <span className="text-slate-400">Phys. DEF:</span>
                      <span className="text-amber-400 font-bold">{currentUnitClass?.baseStats.physDef || 75}</span>
                    </div>
                    <div className="flex justify-between p-1 rounded bg-slate-900">
                      <span className="text-slate-400">Evasion:</span>
                      <span className="text-slate-200 font-bold">72</span>
                    </div>
                    <div className="flex justify-between p-1 rounded bg-slate-900">
                      <span className="text-slate-400">Mag. ATK:</span>
                      <span className="text-purple-400 font-bold">{currentUnitClass?.baseStats.magAtk || 35}</span>
                    </div>
                    <div className="flex justify-between p-1 rounded bg-slate-900">
                      <span className="text-slate-400">Crit. Rate:</span>
                      <span className="text-amber-300 font-bold">25%</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* TACTICS PRIORITY TABLE */}
              <div className="p-4 rounded-xl bg-slate-950 border border-amber-500/40 space-y-3 filigree-box">
                <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                  <h4 className="font-serif text-xs font-bold text-amber-300 uppercase tracking-wider">
                    In-Game Tactics Programming Table for {currentUnitGearConfig?.characterName || currentUnitClass?.name}
                  </h4>
                  <span className="text-[10px] text-slate-400 font-sans">Click tactic row to inspect logic</span>
                </div>

                <div className="space-y-1.5 overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead className="text-[10px] font-serif text-slate-400 border-b border-slate-800">
                      <tr>
                        <th className="py-1 px-2">Priority</th>
                        <th className="py-1 px-2">Action / Passive Skill</th>
                        <th className="py-1 px-2">Condition 1</th>
                        <th className="py-1 px-2">Condition 2</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-900">
                      {displayedTactics.map((tac, idx) => {
                        const isPassive =
                          tac.condition2.includes('PP') ||
                          tac.condition1.includes('PP') ||
                          tac.condition1.toLowerCase().includes('start of battle') ||
                          (!tac.condition2.includes('AP') && !tac.condition1.includes('AP'));
                        const isActiveSkill = !isPassive;

                        return (
                          <tr
                            key={idx}
                            onClick={() => setSelectedTacticsIndex(idx)}
                            className={`cursor-pointer transition ${
                              idx === selectedTacticsIndex ? 'bg-amber-500/15 font-bold' : 'hover:bg-slate-900'
                            }`}
                          >
                            <td className="py-2 px-2 font-serif font-extrabold text-amber-400 flex items-center gap-1.5 whitespace-nowrap">
                              <span className="text-xs">P{tac.step}</span>
                              {isActiveSkill ? (
                                <span className="ap-diamond" title="Active Skill (AP)" />
                              ) : (
                                <span className="pp-diamond" title="Passive Skill (PP)" />
                              )}
                            </td>

                            <td className="py-2 px-2">
                              <span
                                className={`px-2.5 py-1 text-xs block font-serif rounded truncate ${
                                  isActiveSkill ? 'tactics-active-banner' : 'tactics-passive-banner'
                                }`}
                              >
                                {tac.skill}
                              </span>
                            </td>

                            <td className="py-2 px-2">
                              <span className="tactics-condition-banner px-2.5 py-1 block truncate text-slate-200">
                                {tac.condition1}
                              </span>
                            </td>

                            <td className="py-2 px-2">
                              <span className="tactics-condition-banner px-2.5 py-1 block truncate text-slate-200">
                                {tac.condition2}
                              </span>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* BOTTOM RIGHT - SKILL DETAIL INSPECTOR BOX */}
              {selectedTactic && (
                <div className="p-4 rounded-xl bg-gradient-to-r from-amber-950/40 via-slate-900 to-purple-950/40 border border-amber-500/40 space-y-2 shadow-xl">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-amber-500/30 pb-1.5 gap-2">
                    <div className="flex items-center gap-2">
                      <Zap className="w-4 h-4 text-amber-400" />
                      <h4 className="font-serif font-bold text-sm text-amber-200">
                        Priority #{selectedTactic.step}: {selectedTactic.unit} — {selectedTactic.skill}
                      </h4>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/40">
                        Cond 1: {selectedTactic.condition1}
                      </span>
                      <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 border border-blue-500/40">
                        Cond 2: {selectedTactic.condition2}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed font-sans">
                    {selectedTactic.notes}
                  </p>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
