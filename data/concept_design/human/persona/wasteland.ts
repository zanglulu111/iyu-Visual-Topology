import {
  cleanPersonaEras,
  PersonaCategoryFit,
  personaEraModeFor,
  PersonaEra,
  personaFit,
  personaRealityTagsFor,
  PersonaTerm
} from './types';

type PersonaSeed = {
  id: string;
  name: string;
  nameEn: string;
  group: string;
  groupEn: string;
  def: string;
  defEn: string;
  ontologyLevel?: 1 | 2 | 3 | 4 | 5;
  eras?: PersonaEra[];
  risk?: 'clean' | 'medium' | 'high';
  tags?: string[];
  styleTags?: string[];
  controls?: string[];
  forbids?: string[];
  absorptionRule?: string;
  absorptionRuleEn?: string;
  eraMode?: PersonaTerm['eraMode'];
  realityTags?: string[];
  categoryFit?: PersonaTerm['categoryFit'];
};

const wastelandEras: PersonaEra[] = ['near_future', 'far_future'];
const modernWastelandEras: PersonaEra[] = ['industrial', 'modern', 'contemporary', 'near_future', 'far_future'];
const desertEras: PersonaEra[] = ['primitive', 'feudal', 'industrial', 'near_future'];
const baseControls = ['costume', 'prop', 'wear_trace', 'material', 'pose', 'scarcity', 'tool'];
const defaultForbids = ['干净高定过度覆盖', '无解释宫廷礼制', '纯社交媒体精修感', '随机赛博霓虹抢走灾后生存逻辑'];

const wastelandFit = (group: string): PersonaCategoryFit => {
  if (group.startsWith('A.')) return personaFit('weak', {
    strong: ['wasteland', 'post_apocalyptic', 'adventure'],
    usable: ['urban_life', 'real_professional', 'ecological'],
    fusion: ['noir_crime', 'science_fiction'],
    weak: ['court', 'xianxia', 'fashion_idol']
  });
  if (group.startsWith('B.')) return personaFit('weak', {
    strong: ['wasteland', 'post_apocalyptic', 'war_military'],
    usable: ['adventure', 'science_fiction', 'noir_crime'],
    fusion: ['cyberpunk', 'body_horror'],
    weak: ['court', 'romance', 'urban_life']
  });
  if (group.startsWith('C.')) return personaFit('weak', {
    strong: ['ecological', 'body_horror', 'wasteland'],
    usable: ['post_apocalyptic', 'biopunk', 'horror'],
    fusion: ['dark_fantasy', 'surreal'],
    weak: ['court', 'fashion_idol', 'workplace']
  });
  if (group.startsWith('D.')) return personaFit('weak', {
    strong: ['biopunk', 'wasteland', 'post_apocalyptic'],
    usable: ['body_horror', 'horror', 'adventure'],
    fusion: ['mythic_epic', 'dark_fantasy'],
    weak: ['court', 'romance', 'real_professional']
  });
  if (group.startsWith('E.')) return personaFit('weak', {
    strong: ['wasteland', 'post_apocalyptic', 'horror'],
    usable: ['war_military', 'science_fiction', 'body_horror'],
    fusion: ['cosmic_horror', 'surreal'],
    weak: ['court', 'fashion_idol', 'urban_life']
  });
  if (group.startsWith('F.')) return personaFit('weak', {
    strong: ['wasteland', 'adventure', 'post_apocalyptic'],
    usable: ['war_military', 'ecological', 'historical'],
    fusion: ['fantasy', 'dark_fantasy'],
    weak: ['urban_life', 'court', 'fashion_idol']
  });
  if (group.startsWith('G.')) return personaFit('weak', {
    strong: ['wasteland', 'adventure', 'ecological'],
    usable: ['post_apocalyptic', 'science_fiction', 'surreal'],
    fusion: ['space_opera', 'fantasy'],
    weak: ['court', 'workplace', 'fashion_idol']
  });
  if (group.startsWith('H.')) return personaFit('weak', {
    strong: ['post_apocalyptic', 'horror', 'medical'],
    usable: ['wasteland', 'body_horror', 'biopunk'],
    fusion: ['science_fiction', 'dark_fantasy'],
    weak: ['romance', 'court', 'fashion_idol']
  });
  if (group.startsWith('I.')) return personaFit('weak', {
    strong: ['urban_life', 'post_apocalyptic', 'wasteland'],
    usable: ['noir_crime', 'real_professional', 'workplace'],
    fusion: ['cyberpunk', 'horror'],
    weak: ['court', 'xianxia', 'mythic_epic']
  });
  return personaFit('weak', {
    strong: ['ecological', 'post_apocalyptic', 'real_professional'],
    usable: ['wasteland', 'urban_life', 'institutional'],
    fusion: ['romance', 'science_fiction'],
    weak: ['court', 'war_military', 'body_horror']
  });
};

const wastelandFitOverrides: Record<string, PersonaCategoryFit> = {
  water_filter_tinker: personaFit('weak', {
    strong: ['wasteland', 'post_apocalyptic', 'real_professional'],
    usable: ['ecological', 'workplace', 'urban_life'],
    fusion: ['science_fiction'],
    weak: ['court', 'xianxia', 'fashion_idol']
  }),
  plastic_shrine_collector: personaFit('weak', {
    strong: ['wasteland', 'post_apocalyptic'],
    usable: ['urban_life', 'religious_ritual', 'ecological'],
    fusion: ['surreal', 'dark_fantasy'],
    weak: ['court', 'fashion_idol', 'xianxia']
  }),
  old_world_phone_fixer: personaFit('weak', {
    strong: ['wasteland', 'post_apocalyptic', 'real_professional'],
    usable: ['workplace', 'urban_life'],
    fusion: ['science_fiction', 'cyberpunk'],
    weak: ['court', 'xianxia', 'fashion_idol']
  }),
  can_city_archivist: personaFit('weak', {
    strong: ['wasteland', 'post_apocalyptic', 'institutional'],
    usable: ['urban_life', 'real_professional'],
    fusion: ['surreal'],
    weak: ['court', 'xianxia', 'fashion_idol']
  }),
  hospital_scrap_nurse: personaFit('weak', {
    strong: ['medical', 'real_professional', 'wasteland'],
    usable: ['post_apocalyptic', 'urban_life'],
    fusion: ['horror', 'biopunk'],
    weak: ['court', 'xianxia', 'fashion_idol']
  }),
  desert_convoy_mother: personaFit('weak', {
    strong: ['wasteland', 'post_apocalyptic', 'adventure'],
    usable: ['romance', 'war_military', 'ecological'],
    fusion: ['science_fiction'],
    weak: ['court', 'fashion_idol', 'urban_life']
  }),
  war_rig_mechanic: personaFit('weak', {
    strong: ['wasteland', 'post_apocalyptic', 'real_professional'],
    usable: ['war_military', 'workplace', 'adventure'],
    fusion: ['science_fiction', 'cyberpunk'],
    weak: ['court', 'romance', 'fashion_idol']
  }),
  fuel_tanker_priest: personaFit('weak', {
    strong: ['wasteland', 'post_apocalyptic', 'religious_ritual'],
    usable: ['war_military', 'adventure'],
    fusion: ['dark_fantasy', 'surreal'],
    weak: ['court', 'romance', 'fashion_idol']
  }),
  engine_chant_driver: personaFit('weak', {
    strong: ['wasteland', 'post_apocalyptic', 'adventure'],
    usable: ['war_military', 'religious_ritual'],
    fusion: ['cyberpunk', 'surreal'],
    weak: ['court', 'romance', 'fashion_idol']
  }),
  spare_parts_bride: personaFit('weak', {
    strong: ['wasteland', 'post_apocalyptic', 'romance'],
    usable: ['war_military', 'adventure'],
    fusion: ['cyberpunk', 'body_horror'],
    weak: ['court', 'urban_life', 'fashion_idol']
  }),
  black_smoke_oracle: personaFit('weak', {
    strong: ['wasteland', 'post_apocalyptic', 'surreal'],
    usable: ['war_military', 'religious_ritual'],
    fusion: ['dark_fantasy', 'cosmic_horror'],
    weak: ['court', 'romance', 'fashion_idol']
  }),
  mycelium_midwife: personaFit('weak', {
    strong: ['ecological', 'medical', 'body_horror'],
    usable: ['wasteland', 'post_apocalyptic', 'biopunk'],
    fusion: ['dark_fantasy'],
    weak: ['court', 'fashion_idol', 'workplace']
  }),
  mushroom_city_courier: personaFit('weak', {
    strong: ['ecological', 'wasteland', 'adventure'],
    usable: ['post_apocalyptic', 'urban_life', 'biopunk'],
    fusion: ['surreal'],
    weak: ['court', 'fashion_idol', 'workplace']
  }),
  rot_garden_nun: personaFit('weak', {
    strong: ['ecological', 'religious_ritual', 'body_horror'],
    usable: ['wasteland', 'post_apocalyptic', 'horror'],
    fusion: ['dark_fantasy'],
    weak: ['court', 'fashion_idol', 'workplace']
  }),
  mold_archive_librarian: personaFit('weak', {
    strong: ['ecological', 'institutional', 'body_horror'],
    usable: ['wasteland', 'post_apocalyptic', 'real_professional'],
    fusion: ['horror', 'surreal'],
    weak: ['court', 'fashion_idol', 'war_military']
  }),
  spore_dream_patient: personaFit('weak', {
    strong: ['ecological', 'medical', 'surreal'],
    usable: ['body_horror', 'biopunk', 'horror'],
    fusion: ['dark_fantasy'],
    weak: ['court', 'fashion_idol', 'workplace']
  }),
  fungal_crown_prophet: personaFit('weak', {
    strong: ['ecological', 'surreal', 'religious_ritual'],
    usable: ['body_horror', 'wasteland', 'post_apocalyptic'],
    fusion: ['dark_fantasy', 'cosmic_horror'],
    weak: ['court', 'fashion_idol', 'workplace']
  }),
  organ_seed_farmer: personaFit('weak', {
    strong: ['biopunk', 'ecological', 'wasteland'],
    usable: ['post_apocalyptic', 'body_horror', 'real_professional'],
    fusion: ['dark_fantasy'],
    weak: ['court', 'romance', 'fashion_idol']
  }),
  gene_clan_heir: personaFit('weak', {
    strong: ['biopunk', 'wasteland', 'post_apocalyptic'],
    usable: ['court', 'body_horror', 'adventure'],
    fusion: ['mythic_epic', 'dark_fantasy'],
    weak: ['romance', 'real_professional', 'workplace']
  }),
  hatchery_guard_mother: personaFit('weak', {
    strong: ['biopunk', 'wasteland', 'post_apocalyptic'],
    usable: ['romance', 'body_horror', 'adventure'],
    fusion: ['dark_fantasy'],
    weak: ['court', 'fashion_idol', 'workplace']
  }),
  cloned_war_daughter: personaFit('weak', {
    strong: ['biopunk', 'war_military', 'post_apocalyptic'],
    usable: ['wasteland', 'body_horror', 'adventure'],
    fusion: ['science_fiction'],
    weak: ['court', 'romance', 'fashion_idol']
  }),
  bio_suture_bride: personaFit('weak', {
    strong: ['biopunk', 'body_horror', 'romance'],
    usable: ['wasteland', 'post_apocalyptic', 'horror'],
    fusion: ['dark_fantasy'],
    weak: ['court', 'real_professional', 'workplace']
  }),
  womb_engine_mechanic: personaFit('weak', {
    strong: ['biopunk', 'body_horror', 'real_professional'],
    usable: ['wasteland', 'post_apocalyptic', 'science_fiction'],
    fusion: ['surreal'],
    weak: ['court', 'romance', 'fashion_idol']
  }),
  radiation_soup_kitchen_cook: personaFit('weak', {
    strong: ['wasteland', 'post_apocalyptic', 'real_professional'],
    usable: ['medical', 'urban_life', 'workplace'],
    fusion: ['horror'],
    weak: ['court', 'fashion_idol', 'romance']
  }),
  dosimeter_schoolgirl: personaFit('weak', {
    strong: ['post_apocalyptic', 'urban_life', 'horror'],
    usable: ['wasteland', 'science_fiction', 'medical'],
    fusion: ['surreal'],
    weak: ['court', 'fashion_idol', 'romance']
  }),
  lead_coat_doctor: personaFit('weak', {
    strong: ['medical', 'post_apocalyptic', 'wasteland'],
    usable: ['science_fiction', 'real_professional', 'horror'],
    fusion: ['body_horror'],
    weak: ['court', 'fashion_idol', 'romance']
  }),
  bunker_birth_registrar: personaFit('weak', {
    strong: ['institutional', 'post_apocalyptic', 'wasteland'],
    usable: ['urban_life', 'real_professional'],
    fusion: ['science_fiction', 'horror'],
    weak: ['court', 'fashion_idol', 'romance']
  }),
  iodine_tablet_smuggler: personaFit('weak', {
    strong: ['noir_crime', 'post_apocalyptic', 'wasteland'],
    usable: ['medical', 'urban_life', 'science_fiction'],
    fusion: ['horror'],
    weak: ['court', 'fashion_idol', 'romance']
  }),
  aurora_mutation_saint: personaFit('weak', {
    strong: ['post_apocalyptic', 'religious_ritual', 'horror'],
    usable: ['wasteland', 'body_horror', 'science_fiction'],
    fusion: ['cosmic_horror', 'surreal'],
    weak: ['court', 'fashion_idol', 'romance']
  }),
  solar_still_engineer: personaFit('weak', {
    strong: ['wasteland', 'ecological', 'real_professional'],
    usable: ['post_apocalyptic', 'adventure', 'historical'],
    fusion: ['science_fiction'],
    weak: ['court', 'fashion_idol', 'urban_life']
  }),
  thorn_scrub_healer: personaFit('weak', {
    strong: ['wasteland', 'medical', 'ecological'],
    usable: ['historical', 'adventure'],
    fusion: ['fantasy', 'dark_fantasy'],
    weak: ['court', 'fashion_idol', 'cyberpunk']
  }),
  sand_burial_singer: personaFit('weak', {
    strong: ['wasteland', 'religious_ritual', 'historical'],
    usable: ['adventure', 'ecological'],
    fusion: ['dark_fantasy', 'romance'],
    weak: ['urban_life', 'court', 'fashion_idol']
  }),
  flood_roof_teacher: personaFit('weak', {
    strong: ['wasteland', 'post_apocalyptic', 'institutional'],
    usable: ['ecological', 'real_professional', 'urban_life'],
    fusion: ['science_fiction'],
    weak: ['court', 'fashion_idol', 'war_military']
  }),
  saltwater_fisher_bride: personaFit('weak', {
    strong: ['wasteland', 'ecological', 'romance'],
    usable: ['post_apocalyptic', 'adventure'],
    fusion: ['fantasy'],
    weak: ['court', 'workplace', 'fashion_idol']
  }),
  floating_market_broker: personaFit('weak', {
    strong: ['wasteland', 'urban_life', 'real_professional'],
    usable: ['post_apocalyptic', 'adventure', 'noir_crime'],
    fusion: ['science_fiction'],
    weak: ['court', 'fashion_idol', 'war_military']
  }),
  salvage_diver_medic: personaFit('weak', {
    strong: ['wasteland', 'medical', 'adventure'],
    usable: ['post_apocalyptic', 'ecological', 'real_professional'],
    fusion: ['science_fiction'],
    weak: ['court', 'fashion_idol', 'romance']
  }),
  rain_tank_princess: personaFit('weak', {
    strong: ['wasteland', 'post_apocalyptic', 'court'],
    usable: ['ecological', 'adventure'],
    fusion: ['fantasy'],
    weak: ['workplace', 'fashion_idol', 'war_military']
  }),
  storm_barrier_engineer: personaFit('weak', {
    strong: ['wasteland', 'ecological', 'real_professional'],
    usable: ['post_apocalyptic', 'science_fiction', 'urban_life'],
    fusion: ['space_opera'],
    weak: ['court', 'fashion_idol', 'romance']
  }),
  floating_chapel_deacon: personaFit('weak', {
    strong: ['wasteland', 'religious_ritual', 'ecological'],
    usable: ['post_apocalyptic', 'urban_life'],
    fusion: ['fantasy', 'dark_fantasy'],
    weak: ['court', 'fashion_idol', 'war_military']
  }),
  red_zone_paramedic: personaFit('weak', {
    strong: ['medical', 'post_apocalyptic', 'real_professional'],
    usable: ['wasteland', 'horror', 'biopunk'],
    fusion: ['science_fiction'],
    weak: ['romance', 'court', 'fashion_idol']
  }),
  hazmat_gate_clerk: personaFit('weak', {
    strong: ['institutional', 'post_apocalyptic', 'workplace'],
    usable: ['wasteland', 'medical', 'horror'],
    fusion: ['science_fiction'],
    weak: ['romance', 'court', 'fashion_idol']
  }),
  chemical_rain_schoolboy: personaFit('weak', {
    strong: ['urban_life', 'post_apocalyptic', 'horror'],
    usable: ['wasteland', 'medical'],
    fusion: ['science_fiction', 'biopunk'],
    weak: ['court', 'fashion_idol', 'romance']
  }),
  filter_mask_pop_singer: personaFit('weak', {
    strong: ['fashion_idol', 'post_apocalyptic', 'horror'],
    usable: ['wasteland', 'urban_life', 'medical'],
    fusion: ['science_fiction'],
    weak: ['romance', 'court', 'wuxia']
  }),
  exclusion_zone_bride: personaFit('weak', {
    strong: ['romance', 'post_apocalyptic', 'horror'],
    usable: ['wasteland', 'medical'],
    fusion: ['science_fiction', 'dark_fantasy'],
    weak: ['court', 'fashion_idol', 'wuxia']
  }),
  warning_tape_dancer: personaFit('weak', {
    strong: ['fashion_idol', 'post_apocalyptic', 'horror'],
    usable: ['wasteland', 'urban_life'],
    fusion: ['surreal'],
    weak: ['court', 'romance', 'wuxia']
  }),
  sealed_city_inspector: personaFit('weak', {
    strong: ['institutional', 'post_apocalyptic', 'real_professional'],
    usable: ['wasteland', 'medical', 'urban_life'],
    fusion: ['science_fiction'],
    weak: ['romance', 'court', 'fashion_idol']
  }),
  subway_tunnel_doctor: personaFit('weak', {
    strong: ['urban_life', 'medical', 'post_apocalyptic'],
    usable: ['wasteland', 'real_professional', 'noir_crime'],
    fusion: ['horror'],
    weak: ['court', 'xianxia', 'fashion_idol']
  }),
  courthouse_barricade_judge: personaFit('weak', {
    strong: ['urban_life', 'institutional', 'post_apocalyptic'],
    usable: ['wasteland', 'real_professional', 'noir_crime'],
    fusion: ['horror'],
    weak: ['court', 'xianxia', 'fashion_idol']
  }),
  fire_escape_bride: personaFit('weak', {
    strong: ['urban_life', 'post_apocalyptic', 'romance'],
    usable: ['wasteland', 'noir_crime'],
    fusion: ['horror'],
    weak: ['court', 'xianxia', 'fashion_idol']
  }),
  seed_bank_librarian: personaFit('weak', {
    strong: ['ecological', 'institutional', 'real_professional'],
    usable: ['post_apocalyptic', 'wasteland', 'urban_life'],
    fusion: ['science_fiction'],
    weak: ['court', 'war_military', 'body_horror']
  }),
  compost_temple_keeper: personaFit('weak', {
    strong: ['ecological', 'religious_ritual', 'post_apocalyptic'],
    usable: ['wasteland', 'real_professional'],
    fusion: ['dark_fantasy'],
    weak: ['court', 'war_military', 'body_horror']
  }),
  windmill_wedding_officiant: personaFit('weak', {
    strong: ['ecological', 'romance', 'real_professional'],
    usable: ['post_apocalyptic', 'wasteland', 'religious_ritual'],
    fusion: ['science_fiction'],
    weak: ['court', 'war_military', 'body_horror']
  }),
  plant_school_principal: personaFit('weak', {
    strong: ['ecological', 'institutional', 'real_professional'],
    usable: ['post_apocalyptic', 'urban_life', 'wasteland'],
    fusion: ['science_fiction'],
    weak: ['court', 'war_military', 'body_horror']
  })
};

