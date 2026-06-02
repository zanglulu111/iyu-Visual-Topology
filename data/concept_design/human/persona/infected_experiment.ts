import { buildExplicitPersonaTerms, ExplicitPersonaSeed, PersonaEra } from './types';

type Row = [string, string, string, (1 | 2 | 3 | 4 | 5)?, PersonaEra[]?, string[]?];
type Group = { group: string; groupEn: string; rows: Row[] };

const modernBio: PersonaEra[] = ['modern', 'contemporary', 'near_future', 'far_future', 'timeless'];
const future: PersonaEra[] = ['near_future', 'far_future', 'timeless'];

const toSeeds = (groups: Group[]): ExplicitPersonaSeed[] => groups.flatMap(({ group, groupEn, rows }) => rows.map(([id, name, nameEn, ontologyLevel = 4, eras = modernBio, tags = []]) => ({
  id,
  name,
  nameEn,
  group,
  groupEn,
  def: `以${name}为核心锚点，强调血肉边界、感染痕迹、实验编号、寄生关系和失控身体。`,
  defEn: `A compound persona anchored in ${nameEn}, shaped by flesh boundary, infection traces, experiment codes, parasitic relations, and runaway body.`,
  ontologyLevel,
  eras,
  risk: ontologyLevel >= 4 ? 'high' : 'medium',
  tags
})));

