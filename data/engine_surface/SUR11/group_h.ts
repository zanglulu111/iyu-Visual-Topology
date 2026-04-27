import { LibraryCategoryDef } from '../../../types';
import { visibleEndingItem } from './_shared';

export const SUR11_GROUP_H: LibraryCategoryDef = {
  id: "sur11_group_h",
  name: "8. 悬置留白 (Suspended Frame)",
  nameEn: "Suspended Frame",
  desc: "黑屏、未开的门、持续旋转物、响铃电话、空房间、远路、烧毁信件、落地面具或云墙压近等画面将结尾停在未展开处。只给悬置画面。",
  defEn: "Terminal frames where black screen, unopened door, spinning object, ringing phone, empty room, continuing road, burning letter, fallen mask, or approaching cloud wall holds closure at an unexpanded point. Provides suspended image only.",
  items: [
    visibleEndingItem("sur_cut_to_black", "黑屏切断", "Cut to Black", "门铃响起，人物刚抬头，画面直接黑屏。", "The doorbell rings; the figure has just looked up when the image cuts straight to black.", "悬疑剧", "Suspense drama"),
    visibleEndingItem("sur_unopened_door", "未开的门", "Unopened Door", "门把手缓慢转动，屋内的人停在门缝前，画面结束。", "The doorknob slowly turns; the person inside stops before the door crack, and the image ends.", "室内悬疑", "Chamber suspense"),
    visibleEndingItem("sur_spinning_top", "旋转物未停", "Spinning Object", "桌上的小物持续旋转，出现轻微晃动时画面切断。", "The small object on the table keeps spinning; the frame cuts when it begins to wobble.", "心理悬疑", "Psychological suspense"),
    visibleEndingItem("sur_unanswered_phone", "电话响着", "Phone Ringing", "红色电话在空屋里响个不停，没有人接起。", "A red phone keeps ringing in an empty room, and no one answers.", "谍战悬疑", "Espionage suspense"),
    visibleEndingItem("sur_empty_room", "空房间", "Empty Room", "搬空的房间只剩钥匙、杯印和落在地上的窗帘扣。", "The emptied room holds only keys, cup rings, and a curtain hook fallen on the floor.", "生活剧", "Slice-of-life drama"),
    visibleEndingItem("sur_endless_road", "道路延伸", "Road Continues", "汽车驶向地平线，镜头留在不断后退的道路中线。", "The car drives toward the horizon while the camera remains on the receding road stripe.", "公路片", "Road movies"),
    visibleEndingItem("sur_unreadable_letter", "信件烧尽", "Letter Burns", "打开的信被推入火中，最后一个字在火舌里卷曲。", "The opened letter is pushed into the fire, and the last character curls in the flame.", "推理叙事", "Mystery narratives"),
    visibleEndingItem("sur_abandoned_mask", "面具落地", "Mask on Floor", "破裂面具躺在湿地上，远处脚步声逐渐消失。", "A cracked mask lies on wet ground as distant footsteps fade away.", "英雄叙事", "Hero narratives"),
    visibleEndingItem("sur_mirror_figure", "镜中多影", "Figure in Mirror", "主角离开浴室后，镜子里仍站着一个模糊人影。", "After the protagonist leaves the bathroom, a blurred figure still stands in the mirror.", "恐怖悬疑", "Horror suspense"),
    visibleEndingItem("sur_unidentified_body", "白布戒指", "Ring Under Sheet", "白布下露出一只戴戒指的手，镜头没有给出脸。", "A ringed hand protrudes from under a white sheet, and the camera never shows the face.", "犯罪悬疑", "Crime suspense"),
    visibleEndingItem("sur_fade_mid_air", "动作定格", "Action Freeze", "人物跃过栏杆的一瞬冻结成黑白照片。", "The instant a figure leaps over the railing freezes into a black-and-white photograph.", "末路叙事", "Last-stand narratives"),
    visibleEndingItem("sur_ominous_clouds", "云墙压近", "Cloud Wall Nears", "晴朗小镇远处升起一堵深色云墙，旗子突然停止飘动。", "A dark wall of cloud rises beyond the clear town, and the flags suddenly stop moving.", "灾异悬疑", "Disaster suspense")
  ]
};
