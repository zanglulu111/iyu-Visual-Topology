import { LibraryCategoryDef } from '../../../types';
import { spaceContainerItem } from './_shared';

export const SUR6_GROUP_B: LibraryCategoryDef = {
  id: "loc_sacred_faith",
  name: "02. 信仰与祭仪空间 (Ritual & Faith)",
  nameEn: "Ritual & Faith Spaces",
  desc: "教堂、庙宇、墓园、祭坛、钟楼等祈祷、献礼、告别和净手可发生的空间。只给祭仪地点。",
  descEn: "Churches, temples, graveyards, altars, bell towers, and related places for prayer, offering, farewell, or washing. Provides ritual locations only.",
  items: [
    spaceContainerItem("sur6_cathedral_nave", "教堂中殿", "Cathedral Nave", "长列柱、拱顶、排椅和彩窗构成的纵深礼拜空间。", "A deep worship space formed by columns, vaults, pews, and stained glass.", "哥特教堂", "Gothic churches"),
    spaceContainerItem("sur6_shrine_courtyard", "庙宇前庭", "Shrine Courtyard", "石阶、香炉、水槽和门廊围出的露天前庭。", "An open forecourt enclosed by stone steps, incense burner, water basin, and gate porch.", "东亚寺庙", "East Asian temples"),
    spaceContainerItem("sur6_confessional_booth", "告解小间", "Confessional Booth", "两格相邻木间被细密格栅隔开，内部只容一人坐下或跪下。", "Two adjoining wooden cells divided by a fine grille, each sized for one person to sit or kneel.", "宗教片", "Religious films"),
    spaceContainerItem("sur6_graveyard_path", "墓园小径", "Graveyard Path", "石碑、矮墙、树影和碎石路组成的户外墓园通道。", "An outdoor cemetery path of stones, low walls, tree shadows, and gravel.", "墓园场景", "Cemetery scenes"),
    spaceContainerItem("sur6_ritual_altar", "祭仪台", "Ritual Altar", "位于房间或广场中心的石台，周围摆放烛台、器皿、绳结或标记线。", "A stone table at the center of a room or square, surrounded by candles, vessels, knots, or marked lines.", "民俗仪式", "Folk rituals"),
    spaceContainerItem("sur6_bell_tower_landing", "钟楼平台", "Bell Tower Landing", "狭窄楼梯通向悬挂大钟的高处平台，四面开有透风窗洞。", "A narrow stair leads to a high landing with a hanging bell and vented openings on all sides.", "钟楼场景", "Bell tower scenes"),
    spaceContainerItem("sur6_catacomb_passage", "地下骨室通道", "Catacomb Passage", "低矮石道沿墙排布龛位与刻字板，灯光只能照亮前方短距离。", "A low stone passage lined with niches and inscription plates; light reaches only a short distance ahead.", "地下墓穴", "Catacombs"),
    spaceContainerItem("sur6_ablution_pool", "净手水池", "Ablution Pool", "浅水池、石沿和排水槽构成的清洗空间，旁边常有挂钩或置物台。", "A washing space formed by a shallow pool, stone rim, and drain, often with hooks or a small shelf nearby.", "净礼空间", "Ablution spaces")
  ]
};
