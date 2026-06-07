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

const hasAxisMetadata = (item: LibraryItemDef) => [
  'publicFilterTags',
  'nativeTags',
  'evidenceTags',
  'genreTags',
  'compatibleGenres',
  'cultureTags',
  'compatibleCultures',
  'spaceTags',
  'compatibleSpaces'
].some(key => {
  const value = (item as unknown as Record<string, unknown>)[key];
  return Array.isArray(value) && value.length > 0;
});

const compatibleOnly = (
  patch: Partial<LibraryItemDef>,
  compatibleGenres: readonly string[] = []
): Partial<LibraryItemDef> => {
  const { genreTags: _genreTags, typeTags: _typeTags, ...rest } = patch;
  return {
    ...rest,
    compatibleGenres: uniq([
      ...compatibleGenres,
      ...(patch.compatibleGenres || []),
      ...(patch.genreTags || [])
    ]),
    tags: uniq([...(patch.tags || []), 'compatibility_only_persona'])
  };
};

const directGenrePatch = (
  patch: Partial<LibraryItemDef>,
  genreTags: readonly string[],
  compatibleGenres: readonly string[] = []
): Partial<LibraryItemDef> => ({
  ...patch,
  genreTags,
  compatibleGenres: uniq([
    ...genreTags,
    ...compatibleGenres,
    ...(patch.compatibleGenres || [])
  ])
});

const groupStarts = (item: LibraryItemDef, prefix: string) => (
  typeof item.group === 'string' && item.group.startsWith(`${prefix}.`)
);

const modernMediaPatch: Partial<LibraryItemDef> = {
  genreTags: ['fashion_idol'],
  publicFilterTags: ['urban', 'social', 'media'],
  nativeTags: ['urban', 'social', 'media'],
  evidenceTags: ['media', 'social', 'costume'],
  compatibleGenres: ['urban_life', 'fashion_idol', 'romance'],
  compatibleEras: ['modern', 'contemporary', 'near_future', 'timeless'],
  compatibleCultures: ['contemporary_urban', 'global_corporate', 'east_asian_modern', 'western_modern', 'symbolic_stage'],
  compatibleSpaces: ['street', 'interior', 'city', 'studio', 'stage', 'club', 'bar'],
  genreStrictness: 'soft',
  cultureStrictness: 'soft',
  tags: ['subject_axis', 'persona_axis', 'modern_media_persona']
};

const modernStreetPatch: Partial<LibraryItemDef> = {
  genreTags: ['urban_life'],
  publicFilterTags: ['urban', 'subculture', 'social'],
  nativeTags: ['urban', 'social'],
  evidenceTags: ['media', 'social', 'fashion'],
  compatibleGenres: ['urban_life', 'fashion_idol', 'noir_crime'],
  compatibleEras: ['modern', 'contemporary', 'near_future', 'timeless'],
  compatibleCultures: ['contemporary_urban', 'east_asian_modern', 'western_modern', 'japanese_urban', 'global_corporate'],
  compatibleSpaces: ['street', 'alley', 'bar', 'club', 'subway', 'city', 'interior'],
  genreStrictness: 'soft',
  cultureStrictness: 'soft',
  tags: ['subject_axis', 'persona_axis', 'street_persona']
};

const realSocialPatch: Partial<LibraryItemDef> = {
  genreTags: ['urban_life'],
  publicFilterTags: ['realistic', 'social', 'urban'],
  nativeTags: ['realistic', 'social'],
  evidenceTags: ['social', 'institution', 'workflow'],
  compatibleGenres: ['real_professional', 'urban_life', 'romance'],
  compatibleEras: ['modern', 'contemporary', 'near_future', 'timeless'],
  compatibleCultures: ['contemporary_urban', 'global_corporate', 'institutional_modern', 'east_asian_modern', 'western_modern'],
  compatibleSpaces: ['interior', 'street', 'city', 'office', 'hospital', 'school', 'market'],
  genreStrictness: 'soft',
  cultureStrictness: 'soft',
  tags: ['subject_axis', 'persona_axis', 'real_social_persona']
};

const institutionalPersonaPatch: Partial<LibraryItemDef> = {
  ...realSocialPatch,
  genreTags: ['real_professional'],
  publicFilterTags: ['realistic', 'institution', 'workflow'],
  nativeTags: ['realistic', 'institution', 'workflow'],
  evidenceTags: ['institution', 'workflow', 'professional', 'tool'],
  compatibleGenres: ['real_professional', 'urban_life', 'science_fiction', 'psychological'],
  compatibleCultures: ['institutional_modern', 'global_corporate', 'contemporary_urban', 'medical_institution'],
  compatibleSpaces: ['office', 'hospital', 'school', 'lab', 'interior', 'street'],
  tags: ['subject_axis', 'persona_axis', 'institutional_persona']
};

const periodCourtPatch: Partial<LibraryItemDef> = {
  genreTags: ['court'],
  publicFilterTags: ['historical', 'court'],
  nativeTags: ['historical', 'aristocratic'],
  evidenceTags: ['historical', 'institution', 'costume', 'symbol'],
  compatibleGenres: ['historical', 'court', 'romance', 'religious_ritual'],
  compatibleCultures: ['historical_court', 'western_court', 'east_asian_historical', 'imperial_bureaucracy', 'religious_order'],
  compatibleSpaces: ['palace', 'interior', 'archive', 'garden', 'stage'],
  genreStrictness: 'soft',
  cultureStrictness: 'soft',
  tags: ['subject_axis', 'persona_axis', 'period_court_persona']
};

const historicalRegionPatch: Partial<LibraryItemDef> = {
  genreTags: ['historical'],
  publicFilterTags: ['historical', 'realistic'],
  nativeTags: ['historical'],
  evidenceTags: ['historical', 'costume', 'institution', 'tool'],
  compatibleGenres: ['historical', 'court', 'adventure', 'war_military', 'real_professional'],
  compatibleCultures: ['east_asian_historical', 'western_court', 'historical_court', 'frontier_survival', 'nomadic_steppe'],
  compatibleSpaces: ['street', 'market', 'interior', 'harbor', 'road', 'forest', 'mountain'],
  genreStrictness: 'soft',
  cultureStrictness: 'soft',
  tags: ['subject_axis', 'persona_axis', 'historical_region_persona']
};

const ritualDarkPatch: Partial<LibraryItemDef> = {
  genreTags: ['religious_ritual'],
  publicFilterTags: ['ritual', 'dark_fantasy', 'historical'],
  nativeTags: ['ritual', 'symbol'],
  evidenceTags: ['ritual', 'symbol', 'costume', 'damage'],
  compatibleGenres: ['dark_fantasy', 'religious_ritual', 'horror', 'historical'],
  compatibleEras: ['feudal', 'early_modern', 'industrial', 'modern', 'contemporary', 'timeless', 'mythic'],
  compatibleCultures: ['religious_order', 'forbidden_temple', 'gothic_ecclesial', 'historical_court', 'mythic_cult'],
  compatibleSpaces: ['temple', 'church', 'tomb', 'crypt', 'interior', 'altar', 'archive'],
  genreStrictness: 'soft',
  cultureStrictness: 'soft',
  tags: ['subject_axis', 'persona_axis', 'ritual_dark_persona']
};

const undeadCursedPatch: Partial<LibraryItemDef> = {
  ...ritualDarkPatch,
  genreTags: ['dark_fantasy', 'horror'],
  publicFilterTags: ['curse', 'undead', 'dark_fantasy'],
  nativeTags: ['curse', 'damage'],
  evidenceTags: ['curse', 'undead', 'damage', 'ritual', 'body'],
  compatibleGenres: ['dark_fantasy', 'horror', 'body_horror', 'religious_ritual'],
  tags: ['subject_axis', 'persona_axis', 'undead_cursed_persona']
};

const scifiPatch: Partial<LibraryItemDef> = {
  genreTags: ['science_fiction'],
  publicFilterTags: ['cyber', 'technology', 'interface'],
  nativeTags: ['technology', 'interface'],
  evidenceTags: ['technology', 'media', 'institution'],
  compatibleGenres: ['cyberpunk', 'science_fiction', 'posthuman', 'space_opera', 'urban_life'],
  compatibleEras: ['contemporary', 'near_future', 'far_future', 'timeless'],
  compatibleCultures: ['cyber_megacity', 'posthuman_city', 'global_corporate', 'space_colony'],
  compatibleSpaces: ['city', 'street', 'lab', 'server_room', 'corporate_tower', 'space_station', 'spaceship'],
  genreStrictness: 'hard',
  cultureStrictness: 'soft',
  tags: ['subject_axis', 'persona_axis', 'scifi_persona']
};

