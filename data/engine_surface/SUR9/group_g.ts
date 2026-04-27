import { LibraryCategoryDef } from '../../../types';
import { roleIdentityItem } from './_shared';

export const SUR9_GROUP_G: LibraryCategoryDef = {
  id: "role_funeral_boundary",
  name: "07. 葬务与边界服务 (Funeral & Boundary Service)",
  nameEn: "Funeral & Boundary Service Roles",
  desc: "围绕遗体、墓园、告别仪式、防疫、法医和临终照护工作的服务身份。只给边界行业位置。",
  descEn: "Service roles around remains, cemeteries, farewell rites, epidemic response, forensic work, and end-of-life care. Provides boundary-industry positions only.",
  items: [
    roleIdentityItem("sur9_undertaker", "葬仪承办人", "Undertaker", "安排灵车、棺木、告别厅、亲属签字和葬礼流程的人。", "A funeral worker arranging hearse, coffin, farewell hall, family signatures, and ceremony sequence.", "葬礼场景", "Funeral scenes"),
    roleIdentityItem("sur9_embalmer", "遗体防腐师", "Embalmer", "在准备间中处理清洁、防腐、缝合、化妆和入棺流程的人。", "A preparation-room worker handling cleaning, preservation, stitching, cosmetics, and casketing.", "殡仪馆场景", "Funeral home scenes"),
    roleIdentityItem("sur9_grave_keeper", "墓园看守", "Grave Keeper", "维护墓碑、通道、登记册、夜间巡查和访客秩序的人。", "A caretaker maintaining stones, paths, registers, night patrols, and visitor order.", "墓园场景", "Cemetery scenes"),
    roleIdentityItem("sur9_forensic_doctor", "法医", "Forensic Doctor", "在解剖室、现场和报告系统中处理检验、采样和时间记录的医生。", "A doctor who handles examination, sampling, and timing records in autopsy rooms, sites, and reporting systems.", "刑侦剧", "Forensic crime drama"),
    roleIdentityItem("sur9_crematorium_operator", "火化员", "Crematorium Operator", "负责炉号、排队表、骨灰盒、设备记录和交接签字的人。", "An operator responsible for furnace numbers, queue sheets, urns, equipment logs, and handover signatures.", "殡葬行业", "Funeral industry"),
    roleIdentityItem("sur9_hospice_worker", "临终照护员", "Hospice Worker", "在病房或居所中处理陪护、用药记录、家属沟通和安宁照护的人。", "A caregiver handling companionship, medication logs, family communication, and hospice care in wards or homes.", "照护叙事", "Caregiving stories"),
    roleIdentityItem("sur9_epidemic_patrol", "防疫巡诊员", "Epidemic Patrol Worker", "携带登记本、样本箱、防护服和隔离名单进入街区或村落的人。", "A patrol worker entering districts or villages with registers, sample boxes, protective gear, and quarantine lists.", "疫病叙事", "Epidemic stories"),
    roleIdentityItem("sur9_professional_mourner", "代哭人", "Professional Mourner", "受雇在葬礼、灵堂或纪念仪式中完成哭唱、跪拜和队列引导的人。", "A hired mourner who performs lament, kneeling, and procession guidance at funerals, wakes, or memorials.", "民俗葬礼", "Folk funerals")
  ]
};
