import { LibraryCategoryDef } from '../../../types';

export const SUR2_GROUP_J: LibraryCategoryDef = {
    id: "era_tribes",
    name: "10. 亚文化与部落 (Subcultures & Tribes)",
    desc: "风格即反抗。在主流大他者的缝隙中，建立微型符号秩序的社群。",
    items: [
      {
        id: "punk_77_london",
        name: "朋克77", nameEn: "Punk '77",
        def: "伦敦。别针。莫霍克头。反体制。No Future。原始的愤怒。DIY精神。",
        defEn: "London. Safety pins. Mohawks. Anti-sys. No Future. Primal anger. DIY ethos.",
        core: "对虚伪精致的暴力拒绝。通过丑陋和噪音来确证自我的存在。 | 锚定 ($): M4 破旧皮衣 (Torn_Leather)",
        coreEn: "Violent reject of fake elegance. Asserting self-existence via ugly & noise. | Anchor ($): M4 Torn_Leather",
        logic: "【粗糙声波的破墙测试】：大他者（撒切尔时代的英国社会）提供了高度僵化但体面的上升通道。朋克通过将垃圾穿在身上、用三和弦发出震耳欲聋的失真噪音，主动截断了自己的一切“未来（No Future）”。不追求建设，只追求打破玻璃时的快感。",
        logicEn: "[Rough Sonic Wall-Break Test]: Other (Thatcher-era UK) offered highly rigid but 'decent' upward mobility. Punks wore garbage & played deafening distort noise on 3 chords, actively severing all their 'Future'. Not seeking to build, just the thrill of smashing glass.",
        patch: {
            mechanics: "失真噪音反馈环 + [和弦数 = 小于3; 视觉挑衅度 = 100%; 未来规划 = Null]",
            mechanicsEn: "Distort_Noise_Feedback_Loop + [Chord_Count = <3; Vis_Provoke = 100%; Future_Plan = Null]",
            aesthetic: "满是涂鸦的破旧俱乐部，留着彩色莫霍克头的瘦弱年轻人用别针穿过鼻孔，对着麦克风疯狂吐口水。",
            aestheticEn: "Graffiti-filled rotten club. Skinny kids w/ colored mohawks & safety pins thru noses wildly spitting at mic.",
            runtime: "IF (穿上一件写满脏话并被撕烂的皮夹克走到街上) THEN (触发：在路人鄙夷的目光中感受到一种掌握自身主权的神圣傲慢)",
            runtimeEn: "IF (Wearing ripped leather jacket covered in curses on street) THEN (Trigger: Feeling a sacred arrogance of self-sovereignty under passersby's disgusted stares)"
        }
      },
      {
        id: "hiphop_bronx_80s",
        name: "嘻哈起源", nameEn: "Old School Bronx",
        def: "废墟。涂鸦。街区派对。节拍作为唯一的武器。被遗忘的底层创造力。",
        defEn: "Ruins. Graffiti. Block parties. Beats as sole weapon. Forgotten base-layer creativity.",
        core: "从虚无中建立自尊。用节奏重新划定领地，对抗系统性贫困。 | 锚定 ($): M5 街头涂鸦墙 (Street_Graffiti_Wall)",
        coreEn: "Building pride from void. Redrawing turf w/ rhythm against systemic poverty. | Anchor ($): M5 Street_Graffiti_Wall",
        logic: "【低配硬件的超频运行】：70年代纽约断电与黑帮横行，黑人街区被主服务器物理隔离。主体在毫无资源的情况下，用两只唱盘机的间奏（Break）创造出无限循环的节拍。涂鸦是对城市空间的物理夺回，Rap是对失语者的重新赋权。这是底层最绚烂的防御机制。",
        logicEn: "[Overclocking Low-End Hardware]: '70s NY blackout & gangs; black hoods phys-isolated by Main Server. W/ zero resources, subjects used 2 turntables' Break to create inf-loop beats. Graffiti is phys-retake of urban space; Rap re-empowers the voiceless. Base-layer's most dazzling def-mech.",
        patch: {
            mechanics: "空间节拍重构算法 + [硬件成本 = 极低; 词汇量密度 = 极高; 帮派冲突 = 转为斗舞/说唱]",
            mechanicsEn: "Space_Beat_Rebuild_Algo + [Hard_Cost = Ultra-Low; Vocab_Density = Peak; Gang_Clash = Shifted_to_Dance/Rap]",
            aesthetic: "燃烧的垃圾桶旁，废弃篮球场上铺着硬纸板。DJ在连接路灯电源的音响上搓盘，B-boy在旋转。",
            aestheticEn: "By burning trash cans, cardboard laid on ruined b-ball court. DJ scratching on speakers wired to streetlights; B-boy spinning.",
            runtime: "IF (拿着喷漆在地铁车厢上留下自己的Tag签名) THEN (触发：我的名字必须随着这趟列车穿过整座不属于我的城市)",
            runtimeEn: "IF (Tagging own name on subway car w/ spray paint) THEN (Trigger: My name must travel across this city that doesn't belong to me on this train)"
        }
      },
      {
        id: "goth_80s_batcave",
        name: "哥特亚文化", nameEn: "80s Goth",
        def: "苍白皮肤。黑眼线。天鹅绒。死亡浪漫化。与阳光世界的彻底隔绝。",
        defEn: "Pale skin. Black eyeliner. Velvet. Death romanticized. Total isolation from sunlit world.",
        core: "忧郁的尊严。在黑暗中寻找美，通过对死亡的审美化防御平庸。 | 锚定 ($): M1 黑色蕾丝伞 (Black_Lace_Parasol)",
        coreEn: "Melancholic dignity. Finding beauty in dark, defending vs mediocrity via aesthetics of death. | Anchor ($): M1 Black_Lace_Parasol",
        logic: "【负片滤镜的强力渲染】：白天的现代资本主义世界（阳光、奋斗、彩色）被视为粗俗与病态的。主体主动切断了对“生机”的渴望，在墓地、吸血鬼和后朋克的贝斯线中寻找慰藉。通过假装自己已经“死亡”，以此获得对生活伤害的绝对免疫力。",
        logicEn: "[Negative-Filter Force Render]: Daytime modern cap-world (sun, hustle, colors) is seen as crude & sick. Subject cuts off desire for 'vigor', seeking solace in graves, vamps, post-punk basslines. By playing 'already dead', subject gains absolute immunity to life's hurts.",
        patch: {
            mechanics: "死亡倒影美化器 + [肤色RGB = #FFFFFF; 阳光耐受度 = 0; 痛苦转化率 = 100%浪漫]",
            mechanicsEn: "Death_Reflect_Beautifier + [Skin_RGB = #FFFFFF; Sun_Tol = 0; Pain_Convert = 100%_Romance]",
            aesthetic: "在Batcave俱乐部，雾气弥漫，苍白消瘦的人们穿着黑色长风衣和极端的厚底鞋，缓慢而无神地随着合成器摇摆。",
            aestheticEn: "Batcave club, fog everywhere. Pale skinny ppl in black trench & extreme platforms sway slowly/soullessly to synths.",
            runtime: "IF (在正午涂黑眼圈在地下室听Bauhaus) THEN (触发：感受到一种超越肉体腐朽的、极其华丽的荒凉感)",
            runtimeEn: "IF (Wearing black eyeliner listening to Bauhaus in basement at noon) THEN (Trigger: Feeling a hyper-gorgeous desolation transcending flesh decay)"
        }
      },
      {
        id: "rave_90s_warehouse",
        name: "锐舞文化", nameEn: "90s Rave",
        def: "仓库派对。笑脸。化学药物。PLUR。集体狂欢。主体的消融。",
        defEn: "Warehouse party. Smiley face. Chems. PLUR. Mass rave. Dissolve of subject.",
        core: "主体的消融。通过极端节奏和药物，暂时达到众人合一的想象界高潮。 | 锚定 ($): M2 笑脸药丸 (Smiley_Pill)",
        coreEn: "Dissolving subject. Using extreme beats & chems to temp reach Imaginary climax of oneness. | Anchor ($): M2 Smiley_Pill",
        logic: "【集体潜意识的强制同步】：社会原子化让人类感到孤立。通过非法的仓库（剥离社会层级）、120BPM以上的重复电子节拍（心跳接管）和MDMA（打破防御机制的血清素泛滥），成千上万的主体强制抹除了个体的边界（Ego Death），实现了短暂的无神论宗教体验。",
        logicEn: "[Force-Sync of Collective Subconscious]: Social atomizing leaves humans isolated. Via illegal warehouses (stripping hierarchy), 120+ BPM loops (heartbeat takeover), and MDMA (serotonin flood breaking ego def), 1000s of subjects force-erase personal bounds (Ego Death), achieving brief atheist religious exp.",
        patch: {
            mechanics: "多巴胺去边界同步网 + [个人边界 = 溶解; 音乐重复度 = 脑电波同频满载; 疲劳感知 = 被屏蔽]",
            mechanicsEn: "Dopamine_De-Bound_Sync_Net + [Personal_Bound = Dissolved; Music_Loop = Brainwave_Sync_Max; Fatigue_Sense = Blocked]",
            aesthetic: "废弃的曼彻斯特巨型仓库，刺眼的频闪灯下，几千个汗流浃背、戴着夜光手环和笑脸T恤的人疯狂跳动至黎明。",
            aestheticEn: "Abandoned giant Manchester warehouse. Under blinding strobes, 1000s sweating in glow-bands & smiley tees jump wildly till dawn.",
            runtime: "IF (在破晓时分与身边的陌生人完全由于音乐节奏而流泪拥抱) THEN (触发：彻底体验到了去阶别化后的“爱即一切”的幻觉巅峰)",
            runtimeEn: "IF (Tearfully hugging strangers at dawn purely driven by the beat) THEN (Trigger: Fully experiencing the de-classed climax hallucination of 'Love is All')"
        }
      },
      {
        id: "grunge_seattle_90s",
        name: "垃圾摇滚", nameEn: "90s Grunge",
        def: "西雅图。法兰绒衬衫。油腻头发。厌世。由于被过度消费产生自嘲。",
        defEn: "Seattle. Flannel shirts. Greasy hair. Misanthrope. Self-mockery from being over-consumed.",
        core: "真实性的困境。当反叛被商业化为时尚，主体如何处理被收编的恶心感。 | 锚定 ($): M4 破洞法兰绒 (Torn_Flannel)",
        coreEn: "Dilemma of authenticity. When rebel is commodified to fashion, how to bear the disgust of being co-opted. | Anchor ($): M4 Torn_Flannel",
        logic: "【反抗系统的被动变现被抓取】：X世代拒绝了80年代的华丽摇滚与浮夸主义。他们穿着廉价的旧货店衣服，唱着自我厌恶和无聊。然而大他者（资本）瞬间将“反消费主义”打包成时尚出售。库特·柯本的悲剧在于：你越是想证明自己是垃圾，世界就越把你捧为神。",
        logicEn: "[Passive Cash-In Grabbed of Rebel Sys]: Gen X rejects 80s glam/hype. Wearing cheap thrift clothes, singing self-hate & boredom. Yet Other (capital) instantly packages 'anti-consumerism' as fashion to sell. Cobain's tragedy: The harder u prove u r trash, the more the world hails u as a god.",
        patch: {
            mechanics: "反商业黑洞吸积盘 + [服装成本 = $5; 商业变现 = $500M; 主体不适感 = 致死量]",
            mechanicsEn: "Anti-Commerical_Blackhole_Accretion + [Cloth_Cost = $5; Cash_In = $500M; Subject_Disgust = Lethal_Dose]",
            aesthetic: "阴雨蒙蒙的西雅图地下室，脏兮兮的金发主唱穿着女士碎花裙和旧拖鞋，用极其慵懒又嘶哑的声音尖叫。",
            aestheticEn: "Rainy Seattle basement. Dirty blonde frontman in floral dress & old slippers screaming in hyper-sluggish & hoarse voice.",
            runtime: "IF (看到自己随手穿烂的毛衣被高级时装店标价2000美元) THEN (触发：强烈的胃部痉挛与想要拿枪指着自己脑袋的绝望真实感缺失)",
            runtimeEn: "IF (Seeing my own randomly worn-out sweater priced $2000 in high-fashion window) THEN (Trigger: Strong stomach cramp & despair of lacking realness, wanting to put a gun to my head)"
        }
      },
      {
        id: "harajuku_chaos",
        name: "原宿/FRUITS", nameEn: "Harajuku FRUITS",
        def: "视觉爆炸。极端的个人装扮。玩偶。彩色塑料。日本社会的缝隙。",
        defEn: "Vis-explosion. Extreme personal dress. Dolls. Colored plastic. Gap in JP society.",
        core: "伪装作为反抗。在极度压抑集体主义社会，通过奇装异服建立微小保护壳。 | 锚定 ($): M6 塑料发饰 (Plastic_Hair_Clip)",
        coreEn: "Disguise as rebel. Building tiny shell via bizarre outfits in hyper-repressed collectivist society. | Anchor ($): M6 Plastic_Hair_Clip",
        logic: "【外源性多巴胺的防御装甲】：面对日本高度一致性（读空气）的白领社会，原宿女孩拒绝穿上成熟的灰色职业装。她们将自己挂满廉价闪亮的玩具、彩虹色堆叠布料。这不仅是审美倒退回婴儿期，更是一种视觉恐怖主义：用“卡哇伊”的极度泛滥来拒绝进入大他者的规训系统。",
        logicEn: "[Def-Armor of Exogenous Dopamine]: Facing JP's highly conformist (reading the air) white-collar society, Harajuku girls refuse grey mature office suits. They cover themselves in cheap shiny toys & rainbow stacked fabrics. Not just an aesthetic regress to infancy, but visual terrorism: using extreme flood of 'Kawaii' to reject entering Other's discipline sys.",
        patch: {
            mechanics: "高对比色彩饱和攻击 + [社会期待值 = 逆反点满; 幼态延续 = 武器化; 独特性 = 不可复制叠加]",
            mechanicsEn: "High_Contrast_Color_Sat_Atk + [Soc_Expectation = Rebell_Max; Neoteny = Weaponized; Unique = Un-copiable_Stacking]",
            aesthetic: "表参道的街角，几名全身挂满发廊夹子、穿粉色厚底鞋、背着熊玩偶的女孩对着闪光灯比V字。",
            aestheticEn: "Omotesando corner, girls covered in salon clips, wearing pink platforms, carrying bear dolls, flashing V-signs to flashes.",
            runtime: "IF (在涩谷街头穿满100种不同颜色的衣服被路人侧目) THEN (触发：强烈的隔绝安全感，这层可笑的衣服是我抵御现实沉重的外骨骼)",
            runtimeEn: "IF (Wearing 100 diff colors in Shibuya getting side-eyes) THEN (Trigger: Fierce isolated safety; these ridiculous clothes are my exo-skeleton against heavy reality)"
        }
      },
      {
        id: "skate_dogtown",
        name: "滑板狗镇", nameEn: "Dogtown Skate",
        def: "干涸的泳池。鱼眼镜头。对城市建筑的破坏性重构。自由的物理化。",
        defEn: "Dry pools. Fisheye lens. Destructive rebuild of city arch. Freedom materialized.",
        core: "身体对空间的征服。将冰冷城市设施转化为玩乐对象，反抗私有产权。 | 锚定 ($): M3 磨损滑板轮 (Worn_Skate_Wheel)",
        coreEn: "Body's conquer of space. Turning cold city facilities to playthings, resisting private property. | Anchor ($): M3 Worn_Skate_Wheel",
        logic: "【物理地形的非法重载】：大他者（市政规划）将城市划分为有严格功用的私有区域（台阶、栏杆、私人泳池）。但在干旱期的加州，冲浪者带着聚氨酯轮子把城市变成了硬质海浪。滑板是对“空间用途”的黑客行为，通过磨损栏杆来宣告身体的主权。",
        logicEn: "[Illegal Overload of Phys Terrain]: Other (City Plan) zones city into strict functional private areas (stairs, rails, pools). But in drought Cali, surfers w/ urethane wheels turn city to hard waves. Skating is a hack on 'Space Purpose', declaring bodily sovereignty by grinding rails down.",
        patch: {
            mechanics: "空间功用黑客破解 + [重力约束 = 被视作跳板; 私有产权 = 物理无视; 骨折率 = 自由的代金券]",
            mechanicsEn: "Space_Function_Hack + [Grav_Constrain = Seen_as_Springboard; Priv_Property = Phys_Ignored; Fracture_Rate = Freedom_Voucher]",
            aesthetic: "1970年代的加州废弃后院，金发少年在干涸的半圆泳池里腾空，鱼眼镜头捕捉着摩擦出的火花。",
            aestheticEn: "1970s Cali ruined backyard, blonde kid gets air in dry half-pipe pool, fisheye captures grinding sparks.",
            runtime: "IF (在安保追赶下强行滑过法院门前的大理石栏杆) THEN (触发：在肾上腺素飙升中完成了对威权建筑的一次性感亵渎)",
            runtimeEn: "IF (Force-grinding marble rail of court bldg while chased by security) THEN (Trigger: Achieving a sexy desecration of auth-bldg mid adrenaline spike)"
        }
      },
      {
        id: "emo_my_space",
        name: "Emo/零载代", nameEn: "2000s Emo",
        def: "MySpace。斜刘海。脆弱。自伤倾向。将情绪作为一种勋章展示。",
        defEn: "MySpace. Side fringes. Fragility. Self-harm leaning. Parading emotion as medal.",
        core: "脆弱性的表演。通过展示伤口来寻求他者的关注与认同。 | 锚定 ($): M5 黑色眼泪 (Black_Tear)",
        coreEn: "Performative fragility. Seeking Other's attention & validate by showing wounds. | Anchor ($): M5 Black_Tear",
        logic: "【痛苦API的公开广播】：在早期社交网络（MySpace）中，青少年发现“悲惨”是一种比“成功”更容易获得网络流量的通货。主体把私密的痛苦（被甩、孤独）外化为刻意的装扮：黑色指甲油与流血的心形表情。由于痛苦被表演化了，真正的抑郁被消解成了审美姿态。",
        logicEn: "[Public Broadcast of Pain API]: On early social net (MySpace), teens find 'Misery' a cheaper currency for net-traffic than 'Success'. Subject outsources private pain (dumped, lonely) into deliberate dress: black polish & bleeding-heart emojis. Cuz pain is performed, real depression dissolves to aesthetic pose.",
        patch: {
            mechanics: "抑郁症视觉外包器 + [自我感动指数 = 自带BGM; 沟通模式 = 暗示性密码; 认同渴求 = Max]",
            mechanicsEn: "Depression_Visual_Outsource + [Self_Move_Index = Has_own_BGM; Comms_Mode = Cryptic_Hint; Val_Thirst = Max]",
            aesthetic: "极度遮挡单眼的厚重黑刘海，在格子背景的网页上写着火星文连缀的哀伤签名，配上一首My Chemical Romance的自动播放歌曲。",
            aestheticEn: "Heavy black bangs blocking one eye. Checkered web BG w/ cryptic sad leetspeak bio, accompanied by MCR song auto-play.",
            runtime: "IF (在QQ空间/博客发了一张只有带血绷带的局部照片并设为仅见) THEN (触发：沉浸在“世界不懂我，但有人会来问我怎么了”的自恋高潮中)",
            runtimeEn: "IF (Posting a localized pic of bloody bandage on blog set to hidden/limited) THEN (Trigger: Immersion in narc-climax of 'World doesn't get me, but someone will ask what's wrong')"
        }
      },
      {
        id: "biker_hells_angels",
        name: "机车帮", nameEn: "Outlaw Bikers",
        def: "哈雷。皮背心。公路。部落式的忠诚。对定居文明的蔑视。",
        defEn: "Harleys. Leather cuts. Highway. Tribal loyalty. Disdain for settled civ.",
        core: "兄弟会的阴暗面。极端的归属感伴随着极端暴力与排他性。现代骑士堕落。 | 锚定 ($): M1 缝线背心 (Patched_Cut)",
        coreEn: "Dark side of brotherhood. Peak belonging paired w/ peak violence & exclusivity. Fallen modern knights. | Anchor ($): M1 Patched_Cut",
        logic: "【原始封建补丁的机动部署】：面对战后去雄化的、安稳的白色拉花围栏的中产社会。退伍兵们将对无聊和平的恐惧寄托在V型双缸引擎里。他们重建了前现代的“封建领主制”（帮派阶级）。自由在这里是个伪命题，真正的内核是对Alpha Male暴力的纯粹结社。",
        logicEn: "[Mobile Deploy of Primal Feudal Patch]: Facing post-war emasculated, safe white-picket mid-class society, veterans park fear of boring peace into V-Twin engines. They rebuild pre-modern 'Feudal Lord' sys (gang hierarchy). Freedom is false here; core is pure association for Alpha Male violence.",
        patch: {
            mechanics: "排他性暴力结社 + [引擎轰鸣 = 领地标记声波; 私人律法 = 高压残酷; 社会纽带 = 只有兄弟和敌人]",
            mechanicsEn: "Exclusive_Violent_Guild + [Engine_Roar = Turf_Mark_Sonic; Private_Law = High_Pressure; Soc_Tie = Only_Bros_or_Foes]",
            aesthetic: "漫长的沙漠公路上，几十辆低沉轰鸣的美式重机车排成V字阵型，骑士们背上的死亡骷髅刺绣在风中猎猎作响。",
            aestheticEn: "Long desert highway. Dozens of low-roaring US heavy bikes in V-form. Skulls embroidered on riders' backs flapping in wind.",
            runtime: "IF (跨上哈雷猛拧油门，听到整条街因为噪音而震颤) THEN (触发：感受到一种“我们是成群结队的猛兽可以碾压平庸规则”的危险狂喜)",
            runtimeEn: "IF (Straddling Harley twisting throttle, hearing whole street shake from noise) THEN (Trigger: Sensing a dangerous ecstasy of 'we are packs of beasts crushing mundane rules')"
        }
      },
      {
        id: "cyber_goth_neon",
        name: "赛博哥特", nameEn: "Cyber Goth",
        def: "防毒面具。荧光色。工业电子。生化危机美学。对未来的恐惧处理。",
        defEn: "Gas masks. Fluorescents. Ind-electro. Biohazard aesthetics. Process fear of future.",
        core: "技术恐惧浪漫化。将末日穿在身上，在机械噪音中模拟最后的舞蹈。 | 锚定 ($): M6 霓虹毒面具 (Neon_Gas_Mask)",
        coreEn: "Tech-fear romanticized. Wearing doomsday, mocking final dance in mech noise. | Anchor ($): M6 Neon_Gas_Mask",
        logic: "【废土环境的预演渲染】：主体感知到生态崩溃、核战和高科技压迫的大灾变即将到来。他们没有选择阻止，而是选择“提前适应”。把防毒面具、生化标识和类似电缆的塑料假发当做一种艳丽的舞裙。这是一种用极度悲观来狂欢的后人类防御姿态。",
        logicEn: "[Pre-Render of Wasteland Env]: Subject senses coming cataclysm of eco-collapse, nuke war, high-tech crush. Instead of stopping it, they 'pre-adapt'. Treating gas masks, biohazard signs, & cable-like plastic dreads as gorgeous ballgowns. It's a post-human def-posture of partying with extreme pessimism.",
        patch: {
            mechanics: "末日生存狂欢变种 + [呼吸器 = 装饰品; BPM = 高压电火花级; 废土适应性 = 提前满级]",
            mechanicsEn: "Doomsday_Survival_Rave_Mutant + [Respirator = Decor; BPM = High_Voltage_Spark; Wasteland_Adapt = Pre-Maxed]",
            aesthetic: "在一个充斥着重型机械运作声的地下堡垒里，头顶着绿色荧光塑料长发、戴着反光防毒面具的人们在强劲工业电子乐中剧烈抽搐跳舞。",
            aestheticEn: "Underground bunker filled w/ heavy machinery whir. Ppl w/ green neon plastic dreads & reflective gas masks twitch/dance violently to heavy Ind-electro.",
            runtime: "IF (戴着带蓝色LED发光的防毒口罩在重工业废墟区拍黑夜写真) THEN (触发：自认是一个已经在这个有毒烂摊子里完成了基因进化的变异舞者)",
            runtimeEn: "IF (Doing night shoot in heavy ind ruins wearing blue LED gas mask) THEN (Trigger: Seeing self as a mutant dancer who already finished gene-evo in this toxic mess)"
        }
      }
    ]
};
