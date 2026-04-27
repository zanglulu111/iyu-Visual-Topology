import { LibraryItemDef } from '../../../types';

export function castingPresetItem(
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
    core: `选角呈现：${description} 只规定人物在画面、称谓和互动中如何被呈现；不解释性格、动机或行动来源。`,
    coreEn: `Casting preset: ${descriptionEn} Only fixes how the character is presented in image, address, and interaction; it does not explain personality, motive, or action source.`
  };
}
