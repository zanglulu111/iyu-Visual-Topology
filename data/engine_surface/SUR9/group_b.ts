import { LibraryCategoryDef } from '../../../types';
import { roleIdentityItem } from './_shared';

export const SUR9_GROUP_B: LibraryCategoryDef = {
  id: "role_underground_illicit",
  name: "02. 地下与违规行业 (Underground & Illicit)",
  nameEn: "Underground & Illicit Roles",
  desc: "在正式制度外从事偷运、伪造、销赃、情报、诈骗和灰色交易的身份。只给非公开职业位置。",
  descEn: "Roles outside formal institutions involving smuggling, forgery, fencing, intelligence, fraud, and grey-market trade. Provides hidden work positions only.",
  items: [
    roleIdentityItem("sur9_master_thief", "职业窃贼", "Professional Thief", "以踩点、开锁、潜入和转移赃物为技能组合的盗窃者。", "A thief whose skill set includes casing, lockpicking, infiltration, and moving stolen goods.", "盗窃片", "Heist films"),
    roleIdentityItem("sur9_smuggler", "走私客", "Smuggler", "负责跨越港口、边境、隧道或航线运输违禁货物的人。", "A carrier who moves prohibited goods across ports, borders, tunnels, or routes.", "边境犯罪片", "Border crime"),
    roleIdentityItem("sur9_black_market_broker", "黑市中介", "Black-Market Broker", "撮合货源、买家、验货、付款和交割地点的地下交易中介。", "An underground broker who links suppliers, buyers, inspection, payment, and handoff sites.", "黑市交易", "Black-market trade"),
    roleIdentityItem("sur9_forger", "伪造师", "Forger", "制作假证件、假签名、假文物、假票据或仿制印章的技术人员。", "A technician who makes false papers, signatures, artifacts, tickets, or copied seals.", "诈骗片", "Con films"),
    roleIdentityItem("sur9_con_artist", "职业骗子", "Con Artist", "用身份包装、话术、场景布置和临时同伙完成骗局的人。", "A fraudster using identity packaging, scripts, staged settings, and temporary accomplices.", "骗局叙事", "Con stories"),
    roleIdentityItem("sur9_getaway_driver", "接应司机", "Getaway Driver", "负责踩路、等候、换车、甩尾和撤离路线的驾驶员。", "A driver responsible for route scouting, waiting, vehicle switches, evasion, and escape paths.", "抢劫片", "Robbery films"),
    roleIdentityItem("sur9_info_broker", "情报贩子", "Information Broker", "买卖名单、照片、路线、弱点、账号和内部消息的地下消息商。", "An underground dealer in names, photos, routes, vulnerabilities, accounts, and inside information.", "谍战悬疑", "Espionage suspense"),
    roleIdentityItem("sur9_crime_cleaner", "现场清理人", "Crime-Scene Cleaner", "受雇处理痕迹、车辆、工具、监控记录和临时藏匿点的人。", "A hired cleaner who handles traces, vehicles, tools, surveillance records, and temporary hiding places.", "犯罪惊悚", "Crime thriller")
  ]
};
