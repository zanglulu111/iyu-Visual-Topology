import { LibraryItemDef } from '../../../types';

type DesignEvidenceMode = 'COSTUME' | 'PROP' | 'SYMBOL';
type CategoryFit = NonNullable<LibraryItemDef['categoryFit']>;

const broadEraSet = new Set([
  'primitive',
  'slave',
  'feudal',
  'early_modern',
  'industrial',
  'modern',
  'contemporary',
  'near_future',
  'far_future'
]);

const uniq = (values: readonly string[]) => [...new Set(values.map(value => value.trim()).filter(Boolean))];

const toList = (value: unknown): string[] => {
  if (Array.isArray(value)) return value.map(String).map(item => item.trim()).filter(Boolean);
  if (typeof value === 'string' && value.trim()) return [value.trim()];
  return [];
};

const normalizeCategoryFit = (fit?: LibraryItemDef['categoryFit']): CategoryFit => {
  const merged = {
    unlisted: fit?.unlisted || 'none',
    strong: uniq(toList(fit?.strong)),
    usable: uniq(toList(fit?.usable)),
    fusion: uniq(toList(fit?.fusion)),
    weak: uniq(toList(fit?.weak)),
    exclude: uniq(toList(fit?.exclude))
  };
  const excludeSet = new Set(merged.exclude);
  const strongSet = new Set(merged.strong.filter(tag => !excludeSet.has(tag)));
  const usableSet = new Set(merged.usable.filter(tag => !excludeSet.has(tag) && !strongSet.has(tag)));
  const fusionSet = new Set(merged.fusion.filter(tag => !excludeSet.has(tag) && !strongSet.has(tag) && !usableSet.has(tag)));
  const weakSet = new Set(merged.weak.filter(tag => !excludeSet.has(tag) && !strongSet.has(tag) && !usableSet.has(tag) && !fusionSet.has(tag)));
  return {
    unlisted: merged.unlisted,
    strong: Array.from(strongSet),
    usable: Array.from(usableSet),
    fusion: Array.from(fusionSet),
    weak: Array.from(weakSet),
    exclude: merged.exclude
  };
};

const mergeCategoryFit = (
  base?: LibraryItemDef['categoryFit'],
  patch?: LibraryItemDef['categoryFit']
): CategoryFit => normalizeCategoryFit({
  unlisted: patch?.unlisted || base?.unlisted || 'none',
  strong: [...toList(base?.strong), ...toList(patch?.strong)],
  usable: [...toList(base?.usable), ...toList(patch?.usable)],
  fusion: [...toList(base?.fusion), ...toList(patch?.fusion)],
  weak: [...toList(base?.weak), ...toList(patch?.weak)],
  exclude: [...toList(base?.exclude), ...toList(patch?.exclude)]
});

const eraModeFor = (item: LibraryItemDef): 'specific' | 'universal' => {
  if (item.eraMode) return item.eraMode;
  const eras = toList(item.eras);
  const broadRealEraCount = eras.filter(era => broadEraSet.has(era)).length;
  const ontologyLevel = Number(item.ontologyLevel || 1);
  return broadRealEraCount >= 9 && ontologyLevel <= 1 && item.risk !== 'high' ? 'universal' : 'specific';
};

const realityTagsFor = (mode: DesignEvidenceMode, item: LibraryItemDef): string[] => {
  const level = Number(item.ontologyLevel || 1);
  const base = ['external_evidence', mode === 'COSTUME' ? 'costume_evidence' : mode === 'PROP' ? 'prop_evidence' : 'symbol_evidence'];
  if (level <= 1) return [...base, 'physical', 'realistic'];
  if (level === 2) return [...base, 'stylized', 'semi_real'];
  if (level === 3) return [...base, 'stylized', 'semi_surreal'];
  if (level === 4) return [...base, 'non_realist', 'surreal'];
  return [...base, 'abstract', 'surreal', 'symbolic'];
};

