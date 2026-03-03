

import { LibraryItemDef } from '../../types';

// =============================================================================
// LAYER 1.2: 眼 (构图与特效 - 可变模块)
// =============================================================================

// --- 0. 构图类别 (IMAGE CATEGORY) ---
export const AES_IMAGE_FOCUS: LibraryItemDef[] = [
  { id: "focus_portrait", name: "肖像构图 (Portrait)", group: "A. 核心分类", def: "" },
  { id: "focus_landscape", name: "风光构图 (Landscape)", group: "A. 核心分类", def: "" },
  { id: "focus_still_life", name: "静物构图 (Still Life)", group: "A. 核心分类", def: "" },
  { id: "focus_architecture", name: "建筑构图 (Architecture)", group: "A. 核心分类", def: "" },
  { id: "focus_fashion", name: "时尚大片 (Fashion Editorial)", group: "A. 核心分类", def: "" },
  { id: "focus_street", name: "街头纪实 (Street Photography)", group: "A. 核心分类", def: "" },
  { id: "focus_cinematic", name: "电影叙事 (Cinematic Narrative)", group: "A. 核心分类", def: "" },
  { id: "focus_birdseye", name: "鸟瞰/航拍 (Bird's Eye)", group: "A. 核心分类", def: "" },
  { id: "focus_macro", name: "极致微距 (Extreme Macro)", group: "A. 核心分类", def: "" },
  { id: "focus_abstract", name: "抽象表现 (Abstract)", group: "A. 核心分类", def: "" }
];

// --- 1. 景别 (SHOT SIZE) ---
export const AES_SHOT_SIZE: LibraryItemDef[] = [
  { id: "shot_macro", name: "微距特写 (Macro)", def: "" },
  { id: "shot_ecu", name: "极特写 (Extreme Close-Up)", def: "" },
  { id: "shot_cu", name: "特写 (Close-Up)", def: "" },
  { id: "shot_mcu", name: "中特写 (Medium Close-Up)", def: "" },
  { id: "shot_ms", name: "中景 (Medium Shot)", def: "" },
  { id: "shot_cowboy", name: "牛仔景 (Cowboy Shot)", def: "" },
  { id: "shot_fs", name: "全身 (Full Shot)", def: "" },
  { id: "shot_ws", name: "远景 (Wide Shot)", def: "" },
  { id: "shot_xls", name: "极远景 (Extreme Wide Shot)", def: "" },
  { id: "shot_planetary", name: "行星视角 (Planetary)", def: "" }
];

// --- 2. 视觉平衡 (VISUAL BALANCE) ---
export const AES_VISUAL_BALANCE: LibraryItemDef[] = [
  { id: "bal_center", name: "中心构图 (Center Balanced)", def: "" },
  { id: "bal_left", name: "左侧重 (Left Weighted)", def: "" },
  { id: "bal_right", name: "右侧重 (Right Weighted)", def: "" },
  { id: "bal_thirds", name: "黄金三分法 (Rule of Thirds)", def: "" },
  { id: "bal_sym", name: "绝对对称 (Symmetrical)", def: "" },
  { id: "bal_diag", name: "对角线构图 (Diagonal Lines)", def: "" },
  { id: "bal_tri", name: "三角形构图 (Triangular)", def: "" },
  { id: "bal_frame", name: "框架式构图 (Framing)", def: "" },
  { id: "bal_lead", name: "视线留白 (Lead Room)", def: "" },
  { id: "bal_short", name: "短边留白 (Short Side)", def: "" },
  { id: "bal_neg_min", name: "极简负空间 (Minimal Negative Space)", def: "" },
  { id: "bal_neg_bal", name: "平衡负空间 (Balanced Negative Space)", def: "" },
  { id: "bal_neg_over", name: "压抑感负空间 (Oversized Negative Space)", def: "" },
  { id: "bal_asym", name: "不对称 (Asymmetrical)", def: "" },
  { id: "bal_chaos", name: "混乱 (Chaotic)", def: "" },
  { id: "bal_max", name: "极繁主义 (Maximalist)", def: "" }
];

