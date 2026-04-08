import os

data_e = {
    "warlordism": [
        'reference: "《疯狂的麦克斯4》垄断水资源踩在废土死尸上称王的不死野堡；《北斗神拳》用暴力强抢水源食物谁拳头大谁即为国法的废土军阀。",',
        'referenceEn: "\\"Mad Max: Fury Road\\" Immortan Joe building a kingdom on water; \\"Fist of the North Star\\" warlords using fists as ultimate law."'
    ],
    "failed_state": [
        'reference: "《上帝之城》连警察都不敢进入全靠毒枭持斧砍杀定矩的无间贫民窟；《黑鹰坠落》军阀乱战饿殍遍野满街拿AK扫射的索马里修罗场。",',
        'referenceEn: "\\"City of God\\" favelas where cops fear to tread and cartel bullets make laws; \\"Black Hawk Down\\" Somalia plunging into chaotic slaughter."'
    ],
    "anarchy_zone": [
        'reference: "《攻壳机动队》逼仄湿冷无人收尸却能非法买卖最高端机体芯片的暗巷；《极乐空间》地球表面完全失控只剩黑帮火拼走私医疗的废城。",',
        'referenceEn: "\\"Ghost in the Shell\\" cramped alleys trading cutting-edge chips and corpses; \\"Elysium\\" LA reduced to gang slums hacking med-bays."'
    ],
    "tribalism_post_apoc": [
        'reference: "《疯狂的麦克斯3》披着兽皮将坠毁飞机机长奉为图腾狂热献祭的迷失小孩；《地平线》把高能电缆当发饰对机器巨兽遗骸跪拜的猎手。",',
        'referenceEn: "\\"Mad Max 3\\" feral kids worshipping a crashed pilot as a god; \\"Horizon Zero Dawn\\" primitive hunters kneeling to dead machines."'
    ],
    "frontier_town": [
        'reference: "《荒野大镖客》风沙中警长被吊死只唯左轮快慢判生死的狂野西部荒镇；《萤火虫》在星系边缘无政府管辖全凭走私客与黑枪自保的客栈。",',
        'referenceEn: "\\"A Fistful of Dollars\\" dusty boomtowns where quick draws replace law; \\"Firefly\\" outer-rim space taverns surviving on smuggle-guns."'
    ],
    "criminal_underworld": [
        'reference: "《疾速追杀》用铸金血币作绝对货币一旦违纪便遭全城猎杀的大陆酒店；《教父》白天衣冠楚楚深夜却用断马头和私刑裁决生死的家族。",',
        'referenceEn: "\\"John Wick\\" hitmen exchanging gold coins under absolute High Table rules; \\"The Godfather\\" tailored dons ordering horse-head executions."'
    ],
    "quarantine_zone": [
        'reference: "《逃出纽约》曼哈顿被高墙堵死成为犯人自生自灭的极致黑界；《第九区》铁丝网焊死任由外星难民在垃圾堆里买猫粮的衰败隔离网。",',
        'referenceEn: "\\"Escape from New York\\" Manhattan walled off as a terminal thug-prison; \\"District 9\\" aliens fenced in feeding on cat food in camps."'
    ],
    "scavenger_world": [
        'reference: "《阿丽塔》在天空城倒下的垃圾瀑布翻找机械残肢勉强拼凑度日的废铁城；《头号玩家》现实破败人们只能在废集装箱高塔沉迷VR。",',
        'referenceEn: "\\"Alita\\" dwellers picking cybernetic limbs from Zalem\'s trash waterfalls; \\"Ready Player One\\" trailer-park scavengers stacked in rusty towers."'
    ],
    "mercenary_state": [
        'reference: "《合金装备》战争成唯一经济支柱所有士兵明码标价只为不同大国扣动扳机；《第九区》跨国安保公司驾驶机甲毫无怜悯开火强拆的武装。",',
        'referenceEn: "\\"Metal Gear Solid\\" PMCs making war a global economy with price-tagged soldiers; \\"District 9\\" MNU mercenaries driving mechs bulldozing refugees."'
    ],
    "refugee_camp": [
        'reference: "《人类之子》将偷渡客如牲畜锁进铁笼塞爆破败大楼绝望待产的集中营；《第九区》将外星大虾像害虫一样赶入彩钢瓦棚区任其腐烂。",',
        'referenceEn: "\\"Children of Men\\" immigrants caged like cattle in rubble awaiting doom; \\"District 9\\" insect-aliens forced into squalid shanties rotting."'
    ],
    "mobile_city": [
        'reference: "《掠食城市》伦敦化作装配巨型履带喷吐黑烟如同野兽吞噬小镇的钢铁狂兽；《哈尔的移动城堡》拼凑而在荒原步履蹒跚躲避战火的怪屋。",',
        'referenceEn: "\\"Mortal Engines\\" London converted into a massive treaded beast eating towns; \\"Howl\'s Moving Castle\\" a junk-built walking fortress escaping war."'
    ],
    "underground_resistance": [
        'reference: "《终结者》在废墟吃着老鼠绝望向天网扔出电磁炸弹的人类残军；《黑客帝国》藏在深层地心驾驶气垫船拼死冲撞机器乌贼包围网的反叛者。",',
        'referenceEn: "\\"The Terminator\\" starved humans throwing EMPs at Skynet in ruins; \\"The Matrix\\" Zion rebels fighting liquid-iron squid swarms underground tunnels."'
    ]
}

