'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Shield, Zap, Sparkles, Check, Plus, Trash2, Award } from 'lucide-react';
import { ITEMS_DATA } from '@/data/items';
import { RelicItem, SquadSlot, UnitClass } from '@/types';

interface EquipmentModalProps {
  slot: SquadSlot;
  unit: UnitClass;
  onClose: () => void;
  onSaveEquipment: (slotId: string, itemIds: (string | null)[]) => void;
}

export const EquipmentModal: React.FC<EquipmentModalProps> = ({
  slot,
  unit,
  onClose,
  onSaveEquipment,
}) => {
  const initialItems = slot.customItems || [null, null, null, null];
  const [selectedItems, setSelectedItems] = useState<(string | null)[]>(initialItems);
  const [activeSlotIdx, setActiveSlotIdx] = useState<number | null>(null);

  const slotLabels = ['Weapon / Main', 'Shield / Secondary', 'Accessory 1', 'Accessory 2'];

  const getEquippedItem = (itemId: string | null): RelicItem | undefined => {
    if (!itemId) return undefined;
    return ITEMS_DATA.find((i) => i.id === itemId);
  };

  const handleSelectItem = (item: RelicItem) => {
    if (activeSlotIdx === null) return;
    const next = [...selectedItems];
    next[activeSlotIdx] = item.id;
    setSelectedItems(next);
    setActiveSlotIdx(null);
  };

  const handleRemoveItem = (idx: number) => {
    const next = [...selectedItems];
    next[idx] = null;
    setSelectedItems(next);
  };

  const handleSave = () => {
    onSaveEquipment(slot.slotId, selectedItems);
    onClose();
  };

  // Calculate dynamic stat boosts
  const equippedList = selectedItems.map(getEquippedItem).filter(Boolean) as RelicItem[];

  let apBonus = 0;
  let ppBonus = 0;
  let initBonus = 0;
  let physAtkBonus = 0;
  let magAtkBonus = 0;

  equippedList.forEach((item) => {
    if (item.statBoosts.includes('AP +1')) apBonus += 1;
    if (item.statBoosts.includes('PP +1')) ppBonus += 1;
    if (item.statBoosts.includes('Initiative +5')) initBonus += 5;
    if (item.statBoosts.includes('Initiative +4')) initBonus += 4;
    if (item.statBoosts.includes('Phys Atk +24')) physAtkBonus += 24;
    if (item.statBoosts.includes('Mag Atk +25')) magAtkBonus += 25;
    if (item.statBoosts.includes('Mag Atk +18')) magAtkBonus += 18;
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        className="relative w-full max-w-2xl bg-slate-900 border border-amber-500/40 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
      >
        {/* Header */}
        <div className="p-5 border-b border-slate-800 flex items-center justify-between bg-slate-950">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg bg-slate-900 border border-amber-500/40 flex items-center justify-center overflow-hidden relative">
              {unit.image ? (
                <img src={unit.image} alt={unit.name} className="w-full h-full object-cover" />
              ) : (
                unit.icon
              )}
            </div>
            <div>
              <h3 className="font-serif text-lg font-bold text-amber-200">
                Unit Equipment Loadout — {unit.name}
              </h3>
              <p className="text-xs text-slate-400">
                Equip relics, weapons, and accessories to recalculate stats and unlock granted skills.
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Dynamic Stat Boost Bar */}
        <div className="p-4 bg-slate-950/60 border-b border-slate-800 flex items-center justify-around text-xs">
          <div className="text-center">
            <span className="text-slate-400 block text-[10px] uppercase">Base + Bonus HP</span>
            <strong className="text-emerald-400 font-mono text-sm">{unit.baseStats.hp}</strong>
          </div>
          <div className="text-center">
            <span className="text-slate-400 block text-[10px] uppercase">Phys Atk</span>
            <strong className="text-amber-300 font-mono text-sm">
              {unit.baseStats.physAtk + physAtkBonus}
              {physAtkBonus > 0 && <span className="text-emerald-400 text-[10px] ml-1">(+{physAtkBonus})</span>}
            </strong>
          </div>
          <div className="text-center">
            <span className="text-slate-400 block text-[10px] uppercase">Mag Atk</span>
            <strong className="text-purple-300 font-mono text-sm">
              {unit.baseStats.magAtk + magAtkBonus}
              {magAtkBonus > 0 && <span className="text-emerald-400 text-[10px] ml-1">(+{magAtkBonus})</span>}
            </strong>
          </div>
          <div className="text-center">
            <span className="text-slate-400 block text-[10px] uppercase">Initiative</span>
            <strong className="text-cyan-300 font-mono text-sm">
              {unit.baseStats.initiative + initBonus}
              {initBonus > 0 && <span className="text-emerald-400 text-[10px] ml-1">(+{initBonus})</span>}
            </strong>
          </div>
          <div className="text-center">
            <span className="text-slate-400 block text-[10px] uppercase">Bonus AP / PP</span>
            <strong className="text-yellow-400 font-mono text-sm">
              +{apBonus} AP / +{ppBonus} PP
            </strong>
          </div>
        </div>

        {/* Loadout Slots Grid */}
        <div className="p-5 space-y-4 overflow-y-auto flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {slotLabels.map((label, idx) => {
              const item = getEquippedItem(selectedItems[idx]);
              return (
                <div
                  key={idx}
                  className={`p-3 rounded-xl border transition-all ${
                    item
                      ? 'bg-slate-950 border-amber-500/40'
                      : 'bg-slate-950/40 border-slate-800 border-dashed'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs mb-2">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                      {label}
                    </span>
                    {item && (
                      <button
                        onClick={() => handleRemoveItem(idx)}
                        className="text-slate-500 hover:text-red-400 transition"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>

                  {item ? (
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-slate-900 border border-amber-500/30 flex items-center justify-center overflow-hidden shrink-0">
                        {item.image ? (
                          <img src={item.image} alt={item.name} className="w-full h-full object-contain p-0.5" />
                        ) : (
                          item.icon
                        )}
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="font-bold text-xs text-amber-200 truncate">{item.name}</div>
                        <div className="text-[10px] text-emerald-400 font-mono truncate">
                          {item.statBoosts}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <button
                      onClick={() => setActiveSlotIdx(idx)}
                      className="w-full py-2 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700/60 text-slate-300 hover:text-amber-200 text-xs font-semibold flex items-center justify-center gap-1.5 transition"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>Equip Item</span>
                    </button>
                  )}
                </div>
              );
            })}
          </div>

          {/* Granted Skills List */}
          {equippedList.some((i) => i.grantedSkill) && (
            <div className="p-3.5 rounded-xl bg-amber-950/30 border border-amber-500/30 space-y-2">
              <h4 className="text-xs font-bold text-amber-300 uppercase tracking-wider flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-amber-400" />
                <span>Granted Equipment Skills</span>
              </h4>
              <div className="space-y-1.5">
                {equippedList
                  .filter((i) => i.grantedSkill)
                  .map((item) => (
                    <div
                      key={item.id}
                      className="p-2 rounded bg-slate-950/80 border border-amber-500/20 text-xs flex items-center justify-between"
                    >
                      <div>
                        <strong className="text-amber-200">{item.grantedSkill?.name}</strong>
                        <p className="text-[11px] text-slate-300 mt-0.5">
                          {item.grantedSkill?.description}
                        </p>
                      </div>
                      <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 text-[10px] font-mono font-bold shrink-0">
                        {item.grantedSkill?.cost}
                      </span>
                    </div>
                  ))}
              </div>
            </div>
          )}

          {/* Item Selector Sub-Drawer */}
          <AnimatePresence>
            {activeSlotIdx !== null && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="p-4 rounded-xl bg-slate-950 border border-amber-500/50 space-y-3"
              >
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-bold text-amber-300 uppercase tracking-wider">
                    Select Item for {slotLabels[activeSlotIdx]}
                  </h4>
                  <button
                    onClick={() => setActiveSlotIdx(null)}
                    className="text-xs text-slate-400 hover:text-white"
                  >
                    Cancel
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-48 overflow-y-auto no-scrollbar">
                  {ITEMS_DATA.map((item) => (
                    <div
                      key={item.id}
                      onClick={() => handleSelectItem(item)}
                      className="p-2 rounded.lg bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-amber-500/40 transition cursor-pointer flex items-center gap-2.5"
                    >
                      <div className="w-8 h-8 rounded bg-slate-950 border border-slate-700 flex items-center justify-center overflow-hidden shrink-0">
                        {item.image ? (
                          <img src={item.image} alt={item.name} className="w-full h-full object-contain p-0.5" />
                        ) : (
                          item.icon
                        )}
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="font-semibold text-xs text-slate-100 truncate">{item.name}</div>
                        <div className="text-[10px] text-slate-400 truncate">{item.statBoosts}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-950 border-t border-slate-800 flex items-center justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white text-xs font-semibold transition"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-5 py-2 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs shadow-md transition"
          >
            Save Loadout
          </button>
        </div>
      </motion.div>
    </div>
  );
};
