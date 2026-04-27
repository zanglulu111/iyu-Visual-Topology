import { LibraryItemDef } from '../../../types';

export function visibleEndingItem(
  id: string,
  name: string,
  nameEn: string,
  frame: string,
  frameEn: string,
  reference = "",
  referenceEn = ""
): LibraryItemDef {
  return {
    id,
    name,
    nameEn,
    def: frame,
    defEn: frameEn,
    core: `显性收场：${frame} 只规定最后可见事件与画面停点；不做判读，不追写后续。`,
    coreEn: `Visible ending: ${frameEn} Only fixes the terminal event and final perceivable frame; it does not interpret or track later consequences.`,
    reference,
    referenceEn
  };
}
