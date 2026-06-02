import { LibraryItemDef } from '../../../types';

export type StyleProtocolKind =
  | 'structure'
  | 'material'
  | 'symbol'
  | 'pose'
  | 'function'
  | 'prop'
  | 'costume'
  | 'wear'
  | 'face'
  | 'body'
  | 'color'
  | 'composition'
  | 'cultural_image'
  | 'ontology';

export type StyleProtocolSeed = {
  slug: string;
  name: string;
  nameEn: string;
  kind: StyleProtocolKind;
  focus: string;
  focusEn: string;
  visual: string[];
  visualEn: string[];
  absorption: string;
  absorptionEn: string;
  ontologyLevel?: 1 | 2 | 3 | 4 | 5;
  eras?: string[];
  affects?: string[];
  controls?: string[];
  risk?: 'clean' | 'medium' | 'high';
};

export type StyleProtocolFamily = {
  slug: string;
  name: string;
  nameEn: string;
  focus: string;
  focusEn: string;
  defaultKind: StyleProtocolKind;
  defaultAffects: string[];
  defaultControls: string[];
  items: StyleProtocolSeed[];
};

const uniq = (items: string[]) => Array.from(new Set(items.filter(Boolean)));

export const makeStyleProtocolItems = (
  route: string,
  routeName: string,
  routeNameEn: string,
  defaultEras: string[],
  forbids: string[],
  families: StyleProtocolFamily[]
): LibraryItemDef[] => families.flatMap(family => family.items.map(seed => {
  const kind = seed.kind || family.defaultKind;
  if (!Array.isArray(seed.visual) || !Array.isArray(seed.visualEn)) {
    throw new Error(`Invalid style protocol seed: ${route}/${family.slug}/${seed.slug}. visual and visualEn must be arrays.`);
  }
  const visual = seed.visual.join('、');
  const visualEn = seed.visualEn.join(', ');
  const affects = uniq(seed.affects || family.defaultAffects);
  const controls = uniq([kind, family.slug, seed.slug, ...family.defaultControls, ...(seed.controls || [])]);
  const ontologyLevel = seed.ontologyLevel || (kind === 'ontology' ? 4 : kind === 'cultural_image' ? 2 : 1);
  const risk = seed.risk || (ontologyLevel >= 4 ? 'high' : kind === 'cultural_image' || ontologyLevel >= 2 ? 'medium' : 'clean');
  return {
    id: `cd_proto_${route.toLowerCase()}_${family.slug}_${seed.slug}`,
    name: seed.name,
    nameEn: seed.nameEn,
    group: family.name,
    groupEn: family.nameEn,
    protocolCategory: routeName,
    protocolCategoryEn: routeNameEn,
    protocolKind: kind,
    def: `以${seed.focus}统摄角色，让${family.focus}成为可见设计法则。视觉签名：${visual}。`,
    defEn: `Govern the character through ${seed.focusEn}, making ${family.focusEn} a visible design law. Visual signatures: ${visualEn}.`,
    ontologyLevel,
    eras: seed.eras || defaultEras,
    affects,
    risk,
    controls,
    forbids,
    absorptionRule: seed.absorption,
    absorptionRuleEn: seed.absorptionEn,
    styleRoute: route
  };
}));
