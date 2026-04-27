import { LibraryItemDef } from '../../../types';

export function agePresetItem(
  id: string,
  name: string,
  nameEn: string,
  description: string,
  descriptionEn: string
): LibraryItemDef {
  return {
    id,
    name,
    nameEn,
    def: description,
    defEn: descriptionEn,
    core: `年龄阶段：${description} 只规定人物进入故事时的可见年岁区间与行动条件；不解释性格、动机或终点。`,
    coreEn: `Age preset: ${descriptionEn} Only fixes the visible age band and action conditions at story entry; it does not explain personality, motive, or endpoint.`
  };
}
