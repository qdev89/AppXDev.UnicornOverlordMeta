'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Play,
  Pause,
  RotateCcw,
  ChevronRight,
  Zap,
  Shield,
  CheckCircle2,
  XCircle,
  Swords,
  Award,
  Users,
  Trophy,
  Activity,
  Sparkles,
} from 'lucide-react';
import { SquadSlot, SimulatedTurnStep, UnitClass, Battle5v5Result } from '@/types';
import { CLASSES_DATA } from '@/data/classes';
import { SQUADS_DATA } from '@/data/squads';
import { ITEMS_DATA } from '@/data/items';

interface BattleSimulatorProps {
  slots: SquadSlot[];
}

export const BattleSimulator: React.FC<BattleSimulatorProps> = ({ slots }) => {
  const [battleMode, setBattleMode] = useState<'solo' | '5v5'>('5v5');
  const [selectedOpponentId, setSelectedOpponentId] = useState<string>(SQUADS_DATA[0].id);
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  // Selected opponent squad
  const selectedOpponent = useMemo(() => {
    return SQUADS_DATA.find((s) => s.id === selectedOpponentId) || SQUADS_DATA[0];
  }, [selectedOpponentId]);

  // Helper to map unit ID to UnitClass
  const getUnit = (id: string | null): UnitClass | undefined => {
    if (!id) return undefined;
    return CLASSES_DATA.find((c) => c.id === id);
  };

  // Generate 5v5 Combat Steps & Win Rate Simulation
  const battle5v5Data = useMemo<Battle5v5Result>(() => {
    // Helper to calculate equipped item bonuses
    const getItemBonuses = (itemIds?: (string | null)[]) => {
      let apBonus = 0;
      let ppBonus = 0;
      let initBonus = 0;
      let physAtkBonus = 0;
      let magAtkBonus = 0;
      let physDefBonus = 0;
      let magDefBonus = 0;
      let evasionBonus = 0;
      const grantedSkills: any[] = [];

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
          if (item.statBoosts.includes('Initiative +10')) initBonus += 10;
          if (item.statBoosts.includes('Phys Atk +24')) physAtkBonus += 24;
          if (item.statBoosts.includes('Phys Atk +15')) physAtkBonus += 15;
          if (item.statBoosts.includes('Mag Atk +25')) magAtkBonus += 25;
          if (item.statBoosts.includes('Mag Atk +18')) magAtkBonus += 18;
          if (item.statBoosts.includes('Phys Def +10')) physDefBonus += 10;
          if (item.statBoosts.includes('Evasion +20')) evasionBonus += 20;

          if (item.grantedSkill) {
            grantedSkills.push({
              name: item.grantedSkill.name,
              apCost: item.grantedSkill.cost.includes('AP') ? parseInt(item.grantedSkill.cost) || 1 : 1,
              potency: 150,
              target: 'Single Enemy',
              description: item.grantedSkill.description,
              flags: ['Physical'],
            });
          }
        });
      }

      return { apBonus, ppBonus, initBonus, physAtkBonus, magAtkBonus, physDefBonus, magDefBonus, evasionBonus, grantedSkills };
    };

    // 1. Gather Player Units
    const playerUnits: any[] = [];
    slots.forEach((s) => {
      if (s.unitId) {
        const u = getUnit(s.unitId);
        if (u) {
          const bonuses = getItemBonuses(s.customItems);
          const activeSkills = [...u.activeSkills, ...bonuses.grantedSkills];

          playerUnits.push({
            id: `player-${s.slotId}`,
            name: u.name,
            icon: u.icon,
            side: 'player' as const,
            row: s.row,
            pos: s.index,
            unit: { ...u, activeSkills },
            maxHp: u.baseStats.hp,
            hp: u.baseStats.hp,
            ap: 2 + bonuses.apBonus,
            pp: 2 + bonuses.ppBonus,
            initiative: u.baseStats.initiative + bonuses.initBonus,
            evasion: u.baseStats.evasion + bonuses.evasionBonus,
            physAtk: u.baseStats.physAtk + bonuses.physAtkBonus,
            magAtk: u.baseStats.magAtk + bonuses.magAtkBonus,
            physDef: u.baseStats.physDef + bonuses.physDefBonus,
            magDef: u.baseStats.magDef + bonuses.magDefBonus,
            critRate: u.baseStats.critRate,
            role: u.role,
            category: u.category,
            frozen: false,
            stunned: false,
            blinded: false,
            damageDealt: 0,
          });
        }
      }
    });

    // 2. Gather Enemy Units from selectedOpponent
    const enemyUnits: any[] = [];
    selectedOpponent.frontRow.forEach((id, idx) => {
      if (id) {
        const u = getUnit(id);
        if (u) {
          enemyUnits.push({
            id: `enemy-front-${idx}`,
            name: u.name,
            icon: u.icon,
            side: 'enemy' as const,
            row: 'front' as const,
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
            role: u.role,
            category: u.category,
            frozen: false,
            stunned: false,
            blinded: false,
            damageDealt: 0,
          });
        }
      }
    });

    selectedOpponent.backRow.forEach((id, idx) => {
      if (id) {
        const u = getUnit(id);
        if (u) {
          enemyUnits.push({
            id: `enemy-back-${idx}`,
            name: u.name,
            icon: u.icon,
            side: 'enemy' as const,
            row: 'back' as const,
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
            role: u.role,
            category: u.category,
            frozen: false,
            stunned: false,
            blinded: false,
            damageDealt: 0,
          });
        }
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

    // 1. Phase 1: Start of Battle Passives across BOTH teams (Initiative-sorted)
    const sobCombatants = combatants.filter(c =>
      c.unit.passiveSkills.some((ps: any) => ps.isStartOfBattle || ps.trigger === 'Start of Battle' || ps.trigger?.includes('Start of Battle'))
    );
    sobCombatants.sort((a, b) => b.initiative - a.initiative);

    if (sobCombatants.length > 0) {
      sobCombatants.forEach((c, idx) => {
        const skill = c.unit.passiveSkills.find((ps: any) => ps.isStartOfBattle || ps.trigger === 'Start of Battle' || ps.trigger?.includes('Start of Battle'));
        if (!skill) return;

        if (idx === 0) {
          c.pp = Math.max(0, c.pp - skill.ppCost);
          let effectText = 'Team Buff / Debuff';
          const normId = c.unit.id.toLowerCase();
          const targetSide = c.side === 'player' ? 'enemy' : 'player';
          const allies = combatants.filter(x => x.side === c.side);
          const enemies = combatants.filter(x => x.side === targetSide);

          if (normId.includes('selvie') || normId.includes('druid') || normId.includes('shaman')) {
            enemies.forEach(e => { e.blinded = true; });
            effectText = 'Inflicted Blind on all enemies';
          } else if (normId.includes('rosalinde') || normId.includes('prophet')) {
            enemies.filter(e => e.row === 'front').forEach(e => { e.stunned = true; });
            effectText = 'Inflicted Stun on enemy front-row';
          } else if (normId.includes('gilbert') || normId.includes('prince')) {
            allies.forEach(a => { a.initiative += 15; });
            effectText = 'Granted +15 Initiative to all allies';
          } else if (normId.includes('berengaria') || normId.includes('renegade')) {
            enemies.forEach(e => {
              e.physAtk = Math.round(e.physAtk * 0.8);
              e.physDef = Math.round(e.physDef * 0.8);
              e.initiative = Math.max(1, e.initiative - 10);
            });
            effectText = 'Inflicted -20% Atk/Def, -10 SPD to enemies';
          } else if (normId.includes('eltolinde') || normId.includes('sibyl')) {
            effectText = 'Granted Magic Barrier protection to allies';
          }

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
            condition2: `[Trigger: ${skill.trigger}]`,
            conditionStatus: 'PASS',
            damageDealt: 0,
            healAmount: 0,
            statusInflicted: effectText,
            logMessage: `[Start of Battle] ${c.side === 'player' ? '💙 Player' : '🔴 Enemy'} ${c.name} triggered ${skill.name}! Effect: ${effectText}.`,
            apRemaining: c.ap,
            ppRemaining: c.pp,
          });
        } else {
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
            condition2: '[Initiative Suppressed]',
            conditionStatus: 'FAIL',
            damageDealt: 0,
            healAmount: 0,
            logMessage: `[Start of Battle Suppressed] ${c.side === 'player' ? '💙 Player' : '🔴 Enemy'} ${c.name}'s ${skill.name} was blocked by a faster unit.`,
            apRemaining: c.ap,
            ppRemaining: c.pp,
          });
        }
      });
    }

    // 2. Phase 2: Active Combat Turns (AP-based Round Loop)
    let round = 1;
    const maxRounds = 4;

    while (round <= maxRounds) {
      const activeQueue = combatants.filter(c => c.hp > 0 && c.ap > 0);
      if (activeQueue.length === 0) break;

      activeQueue.sort((a, b) => b.initiative - a.initiative);
      let actedInRound = false;

      for (const attacker of activeQueue) {
        if (attacker.hp <= 0 || attacker.ap <= 0) continue;

        const enemies = combatants.filter(c => c.hp > 0 && c.side !== attacker.side);
        if (enemies.length === 0) break;

        actedInRound = true;

        if (attacker.stunned || attacker.frozen) {
          const status = attacker.stunned ? 'Stunned' : 'Frozen';
          attacker.stunned = false;
          attacker.frozen = false;
          steps.push({
            turnNumber: turnCount++,
            unitName: attacker.name,
            unitIcon: attacker.icon,
            side: attacker.side,
            skillName: 'None (Skipped)',
            skillType: 'active',
            costType: 'AP',
            costAmount: 0,
            condition1: `[Status: ${status}]`,
            condition2: '[Turn Skipped]',
            conditionStatus: 'FAIL',
            damageDealt: 0,
            healAmount: 0,
            logMessage: `[Turn Skip] ${attacker.side === 'player' ? '💙 Player' : '🔴 Enemy'} ${attacker.name} is ${status} and skips their turn.`,
            apRemaining: attacker.ap,
            ppRemaining: attacker.pp,
          });
          continue;
        }

        const activeSkill = attacker.unit.activeSkills[0] || {
          name: 'Strike',
          apCost: 1,
          potency: 100,
          target: 'Single Enemy',
          flags: ['Physical']
        };

        if (attacker.ap < activeSkill.apCost) continue;
        attacker.ap -= activeSkill.apCost;

        let targets: any[] = [];
        const frontRowEnemies = enemies.filter(e => e.row === 'front');
        const backRowEnemies = enemies.filter(e => e.row === 'back');

        if (activeSkill.target === 'All Enemies') {
          targets = [...enemies];
        } else if (activeSkill.target === 'Full Row') {
          targets = frontRowEnemies.length > 0 ? [...frontRowEnemies] : [...backRowEnemies];
        } else {
          const preferredRow = frontRowEnemies.length > 0 ? frontRowEnemies : backRowEnemies;
          if (preferredRow.length > 0) {
            targets = [preferredRow[0]];
          }
        }

        if (targets.length === 0) continue;

        const isAOE = activeSkill.target === 'All Enemies' || activeSkill.target === 'Full Row';
        let totalDmgOnTargets = 0;
        let isBlinded = attacker.blinded;
        let logsForTargets: string[] = [];

        for (const target of targets) {
          if (target.hp <= 0) continue;

          if (isBlinded) {
            logsForTargets.push(`missed ${target.name} due to Blind`);
            continue;
          }

          const hitChance = Math.min(100, Math.max(10, 90 + attacker.initiative - target.evasion));
          const roll = Math.random() * 100;
          if (roll > hitChance) {
            logsForTargets.push(`missed ${target.name} (evaded)`);
            continue;
          }

          const isMagical = activeSkill.flags?.includes('Magical') || attacker.unit.role === 'Magic DPS';
          const isPhysical = activeSkill.flags?.includes('Physical') || !isMagical;

          let dmg = 0;
          if (isPhysical && isMagical) {
            const phys = Math.max(1, attacker.physAtk - target.physDef);
            const mag = Math.max(1, attacker.magAtk - target.magDef);
            dmg = (phys + mag) * (activeSkill.potency / 100);
          } else if (isMagical) {
            dmg = Math.max(1, attacker.magAtk - target.magDef) * (activeSkill.potency / 100);
          } else {
            dmg = Math.max(1, attacker.physAtk - target.physDef) * (activeSkill.potency / 100);
          }

          const isCrit = Math.random() * 100 < attacker.critRate;
          if (isCrit) dmg *= 1.5;
          dmg = Math.round(dmg);

          const coverAllies = enemies.filter(x => x.id !== target.id && x.hp > 0 && x.pp > 0 && 
            x.unit.passiveSkills.some((ps: any) => ps.trigger?.includes('Before Ally Attacked') || ps.name?.includes('Cover'))
          );

          let finalTarget = target;
          let wasCovered = false;
          let wasGuarded = false;

          if (coverAllies.length > 0 && !isAOE) {
            coverAllies.sort((a, b) => b.initiative - a.initiative);
            const coverUnit = coverAllies[0];
            const coverSkill = coverUnit.unit.passiveSkills.find((ps: any) => ps.trigger?.includes('Before Ally Attacked') || ps.name?.includes('Cover'));
            if (coverSkill) {
              coverUnit.pp = Math.max(0, coverUnit.pp - coverSkill.ppCost);
              finalTarget = coverUnit;
              wasCovered = true;
              dmg = Math.round(dmg * 0.5);
            }
          }

          if (!wasCovered && finalTarget.pp > 0) {
            const guardSkill = finalTarget.unit.passiveSkills.find((ps: any) => ps.trigger?.includes('Before Attacked') || ps.name?.includes('Guard'));
            if (guardSkill) {
              finalTarget.pp = Math.max(0, finalTarget.pp - guardSkill.ppCost);
              wasGuarded = true;
              dmg = Math.round(dmg * 0.5);
            }
          }

          finalTarget.hp = Math.max(0, finalTarget.hp - dmg);
          totalDmgOnTargets += dmg;
          attacker.damageDealt += dmg;

          if (attacker.side === 'player') playerDmgSum += dmg;
          else enemyDmgSum += dmg;

          let actionLabel = wasCovered ? `[Covered by ${finalTarget.name}]` : (wasGuarded ? '[Guarded]' : '[Hit]');
          let critLabel = isCrit ? ' (CRITICAL!)' : '';
          logsForTargets.push(`${actionLabel} dealt ${dmg} DMG to ${finalTarget.name}${critLabel}`);

          if (finalTarget.hp > 0) {
            if (activeSkill.flags?.includes('Freeze')) {
              finalTarget.frozen = true;
              logsForTargets.push(`[Frozen] ${finalTarget.name} is Frozen`);
            }
            if (activeSkill.flags?.includes('Stun')) {
              finalTarget.stunned = true;
              logsForTargets.push(`[Stun] ${finalTarget.name} is Stunned`);
            }
            if (activeSkill.flags?.includes('Blind')) {
              finalTarget.blinded = true;
              logsForTargets.push(`[Blind] ${finalTarget.name} is Blinded`);
            }
          } else {
            logsForTargets.push(`[Defeated] ${finalTarget.name} knocked out`);
          }

          if (finalTarget.hp > 0 && finalTarget.pp > 0 && !isAOE) {
            const counterSkill = finalTarget.unit.passiveSkills.find((ps: any) => ps.trigger?.includes('After Being Attacked') || ps.trigger?.includes('After Attacked') || ps.name?.includes('Counter'));
            if (counterSkill) {
              finalTarget.pp = Math.max(0, finalTarget.pp - counterSkill.ppCost);
              let counterDmg = Math.round(Math.max(1, finalTarget.physAtk - attacker.physDef) * 0.8);
              attacker.hp = Math.max(0, attacker.hp - counterDmg);

              if (attacker.side === 'player') enemyDmgSum += counterDmg;
              else playerDmgSum += counterDmg;

              logsForTargets.push(`[Counter] ${finalTarget.name} retaliated with ${counterSkill.name} for ${counterDmg} DMG`);
              if (attacker.hp <= 0) {
                logsForTargets.push(`[Defeated] ${attacker.name} defeated by counter`);
                break;
              }
            }
          }
        }

        if (isBlinded) attacker.blinded = false;

        const targetDesc = isAOE 
          ? `Entire Enemy Row (${targets.map(t => t.name).join(', ')})` 
          : (targets[0] ? targets[0].name : 'Unknown');

        steps.push({
          turnNumber: turnCount++,
          unitName: attacker.name,
          unitIcon: attacker.icon,
          side: attacker.side,
          targetName: targetDesc,
          skillName: activeSkill.name,
          skillType: 'active',
          costType: 'AP',
          costAmount: activeSkill.apCost,
          condition1: `[AP Cost: ${activeSkill.apCost}]`,
          condition2: `[Potency: ${activeSkill.potency}%]`,
          conditionStatus: 'PASS',
          damageDealt: totalDmgOnTargets,
          healAmount: 0,
          logMessage: `${attacker.side === 'player' ? '💙 Player' : '🔴 Enemy'} ${attacker.name} used ${activeSkill.name} on ${targetDesc}. ${logsForTargets.join('; ')}`,
          apRemaining: attacker.ap,
          ppRemaining: attacker.pp,
        });

        const playersAlive = combatants.some(x => x.side === 'player' && x.hp > 0);
        const enemiesAlive = combatants.some(x => x.side === 'enemy' && x.hp > 0);
        if (!playersAlive || !enemiesAlive) break;
      }

      if (!actedInRound) break;
      round++;
    }

    const playersAliveCount = combatants.filter(x => x.side === 'player' && x.hp > 0).length;
    const enemiesAliveCount = combatants.filter(x => x.side === 'enemy' && x.hp > 0).length;
    const playerCasualties = playerUnits.filter(p => p.hp <= 0).length;
    const enemyCasualties = enemyUnits.filter(e => e.hp <= 0).length;

    const playerTotalHpMax = playerUnits.reduce((acc, p) => acc + p.maxHp, 0);
    const playerTotalHpCurrent = playerUnits.reduce((acc, p) => acc + p.hp, 0);
    const playerHpPercent = playerTotalHpMax > 0 ? (playerTotalHpCurrent / playerTotalHpMax) * 100 : 0;

    const enemyTotalHpMax = enemyUnits.reduce((acc, e) => acc + e.maxHp, 0);
    const enemyTotalHpCurrent = enemyUnits.reduce((acc, e) => acc + e.hp, 0);
    const enemyHpPercent = enemyTotalHpMax > 0 ? (enemyTotalHpCurrent / enemyTotalHpMax) * 100 : 0;

    let winner: 'player' | 'enemy' | 'draw' = 'draw';
    let winRate = 50;

    if (enemiesAliveCount === 0 && playersAliveCount > 0) {
      winner = 'player';
      winRate = 100;
    } else if (playersAliveCount === 0 && enemiesAliveCount > 0) {
      winner = 'enemy';
      winRate = 0;
    } else {
      if (playerHpPercent > enemyHpPercent) {
        winner = 'player';
        winRate = Math.round(50 + (playerHpPercent - enemyHpPercent) * 2.5);
      } else if (enemyHpPercent > playerHpPercent) {
        winner = 'enemy';
        winRate = Math.round(50 - (enemyHpPercent - playerHpPercent) * 2.5);
      }
      winRate = Math.min(95, Math.max(5, winRate));
    }

    const mvpSorted = [...playerUnits].sort((a, b) => b.damageDealt - a.damageDealt);
    const mvpUnit = mvpSorted[0]?.name || 'Alain';

    return {
      winner,
      playerWinRate: winRate,
      playerTotalDamage: playerDmgSum,
      enemyTotalDamage: enemyDmgSum,
      playerCasualties,
      enemyCasualties,
      mvpUnit,
      combatSteps: steps,
    };
  }, [slots, selectedOpponent]);

  const currentStep = battle5v5Data.combatSteps[currentStepIndex];

  const handleNextStep = () => {
    if (currentStepIndex < battle5v5Data.combatSteps.length - 1) {
      setCurrentStepIndex((prev) => prev + 1);
    } else {
      setIsPlaying(false);
    }
  };

  const handlePrevStep = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex((prev) => prev - 1);
    }
  };

  const handleReset = () => {
    setCurrentStepIndex(0);
    setIsPlaying(false);
  };

  return (
    <div className="space-y-6">
      {/* Top Controls & Battle Mode Selector */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-slate-950 via-slate-900 to-[#121826] border border-amber-500/30 shadow-2xl flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Swords className="w-6 h-6 text-amber-400" />
            <h3 className="font-serif text-xl font-bold text-amber-200">
              5v5 Squad-vs-Squad Tactical Simulator Engine
            </h3>
          </div>
          <p className="text-xs text-slate-300">
            Simulate initiative speed queues, Start-of-Battle passive conflicts, AP/PP expenditure, and battle win rates against top coliseum meta comps.
          </p>
        </div>

        {/* Mode & Opponent Picker */}
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center p-1 rounded-lg bg-slate-950 border border-slate-800 text-xs">
            <button
              onClick={() => setBattleMode('5v5')}
              className={`px-3 py-1.5 rounded-md font-bold transition ${
                battleMode === '5v5'
                  ? 'bg-amber-500 text-slate-950 shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              ⚔️ 5v5 Coliseum Battle
            </button>
            <button
              onClick={() => setBattleMode('solo')}
              className={`px-3 py-1.5 rounded-md font-bold transition ${
                battleMode === 'solo'
                  ? 'bg-purple-500 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              🛡️ Solo Squad Sandbox
            </button>
          </div>

          {battleMode === '5v5' && (
            <div className="flex items-center gap-2 text-xs">
              <span className="text-slate-400 font-semibold">Opponent:</span>
              <select
                value={selectedOpponentId}
                onChange={(e) => {
                  setSelectedOpponentId(e.target.value);
                  handleReset();
                }}
                className="px-3 py-1.5 rounded-lg bg-slate-950 border border-amber-500/40 text-amber-300 font-serif font-bold text-xs focus:outline-none focus:border-amber-400"
              >
                {SQUADS_DATA.map((sq) => (
                  <option key={sq.id} value={sq.id}>
                    🔴 {sq.name} ({sq.archetype})
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>
      </div>

      {/* Win Rate & Battle Summary Banner */}
      {battleMode === '5v5' && (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="p-4 rounded-xl bg-slate-900 border border-amber-500/30 flex items-center justify-between shadow-lg">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                Estimated Player Win Rate
              </span>
              <strong className="text-2xl font-serif font-bold text-emerald-400">
                {battle5v5Data.playerWinRate}%
              </strong>
            </div>
            <div className="w-10 h-10 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-300">
              <Trophy className="w-5 h-5" />
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900 border border-purple-500/30 flex items-center justify-between shadow-lg">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                Player Total Damage Output
              </span>
              <strong className="text-2xl font-mono font-bold text-amber-300">
                {battle5v5Data.playerTotalDamage} DMG
              </strong>
            </div>
            <div className="w-10 h-10 rounded-full bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-300">
              <Zap className="w-5 h-5" />
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900 border border-rose-500/30 flex items-center justify-between shadow-lg">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                Enemy Damage Received
              </span>
              <strong className="text-2xl font-mono font-bold text-rose-400">
                {battle5v5Data.enemyTotalDamage} DMG
              </strong>
            </div>
            <div className="w-10 h-10 rounded-full bg-rose-500/20 border border-rose-500/40 flex items-center justify-center text-rose-300">
              <Shield className="w-5 h-5" />
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900 border border-cyan-500/30 flex items-center justify-between shadow-lg">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                Match MVP Unit
              </span>
              <strong className="text-base font-serif font-bold text-cyan-300 truncate block">
                👑 {battle5v5Data.mvpUnit}
              </strong>
            </div>
            <div className="w-10 h-10 rounded-full bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-300 shrink-0">
              <Award className="w-5 h-5" />
            </div>
          </div>
        </div>
      )}

      {/* Main Interactive Battle Player */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Battle Timeline Player */}
        <div className="lg:col-span-8 space-y-4">
          <div className="p-6 rounded-2xl bg-slate-900/90 border border-amber-500/30 shadow-2xl space-y-5">
            {/* Step Controls Bar */}
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono font-bold px-3 py-1 rounded bg-amber-500/20 text-amber-300 border border-amber-500/40">
                  STEP {currentStepIndex + 1} OF {Math.max(1, battle5v5Data.combatSteps.length)}
                </span>
                <span className="text-xs text-slate-400 font-semibold">
                  {currentStep ? currentStep.skillName : 'Battle Ready'}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrevStep}
                  disabled={currentStepIndex === 0}
                  className="p-2 rounded-lg bg-slate-950 border border-slate-800 text-slate-300 hover:text-white disabled:opacity-40 transition"
                >
                  ⏮️
                </button>
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="px-4 py-2 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs shadow-md transition flex items-center gap-1.5"
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  <span>{isPlaying ? 'Pause' : 'Play Turn'}</span>
                </button>
                <button
                  onClick={handleNextStep}
                  disabled={currentStepIndex >= battle5v5Data.combatSteps.length - 1}
                  className="p-2 rounded-lg bg-slate-950 border border-slate-800 text-slate-300 hover:text-white disabled:opacity-40 transition"
                >
                  ⏭️
                </button>
                <button
                  onClick={handleReset}
                  className="p-2 rounded-lg bg-slate-950 border border-slate-800 text-slate-400 hover:text-amber-300 transition"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Current Active Step Highlight Card */}
            {currentStep ? (
              <motion.div
                key={currentStep.turnNumber}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                className={`p-5 rounded-xl border-2 space-y-4 shadow-xl ${
                  currentStep.side === 'player'
                    ? 'bg-slate-950/90 border-amber-500/50'
                    : 'bg-slate-950/90 border-rose-500/50'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{currentStep.unitIcon}</span>
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="font-serif text-lg font-bold text-slate-100">
                          {currentStep.unitName}
                        </h4>
                        <span
                          className={`text-[10px] font-bold px-2 py-0.5 rounded border uppercase ${
                            currentStep.side === 'player'
                              ? 'bg-amber-500/20 text-amber-300 border-amber-500/40'
                              : 'bg-rose-500/20 text-rose-300 border-rose-500/40'
                          }`}
                        >
                          {currentStep.side === 'player' ? '💙 PLAYER SQUAD' : '🔴 ENEMY SQUAD'}
                        </span>
                      </div>
                      {currentStep.targetName && (
                        <span className="text-xs text-slate-400">
                          Targeting: <strong className="text-slate-200">{currentStep.targetName}</strong>
                        </span>
                      )}
                    </div>
                  </div>

                  <span
                    className={`px-3 py-1 rounded-full text-xs font-bold font-mono border flex items-center gap-1 ${
                      currentStep.conditionStatus === 'PASS'
                        ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
                        : 'bg-rose-500/20 text-rose-300 border-rose-500/40'
                    }`}
                  >
                    {currentStep.conditionStatus === 'PASS' ? (
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    ) : (
                      <XCircle className="w-3.5 h-3.5" />
                    )}
                    <span>{currentStep.conditionStatus}</span>
                  </span>
                </div>

                <div className="p-3.5 rounded-lg bg-slate-900 border border-slate-800 text-xs leading-relaxed font-mono text-slate-200">
                  {currentStep.logMessage}
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                  <div className="p-2 rounded bg-slate-900 border border-slate-800">
                    <span className="text-slate-500 text-[10px] block">Skill Name</span>
                    <strong className="text-amber-200 font-serif">{currentStep.skillName}</strong>
                  </div>
                  <div className="p-2 rounded bg-slate-900 border border-slate-800">
                    <span className="text-slate-500 text-[10px] block">Cost Spent</span>
                    <strong className="text-purple-300 font-mono">
                      {currentStep.costAmount} {currentStep.costType}
                    </strong>
                  </div>
                  <div className="p-2 rounded bg-slate-900 border border-slate-800">
                    <span className="text-slate-500 text-[10px] block">Damage Dealt</span>
                    <strong className="text-rose-400 font-mono">+{currentStep.damageDealt} DMG</strong>
                  </div>
                  <div className="p-2 rounded bg-slate-900 border border-slate-800">
                    <span className="text-slate-500 text-[10px] block">AP / PP Remaining</span>
                    <strong className="text-cyan-300 font-mono">
                      {currentStep.apRemaining} AP / {currentStep.ppRemaining} PP
                    </strong>
                  </div>
                </div>
              </motion.div>
            ) : (
              <div className="p-12 text-center text-slate-500 border border-dashed border-slate-800 rounded-xl">
                Assign units to your squad and click &quot;Play Turn&quot; to step through the simulation!
              </div>
            )}
          </div>
        </div>

        {/* Right Column: Full Turn-by-Turn Combat Log List */}
        <div className="lg:col-span-4 space-y-4">
          <div className="p-5 rounded-2xl bg-slate-900/90 border border-amber-500/20 shadow-xl space-y-3 h-[480px] flex flex-col">
            <h4 className="font-serif text-sm font-bold text-amber-200 flex items-center justify-between border-b border-slate-800 pb-2 shrink-0">
              <span className="flex items-center gap-1.5">
                <Activity className="w-4 h-4 text-amber-400" />
                <span>Simulated Combat Log</span>
              </span>
              <span className="text-[10px] text-slate-400 font-mono font-normal">
                {battle5v5Data.combatSteps.length} Events
              </span>
            </h4>

            <div className="space-y-2 overflow-y-auto no-scrollbar flex-1 pr-1">
              {battle5v5Data.combatSteps.map((step, idx) => (
                <div
                  key={idx}
                  onClick={() => setCurrentStepIndex(idx)}
                  className={`p-2.5 rounded-lg border text-xs cursor-pointer transition ${
                    idx === currentStepIndex
                      ? 'bg-amber-500/10 border-amber-500/50 text-amber-200 font-semibold'
                      : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <div className="flex items-center justify-between text-[11px] mb-1">
                    <span className="font-mono text-slate-500">#{step.turnNumber}</span>
                    <span
                      className={`text-[9px] font-bold px-1.5 py-0.2 rounded border ${
                        step.side === 'player'
                          ? 'bg-amber-500/20 text-amber-300 border-amber-500/30'
                          : 'bg-rose-500/20 text-rose-300 border-rose-500/30'
                      }`}
                    >
                      {step.side === 'player' ? '💙 Player' : '🔴 Enemy'}
                    </span>
                  </div>
                  <div className="truncate font-serif text-slate-200 font-semibold">
                    {step.unitName} → {step.skillName}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
