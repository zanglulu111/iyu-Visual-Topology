import { LibraryCategoryDef } from '../../../types';
import { roleIdentityItem } from './_shared';

export const SUR9_GROUP_C: LibraryCategoryDef = {
  id: "role_knowledge_tech",
  name: "03. 知识与技术岗位 (Knowledge & Tech)",
  nameEn: "Knowledge & Tech Roles",
  desc: "以研究、诊断、设计、维护、编程、档案和测绘为主要工作方式的专业身份。只给技能接口。",
  descEn: "Professional roles centered on research, diagnosis, design, maintenance, programming, archives, and mapping. Provides skill interfaces only.",
  items: [
    roleIdentityItem("sur9_research_scientist", "研究科学家", "Research Scientist", "在实验室、野外站或企业研发部进行实验、记录和论文提交的研究人员。", "A researcher who conducts experiments, records data, and submits papers in a lab, field station, or corporate R&D unit.", "科研叙事", "Research stories"),
    roleIdentityItem("sur9_surgeon", "外科医生", "Surgeon", "负责术前评估、手术切开、器械指令、缝合和术后记录的医生。", "A physician responsible for pre-op review, incision, instrument commands, suturing, and post-op records.", "医疗剧", "Medical drama"),
    roleIdentityItem("sur9_engineer", "工程师", "Engineer", "围绕图纸、设备、测试、维修和风险报告工作的技术人员。", "A technical worker focused on plans, equipment, tests, repairs, and risk reports.", "工业科幻", "Industrial sci-fi"),
    roleIdentityItem("sur9_programmer", "程序员", "Programmer", "编写、调试、部署和维护软件、脚本、接口或自动化系统的人。", "A worker who writes, debugs, deploys, and maintains software, scripts, interfaces, or automation systems.", "科技惊悚", "Tech thriller"),
    roleIdentityItem("sur9_architect", "建筑师", "Architect", "制作方案图、结构协调、材料清单和施工沟通的设计人员。", "A designer who prepares plans, coordinates structure, lists materials, and communicates with construction teams.", "建筑叙事", "Architecture stories"),
    roleIdentityItem("sur9_archivist", "档案管理员", "Archivist", "负责分类、调阅、封存、修复和登记纸质或数字档案的人。", "A keeper who classifies, retrieves, seals, repairs, and registers paper or digital archives.", "档案悬疑", "Archive mystery"),
    roleIdentityItem("sur9_archaeologist", "考古学者", "Archaeologist", "在遗址、墓葬、沉船或旧城区进行测绘、发掘和编号记录的人。", "A field scholar who maps, excavates, and catalogs sites, tombs, wrecks, or old districts.", "冒险考古", "Archaeological adventure"),
    roleIdentityItem("sur9_field_medic", "现场医护", "Field Medic", "在事故、战地、灾区或远行队伍中进行急救、包扎和转运判断的人。", "A medic who performs first aid, bandaging, and transport decisions at accidents, fronts, disaster zones, or expeditions.", "救援叙事", "Rescue stories")
  ]
};
