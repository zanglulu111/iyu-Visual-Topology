import re

files = {
    "c": "/Users/lujiaqi/Desktop/【迷雾学派】爱欲视觉拓扑学 2-24版/data/engine_surface/SUR9/group_c.ts",
    "d": "/Users/lujiaqi/Desktop/【迷雾学派】爱欲视觉拓扑学 2-24版/data/engine_surface/SUR9/group_d.ts",
    "e": "/Users/lujiaqi/Desktop/【迷雾学派】爱欲视觉拓扑学 2-24版/data/engine_surface/SUR9/group_e.ts",
    "f": "/Users/lujiaqi/Desktop/【迷雾学派】爱欲视觉拓扑学 2-24版/data/engine_surface/SUR9/group_f.ts"
}

replacements = {
    "c": {
        "scientist_mad": [
            'reference: "《弗兰肯斯坦》(1931, 詹姆斯·惠尔) 亨利·弗兰肯斯坦；《回到未来》(1985, 罗伯特·泽米吉斯) 布朗博士",',
            'referenceEn: "\\"Frankenstein\\" (1931, James Whale) Henry Frankenstein; \\"Back to the Future\\" (1985, Robert Zemeckis) Doc Brown"'
        ],
        "surgeon": [
            'reference: "《奇异博士》(2016, 斯科特·德瑞克森) 史蒂芬·斯特兰奇；《沉默的羔羊》(1991, 乔纳森·戴米) 汉尼拔·莱克特",',
            'referenceEn: "\\"Doctor Strange\\" (2016, Scott Derrickson) Stephen Strange; \\"The Silence of the Lambs\\" (1991, Jonathan Demme) Hannibal Lecter"'
        ],
        "architect": [
            'reference: "《盗梦空间》(2010, 克里斯托弗·诺兰) 阿里阿德涅；《源泉》(1949, 金·维多) 霍华德·洛克",',
            'referenceEn: "\\"Inception\\" (2010, Christopher Nolan) Ariadne; \\"The Fountainhead\\" (1949, King Vidor) Howard Roark"'
        ],
        "professor": [
            'reference: "《美丽心灵》(2001, 朗·霍华德) 约翰·纳什；《夺宝奇兵》(1981, 史蒂文·斯皮尔伯格) 印第安纳·琼斯",',
            'referenceEn: "\\"A Beautiful Mind\\" (2001, Ron Howard) John Nash; \\"Raiders of the Lost Ark\\" (1981, Steven Spielberg) Indiana Jones"'
        ],
        "engineer": [
            'reference: "《火星救援》(2015, 雷德利·斯科特) 马克·沃特尼；《雪国列车》(2013, 奉俊昊) 威尔福德",',
            'referenceEn: "\\"The Martian\\" (2015, Ridley Scott) Mark Watney; \\"Snowpiercer\\" (2013, Bong Joon Ho) Wilford"'
        ],
        "archaeologist": [
            'reference: "《古墓丽影》(2001, 西蒙·韦斯特) 劳拉·克劳馥；《普罗米修斯》(2012, 雷德利·斯科特) 伊丽莎白·肖",',
            'referenceEn: "\\"Lara Croft: Tomb Raider\\" (2001, Simon West) Lara Croft; \\"Prometheus\\" (2012, Ridley Scott) Elizabeth Shaw"'
        ],
        "psychiatrist": [
            'reference: "《禁闭岛》(2010, 马丁·斯科塞斯) 泰迪·丹尼尔斯；《蝙蝠侠：侠影之谜》(2005, 克里斯托弗·诺兰) 乔纳森·克莱恩（稻草人）",',
            'referenceEn: "\\"Shutter Island\\" (2010, Martin Scorsese) Teddy Daniels; \\"Batman Begins\\" (2005, Christopher Nolan) Dr. Jonathan Crane (Scarecrow)"'
        ],
        "pathologist": [
            'reference: "《汉江怪物》(2006, 奉俊昊) 美军法医；《非自然死亡》(2018, 系列剧) 三澄美琴",',
            'referenceEn: "\\"The Host\\" (2006, Bong Joon Ho) US Military Pathologist; \\"Unnatural\\" (2018, Series) Mikoto Misumi"'
        ],
        "programmer": [
            'reference: "《社交网络》(2010, 大卫·芬奇) 马克·扎克伯格；《黑客帝国》(1999, 沃卓斯基姐妹) 尼奥",',
            'referenceEn: "\\"The Social Network\\" (2010, David Fincher) Mark Zuckerberg; \\"The Matrix\\" (1999, The Wachowskis) Neo"'
        ],
        "alchemist": [
            'reference: "《钢之炼金术师》(2009, 入江泰浩) 爱德华·艾尔利克；《哈利·波特与魔法石》(2001, 克里斯·哥伦布) 尼可·勒梅",',
            'referenceEn: "\\"Fullmetal Alchemist: Brotherhood\\" (2009, Yasuhiro Irie) Edward Elric; \\"Harry Potter and the Sorcerer\'s Stone\\" (2001, Chris Columbus) Nicolas Flamel"'
        ],
        "librarian": [
            'reference: "《星球大战8：最后的绝地武士》(2017, 莱恩·约翰逊) 尤达大师；《玫瑰的名字》(1986, 让-雅克·阿诺) 豪尔赫",',
            'referenceEn: "\\"Star Wars: Episode VIII\\" (2017, Rian Johnson) Yoda; \\"The Name of the Rose\\" (1986, Jean-Jacques Annaud) Jorge of Burgos"'
        ],
        "navigator": [
            'reference: "《沙丘》(2021, 丹尼斯·维伦纽瓦) 公会领航员；《黑客帝国》(1999, 沃卓斯基姐妹) 坦克",',
            'referenceEn: "\\"Dune\\" (2021, Denis Villeneuve) Guild Navigator; \\"The Matrix\\" (1999, The Wachowskis) Tank"'
        ],
        "botanist": [
            'reference: "《火星救援》(2015, 雷德利·斯科特) 马克·沃特尼；《湮灭》(2018, 亚历克斯·加兰) 乔西·拉德克",',
            'referenceEn: "\\"The Martian\\" (2015, Ridley Scott) Mark Watney; \\"Annihilation\\" (2018, Alex Garland) Josie Radek"'
        ],
        "inventor": [
            'reference: "《钢铁侠》(2008, 乔恩·费儒) 托尼·斯塔克；《剪刀手爱德华》(1990, 蒂姆·伯顿) 老发明家",',
            'referenceEn: "\\"Iron Man\\" (2008, Jon Favreau) Tony Stark; \\"Edward Scissorhands\\" (1990, Tim Burton) The Inventor"'
        ],
        "astronomer": [
            'reference: "《星际穿越》(2014, 克里斯托弗·诺兰) 墨菲·库珀；《不要抬头》(2021, 亚当·麦凯) 兰德尔·明迪",',
            'referenceEn: "\\"Interstellar\\" (2014, Christopher Nolan) Murph Cooper; \\"Don\'t Look Up\\" (2021, Adam McKay) Randall Mindy"'
        ]
    },
    "d": {
        "ceo": [
            'reference: "《华尔街》(1987, 奥利佛·斯通) 戈登·盖柯；《生化危机》(2002, 保罗·安德森) 保护伞高层",',
            'referenceEn: "\\"Wall Street\\" (1987, Oliver Stone) Gordon Gekko; \\"Resident Evil\\" (2002, Paul W.S. Anderson) Umbrella Executive"'
        ],
        "politician": [
            'reference: "《纸牌屋》(2013, 系列剧) 弗兰克·安德伍德；《V字仇杀队》(2005, 詹姆斯·麦克特格) 亚当·苏特勒",',
            'referenceEn: "\\"House of Cards\\" (2013, Series) Frank Underwood; \\"V for Vendetta\\" (2005, James McTeigue) Adam Sutler"'
        ],
        "judge_law": [
            'reference: "《特警判官》(2012, 皮特·特拉维斯) 判官爵德；《纽伦堡大审判》(1961, 斯坦利·克雷默) 丹·海伍德",',
            'referenceEn: "\\"Dredd\\" (2012, Pete Travis) Judge Dredd; \\"Judgment at Nuremberg\\" (1961, Stanley Kramer) Dan Haywood"'
        ],
        "diplomat": [
            'reference: "《惊爆十三天》(2000, 罗杰·唐纳森) 肯尼迪总统/幕僚；《黑豹》(2018, 瑞恩·库格勒) 特查拉",',
            'referenceEn: "\\"Thirteen Days\\" (2000, Roger Donaldson) JFK/Staff; \\"Black Panther\\" (2018, Ryan Coogler) T\'Challa"'
        ],
        "bureaucrat": [
            'reference: "《是，大臣》(1980, 系列剧) 汉弗莱·阿普尔比；《妙想天开》(1985, 特瑞·吉列姆) 萨姆·洛瑞",',
            'referenceEn: "\\"Yes, Minister\\" (1980, Series) Humphrey Appleby; \\"Brazil\\" (1985, Terry Gilliam) Sam Lowry"'
        ],
        "monarch": [
            'reference: "《权力的游戏》(2011, 系列剧) 乔佛里·拜拉席恩；《末代皇帝》(1987, 贝纳尔多·贝托鲁奇) 溥仪",',
            'referenceEn: "\\"Game of Thrones\\" (2011, Series) Joffrey Baratheon; \\"The Last Emperor\\" (1987, Bernardo Bertolucci) Puyi"'
        ],
        "general": [
            'reference: "《巴顿将军》(1970, 富兰克林·沙夫纳) 乔治·巴顿；《复仇者联盟》(2012, 乔斯·韦登) 世界安全理事会",',
            'referenceEn: "\\"Patton\\" (1970, Franklin J. Schaffner) George S. Patton; \\"The Avengers\\" (2012, Joss Whedon) World Security Council"'
        ],
        "headmaster": [
            'reference: "《哈利·波特与凤凰社》(2007, 大卫·叶茨) 乌姆里奇；《死亡诗社》(1989, 彼得·威尔) 诺兰校长",',
            'referenceEn: "\\"Harry Potter and the Order of the Phoenix\\" (2007, David Yates) Dolores Umbridge; \\"Dead Poets Society\\" (1989, Peter Weir) Headmaster Nolan"'
        ],
        "editor_chief": [
            'reference: "《聚焦》(2015, 汤姆·麦卡锡) 马蒂·巴伦；《蜘蛛侠》(2002, 山姆·雷米) J·乔纳·詹姆森",',
            'referenceEn: "\\"Spotlight\\" (2015, Tom McCarthy) Marty Baron; \\"Spider-Man\\" (2002, Sam Raimi) J. Jonah Jameson"'
        ],
        "art_curator": [
            'reference: "《天鹅绒圆锯》(2019, 丹·吉尔罗伊) 莫夫·范德沃尔特；《方形》(2017, 鲁本·奥斯特伦德) 克里斯蒂安",',
            'referenceEn: "\\"Velvet Buzzsaw\\" (2019, Dan Gilroy) Morf Vandewalt; \\"The Square\\" (2017, Ruben Östlund) Christian"'
        ],
        "union_leader": [
            'reference: "《爱尔兰人》(2019, 马丁·斯科塞斯) 吉米·霍法；《寄生虫》(2019, 奉俊昊) 金基泽",',
            'referenceEn: "\\"The Irishman\\" (2019, Martin Scorsese) Jimmy Hoffa; \\"Parasite\\" (2019, Bong Joon Ho) Kim Ki-taek"'
        ],
        "mob_boss": [
            'reference: "《教父》(1972, 弗朗西斯·福特·科波拉) 维托·柯里昂；《无间道》(2002, 刘伟强) 韩琛",',
            'referenceEn: "\\"The Godfather\\" (1972, Francis Ford Coppola) Vito Corleone; \\"Infernal Affairs\\" (2002, Andrew Lau) Hon Sam"'
        ],
        "ship_captain": [
            'reference: "《泰坦尼克号》(1997, 詹姆斯·卡梅隆) 爱德华·史密斯船长；《白鲸》(1956, 约翰·休斯顿) 亚哈船长",',
            'referenceEn: "\\"Titanic\\" (1997, James Cameron) Captain Edward Smith; \\"Moby Dick\\" (1956, John Huston) Captain Ahab"'
        ],
        "director": [
            'reference: "《喜剧之王》(1999, 周星驰) 导演；《热带惊雷》(2008, 本·斯蒂勒) 达米安·科伯恩",',
            'referenceEn: "\\"King of Comedy\\" (1999, Stephen Chow) Director; \\"Tropic Thunder\\" (2008, Ben Stiller) Damien Cockburn"'
        ],
        "landlord": [
            'reference: "《功夫》(2004, 周星驰) 包租婆；《闪灵》(1980, 斯坦利·库布里克) 杰克·托伦斯",',
            'referenceEn: "\\"Kung Fu Hustle\\" (2004, Stephen Chow) Landlady; \\"The Shining\\" (1980, Stanley Kubrick) Jack Torrance"'
        ]
    },
    "e": {
        "painter": [
            'reference: "《狂人皮埃罗》(1965, 让-吕克·戈达尔) 费迪南；《梵高传》(1956, 文森特·明奈利) 文森特·梵高",',
            'referenceEn: "\\"Pierrot le Fou\\" (1965, Jean-Luc Godard) Ferdinand; \\"Lust for Life\\" (1956, Vincente Minnelli) Vincent van Gogh"'
        ],
        "writer": [
            'reference: "《闪灵》(1980, 斯坦利·库布里克) 杰克·托伦斯；《危情十日》(1990, 罗伯·莱纳) 保罗·谢尔顿",',
            'referenceEn: "\\"The Shining\\" (1980, Stanley Kubrick) Jack Torrance; \\"Misery\\" (1990, Rob Reiner) Paul Sheldon"'
        ],
        "musician": [
            'reference: "《爆裂鼓手》(2014, 达米恩·查泽雷) 安德鲁·内曼；《海上钢琴师》(1998, 朱塞佩·托纳多雷) 1900",',
            'referenceEn: "\\"Whiplash\\" (2014, Damien Chazelle) Andrew Neiman; \\"The Legend of 1900\\" (1998, Giuseppe Tornatore) 1900"'
        ],
        "actor": [
            'reference: "《黑天鹅》(2010, 达伦·阿伦诺夫斯基) 妮娜·塞耶斯；《霸王别姬》(1993, 陈凯歌) 程蝶衣",',
            'referenceEn: "\\"Black Swan\\" (2010, Darren Aronofsky) Nina Sayers; \\"Farewell My Concubine\\" (1993, Chen Kaige) Cheng Dieyi"'
        ],
        "dancer": [
            'reference: "《阴风阵阵》(1977, 达里奥·阿基多) 莎拉·班农；《红菱艳》(1948, 迈克尔·鲍威尔) 佩吉·辛克莱",',
            'referenceEn: "\\"Suspiria\\" (1977, Dario Argento) Suzy Bannion; \\"The Red Shoes\\" (1948, Michael Powell) Victoria Page"'
        ],
        "photographer": [
            'reference: "《后窗》(1954, 阿尔弗雷德·希区柯克) 杰弗里斯；《夜行者》(2014, 丹·吉尔罗伊) 卢·布鲁姆",',
            'referenceEn: "\\"Rear Window\\" (1954, Alfred Hitchcock) L.B. Jefferies; \\"Nightcrawler\\" (2014, Dan Gilroy) Lou Bloom"'
        ],
        "poet": [
            'reference: "《心之全蚀》(1995, 阿格涅丝卡·霍兰) 阿蒂尔·兰波；《死亡诗社》(1989, 彼得·威尔) 尼尔·佩里",',
            'referenceEn: "\\"Total Eclipse\\" (1995, Agnieszka Holland) Arthur Rimbaud; \\"Dead Poets Society\\" (1989, Peter Weir) Neil Perry"'
        ],
        "sculptor": [
            'reference: "《罗丹的情人》(1988, 布鲁诺·努坦) 卡米尔·克洛岱尔；《剪刀手爱德华》(1990, 蒂姆·伯顿) 爱德华",',
            'referenceEn: "\\"Camille Claudel\\" (1988, Bruno Nuytten) Camille Claudel; \\"Edward Scissorhands\\" (1990, Tim Burton) Edward Scissorhands"'
        ],
        "singer": [
            'reference: "《第五元素》(1997, 吕克·贝松) 外星歌姬；《歌剧魅影》(2004, 乔·舒马赫) 克里斯汀·戴伊",',
            'referenceEn: "\\"The Fifth Element\\" (1997, Luc Besson) Diva Plavalaguna; \\"The Phantom of the Opera\\" (2004, Joel Schumacher) Christine Daaé"'
        ],
        "composer": [
            'reference: "《莫扎特传》(1984, 米洛斯·福尔曼) 安东尼奥·萨列里；《海上钢琴师》(1998, 朱塞佩·托纳多雷) 1900",',
            'referenceEn: "\\"Amadeus\\" (1984, Miloš Forman) Antonio Salieri; \\"The Legend of 1900\\" (1998, Giuseppe Tornatore) 1900"'
        ],
        "illusionist": [
            'reference: "《致命魔术》(2006, 克里斯托弗·诺兰) 罗伯特·安吉尔；《惊天魔盗团》(2013, 路易斯·莱特里尔) 丹尼尔·阿特拉斯",',
            'referenceEn: "\\"The Prestige\\" (2006, Christopher Nolan) Robert Angier; \\"Now You See Me\\" (2013, Louis Leterrier) J. Daniel Atlas"'
        ],
        "fashion_designer": [
            'reference: "《霓裳魅影》(2017, 保罗·托马斯·安德森) 雷诺兹·伍德科克；《黑白魔女库伊拉》(2021, 克雷格·吉勒斯佩) 库伊拉",',
            'referenceEn: "\\"Phantom Thread\\" (2017, Paul Thomas Anderson) Reynolds Woodcock; \\"Cruella\\" (2021, Craig Gillespie) Cruella de Vil"'
        ],
        "tattoo_artist": [
            'reference: "《红龙》(2002, 布莱特·拉特纳) 弗朗西斯·多拉海德；《极恶非道》(2010, 北野武) 黑帮成员",',
            'referenceEn: "\\"Red Dragon\\" (2002, Brett Ratner) Francis Dolarhyde; \\"Outrage\\" (2010, Takeshi Kitano) Yakuza Members"'
        ],
        "critic": [
            'reference: "《料理鼠王》(2007, 布拉德·伯德) 安东·伊戈；《鸟人》(2014, 亚历杭德罗·G·伊纳里图) 塔比莎·迪金森",',
            'referenceEn: "\\"Ratatouille\\" (2007, Brad Bird) Anton Ego; \\"Birdman\\" (2014, Alejandro G. Iñárritu) Tabitha Dickinson"'
        ],
        "makeup_artist": [
            'reference: "《科学怪人》(1931, 詹姆斯·惠尔) 杰克·皮尔斯/怪人；《小丑》(2019, 托德·菲利普斯) 亚瑟·弗兰克",',
            'referenceEn: "\\"Frankenstein\\" (1931, James Whale) Jack Pierce / Monster; \\"Joker\\" (2019, Todd Phillips) Arthur Fleck"'
        ]
    },
    "f": {
        "priest": [
            'reference: "《驱魔人》(1973, 威廉·弗莱德金) 戴米恩·卡拉斯神父；《聚焦》(2015, 汤姆·麦卡锡) 神父群体",',
            'referenceEn: "\\"The Exorcist\\" (1973, William Friedkin) Father Damien Karras; \\"Spotlight\\" (2015, Tom McCarthy) The Priests"'
        ],
        "cult_leader": [
            'reference: "《仲夏夜惊魂》(2019, 阿里·艾斯特) 西芙；《双瞳》(2002, 陈国富) 谢亚理",',
            'referenceEn: "\\"Midsommar\\" (2019, Ari Aster) Siv; \\"Double Vision\\" (2002, Chen Kuo-fu) Hsieh Ya-li"'
        ],
        "nun": [
            'reference: "《修女艾达》(2013, 保罗·帕夫利克夫斯基) 艾达；《招魂2》(2016, 温子仁) 瓦拉克",',
            'referenceEn: "\\"Ida\\" (2013, Paweł Pawlikowski) Ida; \\"The Conjuring 2\\" (2016, James Wan) Valak"'
        ],
        "exorcist": [
            'reference: "《康斯坦丁》(2005, 弗朗西斯·劳伦斯) 约翰·康斯坦丁；《邪恶力量》(2005, 系列剧) 温彻斯特兄弟",',
            'referenceEn: "\\"Constantine\\" (2005, Francis Lawrence) John Constantine; \\"Supernatural\\" (2005, Series) Winchester Brothers"'
        ],
        "shaman": [
            'reference: "《启示》(2006, 梅尔·吉布森) 大祭司；《疯狂的麦克斯4：狂暴之路》(2015, 乔治·米勒) 战争男孩/神棍",',
            'referenceEn: "\\"Apocalypto\\" (2006, Mel Gibson) High Priest; \\"Mad Max: Fury Road\\" (2015, George Miller) War Boys"'
        ],
        "prophet": [
            'reference: "《沙丘》(2021, 丹尼斯·维伦纽瓦) 保罗·厄崔迪；《黑客帝国》(1999, 沃卓斯基姐妹) 先知",',
            'referenceEn: "\\"Dune\\" (2021, Denis Villeneuve) Paul Atreides; \\"The Matrix\\" (1999, The Wachowskis) The Oracle"'
        ],
        "monk": [
            'reference: "《达芬奇密码》(2006, 朗·霍华德) 塞拉斯；《新少林寺》(2011, 陈木胜) 净能",',
            'referenceEn: "\\"The Da Vinci Code\\" (2006, Ron Howard) Silas; \\"Shaolin\\" (2011, Benny Chan) Jing Neng"'
        ],
        "inquisitor": [
            'reference: "《玫瑰的名字》(1986, 让-雅克·阿诺) 伯尔纳多·圭；《星球大战：义军崛起》(2014, 系列剧) 帝国判官",',
            'referenceEn: "\\"The Name of the Rose\\" (1986, Jean-Jacques Annaud) Bernardo Gui; \\"Star Wars Rebels\\" (2014, Series) Inquisitor"'
        ],
        "oracle": [
            'reference: "《斯巴达克斯》(2010, 系列剧) 预言者；《斯巴达300勇士》(2006, 扎克·施奈德) 预言童女",',
            'referenceEn: "\\"Spartacus\\" (2010, Series) Oracle; \\"300\\" (2006, Zack Snyder) The Oracle Girl"'
        ],
        "witch": [
            'reference: "《女巫》(2015, 罗伯特·艾格斯) 汤玛辛；《韩赛尔与格蕾特：女巫猎人》(2013, 托米·维尔科拉) 穆里尔",',
            'referenceEn: "\\"The Witch\\" (2015, Robert Eggers) Thomasin; \\"Hansel & Gretel: Witch Hunters\\" (2013, Tommy Wirkola) Muriel"'
        ],
        "occultist": [
            'reference: "《第九道门》(1999, 罗曼·波兰斯基) 迪恩·科索；《钢之炼金术师》(2009, 入江泰浩) 父亲大人",',
            'referenceEn: "\\"The Ninth Gate\\" (1999, Roman Polanski) Dean Corso; \\"Fullmetal Alchemist: Brotherhood\\" (2009, Yasuhiro Irie) Father"'
        ],
        "televangelist": [
            'reference: "《塔米·菲的眼泪》(2021, 迈克尔·肖沃特) 塔米·菲·贝克；《黑袍纠察队》(2019, 系列剧) 以西结",',
            'referenceEn: "\\"The Eyes of Tammy Faye\\" (2021, Michael Showalter) Tammy Faye Bakker; \\"The Boys\\" (2019, Series) Ezekiel"'
        ],
        "paladin": [
            'reference: "《天国王朝》(2005, 雷德利·斯科特) 鲍德温四世/十字军；《战锤40K》(2011, 游戏) 黑色圣堂/星际战士",',
            'referenceEn: "\\"Kingdom of Heaven\\" (2005, Ridley Scott) Baldwin IV / Crusaders; \\"Warhammer 40,000\\" (2011, Game) Black Templars / Space Marines"'
        ],
        "flagellant": [
            'reference: "《第七封印》(1957, 英格玛·伯格曼) 苦行者；《达芬奇密码》(2006, 朗·霍华德) 塞拉斯",',
            'referenceEn: "\\"The Seventh Seal\\" (1957, Ingmar Bergman) Flagellants; \\"The Da Vinci Code\\" (2006, Ron Howard) Silas"'
        ],
        "mortician": [
            'reference: "《入殓师》(2008, 泷田洋二郎) 小林大悟；《无名女尸》(2016, 安德烈·艾弗道夫) 汤米·蒂尔登",',
            'referenceEn: "\\"Departures\\" (2008, Yojiro Takita) Daigo Kobayashi; \\"The Autopsy of Jane Doe\\" (2016, André Øvredal) Tommy Tilden"'
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

print("c d e f done")
