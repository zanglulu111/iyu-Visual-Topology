export type VisualStylePhysicalMedium =
  | 'film'
  | 'digital'
  | 'video'
  | 'painting'
  | 'print'
  | 'cgi'
  | 'tangible'
  | 'mixed';

export type VisualStyleCleanliness = 'pristine' | 'clean' | 'organic' | 'dirty' | 'damaged' | 'experimental';
export type VisualStyleContrast = 'low' | 'medium' | 'high' | 'extreme';
export type VisualStyleSaturation = 'mono' | 'low' | 'medium' | 'high' | 'shifted';
export type VisualStyleEra = 'vintage' | 'modern' | 'future' | 'timeless';
export type VisualStyleDistortion = 'none' | 'mild' | 'strong' | 'glitch';
export type VisualStyleNoise = 'none' | 'fine' | 'medium' | 'heavy' | 'glitch';

export type VisualStyleItemProfile = {
  medium?: VisualStylePhysicalMedium[];
  cleanliness?: VisualStyleCleanliness[];
  contrast?: VisualStyleContrast[];
  saturation?: VisualStyleSaturation[];
  era?: VisualStyleEra[];
  distortion?: VisualStyleDistortion[];
  noise?: VisualStyleNoise[];
};

export type VisualStyleProfileTarget = {
  medium?: VisualStylePhysicalMedium[];
  cleanliness?: VisualStyleCleanliness[];
  contrast?: VisualStyleContrast[];
  saturation?: VisualStyleSaturation[];
  era?: VisualStyleEra[];
  distortion?: VisualStyleDistortion[];
  noise?: VisualStyleNoise[];
};

type VisualStyleProfileAxis = keyof VisualStyleItemProfile;
export type VisualStyleRandomModeForProfile = 'STRICT' | 'DRIFT';

const cgiClean: VisualStyleItemProfile = { medium: ['cgi', 'digital'], cleanliness: ['pristine', 'clean'], contrast: ['medium', 'high'], saturation: ['medium', 'high'], era: ['modern', 'future'], distortion: ['none', 'mild'], noise: ['none', 'fine'] };
const cgiOrganicReal: VisualStyleItemProfile = { medium: ['cgi', 'digital'], cleanliness: ['clean', 'organic', 'dirty'], contrast: ['medium', 'high'], saturation: ['low', 'medium'], era: ['modern', 'future'], distortion: ['none', 'mild'], noise: ['none', 'fine', 'medium'] };
const cgiStylized: VisualStyleItemProfile = { medium: ['cgi', 'digital'], cleanliness: ['pristine', 'clean'], contrast: ['medium', 'high'], saturation: ['medium', 'high'], era: ['modern'], distortion: ['none', 'mild'], noise: ['none', 'fine'] };
const cgiDarkGame: VisualStyleItemProfile = { medium: ['cgi', 'digital'], cleanliness: ['clean', 'organic', 'dirty'], contrast: ['medium', 'high'], saturation: ['low', 'medium'], era: ['modern', 'future'], distortion: ['none', 'mild'], noise: ['fine', 'medium'] };
const cgiRetro: VisualStyleItemProfile = { medium: ['cgi', 'digital'], cleanliness: ['clean', 'experimental', 'dirty', 'damaged'], contrast: ['medium', 'high'], saturation: ['low', 'high', 'shifted'], era: ['vintage', 'modern', 'future'], distortion: ['strong', 'glitch'], noise: ['medium', 'heavy', 'glitch'] };
const cgiNpr: VisualStyleItemProfile = { medium: ['cgi', 'digital'], cleanliness: ['clean', 'experimental'], contrast: ['medium', 'high'], saturation: ['medium', 'high', 'shifted'], era: ['modern'], distortion: ['none', 'mild', 'strong'], noise: ['none', 'fine', 'medium'] };
const tangibleSoft: VisualStyleItemProfile = { medium: ['tangible'], cleanliness: ['clean', 'organic'], contrast: ['low', 'medium'], saturation: ['low', 'medium'], era: ['vintage', 'modern', 'timeless'], distortion: ['none', 'mild'], noise: ['fine', 'medium'] };
const tangibleModel: VisualStyleItemProfile = { medium: ['tangible'], cleanliness: ['clean', 'organic', 'dirty'], contrast: ['medium', 'high'], saturation: ['low', 'medium'], era: ['modern', 'timeless'], distortion: ['none', 'mild'], noise: ['fine', 'medium'] };
const tangibleHardClean: VisualStyleItemProfile = { medium: ['tangible'], cleanliness: ['clean'], contrast: ['medium', 'high'], saturation: ['low', 'medium'], era: ['modern', 'timeless'], distortion: ['none', 'mild'], noise: ['none', 'fine'] };

