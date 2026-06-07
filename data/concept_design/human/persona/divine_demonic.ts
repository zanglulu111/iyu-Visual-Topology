import { buildExplicitPersonaTerms, ExplicitPersonaSeed, PersonaCategoryFit, PersonaEra, personaFit } from './types';

const mythic: PersonaEra[] = ['feudal', 'modern', 'contemporary', 'mythic'];
const industrialMythic: PersonaEra[] = ['industrial', 'modern', 'contemporary', 'mythic'];
const mythicOnly: PersonaEra[] = ['mythic'];

const divineFit = (group: string) => {
  if (group.startsWith('A.')) return personaFit('weak', {
    strong: ['mythic_epic', 'fantasy', 'religious_ritual'],
    usable: ['xianxia', 'court', 'historical'],
    fusion: ['romance', 'dark_fantasy'],
    weak: ['science_fiction', 'cyberpunk', 'urban_life']
  });
  if (group.startsWith('B.')) return personaFit('weak', {
    strong: ['religious_ritual', 'mythic_epic', 'dark_fantasy'],
    usable: ['fantasy', 'horror'],
    fusion: ['science_fiction', 'surreal'],
    weak: ['urban_life', 'fashion_idol', 'real_professional']
  });
  if (group.startsWith('C.')) return personaFit('weak', {
    strong: ['dark_fantasy', 'horror', 'religious_ritual'],
    usable: ['fantasy', 'court'],
    fusion: ['romance', 'boudoir_aesthetic'],
    weak: ['urban_life', 'real_professional', 'workplace']
  });
  if (group.startsWith('D.')) return personaFit('weak', {
    strong: ['religious_ritual', 'mythic_epic'],
    usable: ['institutional', 'court', 'historical'],
    fusion: ['science_fiction', 'cyberpunk'],
    weak: ['urban_life', 'workplace', 'fashion_idol']
  });
  if (group.startsWith('E.')) return personaFit('weak', {
    strong: ['mythic_epic', 'religious_ritual', 'fantasy'],
    usable: ['dark_fantasy', 'romance'],
    fusion: ['surreal', 'horror'],
    weak: ['real_professional', 'urban_life', 'workplace']
  });
  if (group.startsWith('F.')) return personaFit('weak', {
    strong: ['mythic_epic', 'ecological', 'fantasy'],
    usable: ['xianxia', 'adventure'],
    fusion: ['surreal', 'dark_fantasy'],
    weak: ['cyberpunk', 'urban_life', 'workplace']
  });
  if (group.startsWith('G.')) return personaFit('weak', {
    strong: ['xianxia', 'religious_ritual', 'mythic_epic'],
    usable: ['wuxia', 'historical', 'fantasy'],
    fusion: ['dark_fantasy'],
    weak: ['science_fiction', 'cyberpunk', 'real_professional']
  });
  if (group.startsWith('H.')) return personaFit('weak', {
    strong: ['urban_life', 'surreal', 'religious_ritual'],
    usable: ['science_fiction', 'cyberpunk', 'fashion_idol'],
    fusion: ['mythic_epic', 'dark_fantasy'],
    weak: ['historical', 'wuxia', 'court']
  });
  if (group.startsWith('I.')) return personaFit('weak', {
    strong: ['cosmic_horror', 'science_fiction', 'religious_ritual'],
    usable: ['space_opera', 'mythic_epic', 'surreal'],
    fusion: ['fantasy', 'posthuman'],
    weak: ['wuxia', 'urban_life', 'court']
  });
  return personaFit('weak', {
    strong: ['dark_fantasy', 'religious_ritual', 'mythic_epic'],
    usable: ['horror', 'fantasy', 'surreal'],
    fusion: ['romance', 'court'],
    weak: ['urban_life', 'real_professional', 'workplace']
  });
};

const divineFitOverrides: Record<string, PersonaCategoryFit> = {
  war_god_cadet: personaFit('weak', {
    strong: ['mythic_epic', 'war_military', 'fantasy'],
    usable: ['religious_ritual', 'adventure'],
    fusion: ['dark_fantasy'],
    weak: ['cyberpunk', 'urban_life', 'fashion_idol']
  }),
  thunder_child_monk: personaFit('weak', {
    strong: ['mythic_epic', 'religious_ritual', 'fantasy'],
    usable: ['xianxia', 'wuxia'],
    fusion: ['dark_fantasy'],
    weak: ['science_fiction', 'cyberpunk', 'fashion_idol']
  }),
  harvest_god_widow: personaFit('weak', {
    strong: ['mythic_epic', 'ecological', 'romance'],
    usable: ['fantasy', 'religious_ritual'],
    fusion: ['dark_fantasy'],
    weak: ['science_fiction', 'cyberpunk', 'urban_life']
  }),
  river_deity_scholar: personaFit('weak', {
    strong: ['mythic_epic', 'xianxia', 'historical'],
    usable: ['fantasy', 'religious_ritual', 'court'],
    fusion: ['romance', 'dark_fantasy'],
    weak: ['science_fiction', 'cyberpunk', 'wasteland']
  }),
  mountain_god_orphan: personaFit('weak', {
    strong: ['mythic_epic', 'ecological', 'fantasy'],
    usable: ['religious_ritual', 'xianxia'],
    fusion: ['dark_fantasy'],
    weak: ['science_fiction', 'cyberpunk', 'fashion_idol']
  }),
  fallen_angel_soldier: personaFit('weak', {
    strong: ['religious_ritual', 'war_military', 'dark_fantasy'],
    usable: ['mythic_epic', 'fantasy', 'horror'],
    fusion: ['science_fiction'],
    weak: ['urban_life', 'fashion_idol', 'real_professional']
  }),
  stigmata_schoolgirl: personaFit('weak', {
    strong: ['religious_ritual', 'urban_life', 'dark_fantasy'],
    usable: ['institutional', 'horror', 'fantasy'],
    fusion: ['surreal'],
    weak: ['war_military', 'wuxia', 'court']
  }),
  choirboy_oracle: personaFit('weak', {
    strong: ['religious_ritual', 'institutional', 'mythic_epic'],
    usable: ['fantasy', 'horror'],
    fusion: ['surreal'],
    weak: ['cyberpunk', 'war_military', 'wasteland']
  }),
  plague_saint_nurse: personaFit('weak', {
    strong: ['religious_ritual', 'medical', 'dark_fantasy'],
    usable: ['horror', 'real_professional', 'fantasy'],
    fusion: ['body_horror'],
    weak: ['cyberpunk', 'fashion_idol', 'wuxia']
  }),
  martyr_bride: personaFit('weak', {
    strong: ['religious_ritual', 'romance', 'dark_fantasy'],
    usable: ['mythic_epic', 'horror', 'fantasy'],
    fusion: ['surreal'],
    weak: ['cyberpunk', 'war_military', 'workplace']
  }),
  silver_halo_detective: personaFit('weak', {
    strong: ['religious_ritual', 'noir_crime', 'urban_life'],
    usable: ['horror', 'dark_fantasy', 'real_professional'],
    fusion: ['surreal', 'science_fiction'],
    weak: ['wuxia', 'court', 'war_military']
  }),
  demon_contract_lawyer: personaFit('weak', {
    strong: ['dark_fantasy', 'real_professional', 'religious_ritual'],
    usable: ['horror', 'court', 'institutional'],
    fusion: ['romance', 'boudoir_aesthetic'],
    weak: ['wuxia', 'wasteland', 'war_military']
  }),
  succubus_socialite: personaFit('weak', {
    strong: ['dark_fantasy', 'court', 'boudoir_aesthetic'],
    usable: ['horror', 'fashion_idol', 'romance'],
    fusion: ['urban_life'],
    weak: ['war_military', 'wuxia', 'workplace']
  }),
  incubus_lounge_singer: personaFit('weak', {
    strong: ['dark_fantasy', 'fashion_idol', 'boudoir_aesthetic'],
    usable: ['horror', 'urban_life', 'romance'],
    fusion: ['noir_crime'],
    weak: ['war_military', 'wuxia', 'workplace']
  }),
  hell_tax_collector: personaFit('weak', {
    strong: ['dark_fantasy', 'institutional', 'real_professional'],
    usable: ['horror', 'court', 'religious_ritual'],
    fusion: ['surreal'],
    weak: ['romance', 'fashion_idol', 'war_military']
  }),
  crossroads_dealer: personaFit('weak', {
    strong: ['dark_fantasy', 'noir_crime', 'horror'],
    usable: ['urban_life', 'religious_ritual'],
    fusion: ['romance', 'surreal'],
    weak: ['court', 'wuxia', 'workplace']
  }),
  infernal_tailor: personaFit('weak', {
    strong: ['dark_fantasy', 'real_professional', 'fashion_idol'],
    usable: ['horror', 'court', 'boudoir_aesthetic'],
    fusion: ['surreal'],
    weak: ['war_military', 'wuxia', 'wasteland']
  }),
  goat_horn_preacher: personaFit('weak', {
    strong: ['dark_fantasy', 'religious_ritual', 'horror'],
    usable: ['fantasy', 'urban_life'],
    fusion: ['surreal'],
    weak: ['fashion_idol', 'war_military', 'workplace']
  }),
  false_god_idol: personaFit('weak', {
    strong: ['religious_ritual', 'fashion_idol', 'mythic_epic'],
    usable: ['institutional', 'urban_life', 'fantasy'],
    fusion: ['cyberpunk', 'science_fiction'],
    weak: ['wuxia', 'wasteland', 'war_military']
  }),
  miracle_factory_priest: personaFit('weak', {
    strong: ['religious_ritual', 'workplace', 'institutional'],
    usable: ['mythic_epic', 'science_fiction', 'historical'],
    fusion: ['cyberpunk', 'dark_fantasy'],
    weak: ['fashion_idol', 'wuxia', 'romance']
  }),
  oracle_corporate_prophet: personaFit('weak', {
    strong: ['religious_ritual', 'science_fiction', 'workplace'],
    usable: ['cyberpunk', 'institutional', 'real_professional'],
    fusion: ['surreal', 'mythic_epic'],
    weak: ['historical', 'wuxia', 'court']
  }),
  relic_body_curator: personaFit('weak', {
    strong: ['religious_ritual', 'institutional', 'real_professional'],
    usable: ['mythic_epic', 'horror', 'historical'],
    fusion: ['body_horror', 'science_fiction'],
    weak: ['fashion_idol', 'wuxia', 'romance']
  }),
  blessing_saleswoman: personaFit('weak', {
    strong: ['religious_ritual', 'real_professional', 'urban_life'],
    usable: ['institutional', 'fantasy'],
    fusion: ['surreal', 'dark_fantasy'],
    weak: ['war_military', 'wuxia', 'court']
  }),
  idolatry_model: personaFit('weak', {
    strong: ['religious_ritual', 'fashion_idol', 'urban_life'],
    usable: ['mythic_epic', 'boudoir_aesthetic'],
    fusion: ['surreal', 'cyberpunk'],
    weak: ['war_military', 'wuxia', 'workplace']
  }),
  god_machine_bishop: personaFit('weak', {
    strong: ['religious_ritual', 'science_fiction', 'posthuman'],
    usable: ['cyberpunk', 'institutional', 'mythic_epic'],
    fusion: ['cosmic_horror', 'surreal'],
    weak: ['historical', 'wuxia', 'romance']
  }),
  sacrificial_princess: personaFit('weak', {
    strong: ['mythic_epic', 'religious_ritual', 'court'],
    usable: ['romance', 'dark_fantasy', 'fantasy'],
    fusion: ['horror'],
    weak: ['workplace', 'cyberpunk', 'wasteland']
  }),
  fate_thread_seamstress: personaFit('weak', {
    strong: ['mythic_epic', 'religious_ritual', 'real_professional'],
    usable: ['fantasy', 'fashion_idol'],
    fusion: ['surreal', 'dark_fantasy'],
    weak: ['war_military', 'wuxia', 'workplace']
  }),
  doom_bride: personaFit('weak', {
    strong: ['mythic_epic', 'religious_ritual', 'romance'],
    usable: ['dark_fantasy', 'horror', 'fantasy'],
    fusion: ['surreal'],
    weak: ['workplace', 'cyberpunk', 'wuxia']
  }),
  curse_bearing_mother: personaFit('weak', {
    strong: ['mythic_epic', 'religious_ritual', 'romance'],
    usable: ['dark_fantasy', 'horror', 'fantasy'],
    fusion: ['surreal'],
    weak: ['workplace', 'cyberpunk', 'fashion_idol']
  }),
  sacrificial_lamb_actor: personaFit('weak', {
    strong: ['mythic_epic', 'religious_ritual', 'fashion_idol'],
    usable: ['dark_fantasy', 'horror', 'urban_life'],
    fusion: ['surreal'],
    weak: ['workplace', 'wuxia', 'court']
  }),
  end_times_mailman: personaFit('weak', {
    strong: ['mythic_epic', 'religious_ritual', 'real_professional'],
    usable: ['dark_fantasy', 'urban_life', 'fantasy'],
    fusion: ['surreal', 'horror'],
    weak: ['fashion_idol', 'wuxia', 'court']
  }),
  storm_halo_pilot: personaFit('weak', {
    strong: ['mythic_epic', 'ecological', 'adventure'],
    usable: ['science_fiction', 'war_military', 'fantasy'],
    fusion: ['surreal'],
    weak: ['workplace', 'fashion_idol', 'court']
  }),
  volcano_bride: personaFit('weak', {
    strong: ['mythic_epic', 'ecological', 'romance'],
    usable: ['fantasy', 'religious_ritual'],
    fusion: ['dark_fantasy', 'surreal'],
    weak: ['cyberpunk', 'workplace', 'war_military']
  }),
  desert_sun_monk: personaFit('weak', {
    strong: ['mythic_epic', 'ecological', 'religious_ritual'],
    usable: ['fantasy', 'xianxia', 'adventure'],
    fusion: ['dark_fantasy'],
    weak: ['cyberpunk', 'urban_life', 'fashion_idol']
  }),
  river_mouth_priestess: personaFit('weak', {
    strong: ['mythic_epic', 'ecological', 'religious_ritual'],
    usable: ['fantasy', 'xianxia'],
    fusion: ['romance', 'dark_fantasy'],
    weak: ['cyberpunk', 'workplace', 'war_military']
  }),
  eclipse_dancer: personaFit('weak', {
    strong: ['mythic_epic', 'ecological', 'fashion_idol'],
    usable: ['religious_ritual', 'fantasy'],
    fusion: ['surreal', 'dark_fantasy'],
    weak: ['cyberpunk', 'workplace', 'war_military']
  }),
  city_god_clerk: personaFit('weak', {
    strong: ['xianxia', 'religious_ritual', 'institutional'],
    usable: ['wuxia', 'historical', 'fantasy'],
    fusion: ['dark_fantasy', 'urban_life'],
    weak: ['science_fiction', 'cyberpunk', 'fashion_idol']
  }),
  fortune_god_accountant: personaFit('weak', {
    strong: ['xianxia', 'religious_ritual', 'real_professional'],
    usable: ['historical', 'fantasy', 'urban_life'],
    fusion: ['dark_fantasy'],
    weak: ['war_military', 'cyberpunk', 'fashion_idol']
  }),
  underworld_bailiff: personaFit('weak', {
    strong: ['xianxia', 'religious_ritual', 'institutional'],
    usable: ['wuxia', 'historical', 'dark_fantasy'],
    fusion: ['horror'],
    weak: ['science_fiction', 'cyberpunk', 'fashion_idol']
  }),
  peach_blossom_fairy_bride: personaFit('weak', {
    strong: ['xianxia', 'romance', 'mythic_epic'],
    usable: ['religious_ritual', 'fantasy', 'historical'],
    fusion: ['dark_fantasy'],
    weak: ['science_fiction', 'cyberpunk', 'wasteland']
  }),
  subway_station_god: personaFit('weak', {
    strong: ['urban_life', 'surreal', 'religious_ritual'],
    usable: ['real_professional', 'science_fiction'],
    fusion: ['mythic_epic', 'dark_fantasy'],
    weak: ['historical', 'wuxia', 'court']
  }),
  mall_temple_idol: personaFit('weak', {
    strong: ['urban_life', 'fashion_idol', 'religious_ritual'],
    usable: ['surreal', 'science_fiction'],
    fusion: ['mythic_epic', 'cyberpunk'],
    weak: ['historical', 'wuxia', 'court']
  }),
  wifi_signal_saint: personaFit('weak', {
    strong: ['urban_life', 'science_fiction', 'religious_ritual'],
    usable: ['cyberpunk', 'surreal'],
    fusion: ['mythic_epic', 'posthuman'],
    weak: ['historical', 'wuxia', 'court']
  }),
  atm_fortune_spirit: personaFit('weak', {
    strong: ['urban_life', 'surreal', 'religious_ritual'],
    usable: ['science_fiction', 'real_professional'],
    fusion: ['cyberpunk', 'mythic_epic'],
    weak: ['historical', 'wuxia', 'court']
  }),
  social_media_prayer_girl: personaFit('weak', {
    strong: ['urban_life', 'fashion_idol', 'religious_ritual'],
    usable: ['science_fiction', 'surreal'],
    fusion: ['cyberpunk', 'mythic_epic'],
    weak: ['historical', 'wuxia', 'court']
  }),
  airport_limbo_angel: personaFit('weak', {
    strong: ['urban_life', 'surreal', 'religious_ritual'],
    usable: ['real_professional', 'science_fiction'],
    fusion: ['mythic_epic', 'dark_fantasy'],
    weak: ['historical', 'wuxia', 'court']
  }),
  office_cubicle_deity: personaFit('weak', {
    strong: ['urban_life', 'workplace', 'surreal'],
    usable: ['religious_ritual', 'science_fiction', 'real_professional'],
    fusion: ['mythic_epic', 'dark_fantasy'],
    weak: ['historical', 'wuxia', 'court']
  }),
  star_womb_priestess: personaFit('weak', {
    strong: ['cosmic_horror', 'religious_ritual', 'science_fiction'],
    usable: ['space_opera', 'mythic_epic', 'body_horror'],
    fusion: ['fantasy', 'posthuman'],
    weak: ['wuxia', 'urban_life', 'court']
  }),
  nebula_choir_girl: personaFit('weak', {
    strong: ['cosmic_horror', 'religious_ritual', 'fashion_idol'],
    usable: ['science_fiction', 'space_opera', 'surreal'],
    fusion: ['mythic_epic'],
    weak: ['wuxia', 'urban_life', 'court']
  }),
  asteroid_shrine_keeper: personaFit('weak', {
    strong: ['cosmic_horror', 'religious_ritual', 'real_professional'],
    usable: ['science_fiction', 'space_opera', 'workplace'],
    fusion: ['wasteland', 'posthuman'],
    weak: ['wuxia', 'urban_life', 'court']
  }),
  cosmic_martyr_pilot: personaFit('weak', {
    strong: ['cosmic_horror', 'science_fiction', 'war_military'],
    usable: ['religious_ritual', 'space_opera', 'adventure'],
    fusion: ['mythic_epic'],
    weak: ['wuxia', 'urban_life', 'court']
  }),
  planetary_oracle_queen: personaFit('weak', {
    strong: ['cosmic_horror', 'science_fiction', 'court'],
    usable: ['religious_ritual', 'space_opera', 'mythic_epic'],
    fusion: ['fantasy', 'posthuman'],
    weak: ['wuxia', 'urban_life', 'workplace']
  }),
  solar_cult_astronaut: personaFit('weak', {
    strong: ['science_fiction', 'religious_ritual', 'space_opera'],
    usable: ['cosmic_horror', 'adventure', 'real_professional'],
    fusion: ['mythic_epic', 'posthuman'],
    weak: ['wuxia', 'court', 'historical']
  }),
  broken_halo_nun: personaFit('weak', {
    strong: ['dark_fantasy', 'religious_ritual', 'horror'],
    usable: ['fantasy', 'surreal'],
    fusion: ['romance'],
    weak: ['urban_life', 'real_professional', 'workplace']
  }),
  blasphemy_court_jester: personaFit('weak', {
    strong: ['dark_fantasy', 'court', 'religious_ritual'],
    usable: ['horror', 'fantasy', 'surreal'],
    fusion: ['romance'],
    weak: ['urban_life', 'real_professional', 'workplace']
  }),
  failed_prophet_teacher: personaFit('weak', {
    strong: ['dark_fantasy', 'religious_ritual', 'real_professional'],
    usable: ['horror', 'fantasy', 'institutional'],
    fusion: ['surreal'],
    weak: ['urban_life', 'fashion_idol', 'wuxia']
  }),
  sacrilege_fashion_muse: personaFit('weak', {
    strong: ['dark_fantasy', 'fashion_idol', 'religious_ritual'],
    usable: ['horror', 'boudoir_aesthetic', 'surreal'],
    fusion: ['urban_life'],
    weak: ['war_military', 'wuxia', 'workplace']
  }),
  burned_scripture_librarian: personaFit('weak', {
    strong: ['dark_fantasy', 'religious_ritual', 'institutional'],
    usable: ['horror', 'real_professional', 'fantasy'],
    fusion: ['surreal'],
    weak: ['fashion_idol', 'wuxia', 'war_military']
  })
};

