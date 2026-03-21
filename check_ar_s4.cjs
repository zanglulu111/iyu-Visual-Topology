const fs = require('fs');
const path = require('path');

const file = '/Users/lujiaqi/Desktop/【迷雾学派】爱欲视觉拓扑学 2-24版/public/data/codex/zizek/details/z_absolute_recoil.json';
const data = JSON.parse(fs.readFileSync(file, 'utf8'));
const app = data.application;

const lines = app.split('\n');
let s4 = '';
let current = '';

lines.forEach(line => {
    if (line.includes('#### 4.')) current = 's4';
    if (current === 's4') s4 += line + '\n';
});

const text = s4.trim();
const cn = (text.match(/[\u4e00-\u9fa5]/g) || []).length;
const en = (text.match(/[a-zA-Z0-9-]+/g) || []).length;
const words = cn + en;

console.log('Absolute Recoil (Section 4 only):');
console.log(`  Words: ${words} (CN: ${cn}, EN: ${en})`);
console.log(`  Chars: ${text.length}`);
