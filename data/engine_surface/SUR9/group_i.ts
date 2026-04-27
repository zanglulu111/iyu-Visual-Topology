import { LibraryCategoryDef } from '../../../types';
import { roleIdentityItem } from './_shared';

export const SUR9_GROUP_I: LibraryCategoryDef = {
  id: "role_hereditary_privilege",
  name: "09. 世袭与特权身份 (Hereditary & Privileged)",
  nameEn: "Hereditary & Privileged Roles",
  desc: "由姓氏、继承、封地、家族席位、宗教席位或部族位置带来的公开身份。只给社会登记位置。",
  descEn: "Public identities produced by name, inheritance, domain, family seat, religious seat, or tribal position. Provides registered social positions only.",
  items: [
    roleIdentityItem("sur9_crown_heir", "王位继承人", "Crown Heir", "拥有继承顺位、宫廷日程、随从名单和公开仪式义务的王室成员。", "A royal with succession rank, court schedule, attendant list, and public ceremonial duties.", "宫廷剧", "Court drama"),
    roleIdentityItem("sur9_fallen_aristocrat", "没落贵族", "Fallen Aristocrat", "保留头衔、宅邸遗物、社交请柬和债务文件的旧贵族后裔。", "An old-aristocracy descendant retaining titles, household remnants, invitations, and debt papers.", "贵族叙事", "Aristocratic stories"),
    roleIdentityItem("sur9_feudal_lord", "封地领主", "Feudal Lord", "拥有土地税、庄园、私兵、佃户名册和地方审理权的统治者。", "A ruler with land taxes, manor, retainers, tenant rolls, and local hearing authority.", "中世纪叙事", "Medieval stories"),
    roleIdentityItem("sur9_courtier", "宫廷侍臣", "Courtier", "在宫廷礼仪、私下传话、宴会座次和恩宠竞争中活动的人。", "A palace insider who works through protocol, private messages, banquet seating, and favor contests.", "宫廷权谋", "Palace intrigue"),
    roleIdentityItem("sur9_old_money_heir", "老钱继承人", "Old-Money Heir", "继承基金、地产、董事席、家族办公室和社交名单的人。", "An heir to trusts, property, board seats, family office, and social lists.", "上流社会", "High society"),
    roleIdentityItem("sur9_unacknowledged_heir", "未承认继承人", "Unacknowledged Heir", "拥有血缘线索、旧信件、私生登记或遗嘱争议的继承权相关者。", "A claimant tied to lineage clues, old letters, private records, or disputed wills.", "继承案", "Inheritance cases"),
    roleIdentityItem("sur9_tribal_chief", "部族首领", "Tribal Chief", "管理议事、土地、亲族联盟、祭仪位置和外部谈判的地方首领。", "A local leader managing councils, land, kin alliances, ritual position, and outside negotiation.", "部族叙事", "Tribal stories"),
    roleIdentityItem("sur9_political_dynasty_member", "政治家族成员", "Political Dynasty Member", "共享姓氏资源、竞选团队、捐款网络和公共履历的家族从政者。", "A political family member using surname resources, campaign teams, donor networks, and public records.", "政治剧", "Political drama")
  ]
};
