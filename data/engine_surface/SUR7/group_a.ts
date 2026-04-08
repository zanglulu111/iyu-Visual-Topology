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
    },
    {
      id: "gen_f",
      name: "女性",
      nameEn: "Female",
      def: "生理女性/雌性特征的外化呈现。常承载着生育、凝视对象或内向的坚韧属性。",
      defEn: "Biological female/feminine externalization. Often bearing reproduction, becoming the object of gaze, or harboring inward endurance.",
      core: "【换喻】阴性身体的物质呈现与被符号界定义的视线焦点 (Feminine material resonance and the focal point defined by the Symbolic Order's gaze)",
      coreEn: "【Metonymy】The body as territory; the eternal subject of the Master's observation.",
    },
    {
      id: "gen_nb",
      name: "非二元 / 雌雄同体",
      nameEn: "Non-Binary / Androgynous",
      def: "模糊的轮廓、难以被一眼识别的性别信号。游离于二元对立之外的混沌。可能是天生、机械改造或基因编辑导致。",
      defEn: "Ambiguous silhouettes, defying immediate biological classification. Exists outside the binary, via nature, tech, or gene-editing.",
      core: "【换喻】拒绝对齐分类刻度的物理悖论 (The physical paradox that refuses alignment with systemic classification dials)",
      coreEn: "【Metonymy】The glitch in the gender matrix; the fluidity that makes the census algorithm crash.",
    }
  ]
};
