import { RelicItem } from '@/types';

export const ITEMS_DATA: RelicItem[] = [
  {
    "id": "adept-s-shortspear",
    "name": "Adept's Shortspear",
    "type": "Weapon",
    "icon": "🗡️",
    "statBoosts": "Phys Atk +21, Passive Seal Immunity, Critical Rate +15%",
    "acquisition": "Armorer / World Quest / Treasure",
    "isMetaCore": false,
    "metaSquads": []
  },
  {
    "id": "alminster",
    "name": "Alminster",
    "type": "Weapon",
    "icon": "⚔️",
    "statBoosts": "Phys Atk +25, Checkmate, Accuracy +30",
    "acquisition": "Can be obtained for ??? CC (Coliseum Coins) at the Coliseum Prize Exchange.",
    "isMetaCore": false,
    "grantedSkill": {
      "name": "Checkmate",
      "cost": "1 AP",
      "description": "Attack a single enemy.Inflicts Passive Seal.+100 potency if the target's HP is 50% or less."
    },
    "metaSquads": []
  },
  {
    "id": "apeliotes-s-bow",
    "name": "Apeliotes's Bow",
    "type": "Weapon",
    "icon": "🏹",
    "statBoosts": "Phys Atk +25, Base AP +1, Initiative +10, Evasion +10",
    "acquisition": "Head directly east of Nestascheft Town to find this monument.",
    "isMetaCore": false,
    "metaSquads": []
  },
  {
    "id": "astral-pike",
    "name": "Astral Pike",
    "type": "Weapon",
    "icon": "🗡️",
    "statBoosts": "Phys Atk +15",
    "acquisition": "Armorer / World Quest / Treasure",
    "isMetaCore": false,
    "metaSquads": []
  },
  {
    "id": "bandit-longsword",
    "name": "Bandit Longsword",
    "type": "Weapon",
    "icon": "⚔️",
    "statBoosts": "Phys Atk +18, Initiative +3, Evasion +10, User's Unit Earns +100% Gold",
    "acquisition": "Complete the Quest:\"The Battle for Adopti\".",
    "isMetaCore": false,
    "metaSquads": []
  },
  {
    "id": "bandit-s-handaxe",
    "name": "Bandit's Handaxe",
    "type": "Weapon",
    "icon": "🪓",
    "statBoosts": "Phys Atk +16, User's Unit Earns +100% Gold, Evasion +10",
    "acquisition": "Can be obtained for 5000 G at the Black Market Dealer Shop (Elheim).",
    "isMetaCore": false,
    "metaSquads": []
  },
  {
    "id": "banishing-hammer",
    "name": "Banishing Hammer",
    "type": "Weapon",
    "icon": "🪓",
    "statBoosts": "Phys Atk +21, Banishing Smite",
    "acquisition": "Can be obtained for 12000 G at the Proszruni Town Armorer Shop.",
    "isMetaCore": false,
    "grantedSkill": {
      "name": "Banishing Smite",
      "cost": "1 AP",
      "description": "Attack a row of enemies.Removes all of target's buffs."
    },
    "metaSquads": []
  },
  {
    "id": "barbarian-s-axe",
    "name": "Barbarian's Axe",
    "type": "Weapon",
    "icon": "🪓",
    "statBoosts": "Phys Atk +13, Provoking Slash",
    "acquisition": "Armorer / World Quest / Treasure",
    "isMetaCore": false,
    "grantedSkill": {
      "name": "Provoking Slash",
      "cost": "1 AP",
      "description": "Attack a single enemy.Forces the target to focus attacks on the user."
    },
    "metaSquads": []
  },
  {
    "id": "barbarian-s-might",
    "name": "Barbarian's Might",
    "type": "Weapon",
    "icon": "⚔️",
    "statBoosts": "Phys Atk +14, Provoking Slash, Max HP +5",
    "acquisition": "Can be obtained for 3000 G at few Armorer Shops.",
    "isMetaCore": false,
    "grantedSkill": {
      "name": "Provoking Slash",
      "cost": "1 AP",
      "description": "Attack a single enemy.Forces the target to focus attacks on the user."
    },
    "metaSquads": []
  },
  {
    "id": "baroque-axe",
    "name": "Baroque Axe",
    "type": "Weapon",
    "icon": "🪓",
    "statBoosts": "Phys Atk +13, Accuracy +5",
    "acquisition": "Can be obtained for 2000 G at various Armorer Shops.",
    "isMetaCore": false,
    "metaSquads": []
  },
  {
    "id": "baroque-bow",
    "name": "Baroque Bow",
    "type": "Weapon",
    "icon": "🏹",
    "statBoosts": "Phys Atk +13, Accuracy +5",
    "acquisition": "Can be obtained for 2000 G at Armorer Shops (full list below).",
    "isMetaCore": false,
    "metaSquads": []
  },
  {
    "id": "baroque-rod",
    "name": "Baroque Rod",
    "type": "Weapon",
    "icon": "🪄",
    "statBoosts": "Mag Atk +13, Accuracy +5",
    "acquisition": "Reward for completing level 5 quest The Self-Effacing Sorcerer.",
    "isMetaCore": false,
    "metaSquads": []
  },
  {
    "id": "baroque-spear",
    "name": "Baroque Spear",
    "type": "Weapon",
    "icon": "🗡️",
    "statBoosts": "Phys Atk +13, Accuracy +5",
    "acquisition": "Can be obtained for 2000 G at Armorer Shops (full list below).",
    "isMetaCore": false,
    "metaSquads": []
  },
  {
    "id": "baroque-sword",
    "name": "Baroque Sword",
    "type": "Weapon",
    "icon": "⚔️",
    "statBoosts": "Phys Atk +13, Accuracy +5",
    "acquisition": "Reward for completing level 6 quest The Mercenary's Trial.",
    "isMetaCore": false,
    "metaSquads": []
  },
  {
    "id": "berserker-s-battleaxe",
    "name": "Berserker's Battleaxe",
    "type": "Weapon",
    "icon": "🪓",
    "statBoosts": "Phys Atk +10, Demolition",
    "acquisition": "Armorer / World Quest / Treasure",
    "isMetaCore": false,
    "grantedSkill": {
      "name": "Demolition",
      "cost": "1 AP",
      "description": "Attack a single enemy.User takes 50% of damage dealt."
    },
    "metaSquads": []
  },
  {
    "id": "black-axe-of-the-abyss",
    "name": "Black Axe of the Abyss",
    "type": "Weapon",
    "icon": "🪓",
    "statBoosts": "Phys Atk +13, Accuracy +5, Take +50% Less Poison Damage, Base AP +2, Accuracy +10, Take +70% Less Poison Damage",
    "acquisition": "Armorer / World Quest / Treasure",
    "isMetaCore": false,
    "metaSquads": []
  },
  {
    "id": "black-iron-axe",
    "name": "Black-Iron Axe",
    "type": "Weapon",
    "icon": "🪓",
    "statBoosts": "Phys Atk +17, Critical Rate +5%",
    "acquisition": "Can be obtained for 3000 G at various Armorer Shops (some of them below).",
    "isMetaCore": false,
    "metaSquads": []
  },
  {
    "id": "black-iron-bow",
    "name": "Black-Iron Bow",
    "type": "Weapon",
    "icon": "🏹",
    "statBoosts": "Phys Atk +17, Critical Rate +5%",
    "acquisition": "Can be obtained for 3000 G at various Armorer Shops (some of them below).",
    "isMetaCore": false,
    "metaSquads": []
  },
  {
    "id": "black-iron-spear",
    "name": "Black-Iron Spear",
    "type": "Weapon",
    "icon": "🗡️",
    "statBoosts": "Phys Atk +17, Critical Rate +5%",
    "acquisition": "Can be obtained for 3000 G at various Armorer Shops (some of them below).",
    "isMetaCore": false,
    "metaSquads": []
  },
  {
    "id": "black-iron-staff",
    "name": "Black-Iron Staff",
    "type": "Weapon",
    "icon": "🪄",
    "statBoosts": "Mag Atk +17, Critical Rate +5%",
    "acquisition": "Can be obtained for 3000 G at various Armorer Shops (some of them below).",
    "isMetaCore": false,
    "metaSquads": []
  },
  {
    "id": "black-iron-sword",
    "name": "Black-Iron Sword",
    "type": "Weapon",
    "icon": "⚔️",
    "statBoosts": "Phys Atk +17, Critical Rate +5%",
    "acquisition": "Can be obtained for 3000 G at various Armorer Shops (some of them below).",
    "isMetaCore": false,
    "metaSquads": []
  },
  {
    "id": "bloodmoon-rod",
    "name": "Bloodmoon Rod",
    "type": "Weapon",
    "icon": "🪄",
    "statBoosts": "Mag Atk +18, Sanguine Darts",
    "acquisition": "Armorer / World Quest / Treasure",
    "isMetaCore": false,
    "grantedSkill": {
      "name": "Sanguine Darts",
      "cost": "1 AP",
      "description": "Attack a column of enemies with piercing magick.Recover HP equal to 50% of damage dealt."
    },
    "metaSquads": []
  },
  {
    "id": "bloody-spear",
    "name": "Bloody Spear",
    "type": "Weapon",
    "icon": "🗡️",
    "statBoosts": "Phys Atk +16, Sanguine Attack",
    "acquisition": "Can be obtained for 15000 G at the Yaniss Town Armorer Shop",
    "isMetaCore": false,
    "grantedSkill": {
      "name": "Sanguine Attack",
      "cost": "1 AP",
      "description": "Attack a single enemy.Recover HP equal to 50% of damage dealt."
    },
    "metaSquads": []
  },
  {
    "id": "blue-rose",
    "name": "Blue Rose",
    "type": "Weapon",
    "icon": "⚔️",
    "statBoosts": "Phys Atk +20, Icestorm, Base PP +1, Critical Damage +15%",
    "acquisition": "Armorer / World Quest / Treasure",
    "isMetaCore": false,
    "grantedSkill": {
      "name": "Icestorm",
      "cost": "1 AP",
      "description": "Attack a single enemy.Inflicts Freeze.+50 potency v. burning targets."
    },
    "metaSquads": []
  },
  {
    "id": "boreas-s-axe",
    "name": "Boreas's Axe",
    "type": "Weapon",
    "icon": "🪓",
    "statBoosts": "Phys Atk +25, Base AP +1, Initiative +10, Evasion +10",
    "acquisition": "At Nibessamost Harbor, board the ship to set sail for the secluded shore.",
    "isMetaCore": false,
    "metaSquads": []
  },
  {
    "id": "bow-of-swiftness",
    "name": "Bow of Swiftness",
    "type": "Weapon",
    "icon": "🏹",
    "statBoosts": "Phys Atk +16, Rapid Shot",
    "acquisition": "Can be obtained for 10000 G at few Armorer Shops.",
    "isMetaCore": false,
    "grantedSkill": {
      "name": "Rapid Shot",
      "cost": "1 PP",
      "description": "Activates at the start of a battle.Attack a single enemy with a first strike.Inflicts Stun."
    },
    "metaSquads": []
  },
  {
    "id": "bronze-axe",
    "name": "Bronze Axe",
    "type": "Weapon",
    "icon": "🪓",
    "statBoosts": "Phys Atk +8",
    "acquisition": "Starting Equipment of Bruno, and some other characters.",
    "isMetaCore": false,
    "metaSquads": []
  },
  {
    "id": "bronze-bow",
    "name": "Bronze Bow",
    "type": "Weapon",
    "icon": "🏹",
    "statBoosts": "Phys Atk +8",
    "acquisition": "Starting Equipment of Rolf and some other characters.",
    "isMetaCore": false,
    "metaSquads": []
  },
  {
    "id": "bronze-spear",
    "name": "Bronze Spear",
    "type": "Weapon",
    "icon": "🗡️",
    "statBoosts": "Phys Atk +8",
    "acquisition": "Starting Equipment of Chloe, Hodrick, Clive, Adel and some other characters.",
    "isMetaCore": false,
    "metaSquads": []
  },
  {
    "id": "bronze-staff",
    "name": "Bronze Staff",
    "type": "Weapon",
    "icon": "🪄",
    "statBoosts": "Mag Atk +8",
    "acquisition": "Starting Equipment of Scarlett, Sharon, Auch, Selvie and some other characters.",
    "isMetaCore": false,
    "metaSquads": []
  },
  {
    "id": "bronze-sword",
    "name": "Bronze Sword",
    "type": "Weapon",
    "icon": "⚔️",
    "statBoosts": "Phys Atk +8",
    "acquisition": "Starting Equipment of Alain, Lex, Travis, Berenice, and some other characters.",
    "isMetaCore": false,
    "metaSquads": []
  },
  {
    "id": "canyon-lance",
    "name": "Canyon Lance",
    "type": "Weapon",
    "icon": "🗡️",
    "statBoosts": "Phys Atk +21, Shattering Pursuit",
    "acquisition": "Can be obtained at Nibessamost Harbor for ??? G.",
    "isMetaCore": false,
    "grantedSkill": {
      "name": "Shattering Pursuit",
      "cost": "1 PP",
      "description": "Activates after an ally attacks (Active).Follow-up attack a column of enemies witha piercing strike. Inflicts Phys. Defense -25%."
    },
    "metaSquads": []
  },
  {
    "id": "cardinal-s-mace",
    "name": "Cardinal's Mace",
    "type": "Weapon",
    "icon": "🪄",
    "statBoosts": "Mag Atk +20, Holy Cradle",
    "acquisition": "Armorer / World Quest / Treasure",
    "isMetaCore": false,
    "grantedSkill": {
      "name": "Holy Cradle",
      "cost": "1 AP",
      "description": "Grants a row of allies the abilityto withstand one lethal blow."
    },
    "metaSquads": []
  },
  {
    "id": "carnat-axe",
    "name": "Carnat Axe",
    "type": "Weapon",
    "icon": "🪓",
    "statBoosts": "Phys Atk +19, Initiative +2",
    "acquisition": "Can be obtained for 4000 G at various Armorer Shops (some of them below).",
    "isMetaCore": false,
    "metaSquads": []
  },
  {
    "id": "carnat-bow",
    "name": "Carnat Bow",
    "type": "Weapon",
    "icon": "🏹",
    "statBoosts": "Phys Atk +19, Initiative +2",
    "acquisition": "Can be obtained for 4000 G at various Armorer Shops (some of them below).",
    "isMetaCore": false,
    "metaSquads": []
  },
  {
    "id": "carnat-rod",
    "name": "Carnat Rod",
    "type": "Weapon",
    "icon": "🪄",
    "statBoosts": "Mag Atk +19, Initiative +2",
    "acquisition": "Can be obtained for 4000 G at various Armorer Shops (some of them below).",
    "isMetaCore": false,
    "metaSquads": []
  },
  {
    "id": "carnat-spear",
    "name": "Carnat Spear",
    "type": "Weapon",
    "icon": "🗡️",
    "statBoosts": "Phys Atk +19, Initiative +2",
    "acquisition": "Can be obtained for 4000 G at various Armorer Shops (some of them below).",
    "isMetaCore": false,
    "metaSquads": []
  },
  {
    "id": "carnat-sword",
    "name": "Carnat Sword",
    "type": "Weapon",
    "icon": "⚔️",
    "statBoosts": "Phys Atk +19, Initiative +2",
    "acquisition": "Can be obtained for 4000 G at various Armorer Shops (some of them below).",
    "isMetaCore": false,
    "metaSquads": []
  },
  {
    "id": "carnelian-axe",
    "name": "Carnelian Axe",
    "type": "Weapon",
    "icon": "🪓",
    "statBoosts": "Phys Atk +21, Base AP +1",
    "acquisition": "Can be obtained for 500 CC (Coliseum Coins) at the Coliseum Prize Echange in Baumratte.",
    "isMetaCore": false,
    "metaSquads": []
  },
  {
    "id": "carnelian-blade",
    "name": "Carnelian Blade",
    "type": "Weapon",
    "icon": "⚔️",
    "statBoosts": "Phys Atk +21, Base AP +1",
    "acquisition": "Can be obtained for 500 CC (Coliseum Coins) at the Coliseum Prize Echange in Baumratte.",
    "isMetaCore": false,
    "metaSquads": []
  },
  {
    "id": "carnelian-bow",
    "name": "Carnelian Bow",
    "type": "Weapon",
    "icon": "🏹",
    "statBoosts": "Phys Atk +21, Base AP +1",
    "acquisition": "Can be obtained for 500 CC (Coliseum Coins) at the Coliseum Prize Echange in Baumratte.",
    "isMetaCore": false,
    "metaSquads": []
  },
  {
    "id": "carnelian-spear",
    "name": "Carnelian Spear",
    "type": "Weapon",
    "icon": "🗡️",
    "statBoosts": "Phys Atk +21, Base AP +1",
    "acquisition": "Can be obtained for 500 CC (Coliseum Coins) at the Coliseum Prize Echange in Baumratte.",
    "isMetaCore": false,
    "metaSquads": []
  },
  {
    "id": "carnelian-staff",
    "name": "Carnelian Staff",
    "type": "Weapon",
    "icon": "🪄",
    "statBoosts": "Mag Atk +21, Base AP +1",
    "acquisition": "Can be obtained for 500 CC (Coliseum Coins) at the Coliseum Prize Echange in Baumratte.",
    "isMetaCore": false,
    "metaSquads": []
  },
  {
    "id": "chiropteran-staff",
    "name": "Chiropteran Staff",
    "type": "Weapon",
    "icon": "🪄",
    "statBoosts": "Mag Atk +12, Evasion +5, Initiative +3",
    "acquisition": "Starting equipment of Yahna.",
    "isMetaCore": false,
    "metaSquads": []
  },
  {
    "id": "chlorotic",
    "name": "Chlorotic",
    "type": "Weapon",
    "icon": "⚔️",
    "statBoosts": "Mag Atk +13, Fire Burst",
    "acquisition": "Can be obtained during level 5 quest The Self-Effacing Sorcerer, after defeating Auch's unit.",
    "isMetaCore": false,
    "grantedSkill": {
      "name": "Fire Burst",
      "cost": "1 PP",
      "description": "Activates at the end of a battle.Attack a single enemy with magick.Hits all enemies if target is burning."
    },
    "metaSquads": []
  },
  {
    "id": "cleric-s-cane",
    "name": "Cleric's Cane",
    "type": "Weapon",
    "icon": "🪄",
    "statBoosts": "Mag Atk +18, Protection, Base PP +1",
    "acquisition": "Can be obtained for 15 divine shards at the Rondmort Church location as a Divine Shard Exchange to Ochlys.",
    "isMetaCore": false,
    "metaSquads": []
  },
  {
    "id": "corroded-spear",
    "name": "Corroded Spear",
    "type": "Weapon",
    "icon": "🗡️",
    "statBoosts": "Phys Atk +17, Shadow Thrust",
    "acquisition": "Can be obtained for 8000 G at few Armorer shops.",
    "isMetaCore": false,
    "grantedSkill": {
      "name": "Shadow Thrust",
      "cost": "1 AP",
      "description": "Attack a column of enemies with a piercing strike.Inflicts Blindness."
    },
    "metaSquads": []
  },
  {
    "id": "crane-bow",
    "name": "Crane Bow",
    "type": "Weapon",
    "icon": "🏹",
    "statBoosts": "Phys Atk +22, Triple Shatter, Initiative +5",
    "acquisition": "Can be obtained for 20000 G at the Walled City of Peyston Armorer Shop (Albion).",
    "isMetaCore": false,
    "grantedSkill": {
      "name": "Triple Shatter",
      "cost": "1 AP",
      "description": "Attack three enemy.Inflicts Phys. Attack -50% and Mag. Attack -50%."
    },
    "metaSquads": []
  },
  {
    "id": "crimson-sarissa",
    "name": "Crimson Sarissa",
    "type": "Weapon",
    "icon": "⚔️",
    "statBoosts": "Phys Atk +13, Sanguine Attack, Max HP +15, Guard Rate +5%",
    "acquisition": "Armorer / World Quest / Treasure",
    "isMetaCore": false,
    "grantedSkill": {
      "name": "Sanguine Attack",
      "cost": "1 AP",
      "description": "Attack a single ennemy.Recover HP equal to 50% of damage dealt."
    },
    "metaSquads": []
  },
  {
    "id": "crimson-p-e",
    "name": "Crimson Épée",
    "type": "Weapon",
    "icon": "⚔️",
    "statBoosts": "Phys Atk +14, Active Shatter, Initiative +3",
    "acquisition": "Can be obtained for 10000 G at few Armorer Shops (some of them below).",
    "isMetaCore": false,
    "grantedSkill": {
      "name": "Active Shatter",
      "cost": "1 AP",
      "description": "Attack a single enemy.Inflicts 💎AP -1."
    },
    "metaSquads": []
  },
  {
    "id": "crushing-axe",
    "name": "Crushing Axe",
    "type": "Weapon",
    "icon": "🪓",
    "statBoosts": "Phys Atk +13, Crush",
    "acquisition": "Starting equipment of Aubin.",
    "isMetaCore": false,
    "grantedSkill": {
      "name": "Crush",
      "cost": "1 AP",
      "description": "Attack a single enemy.Inflicts Stun."
    },
    "metaSquads": []
  },
  {
    "id": "cursed-axe-of-the-abyss",
    "name": "Cursed Axe of the Abyss",
    "type": "Weapon",
    "icon": "🪓",
    "statBoosts": "Phys Atk +20, Passive Seal Immunity, Deathblow Immunity, Take +50% Less Poison Damage",
    "acquisition": "Armorer / World Quest / Treasure",
    "isMetaCore": false,
    "metaSquads": []
  },
  {
    "id": "cursed-blade-of-the-abyss",
    "name": "Cursed Blade of the Abyss",
    "type": "Weapon",
    "icon": "⚔️",
    "statBoosts": "Phys Atk +23, Passive Seal Immunity, Deathblow Immunity, Take +50% Less Poison Damage",
    "acquisition": "Armorer / World Quest / Treasure",
    "isMetaCore": false,
    "metaSquads": []
  },
  {
    "id": "cursed-lance-of-the-abyss",
    "name": "Cursed Lance of the Abyss",
    "type": "Weapon",
    "icon": "🗡️",
    "statBoosts": "Phys Atk +22, Passive Seal Immunity, Deathblow Immunity, Take +50% Less Poison Damage",
    "acquisition": "Armorer / World Quest / Treasure",
    "isMetaCore": false,
    "metaSquads": []
  },
  {
    "id": "cursed-staff-of-the-abyss",
    "name": "Cursed Staff of the Abyss",
    "type": "Weapon",
    "icon": "🪄",
    "statBoosts": "Mag Atk +20, Passive Seal Immunity, Deathblow Immunity, Take +50% Less Poison Damage",
    "acquisition": "Armorer / World Quest / Treasure",
    "isMetaCore": false,
    "metaSquads": []
  },
  {
    "id": "cutthroat-s-boon",
    "name": "Cutthroat's Boon",
    "type": "Weapon",
    "icon": "⚔️",
    "statBoosts": "Phys Atk +21, Assassin's Nail, Evasion +10, Blindness Immunity",
    "acquisition": "Can be obtained for 12000 G at the Black Market Dealer Shop (Bastorias).",
    "isMetaCore": false,
    "grantedSkill": {
      "name": "Assassin's Nail",
      "cost": "1 AP",
      "description": "Attack a single enemy.Inflicts Blindness.+50 potency and critical hit at nighttime."
    },
    "metaSquads": []
  },
  {
    "id": "dancer-s-delight",
    "name": "Dancer's Delight",
    "type": "Weapon",
    "icon": "⚔️",
    "statBoosts": "Phys Atk +16, Leaping Slash, Critical Rate +10%",
    "acquisition": "Can be obtained for 8000 G at the Znova Town Armorer Shop.",
    "isMetaCore": false,
    "grantedSkill": {
      "name": "Leaping Slash",
      "cost": "1 AP",
      "description": "Attack a single enemy.Grants the user +1 💎AP if the attack is critical.Grants the user -30% Critical Rate. (Effect stacks.)"
    },
    "metaSquads": []
  },
  {
    "id": "dark-knight-cleaver",
    "name": "Dark Knight Cleaver",
    "type": "Weapon",
    "icon": "⚔️",
    "statBoosts": "Phys Atk +9, Mag Atk +18, Desperation",
    "acquisition": "Armorer / World Quest / Treasure",
    "isMetaCore": false,
    "grantedSkill": {
      "name": "Desperation",
      "cost": "1 AP",
      "description": "Attack a single enemy.Deals damage based on user's missing HP.(This attack cannot be a critical.)"
    },
    "metaSquads": []
  },
  {
    "id": "death-pillar",
    "name": "Death Pillar",
    "type": "Weapon",
    "icon": "⚔️",
    "statBoosts": "Phys Atk +20, Lethal Venom, AP -1, HP -50%",
    "acquisition": "Can be obtained for 20000 G at the Fortified City of Solvaquad Armorer Shop.",
    "isMetaCore": false,
    "grantedSkill": {
      "name": "Lethal Venom",
      "cost": "1 AP",
      "description": "Attack a column of enemies with a piercing strike.Inflicts Poison.Inflicts a deathblow v. poisoned targets."
    },
    "metaSquads": []
  },
  {
    "id": "defender-s-mace",
    "name": "Defender's Mace",
    "type": "Weapon",
    "icon": "🪄",
    "statBoosts": "Mag Atk +13, Quick Barrier, Base PP +1",
    "acquisition": "Can be obtained for 10000 G at few Armorer Shops (some of them below).",
    "isMetaCore": false,
    "grantedSkill": {
      "name": "Quick Barrier",
      "cost": "1 PP",
      "description": "Activates before an ally is attacked.Reduce damage taken by an allyby 50% for one attack."
    },
    "metaSquads": []
  },
  {
    "id": "desert-bow",
    "name": "Desert Bow",
    "type": "Weapon",
    "icon": "🏹",
    "statBoosts": "Phys Atk +15, Critical Rate +10%, Accuracy +20",
    "acquisition": "Armorer / World Quest / Treasure",
    "isMetaCore": false,
    "metaSquads": []
  },
  {
    "id": "dragonbone-axe",
    "name": "Dragonbone Axe",
    "type": "Weapon",
    "icon": "🪓",
    "statBoosts": "Phys Atk +15, Base PP +1, Initiative -10",
    "acquisition": "Can be obtained for 8000 G at few Armorer shops (some of them below).",
    "isMetaCore": false,
    "metaSquads": []
  },
  {
    "id": "dragonbone-blade",
    "name": "Dragonbone Blade",
    "type": "Weapon",
    "icon": "⚔️",
    "statBoosts": "Phys Atk +15, Base PP +1, Initiative -10",
    "acquisition": "Can be obtained for 8000 G at few Armorer shops.",
    "isMetaCore": false,
    "metaSquads": []
  },
  {
    "id": "dragonbone-bow",
    "name": "Dragonbone Bow",
    "type": "Weapon",
    "icon": "🏹",
    "statBoosts": "Phys Atk +15, Base PP +1, Initiative -10",
    "acquisition": "Can be obtained for 8000 G at few Armorer shops (some of them below).",
    "isMetaCore": false,
    "metaSquads": []
  },
  {
    "id": "dragonbone-spear",
    "name": "Dragonbone Spear",
    "type": "Weapon",
    "icon": "🗡️",
    "statBoosts": "Phys Atk +15, Base PP +1, Initiative -10",
    "acquisition": "Can be obtained for 8000 G at few Armorer shops (some of them below).",
    "isMetaCore": false,
    "metaSquads": []
  },
  {
    "id": "dragonbone-staff",
    "name": "Dragonbone Staff",
    "type": "Weapon",
    "icon": "🪄",
    "statBoosts": "Mag Atk +15, Base PP +1, Initiative -10",
    "acquisition": "Can be obtained for 8000 G at few Armorer shops (some of them below).",
    "isMetaCore": false,
    "metaSquads": []
  },
  {
    "id": "dragoon-s-warspear",
    "name": "Dragoon's Warspear",
    "type": "Weapon",
    "icon": "🗡️",
    "statBoosts": "Phys Atk +20, Dragoon Dive, Max HP +15, Initiative +5",
    "acquisition": "Can be obtained for ??? G at the Castle Soldraga Armorer Shop",
    "isMetaCore": true,
    "grantedSkill": {
      "name": "Dragoon Dive",
      "cost": "1 AP",
      "description": "Attack all enemies.+50 potency v. ground-based targets.(User cannot evade of use passive skills while charging.)"
    },
    "metaSquads": []
  },
  {
    "id": "dustbound-staff",
    "name": "Dustbound Staff",
    "type": "Weapon",
    "icon": "🪄",
    "statBoosts": "Mag Atk +16, Sandstorm",
    "acquisition": "Armorer / World Quest / Treasure",
    "isMetaCore": false,
    "grantedSkill": {
      "name": "Sandstorm",
      "cost": "1 AP",
      "description": "Inflicts Blindness on all enemies."
    },
    "metaSquads": []
  },
  {
    "id": "ein-seeker",
    "name": "Ein Seeker",
    "type": "Weapon",
    "icon": "⚔️",
    "statBoosts": "Mag Atk +21, Magick Shell",
    "acquisition": "Armorer / World Quest / Treasure",
    "isMetaCore": false,
    "grantedSkill": {
      "name": "Magick Shell",
      "cost": "1 PP",
      "description": "Activates at the start of a battle.Completely negate attacks up to three hits."
    },
    "metaSquads": []
  },
  {
    "id": "elfeater",
    "name": "Elfeater",
    "type": "Weapon",
    "icon": "⚔️",
    "statBoosts": "Phys Atk +20, Elfslayer, Magick Defense +5",
    "acquisition": "Can be obtained for 10000 G at the Black Market Dealer Shop (Elheim).",
    "isMetaCore": false,
    "grantedSkill": {
      "name": "Elfslayer",
      "cost": "1 AP",
      "description": "Attack a column of enemies with a piercing strike.Inflicts 💎AP -1, 💎PP -1,and Defense -50% to elven targets."
    },
    "metaSquads": []
  },
  {
    "id": "eliminator",
    "name": "Eliminator",
    "type": "Weapon",
    "icon": "⚔️",
    "statBoosts": "Phys Atk +23, Execution, Magick Defense -10",
    "acquisition": "Can be obtained for 15000 G at the Greige Town Armorer Shop.",
    "isMetaCore": false,
    "grantedSkill": {
      "name": "Execution",
      "cost": "1 AP",
      "description": "Attack a single enemy.Inflicts Passive Seal.Inflicts a deathblow if target is at 25% HP or less."
    },
    "metaSquads": []
  },
  {
    "id": "euros-s-staff",
    "name": "Euros's Staff",
    "type": "Weapon",
    "icon": "🪄",
    "statBoosts": "Mag Atk +25, Base AP +1, Initiative +10, Evasion +10",
    "acquisition": "To reach this Monument of Anemoi, head to the Quarry in Albion then pass through the area on the south side of the quarry.",
    "isMetaCore": false,
    "metaSquads": []
  },
  {
    "id": "flamberge",
    "name": "Flamberge",
    "type": "Weapon",
    "icon": "⚔️",
    "statBoosts": "Phys Atk +21, Grisly Fire, Burn Immunity",
    "acquisition": "Can be obtained for 10000 G at the Devolpis Harbor Armorer Shop.",
    "isMetaCore": false,
    "grantedSkill": {
      "name": "Grisly Fire",
      "cost": "1 AP",
      "description": "Attack a single enemy.Inflicts Burn.+50 potency and critical hit v. burning targets."
    },
    "metaSquads": []
  },
  {
    "id": "flame-bow",
    "name": "Flame Bow",
    "type": "Weapon",
    "icon": "🏹",
    "statBoosts": "Phys Atk +11, Flame Arrow",
    "acquisition": "Obtained during level 4 quest The Winged Knight, after defeating Mandrin's unit.",
    "isMetaCore": false,
    "grantedSkill": {
      "name": "Flame Arrow",
      "cost": "1 AP",
      "description": "Attack a single enemy.Inflicts Burn."
    },
    "metaSquads": []
  },
  {
    "id": "flame-javelin",
    "name": "Flame Javelin",
    "type": "Weapon",
    "icon": "⚔️",
    "statBoosts": "Phys Atk +18, Flame Javelin, Burn Immunity",
    "acquisition": "Armorer / World Quest / Treasure",
    "isMetaCore": false,
    "metaSquads": []
  },
  {
    "id": "flame-hex-staff",
    "name": "Flame-Hex Staff",
    "type": "Weapon",
    "icon": "🪄",
    "statBoosts": "Mag Atk +16, Fire Curse",
    "acquisition": "Armorer / World Quest / Treasure",
    "isMetaCore": false,
    "grantedSkill": {
      "name": "Fire Curse",
      "cost": "1 AP",
      "description": "Inflicts Burn on a row of enemies."
    },
    "metaSquads": []
  },
  {
    "id": "frostbloom-bow",
    "name": "Frostbloom Bow",
    "type": "Weapon",
    "icon": "🏹",
    "statBoosts": "Phys Atk +21, Critical Rate +15%, Evasion +20",
    "acquisition": "Starting equipment of Yunifi.",
    "isMetaCore": false,
    "metaSquads": []
  },
  {
    "id": "frozen-battleaxe",
    "name": "Frozen Battleaxe",
    "type": "Weapon",
    "icon": "🪓",
    "statBoosts": "Phys Atk +21, Icy Crush, Freeze Immunity",
    "acquisition": "Can be obtained for 10000 G at the Tzontiesta Town Armorer Shop.",
    "isMetaCore": false,
    "grantedSkill": {
      "name": "Icy Crush",
      "cost": "1 AP",
      "description": "Attack a single enemy.Inflicts Freeze.+100 potency v. frozen targets."
    },
    "metaSquads": []
  },
  {
    "id": "galecutter",
    "name": "Galecutter",
    "type": "Weapon",
    "icon": "⚔️",
    "statBoosts": "Phys Atk +22, Double Blast, Evasion +20",
    "acquisition": "Can be obtained for 12000 G at the Heavensriver Town Armorer Shop",
    "isMetaCore": false,
    "grantedSkill": {
      "name": "Double Blast",
      "cost": "1 AP",
      "description": "Attack two enemies.+80 potency v. flying targets."
    },
    "metaSquads": []
  },
  {
    "id": "gallian-crossbow",
    "name": "Gallian Crossbow",
    "type": "Weapon",
    "icon": "🏹",
    "statBoosts": "Phys Atk +21, Harpoon Bolt, Accuracy +10, Critical Damage +30%",
    "acquisition": "Can be obtained for 15000 G at the Dracodorina Citadel Armorer Shop (Bastorias).",
    "isMetaCore": false,
    "grantedSkill": {
      "name": "Harpoon Bolt",
      "cost": "1 AP",
      "description": "Attack a column of enemies with a piercing strike."
    },
    "metaSquads": []
  },
  {
    "id": "general-s-longbow",
    "name": "General's Longbow",
    "type": "Weapon",
    "icon": "🏹",
    "statBoosts": "Phys Atk +17, Aerial Shift, Base PP +1",
    "acquisition": "Complete the quest:\"Cornia Treasure Map 4\".",
    "isMetaCore": false,
    "grantedSkill": {
      "name": "Aerial Shift",
      "cost": "1 PP",
      "description": "Activates after an ally is attacked with an active skill.Buff a row of allies.Grants +20% Attack and +40% Critical Rate to flying allies."
    },
    "metaSquads": []
  },
  {
    "id": "general-s-pike",
    "name": "General's Pike",
    "type": "Weapon",
    "icon": "🗡️",
    "statBoosts": "Phys Atk +17, Phalanx Shift, Base PP +1",
    "acquisition": "Can be obtained at Castle Laurhal for ??? G.",
    "isMetaCore": false,
    "grantedSkill": {
      "name": "Phalanx Shift",
      "cost": "1 PP",
      "description": "Activates after an ally is attacked with an active skill.Buff a row of allies.Grants +20% Attack and +40% Critical Rate to cavalry allies."
    },
    "metaSquads": []
  },
  {
    "id": "giant-s-greataxe",
    "name": "Giant's Greataxe",
    "type": "Weapon",
    "icon": "🪓",
    "statBoosts": "Phys Atk +18, Heavy Smash, Max HP +20, Initiative -10",
    "acquisition": "Can be obtained for 10000 G at the Früth Harbor Armorer Shop.",
    "isMetaCore": false,
    "grantedSkill": {
      "name": "Heavy Smash",
      "cost": "1 AP",
      "description": "Attack a row of enemies.Inflicts Stun."
    },
    "metaSquads": []
  },
  {
    "id": "glaive",
    "name": "Glaive",
    "type": "Weapon",
    "icon": "⚔️",
    "statBoosts": "Phys Atk +21, Follow-up Skills Deals +20 Damage, Critical Rate +10%",
    "acquisition": "Can be obtained for 8000 G at the Ancient City of Bastoritza Armorer Shop.",
    "isMetaCore": false,
    "metaSquads": []
  },
  {
    "id": "gleaming-mace",
    "name": "Gleaming Mace",
    "type": "Weapon",
    "icon": "🪄",
    "statBoosts": "Mag Atk +18, Holy Smite",
    "acquisition": "Armorer / World Quest / Treasure",
    "isMetaCore": false,
    "grantedSkill": {
      "name": "Holy Smite",
      "cost": "1 AP",
      "description": "Attack a single enemy.Removes all of the target's buffs."
    },
    "metaSquads": []
  },
  {
    "id": "golden-ram-axe",
    "name": "Golden Ram Axe",
    "type": "Weapon",
    "icon": "🪓",
    "statBoosts": "Phys Atk +17, Accuracy +20, Physickal Defense +4",
    "acquisition": "Armorer / World Quest / Treasure",
    "isMetaCore": false,
    "metaSquads": []
  },
  {
    "id": "grand-magus-staff",
    "name": "Grand Magus Staff",
    "type": "Weapon",
    "icon": "🪄",
    "statBoosts": "Mag Atk +20, Magick Burst",
    "acquisition": "Can be obtained for 20000 G at the Cherrywell Town Armorer Shop (Albion).",
    "isMetaCore": false,
    "grantedSkill": {
      "name": "Magick Burst",
      "cost": "1 PP",
      "description": "Activates after an enemy attacks with an active skill.Counterattack all enemies with magick.Inflicts Initiative -10."
    },
    "metaSquads": []
  },
  {
    "id": "greatsword",
    "name": "Greatsword",
    "type": "Weapon",
    "icon": "⚔️",
    "statBoosts": "Phys Atk +25",
    "acquisition": "Recruit Amalia",
    "isMetaCore": false,
    "metaSquads": []
  },
  {
    "id": "greatsword-of-the-abyss",
    "name": "Greatsword of the Abyss",
    "type": "Weapon",
    "icon": "⚔️",
    "statBoosts": "Phys Atk +25, Passive Seal Immunity, Deathblow Immunity, Take +50% Less Poison Damage",
    "acquisition": "Armorer / World Quest / Treasure",
    "isMetaCore": false,
    "metaSquads": []
  },
  {
    "id": "greatwood-axe",
    "name": "Greatwood Axe",
    "type": "Weapon",
    "icon": "🪓",
    "statBoosts": "Phys Atk +8, Mag Atk +16, Magick Defense +3",
    "acquisition": "Can be obtained for 4000 G at various Armorer Shops.",
    "isMetaCore": false,
    "metaSquads": []
  },
  {
    "id": "greatwood-bow",
    "name": "Greatwood Bow",
    "type": "Weapon",
    "icon": "🏹",
    "statBoosts": "Phys Atk +8, Mag Atk +16, Magick Defense +3",
    "acquisition": "Can be obtained for 4000 G at various Armorer Shops.",
    "isMetaCore": false,
    "metaSquads": []
  },
  {
    "id": "greatwood-spear",
    "name": "Greatwood Spear",
    "type": "Weapon",
    "icon": "🗡️",
    "statBoosts": "Phys Atk +8, Mag Atk +16, Magick Defense +3",
    "acquisition": "Can be obtained for 4000 G at various Armorer Shops.",
    "isMetaCore": false,
    "metaSquads": []
  },
  {
    "id": "greatwood-spiritbow",
    "name": "Greatwood Spiritbow",
    "type": "Weapon",
    "icon": "🏹",
    "statBoosts": "Phys Atk +10, Mag Atk +16, Magick Defense +5",
    "acquisition": "Armorer / World Quest / Treasure",
    "isMetaCore": false,
    "metaSquads": []
  },
  {
    "id": "greatwood-staff",
    "name": "Greatwood Staff",
    "type": "Weapon",
    "icon": "🪄",
    "statBoosts": "Phys Atk +8, Mag Atk +16, Magick Defense +3",
    "acquisition": "Can be obtained for 4000 G at various Armorer Shops.",
    "isMetaCore": false,
    "metaSquads": []
  },
  {
    "id": "greatwood-sword",
    "name": "Greatwood Sword",
    "type": "Weapon",
    "icon": "⚔️",
    "statBoosts": "Phys Atk +8, Mag Atk +16, Magick Defense +3",
    "acquisition": "Can be obtained for 4000 G at various Armorer Shops.",
    "isMetaCore": false,
    "metaSquads": []
  },
  {
    "id": "hailstorm-edge",
    "name": "Hailstorm Edge",
    "type": "Weapon",
    "icon": "⚔️",
    "statBoosts": "Phys Atk +20, Icicle Dart, Accuracy +20, Freeze Immunity",
    "acquisition": "Can be obtained for 8000 G at the Prigaschari Harbor Armorer Shop",
    "isMetaCore": false,
    "grantedSkill": {
      "name": "Icicle Dart",
      "cost": "1 AP",
      "description": "Attack a single enemy.Inflicts Freeze."
    },
    "metaSquads": []
  },
  {
    "id": "hallowed-blade",
    "name": "Hallowed Blade",
    "type": "Weapon",
    "icon": "⚔️",
    "statBoosts": "Phys Atk +14, Heal 10% HP when using Active Skill, Max HP +5",
    "acquisition": "Can be obtained by doing the quest \"Cornia Treasure Map 1\".",
    "isMetaCore": false,
    "metaSquads": []
  },
  {
    "id": "hallowed-mace",
    "name": "Hallowed Mace",
    "type": "Weapon",
    "icon": "🪄",
    "statBoosts": "Mag Atk +13, Reheal, Heals 10% HP when using Active Skill, Max HP +5",
    "acquisition": "Can be obtained for 5000 G at few Armorer Shops (some of them below).",
    "isMetaCore": false,
    "grantedSkill": {
      "name": "Reheal",
      "cost": "1 PP",
      "description": "Activates at the start of a battle.Grants a row of allies HP regeneration."
    },
    "metaSquads": []
  },
  {
    "id": "headsman-s-axe",
    "name": "Headsman's Axe",
    "type": "Weapon",
    "icon": "🪓",
    "statBoosts": "Phys Atk +16, Execution, Magick Defense -10",
    "acquisition": "Can be obtained for 5000 G at few Armorer Shops (some of them below).",
    "isMetaCore": false,
    "grantedSkill": {
      "name": "Execution",
      "cost": "1 AP",
      "description": "Attack a single enemy.Inflicts Passive Seal.Inflicts a deathblow if target is at 25% HP or less."
    },
    "metaSquads": []
  },
  {
    "id": "heavenswing-staff",
    "name": "Heavenswing Staff",
    "type": "Weapon",
    "icon": "🪄",
    "statBoosts": "Mag Atk +23, Max HP +20, Initiative +10",
    "acquisition": "Armorer / World Quest / Treasure",
    "isMetaCore": false,
    "metaSquads": []
  },
  {
    "id": "heavenswing-sword",
    "name": "Heavenswing Sword",
    "type": "Weapon",
    "icon": "⚔️",
    "statBoosts": "Phys Atk +16, Accuracy +10, Evasion +10",
    "acquisition": "Recruit Ochlys",
    "isMetaCore": false,
    "metaSquads": []
  },
  {
    "id": "helix-spear",
    "name": "Helix Spear",
    "type": "Weapon",
    "icon": "🗡️",
    "statBoosts": "Phys Atk +23, Penetrate, Guard Rate +10%",
    "acquisition": "Can be obtained for ??? G at the Zagatul Harbor Armorer Shop.",
    "isMetaCore": false,
    "grantedSkill": {
      "name": "Penetrate",
      "cost": "1 AP",
      "description": "Attack a column of enemies with a piercing strike.Inflicts Phys. Defense -30%."
    },
    "metaSquads": []
  },
  {
    "id": "helleborus-axe",
    "name": "Helleborus Axe",
    "type": "Weapon",
    "icon": "🪓",
    "statBoosts": "Phys Atk +25, Base PP +1, HP Recovery +30%",
    "acquisition": "Can be obtained by doing the quest:\"Drakenhold Treasure Map 6\".",
    "isMetaCore": false,
    "metaSquads": []
  },
  {
    "id": "hoarfrost-axe",
    "name": "Hoarfrost Axe",
    "type": "Weapon",
    "icon": "🪓",
    "statBoosts": "Phys Atk +13, Icy Blow",
    "acquisition": "Can be obtained for 6000 G at few armorer shops (some of them below).",
    "isMetaCore": false,
    "grantedSkill": {
      "name": "Icy Blow",
      "cost": "1 AP",
      "description": "Attack a single enemy.Inflicts Freeze."
    },
    "metaSquads": []
  },
  {
    "id": "holy-unicorn-blade",
    "name": "Holy Unicorn Blade",
    "type": "Weapon",
    "icon": "⚔️",
    "statBoosts": "Phys Atk +28, Base AP +1, Base PP +1, Debuff Immunity",
    "acquisition": "Sanctuary of the Unicorn (\"The Royal Mausoleum\" Quest)",
    "isMetaCore": true,
    "metaSquads": []
  },
  {
    "id": "hunter-s-claymore",
    "name": "Hunter's Claymore",
    "type": "Weapon",
    "icon": "⚔️",
    "statBoosts": "Phys Atk +22, Follow-up Skills Deal +20 Damage, Critical Rate +10%",
    "acquisition": "Can be obtained for 8000 G at the Drynarot Town Armorer Shop.",
    "isMetaCore": false,
    "metaSquads": []
  },
  {
    "id": "hunter-s-halberd",
    "name": "Hunter's Halberd",
    "type": "Weapon",
    "icon": "⚔️",
    "statBoosts": "Phys Atk +21, Follow-up Skills Deal +20 Damage, Critical Rate +10%",
    "acquisition": "Can be obtained for 8000 G at the Walled City of Peyston Armorer Shop.",
    "isMetaCore": false,
    "metaSquads": []
  },
  {
    "id": "icefall-axe",
    "name": "Icefall Axe",
    "type": "Weapon",
    "icon": "🪓",
    "statBoosts": "Phys Atk +19, Base PP +1, Guard Rate -20%",
    "acquisition": "Can be obtained at Vosfraga Town for 12000 G.",
    "isMetaCore": false,
    "metaSquads": []
  },
  {
    "id": "icefall-blade",
    "name": "Icefall Blade",
    "type": "Weapon",
    "icon": "⚔️",
    "statBoosts": "Phys Atk +19, Base PP +1, Guard Rate -20%",
    "acquisition": "Can be obtained Vosfraga Town for 12000 G.",
    "isMetaCore": false,
    "metaSquads": []
  },
  {
    "id": "icefall-bow",
    "name": "Icefall Bow",
    "type": "Weapon",
    "icon": "🏹",
    "statBoosts": "Phys Atk +19, Base PP +1, Guard Rate -20%",
    "acquisition": "Can be obtained at Vosfraga Town for 12000 G.",
    "isMetaCore": true,
    "metaSquads": []
  },
  {
    "id": "icefall-spear",
    "name": "Icefall Spear",
    "type": "Weapon",
    "icon": "🗡️",
    "statBoosts": "Phys Atk +19, Base PP +1, Guard Rate -20%",
    "acquisition": "Can be obtained at Vosfraga Town for 12000 G.",
    "isMetaCore": false,
    "metaSquads": []
  },
  {
    "id": "icefall-staff",
    "name": "Icefall Staff",
    "type": "Weapon",
    "icon": "🪄",
    "statBoosts": "Mag Atk +19, Base PP +1, Guard Rate -20%",
    "acquisition": "Can be obtained at Vosfraga Town for 12000 G.",
    "isMetaCore": false,
    "metaSquads": []
  },
  {
    "id": "icestorm-staff",
    "name": "Icestorm Staff",
    "type": "Weapon",
    "icon": "🪄",
    "statBoosts": "Mag Atk +22, Blizzard, Freeze Immunity, Evasion +10",
    "acquisition": "Armorer / World Quest / Treasure",
    "isMetaCore": false,
    "grantedSkill": {
      "name": "Blizzard",
      "cost": "1 AP",
      "description": "Attack all enemies with magick.Inflicts Freeze.(User cannot evade or use passive skills while charging.)"
    },
    "metaSquads": []
  },
  {
    "id": "infamous-bow",
    "name": "Infamous Bow",
    "type": "Weapon",
    "icon": "🏹",
    "statBoosts": "Phys Atk +18, Accuracy +50, Critical Rate -30%",
    "acquisition": "Complete the quest:\"Elheim Treasure Map 1\".",
    "isMetaCore": false,
    "metaSquads": []
  },
  {
    "id": "interrogator-s-bow",
    "name": "Interrogator's Bow",
    "type": "Weapon",
    "icon": "🏹",
    "statBoosts": "Phys Atk +16, Healing Hunter, Base PP +1, Magick Defense +3",
    "acquisition": "Can be obtained for 12000 G at few Armorer Shops.",
    "isMetaCore": false,
    "grantedSkill": {
      "name": "Healing Hunter",
      "cost": "1 PP",
      "description": "Activates after an enemy uses healing magick.Attack a single enemy.Ignores 30% of the target's Defense."
    },
    "metaSquads": []
  },
  {
    "id": "iron-axe",
    "name": "Iron Axe",
    "type": "Weapon",
    "icon": "🪓",
    "statBoosts": "Phys Atk +15",
    "acquisition": "Can be obtained for 2000 G at various Armorer Shops (some of them below).",
    "isMetaCore": false,
    "metaSquads": []
  },
  {
    "id": "iron-bow",
    "name": "Iron Bow",
    "type": "Weapon",
    "icon": "🏹",
    "statBoosts": "Phys Atk +15",
    "acquisition": "Can be obtained for 2000 G at various Armorer Shops (some of them below).",
    "isMetaCore": false,
    "metaSquads": []
  },
  {
    "id": "iron-spear",
    "name": "Iron Spear",
    "type": "Weapon",
    "icon": "🗡️",
    "statBoosts": "Phys Atk +15",
    "acquisition": "Can be obtained for 2000 G at various Armorer Shops (some of them below).",
    "isMetaCore": false,
    "metaSquads": []
  },
  {
    "id": "iron-staff",
    "name": "Iron Staff",
    "type": "Weapon",
    "icon": "🪄",
    "statBoosts": "Mag Atk +15",
    "acquisition": "Can be obtained for 2000 G at various Armorer Shops (some of them below).",
    "isMetaCore": false,
    "metaSquads": []
  },
  {
    "id": "iron-sword",
    "name": "Iron Sword",
    "type": "Weapon",
    "icon": "⚔️",
    "statBoosts": "Phys Atk +15",
    "acquisition": "Can be obtained for 2000 G at various Armorer Shops.",
    "isMetaCore": false,
    "metaSquads": []
  },
  {
    "id": "juggernaut",
    "name": "Juggernaut",
    "type": "Weapon",
    "icon": "⚔️",
    "statBoosts": "Phys Atk +24, Ground Strike, Critical Damage +30%, Stun Immunity",
    "acquisition": "Can be obtained for ??? G at the Dracodorina Citadel Armorer Shop.",
    "isMetaCore": false,
    "grantedSkill": {
      "name": "Ground Strike",
      "cost": "1 AP",
      "description": "Attack a single enemy.Ignores 100% Defense v. cavalry targets."
    },
    "metaSquads": []
  },
  {
    "id": "kingsaxe-drakenash",
    "name": "Kingsaxe Drakenash",
    "type": "Weapon",
    "icon": "🪓",
    "statBoosts": "Phys Atk +20, All Stats +5",
    "acquisition": "Can be obtained when completing the quest:\"Carved of Drakenhold Stone\".",
    "isMetaCore": true,
    "metaSquads": []
  },
  {
    "id": "kingsblade-cornix",
    "name": "Kingsblade Cornix",
    "type": "Weapon",
    "icon": "⚔️",
    "statBoosts": "Phys Atk +15, All Stats +5",
    "acquisition": "Armorer / World Quest / Treasure",
    "isMetaCore": true,
    "metaSquads": []
  },
  {
    "id": "kingsbow-bastorik",
    "name": "Kingsbow Bastorik",
    "type": "Weapon",
    "icon": "🏹",
    "statBoosts": "Phys Atk +25, All Stats +5",
    "acquisition": "Can be obtained when completing the quest:\"Carved of Bastorias Stone\".",
    "isMetaCore": true,
    "metaSquads": []
  },
  {
    "id": "kingslance-elhal",
    "name": "Kingslance Elhal",
    "type": "Weapon",
    "icon": "🗡️",
    "statBoosts": "Phys Atk +9, Mag Atk +18, All Stats +5",
    "acquisition": "Can be obtained when completing the quest:\"Carved of Elheim Stone\".",
    "isMetaCore": true,
    "metaSquads": []
  },
  {
    "id": "kingstaff-albiore",
    "name": "Kingstaff Albiore",
    "type": "Weapon",
    "icon": "🪄",
    "statBoosts": "Mag Atk +25, All Stats +5",
    "acquisition": "Can be obtained when completing the quest:\"Carved of Albion Stone\".",
    "isMetaCore": true,
    "metaSquads": []
  },
  {
    "id": "knot-of-ruin",
    "name": "Knot of Ruin",
    "type": "Weapon",
    "icon": "⚔️",
    "statBoosts": "Phys Atk +22, Base AP +1, HP -30, Initiative -10",
    "acquisition": "Complete the quest:\"Drakenhold Treasure Map 3\".",
    "isMetaCore": false,
    "metaSquads": []
  },
  {
    "id": "labrys",
    "name": "Labrys",
    "type": "Weapon",
    "icon": "⚔️",
    "statBoosts": "Phys Atk +18, Initiative +5, Guard Rate +20%",
    "acquisition": "Starting equipment of Celeste.",
    "isMetaCore": false,
    "metaSquads": []
  },
  {
    "id": "lance-of-devotion",
    "name": "Lance of Devotion",
    "type": "Weapon",
    "icon": "🗡️",
    "statBoosts": "Phys Atk +25",
    "acquisition": "Armorer / World Quest / Treasure",
    "isMetaCore": false,
    "metaSquads": []
  },
  {
    "id": "libera",
    "name": "Libera",
    "type": "Weapon",
    "icon": "⚔️",
    "statBoosts": "Mag Atk +20, Reincarnation",
    "acquisition": "Armorer / World Quest / Treasure",
    "isMetaCore": false,
    "grantedSkill": {
      "name": "Reincarnation",
      "cost": "1 AP",
      "description": "Revive one ally, restoring them to 1 HP.Grants the target immunity to damage for one attack."
    },
    "metaSquads": []
  },
  {
    "id": "liberator-s-staff",
    "name": "Liberator's Staff",
    "type": "Weapon",
    "icon": "🪄",
    "statBoosts": "Mag Atk +14, Dispel All",
    "acquisition": "Armorer / World Quest / Treasure",
    "isMetaCore": false,
    "grantedSkill": {
      "name": "Dispel All",
      "cost": "1 AP",
      "description": "Remove all buffs from all enemies."
    },
    "metaSquads": []
  },
  {
    "id": "lifeblood-staff",
    "name": "Lifeblood Staff",
    "type": "Weapon",
    "icon": "🪄",
    "statBoosts": "Mag Atk +13, Resurrection, Max HP +10",
    "acquisition": "Armorer / World Quest / Treasure",
    "isMetaCore": false,
    "grantedSkill": {
      "name": "Resurrection",
      "cost": "1 AP",
      "description": "Revive one ally, restoring them to 1 HP."
    },
    "metaSquads": []
  },
  {
    "id": "lupinus-staff",
    "name": "Lupinus Staff",
    "type": "Weapon",
    "icon": "🪄",
    "statBoosts": "Mag Atk +25, Base PP +1, HP Recovery +30%",
    "acquisition": "Can be obtained by doing the quest:\"Albion Treasure Map 6\".",
    "isMetaCore": false,
    "metaSquads": []
  },
  {
    "id": "lyrical-wand",
    "name": "Lyrical Wand",
    "type": "Weapon",
    "icon": "⚔️",
    "statBoosts": "Mag Atk +13, Active Heal, Base AP +1",
    "acquisition": "Armorer / World Quest / Treasure",
    "isMetaCore": false,
    "metaSquads": []
  },
  {
    "id": "magebane-bow",
    "name": "Magebane Bow",
    "type": "Weapon",
    "icon": "🏹",
    "statBoosts": "Phys Atk +15",
    "acquisition": "Armorer / World Quest / Treasure",
    "isMetaCore": false,
    "metaSquads": []
  },
  {
    "id": "mason-s-hammer",
    "name": "Mason's Hammer",
    "type": "Weapon",
    "icon": "🪓",
    "statBoosts": "Phys Atk +10, Powerful Impact",
    "acquisition": "Armorer / World Quest / Treasure",
    "isMetaCore": false,
    "grantedSkill": {
      "name": "Powerful Impact",
      "cost": "1 AP",
      "description": "Attack a single enemy."
    },
    "metaSquads": []
  },
  {
    "id": "meteorite-axe",
    "name": "Meteorite Axe",
    "type": "Weapon",
    "icon": "🪓",
    "statBoosts": "Phys Atk +24, Max HP +20, Guard Rate +10%",
    "acquisition": "Armorer / World Quest / Treasure",
    "isMetaCore": false,
    "metaSquads": []
  },
  {
    "id": "meteorite-bow",
    "name": "Meteorite Bow",
    "type": "Weapon",
    "icon": "🏹",
    "statBoosts": "Phys Atk +24, Max HP +20, Guard Rate +10%",
    "acquisition": "Armorer / World Quest / Treasure",
    "isMetaCore": false,
    "metaSquads": []
  },
  {
    "id": "meteorite-lance",
    "name": "Meteorite Lance",
    "type": "Weapon",
    "icon": "🗡️",
    "statBoosts": "Phys Atk +24, Max HP +20, Guard Rate +10%",
    "acquisition": "Armorer / World Quest / Treasure",
    "isMetaCore": false,
    "metaSquads": []
  },
  {
    "id": "meteorite-rod",
    "name": "Meteorite Rod",
    "type": "Weapon",
    "icon": "🪄",
    "statBoosts": "Mag Atk +24, Max HP +20, Guard Rate +10%",
    "acquisition": "Armorer / World Quest / Treasure",
    "isMetaCore": false,
    "metaSquads": []
  },
  {
    "id": "meteorite-sword",
    "name": "Meteorite Sword",
    "type": "Weapon",
    "icon": "⚔️",
    "statBoosts": "Phys Atk +24, Max HP +20, Guard Rate +10%",
    "acquisition": "Armorer / World Quest / Treasure",
    "isMetaCore": false,
    "metaSquads": []
  },
  {
    "id": "millenium-scepter",
    "name": "Millenium Scepter",
    "type": "Weapon",
    "icon": "🪄",
    "statBoosts": "Mag Atk +24, Trinity Rain",
    "acquisition": "Coliseum Prize Exchange (2,000 CC)",
    "isMetaCore": true,
    "grantedSkill": {
      "name": "Trinity Rain",
      "cost": "3 AP",
      "description": "Charge a 3-hit radiant magical rain storm striking all enemies."
    },
    "metaSquads": []
  },
  {
    "id": "mist-scimitar",
    "name": "Mist Scimitar",
    "type": "Weapon",
    "icon": "⚔️",
    "statBoosts": "Evade, Evasion +10",
    "acquisition": "Armorer / World Quest / Treasure",
    "isMetaCore": false,
    "grantedSkill": {
      "name": "Evade",
      "cost": "1 PP",
      "description": "Activates before being attacked.Evade a single hit."
    },
    "metaSquads": []
  },
  {
    "id": "moonlight-rapier",
    "name": "Moonlight Rapier",
    "type": "Weapon",
    "icon": "⚔️",
    "statBoosts": "Phys Atk +21, Nocturnal Strike",
    "acquisition": "Can be obtained for 12000 G at the Dyregulf Town Armorer Shop.",
    "isMetaCore": false,
    "grantedSkill": {
      "name": "Nocturnal Strike",
      "cost": "1 PP",
      "description": "Activates at the start of a battle.Attack a single enemy with a first strike.Grants the user +1 💎PP at night."
    },
    "metaSquads": []
  },
  {
    "id": "morningstar",
    "name": "Morningstar",
    "type": "Weapon",
    "icon": "⚔️",
    "statBoosts": "Phys Atk +18, Painful Smash",
    "acquisition": "Can be obtained for 8000 G at the Sarlicotti Town Armorer Shop.",
    "isMetaCore": false,
    "grantedSkill": {
      "name": "Painful Smash",
      "cost": "1 AP",
      "description": "Attack a single enemy.Deals 25% of target's HPin additional damage."
    },
    "metaSquads": []
  },
  {
    "id": "mother-laelia-s-staff",
    "name": "Mother Laelia's Staff",
    "type": "Weapon",
    "icon": "🪄",
    "statBoosts": "Mag Atk +15, Parting Resurrection, Base PP +1",
    "acquisition": "Armorer / World Quest / Treasure",
    "isMetaCore": false,
    "grantedSkill": {
      "name": "Parting Resurrection",
      "cost": "1 PP",
      "description": "Activates at the end of a battle.Revive one ally, restoring them to 1 HP."
    },
    "metaSquads": []
  },
  {
    "id": "nameless-greataxe",
    "name": "Nameless Greataxe",
    "type": "Weapon",
    "icon": "🪓",
    "statBoosts": "Phys Atk +10",
    "acquisition": "Armorer / World Quest / Treasure",
    "isMetaCore": false,
    "metaSquads": []
  },
  {
    "id": "nameless-greatbow",
    "name": "Nameless Greatbow",
    "type": "Weapon",
    "icon": "🏹",
    "statBoosts": "Phys Atk +15",
    "acquisition": "Armorer / World Quest / Treasure",
    "isMetaCore": false,
    "metaSquads": []
  },
  {
    "id": "nameless-greatspear",
    "name": "Nameless Greatspear",
    "type": "Weapon",
    "icon": "🗡️",
    "statBoosts": "Phys Atk +15",
    "acquisition": "Armorer / World Quest / Treasure",
    "isMetaCore": false,
    "metaSquads": []
  },
  {
    "id": "nameless-greatstaff",
    "name": "Nameless Greatstaff",
    "type": "Weapon",
    "icon": "🪄",
    "statBoosts": "Phys Atk +15",
    "acquisition": "Armorer / World Quest / Treasure",
    "isMetaCore": false,
    "metaSquads": []
  },
  {
    "id": "nameless-greatsword",
    "name": "Nameless Greatsword",
    "type": "Weapon",
    "icon": "⚔️",
    "statBoosts": "???",
    "acquisition": "Armorer / World Quest / Treasure",
    "isMetaCore": false,
    "metaSquads": []
  },
  {
    "id": "nameless-guard-s-bow",
    "name": "Nameless Guard's Bow",
    "type": "Weapon",
    "icon": "🏹",
    "statBoosts": "Phys Atk +21, Eagle Eye, Blindness Immunity, Accuracy +20",
    "acquisition": "Watchtower west of Tem Vakran Harbor",
    "isMetaCore": false,
    "grantedSkill": {
      "name": "Eagle Eye",
      "cost": "1 PP",
      "description": "Activates before attacking with an active skill.Makes the user's next attack a truestrike."
    },
    "metaSquads": []
  },
  {
    "id": "nameless-guard-s-spear",
    "name": "Nameless Guard's Spear",
    "type": "Weapon",
    "icon": "🗡️",
    "statBoosts": "Phys Atk +21, Eagle Eye, Blindness Immunity, Accuracy +20",
    "acquisition": "Armorer / World Quest / Treasure",
    "isMetaCore": false,
    "grantedSkill": {
      "name": "Eagle Eye",
      "cost": "1 PP",
      "description": "Activates before attacking with an active skill.Makes the user's next attack a truestrike."
    },
    "metaSquads": []
  },
  {
    "id": "notos-s-sword",
    "name": "Notos's Sword",
    "type": "Weapon",
    "icon": "⚔️",
    "statBoosts": "Phys Atk +25, Base AP +1, Initiative +10, Evasion +10",
    "acquisition": "From Ysveda Harbor, set sail for the secluded shore where you’ll find this monument.",
    "isMetaCore": false,
    "metaSquads": []
  },
  {
    "id": "obsidian-axe",
    "name": "Obsidian Axe",
    "type": "Weapon",
    "icon": "🪓",
    "statBoosts": "Phys Atk +10",
    "acquisition": "Armorer / World Quest / Treasure",
    "isMetaCore": false,
    "metaSquads": []
  },
  {
    "id": "obsidian-bow",
    "name": "Obsidian Bow",
    "type": "Weapon",
    "icon": "🏹",
    "statBoosts": "Phys Atk +15",
    "acquisition": "Armorer / World Quest / Treasure",
    "isMetaCore": false,
    "metaSquads": []
  },
  {
    "id": "obsidian-spear",
    "name": "Obsidian Spear",
    "type": "Weapon",
    "icon": "🗡️",
    "statBoosts": "Phys Atk +15",
    "acquisition": "Armorer / World Quest / Treasure",
    "isMetaCore": false,
    "metaSquads": []
  },
  {
    "id": "obsidian-staff",
    "name": "Obsidian Staff",
    "type": "Weapon",
    "icon": "🪄",
    "statBoosts": "Phys Atk +15",
    "acquisition": "Armorer / World Quest / Treasure",
    "isMetaCore": false,
    "metaSquads": []
  },
  {
    "id": "obsidian-sword",
    "name": "Obsidian Sword",
    "type": "Weapon",
    "icon": "⚔️",
    "statBoosts": "???",
    "acquisition": "Armorer / World Quest / Treasure",
    "isMetaCore": false,
    "metaSquads": []
  },
  {
    "id": "orchis-spear",
    "name": "Orchis Spear",
    "type": "Weapon",
    "icon": "🗡️",
    "statBoosts": "Phys Atk +25, Base PP +1, HP Recovery +30%",
    "acquisition": "Can be obtained by doing the quest:\"Elheim Treasure Map 6\".",
    "isMetaCore": false,
    "metaSquads": []
  },
  {
    "id": "papal-crosier",
    "name": "Papal Crosier",
    "type": "Weapon",
    "icon": "⚔️",
    "statBoosts": "Mag Atk +25, Base AP +1, Base PP +1",
    "acquisition": "Can be obtained for completing the main quest: \"The Holy March\" (Beat Albion Area).",
    "isMetaCore": false,
    "metaSquads": []
  },
  {
    "id": "pestilent-staff",
    "name": "Pestilent Staff",
    "type": "Weapon",
    "icon": "🪄",
    "statBoosts": "Mag Atk +15, Poison Burst",
    "acquisition": "Can be obtained for 8000 G at the Black Market Dealer Shop (Drakenhold).",
    "isMetaCore": false,
    "grantedSkill": {
      "name": "Poison Burst",
      "cost": "1 PP",
      "description": "Activates at the end of a battle.Attack a single enemy with magick.Hits all enemies if target is poisoned."
    },
    "metaSquads": []
  },
  {
    "id": "phantom-knight-s-axe",
    "name": "Phantom Knight's Axe",
    "type": "Weapon",
    "icon": "🪓",
    "statBoosts": "Mag Atk +16, Phantom Attack, Magick Defense +5",
    "acquisition": "Complete the quest:\"The Sigil's Trial, Moderate 2 (Lv.15)\".",
    "isMetaCore": false,
    "grantedSkill": {
      "name": "Phantom Attack",
      "cost": "1 AP",
      "description": "Attack a single enemy.Inflicts 💎PP -1."
    },
    "metaSquads": []
  },
  {
    "id": "phantom-knight-s-bow",
    "name": "Phantom Knight's Bow",
    "type": "Weapon",
    "icon": "🏹",
    "statBoosts": "Mag Atk +16, Phantom Attack, Magick Defense +5",
    "acquisition": "Complete the quest:\"The Sigil's Trial, Advanced 3 (Lv.29)\".",
    "isMetaCore": false,
    "grantedSkill": {
      "name": "Phantom Attack",
      "cost": "1 AP",
      "description": "Attack a single enemy.Inflicts 💎PP -1."
    },
    "metaSquads": []
  },
  {
    "id": "phantom-knight-s-spear",
    "name": "Phantom Knight's Spear",
    "type": "Weapon",
    "icon": "🗡️",
    "statBoosts": "Mag Atk +16, Phantom Attack, Magick Defense +5",
    "acquisition": "Complete the quest:\"The Sigil's Trial, Moderate 1 (Lv.13)\".",
    "isMetaCore": false,
    "grantedSkill": {
      "name": "Phantom Attack",
      "cost": "1 AP",
      "description": "Attack a single enemy.Inflicts 💎PP -1."
    },
    "metaSquads": []
  },
  {
    "id": "phantom-knight-s-staff",
    "name": "Phantom Knight's Staff",
    "type": "Weapon",
    "icon": "🪄",
    "statBoosts": "Mag Atk +16, Phantom Veil, Magick Defense +5",
    "acquisition": "Complete the quest:\"The Sigil's Trial, Zenith (Lv.38)\".",
    "isMetaCore": false,
    "grantedSkill": {
      "name": "Phantom Veil",
      "cost": "1 AP",
      "description": "Grants a row of allies the ability to evade a single attack."
    },
    "metaSquads": []
  },
  {
    "id": "phantom-knight-s-sword",
    "name": "Phantom Knight's Sword",
    "type": "Weapon",
    "icon": "⚔️",
    "statBoosts": "Mag Atk +16, Phantom Attack, Magick Defense +5",
    "acquisition": "Complete the quest:\"The Sigil's Trial, Advanced 1 (Lv.21)\".",
    "isMetaCore": false,
    "grantedSkill": {
      "name": "Phantom Attack",
      "cost": "1 AP",
      "description": "Attack a single enemy.Inflicts 💎PP -1."
    },
    "metaSquads": []
  },
  {
    "id": "pheasant-bow",
    "name": "Pheasant Bow",
    "type": "Weapon",
    "icon": "🏹",
    "statBoosts": "Phys Atk +13, Passive Shatter",
    "acquisition": "Can be obtained for 5000 G at few Armorer Shops (some of them below).",
    "isMetaCore": false,
    "grantedSkill": {
      "name": "Passive Shatter",
      "cost": "1 AP",
      "description": "Attack a single enemy.Inflicts 💎PP -1."
    },
    "metaSquads": []
  },
  {
    "id": "phosphorescent-staff",
    "name": "Phosphorescent Staff",
    "type": "Weapon",
    "icon": "🪄",
    "statBoosts": "Mag Atk +20, Radiant Heal, Initiative +5",
    "acquisition": "Armorer / World Quest / Treasure",
    "isMetaCore": false,
    "grantedSkill": {
      "name": "Radiant Heal",
      "cost": "1 AP",
      "description": "Restore major HP to all allies.Grants the ability to survive one lethal blow.(User cannot evade or use passive skills while charging.)"
    },
    "metaSquads": []
  },
  {
    "id": "piercing-bow",
    "name": "Piercing Bow",
    "type": "Weapon",
    "icon": "🏹",
    "statBoosts": "Phys Atk +14, Armor Shatter",
    "acquisition": "Can be obtained for 3000 G at various Armorer Shops.",
    "isMetaCore": false,
    "grantedSkill": {
      "name": "Armor Shatter",
      "cost": "1 AP",
      "description": "Attack a single enemy.Inflicts Phys. Defense -30%."
    },
    "metaSquads": []
  },
  {
    "id": "piercing-strongbow",
    "name": "Piercing Strongbow",
    "type": "Weapon",
    "icon": "🏹",
    "statBoosts": "Phys Atk +21, Armor Shatter II, Accuracy +5, Critical Rate +20%",
    "acquisition": "Can be obtained for 12000 G at the Gorazmak Town Armorer Shop (Bastorias).",
    "isMetaCore": false,
    "grantedSkill": {
      "name": "Armor Shatter II",
      "cost": "1 AP",
      "description": "Attack a single enemy.Inflicts Phys. Defense -50%."
    },
    "metaSquads": []
  },
  {
    "id": "poison-hex-staff",
    "name": "Poison-Hex Staff",
    "type": "Weapon",
    "icon": "🪄",
    "statBoosts": "Mag Atk +16, Poison Curse",
    "acquisition": "Armorer / World Quest / Treasure",
    "isMetaCore": false,
    "grantedSkill": {
      "name": "Poison Curse",
      "cost": "1 AP",
      "description": "Inflicts Poison on a row of enemies."
    },
    "metaSquads": []
  },
  {
    "id": "precious-rod",
    "name": "Precious Rod",
    "type": "Weapon",
    "icon": "🪄",
    "statBoosts": "Mag Atk +20, Limited Heal",
    "acquisition": "Armorer / World Quest / Treasure",
    "isMetaCore": false,
    "grantedSkill": {
      "name": "Limited Heal",
      "cost": "1 AP",
      "description": "Restore minor HP to all allies above their limits.Potency increases with fewer allies (Maximum: +200)(Can heal up to 150% above maximum HP.)"
    },
    "metaSquads": []
  },
  {
    "id": "purifier",
    "name": "Purifier",
    "type": "Weapon",
    "icon": "⚔️",
    "statBoosts": "Mag Atk +20, Sacred Cure",
    "acquisition": "Can be obtained for 500 CC (Coliseum Coins) at the Coliseum Prize Exchange.",
    "isMetaCore": false,
    "grantedSkill": {
      "name": "'''Protection'''",
      "cost": "1 PP",
      "description": "Activates after an ally is debuffed.Remove all debuffts from a row of allies.Grants targets immunity to one debuff."
    },
    "metaSquads": []
  },
  {
    "id": "pursuant-s-blade",
    "name": "Pursuant's Blade",
    "type": "Weapon",
    "icon": "⚔️",
    "statBoosts": "Phys Atk +20, Pursuit",
    "acquisition": "Can be obtained for 10000 G at the Gorazmak Town Armorer Shop.",
    "isMetaCore": true,
    "grantedSkill": {
      "name": "Pursuit",
      "cost": "1 PP",
      "description": "Activates after an enemy attacks (Active).Follow-up attack a single enemy."
    },
    "metaSquads": []
  },
  {
    "id": "quartz-rod",
    "name": "Quartz Rod",
    "type": "Weapon",
    "icon": "🪄",
    "statBoosts": "Mag Atk +15, Gravity",
    "acquisition": "Armorer / World Quest / Treasure",
    "isMetaCore": false,
    "grantedSkill": {
      "name": "Gravity",
      "cost": "1 AP",
      "description": "Attack all enemies.Deals damage equal to 50% of each target's HP.(User cannot evade or use passive skills while charging.)"
    },
    "metaSquads": []
  },
  {
    "id": "quince-bow",
    "name": "Quince Bow",
    "type": "Weapon",
    "icon": "🏹",
    "statBoosts": "Phys Atk +25, Base PP +1, HP Recovery +30%",
    "acquisition": "Can be obtained by doing the quest:\"Bastorias Treasure Map 6\".",
    "isMetaCore": false,
    "metaSquads": []
  },
  {
    "id": "raven-staff",
    "name": "Raven Staff",
    "type": "Weapon",
    "icon": "🪄",
    "statBoosts": "Mag Atk +20",
    "acquisition": "Armorer / World Quest / Treasure",
    "isMetaCore": false,
    "metaSquads": []
  },
  {
    "id": "recruit-s-handaxe",
    "name": "Recruit's Handaxe",
    "type": "Weapon",
    "icon": "🪓",
    "statBoosts": "Phys Atk +11, Max HP +3, User Earns +20% EXP",
    "acquisition": "Armorer / World Quest / Treasure",
    "isMetaCore": false,
    "metaSquads": []
  },
  {
    "id": "recruit-s-shortbow",
    "name": "Recruit's Shortbow",
    "type": "Weapon",
    "icon": "🏹",
    "statBoosts": "Phys Atk +11, Max HP +3, User Earns +20% EXP",
    "acquisition": "Reward for completing level 3 quest A Solitary Resistance.",
    "isMetaCore": false,
    "metaSquads": []
  },
  {
    "id": "recruit-s-shortspear",
    "name": "Recruit's Shortspear",
    "type": "Weapon",
    "icon": "🗡️",
    "statBoosts": "Phys Atk +11, Max HP +3, User Earns +20% EXP",
    "acquisition": "Armorer / World Quest / Treasure",
    "isMetaCore": false,
    "metaSquads": []
  },
  {
    "id": "recruit-s-shortsword",
    "name": "Recruit's Shortsword",
    "type": "Weapon",
    "icon": "⚔️",
    "statBoosts": "Phys Atk +11, Max HP +3, User Earns +20% EXP",
    "acquisition": "Armorer / World Quest / Treasure",
    "isMetaCore": false,
    "metaSquads": []
  },
  {
    "id": "recruit-s-staff",
    "name": "Recruit's Staff",
    "type": "Weapon",
    "icon": "🪄",
    "statBoosts": "Mag Atk +11, Max HP +3, User Earns +20% EXP",
    "acquisition": "Can be obtained for 1500 G at various Armorer Shops (complete list below).",
    "isMetaCore": false,
    "metaSquads": []
  },
  {
    "id": "red-rose",
    "name": "Red Rose",
    "type": "Weapon",
    "icon": "⚔️",
    "statBoosts": "Phys Atk +20, Firestorm, Base AP +1, Critical Damage +15%",
    "acquisition": "Armorer / World Quest / Treasure",
    "isMetaCore": false,
    "grantedSkill": {
      "name": "Firestorm",
      "cost": "1 AP",
      "description": "Attack a single enemy.Inflicts Burn.+50 potency v. frozen targets."
    },
    "metaSquads": []
  },
  {
    "id": "red-bark-staff",
    "name": "Red-Bark Staff",
    "type": "Weapon",
    "icon": "🪄",
    "statBoosts": "Mag Atk +21, Passive Seal Immunity",
    "acquisition": "Armorer / World Quest / Treasure",
    "isMetaCore": false,
    "metaSquads": []
  },
  {
    "id": "replica-alminster",
    "name": "Replica Alminster",
    "type": "Weapon",
    "icon": "⚔️",
    "statBoosts": "Phys Atk +22, Accuracy +30, AP -1",
    "acquisition": "Armorer / World Quest / Treasure",
    "isMetaCore": false,
    "metaSquads": []
  },
  {
    "id": "ringed-staff",
    "name": "Ringed Staff",
    "type": "Weapon",
    "icon": "🪄",
    "statBoosts": "Mag Atk +20, Circle Heal, Initiative +5",
    "acquisition": "Armorer / World Quest / Treasure",
    "isMetaCore": false,
    "grantedSkill": {
      "name": "Circle Heal",
      "cost": "1 AP",
      "description": "Restore major HP to all allies.Removes all of target's debuffs.(User cannot evade or use passive skills while charging.)"
    },
    "metaSquads": []
  },
  {
    "id": "rose-knight-axe",
    "name": "Rose Knight Axe",
    "type": "Weapon",
    "icon": "🪓",
    "statBoosts": "Phys Atk +14, Initiative +3, Accuracy +10",
    "acquisition": "Starting equipment of Fran.",
    "isMetaCore": false,
    "metaSquads": []
  },
  {
    "id": "rose-knight-hammer",
    "name": "Rose Knight Hammer",
    "type": "Weapon",
    "icon": "🪓",
    "statBoosts": "Phys Atk +15, Initiative +3, Accuracy +10",
    "acquisition": "Starting equipment of Kitra.",
    "isMetaCore": false,
    "metaSquads": []
  },
  {
    "id": "rose-knight-sword",
    "name": "Rose Knight Sword",
    "type": "Weapon",
    "icon": "⚔️",
    "statBoosts": "Phys Atk +14, Initiative +3, Accuracy +10",
    "acquisition": "Starting equipment of Miriam.",
    "isMetaCore": false,
    "metaSquads": []
  },
  {
    "id": "rosularis-sword",
    "name": "Rosularis Sword",
    "type": "Weapon",
    "icon": "⚔️",
    "statBoosts": "Phys Atk +25, Base PP +1, HP Recovery +30%",
    "acquisition": "Can be obtained by doing the quest:\"Cornia Treasure Map 6\".",
    "isMetaCore": false,
    "metaSquads": []
  },
  {
    "id": "royal-saber",
    "name": "Royal Saber",
    "type": "Weapon",
    "icon": "⚔️",
    "statBoosts": "Phys Atk +18, Initiative +5",
    "acquisition": "Recruit Gilbert",
    "isMetaCore": false,
    "metaSquads": []
  },
  {
    "id": "runic-axe",
    "name": "Runic Axe",
    "type": "Weapon",
    "icon": "🪓",
    "statBoosts": "Phys Atk +8, Mag Atk +14, Magick Attack, Magick Defense +3",
    "acquisition": "Armorer / World Quest / Treasure",
    "isMetaCore": false,
    "grantedSkill": {
      "name": "Magick Attack",
      "cost": "1 AP",
      "description": "Attack a single enemy."
    },
    "metaSquads": []
  },
  {
    "id": "runic-bow",
    "name": "Runic Bow",
    "type": "Weapon",
    "icon": "🏹",
    "statBoosts": "Phys Atk +8, Mag Atk +14, Magick Attack, Magick Defense +3",
    "acquisition": "Armorer / World Quest / Treasure",
    "isMetaCore": false,
    "grantedSkill": {
      "name": "Magick Attack",
      "cost": "1 AP",
      "description": "Attack a single enemy."
    },
    "metaSquads": []
  },
  {
    "id": "runic-spear",
    "name": "Runic Spear",
    "type": "Weapon",
    "icon": "🗡️",
    "statBoosts": "Phys Atk +8, Mag Atk +14, Magick Attack, Magick Defense +3",
    "acquisition": "Can be obtained for 12000 G at few Armorer Shops.",
    "isMetaCore": true,
    "grantedSkill": {
      "name": "Magick Attack",
      "cost": "1 AP",
      "description": "Attack a single enemy."
    },
    "metaSquads": []
  },
  {
    "id": "runic-sword",
    "name": "Runic Sword",
    "type": "Weapon",
    "icon": "⚔️",
    "statBoosts": "Phys Atk +8, Mag Atk +14, Magick Attack, Magick Defense +3",
    "acquisition": "Armorer / World Quest / Treasure",
    "isMetaCore": true,
    "grantedSkill": {
      "name": "Magick Attack",
      "cost": "1 AP",
      "description": "Attack a single enemy."
    },
    "metaSquads": []
  },
  {
    "id": "sacral-axe",
    "name": "Sacral Axe",
    "type": "Weapon",
    "icon": "🪓",
    "statBoosts": "Phys Atk +25, Affliction Immunity, Heal 20% HP when using Active Skill",
    "acquisition": "Drakenhold Sanctuary",
    "isMetaCore": false,
    "metaSquads": []
  },
  {
    "id": "sacral-bow",
    "name": "Sacral Bow",
    "type": "Weapon",
    "icon": "🏹",
    "statBoosts": "Phys Atk +25, Affliction Immunity, Heal 20% HP when using Active Skill",
    "acquisition": "Bastorias Sanctuary",
    "isMetaCore": false,
    "metaSquads": []
  },
  {
    "id": "sacral-rod",
    "name": "Sacral Rod",
    "type": "Weapon",
    "icon": "🪄",
    "statBoosts": "Mag Atk +25, Affliction Immunity, Heal 20% HP when using Active Skill",
    "acquisition": "Albion Sanctuary",
    "isMetaCore": false,
    "metaSquads": []
  },
  {
    "id": "sacral-spear",
    "name": "Sacral Spear",
    "type": "Weapon",
    "icon": "🗡️",
    "statBoosts": "Phys Atk +25, Affliction Immunity, Heal 20% HP when using Active Skill",
    "acquisition": "Elheim Sanctuary",
    "isMetaCore": false,
    "metaSquads": []
  },
  {
    "id": "angel-hunter-s-buckler",
    "name": "Angel Hunter's Buckler",
    "type": "Shield",
    "icon": "🛡️",
    "statBoosts": "Phys Def +5, Aerial Guard, Guard Efficiency +25%",
    "acquisition": "Can be bought for 8000 G at few Armorer Shops.",
    "isMetaCore": false,
    "grantedSkill": {
      "name": "Aerial Guard",
      "cost": "1 PP",
      "description": "Activates before being hit by a physickal attack.Block an enemy attack with a medium guard.Becomes an heavy guard and grants the user+1 💎PP if the enemy is flying."
    },
    "metaSquads": []
  },
  {
    "id": "arrowshield",
    "name": "Arrowshield",
    "type": "Shield",
    "icon": "🛡️",
    "statBoosts": "Phys Def +2, Arrow Cover, Guard Efficiency +25%",
    "acquisition": "Armorer / World Quest / Treasure",
    "isMetaCore": false,
    "grantedSkill": {
      "name": "Arrow Cover",
      "cost": "1 PP",
      "description": "Activates before an ally is hit by a ranged phys. attack.Cover an ally and nullify all damage."
    },
    "metaSquads": []
  },
  {
    "id": "azure-crest-shield",
    "name": "Azure Crest Shield",
    "type": "Shield",
    "icon": "🛡️",
    "statBoosts": "Phys Def +5, Guard Efficiency +25%, Base PP +1",
    "acquisition": "Can be obtained as a gift from an old woman in the house after fixing the bridge in NE Baumratte in Drakenhold",
    "isMetaCore": true,
    "metaSquads": []
  },
  {
    "id": "baroque-shield",
    "name": "Baroque Shield",
    "type": "Shield",
    "icon": "🛡️",
    "statBoosts": "Phys Def +4, Guard Efficiency +25%, Accuracy +5",
    "acquisition": "Obtained during level 6 quest Province of Famine, after defeating Gaston's unit.",
    "isMetaCore": false,
    "metaSquads": []
  },
  {
    "id": "battler-s-shield",
    "name": "Battler's Shield",
    "type": "Shield",
    "icon": "🛡️",
    "statBoosts": "Phys Def +2, Guard Efficiency +25%, Physickal Attack +2",
    "acquisition": "Starting equipment of Adel.",
    "isMetaCore": false,
    "metaSquads": []
  },
  {
    "id": "beast-hunter-s-buckler",
    "name": "Beast Hunter's Buckler",
    "type": "Shield",
    "icon": "🛡️",
    "statBoosts": "Phys Def +6, Bestral Guard, Guard Efficiency +25%",
    "acquisition": "Can be bought at Zagavona Harbor for 8000 G.",
    "isMetaCore": false,
    "grantedSkill": {
      "name": "Bestral Guard",
      "cost": "1 PP",
      "description": "Activates before being hit by a physickal attack.Block an enemy attack with a medium guard.Becomes an heavy guard and grants the user+1 💎PP if the enemy is a bestral."
    },
    "metaSquads": []
  },
  {
    "id": "black-iron-shield",
    "name": "Black-Iron Shield",
    "type": "Shield",
    "icon": "🛡️",
    "statBoosts": "Phys Def +6, Guard Efficiency +25%, Critickal Rate +4%",
    "acquisition": "Can be bought for 3000 G at various Armorer Shops (some of them below).",
    "isMetaCore": false,
    "metaSquads": []
  },
  {
    "id": "blessed-roundshield",
    "name": "Blessed Roundshield",
    "type": "Shield",
    "icon": "🛡️",
    "statBoosts": "Phys Def +2, Guard Efficiency +25%, Heal 10% HP when using Active Skill, Max HP +5",
    "acquisition": "Can be bought for 5000 G at few Armorer Shops.",
    "isMetaCore": false,
    "metaSquads": []
  },
  {
    "id": "blue-rose-shield",
    "name": "Blue Rose Shield",
    "type": "Shield",
    "icon": "🛡️",
    "statBoosts": "Phys Def +6, Royal Guard, Guard Efficiency +25%, Base PP +1",
    "acquisition": "Armorer / World Quest / Treasure",
    "isMetaCore": true,
    "grantedSkill": {
      "name": "Royal Guard",
      "cost": "1 PP",
      "description": "Activatesbefore being hit by a physickal attack.Block an enemy attack with a medium guard.User recovers 25% HP."
    },
    "metaSquads": []
  },
  {
    "id": "bronze-shield",
    "name": "Bronze Shield",
    "type": "Shield",
    "icon": "🛡️",
    "statBoosts": "Phys Def +3, Guard Efficiency +25%",
    "acquisition": "Starting Equipment of Alain, Clive, and some other game characters.",
    "isMetaCore": false,
    "metaSquads": []
  },
  {
    "id": "carnat-shield",
    "name": "Carnat Shield",
    "type": "Shield",
    "icon": "🛡️",
    "statBoosts": "Phys Def +6, Guard Efficiency +25%, Initiative +1",
    "acquisition": "Can be bought for 4000 G at few Armorer Shops (some of them below).",
    "isMetaCore": false,
    "metaSquads": []
  },
  {
    "id": "cavalry-hunter-s-buckler",
    "name": "Cavalry Hunter's Buckler",
    "type": "Shield",
    "icon": "🛡️",
    "statBoosts": "Phys Def +5, Cavalry Guard, Guard Efficiency +25%",
    "acquisition": "Can be bought for 8000 G at few Armorer Shops (some of them below).",
    "isMetaCore": false,
    "grantedSkill": {
      "name": "Cavalry Guard",
      "cost": "1 PP",
      "description": "Activates before being hit by a physickal attack.Block an enemy attack with a medium guard.Becomes a heavy Guard and grants the user+1 💎PP if the enemy is cavalry."
    },
    "metaSquads": []
  },
  {
    "id": "chivalric-shield",
    "name": "Chivalric Shield",
    "type": "Shield",
    "icon": "🛡️",
    "statBoosts": "Phys Def +6, Guard Efficiency +25%, Stun Immunity, Guard Seal Immunity",
    "acquisition": "Can be bought at Voitarafi Town for 5000 G.",
    "isMetaCore": false,
    "metaSquads": []
  },
  {
    "id": "dragonbone-shield",
    "name": "Dragonbone Shield",
    "type": "Shield",
    "icon": "🛡️",
    "statBoosts": "Phys Def +5, Guard Efficiency +25%, Base PP +1, Initiative -10",
    "acquisition": "Can be obtained for 8000 G at few Armorer shops (some of them below).",
    "isMetaCore": false,
    "metaSquads": []
  },
  {
    "id": "golden-ram-shield",
    "name": "Golden Ram Shield",
    "type": "Shield",
    "icon": "🛡️",
    "statBoosts": "Phys Def +5, Guard Efficiency +25%, Max HP +10, Stun Immunity",
    "acquisition": "Armorer / World Quest / Treasure",
    "isMetaCore": false,
    "metaSquads": []
  },
  {
    "id": "greatwood-shield",
    "name": "Greatwood Shield",
    "type": "Shield",
    "icon": "🛡️",
    "statBoosts": "Phys Def +4, Guard Efficiency +25%, Magick Defense +2",
    "acquisition": "Can be bought at Voinikola Harbor for 4000 G.",
    "isMetaCore": false,
    "metaSquads": []
  },
  {
    "id": "guard-s-shield",
    "name": "Guard's Shield",
    "type": "Shield",
    "icon": "🛡️",
    "statBoosts": "Phys Def +4, Quick Guard, Guard Efficiency +25%",
    "acquisition": "Can be bought at Lornivisch Harbor for 5000 G.",
    "isMetaCore": false,
    "grantedSkill": {
      "name": "Quick Guard",
      "cost": "1 PP",
      "description": "Activates before being hit by a physickal attack.Block an enemy attack with a medium guard."
    },
    "metaSquads": []
  },
  {
    "id": "heavenswing-shield",
    "name": "Heavenswing Shield",
    "type": "Shield",
    "icon": "🛡️",
    "statBoosts": "Phys Def +5, Guard Efficiency +25%, Accuracy +10, Evasion +10",
    "acquisition": "Armorer / World Quest / Treasure",
    "isMetaCore": false,
    "metaSquads": []
  },
  {
    "id": "hoarfrost-shield",
    "name": "Hoarfrost Shield",
    "type": "Shield",
    "icon": "🛡️",
    "statBoosts": "Phys Def +5, Guard Efficiency +25%, Freeze Immunity",
    "acquisition": "Can be bought at Lornivisch Harbor for 3000 G.",
    "isMetaCore": false,
    "metaSquads": []
  },
  {
    "id": "holy-knight-s-shield",
    "name": "Holy Knight's Shield",
    "type": "Shield",
    "icon": "🛡️",
    "statBoosts": "Phys Def +7, Holy Guard, Guard Efficiency +25%, Heal 10% HP when using Active Skill",
    "acquisition": "Can be obtained for 15 Divine Shards at the Divine Shard Exchange shop.",
    "isMetaCore": false,
    "grantedSkill": {
      "name": "Holy Guard",
      "cost": "1 PP",
      "description": "Activates before being hit by a physickal attack.Block an enemy attack with a medium guard.Prevents debuffs."
    },
    "metaSquads": []
  },
  {
    "id": "holy-unicorn-shield",
    "name": "Holy Unicorn Shield",
    "type": "Shield",
    "icon": "🛡️",
    "statBoosts": "Phys Def +8, Guard Efficiency +25%, Debuff Immunity",
    "acquisition": "Can be obtained for completing the main quest: \"Unicorn Overlord\" (The last main story quest).",
    "isMetaCore": true,
    "metaSquads": []
  },
  {
    "id": "hunter-s-buckler",
    "name": "Hunter's Buckler",
    "type": "Shield",
    "icon": "🛡️",
    "statBoosts": "Phys Def +6, Guard Efficiency +25%, Follow-up Skills Deal +20 Damage, Critical Rate +5%",
    "acquisition": "Can be bought at Proszruni Town for 5000 G.",
    "isMetaCore": false,
    "metaSquads": []
  },
  {
    "id": "icefall-shield",
    "name": "Icefall Shield",
    "type": "Shield",
    "icon": "🛡️",
    "statBoosts": "Phys Def +7, Guard Efficiency +25%, Base PP +1, Guard Rate -20%",
    "acquisition": "Can be obtained at Mostonega Town for 12000 G.",
    "isMetaCore": false,
    "metaSquads": []
  },
  {
    "id": "iron-shield",
    "name": "Iron Shield",
    "type": "Shield",
    "icon": "🛡️",
    "statBoosts": "Phys Def +5, Guard Efficiency +25%",
    "acquisition": "Can be bought for 1500 G at various Armorer Shops.",
    "isMetaCore": false,
    "metaSquads": []
  },
  {
    "id": "ironclad-buckler",
    "name": "Ironclad Buckler",
    "type": "Shield",
    "icon": "🛡️",
    "statBoosts": "Phys Def +5, Wall, Guard Efficiency +25%",
    "acquisition": "Can be bought for 5000 G at few Armorer Shops.",
    "isMetaCore": false,
    "grantedSkill": {
      "name": "Wall",
      "cost": "1 AP",
      "description": "Grants the user a buff that negatesone physickal attack."
    },
    "metaSquads": []
  },
  {
    "id": "kaikias-s-shield",
    "name": "Kaikias's Shield",
    "type": "Shield",
    "icon": "🛡️",
    "statBoosts": "Phys Def +8, Guard Rate +30%, Guard Efficiency +25%, Initiative +10",
    "acquisition": "Found in Bastorias / Elheim treasure or Armorer Shops.",
    "isMetaCore": true,
    "grantedSkill": {
      "name": "Hastened Cover",
      "cost": "1 PP",
      "description": "Activates before an ally is attacked.Cover an ally with a medium guard.Grants that ally max Initiative for their next action."
    },
    "metaSquads": []
  },
  {
    "id": "luminous-shield",
    "name": "Luminous Shield",
    "type": "Shield",
    "icon": "🛡️",
    "statBoosts": "Phys Def +6, Guard Efficiency +25%, Poison Immunity, Blindness Immunity",
    "acquisition": "Can be bought at Warnby Town for 5000 G.",
    "isMetaCore": true,
    "metaSquads": []
  },
  {
    "id": "manalith-buckler",
    "name": "Manalith Buckler",
    "type": "Shield",
    "icon": "🛡️",
    "statBoosts": "Phys Def +5, Magick Wall, Guard Efficiency +25%",
    "acquisition": "Can be bought for 10000 G at few Armorer Shops (some of them below).",
    "isMetaCore": false,
    "grantedSkill": {
      "name": "Magick Wall",
      "cost": "1 AP",
      "description": "Grants the user a buff that negatesone magick attack or one affliction."
    },
    "metaSquads": []
  },
  {
    "id": "mercenary-s-shield",
    "name": "Mercenary's Shield",
    "type": "Shield",
    "icon": "🛡️",
    "statBoosts": "Phys Def +6, Vengeful Guard, Guard Efficiency +25%, Critical Rate +5%",
    "acquisition": "Can be bought at Drynarot Town for 10000 G.",
    "isMetaCore": false,
    "grantedSkill": {
      "name": "Vengeful Guard",
      "cost": "1 PP",
      "description": "Activates before being hit by a physickal attack.Block an enemy attack with a medium guard.Grants the user +20% Phys. Attack. (Effect stacks.)"
    },
    "metaSquads": []
  },
  {
    "id": "moonlight-shield",
    "name": "Moonlight Shield",
    "type": "Shield",
    "icon": "🛡️",
    "statBoosts": "Phys Def +6, Nocturnal Guard, Guard Efficiency +25%",
    "acquisition": "Complete the quest:\"Bastorias Treasure Map 1\".",
    "isMetaCore": false,
    "grantedSkill": {
      "name": "Nocturnal Guard",
      "cost": "1 PP",
      "description": "Activates before being hit by a physickal attack.Block an enemy attack with a medium guard.Grants the user +1 💎PP at night."
    },
    "metaSquads": []
  },
  {
    "id": "nameless-guard-s-shield",
    "name": "Nameless Guard's Shield",
    "type": "Shield",
    "icon": "🛡️",
    "statBoosts": "Phys Def +6, Radiant Cover, Guard Efficiency +25%, Blindness Immunity",
    "acquisition": "Armorer / World Quest / Treasure",
    "isMetaCore": false,
    "grantedSkill": {
      "name": "Radiant Cover",
      "cost": "1 PP",
      "description": "Activates before an ally is attacked.Cover an ally with a medium guard.Makes that ally's next attack a truestrike."
    },
    "metaSquads": []
  },
  {
    "id": "obsidian-shield",
    "name": "Obsidian Shield",
    "type": "Shield",
    "icon": "🛡️",
    "statBoosts": "Guard Efficiency +25%",
    "acquisition": "Armorer / World Quest / Treasure",
    "isMetaCore": false,
    "metaSquads": []
  },
  {
    "id": "parrying-shield",
    "name": "Parrying Shield",
    "type": "Shield",
    "icon": "🛡️",
    "statBoosts": "Phys Def +2, Parry, Guard Efficiency +25%, Counterattack Skills Deal +50 Damage",
    "acquisition": "Can be bought at Mostonega Town for 12000 G.",
    "isMetaCore": true,
    "grantedSkill": {
      "name": "Parry",
      "cost": "1 AP",
      "description": "Activates before being hit by a melee attack.Negate melee damage for a single hit.Grants the user +1 💎AP."
    },
    "metaSquads": []
  },
  {
    "id": "phantom-knight-s-shield",
    "name": "Phantom Knight's Shield",
    "type": "Shield",
    "icon": "🛡️",
    "statBoosts": "Guard Efficiency +25%, Magick Defense +20",
    "acquisition": "Complete the quest:\"The Sigil's Trial, Beginner 2 (Lv.10)\".",
    "isMetaCore": false,
    "metaSquads": []
  },
  {
    "id": "recruit-s-shield",
    "name": "Recruit's Shield",
    "type": "Shield",
    "icon": "🛡️",
    "statBoosts": "Phys Def +3, Guard Efficiency +25%, Max HP +3, User Earns +10% EXP",
    "acquisition": "Armorer / World Quest / Treasure",
    "isMetaCore": false,
    "metaSquads": []
  },
  {
    "id": "scarlet-crest-shield",
    "name": "Scarlet Crest Shield",
    "type": "Shield",
    "icon": "🛡️",
    "statBoosts": "Phys Def +6, Guard Efficiency +25%, Base♦️AP +1",
    "acquisition": "Can be bought at Gran Corrine for 15000 G at the Armorer Shop.",
    "isMetaCore": false,
    "metaSquads": []
  },
  {
    "id": "searing-shield",
    "name": "Searing Shield",
    "type": "Shield",
    "icon": "🛡️",
    "statBoosts": "Phys Def +5, Guard Efficiency +25%, Burn Immunity",
    "acquisition": "Can be bought for 3000 G at few Armorer shops (some of them below).",
    "isMetaCore": false,
    "metaSquads": []
  },
  {
    "id": "spellsteel-shield",
    "name": "Spellsteel Shield",
    "type": "Shield",
    "icon": "🛡️",
    "statBoosts": "Phys Def +6, Guard Efficiency +25%, Magick Defense +5",
    "acquisition": "Can be bought at Dachananya Town for 6000 G.",
    "isMetaCore": false,
    "metaSquads": []
  },
  {
    "id": "squire-s-shield",
    "name": "Squire's Shield",
    "type": "Shield",
    "icon": "🛡️",
    "statBoosts": "Phys Def +5, Quick Cover, Guard Efficiency +25%",
    "acquisition": "Can be bought for 10000 G at few Armorer Shops (some of them below).",
    "isMetaCore": false,
    "grantedSkill": {
      "name": "Quick Cover",
      "cost": "1 PP",
      "description": "Activates before an ally is attacked.Cover an ally with a medium guard."
    },
    "metaSquads": []
  },
  {
    "id": "steel-shield",
    "name": "Steel Shield",
    "type": "Shield",
    "icon": "🛡️",
    "statBoosts": "Phys Def +7, Guard Efficiency +25%",
    "acquisition": "Can be bought at Lornivisch Harbor for 3000 G.",
    "isMetaCore": false,
    "metaSquads": []
  },
  {
    "id": "templar-s-shield",
    "name": "Templar's Shield",
    "type": "Shield",
    "icon": "🛡️",
    "statBoosts": "Phys Def +5, Guard Efficiency +25%, HP Recovery +20%",
    "acquisition": "Starting equipment of Josef.",
    "isMetaCore": false,
    "metaSquads": []
  },
  {
    "id": "twin-dragon-shield",
    "name": "Twin Dragon Shield",
    "type": "Shield",
    "icon": "🛡️",
    "statBoosts": "Phys Def +6, Guard Efficiency +25%, Burn Immunity, Freeze Immunity",
    "acquisition": "Complete the quest:\"Drakenhold Treasure Map 2\".",
    "isMetaCore": false,
    "metaSquads": []
  },
  {
    "id": "unfettered-shield",
    "name": "Unfettered Shield",
    "type": "Shield",
    "icon": "🛡️",
    "statBoosts": "Phys Def +6, Guard Efficiency +25%, Guard Seal Immunity, Passive Seal Immunity",
    "acquisition": "Can be bought at Tem Vakram Harbor for 5000 G.",
    "isMetaCore": false,
    "metaSquads": []
  },
  {
    "id": "unyielding-shield",
    "name": "Unyielding Shield",
    "type": "Shield",
    "icon": "🛡️",
    "statBoosts": "Phys Def +7, Enduring Guard, Guard Efficiency +25%",
    "acquisition": "Can be obtained for 10000 G at the Alledge Town Armorer Shop.",
    "isMetaCore": false,
    "grantedSkill": {
      "name": "Enduring Guard",
      "cost": "1 PP",
      "description": "Activates before being hit by a physickal attack.Block an enemy attack with a heavy guard.Grants the user a buff to endure one lethal blow."
    },
    "metaSquads": []
  },
  {
    "id": "viper-shield",
    "name": "Viper Shield",
    "type": "Shield",
    "icon": "🛡️",
    "statBoosts": "Phys Def +5, Guard Efficiency +25%, Poison immunity",
    "acquisition": "Can be bought for 3000 G at various Armorer Shops.",
    "isMetaCore": false,
    "metaSquads": []
  },
  {
    "id": "vorpal-shield",
    "name": "Vorpal Shield",
    "type": "Shield",
    "icon": "🛡️",
    "statBoosts": "Phys Def +7, Guard Efficiency +25%, Max HP +5, Initiative +3",
    "acquisition": "Can be bought at Lornivisch Harbor for 6000 G.",
    "isMetaCore": false,
    "metaSquads": []
  },
  {
    "id": "watchman-s-buckler",
    "name": "Watchman's Buckler",
    "type": "Shield",
    "icon": "🛡️",
    "statBoosts": "Phys Def +4, Guard Efficiency +25%, Blindness Immunity",
    "acquisition": "Armorer / World Quest / Treasure",
    "isMetaCore": false,
    "metaSquads": []
  },
  {
    "id": "white-knight-s-shield",
    "name": "White Knight's Shield",
    "type": "Shield",
    "icon": "🛡️",
    "statBoosts": "Phys Def +4, Lifeshare, Guard Efficiency +25%, Max HP +15",
    "acquisition": "Armorer / World Quest / Treasure",
    "isMetaCore": false,
    "grantedSkill": {
      "name": "Lifeshare",
      "cost": "1 PP",
      "description": "Activates after an ally is hit by an attack.Share HP with an ally.(50% of the user's HP)."
    },
    "metaSquads": []
  },
  {
    "id": "white-rider-s-shield",
    "name": "White Rider's Shield",
    "type": "Shield",
    "icon": "🛡️",
    "statBoosts": "Phys Def +7, Guard Efficiency +25%, Stun Immunity, Guard Seal Immunity",
    "acquisition": "Armorer / World Quest / Treasure",
    "isMetaCore": false,
    "metaSquads": []
  },
  {
    "id": "wingcrest-shield",
    "name": "Wingcrest Shield",
    "type": "Shield",
    "icon": "🛡️",
    "statBoosts": "Phys Def +7, Guard Efficiency +25%, Base PP +1, Critical Rate -20%",
    "acquisition": "Can be obtained Burbury Town for 14000 G.",
    "isMetaCore": false,
    "metaSquads": []
  },
  {
    "id": "zenoiran-knight-s-shield",
    "name": "Zenoiran Knight's Shield",
    "type": "Shield",
    "icon": "🛡️",
    "statBoosts": "Phys Def +6, Enduring Guard, Guard Efficiency +25%, Max HP +15",
    "acquisition": "Can be obtained for 10000 G at the Black Market Dealer Shop (Albion).",
    "isMetaCore": false,
    "grantedSkill": {
      "name": "Enduring Guard",
      "cost": "1 PP",
      "description": "Activates before being hit by a physickal attack.Block an enemy attack with a heavy guard.Grants the user a buff to endure one lethal blow."
    },
    "metaSquads": []
  },
  {
    "id": "zenoiran-shield",
    "name": "Zenoiran Shield",
    "type": "Shield",
    "icon": "🛡️",
    "statBoosts": "Phys Def +3, Guard Efficiency +25%, Max HP +10",
    "acquisition": "Can be obtained for 5000 G at the Black Market Dealer Shop (Drakenhold).",
    "isMetaCore": false,
    "metaSquads": []
  },
  {
    "id": "acrobat-s-shoes",
    "name": "Acrobat's Shoes",
    "type": "Accessory",
    "icon": "👢",
    "statBoosts": "Phys Def +1, Impetus Stance",
    "acquisition": "Can be obtained for 10000 G at few Armorer Shops.",
    "isMetaCore": false,
    "grantedSkill": {
      "name": "Impetus Stance",
      "cost": "1 AP",
      "description": "Activates at the start of battle.Grants the user +1 💎AP and -50% Attack."
    },
    "metaSquads": []
  },
  {
    "id": "amethyst-pendant",
    "name": "Amethyst Pendant",
    "type": "Accessory",
    "icon": "📿",
    "statBoosts": "Base AP +1, Base PP +1",
    "acquisition": "Can be obtained for 80000 G at the Gran Corrine Armorer Shop at Cornia.",
    "isMetaCore": true,
    "metaSquads": []
  },
  {
    "id": "ancient-crown",
    "name": "Ancient Crown",
    "type": "Accessory",
    "icon": "👑",
    "statBoosts": "Base PP +1, All Stats +5",
    "acquisition": "Can be obtained by doing the quest \"Bastorias Treasure Map 5\".",
    "isMetaCore": true,
    "metaSquads": []
  },
  {
    "id": "angel-plume",
    "name": "Angel Plume",
    "type": "Accessory",
    "icon": "🪶",
    "statBoosts": "Tailwind, Initiative +20",
    "acquisition": "Can be obtained for 20 Divine Shards at the Divine Shard Exchange shop.",
    "isMetaCore": true,
    "grantedSkill": {
      "name": "Tailwing",
      "cost": "1 PP",
      "description": "Activates after using an active skill.Grants a row of allies +10 Initiative. (Effect stacks.)Effect is doubled for flying targets."
    },
    "metaSquads": []
  },
  {
    "id": "archbishop-s-mitre",
    "name": "Archbishop's Mitre",
    "type": "Accessory",
    "icon": "👑",
    "statBoosts": "Phys Def +1, Mag Def +1, Relic Heal, Magick Attack +5",
    "acquisition": "Can be bought for 10000 G at the Heavensriver Town Armorer Shop.",
    "isMetaCore": false,
    "grantedSkill": {
      "name": "Relic Heal",
      "cost": "1 PP",
      "description": "Activates after an ally is hit by an attack.Restore moderate HP to an ally.Grants HP regeneration."
    },
    "metaSquads": []
  },
  {
    "id": "armored-gauntlets",
    "name": "Armored Gauntlets",
    "type": "Accessory",
    "icon": "🧤",
    "statBoosts": "Phys Def +3, Binding Guard, Physickal Attack +3",
    "acquisition": "Can be bought for 10000 G at the Devolpis Harbor Armorer Shop.",
    "isMetaCore": false,
    "grantedSkill": {
      "name": "Binding Guard",
      "cost": "1 PP",
      "description": "Activates before attacking with an active skill.User's next attack will inflict Guard Seal."
    },
    "metaSquads": []
  },
  {
    "id": "aurora-ring",
    "name": "Aurora Ring",
    "type": "Accessory",
    "icon": "💍",
    "statBoosts": "Phys Def +1, Mighty Shield",
    "acquisition": "Can be obtained for ??? CC (Coliseum Coins) at the Coliseum Prize Echange in Baumratte.",
    "isMetaCore": false,
    "grantedSkill": {
      "name": "Mighty Shield",
      "cost": "1 PP",
      "description": "Activates before an ally is attacked.Negate the next damage dealt to an ally."
    },
    "metaSquads": []
  },
  {
    "id": "awakening-amulet",
    "name": "Awakening Amulet",
    "type": "Accessory",
    "icon": "📿",
    "statBoosts": "Mag Def +1, Stun Cure, Stun Immunity",
    "acquisition": "Can be obtained for 1000 G at various Armorer Shops (some of them below).",
    "isMetaCore": false,
    "grantedSkill": {
      "name": "Stun Cure",
      "cost": "1 PP",
      "description": "Activates after an ally is debuffed.Removes Stun from an ally.Restores 10% of target's HP."
    },
    "metaSquads": []
  },
  {
    "id": "badger-gauntlets",
    "name": "Badger Gauntlets",
    "type": "Accessory",
    "icon": "🧤",
    "statBoosts": "Phys Def +2, Bear's Den",
    "acquisition": "Armorer / World Quest / Treasure",
    "isMetaCore": false,
    "grantedSkill": {
      "name": "Bear's Den",
      "cost": "1 PP",
      "description": "Activates at the start of battle.Grants +20% Phys. Defense to all allies.Grants +50% Guard Rate to bestral targets."
    },
    "metaSquads": []
  },
  {
    "id": "barbed-ribbon",
    "name": "Barbed Ribbon",
    "type": "Accessory",
    "icon": "🪶",
    "statBoosts": "Phys Def +1, Mag Def +1, Stun Immunity",
    "acquisition": "Can be bought at the Subterranean City of Quantipelt for 3000 G.",
    "isMetaCore": false,
    "metaSquads": []
  },
  {
    "id": "battleline-standard",
    "name": "Battleline Standard",
    "type": "Accessory",
    "icon": "🚩",
    "statBoosts": "Heavy Alignment",
    "acquisition": "Can be obtained for 12000 G at the Cherrywell Town in Albion.",
    "isMetaCore": false,
    "grantedSkill": {
      "name": "Heavy Alignment",
      "cost": "1 PP",
      "description": "Activates at the start of a battle.Grants all allies buffs based on the numberof armored targets.1: Grants +20% Guard Rate.2: Grants Stun Immunity.3: Grants +20% Defense."
    },
    "metaSquads": []
  },
  {
    "id": "black-cat-ear-hood",
    "name": "Black Cat-Ear Hood",
    "type": "Accessory",
    "icon": "👑",
    "statBoosts": "Mag Def +5, Quick Impetus, Base PP +1, Initiative +10",
    "acquisition": "Coliseum Prize Exchange (1,000 CC)",
    "isMetaCore": true,
    "grantedSkill": {
      "name": "Quick Impetus",
      "cost": "2 PP",
      "description": "Activates when an ally uses an active charge skill. Grants the ally an immediate extra action."
    },
    "metaSquads": []
  },
  {
    "id": "bloodbrand-tome",
    "name": "Bloodbrand Tome",
    "type": "Accessory",
    "icon": "📜",
    "statBoosts": "Sanguine Conferral, Magick Attack +2",
    "acquisition": "Can be obtained for 8000 G at the Black Market Dealer Shop (Elheim).",
    "isMetaCore": false,
    "grantedSkill": {
      "name": "Sanguine Conferral",
      "cost": "1 PP",
      "description": "Activates before an ally's physickal attack (Active).Add magick damage to an ally's next attack.(50 potency.) User recovers HP equal to50% of damage dealt."
    },
    "metaSquads": []
  },
  {
    "id": "bloodmoon-earrings",
    "name": "Bloodmoon Earrings",
    "type": "Accessory",
    "icon": "💍",
    "statBoosts": "Phys Def +1, Drain Skill Efficiency +30%",
    "acquisition": "Can be obtained for 5000 G at the Black Market Dealer Shop (Elheim).",
    "isMetaCore": false,
    "metaSquads": []
  },
  {
    "id": "bloodstained-ribbon",
    "name": "Bloodstained Ribbon",
    "type": "Accessory",
    "icon": "🪶",
    "statBoosts": "Mag Def +5, All Stats +3, Drain Skill Efficiency +30%",
    "acquisition": "Armorer / World Quest / Treasure",
    "isMetaCore": false,
    "metaSquads": []
  },
  {
    "id": "blue-spectacles",
    "name": "Blue Spectacles",
    "type": "Accessory",
    "icon": "🔍",
    "statBoosts": "Phys Def +1, Accuracy +20",
    "acquisition": "Can be bought for 1500 G at various Armorer Shops (some of them below).",
    "isMetaCore": false,
    "metaSquads": []
  },
  {
    "id": "bronze-bangle",
    "name": "Bronze Bangle",
    "type": "Accessory",
    "icon": "💎",
    "statBoosts": "Phys Def +2, Mag Def +2",
    "acquisition": "Armorer / World Quest / Treasure",
    "isMetaCore": false,
    "metaSquads": []
  },
  {
    "id": "bronze-circlet",
    "name": "Bronze Circlet",
    "type": "Accessory",
    "icon": "👑",
    "statBoosts": "Mag Def +4",
    "acquisition": "Armorer / World Quest / Treasure",
    "isMetaCore": false,
    "metaSquads": []
  },
  {
    "id": "brown-beret",
    "name": "Brown Beret",
    "type": "Accessory",
    "icon": "👑",
    "statBoosts": "Phys Def +1, Physickal Attack +8%",
    "acquisition": "Starting equipment of Berenice.",
    "isMetaCore": false,
    "metaSquads": []
  },
  {
    "id": "carnelian-pendant",
    "name": "Carnelian Pendant",
    "type": "Accessory",
    "icon": "📿",
    "statBoosts": "Base AP +1",
    "acquisition": "Can be obtained for 10000 G at the Black Market Dealer at Cornia.",
    "isMetaCore": true,
    "metaSquads": []
  },
  {
    "id": "celestial-talisman",
    "name": "Celestial Talisman",
    "type": "Accessory",
    "icon": "📿",
    "statBoosts": "Hastened Charge, AP -1",
    "acquisition": "Can be obtained for completing the main quest: \"A Fleeting Dream\".",
    "isMetaCore": false,
    "grantedSkill": {
      "name": "Hastened Cast",
      "cost": "1 PP",
      "description": "Activates at the start of a battle.Immediatly activate one charge attack."
    },
    "metaSquads": []
  },
  {
    "id": "charm-of-land-sea",
    "name": "Charm of Land & Sea",
    "type": "Accessory",
    "icon": "💎",
    "statBoosts": "Phys Def +2, Mag Def +2, Max HP +10, Physickal Attack +4",
    "acquisition": "Can be obtained by completing the quest: \"The Witch's word\".",
    "isMetaCore": false,
    "metaSquads": []
  },
  {
    "id": "charm-of-sun-moon",
    "name": "Charm of Sun & Moon",
    "type": "Accessory",
    "icon": "💎",
    "statBoosts": "Phys Def +2, Mag Def +2, Max HP +10, Magick Attack +4",
    "acquisition": "Can be obtained during the quest: \"O'er Wood and Water\" by defeating Eltolinde.",
    "isMetaCore": false,
    "metaSquads": []
  },
  {
    "id": "charm-of-warding",
    "name": "Charm of Warding",
    "type": "Accessory",
    "icon": "💎",
    "statBoosts": "Mag Def +3, Magick Barrier",
    "acquisition": "Can be obtained for 10 Divine Shards at the Divine Shard Exchange shop.",
    "isMetaCore": false,
    "grantedSkill": {
      "name": "Magick Barrier",
      "cost": "1 PP",
      "description": "Activates before an ally is hit with a magick attack.Negate the next magick attack dealt to an ally.Also negates afflictions."
    },
    "metaSquads": []
  },
  {
    "id": "chloe-s-charm",
    "name": "Chloe's Charm",
    "type": "Accessory",
    "icon": "💎",
    "statBoosts": "User Earns +30% EXP",
    "acquisition": "Starting equipment of Chloe.",
    "isMetaCore": true,
    "metaSquads": []
  },
  {
    "id": "citadel-guard-s-sabatons",
    "name": "Citadel Guard's Sabatons",
    "type": "Accessory",
    "icon": "👢",
    "statBoosts": "Phys Def +2, Guarding Impetus",
    "acquisition": "Can be obtained for 12000 G at few Armorer Shops.",
    "isMetaCore": false,
    "grantedSkill": {
      "name": "Guarding Impetus",
      "cost": "1 AP",
      "description": "Activates after guarding an attack.Grants the user +1 💎AP."
    },
    "metaSquads": []
  },
  {
    "id": "clearsight-amulet",
    "name": "Clearsight Amulet",
    "type": "Accessory",
    "icon": "📿",
    "statBoosts": "Mag Def +1, Blind Cure, Blindness",
    "acquisition": "Can be obtained for 1000 G at various Armorer Shops (some of them below).",
    "isMetaCore": false,
    "grantedSkill": {
      "name": "Blind Cure",
      "cost": "1 PP",
      "description": "Activates after an ally is debuffed.Removes Blindness from an ally.Restores 10% of target's HP."
    },
    "metaSquads": []
  },
  {
    "id": "cleric-s-bracelet",
    "name": "Cleric's Bracelet",
    "type": "Accessory",
    "icon": "💎",
    "statBoosts": "Healing Pursuit",
    "acquisition": "Can be obtained by completing the quest:\"The Cemeteries of Elheim\".",
    "isMetaCore": false,
    "grantedSkill": {
      "name": "Healing Pursuit",
      "cost": "1 PP",
      "description": "Activates after an ally is healed.Restore minor HP to one ally above their limits.(Can heal up to 150% above maximum HP.)"
    },
    "metaSquads": []
  },
  {
    "id": "cleric-s-medallion",
    "name": "Cleric's Medallion",
    "type": "Accessory",
    "icon": "💎",
    "statBoosts": "Magick Defense +2, Magick Defense +10%, Guard Rate +10%",
    "acquisition": "Can be purchased for 50 CC at the Coliseum Prize Exchange in Baumratte.",
    "isMetaCore": false,
    "metaSquads": []
  },
  {
    "id": "cloth-gauntlets",
    "name": "Cloth Gauntlets",
    "type": "Accessory",
    "icon": "🧤",
    "statBoosts": "Phys Def +2, Guard Rate +30%",
    "acquisition": "Can be bought in various shops of the second part of the game.",
    "isMetaCore": false,
    "metaSquads": []
  },
  {
    "id": "cooling-bandana",
    "name": "Cooling Bandana",
    "type": "Accessory",
    "icon": "💎",
    "statBoosts": "Phys Def +1, Mag Def +1, Burn Immunity",
    "acquisition": "Can be obtained for 3000 G at various Armorer shops (some of them below).",
    "isMetaCore": false,
    "metaSquads": []
  },
  {
    "id": "counter-belt",
    "name": "Counter Belt",
    "type": "Accessory",
    "icon": "🥋",
    "statBoosts": "Phys Def +1, Counter",
    "acquisition": "Can be obtained  in the main quest line by beating a certain boss in the southern part of Cornia.",
    "isMetaCore": false,
    "grantedSkill": {
      "name": "Counter",
      "cost": "1 PP",
      "description": "Activates after an enemy attacks with an active skill.Counterattack a single enemy."
    },
    "metaSquads": []
  },
  {
    "id": "courser-s-reins",
    "name": "Courser's Reins",
    "type": "Accessory",
    "icon": "💎",
    "statBoosts": "Phys Def +1, Mag Def +1, Dynamic Glide, Initiative +3",
    "acquisition": "Can be obtained for 8000 G at the Subterranean City of Quantipelt Armorer shop.",
    "isMetaCore": false,
    "grantedSkill": {
      "name": "Dynamic Glide",
      "cost": "1 PP",
      "description": "Activates before being attacked.Evade a single hit.Grants the user +20% Phys. Attack."
    },
    "metaSquads": []
  },
  {
    "id": "critical-damage",
    "name": "Critical Damage +",
    "type": "Accessory",
    "icon": "💎",
    "statBoosts": "Critical Damage +100%",
    "acquisition": "Dev Item, unobtainable legitimately.",
    "isMetaCore": false,
    "metaSquads": []
  },
  {
    "id": "crown-of-the-abyss",
    "name": "Crown of the Abyss",
    "type": "Accessory",
    "icon": "👑",
    "statBoosts": "Phys Def +3, Mag Def +3, Base PP +2, All Stats +5",
    "acquisition": "Armorer / World Quest / Treasure",
    "isMetaCore": false,
    "metaSquads": []
  },
  {
    "id": "crude-tasset",
    "name": "Crude Tasset",
    "type": "Accessory",
    "icon": "🥋",
    "statBoosts": "Phys Def +2, War Cry",
    "acquisition": "Can be obtained for 5000 G at various Armorer Shops.",
    "isMetaCore": false,
    "grantedSkill": {
      "name": "War Cry",
      "cost": "1 PP",
      "description": "Activates at the start of a battle.Grants the user +20% Phys. Attack."
    },
    "metaSquads": []
  },
  {
    "id": "daemon-s-shackles",
    "name": "Daemon's Shackles",
    "type": "Accessory",
    "icon": "💎",
    "statBoosts": "Initiative -20, Take 15% Less Damage",
    "acquisition": "Can be obtained for 10000 G at the Black Market Dealer Shop (Albion).",
    "isMetaCore": false,
    "metaSquads": []
  },
  {
    "id": "dancer-s-anklet",
    "name": "Dancer's Anklet",
    "type": "Accessory",
    "icon": "💎",
    "statBoosts": "Blade Dance, Critical Rate +5%",
    "acquisition": "Can be obtained by doing the quest \"Cornia Treasure Map 3\".",
    "isMetaCore": false,
    "grantedSkill": {
      "name": "Blade Dance",
      "cost": "1 PP",
      "description": "Activates after using an active skill.Grants the user +20% Critical Rate and +20% Critical damage.(Effect stacks.)"
    },
    "metaSquads": []
  },
  {
    "id": "dancer-s-bracelet",
    "name": "Dancer's Bracelet",
    "type": "Accessory",
    "icon": "💎",
    "statBoosts": "Powerful Call",
    "acquisition": "Can be obtained for 2000 G at various Armorer Shops.",
    "isMetaCore": false,
    "metaSquads": []
  },
  {
    "id": "dawn-robes",
    "name": "Dawn Robes",
    "type": "Accessory",
    "icon": "🧣",
    "statBoosts": "Phys Def +1, Mag Def +1, Diurnal Impetus",
    "acquisition": "Can be obtained for ??? G at the Castle Laurhal Armorer Shop.",
    "isMetaCore": false,
    "grantedSkill": {
      "name": "Diurnal Impetus",
      "cost": "1 AP",
      "description": "Activates after using an active skill.Grants the user +20% Mag. Attack.Grants the user +1 💎AP during the day."
    },
    "metaSquads": []
  },
  {
    "id": "defender-s-ring",
    "name": "Defender's Ring",
    "type": "Accessory",
    "icon": "💍",
    "statBoosts": "Phys Def +1, Mag Def +1, Honed Shield",
    "acquisition": "Armorer / World Quest / Treasure",
    "isMetaCore": false,
    "grantedSkill": {
      "name": "Honed Shield",
      "cost": "1 PP",
      "description": "Activates at the start of a battle.Grants an ally +100% Guard Rate.Grants the ability to nullify piercing strikes."
    },
    "metaSquads": []
  },
  {
    "id": "defensive-gauntlets",
    "name": "Defensive Gauntlets",
    "type": "Accessory",
    "icon": "🧤",
    "statBoosts": "Phys Def +3, Quick Guard",
    "acquisition": "Can be bought for 5000 G at the Subterranean City of Silmapelt Armorer Shop.",
    "isMetaCore": false,
    "grantedSkill": {
      "name": "Quick Guard",
      "cost": "1 PP",
      "description": "Activates before being hit by a physickal attack.Block an enemy attack with a medium guard."
    },
    "metaSquads": []
  },
  {
    "id": "defensive-ring",
    "name": "Defensive Ring",
    "type": "Accessory",
    "icon": "💍",
    "statBoosts": "Phys Def +1, Quick Barrier",
    "acquisition": "Can be obtained for 5000 G at few Armorer shops.",
    "isMetaCore": false,
    "grantedSkill": {
      "name": "Quick Barrier",
      "cost": "1 PP",
      "description": "Activates before an ally is attacked.Reduce damage taken by an allyby 50% for one attack."
    },
    "metaSquads": []
  },
  {
    "id": "defrosting-amulet",
    "name": "Defrosting Amulet",
    "type": "Accessory",
    "icon": "📿",
    "statBoosts": "Mag Def +1, Freeze Cure, Freeze Immunity",
    "acquisition": "Can be obtained for 1000 G at various Armorer Shops (some of them below).",
    "isMetaCore": false,
    "grantedSkill": {
      "name": "Freeze Cure",
      "cost": "1 PP",
      "description": "Activates after an ally is debuffed.Removes Freeze from an ally.Restores 10% of target's HP."
    },
    "metaSquads": []
  },
  {
    "id": "detoxifying-amulet",
    "name": "Detoxifying Amulet",
    "type": "Accessory",
    "icon": "🧿",
    "statBoosts": "Mag Def +1, Poison Cure, Poison Immunity",
    "acquisition": "Bought in early/mid game armorer shops.",
    "isMetaCore": true,
    "grantedSkill": {
      "name": "Poison Cure",
      "cost": "1 PP",
      "description": "Activates after an ally is debuffed.Removes Poison from an ally.Restores 10% of target's HP."
    },
    "metaSquads": []
  },
  {
    "id": "dirty-gambler-s-coin",
    "name": "Dirty Gambler's Coin",
    "type": "Accessory",
    "icon": "🪙",
    "statBoosts": "Phys Def +1, Mag Def +1, Wide Inspiration",
    "acquisition": "Can be obtained for 5000 G at the Znova Town Armorer Shop.",
    "isMetaCore": false,
    "grantedSkill": {
      "name": "Wide Inspiration",
      "cost": "1 PP",
      "description": "Activates before an ally attacks (Active).Buff a row of allies for their next attack.Grants +30% Attack, +50% Critical Damage, and -50 Accuracy."
    },
    "metaSquads": []
  },
  {
    "id": "dove-plume",
    "name": "Dove Plume",
    "type": "Accessory",
    "icon": "🪶",
    "statBoosts": "Initiative +10",
    "acquisition": "Starting equipment of Selvie.",
    "isMetaCore": false,
    "metaSquads": []
  },
  {
    "id": "dream-crown",
    "name": "Dream Crown",
    "type": "Accessory",
    "icon": "👑",
    "statBoosts": "Base AP +1, All Stats +5",
    "acquisition": "Can be obtained by doing the quest \"Albion Treasure Map 5\".",
    "isMetaCore": true,
    "metaSquads": []
  },
  {
    "id": "druid-s-robes",
    "name": "Druid's Robes",
    "type": "Accessory",
    "icon": "🧣",
    "statBoosts": "Phys Def +1, Mag Def +1, Cursed Impetus",
    "acquisition": "Can be obtained for 12000 G at the Tarvihai Town Shop (Elheim).",
    "isMetaCore": false,
    "grantedSkill": {
      "name": "Cursed Impetus",
      "cost": "1 AP",
      "description": "Activates after the user is debuffed.Grants the user +1 💎AP."
    },
    "metaSquads": []
  },
  {
    "id": "dusk-robes",
    "name": "Dusk Robes",
    "type": "Accessory",
    "icon": "🧣",
    "statBoosts": "Phys Def +1, Mag Def +1, Nocturnal Impetus",
    "acquisition": "Can be obtained for ??? G at the Palanspelt Palace Armorer Shop.",
    "isMetaCore": false,
    "grantedSkill": {
      "name": "Nocturnal Impetus",
      "cost": "1 AP",
      "description": "Activates after using an active skill.Grants the user +20% Mag. Attack.Grants the user +1 💎AP at night."
    },
    "metaSquads": []
  },
  {
    "id": "earrings-of-pursuit",
    "name": "Earrings of Pursuit",
    "type": "Accessory",
    "icon": "💍",
    "statBoosts": "Phys Def +1, Follow-up Skills Deal +40 Damage",
    "acquisition": "Can be bought at Drakenhold accessory merchant.",
    "isMetaCore": true,
    "metaSquads": []
  },
  {
    "id": "elite-beret",
    "name": "Elite Beret",
    "type": "Accessory",
    "icon": "👑",
    "statBoosts": "Phys Def +3, Physickal Attack +12%",
    "acquisition": "Armorer / World Quest / Treasure",
    "isMetaCore": false,
    "metaSquads": []
  },
  {
    "id": "elite-standard",
    "name": "Elite Standard",
    "type": "Accessory",
    "icon": "🚩",
    "statBoosts": "United Front: Boosts squad offensive and defensive stats in formation",
    "acquisition": "Arena reward / Albion shop.",
    "isMetaCore": true,
    "grantedSkill": {
      "name": "United Front",
      "cost": "1 PP",
      "description": "Activates at the start of a battle.Grants all allies buffs based on the number of enemiesminus the number of allies.1: Grants +30 Initiative.2: Grants +50% Defense.3: Negates attacks up to five hits."
    },
    "metaSquads": []
  },
  {
    "id": "ervelda-s-talisman",
    "name": "Ervélda's Talisman",
    "type": "Accessory",
    "icon": "🧿",
    "statBoosts": "Max HP +30, Max HP +10%",
    "acquisition": "Elheim sanctuary treasure.",
    "isMetaCore": true,
    "metaSquads": []
  },
  {
    "id": "familiar-s-choker",
    "name": "Familiar's Choker",
    "type": "Accessory",
    "icon": "📿",
    "statBoosts": "Sorcerous Connection",
    "acquisition": "Can be obtained for 3000 G at few Armorer Shops.",
    "isMetaCore": true,
    "grantedSkill": {
      "name": "Sorcerous Connection",
      "cost": "1 PP",
      "description": "Activates before ally uses a magick attack (Active).Grants an ally +50% Mag. Attack.Grants the user -50% Mag. Attack."
    },
    "metaSquads": []
  },
  {
    "id": "first-aid-kit",
    "name": "First Aid Kit",
    "type": "Accessory",
    "icon": "💎",
    "statBoosts": "First Aid",
    "acquisition": "Starting equipment of Colm.",
    "isMetaCore": false,
    "grantedSkill": {
      "name": "First Aid",
      "cost": "1 PP",
      "description": "Activates at the end of a battle.Restores +25% HP to an ally."
    },
    "metaSquads": []
  },
  {
    "id": "flamebrand-tome",
    "name": "Flamebrand Tome",
    "type": "Accessory",
    "icon": "📜",
    "statBoosts": "Flame Conferral, Magick Attack +2",
    "acquisition": "Can be bought for 5000 G at few Armorer Shops.",
    "isMetaCore": false,
    "grantedSkill": {
      "name": "Flame Conferral",
      "cost": "1 PP",
      "description": "Activates before an ally's physickal attack (Active).Add magick damage and Burn to an ally's next attack.(50 potency.)"
    },
    "metaSquads": []
  },
  {
    "id": "fluffy-cape",
    "name": "Fluffy Cape",
    "type": "Accessory",
    "icon": "👑",
    "statBoosts": "Phys Def +1, Mag Def +1, Poison Immunity, Blindness Immunity",
    "acquisition": "Can be bought at Burbury Town for 3000 G.",
    "isMetaCore": false,
    "metaSquads": []
  },
  {
    "id": "frostbrand-tome",
    "name": "Frostbrand Tome",
    "type": "Accessory",
    "icon": "📜",
    "statBoosts": "Ice Conferral, Magick attack +2",
    "acquisition": "Can be obtained in the tower next to Lebouge Hamlet in the swamps.",
    "isMetaCore": false,
    "grantedSkill": {
      "name": "Ice Conferral",
      "cost": "1 PP",
      "description": "Activates before an ally's physickal attack (Active).Add magick damage and Freeze to an ally's next attack.(50 potency.)"
    },
    "metaSquads": []
  },
  {
    "id": "gambler-s-coin",
    "name": "Gambler's Coin",
    "type": "Accessory",
    "icon": "🪙",
    "statBoosts": "Inspiration",
    "acquisition": "Can be obtained for 2000 G at various Armorer Shops.",
    "isMetaCore": false,
    "grantedSkill": {
      "name": "Inspiration",
      "cost": "1 PP",
      "description": "Activates before an ally attacks (Active).Buff an ally for their next attack.Grants +30% Attack, +50% Critical Damage, and -50 Accuracy."
    },
    "metaSquads": []
  },
  {
    "id": "gauntlets",
    "name": "Gauntlets",
    "type": "Accessory",
    "icon": "🧤",
    "statBoosts": "Phys Def +1, Guard Rate +20%",
    "acquisition": "Starting equipment of Hodrick and Clive.",
    "isMetaCore": false,
    "metaSquads": []
  },
  {
    "id": "gauntlets-of-the-abyss",
    "name": "Gauntlets of the Abyss",
    "type": "Accessory",
    "icon": "🧤",
    "statBoosts": "Phys Def +3, Mag Def +3, Take 10% Less Damage, Guard Rate +20%",
    "acquisition": "Armorer / World Quest / Treasure",
    "isMetaCore": false,
    "metaSquads": []
  },
  {
    "id": "glacial-ring",
    "name": "Glacial Ring",
    "type": "Accessory",
    "icon": "💍",
    "statBoosts": "Mag Def +8, Freeze Immunity, Max HP +5",
    "acquisition": "Found in Bastorias freezing caverns.",
    "isMetaCore": true,
    "metaSquads": []
  },
  {
    "id": "glory-sash",
    "name": "Glory Sash",
    "type": "Accessory",
    "icon": "🥋",
    "statBoosts": "Reinforce",
    "acquisition": "Can be obtained for ??? CC (Coliseum Coins) at the Coliseum Prize Echange in Baumratte.",
    "isMetaCore": false,
    "grantedSkill": {
      "name": "Reinforce",
      "cost": "1 AP",
      "description": "Activates before an ally attacks (Active).Allow an ally to act once without consuming AP."
    },
    "metaSquads": []
  },
  {
    "id": "gold-bangle",
    "name": "Gold Bangle",
    "type": "Accessory",
    "icon": "💎",
    "statBoosts": "Phys Def +6, Mag Def +6",
    "acquisition": "Armorer / World Quest / Treasure",
    "isMetaCore": false,
    "metaSquads": []
  },
  {
    "id": "gold-circlet",
    "name": "Gold Circlet",
    "type": "Accessory",
    "icon": "👑",
    "statBoosts": "Mag Def +8",
    "acquisition": "Armorer / World Quest / Treasure",
    "isMetaCore": false,
    "metaSquads": []
  },
  {
    "id": "gold-goblet",
    "name": "Gold Goblet",
    "type": "Accessory",
    "icon": "💎",
    "statBoosts": "User's Unit Earns +200% Gold",
    "acquisition": "Can be obtained by doing the quest \"Albion Treasure Map 1\".",
    "isMetaCore": false,
    "metaSquads": []
  },
  {
    "id": "golden-egg",
    "name": "Golden Egg",
    "type": "Accessory",
    "icon": "💎",
    "statBoosts": "User's Unit Earns +100% Gold",
    "acquisition": "Armorer / World Quest / Treasure",
    "isMetaCore": false,
    "metaSquads": []
  },
  {
    "id": "gravekeeper-boots",
    "name": "Gravekeeper Boots",
    "type": "Accessory",
    "icon": "👢",
    "statBoosts": "Mag Def +1, Grave Impetus, Poison Immunity, Deathblow Immunity",
    "acquisition": "Can be bought for 10000 G at few Armorer shops (some of them below).",
    "isMetaCore": false,
    "grantedSkill": {
      "name": "Grave Impetus",
      "cost": "1 AP",
      "description": "Activates after an ally is defeated by an attack.Grants the user +1 💎AP."
    },
    "metaSquads": []
  },
  {
    "id": "gravekeeper-lantern",
    "name": "Gravekeeper Lantern",
    "type": "Accessory",
    "icon": "💎",
    "statBoosts": "Mag Def +1, Poison Immunity, Deathblow Immunity",
    "acquisition": "Can be obtained by completing the quest:\"The Cemeteries of Drakenhold\".",
    "isMetaCore": false,
    "metaSquads": []
  },
  {
    "id": "green-beret",
    "name": "Green Beret",
    "type": "Accessory",
    "icon": "👑",
    "statBoosts": "Phys Def +2, Physickal Attack +10%",
    "acquisition": "Armorer / World Quest / Treasure",
    "isMetaCore": false,
    "metaSquads": []
  },
  {
    "id": "guardian-gloves",
    "name": "Guardian Gloves",
    "type": "Accessory",
    "icon": "🧤",
    "statBoosts": "Phys Def +2, Guarding Fighter",
    "acquisition": "Can be obtained by doing the quest \"Cornia Treasure Map 2\".",
    "isMetaCore": false,
    "grantedSkill": {
      "name": "Guarding Fighter",
      "cost": "1 PP",
      "description": "Activates after guarding an attack.Grants the user +20% Phys. Attack and +30% Critical damage.(Effect stacks.)"
    },
    "metaSquads": []
  },
  {
    "id": "gust-bracelet",
    "name": "Gust Bracelet",
    "type": "Accessory",
    "icon": "💎",
    "statBoosts": "Hastened Strike",
    "acquisition": "Armorer / World Quest / Treasure",
    "isMetaCore": false,
    "grantedSkill": {
      "name": "Hastened Strike",
      "cost": "1 PP",
      "description": "Activates at the start of a battle.Attack a single enemy with a first strike."
    },
    "metaSquads": []
  },
  {
    "id": "heavensteed-reins",
    "name": "Heavensteed Reins",
    "type": "Accessory",
    "icon": "💎",
    "statBoosts": "Phys Def +3, Mag Def +3, Dynamic Glide, Initiative +6, Max HP +10",
    "acquisition": "Can be obtained for 20 Divine Shards at the Divine Shard Exchange shop.",
    "isMetaCore": true,
    "grantedSkill": {
      "name": "Dynamic Glide",
      "cost": "1 PP",
      "description": "Activates before being attacked.Evade a single hit.Grants the user +20% Phys. Attack."
    },
    "metaSquads": []
  },
  {
    "id": "heavenwyvern-reins",
    "name": "Heavenwyvern Reins",
    "type": "Accessory",
    "icon": "💎",
    "statBoosts": "Phys Def +3, Mag Def +3, Aerial Wing, Initiative +6, Max HP +10",
    "acquisition": "Can be obtained for 20 Divine Shards at the Divine Shard Exchange shop.",
    "isMetaCore": true,
    "grantedSkill": {
      "name": "Aerial Wing",
      "cost": "1 PP",
      "description": "Activates before attacking with an active skill.Makes the user's next attack a truestrike.Grants the user +20% Attack if the user is at 100% HP."
    },
    "metaSquads": []
  },
  {
    "id": "hero-s-medallion",
    "name": "Hero's Medallion",
    "type": "Accessory",
    "icon": "💎",
    "statBoosts": "Phys Def +1, Mag Def +1, Base AP +1, Base PP +1, Physickal Attack +20%",
    "acquisition": "Beat Amalia (Final battle of the Coliseum Battles)",
    "isMetaCore": false,
    "metaSquads": []
  },
  {
    "id": "holy-broach",
    "name": "Holy Broach",
    "type": "Accessory",
    "icon": "✨",
    "statBoosts": "Phys Def +2, Mag Def +2, Heal 20% HP when using Active skill",
    "acquisition": "Albion cathedral.",
    "isMetaCore": true,
    "metaSquads": []
  },
  {
    "id": "holy-unicorn-signet",
    "name": "Holy Unicorn Signet",
    "type": "Accessory",
    "icon": "💍",
    "statBoosts": "Phys Def +3, Mag Def +3, Debuff Immunity",
    "acquisition": "Can be obtained for completing the quest: \"The Royal Mausoleaum\" which unlocks automatically when you reach Renown Rank S.",
    "isMetaCore": true,
    "metaSquads": []
  },
  {
    "id": "hp-200",
    "name": "HP +200",
    "type": "Accessory",
    "icon": "💎",
    "statBoosts": "Max HP +200",
    "acquisition": "Dev Item, unobtainable legitimately.",
    "isMetaCore": false,
    "metaSquads": []
  },
  {
    "id": "hp-50",
    "name": "HP +50",
    "type": "Accessory",
    "icon": "💎",
    "statBoosts": "Max HP +50",
    "acquisition": "Dev Item, unobtainable legitimately.",
    "isMetaCore": false,
    "metaSquads": []
  },
  {
    "id": "illusory-cloak",
    "name": "Illusory Cloak",
    "type": "Accessory",
    "icon": "🧣",
    "statBoosts": "Phys Def +1, Mag Def +1, Phantom Step",
    "acquisition": "Complete the quest:\"The Sigil's Trial, Expert 2 (Lv.34)\".",
    "isMetaCore": false,
    "grantedSkill": {
      "name": "Phantom Step",
      "cost": "1 PP",
      "description": "Activates before being attacked.??? (To complete)Evade a single hit."
    },
    "metaSquads": []
  },
  {
    "id": "iron-shackles",
    "name": "Iron Shackles",
    "type": "Accessory",
    "icon": "💎",
    "statBoosts": "Initiative -10, Take 5% Less Damage",
    "acquisition": "Can be obtained for 3000 G at the Black Market Dealer Shop (Cornia, Drakenhold).",
    "isMetaCore": false,
    "metaSquads": []
  },
  {
    "id": "knight-s-medallion",
    "name": "Knight's Medallion",
    "type": "Accessory",
    "icon": "💎",
    "statBoosts": "Physickal Defense +2, Physickal Defense +10%, Guard Rate +10%",
    "acquisition": "Can be purchased for 50  CC at the Coliseum Prize Exchange in Baumratte.",
    "isMetaCore": false,
    "metaSquads": []
  },
  {
    "id": "lamplight-ring",
    "name": "Lamplight Ring",
    "type": "Accessory",
    "icon": "💍",
    "statBoosts": "Mag Def +1, Glowing Light, Blindness Immunity, Heal 10% HP when using Active Skill",
    "acquisition": "Armorer / World Quest / Treasure",
    "isMetaCore": false,
    "grantedSkill": {
      "name": "Glowing Light",
      "cost": "1 AP",
      "description": "Grants all allies +30 Accuracy and immunity to Blindness.(This buff cannot be removed.)"
    },
    "metaSquads": []
  },
  {
    "id": "lapis-bell",
    "name": "Lapis Bell",
    "type": "Accessory",
    "icon": "🔔",
    "statBoosts": "Passive Gift",
    "acquisition": "Starting equipment / Bastorias chest.",
    "isMetaCore": true,
    "grantedSkill": {
      "name": "Passive Gift",
      "cost": "1 PP",
      "description": "Restores 1 PP to an ally using an Active Skill."
    },
    "metaSquads": []
  },
  {
    "id": "lapis-pendant",
    "name": "Lapis Pendant",
    "type": "Accessory",
    "icon": "📿",
    "statBoosts": "Base PP +1",
    "acquisition": "Can be obtained for 10000 G at few Armorer Shops (some of them below).",
    "isMetaCore": true,
    "metaSquads": []
  },
  {
    "id": "large-aid-kit",
    "name": "Large Aid Kit",
    "type": "Accessory",
    "icon": "💎",
    "statBoosts": "Party Aid",
    "acquisition": "Can be bought for ??? G at Karayaksunn Town Armorer Shop.",
    "isMetaCore": false,
    "grantedSkill": {
      "name": "Party Aid",
      "cost": "1 PP",
      "description": "Activates at the end of a battle.Restores 25% HP to all allies."
    },
    "metaSquads": []
  },
  {
    "id": "leaf-broach",
    "name": "Leaf Broach",
    "type": "Accessory",
    "icon": "🪶",
    "statBoosts": "Phys Def +1, Mag Def +1, Heal 10% HP when using Active skill",
    "acquisition": "Reward for completing level 5 quest The Ravaged Swamp.",
    "isMetaCore": false,
    "metaSquads": []
  },
  {
    "id": "leather-hood",
    "name": "Leather Hood",
    "type": "Accessory",
    "icon": "👑",
    "statBoosts": "Mag Def +1, Magick Attack +8%",
    "acquisition": "Starting equipment of Yahna.",
    "isMetaCore": false,
    "metaSquads": []
  },
  {
    "id": "liberator-s-belt",
    "name": "Liberator's Belt",
    "type": "Accessory",
    "icon": "🥋",
    "statBoosts": "Phys Def +1, Banishing Counter",
    "acquisition": "Elheim Treasure Map 3",
    "isMetaCore": false,
    "grantedSkill": {
      "name": "Banishing Counter",
      "cost": "1 PP",
      "description": "Activates after an enemy attacks with an active skill.Counterattack a single enemy.Removes all of target's buffs."
    },
    "metaSquads": []
  },
  {
    "id": "liberator-s-bracelet",
    "name": "Liberator's Bracelet",
    "type": "Accessory",
    "icon": "💎",
    "statBoosts": "Banishing Pursuit",
    "acquisition": "Can be obtained for 10000 G at few Armorer shops (some of them below).",
    "isMetaCore": false,
    "grantedSkill": {
      "name": "Banishing Pursuit",
      "cost": "1 PP",
      "description": "Activates after an ally attacks (Active).Follow-up attack a single enemy.Removes all of target's buffs."
    },
    "metaSquads": []
  },
  {
    "id": "lifeblood-talisman",
    "name": "Lifeblood Talisman",
    "type": "Accessory",
    "icon": "🧿",
    "statBoosts": "Max HP +20",
    "acquisition": "Drakenhold / Elheim shops.",
    "isMetaCore": true,
    "metaSquads": []
  },
  {
    "id": "lionheart",
    "name": "Lionheart",
    "type": "Accessory",
    "icon": "💎",
    "statBoosts": "Phys Def +3, Mag Def +3, Physickal Attack +10%, Critical Rate +10%, Physickal Attack +20",
    "acquisition": "Morard's default accessory.",
    "isMetaCore": false,
    "metaSquads": []
  },
  {
    "id": "lips-s-ring",
    "name": "Lips's Ring",
    "type": "Accessory",
    "icon": "💍",
    "statBoosts": "Hastened Action",
    "acquisition": "This monument can be found directly east of the Elheim's Black Market Dealer.",
    "isMetaCore": false,
    "grantedSkill": {
      "name": "Hastened Action",
      "cost": "1 PP",
      "description": "Activates at the start of a battle.Grants an ally max Initiative for their next action.(Cannot target self.)"
    },
    "metaSquads": []
  },
  {
    "id": "lucky-coin",
    "name": "Lucky Coin",
    "type": "Accessory",
    "icon": "🪙",
    "statBoosts": "Critical Rate +20%, Evasion +20",
    "acquisition": "Starting equipment of Sharon.",
    "isMetaCore": true,
    "metaSquads": []
  },
  {
    "id": "mage-s-gloves",
    "name": "Mage's Gloves",
    "type": "Accessory",
    "icon": "🧤",
    "statBoosts": "Phys Def +1, Magick Counter",
    "acquisition": "Can be bought for 5000 G at the Karayaksunn Town Armorer Shop (Elheim).",
    "isMetaCore": false,
    "grantedSkill": {
      "name": "Magick Counter",
      "cost": "1 PP",
      "description": "Activates after an enemy attacks with an active skill.Counterattack a single enemy with magick."
    },
    "metaSquads": []
  },
  {
    "id": "magia-heart",
    "name": "Magia Heart",
    "type": "Accessory",
    "icon": "💎",
    "statBoosts": "Hastened Cast, HP -20%",
    "acquisition": "Can be obtained for ??? CC (Coliseum Coins) at the Coliseum Prize Echange in Baumratte.",
    "isMetaCore": false,
    "grantedSkill": {
      "name": "Hastened Cast",
      "cost": "1 PP",
      "description": "Activates at the start of a battle.Grants an ally max Initiative for their next action."
    },
    "metaSquads": []
  },
  {
    "id": "magia-soul",
    "name": "Magia Soul",
    "type": "Accessory",
    "icon": "💎",
    "statBoosts": "Recast, HP -20%",
    "acquisition": "Can be obtained for ??? CC (Coliseum Coins) at the Coliseum Prize Echange in Baumratte.",
    "isMetaCore": false,
    "grantedSkill": {
      "name": "Recast",
      "cost": "1 PP",
      "description": "Activates after using a magickal attack.Cast the same magick again."
    },
    "metaSquads": []
  },
  {
    "id": "magical-attack",
    "name": "Magical Attack +",
    "type": "Accessory",
    "icon": "💎",
    "statBoosts": "Magick Attack +100%",
    "acquisition": "Dev Item, unobtainable legitimately.",
    "isMetaCore": false,
    "metaSquads": []
  },
  {
    "id": "master-s-gauntlets",
    "name": "Master's Gauntlets",
    "type": "Accessory",
    "icon": "🧤",
    "statBoosts": "Phys Def +1, Nimble Fighter, Evasion +10",
    "acquisition": "Armorer / World Quest / Treasure",
    "isMetaCore": false,
    "grantedSkill": {
      "name": "Nimble Fighter",
      "cost": "1 PP",
      "description": "Activates after evading an attack.Grants the user +20% Phys. Attack and +30% Critical damage.(Effect stacks.)"
    },
    "metaSquads": []
  },
  {
    "id": "medical-kit",
    "name": "Medical Kit",
    "type": "Accessory",
    "icon": "💎",
    "statBoosts": "Medical Aid",
    "acquisition": "Armorer / World Quest / Treasure",
    "isMetaCore": false,
    "grantedSkill": {
      "name": "Medical Aid",
      "cost": "1 PP",
      "description": "Activates at the end of a battle.Restores +15% HP to a row of allies.Healing doubles if target's HP is 50% or less."
    },
    "metaSquads": []
  },
  {
    "id": "mercenary-s-eyepatch",
    "name": "Mercenary's Eyepatch",
    "type": "Accessory",
    "icon": "🔍",
    "statBoosts": "Phys Def +1, Critical Rate +20%",
    "acquisition": "Starting equipment of Adel.",
    "isMetaCore": false,
    "metaSquads": []
  },
  {
    "id": "mirrored-spectacles",
    "name": "Mirrored Spectacles",
    "type": "Accessory",
    "icon": "👓",
    "statBoosts": "Phys Def +2, Accuracy +30",
    "acquisition": "Found in Bastorias accessory shops.",
    "isMetaCore": true,
    "metaSquads": []
  },
  {
    "id": "miser-s-bracelet",
    "name": "Miser's Bracelet",
    "type": "Accessory",
    "icon": "💎",
    "statBoosts": "Phys Def +1, Mag Def +1, User's Unit Earns +200% Gold, PP -1",
    "acquisition": "Armorer / World Quest / Treasure",
    "isMetaCore": false,
    "metaSquads": []
  },
  {
    "id": "mistletoe-charm",
    "name": "Mistletoe Charm",
    "type": "Accessory",
    "icon": "💎",
    "statBoosts": "Phys Def +1, Mag Def +1, Guard Seal Immunity, Passive Seal Immunity, Evasion +20",
    "acquisition": "Dinah's default accessory.",
    "isMetaCore": false,
    "metaSquads": []
  },
  {
    "id": "monk-s-mitre",
    "name": "Monk's Mitre",
    "type": "Accessory",
    "icon": "👑",
    "statBoosts": "Phys Def +1, Mag Def +1, Quick Heal",
    "acquisition": "Albion sanctuaries.",
    "isMetaCore": true,
    "grantedSkill": {
      "name": "Quick Heal",
      "cost": "1 PP",
      "description": "Heal an ally immediately upon taking damage."
    },
    "metaSquads": []
  },
  {
    "id": "necromancer-s-lantern",
    "name": "Necromancer's Lantern",
    "type": "Accessory",
    "icon": "💎",
    "statBoosts": "Mag Def +1, Vanitas, Poison Immunity, Deathblow Immunity",
    "acquisition": "Armorer / World Quest / Treasure",
    "isMetaCore": false,
    "grantedSkill": {
      "name": "Vanitas",
      "cost": "1 PP",
      "description": "Activates after an ally is hit by an attack.Counterattack a single enemy.Inflicts Blindness and Poison."
    },
    "metaSquads": []
  },
  {
    "id": "old-witch-s-ring",
    "name": "Old Witch's Ring",
    "type": "Accessory",
    "icon": "💍",
    "statBoosts": "Mag Def +3, Magick Conversion, Magick Attack +2",
    "acquisition": "Armorer / World Quest / Treasure",
    "isMetaCore": false,
    "grantedSkill": {
      "name": "Magick Conversion",
      "cost": "1 PP",
      "description": "Activates before being hit by a magick attack.Negate a single magick attack targeting the user.Grants the user +2 💎PP."
    },
    "metaSquads": []
  },
  {
    "id": "onyx-pendant",
    "name": "Onyx Pendant",
    "type": "Accessory",
    "icon": "📿",
    "statBoosts": "Base AP +2, Base PP +2, All Stats -15",
    "acquisition": "Beat all the Coliseum Battles of the second Coliseum (You unlock the second Coliseum after beating Amalia at the top of the first).",
    "isMetaCore": false,
    "metaSquads": []
  },
  {
    "id": "outlaw-s-bracelet",
    "name": "Outlaw's Bracelet",
    "type": "Accessory",
    "icon": "💎",
    "statBoosts": "Wide Pursuit",
    "acquisition": "Can be obtained for 20000 G at the Sorm Town Armorer Shop",
    "isMetaCore": false,
    "grantedSkill": {
      "name": "Wide Pursuit",
      "cost": "1 PP",
      "description": "Activates after an enemy attacks (Active).Follow-up attack a row of enemies."
    },
    "metaSquads": []
  },
  {
    "id": "parrying-amulet",
    "name": "Parrying Amulet",
    "type": "Accessory",
    "icon": "📿",
    "statBoosts": "Mag Def +1, Guard Cure, Guard Seal Immunity",
    "acquisition": "Can be obtained for 1000 G at various Armorer Shops (some of them below).",
    "isMetaCore": false,
    "grantedSkill": {
      "name": "Guard Cure",
      "cost": "1 PP",
      "description": "Activates after an ally is debuffed.Removes Guard Seal from an ally.Restores 10% of target's HP."
    },
    "metaSquads": []
  },
  {
    "id": "phoenix-s-plume",
    "name": "Phoenix's Plume",
    "type": "Accessory",
    "icon": "🪶",
    "statBoosts": "Reincarnation, Initiative +5",
    "acquisition": "Can be obtained for ??? CC (Coliseum Coins) at the Coliseum Prize Echange in Baumratte.",
    "isMetaCore": false,
    "grantedSkill": {
      "name": "Reincarnation",
      "cost": "1 AP",
      "description": "Revive one ally, restoring them to 1 HP.Grants target immunity for one attack."
    },
    "metaSquads": []
  },
  {
    "id": "physical-attack",
    "name": "Physical Attack +",
    "type": "Accessory",
    "icon": "💎",
    "statBoosts": "Physickal Attack +100%",
    "acquisition": "Dev Item, unobtainable legitimately.",
    "isMetaCore": false,
    "metaSquads": []
  },
  {
    "id": "power-belt",
    "name": "Power Belt",
    "type": "Accessory",
    "icon": "🥋",
    "statBoosts": "Phys Def +1, Toughness, Max HP +10",
    "acquisition": "Can be bought for 10000 G at few Armorer shops (some of them below).",
    "isMetaCore": false,
    "grantedSkill": {
      "name": "Toughness",
      "cost": "1 PP",
      "description": "Activates before being attacked.Grants the user a buff to endure one lethal blow."
    },
    "metaSquads": []
  },
  {
    "id": "prisoner-s-shackles",
    "name": "Prisoner's Shackles",
    "type": "Accessory",
    "icon": "💎",
    "statBoosts": "Initiative -15, Take 10% Less Damage",
    "acquisition": "Can be obtained for 6000 G at the Black Market Dealer Shop (Elheim, Bastorias).",
    "isMetaCore": false,
    "metaSquads": []
  },
  {
    "id": "pursuant-s-bracelet",
    "name": "Pursuant's Bracelet",
    "type": "Accessory",
    "icon": "💎",
    "statBoosts": "Pursuit",
    "acquisition": "Can be obtained for 5000 G at few Armorer Shops (some of them below).",
    "isMetaCore": false,
    "grantedSkill": {
      "name": "Pursuit",
      "cost": "1 PP",
      "description": "Activates after an ally attacks (Active).Follow-up attack a single enemy."
    },
    "metaSquads": []
  },
  {
    "id": "quenching-amulet",
    "name": "Quenching Amulet",
    "type": "Accessory",
    "icon": "📿",
    "statBoosts": "Mag Def +1, Fire Cure, Burn Immunity",
    "acquisition": "Reward for completing level 6 quest Province of Famine.",
    "isMetaCore": false,
    "grantedSkill": {
      "name": "Fire Cure",
      "cost": "1 PP",
      "description": "Activates after an ally is debuffed.Removes Burn from an ally.Restores 10% of target's HP."
    },
    "metaSquads": []
  },
  {
    "id": "raven-plume",
    "name": "Raven Plume",
    "type": "Accessory",
    "icon": "🪶",
    "statBoosts": "Initiative +15",
    "acquisition": "Can be obtained for ??? G at the Dracodorina Citadel Armorer Shop.",
    "isMetaCore": true,
    "metaSquads": []
  },
  {
    "id": "retaliation-earrings",
    "name": "Retaliation Earrings",
    "type": "Accessory",
    "icon": "💍",
    "statBoosts": "Phys Def +1, Counterattack Skills Deal +40 Damage",
    "acquisition": "Can be bought at Drakenhold accessory merchant.",
    "isMetaCore": true,
    "metaSquads": []
  },
  {
    "id": "ring-of-the-unicorn",
    "name": "Ring of the Unicorn",
    "type": "Accessory",
    "icon": "💍",
    "statBoosts": "All Stats +5, Base AP +1, Base PP +1, Affliction Immunity",
    "acquisition": "Main Story Quest (Ring of the Unicorn)",
    "isMetaCore": true,
    "grantedSkill": {
      "name": "Astral Blade",
      "cost": "1 AP",
      "description": "Unleash its true power amidst a sea of miasma."
    },
    "metaSquads": []
  },
  {
    "id": "riot-belt",
    "name": "Riot Belt",
    "type": "Accessory",
    "icon": "🥋",
    "statBoosts": "Phys Def +1, Wide Counter",
    "acquisition": "Armorer / World Quest / Treasure",
    "isMetaCore": false,
    "grantedSkill": {
      "name": "Wide Counter",
      "cost": "1 PP",
      "description": "Activates after an enemy attacks with an active skill.Counterattack a row of enemies."
    },
    "metaSquads": []
  },
  {
    "id": "rookie-egg",
    "name": "Rookie Egg",
    "type": "Accessory",
    "icon": "💎",
    "statBoosts": "User's Earns +100% EXP",
    "acquisition": "Can be bought for 10000 G at few Armorer Shops (some of them below).",
    "isMetaCore": false,
    "metaSquads": []
  },
  {
    "id": "rose-broach",
    "name": "Rose Broach",
    "type": "Accessory",
    "icon": "🪶",
    "statBoosts": "Phys Def +1, Mag Def +1, Heal 15% HP when using Active skill",
    "acquisition": "Can be obtained for 10000 G at the Wingsabbey Town Armorer shop.",
    "isMetaCore": false,
    "metaSquads": []
  },
  {
    "id": "royal-scarf",
    "name": "Royal Scarf",
    "type": "Accessory",
    "icon": "🧣",
    "statBoosts": "Phys Def +2, Evasion +30",
    "acquisition": "Can be bought in various shops in the second part of the game including the Ancient City of Bastoritza.",
    "isMetaCore": true,
    "metaSquads": []
  },
  {
    "id": "ruby-pendant",
    "name": "Ruby Pendant",
    "type": "Accessory",
    "icon": "📿",
    "statBoosts": "Base AP +2",
    "acquisition": "Can be obtained for 40000 G at the Black Market Dealer at Bastorias.",
    "isMetaCore": true,
    "metaSquads": []
  },
  {
    "id": "sacral-broach",
    "name": "Sacral Broach",
    "type": "Accessory",
    "icon": "🪶",
    "statBoosts": "Phys Def +3, Mag Def +3, Heal 20% HP when using Active Skill, Affliction Immunity",
    "acquisition": "In the the main quest \"To the Sanctuaries,\" visit the Zenoiran sanctuary .",
    "isMetaCore": false,
    "metaSquads": []
  },
  {
    "id": "sage-owl-s-shawl",
    "name": "Sage Owl's Shawl",
    "type": "Accessory",
    "icon": "🧣",
    "statBoosts": "Quick Dispel",
    "acquisition": "Armorer / World Quest / Treasure",
    "isMetaCore": true,
    "grantedSkill": {
      "name": "Quick Dispel",
      "cost": "1 PP",
      "description": "Activates after an enemy is buffed.Remove all buffs from a single enemy."
    },
    "metaSquads": []
  },
  {
    "id": "sage-s-hood",
    "name": "Sage's Hood",
    "type": "Accessory",
    "icon": "👑",
    "statBoosts": "Mag Def +3, Magick Attack +12%",
    "acquisition": "Can be bought in various end game shops.",
    "isMetaCore": true,
    "metaSquads": []
  },
  {
    "id": "salamander-ring",
    "name": "Salamander Ring",
    "type": "Accessory",
    "icon": "💍",
    "statBoosts": "Mag Def +8, Burn Immunity, Max HP +5",
    "acquisition": "Armorer / World Quest / Treasure",
    "isMetaCore": false,
    "metaSquads": []
  },
  {
    "id": "sapphire-pendant",
    "name": "Sapphire Pendant",
    "type": "Accessory",
    "icon": "📿",
    "statBoosts": "Base PP +2",
    "acquisition": "Can be obtained for 40000 G at the Black Market Dealer at Bastorias.",
    "isMetaCore": true,
    "metaSquads": []
  },
  {
    "id": "scarlett-s-ribbon",
    "name": "Scarlett's Ribbon",
    "type": "Accessory",
    "icon": "🪶",
    "statBoosts": "Mag Def +1, Quick Heal, Max HP +3, Evasion +10",
    "acquisition": "Starting accessory of Scarlett.",
    "isMetaCore": true,
    "grantedSkill": {
      "name": "Quick Heal",
      "cost": "1 PP",
      "description": "Activates after an ally is hit by an attack.Restore minor HP to an ally."
    },
    "metaSquads": []
  },
  {
    "id": "self-aid-kit",
    "name": "Self-Aid Kit",
    "type": "Accessory",
    "icon": "💎",
    "statBoosts": "Self-Care, Max HP +3",
    "acquisition": "Can be obtained for 5000 G at few Armorer Shops.",
    "isMetaCore": false,
    "grantedSkill": {
      "name": "Self-Care",
      "cost": "1 PP",
      "description": "Activates after the user is debuffed.Remove all debuffs from the user."
    },
    "metaSquads": []
  },
  {
    "id": "shawl-of-repose",
    "name": "Shawl of Repose",
    "type": "Accessory",
    "icon": "🧣",
    "statBoosts": "Phys Def +1, Wing Rest",
    "acquisition": "Albion church shops.",
    "isMetaCore": true,
    "grantedSkill": {
      "name": "Wing Rest",
      "cost": "1 PP",
      "description": "Activates at the end of a battle.Recover 25% HP.Recovered HP doubles if afflicted."
    },
    "metaSquads": []
  },
  {
    "id": "silk-hood",
    "name": "Silk Hood",
    "type": "Accessory",
    "icon": "👑",
    "statBoosts": "Mag Def +2, Magick Attack +10%",
    "acquisition": "Starting equipment of Auch.",
    "isMetaCore": false,
    "metaSquads": []
  },
  {
    "id": "silken-scarf",
    "name": "Silken Scarf",
    "type": "Accessory",
    "icon": "🧣",
    "statBoosts": "Phys Def +1, Evasion +20",
    "acquisition": "Starting equipment of Travis, Fran.",
    "isMetaCore": false,
    "metaSquads": []
  },
  {
    "id": "silver-bangle",
    "name": "Silver Bangle",
    "type": "Accessory",
    "icon": "💎",
    "statBoosts": "Phys Def +4, Mag Def +4",
    "acquisition": "Can be obtained for 3000 G at various Armorer Shops.",
    "isMetaCore": false,
    "metaSquads": []
  },
  {
    "id": "silver-circlet",
    "name": "Silver Circlet",
    "type": "Accessory",
    "icon": "👑",
    "statBoosts": "Mag Def +6",
    "acquisition": "Can be obtained for 2500 G at various Armorer Shops.",
    "isMetaCore": false,
    "metaSquads": []
  },
  {
    "id": "silver-goblet",
    "name": "Silver Goblet",
    "type": "Accessory",
    "icon": "💎",
    "statBoosts": "User's Earns +200% EXP",
    "acquisition": "Complete the quest:\"Sigils of the Ancients\". (Finish all sigil stones at least once)",
    "isMetaCore": false,
    "metaSquads": []
  },
  {
    "id": "skillful-amulet",
    "name": "Skillful Amulet",
    "type": "Accessory",
    "icon": "📿",
    "statBoosts": "Mag Def +1, Passive Cure, Passive Seal Immunity",
    "acquisition": "Can be obtained for 1000 G at the Devolpis Harbor Armorer Shop.",
    "isMetaCore": false,
    "grantedSkill": {
      "name": "Passive Cure",
      "cost": "1 PP",
      "description": "Activates after an ally is debuffed.Removes Passive Seal from an ally.Restores 10% of target's HP."
    },
    "metaSquads": []
  },
  {
    "id": "sniper-s-amber-lens",
    "name": "Sniper's Amber Lens",
    "type": "Accessory",
    "icon": "🔍",
    "statBoosts": "Phys Def +1, Accuracy +20, Hawk Eye",
    "acquisition": "Dracodorina Citadel Armorer Shop / Coliseum",
    "isMetaCore": true,
    "grantedSkill": {
      "name": "Hawk Eye",
      "cost": "1 PP",
      "description": "Before attacking, grant self 100% Truestrike and 100% Guaranteed Critical Hit."
    },
    "metaSquads": []
  },
  {
    "id": "sniper-s-lens",
    "name": "Sniper's Lens",
    "type": "Accessory",
    "icon": "🔍",
    "statBoosts": "Phys Def +1, Eagle Eye, Accuracy +10",
    "acquisition": "Can be obtained for 5000 G at the Citronpool Harbor Armorer Shop.",
    "isMetaCore": false,
    "grantedSkill": {
      "name": "Eagle Eye",
      "cost": "1 PP",
      "description": "Activates before attacking with an active skill.Makes the user's next attack a truestrike."
    },
    "metaSquads": []
  },
  {
    "id": "soothing-plume",
    "name": "Soothing Plume",
    "type": "Accessory",
    "icon": "🪶",
    "statBoosts": "Healing Wind, Initiative +5",
    "acquisition": "Can be obtained for 20000 G at the Bisfaine Basilica Armorer Shop.",
    "isMetaCore": false,
    "grantedSkill": {
      "name": "Healing Wind",
      "cost": "1 AP",
      "description": "Restore HP to a row of allies.Healing equal to the user's HP."
    },
    "metaSquads": []
  },
  {
    "id": "sorcerer-s-gauntlets",
    "name": "Sorcerer's Gauntlets",
    "type": "Accessory",
    "icon": "🧤",
    "statBoosts": "Phys Def +3, Sorcerous Blow",
    "acquisition": "Can be obtained for 10000 G at the Fortified City of Solvaquad Armorer Shop.",
    "isMetaCore": false,
    "grantedSkill": {
      "name": "Sorcerous Blow",
      "cost": "1 AP",
      "description": "Attack a single enemy.Inflicts stun."
    },
    "metaSquads": []
  },
  {
    "id": "sorcerer-s-medallion",
    "name": "Sorcerer's Medallion",
    "type": "Accessory",
    "icon": "💎",
    "statBoosts": "Magick Attack +2, Magick Attack +10%, Critical Rate +10%",
    "acquisition": "Can be obtained for 10000 G at few Armorer Shops.",
    "isMetaCore": false,
    "metaSquads": []
  },
  {
    "id": "spirit-s-necklace",
    "name": "Spirit's Necklace",
    "type": "Accessory",
    "icon": "📿",
    "statBoosts": "Phys Def +1, Quick Cure",
    "acquisition": "Can be obtained for 10000 G at the Walled City of Peyston Armorer Shop.",
    "isMetaCore": false,
    "grantedSkill": {
      "name": "Quick Cure",
      "cost": "1 PP",
      "description": "Activates after an ally is debuffed.Removes all debuffs from an ally.Grants the target immunity to one debuff."
    },
    "metaSquads": []
  },
  {
    "id": "squall-bracelet",
    "name": "Squall Bracelet",
    "type": "Accessory",
    "icon": "💎",
    "statBoosts": "Hastened Shatter",
    "acquisition": "Can be obtained for 15000 G at the Burnpool Town Armorer Shop (Albion).",
    "isMetaCore": false,
    "grantedSkill": {
      "name": "Hastened Shatter",
      "cost": "1 PP",
      "description": "Activates at the start of a battle.Attack a single enemy with a first strike.Inflicts Phys. Defense -50%."
    },
    "metaSquads": []
  },
  {
    "id": "str-100",
    "name": "STR +100",
    "type": "Accessory",
    "icon": "💎",
    "statBoosts": "Physickal Attack +100",
    "acquisition": "Dev Item, unobtainable legitimately.",
    "isMetaCore": false,
    "metaSquads": []
  },
  {
    "id": "tailwind-cape",
    "name": "Tailwind Cape",
    "type": "Accessory",
    "icon": "👑",
    "statBoosts": "Quick Action",
    "acquisition": "Can be obtained for 10000 G at few Armorer Shops (some of them below).",
    "isMetaCore": false,
    "grantedSkill": {
      "name": "Quick Action",
      "cost": "1 PP",
      "description": "Activates at the start of a battle.Grants an ally +15 Initiative for their next action.(Cannot target self.)"
    },
    "metaSquads": []
  },
  {
    "id": "talisman-of-the-abyss",
    "name": "Talisman of the Abyss",
    "type": "Accessory",
    "icon": "📿",
    "statBoosts": "Blindness Immunity, Deathblow Immunity, Passive Seal Immunity",
    "acquisition": "Armorer / World Quest / Treasure",
    "isMetaCore": false,
    "metaSquads": []
  },
  {
    "id": "thief-s-bell",
    "name": "Thief's Bell",
    "type": "Accessory",
    "icon": "💎",
    "statBoosts": "Grant Evade",
    "acquisition": "Can be obtained for 8000 G at the Black Market Dealer Shop (Drakenhold).",
    "isMetaCore": false,
    "grantedSkill": {
      "name": "Grant Evade",
      "cost": "1 PP",
      "description": "Activates before an ally is attacked.Allow an ally to evade one hit."
    },
    "metaSquads": []
  },
  {
    "id": "thief-s-mantle",
    "name": "Thief's Mantle",
    "type": "Accessory",
    "icon": "💎",
    "statBoosts": "Phys Def +1, Mag Def +1, Evade",
    "acquisition": "Can be obtained for 20000 G at the Black Market Dealer Shop (Cornia).",
    "isMetaCore": true,
    "grantedSkill": {
      "name": "Evade",
      "cost": "1 PP",
      "description": "Activates before being attacked.Evade a single hit."
    },
    "metaSquads": []
  },
  {
    "id": "thunderbrand-tome",
    "name": "Thunderbrand Tome",
    "type": "Accessory",
    "icon": "📜",
    "statBoosts": "Thunderous Conferral, Magick Attack +2",
    "acquisition": "Can be bought for 5000 G at Subterranean City of Quantipelt Armorer shop.",
    "isMetaCore": false,
    "grantedSkill": {
      "name": "Thunderous Conferral",
      "cost": "1 PP",
      "description": "Activates before an ally's physickal attack (Active).Add magick damage and Stun to an ally's next attack.(50 potency.)"
    },
    "metaSquads": []
  },
  {
    "id": "thunderclap-ring",
    "name": "Thunderclap Ring",
    "type": "Accessory",
    "icon": "💍",
    "statBoosts": "Mag Def +8, Stun Immunity, Max HP +5",
    "acquisition": "Armorer / World Quest / Treasure",
    "isMetaCore": false,
    "metaSquads": []
  },
  {
    "id": "truestrike-star",
    "name": "Truestrike Star",
    "type": "Accessory",
    "icon": "💎",
    "statBoosts": "Focus Sight",
    "acquisition": "Armorer / World Quest / Treasure",
    "isMetaCore": false,
    "grantedSkill": {
      "name": "Focus Sight",
      "cost": "1 PP",
      "description": "Activates before an ally attacks (Active).Make an ally's next attack a truestrike."
    },
    "metaSquads": []
  },
  {
    "id": "twilight-cloak",
    "name": "Twilight Cloak",
    "type": "Accessory",
    "icon": "🧣",
    "statBoosts": "Phys Def +1, Mag Def +1, Nocturnal Evade",
    "acquisition": "Can be obtained for 30000 G at the Black Market Dealer Shop (Bastorias).",
    "isMetaCore": false,
    "grantedSkill": {
      "name": "Nocturnal Evade",
      "cost": "1 PP",
      "description": "Activates before being attacked.Evade a single hit.Grants the user +1 💎PP at night."
    },
    "metaSquads": []
  },
  {
    "id": "undead-ring",
    "name": "Undead Ring",
    "type": "Accessory",
    "icon": "💍",
    "statBoosts": "Mag Def +1, Poison Immunity, Deathblow Immunity, Base PP +1",
    "acquisition": "Can be obtained by completing the quest:\"The Cemeteries of Albion\".",
    "isMetaCore": false,
    "metaSquads": []
  },
  {
    "id": "vengeful-caligae",
    "name": "Vengeful Caligae",
    "type": "Accessory",
    "icon": "👢",
    "statBoosts": "Phys Def +1, Vengeful Impetus, Physickal Attack +2",
    "acquisition": "Can be obtained for ??? G at the Silphakom Town Armorer Shop.",
    "isMetaCore": false,
    "grantedSkill": {
      "name": "Vengeful Impetus",
      "cost": "1 AP",
      "description": "Activates after being attacked.Grants the user +1 💎AP."
    },
    "metaSquads": []
  },
  {
    "id": "verdant-ribbon",
    "name": "Verdant Ribbon",
    "type": "Accessory",
    "icon": "🪶",
    "statBoosts": "Mag Def +3",
    "acquisition": "Armorer / World Quest / Treasure",
    "isMetaCore": false,
    "metaSquads": []
  },
  {
    "id": "veteran-s-eyepatch",
    "name": "Veteran's Eyepatch",
    "type": "Accessory",
    "icon": "🔍",
    "statBoosts": "Phys Def +2, Critical Rate +30%",
    "acquisition": "Can be bought in various shops in the second part of the game.",
    "isMetaCore": false,
    "metaSquads": []
  },
  {
    "id": "vitality-talisman",
    "name": "Vitality Talisman",
    "type": "Accessory",
    "icon": "🧿",
    "statBoosts": "Max HP +10",
    "acquisition": "Coringia / early towns.",
    "isMetaCore": true,
    "metaSquads": []
  },
  {
    "id": "warrior-s-medallion",
    "name": "Warrior's Medallion",
    "type": "Accessory",
    "icon": "💎",
    "statBoosts": "Physickal Attack +2, Physickal Attack +10%, Critical Rate +10%",
    "acquisition": "Obtained during level 5 quest, after defeating Mordon's unit.",
    "isMetaCore": false,
    "metaSquads": []
  },
  {
    "id": "watchman-s-horn",
    "name": "Watchman's Horn",
    "type": "Accessory",
    "icon": "💎",
    "statBoosts": "Mag Def +1, Dawn Horn, Blindness Immunity, Burn Immunity",
    "acquisition": "Armorer / World Quest / Treasure",
    "isMetaCore": false,
    "grantedSkill": {
      "name": "Dawn Horn",
      "cost": "1 PP",
      "description": "Activates at the start of a battle.Grants all allies immunity to Stunand +20% Guard Rate."
    },
    "metaSquads": []
  },
  {
    "id": "watchman-s-lantern",
    "name": "Watchman's Lantern",
    "type": "Accessory",
    "icon": "💎",
    "statBoosts": "Mag Def +1, Blindness Immunity, Burn Immunity",
    "acquisition": "Armorer / World Quest / Treasure",
    "isMetaCore": false,
    "metaSquads": []
  },
  {
    "id": "white-cat-ear-hood",
    "name": "White Cat-Ear Hood",
    "type": "Accessory",
    "icon": "👑",
    "statBoosts": "Mag Def +5, Quick Impetus, Base PP +1, Initiative +10",
    "acquisition": "Can be obtained for 20 Divine Shards at the Divine Shard Exchange shop.",
    "isMetaCore": true,
    "grantedSkill": {
      "name": "Quick Impetus",
      "cost": "1 AP",
      "description": "Activates an ally uses an active skill.Allow an ally to act again.Grants the target +1 💎AP."
    },
    "metaSquads": []
  },
  {
    "id": "white-ribbon",
    "name": "White Ribbon",
    "type": "Accessory",
    "icon": "🪶",
    "statBoosts": "Mag Def +3",
    "acquisition": "Armorer / World Quest / Treasure",
    "isMetaCore": false,
    "metaSquads": []
  },
  {
    "id": "wind-faerie-s-bell",
    "name": "Wind Faerie's Bell",
    "type": "Accessory",
    "icon": "💎",
    "statBoosts": "Sylphic Barrier",
    "acquisition": "Armorer / World Quest / Treasure",
    "isMetaCore": false,
    "grantedSkill": {
      "name": "Sylphic Barrier",
      "cost": "1 PP",
      "description": "Activates before an ally is hit by a ranged phys. attack.Allow an ally to evade one attack."
    },
    "metaSquads": []
  },
  {
    "id": "wingline-standard",
    "name": "Wingline Standard",
    "type": "Accessory",
    "icon": "🚩",
    "statBoosts": "Aerial Alignment",
    "acquisition": "Can be obtained for 12000 G at the Oakford Town in Albion.",
    "isMetaCore": false,
    "grantedSkill": {
      "name": "Aerial Alignment",
      "cost": "1 PP",
      "description": "Activates at the start of a battle.Grants all allies buffs based on the numberof flying targets.1: Grants +20% Critical Rate.2: Grants +20 Accuracy.3: Grants +20% Attack."
    },
    "metaSquads": []
  },
  {
    "id": "wolf-fang-bracelet",
    "name": "Wolf Fang Bracelet",
    "type": "Accessory",
    "icon": "💎",
    "statBoosts": "Killing Pursuit",
    "acquisition": "Armorer / World Quest / Treasure",
    "isMetaCore": false,
    "grantedSkill": {
      "name": "Killing Pursuit",
      "cost": "1 AP",
      "description": "Activates after an ally attacks (Active).Follow-up attack a single enemy.Grants the user +1 💎AP if the target is defeated."
    },
    "metaSquads": []
  },
  {
    "id": "wolfpack-gauntlets",
    "name": "Wolfpack Gauntlets",
    "type": "Accessory",
    "icon": "🧤",
    "statBoosts": "Phys Def +2, Wolf Pack",
    "acquisition": "Armorer / World Quest / Treasure",
    "isMetaCore": true,
    "grantedSkill": {
      "name": "Wolf Pack",
      "cost": "1 PP",
      "description": "Activates at the start of battle.Grants +20% Phys. Attack to all allies.Grants +50% Critical Rate to bestral targets."
    },
    "metaSquads": []
  },
  {
    "id": "wooly-mittens",
    "name": "Wooly Mittens",
    "type": "Accessory",
    "icon": "🧤",
    "statBoosts": "Phys Def +1, Mag Def +1, Freeze Immunity",
    "acquisition": "Can be bought at Vosfraga Town for 3000 G.",
    "isMetaCore": false,
    "metaSquads": []
  },
  {
    "id": "wyvern-claw",
    "name": "Wyvern Claw",
    "type": "Accessory",
    "icon": "💎",
    "statBoosts": "Ground Counter",
    "acquisition": "Can be obtained for 3000 G at the Citronpool Harbor Armorer Shop.",
    "isMetaCore": false,
    "grantedSkill": {
      "name": "Ground Counter",
      "cost": "1 PP",
      "description": "Activates after an enemy attacks with an active skill.Counterattack a single enemy.+100 potency v. cavalry targets."
    },
    "metaSquads": []
  },
  {
    "id": "wyvern-reins",
    "name": "Wyvern Reins",
    "type": "Accessory",
    "icon": "💎",
    "statBoosts": "Phys Def +1, Mag Def +1, Aerial Wing, Initiative +3",
    "acquisition": "Can be obtained for 8000 G at few Armorer Shops.",
    "isMetaCore": false,
    "grantedSkill": {
      "name": "Aerial Wing",
      "cost": "1 PP",
      "description": "Activates before attacking with an active skill.Makes the user's next attack a truestrike.Grants the user +20% Attack if the user is at 100% HP."
    },
    "metaSquads": []
  },
  {
    "id": "blue-rose-sword",
    "name": "Blue Rose Sword",
    "type": "Weapon",
    "icon": "⚔️",
    "image": "/images/items/blue-rose.png",
    "statBoosts": "Phys Atk +24, Base AP +1, Critical Rate +10%, Phys Def +3",
    "acquisition": "Virginia Canonical Story Weapon / Drakenhold Royal Treasury",
    "isMetaCore": true,
    "metaSquads": [
      "zero-5-virginia-valkyrian-counter"
    ]
  },
  {
    "id": "ring-of-the-maiden",
    "name": "Ring of the Maiden",
    "type": "Accessory",
    "icon": "💎",
    "image": "/images/items/holy-unicorn-signet.png",
    "statBoosts": "Mag Def +10, Base AP +1, Base PP +1, Maiden's Protection, All Affliction Immunity",
    "acquisition": "Scarlett Covenant Ritual at Sanctuary of the Maiden",
    "isMetaCore": true,
    "metaSquads": [
      "zero-1-alain-holy-vanguard"
    ]
  },
  {
    "id": "zenoiran-spear",
    "name": "Zenoiran Spear",
    "type": "Weapon",
    "icon": "⚔️",
    "image": "/images/items/black-iron-spear.png",
    "statBoosts": "Phys Atk +22, Guard Rate +15%",
    "acquisition": "Zenoiran Ruins Exploration",
    "isMetaCore": true,
    "metaSquads": [
      "zero-2-trinity-rain-apocalypse"
    ]
  },
  {
    "id": "hallowed-staff",
    "name": "Hallowed Staff",
    "type": "Weapon",
    "icon": "⚔️",
    "image": "/images/items/sacral-rod.png",
    "statBoosts": "Mag Atk +22, HP Regen +10%",
    "acquisition": "Albion Divine Sanctuary",
    "isMetaCore": true,
    "metaSquads": [
      "zero-3-dragoon-aerial-tempest"
    ]
  },
  {
    "id": "zenoiran-sword",
    "name": "Zenoiran Sword",
    "type": "Weapon",
    "icon": "⚔️",
    "image": "/images/items/black-iron-sword.png",
    "statBoosts": "Phys Atk +22, Phys Def +5",
    "acquisition": "Zenoiran Garrison Vault",
    "isMetaCore": true,
    "metaSquads": [
      "zero-6-yunifi-glacial-rain-freeze"
    ]
  },
  {
    "id": "spellsteel-sword",
    "name": "Spellsteel Sword",
    "type": "Weapon",
    "icon": "⚔️",
    "image": "/images/items/runic-sword.png",
    "statBoosts": "Phys Atk +18, Mag Atk +16, Evasion +10",
    "acquisition": "Elheim Forge of Mists",
    "isMetaCore": true,
    "metaSquads": [
      "zero-7-elven-sisters-elemental-tempest"
    ]
  },
  {
    "id": "greatwood-greataxe",
    "name": "Greatwood Greataxe",
    "type": "Weapon",
    "icon": "⚔️",
    "image": "/images/items/boreas-s-axe.png",
    "statBoosts": "Phys Atk +24, Mag Def +4, Guard +10%",
    "acquisition": "Bastorias Greatwood Tribe",
    "isMetaCore": true,
    "metaSquads": [
      "zero-8-amalia-grand-crusher"
    ]
  },
  {
    "id": "spada-d-onore",
    "name": "Spada d'Onore",
    "type": "Weapon",
    "icon": "⚔️",
    "image": "/images/items/notos-s-sword.png",
    "statBoosts": "Phys Atk +24, Crit Rate +15%, Guard Pierce +15%",
    "acquisition": "Drakenhold Noble House Relic",
    "isMetaCore": true,
    "metaSquads": [
      "zero-8-amalia-grand-crusher"
    ]
  },
  {
    "id": "zenoiran-bow",
    "name": "Zenoiran Bow",
    "type": "Weapon",
    "icon": "⚔️",
    "image": "/images/items/apeliotes-s-bow.png",
    "statBoosts": "Phys Atk +24, Crit Rate +10%, Anti-Flying +50%",
    "acquisition": "Zenoiran Fortress Watchtower",
    "isMetaCore": true,
    "metaSquads": [
      "zero-8-amalia-grand-crusher"
    ]
  },
  {
    "id": "beastfang-blade",
    "name": "Beastfang Blade",
    "type": "Weapon",
    "icon": "⚔️",
    "image": "/images/items/carnelian-blade.png",
    "statBoosts": "Phys Atk +22, Crit Rate +15%, Initiative +5",
    "acquisition": "Bastorias Wolf Clan Altar",
    "isMetaCore": true,
    "metaSquads": [
      "zero-9-bestral-midnight-hunt"
    ]
  },
  {
    "id": "holy-angel-bow",
    "name": "Holy Angel Bow",
    "type": "Weapon",
    "icon": "⚔️",
    "image": "/images/items/apeliotes-s-bow.png",
    "statBoosts": "Phys Atk +24, Mag Atk +18, Blindness Affliction +20%",
    "acquisition": "Albion Angelic Spire",
    "isMetaCore": true,
    "metaSquads": [
      "zero-9-bestral-midnight-hunt"
    ]
  },
  {
    "id": "executioner-s-blade",
    "name": "Executioner's Blade",
    "type": "Weapon",
    "icon": "⚔️",
    "image": "/images/items/kingsblade-cornix.png",
    "statBoosts": "Phys Atk +26, Crit Rate +10%, AP +1 on Kill",
    "acquisition": "Drakenhold Execution Grounds",
    "isMetaCore": true,
    "metaSquads": [
      "zero-9-bestral-midnight-hunt"
    ]
  },
  {
    "id": "zephyrus-sword",
    "name": "Zephyrus Sword",
    "type": "Weapon",
    "icon": "⚔️",
    "image": "/images/items/notos-s-sword.png",
    "statBoosts": "Phys Atk +24, Initiative +8, Evasion +15",
    "acquisition": "Albion Sky Temple Treasury",
    "isMetaCore": true,
    "metaSquads": [
      "zero-10-sanatio-divine-reflection"
    ]
  },
  {
    "id": "angel-crest",
    "name": "Angel Crest",
    "type": "Accessory",
    "icon": "💎",
    "image": "/images/items/wingline-standard.png",
    "statBoosts": "Squad Flying Atk +15%, Initiative +5",
    "acquisition": "Albion Heavenly Citadel",
    "isMetaCore": true,
    "metaSquads": [
      "zero-10-sanatio-divine-reflection"
    ]
  },
  {
    "id": "dragonbone-sword",
    "name": "Dragonbone Sword",
    "type": "Weapon",
    "icon": "⚔️",
    "image": "/images/items/dragonbone-blade.png",
    "statBoosts": "Phys Atk +22, PP +1, Initiative -10",
    "acquisition": "Drakenhold Dragon Graveyard",
    "isMetaCore": true,
    "metaSquads": [
      "zero-8-amalia-grand-crusher"
    ]
  },
  {
    "id": "venom-blade",
    "name": "Venom Blade",
    "type": "Weapon",
    "icon": "🗡️",
    "statBoosts": "Physickal Attack +18, Poison Strike",
    "acquisition": "Sold at Cornia Black Market / Drakenhold Armorer.",
    "isMetaCore": true,
    "metaSquads": []
  },
  {
    "id": "vorpal-sword",
    "name": "Vorpal Sword",
    "type": "Weapon",
    "icon": "🗡️",
    "statBoosts": "Physickal Attack +23, Initiative +3",
    "acquisition": "Found in late-game Bastorias / Albion shops.",
    "isMetaCore": true,
    "metaSquads": []
  }
];
