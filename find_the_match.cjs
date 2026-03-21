const fs = require('fs');
const path = require('path');

const zizekDir = '/Users/lujiaqi/Desktop/【迷雾学派】爱欲视觉拓扑学 2-24版/public/data/codex/zizek/details/';
const file1 = path.join(zizekDir, 'z_cartesian_subject.json');
const file2 = path.join(zizekDir, 'z_absolute_recoil.json');

[file1, file2].forEach(file => {
    const data = JSON.parse(fs.readFileSync(file, 'utf8'));
    console.log(`\n\x1b[1mANALYZING: ${path.basename(file)}\x1b[0m`);
    console.log('definition length:', (data.definition || '').length);
    console.log('analogy length:', (data.analogy || '').length);
    console.log('application length:', (data.application || '').length);
});
