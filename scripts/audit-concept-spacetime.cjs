const fs = require('fs');
const path = require('path');
const os = require('os');
const { pathToFileURL } = require('url');
const esbuild = require('esbuild');

const rootDir = path.resolve(__dirname, '..');
const outputDir = path.join(rootDir, 'outputs', 'concept-spacetime-audit');
const tempDir = path.join(os.tmpdir(), `concept-spacetime-audit-${Date.now()}`);

const entrySource = `
import { CONCEPT_ENGINE_LIBRARY } from ${JSON.stringify(path.join(rootDir, 'data/concept_design/core.ts'))};
import { CONCEPT_AXIS_AUDIT_PROFILES } from ${JSON.stringify(path.join(rootDir, 'data/concept_design/filter/axisAuditProfiles.ts'))};
import { normalizeConceptAxisTags } from ${JSON.stringify(path.join(rootDir, 'data/concept_design/filter/axisTags.ts'))};
import { scoreConceptAxisMatch } from ${JSON.stringify(path.join(rootDir, 'data/concept_design/filter/axisScoring.ts'))};
export { CONCEPT_ENGINE_LIBRARY, CONCEPT_AXIS_AUDIT_PROFILES, normalizeConceptAxisTags, scoreConceptAxisMatch };
`;

const auditedLibraryIds = new Set([
  'cd_field_preset_lib',
  'cd_scene_real_lib',
  'cd_scene_surreal_lib',
  'cd_scene_abstract_lib',
  'cd_atmosphere_lib',
  'cd_particles_lib',
  'cd_light_type_lib'
]);

const majorSceneBlockIds = new Set([
  'cd_field_preset',
  'cd_scene_real',
  'cd_scene_surreal',
  'cd_scene_abstract',
  'cd_spacetime_coordinate',
  'cd_space_anchor_exact',
  'cd_atmosphere',
  'cd_particles',
  'cd_light_type'
]);

const columns = [
  ['profileTitle', '验收基准'],
  ['libraryName', '词库'],
  ['blockId', '模块ID'],
  ['group', '分组'],
  ['itemId', '词条ID'],
  ['name', '词条名'],
  ['recommended', '是否直接推荐'],
  ['softRecommended', '是否弱推荐'],
  ['fusionCandidate', '是否融合候选'],
  ['score', '匹配分'],
  ['grade', '匹配等级'],
  ['nativeScore', '本体分'],
  ['genreScore', '类型分'],
  ['eraScore', '时间分'],
  ['cultureScore', '文化分'],
  ['spaceScore', '空间分'],
  ['riskPenalty', '风险扣分'],
  ['matchedNative', '命中本体标签'],
  ['matchedGenre', '命中类型'],
  ['matchedEra', '命中时间'],
  ['matchedCulture', '命中文化'],
  ['matchedSpace', '命中空间'],
  ['riskHits', '命中风险'],
  ['typeTags', '类型标签'],
  ['eraTags', '时间标签'],
  ['sceneClassTags', '场景大类标签'],
  ['sceneTags', '场景标签'],
  ['evidenceTags', '证据标签'],
  ['commonLevel', '通用度'],
  ['riskTags', '风险标签'],
  ['conflictTags', '冲突标签'],
  ['note', '验收提示']
];

const toArray = value => {
  if (Array.isArray(value)) return value.map(String).filter(Boolean);
  if (typeof value === 'string' && value.trim()) return [value.trim()];
  return [];
};

const intersect = (a, b) => {
  const set = new Set(a.map(value => value.toLowerCase()));
  return b.filter(value => set.has(String(value).toLowerCase()));
};

const uniq = values => [...new Set(values.filter(Boolean))];

const weakNativeKeywordTags = new Set(['symbol', 'surreal', 'social', 'realistic', 'historical']);
const weakMajorSceneNativeKeywordTags = new Set([
  ...weakNativeKeywordTags,
  'combat',
  'weapon',
  'training',
  'travel',
  'ritual',
  'magic',
  'survival',
  'hazard',
  'wear',
  'period',
  'costume',
  'institution'
]);

const strongNativeFilterTags = (values, majorScene = false) => {
  const weakSet = majorScene ? weakMajorSceneNativeKeywordTags : weakNativeKeywordTags;
  return values.filter(value => !weakSet.has(String(value).toLowerCase()));
};

