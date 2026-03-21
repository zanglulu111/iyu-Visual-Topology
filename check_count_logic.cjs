const fs = require('fs');
const path = require('path');

const zizekDir = '/Users/lujiaqi/Desktop/【迷雾学派】爱欲视觉拓扑学 2-24版/public/data/codex/zizek/details/';
const fileTarget = path.join(zizekDir, 'z_absolute_recoil.json');

const data = JSON.parse(fs.readFileSync(fileTarget, 'utf8'));
const app = data.application;

function getSection(text, header) {
    const start = text.indexOf(header);
    if (start === -1) return '';
    const slice = text.slice(start);
    // Find next header or end
    const nextHeaderMatch = slice.slice(header.length).match(/\n#### /);
    if (nextHeaderMatch) {
        return slice.slice(0, header.length + nextHeaderMatch.index).trim();
    }
    return slice.trim();
}

const s1 = getSection(app, '#### 1. 能指映射：M-S 动力学解构');
const s2 = getSection(app, '#### 2. 视差之见：污迹的可视化部署');
const s3 = getSection(app, '#### 3. 叙事共振：文本印证与考古');
const s4 = getSection(app, '#### 4. 影像转译与叙事显影：从理论到创作的升华');

console.log('S1 length:', s1.length);
console.log('S2 length:', s2.length);
console.log('S3 length:', s3.length);
console.log('S4 length:', s4.length);
console.log('S1+S3 length:', (s1 + s3).length);
console.log('Total app length:', app.length);
console.log('User said 1238');
