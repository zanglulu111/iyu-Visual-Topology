import { ConceptBaseItem, ConceptEra } from './types';

type PropAnchorRow = [
  key: string,
  name: string,
  nameEn: string,
  group: string,
  groupEn: string,
  def: string,
  defEn: string,
  ontologyLevel: ConceptBaseItem['ontologyLevel'],
  eras: ConceptEra[],
  risk: ConceptBaseItem['risk'],
  affects?: string[],
  controls?: string[],
  forbids?: string[]
];

type PropAnchorAxisPatch = Pick<ConceptBaseItem, 'eraMode' | 'eras' | 'ontologyLevel' | 'realityTags' | 'categoryFit'>;
type PropCategoryFit = NonNullable<ConceptBaseItem['categoryFit']>;

const REAL_ERAS: ConceptEra[] = ['primitive', 'slave', 'feudal', 'early_modern', 'industrial', 'modern', 'contemporary', 'near_future', 'far_future'];
const ALL_PLAUSIBLE_ERAS: ConceptEra[] = ['primitive', 'slave', 'feudal', 'early_modern', 'industrial', 'modern', 'contemporary', 'near_future', 'far_future', 'timeless'];
const PREMODERN_ERAS: ConceptEra[] = ['primitive', 'slave', 'feudal', 'early_modern', 'timeless'];
const HISTORICAL_ERAS: ConceptEra[] = ['slave', 'feudal', 'early_modern', 'industrial', 'timeless'];
const INDUSTRIAL_PLUS_ERAS: ConceptEra[] = ['industrial', 'modern', 'contemporary', 'near_future', 'far_future', 'timeless'];
const MODERN_PLUS_ERAS: ConceptEra[] = ['modern', 'contemporary', 'near_future', 'far_future', 'timeless'];
const CONTEMPORARY_PLUS_ERAS: ConceptEra[] = ['contemporary', 'near_future', 'far_future', 'timeless'];
const FUTURE_ERAS: ConceptEra[] = ['near_future', 'far_future'];
const MYTHIC_ERAS: ConceptEra[] = ['feudal', 'early_modern', 'timeless', 'mythic'];
const WASTELAND_ERAS: ConceptEra[] = ['near_future', 'far_future', 'timeless'];

const propFit = (
  unlisted: PropCategoryFit['unlisted'],
  strong: string[] = [],
  usable: string[] = [],
  fusion: string[] = [],
  weak: string[] = [],
  exclude: string[] = []
): PropCategoryFit => ({ unlisted, strong, usable, fusion, weak, exclude });

const propAxis = (
  eraMode: PropAnchorAxisPatch['eraMode'],
  eras: ConceptEra[],
  ontologyLevel: NonNullable<PropAnchorAxisPatch['ontologyLevel']>,
  realityTags: string[],
  categoryFit: PropCategoryFit
): PropAnchorAxisPatch => ({ eraMode, eras, ontologyLevel, realityTags, categoryFit });

const realisticProp = ['physical', 'realistic', 'prop_evidence'];
const stylizedProp = ['physical', 'stylized', 'semi_real', 'prop_evidence'];
const techProp = ['physical', 'stylized', 'semi_surreal', 'technological', 'prop_evidence'];
const ritualProp = ['physical', 'stylized', 'semi_real', 'ritual', 'prop_evidence'];
const surrealProp = ['non_realist', 'surreal', 'symbolic', 'prop_evidence'];

const everydayFit = propFit('weak', ['urban_life'], ['real_professional', 'romance', 'noir_crime', 'fashion_idol'], ['surreal'], ['mythic_epic', 'xianxia']);
const professionalFit = propFit('none', ['real_professional'], ['urban_life', 'fashion_idol', 'noir_crime'], ['biopunk'], ['xianxia', 'mythic_epic']);
const historicalFit = propFit('none', ['historical', 'court'], ['wuxia', 'romance', 'religious_ritual'], ['dark_fantasy', 'xianxia'], ['cyberpunk', 'science_fiction']);
const weaponFit = propFit('none', ['war_military'], ['wuxia', 'adventure', 'wasteland', 'historical'], ['dark_fantasy', 'science_fiction'], ['romance']);
const ritualFit = propFit('none', ['religious_ritual'], ['dark_fantasy', 'xianxia', 'mythic_epic', 'historical'], ['horror', 'fantasy', 'surreal'], ['urban_life']);
const fashionFit = propFit('none', ['fashion_idol'], ['urban_life', 'romance', 'boudoir_aesthetic'], ['noir_crime', 'surreal'], ['war_military']);
const techFit = propFit('none', ['science_fiction'], ['cyberpunk', 'posthuman', 'biopunk', 'real_professional'], ['wasteland', 'horror'], ['historical', 'wuxia']);
const survivalFit = propFit('none', ['wasteland'], ['adventure', 'ecological', 'war_military'], ['science_fiction', 'biopunk'], ['court', 'romance']);

