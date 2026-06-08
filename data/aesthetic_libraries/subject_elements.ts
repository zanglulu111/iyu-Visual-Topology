
import { LibraryItemDef } from '../../types';

type CreatureElementMeta = Pick<LibraryItemDef,
  'def' | 'defEn' | 'eraMode' | 'eras' | 'ontologyLevel' | 'realityTags' | 'categoryFit' | 'creatureFamily' | 'creatureFamilyAllow' | 'creatureFamilyFusion' | 'creatureFamilyBlock' | 'creatureTaxonomyFit'
>;
type CreatureTaxonomyFit = NonNullable<LibraryItemDef['creatureTaxonomyFit']>;

const elementalFit = {
  natural: { unlisted: 'fusion', strong: ['fantasy', 'mythic_epic', 'xianxia', 'ecological'], usable: ['dark_fantasy', 'adventure', 'wuxia'], fusion: ['science_fiction', 'surreal'], weak: ['urban_life', 'romance'], exclude: [] },
  mineral: { unlisted: 'fusion', strong: ['fantasy', 'dark_fantasy', 'mythic_epic'], usable: ['xianxia', 'science_fiction', 'wasteland', 'adventure'], fusion: ['wuxia', 'court', 'surreal'], weak: ['romance'], exclude: [] },
  flesh: { unlisted: 'fusion', strong: ['body_horror', 'horror', 'biopunk'], usable: ['dark_fantasy', 'science_fiction', 'surreal'], fusion: ['fantasy', 'wasteland', 'xianxia'], weak: ['romance', 'court'], exclude: [] },
  energy: { unlisted: 'fusion', strong: ['science_fiction', 'fantasy', 'mythic_epic'], usable: ['xianxia', 'cyberpunk', 'surreal', 'posthuman'], fusion: ['wuxia', 'dark_fantasy'], weak: ['romance', 'historical'], exclude: [] },
  void: { unlisted: 'fusion', strong: ['dark_fantasy', 'horror', 'surreal'], usable: ['fantasy', 'mythic_epic', 'science_fiction'], fusion: ['xianxia', 'wuxia', 'romance'], weak: ['urban_life'], exclude: [] },
  tech: { unlisted: 'fusion', strong: ['science_fiction', 'cyberpunk', 'posthuman'], usable: ['biopunk', 'wasteland', 'surreal'], fusion: ['fantasy', 'dark_fantasy', 'urban_life'], weak: ['historical', 'wuxia'], exclude: [] }
} satisfies Record<string, NonNullable<LibraryItemDef['categoryFit']>>;

const elementMeta = (
  def: string,
  defEn: string,
  ontologyLevel: 1 | 2 | 3 | 4 | 5,
  realityTags: readonly string[],
  categoryFit: NonNullable<LibraryItemDef['categoryFit']>,
  creatureFamily: string,
  allow: readonly string[],
  fusion: readonly string[],
  block: readonly string[]
): CreatureElementMeta => ({
  def,
  defEn,
  eraMode: 'universal',
  eras: [],
  ontologyLevel,
  realityTags,
  categoryFit,
  creatureFamily,
  creatureFamilyAllow: allow,
  creatureFamilyFusion: fusion,
  creatureFamilyBlock: block
});

