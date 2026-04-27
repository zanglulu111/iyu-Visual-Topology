import { LibraryCategoryDef } from '../../../types';
import { objectAnchorItem } from './_shared';

export const SUR5_VENGEANCE_RUIN: LibraryCategoryDef = {
  id: "sur5_vengeance_ruin",
  name: "7. 破坏媒介 (Ruin Instruments)",
  nameEn: "Ruin Instruments",
  desc: "引爆器、毒瓶、名单、爆破钥匙、泄密文件、感染样本、武器或破坏工具等能触发毁坏、揭露或拆除的对象。",
  descEn: "Objects such as detonators, poison vials, lists, demolition keys, leak files, infected samples, weapons, or sabotage tools that can trigger damage, exposure, or dismantling.",
  items: [
    objectAnchorItem("sur5_detonator", "引爆器", "Detonator", "一个红色保护盖下的单键引爆器，信号灯缓慢闪烁。", "A one-button detonator under a red safety cap, its signal light blinking slowly.", "动作片", "Action films"),
    objectAnchorItem("sur5_poison_vial", "毒液小瓶", "Poison Vial", "一支细长玻璃瓶，瓶口用蜡封住，液体呈暗绿色。", "A narrow glass vial sealed with wax, holding dark green liquid.", "宫廷惊悚", "Court thriller"),
    objectAnchorItem("sur5_target_list", "目标名单", "Target List", "一张折叠名单，多个姓名旁边画着不同符号。", "A folded list with different symbols marked beside several names.", "动作惊悚", "Action thriller"),
    objectAnchorItem("sur5_demolition_key", "爆破钥匙", "Demolition Key", "一把插入后才能启动拆除程序的黄铜钥匙。", "A brass key required to start a demolition sequence.", "犯罪片", "Crime films"),
    objectAnchorItem("sur5_leak_file", "泄密档案", "Leak File", "一份装在防水袋里的档案，封条已经被撕开一半。", "A file sealed in a waterproof pouch, its strip half torn open.", "政治惊悚", "Political thriller"),
    objectAnchorItem("sur5_infected_sample", "感染样本", "Infected Sample", "一管贴有红色警告标签的活性样本。", "An active sample tube marked with a red warning label.", "生化惊悚", "Bio-thriller"),
    objectAnchorItem("sur5_revenge_weapon", "旧武器", "Old Weapon", "一件被布包裹的旧武器，握柄上保留着刻痕。", "An old weapon wrapped in cloth, its grip still bearing carved marks.", "武侠/西部", "Wuxia / Western"),
    objectAnchorItem("sur5_sabotage_tool", "破坏工具包", "Sabotage Kit", "一套小型工具包，内含剪线钳、磁吸片和假标签。", "A small kit containing wire cutters, magnetic tabs, and false labels.", "谍战片", "Espionage films")
  ]
};
