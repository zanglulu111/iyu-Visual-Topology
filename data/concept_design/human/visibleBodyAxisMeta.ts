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

const wastelandEvidencePatch: Partial<LibraryItemDef> = {
  publicFilterTags: ['wasteland', 'ruin', 'survival'],
  nativeTags: ['survival', 'hazard', 'wear'],
  evidenceTags: ['survival', 'hazard', 'wear', 'damage'],
  compatibleGenres: ['wasteland', 'post_apocalyptic', 'survival', 'war_military'],
  compatibleEras: ['industrial', 'modern', 'contemporary', 'near_future', 'far_future', 'timeless'],
  compatibleCultures: ['postapocalyptic_wasteland', 'industrial_ruin', 'frontier_survival', 'military_remnant'],
  compatibleSpaces: ['ruin', 'factory', 'desert', 'road', 'shelter', 'scrapyard', 'landscape'],
  genreStrictness: 'soft',
  cultureStrictness: 'soft',
  tags: ['subject_axis', 'visible_body_axis', 'wasteland_body_evidence']
};

const spaceEvidencePatch: Partial<LibraryItemDef> = {
  publicFilterTags: ['space', 'colony', 'station'],
  nativeTags: ['space', 'technology', 'survival'],
  evidenceTags: ['space', 'technology', 'institution', 'survival', 'hazard'],
  compatibleGenres: ['space_opera', 'science_fiction', 'posthuman'],
  compatibleEras: ['near_future', 'far_future', 'timeless'],
  compatibleCultures: ['space_colony', 'posthuman_civilization', 'global_corporate'],
  compatibleSpaces: ['space_station', 'spaceship', 'colony', 'alien_planet', 'cosmic', 'lab', 'interior'],
  genreStrictness: 'soft',
  cultureStrictness: 'soft',
  tags: ['subject_axis', 'visible_body_axis', 'space_body_evidence']
};

const bioEvidencePatch: Partial<LibraryItemDef> = {
  publicFilterTags: ['bio', 'mutation', 'body'],
  nativeTags: ['biological', 'body', 'damage'],
  evidenceTags: ['biological', 'lab', 'technology', 'body', 'damage'],
  compatibleGenres: ['biopunk', 'body_horror', 'science_fiction', 'horror', 'ecological'],
  compatibleEras: ['modern', 'contemporary', 'near_future', 'far_future', 'timeless'],
  compatibleCultures: ['biotech_lab', 'posthuman_research', 'medical_institution', 'ecological_wild'],
  compatibleSpaces: ['lab', 'containment', 'hospital', 'greenhouse', 'forest', 'wetland', 'interior'],
  genreStrictness: 'soft',
  cultureStrictness: 'soft',
  tags: ['subject_axis', 'visible_body_axis', 'bio_body_evidence']
};

const ritualEvidencePatch: Partial<LibraryItemDef> = {
  publicFilterTags: ['ritual', 'dark_fantasy', 'symbol'],
  nativeTags: ['ritual', 'symbol', 'magic'],
  evidenceTags: ['ritual', 'magic', 'symbol', 'damage'],
  compatibleGenres: ['dark_fantasy', 'religious_ritual', 'xianxia', 'mythic_epic', 'horror'],
  compatibleEras: ['feudal', 'early_modern', 'mythic', 'timeless'],
  compatibleCultures: ['forbidden_temple', 'mythic_cult', 'religious_order', 'east_asian_mythic'],
  compatibleSpaces: ['temple', 'altar', 'cave', 'crypt', 'tomb', 'interior'],
  genreStrictness: 'soft',
  cultureStrictness: 'soft',
  tags: ['subject_axis', 'visible_body_axis', 'ritual_body_evidence']
};

const ecologicalDirectPatch: Partial<LibraryItemDef> = {
  publicFilterTags: ['ecological', 'nature', 'habitat'],
  nativeTags: ['ecology', 'habitat'],
  evidenceTags: ['ecology', 'habitat', 'climate', 'plant', 'growth'],
  genreTags: ['ecological'],
  compatibleGenres: ['adventure', 'fantasy', 'mythic_epic'],
  compatibleEras: ['primitive', 'feudal', 'early_modern', 'modern', 'contemporary', 'near_future', 'far_future', 'mythic', 'timeless'],
  compatibleCultures: ['natural_wilderness', 'alien_ecology', 'east_asian_mythic', 'frontier_survival'],
  compatibleSpaces: ['forest', 'wetland', 'mountain', 'river', 'landscape', 'greenhouse', 'alien_planet'],
  genreStrictness: 'soft',
  cultureStrictness: 'soft',
  tags: ['subject_axis', 'visible_body_axis', 'ecological_body_evidence']
};

