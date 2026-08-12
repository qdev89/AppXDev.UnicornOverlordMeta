'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Swords,
  ShieldAlert,
  CheckCircle2,
  Zap,
  Lightbulb,
  Trophy,
  AlertTriangle,
  ChevronRight,
  X,
  Play,
  Pause,
  RotateCcw,
  Activity,
  Award,
  Shield,
  Sliders,
} from 'lucide-react';
import { COUNTERS_DATA } from '@/data/counters';
import { CLASSES_DATA } from '@/data/classes';
import { SQUADS_DATA } from '@/data/squads';
import { ITEMS_DATA } from '@/data/items';
import { SquadBuild, SquadSlot, UnitClass, Battle5v5Result, SimulatedTurnStep } from '@/types';

export const CounterMatrix: React.FC = () => {
  const [selectedCounterId, setSelectedCounterId] = useState<string>(COUNTERS_DATA[0].id);
  const [selectedMetaModalId, setSelectedMetaModalId] = useState<string | null>(null);
  const [currentModalStepIdx, setCurrentModalStepIdx] = useState<number>(0);
  const [isModalPlaying, setIsModalPlaying] = useState<boolean>(false);
  const [categoryFilter, setCategoryFilter] = useState<string>('All');
  const [counterSearch, setCounterSearch] = useState<string>('');

  const counterCategories = ['All', 'Physical Wall', 'Evasion / Flying', 'Magic Reflect', 'Turn-1 Nuke', 'Affliction & CC'];

  const filteredCounters = useMemo(() => {
    return COUNTERS_DATA.filter((c) => {
      const matchCat =
        categoryFilter === 'All' ||
        (categoryFilter === 'Physical Wall' && c.enemyArchetype.includes('Wall')) ||
        (categoryFilter === 'Evasion / Flying' && c.enemyArchetype.includes('Flying')) ||
        (categoryFilter === 'Magic Reflect' && c.enemyArchetype.includes('Reflect')) ||
        (categoryFilter === 'Turn-1 Nuke' && c.enemyArchetype.includes('Turn-1')) ||
        (categoryFilter === 'Affliction & CC' && c.enemyArchetype.includes('Affliction'));

      const q = counterSearch.toLowerCase();
      const matchQuery =
        !q ||
        c.enemyArchetype.toLowerCase().includes(q) ||
        c.threatDescription.toLowerCase().includes(q) ||
        c.keyCounters.some((k) => k.toLowerCase().includes(q)) ||
        c.mustHaveItems.some((i) => i.toLowerCase().includes(q)) ||
        c.tacticsConditions.some((t) => t.toLowerCase().includes(q));

      return matchCat && matchQuery;
    });
  }, [categoryFilter, counterSearch]);

  const DEFAULT_SLOTS: SquadSlot[] = [
    { slotId: 'front-0', row: 'front', index: 0, unitId: 'alain-high-lord' },
    { slotId: 'front-1', row: 'front', index: 1, unitId: 'berengaria-renegade' },
    { slotId: 'back-0', row: 'back', index: 0, unitId: 'cleric' },
    { slotId: 'back-1', row: 'back', index: 1, unitId: 'selvie-druid' },
    { slotId: 'back-2', row: 'back', index: 2, unitId: 'gilbert-prince' },
  ];

  const [userSlots, setUserSlots] = useState<SquadSlot[]>(DEFAULT_SLOTS);

  React.useEffect(() => {
    const savedWip = localStorage.getItem('unicorn_squad_builder_wip');
    if (savedWip) {
      try {
        const parsed = JSON.parse(savedWip);
        if (parsed.slots && Array.isArray(parsed.slots)) {
          setUserSlots(parsed.slots);
        }
      } catch (e) {
        // ignore
      }
    }
  }, []);

  const getUnitClass = (unitId: string | null): UnitClass | undefined => {
    if (!unitId) return undefined;
    return CLASSES_DATA.find((c) => c.id === unitId);
  };

  const getItemBonuses = (itemIds?: (string | null)[]) => {
    let apBonus = 0;
    let ppBonus = 0;
    let initBonus = 0;
    let physAtkBonus = 0;
    let magAtkBonus = 0;
    let physDefBonus = 0;
    let magDefBonus = 0;
    let evasionBonus = 0;

    if (itemIds && Array.isArray(itemIds)) {
      itemIds.forEach((id) => {
        if (!id) return;
        const item = ITEMS_DATA.find((i) => i.id === id);
        if (!item) return;

        if (item.statBoosts.includes('AP +1')) apBonus += 1;
        if (item.statBoosts.includes('AP +2')) apBonus += 2;
        if (item.statBoosts.includes('PP +1')) ppBonus += 1;
        if (item.statBoosts.includes('PP +2')) ppBonus += 2;
        if (item.statBoosts.includes('Initiative +5')) initBonus += 5;
        if (item.statBoosts.includes('Initiative +4')) initBonus += 4;
        if (item.statBoosts.includes('Phys Atk +24')) physAtkBonus += 24;
        if (item.statBoosts.includes('Mag Atk +25')) magAtkBonus += 25;
      });
    }

    return { apBonus, ppBonus, initBonus, physAtkBonus, magAtkBonus, physDefBonus, magDefBonus, evasionBonus };
  };

  // Helper to run 5v5 battle simulation against a specific SquadBuild
  const runSimulation = (opponent: SquadBuild): Battle5v5Result => {
    const playerUnits: any[] = [];
    userSlots.forEach((s) => {
      if (s.unitId) {
        const u = getUnitClass(s.unitId);
        if (u) {
          const bonuses = getItemBonuses(s.customItems);
          playerUnits.push({
            id: `player-${s.slotId}`,
            name: u.name,
            icon: u.icon,
            side: 'player' as const,
            row: s.row,
            pos: s.index,
            unit: u,
            maxHp: u.baseStats.hp,
            hp: u.baseStats.hp,
            ap: 2 + bonuses.apBonus,
            pp: 2 + bonuses.ppBonus,
            initiative: u.baseStats.initiative + bonuses.initBonus,
            evasion: u.baseStats.evasion,
            physAtk: u.baseStats.physAtk + bonuses.physAtkBonus,
            magAtk: u.baseStats.magAtk + bonuses.magAtkBonus,
            physDef: u.baseStats.physDef,
            magDef: u.baseStats.magDef,
            critRate: u.baseStats.critRate,
            frozen: false,
            stunned: false,
            blinded: false,
            damageDealt: 0,
          });
        }
      }
    });

    const enemyUnits: any[] = [];
    [...opponent.frontRow, ...opponent.backRow].filter(Boolean).forEach((id, idx) => {
      const u = getUnitClass(id);
      if (u) {
        enemyUnits.push({
          id: `enemy-${idx}`,
          name: u.name,
          icon: u.icon,
          side: 'enemy' as const,
          row: idx < opponent.frontRow.length ? 'front' : 'back',
          pos: idx,
          unit: u,
          maxHp: u.baseStats.hp,
          hp: u.baseStats.hp,
          ap: 2,
          pp: 2,
          initiative: u.baseStats.initiative,
          evasion: u.baseStats.evasion,
          physAtk: u.baseStats.physAtk,
          magAtk: u.baseStats.magAtk,
          physDef: u.baseStats.physDef,
          magDef: u.baseStats.magDef,
          critRate: u.baseStats.critRate,
          frozen: false,
          stunned: false,
          blinded: false,
          damageDealt: 0,
        });
      }
    });

    if (playerUnits.length === 0) {
      return {
        winner: 'enemy',
        playerWinRate: 0,
        playerTotalDamage: 0,
        enemyTotalDamage: 0,
        playerCasualties: 0,
        enemyCasualties: enemyUnits.length,
        mvpUnit: 'N/A',
        combatSteps: [],
      };
    }

    const combatants = [...playerUnits, ...enemyUnits];
    const steps: SimulatedTurnStep[] = [];
    let turnCount = 1;
    let playerDmgSum = 0;
    let enemyDmgSum = 0;

    // Start of battle passives
    const sobCombatants = combatants.filter((c) =>
      c.unit.passiveSkills.some((ps: any) => ps.isStartOfBattle || ps.trigger?.includes('Start of Battle'))
    );
    sobCombatants.sort((a, b) => b.initiative - a.initiative);

    if (sobCombatants.length > 0) {
      sobCombatants.forEach((c, idx) => {
        const skill = c.unit.passiveSkills.find(
          (ps: any) => ps.isStartOfBattle || ps.trigger?.includes('Start of Battle')
        );
        if (!skill) return;

        if (idx === 0) {
          c.pp = Math.max(0, c.pp - skill.ppCost);
          steps.push({
            turnNumber: turnCount++,
            unitName: c.name,
            unitIcon: c.icon,
            side: c.side,
            skillName: skill.name,
            skillType: 'start_of_battle',
            costType: 'PP',
            costAmount: skill.ppCost,
            condition1: '[Start of Battle]',
            condition2: '[Initiative Priority]',
            conditionStatus: 'PASS',
            damageDealt: 0,
            healAmount: 0,
            logMessage: `[Start of Battle] ${c.side === 'player' ? '💙 Player' : '🔴 Enemy'} ${c.name} triggered ${skill.name}!`,
            apRemaining: c.ap,
            ppRemaining: c.pp,
          });
        }
      });
    }

    // Active turns
    let round = 1;
    while (round <= 3) {
      const activeQueue = combatants.filter((c) => c.hp > 0 && c.ap > 0);
      if (activeQueue.length === 0) break;
      activeQueue.sort((a, b) => b.initiative - a.initiative);
      let acted = false;

      for (const attacker of activeQueue) {
        if (attacker.hp <= 0 || attacker.ap <= 0) continue;
        const enemies = combatants.filter((c) => c.hp > 0 && c.side !== attacker.side);
        if (enemies.length === 0) break;

        acted = true;
        const activeSkill = attacker.unit.activeSkills[0] || {
          name: 'Strike',
          apCost: 1,
          potency: 100,
          target: 'Single Enemy',
          flags: ['Physical'],
        };

        if (attacker.ap < activeSkill.apCost) continue;
        attacker.ap -= activeSkill.apCost;

        const target = enemies[0];
        let dmg = Math.round(Math.max(1, attacker.physAtk - target.physDef) * (activeSkill.potency / 100));

        target.hp = Math.max(0, target.hp - dmg);
        attacker.damageDealt += dmg;

        if (attacker.side === 'player') playerDmgSum += dmg;
        else enemyDmgSum += dmg;

        steps.push({
          turnNumber: turnCount++,
          unitName: attacker.name,
          unitIcon: attacker.icon,
          side: attacker.side,
          targetName: target.name,
          skillName: activeSkill.name,
          skillType: 'active',
          costType: 'AP',
          costAmount: activeSkill.apCost,
          condition1: `[AP Cost: ${activeSkill.apCost}]`,
          condition2: `[Potency: ${activeSkill.potency}%]`,
          conditionStatus: 'PASS',
          damageDealt: dmg,
          healAmount: 0,
          logMessage: `${attacker.side === 'player' ? '💙 Player' : '🔴 Enemy'} ${attacker.name} used ${activeSkill.name} dealing ${dmg} DMG to ${target.name}!`,
          apRemaining: attacker.ap,
          ppRemaining: attacker.pp,
        });

        if (enemies.every((e) => e.hp <= 0)) break;
      }

      if (!acted) break;
      round++;
    }

    const playersAlive = combatants.filter((x) => x.side === 'player' && x.hp > 0).length;
    const enemiesAlive = combatants.filter((x) => x.side === 'enemy' && x.hp > 0).length;

    let winner: 'player' | 'enemy' | 'draw' = 'draw';
    let winRate = 50;
    if (enemiesAlive === 0 && playersAlive > 0) {
      winner = 'player';
      winRate = 100;
    } else if (playersAlive === 0 && enemiesAlive > 0) {
      winner = 'enemy';
      winRate = 15;
    } else {
      winRate = playerDmgSum > enemyDmgSum ? 75 : 35;
    }

    const mvpSorted = [...playerUnits].sort((a, b) => b.damageDealt - a.damageDealt);
    const mvpUnit = mvpSorted[0]?.name || 'Alain';

    return {
      winner,
      playerWinRate: winRate,
      playerTotalDamage: playerDmgSum,
      enemyTotalDamage: enemyDmgSum,
      playerCasualties: playerUnits.filter((p) => p.hp <= 0).length,
      enemyCasualties: enemyUnits.filter((e) => e.hp <= 0).length,
      mvpUnit,
      combatSteps: steps,
    };
  };

  // Run simulation matrix across all 10 Meta Squads
  const matchupMatrix = useMemo(() => {
    return SQUADS_DATA.map((squad) => {
      const sim = runSimulation(squad);
      return {
        squad,
        sim,
      };
    });
  }, [userSlots]);

  // Squad Vulnerability Scanner
  const vulnerabilityWarnings = useMemo(() => {
    const warnings: string[] = [];
    const units = userSlots.map((s) => getUnitClass(s.unitId)).filter(Boolean) as UnitClass[];

    const hasTank = units.some((u) => u.role === 'Tank' || u.category === 'Armored');
    if (!hasTank) {
      warnings.push('No Frontline Armored Tank: Your squad is highly vulnerable to Cavalry Burst.');
    }

    const hasSupport = units.some((u) => u.role === 'Support');
    if (!hasSupport) {
      warnings.push('No Cleric / Healer: Lacks debuff cleanse against Sandstorm Blind or Glacial Freeze.');
    }

    const sobUnits = units.filter((u) =>
      u.passiveSkills.some((ps) => ps.isStartOfBattle || ps.trigger === 'Start of Battle')
    );
    if (sobUnits.length > 1) {
      warnings.push(
        `Start-of-Battle Conflict: ${sobUnits.length} units have Start-of-Battle passives (${sobUnits
          .map((u) => u.name)
          .join(', ')}). Only the fastest will activate.`
      );
    }

    return warnings;
  }, [userSlots]);

  const activeCounter = COUNTERS_DATA.find((c) => c.id === selectedCounterId) || COUNTERS_DATA[0];
  const activeModalSquadMatchup = matchupMatrix.find((m) => m.squad.id === selectedMetaModalId);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="relative rounded-2xl bg-gradient-to-r from-slate-950 via-[#18090f] to-slate-950 p-6 sm:p-8 border border-red-500/40 overflow-hidden shadow-2xl filigree-box">
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-500/10 rounded-full blur-3xl -z-10 pointer-events-none" />
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Swords className="w-7 h-7 text-red-400 drop-shadow-[0_0_10px_rgba(248,113,113,0.6)]" />
              <h2 className="font-serif text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-red-200 via-amber-300 to-amber-500 bg-clip-text text-transparent">
                Coliseum Matchup Matrix & Counter Hub
              </h2>
            </div>
            <p className="text-sm text-slate-300 max-w-2xl font-sans leading-relaxed">
              Real-time 10-Meta coliseum matchup analytics engine. Simulates your current Squad Builder formation against top PvP compositions, flagging vulnerabilities and turn order details.
            </p>
          </div>
        </div>
      </div>

      {/* Automated Squad Vulnerability Warnings */}
      {vulnerabilityWarnings.length > 0 && (
        <div className="p-4 rounded-xl bg-rose-950/40 border border-rose-500/50 space-y-2 shadow-lg">
          <div className="flex items-center gap-2 text-rose-300 font-serif font-bold text-xs uppercase tracking-wider">
            <AlertTriangle className="w-4 h-4 text-rose-400" />
            <span>Automated Squad Vulnerability Warnings</span>
          </div>
          <ul className="space-y-1 text-xs text-rose-200/90 font-sans">
            {vulnerabilityWarnings.map((w, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-rose-400 font-bold">•</span>
                <span>{w}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Live 10-Meta Matchup Simulation Matrix Heatmap */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="font-serif text-lg font-bold text-amber-200 flex items-center gap-2">
            <Trophy className="w-5 h-5 text-amber-400" />
            <span>Real-Time 10-Meta Coliseum Matchup Matrix</span>
          </h3>
          <span className="text-xs text-slate-400 font-mono">
            Simulated against your current Squad Builder layout
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {matchupMatrix.map(({ squad, sim }) => {
            const isWin = sim.playerWinRate >= 70;
            const isEven = sim.playerWinRate >= 50 && sim.playerWinRate < 70;
            return (
              <div
                key={squad.id}
                onClick={() => {
                  setSelectedMetaModalId(squad.id);
                  setCurrentModalStepIdx(0);
                }}
                className={`p-4 rounded-xl border transition-all cursor-pointer space-y-3 hover:scale-105 shadow-xl ${
                  isWin
                    ? 'bg-slate-950/90 border-emerald-500/50 hover:border-emerald-400'
                    : isEven
                    ? 'bg-slate-950/90 border-amber-500/50 hover:border-amber-400'
                    : 'bg-slate-950/90 border-rose-500/50 hover:border-rose-400'
                }`}
              >
                <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                  <span className="font-serif font-bold text-xs text-slate-200 truncate">
                    {squad.name}
                  </span>
                  <span
                    className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold border ${
                      isWin
                        ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
                        : isEven
                        ? 'bg-amber-500/20 text-amber-300 border-amber-500/40'
                        : 'bg-rose-500/20 text-rose-300 border-rose-500/40'
                    }`}
                  >
                    {sim.playerWinRate}% {isWin ? 'WIN' : isEven ? 'EVEN' : 'LOSS'}
                  </span>
                </div>

                <div className="text-[11px] text-slate-400 space-y-1">
                  <div className="flex justify-between">
                    <span>Archetype:</span>
                    <strong className="text-amber-300 truncate max-w-[100px]">{squad.archetype}</strong>
                  </div>
                  <div className="flex justify-between font-mono">
                    <span>Damage Output:</span>
                    <span className="text-emerald-400">{sim.playerTotalDamage} DMG</span>
                  </div>
                  <div className="flex justify-between font-mono">
                    <span>Damage Taken:</span>
                    <span className="text-rose-400">{sim.enemyTotalDamage} DMG</span>
                  </div>
                </div>

                <button className="w-full py-1 rounded bg-slate-900 hover:bg-slate-800 border border-slate-800 text-[10px] font-bold text-slate-300 hover:text-amber-200 flex items-center justify-center gap-1 transition">
                  <span>View Battle Logs</span>
                  <ChevronRight className="w-3 h-3" />
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Counter Strategy Selector & Filter Bar */}
      <div className="pt-4 border-t border-slate-800 space-y-4">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <ShieldAlert className="w-5 h-5 text-amber-400" />
            <h3 className="font-serif text-lg font-bold text-amber-200">
              Specific Meta Archetype Counter Guides
            </h3>
          </div>

          <input
            type="text"
            placeholder="Filter counter by keyword, item, or condition..."
            value={counterSearch}
            onChange={(e) => setCounterSearch(e.target.value)}
            className="px-3.5 py-1.5 rounded-xl bg-slate-950 border border-red-500/30 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-red-400 w-full sm:w-72 shadow-inner"
          />
        </div>

        {/* Threat Category Filter Chips */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1 text-xs">
          <span className="font-serif font-bold text-amber-300 shrink-0">Filter Threat:</span>
          {counterCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategoryFilter(cat)}
              className={`px-3 py-1 rounded-lg font-medium whitespace-nowrap transition ${
                categoryFilter === cat
                  ? 'bg-red-600 text-white font-bold shadow'
                  : 'bg-slate-950 border border-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Counter Buttons Ribbon */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
          {filteredCounters.map((counter) => {
            const isSelected = selectedCounterId === counter.id;
            return (
              <button
                key={counter.id}
                onClick={() => setSelectedCounterId(counter.id)}
                className={`px-4 py-2 rounded-xl text-xs font-serif font-bold whitespace-nowrap transition-all flex items-center gap-2 ${
                  isSelected
                    ? 'bg-gradient-to-r from-red-600 to-amber-600 text-slate-950 shadow-lg font-extrabold border border-amber-300 scale-105'
                    : 'bg-slate-950/80 border border-slate-800 text-slate-300 hover:text-white hover:border-red-500/40'
                }`}
              >
                <ShieldAlert className="w-4 h-4 text-amber-300" />
                <span>{counter.enemyArchetype}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Counter Breakdown Card */}
      <motion.div
        key={activeCounter.id}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-2xl bg-gradient-to-b from-[#101728] to-[#070b16] border border-red-500/40 p-6 sm:p-8 space-y-6 shadow-2xl filigree-box"
      >
        {/* Threat Banner */}
        <div className="p-5 rounded-xl bg-slate-950 border border-red-500/30 space-y-2">
          <div className="flex items-center gap-2 text-red-400 text-xs font-serif font-bold uppercase tracking-wider">
            <ShieldAlert className="w-4 h-4" />
            <span>Target Threat Analysis</span>
          </div>
          <h3 className="font-serif text-xl font-bold text-slate-100">
            vs. {activeCounter.enemyArchetype}
          </h3>
          <p className="text-xs text-slate-300 leading-relaxed font-sans">
            {activeCounter.threatDescription}
          </p>
        </div>

        {/* 2-Column Grid: Principles & Recommended Heroes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-3 p-5 rounded-xl bg-slate-950 border border-slate-800">
            <h4 className="font-serif text-sm font-bold text-amber-300 uppercase tracking-wider flex items-center gap-2 border-b border-slate-800 pb-2">
              <CheckCircle2 className="w-4 h-4 text-amber-400" />
              <span>Core Counter Principles</span>
            </h4>
            <ul className="space-y-2">
              {activeCounter.keyCounters.map((kc, i) => (
                <li key={i} className="flex items-start gap-2 text-xs text-slate-200">
                  <span className="text-amber-400 font-bold">•</span>
                  <span>{kc}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3 p-5 rounded-xl bg-slate-950 border border-slate-800">
            <h4 className="font-serif text-sm font-bold text-purple-300 uppercase tracking-wider flex items-center gap-2 border-b border-slate-800 pb-2">
              <Zap className="w-4 h-4 text-purple-400" />
              <span>Recommended Counter Heroes</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {activeCounter.recommendedUnits.map((unitId, i) => {
                const cls = getUnitClass(unitId);
                return (
                  <div
                    key={i}
                    className="p-2.5 rounded-xl bg-slate-900 border border-purple-500/30 flex items-center gap-2"
                  >
                    <span className="text-xl">{cls?.icon || '⚔️'}</span>
                    <div>
                      <h5 className="font-serif font-bold text-xs text-purple-200">{cls?.name || unitId}</h5>
                      <span className="text-[10px] text-slate-400 font-serif">{cls?.role}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* 2-Column Grid: Must-Have Counter Items & Recommended Tactics Rules */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-3 p-5 rounded-xl bg-slate-950 border border-slate-800">
            <h4 className="font-serif text-sm font-bold text-cyan-300 uppercase tracking-wider flex items-center gap-2 border-b border-slate-800 pb-2">
              <Shield className="w-4 h-4 text-cyan-400" />
              <span>Must-Have Counter Items & Relics</span>
            </h4>
            <div className="space-y-2">
              {activeCounter.mustHaveItems.map((item, idx) => (
                <div key={idx} className="p-2.5 rounded-lg bg-slate-900 border border-cyan-500/30 text-xs font-serif font-bold text-cyan-200 flex items-center gap-2">
                  <span>💎</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-3 p-5 rounded-xl bg-slate-950 border border-slate-800">
            <h4 className="font-serif text-sm font-bold text-emerald-300 uppercase tracking-wider flex items-center gap-2 border-b border-slate-800 pb-2">
              <Sliders className="w-4 h-4 text-emerald-400" />
              <span>Recommended In-Game Tactics Rules</span>
            </h4>
            <div className="space-y-2 font-mono text-xs">
              {activeCounter.tacticsConditions.map((tac, idx) => (
                <div key={idx} className="p-2.5 rounded-lg bg-slate-900 border border-emerald-500/30 text-emerald-300">
                  {tac}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tactical Tip Callout Box */}
        <div className="p-4 rounded-xl bg-gradient-to-r from-amber-950/40 via-slate-950 to-amber-950/40 border border-amber-500/40 space-y-1.5 shadow-lg">
          <div className="flex items-center gap-2 text-amber-300 font-serif font-bold text-xs uppercase tracking-wider">
            <Lightbulb className="w-4 h-4 text-amber-400" />
            <span>Master Tactical Tip</span>
          </div>
          <p className="text-xs text-slate-200 leading-relaxed font-sans">
            {activeCounter.tacticalTip}
          </p>
        </div>
      </motion.div>

      {/* Single-Matchup Simulation Modal */}
      <AnimatePresence>
        {activeModalSquadMatchup && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-3xl bg-slate-900 border border-amber-500/40 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
            >
              <div className="p-5 border-b border-slate-800 flex items-center justify-between bg-slate-950">
                <div className="flex items-center gap-2">
                  <Swords className="w-5 h-5 text-amber-400" />
                  <h3 className="font-serif text-lg font-bold text-amber-200">
                    Matchup Simulation Logs vs. {activeModalSquadMatchup.squad.name}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedMetaModalId(null)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-5 space-y-4 overflow-y-auto flex-1">
                <div className="grid grid-cols-3 gap-3 text-xs">
                  <div className="p-3 rounded-lg bg-slate-950 border border-emerald-500/30 text-center">
                    <span className="text-slate-400 text-[10px] uppercase block">Win Rate</span>
                    <strong className="text-emerald-400 text-lg font-bold">
                      {activeModalSquadMatchup.sim.playerWinRate}%
                    </strong>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-950 border border-amber-500/30 text-center">
                    <span className="text-slate-400 text-[10px] uppercase block">Player Damage</span>
                    <strong className="text-amber-300 text-lg font-bold">
                      {activeModalSquadMatchup.sim.playerTotalDamage} DMG
                    </strong>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-950 border border-rose-500/30 text-center">
                    <span className="text-slate-400 text-[10px] uppercase block">Enemy Damage</span>
                    <strong className="text-rose-400 text-lg font-bold">
                      {activeModalSquadMatchup.sim.enemyTotalDamage} DMG
                    </strong>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                  <h4 className="font-serif text-xs font-bold text-amber-300 uppercase tracking-wider flex items-center justify-between">
                    <span>Step-by-Step Combat Log</span>
                    <span className="text-slate-400 font-mono text-[10px]">
                      {activeModalSquadMatchup.sim.combatSteps.length} Events
                    </span>
                  </h4>

                  <div className="space-y-2 max-h-60 overflow-y-auto no-scrollbar pr-1">
                    {activeModalSquadMatchup.sim.combatSteps.map((step, idx) => (
                      <div
                        key={idx}
                        className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-xs leading-relaxed font-mono text-slate-200"
                      >
                        <span className="text-amber-400 font-bold mr-2">#{step.turnNumber}</span>
                        {step.logMessage}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-4 bg-slate-950 border-t border-slate-800 flex justify-end">
                <button
                  onClick={() => setSelectedMetaModalId(null)}
                  className="px-5 py-2 rounded-lg bg-amber-500 text-slate-950 font-bold text-xs shadow-md transition hover:bg-amber-400"
                >
                  Close Matchup Logs
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
