const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const outputDir = path.join(rootDir, 'outputs', 'concept-subject-audit');

const themeFilePattern = /^主体本体-(.+)验收\.json$/;
const excludedThemeFiles = new Set(['主体本体-多主题验收总表.json']);

const blockLabels = {
  cd_age: '年龄质感',
  cd_gender: '性别气质',
  cd_species: '幻想种族',
  cd_occupation: '职业身份',
  cd_persona: '人设符号',
  cd_body_type: '轮廓体态',
  cd_hair_color: '发色',
  cd_hair_style_f: '发型-女式',
  cd_hair_style_m: '发型-男式',
  cd_beard_style: '胡子',
  cd_eye_color: '瞳色',
  cd_eye_shape: '眼型',
  cd_eye_fx: '眼部异变',
  cd_face_features: '面部特征',
  cd_makeup_style: '妆容修饰',
  cd_skin_texture: '皮肤本体',
  cd_surface_state: '表面附着',
  cd_body_features: '异形结构',
  cd_body_markings: '身体标记',
  cd_body_damage: '身体损伤',
  cd_body_modification: '身体改造'
};

const blockPolicies = {
  cd_occupation: { minDefault: 3, maxDefault: 70, note: '身份支点' },
  cd_persona: { minDefault: 12, maxDefault: 130, note: '身份支点' },
  cd_body_type: { minDefault: 3, maxDefault: 72, note: '身体主轴' },
  cd_hair_style_f: { minDefault: 2, maxDefault: 48, note: '造型主轴' },
  cd_hair_style_m: { minDefault: 2, maxDefault: 48, note: '造型主轴' },
  cd_face_features: { minDefault: 2, maxDefault: 60, note: '脸部识别' },
  cd_makeup_style: { minDefault: 0, maxDefault: 60, note: '造型证据' }
};

const themePolicies = {
  武侠: { minTotalDefault: 100, maxTotalDefault: 340, minIdentityDefault: 24 },
  仙侠: { minTotalDefault: 90, maxTotalDefault: 320, minIdentityDefault: 24 },
  黑暗奇幻: { minTotalDefault: 100, maxTotalDefault: 360, minIdentityDefault: 28 },
  玄幻史诗: { minTotalDefault: 90, maxTotalDefault: 340, minIdentityDefault: 24 },
  赛博: { minTotalDefault: 100, maxTotalDefault: 360, minIdentityDefault: 26 },
  都市怪谈: { minTotalDefault: 100, maxTotalDefault: 420, minIdentityDefault: 22 },
  废土: { minTotalDefault: 80, maxTotalDefault: 300, minIdentityDefault: 24 },
  生物异化: { minTotalDefault: 70, maxTotalDefault: 280, minIdentityDefault: 18 },
  太空殖民: { minTotalDefault: 80, maxTotalDefault: 300, minIdentityDefault: 24 },
  成人时尚: { minTotalDefault: 100, maxTotalDefault: 420, minIdentityDefault: 22 },
  现实职业: { minTotalDefault: 120, maxTotalDefault: 420, minIdentityDefault: 35 },
  历史写实: { minTotalDefault: 110, maxTotalDefault: 380, minIdentityDefault: 32 },
  梦境超现实: { minTotalDefault: 70, maxTotalDefault: 300, minIdentityDefault: 18 }
};

const display = value => {
  if (Array.isArray(value)) return value.filter(Boolean).join(' / ');
  if (value === undefined || value === null || value === '') return '-';
  return String(value);
};

const hasListValue = value => Array.isArray(value)
  ? value.filter(Boolean).length > 0
  : Boolean(value);

const byBlock = rows => rows.reduce((acc, row) => {
  acc[row.blockId] ||= [];
  acc[row.blockId].push(row);
  return acc;
}, {});

const gradeCount = (rows, grade) => rows.filter(row => row.grade === grade).length;

const issue = (severity, profileTitle, scope, message, samples = []) => ({
  severity,
  profileTitle,
  scope,
  message,
  samples
});

const topNames = (rows, limit = 8) => rows
  .filter(row => row.recommended)
  .sort((a, b) => b.score - a.score)
  .slice(0, limit)
  .map(row => `${row.name}(${row.score})`);

