const fs = require('fs');
const path = require('path');

const file = '/Users/lujiaqi/Desktop/【迷雾学派】爱欲视觉拓扑学 2-24版/public/data/codex/zizek/details/z_cartesian_subject.json';
const data = JSON.parse(fs.readFileSync(file, 'utf8'));

['definition', 'analogy', 'application'].forEach(section => {
    const text = data[section] || '';
    const cn = (text.match(/[\u4e00-\u9fa5]/g) || []).length;
    const en = (text.match(/[a-zA-Z0-9-]+/g) || []).length;
    const words = cn + en;
    const chars = text.length;

    console.log(`Section: ${section}`);
    console.log(`  Words: ${words} (CN: ${cn}, EN: ${en})`);
    console.log(`  Chars (with space): ${chars}`);
});