const cyberneticPersonaPatch: Partial<LibraryItemDef> = {
  ...scifiPatch,
  genreTags: ['cyberpunk', 'posthuman'],
  evidenceTags: ['technology', 'interface', 'synthetic', 'prosthetic'],
  compatibleGenres: ['cyberpunk', 'posthuman', 'science_fiction', 'biopunk'],
  tags: ['subject_axis', 'persona_axis', 'cybernetic_persona']
};

const mythicCreaturePatch: Partial<LibraryItemDef> = {
  genreTags: ['fantasy'],
  publicFilterTags: ['magic', 'creature', 'xianxia'],
  nativeTags: ['magic', 'creature', 'body'],
  evidenceTags: ['magic', 'body', 'symbol', 'costume'],
  compatibleGenres: ['xianxia', 'fantasy', 'dark_fantasy', 'mythic_epic', 'horror', 'surreal'],
  compatibleEras: ['feudal', 'early_modern', 'modern', 'contemporary', 'timeless', 'mythic'],
  compatibleCultures: ['east_asian_mythic', 'east_asian_historical', 'mythic_cult', 'religious_order', 'ecological_wild'],
  compatibleSpaces: ['temple', 'forest', 'mountain', 'cave', 'river', 'interior', 'street'],
  genreStrictness: 'soft',
  cultureStrictness: 'soft',
  tags: ['subject_axis', 'persona_axis', 'mythic_creature_persona']
};

const yokaiBeastPatch: Partial<LibraryItemDef> = {
  ...mythicCreaturePatch,
  genreTags: ['fantasy', 'xianxia'],
  publicFilterTags: ['yokai', 'creature', 'xianxia'],
  nativeTags: ['magic', 'creature', 'body'],
  evidenceTags: ['magic', 'creature', 'body', 'folk_spirit', 'animal'],
  compatibleGenres: ['xianxia', 'fantasy', 'horror', 'surreal', 'mythic_epic'],
  tags: ['subject_axis', 'persona_axis', 'yokai_beast_persona']
};

const divinePatch: Partial<LibraryItemDef> = {
  genreTags: ['mythic_epic', 'religious_ritual'],
  publicFilterTags: ['magic', 'ritual', 'dark_fantasy'],
  nativeTags: ['magic', 'ritual', 'symbol'],
  evidenceTags: ['magic', 'ritual', 'symbol', 'damage'],
  compatibleGenres: ['dark_fantasy', 'religious_ritual', 'mythic_epic', 'xianxia', 'fantasy', 'surreal'],
  compatibleEras: ['feudal', 'early_modern', 'modern', 'contemporary', 'timeless', 'mythic', 'far_future'],
  compatibleCultures: ['religious_order', 'mythic_cult', 'forbidden_temple', 'east_asian_mythic', 'space_colony'],
  compatibleSpaces: ['temple', 'altar', 'palace', 'cave', 'cosmic', 'space_station', 'interior'],
  genreStrictness: 'soft',
  cultureStrictness: 'soft',
  tags: ['subject_axis', 'persona_axis', 'divine_persona']
};

const bioMutationPatch: Partial<LibraryItemDef> = {
  genreTags: ['biopunk', 'body_horror'],
  publicFilterTags: ['bio', 'mutation', 'body'],
  nativeTags: ['biological', 'body'],
  evidenceTags: ['biological', 'lab', 'technology', 'body', 'damage'],
  compatibleGenres: ['biopunk', 'body_horror', 'science_fiction', 'horror', 'ecological'],
  compatibleEras: ['modern', 'contemporary', 'near_future', 'far_future', 'timeless'],
  compatibleCultures: ['biotech_lab', 'posthuman_research', 'medical_institution', 'ecological_wild'],
  compatibleSpaces: ['lab', 'containment', 'hospital', 'greenhouse', 'forest', 'wetland', 'interior'],
  genreStrictness: 'hard',
  cultureStrictness: 'soft',
  tags: ['subject_axis', 'persona_axis', 'bio_mutation_persona']
};

const bioExperimentPatch: Partial<LibraryItemDef> = {
  ...bioMutationPatch,
  genreTags: ['biopunk'],
  evidenceTags: ['biotech', 'gene', 'experiment', 'lab', 'medical', 'synthetic'],
  compatibleGenres: ['biopunk', 'science_fiction', 'posthuman', 'body_horror'],
  compatibleCultures: ['biotech_lab', 'posthuman_research', 'medical_institution', 'containment'],
  compatibleSpaces: ['lab', 'containment', 'hospital', 'interior'],
  tags: ['subject_axis', 'persona_axis', 'bio_experiment_persona']
};

const bodyHorrorMutationPatch: Partial<LibraryItemDef> = {
  ...bioMutationPatch,
  genreTags: ['body_horror'],
  evidenceTags: ['body', 'mutation', 'infection', 'damage', 'growth', 'wound', 'medical'],
  compatibleGenres: ['body_horror', 'horror', 'biopunk', 'ecological'],
  compatibleCultures: ['containment', 'biotech_lab', 'medical_institution', 'dream_psychic'],
  compatibleSpaces: ['hospital', 'lab', 'interior', 'underground', 'mirror_room'],
  tags: ['subject_axis', 'persona_axis', 'body_horror_mutation_persona']
};

const wastelandPatch: Partial<LibraryItemDef> = {
  genreTags: ['wasteland', 'post_apocalyptic'],
  publicFilterTags: ['wasteland', 'survival', 'water'],
  nativeTags: ['survival', 'water'],
  evidenceTags: ['survival', 'hazard', 'repair', 'wear'],
  compatibleGenres: ['wasteland', 'post_apocalyptic', 'survival', 'ecological', 'adventure'],
  compatibleEras: ['near_future', 'far_future', 'timeless'],
  compatibleCultures: ['postapocalyptic_wasteland', 'frontier_survival', 'ecological_wild'],
  compatibleSpaces: ['road', 'shelter', 'ruin', 'harbor', 'wetland', 'river', 'landscape'],
  genreStrictness: 'soft',
  cultureStrictness: 'soft',
  tags: ['subject_axis', 'persona_axis', 'wasteland_persona']
};

const abstractPersonaPatch: Partial<LibraryItemDef> = {
  genreTags: ['abstract', 'surreal'],
  publicFilterTags: ['abstract', 'deconstruction', 'avant_garde'],
  nativeTags: ['abstract', 'deconstruction', 'gesture'],
  evidenceTags: ['abstract', 'deconstruction', 'geometry', 'gesture', 'mask', 'anti_fashion', 'concept_photo'],
  compatibleGenres: ['abstract', 'surreal', 'fashion_idol'],
  compatibleEras: ['modern', 'contemporary', 'near_future', 'timeless'],
  compatibleCultures: ['symbolic_stage', 'dream_psychic', 'contemporary_urban'],
  compatibleSpaces: ['abstract', 'stage', 'studio', 'interior', 'void'],
  genreStrictness: 'soft',
  cultureStrictness: 'soft',
  tags: ['subject_axis', 'persona_axis', 'abstract_persona']
};

const dreamPersonaPatch: Partial<LibraryItemDef> = {
  genreTags: ['dream', 'surreal', 'psychological'],
  publicFilterTags: ['dream', 'liminal', 'mirror'],
  nativeTags: ['dream', 'threshold', 'sleep'],
  evidenceTags: ['dream', 'memory', 'mirror', 'sleep', 'threshold', 'trance', 'oracle'],
  compatibleGenres: ['dream', 'surreal', 'psychological', 'religious_ritual'],
  compatibleEras: ['modern', 'contemporary', 'timeless', 'mythic'],
  compatibleCultures: ['dream_psychic', 'symbolic_stage', 'liminal_modern'],
  compatibleSpaces: ['bedroom', 'mirror_room', 'liminal', 'stage', 'interior', 'threshold'],
  genreStrictness: 'soft',
  cultureStrictness: 'soft',
  tags: ['subject_axis', 'persona_axis', 'dream_persona']
};

