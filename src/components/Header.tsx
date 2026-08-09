'use client';

import React, { useState } from 'react';
import {
  Shield,
  Sword,
  Crown,
  Zap,
  Swords,
  Search,
  ExternalLink,
  Sparkles,
  ShoppingBag,
  Menu,
  X,
  Award,
  BookOpen,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  openSearch: () => void;
}

export const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab, openSearch }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const tabs = [
    {
      id: 'zero-overlap',
      label: 'Top 10 Zero-Overlap',
      icon: Crown,
      badge: '0% Conflict',
      featured: true,
      description: '10 Squads, 50 Unique Heroes, 0 Gear Overlap',
    },
    {
      id: 'meta',
      label: 'Meta Compositions',
      icon: Shield,
      description: 'Reddit & Community Build Guides',
    },
    {
      id: 'database',
      label: 'Class Compendium',
      icon: Sword,
      description: 'Classes, Growth Types & Stats',
    },
    {
      id: 'relics',
      label: 'Relic Index',
      icon: Award,
      description: 'Unique Equipment & Granted Skills',
    },
    {
      id: 'skills',
      label: 'Skills & Tactics',
      icon: Sparkles,
      description: 'Gambits & Active/Passive Skills',
    },
    {
      id: 'builder',
      label: '5-Unit Squad Builder',
      icon: Zap,
      badge: 'Interactive',
      description: 'Build & Export Custom Squads',
    },
    {
      id: 'coliseum',
      label: 'Coliseum Matrix',
      icon: Swords,
      description: 'Counter Matchups & Arena Rules',
    },
    {
      id: 'divine',
      label: 'Divine Shard Shop',
      icon: ShoppingBag,
      badge: 'Shop',
      description: 'Divine Shard Priority Calculator',
    },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b-2 border-amber-500/40 bg-[#060913]/95 backdrop-blur-md shadow-2xl shadow-black/90">
      {/* Top Branding Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between gap-4">
        {/* Title / Crest */}
        <div
          className="flex items-center gap-3.5 cursor-pointer group"
          onClick={() => setActiveTab('zero-overlap')}
        >
          <div className="relative w-11 h-11 rounded-xl bg-gradient-to-br from-amber-300 via-amber-500 to-amber-900 p-0.5 shadow-xl shadow-amber-500/30 group-hover:shadow-amber-500/60 transition-all duration-300">
            <div className="w-full h-full bg-[#080d19] rounded-[10px] flex items-center justify-center border border-amber-400/50">
              <Crown className="w-6 h-6 text-amber-400 group-hover:scale-110 transition-transform duration-300 drop-shadow-[0_0_10px_rgba(245,158,11,0.9)]" />
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2">
              <h1 className="font-serif text-lg sm:text-xl font-extrabold tracking-widest bg-gradient-to-r from-amber-100 via-amber-300 to-amber-500 bg-clip-text text-transparent uppercase drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
                Unicorn Overlord
              </h1>
              <span className="text-[10px] uppercase font-serif font-bold tracking-wider px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/40 shadow-sm">
                v1.0.4 Meta
              </span>
            </div>
            <p className="text-xs text-amber-200/70 font-serif tracking-wider flex items-center gap-1.5">
              <span>Meta Engine & Master Tactics Hub</span>
              <span className="text-amber-500">•</span>
              <span className="text-emerald-400 font-mono text-[10px] font-bold">
                0% Conflict Certified
              </span>
            </p>
          </div>
        </div>

        {/* Global Search & Actions */}
        <div className="hidden md:flex items-center gap-3">
          {/* Quick Search Button (Cmd+K style) */}
          <button
            onClick={openSearch}
            className="flex items-center gap-3 px-4 py-2 rounded-xl bg-slate-900/90 border border-amber-500/30 text-amber-100 hover:text-white hover:border-amber-400 hover:bg-slate-800 transition-all text-xs shadow-inner group filigree-box"
          >
            <Search className="w-4 h-4 text-amber-400 group-hover:scale-110 transition-transform" />
            <span className="font-sans text-slate-300">Search heroes, relics, squads, skills...</span>
            <kbd className="inline-flex items-center gap-0.5 px-1.5 py-0.5 text-[10px] font-mono bg-slate-950 text-amber-400/80 rounded border border-amber-500/30">
              <span className="text-[9px]">⌘</span>K
            </kbd>
          </button>

          {/* GitHub Repo Badge */}
          <a
            href="https://github.com/qdev89/AppXDev.UnicornOverlordMeta"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-amber-500/10 border border-amber-500/40 text-amber-300 hover:bg-amber-500/20 hover:text-amber-200 transition-all text-xs font-serif font-bold shadow-md"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            <span>GitHub Pages</span>
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={openSearch}
            className="p-2 rounded-lg bg-slate-900 border border-amber-500/30 text-amber-300"
          >
            <Search className="w-4 h-4" />
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-slate-900 border border-amber-500/40 text-amber-300"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Navigation Hub Bar (Desktop) */}
      <div className="hidden md:block border-t border-amber-500/20 bg-[#04070e]/90 py-1.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between gap-1 overflow-x-auto no-scrollbar py-0.5">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              const isFeatured = tab.featured;

              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-serif tracking-wider uppercase whitespace-nowrap transition-all duration-200 ${
                    isActive
                      ? isFeatured
                        ? 'text-slate-950 font-extrabold bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 shadow-[0_0_20px_rgba(245,158,11,0.7)] border-2 border-amber-200 scale-[1.02]'
                        : 'text-slate-950 font-bold bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 shadow-[0_0_15px_rgba(245,158,11,0.5)] border border-amber-300'
                      : isFeatured
                      ? 'text-amber-200 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/40 shadow-sm'
                      : 'text-slate-300 hover:text-amber-100 hover:bg-amber-500/10 border border-transparent'
                  }`}
                >
                  <Icon
                    className={`w-4 h-4 ${
                      isActive
                        ? 'text-slate-950'
                        : isFeatured
                        ? 'text-amber-400'
                        : 'text-amber-400/70'
                    }`}
                  />
                  <span>{tab.label}</span>

                  {tab.badge && (
                    <span
                      className={`ml-1 text-[9px] font-bold px-1.5 py-0.2 rounded-full uppercase tracking-wider ${
                        isActive
                          ? 'bg-slate-950 text-amber-400'
                          : isFeatured
                          ? 'bg-amber-500 text-slate-950 font-extrabold'
                          : 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                      }`}
                    >
                      {tab.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden border-t border-amber-500/30 bg-[#070b14] overflow-hidden"
          >
            <div className="p-4 space-y-2">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => {
                      setActiveTab(tab.id);
                      setMobileMenuOpen(false);
                    }}
                    className={`w-full flex items-center justify-between p-3 rounded-xl text-left font-serif text-sm transition ${
                      isActive
                        ? 'bg-gradient-to-r from-amber-400 to-amber-600 text-slate-950 font-bold shadow-lg'
                        : 'bg-slate-900/80 text-slate-200 border border-slate-800 hover:border-amber-500/40'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon className={`w-4 h-4 ${isActive ? 'text-slate-950' : 'text-amber-400'}`} />
                      <div>
                        <div className="font-bold">{tab.label}</div>
                        <div className={`text-[10px] ${isActive ? 'text-slate-900' : 'text-slate-400'}`}>
                          {tab.description}
                        </div>
                      </div>
                    </div>

                    {tab.badge && (
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                        isActive ? 'bg-slate-950 text-amber-400' : 'bg-amber-500/20 text-amber-300'
                      }`}>
                        {tab.badge}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
