'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, Sliders, ArrowUp, ArrowDown, Check, Zap, Shield, Crown } from 'lucide-react';
import { SquadSlot, TacticsRule, UnitClass } from '@/types';
import { CLASSES_DATA } from '@/data/classes';
import { ITEMS_DATA } from '@/data/items';

interface TacticsEditorModalProps {
  slot: SquadSlot;
  isOpen: boolean;
  onClose: () => void;
  onSaveTactics: (slotId: string, tactics: TacticsRule[]) => void;
}

export const CONDITION_1_OPTIONS = [
  '[Always Active]',
  '[Target: Front Row]',
  '[Target: Back Row]',
  '[Target: Full Row]',
  '[Target: All Enemies]',
  '[Target: Highest Phys Def]',
  '[Target: Lowest HP]',
  '[Target: Flying]',
  '[Target: Cavalry]',
  '[Target: Armored]',
  '[Target: Afflicted Enemy]',
  '[Own HP < 50%]',
  '[Start of Battle]',
];

export const CONDITION_2_OPTIONS = [
  '[None]',
  '[AP >= 1]',
  '[AP >= 2]',
  '[AP >= 4]',
  '[PP >= 1]',
  '[PP >= 2]',
  '[PP >= 3]',
  '[Prioritize Highest Initiative]',
  '[Prioritize Lowest Phys Def]',
  '[Prioritize Full Rows]',
  '[Condition: Afflicted Ally]',
  '[Guaranteed Crit + True Strike]',
];

