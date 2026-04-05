import { LibraryCategoryDef } from '../../../types';

export const SUR5_POWER_STATUS: LibraryCategoryDef = {
  id: "sur5_power_status",
  name: "1. 权力与阶级跃升 (Power & Status)",
  nameEn: "1. Power & Status",
  desc: "对支配权、社会合法性、打破阶层天花板的渴望。在表层叙事中充当向上攀爬的核心驱动物。",
  descEn: "Desire for dominance, social legitimacy, and breaking the class ceiling. Acts as the core driver for upward mobility in the surface narrative.",
  items: [
    {
      id: "the_absolute_throne",
      name: "染血的最高王座", nameEn: "The Bloodstained Throne",
      group: "1. 权力与阶级跃升", groupEn: "1. Power & Status",
      def: "整个世界权力网络的物理最高点（如古代皇帝宝座、财阀董事局主位、数字矩阵的主控台）。",
      defEn: "The physical highest point of the world's power network (e.g., Emperor's throne, Boardroom head, Matrix main console).",
      core: "【表面诱惑】：承诺了权力的顶点，坐上去就可以号令所有人，改写当下的规则底线。",
      coreEn: "【Surface Temptation】: Promises the pinnacle of power; sit on it to command everyone and rewrite rules.",
      logic: "【叙事抓手】：这是一个物理上绝对无法共享的单一位置（排他性极强）。只能由一个人独占，因此天生自带‘消灭身边所有朋友和同盟’的排他属性，是促成团队猜忌的最佳物理道具。",
      logicEn: "【Narrative Affordance】: A physically unshareable single position (extreme exclusivity). Naturally carries the attribute of 'eliminating all friends and allies nearby', the best physical prop forcing team paranoia.",
      patch: {
        mechanics: "表层锚点 + [排他性 = 绝对; 物理共享度 = 零; 获取后仇恨值 = 全图拉满]",
        mechanicsEn: "Surface_Anchor + [Exclusivity = Absolute; Physical_Sharing = Zero; Post-Acquisition_Aggro = Map-wide_Max]",
        aesthetic: "聚焦：高高在上的冰冷位置、必须踩着台阶（或骨头）才能走上去的阶梯、俯视众生的特权视角。",
        aestheticEn: "Focus: Lofty cold seat, stairs (or bones) that must be stepped on to ascend, privileged bird's-eye view of the masses.",
        runtime: "IF (多人合作推翻了暴君来到王座前) THEN (提供机制：强行让队伍发生只能活一个的内讧分支)。",
        runtimeEn: "IF (Co-op_team_overthrows_tyrant_arriving_at_throne) THEN (Provide_Mechanic: Force_an_infighting_branch_where_only_one_survives)."
      }
    },
    {
      id: "the_root_access_pass",
      name: "畅通无阻的最高手谕", nameEn: "The Ultimate Pass",
      group: "1. 权力与阶级跃升", groupEn: "1. Power & Status",
      def: "能够绕过世界既定规则、发号施令的权限信物（如皇帝兵符、超级门禁卡、黑客后门代码）。",
      defEn: "Authority token bypassing established rules to issue commands (e.g., Emperor's troop seal, Supreme keycard, Hacker backdoor).",
      core: "【表面诱惑】：拥有它就能在规则内畅通无阻，不受常规路障、防御法阵与安全门禁的约束。",
      coreEn: "【Surface Temptation】: Owning it allows unhindered passage within rules, exempt from normal barricades and security gates.",
      logic: "【叙事抓手】：它是一个“即插即用”的时效性道具。获取它可能极难，但使用它只需一秒。它的轻便使得持有者极易成为移动靶，且随时面临后台权限被单方面注销的危机。",
      logicEn: "【Narrative Affordance】: A 'plug-and-play' time-sensitive prop. Difficult to get, takes one second to use. Its lightness makes the holder a mobile target, facing sheer panic of the pass being unilaterally revoked.",
      patch: {
        mechanics: "表层锚点 + [便携隐蔽性 = 高; 身份验证需求 = 是/否; 权限时效性 = 随时可能归零]",
        mechanicsEn: "Surface_Anchor + [Portability = High; Authentication_Requirement = Yes/No; Expiration_Risk = Can_zero_out_anytime]",
        aesthetic: "聚焦：象征最高权限的纹章标记、畅行无阻时冷酷的放行提示音、防线卫兵恐惧的眼神。",
        aestheticEn: "Focus: Emblem symbolizing supreme access, cold 'Access Granted' sounds during passage, fearful eyes of frontline guards.",
        runtime: "IF (需要潜入戒备森严的绝对核心区) THEN (提供机制：拿着信物一路畅通无阻，直到发现它被后台停用的断崖式跌落)。",
        runtimeEn: "IF (Need_to_infiltrate_heavily_guarded_absolute_core) THEN (Provide_Mechanic: Unhindered_passage_until_cliff-drop_discovery_that_pass_is_deactivated)."
      }
    },
    {
      id: "the_border_crossing_permit",
      name: "逃离底层的唯一船票", nameEn: "The Only Ticket Out",
      group: "1. 权力与阶级跃升", groupEn: "1. Power & Status",
      def: "底巢/下等阶级通往上层核心空间的唯一合法凭证（如入关文书、地上城绿卡、登舰票）。",
      defEn: "The only legal ID for the underclass to access upper core space (e.g., Border pass, Utopia green card, Ship ticket).",
      core: "【表面诱惑】：承诺了生存环境的绝对质变，摆脱底层的危险物理困局。",
      coreEn: "【Surface Temptation】: Promises absolute qualitative change in survival environment, escaping the physical plight of the bottom.",
      logic: "【叙事抓手】：强烈的物理边界跨越凭证。这张通行证通常带有活体/实名绑定，这迫使无权阶层的主角必须走上“身份伪造”、“偷渡”或“冒名顶替”的暴力冲突路径。",
      logicEn: "【Narrative Affordance】: Strong physical border-crossing voucher. Often bio/real-name bound, forcing the powerless protagonist onto the conflict path of 'identity forgery', 'smuggling', or 'impostor syndrome'.",
      patch: {
        mechanics: "表层锚点 + [身份绑定性 = 硬性门槛; 空间跨越 = 必须出示凭证; 被伪造几率 = 剧情关键]",
        mechanicsEn: "Surface_Anchor + [Identity_Binding = Hard_Threshold; Spatial_Leap = Must_Present; Forgery_Probability = Plot_Key]",
        aesthetic: "聚焦：沾着污血的无瑕票据、跨越边界线两侧极其鲜明的阶级着装对比、检查站冰冷的身份扫描设备。",
        aestheticEn: "Focus: Flawless ticket stained with blood, starkly contrasting class attire across borders, checkpoint's cold identity scanners.",
        runtime: "IF (尝试用抢来的通行证跨越阶级闸门) THEN (提供机制：产生身份随时可能露馅的悬疑紧张感，以及遭遇安检人员不断盘问的压力)。",
        runtimeEn: "IF (Trying_to_cross_class_gates_with_stolen_permit) THEN (Provide_Mechanic: Generate_suspense_of_identity_exposure_and_pressure_of_interrogation)."
      }
    },
    {
      id: "the_legitimacy_document",
      name: "真假难辨的高贵族谱", nameEn: "The Questionable Pedigree",
      group: "1. 权力与阶级跃升", groupEn: "1. Power & Status",
      def: "证明自身拥有高贵血统、合法继承权或宗派合规性的纸质或数字底证（如宗族族谱、滴血认亲证明、皇室私生子密文）。",
      defEn: "Paper or digital proof showing noble blood, legal inheritance, or sect compliance (e.g., Genealogy, blood-test proof, royal bastard cypher).",
      core: "【表面诱惑】：在讲究门第等级的社会中，它是“投胎重来”的直接外挂，能够瞬间继承天文数字的家产及名分。",
      coreEn: "【Surface Temptation】: In a pedigree-focused society, it's the direct 'reincarnation' hack, instantly inheriting astronomical estates and titles.",
      logic: "【叙事抓手】：这是一个极度依赖“信息壁垒”的软性证据。因为其物理属性薄弱，极容易伪造、丢失、被烧毁或引发真伪鉴定大战。持有者往往会在后半段处于“被揭穿的极度焦虑”之中。",
      logicEn: "【Narrative Affordance】: A soft evidence heavily relying on 'info barriers'. Because of its weak physical trait, it's easily forged, lost, burned, or triggers authenticity wars. The holder spends the late game in 'extreme anxiety of being exposed'.",
      patch: {
        mechanics: "表层锚点 + [证明效力 = 极不稳固; 对家鉴定行为 = 常态触发; 谎言掩盖效应 = 滚雪球]",
        mechanicsEn: "Surface_Anchor + [Proof_Validity = Highly_Unstable; Rival_Appraisal_Acts = Normally_Triggered; Lie_Cover_Effect = Snowball]",
        aesthetic: "聚焦：被特殊蜡封的古朴文书、复杂的血脉验证仪式、慌乱中藏好真假难辨的备份。",
        aestheticEn: "Focus: Special wax-sealed archaic documents, complex bloodline verification rituals, hiding true/false backups in a panic.",
        runtime: "IF (拿着伪造文书步入权力大堂宣告继承权) THEN (提供机制：大堂内突然丢出另一份一模一样的文件引发双重认证危机)。",
        runtimeEn: "IF (Entering_power_hall_declaring_inheritance_with_forged_document) THEN (Provide_Mechanic: Another_identical_file_is_suddenly_thrown_into_the_hall_triggering_dual-auth_crisis)."
      }
    },
    {
      id: "the_underworld_ledger",
      name: "写满死刑的黑暗账本", nameEn: "The Black Book of Secrets",
      group: "1. 权力与阶级跃升", groupEn: "1. Power & Status",
      def: "记录了上流阶层所有肮脏交易、暗杀名录与见不得光的勾当物证（如竹简账皮、加密U盘、魔音石）。",
      defEn: "Physical evidence recording all dirty deals, assassination lists, and dark operations of the elite class (e.g., bamboo ledger, encrypted USB, echo stone).",
      core: "【表面诱惑】：核弹级别的把柄。有了它就能敲诈金钱，或反向要挟让权势滔天的大人物下跪。",
      coreEn: "【Surface Temptation】: Nuclear-level leverage. With it, one can extort money or reverse-blackmail powerful elites to their knees.",
      logic: "【叙事抓手】：作为“引爆点”，它的属性是“必须被阅读”或“解密后才能生效”。为了提升物理张力，常常伴随着跟踪秘术或“死手系统”（无法破坏，一旦销毁自动广而告之），使得抢夺过程极尽惨烈。",
      logicEn: "【Narrative Affordance】: As a 'detonator', its trait is 'must be read' or 'effective only post-decryption'. Often accompanied by tracking magic or 'dead-hand switch' (auto-publish if destroyed), making the scramble brutal.",
      patch: {
        mechanics: "表层锚点 + [曝光杀伤力 = 对系统毁灭性; 引发全屏仇恨 = 100%; 解密倒计时 = 提供紧迫感]",
        mechanicsEn: "Surface_Anchor + [Exposure_Lethality = Destructive_to_System; Triggers_Full-screen_Aggro = 100%; Decrypt_Countdown = Provides_Urgency]",
        aesthetic: "聚焦：沾着鲜血的账册/存储物、被要挟的大人物颤抖而发青的脸庞、背后黑洞洞的武器枪口(刀锋)。",
        aestheticEn: "Focus: Blood-stained ledger/storage, blackmailed big shot's trembling pale face, dark weapon muzzles (or blades) behind backs.",
        runtime: "IF (向掌权者展示账本内容进行当面要挟) THEN (提供机制：掌权者表面立刻签发主角需要的特权，暗地里却在启动桌底的物理灭口陷阱)。",
        runtimeEn: "IF (Showing_ledger_content_to_authority_for_face-to-face_blackmail) THEN (Provide_Mechanic: Authority_superficially_grants_privileges_but_secretly_triggers_physical_assassination_trap_under_desk)."
      }
    },
    {
      id: "the_kingmakers_scepter",
      name: "拥王者的烫手权杖", nameEn: "The Kingmaker's Burden",
      group: "1. 权力与阶级跃升", groupEn: "1. Power & Status",
      def: "本身毫无攻击力，但能合法决定各大势力谁能坐上最高位的仪式道具（如和氏璧、教皇权杖、选举主机密匙）。",
      defEn: "Lacks attack power itself, but legally decides which faction takes the highest seat (e.g., Imperial Seal, Papal staff, election host key).",
      core: "【表面诱惑】：享受被几大巨头同时下跪逢迎、掌控世界中心走向的隐秘“造王者”特权。",
      coreEn: "【Surface Temptation】: Enjoying the secret 'kingmaker' privilege of being kneeled to by giants, steering the world's center.",
      logic: "【叙事抓手】：它的叙事功能在于“转交”。这个道具天生不适合主角自己装备起效，而是用来引发阵营竞标。它创造了一个多方拉拢的戏剧舞台，让持有者在钢丝上平衡利益，而一旦交出，即刻丧失价值引来兔死狗烹。",
      logicEn: "【Narrative Affordance】: Its narrative function is 'handover'. Innately unsuitable for the protagonist to equip, it triggers factional bidding. Creates a stage where the holder balances interests, but upon handover immediately loses value and is targeted for silencing.",
      patch: {
        mechanics: "表层锚点 + [阵营拉拢度 = 高频触发; 一次性交火筹码 = 最高级; 卸磨杀驴判定 = 交出后立即生效]",
        mechanicsEn: "Surface_Anchor + [Faction_Wooing = High-freq_Trigger; One-time_Firefight_Chip = Ultimate; Hound-Boiling_Check = Effective_immediately_after_handover]",
        aesthetic: "聚焦：摆在谈判桌正中心的权力象征物、对阵两派虚伪的礼貌与背后的暗器、极度紧绷的利益天平。",
        aestheticEn: "Focus: Power symbol placed in the center of negotiation table, fake politeness of opposing sides with hidden weapons, extremely tense scales of interest.",
        runtime: "IF (拿着印信与试图逼宫的王侯谈判) THEN (提供机制：开启派系的现场开价战，谈判过程强加入武力威逼的倒计时)。",
        runtimeEn: "IF (Negotiating_with_usurping_lord_using_seal) THEN (Provide_Mechanic: Open_live_faction_bidding_war_negotiation_forcibly_adds_armed_coercion_countdown)."
      }
    },
    {
      id: "the_exclusive_entrance_token",
      name: "权贵晚宴的血金请柬", nameEn: "The VIP Blood Invitation",
      group: "1. 权力与阶级跃升", groupEn: "1. Power & Status",
      def: "只向世界最顶级少数寡头和头目发放的、伴随极高准入防伪机制的密会邀请函（如武林盟主请书、财阀晚宴通牒）。",
      defEn: "A secret meeting invitation issued only to top oligarchs and bosses, featuring extreme anti-forge security (e.g., Martial Lord's invite, Corp banqet pass).",
      core: "【表面诱惑】：能跨越阶层步入那个主宰世界命运的微缩房间，获得极高社交等级的认同和豁免权。",
      coreEn: "【Surface Temptation】: Cross classes to enter the miniature room dominating world fate, gaining supreme social rank recognition and exemption.",
      logic: "【叙事抓手】：这就是一个“关卡入口”。为了使用这张票，持有者必须解决一系列物理前置：伪装特权身份、穿上束手束脚的高级正装、且必须交出所有外部武器。这使得主角在聚会内部必须赤手空拳，利用纯社交掩护进行高压智斗或暗杀。",
      logicEn: "【Narrative Affordance】: This is a 'level entrance'. To use this ticket, the holder must solve physical prerequisites: disguising privilege, wearing restrictive formal attire, surrendering old weapons. Forces the protagonist to fight barehanded inside, using pure social cover for high-pressure wits or assassination.",
      patch: {
        mechanics: "表层锚点 + [空间准入权 = 唯一解; 社交伪装需求 = 强制换装; 武装剥夺 = 必经事件]",
        mechanicsEn: "Surface_Anchor + [Spatial_Entry = Only_Solution; Social_Disguise = Forced_Wardrobe_Change; Armed_Deprivation = Mandatory_Event]",
        aesthetic: "聚焦：精致且附带高级印记的入场信物、安防人员极其压迫的审视凝视、大厅里名流交织但充满血腥算计的人流。",
        aestheticEn: "Focus: Exquisite entry token with high-end marks, highly oppressive scrutiny from security, elite yet bloody-calculated crowd mingling in hall.",
        runtime: "IF (为了潜入核心圈偷取了某大人物的入场券) THEN (提供机制：在大门安检处由于不熟悉其私人社交礼仪而面临瞬间暴露的极端危机)。",
        runtimeEn: "IF (Stole_a_VIP's_ticket_to_infiltrate_core_circle) THEN (Provide_Mechanic: Face_extreme_crisis_of_instant_exposure_at_security_due_to_unfamiliarity_with_their_private_social_etiquette)."
      }
    },
    {
      id: "the_public_uprising_signal",
      name: "点燃燎原之火的领袖大旗", nameEn: "The Rebel's Signal Flare",
      group: "1. 权力与阶级跃升", groupEn: "1. Power & Status",
      def: "能够唤醒千百万底层立刻揭竿而起的标志物（如染血的旧军旗、前代图腾、高音巨频发射器）。",
      defEn: "A symbol capable of awakening millions of underclass to instantly rise up (e.g., blood-stained old flag, past totem, high-freq transmitter).",
      core: "【表面诱惑】：煽动全世界怒火的力量，借此推翻高高在上的权威，建立拥护自己的新秩序。",
      coreEn: "【Surface Temptation】: Power to incite the world's fury, overthrow lofty authority, and establish a new order supporting oneself.",
      logic: "【叙事抓手】：它的效力完全依赖于“信众的物理接收度（视听范围能够覆盖多远）”。这就决定了持有者不能躲在地堡里偷偷使用，而是被物理逼迫着爬向全城最危险的制高点、中心祭坛进行彻底暴露。它是极化大场面的冲突引擎。",
      logicEn: "【Narrative Affordance】: Its validity depends entirely on 'believers' physical reception (audio-visual range)'. This dictates the holder can't hide in a bunker, but is physically forced to climb the city's most dangerous high point or altar to fully expose themselves. A grand-scene polarizing conflict engine.",
      patch: {
        mechanics: "表层锚点 + [唤醒AOE = 物理传播要求极高; 持有者暴露风险 = Max; 群体暴乱 = 提供巨大的环境动荡护盾]",
        mechanicsEn: "Surface_Anchor + [Awaken_AOE = Extreme_Physical_Propagation_Req; Holder_Exposure_Risk = Max; Mass_Riot = Provides_massive_env_turmoil_shield]",
        aesthetic: "聚焦：在战火中被颤抖的手高高举起的破旧图腾、随之从每个角落爆发出的震天怒吼、统治阶层的钢铁防线开始出现龟裂。",
        aestheticEn: "Focus: Worn totem held high by trembling hands in fires of war, ensuing earth-shattering roars from every corner, ruling class's steel lines starting to crack.",
        runtime: "IF (在最高城楼上点燃旗帜/发射全频道广播放出反抗信息) THEN (提供机制：视点拉远触发全城暴乱潮，但主角所在的孤立高台立刻迎来统治集团疯狂的空中集火清剿)。",
        runtimeEn: "IF (Igniting_flag/transmitting_on_highest_tower) THEN (Provide_Mechanic: Zoom-out_triggers_city_riot_wave_but_protagonist's_isolated_high_platform_faces_ruling_group's_frantic_aerial_focus_fire)."
      }
    },
    {
      id: "the_revocable_license_to_kill",
      name: "合法的半衰期杀人执照", nameEn: "The Decaying License to Kill",
      group: "1. 权力与阶级跃升", groupEn: "1. Power & Status",
      def: "由最高系统颁发、可以完全豁免底层律法并行使处决权的官方身份牌（如内廷锦衣卫腰牌、00系特工证）。",
      defEn: "Official ID issued by the highest system, fully exempting baseline laws with execution rights (e.g., Royal Guard badge, 00-agent card).",
      core: "【表面诱惑】：合法施加暴力的特权。拿着它，你就是行走的仲裁者，不再惧怕任何常规安保的盘问。",
      coreEn: "【Surface Temptation】: Privilege of legal violence. With it, you are a walking arbiter, no longer fearing regular security interrogation.",
      logic: "【叙事抓手】：它的物理效力完全依赖于“发证人的后台认可”。这使得它在带来极大顺滑感的同时，潜藏着极度要命的陷阱——当主角遭遇上层背叛，这块牌子会在瞬间变成判定其为“一级通缉犯”的催命符，当场剥夺所有权力。",
      logicEn: "【Narrative Affordance】: Its physical validity depends entirely on 'issuer's backend recognition'. Brings smooth passage but hides a fatal trap—when betrayed by superiors, this badge instantly becomes a death warrant marking them 'Top Wanted', stripping all power on the spot.",
      patch: {
        mechanics: "表层锚点 + [常规阻碍豁免 = 直达畅通; 后台认证依赖 = 绝对; 一键注销危机 = 强行反转战局]",
        mechanicsEn: "Surface_Anchor + [Regular_Obstacle_Exemption = Direct_Pass; Backend_Auth_Dependency = Absolute; 1-click_Revoke_Crisis = Forcibly_Reverses_Battle]",
        aesthetic: "聚焦：冷酷反光的特制纹章、基层守卫看到证件时瞬间惊恐退后的表情、证件突然失去光泽或系统报警响彻大厅的尴尬停顿。",
        aestheticEn: "Focus: Cold reflective special crest, low-level guard's instant terror upon seeing it, awkward pause when badge suddenly loses luster or system alarms blare.",
        runtime: "IF (在重重包围中向城卫军队长举起特权印信要求放行) THEN (提供机制：队长的验证灵石/扫描仪发出红光，提示该印信于五秒前刚刚被列为一级谋反物证)。",
        runtimeEn: "IF (Raising_privilege_token_to_guard_captain_in_siege_demanding_passage) THEN (Provide_Mechanic: Captain's_verifier_glows_red_prompting_token_marked_as_treason-evidence_5s_ago)."
      }
    },
    {
      id: "the_single_use_authoritative_pardon",
      name: "暴君的单次空白特赦令", nameEn: "The Blank Pardon",
      group: "1. 权力与阶级跃升", groupEn: "1. Power & Status",
      def: "仅有最高权势者加盖印章的文书，但具体内容留空，允许持有者填写一个任何级别的诉求（如空白圣旨、至高特赦令）。",
      defEn: "Document stamped by supreme authority with blank contents, allowing the holder to fill in a demand of any level (e.g., Blank edict, Supreme pardon).",
      core: "【表面诱惑】：最高无上权力的直接赋能。能填上一座城池、一个人的性命或者全族的赦免。",
      coreEn: "【Surface Temptation】: Direct empowerment of supreme power. Can fill in a city, a life, or an entire clan's pardon.",
      logic: "【叙事抓手】：它是“绝对单次消耗品”。因为只有一次机会而且效力巨大，它在物理持有阶段给主角和团队带来了极其严重的拉扯感。不到绝对的走投无路绝不敢轻易动用，严重压抑主体的行动规模。",
      logicEn: "【Narrative Affordance】: The 'absolute single-use consumable'. Because it's one-time with massive effect, it brings severe physical tug-of-war for the team holding it. Never used unless absolutely desperate, severely suppressing action scale.",
      patch: {
        mechanics: "表层锚点 + [单次清零消耗 = 抉择成本极高; 权威生命绑定 = 前提是发证人还在位; 兑换延宕 = 拉长整体剧情张力]",
        mechanicsEn: "Surface_Anchor + [Single-Zero_Consumable = Extreme_Decision_Cost; Authority_Life_Bound = Issuer_Must_Be_In_Power; Redemption_Delay = Stretches_Overall_Plot_Tension]",
        aesthetic: "聚焦：贴身口袋里被体温捂热的空白文契、面临生死时伸手进去又绝望拔出来的双手、落笔填写时无法停止的颤抖。",
        aestheticEn: "Focus: Blank pact warmed by body heat in pocket, hands reaching in and pulling out during life-or-death, uncontrollable trembling when writing.",
        runtime: "IF (同伴快要死了，主角终于崩溃拿出白纸写下要求顶级救援) THEN (提供机制：此时外界恰好传来最高权势者刚刚暴毙的消息，这份空白文书当场沦为一张废纸)。",
        runtimeEn: "IF (Companion_dying_protagonist_breaks_down_writing_top-tier_rescue_on_paper) THEN (Provide_Mechanic: News_arrives_supreme_authority_just_died_instantly_turning_it_into_scrap_paper)."
      }
    },
    {
      id: "the_co_presence_alliance_pact",
      name: "众目睽睽下的血誓盟约", nameEn: "The Public Blood Oath",
      group: "1. 权力与阶级跃升", groupEn: "1. Power & Status",
      def: "必须在众目睽睽之下、由权能双方物理在场，共同签署并进行仪式认证的权力共享协议（如皇室联姻婚书、财阀合并草案）。",
      defEn: "Power-sharing agreement requiring both sides to be physically present in public to sign and ritually authenticate (e.g., Royal marriage pact, Corp merger draft).",
      core: "【表面诱惑】：用一半的妥协换取另一半势力的重型护卫与绝对背书。是最直接可感的阶级绑定。",
      coreEn: "【Surface Temptation】: Exchanging half compromise for the other faction's heavy escorts and absolute endorsement. The most tangible class binding.",
      logic: "【叙事抓手】：协议本身不具备法力，法力来自于“签署地点与动作”。它强制要求极其苛刻的“物理同框”，即特定时间、密闭的主场馆、极具表演性质的神圣仪式。这为暗杀、抢亲、内部突防提供了一个安保极度密集但不可闪避的白刃战封闭空间。",
      logicEn: "【Narrative Affordance】: Pact itself lacks magic; magic comes from 'signing location and action'. Forcibly demands harsh 'physical co-framing': specific time, closed main hall, performative holy ritual. Provides assassins/stealers a security-dense but unavoidable enclosed melee space.",
      patch: {
        mechanics: "表层锚点 + [仪式物理限定 = 必须指定时间地点; 同框限制 = 关键角色变为站桩靶; 室内突围场 = 最拥挤的冲突空间]",
        mechanicsEn: "Surface_Anchor + [Ritual_Physical_Limit = Specific_Time_Place; Co-framing_Restrict = Key_chars_become_stationary_targets; Indoor_Breakout = Most_crowded_conflict_space]",
        aesthetic: "聚焦：铺满华丽红毯的冗长穹顶大厅、被繁复沉重的礼服死死限制移动的关键人物、仪式桌角反光的刺客利刃。",
        aestheticEn: "Focus: Long domed hall with lavish red carpets, key figures movement-restricted by heavy ornate attire, assassin's blade glinting off ritual table.",
        runtime: "IF (新郎新娘/两方财阀即将落笔签下这改变格局的卷轴) THEN (提供机制：高空花窗突然粉碎，重装死士直接空降在这满是高官显贵的无路可退的大厅正中央)。",
        runtimeEn: "IF (Bride_and_Groom/Two_Corps_about_to_sign_the_paradigm-shifting_scroll) THEN (Provide_Mechanic: High_stained_glass_shatters_heavy_death-squads_rappel_directly_into_the_center_of_the_cornered_elite_hall)."
      }
    },
    {
      id: "the_dead_mans_inheritance_will",
      name: "引爆家族内战的先人遗嘱", nameEn: "The Civil-War Will",
      group: "1. 权力与阶级跃升", groupEn: "1. Power & Status",
      def: "已故掌权者留下的极度易燃、脆弱，指定了庞大基业与最高席位合法归属的唯一手书密卷。",
      defEn: "Extremely flammable, fragile original scroll left by deceased leader, dictating legal succession to a massive empire and highest seat.",
      core: "【表面诱惑】：不需要发动流血战争，仅凭这张纸的宣读，就能让周围骄兵悍将立刻跪下臣服。",
      coreEn: "【Surface Temptation】: No bloody war needed; reading this single paper makes surrounding fierce generals instantly kneel in submission.",
      logic: "【叙事抓手】：它的物理特性不仅在于脆弱（投鼠忌器），更在于极其严格的“宣誓开箱机制”。通常要求将不同子嗣/派系的钥匙物理聚齐后才能开启。打开它的五分钟，就是把所有势不两立的死敌关在同一个狭小房间里的致命炸药引信。",
      logicEn: "【Narrative Affordance】: Its physical trait is not just fragility (hesitant to shoot), but a strict 'vow-opening mechanic'. Usually requires physically gathering keys from different heirs/factions. The 5 minutes of opening it is a deadly explosive fuse trapping sworn enemies in a tiny room.",
      patch: {
        mechanics: "表层锚点 + [组合强制聚集 = 各派系锁死在同一空间; 遗嘱宣读机制 = 倒数计时; 分配结果 = 输家必定物理掀桌]",
        mechanicsEn: "Surface_Anchor + [Combo_Forced_Gathering = Factions_locked_in_one_space; Will_Reading_Mechanic = Countdown; Allocation_Result = Losers_will_physically_flip_table]",
        aesthetic: "聚焦：繁复且布满机关的多芯暗盒、多只带着敌意的手同时插入锁孔的紧绷画面、随着公证人颤抖的声音急剧飙升的杀气。",
        aestheticEn: "Focus: Complex trap-filled multi-core box, multiple hostile hands turning keys together, sharply rising killing intent tracking the notary's trembling voice.",
        runtime: "IF (当宣读继承名字刚好略过权势最大的那个亲信时) THEN (提供机制：亲信瞬间踢翻公证桌，四周埋伏的连发弩/冲锋枪直接开始无差别扫射这个极度脆弱的小密室)。",
        runtimeEn: "IF (Reading_the_heir_name_skips_the_most_powerful_confidant) THEN (Provide_Mechanic: Confidant_instantly_kicks_table_hidden_crossbows/SMGs_start_indiscriminate_fire_in_the_fragile_room)."
      }
    },
    {
      id: "the_immovable_control_terminal",
      name: "无法搬动的最高控制台", nameEn: "The Immovable Control Hub",
      group: "1. 权力与阶级跃升", groupEn: "1. Power & Status",
      def: "能够随心所欲改变整座堡垒/城市底层的物理常熟与防御机制，但必须亲自坐在正中央操作的超大设施（阵眼核心、主脑机房）。",
      defEn: "Massive facility altering physics or defenses of a fortress/city at will, but requires sitting in its exact center (Core Array, Mainframe Room).",
      core: "【表面诱惑】：跨越阶级的终极捷径——直接篡改世界运作的代码和规则，从棋盘上的棋子直接化身为上帝视角的棋手。",
      coreEn: "【Surface Temptation】: Ultimate class-jumping shortcut—tampering world's operating code and rules, transforming from pawn to god-view player.",
      logic: "【叙事抓手】：它庞大得不可能被搬走。且连接这套终极系统，操作者的物理肉身或经脉会立刻进入完全开放的麻痹无防备状态。这就完美构建了最经典的“主体在虚空中大杀四方，而外界需要队友用血肉防住狂暴拆台”的双轨危机战。",
      logicEn: "【Narrative Affordance】: Too massive to move. Connecting to it leaves the operator's physical flesh or meridians completely paralyzed and defenseless. Perfectly constructs classic dual-crisis: 'Subject slaughters in void while teammates use flesh to guard reality'.",
      patch: {
        mechanics: "表层锚点 + [终端绝对固定 = 锁死防御圈; 肉身强制沉寂 = 绝对的真空靶子; 上传/覆盖读条 = 决战的压迫感极限]",
        mechanicsEn: "Surface_Anchor + [Terminal_Fixed = Locked_Defense_Ring; Flesh_Forced_Silence = Absolute_Vacuum_Target; Upload/Override_Loadbar = Limitless_Showdown_Pressure]",
        aesthetic: "聚焦：嗡嗡作响发着强光的灵能水晶/主干光缆、主角毫无防御垂死冥想的瘫软身躯、四面八方像潮水般涌来要砸毁机房的物理怪物。",
        aestheticEn: "Focus: Humming glowing psionic crystals / core cables, protagonist's defenseless limp body in deep meditative trance, tidal wave of physical monsters swarming to smash the room.",
        runtime: "IF (主角在精神位面刚好把暴君的权限推倒至99%) THEN (提供机制：现实层面最后一道物理防线被撕裂，护卫他后背的战友即将被怪物穿胸而死)。",
        runtimeEn: "IF (Protagonist_overrides_tyrant_access_to_99%_in_mind_plane) THEN (Provide_Mechanic: Reality's_last_defense_torn_guarding_teammate_about_to_be_impaled_by_monsters)."
      }
    },
    {
      id: "the_blind_box_execution_order",
      name: "开启即锁死的盲盒追杀令", nameEn: "The Blind-Box Death Warrant",
      group: "1. 权力与阶级跃升", groupEn: "1. Power & Status",
      def: "包含极高赏格位阶与绝密暗杀目标的特殊委任状，必须切开封印才能读取（赏金阁的天字卷宗、暗网SSS级处决白皮书）。",
      defEn: "Special warrant containing supreme bounty status and top-secret target, readable only after cutting seal (Heaven-tier scroll, Darknet SSS whitepaper).",
      core: "【表面诱惑】：合法且暴利地行使剥夺他人生命的神权，是脱离底层臭水沟、一战成名的最速弹射通道。",
      coreEn: "【Surface Temptation】: Legal and lucrative exercise of divine right to end lives; fastest catapult channel out of the bottom gutter.",
      logic: "【叙事抓手】：这是一份利用“盲盒机制”和“不可退档契约”构成的物理诅咒。一旦强行扯断封印，内部蕴含的物理坐标可能将目标指向主角一生中最想保护的人，从而引发“执行则杀亲、退单则被规则抹杀”的绝对反向碾压。",
      logicEn: "【Narrative Affordance】: A physical curse built on 'blind box mechanics' and 'non-refundable contract'. Breaking the seal might point physical coords to the very person the protagonist wants to protect most, causing 'execute kin or be erased by rules' inversion.",
      patch: {
        mechanics: "表层锚点 + [契约不可逆 = 拆封即上锁; 坐标反差震慑 = 落点高度致命; 执行时限限制 = 头顶的达摩克利斯]",
        mechanicsEn: "Surface_Anchor + [Irreversible_Contract = Locked_on_unseal; Coords_Contrast_Shock = Highly_fatal_drop-point; Execution_Time_Limit = Damocles_overhead]",
        aesthetic: "聚焦：拆箱前屏住呼吸的凝重、拉开卷首瞬间映入眼帘的那张无比熟悉挚爱的脸庞、旁边配套冰冷的致命凶器。",
        aestheticEn: "Focus: Held breath unboxing, instantly seeing that incredibly familiar and beloved face unrolling, accompanying cold fatal weapons alongside.",
        runtime: "IF (为了凑齐救命钱而签下必杀血契，利用解码器显示出红点坐标时) THEN (提供机制：惊呼发现红点坐标离自己只有两三米，门被推开，进来的正是相依为命的养母)。",
        runtimeEn: "IF (Signing_blood_pact_for_lifesaving_money_decoder_revealing_red_dot) THEN (Provide_Mechanic: Horrified_red_dot_is_2_meters_away_door_opens_revealing_dependent_adoptive_mother)."
      }
    },
    {
      id: "the_public_broadcast_node",
      name: "用命填出来的全城广播站", nameEn: "The Bloody Broadcast Tower",
      group: "1. 权力与阶级跃升", groupEn: "1. Power & Status",
      def: "可以强行覆盖全城视野、篡改公共认知的绝对底层信息塔盖（全息广播大厦、魔法扩音钟楼）。",
      defEn: "Absolute core info tower overriding all city vision and tampering public cognition (Holo-broadcast building, Magic amplifier bell-tower).",
      core: "【表面诱惑】：思想控制器。只要能站在这个麦克风前播报，立刻就能把镇压者定义为叛军，将自己包装成英雄，洗脑全部群氓。",
      coreEn: "【Surface Temptation】: Thought controller. Standing before this mic instantly frames suppressors as rebels and repackages oneself as a hero, brainwashing the masses.",
      logic: "【叙事抓手】：播报不仅具有“固定位置”，而且更致命的是它必须“耗时X分钟进行物理传导（由于信息阻挠）”。这直接将意识形态的高雅交锋，降维成了一方必须被固定在塔顶死守，另一方用重火力疯狂削平塔楼的血肉堆积战。",
      logicEn: "【Narrative Affordance】: Broadcasting isn't just 'fixed loc' but fatally 'requires X mins of physical transmission'. Dramatically down-dimensions high ideological clash into a meat-stack battle where one is pinned holding the tower top, and the other levels it with heavy fire.",
      patch: {
        mechanics: "表层锚点 + [读条防守战 = 必须死撑阵地防线; 环境强损毁 = 建筑承伤到极限; 言论效果化 = 倒数清零瞬间逆转一切]",
        mechanicsEn: "Surface_Anchor + [Loadbar_Defense = Must_hold_defense_lines; Heavy_Env_Destruction = Architecture_damaged_to_limit; Speech_Effectuation = Zero-count_instant_reversal]",
        aesthetic: "聚焦：塔顶正在闪烁上传数据的粗粝操作台、在震耳欲聋爆炸声和落石中满头是血继续死吼着控制键盘的主角。",
        aestheticEn: "Focus: Blinking data-upload console atop tower, bloodied protagonist roaring and holding keyboard amidst deafening explosions and falling rocks.",
        runtime: "IF (锁死顶层大门，摁下传导器开始全城广播被隐藏的真相) THEN (提供机制：外围钢化玻璃尽碎，对立阵营的重装炮艇同时升空，瞄准了这栋摇摇欲坠的建筑)。",
        runtimeEn: "IF (Locking_top_doors_hitting_transmitter_to_broadcast_hidden_truth) THEN (Provide_Mechanic: Outer_glass_shatters_enemy_heavy_gunships_rise_simultaneously_aiming_at_the_tottering_building)."
      }
    },
    {
      id: "the_asylum_border_ticket",
      name: "一步之遥的绝对庇护路条", nameEn: "The One-Step Asylum Pass",
      group: "1. 权力与阶级跃升", groupEn: "1. Power & Status",
      def: "一本有着特殊钢印、只要进入特定物理范围就完全免疫当前一切跨国逮捕和炮火打击的终极路条。 ",
      defEn: "Final passport with a special steel stamp, granting complete immunity to arrests and fire the moment a specific physical boundary is entered.",
      core: "【表面诱惑】：绝对防卫的免死金牌。一旦拿到并抵达，就能把所有追捕大军当做虚无的空气。",
      coreEn: "【Surface Temptation】: Absolute defense gold medal. Once acquired and destination reached, all pursuing armies become thin air.",
      logic: "【叙事抓手】：它的“无敌魔法”具有极度苛刻、肉眼可见的物理边界线（只能是大使馆门槛、中立海域红线）。这为生死时速级的跑酷设定了一个终极明确的地理坐标。差一毫米越线，特权等于废纸，当场被击毙。",
      logicEn: "【Narrative Affordance】: Its 'invincibility magic' has an extremely harsh, visible physical border (Embassy threshold, neutral waters redline). Defines an ultimate clear geographic finish line for desperate speed runs. Missing by a millimeter voids the privilege into scrap paper.",
      patch: {
        mechanics: "表层锚点 + [绝对地理界限 = 高压跑酷终点; 越线瞬间护佑机制 = 绝对且强制; 终点前截杀火力 = 极度压缩]",
        mechanicsEn: "Surface_Anchor + [Absolute_Geo-Border = High-pressure_parkour_finish; Cross-line_Instant_Protection = Absolute_forced; Pre-finish_Focus_Fire = Extremely_Compressed]",
        aesthetic: "聚焦：那条用黄漆画在前方的生死分界线、举着免死牌满身弹孔向前爬行的血痕、追猎者在黄线外急刹脚跟发出愤怒的不甘。",
        aestheticEn: "Focus: Painted yellow life-death boundary ahead, crawling forward bullet-riddled holding immunity badge, hunters braking hard outside yellow line howling angrily.",
        runtime: "IF (背着重伤的队友即将倒在距离中立界碑五厘米的地方) THEN (提供机制：疯狂扣扳机的追击者停止射击，不仅不敢跨线，甚至被边界地带突然亮起的最高级防御炮列锁定)。",
        runtimeEn: "IF (Carrying_crit_teammate_falling_5cm_short_of_neutral_border_stone) THEN (Provide_Mechanic: Trigger-happy_pursuers_stop_shooting_afraid_to_cross_and_locked-on_by_border's_top-tier_defense_cannons_lighting_up)."
      }
    }
  ]
};
