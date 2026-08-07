'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ShoppingBag, Crown, Check, Plus, Minus, RefreshCw, Award, Info } from 'lucide-react';

interface DivineShopItem {
  id: string;
  name: string;
  category: 'Accessory' | 'Weapon' | 'Growth' | 'Special';
  cost: number;
  currency: 'Divine Shard' | 'Feather' | 'Star-Iron';
  effect: string;
  priority: 'S' | 'A' | 'B';
  recommendationNote: string;
}

const DIVINE_SHOP_ITEMS: DivineShopItem[] = [
  {
    id: 'cat-ear-hood',
    name: 'Cat-Ear Hood',
    category: 'Accessory',
    cost: 30,
    currency: 'Divine Shard',
    effect: 'Grants Quick Impetus: When an ally initiates a charged skill, spend 3 PP to grant them +1 AP and an immediate turn!',
    priority: 'S',
    recommendationNote: 'Highest priority item in the entire game! Required for Trinity Rain, Glacial Rain, and Dragoon Dive instant turn nukes.',
  },
  {
    id: 'carnelian-pendant',
    name: 'Carnelian Pendant',
    category: 'Accessory',
    cost: 20,
    currency: 'Divine Shard',
    effect: 'Grants +1 Active Point (AP)',
    priority: 'S',
    recommendationNote: 'Essential for spellcasters and multi-hit attackers to execute high-tier AP skills.',
  },
  {
    id: 'lapis-pendant',
    name: 'Lapis Pendant',
    category: 'Accessory',
    cost: 20,
    currency: 'Divine Shard',
    effect: 'Grants +1 Passive Point (PP)',
    priority: 'S',
    recommendationNote: 'Essential for enablers like Clerics, Druids, and Shield units to execute reactions and covers.',
  },
  {
    id: 'angelic-sword',
    name: 'Angelic Sword',
    category: 'Weapon',
    cost: 50,
    currency: 'Divine Shard',
    effect: 'Phys Atk +24, Initiative +5, Grants Hallowed Guard passive.',
    priority: 'A',
    recommendationNote: 'Excellent mid-game weapon boost for Alain or Crusader Virginia.',
  },
  {
    id: 'idealist-handmirror',
    name: 'Idealist\'s Handmirror',
    category: 'Special',
    cost: 30,
    currency: 'Divine Shard',
    effect: 'Allows respec of any unit\'s Growth Types and custom color palettes.',
    priority: 'A',
    recommendationNote: 'Use to optimize unit stat growths (e.g. changing Alain to All-Rounder + Offensive).',
  },
  {
    id: 'star-iron-upgrade',
    name: 'Star-Iron Equipment Forge Upgrade',
    category: 'Special',
    cost: 5,
    currency: 'Star-Iron',
    effect: 'Upgrades any weapon/shield base stats to max level 25 stats (Phys Atk 25 / Phys Def 20).',
    priority: 'S',
    recommendationNote: 'Allows early-game unique weapons to remain best-in-slot all the way through Albion endgame!',
  },
];

