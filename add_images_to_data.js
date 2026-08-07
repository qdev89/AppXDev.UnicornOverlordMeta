const fs = require('fs');
const path = require('path');

// Update src/data/classes.ts
let classesPath = path.join(__dirname, 'src', 'data', 'classes.ts');
let classesContent = fs.readFileSync(classesPath, 'utf8');

// Insert image field into each class object
classesContent = classesContent.replace(/id:\s*'([^']+)'/g, (match, id) => {
  return `${match},\n    image: '/images/characters/${id}.png'`;
});

fs.writeFileSync(classesPath, classesContent, 'utf8');
console.log('Updated src/data/classes.ts with official character images!');

// Update src/data/items.ts
let itemsPath = path.join(__dirname, 'src', 'data', 'items.ts');
let itemsContent = fs.readFileSync(itemsPath, 'utf8');

itemsContent = itemsContent.replace(/id:\s*'([^']+)'/g, (match, id) => {
  return `${match},\n    image: '/images/items/${id}.png'`;
});

fs.writeFileSync(itemsPath, itemsContent, 'utf8');
console.log('Updated src/data/items.ts with official item images!');
