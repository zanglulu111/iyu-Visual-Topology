import { LibraryItemDef } from '../../../types';

const uniq = (values: readonly string[]) => [...new Set(values.filter(Boolean))];
const allRealEras = ['primitive', 'slave', 'feudal', 'early_modern', 'industrial', 'modern', 'contemporary', 'near_future', 'far_future'];
const modernFutureEras = ['modern', 'contemporary', 'near_future', 'far_future'];
const industrialFutureEras = ['industrial', 'modern', 'contemporary', 'near_future', 'far_future'];
const futureEras = ['near_future', 'far_future'];
const mythicFutureEras = ['mythic', 'timeless', 'far_future'];
const mythicTimelessEras = ['mythic', 'timeless'];

type CategoryFit = NonNullable<LibraryItemDef['categoryFit']>;
type ManualGroomingMeta = {
  eraMode: NonNullable<LibraryItemDef['eraMode']>;
  eras: readonly string[];
  ontologyLevel: NonNullable<LibraryItemDef['ontologyLevel']>;
  realityTags: readonly string[];
  categoryFit: CategoryFit;
};

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

const fit = (
  unlisted: NonNullable<CategoryFit['unlisted']>,
  patch: Omit<CategoryFit, 'unlisted'> = {}
): CategoryFit => normalizeCategoryFit({ unlisted, ...patch });

const groomingMeta = (
  eraMode: NonNullable<LibraryItemDef['eraMode']>,
  eras: readonly string[],
  ontologyLevel: NonNullable<LibraryItemDef['ontologyLevel']>,
  realityTags: readonly string[],
  categoryFit: CategoryFit
): ManualGroomingMeta => ({ eraMode, eras, ontologyLevel, realityTags, categoryFit });

const hairReal = ['grooming', 'hair', 'physical', 'realistic'];
const hairNatural = [...hairReal, 'natural'];
const hairDyed = [...hairReal, 'dyed', 'fashion'];
const hairStyled = [...hairReal, 'hair_style'];
const hairFunctional = [...hairStyled, 'functional'];
const hairHistorical = [...hairStyled, 'historical_style'];
const hairStage = [...hairStyled, 'stage_fashion'];
const hairSurreal = ['grooming', 'hair', 'non_realist', 'surreal', 'material_shift'];
const hairTech = ['grooming', 'hair', 'technological', 'synthetic', 'non_realist'];
const hairBio = ['grooming', 'hair', 'biological', 'mutation', 'non_realist'];
const hairMystic = ['grooming', 'hair', 'mythic', 'symbolic', 'non_realist'];
const hairAbstract = ['grooming', 'hair', 'abstract', 'symbolic', 'non_realist'];

const naturalHairColor = (categoryFit = fit('usable')) => groomingMeta('universal', allRealEras, 1, hairNatural, categoryFit);
const dyedHairColor = (categoryFit = fit('none', {
  strong: ['fashion_idol', 'urban_life'],
  usable: ['romance', 'boudoir_aesthetic'],
  fusion: ['cyberpunk', 'science_fiction', 'fantasy', 'xianxia'],
  weak: ['historical', 'court', 'wuxia']
})) => groomingMeta('specific', modernFutureEras, 1, hairDyed, categoryFit);
const surrealHair = (
  eras: readonly string[],
  ontologyLevel: NonNullable<LibraryItemDef['ontologyLevel']>,
  realityTags: readonly string[],
  categoryFit: CategoryFit
) => groomingMeta('specific', eras, ontologyLevel, realityTags, categoryFit);
const basicHairStyle = (categoryFit = fit('usable')) => groomingMeta('universal', allRealEras, 1, hairStyled, categoryFit);
const modernHairStyle = (categoryFit = fit('usable', {
  strong: ['urban_life', 'fashion_idol'],
  usable: ['real_professional', 'romance', 'boudoir_aesthetic'],
  fusion: ['cyberpunk']
})) => groomingMeta('specific', modernFutureEras, 1, hairStyled, categoryFit);
const industrialHairStyle = (categoryFit = fit('usable', {
  strong: ['historical', 'fashion_idol'],
  usable: ['romance', 'court', 'urban_life'],
  fusion: ['dark_fantasy']
})) => groomingMeta('specific', industrialFutureEras, 1, hairStyled, categoryFit);
const historicalHairStyle = (eras: readonly string[], categoryFit: CategoryFit) => groomingMeta('specific', eras, 1, hairHistorical, categoryFit);
const functionalHairStyle = (eras: readonly string[], categoryFit: CategoryFit) => groomingMeta('specific', eras, 1, hairFunctional, categoryFit);
const stageHairStyle = (categoryFit = fit('none', {
  strong: ['fashion_idol', 'urban_life'],
  usable: ['romance', 'boudoir_aesthetic'],
  fusion: ['cyberpunk', 'dark_fantasy']
})) => groomingMeta('specific', modernFutureEras, 1, hairStage, categoryFit);

