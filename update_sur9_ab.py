import re

file_a = "/Users/lujiaqi/Desktop/【迷雾学派】爱欲视觉拓扑学 2-24版/data/engine_surface/SUR9/group_a.ts"
file_b = "/Users/lujiaqi/Desktop/【迷雾学派】爱欲视觉拓扑学 2-24版/data/engine_surface/SUR9/group_b.ts"

replacements_a = {
    "detective_noir": [
        'reference: "《唐人街》(1974, 罗曼·波兰斯基) 杰克·吉蒂斯；《马耳他之鹰》(1941, 约翰·休斯顿) 萨姆·斯佩德",',
        'referenceEn: "\\"Chinatown\\" (1974, Roman Polanski) Jake Gittes; \\"The Maltese Falcon\\" (1941, John Huston) Sam Spade"'
    ],
    "homicide_cop": [
        'reference: "《七宗罪》(1995, 大卫·芬奇) 威廉·沙摩塞；《真探》(2014, 凯瑞·福永) 拉斯廷·科尔",',
        'referenceEn: "\\"Se7en\\" (1995, David Fincher) William Somerset; \\"True Detective\\" (2014, Cary Joji Fukunaga) Rust Cohle"'
    ],
    "sniper": [
        'reference: "《美国狙击手》(2014, 克林特·伊斯特伍德) 克里斯·凯尔；《兵临城下》(2001, 让-雅克·阿诺) 瓦西里·扎伊采夫",',
        'referenceEn: "\\"American Sniper\\" (2014, Clint Eastwood) Chris Kyle; \\"Enemy at the Gates\\" (2001, Jean-Jacques Annaud) Vasily Zaitsev"'
    ],
    "riot_police": [
        'reference: "《精英部队》(2007, 若泽·帕迪里亚) 罗伯特·纳西门托；《新特警判官》(2012, 皮特·特拉维斯) 判官爵德",',
        'referenceEn: "\\"Elite Squad\\" (2007, José Padilha) Roberto Nascimento; \\"Dredd\\" (2012, Pete Travis) Judge Dredd"'
    ],
    "mercenary": [
        'reference: "《敢死队》(2010, 西尔维斯特·史泰龙) 巴尼·罗斯；《血钻》(2006, 爱德华·兹威克) 丹尼·阿彻",',
        'referenceEn: "\\"The Expendables\\" (2010, Sylvester Stallone) Barney Ross; \\"Blood Diamond\\" (2006, Edward Zwick) Danny Archer"'
    ],
    "hitman": [
        'reference: "《这个杀手不太冷》(1994, 吕克·贝松) 里昂；《疾速追杀》(2014, 查德·斯塔赫斯基) 约翰·威克",',
        'referenceEn: "\\"Léon: The Professional\\" (1994, Luc Besson) Léon; \\"John Wick\\" (2014, Chad Stahelski) John Wick"'
    ],
    "bounty_hunter": [
        'reference: "《被解救的姜戈》(2012, 昆汀·塔伦蒂诺) 舒尔茨医生；《星际牛仔》(1998, 渡边信一郎) 斯派克·斯皮格尔",',
        'referenceEn: "\\"Django Unchained\\" (2012, Quentin Tarantino) Dr. King Schultz; \\"Cowboy Bebop\\" (1998, Shinichirō Watanabe) Spike Spiegel"'
    ],
    "bodyguard": [
        'reference: "《保镖》(1992, 米克·杰克逊) 弗兰克·法默；《怒火救援》(2004, 托尼·斯科特) 约翰·克里西",',
        'referenceEn: "\\"The Bodyguard\\" (1992, Mick Jackson) Frank Farmer; \\"Man on Fire\\" (2004, Tony Scott) John Creasy"'
    ],
    "interrogator": [
        'reference: "《无耻混蛋》(2009, 昆汀·塔伦蒂诺) 汉斯·兰达；《猎杀本·拉登》(2012, 凯瑟琳·毕格罗) 丹",',
        'referenceEn: "\\"Inglourious Basterds\\" (2009, Quentin Tarantino) Hans Landa; \\"Zero Dark Thirty\\" (2012, Kathryn Bigelow) Dan"'
    ],
    "prison_guard": [
        'reference: "《绿里奇迹》(1999, 弗兰克·德拉邦特) 保罗·埃奇科姆；《肖申克的救赎》(1994, 弗兰克·德拉邦特) 拜伦·哈德利队长",',
        'referenceEn: "\\"The Green Mile\\" (1999, Frank Darabont) Paul Edgecomb; \\"The Shawshank Redemption\\" (1994, Frank Darabont) Captain Byron Hadley"'
    ],
    "samurai_ronin": [
        'reference: "《七武士》(1954, 黑泽明) 岛田勘兵卫；《切腹》(1962, 小林正树) 津云半四郎",',
        'referenceEn: "\\"Seven Samurai\\" (1954, Akira Kurosawa) Kambei Shimada; \\"Harakiri\\" (1962, Masaki Kobayashi) Hanshiro Tsugumo"'
    ],
    "knight": [
        'reference: "《天国王朝》(2005, 雷德利·斯科特) 贝里昂；《圣战骑士》(2001, 布莱恩·海尔格兰德) 威廉·撒切尔",',
        'referenceEn: "\\"Kingdom of Heaven\\" (2005, Ridley Scott) Balian of Ibelin; \\"A Knight\'s Tale\\" (2001, Brian Helgeland) William Thatcher"'
    ],
    "executioner": [
        'reference: "《死囚之舞》(2001, 马克·福斯特) 汉克·格罗托；《末代刽子手》(2014, 汤姆·沃勒) 查瓦雷",',
        'referenceEn: "\\"Monster\'s Ball\\" (2001, Marc Forster) Hank Grotowski; \\"The Last Executioner\\" (2014, Tom Waller) Chavoret"'
    ],
    "gladiator": [
        'reference: "《角斗士》(2000, 雷德利·斯科特) 马克西姆斯；《斯巴达克斯》(1960, 斯坦利·库布里克) 斯巴达克斯",',
        'referenceEn: "\\"Gladiator\\" (2000, Ridley Scott) Maximus Decimus Meridius; \\"Spartacus\\" (1960, Stanley Kubrick) Spartacus"'
    ],
    "secret_agent": [
        'reference: "《007：大战皇家赌场》(2006, 马丁·坎贝尔) 詹姆斯·邦德；《碟中谍》(1996, 布莱恩·德·帕尔玛) 伊森·亨特",',
        'referenceEn: "\\"Casino Royale\\" (2006, Martin Campbell) James Bond; \\"Mission: Impossible\\" (1996, Brian De Palma) Ethan Hunt"'
    ]
}

