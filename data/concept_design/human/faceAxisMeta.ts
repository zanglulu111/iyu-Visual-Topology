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

const humanBasePatch: Partial<LibraryItemDef> = {
  publicFilterTags: ['realistic', 'human'],
  nativeTags: ['realistic'],
  compatibleGenres: ['real_professional', 'urban_life', 'historical', 'romance', 'wuxia'],
  compatibleEras: ['feudal', 'early_modern', 'industrial', 'modern', 'contemporary', 'near_future', 'timeless'],
  compatibleCultures: ['contemporary_urban', 'global_corporate', 'east_asian_modern', 'western_modern', 'east_asian_historical', 'western_court'],
  compatibleSpaces: ['street', 'interior', 'office', 'city', 'market', 'courtyard'],
  genreStrictness: 'soft',
  cultureStrictness: 'soft',
  tags: ['subject_axis', 'face_axis']
};

const fashionFacePatch: Partial<LibraryItemDef> = {
  publicFilterTags: ['fashion', 'glamour'],
  nativeTags: ['fashion', 'glamour'],
  evidenceTags: ['fashion', 'media', 'social'],
  compatibleGenres: ['fashion_idol', 'urban_life', 'romance'],
  compatibleEras: ['industrial', 'modern', 'contemporary', 'near_future', 'timeless'],
  compatibleCultures: ['contemporary_urban', 'global_corporate', 'east_asian_modern', 'western_modern', 'symbolic_stage'],
  compatibleSpaces: ['studio', 'club', 'bar', 'street', 'interior', 'stage', 'city'],
  genreStrictness: 'soft',
  cultureStrictness: 'soft',
  tags: ['subject_axis', 'face_axis', 'fashion_face']
};

const combatFacePatch: Partial<LibraryItemDef> = {
  publicFilterTags: ['combat', 'survival'],
  nativeTags: ['combat', 'survival'],
  evidenceTags: ['combat', 'training', 'survival'],
  compatibleGenres: ['wuxia', 'war_military', 'wasteland', 'post_apocalyptic', 'survival', 'noir_crime'],
  compatibleEras: ['feudal', 'early_modern', 'industrial', 'modern', 'contemporary', 'near_future', 'far_future', 'timeless'],
  compatibleCultures: ['chinese_jianghu', 'military_remnant', 'postapocalyptic_wasteland', 'frontier_survival', 'institutional_modern'],
  compatibleSpaces: ['training_ground', 'street', 'road', 'shelter', 'scrapyard', 'factory', 'forest'],
  genreStrictness: 'soft',
  cultureStrictness: 'soft',
  tags: ['subject_axis', 'face_axis', 'combat_face']
};

const mysticFacePatch: Partial<LibraryItemDef> = {
  publicFilterTags: ['magic', 'ritual', 'symbol'],
  nativeTags: ['magic', 'ritual', 'symbol'],
  excludeGenreTags: ['biopunk'],
  compatibleGenres: ['xianxia', 'dark_fantasy', 'religious_ritual', 'mythic_epic', 'fantasy', 'surreal'],
  compatibleEras: ['feudal', 'early_modern', 'mythic', 'timeless'],
  compatibleCultures: ['east_asian_mythic', 'mythic_cult', 'religious_order', 'forbidden_temple', 'mountain_monastery'],
  compatibleSpaces: ['temple', 'altar', 'cave', 'mountain', 'forest', 'landscape'],
  genreStrictness: 'soft',
  cultureStrictness: 'soft',
  tags: ['subject_axis', 'face_axis', 'mystic_face']
};

const cyberFacePatch: Partial<LibraryItemDef> = {
  publicFilterTags: ['cyber', 'technology', 'interface'],
  nativeTags: ['technology', 'interface'],
  evidenceTags: ['technology', 'media'],
  excludeGenreTags: ['biopunk'],
  compatibleGenres: ['cyberpunk', 'science_fiction', 'posthuman', 'space_opera', 'fashion_idol'],
  compatibleEras: ['near_future', 'far_future'],
  compatibleCultures: ['cyber_megacity', 'posthuman_city', 'global_corporate', 'space_colony'],
  compatibleSpaces: ['city', 'street', 'lab', 'server_room', 'corporate_tower', 'space_station', 'spaceship'],
  genreStrictness: 'hard',
  cultureStrictness: 'soft',
  tags: ['subject_axis', 'face_axis', 'cyber_face']
};

