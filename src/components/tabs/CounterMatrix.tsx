'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Swords, ShieldAlert, CheckCircle2, ArrowRight, Zap, Lightbulb } from 'lucide-react';
import { COUNTERS_DATA } from '@/data/counters';
import { CLASSES_DATA } from '@/data/classes';

export const CounterMatrix: React.FC = () => {
  const [selectedCounterId, setSelectedCounterId] = useState<string>(COUNTERS_DATA[0].id);

  const activeCounter = COUNTERS_DATA.find((c) => c.id === selectedCounterId) || COUNTERS_DATA[0];

  const getUnitClass = (unitId: string) => {
    return CLASSES_DATA.find((c) => c.id === unitId) || null;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="relative rounded-2xl bg-gradient-to-r from-slate-950 via-slate-900 to-[#121826] p-6 sm:p-8 border border-red-500/30 overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-500/10 rounded-full blur-3xl -z-10 pointer-events-none" />
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Swords className="w-6 h-6 text-red-400" />
              <h2 className="font-serif text-2xl sm:text-3xl font-bold bg-gradient-to-r from-red-200 via-amber-300 to-amber-500 bg-clip-text text-transparent">
                Coliseum & Counter Matrix Hub
              </h2>
            </div>
            <p className="text-sm text-slate-300 max-w-2xl font-sans">
              Instant tactical decision engine. Select an oppressive enemy PvP or boss composition archetype to get tailored counters, key class picks, relic items, and tactics condition logic.
            </p>
          </div>
        </div>

        {/* Enemy Archetype Selectors */}
        <div className="mt-6 pt-6 border-t border-slate-800 flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
          <span className="text-xs font-semibold text-slate-400 shrink-0">Enemy Threat:</span>
          {COUNTERS_DATA.map((counter) => {
            const isSelected = selectedCounterId === counter.id;
            return (
              <button
                key={counter.id}
                onClick={() => setSelectedCounterId(counter.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-2 ${
                  isSelected
                    ? 'bg-gradient-to-r from-red-600 to-amber-600 text-white shadow-lg shadow-red-500/20 font-bold scale-105'
                    : 'bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-white hover:border-red-500/40'
                }`}
              >
                <ShieldAlert className="w-4 h-4 text-amber-300" />
                <span>{counter.enemyArchetype}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Counter Analysis Card */}
      <motion.div
        key={activeCounter.id}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="rounded-2xl bg-slate-900/80 border border-red-500/30 p-6 sm:p-8 space-y-6 shadow-2xl"
      >
        {/* Threat Header */}
        <div className="p-5 rounded-xl bg-slate-950 border border-red-500/30 space-y-2">
          <div className="flex items-center gap-2 text-red-400 text-xs font-bold uppercase tracking-wider">
            <ShieldAlert className="w-4 h-4" />
            <span>Target Enemy Threat Breakdown</span>
          </div>
          <h3 className="font-serif text-xl font-bold text-slate-100">
            vs. {activeCounter.enemyArchetype}
          </h3>
          <p className="text-sm text-slate-300 leading-relaxed">
            {activeCounter.threatDescription}
          </p>
        </div>

        {/* Pro Tip Callout */}
        <div className="p-4 rounded-xl bg-amber-950/40 border border-amber-500/40 flex items-start gap-3">
          <Lightbulb className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
          <div>
            <h4 className="font-bold text-xs uppercase text-amber-300 tracking-wider">
              Master Tactics Secret
            </h4>
            <p className="text-xs text-amber-100/90 leading-relaxed mt-0.5">
              {activeCounter.tacticalTip}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Key Counter Mechanics */}
          <div className="space-y-3 p-5 rounded-xl bg-slate-950 border border-slate-800">
            <h4 className="font-serif text-sm font-bold text-amber-300 uppercase tracking-wider flex items-center gap-2 border-b border-slate-800 pb-2">
              <CheckCircle2 className="w-4 h-4 text-amber-400" />
              <span>Core Counter Principles</span>
            </h4>
            <ul className="space-y-2">
              {activeCounter.keyCounters.map((kc, i) => (
                <li key={i} className="flex items-start gap-2 text-xs text-slate-200">
                  <span className="text-amber-400 font-bold">•</span>
                  <span>{kc}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Key Recommended Classes */}
          <div className="space-y-3 p-5 rounded-xl bg-slate-950 border border-slate-800">
            <h4 className="font-serif text-sm font-bold text-purple-300 uppercase tracking-wider flex items-center gap-2 border-b border-slate-800 pb-2">
              <Zap className="w-4 h-4 text-purple-400" />
              <span>Recommended Counter Heroes</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {activeCounter.recommendedUnits.map((unitId, i) => {
                const cls = getUnitClass(unitId);
                return (
                  <div
                    key={i}
                    className="p-2.5 rounded-lg bg-slate-900 border border-purple-500/30 flex items-center gap-2"
                  >
                    <span className="text-xl">{cls?.icon || '⚔️'}</span>
                    <div>
                      <h5 className="font-semibold text-xs text-purple-200">{cls?.name || unitId}</h5>
                      <span className="text-[10px] text-slate-400">{cls?.role}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Must Have Relic Items */}
        <div className="space-y-3">
          <h4 className="font-serif text-sm font-bold text-slate-300 uppercase tracking-wider">
            Must-Have Counter Equipment
          </h4>
          <div className="flex flex-wrap gap-2">
            {activeCounter.mustHaveItems.map((item, i) => (
              <span
                key={i}
                className="px-3 py-1.5 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-300 font-semibold text-xs"
              >
                👑 {item}
              </span>
            ))}
          </div>
        </div>

        {/* Tactics Condition Setups */}
        <div className="space-y-3 pt-4 border-t border-slate-800">
          <h4 className="font-serif text-sm font-bold text-slate-300 uppercase tracking-wider flex items-center gap-2">
            <ArrowRight className="w-4 h-4 text-amber-400" />
            <span>Optimal Tactics Condition Setup</span>
          </h4>
          <div className="space-y-2">
            {activeCounter.tacticsConditions.map((tc, i) => (
              <div
                key={i}
                className="p-3 rounded-lg bg-slate-950 border border-slate-800 text-xs font-mono text-amber-300 flex items-center gap-2"
              >
                <span className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 font-bold flex items-center justify-center text-[10px] shrink-0">
                  {i + 1}
                </span>
                <span>{tc}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};
