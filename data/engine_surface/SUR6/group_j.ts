import { LibraryCategoryDef } from '../../../types';
import { spaceContainerItem } from './_shared';

export const SUR6_GROUP_J: LibraryCategoryDef = {
  id: "loc_nature_wilderness",
  name: "10. 自然与野外空间 (Nature & Wilderness)",
  nameEn: "Nature & Wilderness Spaces",
  desc: "森林、洞穴、峭壁、沙漠、海面、河岸、山口和冰原等户外地形。只给自然地点。",
  descEn: "Forests, caves, cliffs, deserts, open water, riverbanks, mountain passes, and ice fields. Provides natural locations only.",
  items: [
    spaceContainerItem("sur6_dense_forest", "密林", "Dense Forest", "树干、灌木、藤蔓和碎光把视线切成短距离的野外区域。", "A wild area where trunks, shrubs, vines, and broken light cut sightlines into short ranges.", "森林场景", "Forest scenes"),
    spaceContainerItem("sur6_cave", "洞穴", "Cave", "岩壁、滴水、窄口、碎石地和回声构成的天然内部空间。", "A natural interior of rock walls, dripping water, narrow mouth, gravel floor, and echoes.", "洞穴场景", "Cave scenes"),
    spaceContainerItem("sur6_cliff_edge", "峭壁边缘", "Cliff Edge", "岩面突然中断，脚下是垂直落差，风和碎石沿边缘移动。", "A rock surface breaks into a vertical drop, with wind and loose stones moving along the edge.", "山地场景", "Mountain scenes"),
    spaceContainerItem("sur6_desert_flat", "沙漠平地", "Desert Flat", "沙丘、盐壳、热浪和稀疏标记物构成的开阔干旱地面。", "An open dry ground of dunes, salt crust, heat shimmer, and sparse markers.", "沙漠场景", "Desert scenes"),
    spaceContainerItem("sur6_open_sea", "开阔海面", "Open Sea", "无岸水面、浪线、浮标和远处云层构成的广域水上空间。", "A wide water space of shoreless surface, wave lines, buoys, and distant clouds.", "海上场景", "Sea scenes"),
    spaceContainerItem("sur6_riverbank", "河岸", "Riverbank", "泥滩、芦苇、水线、木桩和小路组成的水陆边缘。", "A land-water edge of mud flat, reeds, waterline, stakes, and footpath.", "河边场景", "River scenes"),
    spaceContainerItem("sur6_mountain_pass", "山口", "Mountain Pass", "两侧山壁夹出的高处通道，碎石坡、雪线或风口清晰可见。", "A high passage between mountain walls, with scree slope, snowline, or wind gap visible.", "山口场景", "Mountain pass scenes"),
    spaceContainerItem("sur6_ice_field", "冰原", "Ice Field", "连续冰面、裂缝、反光雪层和低矮标杆组成的寒冷开阔地。", "A cold open terrain of continuous ice, cracks, reflective snow, and low markers.", "极地场景", "Polar scenes")
  ]
};
