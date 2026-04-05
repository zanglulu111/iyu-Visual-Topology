import { LibraryCategoryDef } from '../../../types';

export const SUR9_GROUP_A: LibraryCategoryDef = {
  id: "prof_violence",
  name: "1. 暴力与执法 (Violence & Enforcer)",
  nameEn: "Violence & Enforcer",
  desc: "系统合法暴力与个人物理法则的具象边界。肉身（M2）被绝对工具化为 M5（动能破坏）代理。",
  defEn: "The embodiment of systemic force and physical law. M2 flesh is absolute-instrumentalized as proxies for M5 kinetic output.",
  items: [
    {
      id: "detective_noir",
      name: "私家侦探",
      nameEn: "Private Eye (Noir)",
      def: "游走在法律边缘，用相机、拳头与黑市情报寻找真相。",
      defEn: "Navigating edges of law, using cameras, fists, and black-market intel to unearth truths.",
      core: "【换喻】穿透虚假大他者的目光与被酒精麻醉的创伤",
      coreEn: "【Metonymy】The cynical gaze piercing the Big Other, numbed by alcohol.",
      logic: "【犬儒主义底线】：洞悉大他者（M4）的虚伪，自我放逐，但对缺失的正义感（M1）存有执念。其物理冲突（M5）往往是防御性的。",
      logicEn: "Cynical exile aware of M4 hypocrisy, yet clinging to M1 justice. M5 violence is mostly defensive.",
      patch: {
        mechanics: "基础调查协议 + [M4信任度 = 破产; M2承受力 = 强行续命]",
        mechanicsEn: "Base_INVEST + [M4_Trust = Bankrupt; M2_Durability = Running_On_Fumes]",
        aesthetic: "折痕风衣、百叶窗下的阴影、烟雾、指关节淤青。以颓废掩饰敏锐。",
        aestheticEn: "Creased coats, Venetian blind shadows, smoke, bruised knuckles.",
        runtime: "IF (触碰封印结界 M1) THEN (抛弃利益逻辑 M3，不计代价摧毁幕后 M4)。",
        runtimeEn: "IF (Trigger_Sealed_M1) THEN (Abandon M3 profit, recklessly destroy M4 node)."
      }
    },
    {
      id: "homicide_cop",
      name: "重案刑警",
      nameEn: "Homicide Detective",
      def: "体制内面对罪恶与尸体的基层齿轮。",
      defEn: "Systemic gear facing corpses and sin within bureaucracy.",
      core: "【换喻】清洗社会血迹的抹布与被程序碾压的良知",
      coreEn: "【Metonymy】Society's blood-rag; conscience crushed by procedure.",
      logic: "【程序正义悖论】：M4（体制）末梢，直面实存的 M2（尸体）。最深撕裂在于繁文缛节（M4）与必须抓到真凶的源驱力（M1）之冲突。",
      logicEn: "M4 terminal facing M2 corpses. Core tear: bureaucracy vs imperative to catch killer.",
      patch: {
        mechanics: "合法开火协议 + [程序压抑 = MAX; 内心创伤 = 高危]",
        mechanicsEn: "Legal_FIRE + [Procedural_Suppression = MAX; Trauma = High_Risk]",
        aesthetic: "警徽、咖啡渍文件、停尸房冷光、单向玻璃、血丝眼球。",
        aestheticEn: "Badges, coffee-stained files, morgue cold-light, bloodshot eyes.",
        runtime: "IF (程序 M4 无法制裁纯粹邪恶) THEN (极易触发越界私刑 M5)。",
        runtimeEn: "IF (M4_Fails_To_Punish_Evil) THEN (High risk of M5 vigilante execution)."
      }
    },
    {
      id: "sniper",
      name: "狙击手",
      nameEn: "Sniper",
      def: "远距离死神，极度耐心的压倒性控制者。",
      defEn: "Distant Reaper; extremely patient overwhelming controller.",
      core: "【换喻】上帝视角的裁决器与绝对抹杀连接的深渊",
      coreEn: "【Metonymy】God-view adjudicator, obliterating physical connection.",
      logic: "【即死压缩】：将 M5 压缩在一点爆发。远离肉搏使之产生 M4（审判者）的幻觉，却承受“无法触碰”的 M1 绝对孤独。",
      logicEn: "Compressing M5 into one point. Distance grants M4 illusion, but inflicts M1 absolute isolation.",
      patch: {
        mechanics: "高维打击协议 + [情感波动 = 零; 距离感 = 深渊]",
        mechanicsEn: "High-D_STRIKE + [Emotional_Waves = Zero; Distance = Abyss]",
        aesthetic: "十字准星世界、屏息心跳、伪装网下静止躯体、反光镜片。",
        aestheticEn: "Crosshair micro-world, held breath, camo stillness, mirrored lenses.",
        runtime: "IF (凝视目标过久产生移情 M3) THEN (致命失手或倒戈)。",
        runtimeEn: "IF (Prolonged_Stare_Causes_M3_Empathy) THEN (Lethal miss or defection)."
      }
    },
    {
      id: "riot_police",
      name: "防暴警察",
      nameEn: "Riot Police",
      def: "体制盾牌，列阵面对群众的暴力工具。",
      defEn: "Systemic shield facing mob wrath; mechanized violent tool.",
      core: "【换喻】匿名黑色甲壳与阻挡历史车轮的肉盾",
      coreEn: "【Metonymy】Anonymous black carapace; meat-shield against history.",
      logic: "【M4防波堤】：彻底抹去面孔的 M4 物理结界。直面集体狂热（M3/M5）时强制锁死个人同情心（M1）。",
      logicEn: "Faceless M4 physical ward. Facing collective fever (M3/M5) forces lockdown of personal empathy (M1).",
      patch: {
        mechanics: "阵列镇压协议 + [个体意志 = 覆写; 承伤容错 = 极高]",
        mechanicsEn: "Phalanx_SUPPRESS + [Individual_Will = Overwritten; Damage_Tolerance = Extreme]",
        aesthetic: "黑色防爆盾、催泪瓦斯白雾、面罩后非人格化双眼、钢铁步履。",
        aestheticEn: "Black shields, tear gas fog, depersonalized eyes behind visors, iron footsteps.",
        runtime: "IF (面对绝对无辜者) THEN (M4 阵型可能崩溃，M1 个体意识觉醒导致抗命)。",
        runtimeEn: "IF (Facing_Absolute_Innocence) THEN (M4 breakdown, M1 awakens causing insubordination)."
      }
    },
    {
      id: "mercenary",
      name: "雇佣兵",
      nameEn: "Mercenary",
      def: "为钱而战，无主张的纯粹战争机器。",
      defEn: "Fighting for coin; pure war machine without ideology.",
      core: "【换喻】标价的弹道与剥落家国信仰的纯粹暴力",
      coreEn: "【Metonymy】Priced ballistics; violence stripped of national faith.",
      logic: "【等价交换】：解构 M4 的神圣性，将暴力 M5 降维为对金钱 M3 的交易追求。极度世俗与粗糙的生存感。",
      logicEn: "Deconstructs M4 sanctity, reducing M5 violence to M3 monetary pursuit. Ultra-secular survival.",
      patch: {
        mechanics: "无差射击协议 + [信仰绑定 = 无; 货币驱动轴 = 绝对]",
        mechanicsEn: "Indiscriminate_FIRE + [Ideology = None; Currency_Axis = Absolute]",
        aesthetic: "未标记武器、混搭战术背心、多国护照、无荣誉伤疤。",
        aestheticEn: "Unmarked guns, mismatched tactical gear, passports, unhonored scars.",
        runtime: "IF (资金链 M3 断裂或面临必死 M6 局) THEN (瞬间逃跑或倒戈背刺)。",
        runtimeEn: "IF (Funding_Snaps OR Certain_M6_Death) THEN (Instant flee or defection)."
      }
    },
    {
      id: "hitman",
      name: "职业杀手",
      nameEn: "Hitman",
      def: "冷酷清除者，将谋杀化为兼具艺术与商业的产业。",
      defEn: "Cold eliminator turning murder into art and commerce.",
      core: "【换喻】消音死神与洁癖化的致命抽空动作",
      coreEn: "【Metonymy】Silenced reaper; hyper-sterile vacuuming of life.",
      logic: "【极度规训】：以最日常（M3）的方式隐蔽，制造反差极大的 M6（死亡）。具备反人性的 M4 自我规训控制力。",
      logicEn: "Concealed in mundane M3 to deliver stark M6 death. Deep anti-human M4 self-discipline.",
      patch: {
        mechanics: "洁癖杀戮协议 + [日常伪装力 = MAX; 道德波动 = 阻断]",
        mechanicsEn: "Sterile_KILL + [Mundane_Camo = MAX; Moral_Flux = Blocked]",
        aesthetic: "消音器、皮手套、定制西装、交响乐伴奏爆头。",
        aestheticEn: "Suppressors, slip-gloves, bespoke suits, headshots to symphony.",
        runtime: "IF (连带杀戮波及自身最隐秘的 M1 羁绊) THEN (职业戒律崩溃反噬)。",
        runtimeEn: "IF (Collateral_Damages_Secret_M1_Tie) THEN (Code collapse and backlash)."
      }
    },
    {
      id: "bounty_hunter",
      name: "赏金猎人",
      nameEn: "Bounty Hunter",
      def: "为悬赏追猎逃犯，游走灰色地带独狼。",
      defEn: "Lone wolf hunting fugitives for bounties in gray zones.",
      core: "【换喻】追逐赏金账单的鬣狗与荒野齿轮",
      coreEn: "【Metonymy】Hyena chasing bills; tracking gear in badlands.",
      logic: "【捕食者连接】：完全独立于 M4。以极具套索感的 M5 压制猎物，高度了解目标后甚至形成病态的 M2 精神镜像连接。",
      logicEn: "Outside M4. Suppresses pray via lasso-like M5, forming morbid psychic M2 mirror-links with targets.",
      patch: {
        mechanics: "追猎束缚协议 + [嗅觉追踪 = 锐利; 法制底线 = 弹性]",
        mechanicsEn: "Hunt_BIND + [Tracking = Acute; Legal_Limits = Elastic]",
        aesthetic: "破旧通缉令、沉甸手铐、荒野改装车、风沙皮夹克。",
        aestheticEn: "Worn posters, heavy cuffs, modded badland muscle cars, dusty leather.",
        runtime: "IF (发现猎物比一切都有正义性时) THEN (结为荒诞的血盟)。",
        runtimeEn: "IF (Prey_Proves_Utmost_Justice) THEN (Forms absurd blood-alliance)."
      }
    },
    {
      id: "bodyguard",
      name: "保镖",
      nameEn: "Bodyguard",
      def: "雇主的物理防线，随时准备当肉盾。",
      defEn: "Employer's physical defense line, ready to be a meat-shield.",
      core: "【换喻】高薪活动的防御沙袋与拦截死亡的屏障",
      coreEn: "【Metonymy】Highly-paid sandbag; dynamic barrier intercepting death.",
      logic: "【主动承伤】：放弃用 M5 保护自身 M2，反过来去拥抱 M6 以保全雇主的财富阶级 M3。一种反生物本能的逻辑。",
      logicEn: "Frees M5 from protecting own M2, instead embracing M6 to save employer's M3 class. Anti-biological instinct.",
      patch: {
        mechanics: "防御重定向协议 + [视线警惕 = 超载; 自我保护 = 抑制]",
        mechanicsEn: "Defense_REDIRECT + [Vigilance = Overload; Self_Preservation = Suppress]",
        aesthetic: "领里耳麦、紧绷的恐怖肌肉、扫视的墨镜、条件反射式扑救。",
        aestheticEn: "Collar earpiece, terrifyingly tense muscles, scanning shades, reflex jumps.",
        runtime: "IF (必须用生命保护一个极度鄙视自己的混蛋) THEN (内在张力极大化)。",
        runtimeEn: "IF (Forced_To_Die_For_Despicable_Bastard) THEN (Max internal tension)."
      }
    },
    {
      id: "interrogator",
      name: "审讯官",
      nameEn: "Interrogator",
      def: "攻破心理防线、利用施压提取情报的病态专家。",
      defEn: "Morbid expert breaking mental lines via sheer pressure to extract intel.",
      core: "【换喻】语言作为解剖刀的软性强暴与精神高压舱",
      coreEn: "【Metonymy】Language as a scalpel for mind soft-rape; mental hyperbaric chamber.",
      logic: "【微创爆破】：以空间封闭和言辞暴力制造 M4 的权威幻影，进行高维压迫，粉碎犯人的意志核心 M1。",
      logicEn: "Uses spatial isolation and verbal violence to forge M4 authority phantom, piercing prisoner's M1 core.",
      patch: {
        mechanics: "精神渗透协议 + [心理防线穿刺力 = 致命; 痛苦输出 = 精算]",
        mechanicsEn: "Mind_INFILTRATE + [Pierce = Lethal; Pain_Output = Calculated]",
        aesthetic: "黑暗中刺眼白光、录音机摩擦声、单向玻璃、沾血刑具。",
        aestheticEn: "Blinding white light in dark, tape recorder fuzz, one-way mirrors.",
        runtime: "IF (暴露了自身无法愈合的核心创伤) THEN (被囚犯反向洗脑逼疯)。",
        runtimeEn: "IF (Revealing_Own_Unhealing_Core_Trauma) THEN (Reverse-brainwashed by captive)."
      }
    },
    {
      id: "prison_guard",
      name: "狱卒",
      nameEn: "Prison Guard",
      def: "看守无期囚笼的制度代行者，实则自身亦陷于高墙。",
      defEn: "Cage keeper and system proxy, effectively trapped in the high walls themselves.",
      core: "【换喻】摇晃的车间铁环与被终身监禁的看门犬",
      coreEn: "【Metonymy】Jangling keys; the watchdog sentenced to life.",
      logic: "【微观独裁】：极低阶层的 M4 代行者，拥有对囚犯 M2 的物理全知权力。靠施虐满足自身 M1 的平庸与缺失。",
      logicEn: "Lowest tier M4 proxy with absolute physical M2 panopticon power. Uses sadism to cover own M1 void.",
      patch: {
        mechanics: "狱场钳制协议 + [领地控制欲 = 膨胀; 幽闭隐患 = 深埋]",
        mechanicsEn: "Panopticon_CLAMP + [Territorial_Urge = Inflated; Claustrophobia = Buried]",
        aesthetic: "清脆沉重钥匙串、铁栅栏阴影、随时待命的警棍、霉变空气。",
        aestheticEn: "Jangling keys, iron bar shadows, gripped batons, musty air.",
        runtime: "IF (遭遇有组织性的终极越狱暴动) THEN (独裁错觉幻灭，沦为待宰羔羊)。",
        runtimeEn: "IF (Mass_Organized_Riot_Breakout) THEN (Dictator illusion shatters; becomes bait)."
      }
    },
    {
      id: "samurai_ronin",
      name: "浪人武士",
      nameEn: "Ronin",
      def: "失去主君的剑客，斩断旧体制，仅存一把刀与自我之“道”。",
      defEn: "Masterless swordsman fleeing pure structure, left with only a blade and personal code.",
      core: "【换喻】豁口的长刀与在废墟中坚守虚妄荣誉的亡魂",
      coreEn: "【Metonymy】Chipped longsword; the ghost clinging to hollow honor in ruins.",
      logic: "【脱序的M5流浪】：前主君（M4）崩塌使他们沦为乱世孤魂。在极度的物质 M2 饥饿与高贵的武士道 M1 回响之间惨烈撕扯。",
      logicEn: "M4 system collapse leaves them as ghosts. Torn between extreme M2 hunger and noble M1 code echo.",
      patch: {
        mechanics: "断尾流浪协议 + [阵营绑定 = 已解散; 拔刀死斗力 = MAX]",
        mechanicsEn: "Severed_WANDERING + [Faction_Bind = Void; Draw_Lethality = MAX]",
        aesthetic: "破旧斗笠、极锐却残破的武士刀、泥泞的道服、一滴致命血花。",
        aestheticEn: "Worn straw hats, sharp broken katanas, muddy gi, a single deadly blood spray.",
        runtime: "IF (为了吃一口饭而受雇斩杀毫无过错的老弱病残) THEN (价值观彻底解体，自尽或疯魔)。",
        runtimeEn: "IF (Hired_to_Slaughter_Innocent_For_A_Meal) THEN (Absolute value decay; descends into seppuku or madness)."
      }
    },
    {
      id: "knight",
      name: "骑士",
      nameEn: "Knight",
      def: "宣誓效忠并披坚执锐的浪漫化绞肉机。",
      defEn: "Romanticized meat grinder sworn to loyalty and heavy armor.",
      core: "【换喻】裹挟圣光的移动铁壳与碾入淤泥的马蹄铁",
      coreEn: "【Metonymy】Holy mobile iron shell; horseshoes grinding in muck.",
      logic: "【浪漫外层下极度残酷】：用宗教/封建荣誉（M4）掩盖纯粹物理碾压（M5）。M2 肉体藏在厚重铁壁内的深层隔离。",
      logicEn: "Uses religious/feudal honor (M4) to mask pure physical crushing (M5). Heavy armor deeply isolates M2 flesh.",
      patch: {
        mechanics: "铁壁冲锋协议 + [信仰护盾 = 强效; 敏捷灵通度 = 极差]",
        mechanicsEn: "Iron-Wall_CHARGE + [Faith_Shield = Strong; Agility = Extremely_Poor]",
        aesthetic: "银色板甲折射骄阳、家族繁复纹章、战马灼热鼻息。",
        aestheticEn: "Sun-refracting plate armor, intricate heraldry, scorching breath of warhorses.",
        runtime: "IF (见证所效忠的主君彻底背离一切神圣法则) THEN (盔甲崩塌，沦为复仇恶鬼或可悲遗老)。",
        runtimeEn: "IF (Sworn_Lord_Completely_Betrays_Sacred_Law) THEN (Armor collapses, becoming vengeful demon or tragic relic)."
      }
    },
    {
      id: "executioner",
      name: "刽子手",
      nameEn: "Executioner",
      def: "代国家抹除罪人的暗面利斧，背负血债的法定除障者。",
      defEn: "Dark axe erasing sinners for the state; statutory obstacle remover bearing karmic blood debts.",
      core: "【换喻】笼罩断头台的无面黑罩与国家机器的罪恶沉淀池",
      coreEn: "【Metonymy】Faceless hood over the scaffold; the sin-repository of state machinery.",
      logic: "【被边缘化的法则 M6】：执行国家 M4 的最终裁决，降下终点 M6。却因极度沾染恐怖而在社会 M3 层面沦为受诅咒的贱民阶级。",
      logicEn: "Executes M4's final ruling, dropping M6 terminus. Heavily cursed in M3 societal layer due to terror.",
      patch: {
        mechanics: "绝命制裁协议 + [社会恐惧光环 = 常驻; 罪恶同化抗性 = 极高]",
        mechanicsEn: "Terminal_SANCTION + [Social_Terror_Aura = Active; Sin_Assimilation_Resist = Very_High]",
        aesthetic: "生怕露出身形的黑头套、极其厚重的斩木斧、脚下的枯黄落叶。",
        aestheticEn: "Black hoods fearing exposure, impossibly heavy wood-axes, dead autumn leaves.",
        runtime: "IF (在断头台上看到了相依为命的血肉至亲) THEN (触发核心伦理熔毁)。",
        runtimeEn: "IF (Seeing_Blood_Relatives_on_the_Guillotine) THEN (Triggers core ethical meltdown)."
      }
    },
    {
      id: "gladiator",
      name: "角斗士",
      nameEn: "Gladiator",
      def: "以命搏击博得狂热欢呼的血肉祭品与暴乱火种。",
      defEn: "Flesh sacrifice and riot spark fighting for lives to win fanatic cheers.",
      core: "【换喻】飞溅黄沙中的血肉商品与虚假封神的斗兽场图腾",
      coreEn: "【Metonymy】Flesh commodity in flying sand; fake-deity totem in the colosseum.",
      logic: "【M5 作为 M3 消费景观】：暴力动能（M5）被剥夺尊严后直接换算为看台娱乐（M3）。若能通过无数屠戮存活，将积累极为骇人的下层信仰（M4的颠覆力量）。",
      logicEn: "M5 violence stripped of dignity equals M3 entertainment. If surviving mass slaughter, accumulates terrifying underclass belief (potential M4 subversion).",
      patch: {
        mechanics: "血腥表演协议 + [绝对指令服从 = 锁死锁链; 肾上腺激素 = 危险溢出]",
        mechanicsEn: "Bloody_PERFORMANCE + [Absolute_Obedience = Chained; Adrenaline = Dangerous_Overflow]",
        aesthetic: "竞技场沙粒、血泪混合的模糊视线、刺耳的观众吼叫、猛兽的腥臭。",
        aestheticEn: "Arena sand, blurred vision of blood and sweat, deafening roar, stench of beasts.",
        runtime: "IF (用长矛越过防御直接刺死高高在上的贵族主脑) THEN (从偶像化身为真正的解放暴君)。",
        runtimeEn: "IF (Spearing_The_High_Noble_Overseer) THEN (Transforms from idol to true liberating tyrant)."
      }
    },
    {
      id: "secret_agent",
      name: "特工",
      nameEn: "Secret Agent",
      def: "没有过去、只有权限的深层影子穿透者。",
      defEn: "Deep shadow penetrator with no past, only clearance codes.",
      core: "【换喻】不存在的零号档案与定制燕尾服袖口滑落的毒刃",
      coreEn: "【Metonymy】Non-existent zero-archive; toxic blade slipping out of tuxedo cuffs.",
      logic: "【彻底抹除M1的主体表演】：一切信仰 M4 均内化为冰冷的任务清单。利用 M3（性与魅力）和 M5（极限刺杀）无缝穿梭。剥开表面一层层伪装，内部可能只剩空洞。",
      logicEn: "All M4 faith internalized as cold task lists. Uses M3 (sex/charm) and M5 (lethal hits) seamlessly. Peeling the disguise reveals a terrifying void.",
      patch: {
        mechanics: "幻影渗透协议 + [本体印证资料 = 404; 多向谎言拟合度 = 完美]",
        mechanicsEn: "Phantom_INFILTRATE + [True_Identity_Data = 404; Lie_Fitting = Flawless]",
        aesthetic: "高级定制剪裁、永远冷静的冰冷蓝眸、摇匀不搅拌的马丁尼、消音手枪。",
        aestheticEn: "Bespoke tailoring, cold blue eyes, shaken martinis, silenced pistols.",
        runtime: "IF (因为严重生理创伤导致身份重影，甚至爱上了刺杀目标) THEN (触发最高权限反人类格式化程序)。",
        runtimeEn: "IF (Identity_Bleed_Or_Falling_For_The_Target) THEN (Triggers supreme formatting/abandonment protocol)."
      }
    }
  ]
};
