export type ConceptTypeGravityRule = {
  label: string;
  labelEn: string;
  strongTypeTags: readonly string[];
  strongEvidenceTags: readonly string[];
  preferredSceneClassTags: readonly string[];
  preferredSceneTags: readonly string[];
  conflictTags: readonly string[];
};

export const TYPE_GRAVITY_RULES: Record<string, ConceptTypeGravityRule> = {
  romance: {
    label: '爱情',
    labelEn: 'Romance',
    strongTypeTags: ['romance'],
    strongEvidenceTags: ['intimacy', 'commitment', 'paired_token', 'waiting', 'separation', 'confession', 'secret_love', 'marriage_contract'],
    preferredSceneClassTags: ['intimate', 'daily', 'threshold', 'social'],
    preferredSceneTags: ['wedding', 'bedroom', 'station', 'street', 'alley', 'apartment', 'interior'],
    conflictTags: ['pure_machine', 'no_relationship', 'abstract_only']
  },
  wuxia: {
    label: '武侠',
    labelEn: 'Wuxia',
    strongTypeTags: ['wuxia', 'martial_arts'],
    strongEvidenceTags: ['martial_training', 'sect_order', 'blade_weapon', 'duel', 'jianghu_travel'],
    preferredSceneClassTags: ['chinese_jianghu', 'east_asian_historical', 'sect_order', 'mountain_monastery', 'combat_training', 'travel_frontier'],
    preferredSceneTags: ['inn', 'training_ground', 'mountain', 'forest', 'temple', 'courtyard', 'river', 'street'],
    conflictTags: ['pure_cyber_interface', 'modern_office_only']
  },
  cyberpunk: {
    label: '赛博',
    labelEn: 'Cyberpunk',
    strongTypeTags: ['cyberpunk'],
    strongEvidenceTags: ['technology', 'interface', 'data', 'surveillance', 'cyber', 'neon'],
    preferredSceneClassTags: ['cyber_megacity', 'global_corporate', 'posthuman_city', 'institutional_modern'],
    preferredSceneTags: ['city', 'street', 'lab', 'server_room', 'corporate_tower', 'subway', 'alley'],
    conflictTags: ['pre_electric_only', 'strict_historical_realism']
  },
  xianxia: {
    label: '仙侠',
    labelEn: 'Xianxia',
    strongTypeTags: ['xianxia'],
    strongEvidenceTags: ['cultivation', 'immortal_path', 'spirit_root', 'talisman', 'daoist_artifact', 'sect_order'],
    preferredSceneClassTags: ['chinese_jianghu', 'east_asian_mythic', 'sect_order', 'mountain_monastery', 'east_asian_ritual'],
    preferredSceneTags: ['mountain', 'forest', 'temple', 'altar', 'cave', 'courtyard', 'landscape'],
    conflictTags: ['strict_modern_realism', 'modern_office_only']
  },
  dark_fantasy: {
    label: '黑暗奇幻',
    labelEn: 'Dark Fantasy',
    strongTypeTags: ['dark_fantasy', 'occult'],
    strongEvidenceTags: ['curse', 'forbidden', 'sacrifice', 'occult', 'blasphemy', 'demonic_contract'],
    preferredSceneClassTags: ['forbidden_temple', 'religious_order', 'mythic_cult', 'gothic_ecclesial', 'east_asian_ritual'],
    preferredSceneTags: ['temple', 'tomb', 'altar', 'crypt', 'cave', 'underground', 'interior'],
    conflictTags: ['clean_corporate_only', 'bright_daily_only']
  },
  fantasy: {
    label: '奇幻',
    labelEn: 'Fantasy',
    strongTypeTags: ['fantasy'],
    strongEvidenceTags: ['magic', 'artifact', 'creature', 'kingdom', 'relic', 'symbol'],
    preferredSceneClassTags: ['mythic_kingdom', 'religious_order', 'east_asian_mythic', 'western_court', 'nomadic_steppe'],
    preferredSceneTags: ['kingdom', 'ruin', 'mountain', 'forest', 'temple', 'cave', 'landscape'],
    conflictTags: ['strict_modern_realism']
  },
  historical: {
    label: '历史',
    labelEn: 'Historical',
    strongTypeTags: ['historical'],
    strongEvidenceTags: ['historical', 'period', 'dynasty', 'empire', 'archive', 'chronicle'],
    preferredSceneClassTags: ['historical_court', 'imperial_bureaucracy', 'east_asian_historical', 'western_court', 'religious_order'],
    preferredSceneTags: ['palace', 'temple', 'archive', 'fortress', 'market', 'street', 'interior'],
    conflictTags: ['future_only', 'pure_cyber_interface']
  },
  noir_crime: {
    label: '黑色犯罪',
    labelEn: 'Noir Crime',
    strongTypeTags: ['noir_crime'],
    strongEvidenceTags: ['crime', 'detective', 'underground', 'surveillance', 'weapon', 'social'],
    preferredSceneClassTags: ['contemporary_urban', 'global_corporate', 'institutional_modern', 'liminal_modern'],
    preferredSceneTags: ['street', 'alley', 'bar', 'club', 'subway', 'apartment', 'city'],
    conflictTags: ['pastoral_only', 'pure_mythic_only']
  },
  horror: {
    label: '恐怖',
    labelEn: 'Horror',
    strongTypeTags: ['horror'],
    strongEvidenceTags: ['curse', 'damage', 'hazard', 'nightmare', 'ghost', 'body', 'surreal'],
    preferredSceneClassTags: ['dream_psychic', 'liminal_modern', 'religious_order', 'forbidden_temple'],
    preferredSceneTags: ['interior', 'alley', 'hospital', 'cave', 'underground', 'liminal', 'void'],
    conflictTags: ['bright_daily_only']
  },
  science_fiction: {
    label: '科幻',
    labelEn: 'Science Fiction',
    strongTypeTags: ['science_fiction'],
    strongEvidenceTags: ['technology', 'interface', 'lab', 'space', 'data', 'synthetic'],
    preferredSceneClassTags: ['global_corporate', 'institutional_modern', 'space_colony', 'posthuman_civilization', 'cyber_megacity'],
    preferredSceneTags: ['lab', 'space_station', 'spaceship', 'city', 'server_room', 'corporate_tower'],
    conflictTags: ['pre_electric_only', 'strict_historical_realism']
  },
  wasteland: {
    label: '废土',
    labelEn: 'Wasteland',
    strongTypeTags: ['wasteland', 'survival'],
    strongEvidenceTags: ['survival', 'hazard', 'repair', 'wear', 'ruin', 'scavenger'],
    preferredSceneClassTags: ['postapocalyptic_wasteland', 'industrial_ruin', 'frontier_survival', 'military_remnant'],
    preferredSceneTags: ['ruin', 'factory', 'desert', 'road', 'shelter', 'scrapyard', 'landscape'],
    conflictTags: ['luxury_clean_only', 'court_purity_only']
  },
  urban_life: {
    label: '都市生活',
    labelEn: 'Urban Life',
    strongTypeTags: ['urban_life'],
    strongEvidenceTags: ['urban', 'social', 'daily', 'night'],
    preferredSceneClassTags: ['contemporary_urban', 'global_corporate', 'east_asian_modern', 'japanese_urban', 'western_modern'],
    preferredSceneTags: ['street', 'alley', 'bar', 'subway', 'apartment', 'office', 'city'],
    conflictTags: ['primitive_only', 'deep_space_only']
  },
  real_professional: {
    label: '现实职业',
    labelEn: 'Real Profession',
    strongTypeTags: ['real_professional'],
    strongEvidenceTags: ['occupation', 'tool', 'workflow', 'institution', 'professional'],
    preferredSceneClassTags: ['global_corporate', 'institutional_modern', 'contemporary_urban', 'east_asian_modern', 'western_modern'],
    preferredSceneTags: ['office', 'hospital', 'lab', 'factory', 'street', 'interior', 'city'],
    conflictTags: ['pure_mythic_only', 'impossible_magic_only']
  },
  fashion_idol: {
    label: '时尚偶像',
    labelEn: 'Fashion / Idol',
    strongTypeTags: ['fashion_idol'],
    strongEvidenceTags: ['fashion', 'glamour', 'cover', 'costume', 'stage'],
    preferredSceneClassTags: ['contemporary_urban', 'global_corporate', 'east_asian_modern', 'western_modern'],
    preferredSceneTags: ['studio', 'club', 'bar', 'street', 'interior', 'city'],
    conflictTags: ['anti_visual_plain_only']
  },
  surreal: {
    label: '超现实',
    labelEn: 'Surreal',
    strongTypeTags: ['surreal', 'dream', 'abstract'],
    strongEvidenceTags: ['surreal', 'symbol', 'body', 'dream', 'liminal', 'mirror'],
    preferredSceneClassTags: ['dream_psychic', 'symbolic_stage', 'liminal_modern', 'mythic_cult'],
    preferredSceneTags: ['liminal', 'abstract', 'stage', 'mirror_room', 'void', 'interior', 'threshold'],
    conflictTags: ['strict_documentary_only']
  },
  mythic_epic: {
    label: '神话史诗',
    labelEn: 'Mythic Epic',
    strongTypeTags: ['mythic_epic'],
    strongEvidenceTags: ['mythic', 'divine', 'relic', 'prophecy', 'pantheon', 'heroic_oath'],
    preferredSceneClassTags: ['mythic_kingdom', 'mythic_cult', 'religious_order', 'east_asian_mythic', 'western_court'],
    preferredSceneTags: ['temple', 'altar', 'kingdom', 'palace', 'mountain', 'ruin', 'landscape'],
    conflictTags: ['strict_modern_realism', 'clean_corporate_only']
  },
  court: {
    label: '宫廷',
    labelEn: 'Court',
    strongTypeTags: ['court', 'historical'],
    strongEvidenceTags: ['court', 'palace', 'royal_rank', 'ceremony', 'succession', 'noble_house'],
    preferredSceneClassTags: ['historical_court', 'imperial_bureaucracy', 'western_court', 'east_asian_historical'],
    preferredSceneTags: ['palace', 'archive', 'courtyard', 'hall', 'interior', 'garden', 'fortress'],
    conflictTags: ['wasteland_only', 'pure_cyber_interface']
  },
  adventure: {
    label: '冒险',
    labelEn: 'Adventure',
    strongTypeTags: ['adventure', 'travel', 'survival'],
    strongEvidenceTags: ['travel', 'exploration', 'map', 'relic', 'tool', 'survival', 'frontier', 'journey'],
    preferredSceneClassTags: ['travel_frontier', 'frontier_survival', 'nomadic_steppe', 'ruin_exploration', 'natural_wilderness'],
    preferredSceneTags: ['road', 'forest', 'mountain', 'ruin', 'cave', 'desert', 'landscape'],
    conflictTags: ['single_room_only', 'static_court_only']
  },
  war_military: {
    label: '战争军事',
    labelEn: 'War / Military',
    strongTypeTags: ['war_military'],
    strongEvidenceTags: ['military', 'war', 'armor', 'weapon', 'uniform', 'rank', 'battlefield', 'strategy'],
    preferredSceneClassTags: ['military_remnant', 'imperial_bureaucracy', 'frontier_survival', 'industrial_ruin'],
    preferredSceneTags: ['fortress', 'battlefield', 'road', 'shelter', 'factory', 'ruin', 'interior'],
    conflictTags: ['pure_daily_only', 'anti_conflict_only']
  },
  body_horror: {
    label: '身体恐怖',
    labelEn: 'Body Horror',
    strongTypeTags: ['body_horror'],
    strongEvidenceTags: ['body', 'mutation', 'infection', 'damage', 'growth', 'experiment', 'wound', 'medical'],
    preferredSceneClassTags: ['biotech_lab', 'containment', 'dream_psychic', 'forbidden_temple', 'liminal_modern'],
    preferredSceneTags: ['lab', 'hospital', 'interior', 'underground', 'cave', 'mirror_room', 'void'],
    conflictTags: ['clean_beauty_only', 'body_integrity_only']
  },
  cosmic_horror: {
    label: '宇宙恐怖',
    labelEn: 'Cosmic Horror',
    strongTypeTags: ['cosmic_horror'],
    strongEvidenceTags: ['cosmic', 'unknown', 'void', 'cult', 'dream', 'symbol', 'madness', 'scale', 'star', 'black_hole', 'nebula', 'forbidden_star', 'galactic', 'planetary', 'abyss', 'relic'],
    preferredSceneClassTags: ['mythic_cult', 'dream_psychic', 'space_colony', 'symbolic_stage', 'forbidden_temple'],
    preferredSceneTags: ['void', 'temple', 'altar', 'space_station', 'cave', 'underground', 'landscape'],
    conflictTags: ['fully_explained_science_only', 'bright_daily_only']
  },
  biopunk: {
    label: '生物朋克',
    labelEn: 'Biopunk',
    strongTypeTags: ['biopunk'],
    strongEvidenceTags: ['biotech', 'gene', 'infection', 'experiment', 'mutation', 'lab', 'synthetic', 'medical'],
    preferredSceneClassTags: ['biotech_lab', 'institutional_modern', 'posthuman_city', 'containment'],
    preferredSceneTags: ['lab', 'hospital', 'server_room', 'corporate_tower', 'interior', 'underground'],
    conflictTags: ['pre_science_only', 'strict_pastoral_only']
  },
  space_opera: {
    label: '太空史诗',
    labelEn: 'Space Opera',
    strongTypeTags: ['space_opera'],
    strongEvidenceTags: ['space', 'empire', 'fleet', 'colony', 'ship', 'artifact', 'war', 'diplomacy'],
    preferredSceneClassTags: ['space_colony', 'posthuman_civilization', 'imperial_bureaucracy', 'mythic_kingdom'],
    preferredSceneTags: ['spaceship', 'space_station', 'colony', 'palace', 'city', 'landscape'],
    conflictTags: ['earthbound_only', 'pre_electric_only']
  },
  post_apocalyptic: {
    label: '后末日',
    labelEn: 'Post-Apocalyptic',
    strongTypeTags: ['post_apocalyptic', 'survival'],
    strongEvidenceTags: ['survival', 'ruin', 'collapse', 'scarcity', 'repair', 'hazard', 'refugee', 'shelter'],
    preferredSceneClassTags: ['postapocalyptic_wasteland', 'frontier_survival', 'industrial_ruin', 'military_remnant'],
    preferredSceneTags: ['ruin', 'road', 'shelter', 'scrapyard', 'desert', 'factory', 'landscape'],
    conflictTags: ['intact_luxury_world_only', 'stable_institution_only']
  },
  dream: {
    label: '梦境',
    labelEn: 'Dream',
    strongTypeTags: ['dream'],
    strongEvidenceTags: ['dream', 'memory', 'symbol', 'mirror', 'liminal', 'sleep', 'distortion', 'threshold', 'trance', 'oracle', 'nightmare', 'subconscious', 'reincarnation', 'body_swap'],
    preferredSceneClassTags: ['dream_psychic', 'symbolic_stage', 'liminal_modern'],
    preferredSceneTags: ['bedroom', 'mirror_room', 'liminal', 'void', 'stage', 'interior', 'threshold'],
    conflictTags: ['strict_documentary_only', 'fully_literal_only']
  },
  psychological: {
    label: '心理',
    labelEn: 'Psychological',
    strongTypeTags: ['psychological'],
    strongEvidenceTags: ['memory', 'obsession', 'guilt', 'fear', 'mirror', 'isolation', 'identity', 'threshold', 'trauma', 'confession', 'diagnosis', 'therapy', 'secret', 'paranoia', 'shame'],
    preferredSceneClassTags: ['dream_psychic', 'liminal_modern', 'institutional_modern', 'symbolic_stage'],
    preferredSceneTags: ['interior', 'apartment', 'hospital', 'mirror_room', 'liminal', 'stage', 'bedroom'],
    conflictTags: ['pure_action_only', 'no_interiority_only']
  },
  abstract: {
    label: '抽象',
    labelEn: 'Abstract',
    strongTypeTags: ['abstract'],
    strongEvidenceTags: ['abstract', 'symbol', 'geometry', 'void', 'color_field', 'gesture', 'deconstruction', 'mask', 'concept_photo', 'anti_fashion', 'avant_garde', 'negative_space', 'material_idea'],
    preferredSceneClassTags: ['symbolic_stage', 'dream_psychic'],
    preferredSceneTags: ['abstract', 'void', 'stage', 'threshold', 'interior'],
    conflictTags: ['strict_documentary_only', 'literal_scene_only']
  },
  ecological: {
    label: '生态',
    labelEn: 'Ecological',
    strongTypeTags: ['ecological'],
    strongEvidenceTags: ['ecology', 'plant', 'animal', 'climate', 'growth', 'habitat', 'symbiosis', 'pollution'],
    preferredSceneClassTags: ['natural_wilderness', 'alien_ecology', 'postapocalyptic_wasteland', 'east_asian_mythic'],
    preferredSceneTags: ['forest', 'wetland', 'mountain', 'river', 'alien_planet', 'landscape', 'ruin'],
    conflictTags: ['sealed_interior_only', 'pure_machine_only']
  },
  creature: {
    label: '异种',
    labelEn: 'Creature',
    strongTypeTags: ['creature'],
    strongEvidenceTags: ['creature', 'beast', 'hybrid', 'mutation', 'claw', 'scale', 'wing', 'nonhuman'],
    preferredSceneClassTags: ['natural_wilderness', 'mythic_kingdom', 'alien_ecology', 'containment'],
    preferredSceneTags: ['forest', 'cave', 'mountain', 'lab', 'underground', 'landscape'],
    conflictTags: ['strict_human_only', 'ordinary_professional_only']
  },
  posthuman: {
    label: '后人类',
    labelEn: 'Posthuman',
    strongTypeTags: ['posthuman'],
    strongEvidenceTags: ['synthetic', 'interface', 'upload', 'augmentation', 'machine_body', 'data', 'identity', 'biotech'],
    preferredSceneClassTags: ['posthuman_city', 'cyber_megacity', 'space_colony', 'biotech_lab'],
    preferredSceneTags: ['server_room', 'lab', 'corporate_tower', 'city', 'space_station', 'interior'],
    conflictTags: ['strict_historical_realism', 'pre_electric_only']
  },
  religious_ritual: {
    label: '宗教仪式',
    labelEn: 'Religious Ritual',
    strongTypeTags: ['religious_ritual'],
    strongEvidenceTags: ['ritual', 'prayer', 'sacrifice', 'symbol', 'altar', 'relic', 'vow', 'taboo'],
    preferredSceneClassTags: ['religious_order', 'forbidden_temple', 'mythic_cult', 'east_asian_ritual', 'gothic_ecclesial'],
    preferredSceneTags: ['temple', 'altar', 'crypt', 'tomb', 'cave', 'interior', 'courtyard'],
    conflictTags: ['secular_office_only', 'anti_symbol_only']
  }
};
