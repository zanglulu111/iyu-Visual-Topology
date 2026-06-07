export type ConceptEraAxisDef = {
  id: string;
  label: string;
  labelEn: string;
};

export const CONCEPT_ERA_AXIS: ConceptEraAxisDef[] = [
  { id: 'primitive', label: '原始时代', labelEn: 'Primitive' },
  { id: 'mythic', label: '神话时代', labelEn: 'Mythic' },
  { id: 'slave', label: '古典奴隶制', labelEn: 'Classical Slave Era' },
  { id: 'feudal', label: '封建时代', labelEn: 'Feudal' },
  { id: 'early_modern', label: '近世早期', labelEn: 'Early Modern' },
  { id: 'industrial', label: '工业时代', labelEn: 'Industrial Era' },
  { id: 'modern', label: '现代', labelEn: 'Modern' },
  { id: 'contemporary', label: '当代', labelEn: 'Contemporary' },
  { id: 'near_future', label: '近未来', labelEn: 'Near Future' },
  { id: 'far_future', label: '远未来', labelEn: 'Far Future' },
  { id: 'timeless', label: '不限时代', labelEn: 'Era-Universal' }
];

export const CONCEPT_ERA_AXIS_IDS = new Set(CONCEPT_ERA_AXIS.map(item => item.id));
