import { ConceptBaseItem, ConceptEra } from './types';

type SymbolSystemRow = [
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

type SymbolSystemAxisPatch = Pick<ConceptBaseItem, 'eraMode' | 'eras' | 'ontologyLevel' | 'realityTags' | 'categoryFit'>;
type SymbolCategoryFit = NonNullable<ConceptBaseItem['categoryFit']>;

const REAL_ERAS: ConceptEra[] = ['primitive', 'slave', 'feudal', 'early_modern', 'industrial', 'modern', 'contemporary', 'near_future', 'far_future'];
const ALL_ERAS: ConceptEra[] = ['primitive', 'slave', 'feudal', 'early_modern', 'industrial', 'modern', 'contemporary', 'near_future', 'far_future', 'timeless'];
const PREMODERN_ERAS: ConceptEra[] = ['primitive', 'slave', 'feudal', 'early_modern', 'timeless'];
const HISTORICAL_ERAS: ConceptEra[] = ['slave', 'feudal', 'early_modern', 'industrial', 'timeless'];
const INDUSTRIAL_PLUS_ERAS: ConceptEra[] = ['industrial', 'modern', 'contemporary', 'near_future', 'far_future', 'timeless'];
const MODERN_PLUS_ERAS: ConceptEra[] = ['modern', 'contemporary', 'near_future', 'far_future', 'timeless'];
const CONTEMPORARY_PLUS_ERAS: ConceptEra[] = ['contemporary', 'near_future', 'far_future', 'timeless'];
const FUTURE_ERAS: ConceptEra[] = ['near_future', 'far_future'];
const MYTHIC_ERAS: ConceptEra[] = ['feudal', 'early_modern', 'timeless', 'mythic'];
const WASTELAND_ERAS: ConceptEra[] = ['near_future', 'far_future', 'timeless'];

const symbolFit = (
  unlisted: SymbolCategoryFit['unlisted'],
  strong: string[] = [],
  usable: string[] = [],
  fusion: string[] = [],
  weak: string[] = [],
  exclude: string[] = []
): SymbolCategoryFit => ({ unlisted, strong, usable, fusion, weak, exclude });

const symbolAxis = (
  eraMode: SymbolSystemAxisPatch['eraMode'],
  eras: ConceptEra[],
  ontologyLevel: NonNullable<SymbolSystemAxisPatch['ontologyLevel']>,
  realityTags: string[],
  categoryFit: SymbolCategoryFit
): SymbolSystemAxisPatch => ({ eraMode, eras, ontologyLevel, realityTags, categoryFit });

const realisticSymbol = ['physical', 'realistic', 'symbol_evidence'];
const stylizedSymbol = ['physical', 'stylized', 'semi_real', 'symbol_evidence'];
const techSymbol = ['physical', 'stylized', 'semi_surreal', 'technological', 'symbol_evidence'];
const ritualSymbol = ['physical', 'stylized', 'semi_real', 'ritual', 'symbol_evidence'];
const surrealSymbol = ['non_realist', 'surreal', 'symbolic', 'symbol_evidence'];

const institutionFit = symbolFit('none', ['real_professional'], ['urban_life', 'war_military'], ['cyberpunk', 'science_fiction'], ['xianxia']);
const occupationalFit = symbolFit('none', ['real_professional'], ['urban_life', 'fashion_idol', 'noir_crime'], ['science_fiction'], ['xianxia']);
const historicalFit = symbolFit('none', ['historical', 'court'], ['wuxia', 'religious_ritual', 'romance'], ['dark_fantasy', 'xianxia'], ['cyberpunk', 'science_fiction']);
const armedFit = symbolFit('none', ['war_military'], ['wasteland', 'real_professional', 'adventure'], ['science_fiction', 'cyberpunk'], ['romance']);
const ritualFit = symbolFit('none', ['religious_ritual'], ['dark_fantasy', 'xianxia', 'mythic_epic', 'historical'], ['horror', 'surreal'], ['urban_life']);
const mediaFit = symbolFit('none', ['fashion_idol'], ['urban_life', 'boudoir_aesthetic', 'romance'], ['noir_crime', 'surreal'], ['war_military']);
const techFit = symbolFit('none', ['science_fiction'], ['cyberpunk', 'posthuman', 'biopunk'], ['religious_ritual', 'wasteland'], ['historical']);
const survivalFit = symbolFit('none', ['wasteland'], ['adventure', 'ecological', 'war_military'], ['science_fiction'], ['court']);

const SYMBOL_SYSTEM_AXIS: Record<string, SymbolSystemAxisPatch> = {
  name_patch: symbolAxis('specific', ['industrial', 'modern', 'contemporary', 'near_future', 'far_future'], 1, realisticSymbol, institutionFit),
  department_color_strip: symbolAxis('specific', ['modern', 'contemporary', 'near_future', 'far_future'], 1, realisticSymbol, institutionFit),
  access_level_badge: symbolAxis('specific', ['modern', 'contemporary', 'near_future', 'far_future'], 1, realisticSymbol, institutionFit),
  visitor_sticker: symbolAxis('specific', ['modern', 'contemporary', 'near_future', 'far_future'], 1, realisticSymbol, symbolFit('none', ['real_professional', 'urban_life'], ['noir_crime'], ['science_fiction'], ['historical'])),
  queue_number_tag: symbolAxis('specific', ['modern', 'contemporary', 'near_future', 'far_future'], 1, realisticSymbol, symbolFit('none', ['urban_life'], ['real_professional'], ['surreal'], ['xianxia'])),
  school_house_badge: symbolAxis('specific', ['modern', 'contemporary', 'near_future', 'far_future'], 1, realisticSymbol, symbolFit('none', ['urban_life'], ['real_professional', 'fashion_idol'], ['fantasy'], ['war_military'])),
  hospital_department_mark: symbolAxis('specific', ['modern', 'contemporary', 'near_future', 'far_future'], 1, realisticSymbol, symbolFit('none', ['real_professional'], ['urban_life', 'biopunk'], ['science_fiction'], ['wuxia'])),
  union_pin: symbolAxis('specific', ['industrial', 'modern', 'contemporary', 'near_future', 'far_future'], 1, realisticSymbol, symbolFit('none', ['real_professional'], ['urban_life', 'war_military'], ['wasteland'], ['xianxia'])),
  municipal_service_mark: symbolAxis('specific', ['industrial', 'modern', 'contemporary', 'near_future', 'far_future'], 1, realisticSymbol, institutionFit),

  tool_shadow_label: symbolAxis('specific', ['industrial', 'modern', 'contemporary', 'near_future', 'far_future'], 1, realisticSymbol, occupationalFit),
  sample_batch_code: symbolAxis('specific', ['modern', 'contemporary', 'near_future', 'far_future'], 1, realisticSymbol, symbolFit('none', ['real_professional'], ['biopunk', 'science_fiction'], ['horror'], ['wuxia'])),
  archive_spine_label: symbolAxis('specific', ['industrial', 'modern', 'contemporary', 'near_future', 'far_future'], 1, realisticSymbol, occupationalFit),
  inspection_stamp: symbolAxis('specific', ['industrial', 'modern', 'contemporary', 'near_future', 'far_future'], 1, realisticSymbol, occupationalFit),
  laundry_mark: symbolAxis('specific', ['industrial', 'modern', 'contemporary', 'near_future', 'far_future'], 1, realisticSymbol, symbolFit('none', ['real_professional'], ['urban_life', 'fashion_idol'], [], ['xianxia'])),
  price_tag_cutoff: symbolAxis('specific', ['modern', 'contemporary', 'near_future', 'far_future'], 1, realisticSymbol, symbolFit('none', ['urban_life', 'fashion_idol'], ['real_professional'], ['romance'], ['historical'])),
  maintenance_sticker: symbolAxis('specific', ['modern', 'contemporary', 'near_future', 'far_future'], 1, realisticSymbol, occupationalFit),
  hazard_handwritten_note: symbolAxis('specific', ['industrial', 'modern', 'contemporary', 'near_future', 'far_future'], 1, realisticSymbol, symbolFit('weak', ['real_professional'], ['wasteland', 'war_military', 'adventure'], ['horror'], [])),
  shift_schedule_card: symbolAxis('specific', ['industrial', 'modern', 'contemporary', 'near_future', 'far_future'], 1, realisticSymbol, occupationalFit),

  family_crest_patch: symbolAxis('specific', ['slave', 'feudal', 'early_modern', 'industrial'], 1, realisticSymbol, historicalFit),
  heraldic_beast: symbolAxis('specific', ['slave', 'feudal', 'early_modern', 'industrial'], 1, realisticSymbol, historicalFit),
  court_rank_embroidery: symbolAxis('specific', ['feudal', 'early_modern', 'timeless'], 1, realisticSymbol, symbolFit('none', ['court', 'historical'], ['wuxia', 'religious_ritual'], ['xianxia'], ['cyberpunk'])),
  seal_imprint_motif: symbolAxis('specific', ['slave', 'feudal', 'early_modern', 'industrial'], 1, realisticSymbol, historicalFit),
  guild_mark: symbolAxis('specific', ['slave', 'feudal', 'early_modern', 'industrial'], 1, realisticSymbol, historicalFit),
  pilgrim_badge: symbolAxis('specific', ['slave', 'feudal', 'early_modern', 'industrial'], 1, realisticSymbol, symbolFit('none', ['religious_ritual', 'historical'], ['adventure', 'court'], ['dark_fantasy'], ['cyberpunk'])),
  mourning_rosette: symbolAxis('specific', ['early_modern', 'industrial', 'modern'], 1, realisticSymbol, symbolFit('none', ['historical', 'romance'], ['court', 'dark_fantasy'], ['horror'], ['science_fiction'])),
  dynastic_color_pair: symbolAxis('specific', ['slave', 'feudal', 'early_modern', 'industrial'], 1, realisticSymbol, historicalFit),
  court_tab_marker: symbolAxis('specific', ['slave', 'feudal', 'early_modern', 'industrial'], 1, realisticSymbol, historicalFit),

  rank_insignia_tab: symbolAxis('specific', ['industrial', 'modern', 'contemporary', 'near_future', 'far_future'], 1, realisticSymbol, armedFit),
  unit_patch: symbolAxis('specific', ['modern', 'contemporary', 'near_future', 'far_future'], 1, realisticSymbol, armedFit),
  kill_tally_mark: symbolAxis('universal', REAL_ERAS, 1, realisticSymbol, symbolFit('usable', ['war_military'], ['wasteland', 'wuxia', 'adventure', 'dark_fantasy'], ['horror'], ['romance'])),
  warning_chevron: symbolAxis('specific', ['industrial', 'modern', 'contemporary', 'near_future', 'far_future'], 1, realisticSymbol, armedFit),
  ammunition_color_code: symbolAxis('specific', ['industrial', 'modern', 'contemporary', 'near_future', 'far_future'], 1, realisticSymbol, armedFit),
  riot_shield_label: symbolAxis('specific', ['modern', 'contemporary', 'near_future', 'far_future'], 1, realisticSymbol, armedFit),
  field_medic_cross: symbolAxis('specific', ['industrial', 'modern', 'contemporary', 'near_future', 'far_future'], 1, realisticSymbol, symbolFit('none', ['war_military', 'real_professional'], ['wasteland', 'adventure'], ['science_fiction'], ['wuxia'])),
  targeting_marker: symbolAxis('specific', ['modern', 'contemporary', 'near_future', 'far_future'], 2, stylizedSymbol, armedFit),
  hazmat_warning_label: symbolAxis('specific', ['industrial', 'modern', 'contemporary', 'near_future', 'far_future'], 2, stylizedSymbol, symbolFit('none', ['real_professional', 'wasteland'], ['war_military', 'horror', 'biopunk'], ['science_fiction'], ['court'])),

  sacred_geometry_patch: symbolAxis('specific', ['feudal', 'early_modern', 'timeless', 'mythic'], 2, ritualSymbol, ritualFit),
  talisman_paper_strip: symbolAxis('specific', ['feudal', 'early_modern', 'timeless', 'mythic'], 2, ritualSymbol, symbolFit('none', ['religious_ritual', 'xianxia'], ['dark_fantasy', 'wuxia', 'mythic_epic'], ['horror', 'surreal'], ['urban_life'])),
  wax_seal_mark: symbolAxis('specific', ['slave', 'feudal', 'early_modern', 'industrial'], 1, realisticSymbol, symbolFit('none', ['religious_ritual', 'historical'], ['court', 'dark_fantasy'], ['xianxia'], ['urban_life'])),
  prayer_abbreviation: symbolAxis('specific', ['feudal', 'early_modern', 'timeless', 'mythic'], 1, ritualSymbol, ritualFit),
  forbidden_object_tag: symbolAxis('specific', ['feudal', 'early_modern', 'timeless', 'mythic'], 2, ritualSymbol, ritualFit),
  monastic_rank_cord: symbolAxis('specific', ['feudal', 'early_modern', 'timeless', 'mythic'], 1, ritualSymbol, ritualFit),
  astrology_grid_mark: symbolAxis('specific', ['feudal', 'early_modern', 'timeless', 'mythic'], 2, ritualSymbol, ritualFit),
  procession_banner_glyph: symbolAxis('specific', ['feudal', 'early_modern', 'timeless', 'mythic'], 1, ritualSymbol, ritualFit),
  curse_seal_label: symbolAxis('specific', ['far_future', 'timeless', 'mythic'], 3, surrealSymbol, symbolFit('none', ['dark_fantasy', 'religious_ritual'], ['horror', 'xianxia', 'surreal'], ['body_horror'], ['urban_life'])),

  brandless_graphic_mark: symbolAxis('specific', ['modern', 'contemporary', 'near_future', 'far_future'], 1, realisticSymbol, mediaFit),
  runway_collection_code: symbolAxis('specific', ['modern', 'contemporary', 'near_future', 'far_future'], 1, realisticSymbol, mediaFit),
  magazine_cover_grid: symbolAxis('specific', ['modern', 'contemporary', 'near_future', 'far_future'], 1, realisticSymbol, mediaFit),
  club_stamp_wristband: symbolAxis('specific', ['modern', 'contemporary', 'near_future', 'far_future'], 1, realisticSymbol, symbolFit('none', ['urban_life', 'fashion_idol'], ['boudoir_aesthetic', 'romance'], ['noir_crime'], ['historical'])),
  subculture_patch_cluster: symbolAxis('specific', ['modern', 'contemporary', 'near_future', 'far_future'], 1, realisticSymbol, mediaFit),
  sticker_bomb_surface: symbolAxis('specific', ['modern', 'contemporary', 'near_future', 'far_future'], 1, realisticSymbol, mediaFit),
  fanclub_badge: symbolAxis('specific', ['contemporary', 'near_future', 'far_future'], 1, realisticSymbol, mediaFit),
  press_label_strip: symbolAxis('specific', ['contemporary', 'near_future', 'far_future'], 1, realisticSymbol, symbolFit('none', ['real_professional', 'fashion_idol'], ['urban_life'], ['cyberpunk'], ['historical'])),
  graffiti_tag_motif: symbolAxis('specific', ['modern', 'contemporary', 'near_future', 'far_future'], 1, realisticSymbol, symbolFit('none', ['urban_life', 'fashion_idol'], ['noir_crime', 'wasteland'], ['surreal'], ['court'])),

  qr_serial_label: symbolAxis('specific', ['modern', 'contemporary', 'near_future', 'far_future'], 2, techSymbol, techFit),
  hud_status_glyph: symbolAxis('specific', ['near_future', 'far_future'], 4, techSymbol, techFit),
  lab_subject_label: symbolAxis('specific', ['modern', 'contemporary', 'near_future', 'far_future'], 3, techSymbol, symbolFit('none', ['real_professional', 'biopunk'], ['science_fiction', 'posthuman'], ['horror'], ['wuxia'])),
  colony_id_code: symbolAxis('specific', ['near_future', 'far_future'], 3, techSymbol, techFit),
  circuit_panel_icon: symbolAxis('specific', ['near_future', 'far_future'], 3, techSymbol, techFit),
  biometric_lock_mark: symbolAxis('specific', ['contemporary', 'near_future', 'far_future'], 3, techSymbol, techFit),
  ai_corporate_sigil: symbolAxis('specific', ['near_future', 'far_future'], 4, techSymbol, techFit),
  holographic_pass_mark: symbolAxis('specific', ['near_future', 'far_future'], 4, techSymbol, techFit),
  biohazard_colony_label: symbolAxis('specific', ['near_future', 'far_future'], 3, techSymbol, symbolFit('none', ['biopunk', 'science_fiction'], ['posthuman', 'wasteland'], ['horror'], ['historical'])),

  ration_token_mark: symbolAxis('specific', ['near_future', 'far_future'], 1, realisticSymbol, survivalFit),
  handpainted_warning: symbolAxis('specific', ['near_future', 'far_future'], 1, realisticSymbol, survivalFit),
  scavenger_clan_mark: symbolAxis('specific', ['near_future', 'far_future'], 1, realisticSymbol, survivalFit),
  repair_tally_code: symbolAxis('specific', ['near_future', 'far_future'], 1, realisticSymbol, survivalFit),
  water_right_mark: symbolAxis('specific', ['near_future', 'far_future'], 1, realisticSymbol, survivalFit),
  salvage_route_arrow: symbolAxis('specific', ['near_future', 'far_future'], 1, realisticSymbol, survivalFit),
  radiation_faded_label: symbolAxis('specific', ['near_future', 'far_future'], 2, stylizedSymbol, survivalFit),
  shelter_number_stencil: symbolAxis('specific', ['near_future', 'far_future'], 1, realisticSymbol, survivalFit),
  reclaimed_factory_label: symbolAxis('specific', ['industrial', 'modern', 'contemporary', 'near_future', 'far_future'], 1, realisticSymbol, symbolFit('none', ['wasteland'], ['real_professional', 'war_military'], ['science_fiction'], ['court']))
};

const SYMBOL_ROWS: SymbolSystemRow[] = [
  ['name_patch', '姓名贴', 'Name Patch', 'A. 现实/机构符号', 'A. Real / Institutional Signs', '衣服、胸牌或工具包上的姓名贴，说明现实身份和岗位。', 'Name patch on clothing, badge, or tool bag, explaining real identity and role.', 1, INDUSTRIAL_PLUS_ERAS, 'clean', ['symbol', 'occupation']],
  ['department_color_strip', '部门色条', 'Department Color Strip', 'A. 现实/机构符号', 'A. Real / Institutional Signs', '制服、证件或袖口上的部门色条，建立机构内部分工。', 'Department color strip on uniform, ID, or cuff, building internal division.', 1, MODERN_PLUS_ERAS, 'clean', ['symbol', 'costume']],
  ['access_level_badge', '权限等级牌', 'Access-Level Badge', 'A. 现实/机构符号', 'A. Real / Institutional Signs', '通行证上的等级、楼层、区域或权限标识。', 'Access badge showing rank, floor, zone, or clearance level.', 1, MODERN_PLUS_ERAS, 'clean', ['symbol', 'institution']],
  ['visitor_sticker', '访客贴纸', 'Visitor Sticker', 'A. 现实/机构符号', 'A. Real / Institutional Signs', '临时访客贴纸、日期和手写编号，说明角色在制度中的临时位置。', 'Temporary visitor sticker, date, and handwritten number show temporary position inside a system.', 1, MODERN_PLUS_ERAS, 'clean', ['symbol', 'institution']],
  ['queue_number_tag', '排队号码牌', 'Queue Number Tag', 'A. 现实/机构符号', 'A. Real / Institutional Signs', '号码牌、叫号纸或窗口编号锚定公共服务和等待制度。', 'Number tag, queue slip, or counter code anchors public service and waiting systems.', 1, MODERN_PLUS_ERAS, 'clean', ['symbol', 'social']],
  ['school_house_badge', '学院/班级徽章', 'School or Class Badge', 'A. 现实/机构符号', 'A. Real / Institutional Signs', '校徽、班级章或学院色，适合学生、教师和训练机构。', 'School emblem, class badge, or house color, suited to students, teachers, and training institutions.', 1, MODERN_PLUS_ERAS, 'clean', ['symbol', 'costume']],
  ['hospital_department_mark', '医院科室标识', 'Hospital Department Mark', 'A. 现实/机构符号', 'A. Real / Institutional Signs', '科室色、病区标签或医护胸牌，让医疗身份更具体。', 'Department color, ward tag, or medical badge makes healthcare identity more specific.', 1, MODERN_PLUS_ERAS, 'clean', ['symbol', 'medical']],
  ['union_pin', '工会胸针', 'Union Pin', 'A. 现实/机构符号', 'A. Real / Institutional Signs', '工会、协会或行业组织的小胸针，说明劳动群体归属。', 'Small pin for union, association, or trade group, showing labor belonging.', 1, INDUSTRIAL_PLUS_ERAS, 'clean', ['symbol', 'social']],
  ['municipal_service_mark', '市政服务标识', 'Municipal Service Mark', 'A. 现实/机构符号', 'A. Real / Institutional Signs', '城市服务、环卫、交通或公共机构的非品牌标识。', 'Non-brand mark of city service, sanitation, transit, or public institution.', 1, INDUSTRIAL_PLUS_ERAS, 'clean', ['symbol', 'institution']],

  ['tool_shadow_label', '工具轮廓标签', 'Tool Shadow Label', 'B. 职业/功能符号', 'B. Occupational / Functional Signs', '工具位的轮廓贴、编号和缺口，说明角色的工作流程。', 'Tool-position silhouette label, number, and missing slot explain work process.', 1, INDUSTRIAL_PLUS_ERAS, 'clean', ['symbol', 'occupation', 'prop']],
  ['sample_batch_code', '样本批次码', 'Sample Batch Code', 'B. 职业/功能符号', 'B. Occupational / Functional Signs', '样本盒、试剂袋或文件上的批次码，锚定实验/医疗流程。', 'Batch code on sample case, reagent bag, or file anchors lab or medical workflow.', 1, MODERN_PLUS_ERAS, 'clean', ['symbol', 'lab']],
  ['archive_spine_label', '档案脊标', 'Archive Spine Label', 'B. 职业/功能符号', 'B. Occupational / Functional Signs', '文件夹、书脊和档案盒标签，强调保管和分类制度。', 'Folder, book-spine, or archive-box label emphasizing custody and classification.', 1, INDUSTRIAL_PLUS_ERAS, 'clean', ['symbol', 'archive']],
  ['inspection_stamp', '检验印章', 'Inspection Stamp', 'B. 职业/功能符号', 'B. Occupational / Functional Signs', '合格章、日期章或复核章，说明检查、工厂或行政流程。', 'Approval stamp, date stamp, or review mark indicates inspection, factory, or bureaucracy process.', 1, INDUSTRIAL_PLUS_ERAS, 'clean', ['symbol', 'institution']],
  ['laundry_mark', '洗衣房记号', 'Laundry Mark', 'B. 职业/功能符号', 'B. Occupational / Functional Signs', '衣物内侧的洗衣记号、旅馆编号或后勤标签。', 'Laundry mark, hotel number, or logistics label inside garments.', 1, INDUSTRIAL_PLUS_ERAS, 'clean', ['symbol', 'costume']],
  ['price_tag_cutoff', '剪掉的价格吊牌', 'Cut-Off Price Tag', 'B. 职业/功能符号', 'B. Occupational / Functional Signs', '残留吊牌绳和剪口，说明零售、样衣、二手或贫富关系。', 'Remaining tag string and cut point suggest retail, samples, second-hand, or class relation.', 1, MODERN_PLUS_ERAS, 'clean', ['symbol', 'costume']],
  ['maintenance_sticker', '维护贴纸', 'Maintenance Sticker', 'B. 职业/功能符号', 'B. Occupational / Functional Signs', '设备、包或装备上的维护日期和维修签名。', 'Service date and repair signature sticker on device, bag, or gear.', 1, MODERN_PLUS_ERAS, 'clean', ['symbol', 'wear']],
  ['hazard_handwritten_note', '手写危险便签', 'Handwritten Hazard Note', 'B. 职业/功能符号', 'B. Occupational / Functional Signs', '手写警告、临时箭头和工作便签，保持低技术现实感。', 'Handwritten warning, temporary arrow, and work note keeping low-tech realism.', 1, INDUSTRIAL_PLUS_ERAS, 'clean', ['symbol', 'occupation']],
  ['shift_schedule_card', '班次卡', 'Shift Schedule Card', 'B. 职业/功能符号', 'B. Occupational / Functional Signs', '口袋里的班表、打卡纸或轮班牌，锚定劳动时间。', 'Shift card, punch card, or rota tag in pocket anchors labor time.', 1, INDUSTRIAL_PLUS_ERAS, 'clean', ['symbol', 'occupation']],

  ['family_crest_patch', '家徽布章', 'Family Crest Patch', 'C. 历史/礼制符号', 'C. Historical / Etiquette Signs', '衣袍、披风或旗帜上的家徽，说明继承和阶层。', 'Family crest on robe, cloak, or banner, explaining inheritance and class.', 1, HISTORICAL_ERAS, 'clean', ['symbol', 'costume']],
  ['heraldic_beast', '纹章兽', 'Heraldic Beast', 'C. 历史/礼制符号', 'C. Historical / Etiquette Signs', '狮、鹰、鹿、蛇等纹章兽作为家族或骑士制度符号。', 'Lion, eagle, deer, serpent, or other heraldic beast as family or knightly sign.', 1, HISTORICAL_ERAS, 'clean', ['symbol']],
  ['court_rank_embroidery', '官阶补子', 'Court Rank Embroidery', 'C. 历史/礼制符号', 'C. Historical / Etiquette Signs', '胸背补子、等级鸟兽或官阶绣纹，必须服从时代礼制。', 'Rank badge, bird-beast motif, or official embroidery must obey period etiquette.', 1, ['feudal', 'early_modern', 'timeless'], 'clean', ['symbol', 'costume']],
  ['seal_imprint_motif', '印玺纹样', 'Seal-Imprint Motif', 'C. 历史/礼制符号', 'C. Historical / Etiquette Signs', '印章、火漆、朱印或玺文成为外部权力符号。', 'Seal, wax, red imprint, or royal script becomes external power sign.', 1, HISTORICAL_ERAS, 'clean', ['symbol', 'prop']],
  ['guild_mark', '行会标记', 'Guild Mark', 'C. 历史/礼制符号', 'C. Historical / Etiquette Signs', '商会、工匠行会或学院的图形标记。', 'Graphic mark of merchant guild, craft guild, or college.', 1, HISTORICAL_ERAS, 'clean', ['symbol', 'occupation']],
  ['pilgrim_badge', '朝圣徽章', 'Pilgrim Badge', 'C. 历史/礼制符号', 'C. Historical / Etiquette Signs', '缝在衣物或帽子上的朝圣徽章，说明路线和信仰身份。', 'Pilgrim badge sewn on garment or hat, indicating route and faith identity.', 1, HISTORICAL_ERAS, 'clean', ['symbol', 'ritual']],
  ['mourning_rosette', '哀悼花结', 'Mourning Rosette', 'C. 历史/礼制符号', 'C. Historical / Etiquette Signs', '黑色花结、袖章或小缎带表达丧礼身份。', 'Black rosette, armband, or small ribbon expresses mourning status.', 1, ['early_modern', 'industrial', 'modern', 'timeless'], 'clean', ['symbol', 'emotion']],
  ['dynastic_color_pair', '王朝配色符号', 'Dynastic Color Pair', 'C. 历史/礼制符号', 'C. Historical / Etiquette Signs', '两种固定礼制色代表家族、王朝或阵营。', 'Two fixed ceremonial colors represent family, dynasty, or faction.', 1, HISTORICAL_ERAS, 'clean', ['symbol', 'palette']],
  ['court_tab_marker', '朝会标签', 'Court Audience Marker', 'C. 历史/礼制符号', 'C. Historical / Etiquette Signs', '朝会、宴会或仪仗队列中的位置标签和礼仪排序。', 'Position mark and etiquette order for court audience, banquet, or procession.', 1, HISTORICAL_ERAS, 'clean', ['symbol', 'pose']],

  ['rank_insignia_tab', '军阶肩章', 'Rank Insignia Tab', 'D. 武装/危险符号', 'D. Armed / Hazard Signs', '肩章、领章或臂章说明等级和指挥关系。', 'Shoulder, collar, or arm insignia shows rank and command relation.', 1, INDUSTRIAL_PLUS_ERAS, 'medium', ['symbol', 'combat']],
  ['unit_patch', '单位臂章', 'Unit Patch', 'D. 武装/危险符号', 'D. Armed / Hazard Signs', '非真实单位的臂章、队徽和行动编号。', 'Fictional unit patch, team emblem, and operation number.', 1, MODERN_PLUS_ERAS, 'medium', ['symbol', 'combat']],
  ['kill_tally_mark', '击杀刻记', 'Kill Tally Mark', 'D. 武装/危险符号', 'D. Armed / Hazard Signs', '武器、护具或装备上的计数刻痕，需控制为角色经历证据。', 'Tally scratches on weapon, armor, or gear, controlled as character-experience evidence.', 1, ALL_ERAS, 'medium', ['symbol', 'wear']],
  ['warning_chevron', '警示斜纹', 'Warning Chevron', 'D. 武装/危险符号', 'D. Armed / Hazard Signs', '黄黑、红白或高对比斜纹说明危险边界。', 'Yellow-black, red-white, or high-contrast chevrons mark danger boundary.', 1, INDUSTRIAL_PLUS_ERAS, 'medium', ['symbol', 'danger']],
  ['ammunition_color_code', '弹药色码', 'Ammunition Color Code', 'D. 武装/危险符号', 'D. Armed / Hazard Signs', '弹药袋、箱体或武器附件上的功能色码。', 'Functional color codes on ammo pouch, crate, or weapon accessory.', 1, INDUSTRIAL_PLUS_ERAS, 'medium', ['symbol', 'combat']],
  ['riot_shield_label', '防暴盾标签', 'Riot Shield Label', 'D. 武装/危险符号', 'D. Armed / Hazard Signs', '透明盾、护具或头盔上的控制/警戒标识。', 'Control or warning mark on transparent shield, armor, or helmet.', 1, MODERN_PLUS_ERAS, 'medium', ['symbol', 'combat']],
  ['field_medic_cross', '战地医疗十字', 'Field Medic Cross', 'D. 武装/危险符号', 'D. Armed / Hazard Signs', '医疗十字、急救色块或救援布章，说明战地非攻击职能。', 'Medical cross, emergency color block, or rescue patch showing non-attack field role.', 1, INDUSTRIAL_PLUS_ERAS, 'clean', ['symbol', 'medical']],
  ['targeting_marker', '目标标识贴', 'Targeting Marker', 'D. 武装/危险符号', 'D. Armed / Hazard Signs', '任务贴、目标箭头或回收标记，需处在战斗/行动语境。', 'Mission sticker, target arrow, or retrieval mark must sit in combat or operation context.', 2, ['modern', 'contemporary', 'near_future', 'far_future'], 'medium', ['symbol', 'combat']],
  ['hazmat_warning_label', '危化警示标签', 'Hazmat Warning Label', 'D. 武装/危险符号', 'D. Armed / Hazard Signs', '危化、辐射、生物风险或隔离标签，需由实验/污染场域解释。', 'Chemical, radiation, biohazard, or quarantine label must be explained by lab or pollution field.', 2, INDUSTRIAL_PLUS_ERAS, 'medium', ['symbol', 'danger']],

  ['sacred_geometry_patch', '神圣几何布符', 'Sacred Geometry Patch', 'E. 仪式/神秘符号', 'E. Ritual / Occult Signs', '圆环、三角、星象或结形作为衣物/道具上的仪式符号。', 'Circle, triangle, astral, or knot shape as ritual sign on clothing or prop.', 2, MYTHIC_ERAS, 'medium', ['symbol', 'ritual']],
  ['talisman_paper_strip', '护符纸条', 'Talisman Paper Strip', 'E. 仪式/神秘符号', 'E. Ritual / Occult Signs', '纸符、祷文条或封条贴在衣物、道具或盒子上。', 'Paper charm, prayer strip, or seal placed on garment, prop, or box.', 2, MYTHIC_ERAS, 'medium', ['symbol', 'ritual']],
  ['wax_seal_mark', '蜡封印记', 'Wax Seal Mark', 'E. 仪式/神秘符号', 'E. Ritual / Occult Signs', '蜡封、绳结和印纹作为禁令或契约符号。', 'Wax seal, knot, and imprint as prohibition or covenant sign.', 1, HISTORICAL_ERAS, 'clean', ['symbol', 'ritual']],
  ['prayer_abbreviation', '祷文缩写', 'Prayer Abbreviation', 'E. 仪式/神秘符号', 'E. Ritual / Occult Signs', '法衣、书页或圣物上的缩写祷文和礼仪字符。', 'Abbreviated prayer and liturgical characters on vestment, page, or relic.', 1, MYTHIC_ERAS, 'clean', ['symbol', 'ritual']],
  ['forbidden_object_tag', '禁物标签', 'Forbidden-Object Tag', 'E. 仪式/神秘符号', 'E. Ritual / Occult Signs', '挂在匣子、瓶子或包裹上的禁忌标签。', 'Taboo label attached to box, bottle, or wrapped object.', 2, MYTHIC_ERAS, 'medium', ['symbol', 'prop']],
  ['monastic_rank_cord', '修会等级绳色', 'Monastic Rank Cord Color', 'E. 仪式/神秘符号', 'E. Ritual / Occult Signs', '绳结颜色、结数和位置说明修会等级。', 'Cord color, knot count, and position explain monastic rank.', 1, MYTHIC_ERAS, 'clean', ['symbol', 'costume']],
  ['astrology_grid_mark', '星象格网', 'Astrology Grid Mark', 'E. 仪式/神秘符号', 'E. Ritual / Occult Signs', '衣摆、卷轴或器物上的星象格网，控制为符号而非大场景。', 'Astrology grid on hem, scroll, or object, controlled as sign rather than large scene.', 2, MYTHIC_ERAS, 'medium', ['symbol', 'ritual']],
  ['procession_banner_glyph', '仪仗旗幡字形', 'Procession Banner Glyph', 'E. 仪式/神秘符号', 'E. Ritual / Occult Signs', '旗幡、长杖或披挂上的公共仪式字形。', 'Public-ritual glyph on banner, staff, or drape.', 1, MYTHIC_ERAS, 'clean', ['symbol', 'ritual']],
  ['curse_seal_label', '诅咒封签', 'Curse Seal Label', 'E. 仪式/神秘符号', 'E. Ritual / Occult Signs', '封签暗示诅咒或封存，不直接让身体异形化。', 'Seal label implies curse or containment without directly mutating the body.', 3, ['timeless', 'mythic', 'far_future'], 'high', ['symbol', 'ritual'], ['containment'], ['unexplained body mutation']],

  ['brandless_graphic_mark', '无品牌图形标', 'Brandless Graphic Mark', 'F. 时尚/媒体/亚文化符号', 'F. Fashion / Media / Subculture Signs', '非真实品牌的抽象标志，用于造型识别而不复制 IP。', 'Abstract non-real-brand mark for styling identity without copying IP.', 1, MODERN_PLUS_ERAS, 'clean', ['symbol', 'style'], ['fashion'], ['real logo']],
  ['runway_collection_code', '秀场系列编号', 'Runway Collection Code', 'F. 时尚/媒体/亚文化符号', 'F. Fashion / Media / Subculture Signs', '样衣编号、系列字母和走秀顺序码。', 'Sample number, collection letters, and runway order code.', 1, MODERN_PLUS_ERAS, 'clean', ['symbol', 'fashion']],
  ['magazine_cover_grid', '杂志封面格线', 'Magazine Cover Grid', 'F. 时尚/媒体/亚文化符号', 'F. Fashion / Media / Subculture Signs', '编辑系统里的封面格线、栏目字母或版式标记。', 'Cover grid, section letters, or layout marks from editorial systems.', 1, MODERN_PLUS_ERAS, 'clean', ['symbol', 'media']],
  ['club_stamp_wristband', '夜店手环/印章', 'Club Wristband or Stamp', 'F. 时尚/媒体/亚文化符号', 'F. Fashion / Media / Subculture Signs', '手环、入场章或荧光票根作为夜场身份符号。', 'Wristband, entry stamp, or fluorescent ticket stub as nightlife sign.', 1, MODERN_PLUS_ERAS, 'clean', ['symbol', 'social']],
  ['subculture_patch_cluster', '亚文化布章群', 'Subculture Patch Cluster', 'F. 时尚/媒体/亚文化符号', 'F. Fashion / Media / Subculture Signs', '夹克、包或帽子上的布章群，表达青年部落归属。', 'Patch cluster on jacket, bag, or cap expresses youth-tribe belonging.', 1, MODERN_PLUS_ERAS, 'clean', ['symbol', 'style']],
  ['sticker_bomb_surface', '贴纸轰炸表面', 'Sticker-Bomb Surface', 'F. 时尚/媒体/亚文化符号', 'F. Fashion / Media / Subculture Signs', '滑板、箱包或设备上的贴纸层，不变成真实品牌堆叠。', 'Sticker layers on skateboard, bag, or device without becoming real-brand clutter.', 1, MODERN_PLUS_ERAS, 'medium', ['symbol', 'style'], ['subculture'], ['real logo pile']],
  ['fanclub_badge', '粉丝会徽章', 'Fanclub Badge', 'F. 时尚/媒体/亚文化符号', 'F. Fashion / Media / Subculture Signs', '粉丝会、应援或偶像工业的小徽章和色码。', 'Small fanclub, support, or idol-industry badge and color code.', 1, CONTEMPORARY_PLUS_ERAS, 'clean', ['symbol', 'media']],
  ['press_label_strip', '媒体标签条', 'Press Label Strip', 'F. 时尚/媒体/亚文化符号', 'F. Fashion / Media / Subculture Signs', '摄影、采访、直播或后台通行的标签条。', 'Label strip for photography, interview, live stream, or backstage access.', 1, CONTEMPORARY_PLUS_ERAS, 'clean', ['symbol', 'media']],
  ['graffiti_tag_motif', '涂鸦签名母题', 'Graffiti Tag Motif', 'F. 时尚/媒体/亚文化符号', 'F. Fashion / Media / Subculture Signs', '虚构涂鸦签名、喷绘箭头或街头图形母题。', 'Fictional graffiti signature, spray arrow, or street graphic motif.', 1, MODERN_PLUS_ERAS, 'medium', ['symbol', 'style']],

  ['qr_serial_label', '二维码/序列标签', 'QR or Serial Label', 'G. 科幻/技术符号', 'G. Sci-Fi / Tech Signs', '二维码、序列号或机器可读标签，只在现代以后成立。', 'QR code, serial, or machine-readable label, only valid from modern eras onward.', 2, MODERN_PLUS_ERAS, 'medium', ['symbol', 'technology']],
  ['hud_status_glyph', 'HUD 状态字形', 'HUD Status Glyph', 'G. 科幻/技术符号', 'G. Sci-Fi / Tech Signs', '界面字形、状态条或小图标，需科幻/近未来授权。', 'Interface glyph, status strip, or small icon requiring sci-fi or near-future permission.', 4, FUTURE_ERAS, 'high', ['symbol', 'technology']],
  ['lab_subject_label', '实验体标签', 'Lab Subject Label', 'G. 科幻/技术符号', 'G. Sci-Fi / Tech Signs', '衣物、项圈或封存箱上的实验对象编号。', 'Test-subject code on garment, collar, or containment case.', 3, ['modern', 'contemporary', 'near_future', 'far_future'], 'medium', ['symbol', 'lab']],
  ['colony_id_code', '殖民地身份码', 'Colony ID Code', 'G. 科幻/技术符号', 'G. Sci-Fi / Tech Signs', '空间站、殖民地或企业城市的身份编号。', 'Identity code of station, colony, or corporate city.', 3, FUTURE_ERAS, 'medium', ['symbol', 'technology']],
  ['circuit_panel_icon', '电路面板图标', 'Circuit Panel Icon', 'G. 科幻/技术符号', 'G. Sci-Fi / Tech Signs', '面板、织物或设备上的电路式功能图标。', 'Circuit-like functional icon on panel, fabric, or device.', 3, FUTURE_ERAS, 'medium', ['symbol', 'technology']],
  ['biometric_lock_mark', '生物识别锁标', 'Biometric Lock Mark', 'G. 科幻/技术符号', 'G. Sci-Fi / Tech Signs', '掌纹、虹膜或基因锁图标，锚定技术制度。', 'Palm, iris, or gene-lock icon anchoring tech institution.', 3, ['contemporary', 'near_future', 'far_future'], 'medium', ['symbol', 'technology']],
  ['ai_corporate_sigil', 'AI 企业圣徽', 'AI Corporate Sigil', 'G. 科幻/技术符号', 'G. Sci-Fi / Tech Signs', 'AI 公司、合成宗教或未来机构的非真实品牌圣徽。', 'Non-real-brand sigil of AI corporation, synthetic religion, or future institution.', 4, FUTURE_ERAS, 'high', ['symbol', 'technology', 'ritual'], ['AI institution'], ['real logo']],
  ['holographic_pass_mark', '全息通行标', 'Holographic Pass Mark', 'G. 科幻/技术符号', 'G. Sci-Fi / Tech Signs', '微型全息通行标，必须受未来媒介和世界法则允许。', 'Small holographic access mark requiring future medium and world-law permission.', 4, FUTURE_ERAS, 'high', ['symbol', 'technology'], ['access'], ['historical era']],
  ['biohazard_colony_label', '生物危害殖民标签', 'Biohazard Colony Label', 'G. 科幻/技术符号', 'G. Sci-Fi / Tech Signs', '未来实验、污染隔离或殖民地危险标签。', 'Future experiment, contamination quarantine, or colony hazard label.', 3, ['near_future', 'far_future'], 'medium', ['symbol', 'lab']],

  ['ration_token_mark', '口粮配给标记', 'Ration Token Mark', 'H. 废土/生存符号', 'H. Wasteland / Survival Signs', '口粮币、配给章或补给等级标，说明稀缺秩序。', 'Ration token, supply stamp, or provision-rank mark explains scarcity order.', 1, WASTELAND_ERAS, 'clean', ['symbol', 'survival']],
  ['handpainted_warning', '手绘警示符号', 'Hand-Painted Warning Sign', 'H. 废土/生存符号', 'H. Wasteland / Survival Signs', '衣物、包或木牌上的手绘危险符号。', 'Hand-painted danger sign on garment, bag, or wood board.', 1, WASTELAND_ERAS, 'medium', ['symbol', 'danger']],
  ['scavenger_clan_mark', '拾荒者群体标记', 'Scavenger Clan Mark', 'H. 废土/生存符号', 'H. Wasteland / Survival Signs', '拾荒团体、车队或避难所的简陋群体符号。', 'Rough group sign of scavenger crew, convoy, or shelter.', 1, WASTELAND_ERAS, 'clean', ['symbol', 'social']],
  ['repair_tally_code', '维修计数码', 'Repair Tally Code', 'H. 废土/生存符号', 'H. Wasteland / Survival Signs', '胶带、补丁或装备上的维修次数刻记。', 'Repair-count marks on tape, patch, or equipment.', 1, WASTELAND_ERAS, 'clean', ['symbol', 'wear']],
  ['water_right_mark', '水源权标记', 'Water-Rights Mark', 'H. 废土/生存符号', 'H. Wasteland / Survival Signs', '水袋、滤罐或衣物上的水源归属符号。', 'Water ownership sign on canteen, filter, or garment.', 1, WASTELAND_ERAS, 'clean', ['symbol', 'survival']],
  ['salvage_route_arrow', '拾荒路线箭头', 'Salvage Route Arrow', 'H. 废土/生存符号', 'H. Wasteland / Survival Signs', '地图板、包带或护具上的手绘路线箭头。', 'Hand-drawn route arrow on map board, strap, or armor.', 1, WASTELAND_ERAS, 'clean', ['symbol', 'world']],
  ['radiation_faded_label', '褪色辐射标签', 'Faded Radiation Label', 'H. 废土/生存符号', 'H. Wasteland / Survival Signs', '旧设施标签被再利用，表达污染和废墟时代。', 'Old facility label reused to express contamination and ruin era.', 2, WASTELAND_ERAS, 'medium', ['symbol', 'danger']],
  ['shelter_number_stencil', '避难所模板编号', 'Shelter Number Stencil', 'H. 废土/生存符号', 'H. Wasteland / Survival Signs', '喷涂模板编号、避难所门牌或幸存者区域码。', 'Stencil number, shelter plate, or survivor-zone code.', 1, WASTELAND_ERAS, 'clean', ['symbol', 'social']],
  ['reclaimed_factory_label', '再利用工厂标签', 'Reclaimed Factory Label', 'H. 废土/生存符号', 'H. Wasteland / Survival Signs', '旧工业标签被缝在衣物或装备上，说明材料来源。', 'Old industrial label sewn onto clothing or gear, explaining material source.', 1, ['industrial', 'modern', 'contemporary', 'near_future', 'far_future', 'timeless'], 'clean', ['symbol', 'material']]
];

const buildEvidenceTags = (group: string, affects: readonly string[], controls: readonly string[]): string[] => {
  const tags = new Set<string>([...affects, ...controls]);
  if (group.startsWith('A.') || group.startsWith('B.')) tags.add('institution');
  if (group.startsWith('C.')) tags.add('historical');
  if (group.startsWith('D.')) tags.add('combat');
  if (group.startsWith('E.')) tags.add('ritual');
  if (group.startsWith('F.')) tags.add('media');
  if (group.startsWith('G.')) tags.add('technology');
  if (group.startsWith('H.')) tags.add('survival');
  return Array.from(tags);
};

export const CD_SYMBOL_SYSTEMS: ConceptBaseItem[] = SYMBOL_ROWS.map(([
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
  affects = ['symbol'],
  controls = ['symbol'],
  forbids = []
]) => {
  const axisPatch = SYMBOL_SYSTEM_AXIS[key];
  return {
    id: `cd_sym_${key}`,
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
