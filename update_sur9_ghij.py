import re

files = {
    "g": "/Users/lujiaqi/Desktop/【迷雾学派】爱欲视觉拓扑学 2-24版/data/engine_surface/SUR9/group_g.ts",
    "h": "/Users/lujiaqi/Desktop/【迷雾学派】爱欲视觉拓扑学 2-24版/data/engine_surface/SUR9/group_h.ts",
    "i": "/Users/lujiaqi/Desktop/【迷雾学派】爱欲视觉拓扑学 2-24版/data/engine_surface/SUR9/group_i.ts",
    "j": "/Users/lujiaqi/Desktop/【迷雾学派】爱欲视觉拓扑学 2-24版/data/engine_surface/SUR9/group_j.ts"
}

replacements = {
    "g": {
        "priest": [
            'reference: "《驱魔人》(1973, 威廉·弗莱德金) 戴米恩·卡拉斯神父；《招魂》(2013, 温子仁) 埃德·沃伦/主教",',
            'referenceEn: "\\"The Exorcist\\" (1973, William Friedkin) Father Damien Karras; \\"The Conjuring\\" (2013, James Wan) Ed Warren / Bishop"'
        ],
        "monk": [
            'reference: "《达芬奇密码》(2006, 朗·霍华德) 塞拉斯；《新少林寺》(2011, 陈木胜) 扫地僧",',
            'referenceEn: "\\"The Da Vinci Code\\" (2006, Ron Howard) Silas; \\"Shaolin\\" (2011, Benny Chan) Sweeping Monk"'
        ],
        "cult_leader": [
            'reference: "《仲夏夜惊魂》(2019, 阿里·艾斯特) 西芙；《双瞳》(2002, 陈国富) 谢亚理",',
            'referenceEn: "\\"Midsommar\\" (2019, Ari Aster) Siv; \\"Double Vision\\" (2002, Chen Kuo-fu) Hsieh Ya-li"'
        ],
        "exorcist": [
            'reference: "《康斯坦丁》(2005, 弗朗西斯·劳伦斯) 约翰·康斯坦丁；《邪恶力量》(2005, 系列剧) 温彻斯特兄弟",',
            'referenceEn: "\\"Constantine\\" (2005, Francis Lawrence) John Constantine; \\"Supernatural\\" (2005, Series) Winchester Brothers"'
        ],
        "medium": [
            'reference: "《潜伏》(2010, 温子仁) 伊莉斯·雷尼尔；《第六感》(1999, M·奈特·沙马兰) 科尔·西尔",',
            'referenceEn: "\\"Insidious\\" (2010, James Wan) Elise Rainier; \\"The Sixth Sense\\" (1999, M. Night Shyamalan) Cole Sear"'
        ],
        "fortune_teller": [
            'reference: "《哈利·波特与阿兹卡班的囚徒》(2004, 阿方索·卡隆) 特里劳妮教授；《西部世界》(2016, 系列剧) 塔罗牌老妇",',
            'referenceEn: "\\"Harry Potter and the Prisoner of Azkaban\\" (2004, Alfonso Cuarón) Professor Trelawney; \\"Westworld\\" (2016, Series) Tarot Woman"'
        ],
        "witch": [
            'reference: "《女巫》(2015, 罗伯特·艾格斯) 汤玛辛；《韩赛尔与格蕾特：女巫猎人》(2013, 托米·维尔科拉) 穆里尔",',
            'referenceEn: "\\"The Witch\\" (2015, Robert Eggers) Thomasin; \\"Hansel & Gretel: Witch Hunters\\" (2013, Tommy Wirkola) Muriel"'
        ],
        "shaman": [
            'reference: "《启示》(2006, 梅尔·吉布森) 大祭司；《金刚》(2005, 彼得·杰克逊) 骷髅岛祭司",',
            'referenceEn: "\\"Apocalypto\\" (2006, Mel Gibson) High Priest; \\"King Kong\\" (2005, Peter Jackson) Skull Island Shaman"'
        ],
        "crusader": [
            'reference: "《天国王朝》(2005, 雷德利·斯科特) 鲍德温四世/十字军；《战锤40K：星际战士》(2011, 游戏) 黑色圣堂",',
            'referenceEn: "\\"Kingdom of Heaven\\" (2005, Ridley Scott) Baldwin IV / Crusaders; \\"Warhammer 40,000: Space Marine\\" (2011, Game) Black Templars"'
        ],
        "inquisitor": [
            'reference: "《大审判官》(1968, 迈克尔·里夫斯) 马修·霍普金斯；《星球大战》(1977, 乔治·卢卡斯) 达斯·维达",',
            'referenceEn: "\\"Witchfinder General\\" (1968, Michael Reeves) Matthew Hopkins; \\"Star Wars\\" (1977, George Lucas) Darth Vader"'
        ],
        "funeral_director": [
            'reference: "《入殓师》(2008, 泷田洋二郎) 小林大悟；《无名女尸》(2016, 安德烈·艾弗道夫) 汤米·蒂尔登",',
            'referenceEn: "\\"Departures\\" (2008, Yojiro Takita) Daigo Kobayashi; \\"The Autopsy of Jane Doe\\" (2016, André Øvredal) Tommy Tilden"'
        ],
        "grave_keeper": [
            'reference: "《活死人之夜》(1968, 乔治·A·罗梅罗) 守墓人；《哈利·波特与火焰杯》(2005, 迈克·内威尔) 弗兰克·布莱斯",',
            'referenceEn: "\\"Night of the Living Dead\\" (1968, George A. Romero) Gravedigger; \\"Harry Potter and the Goblet of Fire\\" (2005, Mike Newell) Frank Bryce"'
        ],
        "plague_doctor": [
            'reference: "《第七封印》(1957, 英格玛·伯格曼) 死神/黑死病人群；《达芬奇星空下》(2013, 系列剧) 鸟嘴医生",',
            'referenceEn: "\\"The Seventh Seal\\" (1957, Ingmar Bergman) Death / Plague Victims; \\"Da Vinci\'s Demons\\" (2013, Series) Plague Doctor"'
        ],
        "taoist": [
            'reference: "《僵尸先生》(1985, 刘观伟) 九叔；《阴阳师》(2001, 泷田洋二郎) 安倍晴明",',
            'referenceEn: "\\"Mr. Vampire\\" (1985, Ricky Lau) Uncle Nine; \\"Onmyoji\\" (2001, Yojiro Takita) Abe no Seimei"'
        ],
        "missionary": [
            'reference: "《沉默》(2016, 马丁·斯科塞斯) 罗德里格斯神父；《食人族大屠杀》(1980, 鲁格罗·德奥达托) 传教团",',
            'referenceEn: "\\"Silence\\" (2016, Martin Scorsese) Father Rodrigues; \\"Cannibal Holocaust\\" (1980, Ruggero Deodato) Missionaries"'
        ]
    },
    "h": {
        "astronaut": [
            'reference: "《地心引力》(2013, 阿方索·卡隆) 瑞安·斯通；《星际穿越》(2014, 克里斯托弗·诺兰) 库珀",',
            'referenceEn: "\\"Gravity\\" (2013, Alfonso Cuarón) Ryan Stone; \\"Interstellar\\" (2014, Christopher Nolan) Cooper"'
        ],
        "detective_occult": [
            'reference: "《克苏鲁的呼唤》(2005, 安德鲁·莱曼) 调查员；《地狱男爵》(2004, 吉尔莫·德尔·托罗) 地狱男爵",',
            'referenceEn: "\\"The Call of Cthulhu\\" (2005, Andrew Leman) Investigator; \\"Hellboy\\" (2004, Guillermo del Toro) Hellboy"'
        ],
        "scavenger": [
            'reference: "《疯狂的麦克斯4：狂暴之路》(2015, 乔治·米勒) 废土客/战争男孩；《机器人总动员》(2008, 安德鲁·斯坦顿) 瓦力",',
            'referenceEn: "\\"Mad Max: Fury Road\\" (2015, George Miller) Scavengers / War Boys; \\"WALL-E\\" (2008, Andrew Stanton) WALL-E"'
        ],
        "explorer": [
            'reference: "《夺宝奇兵》(1981, 史蒂文·斯皮尔伯格) 印第安纳·琼斯；《安娜与国王》(1999, 安迪·坦纳特) 探险测量员",',
            'referenceEn: "\\"Raiders of the Lost Ark\\" (1981, Steven Spielberg) Indiana Jones; \\"Anna and the King\\" (1999, Andy Tennant) Surveyors"'
        ],
        "ranger": [
            'reference: "《指环王：护戒使者》(2001, 彼得·杰克逊) 阿拉贡；《猎魔人》(2019, 系列剧) 杰洛特",',
            'referenceEn: "\\"The Lord of the Rings: The Fellowship of the Ring\\" (2001, Peter Jackson) Aragorn; \\"The Witcher\\" (2019, Series) Geralt of Rivia"'
        ],
        "hacker_cypher": [
            'reference: "《黑客帝国》(1999, 沃卓斯基姐妹) 尼奥；《攻壳机动队》(1995, 押井守) 草薙素子",',
            'referenceEn: "\\"The Matrix\\" (1999, The Wachowskis) Neo; \\"Ghost in the Shell\\" (1995, Mamoru Oshii) Motoko Kusanagi"'
        ],
        "time_traveler": [
            'reference: "《回到未来》(1985, 罗伯特·泽米吉斯) 马丁·麦克弗莱；《终结者》(1984, 詹姆斯·卡梅隆) 凯尔·里斯",',
            'referenceEn: "\\"Back to the Future\\" (1985, Robert Zemeckis) Marty McFly; \\"The Terminator\\" (1984, James Cameron) Kyle Reese"'
        ],
        "postman_apoc": [
            'reference: "《邮差》(1997, 凯文·科斯特纳) 邮差；《死亡搁浅》(2019, 游戏) 萨姆·波特·布里吉斯",',
            'referenceEn: "\\"The Postman\\" (1997, Kevin Costner) The Postman; \\"Death Stranding\\" (2019, Video Game) Sam Porter Bridges"'
        ],
        "monster_hunter": [
            'reference: "《范海辛》(2004, 斯蒂芬·索莫斯) 范海辛；《怪物猎人》(2020, 保罗·安德森) 猎人",',
            'referenceEn: "\\"Van Helsing\\" (2004, Stephen Sommers) Van Helsing; \\"Monster Hunter\\" (2020, Paul W.S. Anderson) The Hunter"'
        ],
        "pirate": [
            'reference: "《加勒比海盗》(2003, 戈尔·维宾斯基) 杰克·斯派罗；《怒海争锋》(2003, 彼得·威尔) 杰克·奥布里",',
            'referenceEn: "\\"Pirates of the Caribbean\\" (2003, Gore Verbinski) Jack Sparrow; \\"Master and Commander\\" (2003, Peter Weir) Jack Aubrey"'
        ],
        "cowboy": [
            'reference: "《荒野大镖客：救赎2》(2018, 游戏) 亚瑟·摩根；《黄金三镖客》(1966, 赛尔乔·莱昂内) 无名镖客",',
            'referenceEn: "\\"Red Dead Redemption 2\\" (2018, Video Game) Arthur Morgan; \\"The Good, the Bad and the Ugly\\" (1966, Sergio Leone) The Man with No Name"'
        ],
        "hermit": [
            'reference: "《荒野生存》(2007, 西恩·潘) 克里斯托弗·麦坎德斯；《我是传奇》(2007, 弗朗西斯·劳伦斯) 罗伯特·内维尔",',
            'referenceEn: "\\"Into the Wild\\" (2007, Sean Penn) Christopher McCandless; \\"I Am Legend\\" (2007, Francis Lawrence) Robert Neville"'
        ],
        "nomad": [
            'reference: "《无依之地》(2020, 赵婷) 弗恩；《疯狂的麦克斯4：狂暴之路》(2015, 乔治·米勒) 废土游民",',
            'referenceEn: "\\"Nomadland\\" (2020, Chloé Zhao) Fern; \\"Mad Max: Fury Road\\" (2015, George Miller) Wasteland Nomads"'
        ],
        "diver": [
            'reference: "《深渊》(1989, 詹姆斯·卡梅隆) 维吉尔·布里格曼；《水形物语》(2017, 吉尔莫·德尔·托罗) 伊丽莎",',
            'referenceEn: "\\"The Abyss\\" (1989, James Cameron) Virgil Brigman; \\"The Shape of Water\\" (2017, Guillermo del Toro) Elisa Esposito"'
        ],
        "vigilante": [
            'reference: "《蝙蝠侠：黑暗骑士》(2008, 克里斯托弗·诺兰) 布鲁斯·韦恩(蝙蝠侠)；《守望者》(2009, 扎克·施奈德) 罗夏",',
            'referenceEn: "\\"The Dark Knight\\" (2008, Christopher Nolan) Bruce Wayne (Batman); \\"Watchmen\\" (2009, Zack Snyder) Rorschach"'
        ]
    },
    "i": {
        "monarch_heir": [
            'reference: "《沙丘》(2021, 丹尼斯·维伦纽瓦) 保罗·厄崔迪；《王冠》(2016, 系列剧) 伊丽莎白二世",',
            'referenceEn: "\\"Dune\\" (2021, Denis Villeneuve) Paul Atreides; \\"The Crown\\" (2016, Series) Queen Elizabeth II"'
        ],
        "fallen_aristocrat": [
            'reference: "《欲望号街车》(1951, 伊利亚·卡赞) 布兰奇·杜波依斯；《没落狂花》(1975, 阿尔伯特·梅索斯等) 埃迪母女",',
            'referenceEn: "\\"A Streetcar Named Desire\\" (1951, Elia Kazan) Blanche DuBois; \\"Grey Gardens\\" (1975, Albert Maysles) Big Edie & Little Edie"'
        ],
        "feudal_lord": [
            'reference: "《权力的游戏》(2011, 系列剧) 泰温·兰尼斯特；《勇敢的心》(1995, 梅尔·吉布森) 英格兰贵族领主",',
            'referenceEn: "\\"Game of Thrones\\" (2011, Series) Tywin Lannister; \\"Braveheart\\" (1995, Mel Gibson) English Nobles"'
        ],
        "courtier": [
            'reference: "《权力的游戏》(2011, 系列剧) 瓦里斯；《琅琊榜》(2015, 系列剧) 梅长苏",',
            'referenceEn: "\\"Game of Thrones\\" (2011, Series) Varys; \\"Nirvana in Fire\\" (2015, Series) Mei Changsu"'
        ],
        "old_money": [
            'reference: "《了不起的盖茨比》(2013, 巴兹·鲁赫曼) 汤姆·布坎南；《继承之战》(2018, 系列剧) 洛根·罗伊",',
            'referenceEn: "\\"The Great Gatsby\\" (2013, Baz Luhrmann) Tom Buchanan; \\"Succession\\" (2018, Series) Logan Roy"'
        ],
        "bastard": [
            'reference: "《权力的游戏》(2011, 系列剧) 琼恩·雪诺；《李尔王》(2018, 理查德·艾尔) 爱德蒙",',
            'referenceEn: "\\"Game of Thrones\\" (2011, Series) Jon Snow; \\"King Lear\\" (2018, Richard Eyre) Edmund"'
        ],
        "religious_leader": [
            'reference: "《教宗的继承》(2019, 费尔南多·梅里尔斯) 教宗方济各；《年轻的教宗》(2016, 保罗·索伦蒂诺) 庇护十三世",',
            'referenceEn: "\\"The Two Popes\\" (2019, Fernando Meirelles) Pope Francis; \\"The Young Pope\\" (2016, Paolo Sorrentino) Pope Pius XIII"'
        ],
        "warlord_clan": [
            'reference: "《沙丘》(2021, 丹尼斯·维伦纽瓦) 弗拉迪米尔·哈克南男爵；《疯狂的麦克斯4：狂暴之路》(2015, 乔治·米勒) 不死老乔",',
            'referenceEn: "\\"Dune\\" (2021, Denis Villeneuve) Baron Vladimir Harkonnen; \\"Mad Max: Fury Road\\" (2015, George Miller) Immortan Joe"'
        ],
        "political_dynasty": [
            'reference: "《纸牌屋》(2013, 系列剧) 弗兰克·安德伍德；《教父》(1972, 弗朗西斯·福特·科波拉) 维托·柯里昂",',
            'referenceEn: "\\"House of Cards\\" (2013, Series) Frank Underwood; \\"The Godfather\\" (1972, Francis Ford Coppola) Vito Corleone"'
        ],
        "vampire_elder": [
            'reference: "《黑夜传说》(2003, 伦·怀斯曼) 维克多；《夜访吸血鬼》(1994, 尼尔·乔丹) 阿曼德",',
            'referenceEn: "\\"Underworld\\" (2003, Len Wiseman) Viktor; \\"Interview with the Vampire\\" (1994, Neil Jordan) Armand"'
        ],
        "exiled_royal": [
            'reference: "《权力的游戏》(2011, 系列剧) 丹妮莉丝·坦格利安；《末代皇帝》(1987, 贝纳尔多·贝托鲁奇) 溥仪",',
            'referenceEn: "\\"Game of Thrones\\" (2011, Series) Daenerys Targaryen; \\"The Last Emperor\\" (1987, Bernardo Bertolucci) Puyi"'
        ],
        "secret_heir": [
            'reference: "《星球大战》(1977, 乔治·卢卡斯) 卢克·天行者；《亚瑟王：斗兽争霸》(2017, 盖·里奇) 亚瑟",',
            'referenceEn: "\\"Star Wars\\" (1977, George Lucas) Luke Skywalker; \\"King Arthur: Legend of the Sword\\" (2017, Guy Ritchie) Arthur"'
        ],
        "tribal_chief": [
            'reference: "《黑豹》(2018, 瑞恩·库格勒) 特查拉；《阿凡达》(2009, 詹姆斯·卡梅隆) 杰克·萨利",',
            'referenceEn: "\\"Black Panther\\" (2018, Ryan Coogler) T\'Challa; \\"Avatar\\" (2009, James Cameron) Jake Sully"'
        ],
        "oligarch_scion": [
            'reference: "《蝙蝠侠：侠影之谜》(2005, 克里斯托弗·诺兰) 布鲁斯·韦恩；《钢铁侠》(2008, 乔恩·费儒) 托尼·斯塔克",',
            'referenceEn: "\\"Batman Begins\\" (2005, Christopher Nolan) Bruce Wayne; \\"Iron Man\\" (2008, Jon Favreau) Tony Stark"'
        ],
        "cult_messiah": [
            'reference: "《沙丘2》(2024, 丹尼斯·维伦纽瓦) 保罗·厄崔迪；《黑客帝国》(1999, 沃卓斯基姐妹) 尼奥",',
            'referenceEn: "\\"Dune: Part Two\\" (2024, Denis Villeneuve) Paul Atreides; \\"The Matrix\\" (1999, The Wachowskis) Neo"'
        ]
    },
    "j": {
        "tech_mogul": [
            'reference: "《社交网络》(2010, 大卫·芬奇) 马克·扎克伯格；《钢铁侠》(2008, 乔恩·费儒) 托尼·斯塔克",',
            'referenceEn: "\\"The Social Network\\" (2010, David Fincher) Mark Zuckerberg; \\"Iron Man\\" (2008, Jon Favreau) Tony Stark"'
        ],
        "nouveau_riche": [
            'reference: "《了不起的盖茨比》(2013, 巴兹·鲁赫曼) 杰伊·盖茨比；《华尔街之狼》(2013, 马丁·斯科塞斯) 乔丹·贝尔福特",',
            'referenceEn: "\\"The Great Gatsby\\" (2013, Baz Luhrmann) Jay Gatsby; \\"The Wolf of Wall Street\\" (2013, Martin Scorsese) Jordan Belfort"'
        ],
        "corporate_exec": [
            'reference: "《美国精神病人》(2000, 玛丽·哈伦) 帕特里克·贝特曼；《在云端》(2009, 杰森·雷特曼) 瑞恩·宾厄姆",',
            'referenceEn: "\\"American Psycho\\" (2000, Mary Harron) Patrick Bateman; \\"Up in the Air\\" (2009, Jason Reitman) Ryan Bingham"'
        ],
        "influencer_star": [
            'reference: "《黑镜：急转直下》(2016, 乔·赖特) 蕾西·庞德；《楚门的世界》(1998, 彼得·威尔) 楚门·伯班克",',
            'referenceEn: "\\"Black Mirror: Nosedive\\" (2016, Joe Wright) Lacie Pound; \\"The Truman Show\\" (1998, Peter Weir) Truman Burbank"'
        ],
        "investor": [
            'reference: "《大空头》(2015, 亚当·麦凯) 迈克尔·伯瑞；《亿万》(2016, 系列剧) 鲍比·阿克塞尔罗德",',
            'referenceEn: "\\"The Big Short\\" (2015, Adam McKay) Michael Burry; \\"Billions\\" (2016, Series) Bobby Axelrod"'
        ],
        "celebrity_child": [
            'reference: "《闪灵》(1980, 斯坦利·库布里克) 丹尼·托伦斯；《好莱坞往事》(2019, 昆汀·塔伦蒂诺) 好莱坞星二代",',
            'referenceEn: "\\"The Shining\\" (1980, Stanley Kubrick) Danny Torrance; \\"Once Upon a Time in Hollywood\\" (2019, Quentin Tarantino) Hollywood Nepo Babies"'
        ],
        "genius_scholar": [
            'reference: "《美丽心灵》(2001, 朗·霍华德) 约翰·纳什；《奥本海默》(2023, 克里斯托弗·诺兰) 罗伯特·奥本海默",',
            'referenceEn: "\\"A Beautiful Mind\\" (2001, Ron Howard) John Nash; \\"Oppenheimer\\" (2023, Christopher Nolan) J. Robert Oppenheimer"'
        ],
        "merchant_prince": [
            'reference: "《战争之王》(2005, 安德鲁·尼科尔) 尤里·奥洛夫；《大都会》(1927, 弗里茨·朗) 乔·弗莱德森",',
            'referenceEn: "\\"Lord of War\\" (2005, Andrew Niccol) Yuri Orlov; \\"Metropolis\\" (1927, Fritz Lang) Joh Fredersen"'
        ],
        "art_patron": [
            'reference: "《夜行动物》(2016, 汤姆·福特) 苏珊·莫罗；《天鹅绒圆锯》(2019, 丹·吉尔罗伊) 艺术收藏家",',
            'referenceEn: "\\"Nocturnal Animals\\" (2016, Tom Ford) Susan Morrow; \\"Velvet Buzzsaw\\" (2019, Dan Gilroy) Art Collectors"'
        ],
        "secret_society_member": [
            'reference: "《大开眼戒》(1999, 斯坦利·库布里克) 秘密集会成员；《达芬奇密码》(2006, 朗·霍华德) 郇山隐修会长老",',
            'referenceEn: "\\"Eyes Wide Shut\\" (1999, Stanley Kubrick) Secret Society Members; \\"The Da Vinci Code\\" (2006, Ron Howard) Priory of Sion Elders"'
        ],
        "crypto_king": [
            'reference: "《硅谷》(2014, 系列剧) 创投狂徒；《华尔街之狼》(2013, 马丁·斯科塞斯) 乔丹·贝尔福特",',
            'referenceEn: "\\"Silicon Valley\\" (2014, Series) Tech Gamblers; \\"The Wolf of Wall Street\\" (2013, Martin Scorsese) Jordan Belfort"'
        ],
        "prodigy": [
            'reference: "《爆裂鼓手》(2014, 达米恩·查泽雷) 安德鲁·内曼；《后翼弃兵》(2020, 系列剧) 贝丝·哈蒙",',
            'referenceEn: "\\"Whiplash\\" (2014, Damien Chazelle) Andrew Neiman; \\"The Queen\'s Gambit\\" (2020, Series) Beth Harmon"'
        ],
        "media_mogul": [
            'reference: "《公民凯恩》(1941, 奥逊·威尔斯) 查尔斯·福斯特·凯恩；《夜行者》(2014, 丹·吉尔罗伊) 妮娜·罗米纳",',
            'referenceEn: "\\"Citizen Kane\\" (1941, Orson Welles) Charles Foster Kane; \\"Nightcrawler\\" (2014, Dan Gilroy) Nina Romina"'
        ],
        "fashion_icon": [
            'reference: "《穿普拉达的女王》(2006, 大卫·弗兰科尔) 米兰达·普雷斯丽；《黑白魔女库伊拉》(2021, 克雷格·吉勒斯佩) 库伊拉",',
            'referenceEn: "\\"The Devil Wears Prada\\" (2006, David Frankel) Miranda Priestly; \\"Cruella\\" (2021, Craig Gillespie) Cruella de Vil"'
        ],
        "explorer_wealthy": [
            'reference: "《侏罗纪公园》(1993, 史蒂文·斯皮尔伯格) 约翰·哈蒙德；《普罗米修斯》(2012, 雷德利·斯科特) 彼得·韦兰",',
            'referenceEn: "\\"Jurassic Park\\" (1993, Steven Spielberg) John Hammond; \\"Prometheus\\" (2012, Ridley Scott) Peter Weyland"'
        ]
    }
}

def update_file(filename, data):
    with open(filename, "r", encoding="utf-8") as f:
        content = f.read()

    for item_id, refs in data.items():
        pattern = r'(id:\s*"' + item_id + r'"[\s\S]*?)reference:\s*".*?",\s*referenceEn:\s*".*?"'
        
        def rep(m):
            return m.group(1) + refs[0] + '\n      ' + refs[1]

        content = re.sub(pattern, rep, content, count=1)
    
    with open(filename, "w", encoding="utf-8") as f:
        f.write(content)

for group_key, file_path in files.items():
    update_file(file_path, replacements[group_key])

print("g h i j done")
