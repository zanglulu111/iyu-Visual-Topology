import os

data_a = {
    "absolute_monarchy": [
        'reference: "《末代皇帝》拥太和殿生杀大权、圣体即国法的孤绝真龙；《疯狂的麦克斯4》垄断水源将臣民视作血袋的不死老乔。",',
        'referenceEn: "\\"The Last Emperor\\" isolated emperor holding absolute power; \\"Mad Max\\" Immortan Joe monopolizing water as bloodbags."'
    ],
    "military_junta": [
        'reference: "《迷墙》用铁斧劈门、将不顺从者投入绞肉机的铁棍暴徒；《人类之子》街头坦克布控、将难民锁入铁笼的持枪网。",',
        'referenceEn: "\\"The Wall\\" uniformed thugs smashing non-conformists; \\"Children of Men\\" tanks guarding streets rounding up immigrants."'
    ],
    "police_state": [
        'reference: "《窃听风暴》在阁楼死死监听楼下伴侣耳语心跳的灰衣国安；《V字仇杀队》黑车载走每一名嫌疑者榨取秘密的极权红手。",',
        'referenceEn: "\\"The Lives of Others\\" Stasi phantoms wiretapping every whisper; \\"V for Vendetta\\" Fingermen black-bagging suspects."'
    ],
    "theocracy_radical": [
        'reference: "《使女的故事》红衣死裹女性、以挖眼狂热捍卫教义的吉列国；《仲夏夜惊魂》披着白衣鲜花活活烧死外人的畸态公社。",',
        'referenceEn: "\\"The Handmaid\'s Tale\\" red-robed women mutilated for dogma; \\"Midsommar\\" flower-crowned villagers burning outsiders alive."'
    ],
    "cult_compound": [
        'reference: "《曼迪》血红灯光下靠致幻剂与扭曲经文吸干少女的魔尊；《双面玛莎》用虚假归属与洗脑将女孩逼至终生惊恐的农庄。",',
        'referenceEn: "\\"Mandy\\" hippie demagogue draining a soul via LSD; \\"Martha Marcy May Marlene\\" a smiling commune shattering a girl\'s sanity."'
    ],
    "surveillance_state": [
        'reference: "《1984》墙上从不阖眼死盯每丝微表情的巨大老大哥电幕；《全民公敌》调控全城天眼追捕得受害者无处遁形的铁云网络。",',
        'referenceEn: "\\"1984\\" Big Brother telescreens assessing every micro-expression; \\"Enemy of the State\\" inescapable satellites tracking a victim."'
    ],
    "gerontocracy": [
        'reference: "《疯狂的麦克斯4》插着无菌管吸男童鲜血续命的溃烂军阀；《银翼杀手》金字塔顶端因肉身垂死怒瞎双眼的生化财阀泰瑞尔。",',
        'referenceEn: "\\"Mad Max\\" rotting warlord sustained by blood transfusions; \\"Blade Runner\\" decaying tycoon Tyrell violently blinded at the top."'
    ],
    "patriarchy_absolute": [
        'reference: "《使女的故事》剥夺真名强冠以父族代号的行走生育红袍；《疯狂的麦克斯4》锁上铁面罩困于密室专供统治者产子的种母。",',
        'referenceEn: "\\"The Handmaid\'s Tale\\" red wombs branded with patriarchal codes; \\"Mad Max\\" breeders locked in iron masks strictly for bearing heirs."'
    ],
    "ethnostate": [
        'reference: "《千钧一发》验血死卡阶梯、令自然分娩洗一辈子马桶的琉璃殿；《第九区》将外星大虾绝情赶入残败隔离营的武装白人。",',
        'referenceEn: "\\"Gattaca\\" glass city filtering elites via DNA; \\"District 9\\" armed units forcing alien refugees into squalid concentration camps."'
    ],
    "bureaucracy_hell": [
        'reference: "《妙想天开》因系统打错一字便将良民送入绞肉椅的无头案牍部；《审判》迷宫长廊里永远冷眼互推皮球的面瘫卷宗员。",',
        'referenceEn: "\\"Brazil\\" a typo sending an innocent citizen to a torture chair; \\"The Trial\\" paralyzed clerks in endless mazes shifting blame."'
    ],
    "prison_colony": [
        'reference: "《纽约大逃亡》曼哈顿圈以高墙死水任由暴徒建国的极黑监牢；《异形3》深空尽头塞满最凶戾剃头狂徒的废弃熔炉矿星。",',
        'referenceEn: "\\"Escape from New York\\" Manhattan walled off into a thug-ruled kingdom; \\"Alien 3\\" a deep-space foundry infested with violent inmates."'
    ],
    "puppet_state": [
        'reference: "《攻壳机动队2》在美帝资本暗线拉扯下毫无主体尊严的极东诸国；《人类之子》徒有政府宣告实则早被全球大国绞烂的英伦。",',
        'referenceEn: "\\"Ghost in the Shell 2\\" Far East nations as disposable chess pieces; \\"Children of Men\\" Britain reduced to rubble and puppet-broadcasts."'
    ]
}

