'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Crown, Sparkles, Filter, ShieldCheck, MapPin, Zap } from 'lucide-react';
import { ITEMS_DATA } from '@/data/items';
import { ItemType } from '@/types';

export const RelicCatalog: React.FC = () => {
  const [selectedType, setSelectedType] = useState<string>('All');
  const [onlyMetaCore, setOnlyMetaCore] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [imgErrors, setImgErrors] = useState<Record<string, boolean>>({});

  const types = ['All', 'Weapon', 'Shield', 'Accessory', 'Tome'];

  const filteredItems = ITEMS_DATA.filter((item) => {
    const matchesType = selectedType === 'All' || item.type === selectedType;
    const matchesMeta = !onlyMetaCore || item.isMetaCore;
    const matchesQuery =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.statBoosts.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.acquisition.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (item.grantedSkill && item.grantedSkill.name.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesType && matchesMeta && matchesQuery;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="relative rounded-2xl bg-gradient-to-r from-slate-950 via-slate-900 to-[#121826] p-6 sm:p-8 border border-amber-500/30 overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl -z-10 pointer-events-none" />
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Crown className="w-6 h-6 text-amber-400" />
              <h2 className="font-serif text-2xl sm:text-3xl font-bold bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 bg-clip-text text-transparent">
                Relics, Artifacts & Equipment Index
              </h2>
            </div>
            <p className="text-sm text-slate-300 max-w-2xl font-sans">
              Discover key build-enabling accessories like Cat-Ear Hood (Quick Impetus), Millennium Scepter, and Divine Shard shop gear that dictate meta strategy.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setOnlyMetaCore(!onlyMetaCore)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold flex items-center gap-2 transition ${
                onlyMetaCore
                  ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                  : 'bg-slate-900 border border-amber-500/30 text-amber-300 hover:bg-slate-800'
              }`}
            >
              <Sparkles className="w-4 h-4" />
              <span>{onlyMetaCore ? 'Showing Meta Core Only' : 'Filter Meta Core Items'}</span>
            </button>
          </div>
        </div>

        {/* Filter Controls */}
        <div className="mt-6 pt-6 border-t border-slate-800 flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
            <Filter className="w-4 h-4 text-slate-400 shrink-0" />
            {types.map((type) => (
              <button
                key={type}
                onClick={() => setSelectedType(type)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                  selectedType === type
                    ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                    : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                {type}
              </button>
            ))}
          </div>

          <input
            type="text"
            placeholder="Search equipment or granted skills..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="px-3.5 py-1.5 rounded-lg bg-slate-950 border border-amber-500/20 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-amber-400 w-full md:w-72"
          />
        </div>
      </div>

      {/* Equipment Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25, delay: idx * 0.04 }}
            className="group relative rounded-xl bg-slate-900/80 border border-amber-500/20 hover:border-amber-400/50 hover:shadow-[0_0_20px_rgba(245,158,11,0.15)] transition-all duration-300 p-5 flex flex-col justify-between"
          >
            <div className="space-y-4">
              {/* Item Header */}
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-slate-950 border border-amber-500/30 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform overflow-hidden relative">
                    {item.image && !imgErrors[item.id] ? (
                      <img
                        src={item.image}
                        alt={item.name}
                        onError={() => setImgErrors((prev) => ({ ...prev, [item.id]: true }))}
                        className="w-full h-full object-contain p-1"
                      />
                    ) : (
                      item.icon
                    )}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-serif text-base font-bold text-amber-200 group-hover:text-amber-300 transition">
                        {item.name}
                      </h3>
                      {item.isMetaCore && (
                        <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30 uppercase tracking-wider">
                          META CORE
                        </span>
                      )}
                    </div>
                    <span className="text-xs text-slate-400 font-medium">{item.type}</span>
                  </div>
                </div>
              </div>

              {/* Stat Boosts */}
              <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 text-xs">
                <span className="text-slate-400 font-semibold">Stat Boosts:</span>{' '}
                <span className="font-mono text-emerald-400 font-bold">{item.statBoosts}</span>
              </div>

              {/* Granted Skill (if any) */}
              {item.grantedSkill && (
                <div className="p-3 rounded-lg bg-amber-950/30 border border-amber-500/30 space-y-1">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-amber-300">
                      <Zap className="w-3.5 h-3.5" />
                      <span>{item.grantedSkill.name}</span>
                    </div>
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 font-bold">
                      {item.grantedSkill.cost}
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {item.grantedSkill.description}
                  </p>
                </div>
              )}

              {/* Acquisition Source */}
              <div className="flex items-start gap-1.5 text-xs text-slate-400 pt-1">
                <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                <span>Source: {item.acquisition}</span>
              </div>

              {/* Utilized by Meta Squads */}
              {item.metaSquads.length > 0 && (
                <div className="pt-2 border-t border-slate-800">
                  <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                    Utilized in Meta Comps:
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {item.metaSquads.map((sq, i) => (
                      <span
                        key={i}
                        className="text-[10px] px-2 py-0.5 rounded bg-slate-950 text-slate-300 border border-slate-800"
                      >
                        {sq}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