const getStats = (profileTitle, rows) => {
  const blocks = byBlock(rows);
  const blockStats = Object.entries(blocks).map(([blockId, blockRows]) => {
    const recommended = blockRows.filter(row => row.recommended);
    return {
      blockId,
      label: blockLabels[blockId] || blockRows[0]?.libraryName || blockId,
      total: blockRows.length,
      strong: gradeCount(blockRows, '强推荐'),
      recommended: gradeCount(blockRows, '推荐'),
      weak: gradeCount(blockRows, '弱推荐'),
      defaultCount: recommended.length,
      defaultRatio: blockRows.length ? recommended.length / blockRows.length : 0,
      weakAxisDefault: recommended.filter(row => Number(row.nativeScore || 0) < 5 && !hasListValue(row.matchedPrimaryGenre)).length,
      top: topNames(blockRows)
    };
  });

  const defaultRows = rows.filter(row => row.recommended);
  const identityDefault =
    (blockStats.find(stat => stat.blockId === 'cd_occupation')?.defaultCount || 0) +
    (blockStats.find(stat => stat.blockId === 'cd_persona')?.defaultCount || 0);
  const specialDefault =
    (blockStats.find(stat => stat.blockId === 'cd_species')?.defaultCount || 0) +
    (blockStats.find(stat => stat.blockId === 'cd_eye_fx')?.defaultCount || 0) +
    (blockStats.find(stat => stat.blockId === 'cd_body_features')?.defaultCount || 0) +
    (blockStats.find(stat => stat.blockId === 'cd_body_markings')?.defaultCount || 0) +
    (blockStats.find(stat => stat.blockId === 'cd_body_damage')?.defaultCount || 0) +
    (blockStats.find(stat => stat.blockId === 'cd_body_modification')?.defaultCount || 0);

  return {
    profileTitle,
    total: rows.length,
    defaultCount: defaultRows.length,
    strong: gradeCount(rows, '强推荐'),
    recommended: gradeCount(rows, '推荐'),
    weak: gradeCount(rows, '弱推荐'),
    identityDefault,
    specialDefault,
    weakAxisDefault: defaultRows.filter(row => Number(row.nativeScore || 0) < 5 && !hasListValue(row.matchedPrimaryGenre)).length,
    blockStats
  };
};

const diagnoseProfile = stats => {
  const issues = [];
  const policy = themePolicies[stats.profileTitle] || {
    minTotalDefault: 80,
    maxTotalDefault: 360,
    minIdentityDefault: 20
  };

  if (stats.defaultCount < policy.minTotalDefault) {
    issues.push(issue(
      'P1',
      stats.profileTitle,
      '整体默认池',
      `默认池偏窄：${stats.defaultCount} 个，建议至少 ${policy.minTotalDefault} 个。`
    ));
  }
  if (stats.defaultCount > policy.maxTotalDefault) {
    issues.push(issue(
      'P2',
      stats.profileTitle,
      '整体默认池',
      `默认池偏宽：${stats.defaultCount} 个，建议控制在 ${policy.maxTotalDefault} 个以内。`
    ));
  }
  if (stats.identityDefault < policy.minIdentityDefault) {
    issues.push(issue(
      'P1',
      stats.profileTitle,
      '身份池',
      `身份支点偏窄：职业身份 + 人设符号共 ${stats.identityDefault} 个，随机时容易只剩外观、不知道“是谁”。`
    ));
  }
  if (stats.weakAxisDefault > 0) {
    issues.push(issue(
      'P0',
      stats.profileTitle,
      '主轴命中',
      `有 ${stats.weakAxisDefault} 个默认词缺少本体主轴或主类型命中，需要防止只靠时间/空间误入默认池。`
    ));
  }

  stats.blockStats.forEach(stat => {
    const blockPolicy = blockPolicies[stat.blockId];
    if (!blockPolicy) return;
    if (stat.defaultCount < blockPolicy.minDefault) {
      issues.push(issue(
        'P2',
        stats.profileTitle,
        stat.label,
        `${stat.label} 偏窄：默认 ${stat.defaultCount} 个，建议至少 ${blockPolicy.minDefault} 个。`,
        stat.top
      ));
    }
    if (stat.defaultCount > blockPolicy.maxDefault) {
      issues.push(issue(
        'P2',
        stats.profileTitle,
        stat.label,
        `${stat.label} 偏宽：默认 ${stat.defaultCount} 个，建议不超过 ${blockPolicy.maxDefault} 个。`,
        stat.top
      ));
    }
    if (stat.weakAxisDefault > 0) {
      issues.push(issue(
        'P1',
        stats.profileTitle,
        stat.label,
        `${stat.label} 中有 ${stat.weakAxisDefault} 个默认词缺少本体主轴或主类型命中。`,
        stat.top
      ));
    }
  });

  return issues;
};

