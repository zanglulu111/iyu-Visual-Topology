import { LibraryItemDef } from '../../../types';

const uniq = (values: readonly string[]) => [...new Set(values.filter(Boolean))];

const merge = (item: LibraryItemDef, patch: Partial<LibraryItemDef>): LibraryItemDef => ({
  ...item,
  ...patch,
  publicFilterTags: uniq([...(item.publicFilterTags || []), ...(patch.publicFilterTags || [])]),
  nativeTags: uniq([...(item.nativeTags || []), ...(patch.nativeTags || [])]),
  evidenceTags: uniq([...(item.evidenceTags || []), ...(patch.evidenceTags || [])]),
  genreTags: uniq([...(item.genreTags || []), ...(patch.genreTags || [])]),
  compatibleGenres: uniq([...(item.compatibleGenres || []), ...(patch.compatibleGenres || [])]),
  excludeGenreTags: uniq([...(item.excludeGenreTags || []), ...(patch.excludeGenreTags || [])]),
  compatibleEras: uniq([...(item.compatibleEras || []), ...(patch.compatibleEras || [])]),
  cultureTags: uniq([...(item.cultureTags || []), ...(patch.cultureTags || [])]),
  compatibleCultures: uniq([...(item.compatibleCultures || []), ...(patch.compatibleCultures || [])]),
  spaceTags: uniq([...(item.spaceTags || []), ...(patch.spaceTags || [])]),
  compatibleSpaces: uniq([...(item.compatibleSpaces || []), ...(patch.compatibleSpaces || [])]),
  riskTags: uniq([...(item.riskTags || []), ...(patch.riskTags || [])]),
  conflictTags: uniq([...(item.conflictTags || []), ...(patch.conflictTags || [])]),
  tags: uniq([...(item.tags || []), ...(patch.tags || [])])
});

const bodyBasePatch: Partial<LibraryItemDef> = {
  publicFilterTags: ['human', 'realistic'],
  nativeTags: ['realistic', 'body'],
  compatibleGenres: ['real_professional', 'urban_life', 'historical', 'romance', 'wuxia', 'fashion_idol'],
  compatibleEras: ['primitive', 'slave', 'feudal', 'early_modern', 'industrial', 'modern', 'contemporary', 'near_future', 'timeless'],
  compatibleCultures: ['contemporary_urban', 'global_corporate', 'east_asian_modern', 'western_modern', 'east_asian_historical', 'western_court'],
  compatibleSpaces: ['street', 'interior', 'office', 'city', 'market', 'courtyard', 'stage', 'studio'],
  genreStrictness: 'soft',
  cultureStrictness: 'soft',
  tags: ['subject_axis', 'body_axis']
};

const fashionBodyPatch: Partial<LibraryItemDef> = {
  publicFilterTags: ['fashion', 'glamour', 'body'],
  nativeTags: ['fashion', 'glamour', 'body'],
  evidenceTags: ['fashion', 'media', 'social', 'costume'],
  compatibleGenres: ['fashion_idol'],
  compatibleEras: ['industrial', 'modern', 'contemporary', 'near_future', 'timeless'],
  compatibleCultures: ['contemporary_urban', 'global_corporate', 'east_asian_modern', 'western_modern', 'symbolic_stage'],
  compatibleSpaces: ['studio', 'stage', 'club', 'bar', 'street', 'interior', 'city'],
  genreStrictness: 'soft',
  cultureStrictness: 'soft',
  tags: ['subject_axis', 'body_axis', 'fashion_body']
};

