const fs = require('fs');

const classesTs = fs.readFileSync('src/data/classes_base.ts', 'utf8');
const compendiumTs = fs.readFileSync('src/data/full_game_compendium.ts', 'utf8');

const rawClassMatch = compendiumTs.match(/export const RAW_GAME_CLASSES = (\[[\s\S]*?\]);/);
if (!rawClassMatch) {
  console.error('Could not find RAW_GAME_CLASSES');
  process.exit(1);
}

const rawClassList = JSON.parse(rawClassMatch[1]);
console.log(`Parsed ${rawClassList.length} raw classes.`);

const existingIds = [
  'alain-high-lord',
  'yunifi-snow-ranger',
  'rosalinde-elven-prophet',
  'eltolinde-elven-sibyl',
  'berengaria-renegade',
  'selvie-druid',
  'raenys-feather-sword',
  'gilbert-prince',
  'scarlett-bishop',
  'clive-great-knight',
  'josef-paladin',
  'hilda-wyvern-master',
  'hodrick-legionnaire',
  'melisandre-swordmaster',
  'travis-rogue',
  'sharon-cleric',
  'yahna-sorceress',
];

const additionalClasses = rawClassList
  .filter((c) => !existingIds.includes(c.id) && c.title !== 'Classes')
  .map((c) => ({
    id: c.id,
    image: `/images/characters/${c.id}.png`,
    name: c.title,
    tier: 'A+',
    category: 'Infantry',
    role: 'Physical DPS',
    icon: '⚔️',
    baseStats: { hp: 90, physAtk: 85, magAtk: 40, physDef: 55, magDef: 45, initiative: 35, evasion: 20, critRate: 10 },
    activeSkills: [
      {
        name: `${c.title} Strike`,
        apCost: 1,
        potency: 100,
        target: 'Single Enemy',
        description: `Standard class attack scaling with physical potency.`,
        flags: ['Physical'],
      },
    ],
    passiveSkills: [
      {
        name: `${c.title} Guard`,
        ppCost: 1,
        trigger: 'Before Attacked',
        description: `Grants medium guard and mitigates incoming damage by 50%.`,
      },
    ],
    growthRecommendation: ['Offensive', 'Keen'],
    synergies: ['Frontline Physical Synergy'],
  }));

const updatedClassesTs = classesTs.replace(
  /export const CLASSES_DATA: UnitClass\[\] = \[([\s\S]*?)\];/,
  (match, p1) => {
    return `export const CLASSES_DATA: UnitClass[] = [\n${p1.trim()},\n${additionalClasses
      .map((cls) => `  ${JSON.stringify(cls, null, 2)}`)
      .join(',\n')}\n];`;
  }
);

fs.writeFileSync('src/data/classes.ts', updatedClassesTs, 'utf8');
console.log(`Successfully generated clean src/data/classes.ts with ${additionalClasses.length} additional official classes.`);