const groups: Group[] = [
  { group: 'A. 感染 / 病变 / 隔离对象', groupEn: 'A. Infection / Pathology / Quarantine Subject', rows: [
    ['infected_test_subject', '感染实验体', 'Infected Test Subject'], ['quarantine_schoolgirl', '隔离女学生', 'Quarantine Schoolgirl'], ['plague_survivor_boy', '瘟疫幸存少年', 'Plague Survivor Boy'], ['viral_bride', '病毒新娘', 'Viral Bride'], ['fever_dream_patient', '热病梦患者', 'Fever-Dream Patient'], ['contagion_nurse', '传染病护士', 'Contagion Nurse', 3], ['isolation_ward_child', '隔离病房儿童', 'Isolation-Ward Child'], ['skin_rash_model', '皮疹模特', 'Skin-Rash Model'], ['mask_mark_worker', '口罩压痕工人', 'Mask-Mark Worker', 2], ['red_tag_patient', '红标患者', 'Red-Tag Patient']
  ] },
  { group: 'B. 寄生 / 共生 / 宿主', groupEn: 'B. Parasite / Symbiosis / Host', rows: [
    ['parasite_host_girl', '寄生宿主少女', 'Parasite-Host Girl'], ['symbiotic_boyfriend', '共生男友', 'Symbiotic Boyfriend'], ['chest_flower_host', '胸口开花宿主', 'Chest-Flower Host'], ['worm_eye_oracle', '虫眼预言者', 'Worm-Eye Oracle'], ['parasite_bride', '寄生新娘', 'Parasite Bride'], ['hive_voice_mother', '蜂巢声音母亲', 'Hive-Voice Mother'], ['leech_doctor_patient', '水蛭医生患者', 'Leech Doctor Patient'], ['back_spine_symbiote', '背脊共生体', 'Back-Spine Symbiote'], ['alien_larva_courier', '异星幼虫信使', 'Alien-Larva Courier', 5, future], ['parasite_contract_lawyer', '寄生契约律师', 'Parasite-Contract Lawyer']
  ] },
  { group: 'C. 实验室逃亡 / 编号个体', groupEn: 'C. Lab Escape / Numbered Individual', rows: [
    ['lab_escape_subject_07', '七号逃亡实验体', 'Escaped Subject 07'], ['white_room_child', '白房间儿童', 'White-Room Child'], ['tank_grown_girl', '培养罐少女', 'Tank-Grown Girl'], ['barcode_neck_boy', '条码颈少年', 'Barcode-Neck Boy'], ['hospital_gown_runaway', '病号服逃亡者', 'Hospital-Gown Runaway'], ['sedation_patch_princess', '镇静贴片公主', 'Sedation-Patch Princess'], ['observation_room_actor', '观察室演员', 'Observation-Room Actor'], ['lab_keycard_thief', '实验室门卡小偷', 'Lab-Keycard Thief'], ['subject_zero_mother', '零号母体', 'Subject-Zero Mother'], ['containment_break_survivor', '收容突破幸存者', 'Containment-Breach Survivor']
  ] },
  { group: 'D. 基因混合 / 人兽嵌合', groupEn: 'D. Gene Hybrid / Human-Animal Chimera', rows: [
    ['gene_hybrid_child', '基因混合儿', 'Gene-Hybrid Child'], ['chimera_schoolboy', '奇美拉男学生', 'Chimera Schoolboy'], ['gill_lung_swimmer', '鳃肺游泳者', 'Gill-Lung Swimmer'], ['antler_growth_girl', '鹿角增生女孩', 'Antler-Growth Girl'], ['feather_spine_model', '羽脊模特', 'Feather-Spine Model'], ['claw_hand_pianist', '爪手钢琴家', 'Claw-Hand Pianist'], ['lab_wolf_daughter', '实验室狼女儿', 'Lab Wolf Daughter'], ['amphibian_skin_nurse', '两栖皮肤护士', 'Amphibian-Skin Nurse'], ['transparent_blood_heir', '透明血继承人', 'Transparent-Blood Heir'], ['bioengineered_angel_boy', '生物工程天使少年', 'Bioengineered Angel Boy', 5]
  ] },
  { group: 'E. 药物改造 / 激素身体', groupEn: 'E. Drug Modification / Hormonal Body', rows: [
    ['drug_enhanced_soldier', '药物改造兵', 'Drug-Enhanced Soldier'], ['hormone_trial_girl', '激素试验少女', 'Hormone-Trial Girl'], ['steroid_boxer', '类固醇拳手', 'Steroid Boxer', 2], ['sleep_suppressed_worker', '睡眠抑制工人', 'Sleep-Suppressed Worker', 3], ['beauty_serum_socialite', '美容血清名媛', 'Beauty-Serum Socialite', 3], ['memory_drug_student', '记忆药物学生', 'Memory-Drug Student', 3], ['painkiller_monk', '止痛药僧侣', 'Painkiller Monk', 3], ['combat_stimulant_courier', '战斗兴奋剂信使', 'Combat-Stimulant Courier', 3], ['anti_ageing_patient', '逆龄药物病人', 'Anti-Ageing Patient', 3], ['withdrawal_oracle', '戒断预言者', 'Withdrawal Oracle', 3]
  ] },
  { group: 'F. 生物接口 / 活体装置', groupEn: 'F. Bio-Interface / Living Apparatus', rows: [
    ['bio_interface_girl', '生物接口少女', 'Bio-Interface Girl'], ['living_cable_operator', '活体线缆操控员', 'Living-Cable Operator'], ['organ_console_pilot', '器官控制台驾驶员', 'Organ-Console Pilot'], ['flesh_keyboard_clerk', '血肉键盘职员', 'Flesh-Keyboard Clerk'], ['nerve_flower_singer', '神经花歌手', 'Nerve-Flower Singer'], ['living_mask_actor', '活面具演员', 'Living-Mask Actor'], ['bio_port_nurse', '生物端口护士', 'Bio-Port Nurse'], ['skin_screen_influencer', '皮肤屏幕网红', 'Skin-Screen Influencer'], ['umbilical_data_child', '脐带数据儿童', 'Umbilical-Data Child'], ['organ_radio_priest', '器官电台祭司', 'Organ-Radio Priest']
  ] },
  { group: 'G. 失控试验 / 暴走个体', groupEn: 'G. Failed Experiment / Runaway Individual', rows: [
    ['runaway_experiment', '失控试验品', 'Runaway Experiment'], ['mutation_outbreak_girl', '突变暴发女孩', 'Mutation-Outbreak Girl'], ['failed_super_soldier', '失败超级士兵', 'Failed Super Soldier'], ['containment_siren', '收容警报少女', 'Containment-Siren Girl'], ['panic_room_subject', '恐慌室实验体', 'Panic-Room Subject'], ['overgrown_body_boy', '过度生长少年', 'Overgrown-Body Boy'], ['lab_fire_survivor', '实验室火灾幸存者', 'Lab-Fire Survivor'], ['uncontrolled_regeneration_patient', '失控再生病人', 'Uncontrolled-Regeneration Patient'], ['voice_command_failed_android_flesh', '语音指令失败血肉体', 'Voice-Command Failed Flesh-Body'], ['biohazard_bride_escapee', '生化新娘逃亡者', 'Biohazard Bride Escapee']
  ] },
  { group: 'H. 克隆 / 复制 / 批量身体', groupEn: 'H. Clone / Replication / Serial Body', rows: [
    ['clone_sister_number_three', '三号克隆姐姐', 'Clone Sister Number Three'], ['batch_born_worker', '批量出生工人', 'Batch-Born Worker'], ['duplicate_pop_idol', '复制偶像', 'Duplicate Pop Idol'], ['clone_family_mother', '克隆家庭母亲', 'Clone-Family Mother'], ['backup_body_prince', '备用身体王子', 'Backup-Body Prince'], ['identical_classroom_girl', '同脸教室女孩', 'Identical Classroom Girl'], ['replacement_child_subject', '替代儿童实验体', 'Replacement Child Subject'], ['clone_rebellion_leader', '克隆叛乱领袖', 'Clone-Rebellion Leader'], ['serial_bride_project', '连续新娘计划', 'Serial Bride Project'], ['gene_copy_detective', '基因复制侦探', 'Gene-Copy Detective']
  ] },
  { group: 'I. 生态感染 / 真菌植物化', groupEn: 'I. Eco-Infection / Fungal-Plant Becoming', rows: [
    ['fungal_saint_girl', '真菌感染圣女', 'Fungal-Infected Saint Girl'], ['moss_lung_child', '苔肺儿童', 'Moss-Lung Child'], ['flowering_skin_bride', '开花皮肤新娘', 'Flowering-Skin Bride'], ['root_vein_farmer', '根脉农夫', 'Root-Vein Farmer'], ['spore_eye_teacher', '孢子眼教师', 'Spore-Eye Teacher'], ['lichen_face_widow', '地衣脸寡妇', 'Lichen-Face Widow'], ['green_blood_worker', '绿血工人', 'Green-Blood Worker'], ['tree_bark_patient', '树皮化病人', 'Bark-Skin Patient'], ['seed_pod_pregnant_mother', '种荚孕母', 'Seed-Pod Pregnant Mother'], ['fungal_network_oracle', '菌网预言者', 'Fungal-Network Oracle', 5]
  ] },
  { group: 'J. 禁忌医学 / 身体交易', groupEn: 'J. Forbidden Medicine / Body Trade', rows: [
    ['black_market_organ_girl', '黑市器官女孩', 'Black-Market Organ Girl'], ['illegal_clinic_assistant', '非法诊所助手', 'Illegal-Clinic Assistant'], ['body_auction_model', '身体拍卖模特', 'Body-Auction Model'], ['organ_debt_worker', '器官债务工人', 'Organ-Debt Worker'], ['gene_tailor_doctor', '基因裁缝医生', 'Gene-Tailor Doctor'], ['surgery_cult_patient', '手术教团病人', 'Surgery-Cult Patient'], ['prosthetic_flesh_broker', '血肉义体掮客', 'Flesh-Prosthetic Broker'], ['medical_waste_orphan', '医疗废料孤儿', 'Medical-Waste Orphan'], ['embryo_smuggler', '胚胎走私者', 'Embryo Smuggler'], ['immortality_trial_billionaire', '永生试验富豪', 'Immortality-Trial Billionaire']
  ] }
];

