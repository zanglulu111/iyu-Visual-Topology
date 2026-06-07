const fs = require('fs');
const path = require('path');
const os = require('os');
const { pathToFileURL } = require('url');
const esbuild = require('esbuild');

const rootDir = path.resolve(__dirname, '..');
const outputDir = path.join(rootDir, 'outputs', 'concept-lexicon-export');
const tempDir = path.join(os.tmpdir(), `concept-lexicon-export-${Date.now()}`);

const entrySource = `
import { CONCEPT_ENGINE_LIBRARY, CONCEPT_ENGINE_BLOCKS } from ${JSON.stringify(path.join(rootDir, 'data/concept_design/core.ts'))};
import { CONCEPT_AXIS_AUDIT_PROFILES } from ${JSON.stringify(path.join(rootDir, 'data/concept_design/filter/axisAuditProfiles.ts'))};
import { CONCEPT_LINKED_RANDOM_PRESETS } from ${JSON.stringify(path.join(rootDir, 'data/concept_design/linkedRandomPresets.ts'))};
import { VISUAL_STYLE_RANDOM_PRESETS } from ${JSON.stringify(path.join(rootDir, 'data/concept_design/visualStyleRandomPresets.ts'))};
import { FRAMING_RANDOM_PRESETS } from ${JSON.stringify(path.join(rootDir, 'data/concept_design/framingRandomPresets.ts'))};
export {
  CONCEPT_ENGINE_LIBRARY,
  CONCEPT_ENGINE_BLOCKS,
  CONCEPT_AXIS_AUDIT_PROFILES,
  CONCEPT_LINKED_RANDOM_PRESETS,
  VISUAL_STYLE_RANDOM_PRESETS,
  FRAMING_RANDOM_PRESETS
};
`;