const manualGroomingAxisMeta: Record<string, ManualGroomingMeta> = {
  cd_hair_soft_black: naturalHairColor(),
  cd_hair_raven_black: naturalHairColor(fit('usable', { usable: ['court', 'dark_fantasy', 'noir_crime', 'fashion_idol'] })),
  cd_hair_blue_black: dyedHairColor(fit('none', { strong: ['fashion_idol', 'cyberpunk'], usable: ['urban_life', 'noir_crime'], fusion: ['science_fiction', 'dark_fantasy'], weak: ['historical', 'court', 'wuxia'] })),
  cd_hair_dark_brown: naturalHairColor(),
  cd_hair_chocolate_brown: naturalHairColor(fit('usable', { usable: ['romance', 'urban_life', 'real_professional', 'fashion_idol'] })),
  cd_hair_chestnut: naturalHairColor(fit('usable', { usable: ['historical', 'romance', 'court', 'urban_life'] })),
  cd_hair_ash_brown: naturalHairColor(fit('usable', { usable: ['urban_life', 'fashion_idol', 'real_professional', 'noir_crime'] })),
  cd_hair_auburn: naturalHairColor(fit('usable', { usable: ['historical', 'romance', 'fantasy', 'court'] })),
  cd_hair_copper_red: naturalHairColor(fit('usable', { usable: ['fantasy', 'romance', 'fashion_idol', 'historical'] })),
  cd_hair_ginger: naturalHairColor(fit('usable', { usable: ['romance', 'historical', 'ecological', 'urban_life'] })),
  cd_hair_honey_blonde: naturalHairColor(fit('usable', { usable: ['romance', 'court', 'fashion_idol', 'urban_life'] })),
  cd_hair_wheat_blonde: naturalHairColor(fit('usable', { usable: ['romance', 'historical', 'ecological', 'urban_life'] })),
  cd_hair_platinum_blonde: naturalHairColor(fit('usable', { strong: ['fashion_idol'], usable: ['court', 'romance', 'urban_life'], fusion: ['science_fiction', 'fantasy'] })),
  cd_hair_salt_pepper: naturalHairColor(fit('usable', { usable: ['historical', 'real_professional', 'noir_crime', 'war_military'] })),
  cd_hair_silver_grey: naturalHairColor(fit('usable', { usable: ['historical', 'court', 'fantasy', 'xianxia'], fusion: ['science_fiction'] })),
  cd_hair_clean_white: naturalHairColor(fit('usable', { usable: ['historical', 'court', 'fantasy', 'xianxia', 'religious_ritual'], fusion: ['science_fiction', 'surreal'] })),
  cd_hair_crimson: dyedHairColor(fit('none', { strong: ['fashion_idol'], usable: ['urban_life', 'noir_crime'], fusion: ['dark_fantasy', 'cyberpunk', 'wuxia'], weak: ['historical', 'court'] })),
  cd_hair_wine_red: dyedHairColor(fit('none', { strong: ['fashion_idol', 'noir_crime'], usable: ['urban_life', 'boudoir_aesthetic'], fusion: ['dark_fantasy'], weak: ['historical', 'court'] })),
  cd_hair_sakura_pink: dyedHairColor(fit('none', { strong: ['fashion_idol'], usable: ['romance', 'urban_life'], fusion: ['science_fiction', 'surreal'], weak: ['historical', 'court', 'wuxia'] })),
  cd_hair_rose_gold: dyedHairColor(fit('none', { strong: ['fashion_idol'], usable: ['romance', 'urban_life', 'boudoir_aesthetic'], fusion: ['science_fiction'], weak: ['historical', 'wuxia'] })),
  cd_hair_lavender: dyedHairColor(fit('none', { strong: ['fashion_idol'], usable: ['romance', 'urban_life'], fusion: ['fantasy', 'xianxia', 'science_fiction', 'surreal'], weak: ['historical'] })),
  cd_hair_violet: dyedHairColor(fit('none', { strong: ['fashion_idol'], usable: ['urban_life', 'noir_crime'], fusion: ['dark_fantasy', 'xianxia', 'cyberpunk'], weak: ['historical'] })),
  cd_hair_electric_blue: dyedHairColor(fit('none', { strong: ['cyberpunk', 'fashion_idol'], usable: ['science_fiction', 'urban_life'], fusion: ['posthuman'], weak: ['historical', 'court', 'wuxia'] })),
  cd_hair_cobalt_blue: dyedHairColor(fit('none', { strong: ['cyberpunk', 'fashion_idol'], usable: ['science_fiction', 'urban_life'], fusion: ['posthuman', 'war_military'], weak: ['historical', 'court'] })),
  cd_hair_mint_green: dyedHairColor(fit('none', { strong: ['fashion_idol'], usable: ['urban_life', 'romance'], fusion: ['fantasy', 'ecological', 'science_fiction'], weak: ['historical', 'court'] })),
  cd_hair_emerald_green: dyedHairColor(fit('none', { strong: ['fashion_idol'], usable: ['urban_life'], fusion: ['fantasy', 'xianxia', 'ecological', 'dark_fantasy'], weak: ['historical'] })),
  cd_hair_split_dye: dyedHairColor(fit('none', { strong: ['fashion_idol', 'urban_life'], usable: ['noir_crime'], fusion: ['cyberpunk', 'surreal'], weak: ['historical', 'court', 'wuxia'] })),
  cd_hair_highlight_streaks: dyedHairColor(fit('weak', { strong: ['fashion_idol', 'urban_life'], usable: ['real_professional', 'romance'], fusion: ['cyberpunk'] })),
  cd_hair_ombre_soft: dyedHairColor(fit('weak', { strong: ['fashion_idol', 'urban_life'], usable: ['romance', 'boudoir_aesthetic'], fusion: ['fantasy'] })),
  cd_hair_hidden_underlayer: dyedHairColor(fit('none', { strong: ['urban_life', 'fashion_idol'], usable: ['real_professional', 'noir_crime'], fusion: ['cyberpunk'], weak: ['historical'] })),
  cd_hair_grown_out_bleach: dyedHairColor(fit('none', { strong: ['urban_life'], usable: ['fashion_idol', 'noir_crime', 'wasteland'], fusion: ['cyberpunk'], weak: ['historical', 'court'] })),
  cd_hair_liquid_silver: surrealHair(['near_future', 'far_future', 'timeless', 'mythic'], 3, hairTech, fit('none', { strong: ['science_fiction', 'posthuman'], usable: ['cyberpunk', 'fantasy'], fusion: ['xianxia', 'mythic_epic'] })),
  cd_hair_holographic: surrealHair(futureEras, 3, hairTech, fit('none', { strong: ['cyberpunk', 'science_fiction', 'posthuman'], usable: ['fashion_idol'], fusion: ['surreal'] })),
  cd_hair_bioluminescent: surrealHair(['near_future', 'far_future', 'timeless'], 4, hairBio, fit('none', { strong: ['biopunk', 'ecological'], usable: ['science_fiction', 'body_horror'], fusion: ['fantasy', 'xianxia'] })),
  cd_hair_nebula: surrealHair(['far_future', 'timeless', 'mythic'], 4, hairMystic, fit('none', { strong: ['mythic_epic', 'surreal'], usable: ['science_fiction', 'fantasy', 'religious_ritual'], fusion: ['xianxia'] })),
  cd_hair_void_black: surrealHair(['far_future', 'timeless', 'mythic'], 4, hairMystic, fit('none', { strong: ['dark_fantasy', 'surreal'], usable: ['horror', 'mythic_epic', 'xianxia'], fusion: ['science_fiction'] })),

  cd_hair_f_long_straight: basicHairStyle(fit('usable', { usable: ['historical', 'court', 'romance', 'fashion_idol', 'xianxia'] })),
  cd_hair_f_waist_length: basicHairStyle(fit('usable', { strong: ['xianxia'], usable: ['historical', 'court', 'romance', 'fantasy', 'religious_ritual'] })),
  cd_hair_f_layered_long: modernHairStyle(),
  cd_hair_f_side_swept: basicHairStyle(fit('usable', { usable: ['romance', 'fashion_idol', 'noir_crime', 'boudoir_aesthetic'] })),
  cd_hair_f_high_ponytail: basicHairStyle(fit('usable', { usable: ['war_military', 'wuxia', 'adventure', 'fashion_idol', 'real_professional'] })),
  cd_hair_f_low_ponytail: basicHairStyle(fit('usable', { usable: ['real_professional', 'romance', 'historical', 'court'] })),
  cd_hair_f_bubble_ponytail: modernHairStyle(fit('none', { strong: ['fashion_idol', 'urban_life'], usable: ['romance'], fusion: ['cyberpunk'], weak: ['historical', 'court', 'wuxia'] })),
  cd_hair_f_clean_bun: basicHairStyle(fit('usable', { usable: ['real_professional', 'court', 'religious_ritual', 'fashion_idol', 'war_military'] })),
  cd_hair_f_messy_bun: modernHairStyle(fit('usable', { strong: ['urban_life'], usable: ['romance', 'fashion_idol', 'boudoir_aesthetic'], fusion: ['noir_crime'] })),
  cd_hair_f_low_chignon: basicHairStyle(fit('usable', { usable: ['court', 'historical', 'romance', 'real_professional', 'fashion_idol'] })),
  cd_hair_f_french_twist: industrialHairStyle(fit('none', { strong: ['court', 'real_professional'], usable: ['fashion_idol', 'romance', 'boudoir_aesthetic'], weak: ['wuxia', 'xianxia'] })),
  cd_hair_f_double_buns: modernHairStyle(fit('none', { strong: ['fashion_idol', 'urban_life'], usable: ['romance'], fusion: ['cyberpunk', 'surreal'], weak: ['historical', 'court'] })),
  cd_hair_f_twin_tails: modernHairStyle(fit('none', { strong: ['fashion_idol'], usable: ['urban_life', 'romance'], fusion: ['surreal', 'cyberpunk'], weak: ['historical', 'court', 'wuxia'] })),
  cd_hair_f_beach_waves: modernHairStyle(fit('usable', { strong: ['fashion_idol'], usable: ['romance', 'urban_life', 'boudoir_aesthetic', 'ecological'] })),
  cd_hair_f_hollywood_waves: industrialHairStyle(fit('none', { strong: ['fashion_idol', 'romance'], usable: ['noir_crime', 'boudoir_aesthetic', 'court'], fusion: ['dark_fantasy'], weak: ['wuxia', 'xianxia'] })),
  cd_hair_f_ringlets: basicHairStyle(fit('usable', { usable: ['historical', 'court', 'romance', 'fashion_idol'], fusion: ['fantasy', 'dark_fantasy'] })),
  cd_hair_f_natural_afro: basicHairStyle(fit('usable', { usable: ['urban_life', 'fashion_idol', 'real_professional', 'romance'] })),
  cd_hair_f_tight_curls: basicHairStyle(fit('usable', { usable: ['urban_life', 'fashion_idol', 'historical', 'romance'] })),
  cd_hair_f_french_bob: modernHairStyle(fit('none', { strong: ['fashion_idol', 'urban_life'], usable: ['real_professional', 'romance', 'noir_crime'], weak: ['historical', 'court'] })),
  cd_hair_f_blunt_bob: modernHairStyle(),
  cd_hair_f_lob: modernHairStyle(),
  cd_hair_f_pixie: modernHairStyle(fit('none', { strong: ['fashion_idol', 'urban_life'], usable: ['real_professional', 'romance'], fusion: ['war_military', 'cyberpunk'], weak: ['historical', 'court'] })),
  cd_hair_f_feminine_buzz: modernHairStyle(fit('none', { strong: ['war_military', 'fashion_idol'], usable: ['urban_life', 'real_professional'], fusion: ['wasteland', 'cyberpunk'], weak: ['historical', 'court'] })),
  cd_hair_f_asym_short: modernHairStyle(fit('none', { strong: ['fashion_idol', 'urban_life'], usable: ['noir_crime'], fusion: ['cyberpunk', 'posthuman'], weak: ['historical', 'court'] })),
  cd_hair_f_box_braids: modernHairStyle(fit('usable', { strong: ['urban_life', 'fashion_idol'], usable: ['adventure', 'real_professional'], fusion: ['wasteland'] })),
  cd_hair_f_cornrows: basicHairStyle(fit('usable', { strong: ['urban_life'], usable: ['war_military', 'fashion_idol', 'adventure'], fusion: ['wasteland'] })),
  cd_hair_f_crown_braid: basicHairStyle(fit('usable', { strong: ['religious_ritual'], usable: ['historical', 'court', 'fantasy', 'xianxia', 'romance'] })),
  cd_hair_f_fishtail_braid: basicHairStyle(fit('usable', { usable: ['romance', 'adventure', 'ecological', 'fashion_idol'], fusion: ['fantasy'] })),
  cd_hair_f_dutch_braids: modernHairStyle(fit('usable', { strong: ['war_military', 'adventure'], usable: ['urban_life', 'wasteland', 'fashion_idol'] })),
  cd_hair_f_micro_braids: basicHairStyle(fit('usable', { usable: ['urban_life', 'fashion_idol', 'adventure', 'ecological'], fusion: ['fantasy'] })),
  cd_hair_f_straight_bangs: basicHairStyle(fit('usable', { usable: ['fashion_idol', 'historical', 'romance'], fusion: ['surreal'] })),
  cd_hair_f_curtain_bangs: modernHairStyle(),
  cd_hair_f_wispy_bangs: modernHairStyle(),
  cd_hair_f_side_bangs: modernHairStyle(fit('usable', { usable: ['real_professional', 'urban_life', 'romance', 'fashion_idol', 'noir_crime'] })),
  cd_hair_f_face_frame_layers: modernHairStyle(),
  cd_hair_f_baby_bangs: industrialHairStyle(fit('none', { strong: ['fashion_idol', 'urban_life'], usable: ['noir_crime'], fusion: ['surreal', 'dark_fantasy'], weak: ['historical', 'court'] })),
  cd_hair_f_hime_cut: historicalHairStyle(['feudal', 'modern', 'contemporary', 'near_future', 'timeless'], fit('none', { strong: ['fashion_idol'], usable: ['historical', 'court', 'xianxia'], fusion: ['surreal', 'cyberpunk'], weak: ['real_professional'] })),
  cd_hair_f_tang_updo: historicalHairStyle(['feudal', 'timeless', 'mythic'], fit('none', { strong: ['historical', 'court'], usable: ['xianxia', 'mythic_epic', 'religious_ritual'], fusion: ['fantasy'] })),
  cd_hair_f_geisha_shimada: historicalHairStyle(['feudal', 'early_modern', 'industrial', 'timeless'], fit('none', { strong: ['historical', 'court'], usable: ['religious_ritual', 'fashion_idol'], fusion: ['dark_fantasy'], weak: ['wuxia', 'science_fiction'] })),
  cd_hair_f_victorian_updo: historicalHairStyle(['industrial', 'timeless'], fit('none', { strong: ['historical', 'court'], usable: ['dark_fantasy', 'romance', 'religious_ritual'], fusion: ['horror'] })),
  cd_hair_f_flapper_bob: historicalHairStyle(['modern', 'timeless'], fit('none', { strong: ['fashion_idol', 'historical'], usable: ['romance', 'noir_crime', 'urban_life', 'boudoir_aesthetic'], weak: ['wuxia', 'xianxia'] })),
  cd_hair_f_qipao_waves: historicalHairStyle(['modern', 'timeless'], fit('none', { strong: ['historical', 'romance'], usable: ['noir_crime', 'court', 'fashion_idol', 'boudoir_aesthetic'], weak: ['science_fiction'] })),
  cd_hair_f_space_buns_y2k: stageHairStyle(fit('none', { strong: ['fashion_idol', 'urban_life'], usable: ['romance'], fusion: ['cyberpunk', 'surreal'], weak: ['historical', 'court'] })),
  cd_hair_f_wolf_cut: stageHairStyle(fit('none', { strong: ['urban_life', 'fashion_idol'], usable: ['noir_crime'], fusion: ['cyberpunk', 'wasteland'], weak: ['historical', 'court'] })),
  cd_hair_f_shag_cut: industrialHairStyle(fit('none', { strong: ['urban_life', 'fashion_idol'], usable: ['romance', 'noir_crime'], fusion: ['wasteland'], weak: ['court'] })),
  cd_hair_f_visual_kei_layers: stageHairStyle(fit('none', { strong: ['fashion_idol'], usable: ['urban_life'], fusion: ['dark_fantasy', 'cyberpunk', 'surreal'], weak: ['historical'] })),
  cd_hair_f_gothic_lolita_curls: stageHairStyle(fit('none', { strong: ['fashion_idol', 'dark_fantasy'], usable: ['romance', 'boudoir_aesthetic'], fusion: ['horror', 'surreal'], weak: ['real_professional'] })),
  cd_hair_f_techwear_tied_back: stageHairStyle(fit('none', { strong: ['cyberpunk', 'urban_life'], usable: ['science_fiction', 'war_military', 'fashion_idol'], fusion: ['posthuman'], weak: ['historical', 'court'] })),
  cd_hair_f_combat_braid: functionalHairStyle(allRealEras, fit('usable', { strong: ['war_military', 'adventure'], usable: ['wuxia', 'wasteland', 'ecological'], fusion: ['xianxia'] })),
  cd_hair_f_slicked_back_bun: functionalHairStyle(modernFutureEras, fit('none', { strong: ['war_military', 'real_professional', 'fashion_idol'], usable: ['noir_crime'], fusion: ['cyberpunk'], weak: ['historical'] })),
  cd_hair_f_helmet_ready_short: functionalHairStyle(modernFutureEras, fit('none', { strong: ['war_military', 'real_professional'], usable: ['science_fiction', 'urban_life'], fusion: ['cyberpunk', 'posthuman'], weak: ['historical', 'court'] })),
  cd_hair_f_ritual_veil_hair: functionalHairStyle(allRealEras, fit('none', { strong: ['religious_ritual'], usable: ['court', 'historical', 'xianxia', 'dark_fantasy'], fusion: ['mythic_epic'] })),
  cd_hair_f_traveling_loose_braid: functionalHairStyle(allRealEras, fit('usable', { strong: ['adventure'], usable: ['wuxia', 'ecological', 'romance'], fusion: ['wasteland', 'xianxia'] })),
  cd_hair_f_wet_tied_back: functionalHairStyle(modernFutureEras, fit('usable', { usable: ['urban_life', 'war_military', 'noir_crime', 'fashion_idol'], fusion: ['cyberpunk', 'ecological'] })),
  cd_hair_f_living_vine_hair: surrealHair(mythicFutureEras, 4, hairBio, fit('none', { strong: ['ecological', 'fantasy'], usable: ['xianxia', 'biopunk', 'body_horror'], fusion: ['mythic_epic'] })),
  cd_hair_f_snake_medusa_hair: surrealHair(mythicTimelessEras, 5, hairBio, fit('none', { strong: ['mythic_epic', 'body_horror'], usable: ['horror', 'dark_fantasy', 'fantasy'], fusion: ['xianxia'] })),
  cd_hair_f_fiber_optic_hair: surrealHair(futureEras, 4, hairTech, fit('none', { strong: ['cyberpunk', 'science_fiction', 'posthuman'], usable: ['fashion_idol'], fusion: ['surreal'] })),
  cd_hair_f_floating_halo_hair: surrealHair(['far_future', 'timeless', 'mythic'], 4, hairMystic, fit('none', { strong: ['religious_ritual', 'mythic_epic'], usable: ['xianxia', 'surreal', 'fantasy'], fusion: ['science_fiction'] })),
  cd_hair_f_crystal_growth_hair: surrealHair(['far_future', 'timeless', 'mythic'], 4, hairSurreal, fit('none', { strong: ['fantasy', 'xianxia'], usable: ['biopunk', 'body_horror', 'science_fiction'], fusion: ['surreal'] })),
  cd_hair_f_shadow_smoke_hair: surrealHair(mythicFutureEras, 5, hairMystic, fit('none', { strong: ['dark_fantasy', 'surreal'], usable: ['horror', 'xianxia', 'fantasy'], fusion: ['body_horror'] })),

  cd_hair_m_crew_cut: basicHairStyle(fit('usable', { strong: ['real_professional', 'war_military'], usable: ['urban_life'] })),
  cd_hair_m_buzz_cut: basicHairStyle(fit('usable', { strong: ['war_military'], usable: ['wasteland', 'real_professional', 'urban_life'], fusion: ['noir_crime'] })),
  cd_hair_m_high_and_tight: modernHairStyle(fit('none', { strong: ['war_military', 'real_professional'], usable: ['urban_life'], fusion: ['wasteland'], weak: ['historical', 'court'] })),
  cd_hair_m_ivy_league: modernHairStyle(fit('none', { strong: ['real_professional', 'court'], usable: ['urban_life', 'romance', 'noir_crime'], weak: ['wuxia', 'xianxia'] })),
  cd_hair_m_side_part: industrialHairStyle(fit('none', { strong: ['real_professional', 'noir_crime'], usable: ['historical', 'court', 'romance'], weak: ['xianxia'] })),
  cd_hair_m_french_crop: modernHairStyle(fit('none', { strong: ['urban_life', 'real_professional'], usable: ['noir_crime'], fusion: ['wasteland'], weak: ['historical', 'court'] })),
  cd_hair_m_slick_back: industrialHairStyle(fit('none', { strong: ['noir_crime', 'urban_life'], usable: ['court', 'real_professional', 'fashion_idol', 'boudoir_aesthetic'], fusion: ['dark_fantasy'], weak: ['wuxia', 'xianxia'] })),
  cd_hair_m_pompadour: industrialHairStyle(fit('none', { strong: ['fashion_idol', 'urban_life'], usable: ['noir_crime', 'romance', 'boudoir_aesthetic'], fusion: ['dark_fantasy'], weak: ['wuxia'] })),
  cd_hair_m_quiff: modernHairStyle(fit('none', { strong: ['fashion_idol', 'urban_life'], usable: ['romance', 'real_professional'], weak: ['historical'] })),
  cd_hair_m_curtain_hair: modernHairStyle(fit('none', { strong: ['fashion_idol', 'urban_life'], usable: ['romance', 'noir_crime'], weak: ['historical'] })),
  cd_hair_m_bro_flow: modernHairStyle(fit('usable', { strong: ['fashion_idol', 'urban_life'], usable: ['romance', 'ecological', 'adventure'] })),
  cd_hair_m_messy_medium: modernHairStyle(fit('usable', { usable: ['romance', 'noir_crime', 'urban_life', 'horror', 'wasteland'] })),
  cd_hair_m_man_bun: modernHairStyle(fit('usable', { usable: ['urban_life', 'adventure', 'fashion_idol'], fusion: ['wuxia', 'fantasy'] })),
  cd_hair_m_samurai_topknot: historicalHairStyle(['feudal', 'early_modern', 'timeless'], fit('none', { strong: ['historical', 'wuxia'], usable: ['war_military', 'adventure'], fusion: ['xianxia', 'fantasy'] })),
  cd_hair_m_low_tail: basicHairStyle(fit('usable', { strong: ['wuxia'], usable: ['historical', 'court', 'romance', 'xianxia', 'fantasy'] })),
  cd_hair_m_loose_long: basicHairStyle(fit('usable', { usable: ['xianxia', 'dark_fantasy', 'romance', 'ecological', 'adventure'], fusion: ['horror'] })),
  cd_hair_m_half_up_long: basicHairStyle(fit('usable', { strong: ['wuxia', 'xianxia'], usable: ['historical', 'court', 'fantasy', 'romance'] })),
  cd_hair_m_braided_tail: basicHairStyle(fit('usable', { strong: ['adventure'], usable: ['historical', 'wuxia', 'war_military', 'ecological'] })),
  cd_hair_m_natural_curls: basicHairStyle(fit('usable', { usable: ['urban_life', 'romance', 'fashion_idol', 'real_professional'] })),
  cd_hair_m_tight_coils: basicHairStyle(fit('usable', { usable: ['urban_life', 'fashion_idol', 'real_professional'] })),
  cd_hair_m_short_afro: basicHairStyle(fit('usable', { usable: ['urban_life', 'fashion_idol', 'real_professional', 'war_military'] })),
  cd_hair_m_curly_fringe: modernHairStyle(fit('usable', { usable: ['romance', 'urban_life', 'fashion_idol', 'noir_crime'] })),
  cd_hair_m_wavy_shag: modernHairStyle(fit('none', { strong: ['fashion_idol', 'urban_life'], usable: ['romance', 'noir_crime'], fusion: ['wasteland'], weak: ['court'] })),
  cd_hair_m_wet_curls: modernHairStyle(fit('usable', { usable: ['fashion_idol', 'urban_life', 'romance', 'boudoir_aesthetic'], fusion: ['ecological'] })),
  cd_hair_m_mohawk: modernHairStyle(fit('none', { strong: ['wasteland', 'urban_life'], usable: ['war_military', 'fashion_idol'], fusion: ['cyberpunk'], weak: ['historical', 'court'] })),
  cd_hair_m_faux_hawk: modernHairStyle(fit('none', { strong: ['urban_life', 'fashion_idol'], usable: ['real_professional', 'war_military'], weak: ['historical'] })),
  cd_hair_m_undercut: modernHairStyle(fit('none', { strong: ['urban_life', 'noir_crime'], usable: ['fashion_idol', 'real_professional'], fusion: ['cyberpunk', 'wasteland'], weak: ['historical', 'court'] })),
  cd_hair_m_mullet: modernHairStyle(fit('none', { strong: ['urban_life', 'fashion_idol'], usable: ['romance', 'wasteland'], fusion: ['noir_crime'], weak: ['historical', 'court'] })),
  cd_hair_m_skin_fade: modernHairStyle(fit('none', { strong: ['urban_life', 'real_professional'], usable: ['fashion_idol', 'noir_crime', 'war_military'], weak: ['historical'] })),
  cd_hair_m_bleached_crop: modernHairStyle(fit('none', { strong: ['fashion_idol', 'urban_life'], usable: ['noir_crime'], fusion: ['cyberpunk', 'wasteland'], weak: ['historical', 'court'] })),
  cd_hair_m_cornrows: basicHairStyle(fit('usable', { strong: ['urban_life'], usable: ['war_military', 'fashion_idol', 'adventure'], fusion: ['wasteland'] })),
  cd_hair_m_box_braids: modernHairStyle(fit('usable', { strong: ['urban_life', 'fashion_idol'], usable: ['adventure'], fusion: ['wasteland'] })),
  cd_hair_m_short_locs: modernHairStyle(fit('usable', { strong: ['urban_life', 'fashion_idol'], usable: ['ecological', 'adventure'] })),
  cd_hair_m_long_locs: basicHairStyle(fit('usable', { strong: ['adventure'], usable: ['urban_life', 'fashion_idol', 'ecological', 'religious_ritual'] })),
  cd_hair_m_braided_topknot: modernHairStyle(fit('usable', { strong: ['war_military', 'adventure'], usable: ['urban_life', 'wuxia', 'fashion_idol'], fusion: ['fantasy'] })),
  cd_hair_m_beaded_braids: basicHairStyle(fit('usable', { strong: ['adventure', 'religious_ritual'], usable: ['ecological', 'fashion_idol', 'urban_life'], fusion: ['fantasy'] })),
  cd_hair_m_qing_queue: historicalHairStyle(['early_modern', 'industrial'], fit('none', { strong: ['historical'], usable: ['court', 'wuxia'], fusion: ['dark_fantasy'], weak: ['science_fiction', 'cyberpunk', 'urban_life'] })),
  cd_hair_m_ming_topknot: historicalHairStyle(['feudal', 'timeless'], fit('none', { strong: ['historical', 'wuxia'], usable: ['court', 'xianxia', 'religious_ritual'], fusion: ['fantasy'] })),
  cd_hair_m_daoist_topknot: historicalHairStyle(['feudal', 'early_modern', 'timeless', 'mythic'], fit('none', { strong: ['xianxia', 'religious_ritual'], usable: ['historical', 'mythic_epic', 'wuxia'], fusion: ['fantasy'] })),
  cd_hair_m_viking_braids: historicalHairStyle(['feudal', 'timeless', 'mythic'], fit('none', { strong: ['historical', 'war_military'], usable: ['fantasy', 'adventure', 'mythic_epic'], fusion: ['dark_fantasy'] })),
  cd_hair_m_regency_waves: historicalHairStyle(['early_modern', 'timeless'], fit('none', { strong: ['historical', 'court', 'romance'], usable: ['real_professional'], fusion: ['dark_fantasy'], weak: ['wuxia', 'science_fiction'] })),
  cd_hair_m_western_long_hair: historicalHairStyle(['industrial', 'modern', 'timeless'], fit('none', { strong: ['adventure'], usable: ['wasteland', 'historical', 'ecological'], fusion: ['noir_crime'] })),
  cd_hair_m_helmet_crop: functionalHairStyle(modernFutureEras, fit('none', { strong: ['war_military', 'real_professional'], usable: ['science_fiction'], fusion: ['cyberpunk', 'posthuman'], weak: ['historical'] })),
  cd_hair_m_sweat_pushed_back: functionalHairStyle(modernFutureEras, fit('usable', { strong: ['war_military'], usable: ['urban_life', 'noir_crime', 'wasteland', 'fashion_idol'] })),
  cd_hair_m_field_cap_hair: functionalHairStyle(modernFutureEras, fit('none', { strong: ['real_professional', 'wasteland'], usable: ['war_military', 'urban_life'], fusion: ['posthuman'], weak: ['court'] })),
  cd_hair_m_rough_shaved_sides: functionalHairStyle(modernFutureEras, fit('none', { strong: ['wasteland', 'noir_crime'], usable: ['war_military', 'urban_life'], fusion: ['cyberpunk'], weak: ['court'] })),
  cd_hair_m_tied_under_hood: functionalHairStyle(modernFutureEras, fit('usable', { strong: ['noir_crime'], usable: ['adventure', 'urban_life', 'war_military'], fusion: ['wuxia', 'cyberpunk'] })),
  cd_hair_m_oil_work_hair: functionalHairStyle(modernFutureEras, fit('none', { strong: ['real_professional'], usable: ['wasteland', 'urban_life'], fusion: ['science_fiction', 'cyberpunk'], weak: ['court'] })),
  cd_hair_m_idol_two_block: stageHairStyle(),
  cd_hair_m_wet_slick_runway: stageHairStyle(fit('none', { strong: ['fashion_idol', 'boudoir_aesthetic'], usable: ['urban_life', 'noir_crime'], fusion: ['cyberpunk'], weak: ['historical'] })),
  cd_hair_m_glam_rock_layers: stageHairStyle(fit('none', { strong: ['fashion_idol', 'urban_life'], usable: ['romance'], fusion: ['dark_fantasy', 'surreal'], weak: ['court'] })),
  cd_hair_m_disco_feathered: industrialHairStyle(fit('none', { strong: ['fashion_idol', 'urban_life'], usable: ['romance', 'boudoir_aesthetic'], weak: ['historical', 'court'] })),
  cd_hair_m_editorial_center_part: stageHairStyle(fit('none', { strong: ['fashion_idol', 'real_professional'], usable: ['urban_life', 'romance', 'boudoir_aesthetic'], weak: ['historical'] })),
  cd_hair_m_spiked_anime_hair: stageHairStyle(fit('none', { strong: ['fashion_idol'], usable: ['urban_life'], fusion: ['surreal', 'cyberpunk'], weak: ['historical', 'court'] })),
  cd_hair_m_metal_cable_hair: surrealHair(futureEras, 4, hairTech, fit('none', { strong: ['cyberpunk', 'science_fiction', 'posthuman'], usable: ['body_horror'], fusion: ['surreal'] })),
  cd_hair_m_antenna_hair: surrealHair(['near_future', 'far_future', 'mythic'], 4, hairTech, fit('none', { strong: ['cyberpunk', 'science_fiction'], usable: ['posthuman', 'biopunk'], fusion: ['body_horror', 'fantasy'] })),
  cd_hair_m_flame_hair: surrealHair(mythicFutureEras, 5, hairMystic, fit('none', { strong: ['fantasy', 'mythic_epic'], usable: ['xianxia', 'dark_fantasy', 'religious_ritual'], fusion: ['science_fiction'] })),
  cd_hair_m_bone_crest_hair: surrealHair(mythicFutureEras, 5, hairBio, fit('none', { strong: ['body_horror'], usable: ['biopunk', 'horror', 'dark_fantasy', 'fantasy'], fusion: ['war_military'] })),
  cd_hair_m_magnetic_floating_hair: surrealHair(['near_future', 'far_future', 'timeless', 'mythic'], 4, hairSurreal, fit('none', { strong: ['posthuman', 'science_fiction'], usable: ['cyberpunk', 'surreal'], fusion: ['xianxia', 'mythic_epic'] })),
  cd_hair_m_glass_fiber_hair: surrealHair(['near_future', 'far_future', 'timeless'], 4, hairAbstract, fit('none', { strong: ['science_fiction', 'posthuman'], usable: ['abstract', 'surreal'], fusion: ['fantasy', 'mythic_epic'] }))
};

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