data_f = {
    "eco_utopia": [
        'reference: "《阿凡达》纳美人连脑神经都与神树相连毫无重工唯余和谐的潘多拉雨林；《疯狂的麦克斯4》绿洲老母亲在子弹带里珍藏绿种绝望期盼的复苏。",',
        'referenceEn: "\\"Avatar\\" Na\'vi neural-linked to the Tree of Souls in absolute harmony; \\"Mad Max 4\\" mothers hoarding green seeds in bullet belts dreaming of Eden."'
    ],
    "direct_democracy": [
        'reference: "《黑镜》网民凭推特标签热度随时降下机械杀人蜂将网暴对象爆头的狂欢；《奥维尔号》全网民按玻璃条赞踩直接判决切除脑叶的投票定罪。",',
        'referenceEn: "\\"Black Mirror\\" netizens tweeting hashtags to order drone assassinations; \\"The Orville\\" a planet voting via up/down buttons to lobotomize."'
    ],
    "anarcho_syndicalism": [
        'reference: "《美丽新世界》各司其职完美咬合实则个体完全被按岗定制的蜂巢流水线；《极乐迪斯科》哈里在废城面对大罢工与工会武装彻底停转的死锁。",',
        'referenceEn: "\\"Brave New World\\" castes perfectly meshing into an assembly-line utopia; \\"Disco Elysium\\" Martinaise frozen by a massive union strike."'
    ],
    "scientific_dictatorship": [
        'reference: "《撕裂的末日》每日按量注射冷酷液强行磨平情绪换取绝对秩序的独裁殿堂；《美丽新世界》试管编织基因清除一切阶级盲肠的优生实验室。",',
        'referenceEn: "\\"Equilibrium\\" clerics injecting emotion-suppressants daily to enforce order; \\"Brave New World\\" decanting humans from test tubes eliminating friction."'
    ],
    "artist_colony": [
        'reference: "《仲夏夜惊魂》披着白被花冠沉沦致幻最终微笑着把人烤熟的疯魔村庄；《裸体午餐》在毒品乱飞打字机变异成甲虫的狂乱幻像中崩坏的创作区。",',
        'referenceEn: "\\"Midsommar\\" flowered hippies drowning in hallucinogens ending in fiery sacrifices; \\"Naked Lunch\\" writers plunging into bug-hallucinations."'
    ],
    "religious_utopia": [
        'reference: "《使女的故事》全城强披红袍断眼割舌只为一个畸形纯净的原教旨狂热天堂；《寂静岭》信徒将防毒面具视为圣衣闭门烧死女巫以换取苟活的教堂。",',
        'referenceEn: "\\"The Handmaid\'s Tale\\" puritanical cleansing via red robes and amputations; \\"Silent Hill\\" cultists burning witches to stay pure in falling ash."'
    ],
    "libertarian_sea": [
        'reference: "《未来水世界》没有税收仅靠原始物物交换拿泥土当黄金的废钢浮岛海盗；《生化奇兵》不设底线疯狂变异滥用基因质体的极渊海底销魂城。",',
        'referenceEn: "\\"Waterworld\\" rusty floating atolls trading dirt for gold via pirate logic; \\"BioShock\\" Rapture city abandoning all ethics causing a plasmid collapse."'
    ],
    "mathematic_world": [
        'reference: "《我们》散步乃至性交统统用积分公式框死绝不容丝毫波动的多边形国度；《千钧一发》只看基因测算数值定阶层将人类完全压扁成数据的长廊。",',
        'referenceEn: "\\"We\\" walking and sex partners mapped by integrals in a polygon state; \\"Gattaca\\" glass halls reducing human worth to genetic numerical readouts."'
    ],
    "dream_share": [
        'reference: "《盗梦空间》现实极度破败贫民齐聚地下室连上线缆在集体潜意识醉生梦死；《黑客帝国》只愿沉浸在母体模拟甜腻牛排虚假中拒醒的背叛者。",',
        'referenceEn: "\\"Inception\\" destitute people packed in dens sharing IVs for eternal lucid dreams; \\"The Matrix\\" Cypher preferring the illusion of juicy steak over truth."'
    ],
    "no_death_society": [
        'reference: "《时间规划局》富人拥有漫漫光阴甚至厌倦到随意求死而穷人秒被夺寿的修罗场；《碳变》富豪把意识随意切换躯壳彻底失去对死亡敬畏的深渊。",',
        'referenceEn: "\\"In Time\\" immortal rich bored enough to beg for death; \\"Altered Carbon\\" elites hot-swapping clones losing all existential dread of mortality."'
    ],
    "genderless_society": [
        'reference: "《黑暗的左手》冬星人雌雄同体发情期才随机转变彻底抹除二元对立的平滑世界；《美丽新世界》切除子宫把男女降级为流水线上的光滑塑料玩具。",',
        'referenceEn: "\\"The Left Hand of Darkness\\" Gethenians biologically unsexed eradicating gender binary; \\"Brave New World\\" sterilization smoothing sexes into plastic toys."'
    ],
    "time_loop_society": [
        'reference: "《土拨鼠之日》被死锁在小镇无尽重复一天直到把自杀当喜剧实验的气象员；《明日边缘》每天醒来冲向沙滩惨遭外星怪砍碎千万次麻木重来的腥风。",',
        'referenceEn: "\\"Groundhog Day\\" a weatherman repeating one day treating suicide as comedy; \\"Edge of Tomorrow\\" dying brutally on the beach thousands of times daily."'
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
update_file(f"{base_dir}/group_e.ts", data_e)
update_file(f"{base_dir}/group_f.ts", data_f)

print("SUR4 E and F updated.")
