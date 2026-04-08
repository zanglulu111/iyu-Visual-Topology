import os
import re

def process_file(filepath, replacements):
    with open(filepath, 'r') as f:
        content = f.read()
    
    for core_en_target, ref_cn, ref_en in replacements:
        replacement = f'{core_en_target}\n      reference: "{ref_cn}",\n      referenceEn: "{ref_en}",'
        content = content.replace(core_en_target, replacement)
        
    with open(filepath, 'w') as f:
        f.write(content)

# Define replacements for group_a
reps_a = [
    # 0 primordial_chaos
    ('coreEn: "Zero-sum game between chaotic natural forces and budding order. | Anchor ($): M2 Aesthetic-Chaos",',
     '《火之战》(1981, 让-雅克·阿诺) / 《创世纪》(2016, 乔希·保罗)', 
     '\\"Quest for Fire\\" (1981, Jean-Jacques Annaud) / \\"Genesis\\" (2016, Josh Polon)'),
    # 1 golden_age
    ('coreEn: "The eve of breaking perfect stasis. Thirst for taboo and premonition of losing Paradise. | Anchor ($): M4 Absolute_Suture",',
     '《新世界》(2005, 泰伦斯·马力克) / 《阿凡达》(2009, 詹姆斯·卡梅隆)',
     '\\"The New World\\" (2005, Terrence Malick) / \\"Avatar\\" (2009, James Cameron)'),
    # 2 stone_age_logic
    ('coreEn: "Fragile flesh vs Cold environment. Worship of fire is the first thirst for reason. | Anchor ($): M1 Flesh_Lack",',
     '《史前一万年》(2008, 罗兰·艾默里奇) / 《阿尔法：狼伴归途》(2018, 艾尔伯斯·休斯)',
     '\\"10,000 BC\\" (2008, Roland Emmerich) / \\"Alpha\\" (2018, Albert Hughes)'),
    # 3 neolithic_shaman
    ('coreEn: "Material scarcity vs spirit channeling. Sacrifice becomes the symbolic law for power distribution. | Anchor ($): M4 Ghostly_Other",',
     '《圣山》(1973, 亚历桑德罗·佐杜洛夫斯基) / 《启示》(2006, 梅尔·吉布森)',
     '\\"The Holy Mountain\\" (1973, Alejandro Jodorowsky) / \\"Apocalypto\\" (2006, Mel Gibson)'),
    # 4 bronze_collapse
    ('coreEn: "Vain individual dignity mid systemic collapse. The Other (God/Empire) massively crashes. | Anchor ($): M4 Absence_of_Other",',
     '《特洛伊》(2004, 沃尔夫冈·彼德森) / 《出埃及记：神明与国王》(2014, 雷德利·斯科特)',
     '\\"Troy\\" (2004, Wolfgang Petersen) / \\"Exodus: Gods and Kings\\" (2014, Ridley Scott)'),
    # 5 egypt_old_theo
    ('coreEn: "Brief breath vs Eternal stone. Massive sense of scale oppressing each tiny individual. | Anchor ($): M4 Totalitarian_Colossus",',
     '《法老神兵》(1955, 霍华德·霍克斯) / 《神战：权力之眼》(2016, 亚历克斯·普罗亚斯)',
     '\\"Land of the Pharaohs\\" (1955, Howard Hawks) / \\"Gods of Egypt\\" (2016, Alex Proyas)'),
    # 6 sumerian_clay
    ('coreEn: "Rule of symbol systems. Humans first recorded on \'bills\', identities digitally alienated. | Anchor ($): M4 Abstract_Contract",',
     '《吉尔伽美什史诗》(1976, The Brothers Quay, 动画短片) / 《人类之城》(2010, 纪录片)',
     '\\"This Unnameable Little Broom\\" (1985, Brothers Quay) / \\"Civilisations\\" (2018, BBC)'),
    # 7 shanhai_myth
    ('coreEn: "Collective will forged by \'Flood-taming/Sun-shooting\'. Heroic epic against nature. | Anchor ($): M5 Sisyphus_Vector",',
     '《封神第一部：朝歌风云》(2023, 乌尔善) / 《刺客聂隐娘》(2015, 侯孝贤)',
     '\\"Creation of the Gods I: Kingdom of Storms\\" (2023, Wuershan) / \\"The Assassin\\" (2015, Hou Hsiao-Hsien)'),
    # 8 maya_blood
    ('coreEn: "Heavy blood tax for group survival. Altruism under religious zeal. | Anchor ($): M1 Atonement_Engine",',
     '《启示》(2006, 梅尔·吉布森) / 《太阳王》(1963, J·李·汤普森)',
     '\\"Apocalypto\\" (2006, Mel Gibson) / \\"Kings of the Sun\\" (1963, J. Lee Thompson)'),
    # 9 norse_ragnarok
    ('coreEn: "Aesthetics of being-towards-death. Knowing the end is nigh, choosing tragic freedom to fight anyway. | Anchor ($): M0 Fatal_Topology",',
     '《北欧人》(2022, 罗伯特·艾格斯) / 《维京传奇》(2013-2020, 剧集)',
     '\\"The Northman\\" (2022, Robert Eggers) / \\"Vikings\\" (2013-2020, Series)'),
    # 10 atlantis_hubris
    ('coreEn: "Tech vs Moral imbalance. Destruction when wielding divine power without greed control. | Anchor ($): M6 Transgression_Limit",',
     '《亚特兰蒂斯：失落的帝国》(2001, 迪士尼) / 《海王》(2018, 温子仁)',
     '\\"Atlantis: The Lost Empire\\" (2001, Gary Trousdale) / \\"Aquaman\\" (2018, James Wan)'),
    # 11 babylon_tower
    ('coreEn: "Severance of communication. The impossibility between cultures and the Other\'s punishment. | Anchor ($): M4 Linguistic_Scatter",',
     '《巴别塔》(2006, 亚历杭德罗·冈萨雷斯·伊纳里图) / 《亚历山大大帝》(2004, 奥利佛·斯通)',
     '\\"Babel\\" (2006, Alejandro G. Iñárritu) / \\"Alexander\\" (2004, Oliver Stone)'),
    # 12 lemuria_lost
    ('coreEn: "Sensory atrophy. How a society linked by empathy crumbles before violence. | Anchor ($): M1 Barrier_Defect",',
     '《云图》(2012, 沃卓斯基姐妹) / 《深海》(2023, 田晓鹏)',
     '\\"Cloud Atlas\\" (2012, The Wachowskis) / \\"Deep Sea\\" (2023, Tian Xiaopeng)'),
    # 13 mu_continent
    ('coreEn: "Power fossilization. A perfect hierarchy wiped out by disaster overnight. | Anchor ($): M4 Hierarchy_Rigidity",',
     '《黄金国》(2000, 埃里克·贝热龙) / 《太阳帝国》(1987, 史蒂文·斯皮尔伯格)',
     '\\"The Road to El Dorado\\" (2000, Eric Bergeron) / \\"Empire of the Sun\\" (1987, Steven Spielberg)'),
    # 14 hyperborea
    ('coreEn: "Boredom of immortality. In a perfect environment, how is subject drive sparked? | Anchor ($): M5 Drive_Vacuum",',
     '《第五元素》(1997, 吕克·贝松) / 《萨杜斯》(1974, 约翰·保曼)',
     '\\"The Fifth Element\\" (1997, Luc Besson) / \\"Zardoz\\" (1974, John Boorman)'),
]

