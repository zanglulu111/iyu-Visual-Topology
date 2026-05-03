import type { PhilosopherPosterRow } from './philosopherPosterList';

const posterModules = import.meta.glob('../src/assets/philosophers/**/*.{png,jpg,jpeg,webp,avif}', {
  eager: true,
  import: 'default',
}) as Record<string, string>;

interface PosterAssetRecord {
  filePath: string;
  fileName: string;
  normalizedName: string;
  url: string;
}

const genericPosterWords = [
  '哲学家介绍图',
  '哲学家海报',
  '哲学海报',
  '哲学家',
  '海报',
  'poster',
  'infographic',
  'portrait',
  'philosopher',
];

export function normalizePosterLookupName(value = '') {
  let next = value.normalize('NFKD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  for (const word of genericPosterWords) {
    next = next.replace(new RegExp(word, 'gi'), '');
  }
  return next
    .replace(/\.(png|jpe?g|webp|avif)$/i, '')
    .replace(/[^\p{L}\p{N}]+/gu, '');
}

function getFileName(filePath: string) {
  return decodeURIComponent(filePath.split('/').pop() || filePath);
}

const posterAssets: PosterAssetRecord[] = Object.entries(posterModules).map(([filePath, url]) => {
  const fileName = getFileName(filePath);
  return {
    filePath,
    fileName,
    normalizedName: normalizePosterLookupName(fileName),
    url,
  };
});

function scorePosterMatch(item: PhilosopherPosterRow, asset: PosterAssetRecord) {
  const cn = normalizePosterLookupName(item.nameCn);
  const en = normalizePosterLookupName(item.nameEn);
  const id = normalizePosterLookupName(item.id);
  const style = normalizePosterLookupName(item.posterStyle);
  const motif = normalizePosterLookupName(item.visualMotif);
  const file = asset.normalizedName;

  let score = 0;
  if (cn && file === cn) score += 160;
  else if (cn && file.includes(cn)) score += 100;
  if (en && file === en) score += 150;
  else if (en && file.includes(en)) score += 90;
  if (cn && en && file.includes(cn) && file.includes(en)) score += 70;
  if (id && file.includes(id)) score += 55;
  if (style && file.includes(style)) score += 24;
  if (motif && file.includes(motif)) score += 12;

  if (score > 0) {
    score -= Math.max(0, file.length - Math.max(cn.length, en.length, 4)) * 0.12;
  }

  return score;
}

export function resolvePhilosopherPosterImage(item: PhilosopherPosterRow) {
  let best: PosterAssetRecord | undefined;
  let bestScore = 0;

  for (const asset of posterAssets) {
    const score = scorePosterMatch(item, asset);
    if (score > bestScore) {
      best = asset;
      bestScore = score;
    }
  }

  return bestScore >= 70 ? best?.url : undefined;
}

export const philosopherPosterMediaStats = {
  totalAssets: posterAssets.length,
};