const PROP_ANCHOR_AXIS: Record<string, PropAnchorAxisPatch> = {
  id_badge_lanyard: propAxis('specific', ['modern', 'contemporary', 'near_future', 'far_future'], 1, realisticProp, propFit('none', ['real_professional'], ['urban_life', 'war_military'], ['science_fiction'], ['xianxia'])),
  folded_receipts: propAxis('specific', ['industrial', 'modern', 'contemporary', 'near_future', 'far_future'], 1, realisticProp, everydayFit),
  key_ring_bundle: propAxis('specific', ['industrial', 'modern', 'contemporary', 'near_future', 'far_future'], 1, realisticProp, propFit('weak', ['urban_life'], ['romance', 'real_professional', 'noir_crime'], ['wasteland'], ['xianxia'])),
  cloth_tote: propAxis('specific', ['modern', 'contemporary', 'near_future', 'far_future'], 1, realisticProp, everydayFit),
  worn_wallet: propAxis('specific', ['industrial', 'modern', 'contemporary', 'near_future', 'far_future'], 1, realisticProp, everydayFit),
  paper_notebook: propAxis('specific', ['industrial', 'modern', 'contemporary', 'near_future', 'far_future'], 1, realisticProp, propFit('weak', ['real_professional', 'urban_life'], ['romance', 'noir_crime'], ['wuxia', 'xianxia'], [])),
  ballpoint_pen: propAxis('specific', ['modern', 'contemporary', 'near_future', 'far_future'], 1, realisticProp, propFit('weak', ['real_professional', 'urban_life'], ['noir_crime'], [], ['xianxia'])),
  umbrella_compact: propAxis('specific', ['modern', 'contemporary', 'near_future', 'far_future'], 1, realisticProp, propFit('weak', ['urban_life'], ['romance', 'real_professional', 'fashion_idol'], ['noir_crime'], ['war_military'])),
  paper_coffee_cup: propAxis('specific', ['modern', 'contemporary', 'near_future', 'far_future'], 1, realisticProp, propFit('weak', ['urban_life'], ['real_professional', 'romance'], ['noir_crime'], ['xianxia', 'historical'])),
  cigarette_case: propAxis('specific', ['industrial', 'modern', 'contemporary'], 1, realisticProp, propFit('none', ['noir_crime'], ['urban_life', 'boudoir_aesthetic', 'fashion_idol'], ['romance'], ['xianxia'])),
  mobile_phone: propAxis('specific', ['contemporary', 'near_future', 'far_future'], 1, realisticProp, propFit('none', ['urban_life'], ['real_professional', 'fashion_idol'], ['science_fiction', 'cyberpunk'], ['historical', 'wuxia'])),
  corded_headphones: propAxis('specific', ['modern', 'contemporary', 'near_future'], 1, realisticProp, propFit('none', ['urban_life', 'fashion_idol'], ['romance'], ['cyberpunk'], ['historical'])),
  plastic_water_bottle: propAxis('specific', ['modern', 'contemporary', 'near_future', 'far_future'], 1, realisticProp, propFit('weak', ['urban_life'], ['real_professional', 'adventure'], ['wasteland'], ['historical'])),
  medicine_blister_pack: propAxis('specific', ['modern', 'contemporary', 'near_future', 'far_future'], 1, realisticProp, propFit('none', ['real_professional'], ['urban_life', 'horror'], ['biopunk'], ['wuxia'])),
  old_photograph: propAxis('specific', ['industrial', 'modern', 'contemporary', 'near_future', 'far_future'], 1, realisticProp, propFit('weak', ['romance'], ['noir_crime', 'urban_life', 'historical'], ['dark_fantasy'], [])),

  stethoscope: propAxis('specific', ['modern', 'contemporary', 'near_future', 'far_future'], 1, realisticProp, professionalFit),
  medical_clipboard: propAxis('specific', ['modern', 'contemporary', 'near_future', 'far_future'], 1, realisticProp, professionalFit),
  syringe_case: propAxis('specific', ['modern', 'contemporary', 'near_future', 'far_future'], 1, realisticProp, propFit('none', ['real_professional'], ['biopunk'], ['horror'], ['wuxia'])),
  tailor_tape: propAxis('specific', ['industrial', 'modern', 'contemporary', 'near_future', 'far_future'], 1, realisticProp, propFit('none', ['real_professional', 'fashion_idol'], ['urban_life'], ['court'], ['war_military'])),
  fitting_pin_cushion: propAxis('specific', ['industrial', 'modern', 'contemporary', 'near_future', 'far_future'], 1, realisticProp, propFit('none', ['fashion_idol', 'real_professional'], ['urban_life'], ['court'], ['war_military'])),
  camera_body: propAxis('specific', ['modern', 'contemporary', 'near_future', 'far_future'], 1, realisticProp, propFit('none', ['real_professional'], ['urban_life', 'fashion_idol', 'noir_crime'], ['science_fiction'], ['xianxia'])),
  tool_roll: propAxis('specific', ['industrial', 'modern', 'contemporary', 'near_future', 'far_future'], 1, realisticProp, propFit('none', ['real_professional'], ['adventure', 'wasteland'], ['biopunk'], ['court'])),
  wrench_spanner: propAxis('specific', ['industrial', 'modern', 'contemporary', 'near_future', 'far_future'], 1, realisticProp, propFit('none', ['real_professional'], ['wasteland', 'adventure'], ['science_fiction'], ['xianxia'])),
  chef_knife_roll: propAxis('specific', ['industrial', 'modern', 'contemporary', 'near_future', 'far_future'], 1, realisticProp, propFit('none', ['real_professional'], ['urban_life'], ['noir_crime'], ['xianxia'])),
  archive_folder: propAxis('specific', ['industrial', 'modern', 'contemporary', 'near_future', 'far_future'], 1, realisticProp, propFit('none', ['real_professional', 'noir_crime'], ['urban_life', 'historical'], ['dark_fantasy'], ['xianxia'])),
  law_book: propAxis('specific', ['industrial', 'modern', 'contemporary', 'near_future', 'far_future'], 1, realisticProp, propFit('none', ['real_professional'], ['historical', 'court'], ['dark_fantasy'], ['xianxia'])),
  teacher_pointer: propAxis('specific', ['industrial', 'modern', 'contemporary', 'near_future', 'far_future'], 1, realisticProp, professionalFit),
  makeup_brush_roll: propAxis('specific', ['modern', 'contemporary', 'near_future', 'far_future'], 1, realisticProp, propFit('none', ['fashion_idol', 'real_professional'], ['boudoir_aesthetic', 'urban_life'], ['surreal'], ['war_military'])),
  tattoo_machine: propAxis('specific', ['modern', 'contemporary', 'near_future', 'far_future'], 1, realisticProp, propFit('none', ['real_professional', 'urban_life'], ['fashion_idol', 'boudoir_aesthetic'], ['body_horror'], ['historical'])),
  microphone_handheld: propAxis('specific', ['modern', 'contemporary', 'near_future', 'far_future'], 1, realisticProp, propFit('none', ['fashion_idol'], ['real_professional', 'urban_life'], ['surreal'], ['historical'])),

  wax_sealed_letter: propAxis('specific', ['slave', 'feudal', 'early_modern', 'industrial'], 1, realisticProp, historicalFit),
  signet_ring: propAxis('specific', ['slave', 'feudal', 'early_modern', 'industrial'], 1, realisticProp, historicalFit),
  jade_token: propAxis('specific', ['slave', 'feudal', 'early_modern', 'timeless'], 1, realisticProp, propFit('none', ['wuxia', 'historical'], ['court', 'xianxia'], ['dark_fantasy'], ['cyberpunk'])),
  folding_fan: propAxis('specific', ['feudal', 'early_modern', 'industrial'], 1, realisticProp, propFit('none', ['historical', 'court'], ['wuxia', 'romance', 'fashion_idol'], ['xianxia'], ['science_fiction'])),
  ledger_book: propAxis('specific', ['feudal', 'early_modern', 'industrial'], 1, realisticProp, historicalFit),
  abacus: propAxis('specific', ['feudal', 'early_modern', 'industrial'], 1, realisticProp, propFit('none', ['historical'], ['court', 'wuxia', 'real_professional'], ['xianxia'], ['cyberpunk'])),
  scroll_tube: propAxis('specific', ['slave', 'feudal', 'early_modern', 'industrial'], 1, realisticProp, historicalFit),
  ink_stone_brush: propAxis('specific', ['slave', 'feudal', 'early_modern', 'timeless'], 1, realisticProp, propFit('none', ['historical', 'wuxia'], ['court', 'religious_ritual', 'xianxia'], ['dark_fantasy'], ['cyberpunk'])),
  court_tablet: propAxis('specific', ['slave', 'feudal'], 1, realisticProp, propFit('none', ['court', 'historical'], ['religious_ritual'], ['xianxia'], ['urban_life', 'cyberpunk'])),
  heraldic_banner: propAxis('specific', ['slave', 'feudal', 'early_modern', 'industrial'], 1, realisticProp, historicalFit),
  ceremonial_cup: propAxis('specific', ['slave', 'feudal', 'early_modern', 'industrial'], 1, realisticProp, propFit('none', ['court', 'religious_ritual'], ['historical', 'romance'], ['dark_fantasy'], ['cyberpunk'])),
  old_map: propAxis('specific', ['slave', 'feudal', 'early_modern', 'industrial'], 1, realisticProp, propFit('none', ['adventure', 'historical'], ['wuxia', 'war_military', 'court'], ['xianxia'], ['urban_life'])),
  pocket_watch: propAxis('specific', ['industrial', 'modern'], 1, realisticProp, propFit('none', ['historical', 'noir_crime'], ['court', 'romance'], ['science_fiction'], ['xianxia'])),
  opera_glasses: propAxis('specific', ['industrial', 'modern'], 1, realisticProp, propFit('none', ['court', 'fashion_idol'], ['historical', 'romance'], ['noir_crime'], ['wuxia'])),
  mourning_locket: propAxis('specific', ['early_modern', 'industrial', 'modern'], 1, realisticProp, propFit('none', ['romance', 'historical'], ['court', 'dark_fantasy'], ['horror'], ['cyberpunk'])),

  short_sword: propAxis('specific', ['slave', 'feudal', 'early_modern', 'industrial'], 1, realisticProp, propFit('none', ['wuxia', 'war_military'], ['historical', 'dark_fantasy', 'adventure'], ['xianxia'], ['urban_life'])),
  long_sword_scabbard: propAxis('specific', ['slave', 'feudal', 'early_modern', 'industrial'], 1, realisticProp, propFit('none', ['wuxia', 'war_military'], ['historical', 'fantasy', 'dark_fantasy'], ['xianxia'], ['urban_life'])),
  bow_quiver: propAxis('specific', ['primitive', 'slave', 'feudal', 'early_modern'], 1, realisticProp, propFit('none', ['adventure', 'war_military'], ['wuxia', 'fantasy', 'ecological'], ['xianxia'], ['urban_life'])),
  spear_polearm: propAxis('specific', ['slave', 'feudal', 'early_modern', 'industrial'], 1, realisticProp, propFit('none', ['war_military', 'wuxia'], ['historical', 'fantasy', 'religious_ritual'], ['xianxia'], ['urban_life'])),
  shield_round: propAxis('specific', ['primitive', 'slave', 'feudal', 'early_modern', 'industrial'], 1, realisticProp, weaponFit),
  pistol_period: propAxis('specific', ['early_modern', 'industrial', 'modern'], 1, realisticProp, propFit('none', ['war_military', 'noir_crime'], ['historical', 'wasteland'], ['science_fiction'], ['wuxia', 'xianxia'])),
  rifle_service: propAxis('specific', ['industrial', 'modern', 'contemporary', 'near_future', 'far_future'], 1, realisticProp, weaponFit),
  combat_knife: propAxis('specific', ['industrial', 'modern', 'contemporary', 'near_future', 'far_future'], 1, realisticProp, weaponFit),
  body_armor_plate: propAxis('specific', ['modern', 'contemporary', 'near_future', 'far_future'], 1, realisticProp, propFit('none', ['war_military'], ['wasteland', 'science_fiction'], ['cyberpunk'], ['wuxia', 'historical'])),
  gas_mask: propAxis('specific', ['industrial', 'modern', 'contemporary', 'near_future', 'far_future'], 2, stylizedProp, propFit('none', ['war_military', 'wasteland'], ['real_professional', 'horror'], ['science_fiction', 'cyberpunk'], ['court'])),
  radio_handset: propAxis('specific', ['industrial', 'modern', 'contemporary', 'near_future', 'far_future'], 1, realisticProp, propFit('none', ['war_military'], ['real_professional', 'adventure', 'wasteland'], ['science_fiction'], ['historical'])),
  flare_signal: propAxis('specific', ['industrial', 'modern', 'contemporary', 'near_future', 'far_future'], 1, realisticProp, propFit('none', ['adventure', 'war_military'], ['wasteland', 'ecological'], ['science_fiction'], ['court'])),
  tactical_medkit: propAxis('specific', ['modern', 'contemporary', 'near_future', 'far_future'], 1, realisticProp, propFit('none', ['war_military', 'real_professional'], ['wasteland'], ['science_fiction'], ['wuxia'])),
  handcuffs_restraints: propAxis('specific', ['industrial', 'modern', 'contemporary', 'near_future', 'far_future'], 1, realisticProp, propFit('none', ['real_professional', 'noir_crime'], ['war_military', 'boudoir_aesthetic'], ['horror'], ['xianxia'])),
  helmet_visored: propAxis('specific', ['industrial', 'modern', 'contemporary', 'near_future', 'far_future'], 1, realisticProp, propFit('none', ['war_military'], ['real_professional', 'wasteland', 'science_fiction'], ['cyberpunk'], ['court'])),

  prayer_beads: propAxis('universal', REAL_ERAS, 1, ritualProp, ritualFit),
  reliquary_box: propAxis('specific', ['feudal', 'early_modern', 'timeless', 'mythic'], 2, ritualProp, ritualFit),
  censer_chain: propAxis('specific', ['feudal', 'early_modern', 'timeless', 'mythic'], 1, ritualProp, ritualFit),
  ritual_bell: propAxis('specific', ['feudal', 'early_modern', 'timeless', 'mythic'], 2, ritualProp, ritualFit),
  sealed_charm: propAxis('specific', ['feudal', 'early_modern', 'timeless', 'mythic'], 2, ritualProp, propFit('none', ['religious_ritual', 'xianxia'], ['dark_fantasy', 'wuxia', 'mythic_epic'], ['horror', 'surreal'], ['urban_life'])),
  ritual_knife: propAxis('specific', ['feudal', 'early_modern', 'timeless', 'mythic'], 2, ritualProp, ritualFit),
  offering_bowl: propAxis('universal', REAL_ERAS, 1, ritualProp, ritualFit),
  wax_seal_bundle: propAxis('specific', ['slave', 'feudal', 'early_modern', 'industrial'], 1, realisticProp, propFit('none', ['religious_ritual', 'historical'], ['court', 'dark_fantasy'], ['xianxia'], ['urban_life'])),
  altar_candle: propAxis('universal', REAL_ERAS, 1, ritualProp, ritualFit),
  bone_totem: propAxis('specific', ['feudal', 'early_modern', 'timeless', 'mythic'], 2, ritualProp, propFit('none', ['religious_ritual', 'dark_fantasy'], ['mythic_epic', 'horror', 'fantasy'], ['xianxia', 'surreal'], ['urban_life'])),
  spirit_mask_carried: propAxis('specific', ['feudal', 'early_modern', 'timeless', 'mythic'], 2, ritualProp, ritualFit),
  divination_cards: propAxis('specific', ['early_modern', 'industrial', 'modern', 'contemporary', 'timeless', 'mythic'], 2, ritualProp, propFit('none', ['religious_ritual'], ['dark_fantasy', 'romance', 'horror'], ['surreal', 'xianxia'], ['war_military'])),
  small_skull_relic: propAxis('specific', ['feudal', 'early_modern', 'timeless', 'mythic'], 2, ritualProp, propFit('none', ['dark_fantasy', 'religious_ritual'], ['horror', 'mythic_epic'], ['surreal'], ['urban_life'])),
  holy_text_book: propAxis('universal', REAL_ERAS, 1, ritualProp, ritualFit),
  sealed_black_box: propAxis('specific', ['modern', 'contemporary', 'near_future', 'far_future', 'timeless', 'mythic'], 3, surrealProp, propFit('none', ['horror', 'surreal'], ['dark_fantasy', 'science_fiction', 'religious_ritual'], ['xianxia'], ['urban_life'])),

  statement_handbag: propAxis('specific', ['modern', 'contemporary', 'near_future', 'far_future'], 1, realisticProp, fashionFit),
  sunglasses_case: propAxis('specific', ['modern', 'contemporary', 'near_future', 'far_future'], 1, realisticProp, fashionFit),
  garment_hanger_tag: propAxis('specific', ['modern', 'contemporary', 'near_future', 'far_future'], 1, realisticProp, fashionFit),
  lookbook_folder: propAxis('specific', ['modern', 'contemporary', 'near_future', 'far_future'], 1, realisticProp, fashionFit),
  press_pass: propAxis('specific', ['modern', 'contemporary', 'near_future', 'far_future'], 1, realisticProp, propFit('none', ['real_professional', 'fashion_idol'], ['urban_life'], ['noir_crime'], ['xianxia'])),
  compact_mirror: propAxis('specific', ['industrial', 'modern', 'contemporary', 'near_future', 'far_future'], 1, realisticProp, fashionFit),
  lipstick_tube: propAxis('specific', ['modern', 'contemporary', 'near_future', 'far_future'], 1, realisticProp, propFit('none', ['fashion_idol', 'boudoir_aesthetic'], ['romance', 'urban_life'], ['noir_crime'], ['war_military'])),
  perfume_bottle: propAxis('specific', ['industrial', 'modern', 'contemporary', 'near_future', 'far_future'], 1, realisticProp, propFit('none', ['fashion_idol', 'boudoir_aesthetic'], ['romance', 'urban_life'], ['surreal'], ['war_military'])),
  runway_number_card: propAxis('specific', ['modern', 'contemporary', 'near_future', 'far_future'], 1, realisticProp, fashionFit),
  ring_light_phone_mount: propAxis('specific', ['contemporary', 'near_future', 'far_future'], 1, realisticProp, propFit('none', ['fashion_idol', 'urban_life'], ['real_professional', 'boudoir_aesthetic'], ['cyberpunk'], ['historical'])),
  vinyl_record: propAxis('specific', ['industrial', 'modern', 'contemporary'], 1, realisticProp, propFit('none', ['fashion_idol', 'urban_life'], ['romance', 'noir_crime'], ['surreal'], ['wuxia'])),
  cassette_player: propAxis('specific', ['modern', 'contemporary'], 1, realisticProp, propFit('none', ['fashion_idol', 'urban_life'], ['romance', 'noir_crime'], ['surreal'], ['historical'])),
  magazine_stack: propAxis('specific', ['modern', 'contemporary', 'near_future', 'far_future'], 1, realisticProp, fashionFit),
  champagne_flute: propAxis('specific', ['industrial', 'modern', 'contemporary'], 1, realisticProp, propFit('none', ['fashion_idol', 'boudoir_aesthetic'], ['romance', 'court', 'urban_life'], ['noir_crime'], ['war_military'])),
  clutch_invitation: propAxis('specific', ['modern', 'contemporary', 'near_future', 'far_future'], 1, realisticProp, fashionFit),

  wrist_terminal: propAxis('specific', ['near_future', 'far_future'], 4, techProp, techFit),
  smart_glasses_hud: propAxis('specific', ['near_future', 'far_future'], 3, techProp, techFit),
  sensor_patch_pack: propAxis('specific', ['contemporary', 'near_future', 'far_future'], 3, techProp, propFit('none', ['science_fiction', 'real_professional'], ['biopunk', 'posthuman'], ['cyberpunk'], ['historical'])),
  sample_capsule: propAxis('specific', ['modern', 'contemporary', 'near_future', 'far_future'], 3, techProp, propFit('none', ['biopunk', 'real_professional'], ['science_fiction', 'posthuman'], ['horror'], ['wuxia'])),
  data_shard: propAxis('specific', ['near_future', 'far_future'], 4, techProp, techFit),
  portable_power_cell: propAxis('specific', ['near_future', 'far_future'], 3, techProp, techFit),
  drone_companion_small: propAxis('specific', ['near_future', 'far_future'], 4, techProp, techFit),
  oxygen_rebreather: propAxis('specific', ['modern', 'contemporary', 'near_future', 'far_future'], 3, techProp, propFit('none', ['science_fiction'], ['wasteland', 'real_professional', 'posthuman'], ['biopunk'], ['historical'])),
  holo_projector_puck: propAxis('specific', ['near_future', 'far_future'], 4, techProp, propFit('none', ['science_fiction', 'cyberpunk'], ['posthuman'], ['surreal'], ['historical', 'wuxia'])),
  cyberdeck_slab: propAxis('specific', ['near_future', 'far_future'], 4, techProp, propFit('none', ['cyberpunk'], ['science_fiction', 'posthuman'], ['noir_crime'], ['historical'])),
  biometric_scanner: propAxis('specific', ['contemporary', 'near_future', 'far_future'], 3, techProp, propFit('none', ['science_fiction', 'real_professional'], ['cyberpunk', 'posthuman'], ['biopunk'], ['historical'])),
  exo_tool_module: propAxis('specific', ['near_future', 'far_future'], 4, techProp, techFit),
  cryo_tag: propAxis('specific', ['near_future', 'far_future'], 4, techProp, techFit),
  lab_containment_case: propAxis('specific', ['modern', 'contemporary', 'near_future', 'far_future'], 3, techProp, propFit('none', ['biopunk', 'real_professional'], ['science_fiction', 'horror'], ['posthuman'], ['wuxia'])),
  ai_oracle_cube: propAxis('specific', ['far_future'], 5, surrealProp, propFit('none', ['science_fiction', 'posthuman'], ['cyberpunk', 'surreal'], ['religious_ritual'], ['historical', 'wuxia'])),

  patched_water_filter: propAxis('specific', ['near_future', 'far_future'], 1, realisticProp, survivalFit),
  ration_tin: propAxis('specific', ['industrial', 'modern', 'contemporary', 'near_future', 'far_future'], 1, realisticProp, survivalFit),
  salvage_hook: propAxis('specific', ['near_future', 'far_future'], 1, realisticProp, survivalFit),
  crowbar_pry_tool: propAxis('specific', ['industrial', 'modern', 'contemporary', 'near_future', 'far_future'], 1, realisticProp, propFit('none', ['wasteland'], ['adventure', 'noir_crime', 'war_military'], ['horror'], ['court'])),
  solar_charger_scrap: propAxis('specific', ['contemporary', 'near_future', 'far_future'], 2, stylizedProp, propFit('none', ['wasteland'], ['science_fiction', 'ecological'], ['adventure'], ['historical'])),
  gasoline_can: propAxis('specific', ['industrial', 'modern', 'contemporary', 'near_future', 'far_future'], 1, realisticProp, survivalFit),
  bedroll_bundle: propAxis('universal', REAL_ERAS, 1, realisticProp, propFit('usable', ['adventure', 'wasteland'], ['ecological', 'war_military', 'historical'], ['wuxia'], [])),
  patched_canteen: propAxis('universal', REAL_ERAS, 1, realisticProp, propFit('usable', ['adventure', 'wasteland'], ['war_military', 'ecological', 'historical'], ['wuxia'], [])),
  roadside_toolbox: propAxis('specific', ['industrial', 'modern', 'contemporary', 'near_future', 'far_future'], 1, realisticProp, propFit('none', ['wasteland', 'real_professional'], ['adventure', 'urban_life'], ['science_fiction'], ['court'])),
  seed_packet: propAxis('universal', REAL_ERAS, 1, realisticProp, propFit('usable', ['ecological'], ['wasteland', 'adventure', 'urban_life'], ['science_fiction'], [])),
  filter_mask_canister: propAxis('specific', ['industrial', 'modern', 'contemporary', 'near_future', 'far_future'], 2, stylizedProp, survivalFit),
  hand_crank_radio: propAxis('specific', ['modern', 'contemporary', 'near_future', 'far_future'], 1, realisticProp, propFit('none', ['wasteland'], ['war_military', 'adventure'], ['science_fiction'], ['historical'])),
  repair_tape_roll: propAxis('specific', ['modern', 'contemporary', 'near_future', 'far_future'], 1, realisticProp, propFit('weak', ['wasteland'], ['real_professional', 'adventure', 'urban_life'], ['science_fiction'], [])),
  scrap_map_board: propAxis('specific', ['near_future', 'far_future'], 1, realisticProp, survivalFit),
  animal_trap_snare: propAxis('universal', REAL_ERAS, 1, realisticProp, propFit('usable', ['adventure', 'ecological'], ['wasteland', 'historical'], ['dark_fantasy'], ['urban_life']))
};

