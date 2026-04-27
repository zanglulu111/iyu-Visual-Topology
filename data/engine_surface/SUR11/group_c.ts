import { LibraryCategoryDef } from '../../../types';
import { visibleEndingItem } from './_shared';

export const SUR11_GROUP_C: LibraryCategoryDef = {
  id: "sur11_group_c",
  name: "3. 制裁落地 (Sanction Lands)",
  nameEn: "Sanction Lands",
  desc: "追捕、审判、对决、曝光、毁证或抓捕在最后画面中落地。只记录外部处置完成，不判断处置性质。",
  defEn: "Terminal frames where pursuit, trial, duel, exposure, evidence destruction, or arrest lands. Records only the external action, without judging justice, revenge, or payback.",
  items: [
    visibleEndingItem("sur_slay_nemesis", "仇敌倒下", "Nemesis Falls", "最后一击之后，对手倒在地上，武器从手边滑远。", "After the final blow, the opponent lies on the ground and the weapon slides out of reach.", "动作片", "Action films"),
    visibleEndingItem("sur_clear_name", "判决撤销", "Verdict Vacated", "法庭书记员盖下撤销印章，主角的旧档案被抽出放到桌面。", "The court clerk stamps the reversal; the protagonist's old file is pulled out and placed on the desk.", "法庭片", "Courtroom dramas"),
    visibleEndingItem("sur_walk_away_explosions", "爆炸在身后", "Explosion Behind", "主角背对爆炸走出仓库，火光只照亮他的外套边缘。", "The protagonist walks away from the warehouse with the explosion behind, firelight touching only the coat's edge.", "动作片", "Action films"),
    visibleEndingItem("sur_vendetta_complete", "名单划完", "List Crossed Out", "桌上的名单被最后一道红线划掉，笔尖停在纸边。", "The last name on the list is crossed out in red; the pen stops at the paper's edge.", "动作惊悚", "Action thriller"),
    visibleEndingItem("sur_perfect_crime", "监控空白", "Blank Security Feed", "警方调出监控，关键时间段只剩一段无声雪花屏。", "Police call up the security footage; the crucial interval is only silent static.", "犯罪片", "Crime films"),
    visibleEndingItem("sur_economic_ruin", "资产冻结", "Assets Frozen", "银行屏幕跳出冻结通知，玻璃门外的人群开始聚集。", "A bank screen displays the freeze notice; people begin gathering outside the glass doors.", "商战犯罪", "Financial crime"),
    visibleEndingItem("sur_public_execution", "广场处置", "Public Sentence", "广场中央的高台被探照灯照亮，判决书被展开给所有人看。", "The platform in the square is lit by searchlights, and the sentence is unfolded for all to see.", "政治惊悚", "Political thrillers"),
    visibleEndingItem("sur_expose_hypocrisy", "面具落下", "Mask Falls", "直播屏幕切到后台录像，台上人物的笑容僵住，面具滚到脚边。", "The live feed cuts to backstage footage; the figure on stage freezes, and a mask rolls to their feet.", "媒体清算", "Media reckoning"),
    visibleEndingItem("sur_return_to_sender", "原物奉还", "Returned Package", "装着旧证物的箱子被放回对方门口，门铃响起。", "A box of old evidence is placed back at the other person's door; the bell rings.", "黑色电影", "Noir"),
    visibleEndingItem("sur_legal_retribution", "手铐合上", "Cuffs Locked", "手铐在腕上合拢，押送车门随后关上。", "The cuffs close around the wrists, and the transport vehicle door shuts afterward.", "警匪片", "Police films"),
    visibleEndingItem("sur_grave_spit", "坟前倒酒", "Drink at the Grave", "主角在墓碑前倒下一杯酒，空杯被放在墓前泥土上。", "The protagonist pours a drink before the grave and leaves the empty cup on the soil.", "墓前场景", "Graveside scene"),
    visibleEndingItem("sur_ruin_reputation", "通缉屏点亮", "Wanted Screen Lights", "城市大屏同时亮出同一张脸，街上的人群停下抬头。", "City screens light up with the same face; people in the street stop and look up.", "舆论清算", "Public exposure")
  ]
};
