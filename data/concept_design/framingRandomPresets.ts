export type FramingRandomPresetCategory =
  | 'SUBJECT'
  | 'PORTRAIT'
  | 'SPACE'
  | 'ACTION'
  | 'FASHION'
  | 'DOCUMENTARY'
  | 'OBJECT'
  | 'EXPERIMENT';

export type FramingRandomPreset = {
  id: string;
  label: string;
  labelEn: string;
  brief: string;
  briefEn: string;
  category: FramingRandomPresetCategory;
  requiredBlocks: string[];
  optionalBlocks: string[];
  prefer: Record<string, string[]>;
  allowExtreme?: boolean;
  allowMultiSubject?: boolean;
  allowOpticalFx?: boolean;
};

const eyeBlocks = {
  focus: 'cd_framing_focus',
  shot: 'cd_framing_shot_size',
  balance: 'cd_framing_balance',
  perspective: 'cd_framing_perspective',
  angle: 'cd_framing_angle',
  focal: 'cd_framing_focal_length',
  depth: 'cd_framing_depth',
  shutter: 'cd_framing_shutter',
  fx: 'cd_framing_lens_fx'
};

export const FRAMING_RANDOM_PRESETS: FramingRandomPreset[] = [
  {
    id: 'fr_subject_clear',
    label: '主体清晰',
    labelEn: 'Clear Subject',
    brief: '完整角色画面的安全默认：主体清楚、比例稳定、环境不过度抢戏。',
    briefEn: 'Safe default for complete character images: readable subject, stable proportion, restrained environment.',
    category: 'SUBJECT',
    requiredBlocks: [eyeBlocks.focus, eyeBlocks.shot, eyeBlocks.angle],
    optionalBlocks: [eyeBlocks.balance, eyeBlocks.focal, eyeBlocks.depth, eyeBlocks.perspective],
    prefer: {
      cd_framing_focus: ['focus_full_body', 'focus_upper_body', 'focus_environmental'],
      cd_framing_shot_size: ['shot_ms', 'shot_cowboy', 'shot_fs'],
      cd_framing_balance: ['bal_center', 'bal_thirds', 'bal_diag', 'bal_asym'],
      cd_framing_perspective: ['per_flat', 'per_one_point', 'per_two_point'],
      cd_framing_angle: ['ang_eye', 'ang_slight_high', 'ang_low', 'ang_clean_single'],
      cd_framing_focal_length: ['fl_35mm', 'fl_50mm', 'fl_85mm'],
      cd_framing_depth: ['dof_medium', 'dof_deep', 'dof_shallow']
    }
  },
  {
    id: 'fr_portrait_pressure',
    label: '肖像压迫',
    labelEn: 'Portrait Pressure',
    brief: '脸、眼神、手和上半身成为第一阅读，适合情绪和身份确认。',
    briefEn: 'Face, gaze, hands, and upper body become the first read; suited to emotion and identity confirmation.',
    category: 'PORTRAIT',
    requiredBlocks: [eyeBlocks.focus, eyeBlocks.shot, eyeBlocks.depth],
    optionalBlocks: [eyeBlocks.angle, eyeBlocks.focal, eyeBlocks.balance, eyeBlocks.fx],
    prefer: {
      cd_framing_focus: ['focus_face', 'focus_upper_body', 'focus_body_detail'],
      cd_framing_shot_size: ['shot_cu', 'shot_mcu', 'shot_ecu'],
      cd_framing_balance: ['bal_center', 'bal_short', 'bal_neg_min', 'bal_lead'],
      cd_framing_angle: ['ang_eye', 'ang_slight_high', 'ang_clean_single'],
      cd_framing_focal_length: ['fl_50mm', 'fl_85mm', 'fl_100mm'],
      cd_framing_depth: ['dof_shallow', 'dof_bokeh', 'dof_razor', 'dof_foreground_blur'],
      cd_framing_lens_fx: ['ofx_clean', 'ofx_diff_18', 'ofx_diff_14', 'ofx_velvet']
    },
    allowOpticalFx: true
  },
  {
    id: 'fr_spatial_pressure',
    label: '空间压迫',
    labelEn: 'Spatial Pressure',
    brief: '场域、建筑、地貌或巨构压向主体，适合神殿、城市、废墟和史诗空间。',
    briefEn: 'Field, architecture, terrain, or megastructure presses toward the subject; suited to temples, cities, ruins, and epic space.',
    category: 'SPACE',
    requiredBlocks: [eyeBlocks.focus, eyeBlocks.shot, eyeBlocks.perspective],
    optionalBlocks: [eyeBlocks.angle, eyeBlocks.balance, eyeBlocks.focal, eyeBlocks.depth],
    prefer: {
      cd_framing_focus: ['focus_environmental', 'focus_scene_pressure', 'focus_pattern'],
      cd_framing_shot_size: ['shot_ws', 'shot_fs', 'shot_xls'],
      cd_framing_balance: ['bal_sym', 'bal_frame', 'bal_diag', 'bal_neg_over'],
      cd_framing_perspective: ['per_one_point', 'per_three_point', 'per_atmospheric', 'per_two_point'],
      cd_framing_angle: ['ang_low', 'ang_worm', 'ang_high', 'ang_eye'],
      cd_framing_focal_length: ['fl_ultra_wide', 'fl_wide', 'fl_35mm'],
      cd_framing_depth: ['dof_deep', 'dof_medium']
    }
  },
  {
    id: 'fr_action_moment',
    label: '动作瞬间',
    labelEn: 'Action Moment',
    brief: '动作、冲击、奔跑、抓握或转身成为取景目标，保留方向和动势。',
    briefEn: 'Action, impact, running, grabbing, or turning becomes the framing goal while preserving direction and motion.',
    category: 'ACTION',
    requiredBlocks: [eyeBlocks.focus, eyeBlocks.shot, eyeBlocks.shutter],
    optionalBlocks: [eyeBlocks.balance, eyeBlocks.angle, eyeBlocks.focal, eyeBlocks.depth],
    prefer: {
      cd_framing_focus: ['focus_action', 'focus_relation', 'focus_full_body'],
      cd_framing_shot_size: ['shot_ms', 'shot_cowboy', 'shot_fs', 'shot_ws'],
      cd_framing_balance: ['bal_diag', 'bal_lead', 'bal_asym', 'bal_chaos'],
      cd_framing_perspective: ['per_foreshortening', 'per_one_point', 'per_two_point'],
      cd_framing_angle: ['ang_low', 'ang_eye', 'ang_dutch', 'ang_pov'],
      cd_framing_focal_length: ['fl_wide', 'fl_35mm', 'fl_50mm'],
      cd_framing_depth: ['dof_medium', 'dof_deep', 'dof_foreground_blur'],
      cd_framing_shutter: ['sht_fast', 'sht_std', 'sht_slow', 'sht_drag']
    }
  },
  {
    id: 'fr_fashion_editorial',
    label: '时尚编辑',
    labelEn: 'Fashion Editorial',
    brief: '身体线条、服装轮廓、封面留白和被观看压力优先。',
    briefEn: 'Body line, garment silhouette, cover whitespace, and viewing pressure come first.',
    category: 'FASHION',
    requiredBlocks: [eyeBlocks.focus, eyeBlocks.shot, eyeBlocks.balance],
    optionalBlocks: [eyeBlocks.angle, eyeBlocks.focal, eyeBlocks.depth, eyeBlocks.fx],
    prefer: {
      cd_framing_focus: ['focus_upper_body', 'focus_full_body', 'focus_material', 'focus_face'],
      cd_framing_shot_size: ['shot_mcu', 'shot_ms', 'shot_fs', 'shot_cowboy'],
      cd_framing_balance: ['bal_neg_bal', 'bal_neg_over', 'bal_center', 'bal_asym'],
      cd_framing_perspective: ['per_flat', 'per_two_point', 'per_foreshortening'],
      cd_framing_angle: ['ang_low', 'ang_eye', 'ang_slight_high', 'ang_clean_single'],
      cd_framing_focal_length: ['fl_85mm', 'fl_135mm', 'fl_50mm', 'fl_35mm'],
      cd_framing_depth: ['dof_shallow', 'dof_bokeh', 'dof_medium'],
      cd_framing_lens_fx: ['ofx_clean', 'ofx_diff_18', 'ofx_diff_14', 'ofx_prism_ref', 'ofx_star_4']
    },
    allowOpticalFx: true
  },
  {
    id: 'fr_documentary_street',
    label: '纪实街拍',
    labelEn: 'Documentary Street',
    brief: '街边、路口、车旁和生活现场的可信观看，不追求过度造型。',
    briefEn: 'Credible viewing for streetsides, crossings, car-side moments, and lived locations without over-styling.',
    category: 'DOCUMENTARY',
    requiredBlocks: [eyeBlocks.focus, eyeBlocks.shot, eyeBlocks.focal],
    optionalBlocks: [eyeBlocks.angle, eyeBlocks.balance, eyeBlocks.depth, eyeBlocks.shutter, eyeBlocks.fx],
    prefer: {
      cd_framing_focus: ['focus_environmental', 'focus_action', 'focus_relation', 'focus_upper_body'],
      cd_framing_shot_size: ['shot_ms', 'shot_mcu', 'shot_fs', 'shot_ws'],
      cd_framing_balance: ['bal_thirds', 'bal_left', 'bal_right', 'bal_lead', 'bal_asym'],
      cd_framing_perspective: ['per_one_point', 'per_two_point', 'per_atmospheric'],
      cd_framing_angle: ['ang_eye', 'ang_slight_high', 'ang_clean_single'],
      cd_framing_focal_length: ['fl_35mm', 'fl_wide', 'fl_50mm'],
      cd_framing_depth: ['dof_medium', 'dof_deep', 'dof_shallow'],
      cd_framing_shutter: ['sht_std', 'sht_fast', 'sht_slow'],
      cd_framing_lens_fx: ['ofx_clean', 'ofx_std_coat', 'ofx_dust_scratch', 'ofx_light_leak']
    },
    allowOpticalFx: true
  },
  {
    id: 'fr_object_evidence',
    label: '物件证据',
    labelEn: 'Object Evidence',
    brief: '道具、材料、手部和局部工艺成为核心证据。',
    briefEn: 'Props, material, hands, and craft details become the core evidence.',
    category: 'OBJECT',
    requiredBlocks: [eyeBlocks.focus, eyeBlocks.shot, eyeBlocks.depth],
    optionalBlocks: [eyeBlocks.focal, eyeBlocks.balance, eyeBlocks.angle, eyeBlocks.fx],
    prefer: {
      cd_framing_focus: ['focus_prop', 'focus_material', 'focus_body_detail'],
      cd_framing_shot_size: ['shot_macro', 'shot_ecu', 'shot_cu', 'shot_mcu'],
      cd_framing_balance: ['bal_center', 'bal_neg_min', 'bal_frame', 'bal_tri'],
      cd_framing_perspective: ['per_flat', 'per_forced', 'per_foreshortening'],
      cd_framing_angle: ['ang_eye', 'ang_topdown', 'ang_slight_high'],
      cd_framing_focal_length: ['fl_100mm', 'fl_85mm', 'fl_50mm'],
      cd_framing_depth: ['dof_shallow', 'dof_razor', 'dof_bokeh', 'dof_medium'],
      cd_framing_lens_fx: ['ofx_clean', 'ofx_std_coat', 'ofx_diff_18']
    },
    allowOpticalFx: true
  },
  {
    id: 'fr_abstract_experiment',
    label: '抽象实验',
    labelEn: 'Abstract Experiment',
    brief: '允许鱼眼、斜角、折射、色散和不稳定构图，只用于明确实验目标。',
    briefEn: 'Allows fisheye, dutch angle, refraction, color split, and unstable framing for explicit experiments.',
    category: 'EXPERIMENT',
    requiredBlocks: [eyeBlocks.focus, eyeBlocks.balance],
    optionalBlocks: [eyeBlocks.perspective, eyeBlocks.angle, eyeBlocks.focal, eyeBlocks.depth, eyeBlocks.shutter, eyeBlocks.fx],
    prefer: {
      cd_framing_focus: ['focus_abstract', 'focus_pattern', 'focus_material', 'focus_relation'],
      cd_framing_shot_size: ['shot_ecu', 'shot_cu', 'shot_ws', 'shot_xls'],
      cd_framing_balance: ['bal_chaos', 'bal_max', 'bal_neg_over', 'bal_diag', 'bal_sym'],
      cd_framing_perspective: ['per_fisheye', 'per_curvilinear', 'per_forced', 'per_foreshortening'],
      cd_framing_angle: ['ang_dutch', 'ang_pov', 'ang_topdown', 'ang_worm'],
      cd_framing_focal_length: ['fl_fisheye', 'fl_ultra_wide', 'fl_100mm', 'fl_super_tele'],
      cd_framing_depth: ['dof_razor', 'dof_split', 'dof_foreground_blur', 'dof_deep'],
      cd_framing_shutter: ['sht_drag', 'sht_long', 'sht_strobe_freeze'],
      cd_framing_lens_fx: ['ofx_fisheye', 'ofx_anaglyph', 'ofx_prism_tri', 'ofx_kaleido', 'ofx_fractal', 'ofx_color_shift', 'ofx_double_exp']
    },
    allowExtreme: true,
    allowMultiSubject: true,
    allowOpticalFx: true
  }
];
