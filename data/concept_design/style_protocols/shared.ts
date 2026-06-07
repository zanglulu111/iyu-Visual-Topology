import { LibraryItemDef } from '../../../types';

export type StyleProtocolKind =
  | 'structure'
  | 'material'
  | 'symbol'
  | 'pose'
  | 'function'
  | 'prop'
  | 'costume'
  | 'wear'
  | 'face'
  | 'body'
  | 'color'
  | 'composition'
  | 'cultural_image'
  | 'ontology';

export type StyleProtocolSeed = {
  slug: string;
  name: string;
  nameEn: string;
  kind: StyleProtocolKind;
  focus: string;
  focusEn: string;
  visual: string[];
  visualEn: string[];
  absorption: string;
  absorptionEn: string;
  ontologyLevel?: 1 | 2 | 3 | 4 | 5;
  eraMode?: LibraryItemDef['eraMode'];
  eras?: string[];
  realityTags?: string[];
  categoryFit?: LibraryItemDef['categoryFit'];
  affects?: string[];
  controls?: string[];
  risk?: 'clean' | 'medium' | 'high';
};

export type StyleProtocolFamily = {
  slug: string;
  name: string;
  nameEn: string;
  focus: string;
  focusEn: string;
  defaultKind: StyleProtocolKind;
  defaultAffects: string[];
  defaultControls: string[];
  items: StyleProtocolSeed[];
};

const uniq = (items: string[]) => Array.from(new Set(items.filter(Boolean)));
const cleanEras = (items: readonly string[]) => uniq([...items].filter(era => era !== 'timeless'));

const fit = (
  unlisted: NonNullable<NonNullable<LibraryItemDef['categoryFit']>['unlisted']>,
  patch: Omit<NonNullable<LibraryItemDef['categoryFit']>, 'unlisted'> = {}
): NonNullable<LibraryItemDef['categoryFit']> => ({
  unlisted,
  strong: uniq([...(patch.strong || [])]),
  usable: uniq([...(patch.usable || [])]),
  fusion: uniq([...(patch.fusion || [])]),
  weak: uniq([...(patch.weak || [])]),
  exclude: uniq([...(patch.exclude || [])])
});

const mergeFit = (
  base: NonNullable<LibraryItemDef['categoryFit']>,
  override?: LibraryItemDef['categoryFit']
): NonNullable<LibraryItemDef['categoryFit']> => override ? {
  unlisted: override.unlisted || base.unlisted || 'none',
  strong: uniq([...(base.strong || []), ...(override.strong || [])]),
  usable: uniq([...(base.usable || []), ...(override.usable || [])]),
  fusion: uniq([...(base.fusion || []), ...(override.fusion || [])]),
  weak: uniq([...(base.weak || []), ...(override.weak || [])]),
  exclude: uniq([...(base.exclude || []), ...(override.exclude || [])])
} : base;

const routeCategoryFit: Record<string, NonNullable<LibraryItemDef['categoryFit']>> = {
  COUTURE: fit('weak', {
    strong: ['fashion_idol', 'boudoir_aesthetic'],
    usable: ['romance', 'court', 'urban_life'],
    fusion: ['cyberpunk', 'surreal', 'dark_fantasy'],
    weak: ['wuxia', 'xianxia', 'wasteland']
  }),
  STREET: fit('weak', {
    strong: ['urban_life', 'fashion_idol'],
    usable: ['noir_crime', 'romance', 'cyberpunk'],
    fusion: ['science_fiction', 'wasteland'],
    weak: ['court', 'historical', 'wuxia', 'xianxia']
  }),
  FUNCTION: fit('weak', {
    strong: ['real_professional'],
    usable: ['urban_life', 'science_fiction', 'cyberpunk', 'war_military', 'adventure'],
    fusion: ['biopunk', 'posthuman', 'wasteland'],
    weak: ['wuxia', 'xianxia', 'court']
  }),
  TACTICAL: fit('weak', {
    strong: ['war_military'],
    usable: ['wuxia', 'noir_crime', 'adventure', 'wasteland', 'historical'],
    fusion: ['science_fiction', 'cyberpunk', 'dark_fantasy'],
    weak: ['romance', 'fashion_idol']
  }),
  RITUAL: fit('weak', {
    strong: ['religious_ritual'],
    usable: ['historical', 'court', 'mythic_epic', 'dark_fantasy', 'xianxia', 'horror'],
    fusion: ['surreal', 'fantasy', 'wuxia'],
    weak: ['urban_life', 'real_professional']
  }),
  ARISTOCRATIC: fit('weak', {
    strong: ['court', 'historical'],
    usable: ['romance', 'fashion_idol', 'dark_fantasy'],
    fusion: ['wuxia', 'xianxia', 'surreal'],
    weak: ['cyberpunk', 'science_fiction', 'wasteland']
  }),
  TECH: fit('weak', {
    strong: ['science_fiction', 'cyberpunk', 'posthuman'],
    usable: ['real_professional', 'urban_life', 'biopunk'],
    fusion: ['surreal', 'body_horror', 'fashion_idol'],
    weak: ['historical', 'court', 'wuxia']
  }),
  MECHANICAL: fit('weak', {
    strong: ['science_fiction', 'posthuman'],
    usable: ['cyberpunk', 'real_professional', 'wasteland', 'biopunk'],
    fusion: ['body_horror', 'surreal'],
    weak: ['romance', 'court']
  }),
  ORGANIC: fit('weak', {
    strong: ['fantasy', 'biopunk', 'ecological'],
    usable: ['body_horror', 'dark_fantasy', 'mythic_epic', 'xianxia'],
    fusion: ['science_fiction', 'posthuman', 'surreal'],
    weak: ['real_professional', 'urban_life']
  }),
  PARASITIC: fit('weak', {
    strong: ['body_horror', 'horror'],
    usable: ['dark_fantasy', 'biopunk', 'posthuman'],
    fusion: ['science_fiction', 'surreal', 'mythic_epic'],
    weak: ['romance', 'urban_life', 'fashion_idol']
  }),
  MYTHIC: fit('weak', {
    strong: ['mythic_epic', 'fantasy', 'xianxia'],
    usable: ['dark_fantasy', 'religious_ritual', 'wuxia', 'horror'],
    fusion: ['surreal', 'body_horror', 'romance'],
    weak: ['real_professional', 'urban_life']
  }),
  SURREAL: fit('weak', {
    strong: ['surreal', 'abstract'],
    usable: ['fantasy', 'dark_fantasy', 'horror', 'posthuman'],
    fusion: ['romance', 'science_fiction', 'xianxia'],
    weak: ['real_professional', 'urban_life']
  }),
  WASTELAND: fit('weak', {
    strong: ['wasteland'],
    usable: ['adventure', 'war_military', 'science_fiction', 'noir_crime', 'ecological'],
    fusion: ['cyberpunk', 'dark_fantasy'],
    weak: ['court', 'fashion_idol', 'romance']
  }),
  MINIMAL: fit('usable', {
    strong: ['urban_life', 'fashion_idol', 'real_professional', 'romance'],
    usable: ['historical', 'court', 'noir_crime', 'adventure'],
    fusion: ['science_fiction', 'cyberpunk', 'surreal']
  })
};

const routeRealityTags: Record<string, string[]> = {
  COUTURE: ['realistic', 'physical', 'fashion_system', 'costume_structure'],
  STREET: ['realistic', 'physical', 'urban_fashion', 'social'],
  FUNCTION: ['realistic', 'physical', 'professional', 'workflow'],
  TACTICAL: ['realistic', 'physical', 'combat_equipment', 'protection'],
  RITUAL: ['stylized', 'physical', 'ritual', 'symbolic'],
  ARISTOCRATIC: ['realistic', 'physical', 'institutional', 'aristocratic'],
  TECH: ['semi_surreal', 'technological', 'speculative', 'interface'],
  MECHANICAL: ['semi_surreal', 'technological', 'mechanical', 'physical'],
  ORGANIC: ['semi_surreal', 'biological', 'organic', 'physical'],
  PARASITIC: ['non_realist', 'biological', 'body_horror', 'corruption'],
  MYTHIC: ['non_realist', 'mythic', 'magical', 'symbolic'],
  SURREAL: ['abstract', 'surreal', 'symbolic', 'dream'],
  WASTELAND: ['realistic', 'physical', 'survival', 'postapocalyptic_material'],
  MINIMAL: ['realistic', 'physical', 'design_protocol', 'style_protocol']
};