const psychologicalPersonaPatch: Partial<LibraryItemDef> = {
  genreTags: ['psychological', 'dream'],
  publicFilterTags: ['psychological', 'memory', 'identity'],
  nativeTags: ['memory', 'identity', 'threshold'],
  evidenceTags: ['memory', 'identity', 'guilt', 'fear', 'mirror', 'confession', 'secret', 'trauma'],
  compatibleGenres: ['psychological', 'dream', 'horror', 'real_professional', 'surreal'],
  compatibleEras: ['modern', 'contemporary', 'near_future', 'timeless'],
  compatibleCultures: ['dream_psychic', 'liminal_modern', 'institutional_modern', 'symbolic_stage'],
  compatibleSpaces: ['interior', 'apartment', 'hospital', 'mirror_room', 'liminal', 'stage'],
  genreStrictness: 'soft',
  cultureStrictness: 'soft',
  tags: ['subject_axis', 'persona_axis', 'psychological_persona']
};

const cosmicHorrorPersonaPatch: Partial<LibraryItemDef> = {
  genreTags: ['cosmic_horror'],
  publicFilterTags: ['cosmic', 'void', 'cult'],
  nativeTags: ['cosmic', 'void', 'unknown'],
  evidenceTags: ['cosmic', 'void', 'unknown', 'scale', 'cult', 'star', 'black_hole', 'nebula', 'relic'],
  compatibleGenres: ['cosmic_horror', 'space_opera', 'science_fiction', 'religious_ritual', 'dark_fantasy'],
  compatibleEras: ['modern', 'contemporary', 'near_future', 'far_future', 'timeless', 'mythic'],
  compatibleCultures: ['space_colony', 'mythic_cult', 'dream_psychic', 'symbolic_stage', 'forbidden_temple'],
  compatibleSpaces: ['cosmic', 'space_station', 'spaceship', 'void', 'temple', 'altar', 'interior'],
  genreStrictness: 'soft',
  cultureStrictness: 'soft',
  tags: ['subject_axis', 'persona_axis', 'cosmic_horror_persona']
};

const spaceColonyPersonaPatch: Partial<LibraryItemDef> = {
  genreTags: ['space_opera', 'science_fiction'],
  publicFilterTags: ['space', 'colony', 'technology'],
  nativeTags: ['space', 'survival', 'institution'],
  evidenceTags: ['space', 'colony', 'technology', 'survival', 'workflow', 'institution'],
  compatibleGenres: ['space_opera', 'science_fiction', 'posthuman'],
  compatibleEras: ['near_future', 'far_future', 'timeless'],
  compatibleCultures: ['space_colony', 'posthuman_civilization', 'global_corporate', 'frontier_survival'],
  compatibleSpaces: ['space_station', 'spaceship', 'colony', 'alien_planet', 'interior'],
  genreStrictness: 'soft',
  cultureStrictness: 'soft',
  tags: ['subject_axis', 'persona_axis', 'space_persona']
};

const directPersonaAxis = (
  genreTags: readonly string[],
  patch: Partial<LibraryItemDef>
): Partial<LibraryItemDef> => ({
  ...patch,
  genreTags,
  compatibleGenres: uniq([
    ...genreTags,
    ...(patch.compatibleGenres || [])
  ]),
  tags: uniq([
    'precise_persona_axis',
    `${genreTags[0]}_persona`,
    ...(patch.tags || [])
  ])
});

const romancePersonaAxis = directPersonaAxis(['romance'], {
  publicFilterTags: ['romance', 'intimacy', 'relationship'],
  nativeTags: ['intimacy', 'relationship', 'commitment'],
  evidenceTags: ['intimacy', 'commitment', 'paired_token', 'waiting', 'separation', 'marriage_contract'],
  compatibleGenres: ['urban_life', 'psychological', 'dream', 'science_fiction', 'posthuman', 'fantasy', 'dark_fantasy'],
  compatibleEras: ['feudal', 'early_modern', 'modern', 'contemporary', 'near_future', 'far_future', 'timeless', 'mythic'],
  compatibleCultures: ['intimate', 'daily', 'threshold', 'contemporary_urban', 'symbolic_stage', 'historical_court'],
  compatibleSpaces: ['wedding', 'bedroom', 'station', 'street', 'apartment', 'interior', 'threshold'],
  genreStrictness: 'soft',
  cultureStrictness: 'soft'
});

const noirCrimePersonaAxis = directPersonaAxis(['noir_crime'], {
  publicFilterTags: ['noir_crime', 'crime', 'investigation'],
  nativeTags: ['crime', 'detective', 'surveillance'],
  evidenceTags: ['crime', 'detective', 'surveillance', 'underground', 'institution', 'weapon'],
  compatibleGenres: ['real_professional', 'urban_life', 'psychological', 'cyberpunk'],
  compatibleEras: ['modern', 'contemporary', 'near_future', 'timeless'],
  compatibleCultures: ['contemporary_urban', 'global_corporate', 'institutional_modern', 'liminal_modern'],
  compatibleSpaces: ['street', 'alley', 'bar', 'club', 'subway', 'apartment', 'city', 'interior'],
  genreStrictness: 'soft',
  cultureStrictness: 'soft'
});

const warMilitaryPersonaAxis = directPersonaAxis(['war_military'], {
  publicFilterTags: ['war_military', 'military', 'combat'],
  nativeTags: ['military', 'war', 'combat'],
  evidenceTags: ['military', 'war', 'armor', 'weapon', 'uniform', 'rank', 'battlefield', 'strategy'],
  compatibleGenres: ['real_professional', 'wasteland', 'post_apocalyptic', 'science_fiction', 'space_opera'],
  compatibleEras: ['slave', 'feudal', 'early_modern', 'industrial', 'modern', 'contemporary', 'near_future', 'far_future', 'timeless'],
  compatibleCultures: ['military_remnant', 'imperial_bureaucracy', 'frontier_survival', 'industrial_ruin', 'global_corporate'],
  compatibleSpaces: ['fortress', 'battlefield', 'road', 'shelter', 'factory', 'ruin', 'interior'],
  genreStrictness: 'soft',
  cultureStrictness: 'soft'
});

const ecologicalPersonaAxis = directPersonaAxis(['ecological'], {
  publicFilterTags: ['ecological', 'ecology', 'plant'],
  nativeTags: ['ecology', 'plant', 'habitat'],
  evidenceTags: ['ecology', 'plant', 'animal', 'climate', 'growth', 'habitat', 'symbiosis', 'pollution'],
  compatibleGenres: ['wasteland', 'post_apocalyptic', 'biopunk', 'body_horror', 'fantasy', 'xianxia', 'real_professional'],
  compatibleEras: ['primitive', 'mythic', 'feudal', 'modern', 'contemporary', 'near_future', 'far_future', 'timeless'],
  compatibleCultures: ['natural_wilderness', 'alien_ecology', 'postapocalyptic_wasteland', 'east_asian_mythic', 'ecological_wild'],
  compatibleSpaces: ['forest', 'wetland', 'mountain', 'river', 'alien_planet', 'landscape', 'ruin', 'greenhouse'],
  genreStrictness: 'soft',
  cultureStrictness: 'soft'
});

const adventurePersonaAxis = directPersonaAxis(['adventure'], {
  publicFilterTags: ['adventure', 'journey', 'frontier'],
  nativeTags: ['adventure', 'travel', 'survival'],
  evidenceTags: ['journey', 'route', 'map', 'frontier', 'expedition', 'survival', 'tool'],
  compatibleGenres: ['fantasy', 'historical', 'wuxia', 'wasteland', 'space_opera'],
  compatibleEras: ['feudal', 'early_modern', 'industrial', 'modern', 'contemporary', 'near_future', 'far_future', 'timeless'],
  compatibleCultures: ['frontier_survival', 'natural_wilderness', 'nomadic_steppe', 'postapocalyptic_wasteland', 'space_colony'],
  compatibleSpaces: ['road', 'forest', 'mountain', 'river', 'harbor', 'desert', 'ruin', 'alien_planet'],
  genreStrictness: 'soft',
  cultureStrictness: 'soft'
});

const xianxiaPersonaAxis = directPersonaAxis(['xianxia'], {
  publicFilterTags: ['xianxia', 'cultivation', 'sect'],
  nativeTags: ['xianxia', 'cultivation', 'artifact'],
  evidenceTags: ['cultivation', 'artifact', 'talisman', 'sect', 'ritual', 'magic', 'sword'],
  compatibleGenres: ['wuxia', 'fantasy', 'mythic_epic', 'religious_ritual', 'dark_fantasy'],
  compatibleEras: ['feudal', 'mythic', 'timeless'],
  compatibleCultures: ['east_asian_mythic', 'chinese_jianghu', 'sect_order', 'mountain_monastery', 'forbidden_temple'],
  compatibleSpaces: ['mountain', 'temple', 'cave', 'cloud_sea', 'training_ground', 'courtyard'],
  genreStrictness: 'soft',
  cultureStrictness: 'soft'
});

