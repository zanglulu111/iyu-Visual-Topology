import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ROOT = path.join(__dirname, '..');
const AGENTS_DIR = path.join(ROOT, '.agents', 'skills');

function parseDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      parseDir(fullPath);
    } else if (file.endsWith('.md')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let changed = false;

      // Replace top-level title header rule in templates
      // Also remove it from TEMPLATE_DEFINITION.md
      const originalContent = content;
      content = content.replace(/^#\s+【定义】.*(?:(?:\r\n|\n)+)?/mg, '');
      content = content.replace(/##\s*一、\s*一句话核心定义/g, '## 一、定义简述');
      content = content.replace(/一句话核心定义/g, '定义简述');
      // Fix potential instructions related to the title header
      content = content.replace(/- \*\*正规化结构\*\*：必须包含一级标题.*?和四个二级标题/g, '- **正规化结构**：必须包含四个二级标题');
      
      if (content !== originalContent) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`Updated template: ${fullPath}`);
      }
    }
  }
}

parseDir(AGENTS_DIR);
console.log('\nTemplate fix completed.');
