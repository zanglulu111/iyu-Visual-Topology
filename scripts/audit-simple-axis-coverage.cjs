const fs = require('fs');
const path = require('path');
const os = require('os');
const esbuild = require('esbuild');

const rootDir = path.resolve(__dirname, '..');
const outputDir = path.join(rootDir, 'outputs', 'concept-axis-coverage');

const entrySource = `
import { CONCEPT_ENGINE_LIBRARY, CONCEPT_ENGINE_BLOCKS } from ${JSON.stringify(path.join(rootDir, 'data/concept_design/core.ts'))};
export { CONCEPT_ENGINE_LIBRARY, CONCEPT_ENGINE_BLOCKS };
`;

const hardAxisFreeBlockIds = new Set([
  'cd_fusion_rule',
  'cd_field_register',
  'cd_field_style_primary',
  'cd_field_style_secondary',
  'cd_subject_kind',
  'cd_world_register',
  'cd_identity_seed',
  'cd_negation_logic',
  'cd_design_translation',
  'cd_design_sheet',
  'cd_palette',
  'cd_color_palette',
  'cd_render_real',
  'cd_render_art',
  'cd_negative_rules',
  'cd_director_style',
  'cd_photo_style',
  'cd_art_style',
  'cd_anim_director',
  'cd_art_movement',
  'cd_camera_system',
  'cd_lens_series',
  'cd_optical_format',
  'cd_texture_render',
  'cd_physical_grain',
  'cd_base_tone',
  'cd_color_science',
  'cd_art_medium',
  'cd_line_quality',
  'cd_canvas_texture',
  'cd_media_photo_soul',
  'cd_media_photo_quality',
  'cd_media_photo_eye',
  'cd_media_photo_craft',
  'cd_media_photo_format',
  'cd_media_paint_soul',
  'cd_media_paint_quality',
  'cd_media_paint_eye',
  'cd_media_paint_craft',
  'cd_media_paint_format',
  'cd_media_cgi_soul',
  'cd_media_tangible_soul',
  'cd_shot_preset',
  'cd_framing_focus',
  'cd_framing_shot_size',
  'cd_framing_balance',
  'cd_framing_perspective',
  'cd_framing_angle',
  'cd_framing_focal_length',
  'cd_framing_depth',
  'cd_framing_shutter',
  'cd_framing_lens_fx'
]);

const eraSignals = [
  ['primitive', 4, ['原始', '石器', '狩猎采集', 'primitive', 'stone age', 'hunter gatherer']],
  ['mythic', 4, ['神话', '诸神', '上古', '创世', 'mythic', 'deity', 'god', 'pantheon']],
  ['slave', 4, ['奴隶', '古典时代', '古希腊', '古罗马', '古埃及', 'classical antiquity', 'ancient roman', 'ancient greek', 'ancient egypt']],
  ['feudal', 4, ['封建', '中世纪', '骑士', '王国', '武侠', '江湖', '门派', 'medieval', 'feudal', 'knight', 'wuxia', 'jianghu']],
  ['early_modern', 4, ['近世', '文艺复兴', '大航海', '火枪', '都铎', '明代', '清代', '江户', 'renaissance', 'early modern', 'tudor', 'musketeer', 'edo']],
  ['industrial', 4, ['工业', '蒸汽', '铁路', '火车', '电报', '维多利亚', '民国', '明治', '二战', '一战', 'industrial', 'steam engine', 'railway', 'railroad', 'telegraph', 'victorian', 'meiji', 'wwi', 'wwii']],
  ['modern', 3, ['现代', '20世纪', '广播', '电视', '汽车', '机场', 'modern era', 'twentieth century', 'broadcast', 'automobile', 'airport']],
  ['contemporary', 3, ['当代', '互联网', '社交媒体', '手机', '办公室', '都市', 'contemporary', 'internet', 'smartphone', 'social media', 'office']],
  ['near_future', 4, ['近未来', '赛博', '全息', '无人机', '义体', '智能玻璃', 'near future', 'cyber', 'hologram', 'drone', 'cybernetic']],
  ['far_future', 4, ['远未来', '星际', '太空殖民', '星舰', '后人类', 'far future', 'interstellar', 'space colony', 'starship', 'posthuman']],
  ['timeless', 2, ['无时态', '抽象', '象征', '梦境', '阈限', 'timeless', 'abstract', 'symbolic', 'dream', 'liminal']]
];

