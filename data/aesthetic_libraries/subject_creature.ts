
import { LibraryItemDef } from '../../types';
import { AES_SKIN_TEXTURE } from './subject_skin';

export * from './creature_parts';
export { AES_CREATURE_ELEMENT } from './subject_elements';
export { AES_CREATURE_ACTION } from './subject_creature_action';

export const AES_CREATURE_TEXTURE = AES_SKIN_TEXTURE;

// 1. 体型量级 (Size Class)
export const AES_CREATURE_SIZE: LibraryItemDef[] = [
  { id: "cs_subatomic", name: "亚原子 (Sub-atomic fabric of strings and atoms)", def: "" },
  { id: "cs_molecular", name: "分子级 (Molecular DNA sized building blocks)", def: "" },
  { id: "cs_micro", name: "微观 (Microscopic swarm visible only under lens)", def: "" },
  { id: "cs_insect", name: "昆虫级 (Insect-sized bee or beetle scale)", def: "" },
  { id: "cs_tiny", name: "微型 (Tiny cat-sized creature)", def: "" },
  { id: "cs_small", name: "小型 (Small child-sized or large dog scale)", def: "" },
  { id: "cs_human", name: "人型级 (Human scale approx 2 meters)", def: "" },
  { id: "cs_large", name: "中大型 (Large horse or bear sized)", def: "" },
  { id: "cs_elephant", name: "象级 (Elephantine massive biological weight)", def: "" },
  { id: "cs_gigantic", name: "巨型 (Gigantic house or small building size)", def: "" },
  { id: "cs_skyscraper", name: "摩天楼级 (Skyscraper-sized towering 100m+)", def: "" },
  { id: "cs_colossal", name: "泰坦级 (Colossal dominating the horizon)", def: "" },
  { id: "cs_mountain", name: "山岳级 (Mountain-sized creature as terrain)", def: "" },
  { id: "cs_continental", name: "大陆级 (Continental scale spanning regions)", def: "" },
  { id: "cs_planetary", name: "行星级 (Planetary world-eater scale)", def: "" },
  { id: "cs_galactic", name: "星系级 (Galactic stellar proportions cosmic nebula)", def: "" }
];