const familyCategoryFit: Record<string, NonNullable<LibraryItemDef['categoryFit']>> = {
  'MINIMAL/clean_line': fit('usable', {
    strong: ['fashion_idol', 'real_professional', 'urban_life'],
    usable: ['romance', 'court', 'historical', 'noir_crime', 'adventure'],
    fusion: ['science_fiction', 'cyberpunk', 'surreal'],
    weak: ['body_horror', 'wasteland']
  }),
  'MINIMAL/neutral_material': fit('usable', {
    strong: ['real_professional', 'urban_life', 'historical'],
    usable: ['fashion_idol', 'romance', 'court', 'adventure', 'ecological', 'wasteland'],
    fusion: ['science_fiction', 'cyberpunk', 'dark_fantasy'],
    weak: ['body_horror', 'abstract']
  }),
  'MINIMAL/single_accent': fit('usable', {
    strong: ['romance', 'fashion_idol', 'court'],
    usable: ['urban_life', 'real_professional', 'historical', 'noir_crime'],
    fusion: ['surreal', 'xianxia', 'science_fiction', 'dark_fantasy'],
    weak: ['wasteland', 'body_horror']
  }),
  'MINIMAL/precise_fit': fit('usable', {
    strong: ['fashion_idol', 'real_professional', 'boudoir_aesthetic'],
    usable: ['urban_life', 'romance', 'court', 'historical', 'noir_crime'],
    fusion: ['science_fiction', 'cyberpunk'],
    weak: ['body_horror', 'abstract', 'wasteland']
  }),
  'MINIMAL/quiet_luxury': fit('weak', {
    strong: ['fashion_idol', 'court', 'romance', 'boudoir_aesthetic'],
    usable: ['urban_life', 'real_professional', 'historical', 'noir_crime'],
    fusion: ['dark_fantasy', 'surreal'],
    weak: ['wuxia', 'xianxia', 'science_fiction', 'wasteland']
  }),
  'MINIMAL/ordinary_object': fit('usable', {
    strong: ['urban_life', 'real_professional', 'romance'],
    usable: ['noir_crime', 'adventure', 'historical', 'fashion_idol'],
    fusion: ['cyberpunk', 'wasteland', 'surreal'],
    weak: ['court', 'xianxia', 'mythic_epic', 'abstract']
  }),
  'MINIMAL/soft_asymmetry': fit('usable', {
    strong: ['romance', 'urban_life', 'fashion_idol', 'boudoir_aesthetic'],
    usable: ['real_professional', 'noir_crime', 'historical', 'court'],
    fusion: ['surreal', 'dark_fantasy'],
    weak: ['war_military', 'wasteland', 'science_fiction']
  }),
  'MINIMAL/low_drama_pose': fit('usable', {
    strong: ['urban_life', 'real_professional', 'romance'],
    usable: ['noir_crime', 'historical', 'court', 'fashion_idol', 'adventure'],
    fusion: ['surreal', 'dark_fantasy'],
    weak: ['war_military', 'body_horror', 'wasteland']
  }),
  'MINIMAL/maintenance_care': fit('usable', {
    strong: ['real_professional', 'urban_life', 'historical'],
    usable: ['wasteland', 'adventure', 'court', 'romance', 'noir_crime'],
    fusion: ['dark_fantasy', 'science_fiction'],
    weak: ['fashion_idol', 'abstract', 'body_horror']
  }),
  'MINIMAL/negative_space': fit('usable', {
    strong: ['fashion_idol', 'abstract', 'surreal'],
    usable: ['real_professional', 'urban_life', 'romance', 'court', 'historical'],
    fusion: ['science_fiction', 'cyberpunk', 'dark_fantasy'],
    weak: ['wasteland', 'body_horror']
  }),
  'FUNCTION/medical_care': fit('weak', {
    strong: ['real_professional'],
    usable: ['urban_life', 'biopunk', 'body_horror', 'horror'],
    fusion: ['science_fiction', 'wasteland', 'dark_fantasy'],
    weak: ['wuxia', 'xianxia', 'court', 'fashion_idol']
  }),
  'FUNCTION/archive_bureaucracy': fit('weak', {
    strong: ['real_professional'],
    usable: ['historical', 'court', 'noir_crime', 'urban_life', 'surreal'],
    fusion: ['science_fiction', 'dark_fantasy', 'abstract'],
    weak: ['wuxia', 'xianxia', 'fashion_idol']
  }),
  'FUNCTION/service_labor': fit('weak', {
    strong: ['real_professional', 'urban_life'],
    usable: ['romance', 'fashion_idol', 'noir_crime', 'boudoir_aesthetic'],
    fusion: ['cyberpunk', 'wasteland'],
    weak: ['wuxia', 'xianxia', 'court']
  }),
  'FUNCTION/lab_research': fit('weak', {
    strong: ['real_professional', 'science_fiction'],
    usable: ['biopunk', 'posthuman', 'body_horror', 'urban_life'],
    fusion: ['dark_fantasy', 'horror', 'surreal'],
    weak: ['wuxia', 'xianxia', 'court']
  }),
  'FUNCTION/corporate_office': fit('weak', {
    strong: ['real_professional', 'urban_life'],
    usable: ['noir_crime', 'romance', 'cyberpunk', 'science_fiction'],
    fusion: ['posthuman', 'surreal'],
    weak: ['wuxia', 'xianxia', 'historical', 'court']
  }),
  'FUNCTION/industrial_maintenance': fit('weak', {
    strong: ['real_professional'],
    usable: ['wasteland', 'science_fiction', 'cyberpunk', 'adventure', 'war_military'],
    fusion: ['biopunk', 'posthuman', 'ecological'],
    weak: ['romance', 'court', 'fashion_idol']
  }),
  'FUNCTION/field_operator': fit('weak', {
    strong: ['real_professional', 'adventure'],
    usable: ['war_military', 'wasteland', 'ecological', 'science_fiction', 'urban_life'],
    fusion: ['cyberpunk', 'dark_fantasy'],
    weak: ['court', 'fashion_idol']
  }),
  'FUNCTION/education_academic': fit('weak', {
    strong: ['real_professional'],
    usable: ['urban_life', 'historical', 'romance', 'surreal', 'abstract'],
    fusion: ['science_fiction', 'fantasy', 'dark_fantasy'],
    weak: ['wuxia', 'xianxia', 'wasteland']
  }),
  'FUNCTION/law_finance': fit('weak', {
    strong: ['real_professional'],
    usable: ['urban_life', 'noir_crime', 'court', 'historical', 'romance'],
    fusion: ['cyberpunk', 'science_fiction', 'dark_fantasy'],
    weak: ['xianxia', 'wasteland', 'fashion_idol']
  }),
  'FUNCTION/death_care': fit('weak', {
    strong: ['real_professional'],
    usable: ['religious_ritual', 'horror', 'body_horror', 'dark_fantasy', 'urban_life'],
    fusion: ['surreal', 'biopunk', 'court'],
    weak: ['romance', 'fashion_idol', 'wuxia']
  }),
  'TACTICAL/modular_loadout': fit('weak', {
    strong: ['war_military', 'real_professional'],
    usable: ['adventure', 'wasteland', 'science_fiction', 'cyberpunk'],
    fusion: ['wuxia', 'noir_crime', 'post_apocalyptic'],
    weak: ['romance', 'court', 'fashion_idol']
  }),
  'TACTICAL/concealed_weapon': fit('weak', {
    strong: ['noir_crime', 'wuxia'],
    usable: ['war_military', 'historical', 'court', 'urban_life'],
    fusion: ['science_fiction', 'dark_fantasy', 'religious_ritual'],
    weak: ['romance', 'fashion_idol', 'real_professional']
  }),
  'TACTICAL/armor_protection': fit('weak', {
    strong: ['war_military', 'historical'],
    usable: ['wuxia', 'dark_fantasy', 'science_fiction', 'wasteland'],
    fusion: ['court', 'xianxia', 'posthuman'],
    weak: ['romance', 'urban_life', 'fashion_idol']
  }),
  'TACTICAL/command_rank': fit('weak', {
    strong: ['war_military', 'institutional'],
    usable: ['historical', 'court', 'real_professional', 'science_fiction'],
    fusion: ['noir_crime', 'cyberpunk', 'dark_fantasy'],
    weak: ['romance', 'fashion_idol', 'wuxia', 'xianxia']
  }),
  'TACTICAL/assassin_light': fit('weak', {
    strong: ['noir_crime', 'wuxia'],
    usable: ['war_military', 'historical', 'dark_fantasy', 'adventure'],
    fusion: ['xianxia', 'cyberpunk', 'religious_ritual'],
    weak: ['romance', 'real_professional', 'fashion_idol']
  }),
  'TACTICAL/duel_ceremony': fit('weak', {
    strong: ['historical', 'court', 'wuxia'],
    usable: ['war_military', 'romance', 'noir_crime'],
    fusion: ['dark_fantasy', 'xianxia', 'fashion_idol'],
    weak: ['real_professional', 'urban_life', 'wasteland']
  }),
  'TACTICAL/riot_control': fit('weak', {
    strong: ['war_military', 'institutional', 'urban_life'],
    usable: ['real_professional', 'noir_crime', 'science_fiction'],
    fusion: ['cyberpunk', 'posthuman'],
    weak: ['romance', 'court', 'wuxia', 'xianxia']
  }),
  'TACTICAL/survival_combat': fit('usable', {
    strong: ['wasteland', 'adventure'],
    usable: ['war_military', 'ecological', 'historical', 'wuxia'],
    fusion: ['dark_fantasy', 'science_fiction', 'post_apocalyptic', 'xianxia'],
    weak: ['court', 'fashion_idol', 'romance']
  }),
  'TACTICAL/training_body': fit('usable', {
    strong: ['war_military', 'wuxia', 'adventure'],
    usable: ['urban_life', 'real_professional', 'historical', 'romance'],
    fusion: ['xianxia', 'fashion_idol', 'science_fiction'],
    weak: ['court', 'wasteland']
  }),
  'TACTICAL/future_tactics': fit('weak', {
    strong: ['science_fiction', 'war_military'],
    usable: ['cyberpunk', 'posthuman', 'real_professional', 'adventure'],
    fusion: ['wasteland', 'biopunk'],
    weak: ['historical', 'court', 'wuxia', 'xianxia', 'romance']
  }),
  'RITUAL/sacred_geometry': fit('weak', {
    strong: ['religious_ritual', 'surreal'],
    usable: ['mythic_epic', 'fantasy', 'xianxia', 'court', 'historical'],
    fusion: ['science_fiction', 'dark_fantasy', 'abstract'],
    weak: ['urban_life', 'real_professional', 'wasteland']
  }),
  'RITUAL/vestment_hierarchy': fit('weak', {
    strong: ['religious_ritual', 'court'],
    usable: ['historical', 'mythic_epic', 'dark_fantasy', 'xianxia'],
    fusion: ['science_fiction', 'fashion_idol', 'surreal'],
    weak: ['urban_life', 'real_professional', 'wasteland']
  }),
  'RITUAL/reliquary_vessel': fit('weak', {
    strong: ['religious_ritual', 'mythic_epic'],
    usable: ['historical', 'court', 'dark_fantasy', 'fantasy', 'xianxia'],
    fusion: ['surreal', 'horror', 'science_fiction'],
    weak: ['urban_life', 'real_professional', 'wasteland']
  }),
  'RITUAL/taboo_seal': fit('weak', {
    strong: ['religious_ritual', 'dark_fantasy'],
    usable: ['horror', 'surreal', 'xianxia', 'mythic_epic'],
    fusion: ['romance', 'body_horror', 'science_fiction'],
    weak: ['urban_life', 'real_professional', 'fashion_idol']
  }),
  'RITUAL/austere_penitence': fit('weak', {
    strong: ['religious_ritual'],
    usable: ['historical', 'adventure', 'mythic_epic', 'dark_fantasy'],
    fusion: ['wuxia', 'xianxia', 'horror'],
    weak: ['urban_life', 'fashion_idol', 'science_fiction']
  }),
  'RITUAL/oracle_veil': fit('weak', {
    strong: ['religious_ritual', 'surreal'],
    usable: ['mythic_epic', 'xianxia', 'fantasy', 'dark_fantasy', 'horror'],
    fusion: ['science_fiction', 'posthuman', 'romance'],
    weak: ['real_professional', 'urban_life', 'wasteland']
  }),
  'RITUAL/procession_order': fit('weak', {
    strong: ['religious_ritual'],
    usable: ['historical', 'court', 'mythic_epic', 'urban_life', 'romance'],
    fusion: ['dark_fantasy', 'xianxia', 'surreal'],
    weak: ['science_fiction', 'wasteland', 'real_professional']
  }),
  'RITUAL/clean_sacrifice': fit('weak', {
    strong: ['religious_ritual'],
    usable: ['romance', 'dark_fantasy', 'horror', 'mythic_epic'],
    fusion: ['surreal', 'xianxia', 'fantasy'],
    weak: ['urban_life', 'real_professional', 'science_fiction']
  }),
  'RITUAL/order_rank': fit('weak', {
    strong: ['religious_ritual', 'institutional'],
    usable: ['historical', 'court', 'real_professional', 'mythic_epic'],
    fusion: ['dark_fantasy', 'science_fiction', 'wuxia'],
    weak: ['romance', 'fashion_idol', 'wasteland']
  }),
  'RITUAL/dark_ceremony': fit('weak', {
    strong: ['religious_ritual', 'dark_fantasy', 'horror'],
    usable: ['surreal', 'mythic_epic', 'occult'],
    fusion: ['xianxia', 'body_horror', 'romance'],
    weak: ['urban_life', 'real_professional', 'fashion_idol']
  }),
  'ARISTOCRATIC/lineage_code': fit('weak', {
    strong: ['court', 'historical'],
    usable: ['romance', 'religious_ritual', 'dark_fantasy'],
    fusion: ['wuxia', 'xianxia', 'surreal'],
    weak: ['urban_life', 'real_professional', 'wasteland', 'science_fiction']
  }),
  'ARISTOCRATIC/inheritance_pressure': fit('weak', {
    strong: ['court', 'historical', 'romance'],
    usable: ['noir_crime', 'dark_fantasy', 'religious_ritual'],
    fusion: ['surreal', 'wuxia', 'xianxia'],
    weak: ['science_fiction', 'cyberpunk', 'wasteland']
  }),
  'ARISTOCRATIC/court_body_law': fit('weak', {
    strong: ['court', 'historical'],
    usable: ['romance', 'fashion_idol', 'religious_ritual'],
    fusion: ['dark_fantasy', 'wuxia', 'xianxia'],
    weak: ['urban_life', 'real_professional', 'wasteland', 'science_fiction']
  }),
  'ARISTOCRATIC/old_money_restraint': fit('weak', {
    strong: ['court', 'historical'],
    usable: ['fashion_idol', 'romance', 'urban_life', 'real_professional'],
    fusion: ['dark_fantasy', 'surreal'],
    weak: ['wuxia', 'xianxia', 'wasteland', 'science_fiction']
  }),
  'ARISTOCRATIC/court_institution': fit('weak', {
    strong: ['court', 'historical', 'institutional'],
    usable: ['real_professional', 'noir_crime', 'wuxia'],
    fusion: ['dark_fantasy', 'xianxia', 'surreal'],
    weak: ['urban_life', 'fashion_idol', 'wasteland', 'science_fiction']
  }),
  'ARISTOCRATIC/servant_class_contrast': fit('weak', {
    strong: ['court', 'historical', 'real_professional'],
    usable: ['romance', 'noir_crime', 'urban_life'],
    fusion: ['dark_fantasy', 'wuxia'],
    weak: ['science_fiction', 'cyberpunk', 'xianxia', 'wasteland']
  }),
  'ARISTOCRATIC/dynastic_decay': fit('weak', {
    strong: ['court', 'historical'],
    usable: ['dark_fantasy', 'romance', 'noir_crime'],
    fusion: ['wuxia', 'xianxia', 'surreal', 'horror'],
    weak: ['urban_life', 'real_professional', 'science_fiction']
  }),
  'ARISTOCRATIC/ceremonial_jewelry': fit('weak', {
    strong: ['court', 'fashion_idol'],
    usable: ['historical', 'romance', 'religious_ritual', 'dark_fantasy'],
    fusion: ['xianxia', 'surreal'],
    weak: ['real_professional', 'wasteland', 'science_fiction']
  }),
  'ARISTOCRATIC/social_ritual': fit('weak', {
    strong: ['court', 'romance'],
    usable: ['historical', 'noir_crime', 'fashion_idol', 'urban_life'],
    fusion: ['dark_fantasy', 'wuxia', 'surreal'],
    weak: ['science_fiction', 'wasteland', 'real_professional']
  }),
  'ARISTOCRATIC/dark_aristocracy': fit('weak', {
    strong: ['dark_fantasy', 'court'],
    usable: ['horror', 'historical', 'religious_ritual', 'romance'],
    fusion: ['surreal', 'xianxia', 'body_horror'],
    weak: ['urban_life', 'real_professional', 'science_fiction', 'wasteland']
  }),
  'TECH/visible_interface': fit('weak', {
    strong: ['science_fiction', 'posthuman'],
    usable: ['cyberpunk', 'real_professional', 'biopunk'],
    fusion: ['surreal', 'war_military', 'fashion_idol'],
    weak: ['historical', 'court', 'wuxia', 'xianxia', 'romance']
  }),
  'TECH/serial_identity': fit('weak', {
    strong: ['science_fiction', 'real_professional'],
    usable: ['cyberpunk', 'posthuman', 'biopunk', 'institutional'],
    fusion: ['noir_crime', 'surreal', 'wasteland'],
    weak: ['court', 'historical', 'wuxia', 'xianxia', 'romance']
  }),
  'TECH/wearable_device': fit('weak', {
    strong: ['science_fiction', 'real_professional'],
    usable: ['cyberpunk', 'fashion_idol', 'urban_life', 'posthuman'],
    fusion: ['war_military', 'surreal', 'biopunk'],
    weak: ['historical', 'court', 'wuxia', 'xianxia']
  }),
  'TECH/soft_exosuit': fit('weak', {
    strong: ['science_fiction', 'posthuman'],
    usable: ['real_professional', 'war_military', 'biopunk'],
    fusion: ['cyberpunk', 'fashion_idol', 'body_horror'],
    weak: ['historical', 'court', 'wuxia', 'xianxia', 'romance']
  }),
  'TECH/lab_containment': fit('weak', {
    strong: ['science_fiction', 'biopunk', 'real_professional'],
    usable: ['posthuman', 'body_horror', 'horror'],
    fusion: ['surreal', 'cyberpunk', 'dark_fantasy'],
    weak: ['court', 'historical', 'wuxia', 'xianxia', 'fashion_idol']
  }),
  'TECH/data_overlay': fit('weak', {
    strong: ['science_fiction', 'cyberpunk'],
    usable: ['posthuman', 'real_professional', 'urban_life'],
    fusion: ['surreal', 'fashion_idol', 'war_military'],
    weak: ['historical', 'court', 'wuxia', 'xianxia']
  }),
  'TECH/maintenance_panel': fit('weak', {
    strong: ['science_fiction', 'real_professional'],
    usable: ['cyberpunk', 'wasteland', 'war_military', 'posthuman'],
    fusion: ['biopunk', 'fashion_idol'],
    weak: ['historical', 'court', 'romance', 'xianxia']
  }),
  'TECH/medical_interface': fit('weak', {
    strong: ['medical', 'real_professional', 'biopunk'],
    usable: ['science_fiction', 'posthuman', 'body_horror'],
    fusion: ['cyberpunk', 'surreal', 'horror'],
    weak: ['historical', 'court', 'wuxia', 'xianxia', 'fashion_idol']
  }),
  'TECH/drone_companion': fit('weak', {
    strong: ['science_fiction'],
    usable: ['cyberpunk', 'real_professional', 'war_military', 'adventure'],
    fusion: ['posthuman', 'wasteland', 'fashion_idol'],
    weak: ['historical', 'court', 'wuxia', 'xianxia', 'romance']
  }),
  'TECH/lowtech_hack': fit('weak', {
    strong: ['science_fiction', 'wasteland'],
    usable: ['cyberpunk', 'real_professional', 'urban_life', 'adventure'],
    fusion: ['post_apocalyptic', 'noir_crime'],
    weak: ['court', 'historical', 'xianxia', 'fashion_idol']
  }),
  'COUTURE/architectural_volume': fit('weak', {
    strong: ['fashion_idol', 'court'],
    usable: ['romance', 'historical', 'adult'],
    fusion: ['science_fiction', 'surreal', 'dark_fantasy', 'fantasy'],
    weak: ['wuxia', 'xianxia', 'wasteland', 'real_professional']
  }),
  'COUTURE/runway_presentation': fit('weak', {
    strong: ['fashion_idol', 'urban_life'],
    usable: ['romance', 'adult', 'court', 'real_professional'],
    fusion: ['surreal', 'cyberpunk', 'dark_fantasy'],
    weak: ['wuxia', 'xianxia', 'wasteland', 'war_military']
  }),
  'COUTURE/atelier_process': fit('weak', {
    strong: ['fashion_idol', 'real_professional'],
    usable: ['urban_life', 'historical', 'court', 'romance'],
    fusion: ['surreal', 'science_fiction', 'dark_fantasy'],
    weak: ['wuxia', 'xianxia', 'wasteland']
  }),
  'COUTURE/surface_craft': fit('weak', {
    strong: ['fashion_idol', 'court', 'historical'],
    usable: ['romance', 'religious_ritual', 'fantasy', 'dark_fantasy'],
    fusion: ['xianxia', 'science_fiction', 'surreal'],
    weak: ['urban_life', 'real_professional', 'wasteland']
  }),
  'COUTURE/body_discipline': fit('weak', {
    strong: ['fashion_idol', 'adult'],
    usable: ['court', 'romance', 'historical', 'religious_ritual'],
    fusion: ['surreal', 'dark_fantasy', 'body_horror'],
    weak: ['real_professional', 'urban_life', 'wasteland', 'war_military']
  }),
  'COUTURE/transparent_boundary': fit('weak', {
    strong: ['fashion_idol', 'adult', 'surreal'],
    usable: ['romance', 'science_fiction', 'dark_fantasy'],
    fusion: ['xianxia', 'horror', 'posthuman'],
    weak: ['real_professional', 'war_military', 'wasteland']
  }),
  'COUTURE/armored_couture': fit('weak', {
    strong: ['fashion_idol', 'war_military'],
    usable: ['court', 'historical', 'dark_fantasy', 'science_fiction'],
    fusion: ['wuxia', 'xianxia', 'cyberpunk', 'posthuman'],
    weak: ['romance', 'urban_life', 'real_professional']
  }),
  'COUTURE/ritual_couture': fit('weak', {
    strong: ['religious_ritual', 'fashion_idol'],
    usable: ['court', 'historical', 'mythic_epic', 'dark_fantasy', 'fantasy'],
    fusion: ['xianxia', 'surreal', 'horror'],
    weak: ['urban_life', 'real_professional', 'wasteland']
  }),
  'COUTURE/red_carpet_celebrity': fit('weak', {
    strong: ['fashion_idol', 'urban_life'],
    usable: ['romance', 'adult', 'court', 'noir_crime'],
    fusion: ['cyberpunk', 'surreal', 'dark_fantasy'],
    weak: ['wuxia', 'xianxia', 'wasteland', 'war_military']
  }),
  'COUTURE/experimental_material': fit('weak', {
    strong: ['fashion_idol', 'science_fiction', 'surreal'],
    usable: ['cyberpunk', 'posthuman', 'biopunk', 'adult'],
    fusion: ['dark_fantasy', 'body_horror', 'abstract'],
    weak: ['historical', 'court', 'wuxia', 'xianxia']
  }),
  'STREET/hiphop_sportswear': fit('weak', {
    strong: ['urban_life', 'fashion_idol'],
    usable: ['romance', 'noir_crime', 'adult'],
    fusion: ['cyberpunk', 'wasteland'],
    weak: ['court', 'historical', 'wuxia', 'xianxia']
  }),
  'STREET/skate_punk_diy': fit('weak', {
    strong: ['urban_life'],
    usable: ['fashion_idol', 'noir_crime', 'adventure', 'wasteland'],
    fusion: ['cyberpunk', 'post_apocalyptic', 'surreal'],
    weak: ['court', 'historical', 'xianxia']
  }),
  'STREET/y2k_pop_street': fit('weak', {
    strong: ['fashion_idol', 'urban_life'],
    usable: ['romance', 'adult', 'cyberpunk'],
    fusion: ['science_fiction', 'surreal'],
    weak: ['historical', 'court', 'wuxia', 'xianxia', 'wasteland']
  }),
  'STREET/nightlife_access': fit('weak', {
    strong: ['urban_life', 'adult'],
    usable: ['fashion_idol', 'romance', 'noir_crime', 'cyberpunk'],
    fusion: ['surreal', 'science_fiction', 'horror'],
    weak: ['historical', 'court', 'wuxia', 'xianxia']
  }),
  'STREET/techwear_urban': fit('weak', {
    strong: ['urban_life', 'cyberpunk'],
    usable: ['science_fiction', 'fashion_idol', 'real_professional', 'adventure'],
    fusion: ['wasteland', 'posthuman', 'war_military'],
    weak: ['court', 'historical', 'romance', 'xianxia']
  }),
  'STREET/japanese_street_snap': fit('weak', {
    strong: ['fashion_idol', 'urban_life'],
    usable: ['romance', 'adult', 'surreal'],
    fusion: ['cyberpunk', 'fantasy'],
    weak: ['historical', 'court', 'wuxia', 'war_military']
  }),
  'STREET/commuter_normcore': fit('usable', {
    strong: ['urban_life', 'real_professional'],
    usable: ['romance', 'noir_crime', 'fashion_idol'],
    fusion: ['surreal', 'cyberpunk'],
    weak: ['historical', 'court', 'wuxia', 'xianxia', 'war_military']
  }),
  'STREET/influencer_street': fit('weak', {
    strong: ['fashion_idol', 'urban_life'],
    usable: ['romance', 'adult'],
    fusion: ['surreal', 'cyberpunk', 'fantasy'],
    weak: ['historical', 'court', 'wuxia', 'xianxia', 'war_military']
  }),
  'STREET/rave_electronic': fit('weak', {
    strong: ['urban_life', 'cyberpunk'],
    usable: ['fashion_idol', 'adult', 'science_fiction', 'surreal'],
    fusion: ['posthuman', 'religious_ritual', 'horror'],
    weak: ['historical', 'court', 'wuxia', 'xianxia']
  }),
  'STREET/workwear_utility': fit('weak', {
    strong: ['urban_life', 'real_professional'],
    usable: ['fashion_idol', 'adventure', 'wasteland', 'war_military'],
    fusion: ['cyberpunk', 'science_fiction', 'post_apocalyptic'],
    weak: ['court', 'romance', 'xianxia']
  }),
  'MECHANICAL/robot_skeleton': fit('weak', {
    strong: ['science_fiction', 'posthuman'],
    usable: ['cyberpunk', 'war_military'],
    fusion: ['body_horror', 'surreal'],
    weak: ['historical', 'court', 'wuxia', 'xianxia', 'romance']
  }),
  'MECHANICAL/prosthetic_limb': fit('weak', {
    strong: ['posthuman', 'science_fiction', 'medical'],
    usable: ['real_professional', 'war_military', 'cyberpunk'],
    fusion: ['body_horror', 'wasteland'],
    weak: ['historical', 'court', 'wuxia', 'xianxia']
  }),
  'MECHANICAL/joint_actuator': fit('weak', {
    strong: ['science_fiction', 'posthuman'],
    usable: ['cyberpunk', 'war_military', 'real_professional'],
    fusion: ['body_horror', 'wasteland'],
    weak: ['historical', 'court', 'wuxia', 'xianxia', 'romance']
  }),
  'MECHANICAL/metal_shell': fit('weak', {
    strong: ['science_fiction', 'posthuman'],
    usable: ['cyberpunk', 'war_military', 'wasteland', 'fashion_idol'],
    fusion: ['body_horror', 'surreal'],
    weak: ['historical', 'court', 'wuxia', 'xianxia']
  }),
  'MECHANICAL/industrial_frame': fit('weak', {
    strong: ['science_fiction', 'real_professional'],
    usable: ['war_military', 'wasteland', 'cyberpunk'],
    fusion: ['post_apocalyptic', 'posthuman'],
    weak: ['court', 'romance', 'xianxia']
  }),
  'MECHANICAL/maintenance_module': fit('weak', {
    strong: ['real_professional', 'science_fiction'],
    usable: ['cyberpunk', 'wasteland', 'war_military', 'posthuman'],
    fusion: ['romance', 'surreal'],
    weak: ['court', 'historical', 'xianxia']
  }),
  'MECHANICAL/synthetic_face': fit('weak', {
    strong: ['posthuman', 'science_fiction'],
    usable: ['cyberpunk', 'surreal', 'romance', 'fashion_idol'],
    fusion: ['body_horror', 'boudoir_aesthetic'],
    weak: ['historical', 'court', 'wuxia']
  }),
  'MECHANICAL/power_core': fit('weak', {
    strong: ['science_fiction', 'posthuman'],
    usable: ['cyberpunk', 'wasteland', 'war_military'],
    fusion: ['body_horror', 'fantasy', 'dark_fantasy'],
    weak: ['court', 'romance', 'wuxia', 'xianxia']
  }),
  'MECHANICAL/machine_life_sign': fit('usable', {
    strong: ['posthuman', 'science_fiction'],
    usable: ['romance', 'urban_life', 'real_professional', 'cyberpunk'],
    fusion: ['surreal', 'wasteland', 'body_horror'],
    weak: ['historical', 'court', 'xianxia']
  }),
  'MECHANICAL/machine_rule': fit('usable', {
    strong: ['science_fiction', 'posthuman'],
    usable: ['cyberpunk', 'real_professional', 'war_military', 'wasteland'],
    fusion: ['surreal', 'body_horror'],
    weak: ['court', 'historical', 'wuxia', 'xianxia']
  }),
  'ORGANIC/bone_shell': fit('weak', {
    strong: ['fantasy', 'dark_fantasy', 'body_horror'],
    usable: ['mythic_epic', 'xianxia', 'war_military', 'creature'],
    fusion: ['science_fiction', 'fashion_idol'],
    weak: ['real_professional', 'urban_life', 'romance']
  }),
  'ORGANIC/membrane_layer': fit('weak', {
    strong: ['biopunk', 'body_horror', 'fantasy'],
    usable: ['science_fiction', 'xianxia', 'surreal', 'adult'],
    fusion: ['posthuman', 'dark_fantasy'],
    weak: ['real_professional', 'court']
  }),
  'ORGANIC/mycelium_spore': fit('weak', {
    strong: ['ecological', 'fantasy'],
    usable: ['biopunk', 'dark_fantasy', 'mythic_epic', 'xianxia'],
    fusion: ['horror', 'science_fiction'],
    weak: ['urban_life', 'real_professional']
  }),
  'ORGANIC/insect_chitin': fit('weak', {
    strong: ['fantasy', 'biopunk', 'body_horror'],
    usable: ['science_fiction', 'dark_fantasy', 'war_military', 'creature'],
    fusion: ['xianxia', 'fashion_idol'],
    weak: ['romance', 'court']
  }),
  'ORGANIC/plant_graft': fit('weak', {
    strong: ['ecological', 'fantasy'],
    usable: ['xianxia', 'mythic_epic', 'biopunk', 'dark_fantasy'],
    fusion: ['science_fiction', 'romance'],
    weak: ['war_military', 'real_professional']
  }),
  'ORGANIC/symbiotic_mantle': fit('weak', {
    strong: ['biopunk', 'fantasy', 'ecological'],
    usable: ['posthuman', 'body_horror', 'xianxia', 'dark_fantasy'],
    fusion: ['science_fiction', 'surreal'],
    weak: ['urban_life', 'real_professional']
  }),
  'ORGANIC/aquatic_adaptation': fit('weak', {
    strong: ['fantasy', 'ecological'],
    usable: ['science_fiction', 'xianxia', 'mythic_epic', 'biopunk', 'creature'],
    fusion: ['romance', 'surreal'],
    weak: ['real_professional', 'court']
  }),
  'ORGANIC/parasitic_cord': fit('weak', {
    strong: ['body_horror', 'biopunk', 'horror'],
    usable: ['dark_fantasy', 'posthuman', 'science_fiction'],
    fusion: ['surreal', 'xianxia'],
    weak: ['romance', 'urban_life', 'fashion_idol']
  }),
  'ORGANIC/mineral_biology': fit('weak', {
    strong: ['fantasy', 'surreal', 'ecological'],
    usable: ['mythic_epic', 'xianxia', 'dark_fantasy', 'science_fiction'],
    fusion: ['body_horror'],
    weak: ['real_professional', 'urban_life']
  }),
  'ORGANIC/animal_hybrid': fit('weak', {
    strong: ['fantasy', 'creature'],
    usable: ['mythic_epic', 'xianxia', 'ecological', 'romance'],
    fusion: ['body_horror', 'fashion_idol'],
    weak: ['real_professional', 'war_military']
  }),
  'MYTHIC/animalization_channel': fit('weak', {
    strong: ['fantasy', 'creature'],
    usable: ['mythic_epic', 'xianxia', 'dark_fantasy', 'romance'],
    fusion: ['fashion_idol', 'body_horror'],
    weak: ['real_professional', 'science_fiction', 'urban_life']
  }),
  'MYTHIC/horn_crown': fit('weak', {
    strong: ['fantasy', 'mythic_epic', 'dark_fantasy'],
    usable: ['xianxia', 'court', 'religious_ritual', 'creature'],
    fusion: ['fashion_idol', 'surreal', 'romance'],
    weak: ['real_professional', 'urban_life', 'science_fiction']
  }),
  'MYTHIC/scale_feather_fur': fit('weak', {
    strong: ['fantasy', 'creature'],
    usable: ['mythic_epic', 'xianxia', 'dark_fantasy', 'fashion_idol'],
    fusion: ['body_horror', 'romance'],
    weak: ['real_professional', 'urban_life']
  }),
  'MYTHIC/sacred_stigma': fit('weak', {
    strong: ['religious_ritual', 'mythic_epic', 'fantasy'],
    usable: ['xianxia', 'dark_fantasy', 'court', 'romance'],
    fusion: ['surreal', 'body_horror', 'science_fiction'],
    weak: ['urban_life', 'real_professional']
  }),
  'MYTHIC/demonic_body': fit('weak', {
    strong: ['dark_fantasy', 'horror', 'fantasy'],
    usable: ['body_horror', 'mythic_epic', 'creature'],
    fusion: ['xianxia', 'surreal', 'romance'],
    weak: ['real_professional', 'urban_life', 'court']
  }),
  'MYTHIC/yokai_trace': fit('weak', {
    strong: ['fantasy', 'creature'],
    usable: ['xianxia', 'mythic_epic', 'dark_fantasy', 'romance'],
    fusion: ['urban_life', 'surreal', 'fashion_idol'],
    weak: ['real_professional', 'science_fiction', 'war_military']
  }),
  'MYTHIC/semi_divine': fit('weak', {
    strong: ['mythic_epic', 'fantasy', 'religious_ritual'],
    usable: ['xianxia', 'court', 'dark_fantasy', 'romance'],
    fusion: ['surreal', 'science_fiction'],
    weak: ['real_professional', 'urban_life', 'wasteland']
  }),
  'MYTHIC/spirit_body': fit('weak', {
    strong: ['fantasy', 'horror', 'surreal'],
    usable: ['dark_fantasy', 'religious_ritual', 'xianxia', 'psychological'],
    fusion: ['romance', 'urban_life'],
    weak: ['real_professional', 'war_military', 'science_fiction']
  }),
  'MYTHIC/mythic_prophecy': fit('usable', {
    strong: ['mythic_epic', 'religious_ritual', 'fantasy'],
    usable: ['xianxia', 'dark_fantasy', 'romance', 'court', 'historical'],
    fusion: ['surreal', 'science_fiction'],
    weak: ['real_professional', 'urban_life']
  }),
  'MYTHIC/liminal_beauty': fit('usable', {
    strong: ['fantasy', 'surreal', 'romance'],
    usable: ['xianxia', 'dark_fantasy', 'fashion_idol', 'creature', 'boudoir_aesthetic'],
    fusion: ['body_horror', 'horror'],
    weak: ['real_professional', 'war_military']
  }),
  'PARASITIC/infection_boundary': fit('weak', {
    strong: ['body_horror', 'horror', 'biopunk'],
    usable: ['medical', 'science_fiction', 'dark_fantasy', 'posthuman'],
    fusion: ['real_professional', 'surreal'],
    weak: ['romance', 'fashion_idol', 'court']
  }),
  'PARASITIC/host_relation': fit('weak', {
    strong: ['body_horror', 'biopunk'],
    usable: ['dark_fantasy', 'science_fiction', 'posthuman', 'horror'],
    fusion: ['romance', 'surreal', 'xianxia'],
    weak: ['urban_life', 'fashion_idol', 'court']
  }),
  'PARASITIC/swelling_pressure': fit('weak', {
    strong: ['body_horror', 'biopunk'],
    usable: ['horror', 'dark_fantasy', 'science_fiction', 'posthuman'],
    fusion: ['surreal', 'fashion_idol'],
    weak: ['romance', 'court', 'real_professional']
  }),
  'PARASITIC/fissure_split': fit('weak', {
    strong: ['body_horror', 'surreal'],
    usable: ['horror', 'dark_fantasy', 'biopunk', 'posthuman'],
    fusion: ['psychological', 'science_fiction', 'xianxia'],
    weak: ['romance', 'court', 'urban_life']
  }),
  'PARASITIC/uncontrolled_growth': fit('weak', {
    strong: ['body_horror', 'biopunk', 'horror'],
    usable: ['dark_fantasy', 'ecological', 'science_fiction'],
    fusion: ['xianxia', 'surreal'],
    weak: ['romance', 'real_professional', 'fashion_idol']
  }),
  'PARASITIC/corruption_surface': fit('weak', {
    strong: ['horror', 'body_horror', 'dark_fantasy'],
    usable: ['biopunk', 'wasteland', 'post_apocalyptic', 'surreal'],
    fusion: ['xianxia', 'religious_ritual'],
    weak: ['romance', 'fashion_idol', 'urban_life']
  }),
  'PARASITIC/medical_control': fit('weak', {
    strong: ['medical', 'real_professional'],
    usable: ['biopunk', 'science_fiction', 'body_horror', 'posthuman'],
    fusion: ['horror', 'dark_fantasy', 'surreal'],
    weak: ['wuxia', 'xianxia', 'court', 'romance']
  }),
  'PARASITIC/ritual_contamination': fit('weak', {
    strong: ['religious_ritual', 'dark_fantasy', 'horror'],
    usable: ['body_horror', 'mythic_epic', 'xianxia', 'fantasy'],
    fusion: ['science_fiction', 'medical', 'surreal'],
    weak: ['urban_life', 'real_professional', 'fashion_idol']
  }),
  'PARASITIC/symbiotic_equipment': fit('weak', {
    strong: ['biopunk', 'posthuman', 'science_fiction'],
    usable: ['body_horror', 'medical', 'real_professional', 'wasteland'],
    fusion: ['dark_fantasy', 'surreal'],
    weak: ['court', 'romance', 'xianxia']
  }),
  'PARASITIC/identity_corrosion': fit('weak', {
    strong: ['body_horror', 'psychological', 'horror'],
    usable: ['dark_fantasy', 'biopunk', 'science_fiction', 'posthuman', 'noir_crime'],
    fusion: ['romance', 'surreal'],
    weak: ['court', 'fashion_idol', 'wuxia']
  }),
  'PARASITIC/metamorphic_aftercare': fit('usable', {
    strong: ['medical', 'biopunk'],
    usable: ['real_professional', 'body_horror', 'science_fiction', 'posthuman', 'urban_life'],
    fusion: ['romance', 'dark_fantasy', 'surreal'],
    weak: ['court', 'xianxia', 'war_military']
  }),
  'SURREAL/dream_body': fit('weak', {
    strong: ['surreal', 'psychological'],
    usable: ['romance', 'horror', 'dark_fantasy', 'fantasy'],
    fusion: ['xianxia', 'science_fiction', 'urban_life'],
    weak: ['real_professional', 'war_military', 'court']
  }),
  'SURREAL/dimension_rift': fit('weak', {
    strong: ['surreal', 'science_fiction'],
    usable: ['fantasy', 'dark_fantasy', 'posthuman', 'xianxia'],
    fusion: ['body_horror', 'war_military'],
    weak: ['real_professional', 'romance', 'court']
  }),
  'SURREAL/ghost_transparency': fit('weak', {
    strong: ['surreal', 'horror'],
    usable: ['dark_fantasy', 'psychological', 'romance', 'fantasy'],
    fusion: ['xianxia', 'science_fiction'],
    weak: ['real_professional', 'war_military']
  }),
  'SURREAL/mirror_dislocation': fit('usable', {
    strong: ['surreal', 'psychological'],
    usable: ['horror', 'romance', 'noir_crime', 'fashion_idol'],
    fusion: ['science_fiction', 'dark_fantasy'],
    weak: ['war_military', 'wasteland']
  }),
  'SURREAL/void_absence': fit('weak', {
    strong: ['surreal', 'abstract', 'cosmic_horror'],
    usable: ['dark_fantasy', 'horror', 'psychological', 'posthuman'],
    fusion: ['romance', 'science_fiction', 'xianxia'],
    weak: ['real_professional', 'urban_life', 'court']
  }),
  'SURREAL/astral_skin': fit('weak', {
    strong: ['surreal', 'mythic_epic', 'space_opera'],
    usable: ['fantasy', 'xianxia', 'science_fiction', 'posthuman'],
    fusion: ['romance', 'fashion_idol'],
    weak: ['real_professional', 'wasteland']
  }),
  'SURREAL/symbolic_body': fit('usable', {
    strong: ['surreal', 'abstract'],
    usable: ['religious_ritual', 'science_fiction', 'fashion_idol', 'real_professional'],
    fusion: ['dark_fantasy', 'xianxia', 'body_horror'],
    weak: ['romance', 'wasteland']
  }),
  'SURREAL/nonphysical_presence': fit('usable', {
    strong: ['surreal', 'psychological'],
    usable: ['romance', 'horror', 'science_fiction', 'dark_fantasy'],
    fusion: ['posthuman', 'xianxia', 'urban_life'],
    weak: ['war_military', 'court']
  }),
  'SURREAL/time_anomaly': fit('usable', {
    strong: ['surreal', 'science_fiction'],
    usable: ['historical', 'romance', 'psychological', 'fantasy'],
    fusion: ['xianxia', 'posthuman', 'dark_fantasy'],
    weak: ['real_professional', 'wasteland']
  }),
  'SURREAL/surreal_rule': fit('usable', {
    strong: ['surreal', 'abstract'],
    usable: ['fantasy', 'science_fiction', 'dark_fantasy', 'psychological', 'xianxia'],
    fusion: ['romance', 'fashion_idol', 'body_horror'],
    weak: ['real_professional', 'wasteland']
  }),
  'WASTELAND/repeated_repair': fit('usable', {
    strong: ['wasteland'],
    usable: ['post_apocalyptic', 'real_professional', 'urban_life', 'romance'],
    fusion: ['historical', 'fashion_idol', 'dark_fantasy'],
    weak: ['court', 'xianxia', 'space_opera']
  }),
  'WASTELAND/salvage_patchwork': fit('weak', {
    strong: ['wasteland', 'post_apocalyptic'],
    usable: ['real_professional', 'adventure', 'war_military', 'ecological'],
    fusion: ['cyberpunk', 'science_fiction', 'fashion_idol'],
    weak: ['court', 'romance', 'xianxia']
  }),
  'WASTELAND/dust_weathering': fit('usable', {
    strong: ['wasteland', 'ecological'],
    usable: ['adventure', 'war_military', 'real_professional', 'historical'],
    fusion: ['romance', 'fashion_idol', 'dark_fantasy'],
    weak: ['court', 'cyberpunk', 'xianxia']
  }),
  'WASTELAND/scarcity_load': fit('weak', {
    strong: ['wasteland', 'post_apocalyptic'],
    usable: ['adventure', 'war_military', 'real_professional', 'ecological'],
    fusion: ['science_fiction', 'romance'],
    weak: ['court', 'fashion_idol', 'xianxia']
  }),
  'WASTELAND/improvised_armor': fit('weak', {
    strong: ['wasteland', 'war_military'],
    usable: ['post_apocalyptic', 'adventure', 'science_fiction'],
    fusion: ['cyberpunk', 'wuxia', 'dark_fantasy'],
    weak: ['romance', 'court', 'fashion_idol']
  }),
  'WASTELAND/faded_identity': fit('usable', {
    strong: ['wasteland', 'post_apocalyptic'],
    usable: ['noir_crime', 'war_military', 'real_professional', 'romance'],
    fusion: ['psychological', 'dark_fantasy', 'surreal'],
    weak: ['court', 'xianxia', 'fashion_idol']
  }),
  'WASTELAND/portable_shelter': fit('usable', {
    strong: ['wasteland', 'adventure'],
    usable: ['post_apocalyptic', 'ecological', 'real_professional', 'romance'],
    fusion: ['fashion_idol', 'dark_fantasy'],
    weak: ['court', 'cyberpunk', 'xianxia']
  }),
  'WASTELAND/rusted_hardware': fit('weak', {
    strong: ['wasteland', 'post_apocalyptic'],
    usable: ['real_professional', 'war_military', 'science_fiction', 'cyberpunk'],
    fusion: ['dark_fantasy', 'fashion_idol'],
    weak: ['court', 'romance', 'xianxia']
  }),
  'WASTELAND/survival_tool': fit('usable', {
    strong: ['wasteland', 'adventure'],
    usable: ['post_apocalyptic', 'real_professional', 'war_military', 'ecological'],
    fusion: ['science_fiction', 'wuxia', 'romance'],
    weak: ['court', 'fashion_idol', 'xianxia']
  }),
  'WASTELAND/tribal_reuse': fit('weak', {
    strong: ['wasteland', 'post_apocalyptic'],
    usable: ['ecological', 'religious_ritual', 'adventure', 'historical'],
    fusion: ['dark_fantasy', 'science_fiction', 'fashion_idol'],
    weak: ['real_professional', 'urban_life', 'court']
  })
};

