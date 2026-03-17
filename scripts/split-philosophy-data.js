/**
 * 哲学辞典数据拆分脚本
 * 将 philosophy_refined.ts 拆分为三层结构
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 配置
const CONFIG = {
  inputFile: path.join(__dirname, '../data/philosophy_refined.ts'),
  outputDir: path.join(__dirname, '../data/philosophy/hegel'),
  summaryLength: 500, // 摘要长度
};

/**
 * 生成摘要
 */
function generateSummary(detailed) {
  if (!detailed?.definition) return '';

  const text = detailed.definition
    .replace(/###[^\n]*/g, '') // 移除标题
    .replace(/\*\*/g, '') // 移除加粗
    .replace(/\n\n+/g, '\n') // 合并多个换行
    .replace(/`[^`]*`/g, '') // 移除代码
    .trim();

  // 取前 N 个字符
  const summary = text.substring(0, CONFIG.summaryLength);

  // 在最后一个句号处截断
  const lastPeriod = summary.lastIndexOf('。');
  if (lastPeriod > CONFIG.summaryLength * 0.7) {
    return summary.substring(0, lastPeriod + 1);
  }

  return summary + '...';
}

/**
 * 提取词条的详细内容
 */
function extractDetailedContent(content, conceptId) {
  // 找到该词条的 detailed 部分
  const detailedRegex = new RegExp(
    `id:\\s*"${conceptId}"[\\s\\S]*?detailed:\\s*\\{[\\s\\S]*?definition:\\s*\`([\\s\\S]*?)\`,\\s*analogy:\\s*\`([\\s\\S]*?)\`,\\s*application:\\s*\`([\\s\\S]*?)\`[\\s\\S]*?\\}`,
    'm'
  );

  const match = content.match(detailedRegex);

  if (match) {
    return {
      definition: match[1].trim(),
      analogy: match[2].trim(),
      application: match[3].trim()
    };
  }

  return null;
}

/**
 * 提取基本信息
 */
function extractBasicInfo(content, conceptId) {
  const conceptRegex = new RegExp(
    `\\{[\\s\\S]*?id:\\s*"${conceptId}"[\\s\\S]*?name:\\s*"([^"]+)"[\\s\\S]*?enName:\\s*"([^"]+)"[\\s\\S]*?category:\\s*"([^"]+)"[\\s\\S]*?shortDef:\\s*"([^"]+)"`,
    'm'
  );

  const match = content.match(conceptRegex);

  if (match) {
    return {
      id: conceptId,
      name: match[1],
      enName: match[2],
      category: match[3],
      shortDef: match[4]
    };
  }

  return null;
}

/**
 * 主函数
 */
async function main() {
  console.log('🚀 开始拆分哲学辞典数据...\n');

  // 1. 读取原始文件
  console.log('📖 读取原始文件...');
  const content = fs.readFileSync(CONFIG.inputFile, 'utf-8');

  // 2. 已知的详细词条列表
  const knownConcepts = [
    'h_substance_subject',
    'h_dialectic',
    'h_aufhebung',
    'h_negativity',
    'h_unity_opposites',
    'h_concrete_universal',
    'h_teleology'
  ];

  console.log(`🔍 解析 ${knownConcepts.length} 个词条...\n`);

  const indexData = [];
  const summariesData = [];
  const detailsMap = new Map();

  // 3. 提取每个词条的数据
  for (const conceptId of knownConcepts) {
    // 提取基本信息
    const basicInfo = extractBasicInfo(content, conceptId);

    if (basicInfo) {
      indexData.push(basicInfo);

      // 提取详细内容
      const detailed = extractDetailedContent(content, conceptId);

      if (detailed) {
        detailsMap.set(conceptId, detailed);

        // 生成摘要
        summariesData.push({
          ...basicInfo,
          summary: generateSummary(detailed)
        });

        console.log(`✓ ${basicInfo.name} (${conceptId})`);
      } else {
        summariesData.push({
          ...basicInfo,
          summary: ''
        });
        console.log(`⚠ ${basicInfo.name} (${conceptId}) - 无详细内容`);
      }
    } else {
      console.log(`✗ 无法提取 ${conceptId}`);
    }
  }

  console.log(`\n✓ 解析完成: ${indexData.length} 个词条\n`);

  // 4. 创建输出目录
  const detailsDir = path.join(CONFIG.outputDir, 'details');
  if (!fs.existsSync(detailsDir)) {
    fs.mkdirSync(detailsDir, { recursive: true });
  }

  // 5. 生成 Layer 1: 索引
  console.log('📝 生成 Layer 1: 索引...');
  fs.writeFileSync(
    path.join(CONFIG.outputDir, 'index.json'),
    JSON.stringify(indexData, null, 2),
    'utf-8'
  );
  const indexSize = fs.statSync(path.join(CONFIG.outputDir, 'index.json')).size;
  console.log(`✓ 索引文件: ${(indexSize / 1024).toFixed(2)} KB\n`);

  // 6. 生成 Layer 2: 摘要
  console.log('📝 生成 Layer 2: 摘要...');
  fs.writeFileSync(
    path.join(CONFIG.outputDir, 'summaries.json'),
    JSON.stringify(summariesData, null, 2),
    'utf-8'
  );
  const summariesSize = fs.statSync(path.join(CONFIG.outputDir, 'summaries.json')).size;
  console.log(`✓ 摘要文件: ${(summariesSize / 1024).toFixed(2)} KB\n`);

  // 7. 生成 Layer 3: 详细内容
  console.log('📝 生成 Layer 3: 详细内容...');
  let totalDetailSize = 0;
  let detailCount = 0;

  for (const [conceptId, detailed] of detailsMap.entries()) {
    const detailPath = path.join(detailsDir, `${conceptId}.json`);
    fs.writeFileSync(
      detailPath,
      JSON.stringify(detailed, null, 2),
      'utf-8'
    );
    totalDetailSize += fs.statSync(detailPath).size;
    detailCount++;
  }

  console.log(`✓ 详细内容: ${detailCount} 个文件, 平均 ${(totalDetailSize / detailCount / 1024).toFixed(2)} KB\n`);

  // 8. 生成统计信息
  const stats = {
    totalConcepts: indexData.length,
    withDetails: detailCount,
    indexSize: indexSize,
    summariesSize: summariesSize,
    totalDetailSize: totalDetailSize,
    avgDetailSize: Math.round(totalDetailSize / detailCount),
    estimatedTotalSize: indexSize + summariesSize + totalDetailSize
  };

  fs.writeFileSync(
    path.join(CONFIG.outputDir, 'stats.json'),
    JSON.stringify(stats, null, 2),
    'utf-8'
  );

  // 9. 输出统计
  console.log('📊 统计信息:');
  console.log('─'.repeat(50));
  console.log(`总词条数:           ${stats.totalConcepts}`);
  console.log(`详细词条数:         ${stats.withDetails}`);
  console.log(`索引大小:           ${(stats.indexSize / 1024).toFixed(2)} KB`);
  console.log(`摘要大小:           ${(stats.summariesSize / 1024).toFixed(2)} KB`);
  console.log(`详细内容总大小:     ${(stats.totalDetailSize / 1024).toFixed(2)} KB`);
  console.log(`平均详细内容大小:   ${(stats.avgDetailSize / 1024).toFixed(2)} KB`);
  console.log(`预估总大小:         ${(stats.estimatedTotalSize / 1024).toFixed(2)} KB`);
  console.log('─'.repeat(50));

  console.log('\n✅ 拆分完成！');
  console.log(`\n输出目录: ${CONFIG.outputDir}`);
}

main().catch(error => {
  console.error('❌ 错误:', error);
  process.exit(1);
});
