// Génère public/images/og.png (aperçu de partage 1200×630).
// Usage : node scripts/generer-og.mjs
import sharp from 'sharp';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const sortie = path.join(path.dirname(fileURLToPath(import.meta.url)), '../public/images/og.png');

const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
  <defs>
    <linearGradient id="fond" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#1e9e4f"/>
      <stop offset="70%" stop-color="#157a3c"/>
      <stop offset="100%" stop-color="#0d5228"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#fond)"/>
  <circle cx="960" cy="315" r="230" fill="#17201b"/>
  <circle cx="960" cy="315" r="192" fill="none" stroke="#faf6ec" stroke-width="5" stroke-dasharray="22 16"/>
  <rect x="740" y="250" width="440" height="130" fill="#17201b"/>
  <rect x="752" y="262" width="416" height="106" fill="none" stroke="#faf6ec" stroke-width="5"/>
  <text x="960" y="338" text-anchor="middle" font-family="DejaVu Sans, Arial, sans-serif" font-weight="bold" font-size="76" letter-spacing="4" fill="#faf6ec">MATISSE</text>
  <text x="960" y="185" text-anchor="middle" font-family="DejaVu Sans, Arial, sans-serif" font-weight="bold" font-size="34" letter-spacing="6" fill="#faf6ec">HOT &amp; FRESH</text>
  <text x="960" y="470" text-anchor="middle" font-family="DejaVu Sans, Arial, sans-serif" font-weight="bold" font-size="34" letter-spacing="6" fill="#faf6ec">DEPUIS 1998</text>
  <text x="80" y="270" font-family="DejaVu Sans, Arial, sans-serif" font-weight="bold" font-size="64" fill="#ffffff">Kebabs, bowls</text>
  <text x="80" y="350" font-family="DejaVu Sans, Arial, sans-serif" font-weight="bold" font-size="64" fill="#ffffff">&amp; smash burgers</text>
  <text x="80" y="425" font-family="DejaVu Sans, Arial, sans-serif" font-size="38" fill="#f2b035">maison — Paris 14e &amp; Ivry</text>
  <text x="80" y="540" font-family="DejaVu Sans, Arial, sans-serif" font-size="30" fill="#faf6ec" opacity="0.85">60 av. du Général Leclerc · 10 bis rue Barbès, Ivry</text>
</svg>`;

await sharp(Buffer.from(svg)).png().toFile(sortie);
console.log(`OG générée : ${sortie}`);