const seeds: ExplicitPersonaSeed[] = [
  { id: "demigod_heir", name: "半神继承人", nameEn: "Demigod Heir", group: "A. 半神 / 神子 / 神裔", groupEn: "A. Demigod / Divine Child / God-Blood", def: "第一识别是半神继承人。造型入口：人类礼服被神性血统撑出异常比例，额骨或肩线带轻微发光纹，继承信物贴近身体核心。母题：神圣血统被压进继承制度，而不是直接变成神。张力：他/她必须一半像被家族训练的继承人，一半像身体还不能完全容纳神力。视觉证据：家徽圣符、半透明脉络、礼仪手套、过亮瞳孔和被随从保持距离的站位。边界：避免普通王子公主、全能神明或空泛发光美人。", defEn: "First read: Demigod Heir. Styling entry: human formalwear strained by divine blood, faint glowing bone or shoulder lines, and an inherited token close to the body core. The identity is divine lineage pressed into succession, not a full god. Visual evidence: heraldic sacred mark, translucent veins, etiquette gloves, too-bright pupils, and attendants keeping distance. Boundary: avoid generic prince, full deity, or vague glowing beauty.", ontologyLevel: 4, eras: mythicOnly, tags: ["demigod", "heir", "bloodline"] },
  { id: "sun_god_bastard", name: "太阳神私生子", nameEn: "Sun-God Bastard", group: "A. 半神 / 神子 / 神裔", groupEn: "A. Demigod / Divine Child / God-Blood", def: "第一识别是太阳神私生子。造型入口：晒裂金肤、未被承认的神纹、破损白衣、刺眼瞳光和像被正午光线追赶的孤立站姿。母题：神圣血缘没有获得合法位置，只留下过强的光和污名。张力：太阳性要带灼伤、骄傲和排斥感，不要只是阳光少年。视觉证据：肩颈金色晒痕、烧焦衣边、私生纹章被遮住一半、眼周高光和不进入阴影的身体。边界：避免阿波罗式直译或普通金发英雄。", defEn: "First read: Sun-God Bastard. Styling entry: sun-cracked golden skin, unacknowledged divine mark, damaged white clothes, blinding pupils, and isolated stance chased by noon light. Sacred blood lacks legitimacy and appears as excessive light and stigma. Visual evidence: golden burn marks, singed hems, half-hidden bastard crest, hard eye highlights, and a body refusing shadow. Boundary: avoid direct Apollo copy or generic golden hero.", ontologyLevel: 4, eras: mythicOnly, tags: ["sun", "bastard", "demigod"] },
  { id: "sea_god_daughter", name: "海神之女", nameEn: "Sea-God Daughter", group: "A. 半神 / 神子 / 神裔", groupEn: "A. Demigod / Divine Child / God-Blood", def: "第一识别是海神之女。造型入口：湿光发丝、盐晶耳饰、潮汐纹披肩、略带鳞感的锁骨边缘和站在陆地上仍像听见海潮的侧脸。母题：海洋血统被装进人形礼仪。张力：她不能只是美人鱼或蓝色公主，必须显出陆地生活对她身体的不适配。视觉证据：水线裙摆、珍珠封扣、脚踝潮痕、贝壳权杖和避开干燥空气的手。边界：避免童话人鱼、海妖诱惑或普通海蓝色装扮。", defEn: "First read: Sea-God Daughter. Styling entry: wet-shine hair, salt-crystal earrings, tidal shawl, slight scale texture near the clavicle, and a profile still hearing the sea on land. Ocean blood is forced into humanoid etiquette. Visual evidence: waterline hem, pearl clasps, ankle tide marks, shell scepter, and hands avoiding dry air. Boundary: avoid fairy-tale mermaid, siren seduction, or generic blue styling.", ontologyLevel: 4, eras: mythicOnly, tags: ["sea", "daughter", "demigod"] },
  { id: "war_god_cadet", name: "战神少年兵", nameEn: "War-God Cadet", group: "A. 半神 / 神子 / 神裔", groupEn: "A. Demigod / Divine Child / God-Blood", def: "第一识别是战神少年兵。造型入口：训练甲、未成熟的肌肉、过早出现的战纹、握武器时异常稳定的手和被战争神性提前征召的眼。母题：少年身体被战神谱系压进军训秩序。张力：他/她不是热血小战士，而是过早被神性暴力占用的人形。视觉证据：训练护臂、血红护符、磨破靴、额角细裂光和压住冲动的下颌线。边界：避免未成年化消费、超级英雄少年或普通军校生。", defEn: "First read: War-God Cadet. Styling entry: training armor, not-yet-mature muscle, early war marks, unnaturally steady weapon hand, and eyes drafted too soon by war divinity. A young body is pressed into divine military order. Visual evidence: training bracers, blood-red charm, worn boots, fine light cracks at the brow, and jaw holding back impulse. Boundary: avoid child-coded consumption, superhero teen, or generic cadet.", ontologyLevel: 4, eras: mythicOnly, tags: ["war_god", "cadet", "demigod"] },
  { id: "moon_blood_princess", name: "月血公主", nameEn: "Moon-Blood Princess", group: "A. 半神 / 神子 / 神裔", groupEn: "A. Demigod / Divine Child / God-Blood", def: "第一识别是月血公主。造型入口：银白礼服、月相额饰、冷色皮肤、半透明血管和只在夜光下显现的王室纹路。母题：继承权与潮汐、周期和冷距离绑定。张力：她的高贵要安静、周期性、难以靠近，不是梦幻少女。视觉证据：月相冠、银线袖口、苍白唇色、夜光裙摆和像计算时间一样抬眼的表情。边界：避免月亮仙女、普通银色公主或吸血鬼化。", defEn: "First read: Moon-Blood Princess. Styling entry: silver-white formalwear, moon-phase forehead ornament, cool skin, translucent veins, and royal markings visible only under night light. Succession is bound to tides, cycles, and distance. Visual evidence: moon-phase crown, silver cuffs, pale lips, luminous hem, and eyes rising as if counting time. Boundary: avoid moon fairy, generic silver princess, or vampire framing.", ontologyLevel: 4, eras: mythicOnly, tags: ["moon", "princess", "bloodline"] },
  { id: "thunder_child_monk", name: "雷神之子僧侣", nameEn: "Thunder-Child Monk", group: "A. 半神 / 神子 / 神裔", groupEn: "A. Demigod / Divine Child / God-Blood", def: "第一识别是雷神之子僧侣。造型入口：粗布僧衣被金属线加固、剃发边缘带电痕、手腕缠雷纹绳结和努力把暴烈神力压进静坐纪律的身体。母题：雷霆血统被修行强行降噪。张力：安静必须像压住爆裂，不是天然慈悲。视觉证据：焦黑念珠、皮肤电弧细纹、沉重木屐、闭眼呼吸和衣角被静电撑开。边界：避免普通武僧、雷电法师或随机特效。", defEn: "First read: Thunder-Child Monk. Styling entry: coarse monk robe reinforced with metal thread, electric burn at shaved hairline, thunder-knot wrist cord, and a body forcing violent divinity into sitting discipline. Thunder blood is deliberately quieted. Visual evidence: charred beads, fine lightning lines on skin, heavy wooden sandals, closed breathing, and static-lifted hem. Boundary: avoid generic warrior monk, lightning mage, or random effects.", ontologyLevel: 4, eras: mythicOnly, tags: ["thunder", "monk", "demigod"] },
  { id: "harvest_god_widow", name: "丰饶神寡妇", nameEn: "Harvest-God Widow", group: "A. 半神 / 神子 / 神裔", groupEn: "A. Demigod / Divine Child / God-Blood", def: "第一识别是丰饶神寡妇。造型入口：丧服里缝着谷穗金线、成熟身体线条、手中干枯花束和仍被土地索取的温柔疲惫。母题：丰饶不是喜庆，而是生产、失去和周期继续。张力：她要同时像丧偶者和丰收象征。视觉证据：黑纱、麦穗冠、泥土指甲、乳白或金色护符和低头抚摸腹部或谷物的手。边界：避免田园女神、性感寡妇或普通农妇。", defEn: "First read: Harvest-God Widow. Styling entry: mourning dress sewn with wheat-gold thread, mature body line, dried bouquet, and tender fatigue still claimed by the land. Fertility is production, loss, and continuing cycles. Visual evidence: black veil, wheat crown, soil under nails, milky or golden charm, and a hand touching grain or abdomen. Boundary: avoid pastoral goddess, sexy widow, or generic farm woman.", ontologyLevel: 4, eras: mythicOnly, tags: ["harvest", "widow", "fertility"] },
  { id: "river_deity_scholar", name: "河神书生", nameEn: "River-Deity Scholar", group: "A. 半神 / 神子 / 神裔", groupEn: "A. Demigod / Divine Child / God-Blood", def: "第一识别是河神书生。造型入口：湿润长衫、水渍书卷、袖口浮藻纹、温和但不可测的眼和像水流一样避开正面冲突的站姿。母题：水域神性被折进文人礼法。张力：他不是古风书生，而是用温顺外表隐藏河道权力。视觉证据：水纹腰带、墨迹晕开、木舟令牌、发尾潮气和指尖滴水。边界：避免仙侠书生、水鬼或普通河边文人。", defEn: "First read: River-Deity Scholar. Styling entry: damp scholar robe, water-stained scrolls, algae-pattern cuffs, gentle unreadable eyes, and a stance avoiding confrontation like current. River divinity is folded into literati etiquette. Visual evidence: water-pattern belt, bleeding ink, boat token, damp hair ends, and dripping fingertips. Boundary: avoid xianxia scholar, water ghost, or generic riverside poet.", ontologyLevel: 4, eras: mythic, tags: ["river", "scholar", "deity"] },
  { id: "mountain_god_orphan", name: "山神孤儿", nameEn: "Mountain-God Orphan", group: "A. 半神 / 神子 / 神裔", groupEn: "A. Demigod / Divine Child / God-Blood", def: "第一识别是山神孤儿。造型入口：粗毛披肩、石粉皮肤、野草绳结、沉默宽站姿和被山民供养又被山神遗留的矛盾孤独。母题：山的神性不是宏伟，而是重量、沉默和不易移动。张力：孩子气或孤儿感必须被岩石般的身体稳定压住。视觉证据：石纹胎记、木牌供物、磨破草鞋、肩上尘土和像听见远处回声的侧耳。边界：避免野孩子、山妖或可爱神童。", defEn: "First read: Mountain-God Orphan. Styling entry: coarse fur shawl, stone-dusted skin, wild-grass knots, silent wide stance, and loneliness of a child both fed by villagers and left by the mountain. Mountain divinity is weight and silence. Visual evidence: stone birthmark, offering tag, worn straw shoes, dusted shoulders, and an ear turned to distant echo. Boundary: avoid wild child, mountain monster, or cute prodigy.", ontologyLevel: 4, eras: mythic, tags: ["mountain", "orphan", "deity"] },
  { id: "forgotten_minor_god", name: "被遗忘的小神", nameEn: "Forgotten Minor God", group: "A. 半神 / 神子 / 神裔", groupEn: "A. Demigod / Divine Child / God-Blood", def: "第一识别是被遗忘的小神。造型入口：褪色神衣、缺角小神龛饰物、尘封供物、过时礼冠和仍保持神明姿态却无人回应的眼。母题：神性在失去信众后缩小成可怜的仪式残留。张力：他/她要有神格，不是可怜流浪者；衰微也必须有旧权威痕迹。视觉证据：破损光环、干枯花、掉漆符牌、灰尘边缘和等待祭拜的正坐。边界：避免普通乞丐、萌化小神或全能神明。", defEn: "First read: Forgotten Minor God. Styling entry: faded divine clothes, chipped shrine ornament, dusty offerings, outdated crown, and eyes keeping god posture with no answer. Divinity shrinks into ritual residue after losing worshippers. Visual evidence: broken halo, dried flowers, flaking plaque, dust edges, and seated posture waiting for prayer. Boundary: avoid generic beggar, cute minor god, or full deity.", ontologyLevel: 5, eras: mythicOnly, tags: ["forgotten", "minor_god", "decay"] },

  { id: "fallen_angel_soldier", name: "堕天使士兵", nameEn: "Fallen Angel Soldier", group: "B. 天使 / 圣徒 / 神罚", groupEn: "B. Angel / Saint / Divine Punishment", def: "第一识别是堕天使士兵。造型入口：破损军装、折断翼骨、暗淡光环、纪律站姿和仍不肯放下武器的沉默。母题：天使身份被战争和驱逐弄脏。张力：堕落不是邪恶化，而是神圣军纪失去归属后的残余。视觉证据：羽毛灰尘、烧焦肩章、断翼绑带、失准圣徽和看向上方却得不到命令的眼。边界：避免黑翼帅哥、恶魔士兵或普通天使。", defEn: "First read: Fallen Angel Soldier. Styling entry: damaged uniform, broken wing bones, dim halo, disciplined stance, and silence refusing to drop the weapon. Fallenness is sacred military order losing belonging. Visual evidence: dusty feathers, burned epaulettes, bound wing break, misaligned holy badge, and eyes looking upward for orders. Boundary: avoid cool black-wing figure, demon soldier, or generic angel.", ontologyLevel: 4, eras: mythic, tags: ["fallen_angel", "soldier", "punishment"] },
  { id: "burning_wing_saint", name: "燃翼圣徒", nameEn: "Burning-Wing Saint", group: "B. 天使 / 圣徒 / 神罚", groupEn: "B. Angel / Saint / Divine Punishment", def: "第一识别是燃翼圣徒。造型入口：白袍边缘被火光吞噬、翅根像刑罚一样燃烧、面部平静到近乎失真。母题：圣性不是光洁祝福，而是持续承受神罚后的公开身体。张力：火焰必须像惩罚和证明，不是华丽特效。视觉证据：焦黑羽轴、红金裂光、烧穿袖口、祈祷手势和没有逃离姿态的站位。边界：避免火焰天使、凤凰化或普通殉道者。", defEn: "First read: Burning-Wing Saint. Styling entry: white robe edges eaten by flame, wing roots burning like punishment, and a face calm to distortion. Sanctity is public endurance of divine penalty. Visual evidence: charred feather shafts, red-gold cracks, burned cuffs, prayer hands, and stance refusing escape. Boundary: avoid fire angel, phoenix treatment, or generic martyr.", ontologyLevel: 5, eras: mythic, risk: "high", tags: ["burning_wing", "saint", "stigmata"] },
  { id: "blind_judgement_angel", name: "盲眼审判天使", nameEn: "Blind Judgement Angel", group: "B. 天使 / 圣徒 / 神罚", groupEn: "B. Angel / Saint / Divine Punishment", def: "第一识别是盲眼审判天使。造型入口：蒙眼布、秤形圣物、锋利白袍、无瞳光感和不依赖视线也能压住空间的正面站姿。母题：审判从观看转向不可逃避的秩序。张力：盲不是脆弱，而是更冷的裁决机制。视觉证据：眼布上的金线、天平坠饰、直线衣褶、紧闭唇线和对称到压迫的身体轴。边界：避免普通正义女神、盲眼美人或恐怖怪物。", defEn: "First read: Blind Judgement Angel. Styling entry: eye cloth, scale relic, sharp white robe, pupil-less light, and frontal stance controlling space without sight. Judgment moves from seeing to unavoidable order. Visual evidence: gold-thread blindfold, scale pendant, straight folds, sealed lips, and oppressively symmetrical body axis. Boundary: avoid generic justice goddess, blind beauty, or horror monster.", ontologyLevel: 5, eras: mythic, risk: "high", tags: ["judgement", "angel", "blind"] },
  { id: "stigmata_schoolgirl", name: "圣痕女学生", nameEn: "Stigmata Schoolgirl", group: "B. 天使 / 圣徒 / 神罚", groupEn: "B. Angel / Saint / Divine Punishment", def: "第一识别是圣痕女学生。造型入口：成人安全边界下的学院制服类型、包扎手心、膝上书本、校服袖口渗出的圣痕红和被同伴目光隔开的安静。母题：日常教育场景被神罚痕迹打断。张力：脆弱要克制，不能恋痛或未成年化；重点在制度制服和不可解释标记的冲突。视觉证据：绷带、课本、圣牌、干净领结、低头坐姿和避开触碰的手。边界：保持成人呈现，避免情色化校园或伤害展示。", defEn: "First read: Stigmata Schoolgirl. Styling entry: academy-uniform type within adult-safe framing, bandaged palms, book on knees, red stigmata at cuffs, and quiet separation by peer gaze. Daily education is interrupted by divine marks. Visual evidence: bandages, textbook, saint medal, clean bow, lowered seated posture, and hands avoiding touch. Boundary: keep adult presentation; avoid eroticized school framing or injury spectacle.", ontologyLevel: 4, eras: mythic, tags: ["stigmata", "school", "saint"] },
  { id: "choirboy_oracle", name: "唱诗班预言少年", nameEn: "Choirboy Oracle", group: "B. 天使 / 圣徒 / 神罚", groupEn: "B. Angel / Saint / Divine Punishment", def: "第一识别是唱诗班预言少年。造型入口：白色唱诗袍、谱架、喉部发光纹、过于清澈的眼和唱到一半像被未来占据的停顿。母题：声音成为预言通道，而身体仍被唱诗班纪律管束。张力：神谕要从喉咙、乐谱和队列中显现，不要变成自由法师。视觉证据：乐谱、蜡烛、喉结光痕、合唱队站位和突然失焦的眼。边界：避免儿童神棍化或普通教堂歌手。", defEn: "First read: Choirboy Oracle. Styling entry: white choir robe, music stand, glowing throat mark, too-clear eyes, and a pause mid-song as future takes over. Voice becomes prophecy while the body remains under choir discipline. Visual evidence: sheet music, candles, throat light, choir formation, and unfocused eyes. Boundary: avoid child prophet exploitation or generic church singer.", ontologyLevel: 4, eras: mythic, tags: ["choir", "oracle", "voice"] },
  { id: "exiled_guardian_angel", name: "流放守护天使", nameEn: "Exiled Guardian Angel", group: "B. 天使 / 圣徒 / 神罚", groupEn: "B. Angel / Saint / Divine Punishment", def: "第一识别是流放守护天使。造型入口：旧守护披风、残缺光环、磨损护符、街边临时栖身痕迹和仍习惯挡在他人前面的身体。母题：守护职责失去天界授权后变成私人执拗。张力：落魄要和保护本能并存。视觉证据：羽毛藏在衣领里、破旧圣符、雨中伸出的手、背包和身体挡住危险方向的站位。边界：避免普通流浪者或温柔天使。", defEn: "First read: Exiled Guardian Angel. Styling entry: old guardian cloak, damaged halo, worn charm, street shelter traces, and a body still stepping before others. Protection remains after heavenly authorization is lost. Visual evidence: feathers hidden in collar, broken holy token, hand extended in rain, backpack, and stance blocking danger. Boundary: avoid generic drifter or gentle angel.", ontologyLevel: 4, eras: mythic, tags: ["guardian", "angel", "exile"] },
  { id: "plague_saint_nurse", name: "瘟疫圣徒护士", nameEn: "Plague-Saint Nurse", group: "B. 天使 / 圣徒 / 神罚", groupEn: "B. Angel / Saint / Divine Punishment", def: "第一识别是瘟疫圣徒护士。造型入口：护士制服与圣徒披巾叠合、口罩边缘、药箱、病房蜡烛和照护传染病人后仍不退开的手。母题：护理劳动被推到牺牲和神圣之间。张力：圣性必须来自照护流程、疲惫和感染风险，不是漂亮光环。视觉证据：红十字与圣徽混合、消毒瓶、绷带、蜡黄灯和眼下疲劳。边界：避免灾难猎奇、普通护士或圣母化。", defEn: "First read: Plague-Saint Nurse. Styling entry: nurse uniform layered with saint shawl, mask edge, medicine case, ward candles, and hands that do not withdraw from contagious patients. Care work approaches sacrifice. Visual evidence: red-cross and holy mark mixed, disinfectant bottle, bandages, yellow ward light, and under-eye fatigue. Boundary: avoid disaster spectacle, generic nurse, or saintly idealization.", ontologyLevel: 4, eras: mythic, risk: "medium", tags: ["plague", "saint", "nurse"] },
  { id: "martyr_bride", name: "殉道新娘", nameEn: "Martyr Bride", group: "B. 天使 / 圣徒 / 神罚", groupEn: "B. Angel / Saint / Divine Punishment", def: "第一识别是殉道新娘。造型入口：白纱与圣葬布交叠、戒指与圣痕同框、没有婚礼喜悦的平静脸和像走向祭坛也像走向刑场的步态。母题：婚姻图像被牺牲仪式占用。张力：她不是浪漫新娘，而是被公开见证的承诺和死亡边界。视觉证据：破白纱、蜡烛、手心痕迹、花束枯边和向前不回头的姿态。边界：避免普通新娘、恐怖婚纱或露骨受害图。", defEn: "First read: Martyr Bride. Styling entry: white veil layered with burial cloth, ring and stigmata in one frame, calm face without wedding joy, and a walk toward altar and execution at once. Marriage image is occupied by sacrifice. Visual evidence: torn white veil, candles, palm marks, wilted bouquet, and forward stance without looking back. Boundary: avoid generic bride, horror wedding, or explicit victim image.", ontologyLevel: 4, eras: mythic, risk: "medium", tags: ["martyr", "bride", "sacrifice"] },
  { id: "silver_halo_detective", name: "银光环侦探", nameEn: "Silver-Halo Detective", group: "B. 天使 / 圣徒 / 神罚", groupEn: "B. Angel / Saint / Divine Punishment", def: "第一识别是银光环侦探。造型入口：深色风衣、细银光环、案件照片、忏悔室阴影和用神圣残光追查罪行的冷静侧脸。母题：审判职能被折进侦探职业。张力：神性要克制到像证据光，不要变成天使办案爽感。视觉证据：银色环光、手套、线索板、旧警徽、湿街反光和半遮翅痕的外套。边界：避免普通侦探、天使警察或黑色电影复刻。", defEn: "First read: Silver-Halo Detective. Styling entry: dark trench coat, thin silver halo, case photos, confessional shadow, and calm profile tracing crime with sacred residue. Judgment is folded into detective work. Visual evidence: silver ring light, gloves, clue board, old badge, wet street reflection, and coat hiding wing scars. Boundary: avoid generic detective, angel cop, or noir copy.", ontologyLevel: 4, eras: mythic, tags: ["halo", "detective", "angel"] },
  { id: "angelic_executioner", name: "天使处刑人", nameEn: "Angelic Executioner", group: "B. 天使 / 圣徒 / 神罚", groupEn: "B. Angel / Saint / Divine Punishment", def: "第一识别是天使处刑人。造型入口：洁白处刑袍、遮面光环、仪式刀或绳、无情手套和将神罚执行成流程的精确动作。母题：神圣暴力被制度化成冷洁职业。张力：他/她的恐怖来自干净、安静和不可申诉，而不是残酷表情。视觉证据：白布、金色封印、处刑台阴影、双手对称和被擦得过亮的工具。边界：避免杀手、恶魔刽子手或血腥猎奇。", defEn: "First read: Angelic Executioner. Styling entry: white execution robe, veiling halo, ritual blade or cord, merciless gloves, and precise motions turning divine punishment into procedure. Sacred violence becomes clean occupation. Visual evidence: white cloth, golden seals, execution-platform shadow, symmetrical hands, and over-polished tool. Boundary: avoid assassin, demonic headsman, or gore spectacle.", ontologyLevel: 5, eras: mythic, risk: "high", tags: ["executioner", "angel", "punishment"] },

  { id: "demon_contract_lawyer", name: "恶魔契约律师", nameEn: "Demon-Contract Lawyer", group: "C. 恶魔 / 契约 / 地狱贵族", groupEn: "C. Demon / Contract / Infernal Aristocracy", def: "第一识别是恶魔契约律师。造型入口：深色西装、细角被发型隐藏、羊皮纸合同、红蜡印和把诱惑包装成合法条款的微笑。母题：恶魔性通过文书、谈判和漏洞显影。张力：危险不靠爪牙，而靠礼貌、笔和签名位置。视觉证据：契约夹、暗红内衬、尖锐指甲、天平胸针和请对方落笔的手势。边界：避免普通律师、魔王或露骨诱惑。", defEn: "First read: Demon-Contract Lawyer. Styling entry: dark suit, small horns hidden by hair, parchment contract, red wax seal, and a smile packaging temptation as legal terms. Demonhood appears through paperwork and loopholes. Visual evidence: contract folder, dark-red lining, sharp nails, scale pin, and hand inviting a signature. Boundary: avoid generic lawyer, demon lord, or explicit seduction.", ontologyLevel: 4, eras: mythic, tags: ["demon", "contract", "lawyer"] },
  { id: "infernal_duke", name: "地狱公爵", nameEn: "Infernal Duke", group: "C. 恶魔 / 契约 / 地狱贵族", groupEn: "C. Demon / Contract / Infernal Aristocracy", def: "第一识别是地狱公爵。造型入口：黑红礼服、骨质纹章、冷贵手套、隐约角冠和像管理领地而非发动恐怖的贵族姿态。母题：地狱被呈现为继承、税制和封臣秩序。张力：恶魔性要贵族化、制度化，不要只是怪物权力。视觉证据：封臣名单、黑金披风、骨戒、低温皮肤和不直接碰人的手。边界：避免普通魔王、吸血鬼贵族或随机红黑装。", defEn: "First read: Infernal Duke. Styling entry: black-red formalwear, bone heraldry, cold noble gloves, subtle horn crown, and aristocratic posture governing territory rather than spreading horror. Hell appears as inheritance and vassal order. Visual evidence: vassal list, black-gold cloak, bone ring, cool skin, and hands that never touch directly. Boundary: avoid generic demon king, vampire noble, or random red-black outfit.", ontologyLevel: 5, eras: mythic, risk: "high", tags: ["infernal", "duke", "aristocracy"] },
  { id: "succubus_socialite", name: "魅魔名媛", nameEn: "Succubus Socialite", group: "C. 恶魔 / 契约 / 地狱贵族", groupEn: "C. Demon / Contract / Infernal Aristocracy", def: "第一识别是魅魔名媛。造型入口：社交晚礼服、细尾藏在裙摆结构里、暗红唇、珠宝邀请函和把欲望训练成上流礼仪的观看姿态。母题：魅惑不靠露骨，而靠社交准入、距离和控制。张力：她必须像名媛一样会管理场面，恶魔性从眼神和身体边界溢出。视觉证据：尾尖阴影、香槟杯、黑色蕾丝手套、邀请名单和不让人靠太近的微笑。边界：避免情色化、普通派对美女或魔物娘直译。", defEn: "First read: Succubus Socialite. Styling entry: social evening gown, fine tail hidden in skirt structure, dark red lips, jeweled invitations, and gaze turning desire into upper-class etiquette. Seduction works through access and distance, not exposure. Visual evidence: tail-tip shadow, champagne glass, black lace gloves, invite list, and smile keeping others at range. Boundary: avoid eroticization, party beauty, or literal monster-girl treatment.", ontologyLevel: 4, eras: mythic, risk: "medium", tags: ["succubus", "socialite", "desire"] },
  { id: "incubus_lounge_singer", name: "梦魔酒廊歌手", nameEn: "Incubus Lounge Singer", group: "C. 恶魔 / 契约 / 地狱贵族", groupEn: "C. Demon / Contract / Infernal Aristocracy", def: "第一识别是梦魔酒廊歌手。造型入口：丝质衬衫、旧麦克风、烟雾灯、半隐藏角和像把听众睡意拖进歌声里的低垂眼。母题：梦魔性被转译成声音、夜场和疲惫亲密。张力：魅力要慵懒、危险、职业化，不要变成裸露诱惑。视觉证据：黑色钢琴、酒杯水痕、领口暗纹、台下昏暗面孔和握麦过近的手。边界：避免普通酒吧歌手或露骨梦魔。", defEn: "First read: Incubus Lounge Singer. Styling entry: silk shirt, old microphone, smoke light, half-hidden horns, and lowered eyes pulling listeners sleep into song. Incubus quality is translated into voice, lounge night, and tired intimacy. Visual evidence: black piano, glass rings, dark collar pattern, dim audience faces, and hand holding the mic too close. Boundary: avoid generic bar singer or explicit incubus.", ontologyLevel: 4, eras: mythic, risk: "medium", tags: ["incubus", "lounge", "singer"] },
  { id: "hell_tax_collector", name: "地狱税吏", nameEn: "Hell Tax Collector", group: "C. 恶魔 / 契约 / 地狱贵族", groupEn: "C. Demon / Contract / Infernal Aristocracy", def: "第一识别是地狱税吏。造型入口：旧账簿、算盘或计算器、黑色制服、烧焦收据和把罪债登记成欠款的冷淡表情。母题：地狱惩罚被行政化为征收流程。张力：可怕之处在于琐碎、精确和永不遗漏。视觉证据：账页火边、红印章、钥匙串、窄袖口和伸手索要凭证的动作。边界：避免普通小吏、恶魔商人或喜剧化。", defEn: "First read: Hell Tax Collector. Styling entry: old ledger, abacus or calculator, black uniform, burned receipts, and flat expression registering sin as debt. Infernal punishment becomes collection procedure. Visual evidence: fire-edged pages, red stamp, key ring, narrow cuffs, and hand asking for proof. Boundary: avoid generic clerk, demon merchant, or comedy.", ontologyLevel: 4, eras: mythic, tags: ["hell", "tax", "bureaucracy"] },
  { id: "demon_blood_heir", name: "恶魔血统继承人", nameEn: "Demon-Blood Heir", group: "C. 恶魔 / 契约 / 地狱贵族", groupEn: "C. Demon / Contract / Infernal Aristocracy", def: "第一识别是恶魔血统继承人。造型入口：人类贵族服、角或尾被礼法压制、暗色血纹、继承戒指和努力保持体面的紧绷下颌。母题：恶魔血统不是怪物化，而是家族丑闻与权力资格。张力：他/她要在高贵和失控本能之间绷住。视觉证据：手套下爪痕、家族纹章变形、红黑血管、礼服开裂处和拒绝低头的眼。边界：避免普通恶魔少爷、吸血鬼或炫酷异能继承人。", defEn: "First read: Demon-Blood Heir. Styling entry: human noblewear, horn or tail suppressed by etiquette, dark blood pattern, heir ring, and tight jaw trying to remain proper. Demon blood is family scandal and qualification. Visual evidence: claw marks under gloves, warped heraldry, red-black veins, cracking formalwear, and eyes refusing to bow. Boundary: avoid generic demon youth, vampire, or cool power heir.", ontologyLevel: 4, eras: mythic, risk: "medium", tags: ["demon_blood", "heir", "lineage"] },
  { id: "crossroads_dealer", name: "十字路口交易人", nameEn: "Crossroads Dealer", group: "C. 恶魔 / 契约 / 地狱贵族", groupEn: "C. Demon / Contract / Infernal Aristocracy", def: "第一识别是十字路口交易人。造型入口：旅行外套、旧皮箱、路标尘土、温和笑容和站在交叉方向中央等待别人开口的身体。母题：恶魔契约被降到民间交易场景。张力：他/她越不像怪物，越要通过位置、物件和等待显出危险。视觉证据：路口影子、合同纸、硬币、风吹衣摆和不主动伸手的姿态。边界：避免普通骗子、牛仔恶魔或恐怖路人。", defEn: "First read: Crossroads Dealer. Styling entry: travel coat, old leather case, dusty road signs, gentle smile, and a body waiting at the center of intersecting directions. Infernal contract becomes folk transaction. Visual evidence: crossroads shadow, contract paper, coins, winded hem, and posture not offering the hand first. Boundary: avoid generic con artist, cowboy demon, or horror passerby.", ontologyLevel: 4, eras: mythic, tags: ["crossroads", "dealer", "contract"] },
  { id: "infernal_tailor", name: "地狱裁缝", nameEn: "Infernal Tailor", group: "C. 恶魔 / 契约 / 地狱贵族", groupEn: "C. Demon / Contract / Infernal Aristocracy", def: "第一识别是地狱裁缝。造型入口：黑针线、量体软尺、皮革与灵魂纸样、细长手指和替罪人缝出身份的专注侧脸。母题：服装成为契约和惩罚的外壳。张力：手艺感要压过恐怖感，危险藏在缝线和合身度里。视觉证据：红线、针垫戒指、未完成礼服、影子试衣人和贴近身体边界的量尺。边界：避免普通裁缝、酷炫恶魔装或血腥皮革猎奇。", defEn: "First read: Infernal Tailor. Styling entry: black needles, measuring tape, leather and soul-pattern paper, long fingers, and focused profile sewing identities for the damned. Clothing becomes contract and punishment shell. Visual evidence: red thread, pincushion ring, unfinished formalwear, shadow client, and measuring tape close to body edge. Boundary: avoid generic tailor, cool demon costume, or gore leather spectacle.", ontologyLevel: 4, eras: mythic, tags: ["infernal", "tailor", "costume"] },
  { id: "goat_horn_preacher", name: "羊角布道者", nameEn: "Goat-Horn Preacher", group: "C. 恶魔 / 契约 / 地狱贵族", groupEn: "C. Demon / Contract / Infernal Aristocracy", def: "第一识别是羊角布道者。造型入口：粗布讲道服、羊角从帽檐下顶出、破旧经书、发亮眼睛和把禁忌说成救赎的温热声腔。母题：恶魔性通过布道语言侵入民间信仰。张力：他/她要有乡野、狂热和亲切感，而不是纯邪恶。视觉证据：木讲台、烛油、角影、翻旧书页的手和围观者保持半步距离。边界：避免普通邪教头目或山羊怪物。", defEn: "First read: Goat-Horn Preacher. Styling entry: coarse preaching clothes, goat horns pushing under hat brim, worn scripture, bright eyes, and warm voice calling taboo salvation. Demonhood enters folk faith through speech. Visual evidence: wooden pulpit, candle wax, horn shadow, hands turning old pages, and listeners half a step away. Boundary: avoid generic cult leader or goat monster.", ontologyLevel: 4, eras: mythic, risk: "medium", tags: ["goat_horn", "preacher", "heresy"] },
  { id: "demon_prince_runaway", name: "逃亡恶魔王子", nameEn: "Runaway Demon Prince", group: "C. 恶魔 / 契约 / 地狱贵族", groupEn: "C. Demon / Contract / Infernal Aristocracy", def: "第一识别是逃亡恶魔王子。造型入口：撕去纹章的王室外套、未收好的角冠、旅行灰尘、尾巴藏在披风下和第一次离开地狱礼法的警觉眼。母题：恶魔贵族身份在逃亡中失去仪式保护。张力：他必须仍有王族教养，但身体和衣服都显示正在脱离家族。视觉证据：破封印戒、旧王徽划痕、暗红衬里、低帽檐和护住行李的手。边界：避免普通叛逆王子、魔王少爷或流浪少年。", defEn: "First read: Runaway Demon Prince. Styling entry: royal coat with crest torn off, poorly hidden horn crown, travel dust, tail under cloak, and alert eyes after leaving infernal etiquette. Demon nobility loses ritual protection in flight. Visual evidence: broken seal ring, scratched royal mark, dark-red lining, low hat brim, and hand guarding luggage. Boundary: avoid generic rebel prince, demon lord youth, or runaway boy.", ontologyLevel: 5, eras: mythic, risk: "high", tags: ["demon_prince", "runaway", "aristocracy"] },

  { id: "living_icon_girl", name: "活圣像少女", nameEn: "Living Icon Girl", group: "D. 神官 / 伪神 / 活圣像", groupEn: "D. Priesthood / False God / Living Icon", def: "第一识别是活圣像少女。造型入口：平面化金色背景感、固定正面姿态、过白皮肤、细密圣物边框和像被画面钉住的安静眼。母题：人形身体被改造成供人观看和祈祷的图像。张力：她不是神本人，而是被圣像制度占用的活体。视觉证据：金箔裂纹、僵硬手势、边框饰片、供花和不自然的正面性。边界：避免普通圣女、偶像少女或复制宗教图像。", defEn: "First read: Living Icon Girl. Styling entry: flattened gold-background feeling, fixed frontal posture, too-white skin, sacred frame ornaments, and quiet eyes pinned by image. A human body is turned into an object of viewing and prayer. Visual evidence: gold-leaf cracks, stiff hands, frame pieces, offerings, and unnatural frontality. Boundary: avoid generic holy girl, idol, or direct religious image copy.", ontologyLevel: 5, eras: mythic, risk: "high", tags: ["living_icon", "saint", "image"] },
  { id: "false_god_idol", name: "伪神偶像", nameEn: "False-God Idol", group: "D. 神官 / 伪神 / 活圣像", groupEn: "D. Priesthood / False God / Living Icon", def: "第一识别是伪神偶像。造型入口：舞台服和祭服混合、人工光环、粉丝应援物像供品、完美营业笑和被崇拜系统推高的身体。母题：偶像工业制造出可消费的神格。张力：神圣感要有人工痕迹、商业流程和崇拜压力。视觉证据：LED光环、麦克风圣杖、供台式舞台、应援灯海和笑容后的疲惫眼。边界：避免真实宗教冒犯、普通偶像或全能神。", defEn: "First read: False-God Idol. Styling entry: stagewear mixed with vestment, artificial halo, fan goods as offerings, perfect service smile, and a body elevated by worship machinery. Idol industry manufactures consumable divinity. Visual evidence: LED halo, microphone-scepter, altar-like stage, fan-light sea, and tired eyes behind the smile. Boundary: avoid religious offense, generic idol, or full deity.", ontologyLevel: 5, eras: mythic, risk: "high", tags: ["false_god", "idol", "worship"] },
  { id: "miracle_factory_priest", name: "奇迹工厂神父", nameEn: "Miracle-Factory Priest", group: "D. 神官 / 伪神 / 活圣像", groupEn: "D. Priesthood / False God / Living Icon", def: "第一识别是奇迹工厂神父。造型入口：神父黑衣外罩生产围裙、流水线圣物、检验章和把奇迹当成批量产品审核的疲惫手势。母题：神圣被工业流程标准化。张力：他要像神职人员，也像质检员；奇迹越多越不神秘。视觉证据：圣水瓶批号、印章、传送带、白手套和检查瑕疵的俯身。边界：避免普通神父、工厂主管或纯讽刺漫画。", defEn: "First read: Miracle-Factory Priest. Styling entry: priest black clothes under production apron, assembly-line relics, inspection stamp, and tired hands auditing miracles as products. Sacredness is standardized by industry. Visual evidence: batch-coded holy water, stamps, conveyor belt, white gloves, and bending to inspect flaws. Boundary: avoid generic priest, factory manager, or pure satire cartoon.", ontologyLevel: 4, eras: industrialMythic, tags: ["miracle", "factory", "priest"] },
  { id: "oracle_corporate_prophet", name: "神谕企业先知", nameEn: "Oracle Corporate Prophet", group: "D. 神官 / 伪神 / 活圣像", groupEn: "D. Priesthood / False God / Living Icon", def: "第一识别是神谕企业先知。造型入口：企业西装、透明神谕屏、额头光标、发布会台阶和把商业预测说成命运的稳定口吻。母题：先知职能被企业战略和数据话术接管。张力：他/她的神秘性必须有会议室、指标和权力接口。视觉证据：预测图表、冷光徽章、双手按讲台、投资人灯光和不眨眼的凝视。边界：避免普通CEO、赛博神棍或抽象AI。", defEn: "First read: Oracle Corporate Prophet. Styling entry: corporate suit, transparent oracle screen, forehead cursor, keynote steps, and steady tone speaking business forecasts as fate. Prophecy is taken over by strategy and data rhetoric. Visual evidence: prediction charts, cold badge, hands on podium, investor lights, and unblinking gaze. Boundary: avoid generic CEO, cyber charlatan, or abstract AI.", ontologyLevel: 4, eras: ["near_future", "far_future"], tags: ["oracle", "corporate", "prophet"] },
  { id: "golden_mask_pope", name: "金面具教皇", nameEn: "Golden-Mask Pope", group: "D. 神官 / 伪神 / 活圣像", groupEn: "D. Priesthood / False God / Living Icon", def: "第一识别是金面具教皇。造型入口：巨大金面具、厚重法衣、权杖、看不见表情的脸和被制度替代个人意志的正坐。母题：最高神职把人隐藏在权威外壳后。张力：威严来自遮蔽和重量，不是慈祥面孔。视觉证据：金属面具、层叠织锦、戒指、长椅阴影和双手缓慢抬起的仪式节奏。边界：避免现实宗教影射、普通国王或面具怪人。", defEn: "First read: Golden-Mask Pope. Styling entry: huge golden mask, heavy vestments, staff, unreadable face, and seated posture where institution replaces person. Highest priesthood hides the human behind authority shell. Visual evidence: metal mask, layered brocade, rings, throne shadow, and slow ritual hands. Boundary: avoid real religious reference, generic king, or mask monster.", ontologyLevel: 4, eras: mythic, tags: ["pope", "mask", "authority"] },
  { id: "relic_body_curator", name: "圣遗物身体馆长", nameEn: "Relic-Body Curator", group: "D. 神官 / 伪神 / 活圣像", groupEn: "D. Priesthood / False God / Living Icon", def: "第一识别是圣遗物身体馆长。造型入口：博物馆手套、圣物盒、身体部位图谱、冷静讲解姿态和把神圣残片归档收藏的专业距离。母题：圣遗物从信仰对象变成可管理的身体档案。张力：敬畏与馆藏管理必须并存。视觉证据：玻璃柜、标签卡、银镊子、暗色长袍和不直接触碰圣物的手。边界：避免普通馆员、盗墓者或血腥身体展示。", defEn: "First read: Relic-Body Curator. Styling entry: museum gloves, relic boxes, body-part diagrams, calm explaining posture, and professional distance archiving sacred remains. Relics become managed body archives. Visual evidence: glass cases, label cards, silver tweezers, dark robe, and hands not touching directly. Boundary: avoid generic curator, tomb robber, or gore body display.", ontologyLevel: 4, eras: mythic, risk: "medium", tags: ["relic", "curator", "body"] },
  { id: "blessing_saleswoman", name: "祝福推销员", nameEn: "Blessing Saleswoman", group: "D. 神官 / 伪神 / 活圣像", groupEn: "D. Priesthood / False God / Living Icon", def: "第一识别是祝福推销员。造型入口：干净套装、便携圣物箱、价目表式祝福卡、职业笑容和把庇护变成可购买服务的展示手势。母题：神圣经济进入日常销售流程。张力：她要亲切、实用、稍微可疑，而不是神职人员。视觉证据：样品护符、收据、折叠桌、试用祝福印章和看顾客预算的眼。边界：避免普通销售、骗子脸谱或宗教冒犯。", defEn: "First read: Blessing Saleswoman. Styling entry: clean suit, portable relic case, price-list blessing cards, professional smile, and hands displaying protection as purchasable service. Sacred economy enters sales workflow. Visual evidence: sample amulets, receipts, folding table, trial blessing stamp, and eyes reading customer budget. Boundary: avoid generic salesperson, scam caricature, or religious offense.", ontologyLevel: 3, eras: mythic, tags: ["blessing", "sales", "sacred_economy"] },
  { id: "idolatry_model", name: "偶像崇拜模特", nameEn: "Idolatry Model", group: "D. 神官 / 伪神 / 活圣像", groupEn: "D. Priesthood / False God / Living Icon", def: "第一识别是偶像崇拜模特。造型入口：极度对称妆发、金属祭台姿态、身体像商品展示又像供像、眼神空白而被观看。母题：美貌被推到崇拜对象和消费对象之间。张力：模特职业性和神像静止感要同时存在。视觉证据：高光皮肤、对称饰品、献花、展示台边缘和不主动回应观众的脸。边界：避免普通时装模特、宗教复制或物化露骨。", defEn: "First read: Idolatry Model. Styling entry: extremely symmetrical hair and makeup, metallic altar pose, a body displayed as both product and icon, and blank watched eyes. Beauty sits between worship object and commodity. Visual evidence: highlighted skin, symmetrical ornaments, offerings, display-platform edge, and face not responding to viewers. Boundary: avoid generic fashion model, religious copy, or explicit objectification.", ontologyLevel: 3, eras: mythic, tags: ["idolatry", "model", "beauty"] },
  { id: "temple_child_medium", name: "神庙童媒", nameEn: "Temple Child Medium", group: "D. 神官 / 伪神 / 活圣像", groupEn: "D. Priesthood / False God / Living Icon", def: "第一识别是神庙童媒。造型入口：宽大神庙衣、护身绳、被成人围出的仪式空间、失焦眼神和身体太小却承受过多神谕的紧张。母题：媒介身体被共同体放在神与人之间。张力：必须克制呈现，不消费儿童脆弱；重点在仪式位置和保护边界。视觉证据：红绳、供桌、低矮坐垫、旁观成人的手和突然僵住的肩。边界：避免恐怖童灵、可爱神童或伤害展示。", defEn: "First read: Temple Child Medium. Styling entry: oversized temple garment, protective cords, ritual space made by adults, unfocused eyes, and a small body carrying too much oracle tension. The body mediates between deity and community. Visual evidence: red cords, offering table, low cushion, adults hands nearby, and suddenly stiff shoulders. Boundary: avoid horror child spirit, cute prodigy, or harm spectacle.", ontologyLevel: 4, eras: mythic, tags: ["medium", "temple", "oracle"] },
  { id: "god_machine_bishop", name: "神机主教", nameEn: "God-Machine Bishop", group: "D. 神官 / 伪神 / 活圣像", groupEn: "D. Priesthood / False God / Living Icon", def: "第一识别是神机主教。造型入口：主教法衣嵌入机械接口、齿轮圣徽、冷光神经线、仪式手套和把机器秩序解释成天命的严肃脸。母题：神圣权威与机械系统合成新的教会身体。张力：机械不能抢走神职，必须服务神谕、仪式和控制。视觉证据：金属牧杖、数据经文、接口领口、发光法冠和缓慢开合的机械手。边界：避免机甲主教、普通机器人或抽象AI神。", defEn: "First read: God-Machine Bishop. Styling entry: bishop vestment embedded with mechanical ports, gear sigil, cold neural lines, ritual gloves, and serious face explaining machine order as destiny. Sacred authority fuses with system machinery. Visual evidence: metal crozier, data scripture, ported collar, glowing mitre, and slow mechanical hand. Boundary: avoid mecha bishop, generic robot, or abstract AI god.", ontologyLevel: 5, eras: ["near_future", "far_future"], risk: "high", tags: ["god_machine", "bishop", "mechanical_divinity"] },

  { id: "prophecy_marked_boy", name: "预言标记少年", nameEn: "Prophecy-Marked Boy", group: "E. 预言 / 命运 / 祭品", groupEn: "E. Prophecy / Fate / Sacrifice", def: "第一识别是预言标记少年。造型入口：额头或锁骨上的预言印、普通衣物被护符打断、被众人看穿未来的紧张眼神。母题：身体在还没有行动前就被命运命名。张力：标记要像负担，不是超能力徽章。视觉证据：护符绳、旧预言纸、被触摸到发白的印记、避开人群的肩和紧握衣角的手。边界：避免救世主爽感或儿童奇观。", defEn: "First read: Prophecy-Marked Boy. Styling entry: prophecy mark on brow or collarbone, ordinary clothes interrupted by charms, and anxious eyes watched as future. The body is named by fate before action. Visual evidence: charm cord, old prophecy paper, over-touched pale mark, shoulders avoiding crowds, and hand gripping fabric. Boundary: avoid savior fantasy or child spectacle.", ontologyLevel: 4, eras: mythic, tags: ["prophecy", "marked", "fate"] },
  { id: "sacrificial_princess", name: "献祭公主", nameEn: "Sacrificial Princess", group: "E. 预言 / 命运 / 祭品", groupEn: "E. Prophecy / Fate / Sacrifice", def: "第一识别是献祭公主。造型入口：王室礼服被祭祀绳结束住、花冠、空白表情和被培养成献祭对象的礼仪站姿。母题：继承身份被转化为共同体交换物。张力：她要保留王族教育和主体尊严，不能只是受害者。视觉证据：祭台阶、白花、金色束带、王徽被遮挡和稳定到令人不安的眼。边界：避免苦难猎奇、童话公主或献祭场面血腥化。", defEn: "First read: Sacrificial Princess. Styling entry: royal dress bound by ritual cords, flower crown, blank expression, and etiquette posture trained for sacrifice. Succession becomes communal exchange object. Visual evidence: altar steps, white flowers, golden binding, obscured royal crest, and disturbingly steady eyes. Boundary: avoid misery spectacle, fairy princess, or gore sacrifice scene.", ontologyLevel: 4, eras: mythic, risk: "medium", tags: ["sacrifice", "princess", "fate"] },
  { id: "fate_thread_seamstress", name: "命运线裁缝", nameEn: "Fate-Thread Seamstress", group: "E. 预言 / 命运 / 祭品", groupEn: "E. Prophecy / Fate / Sacrifice", def: "第一识别是命运线裁缝。造型入口：线轴、针盒、缝在空气里的发光细线、疲惫手指和像修补衣服一样修补人生走向的专注。母题：命运被转译成纺织、修补和剪裁。张力：神秘性必须落在手艺动作上，不要变成抽象女神。视觉证据：红线、量尺、指尖小伤、半成品衣片和看线不看人的眼。边界：避免普通裁缝、命运女神直译或魔法特效泛滥。", defEn: "First read: Fate-Thread Seamstress. Styling entry: spools, needle box, glowing threads sewn through air, tired fingers, and focus mending life paths like garments. Fate becomes textile craft. Visual evidence: red thread, measuring tape, small fingertip wounds, unfinished cloth, and eyes watching thread not people. Boundary: avoid generic seamstress, direct fate goddess, or excessive magic effects.", ontologyLevel: 4, eras: mythic, tags: ["fate", "thread", "seamstress"] },
  { id: "doom_bride", name: "末日新娘", nameEn: "Doom Bride", group: "E. 预言 / 命运 / 祭品", groupEn: "E. Prophecy / Fate / Sacrifice", def: "第一识别是末日新娘。造型入口：婚纱染上灰尘、预言戒指、黑色花束、没有宾客的仪式站位和像在嫁给灾难本身的平静脸。母题：婚礼被末日时间表占用。张力：浪漫要退后，命运和终结感在前。视觉证据：破钟、灰色头纱、焦边请柬、荒凉祭坛和手指上过亮的戒光。边界：避免普通恐怖新娘或灾难片女主。", defEn: "First read: Doom Bride. Styling entry: dust-stained wedding dress, prophecy ring, black bouquet, ceremony stance without guests, and calm face as if marrying disaster itself. Wedding is occupied by end-time schedule. Visual evidence: broken clock, grey veil, burned invitation, empty altar, and too-bright ring light. Boundary: avoid generic horror bride or disaster heroine.", ontologyLevel: 4, eras: mythic, risk: "medium", tags: ["doom", "bride", "fate"] },
  { id: "oracle_twin_sister", name: "神谕双生姐姐", nameEn: "Oracle Twin Sister", group: "E. 预言 / 命运 / 祭品", groupEn: "E. Prophecy / Fate / Sacrifice", def: "第一识别是神谕双生姐姐。造型入口：双生对应饰物、姐姐式保护站位、眼中异步光点和习惯替另一个人先听见预言的紧绷表情。母题：预言在双生关系里制造责任不对称。张力：她不是单纯姐姐，也不是预言机器；保护欲和神谕负担要互相拉扯。视觉证据：成对耳饰缺一只、手腕牵引、两份命牌、侧身挡人和突然凝住的眼。边界：避免双胞胎噱头或普通占卜者。", defEn: "First read: Oracle Twin Sister. Styling entry: paired ornaments, protective elder-sister stance, asynchronous light in the eyes, and tense expression hearing prophecy first for another. Prophecy makes twin relation unequal. Visual evidence: one missing paired earring, guiding wrist grip, two fate tags, side body blocking someone, and suddenly frozen eyes. Boundary: avoid twin gimmick or generic fortune teller.", ontologyLevel: 4, eras: mythic, tags: ["oracle", "twin", "sister"] },
  { id: "chosen_one_dropout", name: "退学的天选之子", nameEn: "Chosen-One Dropout", group: "E. 预言 / 命运 / 祭品", groupEn: "E. Prophecy / Fate / Sacrifice", def: "第一识别是退学的天选之子。造型入口：丢在一旁的制服、断裂护符、旧书包、预言标记被袖子遮住和拒绝配合救世流程的懒散站姿。母题：命运选中身体，但身体拒绝进入剧本。张力：反抗要生活化、疲惫、带一点荒唐，不是酷反英雄。视觉证据：退学文件、乱发、破鞋、熄灭光环和不愿抬头的眼。边界：避免普通叛逆学生或救世主爽文。", defEn: "First read: Chosen-One Dropout. Styling entry: discarded uniform, broken charm, old schoolbag, prophecy mark hidden by sleeve, and lazy stance refusing the savior process. Fate selects the body, but the body refuses the script. Visual evidence: dropout paper, messy hair, broken shoes, extinguished halo, and eyes unwilling to lift. Boundary: avoid generic rebel student or savior fantasy.", ontologyLevel: 3, eras: mythic, tags: ["chosen_one", "dropout", "anti_fate"] },
  { id: "curse_bearing_mother", name: "负咒母亲", nameEn: "Curse-Bearing Mother", group: "E. 预言 / 命运 / 祭品", groupEn: "E. Prophecy / Fate / Sacrifice", def: "第一识别是负咒母亲。造型入口：朴素衣物、黑色咒纹沿手臂生长、护住怀中物或孩子的姿态和把诅咒背到自己身上的疲惫温柔。母题：母性不是甜美，而是承担、遮挡和转移灾厄。张力：诅咒要压在身体与照护动作之间，不要变成恐怖母亲。视觉证据：咒纹、旧围巾、药包、低头护住的肩和强忍疼痛的手。边界：避免怪物母亲、苦难猎奇或圣母化。", defEn: "First read: Curse-Bearing Mother. Styling entry: plain clothes, black curse marks growing along arms, protective posture over child or bundle, and tired tenderness carrying the curse herself. Motherhood is burden and shielding, not sweetness. Visual evidence: curse lines, old scarf, medicine pouch, lowered protective shoulder, and hand holding pain. Boundary: avoid monster mother, suffering spectacle, or holy-mother idealization.", ontologyLevel: 4, eras: mythic, risk: "medium", tags: ["curse", "mother", "sacrifice"] },
  { id: "sacrificial_lamb_actor", name: "替罪羔羊演员", nameEn: "Scapegoat Actor", group: "E. 预言 / 命运 / 祭品", groupEn: "E. Prophecy / Fate / Sacrifice", def: "第一识别是替罪羔羊演员。造型入口：舞台服、羊形护符、被安排好的无辜表情、后台绳索和把群体罪责表演出来的身体。母题：替罪机制被剧场化。张力：他/她要像演员，也像仪式对象；表演和真实承担界线模糊。视觉证据：白色绶带、面具、舞台粉尘、观众阴影和被灯光钉住的站位。边界：避免普通演员、受害者展示或动物化。", defEn: "First read: Scapegoat Actor. Styling entry: stage costume, lamb charm, arranged innocent expression, backstage ropes, and a body performing collective guilt. Scapegoat mechanism becomes theatre. Visual evidence: white sash, mask, stage dust, audience shadow, and stance pinned by light. Boundary: avoid generic actor, victim display, or animalization.", ontologyLevel: 4, eras: mythic, risk: "medium", tags: ["scapegoat", "actor", "ritual"] },
  { id: "end_times_mailman", name: "末日信使邮差", nameEn: "End-Times Mailman", group: "E. 预言 / 命运 / 祭品", groupEn: "E. Prophecy / Fate / Sacrifice", def: "第一识别是末日信使邮差。造型入口：旧邮包、封蜡预言信、磨损制服、暴风前的灰尘和仍按路线递送最后消息的职业固执。母题：末日被降格为邮政流程和送达责任。张力：他/她越普通，越要显出所送信件的命运重量。视觉证据：破邮戳、地图、手套、未送达名单和护住邮包的侧身。边界：避免普通邮差、天启骑士或冒险信使。", defEn: "First read: End-Times Mailman. Styling entry: old mailbag, wax-sealed prophecy letters, worn uniform, storm dust, and occupational stubbornness delivering final messages by route. Apocalypse becomes postal workflow. Visual evidence: broken stamp, map, gloves, undelivered list, and side body guarding the bag. Boundary: avoid generic mailman, apocalypse rider, or adventure courier.", ontologyLevel: 3, eras: mythic, tags: ["end_times", "mailman", "prophecy"] },
  { id: "destiny_refusing_queen", name: "拒绝命运的女王", nameEn: "Destiny-Refusing Queen", group: "E. 预言 / 命运 / 祭品", groupEn: "E. Prophecy / Fate / Sacrifice", def: "第一识别是拒绝命运的女王。造型入口：王冠偏离正中、撕开的预言卷轴、深色礼服、握紧权杖和用统治姿态反抗既定结局的冷硬眼。母题：王权与命运脚本正面冲突。张力：她不能只是强势女王，必须显出命运仍在身体周围施压。视觉证据：断线纹章、被踩住的预言纸、宫廷阴影、紧绷手背和不肯跪下的膝。边界：避免普通女王、复仇爽感或魔女化。", defEn: "First read: Destiny-Refusing Queen. Styling entry: crown off center, torn prophecy scroll, dark gown, clenched scepter, and hard eyes resisting a written ending through rule posture. Sovereignty confronts fate script. Visual evidence: broken-thread heraldry, prophecy paper underfoot, court shadow, tense hand back, and knees refusing to bend. Boundary: avoid generic queen, revenge fantasy, or witch framing.", ontologyLevel: 4, eras: mythic, tags: ["queen", "destiny", "refusal"] },

  { id: "fire_oracle_girl", name: "火焰神谕女孩", nameEn: "Fire-Oracle Girl", group: "F. 元素神性 / 自然人格", groupEn: "F. Elemental Divinity / Nature Persona", def: "第一识别是火焰神谕女孩。造型入口：焦边衣袖、瞳孔里跳动的小火、炭灰指尖和在火盆旁听见未来的专注脸。母题：火焰不是攻击，而是预言媒介。张力：热度要压在眼神、手指和仪式物里，不要变成火法少女。视觉证据：火盆、焦黑符纸、红橙反光、烧短发梢和不怕烫的手。边界：避免魔法少女、纵火者或普通火焰特效。", defEn: "First read: Fire-Oracle Girl. Styling entry: singed sleeves, tiny flames in pupils, charcoal fingertips, and focused face hearing future beside a brazier. Fire is prophecy medium, not attack. Visual evidence: fire bowl, charred slips, red-orange reflections, burned hair ends, and hands unafraid of heat. Boundary: avoid fire magical girl, arsonist, or generic flame effects.", ontologyLevel: 4, eras: mythic, tags: ["fire", "oracle", "elemental"] },
  { id: "storm_halo_pilot", name: "风暴光环飞行员", nameEn: "Storm-Halo Pilot", group: "F. 元素神性 / 自然人格", groupEn: "F. Elemental Divinity / Nature Persona", def: "第一识别是风暴光环飞行员。造型入口：飞行夹克、风暴状破碎光环、湿发、护目镜和像从雷云边缘返航的紧绷肩线。母题：天空职业被风暴神性改写。张力：他/她必须仍像飞行员，神性通过气压、电光和返航痕迹出现。视觉证据：雷云徽章、雨点、风镜划痕、耳机线和衣摆被强风拉开的姿态。边界：避免普通飞行员或雷神化。", defEn: "First read: Storm-Halo Pilot. Styling entry: flight jacket, storm-broken halo, wet hair, goggles, and tense shoulders as if returning from thundercloud edge. Sky occupation is rewritten by storm divinity. Visual evidence: thundercloud badge, rain drops, scratched goggles, headset cable, and wind-pulled hem. Boundary: avoid generic pilot or thunder-god reskin.", ontologyLevel: 4, eras: mythic, tags: ["storm", "halo", "pilot"] },
  { id: "snow_goddess_heir", name: "雪女神继承人", nameEn: "Snow-Goddess Heir", group: "F. 元素神性 / 自然人格", groupEn: "F. Elemental Divinity / Nature Persona", def: "第一识别是雪女神继承人。造型入口：白色厚披肩、霜花发饰、冷淡皮肤、呼吸雾和被冰雪礼法训练得极轻的步伐。母题：寒冷被继承为气质、距离和身体温度。张力：她不能只是冰雪美人，必须显出继承者的职责和不可亲近。视觉证据：雪晶纹、冰蓝指尖、毛皮边、结霜睫毛和不留下深脚印的站姿。边界：避免冰公主、雪妖或普通白色造型。", defEn: "First read: Snow-Goddess Heir. Styling entry: white heavy shawl, frost hair ornaments, cool skin, visible breath, and steps trained light by snow etiquette. Cold is inherited as temperament and distance. Visual evidence: snowflake patterns, ice-blue fingertips, fur edge, frosted lashes, and stance leaving shallow footprints. Boundary: avoid ice princess, snow spirit, or generic white styling.", ontologyLevel: 4, eras: mythic, tags: ["snow", "goddess", "heir"] },
  { id: "forest_crown_boy", name: "森林冠少年", nameEn: "Forest-Crown Boy", group: "F. 元素神性 / 自然人格", groupEn: "F. Elemental Divinity / Nature Persona", def: "第一识别是森林冠少年。造型入口：树枝冠、苔藓衣边、泥土膝盖、谨慎眼神和像被森林临时选中又还不懂权力的站姿。母题：自然王权落在未完全成熟的人形上。张力：少年感要被植物生长和责任压住，不要可爱精灵化。视觉证据：嫩叶发饰、树皮护腕、种子袋、脚边根系和不敢碰冠冕的手。边界：避免精灵王子、德鲁伊或森林小孩。", defEn: "First read: Forest-Crown Boy. Styling entry: branch crown, moss hem, muddy knees, cautious eyes, and stance of someone temporarily chosen by the forest without understanding power. Natural sovereignty lands on an unfinished human shape. Visual evidence: leaf ornaments, bark bracers, seed pouch, roots at feet, and hand afraid to touch the crown. Boundary: avoid elf prince, druid, or forest child.", ontologyLevel: 4, eras: mythic, tags: ["forest", "crown", "nature"] },
  { id: "volcano_bride", name: "火山新娘", nameEn: "Volcano Bride", group: "F. 元素神性 / 自然人格", groupEn: "F. Elemental Divinity / Nature Persona", def: "第一识别是火山新娘。造型入口：黑红婚纱、熔岩裂纹、火山灰头纱、庄重站姿和像把婚礼献给地底热量的沉默脸。母题：婚礼与地质爆发被绑定。张力：她不是热情新娘，而是压力、等待和即将喷发的地质身体。视觉证据：玄武岩饰品、灰烬花束、红光裂缝、厚重裙摆和被热风托起的头纱。边界：避免普通红黑婚纱或火焰魔女。", defEn: "First read: Volcano Bride. Styling entry: black-red wedding dress, lava cracks, ash veil, solemn stance, and silent face offering the wedding to underground heat. Marriage binds to geological eruption. Visual evidence: basalt jewelry, ash bouquet, red fissures, heavy skirt, and veil lifted by hot wind. Boundary: avoid generic red-black bride or fire witch.", ontologyLevel: 4, eras: mythic, risk: "medium", tags: ["volcano", "bride", "elemental"] },
  { id: "rain_saint_child", name: "雨圣童", nameEn: "Rain-Saint Child", group: "F. 元素神性 / 自然人格", groupEn: "F. Elemental Divinity / Nature Persona", def: "第一识别是雨圣童。造型入口：湿白衣、雨珠停在睫毛上、祈雨绳、赤脚和被村民期待降雨时的低头沉默。母题：儿童身体被共同体投射成气候希望。张力：必须克制保护，不消费儿童神迹；重点在雨、供物和被期待的压力。视觉证据：水盆、稻苗、湿发、红绳、众人伞影和小手握住衣角。边界：避免可爱神童或灾难救世主。", defEn: "First read: Rain-Saint Child. Styling entry: wet white clothes, raindrops on lashes, rain-prayer cords, bare feet, and lowered silence under village expectation. A child body is made into climate hope by the community. Visual evidence: water basin, rice shoots, wet hair, red cords, umbrella shadows, and small hands gripping hem. Boundary: avoid cute miracle child or disaster savior.", ontologyLevel: 4, eras: mythic, tags: ["rain", "saint", "child"] },
  { id: "desert_sun_monk", name: "沙漠太阳僧", nameEn: "Desert Sun Monk", group: "F. 元素神性 / 自然人格", groupEn: "F. Elemental Divinity / Nature Persona", def: "第一识别是沙漠太阳僧。造型入口：粗麻长袍、晒裂皮肤、头巾阴影、太阳符和在极亮环境里保持内收的眼。母题：太阳神性被苦行和干旱压成极简身体。张力：光不能华丽，必须干、硬、刺眼。视觉证据：沙尘脚、铜色护符、干裂嘴唇、水袋和背对烈日的静坐。边界：避免普通沙漠旅人、太阳神英雄或东方主义装饰。", defEn: "First read: Desert Sun Monk. Styling entry: coarse linen robe, sun-cracked skin, headscarf shadow, solar symbol, and inward eyes under brutal brightness. Solar divinity is dried into ascetic body. Visual evidence: sandy feet, bronze charm, cracked lips, water skin, and seated back to the sun. Boundary: avoid generic desert traveler, sun hero, or orientalist decoration.", ontologyLevel: 4, eras: mythic, tags: ["desert", "sun", "monk"] },
  { id: "river_mouth_priestess", name: "河口女祭司", nameEn: "River-Mouth Priestess", group: "F. 元素神性 / 自然人格", groupEn: "F. Elemental Divinity / Nature Persona", def: "第一识别是河口女祭司。造型入口：咸淡水交界的湿裙、贝壳与芦苇饰物、潮汐记录板和在河海交汇处主持仪式的稳重站姿。母题：边界水域把祭司塑造成调停者。张力：她不能只是水边美人，而要有管理潮汐、渔民和神意的职能。视觉证据：泥水脚踝、祭碗、鱼骨符、湿绳和看向远处水线的眼。边界：避免海妖、河神新娘或普通祭司。", defEn: "First read: River-Mouth Priestess. Styling entry: wet skirt from brackish boundary, shell and reed ornaments, tide record board, and steady stance officiating where river meets sea. Boundary water makes the priestess a mediator. Visual evidence: muddy ankles, ritual bowl, fishbone marks, wet ropes, and eyes toward the waterline. Boundary: avoid siren, river bride, or generic priestess.", ontologyLevel: 4, eras: mythic, tags: ["river_mouth", "priestess", "water"] },
  { id: "earthquake_grandmother", name: "地震祖母", nameEn: "Earthquake Grandmother", group: "F. 元素神性 / 自然人格", groupEn: "F. Elemental Divinity / Nature Persona", def: "第一识别是地震祖母。造型入口：厚重旧衣、裂纹手杖、稳定宽坐姿、皱纹像地层褶皱和一动就让周围人安静下来的存在感。母题：地震神性被老年身体转译为重量、记忆和突然震动。张力：她要有长辈的稳定和灾害的不可预测。视觉证据：龟裂地面纹、石珠、旧围巾、稳压膝盖的手和桌面微震的暗示。边界：避免普通祖母、地母女神直译或灾难怪物。", defEn: "First read: Earthquake Grandmother. Styling entry: heavy old clothes, cracked cane, wide stable seat, wrinkles like folded strata, and presence making people quiet when she moves. Earthquake divinity becomes age, weight, and sudden tremor. Visual evidence: cracked-ground motifs, stone beads, old scarf, hands pressing knees, and hints of a trembling table. Boundary: avoid generic grandmother, earth-mother copy, or disaster monster.", ontologyLevel: 4, eras: mythic, tags: ["earthquake", "grandmother", "earth"] },
  { id: "eclipse_dancer", name: "日蚀舞者", nameEn: "Eclipse Dancer", group: "F. 元素神性 / 自然人格", groupEn: "F. Elemental Divinity / Nature Persona", def: "第一识别是日蚀舞者。造型入口：黑金舞衣、环食头饰、半明半暗妆面和用身体制造遮蔽瞬间的旋转姿态。母题：日蚀被转译成舞蹈中的遮挡、对齐和短暂异常。张力：美感要有天文秩序和不安，不只是黑金华丽。视觉证据：圆环光、长袖遮脸、影子叠身、金粉边缘和停在完全重合前一刻的动作。边界：避免普通舞姬、太阳/月亮二元装或魔法特效堆叠。", defEn: "First read: Eclipse Dancer. Styling entry: black-gold dancewear, annular-eclipse headpiece, half-lit makeup, and spinning posture creating a moment of occlusion. Eclipse becomes blocking, alignment, and brief anomaly in dance. Visual evidence: ring light, sleeve covering face, layered shadow, gold dust edge, and movement paused before full overlap. Boundary: avoid generic dancer, simple sun/moon outfit, or effect stacking.", ontologyLevel: 4, eras: mythic, tags: ["eclipse", "dancer", "celestial"] },

  { id: "door_god_youth", name: "门神少年", nameEn: "Door-God Youth", group: "G. 东方神祇 / 民间神格", groupEn: "G. Eastern Deity / Folk Divinity", def: "第一识别是门神少年。造型入口：门画式对称站姿、红金护甲纹、尚未成熟的脸和挡在门槛前不肯退的守护眼神。母题：门神职能落到年轻身体上，形成稚嫩与镇宅权力的冲突。张力：少年感不能削弱守门职责。视觉证据：门钉纹、春联红、虎口手势、门槛阴影和左右对称的身体轴。边界：避免普通武将、年画复制或可爱门童。", defEn: "First read: Door-God Youth. Styling entry: door-painting symmetry, red-gold armor motifs, young face, and guarding eyes refusing to leave the threshold. Door-god function lands on a young body. Visual evidence: door-nail patterns, couplet red, tiger-mouth hands, threshold shadow, and bilateral body axis. Boundary: avoid generic warrior, direct folk-painting copy, or cute doorkeeper.", ontologyLevel: 4, eras: mythic, tags: ["door_god", "youth", "folk_divinity"] },
  { id: "kitchen_god_wife", name: "灶神妻子", nameEn: "Kitchen-God Wife", group: "G. 东方神祇 / 民间神格", groupEn: "G. Eastern Deity / Folk Divinity", def: "第一识别是灶神妻子。造型入口：朴素围裙、烟火气、红纸小符、温和但会记账的眼和站在厨房灶口旁的家庭秩序感。母题：民间神格通过日常火、饭、账和家庭伦理显影。张力：她不能只是主妇，要像掌管家中报备与香火的人。视觉证据：灶灰、年画边、米缸、账本、袖口油烟和端碗的稳定手。边界：避免普通家庭妇女或神仙娘娘。", defEn: "First read: Kitchen-God Wife. Styling entry: plain apron, cooking smoke, red paper charm, gentle bookkeeping eyes, and domestic order beside the stove. Folk divinity appears through fire, food, accounts, and household ethics. Visual evidence: stove ash, folk-print edge, rice jar, ledger, smoky cuffs, and steady hand holding a bowl. Boundary: avoid generic housewife or grand goddess.", ontologyLevel: 4, eras: mythic, tags: ["kitchen_god", "wife", "household"] },
  { id: "city_god_clerk", name: "城隍文书", nameEn: "City-God Clerk", group: "G. 东方神祇 / 民间神格", groupEn: "G. Eastern Deity / Folk Divinity", def: "第一识别是城隍文书。造型入口：旧官服、案卷、朱印、城门纹袖口和替城市阴阳两界登记事务的冷静坐姿。母题：民间神权被行政化为文书、印章和地方秩序。张力：他/她不是鬼差，也不是官员，而是城市神明体系里的记录接口。视觉证据：卷宗、印泥、毛笔、阴影城墙和不抬头审人的眼。边界：避免普通古代书吏或恐怖阴司。", defEn: "First read: City-God Clerk. Styling entry: old official robe, case files, vermilion seal, city-gate sleeve motifs, and calm seated posture registering affairs across living and dead. Folk divine power becomes paperwork and local order. Visual evidence: dossiers, seal paste, brush, shadowed city wall, and eyes judging without lifting. Boundary: avoid generic ancient clerk or horror underworld.", ontologyLevel: 4, eras: mythic, tags: ["city_god", "clerk", "bureaucracy"] },
  { id: "dragon_king_prince", name: "龙王太子", nameEn: "Dragon-King Prince", group: "G. 东方神祇 / 民间神格", groupEn: "G. Eastern Deity / Folk Divinity", def: "第一识别是龙王太子。造型入口：水族王室礼服、龙鳞边饰、角冠、潮湿长袖和带着水域继承权的年轻傲气。母题：龙宫血统以水、礼制和族群等级进入人形。张力：他不能只是龙角美少年，必须有王室任务和水域压力。视觉证据：鳞纹袖口、玉佩、水珠发梢、龙宫令牌和不习惯陆地干燥的眼。边界：避免普通龙人、仙侠王子或海蓝装饰。", defEn: "First read: Dragon-King Prince. Styling entry: aquatic royal formalwear, scale edging, horn crown, damp sleeves, and young pride carrying water-domain succession. Dragon-palace bloodline enters human form through water and etiquette. Visual evidence: scale cuffs, jade pendant, wet hair ends, dragon-palace token, and eyes uncomfortable with dry land. Boundary: avoid generic dragon person, xianxia prince, or blue decoration.", ontologyLevel: 4, eras: mythic, tags: ["dragon_king", "prince", "water"] },
  { id: "river_lady_spirit", name: "河伯夫人", nameEn: "River-Lord Lady", group: "G. 东方神祇 / 民间神格", groupEn: "G. Eastern Deity / Folk Divinity", def: "第一识别是河伯夫人。造型入口：水色礼衣、湿发髻、沉静侧脸、河祭珠饰和像长期住在水面以下的慢动作。母题：河神配偶身份由礼制、祭品和水域距离构成。张力：她不能只是水边美人，要有被供奉、被安排、被水域困住的气质。视觉证据：河祭绸带、青绿珠串、潮湿袖摆、低垂眼和手中小祭碗。边界：避免人鱼、河妖或普通古装夫人。", defEn: "First read: River-Lord Lady. Styling entry: water-colored formalwear, damp updo, quiet profile, river-rite jewelry, and slow motion as if living below the surface. The spouse of river deity is formed by etiquette, offerings, and water distance. Visual evidence: ritual ribbons, green beads, wet sleeves, lowered eyes, and small offering bowl. Boundary: avoid mermaid, river monster, or generic period lady.", ontologyLevel: 4, eras: mythic, tags: ["river_lady", "spirit", "water"] },
  { id: "fortune_god_accountant", name: "财神会计", nameEn: "Fortune-God Accountant", group: "G. 东方神祇 / 民间神格", groupEn: "G. Eastern Deity / Folk Divinity", def: "第一识别是财神会计。造型入口：账本、算盘、金红袖口、财神符贴和把财运精确登记成收支表的认真表情。母题：财富神性被降到财务流程和民间祈愿之间。张力：喜庆不能失控，必须有会计的克制和计算。视觉证据：元宝印、红封、算盘珠、账页、金色眼镜和压住票据的手。边界：避免普通财神、商人或财务白领。", defEn: "First read: Fortune-God Accountant. Styling entry: ledger, abacus, gold-red cuffs, fortune charms, and serious expression recording luck as balance sheet. Wealth divinity drops into accounting workflow. Visual evidence: ingot stamp, red envelopes, abacus beads, account pages, gold glasses, and hand pressing receipts. Boundary: avoid generic wealth god, merchant, or office accountant.", ontologyLevel: 4, eras: mythic, tags: ["fortune", "accountant", "wealth"] },
  { id: "underworld_bailiff", name: "阴司差役", nameEn: "Underworld Bailiff", group: "G. 东方神祇 / 民间神格", groupEn: "G. Eastern Deity / Folk Divinity", def: "第一识别是阴司差役。造型入口：黑色差服、锁链、令牌、疲惫跑腿姿态和在阴阳边界执行传唤的低阶公务感。母题：冥界不是怪物巢穴，而是有差役、流程和路引的行政系统。张力：他/她要像基层办事员，神秘感在证件和道路上。视觉证据：木牌、锁链、布鞋、灰雾路口和伸手索要文书的动作。边界：避免鬼怪恐怖、死神或武侠捕快。", defEn: "First read: Underworld Bailiff. Styling entry: black bailiff clothes, chain, token, tired errand posture, and low-rank civil-service mood summoning across life and death. Underworld is administration, not monster lair. Visual evidence: wooden pass, chain, cloth shoes, grey crossroads, and hand asking for documents. Boundary: avoid ghost horror, grim reaper, or martial constable.", ontologyLevel: 4, eras: mythic, risk: "medium", tags: ["underworld", "bailiff", "bureaucracy"] },
  { id: "peach_blossom_fairy_bride", name: "桃花仙新娘", nameEn: "Peach-Blossom Fairy Bride", group: "G. 东方神祇 / 民间神格", groupEn: "G. Eastern Deity / Folk Divinity", def: "第一识别是桃花仙新娘。造型入口：淡粉婚服、桃枝发饰、花瓣贴在袖口、半透明喜帕和像从花期里短暂成人的羞怯姿态。母题：花木精怪借婚礼仪式进入人类社会。张力：甜美要有非人季节性，不要只是粉色新娘。视觉证据：桃花枝、露水、花粉痕、轻薄鞋底和看向春风的眼。边界：避免普通花仙、洛丽塔新娘或甜腻粉色。", defEn: "First read: Peach-Blossom Fairy Bride. Styling entry: pale pink wedding dress, peach-branch hair ornament, petals on cuffs, translucent veil, and shy posture briefly becoming human through bloom season. Flower spirit enters society through wedding ritual. Visual evidence: peach branch, dew, pollen marks, thin soles, and eyes toward spring wind. Boundary: avoid generic flower fairy, lolita bride, or sugary pink styling.", ontologyLevel: 4, eras: mythic, tags: ["peach_blossom", "fairy", "bride"] },
  { id: "mountain_temple_medium", name: "山庙童乩", nameEn: "Mountain-Temple Medium", group: "G. 东方神祇 / 民间神格", groupEn: "G. Eastern Deity / Folk Divinity", def: "第一识别是山庙童乩。造型入口：山庙红布、护符项圈、扶乩器具、被风吹乱的额发和像突然被山神借走身体的僵直姿态。母题：地方神明通过媒介身体进入村社。张力：必须保护儿童边界，重点放在仪式位置、成人保护和身体被借用的紧张。视觉证据：香灰、木签、红绳、庙门石阶和旁人扶住肩膀的手。边界：避免恐怖附身、可爱神童或猎奇民俗。", defEn: "First read: Mountain-Temple Medium. Styling entry: red temple cloth, charm collar, divination tools, wind-messed hair, and stiff posture as a mountain god borrows the body. Local divinity enters community through a medium. Visual evidence: incense ash, wooden lots, red cords, temple stone steps, and adult hands supporting the shoulders. Boundary: avoid possession horror, cute prodigy, or exoticized folk ritual.", ontologyLevel: 4, eras: mythic, tags: ["mountain_temple", "medium", "folk"] },
  { id: "thunder_department_officer", name: "雷部官将", nameEn: "Thunder-Department Officer", group: "G. 东方神祇 / 民间神格", groupEn: "G. Eastern Deity / Folk Divinity", def: "第一识别是雷部官将。造型入口：官将甲、雷纹令牌、鼓槌、严厉面具感和像执行天庭公务的武官站姿。母题：雷电被行政化为天界执法部门。张力：他/她不是雷神本体，而是有等级、命令和执行流程的神将。视觉证据：雷鼓、令旗、蓝白电纹、硬挺护肩和向下宣令的手。边界：避免普通雷电战士、武将或随机闪电特效。", defEn: "First read: Thunder-Department Officer. Styling entry: celestial-officer armor, thunder token, drumstick, severe mask quality, and martial posture executing heavenly bureaucracy. Lightning becomes administrative enforcement. Visual evidence: thunder drum, command flag, blue-white electric patterns, rigid shoulders, and hand issuing orders downward. Boundary: avoid generic lightning warrior, historical general, or random effects.", ontologyLevel: 4, eras: mythic, tags: ["thunder", "officer", "heavenly_bureaucracy"] },

  { id: "subway_station_god", name: "地铁站神明", nameEn: "Subway-Station God", group: "H. 现代神话 / 都市神性", groupEn: "H. Modern Myth / Urban Divinity", def: "第一识别是地铁站神明。造型入口：工作人员制服与神龛感混合、闸机光、线路图纹样和在人流中保持静止的守站姿态。母题：现代公共交通生出地方神。张力：神性要通过秩序、拥挤、门禁和通勤疲惫出现。视觉证据：站牌光环、票卡、黄线、广播喇叭和不被人群撞动的身体。边界：避免普通地铁员工或赛博神。", defEn: "First read: Subway-Station God. Styling entry: station-worker uniform mixed with shrine quality, gate light, route-map patterns, and still guarding posture inside commuter flow. Public transit breeds local divinity. Visual evidence: station-sign halo, fare card, yellow line, speaker, and body unmoved by crowds. Boundary: avoid generic subway staff or cyber god.", ontologyLevel: 4, eras: mythic, tags: ["subway", "urban_god", "modern_myth"] },
  { id: "elevator_luck_goddess", name: "电梯幸运女神", nameEn: "Elevator Luck Goddess", group: "H. 现代神话 / 都市神性", groupEn: "H. Modern Myth / Urban Divinity", def: "第一识别是电梯幸运女神。造型入口：金属电梯门反光、楼层按钮光、细小护符、办公室裙装和像能决定电梯是否为你停下的微笑。母题：现代便利设施里的偶然被拟人成幸运神。张力：神性必须小、日常、略荒诞，不要宏大神话化。视觉证据：按钮面板、楼层数字、镜面倒影、手指悬停和门缝光。边界：避免普通白领、商场女神或抽象幸运符。", defEn: "First read: Elevator Luck Goddess. Styling entry: metallic elevator-door reflection, floor-button light, tiny charm, office dress, and smile that seems to decide whether the elevator stops. Modern convenience becomes personified luck. Visual evidence: button panel, floor numbers, mirror reflection, hovering finger, and door-slit light. Boundary: avoid generic office worker, mall goddess, or abstract luck charm.", ontologyLevel: 4, eras: mythic, tags: ["elevator", "luck", "urban"] },
  { id: "traffic_light_oracle", name: "红绿灯预言者", nameEn: "Traffic-Light Oracle", group: "H. 现代神话 / 都市神性", groupEn: "H. Modern Myth / Urban Divinity", def: "第一识别是红绿灯预言者。造型入口：红黄绿光落在脸上、斑马线边缘、反光外套和通过信号变化解释命运的专注眼。母题：城市规则灯号被转译成预言系统。张力：预言必须来自通行、等待和暂停，而不是神秘法器。视觉证据：倒计时屏、车流反光、路口风、手中小记录本和停在路缘的脚。边界：避免普通交通员或赛博占卜师。", defEn: "First read: Traffic-Light Oracle. Styling entry: red-yellow-green light on the face, zebra-crossing edge, reflective jacket, and focused eyes reading fate through signals. Urban traffic rules become prophecy system. Visual evidence: countdown screen, car reflections, intersection wind, small notebook, and foot paused at curb. Boundary: avoid generic traffic worker or cyber fortune teller.", ontologyLevel: 4, eras: mythic, tags: ["traffic_light", "oracle", "urban"] },
  { id: "mall_temple_idol", name: "商场神殿偶像", nameEn: "Mall-Temple Idol", group: "H. 现代神话 / 都市神性", groupEn: "H. Modern Myth / Urban Divinity", def: "第一识别是商场神殿偶像。造型入口：商场中庭舞台、促销灯牌、人工花、偶像服和被消费人流当作临时神龛观看的营业笑。母题：购物中心把欲望、崇拜和表演合成日常祭典。张力：神圣感必须有商业照明和促销痕迹。视觉证据：扶梯、玻璃栏杆、购物袋、LED光环和站在中庭正中的姿态。边界：避免普通商场偶像或宗教祭坛直译。", defEn: "First read: Mall-Temple Idol. Styling entry: atrium stage, sale signs, artificial flowers, idol outfit, and service smile watched by consumer flow as temporary shrine. Shopping mall fuses desire, worship, and performance. Visual evidence: escalator, glass rail, shopping bags, LED halo, and stance at the atrium center. Boundary: avoid generic mall idol or literal religious altar.", ontologyLevel: 4, eras: mythic, tags: ["mall", "idol", "urban_divinity"] },
  { id: "wifi_signal_saint", name: "无线信号圣徒", nameEn: "Wi-Fi Signal Saint", group: "H. 现代神话 / 都市神性", groupEn: "H. Modern Myth / Urban Divinity", def: "第一识别是无线信号圣徒。造型入口：简洁连帽衣、信号弧形光、路由器护符、低头倾听设备的姿态和替人群维持连接的安静责任。母题：连接焦虑被神圣化为都市护佑。张力：神性要轻、无形、依赖设备，不要变成发光天使。视觉证据：信号图标、手机屏、天线影子、公共空间插座和人群背后的微弱环光。边界：避免普通网管、科技宣传或AI神。", defEn: "First read: Wi-Fi Signal Saint. Styling entry: simple hoodie, signal-arc light, router charm, posture listening to devices, and quiet responsibility maintaining connection for crowds. Connectivity anxiety becomes urban blessing. Visual evidence: signal icon, phone screens, antenna shadow, public outlet, and faint ring light behind people. Boundary: avoid generic network admin, tech ad, or AI god.", ontologyLevel: 4, eras: mythic, tags: ["wifi", "saint", "connection"] },
  { id: "atm_fortune_spirit", name: "ATM财运灵", nameEn: "ATM Fortune Spirit", group: "H. 现代神话 / 都市神性", groupEn: "H. Modern Myth / Urban Divinity", def: "第一识别是ATM财运灵。造型入口：现金机冷光、银行卡纹样、细小金符、夜间街角和像从取款口旁边显形的狡黠表情。母题：财运神格寄生在现代金融接口。张力：财气要带手续费、余额、夜路和小额愿望的现实感。视觉证据：收据、键盘光、钞票边、摄像头反光和一只手挡住密码的动作。边界：避免普通财神、银行职员或电子幽灵。", defEn: "First read: ATM Fortune Spirit. Styling entry: ATM cold light, bank-card patterns, tiny gold charms, night street corner, and sly expression appearing beside the cash slot. Fortune divinity inhabits financial interface. Visual evidence: receipt, keypad glow, bill edge, camera reflection, and one hand shielding a PIN. Boundary: avoid generic wealth god, bank clerk, or digital ghost.", ontologyLevel: 4, eras: mythic, tags: ["atm", "fortune", "urban_spirit"] },
  { id: "social_media_prayer_girl", name: "社交媒体祈祷女孩", nameEn: "Social-Media Prayer Girl", group: "H. 现代神话 / 都市神性", groupEn: "H. Modern Myth / Urban Divinity", def: "第一识别是社交媒体祈祷女孩。造型入口：手机屏光、祈祷手势变成自拍构图、评论通知、简洁私服和把点赞当作回应神迹的期待眼。母题：祈祷被平台化为发布、等待和反馈。张力：她要像现代普通人，但身体语言被愿望和算法牵引。视觉证据：手机壳护符、通知红点、蜡烛贴纸、低头双手和屏幕反光。边界：避免未成年化、网红泛化或宗教嘲弄。", defEn: "First read: Social-Media Prayer Girl. Styling entry: phone glow, prayer hands turning into selfie composition, comment notifications, simple casualwear, and expectant eyes treating likes as signs. Prayer becomes posting, waiting, and feedback. Visual evidence: charm phone case, red notification dot, candle sticker, lowered hands, and screen reflection. Boundary: avoid minor-coded framing, generic influencer, or religious mockery.", ontologyLevel: 3, eras: mythic, tags: ["social_media", "prayer", "urban"] },
  { id: "airport_limbo_angel", name: "机场中转天使", nameEn: "Airport-Limbo Angel", group: "H. 现代神话 / 都市神性", groupEn: "H. Modern Myth / Urban Divinity", def: "第一识别是机场中转天使。造型入口：旅行大衣、登机牌翅形折痕、行李箱、疲惫光环和在转机区陪伴滞留者的安静站姿。母题：机场中转空间成为现代夹缝里的灵魂候场。张力：天使性要疲惫、礼貌、流程化。视觉证据：航班屏、护照夹、行李牌、荧光灯和半透明羽痕。边界：避免普通旅客、空服员或天堂天使。", defEn: "First read: Airport-Limbo Angel. Styling entry: travel coat, boarding-pass wing fold, suitcase, tired halo, and quiet posture accompanying stranded passengers. Airport transfer space becomes modern limbo. Visual evidence: flight board, passport holder, luggage tag, fluorescent light, and translucent feather traces. Boundary: avoid generic traveler, flight attendant, or heavenly angel.", ontologyLevel: 4, eras: mythic, tags: ["airport", "angel", "limbo"] },
  { id: "office_cubicle_deity", name: "格子间神明", nameEn: "Office-Cubicle Deity", group: "H. 现代神话 / 都市神性", groupEn: "H. Modern Myth / Urban Divinity", def: "第一识别是格子间神明。造型入口：普通衬衫、工位隔板、便利贴供品、咖啡杯光环和在低矮办公桌后接受小愿望的麻木表情。母题：办公室焦虑把神明压缩到工位尺度。张力：神性必须庸常、疲惫、非常小。视觉证据：键盘、工牌、便签祈愿、台灯、线缆和隔板后伸出的手。边界：避免普通白领或宏大神像。", defEn: "First read: Office-Cubicle Deity. Styling entry: ordinary shirt, cubicle panels, sticky-note offerings, coffee-cup halo, and numb expression receiving tiny wishes behind a low desk. Office anxiety compresses divinity to workstation scale. Visual evidence: keyboard, ID card, sticky prayers, desk lamp, cables, and hand reaching over a partition. Boundary: avoid generic office worker or grand idol.", ontologyLevel: 4, eras: mythic, tags: ["office", "deity", "cubicle"] },
  { id: "parking_lot_psychopomp", name: "停车场引魂人", nameEn: "Parking-Lot Psychopomp", group: "H. 现代神话 / 都市神性", groupEn: "H. Modern Myth / Urban Divinity", def: "第一识别是停车场引魂人。造型入口：反光背心、停车票、昏黄灯管、车钥匙串和在地下停车场引导迷失灵魂的低声手势。母题：冥界引路职能被转译进现代灰色空间。张力：他/她要像普通停车场工作人员，却掌握离开与迷路的边界。视觉证据：车位编号、收费机、油渍地面、手电筒和指向出口的手。边界：避免死神、保安或恐怖停车场。", defEn: "First read: Parking-Lot Psychopomp. Styling entry: reflective vest, parking ticket, yellow tube lights, key ring, and low gestures guiding lost souls in an underground lot. Psychopomp function enters modern grey space. Visual evidence: parking numbers, payment machine, oil-stained floor, flashlight, and hand pointing to exit. Boundary: avoid grim reaper, security guard, or horror parking lot.", ontologyLevel: 4, eras: mythic, tags: ["parking_lot", "psychopomp", "urban"] },

  { id: "star_womb_priestess", name: "星胎女祭司", nameEn: "Star-Womb Priestess", group: "I. 宇宙神性 / 异星圣徒", groupEn: "I. Cosmic Divinity / Alien Saint", def: "第一识别是星胎女祭司。造型入口：腹部星云纹、深色祭服、悬浮护符、缓慢托腹手势和像孕育天体而非生命个体的庄重表情。母题：宇宙生育被仪式化为星体孵化。张力：神圣孕育要抽象、庄严、非露骨。视觉证据：星尘光点、圆形腹饰、轨道线、低垂头纱和围绕身体运行的小型符号。边界：避免怀孕猎奇、外星女王或普通祭司。", defEn: "First read: Star-Womb Priestess. Styling entry: nebula mark over the abdomen, dark vestment, floating charms, slow hands holding the belly, and solemn expression gestating celestial bodies rather than an individual life. Cosmic fertility becomes star incubation. Visual evidence: stardust points, circular abdominal ornament, orbital lines, low veil, and small symbols orbiting the body. Boundary: avoid pregnancy spectacle, alien queen, or generic priestess.", ontologyLevel: 5, eras: ["far_future"], risk: "high", tags: ["star_womb", "priestess", "cosmic"] },
  { id: "black_hole_monk", name: "黑洞僧侣", nameEn: "Black-Hole Monk", group: "I. 宇宙神性 / 异星圣徒", groupEn: "I. Cosmic Divinity / Alien Saint", def: "第一识别是黑洞僧侣。造型入口：吸光黑袍、扭曲边缘光、极慢步伐、无声面孔和像把一切目光拉向身体中心的静坐。母题：黑洞被折译成禁欲、引力和吞没语言的修行。张力：不可知感要通过光线和姿态，不要怪物化。视觉证据：暗环、弯曲星点、沉重袖摆、低头合掌和周围空间轻微塌陷感。边界：避免太空怪物、黑衣僧人或随意宇宙特效。", defEn: "First read: Black-Hole Monk. Styling entry: light-absorbing black robe, distorted rim light, extremely slow steps, silent face, and seated posture pulling all gaze inward. Black hole becomes ascetic gravity. Visual evidence: dark ring, bent star points, heavy sleeves, bowed hands, and slight spatial collapse around the body. Boundary: avoid space monster, generic black monk, or random cosmic effects.", ontologyLevel: 5, eras: ["far_future"], risk: "high", tags: ["black_hole", "monk", "cosmic"] },
  { id: "nebula_choir_girl", name: "星云唱诗女孩", nameEn: "Nebula Choir Girl", group: "I. 宇宙神性 / 异星圣徒", groupEn: "I. Cosmic Divinity / Alien Saint", def: "第一识别是星云唱诗女孩。造型入口：透明唱诗袍、星云色喉光、合唱站位、漂浮发丝和声音像气体云缓慢扩散的表情。母题：宇宙尘埃被转译成儿童合唱般的纯净声场。张力：纯净不能可爱化，必须有宇宙尺度的疏离。视觉证据：星尘领口、乐谱光点、半透明袖子、远距离队列和张口时扩散的彩雾。边界：避免普通唱诗班、星空少女或儿童消费。", defEn: "First read: Nebula Choir Girl. Styling entry: translucent choir robe, nebula throat light, choir formation, floating hair, and expression with voice spreading like gas cloud. Cosmic dust becomes a pure but distant choral field. Visual evidence: stardust collar, score-like light points, translucent sleeves, distant formation, and colored mist from the mouth. Boundary: avoid generic choir, starry girl, or child consumption.", ontologyLevel: 5, eras: ["far_future"], risk: "high", tags: ["nebula", "choir", "cosmic"] },
  { id: "comet_marked_herald", name: "彗星标记者", nameEn: "Comet-Marked Herald", group: "I. 宇宙神性 / 异星圣徒", groupEn: "I. Cosmic Divinity / Alien Saint", def: "第一识别是彗星标记者。造型入口：额头拖尾光痕、旅行披风、星图卷轴、急促步伐和像只在周期到来时出现的信使眼神。母题：彗星周期被拟人成带来消息的身体。张力：他/她要有短暂停留和不可挽留感。视觉证据：尾迹纹样、冰尘、信使杖、破风衣摆和看向远方轨道的脸。边界：避免普通信使、流星魔法或科幻侦察员。", defEn: "First read: Comet-Marked Herald. Styling entry: comet-tail mark on brow, travel cloak, star-map scroll, hurried steps, and eyes of a messenger appearing only on schedule. Comet periodicity becomes a body carrying news. Visual evidence: tail motifs, ice dust, herald staff, wind-broken hem, and face toward distant orbit. Boundary: avoid generic messenger, meteor magic, or sci-fi scout.", ontologyLevel: 4, eras: ["far_future"], tags: ["comet", "herald", "cosmic"] },
  { id: "void_baptized_child", name: "虚空受洗儿童", nameEn: "Void-Baptized Child", group: "I. 宇宙神性 / 异星圣徒", groupEn: "I. Cosmic Divinity / Alien Saint", def: "第一识别是虚空受洗儿童。造型入口：黑色洗礼水痕、过大的白袍、无声眼神、成人环绕保护和像刚从无物中被交还的身体。母题：虚空仪式把儿童身体放在宇宙空洞与共同体之间。张力：必须克制保护，不把儿童脆弱奇观化。视觉证据：黑水滴、白布、护身符、扶住肩膀的手和不投影子的脚边。边界：避免恐怖儿童、邪教献祭或虚空怪物。", defEn: "First read: Void-Baptized Child. Styling entry: black baptism marks, oversized white robe, silent eyes, adults around for protection, and a body returned from nothingness. Void ritual places a child between cosmic emptiness and community. Visual evidence: black water drops, white cloth, protective charms, hands supporting shoulders, and feet casting no shadow. Boundary: avoid horror child, cult sacrifice, or void monster.", ontologyLevel: 5, eras: ["far_future"], risk: "high", tags: ["void", "baptism", "child"] },
  { id: "galactic_relic_bearer", name: "银河圣遗物持有者", nameEn: "Galactic Relic Bearer", group: "I. 宇宙神性 / 异星圣徒", groupEn: "I. Cosmic Divinity / Alien Saint", def: "第一识别是银河圣遗物持有者。造型入口：深空旅行服、密封圣匣、星系纹披带、双手托举过重物件的姿态和被遗物反光照亮的脸。母题：圣遗物尺度从教堂扩展到星系。张力：他/她不是冒险者，而是承载不可理解重量的保管人。视觉证据：密封盒、轨道印章、星图锁、磨损肩带和不敢低头看的眼。边界：避免普通寻宝者、太空骑士或魔法宝物展示。", defEn: "First read: Galactic Relic Bearer. Styling entry: deep-space travel clothes, sealed reliquary, galaxy-pattern sash, hands carrying something too heavy, and face lit by relic reflection. Relic scale expands to galaxies. Visual evidence: sealed case, orbital seals, star-map lock, worn shoulder strap, and eyes afraid to look down. Boundary: avoid generic treasure hunter, space knight, or magic item display.", ontologyLevel: 5, eras: ["far_future"], risk: "high", tags: ["relic", "galactic", "bearer"] },
  { id: "asteroid_shrine_keeper", name: "小行星神龛守", nameEn: "Asteroid Shrine Keeper", group: "I. 宇宙神性 / 异星圣徒", groupEn: "I. Cosmic Divinity / Alien Saint", def: "第一识别是小行星神龛守。造型入口：耐压旧袍、微型神龛、锚钩、矿尘和在孤立小行星上维护信仰角落的固执身体。母题：太空边地把神圣缩成维护工作。张力：神性要小、冷、贫乏，但不能消失。视觉证据：真空封条、供灯、岩尘、修补手套和系住身体的安全绳。边界：避免太空和尚、矿工或宏大神殿。", defEn: "First read: Asteroid Shrine Keeper. Styling entry: old pressure robe, tiny shrine, anchor hook, ore dust, and stubborn body maintaining a faith corner on an isolated asteroid. Sacredness shrinks into maintenance labor. Visual evidence: vacuum seals, offering lamp, rock dust, patched gloves, and safety tether. Boundary: avoid space monk, miner, or grand temple.", ontologyLevel: 4, eras: ["far_future"], tags: ["asteroid", "shrine", "keeper"] },
  { id: "cosmic_martyr_pilot", name: "宇宙殉道飞行员", nameEn: "Cosmic Martyr Pilot", group: "I. 宇宙神性 / 异星圣徒", groupEn: "I. Cosmic Divinity / Alien Saint", def: "第一识别是宇宙殉道飞行员。造型入口：飞行服、圣痕式烧蚀痕、舱门光、氧气面罩和像已经接受不会返航的平静眼神。母题：飞行任务被神圣化为自我献祭。张力：他/她仍是飞行员，殉道感来自返航概率、舱体伤痕和身体承受。视觉证据：烧蚀肩章、航线十字、紧急拉环、星光裂窗和手按胸口的动作。边界：避免普通英雄飞行员或宗教殉道图。", defEn: "First read: Cosmic Martyr Pilot. Styling entry: flight suit, stigmata-like ablation marks, hatch light, oxygen mask, and calm eyes accepting no return. Mission becomes sacred self-sacrifice. Visual evidence: burned epaulettes, cross-like trajectory, emergency pull ring, cracked starlit window, and hand on chest. Boundary: avoid generic hero pilot or religious martyr painting.", ontologyLevel: 5, eras: ["far_future"], risk: "high", tags: ["cosmic", "martyr", "pilot"] },
  { id: "planetary_oracle_queen", name: "行星神谕女王", nameEn: "Planetary Oracle Queen", group: "I. 宇宙神性 / 异星圣徒", groupEn: "I. Cosmic Divinity / Alien Saint", def: "第一识别是行星神谕女王。造型入口：行星环王冠、深色王袍、轨道式披肩、眼中多重昼夜和以整颗星球为身体外延的静止姿态。母题：统治权和天体预言合为一体。张力：她的女王感必须来自尺度和不可接近，不是普通王权。视觉证据：行星投影、轨道珠串、星云王座、缓慢抬手和脚下地表纹。边界：避免太空女皇、星空女神或AI统治者。", defEn: "First read: Planetary Oracle Queen. Styling entry: planetary-ring crown, dark royal robe, orbital shawl, multiple day-night cycles in the eyes, and still posture extending into an entire planet. Rule and celestial prophecy become one. Visual evidence: planet projection, orbital beads, nebula throne, slow raised hand, and surface patterns underfoot. Boundary: avoid space empress, star goddess, or AI ruler.", ontologyLevel: 5, eras: ["far_future"], risk: "high", tags: ["planetary", "oracle", "queen"] },
  { id: "solar_cult_astronaut", name: "太阳教宇航员", nameEn: "Solar-Cult Astronaut", group: "I. 宇宙神性 / 异星圣徒", groupEn: "I. Cosmic Divinity / Alien Saint", def: "第一识别是太阳教宇航员。造型入口：宇航服被太阳徽纹改造、金色遮阳面罩、祈祷姿势的手套和把太空任务当成朝圣的直立身体。母题：现代航天流程被太阳崇拜重新解释。张力：宇航员身份必须清楚，宗教性通过徽章、姿态和光线侵入。视觉证据：任务臂章、太阳纹氧气管、金面罩反光、舱外绳和面向恒星的静止。边界：避免普通宇航员、太阳神或邪教太空人。", defEn: "First read: Solar-Cult Astronaut. Styling entry: spacesuit altered with solar emblems, gold visor, prayer-like gloves, and upright body treating mission as pilgrimage. Aerospace workflow is reinterpreted by solar worship. Visual evidence: mission patch, sun-pattern oxygen hose, gold visor reflection, EVA tether, and stillness facing the star. Boundary: avoid generic astronaut, sun god, or cult spaceman.", ontologyLevel: 4, eras: ["near_future", "far_future"], tags: ["solar_cult", "astronaut", "cosmic"] },

  { id: "anti_messiah_boy", name: "反弥赛亚少年", nameEn: "Anti-Messiah Boy", group: "J. 反神圣 / 异端救世", groupEn: "J. Anti-Sacred / Heretical Salvation", def: "第一识别是反弥赛亚少年。造型入口：倒置光环、普通衣物被黑色圣痕打断、平静到不合年龄的脸和被众人既期待又恐惧的站位。母题：救世结构被反向占用。张力：他不能只是邪恶少年，必须像一个被错误预言推到中心的人。视觉证据：反向圣符、被擦掉的祝福字、围观距离、暗光眼和不主动伸手的姿态。边界：避免儿童恶魔、普通反派或宗教直译。", defEn: "First read: Anti-Messiah Boy. Styling entry: inverted halo, ordinary clothes interrupted by black stigmata, too-calm face, and placement feared and expected by crowds. Salvation structure is occupied in reverse. Visual evidence: reversed holy sign, erased blessing text, crowd distance, dark-lit eyes, and hands not reaching first. Boundary: avoid demon child, generic villain, or direct religious copy.", ontologyLevel: 5, eras: mythic, risk: "high", tags: ["anti_messiah", "boy", "heresy"] },
  { id: "heretic_savior_girl", name: "异端救世少女", nameEn: "Heretic Savior Girl", group: "J. 反神圣 / 异端救世", groupEn: "J. Anti-Sacred / Heretical Salvation", def: "第一识别是异端救世少女。造型入口：被改写的圣袍、手写禁书页、灼痕光环和坚持用错误方式救人的倔强眼神。母题：救世冲动脱离正统制度后变成危险温柔。张力：她要像救世者，也像被正统追捕的破坏者。视觉证据：缝补圣符、烧焦书页、手臂护符、奔跑后的衣摆和仍向人伸出的手。边界：避免魔法少女、圣女或叛逆少女泛化。", defEn: "First read: Heretic Savior Girl. Styling entry: rewritten vestment, handwritten forbidden pages, burn-mark halo, and stubborn eyes saving people the wrong way. Salvation leaves orthodoxy and becomes dangerous tenderness. Visual evidence: patched holy signs, scorched pages, arm charms, running hem, and a hand still reaching outward. Boundary: avoid magical girl, saint girl, or generic rebel girl.", ontologyLevel: 5, eras: mythic, risk: "high", tags: ["heretic", "savior", "girl"] },
  { id: "broken_halo_nun", name: "碎光环修女", nameEn: "Broken-Halo Nun", group: "J. 反神圣 / 异端救世", groupEn: "J. Anti-Sacred / Heretical Salvation", def: "第一识别是碎光环修女。造型入口：黑白修女服、断裂光环碎片、修补针线、低头祈祷但不再服从的嘴角。母题：服从制度破裂后仍保留护理和祈祷动作。张力：她不是堕落修女，而是信仰结构被打碎后继续行动的人。视觉证据：破环光、旧念珠、缝补袖口、藏起的禁书和疲惫但坚定的侧脸。边界：避免情色修女、恐怖修女或纯叛教符号。", defEn: "First read: Broken-Halo Nun. Styling entry: black-white habit, shattered halo pieces, mending needles, lowered prayer posture, and mouth no longer obedient. After obedience breaks, care and prayer movements remain. Visual evidence: broken ring light, old rosary, mended cuffs, hidden forbidden book, and tired firm profile. Boundary: avoid erotic nun, horror nun, or pure apostasy symbol.", ontologyLevel: 4, eras: mythic, risk: "medium", tags: ["broken_halo", "nun", "apostasy"] },
  { id: "god_killer_apprentice", name: "弑神学徒", nameEn: "God-Killer Apprentice", group: "J. 反神圣 / 异端救世", groupEn: "J. Anti-Sacred / Heretical Salvation", def: "第一识别是弑神学徒。造型入口：训练服、封神器碎片、老师留下的戒指、未完全掌握的杀神工具和面对神像时压住恐惧的眼。母题：弑神不是炫酷战斗，而是漫长训练、禁忌知识和身体代价。张力：学徒感必须存在，不能直接变成弑神英雄。视觉证据：练习伤、封印布、破神像粉尘、短刃或钉具和半跪起身的姿态。边界：避免超级英雄、屠神爽感或普通刺客。", defEn: "First read: God-Killer Apprentice. Styling entry: training clothes, shards of god-sealing tools, mentors ring, unfinished deicide weapon, and eyes holding fear before an idol. God-killing is training and forbidden cost, not cool combat. Visual evidence: practice wounds, sealing cloth, idol dust, short blade or nails, and half-rising kneel. Boundary: avoid superhero, power fantasy, or generic assassin.", ontologyLevel: 5, eras: mythic, risk: "high", tags: ["god_killer", "apprentice", "heresy"] },
  { id: "blasphemy_court_jester", name: "亵圣宫廷小丑", nameEn: "Blasphemy Court Jester", group: "J. 反神圣 / 异端救世", groupEn: "J. Anti-Sacred / Heretical Salvation", def: "第一识别是亵圣宫廷小丑。造型入口：双色小丑服、破圣徽铃铛、夸张笑脸、靠近王座或祭坛边缘的危险站位。母题：小丑用亵圣玩笑说出不能被正面说出的真相。张力：滑稽必须带政治和神圣风险。视觉证据：铃铛、歪斜冠帽、涂改祷文、灵巧手指和笑到一半突然冷下来的眼。边界：避免普通小丑、恐怖小丑或纯喜剧角色。", defEn: "First read: Blasphemy Court Jester. Styling entry: two-tone jester clothes, broken holy-symbol bells, exaggerated smile, and dangerous placement near throne or altar. The jester speaks forbidden truth through blasphemous jokes. Visual evidence: bells, crooked cap, altered prayer text, nimble fingers, and eyes turning cold mid-laugh. Boundary: avoid generic clown, horror clown, or pure comedy figure.", ontologyLevel: 4, eras: mythic, risk: "medium", tags: ["blasphemy", "jester", "court"] },
  { id: "failed_prophet_teacher", name: "失败先知教师", nameEn: "Failed Prophet Teacher", group: "J. 反神圣 / 异端救世", groupEn: "J. Anti-Sacred / Heretical Salvation", def: "第一识别是失败先知教师。造型入口：旧讲义、粉笔灰、失效预言表、疲惫眼镜和把错误预言改成课程经验的克制表情。母题：神谕失败后，先知被迫转向教学和解释。张力：他/她要有残余神性，但已经不再被完全相信。视觉证据：涂改黑板、裂开的预言印、学生桌椅、旧外套和停在半句的手。边界：避免普通老师、骗子或喜剧失败者。", defEn: "First read: Failed Prophet Teacher. Styling entry: old lecture notes, chalk dust, failed prophecy chart, tired glasses, and restrained expression turning wrong visions into lessons. After oracle failure, prophecy becomes teaching and explanation. Visual evidence: corrected blackboard, cracked prophecy mark, student desks, old coat, and hand paused mid-sentence. Boundary: avoid generic teacher, fraud, or comic failure.", ontologyLevel: 3, eras: mythic, tags: ["failed_prophet", "teacher", "oracle"] },
  { id: "apostate_archangel", name: "叛教大天使", nameEn: "Apostate Archangel", group: "J. 反神圣 / 异端救世", groupEn: "J. Anti-Sacred / Heretical Salvation", def: "第一识别是叛教大天使。造型入口：巨大但收拢的翼、被摘下的圣徽、战袍裂缝、冷白皮肤和主动离开天界阵列后的沉重自由。母题：最高级神圣执行者拒绝原命令。张力：叛教不是黑化，而是带着旧纪律离开。视觉证据：空缺徽章位、折叠羽翼、断誓戒、直线站姿和不回望上方的眼。边界：避免堕天使帅化、魔王化或普通天使。", defEn: "First read: Apostate Archangel. Styling entry: large folded wings, removed holy badge, cracked war robe, cold white skin, and heavy freedom after leaving heavenly formation. A high sacred executor refuses command. Visual evidence: empty badge place, folded wings, broken oath ring, straight posture, and eyes not looking upward. Boundary: avoid cool fallen angel, demon-lord shift, or generic angel.", ontologyLevel: 5, eras: mythic, risk: "high", tags: ["apostate", "archangel", "rebellion"] },
  { id: "sacrilege_fashion_muse", name: "亵圣时装缪斯", nameEn: "Sacrilege Fashion Muse", group: "J. 反神圣 / 异端救世", groupEn: "J. Anti-Sacred / Heretical Salvation", def: "第一识别是亵圣时装缪斯。造型入口：高定剪裁借用祭服结构、破碎圣像珠宝、冷淡走台脸和把禁忌符号转成时装语言的身体。母题：神圣图像被时尚系统重新占用。张力：亵圣要审美化、结构化，不是随便冒犯或堆符号。视觉证据：祭服肩线、圣像碎片耳饰、长手套、冷白灯和不解释含义的凝视。边界：避免宗教复制、普通高定模特或猎奇冒犯。", defEn: "First read: Sacrilege Fashion Muse. Styling entry: couture tailoring borrowing vestment structure, broken-icon jewelry, cold runway face, and body translating taboo symbols into fashion language. Sacred image is reoccupied by fashion system. Visual evidence: vestment shoulder lines, icon-fragment earrings, long gloves, cold white lights, and gaze refusing explanation. Boundary: avoid religious copy, generic couture model, or shock offense.", ontologyLevel: 4, eras: mythic, risk: "medium", tags: ["sacrilege", "fashion", "muse"] },
  { id: "burned_scripture_librarian", name: "焚经图书管理员", nameEn: "Burned-Scripture Librarian", group: "J. 反神圣 / 异端救世", groupEn: "J. Anti-Sacred / Heretical Salvation", def: "第一识别是焚经图书管理员。造型入口：灰烬边书页、图书馆制服、封存箱、烟痕手套和知道哪些经文必须被保存也必须被烧毁的冷静脸。母题：知识管理进入异端审查和记忆保护的矛盾。张力：他/她不是焚书者，而是保存与删除之间的守门人。视觉证据：焦黑书脊、目录卡、灰尘光、封条和轻轻合上书页的手。边界：避免普通图书管理员、纵火者或审查官脸谱。", defEn: "First read: Burned-Scripture Librarian. Styling entry: ash-edged pages, library uniform, sealed boxes, smoke-marked gloves, and calm face knowing which scriptures must be saved and burned. Knowledge management enters the contradiction of heresy control and memory protection. Visual evidence: charred spines, catalog cards, dusty light, seals, and hand gently closing a book. Boundary: avoid generic librarian, arsonist, or censor caricature.", ontologyLevel: 4, eras: mythic, risk: "medium", tags: ["scripture", "librarian", "heresy"] },
  { id: "unholy_child_saint", name: "不洁圣童", nameEn: "Unholy Child Saint", group: "J. 反神圣 / 异端救世", groupEn: "J. Anti-Sacred / Heretical Salvation", def: "第一识别是不洁圣童。造型入口：白衣被黑色祝福痕污染、护符过多、成人保护性围绕和明明被称为圣却无法被触碰的安静。母题：圣洁与污染被错误地放在同一个儿童身体上。张力：必须保护儿童呈现，重点在共同体恐惧和隔离，不制造猎奇伤害。视觉证据：黑白对比绳结、隔离线、供花、低头小手和远处祈祷者。边界：避免恐怖儿童、邪恶童子或苦难消费。", defEn: "First read: Unholy Child Saint. Styling entry: white clothes stained by black blessing marks, too many charms, protective adults around, and quiet presence called holy yet untouchable. Purity and pollution are wrongly placed in one child body. Visual evidence: black-white cords, isolation line, offerings, lowered small hands, and distant prayer figures. Boundary: avoid horror child, evil-child trope, or suffering consumption.", ontologyLevel: 5, eras: mythic, risk: "high", tags: ["unholy", "child_saint", "pollution"] }
];