process_file('/Users/lujiaqi/Desktop/【迷雾学派】爱欲视觉拓扑学 2-24版/data/engine_surface/SUR2/group_a.ts', reps_a)

reps_b = [
    # 0 athens_agora
    ('coreEn: "Reason vs populism. Intellect fragile. | Anchor ($): M3 Sophistry_Hole",',
     '《亚历山大大帝》(2004, 奥利佛·斯通) / 《300勇士》(2006, 扎克·施奈德)',
     '\\"Alexander\\" (2004, Oliver Stone) / \\"300\\" (2006, Zack Snyder)'),
    # 1 sparta_agoge
    ('coreEn: "Honor vs lost kinship. Repressed desire finds exit. | Anchor ($): M1 Flesh_Cooptation",',
     '《300勇士》(2006, 扎克·施奈德) / 《角斗士》(2000, 雷德利·斯科特)',
     '\\"300\\" (2006, Zack Snyder) / \\"Gladiator\\" (2000, Ridley Scott)'),
    # 2 rome_republic_late
    ('coreEn: "Republic decay vs ambition. Vacuum of failed rules. | Anchor ($): M4 Law_Necrosis",',
     '《罗马》(2005-2007, 剧集) / 《斯巴达克斯》(1960, 斯坦利·库布里克)',
     '\\"Rome\\" (2005-2007, Series) / \\"Spartacus\\" (1960, Stanley Kubrick)'),
    # 3 nero_insanity
    ('coreEn: "Pathological aesthetics vs scapegoats. Revelry. | Anchor ($): M6 Pathological_Revelry",',
     '《暴君焚城录》(1951, 茂文·勒鲁瓦) / 《卡里古拉》(1979, 丁度·巴拉斯)',
     '\\"Quo Vadis\\" (1951, Mervyn LeRoy) / \\"Caligula\\" (1979, Tinto Brass)'),
    # 4 qin_legalism
    ('coreEn: "State machine efficiency vs personal terracottization. | Anchor ($): M4 Absolute_Grid",',
     '《英雄》(2002, 张艺谋) / 《大秦帝国》(2009-2020, 剧集)',
     '\\"Hero\\" (2002, Zhang Yimou) / \\"The Qin Empire\\" (2009-2020, Series)'),
    # 5 han_frontier
    ('coreEn: "Pioneering violence vs lonely blood dilution. | Anchor ($): M5 Endless_Expedition",',
     '《天将雄师》(2015, 李仁港) / 《牧马人》(1982, 谢晋)',
     '\\"Dragon Blade\\" (2015, Daniel Lee) / \\"The Herdsman\\" (1982, Xie Jin)'),
    # 6 three_kingdoms_loyalty
    ('coreEn: "Loyalty paradox. Micro-covenant replaces supreme law. | Anchor ($): M5 Romantic_Projection",',
     '《赤壁》(2008, 吴宇森) / 《大军师司马懿之军师联盟》(2017, 剧集)',
     '\\"Red Cliff\\" (2008, John Woo) / \\"The Advisors Alliance\\" (2017, Series)'),
    # 7 persian_lux
    ('coreEn: "Fragile multi-cultural fusion & redundancy. | Anchor ($): M4 Complex_Labyrinth",',
     '《波斯王子：时之刃》(2010, 迈克·内威尔) / 《亚历山大大帝》(2004, 奥利佛·斯通)',
     '\\"Prince of Persia: The Sands of Time\\" (2010, Mike Newell) / \\"Alexander\\" (2004, Oliver Stone)'),
    # 8 byzantium_intrigue
    ('coreEn: "Peak formalism. Complexity paralyzes action. | Anchor ($): M3 Endless_Signifiers",',
     '《帝国崛起：奥斯曼》(2020, 剧集) / 《天国王朝》(2005, 雷德利·斯科特)',
     '\\"Rise of Empires: Ottoman\\" (2020, Series) / \\"Kingdom of Heaven\\" (2005, Ridley Scott)'),
    # 9 maya_collapse
    ('coreEn: "Faith bankrupt and sudden liquefaction of social contract. | Anchor ($): M4 Symbolic_Offline",',
     '《启示》(2006, 梅尔·吉布森) / 《珍爱泉源》(2006, 达伦·阿伦诺夫斯基)',
     '\\"Apocalypto\\" (2006, Mel Gibson) / \\"The Fountain\\" (2006, Darren Aronofsky)'),
    # 10 alexander_reach
    ('coreEn: "Violent culture hybrid. Arrogant crossing. | Anchor ($): M6 Assimilation_Abyss",',
     '《亚历山大大帝》(2004, 奥利佛·斯通) / 《王者传奇》(2006, 凯文·雷诺兹)',
     '\\"Alexander\\" (2004, Oliver Stone) / \\"Tristan & Isolde\\" (2006, Kevin Reynolds)'),
    # 11 ancient_carthage
    ('coreEn: "Cold commerce vs fanatic loyalty. | Anchor ($): M1 Scalp_Trade",',
     '《汉尼拔步步进逼》(2006, 纪录电影) / 《卡比利亚》(1914, 乔瓦尼·帕斯特洛纳)',
     '\\"Hannibal: Rome\'s Worst Nightmare\\" (2006, BBC) / \\"Cabiria\\" (1914, Giovanni Pastrone)'),
    # 12 pre_islam_desert
    ('coreEn: "Chaotic revenge vs unity thirst. | Anchor ($): M4 Format_Hunger",',
     '《阿拉伯的劳伦斯》(1962, 大卫·里恩) / 《上帝的使者》(1976, 穆斯塔法·阿卡德)',
     '\\"Lawrence of Arabia\\" (1962, David Lean) / \\"The Message\\" (1976, Moustapha Akkad)'),
    # 13 aztec_tenochtitlan
    ('coreEn: "Cruel cosmos inversion. Everyday psych of holy slaughter. | Anchor ($): M5 Perverted_Devotion",',
     '《新世界》(2005, 泰伦斯·马力克) / 《向死而生》(2015, 短片)',
     '\\"The New World\\" (2005, Terrence Malick) / \\"Day of the Dead\\" (2015, Short)'),
    # 14 incan_quipu
    ('coreEn: "Silent numeric mgmt. Evaporation of personality. | Anchor ($): M4 Data_Cage",',
     '《阿基尔，上帝的愤怒》(1972, 沃纳·赫尔佐格) / 《皇家太阳捕猎》(1969, 欧文·勒纳)',
     '\\"Aguirre, the Wrath of God\\" (1972, Werner Herzog) / \\"The Royal Hunt of the Sun\\" (1969, Irving Lerner)'),
    # 15 shang_oracle
    ('coreEn: "Human-ghost negotiation. Extreme terror under shaman-kings. | Anchor ($): M4 Blood_Spirits",',
     '《封神第一部：朝歌风云》(2023, 乌尔善) / 《英雄》(2002, 张艺谋)',
     '\\"Creation of the Gods I: Kingdom of Storms\\" (2023, Wuershan) / \\"Hero\\" (2002, Zhang Yimou)'),
    # 16 indus_valley_plumb
    ('coreEn: "Utopian dead water. Hollow peace from missing totems. | Anchor ($): M1 Extreme_Uniformity",',
     '《摩亨朱-达罗》(2016, 阿素托史·哥瓦力克) / 《乌托邦》(2013-2014, 剧集)',
     '\\"Mohenjo Daro\\" (2016, Ashutosh Gowariker) / \\"Utopia\\" (2013-2014, Series)'),
    # 17 celtic_druids
    ('coreEn: "Savage spirit. Refuses co-opt by solid sumbolic logic. | Anchor ($): M4 Symbol_Refusal",',
     '《不列颠尼亚》(2018-2021, 剧集) / 《绿衣骑士》(2021, 大卫·洛维)',
     '\\"Britannia\\" (2018-2021, Series) / \\"The Green Knight\\" (2021, David Lowery)'),
    # 18 maurya_ashoka
    ('coreEn: "Violence stop paradox. Ascetic hypocrisy post bloodbath. | Anchor ($): M1 Bloody_Whitewashing",',
     '《阿育王》(2001, 桑托什·斯万) / 《巴霍巴利王：开端》(2015, S·S·拉贾穆里)',
     '\\"Aśoka\\" (2001, Santosh Sivan) / \\"Baahubali: The Beginning\\" (2015, S. S. Rajamouli)'),
    # 19 minoa_labyrinth
    ('coreEn: "Matriarchal myth crash. Nature dimension-drop on civ. | Anchor ($): M2 Doomsday_Whisper",',
     '《惊天战神》(2011, 塔西姆·辛) / 《亚特兰蒂斯》(2013-2015, 剧集)',
     '\\"Immortals\\" (2011, Tarsem Singh) / \\"Atlantis\\" (2013-2015, Series)')
]

process_file('/Users/lujiaqi/Desktop/【迷雾学派】爱欲视觉拓扑学 2-24版/data/engine_surface/SUR2/group_b.ts', reps_b)
