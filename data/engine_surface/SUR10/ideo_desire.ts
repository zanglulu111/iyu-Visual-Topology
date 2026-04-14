import { LibraryCategoryDef } from '../../../types';

export const IDEO_DESIRE: LibraryCategoryDef = {
  id: "ideo_desire",
  name: "1. 欲望与消费 (Desire & Consumption)",
  nameEn: "Desire & Consumption",
  desc: "关于快乐、物质与注意力的信仰体系。用于定义主角如何看待欲望满足和商品/符号消费。",
  defEn: "Belief systems about pleasure, materiality, and attention. Defines how the protagonist views desire fulfillment and commodity/symbol consumption.",
  items: [
    {
      id: "consumerism",
      name: "消费主义",
      nameEn: "Consumerism",
      def: "通过购买商品来构建自我身份的信念体系。物品具有图腾般的魔力，购物行为等同于存在确认。",
      defEn: "Belief system constructing self-identity through purchasing goods. Objects possess totemic magic; shopping equals existential confirmation.",
      core: "他用宜家家具塞满了整间公寓，但每一件商品都像一块砖头，砌的不是家，是一座没有窗户的坟墓。",
      coreEn: "He stuffed the apartment with IKEA furniture, but each item was a brick — not building a home, but a tomb without windows.",
      reference: "《搏击俱乐部》(1999, 大卫·芬奇) 叙述者 / 《美国精神病人》(2000, 玛丽·哈伦) 帕特里克·贝特曼",
      referenceEn: "\"Fight Club\" (1999, David Fincher) The Narrator / \"American Psycho\" (2000, Mary Harron) Patrick Bateman"
    },
    {
      id: "hedonism",
      name: "享乐主义",
      nameEn: "Hedonism",
      def: "将多巴胺的持续供给视为人生唯一目的的信念。避苦求乐是最高伦理，身体是用来透支的快感载具。",
      defEn: "Belief treating continuous dopamine supply as life's sole purpose. Avoiding pain and seeking pleasure is the highest ethic; the body is a pleasure vehicle to overdraft.",
      core: "他把快乐的阈值拉到了针头才能触到的高度——最后一针扎下去的时候，他甚至感觉不到快乐了，只剩下针。",
      coreEn: "He raised the pleasure threshold to a height only needles could reach — when the last needle went in, he couldn't even feel pleasure, only the needle.",
      reference: "《华尔街之狼》(2013, 马丁·斯科塞斯) 乔丹·贝尔福特 / 《堕落街》(1981, 乌利·埃德尔) 克里斯蒂安娜",
      referenceEn: "\"The Wolf of Wall Street\" (2013, Martin Scorsese) Jordan Belfort / \"Christiane F.\" (1981, Uli Edel) Christiane"
    },
    {
      id: "attention_worship",
      name: "流量拜物教",
      nameEn: "Attention Fetishism",
      def: "将社交媒体数据（点赞、关注、转发）视为衡量个体存在价值唯一标准的信念。生活是一场不间断的表演。",
      defEn: "Belief treating social media metrics (likes, follows, shares) as the sole measure of individual existence. Life is a non-stop performance.",
      core: "她在镜头前是一百万人的女神，镜头关闭的那一秒她是零。掉粉和心跳骤停之间，她分不清哪个更致命。",
      coreEn: "In front of the camera she's a goddess to a million; the second it's off, she's zero. Between losing followers and cardiac arrest, she can't tell which is deadlier.",
      reference: "《黑镜：急转直下》(2016, 剧集) 蕾西·庞德 / 《楚门的世界》(1998, 彼得·威尔) 楚门·伯班克",
      referenceEn: "\"Black Mirror: Nosedive\" (2016, Series) Lacie Pound / \"The Truman Show\" (1998, Peter Weir) Truman Burbank"
    },
    {
      id: "libertarianism_radical",
      name: "极端自由意志",
      nameEn: "Radical Libertarianism",
      def: "将私有财产神圣化、拒斥一切集体约束的极端个人自由信条。税收即抢劫，政府即暴政，金钱万能。",
      defEn: "Extreme personal liberty creed sacralizing private property and rejecting all collective constraints. Taxation is theft; government is tyranny; money is omnipotent.",
      core: "他在自己的海底城堡里建起了没有法律的天堂——天堂的地基是建在所有被碾碎的失败者骨灰上的。",
      coreEn: "He built a lawless paradise in his undersea castle — its foundation was built on the ashes of all the crushed losers.",
      reference: "《生化奇兵》(2007, 游戏) 安德鲁·莱恩/极渊城 / 《疯狂的麦克斯4》(2015, 乔治·米勒) 废土资源私有者",
      referenceEn: "\"BioShock\" (2007, Game) Andrew Ryan / Rapture / \"Mad Max: Fury Road\" (2015, George Miller) Wasteland Resource Owners"
    },
    {
      id: "commodity_fetishism",
      name: "商品拜物教",
      nameEn: "Commodity Fetishism",
      def: "相信特定物品具有超越其物理属性的神圣力量，通过占有特定物品来补全自我人格的信念。",
      defEn: "Belief that specific objects possess sacred power beyond their physical properties; completing self-identity through possessing specific items.",
      core: "他把一枚金戒指叫做'宝贝'，把真正爱他的人叫做'障碍'。最后他和戒指一起坠入了岩浆，拥抱着唯一的真爱。",
      coreEn: "He called the gold ring 'precious' and the person who truly loved him 'obstacle.' He fell into the lava with the ring, embracing his only true love.",
      reference: "《指环王》(2001, 彼得·杰克逊) 咕噜/魔戒 / 《公民凯恩》(1941, 奥森·威尔斯) 玫瑰花蕾雪橇",
      referenceEn: "\"The Lord of the Rings\" (2001, Peter Jackson) Gollum / The One Ring / \"Citizen Kane\" (1941, Orson Welles) Rosebud Sled"
    },
    {
      id: "aestheticism",
      name: "唯美主义",
      nameEn: "Aestheticism",
      def: "将美视为高于道德与生命的唯一绝对价值的信念。为了艺术而艺术，生命本身不过是创作的耗材。",
      defEn: "Belief holding beauty as the sole absolute value above morality and life. Art for art's sake; life itself is mere consumable for creation.",
      core: "他用十三个少女的体温蒸馏出了世界上最极致的香水——瓶子打开的那一刻，所有人为之疯狂，包括他自己。",
      coreEn: "He distilled the ultimate perfume from thirteen girls' body heat — the moment the bottle opened, everyone went mad, including himself.",
      reference: "《香水》(2006, 汤姆·提克威尔) 格雷诺耶 / 《霓虹恶魔》(2016, 尼古拉斯·温丁·雷弗恩) 洛杉矶模特圈",
      referenceEn: "\"Perfume\" (2006, Tom Tykwer) Grenouille / \"The Neon Demon\" (2016, Nicolas Winding Refn) LA Model Scene"
    },
    {
      id: "carnivalism",
      name: "狂欢主义",
      nameEn: "Carnivalism",
      def: "通过集体性的等级颠覆、面具化混乱与仪式性僭越来获得短暂精神释放的巴赫金式信念。",
      defEn: "Bakhtinian belief achieving brief spiritual release through collective hierarchy-subversion, masked chaos, and ritual transgression.",
      core: "一年中只有这一天可以戴上面具杀人不犯法——但面具摘下来之后，杀意并没有跟着摘下来。",
      coreEn: "Only this one day a year you can wear a mask and kill legally — but when the mask comes off, the killing intent stays on.",
      reference: "《人类清除计划》(2013, 詹姆斯·德莫纳科) 清洗之夜 / 《小丑》(2019, 托德·菲利普斯) 高谭暴乱",
      referenceEn: "\"The Purge\" (2013, James DeMonaco) Purge Night / \"Joker\" (2019, Todd Phillips) Gotham Riots"
    },
    {
      id: "minimalism_cult",
      name: "极简邪教",
      nameEn: "Cult of Minimalism",
      def: "将'少即是多'推向极端的偏执信念。通过不断丢弃物品与人际关系，将'空无'本身神圣化。",
      defEn: "Obsessive belief pushing 'less is more' to extremes. Sanctifying 'emptiness' itself by continuously discarding possessions and relationships.",
      core: "他扔掉了家具、书籍、朋友、回忆——最后房间里只剩一面白墙和他自己。然后他开始想扔掉自己。",
      coreEn: "He threw away furniture, books, friends, memories — until only a white wall and himself remained. Then he wanted to throw away himself.",
      reference: "《极简主义》(2015, 纪录片) 极简生活者 / 《2001太空漫游》(1968, 斯坦利·库布里克) 空白房间",
      referenceEn: "\"Minimalism\" (2015, Documentary) Minimalists / \"2001\" (1968, Stanley Kubrick) The White Room"
    },
    {
      id: "dataism",
      name: "数据主义",
      nameEn: "Dataism",
      def: "相信万物本质皆为可计算的数据流的信念体系。数据处理是宇宙最高价值，碳基生命不过是算法的临时载体。",
      defEn: "Belief system that all things are essentially computable data streams. Data processing is the universe's highest value; carbon life is merely a temporary algorithm carrier.",
      core: "他用算法计算出了最优的人生路径——算法里没有'爱'这个变量，因为它不可量化。所以他按照算法删除了她。",
      coreEn: "He calculated the optimal life path with algorithms — 'love' wasn't a variable because it's unquantifiable. So he deleted her per the algorithm.",
      reference: "《黑客帝国》(1999, 沃卓斯基姐妹) 矩阵架构师 / 《西部世界》(2016, 剧集) 德洛斯公司数据采集",
      referenceEn: "\"The Matrix\" (1999, The Wachowskis) The Architect / \"Westworld\" (2016, Series) Delos Data Harvesting"
    },
    {
      id: "accelerationism_desire",
      name: "欲望加速主义",
      nameEn: "Libidinal Accelerationism",
      def: "认为与其抵抗资本主义的异化，不如将一切欲望阈值推向极限，通过加速使系统过载崩溃或飞升的信念。",
      defEn: "Belief that instead of resisting capitalism's alienation, all desire thresholds should be pushed to extremes, crashing or transcending the system through acceleration.",
      core: "他往脑子里塞了第七块芯片，神经系统开始闪烁——他分不清是灵魂在升级，还是硬件在报废。超频是他的祈祷，蓝屏是他的安魂曲。",
      coreEn: "He jammed the seventh chip into his brain and his nerves flickered — he couldn't tell if his soul was upgrading or his hardware crashing. Overclocking is his prayer; blue screen his requiem.",
      reference: "《赛博朋克：边缘行者》(2022, 今石洋之) 大卫·马丁内斯 / 《裸体午餐》(1991, 大卫·柯南伯格) 比尔·李",
      referenceEn: "\"Cyberpunk: Edgerunners\" (2022, Hiroyuki Imaishi) David Martinez / \"Naked Lunch\" (1991, David Cronenberg) Bill Lee"
    },
    {
      id: "gamification",
      name: "游戏化生存",
      nameEn: "Gamification",
      def: "将人生视为可量化的游戏系统的信念。生命体征和人际关系被转化为经验值与成就徽章，追求正反馈循环。",
      defEn: "Belief viewing life as a quantifiable game system. Vitals and relationships converted to XP and badges, pursuing positive feedback loops.",
      core: "他在屏幕上看着自己的血量条一格一格地掉——直到他意识到，这不是游戏界面，是ICU的心电监护仪。",
      coreEn: "He watched his HP bar drop grid by grid on screen — until he realized it wasn't a game HUD, but the ICU heart monitor.",
      reference: "《头号玩家》(2018, 史蒂文·斯皮尔伯格) 绿洲玩家 / 《黑镜：一千五百万的价值》(2011, 剧集) 踩单车者",
      referenceEn: "\"Ready Player One\" (2018, Steven Spielberg) OASIS Players / \"Black Mirror: 15 Million Merits\" (2011, Series) Bike Riders"
    },
    {
      id: "epicureanism",
      name: "伊壁鸠鲁主义",
      nameEn: "Epicureanism",
      def: "通过理性节制欲望、避免痛苦来追求灵魂宁静（ataraxia）的古典哲学信念。退隐花园，规避世俗纷争。",
      defEn: "Classical philosophy seeking soul tranquility (ataraxia) through rational moderation of desires and avoidance of pain. Retreating to the garden, evading worldly strife.",
      core: "他在森林里的小木屋中找到了完美的平静——直到一场山火烧上来，他发现平静不是一种选择，是一种逃跑。",
      coreEn: "He found perfect peace in a forest cabin — until a wildfire came, and he discovered peace wasn't a choice but an escape.",
      reference: "《瓦尔登湖》(文学) 梭罗 / 《死亡诗社》(1989, 彼得·威尔) 基廷老师",
      referenceEn: "\"Walden\" (Literature) Thoreau / \"Dead Poets Society\" (1989, Peter Weir) Mr. Keating"
    }
  ]
};
