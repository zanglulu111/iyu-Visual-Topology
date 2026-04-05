import { LibraryCategoryDef } from '../../../types';

export const SUR9_GROUP_L: LibraryCategoryDef = {
  id: "orig_labor",
  name: "4. 劳工与底层 (Working Class & Poor)",
  desc: "出卖体力，处于生存线边缘。粗砺的生命力。",
  items: [
    { id: "factory_hand", name: "蓝领工人 (Blue Collar)", def: "流水线上的操作工，依靠体力。", core: "张力：身体的磨损。阶级兄弟的情义。 | 视觉：工装、安全帽、油污、机器轰鸣、午餐盒。" },
    { id: "farmer_peasant", name: "农民 (Peasant)", def: "依附于土地，看天吃饭。", core: "张力：质朴 vs 愚昧。对土地的深情与被束缚。 | 视觉：泥土、老茧、农具、汗水、丰收/饥荒。" },
    { id: "miner_deep", name: "深井矿工 (Miner)", def: "在黑暗和危险中工作。", core: "张力：随时可能塌方的恐惧。地下的团结。 | 视觉：头灯、煤黑、升降机、金丝雀、肺病。" },
    { id: "service_staff", name: "服务员 (Service Staff)", def: "餐厅、酒店的底层服务人员。", core: "张力：被当作隐形人。忍气吞声。 | 视觉：制服、托盘、后厨、小费、疲惫的脚。" },
    { id: "driver", name: "司机/运输工 (Driver)", def: "卡车或出租车司机，永远在路上。", core: "张力：流动的家。孤独的旅程。 | 视觉：方向盘、公路、香烟、对讲机、汽车旅馆。" },
    { id: "migrant_worker", name: "外来务工/民工 (Migrant Worker)", def: "离开家乡进城打工，没有户口。", core: "张力：城市的建设者却不属于城市。漂泊感。 | 视觉：编织袋、工地、大通铺、春运火车、泡面。" },
    { id: "street_vendor", name: "街头小贩 (Street Vendor)", def: "摆摊维持生计，躲避城管。", core: "张力：底层的生存智慧。烟火气。 | 视觉：推车、吆喝、城管、零钱、夜市灯光。" },
    { id: "cleaner_janitor", name: "清洁工 (Janitor)", def: "清理城市的垃圾。", core: "张力：接触最脏的东西，却有最干净的心（或相反）。 | 视觉：扫帚、橙色马甲、垃圾车、凌晨的街道。" },
    { id: "sex_worker_street", name: "街头性工作者 (Streetwalker)", def: "出卖身体换取生存。", core: "张力：尊严的剥离。在危险中求生。 | 视觉：浓妆、高跟鞋、街角阴影、廉价旅馆、药。" },
    { id: "soldier_grunt", name: "大兵/炮灰 (Grunt)", def: "军队的最底层，执行命令。", core: "张力：成为消耗品。战友如兄弟。 | 视觉：狗牌、泥泞战壕、步枪、家书、恐惧。" },
    { id: "fisher_folk", name: "渔民 (Fisher Folk)", def: "靠海吃海，漂泊不定。", core: "张力：大海的无情。与风浪搏斗的宿命。 | 视觉：渔网、船舱、鱼腥味、风暴、妈祖像。" },
    { id: "lumberjack", name: "伐木工 (Lumberjack)", def: "在深山老林工作，与世隔绝。", core: "张力：原始的力量。孤独与危险。 | 视觉：电锯、巨木、木屑、法兰绒衬衫、森林。" },
    { id: "docker", name: "码头工人 (Docker)", def: "在港口搬运货物，工会力量。", core: "张力：繁重的体力劳动。连接世界的节点。 | 视觉：集装箱、起重机、汗水、工号牌、海风。" },
    { id: "maid_servant", name: "家仆/佣人 (Servant)", def: "依附于主人家，没有私人空间。", core: "张力：窥探主人的秘密。地位的卑微。 | 视觉：围裙、后楼梯、铃铛、角落、主人的背影。" },
    { id: "apprentice", name: "学徒 (Apprentice)", def: "跟着师傅学手艺，地位低下。", core: "张力：成长的渴望 vs 师傅的压制。传承。 | 视觉：工具、杂活、挨骂、偷师、出师酒。" }
  ]
};