const familyRealityTags: Record<string, string[]> = {
  'MINIMAL/clean_line': ['realistic', 'physical', 'design_protocol', 'silhouette_control'],
  'MINIMAL/neutral_material': ['realistic', 'physical', 'material_texture', 'low_reflection'],
  'MINIMAL/single_accent': ['realistic', 'physical', 'symbolic', 'single_focus'],
  'MINIMAL/precise_fit': ['realistic', 'physical', 'tailoring', 'body_fit'],
  'MINIMAL/quiet_luxury': ['realistic', 'physical', 'luxury_material', 'status_signal'],
  'MINIMAL/ordinary_object': ['realistic', 'physical', 'daily_object', 'prop_evidence'],
  'MINIMAL/soft_asymmetry': ['realistic', 'physical', 'individual_trace', 'wear_evidence'],
  'MINIMAL/low_drama_pose': ['realistic', 'physical', 'natural_pose', 'body_gravity'],
  'MINIMAL/maintenance_care': ['realistic', 'physical', 'maintenance_trace', 'wear_evidence'],
  'MINIMAL/negative_space': ['realistic', 'physical', 'composition_protocol', 'negative_space'],
  'FUNCTION/medical_care': ['realistic', 'physical', 'professional', 'medical', 'care_workflow'],
  'FUNCTION/archive_bureaucracy': ['realistic', 'physical', 'professional', 'institutional', 'paperwork'],
  'FUNCTION/service_labor': ['realistic', 'physical', 'professional', 'service_labor', 'social'],
  'FUNCTION/lab_research': ['realistic', 'physical', 'professional', 'laboratory', 'controlled_anomaly'],
  'FUNCTION/corporate_office': ['realistic', 'physical', 'professional', 'corporate', 'workflow'],
  'FUNCTION/industrial_maintenance': ['realistic', 'physical', 'professional', 'industrial_labor', 'maintenance'],
  'FUNCTION/field_operator': ['realistic', 'physical', 'professional', 'fieldwork', 'mobility'],
  'FUNCTION/education_academic': ['realistic', 'physical', 'professional', 'education', 'knowledge_work'],
  'FUNCTION/law_finance': ['realistic', 'physical', 'professional', 'legal_financial', 'contract'],
  'FUNCTION/death_care': ['realistic', 'physical', 'professional', 'death_care', 'ritual_service'],
  'TACTICAL/modular_loadout': ['realistic', 'physical', 'combat_equipment', 'loadout', 'mission_storage'],
  'TACTICAL/concealed_weapon': ['realistic', 'physical', 'combat_equipment', 'concealed_function', 'delayed_threat'],
  'TACTICAL/armor_protection': ['realistic', 'physical', 'combat_equipment', 'armor', 'protection'],
  'TACTICAL/command_rank': ['realistic', 'physical', 'combat_equipment', 'institutional_rank', 'command'],
  'TACTICAL/assassin_light': ['stylized', 'physical', 'combat_equipment', 'stealth', 'concealed_identity'],
  'TACTICAL/duel_ceremony': ['stylized', 'physical', 'combat_equipment', 'duel_etiquette', 'honor_code'],
  'TACTICAL/riot_control': ['realistic', 'physical', 'combat_equipment', 'crowd_control', 'institutional'],
  'TACTICAL/survival_combat': ['realistic', 'physical', 'combat_equipment', 'survival', 'low_resource'],
  'TACTICAL/training_body': ['realistic', 'physical', 'combat_equipment', 'training', 'body_discipline'],
  'TACTICAL/future_tactics': ['semi_surreal', 'technological', 'combat_equipment', 'future_interface', 'mission_system'],
  'RITUAL/sacred_geometry': ['stylized', 'physical', 'ritual', 'symbolic', 'sacred_geometry'],
  'RITUAL/vestment_hierarchy': ['stylized', 'physical', 'ritual', 'vestment', 'institutional_rank'],
  'RITUAL/reliquary_vessel': ['stylized', 'physical', 'ritual', 'sacred_object', 'container'],
  'RITUAL/taboo_seal': ['stylized', 'physical', 'ritual', 'taboo', 'sealed_danger'],
  'RITUAL/austere_penitence': ['realistic', 'physical', 'ritual', 'penitence', 'material_restraint'],
  'RITUAL/oracle_veil': ['semi_surreal', 'physical', 'ritual', 'oracle', 'veil_boundary'],
  'RITUAL/procession_order': ['stylized', 'physical', 'ritual', 'procession', 'public_order'],
  'RITUAL/clean_sacrifice': ['stylized', 'physical', 'ritual', 'bloodless_offering', 'symbolic_exchange'],
  'RITUAL/order_rank': ['realistic', 'physical', 'ritual', 'institutional_rank', 'duty_symbol'],
  'RITUAL/dark_ceremony': ['stylized', 'physical', 'ritual', 'dark_ceremony', 'contained_darkness'],
  'ARISTOCRATIC/lineage_code': ['realistic', 'physical', 'aristocratic', 'lineage_code', 'fictional_heraldry'],
  'ARISTOCRATIC/inheritance_pressure': ['realistic', 'physical', 'aristocratic', 'inheritance', 'heirloom_object'],
  'ARISTOCRATIC/court_body_law': ['realistic', 'physical', 'aristocratic', 'court_etiquette', 'body_discipline'],
  'ARISTOCRATIC/old_money_restraint': ['realistic', 'physical', 'aristocratic', 'old_money', 'status_restraint'],
  'ARISTOCRATIC/court_institution': ['realistic', 'physical', 'aristocratic', 'court_institution', 'bureaucratic_power'],
  'ARISTOCRATIC/servant_class_contrast': ['realistic', 'physical', 'aristocratic', 'service_labor', 'class_distance'],
  'ARISTOCRATIC/dynastic_decay': ['realistic', 'physical', 'aristocratic', 'dynastic_decay', 'worn_luxury'],
  'ARISTOCRATIC/ceremonial_jewelry': ['realistic', 'physical', 'aristocratic', 'ceremonial_jewelry', 'rank_ornament'],
  'ARISTOCRATIC/social_ritual': ['realistic', 'physical', 'aristocratic', 'social_ritual', 'reputation_surface'],
  'ARISTOCRATIC/dark_aristocracy': ['stylized', 'physical', 'aristocratic', 'dark_lineage', 'contained_supernatural'],
  'TECH/visible_interface': ['semi_surreal', 'technological', 'speculative', 'visible_interface', 'maintenance_boundary'],
  'TECH/serial_identity': ['semi_surreal', 'technological', 'speculative', 'serial_identity', 'system_record'],
  'TECH/wearable_device': ['realistic', 'technological', 'speculative', 'wearable_device', 'removable_tool'],
  'TECH/soft_exosuit': ['semi_surreal', 'technological', 'speculative', 'soft_exosuit', 'assistive_device'],
  'TECH/lab_containment': ['semi_surreal', 'technological', 'speculative', 'lab_containment', 'controlled_anomaly'],
  'TECH/data_overlay': ['semi_surreal', 'technological', 'speculative', 'data_overlay', 'interface_layer'],
  'TECH/maintenance_panel': ['realistic', 'technological', 'speculative', 'maintenance_panel', 'repair_trace'],
  'TECH/medical_interface': ['realistic', 'technological', 'medical', 'clinical_interface', 'body_support'],
  'TECH/drone_companion': ['semi_surreal', 'technological', 'speculative', 'drone_companion', 'subordinate_device'],
  'TECH/lowtech_hack': ['realistic', 'technological', 'speculative', 'lowtech_hack', 'salvaged_device'],
  'COUTURE/architectural_volume': ['realistic', 'physical', 'fashion_system', 'costume_structure', 'architectural_silhouette'],
  'COUTURE/runway_presentation': ['realistic', 'physical', 'fashion_system', 'display_pose', 'media_gaze'],
  'COUTURE/atelier_process': ['realistic', 'physical', 'fashion_system', 'atelier_workflow', 'making_trace'],
  'COUTURE/surface_craft': ['realistic', 'physical', 'fashion_system', 'handcraft_surface', 'ornament_density'],
  'COUTURE/body_discipline': ['realistic', 'physical', 'fashion_system', 'body_control', 'tailoring_pressure'],
  'COUTURE/transparent_boundary': ['stylized', 'physical', 'fashion_system', 'transparent_layer', 'skin_boundary'],
  'COUTURE/armored_couture': ['stylized', 'physical', 'fashion_system', 'armor_translation', 'protection'],
  'COUTURE/ritual_couture': ['stylized', 'physical', 'fashion_system', 'ritual', 'symbolic'],
  'COUTURE/red_carpet_celebrity': ['realistic', 'physical', 'fashion_system', 'celebrity_media', 'event_gown'],
  'COUTURE/experimental_material': ['semi_surreal', 'physical', 'fashion_system', 'experimental_material', 'speculative_surface'],
  'STREET/hiphop_sportswear': ['realistic', 'physical', 'urban_fashion', 'music_culture', 'sportswear'],
  'STREET/skate_punk_diy': ['realistic', 'physical', 'urban_fashion', 'diy_wear', 'movement_wear'],
  'STREET/y2k_pop_street': ['realistic', 'physical', 'urban_fashion', 'pop_culture', 'gloss_material'],
  'STREET/nightlife_access': ['realistic', 'physical', 'urban_fashion', 'nightlife', 'social_access'],
  'STREET/techwear_urban': ['realistic', 'physical', 'urban_fashion', 'technical_wear', 'weather_protection'],
  'STREET/japanese_street_snap': ['realistic', 'physical', 'urban_fashion', 'street_snap', 'pop_subculture'],
  'STREET/commuter_normcore': ['realistic', 'physical', 'urban_fashion', 'daily_life', 'commute'],
  'STREET/influencer_street': ['realistic', 'physical', 'urban_fashion', 'social_media', 'camera_pose'],
  'STREET/rave_electronic': ['stylized', 'physical', 'urban_fashion', 'electronic_music', 'luminous_material'],
  'STREET/workwear_utility': ['realistic', 'physical', 'urban_fashion', 'workwear', 'utility_storage'],
  'MECHANICAL/robot_skeleton': ['semi_surreal', 'technological', 'mechanical', 'physical', 'robot_skeleton', 'load_bearing_axis'],
  'MECHANICAL/prosthetic_limb': ['semi_surreal', 'technological', 'mechanical', 'physical', 'prosthetic', 'body_interface'],
  'MECHANICAL/joint_actuator': ['semi_surreal', 'technological', 'mechanical', 'physical', 'joint_actuator', 'motion_logic'],
  'MECHANICAL/metal_shell': ['semi_surreal', 'technological', 'mechanical', 'physical', 'metal_shell', 'surface_wear'],
  'MECHANICAL/industrial_frame': ['realistic', 'technological', 'mechanical', 'physical', 'industrial_frame', 'load_bearing_structure'],
  'MECHANICAL/maintenance_module': ['realistic', 'technological', 'mechanical', 'physical', 'maintenance', 'repair_trace'],
  'MECHANICAL/synthetic_face': ['semi_surreal', 'technological', 'mechanical', 'synthetic_face', 'identity_boundary'],
  'MECHANICAL/power_core': ['semi_surreal', 'technological', 'mechanical', 'physical', 'power_core', 'energy_source'],
  'MECHANICAL/machine_life_sign': ['semi_surreal', 'technological', 'mechanical', 'personhood', 'life_sign'],
  'MECHANICAL/machine_rule': ['semi_surreal', 'technological', 'mechanical', 'design_protocol', 'constraint_rule'],
  'ORGANIC/bone_shell': ['semi_surreal', 'biological', 'organic', 'physical', 'bone_shell', 'protective_layer'],
  'ORGANIC/membrane_layer': ['semi_surreal', 'biological', 'organic', 'membrane', 'wet_boundary'],
  'ORGANIC/mycelium_spore': ['semi_surreal', 'biological', 'organic', 'fungal', 'ecological_network'],
  'ORGANIC/insect_chitin': ['semi_surreal', 'biological', 'organic', 'chitin', 'segmented_body'],
  'ORGANIC/plant_graft': ['semi_surreal', 'biological', 'organic', 'plant_graft', 'ecological_growth'],
  'ORGANIC/symbiotic_mantle': ['semi_surreal', 'biological', 'organic', 'symbiosis', 'living_cover'],
  'ORGANIC/aquatic_adaptation': ['semi_surreal', 'biological', 'organic', 'aquatic', 'wet_boundary'],
  'ORGANIC/parasitic_cord': ['non_realist', 'biological', 'organic', 'parasitic', 'body_horror'],
  'ORGANIC/mineral_biology': ['semi_surreal', 'biological', 'organic', 'mineral_growth', 'geological_life'],
  'ORGANIC/animal_hybrid': ['semi_surreal', 'biological', 'organic', 'animal_hybrid', 'creature_body'],
  'MYTHIC/animalization_channel': ['stylized', 'physical', 'mythic', 'creature_trait', 'human_readability'],
  'MYTHIC/horn_crown': ['semi_surreal', 'physical', 'mythic', 'horn_crown', 'head_silhouette'],
  'MYTHIC/scale_feather_fur': ['stylized', 'physical', 'mythic', 'local_material_trait', 'creature_surface'],
  'MYTHIC/sacred_stigma': ['semi_surreal', 'symbolic', 'mythic', 'sacred_stigma', 'divine_mark'],
  'MYTHIC/demonic_body': ['non_realist', 'mythic', 'body_horror', 'demonic_trait', 'contained_darkness'],
  'MYTHIC/yokai_trace': ['semi_surreal', 'mythic', 'creature_trait', 'yokai_boundary', 'human_readability'],
  'MYTHIC/semi_divine': ['semi_surreal', 'symbolic', 'mythic', 'divine_mark', 'lineage_trace'],
  'MYTHIC/spirit_body': ['non_realist', 'symbolic', 'mythic', 'spirit_presence', 'possession_trace'],
  'MYTHIC/mythic_prophecy': ['stylized', 'symbolic', 'mythic', 'prophecy_mark', 'fate_text'],
  'MYTHIC/liminal_beauty': ['semi_surreal', 'symbolic', 'mythic', 'liminal_identity', 'unstable_allure'],
  'PARASITIC/infection_boundary': ['semi_surreal', 'biological', 'body_horror', 'infection_boundary', 'quarantine_mark'],
  'PARASITIC/host_relation': ['non_realist', 'biological', 'body_horror', 'host_relation', 'attachment_point'],
  'PARASITIC/swelling_pressure': ['non_realist', 'biological', 'body_horror', 'internal_pressure', 'contained_volume'],
  'PARASITIC/fissure_split': ['non_realist', 'biological', 'body_horror', 'fissure_split', 'double_boundary'],
  'PARASITIC/uncontrolled_growth': ['non_realist', 'biological', 'body_horror', 'growth_anomaly', 'contained_growth'],
  'PARASITIC/corruption_surface': ['non_realist', 'biological', 'body_horror', 'corruption_surface', 'surface_decay'],
  'PARASITIC/medical_control': ['realistic', 'physical', 'medical', 'containment_protocol', 'clinical_control'],
  'PARASITIC/ritual_contamination': ['stylized', 'symbolic', 'ritual', 'contamination_taboo', 'sealed_danger'],
  'PARASITIC/symbiotic_equipment': ['semi_surreal', 'biological', 'technological', 'symbiotic_equipment', 'living_gear'],
  'PARASITIC/identity_corrosion': ['semi_surreal', 'symbolic', 'body_horror', 'identity_corrosion', 'renaming_mark'],
  'PARASITIC/metamorphic_aftercare': ['realistic', 'physical', 'medical', 'aftercare', 'adapted_life'],
  'SURREAL/dream_body': ['non_realist', 'surreal', 'dream', 'psychological', 'unstable_boundary'],
  'SURREAL/dimension_rift': ['non_realist', 'surreal', 'spatial_anomaly', 'body_strata', 'dimension_rift'],
  'SURREAL/ghost_transparency': ['non_realist', 'surreal', 'ghost_presence', 'transparent_boundary', 'visible_absence'],
  'SURREAL/mirror_dislocation': ['semi_surreal', 'symbolic', 'surreal', 'mirror_dislocation', 'split_self'],
  'SURREAL/void_absence': ['abstract', 'surreal', 'void', 'absence', 'negative_presence'],
  'SURREAL/astral_skin': ['non_realist', 'surreal', 'cosmic', 'astral_surface', 'symbolic_body'],
  'SURREAL/symbolic_body': ['stylized', 'symbolic', 'surreal', 'body_symbol', 'semantic_mark'],
  'SURREAL/nonphysical_presence': ['semi_surreal', 'symbolic', 'surreal', 'intangible_trace', 'presence_evidence'],
  'SURREAL/time_anomaly': ['semi_surreal', 'surreal', 'time_anomaly', 'temporal_strata', 'anachronism_control'],
  'SURREAL/surreal_rule': ['stylized', 'symbolic', 'design_protocol', 'surreal_rule', 'ontology_lock'],
  'WASTELAND/repeated_repair': ['realistic', 'physical', 'survival', 'repair_evidence', 'use_history'],
  'WASTELAND/salvage_patchwork': ['realistic', 'physical', 'survival', 'salvage_material', 'source_readable'],
  'WASTELAND/dust_weathering': ['realistic', 'physical', 'survival', 'weathering', 'environment_exposure'],
  'WASTELAND/scarcity_load': ['realistic', 'physical', 'survival', 'resource_priority', 'carry_logic'],
  'WASTELAND/improvised_armor': ['realistic', 'physical', 'survival', 'improvised_protection', 'low_resource'],
  'WASTELAND/faded_identity': ['realistic', 'physical', 'survival', 'faded_identity', 'institutional_remnant'],
  'WASTELAND/portable_shelter': ['realistic', 'physical', 'survival', 'portable_shelter', 'mobile_home'],
  'WASTELAND/rusted_hardware': ['realistic', 'physical', 'survival', 'rusted_hardware', 'lowtech_mechanic'],
  'WASTELAND/survival_tool': ['realistic', 'physical', 'survival', 'survival_tool', 'tool_priority'],
  'WASTELAND/tribal_reuse': ['stylized', 'physical', 'survival', 'fictional_group', 'post_collapse_community']
};