const spaceOperaPersonaAxis = directPersonaAxis(['space_opera'], {
  publicFilterTags: ['space_opera', 'space', 'colony'],
  nativeTags: ['space', 'colony', 'fleet'],
  evidenceTags: ['space', 'colony', 'fleet', 'star', 'orbit', 'survival', 'technology'],
  compatibleGenres: ['science_fiction', 'posthuman', 'war_military', 'religious_ritual', 'cosmic_horror'],
  compatibleEras: ['near_future', 'far_future', 'timeless'],
  compatibleCultures: ['space_colony', 'posthuman_civilization', 'global_corporate', 'frontier_survival'],
  compatibleSpaces: ['space_station', 'spaceship', 'colony', 'alien_planet', 'cosmic'],
  genreStrictness: 'soft',
  cultureStrictness: 'soft'
});

const dreamAxis = directPersonaAxis(['dream'], {
  publicFilterTags: ['dream', 'oracle', 'trance'],
  nativeTags: ['dream', 'sleep', 'oracle'],
  evidenceTags: ['dream', 'sleep', 'oracle', 'trance', 'mirror', 'memory', 'threshold'],
  compatibleGenres: ['surreal', 'psychological', 'fantasy', 'religious_ritual', 'cosmic_horror'],
  compatibleEras: ['modern', 'contemporary', 'mythic', 'timeless'],
  compatibleCultures: ['dream_psychic', 'symbolic_stage', 'liminal_modern', 'mythic_cult'],
  compatibleSpaces: ['bedroom', 'mirror_room', 'liminal', 'stage', 'temple', 'interior'],
  genreStrictness: 'soft',
  cultureStrictness: 'soft'
});

const psychologicalAxis = directPersonaAxis(['psychological'], {
  publicFilterTags: ['psychological', 'memory', 'identity'],
  nativeTags: ['memory', 'identity', 'trauma'],
  evidenceTags: ['memory', 'identity', 'trauma', 'guilt', 'confession', 'mirror', 'secret'],
  compatibleGenres: ['dream', 'surreal', 'horror', 'science_fiction', 'real_professional'],
  compatibleEras: ['modern', 'contemporary', 'near_future', 'timeless'],
  compatibleCultures: ['dream_psychic', 'liminal_modern', 'institutional_modern', 'symbolic_stage'],
  compatibleSpaces: ['interior', 'apartment', 'hospital', 'mirror_room', 'liminal', 'server_room'],
  genreStrictness: 'soft',
  cultureStrictness: 'soft'
});

const creaturePersonaAxis = directPersonaAxis(['creature'], {
  publicFilterTags: ['creature', 'mutation', 'xeno'],
  nativeTags: ['creature', 'mutation', 'body'],
  evidenceTags: ['creature', 'mutation', 'body', 'animal', 'gene', 'symbiosis', 'growth'],
  compatibleGenres: ['biopunk', 'body_horror', 'fantasy', 'xianxia', 'science_fiction', 'ecological'],
  compatibleEras: ['primitive', 'mythic', 'feudal', 'modern', 'contemporary', 'near_future', 'far_future', 'timeless'],
  compatibleCultures: ['alien_ecology', 'biotech_lab', 'ecological_wild', 'east_asian_mythic', 'posthuman_research'],
  compatibleSpaces: ['forest', 'wetland', 'lab', 'containment', 'alien_planet', 'interior'],
  genreStrictness: 'soft',
  cultureStrictness: 'soft'
});

const cosmicHorrorAxis = directPersonaAxis(['cosmic_horror'], {
  publicFilterTags: ['cosmic_horror', 'cosmic', 'void'],
  nativeTags: ['cosmic', 'void', 'unknown'],
  evidenceTags: ['cosmic', 'void', 'unknown', 'cult', 'relic', 'scale', 'forbidden_star'],
  compatibleGenres: ['space_opera', 'science_fiction', 'religious_ritual', 'dark_fantasy', 'dream'],
  compatibleEras: ['modern', 'contemporary', 'near_future', 'far_future', 'mythic', 'timeless'],
  compatibleCultures: ['space_colony', 'mythic_cult', 'dream_psychic', 'forbidden_temple', 'symbolic_stage'],
  compatibleSpaces: ['cosmic', 'void', 'space_station', 'spaceship', 'temple', 'altar', 'interior'],
  genreStrictness: 'soft',
  cultureStrictness: 'soft'
});

