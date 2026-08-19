const fs = require('fs');
const path = require('path');

// 1. Read existing items.ts
const itemsFile = path.join(__dirname, '../src/data/items.ts');
let itemsRaw = fs.readFileSync(itemsFile, 'utf8');

// Array of new items to ensure they exist in ITEMS_DATA
const newItems = [
  {
    id: 'blue-rose-sword',
    name: 'Blue Rose Sword',
    type: 'Weapon',
    icon: '⚔️',
    image: '/images/items/blue-rose.png',
    statBoosts: 'Phys Atk +24, Base AP +1, Critical Rate +10%, Phys Def +3',
    acquisition: 'Virginia Canonical Story Weapon / Drakenhold Royal Treasury',
    isMetaCore: true,
    metaSquads: ['zero-5-virginia-valkyrian-counter']
  },
  {
    id: 'ring-of-the-maiden',
    name: 'Ring of the Maiden',
    type: 'Accessory',
    icon: '💎',
    image: '/images/items/holy-unicorn-signet.png',
    statBoosts: 'Mag Def +10, Base AP +1, Base PP +1, Maiden\'s Protection, All Affliction Immunity',
    acquisition: 'Scarlett Covenant Ritual at Sanctuary of the Maiden',
    isMetaCore: true,
    metaSquads: ['zero-1-alain-holy-vanguard']
  },
  {
    id: 'general-s-pike',
    name: 'General\'s Pike',
    type: 'Weapon',
    icon: '⚔️',
    image: '/images/items/adept-s-shortspear.png',
    statBoosts: 'Phys Atk +22, Initiative +4, True Strike',
    acquisition: 'Cornia Royal Armory',
    isMetaCore: true,
    metaSquads: ['zero-1-alain-holy-vanguard']
  },
  {
    id: 'viper-s-fang',
    name: 'Viper\'s Fang',
    type: 'Weapon',
    icon: '⚔️',
    image: '/images/items/black-iron-sword.png',
    statBoosts: 'Phys Atk +18, Poison Strike, Evasion +10',
    acquisition: 'Drakenhold Secret Blacksmith',
    isMetaCore: true,
    metaSquads: ['zero-1-alain-holy-vanguard']
  },
  {
    id: 'zenoiran-spear',
    name: 'Zenoiran Spear',
    type: 'Weapon',
    icon: '⚔️',
    image: '/images/items/black-iron-spear.png',
    statBoosts: 'Phys Atk +22, Guard Rate +15%',
    acquisition: 'Zenoiran Ruins Exploration',
    isMetaCore: true,
    metaSquads: ['zero-2-trinity-rain-apocalypse']
  },
  {
    id: 'dragon-s-choker',
    name: 'Dragon\'s Choker',
    type: 'Accessory',
    icon: '💎',
    image: '/images/items/familiar-s-choker.png',
    statBoosts: 'Phys Atk +10%, Crit Damage +20%, AP +1',
    acquisition: 'Drakenhold Colosseum Master Reward',
    isMetaCore: true,
    metaSquads: ['zero-3-dragoon-aerial-tempest']
  },
  {
    id: 'hallowed-staff',
    name: 'Hallowed Staff',
    type: 'Weapon',
    icon: '⚔️',
    image: '/images/items/sacral-rod.png',
    statBoosts: 'Mag Atk +22, HP Regen +10%',
    acquisition: 'Albion Divine Sanctuary',
    isMetaCore: true,
    metaSquads: ['zero-3-dragoon-aerial-tempest']
  },
  {
    id: 'executioner-s-ring',
    name: 'Executioner\'s Ring',
    type: 'Accessory',
    icon: '💎',
    image: '/images/items/ring-of-the-unicorn.png',
    statBoosts: 'Phys Atk +5, Crit Damage +30% against Afflicted Targets',
    acquisition: 'Dark Marquess Vault',
    isMetaCore: true,
    metaSquads: ['zero-4-berengaria-affliction-lockdown']
  },
  {
    id: 'starlight-sword',
    name: 'Starlight Sword',
    type: 'Weapon',
    icon: '⚔️',
    image: '/images/items/heavenswing-sword.png',
    statBoosts: 'Phys Atk +20, Crit Rate +15%, Evasion +10',
    acquisition: 'Bastorias Celestial Forge',
    isMetaCore: true,
    metaSquads: ['zero-5-virginia-valkyrian-counter']
  },
  {
    id: 'retaliation-brooch',
    name: 'Retaliation Brooch',
    type: 'Accessory',
    icon: '💎',
    image: '/images/items/parrying-amulet.png',
    statBoosts: 'Counterattack Skills Deal +30% Damage',
    acquisition: 'Drakenhold Armorer',
    isMetaCore: true,
    metaSquads: ['zero-5-virginia-valkyrian-counter']
  },
  {
    id: 'eagle-eye-ring',
    name: 'Eagle Eye Ring',
    type: 'Accessory',
    icon: '💎',
    image: '/images/items/sniper-s-lens.png',
    statBoosts: 'Accuracy +20, True Strike Boost',
    acquisition: 'Cornia Hunter Guild',
    isMetaCore: true,
    metaSquads: ['zero-5-virginia-valkyrian-counter']
  },
  {
    id: 'snow-white-cloak',
    name: 'Snow White Cloak',
    type: 'Accessory',
    icon: '💎',
    image: '/images/items/thief-s-mantle.png',
    statBoosts: 'Evasion +15, Freeze Potency +20%',
    acquisition: 'Bastorias Frost Fortress',
    isMetaCore: true,
    metaSquads: ['zero-6-yunifi-glacial-rain-freeze']
  },
  {
    id: 'frost-charm',
    name: 'Frost Charm',
    type: 'Accessory',
    icon: '💎',
    image: '/images/items/celestial-talisman.png',
    statBoosts: 'Immunity to Freeze, Ice Damage +25%',
    acquisition: 'Bastorias Frost Hunter Guild',
    isMetaCore: true,
    metaSquads: ['zero-6-yunifi-glacial-rain-freeze']
  },
  {
    id: 'owl-feather-ring',
    name: 'Owl Feather Ring',
    type: 'Accessory',
    icon: '💎',
    image: '/images/items/sage-owl-s-shawl.png',
    statBoosts: 'PP +1, Restores 1 PP to Ally using Active Skill',
    acquisition: 'Bastorias Wereowl Sanctum',
    isMetaCore: true,
    metaSquads: ['zero-6-yunifi-glacial-rain-freeze']
  },
  {
    id: 'elven-tiara',
    name: 'Elven Tiara',
    type: 'Accessory',
    icon: '💎',
    image: '/images/items/dream-crown.png',
    statBoosts: 'Mag Atk +5, Mag Def +5, PP +1',
    acquisition: 'Elheim Royal Jeweler',
    isMetaCore: true,
    metaSquads: ['zero-6-yunifi-glacial-rain-freeze']
  },
  {
    id: 'zenoiran-sword',
    name: 'Zenoiran Sword',
    type: 'Weapon',
    icon: '⚔️',
    image: '/images/items/black-iron-sword.png',
    statBoosts: 'Phys Atk +22, Phys Def +5',
    acquisition: 'Zenoiran Garrison Vault',
    isMetaCore: true,
    metaSquads: ['zero-6-yunifi-glacial-rain-freeze']
  },
  {
    id: 'sorcerous-ring',
    name: 'Sorcerous Ring',
    type: 'Accessory',
    icon: '💎',
    image: '/images/items/ancient-crown.png',
    statBoosts: 'Mag Atk +6, All Elemental Damage +15%',
    acquisition: 'Elheim Ancient Spire',
    isMetaCore: true,
    metaSquads: ['zero-7-elven-sisters-elemental-tempest']
  },
  {
    id: 'boon-standard',
    name: 'Boon Standard',
    type: 'Accessory',
    icon: '💎',
    image: '/images/items/wingline-standard.png',
    statBoosts: 'Squad Mag Atk +10%, Boosts Boon of the Faeries barrier',
    acquisition: 'Elheim Royal Scepter Cache',
    isMetaCore: true,
    metaSquads: ['zero-7-elven-sisters-elemental-tempest']
  },
  {
    id: 'spellsteel-sword',
    name: 'Spellsteel Sword',
    type: 'Weapon',
    icon: '⚔️',
    image: '/images/items/runic-sword.png',
    statBoosts: 'Phys Atk +18, Mag Atk +16, Evasion +10',
    acquisition: 'Elheim Forge of Mists',
    isMetaCore: true,
    metaSquads: ['zero-7-elven-sisters-elemental-tempest']
  },
  {
    id: 'pure-talisman',
    name: 'Pure Talisman',
    type: 'Accessory',
    icon: '💎',
    image: '/images/items/celestial-talisman.png',
    statBoosts: 'Affliction Resistance +50%, Grants Row Refresh',
    acquisition: 'Elheim Temple of Spring',
    isMetaCore: true,
    metaSquads: ['zero-7-elven-sisters-elemental-tempest']
  },
  {
    id: 'greatwood-greataxe',
    name: 'Greatwood Greataxe',
    type: 'Weapon',
    icon: '⚔️',
    image: '/images/items/boreas-s-axe.png',
    statBoosts: 'Phys Atk +24, Mag Def +4, Guard +10%',
    acquisition: 'Bastorias Greatwood Tribe',
    isMetaCore: true,
    metaSquads: ['zero-8-amalia-grand-crusher']
  },
  {
    id: 'spada-d-onore',
    name: 'Spada d\'Onore',
    type: 'Weapon',
    icon: '⚔️',
    image: '/images/items/notos-s-sword.png',
    statBoosts: 'Phys Atk +24, Crit Rate +15%, Guard Pierce +15%',
    acquisition: 'Drakenhold Noble House Relic',
    isMetaCore: true,
    metaSquads: ['zero-8-amalia-grand-crusher']
  },
  {
    id: 'duelist-s-buckler',
    name: 'Duelist\'s Buckler',
    type: 'Accessory',
    icon: '💎',
    image: '/images/items/parrying-amulet.png',
    statBoosts: 'Evasion +10, Parry Counter Damage +20%',
    acquisition: 'Drakenhold Arena Champion Cache',
    isMetaCore: true,
    metaSquads: ['zero-8-amalia-grand-crusher']
  },
  {
    id: 'zenoiran-bow',
    name: 'Zenoiran Bow',
    type: 'Weapon',
    icon: '⚔️',
    image: '/images/items/apeliotes-s-bow.png',
    statBoosts: 'Phys Atk +24, Crit Rate +10%, Anti-Flying +50%',
    acquisition: 'Zenoiran Fortress Watchtower',
    isMetaCore: true,
    metaSquads: ['zero-8-amalia-grand-crusher']
  },
  {
    id: 'marksman-s-monocle',
    name: 'Marksman\'s Monocle',
    type: 'Accessory',
    icon: '💎',
    image: '/images/items/sniper-s-lens.png',
    statBoosts: 'Accuracy +25, True Strike',
    acquisition: 'Albion Marksman Post',
    isMetaCore: true,
    metaSquads: ['zero-8-amalia-grand-crusher']
  },
  {
    id: 'hawk-eye-brooch',
    name: 'Hawk Eye Brooch',
    type: 'Accessory',
    icon: '💎',
    image: '/images/items/sniper-s-amber-lens.png',
    statBoosts: 'Crit Rate +15%, Hawkeye True Strike',
    acquisition: 'Albion Sky Hunter Guild',
    isMetaCore: true,
    metaSquads: ['zero-8-amalia-grand-crusher']
  },
  {
    id: 'beastfang-blade',
    name: 'Beastfang Blade',
    type: 'Weapon',
    icon: '⚔️',
    image: '/images/items/carnelian-blade.png',
    statBoosts: 'Phys Atk +22, Crit Rate +15%, Initiative +5',
    acquisition: 'Bastorias Wolf Clan Altar',
    isMetaCore: true,
    metaSquads: ['zero-9-bestral-midnight-hunt']
  },
  {
    id: 'holy-angel-bow',
    name: 'Holy Angel Bow',
    type: 'Weapon',
    icon: '⚔️',
    image: '/images/items/apeliotes-s-bow.png',
    statBoosts: 'Phys Atk +24, Mag Atk +18, Blindness Affliction +20%',
    acquisition: 'Albion Angelic Spire',
    isMetaCore: true,
    metaSquads: ['zero-9-bestral-midnight-hunt']
  },
  {
    id: 'feather-plume',
    name: 'Feather Plume',
    type: 'Accessory',
    icon: '💎',
    image: '/images/items/angel-plume.png',
    statBoosts: 'Initiative +12, Evasion +10',
    acquisition: 'Albion Feather Shrine',
    isMetaCore: true,
    metaSquads: ['zero-9-bestral-midnight-hunt']
  },
  {
    id: 'executioner-s-blade',
    name: 'Executioner\'s Blade',
    type: 'Weapon',
    icon: '⚔️',
    image: '/images/items/kingsblade-cornix.png',
    statBoosts: 'Phys Atk +26, Crit Rate +10%, AP +1 on Kill',
    acquisition: 'Drakenhold Execution Grounds',
    isMetaCore: true,
    metaSquads: ['zero-9-bestral-midnight-hunt']
  },
  {
    id: 'zephyrus-sword',
    name: 'Zephyrus Sword',
    type: 'Weapon',
    icon: '⚔️',
    image: '/images/items/notos-s-sword.png',
    statBoosts: 'Phys Atk +24, Initiative +8, Evasion +15',
    acquisition: 'Albion Sky Temple Treasury',
    isMetaCore: true,
    metaSquads: ['zero-10-sanatio-divine-reflection']
  },
  {
    id: 'angel-crest',
    name: 'Angel Crest',
    type: 'Accessory',
    icon: '💎',
    image: '/images/items/wingline-standard.png',
    statBoosts: 'Squad Flying Atk +15%, Initiative +5',
    acquisition: 'Albion Heavenly Citadel',
    isMetaCore: true,
    metaSquads: ['zero-10-sanatio-divine-reflection']
  },
  {
    id: 'dragonbone-sword',
    name: 'Dragonbone Sword',
    type: 'Weapon',
    icon: '⚔️',
    image: '/images/items/dragonbone-blade.png',
    statBoosts: 'Phys Atk +22, PP +1, Initiative -10',
    acquisition: 'Drakenhold Dragon Graveyard',
    isMetaCore: true,
    metaSquads: ['zero-8-amalia-grand-crusher']
  }
];

// Append new items to ITEMS_DATA if they don't already exist
const itemsArrayStr = itemsRaw.substring(itemsRaw.indexOf('['), itemsRaw.lastIndexOf(']') + 1);
const existingItems = eval(itemsArrayStr);
const existingIds = new Set(existingItems.map(i => i.id.toLowerCase().trim()));

let addedCount = 0;
newItems.forEach(newItem => {
  if (!existingIds.has(newItem.id.toLowerCase().trim())) {
    existingItems.push(newItem);
    addedCount++;
  }
});

console.log(`Added ${addedCount} missing items to ITEMS_DATA.`);

// Format and write back to src/data/items.ts
const updatedItemsContent = `import { RelicItem } from '@/types';\n\nexport const ITEMS_DATA: RelicItem[] = ${JSON.stringify(existingItems, null, 2)};\n`;
fs.writeFileSync(itemsFile, updatedItemsContent, 'utf8');
console.log('Successfully updated src/data/items.ts!');