const plantSymbiosisPatch: Partial<LibraryItemDef> = {
  ...ecologicalDirectPatch,
  nativeTags: ['ecology', 'plant', 'symbiosis'],
  evidenceTags: ['ecology', 'plant', 'growth', 'symbiosis', 'habitat'],
  compatibleGenres: ['fantasy', 'mythic_epic', 'xianxia', 'body_horror', 'biopunk'],
  compatibleEras: ['near_future', 'far_future', 'mythic', 'timeless'],
  compatibleCultures: ['natural_wilderness', 'alien_ecology', 'east_asian_mythic', 'mythic_cult'],
  compatibleSpaces: ['forest', 'wetland', 'mountain', 'river', 'cave', 'alien_planet', 'greenhouse']
};

const xianxiaDirectPatch: Partial<LibraryItemDef> = {
  publicFilterTags: ['xianxia', 'cultivation', 'talisman'],
  nativeTags: ['xianxia', 'cultivation', 'magic'],
  evidenceTags: ['cultivation', 'magic', 'ritual', 'symbol', 'talisman'],
  genreTags: ['xianxia'],
  compatibleGenres: ['wuxia', 'fantasy', 'religious_ritual', 'mythic_epic', 'dark_fantasy'],
  compatibleEras: ['feudal', 'early_modern', 'mythic', 'timeless'],
  compatibleCultures: ['chinese_jianghu', 'east_asian_mythic', 'sect_order', 'mountain_monastery', 'east_asian_ritual'],
  compatibleSpaces: ['mountain', 'forest', 'temple', 'altar', 'cave', 'courtyard', 'landscape'],
  genreStrictness: 'soft',
  cultureStrictness: 'soft',
  tags: ['subject_axis', 'visible_body_axis', 'xianxia_body_evidence']
};

const wuxiaDirectPatch: Partial<LibraryItemDef> = {
  publicFilterTags: ['wuxia', 'jianghu', 'martial'],
  nativeTags: ['wuxia', 'martial_training', 'training'],
  evidenceTags: ['martial_training', 'training', 'combat', 'weapon', 'duel', 'jianghu_travel'],
  genreTags: ['wuxia'],
  compatibleGenres: ['adventure', 'historical', 'war_military', 'xianxia'],
  compatibleEras: ['feudal', 'early_modern', 'mythic', 'timeless'],
  compatibleCultures: ['chinese_jianghu', 'east_asian_historical', 'sect_order', 'mountain_monastery', 'combat_training'],
  compatibleSpaces: ['inn', 'training_ground', 'mountain', 'forest', 'temple', 'courtyard', 'river', 'street'],
  genreStrictness: 'soft',
  cultureStrictness: 'soft',
  tags: ['subject_axis', 'visible_body_axis', 'wuxia_body_evidence']
};

const dreamEvidencePatch: Partial<LibraryItemDef> = {
  publicFilterTags: ['dream', 'surreal', 'symbol'],
  nativeTags: ['dream', 'surreal', 'symbol'],
  evidenceTags: ['dream', 'memory', 'mirror', 'liminal', 'threshold'],
  compatibleGenres: ['dream', 'surreal', 'psychological'],
  compatibleEras: ['contemporary', 'timeless', 'mythic'],
  compatibleCultures: ['dream_psychic', 'symbolic_stage', 'liminal_modern'],
  compatibleSpaces: ['bedroom', 'mirror_room', 'liminal', 'void', 'stage', 'interior', 'threshold'],
  genreStrictness: 'hard',
  cultureStrictness: 'soft',
  tags: ['subject_axis', 'visible_body_axis', 'dream_body_evidence']
};

const psychologicalEvidencePatch: Partial<LibraryItemDef> = {
  publicFilterTags: ['psychological', 'realistic'],
  nativeTags: ['psychological', 'realistic'],
  evidenceTags: ['memory', 'fear', 'isolation', 'identity', 'trauma', 'confession'],
  compatibleGenres: ['psychological', 'dream', 'noir_crime', 'horror'],
  compatibleEras: ['modern', 'contemporary', 'timeless'],
  compatibleCultures: ['dream_psychic', 'liminal_modern', 'institutional_modern', 'symbolic_stage'],
  compatibleSpaces: ['interior', 'apartment', 'hospital', 'mirror_room', 'liminal', 'stage', 'bedroom'],
  genreStrictness: 'hard',
  cultureStrictness: 'soft',
  tags: ['subject_axis', 'visible_body_axis', 'psychological_body_evidence']
};

