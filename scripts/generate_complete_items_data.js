const fs = require('fs');

const MASTER_ITEMS = [
  // ==========================================
  // WEAPONS: SWORDS & BLADES
  // ==========================================
  {
    id: "holy-unicorn-blade",
    name: "Holy Unicorn Blade",
    image: "/images/items/holy-unicorn-blade.png",
    type: "Weapon",
    icon: "⚔️",
    statBoosts: "Phys Atk +28, All Stats +5, AP +1",
    acquisition: "Sanctuary of the Unicorn Quest",
    isMetaCore: true,
    metaSquads: ["1. Alain Holy Vanguard & Cavalry Blitz"]
  },
  {
    id: "kingsblade-cornix",
    name: "Kingsblade Cornix",
    image: "/images/items/kingsblade-cornix.png",
    type: "Weapon",
    icon: "⚔️",
    statBoosts: "Phys Atk +28, All Stats +5",
    acquisition: "Cornia Treasure Quest (King's Tomb)",
    isMetaCore: true,
    metaSquads: ["1. Alain Holy Vanguard & Cavalry Blitz", "5. Virginia Valkyrian Counter Fortress"]
  },
  {
    id: "notos-s-sword",
    name: "Notos's Sword",
    image: "/images/items/notos-s-sword.png",
    type: "Weapon",
    icon: "⚔️",
    statBoosts: "Phys Atk +27, Initiative +8, Crit Rate +10%",
    acquisition: "Albion Wind Altar",
    isMetaCore: true,
    metaSquads: ["1. Alain Holy Vanguard & Cavalry Blitz"]
  },
  {
    id: "divine-sword",
    name: "Divine Sword",
    image: "/images/items/divine-sword.png",
    type: "Weapon",
    icon: "⚔️",
    statBoosts: "Phys Atk +26, Mag Atk +10, HP Recovery +15%",
    acquisition: "Sanctuary Armorer / Albion Quest",
    isMetaCore: false,
    metaSquads: ["1. Alain Holy Vanguard & Cavalry Blitz"]
  },
  {
    id: "hallowed-blade",
    name: "Hallowed Blade",
    image: "/images/items/hallowed-blade.png",
    type: "Weapon",
    icon: "⚔️",
    statBoosts: "Phys Atk +25, Mag Atk +12, HP Regen +10%",
    acquisition: "Sanctuary Armory",
    isMetaCore: false,
    metaSquads: ["1. Alain Holy Vanguard & Cavalry Blitz"]
  },
  {
    id: "maiden-s-sword",
    name: "Maiden's Sword",
    image: "/images/items/maiden-s-sword.png",
    type: "Weapon",
    icon: "⚔️",
    statBoosts: "Phys Atk +24, Mag Atk +14, Guard Rate +15%",
    acquisition: "Maiden's Sanctuary",
    isMetaCore: true,
    metaSquads: ["5. Virginia Valkyrian Counter Fortress"]
  },
  {
    id: "royal-saber",
    name: "Royal Saber",
    image: "/images/items/royal-saber.png",
    type: "Weapon",
    icon: "⚔️",
    statBoosts: "Phys Atk +24, Initiative +5, Crit Rate +10%",
    acquisition: "Cornia Royal Armory",
    isMetaCore: false,
    metaSquads: ["1. Alain Holy Vanguard & Cavalry Blitz"]
  },
  {
    id: "meteorite-sword",
    name: "Meteorite Sword",
    image: "/images/items/meteorite-sword.png",
    type: "Weapon",
    icon: "⚔️",
    statBoosts: "Phys Atk +25, Max HP +20, Guard Rate +10%",
    acquisition: "Meteorite Quarry Quest",
    isMetaCore: false,
    metaSquads: []
  },
  {
    id: "runic-sword",
    name: "Runic Sword",
    image: "/images/items/runic-sword.png",
    type: "Weapon",
    icon: "⚔️",
    statBoosts: "Phys Atk +18, Mag Atk +22, Granted Skill: Magic Attack",
    acquisition: "Elheim Mage Forge",
    isMetaCore: true,
    grantedSkill: {
      name: "Magick Weapon",
      cost: "1 AP",
      description: "Infuse sword strike with pure magic potency, targeting Magic Defense instead of Physical."
    },
    metaSquads: ["7. Elven Twin Sisters Elemental Tempest"]
  },
  {
    id: "phantom-knight-s-sword",
    name: "Phantom Knight's Sword",
    image: "/images/items/phantom-knight-s-sword.png",
    type: "Weapon",
    icon: "⚔️",
    statBoosts: "Phys Atk +20, Mag Atk +20, Mag Def +10",
    acquisition: "Zenoiran Crypts",
    isMetaCore: false,
    metaSquads: []
  },
  {
    id: "carnelian-blade",
    name: "Carnelian Blade",
    image: "/images/items/carnelian-blade.png",
    type: "Weapon",
    icon: "⚔️",
    statBoosts: "Phys Atk +22, AP +1",
    acquisition: "Coliseum Prize Exchange",
    isMetaCore: true,
    metaSquads: ["1. Alain Holy Vanguard & Cavalry Blitz", "8. Gilbert Royal Cavalry Supremacy"]
  },
  {
    id: "keen-broadsword",
    name: "Keen Broadsword",
    image: "/images/items/keen-broadsword.png",
    type: "Weapon",
    icon: "⚔️",
    statBoosts: "Phys Atk +20, Crit Rate +20%",
    acquisition: "Drakenhold Blacksmith",
    isMetaCore: false,
    metaSquads: ["5. Virginia Valkyrian Counter Fortress"]
  },
  {
    id: "pursuants-blade",
    name: "Pursuant's Blade",
    image: "/images/items/pursuants-blade.png",
    type: "Weapon",
    icon: "⚔️",
    statBoosts: "Phys Atk +19, Granted Skill: Following Slash",
    acquisition: "Drakenhold Secret Merchant",
    isMetaCore: true,
    grantedSkill: {
      name: "Following Slash",
      cost: "1 PP",
      description: "Perform a pursuit physical attack against an enemy struck by an ally."
    },
    metaSquads: ["8. Gilbert Royal Cavalry Supremacy"]
  },
  {
    id: "steel-blade",
    name: "Steel Blade",
    image: "/images/items/steel-blade.png",
    type: "Weapon",
    icon: "⚔️",
    statBoosts: "Phys Atk +18, Guard Rate +5%",
    acquisition: "Early-Game Armorer",
    isMetaCore: false,
    metaSquads: []
  },
  {
    id: "iron-broadsword",
    name: "Iron Broadsword",
    image: "/images/items/iron-broadsword.png",
    type: "Weapon",
    icon: "⚔️",
    statBoosts: "Phys Atk +14, Max HP +10",
    acquisition: "Cornia Towns",
    isMetaCore: false,
    metaSquads: []
  },
  {
    id: "iron-sword",
    name: "Iron Sword",
    image: "/images/items/iron-sword.png",
    type: "Weapon",
    icon: "⚔️",
    statBoosts: "Phys Atk +12",
    acquisition: "Starting Equipment",
    isMetaCore: false,
    metaSquads: []
  },
  {
    id: "bronze-sword",
    name: "Bronze Sword",
    image: "/images/items/bronze-sword.png",
    type: "Weapon",
    icon: "⚔️",
    statBoosts: "Phys Atk +9",
    acquisition: "Starting Equipment",
    isMetaCore: false,
    metaSquads: []
  },
  {
    id: "parrying-dagger",
    name: "Parrying Dagger",
    image: "/images/items/parrying-dagger.png",
    type: "Offhand",
    icon: "🗡️",
    statBoosts: "Phys Atk +15, Evasion +15, Granted Skill: Parrying Slash",
    acquisition: "Bastorias Underground Market",
    isMetaCore: true,
    grantedSkill: {
      name: "Parrying Slash",
      cost: "1 PP",
      description: "Nullify a single physical attack and retaliate with a swift strike."
    },
    metaSquads: ["5. Virginia Valkyrian Counter Fortress", "8. Gilbert Royal Cavalry Supremacy"]
  },
  {
    id: "poisoners-dagger",
    name: "Poisoner's Dagger",
    image: "/images/items/poisoners-dagger.png",
    type: "Offhand",
    icon: "🗡️",
    statBoosts: "Phys Atk +14, Inflicts Poison on hit",
    acquisition: "Black Market Merchant",
    isMetaCore: true,
    grantedSkill: {
      name: "Toxic Thrust",
      cost: "1 AP",
      description: "Strike an enemy target with a 100% chance to inflict Poison."
    },
    metaSquads: ["4. Berengaria Affliction & Death Spiral"]
  },
  {
    id: "shadow-dagger",
    name: "Shadow Dagger",
    image: "/images/items/shadow-dagger.png",
    type: "Offhand",
    icon: "🗡️",
    statBoosts: "Phys Atk +16, Crit Rate +15%, Evasion +10",
    acquisition: "Bastorias Night Market",
    isMetaCore: false,
    metaSquads: ["4. Berengaria Affliction & Death Spiral"]
  },
  {
    id: "thiefs-dagger",
    name: "Thief's Dagger",
    image: "/images/items/thiefs-dagger.png",
    type: "Offhand",
    icon: "🗡️",
    statBoosts: "Phys Atk +10, Evasion +12, Steals PP on hit",
    acquisition: "Cornia Bandit Den",
    isMetaCore: false,
    metaSquads: []
  },

  // ==========================================
  // WEAPONS: SPEARS & LANCES
  // ==========================================
  {
    id: "kingslance-elhal",
    name: "Kingslance Elhal",
    image: "/images/items/kingslance-elhal.png",
    type: "Weapon",
    icon: "⚔️",
    statBoosts: "Phys Atk +28, All Stats +5",
    acquisition: "Elheim Treasure Quest (King's Tomb)",
    isMetaCore: true,
    metaSquads: ["7. Elven Twin Sisters Elemental Tempest"]
  },
  {
    id: "dragoons-war-spear",
    name: "Dragoon's War Spear",
    image: "/images/items/dragoons-war-spear.png",
    type: "Weapon",
    icon: "⚔️",
    statBoosts: "Phys Atk +25, Granted Skill: Dragoon Dive",
    acquisition: "Drakenhold Dragonhaven Haven",
    isMetaCore: true,
    grantedSkill: {
      name: "Dragoon Dive",
      cost: "2 AP",
      description: "Leap into the air and crash down on all enemies for catastrophic physical damage."
    },
    metaSquads: ["3. Dragoon Dive Aerial Cataclysm"]
  },
  {
    id: "silver-bident",
    name: "Silver Bident",
    image: "/images/items/silver-bident.png",
    type: "Weapon",
    icon: "⚔️",
    statBoosts: "Phys Atk +22, Crit Rate +15%, Granted Skill: Penetrate",
    acquisition: "Drakenhold Armorer",
    isMetaCore: true,
    grantedSkill: {
      name: "Penetrate",
      cost: "1 AP",
      description: "Thrust piercing through an entire column of enemies, ignoring 30% Physical Defense."
    },
    metaSquads: ["1. Alain Holy Vanguard & Cavalry Blitz", "8. Gilbert Royal Cavalry Supremacy"]
  },
  {
    id: "sylphid-spear",
    name: "Sylphid Spear",
    image: "/images/items/sylphid-spear.png",
    type: "Weapon",
    icon: "⚔️",
    statBoosts: "Phys Atk +20, Mag Atk +15, Initiative +8",
    acquisition: "Elheim Secret Grove",
    isMetaCore: true,
    metaSquads: ["7. Elven Twin Sisters Elemental Tempest"]
  },
  {
    id: "runic-spear",
    name: "Runic Spear",
    image: "/images/items/runic-spear.png",
    type: "Weapon",
    icon: "⚔️",
    statBoosts: "Phys Atk +18, Mag Atk +20, Mag Def +5",
    acquisition: "Elheim Blacksmith",
    isMetaCore: false,
    metaSquads: []
  },
  {
    id: "meteorite-lance",
    name: "Meteorite Lance",
    image: "/images/items/meteorite-lance.png",
    type: "Weapon",
    icon: "⚔️",
    statBoosts: "Phys Atk +25, Max HP +20, Guard Rate +10%",
    acquisition: "Meteorite Quarry Quest",
    isMetaCore: false,
    metaSquads: []
  },
  {
    id: "dark-flame-spear",
    name: "Dark Flame Spear",
    image: "/images/items/dark-flame-spear.png",
    type: "Weapon",
    icon: "⚔️",
    statBoosts: "Phys Atk +21, Mag Atk +14, Inflicts Burn",
    acquisition: "Zenoiran Crypt Quest",
    isMetaCore: false,
    metaSquads: ["4. Berengaria Affliction & Death Spiral"]
  },
  {
    id: "carnelian-spear",
    name: "Carnelian Spear",
    image: "/images/items/carnelian-spear.png",
    type: "Weapon",
    icon: "⚔️",
    statBoosts: "Phys Atk +22, AP +1",
    acquisition: "Coliseum Prize Exchange",
    isMetaCore: true,
    metaSquads: ["8. Gilbert Royal Cavalry Supremacy"]
  },
  {
    id: "heavy-iron-lance",
    name: "Heavy Iron Lance",
    image: "/images/items/heavy-iron-lance.png",
    type: "Weapon",
    icon: "⚔️",
    statBoosts: "Phys Atk +18, Cavalry Damage +20%",
    acquisition: "Drakenhold Armorer",
    isMetaCore: false,
    metaSquads: []
  },
  {
    id: "iron-spear",
    name: "Iron Spear",
    image: "/images/items/iron-spear.png",
    type: "Weapon",
    icon: "⚔️",
    statBoosts: "Phys Atk +12",
    acquisition: "Starting Equipment",
    isMetaCore: false,
    metaSquads: []
  },
  {
    id: "bronze-spear",
    name: "Bronze Spear",
    image: "/images/items/bronze-spear.png",
    type: "Weapon",
    icon: "⚔️",
    statBoosts: "Phys Atk +9",
    acquisition: "Starting Equipment",
    isMetaCore: false,
    metaSquads: []
  },

  // ==========================================
  // WEAPONS: AXES & GREATAXES
  // ==========================================
  {
    id: "kingsaxe-drakenash",
    name: "Kingsaxe Drakenash",
    image: "/images/items/kingsaxe-drakenash.png",
    type: "Weapon",
    icon: "⚔️",
    statBoosts: "Phys Atk +28, All Stats +5",
    acquisition: "Drakenhold Treasure Quest (King's Tomb)",
    isMetaCore: true,
    metaSquads: ["4. Berengaria Affliction & Death Spiral"]
  },
  {
    id: "boreas-s-axe",
    name: "Boreas's Axe",
    image: "/images/items/boreas-s-axe.png",
    type: "Weapon",
    icon: "⚔️",
    statBoosts: "Phys Atk +27, Guard Penetration +25%",
    acquisition: "Albion Wind Altar",
    isMetaCore: true,
    metaSquads: ["4. Berengaria Affliction & Death Spiral", "9. Yunifi & Werewolf Moonlight Hunt"]
  },
  {
    id: "grand-crusher-greatsword",
    name: "Grand Crusher Greatsword",
    image: "/images/items/grand-crusher-greatsword.png",
    type: "Weapon",
    icon: "⚔️",
    statBoosts: "Phys Atk +26, Guard Penetration +30%, Max HP +15",
    acquisition: "Bastorias Heavy Weapons Merchant",
    isMetaCore: true,
    metaSquads: ["4. Berengaria Affliction & Death Spiral"]
  },
  {
    id: "meteorite-axe",
    name: "Meteorite Axe",
    image: "/images/items/meteorite-axe.png",
    type: "Weapon",
    icon: "⚔️",
    statBoosts: "Phys Atk +26, Max HP +25, Guard Rate +10%",
    acquisition: "Meteorite Quarry Quest",
    isMetaCore: false,
    metaSquads: []
  },
  {
    id: "dragonbone-axe",
    name: "Dragonbone Axe",
    image: "/images/items/dragonbone-axe.png",
    type: "Weapon",
    icon: "⚔️",
    statBoosts: "Phys Atk +24, AP +1, Initiative -10",
    acquisition: "Drakenhold Dragon Ruin",
    isMetaCore: true,
    metaSquads: ["4. Berengaria Affliction & Death Spiral"]
  },
  {
    id: "juggernaut",
    name: "Juggernaut",
    image: "/images/items/juggernaut.png",
    type: "Weapon",
    icon: "⚔️",
    statBoosts: "Phys Atk +26, Granted Skill: Wide Smash, Guard Penetration +50%",
    acquisition: "Bastorias Heavy Weapons Merchant",
    isMetaCore: true,
    grantedSkill: {
      name: "Wide Smash",
      cost: "2 AP",
      description: "Crush an entire front row, smashing through physical guards and inflicting Stun."
    },
    metaSquads: ["4. Berengaria Affliction & Death Spiral"]
  },
  {
    id: "carnelian-axe",
    name: "Carnelian Axe",
    image: "/images/items/carnelian-axe.png",
    type: "Weapon",
    icon: "⚔️",
    statBoosts: "Phys Atk +22, AP +1",
    acquisition: "Coliseum Prize Exchange",
    isMetaCore: true,
    metaSquads: ["4. Berengaria Affliction & Death Spiral"]
  },
  {
    id: "carnelian-greataxe",
    name: "Carnelian Greataxe",
    image: "/images/items/carnelian-greataxe.png",
    type: "Weapon",
    icon: "⚔️",
    statBoosts: "Phys Atk +25, AP +1, Accuracy -5",
    acquisition: "Coliseum Prize Exchange",
    isMetaCore: true,
    metaSquads: ["4. Berengaria Affliction & Death Spiral"]
  },
  {
    id: "giants-greataxe",
    name: "Giant's Greataxe",
    image: "/images/items/giants-greataxe.png",
    type: "Weapon",
    icon: "⚔️",
    statBoosts: "Phys Atk +24, Phys Def +8, Max HP +25",
    acquisition: "Bastorias Fortress Shop",
    isMetaCore: false,
    metaSquads: []
  },
  {
    id: "dark-knight-cleaver",
    name: "Dark Knight Cleaver",
    image: "/images/items/dark-knight-cleaver.png",
    type: "Weapon",
    icon: "⚔️",
    statBoosts: "Phys Atk +21, Mag Atk +12, Crit Rate +10%",
    acquisition: "Zenoiran Crypts",
    isMetaCore: false,
    metaSquads: ["4. Berengaria Affliction & Death Spiral"]
  },

  // ==========================================
  // WEAPONS: BOWS & CROSSBOWS
  // ==========================================
  {
    id: "kingsbow-bastorik",
    name: "Kingsbow Bastorik",
    image: "/images/items/kingsbow-bastorik.png",
    type: "Weapon",
    icon: "⚔️",
    statBoosts: "Phys Atk +28, All Stats +5",
    acquisition: "Bastorias Treasure Quest (King's Tomb)",
    isMetaCore: true,
    metaSquads: ["6. Yunifi Glacial Rain Absolute Zero"]
  },
  {
    id: "apeliotes-s-bow",
    name: "Apeliotes's Bow",
    image: "/images/items/apeliotes-s-bow.png",
    type: "Weapon",
    icon: "⚔️",
    statBoosts: "Phys Atk +27, Initiative +10, Granted Skill: Aerial Snipe",
    acquisition: "Albion Wind Altar",
    isMetaCore: true,
    grantedSkill: {
      name: "Aerial Snipe",
      cost: "1 AP",
      description: "Shoot a high-velocity aerial arrow with 100% Truestrike against Flying units."
    },
    metaSquads: ["6. Yunifi Glacial Rain Absolute Zero"]
  },
  {
    id: "glacial-bow",
    name: "Glacial Bow",
    image: "/images/items/glacial-bow.png",
    type: "Weapon",
    icon: "⚔️",
    statBoosts: "Phys Atk +25, Mag Atk +20, Granted Skill: Glacial Rain",
    acquisition: "Bastorias Ice Peak Shrine",
    isMetaCore: true,
    grantedSkill: {
      name: "Glacial Rain",
      cost: "2 AP",
      description: "Charge a devastating blizzard arrow volley covering all enemies and inflicting Freeze."
    },
    metaSquads: ["6. Yunifi Glacial Rain Absolute Zero"]
  },
  {
    id: "meteorite-bow",
    name: "Meteorite Bow",
    image: "/images/items/meteorite-bow.png",
    type: "Weapon",
    icon: "⚔️",
    statBoosts: "Phys Atk +25, Max HP +20, Accuracy +10",
    acquisition: "Meteorite Quarry Quest",
    isMetaCore: false,
    metaSquads: []
  },
  {
    id: "runic-bow",
    name: "Runic Bow",
    image: "/images/items/runic-bow.png",
    type: "Weapon",
    icon: "⚔️",
    statBoosts: "Phys Atk +16, Mag Atk +20, Mag Def +5",
    acquisition: "Elheim Bowyer",
    isMetaCore: false,
    metaSquads: []
  },
  {
    id: "gallian-crossbow",
    name: "Gallian Crossbow",
    image: "/images/items/gallian-crossbow.png",
    type: "Weapon",
    icon: "⚔️",
    statBoosts: "Phys Atk +23, Truestrike against Flying, Crit Rate +15%",
    acquisition: "Drakenhold Anti-Air Garrison",
    isMetaCore: true,
    metaSquads: ["6. Yunifi Glacial Rain Absolute Zero"]
  },
  {
    id: "divine-bow",
    name: "Divine Bow",
    image: "/images/items/divine-bow.png",
    type: "Weapon",
    icon: "⚔️",
    statBoosts: "Phys Atk +24, Mag Atk +12, Accuracy +20",
    acquisition: "Albion Cathedral Armory",
    isMetaCore: false,
    metaSquads: ["6. Yunifi Glacial Rain Absolute Zero"]
  },
  {
    id: "eagle-eye-bow",
    name: "Eagle Eye Bow",
    image: "/images/items/eagle-eye-bow.png",
    type: "Weapon",
    icon: "⚔️",
    statBoosts: "Phys Atk +20, Accuracy +30, Truestrike",
    acquisition: "Elheim Archer Sanctuary",
    isMetaCore: false,
    metaSquads: []
  },
  {
    id: "sacral-bow",
    name: "Sacral Bow",
    image: "/images/items/sacral-bow.png",
    type: "Weapon",
    icon: "⚔️",
    statBoosts: "Phys Atk +21, HP Regen +10%, Mag Def +5",
    acquisition: "Sacred Church Vaults",
    isMetaCore: false,
    metaSquads: []
  },
  {
    id: "carnelian-bow",
    name: "Carnelian Bow",
    image: "/images/items/carnelian-bow.png",
    type: "Weapon",
    icon: "⚔️",
    statBoosts: "Phys Atk +22, AP +1",
    acquisition: "Coliseum Prize Exchange",
    isMetaCore: true,
    metaSquads: ["6. Yunifi Glacial Rain Absolute Zero"]
  },

  // ==========================================
  // WEAPONS: STAFFS, SCEPTERS & RODS
  // ==========================================
  {
    id: "kingstaff-albiore",
    name: "Kingstaff Albiore",
    image: "/images/items/kingstaff-albiore.png",
    type: "Weapon",
    icon: "⚔️",
    statBoosts: "Mag Atk +28, All Stats +5",
    acquisition: "Albion Treasure Quest (King's Tomb)",
    isMetaCore: true,
    metaSquads: ["10. Sanatio Divine Sacred Zenith & Magic Reflection"]
  },
  {
    id: "millennium-scepter",
    name: "Millennium Scepter",
    image: "/images/items/millennium-scepter.png",
    type: "Weapon",
    icon: "⚔️",
    statBoosts: "Mag Atk +25, Granted Skill: Trinity Rain",
    acquisition: "Coliseum Prize Exchange (2000 CC)",
    isMetaCore: true,
    grantedSkill: {
      name: "Trinity Rain",
      cost: "3 AP",
      description: "Charge a divine 3-hit radiant magical rain striking all combatants."
    },
    metaSquads: ["2. Trinity Rain Instant Apocalypse"]
  },
  {
    id: "euros-s-staff",
    name: "Euros's Staff",
    image: "/images/items/euros-s-staff.png",
    type: "Weapon",
    icon: "⚔️",
    statBoosts: "Mag Atk +27, Initiative +8, Mag Crit +15%",
    acquisition: "Albion Wind Altar",
    isMetaCore: true,
    metaSquads: ["2. Trinity Rain Instant Apocalypse"]
  },
  {
    id: "sandstorm-staff",
    name: "Sandstorm Staff",
    image: "/images/items/sandstorm-staff.png",
    type: "Weapon",
    icon: "⚔️",
    statBoosts: "Mag Atk +22, Granted Skill: Sandstorm",
    acquisition: "Drakenhold Desert Tomb",
    isMetaCore: true,
    grantedSkill: {
      name: "Sandstorm",
      cost: "2 AP",
      description: "At Start of Battle, whip up a blinding sandstorm inflicting Blindness on all enemies."
    },
    metaSquads: ["2. Trinity Rain Instant Apocalypse"]
  },
  {
    id: "sacred-feather-rod",
    name: "Sacred Feather Rod",
    image: "/images/items/sacred-feather-rod.png",
    type: "Weapon",
    icon: "⚔️",
    statBoosts: "Mag Atk +25, Healing Potency +30%, PP +1",
    acquisition: "Albion Sanctum",
    isMetaCore: true,
    metaSquads: ["10. Sanatio Divine Sacred Zenith & Magic Reflection"]
  },
  {
    id: "chlorotic-staff",
    name: "Chlorotic Staff",
    image: "/images/items/chlorotic-staff.png",
    type: "Weapon",
    icon: "⚔️",
    statBoosts: "Mag Atk +22, Granted Skill: Fire Burst",
    acquisition: "Drakenhold Secret Grove",
    isMetaCore: true,
    grantedSkill: {
      name: "Fire Burst",
      cost: "2 AP",
      description: "Cast high-potency fire blast striking an enemy column and inflicting heavy Burn."
    },
    metaSquads: ["2. Trinity Rain Instant Apocalypse", "7. Elven Twin Sisters Elemental Tempest"]
  },
  {
    id: "sacral-rod",
    name: "Sacral Rod",
    image: "/images/items/sacral-rod.png",
    type: "Weapon",
    icon: "⚔️",
    statBoosts: "Mag Atk +23, Mag Def +8, HP Regen +15%",
    acquisition: "Albion Sacred Sanctuary",
    isMetaCore: true,
    metaSquads: ["2. Trinity Rain Instant Apocalypse", "10. Sanatio Divine Sacred Zenith & Magic Reflection"]
  },
  {
    id: "hallowed-staff",
    name: "Hallowed Staff",
    image: "/images/items/hallowed-staff.png",
    type: "Weapon",
    icon: "⚔️",
    statBoosts: "Mag Atk +22, Healing Potency +25%, Max HP +15",
    acquisition: "Holy Church Sanctuary",
    isMetaCore: false,
    metaSquads: ["2. Trinity Rain Instant Apocalypse"]
  },
  {
    id: "hallowed-cane",
    name: "Hallowed Cane",
    image: "/images/items/hallowed-cane.png",
    type: "Weapon",
    icon: "⚔️",
    statBoosts: "Mag Atk +20, Healing Potency +25%",
    acquisition: "Elheim High Temple",
    isMetaCore: false,
    metaSquads: ["2. Trinity Rain Instant Apocalypse"]
  },
  {
    id: "hallowed-mace",
    name: "Hallowed Mace",
    image: "/images/items/hallowed-mace.png",
    type: "Weapon",
    icon: "⚔️",
    statBoosts: "Phys Atk +18, Mag Atk +18, Healing +20%",
    acquisition: "Holy Church Vaults",
    isMetaCore: false,
    metaSquads: ["10. Sanatio Divine Sacred Zenith & Magic Reflection"]
  },
  {
    id: "meteorite-rod",
    name: "Meteorite Rod",
    image: "/images/items/meteorite-rod.png",
    type: "Weapon",
    icon: "⚔️",
    statBoosts: "Mag Atk +25, Max HP +20",
    acquisition: "Meteorite Quarry Quest",
    isMetaCore: false,
    metaSquads: []
  },
  {
    id: "runic-rod",
    name: "Runic Rod",
    image: "/images/items/runic-rod.png",
    type: "Weapon",
    icon: "⚔️",
    statBoosts: "Mag Atk +22, Mag Def +10, Max MP +10",
    acquisition: "Elheim Mage Academy",
    isMetaCore: false,
    metaSquads: ["2. Trinity Rain Instant Apocalypse"]
  },
  {
    id: "pestilent-staff",
    name: "Pestilent Staff",
    image: "/images/items/pestilent-staff.png",
    type: "Weapon",
    icon: "⚔️",
    statBoosts: "Mag Atk +20, Granted Skill: Poison Hex",
    acquisition: "Cornia Witch Coven",
    isMetaCore: true,
    grantedSkill: {
      name: "Poison Hex",
      cost: "1 AP",
      description: "Curse a target enemy row with Poison and reduce Guard Rate by 30%."
    },
    metaSquads: ["4. Berengaria Affliction & Death Spiral"]
  },
  {
    id: "poison-hex-staff",
    name: "Poison Hex Staff",
    image: "/images/items/pestilent-staff.png",
    type: "Weapon",
    icon: "⚔️",
    statBoosts: "Mag Atk +20, Granted Skill: Poison Hex",
    acquisition: "Cornia Witch Coven",
    isMetaCore: true,
    grantedSkill: {
      name: "Poison Hex",
      cost: "1 AP",
      description: "Curse a target enemy row with Poison and reduce Guard Rate by 30%."
    },
    metaSquads: ["4. Berengaria Affliction & Death Spiral"]
  },
  {
    id: "carnelian-staff",
    name: "Carnelian Staff",
    image: "/images/items/carnelian-staff.png",
    type: "Weapon",
    icon: "⚔️",
    statBoosts: "Mag Atk +22, AP +1",
    acquisition: "Coliseum Prize Exchange",
    isMetaCore: true,
    metaSquads: ["2. Trinity Rain Instant Apocalypse"]
  },

  // ==========================================
  // SHIELDS & GREATSHIELDS
  // ==========================================
  {
    id: "greatshield-of-the-maiden",
    name: "Greatshield of the Maiden",
    image: "/images/items/greatshield-of-the-maiden.png",
    type: "Shield",
    icon: "🛡️",
    statBoosts: "Phys Def +15, Guard Rate +40%, Debuff Immunity",
    acquisition: "Maiden Sanctuary Quest",
    isMetaCore: true,
    metaSquads: ["2. Trinity Rain Instant Apocalypse", "5. Virginia Valkyrian Counter Fortress"]
  },
  {
    id: "greatshield-of-fortitude",
    name: "Greatshield of Fortitude",
    image: "/images/items/greatshield-of-fortitude.png",
    type: "Shield",
    icon: "🛡️",
    statBoosts: "Phys Def +18, Guard Rate +35%, Prevents Lethal Damage 1 time",
    acquisition: "Albion Fortress Armorer",
    isMetaCore: true,
    metaSquads: ["2. Trinity Rain Instant Apocalypse", "5. Virginia Valkyrian Counter Fortress"]
  },
  {
    id: "azure-crest-shield",
    name: "Azure Crest Shield",
    image: "/images/items/azure-crest-shield.png",
    type: "Shield",
    icon: "🛡️",
    statBoosts: "Phys Def +12, Mag Def +12, PP +1, Guard Rate +30%",
    acquisition: "Coliseum Prize Exchange",
    isMetaCore: true,
    metaSquads: ["2. Trinity Rain Instant Apocalypse", "5. Virginia Valkyrian Counter Fortress"]
  },
  {
    id: "radiant-shield",
    name: "Radiant Shield",
    image: "/images/items/radiant-shield.png",
    type: "Shield",
    icon: "🛡️",
    statBoosts: "Phys Def +14, Mag Def +14, Granted Skill: Sacred Barrier",
    acquisition: "Albion Paladin Armory",
    isMetaCore: true,
    grantedSkill: {
      name: "Sacred Barrier",
      cost: "1 PP",
      description: "Grant a divine protective shield to front row allies absorbing up to 50 HP of damage."
    },
    metaSquads: ["10. Sanatio Divine Sacred Zenith & Magic Reflection"]
  },
  {
    id: "rose-shield",
    name: "Rose Shield",
    image: "/images/items/rose-shield.png",
    type: "Shield",
    icon: "🛡️",
    statBoosts: "Phys Def +13, Mag Def +10, Guard Rate +35%, PP +1",
    acquisition: "Virginia's Knights of the Rose Vault",
    isMetaCore: true,
    metaSquads: ["5. Virginia Valkyrian Counter Fortress"]
  },
  {
    id: "heavy-guard-shield",
    name: "Heavy Guard Shield",
    image: "/images/items/heavy-guard-shield.png",
    type: "Shield",
    icon: "🛡️",
    statBoosts: "Phys Def +14, Guard Rate +35%, Guard Damage Reduction +15%",
    acquisition: "Drakenhold Heavy Armory",
    isMetaCore: false,
    metaSquads: ["2. Trinity Rain Instant Apocalypse"]
  },
  {
    id: "deflect-shield",
    name: "Deflect Shield",
    image: "/images/items/deflect-shield.png",
    type: "Shield",
    icon: "🛡️",
    statBoosts: "Phys Def +10, Evasion +15, Granted Skill: Deflect",
    acquisition: "Bastorias Shield Smith",
    isMetaCore: false,
    grantedSkill: {
      name: "Deflect",
      cost: "1 PP",
      description: "Deflect an incoming single-target physical projectile attack entirely."
    },
    metaSquads: []
  },
  {
    id: "gryphon-shield",
    name: "Gryphon Shield",
    image: "/images/items/gryphon-shield.png",
    type: "Shield",
    icon: "🛡️",
    statBoosts: "Phys Def +10, Mag Def +8, Evasion +10, Guard Rate +25%",
    acquisition: "Elheim Skyguard Garrison",
    isMetaCore: false,
    metaSquads: ["3. Dragoon Dive Aerial Cataclysm"]
  },
  {
    id: "angel-shield",
    name: "Angel Shield",
    image: "/images/items/angel-shield.png",
    type: "Shield",
    icon: "🛡️",
    statBoosts: "Mag Def +16, Guard Rate +30%, Granted Skill: Magic Guard",
    acquisition: "Albion Angelic Sanctuary",
    isMetaCore: true,
    grantedSkill: {
      name: "Magic Guard",
      cost: "1 PP",
      description: "Erect a barrier reducing incoming magical damage by 50% for self and ally."
    },
    metaSquads: ["10. Sanatio Divine Sacred Zenith & Magic Reflection"]
  },
  {
    id: "angels-reflection-shield",
    name: "Angel's Reflection Shield",
    image: "/images/items/angels-reflection-shield.png",
    type: "Shield",
    icon: "🛡️",
    statBoosts: "Mag Def +18, Granted Skill: Magic Reflect",
    acquisition: "Albion Cathedral Treasury",
    isMetaCore: true,
    grantedSkill: {
      name: "Magic Reflect",
      cost: "2 PP",
      description: "Reflect incoming magical spells directly back at the caster."
    },
    metaSquads: ["10. Sanatio Divine Sacred Zenith & Magic Reflection"]
  },
  {
    id: "doom-shield",
    name: "Doom Shield",
    image: "/images/items/doom-shield.png",
    type: "Shield",
    icon: "🛡️",
    statBoosts: "Phys Def +16, Phys Atk +5, Guard Rate +30%",
    acquisition: "Zenoiran Ruin Vaults",
    isMetaCore: false,
    metaSquads: ["4. Berengaria Affliction & Death Spiral"]
  },
  {
    id: "crown-shield",
    name: "Crown Shield",
    image: "/images/items/crown-shield.png",
    type: "Shield",
    icon: "🛡️",
    statBoosts: "Phys Def +12, Mag Def +10, Guard Rate +30%, Max HP +20",
    acquisition: "Cornia Palace Vaults",
    isMetaCore: false,
    metaSquads: ["5. Virginia Valkyrian Counter Fortress"]
  },
  {
    id: "knight-shield",
    name: "Knight Shield",
    image: "/images/items/knight-shield.png",
    type: "Shield",
    icon: "🛡️",
    statBoosts: "Phys Def +8, Guard Rate +25%",
    acquisition: "Town Armorer",
    isMetaCore: false,
    metaSquads: []
  },
  {
    id: "silver-shield",
    name: "Silver Shield",
    image: "/images/items/silver-shield.png",
    type: "Shield",
    icon: "🛡️",
    statBoosts: "Phys Def +10, Mag Def +5, Guard Rate +28%",
    acquisition: "Mid-Game Armorer",
    isMetaCore: false,
    metaSquads: []
  },
  {
    id: "bronze-shield",
    name: "Bronze Shield",
    image: "/images/items/bronze-shield.png",
    type: "Shield",
    icon: "🛡️",
    statBoosts: "Phys Def +5, Guard Rate +20%",
    acquisition: "Early Game Armorer",
    isMetaCore: false,
    metaSquads: []
  },
  {
    id: "tower-shield",
    name: "Tower Shield",
    image: "/images/items/tower-shield.png",
    type: "Shield",
    icon: "🛡️",
    statBoosts: "Phys Def +15, Guard Rate +40%, Initiative -5",
    acquisition: "Bastorias Heavy Shield Smith",
    isMetaCore: false,
    metaSquads: []
  },
  {
    id: "silverscale-shield",
    name: "Silverscale Shield",
    image: "/images/items/silverscale-shield.png",
    type: "Shield",
    icon: "🛡️",
    statBoosts: "Phys Def +9, Mag Def +9, Guard Rate +25%",
    acquisition: "Elheim Water Sanctuary",
    isMetaCore: false,
    metaSquads: []
  },

  // ==========================================
  // HELMETS & HOODS
  // ==========================================
  {
    id: "cat-ear-hood",
    name: "Cat-Ear Hood",
    image: "/images/items/cat-ear-hood.png",
    type: "Helm",
    icon: "👑",
    statBoosts: "Mag Def +5, PP +1, Granted Skill: Quick Impetus",
    acquisition: "Coliseum Exchange (1500 CC)",
    isMetaCore: true,
    grantedSkill: {
      name: "Quick Impetus",
      cost: "2 PP",
      description: "When an ally uses an active charging or ultimate skill, immediately grant them +1 full turn."
    },
    metaSquads: [
      "2. Trinity Rain Instant Apocalypse",
      "3. Dragoon Dive Aerial Cataclysm",
      "6. Yunifi Glacial Rain Absolute Zero"
    ]
  },
  {
    id: "white-cat-ear-hood",
    name: "White Cat-Ear Hood",
    image: "/images/items/white-cat-ear-hood.png",
    type: "Helm",
    icon: "👑",
    statBoosts: "Mag Def +8, PP +1, Granted Skill: Quick Impetus",
    acquisition: "Albion Secret Feline Shrine",
    isMetaCore: true,
    grantedSkill: {
      name: "Quick Impetus",
      cost: "2 PP",
      description: "When an ally uses an active charging skill, immediately give them +1 immediate turn."
    },
    metaSquads: ["3. Dragoon Dive Aerial Cataclysm"]
  },
  {
    id: "elven-crown",
    name: "Elven Crown",
    image: "/images/items/elven-crown.png",
    type: "Helm",
    icon: "👑",
    statBoosts: "All Stats +5, Mag Def +15, PP +1",
    acquisition: "Elheim High Royalty Sanctuary",
    isMetaCore: true,
    metaSquads: ["7. Elven Twin Sisters Elemental Tempest"]
  },
  {
    id: "ancient-crown",
    name: "Ancient Crown",
    image: "/images/items/ancient-crown.png",
    type: "Helm",
    icon: "👑",
    statBoosts: "All Stats +5, AP +1, PP +1",
    acquisition: "Albion Zenith Altar",
    isMetaCore: true,
    metaSquads: ["1. Alain Holy Vanguard & Cavalry Blitz", "5. Virginia Valkyrian Counter Fortress"]
  },
  {
    id: "sages-hood",
    name: "Sage's Hood",
    image: "/images/items/sages-hood.png",
    type: "Helm",
    icon: "👑",
    statBoosts: "Mag Def +10, Mag Atk +5, Max MP +10",
    acquisition: "Elheim Mage Tower",
    isMetaCore: false,
    metaSquads: ["2. Trinity Rain Instant Apocalypse"]
  },
  {
    id: "silk-hood",
    name: "Silk Hood",
    image: "/images/items/silk-hood.png",
    type: "Helm",
    icon: "👑",
    statBoosts: "Mag Def +8, Evasion +5",
    acquisition: "Cornia Textile Guild",
    isMetaCore: false,
    metaSquads: ["2. Trinity Rain Instant Apocalypse"]
  },
  {
    id: "snow-wolf-hood",
    name: "Snow Wolf Hood",
    image: "/images/items/snow-wolf-hood.png",
    type: "Helm",
    icon: "👑",
    statBoosts: "Phys Atk +3, Crit Rate +10%, Night Battle +15%",
    acquisition: "Bastorias Wolf Clan Haven",
    isMetaCore: true,
    metaSquads: ["9. Yunifi & Werewolf Moonlight Hunt"]
  },
  {
    id: "wolf-cap",
    name: "Wolf Cap",
    image: "/images/items/wolf-cap.png",
    type: "Helm",
    icon: "👑",
    statBoosts: "Phys Atk +2, Initiative +4, Crit Rate +8%",
    acquisition: "Bastorias Camp",
    isMetaCore: false,
    metaSquads: ["9. Yunifi & Werewolf Moonlight Hunt"]
  },
  {
    id: "angel-cap",
    name: "Angel Cap",
    image: "/images/items/angel-cap.png",
    type: "Helm",
    icon: "👑",
    statBoosts: "Mag Def +8, Evasion +10, Accuracy +10",
    acquisition: "Albion Sanctuary",
    isMetaCore: false,
    metaSquads: ["10. Sanatio Divine Sacred Zenith & Magic Reflection"]
  },
  {
    id: "elven-tiara",
    name: "Elven Tiara",
    image: "/images/items/elven-tiara.png",
    type: "Helm",
    icon: "👑",
    statBoosts: "Mag Def +12, Mag Atk +6, PP +1",
    acquisition: "Elheim Royalty Sanctum",
    isMetaCore: true,
    metaSquads: ["7. Elven Twin Sisters Elemental Tempest"]
  },
  {
    id: "sniper-hood",
    name: "Sniper Hood",
    image: "/images/items/sniper-hood.png",
    type: "Helm",
    icon: "👑",
    statBoosts: "Accuracy +20, Crit Rate +10%",
    acquisition: "Bastorias Archer Outpost",
    isMetaCore: false,
    metaSquads: ["6. Yunifi Glacial Rain Absolute Zero"]
  },
  {
    id: "elite-beret",
    name: "Elite Beret",
    image: "/images/items/elite-beret.png",
    type: "Helm",
    icon: "👑",
    statBoosts: "Phys Atk +3, Initiative +6",
    acquisition: "Cornia Knights Training Ground",
    isMetaCore: false,
    metaSquads: []
  },
  {
    id: "archbishops-mitre",
    name: "Archbishop's Mitre",
    image: "/images/items/archbishops-mitre.png",
    type: "Helm",
    icon: "👑",
    statBoosts: "Mag Def +14, Healing Potency +30%",
    acquisition: "Holy See Cathedral",
    isMetaCore: false,
    metaSquads: ["10. Sanatio Divine Sacred Zenith & Magic Reflection"]
  },
  {
    id: "monks-mitre",
    name: "Monk's Mitre",
    image: "/images/items/monks-mitre.png",
    type: "Helm",
    icon: "👑",
    statBoosts: "Mag Def +8, Healing Potency +15%",
    acquisition: "Cornia Monastery",
    isMetaCore: false,
    metaSquads: []
  },
  {
    id: "shadow-hood",
    name: "Shadow Hood",
    image: "/images/items/shadow-hood.png",
    type: "Helm",
    icon: "👑",
    statBoosts: "Evasion +15, Crit Rate +10%",
    acquisition: "Bastorias Night Market",
    isMetaCore: false,
    metaSquads: ["4. Berengaria Affliction & Death Spiral"]
  },
  {
    id: "leather-hood",
    name: "Leather Hood",
    image: "/images/items/leather-hood.png",
    type: "Helm",
    icon: "👑",
    statBoosts: "Phys Def +3, Mag Def +3",
    acquisition: "Town Shop",
    isMetaCore: false,
    metaSquads: []
  },
  {
    id: "cleric-hat",
    name: "Cleric Hat",
    image: "/images/items/cleric-hat.png",
    type: "Helm",
    icon: "👑",
    statBoosts: "Mag Def +6, Max MP +5",
    acquisition: "Starting Equipment",
    isMetaCore: false,
    metaSquads: []
  },

  // ==========================================
  // ACCESSORIES: EYEWEAR, REINS, LENSES & PINS
  // ==========================================
  {
    id: "snipers-amber-lens",
    name: "Sniper's Amber Lens",
    image: "/images/items/snipers-amber-lens.png",
    type: "Accessory",
    icon: "🔍",
    statBoosts: "Crit Damage +20%, Granted Skill: Eagle Eye & Hawkeye",
    acquisition: "Bastorias Black Market / Coliseum",
    isMetaCore: true,
    grantedSkill: {
      name: "Eagle Eye",
      cost: "1 PP",
      description: "Grants Truestrike and guarantees 100% Critical Hit rate on the next active attack."
    },
    metaSquads: [
      "2. Trinity Rain Instant Apocalypse",
      "3. Dragoon Dive Aerial Cataclysm",
      "6. Yunifi Glacial Rain Absolute Zero"
    ]
  },
  {
    id: "snipers-lens",
    name: "Sniper's Lens",
    image: "/images/items/snipers-lens.png",
    type: "Accessory",
    icon: "🔍",
    statBoosts: "Accuracy +20, Granted Skill: Hawkeye (100% Truestrike)",
    acquisition: "Bastorias Market",
    isMetaCore: false,
    grantedSkill: {
      name: "Hawkeye",
      cost: "1 PP",
      description: "Grants Truestrike to the user's next active skill."
    },
    metaSquads: ["6. Yunifi Glacial Rain Absolute Zero"]
  },
  {
    id: "familiars-choker",
    name: "Familiar's Choker",
    image: "/images/items/familiars-choker.png",
    type: "Accessory",
    icon: "📿",
    statBoosts: "Mag Atk +10, Granted Skill: Sorcerous Connection",
    acquisition: "Elheim Witch Market",
    isMetaCore: true,
    grantedSkill: {
      name: "Sorcerous Connection",
      cost: "1 PP",
      description: "When an ally casts magic attack, increase their Magical Attack by 50% and Magic Crit Rate by 30%."
    },
    metaSquads: [
      "2. Trinity Rain Instant Apocalypse",
      "7. Elven Twin Sisters Elemental Tempest"
    ]
  },
  {
    id: "wyvern-reins",
    name: "Wyvern Reins",
    image: "/images/items/wyvern-reins.png",
    type: "Accessory",
    icon: "📿",
    statBoosts: "Flying Phys Atk +20%, Accuracy +15, Truestrike",
    acquisition: "Drakenhold Dragon Lair",
    isMetaCore: true,
    metaSquads: ["3. Dragoon Dive Aerial Cataclysm"]
  },
  {
    id: "heavenwyvern-reins",
    name: "Heavenwyvern Reins",
    image: "/images/items/heavenwyvern-reins.png",
    type: "Accessory",
    icon: "📿",
    statBoosts: "Flying Phys Atk +30%, PP +1, Truestrike",
    acquisition: "Albion Sky Sanctuary",
    isMetaCore: true,
    metaSquads: ["3. Dragoon Dive Aerial Cataclysm"]
  },
  {
    id: "heavensteed-reins",
    name: "Heavensteed Reins",
    image: "/images/items/heavensteed-reins.png",
    type: "Accessory",
    icon: "📿",
    statBoosts: "Cavalry Phys Atk +25%, Initiative +8, PP +1",
    acquisition: "Albion Knights Guild",
    isMetaCore: true,
    metaSquads: ["8. Gilbert Royal Cavalry Supremacy"]
  },
  {
    id: "coursers-reins",
    name: "Courser's Reins",
    image: "/images/items/coursers-reins.png",
    type: "Accessory",
    icon: "📿",
    statBoosts: "Cavalry Phys Atk +15%, Initiative +5",
    acquisition: "Cornia Stables",
    isMetaCore: false,
    metaSquads: ["1. Alain Holy Vanguard & Cavalry Blitz", "8. Gilbert Royal Cavalry Supremacy"]
  },
  {
    id: "owl-pin",
    name: "Owl Pin",
    image: "/images/items/owl-pin.png",
    type: "Accessory",
    icon: "📿",
    statBoosts: "PP +1, Granted Skill: Owl Eyes (Restores PP on night/turn)",
    acquisition: "Bastorias Owl Clan Sanctuary",
    isMetaCore: true,
    grantedSkill: {
      name: "Owl Eyes",
      cost: "1 PP",
      description: "At Start of Battle, increase all allies' Passive Points by 1 and grant Truestrike."
    },
    metaSquads: ["9. Yunifi & Werewolf Moonlight Hunt"]
  },
  {
    id: "sages-owl-shawl",
    name: "Sage's Owl Shawl",
    image: "/images/items/sages-owl-shawl.png",
    type: "Accessory",
    icon: "📿",
    statBoosts: "Mag Atk +8, PP +1, Accuracy +15",
    acquisition: "Bastorias Sacred Forest",
    isMetaCore: true,
    metaSquads: ["9. Yunifi & Werewolf Moonlight Hunt"]
  },
  {
    id: "executioners-eye",
    name: "Executioner's Eye",
    image: "/images/items/executioners-eye.png",
    type: "Accessory",
    icon: "🔍",
    statBoosts: "Crit Damage +30%, Inflicts Death Mark on critical hit",
    acquisition: "Coliseum Secret Vault",
    isMetaCore: true,
    metaSquads: ["4. Berengaria Affliction & Death Spiral", "9. Yunifi & Werewolf Moonlight Hunt"]
  },
  {
    id: "archers-eyepatch",
    name: "Archer's Eyepatch",
    image: "/images/items/archers-eyepatch.png",
    type: "Accessory",
    icon: "🔍",
    statBoosts: "Accuracy +25, Crit Rate +10%",
    acquisition: "Drakenhold Armory",
    isMetaCore: false,
    metaSquads: []
  },

  // ==========================================
  // ACCESSORIES: PENDANTS & AMULETS
  // ==========================================
  {
    id: "carnelian-pendant",
    name: "Carnelian Pendant",
    image: "/images/items/carnelian-pendant.png",
    type: "Accessory",
    icon: "📿",
    statBoosts: "AP +1",
    acquisition: "Various Shops & Quests",
    isMetaCore: true,
    metaSquads: [
      "1. Alain Holy Vanguard & Cavalry Blitz",
      "2. Trinity Rain Instant Apocalypse",
      "3. Dragoon Dive Aerial Cataclysm",
      "4. Berengaria Affliction & Death Spiral",
      "5. Virginia Valkyrian Counter Fortress",
      "6. Yunifi Glacial Rain Absolute Zero",
      "7. Elven Twin Sisters Elemental Tempest",
      "8. Gilbert Royal Cavalry Supremacy",
      "9. Yunifi & Werewolf Moonlight Hunt",
      "10. Sanatio Divine Sacred Zenith & Magic Reflection"
    ]
  },
  {
    id: "ruby-pendant",
    name: "Ruby Pendant",
    image: "/images/items/ruby-pendant.png",
    type: "Accessory",
    icon: "📿",
    statBoosts: "AP +2",
    acquisition: "High Level Treasure Maps & Coliseum",
    isMetaCore: true,
    metaSquads: [
      "1. Alain Holy Vanguard & Cavalry Blitz",
      "2. Trinity Rain Instant Apocalypse",
      "3. Dragoon Dive Aerial Cataclysm",
      "7. Elven Twin Sisters Elemental Tempest"
    ]
  },
  {
    id: "lapis-pendant",
    name: "Lapis Pendant",
    image: "/images/items/lapis-pendant.png",
    type: "Accessory",
    icon: "📿",
    statBoosts: "PP +1",
    acquisition: "Various Shops & Quests",
    isMetaCore: true,
    metaSquads: [
      "1. Alain Holy Vanguard & Cavalry Blitz",
      "2. Trinity Rain Instant Apocalypse",
      "3. Dragoon Dive Aerial Cataclysm",
      "4. Berengaria Affliction & Death Spiral",
      "5. Virginia Valkyrian Counter Fortress",
      "6. Yunifi Glacial Rain Absolute Zero",
      "7. Elven Twin Sisters Elemental Tempest",
      "8. Gilbert Royal Cavalry Supremacy",
      "9. Yunifi & Werewolf Moonlight Hunt",
      "10. Sanatio Divine Sacred Zenith & Magic Reflection"
    ]
  },
  {
    id: "sapphire-pendant",
    name: "Sapphire Pendant",
    image: "/images/items/sapphire-pendant.png",
    type: "Accessory",
    icon: "📿",
    statBoosts: "PP +2",
    acquisition: "High Level Treasure Maps & Coliseum",
    isMetaCore: true,
    metaSquads: [
      "2. Trinity Rain Instant Apocalypse",
      "3. Dragoon Dive Aerial Cataclysm",
      "5. Virginia Valkyrian Counter Fortress",
      "10. Sanatio Divine Sacred Zenith & Magic Reflection"
    ]
  },
  {
    id: "amethyst-pendant",
    name: "Amethyst Pendant",
    image: "/images/items/amethyst-pendant.png",
    type: "Accessory",
    icon: "📿",
    statBoosts: "AP +1, PP +1",
    acquisition: "Albion High Temple Treasure",
    isMetaCore: true,
    metaSquads: ["1. Alain Holy Vanguard & Cavalry Blitz", "5. Virginia Valkyrian Counter Fortress"]
  },
  {
    id: "onyx-pendant",
    name: "Onyx Pendant",
    image: "/images/items/onyx-pendant.png",
    type: "Accessory",
    icon: "📿",
    statBoosts: "AP +2, PP +1, Phys Def -10",
    acquisition: "Zenoiran Crypts Altar",
    isMetaCore: true,
    metaSquads: ["4. Berengaria Affliction & Death Spiral"]
  },
  {
    id: "pure-light-amulet",
    name: "Pure Light Amulet",
    image: "/images/items/pure-light-amulet.png",
    type: "Accessory",
    icon: "📿",
    statBoosts: "Granted Skill: Pure Light (Dispels all debuffs & status ailments)",
    acquisition: "Albion Sanctuary",
    isMetaCore: true,
    grantedSkill: {
      name: "Pure Light",
      cost: "1 PP",
      description: "Cleanse all negative afflictions and stat debuffs from target ally row."
    },
    metaSquads: ["7. Elven Twin Sisters Elemental Tempest", "10. Sanatio Divine Sacred Zenith & Magic Reflection"]
  },
  {
    id: "parrying-amulet",
    name: "Parrying Amulet",
    image: "/images/items/parrying-amulet.png",
    type: "Accessory",
    icon: "📿",
    statBoosts: "Evasion +15, Granted Skill: Parrying Guard",
    acquisition: "Drakenhold Secret Merchant",
    isMetaCore: false,
    grantedSkill: {
      name: "Parrying Guard",
      cost: "1 PP",
      description: "Nullify a single incoming physical strike."
    },
    metaSquads: []
  },
  {
    id: "clearsight-amulet",
    name: "Clearsight Amulet",
    image: "/images/items/clearsight-amulet.png",
    type: "Accessory",
    icon: "📿",
    statBoosts: "Immunity to Blindness, Accuracy +15",
    acquisition: "Cornia Cleric Shop",
    isMetaCore: false,
    metaSquads: []
  },
  {
    id: "detoxifying-amulet",
    name: "Detoxifying Amulet",
    image: "/images/items/detoxifying-amulet.png",
    type: "Accessory",
    icon: "📿",
    statBoosts: "Immunity to Poison, Max HP +15",
    acquisition: "Drakenhold Armorer",
    isMetaCore: false,
    metaSquads: []
  },
  {
    id: "feather-amulet",
    name: "Feather Amulet",
    image: "/images/items/feather-amulet.png",
    type: "Accessory",
    icon: "📿",
    statBoosts: "Initiative +10, Evasion +8",
    acquisition: "Albion Feathersword Shop",
    isMetaCore: false,
    metaSquads: []
  },
  {
    id: "skillful-amulet",
    name: "Skillful Amulet",
    image: "/images/items/skillful-amulet.png",
    type: "Accessory",
    icon: "📿",
    statBoosts: "Crit Rate +15%, Guard Rate +15%",
    acquisition: "Bastorias Artisan",
    isMetaCore: false,
    metaSquads: []
  },
  {
    id: "celestial-talisman",
    name: "Celestial Talisman",
    image: "/images/items/celestial-talisman.png",
    type: "Accessory",
    icon: "📿",
    statBoosts: "Mag Def +15, All Elemental Resist +20%",
    acquisition: "Albion Sanctum",
    isMetaCore: false,
    metaSquads: []
  },
  {
    id: "lifeblood-talisman",
    name: "Lifeblood Talisman",
    image: "/images/items/lifeblood-talisman.png",
    type: "Accessory",
    icon: "📿",
    statBoosts: "Max HP +40, HP Regen +10%",
    acquisition: "Bastorias Bear Shrine",
    isMetaCore: false,
    metaSquads: []
  },
  {
    id: "vitality-talisman",
    name: "Vitality Talisman",
    image: "/images/items/vitality-talisman.png",
    type: "Accessory",
    icon: "📿",
    statBoosts: "Max HP +30",
    acquisition: "Cornia Armorer",
    isMetaCore: false,
    metaSquads: []
  },

  // ==========================================
  // ACCESSORIES: RINGS & BANDS
  // ==========================================
  {
    id: "ring-of-the-unicorn",
    name: "Ring of the Unicorn",
    image: "/images/items/ring-of-the-unicorn.png",
    type: "Accessory",
    icon: "💍",
    statBoosts: "All Stats +5, AP +1, PP +1, Affliction Immunity",
    acquisition: "Main Story (Alain's Ring of the Unicorn)",
    isMetaCore: true,
    metaSquads: ["1. Alain Holy Vanguard & Cavalry Blitz"]
  },
  {
    id: "ring-of-the-maiden",
    name: "Ring of the Maiden",
    image: "/images/items/ring-of-the-maiden.png",
    type: "Accessory",
    icon: "💍",
    statBoosts: "All Stats +5, AP +1, PP +1, HP Regen +20%",
    acquisition: "Main Story (Pact of the Maiden)",
    isMetaCore: true,
    metaSquads: ["1. Alain Holy Vanguard & Cavalry Blitz", "5. Virginia Valkyrian Counter Fortress"]
  },
  {
    id: "holy-unicorn-signet",
    name: "Holy Unicorn Signet",
    image: "/images/items/holy-unicorn-signet.png",
    type: "Accessory",
    icon: "💍",
    statBoosts: "Phys Atk +5, Mag Atk +5, AP +1",
    acquisition: "Royal Sanctuary",
    isMetaCore: true,
    metaSquads: ["1. Alain Holy Vanguard & Cavalry Blitz"]
  },
  {
    id: "holy-maiden-ring",
    name: "Holy Maiden Ring",
    image: "/images/items/holy-maiden-ring.png",
    type: "Accessory",
    icon: "💍",
    statBoosts: "Healing Potency +30%, PP +1, Debuff Immunity",
    acquisition: "Maiden's Altar",
    isMetaCore: true,
    metaSquads: ["10. Sanatio Divine Sacred Zenith & Magic Reflection"]
  },
  {
    id: "ice-crystal-ring",
    name: "Ice Crystal Ring",
    image: "/images/items/ice-crystal-ring.png",
    type: "Accessory",
    icon: "💍",
    statBoosts: "Mag Atk +8, Inflicts Freeze on critical strikes",
    acquisition: "Bastorias Glacial Shrine",
    isMetaCore: true,
    metaSquads: ["6. Yunifi Glacial Rain Absolute Zero"]
  },
  {
    id: "phantom-ring",
    name: "Phantom Ring",
    image: "/images/items/phantom-ring.png",
    type: "Accessory",
    icon: "💍",
    statBoosts: "Evasion +25, Accuracy +15",
    acquisition: "Coliseum Exchange",
    isMetaCore: true,
    metaSquads: ["4. Berengaria Affliction & Death Spiral", "9. Yunifi & Werewolf Moonlight Hunt"]
  },
  {
    id: "defensive-ring",
    name: "Defensive Ring",
    image: "/images/items/defensive-ring.png",
    type: "Accessory",
    icon: "💍",
    statBoosts: "Phys Def +10, Guard Rate +15%",
    acquisition: "Cornia City Shops",
    isMetaCore: false,
    metaSquads: []
  },
  {
    id: "defenders-ring",
    name: "Defender's Ring",
    image: "/images/items/defenders-ring.png",
    type: "Accessory",
    icon: "💍",
    statBoosts: "Phys Def +12, Mag Def +8",
    acquisition: "Drakenhold Armory",
    isMetaCore: false,
    metaSquads: []
  },
  {
    id: "heavy-guard-ring",
    name: "Heavy Guard Ring",
    image: "/images/items/heavy-guard-ring.png",
    type: "Accessory",
    icon: "💍",
    statBoosts: "Guard Rate +25%, Guard Damage Reduction +10%",
    acquisition: "Bastorias Fortress",
    isMetaCore: false,
    metaSquads: []
  },
  {
    id: "critical-ring",
    name: "Critical Ring",
    image: "/images/items/critical-ring.png",
    type: "Accessory",
    icon: "💍",
    statBoosts: "Crit Rate +20%",
    acquisition: "Drakenhold Coliseum",
    isMetaCore: false,
    metaSquads: []
  },
  {
    id: "beast-ring",
    name: "Beast Ring",
    image: "/images/items/beast-ring.png",
    type: "Accessory",
    icon: "💍",
    statBoosts: "Phys Atk +5, Beast Clan Synergy +15%",
    acquisition: "Bastorias Den",
    isMetaCore: false,
    metaSquads: ["9. Yunifi & Werewolf Moonlight Hunt"]
  },
  {
    id: "berserker-band",
    name: "Berserker Band",
    image: "/images/items/berserker-band.png",
    type: "Accessory",
    icon: "💍",
    statBoosts: "Phys Atk +10, Crit Rate +15%, Phys Def -10",
    acquisition: "Drakenhold Arena",
    isMetaCore: false,
    metaSquads: ["4. Berengaria Affliction & Death Spiral"]
  },
  {
    id: "power-belt",
    name: "Power Belt",
    image: "/images/items/power-belt.png",
    type: "Accessory",
    icon: "📿",
    statBoosts: "Phys Atk +8, Prevents Knockback & Stun",
    acquisition: "Drakenhold Market",
    isMetaCore: false,
    metaSquads: []
  },
  {
    id: "counter-belt",
    name: "Counter Belt",
    image: "/images/items/counter-belt.png",
    type: "Accessory",
    icon: "📿",
    statBoosts: "Granted Skill: Counter (Retaliates against physical attacks)",
    acquisition: "Coliseum Shop",
    isMetaCore: true,
    grantedSkill: {
      name: "Counter",
      cost: "1 PP",
      description: "Retaliate with a physical strike when attacked by an enemy."
    },
    metaSquads: ["5. Virginia Valkyrian Counter Fortress"]
  },
  {
    id: "riot-belt",
    name: "Riot Belt",
    image: "/images/items/riot-belt.png",
    type: "Accessory",
    icon: "📿",
    statBoosts: "Phys Atk +6, Crit Damage +15%",
    acquisition: "Bastorias Fighting Pit",
    isMetaCore: false,
    metaSquads: []
  },

  // ==========================================
  // ACCESSORIES: MEDALLIONS, PLUMES, EMBLEMS & BROOCHES
  // ==========================================
  {
    id: "heros-medallion",
    name: "Hero's Medallion",
    image: "/images/items/heros-medallion.png",
    type: "Accessory",
    icon: "🏅",
    statBoosts: "All Stats +3, Crit Rate +10%, Guard Rate +10%",
    acquisition: "Cornia Hero's Memorial",
    isMetaCore: true,
    metaSquads: ["1. Alain Holy Vanguard & Cavalry Blitz", "8. Gilbert Royal Cavalry Supremacy"]
  },
  {
    id: "warriors-medallion",
    name: "Warrior's Medallion",
    image: "/images/items/warriors-medallion.png",
    type: "Accessory",
    icon: "🏅",
    statBoosts: "Phys Atk +6, Crit Rate +10%",
    acquisition: "Drakenhold Arena Merchant",
    isMetaCore: false,
    metaSquads: ["4. Berengaria Affliction & Death Spiral"]
  },
  {
    id: "sorcerers-medallion",
    name: "Sorcerer's Medallion",
    image: "/images/items/sorcerers-medallion.png",
    type: "Accessory",
    icon: "🏅",
    statBoosts: "Mag Atk +8, Mag Crit Rate +15%",
    acquisition: "Elheim Mage Academy",
    isMetaCore: false,
    metaSquads: ["2. Trinity Rain Instant Apocalypse"]
  },
  {
    id: "magia-heart",
    name: "Magia Heart",
    image: "/images/items/magia-heart.png",
    type: "Accessory",
    icon: "📿",
    statBoosts: "Mag Atk +12, PP +1",
    acquisition: "Elheim Secret Sanctum",
    isMetaCore: true,
    metaSquads: ["2. Trinity Rain Instant Apocalypse", "7. Elven Twin Sisters Elemental Tempest"]
  },
  {
    id: "magia-soul",
    name: "Magia Soul",
    image: "/images/items/magia-soul.png",
    type: "Accessory",
    icon: "📿",
    statBoosts: "Mag Atk +15, AP +1, Mag Def -5",
    acquisition: "Albion Mage Guild",
    isMetaCore: true,
    metaSquads: ["2. Trinity Rain Instant Apocalypse"]
  },
  {
    id: "angel-plume",
    name: "Angel Plume",
    image: "/images/items/angel-plume.png",
    type: "Accessory",
    icon: "🪶",
    statBoosts: "Initiative +15, Granted Skill: Tailwind",
    acquisition: "Coliseum Prize Exchange",
    isMetaCore: true,
    grantedSkill: {
      name: "Tailwind",
      cost: "1 PP",
      description: "At Start of Battle, grant all allies +15 Initiative for the entire skirmish."
    },
    metaSquads: ["3. Dragoon Dive Aerial Cataclysm", "8. Gilbert Royal Cavalry Supremacy"]
  },
  {
    id: "raven-plume",
    name: "Raven Plume",
    image: "/images/items/raven-plume.png",
    type: "Accessory",
    icon: "🪶",
    statBoosts: "Initiative +15, PP +1",
    acquisition: "Albion Black Market",
    isMetaCore: true,
    metaSquads: ["3. Dragoon Dive Aerial Cataclysm", "8. Gilbert Royal Cavalry Supremacy"]
  },
  {
    id: "dove-plume",
    name: "Dove Plume",
    image: "/images/items/dove-plume.png",
    type: "Accessory",
    icon: "🪶",
    statBoosts: "Initiative +10",
    acquisition: "Cornia & Drakenhold Shops",
    isMetaCore: false,
    metaSquads: ["1. Alain Holy Vanguard & Cavalry Blitz", "8. Gilbert Royal Cavalry Supremacy"]
  },
  {
    id: "white-knight-plume",
    name: "White Knight Plume",
    image: "/images/items/white-knight-plume.png",
    type: "Accessory",
    icon: "🪶",
    statBoosts: "Initiative +8, Mag Def +10, HP Regen +10%",
    acquisition: "Albion White Knights Armory",
    isMetaCore: false,
    metaSquads: ["8. Gilbert Royal Cavalry Supremacy"]
  },
  {
    id: "battleline-standard",
    name: "Battleline Standard",
    image: "/images/items/battleline-standard.png",
    type: "Accessory",
    icon: "🚩",
    statBoosts: "All Allies Phys Atk +10%, Guard Rate +10%",
    acquisition: "Drakenhold Garrison Commander",
    isMetaCore: true,
    metaSquads: ["8. Gilbert Royal Cavalry Supremacy"]
  },
  {
    id: "wingline-standard",
    name: "Wingline Standard",
    image: "/images/items/wingline-standard.png",
    type: "Accessory",
    icon: "🚩",
    statBoosts: "All Allies Flying Units Evasion +15, Initiative +5",
    acquisition: "Albion Aerial Guard",
    isMetaCore: true,
    metaSquads: ["3. Dragoon Dive Aerial Cataclysm"]
  },
  {
    id: "elite-standard",
    name: "Elite Standard",
    image: "/images/items/elite-standard.png",
    type: "Accessory",
    icon: "🚩",
    statBoosts: "All Allies Initiative +5, Crit Rate +10%",
    acquisition: "Albion Royal Guard",
    isMetaCore: false,
    metaSquads: ["8. Gilbert Royal Cavalry Supremacy"]
  },
  {
    id: "commanders-crest",
    name: "Commander's Crest",
    image: "/images/items/commanders-crest.png",
    type: "Accessory",
    icon: "🏅",
    statBoosts: "All Allies Phys Def +10%, Mag Def +10%",
    acquisition: "Cornia Command Tent",
    isMetaCore: false,
    metaSquads: ["8. Gilbert Royal Cavalry Supremacy"]
  },
  {
    id: "rose-brooch",
    name: "Rose Brooch",
    image: "/images/items/rose-brooch.png",
    type: "Accessory",
    icon: "🌹",
    statBoosts: "All Stats +4, PP +1, HP Regen +15%",
    acquisition: "Virginia's Knights of the Rose Quest",
    isMetaCore: true,
    metaSquads: ["5. Virginia Valkyrian Counter Fortress"]
  },
  {
    id: "holy-brooch",
    name: "Holy Brooch",
    image: "/images/items/holy-brooch.png",
    type: "Accessory",
    icon: "📿",
    statBoosts: "Mag Def +12, PP +1, Healing Potency +20%",
    acquisition: "Albion High Temple",
    isMetaCore: false,
    metaSquads: ["10. Sanatio Divine Sacred Zenith & Magic Reflection"]
  },
  {
    id: "gryphon-brooch",
    name: "Gryphon Brooch",
    image: "/images/items/gryphon-brooch.png",
    type: "Accessory",
    icon: "🪶",
    statBoosts: "Flying Units Initiative +12, Evasion +15",
    acquisition: "Elheim Skyguard Lair",
    isMetaCore: true,
    metaSquads: ["3. Dragoon Dive Aerial Cataclysm"]
  },
  {
    id: "wyvern-claw",
    name: "Wyvern Claw",
    image: "/images/items/wyvern-claw.png",
    type: "Accessory",
    icon: "📿",
    statBoosts: "Flying Units Phys Atk +15%, Crit Rate +15%",
    acquisition: "Drakenhold Dragon Lair",
    isMetaCore: true,
    metaSquads: ["3. Dragoon Dive Aerial Cataclysm"]
  },
  {
    id: "earrings-of-pursuit",
    name: "Earrings of Pursuit",
    image: "/images/items/earrings-of-pursuit.png",
    type: "Accessory",
    icon: "📿",
    statBoosts: "Pursuit Attack Damage +40%, PP +1",
    acquisition: "Coliseum Prize Exchange",
    isMetaCore: true,
    metaSquads: ["8. Gilbert Royal Cavalry Supremacy", "9. Yunifi & Werewolf Moonlight Hunt"]
  },
  {
    id: "retaliation-earrings",
    name: "Retaliation Earrings",
    image: "/images/items/retaliation-earrings.png",
    type: "Accessory",
    icon: "📿",
    statBoosts: "Counter & Retaliation Attack Damage +30%",
    acquisition: "Coliseum Shop",
    isMetaCore: false,
    metaSquads: ["5. Virginia Valkyrian Counter Fortress"]
  },
  {
    id: "wolf-fang-bracelet",
    name: "Wolf-Fang Bracelet",
    image: "/images/items/wolf-fang-bracelet.png",
    type: "Accessory",
    icon: "📿",
    statBoosts: "Phys Atk +8, Pursuit Attack Damage +25%, Crit Rate +15%",
    acquisition: "Bastorias Werewolf Den",
    isMetaCore: true,
    metaSquads: ["9. Yunifi & Werewolf Moonlight Hunt"]
  },
  {
    id: "wolfpack-gauntlets",
    name: "Wolfpack Gauntlets",
    image: "/images/items/wolfpack-gauntlets.png",
    type: "Accessory",
    icon: "🧤",
    statBoosts: "Bestial Allies Phys Atk +20%, Crit Rate +20%, Granted Skill: Wolfpack Roar",
    acquisition: "Bastorias Werewolf Altar",
    isMetaCore: true,
    grantedSkill: {
      name: "Wolfpack Roar",
      cost: "1 PP",
      description: "At Start of Battle, grant all Bestial allies +20% Physical Attack and +20% Critical Rate."
    },
    metaSquads: ["9. Yunifi & Werewolf Moonlight Hunt"]
  },
  {
    id: "chloes-charm",
    name: "Chloe's Charm",
    image: "/images/items/chloes-charm.png",
    type: "Accessory",
    icon: "📿",
    statBoosts: "Initiative +10, Granted Skill: Keen Call (Grants guaranteed Crit to ally)",
    acquisition: "Chloe Rapport Quest",
    isMetaCore: true,
    grantedSkill: {
      name: "Keen Call",
      cost: "1 PP",
      description: "When an ally attacks, grant them 100% Guaranteed Critical Hit on their attack."
    },
    metaSquads: ["1. Alain Holy Vanguard & Cavalry Blitz"]
  },
  {
    id: "scarletts-ribbon",
    name: "Scarlett's Ribbon",
    image: "/images/items/scarletts-ribbon.png",
    type: "Accessory",
    icon: "🎀",
    statBoosts: "All Stats +5, PP +1, Healing Potency +30%",
    acquisition: "Scarlett Rapport Quest",
    isMetaCore: true,
    metaSquads: ["10. Sanatio Divine Sacred Zenith & Magic Reflection"]
  },
  {
    id: "priestess-ribbon",
    name: "Priestess Ribbon",
    image: "/images/items/priestess-ribbon.png",
    type: "Accessory",
    icon: "🎀",
    statBoosts: "Mag Def +10, PP +1, Healing Potency +20%",
    acquisition: "Holy Sanctuary",
    isMetaCore: false,
    metaSquads: []
  },
  {
    id: "lucky-coin",
    name: "Lucky Coin",
    image: "/images/items/lucky-coin.png",
    type: "Accessory",
    icon: "🪙",
    statBoosts: "Crit Rate +20%, Guard Rate +20%, Evasion +10",
    acquisition: "Coliseum Shop",
    isMetaCore: true,
    metaSquads: ["5. Virginia Valkyrian Counter Fortress"]
  },
  {
    id: "lionheart",
    name: "Lionheart",
    image: "/images/items/lionheart.png",
    type: "Accessory",
    icon: "🏅",
    statBoosts: "Phys Atk +10, Prevents Lethal Damage 1 time",
    acquisition: "Drakenhold King's Treasure",
    isMetaCore: true,
    metaSquads: ["4. Berengaria Affliction & Death Spiral", "5. Virginia Valkyrian Counter Fortress"]
  },
  {
    id: "thiefs-mantle",
    name: "Thief's Mantle",
    image: "/images/items/thiefs-mantle.png",
    type: "Accessory",
    icon: "🧥",
    statBoosts: "Evasion +20, Granted Skill: Evade",
    acquisition: "Cornia Bandit Hideout",
    isMetaCore: true,
    grantedSkill: {
      name: "Evade",
      cost: "1 PP",
      description: "Completely evade an incoming physical attack."
    },
    metaSquads: ["4. Berengaria Affliction & Death Spiral"]
  },
  {
    id: "mirage-cloak",
    name: "Mirage Cloak",
    image: "/images/items/mirage-cloak.png",
    type: "Accessory",
    icon: "🧥",
    statBoosts: "Evasion +30, Granted Skill: Mirage Shift",
    acquisition: "Elheim Illusion Shrine",
    isMetaCore: true,
    grantedSkill: {
      name: "Mirage Shift",
      cost: "1 PP",
      description: "Nullify an incoming attack and boost self Initiative by +15."
    },
    metaSquads: ["4. Berengaria Affliction & Death Spiral", "7. Elven Twin Sisters Elemental Tempest"]
  },
  {
    id: "fox-cloak",
    name: "Fox Cloak",
    image: "/images/items/fox-cloak.png",
    type: "Accessory",
    icon: "🧥",
    statBoosts: "Evasion +25, Initiative +10",
    acquisition: "Bastorias Fox Camp",
    isMetaCore: false,
    metaSquads: ["9. Yunifi & Werewolf Moonlight Hunt"]
  },
  {
    id: "royal-scarf",
    name: "Royal Scarf",
    image: "/images/items/royal-scarf.png",
    type: "Accessory",
    icon: "🧣",
    statBoosts: "Evasion +35",
    acquisition: "Albion Royal Exchange",
    isMetaCore: true,
    metaSquads: ["5. Virginia Valkyrian Counter Fortress"]
  },
  {
    id: "dusk-robes",
    name: "Dusk Robes",
    image: "/images/items/dusk-robes.png",
    type: "Accessory",
    icon: "👘",
    statBoosts: "Mag Def +15, Mag Atk +8, Debuff Immunity",
    acquisition: "Elheim Midnight Altar",
    isMetaCore: false,
    metaSquads: ["7. Elven Twin Sisters Elemental Tempest"]
  },
  {
    id: "dawn-robes",
    name: "Dawn Robes",
    image: "/images/items/dawn-robes.png",
    type: "Accessory",
    icon: "👘",
    statBoosts: "Mag Def +15, Healing Potency +20%, Max HP +25",
    acquisition: "Albion Sun Altar",
    isMetaCore: false,
    metaSquads: ["10. Sanatio Divine Sacred Zenith & Magic Reflection"]
  },
  {
    id: "druids-robes",
    name: "Druid's Robes",
    image: "/images/items/druids-robes.png",
    type: "Accessory",
    icon: "👘",
    statBoosts: "Mag Def +10, PP +1, Affliction Duration +1 Turn",
    acquisition: "Elheim Druid Sanctuary",
    isMetaCore: true,
    metaSquads: ["2. Trinity Rain Instant Apocalypse", "7. Elven Twin Sisters Elemental Tempest"]
  },
  {
    id: "gauntlets-of-power",
    name: "Gauntlets of Power",
    image: "/images/items/gauntlets-of-power.png",
    type: "Accessory",
    icon: "🧤",
    statBoosts: "Phys Atk +12, Phys Def +6",
    acquisition: "Bastorias Heavy Smith",
    isMetaCore: false,
    metaSquads: ["4. Berengaria Affliction & Death Spiral"]
  },
  {
    id: "guardian-gloves",
    name: "Guardian Gloves",
    image: "/images/items/guardian-gloves.png",
    type: "Accessory",
    icon: "🧤",
    statBoosts: "Guard Rate +20%, Guard Damage Reduction +15%",
    acquisition: "Albion Paladin Armory",
    isMetaCore: false,
    metaSquads: ["5. Virginia Valkyrian Counter Fortress"]
  },
  {
    id: "mages-gloves",
    name: "Mage's Gloves",
    image: "/images/items/mages-gloves.png",
    type: "Accessory",
    icon: "🧤",
    statBoosts: "Mag Atk +8, Mag Crit Rate +10%",
    acquisition: "Elheim Academy",
    isMetaCore: false,
    metaSquads: []
  },
  {
    id: "cloth-gauntlets",
    name: "Cloth Gauntlets",
    image: "/images/items/cloth-gauntlets.png",
    type: "Accessory",
    icon: "🧤",
    statBoosts: "Phys Def +2, Evasion +5",
    acquisition: "Town Shop",
    isMetaCore: false,
    metaSquads: []
  },
  {
    id: "heavy-gauntlets",
    name: "Heavy Gauntlets",
    image: "/images/items/heavy-gauntlets.png",
    type: "Accessory",
    icon: "🧤",
    statBoosts: "Phys Def +8, Guard Rate +10%",
    acquisition: "Drakenhold Blacksmith",
    isMetaCore: false,
    metaSquads: []
  },
  {
    id: "armored-gauntlets",
    name: "Armored Gauntlets",
    image: "/images/items/armored-gauntlets.png",
    type: "Accessory",
    icon: "🧤",
    statBoosts: "Phys Def +10, Max HP +15",
    acquisition: "Bastorias Armory",
    isMetaCore: false,
    metaSquads: []
  },
  {
    id: "first-aid-kit",
    name: "First Aid Kit",
    image: "/images/items/first-aid-kit.png",
    type: "Accessory",
    icon: "🩹",
    statBoosts: "Granted Skill: First Aid (Restores 25% HP to wounded ally)",
    acquisition: "Town Provisioner",
    isMetaCore: false,
    grantedSkill: {
      name: "First Aid",
      cost: "1 PP",
      description: "Restores 25% HP to an ally who falls below 50% HP."
    },
    metaSquads: []
  },
  {
    id: "large-aid-kit",
    name: "Large Aid Kit",
    image: "/images/items/large-aid-kit.png",
    type: "Accessory",
    icon: "🩹",
    statBoosts: "Granted Skill: Emergency Heal (Restores 50% HP to ally)",
    acquisition: "Coliseum Merchant",
    isMetaCore: false,
    grantedSkill: {
      name: "Emergency Heal",
      cost: "1 PP",
      description: "Restores 50% HP to an ally who suffers critical damage."
    },
    metaSquads: []
  },
  {
    id: "self-aid-kit",
    name: "Self-Aid Kit",
    image: "/images/items/self-aid-kit.png",
    type: "Accessory",
    icon: "🩹",
    statBoosts: "Restores 20% HP to self at End of Battle",
    acquisition: "Town Provisioner",
    isMetaCore: false,
    metaSquads: []
  },
  {
    id: "medical-kit",
    name: "Medical Kit",
    image: "/images/items/medical-kit.png",
    type: "Accessory",
    icon: "🩹",
    statBoosts: "Cures all status ailments on self at Start of Turn",
    acquisition: "Albion Hospital",
    isMetaCore: false,
    metaSquads: []
  },
  {
    id: "thiefs-bell",
    name: "Thief's Bell",
    image: "/images/items/thiefs-bell.png",
    type: "Accessory",
    icon: "🔔",
    statBoosts: "Evasion +15, Gold Earned +20%",
    acquisition: "Cornia Black Market",
    isMetaCore: false,
    metaSquads: []
  },
  {
    id: "nightmare-shield",
    name: "Nightmare Shield",
    image: "/images/items/nightmare-shield.png",
    type: "Shield",
    icon: "🛡️",
    statBoosts: "Phys Def +14, Mag Def +10, Inflicts Darkness on attacker",
    acquisition: "Zenoiran Crypts",
    isMetaCore: false,
    metaSquads: ["4. Berengaria Affliction & Death Spiral"]
  }
];

const fileHeader = `import { RelicItem } from '@/types';

export const ITEMS_DATA: RelicItem[] = `;

fs.writeFileSync('./src/data/items.ts', fileHeader + JSON.stringify(MASTER_ITEMS, null, 2) + ';\n');
console.log('Successfully written complete ITEMS_DATA with ' + MASTER_ITEMS.length + ' authentic items!');