const readProfiles = () => fs.readdirSync(outputDir)
  .filter(file => themeFilePattern.test(file) && !excludedThemeFiles.has(file))
  .sort((a, b) => a.localeCompare(b, 'zh-Hans-CN'))
  .map(file => {
    const title = file.match(themeFilePattern)[1];
    return {
      title,
      file,
      rows: JSON.parse(fs.readFileSync(path.join(outputDir, file), 'utf8'))
    };
  });

const buildMarkdown = (statsList, issues) => {
  const lines = [
    '# 主体本体推荐池质量诊断',
    '',
    '用途：这份表不检查字段是否齐全，而是检查“强推荐 / 推荐”组成的默认随机池是否好用。',
    '',
    '判定原则：身份池宁愿窄一点，也不要泛推荐；但如果默认池太窄，随机会失去主体支点。弱推荐只作为排序候选，不进入默认随机池。',
    '',
    '## 总览',
    '',
    '| 主题 | 默认池 | 强推荐 | 推荐 | 弱推荐 | 身份池 | 异常/异化池 | 弱主轴默认 | 诊断 |',
    '| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | --- |'
  ];

  statsList.forEach(stats => {
    const themeIssues = issues.filter(item => item.profileTitle === stats.profileTitle);
    const diagnosis = themeIssues.length
      ? themeIssues.map(item => `${item.severity}:${item.scope}`).join(' / ')
      : '通过';
    lines.push(`| ${stats.profileTitle} | ${stats.defaultCount} | ${stats.strong} | ${stats.recommended} | ${stats.weak} | ${stats.identityDefault} | ${stats.specialDefault} | ${stats.weakAxisDefault} | ${diagnosis} |`);
  });

  lines.push('', '## 优先处理队列', '', '| 优先级 | 主题 | 范围 | 问题 | 样例 |', '| --- | --- | --- | --- | --- |');
  if (issues.length === 0) {
    lines.push('| - | - | - | 暂无明显问题 | - |');
  } else {
    issues
      .sort((a, b) => a.severity.localeCompare(b.severity))
      .forEach(item => {
        lines.push(`| ${item.severity} | ${item.profileTitle} | ${item.scope} | ${item.message} | ${display(item.samples)} |`);
      });
  }

  lines.push('', '## 分主题默认池快照');
  statsList.forEach(stats => {
    lines.push('', `### ${stats.profileTitle}`, '', '| 词库 | 默认池 | 强推荐 | 推荐 | 弱推荐 | 默认样例 |', '| --- | ---: | ---: | ---: | ---: | --- |');
    stats.blockStats.forEach(stat => {
      lines.push(`| ${stat.label} | ${stat.defaultCount} | ${stat.strong} | ${stat.recommended} | ${stat.weak} | ${display(stat.top)} |`);
    });
  });

  return `${lines.join('\n')}\n`;
};

function main() {
  if (!fs.existsSync(outputDir)) {
    throw new Error(`Missing audit output directory: ${outputDir}`);
  }

  const profiles = readProfiles();
  const statsList = profiles.map(profile => getStats(profile.title, profile.rows));
  const issues = statsList.flatMap(diagnoseProfile);

  fs.writeFileSync(
    path.join(outputDir, '主体本体-推荐池质量诊断.json'),
    JSON.stringify({ stats: statsList, issues }, null, 2),
    'utf8'
  );
  fs.writeFileSync(
    path.join(outputDir, '主体本体-推荐池质量诊断.md'),
    buildMarkdown(statsList, issues),
    'utf8'
  );

  console.log(`Diagnosed ${statsList.length} subject profiles.`);
  console.log(path.join(outputDir, '主体本体-推荐池质量诊断.md'));
}

main();
