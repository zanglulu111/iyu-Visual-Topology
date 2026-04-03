const fs = require('fs');
const path = require('path');

const m5Path = '/Users/lujiaqi/Desktop/【迷雾学派】爱欲视觉拓扑学 2-24版/data/engine_core/m5';

const maps = [
  { folder: '02_alienated_resistance', outFile: 'group_b.ts', exportName: 'DRIVES_GROUP_B', oldName: 'M5_ALIENATED_RESISTANCE' },
  { folder: '03_intellectual_game', outFile: 'group_c.ts', exportName: 'DRIVES_GROUP_C', oldName: 'M5_INTELLECTUAL_GAME' },
  { folder: '04_survival_struggle', outFile: 'group_d.ts', exportName: 'DRIVES_GROUP_D', oldName: 'M5_SURVIVAL_STRUGGLE' },
  { folder: '05_despair_giveup', outFile: 'group_e.ts', exportName: 'DRIVES_GROUP_E', oldName: 'M5_DESPAIR_GIVEUP' },
];

for (const m of maps) {
  const filePath = path.join(m5Path, m.folder, 'index.ts');
  const outPath = path.join(m5Path, m.outFile);
  
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Replace the old export with the new one
    // e.g. export const M5_ALIENATED_RESISTANCE
    content = content.replace(new RegExp(`export const ${m.oldName}`), `export const ${m.exportName}`);
    content = content.replace(/export const M5_[A-Z_]+/, `export const ${m.exportName}`); // Fallback if name mismatches
    
    fs.writeFileSync(outPath, content, 'utf8');
    console.log(`Generated ${m.outFile}`);
  } else {
    console.log(`Not found: ${filePath}`);
  }
}

// Generate index.ts for M5
const indexContent = `import { LibraryItemDef } from '../../../types';
import { DRIVES_GROUP_A } from './group_a';
import { DRIVES_GROUP_B } from './group_b';
import { DRIVES_GROUP_C } from './group_c';
import { DRIVES_GROUP_D } from './group_d';
import { DRIVES_GROUP_E } from './group_e';

export const M5_DRIVES: LibraryItemDef[] = [
    ...DRIVES_GROUP_A,
    ...DRIVES_GROUP_B,
    ...DRIVES_GROUP_C,
    ...DRIVES_GROUP_D,
    ...DRIVES_GROUP_E
];
`;

fs.writeFileSync(path.join(m5Path, 'index.ts'), indexContent, 'utf8');
console.log('Generated index.ts for M5');