export const CD_PERSONA_INFECTED_EXPERIMENT = buildExplicitPersonaTerms({
  categoryId: 'infected_experiment',
  categoryName: '感染 / 寄生 / 实验体人设',
  categoryNameEn: 'Infection / Parasite / Experiment Subject Persona',
  baseTags: ['infection', 'parasite', 'experiment'],
  baseStyleTags: ['biohorror', 'experiment_subject'],
  baseControls: ['body', 'infection_trace', 'medical_prop', 'costume', 'symbol', 'pose', 'containment_mark'],
  defaultForbids: ['纯机械义体化', '无解释神圣化', '脱离血肉病变或实验编号'],
  defaultEras: modernBio,
  defaultOntologyLevel: 4,
  visualEvidence: '感染痕迹、医疗/实验服制、编号标签、血肉接口、寄生结构、隔离标记和失控身体',
  visualEvidenceEn: 'infection traces, medical or lab clothing, serial tags, flesh interfaces, parasite structure, quarantine marks, and runaway body',
  absorptionFocus: '血肉边界、感染来源、实验编号、医疗流程、寄生关系、隔离制度或失控身体',
  absorptionFocusEn: 'flesh boundary, infection source, experiment code, medical workflow, parasitic relation, quarantine system, or runaway body'
}, toSeeds(groups));
