
import { AestheticPreset } from '../types';

export const MASTER_PRESETS_REALISM: AestheticPreset[] = [
  // ==========================================
  // A. 顶级剧集与现代电影 (Prestige TV & Modern Cinema) - 20 Items
  // ==========================================
  {
    id: "preset_better_call_saul",
    name: "风骚律师 (Better Call Saul)",
    nameEn: "Style of Better Call Saul",
    group: "A. 顶级剧集",
    def: "Wide-angle low camera, minimalist composition, contrast between desert yellows and cold interiors, highlighting existential moral dilemmas.",
    colors: ["#D4AF37", "#8B4513", "#000000", "#A9A9A9", "#FFFFFF", "#4682B4", "#F5DEB3"],
    params: {
      "aes_director_style": ["文斯·吉里根 (Vince Gilligan)"],
      "aes_camera_system": ["RED V-RAPTOR [X] (RED V-RAPTOR [X])"],
      "aes_optical_format": ["Super 35mm"],
      "aes_lens_series": ["Zeiss Master Primes (Zeiss Master Primes)"],
      "aes_texture_render": ["冷峻工业锐度 (Clinical Sharpness)"],
      "aes_physical_grain": ["微细 35mm (Micro 35mm Grain)"],
      "aes_base_tone": ["自然主义 (Naturalism)"],
      "aes_color_science": ["ARRI LogC (ARRI LogC)"],
      "aes_color_palette": ["沙漠尘土 (Desert Dust)"],
      "aes_render_real": ["大师级杰作 (Masterpiece)"]
    }
  },
  {
    id: "preset_mr_robot",
    name: "黑客军团 (Mr. Robot)",
    nameEn: "Style of Mr. Robot",
    group: "A. 顶级剧集",
    def: "Unconventional framing with characters positioned at edges or corners, oppressive overhead lighting, evoking high-tension psychological thrill.",
    colors: ["#000000", "#1C1C1C", "#2F4F4F", "#708090", "#FFFFFF", "#FF0000", "#00FF00"],
    params: {
      "aes_director_style": ["山姆·艾斯梅尔 (Sam Esmail)"],
      "aes_camera_system": ["RED MONSTRO (RED MONSTRO)"],
      "aes_optical_format": ["VistaVision"],
      "aes_lens_series": ["Zeiss Master Primes (Zeiss Master Primes)"],
      "aes_texture_render": ["数码平滑协议 (Smooth Digital Finish)"],
      "aes_physical_grain": ["数码传感器噪点 (Digital Sensor Noise)"],
      "aes_base_tone": ["冷峻工业锐度 (Clinical Sharpness)"],
      "aes_color_science": ["RED IPP2 (RED IPP2)"],
      "aes_color_palette": ["赛博蓝光 (Cyber Blue)"],
      "aes_render_real": ["锐利聚焦 (Sharp Focus)"]
    }
  },
  {
    id: "preset_succession",
    name: "继承之战 (Succession)",
    nameEn: "Style of Succession",
    group: "A. 顶级剧集",
    def: "Digital cinematography with filmic texture, frequent snap zooms, and a fly-on-the-wall documentary look into elite wealth.",
    colors: ["#F5F5DC", "#D2B48C", "#000080", "#000000", "#FFFFFF", "#8B4513", "#708090"],
    params: {
      "aes_director_style": ["亚当·麦凯 (McKay)"],
      "aes_camera_system": ["Arricam LT (Arricam LT)"],
      "aes_optical_format": ["35mm Film"],
      "aes_lens_series": ["Angénieux Zoom (Angénieux Zoom)"],
      "aes_texture_render": ["有机电影感 (Organic Film)"],
      "aes_physical_grain": ["标准 35mm (Standard 35mm Grain)"],
      "aes_base_tone": ["自然主义 (Naturalism)"],
      "aes_color_science": ["Kodak Vision3 (Kodak Vision3)"],
      "aes_color_palette": ["老钱风 (Old Money)"],
      "aes_render_real": ["电影质感 (Cinematic)"]
    }
  },
  {
    id: "preset_mindhunter",
    name: "心灵猎人 (Mindhunter)",
    nameEn: "Style of Mindhunter",
    group: "A. 顶级剧集",
    def: "Classic David Fincher coldness: extremely stable shots, yellow-green color cast, and psychological depth hidden in sharp shadows.",
    colors: ["#556B2F", "#8B4513", "#000000", "#2F4F4F", "#F5F5DC", "#A9A9A9", "#FFFFFF"],
    params: {
      "aes_director_style": ["芬奇 (David Fincher)"],
      "aes_camera_system": ["RED MONSTRO (RED MONSTRO)"],
      "aes_optical_format": ["65mm Large Format"],
      "aes_lens_series": ["Leica Summilux-C (Leica Summilux-C)"],
      "aes_texture_render": ["冷峻工业锐度 (Clinical Sharpness)"],
      "aes_physical_grain": ["极致纯净 (Denoised/Pristine)"],
      "aes_base_tone": ["芬奇黄绿 (Fincher Yellow-Green)"],
      "aes_color_science": ["RED IPP2 (RED IPP2)"],
      "aes_color_palette": ["芬奇黄绿 (Fincher Green)"],
      "aes_render_real": ["锐利聚焦 (Sharp Focus)"]
    }
  },
  {
    id: "preset_euphoria",
    name: "亢奋 (Euphoria)",
    nameEn: "Style of Euphoria",
    group: "A. 顶级剧集",
    def: "Kodak Ektachrome texture, heavy use of purple, blue and gold glitter, capturing the psychedelic and chaotic emotions of youth.",
    colors: ["#800080", "#4B0082", "#FF00FF", "#0000FF", "#FFD700", "#00FFFF", "#FFFFFF"],
    params: {
      "aes_director_style": ["萨姆·莱文森 (Sam Levinson)"],
      "aes_camera_system": ["Arriflex 435 (Arriflex 435)"],
      "aes_optical_format": ["35mm Film"],
      "aes_lens_series": ["Panavision Primos (Panavision Primos)"],
      "aes_texture_render": ["湿润高光泽 (Glossy / Wet Look)"],
      "aes_physical_grain": ["标准 35mm (Standard 35mm Grain)"],
      "aes_base_tone": ["千禧视觉 (Y2K Early Digital)"],
      "aes_color_science": ["Kodak Ektachrome (Kodak Ektachrome)"],
      "aes_color_palette": ["亢奋 (Euphoria)"],
      "aes_render_real": ["胶片颗粒 (Film Grain)"]
    }
  },
  {
    id: "preset_the_bear",
    name: "熊家餐馆 (The Bear)",
    nameEn: "Style of The Bear",
    group: "A. 顶级剧集",
    def: "High-pressure kitchen environment, steam, sweat, tight extreme close-ups, capturing order emerging from absolute chaos.",
    colors: ["#FFFFFF", "#708090", "#000000", "#8B4513", "#4682B4", "#A52A2A", "#D3D3D3"],
    params: {
      "aes_director_style": ["克里斯托弗·斯托勒 (Christopher Storer)"],
      "aes_camera_system": ["ARRI ALEXA Mini LF (ARRI ALEXA Mini LF)"],
      "aes_optical_format": ["Large Format"],
      "aes_lens_series": ["Zeiss Super Speed (Zeiss Super Speed)"],
      "aes_texture_render": ["湿润高光泽 (Glossy / Wet Look)"],
      "aes_physical_grain": ["细腻 35mm (Fine 35mm Grain)"],
      "aes_base_tone": ["自然主义 (Naturalism)"],
      "aes_color_science": ["ARRI LogC (ARRI LogC)"],
      "aes_color_palette": ["食欲浓彩 (Food Rich)"],
      "aes_render_real": ["微距细节 (Macro Detail)"]
    }
  },
  {
    id: "preset_severance",
    name: "人生切割术 (Severance)",
    nameEn: "Style of Severance",
    group: "A. 顶级剧集",
    def: "Sterile white corporate offices, retro-futurism, perfect symmetry, and a disturbing level of tidy, oppressive order.",
    colors: ["#FFFFFF", "#F0FFFF", "#006400", "#000080", "#808080", "#000000", "#A9A9A9"],
    params: {
      "aes_director_style": ["本·斯蒂勒 (Ben Stiller)"],
      "aes_camera_system": ["Sony Venice 2 (Sony Venice 2)"],
      "aes_optical_format": ["Full Frame"],
      "aes_lens_series": ["Panavision C-Series (Panavision C-Series)"],
      "aes_texture_render": ["哑光磨砂面 (Matte Surface)"],
      "aes_physical_grain": ["极致纯净 (Denoised/Pristine)"],
      "aes_base_tone": ["冷峻工业锐度 (Clinical Sharpness)"],
      "aes_color_science": ["Rec.709 (Rec.709)"],
      "aes_color_palette": ["临床纯白 (Clinical White)"],
      "aes_render_real": ["大师级杰作 (Masterpiece)"]
    }
  },
  {
    id: "preset_true_detective",
    name: "真探 (True Detective S1)",
    nameEn: "Style of True Detective",
    group: "A. 顶级剧集",
    def: "Louisiana humid heat, yellow-green palettes, decaying industrial relics, and deep-rooted occult symbolism.",
    colors: ["#556B2F", "#8B4513", "#DAA520", "#000000", "#2F4F4F", "#A9A9A9", "#F5DEB3"],
    params: {
      "aes_director_style": ["凯瑞·福永 (Cary Joji Fukunaga)"],
      "aes_camera_system": ["Panavision Panaflex (Panaflex)"],
      "aes_optical_format": ["35mm Film"],
      "aes_lens_series": ["Panavision C-Series (Panavision C-Series)"],
      "aes_texture_render": ["有机电影感 (Organic Film)"],
      "aes_physical_grain": ["标准 35mm (Standard 35mm Grain)"],
      "aes_base_tone": ["复古褪色质感 (Faded Vintage)"],
      "aes_color_science": ["Kodak 5247 (Kodak 5247)"],
      "aes_color_palette": ["深林暗绿 (Deep Forest)"],
      "aes_render_real": ["胶片颗粒 (Film Grain)"]
    }
  },
  {
    id: "preset_got",
    name: "权力的游戏 (Game of Thrones)",
    nameEn: "Style of Game of Thrones",
    group: "A. 顶级剧集",
    def: "Cold blue winter tones contrasting with warm candlelight interiors. Gritty realism, mud, steel, and epic scale landscapes.",
    colors: ["#708090", "#2F4F4F", "#8B4513", "#DAA520", "#000000", "#FFFFFF", "#800000"],
    params: {
      "aes_director_style": ["大卫·贝尼奥夫 (David Benioff)"],
      "aes_camera_system": ["ARRI ALEXA (ARRI ALEXA)"],
      "aes_optical_format": ["Super 35mm"],
      "aes_lens_series": ["Cooke S4/i (Cooke S4/i)"],
      "aes_texture_render": ["有机电影感 (Organic Film)"],
      "aes_physical_grain": ["细腻 35mm (Fine 35mm Grain)"],
      "aes_base_tone": ["自然主义 (Naturalism)"],
      "aes_color_science": ["ARRI LogC (ARRI LogC)"],
      "aes_color_palette": ["青与橙 (Teal & Orange)"],
      "aes_render_real": ["电影质感 (Cinematic)"]
    }
  },
  {
    id: "preset_stranger_things",
    name: "怪奇物语 (Stranger Things)",
    nameEn: "Style of Stranger Things",
    group: "A. 顶级剧集",
    def: "80s nostalgia, neon shopping malls, dark blue night scenes, floating particles, and Spielberg-esque wonder.",
    colors: ["#FF0000", "#0000FF", "#000000", "#FFFF00", "#008000", "#FFFFFF", "#800080"],
    params: {
      "aes_director_style": ["杜飞兄弟 (Duffer Brothers)"],
      "aes_camera_system": ["RED MONSTRO (RED MONSTRO)"],
      "aes_optical_format": ["65mm Large Format"],
      "aes_lens_series": ["Leica Summilux-C (Leica Summilux-C)"],
      "aes_texture_render": ["柔光镜 (Diffusion)"],
      "aes_physical_grain": ["数码传感器噪点 (Digital Sensor Noise)"],
      "aes_base_tone": ["千禧视觉 (Y2K Early Digital)"],
      "aes_color_science": ["RED IPP2 (RED IPP2)"],
      "aes_color_palette": ["赛博霓虹 (Cyber Neon)"],
      "aes_render_real": ["8K 超高清 (8K UHD)"]
    }
  },
  {
    id: "preset_squid_game",
    name: "鱿鱼游戏 (Squid Game)",
    nameEn: "Style of Squid Game",
    group: "A. 顶级剧集",
    def: "Pastel colored stairs, bright pink jumpsuits, sterile white rooms, blood red contrast, and unnervingly clean geometry.",
    colors: ["#FF69B4", "#008000", "#FFFFFF", "#000000", "#FF0000", "#FFFF00", "#87CEEB"],
    params: {
      "aes_director_style": ["黄东赫 (Hwang Dong-hyuk)"],
      "aes_camera_system": ["RED WEAPON (RED WEAPON)"],
      "aes_optical_format": ["8K VistaVision"],
      "aes_lens_series": ["Zeiss Master Primes (Zeiss Master Primes)"],
      "aes_texture_render": ["极简色块 (Flat Color)"],
      "aes_physical_grain": ["极致纯净 (Denoised/Pristine)"],
      "aes_base_tone": ["生动广告 (Vivid Commercial)"],
      "aes_color_science": ["RED IPP2 (RED IPP2)"],
      "aes_color_palette": ["糖果 (Candy)"],
      "aes_render_real": ["锐利聚焦 (Sharp Focus)"]
    }
  },
  {
    id: "preset_the_crown",
    name: "王冠 (The Crown)",
    nameEn: "Style of The Crown",
    group: "A. 顶级剧集",
    def: "Royal blue tones, heavy fog, lavish interiors, expansive landscapes, and a sense of cold, isolated luxury.",
    colors: ["#000080", "#D4AF37", "#708090", "#FFFFFF", "#000000", "#8B4513", "#556B2F"],
    params: {
      "aes_director_style": ["史蒂芬·戴德利 (Stephen Daldry)"],
      "aes_camera_system": ["Sony Venice 2 (Sony Venice 2)"],
      "aes_optical_format": ["Full Frame"],
      "aes_lens_series": ["Cooke S4/i (Cooke S4/i)"],
      "aes_texture_render": ["丝滑织物感 (Velvety Fabric)"],
      "aes_physical_grain": ["细腻 35mm (Fine 35mm Grain)"],
      "aes_base_tone": ["自然主义 (Naturalism)"],
      "aes_color_science": ["Sony S-Gamut (Sony S-Gamut)"],
      "aes_color_palette": ["皇室深蓝 (Royal Blue)"],
      "aes_render_real": ["大师级杰作 (Masterpiece)"]
    }
  },
  {
    id: "preset_black_mirror",
    name: "黑镜 (Black Mirror)",
    nameEn: "Style of Black Mirror",
    group: "A. 顶级剧集",
    def: "Sleek near-future technology, glass surfaces, cold reflections, muted colors, and an underlying sense of dystopian anxiety.",
    colors: ["#000000", "#FFFFFF", "#808080", "#C0C0C0", "#0000FF", "#708090", "#A9A9A9"],
    params: {
      "aes_director_style": ["查理·布鲁克 (Charlie Brooker)"],
      "aes_camera_system": ["ARRI ALEXA Mini (ARRI ALEXA Mini)"],
      "aes_optical_format": ["Super 35mm"],
      "aes_lens_series": ["Zeiss Master Primes (Zeiss Master Primes)"],
      "aes_texture_render": ["冷峻工业锐度 (Clinical Sharpness)"],
      "aes_physical_grain": ["极致纯净 (Denoised/Pristine)"],
      "aes_base_tone": ["冷峻工业锐度 (Clinical Sharpness)"],
      "aes_color_science": ["ARRI LogC (ARRI LogC)"],
      "aes_color_palette": ["深空灰 (Space Grey)"],
      "aes_render_real": ["极致写实 (Photorealistic)"]
    }
  },
  {
    id: "preset_last_of_us",
    name: "最后生还者 (The Last of Us)",
    nameEn: "Style of The Last of Us",
    group: "A. 顶级剧集",
    def: "Overgrown urban ruins, warm sunlight filtering through decay, fungal textures, and gritty, grounded realism.",
    colors: ["#556B2F", "#8B4513", "#708090", "#000000", "#FFFFFF", "#A52A2A", "#D2B48C"],
    params: {
      "aes_director_style": ["克雷格·麦辛 (Craig Mazin)"],
      "aes_camera_system": ["ARRI ALEXA Mini LF (ARRI ALEXA Mini LF)"],
      "aes_optical_format": ["Large Format"],
      "aes_lens_series": ["Cooke S4/i (Cooke S4/i)"],
      "aes_texture_render": ["有机电影感 (Organic Film)"],
      "aes_physical_grain": ["细腻 35mm (Fine 35mm Grain)"],
      "aes_base_tone": ["自然主义 (Naturalism)"],
      "aes_color_science": ["ARRI LogC (ARRI LogC)"],
      "aes_color_palette": ["森林森系 (Forest Green)"],
      "aes_render_real": ["电影质感 (Cinematic)"]
    }
  },
  {
    id: "preset_hannibal_tv",
    name: "汉尼拔 (Hannibal)",
    nameEn: "Style of Hannibal",
    group: "A. 顶级剧集",
    def: "Macabre food photography, dark baroque lighting, symmetry, surreal imagery, and rich, saturated colors of blood and wine.",
    colors: ["#8B0000", "#000000", "#2F4F4F", "#FFFFFF", "#800080", "#556B2F", "#A52A2A"],
    params: {
      "aes_director_style": ["布莱恩·富勒 (Bryan Fuller)"],
      "aes_camera_system": ["ARRI ALEXA (ARRI ALEXA)"],
      "aes_optical_format": ["Super 35mm"],
      "aes_lens_series": ["Zeiss Master Primes (Zeiss Master Primes)"],
      "aes_texture_render": ["湿润高光泽 (Glossy / Wet Look)"],
      "aes_physical_grain": ["极致纯净 (Denoised/Pristine)"],
      "aes_base_tone": ["暗色主义 (Tenebrism)"],
      "aes_color_science": ["ARRI LogC (ARRI LogC)"],
      "aes_color_palette": ["血色 (Blood)"],
      "aes_render_real": ["微距细节 (Macro Detail)"]
    }
  },
  {
    id: "preset_mad_men",
    name: "广告狂人 (Mad Men)",
    nameEn: "Style of Mad Men",
    group: "A. 顶级剧集",
    def: "60s office aesthetic, cigarette smoke, warm mid-century modern interiors, crisp suits, and low-angle power shots.",
    colors: ["#A52A2A", "#D2B48C", "#708090", "#000000", "#FFFFFF", "#8B4513", "#DAA520"],
    params: {
      "aes_director_style": ["马修·维纳 (Matthew Weiner)"],
      "aes_camera_system": ["Arriflex 35 BL (Arriflex 35 BL)"],
      "aes_optical_format": ["Standard 35mm"],
      "aes_lens_series": ["Cooke Speed Panchro (Cooke Speed Panchro)"],
      "aes_texture_render": ["柔焦梦幻感 (Dreamy Soft-Focus)"],
      "aes_physical_grain": ["标准 35mm (Standard 35mm Grain)"],
      "aes_base_tone": ["复古褪色质感 (Faded Vintage)"],
      "aes_color_science": ["Kodak 5247 (Kodak 5247)"],
      "aes_color_palette": ["咖啡 (Coffee)"],
      "aes_render_real": ["大师级杰作 (Masterpiece)"]
    }
  },
  {
    id: "preset_twin_peaks",
    name: "双峰 (Twin Peaks)",
    nameEn: "Style of Twin Peaks",
    group: "A. 顶级剧集",
    def: "Surreal red curtains, zigzag floors, foggy forests, flickering lights, and a dreamlike, unsettling small-town atmosphere.",
    colors: ["#FF0000", "#000000", "#FFFFFF", "#006400", "#8B4513", "#2F4F4F", "#800080"],
    params: {
      "aes_director_style": ["大卫·林奇 (David Lynch)"],
      "aes_camera_system": ["Arriflex 35 BL (Arriflex 35 BL)"],
      "aes_optical_format": ["Standard 35mm"],
      "aes_lens_series": ["Zeiss Standard Speeds (Standard Speeds)"],
      "aes_texture_render": ["柔焦梦幻感 (Dreamy Soft-Focus)"],
      "aes_physical_grain": ["标准 35mm (Standard 35mm Grain)"],
      "aes_base_tone": ["胶片奇观 (50s-70s Technicolor)"],
      "aes_color_science": ["Kodak 5254 (Kodak 5254)"],
      "aes_color_palette": ["蓝丝绒 (Blue Velvet)"],
      "aes_render_real": ["电影质感 (Cinematic)"]
    }
  },
  {
    id: "preset_handmaids_tale",
    name: "使女的故事 (Handmaid's Tale)",
    nameEn: "Style of Handmaid's Tale",
    group: "A. 顶级剧集",
    def: "Striking red robes against stark white backgrounds, extreme symmetry, shallow depth of field, and oppressive visual order.",
    colors: ["#FF0000", "#FFFFFF", "#000000", "#708090", "#808080", "#2F4F4F", "#8B4513"],
    params: {
      "aes_director_style": ["瑞德·穆拉诺 (Reed Morano)"],
      "aes_camera_system": ["ARRI ALEXA 65 (ARRI ALEXA 65)"],
      "aes_optical_format": ["65mm Large Format"],
      "aes_lens_series": ["Canon K35 Vintage (Canon K35 Vintage)"],
      "aes_texture_render": ["有机电影感 (Organic Film)"],
      "aes_physical_grain": ["细腻 35mm (Fine 35mm Grain)"],
      "aes_base_tone": ["高对比硬核感 (Stark High-Contrast)"],
      "aes_color_science": ["ARRI LogC (ARRI LogC)"],
      "aes_color_palette": ["红与绿 (Red & Green)"],
      "aes_render_real": ["锐利聚焦 (Sharp Focus)"]
    }
  },
  {
    id: "preset_fargo_tv",
    name: "冰血暴 (Fargo)",
    nameEn: "Style of Fargo",
    group: "A. 顶级剧集",
    def: "Endless snowy landscapes, bright red blood, wide shots of isolation, quirky characters, and a cold, flat light.",
    colors: ["#FFFFFF", "#FF0000", "#708090", "#000000", "#8B4513", "#2F4F4F", "#808080"],
    params: {
      "aes_director_style": ["科恩兄弟 (Coen Brothers)"],
      "aes_camera_system": ["ARRI ALEXA Mini (ARRI ALEXA Mini)"],
      "aes_optical_format": ["Super 35mm"],
      "aes_lens_series": ["Zeiss Master Primes (Zeiss Master Primes)"],
      "aes_texture_render": ["中性真实还原 (Neutral Authenticity)"],
      "aes_physical_grain": ["极致纯净 (Denoised/Pristine)"],
      "aes_base_tone": ["自然主义 (Naturalism)"],
      "aes_color_science": ["ARRI LogC (ARRI LogC)"],
      "aes_color_palette": ["极地白 (Arctic White)"],
      "aes_render_real": ["大师级杰作 (Masterpiece)"]
    }
  },
  {
    id: "preset_westworld",
    name: "西部世界 (Westworld)",
    nameEn: "Style of Westworld",
    group: "A. 顶级剧集",
    def: "Contrast between dusty western landscapes and sterile, glass-walled high-tech labs. 3D printed bodies, mechanical horses.",
    colors: ["#D2B48C", "#8B4513", "#FFFFFF", "#000000", "#708090", "#2F4F4F", "#A9A9A9"],
    params: {
      "aes_director_style": ["乔纳森·诺兰 (Jonathan Nolan)"],
      "aes_camera_system": ["Arricam LT (Arricam LT)"],
      "aes_optical_format": ["35mm Film"],
      "aes_lens_series": ["Panavision Primos (Panavision Primos)"],
      "aes_texture_render": ["冷峻工业锐度 (Clinical Sharpness)"],
      "aes_physical_grain": ["细腻 35mm (Fine 35mm Grain)"],
      "aes_base_tone": ["自然主义 (Naturalism)"],
      "aes_color_science": ["Kodak Vision3 (Kodak Vision3)"],
      "aes_color_palette": ["沙漠尘土 (Desert Dust)"],
      "aes_render_real": ["电影质感 (Cinematic)"]
    }
  },

  // ==========================================
  // B. 经典电影大师 (Cinematic Auteurs) - 54 Items (Original 20 + 30 New + 4 Chinese)
  // ==========================================
  {
    id: "preset_2001",
    name: "2001太空漫游 (Kubrick)",
    nameEn: "Style of Stanley Kubrick",
    group: "B. 经典电影",
    def: "Cold rational detachment. Sterile white, vacuum black, and HAL red. Peak of one-point perspective and clinical composition.",
    colors: ["#FFFFFF", "#E0E0E0", "#000000", "#FF0000", "#808080", "#191970", "#C0C0C0"],
    params: {
      "aes_director_style": ["库布里克 (Stanley Kubrick)"],
      "aes_camera_system": ["Panavision System 65 (System 65)"],
      "aes_optical_format": ["65mm Large Format"],
      "aes_lens_series": ["Panavision Spherical (Panavision Spherical)"],
      "aes_texture_render": ["中性真实还原 (Neutral Authenticity)"],
      "aes_physical_grain": ["微细 35mm (Micro 35mm Grain)"],
      "aes_base_tone": ["中性基准 (Neutral Standard)"],
      "aes_color_science": ["Kodak Ektachrome (Kodak Ektachrome)"],
      "aes_color_palette": ["2001太空漫游 (2001: A Space Odyssey)"],
      "aes_render_real": ["大师级杰作 (Masterpiece)"]
    }
  },
  {
    id: "preset_godfather",
    name: "教父 (Godfather)",
    nameEn: "Style of The Godfather",
    group: "B. 经典电影",
    def: "Deep eye socket shadows from overhead lighting, warm but oppressive amber tones. Enclosed spaces of absolute power.",
    colors: ["#000000", "#3E2723", "#8B4513", "#DAA520", "#FFFFFF", "#2F4F4F", "#800080"],
    params: {
      "aes_director_style": ["科波拉 (Francis Ford Coppola)"],
      "aes_camera_system": ["Mitchell BNC (Mitchell BNC)"],
      "aes_optical_format": ["35mm Film"],
      "aes_lens_series": ["Bausch & Lomb Baltar (Bausch & Lomb Baltar)"],
      "aes_texture_render": ["有机电影感 (Organic Film)"],
      "aes_physical_grain": ["细腻 35mm (Fine 35mm Grain)"],
      "aes_base_tone": ["黄金年代 (90s Cinematic)"],
      "aes_color_science": ["Kodak 5254 (Kodak 5254)"],
      "aes_color_palette": ["教父 (The Godfather)"],
      "aes_render_real": ["电影质感 (Cinematic)"]
    }
  },
  {
    id: "preset_blade_runner",
    name: "银翼杀手 (Blade Runner)",
    nameEn: "Style of Blade Runner",
    group: "B. 经典电影",
    def: "Eternal rainy nights, neon light piercing through thick smog. The definitive cyberpunk tech-noir aesthetic.",
    colors: ["#000000", "#001f3f", "#ff00ff", "#00ffff", "#ffff00", "#808080", "#2f4f4f"],
    params: {
      "aes_director_style": ["雷德利·斯科特 (Ridley Scott)"],
      "aes_camera_system": ["Panavision Panaflex (Panaflex)"],
      "aes_optical_format": ["Anamorphic"],
      "aes_lens_series": ["Panavision C-Series (Panavision C-Series)"],
      "aes_texture_render": ["胶片弥散 (Film Diffusion)"],
      "aes_physical_grain": ["标准 35mm (Standard 35mm Grain)"],
      "aes_base_tone": ["千禧视觉 (Y2K Early Digital)"],
      "aes_color_science": ["Kodak 5247 (Kodak 5247)"],
      "aes_color_palette": ["银翼杀手 (Blade Runner)"],
      "aes_render_real": ["8K 超高清 (8K UHD)"]
    }
  },
  {
    id: "preset_wkw",
    name: "花样年华 (In the Mood for Love)",
    nameEn: "Style of Wong Kar-wai",
    group: "B. 经典电影",
    def: "Ambiguous time fetishism, hallucinatory interlacing of crimson and jade green. Step-printing and voyeuristic perspectives.",
    colors: ["#8B0000", "#A52A2A", "#DEB887", "#5F9EA0", "#2F4F4F", "#000000", "#FFD700"],
    params: {
      "aes_director_style": ["王家卫 (Wong Kar-wai)"],
      "aes_camera_system": ["Arriflex 535 (Arriflex 535B)"],
      "aes_optical_format": ["35mm Film"],
      "aes_lens_series": ["Zeiss Standard Speeds (Standard Speeds)"],
      "aes_texture_render": ["有机电影感 (Organic Film)"],
      "aes_physical_grain": ["标准 35mm (Standard 35mm Grain)"],
      "aes_base_tone": ["电影原片 (Cine-Log)"],
      "aes_color_science": ["Kodak Vision 500T (Vision 500T)"],
      "aes_color_palette": ["花样年华 (WKW Red)"],
      "aes_render_real": ["电影质感 (Cinematic)"]
    }
  },
  {
    id: "preset_apocalypse",
    name: "现代启示录 (Apocalypse Now)",
    nameEn: "Style of Apocalypse Now",
    group: "B. 经典电影",
    def: "Orange napalm smoke, emerald jungles contrast with sweat-drenched skin. High-intensity war psychedelic trip.",
    colors: ["#FF4500", "#FF8C00", "#228B22", "#006400", "#000000", "#8B4513", "#FFFF00"],
    params: {
      "aes_director_style": ["科波拉 (Francis Ford Coppola)"],
      "aes_camera_system": ["Arriflex 35 BL (Arriflex 35 BL)"],
      "aes_optical_format": ["Technovision Anamorphic"],
      "aes_lens_series": ["Cooke Speed Panchro (Cooke Speed Panchro)"],
      "aes_texture_render": ["物理磨损质感 (Distressed Celluloid)"],
      "aes_physical_grain": ["粗糙 16mm (Rough 16mm Grain)"],
      "aes_base_tone": ["胶片奇观 (50s-70s Technicolor)"],
      "aes_color_science": ["Technicolor (Technicolor)"],
      "aes_color_palette": ["现代启示录 (Apocalypse Now)"],
      "aes_render_real": ["胶片颗粒 (Film Grain)"]
    }
  },
  {
    id: "preset_seven",
    name: "七宗罪 (Se7en)",
    nameEn: "Style of Se7en",
    group: "B. 经典电影",
    def: "Bleach bypass process, high contrast with low saturation, eternal rainy nights, flashlight beams, and visual rot.",
    colors: ["#000000", "#1C1C1C", "#2F4F4F", "#8B4513", "#708090", "#A52A2A", "#FFFFF0"],
    params: {
      "aes_director_style": ["大卫·芬奇 (David Fincher)"],
      "aes_camera_system": ["Panavision Platinum (Panavision Platinum)"],
      "aes_optical_format": ["Super 35mm"],
      "aes_lens_series": ["Panavision Primos (Panavision Primos)"],
      "aes_texture_render": ["跳银金属感 (Bleach Bypass Texture)"],
      "aes_physical_grain": ["粗糙 16mm (Rough 16mm Grain)"],
      "aes_base_tone": ["跳银处理 (Bleach Bypass)"],
      "aes_color_science": ["Kodak 5293 (Kodak 5293)"],
      "aes_color_palette": ["七宗罪 (Se7en)"],
      "aes_render_real": ["RAW 原片 (RAW Photo)"]
    }
  },
  {
    id: "preset_stalker",
    name: "潜行者 (Stalker)",
    nameEn: "Style of Andrei Tarkovsky",
    group: "B. 经典电影",
    def: "Deep sepia tones, damp ruins, nature invading interiors, extremely slow tracking shots, and divine stillness.",
    colors: ["#8B4513", "#556B2F", "#000000", "#808080", "#2F4F4F", "#A52A2A", "#D2B48C"],
    params: {
      "aes_director_style": ["塔可夫斯基 (Andrei Tarkovsky)"],
      "aes_camera_system": ["Arriflex 35 BL (Arriflex 35 BL)"],
      "aes_optical_format": ["Standard 35mm"],
      "aes_lens_series": ["Zeiss Distagon (Zeiss Distagon)"],
      "aes_texture_render": ["有机电影感 (Organic Film)"],
      "aes_physical_grain": ["粗糙 16mm (Rough 16mm Grain)"],
      "aes_base_tone": ["复古褪色质感 (Faded Vintage)"],
      "aes_color_science": ["Kodak 5247 (Kodak 5247)"],
      "aes_color_palette": ["潜行者 (Stalker)"],
      "aes_render_real": ["电影质感 (Cinematic)"]
    }
  },
  {
    id: "preset_persona",
    name: "假面 (Persona)",
    nameEn: "Style of Ingmar Bergman",
    group: "B. 经典电影",
    def: "Extreme facial close-ups, split-lighting, overlapping faces, minimalist backgrounds, and high-contrast black and white.",
    colors: ["#000000", "#1A1A1A", "#333333", "#4D4D4D", "#666666", "#808080", "#FFFFFF"],
    params: {
      "aes_director_style": ["伯格曼 (Ingmar Bergman)"],
      "aes_camera_system": ["Mitchell BNC (Mitchell BNC)"],
      "aes_optical_format": ["Academy Ratio"],
      "aes_lens_series": ["Cooke Speed Panchro (Cooke Speed Panchro)"],
      "aes_texture_render": ["银盐堆叠质感 (Silver Halide Texture)"],
      "aes_physical_grain": ["标准 35mm (Standard 35mm Grain)"],
      "aes_base_tone": ["艺术黑白 (Fine-Art Mono)"],
      "aes_color_science": ["Kodak Plus-X (Kodak Plus-X)"],
      "aes_color_palette": ["假面 (Persona)"],
      "aes_render_real": ["大师级杰作 (Masterpiece)"]
    }
  },
  {
    id: "preset_blue_velvet",
    name: "蓝丝绒 (Blue Velvet)",
    nameEn: "Style of David Lynch",
    group: "B. 经典电影",
    def: "Perfect suburbia meet surreal nightmare, vivid red roses, deep blue shadows, and eerie, voyeuristic stillness.",
    colors: ["#0000FF", "#FF0000", "#000000", "#FFFFFF", "#008000", "#FFFF00", "#8B4513"],
    params: {
      "aes_director_style": ["大卫·林奇 (David Lynch)"],
      "aes_camera_system": ["Arriflex 35 BL (Arriflex 35 BL)"],
      "aes_optical_format": ["Anamorphic"],
      "aes_lens_series": ["Cooke Speed Panchro (Cooke Speed Panchro)"],
      "aes_texture_render": ["柔焦梦幻感 (Dreamy Soft-Focus)"],
      "aes_physical_grain": ["标准 35mm (Standard 35mm Grain)"],
      "aes_base_tone": ["胶片奇观 (50s-70s Technicolor)"],
      "aes_color_science": ["Kodak 5247 (Kodak 5247)"],
      "aes_color_palette": ["蓝丝绒 (Blue Velvet)"],
      "aes_render_real": ["电影质感 (Cinematic)"]
    }
  },
  {
    id: "preset_breathless",
    name: "精疲力尽 (Breathless)",
    nameEn: "Style of Jean-Luc Godard",
    group: "B. 经典电影",
    def: "Handheld photography, jump cuts, natural lighting, high contrast B&W, and raw urban energy.",
    colors: ["#000000", "#FFFFFF", "#808080", "#C0C0C0", "#A9A9A9", "#D3D3D3", "#F5F5F5"],
    params: {
      "aes_director_style": ["戈达尔 (Jean-Luc Godard)"],
      "aes_camera_system": ["Caméflex (Caméflex)"],
      "aes_optical_format": ["Standard 35mm"],
      "aes_lens_series": ["Kinoptik (Kinoptik)"],
      "aes_texture_render": ["有机电影感 (Organic Film)"],
      "aes_physical_grain": ["粗糙 16mm (Rough 16mm Grain)"],
      "aes_base_tone": ["艺术黑白 (Fine-Art Mono)"],
      "aes_color_science": ["Ilford HP5 (Ilford HP5)"],
      "aes_color_palette": ["精疲力尽 (Breathless)"],
      "aes_render_real": ["RAW 原片 (RAW Photo)"]
    }
  },
  {
    id: "preset_fallen_angels",
    name: "堕落天使 (Fallen Angels)",
    nameEn: "Style of Fallen Angels",
    group: "B. 经典电影",
    def: "Extreme wide-angle distortion, cold green and warm yellow color cast, step-printing blur, and feverish urban isolation.",
    colors: ["#00FF00", "#FFFF00", "#000000", "#FF0000", "#0000FF", "#808080", "#FFFFFF"],
    params: {
      "aes_director_style": ["王家卫 (Wong Kar-wai)"],
      "aes_camera_system": ["Arriflex 35 III (Arriflex 35 III)"],
      "aes_optical_format": ["Super 35mm"],
      "aes_lens_series": ["Kinoptik 9.8mm (Kinoptik)"],
      "aes_texture_render": ["胶片弥散 (Film Diffusion)"],
      "aes_physical_grain": ["粗糙 16mm (Rough 16mm Grain)"],
      "aes_base_tone": ["交叉冲洗 (Cross Process)"],
      "aes_color_science": ["Kodak Vision 500T (Vision 500T)"],
      "aes_color_palette": ["堕落天使 (Fallen Angels)"],
      "aes_render_real": ["电影质感 (Cinematic)"]
    }
  },
  {
    id: "preset_rashomon",
    name: "罗生门 (Rashomon)",
    nameEn: "Style of Akira Kurosawa",
    group: "B. 经典电影",
    def: "High-contrast B&W, shooting directly into the sun, heavy rain, forest setting, and intense play of light and shadow.",
    colors: ["#000000", "#FFFFFF", "#808080", "#C0C0C0", "#A9A9A9", "#D3D3D3", "#F5F5F5"],
    params: {
      "aes_director_style": ["黑泽明 (Akira Kurosawa)"],
      "aes_camera_system": ["Mitchell BNC (Mitchell BNC)"],
      "aes_optical_format": ["Standard 35mm"],
      "aes_lens_series": ["Cooke Speed Panchro (Cooke Speed Panchro)"],
      "aes_texture_render": ["高对比硬核感 (Stark High-Contrast)"],
      "aes_physical_grain": ["标准 35mm (Standard 35mm Grain)"],
      "aes_base_tone": ["艺术黑白 (Fine-Art Mono)"],
      "aes_color_science": ["Kodak Plus-X (Kodak Plus-X)"],
      "aes_color_palette": ["罗生门 (Rashomon)"],
      "aes_render_real": ["大师级杰作 (Masterpiece)"]
    }
  },
  {
    id: "preset_taxi_driver",
    name: "出租车司机 (Taxi Driver)",
    nameEn: "Style of Taxi Driver",
    group: "B. 经典电影",
    def: "Neon lights reflected on wet asphalt, steam rising from grates, dirty yellow hues, and lonely nocturnal cabin views.",
    colors: ["#FFFF00", "#000000", "#FF0000", "#008000", "#A52A2A", "#808080", "#FFFFFF"],
    params: {
      "aes_director_style": ["斯科塞斯 (Martin Scorsese)"],
      "aes_camera_system": ["Arriflex 35 BL (Arriflex 35 BL)"],
      "aes_optical_format": ["Standard 35mm"],
      "aes_lens_series": ["Zeiss Super Speed (Zeiss Super Speed)"],
      "aes_texture_render": ["物理磨损质感 (Distressed Celluloid)"],
      "aes_physical_grain": ["粗糙 16mm (Rough 16mm Grain)"],
      "aes_base_tone": ["复古褪色质感 (Faded Vintage)"],
      "aes_color_science": ["Kodak 5247 (Kodak 5247)"],
      "aes_color_palette": ["出租车司机 (Taxi Driver)"],
      "aes_render_real": ["电影质感 (Cinematic)"]
    }
  },
  {
    id: "preset_shining",
    name: "闪灵 (The Shining)",
    nameEn: "Style of The Shining",
    group: "B. 经典电影",
    def: "Steadicam tracking shots, absolute symmetry, geometric carpet patterns, blood elevators, and disturbingly bright interiors.",
    colors: ["#FF0000", "#FFA500", "#8B4513", "#FFFFFF", "#000000", "#008000", "#800080"],
    params: {
      "aes_director_style": ["库布里克 (Stanley Kubrick)"],
      "aes_camera_system": ["Arriflex 35 BL (Arriflex 35 BL)"],
      "aes_optical_format": ["Spherical 1.85:1"],
      "aes_lens_series": ["Zeiss Super Speed (Zeiss Super Speed)"],
      "aes_texture_render": ["冷峻工业锐度 (Clinical Sharpness)"],
      "aes_physical_grain": ["细腻 35mm (Fine 35mm Grain)"],
      "aes_base_tone": ["中性基准 (Neutral Standard)"],
      "aes_color_science": ["Kodak 5247 (Kodak 5247)"],
      "aes_color_palette": ["闪灵 (The Shining)"],
      "aes_render_real": ["锐利聚焦 (Sharp Focus)"]
    }
  },
  {
    id: "preset_vertigo",
    name: "迷魂记 (Vertigo)",
    nameEn: "Style of Alfred Hitchcock",
    group: "B. 经典电影",
    def: "The Hitchcock 'Dolly Zoom', spiral staircases, red and green nightmares, and dreamlike soft focus.",
    colors: ["#008000", "#FF0000", "#FFFFFF", "#000000", "#808080", "#A52A2A", "#FFFF00"],
    params: {
      "aes_director_style": ["希区柯克 (Alfred Hitchcock)"],
      "aes_camera_system": ["VistaVision (VistaVision)"],
      "aes_optical_format": ["VistaVision"],
      "aes_lens_series": ["Panavision Primos (Panavision Primos)"],
      "aes_texture_render": ["柔焦梦幻感 (Dreamy Soft-Focus)"],
      "aes_physical_grain": ["标准 35mm (Standard 35mm Grain)"],
      "aes_base_tone": ["胶片奇观 (50s-70s Technicolor)"],
      "aes_color_science": ["Technicolor (Technicolor)"],
      "aes_color_palette": ["迷魂记 (Vertigo)"],
      "aes_render_real": ["大师级杰作 (Masterpiece)"]
    }
  },
  {
    id: "preset_mad_max_film",
    name: "疯狂的麦克斯 (Mad Max: Fury Road)",
    nameEn: "Style of George Miller",
    group: "B. 经典电影",
    def: "Highly saturated orange deserts and cyan skies. Extreme kinetic motion, wasteland metal, and plumes of fire.",
    colors: ["#FFA500", "#00FFFF", "#000000", "#808080", "#FF4500", "#FFFFFF", "#FFFF00"],
    params: {
      "aes_director_style": ["乔治·米勒 (George Miller)"],
      "aes_camera_system": ["ARRI ALEXA M (ARRI ALEXA Mini)"],
      "aes_optical_format": ["Super 35mm"],
      "aes_lens_series": ["Panavision Primo 70 (Panavision Primo)"],
      "aes_texture_render": ["高对比硬核感 (Stark High-Contrast)"],
      "aes_physical_grain": ["微细 35mm (Micro 35mm Grain)"],
      "aes_base_tone": ["生动广告 (Vivid Commercial)"],
      "aes_color_science": ["ACES (ACES)"],
      "aes_color_palette": ["疯狂的麦克斯 (Mad Max: Fury Road)"],
      "aes_render_real": ["电影质感 (Cinematic)"]
    }
  },
  {
    id: "preset_amelie_film",
    name: "天使爱美丽 (Amélie)",
    nameEn: "Style of Amélie",
    group: "B. 经典电影",
    def: "High saturation reds and greens, wide-angle close-ups, retro Paris vibe, and whimsical fairytale-like lighting.",
    colors: ["#008000", "#FF0000", "#FFD700", "#FFFFFF", "#000000", "#A52A2A", "#808080"],
    params: {
      "aes_director_style": ["让-皮埃尔·热内 (Jean-Pierre Jeunet)"],
      "aes_camera_system": ["Arriflex 535 (Arriflex 535B)"],
      "aes_optical_format": ["Super 35mm"],
      "aes_lens_series": ["Cooke S4/i (Cooke S4/i)"],
      "aes_texture_render": ["有机电影感 (Organic Film)"],
      "aes_physical_grain": ["细腻 35mm (Fine 35mm Grain)"],
      "aes_base_tone": ["胶片奇观 (50s-70s Technicolor)"],
      "aes_color_science": ["Kodak 5293 (Kodak 5293)"],
      "aes_color_palette": ["天使爱美丽 (Amélie)"],
      "aes_render_real": ["大师级杰作 (Masterpiece)"]
    }
  },
  {
    id: "preset_drive_film",
    name: "亡命驾驶 (Drive)",
    nameEn: "Style of Drive",
    group: "B. 经典电影",
    def: "Pink neon typography, indigo nightscapes, satin jacket reflections, and retro-synthwave atmosphere.",
    colors: ["#FF69B4", "#000080", "#000000", "#FFFFFF", "#FFD700", "#800080", "#00FFFF"],
    params: {
      "aes_director_style": ["雷芬 (Nicolas Winding Refn)"],
      "aes_camera_system": ["ARRI ALEXA (ARRI ALEXA)"],
      "aes_optical_format": ["Super 35mm"],
      "aes_lens_series": ["Zeiss Master Primes (Zeiss Master Primes)"],
      "aes_texture_render": ["湿润高光泽 (Glossy / Wet Look)"],
      "aes_physical_grain": ["微细 35mm (Micro 35mm Grain)"],
      "aes_base_tone": ["生动广告 (Vivid Commercial)"],
      "aes_color_science": ["Rec.709 (Rec.709)"],
      "aes_color_palette": ["亡命驾驶 (Drive)"],
      "aes_render_real": ["8K 超高清 (8K UHD)"]
    }
  },
  {
    id: "preset_grand_budapest_film",
    name: "布达佩斯大饭店 (Grand Budapest)",
    nameEn: "Style of Wes Anderson",
    group: "B. 经典电影",
    def: "Pink and sky blue palettes, absolute central symmetry, flat lay compositions, and miniature model-like sets.",
    colors: ["#FFC0CB", "#87CEEB", "#800080", "#FFFFFF", "#000000", "#FFD700", "#A52A2A"],
    params: {
      "aes_director_style": ["韦斯·安德森 (Wes Anderson)"],
      "aes_camera_system": ["Arricam ST (Arricam ST)"],
      "aes_optical_format": ["Standard 35mm"],
      "aes_lens_series": ["Cooke S4/i (Cooke S4/i)"],
      "aes_texture_render": ["中性真实还原 (Neutral Authenticity)"],
      "aes_physical_grain": ["细腻 35mm (Fine 35mm Grain)"],
      "aes_base_tone": ["粉彩柔光 (Pastel Glow)"],
      "aes_color_science": ["Kodak Vision3 (Kodak Vision3)"],
      "aes_color_palette": ["布达佩斯大饭店 (Grand Budapest)"],
      "aes_render_real": ["大师级杰作 (Masterpiece)"]
    }
  },
  {
    id: "preset_matrix_classic",
    name: "黑客帝国 (The Matrix)",
    nameEn: "Style of The Matrix",
    group: "B. 经典电影",
    def: "Green-tinted digital world, black leather fashion, bullet-time slow motion, and gritty cyberpunk urban decay.",
    colors: ["#006400", "#000000", "#FFFFFF", "#808080", "#A9A9A9", "#2F4F4F", "#00FF00"],
    params: {
      "aes_director_style": ["沃卓斯基姐妹 (The Wachowskis)"],
      "aes_camera_system": ["Panavision Panaflex (Panaflex)"],
      "aes_optical_format": ["Super 35mm"],
      "aes_lens_series": ["Panavision Primos (Panavision Primos)"],
      "aes_texture_render": ["冷峻工业锐度 (Clinical Sharpness)"],
      "aes_physical_grain": ["标准 35mm (Standard 35mm Grain)"],
      "aes_base_tone": ["千禧视觉 (Y2K Early Digital)"],
      "aes_color_science": ["Kodak 5279 (Kodak 5279)"],
      "aes_color_palette": ["黑客帝国 (The Matrix)"],
      "aes_render_real": ["锐利聚焦 (Sharp Focus)"]
    }
  },
  {
    id: "preset_dune",
    name: "沙丘 (Dune)",
    nameEn: "Style of Dune",
    group: "B. 经典电影",
    def: "Brutalist architecture, massive scale, monochromatic sand yellow, oppressive atmosphere, and spice floating in the air.",
    colors: ["#D2B48C", "#DAA520", "#8B4513", "#708090", "#000000", "#F5DEB3", "#A9A9A9"],
    params: {
      "aes_director_style": ["维伦纽瓦 (Denis Villeneuve)"],
      "aes_camera_system": ["ARRI ALEXA LF (ARRI ALEXA Mini LF)"],
      "aes_optical_format": ["Large Format"],
      "aes_lens_series": ["Panavision H-Series (Panavision Spherical)"],
      "aes_texture_render": ["哑光磨砂面 (Matte Surface)"],
      "aes_physical_grain": ["微细 35mm (Micro 35mm Grain)"],
      "aes_base_tone": ["自然主义 (Naturalism)"],
      "aes_color_science": ["ARRI LogC (ARRI LogC)"],
      "aes_color_palette": ["沙漠尘土 (Desert Dust)"],
      "aes_render_real": ["大师级杰作 (Masterpiece)"]
    }
  },
  {
    id: "preset_oppenheimer",
    name: "奥本海默 (Oppenheimer)",
    nameEn: "Style of Oppenheimer",
    group: "B. 经典电影",
    def: "IMAX 70mm film, switching between vibrant color and stark B&W, fiery explosions, and intense facial close-ups.",
    colors: ["#000000", "#FFFFFF", "#FF4500", "#FFD700", "#808080", "#2F4F4F", "#A52A2A"],
    params: {
      "aes_director_style": ["诺兰 (Christopher Nolan)"],
      "aes_camera_system": ["IMAX 15/70mm Film (IMAX 15/70mm Film)"],
      "aes_optical_format": ["IMAX"],
      "aes_lens_series": ["Hasselblad Prime DNA (Hasselblad)"],
      "aes_texture_render": ["有机电影感 (Organic Film)"],
      "aes_physical_grain": ["细腻 35mm (Fine 35mm Grain)"],
      "aes_base_tone": ["艺术黑白 (Fine-Art Mono)"],
      "aes_color_science": ["Kodak Double-X (Kodak Double-X)"],
      "aes_color_palette": ["黑白灰 (Grayscale)"],
      "aes_render_real": ["16K 超高清 (8K UHD)"]
    }
  },
  {
    id: "preset_lala_land",
    name: "爱乐之城 (La La Land)",
    nameEn: "Style of La La Land",
    group: "B. 经典电影",
    def: "Technicolor revival, primary colors (yellow, blue, red), theatrical lighting, spotlights, and dreamy Los Angeles sunsets.",
    colors: ["#FFFF00", "#0000FF", "#FF0000", "#800080", "#FFC0CB", "#000000", "#FFFFFF"],
    params: {
      "aes_director_style": ["查泽雷 (Damien Chazelle)"],
      "aes_camera_system": ["Panavision Panaflex (Panaflex)"],
      "aes_optical_format": ["Cinemascope"],
      "aes_lens_series": ["Panavision C-Series (Panavision C-Series)"],
      "aes_texture_render": ["柔焦梦幻感 (Dreamy Soft-Focus)"],
      "aes_physical_grain": ["标准 35mm (Standard 35mm Grain)"],
      "aes_base_tone": ["胶片奇观 (50s-70s Technicolor)"],
      "aes_color_science": ["Technicolor (Technicolor)"],
      "aes_color_palette": ["爱乐之城 (La La Land)"],
      "aes_render_real": ["电影质感 (Cinematic)"]
    }
  },
  {
    id: "preset_parasite",
    name: "寄生虫 (Parasite)",
    nameEn: "Style of Parasite",
    group: "B. 经典电影",
    def: "Sharp architectural lines, contrast between sunlit luxury and damp basement gloom, precise blocking, and rain.",
    colors: ["#556B2F", "#8B4513", "#FFFFFF", "#000000", "#708090", "#A9A9A9", "#2F4F4F"],
    params: {
      "aes_director_style": ["奉俊昊 (Bong Joon-ho)"],
      "aes_camera_system": ["ARRI ALEXA 65 (ARRI ALEXA 65)"],
      "aes_optical_format": ["Large Format"],
      "aes_lens_series": ["Hasselblad Prime DNA (Hasselblad)"],
      "aes_texture_render": ["冷峻工业锐度 (Clinical Sharpness)"],
      "aes_physical_grain": ["极致纯净 (Denoised/Pristine)"],
      "aes_base_tone": ["自然主义 (Naturalism)"],
      "aes_color_science": ["ARRI LogC (ARRI LogC)"],
      "aes_color_palette": ["深林暗绿 (Deep Forest)"],
      "aes_render_real": ["锐利聚焦 (Sharp Focus)"]
    }
  },
  {
    id: "preset_eeaao",
    name: "瞬息全宇宙 (Everything Everywhere)",
    nameEn: "Style of Everything Everywhere",
    group: "B. 经典电影",
    def: "Maximalist chaos, shifting aspect ratios, rapid-fire editing, googly eyes, and vivid, clashing multiversal aesthetics.",
    colors: ["#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#FF00FF", "#00FFFF", "#FFFFFF"],
    params: {
      "aes_director_style": ["丹尼尔组合 (The Daniels)"],
      "aes_camera_system": ["ARRI ALEXA Mini (ARRI ALEXA Mini)"],
      "aes_optical_format": ["Variable Aspect Ratio"],
      "aes_lens_series": ["Atlas Orion (Atlas Orion)"],
      "aes_texture_render": ["高对比硬核感 (Stark High-Contrast)"],
      "aes_physical_grain": ["数码传感器噪点 (Digital Sensor Noise)"],
      "aes_base_tone": ["生动广告 (Vivid Commercial)"],
      "aes_color_science": ["Rec.709 (Rec.709)"],
      "aes_color_palette": ["瞬息全宇宙 (Everything Everywhere)"],
      "aes_render_real": ["大师级杰作 (Masterpiece)"]
    }
  },
  {
    id: "preset_interstellar",
    name: "星际穿越 (Interstellar)",
    nameEn: "Style of Interstellar",
    group: "B. 经典电影",
    def: "Cosmic scale, black holes, cornfields, dust storms, practical spacecraft interiors, and the silence of space.",
    colors: ["#000000", "#DAA520", "#4682B4", "#FFFFFF", "#8B4513", "#A9A9A9", "#708090"],
    params: {
      "aes_director_style": ["诺兰 (Christopher Nolan)"],
      "aes_camera_system": ["IMAX 15/70mm Film (IMAX 15/70mm Film)"],
      "aes_optical_format": ["IMAX"],
      "aes_lens_series": ["Hasselblad Prime DNA (Hasselblad)"],
      "aes_texture_render": ["有机电影感 (Organic Film)"],
      "aes_physical_grain": ["细腻 35mm (Fine 35mm Grain)"],
      "aes_base_tone": ["自然主义 (Naturalism)"],
      "aes_color_science": ["Kodak Vision3 (Kodak Vision3)"],
      "aes_color_palette": ["星际穿越 (Interstellar)"],
      "aes_render_real": ["16K 超高清 (8K UHD)"]
    }
  },
  {
    id: "preset_the_batman",
    name: "新蝙蝠侠 (The Batman)",
    nameEn: "Style of The Batman",
    group: "B. 经典电影",
    def: "Gritty noir, deep shadows, red flares, rain-slicked streets, shallow depth of field with anamorphic bokeh.",
    colors: ["#000000", "#FF0000", "#2F4F4F", "#800000", "#A9A9A9", "#696969", "#FFFFFF"],
    params: {
      "aes_director_style": ["马特·里夫斯 (Matt Reeves)"],
      "aes_camera_system": ["ARRI ALEXA LF (ARRI ALEXA Mini LF)"],
      "aes_optical_format": ["Anamorphic"],
      "aes_lens_series": ["Atlas Orion (Atlas Orion)"],
      "aes_texture_render": ["有机电影感 (Organic Film)"],
      "aes_physical_grain": ["粗糙 16mm (Rough 16mm Grain)"],
      "aes_base_tone": ["暗色主义 (Tenebrism)"],
      "aes_color_science": ["ARRI LogC (ARRI LogC)"],
      "aes_color_palette": ["新蝙蝠侠 (The Batman)"],
      "aes_render_real": ["电影质感 (Cinematic)"]
    }
  },
  {
    id: "preset_her",
    name: "她 (Her)",
    nameEn: "Style of Her",
    group: "B. 经典电影",
    def: "Soft warm lighting, pastel pinks and reds, high-waisted pants, futuristic Los Angeles skyline, and intimate close-ups.",
    colors: ["#FF6347", "#FFB6C1", "#FFA07A", "#FFFFFF", "#D2B48C", "#A52A2A", "#800000"],
    params: {
      "aes_director_style": ["斯派克·琼斯 (Spike Jonze)"],
      "aes_camera_system": ["ARRI ALEXA (ARRI ALEXA)"],
      "aes_optical_format": ["Standard 35mm"],
      "aes_lens_series": ["Canon K35 Vintage (Canon K35 Vintage)"],
      "aes_texture_render": ["柔焦梦幻感 (Dreamy Soft-Focus)"],
      "aes_physical_grain": ["微细 35mm (Micro 35mm Grain)"],
      "aes_base_tone": ["粉彩柔光 (Pastel Glow)"],
      "aes_color_science": ["Kodak Portra 400 (Kodak Portra 400)"],
      "aes_color_palette": ["她 (Her)"],
      "aes_render_real": ["电影质感 (Cinematic)"]
    }
  },
  {
    id: "preset_moonlight",
    name: "月光男孩 (Moonlight)",
    nameEn: "Style of Moonlight",
    group: "B. 经典电影",
    def: "High contrast skin tones, vivid blues and purples, shallow depth of field, and intimate, soulful portraits.",
    colors: ["#000080", "#4B0082", "#000000", "#8B4513", "#00FFFF", "#FFFFFF", "#2F4F4F"],
    params: {
      "aes_director_style": ["巴里·詹金斯 (Barry Jenkins)"],
      "aes_camera_system": ["ARRI ALEXA XT (ARRI ALEXA)"],
      "aes_optical_format": ["Anamorphic"],
      "aes_lens_series": ["Hawk V-Lite (Hawk V-Lite)"],
      "aes_texture_render": ["湿润高光泽 (Glossy / Wet Look)"],
      "aes_physical_grain": ["细腻 35mm (Fine 35mm Grain)"],
      "aes_base_tone": ["生动广告 (Vivid Commercial)"],
      "aes_color_science": ["Kodak Vision3 (Kodak Vision3)"],
      "aes_color_palette": ["月光男孩 (Moonlight)"],
      "aes_render_real": ["大师级杰作 (Masterpiece)"]
    }
  },
  {
    id: "preset_memories_murder",
    name: "杀人回忆 (Memories of Murder)",
    nameEn: "Style of Bong Joon-ho",
    group: "B. 经典电影",
    def: "Golden wheat fields, overcast grey skies, dark tunnels, rain, and a desperate, gritty rural atmosphere.",
    colors: ["#DAA520", "#708090", "#000000", "#556B2F", "#A52A2A", "#8B4513", "#F5F5DC"],
    params: {
      "aes_director_style": ["奉俊昊 (Bong Joon-ho)"],
      "aes_camera_system": ["Arriflex 535 (Arriflex 535B)"],
      "aes_optical_format": ["Standard 35mm"],
      "aes_lens_series": ["Cooke S4/i (Cooke S4/i)"],
      "aes_texture_render": ["有机电影感 (Organic Film)"],
      "aes_physical_grain": ["标准 35mm (Standard 35mm Grain)"],
      "aes_base_tone": ["复古褪色质感 (Faded Vintage)"],
      "aes_color_science": ["Kodak 5247 (Kodak 5247)"],
      "aes_color_palette": ["杀人回忆 (Memories of Murder)"],
      "aes_render_real": ["电影质感 (Cinematic)"]
    }
  },
  {
    id: "preset_hero",
    name: "英雄 (Hero)",
    nameEn: "Style of Zhang Yimou",
    group: "B. 经典电影",
    def: "Monochromatic color coding (pure red, blue, white), falling leaves, water droplets, and martial arts wire-fu elegance.",
    colors: ["#FF0000", "#0000FF", "#FFFFFF", "#000000", "#008000", "#FFD700", "#808080"],
    params: {
      "aes_director_style": ["张艺谋 (Zhang Yimou)"],
      "aes_camera_system": ["Arriflex 435 (Arriflex 435)"],
      "aes_optical_format": ["Super 35mm"],
      "aes_lens_series": ["Zeiss Master Primes (Zeiss Master Primes)"],
      "aes_texture_render": ["高对比硬核感 (Stark High-Contrast)"],
      "aes_physical_grain": ["微细 35mm (Micro 35mm Grain)"],
      "aes_base_tone": ["生动广告 (Vivid Commercial)"],
      "aes_color_science": ["Technicolor (Technicolor)"],
      "aes_color_palette": ["英雄 (Hero)"],
      "aes_render_real": ["大师级杰作 (Masterpiece)"]
    }
  },
  {
    id: "preset_revenant",
    name: "荒野猎人 (The Revenant)",
    nameEn: "Style of Iñárritu",
    group: "B. 经典电影",
    def: "Natural light only, wide angle close-ups, snow, mud, breath on lens, and long unbroken takes.",
    colors: ["#FFFFFF", "#708090", "#2F4F4F", "#8B4513", "#000000", "#A9A9A9", "#4682B4"],
    params: {
      "aes_director_style": ["伊纳里图 (Iñárritu)"],
      "aes_camera_system": ["ARRI ALEXA 65 (ARRI ALEXA 65)"],
      "aes_optical_format": ["65mm Large Format"],
      "aes_lens_series": ["Arri Prime DNA"],
      "aes_texture_render": ["中性真实还原 (Neutral Authenticity)"],
      "aes_physical_grain": ["极致纯净 (Denoised/Pristine)"],
      "aes_base_tone": ["自然主义 (Naturalism)"],
      "aes_color_science": ["ARRI LogC (ARRI LogC)"],
      "aes_color_palette": ["极地白 (Arctic White)"],
      "aes_render_real": ["大师级杰作 (Masterpiece)"]
    }
  },
  {
    id: "preset_poor_things",
    name: "可怜的东西 (Poor Things)",
    nameEn: "Style of Yorgos Lanthimos",
    group: "B. 经典电影",
    def: "Extreme fisheye distortion, vibrant candy colors, Victorian surrealism, painted sky backdrops, and odd angles.",
    colors: ["#FFD700", "#0000FF", "#FF0000", "#FFFFFF", "#000000", "#FF69B4", "#800080"],
    params: {
      "aes_director_style": ["兰斯莫斯 (Lanthimos)"],
      "aes_camera_system": ["ARRI ALEXA Mini LF (ARRI ALEXA Mini LF)"],
      "aes_optical_format": ["Variable Aspect Ratio"],
      "aes_lens_series": ["Fisheye Lens (Fisheye Lens)"],
      "aes_texture_render": ["柔焦梦幻感 (Dreamy Soft-Focus)"],
      "aes_physical_grain": ["细腻 35mm (Fine 35mm Grain)"],
      "aes_base_tone": ["胶片奇观 (50s-70s Technicolor)"],
      "aes_color_science": ["Kodak Ektachrome (Kodak Ektachrome)"],
      "aes_color_palette": ["可怜的东西 (Poor Things)"],
      "aes_render_real": ["大师级杰作 (Masterpiece)"]
    }
  },
  {
    id: "preset_kill_bill",
    name: "杀死比尔 (Kill Bill)",
    nameEn: "Style of Quentin Tarantino",
    group: "B. 经典电影",
    def: "Yellow jumpsuit, blood sprays, snow garden duel, silhouettes, anime sequences, and grindhouse zoom.",
    colors: ["#FFFF00", "#FF0000", "#000000", "#FFFFFF", "#0000FF", "#808080", "#008000"],
    params: {
      "aes_director_style": ["昆汀 (Tarantino)"],
      "aes_camera_system": ["Panavision Panaflex (Panaflex)"],
      "aes_optical_format": ["Super 35mm"],
      "aes_lens_series": ["Panavision Primos (Panavision Primos)"],
      "aes_texture_render": ["高对比硬核感 (Stark High-Contrast)"],
      "aes_physical_grain": ["粗糙 16mm (Rough 16mm Grain)"],
      "aes_base_tone": ["生动广告 (Vivid Commercial)"],
      "aes_color_science": ["Technicolor (Technicolor)"],
      "aes_color_palette": ["杀死比尔 (Kill Bill)"],
      "aes_render_real": ["电影质感 (Cinematic)"]
    }
  },
  {
    id: "preset_lost_in_translation",
    name: "迷失东京 (Lost in Translation)",
    nameEn: "Style of Sofia Coppola",
    group: "B. 经典电影",
    def: "City lights through hotel windows, soft focus, dreamy isolation, karaoke bar neon, and intimate whispers.",
    colors: ["#000080", "#FFC0CB", "#FFA500", "#000000", "#808080", "#FFFFFF", "#FFD700"],
    params: {
      "aes_director_style": ["索菲亚·科波拉 (Sofia Coppola)"],
      "aes_camera_system": ["Aaton 35-III (Aaton XTR)"],
      "aes_optical_format": ["35mm Film"],
      "aes_lens_series": ["Cooke Speed Panchro (Cooke Speed Panchro)"],
      "aes_texture_render": ["柔焦梦幻感 (Dreamy Soft-Focus)"],
      "aes_physical_grain": ["标准 35mm (Standard 35mm Grain)"],
      "aes_base_tone": ["柔和褪色 (Soft Faded)"],
      "aes_color_science": ["Kodak Portra 400 (Kodak Portra 400)"],
      "aes_color_palette": ["迷失东京 (Lost in Translation)"],
      "aes_render_real": ["电影质感 (Cinematic)"]
    }
  },
  {
    id: "preset_birdman",
    name: "鸟人 (Birdman)",
    nameEn: "Style of Iñárritu",
    group: "B. 经典电影",
    def: "Continuous single shot illusion, cramped backstage corridors, magical realism, floating objects, and stage lighting.",
    colors: ["#000000", "#8B4513", "#FF0000", "#FFFFFF", "#708090", "#0000FF", "#FFFF00"],
    params: {
      "aes_director_style": ["伊纳里图 (Iñárritu)"],
      "aes_camera_system": ["ARRI ALEXA M (ARRI ALEXA Mini)"],
      "aes_optical_format": ["Super 35mm"],
      "aes_lens_series": ["Leica Summilux-C (Leica Summilux-C)"],
      "aes_texture_render": ["有机电影感 (Organic Film)"],
      "aes_physical_grain": ["细腻 35mm (Fine 35mm Grain)"],
      "aes_base_tone": ["自然主义 (Naturalism)"],
      "aes_color_science": ["ARRI LogC (ARRI LogC)"],
      "aes_color_palette": ["鸟人 (Birdman)"],
      "aes_render_real": ["大师级杰作 (Masterpiece)"]
    }
  },
  {
    id: "preset_french_dispatch",
    name: "法兰西特派 (The French Dispatch)",
    nameEn: "Style of Wes Anderson",
    group: "B. 经典电影",
    def: "Magazine layout composition, black and white mixed with pastel color, flat sets, tableaux vivant, and symmetry.",
    colors: ["#F5F5DC", "#000000", "#FFFFFF", "#FFC0CB", "#87CEEB", "#FFFF00", "#A52A2A"],
    params: {
      "aes_director_style": ["韦斯·安德森 (Wes Anderson)"],
      "aes_camera_system": ["Arricam ST (Arricam ST)"],
      "aes_optical_format": ["Standard 35mm"],
      "aes_lens_series": ["Cooke S4/i (Cooke S4/i)"],
      "aes_texture_render": ["中性真实还原 (Neutral Authenticity)"],
      "aes_physical_grain": ["细腻 35mm (Fine 35mm Grain)"],
      "aes_base_tone": ["粉彩柔光 (Pastel Glow)"],
      "aes_color_science": ["Kodak Vision3 (Kodak Vision3)"],
      "aes_color_palette": ["法兰西特派 (The French Dispatch)"],
      "aes_render_real": ["大师级杰作 (Masterpiece)"]
    }
  },
  {
    id: "preset_portrait_lady_fire",
    name: "燃烧女子的肖像 (Portrait of a Lady)",
    nameEn: "Style of Celine Sciamma",
    group: "B. 经典电影",
    def: "Oil painting texture, natural light, bonfires on beach, intense gazes, and primary colors of dresses against sea.",
    colors: ["#FF4500", "#000080", "#228B22", "#F5DEB3", "#000000", "#FFFFFF", "#A52A2A"],
    params: {
      "aes_director_style": ["Celine Sciamma"],
      "aes_camera_system": ["RED MONSTRO (RED MONSTRO)"],
      "aes_optical_format": ["8K VistaVision"],
      "aes_lens_series": ["Leica Thalia"],
      "aes_texture_render": ["有机电影感 (Organic Film)"],
      "aes_physical_grain": ["极致纯净 (Denoised/Pristine)"],
      "aes_base_tone": ["自然主义 (Naturalism)"],
      "aes_color_science": ["RED IPP2 (RED IPP2)"],
      "aes_color_palette": ["燃烧女子的肖像 (Portrait of a Lady on Fire)"],
      "aes_render_real": ["大师级杰作 (Masterpiece)"]
    }
  },
  {
    id: "preset_cmbyn",
    name: "请以你的名字呼唤我 (Call Me by Your Name)",
    nameEn: "Style of Luca Guadagnino",
    group: "B. 经典电影",
    def: "Italian summer, sun-drenched lens flares, peaches, ancient ruins, and soft focus intimacy.",
    colors: ["#87CEEB", "#FFD700", "#228B22", "#F5DEB3", "#FFC0CB", "#8B4513", "#FFFFFF"],
    params: {
      "aes_director_style": ["Luca Guadagnino"],
      "aes_camera_system": ["Arriflex 35 III (Arriflex 35 III)"],
      "aes_optical_format": ["35mm Film"],
      "aes_lens_series": ["Cooke S4/i (Cooke S4/i)"],
      "aes_texture_render": ["柔焦梦幻感 (Dreamy Soft-Focus)"],
      "aes_physical_grain": ["标准 35mm (Standard 35mm Grain)"],
      "aes_base_tone": ["胶片奇观 (50s-70s Technicolor)"],
      "aes_color_science": ["Kodak 5247 (Kodak 5247)"],
      "aes_color_palette": ["请以你的名字呼唤我 (Call Me by Your Name)"],
      "aes_render_real": ["电影质感 (Cinematic)"]
    }
  },
  {
    id: "preset_clockwork_orange",
    name: "发条橙 (A Clockwork Orange)",
    nameEn: "Style of Stanley Kubrick",
    group: "B. 经典电影",
    def: "White jumpsuits, milk bar, extreme wide angle, Beethoven, and disturbing symmetrical composition.",
    colors: ["#FFFFFF", "#000000", "#FFA500", "#0000FF", "#808080", "#FF0000", "#8B0000"],
    params: {
      "aes_director_style": ["库布里克 (Stanley Kubrick)"],
      "aes_camera_system": ["Arriflex 35 IIC"],
      "aes_optical_format": ["Standard 35mm"],
      "aes_lens_series": ["Kinoptik (Kinoptik)"],
      "aes_texture_render": ["冷峻工业锐度 (Clinical Sharpness)"],
      "aes_physical_grain": ["标准 35mm (Standard 35mm Grain)"],
      "aes_base_tone": ["高对比硬核感 (Stark High-Contrast)"],
      "aes_color_science": ["Kodak 5254 (Kodak 5254)"],
      "aes_color_palette": ["发条橙 (A Clockwork Orange)"],
      "aes_render_real": ["大师级杰作 (Masterpiece)"]
    }
  },
  {
    id: "preset_trainspotting",
    name: "猜火车 (Trainspotting)",
    nameEn: "Style of Danny Boyle",
    group: "B. 经典电影",
    def: "Dirty realism, surreal hallucinations (toilet dive), wide angle distortion, and grimy Scottish textures.",
    colors: ["#8B4513", "#006400", "#FFFF00", "#000000", "#FFFFFF", "#FF0000", "#808080"],
    params: {
      "aes_director_style": ["丹尼·博伊尔 (Danny Boyle)"],
      "aes_camera_system": ["Arriflex 35 BL (Arriflex 35 BL)"],
      "aes_optical_format": ["Standard 35mm"],
      "aes_lens_series": ["Zeiss Standard Speeds (Standard Speeds)"],
      "aes_texture_render": ["物理磨损质感 (Distressed Celluloid)"],
      "aes_physical_grain": ["粗糙 16mm (Rough 16mm Grain)"],
      "aes_base_tone": ["复古褪色质感 (Faded Vintage)"],
      "aes_color_science": ["Agfa Vista (Agfa Vista)"],
      "aes_color_palette": ["猜火车 (Trainspotting)"],
      "aes_render_real": ["电影质感 (Cinematic)"]
    }
  },
  {
    id: "preset_schindlers_list",
    name: "辛德勒的名单 (Schindler's List)",
    nameEn: "Style of Steven Spielberg",
    group: "B. 经典电影",
    def: "High contrast black and white with a single red element (the girl), factory smoke, and handheld realism.",
    colors: ["#000000", "#FFFFFF", "#FF0000", "#808080", "#A9A9A9", "#C0C0C0", "#333333"],
    params: {
      "aes_director_style": ["斯皮尔伯格 (Steven Spielberg)"],
      "aes_camera_system": ["Arriflex 535 (Arriflex 535B)"],
      "aes_optical_format": ["Standard 35mm"],
      "aes_lens_series": ["Zeiss Super Speed (Zeiss Super Speed)"],
      "aes_texture_render": ["银盐堆叠质感 (Silver Halide Texture)"],
      "aes_physical_grain": ["标准 35mm (Standard 35mm Grain)"],
      "aes_base_tone": ["艺术黑白 (Fine-Art Mono)"],
      "aes_color_science": ["Kodak Double-X (Kodak Double-X)"],
      "aes_color_palette": ["辛德勒红 (B&W + Red)"],
      "aes_render_real": ["大师级杰作 (Masterpiece)"]
    }
  },
  {
    id: "preset_inception",
    name: "盗梦空间 (Inception)",
    nameEn: "Style of Christopher Nolan",
    group: "B. 经典电影",
    def: "Folding cities, spinning hallways, slow motion water, sterile suits, and complex dream logic.",
    colors: ["#708090", "#2F4F4F", "#000000", "#FFFFFF", "#8B4513", "#A52A2A", "#D3D3D3"],
    params: {
      "aes_director_style": ["诺兰 (Christopher Nolan)"],
      "aes_camera_system": ["Panavision System 65 (System 65)"],
      "aes_optical_format": ["65mm Large Format"],
      "aes_lens_series": ["Panavision Spherical (Panavision Spherical)"],
      "aes_texture_render": ["冷峻工业锐度 (Clinical Sharpness)"],
      "aes_physical_grain": ["细腻 35mm (Fine 35mm Grain)"],
      "aes_base_tone": ["诺兰冷调 (Nolan Steel)"],
      "aes_color_science": ["Kodak Vision3 (Kodak Vision3)"],
      "aes_color_palette": ["盗梦空间 (Inception)"],
      "aes_render_real": ["8K 超高清 (8K UHD)"]
    }
  },
  {
    id: "preset_titanic",
    name: "泰坦尼克号 (Titanic)",
    nameEn: "Style of James Cameron",
    group: "B. 经典电影",
    def: "Epic sunset at ship bow, industrial machinery, freezing blue water, luxury interiors, and grand romance.",
    colors: ["#000080", "#FF4500", "#FFFFFF", "#000000", "#FFD700", "#8B4513", "#2F4F4F"],
    params: {
      "aes_director_style": ["卡梅隆 (James Cameron)"],
      "aes_camera_system": ["Panaflex Millennium (Panaflex Millennium)"],
      "aes_optical_format": ["Super 35mm"],
      "aes_lens_series": ["Panavision Primos (Panavision Primos)"],
      "aes_texture_render": ["有机电影感 (Organic Film)"],
      "aes_physical_grain": ["细腻 35mm (Fine 35mm Grain)"],
      "aes_base_tone": ["黄金年代 (90s Cinematic)"],
      "aes_color_science": ["Kodak 5245 (Kodak 5245)"],
      "aes_color_palette": ["泰坦尼克号 (Titanic)"],
      "aes_render_real": ["电影质感 (Cinematic)"]
    }
  },
  {
    id: "preset_great_gatsby",
    name: "了不起的盖茨比 (Great Gatsby)",
    nameEn: "Style of Baz Luhrmann",
    group: "B. 经典电影",
    def: "Excessive luxury, fireworks, champagne showers, vibrant art deco patterns, and frenetic camera movement.",
    colors: ["#FFD700", "#000000", "#FFFFFF", "#C0C0C0", "#000080", "#800080", "#FF69B4"],
    params: {
      "aes_director_style": ["巴兹·鲁赫曼 (Baz Luhrmann)"],
      "aes_camera_system": ["RED EPIC (Red Epic)"],
      "aes_optical_format": ["3D Stereo"],
      "aes_lens_series": ["Zeiss Master Primes (Zeiss Master Primes)"],
      "aes_texture_render": ["湿润高光泽 (Glossy / Wet Look)"],
      "aes_physical_grain": ["极致纯净 (Denoised/Pristine)"],
      "aes_base_tone": ["生动广告 (Vivid Commercial)"],
      "aes_color_science": ["RedLogFilm (RedLogFilm)"],
      "aes_color_palette": ["了不起的盖茨比 (Great Gatsby)"],
      "aes_render_real": ["大师级杰作 (Masterpiece)"]
    }
  },
  {
    id: "preset_american_psycho",
    name: "美国精神病人 (American Psycho)",
    nameEn: "Style of Mary Harron",
    group: "B. 经典电影",
    def: "Sterile white apartment, clear raincoat, blood splatter, sharp suit, and cold clinical lighting.",
    colors: ["#FFFFFF", "#000000", "#FF0000", "#C0C0C0", "#708090", "#000080", "#8B4513"],
    params: {
      "aes_director_style": ["Mary Harron"],
      "aes_camera_system": ["Panavision Panaflex (Panaflex)"],
      "aes_optical_format": ["Standard 35mm"],
      "aes_lens_series": ["Panavision Primos (Panavision Primos)"],
      "aes_texture_render": ["冷峻工业锐度 (Clinical Sharpness)"],
      "aes_physical_grain": ["细腻 35mm (Fine 35mm Grain)"],
      "aes_base_tone": ["冷峻工业锐度 (Clinical Sharpness)"],
      "aes_color_science": ["Kodak 5279 (Kodak 5279)"],
      "aes_color_palette": ["美国精神病人 (American Psycho)"],
      "aes_render_real": ["锐利聚焦 (Sharp Focus)"]
    }
  },
  {
    id: "preset_fight_club",
    name: "搏击俱乐部 (Fight Club)",
    nameEn: "Style of David Fincher",
    group: "B. 经典电影",
    def: "Dirty green filters, sweat, blood, dark basements, strobe lights, and subliminal frame splicing.",
    colors: ["#556B2F", "#000000", "#8B0000", "#2F4F4F", "#A52A2A", "#F5F5DC", "#808080"],
    params: {
      "aes_director_style": ["大卫·芬奇 (David Fincher)"],
      "aes_camera_system": ["Panavision Platinum (Panavision Platinum)"],
      "aes_optical_format": ["Super 35mm"],
      "aes_lens_series": ["Zeiss Super Speed (Zeiss Super Speed)"],
      "aes_texture_render": ["物理磨损质感 (Distressed Celluloid)"],
      "aes_physical_grain": ["粗糙 16mm (Rough 16mm Grain)"],
      "aes_base_tone": ["芬奇黄绿 (Fincher Yellow-Green)"],
      "aes_color_science": ["Kodak 5293 (Kodak 5293)"],
      "aes_color_palette": ["搏击俱乐部 (Fight Club)"],
      "aes_render_real": ["电影质感 (Cinematic)"]
    }
  },
  {
    id: "preset_pulp_fiction",
    name: "低俗小说 (Pulp Fiction)",
    nameEn: "Style of Quentin Tarantino",
    group: "B. 经典电影",
    def: "Diner lighting, dancing, black suits, blood, glowing briefcase, and non-linear cool.",
    colors: ["#000000", "#FFFFFF", "#FF0000", "#FFFF00", "#8B4513", "#0000FF", "#808080"],
    params: {
      "aes_director_style": ["昆汀 (Tarantino)"],
      "aes_camera_system": ["Panavision Panaflex (Panaflex)"],
      "aes_optical_format": ["Anamorphic"],
      "aes_lens_series": ["Panavision E-Series (Panavision E-Series)"],
      "aes_texture_render": ["有机电影感 (Organic Film)"],
      "aes_physical_grain": ["标准 35mm (Standard 35mm Grain)"],
      "aes_base_tone": ["胶片奇观 (50s-70s Technicolor)"],
      "aes_color_science": ["Kodak 5247 (Kodak 5247)"],
      "aes_color_palette": ["低俗小说 (Pulp Fiction)"],
      "aes_render_real": ["电影质感 (Cinematic)"]
    }
  },
  {
    id: "preset_burning",
    name: "燃烧 (Burning)",
    nameEn: "Style of Lee Chang-dong",
    group: "B. 经典电影",
    def: "Sunset silhouette dancing, plastic greenhouses, mist, rural isolation, and a slow-burning mystery.",
    colors: ["#FF4500", "#2F4F4F", "#000000", "#A9A9A9", "#8B4513", "#DAA520", "#556B2F"],
    params: {
      "aes_director_style": ["李沧东 (Lee Chang-dong)"],
      "aes_camera_system": ["ARRI ALEXA Mini (ARRI ALEXA Mini)"],
      "aes_optical_format": ["Super 35mm"],
      "aes_lens_series": ["Zeiss Master Primes (Zeiss Master Primes)"],
      "aes_texture_render": ["中性真实还原 (Neutral Authenticity)"],
      "aes_physical_grain": ["细腻 35mm (Fine 35mm Grain)"],
      "aes_base_tone": ["自然主义 (Naturalism)"],
      "aes_color_science": ["ARRI LogC (ARRI LogC)"],
      "aes_color_palette": ["燃烧 (Burning)"],
      "aes_render_real": ["大师级杰作 (Masterpiece)"]
    }
  },
  {
    id: "preset_farewell_concubine",
    name: "霸王别姬 (Farewell My Concubine)",
    nameEn: "Style of Chen Kaige",
    group: "B. 经典电影",
    def: "Peking opera face paint, fire, smoke, historical weight, tragedy, and lavish costumes.",
    colors: ["#FF0000", "#000000", "#FFD700", "#FFFFFF", "#0000FF", "#8B4513", "#808080"],
    params: {
      "aes_director_style": ["陈凯歌 (Chen Kaige)"],
      "aes_camera_system": ["Arriflex 35 BL (Arriflex 35 BL)"],
      "aes_optical_format": ["Standard 35mm"],
      "aes_lens_series": ["Cooke Speed Panchro (Cooke Speed Panchro)"],
      "aes_texture_render": ["有机电影感 (Organic Film)"],
      "aes_physical_grain": ["标准 35mm (Standard 35mm Grain)"],
      "aes_base_tone": ["胶片奇观 (50s-70s Technicolor)"],
      "aes_color_science": ["Kodak 5247 (Kodak 5247)"],
      "aes_color_palette": ["霸王别姬 (Farewell My Concubine)"],
      "aes_render_real": ["电影质感 (Cinematic)"]
    }
  },
  {
    id: "preset_ashes_of_time",
    name: "东邪西毒 (Ashes of Time)",
    nameEn: "Style of Wong Kar-wai",
    group: "B. 经典电影",
    def: "Step-printing motion blur, desert solitude, impressionistic sword fights, birdcages, and light passing through woven bamboo.",
    colors: ["#D2B48C", "#8B4513", "#000000", "#000080", "#F5DEB3", "#A0522D", "#FFFFFF"],
    params: {
      "aes_director_style": ["王家卫 (Wong Kar-wai)"],
      "aes_camera_system": ["Arriflex 35 III (Arriflex 35 III)"],
      "aes_optical_format": ["Standard 35mm"],
      "aes_lens_series": ["Kinoptik 9.8mm (Kinoptik)"],
      "aes_texture_render": ["胶片弥散 (Film Diffusion)"],
      "aes_physical_grain": ["粗糙 16mm (Rough 16mm Grain)"],
      "aes_base_tone": ["复古褪色质感 (Faded Vintage)"],
      "aes_color_science": ["Kodak 5293 (Kodak 5293)"],
      "aes_color_palette": ["东邪西毒 (Ashes of Time)"],
      "aes_render_real": ["电影质感 (Cinematic)"]
    }
  },
  {
    id: "preset_touch_of_zen",
    name: "侠女 (A Touch of Zen)",
    nameEn: "Style of King Hu",
    group: "B. 经典电影",
    def: "Bamboo forests, mist, zen buddhism, panoramic action composition, and spiritual stillness.",
    colors: ["#556B2F", "#F5F5DC", "#000000", "#8B4513", "#D3D3D3", "#FFFFFF", "#708090"],
    params: {
      "aes_director_style": ["胡金铨 (King Hu)"],
      "aes_camera_system": ["Mitchell BNC (Mitchell BNC)"],
      "aes_optical_format": ["Techniscope"],
      "aes_lens_series": ["Panavision Anamorphic (Anamorphic)"],
      "aes_texture_render": ["有机电影感 (Organic Film)"],
      "aes_physical_grain": ["标准 35mm (Standard 35mm Grain)"],
      "aes_base_tone": ["自然主义 (Naturalism)"],
      "aes_color_science": ["Kodak 5254 (Kodak 5254)"],
      "aes_color_palette": ["侠女 (A Touch of Zen)"],
      "aes_render_real": ["大师级杰作 (Masterpiece)"]
    }
  },
  {
    id: "preset_shaw_brothers",
    name: "邵氏武侠 (Shaw Brothers)",
    nameEn: "Style of Chang Cheh",
    group: "B. 经典电影",
    def: "Studio sets, zoom snaps, heroic bloodshed, bright fake blood, shirtless duels, and theatrical lighting.",
    colors: ["#FF0000", "#000000", "#FFFFFF", "#0000FF", "#FFFF00", "#8B4513", "#C0C0C0"],
    params: {
      "aes_director_style": ["张彻 (Chang Cheh)"],
      "aes_camera_system": ["Arriflex 35 IIC"],
      "aes_optical_format": ["Shawscope (Anamorphic)"],
      "aes_lens_series": ["Angénieux Zoom (Angénieux Zoom)"],
      "aes_texture_render": ["有机电影感 (Organic Film)"],
      "aes_physical_grain": ["标准 35mm (Standard 35mm Grain)"],
      "aes_base_tone": ["胶片奇观 (50s-70s Technicolor)"],
      "aes_color_science": ["Kodak 5247 (Kodak 5247)"],
      "aes_color_palette": ["邵氏武侠 (Shaw Brothers)"],
      "aes_render_real": ["电影质感 (Cinematic)"]
    }
  },
  {
    id: "preset_swordsman_2",
    name: "东方不败 (Swordsman II)",
    nameEn: "Style of Tsui Hark",
    group: "B. 经典电影",
    def: "Wire-fu, flying needles, rapid editing, gender ambiguity, blue night scenes, and red robes.",
    colors: ["#FF0000", "#000080", "#FFFFFF", "#000000", "#FFD700", "#800080", "#008000"],
    params: {
      "aes_director_style": ["徐克 (Tsui Hark)"],
      "aes_camera_system": ["Arriflex 35 BL (Arriflex 35 BL)"],
      "aes_optical_format": ["Standard 35mm"],
      "aes_lens_series": ["Zeiss Standard Speeds (Standard Speeds)"],
      "aes_texture_render": ["柔焦梦幻感 (Dreamy Soft-Focus)"],
      "aes_physical_grain": ["粗糙 16mm (Rough 16mm Grain)"],
      "aes_base_tone": ["生动广告 (Vivid Commercial)"],
      "aes_color_science": ["Kodak Vision3 (Kodak Vision3)"],
      "aes_color_palette": ["东方不败 (Swordsman II)"],
      "aes_render_real": ["电影质感 (Cinematic)"]
    }
  },

  // ==========================================
  // C. 虚幻引擎与游戏 (Unreal & Game Engine) - 12 Items
  // ==========================================
  {
    id: "preset_matrix_awakens",
    name: "矩阵觉醒 (Matrix Awakens)",
    nameEn: "Style of Matrix Awakens",
    group: "C. 虚幻引擎",
    def: "Unreal Engine 5 demonstration. Hyper-realistic city lighting, signature matrix green grade, and perfect reflections.",
    colors: ["#00FF00", "#000000", "#808080", "#FFFFFF", "#003300", "#006600", "#C0C0C0"],
    params: {
      "aes_director_style": [],
      "aes_camera_system": ["Virtual Camera (CG)"],
      "aes_optical_format": ["Full Frame"],
      "aes_lens_series": ["Virtual Lens (CG)"],
      "aes_texture_render": ["虚幻5写实 (Unreal Engine 5)"],
      "aes_physical_grain": ["极致纯净 (Denoised/Pristine)"],
      "aes_base_tone": ["高对比硬核感 (Stark High-Contrast)"],
      "aes_color_science": ["ACES (ACES)"],
      "aes_color_palette": ["矩阵觉醒 (Matrix Awakens)"],
      "aes_render_real": ["虚幻5写实 (Unreal Engine 5)"]
    }
  },
  {
    id: "preset_rebirth",
    name: "重生 (Rebirth)",
    nameEn: "Style of Rebirth",
    group: "C. 虚幻引擎",
    def: "Quixel Megascans demo. Volcanic terrain, hyper-realistic rock textures, overcast diffused light, and atmospheric scale.",
    colors: ["#808080", "#696969", "#A9A9A9", "#000000", "#556B2F", "#8B4513", "#FFFFFF"],
    params: {
      "aes_director_style": [],
      "aes_camera_system": ["Virtual Camera (CG)"],
      "aes_optical_format": ["Full Frame"],
      "aes_lens_series": ["Virtual Lens (CG)"],
      "aes_texture_render": ["虚幻5写实 (Unreal Engine 5)"],
      "aes_physical_grain": ["极致纯净 (Denoised/Pristine)"],
      "aes_base_tone": ["自然主义 (Naturalism)"],
      "aes_color_science": ["ACES (ACES)"],
      "aes_color_palette": ["重生 (Rebirth)"],
      "aes_render_real": ["虚幻5写实 (Unreal Engine 5)"]
    }
  },
  {
    id: "preset_lumen_ruins",
    name: "Lumen遗迹 (Lumen Ruins)",
    nameEn: "Style of Lumen Ruins",
    group: "C. 虚幻引擎",
    def: "Global illumination showcase. Ancient ruins, light bouncing through arches, bright sun, and high foliage detail.",
    colors: ["#FFD700", "#DAA520", "#228B22", "#87CEEB", "#FFFFFF", "#8B4513", "#A0522D"],
    params: {
      "aes_director_style": [],
      "aes_camera_system": ["Virtual Camera (CG)"],
      "aes_optical_format": ["Full Frame"],
      "aes_lens_series": ["Virtual Lens (CG)"],
      "aes_texture_render": ["虚幻5写实 (Unreal Engine 5)"],
      "aes_physical_grain": ["极致纯净 (Denoised/Pristine)"],
      "aes_base_tone": ["高动态均衡 (High Dynamic HDR)"],
      "aes_color_science": ["ACES (ACES)"],
      "aes_color_palette": ["Lumen遗迹 (Lumen Ruins)"],
      "aes_render_real": ["虚幻5写实 (Unreal Engine 5)"]
    }
  },
  {
    id: "preset_metahuman",
    name: "数字人类 (Metahuman)",
    nameEn: "Style of MetaHuman",
    group: "C. 虚幻引擎",
    def: "Hyper-realistic facial close-ups, skin pore details, subsurface scattering, and perfect cinematic studio lighting.",
    colors: ["#FFC0CB", "#FFA07A", "#8B4513", "#FFFFFF", "#000000", "#808080", "#FFE4C4"],
    params: {
      "aes_director_style": [],
      "aes_camera_system": ["Virtual Camera (CG)"],
      "aes_optical_format": ["85mm Portrait"],
      "aes_lens_series": ["Virtual Lens (CG)"],
      "aes_texture_render": ["次表面散射 (SSS)"],
      "aes_physical_grain": ["极致纯净 (Denoised/Pristine)"],
      "aes_base_tone": ["中性真实还原 (Neutral Authenticity)"],
      "aes_color_science": ["ACES (ACES)"],
      "aes_color_palette": ["数字人类 (Metahuman)"],
      "aes_render_real": ["虚幻5写实 (Unreal Engine 5)"]
    }
  },
  {
    id: "preset_death_stranding_game",
    name: "死亡搁浅 (Death Stranding)",
    nameEn: "Style of Death Stranding",
    group: "C. 虚幻引擎",
    def: "Icelandic scenery, wet black tar, futuristic gear, lonely delivery routes, and somber, overcast weather.",
    colors: ["#000000", "#2F4F4F", "#708090", "#808080", "#0000FF", "#FFFFFF", "#8B0000"],
    params: {
      "aes_director_style": ["小岛秀夫 (Hideo Kojima)"],
      "aes_camera_system": ["Virtual Camera (CG)"],
      "aes_optical_format": ["Super 35mm"],
      "aes_lens_series": ["Virtual Lens (CG)"],
      "aes_texture_render": ["湿润高光泽 (Glossy / Wet Look)"],
      "aes_physical_grain": ["微细 35mm (Micro 35mm Grain)"],
      "aes_base_tone": ["冷峻工业锐度 (Clinical Sharpness)"],
      "aes_color_science": ["Sony S-Gamut (Sony S-Gamut)"],
      "aes_color_palette": ["死亡搁浅 (Death Stranding)"],
      "aes_render_real": ["8K 超高清 (8K UHD)"]
    }
  },
  {
    id: "preset_pt_game",
    name: "P.T. (Silent Hills)",
    nameEn: "Style of P.T.",
    group: "C. 虚幻引擎",
    def: "Infinite hallway loop, hyper-realistic indoor lighting, flashlight shadows, and acute psychological horror.",
    colors: ["#000000", "#8B4513", "#FFFFF0", "#808080", "#FF0000", "#2F4F4F", "#A52A2A"],
    params: {
      "aes_director_style": ["小岛秀夫 (Hideo Kojima)"],
      "aes_camera_system": ["Virtual Camera (CG)"],
      "aes_optical_format": ["First Person"],
      "aes_lens_series": ["Virtual Lens (CG)"],
      "aes_texture_render": ["物理磨损质感 (Distressed Celluloid)"],
      "aes_physical_grain": ["数码传感器噪点 (Digital Sensor Noise)"],
      "aes_base_tone": ["恐怖冷调 (Horror Cool)"],
      "aes_color_science": ["Rec.709 (Rec.709)"],
      "aes_color_palette": ["P.T. (Silent Hills)"],
      "aes_render_real": ["大师级杰作 (Masterpiece)"]
    }
  },
  {
    id: "preset_unrecord_game",
    name: "Unrecord (Bodycam)",
    nameEn: "Style of Unrecord",
    group: "C. 虚幻引擎",
    def: "Bodycam perspective, fisheye distortion, extreme motion blur, and hyper-realistic ruined environments.",
    colors: ["#000000", "#808080", "#FFFFFF", "#A9A9A9", "#708090", "#2F4F4F", "#8B4513"],
    params: {
      "aes_director_style": [],
      "aes_camera_system": ["GoPro Hero (GoPro Hero)"],
      "aes_optical_format": ["Action Cam Sensor"],
      "aes_lens_series": ["Fisheye Lens (Fisheye Lens)"],
      "aes_texture_render": ["中性真实还原 (Neutral Authenticity)"],
      "aes_physical_grain": ["数码传感器噪点 (Digital Sensor Noise)"],
      "aes_base_tone": ["自然主义 (Naturalism)"],
      "aes_color_science": ["GoPro Flat (GoPro Flat)"],
      "aes_color_palette": ["Unrecord (Bodycam)"],
      "aes_render_real": ["虚幻5写实 (Unreal Engine 5)"]
    }
  },
  {
    id: "preset_cyberpunk_game_ultra",
    name: "赛博朋克 (Overdrive)",
    nameEn: "Style of Cyberpunk 2077",
    group: "C. 虚幻引擎",
    def: "Full path tracing, neon raytraced reflections, wet road surfaces, and extremely complex futuristic city details.",
    colors: ["#00FFFF", "#FF00FF", "#FFFF00", "#000000", "#0000FF", "#FF0000", "#FFFFFF"],
    params: {
      "aes_director_style": [],
      "aes_camera_system": ["Virtual Camera (CG)"],
      "aes_optical_format": ["Full Frame"],
      "aes_lens_series": ["Virtual Lens (CG)"],
      "aes_texture_render": ["光线追踪 (Ray Tracing)"],
      "aes_physical_grain": ["极致纯净 (Denoised/Pristine)"],
      "aes_base_tone": ["生动广告 (Vivid Commercial)"],
      "aes_color_science": ["ACES (ACES)"],
      "aes_color_palette": ["赛博朋克 (Overdrive)"],
      "aes_render_real": ["光线追踪 (Ray Tracing)"]
    }
  },
  {
    id: "preset_elden_ring",
    name: "艾尔登法环 (Elden Ring)",
    nameEn: "Style of Elden Ring",
    group: "C. 虚幻引擎",
    def: "Golden Erdtree light, gothic decay, fog-covered landscapes, high fantasy armor, and epic scale.",
    colors: ["#FFD700", "#DAA520", "#556B2F", "#708090", "#000000", "#F5F5DC", "#8B4513"],
    params: {
      "aes_director_style": [],
      "aes_camera_system": ["Virtual Camera (CG)"],
      "aes_optical_format": ["Wide Angle"],
      "aes_lens_series": ["Virtual Lens (CG)"],
      "aes_texture_render": ["虚幻5写实 (Unreal Engine 5)"],
      "aes_physical_grain": ["极致纯净 (Denoised/Pristine)"],
      "aes_base_tone": ["自然主义 (Naturalism)"],
      "aes_color_science": ["ACES (ACES)"],
      "aes_color_palette": ["艾尔登法环 (Elden Ring)"],
      "aes_render_real": ["大师级杰作 (Masterpiece)"]
    }
  },
  {
    id: "preset_rdr2",
    name: "荒野大镖客2 (RDR2)",
    nameEn: "Style of Red Dead Redemption 2",
    group: "C. 虚幻引擎",
    def: "Hyper-realistic western landscapes, dynamic weather, volumetric clouds, mud physics, and cinematic lighting.",
    colors: ["#8B4513", "#D2B48C", "#228B22", "#87CEEB", "#FFFFFF", "#000000", "#A0522D"],
    params: {
      "aes_director_style": [],
      "aes_camera_system": ["Virtual Camera (CG)"],
      "aes_optical_format": ["Super 35mm"],
      "aes_lens_series": ["Virtual Lens (CG)"],
      "aes_texture_render": ["有机电影感 (Organic Film)"],
      "aes_physical_grain": ["极致纯净 (Denoised/Pristine)"],
      "aes_base_tone": ["自然主义 (Naturalism)"],
      "aes_color_science": ["ACES (ACES)"],
      "aes_color_palette": ["荒野大镖客2 (RDR2)"],
      "aes_render_real": ["8K 超高清 (8K UHD)"]
    }
  },
  {
    id: "preset_ghost_tsushima",
    name: "对马岛之魂 (Ghost of Tsushima)",
    nameEn: "Style of Ghost of Tsushima",
    group: "C. 虚幻引擎",
    def: "Kurosawa mode B&W, falling leaves, wind physics, sweeping grasslands, and samurai silhouettes.",
    colors: ["#000000", "#FFFFFF", "#808080", "#A9A9A9", "#FF0000", "#FFFF00", "#008000"],
    params: {
      "aes_director_style": ["黑泽明 (Akira Kurosawa)"],
      "aes_camera_system": ["Virtual Camera (CG)"],
      "aes_optical_format": ["Wide Angle"],
      "aes_lens_series": ["Virtual Lens (CG)"],
      "aes_texture_render": ["高对比硬核感 (Stark High-Contrast)"],
      "aes_physical_grain": ["胶片颗粒 (Film Grain)"],
      "aes_base_tone": ["艺术黑白 (Fine-Art Mono)"],
      "aes_color_science": ["ACES (ACES)"],
      "aes_color_palette": ["对马岛之魂 (Ghost of Tsushima)"],
      "aes_render_real": ["大师级杰作 (Masterpiece)"]
    }
  },
  {
    id: "preset_alan_wake_2",
    name: "心灵杀手2 (Alan Wake 2)",
    nameEn: "Style of Alan Wake 2",
    group: "C. 虚幻引擎",
    def: "Live-action mixed with CGI, dark place neon, flashlight beam physics, rain, and psychological horror.",
    colors: ["#000000", "#2F4F4F", "#FF0000", "#0000FF", "#FFFFF0", "#808080", "#A52A2A"],
    params: {
      "aes_director_style": ["小岛秀夫 (Hideo Kojima)"],
      "aes_camera_system": ["Virtual Camera (CG)"],
      "aes_optical_format": ["Full Frame"],
      "aes_lens_series": ["Virtual Lens (CG)"],
      "aes_texture_render": ["混合媒介 (Mixed Media)"],
      "aes_physical_grain": ["数码传感器噪点 (Digital Sensor Noise)"],
      "aes_base_tone": ["恐怖冷调 (Horror Cool)"],
      "aes_color_science": ["ACES (ACES)"],
      "aes_color_palette": ["心灵杀手2 (Alan Wake 2)"],
      "aes_render_real": ["虚幻5写实 (Unreal Engine 5)"]
    }
  },
  
  // ==========================================
  // D. 商业与广告 (Commercial & Ads) - 14 Items
  // ==========================================
  {
    id: "preset_apple_ad",
    name: "苹果工业 (Apple Minimal)",
    nameEn: "Style of Apple",
    group: "D. 商业广告",
    def: "Pure white shadowless backgrounds, hyper-sharp product close-ups, and space-grey aluminum textures.",
    colors: ["#FFFFFF", "#F5F5F7", "#E8E8ED", "#D2D2D7", "#86868B", "#1D1D1F", "#000000"],
    params: {
      "aes_director_style": ["苹果发布会 (Apple Keynote)"],
      "aes_camera_system": ["Phase One XF (Phase One)"],
      "aes_optical_format": ["Medium Format"],
      "aes_lens_series": ["Schneider Macro (Schneider Macro)"],
      "aes_texture_render": ["极致纯净渲染 (Pristine Digital)"],
      "aes_physical_grain": ["极致纯净 (Denoised/Pristine)"],
      "aes_base_tone": ["中性基准 (Neutral Standard)"],
      "aes_color_science": ["Rec.709 (Rec.709)"],
      "aes_color_palette": ["苹果工业 (Apple Minimal)"],
      "aes_render_real": ["极致写实 (Photorealistic)"]
    }
  },
  {
    id: "preset_nike_ad",
    name: "耐克 (Nike)",
    nameEn: "Style of Nike",
    group: "D. 商业广告",
    def: "High-contrast B&W, sweat, muscle textures, rainy stadiums, and energetic handheld camerawork.",
    colors: ["#000000", "#1A1A1A", "#FFFFFF", "#808080", "#FF0000", "#0000FF", "#FFFF00"],
    params: {
      "aes_director_style": ["耐克广告 (Nike Ad)"],
      "aes_camera_system": ["RED KOMODO-X (RED KOMODO-X)"],
      "aes_optical_format": ["Super 35mm"],
      "aes_lens_series": ["Angénieux Zoom (Angénieux Zoom)"],
      "aes_texture_render": ["跳银金属感 (Bleach Bypass Texture)"],
      "aes_physical_grain": ["粗糙 16mm (Rough 16mm Grain)"],
      "aes_base_tone": ["生动广告 (Vivid Commercial)"],
      "aes_color_science": ["Kodak Tri-X (Kodak Tri-X)"],
      "aes_color_palette": ["耐克 (Nike)"],
      "aes_render_real": ["大师级杰作 (Masterpiece)"]
    }
  },
  {
    id: "preset_coke_ad",
    name: "可口可乐 (Coca-Cola)",
    nameEn: "Style of Coca-Cola",
    group: "D. 商业广告",
    def: "Classic red and white, condensation droplets, carbonation, sun-flared backlight, and joyful crowd energy.",
    colors: ["#FF0000", "#FFFFFF", "#000000", "#8B4513", "#FFFF00", "#00FF00", "#0000FF"],
    params: {
      "aes_director_style": ["可乐广告 (Coke Ad)"],
      "aes_camera_system": ["ARRI ALEXA Mini (ARRI ALEXA Mini)"],
      "aes_optical_format": ["Super 35mm"],
      "aes_lens_series": ["Zeiss Supreme Primes (Zeiss Supreme Primes)"],
      "aes_texture_render": ["湿润高光泽 (Glossy / Wet Look)"],
      "aes_physical_grain": ["极致纯净 (Denoised/Pristine)"],
      "aes_base_tone": ["生动广告 (Vivid Commercial)"],
      "aes_color_science": ["Kodak Gold 200 (Kodak Gold 200)"],
      "aes_color_palette": ["可口可乐 (Coca-Cola)"],
      "aes_render_real": ["锐利聚焦 (Sharp Focus)"]
    }
  },
  {
    id: "preset_perfume_ad",
    name: "香水广告 (Perfume Ad)",
    nameEn: "Style of Dior",
    group: "D. 商业广告",
    def: "Golden liquids, flowing silk, slow motion, blurred backgrounds, and high-end luxury atmosphere.",
    colors: ["#FFD700", "#DAA520", "#FFF8DC", "#000000", "#FFFFFF", "#8B4513", "#800080"],
    params: {
      "aes_director_style": ["香水广告 (Perfume Ad)"],
      "aes_camera_system": ["Phantom Flex4K (Phantom)"],
      "aes_optical_format": ["Super 35mm"],
      "aes_lens_series": ["Leica Summilux-C (Leica Summilux-C)"],
      "aes_texture_render": ["湿润高光泽 (Glossy / Wet Look)"],
      "aes_physical_grain": ["极致纯净 (Denoised/Pristine)"],
      "aes_base_tone": ["柔和褪色 (Soft Faded)"],
      "aes_color_science": ["Kodak Portra 400 (Kodak Portra 400)"],
      "aes_color_palette": ["香水广告 (Perfume Ad)"],
      "aes_render_real": ["大师级杰作 (Masterpiece)"]
    }
  },
  {
    id: "preset_car_ad",
    name: "汽车广告 (Car Commercial)",
    nameEn: "Style of Automotive",
    group: "D. 商业广告",
    def: "Aerodynamic body reflections, wet asphalt surfaces, tunnel light streaks, and high-speed motion.",
    colors: ["#000000", "#808080", "#FFFFFF", "#FF0000", "#000000", "#FFFF00", "#008000"],
    params: {
      "aes_director_style": ["汽车广告 (Car Commercial)"],
      "aes_camera_system": ["Russian Arm (Car Mount)"],
      "aes_optical_format": ["Super 35mm"],
      "aes_lens_series": ["Zeiss Master Primes (Zeiss Master Primes)"],
      "aes_texture_render": ["金属冷硬质感 (Metallic Texture)"],
      "aes_physical_grain": ["极致纯净 (Denoised/Pristine)"],
      "aes_base_tone": ["冷峻工业锐度 (Clinical Sharpness)"],
      "aes_color_science": ["ACES (ACES)"],
      "aes_color_palette": ["汽车广告 (Car Commercial)"],
      "aes_render_real": ["8K 超高清 (8K UHD)"]
    }
  },
  {
    id: "preset_fashion_ad",
    name: "时尚短片 (Fashion Film)",
    nameEn: "Style of High Fashion",
    group: "D. 商业广告",
    def: "Eccentric poses, unusual tailoring, experimental lighting, and high-grain 16mm textures.",
    colors: ["#000000", "#FFFFFF", "#FF0000", "#0000FF", "#FFFF00", "#800080", "#008000"],
    params: {
      "aes_director_style": ["时尚短片 (Fashion Film)"],
      "aes_camera_system": ["Bolex H16 (Bolex H16)"],
      "aes_optical_format": ["16mm"],
      "aes_lens_series": ["Angénieux Zoom (Angénieux Zoom)"],
      "aes_texture_render": ["物理磨损质感 (Distressed Celluloid)"],
      "aes_physical_grain": ["粗糙 16mm (Rough 16mm Grain)"],
      "aes_base_tone": ["复古褪色质感 (Faded Vintage)"],
      "aes_color_science": ["Kodak Ektachrome (Kodak Ektachrome)"],
      "aes_color_palette": ["时尚短片 (Fashion Film)"],
      "aes_render_real": ["RAW 原片 (RAW Photo)"]
    }
  },
  {
    id: "preset_ikea_ad",
    name: "宜家 (IKEA)",
    nameEn: "Style of IKEA",
    group: "D. 商业广告",
    def: "Soft natural light, light wood tones, tidy spaces, morning life vibe, and high-key exposure.",
    colors: ["#FFFFFF", "#F5F5DC", "#D2B48C", "#808080", "#000000", "#008000", "#FFFF00"],
    params: {
      "aes_director_style": ["宜家北欧 (IKEA)"],
      "aes_camera_system": ["Canon EOS R5 (Canon)"],
      "aes_optical_format": ["Full Frame"],
      "aes_lens_series": ["Canon CN-E Primes (Canon CN-E Primes)"],
      "aes_texture_render": ["哑光磨砂面 (Matte Surface)"],
      "aes_physical_grain": ["极致纯净 (Denoised/Pristine)"],
      "aes_base_tone": ["中性基准 (Neutral Standard)"],
      "aes_color_science": ["Canon Log (Canon Log)"],
      "aes_color_palette": ["宜家 (IKEA)"],
      "aes_render_real": ["大师级杰作 (Masterpiece)"]
    }
  },
  {
    id: "preset_redbull_ad",
    name: "红牛 (Red Bull)",
    nameEn: "Style of Red Bull",
    group: "D. 商业广告",
    def: "GoPro POV, fisheye distortion, high-speed movement, vibrant primary colors, and high contrast.",
    colors: ["#0000FF", "#FF0000", "#FFFF00", "#C0C0C0", "#000000", "#FFFFFF", "#808080"],
    params: {
      "aes_director_style": ["红牛极致 (Red Bull)"],
      "aes_camera_system": ["GoPro Hero (GoPro Hero)"],
      "aes_optical_format": ["Action Cam Sensor"],
      "aes_lens_series": ["Fisheye Lens (Fisheye Lens)"],
      "aes_texture_render": ["高对比硬核感 (Stark High-Contrast)"],
      "aes_physical_grain": ["数码传感器噪点 (Digital Sensor Noise)"],
      "aes_base_tone": ["生动广告 (Vivid Commercial)"],
      "aes_color_science": ["GoPro Flat (GoPro Flat)"],
      "aes_color_palette": ["红牛 (Red Bull)"],
      "aes_render_real": ["电影质感 (Cinematic)"]
    }
  },
  {
    id: "preset_chanel_ad",
    name: "香奈儿 (Chanel)",
    nameEn: "Style of Chanel",
    group: "D. 商业广告",
    def: "Classic black and white, pearls, tweed textures, elegant silhouettes, and soft diffusion lighting.",
    colors: ["#000000", "#1A1A1A", "#333333", "#4D4D4D", "#666666", "#808080", "#FFFFFF"],
    params: {
      "aes_director_style": ["香奈儿黑白 (Chanel)"],
      "aes_camera_system": ["Hasselblad (Hasselblad)"],
      "aes_optical_format": ["Medium Format"],
      "aes_lens_series": ["Zeiss Supreme Primes (Zeiss Supreme Primes)"],
      "aes_texture_render": ["丝滑织物感 (Velvety Fabric)"],
      "aes_physical_grain": ["细腻 35mm (Fine 35mm Grain)"],
      "aes_base_tone": ["艺术黑白 (Fine-Art Mono)"],
      "aes_color_science": ["Kodak Tri-X (Kodak Tri-X)"],
      "aes_color_palette": ["香奈儿 (Chanel)"],
      "aes_render_real": ["大师级杰作 (Masterpiece)"]
    }
  },
  {
    id: "preset_old_spice_ad",
    name: "Old Spice",
    nameEn: "Style of Old Spice",
    group: "D. 商业广告",
    def: "Seamless set transitions, absurd props, breaking the fourth wall, and direct confident eye contact.",
    colors: ["#FF0000", "#FFFFFF", "#0000FF", "#FFFF00", "#008000", "#800080", "#FFA500"],
    params: {
      "aes_director_style": ["Old Spice风格 (Absurdist)"],
      "aes_camera_system": ["ARRI ALEXA Mini (ARRI ALEXA Mini)"],
      "aes_optical_format": ["Super 35mm"],
      "aes_lens_series": ["Angénieux Zoom (Angénieux Zoom)"],
      "aes_texture_render": ["中性真实还原 (Neutral Authenticity)"],
      "aes_physical_grain": ["极致纯净 (Denoised/Pristine)"],
      "aes_base_tone": ["生动广告 (Vivid Commercial)"],
      "aes_color_science": ["Rec.709 (Rec.709)"],
      "aes_color_palette": ["Old Spice"],
      "aes_render_real": ["锐利聚焦 (Sharp Focus)"]
    }
  },
  {
    id: "preset_gucci_retro",
    name: "古驰复古 (Gucci Retro)",
    nameEn: "Style of Gucci",
    group: "D. 商业广告",
    def: "70s vintage aesthetic, eccentricity, clashing patterns, subway settings, and Wes Anderson-like quirkiness.",
    colors: ["#006400", "#FF0000", "#DAA520", "#D2691E", "#FFD700", "#800080", "#000080"],
    params: {
      "aes_director_style": ["古驰复古 (Gucci Retro)"],
      "aes_camera_system": ["Arriflex 16SR3 (16mm)"],
      "aes_optical_format": ["16mm"],
      "aes_lens_series": ["Canon K35 Vintage (Canon K35 Vintage)"],
      "aes_texture_render": ["有机电影感 (Organic Film)"],
      "aes_physical_grain": ["粗糙 16mm (Rough 16mm Grain)"],
      "aes_base_tone": ["复古褪色质感 (Faded Vintage)"],
      "aes_color_science": ["Kodak 5254 (Kodak 5254)"],
      "aes_color_palette": ["古驰复古 (Gucci Retro)"],
      "aes_render_real": ["电影质感 (Cinematic)"]
    }
  },
  {
    id: "preset_balenciaga_ad",
    name: "巴黎世家 (Balenciaga)",
    nameEn: "Style of Balenciaga",
    group: "D. 商业广告",
    def: "Dystopian runways, mud, snow storms, CCTV angles, post-apocalyptic chic, and alien-like models.",
    colors: ["#000000", "#696969", "#FFFFFF", "#0000FF", "#808080", "#2F4F4F", "#A9A9A9"],
    params: {
      "aes_director_style": ["巴黎世家 (Balenciaga)"],
      "aes_camera_system": ["CCTV Security Cam (CCTV Security Cam)"],
      "aes_optical_format": ["Full Frame"],
      "aes_lens_series": ["Zeiss Supreme Primes (Zeiss Supreme Primes)"],
      "aes_texture_render": ["冷峻工业锐度 (Clinical Sharpness)"],
      "aes_physical_grain": ["数码传感器噪点 (Digital Sensor Noise)"],
      "aes_base_tone": ["高对比硬核感 (Stark High-Contrast)"],
      "aes_color_science": ["Rec.709 (Rec.709)"],
      "aes_color_palette": ["巴黎世家 (Balenciaga)"],
      "aes_render_real": ["大师级杰作 (Masterpiece)"]
    }
  },
  {
    id: "preset_dior_sauvage",
    name: "迪奥旷野 (Dior Sauvage)",
    nameEn: "Style of Dior Sauvage",
    group: "D. 商业广告",
    def: "Desert landscapes at blue hour, wolves, guitars, rugged masculinity, fire, and turquoise skies.",
    colors: ["#191970", "#483D8B", "#FF4500", "#000000", "#8B4513", "#4682B4", "#A52A2A"],
    params: {
      "aes_director_style": ["迪奥柔光 (Dior)"],
      "aes_camera_system": ["ARRI ALEXA LF (ARRI ALEXA Mini LF)"],
      "aes_optical_format": ["Large Format"],
      "aes_lens_series": ["Panavision Primos (Panavision Primos)"],
      "aes_texture_render": ["有机电影感 (Organic Film)"],
      "aes_physical_grain": ["细腻 35mm (Fine 35mm Grain)"],
      "aes_base_tone": ["自然主义 (Naturalism)"],
      "aes_color_science": ["Kodak Vision3 (Kodak Vision3)"],
      "aes_color_palette": ["迪奥旷野 (Dior Sauvage)"],
      "aes_render_real": ["电影质感 (Cinematic)"]
    }
  },
  {
    id: "preset_heineken_ad",
    name: "喜力 (Heineken)",
    nameEn: "Style of Heineken",
    group: "D. 商业广告",
    def: "Green bottle glow, crowded parties, clever transitions, cinematic storytelling, and vibrant nightlife energy.",
    colors: ["#008000", "#006400", "#FFFF00", "#FFFFFF", "#000000", "#FF4500", "#1E90FF"],
    params: {
      "aes_director_style": ["盖·里奇 (Guy Ritchie)"],
      "aes_camera_system": ["ARRI ALEXA Mini (ARRI ALEXA Mini)"],
      "aes_optical_format": ["Super 35mm"],
      "aes_lens_series": ["Cooke S4/i (Cooke S4/i)"],
      "aes_texture_render": ["湿润高光泽 (Glossy / Wet Look)"],
      "aes_physical_grain": ["极致纯净 (Denoised/Pristine)"],
      "aes_base_tone": ["生动广告 (Vivid Commercial)"],
      "aes_color_science": ["ARRI LogC (ARRI LogC)"],
      "aes_color_palette": ["喜力 (Heineken)"],
      "aes_render_real": ["锐利聚焦 (Sharp Focus)"]
    }
  }
];