const scoreItem = (item, blockId, profile, normalizeConceptAxisTags, scoreConceptAxisMatch) => {
  const keywordFilterTags = profile.keywordFilterTags;
  const isMajorScene = majorSceneBlockIds.has(blockId);
  const strongNativeTags = strongNativeFilterTags(keywordFilterTags.nativeTags, isMajorScene);
  const match = scoreConceptAxisMatch(item, keywordFilterTags, { strongNativeTags });
  const axis = match.axis;
  const matchedNative = match.matchedNative;
  const matchedSpace = match.matchedScene;
  const matchedGenre = match.matchedGenre;
  const matchedEra = match.matchedEra;
  const matchedCulture = match.matchedSceneClass;
  const riskHits = match.riskHits;

  const nativeScore = match.nativeScore;
  const spaceScore = match.sceneScore;
  const genreScore = match.genreScore;
  const eraScore = match.eraScore;
  const cultureScore = match.sceneClassScore;
  const riskPenalty = match.riskPenalty;
  const rawScore = match.score;
  const primaryAxisScore = match.strongPrimaryScore;
  const directAxisScore = nativeScore + genreScore + cultureScore + match.gravityScore;
  const secondaryAxisScore = eraScore + spaceScore;
  const blockedByWeakAxis = isMajorScene && primaryAxisScore < 7;
  const score = blockedByWeakAxis ? 0 : rawScore;
  const directRecommended = score >= 8 && match.hasPrimaryAxis;
  const softRecommended = score > 0 && score < 8;
  const recommended = directRecommended;
  const fusionCandidate = !directRecommended && isMajorScene && directAxisScore <= 0 && secondaryAxisScore >= 7;
  const grade = score > 0
    ? score >= 14
      ? '强推荐'
      : score >= 8
        ? '推荐'
        : '弱推荐'
    : fusionCandidate
      ? '融合候选'
      : blockedByWeakAxis
        ? '主轴不足，不推荐'
        : '不推荐';

  const note = fusionCandidate
    ? '时间/空间接近，但没有命中类型、文化或强本体主轴；适合跨界融合，不适合默认随机。'
    : blockedByWeakAxis
      ? '只命中时间、空间或泛本体弱标签，没有命中类型/文化/强本体主轴。'
      : recommended && spaceScore > 0 && directAxisScore <= 0
        ? '细节词库可允许仅空间推荐；若用于主场景需谨慎。'
        : '';

  return {
    recommended,
    softRecommended,
    fusionCandidate,
    score,
    grade,
    nativeScore,
    genreScore,
    eraScore,
    cultureScore,
    spaceScore,
    riskPenalty,
    matchedNative,
    matchedGenre,
    matchedEra,
    matchedCulture,
    matchedSpace,
    riskHits,
    axis,
    note
  };
};

const display = value => {
  if (value === undefined || value === null) return '';
  if (Array.isArray(value)) return value.join(' | ');
  if (typeof value === 'object') return JSON.stringify(value);
  return String(value);
};

