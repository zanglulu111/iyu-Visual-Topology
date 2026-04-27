import { LibraryCategoryDef } from '../../../types';
import { objectAnchorItem } from './_shared';

export const SUR5_NATURE_UTOPIA: LibraryCategoryDef = {
  id: "sur5_nature_utopia",
  name: "8. 生境源点 (Habitat Sources)",
  nameEn: "Habitat Sources",
  desc: "种子库、泉眼图、生态核心、净水瓶、能源蓝图、活根、气候密钥或孢囊等与生境维持或恢复有关的对象。",
  descEn: "Objects such as seed banks, spring maps, ecology cores, clean-water vials, energy blueprints, living roots, climate keys, or spore pods tied to habitat maintenance or renewal.",
  items: [
    objectAnchorItem("sur5_seed_bank", "种子匣", "Seed Case", "一只低温种子匣，标签写着作物名称和批次。", "A refrigerated seed case labeled with crop names and batch numbers.", "生态科幻", "Eco sci-fi"),
    objectAnchorItem("sur5_spring_map", "泉眼图", "Spring Map", "一张标出地下泉眼的地形图，折痕处有水渍。", "A terrain map marking underground springs, water-stained along the folds.", "荒野冒险", "Wilderness adventure"),
    objectAnchorItem("sur5_ecology_core", "生态核心", "Ecology Core", "一枚透明球形核心，内部悬浮着土壤、水和微型根系。", "A transparent spherical core holding suspended soil, water, and tiny roots.", "生态奇幻", "Eco fantasy"),
    objectAnchorItem("sur5_clean_water_vial", "净水瓶", "Clean-Water Vial", "一瓶密封净水，瓶身贴着矿物检测条。", "A sealed vial of clean water with mineral test strips on the side.", "生存叙事", "Survival narratives"),
    objectAnchorItem("sur5_energy_blueprint", "能源蓝图", "Energy Blueprint", "一卷画着低污染能源结构的蓝图。", "A blueprint roll showing a low-pollution energy structure.", "工程叙事", "Engineering narratives"),
    objectAnchorItem("sur5_living_root", "活根", "Living Root", "一截仍在缓慢抽动的活根，被湿布包着。", "A segment of living root still moving faintly, wrapped in wet cloth.", "森林奇幻", "Forest fantasy"),
    objectAnchorItem("sur5_climate_key", "气候密钥", "Climate Key", "一枚可插入气候塔主控槽的金属密钥。", "A metal key made for the master slot of a climate tower.", "气候科幻", "Climate sci-fi"),
    objectAnchorItem("sur5_spore_pod", "孢囊", "Spore Pod", "一个半透明孢囊，内部像雾一样缓慢翻涌。", "A translucent spore pod with mist-like motion inside.", "异星生态", "Alien ecology")
  ]
};