const abstractEvidencePatch: Partial<LibraryItemDef> = {
  publicFilterTags: ['abstract', 'surreal', 'symbol'],
  nativeTags: ['abstract', 'surreal', 'symbol'],
  evidenceTags: ['abstract', 'geometry', 'negative_space', 'deconstruction', 'mask', 'material_idea'],
  compatibleGenres: ['abstract', 'surreal', 'dream'],
  compatibleEras: ['contemporary', 'timeless', 'mythic', 'near_future', 'far_future'],
  compatibleCultures: ['symbolic_stage', 'dream_psychic'],
  compatibleSpaces: ['abstract', 'void', 'stage', 'threshold', 'interior'],
  genreStrictness: 'hard',
  cultureStrictness: 'soft',
  tags: ['subject_axis', 'visible_body_axis', 'abstract_body_evidence']
};

const cosmicEvidencePatch: Partial<LibraryItemDef> = {
  publicFilterTags: ['cosmic_horror', 'surreal', 'symbol'],
  nativeTags: ['cosmic', 'void', 'surreal'],
  evidenceTags: ['cosmic', 'void', 'unknown', 'scale', 'madness', 'star'],
  compatibleGenres: ['cosmic_horror', 'surreal', 'body_horror', 'horror'],
  compatibleEras: ['modern', 'contemporary', 'near_future', 'far_future', 'mythic', 'timeless'],
  compatibleCultures: ['mythic_cult', 'dream_psychic', 'space_colony', 'symbolic_stage', 'forbidden_temple'],
  compatibleSpaces: ['void', 'temple', 'altar', 'space_station', 'cave', 'underground', 'landscape'],
  genreStrictness: 'hard',
  cultureStrictness: 'soft',
  tags: ['subject_axis', 'visible_body_axis', 'cosmic_body_evidence']
};

const surfacePatches: Record<string, Partial<LibraryItemDef>> = {
  cd_surface_state_rain_wet: {
    ...ecologicalDirectPatch,
    evidenceTags: ['ecology', 'climate', 'habitat', 'water', 'weather']
  },
  cd_surface_state_mud_splatter: {
    ...ecologicalDirectPatch,
    evidenceTags: ['ecology', 'habitat', 'soil', 'climate', 'travel'],
    compatibleGenres: ['adventure', 'wuxia', 'wasteland', 'post_apocalyptic']
  },
  cd_surface_state_snowflakes: {
    ...ecologicalDirectPatch,
    evidenceTags: ['ecology', 'climate', 'habitat', 'cold', 'weather'],
    compatibleGenres: ['adventure', 'historical', 'wuxia', 'wasteland']
  },
  cd_surface_state_sea_spray_wetness: {
    ...ecologicalDirectPatch,
    evidenceTags: ['ecology', 'habitat', 'water', 'climate', 'salt'],
    compatibleGenres: ['adventure', 'historical', 'space_opera']
  },
  cd_surface_state_flower_petals: {
    ...ecologicalDirectPatch,
    evidenceTags: ['ecology', 'plant', 'growth', 'ritual', 'symbol'],
    compatibleGenres: ['romance', 'xianxia', 'fantasy', 'mythic_epic', 'religious_ritual']
  },
  cd_surface_state_desert_dust_mask: {
    ...ecologicalDirectPatch,
    evidenceTags: ['ecology', 'climate', 'habitat', 'sand', 'weather'],
    compatibleGenres: ['adventure', 'wasteland', 'post_apocalyptic', 'historical']
  },
  cd_surface_state_salt_crust: {
    ...ecologicalDirectPatch,
    evidenceTags: ['ecology', 'climate', 'habitat', 'water', 'salt'],
    compatibleGenres: ['adventure', 'wasteland', 'post_apocalyptic']
  },
  cd_surface_state_ash_dusted: {
    ...xianxiaDirectPatch,
    compatibleGenres: ['religious_ritual', 'dark_fantasy', 'wasteland', 'post_apocalyptic']
  },
  cd_surface_state_gold_powder: {
    ...xianxiaDirectPatch,
    compatibleGenres: ['religious_ritual', 'mythic_epic', 'court', 'fashion_idol']
  },
  cd_surface_state_ritual_pigment: {
    ...xianxiaDirectPatch,
    compatibleGenres: ['religious_ritual', 'dark_fantasy', 'mythic_epic']
  },
  cd_surface_state_dust_coating: wastelandEvidencePatch,
  cd_surface_state_sand_grain: {
    ...ecologicalDirectPatch,
    evidenceTags: ['ecology', 'climate', 'habitat', 'sand', 'weather'],
    compatibleGenres: ['adventure', 'wasteland', 'post_apocalyptic']
  },
  cd_surface_state_mechanic_grease: wastelandEvidencePatch,
  cd_surface_state_charcoal_smudge: wastelandEvidencePatch,
  cd_surface_state_chemical_residue: {
    ...wastelandEvidencePatch,
    compatibleGenres: ['wasteland', 'post_apocalyptic', 'survival', 'science_fiction', 'biopunk']
  },
  cd_surface_state_metal_dust: {
    ...spaceEvidencePatch,
    compatibleGenres: ['space_opera', 'science_fiction', 'wasteland', 'post_apocalyptic'],
    compatibleCultures: ['space_colony', 'posthuman_civilization', 'industrial_ruin', 'postapocalyptic_wasteland'],
    compatibleSpaces: ['space_station', 'spaceship', 'colony', 'scrapyard', 'factory', 'ruin']
  },
  cd_surface_state_medical_tape_residue: spaceEvidencePatch,
  cd_surface_state_bandage_wrap: {
    ...spaceEvidencePatch,
    compatibleGenres: ['space_opera', 'science_fiction', 'wasteland', 'post_apocalyptic', 'survival']
  },
  cd_surface_state_tear_tracks: psychologicalEvidencePatch,
  cd_surface_state_rain_mixed_makeup: psychologicalEvidencePatch,
  cd_surface_state_nosebleed_trace: { ...psychologicalEvidencePatch, compatibleGenres: ['psychological', 'dream', 'horror', 'body_horror'] },
  cd_surface_state_clay_smear: abstractEvidencePatch
};

