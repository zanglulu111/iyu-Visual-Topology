import os

data_c = {
    "feudal_system": [
        'reference: "《权力的游戏》用冰狼旗帜死锁效忠、农民只能如蚁随主赴死的北境；《勇敢的心》英王向贵族分赐初夜权死死压制底层血脉的泥沼。",',
        'referenceEn: "\\"Game of Thrones\\" North bound by wolf banners where peasants die for lords; \\"Braveheart\\" England enforcing prima nocte."'
    ],
    "caste_system": [
        'reference: "《白虎》生为低种姓只能世代为地主洗脚连妄想反抗都受罪恶感折磨的底层；《雪国列车》按车厢定命、尾厢只配吃蟑螂膏的钢铁等级线。",',
        'referenceEn: "\\"The White Tiger\\" low-caste born to wash masters\' feet forever; \\"Snowpiercer\\" a steel train dividing humanity by cars."'
    ],
    "ancestor_worship": [
        'reference: "《大红灯笼高高挂》用“陈院规矩”将女人们锁成争风互害活鬼的枯井祖宅；《仲夏夜惊魂》盲从祖先轮舞用血腥残杀献祭活人的死循环村庄。",',
        'referenceEn: "\\"Raise the Red Lantern\\" ancestral rules locking women as ghosts in a dry well; \\"Midsommar\\" a village repeating bloody ancestral loops."'
    ],
    "empire_colonial": [
        'reference: "《赛德克·巴莱》用礼仪学校与枪炮按头让原住民屈作苦力的太阳旗；《启示录》外洋帆船携着火铳登陆瞬间宣告丛林法则终结的巨影。",',
        'referenceEn: "\\"Seediq Bale\\" forcing natives into logging via civilized schools and guns; \\"Apocalypto\\" Spanish galleons ending jungle law."'
    ],
    "nomadic_tribe": [
        'reference: "《沙丘》视水为生命极度狂热、在深空死漠驾驭巨虫饮血求生的弗雷曼人；《疯狂的麦克斯2》驾着拼装油罐车在黄沙中逐汽油的狂野部族。",',
        'referenceEn: "\\"Dune\\" fierce Fremen riding giant worms hoarding water in deserts; \\"Mad Max 2\\" wild tribes chasing guzzoline across wasteland ruins."'
    ],
    "matriarchy": [
        'reference: "《疯狂的麦克斯4》骑着机车只留女性枪手传承神枪种子的众母部落；《降临》以非线性语言包容宇宙、摒弃单向暴力的七肢桶母神式文明。",',
        'referenceEn: "\\"Mad Max 4\\" female sharpshooter matriarchs preserving seeds on bikes; \\"Arrival\\" Heptapods embracing non-linear matriarchal consciousness."'
    ],
    "secret_society": [
        'reference: "《疾速追杀》用金币与血誓封印杀手、破铁律便遭全网死决的大陆酒店；《搏击俱乐部》从地下黑拳变为炸毁信用卡大厦的无名猴群。",',
        'referenceEn: "\\"John Wick\\" the Continental bound by gold coins and blood oaths; \\"Fight Club\\" underground monkeys morphing into Project Mayhem."'
    ],
    "island_community": [
        'reference: "《柳条人》全岛欢唱民谣将警官锁入巨型草人活烧的异教社群；《灯塔》与世隔绝被怒海与死海鸥逼得守塔人伦常全丧的疯魔孤礁。",',
        'referenceEn: "\\"The Wicker Man\\" islanders singing hymns burning a cop in a straw idol; \\"The Lighthouse\\" madness consuming isolated wickies."'
    ],
    "warrior_culture": [
        'reference: "《斯巴达300勇士》掷死畸婴、唯尊肌肉以战死为终极美学的血红城邦；《阿凡达》以降服飞龙为成人礼、将伤痕视作图腾的纳美武士。",',
        'referenceEn: "\\"300\\" crimson city throwing weak infants worshipping muscle; \\"Avatar\\" Na\'vi warriors wearing scars as totems honoring dragon-taming."'
    ],
    "court_intrigue": [
        'reference: "《宠儿》用华服泥浆战掩盖女王床榻权力倾轧的极度窒息深宫；《沙丘2》帕迪沙皇帝帐下不发一枪便微笑定夺行星生杀的算计。",',
        'referenceEn: "\\"The Favourite\\" Versailles-like courts using mud-fights to mask royal politics; \\"Dune 2\\" the Emperor smilingly dooming a planet."'
    ],
    "agrarian_commune": [
        'reference: "《仲夏夜惊魂》表面长桌共享阳光实则毫无隐私集体作恶的畸笑农居；《小森林》完全依附四季刻度剥除城市杂念的纯素绝缘村落。",',
        'referenceEn: "\\"Midsommar\\" a smiling commune sharing tables enforcing horrific collective crimes; \\"Little Forest\\" absolute agrarian reliance stripping ego."'
    ],
    "vassal_state": [
        'reference: "《沙丘》被迫向皇帝死交定额香料换取存活榨干全族的厄拉科斯采臣；《饥饿游戏》12区每年如抽签献上童子参加死斗以跪谢都城恩典。",',
        'referenceEn: "\\"Dune\\" Arrakis squeezing planetary veins to meet Emperor\'s spice quotas; \\"Hunger Games\\" 12th District offering tribute-teens."'
    ]
}