const PROP_ROWS: PropAnchorRow[] = [
  ['id_badge_lanyard', '挂绳身份牌', 'Lanyard ID Badge', 'A. 现实随身物', 'A. Everyday Carry', '机构身份牌、挂绳、照片和色条说明岗位，不自动引入科幻界面。', 'Institutional badge, lanyard, photo, and color strip explain role without adding sci-fi interface.', 1, MODERN_PLUS_ERAS, 'clean', ['prop', 'symbol', 'occupation'], ['identity', 'institution'], ['hologram UI']],
  ['folded_receipts', '折叠票据', 'Folded Receipts', 'A. 现实随身物', 'A. Everyday Carry', '口袋里露出的收据、票根或小票，说明消费、通勤或生活轨迹。', 'Receipts, stubs, or slips peeking from a pocket, explaining consumption, commute, or life trace.', 1, INDUSTRIAL_PLUS_ERAS, 'clean', ['prop', 'symbol']],
  ['key_ring_bundle', '钥匙串', 'Key Ring Bundle', 'A. 现实随身物', 'A. Everyday Carry', '多把钥匙、门禁扣、旧挂件组成可读的生活和责任锚点。', 'Keys, fob, and old charms form a readable anchor of life and responsibility.', 1, INDUSTRIAL_PLUS_ERAS, 'clean', ['prop', 'symbol']],
  ['cloth_tote', '帆布袋', 'Canvas Tote', 'A. 现实随身物', 'A. Everyday Carry', '帆布袋、文件、书本或日用品让角色落在现实生活与轻劳动里。', 'Canvas tote, papers, books, or daily objects ground the character in real life and light labor.', 1, MODERN_PLUS_ERAS, 'clean', ['prop', 'costume', 'occupation']],
  ['worn_wallet', '磨旧钱包', 'Worn Wallet', 'A. 现实随身物', 'A. Everyday Carry', '磨旧钱包、零钱、卡片和照片暗示阶层、关系和日常磨损。', 'Worn wallet, coins, cards, and photos imply class, relationships, and daily wear.', 1, INDUSTRIAL_PLUS_ERAS, 'clean', ['prop', 'symbol']],
  ['paper_notebook', '纸质笔记本', 'Paper Notebook', 'A. 现实随身物', 'A. Everyday Carry', '笔记本、手写页和夹着的纸条解释观察、学习或记录习惯。', 'Notebook, handwritten pages, and tucked notes explain observing, studying, or record-keeping habits.', 1, INDUSTRIAL_PLUS_ERAS, 'clean', ['prop', 'occupation']],
  ['ballpoint_pen', '圆珠笔', 'Ballpoint Pen', 'A. 现实随身物', 'A. Everyday Carry', '一支普通笔作为低噪声职业或生活锚点，不抢占主设计。', 'An ordinary pen as a low-noise work or life anchor that does not dominate the design.', 1, MODERN_PLUS_ERAS, 'clean', ['prop', 'occupation']],
  ['umbrella_compact', '折叠伞', 'Compact Umbrella', 'A. 现实随身物', 'A. Everyday Carry', '折叠伞连接天气、通勤、城市和生活秩序。', 'Compact umbrella links weather, commute, city, and everyday order.', 1, MODERN_PLUS_ERAS, 'clean', ['prop', 'costume']],
  ['paper_coffee_cup', '纸咖啡杯', 'Paper Coffee Cup', 'A. 现实随身物', 'A. Everyday Carry', '一次性咖啡杯说明通勤、夜班、办公室或现代疲惫。', 'Disposable coffee cup signals commute, night shift, office, or modern fatigue.', 1, MODERN_PLUS_ERAS, 'clean', ['prop', 'emotion']],
  ['cigarette_case', '烟盒/烟盒套', 'Cigarette Case', 'A. 现实随身物', 'A. Everyday Carry', '烟盒、打火机或烟盒套作为成熟、夜场、压力或年代感锚点。', 'Cigarette pack, lighter, or case anchors maturity, nightlife, pressure, or period mood.', 1, ['industrial', 'modern', 'contemporary', 'timeless'], 'medium', ['prop', 'emotion']],
  ['mobile_phone', '手机', 'Mobile Phone', 'A. 现实随身物', 'A. Everyday Carry', '手机只作为当代生活、社媒、工作或导航道具，不自动变成赛博终端。', 'Phone acts as contemporary life, social media, work, or navigation prop, not automatically cyber terminal.', 1, CONTEMPORARY_PLUS_ERAS, 'clean', ['prop', 'symbol'], ['communication'], ['floating hologram']],
  ['corded_headphones', '有线耳机', 'Corded Headphones', 'A. 现实随身物', 'A. Everyday Carry', '有线耳机带出通勤、青年、音乐和低技术现代感。', 'Corded headphones bring commute, youth, music, and low-tech modernity.', 1, MODERN_PLUS_ERAS, 'clean', ['prop', 'style']],
  ['plastic_water_bottle', '塑料水瓶', 'Plastic Water Bottle', 'A. 现实随身物', 'A. Everyday Carry', '水瓶说明运动、劳动、通勤或节制生活，不制造末世感。', 'Water bottle indicates sport, labor, commute, or disciplined life without forcing wasteland mood.', 1, MODERN_PLUS_ERAS, 'clean', ['prop', 'body']],
  ['medicine_blister_pack', '药板', 'Medicine Blister Pack', 'A. 现实随身物', 'A. Everyday Carry', '药板或小药盒暗示病弱、职业压力或医疗管理。', 'Blister pack or small pill case implies frailty, work stress, or medical management.', 1, MODERN_PLUS_ERAS, 'medium', ['prop', 'medical']],
  ['old_photograph', '旧照片', 'Old Photograph', 'A. 现实随身物', 'A. Everyday Carry', '一张折旧照片作为记忆、亲缘、失落或调查线索。', 'A folded old photo as memory, kinship, loss, or investigation clue.', 1, INDUSTRIAL_PLUS_ERAS, 'clean', ['prop', 'emotion']],

  ['stethoscope', '听诊器', 'Stethoscope', 'B. 职业工具', 'B. Professional Tools', '听诊器明确锁定医疗职业，需与医生、护士、急救或诊所语境一致。', 'Stethoscope clearly locks medical role and should match doctor, nurse, emergency, or clinic context.', 1, MODERN_PLUS_ERAS, 'clean', ['prop', 'occupation', 'medical'], ['medicine'], ['combat gadget']],
  ['medical_clipboard', '病历夹板', 'Medical Clipboard', 'B. 职业工具', 'B. Professional Tools', '病历夹、贴纸和笔说明制度化医疗流程。', 'Medical clipboard, stickers, and pen indicate institutional medical workflow.', 1, MODERN_PLUS_ERAS, 'clean', ['prop', 'occupation']],
  ['syringe_case', '注射器盒', 'Syringe Case', 'B. 职业工具', 'B. Professional Tools', '注射器或无菌盒必须服务医疗、实验或急救，不随机恐怖化。', 'Syringe or sterile case must serve medicine, lab, or emergency, not random horror.', 1, MODERN_PLUS_ERAS, 'medium', ['prop', 'medical'], ['medicine', 'lab'], ['gore']],
  ['tailor_tape', '软尺', 'Tailor Tape', 'B. 职业工具', 'B. Professional Tools', '软尺、粉笔和针插说明裁缝、造型师或服装工。', 'Measuring tape, chalk, and pin cushion indicate tailor, stylist, or garment worker.', 1, INDUSTRIAL_PLUS_ERAS, 'clean', ['prop', 'costume', 'occupation']],
  ['fitting_pin_cushion', '试衣针插', 'Fitting Pin Cushion', 'B. 职业工具', 'B. Professional Tools', '针插、别针和线头属于服装后台，不应变成武器。', 'Pin cushion, pins, and thread belong to fashion backstage, not weapons.', 1, INDUSTRIAL_PLUS_ERAS, 'clean', ['prop', 'costume'], ['fitting'], ['blade weapon']],
  ['camera_body', '相机机身', 'Camera Body', 'B. 职业工具', 'B. Professional Tools', '相机作为摄影、新闻、档案或街拍职业锚点，不添加摄影镜头语言。', 'Camera anchors photographer, journalism, archive, or street snap role without adding shot-language.', 1, MODERN_PLUS_ERAS, 'clean', ['prop', 'occupation']],
  ['tool_roll', '工具卷包', 'Tool Roll', 'B. 职业工具', 'B. Professional Tools', '展开或卷起的工具包说明工匠、维修、外科或野外职业。', 'Rolled or opened tool kit explains craft, repair, surgery, or field profession.', 1, INDUSTRIAL_PLUS_ERAS, 'clean', ['prop', 'occupation']],
  ['wrench_spanner', '扳手', 'Wrench', 'B. 职业工具', 'B. Professional Tools', '扳手适合机械维修、工厂、车辆或低技术改造，不应自动赛博化。', 'Wrench suits repair, factory, vehicle, or low-tech modification, not automatic cyberization.', 1, INDUSTRIAL_PLUS_ERAS, 'clean', ['prop', 'occupation']],
  ['chef_knife_roll', '厨刀卷包', 'Chef Knife Roll', 'B. 职业工具', 'B. Professional Tools', '厨刀卷包说明厨师身份，刀具需保持厨房职业语境。', 'Chef knife roll explains cook identity; blades should remain in culinary work context.', 1, INDUSTRIAL_PLUS_ERAS, 'medium', ['prop', 'occupation'], ['cooking'], ['assassin weapon unless identity supports it']],
  ['archive_folder', '档案文件夹', 'Archive Folder', 'B. 职业工具', 'B. Professional Tools', '厚档案、标签、封条和旧纸说明调查、行政或图书馆制度。', 'Thick files, labels, seals, and old paper indicate investigation, administration, or library systems.', 1, INDUSTRIAL_PLUS_ERAS, 'clean', ['prop', 'symbol']],
  ['law_book', '法典', 'Law Book', 'B. 职业工具', 'B. Professional Tools', '厚重法典、便签和书签锚定律师、法官、书记员或制度权力。', 'Heavy law book, notes, and bookmarks anchor lawyer, judge, clerk, or institutional power.', 1, INDUSTRIAL_PLUS_ERAS, 'clean', ['prop', 'occupation']],
  ['teacher_pointer', '教鞭/指示棒', 'Pointer Stick', 'B. 职业工具', 'B. Professional Tools', '指示棒、粉笔或教材说明教师、讲师或训练者。', 'Pointer, chalk, or textbook indicates teacher, lecturer, or trainer.', 1, INDUSTRIAL_PLUS_ERAS, 'clean', ['prop', 'occupation']],
  ['makeup_brush_roll', '化妆刷卷包', 'Makeup Brush Roll', 'B. 职业工具', 'B. Professional Tools', '刷具卷包说明化妆师、演员、偶像后台或时尚劳动。', 'Brush roll indicates makeup artist, performer, idol backstage, or fashion labor.', 1, MODERN_PLUS_ERAS, 'clean', ['prop', 'makeup']],
  ['tattoo_machine', '纹身机', 'Tattoo Machine', 'B. 职业工具', 'B. Professional Tools', '纹身机、墨杯和手套说明纹身工作者或身体标记制度。', 'Tattoo machine, ink cups, and gloves indicate tattoo worker or body-marking system.', 1, MODERN_PLUS_ERAS, 'medium', ['prop', 'body_mark']],
  ['microphone_handheld', '手持麦克风', 'Handheld Microphone', 'B. 职业工具', 'B. Professional Tools', '麦克风锚定歌手、主持、主播、偶像或宣传人物。', 'Microphone anchors singer, host, streamer, idol, or public speaker.', 1, MODERN_PLUS_ERAS, 'clean', ['prop', 'occupation', 'performance']],

  ['wax_sealed_letter', '蜡封信件', 'Wax-Sealed Letter', 'C. 历史/礼制道具', 'C. Historical / Court Objects', '蜡封信件适合宫廷、贵族、密探、教团或历史通信。', 'Wax-sealed letter suits court, aristocracy, spies, orders, or historical communication.', 1, HISTORICAL_ERAS, 'clean', ['prop', 'symbol']],
  ['signet_ring', '戒玺', 'Signet Ring', 'C. 历史/礼制道具', 'C. Historical / Court Objects', '戒玺作为家族、继承、权力或签署身份的微型锚点。', 'Signet ring is a small anchor of family, inheritance, power, or signing authority.', 1, HISTORICAL_ERAS, 'clean', ['prop', 'symbol']],
  ['jade_token', '玉佩/腰牌', 'Jade Token', 'C. 历史/礼制道具', 'C. Historical / Court Objects', '玉佩、腰牌或身份牌应服务历史身份、门派、宫廷或官署。', 'Jade pendant, waist token, or identity plaque should serve historical role, sect, court, or office.', 1, ['slave', 'feudal', 'early_modern', 'timeless'], 'clean', ['prop', 'symbol']],
  ['folding_fan', '折扇', 'Folding Fan', 'C. 历史/礼制道具', 'C. Historical / Court Objects', '折扇可承载礼仪、风流、暗号、阶层或舞台手势。', 'Folding fan can carry etiquette, elegance, code, class, or stage gesture.', 1, ['feudal', 'early_modern', 'industrial', 'timeless'], 'clean', ['prop', 'pose']],
  ['ledger_book', '账册', 'Ledger Book', 'C. 历史/礼制道具', 'C. Historical / Court Objects', '账册、账绳和算盘感适合商人、管家、税吏或档案人物。', 'Ledger, binding cord, and abacus mood suit merchant, steward, tax officer, or archive figure.', 1, ['feudal', 'early_modern', 'industrial', 'timeless'], 'clean', ['prop', 'occupation']],
  ['abacus', '算盘', 'Abacus', 'C. 历史/礼制道具', 'C. Historical / Court Objects', '算盘适合商会、账房、旧式管理和历史职业身份。', 'Abacus suits guilds, accounting rooms, old administration, and historical professions.', 1, ['feudal', 'early_modern', 'industrial', 'timeless'], 'clean', ['prop', 'occupation']],
  ['scroll_tube', '卷轴筒', 'Scroll Tube', 'C. 历史/礼制道具', 'C. Historical / Court Objects', '卷轴筒、地图筒或诏书筒说明传令、学者、地图或官署。', 'Scroll tube, map tube, or edict tube indicates messenger, scholar, map, or office.', 1, HISTORICAL_ERAS, 'clean', ['prop', 'symbol']],
  ['ink_stone_brush', '砚台毛笔', 'Inkstone and Brush', 'C. 历史/礼制道具', 'C. Historical / Court Objects', '砚台、毛笔和墨迹服务文人、官吏、道士或书写仪式。', 'Inkstone, brush, and ink serve scholar, official, Daoist, or writing ritual.', 1, ['slave', 'feudal', 'early_modern', 'timeless'], 'clean', ['prop', 'occupation']],
  ['court_tablet', '朝笏', 'Court Tablet', 'C. 历史/礼制道具', 'C. Historical / Court Objects', '朝笏、礼板或仪式手板说明官职、朝会和礼制身体。', 'Court tablet or ceremonial board indicates office, court audience, and etiquette body.', 1, ['slave', 'feudal', 'timeless'], 'clean', ['prop', 'pose']],
  ['heraldic_banner', '纹章小旗', 'Heraldic Pennant', 'C. 历史/礼制道具', 'C. Historical / Court Objects', '小旗、纹章布或家族色作为群体、骑士、宫廷或贵族锚点。', 'Small banner, heraldic cloth, or family colors anchor group, knight, court, or aristocracy.', 1, HISTORICAL_ERAS, 'clean', ['prop', 'symbol']],
  ['ceremonial_cup', '礼仪杯', 'Ceremonial Cup', 'C. 历史/礼制道具', 'C. Historical / Court Objects', '酒杯、圣杯或宴会杯说明礼仪、阶层、盟约或仪式场合。', 'Wine cup, chalice, or banquet cup indicates etiquette, class, pact, or ritual event.', 1, HISTORICAL_ERAS, 'clean', ['prop', 'symbol']],
  ['old_map', '旧地图', 'Old Map', 'C. 历史/礼制道具', 'C. Historical / Court Objects', '旧地图适合探险者、军师、商队、航海或遗迹调查。', 'Old map suits explorer, strategist, caravan, navigation, or ruin investigation.', 1, HISTORICAL_ERAS, 'clean', ['prop', 'world']],
  ['pocket_watch', '怀表', 'Pocket Watch', 'C. 历史/礼制道具', 'C. Historical / Court Objects', '怀表锚定工业时代、绅士、侦探、铁路、旧钱或时间焦虑。', 'Pocket watch anchors industrial era, gentleman, detective, railway, old money, or time anxiety.', 1, ['industrial', 'modern', 'timeless'], 'clean', ['prop', 'symbol']],
  ['opera_glasses', '歌剧望远镜', 'Opera Glasses', 'C. 历史/礼制道具', 'C. Historical / Court Objects', '歌剧望远镜适合名媛、剧院、上流社交和被观看制度。', 'Opera glasses suit socialite, theater, elite society, and systems of viewing.', 1, ['industrial', 'modern', 'timeless'], 'clean', ['prop', 'style']],
  ['mourning_locket', '哀悼吊坠', 'Mourning Locket', 'C. 历史/礼制道具', 'C. Historical / Court Objects', '哀悼吊坠、发丝盒或遗物盒说明丧服、继承和失去。', 'Mourning locket, hair keepsake, or relic case indicates mourning dress, inheritance, and loss.', 1, ['early_modern', 'industrial', 'modern', 'timeless'], 'clean', ['prop', 'emotion']],

  ['short_sword', '短剑', 'Short Sword', 'D. 武装/防护道具', 'D. Weapons / Protective Gear', '短剑适合历史、仪式或近战身份，需匹配时代和服制。', 'Short sword suits historical, ritual, or close-combat identity and must match era and costume.', 1, HISTORICAL_ERAS, 'medium', ['prop', 'weapon'], ['combat'], ['modern tactical clutter']],
  ['long_sword_scabbard', '长剑与剑鞘', 'Long Sword and Scabbard', 'D. 武装/防护道具', 'D. Weapons / Protective Gear', '长剑与剑鞘锚定武士、骑士、门派或礼仪战斗。', 'Long sword and scabbard anchor samurai, knight, sect, or ceremonial combat.', 1, HISTORICAL_ERAS, 'medium', ['prop', 'weapon']],
  ['bow_quiver', '弓与箭袋', 'Bow and Quiver', 'D. 武装/防护道具', 'D. Weapons / Protective Gear', '弓箭适合狩猎、军队、游侠或古代/奇幻职业。', 'Bow and quiver suit hunting, army, ranger, or ancient/fantasy professions.', 1, PREMODERN_ERAS, 'medium', ['prop', 'weapon']],
  ['spear_polearm', '长矛/长柄武器', 'Spear or Polearm', 'D. 武装/防护道具', 'D. Weapons / Protective Gear', '长柄武器影响剪影和站姿，应服务守卫、士兵、仪式或怪物猎人。', 'Polearm affects silhouette and stance and should serve guard, soldier, ritual, or monster hunter role.', 1, HISTORICAL_ERAS, 'medium', ['prop', 'weapon', 'pose']],
  ['shield_round', '圆盾', 'Round Shield', 'D. 武装/防护道具', 'D. Weapons / Protective Gear', '盾牌说明防御、队列、部落或骑士制度，不应孤立装饰化。', 'Shield indicates defense, formation, tribe, or knight system, not isolated decoration.', 1, HISTORICAL_ERAS, 'medium', ['prop', 'costume']],
  ['pistol_period', '时代手枪', 'Period Pistol', 'D. 武装/防护道具', 'D. Weapons / Protective Gear', '左轮、燧发或旧式手枪必须按工业/现代时代落地。', 'Revolver, flintlock, or old pistol must land in industrial or modern era logic.', 1, ['early_modern', 'industrial', 'modern', 'timeless'], 'medium', ['prop', 'weapon']],
  ['rifle_service', '制式步枪', 'Service Rifle', 'D. 武装/防护道具', 'D. Weapons / Protective Gear', '制式步枪适合军警、猎人、民兵或末世守卫，并需控制数量。', 'Service rifle suits military, police, hunter, militia, or wasteland guard and needs quantity control.', 1, ['industrial', 'modern', 'contemporary', 'near_future', 'far_future'], 'medium', ['prop', 'weapon']],
  ['combat_knife', '战斗刀', 'Combat Knife', 'D. 武装/防护道具', 'D. Weapons / Protective Gear', '战斗刀可作为小型功能道具，但必须服务战斗、野外或任务逻辑。', 'Combat knife can be a small functional prop but must serve combat, field, or mission logic.', 1, INDUSTRIAL_PLUS_ERAS, 'medium', ['prop', 'weapon']],
  ['body_armor_plate', '防弹插板', 'Armor Plate', 'D. 武装/防护道具', 'D. Weapons / Protective Gear', '防护插板、护胸或防弹片说明现代/未来危险环境。', 'Armor plate, chest guard, or ballistic panel indicates modern/future danger environment.', 1, ['modern', 'contemporary', 'near_future', 'far_future'], 'medium', ['prop', 'costume']],
  ['gas_mask', '防毒面具', 'Gas Mask', 'D. 武装/防护道具', 'D. Weapons / Protective Gear', '防毒面具必须由战争、污染、实验、废土或工业环境解释。', 'Gas mask must be explained by war, pollution, lab, wasteland, or industrial environment.', 2, ['industrial', 'modern', 'contemporary', 'near_future', 'far_future', 'timeless'], 'medium', ['prop', 'costume'], ['protection'], ['random cyber face']],
  ['radio_handset', '手持电台', 'Radio Handset', 'D. 武装/防护道具', 'D. Weapons / Protective Gear', '电台适合军警、救援、探险、工地或废土队伍。', 'Radio suits military, police, rescue, expedition, construction, or wasteland crew.', 1, ['industrial', 'modern', 'contemporary', 'near_future', 'far_future'], 'clean', ['prop', 'communication']],
  ['flare_signal', '信号弹', 'Signal Flare', 'D. 武装/防护道具', 'D. Weapons / Protective Gear', '信号弹或烟雾标记服务救援、战场、海上、荒野和末世。', 'Signal flare or smoke marker serves rescue, battlefield, sea, wilderness, and wasteland.', 1, INDUSTRIAL_PLUS_ERAS, 'medium', ['prop', 'world']],
  ['tactical_medkit', '战术医疗包', 'Tactical Medkit', 'D. 武装/防护道具', 'D. Weapons / Protective Gear', '战术医疗包连接战斗和医疗身份，不应变成血腥展示。', 'Tactical medkit connects combat and medical identity without becoming gore display.', 1, ['modern', 'contemporary', 'near_future', 'far_future'], 'medium', ['prop', 'medical']],
  ['handcuffs_restraints', '手铐/束具', 'Handcuffs or Restraints', 'D. 武装/防护道具', 'D. Weapons / Protective Gear', '手铐、扎带或束具锚定执法、囚禁、安保或权力关系。', 'Handcuffs, zip ties, or restraints anchor law enforcement, captivity, security, or power relation.', 1, INDUSTRIAL_PLUS_ERAS, 'medium', ['prop', 'symbol']],
  ['helmet_visored', '带面罩头盔', 'Visored Helmet', 'D. 武装/防护道具', 'D. Weapons / Protective Gear', '头盔适合战斗、机车、工业、太空或防化，但需按时代材质落地。', 'Helmet suits combat, motorcycle, industry, space, or hazmat, but must follow era material.', 1, INDUSTRIAL_PLUS_ERAS, 'medium', ['prop', 'costume']],

  ['prayer_beads', '念珠', 'Prayer Beads', 'E. 仪式/神秘道具', 'E. Ritual / Occult Objects', '念珠、计数珠或祈祷串说明信仰、修行和手部仪式。', 'Prayer beads, counting beads, or rosary indicate faith, practice, and hand ritual.', 1, ALL_PLAUSIBLE_ERAS, 'clean', ['prop', 'ritual']],
  ['reliquary_box', '圣物盒', 'Reliquary Box', 'E. 仪式/神秘道具', 'E. Ritual / Occult Objects', '小型圣物盒或遗骨盒说明信仰、遗物和禁忌接触。', 'Small reliquary or bone case indicates faith, relic, and taboo handling.', 2, MYTHIC_ERAS, 'medium', ['prop', 'ritual']],
  ['censer_chain', '链香炉', 'Chain Censer', 'E. 仪式/神秘道具', 'E. Ritual / Occult Objects', '链香炉提供烟、重量和仪式动作，不扩展成复杂场景。', 'Chain censer provides smoke, weight, and ritual motion without expanding into a complex scene.', 1, MYTHIC_ERAS, 'clean', ['prop', 'ritual', 'pose']],
  ['ritual_bell', '仪式铃', 'Ritual Bell', 'E. 仪式/神秘道具', 'E. Ritual / Occult Objects', '铃、铃杖或手铃说明召唤、驱邪、祭祀或修会等级。', 'Bell, bell staff, or handbell indicates summoning, exorcism, sacrifice, or order rank.', 2, MYTHIC_ERAS, 'medium', ['prop', 'ritual']],
  ['sealed_charm', '封印护符', 'Sealed Charm', 'E. 仪式/神秘道具', 'E. Ritual / Occult Objects', '护符、封印袋或朱砂纸可作为低噪声神秘锚点。', 'Charm, sealed pouch, or cinnabar paper can be a low-noise occult anchor.', 2, MYTHIC_ERAS, 'medium', ['prop', 'symbol']],
  ['ritual_knife', '仪式小刀', 'Ritual Knife', 'E. 仪式/神秘道具', 'E. Ritual / Occult Objects', '仪式刀必须服务祭祀、封印、药草或礼制动作，不随机血腥化。', 'Ritual knife must serve sacrifice, sealing, herbs, or ceremonial action, not random gore.', 2, MYTHIC_ERAS, 'medium', ['prop', 'ritual'], ['ritual'], ['gore']],
  ['offering_bowl', '供碗', 'Offering Bowl', 'E. 仪式/神秘道具', 'E. Ritual / Occult Objects', '供碗、清水、米粒或花瓣说明献呈和宗教秩序。', 'Offering bowl, water, rice, or petals indicate offering and religious order.', 1, ALL_PLAUSIBLE_ERAS, 'clean', ['prop', 'ritual']],
  ['wax_seal_bundle', '蜡封束', 'Wax-Seal Bundle', 'E. 仪式/神秘道具', 'E. Ritual / Occult Objects', '蜡封、绳结和封条形成禁令、誓言或教团文书。', 'Wax seals, knots, and tags form prohibition, oath, or order document.', 1, HISTORICAL_ERAS, 'clean', ['prop', 'symbol']],
  ['altar_candle', '祭坛蜡烛', 'Altar Candle', 'E. 仪式/神秘道具', 'E. Ritual / Occult Objects', '蜡烛作为可携小圣物，不应制造大场景光影要求。', 'Candle is a portable sacred object, not a demand for large scene lighting.', 1, ALL_PLAUSIBLE_ERAS, 'clean', ['prop', 'ritual']],
  ['bone_totem', '骨质图腾', 'Bone Totem', 'E. 仪式/神秘道具', 'E. Ritual / Occult Objects', '骨质小图腾锚定部落、巫术、死者记忆或妖怪化身份。', 'Small bone totem anchors tribe, witchcraft, dead memory, or yokai-like identity.', 2, MYTHIC_ERAS, 'medium', ['prop', 'ritual']],
  ['spirit_mask_carried', '手持灵面具', 'Carried Spirit Mask', 'E. 仪式/神秘道具', 'E. Ritual / Occult Objects', '手持面具让角色保留人脸，同时引入仪式第二身份。', 'Carried mask keeps the human face while introducing a ritual second identity.', 2, MYTHIC_ERAS, 'medium', ['prop', 'face']],
  ['divination_cards', '占卜牌', 'Divination Cards', 'E. 仪式/神秘道具', 'E. Ritual / Occult Objects', '占卜牌、签条或卦片适合巫师、占卜师和命运主题。', 'Divination cards, lots, or trigram tiles suit witches, fortune-tellers, and fate themes.', 2, ['early_modern', 'industrial', 'modern', 'contemporary', 'timeless', 'mythic'], 'medium', ['prop', 'ritual']],
  ['small_skull_relic', '小型头骨遗物', 'Small Skull Relic', 'E. 仪式/神秘道具', 'E. Ritual / Occult Objects', '小型头骨遗物用于死亡、祖先、诅咒或教团符号，避免猎奇堆叠。', 'Small skull relic serves death, ancestor, curse, or cult sign while avoiding shock clutter.', 2, MYTHIC_ERAS, 'medium', ['prop', 'ritual']],
  ['holy_text_book', '圣书', 'Holy Text', 'E. 仪式/神秘道具', 'E. Ritual / Occult Objects', '圣书、经卷或祷文册说明信仰制度和角色职责。', 'Holy book, scripture roll, or prayer booklet explains faith system and role duty.', 1, ALL_PLAUSIBLE_ERAS, 'clean', ['prop', 'ritual']],
  ['sealed_black_box', '禁忌黑匣', 'Sealed Black Box', 'E. 仪式/神秘道具', 'E. Ritual / Occult Objects', '黑匣只作为禁物或谜物锚点，超现实内容需由世界法则授权。', 'Black box is only a forbidden or mysterious object anchor; supernatural content requires world-law permission.', 3, ['modern', 'contemporary', 'near_future', 'far_future', 'timeless', 'mythic'], 'high', ['prop', 'mystery'], ['forbidden object'], ['unexplained cosmic portal']],

  ['statement_handbag', '造型手袋', 'Statement Handbag', 'F. 时尚/媒体道具', 'F. Fashion / Media Objects', '手袋作为剪影、阶层、品牌感和姿态锚点，但避免真实品牌复制。', 'Handbag anchors silhouette, class, brand-like mood, and posture while avoiding real brand copying.', 1, MODERN_PLUS_ERAS, 'clean', ['prop', 'style'], ['fashion'], ['real logo']],
  ['sunglasses_case', '墨镜与眼镜盒', 'Sunglasses and Case', 'F. 时尚/媒体道具', 'F. Fashion / Media Objects', '墨镜、眼镜盒和拿取动作锚定名流、街头、保镖或造型师。', 'Sunglasses, case, and handling gesture anchor celebrity, street, bodyguard, or stylist.', 1, MODERN_PLUS_ERAS, 'clean', ['prop', 'style']],
  ['garment_hanger_tag', '衣架标签', 'Garment Hanger Tag', 'F. 时尚/媒体道具', 'F. Fashion / Media Objects', '衣架、样衣标签和编号说明后台、秀场、买手或服装工。', 'Hanger, sample tag, and number indicate backstage, runway, buyer, or garment worker.', 1, MODERN_PLUS_ERAS, 'clean', ['prop', 'costume']],
  ['lookbook_folder', 'Lookbook 文件夹', 'Lookbook Folder', 'F. 时尚/媒体道具', 'F. Fashion / Media Objects', 'Lookbook、样片和夹页说明编辑、模特、造型或品牌视觉系统。', 'Lookbook, sample photos, and inserts indicate editorial, model, styling, or brand-visual system.', 1, MODERN_PLUS_ERAS, 'clean', ['prop', 'style']],
  ['press_pass', '媒体通行证', 'Press Pass', 'F. 时尚/媒体道具', 'F. Fashion / Media Objects', '媒体证、挂绳和场馆标签锚定摄影、记者、后台和明星工业。', 'Press pass, lanyard, and venue tag anchor photography, journalism, backstage, and star industry.', 1, MODERN_PLUS_ERAS, 'clean', ['prop', 'occupation']],
  ['compact_mirror', '随身小镜', 'Compact Mirror', 'F. 时尚/媒体道具', 'F. Fashion / Media Objects', '小镜子说明补妆、名流、偶像、夜场或自我观看。', 'Compact mirror indicates touch-up, celebrity, idol, nightlife, or self-viewing.', 1, INDUSTRIAL_PLUS_ERAS, 'clean', ['prop', 'makeup']],
  ['lipstick_tube', '口红管', 'Lipstick Tube', 'F. 时尚/媒体道具', 'F. Fashion / Media Objects', '口红作为成人魅力、身份展示、后台补妆或社交仪式道具。', 'Lipstick acts as adult allure, identity display, backstage touch-up, or social ritual prop.', 1, MODERN_PLUS_ERAS, 'medium', ['prop', 'makeup']],
  ['perfume_bottle', '香水瓶', 'Perfume Bottle', 'F. 时尚/媒体道具', 'F. Fashion / Media Objects', '小香水瓶锚定名流、亲密距离、夜场或精致生活方式。', 'Small perfume bottle anchors celebrity, intimate distance, nightlife, or refined lifestyle.', 1, INDUSTRIAL_PLUS_ERAS, 'medium', ['prop', 'style']],
  ['runway_number_card', '秀场号码牌', 'Runway Number Card', 'F. 时尚/媒体道具', 'F. Fashion / Media Objects', '号码牌说明试镜、走秀、选角或模特工业。', 'Number card indicates casting, runway, audition, or model industry.', 1, MODERN_PLUS_ERAS, 'clean', ['prop', 'symbol']],
  ['ring_light_phone_mount', '补光灯手机架', 'Ring Light Phone Mount', 'F. 时尚/媒体道具', 'F. Fashion / Media Objects', '补光灯和手机架锚定主播、网红、妆造或社媒生产。', 'Ring light and phone mount anchor streamer, influencer, makeup, or social-media production.', 1, CONTEMPORARY_PLUS_ERAS, 'clean', ['prop', 'media']],
  ['vinyl_record', '黑胶唱片', 'Vinyl Record', 'F. 时尚/媒体道具', 'F. Fashion / Media Objects', '黑胶唱片锚定音乐、复古、DJ、收藏或夜店文化。', 'Vinyl record anchors music, retro mood, DJ, collecting, or club culture.', 1, ['industrial', 'modern', 'contemporary', 'timeless'], 'clean', ['prop', 'music']],
  ['cassette_player', '磁带随身听', 'Cassette Player', 'F. 时尚/媒体道具', 'F. Fashion / Media Objects', '磁带机锚定80/90年代、复古青年、地下音乐或怀旧。', 'Cassette player anchors 80s/90s, retro youth, underground music, or nostalgia.', 1, ['modern', 'contemporary', 'timeless'], 'clean', ['prop', 'music']],
  ['magazine_stack', '杂志叠册', 'Magazine Stack', 'F. 时尚/媒体道具', 'F. Fashion / Media Objects', '杂志叠册锚定编辑、模特、名流、造型参考和视觉工业。', 'Magazine stack anchors editor, model, celebrity, styling reference, and visual industry.', 1, MODERN_PLUS_ERAS, 'clean', ['prop', 'style']],
  ['champagne_flute', '香槟杯', 'Champagne Flute', 'F. 时尚/媒体道具', 'F. Fashion / Media Objects', '香槟杯锚定红毯、宴会、旧钱、夜场或社交表演。', 'Champagne flute anchors red carpet, banquet, old money, nightlife, or social performance.', 1, ['industrial', 'modern', 'contemporary', 'timeless'], 'medium', ['prop', 'social']],
  ['clutch_invitation', '手包与邀请函', 'Clutch and Invitation', 'F. 时尚/媒体道具', 'F. Fashion / Media Objects', '手包和邀请函说明高定、宴会、画廊开幕或私密社交。', 'Clutch and invitation indicate couture, banquet, gallery opening, or private society.', 1, MODERN_PLUS_ERAS, 'clean', ['prop', 'style']],

  ['wrist_terminal', '腕部终端', 'Wrist Terminal', 'G. 技术/科幻道具', 'G. Tech / Sci-Fi Objects', '腕机、身份屏或任务终端必须处于近未来/远未来或明确科幻语境。', 'Wrist computer, ID screen, or mission terminal must sit in near/far future or clear sci-fi context.', 4, FUTURE_ERAS, 'high', ['prop', 'technology', 'interface'], ['wearable tech'], ['historical random']],
  ['smart_glasses_hud', 'HUD 智能眼镜', 'HUD Smart Glasses', 'G. 技术/科幻道具', 'G. Tech / Sci-Fi Objects', '智能眼镜可作为低体积技术锚点，不替代整张脸。', 'Smart glasses act as low-volume tech anchor without replacing the whole face.', 3, ['near_future', 'far_future'], 'medium', ['prop', 'technology']],
  ['sensor_patch_pack', '传感贴片包', 'Sensor Patch Pack', 'G. 技术/科幻道具', 'G. Tech / Sci-Fi Objects', '传感贴片、读数贴和备用片锚定医疗、实验或运动科技。', 'Sensor patches, readout stickers, and spares anchor medical, lab, or sport tech.', 3, ['contemporary', 'near_future', 'far_future'], 'medium', ['prop', 'medical', 'technology']],
  ['sample_capsule', '样本胶囊', 'Sample Capsule', 'G. 技术/科幻道具', 'G. Tech / Sci-Fi Objects', '密封样本、试管胶囊或冷藏小盒必须服务实验室或生物科技。', 'Sealed sample, vial capsule, or cooled small case must serve lab or biotechnology.', 3, ['modern', 'contemporary', 'near_future', 'far_future'], 'medium', ['prop', 'lab']],
  ['data_shard', '数据晶片', 'Data Shard', 'G. 技术/科幻道具', 'G. Tech / Sci-Fi Objects', '数据晶片、记忆卡或身份密钥属于科幻/赛博道具，不应落入古代随机。', 'Data shard, memory card, or identity key belongs to sci-fi/cyber props and should not appear in ancient randoms.', 4, FUTURE_ERAS, 'high', ['prop', 'technology']],
  ['portable_power_cell', '便携电池芯', 'Portable Power Cell', 'G. 技术/科幻道具', 'G. Tech / Sci-Fi Objects', '便携电池芯解释设备供能、维修、太空劳动或低技术未来。', 'Portable power cell explains device power, repair, space labor, or low-tech future.', 3, ['near_future', 'far_future'], 'medium', ['prop', 'technology']],
  ['drone_companion_small', '小型伴随无人机', 'Small Companion Drone', 'G. 技术/科幻道具', 'G. Tech / Sci-Fi Objects', '小无人机只能作为辅助道具，不能抢走角色主体。', 'Small drone is only an assistive prop and must not steal the subject focus.', 4, ['near_future', 'far_future'], 'high', ['prop', 'technology'], ['assistant device'], ['main character replacement']],
  ['oxygen_rebreather', '再呼吸器', 'Oxygen Rebreather', 'G. 技术/科幻道具', 'G. Tech / Sci-Fi Objects', '再呼吸器适合太空、海底、污染或实验隔离环境。', 'Rebreather suits space, underwater, pollution, or experimental containment environment.', 3, ['modern', 'contemporary', 'near_future', 'far_future'], 'medium', ['prop', 'survival']],
  ['holo_projector_puck', '全息投影圆片', 'Hologram Projector Puck', 'G. 技术/科幻道具', 'G. Tech / Sci-Fi Objects', '全息投影器仅在科幻授权下使用，避免历史人物随机出现。', 'Hologram projector only appears with sci-fi permission, avoiding historical random mismatch.', 4, FUTURE_ERAS, 'high', ['prop', 'technology'], ['projection'], ['historical era']],
  ['cyberdeck_slab', '赛博终端板', 'Cyberdeck Slab', 'G. 技术/科幻道具', 'G. Tech / Sci-Fi Objects', '赛博终端板锚定黑客、数据工、赛博城市或维修人员。', 'Cyberdeck slab anchors hacker, data worker, cyber city, or repairer.', 4, ['near_future', 'far_future'], 'high', ['prop', 'technology']],
  ['biometric_scanner', '生物识别扫描器', 'Biometric Scanner', 'G. 技术/科幻道具', 'G. Tech / Sci-Fi Objects', '扫描器服务安检、医疗、殖民地管理或实验流程。', 'Scanner serves security, medicine, colony management, or experiment workflow.', 3, ['contemporary', 'near_future', 'far_future'], 'medium', ['prop', 'institution']],
  ['exo_tool_module', '外骨骼工具模块', 'Exosuit Tool Module', 'G. 技术/科幻道具', 'G. Tech / Sci-Fi Objects', '小型外骨骼模块应服务劳动或医疗助力，不变全身机甲。', 'Small exosuit module should serve labor or medical assistance, not become full-body mecha.', 4, ['near_future', 'far_future'], 'high', ['prop', 'technology'], ['assistive function'], ['full mecha']],
  ['cryo_tag', '冷冻舱身份牌', 'Cryo-Pod Tag', 'G. 技术/科幻道具', 'G. Tech / Sci-Fi Objects', '冷冻舱身份牌适合太空、实验、长眠或未来医疗。', 'Cryo-pod tag suits space, experiment, long sleep, or future medicine.', 4, ['near_future', 'far_future'], 'high', ['prop', 'symbol']],
  ['lab_containment_case', '实验封存箱', 'Lab Containment Case', 'G. 技术/科幻道具', 'G. Tech / Sci-Fi Objects', '封存箱、隔离锁和危险标签必须服务实验/污染/生物科技。', 'Containment case, isolation lock, and hazard labels must serve experiment, contamination, or biotech.', 3, ['modern', 'contemporary', 'near_future', 'far_future'], 'medium', ['prop', 'lab']],
  ['ai_oracle_cube', 'AI 预言方块', 'AI Oracle Cube', 'G. 技术/科幻道具', 'G. Tech / Sci-Fi Objects', 'AI 方块属于高概念未来物，应受世界法则授权并保持小体积。', 'AI cube is high-concept future object, requiring world-law permission and staying small in volume.', 5, ['far_future'], 'high', ['prop', 'technology', 'ritual'], ['AI relic'], ['ancient realism']],

  ['patched_water_filter', '修补净水器', 'Patched Water Filter', 'H. 废土/生存道具', 'H. Wasteland / Survival Objects', '净水器、水管和胶带说明稀缺、水源秩序和长期生存。', 'Water filter, tubing, and tape indicate scarcity, water order, and long survival.', 1, WASTELAND_ERAS, 'clean', ['prop', 'survival'], ['water scarcity'], ['luxury polish']],
  ['ration_tin', '口粮罐头', 'Ration Tin', 'H. 废土/生存道具', 'H. Wasteland / Survival Objects', '口粮罐、编号和锈痕锚定军队、避难所或末世生活。', 'Ration tin, serials, and rust anchor military, shelter, or post-collapse life.', 1, ['industrial', 'modern', 'contemporary', 'near_future', 'far_future', 'timeless'], 'clean', ['prop', 'survival']],
  ['salvage_hook', '拾荒钩', 'Salvage Hook', 'H. 废土/生存道具', 'H. Wasteland / Survival Objects', '钩子、绳索和回收袋说明拾荒功能和低资源环境。', 'Hook, rope, and salvage bag explain scavenging function and low-resource environment.', 1, WASTELAND_ERAS, 'clean', ['prop', 'occupation']],
  ['crowbar_pry_tool', '撬棍', 'Crowbar', 'H. 废土/生存道具', 'H. Wasteland / Survival Objects', '撬棍可作为生存、拆解和防御工具，需控制为单一锚点。', 'Crowbar can be survival, dismantling, and defense tool, controlled as one anchor.', 1, ['industrial', 'modern', 'contemporary', 'near_future', 'far_future', 'timeless'], 'medium', ['prop', 'survival']],
  ['solar_charger_scrap', '废料太阳能充电板', 'Scrap Solar Charger', 'H. 废土/生存道具', 'H. Wasteland / Survival Objects', '小太阳能板解释低电力、生存维修和灾后技术。', 'Small solar panel explains low power, survival repair, and post-disaster tech.', 2, ['contemporary', 'near_future', 'far_future'], 'medium', ['prop', 'technology']],
  ['gasoline_can', '汽油桶', 'Gasoline Can', 'H. 废土/生存道具', 'H. Wasteland / Survival Objects', '油桶适合车辆、荒原、工地或灾后迁徙，避免无故爆炸奇观。', 'Fuel can suits vehicles, wasteland, construction, or post-disaster migration, avoiding random explosion spectacle.', 1, ['industrial', 'modern', 'contemporary', 'near_future', 'far_future'], 'medium', ['prop', 'survival']],
  ['bedroll_bundle', '铺盖卷', 'Bedroll Bundle', 'H. 废土/生存道具', 'H. Wasteland / Survival Objects', '铺盖卷、绳子和背负方式说明迁徙、游民或荒野长期行动。', 'Bedroll, rope, and carry method indicate migration, vagrancy, or long wilderness travel.', 1, ALL_PLAUSIBLE_ERAS, 'clean', ['prop', 'costume']],
  ['patched_canteen', '修补水壶', 'Patched Canteen', 'H. 废土/生存道具', 'H. Wasteland / Survival Objects', '水壶、补片和挂扣锚定荒野、军旅、废土或长期劳动。', 'Canteen, patch, and hook anchor wilderness, military, wasteland, or long labor.', 1, ALL_PLAUSIBLE_ERAS, 'clean', ['prop', 'survival']],
  ['roadside_toolbox', '路边工具箱', 'Roadside Toolbox', 'H. 废土/生存道具', 'H. Wasteland / Survival Objects', '旧工具箱说明车辆维修、流动营地、拾荒或临时工。', 'Old toolbox indicates vehicle repair, mobile camp, salvage, or odd job.', 1, ['industrial', 'modern', 'contemporary', 'near_future', 'far_future'], 'clean', ['prop', 'occupation']],
  ['seed_packet', '种子包', 'Seed Packet', 'H. 废土/生存道具', 'H. Wasteland / Survival Objects', '种子包锚定生态重建、农人、温室、饥荒或未来希望。', 'Seed packet anchors eco-rebuild, farmer, greenhouse, famine, or future hope.', 1, ALL_PLAUSIBLE_ERAS, 'clean', ['prop', 'world']],
  ['filter_mask_canister', '滤罐面罩', 'Filter-Mask Canister', 'H. 废土/生存道具', 'H. Wasteland / Survival Objects', '滤罐面罩用于污染、工业、灾后或危险隔离，不等于赛博脸。', 'Filter-mask canister serves pollution, industry, disaster, or hazard isolation, not cyber face by default.', 2, ['industrial', 'modern', 'contemporary', 'near_future', 'far_future'], 'medium', ['prop', 'survival'], ['protection'], ['cybernetic face replacement']],
  ['hand_crank_radio', '手摇电台', 'Hand-Crank Radio', 'H. 废土/生存道具', 'H. Wasteland / Survival Objects', '手摇电台说明断电、救援、社区广播或灾后信息秩序。', 'Hand-crank radio indicates power outage, rescue, community broadcast, or post-disaster information order.', 1, ['modern', 'contemporary', 'near_future', 'far_future'], 'clean', ['prop', 'communication']],
  ['repair_tape_roll', '修补胶带卷', 'Repair Tape Roll', 'H. 废土/生存道具', 'H. Wasteland / Survival Objects', '胶带卷、扎带和补丁说明低资源维护逻辑。', 'Tape roll, zip ties, and patches indicate low-resource maintenance logic.', 1, MODERN_PLUS_ERAS, 'clean', ['prop', 'wear']],
  ['scrap_map_board', '废料地图板', 'Scrap Map Board', 'H. 废土/生存道具', 'H. Wasteland / Survival Objects', '废料板上的手绘地图、补给路线和危险标记说明迁徙体系。', 'Hand-drawn map, supply route, and danger marks on scrap board explain migration system.', 1, WASTELAND_ERAS, 'clean', ['prop', 'world']],
  ['animal_trap_snare', '捕兽套索', 'Animal Snare Trap', 'H. 废土/生存道具', 'H. Wasteland / Survival Objects', '套索、捕兽夹或绳结说明狩猎、生存和野外技能。', 'Snare, trap, or knot indicates hunting, survival, and wilderness skill.', 1, ALL_PLAUSIBLE_ERAS, 'medium', ['prop', 'survival']]
];

