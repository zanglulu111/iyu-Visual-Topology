const fs = require('fs');
const path = require('path');

const zizekDir = '/Users/lujiaqi/Desktop/【迷雾学派】爱欲视觉拓扑学 2-24版/public/data/codex/zizek/details/';
const file1 = path.join(zizekDir, 'z_cartesian_subject.json');
const file2 = path.join(zizekDir, 'z_absolute_recoil.json');

[file1, file2].forEach(file => {
    const data = JSON.parse(fs.readFileSync(file, 'utf8'));
    const text = data.application;
    
    // Split text into lines to identify sections
    const lines = text.split('\n');
    let s1 = '', s2 = '', s3 = '', s4 = '';
    let current = null;
    
    lines.forEach(line => {
        if (line.includes('#### 1.')) current = 's1';
        else if (line.includes('#### 2.')) current = 's2';
        else if (line.includes('#### 3.')) current = 's3';
        else if (line.includes('#### 4.')) current = 's4';
        
        if (current === 's1') s1 += line + '\n';
        if (current === 's2') s2 += line + '\n';
        if (current === 's3') s3 += line + '\n';
        if (current === 's4') s4 += line + '\n';
    });

    console.log(`\n\x1b[1mANALYZING: ${path.basename(file)}\x1b[0m`);
    console.log('Total characters (with spaces):', text.length);
    console.log('S1 length:', s1.trim().length);
    console.log('S2 length:', s2.trim().length);
    console.log('S3 length:', s3.trim().length);
    console.log('S4 length:', s4.trim().length);
    console.log('S1+S3 length:', (s1.trim() + '\n' + s3.trim()).length);
    console.log('S1+S2+S3 length:', (s1.trim() + '\n' + s2.trim() + '\n' + s3.trim()).length);
    console.log('S1+S2+S3+S4 length:', (s1.trim() + '\n' + s2.trim() + '\n' + s3.trim() + '\n' + s4.trim()).length);
});