export const VISUAL_STYLE_ITEM_PROFILES: Record<string, VisualStyleItemProfile> = {
  dp_neutral: { medium: ['digital', 'film'], cleanliness: ['clean'], contrast: ['medium'], saturation: ['medium'], era: ['modern', 'timeless'], distortion: ['none'], noise: ['none', 'fine'] },
  dp_vivid: { medium: ['digital'], cleanliness: ['pristine', 'clean'], contrast: ['high'], saturation: ['high'], era: ['modern'], distortion: ['none'], noise: ['none'] },
  dp_log: { medium: ['digital'], cleanliness: ['clean'], contrast: ['low'], saturation: ['low'], era: ['modern', 'future'], distortion: ['none'], noise: ['none', 'fine'] },
  dp_technicolor: { medium: ['film'], cleanliness: ['clean'], contrast: ['high'], saturation: ['high'], era: ['vintage', 'timeless'], distortion: ['mild'], noise: ['fine', 'medium'] },
  dp_90s_cine: { medium: ['film'], cleanliness: ['organic'], contrast: ['medium', 'high'], saturation: ['medium'], era: ['vintage', 'modern'], distortion: ['mild'], noise: ['fine', 'medium'] },
  dp_y2k_digi: { medium: ['digital', 'video'], cleanliness: ['clean', 'organic'], contrast: ['high'], saturation: ['medium', 'shifted'], era: ['vintage', 'modern'], distortion: ['mild'], noise: ['fine', 'medium'] },
  dp_naturalism: { medium: ['film', 'digital'], cleanliness: ['organic', 'clean'], contrast: ['medium'], saturation: ['low', 'medium'], era: ['modern', 'timeless'], distortion: ['none', 'mild'], noise: ['none', 'fine'] },
  dp_bleach: { medium: ['film', 'print'], cleanliness: ['dirty', 'organic'], contrast: ['extreme'], saturation: ['low', 'mono'], era: ['vintage', 'modern'], distortion: ['mild'], noise: ['medium', 'heavy'] },
  dp_soft_fade: { medium: ['film', 'digital', 'print'], cleanliness: ['organic'], contrast: ['low'], saturation: ['low'], era: ['vintage', 'modern'], distortion: ['mild'], noise: ['fine', 'medium'] },
  dp_mono_art: { medium: ['film', 'print', 'digital'], cleanliness: ['clean', 'organic'], contrast: ['high', 'extreme'], saturation: ['mono'], era: ['vintage', 'modern', 'timeless'], distortion: ['none', 'mild'], noise: ['fine', 'medium'] },
  dp_high_key: { medium: ['film', 'digital'], cleanliness: ['clean', 'organic'], contrast: ['low'], saturation: ['low', 'medium'], era: ['modern', 'timeless'], distortion: ['mild'], noise: ['none', 'fine'] },
  dp_stark: { medium: ['film', 'digital', 'print'], cleanliness: ['clean', 'dirty'], contrast: ['extreme'], saturation: ['mono', 'low'], era: ['modern', 'timeless'], distortion: ['none', 'mild'], noise: ['fine', 'medium'] },
  dp_muted_matte: { medium: ['digital', 'film'], cleanliness: ['clean', 'organic'], contrast: ['low', 'medium'], saturation: ['low'], era: ['modern'], distortion: ['none'], noise: ['none', 'fine'] },
  dp_hdr: { medium: ['digital'], cleanliness: ['pristine', 'clean'], contrast: ['low', 'medium'], saturation: ['high'], era: ['modern', 'future'], distortion: ['none'], noise: ['none'] },
  dp_cross: { medium: ['film', 'print'], cleanliness: ['organic', 'experimental'], contrast: ['high'], saturation: ['shifted', 'high'], era: ['vintage', 'modern'], distortion: ['mild', 'strong'], noise: ['fine', 'medium'] },

  cs_kodak_vision3: { medium: ['film'], cleanliness: ['organic', 'clean'], contrast: ['medium'], saturation: ['medium'], era: ['modern'], distortion: ['mild'], noise: ['fine'] },
  cs_portra_400: { medium: ['film'], cleanliness: ['organic', 'clean'], contrast: ['medium'], saturation: ['medium'], era: ['modern'], distortion: ['mild'], noise: ['fine'] },
  cs_ektachrome: { medium: ['film'], cleanliness: ['clean'], contrast: ['high'], saturation: ['high', 'shifted'], era: ['vintage', 'modern'], distortion: ['mild'], noise: ['fine'] },
  cs_kodachrome: { medium: ['film', 'print'], cleanliness: ['organic'], contrast: ['high'], saturation: ['medium', 'high'], era: ['vintage'], distortion: ['mild'], noise: ['fine', 'medium'] },
  cs_tri_x: { medium: ['film', 'print'], cleanliness: ['organic'], contrast: ['high'], saturation: ['mono'], era: ['vintage', 'modern'], distortion: ['mild'], noise: ['medium', 'heavy'] },
  cs_gold_200: { medium: ['film'], cleanliness: ['organic'], contrast: ['medium'], saturation: ['medium', 'high'], era: ['vintage', 'modern'], distortion: ['mild'], noise: ['fine', 'medium'] },
  cs_fuji_eterna: { medium: ['film'], cleanliness: ['organic', 'clean'], contrast: ['low', 'medium'], saturation: ['low'], era: ['modern'], distortion: ['mild'], noise: ['fine'] },
  cs_fuji_velvia: { medium: ['film'], cleanliness: ['clean'], contrast: ['high'], saturation: ['high'], era: ['vintage', 'modern'], distortion: ['mild'], noise: ['fine'] },
  cs_ilford_hp5: { medium: ['film', 'print'], cleanliness: ['organic'], contrast: ['medium', 'high'], saturation: ['mono'], era: ['vintage', 'modern'], distortion: ['mild'], noise: ['medium'] },
  cs_cinestill_800t: { medium: ['film'], cleanliness: ['organic', 'experimental'], contrast: ['medium', 'high'], saturation: ['shifted', 'medium'], era: ['modern'], distortion: ['mild'], noise: ['medium'] },
  cs_agfa_vista: { medium: ['film'], cleanliness: ['organic'], contrast: ['medium'], saturation: ['high'], era: ['vintage', 'modern'], distortion: ['mild'], noise: ['medium'] },
  cs_polaroid: { medium: ['film', 'print'], cleanliness: ['organic', 'dirty'], contrast: ['low', 'medium'], saturation: ['low', 'shifted'], era: ['vintage', 'modern'], distortion: ['mild', 'strong'], noise: ['medium'] },
  cs_technicolor: { medium: ['film', 'print'], cleanliness: ['clean'], contrast: ['high'], saturation: ['high'], era: ['vintage', 'timeless'], distortion: ['mild'], noise: ['fine'] },
  cs_lomochrome: { medium: ['film'], cleanliness: ['experimental'], contrast: ['medium', 'high'], saturation: ['shifted', 'high'], era: ['modern'], distortion: ['strong'], noise: ['medium'] },
  cs_aerochrome: { medium: ['film'], cleanliness: ['experimental'], contrast: ['high'], saturation: ['shifted', 'high'], era: ['vintage', 'modern'], distortion: ['strong'], noise: ['medium'] },
  cs_vision_500t: { medium: ['film'], cleanliness: ['organic'], contrast: ['medium', 'high'], saturation: ['medium'], era: ['modern'], distortion: ['mild'], noise: ['medium'] },
  cs_kodak_5247: { medium: ['film'], cleanliness: ['organic'], contrast: ['medium'], saturation: ['medium'], era: ['vintage'], distortion: ['mild'], noise: ['fine'] },
  cs_kodak_5254: { medium: ['film'], cleanliness: ['organic'], contrast: ['medium', 'high'], saturation: ['medium'], era: ['vintage'], distortion: ['mild'], noise: ['fine', 'medium'] },
  cs_kodak_5293: { medium: ['film'], cleanliness: ['organic', 'experimental'], contrast: ['high'], saturation: ['high', 'shifted'], era: ['vintage', 'modern'], distortion: ['mild'], noise: ['fine', 'medium'] },
  cs_kodak_5245: { medium: ['film'], cleanliness: ['clean'], contrast: ['medium', 'high'], saturation: ['high'], era: ['vintage'], distortion: ['none', 'mild'], noise: ['fine'] },
  cs_kodak_double_x: { medium: ['film', 'print'], cleanliness: ['organic'], contrast: ['high'], saturation: ['mono'], era: ['vintage', 'modern'], distortion: ['mild'], noise: ['medium'] },
  cs_kodak_plus_x: { medium: ['film', 'print'], cleanliness: ['organic'], contrast: ['medium'], saturation: ['mono'], era: ['vintage'], distortion: ['mild'], noise: ['fine', 'medium'] },
  cs_sovcolor: { medium: ['film'], cleanliness: ['organic'], contrast: ['low', 'medium'], saturation: ['low', 'shifted'], era: ['vintage'], distortion: ['mild'], noise: ['fine', 'medium'] },
  cs_redlogfilm: { medium: ['digital'], cleanliness: ['clean'], contrast: ['low'], saturation: ['low'], era: ['modern'], distortion: ['none'], noise: ['none', 'fine'] },
  cs_kodak_5279: { medium: ['film'], cleanliness: ['organic', 'clean'], contrast: ['high'], saturation: ['medium'], era: ['vintage', 'modern'], distortion: ['mild'], noise: ['fine'] },
  cs_kodak_5296: { medium: ['film'], cleanliness: ['clean'], contrast: ['high'], saturation: ['high'], era: ['vintage'], distortion: ['mild'], noise: ['fine'] },
  cs_red_ipp2: { medium: ['digital'], cleanliness: ['pristine', 'clean'], contrast: ['medium', 'high'], saturation: ['medium'], era: ['modern', 'future'], distortion: ['none'], noise: ['none', 'fine'] },
  cs_aces: { medium: ['digital', 'cgi'], cleanliness: ['pristine', 'clean'], contrast: ['medium'], saturation: ['medium'], era: ['modern', 'future'], distortion: ['none'], noise: ['none'] },
  cs_rec709: { medium: ['digital', 'video'], cleanliness: ['clean'], contrast: ['medium', 'high'], saturation: ['medium'], era: ['modern'], distortion: ['none', 'mild'], noise: ['none', 'fine'] },
  cs_hdr: { medium: ['digital', 'cgi'], cleanliness: ['pristine'], contrast: ['high'], saturation: ['high'], era: ['modern', 'future'], distortion: ['none'], noise: ['none'] },
  cs_dolby: { medium: ['digital'], cleanliness: ['pristine'], contrast: ['high'], saturation: ['high'], era: ['modern', 'future'], distortion: ['none'], noise: ['none'] },
  cs_sony_sgamut: { medium: ['digital'], cleanliness: ['clean'], contrast: ['medium'], saturation: ['medium', 'high'], era: ['modern'], distortion: ['none'], noise: ['none', 'fine'] },
  cs_arri_logc: { medium: ['digital'], cleanliness: ['clean'], contrast: ['low', 'medium'], saturation: ['low', 'medium'], era: ['modern'], distortion: ['none'], noise: ['none', 'fine'] },
  cs_canon_log: { medium: ['digital'], cleanliness: ['clean'], contrast: ['low', 'medium'], saturation: ['medium'], era: ['modern'], distortion: ['none'], noise: ['fine'] },
  cs_gopro_flat: { medium: ['digital', 'video'], cleanliness: ['clean'], contrast: ['low'], saturation: ['low', 'medium'], era: ['modern'], distortion: ['mild'], noise: ['fine', 'medium'] },

  tx_r_organic: { medium: ['film'], cleanliness: ['organic'], contrast: ['medium'], saturation: ['low', 'medium'], era: ['vintage', 'modern'], distortion: ['mild'], noise: ['fine', 'medium'] },
  tx_r_halation: { medium: ['film'], cleanliness: ['organic'], contrast: ['medium'], saturation: ['medium', 'shifted'], era: ['vintage', 'modern'], distortion: ['mild'], noise: ['fine'] },
  tx_r_diffusion: { medium: ['film', 'digital'], cleanliness: ['organic', 'clean'], contrast: ['low', 'medium'], saturation: ['low', 'medium'], era: ['vintage', 'modern'], distortion: ['mild'], noise: ['none', 'fine'] },
  tx_r_rolloff: { medium: ['film', 'digital'], cleanliness: ['clean', 'organic'], contrast: ['medium'], saturation: ['low', 'medium'], era: ['modern', 'timeless'], distortion: ['none', 'mild'], noise: ['none', 'fine'] },
  tx_r_distressed: { medium: ['film', 'print'], cleanliness: ['dirty', 'damaged'], contrast: ['medium', 'high'], saturation: ['low', 'shifted'], era: ['vintage'], distortion: ['strong'], noise: ['heavy'] },
  tx_r_silver: { medium: ['film', 'print'], cleanliness: ['organic'], contrast: ['high'], saturation: ['mono'], era: ['vintage', 'modern'], distortion: ['mild'], noise: ['medium'] },
  tx_r_clinical: { medium: ['digital'], cleanliness: ['pristine', 'clean'], contrast: ['high'], saturation: ['low', 'medium'], era: ['modern', 'future'], distortion: ['none'], noise: ['none'] },
  tx_r_pristine: { medium: ['digital', 'cgi'], cleanliness: ['pristine'], contrast: ['medium'], saturation: ['medium'], era: ['modern', 'future'], distortion: ['none'], noise: ['none'] },
  tx_r_antihalo: { medium: ['digital'], cleanliness: ['clean', 'pristine'], contrast: ['medium', 'high'], saturation: ['low', 'medium'], era: ['modern'], distortion: ['none'], noise: ['none', 'fine'] },
  tx_r_micro: { medium: ['digital', 'cgi'], cleanliness: ['clean', 'pristine'], contrast: ['high'], saturation: ['medium'], era: ['modern', 'future'], distortion: ['none'], noise: ['none', 'fine'] },
  tx_r_smooth: { medium: ['digital'], cleanliness: ['pristine', 'clean'], contrast: ['low', 'medium'], saturation: ['medium'], era: ['modern'], distortion: ['none'], noise: ['none'] },
  tx_r_hdr: { medium: ['digital', 'cgi'], cleanliness: ['pristine'], contrast: ['high'], saturation: ['high'], era: ['modern', 'future'], distortion: ['none'], noise: ['none'] },
  tx_r_matte: { medium: ['digital', 'film', 'painting', 'tangible', 'cgi'], cleanliness: ['clean', 'organic'], contrast: ['low', 'medium'], saturation: ['low', 'medium'], era: ['modern', 'timeless'], distortion: ['none'], noise: ['none', 'fine'] },
  tx_r_glossy: { medium: ['digital', 'film', 'cgi', 'tangible'], cleanliness: ['clean', 'pristine'], contrast: ['high'], saturation: ['medium', 'high'], era: ['modern', 'future'], distortion: ['none', 'mild'], noise: ['none'] },
  tx_r_velvet: { medium: ['film', 'digital', 'painting', 'tangible'], cleanliness: ['clean', 'organic'], contrast: ['low', 'medium'], saturation: ['low', 'medium'], era: ['modern', 'timeless'], distortion: ['mild'], noise: ['none', 'fine'] },
  tx_r_metal: { medium: ['digital', 'cgi', 'tangible'], cleanliness: ['clean', 'dirty'], contrast: ['high'], saturation: ['low', 'medium'], era: ['modern', 'future'], distortion: ['none', 'mild'], noise: ['none', 'fine'] },
  tx_r_rough: { medium: ['film', 'painting', 'tangible', 'cgi'], cleanliness: ['organic', 'dirty'], contrast: ['medium', 'high'], saturation: ['low', 'medium'], era: ['vintage', 'modern', 'timeless'], distortion: ['mild'], noise: ['medium', 'heavy'] },
  tx_r_glass: { medium: ['digital', 'cgi', 'tangible'], cleanliness: ['clean', 'pristine'], contrast: ['medium', 'high'], saturation: ['low', 'medium'], era: ['modern', 'future'], distortion: ['mild'], noise: ['none'] },
  tx_r_bleach: { medium: ['film', 'print'], cleanliness: ['dirty', 'organic'], contrast: ['extreme'], saturation: ['low', 'mono'], era: ['vintage', 'modern'], distortion: ['mild'], noise: ['medium', 'heavy'] },
  tx_r_faded: { medium: ['film', 'print'], cleanliness: ['organic', 'damaged'], contrast: ['low'], saturation: ['low', 'shifted'], era: ['vintage'], distortion: ['mild', 'strong'], noise: ['fine', 'medium'] },
  tx_r_lofi: { medium: ['video', 'digital'], cleanliness: ['dirty', 'damaged'], contrast: ['medium', 'high'], saturation: ['low', 'shifted'], era: ['vintage', 'modern'], distortion: ['strong'], noise: ['heavy', 'glitch'] },
  tx_r_dreamy: { medium: ['film', 'digital'], cleanliness: ['organic', 'clean'], contrast: ['low'], saturation: ['low', 'medium'], era: ['vintage', 'modern', 'timeless'], distortion: ['mild'], noise: ['none', 'fine'] },
  tx_r_stark: { medium: ['film', 'digital', 'print'], cleanliness: ['clean', 'dirty'], contrast: ['extreme'], saturation: ['mono', 'low'], era: ['modern', 'timeless'], distortion: ['none', 'mild'], noise: ['fine', 'medium'] },
  tx_r_neutral: { medium: ['digital', 'film', 'print'], cleanliness: ['clean'], contrast: ['medium'], saturation: ['low', 'medium'], era: ['modern', 'timeless'], distortion: ['none'], noise: ['none', 'fine'] },
  tx_r_pixel_glitch: { medium: ['digital', 'video'], cleanliness: ['damaged', 'experimental'], contrast: ['high'], saturation: ['shifted', 'high'], era: ['modern', 'future'], distortion: ['glitch'], noise: ['glitch'] },
  tx_r_compression: { medium: ['digital', 'video'], cleanliness: ['dirty', 'damaged'], contrast: ['medium', 'high'], saturation: ['low', 'shifted'], era: ['modern'], distortion: ['glitch'], noise: ['glitch', 'heavy'] },

  gr_denoised: { medium: ['digital', 'cgi'], cleanliness: ['pristine'], contrast: ['medium'], saturation: ['medium'], era: ['modern', 'future'], distortion: ['none'], noise: ['none'] },
  gr_micro35: { medium: ['film'], cleanliness: ['clean', 'organic'], contrast: ['medium'], saturation: ['medium'], era: ['modern'], distortion: ['mild'], noise: ['fine'] },
  gr_fine35: { medium: ['film'], cleanliness: ['organic'], contrast: ['medium'], saturation: ['medium'], era: ['vintage', 'modern'], distortion: ['mild'], noise: ['fine'] },
  gr_std35: { medium: ['film'], cleanliness: ['organic'], contrast: ['medium'], saturation: ['low', 'medium'], era: ['vintage', 'modern'], distortion: ['mild'], noise: ['medium'] },
  gr_organic: { medium: ['film'], cleanliness: ['organic'], contrast: ['medium'], saturation: ['low', 'medium'], era: ['vintage', 'modern'], distortion: ['mild'], noise: ['medium'] },
  gr_std16: { medium: ['film'], cleanliness: ['organic', 'dirty'], contrast: ['medium'], saturation: ['low', 'medium'], era: ['vintage', 'modern'], distortion: ['mild'], noise: ['medium', 'heavy'] },
  gr_rough16: { medium: ['film'], cleanliness: ['dirty', 'organic'], contrast: ['medium', 'high'], saturation: ['low'], era: ['vintage', 'modern'], distortion: ['mild'], noise: ['heavy'] },
  gr_8mm: { medium: ['film'], cleanliness: ['dirty', 'damaged'], contrast: ['medium', 'high'], saturation: ['low', 'shifted'], era: ['vintage'], distortion: ['strong'], noise: ['heavy'] },
  gr_silver: { medium: ['film', 'print'], cleanliness: ['organic'], contrast: ['high'], saturation: ['mono'], era: ['vintage', 'modern'], distortion: ['mild'], noise: ['medium', 'heavy'] },
  gr_iso100: { medium: ['digital', 'film'], cleanliness: ['clean', 'pristine'], contrast: ['medium'], saturation: ['medium'], era: ['modern'], distortion: ['none'], noise: ['none', 'fine'] },
  gr_iso800: { medium: ['digital', 'film'], cleanliness: ['organic'], contrast: ['medium'], saturation: ['low', 'medium'], era: ['modern'], distortion: ['mild'], noise: ['medium'] },
  gr_iso3200: { medium: ['digital', 'film', 'video'], cleanliness: ['dirty'], contrast: ['medium', 'high'], saturation: ['low'], era: ['modern'], distortion: ['mild', 'strong'], noise: ['heavy'] },
  gr_digital: { medium: ['digital', 'video'], cleanliness: ['clean', 'dirty'], contrast: ['medium'], saturation: ['low', 'medium'], era: ['modern', 'future'], distortion: ['mild'], noise: ['medium', 'heavy'] },
  gr_vhs: { medium: ['video'], cleanliness: ['dirty', 'damaged'], contrast: ['medium'], saturation: ['low', 'shifted'], era: ['vintage'], distortion: ['strong'], noise: ['heavy', 'glitch'] },
  gr_static: { medium: ['video', 'digital'], cleanliness: ['damaged', 'experimental'], contrast: ['high', 'extreme'], saturation: ['mono'], era: ['vintage', 'modern'], distortion: ['glitch'], noise: ['glitch', 'heavy'] },
  gr_dust: { medium: ['film', 'print'], cleanliness: ['dirty', 'damaged'], contrast: ['medium'], saturation: ['low'], era: ['vintage'], distortion: ['strong'], noise: ['heavy'] },
  gr_macroblock: { medium: ['digital', 'video'], cleanliness: ['damaged', 'dirty'], contrast: ['medium'], saturation: ['low', 'shifted'], era: ['modern'], distortion: ['glitch'], noise: ['glitch', 'heavy'] },

  am_digital: { medium: ['painting', 'digital'], cleanliness: ['clean'], contrast: ['medium'], saturation: ['medium'], era: ['modern'], distortion: ['none'], noise: ['none'] },
  am_digital_paint: { medium: ['painting', 'digital'], cleanliness: ['organic', 'clean'], contrast: ['medium', 'high'], saturation: ['medium'], era: ['modern'], distortion: ['mild'], noise: ['fine'] },
  am_watercolor: { medium: ['painting'], cleanliness: ['organic'], contrast: ['low', 'medium'], saturation: ['low', 'medium'], era: ['timeless', 'modern'], distortion: ['mild'], noise: ['fine', 'medium'] },
  am_oil: { medium: ['painting'], cleanliness: ['organic'], contrast: ['medium', 'high'], saturation: ['medium'], era: ['vintage', 'timeless', 'modern'], distortion: ['mild'], noise: ['fine', 'medium'] },
  am_impasto: { medium: ['painting'], cleanliness: ['organic', 'dirty'], contrast: ['high'], saturation: ['medium'], era: ['vintage', 'timeless', 'modern'], distortion: ['mild'], noise: ['medium', 'heavy'] },
  am_acrylic: { medium: ['painting'], cleanliness: ['clean'], contrast: ['medium', 'high'], saturation: ['medium', 'high'], era: ['modern'], distortion: ['none', 'mild'], noise: ['fine'] },
  am_gouache: { medium: ['painting'], cleanliness: ['clean', 'organic'], contrast: ['medium'], saturation: ['medium'], era: ['modern', 'timeless'], distortion: ['none', 'mild'], noise: ['fine'] },
  am_ink: { medium: ['painting', 'print'], cleanliness: ['organic'], contrast: ['high'], saturation: ['mono', 'low'], era: ['vintage', 'timeless', 'modern'], distortion: ['mild'], noise: ['fine', 'medium'] },
  am_pencil: { medium: ['painting'], cleanliness: ['organic'], contrast: ['low', 'medium'], saturation: ['mono', 'low'], era: ['timeless', 'modern'], distortion: ['mild'], noise: ['fine', 'medium'] },
  am_pencil_sketch: { medium: ['painting'], cleanliness: ['organic', 'dirty'], contrast: ['low', 'medium'], saturation: ['mono', 'low'], era: ['timeless', 'modern'], distortion: ['mild'], noise: ['medium'] },
  am_charcoal: { medium: ['painting'], cleanliness: ['dirty', 'organic'], contrast: ['high'], saturation: ['mono'], era: ['timeless', 'modern'], distortion: ['mild'], noise: ['heavy'] },
  am_marker: { medium: ['painting'], cleanliness: ['clean', 'organic'], contrast: ['medium', 'high'], saturation: ['medium', 'high'], era: ['modern'], distortion: ['mild'], noise: ['fine'] },
  am_pastel: { medium: ['painting'], cleanliness: ['organic'], contrast: ['low', 'medium'], saturation: ['low', 'medium'], era: ['timeless', 'modern'], distortion: ['mild'], noise: ['medium'] },
  am_vector: { medium: ['painting', 'digital'], cleanliness: ['pristine', 'clean'], contrast: ['high'], saturation: ['medium', 'high'], era: ['modern'], distortion: ['none'], noise: ['none'] },
  am_pixel: { medium: ['painting', 'digital'], cleanliness: ['clean', 'experimental'], contrast: ['medium', 'high'], saturation: ['medium', 'high'], era: ['vintage', 'modern'], distortion: ['strong'], noise: ['none', 'glitch'] },
  am_cel: { medium: ['painting', 'digital'], cleanliness: ['clean'], contrast: ['medium', 'high'], saturation: ['medium', 'high'], era: ['vintage', 'modern'], distortion: ['none'], noise: ['none', 'fine'] },
  am_collage: { medium: ['painting', 'print', 'mixed'], cleanliness: ['dirty', 'organic', 'experimental'], contrast: ['medium', 'high'], saturation: ['low', 'medium', 'shifted'], era: ['vintage', 'modern', 'timeless'], distortion: ['mild', 'strong'], noise: ['medium', 'heavy'] },
  am_cutout: { medium: ['painting', 'print', 'mixed'], cleanliness: ['clean', 'organic'], contrast: ['medium', 'high'], saturation: ['medium'], era: ['modern', 'timeless'], distortion: ['mild'], noise: ['fine', 'medium'] },
  am_spray: { medium: ['painting', 'mixed'], cleanliness: ['dirty', 'organic'], contrast: ['medium', 'high'], saturation: ['medium', 'high'], era: ['modern'], distortion: ['mild'], noise: ['medium'] },
  am_mixed: { medium: ['painting', 'print', 'mixed'], cleanliness: ['organic', 'dirty', 'experimental'], contrast: ['medium', 'high'], saturation: ['low', 'medium', 'shifted'], era: ['modern', 'timeless'], distortion: ['mild', 'strong'], noise: ['medium', 'heavy'] },

  lq_no_line: { medium: ['painting', 'digital'], cleanliness: ['clean', 'pristine'], contrast: ['medium'], saturation: ['medium'], era: ['modern'], distortion: ['none'], noise: ['none'] },
  lq_thin: { medium: ['painting', 'digital'], cleanliness: ['clean'], contrast: ['medium'], saturation: ['low', 'medium'], era: ['modern', 'timeless'], distortion: ['none'], noise: ['none', 'fine'] },
  lq_thick: { medium: ['painting', 'print'], cleanliness: ['clean'], contrast: ['high'], saturation: ['medium', 'high'], era: ['modern', 'timeless'], distortion: ['none'], noise: ['fine'] },
  lq_sketchy: { medium: ['painting'], cleanliness: ['organic', 'dirty'], contrast: ['medium'], saturation: ['mono', 'low'], era: ['modern', 'timeless'], distortion: ['mild'], noise: ['medium'] },
  lq_clean: { medium: ['painting', 'digital'], cleanliness: ['clean', 'pristine'], contrast: ['medium', 'high'], saturation: ['medium'], era: ['modern'], distortion: ['none'], noise: ['none'] },
  lq_brush: { medium: ['painting'], cleanliness: ['organic'], contrast: ['medium', 'high'], saturation: ['low', 'medium'], era: ['timeless', 'modern'], distortion: ['mild'], noise: ['fine', 'medium'] },
  lq_jitter: { medium: ['painting'], cleanliness: ['organic', 'experimental'], contrast: ['medium'], saturation: ['low', 'medium'], era: ['modern'], distortion: ['strong'], noise: ['medium'] },
  lq_dotted: { medium: ['painting', 'print'], cleanliness: ['clean', 'experimental'], contrast: ['medium'], saturation: ['mono', 'low'], era: ['modern'], distortion: ['mild'], noise: ['fine'] },
  lq_chalk: { medium: ['painting'], cleanliness: ['organic', 'dirty'], contrast: ['medium'], saturation: ['low', 'medium'], era: ['timeless', 'modern'], distortion: ['mild'], noise: ['medium', 'heavy'] },
  lq_ink_bleed: { medium: ['painting', 'print'], cleanliness: ['organic', 'dirty'], contrast: ['medium', 'high'], saturation: ['mono', 'low'], era: ['vintage', 'timeless', 'modern'], distortion: ['mild', 'strong'], noise: ['medium'] },
  lq_vector: { medium: ['painting', 'digital'], cleanliness: ['pristine'], contrast: ['high'], saturation: ['medium', 'high'], era: ['modern'], distortion: ['none'], noise: ['none'] },
  lq_rough: { medium: ['painting'], cleanliness: ['dirty', 'organic'], contrast: ['medium', 'high'], saturation: ['low', 'medium'], era: ['modern', 'timeless'], distortion: ['mild', 'strong'], noise: ['medium', 'heavy'] },
  lq_smooth: { medium: ['painting', 'digital'], cleanliness: ['clean', 'pristine'], contrast: ['medium'], saturation: ['medium'], era: ['modern'], distortion: ['none'], noise: ['none', 'fine'] },
  lq_hatching: { medium: ['painting', 'print'], cleanliness: ['organic'], contrast: ['high'], saturation: ['mono', 'low'], era: ['vintage', 'timeless', 'modern'], distortion: ['mild'], noise: ['fine', 'medium'] },

  ct_smooth: { medium: ['painting', 'digital'], cleanliness: ['clean', 'pristine'], contrast: ['medium'], saturation: ['medium'], era: ['modern'], distortion: ['none'], noise: ['none'] },
  ct_watercolor: { medium: ['painting'], cleanliness: ['organic'], contrast: ['low', 'medium'], saturation: ['low', 'medium'], era: ['timeless', 'modern'], distortion: ['mild'], noise: ['fine', 'medium'] },
  ct_canvas: { medium: ['painting'], cleanliness: ['organic'], contrast: ['medium'], saturation: ['low', 'medium'], era: ['vintage', 'timeless', 'modern'], distortion: ['mild'], noise: ['medium'] },
  ct_kraft: { medium: ['painting', 'print'], cleanliness: ['organic', 'dirty'], contrast: ['low', 'medium'], saturation: ['low'], era: ['vintage', 'modern', 'timeless'], distortion: ['mild'], noise: ['medium'] },
  ct_halftone: { medium: ['print'], cleanliness: ['clean', 'organic'], contrast: ['high'], saturation: ['mono', 'low', 'medium'], era: ['vintage', 'modern'], distortion: ['mild'], noise: ['medium'] },
  ct_screen: { medium: ['print'], cleanliness: ['clean'], contrast: ['high'], saturation: ['mono'], era: ['vintage', 'modern'], distortion: ['mild'], noise: ['medium'] },
  ct_noise: { medium: ['print', 'digital'], cleanliness: ['dirty', 'damaged'], contrast: ['medium'], saturation: ['low'], era: ['vintage', 'modern'], distortion: ['mild', 'strong'], noise: ['medium', 'heavy'] },
  ct_grunge: { medium: ['print', 'painting', 'mixed'], cleanliness: ['dirty', 'damaged'], contrast: ['medium', 'high'], saturation: ['low', 'shifted'], era: ['vintage'], distortion: ['strong'], noise: ['heavy'] },
  ct_wood: { medium: ['painting', 'tangible'], cleanliness: ['organic'], contrast: ['medium'], saturation: ['low', 'medium'], era: ['vintage', 'timeless'], distortion: ['mild'], noise: ['medium'] },
  ct_stone: { medium: ['painting', 'tangible'], cleanliness: ['organic', 'dirty'], contrast: ['medium', 'high'], saturation: ['low'], era: ['vintage', 'timeless'], distortion: ['mild'], noise: ['medium', 'heavy'] },
  ct_fabric: { medium: ['painting', 'tangible'], cleanliness: ['organic'], contrast: ['low', 'medium'], saturation: ['low', 'medium'], era: ['timeless', 'modern'], distortion: ['mild'], noise: ['fine', 'medium'] },
  ct_crumpled: { medium: ['print', 'painting', 'mixed'], cleanliness: ['dirty', 'organic'], contrast: ['medium'], saturation: ['low'], era: ['vintage', 'modern'], distortion: ['strong'], noise: ['medium'] },
  ct_cardboard: { medium: ['print', 'painting', 'mixed'], cleanliness: ['dirty', 'organic'], contrast: ['medium'], saturation: ['low'], era: ['vintage', 'modern'], distortion: ['mild'], noise: ['medium', 'heavy'] },
  ct_parchment: { medium: ['print', 'painting'], cleanliness: ['organic', 'dirty'], contrast: ['low', 'medium'], saturation: ['low'], era: ['vintage', 'timeless'], distortion: ['mild'], noise: ['medium'] },
  ct_paper_texture: { medium: ['painting', 'print'], cleanliness: ['organic'], contrast: ['low', 'medium'], saturation: ['low', 'medium'], era: ['modern', 'timeless'], distortion: ['none', 'mild'], noise: ['fine', 'medium'] },

  cyberpunk_2077: { medium: ['cgi', 'digital'], cleanliness: ['clean', 'dirty'], contrast: ['high'], saturation: ['medium', 'high', 'shifted'], era: ['future'], distortion: ['none', 'mild'], noise: ['fine', 'medium'] },
  the_last_of_us: cgiOrganicReal,
  god_of_war: cgiOrganicReal,
  horizon_zero_dawn: cgiOrganicReal,
  death_stranding: cgiOrganicReal,
  red_dead_redemption_2: { ...cgiOrganicReal, era: ['vintage', 'modern'], saturation: ['low', 'medium'] },
  callisto_protocol: { ...cgiDarkGame, era: ['future'], contrast: ['high'], saturation: ['low', 'medium'] },
  hellblade: cgiOrganicReal,
  avatar: cgiOrganicReal,
  dune_vfx: { ...cgiOrganicReal, contrast: ['medium', 'high'], saturation: ['low'], era: ['future'] },
  blade_runner_2049: { medium: ['cgi', 'digital'], cleanliness: ['clean', 'organic'], contrast: ['high'], saturation: ['low', 'medium', 'shifted'], era: ['future'], distortion: ['none', 'mild'], noise: ['fine', 'medium'] },
  alien_vfx: { ...cgiDarkGame, cleanliness: ['dirty', 'organic'], era: ['future'], contrast: ['high'] },
  jurassic_park: cgiOrganicReal,
  planet_of_the_apes: cgiOrganicReal,
  weta_lotr: { ...cgiOrganicReal, era: ['modern', 'timeless'], saturation: ['low', 'medium'] },
  pacific_rim: { ...cgiDarkGame, era: ['future'], contrast: ['high'] },
  pixar: cgiStylized,
  dreamworks: cgiStylized,
  disney_3d: cgiStylized,
  illumination: { ...cgiStylized, saturation: ['high'] },
  sony_animation: { ...cgiStylized, saturation: ['high', 'shifted'] },
  blue_sky: cgiStylized,
  laika_cgi: { ...cgiStylized, medium: ['cgi', 'digital', 'tangible'], cleanliness: ['clean', 'organic'], saturation: ['low', 'medium'], noise: ['fine', 'medium'] },
  love_death_robots: { ...cgiNpr, cleanliness: ['clean', 'organic', 'experimental'], era: ['modern', 'future'] },
  arcane: { ...cgiNpr, cleanliness: ['clean', 'organic'], saturation: ['medium', 'high'] },
  spiderverse: { ...cgiNpr, saturation: ['high', 'shifted'], noise: ['fine', 'medium'] },
  tmnt_mutant_mayhem: { ...cgiNpr, cleanliness: ['clean', 'organic', 'dirty'], saturation: ['high', 'shifted'], noise: ['medium'] },
  borderlands: { ...cgiNpr, cleanliness: ['clean', 'dirty'], saturation: ['medium', 'high'], noise: ['medium'] },
  guilty_gear: cgiStylized,
  genshin_impact: cgiStylized,
  honkai_star_rail: { ...cgiStylized, era: ['modern', 'future'] },
  zelda_botw: { ...cgiStylized, saturation: ['medium'], contrast: ['low', 'medium'] },
  elden_ring: cgiDarkGame,
  dark_souls: { ...cgiDarkGame, contrast: ['high'], saturation: ['low'] },
  bloodborne: { ...cgiDarkGame, contrast: ['high'], saturation: ['low', 'medium'] },
  diablo_iv: { ...cgiDarkGame, contrast: ['high'], saturation: ['low', 'medium'] },
  monster_hunter_world: cgiOrganicReal,
  final_fantasy_vii_remake: cgiClean,
  overwatch: { ...cgiStylized, saturation: ['high'] },
  valorant: cgiStylized,
  ps1_low_poly: cgiRetro,
  minecraft: { ...cgiRetro, cleanliness: ['clean', 'experimental'], distortion: ['strong'], noise: ['medium'] },
  lego_cgi: { ...cgiStylized, medium: ['cgi', 'digital', 'tangible'], cleanliness: ['pristine', 'clean'], noise: ['none', 'fine'] },
  roblox: { ...cgiRetro, cleanliness: ['clean', 'experimental'], distortion: ['strong'], noise: ['fine', 'medium'] },
  vaporwave_3d: { ...cgiRetro, cleanliness: ['clean', 'experimental'], saturation: ['high', 'shifted'], noise: ['fine', 'medium'] },
  abstract_motion_cg: { ...cgiClean, saturation: ['medium', 'high', 'shifted'], distortion: ['none', 'mild', 'strong'] },
  metahuman: cgiClean,
  nvidia_rtx_demo: { ...cgiClean, saturation: ['medium', 'high'], era: ['future'] },

  path_tracing: cgiClean,
  ray_tracing_realtime: cgiClean,
  rasterized_realtime: { ...cgiClean, cleanliness: ['clean'], noise: ['none', 'fine'] },
  lumen_global_light: cgiClean,
  nanite_geometry: cgiClean,
  octane_spectral: { ...cgiClean, cleanliness: ['pristine'], contrast: ['high'] },
  redshift_clean_gi: cgiClean,
  vray_physical_light: cgiClean,
  cycles_path_render: { ...cgiClean, noise: ['fine'] },
  eevee_realtime: { ...cgiClean, cleanliness: ['clean'] },
  pbr_material_stack: cgiClean,
  subsurface_skin_shader: cgiClean,
  eye_wetness_shader: cgiClean,
  groom_hair_system: cgiClean,
  cloth_shader_weave: { ...cgiClean, cleanliness: ['clean', 'organic'] },
  hard_surface_bevels: { ...cgiClean, contrast: ['high'], era: ['future'] },
  glass_caustics: cgiClean,
  liquid_metal_shader: { ...cgiClean, contrast: ['high'], era: ['future'] },
  emissive_material: { ...cgiClean, saturation: ['medium', 'high'] },
  dirt_wear_masks: { ...cgiOrganicReal, cleanliness: ['clean', 'organic', 'dirty'] },
  normal_displacement_maps: cgiClean,
  volumetric_light: cgiClean,
  particle_field: { ...cgiClean, cleanliness: ['clean', 'experimental'], distortion: ['none', 'mild'] },
  fluid_simulation: { ...cgiClean, cleanliness: ['clean', 'organic'] },
  smoke_volume: { ...cgiOrganicReal, saturation: ['low', 'medium'] },
  cloth_simulation: cgiClean,
  soft_body_simulation: cgiClean,
  rigid_body_fracture: { ...cgiOrganicReal, cleanliness: ['clean', 'organic', 'dirty'], noise: ['fine', 'medium'] },
  hair_dynamics: cgiClean,
  zbrush_high_poly: { ...cgiClean, cleanliness: ['clean', 'organic'] },
  grey_clay_render: { ...cgiClean, saturation: ['mono', 'low'], contrast: ['medium'] },
  asset_turntable: cgiClean,
  wireframe_overlay: { ...cgiClean, distortion: ['none', 'mild'] },
  photogrammetry_scan: { ...cgiOrganicReal, cleanliness: ['clean', 'organic'], noise: ['fine', 'medium'] },
  procedural_geometry: { ...cgiClean, distortion: ['none', 'mild', 'strong'] },
  low_poly_geometry: cgiRetro,
  voxel_geometry: cgiRetro,
  toon_shader: cgiStylized,
  cel_shaded_3d: cgiStylized,
  painterly_shader: cgiNpr,
  comic_halftone_3d: { ...cgiNpr, saturation: ['medium', 'high', 'shifted'], noise: ['fine', 'medium'] },
  ink_outline_3d: cgiNpr,
  pixelated_3d_surface: cgiRetro,
  glitch_render_errors: { ...cgiRetro, distortion: ['glitch'], noise: ['glitch', 'heavy'] },

  pbr_materials: cgiClean,
  subsurface_skin: cgiClean,
  hard_surface: { ...cgiClean, contrast: ['high'], era: ['future'] },
  groom_hair_quality: cgiClean,
  photoreal_eye: cgiClean,
  micro_displacement: cgiClean,
  procedural_texture: { ...cgiClean, distortion: ['none', 'mild', 'strong'] },
  scan_texture: { ...cgiOrganicReal, cleanliness: ['clean', 'organic'], noise: ['fine', 'medium'] },
  metal_roughness: { ...cgiClean, contrast: ['medium', 'high'] },
  translucent_material: cgiClean,
  glass_refraction: cgiClean,
  wet_surface: { ...cgiOrganicReal, cleanliness: ['clean', 'organic', 'dirty'] },
  volumetric_material: { ...cgiOrganicReal, saturation: ['low', 'medium'] },
  cinematic_vfx_comp: cgiClean,
  optimized_game_asset: { ...cgiClean, cleanliness: ['clean'], noise: ['none', 'fine'] },
  toon_surface: cgiStylized,
  painterly_3d_surface: cgiNpr,
  clay_render_surface: { ...cgiClean, saturation: ['mono', 'low'], contrast: ['medium'] },
  low_poly_surface: cgiRetro,
  pixel_texture: cgiRetro,
  glitch_surface: { ...cgiRetro, distortion: ['glitch'], noise: ['glitch', 'heavy'] },

  clay_stop_motion_puppet: tangibleSoft,
  felt_handmade_doll: tangibleSoft,
  stitched_fabric_doll: tangibleSoft,
  resin_collectible_figure: tangibleHardClean,
  painted_action_figure: tangibleModel,
  concept_maquette_sculpture: tangibleModel,
  bronze_or_plaster_statue: tangibleModel,
  ceramic_glazed_figure: tangibleHardClean,
  paper_craft_model: tangibleSoft,
  wood_carved_figure: tangibleSoft,
  metal_mechanical_miniature: tangibleModel,
  practical_sfx_prosthetic: tangibleModel,
  fingerprint_clay: tangibleSoft,
  resin_paint: tangibleHardClean,
  fabric_fiber: tangibleSoft,
  silicone_skin: tangibleModel,
  needle_felt_fuzz: tangibleSoft,
  paper_edge: tangibleSoft,
  cardboard_layer: tangibleSoft,
  wood_grain: tangibleSoft,
  carved_tool_marks: tangibleSoft,
  plaster_powder: tangibleSoft,
  bronze_patina: tangibleModel,
  ceramic_glaze: tangibleHardClean,
  porcelain_craquelure: tangibleHardClean,
  metal_solder: tangibleModel,
  miniature_weathering: tangibleModel,
  latex_edge: tangibleModel,
  foam_core: tangibleSoft,
  flocking_surface: tangibleSoft,
  varnish_gloss: tangibleHardClean,
  matte_chalk: tangibleSoft,
  glue_marks: tangibleSoft,
  paint_layering: tangibleHardClean,
  dust_on_object: tangibleModel,
  visible_seams: tangibleSoft,
  paint_wear: tangibleModel,
  armature_joint: tangibleModel,
  hand_sculpting: tangibleSoft,
  brush_painting: tangibleHardClean,
  dry_brushing: tangibleModel,
  kitbash_parts: tangibleModel,
  mold_casting: tangibleModel,
  sanding_marks: tangibleHardClean,
  seam_blending: tangibleModel,
  hand_stitching: tangibleSoft,
  needle_felting: tangibleSoft,
  paper_folding: tangibleSoft,
  laser_cut_edges: tangibleHardClean,
  weathering_powder: tangibleModel,
  clear_coat: tangibleHardClean,
  replacement_parts: tangibleModel,
  display_pin: tangibleHardClean,
  practical_lighting_trace: tangibleHardClean,
  repair_patch: tangibleModel
};