const bioFacePatch: Partial<LibraryItemDef> = {
  publicFilterTags: ['bio', 'mutation', 'body'],
  nativeTags: ['biological', 'body'],
  compatibleGenres: ['biopunk', 'body_horror', 'science_fiction', 'horror', 'ecological', 'creature'],
  compatibleEras: ['modern', 'contemporary', 'near_future', 'far_future', 'timeless', 'mythic'],
  compatibleCultures: ['biotech_lab', 'posthuman_research', 'ecological_wild', 'alien_ecology'],
  compatibleSpaces: ['lab', 'containment', 'forest', 'wetland', 'cave', 'greenhouse', 'alien_planet'],
  genreStrictness: 'hard',
  cultureStrictness: 'soft',
  tags: ['subject_axis', 'face_axis', 'bio_face']
};

const horrorFacePatch: Partial<LibraryItemDef> = {
  publicFilterTags: ['horror', 'curse', 'damage'],
  nativeTags: ['curse', 'damage', 'surreal'],
  compatibleGenres: ['horror', 'dark_fantasy', 'body_horror', 'cosmic_horror', 'surreal'],
  compatibleEras: ['modern', 'contemporary', 'near_future', 'far_future', 'mythic', 'timeless'],
  compatibleCultures: ['forbidden_temple', 'mythic_cult', 'dream_psychic', 'postapocalyptic_wasteland'],
  compatibleSpaces: ['temple', 'tomb', 'crypt', 'underground', 'lab', 'liminal', 'void'],
  genreStrictness: 'soft',
  cultureStrictness: 'soft',
  tags: ['subject_axis', 'face_axis', 'horror_face']
};

const dreamFacePatch: Partial<LibraryItemDef> = {
  publicFilterTags: ['dream', 'surreal'],
  nativeTags: ['dream', 'surreal'],
  evidenceTags: ['dream', 'sleep', 'liminal', 'threshold', 'mirror'],
  compatibleGenres: ['dream', 'surreal', 'psychological'],
  compatibleEras: ['contemporary', 'timeless', 'mythic'],
  compatibleCultures: ['dream_psychic', 'symbolic_stage', 'liminal_modern'],
  compatibleSpaces: ['bedroom', 'mirror_room', 'liminal', 'void', 'stage', 'interior', 'threshold'],
  genreStrictness: 'hard',
  cultureStrictness: 'soft',
  tags: ['subject_axis', 'face_axis', 'dream_face']
};

const psychologicalFacePatch: Partial<LibraryItemDef> = {
  publicFilterTags: ['psychological', 'realistic'],
  nativeTags: ['psychological', 'realistic'],
  evidenceTags: ['memory', 'fear', 'isolation', 'identity', 'trauma', 'mirror'],
  compatibleGenres: ['psychological', 'dream', 'horror', 'noir_crime'],
  compatibleEras: ['modern', 'contemporary', 'timeless'],
  compatibleCultures: ['dream_psychic', 'liminal_modern', 'institutional_modern', 'symbolic_stage'],
  compatibleSpaces: ['interior', 'apartment', 'hospital', 'mirror_room', 'liminal', 'stage', 'bedroom'],
  genreStrictness: 'hard',
  cultureStrictness: 'soft',
  tags: ['subject_axis', 'face_axis', 'psychological_face']
};

const abstractFacePatch: Partial<LibraryItemDef> = {
  publicFilterTags: ['abstract', 'surreal'],
  nativeTags: ['abstract', 'surreal'],
  evidenceTags: ['abstract', 'mask', 'geometry', 'negative_space', 'deconstruction'],
  compatibleGenres: ['abstract', 'surreal', 'dream'],
  compatibleEras: ['contemporary', 'timeless', 'mythic', 'near_future', 'far_future'],
  compatibleCultures: ['symbolic_stage', 'dream_psychic'],
  compatibleSpaces: ['abstract', 'void', 'stage', 'threshold', 'interior'],
  genreStrictness: 'hard',
  cultureStrictness: 'soft',
  tags: ['subject_axis', 'face_axis', 'abstract_face']
};

const cosmicFacePatch: Partial<LibraryItemDef> = {
  publicFilterTags: ['cosmic_horror', 'surreal'],
  nativeTags: ['cosmic', 'void', 'surreal'],
  evidenceTags: ['cosmic', 'void', 'unknown', 'scale', 'madness'],
  compatibleGenres: ['cosmic_horror', 'surreal', 'body_horror', 'horror'],
  compatibleEras: ['modern', 'contemporary', 'near_future', 'far_future', 'mythic', 'timeless'],
  compatibleCultures: ['mythic_cult', 'dream_psychic', 'space_colony', 'symbolic_stage', 'forbidden_temple'],
  compatibleSpaces: ['void', 'temple', 'altar', 'space_station', 'cave', 'underground', 'landscape'],
  genreStrictness: 'hard',
  cultureStrictness: 'soft',
  tags: ['subject_axis', 'face_axis', 'cosmic_face']
};