const csvEscape = value => {
  const text = display(value);
  if (/[",\n\r]/.test(text)) return `"${text.replace(/"/g, '""')}"`;
  return text;
};

const writeCsv = (filePath, rows) => {
  const lines = [
    columns.map(([, label]) => csvEscape(label)).join(','),
    ...rows.map(row => columns.map(([key]) => csvEscape(row[key])).join(','))
  ];
  fs.writeFileSync(filePath, `${lines.join('\n')}\n`, 'utf8');
};

const buildProfileMarkdown = (profile, rows) => {
  const byLibrary = rows.reduce((acc, row) => {
    acc[row.libraryName] ||= [];
    acc[row.libraryName].push(row);
    return acc;
  }, {});
  const lines = [
    `# 时空场域筛选验收：${profile.title}`,
    '',
    `基准：${profile.desc}`,
    '',
    '| 词库 | 总数 | 直接推荐 | 强推荐 | 融合候选 | 主轴不足 |',
    '| --- | ---: | ---: | ---: | ---: | ---: |'
  ];
  Object.entries(byLibrary).forEach(([libraryName, items]) => {
    lines.push(`| ${libraryName} | ${items.length} | ${items.filter(item => item.recommended).length} | ${items.filter(item => item.grade === '强推荐').length} | ${items.filter(item => item.fusionCandidate).length} | ${items.filter(item => item.grade === '主轴不足，不推荐').length} |`);
  });
  lines.push('', '## 各词库前 20 个直接推荐');
  Object.entries(byLibrary).forEach(([libraryName, items]) => {
    const recommended = items.filter(row => row.recommended).sort((a, b) => b.score - a.score).slice(0, 20);
    lines.push('', `### ${libraryName}`, '', '| 分组 | 词条 | 等级 | 分数 | 命中 |', '| --- | --- | --- | ---: | --- |');
    if (recommended.length === 0) {
      lines.push('| - | - | - | 0 | - |');
    } else {
      recommended.forEach(row => {
        lines.push(`| ${row.group || ''} | ${row.name} | ${row.grade} | ${row.score} | ${display([row.matchedNative, row.matchedGenre, row.matchedEra, row.matchedCulture, row.matchedSpace].flat())} |`);
      });
    }
  });
  lines.push('', '## 弱推荐样例', '', '| 词库 | 分组 | 词条 | 分数 | 命中 | 提示 |', '| --- | --- | --- | ---: | --- | --- |');
  const softRows = rows.filter(row => row.softRecommended).sort((a, b) => b.score - a.score).slice(0, 40);
  if (softRows.length === 0) {
    lines.push('| - | - | - | 0 | - | - |');
  } else {
    softRows.forEach(row => {
      lines.push(`| ${row.libraryName} | ${row.group || ''} | ${row.name} | ${row.score} | ${display([row.matchedNative, row.matchedGenre, row.matchedEra, row.matchedCulture, row.matchedSpace].flat())} | 只排序靠前，不进入默认随机池。 |`);
    });
  }
  lines.push('', '## 融合候选样例', '', '| 词库 | 分组 | 词条 | 分数 | 命中 | 提示 |', '| --- | --- | --- | ---: | --- | --- |');
  const fusionRows = rows.filter(row => row.fusionCandidate).sort((a, b) => (b.eraScore + b.spaceScore) - (a.eraScore + a.spaceScore)).slice(0, 40);
  if (fusionRows.length === 0) {
    lines.push('| - | - | - | 0 | - | - |');
  } else {
    fusionRows.forEach(row => {
      lines.push(`| ${row.libraryName} | ${row.group || ''} | ${row.name} | ${row.score} | ${display([row.matchedEra, row.matchedSpace].flat())} | ${row.note} |`);
    });
  }
  return `${lines.join('\n')}\n`;
};

const buildOverviewMarkdown = (profileRows) => {
  const lines = [
    '# 时空场域多基准验收总览',
    '',
    '| 基准 | 总数 | 直接推荐 | 强推荐 | 融合候选 | 主轴不足 | 输出文件 |',
    '| --- | ---: | ---: | ---: | ---: | ---: | --- |'
  ];
  profileRows.forEach(({ profile, rows }) => {
    lines.push(`| ${profile.title} | ${rows.length} | ${rows.filter(row => row.recommended).length} | ${rows.filter(row => row.grade === '强推荐').length} | ${rows.filter(row => row.fusionCandidate).length} | ${rows.filter(row => row.grade === '主轴不足，不推荐').length} | ${profile.fileBase}.md |`);
  });
  lines.push('', '## 场域预设直接推荐快照', '', '| 基准 | 推荐项 |', '| --- | --- |');
  profileRows.forEach(({ profile, rows }) => {
    const items = rows
      .filter(row => row.libraryName === '场域预设' && row.recommended)
      .sort((a, b) => b.score - a.score)
      .slice(0, 12)
      .map(row => `${row.name}(${row.score})`)
      .join(' / ');
    lines.push(`| ${profile.title} | ${items || '-'} |`);
  });
  return `${lines.join('\n')}\n`;
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

const buildRowsForProfile = (library, profile, normalizeConceptAxisTags, scoreConceptAxisMatch) => library
  .filter(category => auditedLibraryIds.has(category.id))
  .flatMap(category => {
    const blockId = category.id.replace(/_lib$/, '');
    return (category.items || []).map(item => {
      const score = scoreItem(item, blockId, profile, normalizeConceptAxisTags, scoreConceptAxisMatch);
      const axis = score.axis;
      return {
        profileId: profile.id,
        profileTitle: profile.title,
        libraryName: category.name,
        blockId,
        group: item.group,
        itemId: item.id,
        name: item.name,
        ...score,
        typeTags: axis.typeTags,
        eraTags: axis.eraTags,
        sceneClassTags: axis.sceneClassTags,
        sceneTags: axis.sceneTags,
        evidenceTags: axis.evidenceTags,
        commonLevel: axis.commonLevel,
        riskTags: axis.riskTags,
        conflictTags: axis.conflictTags
      };
    });
  });

async function main() {
  const data = await loadData();
  fs.mkdirSync(outputDir, { recursive: true });
  const auditProfiles = data.CONCEPT_AXIS_AUDIT_PROFILES.map(profile => ({
    ...profile,
    fileBase: profile.fileBase.replace(/^轴基准-/, '时空场域-')
  }));

  const profileRows = auditProfiles.map(profile => ({
    profile,
    rows: buildRowsForProfile(data.CONCEPT_ENGINE_LIBRARY, profile, data.normalizeConceptAxisTags, data.scoreConceptAxisMatch)
  }));

  profileRows.forEach(({ profile, rows }) => {
    writeCsv(path.join(outputDir, `${profile.fileBase}.csv`), rows);
    fs.writeFileSync(path.join(outputDir, `${profile.fileBase}.json`), JSON.stringify(rows, null, 2), 'utf8');
    fs.writeFileSync(path.join(outputDir, `${profile.fileBase}.md`), buildProfileMarkdown(profile, rows), 'utf8');
  });

  const allRows = profileRows.flatMap(item => item.rows);
  writeCsv(path.join(outputDir, '时空场域-多基准验收总表.csv'), allRows);
  fs.writeFileSync(path.join(outputDir, '时空场域-多基准验收总表.json'), JSON.stringify(allRows, null, 2), 'utf8');
  fs.writeFileSync(path.join(outputDir, '时空场域-多基准验收总览.md'), buildOverviewMarkdown(profileRows), 'utf8');

  console.log(`Audited ${allRows.length} spacetime rows across ${auditProfiles.length} axis profiles.`);
  console.log(outputDir);
}

main().catch(error => {
  console.error(error);
  process.exit(1);
});
