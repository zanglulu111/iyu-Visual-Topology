import { LibraryCategoryDef } from '../../../types';

export const SUR2_GROUP_C: LibraryCategoryDef = {
    id: "era_medieval",
    name: "03. 中世与信仰 (Medieval & Faith)",
    desc: "神权高于皇权。黑暗中的微光、瘟疫的诅咒与骑士誓言。灵魂的救赎成为唯一的经济指标。",
    items: [
      {
        id: "dark_ages_vibe",
        name: "黑暗时代", nameEn: "Dark Ages",
        def: "罗马陷落后的断代。修道院存留微光。",
        defEn: "Post-Rome fracture. Monasteries keep faint light.",
        core: "文明残骸 vs 原始野蛮。信仰作为对抗饥饿的补丁。 | 锚定 ($): M1 退行黑洞 (Regression_Hole)",
        coreEn: "Civ wreckage vs savagery. Faith as patch. | Anchor ($): M1 Regression_Hole",
        logic: "【象征界崩溃】：罗马的M4大他者（法治与军团）物理粉碎。主体跌落至充满饥饿与强盗的实在界。修道院成为唯一的符号避难所，以上帝的名义勉力缝合疯狂世界。",
        logicEn: "[Symbolic Collapse]: Rome's M4 (law/legions) shatters. Subjects fall to starving Real. Monasteries act as sole symbolic refuge.",
        patch: {
            mechanics: "微光据点协议 + [知识保留率 = 极低; 暴力收益 = Max; 祈祷麻醉效能 = 极强]",
            mechanicsEn: "Faint_Light_Protocol + [Lore_Keep = V.Low; Violence = Max; Prayer_Anes = V.Strong]",
            aesthetic: "冷雨中泥泞的木屋村落与阴森石块修道院。羊皮纸微光对抗铺天盖地的黑暗恐惧。",
            aestheticEn: "Muddy villages in cold rain vs grim stone abbeys. Faint parchment light vs dark fear.",
            runtime: "IF (瘟疫与盗匪同时发生) THEN (触发：人类退缩放弃思考，彻底寄托于末日救赎幻想)",
            runtimeEn: "IF (Plague and bandits hit) THEN (Trigger: Humans regress, fully giving into doomsday hope)"
        }
      },
      {
        id: "viking_raid",
        name: "维京劫掠", nameEn: "Viking Expansion",
        def: "长船，奥丁信仰，为了瓦尔哈拉的自杀式劫掠。",
        defEn: "Longships, Odin. Suicidal raids for Valhalla.",
        core: "荣誉经济学。死亡不是结束。 | 锚定 ($): M5 死亡向日葵 (Death_Sunflower)",
        coreEn: "Honor econ. Death is not the end. | Anchor ($): M5 Death_Sunflower",
        logic: "【死之驱力货币化】：资源绝对匮乏的冰原逼出了极端的神学。大他者（奥丁）规定只有战死才能获得极乐。这导致主体取消了对生存的眷恋，将极端的侵略暴力（M5）神圣化。",
        logicEn: "[Death Drive Monetized]: Frozen wastes force extreme theology. M4 (Odin) decrees only death grants bliss. Subjects drop survival instinct, sanctifying aggro violence.",
        patch: {
            mechanics: "狂战士劫掠协议 + [求生欲 = 取消; 战死KPI = 强制; 航海侵蚀率 = 极高]",
            mechanicsEn: "Berserker_Raid_Protocol + [Survival_Will = Cancel; KIA_KPI = Forced; Sail_Erosion = High]",
            aesthetic: "冰冷狂暴的海浪背景，龙骨长船与飞溅的鲜红血液。极冷的北欧蓝调对冲鲜血的灼热。",
            aestheticEn: "Cold raging seas, dragon longships and splashing red blood. Frosty Nordic blue vs hot gore.",
            runtime: "IF (遭遇装备远超自己的敌人定点防御) THEN (触发：放弃防御阵型，狂笑着进行肉体碰撞的绞肉冲锋)",
            runtimeEn: "IF (Facing heavily-armed def) THEN (Trigger: Drop shieldwall, laughing charge into meatgrinder)"
        }
      },
      {
        id: "crusades_faith",
        name: "十字军", nameEn: "The Crusades",
        def: "骑士团，狂热神战与种族屠杀，信仰的火海。",
        defEn: "Templars, fanatic holy wars, faith in flames.",
        core: "神圣誓言 vs 血腥现实。绝对利他导致绝对残暴。 | 锚定 ($): M6 圣战谵妄 (Holy_Delirium)",
        coreEn: "Holy oaths vs bloody reality. Absolute altruism causes absolute cruelty. | Anchor ($): M6 Holy_Delirium",
        logic: "【大他者的绝对背书】：教皇宣布的“赎罪券”清空了所有的杀戮负罪感（超我闭环）。杀人与救赎被等号连接，狂热与贪婪交织，导致十字军能平静地做出超越人类底线的暴行。",
        logicEn: "[Absolute Other Endorsement]: Pope's 'Indulgence' clears all kill-guilt (superego loop). Murder=Redemption. Fanaticism & greed blend into sub-human atrocities.",
        patch: {
            mechanics: "神圣清洗协议 + [负罪感阈值 = 强制清零; 异教徒仇恨 = Max; 战利品贪婪 = 极高]",
            mechanicsEn: "Holy_Purge_Protocol + [Guilt_Threshold = Force_Zero; Heretic_Hate = Max; Loot_Greed = High]",
            aesthetic: "满目疮痍的沙漠古城巷战，绘有十字的白色战袍被黑红凝血层层浸透。理想的圣洁感与物理的恶臭混叠。",
            aestheticEn: "Scorched desert city street fights. White cross cloaks soaked in black-red blood. Holy vs stench.",
            runtime: "IF (攻陷异教徒圣城) THEN (触发：因过度杀戮导致精神极度兴奋后跌入空虚的创伤性失语)",
            runtimeEn: "IF (Capture heretic holy city) THEN (Trigger: Hyper-kill causes PTSD aphasia post-euphoria)"
        }
      },
      {
        id: "high_gothic_church",
        name: "哥特教堂", nameEn: "High Gothic Europe",
        def: "垂直向上的尖顶，彩色玻璃，压抑的肉体。",
        defEn: "Vertical spires, stained glass, repressed flesh.",
        core: "光线的神学。在深渊般的石制空间内的微小感。 | 锚定 ($): M4 仰视剥夺 (Gaze_Deprivation)",
        coreEn: "Theology of light. Smallness in abyssal stone spaces. | Anchor ($): M4 Gaze_Deprivation",
        logic: "【石头即上帝】：整个城市的资源被铸造成一台“强迫主体仰视”的物理机器。飞扶壁与玫瑰窗并非为人类服务，而是通过极度夸张的高耸体量感，物理剥夺人类的狂妄（压制 M5）。",
        logicEn: "[Stone is God]: City resources built into a physical machine forcing 'looking up'. Flying buttresses strip mortal arrogance via exaggerated volume (supressing M5).",
        patch: {
            mechanics: "重力剥夺协议 + [垂直压迫感 = Max; 采光神圣滤镜 = 开启; 个性彰显 = 锁死]",
            mechanicsEn: "Gravity_Deprive_Protocol + [Vertical_Pressure = Max; Holy_Light_Filter = On; Ego_Display = Locked]",
            aesthetic: "昏暗冰冷的巨大石柱与高空透过玫瑰窗洒下的极尽炫目的彩色光柱。造成极端的空旷压抑与神圣洗礼。",
            aestheticEn: "Dim cold giant pillars vs dizzying colorful light rays from rose windows. Extreme empty pressure vs holy wash.",
            runtime: "IF (进入高耸的教堂中殿) THEN (触发：自我意识瓦解，感到被上方不可见的凝视全面穿透)",
            runtimeEn: "IF (Enter soaring nave) THEN (Trigger: Ego collapses, feeling pierced by invisible gaze above)"
        }
      },
      {
        id: "black_death_1348",
        name: "黑死病", nameEn: "The Black Death",
        def: "瘟疫，恶臭。末日的向死而生与狂欢。",
        defEn: "Plague, stench. Doomsday revelry.",
        core: "死亡平等性。教皇与农民、道德与禁忌的集体崩塌。 | 锚定 ($): M2 鼠疫剥皮 (Plague_Flaying)",
        coreEn: "Death equality. Collective collapse of taboo. | Anchor ($): M2 Plague_Flaying",
        logic: "【实在界的超级入侵】：微生物用不到几年时间液化了欧洲的象征界。当神甫与罪人以同样的惨状抽搐死亡时，“上帝（M4）”暂时掉线。幸存者在极度恐惧中爆发出毫无底线的肉欲与狂欢。",
        logicEn: "[Hyper Invasion of Real]: Microbes liquefy Europe's Symbolic in years. 'God' goes offline. Survivors burst into bottomless lust and revelry in extreme dread.",
        patch: {
            mechanics: "物理涂血倒计时 + [死亡随机率 = 极高; 道德约束网 = 腐烂失效; 狂欢驱力 = Max]",
            mechanicsEn: "Phys_Blood_Countdown + [Death_RNG = High; Moral_Net = Rotted; Revelry_Drive = Max]",
            aesthetic: "堆满发黑肿胀尸体的恶臭街道旁边，是饮酒作乐、男女狂舞的末世酒馆。极端病态的死亡之舞（Danse Macabre）。",
            aestheticEn: "Stinking streets of black swollen corpses next to pubs with dancing/drinking. Sickly Danse Macabre.",
            runtime: "IF (亲人身上出现黑斑) THEN (触发：抛弃一切亲情牵绊的亡命奔逃或纵欲狂欢)",
            runtimeEn: "IF (Kin shows black spots) THEN (Trigger: Abandoning all ties to flee or indulge in mad lust)"
        }
      },
      {
        id: "tang_glory",
        name: "盛唐万国", nameEn: "Tang Cosmopolitan",
        def: "丝绸之路终点，李白，胡旋舞。",
        defEn: "Silk Road end, Li Bai. Extreme confidence.",
        core: "繁华背后的虚无。权力全盛期的极致孤独。 | 锚定 ($): M3 诗酒迷幻 (Poetic_Psychedelia)",
        coreEn: "Nihilism behind boom. Extreme loneliness at power peak. | Anchor ($): M3 Poetic_Psychedelia",
        logic: "【能指极度繁荣】：帝国强盛到能够消化一切符号，产生了一种带有“海市蜃楼”质感的享乐主义。但安史之乱的实在界入侵只需瞬间，就能把诗意与牡丹全部碾碎成血水。",
        logicEn: "[Signifier Boom]: Empire strong enough to digest all symbols, breeding 'mirage-like' hedonism. But An Lushan's Real invasion instantly crushes poetry/peonies into gore.",
        patch: {
            mechanics: "万国朝宗缓存区 + [文化包容度 = Max; 极繁消耗 = 指数级; 危机盲区 = 100%]",
            mechanicsEn: "Cosmo_Buffer + [Culture_Tol = Max; Maximal_Burn = Exp; Crisis_Blindspot = 100%]",
            aesthetic: "金碧辉煌的长安朱雀大街与香风不断。然而在最炫目的宫廷灯火下，诗人眼中总映出一丝极其颓废的末日醉意。",
            aestheticEn: "Golden Chang'an avenues and endless perfume. Yet under brightest palace lights, poet's eyes reflect decadent doom.",
            runtime: "IF (沉醉于霓裳羽衣曲的高潮) THEN (触发：远方渔阳鼙鼓动地来的惊魂眩晕感)",
            runtimeEn: "IF (Drunk in Neon Dance climax) THEN (Trigger: Stunned shock of distant rebel wardrums shaking earth)"
        }
      },
      {
        id: "song_zen_aesthetic",
        name: "宋韵极简", nameEn: "Song Zenism",
        def: "文人政治，汝窑极简。外患下的精致退缩。",
        defEn: "Literati politics, minimalism. Exquisite retreat.",
        core: "柔弱风骨。用精致的极简仪式感对抗北方野蛮。 | 锚定 ($): M4 格式化枯山水 (Format_Zen)",
        coreEn: "Soft bones. Minimalist rituals fighting Northern savages. | Anchor ($): M4 Format_Zen",
        logic: "【防御性去势】：武力（实体的M4屏障）彻底失败。士大夫将其转移到了美学与理学中，通过近乎“病态的极简与禁欲（理学）”来构建精神上的天险，将无力感升华为禅意。",
        logicEn: "[Defensive Castration]: Military (M4 barrier) utterly fails. Literati shift it to aesthetics/Neo-Confucianism, building spiritual fortresses via 'sick minimalist asceticism' to sublimate powerlessness.",
        patch: {
            mechanics: "极简退境闭环 + [物理防御力 = 趋近0; 道德内卷 = Max; 美学纯化率 = 极高]",
            mechanicsEn: "Minimalist_Retreat_Loop + [Phys_Def = ~0; Moral_Involution = Max; Aesthetic_Purify = High]",
            aesthetic: "天青色汝窑与留白残缺的山水画。没有锋芒的宣纸和淡淡茶香。空气中有一种无可奈何只能孤芳自赏的幽暗。",
            aestheticEn: "Sky-blue kilns & blank-spaced landscape scrolls. Edge-less rice paper & faint tea. Solitary gloomy self-admiration.",
            runtime: "IF (听闻北方失地与国君被俘) THEN (触发：在瘦金体书法中加深一笔带有神经质的锋利与悲愤)",
            runtimeEn: "IF (Hear lands lost and Emperor captured) THEN (Trigger: Deepening a neurotic sharp, sorrowful stroke in calligraphy)"
        }
      },
      {
        id: "mongol_horde",
        name: "蒙古铁骑", nameEn: "The Mongol Horde",
        def: "移动帝国。绝对的速度与残暴。",
        defEn: "Mobile empire. Absolute speed and brutality.",
        core: "降维打击。个体被卷入巨大历史绞肉机的无力。 | 锚定 ($): M5 狂野剥离 (Wild_Stripping)",
        coreEn: "Dimension drop. Powerlessness in grand history grinder. | Anchor ($): M5 Wild_Stripping",
        logic: "【符号抹除机器】：蒙古人就是物理态的实在界风暴。他们不跟你辩论上帝或礼教（摧毁M4），只提供简单的布尔逻辑：降或者屠城。定居文明复杂的能指迷宫被绝对速度的马刀瞬间剪断。",
        logicEn: "[Symbol Eraser]: Mongols are solid Real storms. No debates on gods (M4 crush), only Boolean logic: Submit or Massacre. Settled civ's complex signifier maze instantly cut by high-speed sabers.",
        patch: {
            mechanics: "物理抹除协议 + [机动性 = 破限; 外交沟通率 = 0; 屠城剥减 = 算力级]",
            mechanicsEn: "Phys_Erase_Protocol + [Mobility = Limit_Break; Diplo_Rate = 0; Massacre_Culling = Compute_Level]",
            aesthetic: "遮天蔽日的沙尘暴、令人绝望的轰鸣马蹄声和骨镞鸣啸。定居城市华丽的高墙被冷酷的血腥海潮无视并吞没。",
            aestheticEn: "Sky-blotting dust, despairing hooves and humming arrows. Fancy walls ignored/swallowed by cold bloody tides.",
            runtime: "IF (试图用漫长繁琐的外交辞令拖延) THEN (触发：城门被万人火炮与投石机不发一言地轰为齑粉)",
            runtimeEn: "IF (Try stalling with complex diplo-talk) THEN (Trigger: Gates silently pulverized by massive trebuchets)"
        }
      },
      {
        id: "heian_phantom",
        name: "平安百鬼", nameEn: "Heian Japan",
        def: "源氏物语，怨灵恐惧，极致的物哀风雅。",
        defEn: "Genji, vengeful spirits, extreme mono no aware.",
        core: "美与秽并列。极致形式主义镇压潜意识妖魔。 | 锚定 ($): M3 怨念幽影 (Grudge_Phantom)",
        coreEn: "Beauty vs filth. Extreme formalism suppressing subconscious demons. | Anchor ($): M3 Grudge_Phantom",
        logic: "【潜意识外显】：平安时代的贵族将一切行为高度礼仪化（强迫症式的符号界防御）。因为他们深刻知道那些被压抑的政治迫害和情感嫉妒，全都化作了在黑暗京都夜行吃人的“百鬼（实在界缝隙逸漏）”。",
        logicEn: "[Subconscious Externalized]: Heian nobles highly ritualize all acts (OCD symbolic def). Knowing well repressed purges & jealousies turn to man-eating 'Ayakashi' night-walking in dark Kyoto.",
        patch: {
            mechanics: "风雅强迫症结界 + [礼仪复杂性 = Max; 怨灵生成率 = 极高; 情感表达 = 极度受限]",
            mechanicsEn: "Elegance_OCD_Barrier + [Ritual_Complexity = Max; Grudge_Spawn = V.High; Emotion_Expr = Restricted]",
            aesthetic: "穿着十二单衣的女房坐在昏暗纸门后，庭院是唯美的樱花飘落，但阴影处似乎长满眼睛的妖异。极其香艳又令人毛骨悚然。",
            aestheticEn: "Women in 12-layer robes behind dim papers, scenic sakura falling, but shadows seem eye-filled. Erotic yet creepy.",
            runtime: "IF (在宫廷斗争中因流言而失宠) THEN (触发：活人的生灵离体在半夜去掐死政敌或情敌的情绪具象化)",
            runtimeEn: "IF (Lose favor in court via gossip) THEN (Trigger: Living ghost detaches tightly strangling rivals at midnight)"
        }
      },
      {
        id: "sengoku_fire",
        name: "日本战国", nameEn: "Sengoku Blood",
        def: "下克上，短暂荣誉。切腹作为失败的终极缝合。",
        defEn: "Gekokujo, brief honor. Seppuku as ultimate suture.",
        core: "忠诚的廉价化。在无限背叛中寻找主公。 | 锚定 ($): M1 剖腹重置 (Seppuku_Reset)",
        coreEn: "Cheap loyalty. Seeking a lord amid endless betrayals. | Anchor ($): M1 Seppuku_Reset",
        logic: "【主体性的一次性消耗】：幕府（大他者）垮台。武士处于价值真空，背叛成为常态。为了证明自己不是完全的虚无，他们发明了最残暴的自虐（切腹）来给自己打上“我还有忠诚”的人造补丁。",
        logicEn: "[Disposable Subjectivity]: Shogunate (Other) falls. Samurai in value vacuum. Betrayal is norm. To prove they aren't nihilistic dirt, they invent brutal self-abuse (seppuku) as 'I have loyalty' patch.",
        patch: {
            mechanics: "下克上混沌网 + [背叛收益 = 高; 道德锚点 = 虚空; 物理灭口决断 = 瞬间]",
            mechanicsEn: "Gekokujo_Chaos_Net + [Betrayal_Yield = High; Moral_Anchor = Void; Phys_Silencing = Instant]",
            aesthetic: "燃烧的天守阁，华丽冷酷的武士具足。飞溅在满开樱花和纸门上的武士之血（赤色与白色的极度割裂感）。",
            aestheticEn: "Burning castles, fancy cruel armor. Samurai blood splashed on full-bloom sakura and paper sliding doors.",
            runtime: "IF (家臣发现主君露出了致命破绽) THEN (触发：在本能寺点起业火进行毫不犹豫的背刺与篡夺)",
            runtimeEn: "IF (Vassal finds lord's fatal flaw) THEN (Trigger: Light Honno-ji fires for unhesitant backstab & usurp)"
        }
      },
      {
        id: "medieval_inquisition",
        name: "异端审判", nameEn: "The Inquisition",
        def: "秘密警察鼻祖，铁娘子，对思想纯洁的偏执。",
        defEn: "Secret police origin, iron maiden, purity paranoia.",
        core: "真理的暴政。恐惧产生的人造地狱。 | 锚定 ($): M4 符号洁癖 (Symbolic_Mysophobia)",
        coreEn: "Tyranny of truth. Man-made hell of fear. | Anchor ($): M4 Symbolic_Mysophobia",
        logic: "【符号系统排雷】：大他者无法容忍任何能指游移。为了维持“绝对神圣”，必须把肉体扔进火里烧掉以提取纯粹的灵魂（剔除M1残渣）。",
        logicEn: "[Symbolic Mine-clearing]: Other tolerates no signifier drift. To keep 'absolute holy', flesh must burn to extract pure soul (culling M1 residue).",
        patch: {
            mechanics: "异端过滤协议 + [邻里告发 = Max; 解剖痛觉 = 系统忽略; 纯洁容能 = 0]",
            mechanicsEn: "Heretic_Filter_Protocol + [Neighbor_Snitch = Max; Autopsy_Pain = Ignored; Purity_Tol = 0]",
            aesthetic: "阴暗地窖与烧红铁器，狂热布道声中伴随着人肉焦味与骨裂声。",
            aestheticEn: "Dim cellars & red-hot irons, fanatic sermons amidst burning flesh and cracking bones.",
            runtime: "IF (听到邻居念错了一句拉丁文经文) THEN (触发：在极度确信自己是正义的前提下将其送上火刑柱)",
            runtimeEn: "IF (Hear neighbor mispronounce Latin) THEN (Trigger: Send them to stake with absolute righteous certainty)"
        }
      },
      {
        id: "knights_templar_secret",
        name: "圣殿骑士团", nameEn: "Templar Mystery",
        def: "最早银行家，富可敌国，被教皇背叛而覆灭。",
        defEn: "Early bankers, extremely rich, betrayed by Pope.",
        core: "神圣与世俗金钱的媾和与撕裂。 | 锚定 ($): M1 黄金圣杯 (Golden_Grail)",
        coreEn: "Holy-money intercourse and tear. | Anchor ($): M1 Golden_Grail",
        logic: "【跨界越权崩溃】：骑士游走在神圣系统（宗教）与现实运算层（金融）之间。当金库的算力大于教皇的大他者话语权时，他们瞬间被判定为病毒代码遭全网强删。",
        logicEn: "[Trans-boundary Cross-権 Crash]: Knights roam between Holy (religion) and Real-calc (finance). When vault hash-power > Pope's word, they are flagged as virus and globally deleted.",
        patch: {
            mechanics: "金融寄生删除协议 + [财富汇聚 = Max; 宗教背书 = 随时撤回; 秘密结社感 = 高]",
            mechanicsEn: "Finance_Parasite_Delete + [Wealth_Gather = Max; Holy_Endorse = Revocable; Secret_Society = High]",
            aesthetic: "白色带红十字披风与整箱黄金。被绑在火刑柱上的沉默者与不详的黑色星期五。",
            aestheticEn: "White-red-cross cloaks & chests of gold. Silent men on stakes and ominous Black Friday.",
            runtime: "IF (接到来自高层毫无预兆的清除指令) THEN (触发：百年的神圣荣耀与金融帝国在一天内数据清零)",
            runtimeEn: "IF (Receive unprompted clear order from top) THEN (Trigger: Century of holy glory & bank empire zeroed in a day)"
        }
      },
      {
        id: "abbasid_science",
        name: "阿拔斯智慧宫", nameEn: "House of Wisdom",
        def: "巴格达黄金时代。炼金术，多元文化翻译。",
        defEn: "Baghdad golden age. Alchemy, multi-cultural translation.",
        core: "理性的早产。宗教包围中的科学火种。 | 锚定 ($): M3 智慧燃点 (Wisdom_Flashpoint)",
        coreEn: "Premature reason. Science sparks surrounded by religion. | Anchor ($): M3 Wisdom_Flashpoint",
        logic: "【能指开放沙盒】：在绝对神权下划出了一块解析古典理性（逻辑/数学）的沙盒。但当沙盒算力即将突破神学底层代码时，被实在界的蒙古人一波拔掉电源。",
        logicEn: "[Signifier Open Sandbox]: Under absolute theocracy, a sandbox parsing classical reason (logic/math) is drawn. Before its hash breaks theology base code, Mongols unplug it.",
        patch: {
            mechanics: "智慧沙盒协议 + [翻译转化率 = 高; 异端宽容度 = 中高; 物理防御 = 脆弱]",
            mechanicsEn: "Wisdom_Sandbox_Protocol + [Trans_Conv_Rate = High; Heretic_Tol = Mid-High; Phys_Def = Brittle]",
            aesthetic: "星盘、精美几何图与墨水香气。圆顶建筑内长胡须学者争论不休的前沿科技感。",
            aestheticEn: "Astrolabes, fine geometry & ink scent. Bearded scholars arguing in domed cutting-edge tech vibe.",
            runtime: "IF (观测天象发现与经文描写相悖的轨道) THEN (触发：在兴奋的求知欲与可能被判定异端的恐惧间战栗)",
            runtimeEn: "IF (Observe orbit contradicting scripture) THEN (Trigger: Shiver between curious thrill and heretic fear)"
        }
      },
      {
        id: "khmer_angkor",
        name: "吴哥窟/神王", nameEn: "Khmer Empire",
        def: "丛林石质神殿，庞大水利，神王降临。",
        defEn: "Jungle stone temples, huge waterworks, Devaraja.",
        core: "不朽的幻象。国力耗尽构建石头宇宙。 | 锚定 ($): M4 石化狂想 (Petrified_Rhapsody)",
        coreEn: "Immortal phantasm. Nation drained for stone universe. | Anchor ($): M4 Petrified_Rhapsody",
        logic: "【镜像过载】：为了在地上1:1复制须弥山（大他者服务器），物理水利系统不堪重负。最终被热带雨林的实在界（藤蔓与季风）静默并吞噬了所有代码。",
        logicEn: "[Mirror Overload]: To 1:1 copy Mount Meru (Other's server) on earth, physical hydro-system breaks. Eventually tropical Real (vines/monsoons) silently eats all codes.",
        patch: {
            mechanics: "须弥山全息投影协议 + [建筑消耗 = 榨干; 水利耦合 = 脆弱; 神王自恋 = Max]",
            mechanicsEn: "Meru_Hologram_Protocol + [Build_Cost = Drained; Hydro_Coupling = Brittle; Devaraja_Narcissism = Max]",
            aesthetic: "带着神秘微笑的巨型四面佛。石块表面爬满厚重青苔与树根的废土生命力。",
            aestheticEn: "Giant 4-faced Buddhas with mystic smiles. Stones covered in thick moss and root wasteland vitality.",
            runtime: "IF (水利系统在雨季完全崩溃冲毁农田) THEN (触发：在巨大的微笑着的石雕面前绝望地饿死)",
            runtimeEn: "IF (Hydro system bursts in monsoon ruining crops) THEN (Trigger: Desparate starvation before giant smiling stone)"
        }
      },
      {
        id: "holy_roman_disorder",
        name: "神圣罗马帝国", nameEn: "HRE Fragment",
        def: "碎片化德意志。选帝侯，既不神圣也不罗马。",
        defEn: "Fragmented Germany. Electors. Neither holy nor Roman.",
        core: "权力真空博弈。夹缝小国群体的无尽焦虑。 | 锚定 ($): M3 补丁拼图 (Patchwork_Puzzle)",
        coreEn: "Power vacuum game. Endless anxiety of micro-states. | Anchor ($): M3 Patchwork_Puzzle",
        logic: "【能指未命名异常】：顶层大他者（皇帝）只是个空心引用（Null Pointer），导致系统碎成数百个微型闭环（诸侯）。法律与信仰都在无止境的死锁中反复横跳。",
        logicEn: "[Signifier Null Exception]: Top Other (Emperor) is a Null Pointer, shattering sys into hundreds of micro-loops (princes). Law & faith jump constantly in deadlocks.",
        patch: {
            mechanics: "碎屏空转协议 + [中央权威 = <1%; 内部摩擦 = Max; 切换阵营几率 = 极高]",
            mechanicsEn: "Shattered_Screen_Idle + [Central_Auth = <1%; Internal_Friction = Max; Faction_Switch = V.High]",
            aesthetic: "挂满数百种繁杂徽章的议事厅。华丽的铠甲配上极度琐碎无聊的利益争吵。",
            aestheticEn: "Halls hung with hundreds of complex crests. Fancy armor plus extremely petty tedious interest bickering.",
            runtime: "IF (被强势大国要求表态站队) THEN (触发：利用复杂的封建法律文书进行毫无底线的逃避与妥协)",
            runtimeEn: "IF (Strong power demands taking sides) THEN (Trigger: Bottomless dodge & compromise via complex feudal docs)"
        }
      },
      {
        id: "jeanne_darc_fire",
        name: "圣女贞德", nameEn: "Age of Joan",
        def: "百年战争神启。少女作为战争图腾与奇迹。",
        defEn: "100yr war oracle. Maid as war totem and miracle.",
        core: "神圣疯癫。普通主体被大他者献祭。 | 锚定 ($): M2 神启肉身 (Oracle_Flesh)",
        coreEn: "Holy madness. Ordinary subject sacrificed by Other. | Anchor ($): M2 Oracle_Flesh",
        logic: "【内核越权溢出】：极度匮乏的王权在崩溃边缘调用了“神启盲盒”。少女物理接收了幻听信号并爆发巨大威能，但当系统稳定后，越权的“活圣人”必须被当作Bug物理销毁（烧死）以修补理性网栅。",
        logicEn: "[Kernel Privilege Overflow]: Starving crown calls 'Oracle lootbox' on brink. Maid physically receives audio-halucinations and bursts massive power. Once sys stabilizes, the 'living saint' bug must be physically deleted (burned) to patch rational grid.",
        patch: {
            mechanics: "图腾燃烧协议 + [神启威能 = 破限; 军心感染率 = Max; 卸磨杀驴判定 = 必定]",
            mechanicsEn: "Totem_Burn_Protocol + [Oracle_Power = Limit_Break; Morale_Infect = Max; Burn_Bridge_Check = True]",
            aesthetic: "污秽战场上身穿银色板甲举旗咆哮的纯净少女。审判庭火刑架上烈火吞噬肉体的凄美悲剧。",
            aestheticEn: "Filthy camp, pure maid roaring in silver plate. Stake fire swallowing flesh in poignant tragedy.",
            runtime: "IF (听到天使的声音下达冲锋指令) THEN (触发：无视常理的流矢穿透与必死绝境，进入亢奋无敌状态)",
            runtimeEn: "IF (Hear angel voice ordering charge) THEN (Trigger: Ignore arrows and doomed odds, entering hyper invincible state)"
        }
      },
      {
        id: "venice_merchant",
        name: "威尼斯商人", nameEn: "Venetian Republic",
        def: "商业谍战，黑死病隔离，巨额财富与海洋霸权。",
        defEn: "Biz spies, plague quarantine, wealth and sea.",
        core: "契约残酷性。金钱消解血缘与信仰。 | 锚定 ($): M1 契约吸血 (Contract_Vampirism)",
        coreEn: "Contract cruelty. Money dissolves blood/faith. | Anchor ($): M1 Contract_Vampirism",
        logic: "【数字法西斯】：泻湖上建立了一个纯粹的数据交换系统。所有的情感、宗教甚至人肉（一磅肉）都被精算为货币流。资本展现了其冰冷而绝对平等的解构力量。",
        logicEn: "[Num Fascism]: A pure data swap system on lagoon. All emotion, religion, even flesh (pound of meat) actuary-priced into fiat. Cap exhibits cold, equal deconstructive power.",
        patch: {
            mechanics: "天平冷血协议 + [利益权重 = 绝对100%; 亲情/道德权重 = 0; 信息差收割 = Max]",
            mechanicsEn: "Scale_Coldblood_Protocol + [Profit_Weight = 100%; Moral_Weight = 0; Info_Gap_Reap = Max]",
            aesthetic: "华丽面具与水城倒影底下流动的黑银。水牢与丝绸堆叠出的极度金钱拜物教。",
            aestheticEn: "Fancy masks & black silver under water city reflection. Water-dungeons & piled silks showing extreme money fetish.",
            runtime: "IF (发现挚友的商船沉没导致破产) THEN (触发：在心底产生一丝怜悯前，大脑瞬间启动吞并其剩余资产的计算)",
            runtimeEn: "IF (Best friend's ship sinks causing bankruptcy) THEN (Trigger: Before pity hits, brain calcs taking over their assets)"
        }
      },
      {
        id: "maya_terminal",
        name: "阿兹特克黄昏", nameEn: "Aztec End",
        def: "特诺奇蒂特兰活人祭与手持火枪的白神降临。",
        defEn: "Tenochtitlan sacrifices vs musket white gods.",
        core: "文明降维打击。自闭逻辑遇到异形体系。 | 锚定 ($): M4 系统不兼容 (System_Incompatible)",
        coreEn: "Dimension drop. Autistic logic meets alien sys. | Anchor ($): M4 System_Incompatible",
        logic: "【协议格式不兼容】：太阳帝国通过献祭维持大他者运行。当骑马持枪的西班牙人（被误认为神）接入系统时，旧能指发生严重致命错误，整个帝国的信念防线在开枪瞬间液化。",
        logicEn: "[Protocol Format Incompatible]: Sun empire runs Other via sacrifice. When horse-riding gun-toting Spaniards (mistaken as gods) plug in, old signifiers hit fatal error. Empire's belief defense liquefies on gunshot.",
        patch: {
            mechanics: "高维覆写协议 + [神话崩溃率 = 100%; 生物免疫力 = 0被天花击穿; 武力豁免 = 失效]",
            mechanicsEn: "Higher_Dim_Overwrite + [Myth_Crash = 100%; Bio_Immunity = 0_Smallpox; Martial_Exempt = Void]",
            aesthetic: "佩戴灿烂羽毛的武士被铅弹轰出肉洞。黄金融化成条被粗暴运上盖伦帆船的极致暴力掠夺。",
            aestheticEn: "Bright feathered warriors blown open by lead bullets. Gold melted and roughly loaded to galleons in pure violent loot.",
            runtime: "IF (看到不会流血生病的骑马铁皮怪物) THEN (触发：几十万人的庞大帝国产生不可抑制的集体心理退行与瘫痪)",
            runtimeEn: "IF (See unbleeding iron horse-monsters) THEN (Trigger: Massive empire of 100k+ hits unstoppable collective regress/paralysis)"
        }
      },
      {
        id: "samurai_monastery",
        name: "僧兵时代", nameEn: "Sōhei Period",
        def: "武装寺庙，袈裟与长刀。佛教世俗极端化。",
        defEn: "Armed temples, robes & naginata. Extreme secular Buddhism.",
        core: "暴力慈悲。用杀戮保护空门底座的逻辑矛盾。 | 锚定 ($): M6 杀生护生 (Killing_Salvation)",
        coreEn: "Violent mercy. Kill to protect void base. | Anchor ($): M6 Killing_Salvation",
        logic: "【空性被兵器缝合】：为了保护“色即是空”的非物质叙事，竟动员了最极端的物理暴力集合（僧兵）。彼岸与此岸因为暴力而产生了极为荒诞的狂热连接。",
        logicEn: "[Void Sutured by Weapons]: To protect 'form is void' narrative, recruits extreme physical violence (Sōhei). Shores of there and here connect via absurd fanatic violence.",
        patch: {
            mechanics: "薙刀护法协议 + [教条解释度 = 随意扭曲; 集团武力 = 极高; 死亡畏惧 = 被清零]",
            mechanicsEn: "Naginata_Dharma_Protocol + [Dogma_Twist = Arbitrary; Group_Force = V.High; Death_Fear = Zeroed]",
            aesthetic: "白色头巾包裹的僧众挥舞长薙刀，背景是熊熊燃烧的大型木制佛殿，血迹溅落于佛经上。",
            aestheticEn: "White-cowled monks swinging naginata, raging fire burning large wood temples, blood splashing on sutras.",
            runtime: "IF (世俗大名要求缴纳税款) THEN (触发：在‘南无阿弥陀佛’的整齐暴喝中砍下使者的头颅)",
            runtimeEn: "IF (Secular lord demands tax) THEN (Trigger: Chop envoy head amidst uniform roars of 'Namu Amida Butsu')"
        }
      },
      {
        id: "ottoman_rise",
        name: "奥斯曼崛起", nameEn: "Ottoman Conquest",
        def: "君士坦丁堡陷落巨炮。血税与新军体系。",
        defEn: "Constantinople falls to giant cannons. Blood tax & Janissaries.",
        core: "文明易主。新引擎跨代碾压中世纪的城墙。 | 锚定 ($): M4 格式化碾压 (Format_Crush)",
        coreEn: "Civ handover. New engine rolls over medieval walls. | Anchor ($): M4 Format_Crush",
        logic: "【代码降维重写】：乌尔班巨炮不仅仅是物理武器，它直接轰塌了象征界“永不陷落的千年帝国”神话。更高效的官僚与包容度体系直接平替了僵化过时的基督教防御圈。",
        logicEn: "[Code Dimension Rewrite]: Urban bombard isn't just physical; it blasts the Symbolic 'unfallen 1000-yr empire' myth. High-efficiency bureau/tolerance smoothly replaces stiff Christian defense.",
        patch: {
            mechanics: "城墙降维协议 + [新生武力突破 = 破限; 旧纪元恐惧 = Max; 系统兼并率 = 极强]",
            mechanicsEn: "Wall_Dim_Drop_Protocol + [New_Force_Break = Limit_Break; Old_Era_Fear = Max; Sys_Merge = Strong]",
            aesthetic: "巨大青铜炮管喷射硝烟，新月旗帜在千年残垣断壁上插上。华丽的近卫军方阵踩踏拜占庭的碎石。",
            aestheticEn: "Giant bronze barrel spitting smoke, crescent flags on 1000-yr rubble. Fancy Janissaries stomping Byzantine stones.",
            runtime: "IF (城墙被轰开的一瞬间) THEN (触发：一个时代的绝对停机，伴随着惊恐的旧贵族如梦初醒)",
            runtimeEn: "IF (Wall blasted open instantly) THEN (Trigger: Absolute halt of an era, terrified old nobles waking from dream)"
        }
      }
    ]
};