// --- 2.5 透视 (PERSPECTIVE) ---
export const AES_PERSPECTIVE: LibraryItemDef[] = [
  { id: "per_one_point", name: "一点透视 (One-Point)", def: "" },
  { id: "per_two_point", name: "两点透视 (Two-Point)", def: "" },
  { id: "per_three_point", name: "三点透视 (Three-Point)", def: "" },
  { id: "per_isometric", name: "等轴测 (Isometric)", def: "" },
  { id: "per_flat", name: "平面/正交 (Flat/Orthographic)", def: "" },
  { id: "per_forced", name: "强迫透视 (Forced Perspective)", def: "" },
  { id: "per_atmospheric", name: "空气透视 (Atmospheric)", def: "" },
  { id: "per_foreshortening", name: "极端缩短 (Foreshortening)", def: "" },
  { id: "per_curvilinear", name: "曲线透视 (Curvilinear)", def: "" },
  { id: "per_worm_eye", name: "虫视透视 (Worm's Eye Perspective)", def: "" },
  { id: "per_fisheye", name: "鱼眼畸变 (Fisheye Distortion)", def: "" }
];

// --- 3. 拍摄角度 (CAMERA ANGLE) ---
export const AES_ANGLE: LibraryItemDef[] = [
  { id: "ang_aerial", name: "上帝视角 (Aerial / Drone View)", def: "" },
  { id: "ang_topdown", name: "垂直俯拍 (Top-down / Overhead)", def: "" },
  { id: "ang_high", name: "高角度俯视 (High Angle)", def: "" },
  { id: "ang_eye", name: "平视视角 (Eye Level)", def: "" },
  { id: "ang_low", name: "低角度仰拍 (Low Angle)", def: "" },
  { id: "ang_worm", name: "极端仰拍 (Worm's Eye View)", def: "" },
  { id: "ang_dutch", name: "荷兰角/斜角 (Dutch Angle)", def: "" },
  { id: "ang_ots", name: "过肩镜头 (Over the Shoulder)", def: "" },
  { id: "ang_pov", name: "主观视角 (POV)", def: "" },
  { id: "ang_clean_single", name: "干净单人位 (Clean Single)", def: "" },
  { id: "ang_two_shot", name: "双人位 (Two-Shot)", def: "" },
  { id: "ang_three_shot", name: "三人位 (Three-Shot)", def: "" },
  { id: "ang_group", name: "群体镜头 (Group Shot)", def: "" },
  { id: "ang_fisheye", name: "鱼眼 (Fisheye)", def: "" },
  { id: "ang_slight_high", name: "略微俯拍 (Slight High Angle)", def: "" }
];

// --- 4. 焦段 (FOCAL LENGTH) ---
export const AES_FOCAL_LENGTH: LibraryItemDef[] = [
  { id: "fl_fisheye", name: "鱼眼 (Fisheye 8mm)", def: "" },
  { id: "fl_ultra_wide", name: "超广角 (Ultra Wide 14mm)", def: "" },
  { id: "fl_wide", name: "广角 (Wide 24mm)", def: "" },
  { id: "fl_wide_35", name: "广角 (Wide 35mm)", def: "" },
  { id: "fl_35mm", name: "人文广角 (35mm)", def: "" },
  { id: "fl_50mm", name: "标准镜头 (50mm)", def: "" },
  { id: "fl_85mm", name: "人像镜 (Portrait 85mm)", def: "" },
  { id: "fl_100mm", name: "百微 (Macro 100mm)", def: "" },
  { id: "fl_135mm", name: "长焦 (Telephoto 135mm)", def: "" },
  { id: "fl_super_tele", name: "超长焦 (Super Tele 400mm+)", def: "" },
  { id: "fl_tele_85", name: "长焦 (Telephoto 85mm)", def: "" }
];

// --- 5. 景深与焦点 (DEPTH OF FIELD) ---
export const AES_DEPTH: LibraryItemDef[] = [
  { id: "dof_deep", name: "深焦 (Deep Focus)", def: "" },
  { id: "dof_shallow", name: "浅景深 (Shallow Focus)", def: "" },
  { id: "dof_razor", name: "极浅景深 (Razor Shallow)", def: "" },
  { id: "dof_bokeh", name: "极致散景 (Creamy Bokeh)", def: "" },
  { id: "dof_rack", name: "变焦 (Rack Focus)", def: "" },
  { id: "dof_split", name: "双重焦点 (Split Diopter)", def: "" }
];

// --- 6. 快门 (SHUTTER) ---
export const AES_SHUTTER: LibraryItemDef[] = [
  { id: "sht_fast", name: "高速快门 (Fast Shutter / Frozen)", def: "" },
  { id: "sht_std", name: "标准快门 (Standard 180°)", def: "" },
  { id: "sht_slow", name: "慢速快门 (Slow Shutter)", def: "" },
  { id: "sht_long", name: "长曝光 (Long Exposure)", def: "" },
  { id: "sht_drag", name: "拖影快门 (Dragging Shutter)", def: "" }
];

