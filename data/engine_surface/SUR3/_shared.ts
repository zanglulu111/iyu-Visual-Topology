import { LibraryCategoryDef, LibraryItemDef } from '../../../types';

export type Sur3EraId =
  | 'primitive'
  | 'mythic'
  | 'slave'
  | 'feudal'
  | 'early_modern'
  | 'industrial'
  | 'modern'
  | 'contemporary'
  | 'near_future'
  | 'far_future'
  | 'future'
  | 'timeless';

export type Sur3TimeMode = 'year_or_era' | 'era_preferred' | 'era_only';

export type Sur3Domain =
  | 'earth_region'
  | 'civilization_zone'
  | 'historical_system'
  | 'urban_system'
  | 'frontier_route'
  | 'ecology'
  | 'mythic_cosmos'
  | 'outer_space'
  | 'virtual_data'
  | 'micro_body'
  | 'extra_dimension'
  | 'future_megastructure';

export type Sur3Scale =
  | 'continent'
  | 'civilization'
  | 'country'
  | 'region'
  | 'city_system'
  | 'planet'
  | 'orbital'
  | 'interstellar'
  | 'body'
  | 'cellular'
  | 'nano'
  | 'dimension';

export interface Sur3SpaceAnchorItem extends LibraryItemDef {
  domain: Sur3Domain;
  scale: Sur3Scale;
  timeMode: Sur3TimeMode;
  preferredEras: Sur3EraId[];
  allowedEras: Sur3EraId[];
  yearRanges?: Array<[number, number]>;
  dissonance?: 'safe' | 'charged' | 'wild';
  weight?: number;
}

export interface Sur3CoordinatePreset {
  time: string | null;
  year: number | null;
  eraId?: Sur3EraId;
  timeMode: 'year' | 'era' | 'auto';
  spaceCn: string;
  spaceEn: string;
  anchor: Sur3SpaceAnchorItem;
}

export interface Sur3LibraryCategoryDef extends Omit<LibraryCategoryDef, 'items'> {
  items: Sur3SpaceAnchorItem[];
}

export const SUR3_ERA_IDS: Sur3EraId[] = [
  'primitive',
  'mythic',
  'slave',
  'feudal',
  'early_modern',
  'industrial',
  'modern',
  'contemporary',
  'near_future',
  'far_future',
  'future',
  'timeless',
];

export const sur3Anchor = (item: Sur3SpaceAnchorItem): Sur3SpaceAnchorItem => item;

export const sur3Group = (
  id: string,
  name: string,
  nameEn: string,
  items: Sur3SpaceAnchorItem[]
): Sur3LibraryCategoryDef => ({
  id,
  name,
  nameEn,
  desc: 'SUR3 space-anchor coordinates. Items intentionally expose only names; metadata is for compatibility-aware randomization.',
  descEn: 'SUR3 space-anchor coordinates. Items intentionally expose only names; metadata is for compatibility-aware randomization.',
  items,
});
