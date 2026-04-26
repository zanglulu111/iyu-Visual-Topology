const fs = require('fs');
const path = require('path');
const glob = require('glob');

// 减少加粗的规则：
// 1. 保留短语（10个字以内）的加粗
// 2. 长句子（超过15个字）的加粗改为只加粗核心词
// 3. 整段加粗的改为只加粗关键短语

function reduceBold(content) {
  // 匹配所有加粗文本
  return content.replace(/\*\*(.+?)\*\*/g, (match, text) => {
    // 如果是数字标题（1. 2. 3.）或列表标记，保留
    if (/^[0-9]+\.\s/.test(text) || /^[一二三四五六七八九十]+、/.test(text)) {
      return match;
    }

    // 如果包含数学符号或特殊符号，保留
    if (/[\$\(\)\[\]\\]/.test(text)) {
      return match;
    }

    // 如果是短语（15个字以内），保留
    if (text.length <= 15) {
      return match;
    }

    // 如果是长句子，只保留核心部分（去掉加粗）
    // 这些长句子通常是解释性的，不需要全部加粗
    return text;
  });
}

// 处理所有齐泽克词条
const files = glob.sync('codex-drafts/zizek/*.md');

files.forEach(file => {
  const content = fs.readFileSync(file, 'utf-8');
  const reduced = reduceBold(content);

  if (content !== reduced) {
    fs.writeFileSync(file, reduced, 'utf-8');
    console.log(`✓ ${path.basename(file)}`);
  }
});

console.log(`\n完成！共处理 ${files.length} 个文件`);
