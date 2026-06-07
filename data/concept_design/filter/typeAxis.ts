export type ConceptTypeAxisDef = {
  id: string;
  label: string;
  labelEn: string;
};

export const CONCEPT_TYPE_AXIS: ConceptTypeAxisDef[] = [
  { id: 'romance', label: '爱情', labelEn: 'Romance' },
  { id: 'wuxia', label: '武侠', labelEn: 'Wuxia' },
  { id: 'xianxia', label: '仙侠', labelEn: 'Xianxia' },
  { id: 'fantasy', label: '奇幻', labelEn: 'Fantasy' },
  { id: 'dark_fantasy', label: '黑暗奇幻', labelEn: 'Dark Fantasy' },
  { id: 'mythic_epic', label: '神话史诗', labelEn: 'Mythic Epic' },
  { id: 'historical', label: '历史', labelEn: 'Historical' },
  { id: 'court', label: '宫廷', labelEn: 'Court' },
  { id: 'adventure', label: '冒险', labelEn: 'Adventure' },
  { id: 'war_military', label: '战争军事', labelEn: 'War / Military' },
  { id: 'noir_crime', label: '黑色犯罪', labelEn: 'Noir Crime' },
  { id: 'horror', label: '恐怖', labelEn: 'Horror' },
  { id: 'body_horror', label: '身体恐怖', labelEn: 'Body Horror' },
  { id: 'cosmic_horror', label: '宇宙恐怖', labelEn: 'Cosmic Horror' },
  { id: 'science_fiction', label: '科幻', labelEn: 'Science Fiction' },
  { id: 'cyberpunk', label: '赛博朋克', labelEn: 'Cyberpunk' },
  { id: 'biopunk', label: '生物朋克', labelEn: 'Biopunk' },
  { id: 'space_opera', label: '太空史诗', labelEn: 'Space Opera' },
  { id: 'post_apocalyptic', label: '后末日', labelEn: 'Post-Apocalyptic' },
  { id: 'wasteland', label: '废土', labelEn: 'Wasteland' },
  { id: 'urban_life', label: '都市生活', labelEn: 'Urban Life' },
  { id: 'real_professional', label: '现实职业', labelEn: 'Real Profession' },
  { id: 'fashion_idol', label: '时尚偶像', labelEn: 'Fashion / Idol' },
  { id: 'surreal', label: '超现实', labelEn: 'Surreal' },
  { id: 'dream', label: '梦境', labelEn: 'Dream' },
  { id: 'psychological', label: '心理', labelEn: 'Psychological' },
  { id: 'abstract', label: '抽象', labelEn: 'Abstract' },
  { id: 'ecological', label: '生态', labelEn: 'Ecological' },
  { id: 'creature', label: '异种', labelEn: 'Creature' },
  { id: 'posthuman', label: '后人类', labelEn: 'Posthuman' },
  { id: 'religious_ritual', label: '宗教仪式', labelEn: 'Religious Ritual' }
];

export const CONCEPT_TYPE_AXIS_IDS = new Set(CONCEPT_TYPE_AXIS.map(item => item.id));
