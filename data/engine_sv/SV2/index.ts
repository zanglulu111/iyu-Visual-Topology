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
      },
      {
        id: "vol_30s",
        name: "30秒 (30s)",
        nameEn: "30s Spot / Short Idea",
        def: "【落差法则】一半时间构建幻象，一半时间粉碎幻象。",
        defEn: "Half illusion construction, half illusion destruction.",
        core: "前 15s 渲染虚假安宁，后 15s 镜头拉远/反转，暴露出 M1 核。",
        coreEn: "15s peace, 15s rupture.",
      },
      {
        id: "vol_60s",
        name: "60秒 (60s)",
        nameEn: "1 Min Macro",
        def: "【极微型切片】在一个连续的时空内，走完一次简陋但完整的主体缝合。",
        defEn: "One continuous space-time suture completion.",
        core: "不可展开大设定，强制在单一场景(SUR6)内完成 M2->M4->M6。",
        coreEn: "Single scene complete arc M2-M4-M6.",
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
      },
      {
        id: "vol_3m",
        name: "3分钟 (3m)",
        nameEn: "3 Min Concept / MV",
        def: "【概念循环】依靠强烈的节奏推进，而非严密的线性情节。",
        defEn: "Rhythm driven rather than linear plot.",
        core: "核心是展示主体在 M3 与 M4 之间的反复冲撞。",
        coreEn: "Repeated collision between M3 and M4.",
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
      },
      {
        id: "vol_15m",
        name: "15分钟 (15m)",
        nameEn: "15 Min Drama Short",
        def: "【短片电影标准局】能够承载一个人物完整的起承转合心理弧光。",
        defEn: "Standard short film, complete psychological arc.",
        core: "允许动用30%篇幅展现 SUR10 和 SUR9。结尾逼迫主角做出不可逆的抉择。",
        coreEn: "30% on SUR10/SUR9. End forces irreversible choice.",
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
      },
      {
        id: "vol_90m",
        name: "90分钟 (90m)",
        nameEn: "Feature Film",
        def: "【总体性幻灭 / 终极长片】每一个参数都能发育为一整幕。",
        defEn: "Total disillusionment / Feature length.",
        core: "完整的世界观铺陈。主角的挣扎引发系统的连锁反应。",
        coreEn: "Complete world building. Struggle triggers chain reaction.",
      }
    ]
  }
];
