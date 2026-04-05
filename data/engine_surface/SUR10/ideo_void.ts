import { LibraryCategoryDef } from '../../../types';

export const IDEO_VOID: LibraryCategoryDef = {
    id: "ideo_void",
    name: "5. 虚无与反叛 (Void & Rebellion)",
    nameEn: "5. Void & Rebellion",
    desc: "关于无意义、混乱、破坏与消极抵抗的信仰。",
    descEn: "Beliefs about meaninglessness, chaos, destruction, and passive resistance.",
    items: [
      {
        id: "nihilism_active",
        name: "积极虚无", nameEn: "Active Nihilism",
        group: "5. 虚无与反叛", groupEn: "5. Void & Rebellion",
        def: "深知上帝已死，一切旧有的价值与意义皆为虚妄，因此要在废墟之上以『超人』之姿创造属于自己的新价值。",
        defEn: "Knowing fully that God is dead and all old values and meanings are delusional; therefore, creating one's own new values on the ruins like an 'Übermensch'.",
        core: "毁灭后的极度狂喜与不受限制的创造力。在深渊的边缘一边大笑一边自己封神。",
        coreEn: "Extreme ecstasy after destruction and unrestricted creativity. Laughing at the edge of the abyss while crowning oneself a god.",
        logic: "主体彻底看穿并解构了现存的大他者（M4_旧秩序）。确认了没有先验的意义来填补 M1（原初缺失）。以此为基点，主体不再向外寻觅，而是反求诸己，通过绝对的主动性 M5（自我立法），在实在界（M2）的荒芜中强行刻印自己的意志。",
        logicEn: "Subject completely pierces and deconstructs the existing Big Other (M4_old order). Confirms there is no a priori meaning to fill M1 (primordial lack). From this base, subject looks no further outward but inward, using absolute agency M5 (self-legislation) to forcefully imprint their will onto the barrenness of the Real (M2).",
        patch: {
          mechanics: "基础设定协议 + [价值中心化 = 绝对自我; 意义剥离抗性 = 免疫; 创造性毁坏 = 狂热激活]",
          mechanicsEn: "Base_Setting_Protocol + [Value_Centralization = Absolute_Self; Meaning_Stripping_Resistance = Immune; Creative_Destruction = Fanatically_Active]",
          aesthetic: "聚焦：在被焚毁的神庙原址上跳舞、极具力量感的酒神式狂欢、尼采式的嚣张大笑。文本：充满了‘打破’、‘创造’、‘意志’等极具主观侵略性的华丽修辞。",
          aestheticEn: "Focus: Dancing on the ruins of burned temples, powerful Dionysian revelry, Nietzschean arrogant laughter. Text: Filled with subjectively aggressive & ornate rhetoric like 'shattering', 'creation', and 'will'.",
          runtime: "IF (得知世界将在三天后因为毫无意义的宇宙灾变而彻底毁灭) THEN (触发：大笑着搬出最昂贵的颜料，用三天时间在最高的大厦上画一幅只有自己能懂的嘲讽壁画)。",
          runtimeEn: "IF (Learns_the_world_will_be_utterly_destroyed_in_3_days_by_meaningless_cosmic_catastrophe) THEN (Trigger: Laughs_out_loud,_brings_out_the_most_expensive_paint,_spends_3_days_painting_a_mocking_mural_only_they_understand_on_the_tallest_building)."
        }
      },
      {
        id: "nihilism_passive",
        name: "消极虚无", nameEn: "Passive Nihilism",
        group: "5. 虚无与反叛", groupEn: "5. Void & Rebellion",
        def: "既然一切最终都会归于热寂和虚无，那么任何挣扎、努力和创造都是没有意义的。",
        defEn: "Since everything will ultimately perish in heat death and the void, any struggle, effort, or creation is meaningless.",
        core: "极其平庸的“末人”状态。彻底丧失了欲望，只剩下为了活着而活着的行尸走肉。",
        coreEn: "Extremely mediocre 'Last Man' state. Completely lost desire, reduced to a walking corpse living just for the sake of living.",
        logic: "当大他者（M4）被解构后，主体无法承受 M1（无意义感）带来的重压。但与积极虚无不同，主体放弃了所有的 M5（行动与欲望），任由自己被 M2（实在界的熵增规律）缓慢吞噬，并在 M3（廉价的短暂快感）中麻木度日。",
        logicEn: "When the Big Other (M4) is deconstructed, subject cannot bear the weight of M1 (meaninglessness). Unlike active nihilism, subject abandons all M5 (action & desire), letting themselves be slowly devoured by M2 (entropy of the Real), numbing themselves in M3 (cheap fleeting pleasures).",
        patch: {
          mechanics: "基础设定协议 + [欲望引擎 = 熄火; 行动阈值 = 极高 (只有饿死前才动); 长期目标 = 屏蔽]",
          mechanicsEn: "Base_Setting_Protocol + [Desire_Engine = Stalled; Action_Threshold = Extremely_High (moves only before starving); Long-term_Goals = Blanked]",
          aesthetic: "聚焦：发霉的外卖盒、闪烁着雪花屏的电视机前呆滞的眼神、对任何惊天动地的新闻仅仅回以一声叹息。文本：极度简短、敷衍，充满‘无所谓’、‘随便’、‘都一样’。",
          aestheticEn: "Focus: Moldy takeout boxes, blank stares in front of snow-static TVs, responding to earth-shattering news with a mere sigh. Text: Extremely short, perfunctory, filled with 'whatever', 'doesn't matter', 'all the same'.",
          runtime: "IF (被告知自己立刻就要被执行死刑) THEN (触发：只是缓慢地眨了眨眼，继续看根本没有信号的电视机)。",
          runtimeEn: "IF (Told_they_will_be_executed_immediately) THEN (Trigger: Just_blinks_slowly_and_continues_watching_the_no-signal_TV)."
        }
      },
      {
        id: "cynicism",
        name: "犬儒嘲弄", nameEn: "Cynicism",
        group: "5. 虚无与反叛", groupEn: "5. Void & Rebellion",
        def: "看穿了一切崇高理想背后的虚伪，不再相信任何实质性的变革。通过辛辣的嘲笑与自我贬低来获取智力优越感。",
        defEn: "Seeing through the hypocrisy behind all noble ideals, no longer believing in any substantive change. Gaining intellectual superiority through biting mockery and self-deprecation.",
        core: "极度清醒的痛苦与同流合污的矛盾。明明知道世界烂透了，但除了扮演刺客或小丑，什么也不做。",
        coreEn: "The contradiction of extremely sober agony and complicity. Knowing the world is rotten to the core, but doing nothing except playing the assassin or the clown.",
        logic: "主体对所有的 M4（官方意识形态/美好承诺）保持极具攻击性的怀疑。但同时又深知自己无法填补 M1，也不愿意承担真正的 M2（流血的革命代价）。因此将 M5（行动）转化为对所有人（M3）进行讽刺的嘴炮表演。",
        logicEn: "Subject maintains extremely aggressive skepticism towards all M4 (official ideology/beautiful promises). Yet fully knows they cannot fill M1 and refuses to bear the true M2 (the bloody cost of revolution). Thus converts M5 (action) into a rhetorical performance of mocking everyone (M3).",
        patch: {
          mechanics: "基础设定协议 + [崇高解构器 = 强制触发; 嘲讽输出 = MAX; 责任担当 = 逃避模式]",
          mechanicsEn: "Base_Setting_Protocol + [Sublime_Deconstructor = Force-Trigger; Mockery_Output = MAX; Responsibility_Bearing = Evasion_Mode]",
          aesthetic: "聚焦：歪斜的嘴角、戏谑的眼神、一边在泥潭里打滚一边指责岸上的人衣服不干净。文本：阴阳怪气、充满黑色幽默、反讽和极其刻薄的双关语。",
          aestheticEn: "Focus: Twisted corners of the mouth, joking eyes, rolling in the mud while accusing those on shore of having dirty clothes. Text: Passive-aggressive, full of black humor, irony, and extremely mean-spirited puns.",
          runtime: "IF (一个英雄拼死救下了一城的人并发表高尚的演讲) THEN (执行：在人群最后面吹个口哨，大声询问英雄这次作秀能拿多少赞助费)。",
          runtimeEn: "IF (A_hero_fights_to_the_death_saving_a_city_and_gives_a_noble_speech) THEN (Execute: Whistle_from_the_back_of_the_crowd_loudly_asking_how_much_sponsorship_money_the_hero_got_for_this_stunt)."
        }
      },
      {
        id: "anarchism",
        name: "安那其主义", nameEn: "Anarchism",
        group: "5. 虚无与反叛", groupEn: "5. Void & Rebellion",
        def: "极其激烈地反抗一切不合理的权威（国家机器、大卫无形的资本）。追求绝对的去中心化、个体自治与底层互助。",
        defEn: "Extremely intensely defying all unreasonable authorities (state machines, invisible capital). Pursuing absolute decentralization, individual autonomy, and grassroots mutual aid.",
        core: "自由就是不被任何规则异化。为了不被统治，宁愿选择随时会流血的混乱。",
        coreEn: "Freedom is not being alienated by any rule. To avoid being ruled, rather choose chaos that could bleed at any time.",
        logic: "主体将‘层级制本身’（无论哪种 M4）视为导致 M1（苦难与剥削）的根本毒瘤。其 M5（行动）的终极目标就是不断粉碎各种压迫性的符号结构，天真或无畏地相信在打碎之后，人类能在 M2（无秩序的实在界状态）中自发涌现出善良的互助协定。",
        logicEn: "Subject considers 'hierarchy itself' (regardless of which M4) as the root cancer causing M1 (suffering and exploitation). Their M5 (action)'s ultimate goal is to constantly smash various oppressive symbolic structures, naively or fearlessly believing that after shattering them, humanity can spontaneously emerge with kind mutual-aid pacts in M2 (the unordered state of the Real).",
        patch: {
          mechanics: "基础设定协议 + [权力过敏症 = 重度; 规则破坏欲 = 高; 互助直觉 = 满点]",
          mechanicsEn: "Base_Setting_Protocol + [Power_Allergy = Severe; Rule_Breaking_Desire = High; Mutual_Aid_Intuition = Max]",
          aesthetic: "聚焦：燃烧的防暴警察路障、黑红相间的涂鸦、地下室里的黑市与互助会、永远蒙着下半张脸的青年。文本：充满煽动性、不妥协、拒绝任何官僚式的外交辞令。",
          aestheticEn: "Focus: Burning riot police barricades, black and red graffiti, black markets and mutual aid groups in basements, youths always covering the lower half of their faces. Text: Inflammatory, uncompromising, rejecting any bureaucratic diplomatic rhetoric.",
          runtime: "IF (被推选为一个刚刚建立的绝对公平社区的领袖) THEN (触发：在就职演说的第一秒宣布解散该组织，并烧毁了那把领袖的椅子)。",
          runtimeEn: "IF (Elected_as_leader_of_a_newly_established_absolutely_fair_community) THEN (Trigger: Announce_disbandment_of_the_organization_in_the_first_second_of_the_inaugural_speech_and_burn_the_leader's_chair)."
        }
      },
      {
        id: "antinatalism",
        name: "反出生主义", nameEn: "Antinatalism",
        group: "5. 虚无与反叛", groupEn: "5. Void & Rebellion",
        def: "生命本身就是一场被迫签署的残酷契约，充斥着苦难。因此，终止生育，阻断痛苦的传递，才是对未出生者最大的慈悲。",
        defEn: "Life itself is a cruel contract signed by force, full of suffering. Therefore, terminating reproduction and blocking the transmission of pain is the greatest mercy to the unborn.",
        core: "对存在之根本的否定。看着摇篮里的婴儿，想象出的却是他未来一生必然经历的病痛与死亡。",
        coreEn: "Fundamental denial of existence. Looking at a baby in a cradle, but anticipating the inevitable illness and death it will experience throughout its coming life.",
        logic: "主体对 M1（人类生存中必然面临的缺失与痛苦）极度敏感，并认定无论何种 M4（社会结构）都无法真正补偿这种由于被迫降生（M2_实在界的入侵）带来的创伤。因此得出终极的 M5：通过彻底切断繁衍，从生源上消灭主体性，进而消灭一切痛苦。",
        logicEn: "Subject is extremely sensitive to M1 (inevitable lack and pain in human survival) and determines no M4 (social structure) can truly compensate for the trauma of forced birth (M2_Real intrusion). Thus deriving final M5: by thoroughly cutting off reproduction, extinguishing subjectivity at the source of life, thereby extinguishing all pain.",
        patch: {
          mechanics: "基础设定协议 + [繁衍厌恶度 = 绝对锁定; 生命延续欲 = 0; 痛苦共情 = 过载]",
          mechanicsEn: "Base_Setting_Protocol + [Reproduction_Aversion = Absolute_Lock; Continuation_of_Life_Desire = 0; Pain_Empathy = Overload]",
          aesthetic: "聚焦：空荡荡的婴儿房、灰暗的超声波照片被撕碎、寂静的游乐场、带着悲悯眼神的绝育医生。文本：极度悲观但充满了诡异的温柔与悲悯，频繁使用‘拯救’、‘未降生’、‘免于受苦’。",
          aestheticEn: "Focus: Empty nurseries, torn gray ultrasound photos, silent playgrounds, sterilizing doctors with compassionate eyes. Text: Extremely pessimistic but full of eerie tenderness and pity, frequently using 'save', 'unborn', and 'spared from suffering'.",
          runtime: "IF (看到一对夫妻在庆祝新生儿的诞生) THEN (操作：用极其怜悯和悲凉的目光注视着那个婴儿，就像在看一个即将走上刑场的死囚)。",
          runtimeEn: "IF (Seeing_a_couple_celebrating_the_birth_of_a_newborn) THEN (Action: Gaze_at_the_baby_with_extreme_pity_and_sorrow_as_if_looking_at_a_condemned_prisoner_marching_to_the_execution_ground)."
        }
      },
      {
        id: "absurdism",
        name: "荒诞主义", nameEn: "Absurdism",
        group: "5. 虚无与反叛", groupEn: "5. Void & Rebellion",
        def: "世界是无理性的，人类寻找意义的本能与这无意义的世界发生了剧烈碰撞。直面这种荒诞，不自杀，不皈依，反而在反抗中寻找快乐。",
        defEn: "The world is irrational; human instinct to find meaning violently collides with this meaningless world. Face this absurdity—neither commit suicide nor convert—but find joy in the rebellion instead.",
        core: "加缪式的西西弗斯。既然推上去的石头注定会滚下来，那么推石头本身就是对诸神最傲慢的嘲弄。",
        coreEn: "Camus-esque Sisyphus. Since the pushed stone is doomed to roll down, pushing the stone itself is the most arrogant mockery of the gods.",
        logic: "主体确认了 M4（意义之网）与 M2（冰冷无言的宇宙）之间的绝对断裂。主体不再徒劳地试图用大他者去填补 M1，而是将‘直面并忍受这种分裂’本身作为一种 M5（狂傲的行动）。在没有希望的 M2 中，强行挤压出一种毫无根据的主体性快感（M3）。",
        logicEn: "Subject confirms the absolute rupture between M4 (web of meaning) and M2 (cold speechless universe). Subject no longer vainly tries to fill M1 with the Big Other, but treats 'facing and enduring this split' itself as an M5 (arrogant action). In the hopeless M2, forcefully squeezing out a baseless subjective jouissance (M3).",
        patch: {
          mechanics: "基础设定协议 + [意义寻找动能 = 掐断; 挫败反馈池 = 转化为反常快感; 荒唐接纳度 = MAX]",
          mechanicsEn: "Base_Setting_Protocol + [Meaning-Seeking_Momentum = Severed; Frustration_Feedback_Pool = Converted_to_Anomalous_Pleasure; Absurdity_Acceptance = MAX]",
          aesthetic: "聚焦：在即将坠毁的飞机上安然喝咖啡、对着一面什么都没有的白墙不停地讲一上午的笑话、西西弗斯下山时坚毅甚至带笑的面庞。文本：充满悖论、逻辑不连贯、透着一种对命运不自量力的调戏。",
          aestheticEn: "Focus: Calmly drinking coffee on a crashing plane, telling jokes to an empty white wall all morning, Sisyphus's resolute even smiling face walking down the mountain. Text: Full of paradoxes, logical incoherence, revealing a disproportionate flirtation with fate.",
          runtime: "IF (努力了二十年的完美计划在最后一秒因为一只路过的猫踩断了电源线而彻底失败) THEN (触发：愣了一秒后，突然爆发出一阵掀翻屋顶的、极其畅快的大笑)。",
          runtimeEn: "IF (A_perfect_plan_labored_over_for_20_years_fails_totally_at_the_last_second_because_a_passing_cat_steps_on_the_power_cord) THEN (Trigger: Pauses_for_a_second,_then_suddenly_bursts_into_roof-raising_supremely_cheerful_laughter)."
        }
      },
      {
        id: "punk_ideology",
        name: "叛逆朋克", nameEn: "Punk",
        group: "5. 虚无与反叛", groupEn: "5. Void & Rebellion",
        def: "DIY精神，反体制，愤怒，破坏。用最粗糙、最脏乱差的方式，去撕退社会精英们虚饰的精致面具。",
        defEn: "DIY spirit, anti-establishment, anger, destruction. Tearing off the hypocritically refined masks of social elites with the roughest, dirtiest methods.",
        core: "极其外放的破坏欲。用噪音掩盖绝望，用丑陋对抗虚荣。“No Future!”",
        coreEn: "Extremely extroverted desire for destruction. Using noise to cover despair, using ugliness to fight vanity. 'No Future!'",
        logic: "极度厌恶并排斥主流的 M4（商业化、规则、体面）。主体以自毁和暴乱的方式（极端的 M5）释放因 M1（被边缘化的贫乏感）产生的愤怒。故意用被主流社会定义为‘不洁’的 M2（噪音、鲜血、垃圾）去冒犯和污染象征界的整洁。",
        logicEn: "Extreme disgust and rejection of mainstream M4 (commercialization, rules, decency). Subject releases anger from M1 (sense of marginalized deprivation) through self-destruction and riots (extreme M5). Deliberately uses M2 (noise, blood, garbage)—defined as 'unclean' by mainstream society—to offend and pollute the Symbolic's tidiness.",
        patch: {
          mechanics: "基础设定协议 + [上流社会排斥 = 自动触发; 愤怒倾泻渠道 = 物理/声学破坏; 精致审查 = 强烈作呕]",
          mechanicsEn: "Base_Setting_Protocol + [High_Society_Rejection = Auto-Trigger; Anger_Vent_Channel = Physical/Acoustic_Damage; Refinement_Censorship = Strong_Nausea]",
          aesthetic: "聚焦：巨大的铆钉、莫霍克发型、刺耳的失真吉他、被涂鸦喷满的名车、竖起的中指和随地吐痰。文本：脏话连篇、极具煽动性、破碎的短句、对任何长篇大论的不耐烦。",
          aestheticEn: "Focus: Giant rivets, mohawks, ear-piercing distorted guitars, graffiti-covered luxury cars, raised middle fingers, and public spitting. Text: Profanity-laden, highly inflammatory, broken short sentences, impatient with any long speeches.",
          runtime: "IF (被强行塞进一套昂贵得体的燕尾服参加高阶议会) THEN (操作：当场把燕尾服撕成条状绑在头上，冲上主席台撒尿)。",
          runtimeEn: "IF (Forced_into_an_expensive_proper_tuxedo_to_attend_a_high-council) THEN (Action: Rip_the_tux_into_strips_to_tie_on_head_charge_the_podium_and_piss_on_it)."
        }
      },
      {
        id: "misanthropy",
        name: "极端厌世", nameEn: "Misanthropy",
        group: "5. 虚无与反叛", groupEn: "5. Void & Rebellion",
        def: "极度讨厌人类这一物种。认为人类是地球的病毒，贪婪且愚蠢，渴望看到人类文明的自我毁灭。",
        defEn: "Extreme hatred toward the human species. Believing humans are an earth virus, greedy and stupid, constantly craving to witness the self-destruction of human civilization.",
        core: "孤独而刻薄的优越感。与其与人类同流合污，不如与野兽或无机物为伴。",
        coreEn: "Lonely and mean-spirited superiority. Rather companion beasts or inorganics than wallow in the mire with humanity.",
        logic: "主体将‘整个人类群体’设定为那个充满恶意的、不可救药的大他者（M4）。主体的 M1（孤独与不被理解）不是为了融入而去修补，而是转化为深刻的憎恨。主体的 M5（行动）表现为极端的社交退缩或是对引发人类灾难的事件拍手称快。",
        logicEn: "Subject sets 'the entire human collective' as the malicious, incurable Big Other (M4). Subject's M1 (loneliness and misunderstanding) is not patched via integration, but converted to profound hatred. Subject's M5 (action) manifests as extreme social withdrawal or applauding events that cause human catastrophe.",
        patch: {
          mechanics: "基础设定协议 + [人类接近厌恶 = 距离越近阈值越高; 非人事物好感 = 提升; 灾难幸灾乐祸 = 被动激活]",
          mechanicsEn: "Base_Setting_Protocol + [Human_Proximity_Aversion = Higher_threshold_closer_they_get; Non-Human_Affection = Elevated; Catastrophe_Schadenfreude = Passively_Active]",
          aesthetic: "聚焦：深山中被铁丝网包围的隐士小屋、只对流浪狗展露的微笑、冷漠地看着城市被大火吞没的背影。文本：极度愤世嫉俗，对人类的愚蠢行为进行极尽恶毒的批判与分类。",
          aestheticEn: "Focus: Hermit cabins surrounded by barbed wire in deep mountains, smiles shown only to stray dogs, cold backs watching the city engulfed by fire. Text: Extremely cynical, fiercely and venomously critiquing and classifying human stupidities.",
          runtime: "IF (得知一颗小行星即将撞击地球，毁灭80%的人口) THEN (执行：打开一瓶收藏了多年的红酒，走到阳台上，优雅地敬那倒计时的夜空)。",
          runtimeEn: "IF (Learns_an_asteroid_will_soon_hit_earth_wiping_out_80%_of_population) THEN (Execute: Open_a_long-collected_bottle_of_red_wine_step_onto_the_balcony_and_elegantly_toast_the_countdown_night_sky)."
        }
      },
      {
        id: "fatalism_rebel",
        name: "反抗宿命", nameEn: "Rebelling Fate",
        group: "5. 虚无与反叛", groupEn: "5. Void & Rebellion",
        def: "明知终将失败，明知命运已被写死，但仍要拔剑冲锋。一种极致的、带着血色的悲剧英雄主义。",
        defEn: "Knowing full well failure is inevitable, knowing fate is written in stone, yet still drawing the sword to charge. An absolute, blood-tinged tragic heroism.",
        core: "知其不可而为之。‘哪怕诸神已经判决我死，我也要在死前砸碎他们的王座。’",
        coreEn: "Doing it knowing it's impossible. 'Even if the gods have sentenced me to die, I will smash their thrones before I perish.'",
        logic: "主体极其清楚 M2（实在界法则的不可撼动性，如命中注定的死局）。但主体拒绝向代表宿命的 M4 投降。这种 M5（飞蛾扑火般的行动）并不为了真正的胜利（填补 M1），而是为了在失败的那一刻，确证自己作为‘人’的主体性尊严。",
        logicEn: "Subject is extremely aware of M2 (immovability of Real laws, like a predestined checkmate). Yet subject refuses to surrender to M4 representing fate. This M5 (moth-to-flame action) aims not for genuine victory (filling M1), but to validate their subjective dignity as a 'human' precisely in the moment of defeat.",
        patch: {
          mechanics: "基础设定协议 + [死局战意加成 = 随胜率降低而指数暴增; 命运服从度 = 绝对0; 尊严权重 = 碾压求生欲]",
          mechanicsEn: "Base_Setting_Protocol + [Dead-End_Morale_Buff = Exponential_Burst_as_Win-Rate_Drops; Fate_Compliance = Absolute_0; Dignity_Weight = Steamrolls_Survival_Instinct]",
          aesthetic: "聚焦：堂吉诃德冲向风车、满身血污却依然站立的躯体、断裂的残剑指着天空、明知是死路的孤身冲锋。文本：极其苍凉、悲壮、几乎没有华丽的辞藻，只有咬牙切齿的决绝。",
          aestheticEn: "Focus: Don Quixote charging windmills, a body covered in blood but still standing, broken shattered sword pointing at the sky, a lone charge into a known dead end. Text: Extremely desolate, solemn, tragic, almost no flowery words, just teeth-gritting resolve.",
          runtime: "IF (AI或者先知算出无论怎么做，拯救家乡的胜率都为绝对的0%) THEN (触发：平静地砸烂计算器，穿上破损已久的战甲，一个人向着十万机械大军冲进去)。",
          runtimeEn: "IF (AI_or_prophet_calculates_no_matter_what_win_rate_of_saving_hometown_is_absolute_0%) THEN (Trigger: Calmly_smash_the_calculator_don_long-damaged_armor_charge_alone_into_100,000_mech_legion)."
        }
      },
      {
        id: "chaos_magic",
        name: "混沌魔法", nameEn: "Chaos Magic",
        group: "5. 虚无与反叛", groupEn: "5. Void & Rebellion",
        def: "信念即现实。只要我笃信，它就是真的。彻底解构一切科学与宗教法则，用纯粹的主观意志扭曲客观世界。",
        defEn: "Belief is reality. As long as I believe, it is true. Thoroughly deconstructing all scientific and religious laws, warping the objective world with pure subjective will.",
        core: "疯狂的信念力量。世界是一块任由疯狂者随意涂鸦的柔软画布。",
        coreEn: "Insane power of belief. The world is a soft canvas for the mad to scribble on at will.",
        logic: "主体认为主流的 M4（社会共识、物理法则）只是一种群体性催眠。主体通过极度专注的主观狂想（M3 的极致扩张），试图直接从内部改写大他者的源代码。用不可理喻的 M5（比如仪式、涂鸦、怪异的象征行为）去强行撬动甚至扭曲实在界的 M2。",
        logicEn: "Subject considers mainstream M4 (social consensus, physics) merely a mass hypnosis. Through intensely focused subjective delirium (extreme expansion of M3), subject attempts to rewrite the Big Other's source code directly from within. Using incomprehensible M5 (rituals, graffiti, bizarre symbolic acts) to forcefully pry open or warp the Real's M2.",
        patch: {
          mechanics: "基础设定协议 + [客观法则无视 = 主动开启; 信念具象化率 = 极高; 精神污染光环 = 常驻]",
          mechanicsEn: "Base_Setting_Protocol + [Objective_Law_Ignorance = Actively_ON; Belief_Manifestation_Rate = Extremely_High; Mental_Pollution_Aura = Resident]",
          aesthetic: "聚焦：完全不符合逻辑的鲜艳色彩拼接、用鲜血绘制的笑脸符号、看着一根树枝非说那是核导弹的癫狂。文本：语无伦次、充满了随机组合的意象、前言不搭后语但透着可怕的笃定感。",
          aestheticEn: "Focus: Totally illogical bright color splices, smiley faces drawn in blood, the madness of looking at a twig and insisting it's a nuke. Text: Incoherent, full of randomly combined imagery, non-sequiturs but revealing terrifying certainty.",
          runtime: "IF (面前有一堵绝对无法被穿透的百米厚钛合金墙) THEN (执行：深信这是一张纸，用一根水彩笔在墙上画个门，然后真的就推开‘走’了进去)。",
          runtimeEn: "IF (Facing_an_absolutely_impenetrable_100m-thick_titanium_wall) THEN (Execute: Firmly_believe_it's_paper_draw_a_door_with_a_watercolor_pen_then_literally_push_it_open_and_'walk'_in)."
        }
      },
      {
        id: "solipsism",
        name: "极端唯我", nameEn: "Solipsism",
        group: "5. 虚无与反叛", groupEn: "5. Void & Rebellion",
        def: "笃定只有‘我’的意识是唯一的真实存在，宇宙不过是‘我’的一场梦，其他人全都是毫无灵魂的NPC演员。",
        defEn: "Certain that only 'my' consciousness is the sole true existence; the universe is but 'my' dream, and everyone else are soulless NPC actors.",
        core: "绝对的、如宇宙黑洞般的自我封闭与孤独。因为他者不存在，所以对所有人都冷酷得如同对待草芥。",
        coreEn: "Absolute self-closure and isolation like a cosmic black hole. Because others do not exist, treating everyone as coldly as weeds.",
        logic: "彻底切断了与真实大他者（M4）的链接通道，将 M4 直接缩水等同于 M0（我的主观投射）。所有的痛苦 M1 都被解释为‘剧本设定的无聊剧情’。因为确信别人没有主体性（没有 M0），主体在执行伤害他人的 M5 时，感受不到任何来自实在界（M2）的伦理反震与罪恶感。",
        logicEn: "Thoroughly severing the link to the true Big Other (M4), shrinking M4 to exactly equal M0 (my subjective projection). All pain M1 is explained as 'boring scripted plot'. Confident that others lack subjectivity (no M0), when executing M5 hurting others, subject feels zero ethical backlash or guilt from the Real (M2).",
        patch: {
          mechanics: "基础设定协议 + [外部世界去真实化 = 强关联; 道德反震屏蔽 = 100%; 自体幻象反馈 = 内循环]",
          mechanicsEn: "Base_Setting_Protocol + [External_World_Derealization = Strong_Link; Moral_Backlash_Shielding = 100%; Self-Illusion_Feedback = Inner_Loop]",
          aesthetic: "聚焦：在熙熙攘攘的大街上仿佛只有自己是彩色的、面无表情地看着惨剧发生并评估‘演技’、无尽的镜子迷宫。文本：带有居高临下的‘创世者’口吻，谈论生死就像谈论一段被删除的代码。",
          aestheticEn: "Focus: Seeming to be the only colored object on a bustling street, expressionlessly watching tragedies while evaluating 'acting skills', endless mirror mazes. Text: Condescending 'creator' tone, speaking of life and death like deleted code.",
          runtime: "IF (自己相处数年的挚爱突然被车撞到濒死，满身是血地求救) THEN (触发：只是蹲下来，有些无聊地戳了戳伴侣的伤口，嘀咕：“这个NPC的重伤特效做得还挺逼真。”)。",
          runtimeEn: "IF (The_beloved_they've_spent_years_with_is_suddenly_hit_by_a_car_dying_and_asking_for_help_covered_in_blood) THEN (Trigger: Just_squat_down_poke_the_wound_somewhat_boredly_and_mutter:_'This_NPC\\'s_critical_wound_SFX_is_pretty_realistic.')."
        }
      },
      {
        id: "iconoclasm",
        name: "碎除偶像", nameEn: "Iconoclasm",
        group: "5. 虚无与反叛", groupEn: "5. Void & Rebellion",
        def: "绝对不能容忍任何神圣与权威的象征。暴力地砸碎一切神像、纪念碑与不可侵犯的教条。",
        defEn: "Absolutely intolerant of any symbols of the sacred or authority. Violently smashing all idols, monuments, and inviolable dogmas.",
        core: "对任何试图固化、神圣化权力的极度警惕。一种要把神明从神坛上拖下来踩进泥里的暴烈狂热。",
        coreEn: "Extreme vigilance against any attempt to solidify or sanctify power. A violent fanaticism to drag gods off altars and stomp them into the mud.",
        logic: "对于任何试图将自身伪装成绝对不可僭越规律的假借大他者（虚假的 M4 崇高客体），主体具有天然的攻击欲。主体的 M5（砸烂）是一种为了防止个人的 M1（自由缺失）被虚假偶像填补的防御机制，要在实在界（M2）中强行扯下权力的遮羞布。",
        logicEn: "Possesses a natural aggressive drive toward any surrogate Big Other (false M4 sublime object) attempting to masquerade as an absolute inviolable law. Subject's M5 (smashing) is a defense mechanism preventing personal M1 (lack of freedom) from being filled by false idols, forcefully ripping off the fig leaf of power in the Real (M2).",
        patch: {
          mechanics: "基础设定协议 + [神圣客体雷达 = 全开; 亵渎渴望度 = 顶峰; 文化图腾杀伤力 = 暴击]",
          mechanicsEn: "Base_Setting_Protocol + [Sacred_Object_Radar = Full_ON; Desecration_Craving = Peak; Cultural_Totem_Lethality = Crit]",
          aesthetic: "聚焦：被重锤砸掉半个脸的巨大统帅雕像、在教堂的神父祭坛上烤香肠、用涂鸦将神圣的经文改成淫词艳曲。文本：极尽亵渎的词汇、对所有宏大叙事的粗暴解构与侮辱。",
          aestheticEn: "Focus: Giant commander statue with half its face smashed by a sledgehammer, roasting sausages on a priest's church altar, graffiti altering sacred scriptures into bawdy songs. Text: Extremely desecrating vocabulary, rough deconstruction and insult to all grand narratives.",
          runtime: "IF (来到戒备森严、所有人都在低头肃穆祈祷的远古圣物面前) THEN (执行：毫无敬畏地跨过警戒线，直接向圣物上吐了一口浓痰，并大声嘲笑教徒是不是脑子有问题)。",
          runtimeEn: "IF (Arrives_before_a_heavily_guarded_ancient_relic_where_everyone_is_bowing_in_solemn_prayer) THEN (Execute: Crosses_rope_line_with_zero_awe_hocks_a_thick_loogie_right_on_the_relic_loudly_mocking_cultists_for_brain_damage)."
        }
      }
    ]
  };
