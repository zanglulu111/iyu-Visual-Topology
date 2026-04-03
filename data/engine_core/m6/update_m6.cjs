const fs = require('fs');
const path = require('path');

const m6Path = '/Users/lujiaqi/Desktop/【迷雾学派】爱欲视觉拓扑学 2-24版/data/engine_core/m6';

const maps = [
  { folder: '01_symbolic_death', outFile: 'group_a.ts', exportName: 'STAKES_GROUP_A', oldNames: ['M6_SYMBOLIC_DEATH'] },
  { folder: '02_ontological_collapse', outFile: 'group_b.ts', exportName: 'STAKES_GROUP_B', oldNames: ['M6_ONTOLOGICAL_COLLAPSE'] },
  { folder: '03_moral_alienation', outFile: 'group_c.ts', exportName: 'STAKES_GROUP_C', oldNames: ['M6_MORAL_ALIENATION'] },
  { folder: '04_total_ruin', outFile: 'group_d.ts', exportName: 'STAKES_GROUP_D', oldNames: ['M6_TOTAL_RUIN'] },
];

for (const m of maps) {
  const filePath = path.join(m6Path, m.folder, 'index.ts');
  const outPath = path.join(m6Path, m.outFile);
  
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Replace the old export with the new one
    content = content.replace(/export const M6_[A-Z_]+/, `export const ${m.exportName}`);
    
    fs.writeFileSync(outPath, content, 'utf8');
    console.log(`Generated ${m.outFile}`);
  } else {
    console.log(`Not found: ${filePath}`);
  }
}

// Generate index.ts for M6
const indexContent = `import { LibraryItemDef } from '../../../types';
import { STAKES_GROUP_A } from './group_a';
import { STAKES_GROUP_B } from './group_b';
import { STAKES_GROUP_C } from './group_c';
import { STAKES_GROUP_D } from './group_d';

export const M6_STAKES: LibraryItemDef[] = [
    ...STAKES_GROUP_A,
    ...STAKES_GROUP_B,
    ...STAKES_GROUP_C,
    ...STAKES_GROUP_D
];
`;

fs.writeFileSync(path.join(m6Path, 'index.ts'), indexContent, 'utf8');
console.log('Generated index.ts for M6');
