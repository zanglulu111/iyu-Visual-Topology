const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../data/engine_m0.ts');
let content = fs.readFileSync(filePath, 'utf-8');

// Replace def and core
// We will look for { id: "...", ... def: "...", core: "..." }
const lineRegex = /({[^}]+def:\s*"([^"]+)",\s*core:\s*"([^"]+)"\s*})/g;

content = content.replace(lineRegex, (match, whole, defText, coreText) => {
  const defParts = defText.split('|').map(s => s.trim());
  const coreParts = coreText.split('|').map(s => s.trim());
  
  const defZh = defParts[0];
  const defEn = defParts[1] || '';
  const coreZh = coreParts[0];
  const coreEn = coreParts[1] || '';
  
  // Create a more "detailed" and "precise" sounding wording by appending some philosophical flair if needed, 
  // but to do it perfectly we really just split them into proper fields first so we can format them cleanly.
  // Actually, let's format it with newlines to make it readable.
  
  let newObjStr = whole.replace(`def: "${defText}"`, `def: "${defZh}",\n    defEn: "${defEn}"`)
                       .replace(`core: "${coreText}"`, `core: "${coreZh}",\n    coreEn: "${coreEn}"`);
                       
  // Format the whole object to be multiline
  newObjStr = newObjStr.replace(/{ id:/, '{\n    id:')
                       .replace(/, name:/, ',\n    name:')
                       .replace(/, group:/, ',\n    group:')
                       .replace(/ }$/, '\n  }');
                       
  return newObjStr;
});

fs.writeFileSync(filePath, content, 'utf-8');
console.log('M0 engine logic updated: split English and Chinese fields and formatted structurally.');
