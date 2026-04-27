import { LibraryCategoryDef } from '../../../types';
import { objectAnchorItem } from './_shared';

export const SUR5_HONOR_VALIDATION: LibraryCategoryDef = {
  id: "sur5_honor_validation",
  name: "6. 名号证明 (Recognition Marks)",
  nameEn: "Recognition Marks",
  desc: "勋章、徽章、血统报告、署名底稿、录取通知、旧制服或家徽戒指等使身份、资格或署名被承认的对象。",
  descEn: "Objects such as medals, badges, lineage reports, signed drafts, admission letters, old uniforms, or signet rings that mark identity, qualification, or authorship.",
  items: [
    objectAnchorItem("sur5_medal_case", "勋章盒", "Medal Case", "一只装着旧勋章的丝绒盒，盒盖内侧写着授予日期。", "A velvet case holding an old medal, with the award date written inside the lid.", "战争剧", "War drama"),
    objectAnchorItem("sur5_family_signet", "家徽戒指", "Family Signet", "一枚刻有家徽的戒指，印面磨损但纹章仍可辨认。", "A ring engraved with a family crest, worn but still readable.", "家族叙事", "Family narratives"),
    objectAnchorItem("sur5_lineage_report", "血缘报告", "Lineage Report", "一份密封检测报告，封面贴着两组姓名和编号。", "A sealed test report labeled with two names and serial numbers.", "身份悬疑", "Identity mystery"),
    objectAnchorItem("sur5_signed_draft", "署名底稿", "Signed Draft", "一份保留原始署名、批注和修改痕迹的作品底稿。", "A draft preserving the original signature, notes, and revision marks.", "艺术家叙事", "Artist narratives"),
    objectAnchorItem("sur5_admission_letter", "录取信", "Admission Letter", "一封带浮雕校徽或机构标记的录取通知。", "An admission letter carrying an embossed school crest or institutional mark.", "成长叙事", "Coming-of-age narratives"),
    objectAnchorItem("sur5_trial_evidence", "申辩证据袋", "Appeal Evidence Bag", "一个贴着编号的证据袋，里面装着可复核的原始物件。", "A numbered evidence bag containing a verifiable original object.", "法庭剧", "Court drama"),
    objectAnchorItem("sur5_old_uniform", "旧制服", "Old Uniform", "一件被收进防尘袋的旧制服，胸口仍挂着姓名牌。", "An old uniform in a dust bag, its name tag still on the chest.", "职业剧", "Workplace drama"),
    objectAnchorItem("sur5_witness_badge", "见证徽章", "Witness Badge", "一枚证明持有人曾在关键现场的临时徽章。", "A temporary badge proving its holder was present at a key site.", "调查叙事", "Investigation narratives")
  ]
};
