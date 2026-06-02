import { LibraryCategoryDef, LibraryItemDef } from '../../../types';
import { COUTURE_STYLE_PROTOCOL_ITEMS } from './couture';
import { STREET_STYLE_PROTOCOL_ITEMS } from './street';
import { FUNCTION_STYLE_PROTOCOL_ITEMS } from './function';
import { TACTICAL_STYLE_PROTOCOL_ITEMS } from './tactical';
import { RITUAL_STYLE_PROTOCOL_ITEMS } from './ritual';
import { ARISTOCRATIC_STYLE_PROTOCOL_ITEMS } from './aristocratic';
import { TECH_STYLE_PROTOCOL_ITEMS } from './tech';
import { MECHANICAL_STYLE_PROTOCOL_ITEMS } from './mechanical';
import { ORGANIC_STYLE_PROTOCOL_ITEMS } from './organic';
import { PARASITIC_STYLE_PROTOCOL_ITEMS } from './parasitic';
import { MYTHIC_STYLE_PROTOCOL_ITEMS } from './mythic';
import { SURREAL_STYLE_PROTOCOL_ITEMS } from './surreal';
import { WASTELAND_STYLE_PROTOCOL_ITEMS } from './wasteland';
import { MINIMAL_STYLE_PROTOCOL_ITEMS } from './minimal';

export const CONCEPT_STYLE_PROTOCOL_ROUTES = [
  { route: 'COUTURE', group: '高定结构', groupEn: 'Couture Structure', items: COUTURE_STYLE_PROTOCOL_ITEMS },
  { route: 'STREET', group: '街头制服', groupEn: 'Street Uniform', items: STREET_STYLE_PROTOCOL_ITEMS },
  { route: 'FUNCTION', group: '职业功能', groupEn: 'Functional System', items: FUNCTION_STYLE_PROTOCOL_ITEMS },
  { route: 'TACTICAL', group: '武装战术', groupEn: 'Tactical System', items: TACTICAL_STYLE_PROTOCOL_ITEMS },
  { route: 'RITUAL', group: '仪式神圣', groupEn: 'Ritual Sacred', items: RITUAL_STYLE_PROTOCOL_ITEMS },
  { route: 'ARISTOCRATIC', group: '贵族礼制', groupEn: 'Aristocratic Etiquette', items: ARISTOCRATIC_STYLE_PROTOCOL_ITEMS },
  { route: 'TECH', group: '技术装置', groupEn: 'Technical Apparatus', items: TECH_STYLE_PROTOCOL_ITEMS },
  { route: 'MECHANICAL', group: '机械构造', groupEn: 'Mechanical Construction', items: MECHANICAL_STYLE_PROTOCOL_ITEMS },
  { route: 'ORGANIC', group: '生物有机', groupEn: 'Biomorphic Organic', items: ORGANIC_STYLE_PROTOCOL_ITEMS },
  { route: 'PARASITIC', group: '异化寄生', groupEn: 'Parasitic Alteration', items: PARASITIC_STYLE_PROTOCOL_ITEMS },
  { route: 'MYTHIC', group: '神话妖性', groupEn: 'Mythic Yokai Nature', items: MYTHIC_STYLE_PROTOCOL_ITEMS },
  { route: 'SURREAL', group: '超现实本体', groupEn: 'Surreal Ontology', items: SURREAL_STYLE_PROTOCOL_ITEMS },
  { route: 'WASTELAND', group: '废土拼接', groupEn: 'Wasteland Patchwork', items: WASTELAND_STYLE_PROTOCOL_ITEMS },
  { route: 'MINIMAL', group: '极简精度', groupEn: 'Minimal Precision', items: MINIMAL_STYLE_PROTOCOL_ITEMS }
] as const;

export type ConceptStyleProtocolRouteId = typeof CONCEPT_STYLE_PROTOCOL_ROUTES[number]['route'];

export const CONCEPT_STYLE_PROTOCOL_LIBRARIES: LibraryCategoryDef[] = CONCEPT_STYLE_PROTOCOL_ROUTES.map(route => ({
  id: `cd_style_protocol_${route.route.toLowerCase()}_lib`,
  name: `${route.group}词库`,
  nameEn: `${route.groupEn} Library`,
  desc: 'Independent character / subject form protocol library with hard-control hints for time-space, ontology level, risk, affected scopes, forbids, and absorption rules.',
  items: route.items
}));

export const STYLE_PROTOCOL_ITEMS: LibraryItemDef[] = CONCEPT_STYLE_PROTOCOL_LIBRARIES.flatMap(category => category.items);
