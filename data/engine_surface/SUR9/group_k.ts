import { LibraryCategoryDef } from '../../../types';
import { roleIdentityItem } from './_shared';

export const SUR9_GROUP_K: LibraryCategoryDef = {
  id: "role_civic_professional",
  name: "11. 市民与专业服务 (Civic & Professional)",
  nameEn: "Civic & Professional Roles",
  desc: "在城市日常制度中提供教育、医疗、法律、新闻、店铺、社工和办公室服务的身份。只给普通社会接口。",
  descEn: "Roles providing education, medicine, law, news, shops, social work, and office service in everyday civic systems. Provides ordinary social interfaces only.",
  items: [
    roleIdentityItem("sur9_civil_servant", "公务员", "Civil Servant", "在部门、窗口、电话、系统后台和会议材料中执行公共事务的人。", "A public worker who handles civic affairs through departments, counters, phones, backend systems, and meeting papers.", "市民剧", "Civic drama"),
    roleIdentityItem("sur9_shop_owner", "小店店主", "Small Shop Owner", "经营门面、货架、收银、进货单和熟客关系的个体商户。", "A small merchant running a storefront, shelves, cash register, orders, and regular customers.", "街区叙事", "Neighborhood stories"),
    roleIdentityItem("sur9_office_worker", "公司职员", "Office Worker", "通过工位、考勤、邮件、会议纪要和绩效表工作的白领雇员。", "A white-collar employee working through desk, attendance, email, meeting notes, and performance forms.", "职场剧", "Workplace drama"),
    roleIdentityItem("sur9_school_teacher", "中学教师", "School Teacher", "负责备课、课堂、作业、家长沟通和学生纪律的教师。", "A teacher responsible for lessons, classes, homework, parent contact, and student discipline.", "校园剧", "School drama"),
    roleIdentityItem("sur9_doctor", "门诊医生", "Clinic Doctor", "在诊室、病历、检查单、处方和复诊系统中处理病患的人。", "A doctor handling patients through exam rooms, records, test orders, prescriptions, and follow-ups.", "医疗剧", "Medical drama"),
    roleIdentityItem("sur9_lawyer", "律师", "Lawyer", "处理委托、证据、合同、庭审、和解和法律意见书的人。", "A legal worker handling clients, evidence, contracts, hearings, settlements, and legal opinions.", "律政剧", "Legal drama"),
    roleIdentityItem("sur9_journalist", "记者", "Journalist", "使用采访、录音、现场照片、线人、编辑台和截稿时间工作的人。", "A reporter working through interviews, recordings, site photos, sources, desks, and deadlines.", "新闻片", "Journalism films"),
    roleIdentityItem("sur9_social_worker", "社工", "Social Worker", "在社区、个案档案、家访、补助表和转介名单中工作的人。", "A worker operating through community offices, case files, home visits, aid forms, and referral lists.", "社区叙事", "Community stories")
  ]
};
