'use client';

import React, { useState } from 'react';
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
import { SquadBuild, UnitClass } from '@/types';
import { CLASSES_DATA } from '@/data/classes';
import { downloadSquadAsJson, generateSquadImageCard } from '@/utils/exportUtils';

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

  if (!isOpen || !squad) return null;

  const allUnitsInSquad = [...squad.frontRow, ...squad.backRow].filter(Boolean);
  const activeUnitId = selectedUnitId || squad.frontRow[0] || squad.backRow[0] || allUnitsInSquad[0];

  const getUnitClass = (unitId: string | null): UnitClass | null => {
    if (!unitId) return null;
    return CLASSES_DATA.find((c) => c.id === unitId) || null;
  };

  const currentUnitClass = getUnitClass(activeUnitId);
  const currentUnitGearConfig = squad.unitGearConfigs?.find(
    (g) => g.unitId === activeUnitId || g.unitName.toLowerCase().includes(currentUnitClass?.name.toLowerCase() || '')
  ) || squad.unitGearConfigs?.[0];

  const handleShare = () => {
    const shareUrl = `${window.location.origin}${window.location.pathname}#build=${squad.id}`;
    navigator.clipboard.writeText(shareUrl);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  // Filter tactics belonging to active unit or show all squad tactics if general
  const unitTactics = squad.tacticsSequence.filter(
    (t) =>
      t.unit.toLowerCase().includes(currentUnitClass?.name.toLowerCase() || '') ||
      (currentUnitClass && t.unit.toLowerCase().includes(currentUnitClass.id.split('-')[0]))
  );
  const displayedTactics = unitTactics.length > 0 ? unitTactics : squad.tacticsSequence;
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
                    const isSelected = unitId === activeUnitId;
                    return (
                      <button
                        key={idx}
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
                        <div className="w-9 h-9 rounded-lg bg-slate-950 border border-amber-400/50 overflow-hidden shrink-0 flex items-center justify-center text-lg">
                          {uCls?.image ? (
                            <img src={uCls.image} alt={uCls.name} className="w-full h-full object-cover" />
                          ) : (
                            uCls?.icon || '⚔️'
                          )}
                        </div>
                        <div className="text-left pr-1 hidden sm:block">
                          <span className={`text-xs font-serif font-bold block ${isSelected ? 'text-amber-200' : 'text-slate-300'}`}>
                            {uCls?.name || 'Unit'}
                          </span>
                          <span className="text-[9px] font-mono text-emerald-400">Lv. 40</span>
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
                      return (
                        <div
                          key={i}
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
                                  <div className="w-10 h-10 rounded-lg bg-slate-950 border border-amber-400/60 flex items-center justify-center text-xl overflow-hidden shrink-0 shadow">
                                    {u.image ? (
                                      <img src={u.image} alt={u.name} className="w-full h-full object-cover" />
                                    ) : (
                                      u.icon
                                    )}
                                  </div>
                                  <div>
                                    <span className="font-serif font-bold text-xs text-amber-200 truncate block">
                                      {u.name}
                                    </span>
                                    <span className="text-[9px] font-mono text-emerald-400 font-bold">
                                      HP {u.baseStats.hp || 100}/100
                                    </span>
                                  </div>
                                </div>
                                <div className="flex items-center">
                                  <span className="ap-diamond" />
                                  <span className="pp-diamond" />
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
                      return (
                        <div
                          key={i}
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
                                  <div className="w-10 h-10 rounded-lg bg-slate-950 border border-purple-400/60 flex items-center justify-center text-xl overflow-hidden shrink-0 shadow">
                                    {u.image ? (
                                      <img src={u.image} alt={u.name} className="w-full h-full object-cover" />
                                    ) : (
                                      u.icon
                                    )}
                                  </div>
                                  <div>
                                    <span className="font-serif font-bold text-xs text-purple-200 truncate block">
                                      {u.name}
                                    </span>
                                    <span className="text-[9px] font-mono text-emerald-400 font-bold">
                                      HP {u.baseStats.hp || 90}/90
                                    </span>
                                  </div>
                                </div>
                                <div className="flex items-center">
                                  <span className="ap-diamond" />
                                  <span className="pp-diamond" />
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
                  {currentUnitClass?.overview || squad.strategyGuide.overview}
                </p>
              </div>
            </div>

            {/* RIGHT COLUMN: Selected Unit Equipment, Stats & Tactics Sequence */}
            <div className="lg:col-span-7 space-y-4">
              {/* Selected Unit Header Badge */}
              <div className="p-4 rounded-xl bg-gradient-to-r from-slate-950 via-[#10192e] to-slate-950 border border-amber-500/40 flex items-center justify-between gap-3 shadow filigree-box">
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 rounded-xl bg-slate-950 border-2 border-amber-400 flex items-center justify-center text-3xl overflow-hidden shrink-0 shadow">
                    {currentUnitClass?.image ? (
                      <img src={currentUnitClass.image} alt={currentUnitClass.name} className="w-full h-full object-cover" />
                    ) : (
                      currentUnitClass?.icon || '👑'
                    )}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-serif font-bold text-lg text-amber-100">
                        {currentUnitClass?.name || 'Selected Unit'}
                      </h3>
                      <span className="text-xs font-mono font-extrabold px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/40">
                        Lv. 40
                      </span>
                    </div>
                    <span className="text-xs text-purple-300 font-serif font-semibold">
                      {currentUnitGearConfig?.roleTitle || currentUnitClass?.category} • Growth: {currentUnitGearConfig?.growthTypes?.join(' / ') || 'Offensive'}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs font-mono shrink-0">
                  <span className="text-slate-400">AP</span>
                  <span className="ap-diamond" />
                  <span className="ap-diamond" />
                  <span className="text-slate-400 ml-2">PP</span>
                  <span className="pp-diamond" />
                  <span className="pp-diamond" />
                </div>
              </div>

              {/* EQUIPMENT & STATS GRID */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Selected Unit Equipment Panel */}
                <div className="p-4 rounded-xl bg-slate-950 border border-amber-500/30 space-y-2.5 filigree-box">
                  <h4 className="font-serif text-xs font-bold text-amber-300 uppercase tracking-wider border-b border-slate-800 pb-1">
                    ⚔️ Member Equipment Loadout
                  </h4>
                  <div className="space-y-1.5">
                    <div className="equipment-pill p-2 flex items-center justify-between text-xs">
                      <span className="font-serif font-bold text-amber-200">
                        🗡️ {currentUnitGearConfig?.weapon || currentUnitClass?.recommendedEquipment[0] || 'Weapon Slot'}
                      </span>
                      <span className="text-[9px] font-mono text-amber-400">Weapon</span>
                    </div>
                    <div className="equipment-pill p-2 flex items-center justify-between text-xs">
                      <span className="font-serif font-bold text-amber-200">
                        🛡️ {currentUnitGearConfig?.shieldOrHelm || currentUnitClass?.recommendedEquipment[1] || 'Shield / Helm'}
                      </span>
                      <span className="text-[9px] font-mono text-cyan-400">Armor</span>
                    </div>
                    <div className="equipment-pill p-2 flex items-center justify-between text-xs">
                      <span className="font-serif font-bold text-amber-200">
                        👑 {currentUnitGearConfig?.accessory1 || currentUnitClass?.recommendedEquipment[2] || 'Accessory #1'}
                      </span>
                      <span className="text-[9px] font-mono text-emerald-400">Accessory</span>
                    </div>
                    <div className="equipment-pill p-2 flex items-center justify-between text-xs">
                      <span className="font-serif font-bold text-amber-200">
                        💍 {currentUnitGearConfig?.accessory2 || 'Accessory #2'}
                      </span>
                      <span className="text-[9px] font-mono text-purple-400">Accessory</span>
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
                    In-Game Tactics Programming Table for {currentUnitClass?.name}
                  </h4>
                  <span className="text-[10px] text-slate-400 font-sans">Click tactic row to inspect logic</span>
                </div>

                <div className="space-y-1.5 overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead className="text-[10px] font-serif text-slate-400 border-b border-slate-800">
                      <tr>
                        <th className="py-1 px-2">Priority</th>
                        <th className="py-1 px-2">Action Skill</th>
                        <th className="py-1 px-2">Condition 1</th>
                        <th className="py-1 px-2">Condition 2</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-900">
                      {displayedTactics.map((tac, idx) => {
                        const isActiveSkill = idx < 2; // First 2 active (Red), rest passive (Blue)
                        return (
                          <tr
                            key={idx}
                            onClick={() => setSelectedTacticsIndex(idx)}
                            className={`cursor-pointer transition ${
                              idx === selectedTacticsIndex ? 'bg-amber-500/10 font-bold' : 'hover:bg-slate-900'
                            }`}
                          >
                            <td className="py-2 px-2 font-serif font-extrabold text-amber-400 flex items-center gap-1">
                              <span className="text-sm">{tac.step}</span>
                              {isActiveSkill ? <span className="ap-diamond" /> : <span className="pp-diamond" />}
                            </td>

                            <td className="py-2 px-2">
                              <span
                                className={`px-3 py-1 text-xs block font-serif truncate ${
                                  isActiveSkill ? 'tactics-active-banner' : 'tactics-passive-banner'
                                }`}
                              >
                                {tac.skill}
                              </span>
                            </td>

                            <td className="py-2 px-2">
                              <span className="tactics-condition-banner px-2.5 py-1 block truncate">
                                {tac.condition1}
                              </span>
                            </td>

                            <td className="py-2 px-2">
                              <span className="tactics-condition-banner px-2.5 py-1 block truncate">
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
                  <div className="flex items-center justify-between border-b border-amber-500/30 pb-1.5">
                    <div className="flex items-center gap-2">
                      <Zap className="w-4 h-4 text-amber-400" />
                      <h4 className="font-serif font-bold text-sm text-amber-200">
                        {selectedTactic.unit} — {selectedTactic.skill}
                      </h4>
                    </div>
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/40">
                      Phys. Potency 150% • Hit Rate 100%
                    </span>
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
