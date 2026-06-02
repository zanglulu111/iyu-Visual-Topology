import { SUR3_GROUP_A } from './group_a_earth_regions';
import { SUR3_GROUP_B } from './group_b_civilization_zones';
import { SUR3_GROUP_C } from './group_c_cities';
import { SUR3_GROUP_D } from './group_d_frontiers_ecologies';
import { SUR3_GROUP_E } from './group_e_mythic_extra';
import { SUR3_GROUP_F } from './group_f_outer_space';
import { SUR3_GROUP_G } from './group_g_virtual_micro';
import { SUR3_GROUP_H } from './group_h_future_systems';
import { SUR3_ERAS, SUR3_ERA_LABEL_BY_ID, SUR3_ERA_EN_LABEL_BY_ID, getSur3EraByName } from './eras';
import { Sur3CoordinatePreset, Sur3EraId, Sur3SpaceAnchorItem } from './_shared';

export { SUR3_ERAS, SUR3_ERA_LABEL_BY_ID, SUR3_ERA_EN_LABEL_BY_ID, getSur3EraByName };
export type { Sur3CoordinatePreset, Sur3EraId, Sur3SpaceAnchorItem, Sur3TimeMode, Sur3Domain, Sur3Scale } from './_shared';

export const SUR3_DATA = [
  SUR3_GROUP_A,
  SUR3_GROUP_B,
  SUR3_GROUP_C,
  SUR3_GROUP_D,
  SUR3_GROUP_E,
  SUR3_GROUP_F,
  SUR3_GROUP_G,
  SUR3_GROUP_H,
];

export const SUR3_SPACE_ANCHORS: Sur3SpaceAnchorItem[] = SUR3_DATA.flatMap(group => group.items);

const pick = <T,>(items: T[]): T => items[Math.floor(Math.random() * items.length)];

const clampYear = (year: number): number => Math.min(3000, Math.max(-200000, Math.trunc(year)));

const intersectYearRanges = (
  left: Array<[number, number]>,
  right: Array<[number, number]>
): Array<[number, number]> => {
  const result: Array<[number, number]> = [];
  left.forEach(([leftStart, leftEnd]) => {
    right.forEach(([rightStart, rightEnd]) => {
      const start = Math.max(leftStart, rightStart);
      const end = Math.min(leftEnd, rightEnd);
      if (start <= end) result.push([start, end]);
    });
  });
  return result;
};

const pickYearFromRanges = (ranges: Array<[number, number]>): number => {
  const [start, end] = pick(ranges);
  return clampYear(Math.floor(Math.random() * (end - start + 1)) + start);
};

const pickEra = (anchor: Sur3SpaceAnchorItem): Sur3EraId => {
  const preferred = anchor.preferredEras.length ? anchor.preferredEras : anchor.allowedEras;
  return pick(preferred.length ? preferred : ['contemporary']);
};

const eraToTimeLabel = (era: Sur3EraId, lang: 'CN' | 'EN'): string =>
  lang === 'EN' ? SUR3_ERA_EN_LABEL_BY_ID[era] : SUR3_ERA_LABEL_BY_ID[era];

const getEraYearRanges = (era: Sur3EraId): Array<[number, number]> => (
  SUR3_ERAS.find(item => item.id === era)?.yearRanges || []
);

const pickCompatibleYear = (anchor: Sur3SpaceAnchorItem): number => {
  const anchorRanges = anchor.yearRanges || [];
  if (!anchorRanges.length) return 2026;

  const eraCandidates = (anchor.preferredEras.length ? anchor.preferredEras : anchor.allowedEras)
    .map(era => intersectYearRanges(anchorRanges, getEraYearRanges(era)))
    .filter(ranges => ranges.length > 0);

  if (eraCandidates.length > 0) return pickYearFromRanges(pick(eraCandidates));
  return pickYearFromRanges(anchorRanges);
};

const shouldUseEra = (anchor: Sur3SpaceAnchorItem): boolean => {
  if (anchor.timeMode === 'era_only') return true;
  if (anchor.timeMode === 'era_preferred') return Math.random() < 0.85;

  if (['outer_space', 'virtual_data', 'micro_body', 'extra_dimension', 'future_megastructure', 'mythic_cosmos'].includes(anchor.domain)) {
    return Math.random() < 0.65;
  }

  return Math.random() < 0.5;
};

export const buildSur3CoordinatePreset = (
  anchor: Sur3SpaceAnchorItem,
  lang: 'CN' | 'EN' = 'CN'
): Sur3CoordinatePreset => {
  const useEra = shouldUseEra(anchor);

  if (useEra || !anchor.yearRanges?.length) {
    const eraId = pickEra(anchor);
    return {
      time: eraToTimeLabel(eraId, lang),
      year: null,
      eraId,
      timeMode: 'era',
      spaceCn: anchor.name,
      spaceEn: anchor.nameEn || anchor.name,
      anchor,
    };
  }

  return {
    time: null,
    year: pickCompatibleYear(anchor),
    timeMode: 'year',
    spaceCn: anchor.name,
    spaceEn: anchor.nameEn || anchor.name,
    anchor,
  };
};

export const getRandomSur3CoordinatePreset = (lang: 'CN' | 'EN' = 'CN'): Sur3CoordinatePreset => (
  buildSur3CoordinatePreset(pick(SUR3_SPACE_ANCHORS), lang)
);

export const SUR3_SPACE_ANCHOR_PRESETS = SUR3_SPACE_ANCHORS.map(anchor => ({
  cn: anchor.name,
  en: anchor.nameEn || anchor.name,
  anchor,
}));

export const SUR3_COORDINATE_PRESETS: Sur3CoordinatePreset[] = SUR3_SPACE_ANCHORS
  .map(anchor => buildSur3CoordinatePreset(anchor));