// 2. 生物纲目 (Biological Class)
export const AES_CREATURE_CLASS: LibraryItemDef[] = [
  // --- A. 昆虫与节肢 (Insectoids) ---
  { id: "cc_ins_01", name: "蚁群类 (Myrmecoid, highly organized, armored, collective mind)", group: "A. 昆虫节肢", def: "" },
  { id: "cc_ins_02", name: "蛛形类 (Arachnid, multi-legged, spinners, multiple eyes)", group: "A. 昆虫节肢", def: "" },
  { id: "cc_ins_03", name: "甲壳类 (Coleopteran, hard winged shells, heavy armor)", group: "A. 昆虫节肢", def: "" },
  { id: "cc_ins_04", name: "鳞翅类 (Lepidopteran, moths and butterflies, dusty wings)", group: "A. 昆虫节肢", def: "" },
  { id: "cc_ins_05", name: "膜翅类 (Hymenopteran, wasps and bees, social stingers)", group: "A. 昆虫节肢", def: "" },
  { id: "cc_ins_06", name: "多足类 (Centipedal, segmented, hundreds of legs, rhythmic move)", group: "A. 昆虫节肢", def: "" },
  { id: "cc_ins_07", name: "寄生类 (Parasitoid, living inside hosts, bio-vessels)", group: "A. 昆虫节肢", def: "" },
  { id: "cc_ins_08", name: "螯肢类 (Crustacean-like, claws, heavy wet shells)", group: "A. 昆虫节肢", def: "" },
  { id: "cc_ins_09", name: "直翅类 (Orthopteran, locusts and crickets, massive swarms)", group: "A. 昆虫节肢", def: "" },
  { id: "cc_ins_10", name: "螳螂类 (Mantoid, bladed forelimbs, triangular head)", group: "A. 昆虫节肢", def: "" },
  { id: "cc_ins_11", name: "幼虫态 (Larval, worm-like, soft body, ravenous)", group: "A. 昆虫节肢", def: "" },
  { id: "cc_ins_12", name: "全息虫群 (Holo-Swarm, digital pixels behaving like bees)", group: "A. 昆虫节肢", def: "" },

  // --- B. 爬行与鳞甲 (Reptilians) ---
  { id: "cc_rep_01", name: "巨龙类 (Draconic, classic western dragons, fire breath)", group: "B. 爬行鳞甲", def: "" },
  { id: "cc_rep_02", name: "蛟龙类 (Long/Oriental, serpentine body, control over rain and clouds)", group: "B. 爬行鳞甲", def: "" },
  { id: "cc_rep_03", name: "蛇人族 (Ophidian, humanoid snake hybrids, mesmerizing)", group: "B. 爬行鳞甲", def: "" },
  { id: "cc_rep_04", name: "恐龙裔 (Saurian, prehistoric giants, raptors)", group: "B. 爬行鳞甲", def: "" },
  { id: "cc_rep_05", name: "蜥蜴类 (Lacertilian, fast, regrowing tails, wall-crawlers)", group: "B. 爬行鳞甲", def: "" },
  { id: "cc_rep_06", name: "龟鳖类 (Chelonian, hard shell, ancient, slow time)", group: "B. 爬行鳞甲", def: "" },
  { id: "cc_rep_07", name: "鳄龙类 (Crocodylian, ambush predators, heavy jaws)", group: "B. 爬行鳞甲", def: "" },
  { id: "cc_rep_08", name: "双头蛇类 (Amphisbaena, dual heads, conflicting wills)", group: "B. 爬行鳞甲", def: "" },
  { id: "cc_rep_09", name: "九头蛇类 (Hydra, regenerating multiple necks)", group: "B. 爬行鳞甲", def: "" },
  { id: "cc_rep_10", name: "飞龙类 (Wyvern, two legs, winged arms, venomous tail)", group: "B. 爬行鳞甲", def: "" },
  { id: "cc_rep_11", name: "羽蛇类 (Quetzalcoatl, feathered serpent, sun deity)", group: "B. 爬行鳞甲", def: "" },
  { id: "cc_rep_12", name: "熔岩蜥 (Basalt-Lizard, body made of volcanic rock and lava)", group: "B. 爬行鳞甲", def: "" },

  // --- C. 哺乳与野兽 (Mammalians) ---
  { id: "cc_mam_01", name: "犬科类 (Canine, wolves, hounds, pack coordination)", group: "C. 哺乳野兽", def: "" },
  { id: "cc_mam_02", name: "猫科类 (Feline, tigers, panthers, silent grace)", group: "C. 哺乳野兽", def: "" },
  { id: "cc_mam_03", name: "熊科类 (Ursine, heavy muscle, fur, massive power)", group: "C. 哺乳野兽", def: "" },
  { id: "cc_mam_04", name: "灵长类 (Simian, high intelligence, tool use)", group: "C. 哺乳野兽", def: "" },
  { id: "cc_mam_05", name: "马科类 (Equine, speed, endurance, noble stature)", group: "C. 哺乳野兽", def: "" },
  { id: "cc_mam_06", name: "象类 (Pachyderm, thick skin, trunks, tusks)", group: "C. 哺乳野兽", def: "" },
  { id: "cc_mam_07", name: "牛科类 (Bovine, horns, heavy build, charge)", group: "C. 哺乳野兽", def: "" },
  { id: "cc_mam_08", name: "蝙蝠类 (Chiropteran, wings, sonar, hanging)", group: "C. 哺乳野兽", def: "" },
  { id: "cc_mam_09", name: "啮齿类 (Rodent, rats, swarms, sharp teeth)", group: "C. 哺乳野兽", def: "" },
  { id: "cc_mam_10", name: "鲸豚类 (Cetacean, whales, dolphins, aquatic intelligence)", group: "C. 哺乳野兽", def: "" },
  { id: "cc_mam_11", name: "有袋类 (Marsupial, pouch, unique movement)", group: "C. 哺乳野兽", def: "" },
  { id: "cc_mam_12", name: "半人马 (Centauride, hybrid of horse and human)", group: "C. 哺乳野兽", def: "" },
  { id: "cc_mam_13", name: "狮身人面 (Sphinx, lion body, human face and wings)", group: "C. 哺乳野兽", def: "" },
  { id: "cc_mam_14", name: "兽化人 (Lycanthropes, half-man half-beast, transforming)", group: "C. 哺乳野兽", def: "" },
  { id: "cc_mam_15", name: "格里芬 (Griffin, lion body, eagle head and wings)", group: "C. 哺乳野兽", def: "" },

  // --- D. 鸟纲与羽族 (Avians) ---
  { id: "cc_avi_01", name: "猛禽类 (Raptorial, eagles, falcons, sharp talons)", group: "D. 鸟纲羽族", def: "" },
  { id: "cc_avi_02", name: "枭类 (Strigiform, owls, turning heads, night vision)", group: "D. 鸟纲羽族", def: "" },
  { id: "cc_avi_03", name: "水禽类 (Waterfowl, swans, cranes, elegant necks)", group: "D. 鸟纲羽族", def: "" },
  { id: "cc_avi_04", name: "凤凰类 (Phoenix, flame feathers, rebirth cycle)", group: "D. 鸟纲羽族", def: "" },
  { id: "cc_avi_05", name: "哈比类 (Harpy, bird body, female human face)", group: "D. 鸟纲羽族", def: "" },
  { id: "cc_avi_06", name: "石像鬼 (Gargoyle, stone wings, living statues)", group: "D. 鸟纲羽族", def: "" },
  { id: "cc_avi_07", name: "炽天使 (Seraphic, multi-winged light beings)", group: "D. 鸟纲羽族", def: "" },
  { id: "cc_avi_08", name: "雷鸟 (Thunderbird, sparks in wings, storm summoner)", group: "D. 鸟纲羽族", def: "" },
  { id: "cc_avi_09", name: "鸦类 (Corvid, ravens, black feathers, intelligence)", group: "D. 鸟纲羽族", def: "" },
  { id: "cc_avi_10", name: "极乐鸟 (Paradisaeidae, exaggerated colorful plumage)", group: "D. 鸟纲羽族", def: "" },

  // --- E. 水生与两栖 (Aquatic & Amphibian) ---
  { id: "cc_aqu_01", name: "深海类 (Abyssal, bioluminescent, high pressure alien forms)", group: "E. 水生两栖", def: "" },
  { id: "cc_aqu_02", name: "头足类 (Cephalopod, squid, octopus, ink, tentacles)", group: "E. 水生两栖", def: "" },
  { id: "cc_aqu_03", name: "鲨鱼类 (Selachimorph, fins, rows of teeth, relentless)", group: "E. 水生两栖", def: "" },
  { id: "cc_aqu_04", name: "人鱼族 (Merfolk, human torso, fish tail)", group: "E. 水生两栖", def: "" },
  { id: "cc_aqu_05", name: "无脊椎 (Cnidarian, jellyfish, stinging, transparent)", group: "E. 水生两栖", def: "" },
  { id: "cc_aqu_06", name: "利维坦 (Leviathan, sea monsters of titanic scale)", group: "E. 水生两栖", def: "" },
  { id: "cc_aqu_07", name: "蛙类 (Batrachian, frogs and toads, jumping, sticky tongue)", group: "E. 水生两栖", def: "" },
  { id: "cc_aqu_08", name: "塞壬 (Siren-like, vocal lures, rocky coasts)", group: "E. 水生两栖", def: "" },
  { id: "cc_aqu_09", name: "甲壳海怪 (Crustacean-Giant, giant crabs, massive pincers)", group: "E. 水生两栖", def: "" },
  { id: "cc_aqu_10", name: "辚螈类 (Caudata, axolotls, cute but alien regeneration)", group: "E. 水生两栖", def: "" },
  { id: "cc_aqu_11", name: "深潜者 (Deep Ones, Lovecraftian fish-men)", group: "E. 水生两栖", def: "" },
  { id: "cc_aqu_12", name: "气泡类 (Bubble-form, living spheres of air in water)", group: "E. 水生两栖", def: "" },

  // --- F. 亡灵与恐怖 (Undead & Horror) ---
  { id: "cc_und_01", name: "丧尸类 (Ghoulish, flesh-eating, rotting, mindless)", group: "F. 亡灵恐怖", def: "" },
  { id: "cc_und_02", name: "骷髅类 (Skeletal, bone only, rattling, soulless)", group: "F. 亡灵恐怖", def: "" },
  { id: "cc_und_03", name: "幽灵类 (Wraith/Ghost, translucent, ethereal, floating)", group: "F. 亡灵恐怖", def: "" },
  { id: "cc_und_04", name: "吸血鬼 (Vampiric, pale, fangs, noble decay)", group: "F. 亡灵恐怖", def: "" },
  { id: "cc_und_05", name: "巫师尸 (Lich, undead mage, soul in phylactery)", group: "F. 亡灵恐怖", def: "" },
  { id: "cc_und_06", name: "缝合怪 (Frankenstein, made of multiple bodies, stitched)", group: "F. 灵异恐怖", def: "" },
  { id: "cc_und_07", name: "僵尸 (Jiangshi, stiff jumping, talisman, breath-seeking)", group: "F. 灵异恐怖", def: "" },
  { id: "cc_und_08", name: "影子人 (Shadow Person, flat black silhouette)", group: "F. 灵异恐怖", def: "" },
  { id: "cc_und_09", name: "木乃伊 (Mummified, bandaged, dry, curse-bearing)", group: "F. 灵异恐怖", def: "" },
  { id: "cc_und_10", name: "哀恸者 (Banshee, screaming female spirit)", group: "F. 灵异恐怖", def: "" },
  { id: "cc_und_11", name: "剥皮者 (Flayed, raw muscle and nerves exposed)", group: "F. 灵异恐怖", def: "" },
  { id: "cc_und_12", name: "空壳 (The Hollow, armor or clothes moving with nothing inside)", group: "F. 灵异恐怖", def: "" },

  // --- G. 魔性与异界 (Demonic & Planar) ---
  { id: "cc_dem_01", name: "小鬼类 (Imp, small, mischievous, fire-loving)", group: "G. 魔性异界", def: "" },
  { id: "cc_dem_02", name: "魅魔 (Succubus, beautiful, wings, tail, tempting)", group: "G. 魔性异界", def: "" },
  { id: "cc_dem_03", name: "地狱犬 (Hellhound, burning dog, sulfur breath)", group: "G. 魔性异界", def: "" },
  { id: "cc_dem_04", name: "炎魔 (Balrog, shadow and flame, ancient evil)", group: "G. 魔性异界", def: "" },
  { id: "cc_dem_05", name: "赤鬼 (Oni, horns, tiger skin, club, red skin)", group: "G. 魔性异界", def: "" },
  { id: "cc_dem_06", name: "阿修罗 (Asura, multi-armed, god of war)", group: "G. 魔性异界", def: "" },
  { id: "cc_dem_07", name: "虚空魔 (Voidspawn, purple energy, devouring everything)", group: "G. 魔性异界", def: "" },
  { id: "cc_dem_08", name: "契约魔 (Contractor, dapper, legalistic, silver tongue)", group: "G. 魔性异界", def: "" },
  { id: "cc_dem_09", name: "巴风特 (Baphomet, goat headed, dualistic symbols)", group: "G. 魔性异界", def: "" },
  { id: "cc_dem_10", name: "梦魇 (Nightmare, horse made of dark smoke)", group: "G. 魔性异界", def: "" },
  { id: "cc_dem_11", name: "寄生魔 (Infector, spreading corruption like a disease)", group: "G. 魔性异界", def: "" },
  { id: "cc_dem_12", name: "镜中魔 (Mirror Entity, lives in reflections)", group: "G. 魔性异界", def: "" },

  // --- H. 科技与人工 (Tech & Artificial) ---
  { id: "cc_tec_01", name: "仿生人 (Android, humanoid plastic or metal)", group: "H. 科技人工", def: "" },
  { id: "cc_tec_02", name: "赛博格 (Cyborg, merged flesh and machine)", group: "H. 科技人工", def: "" },
  { id: "cc_tec_03", name: "机甲兽 (Mecha-beast, animal form robot)", group: "H. 科技人工", def: "" },
  { id: "cc_tec_04", name: "纳米云 (Nanite Cloud, swarm of micro-bots)", group: "H. 科技人工", def: "" },
  { id: "cc_tec_05", name: "全息体 (Hologram, light projection, glitching)", group: "H. 科技人工", def: "" },
  { id: "cc_tec_06", name: "发条假人 (Automaton, brass gears, ticking, stiff)", group: "H. 科技人工", def: "" },
  { id: "cc_tec_07", name: "数字病毒 (Glitch Monster, tearing pixels, audio noise)", group: "H. 科技人工", def: "" },
  { id: "cc_tec_08", name: "克隆体 (Clone, identical biological units)", group: "H. 科技人工", def: "" },
  { id: "cc_tec_09", name: "活体建筑 (Bio-structure, flesh building or city)", group: "H. 科技人工", def: "" },
  { id: "cc_tec_10", name: "无人机群 (Drone Swarm, coordinated flying bots)", group: "H. 科技人工", def: "" },
  { id: "cc_tec_11", name: "能量体 (Energy Being, pure plasma or light)", group: "H. 科技人工", def: "" },
  { id: "cc_tec_12", name: "垃圾怪 (Junk Golem, made of e-waste and scrap)", group: "H. 科技人工", def: "" },
  { id: "cc_tec_13", name: "管线魔 (Cable Horror, mass of tangled wires)", group: "H. 科技人工", def: "" },
  { id: "cc_tec_14", name: "实验室体 (Experiment, malformed test subject)", group: "H. 科技人工", def: "" },
  { id: "cc_tec_15", name: "逻辑体 (Logical Core, geometric floating processor)", group: "H. 科技人工", def: "" },

  // --- I. 植物与真菌 (Plant & Fungal) ---
  { id: "cc_pla_01", name: "树人族 (Treant, old moving oak or willow)", group: "I. 植物真菌", def: "" },
  { id: "cc_pla_02", name: "真菌人 (Myceloid, mushroom head, spore emitters)", group: "I. 植物真菌", def: "" },
  { id: "cc_pla_03", name: "荆棘类 (Thorn-kin, covered in sharp vines)", group: "I. 植物真菌", def: "" },
  { id: "cc_pla_04", name: "食人花 (Carnivorous, giant petals with teeth)", group: "I. 植物真菌", def: "" },
  { id: "cc_pla_05", name: "花仙子 (Dryad, beautiful plant-human hybrid)", group: "I. 植物真菌", def: "" },
  { id: "cc_pla_06", name: "地衣体 (Lichen-form, flat, scaling, immortal)", group: "I. 植物真菌", def: "" },
  { id: "cc_pla_07", name: "根须魔 (Root Shambler, tangled roots from ground)", group: "I. 植物真菌", def: "" },
  { id: "cc_pla_08", name: "海藻怪 (Kelp Horror, wet dragging sea plants)", group: "I. 植物真菌", def: "" },
  { id: "cc_pla_09", name: "仙人掌人 (Xerophyte, desert plant warrior)", group: "I. 植物真菌", def: "" },
  { id: "cc_pla_10", name: "孢子母体 (Spore Mother, giant fungal heart)", group: "I. 植物真菌", def: "" },

  // --- J. 不可名状与抽象 (Abstract & Cosmic) ---
  { id: "cc_abs_01", name: "克苏鲁眷族 (Starspawn, tentacles, non-euclidean flesh)", group: "J. 抽象宇宙", def: "" },
  { id: "cc_abs_02", name: "几何体使徒 (Geometric, floating cubes, spheres, or rings)", group: "J. 抽象宇宙", def: "" },
  { id: "cc_abs_03", name: "星云生物 (Nebula-being, formed from gas and stars)", group: "J. 抽象宇宙", def: "" },
  { id: "cc_abs_04", name: "虚空之影 (Void Entity, lack of existence, absorbing light)", group: "J. 抽象宇宙", def: "" },
  { id: "cc_abs_05", name: "语言生命 (Word-form, made of floating text or symbols)", group: "J. 抽象宇宙", def: "" },
  { id: "cc_abs_06", name: "分形兽 (Fractal Beast, infinite self-similar geometry)", group: "J. 抽象宇宙", def: "" },
  { id: "cc_abs_07", name: "时空裂痕 (Rift Dweller, existing between dimensions)", group: "J. 抽象宇宙", def: "" },
  { id: "cc_abs_08", name: "色散怪物 (Chromatic, color separation shifting)", group: "J. 抽象宇宙", def: "" },
  { id: "cc_abs_09", name: "盲视先知 (Blind Seer, white eyes, no body, just face)", group: "J. 抽象宇宙", def: "" },
  { id: "cc_abs_10", name: "那位大者 (The Great One, indescribable absolute presence)", group: "J. 抽象宇宙", def: "" }
];

