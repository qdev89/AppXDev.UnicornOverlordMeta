import { GameSkill } from '@/types';

export const SKILLS_DATA: GameSkill[] = [
  {
    "id": "lean-edge",
    "name": "Lean Edge",
    "type": "Active",
    "cost": "1 AP",
    "potency": 100,
    "target": "Single Enemy",
    "classSource": "High Lord",
    "description": "Strike a single target and heal HP equal to 50% of damage dealt.",
    "flags": [
      "Physical",
      "Sustain"
    ]
  },
  {
    "id": "spinning-edge",
    "name": "Spinning Edge",
    "type": "Active",
    "cost": "2 AP",
    "potency": 150,
    "target": "Enemy Row",
    "classSource": "High Lord",
    "description": "Cleave an entire enemy row with heavy physical damage. Grants +1 AP on kill.",
    "flags": [
      "Physical",
      "Row",
      "AP Restore"
    ]
  },
  {
    "id": "shield-bash",
    "name": "Shield Bash",
    "type": "Active",
    "cost": "1 AP",
    "potency": 100,
    "target": "Single Enemy",
    "classSource": "High Lord",
    "description": "Strike with shield, dealing physical damage and inflicting Stun.",
    "flags": [
      "Physical",
      "Stun"
    ]
  },
  {
    "id": "luminous-cover",
    "name": "Luminous Cover",
    "type": "Passive",
    "cost": "1 PP",
    "potency": 0,
    "target": "Before Ally Attacked",
    "classSource": "High Lord",
    "description": "Cover an ally from incoming attacks and increase physical defense by 50%.",
    "flags": [
      "Cover",
      "Defense"
    ]
  },
  {
    "id": "noble-guard",
    "name": "Noble Guard",
    "type": "Passive",
    "cost": "1 PP",
    "potency": 0,
    "target": "Before Attacked",
    "classSource": "High Lord",
    "description": "Execute a heavy guard and restore 1 PP upon guarding successfully.",
    "flags": [
      "Guard",
      "PP Restore"
    ]
  },
  {
    "id": "cavalry-call",
    "name": "Cavalry Call",
    "type": "Passive",
    "cost": "1 PP",
    "potency": 0,
    "target": "Start of Battle",
    "classSource": "High Lord",
    "description": "At Start of Battle, grant all cavalry allies +20% Physical Attack.",
    "flags": [
      "Buff",
      "Cavalry"
    ]
  },
  {
    "id": "first-strike",
    "name": "First Strike",
    "type": "Active",
    "cost": "1 AP",
    "potency": 100,
    "target": "Single Enemy",
    "classSource": "Swordmaster",
    "description": "Swift strike that attacks before the enemy can act.",
    "flags": [
      "Physical",
      "High Speed"
    ]
  },
  {
    "id": "keen-edge",
    "name": "Keen Edge",
    "type": "Active",
    "cost": "1 AP",
    "potency": 100,
    "target": "Single Enemy",
    "classSource": "Swordmaster",
    "description": "Strike an enemy, granting self +50% Critical Rate for the rest of the battle.",
    "flags": [
      "Physical",
      "Crit Boost"
    ]
  },
  {
    "id": "meteor-slash",
    "name": "Meteor Slash",
    "type": "Active",
    "cost": "2 AP",
    "potency": 225,
    "target": "Single Enemy",
    "classSource": "Swordmaster",
    "description": "Unleash a 9-hit blinding flurry of slashes against a single target with guaranteed critical hits.",
    "flags": [
      "Physical",
      "Multi-Hit",
      "Critical"
    ]
  },
  {
    "id": "hastened-strike",
    "name": "Hastened Strike",
    "type": "Active",
    "cost": "1 AP",
    "potency": 100,
    "target": "Single Enemy",
    "classSource": "Swordmaster",
    "description": "At Start of Battle, immediately strike a priority enemy before any turns begin.",
    "flags": [
      "Start of Battle",
      "Truestrike"
    ]
  },
  {
    "id": "parry",
    "name": "Parry",
    "type": "Passive",
    "cost": "1 PP",
    "potency": 0,
    "target": "Before Attacked",
    "classSource": "Swordmaster",
    "description": "Completely nullify an incoming melee physical attack and restore +1 AP.",
    "flags": [
      "Nullify",
      "AP Restore"
    ]
  },
  {
    "id": "focus",
    "name": "Focus",
    "type": "Passive",
    "cost": "1 PP",
    "potency": 0,
    "target": "Before Active Action",
    "classSource": "Swordmaster",
    "description": "Sharpen focus, granting +30% Accuracy and +30% Critical Rate.",
    "flags": [
      "Self Buff",
      "Crit Rate"
    ]
  },
  {
    "id": "following-slash",
    "name": "Following Slash",
    "type": "Passive",
    "cost": "1 PP",
    "potency": 0,
    "target": "After Ally Attacks",
    "classSource": "Swordmaster",
    "description": "Follow up an ally's attack with a rapid physical strike.",
    "flags": [
      "Pursuit"
    ]
  },
  {
    "id": "holy-light",
    "name": "Holy Light",
    "type": "Active",
    "cost": "1 AP",
    "potency": 100,
    "target": "Ally / Undead",
    "classSource": "High Priestess",
    "description": "Heal an ally's HP and cleanse all status ailments. Deals heavy magic damage to Undead.",
    "flags": [
      "Healing",
      "Cleanse",
      "Anti-Undead"
    ]
  },
  {
    "id": "innocent-ray",
    "name": "Innocent Ray",
    "type": "Active",
    "cost": "2 AP",
    "potency": 150,
    "target": "Enemy Column",
    "classSource": "High Priestess",
    "description": "Blast a radiant pillar of light piercing through an enemy column.",
    "flags": [
      "Magical",
      "Column"
    ]
  },
  {
    "id": "curative-heal",
    "name": "Curative Heal",
    "type": "Active",
    "cost": "1 AP",
    "potency": 120,
    "target": "Single Ally",
    "classSource": "High Priestess",
    "description": "Restore high HP to target ally and grant continuous HP regeneration.",
    "flags": [
      "Healing"
    ]
  },
  {
    "id": "passive-supply",
    "name": "Passive Supply",
    "type": "Passive",
    "cost": "1 PP",
    "potency": 0,
    "target": "Start of Turn",
    "classSource": "High Priestess",
    "description": "Transfer 1 Passive Point to an ally with low PP.",
    "flags": [
      "Support",
      "PP Grant"
    ]
  },
  {
    "id": "quick-heal",
    "name": "Quick Heal",
    "type": "Passive",
    "cost": "1 PP",
    "potency": 0,
    "target": "When Ally Attacked",
    "classSource": "High Priestess",
    "description": "Immediately heal an ally when they sustain significant damage.",
    "flags": [
      "Reactive Healing"
    ]
  },
  {
    "id": "parting-resurrection",
    "name": "Parting Resurrection",
    "type": "Passive",
    "cost": "2 PP",
    "potency": 0,
    "target": "End of Battle",
    "classSource": "High Priestess",
    "description": "Resurrect a fallen ally at the conclusion of combat with 50% HP.",
    "flags": [
      "Revive"
    ]
  },
  {
    "id": "assaulting-lance",
    "name": "Assaulting Lance",
    "type": "Active",
    "cost": "1 AP",
    "potency": 100,
    "target": "Single Enemy",
    "classSource": "Great Knight",
    "description": "Powerful spear strike that restores +1 AP upon defeating the target.",
    "flags": [
      "Physical",
      "AP On Kill"
    ]
  },
  {
    "id": "wild-rush",
    "name": "Wild Rush",
    "type": "Active",
    "cost": "2 AP",
    "potency": 150,
    "target": "Enemy Column",
    "classSource": "Great Knight",
    "description": "Trample through an enemy column with 200% bonus damage to infantry and inflict Stun.",
    "flags": [
      "Physical",
      "Column",
      "Stun",
      "Anti-Infantry"
    ]
  },
  {
    "id": "pile-thrust",
    "name": "Pile Thrust",
    "type": "Active",
    "cost": "1 AP",
    "potency": 120,
    "target": "Single Enemy",
    "classSource": "Great Knight",
    "description": "Heavy thrust piercing through 30% of target Physical Defense.",
    "flags": [
      "Physical",
      "Armor Piercing"
    ]
  },
  {
    "id": "knight-s-pursuit",
    "name": "Knight's Pursuit",
    "type": "Passive",
    "cost": "1 PP",
    "potency": 0,
    "target": "After Ally Attacks",
    "classSource": "Great Knight",
    "description": "Trample in with a pursuit spear strike following an ally's attack.",
    "flags": [
      "Pursuit",
      "Cavalry"
    ]
  },
  {
    "id": "cavalry-call",
    "name": "Cavalry Call",
    "type": "Passive",
    "cost": "1 PP",
    "potency": 0,
    "target": "Start of Battle",
    "classSource": "Great Knight",
    "description": "Increase Physical Attack of all cavalry allies in the squad by 20%.",
    "flags": [
      "Buff",
      "Cavalry"
    ]
  },
  {
    "id": "javelin",
    "name": "Javelin",
    "type": "Active",
    "cost": "1 AP",
    "potency": 100,
    "target": "Single Enemy",
    "classSource": "Sergeant",
    "description": "Hurl a spear at any target, ignoring frontline protection.",
    "flags": [
      "Physical",
      "Ranged"
    ]
  },
  {
    "id": "long-thrust",
    "name": "Long Thrust",
    "type": "Active",
    "cost": "1 AP",
    "potency": 120,
    "target": "Enemy Column",
    "classSource": "Sergeant",
    "description": "Pierce through an enemy column with 100% Truestrike accuracy.",
    "flags": [
      "Physical",
      "Column",
      "Truestrike"
    ]
  },
  {
    "id": "wide-needle",
    "name": "Wide Needle",
    "type": "Active",
    "cost": "2 AP",
    "potency": 150,
    "target": "Enemy Row",
    "classSource": "Sergeant",
    "description": "Sweep spear across an entire enemy row, piercing armor.",
    "flags": [
      "Physical",
      "Row"
    ]
  },
  {
    "id": "keen-call",
    "name": "Keen Call",
    "type": "Passive",
    "cost": "1 PP",
    "potency": 0,
    "target": "When Ally Attacks",
    "classSource": "Sergeant",
    "description": "Grant 100% Guaranteed Critical Hit on an attacking ally's active skill.",
    "flags": [
      "Buff",
      "Guaranteed Crit"
    ]
  },
  {
    "id": "first-aid",
    "name": "First Aid",
    "type": "Passive",
    "cost": "1 PP",
    "potency": 0,
    "target": "End of Battle",
    "classSource": "Sergeant",
    "description": "Heal all wounded squad members for 25% HP at the end of combat.",
    "flags": [
      "Healing"
    ]
  },
  {
    "id": "active-supply",
    "name": "Active Supply",
    "type": "Passive",
    "cost": "1 PP",
    "potency": 0,
    "target": "Start of Turn",
    "classSource": "Sergeant",
    "description": "Grant +1 AP to an adjacent ally.",
    "flags": [
      "Support",
      "AP Grant"
    ]
  },
  {
    "id": "heavy-slash",
    "name": "Heavy Slash",
    "type": "Active",
    "cost": "1 AP",
    "potency": 100,
    "target": "Single Enemy",
    "classSource": "Legionnaire",
    "description": "Deliver a heavy shield-assisted sword strike.",
    "flags": [
      "Physical"
    ]
  },
  {
    "id": "guard-stance",
    "name": "Guard Stance",
    "type": "Active",
    "cost": "1 AP",
    "potency": 0,
    "target": "Self",
    "classSource": "Legionnaire",
    "description": "Enter defensive stance, guaranteeing 100% heavy guards on all incoming hits.",
    "flags": [
      "Self Buff",
      "Guard 100%"
    ]
  },
  {
    "id": "heavy-cover",
    "name": "Heavy Cover",
    "type": "Passive",
    "cost": "1 PP",
    "potency": 0,
    "target": "Before Ally Attacked",
    "classSource": "Legionnaire",
    "description": "Cover an ally with Greatshield, taking 0 damage from ranged and physical attacks.",
    "flags": [
      "Cover",
      "Damage Immunity"
    ]
  },
  {
    "id": "row-cover",
    "name": "Row Cover",
    "type": "Passive",
    "cost": "2 PP",
    "potency": 0,
    "target": "Before Row Attacked",
    "classSource": "Legionnaire",
    "description": "Cover an entire row of allies from wide sweep attacks.",
    "flags": [
      "Row Cover",
      "Protection"
    ]
  },
  {
    "id": "indomitable",
    "name": "Indomitable",
    "type": "Passive",
    "cost": "1 PP",
    "potency": 0,
    "target": "Upon Lethal Damage",
    "classSource": "Legionnaire",
    "description": "Survive lethal damage with 1 HP remaining.",
    "flags": [
      "Survive"
    ]
  },
  {
    "id": "defensive-curse",
    "name": "Defensive Curse",
    "type": "Active",
    "cost": "1 AP",
    "potency": 0,
    "target": "Enemy Row",
    "classSource": "Druid",
    "description": "Reduce enemy row Physical Defense and Magical Defense by 50% and disable guard.",
    "flags": [
      "Debuff",
      "Row",
      "Armor Break"
    ]
  },
  {
    "id": "offensive-curse",
    "name": "Offensive Curse",
    "type": "Active",
    "cost": "1 AP",
    "potency": 0,
    "target": "Enemy Row",
    "classSource": "Druid",
    "description": "Reduce enemy row Physical Attack and Magical Attack by 50%.",
    "flags": [
      "Debuff",
      "Row",
      "Attack Break"
    ]
  },
  {
    "id": "gravity",
    "name": "Gravity",
    "type": "Active",
    "cost": "1 AP",
    "potency": 0,
    "target": "Enemy Row",
    "classSource": "Druid",
    "description": "Reduce enemy row Initiative by 20 and drain 1 AP.",
    "flags": [
      "Debuff",
      "Initiative Down"
    ]
  },
  {
    "id": "quick-curse",
    "name": "Quick Curse",
    "type": "Passive",
    "cost": "1 PP",
    "potency": 0,
    "target": "Before Enemy Attacks",
    "classSource": "Druid",
    "description": "Reduce an enemy's damage output by 50% immediately before they hit.",
    "flags": [
      "Reaction",
      "Debuff"
    ]
  },
  {
    "id": "cursed-swamp",
    "name": "Cursed Swamp",
    "type": "Passive",
    "cost": "2 PP",
    "potency": 0,
    "target": "Start of Battle",
    "classSource": "Druid",
    "description": "At Start of Battle, reduce all ground enemies' Initiative by 15 and remove their Guard capability.",
    "flags": [
      "Start of Battle",
      "Row Debuff"
    ]
  },
  {
    "id": "parting-curse",
    "name": "Parting Curse",
    "type": "Passive",
    "cost": "1 PP",
    "potency": 0,
    "target": "Upon Death",
    "classSource": "Druid",
    "description": "Inflict heavy stat debuffs on all enemies upon falling.",
    "flags": [
      "Retaliation Debuff"
    ]
  },
  {
    "id": "fireball",
    "name": "Fireball",
    "type": "Active",
    "cost": "1 AP",
    "potency": 100,
    "target": "Single Enemy",
    "classSource": "Sorcerer",
    "description": "Cast a blazing fireball that inflicts Burn.",
    "flags": [
      "Magical",
      "Burn"
    ]
  },
  {
    "id": "flame-burst",
    "name": "Flame Burst",
    "type": "Active",
    "cost": "2 AP",
    "potency": 150,
    "target": "Enemy Column",
    "classSource": "Sorcerer",
    "description": "Explode a column with volcanic flames, inflicting heavy Burn.",
    "flags": [
      "Magical",
      "Column",
      "Burn"
    ]
  },
  {
    "id": "volcano",
    "name": "Volcano",
    "type": "Active",
    "cost": "3 AP",
    "potency": 200,
    "target": "All Enemies",
    "classSource": "Sorcerer",
    "description": "Erupt a massive volcano raining fiery devastation on all enemies.",
    "flags": [
      "Magical",
      "All Enemies",
      "Charge"
    ]
  },
  {
    "id": "focus-sight",
    "name": "Focus Sight",
    "type": "Passive",
    "cost": "1 PP",
    "potency": 0,
    "target": "Before Active Action",
    "classSource": "Sorcerer",
    "description": "Grant 100% Truestrike and +30% Magic Crit to next active spell.",
    "flags": [
      "Truestrike"
    ]
  },
  {
    "id": "sorcerous-connection",
    "name": "Sorcerous Connection",
    "type": "Passive",
    "cost": "1 PP",
    "potency": 0,
    "target": "When Ally Casts Magic",
    "classSource": "Sorcerer",
    "description": "Grant +50% Magic Attack and +30% Magic Crit to casting ally.",
    "flags": [
      "Magic Boost"
    ]
  },
  {
    "id": "magic-pursuit",
    "name": "Magic Pursuit",
    "type": "Passive",
    "cost": "1 PP",
    "potency": 0,
    "target": "After Ally Attacks",
    "classSource": "Sorcerer",
    "description": "Follow up an ally's strike with a magical bolt.",
    "flags": [
      "Magic Pursuit"
    ]
  },
  {
    "id": "ice-coffin",
    "name": "Ice Coffin",
    "type": "Active",
    "cost": "2 AP",
    "potency": 150,
    "target": "Single Enemy",
    "classSource": "Sorceress",
    "description": "Trap an enemy in an ice crystal, inflicting Freeze.",
    "flags": [
      "Magical",
      "Freeze"
    ]
  },
  {
    "id": "thunderous",
    "name": "Thunderous",
    "type": "Active",
    "cost": "1 AP",
    "potency": 100,
    "target": "Single Enemy",
    "classSource": "Sorceress",
    "description": "Strike target with lightning and inflict Stun.",
    "flags": [
      "Magical",
      "Stun"
    ]
  },
  {
    "id": "magic-weapon",
    "name": "Magic Weapon",
    "type": "Passive",
    "cost": "1 PP",
    "potency": 0,
    "target": "When Ally Attacks",
    "classSource": "Sorceress",
    "description": "Infuse an ally's physical attack with +50 potency magical damage.",
    "flags": [
      "Buff",
      "Magic Infusion"
    ]
  },
  {
    "id": "focus-sight",
    "name": "Focus Sight",
    "type": "Passive",
    "cost": "1 PP",
    "potency": 0,
    "target": "When Ally Attacks",
    "classSource": "Sorceress",
    "description": "Grant 100% Truestrike and +30% Crit to an attacking ally.",
    "flags": [
      "Buff",
      "Truestrike"
    ]
  },
  {
    "id": "quick-impetus",
    "name": "Quick Impetus",
    "type": "Passive",
    "cost": "2 PP",
    "potency": 0,
    "target": "When Ally Charges",
    "classSource": "Sorceress",
    "description": "Trigger Cat-Ear Hood to give charging ally an instant action.",
    "flags": [
      "Instant Turn",
      "Meta Core"
    ]
  },
  {
    "id": "heal",
    "name": "Heal",
    "type": "Active",
    "cost": "1 AP",
    "potency": 100,
    "target": "Single Ally",
    "classSource": "Bishop",
    "description": "Restore 100% Mag Atk HP to target ally.",
    "flags": [
      "Healing"
    ]
  },
  {
    "id": "row-heal",
    "name": "Row Heal",
    "type": "Active",
    "cost": "2 AP",
    "potency": 100,
    "target": "Ally Row",
    "classSource": "Bishop",
    "description": "Restore HP to an entire row of allies.",
    "flags": [
      "Healing",
      "Row"
    ]
  },
  {
    "id": "refresh",
    "name": "Refresh",
    "type": "Active",
    "cost": "1 AP",
    "potency": 0,
    "target": "Ally Row",
    "classSource": "Bishop",
    "description": "Cleanse all status ailments and debuffs from an ally row.",
    "flags": [
      "Cleanse",
      "Row"
    ]
  },
  {
    "id": "quick-heal",
    "name": "Quick Heal",
    "type": "Passive",
    "cost": "1 PP",
    "potency": 0,
    "target": "When Ally Attacked",
    "classSource": "Bishop",
    "description": "Immediately cast a healing light on damaged ally.",
    "flags": [
      "Reaction Healing"
    ]
  },
  {
    "id": "sacred-barrier",
    "name": "Sacred Barrier",
    "type": "Passive",
    "cost": "1 PP",
    "potency": 0,
    "target": "Start of Battle",
    "classSource": "Bishop",
    "description": "Absorb up to 2 instances of incoming magic or physical damage for allies.",
    "flags": [
      "Barrier"
    ]
  },
  {
    "id": "endure",
    "name": "Endure",
    "type": "Passive",
    "cost": "1 PP",
    "potency": 0,
    "target": "Upon Lethal Damage",
    "classSource": "Bishop",
    "description": "Survive lethal damage with 1 HP.",
    "flags": [
      "Survive"
    ]
  },
  {
    "id": "vertical-edge",
    "name": "Vertical Edge",
    "type": "Active",
    "cost": "1 AP",
    "potency": 120,
    "target": "Single Enemy",
    "classSource": "Valkyria",
    "description": "Vertical overhead slash dealing bonus damage against flying and infantry.",
    "flags": [
      "Physical",
      "Anti-Flying",
      "Anti-Infantry"
    ]
  },
  {
    "id": "maiden-s-hammer",
    "name": "Maiden's Hammer",
    "type": "Active",
    "cost": "2 AP",
    "potency": 180,
    "target": "Single Enemy",
    "classSource": "Valkyria",
    "description": "Shatter enemy guard with a crushing blow that ignores physical defense on armored targets.",
    "flags": [
      "Physical",
      "Guard Break",
      "Anti-Armor"
    ]
  },
  {
    "id": "shield-smite",
    "name": "Shield Smite",
    "type": "Active",
    "cost": "1 AP",
    "potency": 130,
    "target": "Single Enemy",
    "classSource": "Valkyria",
    "description": "Smash target with dual shields, inflicting Stun.",
    "flags": [
      "Physical",
      "Stun"
    ]
  },
  {
    "id": "iron-veil",
    "name": "Iron Veil",
    "type": "Passive",
    "cost": "1 PP",
    "potency": 0,
    "target": "Start of Battle",
    "classSource": "Valkyria",
    "description": "At Start of Battle, grant all squad allies +30% Physical Defense and +20% Guard Rate.",
    "flags": [
      "Start of Battle",
      "Buff",
      "Defense"
    ]
  },
  {
    "id": "impassioned-guard",
    "name": "Impassioned Guard",
    "type": "Passive",
    "cost": "1 PP",
    "potency": 0,
    "target": "Before Attacked",
    "classSource": "Valkyria",
    "description": "Execute a heavy guard, take reduced damage, and gain +1 AP.",
    "flags": [
      "Heavy Guard",
      "AP Gain"
    ]
  },
  {
    "id": "unwavering-stance",
    "name": "Unwavering Stance",
    "type": "Passive",
    "cost": "1 PP",
    "potency": 0,
    "target": "Passive",
    "classSource": "Valkyria",
    "description": "Immune to Stun, Freeze, and Knockback effects.",
    "flags": [
      "Immunity"
    ]
  },
  {
    "id": "glacial-rain",
    "name": "Glacial Rain",
    "type": "Active",
    "cost": "2 AP",
    "potency": 150,
    "target": "All Enemies",
    "classSource": "Snow Ranger",
    "description": "Charge a devastating blizzard arrow volley striking all enemies and inflicting Freeze.",
    "flags": [
      "Physical",
      "Charge",
      "All Enemies",
      "Freeze"
    ]
  },
  {
    "id": "triple-snipe",
    "name": "Triple Snipe",
    "type": "Active",
    "cost": "2 AP",
    "potency": 180,
    "target": "Single Enemy",
    "classSource": "Snow Ranger",
    "description": "Loose 3 rapid-fire piercing frost arrows at a priority target.",
    "flags": [
      "Physical",
      "3 Hits"
    ]
  },
  {
    "id": "sonic-shaft",
    "name": "Sonic Shaft",
    "type": "Active",
    "cost": "1 AP",
    "potency": 100,
    "target": "Single Enemy",
    "classSource": "Snow Ranger",
    "description": "High-speed arrow with guaranteed 100% Truestrike.",
    "flags": [
      "Physical",
      "Truestrike"
    ]
  },
  {
    "id": "triple-counter",
    "name": "Triple Counter",
    "type": "Passive",
    "cost": "1 PP",
    "potency": 0,
    "target": "When Attacked",
    "classSource": "Snow Ranger",
    "description": "Evade and retaliate with 3 frost counter-arrows against the attacker.",
    "flags": [
      "Counter",
      "3 Hits"
    ]
  },
  {
    "id": "eagle-eye",
    "name": "Eagle Eye",
    "type": "Passive",
    "cost": "1 PP",
    "potency": 0,
    "target": "Before Active Action",
    "classSource": "Snow Ranger",
    "description": "Grant 100% Truestrike and 100% Critical Hit on the next arrow attack.",
    "flags": [
      "Truestrike",
      "Guaranteed Crit"
    ]
  },
  {
    "id": "white-out",
    "name": "White Out",
    "type": "Passive",
    "cost": "1 PP",
    "potency": 0,
    "target": "Start of Battle",
    "classSource": "Snow Ranger",
    "description": "At Start of Battle, unleash a snow squall inflicting -20 Initiative on all enemies.",
    "flags": [
      "Start of Battle",
      "Freeze"
    ]
  },
  {
    "id": "dragoon-dive",
    "name": "Dragoon Dive",
    "type": "Active",
    "cost": "2 AP",
    "potency": 220,
    "target": "All Enemies",
    "classSource": "Wyvern Master",
    "description": "Leap into the clouds and crash down onto all enemies with apocalyptic physical force.",
    "flags": [
      "Physical",
      "Charge",
      "All Enemies",
      "Flying"
    ]
  },
  {
    "id": "fire-breath",
    "name": "Fire Breath",
    "type": "Active",
    "cost": "2 AP",
    "potency": 140,
    "target": "Enemy Row",
    "classSource": "Wyvern Master",
    "description": "Spew intense flames across an entire enemy row, inflicting Burn.",
    "flags": [
      "Magical",
      "Row",
      "Burn"
    ]
  },
  {
    "id": "ground-thrust",
    "name": "Ground Thrust",
    "type": "Active",
    "cost": "1 AP",
    "potency": 120,
    "target": "Single Enemy",
    "classSource": "Wyvern Master",
    "description": "Dive from the skies to impale a ground enemy, ignoring 30% Physical Defense.",
    "flags": [
      "Physical",
      "Anti-Ground"
    ]
  },
  {
    "id": "dragon-s-roar",
    "name": "Dragon's Roar",
    "type": "Passive",
    "cost": "1 PP",
    "potency": 0,
    "target": "Start of Battle",
    "classSource": "Wyvern Master",
    "description": "At Start of Battle, roar to reduce all enemies' Initiative by 15.",
    "flags": [
      "Start of Battle",
      "Debuff",
      "Initiative"
    ]
  },
  {
    "id": "tailwind",
    "name": "Tailwind",
    "type": "Passive",
    "cost": "1 PP",
    "potency": 0,
    "target": "Passive",
    "classSource": "Wyvern Master",
    "description": "Boost Initiative of all flying allies by 15.",
    "flags": [
      "Buff",
      "Flying Speed"
    ]
  },
  {
    "id": "aerial-guard",
    "name": "Aerial Guard",
    "type": "Passive",
    "cost": "1 PP",
    "potency": 0,
    "target": "Before Attacked",
    "classSource": "Wyvern Master",
    "description": "Guard against incoming ranged and melee strikes with sturdy dragon scales.",
    "flags": [
      "Guard"
    ]
  },
  {
    "id": "high-gale",
    "name": "High Gale",
    "type": "Active",
    "cost": "2 AP",
    "potency": 160,
    "target": "Enemy Row",
    "classSource": "Gryphon Master",
    "description": "Sweep across an enemy row with heavy gale force, dealing 200% bonus damage to cavalry.",
    "flags": [
      "Physical",
      "Row",
      "Anti-Cavalry",
      "Flying"
    ]
  },
  {
    "id": "fatal-dive",
    "name": "Fatal Dive",
    "type": "Active",
    "cost": "1 AP",
    "potency": 150,
    "target": "Single Enemy",
    "classSource": "Gryphon Master",
    "description": "Plunge from the sky onto a single ground target.",
    "flags": [
      "Physical",
      "Anti-Ground"
    ]
  },
  {
    "id": "feathering",
    "name": "Feathering",
    "type": "Passive",
    "cost": "1 PP",
    "potency": 0,
    "target": "Start of Battle",
    "classSource": "Gryphon Master",
    "description": "At Start of Battle, grant all allies in the same row +15 Initiative.",
    "flags": [
      "Start of Battle",
      "Row Speed"
    ]
  },
  {
    "id": "aerial-wing",
    "name": "Aerial Wing",
    "type": "Passive",
    "cost": "1 PP",
    "potency": 0,
    "target": "When Attacked by Ground",
    "classSource": "Gryphon Master",
    "description": "Evade incoming ground melee attacks effortlessly.",
    "flags": [
      "Evasion"
    ]
  },
  {
    "id": "holy-blade",
    "name": "Holy Blade",
    "type": "Active",
    "cost": "1 AP",
    "potency": 120,
    "target": "Single Enemy",
    "classSource": "Sainted Knight",
    "description": "Hybrid holy strike that heals user for 50% of damage dealt.",
    "flags": [
      "Magical",
      "Physical",
      "Hybrid"
    ]
  },
  {
    "id": "row-heal",
    "name": "Row Heal",
    "type": "Active",
    "cost": "2 AP",
    "potency": 100,
    "target": "Ally Row",
    "classSource": "Sainted Knight",
    "description": "Restore health to an entire row of allies.",
    "flags": [
      "Healing",
      "Row"
    ]
  },
  {
    "id": "hallowed-blade",
    "name": "Hallowed Blade",
    "type": "Active",
    "cost": "2 AP",
    "potency": 150,
    "target": "Single Enemy",
    "classSource": "Sainted Knight",
    "description": "Smite target with heavy magic damage piercing armor.",
    "flags": [
      "Magical",
      "Anti-Armor"
    ]
  },
  {
    "id": "magic-barrier",
    "name": "Magic Barrier",
    "type": "Passive",
    "cost": "1 PP",
    "potency": 0,
    "target": "Before Ally Magically Attacked",
    "classSource": "Sainted Knight",
    "description": "Cover an ally and completely absorb incoming magic damage.",
    "flags": [
      "Cover",
      "Magic Defense"
    ]
  },
  {
    "id": "row-barrier",
    "name": "Row Barrier",
    "type": "Passive",
    "cost": "2 PP",
    "potency": 0,
    "target": "Before Row Magically Attacked",
    "classSource": "Sainted Knight",
    "description": "Nullify incoming magic area-of-effect spells for the entire squad row.",
    "flags": [
      "Row Cover",
      "Magic Nullify"
    ]
  },
  {
    "id": "rapid-order",
    "name": "Rapid Order",
    "type": "Active",
    "cost": "1 AP",
    "potency": 0,
    "target": "All Allies",
    "classSource": "Prince",
    "description": "At Start of Battle, grant all allies +15 Initiative for the battle.",
    "flags": [
      "Start of Battle",
      "Initiative Boost"
    ]
  },
  {
    "id": "offensive-order",
    "name": "Offensive Order",
    "type": "Active",
    "cost": "1 AP",
    "potency": 0,
    "target": "All Allies",
    "classSource": "Prince",
    "description": "Grant all allies +20% Physical Attack and +20% Magical Attack.",
    "flags": [
      "Buff",
      "Attack Boost"
    ]
  },
  {
    "id": "defensive-order",
    "name": "Defensive Order",
    "type": "Active",
    "cost": "1 AP",
    "potency": 0,
    "target": "All Allies",
    "classSource": "Prince",
    "description": "Grant all allies +20% Physical Defense and +20% Magical Defense.",
    "flags": [
      "Buff",
      "Defense Boost"
    ]
  },
  {
    "id": "sniping-order",
    "name": "Sniping Order",
    "type": "Passive",
    "cost": "1 PP",
    "potency": 0,
    "target": "When Ally Attacks",
    "classSource": "Prince",
    "description": "Grant 100% Truestrike to an attacking ally.",
    "flags": [
      "Buff",
      "Truestrike"
    ]
  },
  {
    "id": "guarding-order",
    "name": "Guarding Order",
    "type": "Passive",
    "cost": "1 PP",
    "potency": 0,
    "target": "When Ally Attacked",
    "classSource": "Prince",
    "description": "Increase ally Guard Rate by 50%.",
    "flags": [
      "Buff",
      "Guard Boost"
    ]
  },
  {
    "id": "eye-of-the-crimson-bear",
    "name": "Eye of the Crimson Bear",
    "type": "Active",
    "cost": "1 AP",
    "potency": 0,
    "target": "All Enemies",
    "classSource": "Renegade",
    "description": "At Start of Battle, reduce all enemies' Initiative by 15 and inflict Guard Seal.",
    "flags": [
      "Start of Battle",
      "Affliction",
      "Debuff"
    ]
  },
  {
    "id": "death-spin",
    "name": "Death Spin",
    "type": "Active",
    "cost": "2 AP",
    "potency": 150,
    "target": "Enemy Row",
    "classSource": "Renegade",
    "description": "Whirl axe across enemy row dealing +50% bonus damage to afflicted targets.",
    "flags": [
      "Physical",
      "Row",
      "Affliction Bonus"
    ]
  },
  {
    "id": "guarded-strike",
    "name": "Guarded Strike",
    "type": "Active",
    "cost": "1 AP",
    "potency": 120,
    "target": "Single Enemy",
    "classSource": "Renegade",
    "description": "Strike target and enter impenetrable defensive stance.",
    "flags": [
      "Physical",
      "Guard"
    ]
  },
  {
    "id": "sanguine-pursuit",
    "name": "Sanguine Pursuit",
    "type": "Passive",
    "cost": "1 PP",
    "potency": 0,
    "target": "After Ally Attacks Afflicted",
    "classSource": "Renegade",
    "description": "Strike afflicted enemy, dealing heavy damage and healing user for 50% damage.",
    "flags": [
      "Pursuit",
      "Life Drain"
    ]
  },
  {
    "id": "boundless-rage",
    "name": "Boundless Rage",
    "type": "Passive",
    "cost": "1 PP",
    "potency": 0,
    "target": "When Damaged",
    "classSource": "Renegade",
    "description": "Gain +1 AP and +20% Phys Atk whenever sustaining damage.",
    "flags": [
      "Self Buff",
      "AP Gain"
    ]
  },
  {
    "id": "shadowbite",
    "name": "Shadowbite",
    "type": "Active",
    "cost": "2 AP",
    "potency": 100,
    "target": "Enemy Row",
    "classSource": "Rogue",
    "description": "Strike an entire enemy row, inflicting Darkness (Blindness) and Passive Skill Seal.",
    "flags": [
      "Physical",
      "Row",
      "Blind",
      "Passive Seal"
    ]
  },
  {
    "id": "toxic-throw",
    "name": "Toxic Throw",
    "type": "Active",
    "cost": "1 AP",
    "potency": 80,
    "target": "Single Enemy",
    "classSource": "Rogue",
    "description": "Hurl a poisoned dagger inflicting Poison.",
    "flags": [
      "Physical",
      "Poison"
    ]
  },
  {
    "id": "sneak-edge",
    "name": "Sneak Edge",
    "type": "Active",
    "cost": "1 AP",
    "potency": 110,
    "target": "Single Enemy",
    "classSource": "Rogue",
    "description": "Strike from the shadows and steal 1 AP from the target.",
    "flags": [
      "Physical",
      "Steal AP"
    ]
  },
  {
    "id": "evade",
    "name": "Evade",
    "type": "Passive",
    "cost": "1 PP",
    "potency": 0,
    "target": "Before Attacked",
    "classSource": "Rogue",
    "description": "Completely nullify an incoming physical attack.",
    "flags": [
      "Nullify",
      "Evasion 100%"
    ]
  },
  {
    "id": "plunder-pp",
    "name": "Plunder PP",
    "type": "Passive",
    "cost": "1 PP",
    "potency": 0,
    "target": "After Active Action",
    "classSource": "Rogue",
    "description": "Steal 1 PP from target enemy.",
    "flags": [
      "Steal PP"
    ]
  },
  {
    "id": "enraged-strike",
    "name": "Enraged Strike",
    "type": "Active",
    "cost": "1 AP",
    "potency": 175,
    "target": "Single Enemy",
    "classSource": "Breaker",
    "description": "Crushing hammer blow that completely ignores enemy Physical Defense and cannot be guarded.",
    "flags": [
      "Physical",
      "Armor Piercing",
      "Unblockable"
    ]
  },
  {
    "id": "row-smash",
    "name": "Row Smash",
    "type": "Active",
    "cost": "2 AP",
    "potency": 150,
    "target": "Enemy Row",
    "classSource": "Breaker",
    "description": "Shatter an entire enemy row, disabling guard.",
    "flags": [
      "Physical",
      "Row",
      "Guard Break"
    ]
  },
  {
    "id": "assault-blow",
    "name": "Assault Blow",
    "type": "Active",
    "cost": "1 AP",
    "potency": 100,
    "target": "Single Enemy",
    "classSource": "Breaker",
    "description": "Heavy strike that awards +1 AP upon kill.",
    "flags": [
      "Physical",
      "AP On Kill"
    ]
  },
  {
    "id": "heavy-guard",
    "name": "Heavy Guard",
    "type": "Passive",
    "cost": "1 PP",
    "potency": 0,
    "target": "Before Attacked",
    "classSource": "Breaker",
    "description": "Brace with hammer to reduce incoming damage by 50%.",
    "flags": [
      "Guard"
    ]
  },
  {
    "id": "follow-up-hammer",
    "name": "Follow-up Hammer",
    "type": "Passive",
    "cost": "1 PP",
    "potency": 0,
    "target": "After Ally Attacks",
    "classSource": "Breaker",
    "description": "Follow up with a heavy hammer strike.",
    "flags": [
      "Pursuit"
    ]
  },
  {
    "id": "aerial-snipe",
    "name": "Aerial Snipe",
    "type": "Active",
    "cost": "2 AP",
    "potency": 150,
    "target": "Single Enemy",
    "classSource": "Shieldshooter",
    "description": "Truestrike crossbow bolt dealing 200% bonus damage against flying enemies.",
    "flags": [
      "Physical",
      "Anti-Flying",
      "Truestrike"
    ]
  },
  {
    "id": "heavy-bolt",
    "name": "Heavy Bolt",
    "type": "Active",
    "cost": "1 AP",
    "potency": 120,
    "target": "Single Enemy",
    "classSource": "Shieldshooter",
    "description": "Heavy steel quarrel piercing through armor.",
    "flags": [
      "Physical",
      "Armor Piercing"
    ]
  },
  {
    "id": "heavy-cover",
    "name": "Heavy Cover",
    "type": "Passive",
    "cost": "1 PP",
    "potency": 0,
    "target": "Before Ally Attacked",
    "classSource": "Shieldshooter",
    "description": "Cover an ally with Greatshield, negating physical and ranged damage.",
    "flags": [
      "Cover",
      "Greatshield"
    ]
  },
  {
    "id": "quick-reload",
    "name": "Quick Reload",
    "type": "Passive",
    "cost": "1 PP",
    "potency": 0,
    "target": "After Active Action",
    "classSource": "Shieldshooter",
    "description": "Reload crossbow immediately, gaining +1 AP.",
    "flags": [
      "AP Restore"
    ]
  },
  {
    "id": "wide-smash",
    "name": "Wide Smash",
    "type": "Active",
    "cost": "2 AP",
    "potency": 150,
    "target": "Enemy Row",
    "classSource": "Berserker",
    "description": "Massive sweeping axe strike across an entire enemy row, inflicting Stun.",
    "flags": [
      "Physical",
      "Row",
      "Stun"
    ]
  },
  {
    "id": "grand-smash",
    "name": "Grand Smash",
    "type": "Active",
    "cost": "3 AP",
    "potency": 200,
    "target": "All Enemies",
    "classSource": "Berserker",
    "description": "Slam ground with earth-shattering force hitting all enemies.",
    "flags": [
      "Physical",
      "All Enemies"
    ]
  },
  {
    "id": "bulk-up",
    "name": "Bulk Up",
    "type": "Passive",
    "cost": "1 PP",
    "potency": 0,
    "target": "When Damaged",
    "classSource": "Berserker",
    "description": "Restore 30% HP and increase Physical Attack by 20%.",
    "flags": [
      "Self Heal",
      "Attack Boost"
    ]
  },
  {
    "id": "toughness",
    "name": "Toughness",
    "type": "Passive",
    "cost": "1 PP",
    "potency": 0,
    "target": "Upon Lethal Damage",
    "classSource": "Berserker",
    "description": "Survive lethal strike with 1 HP.",
    "flags": [
      "Survive"
    ]
  },
  {
    "id": "shield-bash",
    "name": "Shield Bash",
    "type": "Active",
    "cost": "1 AP",
    "potency": 100,
    "target": "Single Enemy",
    "classSource": "Vanguard",
    "description": "Strike target with shield and inflict Stun.",
    "flags": [
      "Physical",
      "Stun"
    ]
  },
  {
    "id": "defensive-slash",
    "name": "Defensive Slash",
    "type": "Active",
    "cost": "1 AP",
    "potency": 110,
    "target": "Single Enemy",
    "classSource": "Vanguard",
    "description": "Slash enemy and increase own Guard Rate by 30%.",
    "flags": [
      "Physical",
      "Guard Boost"
    ]
  },
  {
    "id": "arrow-cover",
    "name": "Arrow Cover",
    "type": "Passive",
    "cost": "1 PP",
    "potency": 0,
    "target": "When Ally Targeted by Ranged",
    "classSource": "Vanguard",
    "description": "Cover an ally and completely nullify incoming ranged projectile damage.",
    "flags": [
      "Cover",
      "Ranged Nullify"
    ]
  },
  {
    "id": "quick-guard",
    "name": "Quick Guard",
    "type": "Passive",
    "cost": "1 PP",
    "potency": 0,
    "target": "Before Attacked",
    "classSource": "Vanguard",
    "description": "Raise shield to block incoming physical attacks.",
    "flags": [
      "Guard"
    ]
  },
  {
    "id": "aerial-snipe",
    "name": "Aerial Snipe",
    "type": "Active",
    "cost": "2 AP",
    "potency": 160,
    "target": "Single Enemy",
    "classSource": "Sniper",
    "description": "Truestrike arrow dealing 200% bonus damage against flying targets.",
    "flags": [
      "Physical",
      "Anti-Flying",
      "Truestrike"
    ]
  },
  {
    "id": "dual-shot",
    "name": "Dual Shot",
    "type": "Active",
    "cost": "1 AP",
    "potency": 110,
    "target": "Enemy Column",
    "classSource": "Sniper",
    "description": "Loose two arrows simultaneously piercing an enemy column.",
    "flags": [
      "Physical",
      "Column"
    ]
  },
  {
    "id": "arrow-rain",
    "name": "Arrow Rain",
    "type": "Active",
    "cost": "3 AP",
    "potency": 180,
    "target": "All Enemies",
    "classSource": "Sniper",
    "description": "Rain arrows on the entire battlefield.",
    "flags": [
      "Physical",
      "All Enemies",
      "Charge"
    ]
  },
  {
    "id": "eagle-eye",
    "name": "Eagle Eye",
    "type": "Passive",
    "cost": "1 PP",
    "potency": 0,
    "target": "Before Active Action",
    "classSource": "Sniper",
    "description": "Grant 100% Truestrike and 100% Critical Hit on the next arrow.",
    "flags": [
      "Truestrike",
      "Guaranteed Crit"
    ]
  },
  {
    "id": "pursuit-arrow",
    "name": "Pursuit Arrow",
    "type": "Passive",
    "cost": "1 PP",
    "potency": 0,
    "target": "After Ally Attacks",
    "classSource": "Sniper",
    "description": "Follow up an ally's attack with a rapid arrow strike.",
    "flags": [
      "Pursuit"
    ]
  },
  {
    "id": "night-vision",
    "name": "Night Vision",
    "type": "Active",
    "cost": "1 AP",
    "potency": 0,
    "target": "All Allies",
    "classSource": "Wereowl",
    "description": "Grant all allies +30% Accuracy and Truestrike capabilities.",
    "flags": [
      "Buff",
      "Accuracy Boost",
      "Truestrike"
    ]
  },
  {
    "id": "restore",
    "name": "Restore",
    "type": "Active",
    "cost": "1 AP",
    "potency": 100,
    "target": "Single Ally",
    "classSource": "Wereowl",
    "description": "Heal target ally's HP and restore +1 PP.",
    "flags": [
      "Healing",
      "PP Restore"
    ]
  },
  {
    "id": "owl-eyes",
    "name": "Owl Eyes",
    "type": "Passive",
    "cost": "1 PP",
    "potency": 0,
    "target": "When Ally Uses PP",
    "classSource": "Wereowl",
    "description": "Immediately replenish +1 PP to an ally that just consumed PP.",
    "flags": [
      "PP Battery"
    ]
  },
  {
    "id": "quick-dispel",
    "name": "Quick Dispel",
    "type": "Passive",
    "cost": "1 PP",
    "potency": 0,
    "target": "When Enemy Buffs",
    "classSource": "Wereowl",
    "description": "Strip all positive status buffs from an enemy unit.",
    "flags": [
      "Dispel"
    ]
  },
  {
    "id": "icicle-arrow",
    "name": "Icicle Arrow",
    "type": "Active",
    "cost": "1 AP",
    "potency": 100,
    "target": "Single Enemy",
    "classSource": "Elven Archer",
    "description": "Shoot an enchanted frost arrow that inflicts Freeze.",
    "flags": [
      "Magical",
      "Freeze"
    ]
  },
  {
    "id": "mystic-arrow",
    "name": "Mystic Arrow",
    "type": "Active",
    "cost": "2 AP",
    "potency": 140,
    "target": "Enemy Column",
    "classSource": "Elven Archer",
    "description": "Column-piercing enchanted arrow dealing hybrid physical and magic damage.",
    "flags": [
      "Hybrid",
      "Column"
    ]
  },
  {
    "id": "pure-light",
    "name": "Pure Light",
    "type": "Passive",
    "cost": "1 PP",
    "potency": 0,
    "target": "Start of Battle",
    "classSource": "Elven Archer",
    "description": "At Start of Battle, cleanse all debuffs and grant affliction immunity to the row.",
    "flags": [
      "Start of Battle",
      "Row Debuff Cleanse",
      "Immunity"
    ]
  },
  {
    "id": "selfless-heal",
    "name": "Selfless Heal",
    "type": "Passive",
    "cost": "1 PP",
    "potency": 0,
    "target": "After Acting",
    "classSource": "Elven Archer",
    "description": "Heal the lowest HP ally for 50% Mag Atk after executing an action.",
    "flags": [
      "Row Heal"
    ]
  },
  {
    "id": "lightning-sword",
    "name": "Lightning Sword",
    "type": "Active",
    "cost": "1 AP",
    "potency": 120,
    "target": "Single Enemy",
    "classSource": "Elven Fencer",
    "description": "Strike target with thunderous sword slash, dealing hybrid damage and inflicting Stun.",
    "flags": [
      "Hybrid",
      "Stun"
    ]
  },
  {
    "id": "mirage-edge",
    "name": "Mirage Edge",
    "type": "Active",
    "cost": "1 AP",
    "potency": 100,
    "target": "Single Enemy",
    "classSource": "Elven Fencer",
    "description": "Strike enemy and increase own Evasion by 30.",
    "flags": [
      "Physical",
      "Evasion Boost"
    ]
  },
  {
    "id": "remove-weakness",
    "name": "Remove Weakness",
    "type": "Passive",
    "cost": "1 PP",
    "potency": 0,
    "target": "When Ally Debuffed",
    "classSource": "Elven Fencer",
    "description": "Cleanse debuffs from an ally and grant them +20% Phys Atk.",
    "flags": [
      "Cleanse",
      "Buff"
    ]
  },
  {
    "id": "evade",
    "name": "Evade",
    "type": "Passive",
    "cost": "1 PP",
    "potency": 0,
    "target": "Before Attacked",
    "classSource": "Elven Fencer",
    "description": "Nullify an incoming physical attack.",
    "flags": [
      "Nullify"
    ]
  },
  {
    "id": "elemental-roar",
    "name": "Elemental Roar",
    "type": "Active",
    "cost": "3 AP",
    "potency": 250,
    "target": "All Enemies",
    "classSource": "Elven Sibyl",
    "description": "Summon all gathered Faeries to unleash a cataclysmic all-enemy magical nuke.",
    "flags": [
      "Magical",
      "All Enemies",
      "Faerie Nuke"
    ]
  },
  {
    "id": "primus-javelin",
    "name": "Primus Javelin",
    "type": "Active",
    "cost": "1 AP",
    "potency": 110,
    "target": "Single Enemy",
    "classSource": "Elven Sibyl",
    "description": "Strike with enchanted spear, generating 1 Faerie.",
    "flags": [
      "Hybrid",
      "Faerie Gain"
    ]
  },
  {
    "id": "boon-of-the-faeries",
    "name": "Boon of the Faeries",
    "type": "Passive",
    "cost": "1 PP",
    "potency": 0,
    "target": "Start of Battle",
    "classSource": "Elven Sibyl",
    "description": "At Start of Battle, grant all squad allies continuous HP regeneration and debuff immunity.",
    "flags": [
      "Start of Battle",
      "Squad Heal",
      "Debuff Immunity"
    ]
  },
  {
    "id": "faerie-blessing",
    "name": "Faerie Blessing",
    "type": "Passive",
    "cost": "1 PP",
    "potency": 0,
    "target": "Start of Turn",
    "classSource": "Elven Sibyl",
    "description": "Gain +1 Faerie and +1 AP.",
    "flags": [
      "Faerie Gain",
      "AP Boost"
    ]
  },
  {
    "id": "elemental-roar",
    "name": "Elemental Roar",
    "type": "Active",
    "cost": "3 AP",
    "potency": 250,
    "target": "All Enemies",
    "classSource": "Elven Augur",
    "description": "Summon gathered Faeries to devastate the entire enemy field.",
    "flags": [
      "Magical",
      "All Enemies",
      "Faerie Nuke"
    ]
  },
  {
    "id": "primus-javelin",
    "name": "Primus Javelin",
    "type": "Active",
    "cost": "1 AP",
    "potency": 110,
    "target": "Single Enemy",
    "classSource": "Elven Augur",
    "description": "Strike with enchanted spear, generating 1 Faerie.",
    "flags": [
      "Hybrid",
      "Faerie Gain"
    ]
  },
  {
    "id": "rage-of-the-faeries",
    "name": "Rage of the Faeries",
    "type": "Passive",
    "cost": "1 PP",
    "potency": 0,
    "target": "Start of Battle",
    "classSource": "Elven Augur",
    "description": "At Start of Battle, unleash Faerie fury inflicting Stun on the entire enemy front row.",
    "flags": [
      "Start of Battle",
      "Row Stun"
    ]
  },
  {
    "id": "faerie-blessing",
    "name": "Faerie Blessing",
    "type": "Passive",
    "cost": "1 PP",
    "potency": 0,
    "target": "Start of Turn",
    "classSource": "Elven Augur",
    "description": "Gain +1 Faerie.",
    "flags": [
      "Faerie Gain"
    ]
  },
  {
    "id": "penetrate",
    "name": "Penetrate",
    "type": "Active",
    "cost": "1 AP",
    "potency": 150,
    "target": "Enemy Column",
    "classSource": "Dreadnought",
    "description": "Devastating greatsword thrust piercing through an entire column and ignoring 50% defense.",
    "flags": [
      "Physical",
      "Column",
      "Armor Piercing"
    ]
  },
  {
    "id": "hawk-eye-strike",
    "name": "Hawk Eye Strike",
    "type": "Active",
    "cost": "2 AP",
    "potency": 220,
    "target": "Single Enemy",
    "classSource": "Dreadnought",
    "description": "Unblockable massive overhead cleave with 100% Truestrike and 100% Critical Hit.",
    "flags": [
      "Physical",
      "Truestrike",
      "Guaranteed Crit",
      "Unblockable"
    ]
  },
  {
    "id": "infinity-guard",
    "name": "Infinity Guard",
    "type": "Active",
    "cost": "1 AP",
    "potency": 0,
    "target": "Self",
    "classSource": "Dreadnought",
    "description": "Enter fortress stance, guaranteeing heavy guard on all hits.",
    "flags": [
      "Self Buff",
      "Guard 100%"
    ]
  },
  {
    "id": "omega-counter",
    "name": "Omega Counter",
    "type": "Passive",
    "cost": "1 PP",
    "potency": 0,
    "target": "When Attacked",
    "classSource": "Dreadnought",
    "description": "Counterattack with colossal force, dealing 150% physical damage to the attacker.",
    "flags": [
      "Counter",
      "Devastating Retaliation"
    ]
  },
  {
    "id": "heavy-guard",
    "name": "Heavy Guard",
    "type": "Passive",
    "cost": "1 PP",
    "potency": 0,
    "target": "Before Attacked",
    "classSource": "Dreadnought",
    "description": "Block incoming physical strikes with greatshield.",
    "flags": [
      "Heavy Guard"
    ]
  },
  {
    "id": "indomitable-guard",
    "name": "Indomitable Guard",
    "type": "Active",
    "cost": "1 AP",
    "potency": 0,
    "target": "Self",
    "classSource": "Werebear",
    "description": "Enter towering defensive stance, reducing incoming damage by 75%.",
    "flags": [
      "Self Buff",
      "Heavy Guard"
    ]
  },
  {
    "id": "bear-hug",
    "name": "Bear Hug",
    "type": "Active",
    "cost": "2 AP",
    "potency": 160,
    "target": "Single Enemy",
    "classSource": "Werebear",
    "description": "Crush enemy with immense bestial strength, inflicting Stun.",
    "flags": [
      "Physical",
      "Stun"
    ]
  },
  {
    "id": "row-cover",
    "name": "Row Cover",
    "type": "Passive",
    "cost": "2 PP",
    "potency": 0,
    "target": "Before Row Attacked",
    "classSource": "Werebear",
    "description": "Shield the entire squad row behind massive bulk.",
    "flags": [
      "Row Cover"
    ]
  },
  {
    "id": "bestial-vigor",
    "name": "Bestial Vigor",
    "type": "Passive",
    "cost": "1 PP",
    "potency": 0,
    "target": "When Damaged",
    "classSource": "Werebear",
    "description": "Restore 20% max HP whenever sustaining damage.",
    "flags": [
      "Self Heal"
    ]
  },
  {
    "id": "wild-fang",
    "name": "Wild Fang",
    "type": "Active",
    "cost": "1 AP",
    "potency": 120,
    "target": "Single Enemy",
    "classSource": "Werewolf",
    "description": "Vicious bite dealing +50% damage to afflicted enemies.",
    "flags": [
      "Physical",
      "Affliction Bonus"
    ]
  },
  {
    "id": "shadow-slash",
    "name": "Shadow Slash",
    "type": "Active",
    "cost": "1 AP",
    "potency": 130,
    "target": "Single Enemy",
    "classSource": "Werewolf",
    "description": "Swift predatory slash with enhanced critical chance.",
    "flags": [
      "Physical",
      "Critical"
    ]
  },
  {
    "id": "killing-bite",
    "name": "Killing Bite",
    "type": "Active",
    "cost": "2 AP",
    "potency": 180,
    "target": "Single Enemy",
    "classSource": "Werewolf",
    "description": "Lethal throat strike that restores +2 AP upon defeating the foe.",
    "flags": [
      "Physical",
      "AP On Kill"
    ]
  },
  {
    "id": "wolfpack-roar",
    "name": "Wolfpack Roar",
    "type": "Passive",
    "cost": "1 PP",
    "potency": 0,
    "target": "Start of Battle",
    "classSource": "Werewolf",
    "description": "At Start of Battle, grant all Bestial allies +20% Physical Attack and +20% Critical Rate.",
    "flags": [
      "Start of Battle",
      "Bestial Buff"
    ]
  },
  {
    "id": "chasing-slash",
    "name": "Chasing Slash",
    "type": "Passive",
    "cost": "1 PP",
    "potency": 0,
    "target": "After Ally Attacks",
    "classSource": "Werewolf",
    "description": "Execute a pursuit attack immediately after a packmate strikes.",
    "flags": [
      "Pursuit",
      "Chain Attack"
    ]
  },
  {
    "id": "shining-arrow",
    "name": "Shining Arrow",
    "type": "Active",
    "cost": "1 AP",
    "potency": 100,
    "target": "Enemy Front Row",
    "classSource": "Featherbow",
    "description": "At Start of Battle, loose celestial arrows blinding the enemy front row and reducing their Initiative by 15.",
    "flags": [
      "Start of Battle",
      "Blind",
      "Initiative Down"
    ]
  },
  {
    "id": "photon-arrow",
    "name": "Photon Arrow",
    "type": "Active",
    "cost": "1 AP",
    "potency": 110,
    "target": "Single Enemy",
    "classSource": "Featherbow",
    "description": "Truestrike radiant magic arrow that cannot be evaded.",
    "flags": [
      "Magical",
      "Truestrike"
    ]
  },
  {
    "id": "dazzling-glare",
    "name": "Dazzling Glare",
    "type": "Passive",
    "cost": "1 PP",
    "potency": 0,
    "target": "When Enemy Attacks",
    "classSource": "Featherbow",
    "description": "Blind target attacker, reducing their Accuracy by 50%.",
    "flags": [
      "Debuff",
      "Accuracy Down"
    ]
  },
  {
    "id": "tailwind",
    "name": "Tailwind",
    "type": "Passive",
    "cost": "1 PP",
    "potency": 0,
    "target": "Passive",
    "classSource": "Featherbow",
    "description": "Boost Initiative of all flying squadmates.",
    "flags": [
      "Speed Buff"
    ]
  },
  {
    "id": "spiral-sword",
    "name": "Spiral Sword",
    "type": "Active",
    "cost": "1 AP",
    "potency": 130,
    "target": "Single Enemy",
    "classSource": "Feathersword",
    "description": "Spiraling aerial plunge that ignores enemy guard.",
    "flags": [
      "Physical",
      "Anti-Ground",
      "Guard Pierce"
    ]
  },
  {
    "id": "accelerating-blade",
    "name": "Accelerating Blade",
    "type": "Active",
    "cost": "1 AP",
    "potency": 110,
    "target": "Single Enemy",
    "classSource": "Feathersword",
    "description": "Strike target and gain +10 Initiative.",
    "flags": [
      "Physical",
      "Speed Gain"
    ]
  },
  {
    "id": "discharge",
    "name": "Discharge",
    "type": "Passive",
    "cost": "1 PP",
    "potency": 0,
    "target": "Before Active Action",
    "classSource": "Feathersword",
    "description": "Convert all active stat buffs into raw physical attack power.",
    "flags": [
      "Buff Conversion",
      "Massive Attack"
    ]
  },
  {
    "id": "honorable-guard",
    "name": "Honorable Guard",
    "type": "Passive",
    "cost": "1 PP",
    "potency": 0,
    "target": "Before Attacked",
    "classSource": "Feathersword",
    "description": "Evade incoming ground strikes effortlessly.",
    "flags": [
      "Evasion",
      "Guard"
    ]
  },
  {
    "id": "holy-breath",
    "name": "Holy Breath",
    "type": "Active",
    "cost": "1 AP",
    "potency": 120,
    "target": "All Allies",
    "classSource": "Featherstaff",
    "description": "Breathe radiant light across all allies, restoring HP and cleansing debuffs.",
    "flags": [
      "Healing",
      "All Allies",
      "Cleanse"
    ]
  },
  {
    "id": "divine-grace",
    "name": "Divine Grace",
    "type": "Active",
    "cost": "2 AP",
    "potency": 150,
    "target": "Ally Row",
    "classSource": "Featherstaff",
    "description": "Revive and fully restore a fallen squad row.",
    "flags": [
      "Revive",
      "Full Row"
    ]
  },
  {
    "id": "sacred-barrier",
    "name": "Sacred Barrier",
    "type": "Passive",
    "cost": "1 PP",
    "potency": 0,
    "target": "Start of Battle",
    "classSource": "Featherstaff",
    "description": "At Start of Battle, grant all allies a barrier absorbing 2 hits of damage.",
    "flags": [
      "Start of Battle",
      "Barrier"
    ]
  },
  {
    "id": "angelic-ward",
    "name": "Angelic Ward",
    "type": "Passive",
    "cost": "1 PP",
    "potency": 0,
    "target": "When Ally Attacked",
    "classSource": "Featherstaff",
    "description": "Shield ally with angel wings, taking 0 damage.",
    "flags": [
      "Cover"
    ]
  },
  {
    "id": "dark-flame",
    "name": "Dark Flame",
    "type": "Active",
    "cost": "2 AP",
    "potency": 160,
    "target": "Enemy Row",
    "classSource": "Doom Knight",
    "description": "Unleash demonic flames across an entire enemy row, inflicting Burn and dealing massive bonus damage when wounded.",
    "flags": [
      "Hybrid",
      "Row",
      "Burn",
      "Low HP Scaling"
    ]
  },
  {
    "id": "vengeful-slash",
    "name": "Vengeful Slash",
    "type": "Active",
    "cost": "1 AP",
    "potency": 130,
    "target": "Single Enemy",
    "classSource": "Doom Knight",
    "description": "Heavy slash that scales exponentially with lost HP.",
    "flags": [
      "Physical",
      "Low HP Scaling"
    ]
  },
  {
    "id": "vengeance",
    "name": "Vengeance",
    "type": "Passive",
    "cost": "1 PP",
    "potency": 0,
    "target": "When Damaged",
    "classSource": "Doom Knight",
    "description": "Gain +25% Physical Attack and +1 PP whenever taking damage.",
    "flags": [
      "Attack Boost",
      "PP Gain"
    ]
  },
  {
    "id": "demonic-drive",
    "name": "Demonic Drive",
    "type": "Passive",
    "cost": "1 PP",
    "potency": 0,
    "target": "Start of Battle",
    "classSource": "Doom Knight",
    "description": "Sacrifice 20% HP to gain +30% Physical Attack and +30% Magical Attack.",
    "flags": [
      "Start of Battle",
      "Self Buff"
    ]
  },
  {
    "id": "bastard-slash",
    "name": "Bastard Slash",
    "type": "Active",
    "cost": "1 AP",
    "potency": 130,
    "target": "Single Enemy",
    "classSource": "Landsknecht",
    "description": "Heavy two-handed sword strike piercing armor.",
    "flags": [
      "Physical",
      "Armor Piercing"
    ]
  },
  {
    "id": "heavy-slash",
    "name": "Heavy Slash",
    "type": "Active",
    "cost": "1 AP",
    "potency": 110,
    "target": "Single Enemy",
    "classSource": "Landsknecht",
    "description": "Basic heavy physical cut.",
    "flags": [
      "Physical"
    ]
  },
  {
    "id": "following-slash",
    "name": "Following Slash",
    "type": "Passive",
    "cost": "1 PP",
    "potency": 0,
    "target": "After Ally Attacks",
    "classSource": "Landsknecht",
    "description": "Execute a pursuit sword attack whenever any ally damages an enemy.",
    "flags": [
      "Pursuit",
      "Unlimited Chains"
    ]
  },
  {
    "id": "bullseye",
    "name": "Bullseye",
    "type": "Passive",
    "cost": "1 PP",
    "potency": 0,
    "target": "Before Active Action",
    "classSource": "Landsknecht",
    "description": "Grant 100% Truestrike to the next attack.",
    "flags": [
      "Truestrike"
    ]
  },
  {
    "id": "trinity-rain",
    "name": "Trinity Rain",
    "type": "Active",
    "cost": "3 AP",
    "potency": 300,
    "target": "All Enemies",
    "classSource": "Item (Millenium Scepter)",
    "description": "Charge a supreme 3-hit radiant magical rain storm striking all combatants.",
    "flags": [
      "Magical",
      "Charge",
      "All Enemies",
      "Nuke"
    ]
  }
];