const skinPatches: Record<string, Partial<LibraryItemDef>> = {
  cd_skin_bark_skin: plantSymbiosisPatch,
  cd_skin_mycelium_skin: {
    ...plantSymbiosisPatch,
    evidenceTags: ['ecology', 'growth', 'symbiosis', 'habitat', 'infection'],
    compatibleGenres: ['body_horror', 'biopunk', 'fantasy', 'mythic_epic']
  },
  cd_skin_biolum_skin: {
    ...ecologicalDirectPatch,
    evidenceTags: ['ecology', 'growth', 'habitat', 'symbiosis', 'light'],
    compatibleGenres: ['science_fiction', 'fantasy', 'xianxia', 'body_horror']
  },
  cd_skin_freckled_skin: {
    ...ecologicalDirectPatch,
    evidenceTags: ['ecology', 'climate', 'habitat', 'sunlight'],
    compatibleGenres: ['romance', 'adventure', 'real_professional']
  },
  cd_skin_jade_skin: {
    ...xianxiaDirectPatch,
    compatibleGenres: ['fantasy', 'mythic_epic', 'court', 'religious_ritual']
  },
  cd_skin_scale_skin: {
    ...ecologicalDirectPatch,
    evidenceTags: ['ecology', 'animal', 'habitat', 'scale', 'mutation'],
    compatibleGenres: ['creature', 'fantasy', 'xianxia', 'body_horror', 'biopunk']
  },
  cd_skin_rough_skin: {
    ...wastelandEvidencePatch,
    genreTags: ['ecological'],
    evidenceTags: ['survival', 'wear', 'damage', 'ecology', 'climate', 'habitat'],
    compatibleGenres: ['wasteland', 'post_apocalyptic', 'survival', 'adventure']
  },
  cd_skin_thick_skin: { ...wastelandEvidencePatch, compatibleGenres: ['wasteland', 'post_apocalyptic', 'survival', 'war_military', 'wuxia', 'adventure', 'ecological'] },
  cd_skin_weathered_skin: {
    ...wastelandEvidencePatch,
    genreTags: ['ecological'],
    evidenceTags: ['survival', 'hazard', 'wear', 'damage', 'ecology', 'climate', 'habitat'],
    compatibleGenres: ['wasteland', 'post_apocalyptic', 'survival', 'war_military', 'wuxia', 'adventure']
  },
  cd_skin_sun_spots: {
    ...wastelandEvidencePatch,
    genreTags: ['ecological'],
    evidenceTags: ['survival', 'wear', 'ecology', 'climate', 'habitat']
  },
  cd_skin_calloused_skin: {
    ...wastelandEvidencePatch,
    compatibleGenres: ['wasteland', 'post_apocalyptic', 'survival', 'war_military', 'wuxia', 'adventure', 'ecological']
  },
  cd_skin_scar_tissue_skin: wastelandEvidencePatch,
  cd_skin_thin_skin: spaceEvidencePatch,
  cd_skin_wax_skin: dreamEvidencePatch,
  cd_skin_porcelain_skin: abstractEvidencePatch,
  cd_skin_marble_skin: abstractEvidencePatch,
  cd_skin_glass_skin_material: { ...dreamEvidencePatch, compatibleGenres: ['dream', 'abstract', 'surreal'] },
  cd_skin_iridescent_skin: { ...cosmicEvidencePatch, compatibleGenres: ['cosmic_horror', 'surreal', 'dream', 'science_fiction'] },
  cd_skin_under_eye_texture: psychologicalEvidencePatch,
  cd_skin_paper_thin_skin: { ...spaceEvidencePatch, compatibleGenres: ['space_opera', 'science_fiction', 'psychological'] }
};