const buildEvidenceTags = (group: string, affects: readonly string[], controls: readonly string[]): string[] => {
  const tags = new Set<string>([...affects, ...controls]);
  if (group.startsWith('A.')) tags.add('medical');
  if (group.startsWith('B.')) tags.add('knowledge');
  if (group.startsWith('C.')) tags.add('institution');
  if (group.startsWith('D.')) tags.add('combat');
  if (group.startsWith('E.')) tags.add('ritual');
  if (group.startsWith('F.')) tags.add('technology');
  if (group.startsWith('G.')) tags.add('space');
  if (group.startsWith('H.')) tags.add('survival');
  return Array.from(tags);
};

export const CD_PROP_ANCHORS: ConceptBaseItem[] = PROP_ROWS.map(([
  key,
  name,
  nameEn,
  group,
  groupEn,
  def,
  defEn,
  ontologyLevel,
  eras,
  risk,
  affects = ['prop'],
  controls = ['prop'],
  forbids = []
]) => {
  const axisPatch = PROP_ANCHOR_AXIS[key];
  return {
    id: `cd_prop_${key}`,
    name,
    nameEn,
    group,
    groupEn,
    def,
    defEn,
    ontologyLevel,
    eras,
    risk,
    affects,
    controls,
    evidenceTags: buildEvidenceTags(group, affects, controls),
    forbids,
    ...axisPatch
  };
});
