import { buildExplicitPersonaTerms, ExplicitPersonaSeed, PersonaCategoryFit, PersonaEra, personaFit } from './types';

const mythic: PersonaEra[] = ['feudal', 'mythic'];
const eastern: PersonaEra[] = ['feudal', 'early_modern', 'modern', 'contemporary', 'mythic'];
const modernMythic: PersonaEra[] = ['modern', 'contemporary', 'near_future', 'mythic'];

const fantasyFit = (group: string) => {
  if (group.startsWith('A.')) return personaFit('weak', {
    strong: ['fantasy', 'mythic_epic'],
    usable: ['xianxia', 'religious_ritual', 'adventure'],
    fusion: ['dark_fantasy', 'surreal'],
    weak: ['urban_life', 'cyberpunk', 'real_professional']
  });
  if (group.startsWith('B.')) return personaFit('weak', {
    strong: ['fantasy', 'adventure'],
    usable: ['dark_fantasy', 'wuxia', 'xianxia'],
    fusion: ['horror', 'romance'],
    weak: ['real_professional', 'cyberpunk', 'court']
  });
  if (group.startsWith('C.')) return personaFit('weak', {
    strong: ['fantasy', 'ecological'],
    usable: ['mythic_epic', 'court', 'romance'],
    fusion: ['xianxia', 'dark_fantasy'],
    weak: ['urban_life', 'cyberpunk', 'wasteland']
  });
  if (group.startsWith('D.')) return personaFit('weak', {
    strong: ['fantasy', 'mythic_epic'],
    usable: ['adventure', 'war_military', 'dark_fantasy'],
    fusion: ['body_horror', 'xianxia'],
    weak: ['urban_life', 'romance', 'real_professional']
  });
  if (group.startsWith('E.')) return personaFit('weak', {
    strong: ['fantasy', 'mythic_epic'],
    usable: ['xianxia', 'historical', 'religious_ritual'],
    fusion: ['urban_life', 'surreal'],
    weak: ['cyberpunk', 'war_military', 'wasteland']
  });
  if (group.startsWith('F.')) return personaFit('weak', {
    strong: ['fantasy', 'ecological'],
    usable: ['romance', 'mythic_epic', 'dark_fantasy'],
    fusion: ['surreal'],
    weak: ['war_military', 'cyberpunk', 'real_professional']
  });
  if (group.startsWith('G.')) return personaFit('weak', {
    strong: ['dark_fantasy', 'horror', 'fantasy'],
    usable: ['religious_ritual', 'body_horror'],
    fusion: ['surreal', 'xianxia'],
    weak: ['romance', 'urban_life', 'fashion_idol']
  });
  if (group.startsWith('H.')) return personaFit('weak', {
    strong: ['mythic_epic', 'fantasy'],
    usable: ['adventure', 'war_military', 'xianxia'],
    fusion: ['dark_fantasy', 'romance'],
    weak: ['urban_life', 'cyberpunk', 'real_professional']
  });
  if (group.startsWith('I.')) return personaFit('weak', {
    strong: ['fantasy', 'ecological'],
    usable: ['adventure', 'body_horror', 'dark_fantasy'],
    fusion: ['xianxia', 'surreal'],
    weak: ['real_professional', 'urban_life', 'court']
  });
  return personaFit('weak', {
    strong: ['dark_fantasy', 'fantasy', 'court'],
    usable: ['horror', 'romance', 'mythic_epic'],
    fusion: ['surreal'],
    weak: ['urban_life', 'cyberpunk', 'wasteland']
  });
};

const fantasyFitOverrides: Record<string, PersonaCategoryFit> = {
  wand_shop_heir: personaFit('weak', {
    strong: ['fantasy', 'real_professional', 'workplace'],
    usable: ['mythic_epic', 'urban_life'],
    fusion: ['dark_fantasy'],
    weak: ['cyberpunk', 'war_military', 'wasteland']
  }),
  spell_exam_top_student: personaFit('weak', {
    strong: ['fantasy', 'institutional'],
    usable: ['mythic_epic', 'urban_life', 'adventure'],
    fusion: ['xianxia', 'surreal'],
    weak: ['cyberpunk', 'war_military', 'wasteland']
  }),
  summoning_circle_prefect: personaFit('weak', {
    strong: ['fantasy', 'institutional'],
    usable: ['mythic_epic', 'adventure'],
    fusion: ['dark_fantasy', 'horror'],
    weak: ['cyberpunk', 'fashion_idol', 'wasteland']
  }),
  dream_divination_teacher: personaFit('weak', {
    strong: ['fantasy', 'real_professional', 'institutional'],
    usable: ['mythic_epic', 'religious_ritual'],
    fusion: ['surreal', 'dark_fantasy'],
    weak: ['cyberpunk', 'war_military', 'wasteland']
  }),
  battle_mage_cadet: personaFit('weak', {
    strong: ['fantasy', 'war_military', 'institutional'],
    usable: ['mythic_epic', 'adventure'],
    fusion: ['dark_fantasy', 'xianxia'],
    weak: ['urban_life', 'fashion_idol', 'romance']
  }),
  cursed_dormitory_warden: personaFit('weak', {
    strong: ['fantasy', 'institutional', 'horror'],
    usable: ['dark_fantasy', 'real_professional'],
    fusion: ['surreal'],
    weak: ['cyberpunk', 'wasteland', 'fashion_idol']
  }),
  tavern_rogue_girl: personaFit('weak', {
    strong: ['fantasy', 'adventure', 'noir_crime'],
    usable: ['urban_life', 'dark_fantasy'],
    fusion: ['romance'],
    weak: ['court', 'cyberpunk', 'real_professional']
  }),
  shield_sister_paladin: personaFit('weak', {
    strong: ['fantasy', 'religious_ritual', 'war_military'],
    usable: ['adventure', 'dark_fantasy'],
    fusion: ['xianxia'],
    weak: ['cyberpunk', 'urban_life', 'fashion_idol']
  }),
  healing_potion_peddler: personaFit('weak', {
    strong: ['fantasy', 'medical', 'real_professional'],
    usable: ['adventure', 'urban_life'],
    fusion: ['dark_fantasy'],
    weak: ['court', 'cyberpunk', 'war_military']
  }),
  monster_loot_appraiser: personaFit('weak', {
    strong: ['fantasy', 'real_professional', 'adventure'],
    usable: ['urban_life', 'noir_crime'],
    fusion: ['dark_fantasy'],
    weak: ['court', 'cyberpunk', 'romance']
  }),
  retired_dragon_slayer_innkeeper: personaFit('weak', {
    strong: ['fantasy', 'adventure', 'real_professional'],
    usable: ['urban_life', 'mythic_epic'],
    fusion: ['romance', 'dark_fantasy'],
    weak: ['court', 'cyberpunk', 'fashion_idol']
  }),
  moonlit_elven_diplomat: personaFit('weak', {
    strong: ['fantasy', 'court', 'real_professional'],
    usable: ['ecological', 'romance', 'mythic_epic'],
    fusion: ['dark_fantasy'],
    weak: ['cyberpunk', 'wasteland', 'war_military']
  }),
  moss_crowned_healer: personaFit('weak', {
    strong: ['fantasy', 'ecological', 'medical'],
    usable: ['mythic_epic', 'court'],
    fusion: ['xianxia', 'dark_fantasy'],
    weak: ['cyberpunk', 'wasteland', 'war_military']
  }),
  half_fae_courtier: personaFit('weak', {
    strong: ['fantasy', 'court', 'ecological'],
    usable: ['romance', 'mythic_epic'],
    fusion: ['dark_fantasy', 'surreal'],
    weak: ['cyberpunk', 'wasteland', 'war_military']
  }),
  autumn_court_assassin: personaFit('weak', {
    strong: ['fantasy', 'court', 'noir_crime'],
    usable: ['ecological', 'adventure', 'dark_fantasy'],
    fusion: ['romance'],
    weak: ['cyberpunk', 'wasteland', 'real_professional']
  }),
  ancient_tree_librarian: personaFit('weak', {
    strong: ['fantasy', 'ecological', 'institutional'],
    usable: ['mythic_epic', 'real_professional'],
    fusion: ['xianxia', 'surreal'],
    weak: ['cyberpunk', 'wasteland', 'war_military']
  }),
  winter_elven_executioner: personaFit('weak', {
    strong: ['fantasy', 'court', 'war_military'],
    usable: ['ecological', 'dark_fantasy'],
    fusion: ['horror'],
    weak: ['urban_life', 'cyberpunk', 'romance']
  }),
  wyvern_stable_girl: personaFit('weak', {
    strong: ['fantasy', 'real_professional', 'ecological'],
    usable: ['adventure', 'mythic_epic'],
    fusion: ['war_military'],
    weak: ['court', 'cyberpunk', 'romance']
  }),
  sea_serpent_harpooner: personaFit('weak', {
    strong: ['fantasy', 'adventure', 'ecological'],
    usable: ['mythic_epic', 'war_military'],
    fusion: ['dark_fantasy'],
    weak: ['court', 'urban_life', 'fashion_idol']
  }),
  griffin_knight_groom: personaFit('weak', {
    strong: ['fantasy', 'war_military', 'adventure'],
    usable: ['mythic_epic', 'real_professional'],
    fusion: ['court'],
    weak: ['urban_life', 'cyberpunk', 'romance']
  }),
  phoenix_ash_priestess: personaFit('weak', {
    strong: ['fantasy', 'religious_ritual', 'mythic_epic'],
    usable: ['dark_fantasy', 'adventure'],
    fusion: ['xianxia'],
    weak: ['urban_life', 'cyberpunk', 'real_professional']
  }),
  chimera_breeder: personaFit('weak', {
    strong: ['fantasy', 'biopunk', 'body_horror'],
    usable: ['ecological', 'real_professional', 'adventure'],
    fusion: ['dark_fantasy'],
    weak: ['court', 'romance', 'urban_life']
  }),
  manticore_poison_apothecary: personaFit('weak', {
    strong: ['fantasy', 'medical', 'body_horror'],
    usable: ['dark_fantasy', 'real_professional', 'noir_crime'],
    fusion: ['biopunk'],
    weak: ['court', 'romance', 'cyberpunk']
  }),
  dragon_egg_smuggler: personaFit('weak', {
    strong: ['fantasy', 'noir_crime', 'adventure'],
    usable: ['mythic_epic', 'dark_fantasy'],
    fusion: ['war_military'],
    weak: ['court', 'romance', 'real_professional']
  }),
  fox_spirit_courtesan: personaFit('weak', {
    strong: ['fantasy', 'historical', 'fashion_idol'],
    usable: ['xianxia', 'romance', 'boudoir_aesthetic'],
    fusion: ['surreal', 'dark_fantasy'],
    weak: ['cyberpunk', 'war_military', 'wasteland']
  }),
  shushan_sword_immortal: personaFit('weak', {
    strong: ['xianxia', 'fantasy', 'wuxia'],
    usable: ['mythic_epic', 'religious_ritual', 'historical'],
    fusion: ['dark_fantasy'],
    weak: ['cyberpunk', 'urban_life', 'wasteland']
  }),
  wandering_daoist_exorcist: personaFit('weak', {
    strong: ['xianxia', 'religious_ritual', 'wuxia'],
    usable: ['fantasy', 'historical', 'horror'],
    fusion: ['dark_fantasy'],
    weak: ['cyberpunk', 'fashion_idol', 'wasteland']
  }),
  jiangshi_bride: personaFit('weak', {
    strong: ['fantasy', 'horror', 'romance'],
    usable: ['xianxia', 'historical', 'religious_ritual'],
    fusion: ['dark_fantasy'],
    weak: ['cyberpunk', 'war_military', 'wasteland']
  }),
  faceless_noh_actor: personaFit('weak', {
    strong: ['fantasy', 'historical', 'fashion_idol'],
    usable: ['religious_ritual', 'surreal', 'horror'],
    fusion: ['dark_fantasy'],
    weak: ['cyberpunk', 'war_military', 'wasteland']
  }),
  celtic_fae_bride: personaFit('weak', {
    strong: ['fantasy', 'ecological', 'romance'],
    usable: ['mythic_epic', 'dark_fantasy'],
    fusion: ['surreal'],
    weak: ['war_military', 'cyberpunk', 'real_professional']
  }),
  thorn_court_lawyer: personaFit('weak', {
    strong: ['fantasy', 'court', 'real_professional'],
    usable: ['ecological', 'romance'],
    fusion: ['dark_fantasy', 'surreal'],
    weak: ['war_military', 'cyberpunk', 'wasteland']
  }),
  forest_debt_collector: personaFit('weak', {
    strong: ['fantasy', 'noir_crime', 'ecological'],
    usable: ['court', 'real_professional'],
    fusion: ['dark_fantasy', 'surreal'],
    weak: ['war_military', 'cyberpunk', 'romance']
  }),
  moon_milk_nurse: personaFit('weak', {
    strong: ['fantasy', 'medical', 'ecological'],
    usable: ['romance', 'mythic_epic'],
    fusion: ['surreal', 'dark_fantasy'],
    weak: ['war_military', 'cyberpunk', 'wasteland']
  }),
  blood_contract_notary: personaFit('weak', {
    strong: ['dark_fantasy', 'real_professional', 'religious_ritual'],
    usable: ['horror', 'fantasy', 'institutional'],
    fusion: ['surreal'],
    weak: ['romance', 'urban_life', 'fashion_idol']
  }),
  necromancer_medical_student: personaFit('weak', {
    strong: ['dark_fantasy', 'medical', 'horror'],
    usable: ['body_horror', 'fantasy', 'institutional'],
    fusion: ['surreal'],
    weak: ['romance', 'fashion_idol', 'court']
  }),
  graveyard_perfumer: personaFit('weak', {
    strong: ['dark_fantasy', 'horror', 'real_professional'],
    usable: ['fashion_idol', 'body_horror'],
    fusion: ['surreal', 'romance'],
    weak: ['war_military', 'cyberpunk', 'wasteland']
  }),
  curse_removal_surgeon: personaFit('weak', {
    strong: ['dark_fantasy', 'medical', 'body_horror'],
    usable: ['horror', 'fantasy', 'real_professional'],
    fusion: ['surreal'],
    weak: ['romance', 'fashion_idol', 'court']
  }),
  demonology_court_expert: personaFit('weak', {
    strong: ['dark_fantasy', 'court', 'real_professional'],
    usable: ['horror', 'religious_ritual', 'fantasy'],
    fusion: ['surreal'],
    weak: ['romance', 'urban_life', 'fashion_idol']
  }),
  forbidden_star_astronomer: personaFit('weak', {
    strong: ['dark_fantasy', 'real_professional', 'cosmic_horror'],
    usable: ['horror', 'fantasy', 'science_fiction'],
    fusion: ['surreal'],
    weak: ['romance', 'fashion_idol', 'court']
  }),
  sacrificial_tailor: personaFit('weak', {
    strong: ['dark_fantasy', 'religious_ritual', 'real_professional'],
    usable: ['horror', 'fashion_idol', 'fantasy'],
    fusion: ['body_horror'],
    weak: ['romance', 'urban_life', 'cyberpunk']
  }),
  underworld_bride_heroine: personaFit('weak', {
    strong: ['mythic_epic', 'fantasy', 'romance'],
    usable: ['dark_fantasy', 'adventure'],
    fusion: ['horror'],
    weak: ['urban_life', 'cyberpunk', 'real_professional']
  }),
  prophecy_refusing_queen: personaFit('weak', {
    strong: ['mythic_epic', 'fantasy', 'court'],
    usable: ['adventure', 'romance', 'war_military'],
    fusion: ['dark_fantasy'],
    weak: ['urban_life', 'cyberpunk', 'real_professional']
  }),
  wolf_cub_tamer: personaFit('weak', {
    strong: ['fantasy', 'ecological', 'real_professional'],
    usable: ['adventure', 'dark_fantasy'],
    fusion: ['xianxia'],
    weak: ['court', 'cyberpunk', 'urban_life']
  }),
  kraken_orphan_caretaker: personaFit('weak', {
    strong: ['fantasy', 'ecological', 'medical'],
    usable: ['real_professional', 'adventure', 'body_horror'],
    fusion: ['dark_fantasy'],
    weak: ['court', 'cyberpunk', 'romance']
  }),
  monster_school_teacher: personaFit('weak', {
    strong: ['fantasy', 'institutional', 'real_professional'],
    usable: ['ecological', 'adventure'],
    fusion: ['surreal', 'dark_fantasy'],
    weak: ['court', 'cyberpunk', 'war_military']
  }),
  haunted_manor_governess: personaFit('weak', {
    strong: ['dark_fantasy', 'real_professional', 'horror'],
    usable: ['court', 'institutional', 'fantasy'],
    fusion: ['romance'],
    weak: ['cyberpunk', 'wasteland', 'war_military']
  }),
  immortal_family_butler: personaFit('weak', {
    strong: ['dark_fantasy', 'court', 'real_professional'],
    usable: ['horror', 'fantasy'],
    fusion: ['surreal'],
    weak: ['urban_life', 'cyberpunk', 'wasteland']
  }),
  bloodline_curse_lawyer: personaFit('weak', {
    strong: ['dark_fantasy', 'real_professional', 'court'],
    usable: ['horror', 'institutional', 'fantasy'],
    fusion: ['surreal'],
    weak: ['urban_life', 'cyberpunk', 'wasteland']
  })
};

