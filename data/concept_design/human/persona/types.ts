import { LibraryItemDef } from '../../../../types';

export type PersonaEra =
  | 'primitive'
  | 'slave'
  | 'feudal'
  | 'early_modern'
  | 'industrial'
  | 'modern'
  | 'contemporary'
  | 'near_future'
  | 'far_future'
  | 'timeless'
  | 'mythic';

export type PersonaRisk = 'clean' | 'medium' | 'high';

export type PersonaTerm = LibraryItemDef & {
  ontologyLevel: 1 | 2 | 3 | 4 | 5;
  eras: PersonaEra[];
  risk: PersonaRisk;
  tags: string[];
  personaCategory: string;
  personaCategoryEn: string;
  personaSubgroup: string;
  personaSubgroupEn: string;
  personaKind: string;
  personaKindEn: string;
  personaStrength: 'light' | 'medium' | 'strong';
  isCompoundPersona: true;
  realityTags: string[];
  styleTags: string[];
  timeTags: string[];
};

export type PersonaSubgroup = {
  id: string;
  name: string;
  nameEn: string;
  def: string;
  defEn: string;
  tags: string[];
  styleTags: string[];
  eras: PersonaEra[];
  ontologyLevel: 1 | 2 | 3 | 4 | 5;
  risk?: PersonaRisk;
  absorptionRule?: string;
  absorptionRuleEn?: string;
  forbids?: string[];
};

export type PersonaRole = {
  id: string;
  name: string;
  nameEn: string;
  def: string;
  defEn: string;
  tags: string[];
  controls: string[];
};

export type PersonaCategoryConfig = {
  categoryId: string;
  categoryName: string;
  categoryNameEn: string;
  groupPrefix: string;
  groupPrefixEn: string;
  baseTags: string[];
  baseControls: string[];
  defaultForbids: string[];
  subgroups: PersonaSubgroup[];
  roles: PersonaRole[];
};

export type ExplicitPersonaSeed = {
  id: string;
  name: string;
  nameEn: string;
  group: string;
  groupEn: string;
  def: string;
  defEn: string;
  ontologyLevel?: 1 | 2 | 3 | 4 | 5;
  eras?: PersonaEra[];
  risk?: PersonaRisk;
  tags?: string[];
  styleTags?: string[];
  controls?: string[];
  forbids?: string[];
  absorptionRule?: string;
  absorptionRuleEn?: string;
};

export type ExplicitPersonaCategoryConfig = {
  categoryId: string;
  categoryName: string;
  categoryNameEn: string;
  baseTags: string[];
  baseStyleTags: string[];
  baseControls: string[];
  defaultForbids: string[];
  defaultEras: PersonaEra[];
  defaultOntologyLevel?: 1 | 2 | 3 | 4 | 5;
  visualEvidence: string;
  visualEvidenceEn: string;
  absorptionFocus: string;
  absorptionFocusEn: string;
  appendVisualEvidence?: boolean;
};

