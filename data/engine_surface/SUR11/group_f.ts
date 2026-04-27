import { LibraryCategoryDef } from '../../../types';
import { visibleEndingItem } from './_shared';

export const SUR11_GROUP_F: LibraryCategoryDef = {
  id: "sur11_group_f",
  name: "6. 关系动作 (Relational Gesture)",
  nameEn: "Relational Gesture",
  desc: "拥抱、松手、同桌、接纳、告别、交付信物或并肩停留等关系性动作在最后画面中完成。只给可见动作与人物站位。",
  defEn: "Terminal frames where embrace, release, shared table, acceptance, farewell, keepsake transfer, or side-by-side stillness completes as a visible relational gesture. Provides visible action and placement only.",
  items: [
    visibleEndingItem("sur_romantic_reunion", "人群中拥抱", "Embrace in Crowd", "两人穿过站台人群，在黄线前停下并抱住彼此。", "Two people cross the station crowd, stop before the yellow line, and hold each other.", "爱情片", "Romance films"),
    visibleEndingItem("sur_hand_release", "松开的手", "Hands Released", "两只紧握的手在门缝两侧缓慢分开，门锁随后合上。", "Two clasped hands slowly part on opposite sides of a doorway, and the lock clicks shut.", "离别叙事", "Farewell narratives"),
    visibleEndingItem("sur_bedside_handhold", "床边握手", "Bedside Handhold", "病床旁，一只手覆盖另一只手，监护仪绿光映在床单上。", "Beside the hospital bed, one hand covers another as green monitor light falls across the sheet.", "家庭剧", "Family drama"),
    visibleEndingItem("sur_final_kiss", "隔门一吻", "Kiss Before Door", "车门关闭前，两人隔着半开的门框短暂亲吻。", "Before the vehicle door closes, two people share a brief kiss across the half-open frame.", "爱情片", "Romance films"),
    visibleEndingItem("sur_shared_meal", "同桌吃饭", "Shared Meal", "几个人挤在小桌旁分同一锅热汤，窗外天色慢慢暗下。", "Several people crowd around a small table, sharing one pot of hot soup as the sky darkens outside.", "群像剧", "Ensemble drama"),
    visibleEndingItem("sur_keepsake_received", "信物交手", "Keepsake Passed", "一枚戒指、钥匙或旧照片被放进主角掌心，手指合拢。", "A ring, key, or old photograph is placed in the protagonist's palm, and the fingers close around it.", "家族叙事", "Family narratives"),
    visibleEndingItem("sur_door_opened", "门内亮灯", "Doorway Lit", "屋内灯亮起，有人从门里探身，门外的人停在台阶上。", "A light turns on inside; someone leans out from the doorway while the person outside stops on the steps.", "归家叙事", "Homecoming narratives"),
    visibleEndingItem("sur_family_photo", "合影闪光", "Group Photo Flash", "所有人挤进镜头，闪光灯亮起，画面停在刚冲出的模糊照片上。", "Everyone crowds into the frame; the flash fires, and the image rests on the freshly printed blurry photo.", "家庭片", "Family films"),
    visibleEndingItem("sur_child_held", "抱起孩子", "Child Lifted", "一个孩子被抱到肩头，远处烟尘还没有散尽。", "A child is lifted onto someone's shoulders while smoke in the distance has not yet cleared.", "灾后场景", "Post-disaster scenes"),
    visibleEndingItem("sur_ashes_scattered", "灰罐倾倒", "Ashes Scattered", "小罐中的灰烬被洒入河面，几个人并肩站在岸边。", "Ashes from a small urn are scattered into the river as several people stand side by side on the bank.", "纪念场景", "Memorial scenes"),
    visibleEndingItem("sur_empty_chair_filled", "空椅落座", "Empty Chair Filled", "桌边长期空着的椅子被拉开，有人坐下，其他人安静抬头。", "The long-empty chair at the table is pulled out; someone sits, and the others quietly look up.", "家庭剧", "Family drama"),
    visibleEndingItem("sur_companion_returns", "同伴归来", "Companion Returns", "夜色里门口响起脚步，湿透的同伴把背包放在地上。", "Footsteps sound at the doorway in the night; the soaked companion sets a backpack on the floor.", "冒险叙事", "Adventure narratives")
  ]
};
