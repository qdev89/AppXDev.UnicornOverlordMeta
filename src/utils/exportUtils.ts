import { SquadBuild } from '@/types';
import { CLASSES_DATA } from '@/data/classes';

/**
 * Encodes a SquadBuild object into a URL-safe Base64 string
 */
export const encodeSquadToUrlHash = (squad: SquadBuild): string => {
  try {
    const jsonStr = JSON.stringify(squad);
    const base64Str = btoa(encodeURIComponent(jsonStr));
    return `#build=${base64Str}`;
  } catch (e) {
    console.error('Error encoding squad to URL hash', e);
    return '';
  }
};

/**
 * Decodes a Base64 URL hash string into a SquadBuild object
 */
export const decodeSquadFromUrlHash = (hash: string): SquadBuild | null => {
  try {
    if (!hash.includes('#build=')) return null;
    const base64Str = hash.replace('#build=', '');
    const jsonStr = decodeURIComponent(atob(base64Str));
    return JSON.parse(jsonStr) as SquadBuild;
  } catch (e) {
    console.error('Error decoding squad from URL hash', e);
    return null;
  }
};

/**
 * Downloads squad data as a JSON file
 */
export const downloadSquadAsJson = (squad: SquadBuild) => {
  const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(squad, null, 2));
  const downloadAnchor = document.createElement('a');
  downloadAnchor.setAttribute('href', dataStr);
  downloadAnchor.setAttribute('download', `${squad.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}-build.json`);
  document.body.appendChild(downloadAnchor);
  downloadAnchor.click();
  downloadAnchor.remove();
};

/**
 * Generates a high-resolution 1200x630 visual build card image using HTML5 Canvas
 */
export const generateSquadImageCard = (squad: SquadBuild): Promise<string> => {
  return new Promise((resolve) => {
    const canvas = document.createElement('canvas');
    canvas.width = 1200;
    canvas.height = 630;
    const ctx = canvas.getContext('2d');
    if (!ctx) return resolve('');

    // Background Gradient (Royal Dark Navy)
    const bgGradient = ctx.createLinearGradient(0, 0, 1200, 630);
    bgGradient.addColorStop(0, '#050812');
    bgGradient.addColorStop(0.5, '#0b1326');
    bgGradient.addColorStop(1, '#050812');
    ctx.fillStyle = bgGradient;
    ctx.fillRect(0, 0, 1200, 630);

    // Ornate Gold Outer Filigree Frame
    ctx.strokeStyle = '#f59e0b';
    ctx.lineWidth = 4;
    ctx.strokeRect(20, 20, 1160, 590);

    ctx.strokeStyle = '#b45309';
    ctx.lineWidth = 1.5;
    ctx.strokeRect(26, 26, 1148, 578);

    // Title & Tier Banner
    ctx.fillStyle = '#fef3c7';
    ctx.font = 'bold 36px Georgia, serif';
    ctx.fillText(squad.name, 50, 75);

    ctx.fillStyle = '#f59e0b';
    ctx.font = 'bold 16px sans-serif';
    ctx.fillText(`TIER ${squad.tier} • ${squad.archetype.toUpperCase()}`, 50, 105);

    ctx.fillStyle = '#94a3b8';
    ctx.font = '14px sans-serif';
    const shortDesc = squad.description.length > 110 ? squad.description.substring(0, 110) + '...' : squad.description;
    ctx.fillText(shortDesc, 50, 130);

    // Front Row Header
    ctx.fillStyle = '#ef4444';
    ctx.fillRect(50, 160, 520, 30);
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 14px Georgia, serif';
    ctx.fillText('🛡️ VANGUARD ROW (FRONT TANK)', 60, 181);

    // Front Row Unit Cards
    squad.frontRow.forEach((uId, idx) => {
      const cls = CLASSES_DATA.find((c) => c.id === uId);
      const y = 205 + idx * 75;

      ctx.fillStyle = '#0f172a';
      ctx.fillRect(50, y, 520, 65);
      ctx.strokeStyle = '#f59e0b';
      ctx.lineWidth = 1;
      ctx.strokeRect(50, y, 520, 65);

      ctx.fillStyle = '#fef3c7';
      ctx.font = 'bold 16px Georgia, serif';
      ctx.fillText(cls ? cls.name : `Slot #${idx + 1}`, 70, y + 38);

      if (cls) {
        ctx.fillStyle = '#a855f7';
        ctx.font = '12px sans-serif';
        ctx.fillText(`${cls.role} • ${cls.category}`, 320, y + 38);
      }
    });

    // Back Row Header
    ctx.fillStyle = '#a855f7';
    ctx.fillRect(630, 160, 520, 30);
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 14px Georgia, serif';
    ctx.fillText('⚔️ REARGUARD ROW (BACK DPS / SUPPORT)', 640, 181);

    // Back Row Unit Cards
    squad.backRow.forEach((uId, idx) => {
      const cls = CLASSES_DATA.find((c) => c.id === uId);
      const y = 205 + idx * 75;

      ctx.fillStyle = '#0f172a';
      ctx.fillRect(630, y, 520, 65);
      ctx.strokeStyle = '#a855f7';
      ctx.lineWidth = 1;
      ctx.strokeRect(630, y, 520, 65);

      ctx.fillStyle = '#e9d5ff';
      ctx.font = 'bold 16px Georgia, serif';
      ctx.fillText(cls ? cls.name : `Slot #${idx + 1}`, 650, y + 38);

      if (cls) {
        ctx.fillStyle = '#f59e0b';
        ctx.font = '12px sans-serif';
        ctx.fillText(`${cls.role} • ${cls.category}`, 900, y + 38);
      }
    });

    // Footer Watermark & Branding
    ctx.fillStyle = '#64748b';
    ctx.font = '13px sans-serif';
    ctx.fillText('Unicorn Overlord Meta Engine • http://localhost:3000', 50, 595);

    resolve(canvas.toDataURL('image/png'));
  });
};