const broadHumanPatch: Partial<LibraryItemDef> = {
  publicFilterTags: ['realistic', 'human'],
  nativeTags: ['realistic'],
  compatibleGenres: ['real_professional', 'urban_life', 'historical', 'romance'],
  compatibleEras: ['feudal', 'early_modern', 'industrial', 'modern', 'contemporary', 'near_future', 'timeless'],
  compatibleCultures: ['contemporary_urban', 'global_corporate', 'east_asian_modern', 'western_modern', 'east_asian_historical', 'western_court'],
  compatibleSpaces: ['street', 'interior', 'office', 'city', 'market', 'courtyard'],
  genreStrictness: 'soft',
  cultureStrictness: 'soft',
  tags: ['subject_axis', 'grooming_axis']
};

const fashionPatch: Partial<LibraryItemDef> = {
  publicFilterTags: ['fashion', 'glamour'],
  nativeTags: ['fashion', 'glamour'],
  evidenceTags: ['fashion', 'media', 'social'],
  compatibleGenres: ['fashion_idol', 'urban_life', 'romance'],
  compatibleEras: ['industrial', 'modern', 'contemporary', 'near_future', 'timeless'],
  compatibleCultures: ['contemporary_urban', 'global_corporate', 'east_asian_modern', 'western_modern', 'symbolic_stage'],
  compatibleSpaces: ['studio', 'club', 'bar', 'street', 'interior', 'stage', 'city'],
  genreStrictness: 'soft',
  cultureStrictness: 'soft',
  tags: ['subject_axis', 'grooming_axis', 'fashion_grooming']
};