const fieldDict = [
  ['blockId', '模块ID', '词条所在参数模块的程序编号'],
  ['blockName', '模块名', '词条所在参数模块的中文名称'],
  ['blockNameEn', '模块英文名', '词条所在参数模块的英文名称'],
  ['libraryId', '词库ID', '词库分类编号'],
  ['libraryName', '词库名', '词库分类中文名称'],
  ['libraryDesc', '词库说明', '词库层级说明'],
  ['itemId', '词条ID', '词条唯一编号'],
  ['name', '词条名', '中文词条名'],
  ['nameEn', '英文名', '英文词条名'],
  ['group', '分组', '词条在词库里的分组'],
  ['def', '定义', '词条定义或说明'],
  ['tags', '标签', '通用标签，用于搜索和筛选'],
  ['aliases', '别名', '额外搜索别名'],
  ['ontologyLevel', '本体等级', '1-5，越高越接近真实超现实/异化成立'],
  ['eras', '适用时代', '词条允许出现的时代范围'],
  ['eraMode', '时代模式', 'specific / universal。specific 表示只在指定时代成立；universal 表示作为通用词条随任何时代进入池子'],
  ['eraStrictness', '时代严格度', 'hard / soft / none。hard 表示时代不合就淘汰；soft 表示可折译或局部异常；none 表示不参与世界时代筛选'],
  ['anachronismRisk', '时代违和风险', 'low / medium / high。时代错配时的违和风险，用于随机安全阀'],
  ['eraTranslation', '时代折译规则', '当词条与当前时间轴不完全匹配时，如何折译为本时代成立的证据、材质、符号或局部异常'],
  ['mediaEra', '媒介时代', '媒介/摄影/渲染/工艺自己的时代感，不等于画面世界内部时代'],
  ['styleEra', '风格时代', '艺术风格、审美流派或导演摄影风格的时代感，不等于画面世界内部时代'],
  ['genreTags', '类型标签', '画面世界内部的类型引力标签，如武侠、赛博、现实职业、黑暗奇幻、废土等；视觉风格和取景协议通常不参与'],
  ['genreStrictness', '类型严格度', 'hard / soft / none。hard 表示类型不合就淘汰；soft 表示可折译为局部证据；none 表示不参与类型筛选'],
  ['genreRole', '类型功能', '该词条在类型世界中的功能，如 identity / field / prop / costume / symbol / light_source'],
  ['genreTranslation', '类型折译规则', '当类型不完全匹配时，如何折译为身份、道具、服装、制度痕迹或场景压力'],
  ['categoryMode', '类别模式', 'specific / universal。specific 表示按 categoryFit 判断类型关系；universal 表示作为类型通用词条进入基础池'],
  ['categoryFit', '类别适配', '新软推荐字段：strong / usable / fusion / weak / exclude，类别只做引力排序与排除建议，不做硬筛选'],
  ['cultureTags', '文化场域标签', '文明、地域、制度、审美接口标签，如中国江湖、全球企业、英伦宫廷、太空殖民地等'],
  ['cultureStrictness', '文化严格度', 'hard / soft / none。hard 表示文化场域不合就淘汰；soft 表示可折译；none 表示不参与文化筛选'],
  ['cultureRole', '文化功能', '该词条通过什么携带文化场域，如 institution / costume / architecture / prop / ritual / language_sign'],
  ['cultureTranslation', '文化折译规则', '当文化场域不完全匹配时，如何折译为制度、服装、道具、文字、建筑或礼仪痕迹'],
  ['spaceTags', '空间标签', '空间结构标签，如 street / temple / palace / lab / forest / space_station / abstract'],
  ['spaceScale', '空间尺度', '空间尺度，如 room / street / building / city / landscape / cosmic / abstract'],
  ['risk', '风险等级', 'clean / medium / high，用于随机安全过滤'],
  ['affects', '影响维度', '该词条主要影响脸、身体、材质、姿态、道具等维度'],
  ['controls', '控制对象', '该词条会约束哪些画面对象或逻辑'],
  ['forbids', '禁止项', '该词条明确禁止的误用方向'],
  ['realityTags', '现实标签', '物理/社会/技术/神话等现实锚标签'],
  ['realityAnchor', '现实锚点', '更具体的现实成立依据'],
  ['spacetimeAnchor', '时空锚点', '时空系统筛选锚点'],
  ['spacetimeSystem', '时空系统', '时空大系统标签'],
  ['lightAnchor', '光源锚点', '光源合法性筛选锚点'],
  ['conflictTags', '冲突标签', '用于避免时代、现实、技术冲突'],
  ['genderCoding', '性别编码', '词条自身偏女性/男性/中性等编码'],
  ['genderSignal', '性别信号', '词条作为性别判断信号时使用'],
  ['ageBand', '年龄段', '年龄相关筛选字段'],
  ['ageWear', '年龄磨损感', '年龄与生活损耗相关筛选字段'],
  ['bodyFunction', '身体功能类型', '体态/身体词条的功能分类'],
  ['evidenceTags', '证据标签', '角色证据链筛选标签'],
  ['framingProfile', '取景画像', '取景词条的主体可读性、畸变、运动、光学风险等画像'],
  ['extraFields', '额外字段JSON', '脚本未展开但词条实际携带的其他字段']
];

const knownItemKeys = new Set([
  'id', 'name', 'nameEn', 'def', 'defEn', 'core', 'coreEn', 'directive', 'directiveEn',
  'essence', 'essenceEn', 'reference', 'referenceEn', 'aliases', 'aliasesEn',
  'reality', 'realityEn', 'group', 'groupEn', 'altGroup', 'altGroupEn', 'flaw',
  'flawEn', 'topology', 'topologyEn', 'skeletons', 'tags', 'logic', 'logicEn',
  'ontologyLevel', 'eras', 'eraStrictness', 'anachronismRisk', 'eraTranslation',
  'eraTranslationEn', 'mediaEra', 'styleEra', 'genreTags', 'genreStrictness',
  'genreRole', 'genreTranslation', 'genreTranslationEn', 'categoryMode', 'categoryFit', 'cultureTags', 'cultureStrictness',
  'cultureRole', 'cultureTranslation', 'cultureTranslationEn', 'spaceTags', 'spaceScale',
  'affects', 'risk', 'controls', 'forbids',
  'absorptionRule', 'absorptionRuleEn', 'framingProfile', 'styleRoute',
  'protocolCategory', 'protocolCategoryEn', 'protocolKind', 'personaCategory',
  'personaCategoryEn', 'personaSubgroup', 'personaSubgroupEn', 'personaKind',
  'personaKindEn', 'personaStrength', 'isCompoundPersona', 'realityTags',
  'styleTags', 'timeTags', 'adminOnly', 'adultOnly', 'patch',
  'realityAnchor', 'spacetimeAnchor', 'spacetimeSystem', 'lightAnchor',
  'conflictTags', 'genderCoding', 'genderSignal', 'ageBand', 'ageWear',
  'bodyFunction', 'evidenceTags'
]);

