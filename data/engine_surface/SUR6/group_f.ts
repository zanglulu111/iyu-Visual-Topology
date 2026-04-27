import { LibraryCategoryDef } from '../../../types';
import { spaceContainerItem } from './_shared';

export const SUR6_GROUP_F: LibraryCategoryDef = {
  id: "loc_transit_passage",
  name: "06. 交通与过渡空间 (Transit & Passage)",
  nameEn: "Transit & Passage Spaces",
  desc: "走廊、电梯、桥梁、站台、码头、楼梯、隧道和关卡等移动、等待、换乘和过境可发生的空间。只给通行地点。",
  descEn: "Corridors, elevators, bridges, platforms, docks, stairs, tunnels, and checkpoints for movement, waiting, transfer, or passage. Provides transit locations only.",
  items: [
    spaceContainerItem("sur6_corridor", "长走廊", "Long Corridor", "两侧房门连续排列，顶灯按固定间距延伸到转角或尽头。", "A passage lined with repeated doors, ceiling lights extending at fixed intervals toward a corner or end.", "酒店走廊", "Hotel corridors"),
    spaceContainerItem("sur6_elevator", "电梯轿厢", "Elevator Car", "封闭金属箱体内有楼层按钮、扶手、镜面板和头顶数字屏。", "A sealed metal cabin with floor buttons, rail, mirror panel, and overhead number display.", "都市场景", "Urban scenes"),
    spaceContainerItem("sur6_bridge", "窄桥", "Narrow Bridge", "桥面悬在水面、峡谷或道路上方，两侧栏杆限定前后通行。", "A deck suspended over water, ravine, or road, with railings limiting movement forward or back.", "过桥场景", "Bridge scenes"),
    spaceContainerItem("sur6_station_platform", "车站站台", "Station Platform", "长条平台贴着轨道展开，候车线、电子屏和座椅沿边缘排布。", "A long platform along tracks, lined with waiting marks, electronic boards, and seats.", "铁路场景", "Rail scenes"),
    spaceContainerItem("sur6_harbor_dock", "港口码头", "Harbor Dock", "木桩、缆绳、起重臂和湿滑地面构成水陆交界的装卸位置。", "Bollards, ropes, crane arms, and wet ground form a loading point at the land-water edge.", "港口场景", "Harbor scenes"),
    spaceContainerItem("sur6_stairwell", "楼梯间", "Stairwell", "折返台阶、扶手、防火门和墙面楼层号组成的垂直通行井。", "A vertical circulation shaft of switchback stairs, rails, fire doors, and floor numbers.", "楼梯间场景", "Stairwell scenes"),
    spaceContainerItem("sur6_tunnel", "隧道", "Tunnel", "管状通道穿过山体、地下或水底，灯带沿墙面向远处重复。", "A tube-like passage through mountain, underground, or underwater, with light strips repeating into the distance.", "隧道场景", "Tunnel scenes"),
    spaceContainerItem("sur6_checkpoint", "边境关卡", "Border Checkpoint", "栏杆、岗亭、证件窗口、摄像头和排队线组成的过境节点。", "A passage node of barriers, booth, document window, cameras, and queue lines.", "边境片", "Border films")
  ]
};
