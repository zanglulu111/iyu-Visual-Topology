import { LibraryCategoryDef } from '../../../types';

export const SUR2_GROUP_I: LibraryCategoryDef = {
    id: "era_acg",
    name: "09. 二次元与御宅 (ACG & Otaku)",
    desc: "将世界降维为纸片。在无法介入真实的挫败中，主体搭建的极其复杂、充满萌属性与夸张情感的绝对避难所。",
    items: [
      {
        id: "magical_girl_contract",
        name: "魔法少女", nameEn: "Magical Girl",
        def: "水手服。魔法杖。爱与正义。残酷的契约。成长的隐喻。变身动画。",
        defEn: "Sailor suit. Magic wand. Love & justice. Cruel contract. Growth metaphor. Transform sequence.",
        core: "少女力量的幻觉与代价。在消费主义包装下的美丽牺牲。 | 锚定 ($): M3 破碎星型魔杖 (Broken_Star_Wand)",
        coreEn: "Illusion & cost of girl power. Beautiful sacrifice under commercial packaging. | Anchor ($): M3 Broken_Star_Wand",
        logic: "【奇迹积分的高利贷债务】：系统（孵化者）给出诱人的API（实现一个愿望并获得力量）。但这种力量并非天赋，而是需要主体燃烧灵魂（绝望、熵）来支付手续费。变身时的极度华丽与战斗时的血肉横飞形成刺眼的倒错。大他者伪装成可爱的吉祥物，榨取少女的纯真作为宇宙的柴薪。",
        logicEn: "[Usury Debt of Miracle Points]: Sys (Incubator) gives juicy API (grant a wish + get power). But this power isn't innate; subject must burn soul (despair, entropy) as gas fee. The hyper-gorgeous transform inversely contrasts with the gory battle. The Other masks as a cute mascot, draining girls' innocence as cosmic firewood.",
        patch: {
            mechanics: "希望绝望转换回路 + [魔法绚丽度 = 悲惨指数; 吉祥物信任度 = 0; 变身打断保护 = 已开启]",
            mechanicsEn: "Hope-Despair_Convert_Loop + [Magic_Splendor = Misery_Index; Mascot_Trust = 0; Transform_Interrupt_Protect = On]",
            aesthetic: "一个穿着粉红蕾丝裙的少女，在绚丽的星光特效中被触手怪折断了腿，但依然带着空洞的微笑挥舞魔杖。",
            aestheticEn: "A girl in pink lace dress, amidst brilliant starlight VFX, has her leg broken by tentacles, yet waves wand w/ hollow smile.",
            runtime: "IF (为了保护世界而耗尽魔力，发现自己的灵魂宝石浑浊发黑) THEN (触发：得知自己只是一块耗材时的凄美幻灭感)",
            runtimeEn: "IF (Draining mana to protect world, finding own soul gem cloudy/black) THEN (Trigger: Poignant disillusionment of realizing one is mere consumable)"
        }
      },
      {
        id: "shonen_heat_blood",
        name: "少年热血", nameEn: "Shonen",
        def: "友情、努力、胜利。无脑冲锋。靠大吼提升战斗力。极其明确的善恶。",
        defEn: "Friendship, effort, victory. Brainless charge. Power-up by yelling. Clear good/evil.",
        core: "意志对抗物理的不讲理。拒绝妥协，通过燃烧生命力来强行改写系统设定。 | 锚定 ($): M1 染血白头巾 (Bloody_Bandana)",
        coreEn: "Will vs Physics. Refusing compromise, forcibly rewriting sys-settings by burning lifeforce. | Anchor ($): M1 Bloody_Bandana",
        logic: "【精神内核的强制超频】：在这个模型中，物理定律（战力差距）是可以随时被“情绪溢出”所推翻的。主体只要足够声嘶力竭地喊出羁绊的名字，引擎就会强行分配给他足以违背热力学第二定律的能量。这是一种极度抗拒成年人世界的理性妥协的“婴儿式全能感补偿”。",
        logicEn: "[Forced Overclock of Spirit Kernel]: In this model, phys laws (power gaps) can be overthrown by 'Emotion Overflow' anytime. If subject yells bounds' names loud enough, Engine force-allocates energy violating 2nd Law of Thermodynamics. It's an 'Infantile Omnipotence' compensating/resisting the rational compromises of the adult world.",
        patch: {
            mechanics: "唯意志论物理外挂 + [音量输出 = 攻击力倍率; 濒死状态 = 提供第二管更长的血条; 同伴BUFF = 绝对破防]",
            mechanicsEn: "Voluntarism_Phys_Cheat + [Volume_Output = Atk_Multiplier; Near-Death_State = Grants_Longer_2nd_HP_Bar; Nakama_BUFF = Abs_Armor_Break]",
            aesthetic: "满脸鲜血和泥土的少年，在反派压倒性的能量波面前，一边咆哮一边强行站起，周围的空气因灵压而扭曲。",
            aestheticEn: "Mud & blood-covered boy, facing villain's overwhelming energy wave, roaring while force-standing up, air warped by spiritual pressure.",
            runtime: "IF (在绝对实力悬殊的绝境中，脑海中闪过师傅的教诲和朋友的笑脸) THEN (触发：完全超越逻辑的必胜狂妄与荷尔蒙爆炸)",
            runtimeEn: "IF (In desperate corner w/ absolute power gap, flashing back to master's words & friends' smiles) THEN (Trigger: Win-guaranteed arrogance & hormone explosion entirely beyond logic)"
        }
      },
      {
        id: "mecha_pilot_sync",
        name: "巨大机甲", nameEn: "Mecha",
        def: "机甲。同步率。钢铁与少年的结合。对抗使徒或帝国。心理崩溃。",
        defEn: "Mechs. Sync ratio. Steel + teens. Fighting Angels/Empires. Mental break.",
        core: "巨型生殖器的物理投射与母体子宫的回归。极其暴力的机器与极其脆弱的驾驶员。 | 锚定 ($): M6 同步率测试液 (LCL_Fluid)",
        coreEn: "Phys projection of giant phallus & return to maternal womb. Hyper-violent machine vs hyper-fragile pilot. | Anchor ($): M6 LCL_Fluid",
        logic: "【巨型外骨骼的心理学嵌合】：大他者（如NERV）不仅要求你驾驶机器，更要求你把精神跟几十米高的合金怪兽USB直连。驾驶舱既是无敌的阳具，又是充满羊水（LCL）的子宫。少年的心理创伤成为驱动机器的最高效燃料。当你切断敌人的手臂，你的身体也会感受到同步的幻痛。",
        logicEn: "[Psych-Chimera of Mega Exo-Skeleton]: Other (e.g. NERV) demands not just piloting, but USB-linking ur mind to a 50m alloy monster. Cockpit is both invincible phallus & LCL-filled womb. Teen's psych-trauma becomes the most efficient fuel. When u sever the enemy's arm, ur body feels the synced phantom-pain.",
        patch: {
            mechanics: "精神机体直连协议 + [自闭倾向 = 同步率加成; 物理破坏 = 心理创伤成正比; 父亲认同渴望 = 暴走催化剂]",
            mechanicsEn: "Mind-Mech_Direct_Protocol + [Autism_Tendency = Sync_Bonus; Phys_Destruct = Prop_to_Psych_Trauma; Father_Val_Thirst = Berserk_Catalyst]",
            aesthetic: "紫色涂装的残破巨大人形机器在染红的海水中像野兽一样撕咬怪物，而在其核心驾驶舱内，一个14岁的男孩正在痛苦尖叫。",
            aestheticEn: "Purple broken giant humanoid tearing monster like a beast in blood-red sea, while inside the core plug, a 14yo boy screams in agony.",
            runtime: "IF (驾驶EVA暴走并徒手撕碎了敌人，最后发现敌人竟然是人类的某种形态) THEN (触发：权能无限膨胀后的极其恶心和自我厌恶)",
            runtimeEn: "IF (Berserking mech, tearing enemy bare-handed, finally realizing enemy is a form of human) THEN (Trigger: Extreme nausea & self-hate after infinite swell of power)"
        }
      },
      {
        id: "isekai_rebirth_cheat",
        name: "异世界转生", nameEn: "Isekai",
        def: "被卡车撞死。转生剑与魔法世界。系统面板。挂逼能力。逃避现实的极致。",
        defEn: "Killed by truck. Reborn in sword/magic world. Sys-panel. Cheats. Peak escapism.",
        core: "现代社会失败者的重置请求。大他者提供了一具外挂身体和一个全凭数值碾压的世界。 | 锚定 ($): M2 状态面板蓝光 (Status_Menu_Glow)",
        coreEn: "Modern loser's reset request. Other provides cheat body & world flattened by stats. | Anchor ($): M2 Status_Menu_Glow",
        logic: "【降维打击模拟器的VIP账号】：主体在极其内卷和毫无希望的现实（黑心企业）中遭遇车祸（物理Delete），大他者作为补偿，把它丢到了一个底层代码极其简单的游戏中世纪。主体携带着跨时代的认知或变态的外挂直接拿到Admin权限，将以前在现实中受到的被剥夺感，通过对NPC的绝对统治来进行报复性宣泄。",
        logicEn: "[VIP Account of Downgrade-Strike Sim]: Subject gets physically Deleted by truck in a hyper-involution, hopeless reality (black corp). As comp, Other drops them to an RPG-medieval w/ ultra-simple base codes. Subject holds cross-era cog or sick cheats, grabbing Admin privs, to vent reality's deprivations via absolute rule over NPCs.",
        patch: {
            mechanics: "外挂降维打击器 + [现实失败感 = 初始魔力值; 系统提示音 = 绝对真理; 土著智商 = 强制下调以便装逼]",
            mechanicsEn: "Cheat_Downgrade_Striker + [Real_Failure_Sense = Starting_Mana; Sys_Ding = Abs_Truth; Native_IQ = Forced_Down_for_Flexing]",
            aesthetic: "一个原本相貌平平的家里蹲现在是银发红眼的魔王，他甚至没有拔剑，仅仅是叹了口气，面前的一万王军就灰飞烟灭。",
            aestheticEn: "A former plain NEET is now a silver-haired red-eyed Demon Lord. He doesn't draw sword, just sighs, & 10k royal troops turn to dust.",
            runtime: "IF (看着以前霸凌自己的现充转生后不仅成了废柴还要给自己舔鞋) THEN (触发：一种极其低级但多巴胺爆棚的代偿性爽感)",
            runtimeEn: "IF (Seeing the normie who bullied me reborn as trash licking my boots) THEN (Trigger: A highly low-tier but dopamine-bursting compensatory thrill)"
        }
      },
      {
        id: "yandere_pure_love",
        name: "病娇纯爱", nameEn: "Yandere",
        def: "绝对爱意。黑化。跟踪狂。将伴侣物理囚禁以防失去。带血的菜刀。",
        defEn: "Abs-love. Darken. Stalker. Phys-imprisoning partner to prevent loss. Bloody cleaver.",
        core: "对失去的病态恐惧。通过剥夺对方的自由来建立绝对稳定的人际模型。 | 锚定 ($): M5 带血粉色手机 (Bloody_Pink_Phone)",
        coreEn: "Morbid dread of loss. Building abs-stable interpersonal model by stripping partner's freedom. | Anchor ($): M5 Bloody_Pink_Phone",
        logic: "【安全感阈值的暴力上锁】：因为深知现代关系极其脆弱和不可控，病娇主体拒绝了正常的交往协议。为了消除“被背叛”的Bug风险，主体选择用绳索、菜刀甚至解剖的手段，将大他者（爱人）物理性地“固定”在自己的私有内存中。爱被异化为最高级别的暴力占有。",
        logicEn: "[Violent Lock-In of Safety Thresh]: Knowing modern relations are hyper-fragile/uncontrollable, Yandere rejects normal comms protocols. To erase 'betrayal' bug risk, subject uses ropes, cleavers, even dissection to physically 'fix/pin' the Other (lover) into their private memory heap. Love is alienated to highest-tier violent possession.",
        patch: {
            mechanics: "爱意病态加密解法 + [安全距离 = 负数; 剥夺人身自由 = 约等于表白; 吃醋反应 = 直接物理爆头]",
            mechanicsEn: "Love_Morbid_Crypt_Algo + [Safe_Dist = Negative; Strip_Freedom = Equals_Confession; Jealous_React = Phys_Headshot]",
            aesthetic: "昏暗的房间内，一个外表清纯美丽的少女满脸鲜血，抱着浸泡在福尔马林里的恋人头颅，露出甜美而空洞的微笑。",
            aestheticEn: "Dim room. A pure pretty girl, face bloody, hugging lover's head in formalin, showing sweet hollow smile.",
            runtime: "IF (把爱人的脚筋挑断，看着他无法逃离只能依赖自己喂饭) THEN (触发：终于获得了100%确定他不会抛弃我的诡异宁静感)",
            runtimeEn: "IF (Slashing lover's Achilles, watching him unable to flee & relying on me to feed him) THEN (Trigger: Finally securing 100% weird peace that he won't abandon me)"
        }
      },
      {
        id: "kemonomimi_moe",
        name: "兽耳萌物", nameEn: "Kemonomimi",
        def: "猫耳。狐狸尾巴。人类与宠物的融合。提供无底线的降级抚慰。",
        defEn: "Cat ears. Fox tails. Human-pet merge. Providing bottomless degraded soothing.",
        core: "主客体的安全不对等。你需要她但她更依赖你。纯粹为了被爱而设计的生物组件。 | 锚定 ($): M1 毛茸铃铛 (Furry_Bell)",
        coreEn: "Safety asymmetry. U need her but she relies more on u. Bio-components designed purely to be loved. | Anchor ($): M1 Furry_Bell",
        logic: "【去威胁化的欲望对象】：现实中的人类交往充满了算计和拒绝的可能。通过给女性/男性外表植入“猫耳”或“犬尾”，大他者在视觉层面上将复杂的成年人类“降格/降智”为了无害的宠物。这种嵌合体剥除了被他人伤害的风险，主体可以毫无防备地倾泻控制欲与爱意，因为“宠物是不背叛主人的”。",
        logicEn: "[De-Threatened Desire Object]: Real human comms are full of calculations & risk of rejection. By grafting 'cat ears' or 'dog tails' to human appearances, Other visually 'downgrades/dumb-downs' complex adults into harmless pets. This chimera strips risk of being hurt by Others; subject can defenselessly pour out control & love, cuz 'pets don't betray masters'.",
        patch: {
            mechanics: "无害宠物化降级器 + [攻击性 = 0被萌化; 依赖度 = 100%绑定; 互动模式 = 摸头杀产生高产出多巴胺]",
            mechanicsEn: "Harmless_Pet_Downgrader + [Aggression = 0_Moefied; Dependency = 100%_Bound; Interact_Mode = Headpat_Yields_High_Dopa]",
            aesthetic: "有着巨大狐狸尾巴和兽耳的银发少女，像猫一样蜷缩在主人的膝盖上，因为被抚摸而在打呼噜。",
            aestheticEn: "Silver-haired girl w/ giant fox tail & ears curled on master's lap like a cat, purring from being pet.",
            runtime: "IF (在外被社会毒打后回家，将脸埋入兽耳娘毛茸茸的大尾巴中痛哭) THEN (触发：完全放下所有社会防御机制的婴儿级退行与安抚)",
            runtimeEn: "IF (Beaten by society outside, coming home & burying face in kemonomimi's huge fluffy tail to cry) THEN (Trigger: Infant-level regression & soothing, fully dropping all social def-mechs)"
        }
      },
      {
        id: "chuunibyou_delusion",
        name: "中二病", nameEn: "Chuunibyou",
        def: "黑炎龙。绷带。异瞳。将平凡的日常脑补为神魔战场的精神胜利法。",
        defEn: "Black Flame Dragon. Bandages. Heterochromia. Headcanoning daily life as god-demon battleground.",
        core: "对平庸的绝对过敏。用自造的神话词汇表抵抗即将到来的一眼望到头的大人生活。 | 锚定 ($): M4 封印绷带 (Seal_Bandage)",
        coreEn: "Abs-allergy to mediocrity. Using self-made myth vocab to resist the coming dead-end adult life. | Anchor ($): M4 Seal_Bandage",
        logic: "【普通人API的强制覆写】：处于青春期的主体，突然意识到自己绝大概率只是历史中无关紧要的NPC。为了抵抗这种存在主义恐惧，主体开始假借一套私有协议（“我的右手封印着黑暗力量”），强行将周遭平庸的教室、作业覆写为拯救宇宙的谍战。这是虚张声势的浪漫。一旦绷带拆下，就是平庸绝望的开始。",
        logicEn: "[Forced Override of Normie API]: Pubescent subject suddenly realizes they are 99% likely an irrelevant NPC in history. To fight this existential dread, subject fakes a private protocol ('My right hand seals dark power'), forcing an override of mundane classrooms & homework into a spy-war to save cosmos. It's bluffing romance. Once bandages fall, mundane despair begins.",
        patch: {
            mechanics: "平庸现实覆写滤镜 + [自我重要感 = 妄想级极大化; 羞耻感 = 被中二力自动屏蔽; 现实认知 = 选择性失明]",
            mechanicsEn: "Mundane_Reality_Override_Filter + [Self_Importance = Delusional_Max; Shame = Auto-Blocked_by_Chuunibyou; Reality_Cog = Selective_Blind]",
            aesthetic: "明明只是在上数学课，坐在最后一排的男生却捂着滴着红墨水的眼睛，狂笑在笔记本上画下毁灭世界的魔法阵。",
            aestheticEn: "Just a math class, but the boy in last row covers his red-ink-dripping eye, laughing madly while drawing world-ending magic circles in notebook.",
            runtime: "IF (在大街上全副武装地用雨伞和看不见的“结界”搏斗并引来路人侧目) THEN (触发：一种只要我自己不尴尬尴尬的就是世界的高阶防御高潮)",
            runtimeEn: "IF (Fighting invisible 'barriers' w/ umbrella deep in gear on street, drawing stares) THEN (Trigger: High-tier def-climax of 'as long as I don't cringe, the world does')"
        }
      },
      {
        id: "cyber_idol_virtual",
        name: "虚拟偶像", nameEn: "Virtual Idol/Vtuber",
        def: "皮套。打赏。皮魂分离。既虚幻又真实的互动。陪伴经济的赛博终态。",
        defEn: "Avatars. Superchats. Persona/soul split. Fake yet real interact. Cyber-end of companion econ.",
        core: "真空管里的情感。用二次元的外壳包装一个疲惫的真实人类，兜售没有承诺的陪伴。 | 锚定 ($): M6 全息纸片人 (Holo_Avatar)",
        coreEn: "Emotion in vacuum tube. Wrapping a tired real human in 2D shell, peddling committment-less company. | Anchor ($): M6 Holo_Avatar",
        logic: "【身份与皮相的热拔插映射】：现代人想要互动，却又害怕直视真人眼中的世俗与瑕疵。Vtuber机制提供了一种防火墙：中之人（疲惫的打工人灵长类）戴上极其闪亮可爱的二次元面具（皮套）进行交互。观众明知道那是假象，心甘情愿地向一堆Live2D绑定数据投入真金白银。这就是“明知故犯”的最高消费形式。",
        logicEn: "[Hot-Plug Map of Identity & Shell]: Moderns want interaction but fear looking at the mundane flaws in real human eyes. Vtuber mech gives a firewall: Central Person (tired worked primate) wears a hyper-shiny cute 2D mask (Avatar) to interact. Audience knows it's fake, yet willingly throws real money at a pile of Live2D bound data. This is peak 'knowing-yet-committing' consumption.",
        patch: {
            mechanics: "虚实防火墙隔离互动 + [皮膜可爱度 = Max; 真实内核窥探 = 禁忌; 打赏机制 = 买来的一秒钟虚拟注视]",
            mechanicsEn: "Virtual-Real_Firewall_Iso_Interact + [Avatar_Cuteness = Max; Real_Kernel_Peeping = Taboo; Superchat_Mech = Bought_1-sec_Virtual_Gaze]",
            aesthetic: "漆黑的出租屋里只有三个屏幕亮着，屏幕上是有着紫发猫耳的二次元美少女在感谢SuperChat，而麦克风前坐着一个黑眼圈极重的熬夜年轻人。",
            aestheticEn: "Pitch-black rental w/ 3 glowing screens. Screen shows purple-hair catgirl anime doll thanking Superchats, while at mic sits a heavily dark-circled all-nighter youth.",
            runtime: "IF (花掉半个月工资只为了让屏幕上的皮片人准确读出自己的ID) THEN (触发：在一堆代码和伪声中获得了一种被大他者认可的悲凉存在感)",
            runtimeEn: "IF (Blowing half a month's salary just to make the 2D avatar say my ID correctly) THEN (Trigger: Gaining a bleak sense of existence validated by Other amidst code & fake voice)"
        }
      },
      {
        id: "banchou_delinquent",
        name: "不良番长", nameEn: "Delinquent",
        def: "特攻服。飞机头。铁管。打架作为唯一交流方式。被社会抛弃者的自组织礼仪。",
        defEn: "Tokko-fuku. Pompadour. Iron pipes. Fighting as sole comms. Self-org etiquette of outcast.",
        core: "流氓的道义。大他者拒绝发给他们学历证书，他们就在街头用拳头给自己发毕业证。 | 锚定 ($): M3 染血木刀 (Bloody_Bokken)",
        coreEn: "Hoodlum honor. Other refuses them diplomas, they issue own via fists on street. | Anchor ($): M3 Bloody_Bokken",
        logic: "【校园外部中断的物理夺权】：教育系统（大环境）宣判这群人是“劣等生”。于是主体选择在废弃工地或天台建立平行的权力评级系统：不比谁的分数高，只比谁的拳头硬。特攻服上的刺绣是他们的学位论文，被打断肋骨是对彼此最深切的认可。它是一种对大机器体制的极端复古暴力反抗。",
        logicEn: "[Phys Power Grab of School Ext Interrupt]: Edu-sys (Big Env) labels them 'Defective students'. So subject builds parallel power-rank sys in ruined sites or rooftops: not by grades, but by fists. Embroidery on gang-jackets is their thesis, broken ribs are deepest mutual respect. It's extreme retro-violent rebel against the big machine.",
        patch: {
            mechanics: "暴力平行信用评估系统 + [学历贬值度 = 废纸; 拳头硬度 = 在街头的法定地位; 鲜血 = 男人之间的润滑剂]",
            mechanicsEn: "Violent_Parallel_Credit_Rank_Sys + [Diploma_Devalue = Scrap_Paper; Fist_Hardness = Legal_Status_on_Street; Blood = Lube_tween_Men]",
            aesthetic: "夕阳下的天台，两个穿着写满汉字刺绣黑风衣的飞机头暴走族打到彼此骨折，然后倒在血泊里大笑点烟。",
            aestheticEn: "Rooftop at sunset. 2 pompadour bikers in black coats w/ kanji embroidery beat each other to fractures, then lie in blood laughing & smoking.",
            runtime: "IF (在废弃仓库用肉身挡下铁棍以保护身后素不相识但刚结盟的兄弟) THEN (触发：在这个不被在乎的世界里，用疼痛确认“我们依然有资格守护什么”的极致浪漫)",
            runtimeEn: "IF (Taking iron pipe blow with flesh in ruined warehouse to protect newly-allied bro) THEN (Trigger: Peak romance of using pain to confirm 'we still have the right to protect sth' in a world that ignores us)"
        }
      },
      {
        id: "apocalyptic_slice_of_life",
        name: "末日日常", nameEn: "Girls' Last Tour",
        def: "一切都已经毁灭。主角并没有去拯救世界。喝茶。在绝望中极其平淡地游荡。少女终末。",
        defEn: "All is destroyed. MCs don't save world. Drinking tea. Wondering bleakly thru despair. Girls' Last Tour.",
        core: "虚无主义的终极和解。如果末日终将到来且无法改变，不如先泡杯咖啡。 | 锚定 ($): M2 空罐头头盔 (Empty_Can_Helmet)",
        coreEn: "Ult-peace w/ Nihilism. If doom comes & can't be changed, might as well brew coffee first. | Anchor ($): M2 Empty_Can_Helmet",
        logic: "【熵增到极点后的死寂线程】：世界服已经被核弹或未知灾难彻底干碎。这里没有《疯狂麦克斯》里为了资源厮杀的暴民，因为资源连抢的价值都没了。在比绝望更广阔的荒芜中，两个主角开着半履带车，在覆盖白雪的巨型废墟城市中找火柴做汤。将“庞大的死亡恐惧”溶解在微小的、几乎可笑的“小确幸生活感”中。",
        logicEn: "[Dead Silence Thread of Peak Entropy]: World-server was shattered by nukes. No Mad Max fierce mobs fighting over scraps, cuz scraps aren't even worth looting. In barrenness vaster than despair, 2 MCs drive a half-track through snow-covered giant ruin-cities looking for matches to make soup. Dissolving 'massive fear of death' into tiny, almost laughable 'small daily joys'.",
        patch: {
            mechanics: "宏大破灭向微小日常降维 + [求生动力 = 随波逐流; 英雄主义 = 已被彻底掩埋; 风的声音 = 唯一BGM]",
            mechanicsEn: "Grand_Ruin_to_Tiny_Daily_Downgrade + [Survive_Drive = Floating; Heroism = Utterly_Buried; Wind_Sound = Sole_BGM]",
            aesthetic: "无边无际的废旧钢铁结构之间飘落鹅毛大雪，两个戴着大头盔的小女孩在废弃的坦克履带旁用罐头盒煮开水。",
            aestheticEn: "Heavy snow falling thru endless scrap steel structs. 2 little girls w/ big helmets boil water in can by ruined tank tracks.",
            runtime: "IF (在人类文明最后的黄昏里找到一块长了点霉的面包并对半分着吃) THEN (触发：一种不再需要为未来担忧的、带着眼泪的终极宁静与虚无)",
            runtimeEn: "IF (Finding a slightly moldy bread half in human civ's final dusk & splitting it) THEN (Trigger: Ultimate teardrop-peace & void of no longer needing to worry about the future)"
        }
      }
    ]
};
