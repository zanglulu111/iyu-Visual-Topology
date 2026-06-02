import { buildExplicitPersonaTerms, ExplicitPersonaSeed, PersonaEra } from './types';

type Row = [string, string, string, (1 | 2 | 3 | 4 | 5)?, PersonaEra[]?, string[]?];
type Group = { group: string; groupEn: string; rows: Row[] };

const future: PersonaEra[] = ['near_future', 'far_future', 'timeless'];
const contemporary: PersonaEra[] = ['contemporary', 'near_future', 'far_future', 'timeless'];

const toSeeds = (groups: Group[]): ExplicitPersonaSeed[] => groups.flatMap(({ group, groupEn, rows }) => rows.map(([id, name, nameEn, ontologyLevel = 4, eras = future, tags = []]) => ({
  id,
  name,
  nameEn,
  group,
  groupEn,
  def: `以${name}为核心锚点，强调人形身体与机械构造、义体接口、仿生身份或工业材料之间的边界。`,
  defEn: `A compound persona anchored in ${nameEn}, shaped by the boundary between humanoid body and machine structure, prosthetic interface, synthetic identity, or industrial material.`,
  ontologyLevel,
  eras,
  risk: ontologyLevel >= 4 ? 'medium' : 'clean',
  tags
})));

const groups: Group[] = [
  { group: 'A. 义体 / 身体改造', groupEn: 'A. Prosthetic / Body Modification', rows: [
    ['prosthetic_arm_boxer', '义体手臂拳手', 'Prosthetic-Arm Boxer'], ['mechanical_eye_detective', '机械眼侦探', 'Mechanical-Eye Detective'], ['chrome_leg_dancer', '铬腿舞者', 'Chrome-Leg Dancer'], ['spine_port_courier', '脊柱接口信使', 'Spine-Port Courier'], ['prosthetic_hand_pianist', '义手钢琴家', 'Prosthetic-Hand Pianist'], ['cybernetic_clinic_girl', '义体诊所女孩', 'Cybernetic Clinic Girl'], ['replacement_lung_runner', '替换肺跑者', 'Replacement-Lung Runner'], ['neural_jack_student', '神经插口学生', 'Neural-Jack Student'], ['modded_skull_bouncer', '改造颅骨保镖', 'Modded-Skull Bouncer'], ['exoskeleton_worker', '外骨骼工人', 'Exoskeleton Worker', 3]
  ] },
  { group: 'B. 机械宗教 / 技术圣职', groupEn: 'B. Machine Religion / Technical Clergy', rows: [
    ['mechanical_nun', '机械修女', 'Mechanical Nun'], ['servo_monk', '伺服僧侣', 'Servo Monk'], ['circuit_priestess', '电路女祭司', 'Circuit Priestess'], ['data_relic_bishop', '数据圣遗物主教', 'Data-Relic Bishop'], ['oil_chapel_acolyte', '机油礼拜堂侍童', 'Oil-Chapel Acolyte'], ['robotic_confessor', '机械忏悔神父', 'Robotic Confessor'], ['chrome_halo_saint', '铬光环圣徒', 'Chrome-Halo Saint'], ['maintenance_temple_guard', '维护神殿守卫', 'Maintenance-Temple Guard'], ['machine_choir_girl', '机械唱诗女孩', 'Machine-Choir Girl'], ['holy_interface_martyr', '神圣接口殉道者', 'Holy-Interface Martyr']
  ] },
  { group: 'C. 仿生人 / 合成人', groupEn: 'C. Android / Synthetic Human', rows: [
    ['android_idol', '仿生偶像', 'Android Idol'], ['synthetic_maid', '合成人女仆', 'Synthetic Maid'], ['replicant_schoolboy', '复制人男学生', 'Replicant Schoolboy'], ['domestic_android_mother', '家政仿生母亲', 'Domestic Android Mother'], ['synthetic_actor_double', '合成演员替身', 'Synthetic Actor Double'], ['android_court_witness', '仿生人法庭证人', 'Android Court Witness'], ['factory_born_bride', '工厂出生新娘', 'Factory-Born Bride'], ['emotion_patch_android', '情绪补丁仿生人', 'Emotion-Patch Android'], ['obsolete_robot_companion', '过时陪伴机器人', 'Obsolete Companion Robot'], ['serial_number_prince', '序列号王子', 'Serial-Number Prince']
  ] },
  { group: 'D. 赛博职业 / 技术街头', groupEn: 'D. Cyber Profession / Technical Street', rows: [
    ['cyber_swordsman', '赛博剑客', 'Cyber Swordsman'], ['hologram_bartender', '全息酒保', 'Hologram Bartender', 3], ['implant_black_market_doctor', '植入体黑市医生', 'Implant Black-Market Doctor'], ['drone_swarm_policeman', '无人机蜂群警察', 'Drone-Swarm Policeman'], ['neon_interface_girl', '霓虹接口女孩', 'Neon Interface Girl'], ['data_cable_hairdresser', '数据线理发师', 'Data-Cable Hairdresser'], ['augmented_pickpocket', '增强扒手', 'Augmented Pickpocket'], ['firewall_bodyguard', '防火墙保镖', 'Firewall Bodyguard'], ['retinal_advertising_model', '视网膜广告模特', 'Retinal-Advertising Model'], ['prosthetic_repair_apprentice', '义体维修学徒', 'Prosthetic-Repair Apprentice']
  ] },
  { group: 'E. 战斗改造 / 军用人形', groupEn: 'E. Combat Augmentation / Military Humanoid', rows: [
    ['cyborg_soldier', '半机械士兵', 'Cyborg Soldier'], ['weapon_arm_veteran', '武器臂老兵', 'Weapon-Arm Veteran'], ['combat_android_girl', '战斗仿生少女', 'Combat Android Girl'], ['tactical_exosuit_commander', '战术外骨骼指挥官', 'Tactical Exosuit Commander'], ['drone_link_sniper', '无人机链接狙击手', 'Drone-Link Sniper'], ['subdermal_armor_bodyguard', '皮下护甲保镖', 'Subdermal-Armor Bodyguard'], ['memory_wiped_assassin', '记忆清洗刺客', 'Memory-Wiped Assassin'], ['riot_control_cyborg', '防暴义体警员', 'Riot-Control Cyborg'], ['battlefield_repair_medic', '战场维修医疗兵', 'Battlefield Repair Medic'], ['mecha_sync_infantry', '机甲同步步兵', 'Mecha-Sync Infantry']
  ] },
  { group: 'F. 工业身体 / 劳动机械化', groupEn: 'F. Industrial Body / Mechanized Labor', rows: [
    ['factory_arm_worker', '工厂机械臂女工', 'Factory-Arm Worker'], ['mining_cyborg', '矿井义体工', 'Mining Cyborg'], ['warehouse_exosuit_girl', '仓库外骨骼女孩', 'Warehouse Exosuit Girl'], ['dock_loader_machine_body', '码头装卸机械身体', 'Dock Loader Machine Body'], ['railway_maintenance_cyborg', '铁路维修义体工', 'Railway Maintenance Cyborg'], ['construction_crane_spine_man', '塔吊脊柱工人', 'Crane-Spine Worker'], ['assembly_line_android', '流水线仿生人', 'Assembly-Line Android'], ['boiler_room_machinist', '锅炉房机械师', 'Boiler-Room Machinist', 3], ['rusted_factory_mother', '锈蚀工厂母亲', 'Rusted Factory Mother'], ['hydraulic_leg_courier', '液压腿快递员', 'Hydraulic-Leg Courier']
  ] },
  { group: 'G. 家庭 / 亲密机器', groupEn: 'G. Domestic / Intimate Machine', rows: [
    ['robot_boyfriend', '机器人男友', 'Robot Boyfriend'], ['mechanical_babysitter', '机械保姆', 'Mechanical Babysitter'], ['synthetic_housewife', '合成家庭主妇', 'Synthetic Housewife'], ['prosthetic_wedding_bride', '义体婚礼新娘', 'Prosthetic Wedding Bride'], ['android_grandmother', '仿生祖母', 'Android Grandmother'], ['emotion_service_companion', '情绪服务陪伴者', 'Emotion-Service Companion'], ['home_care_robot_nurse', '家用护理机器人护士', 'Home-Care Robot Nurse'], ['divorce_court_android', '离婚庭仿生人', 'Divorce-Court Android'], ['replacement_child_robot', '替代儿童机器人', 'Replacement Child Robot'], ['smart_home_medium', '智能家居灵媒', 'Smart-Home Medium', 4, contemporary]
  ] },
  { group: 'H. 表演 / 美学机械化', groupEn: 'H. Performance / Aesthetic Mechanization', rows: [
    ['clockwork_ballerina', '发条芭蕾舞者', 'Clockwork Ballerina'], ['chrome_runway_model', '铬面秀场模特', 'Chrome Runway Model'], ['robot_pop_diva', '机器人流行天后', 'Robot Pop Diva'], ['mechanical_geisha', '机械艺伎', 'Mechanical Geisha'], ['automaton_magician', '自动人偶魔术师', 'Automaton Magician'], ['cyber_circus_acrobat', '赛博马戏杂技演员', 'Cyber-Circus Acrobat'], ['laser_harp_musician', '激光竖琴乐手', 'Laser-Harp Musician'], ['prosthetic_beauty_pageant', '义体选美皇后', 'Prosthetic Beauty Queen'], ['hologram_backup_dancer', '全息伴舞者', 'Hologram Backup Dancer', 3], ['mechanized_drag_queen', '机械化变装皇后', 'Mechanized Drag Queen']
  ] },
  { group: 'I. 失控 / 废弃 / 残次机体', groupEn: 'I. Runaway / Abandoned / Defective Body', rows: [
    ['runaway_android_child', '逃亡仿生儿童', 'Runaway Android Child'], ['defective_combat_doll', '残次战斗人偶', 'Defective Combat Doll'], ['scrapyard_cyborg', '废铁场半机械人', 'Scrapyard Cyborg'], ['factory_reject_girl', '工厂退货女孩', 'Factory-Reject Girl'], ['memory_loop_widow', '记忆循环寡妇', 'Memory-Loop Widow'], ['malfunctioning_priest', '故障机械神父', 'Malfunctioning Machine Priest'], ['obsolete_idol_robot', '过气偶像机器人', 'Obsolete Idol Robot'], ['broken_voice_android', '破音仿生人', 'Broken-Voice Android'], ['abandoned_lunar_maid', '废弃月球女仆', 'Abandoned Lunar Maid', 4, ['near_future', 'far_future', 'timeless']], ['rust_heart_boy', '锈心少年', 'Rust-Heart Boy']
  ] },
  { group: 'J. 后人类 / 身份上传', groupEn: 'J. Posthuman / Uploaded Identity', rows: [
    ['uploaded_aristocrat', '上传意识贵族', 'Uploaded Aristocrat', 5], ['body_subscription_worker', '身体订阅工人', 'Body-Subscription Worker'], ['cloud_mind_schoolgirl', '云端意识女学生', 'Cloud-Mind Schoolgirl', 5], ['avatar_body_broker', '化身身体掮客', 'Avatar-Body Broker', 4], ['digital_soul_bride', '数字灵魂新娘', 'Digital-Soul Bride', 5], ['backup_body_detective', '备用身体侦探', 'Backup-Body Detective', 4], ['synthetic_afterlife_priest', '合成来世祭司', 'Synthetic Afterlife Priest', 5], ['identity_patch_smuggler', '身份补丁走私者', 'Identity-Patch Smuggler', 4], ['posthuman_child_heir', '后人类儿童继承人', 'Posthuman Child Heir', 5], ['quantum_body_refugee', '量子身体难民', 'Quantum-Body Refugee', 5]
  ] }
];