const creatureElementMeta: Record<string, CreatureElementMeta> = {
  el_fire: elementMeta('身体或外壳带有烈焰、热扰动、灰烬和燃烧边缘。', 'Body or shell carries flame, heat distortion, ash, and burning edges.', 4, ['creature', 'non_realist', 'elemental', 'fire', 'heat'], elementalFit.natural, 'elemental_fire', ['elemental_fire', 'flame_body', 'heat_body'], ['draconic', 'demonic', 'phoenix', 'lava'], ['aquatic_pure', 'ice_pure', 'realist_pure']),
  el_water: elementMeta('身体呈深水、流体、气泡、潮汐或湿润半透明质地。', 'Body takes deep-water, liquid, bubble, tide, or wet translucent material.', 4, ['creature', 'non_realist', 'elemental', 'water', 'aquatic'], elementalFit.natural, 'elemental_water', ['elemental_water', 'liquid_body', 'aquatic'], ['siren', 'abyssal', 'jellyfish', 'rain_ritual'], ['fire_pure', 'dry_desert_pure', 'stone_pure']),
  el_earth: elementMeta('身体带有岩石、泥土、苔藓、裂纹和沉重地貌感。', 'Body carries stone, mud, moss, cracks, and heavy terrain weight.', 4, ['creature', 'non_realist', 'elemental', 'earth', 'stone'], elementalFit.natural, 'elemental_earth', ['elemental_earth', 'stone_body', 'mud_body'], ['golem', 'treant', 'mountain_scale'], ['air_pure', 'hologram_pure', 'soft_body_pure']),
  el_air: elementMeta('身体边界被气流、雾、真空口袋和透明风压组织。', 'Body boundary is organized by air currents, mist, vacuum pockets, and transparent pressure.', 4, ['creature', 'non_realist', 'elemental', 'air', 'wind'], elementalFit.natural, 'elemental_air', ['elemental_air', 'wind_body', 'mist_body'], ['avian', 'storm', 'floating'], ['stone_pure', 'heavy_shell_pure', 'underwater_pure']),
  el_ice: elementMeta('身体呈冰晶、霜雾、透明蓝层和尖锐冻结结构。', 'Body takes ice crystal, frost vapor, translucent blue layers, and sharp frozen structures.', 4, ['creature', 'non_realist', 'elemental', 'ice', 'frost'], elementalFit.natural, 'elemental_ice', ['elemental_ice', 'frozen_body', 'crystal_cold'], ['winter_beast', 'undead', 'glacier'], ['fire_pure', 'lava_pure', 'desert_heat_pure']),
  el_lightning: elementMeta('身体含有电弧、火花、臭氧感和瞬间放电轮廓。', 'Body contains electric arcs, sparks, ozone, and instant discharge silhouettes.', 4, ['creature', 'non_realist', 'elemental', 'electric', 'storm'], elementalFit.energy, 'elemental_lightning', ['elemental_lightning', 'electric_body', 'storm_body'], ['thunderbird', 'cyborg', 'storm_dragon'], ['water_soft_pure', 'stone_sleep_pure', 'plant_root_pure']),

  el_gold: elementMeta('身体或外壳呈纯金、神圣反光、贵重金属和祭器感。', 'Body or shell reads as pure gold, sacred reflection, precious metal, and relic material.', 3, ['creature', 'non_realist', 'elemental', 'metal', 'gold', 'sacred'], elementalFit.mineral, 'elemental_gold', ['elemental_gold', 'gold_body', 'metallic'], ['divine', 'court', 'treasure_guardian'], ['rust_pure', 'slime_pure', 'realist_animal_pure']),
  el_chrome: elementMeta('身体呈镜面镀铬、冷银反射、机械外壳或赛博表皮。', 'Body reads as mirror chrome, cold silver reflection, mechanical shell, or cyber skin.', 4, ['creature', 'non_realist', 'elemental', 'metal', 'chrome', 'technological'], elementalFit.tech, 'elemental_chrome', ['elemental_chrome', 'chrome_body', 'machine_skin'], ['android', 'cyborg', 'mecha_beast'], ['organic_pure', 'wood_pure', 'ancient_folk_pure']),
  el_rust: elementMeta('身体带有锈蚀铁、腐蚀橙、工业废料和衰败机械感。', 'Body carries rusted iron, corroded orange, industrial waste, and decayed machinery.', 3, ['creature', 'non_realist', 'elemental', 'metal', 'rust', 'industrial_decay'], elementalFit.mineral, 'elemental_rust', ['elemental_rust', 'rust_body', 'corroded_metal'], ['scrap_golem', 'wasteland', 'pipe_entity'], ['gold_pure', 'clean_android_pure', 'aquatic_pure']),
  el_crystal: elementMeta('身体呈透明晶体、折射彩光、尖锐棱面和矿物生长。', 'Body takes clear crystal, refracted rainbow light, sharp facets, and mineral growth.', 4, ['creature', 'non_realist', 'elemental', 'crystal', 'mineral'], elementalFit.mineral, 'elemental_crystal', ['elemental_crystal', 'crystal_body', 'faceted'], ['geometric', 'ice', 'sacred_gem'], ['flesh_pure', 'smoke_pure', 'fur_pure']),
  el_obsidian: elementMeta('身体呈黑曜石、火山玻璃、黑亮切面和危险锐边。', 'Body reads as obsidian, volcanic glass, glossy black facets, and dangerous edges.', 4, ['creature', 'non_realist', 'elemental', 'obsidian', 'volcanic'], elementalFit.mineral, 'elemental_obsidian', ['elemental_obsidian', 'volcanic_glass', 'sharp_black'], ['demonic', 'void', 'ritual_blade'], ['soft_body_pure', 'gold_pure', 'plant_pure']),
  el_magma: elementMeta('身体有熔岩、红热裂缝、冷却黑壳和火山核心。', 'Body has magma, glowing red cracks, cooling black crust, and volcanic core.', 4, ['creature', 'non_realist', 'elemental', 'lava', 'volcanic'], elementalFit.natural, 'elemental_magma', ['elemental_magma', 'lava_body', 'volcanic_core'], ['basalt_lizard', 'fire_demon', 'dragon'], ['aquatic_pure', 'ice_pure', 'plant_pure']),

  el_flesh: elementMeta('身体强调原始肌肉、脉搏、湿润器官和有机增生。', 'Body emphasizes raw muscle, pulse, wet organs, and organic overgrowth.', 4, ['creature', 'biological', 'non_realist', 'flesh', 'body_horror'], elementalFit.flesh, 'elemental_flesh', ['elemental_flesh', 'organic_body', 'muscle'], ['biopunk', 'parasite', 'lab_specimen'], ['machine_pure', 'crystal_pure', 'hologram_pure']),
  el_bone: elementMeta('身体以白骨、骨架、干燥象牙色和亡灵结构为主。', 'Body is dominated by bone, skeletal structure, dry ivory, and undead anatomy.', 3, ['creature', 'biological', 'non_realist', 'bone', 'undead'], elementalFit.flesh, 'elemental_bone', ['elemental_bone', 'bone_body', 'skeletal'], ['skeleton', 'lich', 'ritual_relic'], ['slime_pure', 'hologram_pure', 'fresh_flesh_pure']),
  el_blood: elementMeta('身体带有鲜血、红色湿痕、生命液体和危险伤口证据。', 'Body carries blood, red wet traces, vital fluid, and dangerous wound evidence.', 4, ['creature', 'biological', 'non_realist', 'blood', 'body_horror'], elementalFit.flesh, 'elemental_blood', ['elemental_blood', 'blood_body', 'vital_fluid'], ['vampire', 'sacrifice', 'wound_ritual'], ['clean_body_pure', 'hologram_pure', 'dry_bone_pure']),
  el_slime: elementMeta('身体呈半透明黏液、滴落胶质、湿滑膜和不稳定软体。', 'Body takes translucent slime, dripping gel, slick membrane, and unstable soft form.', 4, ['creature', 'biological', 'non_realist', 'slime', 'gelatinous'], elementalFit.flesh, 'elemental_slime', ['elemental_slime', 'gel_body', 'soft_body'], ['jellyfish', 'fungal', 'lab_specimen'], ['fire_pure', 'dry_desert_pure', 'bone_pure']),
  el_wood: elementMeta('身体以枯木、树皮、根须、年轮和自然生长痕迹组织。', 'Body is organized by deadwood, bark, roots, rings, and natural growth traces.', 3, ['creature', 'biological', 'non_realist', 'wood', 'plant'], elementalFit.natural, 'elemental_wood', ['elemental_wood', 'bark_body', 'root_body'], ['treant', 'dryad', 'forest_guardian'], ['fire_pure', 'chrome_pure', 'aquatic_pure']),
  el_chitin: elementMeta('身体呈甲壳、昆虫鞘壳、虹彩硬壳和节肢防护。', 'Body reads as chitin, insect shell, iridescent armor, and arthropod protection.', 4, ['creature', 'biological', 'non_realist', 'chitin', 'insectoid'], elementalFit.flesh, 'elemental_chitin', ['elemental_chitin', 'chitin_shell', 'insectoid'], ['myrmecoid', 'coleopteran', 'arachnid'], ['mammal_pure', 'soft_body_pure', 'avian_pure']),

  el_neon: elementMeta('身体或边缘带有霓虹气体光、粉蓝发光管和都市赛博亮色。', 'Body or edge carries neon gas light, pink-blue tubes, and urban cyber glow.', 4, ['creature', 'non_realist', 'elemental', 'neon', 'technological'], elementalFit.tech, 'elemental_neon', ['elemental_neon', 'neon_body', 'light_tube'], ['cyberpunk', 'hologram', 'night_city'], ['primitive_pure', 'wood_pure', 'bone_pure']),
  el_plasma: elementMeta('身体呈高温等离子、紫色能量团、电离边缘和反应炉感。', 'Body takes hot plasma, purple energy spheres, ionized edges, and reactor feeling.', 5, ['creature', 'non_realist', 'elemental', 'plasma', 'energy_body'], elementalFit.energy, 'elemental_plasma', ['elemental_plasma', 'plasma_body', 'energy_body'], ['reactor', 'posthuman', 'star_core'], ['organic_pure', 'wood_pure', 'water_pure']),
  el_holy_light: elementMeta('身体带有圣光、金白光晕、审判感和神圣过曝。', 'Body carries holy light, gold-white halo, judgement, and sacred overexposure.', 4, ['creature', 'non_realist', 'elemental', 'holy_light', 'divine'], elementalFit.energy, 'elemental_holy_light', ['elemental_holy_light', 'divine_light', 'halo_body'], ['seraphic', 'phoenix', 'religious_ritual'], ['undead_pure', 'void_pure', 'demonic_pure']),
  el_laser: elementMeta('身体或器官带有激光束、切割红线、科技瞄准和硬边光。', 'Body or organs carry laser beams, cutting red lines, tech targeting, and hard-edged light.', 4, ['creature', 'non_realist', 'elemental', 'laser', 'technological'], elementalFit.tech, 'elemental_laser', ['elemental_laser', 'beam_body', 'weapon_light'], ['cyborg', 'drone_swarm', 'mecha_beast'], ['organic_pure', 'folk_magic_pure', 'plant_pure']),
  el_biolume: elementMeta('身体带有蓝绿生物荧光、深海发光器官和生态信号。', 'Body carries blue-green bioluminescence, deep-sea light organs, and ecological signals.', 4, ['creature', 'biological', 'non_realist', 'bioluminescent', 'aquatic'], elementalFit.natural, 'elemental_biolume', ['elemental_biolume', 'bioluminescent', 'organic_light'], ['abyssal', 'jellyfish', 'fungal'], ['dry_desert_pure', 'chrome_pure', 'bone_pure']),
  el_fire_blue: elementMeta('身体带有冷蓝鬼火、灵魂火焰、飘忽磷光和亡灵能量。', 'Body carries cold blue fire, soul flame, wavering phosphorescence, and undead energy.', 4, ['creature', 'non_realist', 'elemental', 'blue_fire', 'spirit'], elementalFit.void, 'elemental_blue_fire', ['elemental_blue_fire', 'soul_flame', 'cold_fire'], ['ghost', 'undead', 'will_o_wisp'], ['holy_light_pure', 'water_pure', 'realist_pure']),

  el_shadow: elementMeta('身体由实体化阴影、烟状暗面和无形边界构成。', 'Body is made of solidified shadow, smoky darkness, and formless boundaries.', 4, ['creature', 'non_realist', 'shadow', 'void', 'dark'], elementalFit.void, 'elemental_shadow', ['elemental_shadow', 'shadow_body', 'dark_body'], ['shadow_person', 'void_demon', 'noir_horror'], ['holy_light_pure', 'chrome_pure', 'gold_pure']),
  el_void: elementMeta('身体像绝对黑洞、吞光空无、反存在核心和虚空裂口。', 'Body reads as absolute blackness, light absorption, anti-existence core, and void rift.', 5, ['creature', 'non_realist', 'void', 'cosmic', 'abstract'], elementalFit.void, 'elemental_void', ['elemental_void', 'void_body', 'anti_light'], ['void_entity', 'starspawn', 'rift_dweller'], ['realist_pure', 'gold_pure', 'plant_pure']),
  el_ink: elementMeta('身体呈悬浮水墨、书写性黑液、笔触流动和符号化边缘。', 'Body takes floating ink, calligraphic black liquid, brush flow, and symbolic edges.', 3, ['creature', 'non_realist', 'ink', 'symbolic', 'surreal'], elementalFit.void, 'elemental_ink', ['elemental_ink', 'ink_body', 'calligraphic'], ['word_form', 'xianxia', 'shadow'], ['chrome_pure', 'laser_pure', 'realist_animal_pure']),
  el_smoke: elementMeta('身体由灰烟、薄雾、消散轮廓和灵体化边缘组成。', 'Body is composed of grey smoke, haze, fading contours, and ethereal edges.', 3, ['creature', 'non_realist', 'smoke', 'ethereal', 'air'], elementalFit.void, 'elemental_smoke', ['elemental_smoke', 'smoke_body', 'mist_body'], ['ghost', 'air', 'demon'], ['crystal_pure', 'bone_pure', 'heavy_shell_pure']),
  el_oil: elementMeta('身体呈重油、黑色黏稠液、虹彩油膜和污染流动。', 'Body takes heavy oil, black viscous liquid, iridescent slick, and polluted flow.', 4, ['creature', 'non_realist', 'oil', 'toxic', 'industrial_decay'], elementalFit.void, 'elemental_oil', ['elemental_oil', 'oil_body', 'viscous_black'], ['wasteland', 'pipe_entity', 'shadow'], ['holy_light_pure', 'clean_water_pure', 'plant_pure']),
  el_ash: elementMeta('身体带有灰烬、干燥碎片、雪状飘落和燃尽后的残留。', 'Body carries ash, dry flakes, snow-like falling particles, and burnt residue.', 3, ['creature', 'non_realist', 'ash', 'burnt', 'dry'], elementalFit.void, 'elemental_ash', ['elemental_ash', 'ash_body', 'burnt_residue'], ['phoenix', 'undead', 'wasteland'], ['water_pure', 'slime_pure', 'neon_pure']),

  el_glitch: elementMeta('身体出现像素撕裂、RGB 错位、数字噪声和现实故障。', 'Body shows pixel tearing, RGB shift, digital noise, and reality glitches.', 5, ['creature', 'non_realist', 'glitch', 'digital', 'technological'], elementalFit.tech, 'elemental_glitch', ['elemental_glitch', 'glitch_body', 'digital_error'], ['holo_swarm', 'digital_virus', 'reality_rift'], ['organic_pure', 'historical_pure', 'plant_pure']),
  el_wireframe: elementMeta('身体呈发光线框、蓝图网格、未完成建模和结构透视。', 'Body takes glowing wireframe, blueprint grid, unfinished modeling, and structural x-ray.', 4, ['creature', 'non_realist', 'wireframe', 'digital', 'geometric'], elementalFit.tech, 'elemental_wireframe', ['elemental_wireframe', 'grid_body', 'model_frame'], ['geometric_apostle', 'logical_core', 'hologram'], ['flesh_pure', 'fur_pure', 'mud_pure']),
  el_pixel: elementMeta('身体由方块像素、复古数字立方和低分辨率边缘组成。', 'Body is made of blocky pixels, retro digital cubes, and low-resolution edges.', 4, ['creature', 'non_realist', 'pixel', 'digital', 'technological'], elementalFit.tech, 'elemental_pixel', ['elemental_pixel', 'pixel_body', 'voxel'], ['digital_virus', 'hologram', 'game_logic'], ['organic_pure', 'water_pure', 'bone_pure']),
  el_hologram: elementMeta('身体呈蓝色全息投影、扫描线、闪烁透明层和光幕。', 'Body takes blue holographic projection, scanlines, flickering transparency, and light screens.', 4, ['creature', 'non_realist', 'holographic', 'projection', 'technological'], elementalFit.tech, 'elemental_hologram', ['elemental_hologram', 'projection_body', 'light_body'], ['hologram_body', 'holo_swarm', 'digital_ghost'], ['physical_pure', 'flesh_pure', 'plant_pure']),
  el_nanite: elementMeta('身体由纳米机器云、黑色微粒群和可变形机械尘构成。', 'Body is composed of nanomachine clouds, black micro-swarms, and morphing machine dust.', 5, ['creature', 'non_realist', 'nanite', 'swarm', 'technological'], elementalFit.tech, 'elemental_nanite', ['elemental_nanite', 'nanocloud', 'machine_swarm'], ['nanocloud', 'posthuman', 'grey_goo'], ['organic_pure', 'water_pure', 'wood_pure']),
  el_circuit: elementMeta('身体带有电路板走线、金绿发光路径和接口化皮肤。', 'Body carries circuit-board traces, gold-green glowing paths, and interface skin.', 4, ['creature', 'non_realist', 'circuit', 'interface', 'technological'], elementalFit.tech, 'elemental_circuit', ['elemental_circuit', 'circuit_body', 'interface_skin'], ['cyborg', 'android', 'logical_core'], ['organic_pure', 'ancient_folk_pure', 'plant_pure'])
};

