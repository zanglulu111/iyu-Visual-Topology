export type ConceptTagGroup =
  | 'GENRE'
  | 'ERA'
  | 'CULTURE'
  | 'SPACE'
  | 'REALITY'
  | 'FUNCTION'
  | 'EVIDENCE'
  | 'RISK';

export type ConceptTagDef = {
  id: string;
  label: string;
  labelEn: string;
  group: ConceptTagGroup;
  aliases?: readonly string[];
};

export const CONCEPT_TAG_DICTIONARY: ConceptTagDef[] = [
  { id: 'abstract', label: '抽象', labelEn: 'abstract', group: 'REALITY' },
  { id: 'adventure', label: '冒险', labelEn: 'adventure', group: 'GENRE' },
  { id: 'adult', label: '成人', labelEn: 'adult', group: 'GENRE' },
  { id: 'alien', label: '异星', labelEn: 'alien', group: 'EVIDENCE' },
  { id: 'alien_ecology', label: '异星生态', labelEn: 'alien ecology', group: 'CULTURE' },
  { id: 'alien_planet', label: '异星', labelEn: 'alien planet', group: 'SPACE' },
  { id: 'alley', label: '巷道', labelEn: 'alley', group: 'SPACE' },
  { id: 'altar', label: '祭坛', labelEn: 'altar', group: 'SPACE' },
  { id: 'apartment', label: '公寓', labelEn: 'apartment', group: 'SPACE' },
  { id: 'archive', label: '档案室', labelEn: 'archive', group: 'SPACE' },
  { id: 'artifact', label: '法器', labelEn: 'artifact', group: 'EVIDENCE' },
  { id: 'bar', label: '酒吧', labelEn: 'bar', group: 'SPACE' },
  { id: 'bio', label: '生物', labelEn: 'bio', group: 'EVIDENCE' },
  { id: 'biological', label: '生物性', labelEn: 'biological', group: 'EVIDENCE' },
  { id: 'biopunk', label: '生物朋克', labelEn: 'biopunk', group: 'GENRE' },
  { id: 'biotech_lab', label: '生物实验室', labelEn: 'biotech lab', group: 'CULTURE' },
  { id: 'body', label: '身体', labelEn: 'body', group: 'EVIDENCE' },
  { id: 'body_horror', label: '身体恐怖', labelEn: 'body horror', group: 'GENRE' },
  { id: 'boudoir_aesthetic', label: '私房美学', labelEn: 'boudoir aesthetic', group: 'GENRE' },
  { id: 'cave', label: '洞穴', labelEn: 'cave', group: 'SPACE' },
  { id: 'chinese_jianghu', label: '中国江湖', labelEn: 'Chinese jianghu', group: 'CULTURE' },
  { id: 'city', label: '城市', labelEn: 'city', group: 'SPACE' },
  { id: 'club', label: '夜场', labelEn: 'club', group: 'SPACE' },
  { id: 'colony', label: '殖民地', labelEn: 'colony', group: 'SPACE' },
  { id: 'combat', label: '战斗', labelEn: 'combat', group: 'FUNCTION' },
  { id: 'contemporary', label: '当代', labelEn: 'contemporary', group: 'ERA' },
  { id: 'contemporary_urban', label: '当代都市', labelEn: 'contemporary urban', group: 'CULTURE' },
  { id: 'containment', label: '收容区', labelEn: 'containment', group: 'SPACE' },
  { id: 'corporate', label: '企业', labelEn: 'corporate', group: 'EVIDENCE' },
  { id: 'corporate_tower', label: '企业塔楼', labelEn: 'corporate tower', group: 'SPACE' },
  { id: 'cosmic', label: '宇宙尺度', labelEn: 'cosmic', group: 'SPACE' },
  { id: 'cosmic_horror', label: '宇宙恐怖', labelEn: 'cosmic horror', group: 'GENRE' },
  { id: 'costume', label: '服饰', labelEn: 'costume', group: 'EVIDENCE' },
  { id: 'court', label: '宫廷', labelEn: 'court', group: 'GENRE' },
  { id: 'courtyard', label: '庭院', labelEn: 'courtyard', group: 'SPACE' },
  { id: 'cover', label: '封面', labelEn: 'cover', group: 'EVIDENCE' },
  { id: 'creature', label: '异种', labelEn: 'creature', group: 'GENRE' },
  { id: 'crypt', label: '墓室', labelEn: 'crypt', group: 'SPACE' },
  { id: 'cultivation', label: '修行', labelEn: 'cultivation', group: 'FUNCTION' },
  { id: 'curse', label: '诅咒', labelEn: 'curse', group: 'EVIDENCE' },
  { id: 'cyber', label: '赛博', labelEn: 'cyber', group: 'EVIDENCE' },
  { id: 'cyber_megacity', label: '赛博巨城', labelEn: 'cyber megacity', group: 'CULTURE' },
  { id: 'cyberpunk', label: '赛博朋克', labelEn: 'cyberpunk', group: 'GENRE' },
  { id: 'damage', label: '损伤', labelEn: 'damage', group: 'EVIDENCE' },
  { id: 'dark_fantasy', label: '黑暗奇幻', labelEn: 'dark fantasy', group: 'GENRE', aliases: ['dark fantasy', '黑暗奇幻'] },
  { id: 'desert', label: '荒漠', labelEn: 'desert', group: 'SPACE' },
  { id: 'dream', label: '梦', labelEn: 'dream', group: 'REALITY' },
  { id: 'dream_psychic', label: '梦境心理场', labelEn: 'dream psychic field', group: 'CULTURE' },
  { id: 'early_modern', label: '近世早期', labelEn: 'early modern', group: 'ERA' },
  { id: 'east_asian_historical', label: '东亚古典', labelEn: 'East Asian historical', group: 'CULTURE' },
  { id: 'east_asian_modern', label: '东亚现代', labelEn: 'East Asian modern', group: 'CULTURE' },
  { id: 'east_asian_mythic', label: '东亚神话', labelEn: 'East Asian mythic', group: 'CULTURE' },
  { id: 'east_asian_ritual', label: '东亚仪式', labelEn: 'East Asian ritual', group: 'CULTURE' },
  { id: 'ecological', label: '生态', labelEn: 'ecological', group: 'GENRE' },
  { id: 'ecological_wild', label: '野性生态', labelEn: 'ecological wild', group: 'CULTURE' },
  { id: 'empire', label: '帝国', labelEn: 'empire', group: 'EVIDENCE' },
  { id: 'factory', label: '工厂', labelEn: 'factory', group: 'SPACE' },
  { id: 'fantasy', label: '奇幻', labelEn: 'fantasy', group: 'GENRE' },
  { id: 'far_future', label: '远未来', labelEn: 'far future', group: 'ERA' },
  { id: 'fashion', label: '时尚', labelEn: 'fashion', group: 'EVIDENCE' },
  { id: 'fashion_idol', label: '时尚偶像', labelEn: 'fashion idol', group: 'GENRE' },
  { id: 'feudal', label: '封建时代', labelEn: 'feudal', group: 'ERA' },
  { id: 'forbidden_temple', label: '禁忌神殿', labelEn: 'forbidden temple', group: 'CULTURE' },
  { id: 'forest', label: '森林', labelEn: 'forest', group: 'SPACE' },
  { id: 'fortress', label: '堡垒', labelEn: 'fortress', group: 'SPACE' },
  { id: 'frontier_survival', label: '边境生存', labelEn: 'frontier survival', group: 'CULTURE' },
  { id: 'frontier_town', label: '边镇', labelEn: 'frontier town', group: 'CULTURE' },
  { id: 'fungal', label: '菌丝', labelEn: 'fungal', group: 'EVIDENCE' },
  { id: 'future', label: '未来', labelEn: 'future', group: 'ERA' },
  { id: 'glamour', label: '魅惑', labelEn: 'glamour', group: 'EVIDENCE' },
  { id: 'global_corporate', label: '全球企业', labelEn: 'global corporate', group: 'CULTURE' },
  { id: 'gothic_ecclesial', label: '哥特教会', labelEn: 'gothic ecclesial', group: 'CULTURE' },
  { id: 'greenhouse', label: '温室', labelEn: 'greenhouse', group: 'SPACE' },
  { id: 'hazard', label: '危险', labelEn: 'hazard', group: 'EVIDENCE' },
  { id: 'historical', label: '历史', labelEn: 'historical', group: 'GENRE' },
  { id: 'historical_court', label: '历史宫廷', labelEn: 'historical court', group: 'CULTURE' },
  { id: 'horror', label: '恐怖', labelEn: 'horror', group: 'GENRE' },
  { id: 'hospital', label: '医院', labelEn: 'hospital', group: 'SPACE' },
  { id: 'imperial_bureaucracy', label: '帝国官僚', labelEn: 'imperial bureaucracy', group: 'CULTURE' },
  { id: 'industrial', label: '工业时代', labelEn: 'industrial era', group: 'ERA' },
  { id: 'industrial_ruin', label: '工业废墟', labelEn: 'industrial ruin', group: 'CULTURE' },
  { id: 'institution', label: '机构', labelEn: 'institution', group: 'EVIDENCE' },
  { id: 'institutional', label: '制度机构', labelEn: 'institutional', group: 'GENRE' },
  { id: 'institutional_modern', label: '现代机构', labelEn: 'modern institution', group: 'CULTURE' },
  { id: 'interface', label: '接口', labelEn: 'interface', group: 'EVIDENCE' },
  { id: 'interior', label: '室内', labelEn: 'interior', group: 'SPACE' },
  { id: 'japanese_urban', label: '日本都市', labelEn: 'Japanese urban', group: 'CULTURE' },
  { id: 'jianghu', label: '江湖', labelEn: 'jianghu', group: 'EVIDENCE', aliases: ['江湖'] },
  { id: 'kingdom', label: '王国', labelEn: 'kingdom', group: 'SPACE' },
  { id: 'knowledge', label: '知识', labelEn: 'knowledge', group: 'EVIDENCE' },
  { id: 'lab', label: '实验室', labelEn: 'lab', group: 'SPACE' },
  { id: 'landscape', label: '风景场', labelEn: 'landscape', group: 'SPACE' },
  { id: 'liminal', label: '阈限空间', labelEn: 'liminal', group: 'REALITY' },
  { id: 'liminal_modern', label: '现代阈限', labelEn: 'modern liminal', group: 'CULTURE' },
  { id: 'magic', label: '魔法', labelEn: 'magic', group: 'FUNCTION' },
  { id: 'market', label: '市集', labelEn: 'market', group: 'SPACE' },
  { id: 'martial', label: '武术', labelEn: 'martial', group: 'FUNCTION' },
  { id: 'martial_arts', label: '武术', labelEn: 'martial arts', group: 'GENRE' },
  { id: 'media', label: '媒介', labelEn: 'media', group: 'EVIDENCE' },
  { id: 'medical', label: '医疗', labelEn: 'medical', group: 'GENRE' },
  { id: 'medical_institution', label: '医疗机构', labelEn: 'medical institution', group: 'CULTURE' },
  { id: 'military_remnant', label: '军事残部', labelEn: 'military remnant', group: 'CULTURE' },
  { id: 'mirror_room', label: '镜室', labelEn: 'mirror room', group: 'SPACE' },
  { id: 'modern', label: '现代', labelEn: 'modern', group: 'ERA' },
  { id: 'mountain', label: '山地', labelEn: 'mountain', group: 'SPACE' },
  { id: 'mountain_monastery', label: '山中宗门', labelEn: 'mountain monastery', group: 'CULTURE' },
  { id: 'mutation', label: '异化', labelEn: 'mutation', group: 'EVIDENCE' },
  { id: 'mythic', label: '神话时代', labelEn: 'mythic', group: 'ERA' },
  { id: 'mythic_cult', label: '神话秘教', labelEn: 'mythic cult', group: 'CULTURE' },
  { id: 'mythic_epic', label: '神话史诗', labelEn: 'mythic epic', group: 'GENRE' },
  { id: 'mythic_kingdom', label: '神话王国', labelEn: 'mythic kingdom', group: 'CULTURE' },
  { id: 'near_future', label: '近未来', labelEn: 'near future', group: 'ERA' },
  { id: 'neon', label: '霓虹', labelEn: 'neon', group: 'EVIDENCE' },
  { id: 'night', label: '夜', labelEn: 'night', group: 'EVIDENCE' },
  { id: 'nightlife', label: '夜场', labelEn: 'nightlife', group: 'EVIDENCE' },
  { id: 'noir_crime', label: '黑色犯罪', labelEn: 'noir crime', group: 'GENRE' },
  { id: 'nomadic_steppe', label: '游牧草原', labelEn: 'nomadic steppe', group: 'CULTURE' },
  { id: 'occupation', label: '职业', labelEn: 'occupation', group: 'FUNCTION' },
  { id: 'occult', label: '秘仪', labelEn: 'occult', group: 'GENRE' },
  { id: 'office', label: '办公室', labelEn: 'office', group: 'SPACE' },
  { id: 'palace', label: '宫殿', labelEn: 'palace', group: 'SPACE' },
  { id: 'period', label: '时代', labelEn: 'period', group: 'EVIDENCE' },
  { id: 'post_apocalyptic', label: '后末日', labelEn: 'post-apocalyptic', group: 'GENRE' },
  { id: 'postapocalyptic_wasteland', label: '末日废土', labelEn: 'post-apocalyptic wasteland', group: 'CULTURE' },
  { id: 'posthuman', label: '后人类', labelEn: 'posthuman', group: 'GENRE' },
  { id: 'posthuman_city', label: '后人类城市', labelEn: 'posthuman city', group: 'CULTURE' },
  { id: 'posthuman_civilization', label: '后人类文明', labelEn: 'posthuman civilization', group: 'CULTURE' },
  { id: 'posthuman_research', label: '后人类研究', labelEn: 'posthuman research', group: 'CULTURE' },
  { id: 'primitive', label: '原始时代', labelEn: 'primitive', group: 'ERA' },
  { id: 'professional', label: '专业职业', labelEn: 'professional', group: 'FUNCTION' },
  { id: 'psychological', label: '心理', labelEn: 'psychological', group: 'GENRE' },
  { id: 'real_professional', label: '现实职业', labelEn: 'real profession', group: 'GENRE' },
  { id: 'realistic', label: '现实', labelEn: 'realistic', group: 'REALITY' },
  { id: 'religious_order', label: '宗教秩序', labelEn: 'religious order', group: 'CULTURE' },
  { id: 'religious_ritual', label: '宗教仪式', labelEn: 'religious ritual', group: 'GENRE' },
  { id: 'repair', label: '修补', labelEn: 'repair', group: 'FUNCTION' },
  { id: 'river', label: '河流', labelEn: 'river', group: 'SPACE' },
  { id: 'road', label: '道路', labelEn: 'road', group: 'SPACE' },
  { id: 'romance', label: '爱情', labelEn: 'romance', group: 'GENRE' },
  { id: 'room', label: '房间', labelEn: 'room', group: 'SPACE' },
  { id: 'ritual', label: '仪式', labelEn: 'ritual', group: 'FUNCTION' },
  { id: 'ruin', label: '遗迹', labelEn: 'ruin', group: 'SPACE' },
  { id: 'science_fiction', label: '科幻', labelEn: 'science fiction', group: 'GENRE' },
  { id: 'scrapyard', label: '废料场', labelEn: 'scrapyard', group: 'SPACE' },
  { id: 'sect', label: '门派', labelEn: 'sect', group: 'EVIDENCE' },
  { id: 'sect_order', label: '门派秩序', labelEn: 'sect order', group: 'CULTURE' },
  { id: 'server_room', label: '服务器室', labelEn: 'server room', group: 'SPACE' },
  { id: 'shelter', label: '庇护所', labelEn: 'shelter', group: 'SPACE' },
  { id: 'slave', label: '古典奴隶制', labelEn: 'classical slave era', group: 'ERA' },
  { id: 'social', label: '社会', labelEn: 'social', group: 'FUNCTION' },
  { id: 'space', label: '太空', labelEn: 'space', group: 'EVIDENCE' },
  { id: 'space_colony', label: '太空殖民', labelEn: 'space colony', group: 'CULTURE' },
  { id: 'space_opera', label: '太空史诗', labelEn: 'space opera', group: 'GENRE' },
  { id: 'space_station', label: '空间站', labelEn: 'space station', group: 'SPACE' },
  { id: 'spaceship', label: '飞船', labelEn: 'spaceship', group: 'SPACE' },
  { id: 'stage', label: '舞台', labelEn: 'stage', group: 'SPACE' },
  { id: 'station', label: '站点', labelEn: 'station', group: 'EVIDENCE' },
  { id: 'street', label: '街道', labelEn: 'street', group: 'SPACE' },
  { id: 'studio', label: '摄影棚', labelEn: 'studio', group: 'SPACE' },
  { id: 'subway', label: '地铁', labelEn: 'subway', group: 'SPACE' },
  { id: 'surreal', label: '超现实', labelEn: 'surreal', group: 'REALITY' },
  { id: 'survival', label: '生存', labelEn: 'survival', group: 'FUNCTION' },
  { id: 'sword', label: '剑', labelEn: 'sword', group: 'EVIDENCE' },
  { id: 'symbol', label: '符号', labelEn: 'symbol', group: 'EVIDENCE' },
  { id: 'symbolic_stage', label: '象征舞台', labelEn: 'symbolic stage', group: 'CULTURE' },
  { id: 'symbiosis', label: '共生', labelEn: 'symbiosis', group: 'EVIDENCE' },
  { id: 'technology', label: '科技', labelEn: 'technology', group: 'FUNCTION' },
  { id: 'temple', label: '神殿/寺庙', labelEn: 'temple', group: 'SPACE' },
  { id: 'threshold', label: '阈限', labelEn: 'threshold', group: 'SPACE' },
  { id: 'timeless', label: '不限时代', labelEn: 'era-universal', group: 'ERA' },
  { id: 'tomb', label: '墓穴', labelEn: 'tomb', group: 'SPACE' },
  { id: 'tool', label: '工具', labelEn: 'tool', group: 'EVIDENCE' },
  { id: 'training', label: '训练', labelEn: 'training', group: 'FUNCTION' },
  { id: 'training_ground', label: '训练场', labelEn: 'training ground', group: 'SPACE' },
  { id: 'travel', label: '行旅', labelEn: 'travel', group: 'FUNCTION' },
  { id: 'underground', label: '地下', labelEn: 'underground', group: 'SPACE' },
  { id: 'urban', label: '都市', labelEn: 'urban', group: 'EVIDENCE' },
  { id: 'urban_life', label: '都市生活', labelEn: 'urban life', group: 'GENRE' },
  { id: 'void', label: '虚空', labelEn: 'void', group: 'SPACE' },
  { id: 'war_military', label: '战争军事', labelEn: 'war / military', group: 'GENRE' },
  { id: 'wasteland', label: '废土', labelEn: 'wasteland', group: 'GENRE' },
  { id: 'weapon', label: '武器', labelEn: 'weapon', group: 'EVIDENCE' },
  { id: 'wear', label: '磨损', labelEn: 'wear', group: 'EVIDENCE' },
  { id: 'weird', label: '怪谈', labelEn: 'weird', group: 'EVIDENCE' },
  { id: 'western_court', label: '西式宫廷', labelEn: 'western court', group: 'CULTURE' },
  { id: 'western_modern', label: '西方现代', labelEn: 'western modern', group: 'CULTURE' },
  { id: 'wetland', label: '湿地', labelEn: 'wetland', group: 'SPACE' },
  { id: 'workflow', label: '流程', labelEn: 'workflow', group: 'FUNCTION' },
  { id: 'workplace', label: '职场', labelEn: 'workplace', group: 'GENRE' },
  { id: 'worksite', label: '工作现场', labelEn: 'worksite', group: 'FUNCTION' },
  { id: 'wuxia', label: '武侠', labelEn: 'wuxia', group: 'GENRE', aliases: ['武侠'] },
  { id: 'xianxia', label: '仙侠', labelEn: 'xianxia', group: 'GENRE', aliases: ['仙侠'] }
];

export const CONCEPT_TAG_LABELS: Record<string, { label: string; labelEn: string }> = CONCEPT_TAG_DICTIONARY.reduce(
  (acc, tag) => {
    acc[tag.id] = { label: tag.label, labelEn: tag.labelEn };
    tag.aliases?.forEach(alias => {
      acc[alias] = { label: tag.label, labelEn: tag.labelEn };
    });
    return acc;
  },
  {} as Record<string, { label: string; labelEn: string }>
);

export const CONCEPT_TAG_ALIAS_TO_ID: Record<string, string> = CONCEPT_TAG_DICTIONARY.reduce(
  (acc, tag) => {
    acc[tag.id] = tag.id;
    tag.aliases?.forEach(alias => {
      acc[alias] = tag.id;
    });
    return acc;
  },
  {} as Record<string, string>
);

export const normalizeConceptTagId = (value: string) => CONCEPT_TAG_ALIAS_TO_ID[value] || value;

export const uniqueConceptTagIds = (values: readonly string[]) => {
  const seen = new Set<string>();
  return values
    .map(normalizeConceptTagId)
    .filter(value => {
      if (seen.has(value)) return false;
      seen.add(value);
      return true;
    });
};
