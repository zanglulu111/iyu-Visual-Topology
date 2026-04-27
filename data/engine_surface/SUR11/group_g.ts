import { LibraryCategoryDef } from '../../../types';
import { visibleEndingItem } from './_shared';

export const SUR11_GROUP_G: LibraryCategoryDef = {
  id: "sur11_group_g",
  name: "7. 喜剧打断 (Comic Interruption)",
  nameEn: "Comic Interruption",
  desc: "误认、道具失灵、片场穿帮、流程卡顿、突发合唱或笨拙巧合在最后画面中打断既定收束。只给可见打断。",
  defEn: "Terminal frames where mistaken identity, prop malfunction, production reveal, procedural snag, sudden chorus, or clumsy coincidence interrupts the expected closure. Provides visible interruption only.",
  items: [
    visibleEndingItem("sur_punchline_cut", "笑点切黑", "Punchline Cut", "某人刚摆好英雄姿势，裤袋里的闹钟响起，画面立刻切黑。", "Someone strikes a heroic pose; an alarm rings from their pocket, and the frame cuts to black.", "喜剧片", "Comedy films"),
    visibleEndingItem("sur_wrong_person_caught", "抓错对象", "Wrong Person Caught", "警队撞门压住嫌犯，抬头发现对方只是举着袋子的送餐员。", "The squad breaks in and pins down the suspect, then looks up to find only a delivery worker holding a bag.", "误会喜剧", "Mistaken-identity comedy"),
    visibleEndingItem("sur_prop_failure", "道具掉螺丝", "Prop Loses Screw", "神器发出一声空响，顶端掉下一颗螺丝，所有人同时低头看。", "The artifact gives a hollow click, a screw drops from its tip, and everyone looks down at once.", "舞台喜剧", "Stage comedy"),
    visibleEndingItem("sur_fourth_wall_comedy", "片场杀青", "Shoot Wrap", "天空传来一声卡，爆炸烟雾停住，工作人员递上场记板。", "A voice calls cut from above; the explosion smoke stops, and a crew member raises the slate.", "元喜剧", "Meta comedy"),
    visibleEndingItem("sur_villain_bored", "反派下班", "Villain Clocks Out", "反派摘下披风，把辞职信贴在控制台上，拖着行李箱离开。", "The villain removes the cape, pins a resignation letter to the console, and leaves with a suitcase.", "职场喜剧", "Workplace comedy"),
    visibleEndingItem("sur_karaoke_finale", "全员合唱", "Karaoke Finale", "对峙双方被刺耳伴奏打断，下一帧全员站在霓虹歌厅合唱。", "Both sides of the standoff are interrupted by shrill backing music; the next frame shows everyone singing in a neon karaoke room.", "歌舞喜剧", "Musical comedy"),
    visibleEndingItem("sur_awkward_silence", "尴尬静止", "Awkward Stillness", "烟尘散开后什么都没发生，两边保持姿势互看。", "The smoke clears and nothing has happened; both sides keep their poses and stare at each other.", "冷面喜剧", "Deadpan comedy"),
    visibleEndingItem("sur_impossible_coincidence", "环岛堵车", "Roundabout Jam", "两支互相追逐的车队在同一个环岛转圈，最后一起堵住出口。", "Two pursuing convoys circle the same roundabout until they block the exit together.", "追逐喜剧", "Chase comedy"),
    visibleEndingItem("sur_background_walkout", "路人退场", "Extras Walk Out", "一排路人放下手中标语，排队从战场边缘离开。", "A line of bystanders lowers their placards and queues to leave along the battlefield edge.", "荒诞喜剧", "Absurd comedy"),
    visibleEndingItem("sur_button_misread", "按错按钮", "Wrong Button", "主角按下红色按钮，基地广播响起生日歌，彩带喷满控制室。", "The protagonist presses the red button; the base speakers play a birthday song, and streamers fill the control room.", "机关喜剧", "Gadget comedy"),
    visibleEndingItem("sur_table_flip", "掀桌露馅", "Table Flip Reveal", "谈判桌被掀翻，露出底下正在吃午饭的维修工。", "The negotiation table flips over, revealing a maintenance worker eating lunch underneath.", "荒诞喜剧", "Absurd comedy"),
    visibleEndingItem("sur_freeze_on_blink", "眨眼定格", "Freeze on Blink", "主角准备发表宣言时突然眨眼，画面停在最不体面的表情上。", "The protagonist blinks just before delivering a declaration, and the frame freezes on the least flattering expression.", "片尾笑点", "End-gag comedy")
  ]
};
