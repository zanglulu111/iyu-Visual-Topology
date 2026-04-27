import { LibraryCategoryDef } from '../../../types';
import { objectAnchorItem } from './_shared';

export const SUR5_SURVIVAL_SANCTUARY: LibraryCategoryDef = {
  id: "sur5_survival_sanctuary",
  name: "5. 庇护入口 (Shelter Access)",
  nameEn: "Shelter Access",
  desc: "避难所钥匙、方舟船票、安全屋地址、滤芯、检疫通行牌、名单或房号等让人物进入保护空间的对象。",
  descEn: "Objects such as shelter keys, ark tickets, safehouse addresses, filters, quarantine passes, lists, or room numbers that let characters enter a protected space.",
  items: [
    objectAnchorItem("sur5_shelter_key", "避难所钥匙", "Shelter Key", "一把刻有编号的厚重钥匙，只对应地下避难所的一扇门。", "A heavy numbered key matching one door in an underground shelter.", "末日片", "Post-apocalyptic films"),
    objectAnchorItem("sur5_ark_ticket", "方舟船票", "Ark Ticket", "一张带有座舱编号和登船时间的方舟船票。", "An ark ticket printed with cabin number and boarding time.", "灾难片", "Disaster films"),
    objectAnchorItem("sur5_safehouse_address", "安全屋地址", "Safehouse Address", "一张只写着街区、楼层和敲门节奏的纸条。", "A note listing only district, floor, and knock rhythm.", "逃亡叙事", "Fugitive narratives"),
    objectAnchorItem("sur5_oxygen_filter", "氧气滤芯", "Oxygen Filter", "一枚仍可使用的氧气滤芯，剩余刻度只剩最后几格。", "A usable oxygen filter with only a few marks left on its gauge.", "生存惊悚", "Survival thriller"),
    objectAnchorItem("sur5_quarantine_pass", "检疫通行牌", "Quarantine Pass", "一块允许通过封锁线的检疫牌，边缘有消毒灼痕。", "A quarantine pass that permits crossing the cordon, with disinfectant burn marks along its edge.", "疫情叙事", "Outbreak narratives"),
    objectAnchorItem("sur5_mountain_gate_token", "山门令牌", "Mountain Gate Token", "一枚能让隐蔽山门机关打开的石质令牌。", "A stone token that opens the hidden mountain gate mechanism.", "武侠奇幻", "Wuxia fantasy"),
    objectAnchorItem("sur5_evacuation_manifest", "撤离名单", "Evacuation Manifest", "一份写有可登车、登机或入仓姓名的名单。", "A manifest listing names allowed onto the vehicle, aircraft, or chamber.", "战争片", "War films"),
    objectAnchorItem("sur5_room_number_tag", "房号牌", "Room Number Tag", "一块旧旅馆房号牌，背面写着备用钥匙位置。", "An old hotel room tag with the spare key location written on the back.", "黑色电影", "Noir films")
  ]
};
