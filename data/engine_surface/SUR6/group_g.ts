import { LibraryCategoryDef } from '../../../types';

export const SUR6_GROUP_G: LibraryCategoryDef = {
  id: "loc_commerce_consumption",
  name: "07. 商业与消费空间 (Commerce & Consumption)",
  nameEn: "Commerce & Consumption Spaces",
  desc: "承载交易、娱乐、肉体消费和欲望展示的功能性空间。金钱在此处将一切——包括人体——转化为明码标价的商品。",
  items: [
    {
      id: "marketplace",
      name: "市场/集市",
      nameEn: "Marketplace / Bazaar",
      def: "大量摊位以密集无序或半有序方式堆挤在一个开放或半开放空间中。叫卖声、气味和色彩同时轰炸感官。价格在此不是固定的——它取决于你的表情。",
      defEn: "Numerous stalls crammed in dense, semi-ordered arrangements in an open or semi-open space. Hawking, smells, and colors simultaneously bombard all senses. Prices here aren't fixed — they depend on your expression.",
      core: "她在鱼摊前站了三秒，摊主就已经从她的眼神里读出了她今天特别想吃鱼。价格立刻涨了两块。市场是世界上最诚实的地方——它直接告诉你，欲望是要付溢价的。",
      coreEn: "She stood before the fish stall for three seconds, and the vendor already read from her eyes that she especially wanted fish today. The price went up two coins instantly. The market is the world's most honest place — it tells you outright that desire comes with a premium.",
      reference: "《银翼杀手》(1982, 雷德利·斯科特) 洛杉矶街头市场 / 《夺宝奇兵》(1981, 史蒂文·斯皮尔伯格) 开罗集市",
      referenceEn: "\"Blade Runner\" (1982, Ridley Scott) LA Street Market / \"Raiders of the Lost Ark\" (1981, Spielberg) Cairo Bazaar"
    },
    {
      id: "tavern_bar",
      name: "酒馆/酒吧",
      nameEn: "Tavern / Bar",
      def: "一个以长条形柜台为中心轴的昏暗室内空间。酒精在此处被合法地用于溶解社交面具。吧台后面的人知道所有人的秘密，因为所有人都会在第三杯之后开口。",
      defEn: "A dim interior space centered on a long bar counter. Alcohol here is legally used to dissolve social masks. The person behind the bar knows everyone's secrets, because everyone talks after the third drink.",
      core: "他在吧台坐了四个小时，对调酒师说了他对妻子从未说过的话。调酒师点了点头，把杯子擦干净——因为他今晚会听到三十个类似的故事。",
      coreEn: "He sat at the bar for four hours and told the bartender things he'd never told his wife. The bartender nodded and wiped the glass clean — because he'd hear thirty similar stories tonight.",
      reference: "《卡萨布兰卡》(1942, 迈克尔·柯蒂兹) 里克酒吧 / 《闪灵》(1980, 斯坦利·库布里克) 鬼酒吧",
      referenceEn: "\"Casablanca\" (1942, Michael Curtiz) Rick's Café / \"The Shining\" (1980, Kubrick) Ghost Bar"
    },
    {
      id: "brothel",
      name: "妓院/风月场",
      nameEn: "Brothel",
      def: "一个将人体的亲密行为转化为定价商品的封闭商业空间。房间按小时出租。入口是隐蔽的，出口是更隐蔽的。灯光是红色或粉色的，目的是让皮肤看起来更好。",
      defEn: "An enclosed commercial space converting bodily intimacy into priced commodities. Rooms rented by the hour. Entrances are discreet; exits more so. Lighting is red or pink, designed to make skin look better.",
      core: "他付了钱，得到了一个小时的温柔。时间到了的时候她站起来说谢谢——他分不清是她在感谢他还是他在感谢她。交易的残忍之处在于：两个人都是对的。",
      coreEn: "He paid and received one hour of tenderness. When time was up she stood and said thank you — he couldn't tell if she was thanking him or he her. The cruelty of the transaction: both were right.",
      reference: "《西部世界》(2016, 剧集) 甜水镇妓院 / 《艺伎回忆录》(2005, 罗伯·马歇尔) 祇园花街",
      referenceEn: "\"Westworld\" (2016, Series) Sweetwater Brothel / \"Memoirs of a Geisha\" (2005, Rob Marshall) Gion"
    },
    {
      id: "casino",
      name: "赌场",
      nameEn: "Casino",
      def: "一个没有窗户、没有时钟、用人工光线制造永恒白昼的封闭空间。机器发出规律的电子音。赢的声音被放大，输的声音被消音。建筑学唯一的设计意图是：让你忘记时间。",
      defEn: "An enclosed space with no windows, no clocks, using artificial light to create eternal daylight. Machines emit rhythmic electronic sounds. Winning sounds are amplified; losing sounds muted. Architecture's sole design intent: make you forget time.",
      core: "他赢了三手，输了十七手。但他记得的只有那三手。赌场不是在骗你——它只是精确地控制了你的记忆。",
      coreEn: "He won three hands, lost seventeen. But he only remembers the three. The casino doesn't cheat you — it just precisely controls your memory.",
      reference: "《赌城风云》(1995, 马丁·斯科塞斯) 天堂赌场 / 《皇家赌场》(2006, 马丁·坎贝尔) 高额扑克桌",
      referenceEn: "\"Casino\" (1995, Martin Scorsese) Tangiers Casino / \"Casino Royale\" (2006, Martin Campbell) High-Stakes Poker Table"
    },
    {
      id: "auction_house",
      name: "拍卖场",
      nameEn: "Auction House",
      def: "一个以拍卖师为焦点、所有买家面向同一方向的阶梯式座席空间。竞价通过最微小的手势完成。沉默就是放弃。锤子落下的声音等于宣判。",
      defEn: "A tiered seating space with the auctioneer as focal point, all buyers facing the same direction. Bidding accomplished through the slightest gestures. Silence equals surrender. The hammer's fall equals sentencing.",
      core: "她举了举手指。对面有人也举了举。拍卖师的眼球在两个方向之间弹跳——这是世界上最安静的战争：谁先停下来，谁就输了。",
      coreEn: "She raised a finger. Someone across raised one too. The auctioneer's eyes bounced between two directions — the world's quietest war: whoever stops first loses.",
      reference: "《公民凯恩》(1941, 奥森·威尔斯) 艺术品竞拍 / 《十二年为奴》(2013, 史蒂夫·麦奎因) 奴隶拍卖台",
      referenceEn: "\"Citizen Kane\" (1941, Orson Welles) Art Auction / \"12 Years a Slave\" (2013, Steve McQueen) Slave Auction Block"
    },
    {
      id: "banquet_hall",
      name: "宴会厅",
      nameEn: "Banquet Hall",
      def: "一个承载吃喝与社交表演的大型装饰性空间。食物的丰盛程度与政治暗流的浓度成正比。座位排列暗含权力拓扑。高脚杯在碰撞的时候发出的声音像骨头断裂。",
      defEn: "A large decorative space for feasting and social performance. Food abundance is directly proportional to political undercurrent intensity. Seating arrangements encode power topology. Champagne glasses clinking sound like bones snapping.",
      core: "他举杯祝酒的时候微笑着——对面的人也微笑着。两个微笑之间流动着的不是酒，是毒。宴会厅是唯一一个杀人不需要武器的空间：一句祝酒词可以毁掉一个人。",
      coreEn: "He raised his glass toasting with a smile — the person across smiled too. Between two smiles flowed not wine, but poison. The banquet hall is the only space where killing needs no weapon: one toast can destroy a person.",
      reference: "《教父》(1972, 弗朗西斯·科波拉) 婚礼宴会 / 《权力的游戏》(2011, 剧集) 红色婚礼",
      referenceEn: "\"The Godfather\" (1972, Coppola) Wedding Banquet / \"Game of Thrones\" (2011, Series) The Red Wedding"
    },
    {
      id: "stage_theater",
      name: "舞台/剧场",
      nameEn: "Stage / Theater",
      def: "一个被幕布分隔为'前台'和'后台'的双重空间。观众只能看到幕布前面被灯光照亮的部分。演员在暗处和亮处之间切换身份。掌声来自你看不见的黑暗。",
      defEn: "A dual space divided by curtain into 'front stage' and 'backstage.' Audiences see only the illuminated part in front. Actors switch identities between dark and light. Applause comes from darkness you cannot see.",
      core: "她在台上演了一个快乐的人，走到后台卸了妆，镜子里的那张脸比任何角色都更陌生。舞台的毒性在于——你演得越好，真实的自己就消失得越彻底。",
      coreEn: "She played a happy person on stage, went backstage and removed her makeup — the face in the mirror was stranger than any character. The stage's toxicity: the better you perform, the more completely the real you vanishes.",
      reference: "《黑天鹅》(2010, 达伦·阿罗诺夫斯基) 林肯中心舞台 / 《鸟人》(2014, 亚利桑德罗·冈萨雷斯) 百老汇后台",
      referenceEn: "\"Black Swan\" (2010, Darren Aronofsky) Lincoln Center Stage / \"Birdman\" (2014, Alejandro González Iñárritu) Broadway Backstage"
    },
    {
      id: "shop_counter",
      name: "柜台/店铺",
      nameEn: "Shop Counter",
      def: "一面玻璃或木质隔断将空间分为卖方和买方两个区域。商品被陈列在买方够不到的距离。想触碰必须经过卖方的许可。权力的载体是物品，而不是人。",
      defEn: "A glass or wooden partition dividing space into seller and buyer zones. Merchandise displayed beyond buyer's reach. Touching requires seller's permission. The power vehicle is the object, not the person.",
      core: "她盯着橱窗里那条裙子看了整整十分钟。售货员从里面走出来说：需要帮忙吗？——这句话的真实含义是：你买得起吗？",
      coreEn: "She stared at the dress in the window for ten full minutes. The clerk came out and said: can I help you? — The real meaning: can you afford it?",
      reference: "《穿普拉达的女王》(2006, 大卫·弗兰克尔) 时装店 / 《蒂凡尼的早餐》(1961, 布莱克·爱德华兹) 蒂凡尼橱窗",
      referenceEn: "\"The Devil Wears Prada\" (2006, David Frankel) Fashion Store / \"Breakfast at Tiffany's\" (1961, Blake Edwards) Tiffany's Window"
    },
    {
      id: "pawnshop",
      name: "当铺/典当行",
      nameEn: "Pawnshop",
      def: "一个将私人物品转化为现金的微型交易空间。柜台后面有铁栅。你把带有记忆和情感的东西放上去，对方给你几张没有记忆的纸币。赎回需要利息。",
      defEn: "A micro-transaction space converting personal possessions into cash. Iron grilles behind the counter. You place something carrying memory and emotion; they return memoryless paper bills. Redemption costs interest.",
      core: "她把结婚戒指放在柜台上。老板对着灯光看了一眼说，这个值三百。二十年的婚姻变成了三百块——她突然觉得三百块比二十年更值了。",
      coreEn: "She placed the wedding ring on the counter. The owner held it to the light and said: worth three hundred. Twenty years of marriage reduced to three hundred — she suddenly felt three hundred was worth more than twenty years.",
      reference: "《低俗小说》(1994, 昆汀·塔伦蒂诺) 典当行地下室 / 《活着》(1994, 张艺谋) 典当家产",
      referenceEn: "\"Pulp Fiction\" (1994, Tarantino) Pawnshop Basement / \"To Live\" (1994, Zhang Yimou) Pawning Family Fortune"
    },
    {
      id: "hotel_room",
      name: "旅馆房间",
      nameEn: "Hotel Room",
      def: "一个标准化的临时居住单元。床单是别人用过的。没有任何私人物品。你的身份在此被降格为一个房间号和一张信用卡。退房后清洁工会抹去你存在过的一切痕迹。",
      defEn: "A standardized temporary dwelling unit. Sheets used by others. No personal items. Your identity is reduced to a room number and a credit card. After checkout, cleaners will erase all traces of your existence.",
      core: "他把'请勿打扰'的牌子挂在门把上，然后在这个和任何城市的任何旅馆都一模一样的房间里坐了整整一天。匿名性是旅馆最昂贵的奢侈品。",
      coreEn: "He hung the 'Do Not Disturb' sign on the handle, then sat for an entire day in a room identical to any hotel in any city. Anonymity is a hotel's most expensive luxury.",
      reference: "《迷失东京》(2003, 索菲亚·科波拉) 东京柏悦酒店 / 《闪灵》(1980, 斯坦利·库布里克) 重叠酒店237号房",
      referenceEn: "\"Lost in Translation\" (2003, Sofia Coppola) Tokyo Park Hyatt / \"The Shining\" (1980, Kubrick) Overlook Room 237"
    }
  ]
};
