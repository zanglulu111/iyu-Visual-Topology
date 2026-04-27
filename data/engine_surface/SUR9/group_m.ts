import { LibraryCategoryDef } from '../../../types';
import { roleIdentityItem } from './_shared';

export const SUR9_GROUP_M: LibraryCategoryDef = {
  id: "role_marginal_unregistered",
  name: "13. 边缘与无固定身份 (Marginal & Unregistered)",
  nameEn: "Marginal & Unregistered Roles",
  desc: "缺少稳定住址、证件、雇主、社群承认或常规登记的身份。只给社会边缘位置。",
  descEn: "Roles lacking stable address, papers, employer, group recognition, or routine registration. Provides marginal social positions only.",
  items: [
    roleIdentityItem("sur9_unhoused_person", "无家者", "Unhoused Person", "依靠避难所、公共座椅、临时存物点和施食队维持日常的人。", "A person whose routine depends on shelters, public benches, temporary storage, and meal lines.", "城市边缘", "Urban margins"),
    roleIdentityItem("sur9_street_orphan", "街头孤儿", "Street Orphan", "在车站、天桥、市场和临时窝点之间活动的未成年流浪者。", "A minor moving among stations, overpasses, markets, and temporary sleeping spots.", "街头叙事", "Street stories"),
    roleIdentityItem("sur9_quarantined_resident", "隔离居民", "Quarantined Resident", "被名单、封条、门禁和物资派送固定在特定住所或区域的人。", "A resident fixed to a home or area by lists, seals, access control, and supply delivery.", "隔离场景", "Quarantine scenes"),
    roleIdentityItem("sur9_waste_scavenger", "废料拾荒者", "Waste Scavenger", "在垃圾场、废站、拆迁地或电子废料堆中寻找可售物的人。", "A scavenger searching for saleable items in dumps, dead stations, demolition sites, or e-waste piles.", "废土城市", "Waste-city stories"),
    roleIdentityItem("sur9_hermit", "隐居者", "Hermit", "长期远离聚落，依靠小屋、山洞、手工具和少量补给生活的人。", "A person living away from settlements through huts, caves, hand tools, and limited supplies.", "隐居叙事", "Hermit stories"),
    roleIdentityItem("sur9_escaped_convict", "逃脱囚犯", "Escaped Convict", "拥有通缉记录、旧囚服、临时假名和躲避路线的逃亡者。", "A fugitive with wanted record, old prison clothes, temporary aliases, and avoidance routes.", "逃亡片", "Fugitive films"),
    roleIdentityItem("sur9_undocumented_worker", "无证黑工", "Undocumented Worker", "在工地、后厨、仓库或农场中以现金和临时名单工作的人。", "A worker paid in cash and temporary rosters at sites, kitchens, warehouses, or farms.", "移民劳工", "Migrant labor"),
    roleIdentityItem("sur9_itinerant_performer", "流动艺人", "Itinerant Performer", "携带乐器、道具、许可纸或募捐盒在路边和小剧场演出的人。", "A traveling performer carrying instruments, props, permits, or donation boxes for streets and small venues.", "流动演出", "Itinerant performance")
  ]
};