const bodyMarkingPatches: Record<string, Partial<LibraryItemDef>> = {
  cd_body_mark_serial_number_tattoo: spaceEvidencePatch,
  cd_body_mark_barcode_mark: spaceEvidencePatch,
  cd_body_mark_worker_stamp: {
    ...wastelandEvidencePatch,
    compatibleGenres: ['wasteland', 'post_apocalyptic', 'survival', 'space_opera', 'science_fiction'],
    compatibleCultures: ['postapocalyptic_wasteland', 'industrial_ruin', 'space_colony', 'global_corporate'],
    compatibleSpaces: ['shelter', 'scrapyard', 'factory', 'space_station', 'spaceship', 'colony']
  },
  cd_body_mark_military_blood_type: {
    ...wastelandEvidencePatch,
    compatibleGenres: ['wasteland', 'post_apocalyptic', 'war_military', 'space_opera', 'science_fiction'],
    compatibleCultures: ['military_remnant', 'postapocalyptic_wasteland', 'space_colony'],
    compatibleSpaces: ['shelter', 'road', 'ruin', 'space_station', 'spaceship', 'colony']
  },
  cd_body_mark_rank_brand: wastelandEvidencePatch,
  cd_body_mark_map_tattoo: wastelandEvidencePatch,
  cd_body_mark_inked_coordinates: spaceEvidencePatch,
  cd_body_mark_subdermal_id_chip_mark: spaceEvidencePatch,
  cd_body_mark_qr_skin_print: spaceEvidencePatch,
  cd_body_mark_nfc_wrist_mark: spaceEvidencePatch,
  cd_body_mark_biometric_dots: spaceEvidencePatch,
  cd_body_mark_clone_batch_mark: spaceEvidencePatch,
  cd_body_mark_lab_specimen_grid: bioEvidencePatch,
  cd_body_mark_glowing_runes: { ...xianxiaDirectPatch, compatibleGenres: ['dark_fantasy', 'religious_ritual', 'fantasy', 'mythic_epic', 'cosmic_horror'] },
  cd_body_mark_cursed_seal: { ...ritualEvidencePatch, compatibleGenres: ['dark_fantasy', 'religious_ritual', 'horror', 'cosmic_horror'] },
  cd_body_mark_devotional_text_skin: { ...xianxiaDirectPatch, compatibleGenres: ['religious_ritual', 'mythic_epic', 'dark_fantasy'] },
  cd_body_mark_protective_talisman_mark: { ...xianxiaDirectPatch, compatibleGenres: ['religious_ritual', 'fantasy', 'mythic_epic', 'dark_fantasy'] },
  cd_body_mark_pilgrimage_stamp: { ...xianxiaDirectPatch, compatibleGenres: ['religious_ritual', 'adventure', 'historical', 'wuxia'] },
  cd_body_mark_initiation_mark: {
    ...xianxiaDirectPatch,
    genreTags: ['xianxia', 'wuxia'],
    evidenceTags: ['cultivation', 'sect_order', 'ritual', 'symbol', 'martial_training']
  },
  cd_body_mark_prayer_marks: { ...xianxiaDirectPatch, compatibleGenres: ['religious_ritual', 'mythic_epic', 'dark_fantasy'] },
  cd_body_mark_ritual_body_paint: { ...xianxiaDirectPatch, compatibleGenres: ['religious_ritual', 'mythic_epic', 'fantasy'] },
  cd_body_mark_war_paint_body: wuxiaDirectPatch,
  cd_body_mark_penance_scars: {
    ...xianxiaDirectPatch,
    compatibleGenres: ['religious_ritual', 'wuxia', 'dark_fantasy', 'mythic_epic']
  },
  cd_body_mark_victory_notches: {
    ...wuxiaDirectPatch,
    compatibleGenres: ['adventure', 'war_military', 'historical', 'xianxia']
  },
  cd_body_mark_living_tattoo: {
    ...xianxiaDirectPatch,
    compatibleGenres: ['fantasy', 'dark_fantasy', 'body_horror', 'biopunk']
  },
  cd_body_mark_angelic_sigils: {
    ...xianxiaDirectPatch,
    compatibleGenres: ['religious_ritual', 'mythic_epic', 'dark_fantasy', 'cosmic_horror']
  },
  cd_body_mark_white_ink_tattoo: dreamEvidencePatch,
  cd_body_mark_sacred_geometry_body: abstractEvidencePatch,
  cd_body_mark_fashion_fitting_marks: abstractEvidencePatch,
  cd_body_mark_makeup_transfer_mark: psychologicalEvidencePatch,
  cd_body_mark_mourning_mark: psychologicalEvidencePatch,
  cd_body_mark_cult_symbol_tattoo: { ...cosmicEvidencePatch, compatibleGenres: ['cosmic_horror', 'religious_ritual', 'dark_fantasy', 'horror'] },
  cd_body_mark_carved_runes: { ...xianxiaDirectPatch, compatibleGenres: ['dark_fantasy', 'religious_ritual', 'fantasy', 'mythic_epic', 'cosmic_horror'] }
};

