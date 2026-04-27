import { LibraryCategoryDef } from '../../../types';
import { objectAnchorItem } from './_shared';

export const SUR5_WEALTH_TREASURES: LibraryCategoryDef = {
  id: "sur5_wealth_treasures",
  name: "2. 资源容器 (Resource Containers)",
  nameEn: "Resource Containers",
  desc: "金币、冷钱包、宝库坐标、资源机器、稀有矿锭、地契或水源核心等可兑换、储藏、转移或开启资源的对象。",
  descEn: "Objects such as gold, cold wallets, vault coordinates, resource machines, rare ingots, deeds, or water cores that can exchange, store, transfer, or unlock resources.",
  items: [
    objectAnchorItem("sur5_sunken_gold", "沉船金柜", "Sunken Gold Chest", "一只从沉船中打捞出的密封金柜，表面仍挂着盐壳。", "A sealed gold chest raised from a wreck, still crusted with salt.", "寻宝片", "Treasure films"),
    objectAnchorItem("sur5_bearer_card", "不记名黑卡", "Bearer Black Card", "一张不绑定身份、只认实体持有者的资产黑卡。", "A bearer asset card tied to no identity, recognizing only the physical holder.", "金融惊悚", "Financial thriller"),
    objectAnchorItem("sur5_cold_wallet", "离线冷钱包", "Offline Cold Wallet", "刻有多重助记词的金属冷钱包片。", "A metal cold-wallet plate engraved with multiple seed phrases.", "赛博犯罪", "Cybercrime"),
    objectAnchorItem("sur5_vault_coordinates", "宝库坐标纸", "Vault Coordinate Slip", "一张写有宝库坐标、潮汐时间和入口角度的折皱纸条。", "A creased slip listing vault coordinates, tide time, and entry angle.", "劫盗片", "Heist films"),
    objectAnchorItem("sur5_resource_engine", "资源冷凝机", "Resource Condenser", "一台能从空气、沙地或海水中冷凝稀缺资源的旧机器。", "An old machine that condenses scarce resources from air, sand, or seawater.", "末日片", "Post-apocalyptic films"),
    objectAnchorItem("sur5_rare_ingot", "异星矿锭", "Alien Ingot", "一块小体积高密度矿锭，切面在暗处发出蓝光。", "A small, dense ingot whose cut face glows blue in the dark.", "科幻冒险", "Sci-fi adventure"),
    objectAnchorItem("sur5_strategic_deed", "战略地契", "Strategic Deed", "一份指向荒地、矿口、码头或管线节点的旧地契。", "An old deed naming a wasteland, mine mouth, dock, or pipeline node.", "西部片", "Western"),
    objectAnchorItem("sur5_water_core", "净水核心", "Water Core", "封在玻璃缸中的净水核心，外壳附着温度和杂质刻度。", "A water-purifying core sealed in a glass tank, marked with temperature and impurity gauges.", "生存叙事", "Survival narratives")
  ]
};
