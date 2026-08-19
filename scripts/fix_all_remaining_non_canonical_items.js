const fs = require('fs');
const path = require('path');

const scriptPath = path.join(__dirname, 'rebuild_all_10_zero_overlap_squads.js');
let scriptContent = fs.readFileSync(scriptPath, 'utf-8');

// Replacements map
const REPLACEMENTS = [
  {
    target: "bestInSlot: 'Beastfang Blade'",
    replace: "bestInSlot: 'Venom Blade'"
  },
  {
    target: "bestInSlot: 'Wolf Fang Bracelet'",
    replace: "bestInSlot: 'Badger Gauntlets'"
  },
  {
    target: "notes: 'Killing Pursuit (1 PP), Critical Rate +15%.'",
    replace: "notes: 'Phys Def +1, Mag Def +1, Accuracy +10, enhances Bestral ferocity.'"
  },
  {
    target: "notes: 'Phys Atk +24, Poison Strike, Crit Rate +10%.'",
    replace: "notes: 'Phys Atk +18, Poison Strike, afflict target for bonus follow-ups.'"
  },
  {
    target: "bestInSlot: 'Boon Standard'",
    replace: "bestInSlot: 'Elite Standard'"
  },
  {
    target: "notes: 'Squad Mag Atk +10%, Boosts Boon of the Faeries barrier.'",
    replace: "notes: 'United Front: Boosts squad offensive and defensive stats in formation.'"
  },
  {
    target: "bestInSlot: 'Dragon\\'s Choker'",
    replace: "bestInSlot: 'Hero\\'s Medallion'"
  },
  {
    target: "notes: 'Phys Atk +10%, Crit Damage +20%, AP +1.'",
    replace: "notes: 'Phys Atk +20%, Base AP +1, Base PP +1. Coliseum Champion Crown.'"
  },
  {
    target: "bestInSlot: 'Elven Tiara'",
    replace: "bestInSlot: 'Silver Circlet'"
  },
  {
    target: "notes: 'Mag Atk +4, Mag Def +6, PP +1.'",
    replace: "notes: 'Mag Def +6, PP +1.'"
  },
  {
    target: "bestInSlot: 'Pure Talisman'",
    replace: "bestInSlot: 'Detoxifying Amulet'"
  },
  {
    target: "notes: 'All Affliction Immunity, Max HP +15.'",
    replace: "notes: 'Mag Def +1, Poison Cure, Poison Immunity.'"
  },
  {
    target: "bestInSlot: 'Sorcerous Ring'",
    replace: "bestInSlot: 'Old Witch\\'s Ring'"
  },
  {
    target: "notes: 'Mag Atk +6, All Elemental Damage +15%.'",
    replace: "notes: 'Mag Def +3, Magick Conversion, Mag Atk +2.'"
  },
  {
    target: "bestInSlot: 'Spada d\\'Onore'",
    replace: "bestInSlot: 'Vorpal Sword'"
  },
  {
    target: "notes: 'Main-Hand Slot: Phys Atk +24, Crit Rate +15%, Guard Pierce +15%.'",
    replace: "notes: 'Main-Hand Slot: Phys Atk +23, Initiative +3.'"
  },
  {
    target: "bestInSlot: 'Starlight Sword'",
    replace: "bestInSlot: 'Meteorite Sword'"
  },
  {
    target: "notes: 'Dual-Wield Off-Hand Slot: Phys Atk +20, Crit Rate +15%, Evasion +10.'",
    replace: "notes: 'Dual-Wield Off-Hand Slot: Phys Atk +24, Max HP +20, Guard +10%.'"
  },
  {
    target: "bestInSlot: 'Viper\\'s Fang'",
    replace: "bestInSlot: 'Venom Blade'"
  },
  {
    target: "optimalAlternatives: ['Parrying Dagger', 'Starlight Sword', 'Wingblade']",
    replace: "optimalAlternatives: ['Parrying Dagger', 'Vorpal Sword', 'Meteorite Sword']"
  },
  {
    target: "optimalAlternatives: ['Viper\\'s Fang', 'Pursuant\\'s Blade', 'Wingblade']",
    replace: "optimalAlternatives: ['Venom Blade', 'Pursuant\\'s Blade', 'Vorpal Sword']"
  },
  {
    target: "optimalAlternatives: ['Starlight Sword', 'Viper\\'s Fang', 'Pursuant\\'s Blade']",
    replace: "optimalAlternatives: ['Vorpal Sword', 'Venom Blade', 'Pursuant\\'s Blade']"
  },
  {
    target: "optimalAlternatives: ['Viper\\'s Fang', 'Notos\\'s Sword', 'Bandit Longsword']",
    replace: "optimalAlternatives: ['Venom Blade', 'Notos\\'s Sword', 'Bandit Longsword']"
  },
  {
    target: "optimalAlternatives: ['Marksman\\'s Monocle', 'Hawk Eye Brooch', 'Hunter\\'s Cap']",
    replace: "optimalAlternatives: ['Sniper\\'s Lens', 'Mirrored Spectacles', 'Hunter\\'s Cap']"
  },
  {
    target: "optimalAlternatives: ['Duelist\\'s Buckler', 'Retaliation Brooch', 'Evasion Ring']",
    replace: "optimalAlternatives: ['Retaliation Earrings', 'Warrior\\'s Medallion', 'Lucky Coin']"
  },
  {
    target: "optimalAlternatives: ['Ancient Crown', 'Silk Hood', 'Elven Tiara']",
    replace: "optimalAlternatives: ['Ancient Crown', 'Silk Hood', 'Silver Circlet']"
  },
  {
    target: "optimalAlternatives: ['Dream Crown', 'Silk Hood', 'Faerie Tiara']",
    replace: "optimalAlternatives: ['Dream Crown', 'Silk Hood', 'Silver Circlet']"
  },
  {
    target: "optimalAlternatives: ['Magick Brooch', 'Celestial Talisman', 'Raven Plume']",
    replace: "optimalAlternatives: ['Old Witch\\'s Ring', 'Celestial Talisman', 'Raven Plume']"
  }
];

REPLACEMENTS.forEach(({ target, replace }) => {
  if (scriptContent.includes(target)) {
    scriptContent = scriptContent.replaceAll(target, replace);
    console.log(`Replaced: ${target} -> ${replace}`);
  }
});

fs.writeFileSync(scriptPath, scriptContent, 'utf-8');
console.log('Successfully updated scripts/rebuild_all_10_zero_overlap_squads.js!');
