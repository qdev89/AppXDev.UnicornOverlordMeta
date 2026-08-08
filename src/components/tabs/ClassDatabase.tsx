'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sword,
  Shield,
  Zap,
  Sparkles,
  Filter,
  X,
  ChevronRight,
  Award,
  Crown,
  Layers,
  ArrowRight,
  Users,
  Heart,
  ExternalLink,
  BookOpen,
} from 'lucide-react';
import { CLASSES_DATA } from '@/data/classes';
import { SQUADS_DATA } from '@/data/squads';
import { UnitClass, SquadBuild } from '@/types';
import { GrowthCalculator } from '@/components/builder/GrowthCalculator';
import { BuildDetailModal } from '@/components/builder/BuildDetailModal';

interface ClassDatabaseProps {
  onLoadIntoBuilder?: (squad: SquadBuild) => void;
}

export const ClassDatabase: React.FC<ClassDatabaseProps> = ({ onLoadIntoBuilder }) => {
  const [selectedRole, setSelectedRole] = useState<string>('All');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedTier, setSelectedTier] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeModalUnit, setActiveModalUnit] = useState<UnitClass | null>(null);
  const [selectedSquadForModal, setSelectedSquadForModal] = useState<SquadBuild | null>(null);

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

  // Find meta squads for a specific unit
  const getRecommendedMetaSquads = (unitId: string): SquadBuild[] => {
    const directMatches = SQUADS_DATA.filter(
      (sq) =>
        sq.frontRow.includes(unitId) ||
        sq.backRow.includes(unitId) ||
        sq.description.toLowerCase().includes(unitId.toLowerCase()) ||
        sq.name.toLowerCase().includes(unitId.toLowerCase())
    );

    if (directMatches.length > 0) return directMatches;

    // Fallback: Return top tier meta squads matching unit role
    return SQUADS_DATA.slice(0, 2);
  };

  const getUnitClassById = (uId: string | null) => {
    if (!uId) return null;
    return CLASSES_DATA.find((c) => c.id === uId) || null;
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="relative rounded-2xl bg-gradient-to-r from-slate-950 via-[#101728] to-slate-950 p-6 sm:p-8 border border-purple-500/40 overflow-hidden shadow-2xl filigree-box">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -z-10 pointer-events-none" />
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Sword className="w-7 h-7 text-purple-400 drop-shadow-[0_0_10px_rgba(168,85,247,0.6)]" />
              <h2 className="font-serif text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-purple-200 via-purple-400 to-amber-300 bg-clip-text text-transparent">
                Class & Unit Compendium
              </h2>
            </div>
            <p className="text-sm text-slate-300 max-w-2xl font-sans leading-relaxed">
              Master unit guide with recommended equipment loadouts, optimal growth stat combinations, AP/PP skill trees, and recommended meta team compositions for every hero class.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="px-3.5 py-2 rounded-xl bg-purple-500/10 border border-purple-500/30 text-xs font-serif font-bold text-purple-300 flex items-center gap-2 shadow">
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span>{CLASSES_DATA.length} Hero & Unit Classes</span>
            </span>
          </div>
        </div>

        {/* Filters Bar */}
        <div className="mt-6 pt-6 border-t border-slate-800 space-y-4">
          <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
            <input
              type="text"
              placeholder="Search class name, skill, equipment, or trait..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="px-4 py-2 rounded-xl bg-slate-950 border border-purple-500/30 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-purple-400 w-full md:w-80 shadow-inner"
            />

            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
              <span className="text-xs font-serif font-bold text-amber-300">Role:</span>
              {roles.map((role) => (
                <button
                  key={role}
                  onClick={() => setSelectedRole(role)}
                  className={`px-3 py-1 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                    selectedRole === role
                      ? 'bg-purple-600 text-white shadow-md shadow-purple-500/20 font-bold'
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
              <span className="text-slate-400 font-serif font-bold">Category:</span>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-medium transition ${
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
              <span className="text-slate-400 font-serif font-bold">Tier:</span>
              {tiers.map((tier) => (
                <button
                  key={tier}
                  onClick={() => setSelectedTier(tier)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-medium transition ${
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

      {/* Interactive Growth Calculator */}
      <GrowthCalculator />

      {/* Class Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredClasses.map((cls, idx) => (
          <motion.div
            key={cls.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25, delay: idx * 0.03 }}
            className="group relative rounded-2xl bg-gradient-to-b from-[#101728] to-[#070b16] border border-purple-500/30 hover:border-purple-400/70 p-5 flex flex-col justify-between transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] filigree-box"
          >
            <div className="space-y-4">
              {/* Card Header */}
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-slate-950 border border-purple-500/40 flex items-center justify-center text-2xl overflow-hidden relative shrink-0 shadow">
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
                      <span className="px-2 py-0.5 rounded text-[10px] font-serif font-bold bg-purple-500/20 text-purple-300 border border-purple-500/40">
                        {cls.role}
                      </span>
                      <span className="px-2 py-0.5 rounded text-[10px] font-serif font-bold bg-slate-800 text-slate-300">
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
                  Tier {cls.tier}
                </span>
              </div>

              {/* Overview */}
              <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                {cls.overview}
              </p>

              {/* Base Stats Matrix */}
              <div className="grid grid-cols-4 gap-1.5 p-2.5 rounded-xl bg-slate-950 border border-slate-900 text-center font-mono text-[11px]">
                <div>
                  <span className="text-[9px] text-slate-400 block font-serif font-bold">HP</span>
                  <span className="text-emerald-400 font-bold">{cls.baseStats.hp}</span>
                </div>
                <div>
                  <span className="text-[9px] text-slate-400 block font-serif font-bold">PATK</span>
                  <span className="text-amber-400 font-bold">{cls.baseStats.physAtk}</span>
                </div>
                <div>
                  <span className="text-[9px] text-slate-400 block font-serif font-bold">MATK</span>
                  <span className="text-purple-400 font-bold">{cls.baseStats.magAtk}</span>
                </div>
                <div>
                  <span className="text-[9px] text-slate-400 block font-serif font-bold">SPD</span>
                  <span className="text-cyan-400 font-bold">{cls.baseStats.initiative}</span>
                </div>
              </div>

              {/* Recommended Equipment Highlights */}
              <div className="pt-1">
                <span className="text-[10px] font-serif font-bold text-amber-300/80 uppercase tracking-wider block mb-1">
                  👑 Recommended Gear:
                </span>
                <div className="flex flex-wrap gap-1">
                  {cls.recommendedEquipment.slice(0, 2).map((item, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 rounded bg-slate-950 border border-amber-500/30 text-amber-200 text-[10px] font-semibold truncate max-w-[140px]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Action Trigger */}
            <button
              onClick={() => setActiveModalUnit(cls)}
              className="mt-4 w-full py-2.5 rounded-xl bg-slate-950 hover:bg-purple-950/60 border border-slate-800 hover:border-purple-500/40 text-slate-300 hover:text-purple-200 text-xs font-serif font-bold flex items-center justify-center gap-2 transition-all group/btn shadow"
            >
              <span>Inspect Build & Recommended Teams</span>
              <ChevronRight className="w-4 h-4 text-purple-400 group-hover/btn:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        ))}
      </div>

      {/* Full Class Detail Modal with Recommended Teams */}
      <AnimatePresence>
        {activeModalUnit && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#04070e]/85 backdrop-blur-md"
            onClick={() => setActiveModalUnit(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 15 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl max-h-[92vh] overflow-hidden bg-[#0a101d] border-2 border-purple-500/60 rounded-2xl shadow-[0_0_60px_rgba(0,0,0,0.95)] flex flex-col p-6 space-y-6 overflow-y-auto no-scrollbar filigree-box filigree-bottom"
            >
              {/* Modal Header Bar */}
              <div className="flex items-start justify-between border-b border-slate-800 pb-4">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-xl bg-slate-950 border-2 border-purple-400/60 flex items-center justify-center text-4xl overflow-hidden relative shrink-0 shadow-lg">
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
                    <div className="flex items-center gap-2">
                      <h3 className="font-serif text-2xl sm:text-3xl font-extrabold text-amber-200">
                        {activeModalUnit.name}
                      </h3>
                      <span className="px-2.5 py-0.5 rounded font-mono font-extrabold bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 border border-amber-300 text-xs shadow">
                        Tier {activeModalUnit.tier}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="px-2.5 py-0.5 rounded text-xs font-serif font-bold bg-purple-500/20 text-purple-300 border border-purple-500/40">
                        {activeModalUnit.role}
                      </span>
                      <span className="px-2.5 py-0.5 rounded text-xs font-serif font-bold bg-slate-800 text-slate-300">
                        {activeModalUnit.category}
                      </span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => setActiveModalUnit(null)}
                  className="p-2 rounded-xl bg-slate-950 border border-slate-800 text-slate-400 hover:text-white transition"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Overview */}
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300 leading-relaxed font-sans">
                {activeModalUnit.overview}
              </div>

              {/* RECOMMENDED META TEAMS SECTION */}
              <div className="p-5 rounded-xl bg-gradient-to-r from-purple-950/40 via-slate-900 to-amber-950/40 border border-purple-500/40 space-y-4 shadow-xl filigree-box">
                <div className="flex items-center justify-between border-b border-purple-500/30 pb-2">
                  <h4 className="font-serif text-sm font-bold text-amber-300 uppercase tracking-wider flex items-center gap-2">
                    <Users className="w-4 h-4 text-purple-400" />
                    <span>Recommended Meta Team Compositions for {activeModalUnit.name}</span>
                  </h4>
                  <span className="text-[10px] text-slate-400 font-sans">Sourced from Community Meta & Coliseum</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {getRecommendedMetaSquads(activeModalUnit.id).map((squad) => (
                    <div
                      key={squad.id}
                      className="p-4 rounded-xl bg-slate-950 border border-slate-800 hover:border-amber-500/40 transition space-y-3 flex flex-col justify-between"
                    >
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <h5 className="font-serif font-bold text-sm text-amber-200">{squad.name}</h5>
                          <span className="text-[10px] px-2 py-0.5 rounded font-mono font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                            Tier {squad.tier}
                          </span>
                        </div>
                        <p className="text-xs text-slate-300 line-clamp-2">{squad.description}</p>
                      </div>

                      {/* Mini 5-Unit Roster Icons */}
                      <div className="space-y-1.5 pt-2 border-t border-slate-900">
                        <span className="text-[10px] font-serif font-bold text-slate-400 uppercase block">5-Hero Roster:</span>
                        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar">
                          {[...squad.frontRow, ...squad.backRow].map((uId, uIdx) => {
                            const uCls = getUnitClassById(uId);
                            if (!uCls) return null;
                            return (
                              <div
                                key={uIdx}
                                className="w-12 h-12 rounded-xl bg-slate-900 border border-purple-500/40 flex items-center justify-center text-xl overflow-hidden shrink-0 shadow hover:border-amber-400 transition"
                                title={uCls.name}
                              >
                                {uCls.image ? (
                                  <img src={uCls.image} alt={uCls.name} className="w-full h-full object-cover" />
                                ) : (
                                  uCls.icon
                                )}
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      {/* Action Triggers */}
                      <div className="pt-2 flex items-center gap-2">
                        <button
                          onClick={() => setSelectedSquadForModal(squad)}
                          className="flex-1 py-2 rounded-lg bg-slate-900 border border-slate-800 hover:border-amber-500/40 text-amber-300 hover:text-amber-200 text-xs font-serif font-bold flex items-center justify-center gap-1.5 transition"
                        >
                          <BookOpen className="w-3.5 h-3.5" />
                          <span>View Full Squad Guide</span>
                        </button>

                        {onLoadIntoBuilder && (
                          <button
                            onClick={() => {
                              onLoadIntoBuilder(squad);
                              setActiveModalUnit(null);
                            }}
                            className="px-3 py-2 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 text-xs font-serif font-extrabold flex items-center gap-1 shadow"
                          >
                            <Zap className="w-3.5 h-3.5 fill-slate-950" />
                            <span>Load</span>
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* RECOMMENDED EQUIPMENT LOADOUT */}
              <div className="p-5 rounded-xl bg-gradient-to-r from-amber-950/40 via-slate-900 to-purple-950/40 border border-amber-500/40 space-y-3 shadow-xl">
                <h4 className="font-serif text-sm font-bold text-amber-300 uppercase tracking-wider flex items-center gap-2">
                  <Crown className="w-4 h-4 text-amber-400" />
                  <span>Recommended Equipment Loadout</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  {activeModalUnit.recommendedEquipment.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-lg bg-slate-950 border border-amber-500/30 flex items-center gap-3"
                    >
                      <span className="text-xl">👑</span>
                      <div>
                        <h5 className="font-serif font-bold text-amber-200">{item}</h5>
                        <span className="text-[10px] text-slate-400">Best-in-Slot Recommendation</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* RECOMMENDED GROWTH TYPES */}
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                <span className="text-xs font-serif font-bold text-purple-300 uppercase tracking-wider block">
                  📈 Optimal Growth Type Combination:
                </span>
                <div className="flex items-center gap-2">
                  {activeModalUnit.bestGrowthTypes.map((g, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-lg bg-purple-500/20 border border-purple-500/40 text-purple-200 text-xs font-bold font-serif"
                    >
                      {g}
                    </span>
                  ))}
                </div>
              </div>

              {/* ACTIVE AP SKILLS LIST */}
              <div className="space-y-3">
                <h4 className="font-serif text-sm font-bold text-amber-300 uppercase tracking-wider flex items-center gap-2">
                  <Zap className="w-4 h-4 text-amber-400" />
                  <span>Active AP Skills</span>
                </h4>
                <div className="space-y-2">
                  {activeModalUnit.activeSkills.map((skill, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-slate-950 border border-amber-500/30 space-y-1.5"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="tactics-active-banner px-3 py-1 text-xs block font-serif">
                            {skill.name}
                          </span>
                          <div className="flex items-center gap-1 text-[10px] font-mono text-amber-300">
                            <span className="ap-diamond" />
                            <span>{skill.apCost} AP</span>
                          </div>
                        </div>
                        <span className="tactics-condition-banner px-2.5 py-1 text-[10px]">
                          Target: {skill.target}
                        </span>
                      </div>
                      <p className="text-xs text-slate-300 font-sans leading-relaxed">{skill.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* PASSIVE PP SKILLS LIST */}
              <div className="space-y-3">
                <h4 className="font-serif text-sm font-bold text-cyan-300 uppercase tracking-wider flex items-center gap-2">
                  <Shield className="w-4 h-4 text-cyan-400" />
                  <span>Passive PP Skills</span>
                </h4>
                <div className="space-y-2">
                  {activeModalUnit.passiveSkills.map((skill, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-slate-950 border border-cyan-500/30 space-y-1.5"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="tactics-passive-banner px-3 py-1 text-xs block font-serif">
                            {skill.name}
                          </span>
                          <div className="flex items-center gap-1 text-[10px] font-mono text-cyan-300">
                            <span className="pp-diamond" />
                            <span>{skill.ppCost} PP</span>
                          </div>
                        </div>
                        <span className="tactics-condition-banner px-2.5 py-1 text-[10px]">
                          Trigger: {skill.trigger}
                        </span>
                      </div>
                      <p className="text-xs text-slate-300 font-sans leading-relaxed">{skill.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Build Detail Modal Launcher */}
      {selectedSquadForModal && (
        <BuildDetailModal
          squad={selectedSquadForModal}
          isOpen={!!selectedSquadForModal}
          onClose={() => setSelectedSquadForModal(null)}
          onLoadIntoBuilder={(squad) => {
            if (onLoadIntoBuilder) onLoadIntoBuilder(squad);
            setSelectedSquadForModal(null);
          }}
        />
      )}
    </div>
  );
};
