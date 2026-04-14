import { LibraryCategoryDef } from '../../../types';

export const SUR9_GROUP_P: LibraryCategoryDef = {
  id: "orig_exile",
  name: "16. 异乡与流亡 (Exile & Foreigner)",
  nameEn: "Exile & Foreigner",
  desc: "身体在此时此地，灵魂与根系却永远在别处的空间漂泊者。流亡、移民、滞留——永恒的他乡人。",
  defEn: "Spatial wanderers whose bodies are here but souls and roots forever elsewhere. Exiles, immigrants, the stranded — eternal foreigners.",
  items: [
    {
      id: "political_exile",
      name: "政治流亡者",
      nameEn: "Political Exile",
      def: "因坚持不容于祖国的政治理想而被迫跨越国境流亡的失根者。",
      defEn: "Rootless wanderer forced to cross borders due to political ideals intolerable to their homeland.",
      core: "我以为我逃出了那个国家的监狱，但没有了那个国家，我的愤怒便无所依附。自由是一座没有地址的房子。",
      coreEn: "I thought I escaped that country's prison, but without it, my anger has nowhere to attach. Freedom is a house with no address.",
      reference: "《窃听风暴》(2006, 弗洛里安·亨克尔) 东德异见者 / 《辛德勒的名单》(1993, 史蒂文·斯皮尔伯格) 犹太难民",
      referenceEn: "\"The Lives of Others\" (2006, Florian Henckel) East German Dissidents / \"Schindler's List\" (1993, Steven Spielberg) Jewish Refugees"
    },
    {
      id: "immigrant_first",
      name: "一代移民",
      nameEn: "First Gen Immigrant",
      def: "为了下一代的前途斩断过去、来到语言不通的新大陆的第一代移居者。",
      defEn: "First-generation settler severing the past for the next generation's future, arriving on a new continent with a language barrier.",
      core: "我用流血的双手洗了半辈子盘子，只为让儿子能用流利的英语来嘲笑我的口音。牺牲是一张单程票。",
      coreEn: "I washed plates with bleeding hands half my life so my son can mock my accent in fluent English. Sacrifice is a one-way ticket.",
      reference: "《教父2》(1974, 弗朗西斯·科波拉) 维托·柯里昂(幼年) / 《米纳里》(2020, 李·以萨克·郑) 雅各布一家",
      referenceEn: "\"The Godfather Part II\" (1974, Francis Ford Coppola) Vito Corleone (Child) / \"Minari\" (2020, Lee Isaac Chung) Jacob's Family"
    },
    {
      id: "expat",
      name: "外派人员",
      nameEn: "Expat",
      def: "带着母国资本与特权驻扎在海外、生活在封闭保护圈内的跨国企业派驻人员。",
      defEn: "Multinational corporate assignee stationed overseas with homeland capital and privileges, living inside enclosed protective bubbles.",
      core: "我在这里工作了五年，英语很好，但我不知道楼下清洁工用当地话怎么说'你好'。地图上我在这里，心理上我哪儿都不在。",
      coreEn: "I've worked here five years with great English, but I don't know how the cleaner says 'hello' in the local tongue. On the map I'm here; psychologically I'm nowhere.",
      reference: "《迷失东京》(2003, 索菲亚·科波拉) 夏洛特/鲍勃 / 《卢旺达饭店》(2004, 特瑞·乔治) 外国外派人员",
      referenceEn: "\"Lost in Translation\" (2003, Sofia Coppola) Charlotte / Bob Harris / \"Hotel Rwanda\" (2004, Terry George) Foreign Expats"
    },
    {
      id: "war_refugee",
      name: "战争难民",
      nameEn: "War Refugee",
      def: "家园被战火摧毁、在炮火与饥荒中丧失一切社会身份的战争流民。",
      defEn: "War displaced persons whose homeland is destroyed by war, stripped of all social identity amidst artillery and famine.",
      core: "你问我什么是尊严？尊严是当你拿枪指着我的头时，我依然能咽下一口带泥的面包。尊严是最后一件能被没收的东西。",
      coreEn: "You ask what dignity is? Dignity is swallowing muddy bread with a gun at my head. Dignity is the last thing that can be confiscated.",
      reference: "《漫长的婚约》(2004, 让-皮埃尔·热内) 战壕伤兵 / 《风之谷》(1984, 宫崎骏) 逃难平民",
      referenceEn: "\"A Very Long Engagement\" (2004, Jean-Pierre Jeunet) Trench Soldiers / \"Nausicaä\" (1984, Hayao Miyazaki) Fleeing Civilians"
    },
    {
      id: "time_traveler_stuck",
      name: "滞留时间旅行者",
      nameEn: "Stuck Traveler",
      def: "因机器故障或物理异常滞留在不属于自己的过去或未来、无法返回的时间错位者。",
      defEn: "Time-displaced person stranded in a past or future not their own due to machine failure or physical anomaly, unable to return.",
      core: "我知道明天这架飞机就会坠毁，但历史书上写着它必须坠毁。知道未来是一种最精确的酷刑。",
      coreEn: "I know this plane crashes tomorrow, but history books say it must. Knowing the future is the most precise form of torture.",
      reference: "《终结者2》(1991, 詹姆斯·卡梅隆) 莎拉·康纳 / 《十二猴子》(1995, 特瑞·吉列姆) 詹姆斯·科尔",
      referenceEn: "\"Terminator 2\" (1991, James Cameron) Sarah Connor / \"12 Monkeys\" (1995, Terry Gilliam) James Cole"
    },
    {
      id: "alien_stranding",
      name: "滞留外星人",
      nameEn: "Stranded Alien",
      def: "飞船坠毁或任务失败后被永远丢弃在地球上、不得不伪装成人类的地外生命体。",
      defEn: "Extraterrestrial life form abandoned on Earth after a crashed ship or failed mission, forced to disguise as human.",
      core: "我学会了微笑和系领带，但我永远学不会理解为什么人类喜欢流眼泪。地球是他的流放地，伪装是他的呼吸。",
      coreEn: "I learned to smile and tie a tie, but I'll never understand why humans shed tears. Earth is his exile; disguise his breathing.",
      reference: "《第九区》(2009, 尼尔·布洛姆坎普) 大虾外星人 / 《来自星星的你》(2013, 剧集) 都敏俊",
      referenceEn: "\"District 9\" (2009, Neill Blomkamp) Prawn Aliens / \"My Love from the Star\" (2013, Series) Do Min-joon"
    },
    {
      id: "fallen_angel",
      name: "堕落天使",
      nameEn: "Fallen Angel",
      def: "因原罪、质疑或抗命被从天界/神界打入凡间的前神圣存在。",
      defEn: "Former divine being cast down from heaven/god-realm to the mortal plane due to original sin, questioning, or disobedience.",
      core: "神夺走了我的光环，却把我扔进了充满妓女、醉汉和泥水的人间。翅膀是他失去的器官，泥土是他新的皮肤。",
      coreEn: "God took my halo and threw me into a world of whores, drunks, and mud. Wings are his lost orgran; dirt his new skin.",
      reference: "《康斯坦丁》(2005, 弗朗西斯·劳伦斯) 加百列/路西法 / 《天使之城》(1998, 布拉德·塞伯宁) 塞斯",
      referenceEn: "\"Constantine\" (2005, Francis Lawrence) Gabriel / Lucifer / \"City of Angels\" (1998, Brad Silberling) Seth"
    },
    {
      id: "last_of_kind",
      name: "遗族",
      nameEn: "Last of Kind",
      def: "整个种族或文明被彻底毁灭后，背负着所有死者记忆前行的最后幸存者。",
      defEn: "Last survivor trudging forward bearing the memories of all the dead after the total annihilation of their race or civilization.",
      core: "如果我死了，宇宙里就没有谁还记得那首在双星系统下唱出的摇篮曲了。灭绝不是他的过去，是他的肩膀。",
      coreEn: "If I die, no one in the universe remembers the lullaby sung under the binary stars. Extinction is not his past; it's his shoulders.",
      reference: "《超人：钢铁之躯》(2013, 扎克·施奈德) 卡尔-艾尔 / 《我是传奇》(2007, 弗朗西斯·劳伦斯) 罗伯特·内维尔",
      referenceEn: "\"Man of Steel\" (2013, Zack Snyder) Kal-El / \"I Am Legend\" (2007, Francis Lawrence) Robert Neville"
    },
    {
      id: "defector",
      name: "叛逃者",
      nameEn: "Defector",
      def: "背弃原属国家或组织、投奔敌对阵营寻求政治庇护的人。两边都不信任他。",
      defEn: "Person who betrayed their original country or organization, seeking asylum with the opposing camp. Trusted by neither side.",
      core: "母国每天在通缉令上诅咒我死，而保护我的国家在我卧室里装了二十个摄像头。两面镜子，他哪面都照不出自己。",
      coreEn: "My motherland curses me on wanted posters daily; the protecting country has twenty cameras in my bedroom. Two mirrors, neither reflecting him.",
      reference: "《间谍之桥》(2015, 史蒂文·斯皮尔伯格) 鲁道夫·阿贝尔 / 《逃离德黑兰》(2012, 本·阿弗莱克) 被困外交官",
      referenceEn: "\"Bridge of Spies\" (2015, Steven Spielberg) Rudolf Abel / \"Argo\" (2012, Ben Affleck) Trapped US Diplomats"
    },
    {
      id: "colonial_officer",
      name: "殖民官员",
      nameEn: "Colonial Officer",
      def: "身披帝国荣光来到殖民地代表'文明'的行政管理者。在异域环境中逐渐腐化。",
      defEn: "Administrative manager arriving in the colony representing 'civilization' draped in imperial glory. Gradually corrupted in the foreign environment.",
      core: "我带来了法律和火车，但丛林里的蚊子和当地人仇视的眼神，正在把我的理智一点点吃干抹净。文明是他的面具，丛林是他的镜子。",
      coreEn: "I brought laws and trains, but jungle mosquitoes and locals' hateful eyes devour my sanity bit by bit. Civilization is his mask; the jungle his mirror.",
      reference: "《现代启示录》(1979, 弗朗西斯·科波拉) 库尔茨上校 / 《走出非洲》(1985, 西德尼·波拉克) 凯伦·布里克森",
      referenceEn: "\"Apocalypse Now\" (1979, Francis Ford Coppola) Colonel Kurtz / \"Out of Africa\" (1985, Sydney Pollack) Karen Blixen"
    },
    {
      id: "space_castaway",
      name: "太空漂流者",
      nameEn: "Space Castaway",
      def: "飞船事故后被困在救生舱或废弃空间站中、面对绝对虚空的孤独宇航员。",
      defEn: "Lonely astronaut trapped in a life pod or abandoned space station after a ship accident, facing the absolute void.",
      core: "除了这半罐用尿液循环的水，我的世界只剩外面三开尔文的黑暗与寂静。宇宙是最安静的坟场。",
      coreEn: "Besides this half-can of recycled urine water, my world is only the 3-Kelvin darkness outside. The universe is the quietest graveyard.",
      reference: "《地心引力》(2013, 阿方索·卡隆) 瑞安·斯通 / 《火星救援》(2015, 雷德利·斯科特) 马克·沃特尼",
      referenceEn: "\"Gravity\" (2013, Alfonso Cuarón) Dr. Ryan Stone / \"The Martian\" (2015, Ridley Scott) Mark Watney"
    },
    {
      id: "banished_noble",
      name: "被流放的贵族",
      nameEn: "Banished Noble",
      def: "因宫廷斗争败落而被发配到苦寒或荒蛮之地的前朝权贵或皇族。",
      defEn: "Former nobility or royalty dispatched to bitter-cold or savage lands after court struggle defeats.",
      core: "我曾用黄金杯饮最好的葡萄酒，现在为了不冻死，得跪下喝混着沙子的羊血。过去是他的珠宝，也是他的诅咒。",
      coreEn: "I once drank finest wine from gold cups; now to survive I must kneel and drink sheep blood mixed with sand. The past is his jewel and his curse.",
      reference: "《权力的游戏》(2011, 剧集) 丹妮莉丝(早期) / 《末代皇帝》(1987, 贝纳尔多·贝托鲁奇) 溥仪",
      referenceEn: "\"Game of Thrones\" (2011, Series) Daenerys (Early) / \"The Last Emperor\" (1987, Bernardo Bertolucci) Puyi"
    },
    {
      id: "witness_protection",
      name: "证人保护对象",
      nameEn: "Witness Protection",
      def: "为躲避犯罪组织灭口而被执法机构抹去全部过去身份、安置到陌生地点的证人。",
      defEn: "Witness whose entire past identity is erased by law enforcement to evade criminal organization silencing, relocated to an unknown location.",
      core: "我以前是华尔街高管，现在在爱达荷加油站给卡车加柴油，对每个路过的黑衣人心跳骤停。名字是新的，恐惧是旧的。",
      coreEn: "I was a Wall Street exec; now I pump diesel in Idaho, cardiac-arresting at every man in black. The name is new; the fear is old.",
      reference: "《杀死比尔》(2003, 昆汀·塔伦蒂诺) 维妮塔·格林 / 《黑道家族》(1999, 剧集) 隐姓埋名线人",
      referenceEn: "\"Kill Bill\" (2003, Quentin Tarantino) Vernita Green / \"The Sopranos\" (1999, Series) Incognito Informants"
    },
    {
      id: "prodigal_son",
      name: "浪子",
      nameEn: "Prodigal Son",
      def: "年少离家出走追求自由、在一无所有或伤痕累累后试图重返故乡的归人。",
      defEn: "Returnee who ran away in youth seeking freedom, attempting to return home after losing everything or becoming scarred.",
      core: "我带着一身见不得光的刺青和掏空的身体回到门口，怕他们不认得我，更怕他们认得我。门是开着的，脚却迈不进去。",
      coreEn: "I returned to the door with shady tattoos and a hollowed body; afraid they won't recognize me, more afraid if they do. The door is open; the feet won't step in.",
      reference: "《醉乡民谣》(2013, 科恩兄弟) 勒维恩·戴维斯 / 《阿甘正传》(1994, 罗伯特·泽米吉斯) 珍妮·库兰",
      referenceEn: "\"Inside Llewyn Davis\" (2013, Coen Brothers) Llewyn Davis / \"Forrest Gump\" (1994, Robert Zemeckis) Jenny Curran"
    },
    {
      id: "dimension_hopper",
      name: "维度跳跃者",
      nameEn: "Dimension Hopper",
      def: "迷失在多元平行宇宙的滑移层中、永远在寻找'最初世界'却不可得的跨维度旅人。",
      defEn: "Cross-dimensional traveler lost in multiverse slip-layers, forever seeking 'the original world' but never finding it.",
      core: "我对故乡最深的记忆，在这个世界中总是存在某种令人反胃的微小畸变。没有任何一个是真实的。每一个宇宙都是赝品。",
      coreEn: "My deepest homeland memories always suffer some nauseating distortion in this world. None are real. Every universe is a forgery.",
      reference: "《瑞克和莫蒂》(2013, 剧集) 瑞克·桑切斯 / 《瞬息全宇宙》(2022, 关家永) 伊芙琳·王",
      referenceEn: "\"Rick and Morty\" (2013, Series) Rick Sanchez / \"Everything Everywhere All at Once\" (2022, Daniel Kwan) Evelyn Wang"
    }
  ]
};