const subculturePatch: Partial<LibraryItemDef> = {
  publicFilterTags: ['urban', 'subculture', 'stage'],
  nativeTags: ['urban', 'social'],
  evidenceTags: ['media', 'social', 'fashion'],
  compatibleGenres: ['urban_life', 'fashion_idol', 'noir_crime', 'cyberpunk'],
  compatibleEras: ['modern', 'contemporary', 'near_future', 'timeless'],
  compatibleCultures: ['contemporary_urban', 'east_asian_modern', 'western_modern', 'cyber_megacity', 'symbolic_stage'],
  compatibleSpaces: ['street', 'bar', 'club', 'stage', 'city', 'alley'],
  genreStrictness: 'soft',
  cultureStrictness: 'soft',
  tags: ['subject_axis', 'grooming_axis', 'subculture_grooming']
};

const eastAsianPeriodPatch: Partial<LibraryItemDef> = {
  publicFilterTags: ['wuxia', 'xianxia', 'historical'],
  nativeTags: ['wuxia', 'xianxia', 'ritual'],
  evidenceTags: ['ritual', 'training', 'costume'],
  compatibleGenres: ['wuxia', 'xianxia', 'historical', 'court', 'religious_ritual'],
  compatibleEras: ['feudal', 'early_modern', 'mythic', 'timeless'],
  compatibleCultures: ['chinese_jianghu', 'east_asian_historical', 'east_asian_mythic', 'sect_order', 'mountain_monastery', 'imperial_bureaucracy'],
  compatibleSpaces: ['temple', 'mountain', 'courtyard', 'training_ground', 'palace', 'forest'],
  genreStrictness: 'soft',
  cultureStrictness: 'soft',
  tags: ['subject_axis', 'grooming_axis', 'east_asian_period_grooming']
};

