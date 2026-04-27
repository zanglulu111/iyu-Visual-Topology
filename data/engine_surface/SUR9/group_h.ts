import { LibraryCategoryDef } from '../../../types';
import { roleIdentityItem } from './_shared';

export const SUR9_GROUP_H: LibraryCategoryDef = {
  id: "role_exploration_frontier",
  name: "08. 探索与边境身份 (Exploration & Frontier)",
  nameEn: "Exploration & Frontier Roles",
  desc: "在太空、深海、荒野、废土、远航和未登记地带工作的移动身份。只给远行职业接口。",
  descEn: "Mobile roles working in space, deep sea, wilderness, wastelands, voyages, and unregistered zones. Provides frontier work interfaces only.",
  items: [
    roleIdentityItem("sur9_astronaut", "航天员", "Astronaut", "在飞船、空间站、舱外作业和任务控制链中工作的航天人员。", "A space worker operating in spacecraft, stations, EVA work, and mission-control chains.", "太空片", "Space films"),
    roleIdentityItem("sur9_deep_sea_diver", "深海潜水员", "Deep-Sea Diver", "携带潜水服、氧气、缆绳、灯具和采样器进入水下作业的人。", "A diver entering underwater work with suit, air, tether, lights, and samplers.", "深海冒险", "Deep-sea adventure"),
    roleIdentityItem("sur9_wilderness_ranger", "荒野巡护员", "Wilderness Ranger", "在林区、保护站、山路和野外营地巡查路线、火点和访客的人。", "A ranger who patrols routes, fire points, and visitors in forests, stations, mountain paths, and camps.", "荒野叙事", "Wilderness stories"),
    roleIdentityItem("sur9_explorer", "探险家", "Explorer", "组织队伍、地图、补给、许可和记录设备前往未知区域的人。", "A traveler who organizes crew, maps, supplies, permits, and recording gear for unknown regions.", "探险片", "Adventure films"),
    roleIdentityItem("sur9_field_cartographer", "野外测绘员", "Field Cartographer", "携带仪器、标杆、无人机或手绘图册记录地形的人。", "A mapper who records terrain with instruments, markers, drones, or hand-drawn charts.", "地理探勘", "Survey stories"),
    roleIdentityItem("sur9_wasteland_courier", "荒地信使", "Wasteland Courier", "在断路、废站、补给点和临时关卡之间投递包裹或消息的人。", "A courier delivering parcels or messages between broken roads, dead stations, supply points, and temporary checkpoints.", "末日公路片", "Post-apocalyptic road stories"),
    roleIdentityItem("sur9_anomaly_hunter", "异常猎人", "Anomaly Hunter", "受雇追踪、确认、封存或捕获危险异常目标的人。", "A hired tracker who locates, confirms, seals, or captures hazardous anomalies.", "怪奇冒险", "Weird adventure"),
    roleIdentityItem("sur9_nomad_guide", "游牧向导", "Nomad Guide", "熟悉水源、季节、路径、交易点和禁行区的移动向导。", "A mobile guide who knows water sources, seasons, routes, trade points, and forbidden zones.", "边境旅程", "Frontier journeys")
  ]
};
