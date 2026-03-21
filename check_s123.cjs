const fs = require('fs');
const path = require('path');

const file = '/Users/lujiaqi/Desktop/【迷雾学派】爱欲视觉拓扑学 2-24版/public/data/codex/zizek/details/z_cartesian_subject.json';
const data = JSON.parse(fs.readFileSync(file, 'utf8'));
const app = data.application;

const lines = app.split('\n');
let content = '';
let s123 = '';
let current = '';

lines.forEach(line => {
    if (line.includes('#### 1.')) current = 's1';
    else if (line.includes('#### 2.')) current = 's2';
    else if (line.includes('#### 3.')) current = 's3';
    else if (line.includes('#### 4.')) current = 's4';
    
    if (current && current !== 's4') {
        s123 += line + '\n';
    }
});

const text = s123.trim();
const cn = (text.match(/[\u4e00-\u9fa5]/g) || []).length;
const en = (text.match(/[a-zA-Z0-9-]+/g) || []).length;
const words = cn + en;

console.log('Cartesian Subject (S1+S2+S3 only):');
console.log(`  Words: ${words} (CN: ${cn}, EN: ${en})`);
console.log(`  Chars (with space): ${text.length}`);
console.log('User said 1462 (1365 CN, 97 EN)');
