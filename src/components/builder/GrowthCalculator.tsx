'use client';

import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Sliders, TrendingUp, Shield, Zap, Sparkles, Award } from 'lucide-react';
import { CLASSES_DATA } from '@/data/classes';
import { UnitClass } from '@/types';

export const GROWTH_TYPES = [
  { id: 'All-Rounder', name: 'All-Rounder', description: 'Balanced stat growth across all attributes.' },
  { id: 'Offensive', name: 'Offensive', description: 'Increases Physical Attack growth rate (+15%).' },
  { id: 'Keen', name: 'Keen', description: 'Increases Critical Rate growth rate (+15%).' },
  { id: 'Speedster', name: 'Speedster', description: 'Increases Initiative speed growth rate (+15%).' },
  { id: 'Guardian', name: 'Guardian', description: 'Increases HP & Physical Defense growth rate (+15%).' },
  { id: 'Hardy', name: 'Hardy', description: 'Specialized HP growth boost (+20%).' },
  { id: 'Brawny', name: 'Brawny', description: 'Specialized Physical Attack growth boost (+20%).' },
  { id: 'Go-Getter', name: 'Go-Getter', description: 'Specialized Initiative speed boost (+20%).' },
  { id: 'Technician', name: 'Technician', description: 'Specialized Magic Attack growth boost (+20%).' },
  { id: 'Lucky', name: 'Lucky', description: 'Specialized Evasion rate boost (+20%).' },
];

