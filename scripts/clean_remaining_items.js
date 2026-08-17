const fs = require('fs');

function cleanFile(filePath) {
  if (!fs.existsSync(filePath)) return;
  let content = fs.readFileSync(filePath, 'utf8');
  const repls = [
    ['"Angel Shield (Feather Amulet)"', '"Angel Shield"'],
    ['"Chloe\'s Charm (Keen Earring)"', '"Chloe\'s Charm"'],
    ['"Dark Knight Cleaver (Dark Flame Spear)"', '"Dark Flame Spear"'],
    ['"Hallowed Blade (Staff)"', '"Hallowed Staff"'],
    ['"Icefall Bow (Glacial Bow)"', '"Glacial Bow"'],
    ['"Owl Pin (Owl Eyes PP restoration)"', '"Owl Pin"'],
    ['"Cursed Ring (Power Belt)"', '"Power Belt"'],
    ['"Parrying Dagger (Second Blade)"', '"Parrying Dagger"'],
    ['"Sylphid Spear (Elven Spear)"', '"Sylphid Spear"']
  ];
  repls.forEach(([from, to]) => {
    while (content.includes(from)) {
      content = content.replace(from, to);
    }
  });
  fs.writeFileSync(filePath, content);
}

cleanFile('./src/data/zeroOverlapSquads.ts');
cleanFile('./src/data/squads.ts');
console.log('Cleaned squad files');
