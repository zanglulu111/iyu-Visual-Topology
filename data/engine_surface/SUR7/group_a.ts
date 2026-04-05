import { LibraryCategoryDef } from '../../../types';

export const SUR7_GROUP_A: LibraryCategoryDef = {
  id: "gender_base",
  name: "1. 基础生理与视觉呈现 (Base Gender & Visuals)",
  nameEn: "Base Gender & Visuals",
  desc: "不仅是生理切片，更是社会凝视的原始靶面。在 M0-M7 引擎中，性别不仅是肉体属性，更是承受大他者（M4）规训的第一层皮肤。",
  defEn: "Not just physiological slices, but the primal target of social gaze. In the M0-M7 engine, gender is the first layer of skin bearing the Big Other's (M4) discipline.",
  items: [
    {
      id: "gen_m",
      name: "男性",
      nameEn: "Male",
      def: "生理男性/雄性特征的外化呈现。对应着通常的父权符号或消耗性物理动能。",
      defEn: "Biological male/masculine externalization. Corresponding to patriarchal symbols or consumable kinetic energy.",
      core: "【换喻】阳性身体的物质呈现与作为动能燃料的重力属性 (Masculine material resonance and the gravity of being kinetic fuel)",
      coreEn: "【Metonymy】The body built to exert or absorb blunt force trauma; muscle as the currency of the State.",
      logic: "【符号消耗法则】：在传统的 M4 秩序下，男性躯壳常被预设为施加 M5（暴力/扩张行动）的标准构件，同时也是充当维持系统运转的“耗材”。其 M2（身体体验）是向外的、充满棱角的物理碰撞。",
      logicEn: "[Symbolic Consumption Law]: Under traditional M4, the male shell is the default cog for M5 (Violent/expansion actions) and the primary 'consumable' for systemic friction. Its M2 is outward, angular physical collision.",
      patch: {
        mechanics: "基础雄性协议 + [物理扩张冲动 = 高; 生存痛感阈值 = 迟钝化]",
        mechanicsEn: "Base_MASCULINE + [Physical_Expansion_Drive = High; Survival_Pain_Threshold = Numbed]",
        aesthetic: "聚焦：棱角分明的骨骼外轮廓、重力感更强的步伐、低频的共振音色、流汗与毛发。文本：粗糙的摩擦力与直线的力量投射。",
        aestheticEn: "Focus: Angular skeletal outlines + Heavier footfalls + Low-frequency resonance + Sweat and hair. Text: Rough friction and linear power projection.",
        runtime: "IF (在极端暴力环境下面临冲突) THEN (系统默认其负有正面对抗的义务，逃避将招致极度强烈的名誉 M6 处刑)。",
        runtimeEn: "IF (Facing_Conflict_in_Violent_Env) THEN (System_Defaults_Obligation to front-line friction; evasion triggers severe reputational execution M6)."
      }
    },
    {
      id: "gen_f",
      name: "女性",
      nameEn: "Female",
      def: "生理女性/雌性特征的外化呈现。常承载着生育、凝视对象或内向的坚韧属性。",
      defEn: "Biological female/feminine externalization. Often bearing reproduction, becoming the object of gaze, or harboring inward endurance.",
      core: "【换喻】阴性身体的物质呈现与被符号界定义的视线焦点 (Feminine material resonance and the focal point defined by the Symbolic Order's gaze)",
      coreEn: "【Metonymy】The body as territory; the eternal subject of the Master's observation.",
      logic: "【凝视客体化与深层逃逸】：M4 极其倾向于将女性躯壳客体化为 M3（欲望对象）。然而，由于长期被压抑在结构之下，主体的 M1 反而容易在最不可能的地方积聚起破坏性的 M5 潜能，通过非动能（情报、毒药、心理防线贯穿）的方式颠覆 M4。",
      logicEn: "[Gaze Objectification & Deep Evasion]: M4 intensely objectifies the female shell into M3 (Object of Desire). Squeezed by this structure, M1 accumulates subversive M5 potential, bypassing kinetic force for asymmetrical disruption (info, poison, psychological piercing).",
      patch: {
        mechanics: "基础雌性协议 + [周遭凝视压强 = MAX; 不对称反抗潜能 = 高]",
        mechanicsEn: "Base_FEMININE + [Surrounding_Gaze_Pressure = MAX; Asymmetrical_Rebellion_Potential = High]",
        aesthetic: "聚焦：曲线张力、被规训的精细布料、更高频的声音、更敏锐的环境感知器官。文本：在柔软表象下暗流涌动的韧性与边缘锋利感。",
        aestheticEn: "Focus: Curvilinear tension + Disciplined fine fabrics + Higher frequencies + Acute environmental senses. Text: Pliable surface tension hiding razor-sharp resilience.",
        runtime: "IF (被强势 M4 秩序置于纯粹的猎物位置) THEN (触发：在暗角中利用信息的不可见性完成致命的反扑剧本)。",
        runtimeEn: "IF (Placed_as_Pure_Prey_by_Dominant_M4) THEN (Trigger: Utilizing invisible information zones to execute lethal counter-scripts)."
      }
    },
    {
      id: "gen_nb",
      name: "非二元 / 雌雄同体",
      nameEn: "Non-Binary / Androgynous",
      def: "模糊的轮廓、难以被一眼识别的性别信号。游离于二元对立之外的混沌。可能是天生、机械改造或基因编辑导致。",
      defEn: "Ambiguous silhouettes, defying immediate biological classification. Exists outside the binary, via nature, tech, or gene-editing.",
      core: "【换喻】拒绝对齐分类刻度的物理悖论 (The physical paradox that refuses alignment with systemic classification dials)",
      coreEn: "【Metonymy】The glitch in the gender matrix; the fluidity that makes the census algorithm crash.",
      logic: "【分类器失效】：M4 习惯于使用二元性别的模板来分配社会位置与规训剧本。非二元主体在物理（M2）上导致了 M4 的“识别错误”，从而天然具备了一种颠覆性的 M1（模糊的自由）。但同时也承担了被两边排斥的“异类孤立感”。",
      logicEn: "[Classifier Failure]: M4 relies on binary templates to distribute scripts. The NB subject's M2 physical presence causes a 'System Syntax Error' in M4, granting subversive M1 freedom but inheriting dual-exile isolation.",
      patch: {
        mechanics: "基础流体协议 + [二元属性识别 = 乱码; 社会归属感锚点 = 虚视界]",
        mechanicsEn: "Base_FLUID + [Binary_Attribute_Recognition = Glitch; Social_Belonging_Anchor = Event_Horizon]",
        aesthetic: "聚焦：不可定义的五官比例、中性且具有工业感或极度自然主义的衣物、介于两者之间的独特声带共鸣。文本：无法贴上标签的神秘感与不安感。",
        aestheticEn: "Focus: Undefinable facial ratios + Neutral industrial/naturalist clothing + Unique vocal resonance. Text: The unlabelable mystique wrapped in low-level systemic unease.",
        runtime: "IF (遭遇极端刻板印象的主流审视机制) THEN (触发：因无法读取既定代码而导致的短期规则豁免或突然的非理性恐慌排斥)。",
        runtimeEn: "IF (Encountering_Hyper-Stereotypical_Scrutiny_Mechanisms) THEN (Trigger: Short-term rule immunity due to unreadable code, or sudden irrational systemic panic)."
      }
    }
  ]
};
