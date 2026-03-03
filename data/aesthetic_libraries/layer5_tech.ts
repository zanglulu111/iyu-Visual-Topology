
import { LibraryItemDef } from '../../types';

// =================================================================
// 5. 画质增强 (Quality & Tech) - Split into Realism and Art
// =================================================================

// === A. 写实/摄影模式渲染 (REALISM MODE RENDER) ===
export const AES_RENDER_REAL: LibraryItemDef[] = [
  // --- Group 1: 极致画质 (Quality Boost) ---
  { 
    id: "tq_r_masterpiece", 
    name: "大师级杰作 (Masterpiece)", 
    group: "1. 极致画质", 
    def: "Masterpiece, Best Quality, Highly detailed, Award winning photography." 
  },
  { 
    id: "tq_r_8k", 
    name: "8K 超高清 (8K UHD)", 
    group: "1. 极致画质", 
    def: "8k resolution, Ultra-High Definition, Super-Resolution, Megapixel." 
  },
  { 
    id: "tq_r_photoreal", 
    name: "极致写实 (Photorealistic)", 
    group: "1. 极致画质", 
    def: "Photorealistic, Hyperrealistic, Realistic, Real life, Raw photo." 
  },
  { 
    id: "tq_r_sharp", 
    name: "锐利聚焦 (Sharp Focus)", 
    group: "1. 极致画质", 
    def: "Sharp Focus, High sharpness, Crisp details, In focus." 
  },
  { 
    id: "tq_r_hdr", 
    name: "HDR 高动态 (HDR)", 
    group: "1. 极致画质", 
    def: "HDR, High Dynamic Range, Rich contrast, Detailed shadows." 
  },

  // --- Group 2: 摄影质感 (Cinematography) ---
  { 
    id: "tq_r_raw", 
    name: "RAW 原片 (RAW Photo)", 
    group: "2. 摄影质感", 
    def: "Raw photo, Unprocessed, Neutral profile, Fujifilm, Nikon D850." 
  },
  { 
    id: "tq_r_film_grain", 
    name: "胶片颗粒 (Film Grain)", 
    group: "2. 摄影质感", 
    def: "Film grain, Kodak Portra 400, Analog texture, ISO 400." 
  },
  { 
    id: "tq_r_cinematic", 
    name: "电影质感 (Cinematic)", 
    group: "2. 摄影质感", 
    def: "Cinematic lighting, Movie still, Color graded, Anamorphic lens blur." 
  },
  { 
    id: "tq_r_dof", 
    name: "景深虚化 (Depth of Field)", 
    group: "2. 摄影质感", 
    def: "Depth of Field, Bokeh, F/1.8, Blurred background." 
  },
  { 
    id: "tq_r_macro", 
    name: "微距细节 (Macro Detail)", 
    group: "2. 摄影质感", 
    def: "Macro photography, Extreme detail, Micro texture, Surface detail." 
  },

  // --- Group 3: 高级渲染 (High-End Tech) ---
  { 
    id: "tq_r_ue5", 
    name: "虚幻5写实 (Unreal Engine 5)", 
    group: "3. 高级渲染", 
    def: "Unreal Engine 5, Lumen, Nanite, Ray Tracing, Global Illumination." 
  },
  { 
    id: "tq_r_raytracing", 
    name: "光线追踪 (Ray Tracing)", 
    group: "3. 高级渲染", 
    def: "Ray Tracing, Path Tracing, Realistic reflections, Volumetric lighting." 
  },
  { 
    id: "tq_r_vray", 
    name: "V-Ray 渲染 (V-Ray)", 
    group: "3. 高级渲染", 
    def: "V-Ray render, ArchViz, Physically based rendering (PBR)." 
  },
  { 
    id: "tq_r_octane", 
    name: "Octane 渲染 (Octane)", 
    group: "3. 高级渲染", 
    def: "Octane Render, High gloss, 3D shading, Hyper-detailed." 
  },
  { 
    id: "tq_r_sss", 
    name: "次表面散射 (SSS)", 
    group: "3. 高级渲染", 
    def: "Subsurface Scattering, Translucent skin, Realistic skin texture." 
  }
];