const creatureElementTaxonomyFit: Record<string, CreatureTaxonomyFit> = {
  el_fire: { unlisted: 'fusion', strong: ['energy_void', 'demonic', 'draconic'], usable: ['avian', 'mineral_elemental'], fusion: ['divine_spirit'], weak: ['aquatic', 'plant_fungal'], exclude: [] },
  el_water: { unlisted: 'fusion', strong: ['aquatic', 'soft_body'], usable: ['energy_void', 'divine_spirit'], fusion: ['draconic', 'plant_fungal'], weak: ['machine', 'mineral_elemental'], exclude: [] },
  el_earth: { unlisted: 'fusion', strong: ['mineral_elemental', 'plant_fungal'], usable: ['reptilian', 'mammal'], fusion: ['draconic', 'demonic'], weak: ['avian', 'soft_body'], exclude: [] },
  el_air: { unlisted: 'fusion', strong: ['avian', 'energy_void'], usable: ['divine_spirit', 'draconic'], fusion: ['eldritch', 'machine'], weak: ['mineral_elemental'], exclude: [] },
  el_ice: { unlisted: 'fusion', strong: ['mineral_elemental', 'energy_void'], usable: ['undead', 'draconic', 'aquatic'], fusion: ['mammal'], weak: ['plant_fungal', 'insectoid'], exclude: [] },
  el_lightning: { unlisted: 'fusion', strong: ['energy_void', 'machine'], usable: ['avian', 'draconic', 'synthetic'], fusion: ['demonic', 'divine_spirit'], weak: ['plant_fungal'], exclude: [] },

  el_gold: { unlisted: 'fusion', strong: ['mineral_elemental', 'divine_spirit'], usable: ['machine'], fusion: ['draconic', 'demonic'], weak: ['soft_body', 'plant_fungal'], exclude: [] },
  el_chrome: { unlisted: 'fusion', strong: ['machine', 'synthetic', 'mineral_elemental'], usable: [], fusion: ['draconic'], weak: ['mammal', 'plant_fungal'], exclude: [] },
  el_rust: { unlisted: 'fusion', strong: ['machine', 'mineral_elemental'], usable: ['undead'], fusion: ['demonic', 'synthetic'], weak: ['divine_spirit', 'aquatic'], exclude: [] },
  el_crystal: { unlisted: 'fusion', strong: ['mineral_elemental'], usable: ['divine_spirit', 'energy_void'], fusion: ['draconic', 'machine'], weak: ['mammal', 'soft_body'], exclude: [] },
  el_obsidian: { unlisted: 'fusion', strong: ['mineral_elemental', 'demonic'], usable: ['energy_void', 'draconic'], fusion: ['eldritch'], weak: ['plant_fungal', 'mammal'], exclude: [] },
  el_magma: { unlisted: 'fusion', strong: ['mineral_elemental', 'energy_void', 'draconic'], usable: ['demonic'], fusion: ['reptilian'], weak: ['aquatic', 'plant_fungal'], exclude: [] },

  el_flesh: { unlisted: 'usable', strong: ['mammal', 'chimera'], usable: ['demonic', 'undead', 'soft_body', 'synthetic'], fusion: ['eldritch', 'swarm_parasitic'], weak: ['machine', 'mineral_elemental'], exclude: [] },
  el_bone: { unlisted: 'fusion', strong: ['undead'], usable: ['mammal', 'demonic', 'mineral_elemental'], fusion: ['divine_spirit'], weak: ['soft_body', 'machine'], exclude: [] },
  el_blood: { unlisted: 'usable', strong: ['mammal', 'undead', 'demonic'], usable: ['chimera', 'swarm_parasitic'], fusion: ['eldritch'], weak: ['machine', 'mineral_elemental'], exclude: [] },
  el_slime: { unlisted: 'fusion', strong: ['soft_body', 'aquatic'], usable: ['plant_fungal', 'eldritch'], fusion: ['demonic', 'synthetic'], weak: ['mineral_elemental', 'machine'], exclude: [] },
  el_wood: { unlisted: 'fusion', strong: ['plant_fungal'], usable: ['mineral_elemental', 'divine_spirit'], fusion: ['demonic'], weak: ['machine', 'aquatic'], exclude: [] },
  el_chitin: { unlisted: 'fusion', strong: ['insectoid'], usable: ['swarm_parasitic', 'aquatic'], fusion: ['machine', 'demonic'], weak: ['mammal', 'soft_body'], exclude: [] },

  el_neon: { unlisted: 'fusion', strong: ['machine', 'synthetic', 'energy_void'], usable: ['divine_spirit'], fusion: ['demonic', 'eldritch'], weak: ['mammal', 'plant_fungal'], exclude: [] },
  el_plasma: { unlisted: 'fusion', strong: ['energy_void'], usable: ['machine', 'synthetic', 'divine_spirit'], fusion: ['eldritch', 'demonic'], weak: ['mammal', 'plant_fungal'], exclude: [] },
  el_holy_light: { unlisted: 'fusion', strong: ['divine_spirit', 'energy_void'], usable: ['avian', 'draconic'], fusion: ['eldritch'], weak: ['undead', 'demonic'], exclude: [] },
  el_laser: { unlisted: 'fusion', strong: ['machine', 'synthetic', 'energy_void'], usable: [], fusion: ['divine_spirit', 'draconic'], weak: ['mammal', 'plant_fungal'], exclude: [] },
  el_biolume: { unlisted: 'usable', strong: ['aquatic', 'plant_fungal', 'soft_body'], usable: ['insectoid', 'energy_void'], fusion: ['eldritch', 'divine_spirit'], weak: ['machine'], exclude: [] },
  el_fire_blue: { unlisted: 'fusion', strong: ['undead', 'energy_void'], usable: ['demonic', 'divine_spirit'], fusion: ['eldritch'], weak: ['aquatic', 'plant_fungal'], exclude: [] },

  el_shadow: { unlisted: 'fusion', strong: ['energy_void', 'undead', 'demonic'], usable: ['eldritch'], fusion: ['machine'], weak: ['divine_spirit', 'plant_fungal'], exclude: [] },
  el_void: { unlisted: 'fusion', strong: ['energy_void', 'eldritch'], usable: ['demonic', 'undead'], fusion: ['divine_spirit'], weak: ['mammal', 'plant_fungal'], exclude: [] },
  el_ink: { unlisted: 'fusion', strong: ['energy_void', 'eldritch'], usable: ['demonic', 'divine_spirit'], fusion: ['soft_body', 'aquatic'], weak: ['machine', 'mammal'], exclude: [] },
  el_smoke: { unlisted: 'fusion', strong: ['energy_void', 'undead'], usable: ['demonic', 'divine_spirit'], fusion: ['avian', 'eldritch'], weak: ['mineral_elemental', 'aquatic'], exclude: [] },
  el_oil: { unlisted: 'fusion', strong: ['soft_body', 'machine', 'energy_void'], usable: ['demonic', 'aquatic'], fusion: ['eldritch', 'plant_fungal'], weak: ['divine_spirit'], exclude: [] },
  el_ash: { unlisted: 'fusion', strong: ['undead', 'energy_void'], usable: ['demonic', 'avian', 'mineral_elemental'], fusion: ['plant_fungal'], weak: ['aquatic', 'soft_body'], exclude: [] },

  el_glitch: { unlisted: 'fusion', strong: ['machine', 'synthetic', 'energy_void'], usable: ['eldritch'], fusion: ['swarm_parasitic', 'undead'], weak: ['mammal', 'plant_fungal'], exclude: [] },
  el_wireframe: { unlisted: 'fusion', strong: ['machine', 'synthetic', 'energy_void'], usable: ['mineral_elemental'], fusion: ['divine_spirit', 'eldritch'], weak: ['mammal', 'soft_body'], exclude: [] },
  el_pixel: { unlisted: 'fusion', strong: ['machine', 'synthetic', 'energy_void'], usable: [], fusion: ['eldritch', 'swarm_parasitic'], weak: ['mammal', 'plant_fungal'], exclude: [] },
  el_hologram: { unlisted: 'fusion', strong: ['energy_void', 'synthetic', 'machine'], usable: ['divine_spirit'], fusion: ['undead', 'eldritch'], weak: ['mammal', 'mineral_elemental'], exclude: [] },
  el_nanite: { unlisted: 'fusion', strong: ['machine', 'synthetic', 'swarm_parasitic'], usable: ['energy_void'], fusion: ['insectoid', 'eldritch'], weak: ['mammal', 'plant_fungal'], exclude: [] },
  el_circuit: { unlisted: 'fusion', strong: ['machine', 'synthetic'], usable: ['energy_void'], fusion: ['demonic', 'divine_spirit'], weak: ['mammal', 'plant_fungal'], exclude: [] }
};

