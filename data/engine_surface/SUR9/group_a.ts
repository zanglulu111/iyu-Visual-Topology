import { LibraryCategoryDef } from '../../../types';
import { roleIdentityItem } from './_shared';

export const SUR9_GROUP_A: LibraryCategoryDef = {
  id: "role_armed_security",
  name: "01. 武装与安保身份 (Armed & Security)",
  nameEn: "Armed & Security Roles",
  desc: "以巡查、护送、拘捕、守卫或武装执行为日常职责的身份。只给行动权限与职业场域。",
  descEn: "Roles whose routine duties involve patrol, escort, arrest, guarding, or armed execution. Provides authority and work arenas only.",
  items: [
    roleIdentityItem("sur9_private_detective", "私家侦探", "Private Detective", "受雇调查失踪、外遇、保险、债务或旧案的民间调查者。", "A civilian investigator hired for missing persons, affairs, insurance, debt, or old cases.", "黑色侦探片", "Noir detective films"),
    roleIdentityItem("sur9_homicide_detective", "重案刑警", "Homicide Detective", "负责命案现场、证词、物证链和嫌疑人讯问的警务人员。", "A police officer handling murder scenes, testimony, evidence chains, and suspect interviews.", "犯罪剧", "Crime drama"),
    roleIdentityItem("sur9_patrol_officer", "巡警", "Patrol Officer", "在街区、车站、校园或社区执行日常巡查和即时处置的基层警员。", "A front-line officer who patrols streets, stations, campuses, or neighborhoods and handles immediate incidents.", "警务剧", "Police drama"),
    roleIdentityItem("sur9_riot_unit", "防暴队员", "Riot Unit Officer", "配备盾牌、头盔、警棍和队列指令的群体管控人员。", "A crowd-control officer equipped with shield, helmet, baton, and formation commands.", "社会事件片", "Civil unrest films"),
    roleIdentityItem("sur9_infantry_soldier", "步兵士兵", "Infantry Soldier", "随班组执行驻守、推进、撤离、搜查和阵地维护的军人。", "A soldier attached to a squad for holding, advancing, evacuating, searching, and maintaining positions.", "战争片", "War films"),
    roleIdentityItem("sur9_mercenary", "雇佣兵", "Mercenary", "按合同执行护卫、突入、撤离、夺取或训练任务的私人武装人员。", "A private combatant hired for guard, breach, extraction, seizure, or training assignments.", "军事动作片", "Military action"),
    roleIdentityItem("sur9_bodyguard", "随身护卫", "Bodyguard", "围绕特定目标安排路线、遮挡视线、排查入口和处理近身风险的安保人员。", "A security worker who plans routes, blocks sightlines, checks entrances, and handles close-range risks around a principal.", "保护任务", "Protection detail"),
    roleIdentityItem("sur9_executioner", "行刑官", "Executioner", "按制度命令执行处决流程、器具检查、记录签署和现场交接的职务。", "An official post that carries out execution procedure, equipment checks, record signing, and site handover by order.", "历史刑罚场景", "Historical punishment scenes")
  ]
};
