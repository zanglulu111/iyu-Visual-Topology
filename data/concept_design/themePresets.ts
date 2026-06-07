import type { ConceptLinkedGenreFusionMode } from './linkedRandomPresets';

export type ConceptThemeFamily =
  | 'REALISM'
  | 'HISTORICAL'
  | 'EASTERN_FANTASY'
  | 'DARK_FANTASY'
  | 'SCIFI'
  | 'URBAN'
  | 'WASTELAND'
  | 'BODY_HORROR'
  | 'SURREAL'
  | 'FASHION_ADULT';

export type ConceptThemeAdultTone = 'GENERAL' | 'MATURE_NON_EXPLICIT';

export type ConceptThemePreset = {
  id: string;
  label: string;
  labelEn: string;
  family: ConceptThemeFamily;
  brief: string;
  briefEn: string;
  linkedPresetId: string;
  primaryGenre: string;
  secondaryGenres: readonly string[];
  genreFusionMode: ConceptLinkedGenreFusionMode;
  genreAllow: readonly string[];
  eraAllow: readonly string[];
  cultureAllow: readonly string[];
  spaceAllow: readonly string[];
  themeTags: readonly string[];
  evidenceTags: readonly string[];
  adultTone: ConceptThemeAdultTone;
};

export const CONCEPT_THEME_PRESETS: ConceptThemePreset[] = [
  {
    id: 'theme_real_professional',
    label: '现实职业',
    labelEn: 'Real Profession',
    family: 'REALISM',
    brief: '当代职业、机构流程、真实工具、可解释场景和克制光源。',
    briefEn: 'Contemporary work, institutional workflow, real tools, explainable scenes, restrained light.',
    linkedPresetId: 'real_professional_scene',
    primaryGenre: 'real_professional',
    secondaryGenres: ['urban_life', 'workplace', 'institutional'],
    genreFusionMode: 'ACCENT',
    genreAllow: ['real_professional', 'urban_life', 'institutional', 'medical', 'industrial', 'workplace'],
    eraAllow: ['modern', 'contemporary', 'near_future'],
    cultureAllow: ['global_corporate', 'contemporary_urban', 'institutional_modern', 'east_asian_modern', 'western_modern'],
    spaceAllow: ['office', 'hospital', 'lab', 'factory', 'street', 'interior', 'city'],
    themeTags: ['realistic', 'professional', 'institution', 'worksite'],
    evidenceTags: ['institution', 'occupation', 'tool', 'workflow', 'medical', 'knowledge'],
    adultTone: 'GENERAL'
  },
  {
    id: 'theme_historical_realist',
    label: '历史写实',
    labelEn: 'Historical Realism',
    family: 'HISTORICAL',
    brief: '前现代或近代人物，礼制、阶层、旧材料和前电力光源。',
    briefEn: 'Premodern or early-modern figures with etiquette, class, old materials, and pre-electric light.',
    linkedPresetId: 'historical_realist',
    primaryGenre: 'historical',
    secondaryGenres: ['court', 'religious_ritual', 'war_military'],
    genreFusionMode: 'ACCENT',
    genreAllow: ['historical', 'court', 'religious_ritual', 'war_military', 'adventure'],
    eraAllow: ['primitive', 'slave', 'feudal', 'early_modern'],
    cultureAllow: ['historical_court', 'imperial_bureaucracy', 'east_asian_historical', 'western_court', 'religious_order'],
    spaceAllow: ['palace', 'temple', 'archive', 'fortress', 'market', 'street', 'interior'],
    themeTags: ['historical', 'court', 'empire', 'period'],
    evidenceTags: ['historical', 'institution', 'ritual', 'costume', 'symbol'],
    adultTone: 'GENERAL'
  },
  {
    id: 'theme_wuxia',
    label: '武侠',
    labelEn: 'Wuxia',
    family: 'EASTERN_FANTASY',
    brief: '江湖、门派、武器、训练身体、山林城镇和克制异常。',
    briefEn: 'Martial world, sects, weapons, trained bodies, forests/towns, restrained anomalies.',
    linkedPresetId: 'wuxia_ancient',
    primaryGenre: 'wuxia',
    secondaryGenres: ['xianxia', 'historical', 'romance', 'dark_fantasy'],
    genreFusionMode: 'HYBRID',
    genreAllow: ['wuxia', 'xianxia', 'martial_arts', 'historical', 'romance', 'religious_ritual', 'dark_fantasy'],
    eraAllow: ['feudal', 'early_modern', 'mythic'],
    cultureAllow: ['chinese_jianghu', 'east_asian_historical', 'sect_order', 'mountain_monastery', 'frontier_town'],
    spaceAllow: ['mountain', 'forest', 'temple', 'training_ground', 'river', 'street', 'courtyard'],
    themeTags: ['wuxia', 'jianghu', 'sect', 'martial', 'sword'],
    evidenceTags: ['combat', 'weapon', 'training', 'travel', 'ritual'],
    adultTone: 'GENERAL'
  },
  {
    id: 'theme_xianxia',
    label: '仙侠',
    labelEn: 'Xianxia',
    family: 'EASTERN_FANTASY',
    brief: '修行、宗门、法器、神圣山水、轻度超现实身体和仪式符号。',
    briefEn: 'Cultivation, sects, artifacts, sacred landscape, mild surreal body, ritual symbols.',
    linkedPresetId: 'dark_ritual',
    primaryGenre: 'xianxia',
    secondaryGenres: ['wuxia', 'religious_ritual', 'mythic_epic', 'dark_fantasy'],
    genreFusionMode: 'HYBRID',
    genreAllow: ['xianxia', 'wuxia', 'religious_ritual', 'mythic_epic', 'dark_fantasy'],
    eraAllow: ['feudal', 'early_modern', 'mythic', 'timeless'],
    cultureAllow: ['chinese_jianghu', 'east_asian_historical', 'east_asian_mythic', 'sect_order', 'mountain_monastery'],
    spaceAllow: ['mountain', 'forest', 'temple', 'altar', 'cave', 'courtyard', 'landscape'],
    themeTags: ['xianxia', 'cultivation', 'sect', 'artifact'],
    evidenceTags: ['ritual', 'magic', 'symbol', 'weapon', 'training'],
    adultTone: 'GENERAL'
  },
  {
    id: 'theme_dark_fantasy',
    label: '黑暗奇幻',
    labelEn: 'Dark Fantasy',
    family: 'DARK_FANTASY',
    brief: '神殿、墓穴、封印、禁忌知识、牺牲痕迹和高压神秘光源。',
    briefEn: 'Temples, tombs, seals, forbidden knowledge, sacrifice traces, and pressuring mystic light.',
    linkedPresetId: 'dark_ritual',
    primaryGenre: 'dark_fantasy',
    secondaryGenres: ['religious_ritual', 'horror', 'occult', 'xianxia'],
    genreFusionMode: 'HYBRID',
    genreAllow: ['dark_fantasy', 'religious_ritual', 'horror', 'occult', 'xianxia'],
    eraAllow: ['feudal', 'early_modern', 'mythic', 'timeless'],
    cultureAllow: ['religious_order', 'forbidden_temple', 'mythic_cult', 'east_asian_ritual', 'gothic_ecclesial'],
    spaceAllow: ['temple', 'tomb', 'altar', 'crypt', 'cave', 'underground', 'interior'],
    themeTags: ['dark_fantasy', 'ritual', 'temple', 'curse'],
    evidenceTags: ['ritual', 'magic', 'symbol', 'damage', 'hazard'],
    adultTone: 'MATURE_NON_EXPLICIT'
  },
  {
    id: 'theme_epic_fantasy',
    label: '玄幻史诗',
    labelEn: 'Epic Fantasy',
    family: 'EASTERN_FANTASY',
    brief: '王国、遗迹、神话生物、魔法制度和大体量奇观。',
    briefEn: 'Kingdoms, ruins, mythic creatures, magical institutions, and large-scale spectacle.',
    linkedPresetId: 'epic_fantasy',
    primaryGenre: 'fantasy',
    secondaryGenres: ['dark_fantasy', 'mythic_epic', 'xianxia', 'creature'],
    genreFusionMode: 'HYBRID',
    genreAllow: ['fantasy', 'dark_fantasy', 'mythic_epic', 'xianxia', 'creature', 'adventure'],
    eraAllow: ['feudal', 'mythic', 'timeless'],
    cultureAllow: ['mythic_kingdom', 'religious_order', 'east_asian_mythic', 'western_court', 'nomadic_steppe'],
    spaceAllow: ['kingdom', 'ruin', 'mountain', 'forest', 'temple', 'cave', 'landscape'],
    themeTags: ['fantasy', 'mythic_epic', 'kingdom', 'ruin'],
    evidenceTags: ['magic', 'ritual', 'creature', 'symbol', 'combat'],
    adultTone: 'GENERAL'
  },
  {
    id: 'theme_cyberpunk',
    label: '赛博',
    labelEn: 'Cyberpunk',
    family: 'SCIFI',
    brief: '近未来城市、企业制度、接口、义体、数据痕迹和数字光。',
    briefEn: 'Near-future city, corporate systems, interfaces, cybernetics, data traces, digital light.',
    linkedPresetId: 'cyber_future',
    primaryGenre: 'cyberpunk',
    secondaryGenres: ['science_fiction', 'urban_life', 'noir_crime', 'biopunk'],
    genreFusionMode: 'HYBRID',
    genreAllow: ['cyberpunk', 'science_fiction', 'urban_life', 'noir_crime', 'biopunk'],
    eraAllow: ['contemporary', 'near_future', 'far_future', 'future'],
    cultureAllow: ['global_corporate', 'cyber_megacity', 'contemporary_urban', 'east_asian_modern', 'posthuman_city'],
    spaceAllow: ['street', 'lab', 'corporate_tower', 'alley', 'server_room', 'subway', 'city'],
    themeTags: ['cyber', 'corporate', 'interface', 'neon'],
    evidenceTags: ['technology', 'institution', 'interface', 'lab', 'symbol'],
    adultTone: 'MATURE_NON_EXPLICIT'
  },
  {
    id: 'theme_urban_legend',
    label: '都市怪谈',
    labelEn: 'Urban Weird',
    family: 'URBAN',
    brief: '现代都市、夜场边缘、日常裂缝、异常证据和暧昧超现实。',
    briefEn: 'Modern city, nightlife edges, cracks in daily life, anomaly evidence, ambiguous surrealism.',
    linkedPresetId: 'urban_night',
    primaryGenre: 'urban_life',
    secondaryGenres: ['horror', 'noir_crime', 'surreal', 'romance'],
    genreFusionMode: 'CONTRAST',
    genreAllow: ['urban_life', 'horror', 'noir_crime', 'surreal', 'romance', 'workplace'],
    eraAllow: ['modern', 'contemporary', 'near_future'],
    cultureAllow: ['contemporary_urban', 'global_corporate', 'east_asian_modern', 'japanese_urban', 'dream_psychic'],
    spaceAllow: ['street', 'alley', 'bar', 'subway', 'apartment', 'liminal', 'city'],
    themeTags: ['urban', 'night', 'weird', 'liminal'],
    evidenceTags: ['urban', 'social', 'media', 'symbol', 'technology'],
    adultTone: 'MATURE_NON_EXPLICIT'
  },
  {
    id: 'theme_wasteland',
    label: '废土',
    labelEn: 'Wasteland',
    family: 'WASTELAND',
    brief: '废墟、污染、修补、拾荒、生存装备和低资源秩序。',
    briefEn: 'Ruins, pollution, repair, scavenging, survival gear, and low-resource order.',
    linkedPresetId: 'wasteland_industrial',
    primaryGenre: 'wasteland',
    secondaryGenres: ['post_apocalyptic', 'industrial', 'war_military', 'survival'],
    genreFusionMode: 'HYBRID',
    genreAllow: ['wasteland', 'post_apocalyptic', 'industrial', 'war_military', 'survival'],
    eraAllow: ['industrial', 'modern', 'contemporary', 'near_future', 'far_future', 'future'],
    cultureAllow: ['postapocalyptic_wasteland', 'industrial_ruin', 'frontier_survival', 'military_remnant'],
    spaceAllow: ['ruin', 'factory', 'desert', 'road', 'shelter', 'scrapyard', 'landscape'],
    themeTags: ['wasteland', 'ruin', 'survival', 'repair'],
    evidenceTags: ['survival', 'hazard', 'repair', 'wear', 'industrial'],
    adultTone: 'MATURE_NON_EXPLICIT'
  },
  {
    id: 'theme_bio_mutation',
    label: '生物异化',
    labelEn: 'Bio Mutation',
    family: 'BODY_HORROR',
    brief: '菌丝、晶体、共生、感染、实验身体和生物荧光。',
    briefEn: 'Mycelium, crystal, symbiosis, infection, experimental bodies, and bioluminescence.',
    linkedPresetId: 'bio_mutation',
    primaryGenre: 'biopunk',
    secondaryGenres: ['body_horror', 'science_fiction', 'horror', 'ecological'],
    genreFusionMode: 'HYBRID',
    genreAllow: ['biopunk', 'body_horror', 'science_fiction', 'horror', 'creature', 'ecological'],
    eraAllow: ['modern', 'contemporary', 'near_future', 'far_future', 'timeless'],
    cultureAllow: ['biotech_lab', 'ecological_wild', 'posthuman_research', 'medical_institution'],
    spaceAllow: ['lab', 'forest', 'wetland', 'cave', 'greenhouse', 'containment', 'interior'],
    themeTags: ['bio', 'mutation', 'fungal', 'symbiosis'],
    evidenceTags: ['biological', 'lab', 'technology', 'body', 'damage'],
    adultTone: 'MATURE_NON_EXPLICIT'
  },
  {
    id: 'theme_space_colony',
    label: '太空殖民',
    labelEn: 'Space Colony',
    family: 'SCIFI',
    brief: '空间站、殖民地、异星环境、密封装备和宇宙尺度光影。',
    briefEn: 'Space stations, colonies, alien environments, sealed gear, and cosmic-scale lighting.',
    linkedPresetId: 'cosmic_scifi',
    primaryGenre: 'space_opera',
    secondaryGenres: ['science_fiction', 'cosmic_horror', 'creature', 'posthuman'],
    genreFusionMode: 'HYBRID',
    genreAllow: ['space_opera', 'science_fiction', 'cosmic_horror', 'creature', 'posthuman'],
    eraAllow: ['near_future', 'far_future', 'future', 'timeless'],
    cultureAllow: ['space_colony', 'posthuman_civilization', 'alien_ecology', 'global_corporate'],
    spaceAllow: ['space_station', 'spaceship', 'colony', 'alien_planet', 'cosmic', 'lab', 'interior'],
    themeTags: ['space', 'colony', 'station', 'alien'],
    evidenceTags: ['space', 'technology', 'institution', 'survival', 'hazard'],
    adultTone: 'GENERAL'
  },
  {
    id: 'theme_adult_fashion',
    label: '成人时尚',
    labelEn: 'Adult Fashion',
    family: 'FASHION_ADULT',
    brief: '成熟身体、时尚造型、夜场/封面气质和非露骨的成人张力。',
    briefEn: 'Mature body, fashion styling, nightlife/cover aura, and non-explicit adult tension.',
    linkedPresetId: 'urban_night',
    primaryGenre: 'fashion_idol',
    secondaryGenres: ['urban_life', 'romance', 'noir_crime'],
    genreFusionMode: 'ACCENT',
    genreAllow: ['fashion_idol', 'urban_life', 'romance', 'noir_crime'],
    eraAllow: ['modern', 'contemporary', 'near_future'],
    cultureAllow: ['contemporary_urban', 'global_corporate', 'east_asian_modern', 'western_modern'],
    spaceAllow: ['studio', 'club', 'bar', 'street', 'interior', 'city'],
    themeTags: ['adult', 'fashion', 'cover', 'nightlife'],
    evidenceTags: ['glamour', 'fashion', 'media', 'social', 'costume'],
    adultTone: 'MATURE_NON_EXPLICIT'
  },
  {
    id: 'theme_dream_surreal',
    label: '梦境超现实',
    labelEn: 'Dream Surreal',
    family: 'SURREAL',
    brief: '无时代、阈限空间、身体悖论、象征器官和不稳定投影光。',
    briefEn: 'Timeless liminal space, body paradox, symbolic organs, and unstable projection light.',
    linkedPresetId: 'dream_surreal',
    primaryGenre: 'surreal',
    secondaryGenres: ['dream', 'horror', 'fantasy', 'psychological', 'abstract'],
    genreFusionMode: 'CONTRAST',
    genreAllow: ['surreal', 'dream', 'horror', 'fantasy', 'psychological', 'abstract'],
    eraAllow: ['timeless', 'mythic', 'modern', 'contemporary', 'near_future', 'far_future'],
    cultureAllow: ['dream_psychic', 'symbolic_stage', 'liminal_modern', 'mythic_cult'],
    spaceAllow: ['liminal', 'abstract', 'stage', 'mirror_room', 'void', 'interior', 'threshold'],
    themeTags: ['dream', 'surreal', 'liminal', 'symbol'],
    evidenceTags: ['symbol', 'surreal', 'body', 'ritual', 'abstract'],
    adultTone: 'MATURE_NON_EXPLICIT'
  }
];

export const getConceptThemePresetById = (id: string): ConceptThemePreset | undefined => (
  CONCEPT_THEME_PRESETS.find(preset => preset.id === id)
);
