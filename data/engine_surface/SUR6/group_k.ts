import { LibraryCategoryDef } from '../../../types';
import { spaceContainerItem } from './_shared';

export const SUR6_GROUP_K: LibraryCategoryDef = {
  id: "loc_abandoned_aftermath",
  name: "11. 废弃与灾后空间 (Abandoned & Aftermath)",
  nameEn: "Abandoned & Aftermath Spaces",
  desc: "废楼、淹没街道、断桥、空商场、沉船甲板、陨坑、荒站和灰烬地等功能停摆后的空间。只给废弃地点。",
  descEn: "Abandoned buildings, flooded streets, broken bridges, empty malls, wreck decks, craters, deserted stations, and ash fields after function has stopped. Provides abandoned locations only.",
  items: [
    spaceContainerItem("sur6_abandoned_building", "废弃楼房", "Abandoned Building", "裸露楼板、破窗、散落管线和临时围挡组成的停用建筑。", "An unused building of exposed slabs, broken windows, loose pipes, and temporary barriers.", "废楼场景", "Abandoned building scenes"),
    spaceContainerItem("sur6_flooded_street", "淹没街道", "Flooded Street", "街灯、店招、车顶和水面漂浮物标出原本的道路轮廓。", "Street lamps, shop signs, car roofs, and floating debris mark the original road outline.", "灾后城市", "Post-disaster city"),
    spaceContainerItem("sur6_broken_bridge", "断裂高架桥", "Broken Overpass", "混凝土桥面在半空断开，钢筋、护栏和路牌悬在缺口边缘。", "A concrete deck breaks in midair, with rebar, rails, and signs hanging at the gap.", "公路灾后", "Road aftermath"),
    spaceContainerItem("sur6_empty_mall", "空置商场", "Empty Mall", "关闭卷帘门、空中庭、停摆扶梯和褪色导览牌构成的室内废场。", "An indoor dead zone of closed shutters, empty atrium, stopped escalators, and faded maps.", "废弃商场", "Abandoned malls"),
    spaceContainerItem("sur6_shipwreck_deck", "沉船甲板", "Wreck Deck", "倾斜甲板、断桅、缆绳、积水和锈蚀栏杆组成的船体残段。", "A hull remnant of tilted deck, broken mast, ropes, pooled water, and rusted rails.", "海难场景", "Shipwreck scenes"),
    spaceContainerItem("sur6_crater_field", "陨坑地", "Crater Field", "地面向中心塌陷，环状土脊、碎石和烧焦边缘清晰可见。", "Ground sinks toward a center, with ringed ridges, stones, and scorched edges visible.", "撞击地貌", "Impact terrain"),
    spaceContainerItem("sur6_overgrown_station", "荒废车站", "Overgrown Station", "月台、轨道、站牌和候车棚被杂草与藤蔓穿过。", "Platforms, tracks, signs, and shelter are threaded by weeds and vines.", "废弃铁路", "Abandoned rail"),
    spaceContainerItem("sur6_ash_field", "灰烬空地", "Ash Field", "细灰覆盖地面，残柱、金属框和临时标旗分布在开阔区域。", "Fine ash covers the ground, with remaining columns, metal frames, and temporary flags spread across open space.", "火后场景", "After-fire scenes")
  ]
};
