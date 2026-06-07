import { Sur3EraId } from './_shared';

export interface Sur3EraDef {
  id: Sur3EraId;
  name: string;
  nameEn: string;
  yearRanges: Array<[number, number]>;
}

export const SUR3_ERAS: Sur3EraDef[] = [
  { id: 'primitive', name: '原始时代', nameEn: 'Primitive Age', yearRanges: [[-200000, -3000]] },
  { id: 'mythic', name: '神话时代', nameEn: 'Mythic Age', yearRanges: [] },
  { id: 'slave', name: '奴隶时代', nameEn: 'Slave/Classical Age', yearRanges: [[-3000, 500]] },
  { id: 'feudal', name: '封建时代', nameEn: 'Feudal Age', yearRanges: [[500, 1500]] },
  { id: 'early_modern', name: '近世早期', nameEn: 'Early Modern Age', yearRanges: [[1500, 1800]] },
  { id: 'industrial', name: '工业时代', nameEn: 'Industrial Age', yearRanges: [[1800, 1914]] },
  { id: 'modern', name: '现代', nameEn: 'Modern Age', yearRanges: [[1914, 1945]] },
  { id: 'contemporary', name: '当代', nameEn: 'Contemporary Age', yearRanges: [[1945, 2035]] },
  { id: 'near_future', name: '近未来', nameEn: 'Near Future', yearRanges: [[2035, 2100]] },
  { id: 'far_future', name: '远未来', nameEn: 'Far Future', yearRanges: [[2100, 3000]] },
  { id: 'future', name: '未来', nameEn: 'Future', yearRanges: [[2100, 3000]] },
  { id: 'timeless', name: '不限时代', nameEn: 'Era-Universal', yearRanges: [] },
];

export const SUR3_ERA_LABEL_BY_ID = SUR3_ERAS.reduce<Record<Sur3EraId, string>>((acc, era) => {
  acc[era.id] = era.name;
  return acc;
}, {} as Record<Sur3EraId, string>);

export const SUR3_ERA_EN_LABEL_BY_ID = SUR3_ERAS.reduce<Record<Sur3EraId, string>>((acc, era) => {
  acc[era.id] = era.nameEn;
  return acc;
}, {} as Record<Sur3EraId, string>);

export const getSur3EraByName = (value: string): Sur3EraDef | undefined =>
  SUR3_ERAS.find(era => era.name === value || era.nameEn === value || era.id === value);

export const normalizeSur3EraToken = (value: string): string =>
  value.trim().replace(/\s+/g, '').replace(/[_-]+/g, '').replace(/年$/, '').toLowerCase();

export const getSur3EraByLooseName = (value: string): Sur3EraDef | undefined => {
  const normalized = normalizeSur3EraToken(value);
  return SUR3_ERAS.find(era =>
    [era.id, era.name, era.nameEn].some(label => normalizeSur3EraToken(label) === normalized)
  );
};

export const getSur3EraIdsForYear = (year: number): Sur3EraId[] => (
  SUR3_ERAS
    .filter(era => era.yearRanges.some(([start, end]) => year >= start && year <= end))
    .map(era => era.id)
);

const SUR3_ERA_COMPATIBILITY: Record<Sur3EraId, Sur3EraId[]> = {
  primitive: ['primitive'],
  mythic: ['mythic', 'timeless'],
  slave: ['slave'],
  feudal: ['feudal'],
  early_modern: ['early_modern', 'feudal'],
  industrial: ['industrial'],
  modern: ['modern'],
  contemporary: ['contemporary'],
  near_future: ['near_future', 'future'],
  far_future: ['far_future', 'future'],
  future: ['near_future', 'far_future', 'future'],
  timeless: ['timeless'],
};

export const expandSur3EraIds = (values: readonly string[] = []): Sur3EraId[] => {
  const result = new Set<Sur3EraId>();
  values.forEach(value => {
    const era = getSur3EraByLooseName(value);
    if (!era) return;
    result.add(era.id);
    SUR3_ERA_COMPATIBILITY[era.id].forEach(compatibleEra => result.add(compatibleEra));
  });
  return Array.from(result);
};

export const sur3EraSetsIntersect = (
  left: readonly string[] = [],
  right: readonly string[] = []
): boolean => {
  if (!left.length || !right.length) return false;
  const leftSet = new Set(expandSur3EraIds(left));
  return expandSur3EraIds(right).some(era => leftSet.has(era));
};
