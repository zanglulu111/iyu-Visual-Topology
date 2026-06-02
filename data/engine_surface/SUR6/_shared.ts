import { LibraryItemDef } from '../../../types';
import type { Sur3Domain, Sur3EraId } from '../SUR3';

export type Sur6SpaceClass =
  | 'power_ritual'
  | 'ritual_faith'
  | 'education_training'
  | 'medical_care'
  | 'domestic_private'
  | 'transit_passage'
  | 'commerce_consumption'
  | 'confinement_control'
  | 'industrial_labor'
  | 'nature_wilderness'
  | 'abandoned_aftermath'
  | 'secret_shadow';

export interface Sur6CompatibilityMeta {
  spaceClass: Sur6SpaceClass;
  preferredEras: Sur3EraId[];
  allowedEras: Sur3EraId[];
  compatibleDomains: Sur3Domain[];
  dissonance?: 'safe' | 'charged' | 'wild';
  weight?: number;
}

export interface Sur6SpaceContainerItem extends LibraryItemDef, Sur6CompatibilityMeta {}

export function spaceContainerItem(
  id: string,
  name: string,
  nameEn: string,
  space: string,
  spaceEn: string,
  reference = "",
  referenceEn = "",
  meta?: Partial<Sur6CompatibilityMeta>
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
    referenceEn,
    ...meta
  };
}
