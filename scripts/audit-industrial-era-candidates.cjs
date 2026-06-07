const fs = require('fs');
const path = require('path');
const os = require('os');
const esbuild = require('esbuild');

const rootDir = path.resolve(__dirname, '..');
const outputDir = path.join(rootDir, 'outputs', 'concept-era-audit');

const entrySource = `
import { CONCEPT_ENGINE_LIBRARY } from ${JSON.stringify(path.join(rootDir, 'data/concept_design/core.ts'))};
export { CONCEPT_ENGINE_LIBRARY };
`;

const toArray = value => {
  if (Array.isArray(value)) return value.map(String).filter(Boolean);
  if (typeof value === 'string' && value.trim()) return [value.trim()];
  return [];
};

const textOf = value => {
  if (!value) return '';
  if (Array.isArray(value)) return value.join(' ');
  if (typeof value === 'object') return Object.values(value).map(textOf).join(' ');
  return String(value);
};

const getEras = item => Array.from(new Set([
  ...toArray(item.eras),
  ...toArray(item.eraTags),
  ...toArray(item.timeTags),
  ...toArray(item.compatibleEras),
  ...toArray(item.mediaEra),
  ...toArray(item.styleEra)
]));

const getSearchText = (library, item) => [
  library.id,
  library.name,
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
  item.publicFilterTags,
  item.nativeTags,
  item.evidenceTags,
  item.sceneTags,
  item.spaceTags,
  item.cultureTags,
  item.compatibleCultures,
  item.compatibleSpaces
].map(textOf).join(' ').toLowerCase();

const industrialSignals = [
  ['industrial', 4, 'industrial 字段/英文', 'word'],
  ['工业', 4, '工业词面'],
  ['factory', 4, '工厂', 'word'],
  ['工厂', 4, '工厂'],
  ['workshop', 3, '车间/工坊', 'word'],
  ['车间', 4, '车间'],
  ['railway', 4, '铁路', 'word'],
  ['railroad', 4, '铁路', 'word'],
  ['铁路', 4, '铁路'],
  ['列车', 4, '列车'],
  ['火车', 4, '火车'],
  ['steam', 4, '蒸汽', 'word'],
  ['蒸汽', 4, '蒸汽'],
  ['electric', 3, '电气/电力', 'word'],
  ['电气', 4, '电气'],
  ['电力', 3, '电力'],
  ['machine', 3, '机器', 'word'],
  ['机械', 4, '机械'],
  ['mechanic', 3, '机械职业', 'word'],
  ['engineer', 2, '工程职业', 'word'],
  ['工程师', 3, '工程师'],
  ['矿工', 4, '矿工'],
  ['miner', 4, '矿工', 'word'],
  ['焊工', 4, '焊工'],
  ['welder', 4, '焊工', 'word'],
  ['shipyard', 4, '船厂', 'word'],
  ['船厂', 4, '船厂'],
  ['warehouse', 3, '仓储', 'word'],
  ['仓库', 3, '仓储'],
  ['uniform', 2, '制服', 'word'],
  ['制服', 2, '制服'],
  ['victorian', 4, '维多利亚', 'word'],
  ['维多利亚', 4, '维多利亚'],
  ['edwardian', 4, '爱德华时代', 'word'],
  ['民国', 4, '民国'],
  ['明治', 4, '明治'],
  ['showa', 3, '昭和', 'word'],
  ['昭和', 3, '昭和'],
  ['二战', 4, '二战'],
  ['world war', 4, '世界大战', 'phrase'],
  ['wwi', 4, '一战', 'word'],
  ['wwii', 4, '二战', 'word'],
  ['interwar', 4, '战间期', 'word'],
  ['modernity', 3, '现代性/近代性', 'word'],
  ['近代', 4, '近代'],
  ['电报', 4, '电报'],
  ['telegraph', 4, '电报', 'word'],
  ['newspaper', 2, '报纸/新闻业', 'word'],
  ['报纸', 3, '报纸'],
  ['assembly line', 4, '流水线', 'phrase'],
  ['流水线', 4, '流水线'],
  ['coal', 3, '煤炭', 'word'],
  ['煤', 3, '煤炭'],
  ['石油', 3, '石油'],
  ['smokestack', 4, '烟囱', 'word'],
  ['烟囱', 4, '烟囱']
];

const weakFalsePositiveSignals = [
  'cyberpunk',
  '赛博',
  'near_future',
  'far_future',
  'future',
  'space_station',
  'spaceship',
  '全息',
  'hologram',
  'nanotech',
  '纳米',
  'ai ',
  '人工智能'
];

const escapeRegex = value => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

const signalMatches = (searchText, needle, mode) => {
  if (!mode) return searchText.includes(needle);
  const escaped = escapeRegex(needle);
  if (mode === 'word') return new RegExp(`(^|[^a-z0-9_])${escaped}([^a-z0-9_]|$)`, 'i').test(searchText);
  if (mode === 'phrase') return new RegExp(`(^|[^a-z0-9_])${escaped}([^a-z0-9_]|$)`, 'i').test(searchText);
  return searchText.includes(needle);
};