const axes: VisualStyleProfileAxis[] = ['medium', 'cleanliness', 'contrast', 'saturation', 'era', 'distortion', 'noise'];
const generatedProfilePrefixes = [
  'cd_media_cgi_soul_',
  'cd_media_cgi_detail_',
  'cd_media_cgi_quality_',
  'cd_media_tangible_soul_',
  'cd_media_tangible_quality_',
  'cd_media_tangible_craft_'
];

const intersects = <T extends string>(left?: T[], right?: T[]) => {
  if (!left || !right || left.length === 0 || right.length === 0) return null;
  return left.some(value => right.includes(value));
};

const resolveVisualStyleItemProfile = (itemId: string) => {
  const directProfile = VISUAL_STYLE_ITEM_PROFILES[itemId];
  if (directProfile) return directProfile;
  const prefix = generatedProfilePrefixes.find(value => itemId.startsWith(value));
  if (!prefix) return undefined;
  return VISUAL_STYLE_ITEM_PROFILES[itemId.slice(prefix.length)];
};

export const getVisualStyleProfileMatchWeight = (
  itemId: string,
  target?: VisualStyleProfileTarget,
  mode: VisualStyleRandomModeForProfile = 'STRICT'
) => {
  if (!target) return 1;
  const profile = resolveVisualStyleItemProfile(itemId);
  if (!profile) return 1;

  let matched = 0;
  let mismatched = 0;
  axes.forEach(axis => {
    const result = intersects(profile[axis] as string[] | undefined, target[axis] as string[] | undefined);
    if (result === true) matched += 1;
    if (result === false) mismatched += 1;
  });

  if (matched === 0 && mismatched === 0) return 1;
  if (mode === 'STRICT' && mismatched > 0) return 0;
  if (mode === 'STRICT') return 4 + matched * 2;
  return Math.max(0.35, 1 + matched * 1.25 - mismatched * 0.35);
};
