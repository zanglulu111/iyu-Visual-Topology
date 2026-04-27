import { LibraryCategoryDef } from '../../../types';
import { roleIdentityItem } from './_shared';

export const SUR9_GROUP_P: LibraryCategoryDef = {
  id: "role_exile_foreign",
  name: "16. 流亡与异乡身份 (Exile & Foreignness)",
  nameEn: "Exile & Foreignness Roles",
  desc: "因迁徙、避难、外派、叛逃、保护计划或跨境工作而处在异地制度中的身份。只给迁移状态。",
  descEn: "Identities placed in foreign systems by migration, asylum, assignment, defection, protection programs, or cross-border work. Provides migration status only.",
  items: [
    roleIdentityItem("sur9_political_exile", "政治流亡者", "Political Exile", "持临时证件、旧国通缉记录、庇护申请和海外联络名单的人。", "A person with temporary papers, homeland warrants, asylum filings, and overseas contact lists.", "流亡叙事", "Exile stories"),
    roleIdentityItem("sur9_first_gen_immigrant", "第一代移民", "First-Generation Immigrant", "处理租约、语言课、转账、劳工合同和居留文件的新移民。", "A new immigrant handling leases, language classes, remittances, labor contracts, and residency papers.", "移民剧", "Immigrant drama"),
    roleIdentityItem("sur9_expat_employee", "外派雇员", "Expat Employee", "由公司签证、跨国合同、外派公寓和总部会议安排的工作人员。", "An employee arranged by corporate visa, international contract, expatriate apartment, and headquarters meetings.", "跨国职场", "Transnational workplace"),
    roleIdentityItem("sur9_war_refugee", "战争难民", "War Refugee", "携带登记牌、救济卡、临时帐篷编号和亲属寻访表的人。", "A displaced person carrying registration tags, relief cards, tent numbers, and family tracing forms.", "难民营场景", "Refugee camp scenes"),
    roleIdentityItem("sur9_defector", "叛逃者", "Defector", "带着情报包、保护联系人、新身份文件和审查日程跨阵营的人。", "A person crossing sides with intel packets, protection contacts, new identity papers, and debrief schedules.", "冷战谍战", "Cold-war espionage"),
    roleIdentityItem("sur9_colonial_officer", "殖民地官员", "Colonial Officer", "在远地行政站、税册、地图、翻译和警备队之间工作的外来官员。", "An outside official working through remote stations, tax rolls, maps, interpreters, and guards.", "殖民地叙事", "Colonial stories"),
    roleIdentityItem("sur9_witness_protection_subject", "证人保护对象", "Witness Protection Subject", "使用新姓名、新住址、联邦联系人和保密规则生活的人。", "A protected person living under new name, new address, federal contact, and secrecy rules.", "证人保护", "Witness protection"),
    roleIdentityItem("sur9_stranded_traveler", "滞留旅客", "Stranded Traveler", "因签证、航班、封锁、天气或资金问题被困在异地的人。", "A traveler trapped abroad by visa, flights, lockdown, weather, or money problems.", "滞留叙事", "Stranded travel stories")
  ]
};
