'use client';

import React from 'react';
import { Shield, Sword, Crown, Zap, Swords, Search, ExternalLink, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  openSearch: () => void;
}

export const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab, openSearch }) => {
  const tabs = [
    { id: 'meta', label: 'Meta Compositions', icon: Shield },
    { id: 'database', label: 'Class Compendium', icon: Sword },
    { id: 'relics', label: 'Relic Index', icon: Crown },
    { id: 'skills', label: 'Skills & Tactics', icon: Sparkles },
    { id: 'builder', label: '5-Unit Squad Builder', icon: Zap, badge: 'Interactive' },
    { id: 'coliseum', label: 'Coliseum Matrix', icon: Swords },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b-2 border-amber-500/40 bg-[#070a12]/95 backdrop-blur-md shadow-2xl shadow-black/80">
      {/* Top Banner Branding */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-col sm:flex-row items-center justify-between gap-3">
        {/* Title / Crest */}
        <div className="flex items-center gap-3.5 cursor-pointer group" onClick={() => setActiveTab('meta')}>
          <div className="relative w-11 h-11 rounded-xl bg-gradient-to-br from-amber-400 via-amber-600 to-amber-950 p-0.5 shadow-lg shadow-amber-500/30 group-hover:shadow-amber-500/50 transition-all duration-300">
            <div className="w-full h-full bg-[#090e1a] rounded-[10px] flex items-center justify-center border border-amber-400/40">
              <Crown className="w-6 h-6 text-amber-400 group-hover:scale-110 transition-transform duration-300 drop-shadow-[0_0_8px_rgba(245,158,11,0.8)]" />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="font-serif text-lg sm:text-xl font-bold tracking-widest bg-gradient-to-r from-amber-100 via-amber-300 to-amber-500 bg-clip-text text-transparent uppercase drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                Unicorn Overlord
              </h1>
              <span className="text-[10px] uppercase font-serif font-bold tracking-wider px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/40 shadow-sm">
                v1.0.4 Meta
              </span>
            </div>
            <p className="text-xs text-amber-200/70 font-serif tracking-wider">
              Meta Engine & Master Tactics Hub
            </p>
          </div>
        </div>

        {/* Global Search & Actions */}
        <div className="flex items-center gap-2.5 w-full sm:w-auto">
          {/* Quick Search Button (Cmd+K style) */}
          <button
            onClick={openSearch}
            className="flex-1 sm:flex-initial flex items-center gap-3 px-4 py-1.5 rounded-lg bg-slate-900/90 border border-amber-500/30 text-amber-100 hover:text-white hover:border-amber-400 hover:bg-slate-800 transition-all text-xs shadow-inner group filigree-box"
          >
            <Search className="w-4 h-4 text-amber-400 group-hover:scale-110 transition-transform" />
            <span className="hidden md:inline font-sans text-slate-300">Search classes, items, squads, skills...</span>
            <span className="md:hidden font-sans text-slate-300">Search...</span>
            <kbd className="hidden sm:inline-flex items-center gap-0.5 px-1.5 py-0.5 text-[10px] font-mono bg-slate-950 text-amber-400/80 rounded border border-amber-500/30">
              <span className="text-[9px]">⌘</span>K
            </kbd>
          </button>

          {/* GitHub Repo Badge */}
          <a
            href="https://github.com/qdev89/AppXDev.UnicornOverlordMeta"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-500/10 border border-amber-500/40 text-amber-300 hover:bg-amber-500/20 hover:text-amber-200 transition-all text-xs font-serif font-bold shadow-md"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">GitHub Pages</span>
          </a>
        </div>
      </div>

      {/* Navigation Tabs Bar */}
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 border-t border-amber-500/20">
        <nav className="flex overflow-x-auto no-scrollbar gap-1 py-1.5 sm:gap-2">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-serif tracking-wider uppercase whitespace-nowrap transition-all duration-200 ${
                  isActive
                    ? 'text-slate-950 font-bold bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 shadow-[0_0_15px_rgba(245,158,11,0.5)] border border-amber-300'
                    : 'text-amber-200/80 hover:text-amber-100 hover:bg-amber-500/10 border border-transparent'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-slate-950' : 'text-amber-400/80'}`} />
                <span>{tab.label}</span>

                {tab.badge && (
                  <span className={`ml-1 text-[9px] font-bold px-1.5 py-0.2 rounded-full uppercase tracking-wider ${
                    isActive ? 'bg-slate-950 text-amber-400' : 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                  }`}>
                    {tab.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
};
