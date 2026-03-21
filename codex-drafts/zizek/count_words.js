const fs = require('fs');
const content = fs.readFileSync(process.argv[2], 'utf8');
const wordCount = content.split(/\s+/).filter(Boolean).length;
const charCountNoSpace = content.replace(/\s/g, '').length;
const charCountWithSpace = content.length;
const paragraphCount = content.split('\n\n').length;
const nonChineseWords = (content.match(/[a-zA-Z]+/g) || []).length;
const chineseChars = (content.match(/[\u4e00-\u9fa5]/g) || []).length;

console.log(`File: ${process.argv[2]}`);
console.log(`Word count: ${wordCount}`);
console.log(`Char count (no space): ${charCountNoSpace}`);
console.log(`Char count (with space): ${charCountWithSpace}`);
console.log(`Paragraph count: ${paragraphCount}`);
console.log(`Non-Chinese words: ${nonChineseWords}`);
console.log(`Chinese characters: ${chineseChars}`);
