import { LibraryCategoryDef } from '../../../types';

export const SUR9_GROUP_N: LibraryCategoryDef = {
  id: "orig_artificial",
  name: "14. 特殊与人造 (Artificial & Special)",
  nameEn: "Artificial & Special",
  desc: "非自然出生或被制造、改造的存在。克隆体、仿生人、赛博格、实验体——在人与非人的边界上震荡。",
  defEn: "Non-naturally born or manufactured/modified beings. Clones, androids, cyborgs, lab subjects — oscillating at the boundary of human and non-human.",
  items: [
    {
      id: "clone",
      name: "克隆人",
      nameEn: "Clone",
      def: "通过基因复制技术在实验室中批量生产的人类复制体。没有生物学意义上的父母。",
      defEn: "Human replicas mass-produced in laboratories via genetic cloning technology. No biological parents.",
      core: "我和他拥有完全一致的DNA，但他拥有人生，而我只有作为备用器官的保质期。编号是他的名字，过期是他的死法。",
      coreEn: "We share identical DNA, but he has a life while I have an expiration date as a spare organ. The serial number is his name; expiration his death.",
      reference: "《银翼杀手2049》(2017, 丹尼斯·维伦纽瓦) K / 《逃出克隆岛》(2005, 迈克尔·贝) 克隆人",
      referenceEn: "\"Blade Runner 2049\" (2017, Denis Villeneuve) K / \"The Island\" (2005, Michael Bay) Clones"
    },
    {
      id: "android",
      name: "仿生人",
      nameEn: "Android",
      def: "从外观到智能上无限趋近人类的机器造物。被法律界定为\"物\"而非\"人\"。",
      defEn: "Machine creation infinitely approaching human appearance and intelligence. Legally defined as 'object' rather than 'person'.",
      core: "我会流蓝色的血，我会计算名为悲伤的情绪参数。造物主，为何你不准我称自己为人？",
      coreEn: "I bleed blue blood; I can calculate emotional parameters called sorrow. Creator, why forbid me from calling myself human?",
      reference: "《异形2》(1986, 詹姆斯·卡梅隆) 主教 / 《西部世界》(2016, 剧集) 接待员",
      referenceEn: "\"Aliens\" (1986, James Cameron) Bishop / \"Westworld\" (2016, Series) Hosts"
    },
    {
      id: "cyborg",
      name: "半机械人",
      nameEn: "Cyborg",
      def: "通过机械与电子假体替换部分或大部分肉体的改造人。人与机器的混合体。",
      defEn: "Modified human replacing part or most of the flesh with mechanical and electronic prosthetics. A hybrid of human and machine.",
      core: "当我换掉最后一寸人类的脑皮层，我是终于成神，还是彻底死去？每一个零件都在问：你还是你吗？",
      coreEn: "When I replace the last inch of cerebral cortex, do I become a god, or completely die? Every part asks: are you still you?",
      reference: "《赛博朋克：边缘行者》(2022, 今石洋之) 大卫·马丁内斯 / 《机械战警》(1987, 保罗·范霍文) 墨菲",
      referenceEn: "\"Cyberpunk: Edgerunners\" (2022, Hiroyuki Imaishi) David Martinez / \"RoboCop\" (1987, Paul Verhoeven) Alex Murphy"
    },
    {
      id: "mutant_lab",
      name: "实验体",
      nameEn: "Lab Subject",
      def: "在实验室中被强行改造基因或身体结构的人类试验对象。拥有异常能力但受制于创造者。",
      defEn: "Human test subject with genes or body structure forcibly modified in laboratories. Possessing abnormal abilities but controlled by creators.",
      core: "他们给了我撕碎钢铁的力量，但只要按下那个按钮，我就会在地上痉挛求饶。力量是租来的，疼痛是买断的。",
      coreEn: "They gave me power to tear steel, but press that button and I convulse begging. Power is rented; pain is bought outright.",
      reference: "《怪奇物语》(2016, 剧集) 11号 / 《生化危机》(2002, 保罗·安德森) 舔食者",
      referenceEn: "\"Stranger Things\" (2016, Series) Eleven / \"Resident Evil\" (2002, Paul W. S. Anderson) The Licker"
    },
    {
      id: "uplifted_animal",
      name: "提升生物",
      nameEn: "Uplifted Animal",
      def: "被科技赋予接近人类智慧的动物。卡在野性与理性之间的跨物种存在。",
      defEn: "Animal granted near-human intelligence via technology. A cross-species existence trapped between wildness and rationality.",
      core: "我学会了说话，懂得了诗歌，但我只能在笼子里为你们表演算术。语言是借来的衣服，本能是脱不掉的皮肤。",
      coreEn: "I learned to speak and understood poetry, but I can only perform arithmetic in a cage. Language is borrowed clothing; instinct is skin that won't come off.",
      reference: "《猩球崛起》(2011, 鲁伯特·瓦耶特) 凯撒 / 《银河护卫队》(2014, 詹姆斯·古恩) 火箭浣熊",
      referenceEn: "\"Rise of the Planet of the Apes\" (2011, Rupert Wyatt) Caesar / \"Guardians of the Galaxy\" (2014, James Gunn) Rocket Raccoon"
    },
    {
      id: "ghost_ai",
      name: "数字幽灵",
      nameEn: "Digital Ghost",
      def: "在死亡前将意识上传至数字网络的非实体存在。失去物理身体，在代码中漂泊。",
      defEn: "Non-physical entity whose consciousness was uploaded to a digital network before death. Drifting in code without a physical body.",
      core: "我记得太阳照在皮肤上的感觉，但我现在只是一段不断报错的十六进制代码。记忆是他的幻肢。",
      coreEn: "I remember sunlight on my skin, but now I'm just hex code outputting errors. Memory is his phantom limb.",
      reference: "《黑客帝国》(1999, 沃卓斯基姐妹) 史密斯特工 / 《流浪地球2》(2023, 郭帆) 图丫丫",
      referenceEn: "\"The Matrix\" (1999, The Wachowskis) Agent Smith / \"The Wandering Earth II\" (2023, Frant Gwo) Tu Yaya"
    },
    {
      id: "homunculus",
      name: "人造人/炼金生物",
      nameEn: "Homunculus",
      def: "由术士或炼金术士通过禁忌手段在容器中制造的人工生命体。",
      defEn: "Artificial life form created by sorcerers or alchemists through taboo means in a vessel.",
      core: "被创造出来就是我的原罪，因为我永远无法证明我不是一个赝品。原版从不需要自证，赝品每一秒都在。",
      coreEn: "Being created is my original sin — I can never prove I'm not a fake. The original never needs proof; the copy does every second.",
      reference: "《钢之炼金术师》(2003, 水岛精二) 爱德华的人体炼成 / 《科学怪人》(1931, 詹姆斯·惠尔) 弗兰肯斯坦之怪物",
      referenceEn: "\"Fullmetal Alchemist\" (2003, Seiji Mizushima) Human Transmutation / \"Frankenstein\" (1931, James Whale) Frankenstein's Monster"
    },
    {
      id: "chosen_one",
      name: "天选之子",
      nameEn: "The Chosen One",
      def: "被预言、神谕或命运系统强制赋予救世或毁灭使命的特殊个体。非自愿被选中。",
      defEn: "Special individual forcibly endowed with a mission of salvation or destruction by prophecy, oracle, or fate. Chosen involuntarily.",
      core: "预言说我会拯救所有人，但谁来拯救那个被推上王座、只想过普通生活的我？王冠是戴不下来的枷锁。",
      coreEn: "Prophecy says I'll save everyone, but who saves me, forced onto the throne, just wanting normalcy? The crown is a shackle that can't be removed.",
      reference: "《哈利·波特》(2001, 克里斯·哥伦布) 哈利·波特 / 《黑客帝国》(1999, 沃卓斯基姐妹) 尼奥",
      referenceEn: "\"Harry Potter\" (2001, Chris Columbus) Harry Potter / \"The Matrix\" (1999, The Wachowskis) Neo"
    },
    {
      id: "cursed_one",
      name: "被诅咒者",
      nameEn: "Cursed One",
      def: "天生或在某次遭遇中被不可逆的诅咒、寄生体或超自然力量污染的人。注定带来灾难。",
      defEn: "Person born with or tainted by an irreversible curse, parasite, or supernatural force during an encounter. Doomed to bring disaster.",
      core: "别靠近我，我触碰到的花会枯萎，爱我的人都会流血而死。温度是他的武器，距离是他的慈悲。",
      coreEn: "Don't come near me; flowers I touch wither, those who love me bleed and die. Warmth is his weapon; distance his mercy.",
      reference: "《指环王》(2001, 彼得·杰克逊) 咕噜 / 《咒怨》(2002, 清水崇) 伽椰子",
      referenceEn: "\"The Lord of the Rings\" (2001, Peter Jackson) Gollum / \"Ju-on\" (2002, Takashi Shimizu) Kayako"
    },
    {
      id: "immortal",
      name: "永生者",
      nameEn: "The Immortal",
      def: "因先天条件、实验或超自然原因无法自然死亡的永生存在。时间在其身上停滞。",
      defEn: "Immortal being unable to die naturally due to innate conditions, experiments, or supernatural causes. Time stagnates upon them.",
      core: "我参加了所有我爱之人的葬礼，一千年后，连他们的名字都化作了乱码。永生是最慢的死法。",
      coreEn: "I attended every funeral of those I loved; a thousand years later, even their names turned to gibberish. Immortality is the slowest death.",
      reference: "《金刚狼3》(2017, 詹姆斯·曼高德) 罗根 / 《剑风传奇》(1997, 高桥直人) 骷髅骑士",
      referenceEn: "\"Logan\" (2017, James Mangold) Logan / \"Berserk\" (1997, Naohito Takahashi) Skull Knight"
    },
    {
      id: "vessel",
      name: "容器",
      nameEn: "The Vessel",
      def: "被制造或训练为承载另一个神灵、灵魂或意识的空壳人。失去自我意志。",
      defEn: "Empty-shell person manufactured or trained to host another deity, soul, or consciousness. Free will stripped.",
      core: "这具身体不过是个廉价旅馆，那位大人物随时会破门而入将我挤进黑暗的衣橱。房客比房东更有权力。",
      coreEn: "This body is a cheap hotel; the VIP will break in and shove me into the dark closet. The tenant has more power than the landlord.",
      reference: "《火影忍者》(2002, 伊达勇登) 我爱罗 / 《逃出绝命镇》(2017, 乔丹·皮尔) 下沉空间",
      referenceEn: "\"Naruto\" (2002, Hayato Date) Gaara / \"Get Out\" (2017, Jordan Peele) The Sunken Place"
    },
    {
      id: "hive_drone",
      name: "蜂巢工蜂",
      nameEn: "Hive Drone",
      def: "蜂巢思维或脑机接口集体中失去个体意识的成员。只有\"我们\"，没有\"我\"。",
      defEn: "Member of a hive mind or brain-machine interface collective who has lost individual consciousness. Only 'we', no 'I'.",
      core: "当主脑切断连接的那一秒，绝对的孤独如真空般将我挤压到内爆。集体是他的氧气，断线是他的窒息。",
      coreEn: "The second the Mainmind cuts the connection, absolute solitude crushes me into implosion. The collective is his oxygen; disconnection his suffocation.",
      reference: "《星际迷航》(1987, 剧集) 博格人 / 《星际争霸》(1998, 游戏) 异虫",
      referenceEn: "\"Star Trek: TNG\" (1987, Series) The Borg / \"StarCraft\" (1998, Game) Zerg"
    },
    {
      id: "glitch_entity",
      name: "故障体",
      nameEn: "Glitch",
      def: "由于时空错误、代码溢出或维度坍缩产生的无法被常规法则定义的异常存在。",
      defEn: "Anomalous entity spawned by spacetime errors, code overflow, or dimensional collapse — undefinable by conventional laws.",
      core: "我不该存在于这里，我的每一秒呼吸都在让这个世界的底层逻辑报错。存在本身就是一个bug。",
      coreEn: "I shouldn't exist here; every breath causes an error in this world's base logic. Existence itself is a bug.",
      reference: "《旺达幻视》(2021, 剧集) 红女巫 / 《蜘蛛侠：平行宇宙》(2018, 鲍勃·佩尔西凯蒂) 故障变体",
      referenceEn: "\"WandaVision\" (2021, Series) Scarlet Witch / \"Spider-Man: Into the Spider-Verse\" (2018) Glitch Variants"
    },
    {
      id: "reincarnated",
      name: "转生者",
      nameEn: "Reincarnated",
      def: "在婴儿或普通人躯壳内装着经历过完整前世记忆的灵魂。新的肉体，旧的意识。",
      defEn: "A soul with complete past-life memories housed in an infant or ordinary person's shell. New flesh, old consciousness.",
      core: "我这具五岁的身体哭着要吃奶，但我的脑子里还在盘算三百年前的灭门血仇。身体和灵魂永远对不上表。",
      coreEn: "My five-year-old body cries for milk while my brain plans vengeance for a 300-year-old massacre. Body and soul's clocks never sync.",
      reference: "《明日边缘》(2014, 道格·里曼) 威廉·凯奇 / 《无职转生》(2021, 冈本学) 卢迪乌斯",
      referenceEn: "\"Edge of Tomorrow\" (2014, Doug Liman) William Cage / \"Mushoku Tensei\" (2021, Manabu Okamoto) Rudeus Greyrat"
    },
    {
      id: "cyborg_native",
      name: "赛博格原生代",
      nameEn: "Cyborg Native",
      def: "从胚胎阶段就与芯片和神经网络绑定的人造人。从未体验过纯粹的碳基肉体。",
      defEn: "Artificial human bound with chips and neural networks from the embryonic stage. Never having experienced a pure carbon-based body.",
      core: "什么是'自然'？是在我的视网膜UI里关闭所有滤镜吗？出厂设置就是赛博格，他没有原版可以回滚。",
      coreEn: "What is 'nature'? Turning off all filters in my retina UI? Factory settings are cyborg — no original version to roll back to.",
      reference: "《黑客帝国》(1999, 沃卓斯基姐妹) 矩阵孵化人类 / 《银翼杀手》(1982, 雷德利·斯科特) 瑞秋",
      referenceEn: "\"The Matrix\" (1999, The Wachowskis) Matrix Pod Humans / \"Blade Runner\" (1982, Ridley Scott) Rachael"
    }
  ]
};
