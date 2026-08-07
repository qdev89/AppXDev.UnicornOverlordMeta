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
      <div className="relative rounded-2xl bg-gradient-to-r from-slate-950 via-[#18090f] to-slate-950 p-6 sm:p-8 border border-red-500/40 overflow-hidden shadow-2xl filigree-box">
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-500/10 rounded-full blur-3xl -z-10 pointer-events-none" />
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Swords className="w-7 h-7 text-red-400 drop-shadow-[0_0_10px_rgba(248,113,113,0.6)]" />
              <h2 className="font-serif text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-red-200 via-amber-300 to-amber-500 bg-clip-text text-transparent">
                Coliseum & Counter Matrix Hub
              </h2>
            </div>
            <p className="text-sm text-slate-300 max-w-2xl font-sans leading-relaxed">
              Instant tactical decision engine. Select an oppressive enemy PvP or boss composition archetype to get tailored counters, key class picks, relic items, and tactics condition logic.
            </p>
          </div>
        </div>

        {/* Enemy Archetype Selectors */}
        <div className="mt-6 pt-6 border-t border-slate-800 flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
          <span className="text-xs font-serif font-bold text-amber-300 shrink-0">Enemy Threat:</span>
          {COUNTERS_DATA.map((counter) => {
            const isSelected = selectedCounterId === counter.id;
            return (
              <button
                key={counter.id}
                onClick={() => setSelectedCounterId(counter.id)}
                className={`px-4 py-2 rounded-xl text-xs font-serif font-bold whitespace-nowrap transition-all flex items-center gap-2 ${
                  isSelected
                    ? 'bg-gradient-to-r from-red-600 to-amber-600 text-slate-950 shadow-lg shadow-red-500/30 font-extrabold border border-amber-300 scale-105'
                    : 'bg-slate-950/80 border border-slate-800 text-slate-300 hover:text-white hover:border-red-500/40'
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
        className="rounded-2xl bg-gradient-to-b from-[#101728] to-[#070b16] border border-red-500/40 p-6 sm:p-8 space-y-6 shadow-2xl filigree-box filigree-bottom"
      >
        {/* Threat Header */}
        <div className="p-5 rounded-xl bg-slate-950 border border-red-500/30 space-y-2">
          <div className="flex items-center gap-2 text-red-400 text-xs font-serif font-bold uppercase tracking-wider">
            <ShieldAlert className="w-4 h-4" />
            <span>Target Enemy Threat Breakdown</span>
          </div>
          <h3 className="font-serif text-xl font-bold text-slate-100">
            vs. {activeCounter.enemyArchetype}
          </h3>
          <p className="text-xs text-slate-300 leading-relaxed font-sans">
            {activeCounter.threatDescription}
          </p>
        </div>

        {/* Pro Tip Callout */}
        <div className="p-4 rounded-xl bg-gradient-to-r from-amber-950/40 via-slate-900 to-purple-950/40 border border-amber-500/40 flex items-start gap-3 shadow">
          <Lightbulb className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
          <div>
            <h4 className="font-serif font-bold text-xs uppercase text-amber-300 tracking-wider">
              Master Tactics Secret
            </h4>
            <p className="text-xs text-amber-100/90 leading-relaxed mt-0.5 font-sans">
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
                    className="p-2.5 rounded-xl bg-slate-900 border border-purple-500/30 flex items-center gap-2"
                  >
                    <span className="text-xl">{cls?.icon || '⚔️'}</span>
                    <div>
                      <h5 className="font-serif font-bold text-xs text-purple-200">{cls?.name || unitId}</h5>
                      <span className="text-[10px] text-slate-400 font-serif">{cls?.role}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Must Have Relic Items */}
        <div className="space-y-3">
          <h4 className="font-serif text-sm font-bold text-amber-300 uppercase tracking-wider">
            Must-Have Counter Equipment
          </h4>
          <div className="flex flex-wrap gap-2">
            {activeCounter.mustHaveItems.map((item, i) => (
              <div
                key={i}
                className="equipment-pill px-3 py-1.5 flex items-center gap-2 text-amber-200 text-xs"
              >
                <span className="text-amber-400">👑</span>
                <span className="font-serif font-bold">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tactics Condition Setups */}
        <div className="space-y-3 pt-4 border-t border-slate-800">
          <h4 className="font-serif text-sm font-bold text-amber-300 uppercase tracking-wider flex items-center gap-2">
            <ArrowRight className="w-4 h-4 text-amber-400" />
            <span>Optimal Tactics Condition Setup</span>
          </h4>
          <div className="space-y-2">
            {activeCounter.tacticsConditions.map((tc, i) => (
              <div
                key={i}
                className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono text-amber-300 flex items-center gap-2"
              >
                <span className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 font-bold flex items-center justify-center text-[10px] shrink-0 font-sans">
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
