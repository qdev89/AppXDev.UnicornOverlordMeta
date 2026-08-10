'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Shield,
  Sparkles,
  Zap,
  CheckCircle2,
  XCircle,
  ArrowRight,
  Filter,
  Heart,
  BookOpen,
  PlusCircle,
  Award,
} from 'lucide-react';
import { SQUADS_DATA } from '@/data/squads';
import { CLASSES_DATA } from '@/data/classes';
import { ITEMS_DATA } from '@/data/items';
import { SquadBuild } from '@/types';
import { BuildDetailModal } from '@/components/builder/BuildDetailModal';

interface MetaCompositionsProps {
  onLoadIntoBuilder: (squad: SquadBuild) => void;
}

export const MetaCompositions: React.FC<MetaCompositionsProps> = ({ onLoadIntoBuilder }) => {
  const [selectedArchetype, setSelectedArchetype] = useState<string>('All');
  const [activeFilterTab, setActiveFilterTab] = useState<'all' | 'official' | 'custom' | 'favorites'>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  
  const [favoriteIds, setFavoriteIds] = useState<string[]>([]);
  const [customBuilds, setCustomBuilds] = useState<SquadBuild[]>([]);
  const [selectedBuildForModal, setSelectedBuildForModal] = useState<SquadBuild | null>(null);

  // Load favorites & custom builds from localStorage
  useEffect(() => {
    try {
      const storedFavs = localStorage.getItem('unicorn_favorite_builds');
      if (storedFavs) {
        setFavoriteIds(JSON.parse(storedFavs));
      }

      const storedCustom = localStorage.getItem('unicorn_saved_builds');
      if (storedCustom) {
        setCustomBuilds(JSON.parse(storedCustom));
      }
    } catch (e) {
      console.error('Error loading saved builds from localStorage', e);
    }
  }, []);

  // Toggle favorite
  const handleToggleFavorite = (squadId: string) => {
    setFavoriteIds((prev) => {
      const updated = prev.includes(squadId)
        ? prev.filter((id) => id !== squadId)
        : [...prev, squadId];
      try {
        localStorage.setItem('unicorn_favorite_builds', JSON.stringify(updated));
      } catch (e) {
        // ignore
      }
      return updated;
    });
  };

  const archetypes = [
    'All',
    'Instant Board Wipe',
    'Heavy Sustain',
    'Cavalry Burst',
    'Affliction Control',
    'Magic Nuke',
  ];

  // Combine official squads with user custom builds
  const allSquads: SquadBuild[] = [
    ...SQUADS_DATA,
    ...customBuilds.map((b) => ({ ...b, isCustom: true })),
  ];

  const filteredSquads = allSquads.filter((squad) => {
    // Filter Tab Check
    if (activeFilterTab === 'official' && squad.isCustom) return false;
    if (activeFilterTab === 'custom' && !squad.isCustom) return false;
    if (activeFilterTab === 'favorites' && !favoriteIds.includes(squad.id)) return false;

    // Archetype Check
    const matchesArchetype = selectedArchetype === 'All' || squad.archetype === selectedArchetype;

    // Query Check
    const matchesQuery =
      squad.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      squad.keyItems.some((item) => item.toLowerCase().includes(searchQuery.toLowerCase())) ||
      squad.description.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesArchetype && matchesQuery;
  });

  const getUnitClass = (unitId: string | null) => {
    if (!unitId) return null;
    const aliasMap: Record<string, string> = {
      'virginia-crusader': 'valkyria',
      'fencer': 'elven-fencer',
      'berengaria-dark-marquess': 'berengaria-renegade',
      'eltolinde-elven-prophet': 'eltolinde-elven-sibyl',
      'arbalest': 'arbalist',
      'valkyrie': 'valkyria',
      'snow-ranger': 'yunifi-snow-ranger',
      'elven-augur': 'eltolinde-elven-sibyl',
      'dark-marquess': 'berengaria-renegade',
      'prince': 'gilbert-prince',
      'featherbow': 'raenys-feather-sword',
      'high-priestess': 'scarlett-high-priestess',
      'druid': 'selvie-druid',
    };
    const targetId = aliasMap[unitId] || unitId;
    return (
      CLASSES_DATA.find((c) => c.id === targetId || c.id === unitId) ||
      CLASSES_DATA.find((c) => c.name.toLowerCase().includes(unitId.toLowerCase().replace(/-/g, ' '))) ||
      null
    );
  };

  const getItemType = (itemName: string): 'Weapon' | 'Shield' | 'Helm' | 'Accessory' => {
    const name = itemName.toLowerCase();
    if (
      name.includes('sword') || name.includes('blade') || name.includes('saber') || name.includes('rapier') ||
      name.includes('axe') || name.includes('greataxe') || name.includes('spear') || name.includes('lance') ||
      name.includes('bow') || name.includes('strongbow') || name.includes('staff') || name.includes('rod') ||
      name.includes('scepter') || name.includes('dagger') || name.includes('hammer') || name.includes('mace') ||
      name.includes('arbalest') || name.includes('glaive')
    ) {
      return 'Weapon';
    }
    if (name.includes('shield') || name.includes('buckler') || name.includes('greatshield')) {
      return 'Shield';
    }
    if (name.includes('helm') || name.includes('hood') || name.includes('cap') || name.includes('crown') || name.includes('tiara') || name.includes('mitre') || name.includes('beret')) {
      return 'Helm';
    }
    return 'Accessory';
  };

  const getItemInfo = (itemName: string) => {
    const cleanName = itemName.toLowerCase().replace(/[''\\]/g, '').replace(/[^a-z0-9]+/g, '');
    const item = ITEMS_DATA.find((i) => {
      const iName = i.name.toLowerCase().replace(/[''\\]/g, '').replace(/[^a-z0-9]+/g, '');
      return iName === cleanName || iName.includes(cleanName) || cleanName.includes(iName);
    });
    const type = getItemType(itemName);
    const icon = type === 'Weapon' ? '⚔️' : type === 'Shield' ? '🛡️' : type === 'Helm' ? '🪖' : '💎';

    if (item && item.image) {
      return {
        ...item,
        type: type,
        icon: icon
      };
    }

    let fallbackImg = '/images/items/carnelian-pendant.png';
    if (type === 'Weapon') fallbackImg = '/images/items/greatwood-sword.png';
    else if (type === 'Shield' || type === 'Helm') fallbackImg = '/images/items/cat-ear-hood.png';

    return {
      id: itemName.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
      name: itemName,
      image: fallbackImg,
      icon: icon,
      type: type,
      statBoosts: 'Unique Relic',
      acquisition: 'Region Quest',
      isMetaCore: true,
      metaSquads: []
    };
  };

  return (
    <div className="space-y-6">
      {/* Page Title & Hero Header */}
      <div className="relative rounded-2xl bg-gradient-to-r from-slate-950 via-[#0e1628] to-slate-950 p-6 sm:p-8 border border-amber-500/40 overflow-hidden shadow-2xl filigree-box">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl -z-10 pointer-events-none" />
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Shield className="w-7 h-7 text-amber-400 drop-shadow-[0_0_10px_rgba(245,158,11,0.6)]" />
              <h2 className="font-serif text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-amber-100 via-amber-300 to-amber-500 bg-clip-text text-transparent">
                Meta Compositions & Build Guides
              </h2>
            </div>
            <p className="text-sm text-slate-300 max-w-2xl font-sans leading-relaxed">
              Explore authentic 5-unit meta squad formations from the Reddit community (`r/UnicornOverlord`), equipment loadouts, tactics programming rules, and counter matchup guides.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="px-3.5 py-2 rounded-xl bg-amber-500/10 border border-amber-500/30 text-xs font-serif font-bold text-amber-300 flex items-center gap-2 shadow">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>{allSquads.length} Total Build Guides</span>
            </span>
          </div>
        </div>

        {/* Filter Category Tabs & Search Bar */}
        <div className="mt-6 pt-6 border-t border-slate-800 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            {/* Filter Group: All / Official / Custom / Favorites */}
            <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-950 border border-amber-500/30">
              <button
                onClick={() => setActiveFilterTab('all')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-serif font-bold transition ${
                  activeFilterTab === 'all'
                    ? 'bg-gradient-to-r from-amber-400 to-amber-600 text-slate-950 shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                All Guides ({allSquads.length})
              </button>
              <button
                onClick={() => setActiveFilterTab('official')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-serif font-bold transition ${
                  activeFilterTab === 'official'
                    ? 'bg-gradient-to-r from-amber-400 to-amber-600 text-slate-950 shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Community Meta ({SQUADS_DATA.length})
              </button>
              <button
                onClick={() => setActiveFilterTab('custom')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-serif font-bold transition flex items-center gap-1 ${
                  activeFilterTab === 'custom'
                    ? 'bg-gradient-to-r from-amber-400 to-amber-600 text-slate-950 shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <PlusCircle className="w-3.5 h-3.5" />
                <span>My Saved Builds ({customBuilds.length})</span>
              </button>
              <button
                onClick={() => setActiveFilterTab('favorites')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-serif font-bold transition flex items-center gap-1 ${
                  activeFilterTab === 'favorites'
                    ? 'bg-gradient-to-r from-amber-400 to-amber-600 text-slate-950 shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Heart className="w-3.5 h-3.5 fill-rose-500 text-rose-500" />
                <span>Favorites ({favoriteIds.length})</span>
              </button>
            </div>

            {/* Search Input */}
            <input
              type="text"
              placeholder="Search guides by unit, item, name, tactic..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="px-4 py-2 rounded-xl bg-slate-950 border border-amber-500/30 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-amber-400 w-full md:w-72 shadow-inner"
            />
          </div>

          {/* Archetype Chips */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1 pt-1">
            <Filter className="w-4 h-4 text-amber-400 shrink-0" />
            {archetypes.map((archetype) => (
              <button
                key={archetype}
                onClick={() => setSelectedArchetype(archetype)}
                className={`px-3 py-1 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                  selectedArchetype === archetype
                    ? 'bg-amber-500/20 text-amber-300 border border-amber-400/50 font-bold'
                    : 'bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-white hover:border-amber-500/30'
                }`}
              >
                {archetype}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Squad Cards Grid */}
      {filteredSquads.length === 0 ? (
        <div className="p-12 text-center rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
          <Shield className="w-12 h-12 text-slate-600 mx-auto" />
          <h3 className="font-serif text-lg font-bold text-slate-300">No Build Guides Found</h3>
          <p className="text-xs text-slate-500">Try adjusting your filters or search keywords.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredSquads.map((squad, idx) => {
            const isFav = favoriteIds.includes(squad.id);
            return (
              <motion.div
                key={squad.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.04 }}
                className="group relative rounded-2xl bg-gradient-to-b from-[#0f172a] to-[#070b16] border border-amber-500/30 hover:border-amber-400/70 hover:shadow-[0_0_35px_rgba(245,158,11,0.2)] transition-all duration-300 overflow-hidden flex flex-col justify-between filigree-box"
              >
                {/* Squad Header */}
                <div className="p-5 sm:p-6 border-b border-slate-800/80 bg-gradient-to-r from-slate-950/90 via-[#0e1628] to-slate-950/90">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                        <h3 className="font-serif text-lg sm:text-xl font-extrabold text-amber-100 group-hover:text-amber-300 transition drop-shadow">
                          {squad.name}
                        </h3>
                        <span className="text-xs px-2 py-0.5 rounded font-mono font-extrabold bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 shadow">
                          Tier {squad.tier}
                        </span>
                        {squad.isCustom && (
                          <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-500/40">
                            Custom Build
                          </span>
                        )}
                      </div>
                      <span className="inline-block text-[11px] font-serif font-bold px-2.5 py-0.5 rounded bg-purple-950/80 text-purple-200 border border-purple-800/50">
                        {squad.archetype}
                      </span>
                    </div>

                    {/* Bookmark Heart Button */}
                    <button
                      onClick={() => handleToggleFavorite(squad.id)}
                      className={`p-2 rounded-xl border transition-all ${
                        isFav
                          ? 'bg-rose-500/20 border-rose-500/60 text-rose-400 shadow-[0_0_12px_rgba(244,63,94,0.4)]'
                          : 'bg-slate-950/80 border-slate-800 text-slate-400 hover:text-rose-300 hover:border-rose-500/40'
                      }`}
                      title={isFav ? 'Remove Favorite' : 'Save to Favorites'}
                    >
                      <Heart className={`w-4 h-4 ${isFav ? 'fill-rose-500' : ''}`} />
                    </button>
                  </div>

                  <p className="mt-3 text-xs text-slate-300 leading-relaxed">{squad.description}</p>
                </div>

                <div className="p-5 sm:p-6 space-y-5 flex-1">
                  {/* Visual 2x3 Formation Grid */}
                  <div>
                    <div className="text-[11px] font-serif font-bold uppercase tracking-wider text-amber-300/90 mb-2 flex items-center justify-between">
                      <span>Tactical Formation (2 Vanguard / 3 Rearguard)</span>
                      <span className="text-[10px] text-slate-400 font-sans">Click to inspect</span>
                    </div>

                    <div className="stage-pedestal grid grid-cols-2 gap-3 p-3.5 rounded-xl border border-amber-500/40">
                      {/* Front Row (2 slots) */}
                      <div className="space-y-2">
                        <div className="vanguard-banner text-[10px] font-bold uppercase text-center tracking-wider py-1 rounded-t-md">
                          🛡️ Vanguard Row
                        </div>
                        <div className="grid grid-cols-1 gap-2">
                          {squad.frontRow.map((unitId, i) => {
                            const unit = getUnitClass(unitId);
                            return (
                              <div
                                key={i}
                                className={`p-2 rounded-lg border text-xs flex items-center justify-between ${
                                  unit
                                    ? 'bg-slate-950/90 border-amber-500/40 text-slate-100'
                                    : 'bg-slate-950/50 border-slate-800 border-dashed text-slate-600'
                                }`}
                              >
                                {unit ? (
                                  <div className="flex items-center justify-between w-full">
                                    <div className="flex items-center gap-2 overflow-hidden">
                                      <div className="w-12 h-12 rounded-xl bg-slate-950 border border-amber-400/50 flex items-center justify-center overflow-hidden text-xl relative shrink-0 shadow">
                                        {unit.image ? (
                                          <img src={unit.image} alt={unit.name} className="w-full h-full object-cover" />
                                        ) : (
                                          unit.icon
                                        )}
                                      </div>
                                      <div>
                                        <span className="font-serif font-bold text-sm text-amber-200 truncate block">
                                          {unit.name}
                                        </span>
                                        <span className="text-[9px] font-mono text-emerald-400 font-bold">
                                          HP {unit.baseStats.hp || 100}/100
                                        </span>
                                      </div>
                                    </div>
                                    <div className="flex items-center">
                                      <span className="ap-diamond" />
                                      <span className="pp-diamond" />
                                    </div>
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
                        <div className="rearguard-banner text-[10px] font-bold uppercase text-center tracking-wider py-1 rounded-t-md">
                          ⚔️ Rearguard Row
                        </div>
                        <div className="grid grid-cols-1 gap-2">
                          {squad.backRow.map((unitId, i) => {
                            const unit = getUnitClass(unitId);
                            return (
                              <div
                                key={i}
                                className={`p-2 rounded-lg border text-xs flex items-center justify-between ${
                                  unit
                                    ? 'bg-slate-950/90 border-purple-500/40 text-slate-100'
                                    : 'bg-slate-950/50 border-slate-800 border-dashed text-slate-600'
                                }`}
                              >
                                {unit ? (
                                  <div className="flex items-center justify-between w-full">
                                    <div className="flex items-center gap-2.5 overflow-hidden">
                                      <div className="w-12 h-12 rounded-xl bg-slate-950 border border-purple-400/50 flex items-center justify-center overflow-hidden text-xl relative shrink-0 shadow">
                                        {unit.image ? (
                                          <img src={unit.image} alt={unit.name} className="w-full h-full object-cover" />
                                        ) : (
                                          unit.icon
                                        )}
                                      </div>
                                      <div>
                                        <span className="font-serif font-bold text-sm text-purple-200 truncate block">
                                          {unit.name}
                                        </span>
                                        <span className="text-[9px] font-mono text-emerald-400 font-bold">
                                          HP {unit.baseStats.hp || 90}/90
                                        </span>
                                      </div>
                                    </div>
                                    <div className="flex items-center">
                                      <span className="ap-diamond" />
                                      <span className="pp-diamond" />
                                    </div>
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

                  {/* Core Required Relics */}
                  <div>
                    <div className="text-[11px] font-serif font-bold uppercase tracking-wider text-amber-300/80 mb-2">
                      Core Required Relics & Equipment
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {squad.keyItems.map((itemName, i) => {
                        const info = getItemInfo(itemName);
                        return (
                          <div
                            key={i}
                            className="px-2.5 py-1.5 rounded-xl bg-slate-950/90 border border-amber-500/30 text-amber-200 text-xs font-serif font-bold flex items-center gap-2 hover:border-amber-400 transition"
                          >
                            <div className="w-5 h-5 rounded bg-slate-900 border border-amber-500/40 p-0.5 shrink-0 overflow-hidden flex items-center justify-center">
                              <img
                                src={info.image}
                                alt={itemName}
                                className="w-full h-full object-contain"
                                onError={(e) => {
                                  (e.target as HTMLElement).style.display = 'none';
                                }}
                              />
                            </div>
                            <span className="truncate">{itemName}</span>
                            <span className={`text-[9px] font-mono font-bold px-1.5 py-0.2 rounded uppercase ${
                              info.type === 'Weapon' ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40' :
                              info.type === 'Shield' ? 'bg-blue-500/20 text-blue-300 border border-blue-500/40' :
                              info.type === 'Helm' ? 'bg-purple-500/20 text-purple-300 border border-purple-500/40' :
                              'bg-slate-800 text-slate-300 border border-slate-700'
                            }`}>
                              {info.icon} {info.type}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-3 border-t border-slate-800 flex items-center gap-2">
                    <button
                      onClick={() => setSelectedBuildForModal(squad)}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-950 border border-amber-500/40 hover:border-amber-400 text-amber-300 hover:text-amber-200 font-serif font-bold text-xs shadow-md transition-all"
                    >
                      <BookOpen className="w-4 h-4 text-amber-400" />
                      <span>View Full Build Guide</span>
                    </button>

                    <button
                      onClick={() => onLoadIntoBuilder(squad)}
                      className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-extrabold text-xs shadow-md transition-all font-serif uppercase tracking-wider"
                    >
                      <Zap className="w-3.5 h-3.5 fill-slate-950" />
                      <span>Builder</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      )}

      {/* Build Detail Modal */}
      {selectedBuildForModal && (
        <BuildDetailModal
          squad={selectedBuildForModal}
          isOpen={!!selectedBuildForModal}
          onClose={() => setSelectedBuildForModal(null)}
          onLoadIntoBuilder={onLoadIntoBuilder}
          isFavorite={favoriteIds.includes(selectedBuildForModal.id)}
          onToggleFavorite={handleToggleFavorite}
        />
      )}
    </div>
  );
};