const combatBodyPatch: Partial<LibraryItemDef> = {
  publicFilterTags: ['combat', 'survival', 'body'],
  nativeTags: ['combat', 'survival', 'body'],
  evidenceTags: ['combat', 'training', 'survival', 'weapon'],
  compatibleGenres: ['wuxia', 'war_military', 'wasteland', 'post_apocalyptic', 'survival', 'noir_crime', 'real_professional'],
  compatibleEras: ['primitive', 'slave', 'feudal', 'early_modern', 'industrial', 'modern', 'contemporary', 'near_future', 'far_future', 'timeless'],
  compatibleCultures: ['chinese_jianghu', 'military_remnant', 'postapocalyptic_wasteland', 'frontier_survival', 'institutional_modern'],
  compatibleSpaces: ['training_ground', 'battlefield', 'street', 'road', 'shelter', 'scrapyard', 'factory', 'forest', 'mountain'],
  genreStrictness: 'soft',
  cultureStrictness: 'soft',
  tags: ['subject_axis', 'body_axis', 'functional_body']
};

const laborBodyPatch: Partial<LibraryItemDef> = {
  publicFilterTags: ['realistic', 'labor', 'body'],
  nativeTags: ['realistic', 'survival', 'body'],
  evidenceTags: ['workflow', 'tool', 'repair', 'survival'],
  compatibleGenres: ['real_professional', 'industrial', 'workplace', 'wasteland', 'post_apocalyptic', 'survival', 'historical'],
  compatibleEras: ['primitive', 'slave', 'feudal', 'early_modern', 'industrial', 'modern', 'contemporary', 'near_future', 'timeless'],
  compatibleCultures: ['global_corporate', 'institutional_modern', 'industrial_ruin', 'frontier_survival', 'postapocalyptic_wasteland', 'east_asian_historical'],
  compatibleSpaces: ['factory', 'workshop', 'street', 'market', 'road', 'shelter', 'scrapyard', 'courtyard'],
  genreStrictness: 'soft',
  cultureStrictness: 'soft',
  tags: ['subject_axis', 'body_axis', 'labor_body']
};

const powerBodyPatch: Partial<LibraryItemDef> = {
  publicFilterTags: ['authority', 'historical', 'body'],
  nativeTags: ['authority', 'body'],
  evidenceTags: ['institution', 'costume', 'symbol', 'combat'],
  compatibleGenres: ['historical', 'court', 'dark_fantasy', 'war_military', 'wuxia', 'fantasy', 'fashion_idol'],
  compatibleEras: ['slave', 'feudal', 'early_modern', 'industrial', 'modern', 'contemporary', 'timeless', 'mythic'],
  compatibleCultures: ['historical_court', 'imperial_bureaucracy', 'western_court', 'religious_order', 'mythic_kingdom', 'chinese_jianghu'],
  compatibleSpaces: ['palace', 'temple', 'fortress', 'courtyard', 'stage', 'studio', 'interior'],
  genreStrictness: 'soft',
  cultureStrictness: 'soft',
  tags: ['subject_axis', 'body_axis', 'power_body']
};

const mysticBoundaryPatch: Partial<LibraryItemDef> = {
  publicFilterTags: ['magic', 'surreal', 'body'],
  nativeTags: ['magic', 'surreal', 'body'],
  excludeGenreTags: ['real_professional'],
  compatibleGenres: ['xianxia', 'dark_fantasy', 'mythic_epic', 'fantasy', 'surreal', 'horror'],
  compatibleEras: ['feudal', 'early_modern', 'mythic', 'timeless', 'near_future', 'far_future'],
  compatibleCultures: ['east_asian_mythic', 'mythic_cult', 'religious_order', 'forbidden_temple', 'dream_psychic', 'posthuman_city'],
  compatibleSpaces: ['temple', 'altar', 'cave', 'mountain', 'forest', 'liminal', 'void', 'lab'],
  genreStrictness: 'soft',
  cultureStrictness: 'soft',
  tags: ['subject_axis', 'body_axis', 'boundary_body']
};

const spaceFunctionBodyPatch: Partial<LibraryItemDef> = {
  publicFilterTags: ['space', 'colony', 'body'],
  nativeTags: ['space', 'survival', 'body'],
  evidenceTags: ['space', 'technology', 'survival', 'workflow'],
  compatibleGenres: ['space_opera', 'science_fiction', 'posthuman', 'survival'],
  compatibleEras: ['near_future', 'far_future', 'timeless'],
  compatibleCultures: ['space_colony', 'posthuman_civilization', 'global_corporate'],
  compatibleSpaces: ['space_station', 'spaceship', 'colony', 'alien_planet', 'lab', 'interior'],
  genreStrictness: 'soft',
  cultureStrictness: 'soft',
  tags: ['subject_axis', 'body_axis', 'space_function_body']
};

