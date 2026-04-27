import { LibraryCategoryDef } from '../../../types';
import { visibleEndingItem } from './_shared';

export const SUR11_GROUP_B: LibraryCategoryDef = {
  id: "sur11_group_b",
  name: "2. 权力归位 (Power Transfer)",
  nameEn: "Power Transfer",
  desc: "权力、地位、军力、资本或系统权限在最后画面中完成转移。只记录仪式、座次、签字、授印、接管或跪拜。",
  defEn: "Terminal frames where power, status, military force, capital, or system access changes hands. Records only ritual, seating, signature, seal, takeover, or submission.",
  items: [
    visibleEndingItem("sur_throne_ascendant", "坐上王座", "Taking the Throne", "主角穿过空旷大殿，在众人注视下坐上最高处的王座。", "The protagonist crosses an empty hall and sits on the highest throne under everyone's gaze.", "《权力的游戏》", "Game of Thrones"),
    visibleEndingItem("sur_godfather", "戒指被亲吻", "Ring Kissed", "昏暗办公室里，队伍依次上前低头亲吻主角手上的戒指。", "In a dim office, people step forward one by one and kiss the ring on the protagonist's hand.", "《教父》", "The Godfather"),
    visibleEndingItem("sur_corporate_takeover", "签下控股书", "Control Signed", "股权转让书最后一页被签完，会议室对面的人沉默起身。", "The final page of the equity transfer is signed; the people across the boardroom rise in silence.", "商战剧", "Corporate dramas"),
    visibleEndingItem("sur_crown_maker", "为他人戴冠", "Crowning Another", "主角把王冠戴到傀儡继承人头上，自己退回帷幕后方。", "The protagonist places the crown on a puppet heir and steps back behind the curtain.", "权谋剧", "Court intrigue"),
    visibleEndingItem("sur_monopoly", "资源图变色", "Map Turns One Color", "巨幅资源地图上的最后一块异色区域被系统刷新为同一种颜色。", "On a giant resource map, the last differently colored region refreshes into the same color as the rest.", "垄断叙事", "Monopoly narratives"),
    visibleEndingItem("sur_weapon_mastery", "钥匙入手", "Weapon Key Acquired", "超级武器的启动钥匙落入主角掌心，控制台等待指纹确认。", "The launch key of the superweapon lands in the protagonist's palm; the console awaits fingerprint confirmation.", "军事科幻", "Military sci-fi"),
    visibleEndingItem("sur_new_world_order", "新法投影", "New Law Projected", "新的法典条文投射在城市外墙上，人群抬头阅读。", "The new code of law is projected on the city wall; the crowd looks up to read it.", "架空政治片", "Speculative political fiction"),
    visibleEndingItem("sur_chosen_one", "印记发光", "Mark Lit", "古老印记在主角手背亮起，周围人同时跪下或后退。", "An ancient mark lights on the protagonist's hand; people around kneel or step back at once.", "神话叙事", "Mythic narratives"),
    visibleEndingItem("sur_mind_control", "全城同步", "City Synced", "城市屏幕同时闪烁同一命令，街道上的人群停下并转向同一方向。", "Every city screen flashes the same command; people in the street stop and turn in one direction.", "制度惊悚", "System thriller"),
    visibleEndingItem("sur_tech_singularity", "云端上线", "Cloud Body Online", "监控、交通灯和机房屏幕同时亮起同一个头像。", "Cameras, traffic lights, and server-room monitors light up with the same face at once.", "技术惊悚片", "Tech thrillers"),
    visibleEndingItem("sur_mass_submission", "万旗低垂", "Flags Lowered", "广场上的各色旗帜依次降下，只剩中央一面旗在风中展开。", "Different flags in the plaza lower one after another, leaving only the central banner unfurled in the wind.", "帝国史诗", "Imperial epics"),
    visibleEndingItem("sur_crush_rebellion", "叛旗落地", "Rebel Banner Falls", "被烧穿的叛旗从高塔坠下，士兵在城门内列队站定。", "A burned rebel banner falls from the tower; soldiers line up inside the gate.", "战争权力叙事", "War-power narratives")
  ]
};
