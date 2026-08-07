'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Sparkles, Zap, CheckCircle2, XCircle, ShieldAlert, ArrowRight, Filter } from 'lucide-react';
import { SQUADS_DATA } from '@/data/squads';
import { CLASSES_DATA } from '@/data/classes';
import { SquadBuild } from '@/types';

interface MetaCompositionsProps {
  onLoadIntoBuilder: (squad: SquadBuild) => void;
}

export const MetaCompositions: React.FC<MetaCompositionsProps> = ({ onLoadIntoBuilder }) => {
  const [selectedArchetype, setSelectedArchetype] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const archetypes = [
    'All',
    'Instant Board Wipe',
    'Heavy Sustain',
    'Cavalry Burst',
    'Affliction Control',
    'Magic Nuke',
  ];

  const filteredSquads = SQUADS_DATA.filter((squad) => {
    const matchesArchetype = selectedArchetype === 'All' || squad.archetype === selectedArchetype;
    const matchesQuery =
      squad.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      squad.keyItems.some((item) => item.toLowerCase().includes(searchQuery.toLowerCase())) ||
      squad.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesArchetype && matchesQuery;
  });

  const getUnitClass = (unitId: string | null) => {
    if (!unitId) return null;
    return CLASSES_DATA.find((c) => c.id === unitId) || null;
  };

  return (
    <div className="space-y-6">
      {/* Page Title & Hero Header */}
      <div className="relative rounded-2xl bg-gradient-to-r from-slate-950 via-slate-900 to-[#121826] p-6 sm:p-8 border border-amber-500/30 overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl -z-10 pointer-events-none" />
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Shield className="w-6 h-6 text-amber-400" />
              <h2 className="font-serif text-2xl sm:text-3xl font-bold bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 bg-clip-text text-transparent">
                Meta Compositions & Master Tactics
              </h2>
            </div>
            <p className="text-sm text-slate-300 max-w-2xl font-sans">
              Discover top-tier 5-unit formation archetypes, condition execution sequences, and core required relics for story and competitive PvP domination.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="px-3 py-1.5 rounded-lg bg-amber-500/10 border border-amber-500/30 text-xs font-semibold text-amber-300 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-amber-400" />
              {SQUADS_DATA.length} Pre-Loaded Meta Squads
            </span>
          </div>
        </div>

        {/* Filter Chips Bar */}
        <div className="mt-6 pt-6 border-t border-slate-800 flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
            <Filter className="w-4 h-4 text-slate-400 shrink-0" />
            {archetypes.map((archetype) => (
              <button
                key={archetype}
                onClick={() => setSelectedArchetype(archetype)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                  selectedArchetype === archetype
                    ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                    : 'bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-white hover:border-amber-500/30'
                }`}
              >
                {archetype}
              </button>
            ))}
          </div>

          <input
            type="text"
            placeholder="Filter squad by item, name, key skill..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="px-3.5 py-1.5 rounded-lg bg-slate-950 border border-amber-500/20 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-amber-400 w-full md:w-64"
          />
        </div>
      </div>

      {/* Squad Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredSquads.map((squad, idx) => (
          <motion.div
            key={squad.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: idx * 0.05 }}
            className="group relative rounded-xl bg-slate-900/80 border border-amber-500/20 hover:border-amber-400/50 hover:shadow-[0_0_20px_rgba(245,158,11,0.15)] transition-all duration-300 overflow-hidden flex flex-col justify-between"
          >
            {/* Squad Header */}
            <div className="p-5 border-b border-slate-800/80 bg-slate-950/60">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-serif text-lg font-bold text-amber-200 group-hover:text-amber-300 transition">
                      {squad.name}
                    </h3>
                    <span className="text-xs px-2 py-0.5 rounded font-mono font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                      Tier {squad.tier}
                    </span>
                  </div>
                  <span className="inline-block text-[11px] font-semibold px-2 py-0.5 rounded bg-purple-950/60 text-purple-300 border border-purple-800/40">
                    {squad.archetype}
                  </span>
                </div>

                <button
                  onClick={() => onLoadIntoBuilder(squad)}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs shadow-md hover:shadow-amber-500/30 transition-all"
                >
                  <Zap className="w-3.5 h-3.5 fill-slate-950" />
                  <span>Load into Builder</span>
                </button>
              </div>

              <p className="mt-2.5 text-xs text-slate-300 leading-relaxed">{squad.description}</p>
            </div>

            <div className="p-5 space-y-5 flex-1">
              {/* Visual 2x3 Formation Grid */}
              <div>
                <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2 flex items-center justify-between">
                  <span>Squad Formation (2 Front / 3 Back)</span>
                  <span className="text-[10px] text-amber-400/80 font-normal">Click unit to view class</span>
                </div>

                <div className="grid grid-cols-2 gap-3 p-3 rounded-lg bg-slate-950/90 border border-slate-800">
                  {/* Front Row (2 slots) */}
                  <div className="space-y-2">
                    <div className="text-[10px] font-bold text-amber-400/70 uppercase text-center tracking-wider">
                      Front Row (Tank/Engage)
                    </div>
                    <div className="grid grid-cols-1 gap-2">
                      {squad.frontRow.map((unitId, i) => {
                        const unit = getUnitClass(unitId);
                        return (
                          <div
                            key={i}
                            className={`p-2 rounded border text-xs flex items-center justify-between ${
                              unit
                                ? 'bg-slate-900 border-amber-500/30 text-slate-100'
                                : 'bg-slate-950/50 border-slate-800 border-dashed text-slate-600'
                            }`}
                          >
                            {unit ? (
                              <div className="flex items-center gap-2">
                                <div className="w-6 h-6 rounded bg-slate-950 border border-amber-500/40 flex items-center justify-center overflow-hidden text-xs relative shrink-0">
                                  {unit.image ? (
                                    <img src={unit.image} alt={unit.name} className="w-full h-full object-cover" />
                                  ) : (
                                    unit.icon
                                  )}
                                </div>
                                <span className="font-semibold text-xs text-amber-200 truncate">
                                  {unit.name}
                                </span>
                              </div>
                            ) : (
                              <span className="text-[11px]">Empty Slot</span>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Back Row (3 slots) */}
                  <div className="space-y-2">
                    <div className="text-[10px] font-bold text-purple-400/70 uppercase text-center tracking-wider">
                      Back Row (DPS/Support)
                    </div>
                    <div className="grid grid-cols-1 gap-2">
                      {squad.backRow.map((unitId, i) => {
                        const unit = getUnitClass(unitId);
                        return (
                          <div
                            key={i}
                            className={`p-2 rounded border text-xs flex items-center justify-between ${
                              unit
                                ? 'bg-slate-900 border-purple-500/30 text-slate-100'
                                : 'bg-slate-950/50 border-slate-800 border-dashed text-slate-600'
                            }`}
                          >
                            {unit ? (
                              <div className="flex items-center gap-2">
                                <div className="w-6 h-6 rounded bg-slate-950 border border-purple-500/40 flex items-center justify-center overflow-hidden text-xs relative shrink-0">
                                  {unit.image ? (
                                    <img src={unit.image} alt={unit.name} className="w-full h-full object-cover" />
                                  ) : (
                                    unit.icon
                                  )}
                                </div>
                                <span className="font-semibold text-xs text-purple-200 truncate">
                                  {unit.name}
                                </span>
                              </div>
                            ) : (
                              <span className="text-[11px]">Empty Slot</span>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>

              {/* Key Core Relics */}
              <div>
                <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Required Core Relics & Items
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {squad.keyItems.map((item, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold"
                    >
                      👑 {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Tactics Execution Sequence */}
              <div>
                <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
                  <span>Tactics Execution Sequence</span>
                </div>
                <div className="space-y-2 bg-slate-950/80 p-3 rounded-lg border border-slate-800 text-xs">
                  {squad.tacticsSequence.map((step) => (
                    <div
                      key={step.step}
                      className="flex flex-col sm:flex-row sm:items-center justify-between p-2 rounded bg-slate-900/60 border border-slate-800/60 gap-2"
                    >
                      <div className="flex items-center gap-2">
                        <span className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold text-[10px]">
                          {step.step}
                        </span>
                        <span className="font-semibold text-slate-200">{step.unit}</span>
                        <span className="text-amber-300 font-mono text-[11px]">{step.skill}</span>
                      </div>

                      <div className="flex items-center gap-1.5 flex-wrap">
                        <span className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 font-mono text-[10px]">
                          {step.condition1}
                        </span>
                        <span className="px-1.5 py-0.5 rounded bg-purple-950 text-purple-300 border border-purple-800/40 font-mono text-[10px]">
                          {step.condition2}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pros & Cons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-slate-800">
                <div className="space-y-1">
                  <div className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" /> Pros
                  </div>
                  <ul className="space-y-1 text-slate-300 text-[11px]">
                    {squad.pros.map((pro, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-emerald-400">•</span> {pro}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-1">
                  <div className="text-[10px] font-bold text-red-400 uppercase tracking-wider flex items-center gap-1">
                    <XCircle className="w-3 h-3" /> Counters & Weaknesses
                  </div>
                  <ul className="space-y-1 text-slate-300 text-[11px]">
                    {squad.counters.map((c, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-red-400">•</span> {c}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