const seeds: ExplicitPersonaSeed[] = [
  { id: "white_robed_wizard", name: "白袍巫师", nameEn: "White-Robed Wizard", group: "A. 魔法学院 / 法师秩序", groupEn: "A. Magic Academy / Mage Order", def: "第一识别是学院长者式白袍巫师。造型入口：洗旧白袍、长杖、书页灰尘、温和但不可违抗的眼神和被学生让出道路的站位。母题：知识权威被穿成洁净、克制、可传承的身体。视觉证据：袖口墨迹、古书皮扣、木杖磨痕、银白发丝和课堂式抬手。边界：避免普通魔法老人或只靠发光法杖成立。", defEn: "First read: an academy elder white-robed wizard. Styling entry: worn white robe, long staff, book dust, gentle but unquestionable eyes, and students making way. Knowledge authority is worn as clean restraint and lineage. Visual evidence: inked cuffs, old book straps, staff wear, silver hair, and a teaching hand gesture. Boundary: avoid generic old mage or glowing-staff shorthand.", ontologyLevel: 3, tags: ["wizard", "academy", "white_robe"] },
  { id: "black_library_apprentice", name: "黑图书馆学徒", nameEn: "Black-Library Apprentice", group: "A. 魔法学院 / 法师秩序", groupEn: "A. Magic Academy / Mage Order", def: "第一识别是偷读禁书的黑图书馆学徒。造型入口：黑校袍、借书链、墨迹手指、紧张眼袋和把书抱在胸前的防御姿态。母题：好奇心和学院禁令在年轻身体上拉扯。视觉证据：链扣书签、暗色藏书票、指尖黑墨、半遮脸的书脊和随时准备逃跑的脚尖。边界：避免泛黑袍巫师或可爱读书少女化。", defEn: "First read: a forbidden-book apprentice in a black library. Styling entry: black school robe, book chain, inked fingers, tense under-eyes, and a defensive book-holding posture. Curiosity fights academy prohibition. Visual evidence: chain bookmark, dark ex-libris, black ink fingertips, half-hidden face behind a spine, and feet ready to run. Boundary: avoid generic black-robed mage or cute reader framing.", ontologyLevel: 3, risk: "medium", tags: ["apprentice", "library", "forbidden_book"] },
  { id: "wand_shop_heir", name: "魔杖店继承人", nameEn: "Wand-Shop Heir", group: "A. 魔法学院 / 法师秩序", groupEn: "A. Magic Academy / Mage Order", def: "第一识别是家族魔杖店的年轻继承人。造型入口：木屑围裙、测量尺、成排细长盒子、被木材染色的指节和温柔但挑剔的服务表情。母题：魔法被还原成手艺、售卖和家族信誉。视觉证据：不同木纹样本、杖芯标签、袖口细尘、柜台钥匙和替顾客量手腕的动作。边界：避免把他写成普通商人或全能法师。", defEn: "First read: the young heir of a family wand shop. Styling entry: sawdust apron, measuring ruler, rows of slim boxes, wood-stained knuckles, and a gentle picky service face. Magic becomes craft, trade, and family reputation. Visual evidence: wood samples, core labels, dusty cuffs, counter key, and wrist-measuring gesture. Boundary: avoid generic merchant or all-powerful wizard.", ontologyLevel: 2, tags: ["wand", "shop", "heir"] },
  { id: "spell_exam_top_student", name: "咒术考试第一名", nameEn: "Top Spell-Exam Student", group: "A. 魔法学院 / 法师秩序", groupEn: "A. Magic Academy / Mage Order", def: "第一识别是把魔法当升学制度赢下来的优等生。造型入口：整齐校袍、满页批注、过度用力的握笔手、干净领结和焦虑却骄傲的直背。母题：天赋被考试、分数和排名驯化。视觉证据：咒式草稿、第一名徽章、发丝别针、粉笔灰和盯着评分表的眼神。边界：避免普通学院少女或天才主角光环。", defEn: "First read: a top student who wins magic through exams. Styling entry: neat robe, annotated pages, tense writing hand, clean bow, and anxious proud posture. Talent is disciplined by scores and rank. Visual evidence: spell drafts, first-place badge, hair pin, chalk dust, and eyes fixed on grading sheets. Boundary: avoid generic academy girl or prodigy aura.", ontologyLevel: 2, tags: ["student", "exam", "spell"] },
  { id: "alchemy_lab_dropout", name: "炼金实验室退学生", nameEn: "Alchemy-Lab Dropout", group: "A. 魔法学院 / 法师秩序", groupEn: "A. Magic Academy / Mage Order", def: "第一识别是被炼金实验室开除的危险天才。造型入口：烧焦袖口、试管腰包、没摘干净的校徽、乱发和看起来刚从爆炸现场逃出的笑。母题：学院知识无法完全容纳实验冲动。视觉证据：破护目镜、酸蚀围裙、半成品徽章、彩色药剂渍和不愿道歉的站姿。边界：避免普通疯科学家或单纯邋遢学生。", defEn: "First read: a dangerous genius expelled from alchemy lab. Styling entry: scorched cuffs, vial belt, half-removed school badge, messy hair, and a smile fresh from an explosion. Academy knowledge cannot contain experimental impulse. Visual evidence: cracked goggles, acid apron, unfinished badge, potion stains, and a stance that refuses apology. Boundary: avoid generic mad scientist or sloppy student.", ontologyLevel: 3, tags: ["alchemy", "dropout", "lab"] },
  { id: "summoning_circle_prefect", name: "召唤阵风纪委员", nameEn: "Summoning-Circle Prefect", group: "A. 魔法学院 / 法师秩序", groupEn: "A. Magic Academy / Mage Order", def: "第一识别是专门管召唤事故的风纪委员。造型入口：校纪臂章、粉笔圆阵、封印夹板、冷静眼镜和站在危险阵边仍不后退的身体。母题：青春校园里出现了制度化的超自然安保。视觉证据：红色违规单、阵线粉尘、压住咒纸的靴尖、短杖和制止手势。边界：避免普通班干部或战斗法师化。", defEn: "First read: a prefect who manages summoning accidents. Styling entry: discipline armband, chalk circles, sealing clipboard, calm glasses, and a body that does not step back from danger. Supernatural safety becomes school discipline. Visual evidence: red violation slips, chalk dust, boot pinning a talisman, short wand, and stopping gesture. Boundary: avoid generic class monitor or battle-mage framing.", ontologyLevel: 3, tags: ["summoning", "prefect", "academy"] },
  { id: "dream_divination_teacher", name: "梦占课教师", nameEn: "Dream-Divination Teacher", group: "A. 魔法学院 / 法师秩序", groupEn: "A. Magic Academy / Mage Order", def: "第一识别是把梦境整理成课程的梦占教师。造型入口：睡袍式长衫、星象杯、半垂眼、软底鞋和像刚从别人的梦里走出的慢动作。母题：不可控的梦被学院变成可批改的知识。视觉证据：梦境记录本、月相茶渍、细银链、课堂沙漏和轻声点名的手。边界：避免普通占卜师或朦胧美人。", defEn: "First read: a dream-divination teacher who turns dreams into coursework. Styling entry: robe-like sleepwear, astrological cup, lowered eyes, soft shoes, and movements as if just leaving another person's dream. Uncontrolled dreams become gradable knowledge. Visual evidence: dream notebook, moon-phase tea stains, fine silver chain, classroom hourglass, and quiet roll-call hand. Boundary: avoid generic fortune teller or hazy beauty.", ontologyLevel: 3, tags: ["divination", "teacher", "dream"] },
  { id: "battle_mage_cadet", name: "战斗法师学员", nameEn: "Battle-Mage Cadet", group: "A. 魔法学院 / 法师秩序", groupEn: "A. Magic Academy / Mage Order", def: "第一识别是仍带学生感的战斗法师学员。造型入口：加固校袍、训练护具、短杖、膝盖擦痕和把咒语练成肌肉记忆的绷紧肩线。母题：魔法教育被军事训练重新塑形。视觉证据：护臂符文、训练编号、磨损靴、课本与武器同挂腰侧、准备冲刺的前倾。边界：避免全套士兵化或普通魔法少年。", defEn: "First read: a battle-mage cadet still visibly a student. Styling entry: reinforced school robe, training pads, short wand, scratched knees, and tense shoulders drilling spells into muscle memory. Magic education is reshaped as military practice. Visual evidence: bracer runes, training number, worn boots, textbook beside weapon, and forward sprint tension. Boundary: avoid full soldier conversion or generic magic youth.", ontologyLevel: 3, risk: "medium", tags: ["battle_mage", "cadet", "training"] },
  { id: "cursed_dormitory_warden", name: "诅咒宿舍舍监", nameEn: "Cursed-Dormitory Warden", group: "A. 魔法学院 / 法师秩序", groupEn: "A. Magic Academy / Mage Order", def: "第一识别是守着闹鬼宿舍的阴郁舍监。造型入口：旧校袍、沉重钥匙串、走廊灯影、长期失眠的脸和知道太多学生秘密的沉默。母题：校园日常被宿舍怪谈和管理权力污染。视觉证据：门牌编号、护身符、床单影子、记录簿和半夜巡查的手电光。边界：避免普通宿管或恐怖鬼怪主角。", defEn: "First read: a gloomy warden of a cursed dormitory. Styling entry: old school robe, heavy key ring, corridor light, sleepless face, and silence from knowing too many student secrets. Campus routine is stained by hauntings and authority. Visual evidence: room numbers, charms, bed-sheet shadows, logbook, and midnight flashlight. Boundary: avoid generic dorm manager or horror ghost lead.", ontologyLevel: 3, risk: "medium", tags: ["warden", "curse", "dormitory"] },
  { id: "star_map_graduate", name: "星图毕业生", nameEn: "Star-Map Graduate", group: "A. 魔法学院 / 法师秩序", groupEn: "A. Magic Academy / Mage Order", def: "第一识别是刚离开学院的星图毕业生。造型入口：毕业袍、星图卷轴、旅行箱、清澈野心和站在校门外第一次面对未知世界的侧脸。母题：完成教育后的魔法身体即将进入真实世界。视觉证据：卷轴绳结、毕业徽、旧课本、星尘纸屑和一只手扶着行李。边界：避免普通毕业照或星空法师。", defEn: "First read: a star-map graduate just leaving the academy. Styling entry: graduation robe, star-map scroll, travel case, clear ambition, and a profile facing the unknown outside the gate. The trained magical body enters the real world. Visual evidence: scroll cord, graduation pin, old textbooks, stardust paper, and one hand on luggage. Boundary: avoid ordinary graduation portrait or starry mage.", ontologyLevel: 2, tags: ["graduate", "star_map", "academy"] },

  { id: "dungeon_party_leader", name: "地下城小队队长", nameEn: "Dungeon Party Leader", group: "B. 地下城 / 冒险小队", groupEn: "B. Dungeon / Adventuring Party", def: "第一识别是站在迷宫入口分配风险的小队队长。造型入口：旧皮甲、折痕地图、修补披风、短促手势和被同伴视线压住的责任感。母题：冒险不是个人帅气，而是队伍生存管理。视觉证据：路线标记、磨损护具、腰间绳索、清点物资的手和警戒侧脸。边界：避免普通游戏职业卡或孤胆英雄。", defEn: "First read: a party leader assigning risk at the dungeon entrance. Styling entry: old leather armor, creased map, patched cloak, clipped gestures, and responsibility under the team's gaze. Adventure is survival management, not solo coolness. Visual evidence: route marks, worn guards, waist rope, hand checking supplies, and alert profile. Boundary: avoid generic game class card or lone hero.", ontologyLevel: 2, tags: ["dungeon", "leader", "adventurer"] },
  { id: "half_elven_ranger", name: "半精灵游侠", nameEn: "Half-Elven Ranger", group: "B. 地下城 / 冒险小队", groupEn: "B. Dungeon / Adventuring Party", def: "第一识别是夹在森林与人类城镇之间的半精灵游侠。造型入口：尖耳边缘、旅行斗篷、长弓、草木刮痕和习惯站在队伍外围的沉默。母题：混血身份被转成侦察、距离和野外判断。视觉证据：羽箭、皮靴泥痕、树叶扣、浅色眼神和半转身听声的姿态。边界：避免漂亮长耳模特或普通弓箭手。", defEn: "First read: a half-elven ranger between forest and human town. Styling entry: pointed ear edges, travel cloak, bow, plant scratches, and silent habit of standing at the party edge. Mixed lineage becomes scouting distance and field judgment. Visual evidence: feathered arrows, muddy boots, leaf clasp, pale gaze, and half-turned listening posture. Boundary: avoid pretty long-eared model or generic archer.", ontologyLevel: 4, tags: ["half_elf", "ranger", "bow"] },
  { id: "tavern_rogue_girl", name: "酒馆盗贼少女", nameEn: "Tavern Rogue Girl", group: "B. 地下城 / 冒险小队", groupEn: "B. Dungeon / Adventuring Party", def: "第一识别是在酒馆桌边接活的年轻盗贼。造型入口：短斗篷、暗袋、骰子、斜坐姿和随时观察出口的挑衅笑。母题：生存技巧被酒馆任务经济塑造成魅力。视觉证据：匕首护套、磨旧皮靴、半遮眼刘海、酒杯反光和手指压着任务纸。边界：避免未成年化、普通可爱冒险者或纯偷窃角色。", defEn: "First read: a young rogue taking jobs at a tavern table. Styling entry: short cloak, hidden pockets, dice, slanted seat, and a teasing smile always checking exits. Survival skill becomes charm inside tavern job economy. Visual evidence: dagger sheath, worn boots, one-eye fringe, glass reflection, and fingers pinning a quest note. Boundary: avoid child-coded framing, cute adventurer, or pure thief.", ontologyLevel: 2, risk: "medium", tags: ["rogue", "tavern", "girl"] },
  { id: "shield_sister_paladin", name: "盾修女圣骑士", nameEn: "Shield-Sister Paladin", group: "B. 地下城 / 冒险小队", groupEn: "B. Dungeon / Adventuring Party", def: "第一识别是把修会誓言落实为盾牌位置的圣骑士修女。造型入口：头巾、链甲、宽盾、低声祷告和先挡住同伴再拔剑的身体反应。母题：信仰变成保护动作，而不是圣光装饰。视觉证据：盾面圣徽、磨损膝甲、绷带包、压住恐惧的嘴角和半跪防御姿态。边界：避免普通战斗修女或发光女骑士。", defEn: "First read: a paladin sister whose vows become shield placement. Styling entry: veil, chainmail, broad shield, low prayer, and a body blocking first before drawing a sword. Faith becomes protective action, not holy decoration. Visual evidence: shield sigil, worn knee armor, bandage pack, controlled mouth line, and half-kneeling guard. Boundary: avoid generic battle nun or glowing lady knight.", ontologyLevel: 3, tags: ["paladin", "shield", "sister"] },
  { id: "goblin_market_guide", name: "魔怪市场向导", nameEn: "Goblin-Market Guide", group: "B. 地下城 / 冒险小队", groupEn: "B. Dungeon / Adventuring Party", def: "第一识别是熟悉地下黑市规矩的魔怪市场向导。造型入口：夸张背包、零钱袋、通行牌、快速眨眼和在拥挤摊位间钻行的身体。母题：怪物世界的商业规则被穿成狡黠服务业。视觉证据：假货标签、兽骨挂饰、算钱手势、偷笑嘴角和不断回头催促的眼神。边界：避免普通商贩或丑化怪物随从。", defEn: "First read: a guide who knows goblin-market rules. Styling entry: oversized pack, coin pouch, pass token, rapid blinking, and a body slipping between crowded stalls. Monster commerce becomes sly service work. Visual evidence: fake labels, bone trinkets, counting gesture, smirk, and glances urging clients to move. Boundary: avoid generic vendor or caricatured monster sidekick.", ontologyLevel: 3, risk: "medium", tags: ["market", "guide", "underground"] },
  { id: "healing_potion_peddler", name: "治疗药水小贩", nameEn: "Healing-Potion Peddler", group: "B. 地下城 / 冒险小队", groupEn: "B. Dungeon / Adventuring Party", def: "第一识别是在伤员旁做生意的治疗药水小贩。造型入口：玻璃瓶木箱、油布围裙、精明眼神和把同情压成报价的职业微笑。母题：冒险损伤被转化成流动医疗买卖。视觉证据：瓶塞标签、红蓝药液、破布零钱、临时摊架和伸手展示疗效的动作。边界：避免普通治愈师或可爱药剂店员。", defEn: "First read: a healing-potion peddler selling beside the wounded. Styling entry: crate of glass bottles, oilcloth apron, sharp eyes, and a smile turning sympathy into price. Adventure injury becomes mobile medical trade. Visual evidence: cork labels, red-blue liquids, rag-wrapped coins, temporary stall, and a hand demonstrating effect. Boundary: avoid generic healer or cute potion clerk.", ontologyLevel: 2, tags: ["potion", "peddler", "healer"] },
  { id: "cursed_sword_bearer", name: "诅咒剑持有者", nameEn: "Cursed-Sword Bearer", group: "B. 地下城 / 冒险小队", groupEn: "B. Dungeon / Adventuring Party", def: "第一识别是被武器慢慢改写的诅咒剑持有者。造型入口：黑色剑鞘、手臂纹路、疲惫眼神和总把持剑手藏在身后的克制。母题：装备不再是工具，而是侵入人格的契约。视觉证据：封剑布、血色指节、异样影子、队友保持距离和抗拒拔剑的姿态。边界：避免帅气魔剑主角或单纯暗黑战士。", defEn: "First read: a cursed-sword bearer slowly rewritten by the weapon. Styling entry: black scabbard, arm markings, tired eyes, and restraint hiding the sword hand behind the body. Gear becomes personality-invading contract. Visual evidence: sealing cloth, red knuckles, strange shadow, teammates keeping distance, and reluctance to draw. Boundary: avoid cool magic-sword hero or generic dark warrior.", ontologyLevel: 4, risk: "high", tags: ["cursed_sword", "bearer", "adventurer"] },
  { id: "map_eating_oracle_child", name: "吞地图预言童", nameEn: "Map-Eating Oracle Child", group: "B. 地下城 / 冒险小队", groupEn: "B. Dungeon / Adventuring Party", def: "第一识别是通过吞食路线获得预言的地图预言童。造型入口：破地图、嘴角墨迹、过大眼睛、被成人保护的站位和对方向产生生理反应的身体。母题：导航知识变成怪异消化。视觉证据：纸屑舌尖、路线纹手指、护身披肩、成年人伸出的手和看向不存在出口的眼。边界：保持儿童保护性呈现，避免猎奇吞食或恐怖娃娃化。", defEn: "First read: a map-eating oracle child who digests routes into prophecy. Styling entry: torn maps, inked mouth corners, oversized eyes, protected placement among adults, and a body reacting to direction. Navigation knowledge becomes strange digestion. Visual evidence: paper bits on tongue, route-lined fingers, protective shawl, adult hands nearby, and eyes toward an impossible exit. Boundary: keep protective child framing; avoid grotesque eating or horror-doll treatment.", ontologyLevel: 4, risk: "medium", tags: ["oracle", "map", "child"] },
  { id: "monster_loot_appraiser", name: "魔物战利品鉴定师", nameEn: "Monster-Loot Appraiser", group: "B. 地下城 / 冒险小队", groupEn: "B. Dungeon / Adventuring Party", def: "第一识别是把怪物残骸变成价格的战利品鉴定师。造型入口：放大镜、样本盒、皮围裙、鼻梁皱纹和面对血腥材料仍保持会计般平静的手。母题：冒险后的怪物性被商品系统接管。视觉证据：编号标签、牙齿样本、称重秤、账本、手套污痕和低头估价。边界：避免怪物猎人或普通古董商。", defEn: "First read: a monster-loot appraiser turning remains into prices. Styling entry: magnifier, specimen boxes, leather apron, wrinkled nose bridge, and accountant-calm hands before grisly material. Monster aftermath is absorbed by commodity systems. Visual evidence: number tags, tooth samples, scale, ledger, stained gloves, and downward appraisal posture. Boundary: avoid monster hunter or generic antique dealer.", ontologyLevel: 3, risk: "medium", tags: ["loot", "appraiser", "monster"] },
  { id: "retired_dragon_slayer_innkeeper", name: "退休屠龙者旅店老板", nameEn: "Retired Dragon-Slayer Innkeeper", group: "B. 地下城 / 冒险小队", groupEn: "B. Dungeon / Adventuring Party", def: "第一识别是把英雄史诗藏进日常酒馆的退休屠龙者。造型入口：围裙、旧剑挂墙、烧伤疤痕、稳重手臂和听见龙字时短暂停顿的眼。母题：传奇身体被重新训练成服务业。视觉证据：吧台木纹、龙鳞杯垫、厚掌、温酒动作和墙上被故意挂歪的战利品。边界：避免普通旅店老板或仍在冒险的屠龙英雄。", defEn: "First read: a retired dragon slayer hiding an epic inside an inn. Styling entry: apron, old sword on wall, burn scars, steady arms, and a brief pause at the word dragon. A legendary body is retrained into hospitality. Visual evidence: bar wood grain, dragon-scale coaster, heavy hands, warming wine, and a trophy hung deliberately crooked. Boundary: avoid generic innkeeper or active dragon hero.", ontologyLevel: 3, tags: ["dragon_slayer", "innkeeper", "retired"] },

  { id: "silver_leaf_prince", name: "银叶精灵王子", nameEn: "Silver-Leaf Elven Prince", group: "C. 精灵 / 森林宫廷", groupEn: "C. Elven / Forest Court", def: "第一识别是被古老森林礼法养大的银叶精灵王子。造型入口：银叶冠、细长轮廓、尖耳、淡漠礼仪和不习惯被短寿者直视的冷眼。母题：长寿王权把美感变成距离。视觉证据：叶脉刺绣、长袍垂线、家族胸针、无声步伐和微微抬起的下巴。边界：避免普通长耳美少年或自然风模特。", defEn: "First read: a silver-leaf elven prince raised by ancient forest etiquette. Styling entry: silver leaf crown, elongated silhouette, pointed ears, distant manners, and cold eyes unused to short-lived gaze. Longevity turns beauty into distance. Visual evidence: leaf-vein embroidery, vertical robe lines, family brooch, silent steps, and a slightly lifted chin. Boundary: avoid generic pretty elf boy or nature model.", ontologyLevel: 4, tags: ["elf", "prince", "forest"] },
  { id: "exiled_elven_duchess", name: "流亡精灵女公爵", nameEn: "Exiled Elven Duchess", group: "C. 精灵 / 森林宫廷", groupEn: "C. Elven / Forest Court", def: "第一识别是仍保持宫廷姿态的流亡精灵女公爵。造型入口：破损礼服、家族胸针、长耳饰、旅途灰尘和被驱逐后仍不肯放低的肩颈。母题：阶层优雅在失去领地后变成疲惫防线。视觉证据：裂开的银线、旧行李、手套补丁、贵族站姿和拒绝求助的表情。边界：避免落难公主或普通森林贵妇。", defEn: "First read: an exiled elven duchess who still holds court posture. Styling entry: damaged gown, family brooch, long ear ornament, travel dust, and shoulders refusing to lower after exile. Class elegance becomes a tired defense after losing land. Visual evidence: split silver thread, old luggage, patched gloves, noble stance, and refusal to ask for help. Boundary: avoid fallen princess or generic forest lady.", ontologyLevel: 4, risk: "medium", tags: ["elf", "duchess", "exile"] },
  { id: "forest_law_archer", name: "森林律法弓手", nameEn: "Forest-Law Archer", group: "C. 精灵 / 森林宫廷", groupEn: "C. Elven / Forest Court", def: "第一识别是替森林执行古老法律的精灵弓手。造型入口：长弓、叶形披风、审判般平静的眼、无声站位和从树影里指向罪人的手。母题：自然不是温柔背景，而是有执法权的秩序。视觉证据：刻文箭、树皮护臂、绿色封印、脚边落叶和不带怒气的拉弦。边界：避免普通游侠或可爱森林精灵。", defEn: "First read: an elven archer enforcing ancient forest law. Styling entry: longbow, leaf cloak, calmly judging eyes, silent placement, and a hand pointing from tree shadow. Nature is not gentle scenery but legal order. Visual evidence: inscribed arrows, bark bracers, green seals, leaves by the feet, and angerless draw. Boundary: avoid generic ranger or cute forest elf.", ontologyLevel: 4, tags: ["elf", "archer", "law"] },
  { id: "moonlit_elven_diplomat", name: "月光精灵外交官", nameEn: "Moonlit Elven Diplomat", group: "C. 精灵 / 森林宫廷", groupEn: "C. Elven / Forest Court", def: "第一识别是在短寿种族间谈判的月光精灵外交官。造型入口：月白长袍、细银链、无波表情、礼节性距离和把每句话说得像百年协议的慢语速。母题：长寿时间感进入外交身体。视觉证据：银色文书筒、冷光耳饰、合拢双手、薄唇和不坐太近的椅距。边界：避免普通精灵贵族或柔美月光角色。", defEn: "First read: a moonlit elven diplomat negotiating among short-lived peoples. Styling entry: moon-white robe, fine silver chains, calm face, ceremonial distance, and speech paced like century treaties. Longevity enters diplomacy. Visual evidence: silver document tube, cold earrings, folded hands, thin lips, and chairs kept apart. Boundary: avoid generic elven noble or soft moonlight figure.", ontologyLevel: 4, tags: ["elf", "diplomat", "moon"] },
  { id: "moss_crowned_healer", name: "苔冠精灵医者", nameEn: "Moss-Crowned Elven Healer", group: "C. 精灵 / 森林宫廷", groupEn: "C. Elven / Forest Court", def: "第一识别是让伤口重新归入森林循环的苔冠医者。造型入口：苔藓冠、草药包、半透明袖口、泥土指尖和触碰病人时像触碰植物根系的轻。母题：治愈不是洁白医疗，而是自然接管破损身体。视觉证据：叶片敷料、藤编药箱、湿绿衣摆、低声安抚和慢慢包扎的手。边界：避免普通森林奶妈或光效治疗师。", defEn: "First read: a moss-crowned healer returning wounds to forest cycles. Styling entry: moss crown, herb pouch, translucent cuffs, soil fingertips, and a touch as light as handling roots. Healing is nature reclaiming damaged bodies, not white medicine. Visual evidence: leaf dressings, vine medicine box, damp green hem, low soothing voice, and slow bandaging hands. Boundary: avoid generic forest nurse or glow healer.", ontologyLevel: 4, tags: ["elf", "healer", "moss"] },
  { id: "crystal_grove_singer", name: "水晶林地歌者", nameEn: "Crystal-Grove Singer", group: "C. 精灵 / 森林宫廷", groupEn: "C. Elven / Forest Court", def: "第一识别是用声音维护林地结界的水晶歌者。造型入口：晶体耳饰、轻纱、喉部微光、挺直颈线和像在聆听石头回声的表情。母题：歌唱成为森林防御系统的一部分。视觉证据：水晶共鸣片、透明披肩、闭眼高音、脚下符阵和被声音震动的细发。边界：避免普通吟游歌姬或宝石装饰模特。", defEn: "First read: a crystal-grove singer maintaining wards with voice. Styling entry: crystal earrings, light gauze, throat glow, upright neck line, and a face listening to stone echoes. Singing becomes part of forest defense. Visual evidence: resonance crystals, transparent shawl, closed-eye high note, foot sigils, and hair stirred by sound. Boundary: avoid generic bard singer or jewel model.", ontologyLevel: 4, tags: ["elf", "singer", "crystal"] },
  { id: "half_fae_courtier", name: "半妖精宫廷侍臣", nameEn: "Half-Fae Courtier", group: "C. 精灵 / 森林宫廷", groupEn: "C. Elven / Forest Court", def: "第一识别是用语言契约玩弄宫廷关系的半妖精侍臣。造型入口：不对称礼服、尖耳、笑意陷阱、细长手指和永远不把承诺说完整的唇。母题：混血魅力变成礼仪场里的危险语法。视觉证据：双层衣领、契约纸条、隐约翅脉纹、倾身耳语和故意留空的名字牌。边界：避免可爱小妖精或普通宫廷花瓶。", defEn: "First read: a half-fae courtier weaponizing language contracts. Styling entry: asymmetric courtwear, pointed ears, trap-like smile, long fingers, and lips that never finish a promise. Mixed charm becomes dangerous etiquette grammar. Visual evidence: double collar, contract slips, faint wing-vein pattern, leaning whisper, and an intentionally blank name tag. Boundary: avoid cute fairy or generic court ornament.", ontologyLevel: 4, risk: "medium", tags: ["fae", "courtier", "contract"] },
  { id: "autumn_court_assassin", name: "秋宫刺客", nameEn: "Autumn-Court Assassin", group: "C. 精灵 / 森林宫廷", groupEn: "C. Elven / Forest Court", def: "第一识别是把季节衰败穿成暗杀礼仪的秋宫刺客。造型入口：枯叶色斗篷、细刃、无声步伐、干燥指尖和像落叶一样从视线里消失的身体。母题：死亡被宫廷季节法则优雅化。视觉证据：褐金面纱、叶脉刀鞘、枯枝发簪、轻触目标肩后的退步。边界：避免普通忍者、黑衣杀手或秋天装饰角色。", defEn: "First read: an Autumn-Court assassin wearing seasonal decay as etiquette. Styling entry: dead-leaf cloak, thin blade, silent steps, dry fingertips, and a body vanishing like fallen leaves. Death is refined by seasonal court law. Visual evidence: brown-gold veil, leaf-vein sheath, dry-twig hairpin, and retreat after a shoulder touch. Boundary: avoid generic ninja, black assassin, or autumn decoration.", ontologyLevel: 4, risk: "medium", tags: ["autumn_court", "assassin", "elf"] },
  { id: "ancient_tree_librarian", name: "古树图书管理员", nameEn: "Ancient-Tree Librarian", group: "C. 精灵 / 森林宫廷", groupEn: "C. Elven / Forest Court", def: "第一识别是管理活体图书馆的古树管理员。造型入口：树皮书架、藤蔓钥匙、缓慢步伐、过长记忆带来的疲惫眼神和不允许折页的严厉。母题：知识不是书本，而是仍在生长的森林器官。视觉证据：木纹袖口、种子目录、枝状发饰、指尖绿苔和把书页像叶片一样抚平的手。边界：避免普通图书管理员或树人化。", defEn: "First read: an ancient-tree librarian tending a living library. Styling entry: bark shelves, vine keys, slow steps, tired eyes from too much memory, and severity against folding pages. Knowledge is a growing forest organ, not mere books. Visual evidence: woodgrain cuffs, seed catalogue, branch hairpiece, moss fingertips, and hands smoothing pages like leaves. Boundary: avoid generic librarian or full tree-person.", ontologyLevel: 4, tags: ["tree", "librarian", "elf"] },
  { id: "winter_elven_executioner", name: "冬庭精灵处刑人", nameEn: "Winter Elven Executioner", group: "C. 精灵 / 森林宫廷", groupEn: "C. Elven / Forest Court", def: "第一识别是把处刑变成宫廷仪式的冬庭精灵。造型入口：白色面罩、冰银斧、笔直礼袍、没有怒意的眼和像宣读天气一样宣读死亡的冷静。母题：王权暴力被冬季美学冻结。视觉证据：霜白手套、斧刃反光、处刑名单、静止衣摆和过分对称的站姿。边界：避免普通刽子手或冰魔法战士。", defEn: "First read: a Winter-Court elf turning execution into ceremony. Styling entry: white mask, ice-silver axe, straight robe, angerless eyes, and calm announcing death like weather. Royal violence is frozen by winter aesthetics. Visual evidence: frost gloves, axe reflection, execution list, still hem, and overly symmetrical stance. Boundary: avoid generic executioner or ice warrior.", ontologyLevel: 4, risk: "medium", tags: ["winter_court", "executioner", "elf"] },

  { id: "dragon_rider_heir", name: "驯龙继承人", nameEn: "Dragon-Rider Heir", group: "D. 龙裔 / 巨兽血统", groupEn: "D. Dragon-Blood / Great Beast Lineage", def: "第一识别是继承危险巨兽关系的驯龙继承人。造型入口：鞍具、家族龙纹、烧痕手套、年轻但紧绷的肩和被要求不怕火的眼。母题：家族权力建立在人与龙的互相驯服上。视觉证据：骑乘扣具、鳞片徽章、护目镜、焦黑袖口和接近龙蛋时放慢的手。边界：避免普通龙骑士海报或只有龙在背景。", defEn: "First read: a dragon-rider heir inheriting a dangerous beast relation. Styling entry: saddle gear, family dragon crest, burn-marked gloves, young tense shoulders, and eyes trained not to fear fire. Family power rests on mutual taming between human and dragon. Visual evidence: riding buckles, scale badge, goggles, scorched cuffs, and a hand slowing near an egg. Boundary: avoid generic dragon-rider poster or dragon-only backdrop.", ontologyLevel: 4, risk: "medium", tags: ["dragon_rider", "heir", "lineage"] },
  { id: "dragon_blood_paladin", name: "龙血圣骑士", nameEn: "Dragon-Blood Paladin", group: "D. 龙裔 / 巨兽血统", groupEn: "D. Dragon-Blood / Great Beast Lineage", def: "第一识别是把龙血火焰压进誓约纪律的圣骑士。造型入口：鳞片纹章、重甲、誓约剑、胸口热裂纹和努力维持祷告姿势的粗重呼吸。母题：巨兽血统被宗教制度管理。视觉证据：焦痕圣符、鳞纹护颈、发热手甲、剑柄绑带和压低兽性的闭眼。边界：避免普通龙战士或喷火圣骑。", defEn: "First read: a paladin disciplining dragon-blood fire through vows. Styling entry: scale heraldry, heavy armor, oath sword, hot chest cracks, and heavy breathing held inside prayer posture. Beast lineage is managed by religion. Visual evidence: scorched holy mark, scale gorget, heated gauntlets, bound sword grip, and closed eyes suppressing animal force. Boundary: avoid generic dragon warrior or fire paladin.", ontologyLevel: 4, risk: "medium", tags: ["dragon_blood", "paladin", "oath"] },
  { id: "wyvern_stable_girl", name: "飞龙马厩女孩", nameEn: "Wyvern-Stable Girl", group: "D. 龙裔 / 巨兽血统", groupEn: "D. Dragon-Blood / Great Beast Lineage", def: "第一识别是比骑士更懂飞龙习性的马厩女孩。造型入口：厚皮手套、饲料桶、咬痕、围裙和对巨大爪影毫不惊慌的侧脸。母题：巨兽关系首先是照料劳动，而不是骑乘荣耀。视觉证据：羽鳞混合尘、缰绳结、手臂旧伤、兽棚钥匙和轻拍鼻梁的动作。边界：避免可爱饲养员或龙骑士附属角色。", defEn: "First read: a stable girl who knows wyverns better than knights. Styling entry: thick gloves, feed bucket, bite marks, apron, and a profile unfazed by a huge claw shadow. Beast relations begin as care labor, not riding glory. Visual evidence: feather-scale dust, harness knots, old arm scars, stable key, and a gentle nose tap. Boundary: avoid cute handler or accessory to a dragon knight.", ontologyLevel: 3, tags: ["wyvern", "stable", "girl"] },
  { id: "sea_serpent_harpooner", name: "海蛇捕猎人", nameEn: "Sea-Serpent Harpooner", group: "D. 龙裔 / 巨兽血统", groupEn: "D. Dragon-Blood / Great Beast Lineage", def: "第一识别是在神话海兽阴影下谋生的海蛇捕猎人。造型入口：湿皮衣、长矛、盐痕皮肤、被海风削硬的脸和总把重心压向船板的腿。母题：生计与巨兽恐惧绑在同一根捕猎绳上。视觉证据：鱼叉绳、鳞片战利品、潮湿头发、手掌绳痕和听浪判断方向的侧耳。边界：避免普通渔夫或海怪英雄海报。", defEn: "First read: a sea-serpent harpooner living under mythic sea-beast shadow. Styling entry: wet leather, long harpoon, salt-marked skin, wind-cut face, and legs weighting the deck. Livelihood and monster fear share one hunting rope. Visual evidence: harpoon line, scale trophy, wet hair, rope-burn palms, and ear turned to waves. Boundary: avoid generic fisherman or sea-monster hero poster.", ontologyLevel: 3, risk: "medium", tags: ["sea_serpent", "harpooner", "hunter"] },
  { id: "griffin_knight_groom", name: "狮鹫骑士侍从", nameEn: "Griffin-Knight Groom", group: "D. 龙裔 / 巨兽血统", groupEn: "D. Dragon-Blood / Great Beast Lineage", def: "第一识别是服务空中王权的狮鹫骑士侍从。造型入口：羽毛护理刷、短甲、抓痕、低位鞠躬和比贵族更早察觉巨兽情绪的眼。母题：骑士荣耀背后是年轻身体的照料和风险。视觉证据：羽油瓶、护臂抓痕、骑鞍带、灰尘膝盖和抚平翅羽的手。边界：避免普通骑士少年或宠物饲养员。", defEn: "First read: a griffin-knight groom serving aerial nobility. Styling entry: feather brush, short armor, claw marks, low bow, and eyes that read beast mood before nobles do. Knightly glory rests on care and risk. Visual evidence: feather oil bottle, clawed bracer, saddle straps, dusty knees, and hand smoothing wing feathers. Boundary: avoid generic knight boy or pet keeper.", ontologyLevel: 3, tags: ["griffin", "groom", "knight"] },
  { id: "phoenix_ash_priestess", name: "凤凰灰烬女祭司", nameEn: "Phoenix-Ash Priestess", group: "D. 龙裔 / 巨兽血统", groupEn: "D. Dragon-Blood / Great Beast Lineage", def: "第一识别是守护死亡后再燃仪式的凤凰灰烬女祭司。造型入口：灰白长袍、火羽饰、掌心灰粉、宁静表情和习惯在燃尽物前跪坐的身体。母题：复生不是喜庆，而是烧毁后的严格照料。视觉证据：灰烬盒、红金羽轴、烧穿袖边、祭坛钳和把灰抹在额头的动作。边界：避免凤凰女孩或火焰法师。", defEn: "First read: a phoenix-ash priestess guarding rebirth after burning. Styling entry: ash-white robe, fire-feather ornament, ash in palms, calm face, and kneeling habit before burned remains. Rebirth is strict care after destruction, not celebration. Visual evidence: ash box, red-gold feather shaft, burned cuffs, altar tongs, and ash pressed to forehead. Boundary: avoid phoenix girl or fire mage.", ontologyLevel: 4, tags: ["phoenix", "priestess", "rebirth"] },
  { id: "giant_bone_nomad", name: "巨人骨游牧民", nameEn: "Giant-Bone Nomad", group: "D. 龙裔 / 巨兽血统", groupEn: "D. Dragon-Blood / Great Beast Lineage", def: "第一识别是在古老巨兽遗骸间迁徙的巨骨游牧民。造型入口：巨骨饰物、毛皮、风沙纹、宽步伐和把骨骸当方向标的沉默。母题：部族身份建立在与巨大死亡物共处上。视觉证据：骨珠项圈、皮绳地图、沙尘眼睫、背负水袋和手扶肋骨般的地貌。边界：避免普通荒漠蛮族或怪物骨盔装饰。", defEn: "First read: a giant-bone nomad migrating among ancient beast remains. Styling entry: huge bone ornaments, fur, wind-sand marks, wide steps, and silence using skeletons as landmarks. Tribal identity lives with enormous dead matter. Visual evidence: bone-bead collar, leather map cord, sandy lashes, waterskin, and hand on rib-like terrain. Boundary: avoid generic desert barbarian or monster-bone helmet decoration.", ontologyLevel: 3, tags: ["giant_bone", "nomad", "tribe"] },
  { id: "chimera_breeder", name: "奇美拉培育师", nameEn: "Chimera Breeder", group: "D. 龙裔 / 巨兽血统", groupEn: "D. Dragon-Blood / Great Beast Lineage", def: "第一识别是制造危险混种生命的奇美拉培育师。造型入口：厚围裙、笼具钥匙、混种谱系册、冷静眼神和不把咆哮当噪音的职业身体。母题：生命拼接被驯养产业化。视觉证据：笼牌编号、兽毛样本、缝补手套、防咬护臂和在记录本上画比例的手。边界：避免血腥怪医或怪物主角抢走人设。", defEn: "First read: a chimera breeder producing dangerous hybrid life. Styling entry: heavy apron, cage keys, hybrid lineage book, calm eyes, and a body that treats roaring as workplace sound. Life-splicing becomes husbandry industry. Visual evidence: cage tags, fur samples, patched gloves, bite guards, and hand drawing ratios in a notebook. Boundary: avoid gore doctor or monster stealing the persona.", ontologyLevel: 4, risk: "high", tags: ["chimera", "breeder", "hybrid"] },
  { id: "manticore_poison_apothecary", name: "蝎尾狮毒药药师", nameEn: "Manticore-Venom Apothecary", group: "D. 龙裔 / 巨兽血统", groupEn: "D. Dragon-Blood / Great Beast Lineage", def: "第一识别是把怪物毒性制成药剂的蝎尾狮药师。造型入口：毒瓶、皮手套、兽刺标本、精准称量的手和对危险剂量近乎温柔的专注。母题：致命材料被药学秩序驯化。视觉证据：琥珀毒液、蝎尾针匣、草药称、护目镜反光和贴标签的低头动作。边界：避免普通毒师或邪恶女巫。", defEn: "First read: a manticore-venom apothecary turning monster toxin into medicine. Styling entry: venom vials, leather gloves, beast-spine specimens, precise measuring hands, and almost tender focus on dosage. Deadly material is disciplined by pharmacy. Visual evidence: amber venom, tail-spine case, herb scale, goggle reflection, and labeling gesture. Boundary: avoid generic poisoner or evil witch.", ontologyLevel: 4, risk: "high", tags: ["manticore", "apothecary", "venom"] },
  { id: "dragon_egg_smuggler", name: "龙蛋走私者", nameEn: "Dragon-Egg Smuggler", group: "D. 龙裔 / 巨兽血统", groupEn: "D. Dragon-Blood / Great Beast Lineage", def: "第一识别是在王国禁令下倒卖未来灾难的龙蛋走私者。造型入口：保温箱、烧焦包布、狡黠眼神、紧贴身体的护包动作和随时计算逃路的脚。母题：巨兽血统被黑市变成高风险货物。视觉证据：热气缝隙、假通行证、黑市印章、护胸姿态和不让箱子离身的手。边界：避免普通盗贼或龙蛋可爱化。", defEn: "First read: a dragon-egg smuggler selling future disaster under royal bans. Styling entry: insulated case, scorched wrap, sly eyes, protective carry close to the body, and feet calculating escape. Beast lineage becomes black-market cargo. Visual evidence: heat leak, fake pass, black-market seal, guarded chest posture, and hands never leaving the case. Boundary: avoid generic thief or cute dragon-egg framing.", ontologyLevel: 4, risk: "medium", tags: ["dragon_egg", "smuggler", "black_market"] },

  { id: "fox_spirit_courtesan", name: "狐妖花魁", nameEn: "Fox-Spirit Courtesan", group: "E. 东方妖怪 / 民俗化人", groupEn: "E. Eastern Yokai / Folk Humanization", def: "第一识别是在人间欲望场里隐藏非人身份的狐妖花魁。造型入口：华丽发簪、狐耳暗示、香粉、酒杯和笑意里总慢半拍的兽性警觉。母题：美貌被民俗妖性和社交技艺共同制造。视觉证据：尾影式衣摆、细长眼线、层叠和服或华服、袖中护符和侧身敬酒。边界：避免单纯性感狐狸女或普通艺伎。", defEn: "First read: a fox-spirit courtesan hiding nonhuman identity in a desire field. Styling entry: ornate hairpins, fox-ear hints, powder, wine cup, and animal alertness half a beat behind the smile. Beauty is made by folk animality and social skill. Visual evidence: tail-like hem, elongated eyeliner, layered dress, sleeve charm, and side-on toast. Boundary: avoid simple sexy fox woman or generic geisha.", ontologyLevel: 4, risk: "medium", eras: eastern, tags: ["fox_spirit", "courtesan", "yokai"] },
  { id: "shushan_sword_immortal", name: "蜀山剑仙", nameEn: "Shushan Sword Immortal", group: "E. 东方妖怪 / 民俗化人", groupEn: "E. Eastern Yokai / Folk Humanization", def: "第一识别是山门修行把身体磨成剑意的蜀山剑仙。造型入口：道袍、飞剑匣、清瘦肩背、山风衣摆和像已经把情绪削薄的眼。母题：修行不是酷招式，而是长期纪律形成的锋利身体。视觉证据：剑穗、符箓腰带、云纹靴、指尖剑诀和远离人群的站位。边界：避免普通古风帅哥或武器堆砌。", defEn: "First read: a Shushan sword immortal whose body has been honed into sword intent. Styling entry: Daoist robe, sword case, lean back, mountain-wind hem, and eyes thinned by discipline. Cultivation is long discipline, not cool moves. Visual evidence: sword tassel, talisman belt, cloud boots, finger sword mudra, and distance from crowds. Boundary: avoid generic xianxia beauty or weapon clutter.", ontologyLevel: 4, risk: "medium", eras: eastern, tags: ["shushan", "sword_immortal", "wuxia"] },
  { id: "wandering_daoist_exorcist", name: "云游道人", nameEn: "Wandering Daoist Exorcist", group: "E. 东方妖怪 / 民俗化人", groupEn: "E. Eastern Yokai / Folk Humanization", def: "第一识别是走村串巷驱邪的云游道人。造型入口：旧道袍、符纸、桃木剑、布包、风尘脸和不把妖怪当奇观的职业平静。母题：民间修行落在路途、仪式工具和小地方的恐惧上。视觉证据：黄符边角、草鞋泥、铃铛、葫芦水迹和在门槛前停步的动作。边界：避免仙侠主角或滑稽道士。", defEn: "First read: a wandering Daoist exorcist moving village to village. Styling entry: old robe, talismans, peachwood sword, cloth bag, dusty face, and calm that treats spirits as work. Folk practice lives in travel, ritual tools, and local fear. Visual evidence: talisman corners, muddy straw shoes, bell, gourd water marks, and pause at a threshold. Boundary: avoid xianxia lead or comic priest.", ontologyLevel: 3, eras: eastern, tags: ["daoist", "exorcist", "folk"] },
  { id: "jiangshi_bride", name: "僵尸新娘", nameEn: "Jiangshi Bride", group: "E. 东方妖怪 / 民俗化人", groupEn: "E. Eastern Yokai / Folk Humanization", def: "第一识别是被婚礼和死亡同时封存的僵尸新娘。造型入口：红嫁衣、符箓、僵硬肩颈、苍白妆面和像被礼仪牵引而非自己行走的身体。母题：喜庆服制被死亡制度反转。视觉证据：红盖头边、黄符压额、绣鞋不合步、袖口冷白手和停滞眼神。边界：避免恐怖尸体猎奇或普通鬼新娘。", defEn: "First read: a jiangshi bride sealed by wedding and death at once. Styling entry: red bridal robe, talisman, stiff neck, pale makeup, and a body moved by ritual rather than will. Celebration dress is reversed by death rules. Visual evidence: red veil edge, forehead talisman, mismatched embroidered shoes, cold white hands, and stalled gaze. Boundary: avoid corpse spectacle or generic ghost bride.", ontologyLevel: 4, risk: "medium", eras: eastern, tags: ["jiangshi", "bride", "folk_horror"] },
  { id: "paper_umbrella_ghost_girl", name: "纸伞幽女", nameEn: "Paper-Umbrella Ghost Girl", group: "E. 东方妖怪 / 民俗化人", groupEn: "E. Eastern Yokai / Folk Humanization", def: "第一识别是雨夜纸伞下出现的幽女。造型入口：油纸伞、湿袖口、苍白妆面、低垂眼和像被雨声固定住的站姿。母题：民俗哀怨通过遮蔽、潮湿和等待显形。视觉证据：伞骨阴影、裙摆水线、发梢滴水、无声脚步和不完全露出的脸。边界：避免普通和风美女或恐怖跳吓。", defEn: "First read: a ghost girl appearing under an oil-paper umbrella at night rain. Styling entry: umbrella, wet cuffs, pale makeup, lowered eyes, and a stance fixed by rainfall. Folk sorrow appears through cover, moisture, and waiting. Visual evidence: umbrella rib shadow, waterline hem, dripping hair ends, silent steps, and a face not fully revealed. Boundary: avoid generic Japanese beauty or jump-scare ghost.", ontologyLevel: 4, risk: "medium", eras: eastern, tags: ["ghost", "umbrella", "rain"] },
  { id: "tanuki_teahouse_owner", name: "狸猫茶屋老板", nameEn: "Tanuki Teahouse Owner", group: "E. 东方妖怪 / 民俗化人", groupEn: "E. Eastern Yokai / Folk Humanization", def: "第一识别是把客人带进怪谈空间的狸猫茶屋老板。造型入口：茶屋围裙、圆脸笑容、变化术小破绽、算盘和过分亲切的招呼手势。母题：民俗变形术藏在服务业温度里。视觉证据：茶杯蒸汽、尾影褶皱、假账本、门帘符号和笑到眼睛弯起的脸。边界：避免普通茶馆老板或可爱狸猫吉祥物。", defEn: "First read: a tanuki teahouse owner leading guests into folk-tale space. Styling entry: teahouse apron, round smile, tiny transformation flaws, abacus, and over-friendly greeting gesture. Folk shapeshifting hides in service warmth. Visual evidence: teacup steam, tail-like folds, fake ledger, curtain signs, and smiling crescent eyes. Boundary: avoid generic teahouse owner or cute mascot tanuki.", ontologyLevel: 4, eras: eastern, tags: ["tanuki", "teahouse", "yokai"] },
  { id: "snake_spirit_scholar", name: "蛇精书生", nameEn: "Snake-Spirit Scholar", group: "E. 东方妖怪 / 民俗化人", groupEn: "E. Eastern Yokai / Folk Humanization", def: "第一识别是把妖性藏进文雅身体的蛇精书生。造型入口：青白长衫、竖瞳暗示、书卷、过慢眨眼和靠近时让人感到温度下降的礼貌。母题：危险被学问和礼法包裹。视觉证据：鳞纹袖边、细长手指、墨色发带、卷轴和贴近耳语的侧身。边界：避免普通白蛇角色或阴柔书生模板。", defEn: "First read: a snake-spirit scholar hiding animal nature inside refinement. Styling entry: pale robe, slit-pupil hint, scrolls, slow blinking, and politeness that cools the air nearby. Danger is wrapped in scholarship and etiquette. Visual evidence: scale-pattern cuffs, long fingers, ink hair ribbon, scrolls, and side-leaning whisper. Boundary: avoid generic white-snake figure or delicate scholar trope.", ontologyLevel: 4, risk: "medium", eras: eastern, tags: ["snake_spirit", "scholar", "yokai"] },
  { id: "mountain_god_miko", name: "山神巫女", nameEn: "Mountain-God Miko", group: "E. 东方妖怪 / 民俗化人", groupEn: "E. Eastern Yokai / Folk Humanization", def: "第一识别是替山林神性传话的山神巫女。造型入口：红白巫女服、山铃、纸垂、冷清眼神和像听见林间回声的侧耳。母题：人形身体成为山地共同体和神灵之间的接口。视觉证据：草木灰、神社绳结、铃穗、木屐泥痕和双手捧供物的姿态。边界：避免普通巫女写真或神明本人化。", defEn: "First read: a mountain-god miko speaking for forest divinity. Styling entry: red-white shrine dress, mountain bell, paper streamers, cool eyes, and an ear turned to forest echoes. The human body becomes interface between mountain community and spirit. Visual evidence: plant ash, shrine knots, bell tassel, muddy geta, and hands holding offerings. Boundary: avoid generic shrine-maiden portrait or full deity conversion.", ontologyLevel: 4, eras: eastern, tags: ["miko", "mountain_god", "shrine"] },
  { id: "river_demon_ferryman", name: "河妖摆渡人", nameEn: "River-Demon Ferryman", group: "E. 东方妖怪 / 民俗化人", groupEn: "E. Eastern Yokai / Folk Humanization", def: "第一识别是在人与异界河道之间摆渡的河妖。造型入口：蓑衣、船篙、水痕皮肤、湿重眉眼和不问乘客来处的沉默。母题：边界职业把妖性变成路线和规矩。视觉证据：竹篙水线、湿草绳、河泥脚踝、旧船票和扶住船沿的长指。边界：避免普通船夫或水鬼怪物化。", defEn: "First read: a river-demon ferryman between human and otherworld waterways. Styling entry: straw raincoat, pole, water-marked skin, heavy wet eyes, and silence that never asks origins. Boundary work turns yokai nature into route and rules. Visual evidence: waterline pole, wet straw rope, muddy ankles, old ferry tickets, and long fingers on boat edge. Boundary: avoid generic boatman or water-ghost monster.", ontologyLevel: 4, risk: "medium", eras: eastern, tags: ["river_demon", "ferryman", "folk"] },
  { id: "faceless_noh_actor", name: "无面能乐演员", nameEn: "Faceless Noh Actor", group: "E. 东方妖怪 / 民俗化人", groupEn: "E. Eastern Yokai / Folk Humanization", def: "第一识别是被舞台身份吞掉真实脸孔的无面能乐演员。造型入口：能面、戏服、空白面部、固定步伐和面具背后没有第二张脸的不安。母题：表演制度把人形变成民俗怪谈。视觉证据：面具绳、宽袖、木屐小步、暗红内衬和慢慢抬头的动作。边界：避免普通面具演员或恐怖无脸怪。", defEn: "First read: a faceless Noh actor whose stage identity has consumed the real face. Styling entry: Noh mask, stage costume, blank face, fixed steps, and unease that no second face exists behind the mask. Performance system turns humanoid form into folklore. Visual evidence: mask cords, wide sleeves, small wooden steps, dark red lining, and slow head lift. Boundary: avoid generic masked actor or horror faceless monster.", ontologyLevel: 4, risk: "medium", eras: eastern, tags: ["noh", "faceless", "actor"] },

  { id: "celtic_fae_bride", name: "凯尔特妖精新娘", nameEn: "Celtic Fae Bride", group: "F. 妖精 / 契约森林", groupEn: "F. Fae / Contract Forest", def: "第一识别是把婚约变成异界契约的凯尔特妖精新娘。造型入口：野花冠、薄纱、绿眼、赤脚草痕和温柔笑容里不可撤销的条件。母题：浪漫被森林法律和名字债务接管。视觉证据：藤蔓戒指、羊皮契约、湿草裙摆、细翅暗示和不让对方看清誓词的手。边界：避免童话新娘或普通森系美人。", defEn: "First read: a Celtic fae bride turning marriage into otherworld contract. Styling entry: wildflower crown, veil, green eyes, bare grass-marked feet, and irreversible terms inside a soft smile. Romance is taken by forest law and name debt. Visual evidence: vine ring, parchment contract, damp grass hem, wing hints, and hands hiding the oath text. Boundary: avoid fairy-tale bride or generic forest beauty.", ontologyLevel: 4, risk: "medium", tags: ["fae", "bride", "contract"] },
  { id: "mushroom_ring_child", name: "蘑菇圈孩子", nameEn: "Mushroom-Ring Child", group: "F. 妖精 / 契约森林", groupEn: "F. Fae / Contract Forest", def: "第一识别是误入妖精游戏的蘑菇圈孩子。造型入口：小斗篷、泥土膝盖、蘑菇饰物、被成人牵住的安全距离和对圆形边界过度敏感的眼。母题：儿童身体被放在游戏、迷路和异界规则之间。视觉证据：孢子粉、草叶挂袜、木纽扣、保护性手势和不踏出圈外的脚尖。边界：保持儿童保护性呈现，避免恐怖童话或猎奇。", defEn: "First read: a mushroom-ring child lost in fae play. Styling entry: small cloak, muddy knees, mushroom ornament, protected distance held by adults, and eyes overly sensitive to circular boundaries. A child body sits between game, loss, and otherworld rules. Visual evidence: spore dust, grass on socks, wooden buttons, protective hands, and toes not leaving the ring. Boundary: keep protective child framing; avoid horror fairytale or spectacle.", ontologyLevel: 4, tags: ["fae", "child", "mushroom"] },
  { id: "thorn_court_lawyer", name: "荆棘宫廷律师", nameEn: "Thorn-Court Lawyer", group: "F. 妖精 / 契约森林", groupEn: "F. Fae / Contract Forest", def: "第一识别是把文字契约变成囚笼的荆棘宫廷律师。造型入口：荆棘领饰、羊皮纸、微笑陷阱、锋利指甲和礼貌到令人害怕的鞠躬。母题：法律在妖精宫廷里长成带刺植物。视觉证据：红墨条款、藤蔓封蜡、细金眼镜、划伤手套和递出笔的手。边界：避免普通律师或邪恶法师。", defEn: "First read: a Thorn-Court lawyer turning text contracts into cages. Styling entry: thorn collar, parchment, trap-like smile, sharp nails, and a bow too polite to trust. Law grows into thorn plants inside fae court. Visual evidence: red-ink clauses, vine wax seal, thin gold glasses, scratched gloves, and a hand offering a pen. Boundary: avoid generic lawyer or evil mage.", ontologyLevel: 4, risk: "medium", tags: ["fae", "lawyer", "contract"] },
  { id: "stolen_name_bard", name: "被偷走名字的吟游诗人", nameEn: "Nameless Stolen-Name Bard", group: "F. 妖精 / 契约森林", groupEn: "F. Fae / Contract Forest", def: "第一识别是因交易失去真名的吟游诗人。造型入口：空白铭牌、旧鲁特琴、无法签名的手、漂泊衣摆和听见自己旧名时会停顿的眼。母题：身份被妖精契约抽走，只剩声音和故事。视觉证据：磨损琴弦、未写完的乐谱、缝掉名字的披风、旅店钥匙和欲言又止的嘴。边界：避免普通流浪歌手或悲情诗人模板。", defEn: "First read: a bard who traded away the true name. Styling entry: blank nameplate, old lute, hand unable to sign, wandering hem, and eyes pausing at the old name. Identity is removed by fae contract, leaving voice and story. Visual evidence: worn strings, unfinished score, cloak with name removed, inn key, and mouth stopping mid-word. Boundary: avoid generic wandering singer or tragic poet trope.", ontologyLevel: 4, risk: "medium", tags: ["bard", "name", "fae"] },
  { id: "summer_court_duelist", name: "夏庭决斗者", nameEn: "Summer-Court Duelist", group: "F. 妖精 / 契约森林", groupEn: "F. Fae / Contract Forest", def: "第一识别是把决斗当成华丽游戏的夏庭妖精。造型入口：金色短剑、花瓣披风、夸张礼节、轻浮笑容和随时准备用礼貌割开对方的手腕。母题：残酷被夏日繁盛包装成社交娱乐。视觉证据：花粉高光、细剑鞘、礼仪手套、旋转步伐和挑衅鞠躬。边界：避免普通剑客或花仙子。", defEn: "First read: a Summer-Court duelist treating combat as ornate play. Styling entry: golden short sword, petal cloak, theatrical etiquette, light smile, and wrists ready to cut politely. Cruelty is wrapped in summer abundance and social play. Visual evidence: pollen highlights, slim sheath, etiquette gloves, turning steps, and provocative bow. Boundary: avoid generic swordsman or flower fairy.", ontologyLevel: 4, risk: "medium", tags: ["summer_court", "duelist", "fae"] },
  { id: "winter_changeling", name: "冬季换生子", nameEn: "Winter Changeling", group: "F. 妖精 / 契约森林", groupEn: "F. Fae / Contract Forest", def: "第一识别是被调换身份留下疏离感的冬季换生子。造型入口：苍白皮肤、旧童衣式剪裁、冰冷手指、成人化沉默和永远不完全合群的站位。母题：家庭身份被妖精规则替换后留下冷空洞。视觉证据：霜白睫毛、错码纽扣、旧名字刺绣、袖口结冰和不接受拥抱的手。边界：避免恐怖儿童或普通冰雪精灵。", defEn: "First read: a winter changeling marked by swapped identity. Styling entry: pale skin, old child-clothes cut, cold fingers, adult silence, and placement never fully inside the group. Family identity leaves a cold hollow after fae exchange. Visual evidence: frost lashes, mismatched buttons, old-name embroidery, iced cuffs, and hands refusing embrace. Boundary: avoid horror child or generic snow elf.", ontologyLevel: 4, risk: "medium", tags: ["changeling", "winter", "fae"] },
  { id: "honeyed_poison_fae", name: "蜜毒妖精", nameEn: "Honey-Poison Fae", group: "F. 妖精 / 契约森林", groupEn: "F. Fae / Contract Forest", def: "第一识别是把甜味和毒性混在一起的蜜毒妖精。造型入口：蜂蜜色唇、细翅暗示、小瓶挂饰、柔软声线和靠近后才显出危险的眼。母题：诱惑不是露骨，而是可食用、可交易、可中毒的亲近感。视觉证据：金色液体、蜂蜡封口、黑黄细线、舌尖微光和递出小瓶的手。边界：避免性感妖精或毒药女巫模板。", defEn: "First read: a honey-poison fae mixing sweetness with venom. Styling entry: honey-colored lips, wing hints, small vial ornaments, soft voice, and eyes that become dangerous only up close. Seduction is edible, tradable, and poisonous intimacy. Visual evidence: golden liquid, wax seals, black-yellow thread, tongue glint, and a hand offering a vial. Boundary: avoid sexy fairy or poison-witch template.", ontologyLevel: 4, risk: "medium", tags: ["fae", "honey", "poison"] },
  { id: "forest_debt_collector", name: "森林债务收取人", nameEn: "Forest Debt Collector", group: "F. 妖精 / 契约森林", groupEn: "F. Fae / Contract Forest", def: "第一识别是上门收取古老承诺的森林债务人。造型入口：苔藓账本、木质面具、礼貌鞠躬、干净靴尖和把人情债算得像季节一样准确的冷静。母题：森林记得每一次承诺。视觉证据：账页叶脉、欠条封蜡、黑色披肩、指尖计数和站在门槛外不进屋的姿态。边界：避免普通讨债人或恶魔契约商。", defEn: "First read: a forest debt collector arriving for ancient promises. Styling entry: moss ledger, wooden mask, polite bow, clean boot tips, and calm counting debts as precisely as seasons. The forest remembers every promise. Visual evidence: leaf-vein ledger pages, waxed debt notes, black shawl, counting fingers, and standing outside the threshold. Boundary: avoid generic debt collector or demon-contract merchant.", ontologyLevel: 4, risk: "medium", tags: ["debt", "collector", "fae"] },
  { id: "moon_milk_nurse", name: "月乳妖精奶妈", nameEn: "Moon-Milk Fae Nurse", group: "F. 妖精 / 契约森林", groupEn: "F. Fae / Contract Forest", def: "第一识别是照料非人婴孩的月乳妖精奶妈。造型入口：月白围裙、银瓶、安抚歌声、柔软眼袋和面对奇怪幼体仍保持护理流程的手。母题：温柔照护带着异界材料和不可说的喂养规则。视觉证据：银色奶瓶、摇篮符号、月光袖口、低声哼唱和避开镜头的怀抱。边界：避免母性奇观或可爱妖精保姆。", defEn: "First read: a moon-milk fae nurse caring for inhuman infants. Styling entry: moon-white apron, silver bottle, soothing song, soft under-eyes, and hands keeping care routine before strange young. Tender care carries otherworld material and unsaid feeding rules. Visual evidence: silver bottle, cradle signs, moonlit cuffs, humming mouth, and a camera-avoiding cradle hold. Boundary: avoid motherhood spectacle or cute fairy nanny.", ontologyLevel: 4, tags: ["fae", "nurse", "moon"] },
  { id: "wild_hunt_messenger", name: "狂猎信使", nameEn: "Wild-Hunt Messenger", group: "F. 妖精 / 契约森林", groupEn: "F. Fae / Contract Forest", def: "第一识别是把狂猎预告送达人间的奔跑信使。造型入口：鹿角号、暗色披风、泥点靴、急促呼吸和像风暴到来前先抵达的眼。母题：狩猎还没发生，身体已经带来恐惧。视觉证据：号角绳结、猎犬影子、撕裂衣摆、湿发和冲进门前的停步。边界：避免普通猎人或奇幻快递员。", defEn: "First read: a Wild-Hunt messenger carrying the warning into human land. Styling entry: antler horn, dark cloak, muddy boots, quick breath, and eyes arriving before the storm. The hunt has not happened yet, but the body brings fear. Visual evidence: horn cord, hound shadow, torn hem, wet hair, and a stop before entering a door. Boundary: avoid generic hunter or fantasy courier.", ontologyLevel: 4, risk: "medium", tags: ["wild_hunt", "messenger", "fae"] },

  { id: "black_grimoire_witch", name: "黑魔典女巫", nameEn: "Black-Grimoire Witch", group: "G. 黑暗巫术 / 禁忌知识", groupEn: "G. Dark Sorcery / Forbidden Knowledge", def: "第一识别是把知识代价写在身体边缘的黑魔典女巫。造型入口：黑书、蜡烛、骨饰、指尖裂纹和读到不该读之处仍不合书的眼。母题：禁忌知识通过书写、疲惫和身体标记成立。视觉证据：烧黑书脊、红色批注、蜡泪、骨质书签和压低灯光的手。边界：避免普通暗黑美人或无代价魔法。", defEn: "First read: a black-grimoire witch whose body carries the cost of knowledge. Styling entry: black book, candles, bone ornaments, cracked fingertips, and eyes that refuse to close the page. Forbidden knowledge appears through writing, fatigue, and body marks. Visual evidence: charred spine, red annotations, wax tears, bone bookmark, and hand lowering light. Boundary: avoid generic dark beauty or cost-free magic.", ontologyLevel: 4, risk: "high", tags: ["witch", "grimoire", "dark_magic"] },
  { id: "blood_contract_notary", name: "血契公证人", nameEn: "Blood-Contract Notary", group: "G. 黑暗巫术 / 禁忌知识", groupEn: "G. Dark Sorcery / Forbidden Knowledge", def: "第一识别是替危险誓言盖章的血契公证人。造型入口：红墨印章、黑手套、契约卷轴、职业冷静和把恐惧当流程处理的低头。母题：禁忌契约被法律职业化。视觉证据：封蜡血色、签名刀、编号柜、袖口无尘和递出文件的手。边界：避免恶魔商人或普通书记员。", defEn: "First read: a blood-contract notary stamping dangerous vows. Styling entry: red-ink seal, black gloves, contract scrolls, professional calm, and a lowered head treating fear as procedure. Taboo contracts become legal work. Visual evidence: blood-colored wax, signature knife, numbered cabinet, dustless cuffs, and hand presenting papers. Boundary: avoid demon merchant or generic clerk.", ontologyLevel: 4, risk: "high", tags: ["blood_contract", "notary", "dark_magic"] },
  { id: "necromancer_medical_student", name: "死灵医学学生", nameEn: "Necromancer Medical Student", group: "G. 黑暗巫术 / 禁忌知识", groupEn: "G. Dark Sorcery / Forbidden Knowledge", def: "第一识别是把尸体学习成术法材料的死灵医学学生。造型入口：解剖笔记、旧校服、黑眼圈、手套粉末和介于医生与巫师之间的疲惫肩颈。母题：医学训练和死灵术在年轻身体里互相污染。视觉证据：骨骼图、缝线针包、冷光台灯、校徽污渍和不敢抬头的眼。边界：避免血腥猎奇或普通医学生。", defEn: "First read: a necromancer medical student studying bodies as spell material. Styling entry: anatomy notes, old uniform, dark circles, glove powder, and tired shoulders between doctor and sorcerer. Medical training and necromancy contaminate each other. Visual evidence: bone diagrams, suture kit, cold desk lamp, stained school badge, and eyes afraid to rise. Boundary: avoid gore spectacle or generic med student.", ontologyLevel: 4, risk: "high", tags: ["necromancer", "student", "medical"] },
  { id: "graveyard_perfumer", name: "墓园调香师", nameEn: "Graveyard Perfumer", group: "G. 黑暗巫术 / 禁忌知识", groupEn: "G. Dark Sorcery / Forbidden Knowledge", def: "第一识别是把死亡气味提炼成魅力的墓园调香师。造型入口：黑色香水瓶、墓土、干花、细腻鼻梁和像倾听气味一样闭眼的表情。母题：腐败、记忆和欲望被调香秩序重新包装。视觉证据：小铲、玻璃滴管、黑蕾丝手套、灰白花瓣和在墓碑旁试香的手腕。边界：避免普通哥特调香师或恐怖墓地角色。", defEn: "First read: a graveyard perfumer distilling death scent into allure. Styling entry: black perfume bottles, grave soil, dried flowers, delicate nose bridge, and eyes closed as if listening to smell. Decay, memory, and desire are repackaged by perfumery. Visual evidence: small shovel, glass dropper, black lace gloves, pale petals, and wrist testing scent near a headstone. Boundary: avoid generic gothic perfumer or horror cemetery figure.", ontologyLevel: 4, risk: "medium", tags: ["perfumer", "graveyard", "witchcraft"] },
  { id: "curse_removal_surgeon", name: "诅咒切除外科医", nameEn: "Curse-Removal Surgeon", group: "G. 黑暗巫术 / 禁忌知识", groupEn: "G. Dark Sorcery / Forbidden Knowledge", def: "第一识别是把诅咒当病灶切除的外科医。造型入口：手术围裙、符文刀、封印绷带、干燥眼神和对不可见疼痛进行精准定位的手。母题：医学流程试图管理魔法代价。视觉证据：术式图、缝合符纸、消毒灯、黑红标记和悬在皮肤上方的刀。边界：避免血腥外科秀或普通黑魔法师。", defEn: "First read: a curse-removal surgeon treating curses as lesions. Styling entry: surgical apron, rune knife, sealing bandage, dry gaze, and hands locating invisible pain. Medical procedure tries to manage magical cost. Visual evidence: procedure diagrams, stitched talismans, disinfectant lamp, black-red marks, and knife hovering above skin. Boundary: avoid gore surgery show or generic dark mage.", ontologyLevel: 4, risk: "high", tags: ["curse", "surgeon", "removal"] },
  { id: "demonology_court_expert", name: "恶魔学宫廷顾问", nameEn: "Demonology Court Expert", group: "G. 黑暗巫术 / 禁忌知识", groupEn: "G. Dark Sorcery / Forbidden Knowledge", def: "第一识别是替王权解释禁忌知识的恶魔学宫廷顾问。造型入口：黑礼服、恶魔图谱、宫廷通行章、克制微笑和在王座旁低声说明危险的侧身。母题：黑暗知识被贵族政治吸收为顾问权力。视觉证据：图谱夹、银链眼镜、封印戒、会议桌阴影和不看恶魔也能命名的嘴。边界：避免恶魔召唤师或普通谋士。", defEn: "First read: a demonology court expert explaining forbidden knowledge for the crown. Styling entry: black formalwear, demon charts, court pass, restrained smile, and side posture whispering danger by the throne. Dark knowledge becomes advisory power. Visual evidence: chart folder, silver-chain glasses, sealing ring, council-table shadow, and a mouth naming demons without looking. Boundary: avoid demon summoner or generic strategist.", ontologyLevel: 4, risk: "high", tags: ["demonology", "court", "expert"] },
  { id: "shadow_puppet_warlock", name: "影戏术士", nameEn: "Shadow-Puppet Warlock", group: "G. 黑暗巫术 / 禁忌知识", groupEn: "G. Dark Sorcery / Forbidden Knowledge", def: "第一识别是通过影子操纵命运的影戏术士。造型入口：纸偶、烛光、细长手指、幕布边缘和像在演出中审判人的笑。母题：戏法、命运和操控权混成一套手部语言。视觉证据：剪纸人形、烛影变形、黑线绕指、观众席空椅和轻拉丝线的动作。边界：避免普通傀儡师或大场面暗影法术。", defEn: "First read: a shadow-puppet warlock manipulating fate through shadows. Styling entry: paper puppets, candlelight, long fingers, curtain edge, and a smile that judges during performance. Trick, fate, and control fuse into hand language. Visual evidence: cut-paper figures, warped candle shadows, black thread around fingers, empty audience chairs, and a slight pull of string. Boundary: avoid generic puppeteer or large shadow spell spectacle.", ontologyLevel: 4, risk: "medium", tags: ["shadow", "puppet", "warlock"] },
  { id: "forbidden_star_astronomer", name: "禁星天文学家", nameEn: "Forbidden-Star Astronomer", group: "G. 黑暗巫术 / 禁忌知识", groupEn: "G. Dark Sorcery / Forbidden Knowledge", def: "第一识别是研究不该被观看星体的禁星天文学家。造型入口：天文镜、黑星图、失眠眼、遮光布和明知观察会被反向凝视仍继续记录的手。母题：观看成为危险知识的入口。视觉证据：红色观测笔记、封窗房间、黑色星点、眼药水和仰头后的僵硬颈线。边界：避免普通占星师或星空浪漫。", defEn: "First read: a forbidden-star astronomer studying stars that should not be seen. Styling entry: telescope, black star chart, sleepless eyes, blackout cloth, and hands recording despite being watched back. Seeing becomes entry to dangerous knowledge. Visual evidence: red observation notes, sealed window room, black star dots, eye drops, and stiff neck after looking up. Boundary: avoid generic astrologer or romantic stargazer.", ontologyLevel: 4, risk: "high", tags: ["forbidden_star", "astronomer", "occult"] },
  { id: "sacrificial_tailor", name: "献祭裁缝", nameEn: "Sacrificial Tailor", group: "G. 黑暗巫术 / 禁忌知识", groupEn: "G. Dark Sorcery / Forbidden Knowledge", def: "第一识别是把衣物缝成代价容器的献祭裁缝。造型入口：红线、黑剪刀、仪式服、针扎指尖和量体时像记录命运的低头。母题：服装工艺被推入献祭账本。视觉证据：红线绕腕、黑色纸样、衣内符号、缝合封蜡和让客人抬手的动作。边界：避免普通裁缝或血腥祭司。", defEn: "First read: a sacrificial tailor sewing garments into vessels of cost. Styling entry: red thread, black scissors, ritual clothes, pricked fingertips, and head lowered as if measuring fate. Garment craft enters sacrificial accounting. Visual evidence: red thread around wrist, black patterns, inner symbols, stitched wax seals, and gesture asking the client to raise arms. Boundary: avoid generic tailor or bloody priest.", ontologyLevel: 4, risk: "high", tags: ["sacrifice", "tailor", "ritual"] },
  { id: "mirror_possession_heir", name: "镜中附身继承人", nameEn: "Mirror-Possessed Heir", group: "G. 黑暗巫术 / 禁忌知识", groupEn: "G. Dark Sorcery / Forbidden Knowledge", def: "第一识别是被镜中存在慢慢替换的贵族继承人。造型入口：贵族服、镜面饰品、第二眼神、微错位笑容和总在反光面旁确认自己的手。母题：继承身份被另一个倒影占领。视觉证据：镜片袖扣、裂纹镜、家族戒指、左右不一致的表情和手指触碰镜面的犹豫。边界：避免普通附身恐怖或自恋贵族。", defEn: "First read: a noble heir slowly replaced by something in the mirror. Styling entry: noble dress, mirror ornaments, second gaze, misaligned smile, and hands checking the self beside reflections. Inheritance is occupied by another image. Visual evidence: mirror cufflinks, cracked glass, signet ring, asymmetrical expression, and hesitation before touching the mirror. Boundary: avoid generic possession horror or vain noble.", ontologyLevel: 4, risk: "high", tags: ["mirror", "possession", "heir"] },

  { id: "sun_chosen_hero", name: "太阳选民英雄", nameEn: "Sun-Chosen Hero", group: "H. 神话英雄 / 史诗命运", groupEn: "H. Mythic Hero / Epic Fate", def: "第一识别是被太阳神话选中的公共英雄身体。造型入口：金色披风、神器、开阔站姿、晒伤光痕和不得不向人群敞开的胸口。母题：英雄性来自共同体的期待和神话标记。视觉证据：太阳徽、明亮额头、破损护臂、群众投影和举起武器却不炫耀的手。边界：避免泛主角光环或普通金色勇者。", defEn: "First read: a public hero body chosen by solar myth. Styling entry: golden cape, artifact, open stance, sunburned light marks, and chest forced open to the crowd. Heroism comes from communal expectation and mythic mark. Visual evidence: sun emblem, bright brow, damaged bracer, crowd shadow, and a raised weapon without swagger. Boundary: avoid generic protagonist aura or golden warrior.", ontologyLevel: 3, tags: ["hero", "sun", "chosen"] },
  { id: "fallen_demigod", name: "堕落半神", nameEn: "Fallen Demigod", group: "H. 神话英雄 / 史诗命运", groupEn: "H. Mythic Hero / Epic Fate", def: "第一识别是从神话高度跌入人间的堕落半神。造型入口：破损神甲、伤痕、低垂目光、失去光泽的圣物和仍无法像普通人一样站立的身体。母题：神性残余与人间失败同时存在。视觉证据：裂纹金属、暗淡纹路、尘土膝盖、断裂冠饰和不愿接受帮助的手。边界：避免黑化神明或普通落魄战士。", defEn: "First read: a fallen demigod dropped from mythic height into the human world. Styling entry: broken divine armor, scars, lowered gaze, dull relic, and a body still unable to stand like a normal person. Divine residue and human failure coexist. Visual evidence: cracked metal, dim marks, dusty knees, broken crown piece, and hands refusing help. Boundary: avoid darkened god or generic ruined warrior.", ontologyLevel: 4, risk: "medium", tags: ["demigod", "fallen", "mythic"] },
  { id: "oracle_marked_prince", name: "神谕标记王子", nameEn: "Oracle-Marked Prince", group: "H. 神话英雄 / 史诗命运", groupEn: "H. Mythic Hero / Epic Fate", def: "第一识别是从出生起被预言写入命运的王子。造型入口：额头标记、王室披风、预言卷轴、被照顾得太精确的身体和像被未来提前观看的眼。母题：王权继承被神谕夺走自由。视觉证据：封印胎记、金线披风、占卜文书、侍从距离和手指压住卷轴边。边界：避免普通王子或命运主角空话。", defEn: "First read: a prince marked by oracle from birth. Styling entry: forehead mark, royal cloak, prophecy scroll, overly cared-for body, and eyes already watched by the future. Succession loses freedom to prophecy. Visual evidence: sealed birthmark, gold-thread cloak, divination papers, attendant spacing, and fingers pressing scroll edges. Boundary: avoid generic prince or vague destiny hero.", ontologyLevel: 3, tags: ["oracle", "prince", "fate"] },
  { id: "storm_spear_maiden", name: "风暴长矛少女", nameEn: "Storm-Spear Maiden", group: "H. 神话英雄 / 史诗命运", groupEn: "H. Mythic Hero / Epic Fate", def: "第一识别是被风暴神话推向战争的长矛少女。造型入口：长矛、乱发、雷纹布带、湿亮皮肤和在风里仍能保持重心的腿。母题：年轻身体被天气、武器和史诗召唤。视觉证据：矛尖水光、肩带飘动、膝盖泥痕、紧咬嘴角和向前压低的站姿。边界：保持成人边界，避免少女偶像或普通女战士。", defEn: "First read: a storm-spear maiden pushed toward war by storm myth. Styling entry: spear, wind-tossed hair, thunder cloth strips, wet skin shine, and legs holding center in wind. A young body is called by weather, weapon, and epic. Visual evidence: wet spear point, flying straps, muddy knees, bitten mouth, and low forward stance. Boundary: keep adult framing; avoid idol girl or generic warrior woman.", ontologyLevel: 3, risk: "medium", tags: ["storm", "spear", "maiden"] },
  { id: "underworld_bride_heroine", name: "冥府新娘英雄", nameEn: "Underworld-Bride Heroine", group: "H. 神话英雄 / 史诗命运", groupEn: "H. Mythic Hero / Epic Fate", def: "第一识别是在生死婚约中取得主动权的冥府新娘英雄。造型入口：黑白婚服、石榴纹样、冷静眼神、拖尾阴影和把婚礼誓词变成谈判条件的手。母题：婚姻神话与冥府政治互相缠绕。视觉证据：黑纱、骨白手套、石榴坠饰、钥匙戒指和不低头的正面站姿。边界：避免普通鬼新娘或冥后直译。", defEn: "First read: an underworld-bride heroine claiming agency inside a life-death marriage pact. Styling entry: black-white bridal dress, pomegranate motif, calm eyes, shadowed train, and hands turning vows into negotiation terms. Marriage myth and underworld politics intertwine. Visual evidence: black veil, bone-white gloves, pomegranate pendant, key ring, and frontal stance refusing to bow. Boundary: avoid generic ghost bride or direct underworld queen copy.", ontologyLevel: 4, risk: "medium", tags: ["underworld", "bride", "heroine"] },
  { id: "giant_slayer_beggar", name: "屠巨人乞丐", nameEn: "Giant-Slayer Beggar", group: "H. 神话英雄 / 史诗命运", groupEn: "H. Mythic Hero / Epic Fate", def: "第一识别是被民间传说夸大的底层屠巨人者。造型入口：破斗篷、巨大牙饰、旧棍、营养不良的身体和被故事赋予过大名声后的不自在。母题：英雄不从贵族来，而从生存缝隙里被讲出来。视觉证据：补丁衣、巨牙挂绳、旧伤、乞讨碗和不适应欢呼的低眼。边界：避免普通乞丐或夸张巨人杀手爽感。", defEn: "First read: a lowborn giant slayer magnified by folk legend. Styling entry: torn cloak, giant-tooth ornament, old staff, underfed body, and discomfort under a fame too large. Heroism is narrated from survival margins. Visual evidence: patched clothes, tooth cord, old wounds, begging bowl, and lowered eyes unused to cheers. Boundary: avoid generic beggar or power-fantasy giant slayer.", ontologyLevel: 3, tags: ["giant_slayer", "beggar", "folk_hero"] },
  { id: "prophecy_refusing_queen", name: "拒绝预言的女王", nameEn: "Prophecy-Refusing Queen", group: "H. 神话英雄 / 史诗命运", groupEn: "H. Mythic Hero / Epic Fate", def: "第一识别是拒绝按照神话剧本行动的女王。造型入口：王冠、撕毁卷轴、直视姿态、紧闭唇线和把神谕当政治文本处理的手。母题：王权对命运叙事进行反抗。视觉证据：破卷残片、厚重礼袍、掌心墨迹、王座边缘和不让祭司靠近的站位。边界：避免普通强势女王或叛逆口号。", defEn: "First read: a queen refusing to act by mythic script. Styling entry: crown, torn prophecy scroll, direct gaze, sealed mouth line, and hands treating oracle as political text. Royal power resists destiny narrative. Visual evidence: scroll fragments, heavy robe, inked palm, throne edge, and placement keeping priests away. Boundary: avoid generic strong queen or rebellion slogan.", ontologyLevel: 3, tags: ["queen", "prophecy", "refusal"] },
  { id: "swan_cloak_warrior", name: "天鹅羽衣战士", nameEn: "Swan-Cloak Warrior", group: "H. 神话英雄 / 史诗命运", groupEn: "H. Mythic Hero / Epic Fate", def: "第一识别是在美与战斗之间转换身份的天鹅羽衣战士。造型入口：羽衣、长剑、湖水纹、柔软颈线和一旦握剑就变硬的手腕。母题：优雅外壳里藏着迁徙、逃离和反击。视觉证据：白羽披肩、湖蓝腰带、剑鞘水纹、脚边水痕和收起羽衣的动作。边界：避免普通天鹅公主或白衣剑客。", defEn: "First read: a swan-cloak warrior shifting between beauty and combat. Styling entry: feather cloak, longsword, lake motifs, soft neck line, and wrists hardening when gripping the blade. Elegance hides migration, escape, and counterattack. Visual evidence: white feather shawl, lake-blue belt, water-pattern scabbard, wet floor marks, and gesture folding the cloak. Boundary: avoid generic swan princess or white swordsman.", ontologyLevel: 4, tags: ["swan", "warrior", "myth"] },
  { id: "fire_theft_trickster", name: "盗火骗子", nameEn: "Fire-Theft Trickster", group: "H. 神话英雄 / 史诗命运", groupEn: "H. Mythic Hero / Epic Fate", def: "第一识别是为人间偷取神物的盗火骗子。造型入口：火种匣、狡黠笑容、烧伤手指、轻快脚步和把冒犯藏成玩笑的眼。母题：文明礼物来自越界和欺骗。视觉证据：焦黑指尖、偷来的神纹布、藏火腰包、回头笑和被追赶的衣摆。边界：避免普通小偷或火法师。", defEn: "First read: a fire-theft trickster stealing divine matter for humans. Styling entry: ember box, sly smile, burned fingers, light steps, and eyes hiding transgression as joke. Civilization's gift comes from trespass and deceit. Visual evidence: charred fingertips, stolen divine cloth, hidden ember pouch, backward smile, and fleeing hem. Boundary: avoid generic thief or fire mage.", ontologyLevel: 3, risk: "medium", tags: ["fire", "trickster", "theft"] },
  { id: "last_city_champion", name: "最后城邦冠军", nameEn: "Last-City Champion", group: "H. 神话英雄 / 史诗命运", groupEn: "H. Mythic Hero / Epic Fate", def: "第一识别是替将亡城邦站到最后的冠军。造型入口：城徽盾、破损披风、疲惫荣耀、灰尘脸和明知无人接替仍不后退的脚。母题：英雄身体成为共同体最后的边界。视觉证据：盾面裂纹、旧桂冠、磨损护腿、城墙灰和从群众前方站出的姿态。边界：避免普通竞技冠军或救世主光环。", defEn: "First read: the champion standing last for a dying city-state. Styling entry: city-emblem shield, damaged cape, tired glory, dusty face, and feet refusing retreat though no successor remains. The hero body becomes the community's final boundary. Visual evidence: cracked shield, old laurel, worn greaves, wall ash, and stepping before the crowd. Boundary: avoid generic arena champion or savior aura.", ontologyLevel: 2, tags: ["champion", "city", "hero"] },

  { id: "wolf_cub_tamer", name: "狼崽驯养师", nameEn: "Wolf-Cub Tamer", group: "I. 魔物驯养 / 共生职业", groupEn: "I. Monster Taming / Symbiotic Profession", def: "第一识别是把野性训练成伙伴关系的狼崽驯养师。造型入口：皮革护腕、咬痕、小狼群、蹲低身体和不用大声也能让幼兽安静的手势。母题：驯养是长期互信和边界教育。视觉证据：食盆、训练绳、毛发粘在袖口、旧伤和狼崽贴近腿边。边界：避免普通宠物训练师或狼族战士。", defEn: "First read: a wolf-cub tamer turning wildness into partnership. Styling entry: leather bracers, bite marks, wolf pups, low crouch, and gestures calming beasts without shouting. Taming is long trust and boundary education. Visual evidence: feed bowl, training cord, fur on cuffs, old scars, and pups pressed near the legs. Boundary: avoid generic pet trainer or wolf warrior.", ontologyLevel: 2, tags: ["wolf", "tamer", "symbiosis"] },
  { id: "dragonfly_beast_trainer", name: "巨蜻蜓骑兽训练师", nameEn: "Giant-Dragonfly Mount Trainer", group: "I. 魔物驯养 / 共生职业", groupEn: "I. Monster Taming / Symbiotic Profession", def: "第一识别是训练昆虫坐骑的巨蜻蜓驯兽师。造型入口：透明护目镜、湿地靴、轻鞍、紧绷小腿和随时适应空中急停的身体平衡。母题：飞行速度被湿地劳动和昆虫习性驯化。视觉证据：翅膜反光、鞍带、捕虫网、泥水裤脚和抬手引导降落的动作。边界：避免普通骑士或昆虫怪物主角。", defEn: "First read: a giant-dragonfly mount trainer. Styling entry: transparent goggles, marsh boots, light saddle, tense calves, and balance ready for sudden aerial stops. Flight speed is trained through wetland labor and insect habits. Visual evidence: wing-membrane reflection, saddle straps, net, muddy cuffs, and hand guiding landing. Boundary: avoid generic knight or insect monster lead.", ontologyLevel: 4, tags: ["dragonfly", "mount", "trainer"] },
  { id: "slime_rancher", name: "史莱姆牧场主", nameEn: "Slime Rancher", group: "I. 魔物驯养 / 共生职业", groupEn: "I. Monster Taming / Symbiotic Profession", def: "第一识别是把软体魔物变成产业的史莱姆牧场主。造型入口：防水围裙、透明桶、黏液痕迹、胶靴和把混乱弹跳当日常工作的疲惫笑。母题：可爱危险被农业和清洁流程管理。视觉证据：分色桶、刮刀、黏液手套、围栏符号和小心托起软体的手。边界：避免可爱宠物农场或纯怪物图鉴。", defEn: "First read: a slime rancher turning soft monsters into livelihood. Styling entry: waterproof apron, clear buckets, slime traces, rubber boots, and tired smile treating bouncing chaos as work. Cute danger is managed by farming and cleaning routines. Visual evidence: color-coded buckets, scraper, slime gloves, fence signs, and hands carefully lifting soft matter. Boundary: avoid cute pet farm or monster catalog.", ontologyLevel: 4, tags: ["slime", "rancher", "monster"] },
  { id: "basilisk_blindfold_keeper", name: "蛇鸡兽蒙眼饲养员", nameEn: "Blindfold Basilisk Keeper", group: "I. 魔物驯养 / 共生职业", groupEn: "I. Monster Taming / Symbiotic Profession", def: "第一识别是在不能直视中完成照料的蛇鸡兽饲养员。造型入口：蒙眼布、厚手套、石化标本、耳朵高度警觉和凭声音判断兽位的身体。母题：危险照料依靠规训感官而不是勇敢凝视。视觉证据：盲文饲料牌、石化羽毛、护颈、手杖和侧头倾听的姿态。边界：避免普通怪兽看守或恐怖石化场面。", defEn: "First read: a basilisk keeper who cares without direct sight. Styling entry: blindfold, thick gloves, petrified samples, alert ears, and a body locating the beast by sound. Dangerous care depends on disciplined senses, not brave staring. Visual evidence: tactile feed tags, petrified feathers, neck guard, staff, and listening head tilt. Boundary: avoid generic monster guard or petrification spectacle.", ontologyLevel: 4, risk: "medium", tags: ["basilisk", "keeper", "blindfold"] },
  { id: "kraken_orphan_caretaker", name: "海怪幼体保育员", nameEn: "Kraken-Orphan Caretaker", group: "I. 魔物驯养 / 共生职业", groupEn: "I. Monster Taming / Symbiotic Profession", def: "第一识别是照料未来灾难幼体的海怪保育员。造型入口：防水外套、饲养池、触手吸盘痕、温柔疲惫和在巨大水箱前显得很小的身体。母题：灾难在幼年阶段被护理劳动暂时安抚。视觉证据：水箱编号、软管、湿发、手臂圆形痕迹和隔着玻璃安抚的手。边界：避免普通水族馆员工或海怪吞没主体。", defEn: "First read: a caretaker nursing a future catastrophe in kraken form. Styling entry: waterproof coat, nursery tank, sucker marks, tender fatigue, and a small body before a huge tank. Disaster is temporarily soothed by care labor while young. Visual evidence: tank serials, hoses, wet hair, round arm marks, and hand calming through glass. Boundary: avoid aquarium worker or kraken swallowing the subject.", ontologyLevel: 4, risk: "medium", tags: ["kraken", "caretaker", "orphan"] },
  { id: "griffin_mail_rider", name: "狮鹫邮骑", nameEn: "Griffin Mail Rider", group: "I. 魔物驯养 / 共生职业", groupEn: "I. Monster Taming / Symbiotic Profession", def: "第一识别是用狮鹫穿越山脉传信的邮骑。造型入口：邮袋、飞行皮甲、羽毛护目镜、冻红脸颊和把路线记在身体重心里的骑乘姿态。母题：通信制度依靠人与巨兽的高空协作。视觉证据：蜡封信、风磨护肩、鞍带、羽毛刮痕和落地后仍扶着邮袋的手。边界：避免普通飞行骑士或快递员。", defEn: "First read: a griffin mail rider crossing mountains with letters. Styling entry: mailbag, flight leather armor, feather goggles, wind-reddened cheeks, and riding posture storing routes in balance. Communication infrastructure relies on human-beast aerial cooperation. Visual evidence: wax letters, wind-worn shoulders, saddle straps, feather scratches, and a hand still guarding the mailbag after landing. Boundary: avoid generic flying knight or courier.", ontologyLevel: 3, tags: ["griffin", "mail", "rider"] },
  { id: "dream_eater_handler", name: "食梦兽看护人", nameEn: "Dream-Eater Handler", group: "I. 魔物驯养 / 共生职业", groupEn: "I. Monster Taming / Symbiotic Profession", def: "第一识别是管理吞噬噩梦之兽的食梦兽看护人。造型入口：睡眠铃、眼袋、柔软绳索、低声安抚和自己也长期睡不好的脸。母题：照料怪物同时照料人的精神残余。视觉证据：枕边符号、梦境记录卡、蓝黑眼下、绒布手套和给兽梳毛的慢动作。边界：避免普通驯兽师或梦幻治愈精灵。", defEn: "First read: a handler managing a beast that eats nightmares. Styling entry: sleep bells, under-eye bags, soft ropes, low soothing voice, and a face that has not slept well either. Caring for monsters also tends human psychic residue. Visual evidence: bedside signs, dream record cards, blue-black under-eyes, velvet gloves, and slow grooming motion. Boundary: avoid generic beast trainer or dreamy healing fairy.", ontologyLevel: 4, tags: ["dream_eater", "handler", "sleep"] },
  { id: "bone_hound_huntsman", name: "骨犬猎手", nameEn: "Bone-Hound Huntsman", group: "I. 魔物驯养 / 共生职业", groupEn: "I. Monster Taming / Symbiotic Profession", def: "第一识别是带着死者气味追踪目标的骨犬猎手。造型入口：骨哨、猎装、白色犬影、沉默下颌和习惯把人类线索让给非人嗅觉的身体。母题：狩猎依靠死亡材料和忠诚怪兽。视觉证据：骨质项圈、旧猎袋、灰白犬爪印、听哨手势和低头看地的眼。边界：避免普通猎人或骷髅怪物主角。", defEn: "First read: a bone-hound huntsman tracking by scent of the dead. Styling entry: bone whistle, hunting outfit, white hound shadow, silent jaw, and a body yielding human clues to nonhuman scent. Hunting relies on death material and loyal monster. Visual evidence: bone collar, old hunting bag, pale paw marks, whistle gesture, and eyes lowered to ground. Boundary: avoid generic hunter or skeleton-monster lead.", ontologyLevel: 4, risk: "medium", tags: ["bone_hound", "huntsman", "tracking"] },
  { id: "fairy_hive_beekeeper", name: "妖精蜂巢养蜂人", nameEn: "Fairy-Hive Beekeeper", group: "I. 魔物驯养 / 共生职业", groupEn: "I. Monster Taming / Symbiotic Profession", def: "第一识别是照料会说话蜂群的妖精蜂巢养蜂人。造型入口：网纱面罩、小翅光点、蜂箱符号、粘蜜手套和像对一群小贵族说话的礼貌。母题：昆虫产业与妖精社交规则重叠。视觉证据：蜂蜡印章、微型门牌、烟熏罐、金色蜂群和半弯腰问候的动作。边界：避免普通养蜂人或可爱精灵蜂群。", defEn: "First read: a fairy-hive beekeeper tending a speaking swarm. Styling entry: mesh veil, tiny wing lights, hive signs, sticky honey gloves, and politeness as if addressing small nobles. Insect industry overlaps fae social rules. Visual evidence: wax seals, miniature doorplates, smoker can, golden swarm, and half-bowed greeting. Boundary: avoid generic beekeeper or cute fairy bees.", ontologyLevel: 4, tags: ["fairy_hive", "beekeeper", "swarm"] },
  { id: "monster_school_teacher", name: "魔物学校教师", nameEn: "Monster-School Teacher", group: "I. 魔物驯养 / 共生职业", groupEn: "I. Monster Taming / Symbiotic Profession", def: "第一识别是教育危险幼崽与人类共处的魔物学校教师。造型入口：黑板、护具、点名册、粉笔灰和在混乱教室里仍保持温和秩序的站姿。母题：共生社会从课堂规训开始。视觉证据：咬痕桌角、不同尺寸座位、保护袖套、红笔批注和举手示意安静。边界：避免普通老师或怪物幼儿园可爱化。", defEn: "First read: a monster-school teacher teaching dangerous young creatures to coexist with humans. Styling entry: blackboard, protective gear, roll book, chalk dust, and a warm ordered stance inside chaos. Symbiotic society begins with classroom discipline. Visual evidence: bitten desk corners, varied seat sizes, protective sleeves, red annotations, and raised hand for quiet. Boundary: avoid generic teacher or cute monster kindergarten.", ontologyLevel: 4, tags: ["monster_school", "teacher", "coexistence"] },

  { id: "cursed_rococo_countess", name: "诅咒洛可可女伯爵", nameEn: "Cursed Rococo Countess", group: "J. 诅咒贵族 / 衰败王朝", groupEn: "J. Cursed Nobility / Decayed Dynasty", def: "第一识别是在华丽中腐败的诅咒洛可可女伯爵。造型入口：粉白礼服、裂纹珠宝、诅咒斑纹、僵硬微笑和被过度礼仪支撑起来的身体。母题：贵族美感被血统诅咒慢慢蛀空。视觉证据：粉色褪色绸缎、裂瓷妆、家徽扇、腐败香气和不自然弯曲的手指。边界：避免普通哥特贵妇或吸血鬼写真。", defEn: "First read: a cursed rococo countess decaying inside luxury. Styling entry: pale pink gown, cracked jewels, curse marks, stiff smile, and a body held up by excessive etiquette. Aristocratic beauty is hollowed by bloodline curse. Visual evidence: faded silk, cracked porcelain makeup, family crest fan, decaying perfume, and unnaturally bent fingers. Boundary: avoid generic gothic lady or vampire portrait.", ontologyLevel: 4, risk: "medium", tags: ["cursed", "rococo", "countess"] },
  { id: "vampire_debutante", name: "吸血鬼初入社交界少女", nameEn: "Vampire Debutante", group: "J. 诅咒贵族 / 衰败王朝", groupEn: "J. Cursed Nobility / Decayed Dynasty", def: "第一识别是第一次进入猎食社交场的吸血鬼名媛。造型入口：白手套、舞会礼服、苍白唇色、过分礼貌的笑和刚学会隐藏饥饿的紧张。母题：初入社交界同时也是进入捕食制度。视觉证据：邀请函、细尖犬齿暗示、红酒杯、母族项链和不敢过近的舞步。边界：保持成人呈现，避免普通吸血鬼美人或校园化。", defEn: "First read: a vampire debutante entering predatory society for the first time. Styling entry: white gloves, ball gown, pale lips, overly polite smile, and tension of newly hiding hunger. Social debut is also entry into predation rules. Visual evidence: invitation card, slight fang hint, wine glass, clan necklace, and dance steps kept not too close. Boundary: keep adult presentation; avoid generic vampire beauty or school framing.", ontologyLevel: 4, risk: "medium", tags: ["vampire", "debutante", "noble"] },
  { id: "werewolf_duke_hunter", name: "狼人公爵猎人", nameEn: "Werewolf Duke Hunter", group: "J. 诅咒贵族 / 衰败王朝", groupEn: "J. Cursed Nobility / Decayed Dynasty", def: "第一识别是追捕自己血统诅咒的狼人公爵猎人。造型入口：猎装、家徽戒指、兽化疤痕、银扣手套和把猎枪放得离自己太近的矛盾。母题：贵族职责与身体兽性互相追杀。视觉证据：月相怀表、撕裂袖口、犬齿阴影、家族猎犬绳和压住爪化的手。边界：避免普通狼人贵族或猎人职业卡。", defEn: "First read: a werewolf duke hunting his own bloodline curse. Styling entry: hunting dress, signet ring, beast scars, silver-button gloves, and a firearm kept too close to himself. Noble duty and bodily animality hunt each other. Visual evidence: moon-phase watch, torn cuff, fang shadow, family hound leash, and hand suppressing claws. Boundary: avoid generic werewolf noble or hunter class card.", ontologyLevel: 4, risk: "medium", tags: ["werewolf", "duke", "hunter"] },
  { id: "haunted_manor_governess", name: "鬼宅家庭女教师", nameEn: "Haunted-Manor Governess", group: "J. 诅咒贵族 / 衰败王朝", groupEn: "J. Cursed Nobility / Decayed Dynasty", def: "第一识别是在贵族宅邸里教育幽灵孩子的家庭女教师。造型入口：黑裙、钥匙、儿童教材、克制发髻和面对空座位仍点名的职业镇定。母题：教育制度在鬼宅中继续运行。视觉证据：粉笔字、旧童书、门缝冷光、钥匙串和把手放在空椅背上的动作。边界：避免普通女教师或恐怖女鬼。", defEn: "First read: a governess teaching ghost children in a noble manor. Styling entry: black dress, keys, children's books, restrained hair, and professional calm taking roll before empty seats. Education continues inside haunting. Visual evidence: chalk writing, old textbooks, cold door light, key ring, and hand resting on an empty chair back. Boundary: avoid generic governess or horror ghost.", ontologyLevel: 3, risk: "medium", tags: ["haunted_manor", "governess", "ghost"] },
  { id: "immortal_family_butler", name: "不死家族管家", nameEn: "Immortal Family Butler", group: "J. 诅咒贵族 / 衰败王朝", groupEn: "J. Cursed Nobility / Decayed Dynasty", def: "第一识别是服务同一家族数百年的不死管家。造型入口：燕尾服、银托盘、旧伤、近乎机械的礼貌和把几代主人都看成短暂客人的眼。母题：忠诚因不死而变成冷酷时间管理。视觉证据：褪色家徽、白手套、老照片、脖颈疤痕和无声递盘。边界：避免普通英式管家或僵尸仆从。", defEn: "First read: an immortal butler serving one family for centuries. Styling entry: tailcoat, silver tray, old wounds, almost mechanical courtesy, and eyes seeing generations of masters as temporary guests. Loyalty becomes cold time management through immortality. Visual evidence: faded crest, white gloves, old portraits, neck scar, and silent tray offering. Boundary: avoid generic English butler or zombie servant.", ontologyLevel: 4, tags: ["immortal", "butler", "family"] },
  { id: "bloodline_curse_lawyer", name: "血统诅咒律师", nameEn: "Bloodline-Curse Lawyer", group: "J. 诅咒贵族 / 衰败王朝", groupEn: "J. Cursed Nobility / Decayed Dynasty", def: "第一识别是替贵族处理诅咒遗产的血统律师。造型入口：黑色职业装、继承契约、族谱、冷静眼镜和把怪异出生当法律条款处理的手。母题：诅咒被继承法、财产和亲属关系制度化。视觉证据：红线族谱、封印文件夹、戒指印章、会议桌阴影和停在签名处的笔。边界：避免普通律师或魔法顾问。", defEn: "First read: a bloodline-curse lawyer handling cursed estates for nobles. Styling entry: black workwear, inheritance contract, genealogy, calm glasses, and hands treating strange births as legal clauses. Curse is institutionalized through inheritance law and kinship. Visual evidence: red-lined genealogy, sealed folder, ring stamp, table shadow, and pen paused at signature. Boundary: avoid generic lawyer or magic consultant.", ontologyLevel: 3, tags: ["curse", "lawyer", "bloodline"] },
  { id: "mirror_ballroom_prince", name: "镜厅王子", nameEn: "Mirror-Ballroom Prince", group: "J. 诅咒贵族 / 衰败王朝", groupEn: "J. Cursed Nobility / Decayed Dynasty", def: "第一识别是被镜厅永远复制宫廷魅力的王子。造型入口：舞会礼服、镜面碎片、冷笑、过分完美的发型和不确定哪一个倒影才是真的眼。母题：贵族自我被反射空间囚禁。视觉证据：碎镜胸针、白手套、重复侧影、舞鞋亮面和对镜邀舞的手。边界：避免普通美少年王子或镜魔怪。", defEn: "First read: a mirror-ballroom prince endlessly copied by reflective court charm. Styling entry: ballroom attire, mirror fragments, cold smile, overly perfect hair, and eyes unsure which reflection is real. Aristocratic self is trapped by reflective space. Visual evidence: mirror brooch, white gloves, repeated profiles, polished dance shoes, and hand inviting a mirror. Boundary: avoid generic pretty prince or mirror monster.", ontologyLevel: 4, risk: "medium", tags: ["mirror", "prince", "ballroom"] },
  { id: "rose_thorn_heiress", name: "玫瑰荆棘继承女", nameEn: "Rose-Thorn Heiress", group: "J. 诅咒贵族 / 衰败王朝", groupEn: "J. Cursed Nobility / Decayed Dynasty", def: "第一识别是被家族花园吞没的玫瑰荆棘继承女。造型入口：玫瑰裙、刺状珠宝、继承印章、精致伤痕和像在花园里学会不求救的表情。母题：美丽继承物同时也是限制身体的家族诅咒。视觉证据：荆棘手链、花瓣裙摆、封印信、指尖刺痕和被藤蔓拉住的站姿。边界：避免普通玫瑰公主或植物怪物。", defEn: "First read: a rose-thorn heiress consumed by the family garden. Styling entry: rose gown, thorn jewelry, inheritance seal, delicate scratches, and a face that learned not to ask for help in the garden. Beauty inheritance is also bodily restriction. Visual evidence: thorn bracelet, petal hem, sealed letter, pricked fingertips, and stance caught by vines. Boundary: avoid generic rose princess or plant monster.", ontologyLevel: 4, risk: "medium", tags: ["rose", "heiress", "curse"] },
  { id: "porcelain_mask_marquis", name: "瓷面具侯爵", nameEn: "Porcelain-Mask Marquis", group: "J. 诅咒贵族 / 衰败王朝", groupEn: "J. Cursed Nobility / Decayed Dynasty", def: "第一识别是用礼仪遮住非人脸孔的瓷面具侯爵。造型入口：瓷面具、蕾丝袖口、裂纹釉色、细礼杖和每次说话都怕面具碎裂的克制。母题：贵族礼法成为隐藏怪异的外壳。视觉证据：面具绑带、白粉领口、裂纹高光、手套指尖和微微侧头避免正面光。边界：避免普通假面舞会或恐怖面具怪。", defEn: "First read: a porcelain-mask marquis hiding an inhuman face through etiquette. Styling entry: porcelain mask, lace cuffs, cracked glaze, thin cane, and restraint as if speech might break the mask. Noble manners become a shell hiding strangeness. Visual evidence: mask ties, powdered collar, crack highlights, glove fingertips, and head turned away from frontal light. Boundary: avoid generic masquerade or horror mask monster.", ontologyLevel: 4, risk: "medium", tags: ["porcelain_mask", "marquis", "noble"] },
  { id: "last_heir_of_sunken_castle", name: "沉没城堡末裔", nameEn: "Last Heir of the Sunken Castle", group: "J. 诅咒贵族 / 衰败王朝", groupEn: "J. Cursed Nobility / Decayed Dynasty", def: "第一识别是从水下王朝幸存下来的沉没城堡末裔。造型入口：湿重礼服、盐痕王冠、家族钥匙、苍白皮肤和像仍听见水压的迟缓动作。母题：王朝衰败被海水封存成身体气质。视觉证据：海盐结晶、锈钥匙、湿发、藻绿色暗纹和双手托着王冠不敢戴上的姿态。边界：避免普通海底王子或溺亡鬼魂。", defEn: "First read: the last heir surviving an underwater dynasty. Styling entry: wet heavy formalwear, salt-stained crown, family key, pale skin, and slow movements as if still hearing water pressure. Dynastic decay is sealed into the body by seawater. Visual evidence: salt crystals, rust key, wet hair, algae-green pattern, and hands holding the crown without wearing it. Boundary: avoid generic underwater prince or drowned ghost.", ontologyLevel: 4, risk: "medium", tags: ["sunken_castle", "heir", "noble"] }
];