export const CD_PERSONA_CYBERNETIC_ALTERED = buildExplicitPersonaTerms({
  categoryId: 'cybernetic_altered',
  categoryName: '机械化 / 义体 / 仿生人设',
  categoryNameEn: 'Cybernetic / Prosthetic / Synthetic Persona',
  baseTags: ['cybernetic', 'prosthetic', 'synthetic'],
  baseStyleTags: ['cybernetic', 'machine_body'],
  baseControls: ['body', 'interface', 'material', 'costume', 'prop', 'symbol', 'pose'],
  defaultForbids: ['无解释民俗妖怪化', '随机神圣光环抢走机械逻辑', '纯血肉感染化'],
  defaultEras: future,
  defaultOntologyLevel: 4,
  visualEvidence: '机械接口、义体结构、工业材料、序列编号、维修痕迹、合成人身份和构造边界',
  visualEvidenceEn: 'machine interfaces, prosthetic structure, industrial materials, serial codes, repair traces, synthetic identity, and construction boundary',
  absorptionFocus: '机械接口、义体结构、材料构造、维修制度、合成人身份或后人类身体边界',
  absorptionFocusEn: 'machine interface, prosthetic structure, material construction, repair system, synthetic identity, or posthuman body boundary'
}, toSeeds(groups));
