const fs = require('fs');

let classesTs = fs.readFileSync('src/data/classes.ts', 'utf8');

// Replace duplicate commas ,,
classesTs = classesTs.replace(/},\s*,/g, '},');

fs.writeFileSync('src/data/classes.ts', classesTs, 'utf8');
console.log('Fixed double commas in src/data/classes.ts');