const itemColumns = [
  ['blockId', '模块ID'],
  ['blockName', '模块名'],
  ['blockNameEn', '模块英文名'],
  ['libraryId', '词库ID'],
  ['libraryName', '词库名'],
  ['libraryDesc', '词库说明'],
  ['itemId', '词条ID'],
  ['name', '词条名'],
  ['nameEn', '英文名'],
  ['group', '分组'],
  ['def', '定义'],
  ['tags', '标签'],
  ['aliases', '别名'],
  ['ontologyLevel', '本体等级'],
  ['eras', '适用时代'],
  ['eraMode', '时代模式'],
  ['eraStrictness', '时代严格度'],
  ['anachronismRisk', '时代违和风险'],
  ['eraTranslation', '时代折译规则'],
  ['mediaEra', '媒介时代'],
  ['styleEra', '风格时代'],
  ['genreTags', '类型标签'],
  ['genreStrictness', '类型严格度'],
  ['genreRole', '类型功能'],
  ['genreTranslation', '类型折译规则'],
  ['categoryMode', '类别模式'],
  ['categoryFit', '类别适配'],
  ['cultureTags', '文化场域标签'],
  ['cultureStrictness', '文化严格度'],
  ['cultureRole', '文化功能'],
  ['cultureTranslation', '文化折译规则'],
  ['spaceTags', '空间标签'],
  ['spaceScale', '空间尺度'],
  ['risk', '风险等级'],
  ['affects', '影响维度'],
  ['controls', '控制对象'],
  ['forbids', '禁止项'],
  ['realityTags', '现实标签'],
  ['realityAnchor', '现实锚点'],
  ['spacetimeAnchor', '时空锚点'],
  ['spacetimeSystem', '时空系统'],
  ['lightAnchor', '光源锚点'],
  ['conflictTags', '冲突标签'],
  ['genderCoding', '性别编码'],
  ['genderSignal', '性别信号'],
  ['ageBand', '年龄段'],
  ['ageWear', '年龄磨损感'],
  ['bodyFunction', '身体功能类型'],
  ['evidenceTags', '证据标签'],
  ['framingProfile', '取景画像'],
  ['extraFields', '额外字段JSON']
];

const presetColumns = [
  ['presetType', '预设类型'],
  ['id', '预设ID'],
  ['label', '名称'],
  ['labelEn', '英文名称'],
  ['brief', '说明'],
  ['family', '主题族'],
  ['linkedPresetId', '绑定联动预设'],
  ['mediumCategory', '媒介类别'],
  ['mode', '匹配模式'],
  ['category', '类别'],
  ['worldLaw', '世界法则'],
  ['density', '参数量'],
  ['conflictPolicy', '冲突处理'],
  ['subjectMode', '主体模式'],
  ['humanRegister', '人类身份域'],
  ['genderPolicy', '性别策略'],
  ['primaryGenre', '主类型'],
  ['secondaryGenres', '副类型'],
  ['genreFusionMode', '类型融合模式'],
  ['genreAllow', '允许类型'],
  ['cultureAllow', '允许文化场域'],
  ['spaceAllow', '允许空间结构'],
  ['eraAllow', '允许时代'],
  ['realityAllow', '允许现实标签'],
  ['spacetimeAnchorAllow', '允许时空锚点'],
  ['lightAnchorAllow', '允许光源锚点'],
  ['subjectPrefer', '主体偏好关键词'],
  ['fieldPrefer', '场域偏好关键词'],
  ['lightPrefer', '光影偏好关键词'],
  ['surrealMax', '超现实上限'],
  ['allowHighRisk', '允许高风险'],
  ['allowSecondaryAxis', '允许第二轴'],
  ['themeTags', '主题标签'],
  ['evidenceTags', '证据标签'],
  ['adultTone', '成人调性'],
  ['soulBlocks', '核心风格词库组'],
  ['qualityBlocks', '质感词库组'],
  ['paletteKeys', '配色偏好关键词'],
  ['allowBlocks', '额外允许词库组'],
  ['profileTarget', '风格画像目标'],
  ['requiredBlocks', '必选词库组'],
  ['optionalBlocks', '可选词库组'],
  ['prefer', '偏好词条映射'],
  ['allowExtreme', '允许极端'],
  ['allowMultiSubject', '允许多主体'],
  ['allowOpticalFx', '允许光学效果']
];