export const TacticsEditorModal: React.FC<TacticsEditorModalProps> = ({
  slot,
  isOpen,
  onClose,
  onSaveTactics,
}) => {
  const unit: UnitClass | null = slot.unitId
    ? CLASSES_DATA.find((c) => c.id === slot.unitId) || null
    : null;

  // Initialize rules from unit active/passive skills + equipped items granted skills
  const [rules, setRules] = useState<TacticsRule[]>(() => {
    if (slot.customTactics && slot.customTactics.length > 0) {
      return slot.customTactics;
    }
    if (!unit) return [];

    const defaultRules: TacticsRule[] = [];

    unit.activeSkills.forEach((sk, idx) => {
      defaultRules.push({
        id: `active-${idx}`,
        skillName: sk.name,
        skillType: 'active',
        cost: sk.apCost,
        condition1: sk.target === 'Full Row' ? '[Target: Full Row]' : sk.target === 'All Enemies' ? '[Target: All Enemies]' : '[Always Active]',
        condition2: sk.apCost >= 2 ? `[AP >= ${sk.apCost}]` : '[None]',
        isEnabled: true,
      });
    });

    unit.passiveSkills.forEach((sk, idx) => {
      defaultRules.push({
        id: `passive-${idx}`,
        skillName: sk.name,
        skillType: 'passive',
        cost: sk.ppCost,
        condition1: sk.isStartOfBattle ? '[Start of Battle]' : '[Always Active]',
        condition2: sk.ppCost >= 2 ? `[PP >= ${sk.ppCost}]` : '[None]',
        isEnabled: true,
      });
    });

    // Add Item Granted Skills
    if (slot.customItems) {
      slot.customItems.forEach((itemId, idx) => {
        if (!itemId) return;
        const item = ITEMS_DATA.find((i) => i.id === itemId);
        if (item && item.grantedSkill) {
          const isAp = item.grantedSkill.cost.includes('AP');
          const costNum = parseInt(item.grantedSkill.cost) || 1;
          defaultRules.unshift({
            id: `item-${idx}`,
            skillName: item.grantedSkill.name,
            skillType: isAp ? 'active' : 'passive',
            cost: costNum,
            condition1: item.grantedSkill.name.toLowerCase().includes('start') ? '[Start of Battle]' : '[Always Active]',
            condition2: isAp ? `[AP >= ${costNum}]` : `[PP >= ${costNum}]`,
            isEnabled: true,
          });
        }
      });
    }

    return defaultRules;
  });

  if (!isOpen || !unit) return null;

  const handleMoveRule = (index: number, direction: 'up' | 'down') => {
    const newRules = [...rules];
    const targetIdx = direction === 'up' ? index - 1 : index + 1;
    if (targetIdx < 0 || targetIdx >= newRules.length) return;
    const temp = newRules[index];
    newRules[index] = newRules[targetIdx];
    newRules[targetIdx] = temp;
    setRules(newRules);
  };

  const handleToggleRule = (id: string) => {
    setRules((prev) =>
      prev.map((r) => (r.id === id ? { ...r, isEnabled: !r.isEnabled } : r))
    );
  };

  const handleChangeCondition = (
    id: string,
    field: 'condition1' | 'condition2',
    val: string
  ) => {
    setRules((prev) =>
      prev.map((r) => (r.id === id ? { ...r, [field]: val } : r))
    );
  };

  const handleSave = () => {
    onSaveTactics(slot.slotId, rules);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto bg-[#0a0f1d] border-2 border-amber-500/60 rounded-2xl shadow-2xl p-6 space-y-6 no-scrollbar filigree-box"
      >
        {/* Modal Banner Header */}
        <div className="flex items-center justify-between border-b-2 border-amber-500/30 pb-4">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-xl bg-slate-950 border border-amber-500/40 flex items-center justify-center text-3xl overflow-hidden shadow-md">
              {unit.image ? (
                <img src={unit.image} alt={unit.name} className="w-full h-full object-cover" />
              ) : (
                unit.icon
              )}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-serif text-xl font-bold bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 bg-clip-text text-transparent uppercase tracking-wider">
                  Tactics Execution Sequence: {unit.name}
                </h3>
              </div>
              <p className="text-xs text-amber-200/70 font-serif">
                Configure dual-condition priority order matching in-game combat logic.
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-slate-950 border border-amber-500/30 text-amber-400 hover:text-white hover:border-amber-400 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Priority Stack Rules List */}
        <div className="space-y-3.5">
          {rules.map((rule, idx) => (
            <div
              key={rule.id}
              className={`p-4 rounded-xl border-2 transition-all space-y-3 ${
                rule.isEnabled
                  ? 'bg-gradient-to-r from-[#111827] via-[#0f172a] to-[#141d33] border-amber-500/40 shadow-lg'
                  : 'bg-slate-950/50 border-slate-800 opacity-50'
              }`}
            >
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  {/* Priority Rank Badge */}
                  <span className="w-7 h-7 rounded-lg bg-gradient-to-b from-amber-500 to-amber-700 text-slate-950 font-serif font-extrabold text-sm flex items-center justify-center shadow-md border border-amber-300">
                    #{idx + 1}
                  </span>

                  <span className="font-serif text-base font-bold text-amber-100">{rule.skillName}</span>

                  {/* AP / PP Gem Badge */}
                  <span
                    className={`px-2.5 py-0.5 rounded text-xs font-serif font-extrabold tracking-wider ${
                      rule.skillType === 'active' ? 'ap-gem' : 'pp-gem'
                    }`}
                  >
                    {rule.cost} {rule.skillType === 'active' ? 'AP' : 'PP'}
                  </span>
                </div>

                {/* Move & Toggle Buttons */}
                <div className="flex items-center gap-2">
                  <button
                    disabled={idx === 0}
                    onClick={() => handleMoveRule(idx, 'up')}
                    className="p-1.5 rounded bg-slate-950 border border-amber-500/30 text-amber-300 hover:text-white hover:border-amber-400 disabled:opacity-30 transition"
                  >
                    <ArrowUp className="w-4 h-4" />
                  </button>
                  <button
                    disabled={idx === rules.length - 1}
                    onClick={() => handleMoveRule(idx, 'down')}
                    className="p-1.5 rounded bg-slate-950 border border-amber-500/30 text-amber-300 hover:text-white hover:border-amber-400 disabled:opacity-30 transition"
                  >
                    <ArrowDown className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleToggleRule(rule.id)}
                    className={`px-3 py-1 rounded text-xs font-serif font-bold transition ${
                      rule.isEnabled
                        ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                        : 'bg-slate-950 text-slate-500 border border-slate-800'
                    }`}
                  >
                    {rule.isEnabled ? 'ENABLED' : 'DISABLED'}
                  </button>
                </div>
              </div>

              {/* Dual-Condition Selectors */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-slate-800">
                <div>
                  <label className="text-[10px] font-serif font-bold uppercase tracking-wider text-amber-300/80 block mb-1">
                    Condition 1 (Target / Trigger State)
                  </label>
                  <select
                    value={rule.condition1}
                    onChange={(e) =>
                      handleChangeCondition(rule.id, 'condition1', e.target.value)
                    }
                    className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-amber-500/30 text-xs font-serif font-bold text-amber-200 focus:outline-none focus:border-amber-400"
                  >
                    {CONDITION_1_OPTIONS.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-[10px] font-serif font-bold uppercase tracking-wider text-amber-300/80 block mb-1">
                    Condition 2 (Resource / Priority Filter)
                  </label>
                  <select
                    value={rule.condition2}
                    onChange={(e) =>
                      handleChangeCondition(rule.id, 'condition2', e.target.value)
                    }
                    className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-amber-500/30 text-xs font-serif font-bold text-amber-200 focus:outline-none focus:border-amber-400"
                  >
                    {CONDITION_2_OPTIONS.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Actions Footer */}
        <div className="flex items-center justify-between border-t-2 border-amber-500/30 pt-4">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-300 hover:text-white font-serif text-xs font-bold transition"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-slate-950 font-serif font-bold text-xs shadow-lg shadow-amber-500/30 flex items-center gap-2 transition"
          >
            <Check className="w-4 h-4 stroke-[3]" />
            <span>Apply Tactics Execution Sequence</span>
          </button>
        </div>
      </motion.div>
    </div>
  );
};