data_b = {
    "corp_state": [
        'reference: "《异形》为捕获异种视无数船员如草芥随意报废的维兰德公司；《银翼杀手》霓虹全息大妈下只手遮天垄断克隆命脉的财阀。",',
        'referenceEn: "\\"Alien\\" Weyland-Yutani casually scrapping crews for bioweapons; \\"Blade Runner\\" Tyrell monopolizing clone lifelines globally."'
    ],
    "cyberpunk_dystopia": [
        'reference: "《边缘行者》全息广告下交不起医保绝望停机的流落义体人；《银翼杀手》酸雨浇灌、街头满是人造霓虹与煮面摊的底层棚户。",',
        'referenceEn: "\\"Cyberpunk: Edgerunners\\" a chrome-junkie flatlining for unpaid insurance; \\"Blade Runner\\" slums drenched in acid rain and neon."'
    ],
    "consumer_hive": [
        'reference: "《恐怖黎明》商场里麻木徘徊只为残存购物本能的丧尸群；《华尔街之狼》用毒品和漫天美钞将肉欲狂欢撑至极限的金条派对。",',
        'referenceEn: "\\"Dawn of the Dead\\" zombies numbly wandering malls via consumer instinct; \\"The Wolf of Wall Street\\" roaring parties stretching greed."'
    ],
    "gig_economy_hell": [
        'reference: "《对不起我们错过了你》狂赶包裹倒计时吐惨鲜血的快递员；《黑镜》骑在单车上死死踩踏板只为换取虚拟观影币的底层肉肺。",',
        'referenceEn: "\\"Sorry We Missed You\\" bleeding deliveryman beating courier countdowns; \\"Black Mirror\\" pedal-slaves grinding bikes for ad-currency."'
    ],
    "plutocracy": [
        'reference: "《时间规划局》富人不老而贫民一秒交不齐便心火猝绝的惨景；《饥饿游戏》涂脂抹粉的都城贵族狂笑观赏贫童荒野互杀直播。",',
        'referenceEn: "\\"In Time\\" slum-dwellers dropping dead lacking time currency; \\"Hunger Games\\" painted Capitol aristocrats cheering slaughtered teens."'
    ],
    "neo_feudalism": [
        'reference: "《沙丘》横跨星系垄断香料将平民视作收割机前飞沙蝼蚁的贵族；《阿丽塔》汲取下方废铁城垃圾以维持奢靡神权的撒冷浮岛。",',
        'referenceEn: "\\"Dune\\" Intergalactic Houses monopolizing Spice leaving commoners to dust; \\"Alita\\" floating utopia Zalem bleeding the Scrap City."'
    ],
    "casino_capitalism": [
        'reference: "《大空头》暴徒对崩塌数字狂笑无视千万家庭流离失所的癫狂算盘；《未切割的钻石》满屏滚动的比分里疯狂押上全家的赌徒。",',
        'referenceEn: "\\"The Big Short\\" Wall Street laughing at collapsing numbers while millions lose homes; \\"Uncut Gems\\" jeweler betting life on scores."'
    ],
    "debt_bondage": [
        'reference: "《重生男人》因分期断供被冷血铁汉当街剖腹摘取脏腑的破产者；《鱿鱼游戏》身负血债连扇耳光签下卖身契投身死亡游戏的大叔。",',
        'referenceEn: "\\"Repo Men\\" a bankrupt man sliced open for unpaid artificial organs; \\"Squid Game\\" a debt-drowned loser signing for a deadly playground."'
    ],
    "attention_economy": [
        'reference: "《楚门的世界》全城演戏将真人的悲喜活压成收视率的偷窥穹顶；《夜行者》游荡午夜毫不施救只为拍血腥尸体换取沸腾点击的狂人。",',
        'referenceEn: "\\"The Truman Show\\" fake city extorting a man\'s tears for global ratings; \\"Nightcrawler\\" ghoul capturing corpses for shock-news."'
    ],
    "pharma_state": [
        'reference: "《撕裂的末日》冷酷液每日按时气压注射换取全城面瘫铁律的修道院；《美丽新世界》吞微甜苏摩强行抹平一切反叛的流水线温床。",',
        'referenceEn: "\\"Equilibrium\\" daily emotion-suppressant injections enforcing expressionless order; \\"Brave New World\\" Soma pills overwriting rebel angst."'
    ],
    "resource_curse": [
        'reference: "《疯狂的麦克斯4》垄断水闸对准灾民如施舍般恩赐泄洪的不死堡垒；《血钻》从烂泥抠出粉钻招致整个村庄被突击步枪剿碎的焦土。",',
        'referenceEn: "\\"Mad Max\\" Immortan Joe hoarding hydro-valves dripping mercy; \\"Blood Diamond\\" sparkling stones from mud drawing rifle massacres."'
    ],
    "black_market": [
        'reference: "《银翼杀手》雨夜白炽灯管下叫卖人造眼球和毒蛇的阴冷亚裔地摊；《攻壳机动队》逼仄缝隙里强行接入劣质废弃电子脑芯片的暗巷。",',
        'referenceEn: "\\"Blade Runner\\" stallholders peddling vat-grown eyeballs under rain; \\"Ghost in the Shell\\" back-alleys splicing cheap cyber-brains."'
    ]
}

def update_file(filename, data):
    with open(filename, "r") as f:
        content = f.read()

    for item_id, references in data.items():
        import re
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
update_file(f"{base_dir}/group_a.ts", data_a)
update_file(f"{base_dir}/group_b.ts", data_b)

print("Done")