// 6. 生物心情 (Creature Mood)
export const AES_CREATURE_MOOD: LibraryItemDef[] = [
  // --- Group 1: 捕食与攻击 (Predatory & Aggressive) ---
  { id: "cm_hunt_stalking", name: "潜行狩猎 (Stalking, low to ground, silent fixated gaze)", group: "1. 捕食攻击", def: "" },
  { id: "cm_hunt_frenzy", name: "狂乱杀戮 (Feeding Frenzy, violent thrashing, tearing bloodlust)", group: "1. 捕食攻击", def: "" },
  { id: "cm_hunt_ambush", name: "伏击准备 (Ambushing, hidden tense muscles waiting)", group: "1. 捕食攻击", def: "" },
  { id: "cm_hunt_dominating", name: "威压统治 (Dominating, standing tall roaring chest out)", group: "1. 捕食攻击", def: "" },
  { id: "cm_hunt_territorial", name: "领地巡视 (Territorial, pacing marking alert)", group: "1. 捕食攻击", def: "" },
  { id: "cm_hunt_sadistic", name: "残忍戏弄 (Sadistic, toying with prey slow movement)", group: "1. 捕食攻击", def: "" },
  { id: "cm_hunt_bloodlust", name: "嗜血渴望 (Bloodlust, drooling dilated pupils shaking)", group: "1. 捕食攻击", def: "" },
  { id: "cm_hunt_calculating", name: "冷酷计算 (Calculating, still scanning intelligent eyes)", group: "1. 捕食攻击", def: "" },

  // --- Group 2: 恐惧与防御 (Fear & Defensive) ---
  { id: "cm_def_cornered", name: "困兽之斗 (Cornered, back against wall hissing desperate)", group: "2. 恐惧防御", def: "" },
  { id: "cm_def_camouflaged", name: "拟态伪装 (Camouflaged, blending into background perfectly)", group: "2. 恐惧防御", def: "" },
  { id: "cm_def_startled", name: "受惊退缩 (Startled, jumping back wide eyes freezing)", group: "2. 恐惧防御", def: "" },
  { id: "cm_def_submissive", name: "臣服示弱 (Submissive, belly up head low whining)", group: "2. 恐惧防御", def: "" },
  { id: "cm_def_fleeing", name: "极速逃亡 (Fleeing, running blindly panic)", group: "2. 恐惧防御", def: "" },
  { id: "cm_def_playing_dead", name: "假死 (Playing Dead, rigid tongue out no breath)", group: "2. 恐惧防御", def: "" },
  { id: "cm_def_bristling", name: "炸毛威慑 (Bristling, fur spikes standing up looking big)", group: "2. 恐惧防御", def: "" },
  { id: "cm_def_wary", name: "极度警惕 (Wary, ears turning sniffing air tense)", group: "2. 恐惧防御", def: "" },

  // --- Group 3: 生理与状态 (Physiological & State) ---
  { id: "cm_phy_dormant", name: "远古休眠 (Dormant, stone-like stillness dust covered)", group: "3. 生理状态", def: "" },
  { id: "cm_phy_molting", name: "蜕皮变态 (Molting, shedding skin vulnerable wet)", group: "3. 生理状态", def: "" },
  { id: "cm_phy_starving", name: "极度饥饿 (Starving, ribs showing weak desperate)", group: "3. 生理状态", def: "" },
  { id: "cm_phy_satiated", name: "饱食昏睡 (Satiated, bloated heavy breathing slow)", group: "3. 生理状态", def: "" },
  { id: "cm_phy_birthing", name: "繁演产卵 (Birthing, laying eggs mucus protective)", group: "3. 生理状态", def: "" },
  { id: "cm_phy_dying", name: "垂死挣扎 (Dying, weak breaths glazing eyes)", group: "3. 生理状态", def: "" },
  { id: "cm_phy_regenerating", name: "再生修复 (Regenerating, flesh knitting together steam)", group: "3. 生理状态", def: "" },
  { id: "cm_phy_parasitized", name: "被寄生 (Parasitized, moving lumps under skin twitching)", group: "3. 生理状态", def: "" },

  // --- Group 4: 社交与群体 (Social & Hive) ---
  { id: "cm_soc_mating", name: "求偶展示 (Mating Display, colorful feathers lights dancing)", group: "4. 社交群体", def: "" },
  { id: "cm_soc_hive", name: "蜂巢意识 (Hive Mind, perfectly synchronized movement)", group: "4. 社交群体", def: "" },
  { id: "cm_soc_nurturing", name: "育幼护犊 (Nurturing, gentle with young fierce to others)", group: "4. 社交群体", def: "" },
  { id: "cm_soc_swarming", name: "虫群聚集 (Swarming, chaotic mass movement buzzing)", group: "4. 社交群体", def: "" },
  { id: "cm_soc_mourning", name: "哀悼同伴 (Mourning, silent gathering around corpse)", group: "4. 社交群体", def: "" },
  { id: "cm_soc_bonding", name: "梳理互动 (Bonding, grooming each other purring)", group: "4. 社交群体", def: "" },
  { id: "cm_soc_mimicking", name: "拟态模仿 (Mimicking, copying human or object shape)", group: "4. 社交群体", def: "" },
  { id: "cm_soc_commanding", name: "指挥号令 (Commanding, roaring orders pointing)", group: "4. 社交群体", def: "" },

  // --- Group 5: 异质与未知 (Eldritch & Alien) ---
  { id: "cm_ali_glitching", name: "现实故障 (Glitching, phasing in and out of reality)", group: "5. 异质未知", def: "" },
  { id: "cm_ali_void_stare", name: "虚空凝视 (Void Stare, staring at nothing motionless)", group: "5. 异质未知", def: "" },
  { id: "cm_ali_ascending", name: "飞升转化 (Ascending, floating up dissolving into light)", group: "5. 异质未知", def: "" },
  { id: "cm_ali_dissolving", name: "解体消散 (Dissolving, turning into smoke or liquid)", group: "5. 异质未知", def: "" },
  { id: "cm_ali_looping", name: "时间循环 (Looping, repeating same motion endlessly)", group: "5. 异质未知", def: "" },
  { id: "cm_ali_non_euclidean", name: "几何扭曲 (Non-Euclidean, twisting into impossible shapes)", group: "5. 异质未知", def: "" },
  { id: "cm_ali_invisible", name: "隐形潜伏 (Invisible, only distortion visible)", group: "5. 异质未知", def: "" },
  { id: "cm_ali_whispering", name: "精神低语 (Whispering, mouth closed but sound emanating)", group: "5. 异质未知", def: "" },

  // --- Group 6: 元素与魔法 (Elemental & Magic) ---
  { id: "cm_mag_burning", name: "怒火中烧 (Burning, body engulfed in flames)", group: "6. 元素魔法", def: "" },
  { id: "cm_mag_frozen", name: "极寒冰封 (Frozen, covered in frost cold air)", group: "6. 元素魔法", def: "" },
  { id: "cm_mag_petrified", name: "石化静止 (Petrified, turning to stone texture)", group: "6. 元素魔法", def: "" },
  { id: "cm_mag_electrified", name: "雷霆充能 (Electrified, sparks flying hair standing)", group: "6. 元素魔法", def: "" },
  { id: "cm_mag_toxic", name: "剧毒辐射 (Toxic, leaking green gas liquid)", group: "6. 元素魔法", def: "" },
  { id: "cm_mag_ethereal", name: "灵体化 (Ethereal, transparent glowing outline)", group: "6. 元素魔法", def: "" },
  { id: "cm_mag_cursed", name: "被诅咒 (Cursed, black aura writhing shadows)", group: "6. 元素魔法", def: "" },
  { id: "cm_mag_divine", name: "神圣降临 (Divine, golden halo blinding light)", group: "6. 元素魔法", def: "" }
];