data_d = {
    "algocracy": [
        'reference: "《心理测量者》西比拉系统纯靠脑波扫瞄判定犯罪并当街爆头的乌托邦；《少数派报告》先知联网锁定预谋杀人尚未动刀便沦阶下囚的秩序。",',
        'referenceEn: "\\"Psycho-Pass\\" Sybil System executing citizens on the street via brainwave scan; \\"Minority Report\\" precogs sealing fate before the knife drops."'
    ],
    "hive_mind": [
        'reference: "《黑客帝国3》亿万只机械乌贼如液态铁流般毫无畏惧涌孔绞杀锡安；《星际迷航》将俘虏强行插管抹除“我”唯听女皇主导的博格集体。",',
        'referenceEn: "\\"The Matrix 3\\" millions of squids flowing like liquid iron to crush Zion; \\"Star Trek\\" the Borg plugging individuals eradicating the \'I\'."'
    ],
    "post_scarcity": [
        'reference: "《星际迷航》食物合成机解决极度饥渴逼迫人类向外搜寻意义的联邦；《机器人总动员》全人类变胖瘫在悬浮椅上连走路都丧失意义的飞船。",',
        'referenceEn: "\\"Star Trek\\" replicators curing hunger pushing humanity to seek meaning in space; \\"WALL-E\\" fat humans glued to hover-chairs losing leg functions."'
    ],
    "transhumanist_caste": [
        'reference: "《极乐空间》富豪在绝净太空站秒除百病而下方脏球穷人只配拼死望天；《阿丽塔》狂换机电武装视纯肉身如下等蝼蚁的狂客与神民。",',
        'referenceEn: "\\"Elysium\\" elites curing cancer instantly in orbit while Earth dwellers rot; \\"Alita\\" cyborgs viewing pure flesh as lower-caste ants."'
    ],
    "virtual_matrix": [
        'reference: "《黑客帝国》亿万肉体泡在红胶池沦为干电池而大脑永远沉醉于1999的恐怖；《异次元骇客》发现世界边界不过是层层虚假的荧光绿乱码。",',
        'referenceEn: "\\"The Matrix\\" billions soaked in red gel dreaming of 1999 feeding machines; \\"The Thirteenth Floor\\" reality ending in green wireframes."'
    ],
    "the_zoo": [
        'reference: "《西部世界》残暴富家客肆意烧杀仿生牛仔仅为消遣爽快发泄的游乐场；《林中小屋》地下白领通过暗箱疯狂操纵死法供古神观赏的牢笼。",',
        'referenceEn: "\\"Westworld\\" elite guests slaughtering androids for pure recreational venting; \\"The Cabin in the Woods\\" admins rigging deaths to entertain Ancient Gods."'
    ],
    "techno_nomads": [
        'reference: "《辐射》靠捡瓶盖换废土可乐拿旧世纪电路板凑废铁枪射螃蟹的流浪者；《沙丘》穿精密蒸馏服却拿冷兵器在黑箱技术边缘博命的幽灵。",',
        'referenceEn: "\\"Fallout\\" wastelanders using bottle caps and salvaged circuitry to shoot mutants; \\"Dune\\" survivalists wearing high-tech stillsuits fighting with knives."'
    ],
    "cloning_society": [
        'reference: "《月球》在基地后发现无数个休眠舱中自己复制体的绝望背锅矿工；《逃出克隆岛》以为会去绝美小岛实则全被拉去挖脏换肝的悲惨备份。",',
        'referenceEn: "\\"Moon\\" an isolated miner finding rows of his own clones ready to replace him; \\"The Island\\" clones dragged away for organ harvesting."'
    ],
    "uploaded_consciousness": [
        'reference: "《黑镜：圣朱尼佩洛》拔管死绝肉身将神思长传至永恒80年代斑斓网城的女姬；《超验骇客》死去教授化为吞噬全球掌控纳米神力的云端黑眼。",',
        'referenceEn: "\\"Black Mirror: San Junipero\\" plugging into a neon server leaving dead bodies; \\"Transcendence\\" a dead man\'s mind becoming an omnipotent nano-cloud."'
    ],
    "biopunk_society": [
        'reference: "《未来罪行》把解剖当街头秀让肉体长出无用新器的极核异化艺术；《灭绝》异星微光中动植物乃至人类内脏被疯魔重组如菌菇爆发的折叠区。",',
        'referenceEn: "\\"Crimes of the Future\\" public surgeries carving out new useless organs as art; \\"Annihilation\\" shimmer mutating DNA into bizarre colorful blooms."'
    ],
    "android_apartheid": [
        'reference: "《银翼杀手2049》被当警犬防范却含泪望雪生出灵魂悸动的数字奴隶K；《底特律：变人》拥有泪腺却只能按死规站在公车最后排的机体黑户。",',
        'referenceEn: "\\"Blade Runner 2049\\" replicant cops crying at the snow discovering souls; \\"Detroit: Become Human\\" crying androids forced to stand at the back of buses."'
    ],
    "space_colony_mil": [
        'reference: "《星河战队》巨舰下洗脑全军冲向虫兽海只为赢取公民证的人肉弹；《异形2》全副武装深入大气处理器极渊盲扫惨被酸血全灭的深空陆战队。",',
        'referenceEn: "\\"Starship Troopers\\" brainwashed grunts charging bugs to earn citizenship; \\"Aliens\\" space marines marching into terraformers getting melted by acid blood."'
    ]
}

def update_file(filename, data):
    import re
    with open(filename, "r") as f:
        content = f.read()

    for item_id, references in data.items():
        pattern = f'(id:\s*"{item_id}"[\s\S]*?coreEn:\s*".*?",)'
        match = re.search(pattern, content)
        if match:
            original = match.group(1)
            if 'reference:' not in original:
                replacement = original + f'\n      {references[0]}\n      {references[1]}'
                content = content.replace(original, replacement)
    
    with open(filename, "w") as f:
        f.write(content)

base_dir = "/Users/lujiaqi/Desktop/【迷雾学派】爱欲视觉拓扑学 2-24版/data/engine_surface/SUR4"
update_file(f"{base_dir}/group_c.ts", data_c)
update_file(f"{base_dir}/group_d.ts", data_d)

print("SUR4 C and D updated.")
