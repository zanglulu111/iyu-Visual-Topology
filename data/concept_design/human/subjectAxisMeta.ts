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
  realityTags: uniq([...(item.realityTags || []), ...(patch.realityTags || [])]),
  tags: uniq([...(item.tags || []), ...(patch.tags || [])])
});

const mythicFantasyPatch: Partial<LibraryItemDef> = {
  publicFilterTags: ['fantasy', 'magic', 'creature'],
  nativeTags: ['magic', 'creature', 'surreal'],
  compatibleGenres: ['fantasy', 'mythic_epic', 'dark_fantasy'],
  compatibleEras: ['feudal', 'mythic', 'timeless'],
  compatibleCultures: ['mythic_kingdom', 'religious_order', 'mythic_cult'],
  compatibleSpaces: ['kingdom', 'temple', 'forest', 'mountain', 'cave', 'landscape'],
  realityTags: ['mythic', 'magical', 'creature', 'non_realist'],
  ontologyLevel: 4,
  genreStrictness: 'hard',
  cultureStrictness: 'soft',
  tags: ['subject_axis', 'species_axis']
};

const eastAsianMythPatch: Partial<LibraryItemDef> = {
  publicFilterTags: ['xianxia', 'magic', 'creature'],
  nativeTags: ['magic', 'creature', 'ritual'],
  compatibleGenres: ['xianxia', 'fantasy', 'mythic_epic', 'dark_fantasy'],
  compatibleEras: ['feudal', 'early_modern', 'mythic', 'timeless'],
  compatibleCultures: ['east_asian_historical', 'east_asian_mythic', 'chinese_jianghu', 'mythic_cult'],
  compatibleSpaces: ['temple', 'mountain', 'forest', 'cave', 'landscape'],
  realityTags: ['mythic', 'magical', 'creature', 'non_realist'],
  ontologyLevel: 4,
  genreStrictness: 'hard',
  cultureStrictness: 'soft',
  tags: ['subject_axis', 'species_axis', 'east_asian_myth']
};

const sciFiSpeciesPatch: Partial<LibraryItemDef> = {
  publicFilterTags: ['science_fiction', 'technology'],
  nativeTags: ['technology', 'interface', 'body'],
  compatibleGenres: ['science_fiction', 'cyberpunk', 'posthuman', 'space_opera'],
  compatibleEras: ['near_future', 'far_future'],
  compatibleCultures: ['cyber_megacity', 'posthuman_city', 'space_colony', 'global_corporate'],
  compatibleSpaces: ['lab', 'server_room', 'corporate_tower', 'space_station', 'spaceship', 'city'],
  realityTags: ['technological', 'synthetic_body', 'speculative'],
  ontologyLevel: 3,
  genreStrictness: 'hard',
  cultureStrictness: 'soft',
  tags: ['subject_axis', 'species_axis', 'tech_body']
};

const alienSpeciesPatch: Partial<LibraryItemDef> = {
  publicFilterTags: ['science_fiction', 'alien', 'space'],
  nativeTags: ['creature', 'alien', 'cosmic'],
  compatibleGenres: ['science_fiction', 'space_opera', 'cosmic_horror', 'creature'],
  compatibleEras: ['near_future', 'far_future', 'timeless'],
  compatibleCultures: ['space_colony', 'alien_ecology', 'posthuman_research'],
  compatibleSpaces: ['space_station', 'spaceship', 'alien_planet', 'lab', 'cosmic'],
  realityTags: ['alien', 'cosmic', 'non_realist'],
  ontologyLevel: 4,
  genreStrictness: 'hard',
  cultureStrictness: 'soft',
  tags: ['subject_axis', 'species_axis', 'alien_body']
};

const bioSpeciesPatch: Partial<LibraryItemDef> = {
  publicFilterTags: ['bio', 'mutation', 'body'],
  nativeTags: ['biological', 'body', 'surreal'],
  compatibleGenres: ['biopunk', 'body_horror', 'science_fiction', 'horror', 'ecological'],
  compatibleEras: ['modern', 'contemporary', 'near_future', 'far_future', 'timeless'],
  compatibleCultures: ['biotech_lab', 'posthuman_research', 'ecological_wild'],
  compatibleSpaces: ['lab', 'containment', 'forest', 'wetland', 'cave', 'greenhouse'],
  realityTags: ['biological', 'mutation', 'speculative'],
  ontologyLevel: 3,
  genreStrictness: 'hard',
  cultureStrictness: 'soft',
  tags: ['subject_axis', 'species_axis', 'bio_body']
};