const abstractBodyPatch: Partial<LibraryItemDef> = {
  publicFilterTags: ['abstract', 'surreal', 'body'],
  nativeTags: ['abstract', 'surreal', 'body'],
  evidenceTags: ['abstract', 'geometry', 'negative_space', 'deconstruction', 'body'],
  compatibleGenres: ['abstract', 'surreal', 'dream'],
  compatibleEras: ['contemporary', 'timeless', 'mythic', 'near_future', 'far_future'],
  compatibleCultures: ['symbolic_stage', 'dream_psychic'],
  compatibleSpaces: ['abstract', 'void', 'stage', 'threshold', 'interior'],
  genreStrictness: 'hard',
  cultureStrictness: 'soft',
  tags: ['subject_axis', 'body_axis', 'abstract_body']
};

const dreamBodyPatch: Partial<LibraryItemDef> = {
  publicFilterTags: ['dream', 'surreal', 'body'],
  nativeTags: ['dream', 'surreal', 'body'],
  evidenceTags: ['dream', 'liminal', 'distortion', 'threshold', 'body'],
  compatibleGenres: ['dream', 'surreal', 'psychological'],
  compatibleEras: ['contemporary', 'timeless', 'mythic'],
  compatibleCultures: ['dream_psychic', 'symbolic_stage', 'liminal_modern'],
  compatibleSpaces: ['liminal', 'void', 'stage', 'mirror_room', 'interior', 'threshold'],
  genreStrictness: 'hard',
  cultureStrictness: 'soft',
  tags: ['subject_axis', 'body_axis', 'dream_body']
};

const psychologicalBodyPatch: Partial<LibraryItemDef> = {
  publicFilterTags: ['psychological', 'realistic', 'body'],
  nativeTags: ['psychological', 'realistic', 'body'],
  evidenceTags: ['memory', 'isolation', 'identity', 'trauma', 'body'],
  compatibleGenres: ['psychological', 'dream', 'horror'],
  compatibleEras: ['modern', 'contemporary', 'timeless'],
  compatibleCultures: ['dream_psychic', 'liminal_modern', 'institutional_modern', 'symbolic_stage'],
  compatibleSpaces: ['interior', 'apartment', 'hospital', 'mirror_room', 'liminal', 'stage', 'bedroom'],
  genreStrictness: 'hard',
  cultureStrictness: 'soft',
  tags: ['subject_axis', 'body_axis', 'psychological_body']
};

const cosmicBodyPatch: Partial<LibraryItemDef> = {
  publicFilterTags: ['cosmic_horror', 'surreal', 'body'],
  nativeTags: ['cosmic', 'void', 'surreal', 'body'],
  evidenceTags: ['cosmic', 'void', 'unknown', 'scale', 'body'],
  compatibleGenres: ['cosmic_horror', 'surreal', 'body_horror'],
  compatibleEras: ['modern', 'contemporary', 'near_future', 'far_future', 'timeless', 'mythic'],
  compatibleCultures: ['mythic_cult', 'dream_psychic', 'space_colony', 'symbolic_stage', 'forbidden_temple'],
  compatibleSpaces: ['void', 'temple', 'altar', 'space_station', 'cave', 'underground', 'landscape'],
  genreStrictness: 'hard',
  cultureStrictness: 'soft',
  tags: ['subject_axis', 'body_axis', 'cosmic_body']
};

