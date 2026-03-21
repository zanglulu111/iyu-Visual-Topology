const fs = require('fs');
const path = require('path');

const zizekDir = '/Users/lujiaqi/Desktop/【迷雾学派】爱欲视觉拓扑学 2-24版/public/data/codex/zizek/details/';
const file1 = path.join(zizekDir, 'z_cartesian_subject.json');
const file2 = path.join(zizekDir, 'z_absolute_recoil.json');

[file1, file2].forEach(file => {
    const data = JSON.parse(fs.readFileSync(file, 'utf8'));
    const text = data.application;
    
    const chineseChars = (text.match(/[\u4e00-\u9fa5]/g) || []).length;
    const nonChineseWords = (text.match(/[a-zA-Z0-9-]+/g) || []).length;
    const totalWords = chineseChars + nonChineseWords;
    const charsWithSpaces = text.length;

    console.log(`\n\x1b[1mANALYZING: ${path.basename(file)}\x1b[0m`);
    console.log('User said Chars (with space):', file.includes('cartesian') ? 1615 : 1238);
    console.log('App Chars (with space):', charsWithSpaces);
    console.log('App Total Words (CN+EN):', totalWords);
    console.log('App Chinese Chars:', chineseChars);
    console.log('App Non-Chinese Words:', nonChineseWords);
});