const evidenceKindFor = (mode: DesignEvidenceMode, group = ''): string => {
  if (mode === 'COSTUME') {
    if (group.startsWith('A.')) return 'institutional_uniform_interface';
    if (group.startsWith('B.')) return 'ritual_vestment_interface';
    if (group.startsWith('C.')) return 'restraint_support_interface';
    if (group.startsWith('D.')) return 'mobility_load_interface';
    if (group.startsWith('E.')) return 'concealed_function_interface';
    if (group.startsWith('F.')) return 'styling_silhouette_interface';
    if (group.startsWith('G.')) return 'tech_future_wearable_interface';
    if (group.startsWith('H.')) return 'living_boundary_interface';
    if (group.startsWith('X.')) return 'adult_coverage_desire_interface';
    return 'costume_evidence_interface';
  }
  if (mode === 'PROP') {
    if (group.startsWith('A.')) return 'everyday_carry_prop';
    if (group.startsWith('B.')) return 'professional_tool_prop';
    if (group.startsWith('C.')) return 'historical_court_prop';
    if (group.startsWith('D.')) return 'weapon_protection_prop';
    if (group.startsWith('E.')) return 'ritual_occult_prop';
    if (group.startsWith('F.')) return 'fashion_media_prop';
    if (group.startsWith('G.')) return 'sci_fi_tech_prop';
    if (group.startsWith('H.')) return 'wasteland_survival_prop';
    return 'prop_evidence_anchor';
  }
  if (group.startsWith('A.')) return 'real_institutional_symbol';
  if (group.startsWith('B.')) return 'occupational_function_symbol';
  if (group.startsWith('C.')) return 'historical_etiquette_symbol';
  if (group.startsWith('D.')) return 'armed_hazard_symbol';
  if (group.startsWith('E.')) return 'ritual_occult_symbol';
  if (group.startsWith('F.')) return 'fashion_media_subculture_symbol';
  if (group.startsWith('G.')) return 'sci_fi_tech_symbol';
  if (group.startsWith('H.')) return 'wasteland_survival_symbol';
  return 'symbol_evidence_system';
};

const costumeCategoryFit = (group = ''): CategoryFit => {
  if (group.startsWith('A.')) return { strong: ['real_professional'], usable: ['urban_life', 'war_military'], fusion: ['science_fiction', 'cyberpunk'], weak: ['xianxia'], exclude: [] };
  if (group.startsWith('B.')) return { strong: ['religious_ritual'], usable: ['dark_fantasy', 'xianxia', 'historical'], fusion: ['fantasy', 'mythic_epic'], weak: ['urban_life'], exclude: [] };
  if (group.startsWith('C.')) return { strong: ['real_professional'], usable: ['horror', 'body_horror', 'boudoir_aesthetic'], fusion: ['science_fiction', 'dark_fantasy'], weak: ['court'], exclude: [] };
  if (group.startsWith('D.')) return { strong: ['adventure'], usable: ['wasteland', 'ecological', 'real_professional'], fusion: ['wuxia', 'xianxia'], weak: [], exclude: [] };
  if (group.startsWith('E.')) return { strong: ['wuxia', 'noir_crime'], usable: ['war_military', 'historical', 'adventure'], fusion: ['fashion_idol', 'science_fiction'], weak: ['urban_life'], exclude: [] };
  if (group.startsWith('F.')) return { strong: ['fashion_idol'], usable: ['court', 'historical', 'boudoir_aesthetic'], fusion: ['surreal', 'fantasy'], weak: ['war_military'], exclude: [] };
  if (group.startsWith('G.')) return { strong: ['science_fiction'], usable: ['cyberpunk', 'posthuman', 'real_professional'], fusion: ['biopunk', 'wasteland'], weak: ['historical'], exclude: [] };
  if (group.startsWith('H.')) return { strong: ['body_horror'], usable: ['biopunk', 'fantasy', 'dark_fantasy', 'ecological'], fusion: ['xianxia', 'posthuman'], weak: ['real_professional'], exclude: [] };
  if (group.startsWith('X.')) return { strong: ['boudoir_aesthetic'], usable: ['fashion_idol', 'romance'], fusion: ['surreal', 'dark_fantasy'], weak: ['war_military'], exclude: [] };
  return { strong: [], usable: [], fusion: [], weak: [], exclude: [] };
};