const preciseBodyPatches: Record<string, Partial<LibraryItemDef>> = {
  cd_body_athletic_lean: spaceFunctionBodyPatch,
  cd_body_worker_strength: spaceFunctionBodyPatch,
  cd_body_soldier_ready: spaceFunctionBodyPatch,
  cd_body_craftsman_hands: spaceFunctionBodyPatch,
  cd_body_low_center: spaceFunctionBodyPatch,
  cd_body_bottom_weighted: spaceFunctionBodyPatch,
  cd_body_slender_vertical: abstractBodyPatch,
  cd_body_tall_narrow: abstractBodyPatch,
  cd_body_elongated_humanoid: { ...abstractBodyPatch, compatibleGenres: ['abstract', 'surreal', 'dream', 'cosmic_horror'] },
  cd_body_jointed_doll: { ...dreamBodyPatch, compatibleGenres: ['dream', 'surreal', 'abstract', 'psychological'] },
  cd_body_uncanny_perfect: { ...dreamBodyPatch, compatibleGenres: ['dream', 'surreal', 'abstract', 'psychological', 'cosmic_horror'] },
  cd_body_small_frame: psychologicalBodyPatch,
  cd_body_soft_curve: { ...dreamBodyPatch, evidenceTags: ['dream', 'intimacy', 'liminal', 'body'], compatibleGenres: ['dream', 'romance', 'psychological'] },
  cd_body_statuesque: { ...cosmicBodyPatch, compatibleGenres: ['cosmic_horror', 'mythic_epic', 'dark_fantasy', 'abstract'] }
};

const bodyDirectGenreTags: Record<string, string[]> = {
  cd_body_slender_vertical: ['historical', 'court', 'religious_ritual', 'abstract'],
  cd_body_willow_thin: ['romance', 'historical', 'dream', 'ecological'],
  cd_body_tall_narrow: ['court', 'fashion_idol', 'noir_crime', 'abstract'],
  cd_body_long_limb: ['adventure', 'fashion_idol', 'surreal', 'ecological'],
  cd_body_swan_neck: ['court', 'religious_ritual', 'mythic_epic'],

  cd_body_hourglass_balanced: ['romance', 'fashion_idol', 'court'],
  cd_body_soft_curve: ['romance', 'dream', 'psychological'],
  cd_body_compact_curve: ['urban_life', 'romance', 'noir_crime'],
  cd_body_sculpted_waist: ['fashion_idol', 'court'],

  cd_body_athletic_lean: ['real_professional', 'adventure', 'war_military', 'wuxia', 'science_fiction'],
  cd_body_dancer_control: ['fashion_idol', 'religious_ritual', 'xianxia'],
  cd_body_worker_strength: ['real_professional', 'adventure', 'wasteland', 'post_apocalyptic', 'ecological'],
  cd_body_soldier_ready: ['war_military', 'wuxia', 'adventure', 'noir_crime'],
  cd_body_craftsman_hands: ['real_professional', 'adventure', 'wasteland', 'historical', 'fantasy'],

  cd_body_square_authority: ['war_military', 'court', 'historical', 'dark_fantasy'],
  cd_body_broad_shoulder: ['war_military', 'wuxia', 'dark_fantasy', 'fantasy'],
  cd_body_barrel_solid: ['war_military', 'wasteland', 'post_apocalyptic', 'noir_crime'],
  cd_body_statuesque: ['court', 'religious_ritual', 'mythic_epic', 'dark_fantasy', 'abstract'],

  cd_body_small_frame: ['psychological', 'romance', 'urban_life', 'surreal'],
  cd_body_large_frame: ['war_military', 'wasteland', 'fantasy'],
  cd_body_low_center: ['wuxia', 'war_military', 'wasteland', 'post_apocalyptic'],
  cd_body_top_heavy: ['war_military', 'dark_fantasy', 'fantasy'],
  cd_body_bottom_weighted: ['wuxia', 'war_military', 'wasteland'],

  cd_body_elongated_humanoid: ['surreal', 'cosmic_horror', 'xianxia', 'science_fiction', 'posthuman', 'biopunk'],
  cd_body_jointed_doll: ['dream', 'surreal', 'abstract', 'horror', 'body_horror'],
  cd_body_uncanny_perfect: ['dream', 'surreal', 'posthuman', 'cosmic_horror', 'biopunk', 'body_horror']
};

