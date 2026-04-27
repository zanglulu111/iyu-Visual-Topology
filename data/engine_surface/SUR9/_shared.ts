import { LibraryItemDef } from '../../../types';

export function roleIdentityItem(
  id: string,
  name: string,
  nameEn: string,
  role: string,
  roleEn: string,
  reference = "",
  referenceEn = ""
): LibraryItemDef {
  return {
    id,
    name,
    nameEn,
    def: role,
    defEn: roleEn,
    core: `身份预设：${role} 只规定人物在社会中的可识别身份或岗位、常用场域、工具与接触权限；不解释动机，不预写事件，不追加判词。`,
    coreEn: `Role preset: ${roleEn} Only fixes the character's recognizable social identity or post, usual arenas, tools, and access; it does not explain motive, prewrite events, or add a verdict.`,
    reference,
    referenceEn
  };
}
