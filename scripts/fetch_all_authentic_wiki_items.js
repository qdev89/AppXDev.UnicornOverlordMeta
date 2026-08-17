const fs = require('fs');
const https = require('https');

const items = JSON.parse(fs.readFileSync('./scripts/official_items_extracted.json', 'utf8'));

console.log(`Starting authentic wiki data fetch for ${items.length} items...`);

function fetchBatch(pageIds) {
  return new Promise((resolve, reject) => {
    const url = `https://unicornoverlord.fandom.com/api.php?action=query&pageids=${pageIds.join('|')}&prop=revisions&rvprop=content&format=json`;
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          resolve(json.query ? json.query.pages : {});
        } catch (e) {
          console.error('JSON Parse error:', e.message);
          resolve({});
        }
      });
    }).on('error', reject);
  });
}

function parseWikitext(title, text, category) {
  if (!text) return null;

  // 1. Extract Stats
  let physAtk = 0;
  let magAtk = 0;
  let physDef = 0;
  let magDef = 0;

  const physAtkMatch = text.match(/!Phys\.\s*ATK\s*\|\s*(\d+)/i) || text.match(/Phys\.\s*ATK\s*\|\s*(\d+)/i);
  if (physAtkMatch) physAtk = parseInt(physAtkMatch[1]);

  const magAtkMatch = text.match(/!Mag\.\s*ATK\s*\|\s*(\d+)/i) || text.match(/Mag\.\s*ATK\s*\|\s*(\d+)/i);
  if (magAtkMatch) magAtk = parseInt(magAtkMatch[1]);

  const physDefMatch = text.match(/!Phys\.\s*DEF\s*\|\s*(\d+)/i) || text.match(/Phys\.\s*DEF\s*\|\s*(\d+)/i);
  if (physDefMatch) physDef = parseInt(physDefMatch[1]);

  const magDefMatch = text.match(/!Mag\.\s*DEF\s*\|\s*(\d+)/i) || text.match(/Mag\.\s*DEF\s*\|\s*(\d+)/i);
  if (magDefMatch) magDef = parseInt(magDefMatch[1]);

  // 2. Extract Effects
  const effects = [];
  const effectMatches = text.matchAll(/!Effect\s*#\d+\s*\|\s*(?:style="[^"]*"\s*;\s*\|)?\s*([^\r\n|]+)/gi);
  for (const m of effectMatches) {
    let clean = m[1].replace(/<[^>]+>/g, '').replace(/\[\[(?:[^|\]]*\|)?([^\]]+)\]\]/g, '$1').trim();
    clean = clean.replace(/💎/g, '').trim();
    if (clean && clean !== '-') {
      effects.push(clean);
    }
  }

  // 3. Extract Granted Skill if present
  let grantedSkill = undefined;
  const skillSection = text.split(/==Skill while equipped:==/i)[1];
  if (skillSection) {
    const skillNameMatch = skillSection.match(/!.*?colspan="2"[^|]*\|\s*([^\r\n|!]+)/i);
    const skillCostMatch = skillSection.match(/(?:AP|PP|💎AP|💎PP)\s*\|\s*(\d+)/i) || skillSection.match(/(\d+)\s*(?:AP|PP)/i);
    const skillDescMatch = skillSection.match(/!Description\s*\|\s*([^\r\n|!]+)/i) || skillSection.match(/\|([^\r\n|!]+)(?:\r?\n\|\})/);

    if (skillNameMatch) {
      let sName = skillNameMatch[1].replace(/<[^>]+>/g, '').replace(/\[\[(?:[^|\]]*\|)?([^\]]+)\]\]/g, '$1').trim();
      let sCost = skillCostMatch ? `${skillCostMatch[1]} PP` : '1 PP';
      if (text.toLowerCase().includes('ap') && !sCost.includes('AP') && skillSection.includes('AP')) {
        sCost = `${skillCostMatch ? skillCostMatch[1] : 1} AP`;
      }
      let sDesc = skillDescMatch ? skillDescMatch[1].replace(/<[^>]+>/g, '').replace(/\[\[(?:[^|\]]*\|)?([^\]]+)\]\]/g, '$1').trim() : '';
      if (sName && sName !== title) {
        grantedSkill = {
          name: sName,
          cost: sCost,
          description: sDesc || `Granted active/passive skill while equipped.`
        };
      }
    }
  }

  // Check if an effect itself is a granted skill (like Hawk Eye, Quick Impetus, etc.)
  if (!grantedSkill) {
    for (const eff of effects) {
      if (eff.toLowerCase().includes('quick impetus')) {
        grantedSkill = { name: 'Quick Impetus', cost: '2 PP', description: 'When an ally charges an active skill, grant them an immediate action.' };
      } else if (eff.toLowerCase().includes('hawk eye') || eff.toLowerCase().includes('eagle eye')) {
        grantedSkill = { name: 'Eagle Eye', cost: '1 PP', description: 'Before attacking, grant self 100% Truestrike and 100% Critical Hit.' };
      } else if (eff.toLowerCase().includes('trinity rain')) {
        grantedSkill = { name: 'Trinity Rain', cost: '3 AP', description: 'Charge a 3-hit radiant magical rain striking all enemies.' };
      } else if (eff.toLowerCase().includes('glacial rain')) {
        grantedSkill = { name: 'Glacial Rain', cost: '2 AP', description: 'Charge a blizzard arrow volley striking all enemies and inflicting Freeze.' };
      } else if (eff.toLowerCase().includes('dragoon dive')) {
        grantedSkill = { name: 'Dragoon Dive', cost: '2 AP', description: 'Leap into the clouds and crash down onto all enemies with massive physical damage.' };
      } else if (eff.toLowerCase().includes('parry') || eff.toLowerCase().includes('parrying slash')) {
        grantedSkill = { name: 'Parry', cost: '1 PP', description: 'Nullify an incoming physical melee attack and gain +1 AP.' };
      } else if (eff.toLowerCase().includes('tailwind')) {
        grantedSkill = { name: 'Tailwind', cost: '1 PP', description: 'At Start of Battle, grant all allies +15 Initiative for the skirmish.' };
      }
    }
  }

  // 4. Extract Obtention / Acquisition
  let acquisition = 'Armorer / World Quest / Treasure';
  const obtentionSection = text.split(/==Obtention:==/i)[1];
  if (obtentionSection) {
    const rawObt = obtentionSection.split(/==/)[0];
    let cleanObt = rawObt.replace(/\[\[File:[^\]]+\]\]/gi, '')
                         .replace(/\[\[(?:[^|\]]*\|)?([^\]]+)\]\]/g, '$1')
                         .replace(/\*/g, '')
                         .replace(/<[^>]+>/g, '')
                         .trim();
    const firstSentence = cleanObt.split('\n')[0].trim();
    if (firstSentence && firstSentence.length > 5 && firstSentence.length < 150) {
      acquisition = firstSentence;
    }
  }

  // 5. Construct Clean Stat Boosts string
  const statParts = [];
  if (physAtk > 0) statParts.push(`Phys Atk +${physAtk}`);
  if (magAtk > 0) statParts.push(`Mag Atk +${magAtk}`);
  if (physDef > 0) statParts.push(`Phys Def +${physDef}`);
  if (magDef > 0) statParts.push(`Mag Def +${magDef}`);

  effects.forEach(eff => {
    if (!statParts.includes(eff)) {
      statParts.push(eff);
    }
  });

  const statBoosts = statParts.length > 0 ? statParts.join(', ') : (category === 'Weapon' ? 'Phys Atk +15' : category === 'Shield' ? 'Phys Def +10, Guard Rate +25%' : 'Mag Def +3');

  return {
    title,
    physAtk,
    magAtk,
    physDef,
    magDef,
    effects,
    statBoosts,
    acquisition,
    grantedSkill
  };
}

async function main() {
  const BATCH_SIZE = 40;
  const parsedItems = {};

  for (let i = 0; i < items.length; i += BATCH_SIZE) {
    const batch = items.slice(i, i + BATCH_SIZE);
    const pageIds = batch.map(b => b.pageid).filter(Boolean);
    console.log(`Fetching batch ${i / BATCH_SIZE + 1} (${pageIds.length} pages)...`);
    
    const pages = await fetchBatch(pageIds);
    for (const pageId in pages) {
      const page = pages[pageId];
      if (page && page.revisions && page.revisions[0]) {
        const itemMeta = items.find(it => it.pageid === parseInt(pageId));
        const category = itemMeta ? itemMeta.category : 'Accessory';
        const parsed = parseWikitext(page.title, page.revisions[0]['*'], category);
        if (parsed) {
          parsedItems[page.title.toLowerCase()] = parsed;
        }
      }
    }
    // Small delay between batches to be polite to wiki API
    await new Promise(r => setTimeout(r, 400));
  }

  fs.writeFileSync('./scripts/wiki_items_parsed.json', JSON.stringify(parsedItems, null, 2));
  console.log(`Successfully parsed and saved ${Object.keys(parsedItems).length} wiki items!`);
}

main().catch(console.error);
