import { LibraryItemDef } from '../../../types';

type VisibleBodyMode = 'SKIN' | 'SURFACE' | 'BODY_FEATURE' | 'BODY_MARKING' | 'BODY_DAMAGE' | 'BODY_MODIFICATION';
type CategoryFit = NonNullable<LibraryItemDef['categoryFit']>;
type CategoryFitListLevel = 'strong' | 'usable' | 'fusion' | 'weak' | 'exclude';

const allRealEras = [
  'primitive',
  'slave',
  'feudal',
  'early_modern',
  'industrial',
  'modern',
  'contemporary',
  'near_future',
  'far_future'
];

const uniq = (values: readonly string[]) => [...new Set(values.map(value => value.trim()).filter(Boolean))];

const toList = (value: unknown): string[] => {
  if (Array.isArray(value)) return value.map(String).map(item => item.trim()).filter(Boolean);
  if (typeof value === 'string' && value.trim()) return [value.trim()];
  return [];
};

const normalizeCategoryFit = (fit?: LibraryItemDef['categoryFit']): CategoryFit => {
  const merged = {
    unlisted: fit?.unlisted || 'none',
    strong: uniq(toList(fit?.strong)),
    usable: uniq(toList(fit?.usable)),
    fusion: uniq(toList(fit?.fusion)),
    weak: uniq(toList(fit?.weak)),
    exclude: uniq(toList(fit?.exclude))
  };
  const excludeSet = new Set(merged.exclude);
  const strongSet = new Set(merged.strong.filter(tag => !excludeSet.has(tag)));
  const usableSet = new Set(merged.usable.filter(tag => !excludeSet.has(tag) && !strongSet.has(tag)));
  const fusionSet = new Set(merged.fusion.filter(tag => !excludeSet.has(tag) && !strongSet.has(tag) && !usableSet.has(tag)));
  const weakSet = new Set(merged.weak.filter(tag => !excludeSet.has(tag) && !strongSet.has(tag) && !usableSet.has(tag) && !fusionSet.has(tag)));
  return {
    unlisted: merged.unlisted,
    strong: Array.from(strongSet),
    usable: Array.from(usableSet),
    fusion: Array.from(fusionSet),
    weak: Array.from(weakSet),
    exclude: merged.exclude
  };
};

const mergeCategoryFit = (
  base?: LibraryItemDef['categoryFit'],
  patch?: LibraryItemDef['categoryFit']
): CategoryFit => normalizeCategoryFit({
  unlisted: patch?.unlisted || base?.unlisted || 'none',
  strong: [...toList(base?.strong), ...toList(patch?.strong)],
  usable: [...toList(base?.usable), ...toList(patch?.usable)],
  fusion: [...toList(base?.fusion), ...toList(patch?.fusion)],
  weak: [...toList(base?.weak), ...toList(patch?.weak)],
  exclude: [...toList(base?.exclude), ...toList(patch?.exclude)]
});

const categoryFitFromLegacyGenres = (item: LibraryItemDef): CategoryFit => ({
  unlisted: 'none',
  strong: toList(item.genreTags),
  usable: toList(item.compatibleGenres),
  fusion: [],
  weak: [],
  exclude: toList(item.excludeGenreTags)
});

const ontologyRealityTags = (item: LibraryItemDef, base: readonly string[]): string[] => {
  const level = Number(item.ontologyLevel || 1);
  if (level <= 1) return [...base, 'physical', 'realistic'];
  if (level === 2) return [...base, 'physical', 'stylized', 'semi_real'];
  if (level === 3) return [...base, 'stylized', 'semi_surreal'];
  if (level === 4) return [...base, 'non_realist', 'surreal'];
  return [...base, 'abstract', 'surreal', 'symbolic'];
};

const keywordCategoryFit = (item: LibraryItemDef): CategoryFit => {
  const text = [
    item.id,
    item.name,
    item.nameEn,
    item.group,
    item.groupEn,
    item.def,
    item.defEn,
    ...toList(item.tags),
    ...toList(item.nativeTags),
    ...toList(item.publicFilterTags)
  ].filter(Boolean).join(' ').toLowerCase();
  const fit: CategoryFit = { unlisted: 'none', strong: [], usable: [], fusion: [], weak: [], exclude: [] };
  const add = (level: CategoryFitListLevel, tags: string[]) => {
    fit[level] = uniq([...toList(fit[level]), ...tags]);
  };
  const has = (pattern: RegExp) => pattern.test(text);
  if (has(/scar|scratch|bruise|cut|burn|wound|damage|blood|疤|伤|擦伤|淤青|割伤|烧伤|血/)) add('usable', ['war_military', 'wuxia', 'wasteland', 'noir_crime']);
  if (has(/dust|sand|mud|snow|rain|salt|weather|climate|desert|沙|尘|泥|雪|雨|盐|天气|荒漠/)) add('usable', ['adventure', 'wasteland', 'ecological']);
  if (has(/ritual|rune|seal|talisman|curse|sacred|prayer|stigmata|仪式|符文|封印|诅咒|圣|祷/)) add('usable', ['religious_ritual', 'xianxia', 'dark_fantasy']);
  if (has(/cyber|synthetic|implant|sensor|chip|barcode|qr|nfc|neural|mechanical|赛博|合成|植入|传感|芯片|条码|神经|机械/)) add('usable', ['science_fiction', 'cyberpunk', 'posthuman']);
  if (has(/bio|lab|injection|lesion|parasite|mycelium|fungal|symbiotic|生物|实验|注射|寄生|菌丝|共生/)) add('usable', ['biopunk', 'body_horror', 'science_fiction']);
  if (has(/plant|vine|flower|moss|bark|coral|scale|feather|animal|植物|藤|花|苔|树皮|珊瑚|鳞|羽|兽/)) add('usable', ['ecological', 'fantasy', 'creature']);
  if (has(/porcelain|doll|mirror|paper|glass|marble|void|shadow|人偶|镜|纸|玻璃|大理石|虚空|阴影/)) add('fusion', ['surreal', 'dream', 'body_horror']);
  return normalizeCategoryFit(fit);
};

const groupCategoryFit = (mode: VisibleBodyMode, group = ''): CategoryFit => {
  if (mode === 'SKIN') {
    if (group.startsWith('A.')) return { strong: [], usable: ['real_professional', 'romance', 'urban_life'], fusion: ['fashion_idol'], weak: [], exclude: [] };
    if (group.startsWith('B.')) return { strong: ['ecological'], usable: ['adventure', 'wasteland', 'wuxia'], fusion: ['fantasy'], weak: [], exclude: [] };
    if (group.startsWith('C.')) return { strong: [], usable: ['surreal', 'dream', 'dark_fantasy'], fusion: ['science_fiction', 'xianxia'], weak: ['real_professional'], exclude: [] };
  }
  if (mode === 'SURFACE') {
    if (group.startsWith('A.')) return { strong: [], usable: ['real_professional', 'urban_life', 'romance'], fusion: ['boudoir_aesthetic'], weak: [], exclude: [] };
    if (group.startsWith('B.')) return { strong: ['ecological'], usable: ['adventure', 'wasteland', 'wuxia'], fusion: ['xianxia'], weak: [], exclude: [] };
    if (group.startsWith('C.')) return { strong: [], usable: ['wasteland', 'war_military', 'science_fiction'], fusion: ['biopunk'], weak: ['court'], exclude: [] };
    if (group.startsWith('D.')) return { strong: [], usable: ['psychological', 'noir_crime', 'romance'], fusion: ['horror'], weak: [], exclude: [] };
  }
  if (mode === 'BODY_FEATURE') {
    if (group.startsWith('A.')) return { strong: [], usable: ['real_professional', 'urban_life', 'romance'], fusion: [], weak: [], exclude: [] };
    return { strong: ['body_horror'], usable: ['fantasy', 'dark_fantasy', 'creature', 'xianxia'], fusion: ['science_fiction', 'surreal'], weak: ['real_professional'], exclude: [] };
  }
  if (mode === 'BODY_MARKING') {
    if (group.startsWith('A.')) return { strong: [], usable: ['urban_life', 'fashion_idol', 'noir_crime'], fusion: ['wuxia'], weak: [], exclude: [] };
    if (group.startsWith('B.')) return { strong: ['real_professional'], usable: ['science_fiction', 'cyberpunk', 'wasteland'], fusion: ['war_military'], weak: [], exclude: [] };
    if (group.startsWith('C.')) return { strong: ['religious_ritual'], usable: ['xianxia', 'dark_fantasy', 'mythic_epic'], fusion: ['horror'], weak: ['urban_life'], exclude: [] };
    return { strong: [], usable: ['surreal', 'fashion_idol', 'psychological'], fusion: ['dark_fantasy'], weak: [], exclude: [] };
  }
  if (mode === 'BODY_DAMAGE') {
    if (group.startsWith('A.')) return { strong: [], usable: ['war_military', 'wuxia', 'wasteland', 'noir_crime'], fusion: ['romance'], weak: ['fashion_idol'], exclude: [] };
    if (group.startsWith('B.')) return { strong: ['science_fiction'], usable: ['biopunk', 'posthuman', 'body_horror'], fusion: ['horror'], weak: ['historical'], exclude: [] };
    if (group.startsWith('C.')) return { strong: [], usable: ['ecological', 'adventure', 'wasteland'], fusion: ['fantasy'], weak: [], exclude: [] };
    if (group.startsWith('D.')) return { strong: ['dark_fantasy'], usable: ['xianxia', 'religious_ritual', 'mythic_epic'], fusion: ['cosmic_horror'], weak: ['urban_life'], exclude: [] };
    return { strong: [], usable: ['psychological', 'surreal', 'cosmic_horror'], fusion: ['body_horror'], weak: [], exclude: [] };
  }
  if (mode === 'BODY_MODIFICATION') {
    if (group.startsWith('A.')) return { strong: ['real_professional'], usable: ['science_fiction', 'posthuman', 'urban_life'], fusion: ['war_military'], weak: [], exclude: [] };
    if (group.startsWith('B.')) return { strong: ['science_fiction'], usable: ['cyberpunk', 'posthuman'], fusion: ['body_horror'], weak: ['historical'], exclude: [] };
    if (group.startsWith('C.') || group.startsWith('D.')) return { strong: ['body_horror'], usable: ['fantasy', 'creature', 'biopunk', 'dark_fantasy'], fusion: ['xianxia', 'science_fiction'], weak: ['real_professional'], exclude: [] };
    if (group.startsWith('E.')) return { strong: ['surreal'], usable: ['dark_fantasy', 'fantasy', 'xianxia'], fusion: ['science_fiction'], weak: ['real_professional'], exclude: [] };
  }
  return { strong: [], usable: [], fusion: [], weak: [], exclude: [] };
};

const modeRealityTags = (mode: VisibleBodyMode, item: LibraryItemDef): string[] => {
  if (mode === 'SKIN') return ontologyRealityTags(item, ['visible_body', 'skin_material']);
  if (mode === 'SURFACE') return ontologyRealityTags(item, ['visible_body', 'surface_state', 'temporary_attachment']);
  if (mode === 'BODY_FEATURE') return ontologyRealityTags(item, ['visible_body', 'body_structure']);
  if (mode === 'BODY_MARKING') return ontologyRealityTags(item, ['visible_body', 'body_marking', 'symbolic_body']);
  if (mode === 'BODY_DAMAGE') return ontologyRealityTags(item, ['visible_body', 'body_damage']);
  return ontologyRealityTags(item, ['visible_body', 'body_modification', 'body_interface']);
};

type ManualVisibleBodyCoreMeta = {
  eraMode: NonNullable<LibraryItemDef['eraMode']>;
  eras: readonly string[];
  ontologyLevel: NonNullable<LibraryItemDef['ontologyLevel']>;
  realityTags: readonly string[];
  categoryFit: CategoryFit;
};

const fit = (
  unlisted: NonNullable<CategoryFit['unlisted']>,
  patch: Omit<CategoryFit, 'unlisted'> = {}
): CategoryFit => normalizeCategoryFit({ unlisted, ...patch });

