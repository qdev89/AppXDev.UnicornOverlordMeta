'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Header } from '@/components/Header';
import { GlobalSearchModal } from '@/components/GlobalSearchModal';
import { MetaCompositions } from '@/components/tabs/MetaCompositions';
import { ClassDatabase } from '@/components/tabs/ClassDatabase';
import { RelicCatalog } from '@/components/tabs/RelicCatalog';
import { SkillCompendium } from '@/components/tabs/SkillCompendium';
import { SquadBuilder } from '@/components/tabs/SquadBuilder';
import { CounterMatrix } from '@/components/tabs/CounterMatrix';
import { DivineShardCalculator } from '@/components/tabs/DivineShardCalculator';
import { SquadBuild } from '@/types';
import { Crown, Heart, Shield, ExternalLink } from 'lucide-react';

export default function Home() {
  const [activeTab, setActiveTab] = useState<string>('meta');
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [builderSquad, setBuilderSquad] = useState<SquadBuild | null>(null);

  const handleLoadSquadIntoBuilder = (squad: SquadBuild) => {
    setBuilderSquad(squad);
    setActiveTab('builder');
  };

  return (
    <div className="min-h-screen bg-[#0b0f19] flex flex-col justify-between selection:bg-amber-500 selection:text-slate-950">
      <div>
        {/* Sticky Header Navigation */}
        <Header
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          openSearch={() => setIsSearchOpen(true)}
        />

        {/* Main Content Hubs */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <AnimatePresence mode="wait">
            {activeTab === 'meta' && (
              <motion.div
                key="meta"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.2 }}
              >
                <MetaCompositions onLoadIntoBuilder={handleLoadSquadIntoBuilder} />
              </motion.div>
            )}

            {activeTab === 'database' && (
              <motion.div
                key="database"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.2 }}
              >
                <ClassDatabase onLoadIntoBuilder={handleLoadSquadIntoBuilder} />
              </motion.div>
            )}

            {activeTab === 'relics' && (
              <motion.div
                key="relics"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.2 }}
              >
                <RelicCatalog />
              </motion.div>
            )}

            {activeTab === 'skills' && (
              <motion.div
                key="skills"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.2 }}
              >
                <SkillCompendium />
              </motion.div>
            )}

            {activeTab === 'builder' && (
              <motion.div
                key="builder"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.2 }}
              >
                <SquadBuilder initialSquad={builderSquad} />
              </motion.div>
            )}

            {activeTab === 'coliseum' && (
              <motion.div
                key="coliseum"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.2 }}
              >
                <CounterMatrix />
              </motion.div>
            )}

            {activeTab === 'divine' && (
              <motion.div
                key="divine"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.2 }}
              >
                <DivineShardCalculator />
              </motion.div>
            )}
          </AnimatePresence>
        </main>
      </div>

      {/* Global Search Modal */}
      <GlobalSearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        setActiveTab={setActiveTab}
      />

      {/* Medieval Footer */}
      <footer className="w-full border-t border-amber-500/20 bg-slate-950/90 py-6 mt-12 text-xs text-slate-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Crown className="w-4 h-4 text-amber-400" />
            <span className="font-serif font-bold text-amber-200">
              Unicorn Overlord: Meta Engine & Master Tactics Hub
            </span>
          </div>

          <div className="flex items-center gap-4 text-slate-400">
            <span>Crafted for Tactical Grandmasters</span>
            <span>•</span>
            <a
              href="https://github.com/qdev89/AppXDev.UnicornOverlordMeta"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-300 transition flex items-center gap-1"
            >
              <span>GitHub Pages Ready</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