const precisePersonaPatches: Record<string, Partial<LibraryItemDef>> = {
  cd_persona_social_life_middle_class_wedding_bride: romancePersonaAxis,
  cd_persona_social_life_train_station_couple: romancePersonaAxis,
  cd_persona_social_life_old_photo_widow: romancePersonaAxis,
  cd_persona_social_life_full_time_housewife: romancePersonaAxis,
  cd_persona_social_life_sleepless_new_mother: romancePersonaAxis,
  cd_persona_social_life_single_father_cook: romancePersonaAxis,
  cd_persona_social_life_school_gate_parent: romancePersonaAxis,
  cd_persona_media_couple_account_actor: romancePersonaAxis,
  cd_persona_scifi_algorithmic_dating_prince: romancePersonaAxis,
  cd_persona_undead_cursed_ai_ghost_boyfriend: romancePersonaAxis,
  cd_persona_cybernetic_altered_robot_boyfriend: romancePersonaAxis,
  cd_persona_cybernetic_altered_prosthetic_wedding_bride: romancePersonaAxis,
  cd_persona_aristocracy_arranged_marriage_bride: romancePersonaAxis,
  cd_persona_wasteland_fire_escape_bride: romancePersonaAxis,
  cd_persona_wasteland_windmill_wedding_officiant: romancePersonaAxis,

  cd_persona_institution_old_school_detective: noirCrimePersonaAxis,
  cd_persona_institution_private_investigator: noirCrimePersonaAxis,
  cd_persona_institution_crime_scene_technician: noirCrimePersonaAxis,
  cd_persona_institution_district_attorney: noirCrimePersonaAxis,
  cd_persona_institution_public_defender: noirCrimePersonaAxis,
  cd_persona_institution_forensic_pathologist: noirCrimePersonaAxis,
  cd_persona_institution_prison_guard: noirCrimePersonaAxis,
  cd_persona_institution_private_security_guard: noirCrimePersonaAxis,
  cd_persona_institution_surveillance_room_operator: noirCrimePersonaAxis,
  cd_persona_combat_urban_undercover_agent: noirCrimePersonaAxis,
  cd_persona_combat_getaway_driver: noirCrimePersonaAxis,
  cd_persona_combat_nightclub_bodyguard: noirCrimePersonaAxis,
  cd_persona_street_drill_crew_member: noirCrimePersonaAxis,

  cd_persona_combat_modern_tactical_mercenary: warMilitaryPersonaAxis,
  cd_persona_combat_private_military_contractor: warMilitaryPersonaAxis,
  cd_persona_combat_swat_breacher: warMilitaryPersonaAxis,
  cd_persona_combat_sniper_spotter: warMilitaryPersonaAxis,
  cd_persona_combat_counterterror_operator: warMilitaryPersonaAxis,
  cd_persona_combat_combat_medic_operator: warMilitaryPersonaAxis,
  cd_persona_combat_hostage_rescue_commander: warMilitaryPersonaAxis,
  cd_persona_combat_tactical_drone_pilot: warMilitaryPersonaAxis,
  cd_persona_combat_near_future_riot_operator: warMilitaryPersonaAxis,
  cd_persona_combat_postwar_veteran: warMilitaryPersonaAxis,
  cd_persona_combat_demobilized_officer: warMilitaryPersonaAxis,
  cd_persona_combat_war_correspondent_survivor: warMilitaryPersonaAxis,
  cd_persona_combat_mine_clearance_worker: warMilitaryPersonaAxis,

  cd_persona_social_life_houseplant_lonely_girl: ecologicalPersonaAxis,
  cd_persona_social_life_seasonal_farm_worker: ecologicalPersonaAxis,
  cd_persona_wasteland_water_filter_tinker: ecologicalPersonaAxis,
  cd_persona_wasteland_rooftop_farmer: ecologicalPersonaAxis,
  cd_persona_wasteland_solar_commune_builder: ecologicalPersonaAxis,
  cd_persona_wasteland_seed_bank_librarian: ecologicalPersonaAxis,
  cd_persona_wasteland_rewilding_ranger: ecologicalPersonaAxis,
  cd_persona_wasteland_compost_temple_keeper: ecologicalPersonaAxis,
  cd_persona_wasteland_rain_garden_engineer: ecologicalPersonaAxis,
  cd_persona_wasteland_biochar_blacksmith: ecologicalPersonaAxis,
  cd_persona_wasteland_plant_school_principal: ecologicalPersonaAxis,
  cd_persona_wasteland_greenhouse_orphan_leader: ecologicalPersonaAxis,
  cd_persona_wasteland_moss_roof_architect: ecologicalPersonaAxis,

  cd_persona_fantasy_dungeon_party_leader: adventurePersonaAxis,
  cd_persona_fantasy_half_elven_ranger: adventurePersonaAxis,
  cd_persona_fantasy_tavern_rogue_girl: adventurePersonaAxis,
  cd_persona_fantasy_goblin_market_guide: adventurePersonaAxis,
  cd_persona_fantasy_cursed_sword_bearer: adventurePersonaAxis,
  cd_persona_fantasy_monster_loot_appraiser: adventurePersonaAxis,
  cd_persona_fantasy_griffin_mail_rider: adventurePersonaAxis,
  cd_persona_history_region_northern_lighthouse_keeper: adventurePersonaAxis,
  cd_persona_history_region_whale_hunter: adventurePersonaAxis,
  cd_persona_history_region_shieldmaiden: adventurePersonaAxis,
  cd_persona_history_region_island_fisher_boy: adventurePersonaAxis,
  cd_persona_wasteland_scrap_bike_messenger: adventurePersonaAxis,

  cd_persona_fantasy_shushan_sword_immortal: xianxiaPersonaAxis,
  cd_persona_yokai_beast_fox_immortal_courtesan: xianxiaPersonaAxis,
  cd_persona_yokai_beast_white_snake_bride: xianxiaPersonaAxis,
  cd_persona_divine_demonic_river_deity_scholar: xianxiaPersonaAxis,
  cd_persona_divine_demonic_mountain_god_orphan: xianxiaPersonaAxis,
  cd_persona_divine_demonic_forgotten_minor_god: xianxiaPersonaAxis,
  cd_persona_yokai_beast_beast_marked_bride: xianxiaPersonaAxis,
  cd_persona_yokai_beast_folk_monster_lawyer: xianxiaPersonaAxis,
  cd_persona_yokai_beast_animal_spirit_medium: xianxiaPersonaAxis,

  cd_persona_scifi_asteroid_miner: spaceOperaPersonaAxis,
  cd_persona_scifi_orbital_dock_forewoman: spaceOperaPersonaAxis,
  cd_persona_scifi_generation_ship_teacher: spaceOperaPersonaAxis,
  cd_persona_scifi_lunar_night_security: spaceOperaPersonaAxis,
  cd_persona_scifi_fleet_navigator_priest: spaceOperaPersonaAxis,
  cd_persona_scifi_space_elevator_attendant: spaceOperaPersonaAxis,
  cd_persona_scifi_colony_water_union_leader: spaceOperaPersonaAxis,
  cd_persona_scifi_cryo_wake_officer: spaceOperaPersonaAxis,
  cd_persona_divine_demonic_solar_cult_astronaut: spaceOperaPersonaAxis,
  cd_persona_divine_demonic_asteroid_shrine_keeper: spaceOperaPersonaAxis,

  cd_persona_infected_experiment_fever_dream_patient: dreamAxis,
  cd_persona_infected_experiment_worm_eye_oracle: dreamAxis,
  cd_persona_infected_experiment_fungal_network_oracle: dreamAxis,
  cd_persona_fantasy_dream_eater_handler: dreamAxis,
  cd_persona_fantasy_mirror_ballroom_prince: dreamAxis,
  cd_persona_fantasy_mirror_possession_heir: dreamAxis,
  cd_persona_undead_cursed_mirror_ghost_twin: dreamAxis,
  cd_persona_ritual_trance_drummer: dreamAxis,
  cd_persona_ritual_blind_oracle_priestess: dreamAxis,
  cd_persona_divine_demonic_failed_prophet_teacher: dreamAxis,

  cd_persona_institution_trauma_surgeon: psychologicalAxis,
  cd_persona_institution_future_memory_teacher: psychologicalAxis,
  cd_persona_music_celebrity_body_double: psychologicalAxis,
  cd_persona_undead_cursed_body_swap_actor: psychologicalAxis,
  cd_persona_cybernetic_altered_memory_wiped_assassin: psychologicalAxis,
  cd_persona_scifi_deepfake_scandal_actress: psychologicalAxis,
  cd_persona_scifi_data_confession_priest: psychologicalAxis,
  cd_persona_scifi_cloud_memory_funeral_director: psychologicalAxis,

  cd_persona_infected_experiment_mask_mark_worker: creaturePersonaAxis,
  cd_persona_infected_experiment_white_room_child: creaturePersonaAxis,
  cd_persona_infected_experiment_spore_eye_teacher: creaturePersonaAxis,
  cd_persona_infected_experiment_backup_body_prince: creaturePersonaAxis,
  cd_persona_infected_experiment_back_spine_symbiote: creaturePersonaAxis,
  cd_persona_infected_experiment_viral_bride: creaturePersonaAxis,
  cd_persona_infected_experiment_hospital_gown_runaway: creaturePersonaAxis,
  cd_persona_infected_experiment_contagion_nurse: creaturePersonaAxis,
  cd_persona_infected_experiment_lichen_face_widow: creaturePersonaAxis,
  cd_persona_infected_experiment_hive_voice_mother: creaturePersonaAxis,
  cd_persona_infected_experiment_duplicate_pop_idol: creaturePersonaAxis,
  cd_persona_infected_experiment_root_vein_farmer: creaturePersonaAxis,

  cd_persona_ritual_relic_bearer: cosmicHorrorAxis,
  cd_persona_scifi_transhuman_cult_leader: cosmicHorrorAxis,
  cd_persona_fashion_conceptual_black_cloak_figure: cosmicHorrorAxis,
  cd_persona_ritual_children_of_comet_teacher: cosmicHorrorAxis,
  cd_persona_ritual_interface_relic_keeper: cosmicHorrorAxis,
  cd_persona_ritual_forbidden_star_priest: cosmicHorrorAxis,
  cd_persona_divine_demonic_relic_body_curator: cosmicHorrorAxis,
  cd_persona_aristocracy_planetary_regent: cosmicHorrorAxis,
  cd_persona_ritual_cosmic_birth_chart_keeper: cosmicHorrorAxis,

  cd_persona_combat_wandering_swordsman: {
    genreTags: ['wuxia'],
    publicFilterTags: ['wuxia', 'jianghu', 'martial'],
    nativeTags: ['wuxia', 'martial', 'weapon'],
    compatibleGenres: ['wuxia', 'martial_arts', 'historical'],
    compatibleCultures: ['chinese_jianghu', 'sect_order', 'east_asian_historical'],
    compatibleSpaces: ['mountain', 'forest', 'road', 'street'],
    tags: ['precise_persona_axis', 'wuxia_persona']
  },
  cd_persona_combat_cold_sword_maiden: {
    genreTags: ['wuxia'],
    publicFilterTags: ['wuxia', 'jianghu', 'martial'],
    nativeTags: ['wuxia', 'martial', 'weapon'],
    compatibleGenres: ['wuxia', 'martial_arts', 'historical'],
    compatibleCultures: ['chinese_jianghu', 'sect_order', 'east_asian_historical'],
    compatibleSpaces: ['training_ground', 'courtyard', 'forest'],
    tags: ['precise_persona_axis', 'wuxia_persona']
  },
  cd_persona_combat_sect_senior_disciple: {
    genreTags: ['wuxia', 'xianxia'],
    publicFilterTags: ['wuxia', 'sect', 'martial'],
    nativeTags: ['wuxia', 'sect', 'training'],
    compatibleGenres: ['wuxia', 'martial_arts', 'xianxia'],
    compatibleCultures: ['chinese_jianghu', 'sect_order', 'mountain_monastery'],
    compatibleSpaces: ['training_ground', 'courtyard', 'mountain', 'temple'],
    tags: ['precise_persona_axis', 'wuxia_persona']
  },
  cd_persona_combat_poison_hidden_weapon_master: {
    genreTags: ['wuxia'],
    publicFilterTags: ['wuxia', 'jianghu', 'martial'],
    nativeTags: ['wuxia', 'martial', 'weapon'],
    compatibleGenres: ['wuxia', 'martial_arts', 'dark_fantasy'],
    compatibleCultures: ['chinese_jianghu', 'sect_order'],
    compatibleSpaces: ['street', 'courtyard', 'forest'],
    tags: ['precise_persona_axis', 'wuxia_persona']
  },
  cd_persona_combat_bamboo_forest_assassin: {
    genreTags: ['wuxia'],
    publicFilterTags: ['wuxia', 'jianghu', 'martial'],
    nativeTags: ['wuxia', 'martial', 'weapon'],
    compatibleGenres: ['wuxia', 'martial_arts'],
    compatibleCultures: ['chinese_jianghu'],
    compatibleSpaces: ['forest', 'mountain'],
    tags: ['precise_persona_axis', 'wuxia_persona']
  },
  cd_persona_combat_beggar_sect_master: {
    genreTags: ['wuxia'],
    publicFilterTags: ['wuxia', 'jianghu', 'sect'],
    nativeTags: ['wuxia', 'sect', 'martial'],
    compatibleGenres: ['wuxia', 'martial_arts'],
    compatibleCultures: ['chinese_jianghu', 'sect_order'],
    compatibleSpaces: ['street', 'market', 'courtyard'],
    tags: ['precise_persona_axis', 'wuxia_persona']
  },
  cd_persona_combat_shaolin_monk_fighter: {
    genreTags: ['wuxia', 'religious_ritual'],
    publicFilterTags: ['wuxia', 'sect', 'martial'],
    nativeTags: ['wuxia', 'martial', 'training'],
    compatibleGenres: ['wuxia', 'martial_arts', 'religious_ritual'],
    compatibleCultures: ['chinese_jianghu', 'mountain_monastery', 'sect_order'],
    compatibleSpaces: ['temple', 'training_ground', 'mountain'],
    tags: ['precise_persona_axis', 'wuxia_persona']
  },
  cd_persona_history_region_ming_jinyiwei: {
    genreTags: ['wuxia', 'historical', 'court'],
    publicFilterTags: ['wuxia', 'jianghu', 'historical'],
    nativeTags: ['wuxia', 'institution', 'weapon'],
    compatibleGenres: ['wuxia', 'historical', 'court'],
    compatibleCultures: ['chinese_jianghu', 'imperial_bureaucracy', 'east_asian_historical'],
    compatibleSpaces: ['street', 'palace', 'courtyard'],
    tags: ['precise_persona_axis', 'wuxia_persona']
  },
  cd_persona_history_region_jianghu_blade_doctor: {
    genreTags: ['wuxia', 'historical'],
    publicFilterTags: ['wuxia', 'jianghu', 'medical'],
    nativeTags: ['wuxia', 'medical', 'survival'],
    compatibleGenres: ['wuxia', 'historical'],
    compatibleCultures: ['chinese_jianghu', 'east_asian_historical'],
    compatibleSpaces: ['street', 'road', 'market'],
    tags: ['precise_persona_axis', 'wuxia_persona']
  },
  cd_persona_history_region_salt_smuggler_boatman: {
    genreTags: ['wuxia', 'adventure'],
    publicFilterTags: ['wuxia', 'jianghu', 'survival'],
    nativeTags: ['wuxia', 'movement', 'survival'],
    compatibleGenres: ['wuxia', 'historical', 'adventure'],
    compatibleCultures: ['chinese_jianghu', 'frontier_town'],
    compatibleSpaces: ['river', 'harbor', 'road'],
    tags: ['precise_persona_axis', 'wuxia_persona']
  },
  cd_persona_history_region_martial_monk_guard: {
    genreTags: ['wuxia', 'religious_ritual'],
    publicFilterTags: ['wuxia', 'martial', 'ritual'],
    nativeTags: ['wuxia', 'martial', 'ritual'],
    compatibleGenres: ['wuxia', 'martial_arts', 'religious_ritual'],
    compatibleCultures: ['mountain_monastery', 'religious_order', 'east_asian_historical'],
    compatibleSpaces: ['temple', 'training_ground', 'mountain'],
    tags: ['precise_persona_axis', 'wuxia_persona']
  },
  cd_persona_combat_imperial_guard_swordsman: {
    genreTags: ['wuxia', 'historical', 'court'],
    publicFilterTags: ['wuxia', 'jianghu', 'martial'],
    nativeTags: ['wuxia', 'martial', 'institution'],
    compatibleGenres: ['wuxia', 'martial_arts', 'historical'],
    compatibleCultures: ['chinese_jianghu', 'imperial_bureaucracy', 'east_asian_historical'],
    compatibleSpaces: ['palace', 'courtyard', 'street'],
    tags: ['precise_persona_axis', 'wuxia_persona']
  },
  cd_persona_combat_demonic_cult_saintess: {
    genreTags: ['wuxia', 'xianxia', 'dark_fantasy'],
    publicFilterTags: ['wuxia', 'jianghu', 'sect'],
    nativeTags: ['wuxia', 'sect', 'ritual'],
    compatibleGenres: ['wuxia', 'xianxia', 'dark_fantasy'],
    compatibleCultures: ['chinese_jianghu', 'sect_order', 'mythic_cult'],
    compatibleSpaces: ['temple', 'cave', 'mountain', 'courtyard'],
    tags: ['precise_persona_axis', 'wuxia_persona']
  },
  cd_persona_combat_retired_jianghu_innkeeper: {
    genreTags: ['wuxia', 'historical', 'adventure'],
    publicFilterTags: ['wuxia', 'jianghu', 'social'],
    nativeTags: ['wuxia', 'jianghu', 'survival'],
    compatibleGenres: ['wuxia', 'historical', 'adventure'],
    compatibleCultures: ['chinese_jianghu', 'frontier_town', 'east_asian_historical'],
    compatibleSpaces: ['street', 'market', 'road', 'interior'],
    tags: ['precise_persona_axis', 'wuxia_persona']
  },
  cd_persona_ritual_ritual_sword_priest: {
    genreTags: ['wuxia', 'xianxia', 'religious_ritual'],
    publicFilterTags: ['wuxia', 'xianxia', 'ritual'],
    nativeTags: ['wuxia', 'martial', 'ritual'],
    compatibleGenres: ['wuxia', 'xianxia', 'religious_ritual'],
    compatibleCultures: ['chinese_jianghu', 'east_asian_historical', 'mountain_monastery'],
    compatibleSpaces: ['temple', 'mountain', 'courtyard', 'training_ground'],
    tags: ['precise_persona_axis', 'wuxia_persona']
  },
  cd_persona_combat_imperial_palace_guard: {
    genreTags: ['wuxia', 'historical', 'court'],
    publicFilterTags: ['wuxia', 'martial', 'historical'],
    nativeTags: ['wuxia', 'martial', 'institution'],
    compatibleGenres: ['wuxia', 'martial_arts', 'historical'],
    compatibleCultures: ['imperial_bureaucracy', 'east_asian_historical', 'chinese_jianghu'],
    compatibleSpaces: ['palace', 'courtyard', 'training_ground'],
    tags: ['precise_persona_axis', 'wuxia_persona']
  },
  cd_persona_combat_sword_polisher: {
    genreTags: ['wuxia'],
    publicFilterTags: ['wuxia', 'jianghu', 'craft'],
    nativeTags: ['wuxia', 'weapon', 'craft'],
    compatibleGenres: ['wuxia', 'martial_arts', 'historical'],
    compatibleCultures: ['chinese_jianghu', 'east_asian_historical', 'sect_order'],
    compatibleSpaces: ['workshop', 'market', 'courtyard'],
    tags: ['precise_persona_axis', 'wuxia_persona']
  },
  cd_persona_ritual_daoist_talisman_master: {
    genreTags: ['wuxia', 'xianxia', 'religious_ritual'],
    publicFilterTags: ['wuxia', 'xianxia', 'ritual'],
    nativeTags: ['wuxia', 'ritual', 'symbol'],
    compatibleGenres: ['wuxia', 'xianxia', 'religious_ritual'],
    compatibleCultures: ['chinese_jianghu', 'east_asian_historical', 'mountain_monastery'],
    compatibleSpaces: ['temple', 'mountain', 'courtyard'],
    tags: ['precise_persona_axis', 'wuxia_persona']
  },
  cd_persona_ritual_mountain_hermit_adept: {
    genreTags: ['wuxia', 'xianxia'],
    publicFilterTags: ['wuxia', 'xianxia', 'sect'],
    nativeTags: ['wuxia', 'ritual', 'training'],
    compatibleGenres: ['wuxia', 'xianxia', 'religious_ritual'],
    compatibleCultures: ['chinese_jianghu', 'mountain_monastery', 'east_asian_historical'],
    compatibleSpaces: ['mountain', 'forest', 'temple', 'cave'],
    tags: ['precise_persona_axis', 'wuxia_persona']
  },
  cd_persona_ritual_paper_charm_exorcist: {
    genreTags: ['wuxia', 'xianxia', 'religious_ritual'],
    publicFilterTags: ['wuxia', 'xianxia', 'ritual'],
    nativeTags: ['wuxia', 'ritual', 'symbol'],
    compatibleGenres: ['wuxia', 'xianxia', 'religious_ritual', 'dark_fantasy'],
    compatibleCultures: ['chinese_jianghu', 'east_asian_historical', 'mountain_monastery'],
    compatibleSpaces: ['temple', 'street', 'courtyard', 'mountain'],
    tags: ['precise_persona_axis', 'wuxia_persona']
  },
  cd_persona_fashion_schiaparelli_surreal_muse: {
    ...abstractPersonaPatch,
    publicFilterTags: ['abstract', 'surreal', 'fashion'],
    nativeTags: ['abstract', 'symbol', 'surreal'],
    evidenceTags: ['abstract', 'symbol', 'gesture', 'mask', 'concept_photo']
  },
  cd_persona_fashion_margiela_anonymous_body: {
    ...abstractPersonaPatch,
    publicFilterTags: ['abstract', 'deconstruction', 'anti_fashion'],
    nativeTags: ['abstract', 'deconstruction', 'mask'],
    evidenceTags: ['abstract', 'deconstruction', 'mask', 'negative_space', 'anti_fashion']
  },
  cd_persona_fashion_comme_des_garcons_lump_model: {
    ...abstractPersonaPatch,
    nativeTags: ['abstract', 'deconstruction', 'geometry'],
    evidenceTags: ['abstract', 'geometry', 'deconstruction', 'material_idea']
  },
  cd_persona_fashion_deconstructed_office_lady: {
    ...abstractPersonaPatch,
    publicFilterTags: ['abstract', 'deconstruction', 'office'],
    nativeTags: ['abstract', 'deconstruction', 'institution'],
    evidenceTags: ['abstract', 'deconstruction', 'institution', 'costume']
  },
  cd_persona_fashion_runway_performance_artist: {
    ...abstractPersonaPatch,
    nativeTags: ['abstract', 'gesture', 'performance'],
    evidenceTags: ['abstract', 'gesture', 'deconstruction', 'performance']
  },
  cd_persona_fantasy_dream_divination_teacher: dreamPersonaPatch,
  cd_persona_ritual_dream_interpreter: dreamPersonaPatch,
  cd_persona_ritual_astrology_columnist: {
    ...dreamPersonaPatch,
    nativeTags: ['dream', 'oracle', 'knowledge'],
    evidenceTags: ['dream', 'oracle', 'symbol', 'star', 'threshold']
  },
  cd_persona_ritual_bone_diviner: {
    ...dreamPersonaPatch,
    nativeTags: ['dream', 'oracle', 'ritual'],
    evidenceTags: ['dream', 'oracle', 'symbol', 'trance', 'ritual']
  },
  cd_persona_fantasy_winter_changeling: {
    ...psychologicalPersonaPatch,
    nativeTags: ['identity', 'memory', 'isolation'],
    evidenceTags: ['identity', 'memory', 'isolation', 'threshold']
  },
  cd_persona_ritual_confessional_keeper: {
    ...psychologicalPersonaPatch,
    nativeTags: ['guilt', 'confession', 'secret'],
    evidenceTags: ['guilt', 'confession', 'secret', 'threshold', 'institution']
  },
  cd_persona_ritual_witch_trial_survivor: {
    ...psychologicalPersonaPatch,
    nativeTags: ['fear', 'trauma', 'identity'],
    evidenceTags: ['fear', 'trauma', 'identity', 'memory', 'institution']
  },
  cd_persona_ritual_ai_confessor: {
    ...psychologicalPersonaPatch,
    nativeTags: ['guilt', 'confession', 'technology'],
    evidenceTags: ['guilt', 'confession', 'technology', 'interface', 'secret'],
    compatibleGenres: ['psychological', 'science_fiction', 'posthuman', 'religious_ritual'],
    compatibleEras: ['near_future', 'far_future', 'timeless'],
    compatibleCultures: ['posthuman_city', 'institutional_modern', 'symbolic_stage']
  },
  cd_persona_fantasy_forbidden_star_astronomer: {
    ...cosmicHorrorPersonaPatch,
    nativeTags: ['cosmic', 'forbidden_star', 'unknown'],
    evidenceTags: ['cosmic', 'forbidden_star', 'unknown', 'star', 'scale']
  },
  cd_persona_divine_demonic_star_womb_priestess: cosmicHorrorPersonaPatch,
  cd_persona_divine_demonic_black_hole_monk: {
    ...cosmicHorrorPersonaPatch,
    nativeTags: ['cosmic', 'black_hole', 'void'],
    evidenceTags: ['cosmic', 'black_hole', 'void', 'scale', 'unknown']
  },
  cd_persona_divine_demonic_nebula_choir_girl: {
    ...cosmicHorrorPersonaPatch,
    nativeTags: ['cosmic', 'nebula', 'scale'],
    evidenceTags: ['cosmic', 'nebula', 'star', 'scale', 'unknown']
  },
  cd_persona_divine_demonic_void_baptized_child: {
    ...cosmicHorrorPersonaPatch,
    nativeTags: ['cosmic', 'void', 'ritual'],
    evidenceTags: ['cosmic', 'void', 'cult', 'ritual', 'unknown']
  },
  cd_persona_divine_demonic_galactic_relic_bearer: {
    ...cosmicHorrorPersonaPatch,
    nativeTags: ['cosmic', 'relic', 'scale'],
    evidenceTags: ['cosmic', 'galactic', 'relic', 'scale', 'unknown']
  },
  cd_persona_divine_demonic_planetary_oracle_queen: {
    ...cosmicHorrorPersonaPatch,
    nativeTags: ['cosmic', 'planetary', 'oracle'],
    evidenceTags: ['cosmic', 'planetary', 'oracle', 'scale', 'unknown']
  },
  cd_persona_wasteland_market_scrap_picker: {
    publicFilterTags: ['wasteland', 'survival', 'repair'],
    nativeTags: ['wasteland', 'survival', 'repair'],
    compatibleGenres: ['wasteland', 'post_apocalyptic', 'survival'],
    compatibleCultures: ['postapocalyptic_wasteland', 'frontier_survival'],
    compatibleSpaces: ['ruin', 'market', 'shelter'],
    tags: ['precise_persona_axis', 'wasteland_persona']
  },
  cd_persona_wasteland_roof_solar_scavenger: {
    publicFilterTags: ['wasteland', 'survival', 'repair'],
    nativeTags: ['wasteland', 'survival', 'technology'],
    compatibleGenres: ['wasteland', 'post_apocalyptic', 'survival'],
    compatibleCultures: ['postapocalyptic_wasteland', 'industrial_ruin'],
    compatibleSpaces: ['ruin', 'city', 'shelter'],
    tags: ['precise_persona_axis', 'wasteland_persona']
  },
  cd_persona_wasteland_hospital_scrap_nurse: {
    publicFilterTags: ['wasteland', 'survival', 'medical'],
    nativeTags: ['wasteland', 'survival', 'medical'],
    compatibleGenres: ['wasteland', 'post_apocalyptic', 'survival'],
    compatibleCultures: ['postapocalyptic_wasteland', 'medical_institution'],
    compatibleSpaces: ['ruin', 'hospital', 'shelter'],
    tags: ['precise_persona_axis', 'wasteland_persona']
  },
  cd_persona_wasteland_war_rig_mechanic: {
    publicFilterTags: ['wasteland', 'survival', 'repair'],
    nativeTags: ['wasteland', 'survival', 'repair'],
    compatibleGenres: ['wasteland', 'post_apocalyptic', 'survival'],
    compatibleCultures: ['postapocalyptic_wasteland', 'frontier_survival'],
    compatibleSpaces: ['road', 'desert', 'scrapyard'],
    tags: ['precise_persona_axis', 'wasteland_persona']
  },
  cd_persona_wasteland_goggle_road_scout: {
    publicFilterTags: ['wasteland', 'survival', 'travel'],
    nativeTags: ['wasteland', 'survival', 'movement'],
    compatibleGenres: ['wasteland', 'post_apocalyptic', 'survival'],
    compatibleCultures: ['postapocalyptic_wasteland', 'frontier_survival'],
    compatibleSpaces: ['road', 'desert', 'landscape'],
    tags: ['precise_persona_axis', 'wasteland_persona']
  },
  cd_persona_wasteland_lead_coat_doctor: {
    publicFilterTags: ['wasteland', 'survival', 'medical'],
    nativeTags: ['wasteland', 'survival', 'medical'],
    compatibleGenres: ['wasteland', 'post_apocalyptic', 'survival'],
    compatibleCultures: ['postapocalyptic_wasteland', 'medical_institution'],
    compatibleSpaces: ['shelter', 'ruin', 'containment'],
    tags: ['precise_persona_axis', 'wasteland_persona']
  },
};

