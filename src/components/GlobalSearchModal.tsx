'use client';

import React, { useState, useEffect } from 'react';
import { Search, X, Shield, Sword, Crown, Swords, ChevronRight } from 'lucide-react';
import { CLASSES_DATA } from '@/data/classes';
import { ITEMS_DATA } from '@/data/items';
import { SKILLS_DATA } from '@/data/skills';
import { SQUADS_DATA } from '@/data/squads';
import { COUNTERS_DATA } from '@/data/counters';

interface GlobalSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  setActiveTab: (tab: string) => void;
  onSelectClass?: (classId: string) => void;
  onSelectSquad?: (squadId: string) => void;
}

export const GlobalSearchModal: React.FC<GlobalSearchModalProps> = ({
  isOpen,
  onClose,
  setActiveTab,
}) => {
  const [query, setQuery] = useState('');

  // Handle Cmd+K / Ctrl+K keyboard shortcut
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else {
          setQuery('');
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const q = query.trim().toLowerCase();

  const matchedClasses = q
    ? CLASSES_DATA.filter(
        (c) =>
          c.name.toLowerCase().includes(q) ||
          c.role.toLowerCase().includes(q) ||
          c.category.toLowerCase().includes(q)
      )
    : CLASSES_DATA.slice(0, 4);

  const matchedItems = q
    ? ITEMS_DATA.filter(
        (i) =>
          i.name.toLowerCase().includes(q) ||
          i.type.toLowerCase().includes(q) ||
          i.statBoosts.toLowerCase().includes(q)
      )
    : ITEMS_DATA.slice(0, 4);

  const matchedSquads = q
    ? SQUADS_DATA.filter(
        (s) =>
          s.name.toLowerCase().includes(q) ||
          s.archetype.toLowerCase().includes(q) ||
          s.keyItems.some((k) => k.toLowerCase().includes(q))
      )
    : SQUADS_DATA.slice(0, 3);

  const matchedSkills = q
    ? SKILLS_DATA.filter(
        (s) =>
          s.name.toLowerCase().includes(q) ||
          s.classSource.toLowerCase().includes(q) ||
          s.description.toLowerCase().includes(q)
      )
    : SKILLS_DATA.slice(0, 3);

  const matchedCounters = q
    ? COUNTERS_DATA.filter(
        (c) =>
          c.enemyArchetype.toLowerCase().includes(q) ||
          c.threatDescription.toLowerCase().includes(q)
      )
    : COUNTERS_DATA.slice(0, 2);

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 px-4 bg-slate-950/80 backdrop-blur-md">
      <div
        className="w-full max-w-2xl bg-[#0e1422] border border-amber-500/30 rounded-xl shadow-2xl overflow-hidden flex flex-col max-h-[80vh] animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Header */}
        <div className="flex items-center px-4 py-3 border-b border-amber-500/20 bg-slate-900/90 gap-3">
          <Search className="w-5 h-5 text-amber-400" />
          <input
            type="text"
            placeholder="Search classes, items, squads, counter tactics..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
            className="flex-1 bg-transparent border-none text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-0 text-sm"
          />
          <button
            onClick={onClose}
            className="p-1 text-slate-400 hover:text-white rounded-md hover:bg-slate-800 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results Body */}
        <div className="p-4 overflow-y-auto space-y-5 no-scrollbar">
          {/* Squads */}
          {matchedSquads.length > 0 && (
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider mb-2">
                <Shield className="w-3.5 h-3.5" />
                <span>Meta Compositions ({matchedSquads.length})</span>
              </div>
              <div className="space-y-1.5">
                {matchedSquads.map((squad) => (
                  <div
                    key={squad.id}
                    onClick={() => {
                      setActiveTab('meta');
                      onClose();
                    }}
                    className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800 hover:border-amber-500/40 hover:bg-slate-800/80 cursor-pointer flex items-center justify-between transition group"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-semibold text-amber-200 group-hover:text-amber-300">
                          {squad.name}
                        </span>
                        <span className="text-[10px] px-1.5 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20">
                          {squad.archetype}
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 line-clamp-1">{squad.description}</p>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-amber-400 transition" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Classes */}
          {matchedClasses.length > 0 && (
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-purple-400 uppercase tracking-wider mb-2">
                <Sword className="w-3.5 h-3.5" />
                <span>Classes & Units ({matchedClasses.length})</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {matchedClasses.map((cls) => (
                  <div
                    key={cls.id}
                    onClick={() => {
                      setActiveTab('database');
                      onClose();
                    }}
                    className="p-2 rounded-lg bg-slate-900/60 border border-slate-800 hover:border-purple-500/40 hover:bg-slate-800/80 cursor-pointer flex items-center justify-between transition group"
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="text-xl">{cls.icon}</span>
                      <div>
                        <span className="text-xs font-semibold text-slate-200 group-hover:text-purple-300">
                          {cls.name}
                        </span>
                        <div className="text-[10px] text-slate-400">
                          {cls.category} • {cls.role}
                        </div>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-amber-400">{cls.tier}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Items */}
          {matchedItems.length > 0 && (
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 uppercase tracking-wider mb-2">
                <Crown className="w-3.5 h-3.5" />
                <span>Relics & Equipment ({matchedItems.length})</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {matchedItems.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => {
                      setActiveTab('relics');
                      onClose();
                    }}
                    className="p-2 rounded-lg bg-slate-900/60 border border-slate-800 hover:border-emerald-500/40 hover:bg-slate-800/80 cursor-pointer flex items-center justify-between transition group"
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="text-xl">{item.icon}</span>
                      <div>
                        <div className="flex items-center gap-1.5">
                          <span className="text-xs font-semibold text-slate-200 group-hover:text-emerald-300">
                            {item.name}
                          </span>
                          {item.isMetaCore && (
                            <span className="text-[9px] px-1 rounded bg-amber-500/20 text-amber-300 font-bold">
                              CORE
                            </span>
                          )}
                        </div>
                        <div className="text-[10px] text-slate-400">{item.type}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Counters */}
          {matchedCounters.length > 0 && (
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-red-400 uppercase tracking-wider mb-2">
                <Swords className="w-3.5 h-3.5" />
                <span>Counter Matrix ({matchedCounters.length})</span>
              </div>
              <div className="space-y-1.5">
                {matchedCounters.map((cnt) => (
                  <div
                    key={cnt.id}
                    onClick={() => {
                      setActiveTab('coliseum');
                      onClose();
                    }}
                    className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800 hover:border-red-500/40 hover:bg-slate-800/80 cursor-pointer flex items-center justify-between transition group"
                  >
                    <div>
                      <span className="text-xs font-semibold text-slate-200 group-hover:text-red-300">
                        Counter vs {cnt.enemyArchetype}
                      </span>
                      <p className="text-[11px] text-slate-400 line-clamp-1">{cnt.tacticalTip}</p>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-red-400 transition" />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer info */}
        <div className="px-4 py-2 border-t border-slate-800 bg-slate-950 flex items-center justify-between text-[11px] text-slate-500">
          <span>
            Press <kbd className="px-1 py-0.5 bg-slate-800 rounded text-slate-300">ESC</kbd> to exit
          </span>
          <span>Unicorn Overlord Meta Engine</span>
        </div>
      </div>
    </div>
  );
};