const realitySignals = [
  ['realistic', 3, ['现实', '写实', '物理', '社会', '职业', '制度', 'realistic', 'physical', 'social', 'professional', 'institutional']],
  ['stylized', 3, ['风格化', '戏剧化', '仪式', '宗教', '诡异', 'stylized', 'ritual', 'religious', 'uncanny']],
  ['semi_surreal', 4, ['轻度异常', '魔法', '神秘', '推测', '生物发光', 'semi surreal', 'magical', 'speculative', 'bioluminescent']],
  ['nonreal', 4, ['非现实', '神话', '梦境', '异星', '宇宙', '数字空间', 'non realist', 'mythic', 'dream', 'alien', 'cosmic', 'digital']],
  ['abstract', 4, ['抽象', '象征', '超现实', '虚空', '荒诞', 'abstract', 'symbolic', 'surreal', 'void']]
];

const eraAliases = {
  origin: ['primitive'],
  ancient: ['slave', 'feudal'],
  classical: ['slave'],
  medieval: ['feudal'],
  pre_modern: ['slave', 'feudal', 'early_modern'],
  pre_modern_to_modern: ['feudal', 'early_modern', 'industrial', 'modern'],
  renaissance: ['early_modern'],
  twentieth_century: ['modern'],
  modern_digital: ['modern', 'contemporary', 'near_future'],
  industrial_or_modern: ['industrial', 'modern', 'contemporary'],
  future: ['near_future', 'far_future'],
  digital: ['near_future', 'far_future'],
  all_eras: ['timeless'],
  open_time: ['timeless'],
  mythic_or_dream: ['mythic', 'timeless'],
  mythic_or_surreal_light: ['mythic', 'timeless'],
  future_or_abstract: ['near_future', 'far_future', 'timeless']
};

const realityAliases = {
  realistic: ['realistic', 'physical', 'social', 'naturalistic', 'historical', 'institutional', 'physical_light', 'practical_source'],
  realist_safe: ['realistic', 'physical', 'social'],
  stylized: ['realistic', 'physical', 'stylized', 'semi_real', 'uncanny', 'religious', 'ritual'],
  stylized_boundary: ['stylized', 'semi_real', 'uncanny'],
  realistic_or_stylized: ['realistic', 'physical', 'stylized', 'semi_real'],
  semi_surreal: ['stylized', 'semi_real', 'semi_surreal', 'uncanny', 'magical', 'mythic', 'speculative', 'technological'],
  nonreal: ['non_realist', 'mythic', 'magical', 'dream', 'cosmic', 'alien', 'digital', 'abstract', 'surreal', 'symbolic'],
  non_realist: ['non_realist', 'mythic', 'magical', 'dream', 'cosmic', 'alien', 'digital', 'abstract', 'surreal', 'symbolic'],
  nonreal_ontology: ['non_realist', 'mythic', 'magical', 'dream', 'cosmic', 'alien', 'digital', 'abstract', 'surreal', 'symbolic'],
  abstract: ['abstract', 'surreal', 'symbolic', 'dream', 'non_realist', 'materialized'],
  mythic: ['mythic', 'magical', 'non_realist'],
  sacred: ['religious', 'ritual', 'stylized'],
  genre_world: ['stylized', 'symbolic'],
  symbolic: ['symbolic', 'stylized', 'abstract'],
  technological: ['technological', 'speculative'],
  speculative: ['speculative', 'technological', 'semi_surreal']
};

const normalizeAliasList = (values, aliases) => {
  const seen = new Set();
  const output = [];
  for (const value of values) {
    const key = String(value).trim().toLowerCase();
    if (!key) continue;
    const expanded = aliases[key] || [key];
    for (const tag of expanded) {
      const normalized = String(tag).trim().toLowerCase();
      if (!normalized || seen.has(normalized)) continue;
      seen.add(normalized);
      output.push(normalized);
    }
  }
  return output;
};

const toArray = value => {
  if (Array.isArray(value)) return value.map(String).map(item => item.trim()).filter(Boolean);
  if (typeof value === 'string' && value.trim()) return [value.trim()];
  return [];
};

const textOf = value => {
  if (!value) return '';
  if (Array.isArray(value)) return value.map(textOf).join(' ');
  if (typeof value === 'object') return Object.values(value).map(textOf).join(' ');
  return String(value);
};

