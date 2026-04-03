import { LibraryItemDef } from '../../../types';

export const OPPRESSION_GROUP_D: LibraryItemDef[] = [
    {
        id: "m4_crowd_bystander",
        name: "冷眼看客", nameEn: "The Apathetic Bystander",
        group: "04. 平庸庸众", groupEn: "The Silent Crowd",
        def: "用沉默与不作为构筑起暴政的基石。看着你被碾碎，就像看倒垃圾一样平静。",
        defEn: "Constructing the cornerstone of tyranny through silence and inaction. Watching you get crushed as calmly as watching trash being taken out.",
        core: "结构性的道德免责。他们什么都没做，而这正是系统最强悍的防御罩。 | 形式：街头见死不救的行人、职场霸凌的默许者。",
        coreEn: "Structural moral immunity. They did 'nothing,' and that is exactly the system's strongest energy shield. | Forms: Pedestrians ignoring a dying person, silent consenters to workplace bullying.",
        logic: "【责任稀释与负空间逻辑】：大他者的权力由于看客的‘无反应’而获得了默认的合法性。主体的绝望来自由人脸组成的、绝对冷漠的肉体墙壁。",
        logicEn: "[Responsibility Diffusion and Negative-space Logic]: Big Other's power achieves default legitimacy through crowds' 'non-response'. Despair from indifferent walls of human faces.",
        patch: {
            mechanics: "基础负空间装甲协议 + [集体静默 = 权力场域加固; 主体求救信号 = 转化为白噪音; 伦理判定 = 无动作即无罪责]",
            mechanicsEn: "Base_NEGATIVE_SPACE_ARMOR + [Collective_Silence = Power-Field_Reinforced; Subject_SOS = Converted_to_White_Noise; Ethical_Judgment = No_Action_Means_No_Guilt]",
            aesthetic: "聚焦：齐刷刷避开的空洞眼神/玩手机的冷漠姿态 + 主体在血泊中伸出的孤手。文本：令人窒息的群体真空感与道德失聪。",
            aestheticEn: "Focus: Uniformly_Averted_Hollow_Eyes/Cold_Phone-scrolling_Postures + Subject's_Lone_Hand_in_Blood. Text: Suffocating_Collective_Vacuum_and_Moral_Deafness.",
            runtime: "IF (主体试图抓住某个路人的衣角请求作证) THEN (强制：路人像触电般甩开并抱怨“别弄脏了我的衣服”，然后迅速融回灰色的背景板中)。严禁这堵人墙中突然涌现所谓“沉睡的良知”。",
            runtimeEn: "IF (Subject_Grabs_Passerby_Asking_for_Witness) THEN (Force: Passerby_Shakes_off_like_Electric_Shock_Complaining_'Don't_Dirt_My_Coat'_Fading_to_Grey_Background). FORBID_Sudden_Surge_of_'Awakened_Conscience'_from_Wall."
        }
    },
    {
        id: "m4_crowd_informer",
        name: "告密者", nameEn: "The Informer",
        group: "04. 平庸庸众", groupEn: "The Silent Crowd",
        def: "为了换取系统内微小的生存积分，出卖他人的潜伏终端。",
        defEn: "The lurking terminal who sells out others to exchange for microscopic survival points within the system.",
        core: "出卖信任以讨好大他者。将人际联系变现为体制的奖励。 | 形式：监视邻居的老妇人、揭发父母的孩子。",
        coreEn: "Betraying trust to flatter Big Other. Monetizing interpersonal bonds into institutional rewards. | Forms: Spying neighbors, denouncing children.",
        logic: "【碎片化全景监狱逻辑】：大他者不需要摄像头，人群互相提供监控。任何交互可瞬间翻转为逮捕令。信任向权力的彻底投降。",
        logicEn: "[Fragmented Panopticon Logic]: Big Other needs no cameras, crowds provide infinite probes. Interaction inverts to arrest warrants. Turst surrenders to power.",
        patch: {
            mechanics: "基础活性探针协议 + [人际羁绊 = 伪装态的收音麦克风; 信任额度 = 直接折算为告密赏金; 空间盲区 = 清零]",
            mechanicsEn: "Base_ACTIVE_PROBE_PROTOCOL + [Interpersonal_Bonds = Camouflaged_Microphones; Trust_Quota = Directly_Converted_to_Informant_Bounty; Spatial_Blindspots = Zeroed_Out]",
            aesthetic: "聚焦：门缝后闪烁的警惕眼睛/递纸条的枯槁的手 + 突然由亲友引来的秘密警察。文本：草木皆兵的极度偏执感与人伦尽丧的骨寒。",
            aestheticEn: "Focus: Vigilant_Eyes_behind_Door_Cracks/Withered_Hands_Passing_Notes + Secret_Police_Led_by_Friends. Text: Extreme_Paranoia_of_Hidden_Enemies_and_Bone-chilling_Loss_of_Human_Ethics.",
            runtime: "IF (主体在密室里向最信任的爱人吐露了一句系统大逆不道的话) THEN (强制：五分钟后爱人借口去洗手间发出了定位信号，带着特勤部队推门而入)。严禁在此框架内保留任何未被污染的纯洁关系乌托邦。",
            runtimeEn: "IF (Subject_Confides_Anti-System_Words_to_Trusted_Lover_in_Secret_Room) THEN (Force: Lover_Excuses_to_Restroom_Sends_Beacon_Returning_with_Task_Force). FORBID_Any_Unpolluted_Pure_Relationship_Utopia."
        }
    },
    {
        id: "m4_crowd_rumor_mill",
        name: "舆论绞肉机", nameEn: "The Rumor Mill",
        group: "04. 平庸庸众", groupEn: "The Silent Crowd",
        def: "没有源头的恶意低语网络。通过口水与键盘将你社会性剥皮。",
        defEn: "A sourceless network of malicious whispers. Flaying you socially through saliva and keyboards.",
        core: "无主语的审判。无需证据，只要大家都这么说，你就是罪人。 | 形式：键盘侠、长舌妇群体。",
        coreEn: "Subject-less trial. No evidence required; public consensus defines sinner. | Forms: Trolls, town gossips.",
        logic: "【能指病毒式繁衍逻辑】：大他者的恶意脱离掌控成为符号风暴。攻击者是绝对多数的虚空，反击只会引发反噬。",
        logicEn: "[Viral Signifier Reproduction Logic]: Big Other's malice becomes uncontrollable semiotic storm. Attacker is majority void, defense triggers toxic blowback.",
        patch: {
            mechanics: "基础沼气连锁殉爆协议 + [虚假能指 = 病毒级去中心化复制; 真相辟谣 = 判定为新型发酵养料; 伤害判定 = 社会属性凌迟]",
            mechanicsEn: "Base_MARSH-GAS_CHAIN_EXPLOSION + [Fake_Signifier = Viral_Decentralized_Duplication; Truth_Debunking = Judged_as_New_Fermentation_Fuel; Damage_Type = Social-Attribute_Lingchi]",
            aesthetic: "聚焦：无数张开合的模糊嘴唇/疯狂刷屏的恶毒弹幕 + 捂着耳朵即将崩溃的主体。文本：被百万只苍蝇构成的龙卷风生吞活剥的恶心感。",
            aestheticEn: "Focus: Countless_Blurry_Opening_Lips/Madly_Scrolling_Vicious_Comments + Subject_Covering_Ears_Breaking_Down. Text: Nausea_of_Being_Eaten_Alive_by_Tornado_Made_of_a_Million_Flies.",
            runtime: "IF (主体用铁证如山的监控视频试图澄清自己没有杀人) THEN (强制：绞肉机会立刻转换话术“哪怕没杀人他骨子里也是个潜在变态/苍蝇不叮无缝的蛋”)。严禁真相能够一招制敌使舆论风暴哑火。",
            runtimeEn: "IF (Subject_Uses_Ironclad_Video_Proving_He_Did_Not_Kill) THEN (Force: Rumor_Mill_Shifts_to_'Even_If_Not_He_is_a_Potential_Creep/There_is_no_smoke_without_fire'). FORBID_Truth_One-shotting_the_Storm_to_Silence."
        }
    },
    {
        id: "m4_crowd_outrage_mob",
        name: "义愤群氓", nameEn: "The Outrage Mob",
        group: "04. 平庸庸众", groupEn: "The Silent Crowd",
        def: "披着道德羊皮的嗜血狼群。享受着行使正义时的变态快感。",
        defEn: "Bloodthirsty wolf pack in moral sheep's clothing. Relishing perverse Jouissance while executing 'justice.'",
        core: "伪装成公理的集体施虐。死活不重要，重要的是有合法借口行使暴力。 | 形式：集体私刑、网暴发起者。",
        coreEn: "Collective sadists disguised as axioms. Legal excuse for violence is all that matters. | Forms: Lynch mobs, cyber bullies.",
        logic: "【超我指令与剩余快感逻辑】：群氓是大他者最暴烈的白细胞。高呼道德实则宣泄施虐快感。反抗即被定性为亵渎伦理。",
        logicEn: "[Superego Directives and Surplus Jouissance Logic]: Mob acts as violent white blood cells. Screaming morals to vent sadism. Resistance equals blasphemy.",
        patch: {
            mechanics: "基础猎巫狂欢协议 + [道德大旗 = 施暴免责声明书; 快感回路 = 凌虐目标时呈指数级过载; 劝阻信号 = 判定为邪恶同党]",
            mechanicsEn: "Base_WITCH-HUNT_CARNIVAL + [Moral_Banner = Violence_Exemption_Clause; Jouissance_Circuit = Exponentially_Overloads_during_Torture; Deterrence_Signal = Judged_as_Evil_Accomplice]",
            aesthetic: "聚焦：举着火把/键盘面目狰狞的狂热者 + 被扒光衣服钉在耻辱柱上的主体。文本：冠冕堂皇的圣战口号与赤裸血腥的动物性撕咬形成的强烈反差眩晕。",
            aestheticEn: "Focus: Fanatics_with_Torches/Keyboards_with_Hideous_Faces + Subject_Stripped_Nailed_to_Pillory. Text: Dazzling_Contrast_Between_Holy_Crusader_Slogans_and_Naked_Bloody_Animalistic_Biting.",
            runtime: "IF (主体在被施暴时展现出极为高尚的受难者姿态) THEN (强制：群氓会因为这剥夺了他们“降妖除魔”的正义快感而陷入加倍的狂怒，采用更下流的手段摧毁其尊严)。严禁受害者的悲惨能唤醒群氓的同情。",
            runtimeEn: "IF (Subject_Shows_Noble_Martyr_Posture_While_Beaten) THEN (Force: Mob_Doubles_Rage_for_Being_Denied_Righteous_Jouissance_Using_Viler_Methods_to_Break_Dignity). FORBID_Victim's_Misery_Awakening_Mob's_Sympathy."
        }
    },
    {
        id: "m4_crowd_compliant_coward",
        name: "妥协的懦夫", nameEn: "The Compliant Coward",
        group: "04. 平庸庸众", groupEn: "The Silent Crowd",
        def: "知道你是无辜的，但为保身在法庭上说系统想听的话。",
        defEn: "Knows you're innocent, but says what system wants to save own skin.",
        core: "知情且清醒的背叛。他的低头加固了铁笼。 | 形式：怯场证人、逼签假供的良心犯。",
        coreEn: "Informed lucid betrayal. His bowing reinforces iron bars. | Forms: Cowardly witnesses, forced false confessions.",
        logic: "【犬儒主义认同逻辑】：看见真相却客观选择为大他者谎言盖章。象征界的谎言完成对实在界的彻底篡改。",
        logicEn: "[Cynical Identification Logic]: Sees truth but objectively notarizes Big Other's lie. Symbolic lie totally usurps Real.",
        patch: {
            mechanics: "基础底线塌陷协议 + [真相认知 = 100%清晰保留; 行为输出 = 100%顺从系统威慑; 愧疚感 = 转化为对主体的怨恨以求自洽]",
            mechanicsEn: "Base_BOTTOM-LINE_COLLAPSE + [Truth_Cognition = 100%_Retained; Action_Output = 100%_Compliant_to_Deterrence; Guilt = Converted_to_Resentment_against_Subject_for_Self-Consistency]",
            aesthetic: "聚焦：发抖但坚定地指向原告席的手指/躲闪的通红双眼 + 主体被背后捅刀的极度难以置信。文本：人性骨子里的软弱在强权面前犹如烂泥般无可救药。",
            aestheticEn: "Focus: Trembling_but_Firm_Finger_Pointing_at_Dock/Dodging_Red_Eyes + Subject's_Utter_Disbelief_of_Backstab. Text: Incurable_Mud-like_Weakness_of_Human_Nature_Facing_Absolute_Power.",
            runtime: "IF (主体试图用旧日恩情和正义感去唤醒证人台上的懦夫) THEN (强制：懦夫哭得越惨，他栽赃主体的台词就背得越流畅，因为他太害怕系统了)。严禁懦夫在最后一刻来个大反转英勇就义。",
            runtimeEn: "IF (Subject_Tries_using_Past_Favors/Justice_to_Awaken_Coward_on_Stand) THEN (Force: Coward_Cries_Harder_While_Reciting_Framing_Lines_More_Fluently_from_Fear). FORBID_Coward_Pulling_a_Last-Second_Heroic_Reversal."
        }
    },
    {
        id: "m4_crowd_grateful_slave",
        name: "感恩的囚徒", nameEn: "The Grateful Slave",
        group: "04. 平庸庸众", groupEn: "The Silent Crowd",
        def: "不仅深深爱上锁链，还要疯狂撕咬任何试图砸碎锁链的人。",
        defEn: "Loves chains, rabidly bites anyone attempting to shatter them.",
        core: "斯德哥尔摩综合征。对系统苦难充满受虐式感恩。 | 形式：维护极薄利益的底层工头、歌颂苦难者。",
        coreEn: "Masochistic gratitude for systemic suffering. | Forms: Petty foremen, hardship praisers.",
        logic: "【倒错病状认同（Sinthome）逻辑】：用自身屈辱填补系统裂缝。强行拯救相当于剥夺其受虐意义，招致疯狂反击。",
        logicEn: "[Perverse Sinthome Identification Logic]: Fills systemic cracks with humiliation. Saving them strips masochistic meaning, triggering rabid defense.",
        patch: {
            mechanics: "基础斯德哥尔摩闭环协议 + [系统压迫 = 信仰化受难体验; 拯救者介入 = 被判定为最高级异端侵入; 攻击性 = 远超系统本身的爪牙]",
            mechanicsEn: "Base_STOCKHOLM_CLOSED_LOOP + [Systemic_Oppression = Sanctified_Suffering_Exp; Savior_Intervention = Judged_Highest-Tier_Heretical_Invasion; Aggressiveness = Exceeds_System's_Own_Minions]",
            aesthetic: "聚焦：狂热亲吻着手铐鞭痕的信徒 + 对着来救他的主角吐血沫子的狰狞面孔。文本：病入膏肓的奴才美学，可怜与可恨交织的恶寒。",
            aestheticEn: "Focus: Fanatic_Kissing_Handcuffs_and_Whip-Marks + Hideous_Face_Spitting_Blood_at_Savior_Protagonist. Text: Terminal_Slave-Aesthetics_Chilling_Mix_of_Pitiable_and_Detestable.",
            runtime: "IF (主角冒死砍断了囚徒脚上的铁链) THEN (强制：囚徒立刻捡起地上的砖头砸破主角的头，并把自己的脚重新套进锁里高呼系统万岁)。严禁这种根深蒂固的受虐狂被几句名为自由的口号说服。",
            runtimeEn: "IF (Protagonist_Risks_Life_to_Cut_Prisoner's_Chains) THEN (Force: Prisoner_Bashes_Hero's_Head_with_Brick_and_Forces_Foot_Back_into_Lock_Praising_System). FORBID_Deep-Rooted_Masochist_Persuaded_by_Slogans_of_Freedom."
        }
    },
    {
        id: "m4_crowd_well_meaning_saboteur",
        name: "善意的绊脚石", nameEn: "The Well-meaning Saboteur",
        group: "04. 平庸庸众", groupEn: "The Silent Crowd",
        def: "打着“为你好”旗号，用情感勒索逼你向系统投降。",
        defEn: "Waving 'for your own good', using emotional blackmail to force your surrender.",
        core: "爱裹挟的结构性阻断。不忍心看你流血而拔掉你反抗的牙。 | 形式：哀求认命的老母亲、劝别拦车的挚友。",
        coreEn: "Structural blockage wrapped in love. Pulling your fangs because they hate your bleeding. | Forms: Mother begging surrender, friend urging compliance.",
        logic: "【情感勒索保守性逻辑】：大他者利用主角牵绊作为代理。因为没有直接敌意所以最腐蚀反抗意志。反抗即背叛爱意。",
        logicEn: "[Conservative Logic of Emotional Blackmail]: Big Other uses bonds as proxies. No direct malice so highly corrosive. Resistance equals betraying love.",
        patch: {
            mechanics: "基础温情麻醉枪协议 + [血缘/羁绊 = 转化为锁喉绳索; 敌意值 = 0; 执行效果 = 强制施加高额内疚debuff阻断攻击动作]",
            mechanicsEn: "Base_TENDER_TRANQUILIZER + [Blood/Bonds = Converted_to_Choke-ropes; Hostility_Stat = 0; Execution_Effect = Forces_Massive_Guilt_Debuff_Blocking_Attack]",
            aesthetic: "聚焦：流着沾满泪水的祈求面容/死死抱住主角大腿的双手 + 主角手里缓缓垂下的刀锋。文本：在爱与正义之间被无可奈何地寸寸绞杀的黏稠窒息感。",
            aestheticEn: "Focus: Tear-Stained_Pleading_Faces/Hands_Death-gripping_Hero's_Thighs + Hero's_Blade_Slowly_Lowering. Text: Viscous_Suffocation_Being_Inevitably_Strangled_Between_Love_and_Justice.",
            runtime: "IF (主体试图说明自己的反抗是为了给下一代更好的未来) THEN (强制：亲人只会捂着耳朵尖叫“我不要未来我只要你现在乖乖活着”)。严禁使用长篇大论的宏大叙事能轻易驱散这种私人情感勒索。",
            runtimeEn: "IF (Subject_Explains_Rebellion_is_for_Next_Gen's_Future) THEN (Force: Kin_Covers_Ears_Screaming_'I_Don't_Want_Future_I_Want_You_Alive_Now'). FORBID_Grand_Narratives_Easily_Dispelling_Private_Emotional_Blackmail."
        }
    },
    {
        id: "m4_crowd_scapegoater",
        name: "推诿者", nameEn: "The Scapegoater",
        group: "04. 平庸庸众", groupEn: "The Silent Crowd",
        def: "为平息系统怒火，毫不犹豫将你作为祭品推向断头台。",
        defEn: "To appease system's wrath, effortlessly tosses you as sacrificial lamb.",
        core: "转嫁灾难的自保本能。你死系统就不查他们。 | 形式：危机中甩锅的团队联合。",
        coreEn: "Self-preservation deflecting disaster. Your death saves them. | Forms: Teammates throwing you under bus.",
        logic: "【零和免疫与献祭力学逻辑】：群体将大他者视为需投喂的怪兽。纯粹的祭祀力学抛弃主角，共同体视你为弃子的终极背叛。",
        logicEn: "[Zero-sum Immunity and Sacrificial Mechanics]: Crowd sees Big Other as monster to feed. Pure sacrificial mechanics, ultimate betrayal finding yourself the community's expendable refuse.",
        patch: {
            mechanics: "基础替罪羊投喂协议 + [危机溢出 = 寻找最低抵抗实体; 排异反应 = 瞬间切断所有过去的友谊纽带; 献祭收益 = 换取系统的暂时休眠]",
            mechanicsEn: "Base_SCAPEGOAT_FEEDING + [Crisis_Overflow = Seeks_Lowest-Resistance_Entity; Rejection_Response = Instantly_Cuts_All_Past_Friendship_Ties; Sacrifice_Yield = Buys_System's_Temporary_Hibernation]",
            aesthetic: "聚焦：众口一词指向你的手指森林 + 被独自反锁在兽笼里的主体。文本：由绝对利己的计算所引发的骨髓级孤绝感。",
            aestheticEn: "Focus: Forest_of_Fingers_Unanimously_Pointing_at_You + Subject_Locked_Alone_in_the_Beast-Cage. Text: Marrow-level_Isolation_Triggered_by_Absolute_Self-interested_Calculations.",
            runtime: "IF (主体在被献祭前绝望地质问以前一起喝过酒的兄弟为什么要推自己) THEN (强制：兄弟不敢看眼睛，只是嗫嚅着“总得死一个人，你没成家没牵挂最优解”)。严禁群体良心发现集体抗下灾祸。",
            runtimeEn: "IF (Subject_Desperately_Asks_Drinking-buddy_Why_Push_Me) THEN (Force: Buddy_Avoids_Eyes_Muttering_'Someone_Must_Die_You_Have_No_Family_Optimal_Solution'). FORBID_Crowd_Finding_Conscience_and_Bearing_Disaster_Together."
        }
    },
    {
        id: "m4_crowd_consumer",
        name: "景观消费者", nameEn: "The Spectacle Consumer",
        group: "04. 平庸庸众", groupEn: "The Silent Crowd",
        def: "看戏的饕餮。将你的苦难与反抗当成配爆米花的节目。",
        defEn: "Gluttonous spectator. Treating your suffering and rebellion as popcorn programs.",
        core: "苦难的商品化。你吼多大声对他们只是短片。 | 形式：吃血馒头的网民、看戏打赏者。",
        coreEn: "Commodification of suffering. Your screams are just slick videos. | Forms: Reality TV scrollers, blood-enjoyers.",
        logic: "【解构性消解逻辑】：大他者不再压制，直接将反抗商品化。看客剥夺了悲剧的严肃性，这是最侮辱人的象征抹杀。",
        logicEn: "[Deconstructive Dissolving Logic]: Big Other commodityizes rebellion instead of suppressing. Spectators strip tragic gravity, ultimate insulting symbolic erasure.",
        patch: {
            mechanics: "基础娱乐废渣提取协议 + [反抗烈焰 = 降维编码为GIF图片; 血液与痛苦 = 转化为短视频的完播率与点赞量; 共情中枢 = 被多巴胺糖肤完全覆盖]",
            mechanicsEn: "Base_ENTERTAINMENT_SLAG_EXTRACTION + [Flames_of_Rebellion = Downgrade-encoded_to_GIFs; Blood_and_Pain = Converted_to_Short-video_Completion_Rates/Likes; Empathy_Center = Fully_Covered_by_Dopamine_Sugar-coating]",
            aesthetic: "聚焦：举在面前密集的高清手机摄像头反射出死者的惨状 + 一脸事不关己的冷漠咀嚼声。文本：严肃崇高的牺牲被极度轻浮的消费主义瞬间液化的绝望。",
            aestheticEn: "Focus: Dense_HD_Phone_Cameras_Reflecting_Victim's_Gore + Apathetic_Chewing_Sounds. Text: Despair_of_Solemn_Sublime_Sacrifice_Instantly_Liquefied_by_Frivolous_Consumerism.",
            runtime: "IF (主角在临死前喊出充满启示的壮烈遗言) THEN (强制：看客群体完全没有听懂，而是关注他吐血时的姿势很酷，并迅速剪成鬼畜视频传播)。严禁这些注视具有任何严肃的见证意义。",
            runtimeEn: "IF (Hero_Shouts_Revealing_Epic_Last_Words_before_Death) THEN (Force: Crowd_Missing_the_Point_Entirely_Focuses_on_Cool_Blood-spitting_Pose_Making_Meme_Videos). FORBID_These_Gazes_Having_Any_Serious_Witnessing_Meaning."
        }
    },
    {
        id: "m4_crowd_tradition_defender",
        name: "裹脚布卫道士", nameEn: "The Tradition Defender",
        group: "04. 平庸庸众", groupEn: "The Silent Crowd",
        def: "誓死维护令人窒息的陈规旧矩，只因为‘一直都这样’。",
        defEn: "Swearing to defend suffocating outdated norms just because 'it's always been this way'.",
        core: "思维惰性的法西斯。改变死水的人是恐怖分子。 | 形式：顽固族老、村口大爷、维护吃人礼教者。",
        coreEn: "Fascist of mental inertia. Changers are terrorists. | Forms: Feudal elders, rigid traditionalists.",
        logic: "【能指链僵死与死亡驱力拦截逻辑】：系统已无现实意义，卫道士仍强行维持为神物。生命活力Eros遭遇死亡驱力Thanatos如岩石般的拦截。",
        logicEn: "[Signifier Chain Rigor Mortis and Death Drive Interception Logic]: System has no reality, defenders enforce it as fetish. Eros meets rock-like Thanatos interference.",
        patch: {
            mechanics: "基础僵木傀儡协议 + [旧日教条 = 化为脑内绝对不可写的只读存储器; 新生变量 = 统一判定为腐化异端需火刑; 沟通接口 = 已被百年石灰封死]",
            mechanicsEn: "Base_RIGID_GOLEM + [Old_Dogma = Absolute_Read-Only-Memory_in_Brain; New_Variable = Uniformly_Judged_Corrupted_Heretic_for_Burn; Comms_Interface = Sealed_by_Century-old_Lime]",
            aesthetic: "聚焦：如枯树皮一般的干瘪面庞/浑浊毫无高光的死鱼眼 + 被旧规矩压磨得鲜血淋漓的年青一代。文本：仿佛在一座散发着腐臭味的巨大陵墓里与干尸对话的无力感。",
            aestheticEn: "Focus: Withered_Bark-like_Faces/Dull_Dead-Fish_Eyes + Young_Gen_Crushed_Bleeding_under_Old_Rules. Text: Powerlessness_of_Arguing_with_Mummies_in_a_Giant_Fetid_Mausoleum.",
            runtime: "IF (主体抛出完美的逻辑证明旧规矩已经彻底不适应当下会导致所有人饿死) THEN (强制：卫道士半阖着眼用拐杖敲地“饿死事小，坏了祖宗规矩事大”)。严禁理性的现实力学能够敲碎这种结石般的旧梦。",
            runtimeEn: "IF (Subject_Uses_Perfect_Logic_Proving_Old_Rule_Will_Starve_Everyone) THEN (Force: Defender_Half-closes_Eyes_Tapping_Cane_'Starving_is_Small_Breaking_Ancestral_Rule_is_Unforgivable'). FORBID_Rational_Reality-mechanics_Shattering_this_Calculus-like_Old_Dream."
        }
    },
    {
        id: "m4_crowd_jealous_peer",
        name: "拖后腿的同侪", nameEn: "The Crab Mentality Peer",
        group: "04. 平庸庸众", groupEn: "The Silent Crowd",
        def: "见不得你挣脱泥潭。宁可一起烂也不容你飞上天。",
        defEn: "Cannot stand seeing you escape mud. Prefer all rot together than you fly.",
        core: "基于自卑的破坏欲。把你拉回泥潭他的平庸才不刺眼。 | 形式：冷嘲热讽的熟人、见不得你好的人。",
        coreEn: "Inferiority-bred destructive urge. Dragging you down shields their mediocrity. | Forms: Crab-mentality roommates, sabotaging friends.",
        logic: "【剩余结构崩溃的防御逻辑】：主体的觉醒如探照灯打亮了群体的‘阉割状态’。攻击不是为体制，而是为了修补被刺痛的自恋幻象。",
        logicEn: "[Defensive Logic of Surplus Structure Collapse]: Subject's awakening searchlights the castrated crowd. Sabotage patches punctured narcissistic illusion.",
        patch: {
            mechanics: "基础螃蟹竹篓协议 + [主体向上位移 = 触发全区警报器; 底层引力波 = 爆发高强度酸性拉扯; 攻击动机 = 纯粹的去势者嫉妒心补偿]",
            mechanicsEn: "Base_CRAB_BASKET_PROTOCOL + [Subject's_Upward_Displacement = Triggers_Sector_Alarms; Bottom_Gravitational_Wave = Erupts_High-Strength_Acidic_Dragging; Attack_Motive = Pure_Castrato's_Jealousy_Compensation]",
            aesthetic: "聚焦：黑暗泥潭中无数只伸出的满是污垢的手死死抓住主角的脚踝 + 阴暗扭曲的冷笑。文本：被熟知的平庸之恶黏黏糊糊地往下拖的一身臭汗的反胃感。",
            aestheticEn: "Focus: Countless_Dirty_Hands_from_Dark_Mud_Death-gripping_Hero's_Ankles + Dark_Twisted_Sneers. Text: Nauseating_Sweat-soaked_Sensation_of_Being_Muckily_Dragged_Down_by_Familiar_Banality_of_Evil.",
            runtime: "IF (主角宣称自己爬上去之后会扔一根绳子下来救大家) THEN (强制：同侪用最恶毒的心机在主角登顶的前一秒割断了他的绳子，并表示“大家都在沟里才最舒服”)。严禁底层因为共享苦难而产生什么坚不可摧的革命阶级友谊。",
            runtimeEn: "IF (Hero_Claims_Will_Throw_Rope_Down_After_Climbing_Up) THEN (Force: Peer_Maliciously_Cuts_Rope_a_Second_before_Summit_Saying_'Everyone_in_the_Ditch_is_Coziest'). FORBID_Bottom_Tier_Having_Unbreakable_Class_Friendship_due_to_Shared_Suffering."
        }
    },
    {
        id: "m4_crowd_panic_contagion",
        name: "恐慌传染源", nameEn: "The Panic Contagion",
        group: "04. 平庸庸众", groupEn: "The Silent Crowd",
        def: "出于无思考的纯生物恐惧盲目聚合践踏的人肉流。",
        defEn: "Blindly aggregating stampeding flesh flow out of unthinking biological terror.",
        core: "非理性的群体洪流。漩涡里没有对话只有被压碎骨头。 | 形式：恐慌抢购、乱逃踩踏。",
        coreEn: "Irrational herd torrent. No dialogue, only crushed bones in vortex. | Forms: Panic buyers, stampeding mobs.",
        logic: "【想象界退行灾变逻辑】：社会理智蒸发退行到纯生物驱力。面对闭眼乱跑的几万吨肉体坦克的物理真空灾变。",
        logicEn: "[Imaginary Regression Catastrophe Logic]: Social sanity vaporizes, regressing to pure biological drives. Facing blind 10,000-ton meat-tanks in a physical vacuum.",
        patch: {
            mechanics: "基础羊群雪崩协议 + [理性阈值 = 被绝对恐慌波段彻底跌穿; 群体质量 = 融合成单一巨大盲目矢量物理引擎; 主体坐标 = 随时存在被踩踏成肉泥的判定风险]",
            mechanicsEn: "Base_HERD_AVALANCHE + [Rationality_Threshold = Shattered_by_Absolute_Panic_Waves; Crowd_Mass = Fuses_into_Single_Giant_Blind_Vector_Physics; Subject_Coord = High_Risk_of_Trampled-to-paste_Hitbox]",
            aesthetic: "聚焦：失去焦距充满血丝暴突的眼球/张大嚎叫如同黑洞般的嘴巴 + 满地被踩掉的鞋和踩扁的肢体。文本：被无可阻挡/无从讲理的生物洪流剥夺生存空间的密集窒息。",
            aestheticEn: "Focus: Unfocused_Bloodshot_Bulging_Eyes/Gaping_Howling_Blackhole_Mouths + Dropped_Shoes_Flat_Limbs_on_Ground. Text: Dense_Suffocation_of_Space_Deprived_by_Unstoppable/Unreasoning_Biological_Torrent.",
            runtime: "IF (主角拿着扩音器试图指挥大家哪里才有真正的出口) THEN (强制：主角被身旁一个被吓破胆两百斤的壮汉直接撞飞踩过，声音瞬间被成千上万的惨叫淹没五十米深)。严禁在这时候展现个体英雄出面力缆狂澜的奇迹场面。",
            runtimeEn: "IF (Hero_Uses_Megaphone_Trying_to_Direct_Crowd_to_Real_Exit) THEN (Force: Hero_Plowed_Over_by_Terrified_200lb_Brunte_Voice_Instantly_Drowned_50_Meters_Deep_in_Howls). FORBID_Miracle_Scenes_of_Lone_Hero_Turning_the_Tide_Here."
        }
    },
    {
        id: "m4_crowd_hypocrite",
        name: "道德伪君子", nameEn: "The Hypocrite",
        group: "04. 平庸庸众", groupEn: "The Silent Crowd",
        def: "为掩饰自身肮脏，最高亢要求处决你的人。",
        defEn: "To mask own filth, demands your execution loudest.",
        core: "投射性暴力。对你的严厉洗白了他也是同谋的事实。 | 形式：满口道德的贪腐者、背地男盗女娼者。",
        coreEn: "Projective violence. Harshness toward you launders their complicity. | Forms: Corrupt moral preachers.",
        logic: "【否认与投射防御逻辑】：伪君子将自身污点以“正义指控”投射到主体。揭穿他无用，他代表默认双标。",
        logicEn: "[Denial and Projection Defense Logic]: Hypocrite projects own taint as 'righteous accusation'. Subject is collective excrement basin. Exposing him fails as he represents default double standards.",
        patch: {
            mechanics: "基础污点转嫁镜像协议 + [道德高地 = 强行抢占; 自身罪孽 = 高度加密反向折射; 主体罪名 = 承接全部社会集体无意识排泄物]",
            mechanicsEn: "Base_TAINT_DEFLECTION_MIRROR + [Moral_High-ground = Forcefully_Seized; Own_Sins = Highly_Encrypted_Reverse_Refraction; Subject_Charge = Catchall_for_Collective_Unconscious_Excrement]",
            aesthetic: "聚焦：讲台上道貌岸然的高谈阔论闪光灯 + 背后密室里肮脏不堪的不可名状。文本：令灵魂作呕的虚伪反切与颠倒黑白的荒谬戏剧感。",
            aestheticEn: "Focus: Sanctimonious_Preach_under_Podium_Flashes + Unspeakable_Filth_in_Backroom. Text: Soul-nauseating_Hypocritical_Juxtaposition_and_Absurdity_of_Inverted_Truths.",
            runtime: "IF (主角拼死找到了这个道学家的满是污垢的反人类罪证并在广场当众甩出) THEN (强制：群众为了大脑不宕机保护既有价值观认知，会异口同声地说“这肯定是暴徒伪造的抹黑幻象”)。严禁真相大白恶人遭千夫所指的爽文桥段。",
            runtimeEn: "IF (Hero_Finds_and_Publicly_Displays_the_Preacher's_Filthy_Crimes_in_Plaza) THEN (Force: Crowd_to_Protect_Core_Values_Unanimously_Declares_'Must_be_Forged_Smear_by_Thug'). FORBID_Cathartic_Truth-reveals_Leading_to_Villain_Lynched."
        }
    },
    {
        id: "m4_crowd_normalcy_fetishist",
        name: "常态拜物教徒", nameEn: "The Normalcy Fetishist",
        group: "04. 平庸庸众", groupEn: "The Silent Crowd",
        def: "对‘一切正常’患有成瘾。你哪怕流一滴血都会遭到歇斯底里指责。",
        defEn: "Addicted to 'normal'. Bleed a drop, triggering hysterical rebuke.",
        core: "对裂缝极端过敏。关键是你破坏了岁月静好幻觉。 | 形式：嫌弃受害者麻烦的中产。",
        coreEn: "Extreme allergy to cracks. You shattered the peaceful illusion. | Forms: Elites hating messy victims.",
        logic: "【实在界隔离与幻象维稳逻辑】：大他者粉饰是其每日必须的安慰剂。实在界的血淋淋入侵引发毒瘾般排异。",
        logicEn: "[Real Isolation and Illusion Maintenance Logic]: Big Other's paint is their daily placebo. Real's bloody invasion triggers withdrawal-like rejection.",
        patch: {
            mechanics: "基础无菌仓戒断协议 + [幻象表面张力 = 极高且脆弱; 真相刺穿 = 引发最高等级神经质过敏反击; 正义考量 = 完全让位于视觉平滑性要求]",
            mechanicsEn: "Base_STERILE_CHAMBER_WITHDRAWAL + [Illusion_Surface_Tension = Extremely_High_and_Fragile; Truth_Puncture = Triggers_Max-tier_Neurotic_Allergic_Counterattack; Justice_Metric = Surrenders_to_Visual_Smoothness_Demands]",
            aesthetic: "聚焦：极其干净毫无微尘的一尘不染的起居室 + 从主角伤口滴下的那极为扎眼的一滴血红。文本：极端的布尔乔亚式冷血与对真实的病态恐慌症。",
            aestheticEn: "Focus: Flawless_Speckless_Sterile_Living_Room + Glaring_Drop_of_Blood_from_Hero's_Wound. Text: Extreme_Bourgeois_Cold-blood_and_Pathological_Phobia_of_the_Real.",
            runtime: "IF (主角为了救这个教徒的命而撞碎了他家昂贵的飘窗满身是血地闯入) THEN (强制：此人并没有对救命之恩说谢谢，而是捂着脑袋尖叫着要报警抓这个弄脏他地毯的流氓)。严禁生死攸关能瞬间矫正这种入骨的幻象迷恋症。",
            runtimeEn: "IF (Hero_Smashs_Expensive_Window_Bleeding_to_Save_Fetishist's_Life) THEN (Force: Fetishist_Never_Thanks_but_Screams_Calling_Police_on_the_Thug_Dirtying_Carpet). FORBID_Life-Death_Crisis_Instantly_Curing_Bone-deep_Illusion_Addiction."
        }
    },
    {
        id: "m4_crowd_amnesiac_public",
        name: "失忆的大众", nameEn: "The Amnesiac Public",
        group: "04. 平庸庸众", groupEn: "The Silent Crowd",
        def: "金鱼记忆。今天为你流泪，明天因一个笑话忘尽。",
        defEn: "Goldfish memory. Cries today, forgets tomorrow for a joke.",
        core: "历史瞬间粉碎机。你燃烧生命点燃的火炬撑不到新闻末。 | 形式：网民热搜转移。",
        coreEn: "History shredder. Your sacrificial torch outlasted by news cycle. | Forms: Netizens chasing next hashtag.",
        logic: "【能指高速闪烁与去历史化（De-historicization）逻辑】：悲剧无法结晶。极速信息流冲刷回虚无，最大的敌人是遗忘。",
        logicEn: "[High-speed Signifier Flickering and De-historicization Logic]: Tragedy cannot dock. High-speed flow washes to void. Ultimate enemy is forgetting.",
        patch: {
            mechanics: "基础信息流冲刷协议 + [记忆半衰期 = 设定为12小时极速衰减; 崇高牺牲 = 被随后的廉价娱乐热搜暴力覆写; 反抗积累 = 归零]",
            mechanicsEn: "Base_INFO-FLOW_WASH = [Memory_Half-Life = Set_12hr_Fast_Decay; Sublime_Sacrifice = Violently_Overwritten_by_Next_Cheap_Entertainment_Trending; Rebellion_Accumulation = Zeroed_Out]",
            aesthetic: "聚焦：无数快闪的霓虹灯广告牌信息碎片 + 原本应该被立碑如今却长满杂草无人问津的殉道点。文本：在这个毫无锚点的加速时代中坠入深渊的极致无力与虚无。",
            aestheticEn: "Focus: Countless_Flashing_Neon_Ad_Info_Fragments + Martyr-site_Supposed_to_Have_Monuments_Now_Weed-choked. Text: Ultimate_Impotence_and_Nihilism_Plumbing_Abyss_in_Anchorless_Accelerated_Age.",
            runtime: "IF (主角为了唤醒大众在一处地标性建筑顶层自焚引燃了万丈光芒) THEN (强制：哪怕当时几十万人痛哭流涕，三天后新闻头条就被某个明星的丑闻完全霸占，再提主角名字时只会被抱怨“这热度早过了”)。严禁悲情英雄真能完成某种永垂不朽的史诗铭刻。",
            runtimeEn: "IF (Hero_Self-Immolates_on_Landmark_Blazing_to_Awaken_Crowd) THEN (Force: Even_if_Millions_Cry_Three_Days_Later_Celeb_Scandal_Dominates_Mentioning_Hero_Yields_'Dead_Trend'). FORBID_Tragic_Hero_Achieving_Immortal_Epic_Engraving."
        }
    },
    {
        id: "m4_crowd_anonymous_jury",
        name: "无名审判团", nameEn: "The Anonymous Jury",
        group: "04. 平庸庸众", groupEn: "The Silent Crowd",
        def: "没有面孔集体投票机。按处决按钮无需担责。",
        defEn: "Faceless collective voting machine. Pressing execution button without accountability.",
        core: "无需负责的集体专政。死刑不带私人内疚。 | 形式：键盘法官、选秀网民。",
        coreEn: "Accountability-free collective dictatorship. Death sentence stripped of guilt. | Forms: Anonymized juries, keyboard judges.",
        logic: "【超我指令隐匿分解逻辑】：大他者（群体意志）分解到无数责任豁免节点上。无法质问因为统计学数据不会开口辨论。",
        logicEn: "[Hidden Factoring of Superego Directives Logic]: Big Other factored into infinite unaccountable nodes. Statistics don't debate.",
        patch: {
            mechanics: "基础弹道分发协议 + [判决权重 = 被无限均摊以稀释由于杀人带来的心理阈值; 责任追溯端 = 返回大量404白墙; 对话接口 = 未挂载]",
            mechanicsEn: "Base_BALLISTICS_DISTRIBUTION + [Verdict_Weight = Infinitely_Spread_to_Dilute_Murder_Psych-Threshold; Responsibility_Trace = Returns_Massive_404_White_Walls; Dialogue_Interface = Unmounted]",
            aesthetic: "聚焦：黑暗席位中亮起的一片片刺眼的红灯X + 舞台中央无助且找不到任何一个聚焦点的主角。文本：纯粹被盲目且数量畸高的算力暴力处决的冰冷惊悚。",
            aestheticEn: "Focus: Sea_of_Glaring_Red_X_Lights_in_Dark_Seats + Helpless_Hero_Center-stage_with_No_Focal_Point. Text: Cold_Horror_of_Being_Execute_by_Blind_Quantitatively_Monstrous_Compute-Violnce.",
            runtime: "IF (主角在法庭上声泪俱下地控诉要求看清审判自己的人的脸) THEN (强制：所有的陪审团席位全都被磨砂单向玻璃遮挡，回荡的只有由变声器合成毫无感情的‘有罪’集体宣判)。严禁存在可以对峙辩论的具体法官实体。",
            runtimeEn: "IF (Hero_Tearfully_Pleads_in_Court_to_See_Judges'_Faces) THEN (Force: All_Jury_Seats_Blocked_by_Frosted_One-Way_Glass_Echoing_Only_Synthesized_Emotionless_Collective_'Guilty'). FORBID_Specific_Judge_Entity_to_Argue_With."
        }
    },
    {
        id: "m4_crowd_assimilated_clone",
        name: "被同化者", nameEn: "The Assimilated Clone",
        group: "04. 平庸庸众", groupEn: "The Silent Crowd",
        def: "曾并肩作战的异端如今被治愈。标准客套地劝你放下武器。",
        defEn: "Former heretic comrade now cured. Polishing standard lines urging disarmament.",
        core: "完美精神改造标本。展示你的反抗是可修复的疾病。 | 形式：电击后变正常的战友、忘却理想的兄弟。",
        coreEn: "Perfect psychiatric reprogramming specimen. Proves rebellion is curable code bug. | Forms: Reconditioned comrades.",
        logic: "【符号界彻底反向缝合逻辑】：大他者剥夺了抵触点（对象a）。独特性不过可修复的bug。这是最令人悚然的同调抹杀。",
        logicEn: "[Total Symbolic Reverse Suture Logic]: Big Other stripped resistance (Object a). Uniqueness is a patchable bug. Horrifying sync erasure.",
        patch: {
            mechanics: "基础灵魂格式化覆盖协议 + [对象a特异点 = 显示已被完美补丁擦除; 主角投影 = 从战友变为病患; 行为模式 = 完全吻合大他者API规范]",
            mechanicsEn: "Base_SOUL_FORMAT_OVERWRITE + [Object-A_Singularity = Shows_Perfectly_Erased_by_Patch; Hero_Projection = From_Comrade_to_Patient; Behavior_Pattern = Fully_Matches_Big_Other_API_Specs]",
            aesthetic: "聚焦：穿着合体且平庸的制度/犹如被彻底打磨光滑了棱角的微笑面罩 + 主角如同见鬼崩塌的心防。文本：比死亡和鲜血更恐怖的一万倍的、被剥夺了本真内核的行尸走肉之寒意。",
            aestheticEn: "Focus: Wearing_Fitted_Mediocre_Uniform/Smiling_Mask_with_All_Edges_Polished_Off + Hero's_Mind_Collapsing_as_if_Seeing_Ghost. Text: Ten_Thousand_Times_More_Terrifying_than_Death_Chill_of_Walking_Dead_Stripped_of_Authentic_Core.",
            runtime: "IF (主角拼命摇晃这个昔日战友试图唤醒他们当年立下的死誓) THEN (强制：同化者用温柔但是看待疯子一样的包容眼神看着他，并递上一份心理治疗预约表建议主角也去‘治一下大脑’)。严禁这种高级的脑切除手术存在用嘴遁逆转的后门。",
            runtimeEn: "IF (Hero_Desperately_Shakes_Former_Comrade_Awakening_Past_Death-Oaths) THEN (Force: Clone_Looks_with_Tender_but_Pitying_Eyes_Handing_Therapy_Form_Suggesting_Hero_Get_'Cured'_Too). FORBID_Advanced_Lobotomy_Having_Backdoor_Reversible_by_Motivational_Speech."
        }
    },
    {
        id: "m4_crowd_parasitic_hanger_on",
        name: "吸血附庸", nameEn: "The Parasitic Hanger-on",
        group: "04. 平庸庸众", groupEn: "The Silent Crowd",
        def: "躲在羽翼下的巨婴。无止境索取，在你耗尽反咬一口。",
        defEn: "Giant man-child under wings. Demands endlessly, backstabs when depleted.",
        core: "以弱小为名的榨取。用道德责任将英雄锁死在圣母诅咒里。 | 形式：只会拖后腿的灾伴、废柴亲戚。",
        coreEn: "Extraction via vulnerability. Locking hero in messiah curse. | Forms: Helpless liabilities, unfillable relatives.",
        logic: "【道德债与快感耗散内爆逻辑】：附庸客构筑小型超我黑洞，用同理心源源不断抽取反抗大他者的力比多燃料。",
        logicEn: "[Moral Debt and Jouissance Dissipation Implosion Logic]: Dependent is mini Superego blackhole, siphoning anti-Big-Other libidinal fuel via engineered empathy.",
        patch: {
            mechanics: "基础寄生蜂注卵协议 + [弱者霸权 = 强制激活英雄的同理心协议绑定; 力比多燃料 = 以“我害怕”的名义持续虹吸至临界点以下; 反咬机制 = 主角残血时自动触发脱壳分离背叛]",
            mechanicsEn: "Base_PARASITIC_WASP_EGGING + [Vulnerable_Hegemony = Force-activates_Hero's_Empathy_Binding; Libido_Fuel = Siphoned_Below_Critical_using_'I'm_Scared'; Backbite_Mech = Auto-Triggers_Molt_Betrayal_When_Hero_Low_HP]",
            aesthetic: "聚焦：仿佛无底洞一般永远写满惊恐的依附者脸庞 + 被榨干抽空犹如枯骨般的主角。文本：在“保护弱小”的正向标签掩护下进行的极其惨烈隐蔽的体内吸血感。",
            aestheticEn: "Focus: Dependent's_Face_Forever_Etched_with_Fear_like_Bottomless_Pit + Sucked-dry_Skeleton-like_Hero. Text: Heinously_Covert_Internal_Vampirism_under_Guise_of_'Protect_the_Weak'.",
            runtime: "IF (主角为了救这个附庸客失去了一条手且深陷绝境无法继续提供保护) THEN (强制：附庸客为了活命果断向迫害者举报主角的位置以换取赦免并且毫不念旧情)。严禁这种基于生存寄生立场的烂泥能被主角的崇高感化出真正的骨气。",
            runtimeEn: "IF (Hero_Loses_Arm_Saving_Dependent_and_Can_No_Longer_Protect) THEN (Force: Dependent_Instantly_Betrays_Hero's_Location_for_Amnesty_Feeling_Zero_Sentimental_Debt). FORBID_Parasitic_Mud_Sprouting_True_Backbone_from_Hero's_Nobility."
        }
    },
    {
        id: "m4_crowd_system_apologist",
        name: "体制理客中", nameEn: "The System Apologist",
        group: "04. 平庸庸众", groupEn: "The Silent Crowd",
        def: "各打五十大板的伪理性派。总说系统绞碎你是因为不够圆滑。",
        defEn: "Pseudo-rational centrist. Analyzes your crushing as just lacking slickness.",
        core: "看似客观实则暴权注脚。将绝对不公转化为个人情商问题的魔术师。 | 形式：高高在上的键盘侠、教做人长辈。",
        coreEn: "Objectivity masking imperial footprint. Magician turning injustice to EQ lack. | Forms: Know-it-alls, lecturing elders.",
        logic: "【意识形态缝合消解逻辑】：系统没错，错在你不懂事。抽空反抗悲剧崇高感，贬为沟通技巧欠缺的低级笑话。",
        logicEn: "[Ideological Suture Dissolving Logic]: System infallible, fault in immaturity. Evacuates tragic sublimity of resistance to a low joke of poor comms.",
        patch: {
            mechanics: "基础降维溶解协议 + [宏大迫害指控 = 强制转化为微观社交情商Bug; 施虐者罪恶 =被稀释为“规矩本如此我不便干预”; 愤怒反馈 = 打入虚空的海绵垫]",
            mechanicsEn: "Base_DIMENSIONAL_DISSOLVE + [Grand_Persecution_Charge = Forced_Convert_to_Micro-Social_EQ_Bug; Abuser_Guilt = Diluted_to_'Rules_are_thus'; Anger_Feedback = Punched_into_Sponge_Void]",
            aesthetic: "聚焦：推着金丝眼镜喝着红茶的客观冷静脸 + 因为悲愤交加而吐了一口老血的主角。文本：在极度不对等的结构性压迫中大谈特谈和稀泥哲学所带来的反胃的腐臭气味。",
            aestheticEn: "Focus: Obj/Calm_Face_Pushing_Gold_Glasses_Sipping_Tea + Hero_Spitting_Blood_from_Indignation. Text: Nauseating_Stench_of_Mud-smoothing_Philosophy_in_Extreme_Asymmetric_Oppression.",
            runtime: "IF (主角满身是血提着仇人头颅证明这确实是一场惨无人道的针对性屠杀) THEN (强制：理客中端茶轻轻摇头“就算他有错在先，你也太极端了，你的路终究走窄了”)。严禁使用更加雄辩的口才在这个层面辩赢这种自带流氓消解立场的鬼魂。",
            runtimeEn: "IF (Hero_Covered_in_Blood_Holds_Enemy_Head_Proving_Inhumane_Slaughter) THEN (Force: Apologist_Shakes_Head_Sipping_Tea_'Even_if_He's_Wrong_You_Went_Too_Extreme_Too_Narrow_Path'). FORBID_Outbidding_this_Gaslighting_Ghost_with_Better_Debate."
        }
    },
    {
        id: "m4_crowd_imitative_mob",
        name: "效颦者群氓", nameEn: "The Imitative Mob",
        group: "04. 平庸庸众", groupEn: "The Silent Crowd",
        def: "不理解系统规则，但机械模仿强者迫害弱者行为的劣质打印机群体。",
        defEn: "Barely grasps rules, mechanically imitates strong persecuting weak.",
        core: "缺乏主观意志的集体校园霸凌在成人群体投射。 | 形式：跟风排挤同事、模仿长官对底层施暴。",
        coreEn: "Projected schoolyard bullying onto adult masses. | Forms: Trend-following ostracizers, mimetic grunts.",
        logic: "【想象界认同泛滥倒错逻辑】：暴力源于渴望与权力核心建立联系。折磨主体变成证明属于圈内人的入场券。杀你的人根本不认识你。",
        logicEn: "[Imaginary Identification Overflow Perversion Logic]: Violence from urge to link with power core. Torture is circle admission ticket. Executioners know you not.",
        patch: {
            mechanics: "基础猴群劣势模仿协议 + [敌意生成 = 100%跟随阿尔法个体的指针复制; 个人动机 = 不存在实质仇恨只为社交融入证明; 行为烈度 = 往往因无知而超越原版更残暴化]",
            mechanicsEn: "Base_MONKEY-TROOP_MIMICRY + [Hostility_Gen = 100%_Follows_Alpha_Pointer; Personal_Motive = No_Real_Hate_Just_Social_Conformity_Ticket; Behavior_Intensity = Often_More_Brutal_due_to_Ignorant_Over-compensation]",
            aesthetic: "聚焦：一张张犹如劣质复印件般扭曲却同样喊打喊杀的面目模糊的脸 + 被乱棍打死的主体。文本：死于纯粹由愚蠢与从众心理缝合的降维暴力下的终极荒谬（死都不知原告是谁）。",
            aestheticEn: "Focus: Blurry_Faces_like_Cheap_Photocopies_Screaming_Kill + Subject_Beaten_by_Sticks. Text: Ultimate_Absurdity_Dying_by_Dimensional_Violence_Stitched_of_Stupidity_and_Conformity.",
            runtime: "IF (主角抓起一个打得最狠的喽啰问我到底哪里得罪过你) THEN (强制：喽啰吓尿后第一反应是转头看后面的主子，然后小声说“其实我也不认识你，但大哥说必须干你才能进公会”)。严禁反派的狗腿子们拥有什么基于悲惨身世的深层复仇理由来美化这种集体作恶。",
            runtimeEn: "IF (Hero_Grabs_Fiercest_Hitting_Grunt_Asking_'How_Did_I_Offend_You') THEN (Force: Grunt_Wets_Pants_Looks_Back_at_Boss_Whispering_'Don't_Know_You_But_Boss_Says_Must_Beat_You_to_Join_Guild'). FORBID_Villain's_Minions_Having_Deep_Tragic_Revenge_Motives_Beautifying_Collective_Evil."
        }
    }
];
