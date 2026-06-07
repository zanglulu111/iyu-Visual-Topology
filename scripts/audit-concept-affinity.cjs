const fs = require('fs');
const path = require('path');
const os = require('os');
const esbuild = require('esbuild');

const rootDir = path.resolve(__dirname, '..');
const outputDir = path.join(rootDir, 'outputs', 'concept-affinity-audit');

const entrySource = `
import { CONCEPT_ENGINE_LIBRARY } from ${JSON.stringify(path.join(rootDir, 'data/concept_design/core.ts'))};
import { CONCEPT_AXIS_AUDIT_PROFILES } from ${JSON.stringify(path.join(rootDir, 'data/concept_design/filter/axisAuditProfiles.ts'))};
import { scoreConceptAxisMatch } from ${JSON.stringify(path.join(rootDir, 'data/concept_design/filter/axisScoring.ts'))};
export { CONCEPT_ENGINE_LIBRARY, CONCEPT_AXIS_AUDIT_PROFILES, scoreConceptAxisMatch };
`;

const clusterProfileIds = {
  classical_fantasy: ['wuxia_xianxia', 'xianxia', 'dark_fantasy', 'mythic_epic', 'court', 'historical']
};

const clusterLabels = {
  classical_fantasy: '古典幻想簇'
};

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
  'cd_expression_lib',
  'cd_skin_texture_lib',
  'cd_surface_state_lib',
  'cd_body_features_lib',
  'cd_body_markings_lib',
  'cd_body_damage_lib',
  'cd_body_modification_lib',
  'cd_static_pose_lib',
  'cd_dynamic_action_lib',
  'cd_human_behavior_lib',
  'cd_costume_logic_lib',
  'cd_costume_system_lib',
  'cd_prop_anchor_lib',
  'cd_symbol_system_lib',
  'cd_wear_trace_lib',
  'cd_field_preset_lib',
  'cd_scene_real_lib',
  'cd_scene_surreal_lib',
  'cd_scene_abstract_lib',
  'cd_atmosphere_lib',
  'cd_particles_lib',
  'cd_light_type_lib'
]);

const affinityOrder = {
  strong: 5,
  usable: 4,
  fusion: 3,
  weak: 2,
  low: 1,
  conflict: 0
};

const columns = [
  ['clusterTitle', '类型簇'],
  ['profileTitle', '类型基准'],
  ['libraryName', '词库'],
  ['blockId', '模块ID'],
  ['itemId', '词条ID'],
  ['name', '词条名'],
  ['group', '分组'],
  ['affinityLabel', '六档关系'],
  ['affinityLevel', '六档ID'],
  ['score', '匹配分'],
  ['reason', '命中原因'],
  ['suspicion', '可疑点'],
  ['def', '定义'],
  ['typeTags', '类型标签'],
  ['compatibleTypeTags', '兼容类型'],
  ['eraTags', '时间标签'],
  ['sceneClassTags', '场景大类标签'],
  ['sceneTags', '具体场景标签'],
  ['evidenceTags', '证据标签'],
  ['riskTags', '风险标签'],
  ['conflictTags', '冲突标签']
];

