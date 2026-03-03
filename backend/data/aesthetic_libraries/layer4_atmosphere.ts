

import { LibraryItemDef } from '../../types';

// =================================================================
// 1. 天气/大气 (ATMOSPHERE) - 100 Items
// Merged Weather (60) + Air Medium (40) into one comprehensive category.
// Format: name includes English description sentence. def is empty.
// =================================================================

export const AES_ATMOSPHERE: LibraryItemDef[] = [
  // --- Group A. 阳光与晴朗 (Sunny & Clear) - 15 ---
  { id: "atm_clear_sky", name: "万里无云 (Under a pristine clear blue sky with infinite visibility)", group: "A. 阳光晴朗", def: "" },
  { id: "atm_sunny", name: "明媚阳光 (Bathed in bright sunshine with sharp shadows)", group: "A. 阳光晴朗", def: "" },
  { id: "atm_golden_hour", name: "黄金时刻 (During the golden hour with warm, low-angle sunlight)", group: "A. 阳光晴朗", def: "" },
  { id: "atm_blue_hour", name: "蓝调时刻 (During the blue hour twilight with cool ambient light)", group: "A. 阳光晴朗", def: "" },
  { id: "atm_high_noon", name: "正午烈日 (Under the harsh overhead sun of high noon)", group: "A. 阳光晴朗", def: "" },
  { id: "atm_scorching", name: "灼热暴晒 (Under a scorching sun with heat waves shimmering)", group: "A. 阳光晴朗", def: "" },
  { id: "atm_morning_glow", name: "清晨朝霞 (In the soft glow of early morning sunrise)", group: "A. 阳光晴朗", def: "" },
  { id: "atm_epic_sunset", name: "壮丽日落 (Under an epic sunset painting the sky red and orange)", group: "A. 阳光晴朗", def: "" },
  { id: "atm_dappled", name: "林间斑驳 (Under dappled sunlight filtering through trees)", group: "A. 阳光晴朗", def: "" },
  { id: "atm_lens_flare", name: "逆光眩光 (Facing intense backlighting causing heavy lens flares)", group: "A. 阳光晴朗", def: "" },
  { id: "atm_afternoon_haze", name: "午后慵懒 (In the lazy haze of a warm afternoon)", group: "A. 阳光晴朗", def: "" },
  { id: "atm_tropical_sun", name: "热带阳光 (Under the intense, vertical tropical sun)", group: "A. 阳光晴朗", def: "" },
  { id: "atm_winter_sun", name: "冬日暖阳 (Under the pale, weak sun of a winter day)", group: "A. 阳光晴朗", def: "" },
  { id: "atm_desert_glare", name: "沙漠强光 (In the blinding glare of the desert sun)", group: "A. 阳光晴朗", def: "" },
  { id: "atm_alpine_clear", name: "高山通透 (In the crystal clear, thin air of high altitudes)", group: "A. 阳光晴朗", def: "" },

  // --- Group B. 多云与阴霾 (Cloudy & Overcast) - 15 ---
  { id: "atm_partly_cloudy", name: "晴间多云 (Under a partly cloudy sky with drifting shadows)", group: "B. 多云阴霾", def: "" },
  { id: "atm_overcast", name: "全阴天 (Under a flat, white overcast sky)", group: "B. 多云阴霾", def: "" },
  { id: "atm_gloom", name: "阴郁灰暗 (In a gloomy, dark atmosphere lacking direct light)", group: "B. 多云阴霾", def: "" },
  { id: "atm_cumulus", name: "积雨云 (Under massive, towering cumulus clouds)", group: "B. 多云阴霾", def: "" },
  { id: "atm_broken_clouds", name: "破碎云层 (Under a sky of broken, fast-moving clouds)", group: "B. 多云阴霾", def: "" },
  { id: "atm_storm_clouds", name: "风暴前夕 (Under ominous, dark storm clouds gathering)", group: "B. 多云阴霾", def: "" },
  { id: "atm_mammatus", name: "乳状云 (Under a strange sky filled with mammatus clouds)", group: "B. 多云阴霾", def: "" },
  { id: "atm_stratus", name: "层云覆盖 (Under a blanket of low-hanging stratus clouds)", group: "B. 多云阴霾", def: "" },
  { id: "atm_silver_lining", name: "镶金云边 (With sunlight bursting from behind dark clouds)", group: "B. 多云阴霾", def: "" },
  { id: "atm_low_ceiling", name: "低压云层 (Under a claustrophobic low cloud ceiling)", group: "B. 多云阴霾", def: "" },
  { id: "atm_heavy_sky", name: "沉重天空 (Under a heavy sky that feels like it will fall)", group: "B. 多云阴霾", def: "" },
  { id: "atm_grey_day", name: "死灰天 (On a lifeless, featureless grey day)", group: "B. 多云阴霾", def: "" },
  { id: "atm_rolling_clouds", name: "翻滚云海 (Under a turbulent sea of rolling clouds)", group: "B. 多云阴霾", def: "" },
  { id: "atm_sunset_clouds", name: "火烧云 (Under clouds ignited by the setting sun)", group: "B. 多云阴霾", def: "" },
  { id: "atm_passing_storm", name: "过境风暴 (As a storm passes, leaving dramatic clouds)", group: "B. 多云阴霾", def: "" },

  // --- Group C. 降雨与湿润 (Rain & Wet) - 15 ---
  { id: "atm_drizzle", name: "毛毛细雨 (In a light, misty drizzle)", group: "C. 降雨湿润", def: "" },
  { id: "atm_light_rain", name: "小雨 (Under a gentle, steady rain)", group: "C. 降雨湿润", def: "" },
  { id: "atm_shower", name: "阵雨 (Caught in a sudden rain shower)", group: "C. 降雨湿润", def: "" },
  { id: "atm_heavy_rain", name: "大雨 (In a heavy downpour soaking everything)", group: "C. 降雨湿润", def: "" },
  { id: "atm_torrential", name: "暴雨如注 (Under a torrential, blinding rainstorm)", group: "C. 降雨湿润", def: "" },
  { id: "atm_thunderstorm", name: "雷雨交加 (Amidst a thunderstorm with lightning flashes)", group: "C. 降雨湿润", def: "" },
  { id: "atm_monsoon", name: "季风雨 (In the relentless rain of a monsoon)", group: "C. 降雨湿润", def: "" },
  { id: "atm_acid_rain", name: "酸雨 (Under corrosive, greenish acid rain)", group: "C. 降雨湿润", def: "" },
  { id: "atm_freezing_rain", name: "冻雨 (In a freezing rain coating everything in ice)", group: "C. 降雨湿润", def: "" },
  { id: "atm_post_rain", name: "雨后初晴 (In the fresh, reflective atmosphere after rain)", group: "C. 降雨湿润", def: "" },
  { id: "atm_humid", name: "闷热潮湿 (In thick, sultry, humid air)", group: "C. 降雨湿润", def: "" },
  { id: "atm_damp", name: "阴冷潮湿 (In a damp, cold, moldy environment)", group: "C. 降雨湿润", def: "" },
  { id: "atm_steam_rising", name: "蒸汽升腾 (With hot steam rising from the wet ground)", group: "C. 降雨湿润", def: "" },
  { id: "atm_mist_sea", name: "海面水汽 (Surrounded by salty sea spray and mist)", group: "C. 降雨湿润", def: "" },
  { id: "atm_condensation", name: "冷凝湿气 (In an atmosphere heavy with condensation)", group: "C. 降雨湿润", def: "" },

  // --- Group D. 冰雪与寒冷 (Snow & Cold) - 15 ---
  { id: "atm_light_snow", name: "飘雪 (With light snow gently falling)", group: "D. 冰雪寒冷", def: "" },
  { id: "atm_heavy_snow", name: "大雪 (Under a heavy snowfall blanketing the scene)", group: "D. 冰雪寒冷", def: "" },
  { id: "atm_blizzard", name: "暴风雪 (Caught in a blinding whiteout blizzard)", group: "D. 冰雪寒冷", def: "" },
  { id: "atm_sleet", name: "雨夹雪 (In a miserable mix of rain and sleet)", group: "D. 冰雪寒冷", def: "" },
  { id: "atm_hail", name: "冰雹 (Under a violent hailstorm)", group: "D. 冰雪寒冷", def: "" },
  { id: "atm_snow_storm", name: "雪暴 (In a turbulent snow storm)", group: "D. 冰雪寒冷", def: "" },
  { id: "atm_flurries", name: "阵雪 (With occasional snow flurries)", group: "D. 冰雪寒冷", def: "" },
  { id: "atm_ice_storm", name: "冰暴 (After an ice storm, everything glazed)", group: "D. 冰雪寒冷", def: "" },
  { id: "atm_thaw", name: "融雪 (During the wet, slushy thaw)", group: "D. 冰雪寒冷", def: "" },
  { id: "atm_diamond_dust", name: "钻石尘 (With glittering diamond dust in the air)", group: "D. 冰雪寒冷", def: "" },
  { id: "atm_frosty", name: "霜冻 (In a frosty, biting cold atmosphere)", group: "D. 冰雪寒冷", def: "" },
  { id: "atm_arctic", name: "极地严寒 (In the extreme cold of the arctic)", group: "D. 冰雪寒冷", def: "" },
  { id: "atm_fog_ice", name: "冰雾 (Enveloped in freezing ice fog)", group: "D. 冰雪寒冷", def: "" },
  { id: "atm_crisp", name: "清冽寒气 (In crisp, sharp, cold air)", group: "D. 冰雪寒冷", def: "" },
  { id: "atm_permafrost", name: "永冻 (On a landscape of eternal permafrost)", group: "D. 冰雪寒冷", def: "" },

  // --- Group E. 雾气与光路 (Fog & Light) - 20 ---
  { id: "atm_mist_light", name: "轻薄晨雾 (In a light morning mist)", group: "E. 雾气光路", def: "" },
  { id: "atm_fog_dense", name: "浓重大雾 (Lost in dense, white fog)", group: "E. 雾气光路", def: "" },
  { id: "atm_haze_blue", name: "远山蓝霭 (With distant blue atmospheric haze)", group: "E. 雾气光路", def: "" },
  { id: "atm_smog_urban", name: "城市烟霾 (In thick, yellow urban smog)", group: "E. 雾气光路", def: "" },
  { id: "atm_smoke_thick", name: "浓烈黑烟 (Choked by thick black smoke)", group: "E. 雾气光路", def: "" },
  { id: "atm_fog_ground", name: "贴地低雾 (With low-lying ground fog)", group: "E. 雾气光路", def: "" },
  { id: "atm_god_rays", name: "耶稣光 (Illuminated by distinct God Rays)", group: "E. 雾气光路", def: "" },
  { id: "atm_shafts_window", name: "窗户光柱 (Lit by dusty light shafts from a window)", group: "E. 雾气光路", def: "" },
  { id: "atm_volumetric", name: "体积雾光 (Filled with volumetric lighting)", group: "E. 雾气光路", def: "" },
  { id: "atm_spotlight", name: "聚光灯束 (Caught in a sharp spotlight beam)", group: "E. 雾气光路", def: "" },
  { id: "atm_laser_grid", name: "激光网格 (Crossed by visible laser beams)", group: "E. 雾气光路", def: "" },
  { id: "atm_tyndall", name: "丁达尔效应 (Showing the Tyndall effect)", group: "E. 雾气光路", def: "" },
  { id: "atm_soft_bloom", name: "柔光晕染 (With a soft, blooming glow)", group: "E. 雾气光路", def: "" },
  { id: "atm_dream_diff", name: "梦幻柔焦 (In a dreamlike, diffused atmosphere)", group: "E. 雾气光路", def: "" },
  { id: "atm_ethereal", name: "空灵发光 (With an ethereal, self-luminous quality)", group: "E. 雾气光路", def: "" },
  { id: "atm_silhouette", name: "背光剪影 (Backlit in a hazy silhouette)", group: "E. 雾气光路", def: "" },
  { id: "atm_projector", name: "投影光锥 (In the dusty beam of a projector)", group: "E. 雾气光路", def: "" },
  { id: "atm_lighthouse", name: "灯塔扫射 (Swept by a lighthouse beam)", group: "E. 雾气光路", def: "" },
  { id: "atm_aerial_persp", name: "空气透视 (With strong aerial perspective)", group: "E. 雾气光路", def: "" },
  { id: "atm_halo", name: "光晕 (Surrounded by glowing halos)", group: "E. 雾气光路", def: "" },

  // --- Group F. 异质与风暴 (Exotic & Storm) - 20 ---
  { id: "atm_windy", name: "大风 (In strong, blustery winds)", group: "F. 异质风暴", def: "" },
  { id: "atm_gale", name: "烈风 (Battered by gale-force winds)", group: "F. 异质风暴", def: "" },
  { id: "atm_sandstorm", name: "沙尘暴 (Sandstorm)", group: "F. 异质风暴", def: "" },
  { id: "atm_dust_devil", name: "尘卷风 (Dust Devil)", group: "F. 异质风暴", def: "" },
  { id: "atm_tornado", name: "龙卷风 (Tornado)", group: "F. 异质风暴", def: "" },
  { id: "atm_hurricane", name: "飓风 (Hurricane)", group: "F. 异质风暴", def: "" },
  { id: "atm_eye_storm", name: "风暴眼 (Eye of the Storm)", group: "F. 异质风暴", def: "" },
  { id: "atm_aurora", name: "极光 (Under shimmering aurora borealis)", group: "F. 异质风暴", def: "" },
  { id: "atm_eclipse", name: "日全食 (During a dark solar eclipse)", group: "F. 异质风暴", def: "" },
  { id: "atm_blood_moon", name: "血月 (Under a red blood moon)", group: "F. 异质风暴", def: "" },
  { id: "atm_nebula_sky", name: "星云天空 (Under a cosmic nebula sky)", group: "F. 异质风暴", def: "" },
  { id: "atm_meteor", name: "流星雨 (Under a shower of meteors)", group: "F. 异质风暴", def: "" },
  { id: "atm_ash_fall", name: "火山落灰 (Amidst falling volcanic ash)", group: "F. 异质风暴", def: "" },
  { id: "atm_black_hole", name: "黑洞天幕 (Under a black hole sky)", group: "F. 异质风暴", def: "" },
  { id: "atm_toxic_gas", name: "毒气 (In green, toxic gas)", group: "F. 异质风暴", def: "" },
  { id: "atm_spore_mist", name: "孢子迷雾 (In a thick spore mist)", group: "F. 异质风暴", def: "" },
  { id: "atm_vacuum", name: "太空真空 (In the vacuum of space)", group: "F. 异质风暴", def: "" },
  { id: "atm_plasma", name: "等离子场 (In a glowing plasma field)", group: "F. 异质风暴", def: "" },
  { id: "atm_cyber_grid", name: "赛博网格 (In a digital cyber grid)", group: "F. 异质风暴", def: "" },
  { id: "atm_spirit", name: "灵界气息 (In a warped spirit realm)", group: "F. 异质风暴", def: "" },
  { id: "atm_radioactive", name: "辐射空气 (In grainy radioactive air)", group: "F. 异质风暴", def: "" },
  { id: "atm_liquid_air", name: "液态空气 (In viscous liquid air)", group: "F. 异质风暴", def: "" }
];

