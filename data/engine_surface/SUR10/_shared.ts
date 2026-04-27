import { LibraryItemDef } from '../../../types';

export function beliefPresetItem(
  id: string,
  name: string,
  nameEn: string,
  stance: string,
  stanceEn: string,
  reference = "",
  referenceEn = ""
): LibraryItemDef {
  return {
    id,
    name,
    nameEn,
    def: stance,
    defEn: stanceEn,
    core: `信念预设：${stance} 只规定人物开场时用来解释世界的表层信念语言；不解释人物成因，不规定终点，不预写行动。`,
    coreEn: `Belief preset: ${stanceEn} Only fixes the surface belief language the character uses at the start to explain the world; it does not explain origins, fix endpoints, or prewrite actions.`,
    reference,
    referenceEn
  };
}
