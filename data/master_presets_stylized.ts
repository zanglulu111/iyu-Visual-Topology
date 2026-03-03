
import { AestheticPreset } from '../types';

export const MASTER_PRESETS_STYLIZED: AestheticPreset[] = [
  // ==========================================
  // C. 动漫动画 (Anime & Animation) - 50 Items (Expanded)
  // ==========================================
  // --- Group 1: 知名工作室与导演 (Studio & Auteur) ---
  {
    id: "preset_ghibli",
    name: "吉卜力 (Ghibli)",
    nameEn: "Style of Studio Ghibli",
    group: "C. 动漫动画",
    def: "Healing emerald greens, celestial blues, and fluffy white clouds. Nature-focused animism with hand-painted watercolor textures.",
    colors: ["#2D5A27", "#4E9A06", "#87CEEB", "#FFFFFF", "#FCE94F", "#AD7FA8", "#E9B96E"],
    params: {
      "aes_anim_director": ["宫崎骏 (Hayao Miyazaki)"],
      "aes_art_medium": ["水彩 (Watercolor)"],
      "aes_line_quality": ["细轮廓 (Thin Outlines)"],
      "aes_canvas_texture": ["水彩纸 (Watercolor Paper)"],
      "aes_color_palette": ["吉卜力 (Ghibli)"],
      "aes_render_art": ["插画杰作 (Masterpiece Art)"]
    }
  },
  {
    id: "preset_akira",
    name: "阿基拉 (Akira)",
    nameEn: "Style of Akira",
    group: "C. 动漫动画",
    def: "Cel-shaded shadows, highlight halation, complex mechanical details, light trails, and the definitive aesthetic of epic destruction.",
    colors: ["#FF0000", "#000000", "#800080", "#0000FF", "#FFFF00", "#FFFFFF", "#008000"],
    params: {
      "aes_anim_director": ["大友克洋 (Katsuhiro Otomo)"],
      "aes_art_medium": ["赛璐璐 (Cel Shaded)"],
      "aes_line_quality": ["干净线稿 (Clean Lineart)"],
      "aes_canvas_texture": ["平滑纸 (Smooth Paper)"],
      "aes_color_palette": ["阿基拉 (Akira)"],
      "aes_render_art": ["极致细节 (Ultra Detailed)"]
    }
  },
  {
    id: "preset_spiderverse",
    name: "蜘蛛宇宙 (Spider-Verse)",
    nameEn: "Style of Spider-Verse",
    group: "C. 动漫动画",
    def: "Halftone dots, chromatic aberration, comic book onomatopoeia, and a hybrid blend of pop art with stylized 3D animation.",
    colors: ["#FF0000", "#0000FF", "#000000", "#FFFFFF", "#FFFF00", "#00FFFF", "#FF00FF"],
    params: {
      "aes_anim_director": ["蜘蛛宇宙 (Spider-Verse)"],
      "aes_art_medium": ["矢量艺术 (Vector Art)"],
      "aes_line_quality": ["粗轮廓 (Thick Outlines)"],
      "aes_canvas_texture": ["半调 (Halftone)"],
      "aes_color_palette": ["蜘蛛宇宙 (Spider-Verse)"],
      "aes_render_art": ["鲜艳色彩 (Vibrant Color)"]
    }
  },
  {
    id: "preset_arcane_stylized",
    name: "双城之战 (Arcane)",
    nameEn: "Style of Arcane",
    group: "C. 动漫动画",
    def: "Hand-painted 3D models with heavy oil brushstrokes, dramatic rim lighting, neon steampunk vibes, and thick cinematic textures.",
    colors: ["#0000FF", "#800080", "#FFD700", "#000000", "#808080", "#FF0000", "#008000"],
    params: {
      "aes_anim_director": ["Fortiche (Arcane Style)"],
      "aes_art_medium": ["数字厚涂 (Digital Painting)"],
      "aes_line_quality": ["无线绘 (Lineless)"],
      "aes_canvas_texture": ["油画布 (Canvas)"],
      "aes_color_palette": ["双城之战 (Arcane)"],
      "aes_render_art": ["油画笔触 (Oil Impasto)"]
    }
  },
  {
    id: "preset_gits_stylized",
    name: "攻壳机动队 (Ghost in the Shell)",
    nameEn: "Style of Ghost in the Shell",
    group: "C. 动漫动画",
    def: "Cold urban scapes, falling green code rain, optical camouflage, and philosophical cinematic voids.",
    colors: ["#000000", "#003300", "#006600", "#808080", "#FFFFFF", "#0000FF", "#FF0000"],
    params: {
      "aes_anim_director": ["押井守 (Mamoru Oshii)"],
      "aes_art_medium": ["赛璐璐 (Cel Shaded)"],
      "aes_line_quality": ["细轮廓 (Thin Outlines)"],
      "aes_canvas_texture": ["平滑纸 (Smooth Paper)"],
      "aes_color_palette": ["攻壳机动队 (Ghost in the Shell)"],
      "aes_render_art": ["动画赛璐璐 (Anime Cel)"]
    }
  },
  {
    id: "preset_paprika_stylized",
    name: "红辣椒 (Paprika)",
    nameEn: "Style of Satoshi Kon",
    group: "C. 动漫动画",
    def: "Visual color explosion, parade of endless surreal objects, seamless blend of dreams and reality, psychological dream logic.",
    colors: ["#FF0000", "#FFFF00", "#0000FF", "#00FF00", "#FF00FF", "#FFFFFF", "#000000"],
    params: {
      "aes_anim_director": ["今敏 (Satoshi Kon)"],
      "aes_art_medium": ["赛璐璐 (Cel Shaded)"],
      "aes_line_quality": ["细轮廓 (Thin Outlines)"],
      "aes_canvas_texture": ["平滑纸 (Smooth Paper)"],
      "aes_color_palette": ["红辣椒 (Paprika)"],
      "aes_render_art": ["鲜艳色彩 (Vibrant Color)"]
    }
  },
  {
    id: "preset_your_name_stylized",
    name: "你的名字 (Your Name)",
    nameEn: "Style of Makoto Shinkai",
    group: "C. 动漫动画",
    def: "Hyper-detailed backgrounds, iconic lens flares, starry indigo skies, comets, and high emotional saturation.",
    colors: ["#0000FF", "#800080", "#FFC0CB", "#FFFFFF", "#000000", "#FFFF00", "#008000"],
    params: {
      "aes_anim_director": ["新海诚 (Makoto Shinkai)"],
      "aes_art_medium": ["数字绘画 (Digital Painting)"],
      "aes_line_quality": ["细轮廓 (Thin Outlines)"],
      "aes_canvas_texture": ["平滑纸 (Smooth Paper)"],
      "aes_color_palette": ["你的名字 (Your Name)"],
      "aes_render_art": ["Pixiv 精选 (Featured on Pixiv)"]
    }
  },
  {
    id: "preset_eva_stylized",
    name: "EVA (Evangelion)",
    nameEn: "Style of Evangelion",
    group: "C. 动漫动画",
    def: "Pitch black shadows, bold typography, telephone poles, blood-red sunsets, and towering geometric mecha silhouettes.",
    colors: ["#000000", "#FF0000", "#800080", "#00FF00", "#FFFF00", "#FFFFFF", "#FFA500"],
    params: {
      "aes_anim_director": ["庵野秀明 (Hideaki Anno)"],
      "aes_art_medium": ["赛璐璐 (Cel Shaded)"],
      "aes_line_quality": ["粗轮廓 (Thick Outlines)"],
      "aes_canvas_texture": ["平滑纸 (Smooth Paper)"],
      "aes_color_palette": ["EVA (Evangelion)"],
      "aes_render_art": ["干净线条 (Clean Lines)"]
    }
  },
  {
    id: "preset_jojo_stylized",
    name: "JOJO (Jojo's Bizarre Adventure)",
    nameEn: "Style of JoJo",
    group: "C. 动漫动画",
    def: "Iconic shading lines, screen-text onomatopoeia, sudden dramatic color palette inversions, and high-fashion poses.",
    colors: ["#FFFF00", "#800080", "#000000", "#FF00FF", "#00FFFF", "#00FF00", "#FF0000"],
    params: {
      "aes_anim_director": ["荒木飞吕彦 (Hirohiko Araki)"],
      "aes_art_medium": ["赛璐璐 (Cel Shaded)"],
      "aes_line_quality": ["粗轮廓 (Thick Outlines)"],
      "aes_canvas_texture": ["网点纸 (Screen Tone)"],
      "aes_color_palette": ["JOJO (Jojo's Bizarre Adventure)"],
      "aes_render_art": ["鲜艳色彩 (Vibrant Color)"]
    }
  },
  {
    id: "preset_mob_stylized",
    name: "灵能百分百 (Mob Psycho 100)",
    nameEn: "Style of Mob Psycho 100",
    group: "C. 动漫动画",
    def: "Raw pencil sketch aesthetic, extremely exaggerated perspective, black-and-white visual explosions, and oil-painted backgrounds.",
    colors: ["#000000", "#FFFFFF", "#FF0000", "#0000FF", "#FFFF00", "#800080", "#008000"],
    params: {
      "aes_anim_director": ["骨头社 (Bones)"],
      "aes_art_medium": ["铅笔素描 (Pencil Sketch)"],
      "aes_line_quality": ["草图线 (Sketchy)"],
      "aes_canvas_texture": ["粗糙纸板 (Cardboard)"],
      "aes_color_palette": ["灵能百分百 (Mob Psycho 100)"],
      "aes_render_art": ["素描手绘 (Sketch)"]
    }
  },
  {
    id: "preset_violet_stylized",
    name: "紫罗兰永恒花园 (Violet Evergarden)",
    nameEn: "Style of Kyoto Animation",
    group: "C. 动漫动画",
    def: "Exquisite focus on eyes and hair, soft volumetric lighting, European period influence, and high emotional depth.",
    colors: ["#FFFFFF", "#E6E6FA", "#87CEEB", "#000080", "#D2B48C", "#FFD700", "#A0522D"],
    params: {
      "aes_anim_director": ["京阿尼 (KyoAni Polish)"],
      "aes_art_medium": ["数字绘画 (Digital Painting)"],
      "aes_line_quality": ["细轮廓 (Thin Outlines)"],
      "aes_canvas_texture": ["平滑纸 (Smooth Paper)"],
      "aes_color_palette": ["紫罗兰永恒花园 (Violet Evergarden)"],
      "aes_render_art": ["插画杰作 (Masterpiece Art)"]
    }
  },
  {
    id: "preset_chainsaw_stylized",
    name: "电锯人 (Chainsaw Man)",
    nameEn: "Style of Chainsaw Man",
    group: "C. 动漫动画",
    def: "Cinematic camera angles, cold blue-grey palettes, stylized gore, and grounded photographic lighting logic.",
    colors: ["#FF0000", "#8B0000", "#000000", "#1A1A1A", "#FFFFFF", "#FFA500", "#2F4F4F"],
    params: {
      "aes_anim_director": ["MAPPA (Action)"],
      "aes_art_medium": ["数字绘画 (Digital Painting)"],
      "aes_line_quality": ["干净线稿 (Clean Lineart)"],
      "aes_canvas_texture": ["平滑纸 (Smooth Paper)"],
      "aes_color_palette": ["电锯人 (Chainsaw Man)"],
      "aes_render_art": ["动画赛璐璐 (Anime Cel)"]
    }
  },
  {
    id: "preset_edgerunners_stylized",
    name: "赛博朋克:边缘行者 (Edgerunners)",
    nameEn: "Style of Studio Trigger",
    group: "C. 动漫动画",
    def: "Extreme neon-saturated colors, heavy motion afterimages, speed lines, and radical perspective distortion.",
    colors: ["#FFFF00", "#00FFFF", "#FF00FF", "#000000", "#FFFFFF", "#FF0000", "#00FF00"],
    params: {
      "aes_anim_director": ["今石洋之/扳机社 (Trigger)"],
      "aes_art_medium": ["赛璐璐 (Cel Shaded)"],
      "aes_line_quality": ["粗轮廓 (Thick Outlines)"],
      "aes_canvas_texture": ["平滑纸 (Smooth Paper)"],
      "aes_color_palette": ["赛博朋克:边缘行者 (Edgerunners)"],
      "aes_render_art": ["鲜艳色彩 (Vibrant Color)"]
    }
  },
  {
    id: "preset_promare_stylized",
    name: "普罗米亚 (Promare)",
    nameEn: "Style of Promare",
    group: "C. 动漫动画",
    def: "Geometric angular fire effects, pink and cyan high-contrast dualism, and minimalist vector color blocks.",
    colors: ["#FF69B4", "#00FFFF", "#FFFFFF", "#000000", "#FFFF00", "#FF4500", "#800080"],
    params: {
      "aes_anim_director": ["今石洋之/扳机社 (Trigger)"],
      "aes_art_medium": ["矢量艺术 (Vector Art)"],
      "aes_line_quality": ["无线绘 (Lineless)"],
      "aes_canvas_texture": ["平滑纸 (Smooth Paper)"],
      "aes_color_palette": ["普罗米亚 (Promare)"],
      "aes_render_art": ["卡通渲染 (Toon Shader)"]
    }
  },
  {
    id: "preset_kill_la_kill_stylized",
    name: "斩服少女 (Kill la Kill)",
    nameEn: "Style of Kill la Kill",
    group: "C. 动漫动画",
    def: "Aggressive rough linework, giant crimson screen-filling text, hyper-fast pacing, and boiling blood energy.",
    colors: ["#FF0000", "#000000", "#FFFFFF", "#FFFF00", "#0000FF", "#808080", "#FF4500"],
    params: {
      "aes_anim_director": ["今石洋之/扳机社 (Trigger)"],
      "aes_art_medium": ["赛璐璐 (Cel Shaded)"],
      "aes_line_quality": ["粗糙线 (Rough)"],
      "aes_canvas_texture": ["平滑纸 (Smooth Paper)"],
      "aes_color_palette": ["斩服少女 (Kill la Kill)"],
      "aes_render_art": ["动画赛璐璐 (Anime Cel)"]
    }
  },
  {
    id: "preset_gurren_lagann_stylized",
    name: "天元突破 (Gurren Lagann)",
    nameEn: "Style of Gurren Lagann",
    group: "C. 动漫动画",
    def: "Universal cosmic scale, drills piercing the stars, exaggerated anatomy, and the visual language of burning spirit.",
    colors: ["#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#000000", "#FFFFFF", "#FFA500"],
    params: {
      "aes_anim_director": ["今石洋之/扳机社 (Trigger)"],
      "aes_art_medium": ["赛璐璐 (Cel Shaded)"],
      "aes_line_quality": ["粗轮廓 (Thick Outlines)"],
      "aes_canvas_texture": ["平滑纸 (Smooth Paper)"],
      "aes_color_palette": ["天元突破 (Gurren Lagann)"],
      "aes_render_art": ["动画赛璐璐 (Anime Cel)"]
    }
  },
  {
    id: "preset_flcl_stylized",
    name: "特别的她 (FLCL)",
    nameEn: "Style of GAINAX",
    group: "C. 动漫动画",
    def: "Chaotic manga-panel compositions, mixed media overlays, electric guitars, and the visual metaphor of adolescent angst.",
    colors: ["#FFFF00", "#FF0000", "#0000FF", "#FFFFFF", "#000000", "#FFA500", "#800080"],
    params: {
      "aes_anim_director": ["GAINAX"],
      "aes_art_medium": ["混合媒介 (Mixed Media)"],
      "aes_line_quality": ["草图线 (Sketchy)"],
      "aes_canvas_texture": ["半调 (Halftone)"],
      "aes_color_palette": ["特别的她 (FLCL)"],
      "aes_render_art": ["数字厚涂 (Digital Painting)"]
    }
  },
  {
    id: "preset_bebop_stylized",
    name: "星际牛仔 (Cowboy Bebop)",
    nameEn: "Style of Cowboy Bebop",
    group: "C. 动漫动画",
    def: "Adult-oriented space noir, high-contrast silhouettes, jazz-inspired rhythms, and the definitive look of lonely space-age cool.",
    colors: ["#000000", "#000080", "#FF0000", "#FFFF00", "#FFFFFF", "#8B4513", "#2F4F4F"],
    params: {
      "aes_anim_director": ["渡边信一郎 (Shinichiro Watanabe)"],
      "aes_art_medium": ["赛璐璐 (Cel Shaded)"],
      "aes_line_quality": ["干净线稿 (Clean Lineart)"],
      "aes_canvas_texture": ["平滑纸 (Smooth Paper)"],
      "aes_color_palette": ["星际牛仔 (Cowboy Bebop)"],
      "aes_render_art": ["插画杰作 (Masterpiece Art)"]
    }
  },
  {
    id: "preset_champloo_stylized",
    name: "混沌武士 (Samurai Champloo)",
    nameEn: "Style of Samurai Champloo",
    group: "C. 动漫动画",
    def: "Ukiyo-e inspired backgrounds meet hip-hop graffiti, sword-fighting choreography synced to beats, and Edo-period vibes.",
    colors: ["#D2B48C", "#8B4513", "#FF0000", "#000000", "#FFFFFF", "#008000", "#FFFF00"],
    params: {
      "aes_anim_director": ["渡边信一郎 (Shinichiro Watanabe)"],
      "aes_art_medium": ["赛璐璐 (Cel Shaded)"],
      "aes_line_quality": ["干净线稿 (Clean Lineart)"],
      "aes_canvas_texture": ["纸张纹理 (Paper Texture)"],
      "aes_color_palette": ["混沌武士 (Samurai Champloo)"],
      "aes_render_art": ["插画杰作 (Masterpiece Art)"]
    }
  },
  {
    id: "preset_redline_stylized",
    name: "红线 (Redline)",
    nameEn: "Style of Takeshi Koike",
    group: "C. 动漫动画",
    def: "Extreme hyper-detail in every hand-drawn frame, massive speed lines, heavy ink shadows, and roaring galactic racers.",
    colors: ["#FF0000", "#FFFF00", "#000000", "#FFFFFF", "#0000FF", "#800080", "#FFA500"],
    params: {
      "aes_anim_director": ["小池健 (Takeshi Koike)"],
      "aes_art_medium": ["赛璐璐 (Cel Shaded)"],
      "aes_line_quality": ["粗轮廓 (Thick Outlines)"],
      "aes_canvas_texture": ["平滑纸 (Smooth Paper)"],
      "aes_color_palette": ["红线 (Redline)"],
      "aes_render_art": ["极致细节 (Ultra Detailed)"]
    }
  },
  {
    id: "preset_vampire_d_stylized",
    name: "吸血鬼猎人D (Vampire Hunter D)",
    nameEn: "Style of Vampire Hunter D",
    group: "C. 动漫动画",
    def: "Intricate baroque-gothic horror, flowing silver hair, cold moonlit palettes, and lethal vampire-slaying elegance.",
    colors: ["#000000", "#4B0082", "#8B0000", "#C0C0C0", "#FFFFFF", "#2F4F4F", "#000080"],
    params: {
      "aes_anim_director": ["川尻善昭 (Yoshiaki Kawajiri)"],
      "aes_art_medium": ["赛璐璐 (Cel Shaded)"],
      "aes_line_quality": ["细轮廓 (Thin Outlines)"],
      "aes_canvas_texture": ["平滑纸 (Smooth Paper)"],
      "aes_color_palette": ["吸血鬼猎人D (Vampire Hunter D)"],
      "aes_render_art": ["插画杰作 (Masterpiece Art)"]
    }
  },
  {
    id: "preset_ninja_scroll_stylized",
    name: "兽兵卫忍风帖 (Ninja Scroll)",
    nameEn: "Style of Ninja Scroll",
    group: "C. 动漫动画",
    def: "Deep indigo nights, exaggerated sword-stroke blood-splatter, hard-boiled character designs, and lethal ninja combat.",
    colors: ["#000080", "#0000FF", "#FF0000", "#000000", "#FFFFFF", "#8B4513", "#2F4F4F"],
    params: {
      "aes_anim_director": ["川尻善昭 (Yoshiaki Kawajiri)"],
      "aes_art_medium": ["赛璐璐 (Cel Shaded)"],
      "aes_line_quality": ["干净线稿 (Clean Lineart)"],
      "aes_canvas_texture": ["平滑纸 (Smooth Paper)"],
      "aes_color_palette": ["兽兵卫忍风帖 (Ninja Scroll)"],
      "aes_render_art": ["动画赛璐璐 (Anime Cel)"]
    }
  },
  {
    id: "preset_angels_egg_stylized",
    name: "天使之卵 (Angel's Egg)",
    nameEn: "Style of Yoshitaka Amano",
    group: "C. 动漫动画",
    def: "Mystical Yoshitaka Amano character designs, somber grey ruins, limited color palettes, and haunting spiritual stillness.",
    colors: ["#000000", "#1A1A1A", "#2F4F4F", "#FFFFFF", "#4B0082", "#808080", "#A9A9A9"],
    params: {
      "aes_anim_director": ["押井守 (Mamoru Oshii)"],
      "aes_art_medium": ["水彩晕染 (Watercolor)"],
      "aes_line_quality": ["细轮廓 (Thin Outlines)"],
      "aes_canvas_texture": ["水彩纸 (Watercolor Paper)"],
      "aes_color_palette": ["天使之卵 (Angel's Egg)"],
      "aes_render_art": ["水彩晕染 (Watercolor)"]
    }
  },
  {
    id: "preset_belladonna_stylized",
    name: "悲伤的贝拉多娜 (Belladonna)",
    nameEn: "Style of Belladonna of Sadness",
    group: "C. 动漫动画",
    def: "Animated scrolls, bleeding watercolors, psychedelic eroticism, and the tragic beauty of floral decay.",
    colors: ["#FFC0CB", "#FF0000", "#800080", "#FFFFFF", "#000000", "#FFFF00", "#0000FF"],
    params: {
      "aes_anim_director": ["虫制作公司 (Mushi Pro)"],
      "aes_art_medium": ["水彩 (Watercolor)"],
      "aes_line_quality": ["无线绘 (Lineless)"],
      "aes_canvas_texture": ["水彩纸 (Watercolor Paper)"],
      "aes_color_palette": ["悲伤的贝拉多娜 (Belladonna)"],
      "aes_render_art": ["水彩晕染 (Watercolor)"]
    }
  },
  {
    id: "preset_fantastic_planet_stylized",
    name: "奇幻星球 (Fantastic Planet)",
    nameEn: "Style of Fantastic Planet",
    group: "C. 动漫动画",
    def: "Cutout stop-motion style, pastel alien hues, surreal biological oddities, and a cold philosophical atmosphere.",
    colors: ["#87CEEB", "#F5F5DC", "#FF4500", "#0000FF", "#FFFFFF", "#000000", "#808080"],
    params: {
      "aes_anim_director": ["勒内·拉鲁 (René Laloux)"],
      "aes_art_medium": ["剪纸拼贴 (Cutout Collage)"],
      "aes_line_quality": ["干净线稿 (Clean Lineart)"],
      "aes_canvas_texture": ["纸张纹理 (Paper Texture)"],
      "aes_color_palette": ["奇幻星球 (Fantastic Planet)"],
      "aes_render_art": ["插画杰作 (Masterpiece Art)"]
    }
  },
  {
    id: "preset_heavy_metal_stylized",
    name: "重金属 (Heavy Metal)",
    nameEn: "Style of Heavy Metal",
    group: "C. 动漫动画",
    def: "80s adult pulp sci-fi covers, airbrushed textures, extreme pulp violence, and hard rock energy.",
    colors: ["#FF0000", "#0000FF", "#FFFF00", "#000000", "#FFFFFF", "#800080", "#FFA500"],
    params: {
      "aes_anim_director": ["Gerald Potterton"],
      "aes_art_medium": ["数字厚涂 (Digital Painting)"],
      "aes_line_quality": ["干净线稿 (Clean Lineart)"],
      "aes_canvas_texture": ["平滑纸 (Smooth Paper)"],
      "aes_color_palette": ["重金属 (Heavy Metal)"],
      "aes_render_art": ["油画笔触 (Oil Impasto)"]
    }
  },
  {
    id: "preset_blue_eye_stylized",
    name: "蓝眼武士 (Blue Eye Samurai)",
    nameEn: "Style of Blue Eye Samurai",
    group: "C. 动漫动画",
    def: "Bunraku puppet textures, wide cinematic framing, high-contrast blood on snow, and epic revenge atmosphere.",
    colors: ["#0000FF", "#FF0000", "#FFFFFF", "#000000", "#8B4513", "#FFA500", "#808080"],
    params: {
      "aes_anim_director": ["蓝眼武士 (Blue Eye Samurai)"],
      "aes_art_medium": ["3D渲染 (3D Render)"],
      "aes_line_quality": ["无线绘 (Lineless)"],
      "aes_canvas_texture": ["油画布 (Canvas)"],
      "aes_color_palette": ["蓝眼武士 (Blue Eye Samurai)"],
      "aes_render_art": ["极致细节 (Ultra Detailed)"]
    }
  },
  {
    id: "preset_scavengers_stylized",
    name: "拾荒者统治 (Scavengers Reign)",
    nameEn: "Style of Scavengers Reign",
    group: "C. 动漫动画",
    def: "Moebius-inspired line art, complex organic ecosystems, clean flat lines, and surreal pastel life forms.",
    colors: ["#FFC0CB", "#87CEEB", "#98FB98", "#FFFFFF", "#000000", "#FFA500", "#800080"],
    params: {
      "aes_anim_director": ["拾荒者统治 (Scavengers Reign)"],
      "aes_art_medium": ["数字绘画 (Digital Painting)"],
      "aes_line_quality": ["细轮廓 (Thin Outlines)"],
      "aes_canvas_texture": ["平滑纸 (Smooth Paper)"],
      "aes_color_palette": ["拾荒者统治 (Scavengers Reign)"],
      "aes_render_art": ["插画杰作 (Masterpiece Art)"]
    }
  },
  {
    id: "preset_witness_stylized",
    name: "证人 (The Witness)",
    nameEn: "Style of Alberto Mielgo",
    group: "C. 动漫动画",
    def: "Love, Death & Robots. Hyper-detailed face textures, glitch art, neon city lights, and high-tension urban chase.",
    colors: ["#FF00FF", "#00FFFF", "#FFFF00", "#000000", "#FFFFFF", "#FF0000", "#0000FF"],
    params: {
      "aes_anim_director": ["Alberto Mielgo"],
      "aes_art_medium": ["数字厚涂 (Digital Painting)"],
      "aes_line_quality": ["无线绘 (Lineless)"],
      "aes_canvas_texture": ["油画布 (Canvas)"],
      "aes_color_palette": ["证人 (The Witness)"],
      "aes_render_art": ["油画笔触 (Oil Impasto)"]
    }
  },
  {
    id: "preset_jibaro_stylized",
    name: "吉巴罗 (Jibaro)",
    nameEn: "Style of Jibaro",
    group: "C. 动漫动画",
    def: "Love, Death & Robots. Hyper-realistic liquid gold and water, modern dance movements, and feverish camera rotations.",
    colors: ["#FFD700", "#008000", "#0000FF", "#FF0000", "#FFFFFF", "#000000", "#8B4513"],
    params: {
      "aes_anim_director": ["Alberto Mielgo"],
      "aes_art_medium": ["3D渲染 (3D Render)"],
      "aes_line_quality": ["无线绘 (Lineless)"],
      "aes_canvas_texture": ["平滑纸 (Smooth Paper)"],
      "aes_color_palette": ["吉巴罗 (Jibaro)"],
      "aes_render_art": ["极致细节 (Ultra Detailed)"]
    }
  },
  {
    id: "preset_klaus_stylized",
    name: "克劳斯 (Klaus)",
    nameEn: "Style of Sergio Pablos",
    group: "C. 动漫动画",
    def: "Volumetric 2D looking like 3D, beautiful lighting, warm Christmas atmosphere, and tactile textures.",
    colors: ["#FFD700", "#A52A2A", "#FFFFFF", "#000080", "#006400", "#FF0000", "#FFA500"],
    params: {
      "aes_anim_director": ["Sergio Pablos"],
      "aes_art_medium": ["数字绘画 (Digital Painting)"],
      "aes_line_quality": ["无线绘 (Lineless)"],
      "aes_canvas_texture": ["纸张纹理 (Paper Texture)"],
      "aes_color_palette": ["克劳斯 (Klaus)"],
      "aes_render_art": ["插画杰作 (Masterpiece Art)"]
    }
  },
  {
    id: "preset_mitchells_stylized",
    name: "米切尔一家 (Mitchells vs Machines)",
    nameEn: "Style of Mitchells vs Machines",
    group: "C. 动漫动画",
    def: "3D mixed with hand-drawn 2D doodles, meme culture onomatopoeia, and a chaotic, fun family home-movie feel.",
    colors: ["#FFA500", "#00FFFF", "#FF00FF", "#FFFF00", "#000000", "#FFFFFF", "#FF0000"],
    params: {
      "aes_anim_director": ["Sony Pictures Animation"],
      "aes_art_medium": ["混合媒介 (Mixed Media)"],
      "aes_line_quality": ["草图线 (Sketchy)"],
      "aes_canvas_texture": ["粗糙纸板 (Cardboard)"],
      "aes_color_palette": ["米切尔一家 (Mitchells vs Machines)"],
      "aes_render_art": ["鲜艳色彩 (Vibrant Color)"]
    }
  },
  {
    id: "preset_puss_stylized",
    name: "穿靴子的猫2 (Puss in Boots)",
    nameEn: "Style of Dreamworks",
    group: "C. 动漫动画",
    def: "Variable frame rate action, oil-painted background textures, dynamic motion blur, and vibrant fantasy colors.",
    colors: ["#FFA500", "#FF0000", "#FFFF00", "#000000", "#FFFFFF", "#008000", "#0000FF"],
    params: {
      "aes_anim_director": ["梦工厂 (Dreamworks)"],
      "aes_art_medium": ["油画笔触 (Oil Impasto)"],
      "aes_line_quality": ["无线绘 (Lineless)"],
      "aes_canvas_texture": ["油画布 (Canvas)"],
      "aes_color_palette": ["穿靴子的猫2 (Puss in Boots)"],
      "aes_render_art": ["油画笔触 (Oil Impasto)"]
    }
  },
  {
    id: "preset_tmnt_stylized",
    name: "忍者神龟 (Mutant Mayhem)",
    nameEn: "Style of Mutant Mayhem",
    group: "C. 动漫动画",
    def: "Street-art graffiti style, asymmetric designs, dirty New York gritty textures, and underground neon vibes.",
    colors: ["#00FF00", "#800080", "#000000", "#FFFFFF", "#FFA500", "#FF0000", "#0000FF"],
    params: {
      "aes_anim_director": ["Jeff Rowe"],
      "aes_art_medium": ["粉笔/蜡笔 (Pastel/Crayon)"],
      "aes_line_quality": ["草图线 (Sketchy)"],
      "aes_canvas_texture": ["粗糙纸板 (Cardboard)"],
      "aes_color_palette": ["忍者神龟 (Mutant Mayhem)"],
      "aes_render_art": ["素描手绘 (Sketch)"]
    }
  },
  {
    id: "preset_wolfwalkers_stylized",
    name: "狼行者 (Wolfwalkers)",
    nameEn: "Style of Cartoon Saloon",
    group: "C. 动漫动画",
    def: "Flat perspective, woodblock print line art, autumnal colors, and magical expressive line flow.",
    colors: ["#D2B48C", "#FF8C00", "#228B22", "#000000", "#FFFFFF", "#8B4513", "#FFFF00"],
    params: {
      "aes_anim_director": ["卡通沙龙 (Cartoon Saloon)"],
      "aes_art_medium": ["水彩 (Watercolor)"],
      "aes_line_quality": ["粗轮廓 (Thick Outlines)"],
      "aes_canvas_texture": ["纸张纹理 (Paper Texture)"],
      "aes_color_palette": ["狼行者 (Wolfwalkers)"],
      "aes_render_art": ["干净线条 (Clean Lines)"]
    }
  },
  {
    id: "preset_song_sea_stylized",
    name: "海洋之歌 (Song of the Sea)",
    nameEn: "Style of Song of the Sea",
    group: "C. 动漫动画",
    def: "Circular compositions, geometric folk patterns, soft blue and white palettes, and mythical Irish atmosphere.",
    colors: ["#FFFFFF", "#87CEEB", "#000080", "#F0F8FF", "#000000", "#D3D3D3", "#FFA500"],
    params: {
      "aes_anim_director": ["卡通沙龙 (Cartoon Saloon)"],
      "aes_art_medium": ["矢量艺术 (Vector Art)"],
      "aes_line_quality": ["干净线稿 (Clean Lineart)"],
      "aes_canvas_texture": ["平滑纸 (Smooth Paper)"],
      "aes_color_palette": ["海洋之歌 (Song of the Sea)"],
      "aes_render_art": ["插画杰作 (Masterpiece Art)"]
    }
  },
  {
    id: "preset_kells_stylized",
    name: "凯尔经的秘密 (Secret of Kells)",
    nameEn: "Style of The Secret of Kells",
    group: "C. 动漫动画",
    def: "Medieval illuminated manuscript style, complex decorative borders, flat perspective, and vibrant forest greens.",
    colors: ["#006400", "#228B22", "#FFD700", "#FFFFFF", "#000000", "#8B4513", "#A52A2A"],
    params: {
      "aes_anim_director": ["卡通沙龙 (Cartoon Saloon)"],
      "aes_art_medium": ["水彩 (Watercolor)"],
      "aes_line_quality": ["细轮廓 (Thin Outlines)"],
      "aes_canvas_texture": ["羊皮纸 (Parchment)"],
      "aes_color_palette": ["凯尔经的秘密 (Secret of Kells)"],
      "aes_render_art": ["插画杰作 (Masterpiece Art)"]
    }
  },
  {
    id: "preset_earthsea_stylized",
    name: "地海战记 (Tales of Earthsea)",
    nameEn: "Style of Ghibli Late Era",
    group: "C. 动漫动画",
    def: "Classic Ghibli landscapes but with a somber tone, massive dragons, golden sunsets, and overgrown ruins.",
    colors: ["#708090", "#2F4F4F", "#A52A2A", "#000000", "#FFFFFF", "#8B4513", "#DAA520"],
    params: {
      "aes_anim_director": ["宫崎吾朗 (Ghibli CGI)"],
      "aes_art_medium": ["水彩 (Watercolor)"],
      "aes_line_quality": ["细轮廓 (Thin Outlines)"],
      "aes_canvas_texture": ["水彩纸 (Watercolor Paper)"],
      "aes_color_palette": ["地海战记 (Tales of Earthsea)"],
      "aes_render_art": ["插画杰作 (Masterpiece Art)"]
    }
  },
  {
    id: "preset_kaguya_stylized",
    name: "辉夜姬 (Princess Kaguya)",
    nameEn: "Style of Isao Takahata",
    group: "C. 动漫动画",
    def: "Charcoal linework, minimalist backgrounds with heavy whitespace, and frantic energetic lines during emotional climaxes.",
    colors: ["#FFFFFF", "#000000", "#FFC0CB", "#90EE90", "#FFFF00", "#808080", "#FF0000"],
    params: {
      "aes_anim_director": ["高畑勋 (Isao Takahata)"],
      "aes_art_medium": ["炭笔 (Charcoal)"],
      "aes_line_quality": ["草图线 (Sketchy)"],
      "aes_canvas_texture": ["水彩纸 (Watercolor Paper)"],
      "aes_color_palette": ["辉夜姬 (Princess Kaguya)"],
      "aes_render_art": ["素描手绘 (Sketch)"]
    }
  },
  {
    id: "preset_ping_pong_stylized",
    name: "乒乓 (Ping Pong)",
    nameEn: "Style of Masaaki Yuasa",
    group: "C. 动漫动画",
    def: "Extreme perspective distortion, jittery organic lines, monochromatic storyboard feel, and hyper-kinetic motion.",
    colors: ["#FFFFFF", "#000000", "#0000FF", "#FF0000", "#FFFF00", "#808080", "#008000"],
    params: {
      "aes_anim_director": ["汤浅政明 (Masaaki Yuasa)"],
      "aes_art_medium": ["数字绘画 (Digital Painting)"],
      "aes_line_quality": ["颤抖线 (Jittery)"],
      "aes_canvas_texture": ["平滑纸 (Smooth Paper)"],
      "aes_color_palette": ["乒乓 (Ping Pong)"],
      "aes_render_art": ["鲜艳色彩 (Vibrant Color)"]
    }
  },
  {
    id: "preset_tatami_stylized",
    name: "四叠半 (The Tatami Galaxy)",
    nameEn: "Style of Masaaki Yuasa",
    group: "C. 动漫动画",
    def: "Real-photo backgrounds mixed with flat animation, rapid-fire pacing, monochromatic color themes, and recursive loops.",
    colors: ["#FF0000", "#FFFFFF", "#000000", "#FFFF00", "#0000FF", "#008000", "#FFA500"],
    params: {
      "aes_anim_director": ["汤浅政明 (Masaaki Yuasa)"],
      "aes_art_medium": ["混合媒介 (Mixed Media)"],
      "aes_line_quality": ["无线绘 (Lineless)"],
      "aes_canvas_texture": ["平滑纸 (Smooth Paper)"],
      "aes_color_palette": ["四叠半 (The Tatami Galaxy)"],
      "aes_render_art": ["鲜艳色彩 (Vibrant Color)"]
    }
  },
  {
    id: "preset_mononoke_stylized",
    name: "怪化猫 (Mononoke)",
    nameEn: "Style of Kenji Nakamura",
    group: "C. 动漫动画",
    def: "Traditional Washi paper textures, Ukiyo-e flat perspective, and a vibrant, kaleidoscopic array of symbolic colors.",
    colors: ["#FF0000", "#000000", "#D2B48C", "#800080", "#FFFF00", "#FFFFFF", "#008000"],
    params: {
      "aes_anim_director": ["中村健治 (Kenji Nakamura)"],
      "aes_art_medium": ["水彩 (Watercolor)"],
      "aes_line_quality": ["细轮廓 (Thin Outlines)"],
      "aes_canvas_texture": ["纸张纹理 (Paper Texture)"],
      "aes_color_palette": ["怪化猫 (Mononoke)"],
      "aes_render_art": ["插画杰作 (Masterpiece Art)"]
    }
  },
  {
    id: "preset_gankutsuou_stylized",
    name: "岩窟王 (Gankutsuou)",
    nameEn: "Style of Mahiro Maeda",
    group: "C. 动漫动画",
    def: "Static texture overlays moving independently of characters, extreme opulence, inspired by Gustav Klimt's patterns.",
    colors: ["#FFD700", "#800080", "#000000", "#FFFFFF", "#FF0000", "#0000FF", "#008000"],
    params: {
      "aes_anim_director": ["前田真宏 (Mahiro Maeda)"],
      "aes_art_medium": ["数字绘画 (Digital Painting)"],
      "aes_line_quality": ["细轮廓 (Thin Outlines)"],
      "aes_canvas_texture": ["织物 (Fabric)"],
      "aes_color_palette": ["岩窟王 (Gankutsuou)"],
      "aes_render_art": ["极致细节 (Ultra Detailed)"]
    }
  },
  {
    id: "preset_kaiba_stylized",
    name: "海马 (Kaiba)",
    nameEn: "Style of Masaaki Yuasa",
    group: "C. 动漫动画",
    def: "Osamu Tezuka-inspired round lines, soft pastel washes, innocent aesthetic contrasting with dark science-fiction themes.",
    colors: ["#ADD8E6", "#FFB6C1", "#FFFFE0", "#FFFFFF", "#000000", "#98FB98", "#E6E6FA"],
    params: {
      "aes_anim_director": ["汤浅政明 (Masaaki Yuasa)"],
      "aes_art_medium": ["数字绘画 (Digital Painting)"],
      "aes_line_quality": ["圆滑线 (Smooth Lines)"],
      "aes_canvas_texture": ["平滑纸 (Smooth Paper)"],
      "aes_color_palette": ["海马 (Kaiba)"],
      "aes_render_art": ["插画杰作 (Masterpiece Art)"]
    }
  },
  {
    id: "preset_mind_game_stylized",
    name: "心理游戏 (Mind Game)",
    nameEn: "Style of Studio 4°C",
    group: "C. 动漫动画",
    def: "Live-action facial collage, exaggerated wide-angle perspective, watercolor rain, and uninhibited kinetic joy.",
    colors: ["#0000FF", "#FF0000", "#FFFF00", "#000000", "#FFFFFF", "#00FF00", "#FFA500"],
    params: {
      "aes_anim_director": ["汤浅政明 (Masaaki Yuasa)"],
      "aes_art_medium": ["混合媒介 (Mixed Media)"],
      "aes_line_quality": ["草图线 (Sketchy)"],
      "aes_canvas_texture": ["粗糙纸板 (Cardboard)"],
      "aes_color_palette": ["心理游戏 (Mind Game)"],
      "aes_render_art": ["鲜艳色彩 (Vibrant Color)"]
    }
  },
  {
    id: "preset_tekkon_stylized",
    name: "恶童 (Tekkonkinkreet)",
    nameEn: "Style of Studio 4°C",
    group: "C. 动漫动画",
    def: "Highly detailed hand-drawn urban backgrounds, fisheye lens distortion, graffiti aesthetic, and gritty childhood energy.",
    colors: ["#808080", "#A52A2A", "#000000", "#FFFFFF", "#FF0000", "#FFFF00", "#0000FF"],
    params: {
      "aes_anim_director": ["Studio 4°C"],
      "aes_art_medium": ["水彩 (Watercolor)"],
      "aes_line_quality": ["草图线 (Sketchy)"],
      "aes_canvas_texture": ["纸张纹理 (Paper Texture)"],
      "aes_color_palette": ["恶童 (Tekkonkinkreet)"],
      "aes_render_art": ["极致细节 (Ultra Detailed)"]
    }
  },
  {
    id: "preset_children_sea_stylized",
    name: "海兽之子 (Children of the Sea)",
    nameEn: "Style of Ayumu Watanabe",
    group: "C. 动漫动画",
    def: "Extremely dense linework, fluid water dynamics, bioluminescent sea life, and cosmic spiritual themes.",
    colors: ["#0000FF", "#00FFFF", "#FFFFFF", "#000000", "#FFD700", "#FF00FF", "#000080"],
    params: {
      "aes_anim_director": ["渡边步 (Ayumu Watanabe)"],
      "aes_art_medium": ["数字绘画 (Digital Painting)"],
      "aes_line_quality": ["细轮廓 (Thin Outlines)"],
      "aes_canvas_texture": ["平滑纸 (Smooth Paper)"],
      "aes_color_palette": ["海兽之子 (Children of the Sea)"],
      "aes_render_art": ["插画杰作 (Masterpiece Art)"]
    }
  },
  {
    id: "preset_belle_stylized",
    name: "龙与雀斑公主 (Belle)",
    nameEn: "Style of Hosoda Virtual",
    group: "C. 动漫动画",
    def: "Ornate virtual world designs, millions of floating particles, pink petal storms, and digital diva aesthetics.",
    colors: ["#FF69B4", "#FF1493", "#0000FF", "#FFFFFF", "#000000", "#FFFF00", "#800080"],
    params: {
      "aes_anim_director": ["细田守 (Mamoru Hosoda)"],
      "aes_art_medium": ["3D渲染 (3D Render)"],
      "aes_line_quality": ["无线绘 (Lineless)"],
      "aes_canvas_texture": ["平滑纸 (Smooth Paper)"],
      "aes_color_palette": ["龙与雀斑公主 (Belle)"],
      "aes_render_art": ["C4D 风格 (Cinema 4D)"]
    }
  },
  {
    id: "preset_summer_wars_stylized",
    name: "夏日大作战 (Summer Wars)",
    nameEn: "Style of Mamoru Hosoda",
    group: "C. 动漫动画",
    def: "Pure white backgrounds in the virtual world (OZ), red lines, flattened characters, and summer family vibes.",
    colors: ["#FFFFFF", "#FF0000", "#000000", "#FFFF00", "#0000FF", "#008000", "#FFA500"],
    params: {
      "aes_anim_director": ["细田守 (Mamoru Hosoda)"],
      "aes_art_medium": ["赛璐璐 (Cel Shaded)"],
      "aes_line_quality": ["无影 (No Shadow)"],
      "aes_canvas_texture": ["平滑纸 (Smooth Paper)"],
      "aes_color_palette": ["夏日大作战 (Summer Wars)"],
      "aes_render_art": ["干净线条 (Clean Lines)"]
    }
  },
  {
    id: "preset_sonny_boy_stylized",
    name: "漂流少年 (Sonny Boy)",
    nameEn: "Style of Sonny Boy",
    group: "C. 动漫动画",
    def: "Hisashi Eguchi-inspired character art, saturated solid color backgrounds, surreal logic, and adolescent ennui.",
    colors: ["#000000", "#FFFFFF", "#FF4500", "#1E90FF", "#FFFF00", "#32CD32", "#FF69B4"],
    params: {
      "aes_anim_director": ["夏目真悟 (Shingo Natsume)"],
      "aes_art_medium": ["赛璐璐 (Cel Shaded)"],
      "aes_line_quality": ["干净线稿 (Clean Lineart)"],
      "aes_canvas_texture": ["平滑纸 (Smooth Paper)"],
      "aes_color_palette": ["漂流少年 (Sonny Boy)"],
      "aes_render_art": ["插画杰作 (Masterpiece Art)"]
    }
  },

  // ==========================================
  // F. 艺术与实验 (Art & Experimental) - 10
  // ==========================================
  {
    id: "preset_tree_of_life_stylized",
    name: "生命之树 (Tree of Life)",
    nameEn: "Style of Terrence Malick",
    group: "F. 艺术实验",
    def: "Wide-angle handheld camera, lens flares, floating sensation, natural lighting, and a blend of cosmic and microscopic imagery.",
    colors: ["#FFFFFF", "#87CEEB", "#00FF00", "#FFD700", "#000000", "#8B4513", "#FFC0CB"],
    params: {
      "aes_director_style": ["马力克 (Terrence Malick)"],
      "aes_camera_system": ["ARRI ALEXA (ARRI ALEXA)"],
      "aes_lens_series": ["Zeiss Master Primes (Zeiss Master Primes)"],
      "aes_texture_render": ["柔光镜 (Diffusion)"],
      "aes_physical_grain": ["微细 35mm (Micro 35mm Grain)"],
      "aes_base_tone": ["自然主义 (Naturalism)"],
      "aes_color_science": ["ARRI LogC (ARRI LogC)"],
      "aes_color_palette": ["生命之树 (Tree of Life)"],
      "aes_render_art": ["插画杰作 (Masterpiece Art)"]
    }
  },
  {
    id: "preset_koyaanisqatsi_stylized",
    name: "失衡生活 (Koyaanisqatsi)",
    nameEn: "Style of Godfrey Reggio",
    group: "F. 艺术实验",
    def: "Time-lapse cinematography, urban light trails, fast-moving clouds, non-narrative scale, and Philip Glass rhythms.",
    colors: ["#000000", "#FF0000", "#FFFF00", "#FFFFFF", "#0000FF", "#808080", "#008000"],
    params: {
      "aes_director_style": ["雷吉奥 (Godfrey Reggio)"],
      "aes_camera_system": ["Arriflex 35 BL (Arriflex 35 BL)"],
      "aes_lens_series": ["Zeiss Super Speed (Zeiss Super Speed)"],
      "aes_texture_render": ["高对比硬核感 (Stark High-Contrast)"],
      "aes_physical_grain": ["标准 35mm (Standard 35mm Grain)"],
      "aes_base_tone": ["生动广告 (Vivid Commercial)"],
      "aes_color_science": ["Kodak 5247 (Kodak 5247)"],
      "aes_color_palette": ["失衡生活 (Koyaanisqatsi)"],
      "aes_render_art": ["极致细节 (Ultra Detailed)"]
    }
  },
  {
    id: "preset_baraka_stylized",
    name: "天地玄黄 (Baraka)",
    nameEn: "Style of Ron Fricke",
    group: "F. 艺术实验",
    def: "70mm film stock, global landscapes, religious rituals, extreme high definition, and majestic slow motion.",
    colors: ["#DAA520", "#8B4513", "#000000", "#FFFFFF", "#FF4500", "#228B22", "#0000FF"],
    params: {
      "aes_director_style": ["罗恩·弗里克 (Ron Fricke)"],
      "aes_camera_system": ["Todd-AO 65mm (Todd-AO)"],
      "aes_lens_series": ["Hasselblad Prime DNA (Hasselblad)"],
      "aes_texture_render": ["中性真实还原 (Neutral Authenticity)"],
      "aes_physical_grain": ["微细 35mm (Micro 35mm Grain)"],
      "aes_base_tone": ["自然主义 (Naturalism)"],
      "aes_color_science": ["Kodak 5296 (Kodak 5296)"],
      "aes_color_palette": ["天地玄黄 (Baraka)"],
      "aes_render_art": ["插画杰作 (Masterpiece Art)"]
    }
  },
  {
    id: "preset_samsara_stylized",
    name: "轮回 (Samsara)",
    nameEn: "Style of Ron Fricke",
    group: "F. 艺术实验",
    def: "No dialogue, sacred temples, industrial assembly lines, exquisite geometric compositions, and a visual meditative state.",
    colors: ["#FFD700", "#8B0000", "#000000", "#FFFFFF", "#0000FF", "#008000", "#800080"],
    params: {
      "aes_director_style": ["罗恩·弗里克 (Ron Fricke)"],
      "aes_camera_system": ["Panavision System 65 (System 65)"],
      "aes_lens_series": ["Panavision Spherical (Panavision Spherical)"],
      "aes_texture_render": ["中性真实还原 (Neutral Authenticity)"],
      "aes_physical_grain": ["微细 35mm (Micro 35mm Grain)"],
      "aes_base_tone": ["自然主义 (Naturalism)"],
      "aes_color_science": ["Kodak Vision3 (Kodak Vision3)"],
      "aes_color_palette": ["轮回 (Samsara)"],
      "aes_render_art": ["插画杰作 (Masterpiece Art)"]
    }
  },
  {
    id: "preset_dogville_stylized",
    name: "狗镇 (Dogville)",
    nameEn: "Style of Lars von Trier",
    group: "F. 艺术实验",
    def: "Minimalist stage setting, chalk lines on floor instead of walls, high-angle overhead shots, and theatrical lighting.",
    colors: ["#000000", "#FFFFFF", "#808080", "#A52A2A", "#D2B48C", "#2F4F4F", "#000080"],
    params: {
      "aes_director_style": ["冯·提尔 (Lars von Trier)"],
      "aes_camera_system": ["Sony CineAlta F900 (Sony CineAlta F900)"],
      "aes_lens_series": ["Angénieux Zoom (Angénieux Zoom)"],
      "aes_texture_render": ["低保真模拟 (Lo-Fi Analog)"],
      "aes_physical_grain": ["数码传感器噪点 (Digital Sensor Noise)"],
      "aes_base_tone": ["中性基准 (Neutral Standard)"],
      "aes_color_science": ["Rec.709 (Rec.709)"],
      "aes_color_palette": ["狗镇 (Dogville)"],
      "aes_render_art": ["干净线条 (Clean Lines)"]
    }
  },
  {
    id: "preset_waking_life_stylized",
    name: "半梦半醒的人生 (Waking Life)",
    nameEn: "Style of Richard Linklater",
    group: "F. 艺术实验",
    def: "Rotoscope animation, floating jittery lines, dream logic, philosophical dialogues, and fluid color shifts.",
    colors: ["#FF0000", "#0000FF", "#FFFF00", "#00FF00", "#FFA500", "#800080", "#FFFFFF"],
    params: {
      "aes_director_style": ["林克莱特 (Richard Linklater)"],
      "aes_camera_system": ["Digital Rotoscope (Rotoscope)"],
      "aes_lens_series": ["Standard Video Lens (Video Lens)"],
      "aes_texture_render": ["有机电影感 (Organic Film)"],
      "aes_physical_grain": ["线条颤动 (Line Jitter)"],
      "aes_base_tone": ["生动广告 (Vivid Commercial)"],
      "aes_color_science": ["Digital Paint (Digital Paint)"],
      "aes_color_palette": ["半梦半醒的人生 (Waking Life)"],
      "aes_render_art": ["数字厚涂 (Digital Painting)"]
    }
  },
  {
    id: "preset_scanner_darkly_stylized",
    name: "黑暗扫描仪 (A Scanner Darkly)",
    nameEn: "Style of A Scanner Darkly",
    group: "F. 艺术实验",
    def: "Digital rotoscope animation, sci-fi conspiracies, scrambled scramble suits, paranoid perspectives, and dark tones.",
    colors: ["#000000", "#000080", "#808080", "#2F4F4F", "#8B4513", "#FFFF00", "#FFFFFF"],
    params: {
      "aes_director_style": ["林克莱特 (Richard Linklater)"],
      "aes_camera_system": ["Digital Rotoscope (Rotoscope)"],
      "aes_lens_series": ["Standard Video Lens (Video Lens)"],
      "aes_texture_render": ["有机电影感 (Organic Film)"],
      "aes_physical_grain": ["线条颤动 (Line Jitter)"],
      "aes_base_tone": ["冷峻工业锐度 (Clinical Sharpness)"],
      "aes_color_science": ["Digital Paint (Digital Paint)"],
      "aes_color_palette": ["黑暗扫描仪 (A Scanner Darkly)"],
      "aes_render_art": ["数字厚涂 (Digital Painting)"]
    }
  },
  {
    id: "preset_holy_motors_stylized",
    name: "神圣车行 (Holy Motors)",
    nameEn: "Style of Leos Carax",
    group: "F. 艺术实验",
    def: "Nocturnal Paris, white limousines, green neon glow, bizarre performance art, and a mix of digital and film looks.",
    colors: ["#000000", "#00FF00", "#FFFFFF", "#FF0000", "#808080", "#0000FF", "#FFFF00"],
    params: {
      "aes_director_style": ["卡拉克斯 (Leos Carax)"],
      "aes_camera_system": ["Red Epic (Red Epic)"],
      "aes_lens_series": ["Zeiss Master Primes (Zeiss Master Primes)"],
      "aes_texture_render": ["数码平滑协议 (Smooth Digital Finish)"],
      "aes_physical_grain": ["数码传感器噪点 (Digital Sensor Noise)"],
      "aes_base_tone": ["千禧视觉 (Y2K Early Digital)"],
      "aes_color_science": ["RedLogFilm (RedLogFilm)"],
      "aes_color_palette": ["神圣车行 (Holy Motors)"],
      "aes_render_art": ["极致细节 (Ultra Detailed)"]
    }
  },
  {
    id: "preset_man_camera_stylized",
    name: "持摄影机的人 (Man with a Movie Camera)",
    nameEn: "Style of Dziga Vertov",
    group: "F. 艺术实验",
    def: "Soviet montage theory, double exposure, city symphony, black and white, and hyper-fast rhythmic editing.",
    colors: ["#000000", "#FFFFFF", "#808080", "#C0C0C0", "#A9A9A9", "#D3D3D3", "#F5F5F5"],
    params: {
      "aes_director_style": ["维尔托夫 (Dziga Vertov)"],
      "aes_camera_system": ["Debrie Parvo (Debrie Parvo)"],
      "aes_lens_series": ["Zeiss Tessar (Zeiss Tessar)"],
      "aes_texture_render": ["物理磨损质感 (Distressed Celluloid)"],
      "aes_physical_grain": ["粗糙 16mm (Rough 16mm Grain)"],
      "aes_base_tone": ["艺术黑白 (Fine-Art Mono)"],
      "aes_color_science": ["Kodak Plus-X (Kodak Plus-X)"],
      "aes_color_palette": ["持摄影机的人 (Man with a Movie Camera)"],
      "aes_render_art": ["素描手绘 (Sketch)"]
    }
  },
  {
    id: "preset_andalou_stylized",
    name: "一条安达鲁狗 (Un Chien Andalou)",
    nameEn: "Style of Luis Buñuel",
    group: "F. 艺术实验",
    def: "Slicing of eyeballs, ants on palm, dead donkey on piano, high-contrast B&W, and pure dream logic.",
    colors: ["#000000", "#FFFFFF", "#808080", "#A9A9A9", "#C0C0C0", "#D3D3D3", "#F5F5F5"],
    params: {
      "aes_director_style": ["布努埃尔 (Luis Buñuel)"],
      "aes_camera_system": ["Debrie Parvo (Debrie Parvo)"],
      "aes_lens_series": ["Zeiss Tessar (Zeiss Tessar)"],
      "aes_texture_render": ["有机电影感 (Organic Film)"],
      "aes_physical_grain": ["粗糙 16mm (Rough 16mm Grain)"],
      "aes_base_tone": ["艺术黑白 (Fine-Art Mono)"],
      "aes_color_science": ["Kodak Plus-X (Kodak Plus-X)"],
      "aes_color_palette": ["一条安达鲁狗 (Un Chien Andalou)"],
      "aes_render_art": ["素描手绘 (Sketch)"]
    }
  },

  // ==========================================
  // G. 经典短片 (Classic Shorts) - 10
  // ==========================================
  {
    id: "preset_la_jetee_stylized",
    name: "堤 (La Jetée)",
    nameEn: "Style of Chris Marker",
    group: "G. 经典短片",
    def: "Static photo-montage, heavy grain B&W, post-war Paris ruins, time travel, and haunting still memories.",
    colors: ["#000000", "#FFFFFF", "#808080", "#A9A9A9", "#C0C0C0", "#D3D3D3", "#F5F5F5"],
    params: {
      "aes_director_style": ["克里斯·马克 (Chris Marker)"],
      "aes_camera_system": ["Pentax Camera (Pentax Still)"],
      "aes_lens_series": ["Takumar (Takumar)"],
      "aes_texture_render": ["物理磨损质感 (Distressed Celluloid)"],
      "aes_physical_grain": ["粗糙 16mm (Rough 16mm Grain)"],
      "aes_base_tone": ["艺术黑白 (Fine-Art Mono)"],
      "aes_color_science": ["Kodak Tri-X (Kodak Tri-X)"],
      "aes_color_palette": ["堤 (La Jetée)"],
      "aes_render_art": ["素描手绘 (Sketch)"]
    }
  },
  {
    id: "preset_meshes_stylized",
    name: "午后的迷惘 (Meshes of the Afternoon)",
    nameEn: "Style of Maya Deren",
    group: "G. 经典短片",
    def: "Repetitive actions, mirror-faced figures, knives, sharp shadows, and California sunlight nightmares.",
    colors: ["#000000", "#FFFFFF", "#808080", "#A9A9A9", "#C0C0C0", "#D3D3D3", "#F5F5F5"],
    params: {
      "aes_director_style": ["玛雅·黛伦 (Maya Deren)"],
      "aes_camera_system": ["Bolex H16 (Bolex H16)"],
      "aes_lens_series": ["Kern Switar (Kern Switar)"],
      "aes_texture_render": ["有机电影感 (Organic Film)"],
      "aes_physical_grain": ["粗糙 16mm (Rough 16mm Grain)"],
      "aes_base_tone": ["艺术黑白 (Fine-Art Mono)"],
      "aes_color_science": ["Kodak Plus-X (Kodak Plus-X)"],
      "aes_color_palette": ["午后的迷惘 (Meshes of the Afternoon)"],
      "aes_render_art": ["素描手绘 (Sketch)"]
    }
  },
  {
    id: "preset_frankweenie_stylized",
    name: "科学怪狗 (Frankenweenie)",
    nameEn: "Style of Tim Burton",
    group: "G. 经典短片",
    def: "Gothic B&W, stop-motion textures, visible stitch lines, exaggerated expressionist shadows, and lightning.",
    colors: ["#000000", "#FFFFFF", "#808080", "#A9A9A9", "#C0C0C0", "#D3D3D3", "#F5F5F5"],
    params: {
      "aes_director_style": ["蒂姆·波顿 (Tim Burton)"],
      "aes_camera_system": ["Canon EOS R5 (Stop Motion)"],
      "aes_lens_series": ["Canon Macro (Canon Macro)"],
      "aes_texture_render": ["粘土定格 (Claymation)"],
      "aes_physical_grain": ["微细 35mm (Micro 35mm Grain)"],
      "aes_base_tone": ["艺术黑白 (Fine-Art Mono)"],
      "aes_color_science": ["Rec.709 (Rec.709)"],
      "aes_color_palette": ["科学怪狗 (Frankenweenie)"],
      "aes_render_art": ["插画杰作 (Masterpiece Art)"]
    }
  },
  {
    id: "preset_balance_stylized",
    name: "平衡 (Balance)",
    nameEn: "Style of Lauenstein Brothers",
    group: "G. 经典短片",
    def: "Grey-scale tones, floating platforms, trench-coated figures, minimalist design, and tactile gravity physics.",
    colors: ["#808080", "#696969", "#A9A9A9", "#C0C0C0", "#D3D3D3", "#000000", "#FFFFFF"],
    params: {
      "aes_director_style": ["Lauenstein Brothers (Lauenstein)"],
      "aes_camera_system": ["Stop Motion Camera (Stop Motion)"],
      "aes_lens_series": ["Standard Lens (Standard)"],
      "aes_texture_render": ["粘土定格 (Claymation)"],
      "aes_physical_grain": ["微细 35mm (Micro 35mm Grain)"],
      "aes_base_tone": ["哑光高级灰 (Muted Matte)"],
      "aes_color_science": ["Rec.709 (Rec.709)"],
      "aes_color_palette": ["平衡 (Balance)"],
      "aes_render_art": ["插画杰作 (Masterpiece Art)"]
    }
  },
  {
    id: "preset_paperman_stylized",
    name: "纸人 (Paperman)",
    nameEn: "Style of Paperman",
    group: "G. 经典短片",
    def: "Black and white base, a single splash of red lipstick, hand-drawn 2D lines combined with modern 3D lighting.",
    colors: ["#000000", "#FFFFFF", "#FF0000", "#808080", "#C0C0C0", "#A9A9A9", "#D3D3D3"],
    params: {
      "aes_director_style": ["John Kahrs (Disney)"],
      "aes_camera_system": ["Virtual Camera (CG)"],
      "aes_lens_series": ["Virtual Lens (CG)"],
      "aes_texture_render": ["干净线稿 (Clean Lineart)"],
      "aes_physical_grain": ["纸张纹理 (Paper Texture)"],
      "aes_base_tone": ["艺术黑白 (Fine-Art Mono)"],
      "aes_color_science": ["Rec.709 (Rec.709)"],
      "aes_color_palette": ["纸人 (Paperman)"],
      "aes_render_art": ["干净线条 (Clean Lines)"]
    }
  },
  {
    id: "preset_logorama_stylized",
    name: "商标世界 (Logorama)",
    nameEn: "Style of Logorama",
    group: "G. 经典短片",
    def: "High saturation colors, world built entirely from brand logos, flat vector graphic style, and disaster-movie energy.",
    colors: ["#FF0000", "#FFFF00", "#0000FF", "#008000", "#FFA500", "#FFFFFF", "#000000"],
    params: {
      "aes_director_style": ["H5 (French Collective)"],
      "aes_camera_system": ["Virtual Camera (CG)"],
      "aes_lens_series": ["Virtual Lens (CG)"],
      "aes_texture_render": ["极简色块 (Flat Color)"],
      "aes_physical_grain": ["极致纯净 (Denoised/Pristine)"],
      "aes_base_tone": ["生动广告 (Vivid Commercial)"],
      "aes_color_science": ["Rec.709 (Rec.709)"],
      "aes_color_palette": ["商标世界 (Logorama)"],
      "aes_render_art": ["矢量艺术 (Vector Art)"]
    }
  },
  {
    id: "preset_tango_stylized",
    name: "探戈 (Tango)",
    nameEn: "Style of Zbigniew Rybczyński",
    group: "G. 经典短片",
    def: "Fixed camera position, dozens of looped actions layered together, crowded room, surreal collage aesthetic.",
    colors: ["#0000FF", "#FF0000", "#FFFF00", "#008000", "#FFA500", "#800080", "#FFFFFF"],
    params: {
      "aes_director_style": ["Zbigniew Rybczyński (Rybczyński)"],
      "aes_camera_system": ["Optical Printer (Optical Printer)"],
      "aes_lens_series": ["Standard Lens (Standard)"],
      "aes_texture_render": ["剪纸拼贴 (Cutout Collage)"],
      "aes_physical_grain": ["粗糙 16mm (Rough 16mm Grain)"],
      "aes_base_tone": ["复古褪色质感 (Faded Vintage)"],
      "aes_color_science": ["Kodak Ektachrome (Kodak Ektachrome)"],
      "aes_color_palette": ["探戈 (Tango)"],
      "aes_render_art": ["剪纸拼贴 (Cutout Collage)"]
    }
  },
  {
    id: "preset_father_daughter_stylized",
    name: "父与女 (Father and Daughter)",
    nameEn: "Style of Michael Dudok de Wit",
    group: "G. 经典短片",
    def: "Minimalist ink-wash lines, deep sepia tones, vast horizons, wind-driven motion, and bicycle symbolism.",
    colors: ["#D2B48C", "#8B4513", "#A0522D", "#F5DEB3", "#DEB887", "#000000", "#FFFFFF"],
    params: {
      "aes_director_style": ["迈克尔·度德威特 (Michaël Dudok de Wit)"],
      "aes_camera_system": ["Hand Drawn (2D Animation)"],
      "aes_lens_series": ["Virtual Lens (CG)"],
      "aes_texture_render": ["水彩晕染 (Watercolor Wash)"],
      "aes_physical_grain": ["纸张纹理 (Paper Texture)"],
      "aes_base_tone": ["复古褪色质感 (Faded Vintage)"],
      "aes_color_science": ["Sepia Tone (Sepia)"],
      "aes_color_palette": ["父与女 (Father and Daughter)"],
      "aes_render_art": ["水彩晕染 (Watercolor)"]
    }
  },
  {
    id: "preset_vincent_stylized",
    name: "文森特 (Vincent)",
    nameEn: "Style of Vincent",
    group: "G. 经典短片",
    def: "Early Tim Burton stop-motion, high-contrast B&W, expressionist shadows, and a dark gothic fairytale vibe.",
    colors: ["#000000", "#FFFFFF", "#1A1A1A", "#333333", "#4D4D4D", "#666666", "#808080"],
    params: {
      "aes_director_style": ["蒂姆·波顿 (Tim Burton)"],
      "aes_camera_system": ["16mm Bolex (Bolex H16)"],
      "aes_lens_series": ["Standard Lens (Standard)"],
      "aes_texture_render": ["粘土定格 (Claymation)"],
      "aes_physical_grain": ["粗糙 16mm (Rough 16mm Grain)"],
      "aes_base_tone": ["艺术黑白 (Fine-Art Mono)"],
      "aes_color_science": ["Kodak Tri-X (Kodak Tri-X)"],
      "aes_color_palette": ["文森特 (Vincent)"],
      "aes_render_art": ["插画杰作 (Masterpiece Art)"]
    }
  },
  {
    id: "preset_cat_soup_stylized",
    name: "猫汤 (Cat Soup)",
    nameEn: "Style of Cat Soup",
    group: "G. 经典短片",
    def: "Surrealism, absurdism, violence, watercolor-like hues, dream logic, and hallucinatory transformations.",
    colors: ["#FF0000", "#0000FF", "#FFFF00", "#00FF00", "#FFA500", "#800080", "#FFFFFF"],
    params: {
      "aes_director_style": ["佐藤龙雄 (Tatsuo Sato)"],
      "aes_camera_system": ["Hand Drawn (2D Animation)"],
      "aes_lens_series": ["Virtual Lens (CG)"],
      "aes_texture_render": ["水彩晕染 (Watercolor Wash)"],
      "aes_physical_grain": ["纸张纹理 (Paper Texture)"],
      "aes_base_tone": ["生动广告 (Vivid Commercial)"],
      "aes_color_science": ["Rec.709 (Rec.709)"],
      "aes_color_palette": ["猫汤 (Cat Soup)"],
      "aes_render_art": ["鲜艳色彩 (Vibrant Color)"]
    }
  }
];
