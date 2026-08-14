import { RelicItem } from '@/types';

export const ITEMS_DATA: RelicItem[] = [
  // ==========================================
  // WEAPONS (SWORDS, SPEARS, AXES, BOWS, STAFFS)
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
    grantedSkill: {
      name: "Trinity Rain",
      cost: "4 AP",
      description: "Charged Skill: Summons 3 waves of magic rain dealing 210 total potency across all enemy units."
    },
    statBoosts: "Mag Atk +25, Mag Def +8",
    acquisition: "Divine Shard Shop (30 Divine Shards)",
    isMetaCore: true,
    metaSquads: ["2. Trinity Rain Instant Apocalypse"]
  },
  {
    id: "dragoons-war-spear",
    name: "Dragoon's War Spear",
    image: "/images/items/dragoon-s-warspear.png",
    type: "Weapon",
    icon: "⚔️",
    grantedSkill: {
      name: "Dragoon Dive",
      cost: "4 AP",
      description: "Charged Skill: Takes 1 turn to prepare, then leaps into the air and crashes down dealing 220 physical potency to all enemies."
    },
    statBoosts: "Phys Atk +24, Initiative +5",
    acquisition: "Drakenhold Region Quest: 'The Dragon Rider's Treasure'",
    isMetaCore: true,
    metaSquads: ["3. Dragoon Glacial Tempest (Aerial Bombardment)"]
  },
  {
    id: "boreas-s-axe",
    name: "Boreas's Axe",
    image: "/images/items/boreas-s-axe.png",
    type: "Weapon",
    icon: "⚔️",
    statBoosts: "Phys Atk +26, Initiative +5, Crit Rate +10%",
    acquisition: "Wind God Weapon Quest",
    isMetaCore: true,
    metaSquads: ["3. Dragoon Glacial Tempest (Aerial Bombardment)", "8. Amalia Colossal Shield & Armor Obliteration"]
  },
  {
    id: "apeliotes-s-bow",
    name: "Apeliotes's Bow",
    image: "/images/items/apeliotes-s-bow.png",
    type: "Weapon",
    icon: "⚔️",
    statBoosts: "Phys Atk +25, Initiative +5, True Strike",
    acquisition: "Wind God Weapon Quest",
    isMetaCore: true,
    metaSquads: ["5. Virginia Valkyrian Counter Fortress", "8. Amalia Colossal Shield & Armor Obliteration"]
  },
  {
    id: "notos-s-sword",
    name: "Notos's Sword",
    image: "/images/items/notos-s-sword.png",
    type: "Weapon",
    icon: "⚔️",
    statBoosts: "Phys Atk +25, Initiative +5, Evasion +10",
    acquisition: "Wind God Weapon Quest",
    isMetaCore: true,
    metaSquads: ["1. Alain Holy Vanguard & Cavalry Blitz", "10. Sanatio Divine Sacred Zenith & Magic Reflection"]
  },
  {
    id: "euros-s-staff",
    name: "Euros's Staff",
    image: "/images/items/euros-s-staff.png",
    type: "Weapon",
    icon: "⚔️",
    statBoosts: "Mag Atk +25, Initiative +5",
    acquisition: "Wind God Weapon Quest",
    isMetaCore: true,
    metaSquads: ["2. Trinity Rain Instant Apocalypse"]
  },
  {
    id: "carnelian-greataxe",
    name: "Carnelian Greataxe",
    image: "/images/items/carnelian-axe.png",
    type: "Weapon",
    icon: "⚔️",
    statBoosts: "Phys Atk +25, AP +1",
    acquisition: "Drakenhold Blacksmith",
    isMetaCore: true,
    metaSquads: ["4. Berengaria Affliction & Death Spiral"]
  },
  {
    id: "carnelian-blade",
    name: "Carnelian Blade",
    image: "/images/items/carnelian-blade.png",
    type: "Weapon",
    icon: "⚔️",
    statBoosts: "Phys Atk +25, AP +1",
    acquisition: "Drakenhold Blacksmith",
    isMetaCore: true,
    metaSquads: ["1. Alain Holy Vanguard & Cavalry Blitz"]
  },
  {
    id: "carnelian-spear",
    name: "Carnelian Spear",
    image: "/images/items/carnelian-spear.png",
    type: "Weapon",
    icon: "⚔️",
    statBoosts: "Phys Atk +25, AP +1",
    acquisition: "Drakenhold Blacksmith",
    isMetaCore: true,
    metaSquads: ["1. Alain Holy Vanguard & Cavalry Blitz"]
  },
  {
    id: "carnelian-bow",
    name: "Carnelian Bow",
    image: "/images/items/carnelian-bow.png",
    type: "Weapon",
    icon: "⚔️",
    statBoosts: "Phys Atk +25, AP +1",
    acquisition: "Drakenhold Blacksmith",
    isMetaCore: true,
    metaSquads: ["6. Yunifi Glacial Rain Absolute Zero"]
  },
  {
    id: "carnelian-staff",
    name: "Carnelian Staff",
    image: "/images/items/carnelian-staff.png",
    type: "Weapon",
    icon: "⚔️",
    statBoosts: "Mag Atk +25, AP +1",
    acquisition: "Drakenhold Blacksmith",
    isMetaCore: true,
    metaSquads: ["2. Trinity Rain Instant Apocalypse"]
  },
  {
    id: "meteorite-sword",
    name: "Meteorite Sword",
    image: "/images/items/meteorite-sword.png",
    type: "Weapon",
    icon: "⚔️",
    statBoosts: "Phys Atk +24, Max HP +20, Guard Rate +10%",
    acquisition: "Meteorite Ore Quest Reward",
    isMetaCore: true,
    metaSquads: ["5. Virginia Valkyrian Counter Fortress"]
  },
  {
    id: "meteorite-lance",
    name: "Meteorite Lance",
    image: "/images/items/meteorite-lance.png",
    type: "Weapon",
    icon: "⚔️",
    statBoosts: "Phys Atk +24, Max HP +20, Guard Rate +10%",
    acquisition: "Meteorite Ore Quest Reward",
    isMetaCore: true,
    metaSquads: ["1. Alain Holy Vanguard & Cavalry Blitz"]
  },
  {
    id: "meteorite-axe",
    name: "Meteorite Axe",
    image: "/images/items/meteorite-axe.png",
    type: "Weapon",
    icon: "⚔️",
    statBoosts: "Phys Atk +24, Max HP +20, Guard Rate +10%",
    acquisition: "Meteorite Ore Quest Reward",
    isMetaCore: true,
    metaSquads: ["8. Amalia Colossal Shield & Armor Obliteration"]
  },
  {
    id: "meteorite-bow",
    name: "Meteorite Bow",
    image: "/images/items/meteorite-bow.png",
    type: "Weapon",
    icon: "⚔️",
    statBoosts: "Phys Atk +24, Max HP +20, Guard Rate +10%",
    acquisition: "Meteorite Ore Quest Reward",
    isMetaCore: true,
    metaSquads: ["9. Bestral Midnight Hunt Pack"]
  },
  {
    id: "meteorite-rod",
    name: "Meteorite Rod",
    image: "/images/items/meteorite-rod.png",
    type: "Weapon",
    icon: "⚔️",
    statBoosts: "Mag Atk +24, Max HP +20, Mag Def +5",
    acquisition: "Meteorite Ore Quest Reward",
    isMetaCore: true,
    metaSquads: ["6. Yunifi Glacial Rain Absolute Zero"]
  },
  {
    id: "runic-sword",
    name: "Runic Sword",
    image: "/images/items/runic-sword.png",
    type: "Weapon",
    icon: "⚔️",
    grantedSkill: {
      name: "Magick Attack",
      cost: "1 AP",
      description: "Attacks an enemy with magic damage based on Mag Atk."
    },
    statBoosts: "Phys Atk +18, Mag Atk +24",
    acquisition: "Armorer in Elheim",
    isMetaCore: true,
    metaSquads: ["3. Dragoon Glacial Tempest (Aerial Bombardment)"]
  },
  {
    id: "runic-spear",
    name: "Runic Spear",
    image: "/images/items/runic-spear.png",
    type: "Weapon",
    icon: "⚔️",
    statBoosts: "Phys Atk +18, Mag Atk +24",
    acquisition: "Armorer in Elheim",
    isMetaCore: true,
    metaSquads: ["7. Elven Twin Sisters Elemental Tempest"]
  },
  {
    id: "runic-axe",
    name: "Runic Axe",
    image: "/images/items/runic-axe.png",
    type: "Weapon",
    icon: "⚔️",
    statBoosts: "Phys Atk +18, Mag Atk +24",
    acquisition: "Armorer in Elheim",
    isMetaCore: true,
    metaSquads: ["8. Amalia Colossal Shield & Armor Obliteration"]
  },
  {
    id: "runic-bow",
    name: "Runic Bow",
    image: "/images/items/runic-bow.png",
    type: "Weapon",
    icon: "⚔️",
    statBoosts: "Phys Atk +18, Mag Atk +24",
    acquisition: "Armorer in Elheim",
    isMetaCore: true,
    metaSquads: ["7. Elven Twin Sisters Elemental Tempest"]
  },
  {
    id: "phantom-knight-s-sword",
    name: "Phantom Knight's Sword",
    image: "/images/items/phantom-knight-s-sword.png",
    type: "Weapon",
    icon: "⚔️",
    statBoosts: "Mag Atk +22, Mag Def +5, Initiative +3",
    acquisition: "Elheim Sanctuary Quest",
    isMetaCore: true,
    metaSquads: ["7. Elven Twin Sisters Elemental Tempest"]
  },
  {
    id: "dragonbone-blade",
    name: "Dragonbone Blade",
    image: "/images/items/dragonbone-blade.png",
    type: "Weapon",
    icon: "⚔️",
    statBoosts: "Phys Atk +22, PP +1, Initiative -10",
    acquisition: "Drakenhold Graveyard Quest",
    isMetaCore: true,
    metaSquads: ["5. Virginia Valkyrian Counter Fortress"]
  },
  {
    id: "dragonbone-axe",
    name: "Dragonbone Axe",
    image: "/images/items/dragonbone-axe.png",
    type: "Weapon",
    icon: "⚔️",
    statBoosts: "Phys Atk +22, PP +1, Initiative -10",
    acquisition: "Drakenhold Graveyard Quest",
    isMetaCore: true,
    metaSquads: ["4. Berengaria Affliction & Death Spiral"]
  },
  {
    id: "maidens-sword",
    name: "Maiden's Sword",
    image: "/images/items/hallowed-blade.png",
    type: "Weapon",
    icon: "⚔️",
    statBoosts: "Phys Atk +23, Phys Def +5, PP +1",
    acquisition: "Main Story Quest: Maiden's Choice",
    isMetaCore: true,
    metaSquads: ["5. Virginia Valkyrian Counter Fortress"]
  },
  {
    id: "grand-crusher-greatsword",
    name: "Grand Crusher Greatsword",
    image: "/images/items/giant-s-greataxe.png",
    type: "Weapon",
    icon: "⚔️",
    statBoosts: "Phys Atk +28, Guard Piercing +50%",
    acquisition: "Coliseum Rank 1 Reward (Amalia)",
    isMetaCore: true,
    metaSquads: ["8. Amalia Colossal Shield & Armor Obliteration"]
  },
  {
    id: "wolfpack-gauntlets",
    name: "Wolfpack Gauntlets",
    image: "/images/items/wolfpack-gauntlets.png",
    type: "Weapon",
    icon: "⚔️",
    grantedSkill: {
      name: "Wolfpack Strike",
      cost: "1 PP",
      description: "Start of Battle: Increases Phys Atk by 20% for all Bestral allies."
    },
    statBoosts: "Phys Atk +5, Crit Rate +10%",
    acquisition: "Bastorias Region Trader",
    isMetaCore: true,
    metaSquads: ["9. Bestral Midnight Hunt Pack"]
  },
  {
    id: "sacred-feather-rod",
    name: "Sacred Feather Rod",
    image: "/images/items/mother-laelia-s-staff.png",
    type: "Weapon",
    icon: "⚔️",
    grantedSkill: {
      name: "Sacred Barrier",
      cost: "1 PP",
      description: "Start of Battle: Grants a 2-hit nullification barrier against all damage to the entire squad."
    },
    statBoosts: "Mag Atk +24, Mag Def +10",
    acquisition: "Albion Haven Church",
    isMetaCore: true,
    metaSquads: ["10. Sanatio Divine Sacred Zenith & Magic Reflection"]
  },
  {
    id: "sandstorm-staff",
    name: "Sandstorm Staff",
    image: "/images/items/sandstorm-staff.png",
    type: "Weapon",
    icon: "⚔️",
    grantedSkill: {
      name: "Sandstorm",
      cost: "2 PP",
      description: "Start of Battle: Inflicts Blindness on all enemy combatants."
    },
    statBoosts: "Mag Atk +18, Initiative +5",
    acquisition: "Drakenhold Black Market Trader",
    isMetaCore: true,
    metaSquads: ["2. Trinity Rain Instant Apocalypse"]
  },
  {
    id: "icefall-bow",
    name: "Glacial Bow (Icefall Bow)",
    image: "/images/items/icefall-bow.png",
    type: "Weapon",
    icon: "⚔️",
    grantedSkill: {
      name: "Glacial Rain",
      cost: "4 AP",
      description: "Charged Skill: Takes 1 turn to prepare, then rains frozen arrows dealing 200 physical potency and Freeze to all enemies."
    },
    statBoosts: "Phys Atk +22, Crit Rate +10%",
    acquisition: "Bastorias Region Treasury Quest",
    isMetaCore: true,
    metaSquads: ["6. Yunifi Glacial Rain Absolute Zero"]
  },
  {
    id: "sylphid-spear",
    name: "Sylphid Spear",
    image: "/images/items/carnelian-spear.png",
    type: "Weapon",
    icon: "⚔️",
    statBoosts: "Phys Atk +22, Mag Atk +20, Initiative +8",
    acquisition: "Elheim Capital Armoury",
    isMetaCore: true,
    metaSquads: ["7. Elven Twin Sisters Elemental Tempest"]
  },
  {
    id: "hallowed-blade",
    name: "Hallowed Blade",
    image: "/images/items/hallowed-blade.png",
    type: "Weapon",
    icon: "⚔️",
    statBoosts: "Phys Atk +24, HP Regen +10%",
    acquisition: "Church of the Holy Order",
    isMetaCore: true,
    metaSquads: ["1. Alain Holy Vanguard & Cavalry Blitz", "10. Sanatio Divine Sacred Zenith & Magic Reflection"]
  },
  {
    id: "dark-knight-cleaver",
    name: "Dark Knight Cleaver (Dark Flame Spear)",
    image: "/images/items/dark-knight-cleaver.png",
    type: "Weapon",
    icon: "⚔️",
    statBoosts: "Phys Atk +25, Mag Atk +15, Vengeance Multiplier",
    acquisition: "Gloucester Quest Reward",
    isMetaCore: true,
    metaSquads: ["10. Sanatio Divine Sacred Zenith & Magic Reflection"]
  },

  // ==========================================
  // SHIELDS, GREATSHIELDS & OFFHAND
  // ==========================================
  {
    id: "greatshield-of-the-maiden",
    name: "Greatshield of the Maiden",
    image: "/images/items/ring-of-the-maiden.png",
    type: "Shield",
    icon: "🛡️",
    grantedSkill: {
      name: "Maiden's Quick Cover",
      cost: "1 PP",
      description: "Covers an ally and grants 100% damage reduction against physical and magic strikes."
    },
    statBoosts: "Phys Def +16, Guard Rate +40%, Mag Def +8",
    acquisition: "Sanctuary of Cornia",
    isMetaCore: true,
    metaSquads: ["1. Alain Holy Vanguard & Cavalry Blitz", "2. Trinity Rain Instant Apocalypse"]
  },
  {
    id: "angels-reflection-shield",
    name: "Angel's Reflection Shield",
    image: "/images/items/angel-plume.png",
    type: "Shield",
    icon: "🛡️",
    grantedSkill: {
      name: "Magic Reflect",
      cost: "2 PP",
      description: "Before being hit by magic: Reflects magic damage back at attacker."
    },
    statBoosts: "Phys Def +14, Mag Def +12, Guard Rate +30%",
    acquisition: "Albion Haven Shop",
    isMetaCore: true,
    metaSquads: ["10. Sanatio Divine Sacred Zenith & Magic Reflection"]
  },
  {
    id: "rose-shield",
    name: "Rose Shield",
    image: "/images/items/red-rose.png",
    type: "Shield",
    icon: "🛡️",
    grantedSkill: {
      name: "Rose Retaliation",
      cost: "1 PP",
      description: "Guards an ally and immediately launches a counter physical strike."
    },
    statBoosts: "Phys Def +15, Guard Rate +35%, PP +1",
    acquisition: "Virginia Story Quest",
    isMetaCore: true,
    metaSquads: ["5. Virginia Valkyrian Counter Fortress"]
  },
  {
    id: "greatshield-of-fortitude",
    name: "Greatshield of Fortitude",
    image: "/images/items/heavy-guard-shield.png",
    type: "Shield",
    icon: "🛡️",
    statBoosts: "Phys Def +18, Guard Rate +45%, Max HP +20",
    acquisition: "Drakenhold Heavy Armory",
    isMetaCore: true,
    metaSquads: ["6. Yunifi Glacial Rain Absolute Zero", "8. Amalia Colossal Shield & Armor Obliteration"]
  },
  {
    id: "radiant-shield",
    name: "Radiant Shield",
    image: "/images/items/blue-rose.png",
    type: "Shield",
    icon: "🛡️",
    statBoosts: "Phys Def +12, Mag Def +12, Guard Rate +25%, Magic Barrier",
    acquisition: "Elheim Light Armory",
    isMetaCore: true,
    metaSquads: ["3. Dragoon Glacial Tempest (Aerial Bombardment)", "8. Amalia Colossal Shield & Armor Obliteration"]
  },
  {
    id: "deflect-shield",
    name: "Deflect Shield",
    image: "/images/items/defensive-ring.png",
    type: "Shield",
    icon: "🛡️",
    grantedSkill: {
      name: "Arrow Deflect",
      cost: "1 PP",
      description: "Negates 100% damage from incoming ranged flying & bow attacks."
    },
    statBoosts: "Phys Def +12, Guard Rate +30%",
    acquisition: "Cornia Capital Armory",
    isMetaCore: true,
    metaSquads: ["5. Virginia Valkyrian Counter Fortress", "6. Yunifi Glacial Rain Absolute Zero"]
  },

  // ==========================================
  // HELMS, ROBES & ARMOR
  // ==========================================
  {
    id: "cat-ear-hood",
    name: "Cat-Ear Hood",
    image: "/images/items/cat-ear-hood.png",
    type: "Helm",
    icon: "🪖",
    grantedSkill: {
      name: "Quick Impetus",
      cost: "3 PP",
      description: "Triggered when an ally completes a charged active skill: Immediately grants +100% Turn Bar to that ally and refunds 1 AP."
    },
    statBoosts: "Phys Def +2, Mag Def +5, PP +1",
    acquisition: "Divine Shard Shop (30 Divine Shards)",
    isMetaCore: true,
    metaSquads: ["2. Trinity Rain Instant Apocalypse"]
  },
  {
    id: "white-cat-ear-hood",
    name: "White Cat-Ear Hood (Cap)",
    image: "/images/items/white-cat-ear-hood.png",
    type: "Helm",
    icon: "🪖",
    grantedSkill: {
      name: "Quick Impetus",
      cost: "3 PP",
      description: "Instantly advances turn order for allies channeling aerial / magic charges."
    },
    statBoosts: "Phys Def +3, Mag Def +6, PP +1",
    acquisition: "Divine Shard Shop (30 Divine Shards)",
    isMetaCore: true,
    metaSquads: ["3. Dragoon Glacial Tempest (Aerial Bombardment)"]
  },
  {
    id: "ancient-crown",
    name: "Ancient Crown",
    image: "/images/items/ancient-crown.png",
    type: "Helm",
    icon: "🪖",
    statBoosts: "All Stats +5, PP +1, Phys Def +4, Mag Def +6",
    acquisition: "Postgame Zenoira Treasure",
    isMetaCore: true,
    metaSquads: ["1. Alain Holy Vanguard & Cavalry Blitz", "7. Elven Twin Sisters Elemental Tempest"]
  },
  {
    id: "elven-crown",
    name: "Elven Crown",
    image: "/images/items/ancient-crown.png",
    type: "Helm",
    icon: "🪖",
    statBoosts: "Mag Atk +8, Mag Def +8, PP +1, Initiative +5",
    acquisition: "Elheim Royal Treasury",
    isMetaCore: true,
    metaSquads: ["7. Elven Twin Sisters Elemental Tempest"]
  },
  {
    id: "archbishop-s-mitre",
    name: "Archbishop's Mitre",
    image: "/images/items/archbishop-s-mitre.png",
    type: "Helm",
    icon: "🪖",
    grantedSkill: {
      name: "Row Refresh",
      cost: "1 PP",
      description: "Cleanses all debuffs and afflictions from full allied row."
    },
    statBoosts: "Mag Def +10, Healing +20, PP +1",
    acquisition: "Albion Cathedral Treasury",
    isMetaCore: true,
    metaSquads: ["10. Sanatio Divine Sacred Zenith & Magic Reflection"]
  },
  {
    id: "druid-s-robes",
    name: "Druid's Robes",
    image: "/images/items/druid-s-robes.png",
    type: "Helm",
    icon: "🪖",
    statBoosts: "Mag Def +10, Initiative +6, Debuff Resistance +50%",
    acquisition: "Elheim Deep Forest Trader",
    isMetaCore: true,
    metaSquads: ["2. Trinity Rain Instant Apocalypse"]
  },

  // ==========================================
  // ACCESSORIES (PENDANTS, RINGS, LENSES, PLUMES)
  // ==========================================
  {
    id: "ring-of-the-unicorn",
    name: "Ring of the Unicorn",
    image: "/images/items/ring-of-the-unicorn.png",
    type: "Accessory",
    icon: "💎",
    grantedSkill: {
      name: "Unicorn's Grace",
      cost: "1 PP",
      description: "Immunizes wearer to all status afflictions and stat debuffs."
    },
    statBoosts: "All Stats +5, AP +1, PP +1",
    acquisition: "Main Story Quest: Alain Ring Ceremony",
    isMetaCore: true,
    metaSquads: ["1. Alain Holy Vanguard & Cavalry Blitz"]
  },
  {
    id: "ring-of-the-maiden",
    name: "Ring of the Maiden",
    image: "/images/items/ring-of-the-maiden.png",
    type: "Accessory",
    icon: "💎",
    grantedSkill: {
      name: "Maiden's Protection",
      cost: "1 PP",
      description: "Grants a row-wide immunity barrier against physical and magic status effects at battle start."
    },
    statBoosts: "Mag Def +10, AP +1, PP +1",
    acquisition: "Main Story Quest: Covenant Maiden Choice",
    isMetaCore: true,
    metaSquads: ["1. Alain Holy Vanguard & Cavalry Blitz", "10. Sanatio Divine Sacred Zenith & Magic Reflection"]
  },
  {
    id: "snipers-amber-lens",
    name: "Sniper's Amber Lens",
    image: "/images/items/snipers-amber-lens.png",
    type: "Accessory",
    icon: "💎",
    grantedSkill: {
      name: "Eagle Eye",
      cost: "2 PP",
      description: "Grants Guaranteed Critical Hit and True Strike (bypasses Evasion and Guard) on next active attack."
    },
    statBoosts: "Crit Rate +10%, Crit Damage +20%",
    acquisition: "Elheim Region Blacksmith / Coliseum Shop",
    isMetaCore: true,
    metaSquads: ["2. Trinity Rain Instant Apocalypse", "3. Dragoon Glacial Tempest (Aerial Bombardment)"]
  },
  {
    id: "familiar-s-choker",
    name: "Familiar's Choker",
    image: "/images/items/familiar-s-choker.png",
    type: "Accessory",
    icon: "💎",
    grantedSkill: {
      name: "Sorcerous Connection",
      cost: "2 PP",
      description: "Triggered when an ally casts an active magic attack: Grants +50% Magic Attack to that ally."
    },
    statBoosts: "Mag Atk +10, Mag Def +5",
    acquisition: "Bastorias Region Trader",
    isMetaCore: true,
    metaSquads: ["2. Trinity Rain Instant Apocalypse", "7. Elven Twin Sisters Elemental Tempest"]
  },
  {
    id: "angel-plume",
    name: "Angel Plume",
    image: "/images/items/angel-plume.png",
    type: "Accessory",
    icon: "💎",
    grantedSkill: {
      name: "Tailwind Array",
      cost: "1 PP",
      description: "Start of Battle: Grants +20 Initiative to all allies for 1 turn."
    },
    statBoosts: "Initiative +15, Speed +1",
    acquisition: "Divine Shard Shop (20 Divine Shards)",
    isMetaCore: true,
    metaSquads: ["3. Dragoon Glacial Tempest (Aerial Bombardment)"]
  },
  {
    id: "raven-plume",
    name: "Raven Plume",
    image: "/images/items/raven-plume.png",
    type: "Accessory",
    icon: "💎",
    statBoosts: "Initiative +15",
    acquisition: "Drakenhold Trader",
    isMetaCore: true,
    metaSquads: ["2. Trinity Rain Instant Apocalypse", "4. Berengaria Affliction & Death Spiral"]
  },
  {
    id: "dove-plume",
    name: "Dove Plume",
    image: "/images/items/dove-plume.png",
    type: "Accessory",
    icon: "💎",
    statBoosts: "Initiative +10",
    acquisition: "Cornia Blacksmith",
    isMetaCore: true,
    metaSquads: ["5. Virginia Valkyrian Counter Fortress"]
  },
  {
    id: "carnelian-pendant",
    name: "Carnelian Pendant",
    image: "/images/items/carnelian-pendant.png",
    type: "Accessory",
    icon: "💎",
    statBoosts: "AP +1",
    acquisition: "General Stores across Fevrith",
    isMetaCore: true,
    metaSquads: ["All Meta Squads"]
  },
  {
    id: "ruby-pendant",
    name: "Ruby Pendant",
    image: "/images/items/ruby-pendant.png",
    type: "Accessory",
    icon: "💎",
    statBoosts: "AP +2",
    acquisition: "Albion Region Armorer / Divine Shard Shop",
    isMetaCore: true,
    metaSquads: ["All Meta Squads"]
  },
  {
    id: "lapis-pendant",
    name: "Lapis Pendant",
    image: "/images/items/lapis-pendant.png",
    type: "Accessory",
    icon: "💎",
    statBoosts: "PP +1",
    acquisition: "General Stores across Fevrith",
    isMetaCore: true,
    metaSquads: ["All Meta Squads"]
  },
  {
    id: "sapphire-pendant",
    name: "Sapphire Pendant",
    image: "/images/items/sapphire-pendant.png",
    type: "Accessory",
    icon: "💎",
    statBoosts: "PP +2",
    acquisition: "Albion Region Armorer / Divine Shard Shop",
    isMetaCore: true,
    metaSquads: ["All Meta Squads"]
  },
  {
    id: "gambler-s-coin",
    name: "Gambler's Coin",
    image: "/images/items/gambler-s-coin.png",
    type: "Accessory",
    icon: "💎",
    grantedSkill: {
      name: "Inspiration",
      cost: "1 PP",
      description: "Grants +30% Phys/Mag Atk and +50% Crit Damage to an attacking ally, with -50 Accuracy penalty."
    },
    statBoosts: "Crit Rate +15%",
    acquisition: "Cornia Black Market Trader",
    isMetaCore: true,
    metaSquads: ["3. Dragoon Glacial Tempest (Aerial Bombardment)", "8. Amalia Colossal Shield & Armor Obliteration"]
  },
  {
    id: "parrying-amulet",
    name: "Parrying Amulet (Parrying Ring)",
    image: "/images/items/parrying-amulet.png",
    type: "Accessory",
    icon: "💎",
    grantedSkill: {
      name: "Parrying Slash",
      cost: "1 PP",
      description: "When attacked by physical melee: Negates 100% damage and strikes back immediately."
    },
    statBoosts: "Evasion +15, Crit Rate +5%",
    acquisition: "Swordfighter Training Grounds",
    isMetaCore: true,
    metaSquads: ["1. Alain Holy Vanguard & Cavalry Blitz", "5. Virginia Valkyrian Counter Fortress"]
  },
  {
    id: "retaliation-earrings",
    name: "Retaliation Earrings (Counter Belt)",
    image: "/images/items/retaliation-earrings.png",
    type: "Accessory",
    icon: "💎",
    grantedSkill: {
      name: "Counter Slash",
      cost: "1 PP",
      description: "Retaliates against enemy attacks with an immediate physical counter."
    },
    statBoosts: "Phys Atk +3, Guard Rate +10%",
    acquisition: "Drakenhold Coliseum Trader",
    isMetaCore: true,
    metaSquads: ["5. Virginia Valkyrian Counter Fortress"]
  },
  {
    id: "first-aid-kit",
    name: "First Aid Kit",
    image: "/images/items/first-aid-kit.png",
    type: "Accessory",
    icon: "💎",
    grantedSkill: {
      name: "First Aid",
      cost: "1 PP",
      description: "End of Battle: Automatically heals lowest HP ally by 50% max health."
    },
    statBoosts: "Max HP +15",
    acquisition: "General Medicine Shops",
    isMetaCore: true,
    metaSquads: ["4. Berengaria Affliction & Death Spiral", "10. Sanatio Divine Sacred Zenith & Magic Reflection"]
  },
  {
    id: "heavensteed-reins",
    name: "Heavensteed Reins (Warhorse Reins)",
    image: "/images/items/heavensteed-reins.png",
    type: "Accessory",
    icon: "💎",
    statBoosts: "Cavalry Attack +15%, Guard Rate +10%",
    acquisition: "Knights Guild in Cornia",
    isMetaCore: true,
    metaSquads: ["1. Alain Holy Vanguard & Cavalry Blitz"]
  },
  {
    id: "wingline-standard",
    name: "Wingline Standard",
    image: "/images/items/wingline-standard.png",
    type: "Accessory",
    icon: "💎",
    statBoosts: "Squad Flying Attack +15%, Initiative +5",
    acquisition: "Albion Haven Knights",
    isMetaCore: true,
    metaSquads: ["3. Dragoon Glacial Tempest (Aerial Bombardment)", "10. Sanatio Divine Sacred Zenith & Magic Reflection"]
  },
  {
    id: "chloe-s-charm",
    name: "Chloe's Charm (Keen Earring)",
    image: "/images/items/chloe-s-charm.png",
    type: "Accessory",
    icon: "💎",
    grantedSkill: {
      name: "Keen Call",
      cost: "1 PP",
      description: "Triggered when an ally performs an active physical attack: Grants 100% Guaranteed Critical Hit."
    },
    statBoosts: "Crit Rate +10%, Phys Atk +2",
    acquisition: "Chloe Bond Quest Reward",
    isMetaCore: true,
    metaSquads: ["1. Alain Holy Vanguard & Cavalry Blitz"]
  },
  {
    id: "scarlett-s-ribbon",
    name: "Scarlett's Ribbon",
    image: "/images/items/scarlett-s-ribbon.png",
    type: "Accessory",
    icon: "💎",
    statBoosts: "Healing +20, Mag Def +8, PP +1",
    acquisition: "Scarlett Bond Quest Reward",
    isMetaCore: true,
    metaSquads: ["1. Alain Holy Vanguard & Cavalry Blitz"]
  }
];