const skinReality = ['visible_body', 'skin_material', 'physical', 'realistic', 'natural'];
const skinSemiSurrealReality = ['visible_body', 'skin_material', 'stylized', 'semi_surreal', 'material_shift'];
const skinNonRealReality = ['visible_body', 'skin_material', 'non_realist', 'surreal', 'material_shift'];
const skinAbstractReality = ['visible_body', 'skin_material', 'abstract', 'surreal', 'symbolic', 'material_shift'];

const surfaceReality = ['visible_body', 'surface_state', 'temporary_attachment', 'physical', 'realistic'];
const surfaceSemiRealReality = ['visible_body', 'surface_state', 'temporary_attachment', 'physical', 'realistic', 'semi_real'];

const mythicFutureEras = ['mythic', 'timeless', 'far_future'];
const mythicOnlyEras = ['mythic', 'timeless'];
const techFutureEras = ['near_future', 'far_future'];
const techTimelessEras = ['near_future', 'far_future', 'timeless'];
const modernFutureEras = ['industrial', 'modern', 'contemporary', 'near_future', 'far_future'];
const socialModernEras = ['industrial', 'modern', 'contemporary', 'near_future', 'far_future'];

const skinReal = (categoryFit = fit('usable')): ManualVisibleBodyCoreMeta => ({
  eraMode: 'universal',
  eras: allRealEras,
  ontologyLevel: 1,
  realityTags: skinReality,
  categoryFit
});

const skinBoundary = (
  eras: readonly string[],
  ontologyLevel: NonNullable<LibraryItemDef['ontologyLevel']>,
  realityTags: readonly string[],
  categoryFit: CategoryFit
): ManualVisibleBodyCoreMeta => ({
  eraMode: 'specific',
  eras,
  ontologyLevel,
  realityTags,
  categoryFit
});

const surfaceReal = (categoryFit = fit('usable')): ManualVisibleBodyCoreMeta => ({
  eraMode: 'universal',
  eras: allRealEras,
  ontologyLevel: 1,
  realityTags: surfaceReality,
  categoryFit
});

const surfaceSpecific = (
  eras: readonly string[],
  ontologyLevel: NonNullable<LibraryItemDef['ontologyLevel']>,
  realityTags: readonly string[],
  categoryFit: CategoryFit
): ManualVisibleBodyCoreMeta => ({
  eraMode: 'specific',
  eras,
  ontologyLevel,
  realityTags,
  categoryFit
});

const bodyStructureReality = ['visible_body', 'body_structure', 'physical', 'realistic'];
const bodyStructureSemiRealReality = ['visible_body', 'body_structure', 'stylized', 'semi_real', 'uncanny'];
const bodyStructureSemiSurrealReality = ['visible_body', 'body_structure', 'stylized', 'semi_surreal', 'uncanny'];
const bodyStructureNonRealReality = ['visible_body', 'body_structure', 'non_realist', 'surreal', 'anomalous_anatomy'];
const bodyStructureAbstractReality = ['visible_body', 'body_structure', 'abstract', 'surreal', 'symbolic', 'anomalous_anatomy'];

const bodyMarkReality = ['visible_body', 'body_marking', 'symbolic_body', 'physical', 'realistic'];
const bodyMarkSemiRealReality = ['visible_body', 'body_marking', 'symbolic_body', 'physical', 'stylized', 'semi_real'];
const bodyMarkSemiSurrealReality = ['visible_body', 'body_marking', 'symbolic_body', 'stylized', 'semi_surreal'];
const bodyMarkNonRealReality = ['visible_body', 'body_marking', 'symbolic_body', 'non_realist', 'surreal'];

const modernMarkEras = ['industrial', 'modern', 'contemporary', 'near_future', 'far_future'];
const techMarkEras = ['near_future', 'far_future'];
const ritualMarkEras = ['primitive', 'slave', 'feudal', 'early_modern', 'industrial', 'modern', 'contemporary', 'timeless', 'mythic'];

const bodyStructure = (
  eras: readonly string[],
  ontologyLevel: NonNullable<LibraryItemDef['ontologyLevel']>,
  realityTags: readonly string[],
  categoryFit: CategoryFit
): ManualVisibleBodyCoreMeta => ({
  eraMode: eras.length >= allRealEras.length ? 'universal' : 'specific',
  eras,
  ontologyLevel,
  realityTags,
  categoryFit
});

const bodyMark = (
  eras: readonly string[],
  ontologyLevel: NonNullable<LibraryItemDef['ontologyLevel']>,
  realityTags: readonly string[],
  categoryFit: CategoryFit
): ManualVisibleBodyCoreMeta => ({
  eraMode: eras.length >= allRealEras.length ? 'universal' : 'specific',
  eras,
  ontologyLevel,
  realityTags,
  categoryFit
});

const bodyDamageReality = ['visible_body', 'body_damage', 'physical', 'realistic'];
const bodyDamageSemiRealReality = ['visible_body', 'body_damage', 'physical', 'stylized', 'semi_real'];
const bodyDamageSemiSurrealReality = ['visible_body', 'body_damage', 'stylized', 'semi_surreal'];
const bodyDamageNonRealReality = ['visible_body', 'body_damage', 'non_realist', 'surreal'];
const bodyDamageAbstractReality = ['visible_body', 'body_damage', 'abstract', 'surreal', 'symbolic'];

const bodyModReality = ['visible_body', 'body_modification', 'body_interface', 'physical', 'realistic'];
const bodyModSemiRealReality = ['visible_body', 'body_modification', 'body_interface', 'physical', 'stylized', 'semi_real'];
const bodyModSemiSurrealReality = ['visible_body', 'body_modification', 'body_interface', 'stylized', 'semi_surreal'];
const bodyModNonRealReality = ['visible_body', 'body_modification', 'body_interface', 'non_realist', 'surreal'];
const bodyModAbstractReality = ['visible_body', 'body_modification', 'body_interface', 'abstract', 'surreal', 'symbolic'];

const medicalModernEras = ['industrial', 'modern', 'contemporary', 'near_future', 'far_future'];
const medicalDigitalEras = ['modern', 'contemporary', 'near_future', 'far_future'];

const bodyDamage = (
  eras: readonly string[],
  ontologyLevel: NonNullable<LibraryItemDef['ontologyLevel']>,
  realityTags: readonly string[],
  categoryFit: CategoryFit
): ManualVisibleBodyCoreMeta => ({
  eraMode: eras.length >= allRealEras.length ? 'universal' : 'specific',
  eras,
  ontologyLevel,
  realityTags,
  categoryFit
});

const bodyMod = (
  eras: readonly string[],
  ontologyLevel: NonNullable<LibraryItemDef['ontologyLevel']>,
  realityTags: readonly string[],
  categoryFit: CategoryFit
): ManualVisibleBodyCoreMeta => ({
  eraMode: eras.length >= allRealEras.length ? 'universal' : 'specific',
  eras,
  ontologyLevel,
  realityTags,
  categoryFit
});

