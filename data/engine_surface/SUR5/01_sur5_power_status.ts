import { LibraryCategoryDef } from '../../../types';
import { objectAnchorItem } from './_shared';

export const SUR5_POWER_STATUS: LibraryCategoryDef = {
  id: "sur5_power_status",
  name: "1. 权限凭证 (Authority Tokens)",
  nameEn: "Authority Tokens",
  desc: "王座、印信、门禁、任命书、赦令、广播密钥等能让人物接触、越过或调用权力系统的对象。只给可争夺凭证。",
  descEn: "Objects such as throne seats, seals, access cards, commissions, pardons, and broadcast keys that let characters contact, cross, or invoke a power system. Provides contestable tokens only.",
  items: [
    objectAnchorItem("sur5_command_seal", "调兵印信", "Command Seal", "一枚能调动军队、卫队或自动防御阵列的实体印信。", "A physical seal that can mobilize troops, guards, or automated defense arrays.", "宫廷权谋", "Court intrigue"),
    objectAnchorItem("sur5_master_keycard", "最高门禁卡", "Master Keycard", "一张可打开核心楼层、电梯和档案室的最高级门禁卡。", "A top-level keycard that opens core floors, elevators, and archive rooms.", "谍战片", "Espionage films"),
    objectAnchorItem("sur5_border_permit", "越境通行证", "Border Permit", "带有钢印或生物码的跨区通行文件，检查站只认这张纸。", "A cross-zone travel paper with a seal or bio-code; the checkpoint recognizes only this document.", "逃亡叙事", "Fugitive narratives"),
    objectAnchorItem("sur5_succession_will", "继承遗嘱", "Succession Will", "密封遗嘱写明席位、封地或企业控制权的归属。", "A sealed will naming the recipient of a seat, domain, or corporate control.", "家族剧", "Family drama"),
    objectAnchorItem("sur5_blank_pardon", "空白特赦令", "Blank Pardon", "已盖章但未填写姓名的特赦文书。", "A stamped pardon document with the name field still blank.", "法庭叙事", "Court narratives"),
    objectAnchorItem("sur5_broadcast_key", "广播密钥", "Broadcast Key", "一枚能接管全城屏幕、钟楼或广播塔的认证密钥。", "An authentication key that can take over city screens, clock towers, or broadcast towers.", "政治惊悚", "Political thriller"),
    objectAnchorItem("sur5_execution_license", "处决执照", "Execution License", "由最高系统签发、允许持有人执行特殊拘捕或处决的证件。", "A credential issued by the highest system, allowing special arrest or execution authority.", "黑色动作片", "Noir action"),
    objectAnchorItem("sur5_council_invite", "密会请柬", "Council Invitation", "只允许持帖者进入核心会议室的防伪邀请函。", "An anti-forgery invitation that admits only its bearer into the inner council room.", "财阀叙事", "Corporate intrigue")
  ]
};