const familyEraDefaults: Record<string, string[]> = {
  'FUNCTION/archive_bureaucracy': ['early_modern', 'industrial', 'modern', 'contemporary', 'near_future'],
  'FUNCTION/corporate_office': ['modern', 'contemporary', 'near_future'],
  'FUNCTION/education_academic': ['early_modern', 'industrial', 'modern', 'contemporary', 'near_future'],
  'FUNCTION/law_finance': ['early_modern', 'industrial', 'modern', 'contemporary', 'near_future'],
  'FUNCTION/death_care': ['early_modern', 'industrial', 'modern', 'contemporary', 'near_future'],
  'TACTICAL/modular_loadout': ['industrial', 'modern', 'contemporary', 'near_future'],
  'TACTICAL/concealed_weapon': ['feudal', 'early_modern', 'industrial', 'modern', 'contemporary', 'near_future'],
  'TACTICAL/armor_protection': ['slave', 'feudal', 'early_modern', 'industrial', 'modern', 'contemporary', 'near_future'],
  'TACTICAL/command_rank': ['early_modern', 'industrial', 'modern', 'contemporary', 'near_future'],
  'TACTICAL/assassin_light': ['feudal', 'early_modern', 'industrial', 'modern', 'contemporary'],
  'TACTICAL/duel_ceremony': ['feudal', 'early_modern', 'industrial', 'modern', 'contemporary'],
  'TACTICAL/riot_control': ['industrial', 'modern', 'contemporary', 'near_future'],
  'TACTICAL/survival_combat': ['primitive', 'slave', 'feudal', 'early_modern', 'industrial', 'modern', 'contemporary', 'near_future'],
  'TACTICAL/training_body': ['slave', 'feudal', 'early_modern', 'industrial', 'modern', 'contemporary', 'near_future'],
  'TACTICAL/future_tactics': ['near_future', 'far_future'],
  'RITUAL/sacred_geometry': ['slave', 'feudal', 'early_modern', 'industrial', 'modern', 'contemporary', 'mythic'],
  'RITUAL/vestment_hierarchy': ['slave', 'feudal', 'early_modern', 'industrial', 'modern', 'contemporary', 'near_future', 'mythic'],
  'RITUAL/reliquary_vessel': ['slave', 'feudal', 'early_modern', 'industrial', 'modern', 'contemporary', 'mythic'],
  'RITUAL/taboo_seal': ['slave', 'feudal', 'early_modern', 'industrial', 'modern', 'contemporary', 'mythic'],
  'RITUAL/austere_penitence': ['primitive', 'slave', 'feudal', 'early_modern', 'industrial', 'modern', 'contemporary'],
  'RITUAL/oracle_veil': ['slave', 'feudal', 'early_modern', 'industrial', 'modern', 'contemporary', 'near_future', 'mythic'],
  'RITUAL/procession_order': ['slave', 'feudal', 'early_modern', 'industrial', 'modern', 'contemporary', 'mythic'],
  'RITUAL/clean_sacrifice': ['slave', 'feudal', 'early_modern', 'industrial', 'modern', 'contemporary', 'mythic'],
  'RITUAL/order_rank': ['slave', 'feudal', 'early_modern', 'industrial', 'modern', 'contemporary', 'mythic'],
  'RITUAL/dark_ceremony': ['slave', 'feudal', 'early_modern', 'industrial', 'modern', 'contemporary', 'mythic'],
  'ARISTOCRATIC/lineage_code': ['feudal', 'early_modern', 'industrial', 'modern', 'contemporary'],
  'ARISTOCRATIC/inheritance_pressure': ['feudal', 'early_modern', 'industrial', 'modern', 'contemporary'],
  'ARISTOCRATIC/court_body_law': ['feudal', 'early_modern', 'industrial', 'modern', 'contemporary'],
  'ARISTOCRATIC/old_money_restraint': ['industrial', 'modern', 'contemporary'],
  'ARISTOCRATIC/court_institution': ['feudal', 'early_modern', 'industrial', 'modern', 'contemporary'],
  'ARISTOCRATIC/servant_class_contrast': ['feudal', 'early_modern', 'industrial', 'modern', 'contemporary'],
  'ARISTOCRATIC/dynastic_decay': ['feudal', 'early_modern', 'industrial', 'modern', 'contemporary'],
  'ARISTOCRATIC/ceremonial_jewelry': ['feudal', 'early_modern', 'industrial', 'modern', 'contemporary'],
  'ARISTOCRATIC/social_ritual': ['early_modern', 'industrial', 'modern', 'contemporary'],
  'ARISTOCRATIC/dark_aristocracy': ['feudal', 'early_modern', 'industrial', 'modern', 'contemporary', 'mythic'],
  'TECH/visible_interface': ['modern', 'contemporary', 'near_future', 'far_future'],
  'TECH/serial_identity': ['industrial', 'modern', 'contemporary', 'near_future', 'far_future'],
  'TECH/wearable_device': ['modern', 'contemporary', 'near_future', 'far_future'],
  'TECH/soft_exosuit': ['modern', 'contemporary', 'near_future', 'far_future'],
  'TECH/lab_containment': ['modern', 'contemporary', 'near_future', 'far_future'],
  'TECH/data_overlay': ['contemporary', 'near_future', 'far_future'],
  'TECH/maintenance_panel': ['industrial', 'modern', 'contemporary', 'near_future', 'far_future'],
  'TECH/medical_interface': ['modern', 'contemporary', 'near_future', 'far_future'],
  'TECH/drone_companion': ['contemporary', 'near_future', 'far_future'],
  'TECH/lowtech_hack': ['industrial', 'modern', 'contemporary', 'near_future'],
  'COUTURE/architectural_volume': ['industrial', 'modern', 'contemporary', 'near_future'],
  'COUTURE/runway_presentation': ['modern', 'contemporary', 'near_future'],
  'COUTURE/atelier_process': ['industrial', 'modern', 'contemporary', 'near_future'],
  'COUTURE/surface_craft': ['slave', 'feudal', 'early_modern', 'industrial', 'modern', 'contemporary'],
  'COUTURE/body_discipline': ['early_modern', 'industrial', 'modern', 'contemporary'],
  'COUTURE/transparent_boundary': ['industrial', 'modern', 'contemporary', 'near_future'],
  'COUTURE/armored_couture': ['slave', 'feudal', 'early_modern', 'industrial', 'modern', 'contemporary', 'near_future', 'far_future'],
  'COUTURE/ritual_couture': ['slave', 'feudal', 'early_modern', 'industrial', 'modern', 'contemporary', 'mythic'],
  'COUTURE/red_carpet_celebrity': ['modern', 'contemporary'],
  'COUTURE/experimental_material': ['modern', 'contemporary', 'near_future', 'far_future'],
  'STREET/hiphop_sportswear': ['modern', 'contemporary'],
  'STREET/skate_punk_diy': ['modern', 'contemporary'],
  'STREET/y2k_pop_street': ['modern', 'contemporary'],
  'STREET/nightlife_access': ['modern', 'contemporary', 'near_future'],
  'STREET/techwear_urban': ['contemporary', 'near_future'],
  'STREET/japanese_street_snap': ['modern', 'contemporary'],
  'STREET/commuter_normcore': ['modern', 'contemporary', 'near_future'],
  'STREET/influencer_street': ['contemporary', 'near_future'],
  'STREET/rave_electronic': ['modern', 'contemporary', 'near_future'],
  'STREET/workwear_utility': ['industrial', 'modern', 'contemporary', 'near_future'],
  'MECHANICAL/robot_skeleton': ['industrial', 'modern', 'contemporary', 'near_future', 'far_future'],
  'MECHANICAL/prosthetic_limb': ['industrial', 'modern', 'contemporary', 'near_future', 'far_future'],
  'MECHANICAL/joint_actuator': ['industrial', 'modern', 'contemporary', 'near_future', 'far_future'],
  'MECHANICAL/metal_shell': ['industrial', 'modern', 'contemporary', 'near_future', 'far_future'],
  'MECHANICAL/industrial_frame': ['industrial', 'modern', 'contemporary', 'near_future'],
  'MECHANICAL/maintenance_module': ['industrial', 'modern', 'contemporary', 'near_future', 'far_future'],
  'MECHANICAL/synthetic_face': ['modern', 'contemporary', 'near_future', 'far_future'],
  'MECHANICAL/power_core': ['industrial', 'modern', 'contemporary', 'near_future', 'far_future'],
  'MECHANICAL/machine_life_sign': ['industrial', 'modern', 'contemporary', 'near_future', 'far_future'],
  'MECHANICAL/machine_rule': ['industrial', 'modern', 'contemporary', 'near_future', 'far_future'],
  'ORGANIC/bone_shell': ['primitive', 'slave', 'feudal', 'modern', 'contemporary', 'near_future', 'far_future', 'mythic'],
  'ORGANIC/membrane_layer': ['primitive', 'slave', 'feudal', 'modern', 'contemporary', 'near_future', 'far_future', 'mythic'],
  'ORGANIC/mycelium_spore': ['primitive', 'slave', 'feudal', 'modern', 'contemporary', 'near_future', 'far_future', 'mythic'],
  'ORGANIC/insect_chitin': ['primitive', 'slave', 'feudal', 'modern', 'contemporary', 'near_future', 'far_future', 'mythic'],
  'ORGANIC/plant_graft': ['primitive', 'slave', 'feudal', 'modern', 'contemporary', 'near_future', 'far_future', 'mythic'],
  'ORGANIC/symbiotic_mantle': ['primitive', 'slave', 'feudal', 'modern', 'contemporary', 'near_future', 'far_future', 'mythic'],
  'ORGANIC/aquatic_adaptation': ['primitive', 'slave', 'feudal', 'modern', 'contemporary', 'near_future', 'far_future', 'mythic'],
  'ORGANIC/parasitic_cord': ['primitive', 'slave', 'feudal', 'modern', 'contemporary', 'near_future', 'far_future', 'mythic'],
  'ORGANIC/mineral_biology': ['primitive', 'slave', 'feudal', 'modern', 'contemporary', 'near_future', 'far_future', 'mythic'],
  'ORGANIC/animal_hybrid': ['primitive', 'slave', 'feudal', 'modern', 'contemporary', 'near_future', 'far_future', 'mythic'],
  'MYTHIC/animalization_channel': ['primitive', 'slave', 'feudal', 'modern', 'contemporary', 'near_future', 'far_future', 'mythic'],
  'MYTHIC/horn_crown': ['primitive', 'slave', 'feudal', 'early_modern', 'modern', 'contemporary', 'mythic'],
  'MYTHIC/scale_feather_fur': ['primitive', 'slave', 'feudal', 'modern', 'contemporary', 'near_future', 'far_future', 'mythic'],
  'MYTHIC/sacred_stigma': ['slave', 'feudal', 'early_modern', 'modern', 'contemporary', 'mythic'],
  'MYTHIC/demonic_body': ['primitive', 'slave', 'feudal', 'modern', 'contemporary', 'near_future', 'far_future', 'mythic'],
  'MYTHIC/yokai_trace': ['feudal', 'early_modern', 'modern', 'contemporary', 'near_future', 'mythic'],
  'MYTHIC/semi_divine': ['primitive', 'slave', 'feudal', 'early_modern', 'modern', 'contemporary', 'mythic'],
  'MYTHIC/spirit_body': ['slave', 'feudal', 'early_modern', 'modern', 'contemporary', 'near_future', 'mythic'],
  'MYTHIC/mythic_prophecy': ['primitive', 'slave', 'feudal', 'early_modern', 'modern', 'contemporary', 'mythic'],
  'MYTHIC/liminal_beauty': ['feudal', 'early_modern', 'modern', 'contemporary', 'near_future', 'mythic'],
  'PARASITIC/infection_boundary': ['industrial', 'modern', 'contemporary', 'near_future', 'far_future'],
  'PARASITIC/host_relation': ['primitive', 'slave', 'feudal', 'modern', 'contemporary', 'near_future', 'far_future', 'mythic'],
  'PARASITIC/swelling_pressure': ['primitive', 'slave', 'feudal', 'modern', 'contemporary', 'near_future', 'far_future', 'mythic'],
  'PARASITIC/fissure_split': ['primitive', 'slave', 'feudal', 'modern', 'contemporary', 'near_future', 'far_future', 'mythic'],
  'PARASITIC/uncontrolled_growth': ['primitive', 'slave', 'feudal', 'modern', 'contemporary', 'near_future', 'far_future', 'mythic'],
  'PARASITIC/corruption_surface': ['slave', 'feudal', 'early_modern', 'industrial', 'modern', 'contemporary', 'near_future', 'mythic'],
  'PARASITIC/medical_control': ['industrial', 'modern', 'contemporary', 'near_future', 'far_future'],
  'PARASITIC/ritual_contamination': ['slave', 'feudal', 'early_modern', 'industrial', 'modern', 'contemporary', 'mythic'],
  'PARASITIC/symbiotic_equipment': ['industrial', 'modern', 'contemporary', 'near_future', 'far_future'],
  'PARASITIC/identity_corrosion': ['feudal', 'early_modern', 'industrial', 'modern', 'contemporary', 'near_future', 'mythic'],
  'PARASITIC/metamorphic_aftercare': ['industrial', 'modern', 'contemporary', 'near_future', 'far_future'],
  'SURREAL/dream_body': ['primitive', 'slave', 'feudal', 'early_modern', 'modern', 'contemporary', 'near_future', 'far_future', 'mythic'],
  'SURREAL/dimension_rift': ['modern', 'contemporary', 'near_future', 'far_future', 'mythic'],
  'SURREAL/ghost_transparency': ['slave', 'feudal', 'early_modern', 'modern', 'contemporary', 'near_future', 'mythic'],
  'SURREAL/mirror_dislocation': ['early_modern', 'industrial', 'modern', 'contemporary', 'near_future'],
  'SURREAL/void_absence': ['primitive', 'slave', 'feudal', 'early_modern', 'modern', 'contemporary', 'near_future', 'far_future', 'mythic'],
  'SURREAL/astral_skin': ['primitive', 'slave', 'feudal', 'modern', 'contemporary', 'near_future', 'far_future', 'mythic'],
  'SURREAL/symbolic_body': ['primitive', 'slave', 'feudal', 'early_modern', 'industrial', 'modern', 'contemporary', 'near_future', 'far_future', 'mythic'],
  'SURREAL/nonphysical_presence': ['feudal', 'early_modern', 'industrial', 'modern', 'contemporary', 'near_future', 'far_future', 'mythic'],
  'SURREAL/time_anomaly': ['primitive', 'slave', 'feudal', 'early_modern', 'industrial', 'modern', 'contemporary', 'near_future', 'far_future', 'mythic'],
  'SURREAL/surreal_rule': ['primitive', 'slave', 'feudal', 'early_modern', 'industrial', 'modern', 'contemporary', 'near_future', 'far_future', 'mythic'],
  'WASTELAND/repeated_repair': ['industrial', 'modern', 'contemporary', 'near_future'],
  'WASTELAND/salvage_patchwork': ['industrial', 'modern', 'contemporary', 'near_future'],
  'WASTELAND/dust_weathering': ['industrial', 'modern', 'contemporary', 'near_future'],
  'WASTELAND/scarcity_load': ['industrial', 'modern', 'contemporary', 'near_future'],
  'WASTELAND/improvised_armor': ['industrial', 'modern', 'contemporary', 'near_future'],
  'WASTELAND/faded_identity': ['industrial', 'modern', 'contemporary', 'near_future'],
  'WASTELAND/portable_shelter': ['industrial', 'modern', 'contemporary', 'near_future'],
  'WASTELAND/rusted_hardware': ['industrial', 'modern', 'contemporary', 'near_future'],
  'WASTELAND/survival_tool': ['industrial', 'modern', 'contemporary', 'near_future'],
  'WASTELAND/tribal_reuse': ['industrial', 'modern', 'contemporary', 'near_future']
};

