import { LibraryCategoryDef } from '../../../types';
import { roleIdentityItem } from './_shared';

export const SUR9_GROUP_D: LibraryCategoryDef = {
  id: "role_administration_authority",
  name: "04. 行政与权力岗位 (Administration & Authority)",
  nameEn: "Administration & Authority Roles",
  desc: "通过签署、批准、审理、调度、任命、谈判和发布命令来工作的制度岗位。只给组织位置。",
  descEn: "Institutional posts that operate through signing, approval, judging, dispatch, appointment, negotiation, and orders. Provides organizational positions only.",
  items: [
    roleIdentityItem("sur9_mayor", "市政官员", "Municipal Official", "负责预算、许可、公共工程、新闻回应和部门协调的地方行政人员。", "A local administrator responsible for budget, permits, public works, press response, and departmental coordination.", "市政剧", "Civic drama"),
    roleIdentityItem("sur9_judge", "法官", "Judge", "主持庭审、审核证据、签发裁定、管理庭期和宣读判决的人。", "An official who presides over hearings, reviews evidence, signs rulings, manages court dates, and reads judgments.", "法庭片", "Courtroom films"),
    roleIdentityItem("sur9_bureaucrat", "办事官僚", "Bureaucrat", "在窗口、档案室、审批台或内部系统中处理表格、印章和流程的人。", "An office worker handling forms, seals, and procedures at counters, archives, approval desks, or internal systems.", "行政讽刺", "Administrative satire"),
    roleIdentityItem("sur9_diplomat", "外交官", "Diplomat", "参与会谈、宴请、照会、撤侨、斡旋和保密通话的国家代表。", "A state representative involved in talks, receptions, notes, evacuation, mediation, and confidential calls.", "外交惊悚", "Diplomatic thriller"),
    roleIdentityItem("sur9_corporate_ceo", "公司首席执行官", "Corporate CEO", "主持董事会、融资、并购、裁撤、发布会和危机公关的企业高管。", "A corporate executive who leads boards, funding, acquisitions, layoffs, press events, and crisis PR.", "商业剧", "Corporate drama"),
    roleIdentityItem("sur9_military_commander", "军事指挥官", "Military Commander", "负责战术部署、补给、战报、撤离路线和部队命令的军官。", "An officer responsible for tactical deployment, logistics, reports, retreat routes, and unit orders.", "战争片", "War films"),
    roleIdentityItem("sur9_headmaster", "校长", "Headmaster", "管理校规、教师、处分、招生、家长会和校园危机的学校负责人。", "A school leader managing rules, faculty, discipline, admissions, parent meetings, and campus crises.", "校园剧", "School drama"),
    roleIdentityItem("sur9_editor_chief", "总编辑", "Editor-in-Chief", "决定选题、版面、删改、发稿时点和新闻风险的媒体负责人。", "A media lead who decides topics, layout, edits, release timing, and publication risk.", "新闻叙事", "Journalism stories")
  ]
};