const seedsWithFit: ExplicitPersonaSeed[] = seeds.map(seed => ({
  ...seed,
  categoryFit: seed.categoryFit || divineFitOverrides[seed.id] || divineFit(seed.group)
}));

export const CD_PERSONA_DIVINE_DEMONIC = buildExplicitPersonaTerms({
  categoryId: 'divine_demonic',
  categoryName: '神性 / 天使恶魔 / 半神人设',
  categoryNameEn: 'Divine / Angelic-Demonic / Demigod Persona',
  baseTags: ['divine', 'demonic', 'superhuman'],
  baseStyleTags: ['divine', 'mythic'],
  baseControls: ['costume', 'body', 'symbol', 'ritual', 'prop', 'pose', 'aura'],
  defaultForbids: ['纯现实日常化', '随机机械义体抢走神性逻辑', '无解释赛博霓虹化'],
  defaultEras: mythic,
  defaultOntologyLevel: 4,
  visualEvidence: '神圣符号、血统标记、光环/角/圣痕、仪式服制、契约物和神罚姿态',
  visualEvidenceEn: 'sacred symbols, lineage marks, halo/horn/stigmata, ritual costume, contract objects, and divine-punishment posture',
  absorptionFocus: '神圣谱系、契约痕迹、仪式服制、神罚标记、身体圣像化或异端身份',
  absorptionFocusEn: 'sacred lineage, contract traces, ritual costume, divine-punishment marks, body-as-icon, or heretical identity',
  appendVisualEvidence: false
}, seedsWithFit);