export const GrowthCalculator: React.FC = () => {
  const [selectedClassId, setSelectedClassId] = useState<string>(CLASSES_DATA[0].id);
  const [level, setLevel] = useState<number>(50);
  const [growth1, setGrowth1] = useState<string>('Offensive');
  const [growth2, setGrowth2] = useState<string>('Keen');

  const unitClass = useMemo(() => {
    return CLASSES_DATA.find((c) => c.id === selectedClassId) || CLASSES_DATA[0];
  }, [selectedClassId]);

  // Compute stats at given level with growth multipliers
  const calculatedStats = useMemo(() => {
    const base = unitClass.baseStats;
    const levelFactor = level / 50;

    let physAtkMult = 1;
    let magAtkMult = 1;
    let physDefMult = 1;
    let magDefMult = 1;
    let initMult = 1;
    let hpMult = 1;
    let critBonus = 0;
    let evasionBonus = 0;

    [growth1, growth2].forEach((g) => {
      if (g === 'Offensive') physAtkMult += 0.15;
      if (g === 'Brawny') physAtkMult += 0.2;
      if (g === 'Technician') magAtkMult += 0.2;
      if (g === 'Speedster') initMult += 0.15;
      if (g === 'Go-Getter') initMult += 0.2;
      if (g === 'Guardian') {
        hpMult += 0.15;
        physDefMult += 0.15;
      }
      if (g === 'Hardy') hpMult += 0.2;
      if (g === 'Keen') critBonus += 15;
      if (g === 'Lucky') evasionBonus += 20;
    });

    return {
      hp: Math.round(base.hp * levelFactor * hpMult),
      physAtk: Math.round(base.physAtk * levelFactor * physAtkMult),
      magAtk: Math.round(base.magAtk * levelFactor * magAtkMult),
      physDef: Math.round(base.physDef * levelFactor * physDefMult),
      magDef: Math.round(base.magDef * levelFactor * magDefMult),
      initiative: Math.round(base.initiative * initMult),
      evasion: Math.round(base.evasion + evasionBonus),
      critRate: Math.round(base.critRate + critBonus),
    };
  }, [unitClass, level, growth1, growth2]);

  return (
    <div className="p-6 rounded-2xl bg-slate-900 border border-amber-500/30 shadow-2xl space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <TrendingUp className="w-5 h-5 text-amber-400" />
            <h3 className="font-serif text-lg font-bold text-amber-200">
              Growth Type & Stat Progression Calculator
            </h3>
          </div>
          <p className="text-xs text-slate-300">
            Simulate Lv 1 to Lv 50 stat curves with dual growth type multipliers (Offensive, Keen, Speedster, Guardian).
          </p>
        </div>

        {/* Class Selector */}
        <div className="flex items-center gap-2">
          <span className="text-xs text-slate-400 font-semibold">Select Class:</span>
          <select
            value={selectedClassId}
            onChange={(e) => setSelectedClassId(e.target.value)}
            className="px-3 py-1.5 rounded-lg bg-slate-950 border border-amber-500/40 text-amber-300 font-serif font-bold text-xs focus:outline-none"
          >
            {CLASSES_DATA.map((cls) => (
              <option key={cls.id} value={cls.id}>
                {cls.name} ({cls.tier})
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Controls Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-slate-950 p-4 rounded-xl border border-slate-800">
        {/* Level Slider */}
        <div className="space-y-1.5">
          <div className="flex justify-between text-xs font-semibold">
            <span className="text-slate-400">Unit Level:</span>
            <span className="text-amber-300 font-mono">Lv {level}</span>
          </div>
          <input
            type="range"
            min={1}
            max={50}
            value={level}
            onChange={(e) => setLevel(parseInt(e.target.value))}
            className="w-full accent-amber-500 cursor-pointer"
          />
        </div>

        {/* Growth Type 1 */}
        <div className="space-y-1.5">
          <span className="text-xs text-slate-400 font-semibold block">Growth Type 1:</span>
          <select
            value={growth1}
            onChange={(e) => setGrowth1(e.target.value)}
            className="w-full px-3 py-1.5 rounded bg-slate-900 border border-slate-800 text-xs text-slate-200 focus:outline-none focus:border-amber-400"
          >
            {GROWTH_TYPES.map((g) => (
              <option key={g.id} value={g.id}>
                {g.name}
              </option>
            ))}
          </select>
        </div>

        {/* Growth Type 2 */}
        <div className="space-y-1.5">
          <span className="text-xs text-slate-400 font-semibold block">Growth Type 2:</span>
          <select
            value={growth2}
            onChange={(e) => setGrowth2(e.target.value)}
            className="w-full px-3 py-1.5 rounded bg-slate-900 border border-slate-800 text-xs text-slate-200 focus:outline-none focus:border-amber-400"
          >
            {GROWTH_TYPES.map((g) => (
              <option key={g.id} value={g.id}>
                {g.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Dynamic Stat Display Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="p-3.5 rounded-xl bg-slate-950 border border-emerald-500/30 text-center">
          <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-bold">HP (Hit Points)</span>
          <strong className="text-xl font-mono font-bold text-emerald-400">{calculatedStats.hp}</strong>
        </div>

        <div className="p-3.5 rounded-xl bg-slate-950 border border-amber-500/30 text-center">
          <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-bold">Physical Attack</span>
          <strong className="text-xl font-mono font-bold text-amber-300">{calculatedStats.physAtk}</strong>
        </div>

        <div className="p-3.5 rounded-xl bg-slate-950 border border-purple-500/30 text-center">
          <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-bold">Magic Attack</span>
          <strong className="text-xl font-mono font-bold text-purple-300">{calculatedStats.magAtk}</strong>
        </div>

        <div className="p-3.5 rounded-xl bg-slate-950 border border-cyan-500/30 text-center">
          <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-bold">Initiative Speed</span>
          <strong className="text-xl font-mono font-bold text-cyan-300">{calculatedStats.initiative}</strong>
        </div>

        <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 text-center">
          <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-bold">Physical Defense</span>
          <strong className="text-base font-mono font-bold text-slate-200">{calculatedStats.physDef}</strong>
        </div>

        <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 text-center">
          <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-bold">Magic Defense</span>
          <strong className="text-base font-mono font-bold text-slate-200">{calculatedStats.magDef}</strong>
        </div>

        <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 text-center">
          <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-bold">Evasion Rate</span>
          <strong className="text-base font-mono font-bold text-emerald-300">{calculatedStats.evasion}%</strong>
        </div>

        <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 text-center">
          <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-bold">Critical Rate</span>
          <strong className="text-base font-mono font-bold text-amber-400">{calculatedStats.critRate}%</strong>
        </div>
      </div>
    </div>
  );
};
