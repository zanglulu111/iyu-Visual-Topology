import { LibraryCategoryDef } from '../../../types';
import { spaceContainerItem } from './_shared';

export const SUR6_GROUP_A: LibraryCategoryDef = {
  id: "loc_power_ritual",
  name: "01. 权力与仪式空间 (Power & Ritual)",
  nameEn: "Power & Ritual Spaces",
  desc: "宫殿、法庭、议事厅、讲坛、广场等公开秩序空间。只给权力动作可发生的可见地点。",
  descEn: "Public order spaces such as palaces, courts, council rooms, podiums, and squares. Provides only visible locations where authority actions can occur.",
  items: [
    spaceContainerItem("sur6_throne_hall", "王座大厅", "Throne Hall", "纵轴对称的高顶大厅，入口到中心座位之间留有长距离通道。", "A high-ceilinged symmetrical hall with a long approach from entrance to central seat.", "宫廷剧", "Court drama"),
    spaceContainerItem("sur6_courtroom", "审判法庭", "Courtroom", "法官席、证人席、旁听席和木制隔栏清楚分区的封闭房间。", "An enclosed room divided by bench, witness stand, gallery, and wooden rails.", "法庭片", "Courtroom films"),
    spaceContainerItem("sur6_council_room", "议事圆厅", "Council Chamber", "环形座席或长桌围成的会议空间，所有座位都处在互相可见的位置。", "A meeting space arranged around circular seating or a long table, with every seat visible to the others.", "政治剧", "Political drama"),
    spaceContainerItem("sur6_oath_platform", "宣誓高台", "Oath Platform", "台阶抬高的小型平台，前方留出站立、跪下或举手宣誓的位置。", "A small raised platform with room in front for standing, kneeling, or raising a hand in oath.", "就职仪式", "Inauguration imagery"),
    spaceContainerItem("sur6_balcony_podium", "阳台讲坛", "Balcony Podium", "伸出建筑立面的高处平台，下方可容纳密集人群或队列。", "A raised platform projecting from a facade, with space below for crowds or formations.", "公开演说", "Public speeches"),
    spaceContainerItem("sur6_parade_square", "阅兵广场", "Parade Square", "大面积硬质空地，边缘有旗杆、看台、灯柱或巡逻通道。", "A large paved ground bordered by flagpoles, stands, lamp posts, or patrol lanes.", "典礼影像", "Ceremonial imagery"),
    spaceContainerItem("sur6_registry_counter", "登记窗口", "Registry Counter", "玻璃窗口、排队栏、编号屏和文件递交槽组成的办理空间。", "A processing space of glass window, queue rails, number display, and document slot.", "行政场景", "Administrative scenes"),
    spaceContainerItem("sur6_treaty_table", "签约桌", "Treaty Table", "一张桌子被置于房间中央，桌面只留文件、笔、印章和两侧座椅。", "A table placed at room center, holding only documents, pens, seals, and chairs on both sides.", "外交场景", "Diplomatic scenes")
  ]
};
