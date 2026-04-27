import { LibraryCategoryDef } from '../../../types';
import { spaceContainerItem } from './_shared';

export const SUR6_GROUP_I: LibraryCategoryDef = {
  id: "loc_industrial_labor",
  name: "09. 工业与劳动空间 (Industrial & Labor)",
  nameEn: "Industrial & Labor Spaces",
  desc: "铸造车间、矿井、流水线、仓库、锅炉房、装卸区、废料场和电站等生产、储存、维护和搬运可发生的空间。只给劳动地点。",
  descEn: "Foundries, mine shafts, lines, warehouses, boiler rooms, loading bays, scrap yards, and power plants for production, storage, maintenance, or hauling. Provides labor locations only.",
  items: [
    spaceContainerItem("sur6_foundry", "铸造车间", "Foundry Floor", "熔炉、吊钩、砂模、铁轨和防护栏构成的高温生产区。", "A hot production area of furnace, hooks, sand molds, rails, and guard rails.", "工业片", "Industrial films"),
    spaceContainerItem("sur6_mine_shaft", "矿井巷道", "Mine Shaft", "低矮巷道内有木撑、轨道、矿车、滴水点和头灯光束。", "A low tunnel with timber supports, rails, carts, dripping points, and headlamp beams.", "矿区场景", "Mining scenes"),
    spaceContainerItem("sur6_assembly_line", "装配流水线", "Assembly Line", "传送带、工位灯、零件箱和节拍提示屏连接成连续作业线。", "A continuous work line linked by conveyor, station lamps, parts bins, and timing display.", "工厂场景", "Factory scenes"),
    spaceContainerItem("sur6_warehouse", "大型仓库", "Warehouse", "高货架、托盘、叉车通道、卷帘门和分区编号组成的储存空间。", "A storage space of high racks, pallets, forklift lanes, roller doors, and zone numbers.", "仓储场景", "Warehouse scenes"),
    spaceContainerItem("sur6_boiler_room", "锅炉房", "Boiler Room", "管道、阀门、压力表、金属平台和蒸汽口围成的设备房。", "A plant room of pipes, valves, gauges, metal platforms, and steam vents.", "设备层", "Utility floors"),
    spaceContainerItem("sur6_loading_bay", "装卸月台", "Loading Bay", "卡车倒入口、升降平台、货箱和黄色安全线构成的装卸位置。", "A loading point of truck dock, lift platform, crates, and yellow safety lines.", "物流场景", "Logistics scenes"),
    spaceContainerItem("sur6_scrapyard", "废料场", "Scrapyard", "金属堆、压块机、吊磁盘、油污地面和临时办公室组成的户外场地。", "An outdoor yard of metal piles, compactor, lifting magnet, oily ground, and temporary office.", "废料场景", "Scrap yard scenes"),
    spaceContainerItem("sur6_power_plant", "电站机房", "Power Plant Hall", "涡轮机、冷却管、检修桥、警示灯和控制台占据的大型机房。", "A large machine hall occupied by turbines, cooling pipes, service bridges, warning lights, and consoles.", "能源设施", "Energy facilities")
  ]
};