type StyleProtocolItemPatch = Partial<Pick<LibraryItemDef, 'eraMode' | 'eras' | 'ontologyLevel' | 'realityTags' | 'categoryFit'>>;

const itemPatches: Record<string, StyleProtocolItemPatch> = {
  cd_proto_minimal_single_accent_single_shadow_shape: {
    ontologyLevel: 2,
    realityTags: ['stylized', 'symbolic', 'shadow_symbol', 'single_focus'],
    categoryFit: fit('weak', {
      strong: ['surreal'],
      usable: ['romance', 'dark_fantasy', 'horror', 'abstract'],
      fusion: ['noir_crime', 'xianxia', 'mythic_epic'],
      weak: ['real_professional', 'urban_life']
    })
  },
  cd_proto_minimal_ordinary_object_paper_cup_pause: {
    eraMode: 'specific',
    eras: ['industrial', 'modern', 'contemporary', 'near_future'],
    realityTags: ['realistic', 'physical', 'daily_object', 'disposable_prop']
  },
  cd_proto_minimal_ordinary_object_folded_receipt_trace: {
    eraMode: 'specific',
    eras: ['industrial', 'modern', 'contemporary', 'near_future'],
    realityTags: ['realistic', 'physical', 'daily_object', 'paper_receipt']
  },
  cd_proto_minimal_ordinary_object_phone_as_plain_tool: {
    eraMode: 'specific',
    eras: ['contemporary', 'near_future'],
    realityTags: ['realistic', 'physical', 'daily_object', 'personal_device'],
    categoryFit: fit('weak', {
      strong: ['urban_life', 'real_professional'],
      usable: ['romance', 'noir_crime', 'fashion_idol'],
      fusion: ['cyberpunk', 'science_fiction'],
      weak: ['historical', 'court', 'wuxia', 'xianxia']
    })
  },
  cd_proto_minimal_ordinary_object_cheap_plastic_bag: {
    eraMode: 'specific',
    eras: ['modern', 'contemporary', 'near_future'],
    realityTags: ['realistic', 'physical', 'daily_object', 'plastic_prop']
  },
  cd_proto_minimal_quiet_luxury_fine_watch_without_brand: {
    eraMode: 'specific',
    eras: ['industrial', 'modern', 'contemporary', 'near_future'],
    realityTags: ['realistic', 'physical', 'luxury_object', 'timepiece'],
    categoryFit: fit('weak', {
      strong: ['fashion_idol', 'court', 'real_professional'],
      usable: ['romance', 'urban_life', 'noir_crime', 'historical'],
      fusion: ['dark_fantasy'],
      weak: ['wuxia', 'xianxia', 'wasteland', 'science_fiction']
    })
  },
  cd_proto_minimal_quiet_luxury_subtle_scent_object: {
    eraMode: 'specific',
    eras: ['early_modern', 'industrial', 'modern', 'contemporary', 'near_future'],
    realityTags: ['realistic', 'physical', 'luxury_object', 'scent_prop'],
    categoryFit: fit('weak', {
      strong: ['fashion_idol', 'romance', 'boudoir_aesthetic'],
      usable: ['court', 'urban_life', 'real_professional'],
      fusion: ['dark_fantasy', 'surreal'],
      weak: ['war_military', 'wasteland']
    })
  },
  cd_proto_minimal_maintenance_care_repaired_zipper_pull: {
    eraMode: 'specific',
    eras: ['industrial', 'modern', 'contemporary', 'near_future'],
    realityTags: ['realistic', 'physical', 'maintenance_trace', 'zipper_hardware']
  },
  cd_proto_minimal_negative_space_small_symbol_large_void: {
    realityTags: ['stylized', 'symbolic', 'composition_protocol', 'negative_space'],
    categoryFit: fit('usable', {
      strong: ['abstract', 'surreal', 'fashion_idol'],
      usable: ['romance', 'court', 'real_professional'],
      fusion: ['science_fiction', 'dark_fantasy'],
      weak: ['wasteland', 'body_horror']
    })
  },
  cd_proto_function_medical_care_field_medic_pragmatism: {
    realityTags: ['realistic', 'physical', 'professional', 'medical', 'field_medic', 'emergency_care'],
    categoryFit: fit('weak', {
      strong: ['real_professional'],
      usable: ['war_military', 'wasteland', 'adventure', 'urban_life'],
      fusion: ['science_fiction', 'biopunk', 'dark_fantasy'],
      weak: ['court', 'fashion_idol', 'romance']
    })
  },
  cd_proto_function_medical_care_prosthetic_rehab_protocol: {
    eraMode: 'specific',
    eras: ['industrial', 'modern', 'contemporary', 'near_future'],
    ontologyLevel: 4,
    realityTags: ['semi_surreal', 'physical', 'professional', 'medical', 'assistive_device', 'prosthetic'],
    categoryFit: fit('weak', {
      strong: ['real_professional'],
      usable: ['science_fiction', 'posthuman', 'biopunk'],
      fusion: ['cyberpunk', 'body_horror'],
      weak: ['wuxia', 'xianxia', 'court']
    })
  },
  cd_proto_function_medical_care_pharmacy_label_order: {
    categoryFit: fit('weak', {
      strong: ['real_professional'],
      usable: ['urban_life', 'biopunk'],
      fusion: ['fantasy', 'xianxia', 'dark_fantasy', 'science_fiction'],
      weak: ['wuxia', 'court']
    })
  },
  cd_proto_function_archive_bureaucracy_future_records_clerk: {
    realityTags: ['semi_surreal', 'technological', 'professional', 'institutional', 'digital_archive'],
    categoryFit: fit('weak', {
      strong: ['real_professional', 'science_fiction'],
      usable: ['cyberpunk', 'posthuman', 'urban_life'],
      fusion: ['surreal', 'dark_fantasy', 'abstract'],
      weak: ['wuxia', 'xianxia', 'court']
    })
  },
  cd_proto_function_service_labor_night_shift_convenience: {
    eraMode: 'specific',
    eras: ['modern', 'contemporary', 'near_future'],
    realityTags: ['realistic', 'physical', 'professional', 'service_labor', 'urban_night']
  },
  cd_proto_function_service_labor_flight_attendant_protocol: {
    eraMode: 'specific',
    eras: ['modern', 'contemporary', 'near_future'],
    realityTags: ['realistic', 'physical', 'professional', 'service_labor', 'aviation_service'],
    categoryFit: fit('weak', {
      strong: ['real_professional', 'urban_life'],
      usable: ['romance', 'fashion_idol', 'adventure'],
      fusion: ['science_fiction'],
      weak: ['historical', 'court', 'wuxia', 'xianxia']
    })
  },
  cd_proto_function_lab_research_bio_interface_research: {
    realityTags: ['semi_surreal', 'biological', 'technological', 'professional', 'laboratory', 'body_interface'],
    categoryFit: fit('weak', {
      strong: ['science_fiction', 'biopunk'],
      usable: ['real_professional', 'posthuman', 'body_horror'],
      fusion: ['horror', 'surreal', 'dark_fantasy'],
      weak: ['wuxia', 'xianxia', 'court']
    })
  },
  cd_proto_function_lab_research_ai_lab_clerk: {
    realityTags: ['semi_surreal', 'technological', 'professional', 'laboratory', 'ai_interface'],
    categoryFit: fit('weak', {
      strong: ['science_fiction', 'real_professional'],
      usable: ['cyberpunk', 'posthuman', 'urban_life'],
      fusion: ['surreal', 'abstract'],
      weak: ['historical', 'court', 'wuxia', 'xianxia']
    })
  },
  cd_proto_function_lab_research_sterile_anomaly_beauty: {
    realityTags: ['semi_surreal', 'biological', 'symbolic', 'professional', 'laboratory', 'controlled_anomaly'],
    categoryFit: fit('weak', {
      strong: ['biopunk', 'surreal'],
      usable: ['science_fiction', 'body_horror', 'real_professional'],
      fusion: ['dark_fantasy', 'horror', 'abstract'],
      weak: ['urban_life', 'romance', 'court']
    })
  },
  cd_proto_function_corporate_office_corporate_cult_protocol: {
    realityTags: ['stylized', 'physical', 'professional', 'corporate', 'institutional_ritual'],
    categoryFit: fit('weak', {
      strong: ['real_professional', 'urban_life'],
      usable: ['noir_crime', 'religious_ritual', 'surreal'],
      fusion: ['dark_fantasy', 'cyberpunk'],
      weak: ['romance', 'wuxia', 'xianxia']
    })
  },
  cd_proto_function_industrial_maintenance_industrial_cyber_restraint: {
    realityTags: ['semi_surreal', 'physical', 'technological', 'professional', 'industrial_labor', 'maintenance'],
    categoryFit: fit('weak', {
      strong: ['real_professional', 'cyberpunk'],
      usable: ['science_fiction', 'posthuman', 'wasteland'],
      fusion: ['biopunk'],
      weak: ['romance', 'court', 'fashion_idol']
    })
  },
  cd_proto_function_field_operator_near_future_field_ops: {
    realityTags: ['semi_surreal', 'technological', 'professional', 'fieldwork', 'mobility'],
    categoryFit: fit('weak', {
      strong: ['science_fiction', 'real_professional'],
      usable: ['adventure', 'war_military', 'wasteland', 'cyberpunk'],
      fusion: ['posthuman'],
      weak: ['court', 'fashion_idol', 'romance']
    })
  },
  cd_proto_function_education_academic_chalkboard_occult_math: {
    realityTags: ['stylized', 'symbolic', 'professional', 'education', 'knowledge_work', 'occult_formula'],
    categoryFit: fit('weak', {
      strong: ['surreal', 'abstract'],
      usable: ['real_professional', 'science_fiction', 'fantasy', 'dark_fantasy'],
      fusion: ['xianxia', 'mythic_epic'],
      weak: ['urban_life', 'wasteland']
    })
  },
  cd_proto_function_education_academic_future_tutor_interface: {
    realityTags: ['semi_surreal', 'technological', 'professional', 'education', 'learning_interface'],
    categoryFit: fit('weak', {
      strong: ['science_fiction', 'real_professional'],
      usable: ['posthuman', 'urban_life'],
      fusion: ['cyberpunk', 'surreal'],
      weak: ['historical', 'court', 'wuxia', 'xianxia']
    })
  },
  cd_proto_function_law_finance_contract_signature_focus: {
    categoryFit: fit('weak', {
      strong: ['real_professional'],
      usable: ['urban_life', 'court', 'historical', 'romance', 'noir_crime'],
      fusion: ['fantasy', 'xianxia', 'dark_fantasy', 'surreal'],
      weak: ['wasteland', 'body_horror']
    })
  },
  cd_proto_function_law_finance_algorithmic_finance_interface: {
    realityTags: ['semi_surreal', 'technological', 'professional', 'legal_financial', 'data_interface'],
    categoryFit: fit('weak', {
      strong: ['science_fiction', 'cyberpunk', 'real_professional'],
      usable: ['urban_life', 'posthuman', 'noir_crime'],
      fusion: ['surreal'],
      weak: ['historical', 'court', 'wuxia', 'xianxia']
    })
  },
  cd_proto_function_death_care_ghostly_professional_boundary: {
    realityTags: ['non_realist', 'symbolic', 'professional', 'death_care', 'ghostly_boundary'],
    categoryFit: fit('weak', {
      strong: ['horror', 'surreal'],
      usable: ['real_professional', 'religious_ritual', 'dark_fantasy', 'body_horror'],
      fusion: ['court', 'biopunk'],
      weak: ['romance', 'fashion_idol', 'wuxia']
    })
  },
  cd_proto_tactical_concealed_weapon_cane_blade_protocol: {
    eraMode: 'specific',
    eras: ['feudal', 'early_modern', 'industrial', 'modern', 'contemporary'],
    realityTags: ['realistic', 'physical', 'combat_equipment', 'concealed_weapon', 'etiquette_prop'],
    categoryFit: fit('weak', {
      strong: ['court', 'historical', 'noir_crime'],
      usable: ['wuxia', 'war_military', 'urban_life'],
      fusion: ['dark_fantasy'],
      weak: ['science_fiction', 'wasteland', 'fashion_idol']
    })
  },
  cd_proto_tactical_concealed_weapon_hairpin_dagger_code: {
    eraMode: 'specific',
    eras: ['feudal', 'early_modern', 'industrial', 'modern', 'contemporary'],
    realityTags: ['stylized', 'physical', 'combat_equipment', 'concealed_weapon', 'hair_ornament'],
    categoryFit: fit('weak', {
      strong: ['wuxia', 'court'],
      usable: ['historical', 'noir_crime', 'romance'],
      fusion: ['xianxia', 'dark_fantasy'],
      weak: ['science_fiction', 'wasteland', 'real_professional']
    })
  },
  cd_proto_tactical_concealed_weapon_concealed_monk_tool: {
    eraMode: 'specific',
    eras: ['feudal', 'early_modern', 'industrial', 'modern', 'contemporary'],
    realityTags: ['stylized', 'physical', 'combat_equipment', 'concealed_weapon', 'monastic_garment'],
    categoryFit: fit('weak', {
      strong: ['wuxia', 'religious_ritual'],
      usable: ['historical', 'adventure', 'xianxia'],
      fusion: ['dark_fantasy'],
      weak: ['urban_life', 'fashion_idol']
    })
  },
  cd_proto_tactical_armor_protection_lamellar_historical_grid: {
    eraMode: 'specific',
    eras: ['slave', 'feudal', 'early_modern'],
    realityTags: ['realistic', 'physical', 'combat_equipment', 'historical_armor', 'lamellar_grid'],
    categoryFit: fit('weak', {
      strong: ['historical', 'wuxia', 'war_military'],
      usable: ['court', 'dark_fantasy'],
      fusion: ['xianxia'],
      weak: ['urban_life', 'science_fiction', 'cyberpunk']
    })
  },
  cd_proto_tactical_armor_protection_chainmail_underlayer: {
    eraMode: 'specific',
    eras: ['feudal', 'early_modern'],
    realityTags: ['realistic', 'physical', 'combat_equipment', 'historical_armor', 'chainmail'],
    categoryFit: fit('weak', {
      strong: ['historical', 'war_military', 'dark_fantasy'],
      usable: ['court', 'wuxia', 'fantasy'],
      fusion: ['xianxia'],
      weak: ['urban_life', 'science_fiction', 'cyberpunk']
    })
  },
  cd_proto_tactical_armor_protection_ceramic_plate_clean: {
    eraMode: 'specific',
    eras: ['modern', 'contemporary', 'near_future'],
    realityTags: ['realistic', 'physical', 'combat_equipment', 'clean_armor', 'ceramic_plate'],
    categoryFit: fit('weak', {
      strong: ['war_military', 'real_professional'],
      usable: ['science_fiction', 'medical', 'cyberpunk'],
      fusion: ['biopunk'],
      weak: ['historical', 'court', 'wuxia', 'xianxia']
    })
  },
  cd_proto_tactical_command_rank_future_command_interface: {
    eraMode: 'specific',
    eras: ['near_future', 'far_future'],
    ontologyLevel: 3,
    realityTags: ['semi_surreal', 'technological', 'combat_equipment', 'command_interface', 'institutional_rank'],
    categoryFit: fit('weak', {
      strong: ['science_fiction', 'war_military'],
      usable: ['cyberpunk', 'posthuman'],
      fusion: ['institutional'],
      weak: ['historical', 'court', 'wuxia', 'xianxia']
    })
  },
  cd_proto_tactical_assassin_light_temple_shadow_killer: {
    eraMode: 'specific',
    eras: ['feudal', 'early_modern', 'industrial', 'modern'],
    realityTags: ['stylized', 'physical', 'combat_equipment', 'stealth', 'monastic_shadow'],
    categoryFit: fit('weak', {
      strong: ['wuxia', 'religious_ritual', 'noir_crime'],
      usable: ['historical', 'dark_fantasy'],
      fusion: ['xianxia'],
      weak: ['urban_life', 'fashion_idol']
    })
  },
  cd_proto_tactical_duel_ceremony_pistol_duel_box: {
    eraMode: 'specific',
    eras: ['early_modern', 'industrial', 'modern'],
    realityTags: ['realistic', 'physical', 'combat_equipment', 'duel_etiquette', 'firearm_case'],
    categoryFit: fit('weak', {
      strong: ['historical', 'court', 'noir_crime'],
      usable: ['war_military', 'romance'],
      fusion: ['dark_fantasy'],
      weak: ['wuxia', 'xianxia', 'science_fiction']
    })
  },
  cd_proto_tactical_duel_ceremony_samurai_formal_pause: {
    eraMode: 'specific',
    eras: ['feudal', 'early_modern', 'modern'],
    realityTags: ['stylized', 'physical', 'combat_equipment', 'duel_etiquette', 'samurai_formality'],
    categoryFit: fit('weak', {
      strong: ['wuxia', 'historical'],
      usable: ['war_military', 'court'],
      fusion: ['xianxia', 'dark_fantasy'],
      weak: ['urban_life', 'science_fiction']
    })
  },
  cd_proto_tactical_riot_control_future_crowd_interface: {
    eraMode: 'specific',
    eras: ['near_future', 'far_future'],
    ontologyLevel: 3,
    realityTags: ['semi_surreal', 'technological', 'combat_equipment', 'crowd_control', 'control_interface'],
    categoryFit: fit('weak', {
      strong: ['science_fiction', 'war_military', 'cyberpunk'],
      usable: ['institutional', 'urban_life', 'posthuman'],
      fusion: ['noir_crime'],
      weak: ['historical', 'court', 'wuxia', 'xianxia']
    })
  },
  cd_proto_tactical_survival_combat_shelter_patch_cloak: {
    eraMode: 'specific',
    eras: ['primitive', 'slave', 'feudal', 'early_modern', 'industrial', 'modern', 'contemporary'],
    realityTags: ['realistic', 'physical', 'combat_equipment', 'survival', 'shelter_cloak'],
    categoryFit: fit('usable', {
      strong: ['adventure', 'wasteland'],
      usable: ['wuxia', 'historical', 'ecological', 'dark_fantasy'],
      fusion: ['xianxia', 'fantasy'],
      weak: ['court', 'urban_life', 'fashion_idol']
    })
  },
  cd_proto_tactical_training_body_martial_arts_uniform_wear: {
    eraMode: 'specific',
    eras: ['modern', 'contemporary'],
    realityTags: ['realistic', 'physical', 'combat_equipment', 'training', 'martial_uniform'],
    categoryFit: fit('usable', {
      strong: ['wuxia', 'war_military'],
      usable: ['urban_life', 'real_professional', 'adventure'],
      fusion: ['xianxia', 'fashion_idol'],
      weak: ['court', 'science_fiction']
    })
  },
  cd_proto_tactical_future_tactics_sensor_patch_network: {
    eraMode: 'specific',
    eras: ['near_future', 'far_future'],
    ontologyLevel: 3,
    realityTags: ['semi_surreal', 'technological', 'combat_equipment', 'sensor_patch', 'removable_interface']
  },
  cd_proto_tactical_future_tactics_exosuit_under_cloth: {
    eraMode: 'specific',
    eras: ['near_future', 'far_future'],
    ontologyLevel: 4,
    realityTags: ['semi_surreal', 'technological', 'combat_equipment', 'assistive_exosuit', 'under_cloth_support']
  },
  cd_proto_ritual_sacred_geometry_cosmic_diagram_limit: {
    ontologyLevel: 3,
    realityTags: ['semi_surreal', 'symbolic', 'ritual', 'cosmic_diagram', 'garment_pattern'],
    categoryFit: fit('weak', {
      strong: ['surreal', 'religious_ritual'],
      usable: ['mythic_epic', 'science_fiction', 'abstract'],
      fusion: ['xianxia', 'fantasy'],
      weak: ['urban_life', 'real_professional']
    })
  },
  cd_proto_ritual_vestment_hierarchy_tech_vestment_limit: {
    eraMode: 'specific',
    eras: ['near_future', 'far_future'],
    ontologyLevel: 3,
    realityTags: ['semi_surreal', 'technological', 'ritual', 'tech_vestment', 'woven_interface'],
    categoryFit: fit('weak', {
      strong: ['science_fiction', 'religious_ritual'],
      usable: ['xianxia', 'surreal', 'posthuman'],
      fusion: ['cyberpunk'],
      weak: ['historical', 'court', 'wuxia']
    })
  },
  cd_proto_ritual_reliquary_vessel_living_relic_threshold: {
    ontologyLevel: 4,
    realityTags: ['non_realist', 'symbolic', 'ritual', 'living_relic', 'sealed_supernatural'],
    categoryFit: fit('weak', {
      strong: ['religious_ritual', 'surreal'],
      usable: ['dark_fantasy', 'horror', 'mythic_epic'],
      fusion: ['xianxia', 'science_fiction'],
      weak: ['urban_life', 'real_professional']
    })
  },
  cd_proto_ritual_taboo_seal_danger_kept_symbolic: {
    ontologyLevel: 4,
    realityTags: ['non_realist', 'symbolic', 'ritual', 'sealed_danger', 'controlled_risk'],
    categoryFit: fit('weak', {
      strong: ['dark_fantasy', 'religious_ritual', 'surreal'],
      usable: ['horror', 'body_horror', 'xianxia'],
      fusion: ['science_fiction'],
      weak: ['urban_life', 'real_professional', 'fashion_idol']
    })
  },
  cd_proto_ritual_austere_penitence_barefoot_vow: {
    eraMode: 'specific',
    eras: ['primitive', 'slave', 'feudal', 'early_modern', 'industrial', 'modern', 'contemporary'],
    realityTags: ['realistic', 'physical', 'ritual', 'penitence', 'barefoot_vow']
  },
  cd_proto_ritual_oracle_veil_third_eye_hidden: {
    ontologyLevel: 4,
    realityTags: ['non_realist', 'symbolic', 'ritual', 'oracle', 'hidden_vision'],
    categoryFit: fit('weak', {
      strong: ['surreal', 'religious_ritual', 'xianxia'],
      usable: ['mythic_epic', 'fantasy', 'dark_fantasy'],
      fusion: ['science_fiction'],
      weak: ['urban_life', 'real_professional']
    })
  },
  cd_proto_ritual_oracle_veil_veil_as_screen: {
    eraMode: 'specific',
    eras: ['feudal', 'early_modern', 'modern', 'contemporary', 'near_future', 'far_future', 'mythic'],
    ontologyLevel: 3,
    realityTags: ['semi_surreal', 'technological', 'ritual', 'oracle', 'veil_screen'],
    categoryFit: fit('weak', {
      strong: ['religious_ritual', 'science_fiction'],
      usable: ['surreal', 'xianxia', 'posthuman'],
      fusion: ['cyberpunk'],
      weak: ['real_professional', 'wasteland']
    })
  },
  cd_proto_ritual_clean_sacrifice_sacrifice_kept_abstract: {
    ontologyLevel: 3,
    realityTags: ['stylized', 'symbolic', 'ritual', 'bloodless_offering', 'abstract_sacrifice'],
    categoryFit: fit('weak', {
      strong: ['religious_ritual', 'surreal'],
      usable: ['romance', 'dark_fantasy', 'horror', 'mythic_epic'],
      fusion: ['xianxia', 'abstract'],
      weak: ['urban_life', 'real_professional']
    })
  },
  cd_proto_ritual_dark_ceremony_dark_power_contained: {
    ontologyLevel: 4,
    realityTags: ['non_realist', 'symbolic', 'ritual', 'dark_ceremony', 'sealed_power'],
    categoryFit: fit('weak', {
      strong: ['dark_fantasy', 'horror', 'surreal'],
      usable: ['religious_ritual', 'mythic_epic'],
      fusion: ['body_horror', 'xianxia'],
      weak: ['urban_life', 'real_professional', 'fashion_idol']
    })
  },
  cd_proto_aristocratic_ceremonial_jewelry_forbidden_gem_accent: {
    eraMode: 'specific',
    eras: ['feudal', 'early_modern', 'industrial', 'modern', 'contemporary', 'mythic'],
    ontologyLevel: 3,
    realityTags: ['semi_surreal', 'physical', 'aristocratic', 'ceremonial_jewelry', 'forbidden_gem'],
    categoryFit: fit('weak', {
      strong: ['dark_fantasy', 'surreal', 'court'],
      usable: ['fashion_idol', 'xianxia', 'religious_ritual'],
      fusion: ['horror', 'romance'],
      weak: ['real_professional', 'urban_life', 'wasteland']
    })
  },
  cd_proto_aristocratic_dark_aristocracy_vampiric_etiquette: {
    ontologyLevel: 4,
    realityTags: ['non_realist', 'physical', 'aristocratic', 'dark_lineage', 'vampiric_etiquette'],
    categoryFit: fit('weak', {
      strong: ['dark_fantasy', 'horror'],
      usable: ['court', 'romance', 'surreal'],
      fusion: ['religious_ritual', 'body_horror'],
      weak: ['urban_life', 'real_professional', 'science_fiction']
    })
  },
  cd_proto_aristocratic_dark_aristocracy_cursed_heir_protocol: {
    ontologyLevel: 4,
    realityTags: ['non_realist', 'symbolic', 'aristocratic', 'dark_lineage', 'inheritance_curse'],
    categoryFit: fit('weak', {
      strong: ['dark_fantasy', 'court'],
      usable: ['horror', 'surreal', 'romance', 'xianxia'],
      fusion: ['body_horror', 'religious_ritual'],
      weak: ['urban_life', 'real_professional', 'science_fiction']
    })
  },
  cd_proto_aristocratic_dark_aristocracy_haunted_portrait_family: {
    ontologyLevel: 4,
    realityTags: ['non_realist', 'symbolic', 'aristocratic', 'dark_lineage', 'haunted_portrait'],
    categoryFit: fit('weak', {
      strong: ['dark_fantasy', 'horror'],
      usable: ['court', 'historical', 'surreal'],
      fusion: ['romance'],
      weak: ['urban_life', 'real_professional', 'science_fiction']
    })
  },
  cd_proto_aristocratic_dark_aristocracy_witch_aristocrat_code: {
    ontologyLevel: 4,
    realityTags: ['non_realist', 'symbolic', 'aristocratic', 'dark_lineage', 'magic_code'],
    categoryFit: fit('weak', {
      strong: ['dark_fantasy', 'fantasy', 'court'],
      usable: ['horror', 'surreal', 'religious_ritual'],
      fusion: ['xianxia', 'romance'],
      weak: ['urban_life', 'real_professional', 'science_fiction']
    })
  },
  cd_proto_aristocratic_dark_aristocracy_immortal_old_money: {
    ontologyLevel: 4,
    realityTags: ['non_realist', 'symbolic', 'aristocratic', 'dark_lineage', 'immortal_status'],
    categoryFit: fit('weak', {
      strong: ['dark_fantasy', 'court', 'surreal'],
      usable: ['horror', 'romance'],
      fusion: ['xianxia', 'body_horror'],
      weak: ['urban_life', 'real_professional', 'science_fiction']
    })
  },
  cd_proto_aristocratic_dark_aristocracy_demonic_court_restraint: {
    ontologyLevel: 4,
    realityTags: ['non_realist', 'symbolic', 'aristocratic', 'dark_lineage', 'demonic_restraint'],
    categoryFit: fit('weak', {
      strong: ['dark_fantasy', 'court'],
      usable: ['horror', 'surreal', 'religious_ritual'],
      fusion: ['body_horror', 'xianxia'],
      weak: ['urban_life', 'real_professional', 'fashion_idol']
    })
  },
  cd_proto_aristocratic_dark_aristocracy_sacred_bloodline_relic: {
    ontologyLevel: 3,
    realityTags: ['stylized', 'symbolic', 'aristocratic', 'dark_lineage', 'sacred_bloodline'],
    categoryFit: fit('weak', {
      strong: ['court', 'religious_ritual', 'dark_fantasy'],
      usable: ['historical', 'mythic_epic', 'xianxia'],
      fusion: ['surreal', 'romance'],
      weak: ['urban_life', 'real_professional', 'science_fiction']
    })
  },
  cd_proto_tech_serial_identity_colony_id_patch: {
    eraMode: 'specific',
    eras: ['near_future', 'far_future'],
    ontologyLevel: 3,
    realityTags: ['semi_surreal', 'technological', 'speculative', 'serial_identity', 'space_colony_id'],
    categoryFit: fit('weak', {
      strong: ['science_fiction', 'space_opera'],
      usable: ['posthuman', 'cyberpunk', 'real_professional'],
      fusion: ['wasteland'],
      weak: ['historical', 'court', 'wuxia', 'xianxia']
    })
  },
  cd_proto_tech_serial_identity_factory_batch_label: {
    eraMode: 'specific',
    eras: ['industrial', 'modern', 'contemporary', 'near_future', 'far_future'],
    ontologyLevel: 3,
    realityTags: ['semi_surreal', 'technological', 'speculative', 'serial_identity', 'factory_batch'],
    categoryFit: fit('weak', {
      strong: ['science_fiction', 'real_professional'],
      usable: ['cyberpunk', 'posthuman', 'biopunk', 'wasteland'],
      fusion: ['surreal'],
      weak: ['court', 'historical', 'wuxia', 'xianxia']
    })
  },
  cd_proto_tech_soft_exosuit_knee_assist_strap: {
    eraMode: 'specific',
    eras: ['modern', 'contemporary', 'near_future', 'far_future'],
    ontologyLevel: 4,
    realityTags: ['semi_surreal', 'technological', 'speculative', 'soft_exosuit', 'knee_assist']
  },
  cd_proto_tech_soft_exosuit_rehab_exosuit_clean: {
    eraMode: 'specific',
    eras: ['modern', 'contemporary', 'near_future'],
    ontologyLevel: 4,
    realityTags: ['semi_surreal', 'technological', 'medical', 'soft_exosuit', 'rehab_support'],
    categoryFit: fit('weak', {
      strong: ['medical', 'real_professional', 'science_fiction'],
      usable: ['posthuman', 'biopunk'],
      fusion: ['cyberpunk'],
      weak: ['historical', 'court', 'wuxia', 'xianxia']
    })
  },
  cd_proto_tech_lab_containment_sealed_implant_trial: {
    ontologyLevel: 4,
    realityTags: ['semi_surreal', 'technological', 'speculative', 'lab_containment', 'sealed_implant'],
    categoryFit: fit('weak', {
      strong: ['biopunk', 'science_fiction'],
      usable: ['posthuman', 'body_horror', 'real_professional'],
      fusion: ['horror', 'surreal'],
      weak: ['court', 'historical', 'wuxia', 'xianxia']
    })
  },
  cd_proto_tech_medical_interface_prosthetic_socket_limit: {
    ontologyLevel: 4,
    realityTags: ['semi_surreal', 'technological', 'medical', 'clinical_interface', 'prosthetic_socket'],
    categoryFit: fit('weak', {
      strong: ['medical', 'posthuman', 'science_fiction'],
      usable: ['real_professional', 'biopunk'],
      fusion: ['cyberpunk', 'body_horror'],
      weak: ['historical', 'court', 'wuxia', 'xianxia']
    })
  },
  cd_proto_tech_drone_companion_tool_orb_assistant: {
    eraMode: 'specific',
    eras: ['near_future', 'far_future'],
    ontologyLevel: 4,
    realityTags: ['semi_surreal', 'technological', 'speculative', 'drone_companion', 'tool_orb'],
    categoryFit: fit('weak', {
      strong: ['science_fiction'],
      usable: ['posthuman', 'cyberpunk', 'real_professional'],
      fusion: ['fashion_idol', 'surreal'],
      weak: ['historical', 'court', 'wuxia', 'xianxia']
    })
  },
  cd_proto_couture_transparent_boundary_ghost_couture_layer: {
    ontologyLevel: 3,
    realityTags: ['non_realist', 'symbolic', 'fashion_system', 'transparent_layer', 'ghostly_boundary'],
    categoryFit: fit('weak', {
      strong: ['surreal', 'horror'],
      usable: ['fashion_idol', 'dark_fantasy', 'romance'],
      fusion: ['xianxia', 'science_fiction'],
      weak: ['real_professional', 'urban_life']
    })
  },
  cd_proto_couture_transparent_boundary_transparent_data_skin: {
    eraMode: 'specific',
    eras: ['contemporary', 'near_future', 'far_future'],
    ontologyLevel: 3,
    realityTags: ['semi_surreal', 'technological', 'fashion_system', 'transparent_layer', 'data_surface'],
    categoryFit: fit('weak', {
      strong: ['science_fiction', 'fashion_idol'],
      usable: ['cyberpunk', 'posthuman', 'surreal'],
      fusion: ['adult'],
      weak: ['historical', 'court', 'wuxia', 'xianxia']
    })
  },
  cd_proto_couture_armored_couture_exosuit_as_corset: {
    eraMode: 'specific',
    eras: ['contemporary', 'near_future', 'far_future'],
    ontologyLevel: 4,
    realityTags: ['semi_surreal', 'technological', 'fashion_system', 'mechanical_support', 'corset_interface'],
    categoryFit: fit('weak', {
      strong: ['science_fiction', 'posthuman'],
      usable: ['fashion_idol', 'cyberpunk', 'war_military'],
      fusion: ['body_horror'],
      weak: ['historical', 'court', 'wuxia', 'xianxia']
    })
  },
  cd_proto_couture_experimental_material_liquid_metal_couture: {
    eraMode: 'specific',
    eras: ['contemporary', 'near_future', 'far_future'],
    ontologyLevel: 3,
    realityTags: ['semi_surreal', 'physical', 'fashion_system', 'liquid_metal', 'speculative_surface'],
    categoryFit: fit('weak', {
      strong: ['science_fiction', 'fashion_idol'],
      usable: ['cyberpunk', 'surreal', 'posthuman'],
      fusion: ['dark_fantasy', 'adult'],
      weak: ['historical', 'wuxia', 'xianxia']
    })
  },
  cd_proto_couture_experimental_material_bio_fabric_control: {
    eraMode: 'specific',
    eras: ['contemporary', 'near_future', 'far_future'],
    ontologyLevel: 4,
    realityTags: ['semi_surreal', 'biological', 'fashion_system', 'bio_fabric', 'controlled_anomaly'],
    categoryFit: fit('weak', {
      strong: ['biopunk', 'science_fiction'],
      usable: ['fashion_idol', 'posthuman', 'body_horror'],
      fusion: ['dark_fantasy', 'surreal'],
      weak: ['historical', 'court', 'wuxia', 'xianxia']
    })
  },
  cd_proto_couture_experimental_material_sound_reactive_surface: {
    eraMode: 'specific',
    eras: ['near_future', 'far_future'],
    ontologyLevel: 4,
    realityTags: ['semi_surreal', 'technological', 'fashion_system', 'sound_reactive', 'luminous_surface'],
    categoryFit: fit('weak', {
      strong: ['science_fiction', 'cyberpunk'],
      usable: ['fashion_idol', 'surreal', 'posthuman'],
      fusion: ['adult'],
      weak: ['historical', 'court', 'wuxia', 'xianxia']
    })
  },
  cd_proto_street_y2k_pop_street_flip_phone_status: {
    eraMode: 'specific',
    eras: ['modern', 'contemporary'],
    realityTags: ['realistic', 'physical', 'urban_fashion', 'pop_culture', 'mobile_device']
  },
  cd_proto_street_nightlife_access_black_light_palette: {
    realityTags: ['stylized', 'physical', 'urban_fashion', 'nightlife', 'blacklight', 'fluorescent_material']
  },
  cd_proto_street_nightlife_access_dancefloor_body_heat: {
    realityTags: ['stylized', 'physical', 'urban_fashion', 'nightlife', 'body_heat', 'social_motion']
  },
  cd_proto_street_techwear_urban_interface_without_cyberpunk: {
    ontologyLevel: 2,
    realityTags: ['realistic', 'physical', 'urban_fashion', 'technical_wear', 'restrained_interface'],
    categoryFit: fit('weak', {
      strong: ['urban_life', 'science_fiction'],
      usable: ['cyberpunk', 'real_professional', 'fashion_idol'],
      fusion: ['posthuman'],
      weak: ['historical', 'court', 'wuxia', 'xianxia']
    })
  },
  cd_proto_street_rave_electronic_cyber_rave_threshold: {
    eraMode: 'specific',
    eras: ['contemporary', 'near_future', 'far_future'],
    ontologyLevel: 3,
    realityTags: ['semi_surreal', 'technological', 'urban_fashion', 'electronic_music', 'local_interface'],
    categoryFit: fit('weak', {
      strong: ['cyberpunk', 'science_fiction'],
      usable: ['urban_life', 'fashion_idol', 'posthuman', 'surreal'],
      fusion: ['adult'],
      weak: ['historical', 'court', 'wuxia', 'xianxia']
    })
  },
  cd_proto_street_workwear_utility_military_surplus_softened: {
    eraMode: 'specific',
    eras: ['industrial', 'modern', 'contemporary'],
    realityTags: ['realistic', 'physical', 'urban_fashion', 'workwear', 'military_surplus'],
    categoryFit: fit('weak', {
      strong: ['urban_life', 'war_military'],
      usable: ['fashion_idol', 'wasteland', 'adventure'],
      fusion: ['post_apocalyptic'],
      weak: ['romance', 'court', 'xianxia']
    })
  },
  cd_proto_mechanical_metal_shell_riveted_old_shell: {
    eraMode: 'specific',
    eras: ['industrial', 'modern'],
    realityTags: ['realistic', 'technological', 'mechanical', 'physical', 'metal_shell', 'old_industrial'],
    categoryFit: fit('weak', {
      strong: ['science_fiction'],
      usable: ['wasteland', 'war_military', 'real_professional'],
      fusion: ['post_apocalyptic', 'historical'],
      weak: ['court', 'romance', 'xianxia']
    })
  },
  cd_proto_mechanical_power_core_fuel_stain_port: {
    eraMode: 'specific',
    eras: ['industrial', 'modern'],
    realityTags: ['realistic', 'technological', 'mechanical', 'physical', 'fuel_port', 'oil_stain'],
    categoryFit: fit('weak', {
      strong: ['science_fiction'],
      usable: ['wasteland', 'real_professional', 'war_military'],
      fusion: ['post_apocalyptic'],
      weak: ['court', 'romance', 'xianxia']
    })
  },
  cd_proto_mechanical_power_core_clockwork_heart_case: {
    eraMode: 'specific',
    eras: ['industrial', 'modern'],
    realityTags: ['stylized', 'technological', 'mechanical', 'physical', 'clockwork', 'classical_machine'],
    categoryFit: fit('weak', {
      strong: ['science_fiction', 'fantasy'],
      usable: ['dark_fantasy', 'historical', 'romance'],
      fusion: ['surreal', 'posthuman'],
      weak: ['real_professional', 'urban_life', 'xianxia']
    })
  },
  cd_proto_mechanical_metal_shell_white_ceramic_shell: {
    eraMode: 'specific',
    eras: ['modern', 'contemporary', 'near_future', 'far_future'],
    realityTags: ['semi_surreal', 'technological', 'mechanical', 'synthetic_face', 'medical_ceramic']
  },
  cd_proto_mechanical_synthetic_face_porcelain_android_face: {
    eraMode: 'specific',
    eras: ['modern', 'contemporary', 'near_future', 'far_future'],
    realityTags: ['semi_surreal', 'technological', 'mechanical', 'synthetic_face', 'porcelain_android'],
    categoryFit: fit('weak', {
      strong: ['posthuman', 'science_fiction'],
      usable: ['fashion_idol', 'romance', 'surreal'],
      fusion: ['body_horror', 'boudoir_aesthetic'],
      weak: ['historical', 'court', 'wuxia']
    })
  },
  cd_proto_organic_mycelium_spore_fungal_archive_labels: {
    ontologyLevel: 3,
    realityTags: ['stylized', 'biological', 'organic', 'fungal', 'specimen_label'],
    categoryFit: fit('weak', {
      strong: ['ecological'],
      usable: ['real_professional', 'fantasy', 'biopunk', 'dark_fantasy'],
      fusion: ['science_fiction', 'surreal'],
      weak: ['court', 'war_military']
    })
  },
  cd_proto_organic_aquatic_adaptation_webbed_glove_solution: {
    ontologyLevel: 3,
    realityTags: ['stylized', 'physical', 'organic', 'aquatic', 'costume_solution'],
    categoryFit: fit('weak', {
      strong: ['fantasy', 'ecological'],
      usable: ['fashion_idol', 'romance', 'xianxia', 'science_fiction'],
      fusion: ['surreal'],
      weak: ['real_professional', 'court']
    })
  },
  cd_proto_organic_aquatic_adaptation_dive_harness_biology: {
    eraMode: 'specific',
    eras: ['industrial', 'modern', 'contemporary', 'near_future', 'far_future'],
    realityTags: ['semi_surreal', 'biological', 'organic', 'aquatic', 'life_support_equipment'],
    categoryFit: fit('weak', {
      strong: ['science_fiction', 'biopunk'],
      usable: ['real_professional', 'adventure', 'posthuman'],
      fusion: ['fantasy', 'body_horror'],
      weak: ['court', 'romance']
    })
  },
  cd_proto_organic_aquatic_adaptation_scale_hint_not_full_fish: {
    ontologyLevel: 3,
    realityTags: ['semi_surreal', 'biological', 'organic', 'aquatic', 'local_scale_texture']
  },
  cd_proto_organic_mineral_biology_fossil_imprint_cloth: {
    ontologyLevel: 3,
    realityTags: ['stylized', 'physical', 'organic', 'mineral_growth', 'fossil_pattern'],
    categoryFit: fit('weak', {
      strong: ['fashion_idol', 'historical', 'ecological'],
      usable: ['fantasy', 'mythic_epic', 'surreal', 'xianxia'],
      fusion: ['science_fiction'],
      weak: ['real_professional', 'war_military']
    })
  }
};

