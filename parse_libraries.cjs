const fs = require('fs');
const path = require('path');

['m0', 'm1', 'm2', 'm3'].forEach(mDir => {
    let dirPath = path.join('data/engine_core', mDir);
    let files = fs.readdirSync(dirPath).filter(f => f.endsWith('.ts') && f !== 'index.ts' && !f.includes('protocol') && !f.includes('summary'));
    console.log(`\n\n=== ${mDir.toUpperCase()} ===`);
    let grouped = {};
    files.forEach(f => {
        let content = fs.readFileSync(path.join(dirPath, f), 'utf-8');
        
        // Match { id: "xxx", name: "yyy", ... } loosely
        const blockRegex = /id:\s*"([^"]+)",\s*name:\s*"([^"]+)",(?:[^}]*group:\s*"([^"]+)")?/g;
        let matches = [...content.matchAll(blockRegex)];
        
        matches.forEach(m => {
            let id = m[1], name = m[2], grp = m[3] || f;
            if(!grouped[grp]) grouped[grp] = [];
            grouped[grp].push(`    * **${name} (${id})**`);
        });
    });
    for(let grp in grouped) {
        console.log(`\n### GROUP: ${grp}`);
        console.log(grouped[grp].join('\n'));
    }
});