const horrorSpeciesPatch: Partial<LibraryItemDef> = {
  publicFilterTags: ['horror', 'body', 'damage'],
  nativeTags: ['body', 'damage', 'survival'],
  compatibleGenres: ['horror', 'dark_fantasy', 'wasteland', 'post_apocalyptic'],
  compatibleEras: ['modern', 'contemporary', 'near_future', 'far_future', 'mythic', 'timeless'],
  compatibleCultures: ['postapocalyptic_wasteland', 'mythic_cult', 'forbidden_temple'],
  compatibleSpaces: ['ruin', 'street', 'shelter', 'crypt', 'underground'],
  realityTags: ['horror_body', 'biological', 'non_realist'],
  ontologyLevel: 4,
  genreStrictness: 'hard',
  cultureStrictness: 'soft',
  tags: ['subject_axis', 'species_axis', 'horror_body']
};

const speciesPatchById: Record<string, Partial<LibraryItemDef>> = {
  sp_angel: { ...mythicFantasyPatch, compatibleGenres: ['fantasy', 'mythic_epic', 'religious_ritual'], nativeTags: ['magic', 'ritual', 'symbol'] },
  sp_fallen_angel: { ...mythicFantasyPatch, compatibleGenres: ['dark_fantasy', 'religious_ritual', 'horror'], nativeTags: ['magic', 'ritual', 'curse'] },
  sp_demon: { ...mythicFantasyPatch, compatibleGenres: ['dark_fantasy', 'horror', 'mythic_epic'], nativeTags: ['magic', 'curse', 'creature'] },
  sp_succubus: { ...mythicFantasyPatch, compatibleGenres: ['dark_fantasy', 'horror', 'fashion_idol'], nativeTags: ['magic', 'creature', 'glamour'], riskTags: ['mature_tone'] },
  sp_vampire: { ...mythicFantasyPatch, compatibleGenres: ['dark_fantasy', 'horror', 'noir_crime'], nativeTags: ['creature', 'blood', 'aristocratic'] },
  sp_elf: mythicFantasyPatch,
  sp_dark_elf: { ...mythicFantasyPatch, compatibleGenres: ['dark_fantasy', 'fantasy', 'mythic_epic'] },
  sp_orc: { ...mythicFantasyPatch, compatibleGenres: ['fantasy', 'war_military', 'wasteland'], nativeTags: ['creature', 'combat', 'survival'] },
  sp_mermaid: { ...mythicFantasyPatch, compatibleSpaces: ['wetland', 'river', 'cave', 'landscape'], nativeTags: ['creature', 'water', 'body'] },
  sp_siren: mythicFantasyPatch,
  sp_faun: mythicFantasyPatch,
  sp_fairy: mythicFantasyPatch,
  sp_dragon_kin: { ...mythicFantasyPatch, compatibleGenres: ['fantasy', 'mythic_epic', 'xianxia'], nativeTags: ['creature', 'magic', 'combat'] },
  sp_werewolf: { ...mythicFantasyPatch, compatibleGenres: ['horror', 'dark_fantasy', 'fantasy'], nativeTags: ['creature', 'body', 'survival'] },
  sp_kitsune: eastAsianMythPatch,
  sp_oni: eastAsianMythPatch,
  sp_medusa: { ...mythicFantasyPatch, compatibleGenres: ['dark_fantasy', 'horror', 'mythic_epic'], nativeTags: ['curse', 'creature', 'body'] },
  sp_cyborg: sciFiSpeciesPatch,
  sp_android: sciFiSpeciesPatch,
  sp_robot: sciFiSpeciesPatch,
  sp_alien_grey: alienSpeciesPatch,
  sp_reptilian: { ...alienSpeciesPatch, compatibleGenres: ['science_fiction', 'space_opera', 'cosmic_horror', 'horror', 'creature'] },
  sp_mutant: bioSpeciesPatch,
  sp_hologram: { ...sciFiSpeciesPatch, compatibleGenres: ['cyberpunk', 'science_fiction', 'surreal'], nativeTags: ['technology', 'interface', 'surreal'] },
  sp_glitch_entity: { ...sciFiSpeciesPatch, compatibleGenres: ['cyberpunk', 'science_fiction', 'surreal', 'horror'], nativeTags: ['technology', 'interface', 'surreal'] },
  sp_slime_person: bioSpeciesPatch,
  sp_shadow_being: { ...mythicFantasyPatch, compatibleGenres: ['dark_fantasy', 'horror', 'surreal'], nativeTags: ['surreal', 'curse', 'body'] },
  sp_crystal_being: { ...bioSpeciesPatch, compatibleGenres: ['biopunk', 'fantasy', 'science_fiction', 'surreal'], nativeTags: ['body', 'material', 'surreal'] },
  sp_plant_sim: bioSpeciesPatch,
  sp_zombie: horrorSpeciesPatch
};