// =================================================================
// 2. 粒子 (PARTICLES) - 80 Items
// Formerly AES_AIR_PARTICLES. Renamed and expanded.
// =================================================================

export const AES_PARTICLES: LibraryItemDef[] = [
  // --- Group A. 自然微尘 (Natural Dust) ---
  { id: "par_dust_motes", name: "丁达尔微尘 (Golden dust motes dancing in shafts of volumetric light)", group: "A. 自然微尘", def: "" },
  { id: "par_pollen", name: "浮光花粉 (Glowing pollen particles drifting in the warm air)", group: "A. 自然微尘", def: "" },
  { id: "par_sand_grains", name: "流金细沙 (Fine golden sand grains blowing in the desert wind)", group: "A. 自然微尘", def: "" },
  { id: "par_cotton", name: "漂浮棉絮 (Soft white cotton fluff floating gently in the breeze)", group: "A. 自然微尘", def: "" },
  { id: "par_dandelion", name: "蒲公英种子 (Dandelion seeds carrying wishes on the wind)", group: "A. 自然微尘", def: "" },
  { id: "par_snow_dust", name: "钻石雪尘 (Diamond dust ice crystals sparkling in cold air)", group: "A. 自然微尘", def: "" },
  { id: "par_bamboo_leaf", name: "竹叶飘落 (Green bamboo leaves falling slowly in a zen garden)", group: "A. 自然微尘", def: "" },
  { id: "par_fog_wisp", name: "流云薄雾 (Wisps of low fog curling around the ground)", group: "A. 自然微尘", def: "" },
  { id: "par_sun_specks", name: "阳光碎屑 (Shimmering specks of light caught in the sunbeam)", group: "A. 自然微尘", def: "" },
  { id: "par_dry_leaves", name: "枯叶碎屑 (Fragments of dry autumn leaves swirling)", group: "A. 自然微尘", def: "" },

  // --- Group B. 燃烧与余烬 (Combustion) ---
  { id: "par_embers", name: "飞舞余烬 (Burning orange embers rising into the night sky)", group: "B. 燃烧余烬", def: "" },
  { id: "par_ash", name: "火山灰雪 (Grey volcanic ash falling softly like tragic snow)", group: "B. 燃烧余烬", def: "" },
  { id: "par_sparks", name: "工业火花 (Bright welding sparks cascading in a shower of light)", group: "B. 燃烧余烬", def: "" },
  { id: "par_smoke_swirl", name: "缭绕烟丝 (Elegant swirls of incense smoke twisting in the air)", group: "B. 燃烧余烬", def: "" },
  { id: "par_cinders", name: "红热炭屑 (Glowing red cinders drifting from a dying fire)", group: "B. 燃烧余烬", def: "" },
  { id: "par_fire_petals", name: "火焰花瓣 (Fragments of fire shaping into ephemeral petals)", group: "B. 燃烧余烬", def: "" },
  { id: "par_candle_smoke", name: "烛熄青烟 (A single thin line of blue smoke from an extinguished candle)", group: "B. 燃烧余烬", def: "" },
  { id: "par_charcoal_dust", name: "炭黑粉尘 (Fine black charcoal dust suspended in the air)", group: "B. 燃烧余烬", def: "" },
  { id: "par_explosion_debris", name: "爆裂碎片 (Debris from an explosion frozen in time)", group: "B. 燃烧余烬", def: "" },
  { id: "par_nebula_gas", name: "星云气体 (Colorful cosmic gas clouds forming abstract shapes)", group: "B. 燃烧余烬", def: "" },

  // --- Group C. 液体与光泽 (Liquid & Prismatic) ---
  { id: "par_rain_suspension", name: "悬浮雨滴 (Raindrops frozen in mid-air reflecting the world)", group: "C. 液体光泽", def: "" },
  { id: "par_mist_spray", name: "细密水雾 (Fine mist spray creating a rainbow prism effect)", group: "C. 液体光泽", def: "" },
  { id: "par_sea_foam", name: "海浪泡沫 (White sea foam blowing in the salty wind)", group: "C. 液体光泽", def: "" },
  { id: "par_bubbles", name: "虹彩气泡 (Iridescent soap bubbles floating and popping)", group: "C. 液体光泽", def: "" },
  { id: "par_dew_drops", name: "清晨露珠 (Morning dew drops clinging to invisible spiderwebs)", group: "C. 液体光泽", def: "" },
  { id: "par_underwater_bubbles", name: "深海气泡 (Champagne-like bubbles rising in deep blue water)", group: "C. 液体光泽", def: "" },
  { id: "par_ink_cloud", name: "水墨晕染 (Black ink drop dispersing elegantly in clear water)", group: "C. 液体光泽", def: "" },
  { id: "par_liquid_gold", name: "液态金滴 (Molten gold droplets suspended in zero gravity)", group: "C. 液体光泽", def: "" },
  { id: "par_condensation", name: "冷凝水气 (Cold condensation mist clinging to glass)", group: "C. 液体光泽", def: "" },
  { id: "par_prism_light", name: "棱镜光斑 (Rainbow light refractions scattered across the scene)", group: "C. 液体光泽", def: "" },

  // --- Group D. 生物与幻想 (Bio & Ethereal) ---
  { id: "par_feathers", name: "纯白羽绒 (Tiny white feathers drifting down from angel wings)", group: "D. 生物幻想", def: "" },
  { id: "par_biolume_spores", name: "生物荧光孢子 (Blue bioluminescent spores floating in a dark forest)", group: "D. 生物幻想", def: "" },
  { id: "par_magic_glitter", name: "魔法金粉 (Magical glitter dust sparkling with fairy energy)", group: "D. 生物幻想", def: "" },
  { id: "par_spirit_orbs", name: "灵体光球 (Soft focus spirit orbs drifting in a haunted room)", group: "D. 生物幻想", def: "" },
  { id: "par_petals_rose", name: "红玫瑰瓣 (Deep red rose petals falling in slow motion)", group: "D. 生物幻想", def: "" },
  { id: "par_seeds_floating", name: "圣树种子 (Floating white seeds like jellyfish in the air)", group: "D. 生物幻想", def: "" },
  { id: "par_galaxy_dust", name: "星河尘埃 (Cosmic dust sparkling like distant stars)", group: "D. 生物幻想", def: "" },
  { id: "par_fireflies", name: "萤火虫群 (Green fireflies blinking in the summer night)", group: "D. 生物幻想", def: "" },
  { id: "par_energy_motes", name: "能量微粒 (Glowing particles of pure energy rising upward)", group: "D. 生物幻想", def: "" },
  { id: "par_dream_haze", name: "梦境光晕 (Soft pastel haze creating a dreamlike atmosphere)", group: "D. 生物幻想", def: "" },

  // --- Group E. 科技与碎片 (Tech & Abstract) ---
  { id: "par_glitch_pixels", name: "故障像素 (Colorful digital glitch pixels tearing the reality)", group: "E. 科技碎片", def: "" },
  { id: "par_binary_rain", name: "二进制雨 (Green binary code numbers falling like rain)", group: "E. 科技碎片", def: "" },
  { id: "par_glass_shards", name: "碎裂玻璃 (Sharp glass shards suspended in an explosion)", group: "E. 科技碎片", def: "" },
  { id: "par_confetti_gold", name: "金色礼花 (Golden confetti strips raining down in celebration)", group: "E. 科技碎片", def: "" },
  { id: "par_holo_bits", name: "全息碎片 (Blue holographic data fragments dissolving)", group: "E. 科技碎片", def: "" },
  { id: "par_sparkle_bokeh", name: "闪烁散景 (Out-of-focus bokeh circles shimmering in background)", group: "E. 科技碎片", def: "" },
  { id: "par_paper_scraps", name: "旧纸页 (Torn pieces of vintage paper blowing in wind)", group: "E. 科技碎片", def: "" },
  { id: "par_metal_shavings", name: "金属切屑 (Shiny metal shavings reflecting industrial light)", group: "E. 科技碎片", def: "" },
  { id: "par_neon_dust", name: "霓虹尘埃 (Dust particles glowing with cyberpunk neon colors)", group: "E. 科技碎片", def: "" },
  { id: "par_geometric_shapes", name: "漂浮几何 (Abstract geometric shapes floating in zero gravity)", group: "E. 科技碎片", def: "" }
];