const propCategoryFit = (group = ''): CategoryFit => {
  if (group.startsWith('A.')) return { strong: ['urban_life'], usable: ['real_professional', 'romance', 'noir_crime'], fusion: ['fashion_idol'], weak: ['mythic_epic'], exclude: [] };
  if (group.startsWith('B.')) return { strong: ['real_professional'], usable: ['urban_life', 'fashion_idol', 'noir_crime'], fusion: ['biopunk'], weak: ['xianxia'], exclude: [] };
  if (group.startsWith('C.')) return { strong: ['historical'], usable: ['court', 'wuxia', 'romance'], fusion: ['dark_fantasy', 'xianxia'], weak: ['cyberpunk'], exclude: [] };
  if (group.startsWith('D.')) return { strong: ['war_military'], usable: ['wuxia', 'adventure', 'wasteland'], fusion: ['dark_fantasy', 'science_fiction'], weak: ['romance'], exclude: [] };
  if (group.startsWith('E.')) return { strong: ['religious_ritual'], usable: ['dark_fantasy', 'xianxia', 'mythic_epic'], fusion: ['horror', 'fantasy'], weak: ['urban_life'], exclude: [] };
  if (group.startsWith('F.')) return { strong: ['fashion_idol'], usable: ['urban_life', 'romance', 'boudoir_aesthetic'], fusion: ['noir_crime', 'surreal'], weak: ['war_military'], exclude: [] };
  if (group.startsWith('G.')) return { strong: ['science_fiction'], usable: ['cyberpunk', 'posthuman', 'biopunk'], fusion: ['wasteland', 'horror'], weak: ['historical'], exclude: [] };
  if (group.startsWith('H.')) return { strong: ['wasteland'], usable: ['adventure', 'ecological', 'war_military'], fusion: ['science_fiction', 'biopunk'], weak: ['court'], exclude: [] };
  return { strong: [], usable: [], fusion: [], weak: [], exclude: [] };
};

const symbolCategoryFit = (group = ''): CategoryFit => {
  if (group.startsWith('A.')) return { strong: ['real_professional'], usable: ['urban_life', 'war_military'], fusion: ['cyberpunk'], weak: ['xianxia'], exclude: [] };
  if (group.startsWith('B.')) return { strong: ['real_professional'], usable: ['urban_life', 'fashion_idol', 'noir_crime'], fusion: ['science_fiction'], weak: [], exclude: [] };
  if (group.startsWith('C.')) return { strong: ['historical'], usable: ['court', 'wuxia', 'religious_ritual'], fusion: ['dark_fantasy'], weak: ['cyberpunk'], exclude: [] };
  if (group.startsWith('D.')) return { strong: ['war_military'], usable: ['wasteland', 'real_professional', 'adventure'], fusion: ['science_fiction', 'cyberpunk'], weak: ['romance'], exclude: [] };
  if (group.startsWith('E.')) return { strong: ['religious_ritual'], usable: ['dark_fantasy', 'xianxia', 'mythic_epic'], fusion: ['horror', 'surreal'], weak: ['urban_life'], exclude: [] };
  if (group.startsWith('F.')) return { strong: ['fashion_idol'], usable: ['urban_life', 'boudoir_aesthetic', 'romance'], fusion: ['noir_crime', 'surreal'], weak: ['war_military'], exclude: [] };
  if (group.startsWith('G.')) return { strong: ['science_fiction'], usable: ['cyberpunk', 'posthuman', 'biopunk'], fusion: ['religious_ritual', 'wasteland'], weak: ['historical'], exclude: [] };
  if (group.startsWith('H.')) return { strong: ['wasteland'], usable: ['adventure', 'ecological', 'war_military'], fusion: ['science_fiction'], weak: ['court'], exclude: [] };
  return { strong: [], usable: [], fusion: [], weak: [], exclude: [] };
};

const groupCategoryFit = (mode: DesignEvidenceMode, group = ''): CategoryFit => {
  if (mode === 'COSTUME') return costumeCategoryFit(group);
  if (mode === 'PROP') return propCategoryFit(group);
  return symbolCategoryFit(group);
};