const stripBoundaryText = text => String(text || '')
  .replace(/边界[:：][\s\S]*?(?=(?:母题|张力|视觉证据|造型入口|第一识别|Boundary|Motif|Tension|Visual evidence|Styling entry|First read)[:：]|$)/gi, ' ')
  .replace(/Boundary[:：][\s\S]*?(?=(?:母题|张力|视觉证据|造型入口|第一识别|边界|Motif|Tension|Visual evidence|Styling entry|First read)[:：]|$)/gi, ' ')
  .replace(/转译守则[:：][\s\S]*?(?=(?:母题|张力|视觉证据|造型入口|第一识别|边界|Boundary|Motif|Tension|Visual evidence|Styling entry|First read)[:：]|$)/gi, ' ')
  .replace(/(?:转译|翻译|改写|比喻|隐喻|像|替代|进入|变成|保留|降维|转成|转为)[^。.!?]*(?:封建|骑士|江湖|门派|武侠|feudal|knight|jianghu|wuxia)[^。.!?]*[。.!?]/gi, ' ')
  .replace(/(?:封建|骑士|江湖|门派|武侠|feudal|knight|jianghu|wuxia)[^。.!?]*(?:转译|翻译|改写|比喻|隐喻|像|替代|进入|变成|保留|降维|转成|转为)[^。.!?]*[。.!?]/gi, ' ')
  .replace(/不(?:是|应|要|能)[^。.!?]*[。.!?]/g, ' ')
  .replace(/\b(?:not|avoid|avoids|avoiding)\b[^。.!?]*[。.!?]/gi, ' ')
  .replace(/避免[^。.!?]*[。.!?]/g, ' ')
  .replace(/avoid[^。.!?]*[。.!?]/gi, ' ');

