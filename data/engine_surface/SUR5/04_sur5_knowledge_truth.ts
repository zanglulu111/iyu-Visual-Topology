import { LibraryCategoryDef } from '../../../types';
import { objectAnchorItem } from './_shared';

export const SUR5_KNOWLEDGE_TRUTH: LibraryCategoryDef = {
  id: "sur5_knowledge_truth",
  name: "4. 信息载体 (Information Carriers)",
  nameEn: "Information Carriers",
  desc: "黑匣子、硬盘、残页、录像、地图、源代码、记忆晶体或预告板等保存、遮蔽或传递信息的对象。只给信息载体。",
  descEn: "Objects such as black boxes, drives, fragments, recordings, maps, source code, memory crystals, or forecast tablets that store, hide, or transfer information. Provides carriers only.",
  items: [
    objectAnchorItem("sur5_blackbox_data", "黑匣数据块", "Blackbox Data Block", "一枚无法拆开的黑匣数据块，外壳有烧蚀痕迹。", "A sealed blackbox data block with burn marks on its casing.", "政治惊悚", "Political thriller"),
    objectAnchorItem("sur5_encrypted_drive", "加密硬盘", "Encrypted Drive", "一个需要三组钥匙同时解锁的离线硬盘。", "An offline drive that requires three keys to unlock at once.", "谍战片", "Espionage films"),
    objectAnchorItem("sur5_forbidden_page", "禁书残页", "Forbidden Page", "从禁书中撕下的一页，页边留有烧焦缺口。", "A page torn from a forbidden book, charred along one edge.", "奇幻悬疑", "Fantasy mystery"),
    objectAnchorItem("sur5_witness_record", "证人录像", "Witness Recording", "一段封存在旧摄像机里的短录像，时间码停在关键秒点。", "A short recording sealed in an old camera, its timecode stopped at a crucial second.", "犯罪片", "Crime films"),
    objectAnchorItem("sur5_map_fragment", "地图残片", "Map Fragment", "一块缺角地图，只留下路线末端和一个手写符号。", "A torn map fragment showing only the route's end and one handwritten symbol.", "探险片", "Adventure films"),
    objectAnchorItem("sur5_source_chip", "源代码芯片", "Source-Code Chip", "一枚透明芯片，内部线路像细小迷宫一样弯折。", "A transparent chip whose inner circuits bend like a tiny maze.", "硬科幻", "Hard sci-fi"),
    objectAnchorItem("sur5_memory_crystal", "记忆晶体", "Memory Crystal", "一枚可投影片段记忆的晶体，表面有裂纹。", "A cracked crystal capable of projecting fragments of memory.", "科幻悬疑", "Sci-fi mystery"),
    objectAnchorItem("sur5_forecast_tablet", "预告石板", "Forecast Tablet", "一块刻有未来时间、地点和图形标记的石板。", "A stone tablet engraved with future times, locations, and graphic marks.", "预言叙事", "Prophecy narratives")
  ]
};