const eastAsianRegionalPatch: Partial<LibraryItemDef> = {
  publicFilterTags: ['historical', 'ritual', 'stage'],
  nativeTags: ['historical', 'ritual'],
  evidenceTags: ['ritual', 'costume', 'symbol'],
  compatibleGenres: ['historical', 'court', 'religious_ritual', 'mythic_epic'],
  compatibleEras: ['feudal', 'early_modern', 'industrial', 'modern', 'timeless'],
  compatibleCultures: ['east_asian_historical', 'east_asian_ritual', 'historical_court', 'symbolic_stage'],
  compatibleSpaces: ['temple', 'palace', 'stage', 'courtyard', 'interior'],
  genreStrictness: 'soft',
  cultureStrictness: 'soft',
  tags: ['subject_axis', 'grooming_axis', 'east_asian_regional_grooming']
};

const westernPeriodPatch: Partial<LibraryItemDef> = {
  publicFilterTags: ['historical', 'court'],
  nativeTags: ['historical', 'aristocratic'],
  evidenceTags: ['costume', 'institution'],
  compatibleGenres: ['historical', 'court', 'religious_ritual', 'adventure'],
  compatibleEras: ['feudal', 'early_modern', 'industrial', 'timeless'],
  compatibleCultures: ['historical_court', 'western_court', 'religious_order'],
  compatibleSpaces: ['palace', 'temple', 'archive', 'fortress', 'market', 'interior'],
  genreStrictness: 'soft',
  cultureStrictness: 'soft',
  tags: ['subject_axis', 'grooming_axis', 'western_period_grooming']
};