export const buildExplicitPersonaTerms = (
  config: ExplicitPersonaCategoryConfig,
  seeds: ExplicitPersonaSeed[]
): PersonaTerm[] => seeds.map(seed => {
  const ontologyLevel = seed.ontologyLevel ?? config.defaultOntologyLevel ?? 1;
  const eras = seed.eras ?? config.defaultEras;
  const risk = seed.risk ?? (ontologyLevel >= 4 ? 'medium' : 'clean');
  const controls = Array.from(new Set([...config.baseControls, ...(seed.controls || [])]));
  return {
    id: `cd_persona_${config.categoryId}_${seed.id}`,
    name: seed.name,
    nameEn: seed.nameEn,
    group: seed.group,
    groupEn: seed.groupEn,
    def: config.appendVisualEvidence === false ? seed.def : `${seed.def} 视觉证据优先落在${config.visualEvidence}上。`,
    defEn: config.appendVisualEvidence === false ? seed.defEn : `${seed.defEn} Visual evidence should land first in ${config.visualEvidenceEn}.`,
    personaCategory: config.categoryName,
    personaCategoryEn: config.categoryNameEn,
    personaSubgroup: seed.group.replace(/^[A-Z]\.\s*/, ''),
    personaSubgroupEn: seed.groupEn.replace(/^[A-Z]\.\s*/, ''),
    personaKind: seed.name,
    personaKindEn: seed.nameEn,
    personaStrength: ontologyLevel >= 4 ? 'strong' : ontologyLevel >= 2 ? 'medium' : 'light',
    isCompoundPersona: true,
    ontologyLevel,
    eras,
    risk,
    affects: controls,
    controls,
    forbids: Array.from(new Set([...(seed.forbids || []), ...config.defaultForbids])),
    absorptionRule: seed.absorptionRule || `外来元素优先折译为“${seed.name}”的${config.absorptionFocus}，不要让随机细节抢走人设主轴。`,
    absorptionRuleEn: seed.absorptionRuleEn || `Translate outside elements into the ${config.absorptionFocusEn} of "${seed.nameEn}"; do not let random details steal the persona axis.`,
    tags: Array.from(new Set(['persona', 'compound_persona', ...config.baseTags, ...(seed.tags || [])])),
    realityTags: ontologyLevel <= 1 ? ['realist_safe'] : ontologyLevel <= 3 ? ['stylized_boundary'] : ['nonreal_ontology'],
    styleTags: Array.from(new Set([...config.baseStyleTags, ...(seed.styleTags || []), ...(seed.tags || [])])),
    timeTags: eras
  } satisfies PersonaTerm;
});

export const buildPersonaTerms = (config: PersonaCategoryConfig): PersonaTerm[] => (
  config.subgroups.flatMap((subgroup, subgroupIndex) => (
    config.roles.map((role, roleIndex) => {
      const groupIndex = String.fromCharCode(65 + subgroupIndex);
      const id = `cd_persona_${config.categoryId}_${subgroup.id}_${role.id}`;
      const name = `${subgroup.name}${role.name}`;
      const nameEn = `${subgroup.nameEn} ${role.nameEn}`;
      const group = `${groupIndex}. ${subgroup.name}`;
      const groupEn = `${groupIndex}. ${subgroup.nameEn}`;
      const ontologyLevel = subgroup.ontologyLevel;
      const risk = subgroup.risk || (ontologyLevel >= 4 ? 'medium' : 'clean');
      return {
        id,
        name,
        nameEn,
        group,
        groupEn,
        personaCategory: config.categoryName,
        personaCategoryEn: config.categoryNameEn,
        personaSubgroup: subgroup.name,
        personaSubgroupEn: subgroup.nameEn,
        personaKind: role.name,
        personaKindEn: role.nameEn,
        personaStrength: ontologyLevel >= 4 ? 'strong' : ontologyLevel >= 2 ? 'medium' : 'light',
        isCompoundPersona: true,
        def: `${subgroup.def}${role.def} 视觉证据优先落在${config.baseControls.join('、')}。`,
        defEn: `${subgroup.defEn} ${role.defEn} Visual evidence should land first in ${config.baseControls.join(', ')}.`,
        ontologyLevel,
        eras: subgroup.eras,
        risk,
        affects: Array.from(new Set([...config.baseControls, ...role.controls])),
        controls: Array.from(new Set([...config.baseControls, ...role.controls])),
        forbids: Array.from(new Set([...(subgroup.forbids || []), ...config.defaultForbids])),
        absorptionRule: subgroup.absorptionRule || `外来元素优先折译进${subgroup.name}的服装制度、姿态、材料、道具和符号，不要让随机细节抢走人设主轴。`,
        absorptionRuleEn: subgroup.absorptionRuleEn || `Translate outside elements into the costume system, posture, material, props, and symbols of ${subgroup.nameEn}; do not let random details steal the persona axis.`,
        tags: Array.from(new Set([...config.baseTags, ...subgroup.tags, ...role.tags])),
        realityTags: ontologyLevel <= 1 ? ['realist_safe'] : ontologyLevel <= 3 ? ['stylized_boundary'] : ['nonreal_ontology'],
        styleTags: Array.from(new Set([...subgroup.styleTags, ...role.tags])),
        timeTags: subgroup.eras
      } satisfies PersonaTerm;
    })
  ))
);
