import { LibraryItemDef } from '../../../types';

export function spaceContainerItem(
  id: string,
  name: string,
  nameEn: string,
  space: string,
  spaceEn: string,
  reference = "",
  referenceEn = ""
): LibraryItemDef {
  return {
    id,
    name,
    nameEn,
    def: space,
    defEn: spaceEn,
    core: `空间预设：${space} 只规定事件可发生的表层空间容器；不预写行动，不做判读，不追写后续。`,
    coreEn: `Space preset: ${spaceEn} Only fixes the surface spatial container where events may occur; it does not prewrite action, interpret, or track later consequences.`,
    reference,
    referenceEn
  };
}