const bodyDirectEvidenceTags: Record<string, string[]> = {
  romance: ['intimacy', 'body'],
  wuxia: ['martial_training', 'training', 'combat'],
  xianxia: ['cultivation', 'ritual', 'magic'],
  fantasy: ['kingdom', 'magic', 'artifact'],
  dark_fantasy: ['curse', 'ritual', 'forbidden'],
  mythic_epic: ['mythic', 'divine', 'ritual'],
  historical: ['historical', 'period', 'costume'],
  court: ['court', 'rank', 'ceremony'],
  adventure: ['travel', 'survival', 'frontier'],
  war_military: ['military', 'uniform', 'weapon'],
  noir_crime: ['crime', 'underground', 'surveillance'],
  horror: ['nightmare', 'damage', 'hazard'],
  body_horror: ['body', 'mutation', 'damage', 'experiment'],
  cosmic_horror: ['cosmic', 'unknown', 'scale'],
  science_fiction: ['technology', 'space', 'workflow'],
  biopunk: ['biotech', 'mutation', 'experiment', 'medical'],
  posthuman: ['synthetic', 'augmentation', 'identity'],
  post_apocalyptic: ['survival', 'ruin', 'repair'],
  wasteland: ['survival', 'hazard', 'repair'],
  urban_life: ['urban', 'daily', 'social'],
  real_professional: ['professional', 'workflow', 'occupation'],
  fashion_idol: ['fashion', 'glamour', 'media'],
  religious_ritual: ['ritual', 'prayer', 'symbol'],
  surreal: ['surreal', 'symbol', 'liminal'],
  dream: ['dream', 'liminal', 'threshold'],
  psychological: ['memory', 'identity', 'isolation'],
  abstract: ['abstract', 'geometry', 'negative_space'],
  ecological: ['ecology', 'habitat', 'plant']
};

const withBodyDirectAxis = (item: LibraryItemDef): LibraryItemDef => {
  const genreTags = bodyDirectGenreTags[item.id || ''] || [];
  if (!genreTags.length) return item;
  const evidenceTags = uniq(genreTags.flatMap(tag => bodyDirectEvidenceTags[tag] || []));
  return merge(item, { genreTags, evidenceTags });
};

const adultFashionPatch: Partial<LibraryItemDef> = {
  publicFilterTags: ['adult', 'fashion', 'glamour', 'body'],
  nativeTags: ['adult', 'glamour', 'body'],
  evidenceTags: ['glamour', 'fashion', 'media', 'social', 'costume'],
  compatibleGenres: ['fashion_idol'],
  compatibleEras: ['modern', 'contemporary', 'near_future', 'timeless'],
  compatibleCultures: ['contemporary_urban', 'global_corporate', 'east_asian_modern', 'western_modern', 'symbolic_stage'],
  compatibleSpaces: ['studio', 'stage', 'club', 'bar', 'street', 'interior', 'city'],
  genreStrictness: 'soft',
  cultureStrictness: 'soft',
  riskTags: ['adult_glamour'],
  tags: ['subject_axis', 'body_axis', 'adult_glamour_body']
};

const adultFantasyPatch: Partial<LibraryItemDef> = {
  ...adultFashionPatch,
  publicFilterTags: ['adult', 'glamour', 'body'],
  nativeTags: ['adult', 'glamour', 'body'],
  evidenceTags: ['glamour', 'costume', 'magic', 'ritual'],
  compatibleGenres: ['fashion_idol'],
  compatibleEras: ['feudal', 'early_modern', 'mythic', 'timeless', 'modern', 'contemporary'],
  compatibleCultures: ['mythic_cult', 'forbidden_temple', 'east_asian_mythic', 'religious_order', 'mythic_kingdom', 'symbolic_stage'],
  compatibleSpaces: ['temple', 'altar', 'palace', 'stage', 'cave', 'interior']
};