const bodyDamagePatches: Record<string, Partial<LibraryItemDef>> = {
  cd_body_damage_burn_scar: wastelandEvidencePatch,
  cd_body_damage_old_bullet_scar: wastelandEvidencePatch,
  cd_body_damage_fresh_scratch: { ...wuxiaDirectPatch, compatibleGenres: ['adventure', 'war_military', 'wasteland', 'post_apocalyptic', 'survival'] },
  cd_body_damage_fresh_bruise: { ...wuxiaDirectPatch, compatibleGenres: ['adventure', 'war_military', 'wasteland', 'post_apocalyptic', 'survival'] },
  cd_body_damage_stitches: wastelandEvidencePatch,
  cd_body_damage_medical_patch: wastelandEvidencePatch,
  cd_body_damage_shrapnel_scars: wastelandEvidencePatch,
  cd_body_damage_fresh_cut: { ...wuxiaDirectPatch, compatibleGenres: ['adventure', 'war_military', 'wasteland', 'post_apocalyptic', 'survival'] },
  cd_body_damage_fresh_scraped_knees: { ...wuxiaDirectPatch, compatibleGenres: ['adventure', 'war_military', 'wasteland', 'post_apocalyptic', 'survival', 'ecological'] },
  cd_body_damage_bloody_knuckles: { ...wuxiaDirectPatch, compatibleGenres: ['adventure', 'war_military', 'noir_crime', 'wasteland', 'post_apocalyptic'] },
  cd_body_damage_surgical_scar: spaceEvidencePatch,
  cd_body_damage_surgical_staples: spaceEvidencePatch,
  cd_body_damage_needle_scars: spaceEvidencePatch,
  cd_body_damage_sensor_patch_marks: spaceEvidencePatch,
  cd_body_damage_cyber_surgery_seams: spaceEvidencePatch,
  cd_body_damage_lab_injection_sites: bioEvidencePatch,
  cd_body_damage_containment_burns: bioEvidencePatch,
  cd_body_damage_electrode_marks: bioEvidencePatch,
  cd_body_damage_cryosleep_frostburn: spaceEvidencePatch,
  cd_body_damage_radiation_patch_damage: {
    ...spaceEvidencePatch,
    compatibleGenres: ['space_opera', 'science_fiction', 'wasteland', 'post_apocalyptic', 'cosmic_horror']
  },
  cd_body_damage_biohazard_skin_lesions: bioEvidencePatch,
  cd_body_damage_old_bite_scar: {
    ...ecologicalDirectPatch,
    evidenceTags: ['ecology', 'animal', 'habitat', 'claw', 'damage'],
    compatibleGenres: ['creature', 'adventure', 'horror', 'dark_fantasy']
  },
  cd_body_damage_sun_crack_damage: {
    ...ecologicalDirectPatch,
    evidenceTags: ['ecology', 'climate', 'habitat', 'survival', 'damage'],
    compatibleGenres: ['adventure', 'wasteland', 'post_apocalyptic', 'historical']
  },
  cd_body_damage_frostbite_scars: {
    ...ecologicalDirectPatch,
    evidenceTags: ['ecology', 'climate', 'habitat', 'cold', 'damage'],
    compatibleGenres: ['adventure', 'wasteland', 'post_apocalyptic', 'historical']
  },
  cd_body_damage_magical_burn_mark: { ...xianxiaDirectPatch, compatibleGenres: ['fantasy', 'dark_fantasy', 'religious_ritual', 'mythic_epic'] },
  cd_body_damage_curse_cracks: { ...xianxiaDirectPatch, compatibleGenres: ['dark_fantasy', 'religious_ritual', 'fantasy', 'mythic_epic'] },
  cd_body_damage_ritual_bleeding_mark: { ...xianxiaDirectPatch, compatibleGenres: ['religious_ritual', 'dark_fantasy', 'mythic_epic'] },
  cd_body_damage_training_bruise_old: wuxiaDirectPatch,
  cd_body_damage_old_broken_nose: { ...wuxiaDirectPatch, compatibleGenres: ['noir_crime', 'war_military', 'adventure'] },
  cd_body_damage_old_whip_scars: { ...wuxiaDirectPatch, compatibleGenres: ['historical', 'dark_fantasy', 'war_military'] },
  cd_body_damage_monster_claw_wounds: { ...xianxiaDirectPatch, compatibleGenres: ['fantasy', 'creature', 'adventure', 'dark_fantasy'] },
  cd_body_damage_angelic_burn_edges: { ...xianxiaDirectPatch, compatibleGenres: ['religious_ritual', 'mythic_epic', 'dark_fantasy'] },
  cd_body_damage_psychic_nosebleed: psychologicalEvidencePatch,
  cd_body_damage_time_erosion_scars: { ...dreamEvidencePatch, compatibleGenres: ['dream', 'surreal', 'cosmic_horror'] },
  cd_body_damage_void_corrosion: cosmicEvidencePatch,
  cd_body_damage_petrification_edges: abstractEvidencePatch,
  cd_body_damage_holy_stigmata: { ...ritualEvidencePatch, compatibleGenres: ['religious_ritual', 'dark_fantasy', 'cosmic_horror'] },
  cd_body_damage_fine_body_scar: { ...psychologicalEvidencePatch, compatibleGenres: ['psychological', 'wuxia', 'war_military', 'noir_crime'] },
  cd_body_damage_slash_scar: { ...wastelandEvidencePatch, compatibleGenres: ['wuxia', 'war_military', 'wasteland', 'post_apocalyptic', 'survival'] },
  cd_body_damage_cauliflower_ear: { ...wastelandEvidencePatch, compatibleGenres: ['wuxia', 'war_military', 'real_professional', 'survival'] }
};