const cyberBodyPatch: Partial<LibraryItemDef> = {
  publicFilterTags: ['cyber', 'technology', 'interface'],
  nativeTags: ['technology', 'interface', 'body'],
  excludeGenreTags: ['biopunk'],
  compatibleGenres: ['cyberpunk', 'science_fiction', 'posthuman'],
  compatibleEras: ['near_future', 'far_future'],
  compatibleCultures: ['cyber_megacity', 'posthuman_city', 'global_corporate'],
  compatibleSpaces: ['lab', 'server_room', 'corporate_tower', 'city'],
  genreStrictness: 'hard',
  cultureStrictness: 'soft',
  tags: ['subject_axis', 'cyber_body']
};

const mythicBodyPatch: Partial<LibraryItemDef> = {
  publicFilterTags: ['magic', 'ritual', 'body'],
  nativeTags: ['magic', 'ritual', 'symbol', 'body'],
  excludeGenreTags: ['biopunk'],
  compatibleGenres: ['xianxia', 'dark_fantasy', 'religious_ritual', 'mythic_epic', 'fantasy'],
  compatibleEras: ['feudal', 'early_modern', 'mythic', 'timeless'],
  compatibleCultures: ['east_asian_mythic', 'mythic_cult', 'religious_order', 'forbidden_temple'],
  compatibleSpaces: ['temple', 'altar', 'cave', 'mountain', 'forest'],
  genreStrictness: 'hard',
  cultureStrictness: 'soft',
  tags: ['subject_axis', 'mythic_body']
};

const bioBodyPatch: Partial<LibraryItemDef> = {
  publicFilterTags: ['bio', 'mutation', 'body'],
  nativeTags: ['biological', 'body', 'damage'],
  compatibleGenres: ['biopunk', 'body_horror', 'science_fiction', 'horror', 'ecological'],
  compatibleEras: ['modern', 'contemporary', 'near_future', 'far_future', 'timeless'],
  compatibleCultures: ['biotech_lab', 'posthuman_research', 'ecological_wild'],
  compatibleSpaces: ['lab', 'containment', 'forest', 'wetland', 'cave'],
  genreStrictness: 'hard',
  cultureStrictness: 'soft',
  tags: ['subject_axis', 'bio_body']
};

const bioEyePatch: Partial<LibraryItemDef> = {
  publicFilterTags: ['bio', 'mutation', 'creature'],
  nativeTags: ['biological', 'body', 'creature'],
  compatibleGenres: ['biopunk', 'body_horror', 'creature', 'science_fiction', 'fantasy'],
  compatibleEras: ['far_future', 'timeless', 'mythic'],
  compatibleCultures: ['biotech_lab', 'alien_ecology', 'ecological_wild', 'east_asian_mythic', 'mythic_cult'],
  compatibleSpaces: ['lab', 'containment', 'forest', 'wetland', 'cave', 'alien_planet'],
  genreStrictness: 'hard',
  cultureStrictness: 'soft',
  tags: ['subject_axis', 'eye_axis', 'bio_eye']
};

