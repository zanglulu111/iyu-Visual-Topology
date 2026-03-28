#!/usr/bin/env node
/**
 * 迷雾辞典 Markdown → JSON 转换器
 * 
 * 把 codex-drafts/philosopher/concept_id.md 转换为
 * public/data/codex/philosopher/details/concept_id.json
 * 
 * 支持两种模式：
 *   node scripts/codex-convert.cjs          → 一次性转换所有
 *   node scripts/codex-convert.cjs --watch  → 监听变化，自动转换
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const DRAFTS_DIR = path.join(ROOT, 'codex-drafts');
const OUTPUT_BASE = path.join(ROOT, 'public', 'data', 'codex');

// 颜色输出
const c = {
  green:  (s) => `\x1b[32m${s}\x1b[0m`,
  yellow: (s) => `\x1b[33m${s}\x1b[0m`,
  red:    (s) => `\x1b[31m${s}\x1b[0m`,
  cyan:   (s) => `\x1b[36m${s}\x1b[0m`,
  gray:   (s) => `\x1b[90m${s}\x1b[0m`,
  bold:   (s) => `\x1b[1m${s}\x1b[0m`,
};

/**
 * 解析 Markdown 文件，提取三个区块
 * 区块标识：## 定义 | ## 类比 | ## 应用
 * 
 * 针对迷雾学派叙事引擎 (M0-M7)，会自动把：
 *   "一、位点界定" + "二、动力学触发" + "三、拓扑解析" -> definition
 *   "四、叙事生产映射" -> analogy
 *   "五、结构约束" -> application
 */