const toArray = value => {
  if (Array.isArray(value)) return value.map(String).filter(Boolean);
  if (typeof value === 'string' && value.trim()) return [value.trim()];
  return [];
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

const getBlockId = libraryId => libraryId.replace(/_lib$/, '');

const getGroupName = item => item.group || item._groupName || item.category || '';

const getDefinition = item => {
  const value = item.def || item.core || item.essence || item.directive || item.description || '';
  if (typeof value === 'string') return value;
  if (value && typeof value === 'object') return Object.values(value).filter(Boolean).join(' / ');
  return '';
};

const compact = values => toArray(values).slice(0, 8).join(' / ');

const buildReason = match => {
  const parts = [
    match.matchedPrimaryGenre.length ? `主类型=${compact(match.matchedPrimaryGenre)}` : '',
    match.matchedGenre.length ? `类型=${compact(match.matchedGenre)}` : '',
    match.matchedCompatibleGenre.length ? `兼容=${compact(match.matchedCompatibleGenre)}` : '',
    match.matchedGravityType.length ? `类型规则=${compact(match.matchedGravityType)}` : '',
    match.matchedNative.length ? `本体=${compact(match.matchedNative)}` : '',
    match.matchedGravityEvidence.length ? `证据=${compact(match.matchedGravityEvidence)}` : '',
    match.matchedEra.length ? `时间=${compact(match.matchedEra)}` : '',
    match.matchedSceneClass.length ? `场景类=${compact(match.matchedSceneClass)}` : '',
    match.matchedScene.length ? `场景=${compact(match.matchedScene)}` : '',
    match.riskHits.length ? `冲突=${compact(match.riskHits)}` : ''
  ].filter(Boolean);
  return parts.join('；') || '无明显命中';
};

const hasAxisMetadata = axis => [
  axis.typeTags,
  axis.compatibleTypeTags,
  axis.eraTags,
  axis.sceneClassTags,
  axis.sceneTags,
  axis.evidenceTags,
  axis.riskTags,
  axis.conflictTags
].some(values => toArray(values).length > 0);

const buildSuspicion = (match, item) => {
  const notes = [];
  if (match.affinityLevel === 'conflict') notes.push('命中冲突排除，需确认是否应硬排除');
  if (match.affinityLevel === 'strong' && match.matchedPrimaryGenre.length === 0 && match.matchedGravityType.length === 0) {
    notes.push('强相关但没有直接类型命中，需人工确认核心证据是否足够专属');
  }
  if (match.affinityLevel === 'weak' && match.score >= 12) notes.push('高分弱相关，可能由泛证据/时间/场景堆分造成');
  if (match.affinityLevel === 'usable' && match.matchedPrimaryGenre.length === 0 && match.matchedCompatibleGenre.length === 0 && match.matchedGravityType.length === 0) {
    notes.push('可用但缺少类型/兼容类型主轴，需检查是否高估');
  }
  if (!hasAxisMetadata(match.axis) && Number(item.ontologyLevel || 1) >= 3) notes.push('高本体词条缺少轴字段');
  if (!hasAxisMetadata(match.axis) && toArray(item.eras).length > 0) notes.push('有时代字段但缺少筛选轴字段');
  return notes.join('；');
};

const buildRowsForCluster = (library, profiles, clusterTitle, scoreConceptAxisMatch) => {
  const rows = [];
  for (const category of library.filter(category => auditedLibraryIds.has(category.id))) {
    const blockId = getBlockId(category.id);
    for (const item of category.items || []) {
      for (const profile of profiles) {
        const match = scoreConceptAxisMatch(item, profile.keywordFilterTags);
        rows.push({
          clusterTitle,
          profileTitle: profile.title,
          libraryName: category.name,
          blockId,
          itemId: item.id || item.name,
          name: item.name,
          group: getGroupName(item),
          affinityLabel: match.affinityLabel,
          affinityLevel: match.affinityLevel,
          score: match.score,
          reason: buildReason(match),
          suspicion: buildSuspicion(match, item),
          def: getDefinition(item),
          typeTags: match.axis.typeTags,
          compatibleTypeTags: match.axis.compatibleTypeTags,
          eraTags: match.axis.eraTags,
          sceneClassTags: match.axis.sceneClassTags,
          sceneTags: match.axis.sceneTags,
          evidenceTags: match.axis.evidenceTags,
          riskTags: match.axis.riskTags,
          conflictTags: match.axis.conflictTags
        });
      }
    }
  }
  return rows;
};

const summarizeProfile = (rows, profileTitle) => {
  const profileRows = rows.filter(row => row.profileTitle === profileTitle);
  const count = level => profileRows.filter(row => row.affinityLevel === level).length;
  return {
    total: profileRows.length,
    strong: count('strong'),
    usable: count('usable'),
    fusion: count('fusion'),
    weak: count('weak'),
    low: count('low'),
    conflict: count('conflict'),
    suspicious: profileRows.filter(row => row.suspicion).length
  };
};

const sortRows = rows => [...rows].sort((a, b) => {
  const affinityDelta = affinityOrder[b.affinityLevel] - affinityOrder[a.affinityLevel];
  if (affinityDelta) return affinityDelta;
  return b.score - a.score;
});

const mdTable = (rows, limit = 30) => {
  const selected = rows.slice(0, limit);
  if (!selected.length) return ['_无_'];
  return [
    '| 词条 | 词库 | 关系 | 分数 | 命中原因 | 可疑点 |',
    '| --- | --- | --- | ---: | --- | --- |',
    ...selected.map(row => `| ${display(row.name)} | ${display(row.libraryName)} | ${row.affinityLabel} | ${row.score} | ${display(row.reason)} | ${display(row.suspicion)} |`)
  ];
};

const buildMarkdown = (clusterTitle, profiles, rows) => {
  const lines = [
    `# 六档关系验收：${clusterTitle}`,
    '',
    '用途：这不是最终定案，而是把算法判定、命中原因和可疑项摊开，方便逐词验收并回写字段。',
    '',
    '## 总览',
    '',
    '| 类型基准 | 总数 | 强相关 | 可用 | 融合候选 | 弱相关 | 低权重 | 冲突排除 | 可疑项 |',
    '| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |'
  ];

  profiles.forEach(profile => {
    const summary = summarizeProfile(rows, profile.title);
    lines.push(`| ${profile.title} | ${summary.total} | ${summary.strong} | ${summary.usable} | ${summary.fusion} | ${summary.weak} | ${summary.low} | ${summary.conflict} | ${summary.suspicious} |`);
  });

  profiles.forEach(profile => {
    const profileRows = rows.filter(row => row.profileTitle === profile.title);
    lines.push('', `## ${profile.title}`, '');
    lines.push('### 强相关 Top', '', ...mdTable(sortRows(profileRows.filter(row => row.affinityLevel === 'strong')), 24));
    lines.push('', '### 可用 Top', '', ...mdTable(sortRows(profileRows.filter(row => row.affinityLevel === 'usable')), 20));
    lines.push('', '### 融合候选 Top', '', ...mdTable(sortRows(profileRows.filter(row => row.affinityLevel === 'fusion')), 20));
    lines.push('', '### 可疑项 Top', '', ...mdTable(sortRows(profileRows.filter(row => row.suspicion)), 30));
  });

  return `${lines.join('\n')}\n`;
};

const cleanOutput = () => {
  fs.mkdirSync(outputDir, { recursive: true });
  fs.readdirSync(outputDir)
    .filter(fileName => /^六档关系-/.test(fileName))
    .forEach(fileName => fs.rmSync(path.join(outputDir, fileName), { force: true }));
};

const main = async () => {
  cleanOutput();
  const tempDir = path.join(os.tmpdir(), `concept-affinity-audit-${Date.now()}`);
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
  const data = await import(`file://${bundlePath}`);

  for (const [clusterId, profileIds] of Object.entries(clusterProfileIds)) {
    const clusterTitle = clusterLabels[clusterId] || clusterId;
    const profiles = profileIds.map(id => data.CONCEPT_AXIS_AUDIT_PROFILES.find(profile => profile.id === id)).filter(Boolean);
    const rows = buildRowsForCluster(data.CONCEPT_ENGINE_LIBRARY, profiles, clusterTitle, data.scoreConceptAxisMatch);
    const suspiciousRows = rows.filter(row => row.suspicion);
    writeCsv(path.join(outputDir, `六档关系-${clusterTitle}-总表.csv`), rows);
    writeCsv(path.join(outputDir, `六档关系-${clusterTitle}-可疑项.csv`), suspiciousRows);
    fs.writeFileSync(path.join(outputDir, `六档关系-${clusterTitle}-验收.md`), buildMarkdown(clusterTitle, profiles, rows), 'utf8');
    console.log(`${clusterTitle}: ${rows.length} rows, ${suspiciousRows.length} suspicious rows`);
  }

  fs.rmSync(tempDir, { recursive: true, force: true });
  console.log(outputDir);
};

main().catch(error => {
  console.error(error);
  process.exit(1);
});
