const fs = require('fs');
const path = require('path');

// Let's create the master list of 50 heroes with 100% zero overlap and canonical accuracy
const itemsRaw = fs.readFileSync(path.join(__dirname, '../src/data/items.ts'), 'utf-8');
const items = eval(itemsRaw.substring(itemsRaw.indexOf('['), itemsRaw.lastIndexOf(']') + 1));

const itemsMap = new Map();
items.forEach(i => {
  itemsMap.set(i.name.toLowerCase().trim(), i);
  itemsMap.set(i.id.toLowerCase().trim(), i);
});

console.log(`Checking items database... Total items: ${items.length}`);
