import { LibraryCategoryDef } from '../../../types';
import { roleIdentityItem } from './_shared';

export const SUR9_GROUP_L: LibraryCategoryDef = {
  id: "role_labor_service",
  name: "12. 劳动与基层服务 (Labor & Service)",
  nameEn: "Labor & Service Roles",
  desc: "依靠体力、班次、工单、车辆、摊位、清洁和现场服务维持日常运转的身份。只给劳动接口。",
  descEn: "Roles that keep daily systems running through physical labor, shifts, work orders, vehicles, stalls, cleaning, and site service. Provides labor interfaces only.",
  items: [
    roleIdentityItem("sur9_factory_worker", "工厂工人", "Factory Worker", "在流水线、机台、打卡钟、料箱和质检单之间工作的工人。", "A worker moving between line, machines, time clock, material bins, and inspection sheets.", "工业叙事", "Industrial stories"),
    roleIdentityItem("sur9_farmer", "农民", "Farmer", "围绕土地、种子、农具、灌溉、收成和集市交易工作的人。", "A worker centered on land, seed, tools, irrigation, harvest, and market exchange.", "乡土叙事", "Rural stories"),
    roleIdentityItem("sur9_miner", "矿工", "Miner", "在矿井、轨车、支架、照明、爆破记录和班组名单中工作的人。", "A worker operating in shafts, carts, supports, lamps, blasting logs, and crew lists.", "矿区叙事", "Mining stories"),
    roleIdentityItem("sur9_waiter", "餐饮服务员", "Waiter", "在餐桌、菜单、托盘、后厨窗口和账单之间完成服务的人。", "A service worker moving between tables, menus, trays, kitchen windows, and bills.", "餐馆场景", "Restaurant scenes"),
    roleIdentityItem("sur9_truck_driver", "货车司机", "Truck Driver", "负责路线、油卡、货单、休息站、装卸点和交付签收的司机。", "A driver responsible for routes, fuel card, cargo papers, rest stops, loading points, and delivery signatures.", "公路片", "Road films"),
    roleIdentityItem("sur9_migrant_construction_worker", "外来建筑工", "Migrant Construction Worker", "在脚手架、工棚、包工头、工资单和安全帽之间工作的建筑工人。", "A construction worker tied to scaffolds, dorm sheds, crew bosses, wage sheets, and hard hats.", "城市建设", "Urban construction"),
    roleIdentityItem("sur9_street_vendor", "街头摊贩", "Street Vendor", "推车、煤气罐、零钱盒、摊位许可和流动客群构成其工作场。", "A vendor whose work space consists of cart, gas tank, cash box, stall permit, and passing customers.", "街市场景", "Street market scenes"),
    roleIdentityItem("sur9_janitor", "清洁工", "Janitor", "使用拖把、推车、钥匙串、垃圾袋和夜间排班维护公共空间的人。", "A cleaner maintaining public spaces with mop, cart, key ring, trash bags, and night shifts.", "城市日常", "Urban routine")
  ]
};