const cyberEyePatch: Partial<LibraryItemDef> = {
  publicFilterTags: ['cyber', 'technology', 'interface'],
  nativeTags: ['technology', 'interface', 'body'],
  excludeGenreTags: ['biopunk'],
  compatibleGenres: ['cyberpunk', 'science_fiction', 'posthuman', 'space_opera'],
  compatibleEras: ['near_future', 'far_future'],
  compatibleCultures: ['cyber_megacity', 'posthuman_city', 'global_corporate', 'space_colony'],
  compatibleSpaces: ['lab', 'server_room', 'corporate_tower', 'city', 'space_station', 'spaceship'],
  genreStrictness: 'hard',
  cultureStrictness: 'soft',
  tags: ['subject_axis', 'eye_axis', 'cyber_eye']
};

const mysticEyePatch: Partial<LibraryItemDef> = {
  publicFilterTags: ['magic', 'ritual', 'symbol'],
  nativeTags: ['magic', 'ritual', 'symbol'],
  excludeGenreTags: ['biopunk'],
  compatibleGenres: ['xianxia', 'dark_fantasy', 'religious_ritual', 'mythic_epic', 'fantasy', 'surreal'],
  compatibleEras: ['feudal', 'early_modern', 'mythic', 'timeless'],
  compatibleCultures: ['east_asian_mythic', 'mythic_cult', 'religious_order', 'forbidden_temple', 'mountain_monastery'],
  compatibleSpaces: ['temple', 'altar', 'cave', 'mountain', 'forest', 'landscape'],
  genreStrictness: 'hard',
  cultureStrictness: 'soft',
  tags: ['subject_axis', 'eye_axis', 'mystic_eye']
};

const horrorEyePatch: Partial<LibraryItemDef> = {
  publicFilterTags: ['horror', 'curse', 'body'],
  nativeTags: ['curse', 'damage', 'body', 'surreal'],
  compatibleGenres: ['horror', 'dark_fantasy', 'body_horror', 'surreal', 'cosmic_horror'],
  compatibleEras: ['modern', 'contemporary', 'near_future', 'far_future', 'mythic', 'timeless'],
  compatibleCultures: ['forbidden_temple', 'mythic_cult', 'dream_psychic', 'postapocalyptic_wasteland'],
  compatibleSpaces: ['temple', 'tomb', 'crypt', 'underground', 'lab', 'liminal', 'void'],
  genreStrictness: 'hard',
  cultureStrictness: 'soft',
  tags: ['subject_axis', 'eye_axis', 'horror_eye']
};

const infectionEyePatch: Partial<LibraryItemDef> = {
  publicFilterTags: ['bio', 'mutation', 'infection'],
  nativeTags: ['biological', 'damage', 'body'],
  compatibleGenres: ['biopunk', 'body_horror', 'horror', 'science_fiction', 'ecological', 'wasteland'],
  compatibleEras: ['modern', 'contemporary', 'near_future', 'far_future', 'timeless'],
  compatibleCultures: ['biotech_lab', 'posthuman_research', 'ecological_wild', 'postapocalyptic_wasteland'],
  compatibleSpaces: ['lab', 'containment', 'forest', 'wetland', 'cave', 'greenhouse', 'shelter'],
  genreStrictness: 'hard',
  cultureStrictness: 'soft',
  tags: ['subject_axis', 'eye_axis', 'infection_eye']
};

const lowSymbolEyePatch: Partial<LibraryItemDef> = {
  publicFilterTags: ['symbol', 'surreal'],
  nativeTags: ['symbol', 'surreal'],
  compatibleGenres: ['surreal', 'fantasy', 'xianxia', 'dark_fantasy', 'fashion_idol'],
  compatibleEras: ['modern', 'contemporary', 'near_future', 'far_future', 'mythic', 'timeless'],
  compatibleCultures: ['dream_psychic', 'symbolic_stage', 'east_asian_mythic', 'mythic_cult'],
  compatibleSpaces: ['stage', 'liminal', 'void', 'temple', 'city'],
  genreStrictness: 'soft',
  cultureStrictness: 'soft',
  tags: ['subject_axis', 'eye_axis', 'symbol_eye']
};