const bodyFeaturePatches: Record<string, Partial<LibraryItemDef>> = {
  cd_body_plant_root_skeleton: plantSymbiosisPatch,
  cd_body_ritual_icon_body: { ...xianxiaDirectPatch, compatibleGenres: ['religious_ritual', 'mythic_epic', 'fantasy', 'abstract'] },
  cd_body_puppet_body_structure: { ...dreamEvidencePatch, compatibleGenres: ['dream', 'abstract', 'surreal', 'psychological'] },
  cd_body_hoofed_lower_body: {
    ...ecologicalDirectPatch,
    evidenceTags: ['ecology', 'animal', 'habitat', 'mutation', 'body'],
    compatibleGenres: ['creature', 'fantasy', 'mythic_epic']
  },
  cd_body_serpent_lower_body: {
    ...ecologicalDirectPatch,
    evidenceTags: ['ecology', 'animal', 'habitat', 'scale', 'body'],
    compatibleGenres: ['creature', 'fantasy', 'xianxia', 'mythic_epic']
  },
  cd_body_merfolk_lower_body: {
    ...ecologicalDirectPatch,
    evidenceTags: ['ecology', 'animal', 'habitat', 'water', 'body'],
    compatibleGenres: ['creature', 'fantasy', 'mythic_epic']
  },
  cd_body_floating_limb_structure: { ...xianxiaDirectPatch, compatibleGenres: ['dream', 'surreal', 'abstract', 'cosmic_horror'] },
  cd_body_segmented_body_structure: abstractEvidencePatch,
  cd_body_body_as_container: { ...cosmicEvidencePatch, compatibleGenres: ['cosmic_horror', 'abstract', 'surreal', 'religious_ritual'] },
  cd_body_crystal_bone_structure: { ...xianxiaDirectPatch, compatibleGenres: ['cosmic_horror', 'fantasy', 'mythic_epic', 'body_horror'] },
  cd_body_bone_cage_frame: cosmicEvidencePatch,
  cd_body_swarm_humanoid_structure: cosmicEvidencePatch,
  cd_body_many_eyes_body_axis: cosmicEvidencePatch,
  cd_body_choir_body_structure: cosmicEvidencePatch,
  cd_body_fused_twin_body: { ...psychologicalEvidencePatch, compatibleGenres: ['psychological', 'dream', 'body_horror', 'cosmic_horror'] }
};