const adultCombatPatch: Partial<LibraryItemDef> = {
  ...adultFashionPatch,
  publicFilterTags: ['adult', 'glamour', 'body'],
  nativeTags: ['adult', 'glamour', 'body'],
  evidenceTags: ['glamour', 'combat', 'training', 'costume'],
  compatibleGenres: ['fashion_idol'],
  compatibleEras: ['feudal', 'early_modern', 'modern', 'contemporary', 'near_future', 'timeless'],
  compatibleCultures: ['chinese_jianghu', 'military_remnant', 'contemporary_urban', 'global_corporate', 'symbolic_stage'],
  compatibleSpaces: ['training_ground', 'stage', 'studio', 'street', 'club', 'interior']
};

const adultProfessionalPatch: Partial<LibraryItemDef> = {
  ...adultFashionPatch,
  publicFilterTags: ['adult', 'glamour', 'body'],
  nativeTags: ['adult', 'glamour', 'body'],
  evidenceTags: ['glamour', 'fashion', 'institution', 'costume'],
  compatibleGenres: ['fashion_idol'],
  compatibleEras: ['modern', 'contemporary', 'near_future'],
  compatibleCultures: ['global_corporate', 'institutional_modern', 'contemporary_urban', 'east_asian_modern', 'western_modern'],
  compatibleSpaces: ['office', 'hospital', 'school', 'studio', 'interior', 'city']
};

const adultNightlifePatch: Partial<LibraryItemDef> = {
  ...adultFashionPatch,
  publicFilterTags: ['adult', 'fashion', 'glamour'],
  nativeTags: ['adult', 'glamour'],
  evidenceTags: ['glamour', 'fashion', 'media', 'social', 'urban'],
  compatibleGenres: ['fashion_idol'],
  compatibleEras: ['modern', 'contemporary', 'near_future'],
  compatibleCultures: ['contemporary_urban', 'east_asian_modern', 'western_modern', 'global_corporate', 'symbolic_stage'],
  compatibleSpaces: ['club', 'bar', 'stage', 'studio', 'street', 'city', 'interior']
};

const adultBodyPatch = (item: LibraryItemDef): Partial<LibraryItemDef> => {
  const id = item.id || '';
  if (id.includes('fantasy_sorceress') || id.includes('villainess')) return adultFantasyPatch;
  if (id.includes('battle_babe') || id.includes('toned') || id.includes('fitness')) return adultCombatPatch;
  if (id.includes('office') || id.includes('teacher') || id.includes('nurse') || id.includes('secretary')) return adultProfessionalPatch;
  if (id.includes('hostess') || id.includes('gravure') || id.includes('red_carpet') || id.includes('lingerie') || id.includes('influencer') || id.includes('low_waist')) return adultNightlifePatch;
  if (id.includes('game_heroine') || id.includes('anime') || id.includes('doujin') || id.includes('manga')) {
    return adultFashionPatch;
  }
  return adultFashionPatch;
};

const bodyPatch = (item: LibraryItemDef): Partial<LibraryItemDef> => {
  const group = item.group || '';
  const id = item.id || '';
  if (group.startsWith('X.')) return adultBodyPatch(item);
  if (group.startsWith('A.') || group.startsWith('B.')) return bodyBasePatch;
  if (group.startsWith('C.')) return fashionBodyPatch;
  if (group.startsWith('D.')) {
    if (id.includes('worker') || id.includes('craftsman')) return laborBodyPatch;
    return combatBodyPatch;
  }
  if (group.startsWith('E.')) return powerBodyPatch;
  if (group.startsWith('F.')) {
    if (id.includes('low_center') || id.includes('bottom_weighted')) return combatBodyPatch;
    if (id.includes('top_heavy') || id.includes('large_frame')) return powerBodyPatch;
    return bodyBasePatch;
  }
  if (group.startsWith('G.')) return mysticBoundaryPatch;
  return bodyBasePatch;
};

export const withBodyAxisMeta = (blockId: string, items: LibraryItemDef[]): LibraryItemDef[] => (
  items.map(item => {
    if (blockId === 'cd_body_type') return withBodyDirectAxis(merge(merge(item, bodyPatch(item)), preciseBodyPatches[item.id || ''] || {}));
    return item;
  })
);
