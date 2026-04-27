import { LibraryCategoryDef } from '../../../types';
import { visibleEndingItem } from './_shared';

export const SUR11_GROUP_E: LibraryCategoryDef = {
  id: "sur11_group_e",
  name: "5. 奇观显现 (Spectacle Revealed)",
  nameEn: "Spectacle Revealed",
  desc: "宝藏、遗迹、神器、实验装置、未知城市、能源核心或异物在最后画面中出现、启动、揭幕或被带走。只给可见奇观。",
  defEn: "Terminal frames where treasure, ruin, artifact, device, unknown city, energy core, or anomalous object appears, activates, is unveiled, or is taken away. Provides visible spectacle only.",
  items: [
    visibleEndingItem("sur_gold_mountain", "金库打开", "Vault Opens", "石门向两侧滑开，灯光扫过堆满大厅的金币和器物。", "The stone doors slide apart, and light sweeps over a hall filled with coins and relics.", "寻宝片", "Treasure films"),
    visibleEndingItem("sur_elixir_of_life", "泉水涌出", "Spring Flows", "枯井底部涌出发光泉水，银色水面映出主角的脸。", "Glowing water rises from the bottom of a dry well, its silver surface reflecting the protagonist's face.", "奇幻探险", "Fantasy adventure"),
    visibleEndingItem("sur_holy_grail", "圣杯落桌", "Grail on Table", "古老杯器被放在石桌中央，杯沿残留一圈微光。", "An ancient cup is placed at the center of a stone table, a faint ring of light around its rim.", "圣杯传说", "Grail legends"),
    visibleEndingItem("sur_alien_tech", "黑箱启动", "Alien Black Box Starts", "异星黑箱展开成悬浮结构，陌生文字沿边缘亮起。", "An alien black box unfolds into a floating structure, with unknown characters lighting along its edges.", "科幻探险", "Sci-fi adventure"),
    visibleEndingItem("sur_hidden_continent", "新大陆入镜", "New Continent in View", "晨雾散开，船头前方出现从地图上消失的海岸线。", "Morning mist clears, revealing a coastline absent from every map ahead of the ship.", "地理探险", "Geographic adventure"),
    visibleEndingItem("sur_flying_city", "城市升空", "City Lifts", "巨城底部喷出蓝白火焰，阴影从地面缓慢剥离。", "Blue-white flame pours from beneath the city as its shadow slowly detaches from the ground.", "浮空城叙事", "Flying-city stories"),
    visibleEndingItem("sur_lost_tomb", "陵门开启", "Tomb Door Opens", "封死千年的帝陵石门裂开，冷风吹灭了第一排火把。", "The sealed imperial tomb door cracks open, and cold wind extinguishes the first row of torches.", "古墓探险", "Tomb adventure"),
    visibleEndingItem("sur_time_travel", "时间舱点火", "Time Capsule Ignites", "时间机器舱门闭合，环形轨道亮起，人物影像被拉成一道光。", "The time machine door closes, the ring track lights up, and the figure stretches into a line of light.", "时间旅行", "Time travel"),
    visibleEndingItem("sur_pet_dragon", "蛋壳裂开", "Egg Cracks", "巨大的蛋壳裂开，湿润的幼兽眼睛在黑暗中睁开。", "The huge eggshell cracks, and the wet hatchling opens its eyes in the dark.", "神兽孵化", "Mythic hatchling"),
    visibleEndingItem("sur_sword_in_stone", "圣剑出石", "Sword Drawn", "石中剑被拔出，石台上的尘埃被震成一圈白雾。", "The sword is drawn from the stone, shaking dust from the pedestal into a ring of white mist.", "王权神话", "Kingship myth"),
    visibleEndingItem("sur_infinite_energy", "能源核心点亮", "Energy Core Lit", "环形能源核心开始自转，整座设施的灯一层层亮起。", "The ring-shaped energy core begins to rotate, and lights across the facility turn on layer by layer.", "硬科幻", "Hard sci-fi"),
    visibleEndingItem("sur_masterpiece", "帷幕揭开", "Curtain Pulled", "展厅帷幕被拉开，所有人安静看向中央那件完成的作品。", "The gallery curtain is pulled aside, and everyone silently looks toward the completed work at the center.", "艺术家叙事", "Artist narratives")
  ]
};