const bodyModificationPatches: Record<string, Partial<LibraryItemDef>> = {
  cd_body_mod_mirror_body_fragment: dreamEvidencePatch,
  cd_body_mod_paper_body_edges: { ...xianxiaDirectPatch, compatibleGenres: ['abstract', 'surreal', 'religious_ritual'] },
  cd_body_mod_porcelain_joint_body: abstractEvidencePatch,
  cd_body_mod_third_eye: { ...xianxiaDirectPatch, compatibleGenres: ['religious_ritual', 'mythic_epic', 'fantasy', 'dark_fantasy'] },
  cd_body_mod_halo_implant: { ...xianxiaDirectPatch, compatibleGenres: ['cosmic_horror', 'religious_ritual', 'dark_fantasy', 'science_fiction', 'mythic_epic'] },
  cd_body_mod_symbiotic_eye_growth: cosmicEvidencePatch,
  cd_body_mod_crystalline_spine: cosmicEvidencePatch,
  cd_body_mod_synthetic_skin_seams: spaceEvidencePatch,
  cd_body_mod_medical_implant_port: spaceEvidencePatch,
  cd_body_mod_prosthetic_eye: spaceEvidencePatch,
  cd_body_mod_cybernetic_eye: spaceEvidencePatch,
  cd_body_mod_living_vines: plantSymbiosisPatch,
  cd_body_mod_flowering_skin: plantSymbiosisPatch,
  cd_body_mod_moss_growth: plantSymbiosisPatch,
  cd_body_mod_webbed_fingers: {
    ...ecologicalDirectPatch,
    evidenceTags: ['ecology', 'animal', 'habitat', 'water', 'mutation'],
    compatibleGenres: ['creature', 'fantasy', 'biopunk', 'body_horror']
  },
  cd_body_mod_wolf_ears: {
    ...ecologicalDirectPatch,
    evidenceTags: ['ecology', 'animal', 'habitat', 'beast', 'mutation'],
    compatibleGenres: ['creature', 'fantasy', 'mythic_epic']
  },
  cd_body_mod_feather_growth: {
    ...ecologicalDirectPatch,
    evidenceTags: ['ecology', 'animal', 'habitat', 'wing', 'growth'],
    compatibleGenres: ['creature', 'fantasy', 'mythic_epic']
  },
  cd_body_mod_insect_chitin_patches: {
    ...ecologicalDirectPatch,
    evidenceTags: ['ecology', 'animal', 'habitat', 'symbiosis', 'mutation'],
    compatibleGenres: ['creature', 'biopunk', 'body_horror', 'fantasy']
  },
  cd_body_mod_coral_growth: {
    ...plantSymbiosisPatch,
    evidenceTags: ['ecology', 'habitat', 'growth', 'symbiosis', 'water'],
    compatibleGenres: ['fantasy', 'mythic_epic', 'body_horror', 'biopunk', 'adventure']
  },
  cd_body_mod_mineralized_hand: {
    ...ecologicalDirectPatch,
    evidenceTags: ['ecology', 'habitat', 'growth', 'mineral', 'symbiosis'],
    compatibleGenres: ['fantasy', 'xianxia', 'mythic_epic', 'body_horror']
  },
  cd_body_mod_ritual_extra_hands: {
    ...xianxiaDirectPatch,
    compatibleGenres: ['religious_ritual', 'mythic_epic', 'fantasy']
  },
  cd_body_mod_shadow_limb: {
    ...xianxiaDirectPatch,
    compatibleGenres: ['dark_fantasy', 'fantasy', 'surreal']
  },
  cd_body_mod_flame_hair_body: {
    ...xianxiaDirectPatch,
    compatibleGenres: ['fantasy', 'mythic_epic', 'dark_fantasy']
  },
  cd_body_mod_water_body_part: {
    ...xianxiaDirectPatch,
    compatibleGenres: ['fantasy', 'mythic_epic', 'ecological']
  }
};

export const withVisibleBodyAxisMeta = (blockId: string, items: LibraryItemDef[]): LibraryItemDef[] => (
  items.map(item => {
    const id = item.id || '';
    if (blockId === 'cd_surface_state') return merge(item, surfacePatches[id] || {});
    if (blockId === 'cd_skin_texture') return merge(item, skinPatches[id] || {});
    if (blockId === 'cd_body_features') return merge(item, bodyFeaturePatches[id] || {});
    if (blockId === 'cd_body_markings') return merge(item, bodyMarkingPatches[id] || {});
    if (blockId === 'cd_body_damage') return merge(item, bodyDamagePatches[id] || {});
    if (blockId === 'cd_body_modification') return merge(item, bodyModificationPatches[id] || {});
    return item;
  })
);
