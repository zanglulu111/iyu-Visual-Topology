import { LibraryCategoryDef, LibraryItemDef } from '../../../types';

type CategoryFit = NonNullable<LibraryItemDef['categoryFit']>;
type CategoryUnlistedFit = NonNullable<CategoryFit['unlisted']>;
type FieldPresetAxisMeta = {
  categoryFit: CategoryFit;
  eraMode: 'universal' | 'specific';
  eras: readonly string[];
  ontologyLevel: 1 | 2 | 3 | 4 | 5;
  realityTags: readonly string[];
};

const emptyFit: CategoryFit = { unlisted: 'none', strong: [], usable: [], fusion: [], weak: [], exclude: [] };

const uniq = (values: readonly string[]) => [...new Set(values.map(value => value.trim()).filter(Boolean))];

const toList = (value: unknown): string[] => {
  if (Array.isArray(value)) return value.map(String).map(item => item.trim()).filter(Boolean);
  if (typeof value === 'string' && value.trim()) return [value.trim()];
  return [];
};

const normalizeCategoryFit = (fit?: LibraryItemDef['categoryFit']): CategoryFit => {
  const merged = {
    unlisted: (fit?.unlisted === 'usable' || fit?.unlisted === 'weak' || fit?.unlisted === 'exclude' ? fit.unlisted : 'none') as CategoryUnlistedFit,
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

const meta = (
  eras: readonly string[],
  ontologyLevel: 1 | 2 | 3 | 4 | 5,
  realityTags: readonly string[],
  categoryFit: CategoryFit = emptyFit,
  eraMode: 'universal' | 'specific' = 'specific'
): FieldPresetAxisMeta => ({
  categoryFit: normalizeCategoryFit(categoryFit),
  eraMode,
  eras,
  ontologyLevel,
  realityTags: uniq(realityTags)
});

const mythicReality = ['nonreal', 'semi_surreal', 'mythic', 'ritual', 'sacred'] as const;
const historicalReality = ['historical', 'physical', 'social_order', 'realistic'] as const;
const ritualHistoricalReality = ['stylized', 'semi_surreal', 'historical', 'ritual', 'religious', 'semi_real'] as const;
const industrialReality = ['historical', 'industrial', 'mechanical', 'realistic'] as const;
const modernReality = ['historical', 'modern_institution', 'physical', 'realistic'] as const;
const contemporaryReality = ['contemporary', 'social', 'institutional', 'realistic'] as const;
const futureReality = ['technological', 'speculative', 'posthuman', 'semi_surreal'] as const;
const subcultureReality = ['modern_subculture', 'social', 'stylized', 'semi_real'] as const;

const fieldPresetCategoryUnlisted: Record<string, CategoryUnlistedFit> = {
  cd_fp_sumerian_clay: 'weak',
  cd_fp_athens_agora: 'weak',
  cd_fp_sparta_agoge: 'weak',
  cd_fp_rome_republic_late: 'weak',
  cd_fp_nero_insanity: 'weak',
  cd_fp_qin_legalism: 'weak',
  cd_fp_han_frontier: 'weak',
  cd_fp_three_kingdoms_loyalty: 'weak',
  cd_fp_persian_lux: 'weak',
  cd_fp_byzantium_intrigue: 'weak',
  cd_fp_alexander_reach: 'weak',
  cd_fp_ancient_carthage: 'weak',
  cd_fp_pre_islam_desert: 'weak',
  cd_fp_incan_quipu: 'weak',
  cd_fp_indus_valley_plumb: 'weak',
  cd_fp_maurya_ashoka: 'weak',
  cd_fp_minoa_labyrinth: 'weak',
  cd_fp_viking_raid: 'weak',
  cd_fp_crusades_faith: 'weak',
  cd_fp_tang_glory: 'weak',
  cd_fp_song_zen_aesthetic: 'weak',
  cd_fp_mongol_horde: 'weak',
  cd_fp_sengoku_fire: 'weak',
  cd_fp_knights_templar_secret: 'weak',
  cd_fp_abbasid_science: 'weak',
  cd_fp_holy_roman_disorder: 'weak',
  cd_fp_venice_merchant: 'weak',
  cd_fp_samurai_monastery: 'weak',
  cd_fp_ottoman_rise: 'weak',
  cd_fp_renaissance_it_court: 'weak',
  cd_fp_age_of_discovery_sea: 'weak',
  cd_fp_pirate_golden_nassau: 'weak',
  cd_fp_ming_forbidden_city: 'weak',
  cd_fp_edo_isolation: 'weak',
  cd_fp_sun_king_baroque: 'weak',
  cd_fp_tudor_betrayal: 'weak',
  cd_fp_mughal_splendor: 'weak',
  cd_fp_elizabeth_exp: 'weak',
  cd_fp_spanish_armada: 'weak',
  cd_fp_shogun_bakufu: 'weak',
  cd_fp_new_amsterdam: 'weak',
  cd_fp_cossack_steppes: 'weak',
  cd_fp_florence_medici: 'weak',
  cd_fp_safavid_persia: 'weak',
  cd_fp_regency_dance: 'weak',
  cd_fp_wild_west_frontier: 'weak',
  cd_fp_gilded_age_mogul: 'weak',
  cd_fp_late_qing_shame: 'weak',
  cd_fp_meiji_western: 'weak',
  cd_fp_belle_epoque_paris: 'weak',
  cd_fp_colonial_exp_india: 'weak',
  cd_fp_opium_war_canton: 'weak',
  cd_fp_industrial_manchester: 'weak',
  cd_fp_american_civil_war: 'weak',
  cd_fp_russian_serfdom: 'weak',
  cd_fp_austro_hungarian: 'weak',
  cd_fp_zulu_war: 'weak',
  cd_fp_crimean_war: 'weak',
  cd_fp_french_indochina: 'weak',
  cd_fp_darwin_galapagos: 'weak',
  cd_fp_invention_lightbulb: 'weak',
  cd_fp_ww1_mud: 'weak',
  cd_fp_roaring_20s_jazz: 'weak',
  cd_fp_depression_30s: 'weak',
  cd_fp_shanghai_noir_rep: 'weak',
  cd_fp_cold_war_berlin: 'weak',
  cd_fp_hippies_vietnam: 'weak',
  cd_fp_soviet_construct: 'weak',
  cd_fp_hk_97_impulse: 'weak',
  cd_fp_japan_bubble_pop: 'weak',
  cd_fp_spanish_civil_war: 'weak',
  cd_fp_space_race_apollo: 'weak',
  cd_fp_korean_war_split: 'weak',
  cd_fp_hollywood_mccarthy: 'weak',
  cd_fp_balkans_war_snipers: 'weak',
  cd_fp_wall_street_80s: 'weak',
  cd_fp_apartheid_safrica: 'weak',
  cd_fp_present_burnout: 'weak',
  cd_fp_gig_algo_hell: 'weak',
  cd_fp_influencer_bubble: 'weak',
  cd_fp_gentrification_slum: 'weak',
  cd_fp_refugee_camp_tent: 'weak',
  cd_fp_wealth_gap_bunker: 'weak',
  cd_fp_tech_bro_optimism: 'weak',
  cd_fp_consumer_junkie: 'weak',
  cd_fp_tokyo_hikikomori: 'weak',
  cd_fp_berlin_techno_void: 'weak',
  cd_fp_shanghai_lu_middle: 'weak',
  cd_fp_india_call_center: 'weak',
  cd_fp_venice_tourist_end: 'weak',
  cd_fp_amazon_warehouse: 'weak',
  cd_fp_pandemic_quarantine: 'weak',
  cd_fp_punk_77_london: 'weak',
  cd_fp_hiphop_bronx_80s: 'weak',
  cd_fp_goth_80s_batcave: 'weak',
  cd_fp_rave_90s_warehouse: 'weak',
  cd_fp_grunge_seattle_90s: 'weak',
  cd_fp_harajuku_chaos: 'weak',
  cd_fp_skate_dogtown: 'weak',
  cd_fp_emo_my_space: 'weak',
  cd_fp_biker_hells_angels: 'weak'
};

const fieldPresetAxisMeta: Record<string, FieldPresetAxisMeta> = {
  cd_fp_primordial_chaos: meta(['primitive', 'mythic'], 5, ['abstract', 'nonreal', 'mythic', 'cosmic', 'non_realist', 'surreal'], { strong: ['mythic_epic', 'fantasy'], usable: ['dark_fantasy'], fusion: ['xianxia', 'surreal'], weak: ['science_fiction'], exclude: ['real_professional', 'urban_life'] }),
  cd_fp_golden_age: meta(['primitive', 'mythic'], 4, mythicReality, { strong: ['mythic_epic', 'fantasy'], usable: ['religious_ritual', 'ecological'], fusion: ['xianxia', 'dark_fantasy'], weak: ['science_fiction'], exclude: ['real_professional', 'urban_life'] }),
  cd_fp_stone_age_logic: meta(['primitive'], 2, ['physical', 'survival', 'pre_state_society', 'realistic'], { strong: ['adventure', 'ecological'], usable: ['mythic_epic', 'wasteland'], fusion: ['fantasy', 'dark_fantasy'], weak: ['science_fiction'], exclude: ['cyberpunk', 'real_professional'] }),
  cd_fp_neolithic_shaman: meta(['primitive', 'mythic'], 4, mythicReality, { strong: ['religious_ritual', 'mythic_epic'], usable: ['fantasy', 'ecological', 'adventure'], fusion: ['xianxia', 'dark_fantasy'], weak: ['science_fiction'], exclude: ['real_professional', 'urban_life'] }),
  cd_fp_bronze_collapse: meta(['slave', 'mythic'], 3, ['semi_surreal', 'historical', 'mythic', 'collapse', 'semi_real'], { strong: ['mythic_epic', 'war_military', 'wasteland'], usable: ['fantasy', 'dark_fantasy', 'adventure'], fusion: ['xianxia'], weak: ['science_fiction'], exclude: ['cyberpunk', 'urban_life'] }),
  cd_fp_egypt_old_theo: meta(['slave', 'mythic'], 3, ritualHistoricalReality, { strong: ['historical', 'religious_ritual', 'mythic_epic'], usable: ['court', 'dark_fantasy'], fusion: ['fantasy', 'horror'], weak: ['science_fiction'], exclude: ['urban_life'] }),
  cd_fp_sumerian_clay: meta(['slave'], 2, historicalReality, { strong: ['historical'], usable: ['religious_ritual', 'court', 'real_professional'], fusion: ['mythic_epic', 'fantasy'], weak: ['cyberpunk'], exclude: [] }),
  cd_fp_shanhai_myth: meta(['mythic', 'feudal'], 4, mythicReality, { strong: ['mythic_epic', 'xianxia', 'fantasy'], usable: ['religious_ritual', 'adventure'], fusion: ['wuxia', 'dark_fantasy'], weak: ['science_fiction'], exclude: ['real_professional', 'urban_life'] }),
  cd_fp_maya_blood: meta(['feudal', 'mythic'], 4, ritualHistoricalReality, { strong: ['religious_ritual', 'mythic_epic', 'horror'], usable: ['dark_fantasy', 'historical'], fusion: ['fantasy'], weak: ['science_fiction'], exclude: ['real_professional'] }),
  cd_fp_norse_ragnarok: meta(['feudal', 'mythic'], 4, mythicReality, { strong: ['mythic_epic', 'fantasy', 'war_military'], usable: ['dark_fantasy', 'religious_ritual'], fusion: ['horror'], weak: ['science_fiction'], exclude: ['urban_life'] }),
  cd_fp_atlantis_hubris: meta(['mythic', 'slave'], 4, ['mythic', 'technological', 'speculative', 'semi_surreal'], { strong: ['mythic_epic', 'fantasy'], usable: ['science_fiction'], fusion: ['xianxia', 'dark_fantasy', 'posthuman'], weak: ['real_professional'], exclude: [] }),
  cd_fp_babylon_tower: meta(['slave', 'mythic'], 4, ritualHistoricalReality, { strong: ['mythic_epic', 'religious_ritual'], usable: ['historical', 'court', 'fantasy'], fusion: ['dark_fantasy', 'surreal'], weak: ['science_fiction'], exclude: [] }),
  cd_fp_lemuria_lost: meta(['mythic'], 4, mythicReality, { strong: ['mythic_epic', 'fantasy'], usable: ['religious_ritual', 'ecological'], fusion: ['xianxia', 'surreal'], weak: ['science_fiction'], exclude: ['real_professional'] }),
  cd_fp_mu_continent: meta(['mythic'], 4, mythicReality, { strong: ['mythic_epic', 'fantasy'], usable: ['court', 'religious_ritual'], fusion: ['xianxia', 'dark_fantasy'], weak: ['science_fiction'], exclude: ['urban_life'] }),
  cd_fp_hyperborea: meta(['mythic'], 4, mythicReality, { strong: ['mythic_epic', 'fantasy'], usable: ['religious_ritual', 'ecological'], fusion: ['xianxia', 'surreal'], weak: ['science_fiction'], exclude: ['real_professional'] }),

  cd_fp_athens_agora: meta(['slave'], 1, historicalReality, { strong: ['historical'], usable: ['court', 'real_professional'], fusion: ['romance', 'adventure'], weak: ['cyberpunk'], exclude: [] }),
  cd_fp_sparta_agoge: meta(['slave'], 1, historicalReality, { strong: ['historical', 'war_military'], usable: ['adventure'], fusion: ['dark_fantasy'], weak: ['romance'], exclude: [] }),
  cd_fp_rome_republic_late: meta(['slave'], 1, historicalReality, { strong: ['historical', 'court'], usable: ['war_military', 'noir_crime'], fusion: ['dark_fantasy'], weak: ['science_fiction'], exclude: [] }),
  cd_fp_nero_insanity: meta(['slave'], 2, historicalReality, { strong: ['historical', 'court'], usable: ['dark_fantasy', 'horror'], fusion: ['surreal'], weak: ['science_fiction'], exclude: [] }),
  cd_fp_qin_legalism: meta(['slave', 'feudal'], 1, historicalReality, { strong: ['historical', 'court'], usable: ['war_military'], fusion: ['wuxia', 'dark_fantasy'], weak: ['science_fiction'], exclude: [] }),
  cd_fp_han_frontier: meta(['slave', 'feudal'], 1, historicalReality, { strong: ['historical', 'war_military'], usable: ['adventure'], fusion: ['wuxia'], weak: ['science_fiction'], exclude: [] }),
  cd_fp_three_kingdoms_loyalty: meta(['feudal'], 1, historicalReality, { strong: ['historical', 'war_military', 'wuxia'], usable: ['court', 'adventure'], fusion: ['dark_fantasy'], weak: ['science_fiction'], exclude: [] }),
  cd_fp_persian_lux: meta(['slave', 'feudal'], 1, historicalReality, { strong: ['historical', 'court'], usable: ['adventure', 'romance'], fusion: ['fantasy'], weak: ['cyberpunk'], exclude: [] }),
  cd_fp_byzantium_intrigue: meta(['feudal', 'early_modern'], 2, ritualHistoricalReality, { strong: ['historical', 'court', 'religious_ritual'], usable: ['noir_crime'], fusion: ['dark_fantasy'], weak: ['science_fiction'], exclude: [] }),
  cd_fp_maya_collapse: meta(['feudal'], 2, historicalReality, { strong: ['historical', 'wasteland'], usable: ['religious_ritual', 'adventure'], fusion: ['dark_fantasy', 'horror'], weak: ['science_fiction'], exclude: [] }),
  cd_fp_alexander_reach: meta(['slave'], 1, historicalReality, { strong: ['historical', 'war_military', 'adventure'], usable: ['court'], fusion: ['romance'], weak: ['science_fiction'], exclude: [] }),
  cd_fp_ancient_carthage: meta(['slave'], 1, historicalReality, { strong: ['historical', 'adventure'], usable: ['war_military', 'court'], fusion: ['noir_crime'], weak: ['cyberpunk'], exclude: [] }),
  cd_fp_pre_islam_desert: meta(['slave', 'feudal', 'early_modern'], 1, historicalReality, { strong: ['historical', 'adventure'], usable: ['war_military', 'religious_ritual'], fusion: ['wasteland', 'fantasy'], weak: ['science_fiction'], exclude: [] }),
  cd_fp_aztec_tenochtitlan: meta(['feudal', 'mythic'], 2, ritualHistoricalReality, { strong: ['historical', 'religious_ritual', 'mythic_epic'], usable: ['war_military', 'court'], fusion: ['horror', 'dark_fantasy'], weak: ['science_fiction'], exclude: [] }),
  cd_fp_incan_quipu: meta(['slave', 'feudal', 'early_modern'], 1, historicalReality, { strong: ['historical', 'court'], usable: ['real_professional', 'adventure'], fusion: ['war_military'], weak: ['cyberpunk'], exclude: [] }),
  cd_fp_shang_oracle: meta(['slave', 'mythic'], 3, ritualHistoricalReality, { strong: ['historical', 'religious_ritual', 'dark_fantasy'], usable: ['horror', 'court'], fusion: ['mythic_epic', 'xianxia'], weak: ['science_fiction'], exclude: [] }),
  cd_fp_indus_valley_plumb: meta(['slave'], 1, historicalReality, { strong: ['historical'], usable: ['real_professional', 'urban_life'], fusion: ['court'], weak: ['war_military'], exclude: [] }),
  cd_fp_celtic_druids: meta(['slave', 'feudal', 'mythic'], 3, ritualHistoricalReality, { strong: ['historical', 'religious_ritual'], usable: ['mythic_epic', 'fantasy'], fusion: ['dark_fantasy'], weak: ['science_fiction'], exclude: [] }),
  cd_fp_maurya_ashoka: meta(['slave', 'feudal'], 1, historicalReality, { strong: ['historical', 'court', 'religious_ritual'], usable: ['war_military'], fusion: ['mythic_epic'], weak: ['cyberpunk'], exclude: [] }),
  cd_fp_minoa_labyrinth: meta(['slave', 'mythic'], 2, ['stylized', 'semi_surreal', 'historical', 'mythic', 'physical', 'semi_real'], { strong: ['historical', 'court'], usable: ['religious_ritual'], fusion: ['fantasy', 'surreal'], weak: ['science_fiction'], exclude: [] }),
  cd_fp_dark_ages_vibe: meta(['feudal'], 2, ritualHistoricalReality, { strong: ['historical', 'dark_fantasy'], usable: ['religious_ritual', 'horror'], fusion: ['fantasy'], weak: ['science_fiction'], exclude: [] }),
  cd_fp_viking_raid: meta(['feudal'], 2, ritualHistoricalReality, { strong: ['historical', 'war_military', 'adventure'], usable: ['mythic_epic', 'dark_fantasy'], fusion: ['fantasy'], weak: ['urban_life'], exclude: [] }),
  cd_fp_crusades_faith: meta(['feudal', 'early_modern'], 2, ritualHistoricalReality, { strong: ['historical', 'religious_ritual', 'war_military'], usable: ['dark_fantasy', 'court'], fusion: ['horror'], weak: ['science_fiction'], exclude: [] }),
  cd_fp_high_gothic_church: meta(['feudal', 'early_modern'], 2, ritualHistoricalReality, { strong: ['historical', 'religious_ritual'], usable: ['dark_fantasy', 'court'], fusion: ['horror', 'surreal'], weak: ['science_fiction'], exclude: [] }),
  cd_fp_black_death_1348: meta(['feudal', 'early_modern'], 3, ritualHistoricalReality, { strong: ['historical', 'horror', 'dark_fantasy'], usable: ['religious_ritual', 'wasteland'], fusion: ['mythic_epic'], weak: ['romance'], exclude: [] }),
  cd_fp_tang_glory: meta(['feudal'], 1, historicalReality, { strong: ['historical', 'court'], usable: ['romance', 'adventure', 'religious_ritual'], fusion: ['wuxia', 'xianxia'], weak: ['cyberpunk'], exclude: [] }),
  cd_fp_song_zen_aesthetic: meta(['feudal'], 1, historicalReality, { strong: ['historical', 'court'], usable: ['religious_ritual', 'romance'], fusion: ['wuxia', 'xianxia'], weak: ['war_military'], exclude: [] }),
  cd_fp_mongol_horde: meta(['feudal', 'early_modern'], 2, historicalReality, { strong: ['historical', 'war_military', 'adventure'], usable: ['wasteland'], fusion: ['fantasy', 'mythic_epic'], weak: ['urban_life'], exclude: [] }),
  cd_fp_heian_phantom: meta(['feudal', 'mythic'], 3, ritualHistoricalReality, { strong: ['historical', 'court', 'horror'], usable: ['religious_ritual', 'dark_fantasy'], fusion: ['fantasy', 'surreal'], weak: ['science_fiction'], exclude: [] }),
  cd_fp_sengoku_fire: meta(['feudal', 'early_modern'], 2, historicalReality, { strong: ['historical', 'war_military'], usable: ['wuxia', 'court'], fusion: ['dark_fantasy'], weak: ['science_fiction'], exclude: [] }),
  cd_fp_medieval_inquisition: meta(['feudal', 'early_modern'], 3, ritualHistoricalReality, { strong: ['historical', 'religious_ritual', 'horror'], usable: ['dark_fantasy', 'court'], fusion: ['noir_crime'], weak: ['science_fiction'], exclude: [] }),
  cd_fp_knights_templar_secret: meta(['feudal', 'early_modern'], 2, ritualHistoricalReality, { strong: ['historical', 'religious_ritual', 'war_military'], usable: ['court', 'noir_crime'], fusion: ['dark_fantasy'], weak: ['science_fiction'], exclude: [] }),
  cd_fp_abbasid_science: meta(['feudal', 'early_modern'], 2, ritualHistoricalReality, { strong: ['historical', 'religious_ritual'], usable: ['real_professional', 'court'], fusion: ['fantasy', 'science_fiction'], weak: ['cyberpunk'], exclude: [] }),
  cd_fp_khmer_angkor: meta(['feudal', 'mythic'], 3, ritualHistoricalReality, { strong: ['historical', 'religious_ritual'], usable: ['mythic_epic', 'dark_fantasy'], fusion: ['fantasy', 'horror'], weak: ['urban_life'], exclude: [] }),
  cd_fp_holy_roman_disorder: meta(['feudal', 'early_modern'], 1, historicalReality, { strong: ['historical', 'court'], usable: ['religious_ritual', 'war_military'], fusion: ['noir_crime'], weak: ['science_fiction'], exclude: [] }),
  cd_fp_jeanne_darc_fire: meta(['feudal', 'early_modern', 'mythic'], 2, ritualHistoricalReality, { strong: ['historical', 'war_military', 'religious_ritual'], usable: ['mythic_epic'], fusion: ['dark_fantasy', 'romance'], weak: ['cyberpunk'], exclude: [] }),
  cd_fp_venice_merchant: meta(['feudal', 'early_modern'], 1, historicalReality, { strong: ['historical', 'noir_crime'], usable: ['court', 'romance', 'adventure'], fusion: ['dark_fantasy'], weak: ['science_fiction'], exclude: [] }),
  cd_fp_maya_terminal: meta(['feudal', 'early_modern'], 3, ritualHistoricalReality, { strong: ['historical', 'religious_ritual', 'dark_fantasy'], usable: ['horror', 'war_military'], fusion: ['mythic_epic'], weak: ['science_fiction'], exclude: [] }),
  cd_fp_samurai_monastery: meta(['feudal', 'early_modern'], 2, ritualHistoricalReality, { strong: ['historical', 'religious_ritual', 'war_military'], usable: ['wuxia', 'xianxia'], fusion: ['dark_fantasy'], weak: ['science_fiction'], exclude: [] }),
  cd_fp_ottoman_rise: meta(['feudal', 'early_modern'], 1, historicalReality, { strong: ['historical', 'war_military'], usable: ['court', 'religious_ritual'], fusion: ['adventure'], weak: ['cyberpunk'], exclude: [] }),

  cd_fp_renaissance_it_court: meta(['early_modern'], 1, historicalReality, { strong: ['historical', 'court'], usable: ['romance', 'noir_crime'], fusion: ['dark_fantasy'], weak: ['science_fiction'], exclude: [] }),
  cd_fp_renaissance_north_decay: meta(['early_modern'], 2, historicalReality, { strong: ['historical'], usable: ['religious_ritual', 'dark_fantasy'], fusion: ['horror', 'surreal'], weak: ['cyberpunk'], exclude: [] }),
  cd_fp_age_of_discovery_sea: meta(['early_modern'], 1, historicalReality, { strong: ['historical', 'adventure'], usable: ['war_military', 'court'], fusion: ['wasteland'], weak: ['xianxia'], exclude: [] }),
  cd_fp_pirate_golden_nassau: meta(['early_modern'], 1, historicalReality, { strong: ['adventure', 'noir_crime'], usable: ['historical', 'romance'], fusion: ['wasteland'], weak: ['court'], exclude: [] }),
  cd_fp_ming_forbidden_city: meta(['early_modern'], 1, historicalReality, { strong: ['historical', 'court'], usable: ['wuxia', 'noir_crime'], fusion: ['romance', 'dark_fantasy'], weak: ['science_fiction'], exclude: [] }),
  cd_fp_edo_isolation: meta(['early_modern'], 1, historicalReality, { strong: ['historical', 'court'], usable: ['romance', 'noir_crime'], fusion: ['wuxia', 'dark_fantasy'], weak: ['cyberpunk'], exclude: [] }),
  cd_fp_sun_king_baroque: meta(['early_modern'], 1, historicalReality, { strong: ['historical', 'court'], usable: ['romance'], fusion: ['dark_fantasy', 'noir_crime'], weak: ['wasteland'], exclude: [] }),
  cd_fp_enlightenment_guillotine: meta(['early_modern'], 2, historicalReality, { strong: ['historical', 'war_military'], usable: ['court', 'noir_crime'], fusion: ['horror', 'dark_fantasy'], weak: ['romance'], exclude: [] }),
  cd_fp_tudor_betrayal: meta(['early_modern'], 1, historicalReality, { strong: ['historical', 'court'], usable: ['romance', 'religious_ritual'], fusion: ['noir_crime', 'dark_fantasy'], weak: ['science_fiction'], exclude: [] }),
  cd_fp_mughal_splendor: meta(['early_modern'], 1, historicalReality, { strong: ['historical', 'court'], usable: ['romance', 'religious_ritual'], fusion: ['fantasy'], weak: ['cyberpunk'], exclude: [] }),
  cd_fp_elizabeth_exp: meta(['early_modern'], 1, historicalReality, { strong: ['historical', 'adventure'], usable: ['court', 'noir_crime', 'romance'], fusion: ['dark_fantasy'], weak: ['science_fiction'], exclude: [] }),
  cd_fp_spanish_armada: meta(['early_modern'], 1, historicalReality, { strong: ['historical', 'war_military', 'adventure'], usable: ['court'], fusion: ['dark_fantasy'], weak: ['cyberpunk'], exclude: [] }),
  cd_fp_witch_hunt_salem: meta(['early_modern'], 3, ritualHistoricalReality, { strong: ['historical', 'horror', 'religious_ritual'], usable: ['dark_fantasy'], fusion: ['noir_crime'], weak: ['romance'], exclude: [] }),
  cd_fp_shogun_bakufu: meta(['early_modern'], 1, historicalReality, { strong: ['historical', 'court'], usable: ['wuxia', 'war_military'], fusion: ['noir_crime'], weak: ['science_fiction'], exclude: [] }),
  cd_fp_new_amsterdam: meta(['early_modern'], 1, historicalReality, { strong: ['historical', 'adventure'], usable: ['urban_life', 'real_professional'], fusion: ['noir_crime'], weak: ['xianxia'], exclude: [] }),
  cd_fp_cossack_steppes: meta(['early_modern'], 1, historicalReality, { strong: ['historical', 'adventure', 'war_military'], usable: ['wasteland'], fusion: ['romance'], weak: ['urban_life'], exclude: [] }),
  cd_fp_alchemy_scientific: meta(['early_modern'], 3, ['historical', 'scientific_transition', 'ritual', 'semi_surreal'], { strong: ['historical'], usable: ['real_professional', 'religious_ritual'], fusion: ['fantasy', 'science_fiction', 'dark_fantasy'], weak: ['urban_life'], exclude: [] }),
  cd_fp_florence_medici: meta(['early_modern'], 1, historicalReality, { strong: ['historical', 'court'], usable: ['noir_crime', 'romance'], fusion: ['dark_fantasy'], weak: ['wasteland'], exclude: [] }),
  cd_fp_maya_colonial: meta(['early_modern'], 2, historicalReality, { strong: ['historical', 'religious_ritual'], usable: ['dark_fantasy', 'noir_crime'], fusion: ['mythic_epic'], weak: ['science_fiction'], exclude: [] }),
  cd_fp_safavid_persia: meta(['early_modern'], 1, historicalReality, { strong: ['historical', 'court', 'religious_ritual'], usable: ['romance', 'adventure'], fusion: ['fantasy'], weak: ['cyberpunk'], exclude: [] }),

  cd_fp_regency_dance: meta(['early_modern', 'industrial'], 1, historicalReality, { strong: ['historical', 'court', 'romance'], usable: ['fashion_idol'], fusion: ['noir_crime'], weak: ['wuxia', 'xianxia'], exclude: [] }),
  cd_fp_wild_west_frontier: meta(['industrial', 'modern'], 1, industrialReality, { strong: ['historical', 'adventure', 'noir_crime'], usable: ['war_military', 'wasteland'], fusion: ['romance'], weak: ['xianxia'], exclude: [] }),
  cd_fp_victorian_fog: meta(['industrial'], 2, industrialReality, { strong: ['historical', 'noir_crime'], usable: ['real_professional', 'horror'], fusion: ['dark_fantasy', 'cyberpunk'], weak: ['wuxia'], exclude: [] }),
  cd_fp_gilded_age_mogul: meta(['industrial', 'modern'], 1, industrialReality, { strong: ['historical', 'real_professional'], usable: ['court', 'urban_life'], fusion: ['noir_crime', 'cyberpunk'], weak: ['wuxia'], exclude: [] }),
  cd_fp_late_qing_shame: meta(['early_modern', 'industrial'], 1, industrialReality, { strong: ['historical'], usable: ['war_military', 'noir_crime'], fusion: ['wuxia', 'wasteland', 'cyberpunk'], weak: ['xianxia'], exclude: [] }),
  cd_fp_meiji_western: meta(['industrial', 'modern'], 1, industrialReality, { strong: ['historical'], usable: ['war_military', 'court'], fusion: ['wuxia', 'cyberpunk'], weak: ['xianxia'], exclude: [] }),
  cd_fp_belle_epoque_paris: meta(['industrial', 'modern'], 1, industrialReality, { strong: ['historical', 'fashion_idol'], usable: ['romance', 'urban_life', 'court'], fusion: ['noir_crime'], weak: ['wuxia'], exclude: [] }),
  cd_fp_colonial_exp_india: meta(['industrial', 'modern'], 1, industrialReality, { strong: ['historical'], usable: ['court', 'war_military', 'adventure'], fusion: ['dark_fantasy', 'noir_crime'], weak: ['wuxia'], exclude: [] }),
  cd_fp_opium_war_canton: meta(['industrial', 'modern'], 1, industrialReality, { strong: ['historical'], usable: ['war_military', 'noir_crime'], fusion: ['wuxia', 'dark_fantasy'], weak: ['xianxia'], exclude: [] }),
  cd_fp_industrial_manchester: meta(['industrial'], 1, industrialReality, { strong: ['historical', 'real_professional'], usable: ['urban_life', 'wasteland'], fusion: ['cyberpunk', 'noir_crime'], weak: ['wuxia', 'xianxia'], exclude: [] }),
  cd_fp_american_civil_war: meta(['industrial', 'modern'], 1, industrialReality, { strong: ['historical', 'war_military'], usable: ['wasteland'], fusion: ['noir_crime'], weak: ['xianxia'], exclude: [] }),
  cd_fp_russian_serfdom: meta(['industrial', 'modern'], 1, industrialReality, { strong: ['historical', 'court'], usable: ['war_military', 'wasteland'], fusion: ['dark_fantasy'], weak: ['wuxia'], exclude: [] }),
  cd_fp_austro_hungarian: meta(['industrial', 'modern'], 1, industrialReality, { strong: ['historical', 'court'], usable: ['romance', 'war_military'], fusion: ['noir_crime'], weak: ['wuxia'], exclude: [] }),
  cd_fp_zulu_war: meta(['industrial', 'modern'], 1, industrialReality, { strong: ['historical', 'war_military'], usable: ['adventure'], fusion: ['wasteland'], weak: ['wuxia'], exclude: [] }),
  cd_fp_boxer_rebellion: meta(['industrial', 'modern'], 2, industrialReality, { strong: ['historical', 'war_military'], usable: ['religious_ritual'], fusion: ['wuxia', 'dark_fantasy'], weak: ['xianxia'], exclude: [] }),
  cd_fp_taiping_heavenly: meta(['industrial', 'modern'], 2, ritualHistoricalReality, { strong: ['historical', 'war_military', 'religious_ritual'], usable: ['dark_fantasy'], fusion: ['wuxia', 'mythic_epic'], weak: ['science_fiction'], exclude: [] }),
  cd_fp_crimean_war: meta(['industrial', 'modern'], 1, industrialReality, { strong: ['historical', 'war_military'], usable: ['real_professional'], fusion: ['noir_crime'], weak: ['xianxia'], exclude: [] }),
  cd_fp_french_indochina: meta(['industrial', 'modern'], 1, industrialReality, { strong: ['historical'], usable: ['war_military', 'adventure', 'noir_crime'], fusion: ['romance', 'wasteland'], weak: ['wuxia'], exclude: [] }),
  cd_fp_darwin_galapagos: meta(['industrial'], 1, ['historical', 'scientific', 'ecological', 'realistic'], { strong: ['historical', 'ecological'], usable: ['real_professional', 'adventure'], fusion: ['science_fiction'], weak: ['wuxia'], exclude: [] }),
  cd_fp_invention_lightbulb: meta(['industrial', 'modern'], 1, industrialReality, { strong: ['historical', 'real_professional'], usable: ['urban_life'], fusion: ['science_fiction', 'cyberpunk'], weak: ['xianxia'], exclude: [] }),

  cd_fp_ww1_mud: meta(['industrial', 'modern'], 1, modernReality, { strong: ['historical', 'war_military'], usable: ['horror', 'wasteland'], fusion: ['dark_fantasy'], weak: ['romance'], exclude: [] }),
  cd_fp_roaring_20s_jazz: meta(['modern'], 1, modernReality, { strong: ['historical', 'urban_life'], usable: ['romance', 'fashion_idol', 'noir_crime'], fusion: ['surreal'], weak: ['wuxia'], exclude: [] }),
  cd_fp_depression_30s: meta(['modern'], 1, modernReality, { strong: ['historical', 'wasteland'], usable: ['urban_life', 'real_professional'], fusion: ['noir_crime'], weak: ['xianxia'], exclude: [] }),
  cd_fp_shanghai_noir_rep: meta(['modern'], 1, modernReality, { strong: ['historical', 'noir_crime'], usable: ['urban_life', 'romance'], fusion: ['wuxia', 'cyberpunk'], weak: ['xianxia'], exclude: [] }),
  cd_fp_ww2_auschwitz: meta(['modern'], 1, modernReality, { strong: ['historical', 'war_military', 'horror'], usable: ['wasteland'], fusion: ['dark_fantasy'], weak: ['romance', 'fashion_idol'], exclude: [] }),
  cd_fp_cold_war_berlin: meta(['modern'], 1, modernReality, { strong: ['historical', 'noir_crime'], usable: ['war_military', 'real_professional'], fusion: ['science_fiction', 'cyberpunk'], weak: ['xianxia'], exclude: [] }),
  cd_fp_hippies_vietnam: meta(['modern'], 1, modernReality, { strong: ['historical', 'war_military'], usable: ['urban_life', 'fashion_idol'], fusion: ['surreal', 'romance'], weak: ['wuxia'], exclude: [] }),
  cd_fp_soviet_construct: meta(['modern'], 1, modernReality, { strong: ['historical', 'war_military'], usable: ['real_professional'], fusion: ['wasteland', 'dark_fantasy'], weak: ['xianxia'], exclude: [] }),
  cd_fp_hk_97_impulse: meta(['modern', 'contemporary'], 1, modernReality, { strong: ['urban_life', 'noir_crime'], usable: ['romance', 'fashion_idol'], fusion: ['cyberpunk', 'wuxia'], weak: ['xianxia'], exclude: [] }),
  cd_fp_japan_bubble_pop: meta(['modern'], 1, modernReality, { strong: ['urban_life', 'fashion_idol'], usable: ['romance', 'noir_crime'], fusion: ['cyberpunk', 'surreal'], weak: ['wuxia'], exclude: [] }),
  cd_fp_spanish_civil_war: meta(['modern'], 1, modernReality, { strong: ['historical', 'war_military'], usable: ['noir_crime'], fusion: ['dark_fantasy'], weak: ['romance'], exclude: [] }),
  cd_fp_space_race_apollo: meta(['modern'], 2, ['historical', 'technological', 'scientific', 'realistic'], { strong: ['historical', 'science_fiction'], usable: ['war_military', 'real_professional'], fusion: ['mythic_epic'], weak: ['wuxia'], exclude: [] }),
  cd_fp_iranian_revolution: meta(['modern'], 1, modernReality, { strong: ['historical', 'religious_ritual'], usable: ['war_military', 'court'], fusion: ['dark_fantasy'], weak: ['fashion_idol'], exclude: [] }),
  cd_fp_korean_war_split: meta(['modern'], 1, modernReality, { strong: ['historical', 'war_military'], usable: ['wasteland'], fusion: ['noir_crime'], weak: ['romance'], exclude: [] }),
  cd_fp_hollywood_mccarthy: meta(['modern'], 1, modernReality, { strong: ['historical', 'noir_crime'], usable: ['fashion_idol', 'real_professional'], fusion: ['horror'], weak: ['wuxia'], exclude: [] }),
  cd_fp_balkans_war_snipers: meta(['modern', 'contemporary'], 1, modernReality, { strong: ['historical', 'war_military'], usable: ['noir_crime', 'wasteland'], fusion: ['horror'], weak: ['romance'], exclude: [] }),
  cd_fp_wall_street_80s: meta(['modern'], 1, modernReality, { strong: ['real_professional', 'urban_life'], usable: ['noir_crime', 'fashion_idol'], fusion: ['cyberpunk'], weak: ['wuxia'], exclude: [] }),
  cd_fp_cultural_rev_china: meta(['modern'], 1, modernReality, { strong: ['historical'], usable: ['war_military', 'religious_ritual'], fusion: ['dark_fantasy', 'wasteland'], weak: ['romance'], exclude: [] }),
  cd_fp_cuban_missile: meta(['modern'], 1, modernReality, { strong: ['historical', 'war_military'], usable: ['noir_crime'], fusion: ['science_fiction', 'horror'], weak: ['romance'], exclude: [] }),
  cd_fp_apartheid_safrica: meta(['modern', 'contemporary'], 1, modernReality, { strong: ['historical', 'real_professional'], usable: ['war_military', 'urban_life'], fusion: ['noir_crime'], weak: ['xianxia'], exclude: [] }),

  cd_fp_present_burnout: meta(['contemporary', 'near_future'], 1, contemporaryReality, { strong: ['urban_life', 'real_professional'], usable: ['romance'], fusion: ['science_fiction', 'surreal'], weak: ['wuxia', 'xianxia'], exclude: [] }),
  cd_fp_gig_algo_hell: meta(['contemporary', 'near_future'], 1, contemporaryReality, { strong: ['real_professional', 'urban_life'], usable: ['science_fiction'], fusion: ['cyberpunk'], weak: ['wuxia'], exclude: [] }),
  cd_fp_influencer_bubble: meta(['contemporary', 'near_future'], 1, contemporaryReality, { strong: ['urban_life', 'fashion_idol'], usable: ['romance'], fusion: ['surreal', 'cyberpunk'], weak: ['wuxia'], exclude: [] }),
  cd_fp_post_truth_chaos: meta(['contemporary', 'near_future'], 2, contemporaryReality, { strong: ['urban_life', 'noir_crime'], usable: ['real_professional'], fusion: ['science_fiction', 'surreal', 'horror'], weak: ['xianxia'], exclude: [] }),
  cd_fp_gentrification_slum: meta(['contemporary'], 1, contemporaryReality, { strong: ['urban_life'], usable: ['real_professional', 'romance'], fusion: ['wasteland', 'noir_crime'], weak: ['xianxia'], exclude: [] }),
  cd_fp_cyber_surveillance: meta(['contemporary', 'near_future'], 3, ['contemporary', 'technological', 'institutional', 'semi_surreal'], { strong: ['cyberpunk', 'science_fiction'], usable: ['urban_life', 'noir_crime', 'real_professional'], fusion: ['horror'], weak: ['wuxia'], exclude: [] }),
  cd_fp_refugee_camp_tent: meta(['contemporary', 'near_future'], 1, contemporaryReality, { strong: ['wasteland'], usable: ['urban_life', 'war_military', 'real_professional'], fusion: ['dark_fantasy'], weak: ['fashion_idol'], exclude: [] }),
  cd_fp_wealth_gap_bunker: meta(['contemporary', 'near_future'], 2, contemporaryReality, { strong: ['urban_life', 'wasteland'], usable: ['real_professional'], fusion: ['science_fiction', 'cyberpunk'], weak: ['wuxia'], exclude: [] }),
  cd_fp_tech_bro_optimism: meta(['contemporary', 'near_future'], 2, contemporaryReality, { strong: ['real_professional', 'science_fiction'], usable: ['urban_life'], fusion: ['posthuman', 'cyberpunk'], weak: ['wuxia'], exclude: [] }),
  cd_fp_consumer_junkie: meta(['contemporary', 'near_future'], 1, contemporaryReality, { strong: ['urban_life'], usable: ['fashion_idol', 'romance'], fusion: ['surreal', 'cyberpunk'], weak: ['historical'], exclude: [] }),
  cd_fp_tokyo_hikikomori: meta(['contemporary'], 1, contemporaryReality, { strong: ['urban_life'], usable: ['fashion_idol', 'romance'], fusion: ['surreal', 'science_fiction'], weak: ['wuxia'], exclude: [] }),
  cd_fp_berlin_techno_void: meta(['contemporary', 'near_future'], 1, subcultureReality, { strong: ['urban_life', 'fashion_idol'], usable: ['noir_crime'], fusion: ['cyberpunk', 'surreal'], weak: ['wuxia'], exclude: [] }),
  cd_fp_shanghai_lu_middle: meta(['contemporary'], 1, contemporaryReality, { strong: ['urban_life'], usable: ['romance', 'real_professional', 'fashion_idol'], fusion: ['noir_crime'], weak: ['xianxia'], exclude: [] }),
  cd_fp_india_call_center: meta(['contemporary', 'near_future'], 1, contemporaryReality, { strong: ['real_professional', 'urban_life'], usable: ['noir_crime'], fusion: ['cyberpunk', 'science_fiction'], weak: ['wuxia'], exclude: [] }),
  cd_fp_venice_tourist_end: meta(['contemporary'], 1, contemporaryReality, { strong: ['urban_life'], usable: ['historical', 'fashion_idol'], fusion: ['wasteland', 'surreal'], weak: ['war_military'], exclude: [] }),
  cd_fp_amazon_warehouse: meta(['contemporary', 'near_future'], 2, ['contemporary', 'industrial', 'technological', 'realistic'], { strong: ['real_professional', 'urban_life'], usable: ['science_fiction'], fusion: ['cyberpunk', 'wasteland'], weak: ['wuxia'], exclude: [] }),
  cd_fp_metaverse_homeless: meta(['contemporary', 'near_future'], 3, ['digital', 'technological', 'social', 'semi_surreal'], { strong: ['science_fiction', 'urban_life'], usable: ['cyberpunk', 'wasteland'], fusion: ['surreal'], weak: ['historical'], exclude: [] }),
  cd_fp_pandemic_quarantine: meta(['contemporary'], 1, contemporaryReality, { strong: ['urban_life', 'real_professional'], usable: ['horror'], fusion: ['science_fiction', 'wasteland'], weak: ['romance'], exclude: [] }),
  cd_fp_green_peace_fanatic: meta(['contemporary', 'near_future'], 2, contemporaryReality, { strong: ['ecological', 'urban_life'], usable: ['religious_ritual'], fusion: ['wasteland', 'dark_fantasy'], weak: ['court'], exclude: [] }),
  cd_fp_plastic_surgery_face: meta(['contemporary', 'near_future'], 2, contemporaryReality, { strong: ['fashion_idol', 'urban_life'], usable: ['real_professional'], fusion: ['posthuman', 'body_horror'], weak: ['wuxia'], exclude: [] }),

  cd_fp_twenty_min_future_logic: meta(['near_future'], 2, futureReality, { strong: ['science_fiction'], usable: ['urban_life', 'real_professional'], fusion: ['cyberpunk', 'noir_crime'], weak: ['historical'], exclude: [] }),
  cd_fp_cyberpunk_neon_rain: meta(['near_future', 'far_future'], 3, futureReality, { strong: ['cyberpunk', 'science_fiction'], usable: ['posthuman', 'noir_crime'], fusion: ['wasteland'], weak: ['wuxia'], exclude: [] }),
  cd_fp_biopunk_flesh_tech: meta(['near_future', 'far_future'], 4, ['biological', 'technological', 'body_horror', 'semi_surreal'], { strong: ['biopunk', 'science_fiction', 'body_horror'], usable: ['posthuman'], fusion: ['dark_fantasy'], weak: ['historical'], exclude: [] }),
  cd_fp_post_apoc_rust: meta(['near_future', 'far_future'], 2, ['post_apocalyptic', 'physical', 'survival', 'realistic'], { strong: ['wasteland'], usable: ['science_fiction', 'war_military', 'adventure'], fusion: ['dark_fantasy'], weak: ['court'], exclude: [] }),
  cd_fp_galactic_empire_opera: meta(['far_future'], 4, futureReality, { strong: ['science_fiction'], usable: ['space_opera', 'court', 'war_military'].filter(tag => tag !== 'space_opera'), fusion: ['mythic_epic', 'dark_fantasy'], weak: ['wuxia'], exclude: [] }),
  cd_fp_upload_cloud_heaven: meta(['near_future', 'far_future'], 4, ['digital', 'posthuman', 'technological', 'semi_surreal'], { strong: ['science_fiction', 'posthuman'], usable: ['cyberpunk'], fusion: ['surreal', 'religious_ritual'], weak: ['historical'], exclude: [] }),
  cd_fp_android_rights_war: meta(['near_future', 'far_future'], 3, futureReality, { strong: ['science_fiction', 'posthuman'], usable: ['cyberpunk', 'war_military', 'real_professional'], fusion: ['noir_crime'], weak: ['xianxia'], exclude: [] }),
  cd_fp_space_mining_drudge: meta(['near_future', 'far_future'], 2, futureReality, { strong: ['science_fiction', 'real_professional'], usable: ['wasteland', 'cyberpunk'], fusion: ['war_military'], weak: ['wuxia'], exclude: [] }),
  cd_fp_nanotech_grey_goo: meta(['near_future', 'far_future'], 5, ['nonreal', 'semi_surreal', 'technological', 'non_realist', 'surreal', 'body_horror'], { strong: ['science_fiction', 'horror'], usable: ['posthuman'], fusion: ['surreal', 'body_horror'], weak: ['romance'], exclude: [] }),
  cd_fp_alien_contact_ruin: meta(['near_future', 'far_future'], 5, ['nonreal', 'alien', 'cosmic', 'non_realist', 'surreal'], { strong: ['science_fiction', 'surreal'], usable: ['horror', 'mythic_epic'], fusion: ['religious_ritual'], weak: ['urban_life'], exclude: [] }),
  cd_fp_solar_punk_green: meta(['near_future', 'far_future'], 3, futureReality, { strong: ['science_fiction', 'ecological'], usable: ['urban_life', 'adventure'], fusion: ['fantasy'], weak: ['horror'], exclude: [] }),
  cd_fp_ocean_ark_city: meta(['near_future', 'far_future'], 3, futureReality, { strong: ['science_fiction', 'wasteland'], usable: ['ecological', 'adventure'], fusion: ['mythic_epic'], weak: ['court'], exclude: [] }),
  cd_fp_dyson_sphere_core: meta(['far_future'], 5, ['nonreal', 'semi_surreal', 'technological', 'cosmic', 'non_realist', 'surreal'], { strong: ['science_fiction'], usable: ['posthuman', 'mythic_epic'], fusion: ['surreal'], weak: ['urban_life'], exclude: [] }),
  cd_fp_cryo_century_wake: meta(['far_future'], 3, futureReality, { strong: ['science_fiction'], usable: ['posthuman', 'romance'], fusion: ['noir_crime'], weak: ['historical'], exclude: [] }),
  cd_fp_brain_matrix_prison: meta(['near_future', 'far_future'], 5, ['nonreal', 'semi_surreal', 'digital', 'non_realist', 'surreal', 'technological'], { strong: ['science_fiction', 'surreal'], usable: ['cyberpunk', 'posthuman'], fusion: ['horror'], weak: ['historical'], exclude: [] }),
  cd_fp_multi_dim_noise: meta(['near_future', 'far_future'], 5, ['abstract', 'nonreal', 'extra_dimension', 'non_realist', 'surreal', 'speculative'], { strong: ['science_fiction', 'surreal'], usable: ['posthuman'], fusion: ['mythic_epic', 'fantasy'], weak: ['real_professional'], exclude: [] }),
  cd_fp_hive_mind_init: meta(['near_future', 'far_future'], 4, futureReality, { strong: ['science_fiction', 'posthuman'], usable: ['cyberpunk', 'horror'], fusion: ['religious_ritual'], weak: ['romance'], exclude: [] }),
  cd_fp_android_ghettos: meta(['near_future', 'far_future'], 3, futureReality, { strong: ['science_fiction', 'cyberpunk'], usable: ['posthuman', 'wasteland', 'urban_life'], fusion: ['noir_crime'], weak: ['wuxia'], exclude: [] }),
  cd_fp_genetic_apartheid: meta(['near_future', 'far_future'], 4, futureReality, { strong: ['science_fiction', 'biopunk', 'posthuman'], usable: ['court', 'real_professional'], fusion: ['body_horror'], weak: ['historical'], exclude: [] }),
  cd_fp_black_hole_cult: meta(['far_future'], 5, ['nonreal', 'abstract', 'cosmic', 'religious', 'non_realist', 'surreal'], { strong: ['science_fiction', 'religious_ritual'], usable: ['horror', 'surreal'], fusion: ['mythic_epic'], weak: ['urban_life'], exclude: [] }),

  cd_fp_punk_77_london: meta(['modern'], 1, subcultureReality, { strong: ['urban_life', 'fashion_idol'], usable: ['noir_crime'], fusion: ['wasteland'], weak: ['court'], exclude: [] }),
  cd_fp_hiphop_bronx_80s: meta(['modern'], 1, subcultureReality, { strong: ['urban_life'], usable: ['fashion_idol', 'adventure'], fusion: ['noir_crime'], weak: ['court'], exclude: [] }),
  cd_fp_goth_80s_batcave: meta(['modern', 'contemporary'], 2, subcultureReality, { strong: ['fashion_idol', 'dark_fantasy'], usable: ['urban_life', 'horror'], fusion: ['romance'], weak: ['wuxia'], exclude: [] }),
  cd_fp_rave_90s_warehouse: meta(['modern', 'contemporary', 'near_future'], 2, subcultureReality, { strong: ['urban_life', 'fashion_idol'], usable: ['surreal'], fusion: ['cyberpunk'], weak: ['historical'], exclude: [] }),
  cd_fp_grunge_seattle_90s: meta(['modern', 'contemporary'], 1, subcultureReality, { strong: ['urban_life', 'fashion_idol'], usable: ['romance'], fusion: ['wasteland'], weak: ['court'], exclude: [] }),
  cd_fp_harajuku_chaos: meta(['modern', 'contemporary', 'near_future'], 2, subcultureReality, { strong: ['fashion_idol', 'urban_life'], usable: ['romance'], fusion: ['surreal', 'cyberpunk'], weak: ['war_military'], exclude: [] }),
  cd_fp_skate_dogtown: meta(['modern', 'contemporary'], 1, subcultureReality, { strong: ['urban_life', 'adventure'], usable: ['fashion_idol'], fusion: ['wasteland'], weak: ['court'], exclude: [] }),
  cd_fp_emo_my_space: meta(['modern', 'contemporary'], 1, subcultureReality, { strong: ['urban_life', 'fashion_idol'], usable: ['romance'], fusion: ['surreal'], weak: ['war_military'], exclude: [] }),
  cd_fp_biker_hells_angels: meta(['modern', 'contemporary'], 1, subcultureReality, { strong: ['urban_life', 'noir_crime'], usable: ['adventure', 'war_military'], fusion: ['wasteland'], weak: ['court'], exclude: [] }),
  cd_fp_cyber_goth_neon: meta(['modern', 'contemporary', 'near_future'], 3, ['modern_subculture', 'technological', 'stylized', 'semi_surreal'], { strong: ['fashion_idol', 'cyberpunk'], usable: ['urban_life', 'horror'], fusion: ['science_fiction', 'biopunk'], weak: ['historical'], exclude: [] }),
};

export const withFieldPresetMeta = (
  item: LibraryItemDef,
  group: LibraryCategoryDef
): LibraryItemDef => {
  const itemMeta = fieldPresetAxisMeta[item.id] || fieldPresetAxisMeta[item.id.replace(/^cd_fp_/, '')];
  if (!itemMeta) {
    throw new Error(`Missing field preset axis meta: ${item.id}`);
  }
  return {
    id: item.id,
    name: item.name,
    nameEn: item.nameEn,
    def: item.def,
    defEn: item.defEn,
    group: item.group,
    groupEn: item.groupEn,
    ontologyLevel: itemMeta.ontologyLevel,
    eras: itemMeta.eras,
    eraMode: itemMeta.eraMode,
    categoryFit: {
      ...itemMeta.categoryFit,
      unlisted: fieldPresetCategoryUnlisted[item.id] || fieldPresetCategoryUnlisted[item.id.replace(/^cd_fp_/, '')] || itemMeta.categoryFit.unlisted || 'none'
    },
    realityTags: itemMeta.realityTags
  } as LibraryItemDef;
};
