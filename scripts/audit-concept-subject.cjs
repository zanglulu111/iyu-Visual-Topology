const fs = require('fs');
const path = require('path');
const os = require('os');
const { pathToFileURL } = require('url');
const esbuild = require('esbuild');

const rootDir = path.resolve(__dirname, '..');
const outputDir = path.join(rootDir, 'outputs', 'concept-subject-audit');
const tempDir = path.join(os.tmpdir(), `concept-subject-audit-${Date.now()}`);

const entrySource = `
import { CONCEPT_ENGINE_LIBRARY } from ${JSON.stringify(path.join(rootDir, 'data/concept_design/core.ts'))};
import { CONCEPT_AXIS_AUDIT_PROFILES } from ${JSON.stringify(path.join(rootDir, 'data/concept_design/filter/axisAuditProfiles.ts'))};
import { normalizeConceptAxisTags } from ${JSON.stringify(path.join(rootDir, 'data/concept_design/filter/axisTags.ts'))};
import { scoreConceptAxisMatch } from ${JSON.stringify(path.join(rootDir, 'data/concept_design/filter/axisScoring.ts'))};
export { CONCEPT_ENGINE_LIBRARY, CONCEPT_AXIS_AUDIT_PROFILES, normalizeConceptAxisTags, scoreConceptAxisMatch };
`;

const auditedLibraryIds = new Set([
  'cd_age_lib',
  'cd_gender_lib',
  'cd_species_lib',
  'cd_occupation_lib',
  'cd_persona_lib',
  'cd_body_type_lib',
  'cd_hair_color_lib',
  'cd_hair_style_f_lib',
  'cd_hair_style_m_lib',
  'cd_beard_style_lib',
  'cd_eye_color_lib',
  'cd_eye_shape_lib',
  'cd_eye_fx_lib',
  'cd_face_features_lib',
  'cd_makeup_style_lib',
  'cd_skin_texture_lib',
  'cd_surface_state_lib',
  'cd_body_features_lib',
  'cd_body_markings_lib',
  'cd_body_damage_lib',
  'cd_body_modification_lib'
]);

const hardGovernedBlockIds = new Set([
  'cd_occupation',
  'cd_persona',
  'cd_species',
  'cd_eye_fx',
  'cd_body_features',
  'cd_body_markings',
  'cd_body_damage',
  'cd_body_modification'
]);

const softGovernedBlockIds = new Set([
  'cd_hair_color',
  'cd_hair_style_f',
  'cd_hair_style_m',
  'cd_beard_style',
  'cd_makeup_style',
  'cd_surface_state',
  'cd_skin_texture'
]);