export const DivineShardCalculator: React.FC = () => {
  const [quantities, setQuantities] = useState<Record<string, number>>({});
  const [userShardsOwned, setUserShardsOwned] = useState<number>(0);

  const handleUpdateQty = (itemId: string, delta: number) => {
    setQuantities((prev) => {
      const current = prev[itemId] || 0;
      const nextVal = Math.max(0, current + delta);
      return { ...prev, [itemId]: nextVal };
    });
  };

  const totalShardsNeeded = DIVINE_SHOP_ITEMS.reduce((sum, item) => {
    const qty = quantities[item.id] || 0;
    if (item.currency === 'Divine Shard') {
      return sum + item.cost * qty;
    }
    return sum;
  }, 0);

  const shardsRemaining = userShardsOwned - totalShardsNeeded;

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="relative rounded-2xl bg-gradient-to-r from-slate-950 via-[#161208] to-slate-950 p-6 sm:p-8 border border-amber-500/40 overflow-hidden shadow-2xl filigree-box">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <ShoppingBag className="w-7 h-7 text-amber-400 drop-shadow-[0_0_10px_rgba(245,158,11,0.6)]" />
              <h2 className="font-serif text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-amber-100 via-amber-300 to-amber-500 bg-clip-text text-transparent">
                Divine Shard Shop & Equipment Resource Calculator
              </h2>
            </div>
            <p className="text-sm text-slate-300 max-w-2xl font-sans leading-relaxed">
              Calculate total Divine Shard shop costs, plan your wishlist for Cat-Ear Hood and AP/PP pendants, and check ideal purchase order recommendations.
            </p>
          </div>

          {/* Owned Shards Input */}
          <div className="p-4 rounded-xl bg-slate-950 border border-amber-500/40 space-y-1 shrink-0">
            <span className="text-[10px] font-serif font-bold text-amber-300 uppercase block">Divine Shards Owned:</span>
            <input
              type="number"
              min={0}
              value={userShardsOwned}
              onChange={(e) => setUserShardsOwned(parseInt(e.target.value) || 0)}
              className="w-32 px-3 py-1.5 rounded-lg bg-slate-900 border border-amber-500/40 text-amber-300 font-mono font-bold text-sm focus:outline-none focus:border-amber-400"
            />
          </div>
        </div>
      </div>

      {/* Summary Tracker Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-5 rounded-2xl bg-slate-900 border border-amber-500/30 flex items-center justify-between shadow-xl filigree-box">
          <div>
            <span className="text-xs font-serif font-bold text-slate-400 uppercase block">Total Wishlist Cost</span>
            <strong className="text-2xl font-mono font-extrabold text-amber-400">{totalShardsNeeded} Shards</strong>
          </div>
          <Sparkles className="w-8 h-8 text-amber-400/60" />
        </div>

        <div className="p-5 rounded-2xl bg-slate-900 border border-amber-500/30 flex items-center justify-between shadow-xl filigree-box">
          <div>
            <span className="text-xs font-serif font-bold text-slate-400 uppercase block">Divine Shards Owned</span>
            <strong className="text-2xl font-mono font-extrabold text-emerald-400">{userShardsOwned} Shards</strong>
          </div>
          <Crown className="w-8 h-8 text-emerald-400/60" />
        </div>

        <div className="p-5 rounded-2xl bg-slate-900 border border-amber-500/30 flex items-center justify-between shadow-xl filigree-box">
          <div>
            <span className="text-xs font-serif font-bold text-slate-400 uppercase block">Net Balance Status</span>
            <strong className={`text-2xl font-mono font-extrabold ${shardsRemaining >= 0 ? 'text-cyan-400' : 'text-rose-400'}`}>
              {shardsRemaining >= 0 ? `+${shardsRemaining} Left` : `${shardsRemaining} Needed`}
            </strong>
          </div>
          <Award className="w-8 h-8 text-cyan-400/60" />
        </div>
      </div>

      {/* Shop Items List */}
      <div className="space-y-4">
        <h3 className="font-serif text-lg font-bold text-amber-200 flex items-center gap-2">
          <ShoppingBag className="w-5 h-5 text-amber-400" />
          <span>Divine Shard Shop Catalog & Priority List</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {DIVINE_SHOP_ITEMS.map((item) => {
            const qty = quantities[item.id] || 0;
            return (
              <div
                key={item.id}
                className="p-5 rounded-2xl bg-slate-950 border border-amber-500/30 hover:border-amber-400/60 transition space-y-4 flex flex-col justify-between filigree-box"
              >
                <div className="space-y-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="equipment-pill px-3 py-1 text-sm font-serif font-bold text-amber-200">
                          👑 {item.name}
                        </span>
                        <span
                          className={`text-[10px] font-mono font-extrabold px-2 py-0.5 rounded border uppercase ${
                            item.priority === 'S'
                              ? 'bg-amber-500/20 text-amber-300 border-amber-500/40'
                              : 'bg-purple-500/20 text-purple-300 border-purple-500/40'
                          }`}
                        >
                          PRIORITY {item.priority}
                        </span>
                      </div>
                      <span className="text-xs text-slate-400 font-serif font-bold mt-1 block">{item.category}</span>
                    </div>

                    <span className="text-sm font-mono font-bold text-amber-300 px-3 py-1 rounded bg-amber-500/10 border border-amber-500/30 shrink-0">
                      {item.cost} {item.currency}s
                    </span>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed font-sans">{item.effect}</p>

                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 flex items-start gap-2 text-xs text-amber-100/90 font-sans">
                    <Info className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>{item.recommendationNote}</span>
                  </div>
                </div>

                {/* Quantity Counter Control */}
                <div className="pt-3 border-t border-slate-900 flex items-center justify-between">
                  <span className="text-xs font-serif font-bold text-slate-400">Wishlist Quantity:</span>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleUpdateQty(item.id, -1)}
                      className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white transition"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="font-mono font-bold text-sm text-amber-300 w-8 text-center">{qty}</span>
                    <button
                      onClick={() => handleUpdateQty(item.id, 1)}
                      className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white transition"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
