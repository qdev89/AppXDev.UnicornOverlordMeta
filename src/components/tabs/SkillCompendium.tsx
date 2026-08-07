'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, Zap, Shield, Sparkles, Swords, Award, AlertCircle, Bookmark } from 'lucide-react';
import { SKILLS_DATA } from '@/data/skills';
import { GameSkill } from '@/types';

export const SkillCompendium: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedType, setSelectedType] = useState<string>('All');
  const [selectedFlag, setSelectedFlag] = useState<string>('All');

  const allFlags = useMemo(() => {
    const flagsSet = new Set<string>();
    SKILLS_DATA.forEach((s) => s.flags.forEach((f) => flagsSet.add(f)));
    return Array.from(flagsSet);
  }, []);

  const filteredSkills = useMemo(() => {
    return SKILLS_DATA.filter((skill) => {
      const matchesSearch =
        skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        skill.classSource.toLowerCase().includes(searchQuery.toLowerCase()) ||
        skill.description.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesType =
        selectedType === 'All' ||
        (selectedType === 'Active' && skill.type === 'Active') ||
        (selectedType === 'Passive' && skill.type === 'Passive') ||
        (selectedType === 'Start of Battle' && skill.type === 'Start of Battle') ||
        (selectedType === 'Valor' && skill.type === 'Valor');

      const matchesFlag = selectedFlag === 'All' || skill.flags.includes(selectedFlag);

      return matchesSearch && matchesType && matchesFlag;
    });
  }, [searchQuery, selectedType, selectedFlag]);

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-slate-950 via-slate-900 to-[#121826] border border-amber-500/30 shadow-2xl relative overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Zap className="w-6 h-6 text-amber-400" />
              <h2 className="font-serif text-2xl font-bold text-amber-200">
                Skills & Tactics Compendium
              </h2>
            </div>
            <p className="text-xs text-slate-300 max-w-2xl leading-relaxed">
              Explore all active AP attacks, passive PP triggers, Start-of-Battle passives, and field Valor skills across all promoted classes in Unicorn Overlord.
            </p>
          </div>
          <div className="px-4 py-2 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono font-bold shrink-0">
            {SKILLS_DATA.length} Total Master Skills
          </div>
        </div>
      </div>

      {/* Filter Controls Bar */}
      <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-3">
        <div className="flex flex-col md:flex-row items-center justify-between gap-3">
          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search skills, classes, or descriptions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-lg bg-slate-950 border border-slate-800 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-amber-400 transition"
            />
          </div>

          {/* Type Buttons */}
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar w-full md:w-auto">
            {['All', 'Active', 'Passive', 'Start of Battle', 'Valor'].map((type) => (
              <button
                key={type}
                onClick={() => setSelectedType(type)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition shrink-0 ${
                  selectedType === type
                    ? 'bg-amber-500 text-slate-950 shadow-md'
                    : 'bg-slate-950 border border-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Flag Filters */}
        <div className="flex items-center gap-2 pt-2 border-t border-slate-800/60 overflow-x-auto no-scrollbar">
          <span className="text-[10px] font-bold text-slate-500 uppercase shrink-0">Filter Flag:</span>
          <button
            onClick={() => setSelectedFlag('All')}
            className={`px-2 py-0.5 rounded text-[10px] font-bold transition ${
              selectedFlag === 'All'
                ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            All Flags
          </button>
          {allFlags.slice(0, 10).map((flag) => (
            <button
              key={flag}
              onClick={() => setSelectedFlag(flag)}
              className={`px-2 py-0.5 rounded text-[10px] font-mono transition shrink-0 ${
                selectedFlag === flag
                  ? 'bg-purple-500/20 text-purple-300 border border-purple-500/40'
                  : 'bg-slate-950 text-slate-400 hover:text-slate-200 border border-slate-800'
              }`}
            >
              {flag}
            </button>
          ))}
        </div>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredSkills.map((skill) => (
          <motion.div
            key={skill.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`p-4 rounded-xl border transition-all flex flex-col justify-between ${
              skill.type === 'Active'
                ? 'bg-slate-900/90 border-amber-500/30 hover:border-amber-400'
                : skill.type === 'Start of Battle'
                ? 'bg-slate-900/90 border-rose-500/40 hover:border-rose-400'
                : skill.type === 'Valor'
                ? 'bg-slate-900/90 border-cyan-500/40 hover:border-cyan-400'
                : 'bg-slate-900/90 border-purple-500/30 hover:border-purple-400'
            }`}
          >
            <div className="space-y-3">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-serif text-base font-bold text-amber-200">{skill.name}</h3>
                  <span className="text-[10px] text-slate-400 font-semibold block mt-0.5">
                    Class Source: <strong className="text-slate-200">{skill.classSource}</strong>
                  </span>
                </div>

                <div className="flex items-center gap-1.5 shrink-0">
                  <span
                    className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold border ${
                      skill.type === 'Active'
                        ? 'bg-amber-500/20 text-amber-300 border-amber-500/40'
                        : skill.type === 'Start of Battle'
                        ? 'bg-rose-500/20 text-rose-300 border-rose-500/40'
                        : skill.type === 'Valor'
                        ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40'
                        : 'bg-purple-500/20 text-purple-300 border-purple-500/40'
                    }`}
                  >
                    {skill.cost}
                  </span>
                </div>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed font-sans">{skill.description}</p>

              {skill.potency && skill.potency > 0 ? (
                <div className="flex items-center gap-3 text-[11px] font-mono text-slate-400 border-t border-slate-800/60 pt-2">
                  <span>Potency: <strong className="text-amber-300">{skill.potency}%</strong></span>
                  {skill.target && <span>Target: <strong className="text-slate-200">{skill.target}</strong></span>}
                </div>
              ) : null}
            </div>

            <div className="flex items-center gap-1.5 flex-wrap pt-3 mt-2 border-t border-slate-800/40">
              {skill.flags.map((flag, idx) => (
                <span
                  key={idx}
                  className="px-2 py-0.5 rounded bg-slate-950 border border-slate-800 text-slate-400 text-[10px] font-mono"
                >
                  {flag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
