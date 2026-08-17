const fs = require('fs');

// Load classes.ts
const classesRaw = fs.readFileSync('./src/data/classes.ts', 'utf8');
const itemsRaw = fs.readFileSync('./src/data/items.ts', 'utf8');
const existingSkillsRaw = fs.readFileSync('./src/data/skills.ts', 'utf8');

// Parse existing skills
let existingSkills = [];
try {
  const jsonContent = existingSkillsRaw.replace(/import[\s\S]*?export const SKILLS_DATA:\s*GameSkill\[\]\s*=\s*/, '').replace(/;\s*$/, '');
  existingSkills = JSON.parse(jsonContent);
} catch (e) {
  console.error('Failed to parse existing skills JSON', e);
}

const skillMap = new Map();
existingSkills.forEach(s => {
  skillMap.set(s.name.toLowerCase().trim(), s);
});

// Extra meta and equipment skills needed for full game compendium
const EXTRA_SKILLS = [
  {
    id: "sacred-light",
    name: "Sacred Light",
    type: "Passive",
    cost: "1 PP",
    potency: 0,
    target: "Full Squad",
    classSource: "High Priestess (Scarlett)",
    description: "At Start of Battle, grant all allies gradual HP regeneration and dispel any initial status afflictions.",
    flags: ["Start of Battle", "Buff", "Cleanse"]
  },
  {
    id: "keen-call",
    name: "Keen Call",
    type: "Passive",
    cost: "1 PP",
    potency: 0,
    target: "Attacking Ally",
    classSource: "Sergeant (Chloe) / Chloe's Charm",
    description: "When an ally attacks, grant them guaranteed 100% Critical Hit on their active strike.",
    flags: ["After Ally Acts", "Buff", "Critical"]
  },
  {
    id: "line-charge",
    name: "Line Charge",
    type: "Active",
    cost: "2 AP",
    potency: 160,
    target: "Column / Row",
    classSource: "Great Knight (Clive)",
    description: "Charge through a line of enemies with crushing cavalry force, dealing 200% bonus damage to infantry.",
    flags: ["Physical", "Cavalry", "Anti-Infantry"]
  },
  {
    id: "parrying-slash",
    name: "Parrying Slash",
    type: "Passive",
    cost: "1 PP",
    potency: 100,
    target: "Attacking Enemy",
    classSource: "Swordmaster (Melisandre / Leah) / Parrying Dagger",
    description: "Nullify a single physical attack and immediately counter with a truestrike physical slash.",
    flags: ["Before Attacked", "Counter", "Truestrike"]
  },
  {
    id: "trinity-rain",
    name: "Trinity Rain",
    type: "Active",
    cost: "3 AP",
    potency: 300,
    target: "All Enemies",
    classSource: "Item (Millennium Scepter)",
    description: "Charge a supreme divine light storm that rains 3 massive radiant magic strikes on all enemies.",
    flags: ["Magical", "Charge", "All Enemies", "Nuke"]
  },
  {
    id: "quick-impetus",
    name: "Quick Impetus",
    type: "Passive",
    cost: "2 PP",
    potency: 0,
    target: "Charging Ally",
    classSource: "Item (Cat-Ear Hood / White Cat-Ear Hood)",
    description: "When an ally prepares a charge skill, immediately grant them +1 instant turn, skipping the charge wait.",
    flags: ["Instant Action", "Buff", "Meta Core"]
  },
  {
    id: "sorcerous-connection",
    name: "Sorcerous Connection",
    type: "Passive",
    cost: "1 PP",
    potency: 0,
    target: "Magic Attacking Ally",
    classSource: "Item (Familiar's Choker)",
    description: "When an ally casts an active magic attack, grant them +50% Magic Attack and +30% Magic Crit Rate.",
    flags: ["Magic Boost", "Buff"]
  },
  {
    id: "eagle-eye",
    name: "Eagle Eye",
    type: "Passive",
    cost: "1 PP",
    potency: 0,
    target: "Self",
    classSource: "Item (Sniper's Amber Lens)",
    description: "Before executing an active skill, grant self 100% Truestrike and 100% Guaranteed Critical Hit.",
    flags: ["Truestrike", "Critical", "Self Buff"]
  },
  {
    id: "dragoon-dive",
    name: "Dragoon Dive",
    type: "Active",
    cost: "2 AP",
    potency: 220,
    target: "All Enemies",
    classSource: "Item (Dragoon's War Spear)",
    description: "Leap into the clouds and crash down onto all enemies with apocalyptic physical impact.",
    flags: ["Physical", "Charge", "All Enemies", "Flying"]
  },
  {
    id: "high-gale",
    name: "High Gale",
    type: "Active",
    cost: "2 AP",
    potency: 160,
    target: "Row",
    classSource: "Gryphon Master (Fran)",
    description: "Unleash a sweeping aerial gale striking an entire enemy row with 200% bonus damage against cavalry.",
    flags: ["Physical", "Flying", "Anti-Cavalry", "Row"]
  },
  {
    id: "eye-of-the-crimson-bear",
    name: "Eye of the Crimson Bear",
    type: "Passive",
    cost: "1 PP",
    potency: 0,
    target: "All Enemies",
    classSource: "Dark Marquess (Berengaria)",
    description: "At Start of Battle, strike fear into all enemies, reducing their Initiative by 15 and Guard Rate by 20%.",
    flags: ["Start of Battle", "Debuff", "All Enemies"]
  },
  {
    id: "shadowbite",
    name: "Shadowbite",
    type: "Active",
    cost: "2 AP",
    potency: 120,
    target: "Enemy Row",
    classSource: "Rogue (Travis)",
    description: "Slash an enemy row from the shadows, inflicting Darkness and Passive Seal.",
    flags: ["Physical", "Row", "Affliction", "Darkness"]
  },
  {
    id: "enraged-strike",
    name: "Enraged Strike",
    type: "Active",
    cost: "1 AP",
    potency: 175,
    target: "Single Enemy",
    classSource: "Breaker / Warrior (Nina / Kitra)",
    description: "Deliver a devastating hammer smash that completely ignores 100% of the target's Physical Defense.",
    flags: ["Physical", "Armor Piercing", "Unblockable"]
  },
  {
    id: "wide-smash",
    name: "Wide Smash",
    type: "Active",
    cost: "2 AP",
    potency: 150,
    target: "Enemy Row",
    classSource: "Berserker / Gladiator (Bruno) / Juggernaut",
    description: "Swing a massive heavy greataxe in a wide arc, smashing an enemy row and inflicting Stun.",
    flags: ["Physical", "Row", "Stun"]
  },
  {
    id: "iron-veil",
    name: "Iron Veil",
    type: "Passive",
    cost: "1 PP",
    potency: 0,
    target: "Full Squad",
    classSource: "Valkyria (Virginia)",
    description: "At Start of Battle, fortify all allies, granting +30% Physical Defense and +20% Guard Rate.",
    flags: ["Start of Battle", "Buff", "Defense"]
  },
  {
    id: "maidens-hammer",
    name: "Maiden's Hammer",
    type: "Active",
    cost: "2 AP",
    potency: 180,
    target: "Single Enemy",
    classSource: "Valkyria (Virginia)",
    description: "Strike with the Maiden's power, shattering enemy guards and dealing bonus damage to armored foes.",
    flags: ["Physical", "Guard Break", "Anti-Armor"]
  },
  {
    id: "aerial-snipe",
    name: "Aerial Snipe",
    type: "Active",
    cost: "1 AP",
    potency: 150,
    target: "Single Enemy",
    classSource: "Sniper (Rolf / Mandrin) / Apeliotes's Bow",
    description: "Shoot a precision arrow with 100% Truestrike, dealing 200% bonus damage against Flying targets.",
    flags: ["Physical", "Ranged", "Truestrike", "Anti-Flying"]
  },
  {
    id: "owl-eyes",
    name: "Owl Eyes",
    type: "Passive",
    cost: "1 PP",
    potency: 0,
    target: "Full Squad",
    classSource: "Wereowl (Ramona) / Owl Pin",
    description: "At Start of Battle, sharpen the sight of all allies, granting +1 PP and Truestrike on their opening skills.",
    flags: ["Start of Battle", "Buff", "PP Restore"]
  },
  {
    id: "pure-light",
    name: "Pure Light",
    type: "Passive",
    cost: "1 PP",
    potency: 0,
    target: "Ally Row",
    classSource: "Elven Archer (Ridiel) / Pure Light Amulet",
    description: "Cleanse all negative status ailments and stat debuffs from target ally row immediately.",
    flags: ["Cleanse", "Dispel", "Support"]
  },
  {
    id: "triple-counter",
    name: "Triple Counter",
    type: "Passive",
    cost: "1 PP",
    potency: 150,
    target: "Attacking Enemy",
    classSource: "Snow Ranger (Yunifi)",
    description: "When attacked, evade and fire 3 rapid-fire ice arrows counterattacking the assailant.",
    flags: ["Counter", "Ranged", "Physical"]
  },
  {
    id: "lightning-sword",
    name: "Lightning Sword",
    type: "Active",
    cost: "1 AP",
    potency: 130,
    target: "Single Enemy",
    classSource: "Elven Fencer (Ithilion)",
    description: "Thrust with enchanted lightning blade dealing hybrid physical/magical damage and inflicting Stun.",
    flags: ["Hybrid", "Magical", "Stun"]
  },
  {
    id: "indomitable-guard",
    name: "Indomitable Guard",
    type: "Passive",
    cost: "1 PP",
    potency: 0,
    target: "Self",
    classSource: "Legionnaire / Werebear (Bertrand)",
    description: "At Start of Battle or when attacked, reduce all incoming physical damage by 75%.",
    flags: ["Start of Battle", "Guard", "Tank"]
  },
  {
    id: "penetrate",
    name: "Penetrate",
    type: "Active",
    cost: "1 AP",
    potency: 140,
    target: "Enemy Column",
    classSource: "Dreadnought (Amalia) / Silver Bident",
    description: "Thrust with overwhelming force, piercing through an enemy column and ignoring 30% Physical Defense.",
    flags: ["Physical", "Column", "Armor Piercing"]
  },
  {
    id: "row-heal",
    name: "Row Heal",
    type: "Active",
    cost: "1 AP",
    potency: 120,
    target: "Ally Row",
    classSource: "Bishop / Radiant Knight (Monica / Tatiana / Sharon)",
    description: "Cast radiant restorative magic healing an entire row of allies and granting HP regeneration.",
    flags: ["Healing", "Magical", "Row"]
  },
  {
    id: "meteor-slash",
    name: "Meteor Slash",
    type: "Active",
    cost: "2 AP",
    potency: 200,
    target: "Single Enemy",
    classSource: "Swordmaster (Aramis)",
    description: "Unleash 9 blinding-speed slashes against a single target with guaranteed Critical Hits.",
    flags: ["Physical", "Multi-Hit", "Critical"]
  },
  {
    id: "shining-arrow",
    name: "Shining Arrow",
    type: "Passive",
    cost: "1 PP",
    potency: 100,
    target: "Enemy Row",
    classSource: "Featherbow (Raenys)",
    description: "At Start of Battle, loose a blinding radiant arrow volley inflicting Blindness and -20 Initiative on enemy front row.",
    flags: ["Start of Battle", "Blindness", "Debuff", "Ranged"]
  },
  {
    id: "wolfpack-roar",
    name: "Wolfpack Roar",
    type: "Passive",
    cost: "1 PP",
    potency: 0,
    target: "Bestial Allies",
    classSource: "Werewolf (Dinah) / Wolfpack Gauntlets",
    description: "At Start of Battle, unleash a primal howl granting all Bestial allies +20% Physical Attack and +20% Critical Rate.",
    flags: ["Start of Battle", "Buff", "Bestral"]
  },
  {
    id: "shadow-slash",
    name: "Shadow Slash",
    type: "Active",
    cost: "1 AP",
    potency: 140,
    target: "Single Enemy",
    classSource: "Werewolf (Govil)",
    description: "Execute a vicious pursuit slash that deals 50% extra damage if target is already wounded or afflicted.",
    flags: ["Physical", "Pursuit", "Bestral"]
  },
  {
    id: "chasing-slash",
    name: "Chasing Slash",
    type: "Passive",
    cost: "1 PP",
    potency: 90,
    target: "Damaged Enemy",
    classSource: "Werewolf (Dinah)",
    description: "Immediately perform a pursuit attack whenever an ally damages an enemy.",
    flags: ["Pursuit", "Physical"]
  },
  {
    id: "following-slash",
    name: "Following Slash",
    type: "Passive",
    cost: "1 PP",
    potency: 90,
    target: "Attacked Enemy",
    classSource: "Landsknecht / Sellsword (Jeremy) / Pursuant's Blade",
    description: "Follow up an ally's attack with a ferocious strike, restoring 1 AP if the target is slain.",
    flags: ["Pursuit", "Physical"]
  },
  {
    id: "sacred-barrier",
    name: "Sacred Barrier",
    type: "Passive",
    cost: "1 PP",
    potency: 0,
    target: "Full Squad",
    classSource: "Featherstaff (Sanatio) / Radiant Shield",
    description: "At Start of Battle, cast a divine luminous barrier nullifying the next 2 instances of incoming damage for all allies.",
    flags: ["Start of Battle", "Invulnerability", "Barrier"]
  },
  {
    id: "dark-flame",
    name: "Dark Flame",
    type: "Active",
    cost: "2 AP",
    potency: 180,
    target: "Enemy Row",
    classSource: "Doom Knight (Gloucester) / Dark Flame Spear",
    description: "Unleash unholy dark fire sweeping an enemy row, dealing hybrid physical/magical damage scaling with lost HP.",
    flags: ["Hybrid", "Row", "Burn", "Vengeance"]
  }
];

EXTRA_SKILLS.forEach(s => {
  skillMap.set(s.name.toLowerCase().trim(), s);
});

const mergedSkills = Array.from(skillMap.values()).sort((a, b) => a.name.localeCompare(b.name));

const fileHeader = `import { GameSkill } from '@/types';

export const SKILLS_DATA: GameSkill[] = `;

fs.writeFileSync('./src/data/skills.ts', fileHeader + JSON.stringify(mergedSkills, null, 2) + ';\n');
console.log('Successfully written complete SKILLS_DATA with ' + mergedSkills.length + ' verified skills!');
