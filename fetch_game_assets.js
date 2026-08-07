const fs = require('fs');
const path = require('path');
const https = require('https');

const CHARACTERS = [
  { id: 'alain-high-lord', wikiName: 'Alain' },
  { id: 'yunifi-snow-ranger', wikiName: 'Yunifi' },
  { id: 'rosalinde-elven-prophet', wikiName: 'Rosalinde' },
  { id: 'eltolinde-elven-sibyl', wikiName: 'Eltolinde' },
  { id: 'berengaria-renegade', wikiName: 'Berengaria' },
  { id: 'selvie-druid', wikiName: 'Selvie' },
  { id: 'raenys-featherbow', wikiName: 'Raenys' },
  { id: 'gilbert-prince', wikiName: 'Gilbert' },
  { id: 'scarlett-high-priestess', wikiName: 'Scarlett' },
  { id: 'great-knight', wikiName: 'Clive' },
  { id: 'sainted-knight', wikiName: 'Josef' },
  { id: 'wyvern-master', wikiName: 'Hilda' },
  { id: 'hoplite', wikiName: 'Hodrick' },
  { id: 'swordmaster', wikiName: 'Melisandre' },
  { id: 'rogue', wikiName: 'Travis' },
  { id: 'cleric', wikiName: 'Sharon' },
  { id: 'sorceress', wikiName: 'Yahna' },
];

const ITEMS = [
  { id: 'cat-ear-hood', wikiName: 'White_Cat-Ear_Hood' },
  { id: 'dragoons-war-spear', wikiName: 'Dragoon%27s_Glave' },
  { id: 'millennium-scepter', wikiName: 'Millennium_Scepter' },
  { id: 'snipers-amber-lens', wikiName: 'Sniper%27s_Amber_Lens' },
  { id: 'ring-of-the-unicorn', wikiName: 'Ring_of_the_Unicorn' },
  { id: 'ring-of-the-maiden', wikiName: 'Ring_of_the_Maiden' },
  { id: 'lapis-pendant', wikiName: 'Lapis_Pendant' },
  { id: 'carnelian-pendant', wikiName: 'Carnelian_Pendant' },
  { id: 'sandstorm-staff', wikiName: 'Sandstorm_Staff' },
  { id: 'banishment-ring', wikiName: 'Banishment_Ring' },
];

const ensureDir = (dir) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
};

const fetchUrl = (targetUrl) => {
  return new Promise((resolve, reject) => {
    const req = https.get(
      targetUrl,
      {
        headers: {
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        },
      },
      (res) => {
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          const redirectUrl = new URL(res.headers.location, targetUrl).toString();
          return fetchUrl(redirectUrl).then(resolve).catch(reject);
        }
        let data = '';
        res.on('data', (chunk) => (data += chunk));
        res.on('end', () => resolve(data));
      }
    );
    req.on('error', reject);
  });
};

const downloadFile = (targetUrl, dest) => {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    const req = https.get(
      targetUrl,
      {
        headers: {
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
        },
      },
      (res) => {
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          const redirectUrl = new URL(res.headers.location, targetUrl).toString();
          return downloadFile(redirectUrl, dest).then(resolve).catch(reject);
        }
        res.pipe(file);
        file.on('finish', () => {
          file.close(resolve);
        });
      }
    );
    req.on('error', (err) => {
      fs.unlink(dest, () => reject(err));
    });
  });
};

async function main() {
  const charDir = path.join(__dirname, 'public', 'images', 'characters');
  const itemDir = path.join(__dirname, 'public', 'images', 'items');
  ensureDir(charDir);
  ensureDir(itemDir);

  console.log('--- Downloading Character Portraits ---');
  for (const c of CHARACTERS) {
    try {
      const pageUrl = `https://unicornoverlord.fandom.com/wiki/${c.wikiName}`;
      const html = await fetchUrl(pageUrl);

      // Match escaping slashes in JSON-LD or standard HTML
      const matches = html.match(/static\.wikia\.nocookie\.net\/unicornoverlord\/images\/[0-9a-f]\/[0-9a-f]{2}\/[^"'\s<>&]+/gi);

      if (matches && matches.length > 0) {
        let cleanPath = matches[0].replace(/\\/g, '');
        let imgUrl = `https://${cleanPath}`;
        if (imgUrl.includes('/revision/latest')) {
          imgUrl = imgUrl.split('/revision/latest')[0] + '/revision/latest';
        }
        const dest = path.join(charDir, `${c.id}.png`);
        console.log(`[CHAR SUCCESS] ${c.id} -> ${imgUrl}`);
        await downloadFile(imgUrl, dest);
      } else {
        console.log(`[CHAR MISSING] ${c.id}: Image URL not found.`);
      }
    } catch (e) {
      console.error(`[CHAR ERROR] ${c.id}: ${e.message}`);
    }
  }

  console.log('--- Downloading Item Icons ---');
  for (const item of ITEMS) {
    try {
      const pageUrl = `https://unicornoverlord.fandom.com/wiki/${item.wikiName}`;
      const html = await fetchUrl(pageUrl);

      const matches = html.match(/static\.wikia\.nocookie\.net\/unicornoverlord\/images\/[0-9a-f]\/[0-9a-f]{2}\/[^"'\s<>&]+/gi);

      if (matches && matches.length > 0) {
        let cleanPath = matches[0].replace(/\\/g, '');
        let imgUrl = `https://${cleanPath}`;
        if (imgUrl.includes('/revision/latest')) {
          imgUrl = imgUrl.split('/revision/latest')[0] + '/revision/latest';
        }
        const dest = path.join(itemDir, `${item.id}.png`);
        console.log(`[ITEM SUCCESS] ${item.id} -> ${imgUrl}`);
        await downloadFile(imgUrl, dest);
      } else {
        console.log(`[ITEM MISSING] ${item.id}: Image URL not found.`);
      }
    } catch (e) {
      console.error(`[ITEM ERROR] ${item.id}: ${e.message}`);
    }
  }

  console.log('Done downloading official game assets!');
}

main();
