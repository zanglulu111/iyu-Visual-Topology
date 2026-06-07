export type ConceptCategoryId =
  | 'romance'
  | 'wuxia'
  | 'xianxia'
  | 'fantasy'
  | 'dark_fantasy'
  | 'mythic_epic'
  | 'historical'
  | 'court'
  | 'war_military'
  | 'noir_crime'
  | 'real_professional'
  | 'urban_life'
  | 'fashion_idol'
  | 'science_fiction'
  | 'cyberpunk'
  | 'posthuman'
  | 'biopunk'
  | 'wasteland'
  | 'horror'
  | 'body_horror'
  | 'surreal'
  | 'abstract'
  | 'religious_ritual'
  | 'adventure'
  | 'ecological'
  | 'boudoir_aesthetic';

export type ConceptCategoryAxisDef = {
  id: ConceptCategoryId;
  label: string;
  labelEn: string;
  adminOnly?: boolean;
  adultOnly?: boolean;
  note?: string;
  noteEn?: string;
};

export type ConceptCategoryFit = Partial<Record<
  'strong' | 'usable' | 'fusion' | 'weak' | 'exclude',
  readonly ConceptCategoryId[]
>>;

export const CONCEPT_CATEGORY_AXIS: ConceptCategoryAxisDef[] = [
  { id: 'romance', label: '爱情', labelEn: 'Romance' },
  { id: 'wuxia', label: '武侠', labelEn: 'Wuxia' },
  { id: 'xianxia', label: '仙侠', labelEn: 'Xianxia' },
  { id: 'fantasy', label: '奇幻', labelEn: 'Fantasy' },
  { id: 'dark_fantasy', label: '黑暗奇幻', labelEn: 'Dark Fantasy' },
  { id: 'mythic_epic', label: '神话史诗', labelEn: 'Mythic Epic' },
  { id: 'historical', label: '历史', labelEn: 'Historical' },
  { id: 'court', label: '宫廷贵族', labelEn: 'Court & Aristocracy' },
  { id: 'war_military', label: '战争军事', labelEn: 'War & Military' },
  { id: 'noir_crime', label: '黑色犯罪', labelEn: 'Noir & Crime' },
  { id: 'real_professional', label: '现实职业', labelEn: 'Real Profession' },
  { id: 'urban_life', label: '都市生活', labelEn: 'Urban Life' },
  { id: 'fashion_idol', label: '时尚偶像', labelEn: 'Fashion & Idol' },
  { id: 'science_fiction', label: '科幻', labelEn: 'Science Fiction' },
  { id: 'cyberpunk', label: '赛博朋克', labelEn: 'Cyberpunk' },
  { id: 'posthuman', label: '后人类', labelEn: 'Posthuman' },
  { id: 'biopunk', label: '生化朋克', labelEn: 'Biopunk' },
  { id: 'wasteland', label: '废土末世', labelEn: 'Wasteland' },
  { id: 'horror', label: '恐怖', labelEn: 'Horror' },
  { id: 'body_horror', label: '身体恐怖', labelEn: 'Body Horror' },
  { id: 'surreal', label: '超现实', labelEn: 'Surreal' },
  { id: 'abstract', label: '抽象符号', labelEn: 'Abstract' },
  { id: 'religious_ritual', label: '宗教仪式', labelEn: 'Religious Ritual' },
  { id: 'adventure', label: '冒险探索', labelEn: 'Adventure' },
  { id: 'ecological', label: '生态自然', labelEn: 'Ecological' },
  {
    id: 'boudoir_aesthetic',
    label: '私房美学',
    labelEn: 'Boudoir Aesthetic',
    adminOnly: true,
    adultOnly: true,
    note: '仅用于成年主体的私密摄影、成熟时尚、柔性性感和非露骨成人张力。',
    noteEn: 'For adult subjects only: boudoir photography, mature fashion, soft sensuality, and non-explicit adult tension.'
  }
];

export const CONCEPT_CATEGORY_AXIS_IDS = new Set(CONCEPT_CATEGORY_AXIS.map(item => item.id));

export const getConceptCategoryById = (id: string): ConceptCategoryAxisDef | undefined => (
  CONCEPT_CATEGORY_AXIS.find(item => item.id === id)
);
