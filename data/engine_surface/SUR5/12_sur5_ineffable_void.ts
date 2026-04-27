import { LibraryCategoryDef } from '../../../types';
import { objectAnchorItem } from './_shared';

export const SUR5_INEFFABLE_VOID: LibraryCategoryDef = {
  id: "sur5_ineffable_void",
  name: "12. 黑箱盲物 (Opaque Boxes)",
  nameEn: "Opaque Boxes",
  desc: "发光手提箱、封信、空白书、铅棺、电台、无面像、无重羽或终末硬币等内容不被完全说明的对象。只给盲物。",
  descEn: "Objects such as glowing briefcases, sealed letters, blank books, lead caskets, radios, faceless idols, weightless feathers, or final coins whose contents remain unspecified. Provides opaque objects only.",
  items: [
    objectAnchorItem("sur5_glowing_briefcase", "发光手提箱", "Glowing Briefcase", "一只上锁手提箱，合缝处漏出稳定的冷光。", "A locked briefcase leaking steady cold light from its seams.", "黑色犯罪片", "Noir crime"),
    objectAnchorItem("sur5_sealed_envelope", "封死黑信", "Sealed Black Letter", "一封无字黑信，封蜡覆盖了整条开口。", "A wordless black letter whose wax covers the full opening.", "悬疑片", "Mystery films"),
    objectAnchorItem("sur5_blank_book", "空白重书", "Heavy Blank Book", "一本异常沉重的书，翻开后每页都是空白。", "An unusually heavy book whose pages are all blank when opened.", "奇幻悬疑", "Fantasy mystery"),
    objectAnchorItem("sur5_lead_casket", "铅棺", "Lead Casket", "一只小型铅棺，被多层封条和锁链缠住。", "A small lead casket wrapped in multiple seals and chains.", "收容叙事", "Containment narratives"),
    objectAnchorItem("sur5_static_radio", "白噪电台", "Static Radio", "一台只有白噪声的旧电台，旋钮被焊死。", "An old radio that plays only static, its dial welded in place.", "怪谈叙事", "Weird tales"),
    objectAnchorItem("sur5_faceless_idol", "无面石像", "Faceless Idol", "一尊没有五官的黑石小像，底座刻着编号。", "A small black-stone idol with no facial features, numbered on its base.", "考古恐怖", "Archaeological horror"),
    objectAnchorItem("sur5_weightless_feather", "无重羽", "Weightless Feather", "一根悬在透明盒中的白羽，不接触盒底。", "A white feather suspended in a transparent box without touching its bottom.", "奇幻寓言", "Fantasy fable"),
    objectAnchorItem("sur5_final_coin", "终末硬币", "Final Coin", "一枚没有正反面的硬币，边缘刻着细小划痕。", "A coin with no heads or tails, its rim covered in tiny scratches.", "公路/黑色叙事", "Road / noir narratives")
  ]
};