const manualVisibleBodyCoreMeta: Record<string, ManualVisibleBodyCoreMeta> = {
  cd_skin_visible_pores: skinReal(),
  cd_skin_fine_texture: skinReal(fit('usable', { usable: ['fashion_idol', 'boudoir_aesthetic'] })),
  cd_skin_matte_skin: skinReal(fit('usable', { usable: ['fashion_idol', 'real_professional'] })),
  cd_skin_soft_skin: skinReal(fit('usable', { usable: ['romance', 'fashion_idol', 'boudoir_aesthetic'] })),
  cd_skin_rough_skin: skinReal(fit('usable', { usable: ['adventure', 'wasteland', 'war_military', 'wuxia', 'ecological'] })),
  cd_skin_thin_skin: skinReal(fit('usable', { usable: ['psychological', 'horror', 'romance'] })),
  cd_skin_thick_skin: skinReal(fit('usable', { usable: ['adventure', 'war_military', 'wuxia', 'real_professional'] })),
  cd_skin_weathered_skin: skinReal(fit('usable', { strong: ['adventure', 'ecological'], usable: ['wasteland', 'war_military', 'wuxia', 'historical'] })),
  cd_skin_well_kept_skin: skinReal(fit('usable', { strong: ['fashion_idol', 'boudoir_aesthetic'], usable: ['court', 'romance', 'real_professional'] })),
  cd_skin_fine_lines: skinReal(),
  cd_skin_deep_wrinkles: skinReal(fit('usable', { usable: ['historical', 'court', 'wasteland', 'psychological'] })),
  cd_skin_under_eye_texture: skinReal(fit('usable', { usable: ['psychological', 'noir_crime', 'horror', 'romance'] })),
  cd_skin_sun_spots: skinReal(fit('usable', { usable: ['adventure', 'ecological', 'wasteland', 'real_professional'] })),
  cd_skin_acne_marks: skinReal(),
  cd_skin_calloused_skin: skinReal(fit('usable', { strong: ['real_professional'], usable: ['adventure', 'wasteland', 'war_military', 'wuxia'] })),
  cd_skin_stretch_marks: skinReal(),
  cd_skin_cellulite: skinReal(),
  cd_skin_freckled_skin: skinReal(fit('usable', { usable: ['romance', 'adventure', 'ecological'] })),
  cd_skin_mole_pattern: skinReal(),
  cd_skin_birthmark_patch: skinReal(),
  cd_skin_vitiligo_patches: skinReal(),
  cd_skin_rosacea_redness: skinReal(fit('usable', { usable: ['romance', 'psychological', 'real_professional'] })),
  cd_skin_porcelain_skin: skinBoundary(mythicFutureEras, 4, skinNonRealReality, fit('none', { strong: ['surreal', 'fantasy'], usable: ['dark_fantasy', 'mythic_epic', 'xianxia', 'court'], fusion: ['science_fiction', 'posthuman'] })),
  cd_skin_wax_skin: skinBoundary(mythicFutureEras, 3, skinSemiSurrealReality, fit('none', { strong: ['surreal', 'horror'], usable: ['dark_fantasy', 'psychological', 'body_horror'] })),
  cd_skin_marble_skin: skinBoundary(mythicFutureEras, 4, skinNonRealReality, fit('none', { strong: ['mythic_epic', 'surreal'], usable: ['fantasy', 'dark_fantasy', 'court', 'xianxia'] })),
  cd_skin_jade_skin: skinBoundary(mythicOnlyEras, 4, skinNonRealReality, fit('none', { strong: ['xianxia', 'mythic_epic'], usable: ['fantasy', 'court', 'religious_ritual'] })),
  cd_skin_chrome_skin: skinBoundary(techTimelessEras, 4, skinNonRealReality, fit('none', { strong: ['science_fiction', 'cyberpunk', 'posthuman'], usable: ['fashion_idol'], fusion: ['surreal'] })),
  cd_skin_glass_skin_material: skinBoundary(['mythic', 'timeless', 'far_future'], 5, skinAbstractReality, fit('none', { strong: ['surreal', 'abstract'], usable: ['science_fiction', 'fantasy', 'body_horror'] })),
  cd_skin_bark_skin: skinBoundary(mythicFutureEras, 4, skinNonRealReality, fit('none', { strong: ['ecological', 'fantasy'], usable: ['creature', 'xianxia', 'mythic_epic', 'body_horror', 'biopunk'] })),
  cd_skin_scale_skin: skinBoundary(mythicFutureEras, 4, skinNonRealReality, fit('none', { strong: ['creature', 'fantasy'], usable: ['xianxia', 'mythic_epic', 'ecological', 'biopunk', 'body_horror', 'science_fiction'] })),
  cd_skin_biolum_skin: skinBoundary(['mythic', 'timeless', 'near_future', 'far_future'], 4, skinNonRealReality, fit('none', { strong: ['science_fiction', 'ecological'], usable: ['fantasy', 'creature', 'biopunk', 'posthuman', 'xianxia'] })),
  cd_skin_mycelium_skin: skinBoundary(['mythic', 'timeless', 'near_future', 'far_future'], 4, skinNonRealReality, fit('none', { strong: ['ecological', 'biopunk', 'body_horror'], usable: ['fantasy', 'dark_fantasy', 'horror', 'creature'] })),
  cd_skin_paper_thin_skin: skinReal(fit('usable', { usable: ['psychological', 'horror', 'dark_fantasy'] })),
  cd_skin_velvet_skin: skinReal(fit('usable', { strong: ['fashion_idol', 'boudoir_aesthetic'], usable: ['romance', 'court'] })),
  cd_skin_scar_tissue_skin: skinReal(fit('usable', { strong: ['war_military', 'wasteland'], usable: ['wuxia', 'noir_crime', 'adventure', 'body_horror'] })),
  cd_skin_iridescent_skin: skinBoundary(['mythic', 'timeless', 'near_future', 'far_future'], 4, skinNonRealReality, fit('none', { strong: ['science_fiction', 'surreal'], usable: ['fantasy', 'posthuman', 'fashion_idol', 'ecological'], fusion: ['cyberpunk', 'xianxia'] })),

  cd_surface_state_light_sweat: surfaceReal(fit('usable', { usable: ['romance', 'boudoir_aesthetic', 'war_military', 'real_professional'] })),
  cd_surface_state_heavy_sweat: surfaceReal(fit('usable', { usable: ['war_military', 'wuxia', 'adventure', 'wasteland', 'real_professional', 'boudoir_aesthetic'] })),
  cd_surface_state_oily_sheen: surfaceReal(),
  cd_surface_state_tear_tracks: surfaceReal(fit('usable', { strong: ['romance', 'psychological'], usable: ['noir_crime', 'horror', 'war_military'] })),
  cd_surface_state_saliva_shine: surfaceReal(fit('usable', { usable: ['boudoir_aesthetic', 'romance'] })),
  cd_surface_state_goosebumps: surfaceReal(fit('usable', { usable: ['horror', 'psychological', 'romance'] })),
  cd_surface_state_rain_wet: surfaceReal(fit('usable', { strong: ['adventure', 'romance'], usable: ['wuxia', 'wasteland', 'ecological', 'noir_crime'] })),
  cd_surface_state_dust_coating: surfaceReal(fit('usable', { strong: ['wasteland', 'adventure'], usable: ['wuxia', 'war_military', 'historical', 'ecological'] })),
  cd_surface_state_mud_splatter: surfaceReal(fit('usable', { strong: ['adventure'], usable: ['wuxia', 'wasteland', 'war_military', 'ecological'] })),
  cd_surface_state_sand_grain: surfaceReal(fit('usable', { strong: ['adventure', 'wasteland'], usable: ['ecological', 'war_military', 'historical'] })),
  cd_surface_state_snowflakes: surfaceReal(fit('usable', { strong: ['ecological', 'adventure'], usable: ['romance', 'wuxia', 'historical', 'wasteland'] })),
  cd_surface_state_salt_crust: surfaceReal(fit('usable', { usable: ['adventure', 'wasteland', 'ecological', 'real_professional'] })),
  cd_surface_state_mechanic_grease: surfaceSpecific(modernFutureEras, 1, surfaceReality, fit('none', { strong: ['real_professional'], usable: ['science_fiction', 'cyberpunk', 'wasteland', 'war_military', 'urban_life'] })),
  cd_surface_state_charcoal_smudge: surfaceReal(fit('usable', { usable: ['wasteland', 'war_military', 'historical', 'religious_ritual', 'dark_fantasy'] })),
  cd_surface_state_paint_splatter: surfaceReal(fit('usable', { strong: ['real_professional', 'urban_life'], usable: ['fashion_idol', 'surreal'] })),
  cd_surface_state_ink_stain: surfaceReal(fit('usable', { usable: ['real_professional', 'historical', 'court', 'noir_crime'] })),
  cd_surface_state_flour_powder: surfaceReal(fit('usable', { strong: ['real_professional'], usable: ['urban_life', 'historical'] })),
  cd_surface_state_chalk_marks: surfaceReal(fit('usable', { strong: ['real_professional'], usable: ['urban_life', 'fashion_idol'] })),
  cd_surface_state_blood_splatter: surfaceReal(fit('none', { strong: ['war_military', 'horror'], usable: ['wuxia', 'wasteland', 'noir_crime', 'dark_fantasy', 'adventure', 'body_horror'], fusion: ['romance'] })),
  cd_surface_state_nosebleed_trace: surfaceReal(fit('usable', { usable: ['war_military', 'wuxia', 'psychological', 'horror', 'science_fiction', 'biopunk'] })),
  cd_surface_state_iodine_stain: surfaceSpecific(modernFutureEras, 1, surfaceReality, fit('none', { strong: ['real_professional'], usable: ['war_military', 'horror', 'science_fiction', 'biopunk'] })),
  cd_surface_state_medical_tape_residue: surfaceSpecific(['modern', 'contemporary', 'near_future', 'far_future'], 1, surfaceReality, fit('none', { strong: ['real_professional'], usable: ['war_military', 'science_fiction', 'biopunk', 'horror', 'posthuman'] })),
  cd_surface_state_bandage_wrap: surfaceReal(fit('usable', { usable: ['war_military', 'wuxia', 'historical', 'wasteland', 'horror', 'real_professional'] })),
  cd_surface_state_ash_dusted: surfaceReal(fit('usable', { strong: ['religious_ritual', 'dark_fantasy'], usable: ['wasteland', 'war_military', 'historical', 'xianxia', 'adventure'] })),
  cd_surface_state_gold_powder: surfaceReal(fit('usable', { strong: ['religious_ritual', 'court', 'fashion_idol'], usable: ['mythic_epic', 'xianxia', 'boudoir_aesthetic'] })),
  cd_surface_state_glitter_particles: surfaceSpecific(socialModernEras, 1, surfaceReality, fit('none', { strong: ['fashion_idol', 'urban_life', 'boudoir_aesthetic'], usable: ['romance'] })),
  cd_surface_state_flower_petals: surfaceReal(fit('usable', { strong: ['romance', 'religious_ritual', 'xianxia'], usable: ['fantasy', 'mythic_epic', 'court', 'fashion_idol'] })),
  cd_surface_state_ritual_pigment: surfaceReal(fit('none', { strong: ['religious_ritual', 'mythic_epic'], usable: ['xianxia', 'dark_fantasy', 'wuxia', 'historical', 'fantasy'] })),
  cd_surface_state_sea_spray_wetness: surfaceReal(fit('usable', { strong: ['adventure', 'ecological'], usable: ['historical', 'wuxia', 'romance', 'wasteland'] })),
  cd_surface_state_desert_dust_mask: surfaceReal(fit('usable', { strong: ['wasteland', 'adventure', 'ecological'], usable: ['wuxia', 'historical', 'war_military'] })),
  cd_surface_state_rain_mixed_makeup: surfaceSpecific(socialModernEras, 1, surfaceReality, fit('none', { strong: ['romance', 'fashion_idol'], usable: ['urban_life', 'noir_crime', 'boudoir_aesthetic'] })),
  cd_surface_state_chemical_residue: surfaceSpecific(modernFutureEras, 2, surfaceSemiRealReality, fit('none', { strong: ['science_fiction', 'biopunk'], usable: ['real_professional', 'wasteland', 'cyberpunk', 'horror', 'posthuman'] })),
  cd_surface_state_metal_dust: surfaceSpecific(modernFutureEras, 1, surfaceReality, fit('none', { strong: ['real_professional', 'science_fiction'], usable: ['cyberpunk', 'wasteland', 'war_military', 'posthuman'] })),
  cd_surface_state_clay_smear: surfaceReal(fit('usable', { usable: ['real_professional', 'historical', 'ecological', 'adventure', 'court'] })),
  cd_surface_state_lipstick_transfer: surfaceSpecific(socialModernEras, 1, surfaceReality, fit('none', { strong: ['romance', 'boudoir_aesthetic'], usable: ['urban_life', 'fashion_idol', 'noir_crime'] })),
  cd_surface_state_confetti_bits: surfaceSpecific(socialModernEras, 1, surfaceReality, fit('none', { strong: ['urban_life', 'romance', 'fashion_idol'], usable: ['court'] })),

  cd_body_standard_human_structure: bodyStructure(allRealEras, 1, bodyStructureReality, fit('usable', { usable: ['real_professional', 'urban_life', 'romance', 'historical', 'court', 'war_military', 'wuxia', 'fashion_idol'] })),
  cd_body_subtle_uncanny_proportion: bodyStructure(['mythic', 'timeless', 'near_future', 'far_future'], 2, bodyStructureSemiSurrealReality, fit('none', { strong: ['surreal'], usable: ['fantasy', 'dark_fantasy', 'science_fiction', 'posthuman', 'horror'], fusion: ['fashion_idol'] })),
  cd_body_ritual_icon_body: bodyStructure(['mythic', 'timeless'], 3, bodyStructureSemiSurrealReality, fit('none', { strong: ['religious_ritual', 'mythic_epic'], usable: ['xianxia', 'fantasy', 'dark_fantasy', 'court'], fusion: ['surreal'] })),
  cd_body_puppet_body_structure: bodyStructure(['early_modern', 'industrial', 'modern', 'contemporary', 'mythic', 'timeless'], 3, bodyStructureSemiSurrealReality, fit('none', { strong: ['surreal', 'horror'], usable: ['dark_fantasy', 'religious_ritual', 'science_fiction', 'fashion_idol'] })),
  cd_body_two_heads: bodyStructure(['mythic', 'timeless', 'far_future'], 5, bodyStructureAbstractReality, fit('none', { strong: ['body_horror', 'mythic_epic'], usable: ['fantasy', 'dark_fantasy', 'science_fiction', 'biopunk', 'posthuman'] })),
  cd_body_three_faces_one_head: bodyStructure(['mythic', 'timeless', 'far_future'], 5, bodyStructureAbstractReality, fit('none', { strong: ['religious_ritual', 'mythic_epic', 'surreal'], usable: ['xianxia', 'dark_fantasy', 'fantasy', 'science_fiction'] })),
  cd_body_split_head_structure: bodyStructure(['mythic', 'timeless', 'far_future'], 5, bodyStructureAbstractReality, fit('none', { strong: ['body_horror', 'horror'], usable: ['dark_fantasy', 'science_fiction', 'biopunk', 'surreal'] })),
  cd_body_mask_head_stack: bodyStructure(['mythic', 'timeless', 'far_future'], 4, bodyStructureNonRealReality, fit('none', { strong: ['surreal', 'religious_ritual'], usable: ['dark_fantasy', 'mythic_epic', 'xianxia', 'science_fiction'] })),
  cd_body_extra_arm_pair: bodyStructure(['mythic', 'timeless', 'far_future'], 5, bodyStructureAbstractReality, fit('none', { strong: ['mythic_epic', 'body_horror'], usable: ['xianxia', 'fantasy', 'dark_fantasy', 'science_fiction', 'biopunk'] })),
  cd_body_six_armed_structure: bodyStructure(['mythic', 'timeless', 'far_future'], 5, bodyStructureAbstractReality, fit('none', { strong: ['religious_ritual', 'mythic_epic'], usable: ['xianxia', 'fantasy', 'dark_fantasy', 'science_fiction', 'body_horror'] })),
  cd_body_asymmetric_extra_arm: bodyStructure(['mythic', 'timeless', 'far_future'], 5, bodyStructureAbstractReality, fit('none', { strong: ['body_horror'], usable: ['dark_fantasy', 'horror', 'science_fiction', 'biopunk', 'fantasy'] })),
  cd_body_tiny_secondary_arms: bodyStructure(['mythic', 'timeless', 'far_future'], 5, bodyStructureAbstractReality, fit('none', { strong: ['body_horror'], usable: ['religious_ritual', 'science_fiction', 'biopunk', 'dark_fantasy', 'fantasy'] })),
  cd_body_arm_wing_hybrid: bodyStructure(['mythic', 'timeless', 'far_future'], 4, bodyStructureNonRealReality, fit('none', { strong: ['fantasy', 'mythic_epic'], usable: ['xianxia', 'dark_fantasy', 'science_fiction', 'biopunk', 'ecological'] })),
  cd_body_elongated_spine: bodyStructure(['mythic', 'timeless', 'far_future'], 4, bodyStructureNonRealReality, fit('none', { strong: ['body_horror', 'surreal'], usable: ['dark_fantasy', 'horror', 'science_fiction', 'biopunk'] })),
  cd_body_exposed_spine_ridge: bodyStructure(['mythic', 'timeless', 'far_future'], 4, bodyStructureNonRealReality, fit('none', { strong: ['body_horror'], usable: ['dark_fantasy', 'horror', 'science_fiction', 'biopunk', 'war_military'] })),
  cd_body_inverted_torso_joint: bodyStructure(['mythic', 'timeless', 'far_future'], 5, bodyStructureAbstractReality, fit('none', { strong: ['body_horror', 'horror'], usable: ['dark_fantasy', 'surreal', 'science_fiction', 'biopunk'] })),
  cd_body_hollow_chest_structure: bodyStructure(['mythic', 'timeless', 'far_future'], 5, bodyStructureAbstractReality, fit('none', { strong: ['religious_ritual', 'surreal', 'body_horror'], usable: ['dark_fantasy', 'mythic_epic', 'science_fiction'] })),
  cd_body_transparent_torso_void: bodyStructure(['mythic', 'timeless', 'far_future'], 5, bodyStructureAbstractReality, fit('none', { strong: ['surreal', 'body_horror'], usable: ['science_fiction', 'posthuman', 'dark_fantasy', 'abstract'] })),
  cd_body_centaur_lower_body: bodyStructure(['mythic', 'timeless', 'far_future'], 5, bodyStructureAbstractReality, fit('none', { strong: ['fantasy', 'mythic_epic'], usable: ['xianxia', 'ecological', 'science_fiction'] })),
  cd_body_serpent_lower_body: bodyStructure(['mythic', 'timeless', 'far_future'], 5, bodyStructureAbstractReality, fit('none', { strong: ['fantasy', 'mythic_epic', 'dark_fantasy'], usable: ['xianxia', 'religious_ritual', 'body_horror', 'science_fiction'] })),
  cd_body_merfolk_lower_body: bodyStructure(['mythic', 'timeless', 'far_future'], 5, bodyStructureAbstractReality, fit('none', { strong: ['fantasy', 'mythic_epic'], usable: ['ecological', 'romance', 'science_fiction', 'biopunk'] })),
  cd_body_arachnid_lower_body: bodyStructure(['mythic', 'timeless', 'far_future'], 5, bodyStructureAbstractReality, fit('none', { strong: ['body_horror', 'horror'], usable: ['dark_fantasy', 'fantasy', 'science_fiction', 'biopunk'] })),
  cd_body_hoofed_lower_body: bodyStructure(['mythic', 'timeless', 'far_future'], 4, bodyStructureNonRealReality, fit('none', { strong: ['fantasy', 'dark_fantasy'], usable: ['mythic_epic', 'religious_ritual', 'ecological', 'body_horror'] })),
  cd_body_reverse_joint_legs: bodyStructure(['mythic', 'timeless', 'far_future'], 4, bodyStructureNonRealReality, fit('none', { strong: ['fantasy', 'body_horror'], usable: ['dark_fantasy', 'science_fiction', 'biopunk', 'ecological'] })),
  cd_body_floating_limb_structure: bodyStructure(['mythic', 'timeless', 'far_future'], 5, bodyStructureAbstractReality, fit('none', { strong: ['surreal', 'science_fiction'], usable: ['xianxia', 'religious_ritual', 'fantasy', 'posthuman'] })),
  cd_body_segmented_body_structure: bodyStructure(['mythic', 'timeless', 'far_future'], 5, bodyStructureAbstractReality, fit('none', { strong: ['body_horror', 'science_fiction'], usable: ['biopunk', 'posthuman', 'dark_fantasy', 'fantasy'] })),
  cd_body_nested_body_structure: bodyStructure(['mythic', 'timeless', 'far_future'], 5, bodyStructureAbstractReality, fit('none', { strong: ['body_horror', 'surreal'], usable: ['horror', 'dark_fantasy', 'biopunk', 'science_fiction'] })),
  cd_body_body_as_container: bodyStructure(['mythic', 'timeless', 'far_future'], 5, bodyStructureAbstractReality, fit('none', { strong: ['surreal', 'religious_ritual'], usable: ['dark_fantasy', 'science_fiction', 'posthuman', 'body_horror'] })),
  cd_body_plant_root_skeleton: bodyStructure(['mythic', 'timeless', 'far_future'], 5, bodyStructureAbstractReality, fit('none', { strong: ['ecological', 'fantasy'], usable: ['xianxia', 'mythic_epic', 'biopunk', 'body_horror'] })),
  cd_body_crystal_bone_structure: bodyStructure(['mythic', 'timeless', 'far_future'], 5, bodyStructureAbstractReality, fit('none', { strong: ['fantasy', 'xianxia'], usable: ['mythic_epic', 'science_fiction', 'surreal', 'body_horror'] })),
  cd_body_mechanical_skeleton_frame: bodyStructure(['near_future', 'far_future'], 5, bodyStructureAbstractReality, fit('none', { strong: ['science_fiction', 'posthuman', 'cyberpunk'], usable: ['war_military', 'body_horror'] })),
  cd_body_bone_cage_frame: bodyStructure(['mythic', 'timeless', 'far_future'], 5, bodyStructureAbstractReality, fit('none', { strong: ['body_horror', 'dark_fantasy'], usable: ['horror', 'religious_ritual', 'mythic_epic', 'surreal'] })),
  cd_body_swarm_humanoid_structure: bodyStructure(['mythic', 'timeless', 'far_future'], 5, bodyStructureAbstractReality, fit('none', { strong: ['body_horror', 'surreal'], usable: ['horror', 'biopunk', 'science_fiction', 'dark_fantasy', 'ecological'] })),
  cd_body_many_eyes_body_axis: bodyStructure(['mythic', 'timeless', 'far_future'], 5, bodyStructureAbstractReality, fit('none', { strong: ['body_horror', 'horror', 'religious_ritual'], usable: ['dark_fantasy', 'surreal', 'mythic_epic', 'science_fiction'] })),
  cd_body_choir_body_structure: bodyStructure(['mythic', 'timeless', 'far_future'], 5, bodyStructureAbstractReality, fit('none', { strong: ['body_horror', 'religious_ritual'], usable: ['horror', 'dark_fantasy', 'surreal', 'mythic_epic'] })),
  cd_body_fused_twin_body: bodyStructure(['mythic', 'timeless', 'far_future'], 5, bodyStructureAbstractReality, fit('none', { strong: ['body_horror'], usable: ['horror', 'surreal', 'dark_fantasy', 'biopunk', 'science_fiction'] })),

  cd_body_mark_small_tattoo: bodyMark(modernMarkEras, 1, bodyMarkReality, fit('usable', { usable: ['urban_life', 'fashion_idol', 'romance'] })),
  cd_body_mark_full_sleeve_tattoo: bodyMark(modernMarkEras, 1, bodyMarkReality, fit('none', { strong: ['urban_life', 'noir_crime'], usable: ['fashion_idol', 'war_military'] })),
  cd_body_mark_back_piece_tattoo: bodyMark(['early_modern', 'industrial', 'modern', 'contemporary', 'near_future', 'far_future', 'timeless'], 1, bodyMarkReality, fit('none', { strong: ['noir_crime', 'religious_ritual'], usable: ['mythic_epic', 'urban_life', 'wuxia', 'dark_fantasy'] })),
  cd_body_mark_neck_tattoo: bodyMark(modernMarkEras, 1, bodyMarkReality, fit('none', { strong: ['urban_life', 'noir_crime'], usable: ['fashion_idol'] })),
  cd_body_mark_knuckle_letters: bodyMark(modernMarkEras, 1, bodyMarkReality, fit('none', { strong: ['noir_crime', 'urban_life'], usable: ['war_military', 'wasteland'] })),
  cd_body_mark_serial_number_tattoo: bodyMark(['industrial', 'modern', 'contemporary', 'near_future', 'far_future'], 2, bodyMarkSemiRealReality, fit('none', { strong: ['science_fiction', 'real_professional'], usable: ['cyberpunk', 'posthuman', 'wasteland', 'noir_crime'] })),
  cd_body_mark_barcode_mark: bodyMark(['modern', 'contemporary', 'near_future', 'far_future'], 2, bodyMarkSemiRealReality, fit('none', { strong: ['cyberpunk', 'science_fiction'], usable: ['posthuman', 'real_professional'] })),
  cd_body_mark_white_ink_tattoo: bodyMark(modernMarkEras, 1, bodyMarkReality, fit('usable', { usable: ['fashion_idol', 'urban_life', 'surreal'] })),
  cd_body_mark_henna_hands: bodyMark(ritualMarkEras, 1, bodyMarkReality, fit('none', { strong: ['romance', 'religious_ritual'], usable: ['court', 'historical', 'urban_life'] })),
  cd_body_mark_ritual_body_paint: bodyMark(ritualMarkEras, 1, bodyMarkReality, fit('none', { strong: ['religious_ritual', 'mythic_epic'], usable: ['wuxia', 'war_military', 'historical', 'dark_fantasy', 'fantasy'] })),
  cd_body_mark_war_paint_body: bodyMark(ritualMarkEras, 1, bodyMarkReality, fit('none', { strong: ['war_military'], usable: ['wuxia', 'historical', 'religious_ritual', 'mythic_epic', 'wasteland'] })),
  cd_body_mark_prayer_marks: bodyMark(ritualMarkEras, 1, bodyMarkReality, fit('none', { strong: ['religious_ritual'], usable: ['xianxia', 'mythic_epic', 'historical', 'dark_fantasy'] })),
  cd_body_mark_scarification_pattern: bodyMark(allRealEras, 1, bodyMarkReality, fit('none', { strong: ['religious_ritual'], usable: ['historical', 'mythic_epic', 'wasteland', 'body_horror'] })),
  cd_body_mark_branding_mark: bodyMark(allRealEras, 1, bodyMarkReality, fit('none', { strong: ['historical'], usable: ['court', 'war_military', 'wasteland', 'religious_ritual', 'dark_fantasy'] })),
  cd_body_mark_carved_runes: bodyMark(['mythic', 'timeless'], 3, bodyMarkSemiSurrealReality, fit('none', { strong: ['fantasy', 'religious_ritual', 'dark_fantasy'], usable: ['xianxia', 'mythic_epic', 'body_horror'] })),
  cd_body_mark_uv_tattoo: bodyMark(['modern', 'contemporary', 'near_future', 'far_future'], 2, bodyMarkSemiRealReality, fit('none', { strong: ['fashion_idol', 'science_fiction'], usable: ['cyberpunk', 'urban_life', 'biopunk'] })),
  cd_body_mark_glowing_body_lines: bodyMark(['mythic', 'timeless', 'near_future', 'far_future'], 3, bodyMarkSemiSurrealReality, fit('none', { strong: ['science_fiction', 'fantasy'], usable: ['xianxia', 'cyberpunk', 'posthuman', 'religious_ritual', 'biopunk'] })),
  cd_body_mark_circuit_tattoo: bodyMark(['modern', 'contemporary', 'near_future', 'far_future'], 2, bodyMarkSemiRealReality, fit('none', { strong: ['science_fiction', 'cyberpunk'], usable: ['posthuman', 'fashion_idol'] })),
  cd_body_mark_collarbone_script: bodyMark(modernMarkEras, 1, bodyMarkReality, fit('none', { strong: ['fashion_idol', 'romance'], usable: ['urban_life', 'boudoir_aesthetic'] })),
  cd_body_mark_spine_script: bodyMark(modernMarkEras, 1, bodyMarkReality, fit('none', { usable: ['fashion_idol', 'romance', 'religious_ritual', 'urban_life'] })),
  cd_body_mark_wrist_date: bodyMark(modernMarkEras, 1, bodyMarkReality, fit('none', { strong: ['romance'], usable: ['urban_life', 'real_professional', 'noir_crime'] })),
  cd_body_mark_shoulder_emblem: bodyMark(modernMarkEras, 1, bodyMarkReality, fit('none', { strong: ['war_military', 'noir_crime'], usable: ['real_professional', 'urban_life'] })),
  cd_body_mark_finger_tattoo: bodyMark(modernMarkEras, 1, bodyMarkReality, fit('none', { usable: ['urban_life', 'fashion_idol', 'romance', 'noir_crime'] })),
  cd_body_mark_behind_ear_tattoo: bodyMark(modernMarkEras, 1, bodyMarkReality, fit('none', { usable: ['fashion_idol', 'romance', 'urban_life'] })),
  cd_body_mark_lower_back_tattoo: bodyMark(modernMarkEras, 1, bodyMarkReality, fit('none', { strong: ['fashion_idol', 'boudoir_aesthetic'], usable: ['urban_life', 'romance'] })),
  cd_body_mark_minimal_line_tattoo: bodyMark(modernMarkEras, 1, bodyMarkReality, fit('usable', { strong: ['fashion_idol'], usable: ['urban_life', 'romance'] })),
  cd_body_mark_old_school_tattoo: bodyMark(['industrial', 'modern', 'contemporary', 'timeless'], 1, bodyMarkReality, fit('none', { strong: ['urban_life'], usable: ['noir_crime', 'romance', 'war_military'] })),
  cd_body_mark_blackwork_tattoo: bodyMark(modernMarkEras, 1, bodyMarkReality, fit('none', { strong: ['fashion_idol'], usable: ['urban_life', 'noir_crime', 'horror', 'dark_fantasy'] })),
  cd_body_mark_japanese_irezumi: bodyMark(['early_modern', 'industrial', 'modern', 'contemporary', 'timeless'], 1, bodyMarkReality, fit('none', { strong: ['noir_crime', 'historical'], usable: ['wuxia', 'mythic_epic', 'religious_ritual', 'urban_life'] })),
  cd_body_mark_prison_tattoo: bodyMark(modernMarkEras, 1, bodyMarkReality, fit('none', { strong: ['noir_crime'], usable: ['wasteland', 'urban_life'], weak: ['fashion_idol'] })),
  cd_body_mark_cult_symbol_tattoo: bodyMark(allRealEras, 2, bodyMarkSemiRealReality, fit('none', { strong: ['religious_ritual'], usable: ['dark_fantasy', 'horror', 'noir_crime', 'mythic_epic'] })),
  cd_body_mark_pilgrimage_stamp: bodyMark(ritualMarkEras, 1, bodyMarkReality, fit('none', { strong: ['religious_ritual'], usable: ['historical', 'adventure', 'xianxia'] })),
  cd_body_mark_festival_body_paint: bodyMark(socialModernEras, 1, bodyMarkReality, fit('none', { strong: ['urban_life', 'fashion_idol'], usable: ['religious_ritual', 'romance'] })),
  cd_body_mark_mourning_mark: bodyMark(ritualMarkEras, 1, bodyMarkReality, fit('none', { strong: ['religious_ritual'], usable: ['historical', 'romance', 'court', 'dark_fantasy'] })),
  cd_body_mark_initiation_mark: bodyMark(allRealEras, 1, bodyMarkReality, fit('none', { strong: ['religious_ritual'], usable: ['wuxia', 'xianxia', 'historical', 'noir_crime', 'war_military'] })),
  cd_body_mark_protective_talisman_mark: bodyMark(ritualMarkEras, 1, bodyMarkReality, fit('none', { strong: ['religious_ritual', 'xianxia'], usable: ['fantasy', 'mythic_epic', 'dark_fantasy', 'wuxia'] })),
  cd_body_mark_slave_mark: bodyMark(allRealEras, 1, bodyMarkReality, fit('none', { strong: ['historical'], usable: ['court', 'war_military', 'wasteland', 'dark_fantasy'], weak: ['romance'] })),
  cd_body_mark_rank_brand: bodyMark(allRealEras, 1, bodyMarkReality, fit('none', { strong: ['court', 'historical'], usable: ['war_military', 'real_professional', 'science_fiction', 'wasteland'] })),
  cd_body_mark_penance_scars: bodyMark(allRealEras, 1, bodyMarkReality, fit('none', { strong: ['religious_ritual'], usable: ['dark_fantasy', 'historical', 'body_horror'] })),
  cd_body_mark_victory_notches: bodyMark(allRealEras, 1, bodyMarkReality, fit('none', { strong: ['war_military'], usable: ['wuxia', 'adventure', 'historical', 'wasteland'] })),
  cd_body_mark_ritual_cuts: bodyMark(allRealEras, 1, bodyMarkReality, fit('none', { strong: ['religious_ritual'], usable: ['dark_fantasy', 'body_horror', 'mythic_epic', 'xianxia'] })),
  cd_body_mark_inked_coordinates: bodyMark(modernMarkEras, 1, bodyMarkReality, fit('none', { usable: ['romance', 'adventure', 'science_fiction', 'noir_crime', 'urban_life'] })),
  cd_body_mark_constellation_tattoo: bodyMark(modernMarkEras, 1, bodyMarkReality, fit('none', { usable: ['romance', 'fashion_idol', 'surreal', 'mythic_epic'] })),
  cd_body_mark_botanical_tattoo: bodyMark(modernMarkEras, 1, bodyMarkReality, fit('none', { strong: ['ecological'], usable: ['fashion_idol', 'romance', 'fantasy', 'religious_ritual'] })),
  cd_body_mark_animal_totem_tattoo: bodyMark(ritualMarkEras, 1, bodyMarkReality, fit('none', { strong: ['religious_ritual', 'mythic_epic'], usable: ['fantasy', 'ecological', 'war_military', 'historical'] })),
  cd_body_mark_sports_tape_mark: bodyMark(socialModernEras, 1, bodyMarkReality, fit('none', { strong: ['real_professional'], usable: ['war_military', 'urban_life', 'fashion_idol'] })),
  cd_body_mark_military_blood_type: bodyMark(['industrial', 'modern', 'contemporary', 'near_future', 'far_future'], 1, bodyMarkReality, fit('none', { strong: ['war_military'], usable: ['science_fiction', 'wasteland', 'real_professional'] })),
  cd_body_mark_worker_stamp: bodyMark(['industrial', 'modern', 'contemporary', 'near_future', 'far_future'], 1, bodyMarkReality, fit('none', { strong: ['real_professional'], usable: ['science_fiction', 'cyberpunk', 'wasteland', 'urban_life'] })),
  cd_body_mark_club_entry_stamp: bodyMark(socialModernEras, 1, bodyMarkReality, fit('none', { strong: ['urban_life'], usable: ['fashion_idol', 'romance', 'boudoir_aesthetic'] })),
  cd_body_mark_hospital_patient_mark: bodyMark(['industrial', 'modern', 'contemporary', 'near_future', 'far_future'], 1, bodyMarkReality, fit('none', { strong: ['real_professional'], usable: ['science_fiction', 'biopunk', 'horror'] })),
  cd_body_mark_fashion_fitting_marks: bodyMark(socialModernEras, 1, bodyMarkReality, fit('none', { strong: ['fashion_idol', 'real_professional'], usable: ['boudoir_aesthetic', 'urban_life'] })),
  cd_body_mark_subdermal_id_chip_mark: bodyMark(techMarkEras, 3, bodyMarkSemiSurrealReality, fit('none', { strong: ['science_fiction', 'cyberpunk'], usable: ['posthuman', 'real_professional'] })),
  cd_body_mark_qr_skin_print: bodyMark(techMarkEras, 3, bodyMarkSemiSurrealReality, fit('none', { strong: ['cyberpunk', 'science_fiction'], usable: ['posthuman', 'real_professional'] })),
  cd_body_mark_nfc_wrist_mark: bodyMark(techMarkEras, 2, bodyMarkSemiRealReality, fit('none', { strong: ['science_fiction', 'cyberpunk'], usable: ['urban_life', 'real_professional', 'posthuman'] })),
  cd_body_mark_biometric_dots: bodyMark(['modern', 'contemporary', 'near_future', 'far_future'], 2, bodyMarkSemiRealReality, fit('none', { strong: ['science_fiction', 'real_professional'], usable: ['cyberpunk', 'posthuman', 'fashion_idol'] })),
  cd_body_mark_glowing_runes: bodyMark(['mythic', 'timeless', 'near_future', 'far_future'], 4, bodyMarkNonRealReality, fit('none', { strong: ['fantasy', 'xianxia', 'religious_ritual'], usable: ['dark_fantasy', 'mythic_epic', 'science_fiction', 'cyberpunk'] })),
  cd_body_mark_nanotattoo: bodyMark(techMarkEras, 3, bodyMarkSemiSurrealReality, fit('none', { strong: ['science_fiction', 'cyberpunk'], usable: ['posthuman', 'fashion_idol'] })),
  cd_body_mark_living_tattoo: bodyMark(['mythic', 'timeless', 'far_future'], 4, bodyMarkNonRealReality, fit('none', { strong: ['fantasy', 'body_horror'], usable: ['dark_fantasy', 'biopunk', 'xianxia', 'horror'] })),
  cd_body_mark_cursed_seal: bodyMark(['mythic', 'timeless', 'far_future'], 4, bodyMarkNonRealReality, fit('none', { strong: ['dark_fantasy', 'religious_ritual'], usable: ['xianxia', 'fantasy', 'body_horror', 'horror'] })),
  cd_body_mark_angelic_sigils: bodyMark(['mythic', 'timeless', 'far_future'], 4, bodyMarkNonRealReality, fit('none', { strong: ['religious_ritual', 'mythic_epic'], usable: ['fantasy', 'xianxia', 'surreal'] })),
  cd_body_mark_demonic_contract_mark: bodyMark(['mythic', 'timeless', 'far_future'], 4, bodyMarkNonRealReality, fit('none', { strong: ['dark_fantasy', 'religious_ritual'], usable: ['horror', 'fantasy', 'body_horror'] })),
  cd_body_mark_clone_batch_mark: bodyMark(techMarkEras, 3, bodyMarkSemiSurrealReality, fit('none', { strong: ['science_fiction', 'posthuman'], usable: ['cyberpunk', 'biopunk', 'real_professional'] })),
  cd_body_mark_lab_specimen_grid: bodyMark(['modern', 'contemporary', 'near_future', 'far_future'], 3, bodyMarkSemiSurrealReality, fit('none', { strong: ['science_fiction', 'biopunk'], usable: ['real_professional', 'posthuman', 'horror'] })),
  cd_body_mark_sacred_geometry_body: bodyMark(ritualMarkEras, 2, bodyMarkSemiRealReality, fit('none', { strong: ['religious_ritual', 'surreal'], usable: ['xianxia', 'mythic_epic', 'fantasy', 'abstract'] })),
  cd_body_mark_map_tattoo: bodyMark(modernMarkEras, 1, bodyMarkReality, fit('none', { strong: ['adventure'], usable: ['noir_crime', 'wasteland', 'romance', 'science_fiction'] })),
  cd_body_mark_music_staff_tattoo: bodyMark(modernMarkEras, 1, bodyMarkReality, fit('none', { strong: ['urban_life', 'fashion_idol'], usable: ['romance'] })),
  cd_body_mark_devotional_text_skin: bodyMark(ritualMarkEras, 1, bodyMarkReality, fit('none', { strong: ['religious_ritual'], usable: ['xianxia', 'historical', 'mythic_epic', 'dark_fantasy'] })),
  cd_body_mark_ownership_choker_tanline: bodyMark(socialModernEras, 1, bodyMarkReality, fit('none', { strong: ['boudoir_aesthetic'], usable: ['fashion_idol', 'romance', 'urban_life'] })),
  cd_body_mark_makeup_transfer_mark: bodyMark(socialModernEras, 1, bodyMarkReality, fit('none', { strong: ['romance', 'boudoir_aesthetic'], usable: ['fashion_idol', 'urban_life'] })),
  cd_body_mark_family_crest_tattoo: bodyMark(ritualMarkEras, 1, bodyMarkReality, fit('none', { strong: ['court', 'historical'], usable: ['noir_crime', 'wuxia', 'religious_ritual', 'dark_fantasy'] })),

  cd_body_damage_fine_body_scar: bodyDamage(allRealEras, 1, bodyDamageReality, fit('usable')),
  cd_body_damage_slash_scar: bodyDamage(allRealEras, 1, bodyDamageReality, fit('usable', { strong: ['war_military', 'wuxia'], usable: ['noir_crime', 'wasteland', 'adventure'] })),
  cd_body_damage_burn_scar: bodyDamage(allRealEras, 1, bodyDamageReality, fit('usable', { usable: ['war_military', 'wasteland', 'real_professional', 'horror'] })),
  cd_body_damage_surgical_scar: bodyDamage(allRealEras, 1, bodyDamageReality, fit('usable', { strong: ['real_professional'], usable: ['science_fiction', 'biopunk', 'posthuman', 'war_military'] })),
  cd_body_damage_keloid_scar: bodyDamage(allRealEras, 1, bodyDamageReality, fit('usable')),
  cd_body_damage_old_bullet_scar: bodyDamage(['industrial', 'modern', 'contemporary', 'near_future', 'far_future'], 1, bodyDamageReality, fit('none', { strong: ['war_military', 'noir_crime'], usable: ['wasteland', 'science_fiction'] })),
  cd_body_damage_fresh_scratch: bodyDamage(allRealEras, 1, bodyDamageReality, fit('usable', { usable: ['adventure', 'wuxia', 'war_military', 'wasteland'] })),
  cd_body_damage_fresh_bruise: bodyDamage(allRealEras, 1, bodyDamageReality, fit('usable', { usable: ['war_military', 'wuxia', 'noir_crime', 'real_professional', 'romance'] })),
  cd_body_damage_split_lip_wound: bodyDamage(allRealEras, 1, bodyDamageReality, fit('usable', { strong: ['noir_crime'], usable: ['war_military', 'wuxia', 'romance', 'wasteland'] })),
  cd_body_damage_black_eye: bodyDamage(allRealEras, 1, bodyDamageReality, fit('usable', { strong: ['noir_crime'], usable: ['war_military', 'wuxia', 'real_professional'] })),
  cd_body_damage_stitches: bodyDamage(allRealEras, 1, bodyDamageReality, fit('usable', { strong: ['real_professional'], usable: ['war_military', 'wasteland', 'horror'] })),
  cd_body_damage_surgical_staples: bodyDamage(medicalModernEras, 1, bodyDamageReality, fit('none', { strong: ['real_professional'], usable: ['war_military', 'science_fiction', 'biopunk', 'horror'] })),
  cd_body_damage_medical_patch: bodyDamage(allRealEras, 1, bodyDamageReality, fit('usable', { strong: ['real_professional'], usable: ['war_military', 'urban_life', 'wasteland'] })),
  cd_body_damage_joint_brace: bodyDamage(allRealEras, 1, bodyDamageReality, fit('usable', { strong: ['real_professional'], usable: ['war_military', 'urban_life', 'fashion_idol'] })),
  cd_body_damage_missing_finger: bodyDamage(allRealEras, 1, bodyDamageReality, fit('usable', { usable: ['war_military', 'wuxia', 'noir_crime', 'historical', 'wasteland'] })),
  cd_body_damage_amputated_limb: bodyDamage(allRealEras, 1, bodyDamageReality, fit('usable', { strong: ['war_military'], usable: ['historical', 'wasteland', 'real_professional', 'science_fiction'] })),
  cd_body_damage_missing_eye: bodyDamage(allRealEras, 1, bodyDamageReality, fit('usable', { usable: ['war_military', 'wuxia', 'historical', 'noir_crime', 'wasteland'] })),
  cd_body_damage_cauliflower_ear: bodyDamage(allRealEras, 1, bodyDamageReality, fit('none', { strong: ['real_professional'], usable: ['war_military', 'wuxia', 'urban_life'] })),
  cd_body_damage_old_broken_nose: bodyDamage(allRealEras, 1, bodyDamageReality, fit('usable', { usable: ['war_military', 'wuxia', 'noir_crime', 'real_professional'] })),
  cd_body_damage_caesarean_scar: bodyDamage(allRealEras, 1, bodyDamageReality, fit('usable')),
  cd_body_damage_appendix_scar: bodyDamage(allRealEras, 1, bodyDamageReality, fit('usable')),
  cd_body_damage_old_whip_scars: bodyDamage(allRealEras, 1, bodyDamageReality, fit('none', { strong: ['historical', 'dark_fantasy'], usable: ['war_military', 'wuxia', 'wasteland', 'body_horror'], weak: ['romance'] })),
  cd_body_damage_old_bite_scar: bodyDamage(allRealEras, 1, bodyDamageReality, fit('usable', { usable: ['horror', 'dark_fantasy', 'body_horror', 'ecological', 'romance'] })),
  cd_body_damage_road_rash_scars: bodyDamage(['industrial', 'modern', 'contemporary', 'near_future', 'far_future'], 1, bodyDamageReality, fit('none', { strong: ['urban_life'], usable: ['real_professional', 'noir_crime', 'wasteland'] })),
  cd_body_damage_training_bruise_old: bodyDamage(allRealEras, 1, bodyDamageReality, fit('none', { strong: ['real_professional'], usable: ['war_military', 'wuxia', 'fashion_idol'] })),
  cd_body_damage_needle_scars: bodyDamage(medicalModernEras, 1, bodyDamageReality, fit('none', { strong: ['real_professional'], usable: ['science_fiction', 'biopunk', 'horror', 'noir_crime'] })),
  cd_body_damage_sun_crack_damage: bodyDamage(allRealEras, 1, bodyDamageReality, fit('usable', { strong: ['ecological', 'adventure'], usable: ['wasteland', 'real_professional'] })),
  cd_body_damage_frostbite_scars: bodyDamage(allRealEras, 1, bodyDamageReality, fit('usable', { strong: ['ecological', 'adventure'], usable: ['wasteland', 'war_military', 'historical'] })),
  cd_body_damage_acid_scar: bodyDamage(medicalModernEras, 1, bodyDamageReality, fit('none', { strong: ['noir_crime', 'horror'], usable: ['science_fiction', 'biopunk', 'wasteland', 'real_professional'] })),
  cd_body_damage_shrapnel_scars: bodyDamage(['industrial', 'modern', 'contemporary', 'near_future', 'far_future'], 1, bodyDamageReality, fit('none', { strong: ['war_military'], usable: ['wasteland', 'science_fiction', 'real_professional'] })),
  cd_body_damage_fresh_cut: bodyDamage(allRealEras, 1, bodyDamageReality, fit('usable', { usable: ['war_military', 'wuxia', 'noir_crime', 'wasteland'] })),
  cd_body_damage_fresh_scraped_knees: bodyDamage(allRealEras, 1, bodyDamageReality, fit('usable', { usable: ['urban_life', 'adventure', 'romance', 'wasteland'] })),
  cd_body_damage_rope_burn: bodyDamage(allRealEras, 1, bodyDamageReality, fit('none', { usable: ['noir_crime', 'war_military', 'wuxia', 'historical', 'dark_fantasy', 'boudoir_aesthetic'] })),
  cd_body_damage_restraint_marks: bodyDamage(allRealEras, 1, bodyDamageReality, fit('none', { usable: ['noir_crime', 'war_military', 'science_fiction', 'dark_fantasy', 'boudoir_aesthetic'] })),
  cd_body_damage_fresh_burn: bodyDamage(allRealEras, 1, bodyDamageReality, fit('usable', { usable: ['real_professional', 'war_military', 'wasteland', 'horror'] })),
  cd_body_damage_swollen_cheek: bodyDamage(allRealEras, 1, bodyDamageReality, fit('usable', { strong: ['noir_crime'], usable: ['war_military', 'wuxia', 'real_professional'] })),
  cd_body_damage_bloody_knuckles: bodyDamage(allRealEras, 1, bodyDamageReality, fit('none', { strong: ['noir_crime', 'war_military'], usable: ['wuxia', 'real_professional', 'urban_life', 'wasteland'] })),
  cd_body_damage_sprained_ankle_wrap: bodyDamage(allRealEras, 1, bodyDamageReality, fit('usable', { strong: ['real_professional'], usable: ['urban_life', 'adventure', 'fashion_idol'] })),
  cd_body_damage_wrist_cast: bodyDamage(allRealEras, 1, bodyDamageReality, fit('usable', { strong: ['real_professional'], usable: ['urban_life', 'romance'] })),
  cd_body_damage_neck_brace: bodyDamage(allRealEras, 1, bodyDamageReality, fit('usable', { strong: ['real_professional'], usable: ['urban_life', 'noir_crime'] })),
  cd_body_damage_eye_patch_medical: bodyDamage(allRealEras, 1, bodyDamageReality, fit('usable', { strong: ['real_professional'], usable: ['war_military', 'wuxia', 'historical'] })),
  cd_body_damage_compression_bandage: bodyDamage(allRealEras, 1, bodyDamageReality, fit('usable', { strong: ['real_professional'], usable: ['war_military', 'wuxia', 'urban_life'] })),
  cd_body_damage_iv_port_bandage: bodyDamage(medicalModernEras, 1, bodyDamageReality, fit('none', { strong: ['real_professional'], usable: ['science_fiction', 'biopunk', 'horror'] })),
  cd_body_damage_sensor_patch_marks: bodyDamage(medicalDigitalEras, 2, bodyDamageSemiRealReality, fit('none', { strong: ['real_professional', 'science_fiction'], usable: ['cyberpunk', 'posthuman', 'biopunk'] })),
  cd_body_damage_suture_tape: bodyDamage(allRealEras, 1, bodyDamageReality, fit('usable', { strong: ['real_professional'], usable: ['war_military', 'urban_life'] })),
  cd_body_damage_knee_brace: bodyDamage(allRealEras, 1, bodyDamageReality, fit('usable', { strong: ['real_professional'], usable: ['war_military', 'urban_life'] })),
  cd_body_damage_shoulder_sling: bodyDamage(allRealEras, 1, bodyDamageReality, fit('usable', { strong: ['real_professional'], usable: ['war_military', 'urban_life', 'romance'] })),
  cd_body_damage_healed_amputation_stump: bodyDamage(allRealEras, 1, bodyDamageReality, fit('usable', { strong: ['war_military'], usable: ['real_professional', 'historical', 'wasteland', 'science_fiction'] })),
  cd_body_damage_missing_teeth: bodyDamage(allRealEras, 1, bodyDamageReality, fit('usable', { usable: ['noir_crime', 'wasteland', 'historical', 'war_military'] })),
  cd_body_damage_chipped_tooth: bodyDamage(allRealEras, 1, bodyDamageReality, fit('usable', { usable: ['noir_crime', 'urban_life', 'wasteland', 'war_military'] })),
  cd_body_damage_damaged_ear: bodyDamage(allRealEras, 1, bodyDamageReality, fit('usable', { usable: ['war_military', 'wuxia', 'adventure', 'wasteland'] })),
  cd_body_damage_missing_limb_with_cover: bodyDamage(allRealEras, 1, bodyDamageReality, fit('usable', { strong: ['war_military'], usable: ['historical', 'wasteland', 'real_professional', 'science_fiction'] })),
  cd_body_damage_scar_contracture: bodyDamage(allRealEras, 1, bodyDamageReality, fit('usable', { strong: ['real_professional'], usable: ['war_military', 'wasteland', 'body_horror'] })),
  cd_body_damage_cyber_surgery_seams: bodyDamage(techMarkEras, 3, bodyDamageSemiSurrealReality, fit('none', { strong: ['science_fiction', 'cyberpunk', 'posthuman'], usable: ['biopunk', 'body_horror'] })),
  cd_body_damage_lab_injection_sites: bodyDamage(medicalDigitalEras, 2, bodyDamageSemiRealReality, fit('none', { strong: ['science_fiction', 'biopunk'], usable: ['real_professional', 'horror', 'posthuman'] })),
  cd_body_damage_implant_rejection_redness: bodyDamage(techMarkEras, 3, bodyDamageSemiSurrealReality, fit('none', { strong: ['science_fiction', 'body_horror'], usable: ['cyberpunk', 'posthuman', 'biopunk'] })),
  cd_body_damage_containment_burns: bodyDamage(techMarkEras, 3, bodyDamageSemiSurrealReality, fit('none', { strong: ['science_fiction'], usable: ['cyberpunk', 'wasteland', 'horror', 'biopunk'] })),
  cd_body_damage_electrode_marks: bodyDamage(medicalDigitalEras, 2, bodyDamageSemiRealReality, fit('none', { strong: ['science_fiction', 'real_professional'], usable: ['biopunk', 'posthuman', 'horror'] })),
  cd_body_damage_cryosleep_frostburn: bodyDamage(techMarkEras, 3, bodyDamageSemiSurrealReality, fit('none', { strong: ['science_fiction'], usable: ['posthuman', 'wasteland', 'body_horror'] })),
  cd_body_damage_radiation_patch_damage: bodyDamage(['near_future', 'far_future', 'timeless'], 3, bodyDamageSemiSurrealReality, fit('none', { strong: ['science_fiction', 'wasteland'], usable: ['body_horror', 'biopunk', 'horror'] })),
  cd_body_damage_biohazard_skin_lesions: bodyDamage(techMarkEras, 3, bodyDamageSemiSurrealReality, fit('none', { strong: ['biopunk', 'body_horror'], usable: ['science_fiction', 'horror', 'wasteland'] })),
  cd_body_damage_magical_burn_mark: bodyDamage(['mythic', 'timeless', 'far_future'], 4, bodyDamageNonRealReality, fit('none', { strong: ['fantasy', 'dark_fantasy'], usable: ['xianxia', 'religious_ritual', 'mythic_epic'] })),
  cd_body_damage_curse_cracks: bodyDamage(['mythic', 'timeless', 'far_future'], 4, bodyDamageNonRealReality, fit('none', { strong: ['dark_fantasy', 'body_horror'], usable: ['horror', 'fantasy', 'religious_ritual', 'xianxia'] })),
  cd_body_damage_petrification_edges: bodyDamage(['mythic', 'timeless', 'far_future'], 4, bodyDamageNonRealReality, fit('none', { strong: ['fantasy', 'dark_fantasy'], usable: ['mythic_epic', 'body_horror', 'horror'] })),
  cd_body_damage_void_corrosion: bodyDamage(['mythic', 'timeless', 'far_future'], 5, bodyDamageAbstractReality, fit('none', { strong: ['surreal', 'body_horror'], usable: ['dark_fantasy', 'horror', 'science_fiction', 'abstract'] })),
  cd_body_damage_holy_stigmata: bodyDamage(['mythic', 'timeless'], 4, bodyDamageNonRealReality, fit('none', { strong: ['religious_ritual', 'mythic_epic'], usable: ['dark_fantasy', 'fantasy'] })),
  cd_body_damage_monster_claw_wounds: bodyDamage(['mythic', 'timeless', 'far_future'], 4, bodyDamageNonRealReality, fit('none', { strong: ['fantasy', 'horror'], usable: ['dark_fantasy', 'body_horror', 'adventure'] })),
  cd_body_damage_angelic_burn_edges: bodyDamage(['mythic', 'timeless'], 4, bodyDamageNonRealReality, fit('none', { strong: ['religious_ritual', 'mythic_epic'], usable: ['fantasy', 'dark_fantasy'] })),
  cd_body_damage_demonic_brand_injury: bodyDamage(['mythic', 'timeless'], 4, bodyDamageNonRealReality, fit('none', { strong: ['dark_fantasy', 'religious_ritual'], usable: ['horror', 'fantasy', 'body_horror'] })),
  cd_body_damage_psychic_nosebleed: bodyDamage(['mythic', 'timeless', 'near_future', 'far_future'], 3, bodyDamageSemiSurrealReality, fit('none', { strong: ['science_fiction', 'surreal'], usable: ['fantasy', 'horror', 'posthuman'] })),
  cd_body_damage_ritual_bleeding_mark: bodyDamage(['mythic', 'timeless', 'far_future'], 4, bodyDamageNonRealReality, fit('none', { strong: ['religious_ritual', 'dark_fantasy'], usable: ['xianxia', 'mythic_epic', 'body_horror'] })),
  cd_body_damage_time_erosion_scars: bodyDamage(['mythic', 'timeless', 'far_future'], 5, bodyDamageAbstractReality, fit('none', { strong: ['surreal', 'abstract'], usable: ['science_fiction', 'dark_fantasy', 'mythic_epic'] })),

  cd_body_mod_prosthetic_arm: bodyMod(medicalModernEras, 1, bodyModReality, fit('none', { strong: ['real_professional'], usable: ['war_military', 'urban_life', 'science_fiction', 'posthuman'] })),
  cd_body_mod_prosthetic_leg: bodyMod(medicalModernEras, 1, bodyModReality, fit('none', { strong: ['real_professional'], usable: ['war_military', 'urban_life', 'science_fiction', 'posthuman'] })),
  cd_body_mod_hearing_aid: bodyMod(medicalDigitalEras, 1, bodyModReality, fit('none', { strong: ['real_professional'], usable: ['urban_life', 'romance'] })),
  cd_body_mod_mobility_cane: bodyMod(allRealEras, 1, bodyModReality, fit('usable', { strong: ['real_professional'], usable: ['urban_life', 'historical', 'court'] })),
  cd_body_mod_medical_implant_port: bodyMod(medicalDigitalEras, 2, bodyModSemiRealReality, fit('none', { strong: ['real_professional'], usable: ['science_fiction', 'biopunk', 'posthuman', 'horror'] })),
  cd_body_mod_cyber_arm: bodyMod(techMarkEras, 4, bodyModNonRealReality, fit('none', { strong: ['science_fiction', 'cyberpunk', 'posthuman'], usable: ['war_military', 'wasteland'] })),
  cd_body_mod_cyber_leg: bodyMod(techMarkEras, 4, bodyModNonRealReality, fit('none', { strong: ['science_fiction', 'cyberpunk', 'posthuman'], usable: ['war_military', 'wasteland'] })),
  cd_body_mod_cyber_spine: bodyMod(techMarkEras, 4, bodyModNonRealReality, fit('none', { strong: ['science_fiction', 'cyberpunk', 'posthuman'], usable: ['body_horror'] })),
  cd_body_mod_metal_jaw: bodyMod(techMarkEras, 4, bodyModNonRealReality, fit('none', { strong: ['science_fiction', 'cyberpunk'], usable: ['posthuman', 'war_military', 'body_horror'] })),
  cd_body_mod_data_port: bodyMod(techMarkEras, 3, bodyModSemiSurrealReality, fit('none', { strong: ['science_fiction', 'cyberpunk'], usable: ['posthuman', 'real_professional'] })),
  cd_body_mod_animal_ears: bodyMod(['mythic', 'timeless', 'near_future', 'far_future'], 4, bodyModNonRealReality, fit('none', { strong: ['fantasy'], usable: ['ecological', 'biopunk', 'science_fiction', 'fashion_idol'] })),
  cd_body_mod_horns: bodyMod(['mythic', 'timeless', 'far_future'], 4, bodyModNonRealReality, fit('none', { strong: ['fantasy', 'dark_fantasy'], usable: ['mythic_epic', 'religious_ritual', 'body_horror'] })),
  cd_body_mod_tail: bodyMod(['mythic', 'timeless', 'far_future'], 4, bodyModNonRealReality, fit('none', { strong: ['fantasy'], usable: ['ecological', 'biopunk', 'dark_fantasy', 'science_fiction'] })),
  cd_body_mod_claws: bodyMod(['mythic', 'timeless', 'far_future'], 4, bodyModNonRealReality, fit('none', { strong: ['fantasy', 'horror'], usable: ['dark_fantasy', 'body_horror', 'war_military', 'wuxia'] })),
  cd_body_mod_gills: bodyMod(['mythic', 'timeless', 'near_future', 'far_future'], 4, bodyModNonRealReality, fit('none', { strong: ['ecological', 'science_fiction'], usable: ['fantasy', 'biopunk', 'posthuman'] })),
  cd_body_mod_wings: bodyMod(['mythic', 'timeless', 'far_future'], 4, bodyModNonRealReality, fit('none', { strong: ['fantasy', 'mythic_epic'], usable: ['religious_ritual', 'dark_fantasy', 'science_fiction'] })),
  cd_body_mod_plant_symbiosis: bodyMod(['mythic', 'timeless', 'far_future'], 4, bodyModNonRealReality, fit('none', { strong: ['ecological', 'fantasy'], usable: ['xianxia', 'biopunk', 'body_horror', 'mythic_epic'] })),
  cd_body_mod_fungal_growth: bodyMod(['mythic', 'timeless', 'near_future', 'far_future'], 4, bodyModNonRealReality, fit('none', { strong: ['ecological', 'biopunk', 'body_horror'], usable: ['horror', 'wasteland', 'fantasy'] })),
  cd_body_mod_crystal_growth: bodyMod(['mythic', 'timeless', 'far_future'], 4, bodyModNonRealReality, fit('none', { strong: ['fantasy', 'xianxia'], usable: ['mythic_epic', 'science_fiction', 'body_horror'] })),
  cd_body_mod_parasite_host: bodyMod(['mythic', 'timeless', 'near_future', 'far_future'], 4, bodyModNonRealReality, fit('none', { strong: ['body_horror', 'biopunk'], usable: ['horror', 'science_fiction', 'dark_fantasy'] })),
  cd_body_mod_prosthetic_hand: bodyMod(medicalModernEras, 1, bodyModReality, fit('none', { strong: ['real_professional'], usable: ['war_military', 'urban_life', 'science_fiction', 'posthuman'] })),
  cd_body_mod_prosthetic_eye: bodyMod(medicalModernEras, 1, bodyModReality, fit('none', { strong: ['real_professional'], usable: ['war_military', 'urban_life', 'science_fiction', 'posthuman'] })),
  cd_body_mod_dental_implants: bodyMod(medicalModernEras, 1, bodyModReality, fit('none', { strong: ['real_professional'], usable: ['urban_life', 'fashion_idol', 'war_military'] })),
  cd_body_mod_orthopedic_screws_hint: bodyMod(medicalModernEras, 1, bodyModReality, fit('none', { strong: ['real_professional'], usable: ['war_military', 'urban_life'] })),
  cd_body_mod_insulin_pump: bodyMod(medicalDigitalEras, 1, bodyModReality, fit('none', { strong: ['real_professional'], usable: ['urban_life'] })),
  cd_body_mod_cochlear_implant: bodyMod(medicalDigitalEras, 1, bodyModReality, fit('none', { strong: ['real_professional'], usable: ['urban_life', 'posthuman'] })),
  cd_body_mod_back_support_brace: bodyMod(allRealEras, 1, bodyModReality, fit('usable', { strong: ['real_professional'], usable: ['urban_life', 'war_military'] })),
  cd_body_mod_exosuit_assist: bodyMod(['contemporary', 'near_future', 'far_future'], 3, bodyModSemiSurrealReality, fit('none', { strong: ['real_professional', 'science_fiction'], usable: ['war_military', 'posthuman'] })),
  cd_body_mod_smart_contact_implant: bodyMod(techMarkEras, 3, bodyModSemiSurrealReality, fit('none', { strong: ['science_fiction', 'cyberpunk'], usable: ['posthuman', 'real_professional', 'fashion_idol'] })),
  cd_body_mod_cybernetic_eye: bodyMod(techMarkEras, 4, bodyModNonRealReality, fit('none', { strong: ['science_fiction', 'cyberpunk', 'posthuman'], usable: ['war_military'] })),
  cd_body_mod_neural_jack: bodyMod(techMarkEras, 4, bodyModNonRealReality, fit('none', { strong: ['science_fiction', 'cyberpunk', 'posthuman'], usable: ['body_horror'] })),
  cd_body_mod_synthetic_lungs_port: bodyMod(techMarkEras, 4, bodyModNonRealReality, fit('none', { strong: ['science_fiction', 'posthuman'], usable: ['cyberpunk', 'biopunk', 'body_horror'] })),
  cd_body_mod_mechanical_heart_window: bodyMod(techMarkEras, 4, bodyModNonRealReality, fit('none', { strong: ['science_fiction', 'posthuman'], usable: ['cyberpunk', 'body_horror'] })),
  cd_body_mod_subdermal_armor: bodyMod(techMarkEras, 4, bodyModNonRealReality, fit('none', { strong: ['war_military', 'science_fiction'], usable: ['cyberpunk', 'posthuman'] })),
  cd_body_mod_modular_socket_limb: bodyMod(techMarkEras, 4, bodyModNonRealReality, fit('none', { strong: ['science_fiction', 'posthuman'], usable: ['cyberpunk', 'war_military'] })),
  cd_body_mod_retractable_tool_fingers: bodyMod(techMarkEras, 4, bodyModNonRealReality, fit('none', { strong: ['real_professional', 'science_fiction'], usable: ['cyberpunk', 'posthuman'] })),
  cd_body_mod_spinal_cable_tail: bodyMod(techMarkEras, 4, bodyModNonRealReality, fit('none', { strong: ['science_fiction', 'cyberpunk'], usable: ['posthuman', 'body_horror'] })),
  cd_body_mod_cranial_antenna: bodyMod(techMarkEras, 4, bodyModNonRealReality, fit('none', { strong: ['science_fiction', 'cyberpunk'], usable: ['posthuman'] })),
  cd_body_mod_synthetic_skin_seams: bodyMod(techMarkEras, 3, bodyModSemiSurrealReality, fit('none', { strong: ['science_fiction', 'posthuman'], usable: ['cyberpunk', 'body_horror'] })),
  cd_body_mod_heat_vents_body: bodyMod(techMarkEras, 4, bodyModNonRealReality, fit('none', { strong: ['science_fiction', 'posthuman'], usable: ['cyberpunk'] })),
  cd_body_mod_cat_tail: bodyMod(['mythic', 'timeless', 'far_future'], 4, bodyModNonRealReality, fit('none', { strong: ['fantasy', 'fashion_idol'], usable: ['ecological', 'biopunk'] })),
  cd_body_mod_fox_tail: bodyMod(['mythic', 'timeless'], 4, bodyModNonRealReality, fit('none', { strong: ['xianxia', 'fantasy', 'mythic_epic'], usable: ['ecological', 'dark_fantasy'] })),
  cd_body_mod_wolf_ears: bodyMod(['mythic', 'timeless', 'far_future'], 4, bodyModNonRealReality, fit('none', { strong: ['fantasy', 'ecological'], usable: ['dark_fantasy', 'biopunk', 'science_fiction'] })),
  cd_body_mod_serpent_tongue: bodyMod(['mythic', 'timeless', 'far_future'], 4, bodyModNonRealReality, fit('none', { strong: ['fantasy', 'dark_fantasy'], usable: ['body_horror', 'biopunk', 'horror'] })),
  cd_body_mod_fangs: bodyMod(['mythic', 'timeless', 'far_future'], 4, bodyModNonRealReality, fit('none', { strong: ['horror', 'dark_fantasy'], usable: ['fantasy', 'body_horror', 'xianxia'] })),
  cd_body_mod_webbed_fingers: bodyMod(['mythic', 'timeless', 'far_future'], 4, bodyModNonRealReality, fit('none', { strong: ['ecological', 'science_fiction'], usable: ['fantasy', 'biopunk', 'body_horror'] })),
  cd_body_mod_feather_growth: bodyMod(['mythic', 'timeless', 'far_future'], 4, bodyModNonRealReality, fit('none', { strong: ['fantasy', 'mythic_epic'], usable: ['ecological', 'xianxia', 'biopunk'] })),
  cd_body_mod_extra_arms: bodyMod(['mythic', 'timeless', 'far_future'], 5, bodyModAbstractReality, fit('none', { strong: ['mythic_epic', 'body_horror'], usable: ['xianxia', 'fantasy', 'science_fiction'] })),
  cd_body_mod_third_eye: bodyMod(['mythic', 'timeless', 'far_future'], 4, bodyModNonRealReality, fit('none', { strong: ['xianxia', 'religious_ritual'], usable: ['fantasy', 'mythic_epic', 'body_horror', 'science_fiction'] })),
  cd_body_mod_halo_implant: bodyMod(['mythic', 'timeless', 'near_future', 'far_future'], 4, bodyModNonRealReality, fit('none', { strong: ['religious_ritual', 'science_fiction'], usable: ['xianxia', 'mythic_epic', 'posthuman', 'cyberpunk'] })),
  cd_body_mod_living_vines: bodyMod(['mythic', 'timeless', 'far_future'], 4, bodyModNonRealReality, fit('none', { strong: ['ecological', 'fantasy'], usable: ['xianxia', 'biopunk', 'body_horror'] })),
  cd_body_mod_flowering_skin: bodyMod(['mythic', 'timeless', 'far_future'], 4, bodyModNonRealReality, fit('none', { strong: ['ecological', 'fantasy'], usable: ['romance', 'xianxia', 'body_horror', 'biopunk'] })),
  cd_body_mod_moss_growth: bodyMod(['mythic', 'timeless', 'far_future'], 4, bodyModNonRealReality, fit('none', { strong: ['ecological'], usable: ['fantasy', 'wasteland', 'biopunk', 'body_horror'] })),
  cd_body_mod_insect_chitin_patches: bodyMod(['mythic', 'timeless', 'far_future'], 4, bodyModNonRealReality, fit('none', { strong: ['body_horror', 'biopunk'], usable: ['ecological', 'fantasy', 'science_fiction'] })),
  cd_body_mod_coral_growth: bodyMod(['mythic', 'timeless', 'far_future'], 4, bodyModNonRealReality, fit('none', { strong: ['ecological'], usable: ['fantasy', 'biopunk', 'body_horror', 'adventure'] })),
  cd_body_mod_bone_spurs: bodyMod(['mythic', 'timeless', 'far_future'], 4, bodyModNonRealReality, fit('none', { strong: ['body_horror'], usable: ['dark_fantasy', 'horror', 'fantasy', 'biopunk'] })),
  cd_body_mod_symbiotic_eye_growth: bodyMod(['mythic', 'timeless', 'far_future'], 5, bodyModAbstractReality, fit('none', { strong: ['body_horror', 'surreal'], usable: ['horror', 'dark_fantasy', 'biopunk'] })),
  cd_body_mod_parasite_collar: bodyMod(['mythic', 'timeless', 'far_future'], 5, bodyModAbstractReality, fit('none', { strong: ['body_horror', 'biopunk'], usable: ['horror', 'dark_fantasy', 'science_fiction'] })),
  cd_body_mod_living_armor_growth: bodyMod(['mythic', 'timeless', 'far_future'], 5, bodyModAbstractReality, fit('none', { strong: ['body_horror', 'war_military'], usable: ['fantasy', 'dark_fantasy', 'biopunk', 'science_fiction'] })),
  cd_body_mod_crystalline_spine: bodyMod(['mythic', 'timeless', 'far_future'], 4, bodyModNonRealReality, fit('none', { strong: ['fantasy', 'xianxia'], usable: ['science_fiction', 'surreal', 'body_horror'] })),
  cd_body_mod_mineralized_hand: bodyMod(['mythic', 'timeless', 'far_future'], 4, bodyModNonRealReality, fit('none', { strong: ['fantasy', 'xianxia'], usable: ['body_horror', 'biopunk', 'science_fiction'] })),
  cd_body_mod_shadow_limb: bodyMod(['mythic', 'timeless', 'far_future'], 5, bodyModAbstractReality, fit('none', { strong: ['dark_fantasy', 'surreal'], usable: ['xianxia', 'fantasy', 'horror'] })),
  cd_body_mod_hologram_limb: bodyMod(['timeless', 'far_future'], 5, bodyModAbstractReality, fit('none', { strong: ['science_fiction', 'surreal'], usable: ['cyberpunk', 'posthuman', 'fantasy'] })),
  cd_body_mod_flame_hair_body: bodyMod(['mythic', 'timeless', 'far_future'], 5, bodyModAbstractReality, fit('none', { strong: ['fantasy', 'mythic_epic'], usable: ['xianxia', 'dark_fantasy', 'religious_ritual'] })),
  cd_body_mod_water_body_part: bodyMod(['mythic', 'timeless', 'far_future'], 5, bodyModAbstractReality, fit('none', { strong: ['fantasy', 'surreal'], usable: ['xianxia', 'mythic_epic', 'ecological'] })),
  cd_body_mod_paper_body_edges: bodyMod(['mythic', 'timeless'], 5, bodyModAbstractReality, fit('none', { strong: ['surreal', 'xianxia'], usable: ['fantasy', 'religious_ritual', 'abstract'] })),
  cd_body_mod_porcelain_joint_body: bodyMod(['mythic', 'timeless', 'far_future'], 4, bodyModNonRealReality, fit('none', { strong: ['surreal', 'fantasy'], usable: ['dark_fantasy', 'xianxia', 'science_fiction', 'body_horror'] })),
  cd_body_mod_doll_ball_joints: bodyMod(['mythic', 'timeless', 'far_future'], 4, bodyModNonRealReality, fit('none', { strong: ['surreal', 'horror'], usable: ['dark_fantasy', 'fantasy', 'fashion_idol'] })),
  cd_body_mod_mirror_body_fragment: bodyMod(['mythic', 'timeless', 'far_future'], 5, bodyModAbstractReality, fit('none', { strong: ['surreal', 'abstract'], usable: ['fantasy', 'science_fiction', 'body_horror'] })),
  cd_body_mod_ritual_extra_hands: bodyMod(['mythic', 'timeless'], 5, bodyModAbstractReality, fit('none', { strong: ['religious_ritual', 'mythic_epic'], usable: ['xianxia', 'fantasy', 'body_horror'] })),
  cd_body_mod_synthetic_voice_throat: bodyMod(techMarkEras, 4, bodyModNonRealReality, fit('none', { strong: ['science_fiction', 'cyberpunk', 'posthuman'], usable: ['real_professional'] })),
  cd_body_mod_memory_drive_slot: bodyMod(techMarkEras, 4, bodyModNonRealReality, fit('none', { strong: ['science_fiction', 'cyberpunk', 'posthuman'], usable: ['surreal'] }))
};