const csvEscape = value => {
  const text = value === undefined || value === null ? '' : Array.isArray(value) ? value.join(' | ') : String(value);
  if (/[",\n\r]/.test(text)) return `"${text.replace(/"/g, '""')}"`;
  return text;
};

const writeCsv = (filePath, rows) => {
  const columns = [
    ['libraryName', '词库'],
    ['libraryId', '词库ID'],
    ['itemName', '词条'],
    ['itemId', '词条ID'],
    ['group', '分组'],
    ['score', '工业疑似分'],
    ['confidence', '建议等级'],
    ['signals', '命中原因'],
    ['eras', '现有时间锚'],
    ['realityTags', '现实锚'],
    ['def', '定义']
  ];
  const lines = [
    columns.map(([, label]) => csvEscape(label)).join(','),
    ...rows.map(row => columns.map(([key]) => csvEscape(row[key])).join(','))
  ];
  fs.writeFileSync(filePath, `${lines.join('\n')}\n`, 'utf8');
};

const markdownTable = rows => {
  if (!rows.length) return ['_无_'];
  return [
    '| 词条 | 词库 | 分数 | 建议 | 命中原因 | 现有时间锚 |',
    '| --- | --- | ---: | --- | --- | --- |',
    ...rows.map(row => `| ${row.itemName} | ${row.libraryName} | ${row.score} | ${row.confidence} | ${row.signals.join(' / ')} | ${row.eras.join(' / ') || '无'} |`)
  ];
};

const main = async () => {
  fs.mkdirSync(outputDir, { recursive: true });
  const tempDir = path.join(os.tmpdir(), `industrial-era-audit-${Date.now()}`);
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
  const { CONCEPT_ENGINE_LIBRARY } = await import(`file://${bundlePath}`);

  const rows = [];
  for (const library of CONCEPT_ENGINE_LIBRARY) {
    for (const item of library.items || []) {
      const eras = getEras(item);
      if (eras.includes('industrial')) continue;
      const searchText = getSearchText(library, item);
      const hits = industrialSignals.filter(([needle, , , mode]) => signalMatches(searchText, needle, mode));
      if (!hits.length) continue;
      const falsePositiveHits = weakFalsePositiveSignals.filter(needle => searchText.includes(needle));
      const rawScore = hits.reduce((sum, [, weight]) => sum + weight, 0);
      const score = Math.max(0, rawScore - Math.min(falsePositiveHits.length * 2, 6));
      if (score < 4) continue;
      const hasModernAdjacent = eras.some(era => ['early_modern', 'modern', 'contemporary', 'near_future', 'far_future', 'timeless'].includes(era));
      const confidence = score >= 8 && hasModernAdjacent
        ? '建议补 industrial'
        : score >= 6
          ? '人工确认'
          : '低优先级';
      rows.push({
        libraryName: library.name,
        libraryId: library.id,
        itemName: item.name || item.id,
        itemId: item.id || item.name,
        group: item.group || item.category || '',
        score,
        confidence,
        signals: Array.from(new Set(hits.map(([, , reason]) => reason))),
        eras,
        realityTags: toArray(item.realityTags),
        def: textOf(item.def || item.core || item.directive || item.description)
      });
    }
  }

  rows.sort((a, b) => b.score - a.score || a.libraryName.localeCompare(b.libraryName, 'zh-Hans-CN'));
  writeCsv(path.join(outputDir, '疑似工业时代漏标表.csv'), rows);

  const suggested = rows.filter(row => row.confidence === '建议补 industrial').slice(0, 80);
  const confirm = rows.filter(row => row.confidence === '人工确认').slice(0, 80);
  const md = [
    '# 疑似工业时代漏标表',
    '',
    '用途：只审计，不自动回写。命中工业/近代机械化/电气化/工厂城市/战争工业等信号，但现有时间锚没有 `industrial` 的词会被列出。',
    '',
    `总候选：${rows.length}`,
    `建议补 industrial：${rows.filter(row => row.confidence === '建议补 industrial').length}`,
    `人工确认：${rows.filter(row => row.confidence === '人工确认').length}`,
    `低优先级：${rows.filter(row => row.confidence === '低优先级').length}`,
    '',
    '## 建议补 Industrial Top',
    '',
    ...markdownTable(suggested),
    '',
    '## 人工确认 Top',
    '',
    ...markdownTable(confirm)
  ].join('\n');
  fs.writeFileSync(path.join(outputDir, '疑似工业时代漏标表.md'), `${md}\n`, 'utf8');
  fs.rmSync(tempDir, { recursive: true, force: true });
  console.log(`${rows.length} industrial-era candidates`);
  console.log(outputDir);
};

main().catch(error => {
  console.error(error);
  process.exit(1);
});