const combatPatch: Partial<LibraryItemDef> = {
  publicFilterTags: ['combat', 'survival'],
  nativeTags: ['combat', 'survival'],
  evidenceTags: ['combat', 'training', 'survival'],
  compatibleGenres: ['wuxia', 'war_military', 'wasteland', 'post_apocalyptic', 'real_professional', 'survival'],
  compatibleEras: ['feudal', 'early_modern', 'industrial', 'modern', 'contemporary', 'near_future', 'far_future', 'timeless'],
  compatibleCultures: ['chinese_jianghu', 'military_remnant', 'postapocalyptic_wasteland', 'frontier_survival', 'institutional_modern'],
  compatibleSpaces: ['training_ground', 'street', 'road', 'shelter', 'scrapyard', 'factory', 'forest'],
  genreStrictness: 'soft',
  cultureStrictness: 'soft',
  tags: ['subject_axis', 'grooming_axis', 'functional_grooming']
};

const cyberPatch: Partial<LibraryItemDef> = {
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
  tags: ['subject_axis', 'grooming_axis', 'cyber_grooming']
};

const bioPatch: Partial<LibraryItemDef> = {
  publicFilterTags: ['bio', 'mutation', 'body'],
  nativeTags: ['biological', 'body'],
  compatibleGenres: ['biopunk', 'body_horror', 'science_fiction', 'horror', 'ecological'],
  compatibleEras: ['modern', 'contemporary', 'near_future', 'far_future', 'timeless', 'mythic'],
  compatibleCultures: ['biotech_lab', 'posthuman_research', 'ecological_wild', 'alien_ecology'],
  compatibleSpaces: ['lab', 'containment', 'forest', 'wetland', 'cave', 'greenhouse', 'alien_planet'],
  genreStrictness: 'hard',
  cultureStrictness: 'soft',
  tags: ['subject_axis', 'grooming_axis', 'bio_grooming']
};

const mysticPatch: Partial<LibraryItemDef> = {
  publicFilterTags: ['magic', 'ritual', 'symbol'],
  nativeTags: ['magic', 'ritual', 'symbol'],
  excludeGenreTags: ['biopunk'],
  compatibleGenres: ['xianxia', 'dark_fantasy', 'religious_ritual', 'mythic_epic', 'fantasy', 'surreal'],
  compatibleEras: ['feudal', 'early_modern', 'mythic', 'timeless'],
  compatibleCultures: ['east_asian_mythic', 'mythic_cult', 'religious_order', 'forbidden_temple', 'mountain_monastery'],
  compatibleSpaces: ['temple', 'altar', 'cave', 'mountain', 'forest', 'landscape'],
  genreStrictness: 'soft',
  cultureStrictness: 'soft',
  tags: ['subject_axis', 'grooming_axis', 'mystic_grooming']
};

const dreamGroomingPatch: Partial<LibraryItemDef> = {
  publicFilterTags: ['dream', 'surreal'],
  nativeTags: ['dream', 'surreal'],
  evidenceTags: ['dream', 'liminal', 'sleep', 'threshold'],
  compatibleGenres: ['dream', 'surreal', 'psychological'],
  compatibleEras: ['contemporary', 'timeless', 'mythic'],
  compatibleCultures: ['dream_psychic', 'symbolic_stage', 'liminal_modern'],
  compatibleSpaces: ['bedroom', 'mirror_room', 'liminal', 'void', 'stage', 'interior', 'threshold'],
  genreStrictness: 'hard',
  cultureStrictness: 'soft',
  tags: ['subject_axis', 'grooming_axis', 'dream_grooming']
};

const abstractGroomingPatch: Partial<LibraryItemDef> = {
  publicFilterTags: ['abstract', 'surreal'],
  nativeTags: ['abstract', 'surreal'],
  evidenceTags: ['abstract', 'geometry', 'negative_space', 'deconstruction', 'mask'],
  compatibleGenres: ['abstract', 'surreal', 'dream'],
  compatibleEras: ['contemporary', 'timeless', 'mythic', 'near_future', 'far_future'],
  compatibleCultures: ['symbolic_stage', 'dream_psychic'],
  compatibleSpaces: ['abstract', 'void', 'stage', 'threshold', 'interior'],
  genreStrictness: 'hard',
  cultureStrictness: 'soft',
  tags: ['subject_axis', 'grooming_axis', 'abstract_grooming']
};

const psychologicalGroomingPatch: Partial<LibraryItemDef> = {
  publicFilterTags: ['psychological', 'realistic'],
  nativeTags: ['psychological', 'realistic'],
  evidenceTags: ['memory', 'isolation', 'identity', 'trauma', 'mirror'],
  compatibleGenres: ['psychological', 'dream', 'noir_crime', 'horror'],
  compatibleEras: ['modern', 'contemporary', 'timeless'],
  compatibleCultures: ['dream_psychic', 'liminal_modern', 'institutional_modern', 'symbolic_stage'],
  compatibleSpaces: ['interior', 'apartment', 'hospital', 'mirror_room', 'liminal', 'stage', 'bedroom'],
  genreStrictness: 'hard',
  cultureStrictness: 'soft',
  tags: ['subject_axis', 'grooming_axis', 'psychological_grooming']
};

