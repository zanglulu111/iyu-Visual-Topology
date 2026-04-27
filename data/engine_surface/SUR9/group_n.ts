import { LibraryCategoryDef } from '../../../types';
import { roleIdentityItem } from './_shared';

export const SUR9_GROUP_N: LibraryCategoryDef = {
  id: "role_artificial_modified",
  name: "14. 人造与改造身份 (Artificial & Modified)",
  nameEn: "Artificial & Modified Roles",
  desc: "由制造、复制、植入、增强、备份或实验程序赋予的社会身份。只给设定接口，不解释存在性质。",
  descEn: "Social identities produced by manufacture, copying, implantation, augmentation, backup, or experiment protocols. Provides setting interfaces only, without explaining ontology.",
  items: [
    roleIdentityItem("sur9_clone_worker", "克隆劳工", "Clone Worker", "由批次编号、雇佣合同、健康记录和岗位分配系统管理的复制个体。", "A copied individual managed by batch numbers, labor contracts, health records, and job assignment systems.", "克隆叙事", "Clone stories"),
    roleIdentityItem("sur9_android_attendant", "仿生侍者", "Android Attendant", "以服务协议、维护接口、外观注册和顾客交互脚本工作的仿生人。", "An android worker operating through service protocols, maintenance ports, appearance registry, and customer scripts.", "仿生人故事", "Android stories"),
    roleIdentityItem("sur9_cyborg_courier", "义体信使", "Cyborg Courier", "依靠植入通讯、增强腿部、货箱锁和路线加密执行递送的人。", "A courier using implanted communication, augmented legs, cargo locks, and encrypted routes.", "赛博叙事", "Cyber stories"),
    roleIdentityItem("sur9_lab_subject", "实验对象", "Lab Subject", "被编号腕带、观察窗、药剂记录和实验排期管理的人。", "A person managed by numbered wristband, observation glass, dosage logs, and experiment schedules.", "实验设施", "Lab-facility stories"),
    roleIdentityItem("sur9_gene_edited_heir", "基因编辑继承人", "Gene-Edited Heir", "拥有定制胚胎档案、医疗监控、家族合同和公开包装的继承者。", "An heir with custom embryo files, medical monitoring, family contracts, and public packaging.", "近未来家族剧", "Near-future family drama"),
    roleIdentityItem("sur9_synthetic_laborer", "合成劳工", "Synthetic Laborer", "由工厂编号、租赁协议、维修站和工作配额管理的人工劳动力。", "An artificial laborer managed by factory number, lease agreement, repair station, and work quotas.", "合成产业", "Synthetic industry"),
    roleIdentityItem("sur9_memory_backup_person", "记忆备份者", "Memory Backup Subject", "拥有备份舱、恢复协议、版本记录和身份校验程序的人。", "A person tied to backup pods, restoration protocols, version logs, and identity checks.", "记忆科技", "Memory technology"),
    roleIdentityItem("sur9_remote_avatar", "远程替身", "Remote Avatar", "由操控端、同步链路、替身编号和远程许可系统管理的代理身份。", "A proxy identity managed through control rigs, sync links, avatar numbers, and remote permission systems.", "远程代理", "Remote proxy")
  ]
};