const csvEscape = value => {
  const text = value === undefined || value === null
    ? ''
    : Array.isArray(value)
      ? value.join(' | ')
      : String(value);
  if (/[",\n\r]/.test(text)) return `"${text.replace(/"/g, '""')}"`;
  return text;
};

const writeCsv = (filePath, columns, rows) => {
  const lines = [
    columns.map(([, label]) => csvEscape(label)).join(','),
    ...rows.map(row => columns.map(([key]) => csvEscape(row[key])).join(','))
  ];
  fs.writeFileSync(filePath, `${lines.join('\n')}\n`, 'utf8');
};

const markdownTable = (rows, columns) => {
  if (!rows.length) return ['_无_'];
  return [
    `| ${columns.map(([, label]) => label).join(' | ')} |`,
    `| ${columns.map(([, , align]) => align === 'right' ? '---:' : '---').join(' | ')} |`,
    ...rows.map(row => `| ${columns.map(([key]) => String(row[key] ?? '').replace(/\n/g, ' ').replace(/\|/g, '/')).join(' | ')} |`)
  ];
};

const getBlockIdFromLibraryId = libraryId => libraryId.replace(/_lib$/, '');

const getText = (library, item) => [
  library.id,
  library.name,
  library.nameEn,
  item.id,
  item.name,
  item.nameEn,
  item.group,
  item.groupEn,
  item.def,
  item.defEn,
  item.core,
  item.coreEn,
  item.directive,
  item.directiveEn,
  item.reality,
  item.realityEn,
  item.reference,
  item.referenceEn,
  item.tags,
  item.aliases,
  item.evidenceTags,
  item.publicFilterTags,
  item.realityTags,
  item.realityAnchor,
  item.spacetimeAnchor,
  item.lightAnchor
].map(textOf).map(stripBoundaryText).join(' ').toLowerCase();

const containsSignal = (text, needle) => {
  const value = needle.toLowerCase();
  if (/^[a-z0-9_ -]+$/.test(value)) {
    const escaped = value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&').replace(/\\ /g, '\\s+');
    return new RegExp(`(^|[^a-z0-9_])${escaped}([^a-z0-9_]|$)`, 'i').test(text);
  }
  return text.includes(value);
};

const getTimeAnchors = item => Array.from(new Set([
  ...toArray(item.eras),
  ...toArray(item.eraTags)
]));

const getRealityAnchors = item => Array.from(new Set([
  ...toArray(item.realityTags),
  ...toArray(item.realityAnchor)
]));

const getNormalizedTimeAnchors = item => normalizeAliasList(getTimeAnchors(item), eraAliases);
const getNormalizedRealityAnchors = item => normalizeAliasList(getRealityAnchors(item), realityAliases);

const getOntologyLevel = item => item.ontologyLevel || item.surrealLevel || '';

const scoreSignals = (text, signalDefs) => signalDefs
  .map(([axis, weight, needles]) => {
    const hits = needles.filter(needle => containsSignal(text, needle));
    return hits.length ? { axis, score: hits.length * weight, hits } : null;
  })
  .filter(Boolean)
  .sort((a, b) => b.score - a.score);

const isSuspiciousEraNoise = (topSignal, normalizedTimeAnchors) => {
  if (!topSignal) return false;
  const hitSet = new Set(topSignal.hits.map(hit => hit.toLowerCase()));
  if (
    topSignal.axis === 'feudal' &&
    [...hitSet].every(hit => ['骑士', 'knight'].includes(hit)) &&
    (normalizedTimeAnchors.includes('near_future') || normalizedTimeAnchors.includes('far_future'))
  ) {
    return true;
  }
  if (
    topSignal.axis === 'industrial' &&
    [...hitSet].every(hit => ['工业', 'industrial'].includes(hit)) &&
    (normalizedTimeAnchors.includes('near_future') || normalizedTimeAnchors.includes('far_future'))
  ) {
    return true;
  }
  return false;
};

const rowBase = (library, item, blockMap) => {
  const blockId = getBlockIdFromLibraryId(library.id);
  const block = blockMap.get(blockId);
  return {
    blockId,
    blockName: block?.name || library.name || blockId,
    libraryId: library.id,
    libraryName: library.name,
    itemId: item.id || '',
    itemName: item.name || item.id || '',
    group: item.group || '',
    timeAnchors: getTimeAnchors(item),
    realityAnchors: getRealityAnchors(item),
    ontologyLevel: getOntologyLevel(item),
    normalizedTimeAnchors: getNormalizedTimeAnchors(item),
    normalizedRealityAnchors: getNormalizedRealityAnchors(item),
    risk: item.risk || '',
    def: textOf(item.def || item.core || item.directive || item.reality || item.reference).slice(0, 220)
  };
};

const summarizeBy = (rows, key) => {
  const map = new Map();
  for (const row of rows) {
    const value = row[key] || '未命名';
    map.set(value, (map.get(value) || 0) + 1);
  }
  return Array.from(map.entries())
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count || a.name.localeCompare(b.name, 'zh-Hans-CN'));
};

const main = async () => {
  fs.mkdirSync(outputDir, { recursive: true });
  const tempDir = path.join(os.tmpdir(), `simple-axis-coverage-${Date.now()}`);
  fs.mkdirSync(tempDir, { recursive: true });
  const bundlePath = path.join(tempDir, 'entry.mjs');

  await esbuild.build({
    stdin: { contents: entrySource, resolveDir: rootDir, sourcefile: 'entry.ts' },
    bundle: true,
    platform: 'node',
    format: 'esm',
    outfile: bundlePath,
    logLevel: 'silent'
  });

  const { CONCEPT_ENGINE_LIBRARY, CONCEPT_ENGINE_BLOCKS } = await import(`file://${bundlePath}`);
  const blockMap = new Map(CONCEPT_ENGINE_BLOCKS.map(block => [block.id, block]));

  const rows = [];
  const missingTimeRows = [];
  const missingRealityRows = [];
  const suspiciousEraRows = [];
  const suspiciousRealityRows = [];
  const excludedRows = [];

  for (const library of CONCEPT_ENGINE_LIBRARY) {
    const blockId = getBlockIdFromLibraryId(library.id);
    const excluded = hardAxisFreeBlockIds.has(blockId);
    for (const item of library.items || []) {
      const base = rowBase(library, item, blockMap);
      const text = getText(library, item);
      const timeSignals = scoreSignals(text, eraSignals);
      const realityHits = scoreSignals(text, realitySignals);
      const timeAnchors = base.timeAnchors;
      const realityAnchors = base.realityAnchors;
      const normalizedTimeAnchors = base.normalizedTimeAnchors;
      const normalizedRealityAnchors = base.normalizedRealityAnchors;
      const ontologyLevel = base.ontologyLevel;
      const fullRow = {
        ...base,
        participates: excluded ? '否' : '是',
        timeAnchors: timeAnchors.join(' / '),
        realityAnchors: realityAnchors.join(' / '),
        normalizedTimeAnchors: normalizedTimeAnchors.join(' / '),
        normalizedRealityAnchors: normalizedRealityAnchors.join(' / '),
        likelyEra: timeSignals[0]?.axis || '',
        eraScore: timeSignals[0]?.score || 0,
        eraSignals: (timeSignals[0]?.hits || []).join(' / '),
        likelyReality: realityHits[0]?.axis || '',
        realityScore: realityHits[0]?.score || 0,
        realitySignals: (realityHits[0]?.hits || []).join(' / ')
      };
      rows.push(fullRow);
      if (excluded) {
        excludedRows.push(fullRow);
        continue;
      }
      if (timeAnchors.length === 0) missingTimeRows.push(fullRow);
      if (realityAnchors.length === 0 && !ontologyLevel) missingRealityRows.push(fullRow);
      if (
        timeSignals[0] &&
        timeSignals[0].score >= 8 &&
        !normalizedTimeAnchors.includes(timeSignals[0].axis) &&
        !isSuspiciousEraNoise(timeSignals[0], normalizedTimeAnchors)
      ) {
        suspiciousEraRows.push(fullRow);
      }
      if (realityHits[0] && realityAnchors.length > 0 && !normalizedRealityAnchors.includes(realityHits[0].axis)) {
        suspiciousRealityRows.push(fullRow);
      }
    }
  }

  const baseColumns = [
    ['blockName', '模块'],
    ['libraryName', '词库'],
    ['itemName', '词条'],
    ['group', '分组'],
    ['timeAnchors', '现有时间轴'],
    ['realityAnchors', '现有现实锚'],
    ['ontologyLevel', '本体等级'],
    ['likelyEra', '疑似时间'],
    ['eraScore', '时间分', 'right'],
    ['eraSignals', '时间命中'],
    ['likelyReality', '疑似现实'],
    ['realityScore', '现实分', 'right'],
    ['realitySignals', '现实命中'],
    ['def', '定义摘录']
  ];

  const summaryColumns = [
    ['name', '模块'],
    ['count', '数量', 'right']
  ];

  writeCsv(path.join(outputDir, '总表.csv'), [
    ['participates', '参与硬筛选'],
    ['blockId', '模块ID'],
    ['libraryId', '词库ID'],
    ['itemId', '词条ID'],
    ...baseColumns
  ], rows);
  writeCsv(path.join(outputDir, '缺时间轴.csv'), baseColumns, missingTimeRows);
  writeCsv(path.join(outputDir, '缺现实轴.csv'), baseColumns, missingRealityRows);
  writeCsv(path.join(outputDir, '疑似时代漏标.csv'), baseColumns, suspiciousEraRows);
  writeCsv(path.join(outputDir, '疑似现实漏标.csv'), baseColumns, suspiciousRealityRows);

  const totalParticipating = rows.filter(row => row.participates === '是').length;
  const md = [
    '# 概念设计两轴筛选覆盖审计',
    '',
    '用途：只检查，不自动回写。当前硬筛选只按“时间轴 + 现实轴”运行；艺术风格、导演风格、摄影流派等风格库不参与硬筛选。',
    '',
    `总词条：${rows.length}`,
    `参与硬筛选：${totalParticipating}`,
    `不参与硬筛选：${excludedRows.length}`,
    `缺时间轴：${missingTimeRows.length}`,
    `缺现实轴：${missingRealityRows.length}`,
    `疑似时代漏标：${suspiciousEraRows.length}`,
    `疑似现实漏标：${suspiciousRealityRows.length}`,
    '',
    '## 疑似时代漏标模块分布',
    '',
    ...markdownTable(summarizeBy(suspiciousEraRows, 'blockName'), summaryColumns),
    '',
    '## 疑似现实漏标模块分布',
    '',
    ...markdownTable(summarizeBy(suspiciousRealityRows, 'blockName'), summaryColumns),
    '',
    '## 缺时间轴 Top 80',
    '',
    ...markdownTable(missingTimeRows.slice(0, 80), baseColumns),
    '',
    '## 缺现实轴 Top 80',
    '',
    ...markdownTable(missingRealityRows.slice(0, 80), baseColumns),
    '',
    '## 疑似时代漏标 Top 120',
    '',
    ...markdownTable(suspiciousEraRows.sort((a, b) => b.eraScore - a.eraScore).slice(0, 120), baseColumns),
    '',
    '## 疑似现实漏标 Top 120',
    '',
    ...markdownTable(suspiciousRealityRows.sort((a, b) => b.realityScore - a.realityScore).slice(0, 120), baseColumns),
    ''
  ].join('\n');
  fs.writeFileSync(path.join(outputDir, '两轴筛选覆盖审计.md'), md, 'utf8');

  fs.rmSync(tempDir, { recursive: true, force: true });
  console.log(`total=${rows.length}`);
  console.log(`participating=${totalParticipating}`);
  console.log(`missingTime=${missingTimeRows.length}`);
  console.log(`missingReality=${missingRealityRows.length}`);
  console.log(`suspiciousEra=${suspiciousEraRows.length}`);
  console.log(`suspiciousReality=${suspiciousRealityRows.length}`);
  console.log(outputDir);
};

main().catch(error => {
  console.error(error);
  process.exit(1);
});