// --- 7. 光学特效 (OPTICAL FX) ---
export const AES_LENS_FX: LibraryItemDef[] = [
  // A. 柔化、弥散与质感 (Diffusion & Texture)
  { id: "ofx_clean", name: "洁净镜头 (Clean Lens)", group: "A. 柔化弥散", def: "" },
  { id: "ofx_std_coat", name: "标准镀膜 (Standard Coating)", group: "A. 柔化弥散", def: "" },
  { id: "ofx_diff_18", name: "1/8 黑柔滤镜 (1/8 Black Pro-Mist)", group: "A. 柔化弥散", def: "" },
  { id: "ofx_diff_14", name: "1/4 黑柔滤镜 (1/4 Black Pro-Mist)", group: "A. 柔化弥散", def: "" },
  { id: "ofx_diff_12", name: "1/2 黑柔滤镜 (1/2 Black Pro-Mist)", group: "A. 柔化弥散", def: "" },
  { id: "ofx_diff_white", name: "标准白柔 (White Mist)", group: "A. 柔化弥散", def: "" },
  { id: "ofx_diff_warm", name: "强力白柔 (Warm Soft Diffusion)", group: "A. 柔化弥散", def: "" },
  { id: "ofx_net_filter", name: "后置丝袜滤镜 (Rear Net Filter)", group: "A. 柔化弥散", def: "" },
  { id: "ofx_vaseline", name: "凡士林涂抹感 (Vaseline Lens Effect)", group: "A. 柔化弥散", def: "" },
  { id: "ofx_velvet", name: "复古丝绒感 (Velvet Soft Focus)", group: "A. 柔化弥散", def: "" },
  { id: "ofx_low_con", name: "低反差滤镜 (Low Contrast Filter)", group: "A. 柔化弥散", def: "" },
  { id: "ofx_halo", name: "光晕 (Halo)", group: "A. 柔化弥散", def: "" },
  { id: "ofx_bloom", name: "泛光 (Bloom)", group: "A. 柔化弥散", def: "" },
  { id: "ofx_mist", name: "水雾 (Mist)", group: "A. 柔化弥散", def: "" },
  { id: "ofx_color_shift", name: "色彩偏移 (Color Shift)", group: "A. 柔化弥散", def: "" },
  { id: "ofx_green_tint", name: "绿色色偏 (Green Tint)", group: "A. 柔化弥散", def: "" },

  // B. 折射、棱镜与分身 (Refraction & Prisms)
  { id: "ofx_prism_tri", name: "三角棱镜折射 (Triangular Prism)", group: "B. 折射棱镜", def: "" },
  { id: "ofx_kaleido", name: "万花筒镜 (Kaleidoscope FX)", group: "B. 折射棱镜", def: "" },
  { id: "ofx_diopter", name: "分身棱镜 (Split Field Diopter)", group: "B. 折射棱镜", def: "" },
  { id: "ofx_fractal", name: "分形滤镜 (Fractal Filter)", group: "B. 折射棱镜", def: "" },
  { id: "ofx_prism_lin", name: "线性棱镜 (Linear Prism)", group: "B. 折射棱镜", def: "" },
  { id: "ofx_prism_halo", name: "环形棱镜 (Halo Prism)", group: "B. 折射棱镜", def: "" },
  { id: "ofx_kal_dream", name: "万花筒梦幻感 (Dreamy Kaleidoscope)", group: "B. 折射棱镜", def: "" },
  { id: "ofx_multi_ref", name: "多维镜面折射 (Multi-faceted Refraction)", group: "B. 折射棱镜", def: "" },
  { id: "ofx_chroma_pr", name: "边缘色散折射 (Chromatic Aberration Prism)", group: "B. 折射棱镜", def: "" },
  { id: "ofx_prism_ref", name: "棱镜折射 (Prism Refraction)", group: "B. 折射棱镜", def: "" },

  // C. 光学眩光、星芒与拉丝 (Flares & Stars)
  { id: "ofx_streak_bl", name: "蓝色拉丝镜 (Blue Streak Filter)", group: "C. 眩光星芒", def: "" },
  { id: "ofx_streak_or", name: "橙色拉丝镜 (Orange Streak Filter)", group: "C. 眩光星芒", def: "" },
  { id: "ofx_streak_rb", name: "彩虹拉丝镜 (Rainbow Streak Filter)", group: "C. 眩光星芒", def: "" },
  { id: "ofx_star_4", name: "十字星芒 (4-Point Star Filter)", group: "C. 眩光星芒", def: "" },
  { id: "ofx_star_6", name: "六角星芒 (6-Point Star Filter)", group: "C. 眩光星芒", def: "" },
  { id: "ofx_star_snow", name: "雪花扩散星芒 (Snow Star Filter)", group: "C. 眩光星芒", def: "" },
  { id: "ofx_flare_burst", name: "中心爆裂眩光 (Center Burst Flare)", group: "C. 眩光星芒", def: "" },
  { id: "ofx_flare_ring", name: "环状动态眩光 (Anamorphic Ring Flare)", group: "C. 眩光星芒", def: "" },
  { id: "ofx_flare_lens", name: "逆光眩光 (Lens Flare)", group: "C. 眩光星芒", def: "" },
  { id: "ofx_spot_beam", name: "聚光灯束 (Spotlight Beam)", group: "C. 眩光星芒", def: "" },
  { id: "ofx_star_filter", name: "星芒镜 (Star Filter)", group: "C. 眩光星芒", def: "" },

  // D. 底片损伤与物理叠层 (Film Damage & Overlays)
  { id: "ofx_double_exp", name: "双重曝光 (Double Exposure)", group: "D. 底片损伤", def: "" },
  { id: "ofx_film_burn", name: "胶片烧灼 (Film Burn)", group: "D. 底片损伤", def: "" },
  { id: "ofx_light_leak", name: "底片漏光 (Light Leak)", group: "D. 底片损伤", def: "" },
  { id: "ofx_dust_scratch", name: "物理灰尘划痕 (Dust & Scratches)", group: "D. 底片损伤", def: "" },
  { id: "ofx_smudge", name: "水渍/指纹污迹 (Smudge & Water Spot)", group: "D. 底片损伤", def: "" },
  { id: "ofx_gate_flare", name: "门框漏光效果 (Gate Flare)", group: "D. 底片损伤", def: "" },
  { id: "ofx_scratches", name: "划痕 (Scratches)", group: "D. 底片损伤", def: "" },

  // E. 极端畸变与特殊视野 (Distortion & Specialty)
  { id: "ofx_fisheye", name: "鱼眼畸变 (Fisheye Distortion)", group: "E. 极端畸变", def: "" },
  { id: "ofx_tilt_shift", name: "移轴模糊 (Tilt-Shift)", group: "E. 极端畸变", def: "" },
  { id: "ofx_anaglyph", name: "红蓝 3D 偏移 (Anaglyph Offset)", group: "E. 极端畸变", def: "" },
  { id: "ofx_infrared", name: "红外摄影 (Infrared Pass)", group: "E. 极端畸变", def: "" },
  { id: "ofx_strobe", name: "频闪 (Strobe)", group: "E. 极端畸变", def: "" },
  { id: "ofx_color_gel", name: "彩色滤镜 (Color Gel)", group: "E. 极端畸变", def: "" },
  { id: "ofx_smoke", name: "烟雾 (Smoke)", group: "E. 极端畸变", def: "" }
];

