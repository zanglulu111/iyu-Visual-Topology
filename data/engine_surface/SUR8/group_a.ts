import { LibraryCategoryDef } from '../../../types';

export const SUR8_GROUP_A: LibraryCategoryDef = {
  id: "age_base",
  name: "1. 生理阶段与时间磨损 (Chronological Stage & Decay)",
  nameEn: "Chronological Stage & Decay",
  desc: "主体在单向时间轴上的熵增刻度。在 M0-M7 引擎中，年龄不可逆地决定了肉体（M2）的极限，以及大他者（M4）对其实用价值的估价。",
  defEn: "The entropy marker on a one-way timeline. In the M0-M7 engine, age irreversibly dictates flesh limits (M2) and systemic evaluation (M4).",
  items: [
    {
      id: "age_child",
      name: "儿童 (6-12岁)",
      nameEn: "Child (6-12)",
      def: "发育前阶段。纯真、脆弱，尚未被大他者完全规训的混沌体。",
      defEn: "Pre-pubescent stage. Innocent, fragile, a chaotic entity not yet fully disciplined by the Big Other.",
      core: "【换喻】绝对低位的视角与被系统判定为“未完成的零件” (The absolute low-angle perspective and the system's 'unfinished part')",
      coreEn: "【Metonymy】The raw material of humanity; vulnerability weaponized as narrative stakes.",
    },
    {
      id: "age_teen",
      name: "少年 (13-19岁)",
      nameEn: "Teen (13-19)",
      def: "发育燃烧期。荷尔蒙暴走，叛逆，刚刚认识到社会规则的虚伪性。",
      defEn: "Pubescent burning stage. Hormonally chaotic, rebellious, freshly realizing the hypocrisy of the rules.",
      core: "【换喻】关节咔咔作响的拔节期与毫无理智可言的过载高热 (The cracking joints of growth and irrational overloaded thermal heat)",
      coreEn: "【Metonymy】The blazing engine without steering brakes; pure unrefined Eros and rebellion.",
    },
    {
      id: "age_youth",
      name: "青年 (20-35岁)",
      nameEn: "Young Adult (20-35)",
      def: "鼎盛期。肉体与精神的双重巅峰，也是被系统剥削压榨的第一主力。",
      defEn: "The Prime. Dual peak of flesh and mind. Also the primary battery exploited by the System.",
      core: "【换喻】极其锋利的出鞘之刃与正被抛入修罗场的电池 (The unsheathed razor-sharp blade and the battery loaded into the slaughterhouse)",
      coreEn: "【Metonymy】Peak performance. The apex predator that powers the engine of society.",
    },
    {
      id: "age_mid",
      name: "中年 (36-55岁)",
      nameEn: "Middle Age (36-55)",
      def: "稳定期与初老。责任的重压，体能开始出现暗伤，深谙系统运作的灰黑地带。",
      defEn: "Stability and early aging. The crush of responsibility, onset of chronic physical damage, fluent in the system's gray zones.",
      core: "【换喻】背负着锚链泥沙的沉稳与正在下沉的重力场 (The steady gait hauling an anchor chain, and the sinking gravity field)",
      coreEn: "【Metonymy】Compromise incarnate. The rusty shield that knows how to survive.",
    },
    {
      id: "age_elder",
      name: "老年 (60岁以上)",
      nameEn: "Elder (60+)",
      def: "衰退期。肉体濒临枯竭，但积累了海量的经验、秘密或权力。",
      defEn: "Decline. The flesh nears exhaustion, but holds immense reservoirs of experience, secrets, or institutional power.",
      core: "【换喻】铺满皱纹的时间地图与腐朽却致命的枯木 (The map of time carved in wrinkles and the hollow but lethal dry wood)",
      coreEn: "【Metonymy】Living history. The fading ember that can still start a forest fire.",
    }
  ]
};