const extraCategoryFitFromText = (item: LibraryItemDef): CategoryFit => {
  const text = [
    item.id,
    item.name,
    item.nameEn,
    item.def,
    item.defEn,
    ...toList(item.tags),
    ...toList(item.affects),
    ...toList(item.controls),
    ...toList(item.evidenceTags)
  ].filter(Boolean).join(' ').toLowerCase();
  const fit: CategoryFit = { strong: [], usable: [], fusion: [], weak: [], exclude: [] };
  const has = (pattern: RegExp) => pattern.test(text);
  if (has(/wuxia|jianghu|sect|martial|hidden.weapon|sword|blade|武侠|江湖|门派|暗器|剑|刀/)) fit.usable = [...toList(fit.usable), 'wuxia', 'war_military'];
  if (has(/ritual|sacred|talisman|prayer|relic|seal|curse|oracle|monastic|仪式|圣|符|祷|封印|诅咒|神谕|修会/)) fit.usable = [...toList(fit.usable), 'religious_ritual', 'dark_fantasy'];
  if (has(/court|heraldic|rank|crest|dynasty|noble|宫廷|纹章|官阶|王朝|贵族/)) fit.usable = [...toList(fit.usable), 'court', 'historical'];
  if (has(/cyber|hologram|hud|data|qr|ai|circuit|biometric|exosuit|sensor|赛博|全息|数据|电路|生物识别|外骨骼|传感/)) fit.usable = [...toList(fit.usable), 'science_fiction', 'cyberpunk'];
  if (has(/bio|biotech|fungal|mycelium|parasite|organic|sample|生物|菌丝|寄生|有机|样本/)) fit.usable = [...toList(fit.usable), 'biopunk', 'body_horror'];
  if (has(/wasteland|salvage|ration|shelter|radiation|water.right|survival|废土|拾荒|配给|避难|辐射|水源|生存/)) fit.usable = [...toList(fit.usable), 'wasteland', 'adventure'];
  if (has(/fashion|runway|magazine|makeup|lingerie|latex|stocking|glove|idol|时尚|秀场|杂志|化妆|内衣|乳胶|长袜|手套|偶像/)) fit.usable = [...toList(fit.usable), 'fashion_idol', 'boudoir_aesthetic'];
  if (has(/medical|lab|syringe|stethoscope|clinic|doctor|nurse|医疗|实验|注射|听诊|诊所|医生|护士/)) fit.usable = [...toList(fit.usable), 'real_professional', 'biopunk'];
  return normalizeCategoryFit(fit);
};

const anachronismRiskFor = (item: LibraryItemDef, eraMode: 'specific' | 'universal'): 'low' | 'medium' | 'high' => {
  if (item.anachronismRisk) return item.anachronismRisk;
  if (eraMode === 'universal') return 'low';
  if (item.risk === 'high') return 'high';
  if (item.risk === 'medium') return 'medium';
  return 'low';
};

export const withDesignEvidenceAxisMeta = (
  mode: DesignEvidenceMode,
  items: LibraryItemDef[]
): LibraryItemDef[] => items.map(item => {
  const extra = item as LibraryItemDef & {
    selectionRule?: string;
  };
  const evidenceKind = evidenceKindFor(mode, item.group);
  const eraMode = eraModeFor(item);
  const categoryFit = item.categoryFit
    ? normalizeCategoryFit(item.categoryFit)
    : mergeCategoryFit(groupCategoryFit(mode, item.group), extraCategoryFitFromText(item));
  const axis = mode === 'COSTUME' ? 'costume_logic' : mode === 'PROP' ? 'prop_anchor' : 'symbol_system';
  const ontologyLevel = Number(item.ontologyLevel || 1);
  return {
    ...item,
    ontologyLevel: item.ontologyLevel || 1,
    eraMode,
    eraStrictness: item.eraStrictness || (eraMode === 'universal' ? 'none' : 'soft'),
    anachronismRisk: anachronismRiskFor(item, eraMode),
    realityTags: item.realityTags?.length ? item.realityTags : realityTagsFor(mode, item),
    categoryFit,
    evidenceTags: uniq([...(item.evidenceTags || []), ...toList(item.tags), ...toList(item.affects), ...toList(item.controls), evidenceKind]),
    tags: uniq([...(item.tags || []), 'design_evidence_axis', axis, evidenceKind, `ontology_l${ontologyLevel}`]),
    randomAxis: axis,
    randomRole: evidenceKind,
    randomDominance: mode === 'COSTUME' ? 'wearable_structure' : mode === 'PROP' ? 'signature_object' : 'readable_sign',
    selectionRule: extra.selectionRule || '服装、道具和符号词条用于给主体补充外部可见证据。随机时只保留少量清楚证据；若与时代、现实等级或主题不完全匹配，优先折译为同功能的局部服装接口、道具锚点或符号痕迹。',
    eraTranslation: item.eraTranslation || '若证据物与当前时代不完全匹配，保留功能关系、位置关系和身份暗示，把具体材料、技术和文字系统折译为当前时代可成立的可见证据。',
    eraTranslationEn: item.eraTranslationEn || 'If the evidence object does not fully match the current era, keep its function, placement, and identity signal while translating material, technology, and writing system into period-valid visible evidence.'
  } as LibraryItemDef;
});
