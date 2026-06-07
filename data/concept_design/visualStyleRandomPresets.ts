import { ConceptDesignPhysicalMediumCategory } from '../../types';
import { type VisualStyleProfileTarget } from './visualStyleProfiles';

export type VisualStyleRandomMode = 'STRICT' | 'DRIFT';

export type VisualStyleRandomPreset = {
  id: string;
  label: string;
  labelEn: string;
  brief: string;
  briefEn: string;
  mediumCategory: ConceptDesignPhysicalMediumCategory;
  mode: VisualStyleRandomMode;
  soulBlocks: string[];
  qualityBlocks: string[];
  paletteKeys?: string[];
  allowBlocks?: string[];
  profileTarget?: VisualStyleProfileTarget;
  prefer: Record<string, string[]>;
};

const photoSoulBlocks = ['cd_director_style', 'cd_photo_style'];
const paintingSoulBlocks = ['cd_anim_director', 'cd_art_movement', 'cd_art_style'];
const cgiSoulBlocks = ['cd_media_cgi_soul'];
const tangibleSoulBlocks = ['cd_media_tangible_soul'];
const photoQualityBlocks = ['cd_camera_system', 'cd_lens_series', 'cd_optical_format', 'cd_texture_render', 'cd_physical_grain', 'cd_base_tone', 'cd_color_science'];
const paintingQualityBlocks = ['cd_art_medium', 'cd_line_quality', 'cd_canvas_texture'];

