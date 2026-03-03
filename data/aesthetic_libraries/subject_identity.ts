
import { LibraryItemDef } from '../../types';

// === 1. 现实血统 (Ethnicity - Real World) ===
// 核心原则：仅标题提示词，无DEF补充
export const AES_ETHNICITY: LibraryItemDef[] = [
  // --- 亚洲 (Asian) ---
  { id: "eth_chinese", name: "中国 (Chinese)", group: "亚洲", def: "" },
  { id: "eth_japanese", name: "日本 (Japanese)", group: "亚洲", def: "" },
  { id: "eth_korean", name: "韩国 (Korean)", group: "亚洲", def: "" },
  { id: "eth_thai", name: "泰国 (Thai)", group: "亚洲", def: "" },
  { id: "eth_vietnamese", name: "越南 (Vietnamese)", group: "亚洲", def: "" },
  { id: "eth_indian", name: "印度 (Indian)", group: "亚洲", def: "" },
  { id: "eth_mongolian", name: "蒙古 (Mongolian)", group: "亚洲", def: "" },
  { id: "eth_tibetan", name: "藏族 (Tibetan)", group: "亚洲", def: "" },
  { id: "eth_uyghur", name: "维吾尔 (Uyghur)", group: "亚洲", def: "" },

  // --- 欧美 (Western) ---
  { id: "eth_american", name: "美国 (American)", group: "欧美", def: "" },
  { id: "eth_british", name: "英国 (British)", group: "欧美", def: "" },
  { id: "eth_french", name: "法国 (French)", group: "欧美", def: "" },
  { id: "eth_german", name: "德国 (German)", group: "欧美", def: "" },
  { id: "eth_italian", name: "意大利 (Italian)", group: "欧美", def: "" },
  { id: "eth_russian", name: "俄罗斯 (Russian)", group: "欧美", def: "" },
  { id: "eth_nordic", name: "北欧 (Nordic)", group: "欧美", def: "" },
  { id: "eth_irish", name: "爱尔兰 (Irish)", group: "欧美", def: "" },
  { id: "eth_slavic", name: "斯拉夫 (Slavic)", group: "欧美", def: "" },

  // --- 其他 (Global) ---
  { id: "eth_latino", name: "拉丁裔 (Latino)", group: "其他", def: "" },
  { id: "eth_mexican", name: "墨西哥 (Mexican)", group: "其他", def: "" },
  { id: "eth_brazilian", name: "巴西 (Brazilian)", group: "其他", def: "" },
  { id: "eth_african", name: "非洲裔 (African)", group: "其他", def: "" },
  { id: "eth_egyptian", name: "埃及 (Egyptian)", group: "其他", def: "" },
  { id: "eth_arab", name: "阿拉伯 (Arab)", group: "其他", def: "" },
  { id: "eth_persian", name: "波斯 (Persian)", group: "其他", def: "" },
  { id: "eth_jewish", name: "犹太 (Jewish)", group: "其他", def: "" },
  { id: "eth_native_american", name: "印第安 (Native American)", group: "其他", def: "" }
];

// === 2. 幻想种族 (Species - Fantasy & Sci-Fi) ===
// 核心原则：保留精准DEF
export const AES_SPECIES: LibraryItemDef[] = [
  // --- 神话与超自然 (Mythic) ---
  { id: "sp_angel", name: "天使 (Angel)", group: "神话超自然", def: "Halo, feathered wings, divine glow." },
  { id: "sp_fallen_angel", name: "堕天使 (Fallen Angel)", group: "神话超自然", def: "Black wings, scarred skin, dark aura." },
  { id: "sp_demon", name: "恶魔 (Demon)", group: "神话超自然", def: "Horns, red skin, tail, bat wings." },
  { id: "sp_succubus", name: "魅魔 (Succubus)", group: "神话超自然", def: "Seductive, small horns, heart tail." },
  { id: "sp_vampire", name: "吸血鬼 (Vampire)", group: "神话超自然", def: "Pale skin, fangs, red eyes, elegance." },
  { id: "sp_elf", name: "精灵 (Elf)", group: "神话超自然", def: "Pointed ears, slender, ageless features." },
  { id: "sp_dark_elf", name: "黑暗精灵 (Dark Elf)", group: "神话超自然", def: "Obsidian skin, white hair, glowing eyes." },
  { id: "sp_orc", name: "兽人 (Orc)", group: "神话超自然", def: "Green skin, tusks, muscular build." },
  { id: "sp_mermaid", name: "人鱼 (Mermaid)", group: "神话超自然", def: "Fish tail, gills, wet skin." },
  { id: "sp_siren", name: "塞壬 (Siren)", group: "神话超自然", def: "Bird-like features, wings, claws." },
  { id: "sp_faun", name: "潘神/萨梯 (Faun)", group: "神话超自然", def: "Goat legs, horns, fur." },
  { id: "sp_fairy", name: "妖精 (Fairy)", group: "神话超自然", def: "Tiny size, insect wings, glitter." },
  { id: "sp_dragon_kin", name: "龙裔 (Dragonkin)", group: "神话超自然", def: "Scales, reptile eyes, horns." },
  { id: "sp_werewolf", name: "狼人 (Werewolf)", group: "神话超自然", def: "Hybrid wolf-human, fur, claws." },
  { id: "sp_kitsune", name: "狐仙 (Kitsune)", group: "神话超自然", def: "Fox ears, multiple tails." },
  { id: "sp_oni", name: "鬼 (Oni)", group: "神话超自然", def: "Japanese ogre, horns, tiger skin." },
  { id: "sp_medusa", name: "美杜莎 (Gorgon)", group: "神话超自然", def: "Snake hair, stone gaze." },
  
  // --- 科幻与异质 (Sci-Fi & Alien) ---
  { id: "sp_cyborg", name: "赛博格 (Cyborg)", group: "科幻异质", def: "Mechanical limbs, metal skin patches." },
  { id: "sp_android", name: "仿生人 (Android)", group: "科幻异质", def: "Synthetic skin, panel lines, LED eyes." },
  { id: "sp_robot", name: "机器人 (Robot)", group: "科幻异质", def: "Full metal body, mechanical joints." },
  { id: "sp_alien_grey", name: "小灰人 (Grey Alien)", group: "科幻异质", def: "Large black eyes, small mouth, grey skin." },
  { id: "sp_reptilian", name: "蜥蜴人 (Reptilian)", group: "科幻异质", def: "Scales, vertical pupils, cold blooded." },
  { id: "sp_mutant", name: "变种人 (Mutant)", group: "科幻异质", def: "Deformed features, extra limbs." },
  { id: "sp_hologram", name: "全息体 (Hologram)", group: "科幻异质", def: "Translucent, flickering, blue light." },
  { id: "sp_glitch_entity", name: "故障体 (Glitch Entity)", group: "科幻异质", def: "Pixelated distortion, RGB shift." },
  { id: "sp_slime_person", name: "粘液人 (Slime)", group: "科幻异质", def: "Translucent liquid body, core visible." },
  { id: "sp_shadow_being", name: "影人 (Shadow Being)", group: "科幻异质", def: "Pure black silhouette, smoke edges." },
  { id: "sp_crystal_being", name: "晶体人 (Crystal)", group: "科幻异质", def: "Made of sharp faceted gems." },
  { id: "sp_plant_sim", name: "树人/植株 (Plant Sim)", group: "科幻异质", def: "Bark skin, leaves for hair." },
  { id: "sp_zombie", name: "丧尸 (Zombie)", group: "科幻异质", def: "Rotting flesh, pale, wounds." }
];
