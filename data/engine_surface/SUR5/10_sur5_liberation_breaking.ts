import { LibraryCategoryDef } from '../../../types';
import { objectAnchorItem } from './_shared';

export const SUR5_LIBERATION_BREAKING: LibraryCategoryDef = {
  id: "sur5_liberation_breaking",
  name: "10. 解锁装置 (Release Mechanisms)",
  nameEn: "Release Mechanisms",
  desc: "项圈钥匙、债据、解约章、替身身份、控制芯片、总闸、走私牌或生物识别件等能解除锁定、债务、身份绑定或空间限制的对象。",
  descEn: "Objects such as collar keys, debt papers, release stamps, replacement identities, control chips, master switches, smuggling tags, or biometric pieces that remove locks, debts, bindings, or spatial limits.",
  items: [
    objectAnchorItem("sur5_collar_key", "项圈钥匙", "Collar Key", "一把能打开爆炸项圈、镣铐或符文锁的细钥匙。", "A thin key that opens an explosive collar, shackle, or rune lock.", "逃亡片", "Escape films"),
    objectAnchorItem("sur5_debt_receipt", "债务收据", "Debt Receipt", "一张写着本金、利息和最后期限的债务收据。", "A debt receipt listing principal, interest, and final deadline.", "黑帮叙事", "Gang narratives"),
    objectAnchorItem("sur5_release_stamp", "解约印章", "Release Stamp", "一枚能在契约末尾盖出解除标记的红色印章。", "A red stamp that marks release at the end of a contract.", "契约叙事", "Contract narratives"),
    objectAnchorItem("sur5_replacement_identity", "替身身份包", "Replacement Identity Packet", "一套新姓名、照片、通行码和指纹膜。", "A packet containing a new name, photo, access code, and fingerprint film.", "间谍叙事", "Spy narratives"),
    objectAnchorItem("sur5_control_chip", "控制芯片", "Control Chip", "一枚从后颈或终端槽中取出的微型控制芯片。", "A tiny control chip removed from a nape or terminal slot.", "赛博叙事", "Cyber narratives"),
    objectAnchorItem("sur5_master_switch", "总闸", "Master Switch", "一只被透明罩锁住的总闸开关。", "A master switch locked under a transparent cover.", "基地危机片", "Base-crisis films"),
    objectAnchorItem("sur5_smuggler_tag", "走私牌", "Smuggler Tag", "一块能让货柜、车辆或低轨舱通过黑市路线的编号牌。", "A numbered tag that moves a container, vehicle, or low-orbit pod through a black-market route.", "走私叙事", "Smuggling narratives"),
    objectAnchorItem("sur5_biometric_piece", "生物识别件", "Biometric Piece", "一枚冷藏盒里的虹膜片、指模或声纹片。", "An iris strip, fingerprint film, or voiceprint chip kept in a cold case.", "犯罪惊悚", "Crime thriller")
  ]
};
