import { LibraryCategoryDef } from '../../../types';
import type { Sur3Domain, Sur3EraId } from '../SUR3';
import { SUR6_GROUP_A } from './group_a';
import { SUR6_GROUP_B } from './group_b';
import { SUR6_GROUP_C } from './group_c';
import { SUR6_GROUP_D } from './group_d';
import { SUR6_GROUP_E } from './group_e';
import { SUR6_GROUP_F } from './group_f';
import { SUR6_GROUP_G } from './group_g';
import { SUR6_GROUP_H } from './group_h';
import { SUR6_GROUP_I } from './group_i';
import { SUR6_GROUP_J } from './group_j';
import { SUR6_GROUP_K } from './group_k';
import { SUR6_GROUP_L } from './group_l';
import type { Sur6CompatibilityMeta, Sur6SpaceClass, Sur6SpaceContainerItem } from './_shared';

type Sur6GroupProfile = Sur6CompatibilityMeta;

const EARTHLIKE_DOMAINS: Sur3Domain[] = ['earth_region', 'civilization_zone', 'historical_system', 'urban_system'];
const INSTITUTIONAL_DOMAINS: Sur3Domain[] = [...EARTHLIKE_DOMAINS, 'future_megastructure'];
const LIMINAL_DOMAINS: Sur3Domain[] = [...EARTHLIKE_DOMAINS, 'outer_space', 'future_megastructure', 'extra_dimension'];
const MYTHIC_DOMAINS: Sur3Domain[] = ['mythic_cosmos', 'extra_dimension', ...EARTHLIKE_DOMAINS];
const ALL_DOMAIN_LIKE: Sur3Domain[] = [
  'earth_region',
  'civilization_zone',
  'historical_system',
  'urban_system',
  'frontier_route',
  'ecology',
  'mythic_cosmos',
  'outer_space',
  'virtual_data',
  'micro_body',
  'extra_dimension',
  'future_megastructure',
];

const allEras: Sur3EraId[] = ['primitive', 'mythic', 'slave', 'feudal', 'modern', 'contemporary', 'near_future', 'future'];
const feudalForward: Sur3EraId[] = ['feudal', 'modern', 'contemporary', 'near_future', 'future'];
const modernForward: Sur3EraId[] = ['modern', 'contemporary', 'near_future', 'future'];

const SUR6_GROUP_PROFILES: Record<string, Sur6GroupProfile> = {
  loc_power_ritual: {
    spaceClass: 'power_ritual',
    preferredEras: ['slave', 'feudal', 'modern', 'contemporary'],
    allowedEras: ['mythic', 'slave', 'feudal', 'modern', 'contemporary', 'near_future', 'future'],
    compatibleDomains: [...INSTITUTIONAL_DOMAINS, 'mythic_cosmos', 'extra_dimension'],
    dissonance: 'safe',
  },
  loc_sacred_faith: {
    spaceClass: 'ritual_faith',
    preferredEras: ['mythic', 'slave', 'feudal', 'modern'],
    allowedEras: allEras,
    compatibleDomains: MYTHIC_DOMAINS,
    dissonance: 'charged',
  },
  loc_discipline_education: {
    spaceClass: 'education_training',
    preferredEras: ['modern', 'contemporary'],
    allowedEras: feudalForward,
    compatibleDomains: INSTITUTIONAL_DOMAINS,
    dissonance: 'safe',
  },
  loc_medical_care: {
    spaceClass: 'medical_care',
    preferredEras: ['modern', 'contemporary', 'near_future'],
    allowedEras: modernForward,
    compatibleDomains: ['earth_region', 'urban_system', 'future_megastructure', 'micro_body'],
    dissonance: 'safe',
  },
  loc_domestic_private: {
    spaceClass: 'domestic_private',
    preferredEras: ['feudal', 'modern', 'contemporary'],
    allowedEras: allEras,
    compatibleDomains: [...EARTHLIKE_DOMAINS, 'outer_space', 'future_megastructure', 'extra_dimension'],
    dissonance: 'safe',
  },
  loc_transit_passage: {
    spaceClass: 'transit_passage',
    preferredEras: ['modern', 'contemporary', 'near_future'],
    allowedEras: ['slave', 'feudal', 'modern', 'contemporary', 'near_future', 'future'],
    compatibleDomains: LIMINAL_DOMAINS,
    dissonance: 'safe',
  },
  loc_commerce_consumption: {
    spaceClass: 'commerce_consumption',
    preferredEras: ['slave', 'feudal', 'modern', 'contemporary'],
    allowedEras: ['mythic', 'slave', 'feudal', 'modern', 'contemporary', 'near_future', 'future'],
    compatibleDomains: [...EARTHLIKE_DOMAINS, 'future_megastructure', 'extra_dimension'],
    dissonance: 'safe',
  },
  loc_confinement_control: {
    spaceClass: 'confinement_control',
    preferredEras: ['feudal', 'modern', 'contemporary', 'near_future'],
    allowedEras: ['slave', 'feudal', 'modern', 'contemporary', 'near_future', 'future'],
    compatibleDomains: [...INSTITUTIONAL_DOMAINS, 'outer_space', 'extra_dimension'],
    dissonance: 'charged',
  },
  loc_industrial_labor: {
    spaceClass: 'industrial_labor',
    preferredEras: ['modern', 'contemporary', 'near_future', 'future'],
    allowedEras: feudalForward,
    compatibleDomains: ['historical_system', 'urban_system', 'frontier_route', 'outer_space', 'future_megastructure'],
    dissonance: 'safe',
  },
  loc_nature_wilderness: {
    spaceClass: 'nature_wilderness',
    preferredEras: ['primitive', 'mythic', 'feudal', 'contemporary'],
    allowedEras: allEras,
    compatibleDomains: ['earth_region', 'civilization_zone', 'frontier_route', 'ecology', 'mythic_cosmos', 'outer_space', 'extra_dimension'],
    dissonance: 'safe',
  },
  loc_abandoned_aftermath: {
    spaceClass: 'abandoned_aftermath',
    preferredEras: ['contemporary', 'near_future', 'future'],
    allowedEras: ['modern', 'contemporary', 'near_future', 'future'],
    compatibleDomains: ['earth_region', 'urban_system', 'historical_system', 'outer_space', 'future_megastructure', 'extra_dimension'],
    dissonance: 'charged',
  },
  loc_secret_shadow: {
    spaceClass: 'secret_shadow',
    preferredEras: ['modern', 'contemporary', 'near_future'],
    allowedEras: feudalForward,
    compatibleDomains: [...INSTITUTIONAL_DOMAINS, 'virtual_data', 'extra_dimension'],
    dissonance: 'charged',
  },
};