const cosmicGroomingPatch: Partial<LibraryItemDef> = {
  publicFilterTags: ['cosmic_horror', 'surreal'],
  nativeTags: ['cosmic', 'void', 'surreal'],
  evidenceTags: ['cosmic', 'void', 'unknown', 'scale', 'madness'],
  compatibleGenres: ['cosmic_horror', 'surreal', 'body_horror', 'horror'],
  compatibleEras: ['modern', 'contemporary', 'near_future', 'far_future', 'mythic', 'timeless'],
  compatibleCultures: ['mythic_cult', 'dream_psychic', 'space_colony', 'symbolic_stage', 'forbidden_temple'],
  compatibleSpaces: ['void', 'temple', 'altar', 'space_station', 'cave', 'underground', 'landscape'],
  genreStrictness: 'hard',
  cultureStrictness: 'soft',
  tags: ['subject_axis', 'grooming_axis', 'cosmic_grooming']
};

const spaceGroomingPatch: Partial<LibraryItemDef> = {
  publicFilterTags: ['space', 'colony', 'functional'],
  nativeTags: ['space', 'survival', 'functional'],
  evidenceTags: ['space', 'survival', 'workflow', 'technology'],
  compatibleGenres: ['space_opera', 'science_fiction', 'posthuman'],
  compatibleEras: ['near_future', 'far_future', 'timeless'],
  compatibleCultures: ['space_colony', 'posthuman_civilization', 'global_corporate'],
  compatibleSpaces: ['space_station', 'spaceship', 'colony', 'alien_planet', 'lab', 'interior'],
  genreStrictness: 'soft',
  cultureStrictness: 'soft',
  tags: ['subject_axis', 'grooming_axis', 'space_grooming']
};