const toDisplay = value => {
  if (value === undefined || value === null) return '';
  if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') return String(value);
  if (Array.isArray(value)) return value.map(toDisplay).filter(Boolean).join(' | ');
  if (typeof value === 'object') return JSON.stringify(value);
  return String(value);
};

const csvEscape = value => {
  const text = toDisplay(value);
  if (/[",\n\r]/.test(text)) return `"${text.replace(/"/g, '""')}"`;
  return text;
};

const writeCsv = (filePath, columns, rows) => {
  const lines = [
    columns.map(([, header]) => csvEscape(header)).join(','),
    ...rows.map(row => columns.map(([key]) => csvEscape(row[key])).join(','))
  ];
  fs.writeFileSync(filePath, `${lines.join('\n')}\n`, 'utf8');
};

const getBlockIdFromLibraryId = libraryId => libraryId.replace(/_lib$/, '');

const compactItem = (item, category, blockMap) => {
  const blockId = getBlockIdFromLibraryId(category.id);
  const block = blockMap.get(blockId);
  const extra = {};
  Object.entries(item).forEach(([key, value]) => {
    if (!knownItemKeys.has(key)) extra[key] = value;
  });
  return {
    blockId,
    blockName: block?.name || category.name || '',
    blockNameEn: block?.enName || category.nameEn || '',
    libraryId: category.id,
    libraryName: category.name,
    libraryDesc: category.desc,
    itemId: item.id,
    name: item.name,
    nameEn: item.nameEn,
    group: item.group,
    def: toDisplay(item.def || item.core || item.directive || item.essence || item.reference || item.logic),
    tags: item.tags,
    aliases: item.aliases,
    ontologyLevel: item.ontologyLevel || item.surrealLevel,
    eras: item.eras,
    eraMode: item.eraMode,
    eraStrictness: item.eraStrictness,
    anachronismRisk: item.anachronismRisk,
    eraTranslation: item.eraTranslation || item.eraTranslationEn,
    mediaEra: item.mediaEra,
    styleEra: item.styleEra,
    genreTags: item.genreTags,
    genreStrictness: item.genreStrictness,
    genreRole: item.genreRole,
    genreTranslation: item.genreTranslation || item.genreTranslationEn,
    categoryMode: item.categoryMode,
    categoryFit: item.categoryFit,
    cultureTags: item.cultureTags,
    cultureStrictness: item.cultureStrictness,
    cultureRole: item.cultureRole,
    cultureTranslation: item.cultureTranslation || item.cultureTranslationEn,
    spaceTags: item.spaceTags,
    spaceScale: item.spaceScale,
    risk: item.risk,
    affects: item.affects,
    controls: item.controls,
    forbids: item.forbids,
    realityTags: item.realityTags,
    realityAnchor: item.realityAnchor,
    spacetimeAnchor: item.spacetimeAnchor,
    spacetimeSystem: item.spacetimeSystem,
    lightAnchor: item.lightAnchor,
    conflictTags: item.conflictTags,
    genderCoding: item.genderCoding,
    genderSignal: item.genderSignal,
    ageBand: item.ageBand,
    ageWear: item.ageWear,
    bodyFunction: item.bodyFunction,
    evidenceTags: item.evidenceTags,
    framingProfile: item.framingProfile,
    extraFields: Object.keys(extra).length ? extra : ''
  };
};

const presetRow = (type, preset) => ({ presetType: type, ...preset });

const completenessFields = [
  'ontologyLevel', 'eras', 'eraStrictness', 'anachronismRisk', 'mediaEra',
  'styleEra', 'genreTags', 'genreStrictness', 'genreRole', 'cultureTags',
  'cultureStrictness', 'cultureRole', 'spaceTags', 'spaceScale', 'risk', 'realityTags', 'categoryFit', 'spacetimeAnchor',
  'lightAnchor', 'genderCoding', 'ageBand', 'ageWear', 'bodyFunction',
  'evidenceTags', 'framingProfile'
];

const buildCompletenessMarkdown = (categories, itemRows) => {
  const totalItems = itemRows.length;
  const allFieldStats = completenessFields.map(field => {
    const count = itemRows.filter(row => Boolean(row[field])).length;
    return { field, count, ratio: totalItems ? count / totalItems : 0 };
  });
  const categoryStats = categories.map(category => {
    const rows = itemRows.filter(row => row.libraryId === category.id);
    const stats = completenessFields.map(field => {
      const count = rows.filter(row => Boolean(row[field])).length;
      return `${field}:${rows.length ? Math.round((count / rows.length) * 100) : 0}%`;
    }).join(' / ');
    return `| ${category.name} | ${category.id} | ${rows.length} | ${stats} |`;
  });
  return [
    '# 词库字段完整度报告',
    '',
    `导出时间：${new Date().toLocaleString('zh-CN')}`,
    `词库数量：${categories.length}`,
    `词条总数：${totalItems}`,
    '',
    '## 全局字段覆盖率',
    '',
    '| 字段 | 有值词条数 | 覆盖率 |',
    '| --- | ---: | ---: |',
    ...allFieldStats.map(stat => `| ${stat.field} | ${stat.count} | ${Math.round(stat.ratio * 100)}% |`),
    '',
    '## 各词库字段覆盖率',
    '',
    '| 词库 | 词库ID | 词条数 | 字段覆盖 |',
    '| --- | --- | ---: | --- |',
    ...categoryStats
  ].join('\n');
};

async function loadData() {
  fs.mkdirSync(tempDir, { recursive: true });
  const entryPath = path.join(tempDir, 'entry.mjs');
  const bundlePath = path.join(tempDir, 'bundle.mjs');
  fs.writeFileSync(entryPath, entrySource, 'utf8');
  await esbuild.build({
    entryPoints: [entryPath],
    outfile: bundlePath,
    bundle: true,
    platform: 'node',
    format: 'esm',
    target: 'node20',
    logLevel: 'silent'
  });
  return import(pathToFileURL(bundlePath).href);
}

async function main() {
  const data = await loadData();
  fs.mkdirSync(outputDir, { recursive: true });

  const blockMap = new Map(data.CONCEPT_ENGINE_BLOCKS.map(block => [block.id, block]));
  const itemRows = data.CONCEPT_ENGINE_LIBRARY.flatMap(category =>
    (category.items || []).map(item => compactItem(item, category, blockMap))
  );
  const presetRows = [
    ...data.CONCEPT_AXIS_AUDIT_PROFILES.map(preset => presetRow('轴验收基准', preset)),
    ...data.CONCEPT_LINKED_RANDOM_PRESETS.map(preset => presetRow('联动随机', preset)),
    ...data.VISUAL_STYLE_RANDOM_PRESETS.map(preset => presetRow('视觉风格随机', preset)),
    ...data.FRAMING_RANDOM_PRESETS.map(preset => presetRow('取景协议随机', preset))
  ];
  const dictRows = fieldDict.map(([field, name, desc]) => ({ field, name, desc }));

  writeCsv(path.join(outputDir, '词库数据总表.csv'), itemColumns, itemRows);
  writeCsv(path.join(outputDir, '随机预设总表.csv'), presetColumns, presetRows);
  writeCsv(path.join(outputDir, '字段字典.csv'), [
    ['field', '字段'],
    ['name', '中文名'],
    ['desc', '说明']
  ], dictRows);
  fs.writeFileSync(path.join(outputDir, '词库数据总表.json'), JSON.stringify(itemRows, null, 2), 'utf8');
  fs.writeFileSync(path.join(outputDir, '随机预设总表.json'), JSON.stringify(presetRows, null, 2), 'utf8');
  fs.writeFileSync(path.join(outputDir, '词库字段完整度报告.md'), buildCompletenessMarkdown(data.CONCEPT_ENGINE_LIBRARY, itemRows), 'utf8');

  console.log(`Exported ${itemRows.length} lexicon rows and ${presetRows.length} preset rows.`);
  console.log(outputDir);
}

main().catch(error => {
  console.error(error);
  process.exit(1);
});