const universalEraRoutes = new Set(['MINIMAL']);
const timelessRoutes = new Set<string>([]);

const routeOntologyFloor: Record<string, 1 | 2 | 3 | 4 | 5> = {
  RITUAL: 2,
  TECH: 2,
  MECHANICAL: 3,
  ORGANIC: 3,
  PARASITIC: 1,
  MYTHIC: 1,
  SURREAL: 1,
  WASTELAND: 1,
  MINIMAL: 1
};

const clampOntology = (value: number): 1 | 2 | 3 | 4 | 5 => (
  Math.max(1, Math.min(5, value)) as 1 | 2 | 3 | 4 | 5
);

const inferEraMode = (route: string, seed: StyleProtocolSeed): NonNullable<LibraryItemDef['eraMode']> => {
  if (seed.eraMode) return seed.eraMode;
  if (seed.eras?.length) return 'specific';
  return universalEraRoutes.has(route) ? 'universal' : 'specific';
};

const inferEras = (
  route: string,
  seed: StyleProtocolSeed,
  defaultEras: readonly string[],
  eraMode: NonNullable<LibraryItemDef['eraMode']>
) => {
  if (eraMode === 'universal') return [];
  const source = seed.eras || defaultEras;
  const eras = timelessRoutes.has(route) ? uniq([...source]) : cleanEras(source);
  return eras.length ? eras : cleanEras(defaultEras);
};

