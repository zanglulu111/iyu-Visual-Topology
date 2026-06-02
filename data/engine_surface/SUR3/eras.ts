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
  { id: 'feudal', name: '封建时代', nameEn: 'Feudal Age', yearRanges: [[500, 1800]] },
  { id: 'modern', name: '现代', nameEn: 'Modern Age', yearRanges: [[1800, 1945]] },
  { id: 'contemporary', name: '当代', nameEn: 'Contemporary Age', yearRanges: [[1945, 2035]] },
  { id: 'near_future', name: '近未来', nameEn: 'Near Future', yearRanges: [[2035, 2100]] },
  { id: 'future', name: '未来', nameEn: 'Future', yearRanges: [[2100, 3000]] },
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