const seedsWithFit: ExplicitPersonaSeed[] = seeds.map(seed => ({
  ...seed,
  categoryFit: seed.categoryFit || fantasyFitOverrides[seed.id] || fantasyFit(seed.group)
}));

export const CD_PERSONA_FANTASY = buildExplicitPersonaTerms({
  categoryId: 'fantasy',
  categoryName: '奇幻 / 神话异世界 / 魔法人设',
  categoryNameEn: 'Fantasy / Mythic Otherworld / Magical Persona',
  baseTags: ['fantasy', 'myth', 'magic'],
  baseStyleTags: ['fantasy', 'mythic_otherworld'],
  baseControls: ['costume', 'body', 'prop', 'symbol', 'material', 'pose', 'ritual'],
  defaultForbids: ['无解释现代品牌化', '随机枪械战术化', '纯日常通勤化', '把所有细节都变成泛泛魔法光效'],
  defaultEras: mythic,
  defaultOntologyLevel: 3,
  visualEvidence: '服制、血统标记、法器、器物、纹章、身体异征和世界规则',
  visualEvidenceEn: 'dress, lineage marks, artifacts, tools, heraldry, bodily tells, and world rules',
  absorptionFocus: '服制制度、血统标记、法器器物、纹章、身体异征或世界规则',
  absorptionFocusEn: 'costume system, lineage marks, artifacts, heraldry, bodily tells, or world rules',
  appendVisualEvidence: false
}, seedsWithFit);
