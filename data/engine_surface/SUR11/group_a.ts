import { LibraryCategoryDef } from '../../../types';
import { visibleEndingItem } from './_shared';

export const SUR11_GROUP_A: LibraryCategoryDef = {
  id: "sur11_group_a",
  name: "1. 危机停止 (Crisis Shutdown)",
  nameEn: "Crisis Shutdown",
  desc: "灾难、追杀、污染、倒计时或围困在最后画面中停止。只给外部事件的停止点，不追加情绪判词。",
  defEn: "Terminal frames where disaster, pursuit, contamination, countdown, or siege stops. Provides only the visible stopping point, without adding an emotional verdict.",
  items: [
    visibleEndingItem("sur_save_world", "光柱熄灭", "Beam Dissipates", "毁灭性的光柱在城市上空逐层熄灭，镜头停在云层重新露出的天空。", "The destructive beam above the city fades layer by layer; the frame rests on sky emerging through the clouds.", "《第五元素》", "The Fifth Element"),
    visibleEndingItem("sur_cure_found", "样本入柜", "Sample Sealed", "一管澄清的血清被放入冷藏柜，柜门合上，指示灯由红转绿。", "A vial of clear serum is placed into a cold cabinet; the door shuts and the indicator turns from red to green.", "《我是传奇》", "I Am Legend"),
    visibleEndingItem("sur_stop_bomb", "倒计时停住", "Countdown Stopped", "剪线钳落下后，炸弹屏幕停在 00:01，房间里只剩急促的呼吸声。", "After the cutters fall, the bomb display freezes at 00:01; only rapid breathing remains in the room.", "动作谍战片", "Spy action films"),
    visibleEndingItem("sur_seal_gate", "裂隙闭合", "Rift Sealed", "喷吐异物的裂隙被石门或符文压合，最后一道光线从缝里消失。", "The rift spewing foreign matter is pressed shut by stone gates or runes; the last strip of light vanishes in the seam.", "《怪奇物语》", "Stranger Things"),
    visibleEndingItem("sur_calm_storm", "风暴平息", "Storm Settles", "海面上的风墙塌落，暴雨停住，镜头停在重新平整的水面。", "The wall of wind over the sea collapses, rain stops, and the frame rests on the flattened water.", "灾难片", "Disaster films"),
    visibleEndingItem("sur_shield_up", "护盾升起", "Shield Raised", "透明护盾从城市边缘合拢，冲击波撞上屏障后向两侧散开。", "A transparent shield closes around the city; the shockwave strikes it and splits to both sides.", "科幻围城片", "Sci-fi siege films"),
    visibleEndingItem("sur_extinguish_fire", "火线熄灭", "Fireline Out", "最后一段火线被雨水和白雾压下，烧黑的地面露出来。", "The final line of fire is pressed down by rain and white mist, revealing blackened ground.", "灾难救援片", "Disaster rescue films"),
    visibleEndingItem("sur_safe_haven", "避难所开门", "Shelter Opens", "厚重的避难所大门缓缓打开，幸存者停在门槛外看向里面的灯。", "The heavy shelter door opens slowly; survivors stop at the threshold and look toward the lights inside.", "末日片", "Post-apocalyptic films"),
    visibleEndingItem("sur_break_loop", "循环钟归零", "Loop Clock Resets", "反复跳动的时钟第一次走过原本会重置的秒点，继续向前。", "The repeating clock passes the second where it used to reset and keeps moving forward.", "时间循环叙事", "Time-loop stories"),
    visibleEndingItem("sur_repair_core", "核心重启", "Core Rebooted", "地下核心的裂纹被机械臂锁住，主控屏依次亮起绿色节点。", "Mechanical arms lock the cracks in the underground core; green nodes light up across the main screen.", "基地危机片", "Base-crisis films"),
    visibleEndingItem("sur_end_famine", "水闸打开", "Floodgate Opens", "尘土中的水闸缓缓升起，第一股清水冲进干裂的渠道。", "A dusty floodgate rises slowly; the first stream of clear water rushes into the cracked channel.", "《疯狂的麦克斯：狂暴之路》", "Mad Max: Fury Road"),
    visibleEndingItem("sur_rebuild_home", "第一块砖", "First Brick", "废墟中央，一只手把第一块新砖放到临时拉起的准线上。", "In the middle of ruins, a hand places the first new brick along a temporary guide line.", "战后重建影像", "Postwar rebuilding imagery")
  ]
};