// === B. 美术/动画模式渲染 (STYLIZED MODE RENDER) ===
export const AES_RENDER_ART: LibraryItemDef[] = [
  // --- Group 1: 艺术品质 (Art Quality) ---
  { 
    id: "tq_a_masterpiece", 
    name: "插画杰作 (Masterpiece Art)", 
    group: "1. 艺术品质", 
    def: "Masterpiece, Best Quality, Highly detailed illustration, Trending on ArtStation." 
  },
  { 
    id: "tq_a_featured", 
    name: "Pixiv 精选 (Featured on Pixiv)", 
    group: "1. 艺术品质", 
    def: "Featured on Pixiv, Anime masterpiece, Top tier art, Detailed background." 
  },
  { 
    id: "tq_a_detailed", 
    name: "极致细节 (Ultra Detailed)", 
    group: "1. 艺术品质", 
    def: "Ultra detailed, Intricate details, Elaborate design, Fine lines." 
  },
  { 
    id: "tq_a_vibrant", 
    name: "鲜艳色彩 (Vibrant Color)", 
    group: "1. 艺术品质", 
    def: "Vibrant colors, Colorful, Vivid, High saturation, Punchy colors." 
  },
  { 
    id: "tq_a_clean", 
    name: "干净线条 (Clean Lines)", 
    group: "1. 艺术品质", 
    def: "Clean lines, Sharp outlines, Vector style, Flat color." 
  },

  // --- Group 2: 绘画风格 (Painting Style) ---
  { 
    id: "tq_a_digital_paint", 
    name: "数字厚涂 (Digital Painting)", 
    group: "2. 绘画风格", 
    def: "Digital painting, Smooth shading, Brushwork, Concept art." 
  },
  { 
    id: "tq_a_oil", 
    name: "油画笔触 (Oil Impasto)", 
    group: "2. 绘画风格", 
    def: "Oil painting, Impasto, Palette knife, Textured canvas, Visible strokes." 
  },
  { 
    id: "tq_a_watercolor", 
    name: "水彩晕染 (Watercolor)", 
    group: "2. 绘画风格", 
    def: "Watercolor, Wet on wet, Splatter, Ink wash, Soft blending." 
  },
  { 
    id: "tq_a_sketch", 
    name: "素描手绘 (Sketch)", 
    group: "2. 绘画风格", 
    def: "Sketch, Pencil drawing, Charcoal, Cross-hatching, Rough lines." 
  },
  { 
    id: "tq_a_anime", 
    name: "动画赛璐璐 (Anime Cel)", 
    group: "2. 绘画风格", 
    def: "Anime style, Cel shading, Flat color, Screencap." 
  },

  // --- Group 3: 3D 风格化 (Stylized 3D) ---
  { 
    id: "tq_a_c4d", 
    name: "C4D 风格 (Cinema 4D)", 
    group: "3. 3D 风格化", 
    def: "Cinema 4D, 3D Render, Cartoon 3D, Cute, Pop style." 
  },
  { 
    id: "tq_a_blender", 
    name: "Blender 渲染 (Blender)", 
    group: "3. 3D 风格化", 
    def: "Blender 3D, Cycles render, Stylized 3D, Low poly." 
  },
  { 
    id: "tq_a_isometric", 
    name: "等轴测 (Isometric)", 
    group: "3. 3D 风格化", 
    def: "Isometric view, 3D diorama, Orthographic, Mini world." 
  },
  { 
    id: "tq_a_chibi", 
    name: "Q版/黏土 (Chibi Clay)", 
    group: "3. 3D 风格化", 
    def: "Chibi, Nendoroid, Clay material, Soft round forms." 
  },
  { 
    id: "tq_a_toon", 
    name: "卡通渲染 (Toon Shader)", 
    group: "3. 3D 风格化", 
    def: "Toon shader, 2D look in 3D, Outline, Guilty Gear style." 
  }
];
// Deprecated export for compatibility
export const AES_RENDER = [...AES_RENDER_REAL, ...AES_RENDER_ART];
