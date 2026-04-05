import { LibraryCategoryDef } from '../../../types';

export const SV2_DATA: LibraryCategoryDef[] = [
  {
    id: "sv2_tier1",
    name: "极短体量爆发区 (15s - 60s)",
    desc: "高度压缩，舍弃铺垫。",
    items: [
      {
        id: "vol_15s",
        name: "15秒 (15s)",
        nameEn: "15s Bumper / TikTok",
        def: "【海明威协议】极度压缩的时间内，只展示水面上的冰尖。绝不宣读设定。",
        defEn: "[Hemingway Protocol] Only show the tip of the iceberg.",
        core: "单一锚点过载，跳过铺垫，将画面锁定在 M6(终结) 或 SUR5(欲望物)。",
        coreEn: "Single anchor overload, jump to M6 or SUR5.",
        logic: "凝视 (The Gaze)：没有前因后果的实在界显现，打断符号界的运作。",
        logicEn: "The Gaze: Real manifestation without context.",
        patch: {
          mechanics: "Render Ratio: 5% Visible / 95% Subtext. 严禁展开 SUR4(社会背景)。",
          mechanicsEn: "Render Ratio: 5%. FORBID SUR4 exposition.",
          aesthetic: "极度锐利、突兀。一个剥离了前后文的残忍事实切片。",
          aestheticEn: "Sharp, blunt. A cruel factual slice.",
          runtime: "IF (体量 = 15s) THEN (强制只输出故事结尾那一幕)。必须只展示结果，严禁以任何借口交代前因后果！"
        }
      },
      {
        id: "vol_30s",
        name: "30秒 (30s)",
        nameEn: "30s Spot / Short Idea",
        def: "【落差法则】一半时间构建幻象，一半时间粉碎幻象。",
        defEn: "Half illusion construction, half illusion destruction.",
        core: "前 15s 渲染虚假安宁，后 15s 镜头拉远/反转，暴露出 M1 核。",
        coreEn: "15s peace, 15s rupture.",
        logic: "对象a (Object a)：专注于展示客体是如何引诱并吞噬主体的。",
        logicEn: "Object a: Focus on object destroying subject.",
        patch: {
          mechanics: "Render Ratio: 15% Visible / 85% Subtext. 将冲突具象化为一次瞬间反转。",
          mechanicsEn: "Render Ratio: 15%. Concrete instant reversal.",
          aesthetic: "充满欺骗性的开头，急转直下的结尾。情绪温差极大。",
          aestheticEn: "Deceptive intro, plummeting end.",
          runtime: "IF (体量 = 30s) THEN (必须包含一个剧烈的视觉反转点)。前半段营造日常，后半段呈现裂缝！"
        }
      },
      {
        id: "vol_60s",
        name: "60秒 (60s)",
        nameEn: "1 Min Macro",
        def: "【极微型切片】在一个连续的时空内，走完一次简陋但完整的主体缝合。",
        defEn: "One continuous space-time suture completion.",
        core: "不可展开大设定，强制在单一场景(SUR6)内完成 M2->M4->M6。",
        coreEn: "Single scene complete arc M2-M4-M6.",
        logic: "切分 (The Cut)：用快速剪辑强行将主体欲望与随机对象缝合。",
        logicEn: "The Cut: Rapid suture to an object.",
        patch: {
          mechanics: "渲染结构必须高度紧凑，没有冗余对白。",
          mechanicsEn: "Extremely tight structure, no redundant dialogue.",
          aesthetic: "局促、极具爆发感。",
          aestheticEn: "Cramped and explosive.",
          runtime: "IF (体量 = 60s) THEN (故事的所有情节必须发生在一个封闭的物理空间 SUR6 内)。"
        }
      }
    ]
  },
  {
    id: "sv2_tier2",
    name: "氛围与概念区 (90s - 3m)",
    desc: "情绪延展，强迫性重复。",
    items: [
      {
        id: "vol_90s",
        name: "90秒 (90s)",
        nameEn: "90s Vibe",
        def: "【情绪延展 / 停顿喘息】允许一段无叙事性的纯情绪留白。",
        defEn: "Pure mood pause allowed.",
        core: "增加一条视觉线索强化 SUR2(背景场域)。",
        coreEn: "Boost SUR2 visual clues.",
        logic: "想象界 (The Imaginary)：用影像质感构建虚假的温柔之网掩盖刺痛。",
        logicEn: "The Imaginary: False gentle web masking pain.",
        patch: {
          mechanics: "节奏必须存在大段留白，叙事可以被环境隐喻打断。",
          mechanicsEn: "Large rhythmic blanks, environmental metaphors allowed.",
          aesthetic: "氛围感极浓重，视觉语言大于文本对白。",
          aestheticEn: "Heavy atmosphere, visuals > text.",
          runtime: "IF (体量 = 90s) THEN (必须有一段完全没有台词，仅靠环境声音和画面光影推进的段落)。"
        }
      },
      {
        id: "vol_3m",
        name: "3分钟 (3m)",
        nameEn: "3 Min Concept / MV",
        def: "【概念循环】依靠强烈的节奏推进，而非严密的线性情节。",
        defEn: "Rhythm driven rather than linear plot.",
        core: "核心是展示主体在 M3 与 M4 之间的反复冲撞。",
        coreEn: "Repeated collision between M3 and M4.",
        logic: "驱力 (The Drive)：呈现不以达到目的为目标的“强迫性绕圈”。",
        logicEn: "The Drive: Compulsive circling without goal.",
        patch: {
          mechanics: "逻辑线不重要，情绪冲撞最重要。",
          mechanicsEn: "Emotion > Logic.",
          aesthetic: "音乐MV质感，高度同步的视觉打点。",
          aestheticEn: "MV style, high sync visual beats.",
          runtime: "IF (体量 = 3m) THEN (叙事不再是线性的因果，而是一种类似舞蹈或病态循环的重复冲撞)。"
        }
      }
    ]
  },
  {
    id: "sv2_tier3",
    name: "中篇叙事展开区 (5m - 15m)",
    desc: "可以承载完整的人物心理弧光。",
    items: [
      {
        id: "vol_5m",
        name: "5分钟 (5m)",
        nameEn: "5 Min Encounter",
        def: "【主体间性博弈】单一场景的极致挖掘或双人深度对峙。",
        defEn: "Single scene deep dive or dual confrontation.",
        core: "限制物理空间，火力全转化为高密度对话和肢体微表情。",
        coreEn: "Restrict space, focus fire on dense dialogue/body language.",
        logic: "主体间性 (Inter-subjectivity)：在彼此身上寻找 M1 的填补物，最终双双失败。",
        logicEn: "Inter-subjectivity: Failing to fill M1 through the other.",
        patch: {
          mechanics: "高度依赖文本质量，每一句台词都必须带有潜台词。",
          mechanicsEn: "Highly text-dependent, pure subtext in offhand remarks.",
          aesthetic: "像话剧一样的压迫感，镜头的特写极多。",
          aestheticEn: "Theatrical tension, extremely close shots.",
          runtime: "IF (体量 = 5m) THEN (文本核心必须集中在一场关于谎言/真相的双人高强度博弈中)。"
        }
      },
      {
        id: "vol_15m",
        name: "15分钟 (15m)",
        nameEn: "15 Min Drama Short",
        def: "【短片电影标准局】能够承载一个人物完整的起承转合心理弧光。",
        defEn: "Standard short film, complete psychological arc.",
        core: "允许动用30%篇幅展现 SUR10 和 SUR9。结尾逼迫主角做出不可逆的抉择。",
        coreEn: "30% on SUR10/SUR9. End forces irreversible choice.",
        logic: "穿越幻想 (Fantasy Traversal)：让主体真正摸到实在界的边界。",
        logicEn: "Fantasy Traversal: Touch the boundary of the Real.",
        patch: {
          mechanics: "Render Ratio: 30% Visible / 70% Subtext.",
          mechanicsEn: "Render Ratio: 30% Visible / 70% Subtext.",
          aesthetic: "兼具背景厚度与人物锐利感。",
          aestheticEn: "Thick background but sharp character.",
          runtime: "IF (体量 = 15m) THEN (大纲必须表现出主角从对大他者坚信不疑，到彻底幻灭的三重跌落)。"
        }
      }
    ]
  },
  {
    id: "sv2_tier4",
    name: "全景与宏大建构区 (45m - 90m)",
    desc: "完整的物理法则构建与社会的交织。",
    items: [
      {
        id: "vol_45m",
        name: "45分钟 (45m)",
        nameEn: "TV Episode",
        def: "【社会网络与多线群像】美剧单集标准体量。展开大他者的网络结构。",
        defEn: "Standard TV Episode size, macro social networks.",
        core: "必须引入副线(B-Plot)，展示同一个 SUR4 律法如何压榨不同阶层。",
        coreEn: "Sub-plot B required to show SUR4 operating on different classes.",
        logic: "符号界 (Symbolic Order)：详细描绘机器系统的齿轮如何绞杀肉身。",
        logicEn: "Symbolic Order: Detail the gears of the machine.",
        patch: {
          mechanics: "Render Ratio: 40% Visible / 60% Subtext. 采用 A/B 故事线交叉。",
          mechanicsEn: "Render Ratio: 40%. A/B intersecting lines.",
          aesthetic: "多视角、立体的群像质感。",
          aestheticEn: "Multi-perspective, 3D ensemble.",
          runtime: "IF (体量 = 45m) THEN (必须增加一个与主角命运对照的副线角色，共同服务于 M6 的主题)。"
        }
      },
      {
        id: "vol_90m",
        name: "90分钟 (90m)",
        nameEn: "Feature Film",
        def: "【总体性幻灭 / 终极长片】每一个参数都能发育为一整幕。",
        defEn: "Total disillusionment / Feature length.",
        core: "完整的世界观铺陈。主角的挣扎引发系统的连锁反应。",
        coreEn: "Complete world building. Struggle triggers chain reaction.",
        logic: "大他者 (The Big Other)：构建一个庞大的意义系统，然后在结尾将其彻底毁灭。",
        logicEn: "The Big Other: Construct meaning system just to destroy it.",
        patch: {
          mechanics: "Render Ratio: 50% Visible / 50% Subtext. 严密的三幕或多幕结构。",
          mechanicsEn: "Render Ratio: 50% / 50%. Strict three or multiple acts.",
          aesthetic: "院线电影级的体量承载感。",
          aestheticEn: "Theatrical blockbuster weight.",
          runtime: "IF (体量 = 90m) THEN (大纲必须按【建置-对抗-崩溃-虚无】等清晰的阶段详尽铺展全盘因果)。"
        }
      }
    ]
  }
];
