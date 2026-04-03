const fs = require('fs');
const path = require('path');

const m7Path = '/Users/lujiaqi/Desktop/【迷雾学派】爱欲视觉拓扑学 2-24版/data/engine_core/m7';

const maps = [
  { folder: '01_the_void', outFile: 'group_a.ts', exportName: 'OUTCOMES_GROUP_A', oldNames: ['M7_THE_VOID'] },
  { folder: '02_assimilation', outFile: 'group_b.ts', exportName: 'OUTCOMES_GROUP_B', oldNames: ['M7_ASSIMILATION', 'M7_FANTASY_ASSIMILATION'] },
  { folder: '03_sinthome', outFile: 'group_c.ts', exportName: 'OUTCOMES_GROUP_C', oldNames: ['M7_SINTHOME', 'M7_SUBLIMATION_SINTHOME'] },
  { folder: '04_collapse', outFile: 'group_d.ts', exportName: 'OUTCOMES_GROUP_D', oldNames: ['M7_COLLAPSE', 'M7_STRUCTURAL_COLLAPSE'] },
];

for (const m of maps) {
  const filePath = path.join(m7Path, m.folder, 'index.ts');
  const outPath = path.join(m7Path, m.outFile);
  
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Replace the old export with the new one
    content = content.replace(/export const M7_[A-Z_]+/, `export const ${m.exportName}`);
    
    fs.writeFileSync(outPath, content, 'utf8');
    console.log(`Generated ${m.outFile}`);
  } else {
    console.log(`Not found: ${filePath}`);
  }
}

// Generate index.ts for M7
const indexContent = `import { LibraryItemDef } from '../../../types';
import { OUTCOMES_GROUP_A } from './group_a';
import { OUTCOMES_GROUP_B } from './group_b';
import { OUTCOMES_GROUP_C } from './group_c';
import { OUTCOMES_GROUP_D } from './group_d';

export const M7_OUTCOMES: LibraryItemDef[] = [
    ...OUTCOMES_GROUP_A,
    ...OUTCOMES_GROUP_B,
    ...OUTCOMES_GROUP_C,
    ...OUTCOMES_GROUP_D
];
`;

fs.writeFileSync(path.join(m7Path, 'index.ts'), indexContent, 'utf8');
console.log('Generated index.ts for M7');