export const VISUAL_STYLE_RANDOM_PRESETS: VisualStyleRandomPreset[] = [
  {
    id: 'photo_vintage_film',
    label: '摄影：复古胶片',
    labelEn: 'Photo: Vintage Film',
    brief: '胶片机身、复古镜头、有机颗粒与柔和高光卷收。',
    briefEn: 'Film cameras, vintage lenses, organic grain, and soft highlight roll-off.',
    mediumCategory: 'PHOTOGRAPHY',
    mode: 'STRICT',
    soulBlocks: photoSoulBlocks,
    qualityBlocks: photoQualityBlocks,
    paletteKeys: ['奥本海默', '教父', '布达佩斯', '花样年华', '电影', '复古'],
    profileTarget: {
      medium: ['film'],
      cleanliness: ['clean', 'organic', 'dirty'],
      contrast: ['low', 'medium', 'high', 'extreme'],
      saturation: ['low', 'medium', 'high', 'mono'],
      era: ['vintage', 'modern'],
      distortion: ['none', 'mild'],
      noise: ['fine', 'medium']
    },
    prefer: {
      cd_director_style: ['aut_coppola', 'aut_wkw', 'aut_hou', 'aut_yang', 'aut_scorsese', 'aut_kubrick', 'aut_pta', 'aut_kurosawa'],
      cd_photo_style: ['pho_vintage_35mm', 'pho_film_noir', 'pho_street', 'pho_magnum', 'pho_humanist'],
      cd_camera_system: ['cam_arriflex', 'cam_panaflex', 'cam_arricam', 'cam_bolex', 'cam_mitchell', 'cam_techniscope', 'cam_aaton', 'cam_konvas'],
      cd_lens_series: ['lens_cooke', 'lens_panavision', 'lens_canon_k35', 'lens_zeiss_standard', 'lens_angenieux', 'lens_super_baltar', 'lens_kowa', 'lens_lomo'],
      cd_optical_format: ['fmt_s35', 'fmt_std35', 'fmt_16mm', 'fmt_techniscope', 'fmt_anamorphic', 'fmt_ana_2x'],
      cd_texture_render: ['tx_r_organic', 'tx_r_halation', 'tx_r_diffusion', 'tx_r_rolloff', 'tx_r_faded', 'tx_r_bleach'],
      cd_physical_grain: ['gr_micro35', 'gr_fine35', 'gr_std35', 'gr_organic', 'gr_std16', 'gr_rough16'],
      cd_base_tone: ['dp_naturalism', 'dp_90s_cine', 'dp_soft_fade', 'dp_bleach', 'dp_muted_matte'],
      cd_color_science: ['cs_kodak_vision3', 'cs_portra_400', 'cs_fuji_eterna', 'cs_vision_500t', 'cs_kodak_5247', 'cs_kodak_5254', 'cs_kodak_5279']
    }
  },
  {
    id: 'photo_clean_digital',
    label: '摄影：干净数字',
    labelEn: 'Photo: Clean Digital',
    brief: '现代数字电影机、干净锐度、低噪点和标准工业色彩。',
    briefEn: 'Modern digital cinema cameras, clean sharpness, low noise, and industrial color science.',
    mediumCategory: 'PHOTOGRAPHY',
    mode: 'STRICT',
    soulBlocks: photoSoulBlocks,
    qualityBlocks: photoQualityBlocks,
    paletteKeys: ['现代', '冷', '银翼杀手', '沙丘', '极简', '商业'],
    profileTarget: {
      medium: ['digital'],
      cleanliness: ['pristine', 'clean'],
      contrast: ['low', 'medium', 'high'],
      saturation: ['low', 'medium', 'high'],
      era: ['modern', 'future'],
      distortion: ['none'],
      noise: ['none', 'fine']
    },
    prefer: {
      cd_director_style: ['aut_villeneuve', 'aut_fincher', 'aut_nolan', 'aut_cuaron', 'aut_mann', 'aut_greengrass'],
      cd_photo_style: ['pho_commercial', 'pho_editorial_art', 'pho_vogue', 'pho_minimalist_digital', 'pho_architectural'],
      cd_camera_system: ['cam_alexa_65', 'cam_alexa_35', 'cam_alexa_mini_lf', 'cam_sony_venice_2', 'cam_red_v_raptor_xl', 'cam_red_monstro', 'cam_hasselblad_digital'],
      cd_lens_series: ['lens_zeiss_master', 'lens_zeiss_supreme', 'lens_arri_signature', 'lens_leica_summilux', 'lens_panavision_primo', 'lens_hasselblad_dna'],
      cd_optical_format: ['fmt_ff', 'fmt_large', 'fmt_65mm', 'fmt_arri65', 'fmt_s35', 'fmt_open_gate', 'fmt_medium'],
      cd_texture_render: ['tx_r_clinical', 'tx_r_pristine', 'tx_r_antihalo', 'tx_r_micro', 'tx_r_hdr', 'tx_r_neutral', 'tx_r_smooth'],
      cd_physical_grain: ['gr_denoised', 'gr_iso100', 'gr_micro35'],
      cd_base_tone: ['dp_log', 'dp_neutral', 'dp_hdr', 'dp_naturalism', 'dp_muted_matte'],
      cd_color_science: ['cs_arri_logc', 'cs_aces', 'cs_red_ipp2', 'cs_sony_sgamut', 'cs_hdr', 'cs_dolby', 'cs_rec709']
    }
  },
  {
    id: 'photo_lofi_archive',
    label: '摄影：低保真档案',
    labelEn: 'Photo: Lo-Fi Archive',
    brief: '档案扫描、录像信号、低码率噪点和时间损耗。',
    briefEn: 'Archive scans, video signal, low-bitrate noise, and time-worn degradation.',
    mediumCategory: 'PHOTOGRAPHY',
    mode: 'STRICT',
    soulBlocks: photoSoulBlocks,
    qualityBlocks: photoQualityBlocks,
    paletteKeys: ['档案', '旧纸', '褪色', '黑白', '录像', '低保真', '噪点'],
    profileTarget: {
      medium: ['film', 'print', 'video', 'digital'],
      cleanliness: ['organic', 'dirty', 'damaged', 'experimental'],
      contrast: ['low', 'medium', 'high'],
      saturation: ['mono', 'low', 'shifted'],
      era: ['vintage', 'modern'],
      distortion: ['mild', 'strong', 'glitch'],
      noise: ['medium', 'heavy', 'glitch']
    },
    prefer: {
      cd_director_style: ['aut_kiarostami', 'aut_tarkovsky', 'aut_godard', 'aut_varda', 'aut_jia', 'aut_bresson'],
      cd_photo_style: ['pho_surveillance', 'pho_lofi_vhs', 'pho_polaroid', 'pho_glitch_digital', 'pho_street', 'pho_magnum'],
      cd_camera_system: ['cam_polaroid_sx70', 'cam_mitchell_bnc', 'cam_bolex_h16', 'cam_cctv', 'cam_vhs_camcorder', 'cam_iphone_pro', 'cam_gopro'],
      cd_lens_series: ['lens_cooke_panchro', 'lens_zeiss_standard', 'lens_super_baltar', 'lens_angenieux', 'lens_fisheye'],
      cd_optical_format: ['fmt_academy', 'fmt_16mm', 'fmt_std35', 'fmt_s35', 'fmt_action'],
      cd_texture_render: ['tx_r_distressed', 'tx_r_faded', 'tx_r_neutral', 'tx_r_silver', 'tx_r_lofi', 'tx_r_compression', 'tx_r_pixel_glitch'],
      cd_physical_grain: ['gr_dust', 'gr_silver', 'gr_std16', 'gr_rough16', 'gr_vhs', 'gr_static', 'gr_macroblock', 'gr_iso3200'],
      cd_base_tone: ['dp_soft_fade', 'dp_mono_art', 'dp_muted_matte', 'dp_cross', 'dp_y2k_digi', 'dp_stark'],
      cd_color_science: ['cs_polaroid', 'cs_tri_x', 'cs_ilford_hp5', 'cs_kodachrome', 'cs_kodak_plus_x', 'cs_sovcolor', 'cs_rec709', 'cs_gopro_flat']
    }
  },
  {
    id: 'photo_rough_indie',
    label: '摄影：粗颗粒独立',
    labelEn: 'Photo: Rough Indie',
    brief: '16mm、小型胶片机、粗颗粒、低预算现场感。',
    briefEn: '16mm, small film cameras, coarse grain, and low-budget location realism.',
    mediumCategory: 'PHOTOGRAPHY',
    mode: 'STRICT',
    soulBlocks: photoSoulBlocks,
    qualityBlocks: photoQualityBlocks,
    paletteKeys: ['独立', '褪色', '低饱和', '纪实'],
    profileTarget: {
      medium: ['film'],
      cleanliness: ['organic', 'dirty'],
      contrast: ['low', 'medium', 'high'],
      saturation: ['low', 'medium'],
      era: ['vintage', 'modern'],
      distortion: ['mild', 'strong'],
      noise: ['medium', 'heavy']
    },
    prefer: {
      cd_director_style: ['aut_varda', 'aut_iwai', 'aut_godard', 'aut_jia', 'aut_kiarostami', 'aut_soderbergh'],
      cd_photo_style: ['pho_street', 'pho_mobile_snapshot', 'pho_vintage_35mm', 'pho_magnum', 'pho_social_realism'],
      cd_camera_system: ['cam_bolex_h16', 'cam_arriflex_416', 'cam_aaton_xtr', 'cam_techniscope', 'cam_vhs_camcorder', 'cam_polaroid_sx70'],
      cd_lens_series: ['lens_zeiss_super_speed', 'lens_zeiss_standard', 'lens_canon_k35', 'lens_angenieux', 'lens_helios_44'],
      cd_optical_format: ['fmt_16mm', 'fmt_std35', 'fmt_s35', 'fmt_academy'],
      cd_texture_render: ['tx_r_organic', 'tx_r_distressed', 'tx_r_faded', 'tx_r_lofi', 'tx_r_diffusion'],
      cd_physical_grain: ['gr_std16', 'gr_rough16', 'gr_8mm', 'gr_iso800', 'gr_iso3200', 'gr_dust'],
      cd_base_tone: ['dp_soft_fade', 'dp_cross', 'dp_muted_matte', 'dp_log'],
      cd_color_science: ['cs_kodak_vision3', 'cs_fuji_eterna', 'cs_cinestill_800t', 'cs_polaroid', 'cs_agfa_vista']
    }
  },
  {
    id: 'photo_premium_commercial',
    label: '摄影：高级商业',
    labelEn: 'Photo: Premium Commercial',
    brief: '中画幅/大画幅质感、棚拍洁净、精修商业表面。',
    briefEn: 'Medium/large format polish, clean studio lighting, and refined commercial finish.',
    mediumCategory: 'PHOTOGRAPHY',
    mode: 'STRICT',
    soulBlocks: photoSoulBlocks,
    qualityBlocks: photoQualityBlocks,
    paletteKeys: ['商业', '高级', '干净', '时尚'],
    profileTarget: {
      medium: ['digital'],
      cleanliness: ['pristine', 'clean'],
      contrast: ['medium', 'high'],
      saturation: ['medium', 'high'],
      era: ['modern', 'future'],
      distortion: ['none'],
      noise: ['none', 'fine']
    },
    prefer: {
      cd_director_style: ['aut_fincher', 'aut_villeneuve', 'aut_wes', 'aut_mann'],
      cd_photo_style: ['pho_vogue', 'pho_editorial_art', 'pho_commercial', 'pho_glamour', 'pho_lookbook'],
      cd_camera_system: ['cam_hasselblad_digital', 'cam_alexa_65', 'cam_alexa_35', 'cam_sony_venice_2', 'cam_red_v_raptor_xl'],
      cd_lens_series: ['lens_hasselblad_dna', 'lens_zeiss_master', 'lens_zeiss_supreme', 'lens_leica_summilux', 'lens_canon_cn_e'],
      cd_optical_format: ['fmt_medium', 'fmt_large', 'fmt_ff', 'fmt_open_gate'],
      cd_texture_render: ['tx_r_pristine', 'tx_r_smooth', 'tx_r_micro', 'tx_r_glossy', 'tx_r_matte', 'tx_r_neutral'],
      cd_physical_grain: ['gr_denoised', 'gr_iso100'],
      cd_base_tone: ['dp_neutral', 'dp_vivid', 'dp_muted_matte', 'dp_hdr'],
      cd_color_science: ['cs_aces', 'cs_rec709', 'cs_dolby', 'cs_hdr', 'cs_arri_logc']
    }
  },
  {
    id: 'photo_dream_soft_focus',
    label: '摄影：柔焦梦境',
    labelEn: 'Photo: Dream Soft Focus',
    brief: '柔焦、光晕、淡色胶片与轻微梦境弥散。',
    briefEn: 'Soft focus, glow, pale film color, and gentle dream diffusion.',
    mediumCategory: 'PHOTOGRAPHY',
    mode: 'STRICT',
    soulBlocks: photoSoulBlocks,
    qualityBlocks: photoQualityBlocks,
    paletteKeys: ['梦境', '柔焦', '淡色', '粉'],
    profileTarget: {
      medium: ['film', 'digital'],
      cleanliness: ['clean', 'organic'],
      contrast: ['low', 'medium'],
      saturation: ['low', 'medium'],
      era: ['vintage', 'modern', 'timeless'],
      distortion: ['mild'],
      noise: ['none', 'fine']
    },
    prefer: {
      cd_director_style: ['aut_malick', 'aut_wkw', 'aut_iwai', 'aut_varda', 'aut_parajanov'],
      cd_photo_style: ['pho_glamour', 'pho_polaroid', 'pho_surreal_art', 'pho_vogue', 'pho_humanist'],
      cd_camera_system: ['cam_alexa_mini_lf', 'cam_arricam_lt', 'cam_polaroid_sx70', 'cam_hasselblad_digital'],
      cd_lens_series: ['lens_canon_k35', 'lens_cooke_s4', 'lens_cooke_panchro', 'lens_petzval', 'lens_helios_44'],
      cd_optical_format: ['fmt_ff', 'fmt_medium', 'fmt_s35', 'fmt_open_gate'],
      cd_texture_render: ['tx_r_dreamy', 'tx_r_diffusion', 'tx_r_halation', 'tx_r_smooth', 'tx_r_velvet'],
      cd_physical_grain: ['gr_denoised', 'gr_micro35', 'gr_fine35', 'gr_iso100'],
      cd_base_tone: ['dp_soft_fade', 'dp_high_key', 'dp_naturalism', 'dp_muted_matte'],
      cd_color_science: ['cs_portra_400', 'cs_fuji_eterna', 'cs_polaroid', 'cs_gold_200']
    }
  },
  {
    id: 'photo_high_contrast_mono',
    label: '摄影：高反差黑白',
    labelEn: 'Photo: High-Contrast Mono',
    brief: '黑白银盐、高反差、硬暗部和图形化光影。',
    briefEn: 'Black-and-white silver density, high contrast, hard shadows, and graphic light.',
    mediumCategory: 'PHOTOGRAPHY',
    mode: 'STRICT',
    soulBlocks: photoSoulBlocks,
    qualityBlocks: photoQualityBlocks,
    paletteKeys: ['黑白', '银盐', '高反差', '暗'],
    profileTarget: {
      medium: ['film', 'print', 'digital'],
      cleanliness: ['clean', 'organic', 'dirty'],
      contrast: ['high', 'extreme'],
      saturation: ['mono', 'low'],
      era: ['vintage', 'modern', 'timeless'],
      distortion: ['none', 'mild'],
      noise: ['fine', 'medium', 'heavy']
    },
    prefer: {
      cd_director_style: ['aut_bergman', 'aut_bresson', 'aut_kurosawa', 'aut_kubrick', 'aut_godard'],
      cd_photo_style: ['pho_film_noir', 'pho_street', 'pho_magnum', 'pho_social_realism', 'pho_wet_plate'],
      cd_camera_system: ['cam_mitchell_bnc', 'cam_arriflex_435', 'cam_panaflex_platinum', 'cam_bolex_h16'],
      cd_lens_series: ['lens_super_baltar', 'lens_zeiss_standard', 'lens_cooke_panchro', 'lens_panavision_primo'],
      cd_optical_format: ['fmt_academy', 'fmt_std35', 'fmt_s35', 'fmt_16mm'],
      cd_texture_render: ['tx_r_stark', 'tx_r_silver', 'tx_r_bleach', 'tx_r_clinical'],
      cd_physical_grain: ['gr_silver', 'gr_fine35', 'gr_std35', 'gr_std16', 'gr_rough16'],
      cd_base_tone: ['dp_mono_art', 'dp_stark', 'dp_bleach'],
      cd_color_science: ['cs_tri_x', 'cs_ilford_hp5', 'cs_kodak_double_x', 'cs_kodak_plus_x']
    }
  },
  {
    id: 'photo_surveillance_forensic',
    label: '摄影：监控取证',
    labelEn: 'Photo: Surveillance Forensic',
    brief: '监控、取证、冷灰记录、压缩噪声与非表演观看。',
    briefEn: 'Surveillance, forensic recording, cold grey tone, compression noise, and non-performative view.',
    mediumCategory: 'PHOTOGRAPHY',
    mode: 'STRICT',
    soulBlocks: photoSoulBlocks,
    qualityBlocks: photoQualityBlocks,
    paletteKeys: ['监控', '取证', '冷灰', '记录'],
    profileTarget: {
      medium: ['digital', 'video'],
      cleanliness: ['clean', 'dirty', 'damaged'],
      contrast: ['medium', 'high'],
      saturation: ['low', 'mono'],
      era: ['modern', 'future'],
      distortion: ['mild', 'strong'],
      noise: ['medium', 'heavy', 'glitch']
    },
    prefer: {
      cd_director_style: ['aut_fincher', 'aut_kiarostami', 'aut_lanthimos', 'aut_bresson'],
      cd_photo_style: ['pho_surveillance', 'pho_glitch_digital', 'pho_magnum', 'pho_mobile_snapshot', 'pho_lofi_vhs'],
      cd_camera_system: ['cam_cctv', 'cam_iphone_pro', 'cam_gopro', 'cam_vhs_camcorder'],
      cd_lens_series: ['lens_fisheye', 'lens_zeiss_standard', 'lens_angenieux'],
      cd_optical_format: ['fmt_action', 'fmt_ff', 'fmt_academy'],
      cd_texture_render: ['tx_r_neutral', 'tx_r_clinical', 'tx_r_compression', 'tx_r_lofi'],
      cd_physical_grain: ['gr_digital', 'gr_macroblock', 'gr_static', 'gr_iso3200'],
      cd_base_tone: ['dp_neutral', 'dp_stark', 'dp_y2k_digi', 'dp_log'],
      cd_color_science: ['cs_rec709', 'cs_gopro_flat', 'cs_canon_log']
    }
  },
  {
    id: 'photo_fashion_editorial',
    label: '摄影：时尚编辑',
    labelEn: 'Photo: Fashion Editorial',
    brief: '杂志编辑、棚拍人像、造型抛光与高级材质。',
    briefEn: 'Magazine editorial, studio portraiture, polished styling, and premium material clarity.',
    mediumCategory: 'PHOTOGRAPHY',
    mode: 'STRICT',
    soulBlocks: photoSoulBlocks,
    qualityBlocks: photoQualityBlocks,
    paletteKeys: ['时尚', '杂志', '棚拍', '高级'],
    profileTarget: {
      medium: ['digital', 'film'],
      cleanliness: ['pristine', 'clean'],
      contrast: ['medium', 'high'],
      saturation: ['low', 'medium', 'high'],
      era: ['modern'],
      distortion: ['none', 'mild'],
      noise: ['none', 'fine']
    },
    prefer: {
      cd_director_style: ['aut_wes', 'aut_fincher', 'aut_wkw', 'aut_iwai'],
      cd_photo_style: ['pho_vogue', 'pho_editorial_art', 'pho_glamour', 'pho_lookbook', 'pho_commercial'],
      cd_camera_system: ['cam_hasselblad_digital', 'cam_alexa_65', 'cam_red_monstro', 'cam_polaroid_sx70'],
      cd_lens_series: ['lens_hasselblad_dna', 'lens_leica_summilux', 'lens_zeiss_supreme', 'lens_cooke_s4'],
      cd_optical_format: ['fmt_medium', 'fmt_ff', 'fmt_large', 'fmt_open_gate'],
      cd_texture_render: ['tx_r_pristine', 'tx_r_smooth', 'tx_r_velvet', 'tx_r_glossy', 'tx_r_matte'],
      cd_physical_grain: ['gr_denoised', 'gr_iso100', 'gr_micro35'],
      cd_base_tone: ['dp_muted_matte', 'dp_neutral', 'dp_vivid', 'dp_high_key'],
      cd_color_science: ['cs_portra_400', 'cs_aces', 'cs_arri_logc', 'cs_dolby']
    }
  },
  {
    id: 'photo_natural_location',
    label: '摄影：自然外景',
    labelEn: 'Photo: Natural Location',
    brief: '自然外景、低后期、空气层次和可信现场光。',
    briefEn: 'Natural location light, restrained post, airy depth, and credible on-site atmosphere.',
    mediumCategory: 'PHOTOGRAPHY',
    mode: 'STRICT',
    soulBlocks: photoSoulBlocks,
    qualityBlocks: photoQualityBlocks,
    paletteKeys: ['自然', '外景', '空气', '柔和'],
    profileTarget: {
      medium: ['film', 'digital'],
      cleanliness: ['clean', 'organic'],
      contrast: ['low', 'medium'],
      saturation: ['low', 'medium'],
      era: ['modern', 'timeless'],
      distortion: ['none', 'mild'],
      noise: ['none', 'fine']
    },
    prefer: {
      cd_director_style: ['aut_malick', 'aut_cuaron', 'aut_kiarostami', 'aut_varda', 'aut_iwai'],
      cd_photo_style: ['pho_humanist', 'pho_environmental_portrait', 'pho_landscape_sublime', 'pho_magnum', 'pho_street'],
      cd_camera_system: ['cam_alexa_mini_lf', 'cam_alexa_35', 'cam_arricam_lt', 'cam_aaton_xtr'],
      cd_lens_series: ['lens_arri_signature', 'lens_cooke_s4', 'lens_canon_k35', 'lens_zeiss_standard'],
      cd_optical_format: ['fmt_ff', 'fmt_s35', 'fmt_open_gate', 'fmt_16mm'],
      cd_texture_render: ['tx_r_rolloff', 'tx_r_diffusion', 'tx_r_neutral', 'tx_r_organic', 'tx_r_matte'],
      cd_physical_grain: ['gr_iso100', 'gr_micro35', 'gr_fine35', 'gr_organic'],
      cd_base_tone: ['dp_naturalism', 'dp_soft_fade', 'dp_muted_matte', 'dp_neutral'],
      cd_color_science: ['cs_arri_logc', 'cs_fuji_eterna', 'cs_kodak_vision3', 'cs_portra_400']
    }
  },
  {
    id: 'photo_neon_night',
    label: '摄影：霓虹夜景',
    labelEn: 'Photo: Neon Night',
    brief: '夜景霓虹、钨丝灯、湿润反光与高感颗粒。',
    briefEn: 'Night neon, tungsten color, wet reflections, and high-ISO grain.',
    mediumCategory: 'PHOTOGRAPHY',
    mode: 'STRICT',
    soulBlocks: photoSoulBlocks,
    qualityBlocks: photoQualityBlocks,
    paletteKeys: ['夜景', '霓虹', '蓝紫', '钨丝灯'],
    profileTarget: {
      medium: ['film', 'digital'],
      cleanliness: ['clean', 'organic', 'experimental'],
      contrast: ['medium', 'high'],
      saturation: ['medium', 'high', 'shifted'],
      era: ['modern', 'future'],
      distortion: ['mild', 'strong'],
      noise: ['fine', 'medium']
    },
    prefer: {
      cd_director_style: ['aut_wkw', 'aut_mann', 'aut_fincher', 'aut_daniels', 'aut_boyle'],
      cd_photo_style: ['pho_lofi_vhs', 'pho_street', 'pho_vogue', 'pho_glitch_digital', 'pho_hard_flash'],
      cd_camera_system: ['cam_sony_venice_2', 'cam_alexa_35', 'cam_viper_filmstream', 'cam_arriflex_535'],
      cd_lens_series: ['lens_panavision_c', 'lens_lomo_anamorphic', 'lens_zeiss_super_speed', 'lens_canon_k35'],
      cd_optical_format: ['fmt_anamorphic', 'fmt_ana_2x', 'fmt_ff', 'fmt_s35'],
      cd_texture_render: ['tx_r_halation', 'tx_r_glossy', 'tx_r_diffusion', 'tx_r_lofi', 'tx_r_faded'],
      cd_physical_grain: ['gr_fine35', 'gr_std35', 'gr_iso800', 'gr_iso3200'],
      cd_base_tone: ['dp_y2k_digi', 'dp_cross', 'dp_90s_cine', 'dp_stark'],
      cd_color_science: ['cs_cinestill_800t', 'cs_ektachrome', 'cs_sony_sgamut', 'cs_kodak_5279']
    }
  },
  {
    id: 'photo_news_documentary',
    label: '摄影：新闻纪实',
    labelEn: 'Photo: News Documentary',
    brief: '新闻现场、纪实镜头、中性记录和可读真实感。',
    briefEn: 'News location, documentary lenses, neutral record tone, and readable realism.',
    mediumCategory: 'PHOTOGRAPHY',
    mode: 'STRICT',
    soulBlocks: photoSoulBlocks,
    qualityBlocks: photoQualityBlocks,
    paletteKeys: ['新闻', '现场', '纪实', '真实'],
    profileTarget: {
      medium: ['digital', 'film'],
      cleanliness: ['clean', 'organic', 'dirty'],
      contrast: ['medium', 'high'],
      saturation: ['low', 'medium'],
      era: ['modern'],
      distortion: ['none', 'mild'],
      noise: ['fine', 'medium']
    },
    prefer: {
      cd_director_style: ['aut_kiarostami', 'aut_varda', 'aut_jia', 'aut_soderbergh'],
      cd_photo_style: ['pho_magnum', 'pho_war_photo', 'pho_street', 'pho_environmental_portrait', 'pho_social_realism'],
      cd_camera_system: ['cam_iphone_pro', 'cam_alexa_35', 'cam_arriflex_416', 'cam_aaton_xtr'],
      cd_lens_series: ['lens_zeiss_standard', 'lens_angenieux', 'lens_canon_cn_e', 'lens_cooke_s4'],
      cd_optical_format: ['fmt_ff', 'fmt_s35', 'fmt_16mm', 'fmt_academy'],
      cd_texture_render: ['tx_r_neutral', 'tx_r_organic', 'tx_r_micro', 'tx_r_rolloff'],
      cd_physical_grain: ['gr_iso100', 'gr_iso800', 'gr_fine35', 'gr_std16'],
      cd_base_tone: ['dp_neutral', 'dp_naturalism', 'dp_log', 'dp_muted_matte'],
      cd_color_science: ['cs_rec709', 'cs_arri_logc', 'cs_kodak_vision3', 'cs_ilford_hp5']
    }
  },
  {
    id: 'painting_painterly_illustration',
    label: '绘画：厚涂插画',
    labelEn: 'Painting: Painterly Illustration',
    brief: '数字厚涂、油画笔触、插画完成度和纸/布表面。',
    briefEn: 'Digital impasto, oil-like brushwork, illustration finish, and paper/canvas surfaces.',
    mediumCategory: 'PAINTING',
    mode: 'STRICT',
    soulBlocks: paintingSoulBlocks,
    qualityBlocks: paintingQualityBlocks,
    paletteKeys: ['绘画', '油画', '插画', '纸'],
    profileTarget: {
      medium: ['painting', 'digital', 'print'],
      cleanliness: ['clean', 'organic'],
      contrast: ['low', 'medium', 'high'],
      saturation: ['low', 'medium', 'high'],
      era: ['modern', 'timeless', 'vintage'],
      distortion: ['none', 'mild'],
      noise: ['none', 'fine', 'medium']
    },
    prefer: {
      cd_anim_director: ['ref_ghibli', 'ref_takahata', 'ref_yamada', 'ref_cartoon_saloon', 'ref_blue_eye', 'ref_fog_hill'],
      cd_art_movement: ['ref_craig_mullins', 'ref_moebius', 'ref_brom', 'ref_james_gurney', 'ref_disco_elysium', 'ref_hades', 'ref_feng_zhu'],
      cd_art_style: ['art_baroque', 'art_romanticism', 'art_symbolism', 'art_pre_raphaelite', 'art_impressionism', 'art_expressionism', 'art_surrealism', 'art_magic_realism'],
      cd_art_medium: ['am_digital', 'am_digital_paint', 'am_oil', 'am_impasto', 'am_watercolor', 'am_gouache', 'am_ink'],
      cd_line_quality: ['lq_no_line', 'lq_clean', 'lq_brush', 'lq_ink_bleed', 'lq_hatching', 'lq_thin'],
      cd_canvas_texture: ['ct_canvas', 'ct_watercolor', 'ct_paper_texture', 'ct_smooth', 'ct_fabric']
    }
  },
  {
    id: 'painting_graphic_manga',
    label: '绘画：漫画图形',
    labelEn: 'Painting: Graphic Manga',
    brief: '漫画线稿、黑白密度、网点印刷和高反差图形。',
    briefEn: 'Manga linework, black-white density, screentone print, and graphic contrast.',
    mediumCategory: 'PAINTING',
    mode: 'STRICT',
    soulBlocks: paintingSoulBlocks,
    qualityBlocks: paintingQualityBlocks,
    paletteKeys: ['漫画', '黑白', '印刷', '高反差'],
    profileTarget: {
      medium: ['painting', 'print', 'digital'],
      cleanliness: ['clean', 'organic'],
      contrast: ['high', 'extreme'],
      saturation: ['mono', 'low', 'medium'],
      era: ['vintage', 'modern'],
      distortion: ['none', 'mild'],
      noise: ['fine', 'medium']
    },
    prefer: {
      cd_anim_director: ['ref_kon', 'ref_oshii', 'ref_anno', 'ref_trigger', 'ref_yuasa'],
      cd_art_movement: ['ref_tezuka', 'ref_otomo_manga', 'ref_urasawa', 'ref_inoue', 'ref_shirow', 'ref_nihei', 'ref_mignola'],
      cd_art_style: ['art_ukiyo_e', 'art_expressionism', 'art_pop_art', 'art_constructivism', 'art_art_nouveau'],
      cd_art_medium: ['am_ink', 'am_cel', 'am_marker', 'am_vector', 'am_pixel', 'am_gouache'],
      cd_line_quality: ['lq_clean', 'lq_thick', 'lq_thin', 'lq_hatching', 'lq_vector', 'lq_rough'],
      cd_canvas_texture: ['ct_halftone', 'ct_screen', 'ct_noise', 'ct_smooth', 'ct_paper_texture']
    }
  },
  {
    id: 'painting_traditional_paper',
    label: '绘画：纸本手绘',
    labelEn: 'Painting: Traditional Paper',
    brief: '水彩、铅笔、纸纤维、渗化边缘和手绘温度。',
    briefEn: 'Watercolor, pencil, paper fiber, bleeding edges, and handmade warmth.',
    mediumCategory: 'PAINTING',
    mode: 'STRICT',
    soulBlocks: paintingSoulBlocks,
    qualityBlocks: paintingQualityBlocks,
    paletteKeys: ['水彩', '纸本', '手绘', '柔和'],
    profileTarget: {
      medium: ['painting', 'print'],
      cleanliness: ['organic', 'dirty'],
      contrast: ['low', 'medium'],
      saturation: ['low', 'medium'],
      era: ['vintage', 'modern', 'timeless'],
      distortion: ['mild'],
      noise: ['fine', 'medium']
    },
    prefer: {
      cd_anim_director: ['ref_ghibli', 'ref_takahata', 'ref_cartoon_saloon', 'ref_shinkai', 'ref_yamada'],
      cd_art_movement: ['ref_beatrix_potter', 'ref_tasha_tudor', 'ref_shaun_tan', 'ref_quentin_blake', 'ref_mary_blair', 'ref_james_gurney'],
      cd_art_style: ['art_impressionism', 'art_romanticism', 'art_symbolism', 'art_arts_and_crafts', 'art_art_nouveau'],
      cd_art_medium: ['am_watercolor', 'am_gouache', 'am_pencil', 'am_pencil_sketch', 'am_ink', 'am_pastel'],
      cd_line_quality: ['lq_thin', 'lq_sketchy', 'lq_brush', 'lq_ink_bleed', 'lq_chalk', 'lq_hatching'],
      cd_canvas_texture: ['ct_watercolor', 'ct_kraft', 'ct_parchment', 'ct_paper_texture', 'ct_crumpled']
    }
  },
  {
    id: 'painting_cel_animation',
    label: '绘画：赛璐璐动画',
    labelEn: 'Painting: Cel Animation',
    brief: '赛璐璐平涂、硬边阴影、干净轮廓和动画设定感。',
    briefEn: 'Cel flat colors, hard-edged shadows, clean contours, and animation design feel.',
    mediumCategory: 'PAINTING',
    mode: 'STRICT',
    soulBlocks: paintingSoulBlocks,
    qualityBlocks: paintingQualityBlocks,
    paletteKeys: ['动画', '平涂', '明亮', '干净'],
    profileTarget: {
      medium: ['painting', 'digital'],
      cleanliness: ['clean', 'pristine'],
      contrast: ['medium', 'high'],
      saturation: ['medium', 'high'],
      era: ['vintage', 'modern'],
      distortion: ['none'],
      noise: ['none', 'fine']
    },
    prefer: {
      cd_anim_director: ['ref_ghibli', 'ref_takahata', 'ref_kon', 'ref_anno', 'ref_oshii', 'ref_trigger', 'ref_shinkai'],
      cd_art_movement: ['ref_tezuka', 'ref_toriyama', 'ref_persona', 'ref_vector_flat_editorial', 'ref_moebius'],
      cd_art_style: ['art_pop_art', 'art_ukiyo_e', 'art_art_nouveau', 'art_constructivism'],
      cd_art_medium: ['am_cel', 'am_digital', 'am_gouache', 'am_marker', 'am_vector'],
      cd_line_quality: ['lq_clean', 'lq_thin', 'lq_thick', 'lq_smooth', 'lq_vector'],
      cd_canvas_texture: ['ct_smooth', 'ct_paper_texture', 'ct_halftone']
    }
  },
  {
    id: 'painting_classical_oil',
    label: '绘画：古典油画',
    labelEn: 'Painting: Classical Oil',
    brief: '古典油画、画布肌理、厚重明暗和肖像体积。',
    briefEn: 'Classical oil paint, canvas texture, heavy chiaroscuro, and portrait volume.',
    mediumCategory: 'PAINTING',
    mode: 'STRICT',
    soulBlocks: paintingSoulBlocks,
    qualityBlocks: paintingQualityBlocks,
    paletteKeys: ['油画', '古典', '暗色', '厚重'],
    profileTarget: {
      medium: ['painting'],
      cleanliness: ['organic'],
      contrast: ['medium', 'high'],
      saturation: ['low', 'medium'],
      era: ['vintage', 'timeless'],
      distortion: ['none', 'mild'],
      noise: ['fine', 'medium']
    },
    prefer: {
      cd_anim_director: ['ref_takahata', 'ref_cartoon_saloon'],
      cd_art_movement: ['ref_james_gurney', 'ref_brom', 'ref_frazetta', 'ref_rockwell', 'ref_beksinski'],
      cd_art_style: ['art_baroque', 'art_romanticism', 'art_realism', 'art_pre_raphaelite', 'art_symbolism'],
      cd_art_medium: ['am_oil', 'am_impasto', 'am_acrylic', 'am_charcoal'],
      cd_line_quality: ['lq_no_line', 'lq_brush', 'lq_hatching', 'lq_thin'],
      cd_canvas_texture: ['ct_canvas', 'ct_wood', 'ct_stone', 'ct_fabric']
    }
  },
  {
    id: 'painting_experimental_collage',
    label: '绘画：实验拼贴',
    labelEn: 'Painting: Experimental Collage',
    brief: '拼贴层、污迹纸面、断裂线条和实验印刷表层。',
    briefEn: 'Collage layers, stained paper, broken lines, and experimental print surface.',
    mediumCategory: 'PAINTING',
    mode: 'DRIFT',
    soulBlocks: paintingSoulBlocks,
    qualityBlocks: paintingQualityBlocks,
    paletteKeys: ['拼贴', '实验', '污染', '印刷'],
    profileTarget: {
      medium: ['painting', 'print', 'mixed'],
      cleanliness: ['dirty', 'damaged', 'experimental', 'organic'],
      contrast: ['medium', 'high', 'extreme'],
      saturation: ['low', 'medium', 'shifted'],
      era: ['vintage', 'modern', 'timeless'],
      distortion: ['mild', 'strong'],
      noise: ['medium', 'heavy']
    },
    prefer: {
      cd_anim_director: ['ref_yuasa', 'ref_kon', 'ref_hertzfeldt', 'ref_cyriak', 'ref_felix_colgrave'],
      cd_art_movement: ['ref_dave_mckean', 'ref_sienkiewicz', 'ref_risograph_zine', 'ref_screenprint_poster', 'ref_jamie_hewlett', 'ref_basquiat'],
      cd_art_style: ['art_dada', 'art_surrealism', 'art_fluxus', 'art_neo_expressionism', 'art_postmodernism', 'art_glitch'],
      cd_art_medium: ['am_collage', 'am_cutout', 'am_mixed', 'am_spray', 'am_charcoal'],
      cd_line_quality: ['lq_jitter', 'lq_rough', 'lq_chalk', 'lq_ink_bleed', 'lq_thick'],
      cd_canvas_texture: ['ct_grunge', 'ct_noise', 'ct_halftone', 'ct_crumpled', 'ct_cardboard']
    }
  },
  {
    id: 'painting_vector_poster',
    label: '绘画：矢量海报',
    labelEn: 'Painting: Vector Poster',
    brief: '矢量边缘、平面色块、海报构成和高识别图形。',
    briefEn: 'Vector edges, flat color planes, poster composition, and high-recognition graphics.',
    mediumCategory: 'PAINTING',
    mode: 'STRICT',
    soulBlocks: paintingSoulBlocks,
    qualityBlocks: paintingQualityBlocks,
    paletteKeys: ['海报', '矢量', '平面', '高反差'],
    profileTarget: {
      medium: ['painting', 'digital', 'print'],
      cleanliness: ['pristine', 'clean'],
      contrast: ['high', 'extreme'],
      saturation: ['medium', 'high'],
      era: ['modern'],
      distortion: ['none'],
      noise: ['none', 'fine']
    },
    prefer: {
      cd_anim_director: ['ref_trigger', 'ref_cartoon_saloon', 'ref_spiderverse'],
      cd_art_movement: ['ref_screenprint_poster', 'ref_vector_flat_editorial', 'ref_noma_bar', 'ref_malika_favre', 'ref_christoph_niemann'],
      cd_art_style: ['art_constructivism', 'art_bauhaus', 'art_pop_art', 'art_art_deco', 'art_minimalism'],
      cd_art_medium: ['am_vector', 'am_cel', 'am_marker', 'am_gouache'],
      cd_line_quality: ['lq_vector', 'lq_clean', 'lq_thick', 'lq_smooth'],
      cd_canvas_texture: ['ct_smooth', 'ct_halftone', 'ct_screen']
    }
  },
  {
    id: 'painting_pixel_lowres',
    label: '绘画：像素低清',
    labelEn: 'Painting: Pixel Low-Res',
    brief: '像素格点、有限色板、低清数字边缘和复古压缩感。',
    briefEn: 'Pixel grid, limited palette, low-res digital edges, and retro compression feel.',
    mediumCategory: 'PAINTING',
    mode: 'STRICT',
    soulBlocks: paintingSoulBlocks,
    qualityBlocks: paintingQualityBlocks,
    paletteKeys: ['像素', '低清', '复古', '数字'],
    profileTarget: {
      medium: ['painting', 'digital'],
      cleanliness: ['clean', 'experimental'],
      contrast: ['medium', 'high'],
      saturation: ['medium', 'high', 'shifted'],
      era: ['vintage', 'modern'],
      distortion: ['strong', 'glitch'],
      noise: ['none', 'glitch']
    },
    prefer: {
      cd_anim_director: ['ref_hertzfeldt', 'ref_cyriak', 'ref_felix_colgrave', 'ref_ena'],
      cd_art_movement: ['ref_persona', 'ref_disco_elysium', 'ref_hades', 'ref_monument_valley', 'ref_vector_flat_editorial'],
      cd_art_style: ['art_digital', 'art_glitch', 'art_postmodernism', 'art_pop_art'],
      cd_art_medium: ['am_pixel', 'am_vector', 'am_digital', 'am_cel'],
      cd_line_quality: ['lq_vector', 'lq_thick', 'lq_dotted', 'lq_clean'],
      cd_canvas_texture: ['ct_smooth', 'ct_noise', 'ct_halftone', 'ct_screen']
    }
  },
  {
    id: 'cgi_realist_asset',
    label: 'CGI：写实资产',
    labelEn: 'CGI: Realist Asset',
    brief: '写实资产、PBR材质、路径追踪和数字人/生物细节。',
    briefEn: 'Realist assets, PBR materials, path tracing, and digital human/creature detail.',
    mediumCategory: 'CGI',
    mode: 'STRICT',
    soulBlocks: cgiSoulBlocks,
    qualityBlocks: [],
    paletteKeys: ['数字', '渲染', '冷', '商业'],
    profileTarget: {
      medium: ['cgi', 'digital'],
      cleanliness: ['pristine', 'clean'],
      contrast: ['medium', 'high'],
      saturation: ['medium', 'high'],
      era: ['modern', 'future'],
      distortion: ['none', 'mild'],
      noise: ['none', 'fine']
    },
    prefer: {
      cd_media_cgi_soul: ['metahuman', 'the_last_of_us', 'god_of_war', 'horizon_zero_dawn', 'death_stranding', 'avatar', 'dune_vfx', 'jurassic_park', 'planet_of_the_apes']
    }
  },
  {
    id: 'cgi_stylized_animation',
    label: 'CGI：风格动画',
    labelEn: 'CGI: Stylized Animation',
    brief: '风格化3D、卡渲/手绘Shader、动画表情和清晰体块。',
    briefEn: 'Stylized 3D, toon/painterly shaders, animated expression, and readable forms.',
    mediumCategory: 'CGI',
    mode: 'STRICT',
    soulBlocks: cgiSoulBlocks,
    qualityBlocks: [],
    paletteKeys: ['动画', '明亮', '图形', '清洁'],
    profileTarget: {
      medium: ['cgi', 'digital'],
      cleanliness: ['pristine', 'clean'],
      contrast: ['medium', 'high'],
      saturation: ['medium', 'high'],
      era: ['modern'],
      distortion: ['none', 'mild'],
      noise: ['none', 'fine']
    },
    prefer: {
      cd_media_cgi_soul: ['pixar', 'dreamworks', 'disney_3d', 'illumination', 'sony_animation', 'blue_sky', 'laika_cgi', 'arcane', 'spiderverse', 'tmnt_mutant_mayhem', 'guilty_gear', 'genshin_impact']
    }
  },
  {
    id: 'cgi_retro_glitch',
    label: 'CGI：复古故障',
    labelEn: 'CGI: Retro Glitch',
    brief: '低模、体素、像素化表面和数字渲染故障。',
    briefEn: 'Low-poly, voxel forms, pixelated surfaces, and digital render glitches.',
    mediumCategory: 'CGI',
    mode: 'STRICT',
    soulBlocks: cgiSoulBlocks,
    qualityBlocks: [],
    paletteKeys: ['故障', '像素', '复古', '数字'],
    profileTarget: {
      medium: ['cgi', 'digital'],
      cleanliness: ['dirty', 'damaged', 'experimental'],
      contrast: ['medium', 'high'],
      saturation: ['low', 'high', 'shifted'],
      era: ['vintage', 'modern', 'future'],
      distortion: ['strong', 'glitch'],
      noise: ['medium', 'heavy', 'glitch']
    },
    prefer: {
      cd_media_cgi_soul: ['ps1_low_poly', 'minecraft', 'roblox', 'vaporwave_3d', 'abstract_motion_cg', 'nvidia_rtx_demo']
    }
  },
  {
    id: 'tangible_handmade_soft',
    label: '实体：手作柔性',
    labelEn: 'Tangible: Handmade Soft',
    brief: '黏土、毛毡、布偶、纸艺与手作柔性材质。',
    briefEn: 'Clay, felt, fabric dolls, paper craft, and soft handmade materials.',
    mediumCategory: 'TANGIBLE',
    mode: 'STRICT',
    soulBlocks: tangibleSoulBlocks,
    qualityBlocks: [],
    paletteKeys: ['手作', '旧物', '纸', '柔和'],
    profileTarget: {
      medium: ['tangible'],
      cleanliness: ['clean', 'organic'],
      contrast: ['low', 'medium'],
      saturation: ['low', 'medium'],
      era: ['vintage', 'modern', 'timeless'],
      distortion: ['none', 'mild'],
      noise: ['fine', 'medium']
    },
    prefer: {
      cd_media_tangible_soul: ['clay_stop_motion_puppet', 'felt_handmade_doll', 'stitched_fabric_doll', 'paper_craft_model', 'wood_carved_figure']
    }
  },
  {
    id: 'tangible_model_sfx',
    label: '实体：模型特效',
    labelEn: 'Tangible: Model SFX',
    brief: '树脂手办、雕塑小样、金属微缩和实体特效假体。',
    briefEn: 'Resin figures, maquettes, metal miniatures, and practical SFX prosthetics.',
    mediumCategory: 'TANGIBLE',
    mode: 'STRICT',
    soulBlocks: tangibleSoulBlocks,
    qualityBlocks: [],
    paletteKeys: ['雕塑', '金属', '树脂', '旧化'],
    profileTarget: {
      medium: ['tangible'],
      cleanliness: ['clean', 'organic', 'dirty'],
      contrast: ['medium', 'high'],
      saturation: ['low', 'medium'],
      era: ['modern', 'timeless'],
      distortion: ['none', 'mild'],
      noise: ['fine', 'medium']
    },
    prefer: {
      cd_media_tangible_soul: ['resin_collectible_figure', 'painted_action_figure', 'concept_maquette_sculpture', 'bronze_or_plaster_statue', 'ceramic_glazed_figure', 'metal_mechanical_miniature', 'practical_sfx_prosthetic']
    }
  },
  {
    id: 'fusion_experimental_polluted',
    label: '融合：实验污染',
    labelEn: 'Fusion: Experimental Polluted',
    brief: '跨媒介污染、故障、拼贴、低保真与超现实漂移。',
    briefEn: 'Cross-media pollution, glitches, collage, lo-fi surfaces, and surreal drift.',
    mediumCategory: 'ALL',
    mode: 'DRIFT',
    soulBlocks: [...photoSoulBlocks, ...paintingSoulBlocks, ...cgiSoulBlocks, ...tangibleSoulBlocks],
    qualityBlocks: [...photoQualityBlocks, ...paintingQualityBlocks],
    paletteKeys: ['故障', '达达', '超现实', '污染', '黑', '霓虹'],
    allowBlocks: ['cd_framing_lens_fx'],
    profileTarget: {
      medium: ['film', 'digital', 'video', 'painting', 'print', 'cgi', 'tangible', 'mixed'],
      cleanliness: ['dirty', 'damaged', 'experimental', 'organic'],
      contrast: ['medium', 'high', 'extreme'],
      saturation: ['low', 'high', 'shifted', 'mono'],
      era: ['vintage', 'modern', 'future', 'timeless'],
      distortion: ['mild', 'strong', 'glitch'],
      noise: ['medium', 'heavy', 'glitch']
    },
    prefer: {
      cd_director_style: ['aut_lanthimos', 'aut_guillermo', 'aut_bunuel', 'aut_parajanov', 'aut_daniels', 'aut_almodovar'],
      cd_photo_style: ['pho_glitch_digital', 'pho_surveillance', 'pho_infra_red', 'pho_lofi_vhs', 'pho_surreal_art', 'pho_double_exp'],
      cd_anim_director: ['ref_kon', 'ref_yuasa', 'ref_oshii', 'ref_anno', 'ref_trigger', 'ref_hertzfeldt', 'ref_cyriak', 'ref_felix_colgrave', 'ref_ena'],
      cd_art_movement: ['ref_dave_mckean', 'ref_sienkiewicz', 'ref_risograph_zine', 'ref_screenprint_poster', 'ref_jamie_hewlett', 'ref_basquiat'],
      cd_art_style: ['art_dada', 'art_surrealism', 'art_metaphysical', 'art_fluxus', 'art_glitch', 'art_neo_expressionism', 'art_postmodernism'],
      cd_media_cgi_soul: ['ps1_low_poly', 'vaporwave_3d', 'abstract_motion_cg', 'nvidia_rtx_demo', 'roblox'],
      cd_media_tangible_soul: ['clay', 'puppet', 'maquette', 'miniature', 'paper', 'felt'],
      cd_camera_system: ['cam_vhs_camcorder', 'cam_cctv', 'cam_polaroid_sx70', 'cam_gopro', 'cam_bolex_h16'],
      cd_lens_series: ['lens_fisheye', 'lens_petzval', 'lens_helios_44', 'lens_lomo_anamorphic', 'lens_laowa_probe'],
      cd_optical_format: ['fmt_16mm', 'fmt_action', 'fmt_academy', 'fmt_anamorphic'],
      cd_texture_render: ['tx_r_lofi', 'tx_r_pixel_glitch', 'tx_r_compression', 'tx_r_distressed', 'tx_r_faded', 'tx_r_stark'],
      cd_physical_grain: ['gr_static', 'gr_vhs', 'gr_macroblock', 'gr_dust', 'gr_8mm', 'gr_iso3200'],
      cd_base_tone: ['dp_cross', 'dp_y2k_digi', 'dp_stark', 'dp_high_key', 'dp_bleach'],
      cd_color_science: ['cs_lomochrome', 'cs_aerochrome', 'cs_polaroid', 'cs_cinestill_800t', 'cs_rec709'],
      cd_art_medium: ['am_collage', 'am_mixed', 'am_pixel', 'am_spray', 'am_charcoal'],
      cd_line_quality: ['lq_jitter', 'lq_rough', 'lq_chalk', 'lq_ink_bleed', 'lq_thick'],
      cd_canvas_texture: ['ct_grunge', 'ct_noise', 'ct_halftone', 'ct_crumpled', 'ct_cardboard'],
      cd_framing_lens_fx: ['ofx_fisheye', 'ofx_anaglyph', 'ofx_dust_scratch', 'ofx_light_leak', 'ofx_prism_tri', 'ofx_color_shift']
    }
  }
];
