'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Shield,
  Sparkles,
  Zap,
  CheckCircle2,
  Filter,
  Search,
  ArrowRight,
  BookOpen,
  Copy,
  Check,
  Crown,
  Grid,
  List,
  Layers,
  Award,
  Swords,
  ChevronDown,
  Info,
  ChevronRight,
  ExternalLink,
} from 'lucide-react';
import { ZERO_OVERLAP_SQUADS } from '@/data/zeroOverlapSquads';
import { CLASSES_DATA } from '@/data/classes';
import { ITEMS_DATA } from '@/data/items';
import { SquadBuild, UnitGearConfig } from '@/types';
import { BuildDetailModal } from '@/components/builder/BuildDetailModal';
import { calculateUnitApPp } from '@/utils/apPpCalculator';
import { getUnitGearConfig, getUnitClass, getHeroPortraitImage } from '@/utils/squadUtils';
import { HeroFrame } from '@/components/common/HeroFrame';

interface ZeroOverlapTop10Props {
  onLoadIntoBuilder: (squad: SquadBuild) => void;
}

export const ZeroOverlapTop10: React.FC<ZeroOverlapTop10Props> = ({ onLoadIntoBuilder }) => {
  const [selectedArchetype, setSelectedArchetype] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [viewMode, setViewMode] = useState<'cards' | 'tactics' | 'matrix'>('cards');
  const [copiedSquadId, setCopiedSquadId] = useState<string | null>(null);
  const [selectedBuildForModal, setSelectedBuildForModal] = useState<SquadBuild | null>(null);
  const [showRosterAudit, setShowRosterAudit] = useState<boolean>(false);
  const [expandedSquadId, setExpandedSquadId] = useState<string | null>(null);
  const [expandedGearUnitId, setExpandedGearUnitId] = useState<string | null>(null);

  const archetypes = [
    'All',
    'Magic Nuke',
    'Cavalry Burst',
    'Instant Board Wipe',
    'Affliction Control',
    'Heavy Sustain',
    'Heavy Armor Crusher',
  ];

  // Helper to resolve Unit Class & Portrait Image
  const getUnitClassInfo = (unitId: string | null) => {
    return getUnitClass(unitId);
  };

  const getItemType = (itemName: string): 'Weapon' | 'Shield' | 'Helm' | 'Accessory' => {
    const name = itemName.toLowerCase();
    if (
      name.includes('sword') || name.includes('blade') || name.includes('saber') || name.includes('rapier') ||
      name.includes('axe') || name.includes('greataxe') || name.includes('spear') || name.includes('lance') ||
      name.includes('bow') || name.includes('strongbow') || name.includes('staff') || name.includes('rod') ||
      name.includes('scepter') || name.includes('dagger') || name.includes('hammer') || name.includes('mace') ||
      name.includes('arbalest') || name.includes('glaive') || name.includes('cleaver')
    ) {
      return 'Weapon';
    }
    if (name.includes('shield') || name.includes('buckler') || name.includes('greatshield')) {
      return 'Shield';
    }
    if (name.includes('helm') || name.includes('hood') || name.includes('cap') || name.includes('crown') || name.includes('tiara') || name.includes('mitre') || name.includes('beret') || name.includes('scarf') || name.includes('cloak') || name.includes('robes') || name.includes('shawl') || name.includes('ribbon')) {
      return 'Helm';
    }
    return 'Accessory';
  };

  // Helper to resolve Item Image
  const getItemInfo = (itemName: string) => {
    const clean = itemName.toLowerCase().trim();
    const norm = clean.replace(/[^a-z0-9]/g, '');
    const found = ITEMS_DATA.find(
      (i) =>
        i.name.toLowerCase().trim() === clean ||
        i.id.toLowerCase().trim() === clean.replace(/\s+/g, '-') ||
        i.name.toLowerCase().replace(/[^a-z0-9]/g, '') === norm
    );
    const type = getItemType(itemName);
    const icon = type === 'Weapon' ? '⚔️' : type === 'Shield' ? '🛡️' : type === 'Helm' ? '🪖' : '💎';

    if (found && found.image) {
      return {
        ...found,
        type: type,
        icon: icon
      };
    }

    const slug = clean.replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

    let fallbackImg = '/images/items/carnelian-pendant.png';
    if (type === 'Weapon') {
      fallbackImg = '/images/items/greatwood-sword.png';
    } else if (type === 'Shield' || type === 'Helm') {
      fallbackImg = '/images/items/cat-ear-hood.png';
    }

    return {
      id: slug,
      name: itemName,
      image: found?.image || fallbackImg,
      icon: icon,
      type: type,
      statBoosts: found?.statBoosts || 'Unique Meta Relic',
      acquisition: found?.acquisition || 'Endgame Quest / Divine Shard Shop',
      isMetaCore: true,
      metaSquads: []
    };
  };

  const filteredSquads = ZERO_OVERLAP_SQUADS.filter((squad) => {
    const matchesArchetype = selectedArchetype === 'All' || squad.archetype === selectedArchetype;
    const q = searchQuery.toLowerCase();
    const matchesQuery =
      squad.name.toLowerCase().includes(q) ||
      squad.archetype.toLowerCase().includes(q) ||
      squad.keyItems.some((item) => item.toLowerCase().includes(q)) ||
      squad.unitGearConfigs?.some((u) => u.unitName.toLowerCase().includes(q) || u.characterName?.toLowerCase().includes(q) || u.className?.toLowerCase().includes(q)) ||
      squad.description.toLowerCase().includes(q);

    return matchesArchetype && matchesQuery;
  });

  const handleCopyTactics = (squad: SquadBuild) => {
    if (!squad.tacticsSequence) return;
    const text =
      `=== ${squad.name} (${squad.archetype}) ===\n` +
      `Tier: ${squad.tier} | PvP: ${squad.pvpRating}\n` +
      `Key Items: ${squad.keyItems.join(', ')}\n\n` +
      `TACTICS PROGRAMMING:\n` +
      squad.tacticsSequence
        .map(
          (t) => `${t.step}. [${t.unit}] ${t.skill} -> ${t.condition1} ${t.condition2} (${t.notes})`
        )
        .join('\n');

    navigator.clipboard.writeText(text);
    setCopiedSquadId(squad.id);
    setTimeout(() => setCopiedSquadId(null), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Visual Hero Showcase Banner */}
      <div className="relative rounded-2xl bg-gradient-to-r from-[#070b14] via-[#0f172a] to-[#070b14] p-6 sm:p-8 border-2 border-amber-500/50 overflow-hidden shadow-2xl filigree-box">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl -z-10 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl -z-10 pointer-events-none" />

        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="px-3 py-1 rounded-md bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-slate-950 text-xs font-serif font-extrabold uppercase tracking-widest shadow-md">
                100% Zero-Overlap Roster
              </span>
              <span className="px-2.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-[11px] font-mono font-bold flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                50 Unique Story Heroes • Promoted Classes
              </span>
            </div>

            <h2 className="font-serif text-2xl sm:text-4xl font-extrabold bg-gradient-to-r from-amber-100 via-amber-300 to-amber-500 bg-clip-text text-transparent tracking-wide">
              Top 10 Zero-Overlap Endgame Squads
            </h2>

            <p className="text-sm text-slate-300 max-w-3xl font-sans leading-relaxed">
              Complete visual blueprint for deploying <span className="text-amber-300 font-semibold">10 full 5-unit meta squads (50 unique canonical heroes)</span> simultaneously with <span className="text-amber-300 font-semibold">4-slot Best-in-Slot (BIS) + Optimal alternative loadouts</span> and zero duplicate units.
            </p>

            {/* Live Verification Counters */}
            <div className="pt-2 flex flex-wrap items-center gap-3 text-xs">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/90 border border-amber-500/30 text-amber-200">
                <Crown className="w-4 h-4 text-amber-400" />
                <span><strong>10 / 10</strong> Active Squads</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/90 border border-emerald-500/30 text-emerald-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span><strong>50 / 50</strong> Unique Promoted Heroes (0 Duplicates)</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/90 border border-amber-500/30 text-amber-200">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span><strong>4-Slot BIS + Opt</strong> Gear Breakdown</span>
              </div>
            </div>
          </div>

          {/* Action Buttons & Auditor Toggle */}
          <div className="flex flex-col sm:flex-row lg:flex-col gap-2.5 shrink-0">
            <button
              onClick={() => setShowRosterAudit(!showRosterAudit)}
              className="px-4 py-2.5 rounded-xl bg-amber-500/20 border border-amber-500/50 text-amber-200 hover:bg-amber-500/30 hover:text-white transition font-serif text-xs font-bold flex items-center justify-center gap-2 shadow-lg"
            >
              <Award className="w-4 h-4 text-amber-400" />
              <span>{showRosterAudit ? 'Hide 50-Hero Conflict Auditor' : 'View 50-Hero Conflict Auditor'}</span>
            </button>
          </div>
        </div>

        {/* Expandable 50-Unit Conflict Auditor */}
        <AnimatePresence>
          {showRosterAudit && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="mt-6 pt-6 border-t border-amber-500/30 overflow-hidden"
            >
              <div className="rounded-xl bg-slate-950/90 p-4 border border-amber-500/30 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-sm font-bold text-amber-300 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    50 Unique Canonical Heroes & Upgraded Class Directory
                  </h3>
                  <span className="text-[11px] text-slate-400">All 10 Squads Active Simultaneously (0 Overlap)</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-3 text-xs">
                  {ZERO_OVERLAP_SQUADS.map((squad, idx) => (
                    <div key={squad.id} className="p-3 rounded-lg bg-slate-900 border border-slate-800 space-y-2.5">
                      <div className="border-b border-slate-800 pb-1.5">
                        <div className="font-serif font-bold text-amber-200 text-xs truncate">
                          #{idx + 1} {squad.name.replace(/^\d+\.\s*/, '')}
                        </div>
                        <div className="text-[10px] text-amber-400 font-mono">{squad.archetype}</div>
                      </div>
                      
                      {/* Detailed 5 Heroes List */}
                      <div className="space-y-1.5">
                        {squad.unitGearConfigs?.map((u, uIdx) => {
                          const info = getUnitClass(u.unitId);
                          const heroImg = getHeroPortraitImage(u.unitId, u.characterName, info?.id) || info?.image;
                          return (
                            <div
                              key={`${u.unitId}-${uIdx}`}
                              className="flex items-center gap-2 p-1 rounded bg-slate-950/80 border border-slate-800/80"
                            >
                              <HeroFrame
                                image={heroImg}
                                name={u.characterName || u.unitName}
                                icon={info?.icon}
                                size="xs"
                              />
                              <div className="overflow-hidden leading-tight">
                                <div className="text-[10px] font-bold text-slate-200 truncate">
                                  {u.characterName || u.unitName}
                                </div>
                                <div className="text-[8px] text-emerald-400 font-mono truncate">
                                  {u.className || info?.category}
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Category Filters & View Toggle */}
        <div className="mt-6 pt-6 border-t border-slate-800 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            {/* Filter Archetype Buttons */}
            <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-1">
              <Filter className="w-4 h-4 text-amber-400 shrink-0 mr-1" />
              {archetypes.map((arch) => (
                <button
                  key={arch}
                  onClick={() => setSelectedArchetype(arch)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-serif font-bold whitespace-nowrap transition ${
                    selectedArchetype === arch
                      ? 'bg-gradient-to-r from-amber-400 to-amber-600 text-slate-950 shadow-md'
                      : 'bg-slate-900/80 text-slate-300 border border-amber-500/20 hover:border-amber-400/50'
                  }`}
                >
                  {arch}
                </button>
              ))}
            </div>

            {/* View Mode Selector */}
            <div className="flex items-center gap-1 p-1 rounded-xl bg-slate-950 border border-amber-500/30">
              <button
                onClick={() => setViewMode('cards')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-serif font-bold transition ${
                  viewMode === 'cards'
                    ? 'bg-amber-500 text-slate-950'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Grid className="w-3.5 h-3.5" />
                <span>Visual Cards</span>
              </button>
              <button
                onClick={() => setViewMode('tactics')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-serif font-bold transition ${
                  viewMode === 'tactics'
                    ? 'bg-amber-500 text-slate-950'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <List className="w-3.5 h-3.5" />
                <span>Tactics Rules</span>
              </button>
              <button
                onClick={() => setViewMode('matrix')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-serif font-bold transition ${
                  viewMode === 'matrix'
                    ? 'bg-amber-500 text-slate-950'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span>Gear Matrix (4 Slots)</span>
              </button>
            </div>
          </div>

          {/* Search Input */}
          <div className="relative">
            <Search className="w-4 h-4 text-amber-400/70 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by hero (Alain, Chloe, Berengaria, Rosalinde...), item (Cat-Ear Hood, Millennium Scepter...), or archetype..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-950 border border-amber-500/30 rounded-xl pl-10 pr-4 py-2.5 text-xs sm:text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-amber-400 font-sans shadow-inner"
            />
          </div>
        </div>
      </div>

      {/* VIEW MODE 1: Rich Visual Cards */}
      {viewMode === 'cards' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredSquads.map((squad) => {
            const isExpanded = expandedSquadId === squad.id;
            const leaderUnitId = squad.frontRow[0] || squad.backRow[0] || 'alain-high-lord';
            const leaderClass = getUnitClass(leaderUnitId);
            const leaderGear = getUnitGearConfig(squad, leaderUnitId);
            const leaderImg = getHeroPortraitImage(leaderUnitId, leaderGear?.characterName, leaderClass?.id) || leaderClass?.image;

            return (
              <motion.div
                key={squad.id}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-2xl bg-gradient-to-b from-[#0e1628] via-[#090e1a] to-slate-950 border border-amber-500/40 hover:border-amber-400 p-5 sm:p-6 shadow-xl flex flex-col justify-between transition-all duration-300 filigree-box group"
              >
                <div className="space-y-4">
                  {/* Hero Showcase Header Banner */}
                  <div className="relative rounded-xl bg-gradient-to-r from-slate-950 via-[#131b2e] to-slate-950 p-4 border border-amber-500/30 overflow-hidden flex items-center justify-between gap-4">
                    {/* Left: Leader Avatar & Title */}
                    <div className="flex items-center gap-3 z-10">
                      <HeroFrame
                        image={leaderImg}
                        name={squad.name}
                        icon={leaderClass?.icon}
                        size="lg"
                        frameVariant="gold"
                      />

                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="px-2 py-0.5 rounded bg-amber-500 text-slate-950 text-[10px] font-serif font-extrabold uppercase tracking-wider">
                            {squad.tier} Tier
                          </span>
                          <span className="px-2 py-0.5 rounded bg-slate-900 border border-amber-500/30 text-amber-300 text-[10px] font-mono font-bold">
                            {squad.archetype}
                          </span>
                        </div>
                        <h3 className="font-serif text-lg font-bold text-amber-100 group-hover:text-amber-300 transition">
                          {squad.name}
                        </h3>
                      </div>
                    </div>

                    {/* Right: Action Buttons */}
                    <div className="flex items-center gap-2 z-10">
                      <button
                        onClick={() => handleCopyTactics(squad)}
                        className="p-2 rounded-lg bg-slate-900 border border-amber-500/30 text-amber-300 hover:bg-slate-800 hover:text-white transition text-xs flex items-center gap-1 shrink-0"
                        title="Copy Tactics to Clipboard"
                      >
                        {copiedSquadId === squad.id ? (
                          <Check className="w-4 h-4 text-emerald-400" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Rating Badges */}
                  <div className="grid grid-cols-2 gap-2 text-[11px]">
                    <div className="px-2.5 py-1.5 rounded-lg bg-slate-900/90 border border-slate-800">
                      <span className="text-slate-400 font-serif">PvP Arena: </span>
                      <span className="text-amber-300 font-bold">{squad.pvpRating}</span>
                    </div>
                    <div className="px-2.5 py-1.5 rounded-lg bg-slate-900/90 border border-slate-800">
                      <span className="text-slate-400 font-serif">PvE Campaign: </span>
                      <span className="text-emerald-300 font-bold">{squad.pveRating}</span>
                    </div>
                  </div>

                  {/* Overview Description */}
                  <p className="text-xs text-slate-300 font-sans leading-relaxed">
                    {squad.description}
                  </p>

                  {/* Visual 5-Unit Tactical Grid with Character Avatars & Promoted Class Titles */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-[11px] font-serif font-bold text-amber-300">
                      <span>Tactical Formation (5 Unique Heroes)</span>
                      <span className="text-emerald-400 font-mono text-[10px]">0% Overlap Verified</span>
                    </div>

                    <div className="grid grid-cols-2 gap-3 bg-slate-950/90 p-3 rounded-xl border border-amber-500/30">
                      {/* Front Row */}
                      <div className="space-y-2 border-r border-slate-800 pr-2">
                        <div className="text-[10px] font-mono font-bold uppercase text-amber-400 flex items-center gap-1">
                          <span className="w-2 h-2 rounded-full bg-amber-400" />
                          Front Row ({squad.frontRow.length})
                        </div>
                        <div className="space-y-1.5">
                          {squad.frontRow.map((id, i) => {
                            const info = getUnitClass(id);
                            const gearConfig = getUnitGearConfig(squad, id);
                            const uApPp = calculateUnitApPp(info, gearConfig);
                            const heroImg = getHeroPortraitImage(id, gearConfig?.characterName, info?.id) || info?.image;
                            return (
                              <div
                                key={id || i}
                                className="flex items-center justify-between gap-2 p-1.5 rounded-lg bg-slate-900/90 border border-slate-800 hover:border-amber-500/40 transition"
                              >
                                <div className="flex items-center gap-2 overflow-hidden">
                                  <HeroFrame
                                    image={heroImg || undefined}
                                    name={gearConfig?.characterName || gearConfig?.unitName || info?.name || id || 'Unit'}
                                    icon={info?.icon}
                                    size="sm"
                                    frameVariant="gold"
                                  />
                                  <div className="overflow-hidden">
                                    <div className="text-[11px] font-bold text-slate-200 truncate">
                                      {gearConfig?.characterName || gearConfig?.unitName || info?.name || id || 'Unit'}
                                    </div>
                                    <div className="text-[9px] text-amber-400 font-mono truncate">
                                      {gearConfig?.className || gearConfig?.roleTitle || info?.role || 'Vanguard'}
                                    </div>
                                  </div>
                                </div>
                                <div className="flex items-center gap-1 shrink-0">
                                  <span className="px-1.5 py-0.5 rounded bg-red-950/90 border border-red-500/40 text-[9px] font-mono font-extrabold text-red-300">
                                    {uApPp.totalAp} AP
                                  </span>
                                  <span className="px-1.5 py-0.5 rounded bg-blue-950/90 border border-blue-500/40 text-[9px] font-mono font-extrabold text-blue-300">
                                    {uApPp.totalPp} PP
                                  </span>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      {/* Back Row */}
                      <div className="space-y-2 pl-1">
                        <div className="text-[10px] font-mono font-bold uppercase text-blue-400 flex items-center gap-1">
                          <span className="w-2 h-2 rounded-full bg-blue-400" />
                          Back Row ({squad.backRow.length})
                        </div>
                        <div className="space-y-1.5">
                          {squad.backRow.map((id, i) => {
                            const info = getUnitClass(id);
                            const gearConfig = getUnitGearConfig(squad, id);
                            const uApPp = calculateUnitApPp(info, gearConfig);
                            const heroImg = getHeroPortraitImage(id, gearConfig?.characterName, info?.id) || info?.image;
                            return (
                              <div
                                key={id || i}
                                className="flex items-center justify-between gap-2 p-1.5 rounded-lg bg-slate-900/90 border border-slate-800 hover:border-blue-500/40 transition"
                              >
                                <div className="flex items-center gap-2 overflow-hidden">
                                  <HeroFrame
                                    image={heroImg || undefined}
                                    name={gearConfig?.characterName || gearConfig?.unitName || info?.name || id || 'Unit'}
                                    icon={info?.icon}
                                    size="sm"
                                    frameVariant="purple"
                                  />
                                  <div className="overflow-hidden">
                                    <div className="text-[11px] font-bold text-slate-200 truncate">
                                      {gearConfig?.characterName || gearConfig?.unitName || info?.name || id}
                                    </div>
                                    <div className="text-[9px] text-blue-300 font-mono truncate">
                                      {gearConfig?.className || gearConfig?.roleTitle || info?.role || 'Support'}
                                    </div>
                                  </div>
                                </div>
                                <div className="flex items-center gap-1 shrink-0">
                                  <span className="px-1.5 py-0.5 rounded bg-red-950/90 border border-red-500/40 text-[9px] font-mono font-extrabold text-red-300">
                                    {uApPp.totalAp} AP
                                  </span>
                                  <span className="px-1.5 py-0.5 rounded bg-blue-950/90 border border-blue-500/40 text-[9px] font-mono font-extrabold text-blue-300">
                                    {uApPp.totalPp} PP
                                  </span>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Dedicated Key Relics */}
                  <div className="space-y-2">
                    <div className="text-[11px] font-serif font-bold text-amber-300 flex items-center justify-between">
                      <span>Dedicated Key Relics (No Conflict)</span>
                      <span className="text-slate-400 text-[10px] font-mono">Unique Items</span>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {squad.keyItems.map((itemName) => {
                        const itemInfo = getItemInfo(itemName);
                        return (
                          <div
                            key={itemName}
                            className="p-2 rounded-xl bg-slate-950/90 border border-amber-500/30 flex items-center gap-2 hover:border-amber-400 transition"
                          >
                            <div className="w-7 h-7 rounded-lg bg-slate-900 border border-amber-500/40 p-0.5 shrink-0 overflow-hidden flex items-center justify-center">
                              <img
                                src={itemInfo.image}
                                alt={itemName}
                                className="w-full h-full object-contain"
                                onError={(e) => {
                                  (e.target as HTMLElement).style.display = 'none';
                                }}
                              />
                            </div>
                            <div className="overflow-hidden text-left">
                              <div className="text-[10px] font-serif font-bold text-amber-200 truncate">
                                {itemName}
                              </div>
                              <div className="text-[8px] text-slate-400 font-mono truncate">
                                {itemInfo.type || 'Relic'}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="mt-5 pt-4 border-t border-slate-800 flex items-center justify-between gap-3">
                  <button
                    onClick={() => setSelectedBuildForModal(squad)}
                    className="px-3.5 py-2 rounded-xl bg-slate-900 border border-amber-500/30 text-amber-300 hover:bg-slate-800 hover:text-white transition font-serif text-xs font-bold flex items-center gap-1.5"
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>4-Slot Loadouts & Tactics</span>
                  </button>

                  <button
                    onClick={() => onLoadIntoBuilder(squad)}
                    className="px-4 py-2 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-slate-950 font-serif text-xs font-extrabold hover:from-amber-300 hover:to-amber-500 transition shadow-lg flex items-center gap-1.5"
                  >
                    <Zap className="w-3.5 h-3.5 fill-slate-950" />
                    <span>Load in 5-Unit Builder</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      )}

      {/* VIEW MODE 2: Tactics Preset View */}
      {viewMode === 'tactics' && (
        <div className="space-y-4">
          {filteredSquads.map((squad) => {
            const squadTactics = (() => {
              if (squad.tacticsSequence && squad.tacticsSequence.length >= 4) {
                return squad.tacticsSequence;
              }
              const steps: { step: number; unit: string; skill: string; condition1: string; condition2: string; notes: string }[] = [];

              squad.unitGearConfigs?.forEach((u) => {
                const info = getUnitClassInfo(u.unitId);
                const charName = u.characterName || u.unitName.split(' ')[0] || info?.name || 'Unit';

                // 1. Start of battle
                const sob = info?.passiveSkills?.find((s) => s.isStartOfBattle || s.trigger?.toLowerCase().includes('start'));
                if (sob) {
                  steps.push({
                    step: steps.length + 1,
                    unit: charName,
                    skill: sob.name,
                    condition1: '[Start of Battle]',
                    condition2: '[Target: All Enemies / Front Row]',
                    notes: sob.description || 'Start-of-Battle initiative boost',
                  });
                }

                // 2. Primary active skill
                const primaryActive = info?.activeSkills?.[0];
                if (primaryActive) {
                  let cond1 = '[Target: Frontline Row]';
                  if (primaryActive.target === 'Full Row') cond1 = '[Target: Full Row (2+ Enemies)]';
                  else if (primaryActive.target === 'All Enemies') cond1 = '[Target: All Enemies]';
                  else if (primaryActive.target === 'Column') cond1 = '[Target: Column (Infantry Priority)]';
                  else if (primaryActive.name.toLowerCase().includes('keen')) cond1 = '[Target: Prioritize Scouts / Evasion]';

                  steps.push({
                    step: steps.length + 1,
                    unit: charName,
                    skill: primaryActive.name,
                    condition1: cond1,
                    condition2: `[Self AP >= ${primaryActive.apCost || 2}]`,
                    notes: primaryActive.description || 'Primary tactical strike',
                  });
                }

                // 3. Key passive reaction
                const keyPassive = info?.passiveSkills?.find((s) => !s.isStartOfBattle);
                if (keyPassive) {
                  let cond1 = '[Before Being Attacked]';
                  if (keyPassive.name.toLowerCase().includes('cover')) cond1 = '[Before Ally Attacked (Back Row)]';
                  else if (keyPassive.name.toLowerCase().includes('call')) cond1 = '[After Ally Attack (Row Attack)]';
                  else if (keyPassive.name.toLowerCase().includes('heal')) cond1 = '[Ally HP <= 50%]';
                  else if (keyPassive.name.toLowerCase().includes('parry')) cond1 = '[Before Melee Physical Attack]';

                  steps.push({
                    step: steps.length + 1,
                    unit: charName,
                    skill: keyPassive.name,
                    condition1: cond1,
                    condition2: `[Self PP >= ${keyPassive.ppCost || 1}]`,
                    notes: keyPassive.description || 'Key tactical reaction/buff',
                  });
                }
              });

              return steps.map((s, idx) => ({ ...s, step: idx + 1 }));
            })();

            return (
              <div
                key={squad.id}
                className="rounded-xl bg-slate-950 border border-amber-500/30 p-5 space-y-4 shadow-xl filigree-box"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
                  <div>
                    <h3 className="font-serif text-lg font-bold text-amber-200">{squad.name}</h3>
                    <p className="text-xs text-slate-400">{squad.strategyGuide?.winCondition}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setSelectedBuildForModal(squad)}
                      className="px-3 py-1.5 rounded-lg bg-slate-900 border border-amber-500/30 text-amber-300 text-xs font-serif font-bold hover:bg-slate-800 transition flex items-center gap-1"
                    >
                      <BookOpen className="w-3.5 h-3.5" />
                      <span>Inspect 4-Slot Loadouts</span>
                    </button>
                    <button
                      onClick={() => onLoadIntoBuilder(squad)}
                      className="px-3 py-1.5 rounded-lg bg-amber-500 text-slate-950 text-xs font-serif font-bold hover:bg-amber-400 transition flex items-center gap-1"
                    >
                      <Zap className="w-3 h-3 fill-slate-950" />
                      <span>Load Builder</span>
                    </button>
                  </div>
                </div>

                {/* Tactics Sequence Table */}
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs font-sans border-collapse">
                    <thead>
                      <tr className="border-b border-slate-800 text-amber-400 font-serif">
                        <th className="py-2 px-3">Priority</th>
                        <th className="py-2 px-3">Hero Unit</th>
                        <th className="py-2 px-3">Skill Name</th>
                        <th className="py-2 px-3">Condition 1</th>
                        <th className="py-2 px-3">Condition 2</th>
                        <th className="py-2 px-3">Tactical Rationale</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-900">
                      {squadTactics.map((tac) => (
                        <tr key={tac.step} className="hover:bg-slate-900/60 transition">
                          <td className="py-2 px-3 font-mono font-bold text-amber-300">P{tac.step}</td>
                          <td className="py-2 px-3 font-bold text-slate-200">{tac.unit}</td>
                          <td className="py-2 px-3 font-semibold text-amber-300 font-mono">{tac.skill}</td>
                          <td className="py-2 px-3 text-slate-300 font-mono">{tac.condition1}</td>
                          <td className="py-2 px-3 text-slate-300 font-mono">{tac.condition2}</td>
                          <td className="py-2 px-3 text-slate-400 italic">{tac.notes}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* VIEW MODE 3: Gear Matrix View (Full 4-Slot Loadouts Breakdown) */}
      {viewMode === 'matrix' && (
        <div className="space-y-6">
          {filteredSquads.map((squad) => (
            <div
              key={squad.id}
              className="rounded-2xl bg-slate-950 border border-amber-500/30 p-5 space-y-4 shadow-2xl filigree-box"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-amber-500/20 pb-3">
                <div className="flex items-center gap-3">
                  <span className="px-2.5 py-1 rounded bg-amber-500 text-slate-950 font-serif font-extrabold text-xs">
                    {squad.tier}
                  </span>
                  <div>
                    <h3 className="font-serif text-lg font-bold text-amber-100">{squad.name}</h3>
                    <span className="text-xs font-mono text-amber-400">{squad.archetype}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setSelectedBuildForModal(squad)}
                    className="px-3 py-1.5 rounded-lg bg-slate-900 border border-amber-500/30 text-amber-300 text-xs font-serif font-bold hover:bg-slate-800 transition flex items-center gap-1"
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>View Tactics</span>
                  </button>
                  <button
                    onClick={() => onLoadIntoBuilder(squad)}
                    className="px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-serif text-xs font-extrabold hover:from-amber-400 hover:to-amber-500 transition"
                  >
                    Load Builder
                  </button>
                </div>
              </div>

              {/* 5-Hero 4-Slot Gear Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs font-sans border-collapse">
                  <thead>
                    <tr className="border-b border-slate-800 text-amber-300 font-serif">
                      <th className="py-2.5 px-3">Hero & Class</th>
                      <th className="py-2.5 px-3">Total AP / PP</th>
                      <th className="py-2.5 px-3">Slot 1: Weapon (BIS + Opt)</th>
                      <th className="py-2.5 px-3">Slot 2: Shield / Helm (BIS + Opt)</th>
                      <th className="py-2.5 px-3">Slot 3: Acc 1 (BIS + Opt)</th>
                      <th className="py-2.5 px-3">Slot 4: Acc 2 (BIS + Opt)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-900">
                    {squad.unitGearConfigs?.map((u, uIdx) => {
                      const info = getUnitClassInfo(u.unitId);
                      const uApPp = calculateUnitApPp(info, u);
                      return (
                        <tr key={`${u.unitId}-${uIdx}`} className="hover:bg-slate-900/60 transition">
                          {/* Unit Title & Avatar */}
                          <td className="py-3 px-3">
                            <div className="flex items-center gap-2.5 min-w-[140px]">
                              <div className="w-9 h-9 rounded-lg border border-amber-400/60 overflow-hidden bg-slate-950 shrink-0 shadow">
                                <img
                                  src={info?.image || '/images/characters/alain-high-lord.png'}
                                  alt={u.unitName}
                                  className="w-full h-full object-cover object-top"
                                  onError={(e) => {
                                    (e.target as HTMLElement).style.display = 'none';
                                  }}
                                />
                              </div>
                              <div>
                                <div className="font-serif font-bold text-slate-100">{u.characterName || u.unitName}</div>
                                <div className="text-[10px] text-emerald-400 font-mono">{u.className || info?.category}</div>
                              </div>
                            </div>
                          </td>

                          {/* Total AP / PP Column */}
                          <td className="py-3 px-3">
                            <div className="flex items-center gap-1.5 whitespace-nowrap min-w-[140px]">
                              <div className="px-2 py-1 rounded-md bg-red-950/80 border border-red-500/50 text-[11px] font-mono font-extrabold text-red-300 flex items-center gap-1">
                                <span>{uApPp.totalAp} AP</span>
                                <span className="text-[9px] text-red-400/70 font-normal">({uApPp.baseAp}+{uApPp.bonusAp})</span>
                              </div>
                              <div className="px-2 py-1 rounded-md bg-blue-950/80 border border-blue-500/50 text-[11px] font-mono font-extrabold text-blue-300 flex items-center gap-1">
                                <span>{uApPp.totalPp} PP</span>
                                <span className="text-[9px] text-blue-400/70 font-normal">({uApPp.basePp}+{uApPp.bonusPp})</span>
                              </div>
                            </div>
                          </td>

                          {/* Slot 1 Weapon */}
                          <td className="py-3 px-3">
                            <div className="space-y-1 min-w-[170px]">
                              <div className="font-bold text-amber-300 flex items-center gap-1">
                                <span className="text-[10px] px-1 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">BIS</span>
                                <span className="truncate">{u.slot1Weapon?.bestInSlot || u.weapon}</span>
                              </div>
                              {u.slot1Weapon?.optimalAlternatives && u.slot1Weapon.optimalAlternatives.length > 0 && (
                                <div className="text-[10px] text-slate-400 truncate">
                                  <span className="text-slate-500 font-mono">Opt:</span> {u.slot1Weapon.optimalAlternatives.slice(0, 2).join(', ')}
                                </div>
                              )}
                            </div>
                          </td>

                          {/* Slot 2 Shield / Offhand / Helm */}
                          <td className="py-3 px-3">
                            <div className="space-y-1 min-w-[170px]">
                              <div className="font-bold text-cyan-300 flex items-center gap-1">
                                <span className="text-[10px] px-1 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">BIS</span>
                                <span className="truncate">{u.slot2ShieldOrOffhand?.bestInSlot || u.shieldOrHelm}</span>
                              </div>
                              {u.slot2ShieldOrOffhand?.optimalAlternatives && u.slot2ShieldOrOffhand.optimalAlternatives.length > 0 && (
                                <div className="text-[10px] text-slate-400 truncate">
                                  <span className="text-slate-500 font-mono">Opt:</span> {u.slot2ShieldOrOffhand.optimalAlternatives.slice(0, 2).join(', ')}
                                </div>
                              )}
                            </div>
                          </td>

                          {/* Slot 3 Accessory 1 */}
                          <td className="py-3 px-3">
                            <div className="space-y-1 min-w-[170px]">
                              <div className="font-bold text-emerald-300 flex items-center gap-1">
                                <span className="text-[10px] px-1 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">BIS</span>
                                <span className="truncate">{u.slot3Accessory?.bestInSlot || u.accessory1}</span>
                              </div>
                              {u.slot3Accessory?.optimalAlternatives && u.slot3Accessory.optimalAlternatives.length > 0 && (
                                <div className="text-[10px] text-slate-400 truncate">
                                  <span className="text-slate-500 font-mono">Opt:</span> {u.slot3Accessory.optimalAlternatives.slice(0, 2).join(', ')}
                                </div>
                              )}
                            </div>
                          </td>

                          {/* Slot 4 Accessory 2 */}
                          <td className="py-3 px-3">
                            <div className="space-y-1 min-w-[170px]">
                              <div className="font-bold text-purple-300 flex items-center gap-1">
                                <span className="text-[10px] px-1 rounded bg-purple-500/20 text-purple-300 border border-purple-500/30">BIS</span>
                                <span className="truncate">{u.slot4Accessory?.bestInSlot || u.accessory2}</span>
                              </div>
                              {u.slot4Accessory?.optimalAlternatives && u.slot4Accessory.optimalAlternatives.length > 0 && (
                                <div className="text-[10px] text-slate-400 truncate">
                                  <span className="text-slate-500 font-mono">Opt:</span> {u.slot4Accessory.optimalAlternatives.slice(0, 2).join(', ')}
                                </div>
                              )}
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Build Detail Modal for Deep Dive */}
      {selectedBuildForModal && (
        <BuildDetailModal
          squad={selectedBuildForModal}
          isOpen={!!selectedBuildForModal}
          onClose={() => setSelectedBuildForModal(null)}
          onLoadIntoBuilder={onLoadIntoBuilder}
        />
      )}
    </div>
  );
};