const spaceFacePatch: Partial<LibraryItemDef> = {
  publicFilterTags: ['space', 'colony', 'realistic'],
  nativeTags: ['space', 'survival', 'realistic'],
  evidenceTags: ['space', 'survival', 'workflow', 'institution'],
  compatibleGenres: ['space_opera', 'science_fiction', 'posthuman'],
  compatibleEras: ['near_future', 'far_future', 'timeless'],
  compatibleCultures: ['space_colony', 'posthuman_civilization', 'global_corporate'],
  compatibleSpaces: ['space_station', 'spaceship', 'colony', 'alien_planet', 'lab', 'interior'],
  genreStrictness: 'soft',
  cultureStrictness: 'soft',
  tags: ['subject_axis', 'face_axis', 'space_face']
};

const faceDirectEvidenceTags: Record<string, string[]> = {
  romance: ['intimacy', 'social', 'daily'],
  wuxia: ['martial_training', 'training', 'costume'],
  xianxia: ['cultivation', 'ritual', 'magic'],
  fantasy: ['magic', 'kingdom', 'artifact'],
  dark_fantasy: ['curse', 'ritual', 'forbidden'],
  mythic_epic: ['mythic', 'divine', 'ritual'],
  historical: ['historical', 'period', 'costume'],
  court: ['court', 'rank', 'ceremony'],
  adventure: ['travel', 'survival', 'frontier'],
  war_military: ['military', 'uniform', 'training'],
  noir_crime: ['crime', 'underground', 'surveillance'],
  horror: ['nightmare', 'damage', 'hazard'],
  body_horror: ['body', 'mutation', 'experiment'],
  cosmic_horror: ['cosmic', 'unknown', 'void'],
  science_fiction: ['technology', 'space', 'workflow'],
  cyberpunk: ['technology', 'interface', 'cyber'],
  biopunk: ['biotech', 'mutation', 'experiment'],
  space_opera: ['space', 'colony', 'ship'],
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

const faceFeatureDirectGenreTags: Record<string, string[]> = {
  cd_face_oval_face: ['romance', 'real_professional', 'historical'],
  cd_face_long_face: ['historical', 'court', 'religious_ritual'],
  cd_face_square_face: ['war_military', 'real_professional', 'noir_crime'],
  cd_face_heart_face: ['romance', 'fashion_idol'],
  cd_face_diamond_face: ['fashion_idol', 'court', 'urban_life'],
  cd_face_small_face: ['romance', 'urban_life', 'posthuman'],
  cd_face_bony_face: ['dark_fantasy', 'horror', 'cosmic_horror', 'xianxia'],
  cd_face_fleshy_face: ['romance', 'urban_life'],

  cd_face_high_cheekbones: ['fashion_idol', 'court', 'noir_crime'],
  cd_face_wide_cheekbones: ['war_military', 'wasteland', 'adventure', 'ecological'],
  cd_face_soft_cheekbones: ['romance', 'historical', 'religious_ritual'],
  cd_face_strong_brow_bone: ['war_military', 'wuxia', 'dark_fantasy'],
  cd_face_deep_eye_sockets: ['noir_crime', 'historical', 'cosmic_horror', 'xianxia'],
  cd_face_sharp_jawline: ['war_military', 'noir_crime', 'fashion_idol'],
  cd_face_soft_jawline: ['romance', 'real_professional'],
  cd_face_pointed_chin: ['xianxia', 'fantasy', 'court'],
  cd_face_heavy_chin: ['war_military', 'wasteland'],

  cd_face_high_nose_bridge: ['court', 'historical', 'fashion_idol'],
  cd_face_straight_nose: ['real_professional', 'historical'],
  cd_face_aquiline_nose: ['noir_crime', 'court', 'dark_fantasy'],
  cd_face_crooked_nose: ['noir_crime', 'wasteland', 'adventure'],
  cd_face_thin_lips: ['noir_crime', 'court', 'psychological'],
  cd_face_full_lips: ['romance', 'fashion_idol', 'urban_life'],
  cd_face_downturned_mouth: ['dream', 'psychological', 'noir_crime'],
  cd_face_canine_teeth: ['dark_fantasy', 'horror', 'fantasy', 'xianxia'],

  cd_face_balanced_thirds: ['real_professional', 'court', 'fashion_idol'],
  cd_face_long_midface: ['historical', 'psychological'],
  cd_face_compact_features: ['abstract', 'posthuman', 'real_professional'],
  cd_face_close_brow_eye: ['dream', 'psychological', 'noir_crime'],
  cd_face_wide_brow_eye: ['dream', 'cosmic_horror', 'surreal'],

  cd_face_dimples: ['romance', 'urban_life'],
  cd_face_beauty_mark: ['romance', 'fashion_idol', 'historical'],
  cd_face_tear_mole: ['romance', 'dream', 'psychological'],
  cd_face_freckles_across_nose: ['ecological', 'romance', 'adventure'],
  cd_face_asymmetric_face: ['dream', 'psychological', 'abstract'],
  cd_face_old_face_scar: ['wuxia', 'war_military', 'wasteland', 'adventure'],
  cd_face_broken_brow: ['noir_crime', 'war_military', 'wasteland'],

  cd_face_cinematic_face: ['romance', 'noir_crime', 'urban_life'],
  cd_face_model_face: ['fashion_idol', 'urban_life'],
  cd_face_idol_face: ['fashion_idol', 'romance', 'urban_life'],
  cd_face_aristocratic_face: ['court', 'historical', 'dark_fantasy'],
  cd_face_street_face: ['urban_life', 'noir_crime', 'wasteland'],
  cd_face_fox_like_face: ['wuxia', 'xianxia', 'noir_crime'],
  cd_face_cat_like_face: ['romance', 'fashion_idol', 'surreal'],
  cd_face_dog_like_face: ['romance', 'adventure', 'urban_life', 'ecological'],

  cd_face_metal_face_plate: ['cyberpunk', 'science_fiction', 'posthuman'],
  cd_face_ceramic_mask_face: ['abstract', 'surreal', 'horror'],
  cd_face_subdermal_face_lines: ['cyberpunk', 'science_fiction', 'biopunk'],
  cd_face_small_horns_forehead: ['fantasy', 'dark_fantasy', 'body_horror', 'xianxia', 'ecological'],
  cd_face_animalized_nose_mouth: ['biopunk', 'body_horror', 'creature', 'ecological'],
  cd_face_cracked_face_surface: ['cosmic_horror', 'dark_fantasy', 'body_horror', 'xianxia', 'ecological']
};

const withFaceFeatureDirectAxis = (item: LibraryItemDef): LibraryItemDef => {
  const genreTags = faceFeatureDirectGenreTags[item.id || ''] || [];
  if (!genreTags.length) return item;
  const evidenceTags = uniq(genreTags.flatMap(tag => faceDirectEvidenceTags[tag] || []));
  return merge(item, { genreTags, evidenceTags });
};

const agePatch = (item: LibraryItemDef): Partial<LibraryItemDef> => {
  const id = item.id || '';
  if (id.includes('weathered') || id.includes('prematurely_aged')) return { ...combatFacePatch, compatibleGenres: ['wasteland', 'post_apocalyptic', 'war_military', 'wuxia', 'real_professional', 'historical', 'psychological'] };
  if (id.includes('well_kept') || id.includes('fresh')) return fashionFacePatch;
  if (id.includes('sleepless')) return psychologicalFacePatch;
  if (id.includes('lived_in')) return { ...psychologicalFacePatch, compatibleGenres: ['psychological', 'real_professional', 'urban_life', 'noir_crime', 'horror'] };
  if (id.includes('disciplined')) return { ...combatFacePatch, compatibleGenres: ['wuxia', 'war_military', 'real_professional', 'historical', 'fashion_idol'] };
  if (id.includes('timeless_adult')) return { ...mysticFacePatch, compatibleGenres: ['xianxia', 'dark_fantasy', 'surreal', 'dream', 'abstract', 'fashion_idol', 'mythic_epic'] };
  return humanBasePatch;
};

const eyeColorPatch = (item: LibraryItemDef): Partial<LibraryItemDef> => {
  const group = item.group || '';
  const id = item.id || '';
  if (group.startsWith('A.')) return humanBasePatch;
  if (group.startsWith('B.')) return fashionFacePatch;
  if (id.includes('liquid_silver') || id.includes('neon_cyan')) return cyberFacePatch;
  if (id.includes('blood') || id.includes('black_sclera') || id.includes('milky_blind')) return horrorFacePatch;
  if (id.includes('opalescent') || id.includes('glowing_gold') || id.includes('violet') || id.includes('galaxy') || id.includes('void')) return mysticFacePatch;
  return bioFacePatch;
};

const eyeShapePatch = (item: LibraryItemDef): Partial<LibraryItemDef> => {
  const group = item.group || '';
  const id = item.id || '';
  if (group.startsWith('A.') || group.startsWith('B.')) {
    if (id.includes('phoenix') || id.includes('fox') || id.includes('sharp')) return { ...humanBasePatch, compatibleGenres: ['wuxia', 'xianxia', 'historical', 'fashion_idol', 'noir_crime'] };
    return humanBasePatch;
  }
  if (group.startsWith('C.')) {
    if (id.includes('wide_alert') || id.includes('cold_stare')) return combatFacePatch;
    if (id.includes('sleepy')) return dreamFacePatch;
    if (id.includes('tearful') || id.includes('tired')) return psychologicalFacePatch;
    return humanBasePatch;
  }
  if (group.startsWith('D.')) return fashionFacePatch;
  if (group.startsWith('E.')) {
    if (id.includes('insect') || id.includes('animal') || id.includes('predator')) return bioFacePatch;
    if (id.includes('mask')) return abstractFacePatch;
    if (id.includes('divine')) return cosmicFacePatch;
    if (id.includes('doll')) return dreamFacePatch;
    return fashionFacePatch;
  }
  return humanBasePatch;
};

const faceFeaturePatch = (item: LibraryItemDef): Partial<LibraryItemDef> => {
  const group = item.group || '';
  const id = item.id || '';
  if (group.startsWith('X.')) {
    if (id.includes('metal') || id.includes('subdermal')) return cyberFacePatch;
    if (id.includes('horn') || id.includes('animalized')) return bioFacePatch;
    if (id.includes('ceramic')) return abstractFacePatch;
    if (id.includes('cracked')) return cosmicFacePatch;
    return horrorFacePatch;
  }
  if (group.startsWith('F.')) {
    if (id.includes('scar') || id.includes('broken_brow')) return { ...combatFacePatch, compatibleGenres: ['wuxia', 'war_military', 'wasteland', 'post_apocalyptic', 'survival', 'noir_crime', 'psychological'] };
    if (id.includes('asymmetric')) return psychologicalFacePatch;
    return humanBasePatch;
  }
  if (group.startsWith('G.')) {
    if (id.includes('model') || id.includes('idol') || id.includes('fox') || id.includes('cat')) return fashionFacePatch;
    if (id.includes('street')) return { ...humanBasePatch, compatibleGenres: ['urban_life', 'noir_crime', 'wasteland'] };
    if (id.includes('aristocratic')) return { ...humanBasePatch, compatibleGenres: ['historical', 'court', 'fashion_idol', 'dark_fantasy'] };
    return humanBasePatch;
  }
  if (id.includes('bony') || id.includes('sharp') || id.includes('strong_brow') || id.includes('deep_eye')) return { ...humanBasePatch, compatibleGenres: ['fashion_idol', 'wuxia', 'dark_fantasy', 'historical', 'noir_crime'] };
  if (id.includes('wide_brow_eye')) return dreamFacePatch;
  if (id.includes('close_brow_eye') || id.includes('downturned_mouth')) return psychologicalFacePatch;
  if (id.includes('compact_features')) return abstractFacePatch;
  if (id.includes('old_face_scar') || id.includes('broken_brow')) return { ...combatFacePatch, compatibleGenres: ['wuxia', 'war_military', 'psychological', 'noir_crime'] };
  if (id.includes('full_lips') || id.includes('small_face') || id.includes('diamond_face') || id.includes('high_cheekbones')) return fashionFacePatch;
  if (id.includes('paper') || id.includes('thin_skin')) return spaceFacePatch;
  return humanBasePatch;
};

export const withFaceAxisMeta = (blockId: string, items: LibraryItemDef[]): LibraryItemDef[] => (
  items.map(item => {
    if (blockId === 'cd_age') return merge(item, agePatch(item));
    if (blockId === 'cd_eye_color') return merge(item, eyeColorPatch(item));
    if (blockId === 'cd_eye_shape') return merge(item, eyeShapePatch(item));
    if (blockId === 'cd_face_features') return withFaceFeatureDirectAxis(merge(item, faceFeaturePatch(item)));
    return item;
  })
);
