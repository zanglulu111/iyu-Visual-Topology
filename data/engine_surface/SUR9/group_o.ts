import { LibraryCategoryDef } from '../../../types';
import { roleIdentityItem } from './_shared';

export const SUR9_GROUP_O: LibraryCategoryDef = {
  id: "role_criminal_lineage",
  name: "15. 家族化地下身份 (Criminal Lineage)",
  nameEn: "Criminal Lineage Roles",
  desc: "由地下家族、帮派、走私网络、盗贼公会或非法产业继承而来的身份。只给关系网络入口。",
  descEn: "Identities inherited from underground families, gangs, smuggling networks, thieves' guilds, or illegal businesses. Provides network entry points only.",
  items: [
    roleIdentityItem("sur9_mafia_heir", "黑帮继承人", "Mafia Heir", "继承家族姓氏、餐馆据点、账本、保镖和地下会议席位的人。", "An heir to family name, restaurant base, ledgers, guards, and underground meeting seats.", "黑帮片", "Mafia films"),
    roleIdentityItem("sur9_yakuza_family_member", "极道家族成员", "Yakuza Family Member", "在组事务所、纹身规矩、会费、介绍人和惩戒流程中活动的人。", "A member operating through offices, tattoo codes, dues, sponsors, and disciplinary procedures.", "极道叙事", "Yakuza stories"),
    roleIdentityItem("sur9_cartel_heir", "集团继承者", "Cartel Heir", "继承运输线、仓库、现金屋、保护名单和联络暗号的人。", "An heir to routes, warehouses, cash houses, protection lists, and contact codes.", "贩运犯罪片", "Trafficking crime"),
    roleIdentityItem("sur9_thieves_guild_apprentice", "盗贼公会学徒", "Thieves' Guild Apprentice", "接受踩点、开锁、望风、分账和公会规矩训练的新人。", "A trainee learning casing, lockpicking, lookout work, revenue splits, and guild rules.", "奇幻盗贼", "Fantasy thieves"),
    roleIdentityItem("sur9_assassin_clan_trainee", "刺客家族学徒", "Assassin Clan Trainee", "在家族训练场、目标名单、毒物柜和伪装课程中受训的人。", "A trainee shaped by family training yards, target lists, poison cabinets, and disguise lessons.", "刺客叙事", "Assassin stories"),
    roleIdentityItem("sur9_pirate_lineage_sailor", "海盗家族水手", "Pirate-Lineage Sailor", "继承船名、航线、赃物分配规矩和港口暗号的船员。", "A sailor inheriting ship name, routes, loot rules, and port codes.", "海盗片", "Pirate films"),
    roleIdentityItem("sur9_arms_dealer_heir", "军火商继承人", "Arms-Dealer Heir", "接手仓库、样枪、客户名单、转运公司和账本密码的人。", "An heir taking over warehouses, sample weapons, client lists, freight fronts, and ledger passwords.", "军火交易", "Arms trade"),
    roleIdentityItem("sur9_cult_family_child", "教团子弟", "Cult-Raised Child", "在封闭教团、内部课程、集体住所和长老名单中长大的人。", "A person raised inside a closed sect, internal lessons, communal housing, and elder lists.", "教团叙事", "Cult stories")
  ]
};
