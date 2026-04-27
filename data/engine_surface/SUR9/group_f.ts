import { LibraryCategoryDef } from '../../../types';
import { roleIdentityItem } from './_shared';

export const SUR9_GROUP_F: LibraryCategoryDef = {
  id: "role_faith_rite",
  name: "06. 信仰与祭仪岗位 (Faith & Rite)",
  nameEn: "Faith & Rite Roles",
  desc: "在教堂、庙宇、会堂、巡回讲坛或民俗仪式中承担祈祷、布道、主持和驱邪的身份。只给仪式职位。",
  descEn: "Roles in churches, temples, halls, touring pulpits, or folk rites that handle prayer, preaching, officiation, and expulsion rituals. Provides ritual posts only.",
  items: [
    roleIdentityItem("sur9_priest", "神父", "Priest", "主持弥撒、告解、婚礼、葬礼和教区文书的宗教职员。", "A religious official who handles mass, confession, weddings, funerals, and parish paperwork.", "宗教剧", "Religious drama"),
    roleIdentityItem("sur9_nun", "修女", "Nun", "在修会、学校、医院或慈善机构中承担祈祷、照护和管理职责的人。", "A member of a convent who performs prayer, care, and administration in orders, schools, hospitals, or charities.", "修道院场景", "Convent scenes"),
    roleIdentityItem("sur9_monk", "僧侣", "Monk", "在寺院、山门、经堂或行脚路线上参与修行、诵经和日常劳作的人。", "A monastic who practices, chants, and works in monasteries, gates, halls, or pilgrimage routes.", "寺院叙事", "Monastery stories"),
    roleIdentityItem("sur9_shaman", "萨满", "Shaman", "使用鼓、面具、烟草、草药或歌调主持民俗仪式的人。", "A ritual worker who uses drums, masks, smoke, herbs, or chants to conduct folk rites.", "民俗叙事", "Folk stories"),
    roleIdentityItem("sur9_exorcist", "驱魔师", "Exorcist", "携带经书、圣水、符箓、器具或记录表进行驱邪流程的人。", "A ritual worker carrying books, holy water, talismans, tools, or case records for expulsion procedures.", "驱魔片", "Exorcism films"),
    roleIdentityItem("sur9_oracle_reader", "占卜师", "Diviner", "使用牌、签、星盘、骨片、水面或算法图表给出预测的人。", "A reader using cards, lots, charts, bones, water surfaces, or algorithmic diagrams to make forecasts.", "占卜场景", "Divination scenes"),
    roleIdentityItem("sur9_ritual_officiant", "仪式司仪", "Ritual Officiant", "负责流程、队列、祭器、宣读文本和参与者位置安排的人。", "An officiant who manages sequence, lines, vessels, readings, and participant positions.", "仪式场景", "Ritual scenes"),
    roleIdentityItem("sur9_televangelist", "电视布道者", "Televangelist", "通过演播室、热线、捐款系统和巡回会场进行公开布道的人。", "A public preacher working through studios, hotlines, donation systems, and touring venues.", "媒体宗教", "Media religion")
  ]
};