export const makeStyleProtocolItems = (
  route: string,
  routeName: string,
  routeNameEn: string,
  defaultEras: string[],
  forbids: string[],
  families: StyleProtocolFamily[]
): LibraryItemDef[] => families.flatMap(family => family.items.map(seed => {
  const kind = seed.kind || family.defaultKind;
  if (!Array.isArray(seed.visual) || !Array.isArray(seed.visualEn)) {
    throw new Error(`Invalid style protocol seed: ${route}/${family.slug}/${seed.slug}. visual and visualEn must be arrays.`);
  }
  const visual = seed.visual.join('、');
  const visualEn = seed.visualEn.join(', ');
  const affects = uniq(seed.affects || family.defaultAffects);
  const controls = uniq([kind, family.slug, seed.slug, ...family.defaultControls, ...(seed.controls || [])]);
  const inferredOntologyLevel = seed.ontologyLevel || (kind === 'ontology' ? 4 : kind === 'cultural_image' ? 2 : 1);
  const ontologyLevel = clampOntology(Math.max(inferredOntologyLevel, routeOntologyFloor[route] || 1));
  const risk = seed.risk || (ontologyLevel >= 4 ? 'high' : kind === 'cultural_image' || ontologyLevel >= 2 ? 'medium' : 'clean');
  const familyKey = `${route}/${family.slug}`;
  const eraMode = inferEraMode(route, seed);
  const eras = seed.eras
    ? inferEras(route, seed, defaultEras, eraMode)
    : (eraMode === 'universal' ? [] : cleanEras(familyEraDefaults[familyKey] || defaultEras));
  const baseRealityTags = familyRealityTags[familyKey] || routeRealityTags[route] || ['realistic', 'physical', 'style_protocol'];
  const realityTags = uniq([...baseRealityTags, ...(seed.realityTags || [])]);
  const baseCategoryFit = familyCategoryFit[familyKey] || routeCategoryFit[route] || fit('weak');
  const categoryFit = mergeFit(baseCategoryFit, seed.categoryFit);
  const id = `cd_proto_${route.toLowerCase()}_${family.slug}_${seed.slug}`;
  const itemPatch = itemPatches[id] || {};
  const patchedEraMode = itemPatch.eraMode || eraMode;
  const patchedEras = patchedEraMode === 'universal' ? [] : (itemPatch.eras ? cleanEras(itemPatch.eras) : eras);
  const patchedRealityTags = itemPatch.realityTags ? uniq([...itemPatch.realityTags]) : realityTags;
  const patchedCategoryFit = itemPatch.categoryFit ? mergeFit(fit(itemPatch.categoryFit.unlisted || 'none'), itemPatch.categoryFit) : categoryFit;
  return {
    id,
    name: seed.name,
    nameEn: seed.nameEn,
    group: family.name,
    groupEn: family.nameEn,
    protocolCategory: routeName,
    protocolCategoryEn: routeNameEn,
    protocolKind: kind,
    def: `以${seed.focus}统摄角色，让${family.focus}成为可见设计法则。视觉签名：${visual}。`,
    defEn: `Govern the character through ${seed.focusEn}, making ${family.focusEn} a visible design law. Visual signatures: ${visualEn}.`,
    eraMode: patchedEraMode,
    eras: patchedEras,
    ontologyLevel: itemPatch.ontologyLevel || ontologyLevel,
    realityTags: patchedRealityTags,
    categoryFit: patchedCategoryFit,
    affects,
    risk,
    controls,
    forbids,
    absorptionRule: seed.absorption,
    absorptionRuleEn: seed.absorptionEn,
    styleRoute: route
  };
}));
