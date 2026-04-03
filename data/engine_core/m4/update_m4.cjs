const fs = require('fs');
const path = require('path');

const m4Path = '/Users/lujiaqi/Desktop/【迷雾学派】爱欲视觉拓扑学 2-24版/data/engine_core/m4';

const maps = [
  { folder: '01_the_sovereign_boss', outFile: 'group_a.ts', exportName: 'OPPRESSION_GROUP_A', oldNames: ['M4_SOVEREIGN_BOSS'] },
  { folder: '02_the_rival_enemy', outFile: 'group_b.ts', exportName: 'OPPRESSION_GROUP_B', oldNames: ['M4_RIVAL_ENEMY'] },
  { folder: '03_the_bureaucracy', outFile: 'group_c.ts', exportName: 'OPPRESSION_GROUP_C', oldNames: ['M4_BUREAUCRACY'] },
  { folder: '04_the_silent_crowd', outFile: 'group_d.ts', exportName: 'OPPRESSION_GROUP_D', oldNames: ['M4_SILENT_CROWD'] },
  { folder: '05_the_constructed_limits', outFile: 'group_e.ts', exportName: 'OPPRESSION_GROUP_E', oldNames: ['M4_CONSTRUCTED_LIMITS'] },
  { folder: '06_the_absent_other', outFile: 'group_f.ts', exportName: 'OPPRESSION_GROUP_F', oldNames: ['M4_ABSENT_OTHER'] },
];

for (const m of maps) {
  const filePath = path.join(m4Path, m.folder, 'index.ts');
  const outPath = path.join(m4Path, m.outFile);
  
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Replace the old export with the new one
    content = content.replace(/export const M4_[A-Z_]+/, `export const ${m.exportName}`);
    
    fs.writeFileSync(outPath, content, 'utf8');
    console.log(`Generated ${m.outFile}`);
  } else {
    console.log(`Not found: ${filePath}`);
  }
}

// Generate index.ts for M4
const indexContent = `import { LibraryItemDef } from '../../../types';
import { OPPRESSION_GROUP_A } from './group_a';
import { OPPRESSION_GROUP_B } from './group_b';
import { OPPRESSION_GROUP_C } from './group_c';
import { OPPRESSION_GROUP_D } from './group_d';
import { OPPRESSION_GROUP_E } from './group_e';
import { OPPRESSION_GROUP_F } from './group_f';

export const M4_OPPRESSION: LibraryItemDef[] = [
    ...OPPRESSION_GROUP_A,
    ...OPPRESSION_GROUP_B,
    ...OPPRESSION_GROUP_C,
    ...OPPRESSION_GROUP_D,
    ...OPPRESSION_GROUP_E,
    ...OPPRESSION_GROUP_F
];
`;

fs.writeFileSync(path.join(m4Path, 'index.ts'), indexContent, 'utf8');
console.log('Generated index.ts for M4');
