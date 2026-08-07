const fs = require('fs');

const itemsTs = fs.readFileSync('src/data/items.ts', 'utf8');
const compendiumTs = fs.readFileSync('src/data/full_game_compendium.ts', 'utf8');

// Parse RAW_GAME_EQUIPMENT from compendium
const rawEqMatch = compendiumTs.match(/export const RAW_GAME_EQUIPMENT = (\[[\s\S]*?\]);/);
if (!rawEqMatch) {
  console.error('Could not find RAW_GAME_EQUIPMENT');
  process.exit(1);
}

const rawEqList = JSON.parse(rawEqMatch[1]);
console.log(`Parsed ${rawEqList.length} raw equipment items.`);

// Load existing core meta items ids
const existingIds = ['cat-ear-hood', 'dragoons-war-spear', 'millennium-scepter', 'snipers-amber-lens', 'ring-of-the-unicorn', 'ring-of-the-maiden', 'lapis-pendant', 'carnelian-pendant', 'sandstorm-staff', 'banishment-ring'];

const additionalItems = rawEqList
  .filter((eq) => !existingIds.includes(eq.id))
  .map((eq) => ({
    id: eq.id,
    image: `/images/items/${eq.id}.png`,
    name: eq.name,
    type: eq.category === 'Weapon' ? 'Weapon' : eq.category === 'Shield' ? 'Shield' : 'Accessory',
    icon: eq.category === 'Weapon' ? '⚔️' : eq.category === 'Shield' ? '🛡️' : '💍',
    statBoosts: eq.category === 'Weapon' ? 'Phys Atk +18, Initiative +2' : eq.category === 'Shield' ? 'Phys Def +12, Guard Rate +15%' : 'AP +1 / PP +1',
    acquisition: 'Armorer Town / Quest Reward / Divine Shard Shop',
    isMetaCore: false,
    metaSquads: ['Custom Competitive Builds'],
  }));

const updatedItemsTs = itemsTs.replace(
  /export const ITEMS_DATA: RelicItem\[\] = \[([\s\S]*?)\];/,
  (match, p1) => {
    return `export const ITEMS_DATA: RelicItem[] = [\n${p1.trim()},\n${additionalItems
      .map((item) => `  ${JSON.stringify(item, null, 2)}`)
      .join(',\n')}\n];`;
  }
);

fs.writeFileSync('src/data/items.ts', updatedItemsTs, 'utf8');
console.log(`Updated src/data/items.ts with ${additionalItems.length} additional official items.`);