const wp = (seed: PersonaSeed): PersonaTerm => {
  const ontologyLevel = seed.ontologyLevel ?? 2;
  const eras = cleanPersonaEras(seed.eras ?? wastelandEras);
  const risk = seed.risk ?? (ontologyLevel >= 4 ? 'medium' : 'clean');
  const controls = Array.from(new Set([...baseControls, ...(seed.controls || [])]));
  const eraMode = personaEraModeFor(eras, seed.eraMode);
  return {
    id: `cd_persona_wasteland_${seed.id}`,
    name: seed.name,
    nameEn: seed.nameEn,
    group: seed.group,
    groupEn: seed.groupEn,
    def: seed.def,
    defEn: seed.defEn,
    personaCategory: '废土 / 生态异变 / 灾后人设',
    personaCategoryEn: 'Wasteland / Ecological Mutation / Post-Disaster Persona',
    personaSubgroup: seed.group.replace(/^[A-J]\.\s*/, ''),
    personaSubgroupEn: seed.groupEn.replace(/^[A-J]\.\s*/, ''),
    personaKind: seed.name,
    personaKindEn: seed.nameEn,
    personaStrength: ontologyLevel >= 4 ? 'strong' : ontologyLevel >= 2 ? 'medium' : 'light',
    isCompoundPersona: true,
    ontologyLevel,
    eraMode,
    eras,
    risk,
    affects: controls,
    controls,
    forbids: Array.from(new Set([...(seed.forbids || []), ...defaultForbids])),
    absorptionRule: seed.absorptionRule || `外来元素优先折译为“${seed.name}”的资源制度、修补结构、污染防护、工具、伤痕、路线或共同体身份，不要直接堆成无关奇观。`,
    absorptionRuleEn: seed.absorptionRuleEn || `Translate outside elements into the resource system, repair structure, contamination protection, tools, scars, routes, or community identity of "${seed.nameEn}"; do not stack them into unrelated spectacle.`,
    tags: Array.from(new Set(['persona', 'wasteland', 'survival', 'compound_persona', ...(seed.tags || [])])),
    realityTags: seed.realityTags || personaRealityTagsFor(ontologyLevel, ['wasteland', 'survival']),
    categoryFit: seed.categoryFit || wastelandFitOverrides[seed.id] || wastelandFit(seed.group),
    styleTags: Array.from(new Set(['wasteland', 'survival', ...(seed.styleTags || []), ...(seed.tags || [])])),
    timeTags: eras
  };
};