const personaPatch = (item: LibraryItemDef): Partial<LibraryItemDef> | null => {
  if (precisePersonaPatches[item.id]) return precisePersonaPatches[item.id];
  const id = item.id || '';
  if (id.startsWith('cd_persona_fashion_')) {
    if (groupStarts(item, 'A') || groupStarts(item, 'B') || groupStarts(item, 'C') || groupStarts(item, 'E') || groupStarts(item, 'J')) {
      return modernMediaPatch;
    }
    if (groupStarts(item, 'I')) {
      return directGenrePatch(abstractPersonaPatch, ['abstract', 'surreal'], ['fashion_idol', 'religious_ritual', 'dark_fantasy']);
    }
    if (groupStarts(item, 'H')) {
      return directGenrePatch(abstractPersonaPatch, ['abstract', 'surreal'], ['fashion_idol']);
    }
    return compatibleOnly(modernMediaPatch, ['fashion_idol', 'urban_life']);
  }
  if (id.startsWith('cd_persona_street_')) {
    return compatibleOnly(modernStreetPatch, ['urban_life', 'fashion_idol', 'noir_crime']);
  }
  if (id.startsWith('cd_persona_music_')) {
    if (groupStarts(item, 'A') || groupStarts(item, 'I') || groupStarts(item, 'J')) return modernMediaPatch;
    if (groupStarts(item, 'D')) return directGenrePatch(scifiPatch, ['science_fiction'], ['fashion_idol', 'cyberpunk', 'urban_life']);
    return compatibleOnly(modernMediaPatch, ['fashion_idol', 'urban_life']);
  }
  if (id.startsWith('cd_persona_media_')) {
    if (id.includes('softcore')) {
      return compatibleOnly({
        ...modernMediaPatch,
        publicFilterTags: ['adult', 'fashion', 'media'],
        nativeTags: ['adult', 'media'],
        riskTags: ['adult']
      }, ['fashion_idol']);
    }
    if (groupStarts(item, 'A') || groupStarts(item, 'G') || groupStarts(item, 'H') || groupStarts(item, 'J')) return modernMediaPatch;
    if (groupStarts(item, 'E')) return directGenrePatch(institutionalPersonaPatch, ['real_professional'], ['urban_life', 'fashion_idol']);
    return compatibleOnly(modernMediaPatch, ['fashion_idol', 'urban_life']);
  }
  if (id.startsWith('cd_persona_social_life_')) {
    if (groupStarts(item, 'D')) return compatibleOnly(modernMediaPatch, ['urban_life', 'fashion_idol']);
    if (groupStarts(item, 'E')) return compatibleOnly(realSocialPatch, ['urban_life', 'noir_crime', 'post_apocalyptic']);
    if (groupStarts(item, 'C')) return directGenrePatch(realSocialPatch, ['urban_life'], ['romance']);
    return realSocialPatch;
  }
  if (id.startsWith('cd_persona_institution_')) return institutionalPersonaPatch;
  if (id.startsWith('cd_persona_ritual_')) {
    if (groupStarts(item, 'F') || groupStarts(item, 'J')) {
      return compatibleOnly(ritualDarkPatch, ['religious_ritual', 'dark_fantasy', 'horror', 'science_fiction']);
    }
    return ritualDarkPatch;
  }
  if (id.startsWith('cd_persona_aristocracy_')) {
    if (groupStarts(item, 'A')) return compatibleOnly(realSocialPatch, ['urban_life', 'fashion_idol', 'court']);
    if (groupStarts(item, 'G')) return directGenrePatch(institutionalPersonaPatch, ['real_professional'], ['urban_life', 'court']);
    if (groupStarts(item, 'I')) return directGenrePatch(mythicCreaturePatch, ['fantasy', 'court'], ['historical']);
    if (groupStarts(item, 'J')) return directGenrePatch(spaceColonyPersonaPatch, ['space_opera'], ['court', 'science_fiction']);
    return periodCourtPatch;
  }
  if (id.startsWith('cd_persona_history_region_')) return historicalRegionPatch;
  if (id.startsWith('cd_persona_scifi_')) return scifiPatch;
  if (id.startsWith('cd_persona_fantasy_')) return mythicCreaturePatch;
  if (id.startsWith('cd_persona_yokai_beast_')) {
    if (groupStarts(item, 'A')) return compatibleOnly(yokaiBeastPatch, ['fantasy', 'xianxia', 'creature']);
    if (groupStarts(item, 'I')) return directGenrePatch(yokaiBeastPatch, ['horror', 'surreal'], ['fantasy', 'urban_life']);
    return compatibleOnly(mythicCreaturePatch, ['fantasy', 'xianxia', 'horror', 'surreal', 'creature']);
  }
  if (id.startsWith('cd_persona_divine_demonic_')) {
    if (groupStarts(item, 'A') || groupStarts(item, 'F') || groupStarts(item, 'G')) {
      return directGenrePatch(divinePatch, ['mythic_epic'], ['religious_ritual', 'fantasy', 'xianxia']);
    }
    if (groupStarts(item, 'B') || groupStarts(item, 'D') || groupStarts(item, 'E') || groupStarts(item, 'J')) {
      return divinePatch;
    }
    if (groupStarts(item, 'C')) return directGenrePatch(undeadCursedPatch, ['dark_fantasy', 'horror'], ['religious_ritual', 'mythic_epic']);
    if (groupStarts(item, 'H')) return compatibleOnly(divinePatch, ['mythic_epic', 'urban_life', 'surreal']);
    if (groupStarts(item, 'I')) return cosmicHorrorPersonaPatch;
    return divinePatch;
  }
  if (id.startsWith('cd_persona_undead_cursed_')) return undeadCursedPatch;
  if (id.startsWith('cd_persona_cybernetic_altered_')) return cyberneticPersonaPatch;
  if (id.startsWith('cd_persona_infected_experiment_')) {
    if (groupStarts(item, 'A') || groupStarts(item, 'B') || groupStarts(item, 'G') || groupStarts(item, 'I')) {
      return bodyHorrorMutationPatch;
    }
    if (groupStarts(item, 'C') || groupStarts(item, 'F') || groupStarts(item, 'H') || groupStarts(item, 'J')) {
      return bioExperimentPatch;
    }
    if (groupStarts(item, 'D')) {
      return directGenrePatch(bioMutationPatch, ['creature'], ['biopunk', 'body_horror', 'science_fiction']);
    }
    if (groupStarts(item, 'E')) {
      return compatibleOnly(bioExperimentPatch, ['biopunk', 'body_horror', 'real_professional']);
    }
    return bioMutationPatch;
  }
  if (id.startsWith('cd_persona_wasteland_')) return wastelandPatch;
  return null;
};

export const withPersonaAxisMeta = (blockId: string, items: LibraryItemDef[]): LibraryItemDef[] => (
  items.map(item => {
    if (blockId !== 'cd_persona') return item;
    if (precisePersonaPatches[item.id]) return merge(item, precisePersonaPatches[item.id]);
    if (hasAxisMetadata(item)) return item;
    const patch = personaPatch(item);
    return patch ? merge(item, patch) : item;
  })
);
