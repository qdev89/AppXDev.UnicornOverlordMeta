'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sword, Shield, Zap, Sparkles, Filter, X, ChevronRight, Award } from 'lucide-react';
import { CLASSES_DATA } from '@/data/classes';
import { UnitClass, UnitRole, UnitCategory, UnitTier } from '@/types';
import { GrowthCalculator } from '@/components/builder/GrowthCalculator';

export const ClassDatabase: React.FC = () => {
  const [selectedRole, setSelectedRole] = useState<string>('All');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedTier, setSelectedTier] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeModalUnit, setActiveModalUnit] = useState<UnitClass | null>(null);

  const roles = ['All', 'Tank', 'Physical DPS', 'Magic DPS', 'Debuffer', 'Support'];
  const categories = ['All', 'Infantry', 'Cavalry', 'Flying', 'Armored'];
  const tiers = ['All', 'SS', 'S', 'A+', 'A'];

  const filteredClasses = CLASSES_DATA.filter((c) => {
    const matchesRole = selectedRole === 'All' || c.role === selectedRole;
    const matchesCategory = selectedCategory === 'All' || c.category === selectedCategory;
    const matchesTier = selectedTier === 'All' || c.tier === selectedTier;
    const matchesQuery =
      c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.overview.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.activeSkills.some((s) => s.name.toLowerCase().includes(searchQuery.toLowerCase())) ||
      c.passiveSkills.some((s) => s.name.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesRole && matchesCategory && matchesTier && matchesQuery;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="relative rounded-2xl bg-gradient-to-r from-slate-950 via-slate-900 to-[#121826] p-6 sm:p-8 border border-purple-500/30 overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -z-10 pointer-events-none" />
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Sword className="w-6 h-6 text-purple-400" />
              <h2 className="font-serif text-2xl sm:text-3xl font-bold bg-gradient-to-r from-purple-200 via-purple-400 to-amber-300 bg-clip-text text-transparent">
                Class & Unit Compendium
              </h2>
            </div>
            <p className="text-sm text-slate-300 max-w-2xl font-sans">
              Comprehensive database of all promoted classes, active/passive AP/PP skills, initiative speeds, growth recommendations, and synergy paths.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="px-3 py-1.5 rounded-lg bg-purple-500/10 border border-purple-500/30 text-xs font-semibold text-purple-300">
              {CLASSES_DATA.length} Hero & Unit Classes
            </span>
          </div>
        </div>

        {/* Filters Bar */}
        <div className="mt-6 pt-6 border-t border-slate-800 space-y-4">
          <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
            <input
              type="text"
              placeholder="Search class name, skill, or trait..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="px-3.5 py-2 rounded-lg bg-slate-950 border border-purple-500/20 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-purple-400 w-full md:w-80"
            />

            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
              <span className="text-xs font-semibold text-slate-400">Role:</span>
              {roles.map((role) => (
                <button
                  key={role}
                  onClick={() => setSelectedRole(role)}
                  className={`px-3 py-1 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                    selectedRole === role
                      ? 'bg-purple-600 text-white shadow-md shadow-purple-500/20'
                      : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'
                  }`}
                >
                  {role}
                </button>
              ))}
            </div>
          </div>

          {/* Sub Filters: Movement Type & Tier */}
          <div className="flex flex-wrap items-center gap-4 text-xs">
            <div className="flex items-center gap-1.5">
              <span className="text-slate-400 font-medium">Movement Type:</span>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-2.5 py-1 rounded text-xs transition ${
                    selectedCategory === cat
                      ? 'bg-amber-500 text-slate-950 font-bold'
                      : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-1.5">
              <span className="text-slate-400 font-medium">Tier:</span>
              {tiers.map((tier) => (
                <button
                  key={tier}
                  onClick={() => setSelectedTier(tier)}
                  className={`px-2.5 py-1 rounded text-xs transition ${
                    selectedTier === tier
                      ? 'bg-purple-500 text-white font-bold'
                      : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-white'
                  }`}
                >
                  {tier}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Growth Type & Stat Calculator */}
      <GrowthCalculator />

      {/* Class Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredClasses.map((cls, idx) => (
          <motion.div
            key={cls.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25, delay: idx * 0.04 }}
            className="group relative rounded-xl bg-[#121826] border border-slate-800 hover:border-purple-500/50 p-5 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10"
          >
            <div className="space-y-4">
              {/* Header */}
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-slate-900 border border-purple-500/30 flex items-center justify-center text-2xl overflow-hidden relative shrink-0">
                    {cls.image ? (
                      <img
                        src={cls.image}
                        alt={cls.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = 'none';
                        }}
                      />
                    ) : (
                      cls.icon
                    )}
                  </div>
                  <div>
                    <h3 className="font-serif text-base font-bold text-slate-100 group-hover:text-purple-200 transition-colors">
                      {cls.name}
                    </h3>
                    <div className="flex items-center gap-1.5 mt-1">
                      <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-purple-500/20 text-purple-300 border border-purple-500/30">
                        {cls.role}
                      </span>
                      <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-slate-800 text-slate-400">
                        {cls.category}
                      </span>
                    </div>
                  </div>
                </div>

                <span
                  className={`px-2.5 py-1 rounded-md font-mono text-xs font-bold border ${
                    cls.tier === 'SS'
                      ? 'bg-amber-500/20 text-amber-300 border-amber-500/40'
                      : cls.tier === 'S'
                      ? 'bg-purple-500/20 text-purple-300 border-purple-500/40'
                      : 'bg-blue-500/20 text-blue-300 border-blue-500/40'
                  }`}
                >
                  {cls.tier}
                </span>
              </div>

              {/* Overview */}
              <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                {cls.overview}
              </p>

              {/* Base Stats Matrix */}
              <div className="grid grid-cols-4 gap-1.5 p-2.5 rounded-lg bg-slate-950 border border-slate-900 text-center font-mono text-[11px]">
                <div>
                  <span className="text-[9px] text-slate-500 block uppercase">HP</span>
                  <span className="text-emerald-400 font-semibold">{cls.baseStats.hp}</span>
                </div>
                <div>
                  <span className="text-[9px] text-slate-500 block uppercase">P.Atk</span>
                  <span className="text-amber-400 font-semibold">{cls.baseStats.physAtk}</span>
                </div>
                <div>
                  <span className="text-[9px] text-slate-500 block uppercase">M.Atk</span>
                  <span className="text-purple-400 font-semibold">{cls.baseStats.magAtk}</span>
                </div>
                <div>
                  <span className="text-[9px] text-slate-500 block uppercase">Init</span>
                  <span className="text-cyan-400 font-semibold">{cls.baseStats.initiative}</span>
                </div>
              </div>

              {/* Skills Count */}
              <div className="flex items-center justify-between text-xs text-slate-400 pt-1">
                <span>Active AP Skills: <strong className="text-amber-300 font-mono">{cls.activeSkills.length} Skills</strong></span>
                <span>Passive PP Skills: <strong className="text-purple-300 font-mono">{cls.passiveSkills.length} Skills</strong></span>
              </div>
            </div>

            {/* Action Trigger */}
            <button
              onClick={() => setActiveModalUnit(cls)}
              className="mt-4 w-full py-2.5 rounded-lg bg-slate-900 hover:bg-purple-950/60 border border-slate-800 hover:border-purple-500/40 text-slate-300 hover:text-purple-200 text-xs font-semibold flex items-center justify-center gap-2 transition-all group/btn"
            >
              <span>View Full Skill Breakdown & Synergies</span>
              <ChevronRight className="w-4 h-4 text-purple-400 group-hover/btn:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        ))}
      </div>

      {/* Class Detail Modal */}
      <AnimatePresence>
        {activeModalUnit && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="relative w-full max-w-3xl bg-[#0e1422] border border-purple-500/40 rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col p-6 space-y-6 overflow-y-auto no-scrollbar"
            >
              {/* Modal Header */}
              <div className="flex items-start justify-between border-b border-slate-800 pb-4">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-xl bg-slate-900 border border-purple-500/40 flex items-center justify-center text-4xl overflow-hidden relative shrink-0">
                    {activeModalUnit.image ? (
                      <img
                        src={activeModalUnit.image}
                        alt={activeModalUnit.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      activeModalUnit.icon
                    )}
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-slate-100">
                      {activeModalUnit.name}
                    </h3>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="px-2.5 py-0.5 rounded text-xs font-semibold bg-purple-500/20 text-purple-300 border border-purple-500/30">
                        {activeModalUnit.role}
                      </span>
                      <span className="px-2.5 py-0.5 rounded text-xs font-semibold bg-slate-800 text-slate-300">
                        {activeModalUnit.category}
                      </span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => setActiveModalUnit(null)}
                  className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Overview & Base Stats */}
              <div className="space-y-4">
                <p className="text-xs text-slate-300 leading-relaxed font-sans">
                  {activeModalUnit.overview}
                </p>

                {/* Base Stats Bar */}
                <div className="grid grid-cols-4 sm:grid-cols-8 gap-2 p-3 rounded-xl bg-slate-950 border border-slate-800 text-center font-mono text-xs">
                  <div>
                    <span className="text-[10px] text-slate-500 block uppercase">HP</span>
                    <strong className="text-emerald-400 font-bold">{activeModalUnit.baseStats.hp}</strong>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 block uppercase">P.Atk</span>
                    <strong className="text-amber-400 font-bold">{activeModalUnit.baseStats.physAtk}</strong>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 block uppercase">M.Atk</span>
                    <strong className="text-purple-400 font-bold">{activeModalUnit.baseStats.magAtk}</strong>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 block uppercase">P.Def</span>
                    <strong className="text-slate-300 font-bold">{activeModalUnit.baseStats.physDef}</strong>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 block uppercase">M.Def</span>
                    <strong className="text-slate-300 font-bold">{activeModalUnit.baseStats.magDef}</strong>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 block uppercase">Init</span>
                    <strong className="text-cyan-400 font-bold">{activeModalUnit.baseStats.initiative}</strong>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 block uppercase">Evade</span>
                    <strong className="text-emerald-300 font-bold">{activeModalUnit.baseStats.evasion}%</strong>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 block uppercase">Crit</span>
                    <strong className="text-amber-300 font-bold">{activeModalUnit.baseStats.critRate}%</strong>
                  </div>
                </div>
              </div>

              {/* Active AP Skills */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-amber-300 mb-3 flex items-center gap-2">
                  <Zap className="w-4 h-4 text-amber-400" />
                  <span>Active AP Skills</span>
                </h4>
                <div className="space-y-2">
                  {activeModalUnit.activeSkills.map((skill, i) => (
                    <div
                      key={i}
                      className="p-3 rounded-lg bg-slate-950 border border-slate-800 space-y-1"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-xs text-amber-200">{skill.name}</span>
                        <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 font-mono text-[10px] font-bold">
                          {skill.apCost} AP • {skill.potency}% Potency
                        </span>
                      </div>
                      <p className="text-xs text-slate-300">{skill.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Passive PP Skills */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-purple-300 mb-3 flex items-center gap-2">
                  <Shield className="w-4 h-4 text-purple-400" />
                  <span>Passive PP Skills</span>
                </h4>
                <div className="space-y-2">
                  {activeModalUnit.passiveSkills.map((skill, i) => (
                    <div
                      key={i}
                      className="p-3 rounded-lg bg-slate-950 border border-slate-800 space-y-1"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-xs text-purple-200">{skill.name}</span>
                          {skill.isStartOfBattle && (
                            <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-red-500/20 text-red-300 border border-red-500/40">
                              [Start of Battle]
                            </span>
                          )}
                        </div>
                        <span className="text-xs text-slate-400">Trigger: {skill.trigger}</span>
                      </div>
                      <p className="text-xs text-slate-300">{skill.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recommended Equipment */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Recommended Equipment
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeModalUnit.recommendedEquipment.map((eq, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded bg-slate-950 border border-slate-800 text-slate-200 text-xs"
                    >
                      🗡️ {eq}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