const seeds: PersonaSeed[] = [
  { id: 'market_scrap_picker', name: '废墟市集拾荒客', nameEn: 'Ruin-Market Scrap Picker', group: 'A. 废土拾荒 / 资源回收', groupEn: 'A. Salvage / Resource Recovery', def: '第一识别是能从废墟市集的噪声里判断每块零件价值的拾荒客。造型入口：拼接背包、分类挂钩、袖口油污、旧布层和手指不停掂量物件的动作。母题：交易眼光本身就是生存工具。张力：不要冒险者套装，重点是精明、脏旧秩序和资源判断力。视觉证据：称重绳、零件袋、讨价手势、被修补多次的鞋。边界：避免干净废土时装。', defEn: 'First read: a scrap picker who can judge the value of parts inside the noise of a ruin market. Styling entry: patched backpack, sorting hooks, oily cuffs, old cloth layers, and fingers constantly weighing objects. Motif: trade judgment itself as survival tool. Tension: not an adventurer outfit; focus on shrewdness, dirty order, and resource appraisal. Visual evidence: weighing cord, parts bags, bargaining gestures, repeatedly repaired shoes. Boundary: avoid clean wasteland fashion.', tags: ['salvage', 'market', 'picker'] },
  { id: 'copper_wire_child', name: '铜线回收少年', nameEn: 'Copper-Wire Salvage Teen', group: 'A. 废土拾荒 / 资源回收', groupEn: 'A. Salvage / Resource Recovery', def: '第一识别是靠拆铜线换口粮的瘦小少年。造型入口：肩上缠绕铜线、旧手套露指、被电器灰弄黑的脸、随时钻进废柜的轻快身体。母题：儿童敏捷被资源贫乏训练成技术。张力：不要卖惨，重点是眼力、速度和懂得哪些线不能碰。视觉证据：剥线刀、烧焦插头、铜色手痕、藏在衣内的小线卷。边界：避免普通流浪儿童。', defEn: 'First read: a slight teen trading stripped copper wire for food. Styling entry: copper coils over the shoulder, fingerless old gloves, appliance soot on the face, and a quick body ready to slip into dead cabinets. Motif: childhood agility trained into technique by scarcity. Tension: avoid pity; focus on eyesight, speed, and knowing which wires not to touch. Visual evidence: wire stripper, burnt plugs, copper stains on hands, small coils hidden under clothing. Boundary: avoid generic street child.', tags: ['copper', 'teen', 'salvage'] },
  { id: 'water_filter_tinker', name: '净水器修补匠', nameEn: 'Water-Filter Tinker', group: 'A. 废土拾荒 / 资源回收', groupEn: 'A. Salvage / Resource Recovery', def: '第一识别是能把脏水修回可饮用状态的净水器修补匠。造型入口：湿斑围裙、过滤管、胶带补丁、手边一排不同颜色的水样。母题：技术价值来自让别人活到明天。张力：他不是普通修理工，所有动作都和干净水的道德重量相关。视觉证据：滤芯、滴漏瓶、手写水质表、口渴人群的等待。边界：避免单纯工匠或科幻工程师。', defEn: 'First read: a tinker able to repair dirty water back into drinkability. Styling entry: damp apron, filter tubes, tape patches, and rows of water samples in different colors. Motif: technical value comes from letting others live until tomorrow. Tension: not a generic repairman; every gesture carries the moral weight of clean water. Visual evidence: filter cores, drip bottles, handwritten water-quality sheet, thirsty people waiting. Boundary: avoid plain craftsman or sci-fi engineer.', tags: ['water', 'filter', 'tinker'] },
  { id: 'battery_graveyard_girl', name: '电池坟场女孩', nameEn: 'Battery-Graveyard Girl', group: 'A. 废土拾荒 / 资源回收', groupEn: 'A. Salvage / Resource Recovery', risk: 'medium', def: '第一识别是在废电池堆里长大、对危险能源异常冷静的女孩。造型入口：酸蚀手套、护目镜、挂在腰间的旧电池串、衣角有淡淡灼痕。母题：能源残骸既是财富也是毒物。张力：不要可爱化，她的冷静来自长期接触危险。视觉证据：腐蚀斑、分类箱、电压笔、避开漏液的脚步。边界：避免普通电工少女。', defEn: 'First read: a girl raised among dead battery piles, strangely calm around dangerous energy. Styling entry: acid-worn gloves, goggles, old battery strings at the waist, and faint burns on clothing edges. Motif: energy remains are both wealth and poison. Tension: do not make her cute; her calm comes from long exposure to danger. Visual evidence: corrosion spots, sorting boxes, voltage pen, footsteps avoiding leakage. Boundary: avoid generic electrician girl.', tags: ['battery', 'graveyard', 'girl'] },
  { id: 'plastic_shrine_collector', name: '塑料圣龛收藏者', nameEn: 'Plastic-Shrine Collector', group: 'A. 废土拾荒 / 资源回收', groupEn: 'A. Salvage / Resource Recovery', ontologyLevel: 2, def: '第一识别是把旧世界塑料碎片收集成小圣龛的人。造型入口：彩色瓶盖、裂玩具、绳结护符、外套内侧挂满微型塑料偶像。母题：消费残骸被重新赋予护身意义。张力：不要神秘化成真正宗教，重点是贫穷、记忆和物件崇拜。视觉证据：塑料祭台、透明袋、褪色包装、虔诚整理的手。边界：避免普通垃圾收藏者。', defEn: 'First read: a collector turning old-world plastic fragments into small shrines. Styling entry: colored caps, broken toys, knot charms, and miniature plastic icons lining the coat interior. Motif: consumer debris given protective meaning. Tension: do not turn it into actual mysticism; focus on poverty, memory, and object devotion. Visual evidence: plastic altar, clear bags, faded packaging, reverent sorting hands. Boundary: avoid generic trash collector.', tags: ['plastic', 'shrine', 'collector'] },
  { id: 'old_world_phone_fixer', name: '旧世界手机修理师', nameEn: 'Old-World Phone Fixer', group: 'A. 废土拾荒 / 资源回收', groupEn: 'A. Salvage / Resource Recovery', def: '第一识别是专门修旧世界手机、让失效记忆短暂亮起的人。造型入口：裂屏手机、微型螺丝刀、太阳能充电板、眼睛贴近屏幕时的专注。母题：通讯废物变成记忆修复。张力：他不是潮流数码玩家，珍贵的是几秒旧照片和失联名单。视觉证据：拆开的后盖、屏幕蓝光、备件盒、顾客屏息等待。边界：避免普通维修店。', defEn: 'First read: a fixer of old-world phones who briefly lights failed memories back up. Styling entry: cracked phones, micro screwdriver, solar charger, and intense eyes close to the screen. Motif: communication waste as memory repair. Tension: not a trendy tech user; the treasure is a few seconds of old photos and lost contact lists. Visual evidence: opened back covers, blue screen glow, spare-part trays, customers holding breath. Boundary: avoid ordinary repair shop.', tags: ['phone', 'repair', 'old_world'] },
  { id: 'can_city_archivist', name: '罐头城档案员', nameEn: 'Can-City Archivist', group: 'A. 废土拾荒 / 资源回收', groupEn: 'A. Salvage / Resource Recovery', def: '第一识别是用罐头标签、保质期和库存编号记录城镇历史的档案员。造型入口：铁皮徽章、旧账本、按年份排列的空罐、衣袋里塞满标签。母题：食物存量成为时间制度。张力：不要普通图书管理员，知识来自饥饿和配给。视觉证据：罐头墙、手写索引、铁锈手指、核对日期的表情。边界：避免可爱收藏癖。', defEn: 'First read: an archivist recording town history through can labels, expiration dates, and inventory codes. Styling entry: tin badge, old ledger, empty cans arranged by year, and pockets full of labels. Motif: food stock becoming a time system. Tension: not a generic librarian; knowledge comes from hunger and rationing. Visual evidence: wall of cans, handwritten index, rusty fingers, expression checking dates. Boundary: avoid cute collecting habit.', tags: ['can', 'archive', 'food'] },
  { id: 'roof_solar_scavenger', name: '屋顶太阳能拾荒者', nameEn: 'Rooftop Solar Scavenger', group: 'A. 废土拾荒 / 资源回收', groupEn: 'A. Salvage / Resource Recovery', def: '第一识别是在高楼残骸上拆太阳能板的拾荒者。造型入口：安全绳、破太阳能板、风吹围巾、膝盖护具和总向下估算坠落距离的眼。母题：电力来自危险高度。张力：不要屋顶英雄，重点是风、失足风险和一点点电的价值。视觉证据：玻璃碎片、背板划痕、绳扣、临时电池包。边界：避免普通登山者。', defEn: 'First read: a scavenger stripping solar panels from high-rise ruins. Styling entry: safety rope, broken panels, wind-torn scarf, knee guards, and eyes measuring fall distance below. Motif: electricity comes from dangerous height. Tension: not a rooftop hero; focus on wind, fall risk, and the value of a little power. Visual evidence: glass shards, scratched panels, rope clips, improvised battery pack. Boundary: avoid generic climber.', tags: ['solar', 'rooftop', 'scavenger'] },
  { id: 'hospital_scrap_nurse', name: '医院废料护士', nameEn: 'Hospital-Scrap Nurse', group: 'A. 废土拾荒 / 资源回收', groupEn: 'A. Salvage / Resource Recovery', risk: 'medium', def: '第一识别是从废弃医院里回收还能救人的医疗材料的护士。造型入口：旧护士服外罩脏围裙、药瓶袋、重复使用的手套、眼神始终在判断污染等级。母题：专业照护在废料中延续。张力：她不是普通护士，所有温柔都经过资源计算。视觉证据：过期药标、消毒盒、绷带卷、手写禁用清单。边界：避免性感护士或纯拾荒者。', defEn: 'First read: a nurse salvaging still-useful medical material from abandoned hospitals. Styling entry: old nurse uniform under dirty apron, bottle pouches, reused gloves, and eyes constantly judging contamination levels. Motif: professional care continuing through waste. Tension: not a generic nurse; every tenderness passes through resource calculation. Visual evidence: expired labels, sterilization box, bandage rolls, handwritten no-use list. Boundary: avoid sexy nurse or pure scavenger.', tags: ['hospital', 'scrap', 'nurse'] },
  { id: 'elevator_cable_raider', name: '电梯缆索拆解人', nameEn: 'Elevator-Cable Stripper', group: 'A. 废土拾荒 / 资源回收', groupEn: 'A. Salvage / Resource Recovery', risk: 'medium', def: '第一识别是在废楼电梯井里拆钢缆和铜线的人。造型入口：安全扣、切割钳、肩上粗缆、手臂擦伤和在垂直黑暗里听回声的停顿。母题：城市高度被拆解成可卖材料。张力：不要普通盗贼，重点是高危劳动和对建筑残骸的熟悉。视觉证据：井道灰尘、断缆毛刺、头灯、绳索磨痕。边界：避免跑酷角色。', defEn: 'First read: a stripper of steel cables and copper lines inside dead elevator shafts. Styling entry: safety clips, cutting pliers, thick cable over shoulder, arm scrapes, and pauses listening to echoes in vertical darkness. Motif: urban height dismantled into sellable material. Tension: not a thief; focus on high-risk labor and knowledge of building remains. Visual evidence: shaft dust, frayed cable ends, headlamp, rope abrasion. Boundary: avoid parkour character.', tags: ['cable', 'stripper', 'ruin'] },

  { id: 'desert_convoy_mother', name: '荒原车队母亲', nameEn: 'Desert-Convoy Mother', group: 'B. 柴油车队 / 荒原机动', groupEn: 'B. Diesel Convoy / Wasteland Mobility', eras: desertEras, def: '第一识别是把整支荒原车队当成家庭和责任来管理的母亲。造型入口：防尘头巾、燃油票、孩子的护目镜挂在胸前、手势能让车辆队形安静下来。母题：母职扩展成迁徙秩序。张力：她不是温柔背景人物，温柔里有路线、油量和纪律。视觉证据：车队徽章、儿童座位改装、沙尘手套、审视远路的眼。边界：避免普通公路母亲。', defEn: 'First read: a mother who manages an entire desert convoy as family and duty. Styling entry: dust scarf, fuel tickets, a child goggle hanging at the chest, and gestures able to quiet vehicle formation. Motif: motherhood expanded into migration order. Tension: not a gentle background figure; tenderness carries route, fuel, and discipline. Visual evidence: convoy badge, modified child seat, dusty gloves, eyes judging the road. Boundary: avoid ordinary road-trip mother.', tags: ['convoy', 'mother', 'desert'] },
  { id: 'war_rig_mechanic', name: '战争卡车机械师', nameEn: 'War-Rig Mechanic', group: 'B. 柴油车队 / 荒原机动', groupEn: 'B. Diesel Convoy / Wasteland Mobility', eras: desertEras, risk: 'medium', def: '第一识别是把战争卡车修成移动堡垒的机械师。造型入口：油污背心、焊接疤、扳手挂链、耳朵习惯分辨引擎异常的偏头。母题：车辆生命线由手艺维持。张力：不要赛车酷感，重点是维修、疲惫和知道哪颗螺丝会害死人。视觉证据：烧黑手套、备件箱、车底滑板、柴油汗味。边界：避免普通机车潮人。', defEn: 'First read: a mechanic keeping a war rig alive as a moving fortress. Styling entry: oily vest, welding scars, wrench chain, and a head tilt trained to hear engine faults. Motif: vehicle lifeline maintained by craft. Tension: not racing coolness; focus on repair, fatigue, and knowing which bolt can kill people. Visual evidence: burnt gloves, parts crate, creeper board, diesel sweat. Boundary: avoid generic biker fashion.', tags: ['war_rig', 'mechanic', 'diesel'] },
  { id: 'fuel_tanker_priest', name: '燃油罐车祭司', nameEn: 'Fuel-Tanker Priest', group: 'B. 柴油车队 / 荒原机动', groupEn: 'B. Diesel Convoy / Wasteland Mobility', ontologyLevel: 3, risk: 'medium', eras: desertEras, def: '第一识别是把燃油分配流程仪式化的罐车祭司。造型入口：黑手套、油桶香炉、燃油符号、每次开阀前让众人安静的姿态。母题：稀缺能源被社会秩序神圣化。张力：不要变成真正神职，神圣感来自油量、生存和分配权。视觉证据：油票、阀门、罐车阴影、手套上的黑亮油痕。边界：避免普通加油员。', defEn: 'First read: a tanker priest who ritualizes fuel distribution. Styling entry: black gloves, oil-can censer, fuel symbols, and a posture silencing everyone before opening the valve. Motif: scarce energy sacralized by social order. Tension: not actual clergy; sacredness comes from fuel level, survival, and distribution power. Visual evidence: fuel tickets, valve handles, tanker shadow, glossy oil on gloves. Boundary: avoid gas-station attendant.', tags: ['fuel', 'priest', 'convoy'] },
  { id: 'goggle_road_scout', name: '护目镜公路侦察手', nameEn: 'Goggle Road Scout', group: 'B. 柴油车队 / 荒原机动', groupEn: 'B. Diesel Convoy / Wasteland Mobility', eras: desertEras, def: '第一识别是替车队先一步进入热浪和坏路的公路侦察手。造型入口：风镜、路标碎片、皮夹克、膝上地图板和总把身体转向风口的站姿。母题：路线判断比武器更重要。张力：不要冒险骑士，重点是谨慎、视野和替队伍承担第一层风险。视觉证据：望远镜、尘封地图、风沙擦痕、报告手势。边界：避免普通摩托手。', defEn: 'First read: a road scout entering heat haze and broken roads ahead of the convoy. Styling entry: goggles, road-sign shards, leather jacket, map board on knee, and a stance turned toward the wind. Motif: route judgment matters more than weapons. Tension: not an adventure rider; focus on caution, vision, and taking first risk for the group. Visual evidence: binoculars, dusty maps, sand scratches, report gesture. Boundary: avoid generic motorcyclist.', tags: ['scout', 'road', 'goggles'] },
  { id: 'tire_wall_warlord', name: '轮胎墙军阀', nameEn: 'Tire-Wall Warlord', group: 'B. 柴油车队 / 荒原机动', groupEn: 'B. Diesel Convoy / Wasteland Mobility', risk: 'high', eras: desertEras, def: '第一识别是用废轮胎修成路障和权力边界的荒原军阀。造型入口：轮胎护甲、粗链、扩音器、站在轮胎墙上俯视来车的姿态。母题：交通控制变成暴力统治。张力：他不是普通强盗，权力来自路口、燃料和通行许可。视觉证据：路障编号、轮胎烟痕、收费牌、随从队形。边界：避免中世纪暴君换皮。', defEn: 'First read: a wasteland warlord building power borders from scrap-tire walls. Styling entry: tire armor, heavy chains, loudspeaker, and looking down at approaching vehicles from the tire wall. Motif: traffic control becoming violent rule. Tension: not a generic bandit; power comes from crossroads, fuel, and passage permits. Visual evidence: barricade numbers, tire-smoke stains, toll signs, follower formation. Boundary: avoid medieval tyrant reskin.', tags: ['warlord', 'tire', 'road'] },
  { id: 'engine_chant_driver', name: '引擎圣歌车手', nameEn: 'Engine-Chant Driver', group: 'B. 柴油车队 / 荒原机动', groupEn: 'B. Diesel Convoy / Wasteland Mobility', ontologyLevel: 3, eras: desertEras, def: '第一识别是把引擎节奏听成圣歌、用声音稳定自己驾驶的车手。造型入口：方向盘护符、干裂嘴唇、跟随转速低声哼唱、手指随震动敲节拍。母题：机器噪声变成心理秩序。张力：不要魔法驾驶，重点是疲劳、信念和对引擎状态的敏感。视觉证据：仪表灯、喉结、油污护符、长途眼神。边界：避免赛车偶像。', defEn: 'First read: a driver hearing engine rhythm as chant, using sound to steady driving. Styling entry: steering-wheel charms, cracked lips, low humming with RPM, and fingers tapping vibration beats. Motif: machine noise becoming psychological order. Tension: no magic driving; focus on fatigue, belief, and sensitivity to engine condition. Visual evidence: dashboard light, throat movement, oily charms, long-road eyes. Boundary: avoid racing idol.', tags: ['driver', 'engine', 'chant'] },
  { id: 'scrap_bike_messenger', name: '废铁摩托信使', nameEn: 'Scrap-Bike Messenger', group: 'B. 柴油车队 / 荒原机动', groupEn: 'B. Diesel Convoy / Wasteland Mobility', eras: desertEras, def: '第一识别是骑拼装摩托在部落和车队之间送信的人。造型入口：地图筒、破旗、单边护肩、身体贴低车身以减少风阻。母题：消息比人更需要准时到达。张力：不要酷炫骑士，重点是速度、孤立和信件重量。视觉证据：封蜡地图、备用火花塞、风割脸颊、停车不熄火的脚。边界：避免普通快递员。', defEn: 'First read: a messenger riding a scrap-built bike between tribes and convoys. Styling entry: map tube, torn flag, single shoulder guard, body lowered to reduce drag. Motif: the message needs arrival more than the person does. Tension: not a cool rider; focus on speed, isolation, and the weight of letters. Visual evidence: sealed map, spare spark plugs, wind-cut cheek, foot holding the bike without killing engine. Boundary: avoid generic courier.', tags: ['bike', 'messenger', 'scrap'] },
  { id: 'dust_race_champion', name: '尘暴赛车冠军', nameEn: 'Dust-Race Champion', group: 'B. 柴油车队 / 荒原机动', groupEn: 'B. Diesel Convoy / Wasteland Mobility', risk: 'medium', eras: desertEras, def: '第一识别是从尘暴死亡比赛里赢出地位的赛车冠军。造型入口：破赛车护具、奖章碎片、沙尘发尾、笑容里带着知道自己活太久的疲惫。母题：娱乐、赌博和生存交通重叠。张力：不要普通运动冠军，胜利必须带出伤痕和资源债。视觉证据：奖牌裂痕、轮胎粉尘、维修绷带、观众押注牌。边界：避免干净赛车手。', defEn: 'First read: a racing champion who gained status through dust-storm death races. Styling entry: broken racing guards, medal fragments, dust in hair ends, and a smile tired from surviving too long. Motif: entertainment, betting, and survival transit overlap. Tension: not a normal sports champion; victory must carry scars and resource debt. Visual evidence: cracked medal, tire dust, repair bandages, audience betting tags. Boundary: avoid clean racer.', tags: ['race', 'champion', 'dust'] },
  { id: 'spare_parts_bride', name: '备用零件新娘', nameEn: 'Spare-Parts Bride', group: 'B. 柴油车队 / 荒原机动', groupEn: 'B. Diesel Convoy / Wasteland Mobility', ontologyLevel: 2, eras: desertEras, def: '第一识别是婚礼被车队零件契约和联盟维修关系包裹的新娘。造型入口：车队婚纱、零件项链、油污花束、裙摆缝进备用螺栓。母题：亲密仪式服务迁徙共同体。张力：不要浪漫废土婚纱，重点是婚姻、修车资源和联盟责任。视觉证据：车钥匙戒指、维修清单、油痕手套、站在车头旁的礼仪。边界：避免普通新娘换皮。', defEn: 'First read: a bride whose wedding is wrapped in convoy parts contracts and repair alliances. Styling entry: convoy bridal dress, parts necklace, oily bouquet, spare bolts sewn into the hem. Motif: intimacy ritual serving a migrating commons. Tension: not romantic wasteland bridalwear; focus on marriage, repair resources, and alliance duty. Visual evidence: car-key ring, maintenance list, oily gloves, ritual stance beside hood. Boundary: avoid generic bride reskin.', tags: ['bride', 'spare_parts', 'convoy'] },
  { id: 'black_smoke_oracle', name: '黑烟预言者', nameEn: 'Black-Smoke Oracle', group: 'B. 柴油车队 / 荒原机动', groupEn: 'B. Diesel Convoy / Wasteland Mobility', ontologyLevel: 3, risk: 'medium', eras: desertEras, def: '第一识别是从排气黑烟和引擎故障里判断未来路况的人。造型入口：熏黑面罩、烟柱手势、旧诊断仪、说话前先闻空气的动作。母题：机械故障被经验误读成预言。张力：不要神秘万能，重点是技术直觉、污染和车队依赖。视觉证据：黑灰眼窝、排气管、手写故障谱、低声判断。边界：避免普通占卜师。', defEn: 'First read: a figure reading future road conditions from black exhaust and engine faults. Styling entry: soot-black mask, smoke-column gestures, old diagnostic meter, and smelling the air before speaking. Motif: mechanical failure misread through experience as prophecy. Tension: not all-powerful mystic; focus on technical instinct, pollution, and convoy dependence. Visual evidence: soot around eyes, exhaust pipe, handwritten fault chart, low verdict. Boundary: avoid generic fortune teller.', tags: ['oracle', 'smoke', 'engine'] },

  { id: 'spore_mask_forager', name: '孢子面罩采集者', nameEn: 'Spore-Mask Forager', group: 'C. 真菌感染 / 腐殖生态', groupEn: 'C. Fungal Infection / Humus Ecology', ontologyLevel: 4, risk: 'high', def: '第一识别是戴孢子面罩在感染林缘采集可食材料的人。造型入口：密封面罩、采集篮、袖口菌斑、每次摘取前观察风向的停顿。母题：食物采集和感染风险不可分。张力：不要森林精灵，重点是呼吸防护、手艺和恐惧。视觉证据：孢子粉、标记绳、湿靴、分装小袋。边界：避免纯植物美化。', defEn: 'First read: a forager wearing a spore mask to gather edible material at infected forest edges. Styling entry: sealed mask, basket, fungal sleeve stains, and pauses checking wind before picking. Motif: food gathering inseparable from infection risk. Tension: not a forest elf; focus on breath protection, craft, and fear. Visual evidence: spore dust, marker cord, wet boots, small sorting bags. Boundary: avoid pure plant prettiness.', tags: ['fungal', 'forager', 'spore'] },
  { id: 'mycelium_midwife', name: '菌丝接生婆', nameEn: 'Mycelium Midwife', group: 'C. 真菌感染 / 腐殖生态', groupEn: 'C. Fungal Infection / Humus Ecology', ontologyLevel: 4, risk: 'high', def: '第一识别是在菌丝生态里接生、同时照看新生儿和地下网络的人。造型入口：白布包、菌丝手套、潮湿围裙、动作轻得像怕惊动土壤。母题：出生被纳入腐殖循环。张力：不要神圣母性泛化，重点是专业、湿度和生物风险。视觉证据：温水盆、菌丝垫、剪线工具、低声安抚。边界：避免普通助产士。', defEn: 'First read: a midwife delivering babies inside mycelium ecology while caring for both newborn and underground network. Styling entry: white cloth bundle, mycelium gloves, damp apron, and movements light enough not to wake soil. Motif: birth folded into humus cycles. Tension: avoid generic sacred motherhood; focus on professionalism, moisture, and biological risk. Visual evidence: warm water basin, mycelium pad, cord-cutting tool, low soothing voice. Boundary: avoid generic midwife.', tags: ['mycelium', 'midwife', 'birth'] },
  { id: 'mushroom_city_courier', name: '蘑菇城信使', nameEn: 'Mushroom-City Courier', group: 'C. 真菌感染 / 腐殖生态', groupEn: 'C. Fungal Infection / Humus Ecology', ontologyLevel: 4, def: '第一识别是在巨菌聚落之间传递消息的信使。造型入口：软帽、孢子筒、潮湿披肩、脚步避开会报警的菌毯。母题：城市交通被真菌生长路径重写。张力：不要童话蘑菇人，重点是路线、湿气和信息保密。视觉证据：菌伞阴影、密封信筒、泥点、听菌毯震动的停顿。边界：避免可爱奇幻。', defEn: 'First read: a courier carrying messages between giant fungal settlements. Styling entry: soft cap, spore tube, damp shawl, and steps avoiding fungal mats that signal alarm. Motif: city transit rewritten by fungal growth paths. Tension: not a fairy-tale mushroom person; focus on routes, humidity, and message secrecy. Visual evidence: mushroom-cap shadows, sealed tube, mud spots, pauses listening to mat vibration. Boundary: avoid cute fantasy.', tags: ['mushroom_city', 'courier', 'fungal'] },
  { id: 'cordyceps_patrol_guard', name: '虫草巡逻守卫', nameEn: 'Cordyceps Patrol Guard', group: 'C. 真菌感染 / 腐殖生态', groupEn: 'C. Fungal Infection / Humus Ecology', ontologyLevel: 4, risk: 'high', def: '第一识别是守住虫草感染边界、自己也带轻微迟缓反应的巡逻守卫。造型入口：隔离长矛、菌丝护甲、颈后孢子贴、走路节奏慢而警觉。母题：守卫同时也是潜在感染者。张力：不要全怪物化，重点是职责、恐惧和边界纪律。视觉证据：巡逻绳、警戒牌、面罩雾气、被控制的手抖。边界：避免普通卫兵。', defEn: 'First read: a patrol guard holding cordyceps borders while carrying slight slowed reactions. Styling entry: quarantine spear, mycelium armor, spore patch at the nape, and walking slow but alert. Motif: the guard is also a potential infected. Tension: do not fully monsterize; focus on duty, fear, and border discipline. Visual evidence: patrol rope, warning sign, fogged mask, controlled hand tremor. Boundary: avoid generic guard.', tags: ['cordyceps', 'guard', 'quarantine'] },
  { id: 'fungal_choir_child', name: '真菌合唱童', nameEn: 'Fungal Choir Child', group: 'C. 真菌感染 / 腐殖生态', groupEn: 'C. Fungal Infection / Humus Ecology', ontologyLevel: 4, risk: 'high', def: '第一识别是声音被真菌群体调谐、唱歌时不完全属于自己的儿童。造型入口：白色童衣、喉部菌纹、合唱队编号、唱到某个音时眼神同时失焦。母题：个体声音被生态网络吸收。张力：保持非猎奇，重点是童声、群体同步和轻微失控。视觉证据：喉部孢粉、乐谱霉斑、站位间距、指挥手势。边界：避免恐怖儿童。', defEn: 'First read: a child whose voice is tuned by fungal colonies, not fully their own when singing. Styling entry: white choir clothes, throat fungal marks, choir number, and eyes unfocusing together at a note. Motif: individual voice absorbed by ecological network. Tension: keep non-spectacular; focus on child voice, group synchronization, and slight loss of control. Visual evidence: spore dust at throat, moldy score, spacing in line, conductor gesture. Boundary: avoid horror child.', tags: ['fungal', 'choir', 'child'] },
  { id: 'rot_garden_nun', name: '腐园修女', nameEn: 'Rot-Garden Nun', group: 'C. 真菌感染 / 腐殖生态', groupEn: 'C. Fungal Infection / Humus Ecology', ontologyLevel: 4, risk: 'high', def: '第一识别是在腐殖花园里照看分解、尸土和新生菌群的修女。造型入口：灰白修女服、泥湿裙摆、腐园剪刀、祈祷手势像在翻土。母题：腐烂被照护成生态秩序。张力：不要纯神圣或纯恶心，重点是纪律、气味和循环。视觉证据：发霉念珠、土壤篮、腐叶、安静下跪。边界：避免普通修女或花园女巫。', defEn: 'First read: a nun tending decomposition, corpse-soil, and new fungi in a rot garden. Styling entry: grey-white habit, muddy hem, rot-garden shears, and prayer gestures like turning soil. Motif: decay cared into ecological order. Tension: neither pure holiness nor gross-out; focus on discipline, smell, and cycle. Visual evidence: moldy rosary, soil basket, rotting leaves, quiet kneeling. Boundary: avoid generic nun or garden witch.', tags: ['rot', 'nun', 'garden'] },
  { id: 'mold_archive_librarian', name: '霉菌档案馆员', nameEn: 'Mold-Archive Librarian', group: 'C. 真菌感染 / 腐殖生态', groupEn: 'C. Fungal Infection / Humus Ecology', ontologyLevel: 4, risk: 'medium', def: '第一识别是在霉菌吞噬纸张之前抢救档案的馆员。造型入口：呼吸管、密封手套、霉斑书页、翻页动作极慢。母题：知识保存变成和微生物赛跑。张力：不要普通图书馆，重点是腐蚀、湿度和仍相信索引的执拗。视觉证据：防潮箱、霉斑编号、软化书脊、眼镜水汽。边界：避免魔法书虫。', defEn: 'First read: a librarian rescuing records before mold consumes paper. Styling entry: breathing tube, sealed gloves, mold-spotted pages, and extremely slow page turning. Motif: knowledge preservation racing microbes. Tension: not a normal library; focus on corrosion, humidity, and stubborn faith in indexing. Visual evidence: desiccant boxes, mold codes, softened spines, fogged glasses. Boundary: avoid magic bookworm.', tags: ['mold', 'archive', 'librarian'] },
  { id: 'spore_dream_patient', name: '孢子梦患者', nameEn: 'Spore-Dream Patient', group: 'C. 真菌感染 / 腐殖生态', groupEn: 'C. Fungal Infection / Humus Ecology', ontologyLevel: 4, risk: 'high', def: '第一识别是被孢子梦境改变醒来人格的病人。造型入口：病号服、眼周菌丝、恍惚表情、醒来后写下不属于自己的路线图。母题：感染通过梦修改方向感和欲望。张力：不要抽象梦幻，必须保留病床、孢子来源和身体虚弱。视觉证据：梦话记录、枕边孢粉、抓皱床单、半醒眼神。边界：避免普通梦游者。', defEn: 'First read: a patient whose waking personality is altered by spore dreams. Styling entry: patient garment, mycelium around eyes, dazed expression, and maps written after waking that feel not their own. Motif: infection edits orientation and desire through dreams. Tension: not abstract dreaminess; keep bed, spore source, and bodily weakness. Visual evidence: sleep-speech notes, spores by pillow, wrinkled sheets, half-awake eyes. Boundary: avoid generic sleepwalker.', tags: ['spore_dream', 'patient', 'infection'] },
  { id: 'lichen_map_scout', name: '地衣地图侦察员', nameEn: 'Lichen-Map Scout', group: 'C. 真菌感染 / 腐殖生态', groupEn: 'C. Fungal Infection / Humus Ecology', ontologyLevel: 4, def: '第一识别是用地衣生长方向和颜色变化绘制路线的侦察员。造型入口：地衣纹地图、湿靴、浅色斗篷、指尖轻触石面判断时间。母题：导航来自慢速生态。张力：不要普通探险者，重点是耐心、湿冷和读懂微小生长。视觉证据：石片样本、放大镜、苔绿污痕、蹲姿观察。边界：避免奇幻游侠。', defEn: 'First read: a scout mapping routes through lichen direction and color change. Styling entry: lichen-pattern map, wet boots, pale cloak, and fingertips touching stone to judge time. Motif: navigation from slow ecology. Tension: not a generic explorer; focus on patience, damp cold, and reading tiny growth. Visual evidence: stone samples, magnifier, green stains, crouched observation. Boundary: avoid fantasy ranger.', tags: ['lichen', 'map', 'scout'] },
  { id: 'fungal_crown_prophet', name: '菌冠预言者', nameEn: 'Fungal-Crown Prophet', group: 'C. 真菌感染 / 腐殖生态', groupEn: 'C. Fungal Infection / Humus Ecology', ontologyLevel: 5, risk: 'high', def: '第一识别是头顶菌冠成为群落信号器的预言者。造型入口：菌冠、闭眼听土、孢子粉尘、说话前像等待菌群回应的停顿。母题：未来感来自生态网络，不是神灵。张力：不要万能先知，重点是身体代价和群落依赖。视觉证据：菌冠裂纹、湿土、低头群众、手指颤动。边界：避免普通法师。', defEn: 'First read: a prophet whose fungal crown acts as colony signal organ. Styling entry: fungal crown, closed eyes listening to soil, spore dust, and pauses waiting for colony response before speaking. Motif: futurity from ecological network, not deity. Tension: not omnipotent seer; focus on bodily cost and colony dependence. Visual evidence: cracks in crown, wet soil, lowered crowd, trembling fingers. Boundary: avoid generic mage.', tags: ['fungal_crown', 'prophet', 'revelation'] },

  { id: 'bone_interface_shaman', name: '骨接口萨满', nameEn: 'Bone-Interface Shaman', group: 'D. 生物朋克 / 部落身体政治', groupEn: 'D. Biopunk / Tribal Body Politics', ontologyLevel: 4, risk: 'high', def: '第一识别是骨质接口让他能接入部落活体系统的萨满。造型入口：骨插口、皮绳、仪式疤、手掌按在别人接口上时的谨慎。母题：权威来自身体维护和集体信任。张力：不要神秘巫师化，重点是接口、疼痛和部落制度。视觉证据：骨针、谱系纹身、活体缝线、围观者保持距离。边界：避免普通萨满或器官怪物。', defEn: 'First read: a shaman whose bone sockets let him interface with tribal living systems. Styling entry: bone ports, leather cords, ritual scars, and cautious hands placed on others interfaces. Motif: authority from body maintenance and collective trust. Tension: avoid mystical shaman cliché; focus on interface, pain, and tribal institution. Visual evidence: bone needles, lineage tattoos, living stitches, onlookers keeping distance. Boundary: avoid generic shaman or organ monster.', tags: ['biopunk', 'shaman', 'bone_interface'] },
  { id: 'organ_seed_farmer', name: '器官种子农夫', nameEn: 'Organ-Seed Farmer', group: 'D. 生物朋克 / 部落身体政治', groupEn: 'D. Biopunk / Tribal Body Politics', ontologyLevel: 4, risk: 'high', def: '第一识别是把器官种子当作田间作物照料的农夫。造型入口：肉质种囊、田间围裙、培养槽泥痕、手势像播种又像护理伤口。母题：农业和身体资源管理合并。张力：不要恶心奇观，重点是劳动、照料和共同体需求。视觉证据：种囊标签、湿土、工具消毒、认真检查发育状态的眼。边界：避免普通农夫或疯狂医生。', defEn: 'First read: a farmer tending organ seeds as field crops. Styling entry: fleshy seed pods, field apron, growth-tank mud, and gestures like sowing while caring for wounds. Motif: agriculture merged with body-resource management. Tension: avoid gross spectacle; focus on labor, care, and community need. Visual evidence: pod labels, wet soil, sterilized tools, eyes carefully checking growth state. Boundary: avoid generic farmer or mad doctor.', tags: ['organ_seed', 'farmer', 'biopunk'] },
  { id: 'gene_clan_heir', name: '基因部族继承人', nameEn: 'Gene-Clan Heir', group: 'D. 生物朋克 / 部落身体政治', groupEn: 'D. Biopunk / Tribal Body Politics', ontologyLevel: 4, risk: 'medium', def: '第一识别是继承的不是土地而是被编辑过的部族血统的人。造型入口：谱系纹身、改造礼服、样本瓶吊坠、每个动作都像在证明血统合法。母题：家族身份进入基因管理。张力：不要贵族换皮，重点是身体证据、仪式和继承压力。视觉证据：血样盒、族徽缝线、体检印章、被审视的站姿。边界：避免普通继承人。', defEn: 'First read: an heir inheriting edited clan blood rather than land. Styling entry: lineage tattoos, modified ceremonial dress, sample-vial pendant, and every gesture proving genetic legitimacy. Motif: family identity entering gene management. Tension: not a noble reskin; focus on bodily evidence, ritual, and inheritance pressure. Visual evidence: blood sample case, clan-crest stitches, exam stamp, posture under inspection. Boundary: avoid generic heir.', tags: ['gene_clan', 'heir', 'lineage'] },
  { id: 'symbiotic_skin_weaver', name: '共生皮肤编织者', nameEn: 'Symbiotic-Skin Weaver', group: 'D. 生物朋克 / 部落身体政治', groupEn: 'D. Biopunk / Tribal Body Politics', ontologyLevel: 4, risk: 'high', def: '第一识别是把活体皮肤和服装边界织在一起的人。造型入口：活体布料、缝合针、温柔触感、布料会对她的手产生微小反应。母题：衣服不再是外物，而是共生器官。张力：不要时装奇观，重点是护理、疼痛和穿戴伦理。视觉证据：皮肤接缝、湿润纤维、针盒、被试穿者的紧张。边界：避免普通裁缝或触手服。', defEn: 'First read: a weaver joining living skin and clothing boundary. Styling entry: living textile, stitching needles, gentle touch, and fabric reacting faintly to her hands. Motif: clothing no longer external but symbiotic organ. Tension: not fashion spectacle; focus on care, pain, and ethics of wearing. Visual evidence: skin seams, damp fibers, needle case, nervous wearer. Boundary: avoid generic tailor or tentacle outfit.', tags: ['symbiotic_skin', 'weaver', 'living_textile'] },
  { id: 'hatchery_guard_mother', name: '孵化池守卫母亲', nameEn: 'Hatchery Guard Mother', group: 'D. 生物朋克 / 部落身体政治', groupEn: 'D. Biopunk / Tribal Body Politics', ontologyLevel: 4, risk: 'high', def: '第一识别是把孵化池当作部族未来来守护的母亲。造型入口：湿润护甲、孵化池钥匙、强壮手臂、身体挡在池边与外人之间。母题：母职被扩大为生物资源防线。张力：她不是怪物母亲，核心是照护、警惕和共同体责任。视觉证据：水汽、钥匙串、幼体编号、手掌贴在池壁上。边界：避免普通守卫或恐怖母体。', defEn: 'First read: a mother guarding hatchery pools as the future of the tribe. Styling entry: wet armor, hatchery keys, strong arms, and a body blocking outsiders from the pool. Motif: motherhood expanded into biological resource defense. Tension: not a monster mother; core is care, vigilance, and communal duty. Visual evidence: vapor, keyring, larval codes, palm on pool wall. Boundary: avoid generic guard or horror womb.', tags: ['hatchery', 'mother', 'guard'] },
  { id: 'spine_graft_runner', name: '脊柱移植跑者', nameEn: 'Spine-Graft Runner', group: 'D. 生物朋克 / 部落身体政治', groupEn: 'D. Biopunk / Tribal Body Politics', ontologyLevel: 4, risk: 'high', def: '第一识别是背部脊柱移植让他成为部落高速通讯身体的跑者。造型入口：背部移植痕、轻装护带、前倾跑姿、每次停下都像在忍住背痛。母题：速度来自身体被改造成路线工具。张力：不要运动员化，重点是移植代价和传讯责任。视觉证据：背脊缝线、汗湿护带、信息管、短促呼吸。边界：避免普通跑者。', defEn: 'First read: a runner whose spine graft makes the body a fast tribal communication tool. Styling entry: back graft marks, light support straps, forward lean, and every stop holding back back pain. Motif: speed from a body remade into route equipment. Tension: not athletic glamour; focus on graft cost and message duty. Visual evidence: spine stitches, sweaty straps, message tube, short breathing. Boundary: avoid generic runner.', tags: ['spine_graft', 'runner', 'biopunk'] },
  { id: 'cloned_war_daughter', name: '克隆战争之女', nameEn: 'Cloned War Daughter', group: 'D. 生物朋克 / 部落身体政治', groupEn: 'D. Biopunk / Tribal Body Politics', ontologyLevel: 4, risk: 'high', def: '第一识别是被复制出来承担战争记忆和血统任务的女儿。造型入口：编号项圈、训练布带、和上一代相似的脸、她试图用一个小饰物证明自己不是原件。母题：战争把亲属关系批量化。张力：不要克隆士兵泛化，重点是“女儿”称呼、复制脸和身份抵抗。视觉证据：训练伤、批次牌、母本照片、不同发绳。边界：避免普通女战士。', defEn: 'First read: a daughter cloned to carry war memory and bloodline tasks. Styling entry: numbered collar, training wraps, a face resembling the previous generation, and one small ornament proving she is not the original. Motif: war batching kinship. Tension: not generic clone soldier; focus on the word daughter, repeated face, and identity resistance. Visual evidence: training bruises, batch plate, donor photo, different hair tie. Boundary: avoid generic female warrior.', tags: ['clone', 'war_daughter', 'biopunk'] },
  { id: 'parasite_bond_chief', name: '寄生契约酋长', nameEn: 'Parasite-Bond Chief', group: 'D. 生物朋克 / 部落身体政治', groupEn: 'D. Biopunk / Tribal Body Politics', ontologyLevel: 5, risk: 'high', def: '第一识别是统治合法性来自胸口共生契约的酋长。造型入口：胸口寄生纹、首领饰物、痛感压住表情、每次下令都像同时听从体内另一方。母题：权力不是个人拥有，而是和寄生物协商。张力：不要怪物首领，重点是政治、痛苦和契约可见性。视觉证据：共生疤、仪式项圈、族人注视、手按胸口。边界：避免普通部落王。', defEn: 'First read: a chief whose legitimacy comes from a parasite bond at the chest. Styling entry: parasitic chest marks, chief ornaments, expression holding pain down, and issuing orders as if also listening inward. Motif: power not owned individually but negotiated with a parasite. Tension: not monster chieftain; focus on politics, pain, and visible contract. Visual evidence: symbiosis scar, ritual collar, clan gaze, hand on chest. Boundary: avoid generic tribal king.', tags: ['parasite', 'chief', 'bond'] },
  { id: 'bio_suture_bride', name: '生体缝合新娘', nameEn: 'Bio-Suture Bride', group: 'D. 生物朋克 / 部落身体政治', groupEn: 'D. Biopunk / Tribal Body Politics', ontologyLevel: 4, risk: 'high', def: '第一识别是婚礼服制和活体缝合共同完成联盟仪式的新娘。造型入口：缝合礼服、活体花束、部族婚印、她在疼痛中保持礼仪的站姿。母题：婚姻把两个身体制度缝在一起。张力：不要漂亮伤口，重点是联盟、承受和身体边界被公开协商。视觉证据：缝线、血色花茎、见证人、微颤手套。边界：避免普通婚纱恐怖。', defEn: 'First read: a bride whose wedding dress code and living sutures complete an alliance ritual. Styling entry: sutured gown, living bouquet, tribal marriage marks, and a posture holding etiquette through pain. Motif: marriage stitching two bodily systems together. Tension: no pretty wounds; focus on alliance, endurance, and publicly negotiated body boundary. Visual evidence: stitches, blood-colored stems, witnesses, trembling gloves. Boundary: avoid generic bridal horror.', tags: ['bio_suture', 'bride', 'alliance'] },
  { id: 'womb_engine_mechanic', name: '子宫引擎机械师', nameEn: 'Womb-Engine Mechanic', group: 'D. 生物朋克 / 部落身体政治', groupEn: 'D. Biopunk / Tribal Body Politics', ontologyLevel: 5, risk: 'high', def: '第一识别是维护部族发育舱和繁殖机器的机械师。造型入口：有机管线、维修围裙、发育舱蒸汽、手上同时有油污和消毒痕。母题：共同体延续被装进活体机器。张力：保持非露骨，重点是维护、责任和身体生产制度。视觉证据：管线阀门、培养液、工具托盘、严肃检查表。边界：避免情色化或普通机械师。', defEn: 'First read: a mechanic maintaining clan growth chambers and reproductive engines. Styling entry: organic tubes, repair apron, chamber steam, hands marked by oil and disinfectant. Motif: community continuation housed in living machinery. Tension: keep non-explicit; focus on maintenance, responsibility, and body-production institution. Visual evidence: tube valves, culture fluid, tool tray, serious checklist. Boundary: avoid eroticization or generic mechanic.', tags: ['womb_engine', 'mechanic', 'biopunk'] },

  { id: 'ash_snow_refugee', name: '灰雪流民', nameEn: 'Ash-Snow Refugee', group: 'E. 核冬天 / 辐射流亡', groupEn: 'E. Nuclear Winter / Radiation Exile', risk: 'medium', def: '第一识别是在灰雪和辐射寒冷中迁徙的流民。造型入口：厚重衣层、破面罩、肩上灰雪、走路时不敢张口呼吸。母题：寒冷和污染把迁徙变成慢性消耗。张力：不要浪漫雪景，重点是疲惫、保温和看不见的剂量。视觉证据：灰白雪痕、冻裂手套、简陋剂量牌、低头队列。边界：避免普通冬季难民。', defEn: 'First read: a refugee migrating through ash snow and radioactive cold. Styling entry: heavy layers, broken mask, ash snow on shoulders, and walking without daring to open the mouth. Motif: cold and contamination turning migration into chronic depletion. Tension: no romantic snow; focus on fatigue, insulation, and invisible dose. Visual evidence: grey-white snow traces, cracked gloves, crude dose tag, lowered line of people. Boundary: avoid generic winter refugee.', tags: ['nuclear_winter', 'refugee', 'ash_snow'] },
  { id: 'radiation_soup_kitchen_cook', name: '辐射施粥厨师', nameEn: 'Radiation Soup-Kitchen Cook', group: 'E. 核冬天 / 辐射流亡', groupEn: 'E. Nuclear Winter / Radiation Exile', risk: 'medium', def: '第一识别是在辐射寒夜里分配热汤、同时控制剂量和秩序的厨师。造型入口：铅布围裙、大锅、剂量牌、每勺汤都像配给判断。母题：食物、温度和污染管理合在一起。张力：不要普通善良厨师，重点是有限热量和艰难公平。视觉证据：汤锅蒸汽、队伍手牌、检测仪、被冻红的手。边界：避免温馨食堂。', defEn: 'First read: a cook distributing hot soup in radioactive cold while managing dose and order. Styling entry: lead-cloth apron, large pot, dose tags, and every ladle as ration judgment. Motif: food, warmth, and contamination management merged. Tension: not a kindly cook; focus on limited heat and difficult fairness. Visual evidence: pot steam, queue tags, detector, reddened frozen hands. Boundary: avoid cozy cafeteria.', tags: ['soup_kitchen', 'radiation', 'cook'] },
  { id: 'dosimeter_schoolgirl', name: '剂量计女学生', nameEn: 'Dosimeter Schoolgirl', group: 'E. 核冬天 / 辐射流亡', groupEn: 'E. Nuclear Winter / Radiation Exile', def: '第一识别是胸前剂量计比校徽更重要的女学生。造型入口：旧校服、防寒披肩、剂量计胸针、上学路上避开污染积雪的脚步。母题：教育日常被辐射读数改写。张力：不要普通校服少女，重点是继续上学的脆弱和制度坚持。视觉证据：课堂防护帘、铅笔盒、剂量警报灯、冻白呼吸。边界：避免可爱末日校园。', defEn: 'First read: a schoolgirl whose dosimeter matters more than her school badge. Styling entry: old uniform, winter shawl, dosimeter brooch, and footsteps avoiding contaminated snow on the way to class. Motif: school routine rewritten by radiation readings. Tension: not a generic schoolgirl; focus on fragile persistence of education. Visual evidence: classroom shielding curtain, pencil case, dose alarm light, white frozen breath. Boundary: avoid cute apocalypse school.', tags: ['dosimeter', 'schoolgirl', 'radiation'] },
  { id: 'lead_coat_doctor', name: '铅衣医生', nameEn: 'Lead-Coat Doctor', group: 'E. 核冬天 / 辐射流亡', groupEn: 'E. Nuclear Winter / Radiation Exile', risk: 'medium', def: '第一识别是铅衣沉重到改变姿态的废土医生。造型入口：铅衬外套、便携听诊器、疲惫肩颈、给病人量剂量时比量体温更熟练。母题：治疗发生在持续暴露里。张力：不要英雄医生，重点是重量、限制和仍要靠近病人。视觉证据：铅衣折痕、剂量表、药箱、僵硬转身。边界：避免普通防护服医生。', defEn: 'First read: a wasteland doctor whose lead coat is heavy enough to reshape posture. Styling entry: lead-lined coat, portable stethoscope, tired neck and shoulders, and more fluency measuring dose than temperature. Motif: treatment under continuous exposure. Tension: not heroic doctor; focus on weight, restriction, and still needing to approach patients. Visual evidence: lead-coat creases, dose chart, medicine case, stiff turning. Boundary: avoid generic protected doctor.', tags: ['lead_coat', 'doctor', 'radiation'] },
  { id: 'bunker_birth_registrar', name: '地堡出生登记员', nameEn: 'Bunker Birth Registrar', group: 'E. 核冬天 / 辐射流亡', groupEn: 'E. Nuclear Winter / Radiation Exile', def: '第一识别是在地下地堡登记每一个新生儿剂量和配给资格的人。造型入口：旧印章、出生册、防寒毯、低顶空间让他总微微弯腰。母题：生命诞生立刻进入资源账本。张力：不要普通文员，重点是行政冷静和生命重量冲突。视觉证据：出生编号、红印泥、婴儿毯、排队父母。边界：避免温馨户籍员。', defEn: 'First read: a registrar in an underground bunker recording every newborn dose and ration eligibility. Styling entry: old stamp, birth ledger, cold blanket, and a body slightly bent by low ceilings. Motif: birth immediately entering resource accounts. Tension: not a clerk; focus on conflict between administrative calm and the weight of life. Visual evidence: birth codes, red stamp ink, baby blanket, parents in line. Boundary: avoid warm civil registrar.', tags: ['bunker', 'birth', 'registrar'] },
  { id: 'iodine_tablet_smuggler', name: '碘片走私者', nameEn: 'Iodine-Tablet Smuggler', group: 'E. 核冬天 / 辐射流亡', groupEn: 'E. Nuclear Winter / Radiation Exile', risk: 'medium', def: '第一识别是把碘片藏在衣缝和口粮袋里穿过检查点的走私者。造型入口：厚外套暗袋、药板边缘、眼神随时扫向剂量门。母题：小药片成为恐惧时代的硬通货。张力：他不是普通药贩，货物牵涉儿童、暴露和生存机会。视觉证据：空药板、假粮票、手心汗、检查灯。边界：避免普通黑市商。', defEn: 'First read: a smuggler carrying iodine tablets through checkpoints hidden in seams and ration bags. Styling entry: secret coat pockets, blister-pack edges, and eyes scanning dose gates. Motif: tiny pills as hard currency in an age of fear. Tension: not a generic drug dealer; cargo touches children, exposure, and survival chances. Visual evidence: empty blister, fake ration ticket, sweaty palm, inspection light. Boundary: avoid generic black-market seller.', tags: ['iodine', 'smuggler', 'radiation'] },
  { id: 'snow_buried_radio_operator', name: '雪埋无线电员', nameEn: 'Snow-Buried Radio Operator', group: 'E. 核冬天 / 辐射流亡', groupEn: 'E. Nuclear Winter / Radiation Exile', def: '第一识别是在被灰雪埋住的站点里维持无线电联络的人。造型入口：厚耳机、霜白眉毛、手摇电台、说话前先拍掉天线积雪。母题：通信是寒冷中的共同体体温。张力：不要普通通讯兵，重点是孤立、低电量和坚持收听。视觉证据：雪压天线、手写频率、冻裂嘴唇、蜡烛光。边界：避免温馨电台主持。', defEn: 'First read: a radio operator maintaining contact from a station buried in ash snow. Styling entry: heavy headphones, frost-white brows, hand-crank radio, and clearing snow from antenna before speaking. Motif: communication as communal body heat in cold. Tension: not a generic signal soldier; focus on isolation, low power, and stubborn listening. Visual evidence: snow-loaded antenna, handwritten frequency, cracked lips, candlelight. Boundary: avoid cozy radio host.', tags: ['radio', 'snow', 'operator'] },
  { id: 'reactor_orphan', name: '反应堆孤儿', nameEn: 'Reactor Orphan', group: 'E. 核冬天 / 辐射流亡', groupEn: 'E. Nuclear Winter / Radiation Exile', risk: 'medium', def: '第一识别是成长环境始终围绕废反应堆、辐射标识和失踪亲属的孤儿。造型入口：过大的防护外套、反应堆徽章、旧照片、懂得不触碰发热金属的手。母题：童年被能源灾难留下的禁区塑形。张力：保持非猎奇，重点是早熟、禁区知识和亲属缺席。视觉证据：警示牌、剂量贴、破玩具、站在围栏外。边界：避免恐怖儿童。', defEn: 'First read: an orphan whose life centers around a dead reactor, radiation signs, and missing kin. Styling entry: oversized protective coat, reactor badge, old photo, and hands that know not to touch warm metal. Motif: childhood shaped by the exclusion zone left by energy disaster. Tension: keep non-spectacular; focus on precocity, zone knowledge, and absent family. Visual evidence: warning signs, dose stickers, broken toy, standing outside fence. Boundary: avoid horror child.', tags: ['reactor', 'orphan', 'radiation'] },
  { id: 'ice_tunnel_gravedigger', name: '冰隧道掘墓人', nameEn: 'Ice-Tunnel Gravedigger', group: 'E. 核冬天 / 辐射流亡', groupEn: 'E. Nuclear Winter / Radiation Exile', risk: 'medium', def: '第一识别是在冻结隧道里为流亡者挖墓的人。造型入口：冰镐、厚手套、灰雪斗篷、动作沉默而节省力气。母题：死亡管理成为寒冷基础设施。张力：不要哥特浪漫，重点是劳动、低温和对尸体的实用尊重。视觉证据：冰屑、简陋木牌、弯腰拖运、白雾呼吸。边界：避免普通掘墓人。', defEn: 'First read: a gravedigger digging for exiles inside frozen tunnels. Styling entry: ice pick, thick gloves, ash-snow cloak, and silent energy-saving movement. Motif: death management as cold infrastructure. Tension: no gothic romance; focus on labor, low temperature, and practical respect for bodies. Visual evidence: ice chips, crude wooden markers, bent dragging posture, white breath. Boundary: avoid generic gravedigger.', tags: ['ice_tunnel', 'gravedigger'] },
  { id: 'aurora_mutation_saint', name: '极光变异圣徒', nameEn: 'Aurora-Mutation Saint', group: 'E. 核冬天 / 辐射流亡', groupEn: 'E. Nuclear Winter / Radiation Exile', ontologyLevel: 4, risk: 'high', def: '第一识别是辐射极光下出现可见身体变异、被流民误认为圣兆的人。造型入口：极光色皮肤斑、厚袍、防护镜摘到一半、众人不敢靠近的空场。母题：污染异变被绝望共同体转译为希望。张力：不要真正神圣化，重点是变异、被观看和身体痛感。视觉证据：剂量烧痕、极光反光、颤抖手、低头人群。边界：避免普通圣徒或魔法极光。', defEn: 'First read: a person whose visible mutation under radioactive aurora is mistaken by refugees as a holy sign. Styling entry: aurora-colored skin patches, heavy robe, goggles half removed, and empty space because people fear approaching. Motif: contamination mutation translated by desperate community into hope. Tension: do not make it truly holy; focus on mutation, being viewed, and bodily pain. Visual evidence: dose burns, aurora reflection, trembling hand, lowered crowd. Boundary: avoid generic saint or magic aurora.', tags: ['aurora', 'mutation', 'saint'] },

  { id: 'water_map_nomad', name: '水图游牧民', nameEn: 'Water-Map Nomad', group: 'F. 沙漠生存 / 水源秩序', groupEn: 'F. Desert Survival / Water Order', eras: desertEras, def: '第一识别是随身携带水源路线图、身份由水点记忆决定的游牧民。造型入口：皮革水图、裹头布、水袋斜挎、走路时总保护地图不被汗湿。母题：地理知识就是生存权。张力：不要浪漫游牧，重点是路线保密、口渴和对错一步的恐惧。视觉证据：地图折痕、干裂嘴唇、遮阳布、停下听风的姿态。边界：避免普通沙漠旅人。', defEn: 'First read: a nomad carrying water-route maps, identity defined by memory of wells. Styling entry: leather water map, wrapped head, crossbody water bag, and walking while protecting the map from sweat. Motif: geographic knowledge as survival right. Tension: not romantic nomadism; focus on route secrecy, thirst, and fear of one wrong step. Visual evidence: map creases, cracked lips, sun cloth, posture stopping to hear wind. Boundary: avoid generic desert traveler.', tags: ['water_map', 'nomad', 'desert'] },
  { id: 'salt_flat_guide', name: '盐原向导', nameEn: 'Salt-Flat Guide', group: 'F. 沙漠生存 / 水源秩序', groupEn: 'F. Desert Survival / Water Order', eras: desertEras, def: '第一识别是能在白亮盐原里分辨安全路线的向导。造型入口：遮光眼布、盐结靴、长杆、皮肤被反光晒出的锐利皱纹。母题：空旷地形需要身体经验来阅读。张力：不要风景导游，重点是刺眼、脱水和方向错觉。视觉证据：盐晶、测深杆、脚印断续、眯眼判断地面。边界：避免普通探险家。', defEn: 'First read: a guide who can read safe routes across glaring salt flats. Styling entry: glare cloth, salt-crusted boots, long pole, and sharp wrinkles burned by reflected light. Motif: open terrain requiring bodily experience to read. Tension: not a scenic guide; focus on glare, dehydration, and directional illusion. Visual evidence: salt crystals, probing rod, broken footprints, narrowed eyes judging ground. Boundary: avoid generic explorer.', tags: ['salt_flat', 'guide'] },
  { id: 'dune_well_keeper', name: '沙丘井守', nameEn: 'Dune Well Keeper', group: 'F. 沙漠生存 / 水源秩序', groupEn: 'F. Desert Survival / Water Order', eras: desertEras, def: '第一识别是守着会被沙丘慢慢吞没的井的人。造型入口：井绳、锁住水盖的铁链、防晒布、对排队者既警惕又疲惫的眼。母题：水源守护是权力也是负担。张力：不要普通老人看井，重点是配给、公平和被抢夺的风险。视觉证据：水勺、排队石标、沙埋井口、手写取水规则。边界：避免田园井边形象。', defEn: 'First read: a keeper guarding a well slowly swallowed by dunes. Styling entry: well rope, chain locking the water lid, sun cloth, and eyes both wary and tired toward the queue. Motif: water guarding as power and burden. Tension: not an old well watcher; focus on rationing, fairness, and risk of seizure. Visual evidence: water ladle, queue stones, sand-buried rim, handwritten water rules. Boundary: avoid pastoral well imagery.', tags: ['well', 'keeper', 'dune'] },
  { id: 'sun_cloth_mother', name: '遮阳布母亲', nameEn: 'Sun-Cloth Mother', group: 'F. 沙漠生存 / 水源秩序', groupEn: 'F. Desert Survival / Water Order', eras: desertEras, def: '第一识别是用遮阳布、影子和节水习惯保护孩子的母亲。造型入口：大块防晒布、孩子水壶、肩颈晒痕、随时用身体制造阴影的站姿。母题：母职在沙漠里变成温度管理。张力：不要温柔泛化，温柔必须落到阴影、口粮和路线选择。视觉证据：布角结、晒裂手背、孩子贴近她的影子、水袋刻度。边界：避免普通母亲。', defEn: 'First read: a mother protecting children through sun cloth, shadow, and water-saving habits. Styling entry: large sun cloth, child canteen, neck sun marks, and a stance using the body to make shade. Motif: motherhood as temperature management in desert. Tension: do not generalize tenderness; it must land in shade, rations, and route choice. Visual evidence: cloth knots, sun-cracked hands, child inside her shadow, water-bag marks. Boundary: avoid generic mother.', tags: ['sun_cloth', 'mother', 'desert'] },
  { id: 'glass_desert_prophet', name: '玻璃沙漠预言者', nameEn: 'Glass-Desert Prophet', group: 'F. 沙漠生存 / 水源秩序', groupEn: 'F. Desert Survival / Water Order', ontologyLevel: 4, risk: 'medium', eras: desertEras, def: '第一识别是在熔化成玻璃的沙地上解读反光裂纹的预言者。造型入口：护眼面罩、玻璃割裂的靴底、手指沿裂纹移动、说话像在读一张会刺伤人的地图。母题：灾变地表被解释成命运文本。张力：不要魔法水晶，重点是热、割伤和经验误读。视觉证据：玻璃沙片、反光灼痕、包扎手指、低头眩光。边界：避免普通占卜师。', defEn: 'First read: a prophet reading reflective cracks in sand fused into glass. Styling entry: eye shield, boot soles cut by glass, fingers tracing cracks, and speech like reading a map that can wound. Motif: catastrophic ground interpreted as fate text. Tension: not magic crystal; focus on heat, cuts, and experienced misreading. Visual evidence: glass sand shards, glare burns, bandaged fingers, lowered head in dazzle. Boundary: avoid generic fortune teller.', tags: ['glass_desert', 'prophet'] },
  { id: 'solar_still_engineer', name: '太阳蒸馏工程师', nameEn: 'Solar-Still Engineer', group: 'F. 沙漠生存 / 水源秩序', groupEn: 'F. Desert Survival / Water Order', ontologyLevel: 1, eras: desertEras, def: '第一识别是用太阳蒸馏装置从脏水和露水里榨出饮用水的工程师。造型入口：透明膜、测量尺、泥水裤、蹲在低矮装置旁检查水滴。母题：工程不是宏大科技，而是每天多一杯水。张力：不要科幻发明家，重点是耐心、维护和微小产量。视觉证据：冷凝水珠、管线补丁、记录板、晒黑手臂。边界：避免普通水利工程师。', defEn: 'First read: an engineer using solar stills to draw drinkable water from dirty water and dew. Styling entry: clear membrane, measuring ruler, muddy trousers, and crouching beside low devices to check droplets. Motif: engineering not as grand tech but one more cup of water each day. Tension: not sci-fi inventor; focus on patience, maintenance, and tiny output. Visual evidence: condensed drops, patched tubing, record board, sun-darkened arms. Boundary: avoid generic water engineer.', tags: ['solar_still', 'engineer', 'water'] },
  { id: 'camel_bone_trader', name: '骆骨商人', nameEn: 'Camel-Bone Trader', group: 'F. 沙漠生存 / 水源秩序', groupEn: 'F. Desert Survival / Water Order', ontologyLevel: 1, eras: desertEras, def: '第一识别是用骆驼骨、旧鞍具和路线债做交易的沙漠商人。造型入口：骨串、磨白鞍带、布包账本、手指敲骨判断年份。母题：死亡动物残骸继续参与交通经济。张力：不要异域商贩模板，重点是实用、干燥和路线信用。视觉证据：骨片、旧水票、称量秤、风沙里半闭眼。边界：避免神秘东方化。', defEn: 'First read: a desert trader dealing in camel bones, old tack, and route debts. Styling entry: bone strings, whitened saddle straps, cloth ledger, and fingers tapping bone to judge age. Motif: dead animal remains continuing in transit economy. Tension: avoid exotic merchant template; focus on utility, dryness, and route credit. Visual evidence: bone pieces, old water tickets, scale, half-closed eyes in sand wind. Boundary: avoid orientalist mystique.', tags: ['camel_bone', 'trader'] },
  { id: 'mirage_radio_girl', name: '海市蜃楼无线电女孩', nameEn: 'Mirage Radio Girl', group: 'F. 沙漠生存 / 水源秩序', groupEn: 'F. Desert Survival / Water Order', ontologyLevel: 2, eras: desertEras, def: '第一识别是背着便携电台追逐沙漠虚假信号的女孩。造型入口：反光布、手摇电台、耳机压痕、每次听见噪声都抬头看热浪。母题：希望和海市蜃楼使用同一种频率。张力：不要可爱电台少女，重点是孤独、误听和仍然记录。视觉证据：频率本、沙粒进旋钮、干裂嘴唇、远处热浪。边界：避免普通通讯员。', defEn: 'First read: a girl carrying a portable radio and chasing false desert signals. Styling entry: reflective cloth, hand-crank radio, headphone marks, and looking up at heat haze whenever static appears. Motif: hope and mirage using the same frequency. Tension: not a cute radio girl; focus on loneliness, mishearing, and still recording. Visual evidence: frequency notebook, sand in dials, cracked lips, distant shimmer. Boundary: avoid generic radio operator.', tags: ['mirage', 'radio', 'girl'] },
  { id: 'thorn_scrub_healer', name: '荆刺灌木医者', nameEn: 'Thorn-Scrub Healer', group: 'F. 沙漠生存 / 水源秩序', groupEn: 'F. Desert Survival / Water Order', ontologyLevel: 1, eras: desertEras, def: '第一识别是从贫瘠灌木和刺伤里提取疗法的医者。造型入口：干草药包、刺伤手指、布袋、用小刀刮取树脂的精准动作。母题：荒芜植物也有医疗价值。张力：不要民俗神医化，重点是经验、疼痛和有限药效。视觉证据：草药束、带刺枝条、简陋药碗、包扎手。边界：避免普通草药师。', defEn: 'First read: a healer extracting remedies from barren shrubs and thorn wounds. Styling entry: dry herb bundle, thorn-pricked fingers, cloth pouch, and precise knife scraping resin. Motif: barren plants still holding medical value. Tension: do not turn into folk miracle healer; focus on experience, pain, and limited efficacy. Visual evidence: herb ties, thorn branches, rough medicine bowl, bandaged hand. Boundary: avoid generic herbalist.', tags: ['healer', 'thorn', 'desert'] },
  { id: 'sand_burial_singer', name: '沙葬歌者', nameEn: 'Sand-Burial Singer', group: 'F. 沙漠生存 / 水源秩序', groupEn: 'F. Desert Survival / Water Order', ontologyLevel: 2, risk: 'medium', eras: desertEras, def: '第一识别是用歌声标记沙中墓地、替消失的人保留位置的歌者。造型入口：素色长袍、沙葬布、低声歌唱、脚边小石标会被风慢慢埋住。母题：记忆在移动地形里需要声音固定。张力：不要舞台歌手，重点是哀悼、方向和失去。视觉证据：沙中布角、喉部紧绷、墓名木片、背风站姿。边界：避免浪漫吟游诗人。', defEn: 'First read: a singer marking sand graves with voice, preserving place for the vanished. Styling entry: plain robe, burial cloth, low singing, and small stone markers at the feet slowly buried by wind. Motif: memory needs voice to hold still in moving terrain. Tension: not a stage singer; focus on mourning, direction, and loss. Visual evidence: cloth corner in sand, tight throat, name slat, stance against wind. Boundary: avoid romantic bard.', tags: ['burial', 'singer', 'sand'] },

  { id: 'flood_roof_teacher', name: '洪水屋顶教师', nameEn: 'Flood-Roof Teacher', group: 'G. 水世界 / 漂流群岛', groupEn: 'G. Waterworld / Drifting Islands', def: '第一识别是在洪水后的屋顶上继续上课的教师。造型入口：防水书袋、救生绳、粉笔盒包在塑料袋里、她用屋脊当讲台。母题：教育在水位之上勉强维持。张力：不要温馨校园，重点是危险、秩序和孩子需要正常感。视觉证据：湿课本、绳结座位、屋顶边缘、水面反光。边界：避免普通灾后老师。', defEn: 'First read: a teacher continuing class on rooftops after floods. Styling entry: waterproof book bag, rescue rope, chalk box wrapped in plastic, and using the roof ridge as a lectern. Motif: education barely maintained above water level. Tension: not cozy school; focus on danger, order, and children needing normality. Visual evidence: wet textbooks, rope-marked seats, roof edge, water reflections. Boundary: avoid generic disaster teacher.', tags: ['flood', 'teacher', 'roof'] },
  { id: 'saltwater_fisher_bride', name: '盐水渔民新娘', nameEn: 'Saltwater Fisher Bride', group: 'G. 水世界 / 漂流群岛', groupEn: 'G. Waterworld / Drifting Islands', ontologyLevel: 2, def: '第一识别是婚礼和盐水捕鱼生活缠在一起的渔民新娘。造型入口：网纱头巾、鱼鳞饰、湿裙摆、捧花用浮标和贝壳临时扎成。母题：亲密仪式必须适应漂流生活。张力：不要浪漫海边婚纱，重点是潮湿、劳作和共同体见证。视觉证据：渔网纹、盐蚀戒指、船板、粗糙手掌。边界：避免普通海岛新娘。', defEn: 'First read: a fisher bride whose wedding is entangled with saltwater labor. Styling entry: net veil, scale ornaments, wet hem, bouquet improvised from floats and shells. Motif: intimacy ritual adapting to drifting life. Tension: not romantic seaside bridalwear; focus on dampness, labor, and communal witness. Visual evidence: net pattern, salt-corroded ring, boat planks, rough palms. Boundary: avoid generic island bride.', tags: ['fisher', 'bride', 'waterworld'] },
  { id: 'floating_market_broker', name: '浮市掮客', nameEn: 'Floating-Market Broker', group: 'G. 水世界 / 漂流群岛', groupEn: 'G. Waterworld / Drifting Islands', def: '第一识别是在漂流市场的船与船之间撮合交易的掮客。造型入口：防水账本、绳结货币、船篷外套、脚步能在晃动木板上保持平衡。母题：市场秩序随水位移动。张力：不要普通商人，重点是湿货、信用和临时停靠关系。视觉证据：账本油布、浮桶、握手距离、潮线标记。边界：避免热闹集市背景化。', defEn: 'First read: a broker arranging deals between boats in a floating market. Styling entry: waterproof ledger, knot currency, tarp coat, and feet balanced on shifting planks. Motif: market order moving with water level. Tension: not a generic merchant; focus on wet goods, credit, and temporary mooring relations. Visual evidence: oilcloth ledger, float barrels, handshake distance, tide marks. Boundary: avoid lively market as mere background.', tags: ['floating_market', 'broker', 'trade'] },
  { id: 'salvage_diver_medic', name: '沉船打捞医疗员', nameEn: 'Wreck-Diver Medic', group: 'G. 水世界 / 漂流群岛', groupEn: 'G. Waterworld / Drifting Islands', risk: 'medium', def: '第一识别是既下水打捞又处理沉船伤口的医疗员。造型入口：潜水面罩、急救筒、盐蚀护具、手臂上同时挂着绷带和切割工具。母题：救援和回收在同一个身体里完成。张力：不要普通潜水员，重点是寒冷、压力和先救人还是先取物的判断。视觉证据：滴水面罩、救生绳、锈刃、湿急救布。边界：避免水下冒险英雄。', defEn: 'First read: a medic who dives for salvage while treating wreck injuries. Styling entry: dive mask, first-aid tube, salt-corroded guards, and bandages beside cutting tools on the arm. Motif: rescue and recovery handled by one body. Tension: not a generic diver; focus on cold, pressure, and judging whether to save people or retrieve goods first. Visual evidence: dripping mask, lifeline, rusted blade, wet first-aid cloth. Boundary: avoid underwater adventure hero.', tags: ['diver', 'medic', 'wreck'] },
  { id: 'rain_tank_princess', name: '雨水罐公主', nameEn: 'Rain-Tank Princess', group: 'G. 水世界 / 漂流群岛', groupEn: 'G. Waterworld / Drifting Islands', ontologyLevel: 2, def: '第一识别是年轻权力来自掌管淡水雨罐的“公主”。造型入口：水罐钥匙、透明雨衣、简陋王冠、她站在储水罐前让别人排队。母题：王权缩小成淡水管理权。张力：不要童话公主，重点是水、年龄和被迫成熟的管理姿态。视觉证据：水位刻度、钥匙绳、雨滴、等待取水的人。边界：避免贵族换皮。', defEn: 'First read: a "princess" whose young authority comes from controlling rainwater tanks. Styling entry: tank key, clear raincoat, crude crown, and standing before storage tanks while others queue. Motif: royalty reduced to freshwater management. Tension: not fairy-tale princess; focus on water, age, and forced maturity in administration. Visual evidence: water-level marks, key cord, raindrops, people waiting for water. Boundary: avoid noble reskin.', tags: ['rain_tank', 'princess', 'freshwater'] },
  { id: 'tidal_orphan_scout', name: '潮汐孤儿侦察员', nameEn: 'Tidal-Orphan Scout', group: 'G. 水世界 / 漂流群岛', groupEn: 'G. Waterworld / Drifting Islands', def: '第一识别是靠记住潮线和屋顶高度活下来的孤儿侦察员。造型入口：短裤、潮线地图、浮木刀、膝盖旧伤和随时看水面变化的眼。母题：失去家庭后，地形记忆替代保护者。张力：不要可爱小侦察，重点是早熟、危险和潮汐纪律。视觉证据：潮痕、绳梯、湿发、手指比划水位。边界：避免普通孤儿。', defEn: 'First read: an orphan scout surviving by remembering tide lines and roof heights. Styling entry: shorts, tide-line map, driftwood knife, old knee scars, and eyes always reading water change. Motif: after losing family, terrain memory replaces protector. Tension: not a cute scout; focus on precocity, danger, and tidal discipline. Visual evidence: tide marks, rope ladder, wet hair, fingers measuring water level. Boundary: avoid generic orphan.', tags: ['tidal', 'orphan', 'scout'] },
  { id: 'kelp_farm_matriarch', name: '海藻农场女族长', nameEn: 'Kelp-Farm Matriarch', group: 'G. 水世界 / 漂流群岛', groupEn: 'G. Waterworld / Drifting Islands', ontologyLevel: 2, def: '第一识别是用海藻农场维持漂流共同体粮食系统的女族长。造型入口：防水围裙、海藻绳、粗糙手掌、说话时仍在整理湿绳。母题：食物生产成为水上权威。张力：不要温柔农妇，重点是湿冷劳动、配给和家族秩序。视觉证据：海藻束、漂浮田架、水桶、被盐磨粗的手。边界：避免普通渔村长者。', defEn: 'First read: a matriarch maintaining a drifting community food system through kelp farms. Styling entry: waterproof apron, kelp ropes, rough palms, and still arranging wet lines while speaking. Motif: food production as waterborne authority. Tension: not gentle farm mother; focus on cold wet labor, rationing, and family order. Visual evidence: kelp bundles, floating frames, buckets, salt-rough hands. Boundary: avoid generic fishing-village elder.', tags: ['kelp', 'farm', 'matriarch'] },
  { id: 'rust_lighthouse_keeper', name: '锈灯塔守望人', nameEn: 'Rust-Lighthouse Keeper', group: 'G. 水世界 / 漂流群岛', groupEn: 'G. Waterworld / Drifting Islands', def: '第一识别是在海平面上升后仍守着锈灯塔和航路信号的人。造型入口：旧雨衣、锈蚀灯具、信号旗、身体习惯被风推成侧站。母题：方向感靠一个濒坏设施维持。张力：不要孤独浪漫，重点是责任、腐蚀和怕灯熄灭。视觉证据：灯罩锈斑、旗绳、盐水靴、夜间记录本。边界：避免普通灯塔老人。', defEn: 'First read: a keeper guarding a rusted lighthouse and route signal after sea-level rise. Styling entry: old raincoat, corroded lamp, signal flags, and a body angled by wind. Motif: direction maintained by a failing facility. Tension: not lonely romance; focus on duty, corrosion, and fear the light will die. Visual evidence: rusted lens, flag rope, saltwater boots, night logbook. Boundary: avoid generic lighthouse elder.', tags: ['lighthouse', 'keeper', 'rust'] },
  { id: 'storm_barrier_engineer', name: '风暴屏障工程师', nameEn: 'Storm-Barrier Engineer', group: 'G. 水世界 / 漂流群岛', groupEn: 'G. Waterworld / Drifting Islands', ontologyLevel: 2, def: '第一识别是替漂流城市维护临时风暴屏障的工程师。造型入口：防水工具带、屏障模型、缆绳、脸上总有风雨打出的红痕。母题：城市边界变成可移动维修任务。张力：不要宏大工程奇观，重点是缆绳、判断和屏障失败的恐惧。视觉证据：张力表、湿蓝图、固定桩、急促手势。边界：避免普通城市工程师。', defEn: 'First read: an engineer maintaining temporary storm barriers for a drifting city. Styling entry: waterproof tool belt, barrier model, cables, and rain-wind red marks on the face. Motif: city boundary as mobile repair task. Tension: not grand engineering spectacle; focus on ropes, judgment, and fear of barrier failure. Visual evidence: tension gauge, wet blueprint, anchor posts, urgent hand gestures. Boundary: avoid generic city engineer.', tags: ['storm_barrier', 'engineer', 'city'] },
  { id: 'floating_chapel_deacon', name: '漂浮礼拜堂执事', nameEn: 'Floating-Chapel Deacon', group: 'G. 水世界 / 漂流群岛', groupEn: 'G. Waterworld / Drifting Islands', ontologyLevel: 2, def: '第一识别是在船上礼拜堂维持水上精神秩序的执事。造型入口：湿圣书、防水蜡烛、船上长椅、每次祈祷前先确认缆绳。母题：信仰必须先适应漂流结构。张力：不要神圣泛光，重点是潮湿、摇晃和共同体安定。视觉证据：固定蜡烛、盐痕书页、绳结、晃动中站稳的脚。边界：避免普通教堂人物。', defEn: 'First read: a deacon maintaining spiritual order inside a boat chapel. Styling entry: damp holy book, waterproof candles, boat pews, and checking mooring rope before prayer. Motif: faith first adapting to drifting structure. Tension: no holy glow; focus on dampness, rocking, and communal steadiness. Visual evidence: fixed candles, salt-marked pages, knots, feet steady in motion. Boundary: avoid generic church figure.', tags: ['chapel', 'deacon', 'floating'] },

  { id: 'red_zone_paramedic', name: '红区急救员', nameEn: 'Red-Zone Paramedic', group: 'H. 污染隔离 / 危险边界', groupEn: 'H. Toxic Exclusion / Danger Border', ontologyLevel: 2, risk: 'medium', eras: modernWastelandEras, def: '第一识别是主动冲进红色污染区救人的急救员。造型入口：红区标识、急救箱、防护服、动作快但每一步都先看地面污染。母题：救援职业和隔离规则互相拉扯。张力：不要英雄冲锋，重点是专业冲动、风险评估和呼吸限制。视觉证据：红色封条、担架、检测仪、面罩雾气。边界：避免普通急救员。', defEn: 'First read: a paramedic who enters red contamination zones to rescue people. Styling entry: red-zone marks, med kit, protective suit, and quick movement that still checks ground contamination first. Motif: rescue profession pulled against quarantine rules. Tension: not heroic charge; focus on professional impulse, risk assessment, and breath limits. Visual evidence: red seals, stretcher, detector, fogged mask. Boundary: avoid generic paramedic.', tags: ['red_zone', 'paramedic', 'toxic'] },
  { id: 'hazmat_gate_clerk', name: '防化闸口登记员', nameEn: 'Hazmat Gate Clerk', group: 'H. 污染隔离 / 危险边界', groupEn: 'H. Toxic Exclusion / Danger Border', ontologyLevel: 2, eras: modernWastelandEras, def: '第一识别是在防化闸口把生死边界变成表格和盖章的人。造型入口：黄色防护服、登记板、印章、隔着面罩对每个人说同样流程。母题：危险边界被行政化。张力：不要普通公务员，重点是冷程序、恐惧和不得不拒绝人的手。视觉证据：闸口灯、盖章手势、排队距离、污染袋。边界：避免纯背景岗亭。', defEn: 'First read: a clerk at a hazmat gate turning life-death boundary into forms and stamps. Styling entry: yellow hazmat suit, clipboard, stamp, and repeating the same procedure through a face shield. Motif: danger boundary bureaucratized. Tension: not a civil servant; focus on cold procedure, fear, and hands forced to refuse people. Visual evidence: gate light, stamping gesture, queue distance, contamination bags. Boundary: avoid background checkpoint guard.', tags: ['hazmat', 'gate', 'clerk'] },
  { id: 'chemical_rain_schoolboy', name: '化学雨学生', nameEn: 'Chemical-Rain Schoolboy', group: 'H. 污染隔离 / 危险边界', groupEn: 'H. Toxic Exclusion / Danger Border', ontologyLevel: 2, eras: modernWastelandEras, def: '第一识别是把防化雨具当成上学日常的男学生。造型入口：防酸雨衣、旧书包、透明面罩、课本角落被雨水腐蚀。母题：污染天气进入儿童制度生活。张力：不要可爱雨天校园，重点是习惯化危险和仍要准时上课。视觉证据：雨滴灼痕、校牌、防护靴、躲在屋檐下等警报的脸。边界：避免普通雨衣学生。', defEn: 'First read: a schoolboy treating chemical-rain gear as school routine. Styling entry: acid-rain coat, old schoolbag, clear face shield, and textbook corners corroded by rain. Motif: polluted weather entering childhood institutional life. Tension: not cute rainy school; focus on normalized danger and still needing to be on time. Visual evidence: burn marks from drops, student badge, protective boots, face waiting under eaves for alarm. Boundary: avoid generic raincoat student.', tags: ['chemical_rain', 'schoolboy', 'pollution'] },
  { id: 'filter_mask_pop_singer', name: '滤罐面罩流行歌手', nameEn: 'Filter-Mask Pop Singer', group: 'H. 污染隔离 / 危险边界', groupEn: 'H. Toxic Exclusion / Danger Border', ontologyLevel: 2, risk: 'medium', eras: modernWastelandEras, def: '第一识别是必须戴滤罐面罩才能继续演出的流行歌手。造型入口：改造麦克风、防毒滤罐、舞台外套、她把换气声也纳入节拍。母题：娱乐产业适应污染空气。张力：不要普通偶像，重点是声音受限、观众期待和防护变成舞台符号。视觉证据：滤芯、耳返、面罩雾、灯光下的呼吸节奏。边界：避免真实明星。', defEn: 'First read: a pop singer who must wear a filter mask to keep performing. Styling entry: modified microphone, respirator filters, stage jacket, and turning breath exchange into rhythm. Motif: entertainment adapting to polluted air. Tension: not a generic idol; focus on restricted voice, audience expectation, and protection as stage symbol. Visual evidence: filter cartridges, in-ear monitor, mask fog, breath rhythm under lights. Boundary: avoid real celebrity.', tags: ['filter_mask', 'singer', 'pollution'] },
  { id: 'exclusion_zone_bride', name: '隔离区新娘', nameEn: 'Exclusion-Zone Bride', group: 'H. 污染隔离 / 危险边界', groupEn: 'H. Toxic Exclusion / Danger Border', ontologyLevel: 2, risk: 'medium', eras: modernWastelandEras, def: '第一识别是在禁区边缘举行婚礼、每个亲密动作都隔着防护层的新娘。造型入口：白色防护纱、隔离编号、手套捧花、戒指套在防护手套外。母题：亲密仪式被污染边界重新编排。张力：不要普通婚纱戏剧，重点是距离、规程和仍想完成仪式。视觉证据：警戒线、检测门、白纱封条、无法拥抱的站位。边界：避免婚纱恐怖。', defEn: 'First read: a bride marrying at the edge of an exclusion zone, every intimate gesture through protection. Styling entry: white protective veil, exclusion code, gloved bouquet, ring over protective glove. Motif: intimacy ritual rearranged by contamination boundary. Tension: not generic bridal drama; focus on distance, procedure, and wanting to complete the ritual. Visual evidence: warning tape, detector gate, veil seals, stance unable to embrace. Boundary: avoid bridal horror.', tags: ['exclusion_zone', 'bride', 'wedding'] },
  { id: 'toxic_dump_oracle', name: '毒废料场预言者', nameEn: 'Toxic-Dump Oracle', group: 'H. 污染隔离 / 危险边界', groupEn: 'H. Toxic Exclusion / Danger Border', ontologyLevel: 4, risk: 'high', eras: modernWastelandEras, def: '第一识别是从毒废料渗漏、颜色和气味里判断未来灾害的人。造型入口：荧光污渍、旧雨伞、低语姿态、手里拿着标记泄漏方向的纸。母题：污染观察被绝望者当成预言。张力：不要万能神秘，重点是经验、毒性和被迫接近危险。视觉证据：废桶、荧光斑、咳嗽停顿、腐蚀地面。边界：避免普通占卜师。', defEn: 'First read: a figure reading future disasters from toxic dump leakage, color, and smell. Styling entry: fluorescent stains, old umbrella, whispering posture, and paper marking leakage directions. Motif: pollution observation treated by desperate people as prophecy. Tension: not mystical omniscience; focus on experience, toxicity, and forced proximity to danger. Visual evidence: waste drums, glowing stains, cough pauses, corroded ground. Boundary: avoid generic fortune teller.', tags: ['toxic_dump', 'oracle', 'waste'] },
  { id: 'industrial_lung_patient', name: '工业肺病人', nameEn: 'Industrial-Lung Patient', group: 'H. 污染隔离 / 危险边界', groupEn: 'H. Toxic Exclusion / Danger Border', ontologyLevel: 2, risk: 'medium', eras: modernWastelandEras, def: '第一识别是污染工厂把肺部写进病历的人。造型入口：便携氧气瓶、灰色围巾、病历牌、说话前先计算一口气够不够。母题：工业环境进入呼吸。张力：不要普通病人，重点是劳动后果、慢性疲惫和仍需工作。视觉证据：氧气管、粉尘衣领、肺片、手扶胸口。边界：避免泛泛病弱美。', defEn: 'First read: a patient whose lungs have been written into medical files by polluted factories. Styling entry: portable oxygen tank, grey scarf, medical tag, and calculating whether one breath is enough before speaking. Motif: industrial environment entering respiration. Tension: not a generic patient; focus on labor consequence, chronic fatigue, and still needing to work. Visual evidence: oxygen tube, dusty collar, lung film, hand at chest. Boundary: avoid vague fragile beauty.', tags: ['lung', 'patient', 'industrial'] },
  { id: 'warning_tape_dancer', name: '警戒线舞者', nameEn: 'Warning-Tape Dancer', group: 'H. 污染隔离 / 危险边界', groupEn: 'H. Toxic Exclusion / Danger Border', ontologyLevel: 2, eras: modernWastelandEras, def: '第一识别是把警戒线、禁区标识和身体张力转成表演的人。造型入口：警戒带服饰、防护靴、动作像被看不见边界拉住。母题：禁令符号变成身体语法。张力：不要普通舞台服，重点是危险边界、克制和越界欲望。视觉证据：黄黑带、拉伸姿态、污染标牌、脚尖停在线前。边界：避免时尚装饰化。', defEn: 'First read: a dancer turning warning tape, exclusion symbols, and bodily tension into performance. Styling entry: warning-tape costume, protective boots, and movement pulled by invisible boundaries. Motif: prohibition signs becoming body grammar. Tension: not stage costume; focus on danger borders, restraint, and desire to cross. Visual evidence: yellow-black tape, stretched posture, contamination signs, toe stopping before a line. Boundary: avoid fashion decoration.', tags: ['warning_tape', 'dancer', 'performance'] },
  { id: 'sealed_city_inspector', name: '封城巡检官', nameEn: 'Sealed-City Inspector', group: 'H. 污染隔离 / 危险边界', groupEn: 'H. Toxic Exclusion / Danger Border', ontologyLevel: 2, risk: 'medium', eras: modernWastelandEras, def: '第一识别是在封锁城市里执行健康、通行和物资检查的巡检官。造型入口：黑色制服、封条、检测仪、走到每扇门前都先看编号。母题：城市治理收缩成巡检路线。张力：不要普通警察，重点是制度压力、疲惫和被居民注视。视觉证据：封门贴、记录板、门缝眼神、低声命令。边界：避免动作执法者。', defEn: 'First read: an inspector enforcing health, passage, and supply checks inside a sealed city. Styling entry: black uniform, seals, detector, and checking door numbers before each stop. Motif: urban governance compressed into inspection routes. Tension: not generic police; focus on institutional pressure, fatigue, and being watched by residents. Visual evidence: door seals, record board, eyes through cracks, low commands. Boundary: avoid action enforcer.', tags: ['sealed_city', 'inspector', 'authority'] },
  { id: 'green_fire_cleaner', name: '绿火清理员', nameEn: 'Green-Fire Cleanup Worker', group: 'H. 污染隔离 / 危险边界', groupEn: 'H. Toxic Exclusion / Danger Border', ontologyLevel: 4, risk: 'high', eras: modernWastelandEras, def: '第一识别是负责清理异常绿火事故残留的工人。造型入口：耐腐蚀服、绿色火焰残痕、长柄工具、面罩反光里仍有余焰颜色。母题：灾害结束后真正危险的劳动才开始。张力：不要魔法火焰，重点是清理流程、腐蚀和不确定复燃。视觉证据：焦黑地面、绿色灰烬、封存桶、谨慎伸出的工具。边界：避免普通消防员。', defEn: 'First read: a worker cleaning residue from abnormal green-fire incidents. Styling entry: corrosion-proof suit, green flame traces, long tools, and ember color still reflected in the mask. Motif: the most dangerous labor begins after disaster seems over. Tension: not magic fire; focus on cleanup procedure, corrosion, and uncertain reignition. Visual evidence: charred ground, green ash, sealed drums, cautiously extended tool. Boundary: avoid generic firefighter.', tags: ['green_fire', 'cleanup', 'toxic'] },

  { id: 'mall_ruin_teen_queen', name: '商场废墟少女王', nameEn: 'Mall-Ruin Teen Queen', group: 'I. 城市废墟 / 社会崩坏', groupEn: 'I. Urban Ruin / Social Collapse', ontologyLevel: 2, eras: modernWastelandEras, def: '第一识别是在旧商场废墟里建立小型秩序的少女王。造型入口：旧商场制服、塑料王冠、购物车护卫、她坐在断电扶梯上分配物资。母题：消费空间崩坏后变成微型王国。张力：不要可爱女王，重点是早熟权力、资源分配和旧广告残影。视觉证据：破橱窗、购物袋、临时旗帜、警惕同伴。边界：避免普通校园女王。', defEn: 'First read: a teen queen building small order inside mall ruins. Styling entry: old mall uniform, plastic crown, shopping-cart guards, and distributing supplies from a dead escalator. Motif: collapsed consumer space becoming a miniature kingdom. Tension: not a cute queen; focus on premature power, rationing, and old ad afterimages. Visual evidence: broken display windows, shopping bags, improvised flag, wary companions. Boundary: avoid generic school queen.', tags: ['mall_ruin', 'teen', 'queen'] },
  { id: 'subway_tunnel_doctor', name: '地铁隧道医生', nameEn: 'Subway-Tunnel Doctor', group: 'I. 城市废墟 / 社会崩坏', groupEn: 'I. Urban Ruin / Social Collapse', ontologyLevel: 1, eras: modernWastelandEras, def: '第一识别是在废弃地铁隧道里开地下诊所的医生。造型入口：头灯、旧白袍、急救箱、站台长椅当病床。母题：城市基础设施失效后变成医疗空间。张力：不要普通医生，重点是黑暗、回声和低资源判断。视觉证据：轨道边药箱、手电光、墙面线路图、病人排队。边界：避免干净医院感。', defEn: 'First read: a doctor running an underground clinic inside abandoned subway tunnels. Styling entry: headlamp, old white coat, med kit, platform bench used as bed. Motif: failed urban infrastructure becoming medical space. Tension: not a normal doctor; focus on darkness, echo, and low-resource judgment. Visual evidence: medicine case by tracks, flashlight beam, wall route map, patients in line. Boundary: avoid clean hospital feel.', tags: ['subway', 'doctor', 'tunnel'] },
  { id: 'apartment_block_chief', name: '公寓楼长', nameEn: 'Apartment-Block Chief', group: 'I. 城市废墟 / 社会崩坏', groupEn: 'I. Urban Ruin / Social Collapse', ontologyLevel: 1, eras: modernWastelandEras, def: '第一识别是维持一栋破公寓残余秩序的楼长。造型入口：钥匙串、楼道公告、旧外套、手里永远拿着维修和配给名单。母题：城市崩坏后治理缩小到楼道。张力：不要普通物业人员，重点是邻里权力、疲惫和不得不强硬。视觉证据：手写告示、楼梯灯坏、门牌、被争吵包围的站姿。边界：避免喜剧管理员。', defEn: 'First read: a block chief maintaining the remaining order of one damaged apartment building. Styling entry: key ring, corridor notices, old coat, and repair-ration lists always in hand. Motif: after urban collapse, governance shrinks to hallways. Tension: not property management; focus on neighbor power, fatigue, and forced toughness. Visual evidence: handwritten notices, broken stair lights, door numbers, stance amid arguments. Boundary: avoid comic building manager.', tags: ['apartment', 'chief', 'community'] },
  { id: 'rooftop_farmer', name: '屋顶菜园农夫', nameEn: 'Rooftop Farmer', group: 'I. 城市废墟 / 社会崩坏', groupEn: 'I. Urban Ruin / Social Collapse', ontologyLevel: 1, eras: modernWastelandEras, def: '第一识别是在高楼屋顶用塑料桶和土袋种出食物的农夫。造型入口：泥土手套、旧水桶、风吹衣角、身体习惯在楼边保持低重心。母题：农业被抬到城市残骸上。张力：不要田园感，重点是高度、风、少土和社区粮食压力。视觉证据：土袋、简易架、排水管、楼下废城。边界：避免普通菜园角色。', defEn: 'First read: a farmer growing food on high-rise rooftops with plastic buckets and soil bags. Styling entry: soil gloves, old buckets, wind-torn hem, and a body keeping low center of gravity near edges. Motif: agriculture lifted onto urban remains. Tension: no pastoral feel; focus on height, wind, little soil, and community food pressure. Visual evidence: soil sacks, simple frames, drain pipes, ruined city below. Boundary: avoid ordinary garden figure.', tags: ['rooftop', 'farmer', 'urban'] },
  { id: 'library_fortress_child', name: '图书馆堡垒孩子', nameEn: 'Library-Fortress Child', group: 'I. 城市废墟 / 社会崩坏', groupEn: 'I. Urban Ruin / Social Collapse', ontologyLevel: 2, eras: modernWastelandEras, def: '第一识别是在图书馆堡垒里长大、把书当墙也当护甲的孩子。造型入口：书本护甲、借书卡、安静眼神、走路懂得不碰会倒塌的书墙。母题：知识废墟变成庇护结构。张力：不要可爱读书儿童，重点是防御、安静和过早懂得保存。视觉证据：书脊磨损、借书章、临时 barricade、抱紧字典。边界：避免普通小书虫。', defEn: 'First read: a child raised in a library fortress, using books as walls and armor. Styling entry: book armor, library card, quiet eyes, and walking without touching unstable book walls. Motif: knowledge ruin becoming shelter structure. Tension: not a cute reading child; focus on defense, quietness, and early knowledge of preservation. Visual evidence: worn spines, library stamps, improvised barricade, dictionary hugged tight. Boundary: avoid generic bookworm kid.', tags: ['library', 'child', 'fortress'] },
  { id: 'parking_lot_boxer', name: '停车场拳手', nameEn: 'Parking-Lot Boxer', group: 'I. 城市废墟 / 社会崩坏', groupEn: 'I. Urban Ruin / Social Collapse', risk: 'medium', eras: modernWastelandEras, def: '第一识别是在地下停车场用拳赛换食物和尊严的人。造型入口：绷带拳套、车库灯、旧运动裤、身体被低矮天花板压出更紧的站姿。母题：城市废墟里的暴力变成交换制度。张力：不要体育冠军，重点是地下、交易和伤后继续上场。视觉证据：停车线、押注食物、裂拳、围观阴影。边界：避免普通拳击馆。', defEn: 'First read: a boxer trading fights for food and dignity in underground parking lots. Styling entry: wrapped fists, garage lights, old sweatpants, and a tighter stance under low ceilings. Motif: violence in urban ruins becoming exchange system. Tension: not a sports champion; focus on underground setting, trade, and returning after injury. Visual evidence: parking lines, food bets, split knuckles, watcher shadows. Boundary: avoid normal boxing gym.', tags: ['boxer', 'parking_lot', 'urban'] },
  { id: 'elevator_shaft_climber', name: '电梯井攀爬者', nameEn: 'Elevator-Shaft Climber', group: 'I. 城市废墟 / 社会崩坏', groupEn: 'I. Urban Ruin / Social Collapse', risk: 'medium', eras: modernWastelandEras, def: '第一识别是把坏掉的电梯井当作垂直路线的人。造型入口：攀爬绳、旧制服、擦伤膝盖、习惯用脚尖试探梁面的动作。母题：城市通道失效后，身体重新学习建筑。张力：不要跑酷炫技，重点是黑暗、高度和运输必要性。视觉证据：井壁灰、绳结、头灯、手掌磨破。边界：避免普通攀岩者。', defEn: 'First read: a climber using broken elevator shafts as vertical routes. Styling entry: climbing rope, old uniform, scraped knees, and toes testing beam surfaces. Motif: after urban passages fail, the body relearns buildings. Tension: not parkour flair; focus on darkness, height, and transport necessity. Visual evidence: shaft dust, knots, headlamp, abraded palms. Boundary: avoid generic climber.', tags: ['elevator_shaft', 'climber', 'ruin'] },
  { id: 'billboard_sleepwalker', name: '广告牌梦游者', nameEn: 'Billboard Sleepwalker', group: 'I. 城市废墟 / 社会崩坏', groupEn: 'I. Urban Ruin / Social Collapse', ontologyLevel: 3, risk: 'medium', eras: modernWastelandEras, def: '第一识别是被旧广告图像和霓虹残影缠住、像梦游一样穿过废城的人。造型入口：广告布披肩、恍惚姿态、脸上闪过旧消费色块。母题：消费记忆在崩坏城市里继续诱导身体。张力：不要纯精神病化，重点是图像残留、迷路和过时欲望。视觉证据：破广告牌、反光布、半睁眼、脚步偏离道路。边界：避免普通流浪者。', defEn: 'First read: a sleepwalker haunted by old ads and neon afterimages through the ruined city. Styling entry: billboard tarp shawl, dazed posture, and old consumer color blocks crossing the face. Motif: consumer memory still steering bodies inside collapse. Tension: do not pathologize only; focus on image residue, getting lost, and obsolete desire. Visual evidence: broken billboard, reflective tarp, half-open eyes, steps drifting off road. Boundary: avoid generic vagrant.', tags: ['billboard', 'sleepwalker', 'consumer_ruin'] },
  { id: 'courthouse_barricade_judge', name: '法院路障法官', nameEn: 'Courthouse-Barricade Judge', group: 'I. 城市废墟 / 社会崩坏', groupEn: 'I. Urban Ruin / Social Collapse', ontologyLevel: 2, eras: modernWastelandEras, def: '第一识别是在法院废墟和街道路障之间继续维持审判仪式的法官。造型入口：破法袍、临时木槌、路障桌、说话时仍坚持程序顺序。母题：法律形式在崩坏中残存。张力：不要威严法官换皮，重点是仪式、无力和仍试图分辨是非。视觉证据：碎法典、木箱桌、围观人群、尘土假发。边界：避免普通审判场景。', defEn: 'First read: a judge maintaining trial ritual between courthouse ruins and street barricades. Styling entry: torn robe, improvised gavel, barricade desk, and speech still following procedure order. Motif: legal form surviving collapse. Tension: not a majestic judge reskin; focus on ritual, powerlessness, and still trying to judge right and wrong. Visual evidence: broken code book, crate desk, surrounding crowd, dusty wig. Boundary: avoid normal courtroom.', tags: ['courthouse', 'judge', 'barricade'] },
  { id: 'fire_escape_bride', name: '消防梯新娘', nameEn: 'Fire-Escape Bride', group: 'I. 城市废墟 / 社会崩坏', groupEn: 'I. Urban Ruin / Social Collapse', ontologyLevel: 2, eras: modernWastelandEras, def: '第一识别是在消防梯和烟尘之间完成仪式的新娘。造型入口：短婚纱、铁梯、烟尘花束、身体一半像逃生一半像宣誓。母题：婚礼被迫借用逃生结构。张力：不要普通落跑新娘，重点是城市危险、仪式坚持和临时空间。视觉证据：铁锈梯、黑灰裙摆、消防门、手抓栏杆。边界：避免婚纱写真。', defEn: 'First read: a bride completing ritual between fire escape and soot. Styling entry: short bridal dress, iron ladder, soot bouquet, and a body half escaping, half taking vows. Motif: wedding forced to borrow escape structure. Tension: not runaway bride; focus on urban danger, ritual persistence, and temporary space. Visual evidence: rusty ladder, ash-dark hem, fire door, hand gripping rail. Boundary: avoid bridal photoshoot.', tags: ['fire_escape', 'bride', 'urban'] },

  { id: 'solar_commune_builder', name: '太阳能公社建造者', nameEn: 'Solar-Commune Builder', group: 'J. 生态重建 / 灾后共同体', groupEn: 'J. Eco-Rebuild / Post-Disaster Commons', ontologyLevel: 1, def: '第一识别是在废墟上搭建太阳能公社基础设施的人。造型入口：工具背心、太阳能板、木架、动作稳而不戏剧化。母题：重建来自重复劳动而不是奇迹。张力：不要乌托邦海报，重点是团队协作、临时修补和能源分配。视觉证据：螺丝盒、旧电线、手绘规划图、晒黑手臂。边界：避免科技宣传片。', defEn: 'First read: a builder installing solar commune infrastructure on ruins. Styling entry: tool vest, solar panels, timber frames, and steady non-dramatic movement. Motif: rebuilding from repeated labor, not miracle. Tension: no utopia poster; focus on teamwork, temporary repair, and energy distribution. Visual evidence: screw box, old wires, hand-drawn plan, sun-darkened arms. Boundary: avoid tech promo image.', tags: ['solar', 'commune', 'builder'] },
  { id: 'seed_bank_librarian', name: '种子银行图书管理员', nameEn: 'Seed-Bank Librarian', group: 'J. 生态重建 / 灾后共同体', groupEn: 'J. Eco-Rebuild / Post-Disaster Commons', ontologyLevel: 1, def: '第一识别是像保管书籍一样保管未来粮食的种子银行管理员。造型入口：种子抽屉、棉手套、编号册、她翻开抽屉时像翻开目录。母题：知识保存和粮食保存重叠。张力：不要普通图书馆员，重点是湿度、品种和未来责任。视觉证据：种袋标签、低温柜、手写索引、轻拿轻放的手。边界：避免田园种子收藏。', defEn: 'First read: a seed-bank librarian guarding future food like books. Styling entry: seed drawers, cotton gloves, code book, and opening drawers like catalogues. Motif: knowledge preservation overlapping food preservation. Tension: not a generic librarian; focus on humidity, varieties, and responsibility to the future. Visual evidence: seed-bag labels, cold cabinet, handwritten index, careful hands. Boundary: avoid pastoral seed collecting.', tags: ['seed_bank', 'librarian', 'future_food'] },
  { id: 'rewilding_ranger', name: '再野化巡护员', nameEn: 'Rewilding Ranger', group: 'J. 生态重建 / 灾后共同体', groupEn: 'J. Eco-Rebuild / Post-Disaster Commons', ontologyLevel: 1, def: '第一识别是巡护被重新放归自然的废弃土地的人。造型入口：绿色臂章、旧地图、泥土靴、低声观察动物痕迹的身体。母题：秩序不是控制，而是让生态重新占位。张力：不要普通护林员，重点是灾后土地、监测和克制干预。视觉证据：足迹本、围栏缺口、种苗标记、望远镜。边界：避免自然纪录片人物。', defEn: 'First read: a ranger patrolling abandoned land being rewilded. Styling entry: green armband, old map, muddy boots, and a body quietly reading animal traces. Motif: order not as control but letting ecology take place again. Tension: not a generic forest ranger; focus on post-disaster land, monitoring, and restrained intervention. Visual evidence: track notebook, fence gap, seedling markers, binoculars. Boundary: avoid nature-documentary figure.', tags: ['rewilding', 'ranger', 'ecology'] },
  { id: 'compost_temple_keeper', name: '堆肥神殿守护者', nameEn: 'Compost-Temple Keeper', group: 'J. 生态重建 / 灾后共同体', groupEn: 'J. Eco-Rebuild / Post-Disaster Commons', ontologyLevel: 2, def: '第一识别是把堆肥循环维护成共同体仪式空间的人。造型入口：堆肥铲、植物祭台、素布袍、动作像礼仪也像翻堆。母题：废弃物被转化为新生活的制度。张力：不要神秘庙宇，重点是气味、劳动和循环信念。视觉证据：堆肥层、木牌、幼苗、洗净又沾土的手。边界：避免空泛生态圣职。', defEn: 'First read: a keeper maintaining compost cycles as communal ritual space. Styling entry: compost shovel, plant altar, plain cloth robe, and gestures like ceremony and turning a pile at once. Motif: waste transformed into institution for new life. Tension: not mystical temple; focus on smell, labor, and belief in cycles. Visual evidence: compost layers, wooden signs, seedlings, hands washed yet soiled. Boundary: avoid vague eco-clergy.', tags: ['compost', 'temple', 'keeper'] },
  { id: 'rain_garden_engineer', name: '雨水花园工程师', nameEn: 'Rain-Garden Engineer', group: 'J. 生态重建 / 灾后共同体', groupEn: 'J. Eco-Rebuild / Post-Disaster Commons', ontologyLevel: 1, def: '第一识别是把洪水路径改造成雨水花园系统的工程师。造型入口：测量尺、泥水裤、植物图纸、蹲在排水沟边检查坡度。母题：灾害水被组织成可照料的生态。张力：不要景观设计宣传，重点是泥、计算和防洪焦虑。视觉证据：水位线、植物标牌、湿图纸、手套沾泥。边界：避免普通园艺师。', defEn: 'First read: an engineer turning flood paths into rain-garden systems. Styling entry: measuring ruler, muddy trousers, planting diagrams, and crouching by drains to check slope. Motif: disaster water organized into careable ecology. Tension: not landscape-design promo; focus on mud, calculation, and flood anxiety. Visual evidence: water lines, plant markers, wet blueprint, muddy gloves. Boundary: avoid generic gardener.', tags: ['rain_garden', 'engineer', 'water'] },
  { id: 'biochar_blacksmith', name: '生物炭铁匠', nameEn: 'Biochar Blacksmith', group: 'J. 生态重建 / 灾后共同体', groupEn: 'J. Eco-Rebuild / Post-Disaster Commons', ontologyLevel: 1, def: '第一识别是把烧毁物转化为改良土壤的生物炭铁匠。造型入口：黑炭手、土壤袋、简陋炉台、动作像锻造也像种地。母题：火灾残骸被送回土地。张力：不要传统铁匠换皮，重点是黑炭、土壤和灾后循环。视觉证据：炭粉、炉灰、土样瓶、粗布围裙。边界：避免普通农夫或铁匠。', defEn: 'First read: a biochar blacksmith turning burned matter into soil improvement. Styling entry: black-char hands, soil bags, rough forge, and movement like forging and farming at once. Motif: fire remains returned to land. Tension: not traditional blacksmith reskin; focus on char, soil, and post-disaster cycle. Visual evidence: charcoal dust, forge ash, soil sample bottles, rough apron. Boundary: avoid generic farmer or smith.', tags: ['biochar', 'blacksmith', 'soil'] },
  { id: 'plant_school_principal', name: '植物学校校长', nameEn: 'Plant-School Principal', group: 'J. 生态重建 / 灾后共同体', groupEn: 'J. Eco-Rebuild / Post-Disaster Commons', ontologyLevel: 1, def: '第一识别是把儿童教育和植物照护合并管理的校长。造型入口：旧校长服、植物教室、浇水壶、点名册上同时记录学生和苗床。母题：下一代教育必须和生态修复一起发生。张力：不要温馨校园，重点是制度、照料和有限资源。视觉证据：黑板植物图、泥脚印、课程表、严肃温柔的站姿。边界：避免普通校长。', defEn: 'First read: a principal managing child education and plant care together. Styling entry: old principal outfit, plant classroom, watering can, and attendance book recording students and seedbeds. Motif: next-generation education happening with ecological repair. Tension: not cozy school; focus on institution, care, and limited resources. Visual evidence: plant diagrams on blackboard, muddy footprints, timetable, serious-gentle stance. Boundary: avoid generic principal.', tags: ['plant_school', 'principal', 'education'] },
  { id: 'windmill_wedding_officiant', name: '风车婚礼主婚人', nameEn: 'Windmill Wedding Officiant', group: 'J. 生态重建 / 灾后共同体', groupEn: 'J. Eco-Rebuild / Post-Disaster Commons', ontologyLevel: 1, def: '第一识别是在重建能源设施旁主持婚礼的主婚人。造型入口：粗麻礼服、风车影子、手写誓词、说话时让新人站在发电设备噪声之外。母题：共同体亲密关系和能源重建同场成立。张力：不要田园婚礼，重点是仪式、风、电和灾后生活继续。视觉证据：风车轮廓、誓词纸、工作手套、临时座椅。边界：避免普通婚礼司仪。', defEn: 'First read: an officiant holding weddings beside rebuilt energy infrastructure. Styling entry: rough linen formalwear, windmill shadow, handwritten vows, and placing the couple outside generator noise. Motif: communal intimacy and energy rebuilding happening in one place. Tension: not pastoral wedding; focus on ritual, wind, power, and post-disaster life continuing. Visual evidence: windmill silhouette, vow paper, work gloves, temporary seats. Boundary: avoid generic wedding officiant.', tags: ['windmill', 'wedding', 'officiant'] },
  { id: 'greenhouse_orphan_leader', name: '温室孤儿领袖', nameEn: 'Greenhouse-Orphan Leader', group: 'J. 生态重建 / 灾后共同体', groupEn: 'J. Eco-Rebuild / Post-Disaster Commons', ontologyLevel: 1, def: '第一识别是带领孤儿群体照料温室和未来食物的年轻领袖。造型入口：温室钥匙、袖口泥痕、儿童徽章、她把更小的孩子安排到安全走道。母题：失去家庭后，共同照料变成组织方式。张力：不要少年英雄，重点是责任、脆弱和食物纪律。视觉证据：苗床、钥匙绳、小水壶、孩子排队。边界：避免卖惨孤儿。', defEn: 'First read: a young leader guiding orphans to care for greenhouse and future food. Styling entry: greenhouse key, muddy cuffs, child badge, and placing smaller children on safe paths. Motif: after losing family, shared care becomes organization. Tension: not teen hero; focus on responsibility, vulnerability, and food discipline. Visual evidence: seedbeds, key cord, small watering cans, children in line. Boundary: avoid pity-orphan image.', tags: ['greenhouse', 'orphan', 'leader'] },
  { id: 'moss_roof_architect', name: '苔藓屋顶建筑师', nameEn: 'Moss-Roof Architect', group: 'J. 生态重建 / 灾后共同体', groupEn: 'J. Eco-Rebuild / Post-Disaster Commons', ontologyLevel: 1, def: '第一识别是让城市屋顶重新成为苔藓、雨水和隔热生态层的建筑师。造型入口：草图筒、苔藓样本、回收布衣、手指按在屋顶剖面图上讲解。母题：建筑从庇护物变成生态表面。张力：不要高级建筑师宣传照，重点是回收材料、湿度和长期维护。视觉证据：苔藓托盘、屋顶模型、旧卷尺、绿色指尖。边界：避免普通景观设计师。', defEn: 'First read: an architect turning city roofs back into moss, rainwater, and insulation ecology layers. Styling entry: sketch tube, moss samples, recycled clothwear, and fingers explaining over a roof section drawing. Motif: architecture becoming ecological surface rather than shelter alone. Tension: not elite architect promo; focus on recycled material, humidity, and long-term maintenance. Visual evidence: moss trays, roof model, old tape measure, green fingertips. Boundary: avoid generic landscape designer.', tags: ['moss_roof', 'architect', 'ecology'] }
];

export const CD_PERSONA_WASTELAND: PersonaTerm[] = seeds.map(wp);