const withCreatureElementMeta = (item: LibraryItemDef): LibraryItemDef => ({
  ...item,
  ...creatureElementMeta[item.id],
  creatureTaxonomyFit: creatureElementTaxonomyFit[item.id]
});

// 3. 元素属性 (Elemental Attribute) - Reduced to 36 Items
export const AES_CREATURE_ELEMENT: LibraryItemDef[] = ([
  // --- A. 古典元素 (Classical - 6) ---
  { id: "el_fire", name: "烈焰 (Fire)", group: "A. 古典元素", def: "Raging orange and yellow flames, heat distortion, ash." },
  { id: "el_water", name: "深水 (Water)", group: "A. 古典元素", def: "Dense dark blue liquid, bubbles, flowing texture." },
  { id: "el_earth", name: "岩石 (Earth)", group: "A. 古典元素", def: "Cracked stone, mud, moss, solid weight." },
  { id: "el_air", name: "风暴 (Air)", group: "A. 古典元素", def: "Swirling currents, white mist, vacuum pockets, transparency." },
  { id: "el_ice", name: "冰晶 (Ice)", group: "A. 古典元素", def: "Translucent blue frost, sharp icicles, cold vapor." },
  { id: "el_lightning", name: "雷霆 (Lightning)", group: "A. 古典元素", def: "Arcing blue and white electricity, sparks, ozone." },

  // --- B. 金属与矿物 (Metal & Mineral - 6) ---
  { id: "el_gold", name: "纯金 (Gold)", group: "B. 金属矿物", def: "Shining 24k liquid gold, reflective, divine." },
  { id: "el_chrome", name: "镀铬 (Chrome)", group: "B. 金属矿物", def: "Mirror finish silver, cybernetic, cold." },
  { id: "el_rust", name: "生锈 (Rust)", group: "B. 金属矿物", def: "Corroded orange iron, decay, industrial waste." },
  { id: "el_crystal", name: "水晶 (Crystal)", group: "B. 金属矿物", def: "Clear faceted gems, rainbow refraction, sharp." },
  { id: "el_obsidian", name: "黑曜石 (Obsidian)", group: "B. 金属矿物", def: "Glossy black volcanic glass, sharp edges." },
  { id: "el_magma", name: "熔岩 (Magma)", group: "B. 金属矿物", def: "Glowing red molten rock, cooling black crust." },

  // --- C. 生物与血肉 (Bio & Flesh - 6) ---
  { id: "el_flesh", name: "血肉 (Flesh)", group: "C. 生物血肉", def: "Raw muscle, pulsing veins, organic texture." },
  { id: "el_bone", name: "白骨 (Bone)", group: "C. 生物血肉", def: "Exposed skeletal structure, ivory white, dry." },
  { id: "el_blood", name: "鲜血 (Blood)", group: "C. 生物血肉", def: "Crimson vital fluid, dripping, wet." },
  { id: "el_slime", name: "粘液 (Slime)", group: "C. 生物血肉", def: "Translucent green goo, dripping, sticky." },
  { id: "el_wood", name: "枯木 (Wood)", group: "C. 生物血肉", def: "Twisted roots, bark texture, nature growth." },
  { id: "el_chitin", name: "甲壳 (Chitin)", group: "C. 生物血肉", def: "Shiny insectoid shell, armored, iridescent." },

  // --- D. 能量与光 (Energy & Light - 6) ---
  { id: "el_neon", name: "霓虹 (Neon)", group: "D. 能量光效", def: "Saturated gas light, cyber pink/blue, glowing tubes." },
  { id: "el_plasma", name: "等离子 (Plasma)", group: "D. 能量光效", def: "Superheated ionized gas, purple energy ball." },
  { id: "el_holy_light", name: "圣光 (Holy Light)", group: "D. 能量光效", def: "Blinding white rays, golden aura, divine." },
  { id: "el_laser", name: "激光 (Laser)", group: "D. 能量光效", def: "Coherent red beam, sharp, cutting, tech." },
  { id: "el_biolume", name: "生物荧光 (Biolume)", group: "D. 能量光效", def: "Organic blue-green glow, deep sea, avatar style." },
  { id: "el_fire_blue", name: "鬼火 (Blue Fire)", group: "D. 能量光效", def: "Cold spiritual flame, soul energy, wisp." },

  // --- E. 暗影与虚空 (Dark & Void - 6) ---
  { id: "el_shadow", name: "阴影 (Shadow)", group: "E. 暗影虚空", def: "Solidified darkness, smoke-like, formless." },
  { id: "el_void", name: "虚空 (Void)", group: "E. 暗影虚空", def: "Absolute vantablack, absorbing light, nothingness." },
  { id: "el_ink", name: "水墨 (Ink)", group: "E. 暗影虚空", def: "Swirling black liquid in air, calligraphy style." },
  { id: "el_smoke", name: "烟雾 (Smoke)", group: "E. 暗影虚空", def: "Grey wispy clouds, ethereal, fading." },
  { id: "el_oil", name: "重油 (Oil)", group: "E. 暗影虚空", def: "Thick black viscous liquid, iridescent sheen." },
  { id: "el_ash", name: "灰烬 (Ash)", group: "E. 暗影虚空", def: "Grey particulate flakes, falling like snow, dry." },

  // --- F. 科技与故障 (Tech & Glitch - 6) ---
  { id: "el_glitch", name: "故障 (Glitch)", group: "F. 科技故障", def: "Pixelated tearing, RGB shift, digital noise." },
  { id: "el_wireframe", name: "线框 (Wireframe)", group: "F. 科技故障", def: "Glowing green grid lines, blueprint style." },
  { id: "el_pixel", name: "像素 (Pixel)", group: "F. 科技故障", def: "Blocky 8-bit cubes, retro digital." },
  { id: "el_hologram", name: "全息 (Hologram)", group: "F. 科技故障", def: "Flickering blue light projection, scanlines." },
  { id: "el_nanite", name: "纳米云 (Nanite)", group: "F. 科技故障", def: "Swarm of micro-machines, black dust morphing." },
  { id: "el_circuit", name: "电路 (Circuit)", group: "F. 科技故障", def: "Gold and green board traces, glowing paths." }
] as LibraryItemDef[]).map(withCreatureElementMeta);
