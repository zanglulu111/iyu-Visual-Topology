import { LibraryCategoryDef } from '../../../types';

export const SUR9_GROUP_M: LibraryCategoryDef = {
  id: "orig_outcast",
  name: "5. 边缘与弃民 (Outcast & Pariah)",
  nameEn: "Outcast & Pariah",
  desc: "被主流社会排斥、遗忘或主动放逐的人。",
  descEn: "Those rejected, forgotten, or self-exiled by mainstream society.",
  items: [
    {
      id: "homeless",
      name: "流浪汉", nameEn: "Homeless",
      group: "E. 边缘与弃民", groupEn: "Outcast & Pariah",
      def: "没有家，睡在街头，被城市彻底遗忘的透明人。",
      defEn: "Homeless, sleeping on the streets, transparent individuals completely forgotten by the city.",
      core: "我躺在繁华中心的下水道井盖上取暖，所有人绕着我走，像绕开一滩狗屎。 | 缺失 ($): 遮蔽与尊严 (Shelter and Dignity)",
      coreEn: "I warm myself on a sewer cover in the bustling center; everyone walks around me like dodging dog shit. | Lack ($): Shelter and Dignity",
      reference: "《当幸福来敲门》(2006, 加布里埃尔·穆奇诺) 克里斯·加德纳；《小丑》(2019, 托德·菲利普斯) 亚瑟·弗兰克",
      referenceEn: "\"The Pursuit of Happyness\" (2006, Gabriele Muccino) Chris Gardner; \"Joker\" (2019, Todd Phillips) Arthur Fleck; \"The Pursuit of Happyness\" the hero holding his son in a hyper-dirty foul subway bathroom, desperately barricading the door against manic pounding drunks, sobbing loudly in sheer darkness; \"Joker\" skeletal Arthur mercilessly gang-stomped by thugs in Gotham's garbage/piss-smelling dark alleys, his ribs viciously broken into pieces."
    },
    {
      id: "refugee",
      name: "难民", nameEn: "Refugee",
      group: "E. 边缘与弃民", groupEn: "Outcast & Pariah",
      def: "因战争、灾难或迫害逃离家园，失去国家保护的裸命存在。",
      defEn: "Fleeing homeland due to war, disaster, or persecution; bare lives striped of state protection.",
      core: "除了这身衣服和我背后的火光，我什么都没有了，但边境的铁丝网依然挡住了我的路。 | 缺失 ($): 安全的坐标 (Safe Coordinates)",
      coreEn: "I have nothing left but these clothes and the flames behind me, yet the border barbed wire still blocks my path. | Lack ($): Safe Coordinates",
      reference: "《人类之子》(2006, 阿方索·卡隆) 难民；《迦百农》(2018, 娜丁·拉巴基) 赞恩",
      referenceEn: "\"Children of Men\" (2006, Alfonso Cuarón) Refugees; \"Capernaum\" (2018, Nadine Labaki) Zain; \"Children of Men\" in a dead barren doomsday without babies, refugee camps look like colossal horrific cages where people crawl like wild dogs amid incoming high-explosives and cold-blooded army MG-fire; \"Capernaum\" sold at twelve, a deeply despondent boy suing his parents in a slum-court asking why they birthed their cursed rotten flesh."
    },
    {
      id: "untouchable",
      name: "贱民/不可接触者", nameEn: "Untouchable",
      group: "E. 边缘与弃民", groupEn: "Outcast & Pariah",
      def: "因种姓制度、血统或深根固蒂的社会偏见而被标记为不洁的最底层。",
      defEn: "The absolute bottom tier marked as unclean due to caste systems, lineage, or deep-rooted social prejudice.",
      core: "我出生的那一刻起，我的影子碰到了他们，就被视为一种严重的罪孽。 | 缺失 ($): 原生洁净性 (Innate Purity)",
      coreEn: "The moment I was born, if my shadow touched them, it was considered a grave sin. | Lack ($): Innate Purity",
      reference: "《白虎》(2021, 拉敏·巴哈尼) 巴尔朗·哈尔维；《贫民窟的百万富翁》(2008, 丹尼·博伊尔) 贾马尔·马利克",
      referenceEn: "\"The White Tiger\" (2021, Ramin Bahrani) Balram Halwai; \"Slumdog Millionaire\" (2008, Danny Boyle) Jamal Malik; \"The White Tiger\" the lowest-caste hero forcing ultimate subservient smiles, yet still kicked away like a scabies-infested mutt by his master, finally slashing a throat with a fatal broken bottle in rain; \"Slumdog Millionaire\" tiny Jamal literally diving into a colossal festering feces-mud-shit latrine, swimming frantically just to get a superstar's autograph."
    },
    {
      id: "hermit_exile",
      name: "隐士", nameEn: "Hermit",
      group: "E. 边缘与弃民", groupEn: "Outcast & Pariah",
      def: "主动选择切断与人类社会的联系，独自在荒野中寻求绝对精神或逃避的主体。",
      defEn: "Subject actively choosing to sever ties with human society, seeking absolute spirit or escape alone in the wilderness.",
      core: "别人觉得我是被放逐了，但我知道，是我把整个世界放逐了。 | 代偿 ($): 虚无的自由 (Nihilistic Freedom)",
      coreEn: "Others think I was exiled, but I know it's I who exiled the whole world. | Compensation ($): Nihilistic Freedom",
      reference: "《荒野生存》(2007, 西恩·潘) 克里斯托弗·麦坎德斯；《在这个世界的角落》(2016, 片渊须直) 北条铃",
      referenceEn: "\"Into the Wild\" (2007, Sean Penn) Christopher McCandless; \"In This Corner of the World\" (2016, Sunao Katabuchi) Suzu Hojo; \"Into the Wild\" modern-civ-hating hero burning all his dollars escaping society, only to mistakenly eat lethal frozen mushrooms starving to a literal skeleton inside an abandoned snowed-in bus; \"In This Corner of the World\" at the blinding edge of the atomic flash, a ruined hermit with his right arm blown to charred coal desperately sketching the final sky."
    },
    {
      id: "cult_member",
      name: "邪教徒", nameEn: "Cultist",
      group: "E. 边缘与弃民", groupEn: "Outcast & Pariah",
      def: "将全部理智献祭给极端信仰体系，生活在封闭且狂热的妄想共同体中。",
      defEn: "Sacrificing all reason to an extreme belief system, living in a closed and fanatical delusional community.",
      core: "导师的话语就是宇宙的真理，外面的世界全是堕落的罪人。 | 代偿 ($): 确凿无疑的狂热 (Indisputable Fanaticism)",
      coreEn: "The Guru's words are the truth of the universe; the outside world is full of fallen sinners. | Compensation ($): Indisputable Fanaticism",
      reference: "《仲夏夜惊魂》(2019, 阿里·艾斯特) 哈加教徒；《双瞳》(2002, 陈国富) 真仙观信徒",
      referenceEn: "\"Midsommar\" (2019, Ari Aster) Hårga Cultists; \"Double Vision\" (2002, Chen Kuo-fu) True Immortal Temple Believers; \"Midsommar\" smiling brainwashed cultists under blinding endless Swedish noon, smashing elder skulls with massive red-hot wooden mallets and burning peers alive screaming inside bear-skins; \"Double Vision\" in a terrifying dark Taoist temple hidden inside a modern skyscraper, suited elites morbidly slaughtered amidst pungent blood and formalin just to ascend to immortality."
    },
    {
      id: "leper",
      name: "麻风病人/感染者", nameEn: "The Infected",
      group: "E. 边缘与弃民", groupEn: "Outcast & Pariah",
      def: "携带高危险性传染病，身体因溃烂而异形，被社会彻底隔离的怪物。",
      defEn: "Carrying highly dangerous infectious diseases, body mutated by ulceration, a monster completely isolated from society.",
      core: "我只是生了病，但他们看着我，就像看着地狱里爬出来的恶鬼。 | 缺失 ($): 人类身份认同 (Human Identity Recognition)",
      coreEn: "I just got sick, but they look at me like a demon crawling out of hell. | Lack ($): Human Identity Recognition",
      reference: "《天国王朝》(2005, 雷德利·斯科特) 鲍德温四世；《地狱男爵》(2004, 吉尔莫·德尔·托罗) 地狱男爵",
      referenceEn: "\"Kingdom of Heaven\" (2005, Ridley Scott) Baldwin IV; \"Hellboy\" (2004, Guillermo del Toro) Hellboy; \"Kingdom of Heaven\" King Baldwin IV, omnipotent yet rotting his entire face off from severe leprosy, silently coughing blood daily forced to wear a cold shining heavy silver mask for dignity; \"Hellboy\" possessing massive demon-red fists and sawed-off horns, saving the world only to be hysterically pelted to bloody pulps with rocks by disgusted mortals, retreating to sewers."
    },
    {
      id: "madman_prophet",
      name: "疯子/先知", nameEn: "Madman",
      group: "E. 边缘与弃民", groupEn: "Outcast & Pariah",
      def: "精神彻底错乱，跌出理性世界网络，在迷乱的幻觉中说出可怖的真谛。",
      defEn: "Utterly deranged, fallen out of the rational world network, speaking dreadful truths amidst bewildered hallucinations.",
      core: "我在墙面的裂缝里看到了宇宙运转的齿轮，但他们只给我穿上紧束衣。 | 代偿 ($): 疯狂的启示 (Crazy Revelations)",
      coreEn: "I saw the universe's gears turning in the wall's cracks, but they just put me in a straitjacket. | Compensation ($): Crazy Revelations",
      reference: "《十二猴子》(1995, 特瑞·吉列姆) 杰弗里·戈因斯；《守望者》(2009, 扎克·施奈德) 罗夏",
      referenceEn: "\"12 Monkeys\" (1995, Terry Gilliam) Jeffrey Goines; \"Watchmen\" (2009, Zack Snyder) Rorschach; \"12 Monkeys\" Brad Pitt twitching/screeching manic like an ape on dilapidated asylum wire-fences, his eyes radiating the frantic truth that doomed humanity; \"Watchmen\" Rorschach in a filthy yellowing inkblot mask holding a 'The End is Nigh' sign in pouring NY mud, getting his head completely blown off despite his journal holding hyper-bloody absolute truth."
    },
    {
      id: "orphan_street",
      name: "流浪儿", nameEn: "Street Urchin",
      group: "E. 边缘与弃民", groupEn: "Outcast & Pariah",
      def: "没有成年人庇护的幼小生命，如同城市下水道里的老鼠般野蛮生长。",
      defEn: "Young lives without adult protection, growing wild like rats in the city's sewers.",
      core: "从懂得可以从别人兜里摸出面包那一天起，我的童年就结束了。 | 缺失 ($): 父名保护 (Name-of-the-Father Protection)",
      coreEn: "My childhood ended the day I learned bread could be swiped from someone's pocket. | Lack ($): Name-of-the-Father Protection",
      reference: "《雾都孤儿》(2005, 罗曼·波兰斯基) 奥利弗·退斯特；《阿基拉》(1988, 大友克洋) 铁雄",
      referenceEn: "\"Oliver Twist\" (2005, Roman Polanski) Oliver Twist; \"Akira\" (1988, Katsuhiro Otomo) Tetsuo Shima; \"Oliver Twist\" in a hyper-freezing cramped workhouse filled with moldy dead rats, starving Oliver shaking a broken wooden bowl daring to whisper 'Please sir, I want some more' invoking brutal beatings; \"Akira\" discarded in highly degenerate ultra-violent cyber-biker ruins, Tetsuo ultimately mutating into a colossal hideous mega-flesh-tumor crushing entire skyscrapers."
    },
    {
      id: "scavenger_waste",
      name: "拾荒者", nameEn: "Scavenger",
      group: "E. 边缘与弃民", groupEn: "Outcast & Pariah",
      def: "在巨型垃圾填埋场或废墟中翻找可利用金属与残羹冷炙的末端人类。",
      defEn: "Terminal humans rummaging through giant landfills or ruins for usable metal and leftover scraps.",
      core: "你们眼中腐烂的垃圾，是我能活到明天的金矿。 | 代偿 ($): 废料重组生存学 (Survival Scavengology)",
      coreEn: "The rotting trash in your eyes is the gold mine helping me live to see tomorrow. | Compensation ($): Survival Scavengology",
      reference: "《银翼杀手2049》(2017, 丹尼斯·维伦纽瓦) 垃圾场拾荒小孩；《第九区》(2009, 尼尔·布洛姆坎普) 大虾外星人",
      referenceEn: "\"Blade Runner 2049\" (2017, Denis Villeneuve) Trash Mesa Scavenger Kids; \"District 9\" (2009, Neill Blomkamp) Prawn Aliens; \"Blade Runner 2049\" feral scavenger kids acting like bloodthirsty vultures on endless giant trash-mountains spewing orange toxic smoke, ripping motherboards from mega-ship wrecks ready to stun-gun peers; \"District 9\" brutally starved terrifying Prawn-aliens leaking green acid, rummaging through giant piles of dead cats and junk in Jo-burg slums to sell scrap iron."
    },
    {
      id: "nomad_gypsy",
      name: "吉普赛人/游牧者", nameEn: "Nomad",
      group: "E. 边缘与弃民", groupEn: "Outcast & Pariah",
      def: "没有固定住所，以家族或大篷车为单位在各国之间游荡的不安定分子。",
      defEn: "No fixed residence, unstable elements wandering between countries in families or caravans.",
      core: "脚下的路永远属于我们，但路边所有的镇子都想把我们赶走。 | 缺失 ($): 地理根基 (Geographical Roots)",
      coreEn: "The road under our feet always belongs to us, but every town on the side wants to drive us away. | Lack ($): Geographical Roots",
      reference: "《无依之地》(2020, 赵婷) 弗恩；《疯狂的麦克斯4：狂暴之路》(2015, 乔治·米勒) 废土游民",
      referenceEn: "\"Nomadland\" (2020, Chloé Zhao) Fern; \"Mad Max: Fury Road\" (2015, George Miller) Wasteland Nomads; \"Nomadland\" a ruined old woman losing all properties, driving a freezing leaky RV alone in hyper-desolate endless barren American desert canyons, pissing in the bone-chilling night while tearing up; \"Mad Max\" in a hyper-nuclear-dry devastated ruin, ultra-savage hardcore nomads violently looting one barrel of black petrol using blood and shredded meat just to survive."
    },
    {
      id: "escaped_convict",
      name: "逃犯", nameEn: "Escaped Convict",
      group: "E. 边缘与弃民", groupEn: "Outcast & Pariah",
      def: "打破了系统的牢笼，却被整个象征界通缉，行走在终极焦虑中的亡命徒。",
      defEn: "Broke the system's cage, but wanted by the entire Symbolic, desparadoes walking in ultimate anxiety.",
      core: "每一次警笛的呼啸，都是系统在试图重新逮捕我的魂魄。 | 缺失 ($): 安宁 (Peace)",
      coreEn: "Every wail of the siren is the system trying to re-arrest my soul. | Lack ($): Peace",
      reference: "《肖申克的救赎》(1994, 弗兰克·德拉邦特) 安迪·杜佛兰；《末路狂花》(1991, 雷德利·斯科特) 塞尔玛与路易斯",
      referenceEn: "\"The Shawshank Redemption\" (1994, Frank Darabont) Andy Dufresne; \"Thelma & Louise\" (1991, Ridley Scott) Thelma & Louise; \"The Shawshank Redemption\" Andy crawling frantically through 500 yards of an extreme rank shit-pipe so foul vomit fills his mouth, emerging to rip his shirt off roaring into the violent storm; \"Thelma & Louise\" chased by dozens of terrifying flashing system-police cruisers, the sisters absolutely refuse to turn back, laughing hysterically and driving off the massive canyon cliff into total explosive pieces."
    },
    {
      id: "disgraced_hero",
      name: "蒙羞英雄", nameEn: "Disgraced Hero",
      group: "E. 边缘与弃民", groupEn: "Outcast & Pariah",
      def: "曾经处于高光时刻的核心人物，因致命丑闻或失败跌落神坛，被大众唾弃。",
      defEn: "Once a core figure in the limelight, fallen from grace due to a fatal scandal or failure, spurned by the public.",
      core: "他们曾经把我举得多高，如今踩在烂泥里的脚就有多用力。 | 缺失 ($): 往昔的荣光 (Past Glory)",
      coreEn: "As high as they once held me up, that's how hard their feet stamp me into the mud now. | Lack ($): Past Glory",
      reference: "《蝙蝠侠：黑暗骑士》(2008, 克里斯托弗·诺兰) 蝙蝠侠；《黑袍纠察队》(2019, 系列剧) 护国超人",
      referenceEn: "\"The Dark Knight\" (2008, Christopher Nolan) Batman; \"The Boys\" (2019, Series) Homelander; \"The Dark Knight\" Batman taking the horrific blame for dozens of murders just to leave Gotham a coin of hope, sprinting chased by manic dogs and cops into extreme pitch-black night; \"The Boys\" Homelander's hyper-sick murder-tapes exposed—going from absolute god to instantly using laser-eyes to indiscriminately slaughter crowds in a massive hysterical bloody rage."
    },
    {
      id: "digital_ghost",
      name: "数字难民/黑户", nameEn: "Digital Refugee",
      group: "E. 边缘与弃民", groupEn: "Outcast & Pariah",
      def: "在高度数字化的未来社会中，没有ID、没有账户，在算法矩阵中等同于一具不存在的尸体。",
      defEn: "In a highly digitized future society, having no ID or accounts; equivalent to a non-existent corpse in the algorithmic matrix.",
      core: "我的脉搏还在跳动，但系统显示我五年前就过期了。 | 缺失 ($): 认证 (Authentication)",
      coreEn: "My pulse is still beating, but the system shows I expired five years ago. | Lack ($): Authentication",
      reference: "《攻壳机动队》(1995, 押井守) 草薙素子；《超验骇客》(2014, 沃利·菲斯特) 威尔·卡斯特",
      referenceEn: "\"Ghost in the Shell\" (1995, Mamoru Oshii) Motoko Kusanagi; \"Transcendence\" (2014, Wally Pfister) Will Caster; \"Ghost in the Shell\" Motoko diving off absurdly high reflecting cyberpunk abysses, letting her hyper-real mechanical-camo flesh tear into pieces, fully vanishing as a pure digital ghost in the boundless cyber-brain ocean; \"Transcendence\" a physically poisoned super-genius uploading his terrifying-compute soul, turning every camera and drop of water worldwide into cold emotionless tentacles of a cyber-god monitoring all."
    },
    {
      id: "mutant_outcast",
      name: "变种人", nameEn: "Mutant",
      group: "E. 边缘与弃民", groupEn: "Outcast & Pariah",
      def: "因辐射、基因实验或污染产生身体异变，被迫隐没于阴暗角落的异类种群。",
      defEn: "Due to radiation, genetics, or pollution causing bodily mutation, a hetero-species forced into dark corners.",
      core: "如果阳光不接受我的脸，我就把夜晚当做我的防空洞。 | 缺失 ($): 正常的人类表象 (Normal Human Visage)",
      coreEn: "If the sunlight doesn't accept my face, I will treat the night as my bomb shelter. | Lack ($): Normal Human Visage",
      reference: "《X战警》(2000, 布莱恩·辛格) 小淘气(罗刹女)；《毒液》(2018, 鲁本·弗雷斯彻) 毒液/埃迪·布洛克",
      referenceEn: "\"X-Men\" (2000, Bryan Singer) Rogue; \"Venom\" (2018, Ruben Fleischer) Venom / Eddie Brock; \"X-Men\" Rogue, bearing a terrifying power that instantly drains life and flesh into ash to anyone she touches, perpetually crumbling in despair wrapped in heavy cloaks not daring to touch her lover; \"Venom\" at the edge of filthy sewers, a viscous black-oil parasite brutally rips open the host's skull pouring inside, forming a mutating anti-hero biting off heads amidst horrific screams and roars."
    },
    {
      id: "feral_child",
      name: "狼孩", nameEn: "Feral Child",
      group: "E. 边缘与弃民", groupEn: "Outcast & Pariah",
      def: "从小脱离人类社会被野兽抚养，拥有人类肉体却毫无文明心智的实验悖论。",
      defEn: "Separated from human society since infancy, raised by beasts; an experimental paradox possessing human flesh but no civil mind.",
      core: "（只剩下咆哮、撕咬与对火的恐惧，没有任何'我'的概念。） | 缺失 ($): 语言与主体性 (Language and Subjectivity)",
      coreEn: "(Only roars, bites, and fear of fire remain; no concept of 'I' exists.) | Lack ($): Language and Subjectivity",
      reference: "《幽灵公主》(1997, 宫崎骏) 桑(幽灵公主)；《野孩子》(1970, 弗朗索瓦·特吕弗) 维克多",
      referenceEn: "\"Princess Mononoke\" (1997, Hayao Miyazaki) San; \"The Wild Child\" (1970, François Truffaut) Victor of Aveyron; \"Princess Mononoke\" cold-bloodedly abandoned by parents, raised by giant wolf-gods, a wolf-girl with a face smeared with raw-meat blood biting a razor-sharp dagger glaring at humans atop immense canopies; \"The Wild Child\" lacking language, crawling terrifyingly on all fours like an ape spasming in stark fear of fire, a subject desperately howling trapped in a suffocating white room by 'civilized' doctors."
    }
  ]
};