const itemOverrides = (itemId: string): Partial<Sur6CompatibilityMeta> => {
  if (itemId.includes('server') || itemId.includes('clean_room')) {
    return {
      preferredEras: ['contemporary', 'near_future', 'future'],
      allowedEras: ['contemporary', 'near_future', 'future'],
      compatibleDomains: ['virtual_data', 'future_megastructure', 'urban_system'],
    };
  }
  if (itemId.includes('catacomb') || itemId.includes('cave') || itemId.includes('ritual_altar')) {
    return {
      preferredEras: ['primitive', 'mythic', 'slave', 'feudal'],
      allowedEras: allEras,
      compatibleDomains: ['mythic_cosmos', 'extra_dimension', 'earth_region', 'civilization_zone', 'ecology'],
    };
  }
  if (itemId.includes('station_platform') || itemId.includes('elevator') || itemId.includes('security_gate')) {
    return {
      preferredEras: ['modern', 'contemporary', 'near_future'],
      allowedEras: modernForward,
    };
  }
  if (itemId.includes('crater') || itemId.includes('ash_field')) {
    return {
      preferredEras: ['mythic', 'contemporary', 'near_future', 'future'],
      allowedEras: ['mythic', 'modern', 'contemporary', 'near_future', 'future'],
      compatibleDomains: ALL_DOMAIN_LIKE,
      dissonance: 'charged',
    };
  }
  return {};
};

const applySur6Compatibility = (group: LibraryCategoryDef): LibraryCategoryDef => {
  const profile = SUR6_GROUP_PROFILES[group.id];
  if (!profile) return group;

  return {
    ...group,
    items: (group.items || []).map(item => ({
      ...item,
      ...profile,
      ...itemOverrides(item.id),
      group: item.group || group.name,
      groupEn: item.groupEn || group.nameEn,
    } as Sur6SpaceContainerItem)),
  };
};

/**
 * SUR6 / SUR-LOC 空间容器库。
 *
 * 只回答“事件发生在什么可见空间里”。它不解释人物为什么行动，
 * 不书写代价，不书写终局判词或残留。
 */
export const SUR6_DATA: LibraryCategoryDef[] = [
  SUR6_GROUP_A,
  SUR6_GROUP_B,
  SUR6_GROUP_C,
  SUR6_GROUP_D,
  SUR6_GROUP_E,
  SUR6_GROUP_F,
  SUR6_GROUP_G,
  SUR6_GROUP_H,
  SUR6_GROUP_I,
  SUR6_GROUP_J,
  SUR6_GROUP_K,
  SUR6_GROUP_L,
].map(applySur6Compatibility);

export const SUR_LOCATION_DATA = SUR6_DATA;
export const SUR_SPACE_DATA = SUR6_DATA;
export type { Sur6CompatibilityMeta, Sur6SpaceClass, Sur6SpaceContainerItem } from './_shared';

export default SUR6_DATA;