function parseCodexMarkdown(content) {
  // 1. 标准模式匹配
  const STANDARD_PATTERNS = {
    definition: /^##\s*(定义|Definition|DEFINITION)\s*$/m,
    analogy:    /^##\s*(类比|Analogy|ANALOGY)\s*$/m,
    application:/^##\s*(应用|Application|APPLICATION)\s*$/m,
  };

  // 2. 叙事引擎模式匹配 (M0-M7)
  const ENGINE_PATTERNS = {
    locus:      /^##\s*一、\s*(位点界定|概念原典与本体论界定)/m,
    trigger:    /^##\s*二、\s*(动力学触发|哲学史考古与理论同构)/m,
    topology:   /^##\s*三、\s*(逻辑公式与拓扑解析|引擎位点动力学解析)/m,
    mapping:    /^##\s*四、\s*(叙事生产映射|参数族谱与叙事生产映射)/m,
    constraints: /^##\s*五、\s*(结构约束与参数化|方法论制约与操作手册)/m,
  };

  const result = { definition: '', analogy: '', application: '' };
  
  // 检查是否包含引擎关键字
  const isEngineSchema = Object.values(ENGINE_PATTERNS).some(p => p.test(content));

  if (isEngineSchema) {
    // 提取引擎区块
    const getSection = (startPattern, endPatterns = []) => {
      const match = content.match(startPattern);
      if (!match) return '';
      const startPos = match.index;
      
      let endPos = content.length;
      for (const p of endPatterns) {
        const endMatch = content.match(p);
        if (endMatch && endMatch.index > startPos) {
          endPos = Math.min(endPos, endMatch.index);
        }
      }
      
      let section = content.slice(startPos, endPos).trim();
      // 移除标题行
      section = section.replace(/^##\s*.+$/m, '').trim();
      return section;
    };

    const locus = getSection(ENGINE_PATTERNS.locus, [ENGINE_PATTERNS.trigger, ENGINE_PATTERNS.topology, ENGINE_PATTERNS.mapping, ENGINE_PATTERNS.constraints]);
    const trigger = getSection(ENGINE_PATTERNS.trigger, [ENGINE_PATTERNS.topology, ENGINE_PATTERNS.mapping, ENGINE_PATTERNS.constraints]);
    const topology = getSection(ENGINE_PATTERNS.topology, [ENGINE_PATTERNS.mapping, ENGINE_PATTERNS.constraints]);
    const mapping = getSection(ENGINE_PATTERNS.mapping, [ENGINE_PATTERNS.constraints]);
    const constraints = getSection(ENGINE_PATTERNS.constraints);

    result.definition = [
      locus ? `### 1. 位点界定\n\n${locus}` : '',
      trigger ? `### 2. 动力学触发\n\n${trigger}` : '',
      topology ? `### 3. 逻辑公式与拓扑解析\n\n${topology}` : ''
    ].filter(Boolean).join('\n\n');

    result.analogy = mapping ? `### 叙事生产映射\n\n${mapping}` : '';
    result.application = constraints ? `### 结构约束与参数化\n\n${constraints}` : '';

  } else {
    // 按标准模式提取
    const positions = {};
    for (const [key, pattern] of Object.entries(STANDARD_PATTERNS)) {
      const match = content.match(pattern);
      if (match) {
        positions[key] = match.index;
      }
    }

    const sortedKeys = Object.entries(positions)
      .sort(([, a], [, b]) => a - b)
      .map(([key]) => key);

    for (let i = 0; i < sortedKeys.length; i++) {
      const key = sortedKeys[i];
      const startPos = positions[key];
      const nextKey = sortedKeys[i + 1];
      const endPos = nextKey ? positions[nextKey] : content.length;

      let sectionContent = content.slice(startPos, endPos);
      sectionContent = sectionContent.replace(/^##\s*.+$/m, '').trim().replace(/\n\s*---\s*$/, '');
      result[key] = sectionContent;
    }
  }

  return result;
}

/**
 * 转换单个 .md 文件 → .json
 */
function convertFile(mdPath) {
  const relativePath = path.relative(DRAFTS_DIR, mdPath);
  const parts = relativePath.split(path.sep);
  
  // 必须至少包含一级目录 (philosopher/)
  if (parts.length < 2) return;
  
  const philosopher = parts[0];
  const filename = parts[parts.length - 1];
  
  // 跳过以 _ 开头的文件（如 _模板说明.md）
  if (filename.startsWith('_')) return;
  
  // 跳过非 .md 文件
  if (!filename.endsWith('.md')) return;
  
  const conceptId = filename.replace('.md', '');
  const outputDir = path.join(OUTPUT_BASE, philosopher, 'details');
  const outputPath = path.join(outputDir, `${conceptId}.json`);

  try {
    const content = fs.readFileSync(mdPath, 'utf-8');
    const parsed = parseCodexMarkdown(content);

    // 检查是否有内容
    if (!parsed.definition && !parsed.analogy && !parsed.application) {
      console.log(c.yellow(`  ⚠ 跳过 ${relativePath}（未找到任何区块标题，需要 ## 定义 / ## 类比 / ## 应用）`));
      return;
    }

    // 确保输出目录存在
    fs.mkdirSync(outputDir, { recursive: true });

    // 写入 JSON
    const json = JSON.stringify(parsed, null, 2);
    fs.writeFileSync(outputPath, json, 'utf-8');

    const relOutput = path.relative(ROOT, outputPath);
    console.log(c.green(`  ✓ ${relativePath} → ${relOutput}`));
    
    // 显示内容摘要
    const defPreview = parsed.definition.slice(0, 60).replace(/\n/g, ' ');
    if (defPreview) {
      console.log(c.gray(`    定义预览: ${defPreview}...`));
    }

    return outputPath;
  } catch (err) {
    console.error(c.red(`  ✗ 转换失败 ${relativePath}: ${err.message}`));
  }
}

/**
 * 反向同步：把现有的 JSON 文件转为 .md 草稿
 * 用于把已存在的 JSON 转成可编辑的 .md
 */
function syncJsonToMd(philosopher, conceptId) {
  const jsonPath = path.join(OUTPUT_BASE, philosopher, 'details', `${conceptId}.json`);
  const mdPath = path.join(DRAFTS_DIR, philosopher, `${conceptId}.md`);

  if (!fs.existsSync(jsonPath)) {
    console.log(c.yellow(`  ⚠ JSON 不存在: ${jsonPath}`));
    return;
  }

  // 如果 .md 已存在，则跳过（不覆盖用户的写作）
  if (fs.existsSync(mdPath)) {
    console.log(c.gray(`  → 已存在草稿，跳过: ${path.relative(ROOT, mdPath)}`));
    return;
  }

  try {
    const raw = fs.readFileSync(jsonPath, 'utf-8');
    const data = JSON.parse(raw);

    const md = [
      `## 定义\n\n${data.definition || ''}`,
      `## 类比\n\n${data.analogy || ''}`,
      `## 应用\n\n${data.application || ''}`,
    ].join('\n\n---\n\n');

    fs.mkdirSync(path.join(DRAFTS_DIR, philosopher), { recursive: true });
    fs.writeFileSync(mdPath, md, 'utf-8');

    console.log(c.cyan(`  ↓ 已导入: ${path.relative(ROOT, mdPath)}`));
    return mdPath;
  } catch (err) {
    console.error(c.red(`  ✗ 导入失败 ${conceptId}: ${err.message}`));
  }
}

/**
 * 扫描并转换所有草稿文件
 */
function convertAll() {
  console.log(c.bold('\n🌫  迷雾辞典转换器\n'));

  if (!fs.existsSync(DRAFTS_DIR)) {
    console.log(c.yellow('codex-drafts/ 目录不存在，已创建。'));
    fs.mkdirSync(DRAFTS_DIR, { recursive: true });
    return;
  }

  let count = 0;

  function walk(dir) {
    const entries = fs.readdirSync(dir);
    for (const entry of entries) {
      const fullPath = path.join(dir, entry);
      if (fs.statSync(fullPath).isDirectory()) {
        walk(fullPath);
      } else if (entry.endsWith('.md') && !entry.startsWith('_')) {
        const result = convertFile(fullPath);
        if (result) count++;
      }
    }
  }

  walk(DRAFTS_DIR);

  console.log(c.green(`\n✅ 完成！共转换 ${count} 个词条\n`));
}

/**
 * 从现有 JSON 批量导入为 .md 草稿
 */
function importAllJson() {
  console.log(c.bold('\n🌫  批量导入 JSON → Markdown 草稿\n'));

  const philosophers = ['lacan', 'hegel', 'marx', 'zizek'];
  let count = 0;

  for (const philosopher of philosophers) {
    const detailsDir = path.join(OUTPUT_BASE, philosopher, 'details');
    if (!fs.existsSync(detailsDir)) continue;

    const jsonFiles = fs.readdirSync(detailsDir).filter(f => f.endsWith('.json'));
    if (jsonFiles.length === 0) continue;

    console.log(c.bold(`\n【${philosopher}】`));
    for (const file of jsonFiles) {
      const conceptId = file.replace('.json', '');
      const result = syncJsonToMd(philosopher, conceptId);
      if (result) count++;
    }
  }

  console.log(c.green(`\n✅ 完成！共导入 ${count} 个词条为 Markdown 草稿\n`));
}

/**
 * 监听模式
 */
function watchMode() {
  console.log(c.bold('\n🌫  迷雾辞典监听模式（保存即转换）\n'));
  console.log(c.cyan(`监听目录: ${DRAFTS_DIR}`));
  console.log(c.gray('按 Ctrl+C 退出\n'));

  // 先执行一次全量转换
  convertAll();

  // 使用 fs.watch 监听变化
  fs.watch(DRAFTS_DIR, { recursive: true }, (eventType, filename) => {
    if (!filename || !filename.endsWith('.md')) return;
    if (filename.includes('_模板')) return;

    const fullPath = path.join(DRAFTS_DIR, filename);
    
    // 稍微延迟一下，等文件写入完成
    setTimeout(() => {
      if (!fs.existsSync(fullPath)) return;
      
      const timestamp = new Date().toLocaleTimeString('zh-CN');
      console.log(c.cyan(`\n[${timestamp}] 检测到变化: ${filename}`));
      convertFile(fullPath);
    }, 100);
  });
}

// === 主程序入口 ===
const args = process.argv.slice(2);

if (args.includes('--watch') || args.includes('-w')) {
  watchMode();
} else if (args.includes('--import') || args.includes('-i')) {
  importAllJson();
} else {
  convertAll();
}