const columns = [
  ['profileTitle', '轴基准'],
  ['libraryName', '词库'],
  ['blockId', '模块ID'],
  ['group', '分组'],
  ['itemId', '词条ID'],
  ['name', '词条名'],
  ['grade', '匹配等级'],
  ['score', '匹配分'],
  ['recommended', '是否推荐'],
  ['softRecommended', '是否弱推荐'],
  ['fieldGap', '是否字段不足'],
  ['neutral', '是否中性'],
  ['nativeScore', '本体分'],
  ['evidenceScore', '证据分'],
  ['genreScore', '类型分'],
  ['compatibleTypeScore', '兼容类型分'],
  ['eraScore', '时间分'],
  ['cultureScore', '文化分'],
  ['spaceScore', '空间分'],
  ['riskPenalty', '风险扣分'],
  ['matchedNative', '命中本体标签'],
  ['matchedPrimaryGenre', '命中主类型'],
  ['matchedGenre', '命中类型'],
  ['matchedCompatibleGenre', '命中兼容类型'],
  ['matchedEra', '命中时间'],
  ['matchedCulture', '命中文化'],
  ['matchedSpace', '命中空间'],
  ['ontologyLevel', '本体等级'],
  ['risk', '风险等级'],
  ['genderCoding', '性别编码'],
  ['subjectScope', '主体范围'],
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

const uniq = values => [...new Set(values.filter(Boolean))];

const intersect = (a, b) => {
  const set = new Set(a.map(value => value.toLowerCase()));
  return b.filter(value => set.has(String(value).toLowerCase()));
};

const weakSubjectNativeKeywordTags = new Set([
  'symbol',
  'surreal',
  'social',
  'realistic',
  'historical',
  'body',
  'technology',
  'lab',
  'ritual',
  'magic',
  'costume',
  'institution',
  'period',
  'wear',
  'weapon',
  'combat',
  'training',
  'travel',
  'survival',
  'hazard'
]);

const strongSubjectNativeTags = values => toArray(values).filter(value => !weakSubjectNativeKeywordTags.has(value.toLowerCase()));

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

const cleanPreviousOutputs = () => {
  if (!fs.existsSync(outputDir)) return;
  fs.readdirSync(outputDir)
    .filter(fileName => /^主体本体-.*\.(csv|json|md)$/.test(fileName))
    .forEach(fileName => fs.rmSync(path.join(outputDir, fileName), { force: true }));
};

const hasAxisMetadata = axis => [
  axis.typeTags,
  axis.sceneClassTags,
  axis.sceneTags,
  axis.evidenceTags
].some(values => toArray(values).length > 0);

const broadEraSet = ['primitive', 'slave', 'feudal', 'early_modern', 'industrial', 'modern', 'contemporary', 'near_future', 'far_future', 'timeless'];

const hasEraConstraint = axis => {
  const eras = toArray(axis.eraTags);
  if (eras.length === 0) return false;
  return eras.length < broadEraSet.length || !broadEraSet.every(value => eras.includes(value));
};

const strictIdentityBlocks = new Set(['cd_persona', 'cd_occupation']);

const isDefaultRecommended = (blockId, score, match) => {
  if (strictIdentityBlocks.has(blockId)) {
    return score >= 14 && match.hasPrimaryAxis && match.matchedPrimaryGenre.length > 0;
  }
  return score >= 8 && match.hasPrimaryAxis;
};

const scoreItem = (item, blockId, profile, normalizeConceptAxisTags, scoreConceptAxisMatch) => {
  const match = scoreConceptAxisMatch(item, profile.keywordFilterTags, {
    strongNativeTags: strongSubjectNativeTags(profile.keywordFilterTags.nativeTags)
  });
  const axis = match.axis;
  const keywordFilterTags = profile.keywordFilterTags;
  const matchedNative = match.matchedNative;
  const matchedEvidence = match.matchedEvidence;
  const matchedSpace = match.matchedScene;
  const matchedGenre = match.matchedGenre;
  const matchedPrimaryGenre = match.matchedPrimaryGenre;
  const matchedCompatibleGenre = match.matchedCompatibleGenre;
  const eraConstrained = hasEraConstraint(axis);
  const matchedEra = match.matchedEra;
  const matchedCulture = match.matchedSceneClass;
  const riskHits = match.riskHits;

  const nativeScore = match.nativeScore;
  const evidenceScore = match.evidenceScore;
  const genreScore = match.genreScore;
  const compatibleTypeScore = match.compatibleTypeScore;
  const eraScore = match.eraScore;
  const cultureScore = match.sceneClassScore;
  const spaceScore = match.sceneScore;
  const riskPenalty = match.riskPenalty;
  const rawScore = match.score;
  const adultOnlyWithoutAdultTheme = Boolean(item.adultOnly) && !keywordFilterTags.nativeTags.includes('adult');
  const ontologySubjectBlockIds = new Set([
    'cd_species',
    'cd_eye_fx',
    'cd_body_features',
    'cd_body_markings',
    'cd_body_damage',
    'cd_body_modification'
  ]);
  const groomingBlockIds = new Set([
    'cd_hair_color',
    'cd_hair_style_f',
    'cd_hair_style_m',
    'cd_beard_style',
    'cd_makeup_style'
  ]);
  const faceIdentityBlockIds = new Set([
    'cd_age',
    'cd_gender',
    'cd_eye_color',
    'cd_eye_shape',
    'cd_face_features'
  ]);
  const bodyIdentityBlockIds = new Set([
    'cd_body_type'
  ]);
  const bodyEvidenceBlockIds = new Set([
    'cd_skin_texture',
    'cd_surface_state'
  ]);
  const occupationBlockIds = new Set([
    'cd_occupation'
  ]);
  const personaBlockIds = new Set([
    'cd_persona'
  ]);
  const lacksPrimarySubjectAxis =
    (ontologySubjectBlockIds.has(blockId) || groomingBlockIds.has(blockId) || faceIdentityBlockIds.has(blockId) || bodyIdentityBlockIds.has(blockId) || bodyEvidenceBlockIds.has(blockId) || occupationBlockIds.has(blockId) || personaBlockIds.has(blockId)) &&
    nativeScore < 5 &&
    matchedPrimaryGenre.length === 0;
  const score = adultOnlyWithoutAdultTheme ? Math.min(rawScore, 7) : lacksPrimarySubjectAxis ? Math.min(rawScore, 7) : rawScore;

  const governed = hardGovernedBlockIds.has(blockId) || softGovernedBlockIds.has(blockId) || Number(item.ontologyLevel || 1) >= 3 || eraConstrained;
  const fieldGap = governed && !hasAxisMetadata(axis) && (hardGovernedBlockIds.has(blockId) || Number(item.ontologyLevel || 1) >= 3 || eraConstrained);
  const neutral = score === 0 && !hasAxisMetadata(axis);
  const recommended = isDefaultRecommended(blockId, score, match);
  const softRecommended = score > 0 && !recommended;
  const grade = recommended
    ? score >= 14 ? '强推荐' : '推荐'
    : softRecommended
      ? '弱推荐'
      : fieldGap
        ? '待补字段'
        : neutral
          ? '中性'
          : '不推荐';
  const note = fieldGap
    ? '该词条有时代、本体等级或模块治理需求，但缺少类型/本体/文化/空间轴字段，无法稳定进入筛选池。'
    : neutral
      ? '中性身体细节：不参与主题强筛选，可作为基础外观池保留。'
      : softRecommended
        ? '只排序靠前，不建议进入默认随机池。'
        : '';

  return {
    recommended,
    softRecommended,
    fieldGap,
    neutral,
    score,
    grade,
    nativeScore,
    evidenceScore,
    genreScore,
    compatibleTypeScore,
    eraScore,
    cultureScore,
    spaceScore,
    riskPenalty,
    matchedNative,
    matchedPrimaryGenre,
    matchedGenre,
    matchedCompatibleGenre,
    matchedEra,
    matchedCulture,
    matchedSpace,
    axis,
    note
  };
};

const buildProfileMarkdown = (profile, rows) => {
  const byLibrary = rows.reduce((acc, row) => {
    acc[row.libraryName] ||= [];
    acc[row.libraryName].push(row);
    return acc;
  }, {});
  const lines = [
    `# 主体本体筛选验收：${profile.title}`,
    '',
    `基准：${profile.desc}`,
    '',
    '| 词库 | 总数 | 强推荐 | 推荐 | 弱推荐 | 中性 | 待补字段 |',
    '| --- | ---: | ---: | ---: | ---: | ---: | ---: |'
  ];
  Object.entries(byLibrary).forEach(([libraryName, items]) => {
    lines.push(`| ${libraryName} | ${items.length} | ${items.filter(item => item.grade === '强推荐').length} | ${items.filter(item => item.grade === '推荐').length} | ${items.filter(item => item.grade === '弱推荐').length} | ${items.filter(item => item.grade === '中性').length} | ${items.filter(item => item.fieldGap).length} |`);
  });

  lines.push('', '## 各词库前 16 个推荐项');
  Object.entries(byLibrary).forEach(([libraryName, items]) => {
    const recommended = items.filter(row => row.recommended).sort((a, b) => b.score - a.score).slice(0, 16);
    lines.push('', `### ${libraryName}`, '', '| 分组 | 词条 | 等级 | 分数 | 命中 |', '| --- | --- | --- | ---: | --- |');
    if (recommended.length === 0) {
      lines.push('| - | - | - | 0 | - |');
    } else {
      recommended.forEach(row => {
        lines.push(`| ${row.group || ''} | ${row.name} | ${row.grade} | ${row.score} | ${display([row.matchedNative, row.matchedGenre, row.matchedEra, row.matchedCulture, row.matchedSpace].flat())} |`);
      });
    }
  });

  lines.push('', '## 待补字段样例', '', '| 词库 | 分组 | 词条 | 本体等级 | 时代 | 提示 |', '| --- | --- | --- | ---: | --- | --- |');
  const gapRows = rows.filter(row => row.fieldGap).slice(0, 60);
  if (gapRows.length === 0) {
    lines.push('| - | - | - | 0 | - | - |');
  } else {
    gapRows.forEach(row => {
      lines.push(`| ${row.libraryName} | ${row.group || ''} | ${row.name} | ${row.ontologyLevel || ''} | ${display(row.eras)} | ${row.note} |`);
    });
  }
  return `${lines.join('\n')}\n`;
};

const buildOverviewMarkdown = profileRows => {
  const lines = [
    '# 主体本体多轴基准验收总览',
    '',
    '| 轴基准 | 总数 | 强推荐 | 推荐 | 弱推荐 | 中性 | 待补字段 | 输出文件 |',
    '| --- | ---: | ---: | ---: | ---: | ---: | ---: | --- |'
  ];
  profileRows.forEach(({ profile, rows }) => {
    lines.push(`| ${profile.title} | ${rows.length} | ${rows.filter(row => row.grade === '强推荐').length} | ${rows.filter(row => row.grade === '推荐').length} | ${rows.filter(row => row.grade === '弱推荐').length} | ${rows.filter(row => row.grade === '中性').length} | ${rows.filter(row => row.fieldGap).length} | ${profile.fileBase}.md |`);
  });
  lines.push('', '## 待补字段最高的词库', '', '| 词库 | 待补字段数 |', '| --- | ---: |');
  const allRows = profileRows.flatMap(item => item.rows);
  const gapByLibrary = allRows.reduce((acc, row) => {
    if (row.fieldGap) acc[row.libraryName] = (acc[row.libraryName] || 0) + 1;
    return acc;
  }, {});
  Object.entries(gapByLibrary)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 20)
    .forEach(([libraryName, count]) => lines.push(`| ${libraryName} | ${count} |`));
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
        ontologyLevel: item.ontologyLevel,
        risk: item.risk,
        genderCoding: item.genderCoding,
        subjectScope: item.subjectScope,
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
  cleanPreviousOutputs();
  const profiles = data.CONCEPT_AXIS_AUDIT_PROFILES.map(profile => ({
    ...profile,
    fileBase: profile.fileBase.replace(/^轴基准-/, '主体本体-')
  }));
  const profileRows = profiles.map(profile => ({
    profile,
    rows: buildRowsForProfile(data.CONCEPT_ENGINE_LIBRARY, profile, data.normalizeConceptAxisTags, data.scoreConceptAxisMatch)
  }));

  profileRows.forEach(({ profile, rows }) => {
    writeCsv(path.join(outputDir, `${profile.fileBase}.csv`), rows);
    fs.writeFileSync(path.join(outputDir, `${profile.fileBase}.json`), JSON.stringify(rows, null, 2), 'utf8');
    fs.writeFileSync(path.join(outputDir, `${profile.fileBase}.md`), buildProfileMarkdown(profile, rows), 'utf8');
  });

  const allRows = profileRows.flatMap(item => item.rows);
  writeCsv(path.join(outputDir, '主体本体-多轴基准验收总表.csv'), allRows);
  fs.writeFileSync(path.join(outputDir, '主体本体-多轴基准验收总表.json'), JSON.stringify(allRows, null, 2), 'utf8');
  fs.writeFileSync(path.join(outputDir, '主体本体-多轴基准验收总览.md'), buildOverviewMarkdown(profileRows), 'utf8');

  console.log(`Audited ${allRows.length} subject rows across ${profiles.length} axis profiles.`);
  console.log(outputDir);
}

main().catch(error => {
  console.error(error);
  process.exit(1);
});
