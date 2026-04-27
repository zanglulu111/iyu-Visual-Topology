import { LibraryItemDef } from '../../../types';

export function objectAnchorItem(
  id: string,
  name: string,
  nameEn: string,
  object: string,
  objectEn: string,
  reference = "",
  referenceEn = ""
): LibraryItemDef {
  return {
    id,
    name,
    nameEn,
    def: object,
    defEn: objectEn,
    core: `对象预设：${object} 只规定可被追寻、争夺、交换或保护的表层锚点；不解释为何重要，不预写后续事件。`,
    coreEn: `Object preset: ${objectEn} Only fixes the surface anchor that can be pursued, contested, exchanged, or protected; it does not explain why it matters or prewrite later events.`,
    reference,
    referenceEn
  };
}
