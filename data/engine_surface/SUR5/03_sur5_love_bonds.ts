import { LibraryCategoryDef } from '../../../types';
import { objectAnchorItem } from './_shared';

export const SUR5_LOVE_BONDS: LibraryCategoryDef = {
  id: "sur5_love_bonds",
  name: "3. 关系信物 (Relational Tokens)",
  nameEn: "Relational Tokens",
  desc: "照片、戒指、录音、旧票根、儿童物件、成对饰物或信件等承载关系指向的可携带对象。只给信物。",
  descEn: "Portable objects such as photos, rings, recordings, old tickets, child items, paired ornaments, or letters that point to a relationship. Provides tokens only.",
  items: [
    objectAnchorItem("sur5_torn_photo", "撕裂合照", "Torn Photograph", "一张被撕开又重新贴合的旧合照，胶带已经发黄。", "An old group photograph torn apart and taped back together with yellowing tape.", "家庭剧", "Family drama"),
    objectAnchorItem("sur5_shared_ring", "成对戒指", "Paired Rings", "两枚内侧刻有同一日期的素戒，其中一枚缺口明显。", "Two plain rings engraved inside with the same date, one visibly chipped.", "爱情片", "Romance films"),
    objectAnchorItem("sur5_last_letter", "未寄出的信", "Unsent Letter", "一封写好但没有邮戳的信，封口压着干枯花瓣。", "A completed letter with no postmark, its seal pressed over a dried petal.", "离别叙事", "Farewell narratives"),
    objectAnchorItem("sur5_child_blanket", "儿童毯角", "Child's Blanket Corner", "一小块从儿童毯上剪下来的布角，边缘缝着名字。", "A small corner cut from a child's blanket, with a name stitched along the edge.", "保护叙事", "Protection narratives"),
    objectAnchorItem("sur5_rescue_beacon", "求救信标", "Rescue Beacon", "一个只发送固定频率的微型信标，外壳贴着手写标签。", "A tiny beacon sending only one fixed frequency, labeled by hand.", "冒险片", "Adventure films"),
    objectAnchorItem("sur5_paired_locket", "双面挂坠", "Paired Locket", "一个能打开两层的金属挂坠，内侧各藏一张小像。", "A metal locket that opens in two layers, each holding a tiny portrait.", "哥特叙事", "Gothic narratives"),
    objectAnchorItem("sur5_waiting_ticket", "约定票根", "Promise Ticket", "一张写着日期、站台和座位号的旧票根。", "An old ticket stub marked with a date, platform, and seat number.", "车站叙事", "Station narratives"),
    objectAnchorItem("sur5_recorded_voice", "旧录音带", "Old Voice Tape", "一盘贴着姓名的磁带，只能播放一段含糊人声。", "A cassette labeled with a name, able to play only one blurred voice segment.", "悬疑家庭剧", "Family mystery")
  ]
};
