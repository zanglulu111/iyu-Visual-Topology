const fs = require('fs');
const path = require('path');

const zizekDir = '/Users/lujiaqi/Desktop/【迷雾学派】爱欲视觉拓扑学 2-24版/public/data/codex/zizek/details/';
const philosophyTs = '/Users/lujiaqi/Desktop/【迷雾学派】爱欲视觉拓扑学 2-24版/data/codex/philosophy_refined.ts';

// 1. Read philosophy_refined.ts to map IDs to Names
const tsContent = fs.readFileSync(philosophyTs, 'utf8');
const idToName = {};
const nameMatches = tsContent.matchAll(/id:\s*['"](.*?)['"],\s*name:\s*['"](.*?)['"]/g);
for (const match of nameMatches) {
    idToName[match[1]] = match[2];
}

// 2. Read all Zizek entries
const files = fs.readdirSync(zizekDir).filter(f => f.endsWith('.json'));
const results = [];

files.forEach(file => {
    const filePath = path.join(zizekDir, file);
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    const id = file.replace('.json', '');
    const name = idToName[id] || id;
    const text = data.application || '';

    // Word count logic: CN characters + EN word tokens
    const chineseChars = (text.match(/[\u4e00-\u9fa5]/g) || []).length;
    const nonChineseWords = (text.match(/[a-zA-Z0-9-]+/g) || []).length;
    const totalWords = chineseChars + nonChineseWords;
    const charsWithSpaces = text.length;

    results.push({
        id,
        name,
        totalWords,
        chineseChars,
        nonChineseWords,
        charsWithSpaces
    });
});

// 3. Sort by totalWords descending
results.sort((a, b) => b.totalWords - a.totalWords);

// 4. Print Table
console.log('| 排名 | 词条 ID | 词条名称 | 总字数 (CN+EN) | 中文字符 | 英文单词 | 总字符 (含空格) |');
console.log('| --- | --- | --- | --- | --- | --- | --- |');
results.forEach((r, i) => {
    console.log(`| ${i + 1} | ${r.id} | ${r.name} | ${r.totalWords} | ${r.chineseChars} | ${r.nonChineseWords} | ${r.charsWithSpaces} |`);
});
