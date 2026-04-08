import re

files = {
    "n": "/Users/lujiaqi/Desktop/【迷雾学派】爱欲视觉拓扑学 2-24版/data/engine_surface/SUR9/group_n.ts",
    "o": "/Users/lujiaqi/Desktop/【迷雾学派】爱欲视觉拓扑学 2-24版/data/engine_surface/SUR9/group_o.ts",
    "p": "/Users/lujiaqi/Desktop/【迷雾学派】爱欲视觉拓扑学 2-24版/data/engine_surface/SUR9/group_p.ts"
}

replacements = {
    "n": {
        "clone": [
            'reference: "《银翼杀手2049》(2017, 丹尼斯·维伦纽瓦) K；《逃出克隆岛》(2005, 迈克尔·贝) 备用血肉库",',
            'referenceEn: "\\"Blade Runner 2049\\" (2017, Denis Villeneuve) K; \\"The Island\\" (2005, Michael Bay) Backup Flesh Library"'
        ],
        "android": [
            'reference: "《异形2》(1986, 詹姆斯·卡梅隆) 主教；《西部世界》(2016, 系列剧) 招待员(接待员)",',
            'referenceEn: "\\"Aliens\\" (1986, James Cameron) Bishop; \\"Westworld\\" (2016, Series) Hosts"'
        ],
        "cyborg": [
            'reference: "《赛博朋克：边缘行者》(2022, 今石洋之) 大卫·马丁内斯；《机械战警》(1987, 保罗·范霍文) 亚历克斯·墨菲",',
            'referenceEn: "\\"Cyberpunk: Edgerunners\\" (2022, Hiroyuki Imaishi) David Martinez; \\"RoboCop\\" (1987, Paul Verhoeven) Alex Murphy"'
        ],
        "mutant_lab": [
            'reference: "《怪奇物语》(2016, 系列剧) 11号；《生化危机》(2002, 保罗·安德森) 舔食者",',
            'referenceEn: "\\"Stranger Things\\" (2016, Series) Eleven; \\"Resident Evil\\" (2002, Paul W. S. Anderson) The Licker"'
        ],
        "uplifted_animal": [
            'reference: "《猩球崛起》(2011, 鲁伯特·瓦耶特) 凯撒；《银河护卫队》(2014, 詹姆斯·古恩) 火箭浣熊",',
            'referenceEn: "\\"Rise of the Planet of the Apes\\" (2011, Rupert Wyatt) Caesar; \\"Guardians of the Galaxy\\" (2014, James Gunn) Rocket Raccoon"'
        ],
        "ghost_ai": [
            'reference: "《黑客帝国》(1999, 沃卓斯基姐妹) 史密斯特工；《流浪地球2》(2023, 郭帆) 图丫丫",',
            'referenceEn: "\\"The Matrix\\" (1999, The Wachowskis) Agent Smith; \\"The Wandering Earth II\\" (2023, Frant Gwo) Tu Yaya"'
        ],
        "homunculus": [
            'reference: "《钢之炼金术师》(2003, 水岛精二) 爱德华的人体炼成物；《科学怪人》(1931, 詹姆斯·怀尔) 弗兰肯斯坦的怪物",',
            'referenceEn: "\\"Fullmetal Alchemist\\" (2003, Seiji Mizushima) Human Transmutation; \\"Frankenstein\\" (1931, James Whale) Frankenstein\'s Monster"'
        ],
        "chosen_one": [
            'reference: "《哈利·波特与魔法石》(2001, 克里斯·哥伦布) 哈利·波特；《黑客帝国》(1999, 沃卓斯基姐妹) 尼奥",',
            'referenceEn: "\\"Harry Potter and the Sorcerer\'s Stone\\" (2001, Chris Columbus) Harry Potter; \\"The Matrix\\" (1999, The Wachowskis) Neo"'
        ],
        "cursed_one": [
            'reference: "《指环王》(2001, 彼得·杰克逊) 咕噜；《咒怨》(2002, 清水崇) 伽椰子/俊雄",',
            'referenceEn: "\\"The Lord of the Rings\\" (2001, Peter Jackson) Gollum; \\"Ju-on: The Grudge\\" (2002, Takashi Shimizu) Kayako / Toshio"'
        ],
        "immortal": [
            'reference: "《金刚狼3：殊死一战》(2017, 詹姆斯·曼高德) 罗根；《剑风传奇》(1997, 高桥直人) 骷髅骑士",',
            'referenceEn: "\\"Logan\\" (2017, James Mangold) Logan / Wolverine; \\"Berserk\\" (1997, Naohito Takahashi) Skull Knight"'
        ],
        "vessel": [
            'reference: "《火影忍者》(2002, 伊达勇登) 我爱罗；《逃出绝命镇》(2017, 乔丹·皮尔) 下沉空间",',
            'referenceEn: "\\"Naruto\\" (2002, Hayato Date) Gaara; \\"Get Out\\" (2017, Jordan Peele) The Sunken Place Vessel"'
        ],
        "hive_drone": [
            'reference: "《星际迷航：下一代》(1987, 系列剧) 博格人；《星际争霸》(1998, 游戏) 异虫/跳虫",',
            'referenceEn: "\\"Star Trek: The Next Generation\\" (1987, Series) The Borg; \\"StarCraft\\" (1998, Video Game) Zerg / Zerglings"'
        ],
        "glitch_entity": [
            'reference: "《旺达幻视》(2021, 系列剧) 红女巫；《蜘蛛侠：平行宇宙》(2018, 鲍勃·佩尔西凯蒂等) 故障变体",',
            'referenceEn: "\\"WandaVision\\" (2021, Series) Scarlet Witch; \\"Spider-Man: Into the Spider-Verse\\" (2018) Glitch Variants"'
        ],
        "reincarnated": [
            'reference: "《明日边缘》(2014, 道格·里曼) 威廉·凯奇；《无职转生》(2021, 冈本学) 卢迪乌斯",',
            'referenceEn: "\\"Edge of Tomorrow\\" (2014, Doug Liman) William Cage; \\"Mushoku Tensei\\" (2021, Manabu Okamoto) Rudeus Greyrat"'
        ],
        "cyborg_native": [
            'reference: "《黑客帝国》(1999, 沃卓斯基姐妹) 矩阵电池孵化人类；《银翼杀手》(1982, 雷德利·斯科特) 瑞秋",',
            'referenceEn: "\\"The Matrix\\" (1999, The Wachowskis) Matrix Battery Pod Humans; \\"Blade Runner\\" (1982, Ridley Scott) Rachael"'
        ]
    },
    "o": {
        "mafia_prince": [
            'reference: "《教父》(1972, 弗朗西斯·科波拉) 迈克尔·柯里昂；《黑道家族》(1999, 系列剧) 黑帮二代",',
            'referenceEn: "\\"The Godfather\\" (1972, Francis Ford Coppola) Michael Corleone; \\"The Sopranos\\" (1999, Series) Mafia Scions"'
        ],
        "yakuza_daughter": [
            'reference: "《杀死比尔》(2003, 昆汀·塔伦蒂诺) 石井御莲；《龙纹身的女孩》(2011, 大卫·芬奇) 莉丝·莎兰德",',
            'referenceEn: "\\"Kill Bill\\" (2003, Quentin Tarantino) O-Ren Ishii; \\"The Girl with the Dragon Tattoo\\" (2011, David Fincher) Lisbeth Salander"'
        ],
        "cartel_kid": [
            'reference: "《毒枭》(2015, 系列剧) 毒枭家族与农庄儿童；《绝命毒师》(2008, 系列剧) 杰西·平克曼",',
            'referenceEn: "\\"Narcos\\" (2015, Series) Cartel Family and Estate Kids; \\"Breaking Bad\\" (2008, Series) Jesse Pinkman"'
        ],
        "thief_guild": [
            'reference: "《雾都孤儿》(2005, 罗曼·波兰斯基) 费金及扒手团伙；《十一罗汉》(2001, 史蒂文·索德伯格) 盗贼团",',
            'referenceEn: "\\"Oliver Twist\\" (2005, Roman Polanski) Fagin and Pickpockets; \\"Ocean\'s Eleven\\" (2001, Steven Soderbergh) Ocean\'s Crew"'
        ],
        "assassin_clan": [
            'reference: "《疾速追杀》(2014, 查德·斯塔赫斯基) 约翰·威克/高台会；《刺客联盟》(2008, 提莫) 刺客兄弟会",',
            'referenceEn: "\\"John Wick\\" (2014, Chad Stahelski) John Wick / High Table; \\"Wanted\\" (2008, Timur Bekmambetov) The Fraternity"'
        ],
        "pirate_born": [
            'reference: "《加勒比海盗》(2003, 戈尔·维宾斯基) 威尔·特纳；《海贼王》(1999, 宇田钢之介) 极恶的世代",',
            'referenceEn: "\\"Pirates of the Caribbean\\" (2003, Gore Verbinski) Will Turner; \\"One Piece\\" (1999, Konosuke Uda) The Worst Generation"'
        ],
        "arms_dealer_fam": [
            'reference: "《战争之王》(2005, 安德鲁·尼科尔) 尤里·奥洛夫；《钢铁侠》(2008, 乔恩·费儒) 托尼·斯塔克",',
            'referenceEn: "\\"Lord of War\\" (2005, Andrew Niccol) Yuri Orlov; \\"Iron Man\\" (2008, Jon Favreau) Tony Stark"'
        ],
        "cult_child": [
            'reference: "《双面玛莎》(2011, 肖恩·德金) 玛莎；《小丑回魂》(2017, 安德斯·穆斯切蒂) 德里镇居民",',
            'referenceEn: "\\"Martha Marcy May Marlene\\" (2011, Sean Durkin) Martha; \\"It\\" (2017, Andy Muschietti) Derry Citizens"'
        ],
        "prisoner_born": [
            'reference: "《和声》(2010, 姜大圭) 狱中婴儿；《机智的监狱生活》(2017, 系列剧) 监狱体系内的犯人",',
            'referenceEn: "\\"Harmony\\" (2010, Kang Dae-gyu) Prison Infant; \\"Prison Playbook\\" (2017, Series) Systemic Prisoners"'
        ],
        "spy_kid": [
            'reference: "《黑寡妇》(2021, 凯特·绍特兰) 娜塔莎；《碟中谍3》(2006, J·J·艾布拉姆斯) 伊森·亨特的妻子",',
            'referenceEn: "\\"Black Widow\\" (2021, Cate Shortland) Natasha; \\"Mission: Impossible III\\" (2006, J.J. Abrams) Ethan Hunt\'s Wife"'
        ],
        "con_artist_fam": [
            'reference: "《猫鼠游戏》(2002, 史蒂文·斯皮尔伯格) 弗兰克·阿巴内尔；《火柴人》(2003, 雷德利·斯科特) 罗伊·沃勒",',
            'referenceEn: "\\"Catch Me If You Can\\" (2002, Steven Spielberg) Frank Abagnale Jr.; \\"Matchstick Men\\" (2003, Ridley Scott) Roy Waller"'
        ],
        "bootlegger_heir": [
            'reference: "《大西洋帝国》(2010, 系列剧) 努基·汤普森；《美国往事》(1984, 赛尔乔·莱昂内) 面条及兄弟",',
            'referenceEn: "\\"Boardwalk Empire\\" (2010, Series) Nucky Thompson; \\"Once Upon a Time in America\\" (1984, Sergio Leone) Noodles and Brothers"'
        ],
        "warlord_child": [
            'reference: "《无境之兽》(2015, 凯瑞·福永) 阿古/童子军；《血钻》(2006, 爱德华·兹维克) 非洲童子军",',
            'referenceEn: "\\"Beasts of No Nation\\" (2015, Cary Joji Fukunaga) Agu / Child Soldiers; \\"Blood Diamond\\" (2006, Edward Zwick) African Child Soldiers"'
        ],
        "poacher_clan": [
            'reference: "《可可西里》(2004, 陆川) 盗猎者；《荒野猎人》(2015, 亚利桑德罗) 皮草猎人",',
            'referenceEn: "\\"Kekexili: Mountain Patrol\\" (2004, Lu Chuan) Poachers; \\"The Revenant\\" (2015, Alejandro G. Iñárritu) Fur Trappers"'
        ],
        "grave_robber_fam": [
            'reference: "《寻龙诀》(2015, 乌尔善) 摸金校尉；《木乃伊》(1999, 斯蒂芬·索莫斯) 寻宝贼",',
            'referenceEn: "\\"Mojin: The Lost Legend\\" (2015, Wuershan) Mojin Tomb Raiders; \\"The Mummy\\" (1999, Stephen Sommers) Treasure Hunters"'
        ]
    },
    "p": {
        "political_exile": [
            'reference: "《窃听风暴》(2006, 弗洛里安·亨克尔) 东德异见者；《辛德勒的名单》(1993, 史蒂文·斯皮尔伯格) 犹太难民",',
            'referenceEn: "\\"The Lives of Others\\" (2006, Florian Henckel von Donnersmarck) East German Dissidents; \\"Schindler\'s List\\" (1993) Jewish Refugees"'
        ],
        "immigrant_first": [
            'reference: "《教父2》(1974, 弗朗西斯·科波拉) 维托·柯里昂(童年)；《米纳里》(2020, 李·以萨克·郑) 雅各布一家",',
            'referenceEn: "\\"The Godfather Part II\\" (1974, Francis Ford Coppola) Vito Corleone (Child); \\"Minari\\" (2020, Lee Isaac Chung) Jacob and Family"'
        ],
        "expat": [
            'reference: "《迷失东京》(2003, 索菲亚·科波拉) 夏洛特/鲍勃；《卢旺达饭店》(2004, 特瑞·乔治) 白工外派",',
            'referenceEn: "\\"Lost in Translation\\" (2003, Sofia Coppola) Charlotte / Bob Harris; \\"Hotel Rwanda\\" (2004, Terry George) Foreign Expats"'
        ],
        "war_refugee": [
            'reference: "《漫长的婚约》(2004, 让-皮埃尔·热内) 战壕伤兵；《风之谷》(1984, 宫崎骏) 逃难平民",',
            'referenceEn: "\\"A Very Long Engagement\\" (2004, Jean-Pierre Jeunet) Trench Soldiers; \\"Nausicaä of the Valley of the Wind\\" (1984, Hayao Miyazaki) Fleeing Civilians"'
        ],
        "time_traveler_stuck": [
            'reference: "《终结者2：审判日》(1991, 詹姆斯·卡梅隆) 莎拉·康纳；《十二猴子》(1995, 特瑞·吉列姆) 詹姆斯·科尔",',
            'referenceEn: "\\"Terminator 2: Judgment Day\\" (1991, James Cameron) Sarah Connor; \\"12 Monkeys\\" (1995, Terry Gilliam) James Cole"'
        ],
        "alien_stranding": [
            'reference: "《第九区》(2009, 尼尔·布洛姆坎普) 大虾外星人；《来自星星的你》(2013, 系列剧) 都敏俊",',
            'referenceEn: "\\"District 9\\" (2009, Neill Blomkamp) Prawn Aliens; \\"My Love from the Star\\" (2013, Series) Do Min-joon"'
        ],
        "fallen_angel": [
            'reference: "《康斯坦丁》(2005, 弗朗西斯·劳伦斯) 加百列/路西法；《天使之城》(1998, 布拉德·塞伯宁) 塞斯",',
            'referenceEn: "\\"Constantine\\" (2005, Francis Lawrence) Gabriel / Lucifer; \\"City of Angels\\" (1998, Brad Silberling) Seth"'
        ],
        "last_of_kind": [
            'reference: "《超人：钢铁之躯》(2013, 扎克·施奈德) 卡尔-艾尔；《我是传奇》(2007, 弗朗西斯·劳伦斯) 罗伯特·奈维尔",',
            'referenceEn: "\\"Man of Steel\\" (2013, Zack Snyder) Kal-El (Superman); \\"I Am Legend\\" (2007, Francis Lawrence) Robert Neville"'
        ],
        "defector": [
            'reference: "《间谍之桥》(2015, 史蒂文·斯皮尔伯格) 鲁道夫·阿贝尔；《逃离德黑兰》(2012, 本·阿弗莱克) 被困美国人",',
            'referenceEn: "\\"Bridge of Spies\\" (2015, Steven Spielberg) Rudolf Abel; \\"Argo\\" (2012, Ben Affleck) Trapped US Diplomats"'
        ],
        "colonial_officer": [
            'reference: "《现代启示录》(1979, 弗朗西斯·福特·科波拉) 库尔茨上校；《走出非洲》(1985, 西德尼·波拉克) 凯伦",',
            'referenceEn: "\\"Apocalypse Now\\" (1979, Francis Ford Coppola) Colonel Kurtz; \\"Out of Africa\\" (1985, Sydney Pollack) Karen Blixen"'
        ],
        "space_castaway": [
            'reference: "《地心引力》(2013, 阿方索·卡隆) 瑞安·斯通；《火星救援》(2015, 雷德利·斯科特) 马克·沃特尼",',
            'referenceEn: "\\"Gravity\\" (2013, Alfonso Cuarón) Dr. Ryan Stone; \\"The Martian\\" (2015, Ridley Scott) Mark Watney"'
        ],
        "banished_noble": [
            'reference: "《权力的游戏》(2011, 系列剧) 丹妮莉丝·坦格利安(早期)；《末代皇帝》(1987, 贝纳尔多·贝托鲁奇) 溥仪",',
            'referenceEn: "\\"Game of Thrones\\" (2011, Series) Daenerys Targaryen (Early stages); \\"The Last Emperor\\" (1987, Bernardo Bertolucci) Puyi"'
        ],
        "witness_protection": [
            'reference: "《杀死比尔》(2003, 昆汀·塔伦蒂诺) 维妮塔·格林；《黑道家族》(1999, 系列剧) 隐姓埋名的线黑帮",',
            'referenceEn: "\\"Kill Bill\\" (2003, Quentin Tarantino) Vernita Green; \\"The Sopranos\\" (1999, Series) Incognito Informant Mobsters"'
        ],
        "prodigal_son": [
            'reference: "《醉乡民谣》(2013, 乔尔·科恩) 勒维恩·戴维斯；《阿甘正传》(1994, 罗伯特·泽米吉斯) 珍妮·库兰",',
            'referenceEn: "\\"Inside Llewyn Davis\\" (2013, Joel Coen & Ethan Coen) Llewyn Davis; \\"Forrest Gump\\" (1994, Robert Zemeckis) Jenny Curran"'
        ],
        "dimension_hopper": [
            'reference: "《瑞克和莫蒂》(2013, 系列剧) 瑞克·桑切斯；《瞬息全宇宙》(2022, 关家永等) 伊芙琳·王",',
            'referenceEn: "\\"Rick and Morty\\" (2013, Series) Rick Sanchez; \\"Everything Everywhere All at Once\\" (2022, Daniel Kwan) Evelyn Wang"'
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

print("n o p done")