replacements_b = {
    "thief_master": [
        'reference: "《十一罗汉》(2001, 史蒂文·索德伯格) 丹尼·奥申；《偷天游侠》(1999, 约翰·麦克蒂尔南) 托马斯·克朗",',
        'referenceEn: "\\"Ocean\'s Eleven\\" (2001, Steven Soderbergh) Danny Ocean; \\"The Thomas Crown Affair\\" (1999, John McTiernan) Thomas Crown"'
    ],
    "drug_lord": [
        'reference: "《疤面煞星》(1983, 布莱恩·德·帕尔玛) 托尼·蒙塔纳；《毒枭》(2015, 卡洛斯·伯纳德等) 巴勃罗·埃斯科巴",',
        'referenceEn: "\\"Scarface\\" (1983, Brian De Palma) Tony Montana; \\"Narcos\\" (2015, Carlo Bernard et al.) Pablo Escobar"'
    ],
    "hacker_black": [
        'reference: "《黑客帝国》(1999, 沃卓斯基姐妹) 尼奥；《我是谁：没有绝对安全的系统》(2014, 巴伦·博·欧达尔) 本杰明",',
        'referenceEn: "\\"The Matrix\\" (1999, The Wachowskis) Neo; \\"Who Am I\\" (2014, Baran bo Odar) Benjamin"'
    ],
    "smuggler": [
        'reference: "《星球大战：新希望》(1977, 乔治·卢卡斯) 韩·索罗；《战争之王》(2005, 安德鲁·尼科尔) 尤里·奥尔洛夫",',
        'referenceEn: "\\"Star Wars: Episode IV\\" (1977, George Lucas) Han Solo; \\"Lord of War\\" (2005, Andrew Niccol) Yuri Orlov"'
    ],
    "con_artist": [
        'reference: "《猫鼠游戏》(2002, 史蒂文·斯皮尔伯格) 弗兰克·阿巴内尔；《骗中骗》(1973, 乔治·罗伊·希尔) 亨利·冈多夫",',
        'referenceEn: "\\"Catch Me If You Can\\" (2002, Steven Spielberg) Frank Abagnale; \\"The Sting\\" (1973, George Roy Hill) Henry Gondorff"'
    ],
    "gang_leader": [
        'reference: "《教父》(1972, 弗朗西斯·福特·科波拉) 维托·柯里昂；《美国黑帮》(2007, 雷德利·斯科特) 弗兰克·卢卡斯",',
        'referenceEn: "\\"The Godfather\\" (1972, Francis Ford Coppola) Vito Corleone; \\"American Gangster\\" (2007, Ridley Scott) Frank Lucas"'
    ],
    "forger": [
        'reference: "《无双》(2018, 庄文强) 李问；《伪造者》(2014, 菲利普·马丁) 雷蒙德·卡特",',
        'referenceEn: "\\"Project Gutenberg\\" (2018, Felix Chong) Lee Man; \\"The Forger\\" (2014, Philip Martin) Raymond Cutter"'
    ],
    "fence": [
        'reference: "《偷拐抢骗》(2000, 盖·里奇) 头目“砖头”；《疾速追杀2》(2017, 查德·斯塔赫斯基) 鲍厄里之王",',
        'referenceEn: "\\"Snatch\\" (2000, Guy Ritchie) Brick Top; \\"John Wick: Chapter 2\\" (2017, Chad Stahelski) The Bowery King"'
    ],
    "getaway_driver": [
        'reference: "《亡命驾驶》(2011, 尼古拉斯·温丁·雷弗恩) 车手；《极盗车神》(2017, 埃德加·赖特) 宝宝",',
        'referenceEn: "\\"Drive\\" (2011, Nicolas Winding Refn) The Driver; \\"Baby Driver\\" (2017, Edgar Wright) Baby"'
    ],
    "pimp": [
        'reference: "《出租车司机》(1976, 马丁·斯科塞斯) 马修（运动客）；《街头霸王》(2005, 克雷格·布鲁尔) 迪杰",',
        'referenceEn: "\\"Taxi Driver\\" (1976, Martin Scorsese) Matthew \'Sport\'; \\"Hustle & Flow\\" (2005, Craig Brewer) Djay"'
    ],
    "gambler": [
        'reference: "《赌神》(1989, 王晶) 高进；《决战21点》(2008, 罗伯特·路克蒂克) 本·坎贝尔",',
        'referenceEn: "\\"God of Gamblers\\" (1989, Wong Jing) Ko Chun; \\"21\\" (2008, Robert Luketic) Ben Campbell"'
    ],
    "bookie": [
        'reference: "《原钻》(2019, 萨弗迪兄弟) 霍华德·拉特纳；《浴血黑帮》(2013, 柯尔姆·麦卡锡等) 汤米·谢尔比",',
        'referenceEn: "\\"Uncut Gems\\" (2019, Safdie Brothers) Howard Ratner; \\"Peaky Blinders\\" (2013, Colm McCarthy et al.) Tommy Shelby"'
    ],
    "cleaner_crime": [
        'reference: "《低俗小说》(1994, 昆汀·塔伦蒂诺) 温斯顿·沃夫；《疾速追杀》(2014, 查德·斯塔赫斯基) 查理",',
        'referenceEn: "\\"Pulp Fiction\\" (1994, Quentin Tarantino) Winston Wolfe; \\"John Wick\\" (2014, Chad Stahelski) Charlie"'
    ],
    "info_broker": [
        'reference: "《权力的游戏》(2011, 蒂莫西·范·帕腾等) 瓦里斯；《黑客帝国》(1999, 沃卓斯基姐妹) 塞弗",',
        'referenceEn: "\\"Game of Thrones\\" (2011, Timothy Van Patten et al.) Lord Varys; \\"The Matrix\\" (1999, The Wachowskis) Cypher"'
    ],
    "grave_robber": [
        'reference: "《夺宝奇兵》(1981, 史蒂文·斯皮尔伯格) 印第安纳·琼斯；《木乃伊》(1999, 斯蒂芬·索莫斯) 理查·奥康纳",',
        'referenceEn: "\\"Raiders of the Lost Ark\\" (1981, Steven Spielberg) Indiana Jones; \\"The Mummy\\" (1999, Stephen Sommers) Rick O\'Connell"'
    ]
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

update_file(file_a, replacements_a)
update_file(file_b, replacements_b)
print("done")