export const withVisibleBodyCoreAxisMeta = (
  mode: VisibleBodyMode,
  items: LibraryItemDef[]
): LibraryItemDef[] => items.map(item => {
  const manualMeta = manualVisibleBodyCoreMeta[item.id];
  if (manualMeta) {
    return {
      ...item,
      eras: manualMeta.eras,
      eraMode: manualMeta.eraMode,
      eraStrictness: manualMeta.eraMode === 'universal' ? 'none' : item.eraStrictness || 'soft',
      anachronismRisk: manualMeta.eraMode === 'universal' ? 'low' : item.anachronismRisk || 'medium',
      ontologyLevel: manualMeta.ontologyLevel,
      realityTags: uniq(toList(manualMeta.realityTags)),
      categoryFit: normalizeCategoryFit(manualMeta.categoryFit)
    };
  }
  const eras = toList(item.eras).length ? toList(item.eras) : toList(item.compatibleEras).length ? toList(item.compatibleEras) : allRealEras;
  const categoryFit = mergeCategoryFit(
    mergeCategoryFit(categoryFitFromLegacyGenres(item), groupCategoryFit(mode, item.group)),
    mergeCategoryFit(keywordCategoryFit(item), item.categoryFit)
  );
  const eraMode = item.eraMode || (eras.length >= allRealEras.length ? 'universal' : 'specific');
  return {
    ...item,
    eras,
    eraMode,
    eraStrictness: item.eraStrictness || (eraMode === 'universal' ? 'none' : 'soft'),
    anachronismRisk: item.anachronismRisk || (eraMode === 'universal' ? 'low' : 'medium'),
    realityTags: uniq([...toList(item.realityTags), ...modeRealityTags(mode, item)]),
    categoryFit
  };
});
