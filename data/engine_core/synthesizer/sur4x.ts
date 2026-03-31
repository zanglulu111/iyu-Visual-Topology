import { LibraryItemDef } from '../../../types';

export const SYNTHESIZER_SUR4X: LibraryItemDef[] = [
    {
        id: "sur4x_level_1",
        name: "L1.空气",
        nameEn: "Social Air",
        group: "SUR4X. 物理阶层阻力",
        def: "阶层几乎透明，几乎感觉不到社会结构的束缚。自由感强烈。",
        defEn: "Floating in fresh social air; minimal structural resistance.",
        core: "自由漂浮。物理现实对主体的动作 M5 几乎没有任何负重。",
        logic: "主体的 Slot4 环境总是呈现出广阔、明媚、无界限的视觉特征。动作 M5 的能耗极低。"
    },
    {
        id: "sur4x_level_2",
        name: "L2.粘稠液体",
        nameEn: "Viscous Liquid",
        group: "SUR4X. 物理阶层阻力",
        def: "感到了环境的摩擦。社会身份开始变得沉重，繁文缛节开始增加。",
        defEn: "Feeling the friction of the social environment; status or rules become heavy.",
        core: "社会粘度。每一步都需要额外的能量来平衡这种结构性的惯性。",
        logic: "叙事中增加微小的‘手续（Procedural）’描写。动作 M5 被环境 Slot4 的阻力系数修正。"
    },
    {
        id: "sur4x_level_3",
        name: "L3.泥淖",
        nameEn: "Deep Quagmire",
        group: "SUR4X. 物理阶层阻力",
        def: "阶级壁垒可见。身陷复杂的亲缘、职场或体制的泥沼中，挣扎但缓慢下沉。",
        defEn: "Visible barriers; trapped in complex kinship, workplace, or institutional knots.",
        core: "陷入系统。主体被各种能指（A）层层缠绕，举步维艰。",
        logic: "对话 Slot11 中充满了‘必须的妥协’。所有的环境设计 Slot4 都有大量的物理阻隔（围墙、走廊等）。"
    },
    {
        id: "sur4x_level_4",
        name: "L4.固化岩层",
        nameEn: "Solid Bedrock",
        group: "SUR4X. 物理阶层阻力",
        def: "绝对的固化。出身即终局。没有任何上升或逃逸的可能性，只有被镶嵌。",
        defEn: "Absolute ossified structure; no social mobility; embedded and trapped.",
        core: "阶级死缓。主体已经变成了系统结构中的一块砖石，失去了个体的流态性。",
        logic: "主体的 M1 被 Slot2 标签（身份）彻底压死。叙事文本中充斥着‘命运的重力’，几乎没有任何空间容纳主体的偶然性。"
    },
    {
        id: "sur4x_level_5",
        name: "L5.超高压内核",
        nameEn: "Hyper-pressure Core",
        group: "SUR4X. 物理阶层阻力",
        def: "存在即罪。系统对个体的排挤达到极限，每分每秒都面临着被结构的重量压扁。",
        defEn: "Existence itself is a crime; system pressure crushes individuality with absolute weight.",
        core: "结构的黑洞。所有的个体意志在这里都会被瞬间坍缩为系统所需的‘耗材’。",
        logic: "文本逻辑进入极端高压状态。每一个形容词（Slot6）都带有极其沉重的压迫性。动作 M5 总是导向对自身的损害。"
    }
];
