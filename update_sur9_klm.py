import re

files = {
    "k": "/Users/lujiaqi/Desktop/【迷雾学派】爱欲视觉拓扑学 2-24版/data/engine_surface/SUR9/group_k.ts",
    "l": "/Users/lujiaqi/Desktop/【迷雾学派】爱欲视觉拓扑学 2-24版/data/engine_surface/SUR9/group_l.ts",
    "m": "/Users/lujiaqi/Desktop/【迷雾学派】爱欲视觉拓扑学 2-24版/data/engine_surface/SUR9/group_m.ts"
}

replacements = {
    "k": {
        "suburban_family": [
            'reference: "《美国丽人》(1999, 萨姆·门德斯) 莱斯特·伯恩汉姆；《绝望主妇》(2004, 系列剧) 紫藤社区主妇",',
            'referenceEn: "\\"American Beauty\\" (1999, Sam Mendes) Lester Burnham; \\"Desperate Housewives\\" (2004, Series) Wisteria Lane Housewives"'
        ],
        "civil_servant": [
            'reference: "《审判》(1962, 奥逊·威尔斯) K；《切尔诺贝利》(2019, 系列剧) 底层官僚",',
            'referenceEn: "\\"The Trial\\" (1962, Orson Welles) Josef K.; \\"Chernobyl\\" (2019, Series) Low-level Bureaucrats"'
        ],
        "small_business": [
            'reference: "《寄生虫》(2019, 奉俊昊) 金基泽；《肖申克的救赎》(1994, 弗兰克·德拉邦特) 布鲁克斯·哈特伦",',
            'referenceEn: "\\"Parasite\\" (2019, Bong Joon Ho) Kim Ki-taek; \\"The Shawshank Redemption\\" (1994, Frank Darabont) Brooks Hatlen"'
        ],
        "salaryman": [
            'reference: "《搏击俱乐部》(1999, 大卫·芬奇) 杰克(叙述者)；《未麻的房间》(1997, 今敏) 通勤丧尸",',
            'referenceEn: "\\"Fight Club\\" (1999, David Fincher) The Narrator (Jack); \\"Perfect Blue\\" (1997, Satoshi Kon) Commuter Zombies"'
        ],
        "academic": [
            'reference: "《爆裂鼓手》(2014, 达米恩·查泽雷) 泰伦斯·弗莱彻；《死亡诗社》(1989, 彼得·威尔) 约翰·基汀",',
            'referenceEn: "\\"Whiplash\\" (2014, Damien Chazelle) Terence Fletcher; \\"Dead Poets Society\\" (1989, Peter Weir) John Keating"'
        ],
        "doctor_lawyer": [
            'reference: "《风骚律师》(2015, 系列剧) 索尔·古德曼；《良医》(2017, 系列剧) 肖恩·墨菲",',
            'referenceEn: "\\"Better Call Saul\\" (2015, Series) Saul Goodman; \\"The Good Doctor\\" (2017, Series) Shaun Murphy"'
        ],
        "housewife": [
            'reference: "《时时刻刻》(2002, 史蒂芬·戴德利) 劳拉·布朗；《消失的爱人》(2014, 大卫·芬奇) 艾米·邓恩",',
            'referenceEn: "\\"The Hours\\" (2002, Stephen Daldry) Laura Brown; \\"Gone Girl\\" (2014, David Fincher) Amy Dunne"'
        ],
        "student": [
            'reference: "《大象》(2003, 格斯·范·桑特) 校园受害者；《死亡诗社》(1989, 彼得·威尔) 尼尔·佩里",',
            'referenceEn: "\\"Elephant\\" (2003, Gus Van Sant) High School Victims; \\"Dead Poets Society\\" (1989, Peter Weir) Neil Perry"'
        ],
        "artist_struggling": [
            'reference: "《梵高传》(1956, 文森特·明奈利) 文森特·梵高；《黑天鹅》(2010, 达伦·阿伦诺夫斯基) 妮娜",',
            'referenceEn: "\\"Lust for Life\\" (1956, Vincente Minnelli) Vincent van Gogh; \\"Black Swan\\" (2010, Darren Aronofsky) Nina Sayers"'
        ],
        "journalist": [
            'reference: "《夜行者》(2014, 丹·吉尔罗伊) 路易斯·布鲁姆；《聚焦》(2015, 汤姆·麦卡锡) 聚焦小组成员",',
            'referenceEn: "\\"Nightcrawler\\" (2014, Dan Gilroy) Louis Bloom; \\"Spotlight\\" (2015, Tom McCarthy) Spotlight Team Members"'
        ],
        "start_up_founder": [
            'reference: "《硅谷》(2014, 系列剧) 理查德·亨德里克斯及团队；《滴血成金》(2022, 系列剧) 伊丽莎白·霍姆斯",',
            'referenceEn: "\\"Silicon Valley\\" (2014, Series) Richard Hendricks and Team; \\"The Dropout\\" (2022, Series) Elizabeth Holmes"'
        ],
        "middle_manager": [
            'reference: "《华尔街之狼》(2013, 马丁·斯科塞斯) 华尔街中层管理；《人生切割术》(2022, 系列剧) 切割员工",',
            'referenceEn: "\\"The Wolf of Wall Street\\" (2013, Martin Scorsese) Wall Street Mid-level Managers; \\"Severance\\" (2022, Series) Severed Employees"'
        ],
        "social_worker": [
            'reference: "《小丑》(2019, 托德·菲利普斯) 黛布拉·凯恩；《我是布莱克》(2016, 肯·洛奇) 丹尼尔·布莱克",',
            'referenceEn: "\\"Joker\\" (2019, Todd Phillips) Debra Kane (Social Worker); \\"I, Daniel Blake\\" (2016, Ken Loach) Daniel Blake"'
        ],
        "nurse": [
            'reference: "《飞越疯人院》(1975, 米洛斯·福尔曼) 瑞秋护士长；《寂静岭》(2006, 克里斯多夫·甘斯) 无面白衣护士",',
            'referenceEn: "\\"One Flew Over the Cuckoo\'s Nest\\" (1975, Miloš Forman) Nurse Ratched; \\"Silent Hill\\" (2006, Christophe Gans) Dark Nurse"'
        ],
        "coach": [
            'reference: "《爆裂鼓手》(2014, 达米恩·查泽雷) 泰伦斯·弗莱彻；《摔跤吧！爸爸》(2016, 尼特什·提瓦里) 马哈维亚",',
            'referenceEn: "\\"Whiplash\\" (2014, Damien Chazelle) Terence Fletcher; \\"Dangal\\" (2016, Nitesh Tiwari) Mahavir Singh Phogat"'
        ]
    },
    "l": {
        "factory_hand": [
            'reference: "《摩登时代》(1936, 查理·卓别林) 查理；《现代启示录》(1979, 弗朗西斯·福特·科波拉) 兵工厂劳工",',
            'referenceEn: "\\"Modern Times\\" (1936, Charlie Chaplin) The Tramp; \\"Apocalypse Now\\" (1979, Francis Ford Coppola) Armory Laborers"'
        ],
        "farmer_peasant": [
            'reference: "《一九四二》(2012, 冯小刚) 饥荒灾民；《星际穿越》(2014, 克里斯托弗·诺兰) 库珀",',
            'referenceEn: "\\"Back to 1942\\" (2012, Feng Xiaogang) Famine Victims; \\"Interstellar\\" (2014, Christopher Nolan) Cooper"'
        ],
        "miner_deep": [
            'reference: "《盲井》(2003, 李杨) 井下矿工；《切尔诺贝利》(2019, 系列剧) 图拉矿工",',
            'referenceEn: "\\"Blind Shaft\\" (2003, Li Yang) Underground Miners; \\"Chernobyl\\" (2019, Series) Tula Miners"'
        ],
        "service_staff": [
            'reference: "《寄生虫》(2019, 奉俊昊) 菊光/女佣；《菜单》(2022, 马克·米罗) 餐厅服务生",',
            'referenceEn: "\\"Parasite\\" (2019, Bong Joon Ho) Gook-moon / Maid; \\"The Menu\\" (2022, Mark Mylod) Restaurant Waiters"'
        ],
        "driver": [
            'reference: "《疯狂的麦克斯4：狂暴之路》(2015, 乔治·米勒) 芙莉欧莎；《出租车司机》(1976, 马丁·斯科塞斯) 特拉维斯·比克尔",',
            'referenceEn: "\\"Mad Max: Fury Road\\" (2015, George Miller) Furiosa; \\"Taxi Driver\\" (1976, Martin Scorsese) Travis Bickle"'
        ],
        "migrant_worker": [
            'reference: "《天注定》(2013, 贾樟柯) 大海/民工；《南方车站的聚会》(2019, 刁亦男) 周泽农",',
            'referenceEn: "\\"A Touch of Sin\\" (2013, Jia Zhangke) Dahai / Migrant Workers; \\"The Wild Goose Lake\\" (2019, Diao Yinan) Zhou Zenong"'
        ],
        "street_vendor": [
            'reference: "《银翼杀手》(1982, 雷德利·斯科特) 大排档摊主；《无人区》(2013, 宁浩) 戈壁小贩",',
            'referenceEn: "\\"Blade Runner\\" (1982, Ridley Scott) Food Stall Owner; \\"No Man\'s Land\\" (2013, Ning Hao) Desert Vendor"'
        ],
        "cleaner_janitor": [
            'reference: "《水形物语》(2017, 吉尔莫·德尔·托罗) 伊丽莎；《闪灵》(1980, 斯坦利·库布里克) 迪克·哈洛兰",',
            'referenceEn: "\\"The Shape of Water\\" (2017, Guillermo del Toro) Elisa Esposito; \\"The Shining\\" (1980, Stanley Kubrick) Dick Hallorann"'
        ],
        "sex_worker_street": [
            'reference: "《悲惨世界》(2012, 汤姆·霍珀) 芳汀；《罪恶之城》(2005, 罗伯特·罗德里格兹等) 老城妓女",',
            'referenceEn: "\\"Les Misérables\\" (2012, Tom Hooper) Fantine; \\"Sin City\\" (2005, Robert Rodriguez & Frank Miller) Old Town Prostitutes"'
        ],
        "soldier_grunt": [
            'reference: "《拯救大兵瑞恩》(1998, 史蒂文·斯皮尔伯格) 抢滩登陆大兵；《全金属外壳》(1987, 斯坦利·库布里克) 傻瓜派",',
            'referenceEn: "\\"Saving Private Ryan\\" (1998, Steven Spielberg) Omaha Beach Grunts; \\"Full Metal Jacket\\" (1987, Stanley Kubrick) Private Pyle"'
        ],
        "fisher_folk": [
            'reference: "《老人与海》(1958, 约翰·斯特奇斯) 圣地亚哥(老人)；《海王》(2018, 温子仁) 海沟族渔民",',
            'referenceEn: "\\"The Old Man and the Sea\\" (1958, John Sturges) Santiago; \\"Aquaman\\" (2018, James Wan) The Trench Fishers"'
        ],
        "lumberjack": [
            'reference: "《血钻》(2006, 爱德华·兹维克) 钻石矿工/苦工；《荒野猎人》(2015, 亚利桑德罗·冈萨雷斯·伊纳里图) 休·格拉斯",',
            'referenceEn: "\\"Blood Diamond\\" (2006, Edward Zwick) Diamond Miners; \\"The Revenant\\" (2015, Alejandro G. Iñárritu) Hugh Glass"'
        ],
        "docker": [
            'reference: "《码头风云》(1954, 伊利亚·卡赞) 特里·马洛伊；《海边的曼彻斯特》(2016, 肯尼斯·罗纳根) 李·钱德勒",',
            'referenceEn: "\\"On the Waterfront\\" (1954, Elia Kazan) Terry Malloy; \\"Manchester by the Sea\\" (2016, Kenneth Lonergan) Lee Chandler"'
        ],
        "maid_servant": [
            'reference: "《罗马》(2018, 阿方索·卡隆) 克莱奥；《唐顿庄园》(2010, 系列剧) 庄园仆人",',
            'referenceEn: "\\"Roma\\" (2018, Alfonso Cuarón) Cleo; \\"Downton Abbey\\" (2010, Series) Estate Servants"'
        ],
        "apprentice": [
            'reference: "《霸王别姬》(1993, 陈凯歌) 小豆子/程蝶衣；《千与千寻》(2001, 宫崎骏) 千寻",',
            'referenceEn: "\\"Farewell My Concubine\\" (1993, Chen Kaige) Xiaodouzi / Cheng Dieyi; \\"Spirited Away\\" (2001, Hayao Miyazaki) Chihiro"'
        ]
    },
    "m": {
        "homeless": [
            'reference: "《当幸福来敲门》(2006, 加布里埃尔·穆奇诺) 克里斯·加德纳；《小丑》(2019, 托德·菲利普斯) 亚瑟·弗兰克",',
            'referenceEn: "\\"The Pursuit of Happyness\\" (2006, Gabriele Muccino) Chris Gardner; \\"Joker\\" (2019, Todd Phillips) Arthur Fleck"'
        ],
        "refugee": [
            'reference: "《人类之子》(2006, 阿方索·卡隆) 难民；《迦百农》(2018, 娜丁·拉巴基) 赞恩",',
            'referenceEn: "\\"Children of Men\\" (2006, Alfonso Cuarón) Refugees; \\"Capernaum\\" (2018, Nadine Labaki) Zain"'
        ],
        "untouchable": [
            'reference: "《白虎》(2021, 拉敏·巴哈尼) 巴尔朗·哈尔维；《贫民窟的百万富翁》(2008, 丹尼·博伊尔) 贾马尔·马利克",',
            'referenceEn: "\\"The White Tiger\\" (2021, Ramin Bahrani) Balram Halwai; \\"Slumdog Millionaire\\" (2008, Danny Boyle) Jamal Malik"'
        ],
        "hermit_exile": [
            'reference: "《荒野生存》(2007, 西恩·潘) 克里斯托弗·麦坎德斯；《在这个世界的角落》(2016, 片渊须直) 北条铃",',
            'referenceEn: "\\"Into the Wild\\" (2007, Sean Penn) Christopher McCandless; \\"In This Corner of the World\\" (2016, Sunao Katabuchi) Suzu Hojo"'
        ],
        "cult_member": [
            'reference: "《仲夏夜惊魂》(2019, 阿里·艾斯特) 哈加教徒；《双瞳》(2002, 陈国富) 真仙观信徒",',
            'referenceEn: "\\"Midsommar\\" (2019, Ari Aster) Hårga Cultists; \\"Double Vision\\" (2002, Chen Kuo-fu) True Immortal Temple Believers"'
        ],
        "leper": [
            'reference: "《天国王朝》(2005, 雷德利·斯科特) 鲍德温四世；《地狱男爵》(2004, 吉尔莫·德尔·托罗) 地狱男爵",',
            'referenceEn: "\\"Kingdom of Heaven\\" (2005, Ridley Scott) Baldwin IV; \\"Hellboy\\" (2004, Guillermo del Toro) Hellboy"'
        ],
        "madman_prophet": [
            'reference: "《十二猴子》(1995, 特瑞·吉列姆) 杰弗里·戈因斯；《守望者》(2009, 扎克·施奈德) 罗夏",',
            'referenceEn: "\\"12 Monkeys\\" (1995, Terry Gilliam) Jeffrey Goines; \\"Watchmen\\" (2009, Zack Snyder) Rorschach"'
        ],
        "orphan_street": [
            'reference: "《雾都孤儿》(2005, 罗曼·波兰斯基) 奥利弗·退斯特；《阿基拉》(1988, 大友克洋) 铁雄",',
            'referenceEn: "\\"Oliver Twist\\" (2005, Roman Polanski) Oliver Twist; \\"Akira\\" (1988, Katsuhiro Otomo) Tetsuo Shima"'
        ],
        "scavenger_waste": [
            'reference: "《银翼杀手2049》(2017, 丹尼斯·维伦纽瓦) 垃圾场拾荒小孩；《第九区》(2009, 尼尔·布洛姆坎普) 大虾外星人",',
            'referenceEn: "\\"Blade Runner 2049\\" (2017, Denis Villeneuve) Trash Mesa Scavenger Kids; \\"District 9\\" (2009, Neill Blomkamp) Prawn Aliens"'
        ],
        "nomad_gypsy": [
            'reference: "《无依之地》(2020, 赵婷) 弗恩；《疯狂的麦克斯4：狂暴之路》(2015, 乔治·米勒) 废土游民",',
            'referenceEn: "\\"Nomadland\\" (2020, Chloé Zhao) Fern; \\"Mad Max: Fury Road\\" (2015, George Miller) Wasteland Nomads"'
        ],
        "escaped_convict": [
            'reference: "《肖申克的救赎》(1994, 弗兰克·德拉邦特) 安迪·杜佛兰；《末路狂花》(1991, 雷德利·斯科特) 塞尔玛与路易斯",',
            'referenceEn: "\\"The Shawshank Redemption\\" (1994, Frank Darabont) Andy Dufresne; \\"Thelma & Louise\\" (1991, Ridley Scott) Thelma & Louise"'
        ],
        "disgraced_hero": [
            'reference: "《蝙蝠侠：黑暗骑士》(2008, 克里斯托弗·诺兰) 蝙蝠侠；《黑袍纠察队》(2019, 系列剧) 护国超人",',
            'referenceEn: "\\"The Dark Knight\\" (2008, Christopher Nolan) Batman; \\"The Boys\\" (2019, Series) Homelander"'
        ],
        "digital_ghost": [
            'reference: "《攻壳机动队》(1995, 押井守) 草薙素子；《超验骇客》(2014, 沃利·菲斯特) 威尔·卡斯特",',
            'referenceEn: "\\"Ghost in the Shell\\" (1995, Mamoru Oshii) Motoko Kusanagi; \\"Transcendence\\" (2014, Wally Pfister) Will Caster"'
        ],
        "mutant_outcast": [
            'reference: "《X战警》(2000, 布莱恩·辛格) 小淘气(罗刹女)；《毒液》(2018, 鲁本·弗雷斯彻) 毒液/埃迪·布洛克",',
            'referenceEn: "\\"X-Men\\" (2000, Bryan Singer) Rogue; \\"Venom\\" (2018, Ruben Fleischer) Venom / Eddie Brock"'
        ],
        "feral_child": [
            'reference: "《幽灵公主》(1997, 宫崎骏) 桑(幽灵公主)；《野孩子》(1970, 弗朗索瓦·特吕弗) 维克多",',
            'referenceEn: "\\"Princess Mononoke\\" (1997, Hayao Miyazaki) San; \\"The Wild Child\\" (1970, François Truffaut) Victor of Aveyron"'
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

print("k l m done")
