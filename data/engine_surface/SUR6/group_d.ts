import { LibraryCategoryDef } from '../../../types';
import { spaceContainerItem } from './_shared';

export const SUR6_GROUP_D: LibraryCategoryDef = {
  id: "loc_medical_care",
  name: "04. 医疗与照护空间 (Medical & Care)",
  nameEn: "Medical & Care Spaces",
  desc: "病房、手术室、药房、影像室、隔离走廊等诊断、照护、清洗和等待可发生的空间。只给医疗地点。",
  descEn: "Wards, operating rooms, pharmacies, imaging rooms, quarantine corridors, and related places for diagnosis, care, cleaning, or waiting. Provides medical locations only.",
  items: [
    spaceContainerItem("sur6_hospital_ward", "多人病房", "Hospital Ward", "多张病床被帘轨分隔，床头有呼叫按钮、输液架和小型监测屏。", "Several beds divided by curtain tracks, with call buttons, IV stands, and small monitoring screens at each headboard.", "医院剧", "Hospital drama"),
    spaceContainerItem("sur6_operating_room", "无影灯手术室", "Operating Room", "手术台位于无影灯正下方，器械台、麻醉机和消毒门围绕四周。", "An operating table sits under shadowless lamps, surrounded by instrument tables, anesthesia machine, and sterilized doors.", "医疗惊悚", "Medical thriller"),
    spaceContainerItem("sur6_triage_tent", "分诊帐篷", "Triage Tent", "临时帐篷内设折叠床、色标牌、登记桌和便携灯。", "A temporary tent with folding beds, color tags, intake desk, and portable lamps.", "救援场景", "Rescue scenes"),
    spaceContainerItem("sur6_quarantine_corridor", "隔离走廊", "Quarantine Corridor", "透明隔断、防护门、消毒喷头和地面分区线组成的限制通道。", "A restricted corridor of transparent partitions, sealed doors, sprayers, and floor zoning lines.", "隔离设施", "Quarantine facilities"),
    spaceContainerItem("sur6_pharmacy_window", "药房窗口", "Pharmacy Window", "药柜、取药号屏、滑动玻璃窗和小托盘构成的发放空间。", "A dispensing space with medicine shelves, pickup screen, sliding glass window, and small tray.", "诊所场景", "Clinic scenes"),
    spaceContainerItem("sur6_imaging_room", "影像检查室", "Imaging Room", "大型扫描设备占据中央，控制室隔着玻璃观察整个检查区域。", "A large scanner occupies the center while a control room observes the examination area through glass.", "医学影像", "Medical imaging"),
    spaceContainerItem("sur6_waiting_room_medical", "门诊等候区", "Clinic Waiting Room", "塑料椅、叫号屏、饮水机和分诊台围出一块公共等候空间。", "Plastic chairs, ticket display, water dispenser, and triage counter form a public waiting area.", "门诊场景", "Outpatient scenes"),
    spaceContainerItem("sur6_clean_room", "无菌准备间", "Sterile Prep Room", "白色柜体、洗手槽、密封服架和压力门组成的进入前准备空间。", "A prep space of white cabinets, scrub sink, sealed suit rack, and pressure door before entry.", "实验医疗", "Lab medicine")
  ]
};