const bodyPatchById: Record<string, Partial<LibraryItemDef>> = {
  cd_eye_fx_cat_slit: bioEyePatch,
  cd_eye_fx_goat_rect: { ...bioEyePatch, compatibleGenres: ['fantasy', 'dark_fantasy', 'creature', 'biopunk', 'body_horror'] },
  cd_eye_fx_reptile_slit: { ...bioEyePatch, compatibleGenres: ['fantasy', 'xianxia', 'dark_fantasy', 'creature', 'biopunk', 'science_fiction'] },
  cd_eye_fx_octopus_pupil: { ...bioEyePatch, compatibleGenres: ['biopunk', 'body_horror', 'science_fiction', 'space_opera', 'creature'] },
  cd_eye_fx_compound: infectionEyePatch,
  cd_eye_fx_double_pupil: { ...mysticEyePatch, compatibleGenres: ['xianxia', 'dark_fantasy', 'mythic_epic', 'biopunk', 'surreal'] },
  cd_eye_fx_many_pupils: horrorEyePatch,
  cd_eye_fx_third_eye: mysticEyePatch,
  cd_eye_fx_eye_cluster: infectionEyePatch,
  cd_eye_fx_black_veins: { ...horrorEyePatch, compatibleGenres: ['horror', 'dark_fantasy', 'biopunk', 'body_horror'] },

  cd_eye_fx_cyber_lens: cyberEyePatch,
  cd_eye_fx_hud_ring: cyberEyePatch,
  cd_eye_fx_data_port: cyberEyePatch,
  cd_eye_fx_shutter: cyberEyePatch,
  cd_eye_fx_led_pixel: cyberEyePatch,
  cd_eye_fx_camera_iris: cyberEyePatch,
  cd_eye_fx_projector_eye: cyberEyePatch,
  cd_eye_fx_prosthetic_seam: cyberEyePatch,
  cd_eye_fx_laser_target: cyberEyePatch,
  cd_eye_fx_transparent_mech: cyberEyePatch,

  cd_eye_fx_rune_iris: mysticEyePatch,
  cd_eye_fx_clockwork: { ...cyberEyePatch, publicFilterTags: ['technology', 'symbol'], nativeTags: ['technology', 'symbol'], compatibleGenres: ['science_fiction', 'cyberpunk', 'fantasy', 'surreal'] },
  cd_eye_fx_galaxy_inside: { ...mysticEyePatch, publicFilterTags: ['surreal', 'space', 'symbol'], nativeTags: ['surreal', 'cosmic', 'symbol'], compatibleGenres: ['surreal', 'space_opera', 'cosmic_horror', 'mythic_epic', 'science_fiction'] },
  cd_eye_fx_eclipse: mysticEyePatch,
  cd_eye_fx_stained_glass: { ...mysticEyePatch, compatibleGenres: ['religious_ritual', 'dark_fantasy', 'mythic_epic', 'fantasy'] },
  cd_eye_fx_sigil_pupil: mysticEyePatch,
  cd_eye_fx_tarot_eye: { ...mysticEyePatch, compatibleGenres: ['surreal', 'horror', 'dark_fantasy', 'religious_ritual'] },
  cd_eye_fx_lotus_iris: { ...mysticEyePatch, publicFilterTags: ['xianxia', 'magic', 'ritual'], nativeTags: ['magic', 'ritual', 'symbol'] },
  cd_eye_fx_mandala_eye: mysticEyePatch,
  cd_eye_fx_angelic_ring: { ...mysticEyePatch, compatibleGenres: ['religious_ritual', 'mythic_epic', 'dark_fantasy', 'science_fiction', 'surreal'] },

  cd_eye_fx_hollow_socket: horrorEyePatch,
  cd_eye_fx_sewn_shut: horrorEyePatch,
  cd_eye_fx_bleeding_tears: horrorEyePatch,
  cd_eye_fx_eye_mouth: horrorEyePatch,
  cd_eye_fx_black_tears: horrorEyePatch,
  cd_eye_fx_cracked_sclera: horrorEyePatch,
  cd_eye_fx_empty_black_void: horrorEyePatch,
  cd_eye_fx_many_tiny_eyes: horrorEyePatch,

  cd_eye_fx_parasite_worm: infectionEyePatch,
  cd_eye_fx_fungal_growth: infectionEyePatch,
  cd_eye_fx_crystal_infection: infectionEyePatch,
  cd_eye_fx_vein_network_glow: infectionEyePatch,
  cd_eye_fx_membrane_eye: infectionEyePatch,

  cd_eye_fx_cross_pupil_contact_like: lowSymbolEyePatch,
  cd_eye_fx_heart_true_pupil: { ...lowSymbolEyePatch, compatibleGenres: ['fashion_idol', 'surreal', 'fantasy', 'xianxia'] },
  cd_eye_fx_star_true_pupil: { ...lowSymbolEyePatch, compatibleGenres: ['fashion_idol', 'surreal', 'fantasy', 'xianxia', 'mythic_epic'] },
  cd_eye_fx_barcode_iris: cyberEyePatch,
  cd_eye_fx_hourglass_pupil: { ...mysticEyePatch, compatibleGenres: ['xianxia', 'dark_fantasy', 'surreal', 'mythic_epic'] },

  cd_body_mod_smart_contact_implant: cyberBodyPatch,
  cd_body_mod_cybernetic_eye: cyberBodyPatch,
  cd_body_mod_neural_jack: cyberBodyPatch,
  cd_body_mod_synthetic_lungs_port: cyberBodyPatch,
  cd_body_mod_mechanical_heart_window: cyberBodyPatch,
  cd_body_mod_subdermal_armor: cyberBodyPatch,
  cd_body_mod_modular_socket_limb: cyberBodyPatch,
  cd_body_mod_retractable_tool_fingers: cyberBodyPatch,
  cd_body_mod_spinal_cable_tail: cyberBodyPatch,
  cd_body_mod_cranial_antenna: cyberBodyPatch,
  cd_body_mod_synthetic_skin_seams: cyberBodyPatch,
  cd_body_mod_heat_vents_body: cyberBodyPatch,
  cd_body_mod_synthetic_voice_throat: cyberBodyPatch,
  cd_body_mod_memory_drive_slot: cyberBodyPatch,
  cd_body_mod_hologram_limb: { ...cyberBodyPatch, compatibleGenres: ['cyberpunk', 'science_fiction', 'surreal', 'posthuman'] },

  cd_body_mod_third_eye: mythicBodyPatch,
  cd_body_mod_halo_implant: { ...mythicBodyPatch, compatibleGenres: ['religious_ritual', 'dark_fantasy', 'xianxia', 'science_fiction'] },
  cd_body_mod_fox_tail: { ...mythicBodyPatch, compatibleCultures: ['east_asian_mythic', 'east_asian_historical', 'mythic_cult'] },
  cd_body_mod_fangs: { ...mythicBodyPatch, compatibleGenres: ['horror', 'dark_fantasy', 'fantasy'] },
  cd_body_mod_extra_arms: mythicBodyPatch,
  cd_body_mod_ritual_extra_hands: mythicBodyPatch,
  cd_body_mod_paper_body_edges: mythicBodyPatch,
  cd_body_mod_flame_hair_body: mythicBodyPatch,
  cd_body_mod_water_body_part: mythicBodyPatch,
  cd_body_mod_shadow_limb: { ...mythicBodyPatch, compatibleGenres: ['dark_fantasy', 'horror', 'surreal'] },

  cd_body_mod_living_vines: bioBodyPatch,
  cd_body_mod_flowering_skin: bioBodyPatch,
  cd_body_mod_moss_growth: bioBodyPatch,
  cd_body_mod_insect_chitin_patches: bioBodyPatch,
  cd_body_mod_coral_growth: bioBodyPatch,
  cd_body_mod_bone_spurs: bioBodyPatch,
  cd_body_mod_symbiotic_eye_growth: bioBodyPatch,
  cd_body_mod_parasite_collar: bioBodyPatch,
  cd_body_mod_living_armor_growth: bioBodyPatch,
  cd_body_mod_crystalline_spine: bioBodyPatch,
  cd_body_mod_mineralized_hand: bioBodyPatch,
  cd_body_mod_fungal_beard: bioBodyPatch,
  cd_body_mod_webbed_fingers: bioBodyPatch
};

export const withSubjectAxisMeta = (blockId: string, items: LibraryItemDef[]): LibraryItemDef[] => (
  items.map(item => {
    if (blockId === 'cd_species') return merge(item, speciesPatchById[item.id || ''] || {});
    if (blockId === 'cd_eye_fx' || blockId === 'cd_body_modification') return merge(item, bodyPatchById[item.id || ''] || {});
    return item;
  })
);