// --- 8. 光学格式 (OPTICAL FORMAT) ---
export const AES_OPTICAL_FORMAT: LibraryItemDef[] = [
  { id: "fmt_s35", name: "Super 35mm", def: "" },
  { id: "fmt_std35", name: "Standard 35mm", def: "" },
  { id: "fmt_ff", name: "Full Frame", def: "" },
  { id: "fmt_vv", name: "VistaVision", def: "" },
  { id: "fmt_65mm", name: "65mm Large Format", def: "" },
  { id: "fmt_arri65", name: "ARRI 65", def: "" },
  { id: "fmt_ana_2x", name: "变形宽银幕 (Anamorphic 2x)", def: "" },
  { id: "fmt_anamorphic", name: "Anamorphic", def: "" },
  { id: "fmt_open_gate", name: "Open Gate", def: "" },
  { id: "fmt_academy", name: "学院比例 (Academy Ratio)", def: "" },
  { id: "fmt_imax", name: "IMAX", def: "" },
  { id: "fmt_techniscope", name: "Techniscope", def: "" },
  { id: "fmt_16mm", name: "16mm", def: "" },
  { id: "fmt_medium", name: "Medium Format", def: "" },
  { id: "fmt_large", name: "Large Format", def: "" },
  { id: "fmt_action", name: "Action Cam Sensor", def: "" }
];
