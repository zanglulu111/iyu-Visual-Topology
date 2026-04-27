import { LibraryCategoryDef } from '../../../types';
import { spaceContainerItem } from './_shared';

export const SUR6_GROUP_L: LibraryCategoryDef = {
  id: "loc_secret_shadow",
  name: "12. 秘密与暗处空间 (Secret & Shadow)",
  nameEn: "Secret & Shadow Spaces",
  desc: "暗室、安全屋、后巷、夹层、机房、私道、隐藏电梯和封存档案室等不对外开放的空间。只给隐蔽地点。",
  descEn: "Dark rooms, safe houses, back alleys, crawl spaces, machine rooms, private routes, hidden elevators, and sealed archives not open to the public. Provides hidden locations only.",
  items: [
    spaceContainerItem("sur6_hidden_room", "暗门内室", "Hidden Room", "书柜、墙板或镜面之后藏着的小房间，入口关闭后与外墙齐平。", "A small room behind shelf, wall panel, or mirror, with an entrance flush to the wall when closed.", "密室场景", "Hidden room scenes"),
    spaceContainerItem("sur6_safe_house", "安全屋", "Safe House", "普通公寓外观下配置备用门、遮光窗帘、现金盒和临时床铺。", "A flat-looking apartment fitted with backup door, blackout curtains, cash box, and temporary bed.", "谍战片", "Espionage films"),
    spaceContainerItem("sur6_back_alley", "后巷", "Back Alley", "垃圾桶、消防梯、后门、排水沟和招牌背光组成的窄巷。", "A narrow lane of bins, fire escapes, rear doors, drains, and backlit signage.", "城市悬疑", "Urban suspense"),
    spaceContainerItem("sur6_crawl_space", "夹层通道", "Crawl Space", "管线、隔热棉、低矮梁架和检修口组成的匍匐通行空间。", "A crawl-through space of pipes, insulation, low beams, and access hatch.", "建筑夹层", "Crawl spaces"),
    spaceContainerItem("sur6_server_backroom", "服务器后室", "Server Backroom", "机柜、线槽、冷风地板、备用电源和刷卡门组成的设备后场。", "A back-of-house equipment room with racks, cable trays, cold floor, backup power, and card door.", "科技惊悚", "Tech thriller"),
    spaceContainerItem("sur6_smuggling_tunnel", "走私暗道", "Smuggling Tunnel", "粗糙土壁、木支撑、隐蔽出口和低矮灯泡构成的地下私道。", "An underground private route of rough earth walls, timber supports, hidden exit, and low bulbs.", "犯罪场景", "Crime scenes"),
    spaceContainerItem("sur6_hidden_elevator", "隐藏电梯", "Hidden Elevator", "普通墙面后的窄电梯门，内部只有少量无标识按钮。", "A narrow elevator door behind a plain wall, with only a few unmarked buttons inside.", "基地场景", "Base scenes"),
    spaceContainerItem("sur6_sealed_archive", "封存档案室", "Sealed Archive", "金属密集架、编号箱、防潮灯和双重门组成的低温保存房间。", "A cool storage room of metal compact shelves, numbered boxes, moisture-proof lamps, and double doors.", "档案场景", "Archive scenes")
  ]
};