const groomingDirectEvidenceTags: Record<string, string[]> = {
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

const hairStyleDirectGenreTags: Record<string, string[]> = {
  cd_hair_f_waist_length: ['historical', 'wuxia', 'xianxia', 'fantasy', 'religious_ritual'],
  cd_hair_f_layered_long: ['real_professional', 'urban_life', 'romance'],
  cd_hair_f_side_swept: ['romance', 'noir_crime', 'fashion_idol'],
  cd_hair_f_high_ponytail: ['war_military', 'wuxia', 'adventure', 'real_professional'],
  cd_hair_f_low_ponytail: ['real_professional', 'historical', 'romance'],
  cd_hair_f_clean_bun: ['real_professional', 'court', 'religious_ritual'],
  cd_hair_f_messy_bun: ['dream', 'psychological', 'romance'],
  cd_hair_f_low_chignon: ['court', 'historical', 'romance'],
  cd_hair_f_french_twist: ['real_professional', 'court'],
  cd_hair_f_crown_braid: ['religious_ritual', 'mythic_epic', 'historical', 'fantasy', 'xianxia'],
  cd_hair_f_fishtail_braid: ['adventure', 'ecological', 'romance'],
  cd_hair_f_dutch_braids: ['adventure', 'war_military', 'wasteland'],
  cd_hair_f_curtain_bangs: ['urban_life', 'romance', 'real_professional'],
  cd_hair_f_face_frame_layers: ['urban_life', 'romance', 'fashion_idol'],
  cd_hair_f_hime_cut: ['historical', 'court', 'xianxia'],
  cd_hair_f_tang_updo: ['historical', 'court', 'xianxia'],
  cd_hair_f_victorian_updo: ['historical', 'court', 'dark_fantasy'],
  cd_hair_f_qipao_waves: ['historical', 'romance', 'noir_crime'],
  cd_hair_f_wolf_cut: ['urban_life', 'noir_crime', 'cyberpunk'],
  cd_hair_f_techwear_tied_back: ['cyberpunk', 'science_fiction', 'war_military'],
  cd_hair_f_combat_braid: ['wuxia', 'war_military', 'adventure', 'wasteland'],
  cd_hair_f_slicked_back_bun: ['war_military', 'real_professional', 'noir_crime'],
  cd_hair_f_helmet_ready_short: ['war_military', 'science_fiction', 'real_professional'],
  cd_hair_f_ritual_veil_hair: ['religious_ritual', 'dark_fantasy', 'mythic_epic', 'xianxia'],
  cd_hair_f_traveling_loose_braid: ['adventure', 'wuxia', 'ecological'],
  cd_hair_f_living_vine_hair: ['ecological', 'biopunk', 'body_horror'],
  cd_hair_f_snake_medusa_hair: ['body_horror', 'horror', 'dark_fantasy'],
  cd_hair_f_fiber_optic_hair: ['cyberpunk', 'science_fiction', 'posthuman'],
  cd_hair_f_floating_halo_hair: ['cosmic_horror', 'mythic_epic', 'religious_ritual', 'surreal', 'xianxia'],
  cd_hair_f_crystal_growth_hair: ['biopunk', 'body_horror', 'xianxia'],
  cd_hair_f_shadow_smoke_hair: ['cosmic_horror', 'dark_fantasy', 'horror'],

  cd_hair_m_crew_cut: ['real_professional', 'war_military'],
  cd_hair_m_buzz_cut: ['war_military', 'wasteland', 'real_professional'],
  cd_hair_m_high_and_tight: ['war_military', 'real_professional'],
  cd_hair_m_side_part: ['real_professional', 'noir_crime', 'historical'],
  cd_hair_m_slick_back: ['noir_crime', 'urban_life', 'court'],
  cd_hair_m_messy_medium: ['dream', 'psychological', 'romance', 'horror'],
  cd_hair_m_man_bun: ['urban_life', 'adventure', 'fantasy'],
  cd_hair_m_samurai_topknot: ['wuxia', 'historical'],
  cd_hair_m_low_tail: ['wuxia', 'historical', 'romance'],
  cd_hair_m_loose_long: ['dream', 'psychological', 'xianxia', 'dark_fantasy', 'ecological'],
  cd_hair_m_half_up_long: ['wuxia', 'xianxia', 'fantasy'],
  cd_hair_m_braided_tail: ['adventure', 'historical', 'wuxia'],
  cd_hair_m_undercut: ['urban_life', 'noir_crime', 'cyberpunk'],
  cd_hair_m_mohawk: ['wasteland', 'post_apocalyptic', 'war_military'],
  cd_hair_m_skin_fade: ['urban_life', 'real_professional', 'noir_crime'],
  cd_hair_m_braided_topknot: ['wuxia', 'adventure', 'war_military'],
  cd_hair_m_beaded_braids: ['religious_ritual', 'adventure', 'ecological'],
  cd_hair_m_ming_topknot: ['wuxia', 'historical', 'court'],
  cd_hair_m_daoist_topknot: ['xianxia', 'religious_ritual', 'mythic_epic'],
  cd_hair_m_viking_braids: ['historical', 'fantasy', 'war_military'],
  cd_hair_m_western_long_hair: ['adventure', 'wasteland'],
  cd_hair_m_helmet_crop: ['war_military', 'science_fiction', 'real_professional'],
  cd_hair_m_field_cap_hair: ['wasteland', 'post_apocalyptic', 'real_professional'],
  cd_hair_m_rough_shaved_sides: ['wasteland', 'noir_crime', 'war_military'],
  cd_hair_m_tied_under_hood: ['noir_crime', 'wuxia', 'adventure'],
  cd_hair_m_oil_work_hair: ['real_professional', 'wasteland', 'post_apocalyptic'],
  cd_hair_m_metal_cable_hair: ['cyberpunk', 'science_fiction', 'posthuman'],
  cd_hair_m_antenna_hair: ['cyberpunk', 'science_fiction', 'biopunk'],
  cd_hair_m_bone_crest_hair: ['body_horror', 'biopunk', 'horror'],
  cd_hair_m_magnetic_floating_hair: ['posthuman', 'science_fiction', 'cosmic_horror'],
  cd_hair_m_glass_fiber_hair: ['science_fiction', 'posthuman', 'abstract']
};

const makeupDirectGenreTags: Record<string, string[]> = {
  cd_makeup_opera_makeup: ['xianxia', 'wuxia', 'historical', 'religious_ritual'],
  cd_makeup_tribal_paint: ['ecological', 'religious_ritual', 'fantasy'],
  cd_makeup_ritual_ash_face: ['xianxia', 'religious_ritual', 'dark_fantasy'],
  cd_makeup_biolum_face_paint: ['ecological', 'biopunk', 'fantasy', 'xianxia'],
  cd_makeup_priestess_forehead_mark: ['xianxia', 'religious_ritual', 'mythic_epic'],
  cd_makeup_bridal_henna_face: ['religious_ritual', 'romance', 'historical'],
  cd_makeup_saffron_tilak: ['xianxia', 'religious_ritual', 'mythic_epic'],
  cd_makeup_nomad_kohl: ['adventure', 'historical', 'ecological'],
  cd_makeup_warrior_eye_black: ['wuxia', 'war_military', 'adventure'],
  cd_makeup_biotech_sample_marks: ['biopunk', 'body_horror', 'ecological'],
  cd_makeup_forbidden_lip_stain: ['dark_fantasy', 'religious_ritual', 'xianxia'],
  cd_makeup_living_ink_makeup: ['xianxia', 'ecological', 'biopunk', 'fantasy']
};

const withHairStyleDirectAxis = (item: LibraryItemDef): LibraryItemDef => {
  const genreTags = hairStyleDirectGenreTags[item.id || ''] || [];
  if (!genreTags.length) return item;
  const evidenceTags = uniq(genreTags.flatMap(tag => groomingDirectEvidenceTags[tag] || []));
  return merge(item, { genreTags, evidenceTags });
};

const withMakeupDirectAxis = (item: LibraryItemDef): LibraryItemDef => {
  const genreTags = makeupDirectGenreTags[item.id || ''] || [];
  if (!genreTags.length) return item;
  const evidenceTags = uniq(genreTags.flatMap(tag => groomingDirectEvidenceTags[tag] || []));
  return merge(item, { genreTags, evidenceTags });
};

const hairColorPatch = (item: LibraryItemDef): Partial<LibraryItemDef> => {
  const group = item.group || '';
  const id = item.id || '';
  if (group.startsWith('A.')) return broadHumanPatch;
  if (group.startsWith('B.')) {
    if (id.includes('electric') || id.includes('cobalt') || id.includes('split') || id.includes('hidden') || id.includes('lavender')) {
      return { ...subculturePatch, compatibleGenres: ['fashion_idol', 'urban_life', 'cyberpunk'], compatibleEras: ['modern', 'contemporary', 'near_future'] };
    }
    return fashionPatch;
  }
  if (id.includes('nebula') || id.includes('void_black')) return cosmicGroomingPatch;
  if (id.includes('bioluminescent')) return bioPatch;
  if (id.includes('holographic') || id.includes('liquid_silver')) return cyberPatch;
  return mysticPatch;
};

const hairStylePatch = (blockId: string, item: LibraryItemDef): Partial<LibraryItemDef> => {
  const group = item.group || '';
  const id = item.id || '';
  if (group.startsWith('G.')) {
    if (id.includes('ming') || id.includes('daoist') || id.includes('tang')) return eastAsianPeriodPatch;
    if (id.includes('hime') || id.includes('shimada') || id.includes('qing') || id.includes('qipao')) return eastAsianRegionalPatch;
    return westernPeriodPatch;
  }
  if (blockId === 'cd_hair_style_m' && group.startsWith('H.')) return combatPatch;
  if (blockId === 'cd_hair_style_m' && group.startsWith('I.')) return fashionPatch;
  if (blockId === 'cd_hair_style_f' && group.startsWith('I.')) return combatPatch;
  if (group.startsWith('H.') || group.startsWith('E.') || group.startsWith('F.')) return subculturePatch;
  if (group.startsWith('J.')) {
    if (id.includes('fiber') || id.includes('optic') || id.includes('metal') || id.includes('antenna') || id.includes('magnetic') || id.includes('glass')) return cyberPatch;
    if (id.includes('vine') || id.includes('snake') || id.includes('crystal') || id.includes('bone')) return bioPatch;
    if (id.includes('shadow') || id.includes('halo')) return cosmicGroomingPatch;
    return mysticPatch;
  }
  if (id.includes('feminine_buzz') || id.includes('blunt_bob') || id.includes('asym_short')) return abstractGroomingPatch;
  if (id.includes('messy_bun') || id.includes('wet_tied_back') || id.includes('loose_long') || id.includes('messy_medium')) return psychologicalGroomingPatch;
  if (id.includes('traveling_loose_braid')) return { ...combatPatch, compatibleGenres: ['wuxia', 'adventure', 'dream', 'psychological'] };
  if (id.includes('helmet_ready_short') || id.includes('helmet_crop') || id.includes('field_cap_hair') || id.includes('oil_work_hair')) return spaceGroomingPatch;
  if (id.includes('topknot') || id.includes('long') || id.includes('braid') || id.includes('chignon')) {
    return { ...broadHumanPatch, compatibleGenres: ['real_professional', 'historical', 'wuxia', 'xianxia', 'fashion_idol'], evidenceTags: ['costume'] };
  }
  return broadHumanPatch;
};

const beardPatch = (item: LibraryItemDef): Partial<LibraryItemDef> => {
  const group = item.group || '';
  const id = item.id || '';
  if (group.startsWith('D.')) {
    if (id.includes('daoist') || id.includes('scholar')) return eastAsianPeriodPatch;
    return westernPeriodPatch;
  }
  if (group.startsWith('E.')) return fashionPatch;
  if (group.startsWith('F.')) {
    if (id.includes('metal') || id.includes('data')) return cyberPatch;
    if (id.includes('fungal') || id.includes('vine') || id.includes('bone') || id.includes('crystal')) return bioPatch;
    if (id.includes('shadow') || id.includes('glowing')) return cosmicGroomingPatch;
    return mysticPatch;
  }
  return broadHumanPatch;
};

const makeupPatch = (item: LibraryItemDef): Partial<LibraryItemDef> => {
  const group = item.group || '';
  const id = item.id || '';
  if (group.startsWith('A.') || group.startsWith('B.')) return fashionPatch;
  if (group.startsWith('C.') || group.startsWith('E.') || group.startsWith('F.')) {
    if (id.includes('goth') || id.includes('corpse')) return { ...subculturePatch, compatibleGenres: ['fashion_idol', 'urban_life', 'dark_fantasy', 'horror'] };
    if (id.includes('negative_space') || id.includes('silver_face_grid') || id.includes('runway_white_base')) return abstractGroomingPatch;
    if (id.includes('smeared') || id.includes('slept_in') || id.includes('crystal_tears')) return psychologicalGroomingPatch;
    return subculturePatch;
  }
  if (group.startsWith('D.')) {
    if (id.includes('warrior_eye_black')) return combatPatch;
    if (id.includes('opera') || id.includes('priestess')) return eastAsianPeriodPatch;
    if (id.includes('forbidden') || id.includes('ritual') || id.includes('ash')) return mysticPatch;
    if (id.includes('kabuki') || id.includes('saffron') || id.includes('nomad') || id.includes('henna') || id.includes('ash_cross')) return eastAsianRegionalPatch;
    return mysticPatch;
  }
  if (group.startsWith('X.')) {
    if (id.includes('bio') || id.includes('living_ink')) return bioPatch;
    if (id.includes('holographic_tears')) return dreamGroomingPatch;
    if (id.includes('forbidden')) return mysticPatch;
    return cyberPatch;
  }
  return fashionPatch;
};

export const withGroomingAxisMeta = (blockId: string, items: LibraryItemDef[]): LibraryItemDef[] => (
  items.map(item => {
    const manualMeta = manualGroomingAxisMeta[item.id || ''];
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
    if (blockId === 'cd_hair_color') return merge(item, hairColorPatch(item));
    if (blockId === 'cd_hair_style_f' || blockId === 'cd_hair_style_m') return withHairStyleDirectAxis(merge(item, hairStylePatch(blockId, item)));
    if (blockId === 'cd_beard_style') return merge(item, beardPatch(item));
    if (blockId === 'cd_makeup_style') return withMakeupDirectAxis(merge(item, makeupPatch(item)));
    return item;
  })
);
