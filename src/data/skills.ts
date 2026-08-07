import { GameSkill } from '@/types';

export const SKILLS_DATA: GameSkill[] = [
  {
    "id": "spinning-edge",
    "name": "Spinning Edge",
    "type": "Active",
    "cost": "2 AP",
    "potency": 150,
    "target": "Full Row",
    "classSource": "Alain (High Lord)",
    "description": "Deals heavy physical damage to a full row of enemies. Grants +1 AP on kill.",
    "flags": [
      "Physical",
      "Row"
    ]
  },
  {
    "id": "lean-edge",
    "name": "Lean Edge",
    "type": "Active",
    "cost": "1 AP",
    "potency": 100,
    "target": "Single Enemy",
    "classSource": "Alain (High Lord)",
    "description": "Attacks a single target and restores HP proportional to damage dealt.",
    "flags": [
      "Physical",
      "Sustain"
    ]
  },
  {
    "id": "luminous-cover",
    "name": "Luminous Cover",
    "type": "Passive",
    "cost": "1 PP",
    "potency": 0,
    "target": "Self / Allies",
    "classSource": "Alain (High Lord)",
    "description": "Covers an ally from incoming attacks and increases physical defense by 50%.",
    "flags": [
      "Before Ally Attacked"
    ]
  },
  {
    "id": "noble-guard",
    "name": "Noble Guard",
    "type": "Passive",
    "cost": "1 PP",
    "potency": 0,
    "target": "Self / Allies",
    "classSource": "Alain (High Lord)",
    "description": "Grants heavy guard and restores 1 PP when guarding successfully.",
    "flags": [
      "Before Attacked"
    ]
  },
  {
    "id": "glacial-rain",
    "name": "Glacial Rain",
    "type": "Active",
    "cost": "4 AP",
    "potency": 200,
    "target": "All Enemies",
    "classSource": "Yunifi (Snow Ranger)",
    "description": "Charged Skill: Takes 1 turn to prepare, then rains frozen arrows dealing massive physical/ice damage and Freeze to all enemies.",
    "flags": [
      "Physical",
      "Ranged",
      "AOE",
      "Freeze"
    ]
  },
  {
    "id": "triple-shot",
    "name": "Triple Shot",
    "type": "Active",
    "cost": "2 AP",
    "potency": 120,
    "target": "Single Enemy",
    "classSource": "Yunifi (Snow Ranger)",
    "description": "Fires 3 consecutive arrows at a single target with increased crit chance.",
    "flags": [
      "Physical",
      "Ranged"
    ]
  },
  {
    "id": "counter-eagle",
    "name": "Counter Eagle",
    "type": "Passive",
    "cost": "1 PP",
    "potency": 0,
    "target": "Self / Allies",
    "classSource": "Yunifi (Snow Ranger)",
    "description": "Fires a immediate counterattack arrow with 100% Guaranteed Critical Hit.",
    "flags": [
      "After Being Attacked"
    ]
  },
  {
    "id": "snow-white-guard",
    "name": "Snow White Guard",
    "type": "Passive",
    "cost": "1 PP",
    "potency": 0,
    "target": "Self / Allies",
    "classSource": "Yunifi (Snow Ranger)",
    "description": "Increases evasion by 30% and grants immunity to Freeze.",
    "flags": [
      "Start of Turn"
    ]
  },
  {
    "id": "elemental-roar",
    "name": "Elemental Roar",
    "type": "Active",
    "cost": "3 AP",
    "potency": 210,
    "target": "All Enemies",
    "classSource": "Rosalinde (Elven Prophet)",
    "description": "Consumes Faerie charges to deal devastating hybrid physical/magical damage to all enemies.",
    "flags": [
      "Magical",
      "AOE"
    ]
  },
  {
    "id": "sylvan-gale",
    "name": "Sylvan Gale",
    "type": "Active",
    "cost": "1 AP",
    "potency": 100,
    "target": "Full Row",
    "classSource": "Rosalinde (Elven Prophet)",
    "description": "Attacks a row of enemies with wind magic and reduces initiative by 10.",
    "flags": [
      "Magical",
      "Row"
    ]
  },
  {
    "id": "rage-of-the-faeries",
    "name": "Rage of the Faeries",
    "type": "Start of Battle",
    "cost": "1 PP",
    "potency": 0,
    "target": "Self / Allies",
    "classSource": "Rosalinde (Elven Prophet)",
    "description": "Start of Battle: Stuns all front-row enemies immediately and summons a Faerie charge.",
    "flags": [
      "Start of Battle"
    ]
  },
  {
    "id": "faerie-heal",
    "name": "Faerie Heal",
    "type": "Passive",
    "cost": "1 PP",
    "potency": 0,
    "target": "Self / Allies",
    "classSource": "Rosalinde (Elven Prophet)",
    "description": "Restores HP to an ally and cleanses all status afflictions.",
    "flags": [
      "After Ally Attacked"
    ]
  },
  {
    "id": "elemental-roar",
    "name": "Elemental Roar",
    "type": "Active",
    "cost": "3 AP",
    "potency": 210,
    "target": "All Enemies",
    "classSource": "Eltolinde (Elven Sibyl)",
    "description": "Unleashes stored Faeries into a team-wide hybrid explosion.",
    "flags": [
      "Magical",
      "AOE"
    ]
  },
  {
    "id": "primordial-heal",
    "name": "Primordial Heal",
    "type": "Active",
    "cost": "2 AP",
    "potency": 100,
    "target": "All Allies",
    "classSource": "Eltolinde (Elven Sibyl)",
    "description": "Heals all allies and grants a magic barrier shielding against 1 attack.",
    "flags": [
      "Healing",
      "Barrier"
    ]
  },
  {
    "id": "boon-of-the-faeries",
    "name": "Boon of the Faeries",
    "type": "Start of Battle",
    "cost": "1 PP",
    "potency": 0,
    "target": "Self / Allies",
    "classSource": "Eltolinde (Elven Sibyl)",
    "description": "Start of Battle: Grants row-wide magic barrier immunity.",
    "flags": [
      "Start of Battle"
    ]
  },
  {
    "id": "death-spin",
    "name": "Death Spin",
    "type": "Active",
    "cost": "1 AP",
    "potency": 120,
    "target": "Full Row",
    "classSource": "Berengaria (Renegade)",
    "description": "Deals physical damage to a full row. Deals +50% extra damage if targets are afflicted with debuffs.",
    "flags": [
      "Physical",
      "Row"
    ]
  },
  {
    "id": "sanguine-pursuit",
    "name": "Sanguine Pursuit",
    "type": "Active",
    "cost": "1 AP",
    "potency": 100,
    "target": "Single Enemy",
    "classSource": "Berengaria (Renegade)",
    "description": "Attacks and recovers 1 PP upon landing a hit.",
    "flags": [
      "Physical"
    ]
  },
  {
    "id": "eye-of-the-monarch",
    "name": "Eye of the Monarch",
    "type": "Start of Battle",
    "cost": "1 PP",
    "potency": 0,
    "target": "Self / Allies",
    "classSource": "Berengaria (Renegade)",
    "description": "Start of Battle: Inflicts Atk/Def debuff (-20%) and Initiative debuff (-10) on all enemies.",
    "flags": [
      "Start of Battle"
    ]
  },
  {
    "id": "defensive-curse",
    "name": "Defensive Curse",
    "type": "Active",
    "cost": "1 AP",
    "potency": 0,
    "target": "Full Row",
    "classSource": "Selvie (Druid)",
    "description": "Reduces physical and magic defense of an enemy row by 50% and removes Guard.",
    "flags": [
      "Debuff",
      "Row"
    ]
  },
  {
    "id": "offensive-curse",
    "name": "Offensive Curse",
    "type": "Active",
    "cost": "1 AP",
    "potency": 0,
    "target": "Full Row",
    "classSource": "Selvie (Druid)",
    "description": "Reduces physical and magic attack of an enemy row by 50%.",
    "flags": [
      "Debuff",
      "Row"
    ]
  },
  {
    "id": "sandstorm",
    "name": "Sandstorm",
    "type": "Start of Battle",
    "cost": "2 PP",
    "potency": 0,
    "target": "Self / Allies",
    "classSource": "Selvie (Druid)",
    "description": "Start of Battle: Inflicts Blindness on all enemy units, causing their first attack to miss.",
    "flags": [
      "Start of Battle"
    ]
  },
  {
    "id": "spiral-sword",
    "name": "Spiral Sword",
    "type": "Active",
    "cost": "1 AP",
    "potency": 110,
    "target": "Single Enemy",
    "classSource": "Raenys (Feathersword)",
    "description": "High speed aerial slash that bypasses enemy guard.",
    "flags": [
      "Physical",
      "Flying"
    ]
  },
  {
    "id": "accelerate",
    "name": "Accelerate",
    "type": "Passive",
    "cost": "1 PP",
    "potency": 0,
    "target": "Self / Allies",
    "classSource": "Raenys (Feathersword)",
    "description": "Increases own Initiative by +10 and Phys Atk by +15% upon successful dodge.",
    "flags": [
      "After Evading Attack"
    ]
  },
  {
    "id": "offensive-order",
    "name": "Offensive Order",
    "type": "Active",
    "cost": "1 AP",
    "potency": 0,
    "target": "All Allies",
    "classSource": "Gilbert (Prince)",
    "description": "Increases physical and magic attack of all allies by +20%.",
    "flags": [
      "Buff"
    ]
  },
  {
    "id": "defensive-order",
    "name": "Defensive Order",
    "type": "Active",
    "cost": "1 AP",
    "potency": 0,
    "target": "All Allies",
    "classSource": "Gilbert (Prince)",
    "description": "Increases physical and magic defense of all allies by +20%.",
    "flags": [
      "Buff"
    ]
  },
  {
    "id": "rapid-order",
    "name": "Rapid Order",
    "type": "Start of Battle",
    "cost": "1 PP",
    "potency": 0,
    "target": "Self / Allies",
    "classSource": "Gilbert (Prince)",
    "description": "Start of Battle: Increases Initiative of all allies by +15.",
    "flags": [
      "Start of Battle"
    ]
  },
  {
    "id": "arbalist-strike",
    "name": "Arbalist Strike",
    "type": "Active",
    "cost": "1 AP",
    "potency": 100,
    "target": "Single Enemy",
    "classSource": "Arbalist",
    "description": "Standard class attack scaling with physical potency.",
    "flags": [
      "Physical"
    ]
  },
  {
    "id": "arbalist-guard",
    "name": "Arbalist Guard",
    "type": "Passive",
    "cost": "1 PP",
    "potency": 0,
    "target": "Self / Allies",
    "classSource": "Arbalist",
    "description": "Grants medium guard and mitigates incoming damage by 50%.",
    "flags": [
      "Before Attacked"
    ]
  },
  {
    "id": "berserker-strike",
    "name": "Berserker Strike",
    "type": "Active",
    "cost": "1 AP",
    "potency": 100,
    "target": "Single Enemy",
    "classSource": "Berserker",
    "description": "Standard class attack scaling with physical potency.",
    "flags": [
      "Physical"
    ]
  },
  {
    "id": "berserker-guard",
    "name": "Berserker Guard",
    "type": "Passive",
    "cost": "1 PP",
    "potency": 0,
    "target": "Self / Allies",
    "classSource": "Berserker",
    "description": "Grants medium guard and mitigates incoming damage by 50%.",
    "flags": [
      "Before Attacked"
    ]
  },
  {
    "id": "bishop-strike",
    "name": "Bishop Strike",
    "type": "Active",
    "cost": "1 AP",
    "potency": 100,
    "target": "Single Enemy",
    "classSource": "Bishop",
    "description": "Standard class attack scaling with physical potency.",
    "flags": [
      "Physical"
    ]
  },
  {
    "id": "bishop-guard",
    "name": "Bishop Guard",
    "type": "Passive",
    "cost": "1 PP",
    "potency": 0,
    "target": "Self / Allies",
    "classSource": "Bishop",
    "description": "Grants medium guard and mitigates incoming damage by 50%.",
    "flags": [
      "Before Attacked"
    ]
  },
  {
    "id": "breaker-strike",
    "name": "Breaker Strike",
    "type": "Active",
    "cost": "1 AP",
    "potency": 100,
    "target": "Single Enemy",
    "classSource": "Breaker",
    "description": "Standard class attack scaling with physical potency.",
    "flags": [
      "Physical"
    ]
  },
  {
    "id": "breaker-guard",
    "name": "Breaker Guard",
    "type": "Passive",
    "cost": "1 PP",
    "potency": 0,
    "target": "Self / Allies",
    "classSource": "Breaker",
    "description": "Grants medium guard and mitigates incoming damage by 50%.",
    "flags": [
      "Before Attacked"
    ]
  },
  {
    "id": "cleric-strike",
    "name": "Cleric Strike",
    "type": "Active",
    "cost": "1 AP",
    "potency": 100,
    "target": "Single Enemy",
    "classSource": "Cleric",
    "description": "Standard class attack scaling with physical potency.",
    "flags": [
      "Physical"
    ]
  },
  {
    "id": "cleric-guard",
    "name": "Cleric Guard",
    "type": "Passive",
    "cost": "1 PP",
    "potency": 0,
    "target": "Self / Allies",
    "classSource": "Cleric",
    "description": "Grants medium guard and mitigates incoming damage by 50%.",
    "flags": [
      "Before Attacked"
    ]
  },
  {
    "id": "crusader-strike",
    "name": "Crusader Strike",
    "type": "Active",
    "cost": "1 AP",
    "potency": 100,
    "target": "Single Enemy",
    "classSource": "Crusader",
    "description": "Standard class attack scaling with physical potency.",
    "flags": [
      "Physical"
    ]
  },
  {
    "id": "crusader-guard",
    "name": "Crusader Guard",
    "type": "Passive",
    "cost": "1 PP",
    "potency": 0,
    "target": "Self / Allies",
    "classSource": "Crusader",
    "description": "Grants medium guard and mitigates incoming damage by 50%.",
    "flags": [
      "Before Attacked"
    ]
  },
  {
    "id": "dark-knight-strike",
    "name": "Dark Knight Strike",
    "type": "Active",
    "cost": "1 AP",
    "potency": 100,
    "target": "Single Enemy",
    "classSource": "Dark Knight",
    "description": "Standard class attack scaling with physical potency.",
    "flags": [
      "Physical"
    ]
  },
  {
    "id": "dark-knight-guard",
    "name": "Dark Knight Guard",
    "type": "Passive",
    "cost": "1 PP",
    "potency": 0,
    "target": "Self / Allies",
    "classSource": "Dark Knight",
    "description": "Grants medium guard and mitigates incoming damage by 50%.",
    "flags": [
      "Before Attacked"
    ]
  },
  {
    "id": "dark-lord-strike",
    "name": "Dark Lord Strike",
    "type": "Active",
    "cost": "1 AP",
    "potency": 100,
    "target": "Single Enemy",
    "classSource": "Dark Lord",
    "description": "Standard class attack scaling with physical potency.",
    "flags": [
      "Physical"
    ]
  },
  {
    "id": "dark-lord-guard",
    "name": "Dark Lord Guard",
    "type": "Passive",
    "cost": "1 PP",
    "potency": 0,
    "target": "Self / Allies",
    "classSource": "Dark Lord",
    "description": "Grants medium guard and mitigates incoming damage by 50%.",
    "flags": [
      "Before Attacked"
    ]
  },
  {
    "id": "dark-marquess-strike",
    "name": "Dark Marquess Strike",
    "type": "Active",
    "cost": "1 AP",
    "potency": 100,
    "target": "Single Enemy",
    "classSource": "Dark Marquess",
    "description": "Standard class attack scaling with physical potency.",
    "flags": [
      "Physical"
    ]
  },
  {
    "id": "dark-marquess-guard",
    "name": "Dark Marquess Guard",
    "type": "Passive",
    "cost": "1 PP",
    "potency": 0,
    "target": "Self / Allies",
    "classSource": "Dark Marquess",
    "description": "Grants medium guard and mitigates incoming damage by 50%.",
    "flags": [
      "Before Attacked"
    ]
  },
  {
    "id": "dark-marquess-axe-strike",
    "name": "Dark Marquess (Axe) Strike",
    "type": "Active",
    "cost": "1 AP",
    "potency": 100,
    "target": "Single Enemy",
    "classSource": "Dark Marquess (Axe)",
    "description": "Standard class attack scaling with physical potency.",
    "flags": [
      "Physical"
    ]
  },
  {
    "id": "dark-marquess-axe-guard",
    "name": "Dark Marquess (Axe) Guard",
    "type": "Passive",
    "cost": "1 PP",
    "potency": 0,
    "target": "Self / Allies",
    "classSource": "Dark Marquess (Axe)",
    "description": "Grants medium guard and mitigates incoming damage by 50%.",
    "flags": [
      "Before Attacked"
    ]
  },
  {
    "id": "dark-marquess-spear-strike",
    "name": "Dark Marquess (Spear) Strike",
    "type": "Active",
    "cost": "1 AP",
    "potency": 100,
    "target": "Single Enemy",
    "classSource": "Dark Marquess (Spear)",
    "description": "Standard class attack scaling with physical potency.",
    "flags": [
      "Physical"
    ]
  },
  {
    "id": "dark-marquess-spear-guard",
    "name": "Dark Marquess (Spear) Guard",
    "type": "Passive",
    "cost": "1 PP",
    "potency": 0,
    "target": "Self / Allies",
    "classSource": "Dark Marquess (Spear)",
    "description": "Grants medium guard and mitigates incoming damage by 50%.",
    "flags": [
      "Before Attacked"
    ]
  },
  {
    "id": "dark-marquess-staff-strike",
    "name": "Dark Marquess (Staff) Strike",
    "type": "Active",
    "cost": "1 AP",
    "potency": 100,
    "target": "Single Enemy",
    "classSource": "Dark Marquess (Staff)",
    "description": "Standard class attack scaling with physical potency.",
    "flags": [
      "Physical"
    ]
  },
  {
    "id": "dark-marquess-staff-guard",
    "name": "Dark Marquess (Staff) Guard",
    "type": "Passive",
    "cost": "1 PP",
    "potency": 0,
    "target": "Self / Allies",
    "classSource": "Dark Marquess (Staff)",
    "description": "Grants medium guard and mitigates incoming damage by 50%.",
    "flags": [
      "Before Attacked"
    ]
  },
  {
    "id": "dark-marquess-sword-strike",
    "name": "Dark Marquess (Sword) Strike",
    "type": "Active",
    "cost": "1 AP",
    "potency": 100,
    "target": "Single Enemy",
    "classSource": "Dark Marquess (Sword)",
    "description": "Standard class attack scaling with physical potency.",
    "flags": [
      "Physical"
    ]
  },
  {
    "id": "dark-marquess-sword-guard",
    "name": "Dark Marquess (Sword) Guard",
    "type": "Passive",
    "cost": "1 PP",
    "potency": 0,
    "target": "Self / Allies",
    "classSource": "Dark Marquess (Sword)",
    "description": "Grants medium guard and mitigates incoming damage by 50%.",
    "flags": [
      "Before Attacked"
    ]
  },
  {
    "id": "doom-knight-strike",
    "name": "Doom Knight Strike",
    "type": "Active",
    "cost": "1 AP",
    "potency": 100,
    "target": "Single Enemy",
    "classSource": "Doom Knight",
    "description": "Standard class attack scaling with physical potency.",
    "flags": [
      "Physical"
    ]
  },
  {
    "id": "doom-knight-guard",
    "name": "Doom Knight Guard",
    "type": "Passive",
    "cost": "1 PP",
    "potency": 0,
    "target": "Self / Allies",
    "classSource": "Doom Knight",
    "description": "Grants medium guard and mitigates incoming damage by 50%.",
    "flags": [
      "Before Attacked"
    ]
  },
  {
    "id": "dreadnought-strike",
    "name": "Dreadnought Strike",
    "type": "Active",
    "cost": "1 AP",
    "potency": 100,
    "target": "Single Enemy",
    "classSource": "Dreadnought",
    "description": "Standard class attack scaling with physical potency.",
    "flags": [
      "Physical"
    ]
  },
  {
    "id": "dreadnought-guard",
    "name": "Dreadnought Guard",
    "type": "Passive",
    "cost": "1 PP",
    "potency": 0,
    "target": "Self / Allies",
    "classSource": "Dreadnought",
    "description": "Grants medium guard and mitigates incoming damage by 50%.",
    "flags": [
      "Before Attacked"
    ]
  },
  {
    "id": "elven-archer-strike",
    "name": "Elven Archer Strike",
    "type": "Active",
    "cost": "1 AP",
    "potency": 100,
    "target": "Single Enemy",
    "classSource": "Elven Archer",
    "description": "Standard class attack scaling with physical potency.",
    "flags": [
      "Physical"
    ]
  },
  {
    "id": "elven-archer-guard",
    "name": "Elven Archer Guard",
    "type": "Passive",
    "cost": "1 PP",
    "potency": 0,
    "target": "Self / Allies",
    "classSource": "Elven Archer",
    "description": "Grants medium guard and mitigates incoming damage by 50%.",
    "flags": [
      "Before Attacked"
    ]
  },
  {
    "id": "elven-augur-strike",
    "name": "Elven Augur Strike",
    "type": "Active",
    "cost": "1 AP",
    "potency": 100,
    "target": "Single Enemy",
    "classSource": "Elven Augur",
    "description": "Standard class attack scaling with physical potency.",
    "flags": [
      "Physical"
    ]
  },
  {
    "id": "elven-augur-guard",
    "name": "Elven Augur Guard",
    "type": "Passive",
    "cost": "1 PP",
    "potency": 0,
    "target": "Self / Allies",
    "classSource": "Elven Augur",
    "description": "Grants medium guard and mitigates incoming damage by 50%.",
    "flags": [
      "Before Attacked"
    ]
  },
  {
    "id": "elven-fencer-strike",
    "name": "Elven Fencer Strike",
    "type": "Active",
    "cost": "1 AP",
    "potency": 100,
    "target": "Single Enemy",
    "classSource": "Elven Fencer",
    "description": "Standard class attack scaling with physical potency.",
    "flags": [
      "Physical"
    ]
  },
  {
    "id": "elven-fencer-guard",
    "name": "Elven Fencer Guard",
    "type": "Passive",
    "cost": "1 PP",
    "potency": 0,
    "target": "Self / Allies",
    "classSource": "Elven Fencer",
    "description": "Grants medium guard and mitigates incoming damage by 50%.",
    "flags": [
      "Before Attacked"
    ]
  },
  {
    "id": "elven-sibyl-strike",
    "name": "Elven Sibyl Strike",
    "type": "Active",
    "cost": "1 AP",
    "potency": 100,
    "target": "Single Enemy",
    "classSource": "Elven Sibyl",
    "description": "Standard class attack scaling with physical potency.",
    "flags": [
      "Physical"
    ]
  },
  {
    "id": "elven-sibyl-guard",
    "name": "Elven Sibyl Guard",
    "type": "Passive",
    "cost": "1 PP",
    "potency": 0,
    "target": "Self / Allies",
    "classSource": "Elven Sibyl",
    "description": "Grants medium guard and mitigates incoming damage by 50%.",
    "flags": [
      "Before Attacked"
    ]
  },
  {
    "id": "featherbow-strike",
    "name": "Featherbow Strike",
    "type": "Active",
    "cost": "1 AP",
    "potency": 100,
    "target": "Single Enemy",
    "classSource": "Featherbow",
    "description": "Standard class attack scaling with physical potency.",
    "flags": [
      "Physical"
    ]
  },
  {
    "id": "featherbow-guard",
    "name": "Featherbow Guard",
    "type": "Passive",
    "cost": "1 PP",
    "potency": 0,
    "target": "Self / Allies",
    "classSource": "Featherbow",
    "description": "Grants medium guard and mitigates incoming damage by 50%.",
    "flags": [
      "Before Attacked"
    ]
  },
  {
    "id": "feathershield-strike",
    "name": "Feathershield Strike",
    "type": "Active",
    "cost": "1 AP",
    "potency": 100,
    "target": "Single Enemy",
    "classSource": "Feathershield",
    "description": "Standard class attack scaling with physical potency.",
    "flags": [
      "Physical"
    ]
  },
  {
    "id": "feathershield-guard",
    "name": "Feathershield Guard",
    "type": "Passive",
    "cost": "1 PP",
    "potency": 0,
    "target": "Self / Allies",
    "classSource": "Feathershield",
    "description": "Grants medium guard and mitigates incoming damage by 50%.",
    "flags": [
      "Before Attacked"
    ]
  },
  {
    "id": "featherstaff-strike",
    "name": "Featherstaff Strike",
    "type": "Active",
    "cost": "1 AP",
    "potency": 100,
    "target": "Single Enemy",
    "classSource": "Featherstaff",
    "description": "Standard class attack scaling with physical potency.",
    "flags": [
      "Physical"
    ]
  },
  {
    "id": "featherstaff-guard",
    "name": "Featherstaff Guard",
    "type": "Passive",
    "cost": "1 PP",
    "potency": 0,
    "target": "Self / Allies",
    "classSource": "Featherstaff",
    "description": "Grants medium guard and mitigates incoming damage by 50%.",
    "flags": [
      "Before Attacked"
    ]
  },
  {
    "id": "feathersword-strike",
    "name": "Feathersword Strike",
    "type": "Active",
    "cost": "1 AP",
    "potency": 100,
    "target": "Single Enemy",
    "classSource": "Feathersword",
    "description": "Standard class attack scaling with physical potency.",
    "flags": [
      "Physical"
    ]
  },
  {
    "id": "feathersword-guard",
    "name": "Feathersword Guard",
    "type": "Passive",
    "cost": "1 PP",
    "potency": 0,
    "target": "Self / Allies",
    "classSource": "Feathersword",
    "description": "Grants medium guard and mitigates incoming damage by 50%.",
    "flags": [
      "Before Attacked"
    ]
  },
  {
    "id": "fighter-strike",
    "name": "Fighter Strike",
    "type": "Active",
    "cost": "1 AP",
    "potency": 100,
    "target": "Single Enemy",
    "classSource": "Fighter",
    "description": "Standard class attack scaling with physical potency.",
    "flags": [
      "Physical"
    ]
  },
  {
    "id": "fighter-guard",
    "name": "Fighter Guard",
    "type": "Passive",
    "cost": "1 PP",
    "potency": 0,
    "target": "Self / Allies",
    "classSource": "Fighter",
    "description": "Grants medium guard and mitigates incoming damage by 50%.",
    "flags": [
      "Before Attacked"
    ]
  },
  {
    "id": "gladiator-strike",
    "name": "Gladiator Strike",
    "type": "Active",
    "cost": "1 AP",
    "potency": 100,
    "target": "Single Enemy",
    "classSource": "Gladiator",
    "description": "Standard class attack scaling with physical potency.",
    "flags": [
      "Physical"
    ]
  },
  {
    "id": "gladiator-guard",
    "name": "Gladiator Guard",
    "type": "Passive",
    "cost": "1 PP",
    "potency": 0,
    "target": "Self / Allies",
    "classSource": "Gladiator",
    "description": "Grants medium guard and mitigates incoming damage by 50%.",
    "flags": [
      "Before Attacked"
    ]
  },
  {
    "id": "great-knight-strike",
    "name": "Great Knight Strike",
    "type": "Active",
    "cost": "1 AP",
    "potency": 100,
    "target": "Single Enemy",
    "classSource": "Great Knight",
    "description": "Standard class attack scaling with physical potency.",
    "flags": [
      "Physical"
    ]
  },
  {
    "id": "great-knight-guard",
    "name": "Great Knight Guard",
    "type": "Passive",
    "cost": "1 PP",
    "potency": 0,
    "target": "Self / Allies",
    "classSource": "Great Knight",
    "description": "Grants medium guard and mitigates incoming damage by 50%.",
    "flags": [
      "Before Attacked"
    ]
  },
  {
    "id": "gryphon-knight-strike",
    "name": "Gryphon Knight Strike",
    "type": "Active",
    "cost": "1 AP",
    "potency": 100,
    "target": "Single Enemy",
    "classSource": "Gryphon Knight",
    "description": "Standard class attack scaling with physical potency.",
    "flags": [
      "Physical"
    ]
  },
  {
    "id": "gryphon-knight-guard",
    "name": "Gryphon Knight Guard",
    "type": "Passive",
    "cost": "1 PP",
    "potency": 0,
    "target": "Self / Allies",
    "classSource": "Gryphon Knight",
    "description": "Grants medium guard and mitigates incoming damage by 50%.",
    "flags": [
      "Before Attacked"
    ]
  },
  {
    "id": "gryphon-master-strike",
    "name": "Gryphon Master Strike",
    "type": "Active",
    "cost": "1 AP",
    "potency": 100,
    "target": "Single Enemy",
    "classSource": "Gryphon Master",
    "description": "Standard class attack scaling with physical potency.",
    "flags": [
      "Physical"
    ]
  },
  {
    "id": "gryphon-master-guard",
    "name": "Gryphon Master Guard",
    "type": "Passive",
    "cost": "1 PP",
    "potency": 0,
    "target": "Self / Allies",
    "classSource": "Gryphon Master",
    "description": "Grants medium guard and mitigates incoming damage by 50%.",
    "flags": [
      "Before Attacked"
    ]
  },
  {
    "id": "high-lord-strike",
    "name": "High Lord Strike",
    "type": "Active",
    "cost": "1 AP",
    "potency": 100,
    "target": "Single Enemy",
    "classSource": "High Lord",
    "description": "Standard class attack scaling with physical potency.",
    "flags": [
      "Physical"
    ]
  },
  {
    "id": "high-lord-guard",
    "name": "High Lord Guard",
    "type": "Passive",
    "cost": "1 PP",
    "potency": 0,
    "target": "Self / Allies",
    "classSource": "High Lord",
    "description": "Grants medium guard and mitigates incoming damage by 50%.",
    "flags": [
      "Before Attacked"
    ]
  },
  {
    "id": "high-priestess-strike",
    "name": "High Priestess Strike",
    "type": "Active",
    "cost": "1 AP",
    "potency": 100,
    "target": "Single Enemy",
    "classSource": "High Priestess",
    "description": "Standard class attack scaling with physical potency.",
    "flags": [
      "Physical"
    ]
  },
  {
    "id": "high-priestess-guard",
    "name": "High Priestess Guard",
    "type": "Passive",
    "cost": "1 PP",
    "potency": 0,
    "target": "Self / Allies",
    "classSource": "High Priestess",
    "description": "Grants medium guard and mitigates incoming damage by 50%.",
    "flags": [
      "Before Attacked"
    ]
  },
  {
    "id": "hoplite-strike",
    "name": "Hoplite Strike",
    "type": "Active",
    "cost": "1 AP",
    "potency": 100,
    "target": "Single Enemy",
    "classSource": "Hoplite",
    "description": "Standard class attack scaling with physical potency.",
    "flags": [
      "Physical"
    ]
  },
  {
    "id": "hoplite-guard",
    "name": "Hoplite Guard",
    "type": "Passive",
    "cost": "1 PP",
    "potency": 0,
    "target": "Self / Allies",
    "classSource": "Hoplite",
    "description": "Grants medium guard and mitigates incoming damage by 50%.",
    "flags": [
      "Before Attacked"
    ]
  },
  {
    "id": "housecarl-strike",
    "name": "Housecarl Strike",
    "type": "Active",
    "cost": "1 AP",
    "potency": 100,
    "target": "Single Enemy",
    "classSource": "Housecarl",
    "description": "Standard class attack scaling with physical potency.",
    "flags": [
      "Physical"
    ]
  },
  {
    "id": "housecarl-guard",
    "name": "Housecarl Guard",
    "type": "Passive",
    "cost": "1 PP",
    "potency": 0,
    "target": "Self / Allies",
    "classSource": "Housecarl",
    "description": "Grants medium guard and mitigates incoming damage by 50%.",
    "flags": [
      "Before Attacked"
    ]
  },
  {
    "id": "hunter-strike",
    "name": "Hunter Strike",
    "type": "Active",
    "cost": "1 AP",
    "potency": 100,
    "target": "Single Enemy",
    "classSource": "Hunter",
    "description": "Standard class attack scaling with physical potency.",
    "flags": [
      "Physical"
    ]
  },
  {
    "id": "hunter-guard",
    "name": "Hunter Guard",
    "type": "Passive",
    "cost": "1 PP",
    "potency": 0,
    "target": "Self / Allies",
    "classSource": "Hunter",
    "description": "Grants medium guard and mitigates incoming damage by 50%.",
    "flags": [
      "Before Attacked"
    ]
  },
  {
    "id": "knight-strike",
    "name": "Knight Strike",
    "type": "Active",
    "cost": "1 AP",
    "potency": 100,
    "target": "Single Enemy",
    "classSource": "Knight",
    "description": "Standard class attack scaling with physical potency.",
    "flags": [
      "Physical"
    ]
  },
  {
    "id": "knight-guard",
    "name": "Knight Guard",
    "type": "Passive",
    "cost": "1 PP",
    "potency": 0,
    "target": "Self / Allies",
    "classSource": "Knight",
    "description": "Grants medium guard and mitigates incoming damage by 50%.",
    "flags": [
      "Before Attacked"
    ]
  },
  {
    "id": "landsknecht-strike",
    "name": "Landsknecht Strike",
    "type": "Active",
    "cost": "1 AP",
    "potency": 100,
    "target": "Single Enemy",
    "classSource": "Landsknecht",
    "description": "Standard class attack scaling with physical potency.",
    "flags": [
      "Physical"
    ]
  },
  {
    "id": "landsknecht-guard",
    "name": "Landsknecht Guard",
    "type": "Passive",
    "cost": "1 PP",
    "potency": 0,
    "target": "Self / Allies",
    "classSource": "Landsknecht",
    "description": "Grants medium guard and mitigates incoming damage by 50%.",
    "flags": [
      "Before Attacked"
    ]
  },
  {
    "id": "legionnaire-strike",
    "name": "Legionnaire Strike",
    "type": "Active",
    "cost": "1 AP",
    "potency": 100,
    "target": "Single Enemy",
    "classSource": "Legionnaire",
    "description": "Standard class attack scaling with physical potency.",
    "flags": [
      "Physical"
    ]
  },
  {
    "id": "legionnaire-guard",
    "name": "Legionnaire Guard",
    "type": "Passive",
    "cost": "1 PP",
    "potency": 0,
    "target": "Self / Allies",
    "classSource": "Legionnaire",
    "description": "Grants medium guard and mitigates incoming damage by 50%.",
    "flags": [
      "Before Attacked"
    ]
  },
  {
    "id": "lord-strike",
    "name": "Lord Strike",
    "type": "Active",
    "cost": "1 AP",
    "potency": 100,
    "target": "Single Enemy",
    "classSource": "Lord",
    "description": "Standard class attack scaling with physical potency.",
    "flags": [
      "Physical"
    ]
  },
  {
    "id": "lord-guard",
    "name": "Lord Guard",
    "type": "Passive",
    "cost": "1 PP",
    "potency": 0,
    "target": "Self / Allies",
    "classSource": "Lord",
    "description": "Grants medium guard and mitigates incoming damage by 50%.",
    "flags": [
      "Before Attacked"
    ]
  },
  {
    "id": "necromancer-strike",
    "name": "Necromancer Strike",
    "type": "Active",
    "cost": "1 AP",
    "potency": 100,
    "target": "Single Enemy",
    "classSource": "Necromancer",
    "description": "Standard class attack scaling with physical potency.",
    "flags": [
      "Physical"
    ]
  },
  {
    "id": "necromancer-guard",
    "name": "Necromancer Guard",
    "type": "Passive",
    "cost": "1 PP",
    "potency": 0,
    "target": "Self / Allies",
    "classSource": "Necromancer",
    "description": "Grants medium guard and mitigates incoming damage by 50%.",
    "flags": [
      "Before Attacked"
    ]
  },
  {
    "id": "overlord-strike",
    "name": "Overlord Strike",
    "type": "Active",
    "cost": "1 AP",
    "potency": 100,
    "target": "Single Enemy",
    "classSource": "Overlord",
    "description": "Standard class attack scaling with physical potency.",
    "flags": [
      "Physical"
    ]
  },
  {
    "id": "overlord-guard",
    "name": "Overlord Guard",
    "type": "Passive",
    "cost": "1 PP",
    "potency": 0,
    "target": "Self / Allies",
    "classSource": "Overlord",
    "description": "Grants medium guard and mitigates incoming damage by 50%.",
    "flags": [
      "Before Attacked"
    ]
  },
  {
    "id": "paladin-strike",
    "name": "Paladin Strike",
    "type": "Active",
    "cost": "1 AP",
    "potency": 100,
    "target": "Single Enemy",
    "classSource": "Paladin",
    "description": "Standard class attack scaling with physical potency.",
    "flags": [
      "Physical"
    ]
  },
  {
    "id": "paladin-guard",
    "name": "Paladin Guard",
    "type": "Passive",
    "cost": "1 PP",
    "potency": 0,
    "target": "Self / Allies",
    "classSource": "Paladin",
    "description": "Grants medium guard and mitigates incoming damage by 50%.",
    "flags": [
      "Before Attacked"
    ]
  },
  {
    "id": "priestess-strike",
    "name": "Priestess Strike",
    "type": "Active",
    "cost": "1 AP",
    "potency": 100,
    "target": "Single Enemy",
    "classSource": "Priestess",
    "description": "Standard class attack scaling with physical potency.",
    "flags": [
      "Physical"
    ]
  },
  {
    "id": "priestess-guard",
    "name": "Priestess Guard",
    "type": "Passive",
    "cost": "1 PP",
    "potency": 0,
    "target": "Self / Allies",
    "classSource": "Priestess",
    "description": "Grants medium guard and mitigates incoming damage by 50%.",
    "flags": [
      "Before Attacked"
    ]
  },
  {
    "id": "prince-strike",
    "name": "Prince Strike",
    "type": "Active",
    "cost": "1 AP",
    "potency": 100,
    "target": "Single Enemy",
    "classSource": "Prince",
    "description": "Standard class attack scaling with physical potency.",
    "flags": [
      "Physical"
    ]
  },
  {
    "id": "prince-guard",
    "name": "Prince Guard",
    "type": "Passive",
    "cost": "1 PP",
    "potency": 0,
    "target": "Self / Allies",
    "classSource": "Prince",
    "description": "Grants medium guard and mitigates incoming damage by 50%.",
    "flags": [
      "Before Attacked"
    ]
  },
  {
    "id": "radiant-knight-strike",
    "name": "Radiant Knight Strike",
    "type": "Active",
    "cost": "1 AP",
    "potency": 100,
    "target": "Single Enemy",
    "classSource": "Radiant Knight",
    "description": "Standard class attack scaling with physical potency.",
    "flags": [
      "Physical"
    ]
  },
  {
    "id": "radiant-knight-guard",
    "name": "Radiant Knight Guard",
    "type": "Passive",
    "cost": "1 PP",
    "potency": 0,
    "target": "Self / Allies",
    "classSource": "Radiant Knight",
    "description": "Grants medium guard and mitigates incoming damage by 50%.",
    "flags": [
      "Before Attacked"
    ]
  },
  {
    "id": "rogue-strike",
    "name": "Rogue Strike",
    "type": "Active",
    "cost": "1 AP",
    "potency": 100,
    "target": "Single Enemy",
    "classSource": "Rogue",
    "description": "Standard class attack scaling with physical potency.",
    "flags": [
      "Physical"
    ]
  },
  {
    "id": "rogue-guard",
    "name": "Rogue Guard",
    "type": "Passive",
    "cost": "1 PP",
    "potency": 0,
    "target": "Self / Allies",
    "classSource": "Rogue",
    "description": "Grants medium guard and mitigates incoming damage by 50%.",
    "flags": [
      "Before Attacked"
    ]
  },
  {
    "id": "sainted-knight-strike",
    "name": "Sainted Knight Strike",
    "type": "Active",
    "cost": "1 AP",
    "potency": 100,
    "target": "Single Enemy",
    "classSource": "Sainted Knight",
    "description": "Standard class attack scaling with physical potency.",
    "flags": [
      "Physical"
    ]
  },
  {
    "id": "sainted-knight-guard",
    "name": "Sainted Knight Guard",
    "type": "Passive",
    "cost": "1 PP",
    "potency": 0,
    "target": "Self / Allies",
    "classSource": "Sainted Knight",
    "description": "Grants medium guard and mitigates incoming damage by 50%.",
    "flags": [
      "Before Attacked"
    ]
  },
  {
    "id": "sellsword-strike",
    "name": "Sellsword Strike",
    "type": "Active",
    "cost": "1 AP",
    "potency": 100,
    "target": "Single Enemy",
    "classSource": "Sellsword",
    "description": "Standard class attack scaling with physical potency.",
    "flags": [
      "Physical"
    ]
  },
  {
    "id": "sellsword-guard",
    "name": "Sellsword Guard",
    "type": "Passive",
    "cost": "1 PP",
    "potency": 0,
    "target": "Self / Allies",
    "classSource": "Sellsword",
    "description": "Grants medium guard and mitigates incoming damage by 50%.",
    "flags": [
      "Before Attacked"
    ]
  },
  {
    "id": "sergeant-strike",
    "name": "Sergeant Strike",
    "type": "Active",
    "cost": "1 AP",
    "potency": 100,
    "target": "Single Enemy",
    "classSource": "Sergeant",
    "description": "Standard class attack scaling with physical potency.",
    "flags": [
      "Physical"
    ]
  },
  {
    "id": "sergeant-guard",
    "name": "Sergeant Guard",
    "type": "Passive",
    "cost": "1 PP",
    "potency": 0,
    "target": "Self / Allies",
    "classSource": "Sergeant",
    "description": "Grants medium guard and mitigates incoming damage by 50%.",
    "flags": [
      "Before Attacked"
    ]
  },
  {
    "id": "shaman-strike",
    "name": "Shaman Strike",
    "type": "Active",
    "cost": "1 AP",
    "potency": 100,
    "target": "Single Enemy",
    "classSource": "Shaman",
    "description": "Standard class attack scaling with physical potency.",
    "flags": [
      "Physical"
    ]
  },
  {
    "id": "shaman-guard",
    "name": "Shaman Guard",
    "type": "Passive",
    "cost": "1 PP",
    "potency": 0,
    "target": "Self / Allies",
    "classSource": "Shaman",
    "description": "Grants medium guard and mitigates incoming damage by 50%.",
    "flags": [
      "Before Attacked"
    ]
  },
  {
    "id": "shieldshooter-strike",
    "name": "Shieldshooter Strike",
    "type": "Active",
    "cost": "1 AP",
    "potency": 100,
    "target": "Single Enemy",
    "classSource": "Shieldshooter",
    "description": "Standard class attack scaling with physical potency.",
    "flags": [
      "Physical"
    ]
  },
  {
    "id": "shieldshooter-guard",
    "name": "Shieldshooter Guard",
    "type": "Passive",
    "cost": "1 PP",
    "potency": 0,
    "target": "Self / Allies",
    "classSource": "Shieldshooter",
    "description": "Grants medium guard and mitigates incoming damage by 50%.",
    "flags": [
      "Before Attacked"
    ]
  },
  {
    "id": "sniper-strike",
    "name": "Sniper Strike",
    "type": "Active",
    "cost": "1 AP",
    "potency": 100,
    "target": "Single Enemy",
    "classSource": "Sniper",
    "description": "Standard class attack scaling with physical potency.",
    "flags": [
      "Physical"
    ]
  },
  {
    "id": "sniper-guard",
    "name": "Sniper Guard",
    "type": "Passive",
    "cost": "1 PP",
    "potency": 0,
    "target": "Self / Allies",
    "classSource": "Sniper",
    "description": "Grants medium guard and mitigates incoming damage by 50%.",
    "flags": [
      "Before Attacked"
    ]
  },
  {
    "id": "snow-ranger-strike",
    "name": "Snow Ranger Strike",
    "type": "Active",
    "cost": "1 AP",
    "potency": 100,
    "target": "Single Enemy",
    "classSource": "Snow Ranger",
    "description": "Standard class attack scaling with physical potency.",
    "flags": [
      "Physical"
    ]
  },
  {
    "id": "snow-ranger-guard",
    "name": "Snow Ranger Guard",
    "type": "Passive",
    "cost": "1 PP",
    "potency": 0,
    "target": "Self / Allies",
    "classSource": "Snow Ranger",
    "description": "Grants medium guard and mitigates incoming damage by 50%.",
    "flags": [
      "Before Attacked"
    ]
  },
  {
    "id": "soldier-strike",
    "name": "Soldier Strike",
    "type": "Active",
    "cost": "1 AP",
    "potency": 100,
    "target": "Single Enemy",
    "classSource": "Soldier",
    "description": "Standard class attack scaling with physical potency.",
    "flags": [
      "Physical"
    ]
  },
  {
    "id": "soldier-guard",
    "name": "Soldier Guard",
    "type": "Passive",
    "cost": "1 PP",
    "potency": 0,
    "target": "Self / Allies",
    "classSource": "Soldier",
    "description": "Grants medium guard and mitigates incoming damage by 50%.",
    "flags": [
      "Before Attacked"
    ]
  },
  {
    "id": "sorceress-strike",
    "name": "Sorceress Strike",
    "type": "Active",
    "cost": "1 AP",
    "potency": 100,
    "target": "Single Enemy",
    "classSource": "Sorceress",
    "description": "Standard class attack scaling with physical potency.",
    "flags": [
      "Physical"
    ]
  },
  {
    "id": "sorceress-guard",
    "name": "Sorceress Guard",
    "type": "Passive",
    "cost": "1 PP",
    "potency": 0,
    "target": "Self / Allies",
    "classSource": "Sorceress",
    "description": "Grants medium guard and mitigates incoming damage by 50%.",
    "flags": [
      "Before Attacked"
    ]
  },
  {
    "id": "swordfighter-strike",
    "name": "Swordfighter Strike",
    "type": "Active",
    "cost": "1 AP",
    "potency": 100,
    "target": "Single Enemy",
    "classSource": "Swordfighter",
    "description": "Standard class attack scaling with physical potency.",
    "flags": [
      "Physical"
    ]
  },
  {
    "id": "swordfighter-guard",
    "name": "Swordfighter Guard",
    "type": "Passive",
    "cost": "1 PP",
    "potency": 0,
    "target": "Self / Allies",
    "classSource": "Swordfighter",
    "description": "Grants medium guard and mitigates incoming damage by 50%.",
    "flags": [
      "Before Attacked"
    ]
  },
  {
    "id": "swordmaster-strike",
    "name": "Swordmaster Strike",
    "type": "Active",
    "cost": "1 AP",
    "potency": 100,
    "target": "Single Enemy",
    "classSource": "Swordmaster",
    "description": "Standard class attack scaling with physical potency.",
    "flags": [
      "Physical"
    ]
  },
  {
    "id": "swordmaster-guard",
    "name": "Swordmaster Guard",
    "type": "Passive",
    "cost": "1 PP",
    "potency": 0,
    "target": "Self / Allies",
    "classSource": "Swordmaster",
    "description": "Grants medium guard and mitigates incoming damage by 50%.",
    "flags": [
      "Before Attacked"
    ]
  },
  {
    "id": "thief-strike",
    "name": "Thief Strike",
    "type": "Active",
    "cost": "1 AP",
    "potency": 100,
    "target": "Single Enemy",
    "classSource": "Thief",
    "description": "Standard class attack scaling with physical potency.",
    "flags": [
      "Physical"
    ]
  },
  {
    "id": "thief-guard",
    "name": "Thief Guard",
    "type": "Passive",
    "cost": "1 PP",
    "potency": 0,
    "target": "Self / Allies",
    "classSource": "Thief",
    "description": "Grants medium guard and mitigates incoming damage by 50%.",
    "flags": [
      "Before Attacked"
    ]
  },
  {
    "id": "valkyria-strike",
    "name": "Valkyria Strike",
    "type": "Active",
    "cost": "1 AP",
    "potency": 100,
    "target": "Single Enemy",
    "classSource": "Valkyria",
    "description": "Standard class attack scaling with physical potency.",
    "flags": [
      "Physical"
    ]
  },
  {
    "id": "valkyria-guard",
    "name": "Valkyria Guard",
    "type": "Passive",
    "cost": "1 PP",
    "potency": 0,
    "target": "Self / Allies",
    "classSource": "Valkyria",
    "description": "Grants medium guard and mitigates incoming damage by 50%.",
    "flags": [
      "Before Attacked"
    ]
  },
  {
    "id": "vanguard-strike",
    "name": "Vanguard Strike",
    "type": "Active",
    "cost": "1 AP",
    "potency": 100,
    "target": "Single Enemy",
    "classSource": "Vanguard",
    "description": "Standard class attack scaling with physical potency.",
    "flags": [
      "Physical"
    ]
  },
  {
    "id": "vanguard-guard",
    "name": "Vanguard Guard",
    "type": "Passive",
    "cost": "1 PP",
    "potency": 0,
    "target": "Self / Allies",
    "classSource": "Vanguard",
    "description": "Grants medium guard and mitigates incoming damage by 50%.",
    "flags": [
      "Before Attacked"
    ]
  },
  {
    "id": "viking-strike",
    "name": "Viking Strike",
    "type": "Active",
    "cost": "1 AP",
    "potency": 100,
    "target": "Single Enemy",
    "classSource": "Viking",
    "description": "Standard class attack scaling with physical potency.",
    "flags": [
      "Physical"
    ]
  },
  {
    "id": "viking-guard",
    "name": "Viking Guard",
    "type": "Passive",
    "cost": "1 PP",
    "potency": 0,
    "target": "Self / Allies",
    "classSource": "Viking",
    "description": "Grants medium guard and mitigates incoming damage by 50%.",
    "flags": [
      "Before Attacked"
    ]
  },
  {
    "id": "warlock-strike",
    "name": "Warlock Strike",
    "type": "Active",
    "cost": "1 AP",
    "potency": 100,
    "target": "Single Enemy",
    "classSource": "Warlock",
    "description": "Standard class attack scaling with physical potency.",
    "flags": [
      "Physical"
    ]
  },
  {
    "id": "warlock-guard",
    "name": "Warlock Guard",
    "type": "Passive",
    "cost": "1 PP",
    "potency": 0,
    "target": "Self / Allies",
    "classSource": "Warlock",
    "description": "Grants medium guard and mitigates incoming damage by 50%.",
    "flags": [
      "Before Attacked"
    ]
  },
  {
    "id": "warrior-strike",
    "name": "Warrior Strike",
    "type": "Active",
    "cost": "1 AP",
    "potency": 100,
    "target": "Single Enemy",
    "classSource": "Warrior",
    "description": "Standard class attack scaling with physical potency.",
    "flags": [
      "Physical"
    ]
  },
  {
    "id": "warrior-guard",
    "name": "Warrior Guard",
    "type": "Passive",
    "cost": "1 PP",
    "potency": 0,
    "target": "Self / Allies",
    "classSource": "Warrior",
    "description": "Grants medium guard and mitigates incoming damage by 50%.",
    "flags": [
      "Before Attacked"
    ]
  },
  {
    "id": "werebear-strike",
    "name": "Werebear Strike",
    "type": "Active",
    "cost": "1 AP",
    "potency": 100,
    "target": "Single Enemy",
    "classSource": "Werebear",
    "description": "Standard class attack scaling with physical potency.",
    "flags": [
      "Physical"
    ]
  },
  {
    "id": "werebear-guard",
    "name": "Werebear Guard",
    "type": "Passive",
    "cost": "1 PP",
    "potency": 0,
    "target": "Self / Allies",
    "classSource": "Werebear",
    "description": "Grants medium guard and mitigates incoming damage by 50%.",
    "flags": [
      "Before Attacked"
    ]
  },
  {
    "id": "werefox-strike",
    "name": "Werefox Strike",
    "type": "Active",
    "cost": "1 AP",
    "potency": 100,
    "target": "Single Enemy",
    "classSource": "Werefox",
    "description": "Standard class attack scaling with physical potency.",
    "flags": [
      "Physical"
    ]
  },
  {
    "id": "werefox-guard",
    "name": "Werefox Guard",
    "type": "Passive",
    "cost": "1 PP",
    "potency": 0,
    "target": "Self / Allies",
    "classSource": "Werefox",
    "description": "Grants medium guard and mitigates incoming damage by 50%.",
    "flags": [
      "Before Attacked"
    ]
  },
  {
    "id": "werelion-strike",
    "name": "Werelion Strike",
    "type": "Active",
    "cost": "1 AP",
    "potency": 100,
    "target": "Single Enemy",
    "classSource": "Werelion",
    "description": "Standard class attack scaling with physical potency.",
    "flags": [
      "Physical"
    ]
  },
  {
    "id": "werelion-guard",
    "name": "Werelion Guard",
    "type": "Passive",
    "cost": "1 PP",
    "potency": 0,
    "target": "Self / Allies",
    "classSource": "Werelion",
    "description": "Grants medium guard and mitigates incoming damage by 50%.",
    "flags": [
      "Before Attacked"
    ]
  },
  {
    "id": "wereowl-strike",
    "name": "Wereowl Strike",
    "type": "Active",
    "cost": "1 AP",
    "potency": 100,
    "target": "Single Enemy",
    "classSource": "Wereowl",
    "description": "Standard class attack scaling with physical potency.",
    "flags": [
      "Physical"
    ]
  },
  {
    "id": "wereowl-guard",
    "name": "Wereowl Guard",
    "type": "Passive",
    "cost": "1 PP",
    "potency": 0,
    "target": "Self / Allies",
    "classSource": "Wereowl",
    "description": "Grants medium guard and mitigates incoming damage by 50%.",
    "flags": [
      "Before Attacked"
    ]
  },
  {
    "id": "werewolf-strike",
    "name": "Werewolf Strike",
    "type": "Active",
    "cost": "1 AP",
    "potency": 100,
    "target": "Single Enemy",
    "classSource": "Werewolf",
    "description": "Standard class attack scaling with physical potency.",
    "flags": [
      "Physical"
    ]
  },
  {
    "id": "werewolf-guard",
    "name": "Werewolf Guard",
    "type": "Passive",
    "cost": "1 PP",
    "potency": 0,
    "target": "Self / Allies",
    "classSource": "Werewolf",
    "description": "Grants medium guard and mitigates incoming damage by 50%.",
    "flags": [
      "Before Attacked"
    ]
  },
  {
    "id": "witch-strike",
    "name": "Witch Strike",
    "type": "Active",
    "cost": "1 AP",
    "potency": 100,
    "target": "Single Enemy",
    "classSource": "Witch",
    "description": "Standard class attack scaling with physical potency.",
    "flags": [
      "Physical"
    ]
  },
  {
    "id": "witch-guard",
    "name": "Witch Guard",
    "type": "Passive",
    "cost": "1 PP",
    "potency": 0,
    "target": "Self / Allies",
    "classSource": "Witch",
    "description": "Grants medium guard and mitigates incoming damage by 50%.",
    "flags": [
      "Before Attacked"
    ]
  },
  {
    "id": "wizard-strike",
    "name": "Wizard Strike",
    "type": "Active",
    "cost": "1 AP",
    "potency": 100,
    "target": "Single Enemy",
    "classSource": "Wizard",
    "description": "Standard class attack scaling with physical potency.",
    "flags": [
      "Physical"
    ]
  },
  {
    "id": "wizard-guard",
    "name": "Wizard Guard",
    "type": "Passive",
    "cost": "1 PP",
    "potency": 0,
    "target": "Self / Allies",
    "classSource": "Wizard",
    "description": "Grants medium guard and mitigates incoming damage by 50%.",
    "flags": [
      "Before Attacked"
    ]
  },
  {
    "id": "wyvern-knight-strike",
    "name": "Wyvern Knight Strike",
    "type": "Active",
    "cost": "1 AP",
    "potency": 100,
    "target": "Single Enemy",
    "classSource": "Wyvern Knight",
    "description": "Standard class attack scaling with physical potency.",
    "flags": [
      "Physical"
    ]
  },
  {
    "id": "wyvern-knight-guard",
    "name": "Wyvern Knight Guard",
    "type": "Passive",
    "cost": "1 PP",
    "potency": 0,
    "target": "Self / Allies",
    "classSource": "Wyvern Knight",
    "description": "Grants medium guard and mitigates incoming damage by 50%.",
    "flags": [
      "Before Attacked"
    ]
  },
  {
    "id": "wyvern-master-strike",
    "name": "Wyvern Master Strike",
    "type": "Active",
    "cost": "1 AP",
    "potency": 100,
    "target": "Single Enemy",
    "classSource": "Wyvern Master",
    "description": "Standard class attack scaling with physical potency.",
    "flags": [
      "Physical"
    ]
  },
  {
    "id": "wyvern-master-guard",
    "name": "Wyvern Master Guard",
    "type": "Passive",
    "cost": "1 PP",
    "potency": 0,
    "target": "Self / Allies",
    "classSource": "Wyvern Master",
    "description": "Grants medium guard and mitigates incoming damage by 50%.",
    "flags": [
      "Before Attacked"
    ]
  },
  {
    "id": "cavalry-call",
    "name": "Cavalry Call",
    "type": "Valor",
    "cost": "1 VP",
    "target": "Area",
    "classSource": "Great Knight",
    "description": "Increases movement speed of all nearby cavalry units by +50% for 30 seconds.",
    "flags": [
      "Field Movement",
      "Buff"
    ]
  },
  {
    "id": "arrow-rain-valor",
    "name": "Arrow Rain",
    "type": "Valor",
    "cost": "2 VP",
    "target": "Target Area",
    "classSource": "Snow Ranger",
    "description": "Fires a volley of arrows dealing physical damage to enemy units in target area.",
    "flags": [
      "Field Damage",
      "Ranged"
    ]
  },
  {
    "id": "wild-surge",
    "name": "Wild Surge",
    "type": "Valor",
    "cost": "1 VP",
    "target": "Self Squad",
    "classSource": "Renegade",
    "description": "Instantly recovers 2 AP for all units in current squad.",
    "flags": [
      "AP Recovery",
      "Squad Buff"
    ]
  },
  {
    "id": "teleport-valor",
    "name": "Teleport",
    "type": "Valor",
    "cost": "1 VP",
    "target": "Ally Garrison",
    "classSource": "Sorceress",
    "description": "Instantly teleports user squad to any captured allied garrison.",
    "flags": [
      "Field Mobility"
    ]
  },
  {
    "id": "sanctuary",
    "name": "Sanctuary",
    "type": "Valor",
    "cost": "2 VP",
    "target": "Area",
    "classSource": "Bishop",
    "description": "Heals 50% HP for all allied squads within area of effect.",
    "flags": [
      "Field Heal"
    ]
  },
  {
    "id": "blade-storm-valor",
    "name": "Blade Storm",
    "type": "Valor",
    "cost": "2 VP",
    "target": "Target Area",
    "classSource": "Swordmaster",
    "description": "Unleashes a storm of slashes dealing 150 potency physical damage.",
    "flags": [
      "Field Damage"
    ]
  },
  {
    "id": "sandstorm-field",
    "name": "Sandstorm Field",
    "type": "Valor",
    "cost": "2 VP",
    "target": "Enemy Squad",
    "classSource": "Druid",
    "description": "Inflicts Blindness and reduces movement speed by 40% on targeted enemy squad.",
    "flags": [
      "Field Debuff"
    ]
  },
  {
    "id": "royal-order-valor",
    "name": "Royal Order",
    "type": "Valor",
    "cost": "1 VP",
    "target": "Self Squad",
    "classSource": "High Lord",
    "description": "Increases Valor EXP gained from current combat encounter by +100%.",
    "flags": [
      "EXP Buff"
    ]
  }
];
