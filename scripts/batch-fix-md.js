import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ROOT = path.join(__dirname, '..');
const DEFINITIONS_DIR = path.join(ROOT, 'lexicon', 'hegel', 'definitions');

function processMarkdownFiles() {
  const files = fs.readdirSync(DEFINITIONS_DIR);
  let updatedCount = 0;

  for (const file of files) {
    if (!file.endsWith('.md')) continue;

    const filePath = path.join(DEFINITIONS_DIR, file);
    let content = fs.readFileSync(filePath, 'utf8');
    let changed = false;

    // 1. Remove the line starting with `# 【定义】`
    // It might be `# 【定义】xxx (xxx)` or similar.
    // Also remove any extra blank lines resulting from this.
    const originalContent = content;
    
    // Remove `# 【定义】...` and the newline immediately following it
    content = content.replace(/^#\s+【定义】.*(?:(?:\r\n|\n)+)?/m, '');
    
    // 2. Replace `## 一、一句话核心定义` with `## 一、定义简述`
    content = content.replace(/##\s*一、\s*一句话核心定义/g, '## 一、定义简述');
    
    // Some files might just be `## 一句话核心定义` without `一、`
    content = content.replace(/##\s*一句话核心定义/g, '## 定义简述');

    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      updatedCount++;
      console.log(`Updated: ${file}`);
    }
  }

  console.log(`\nCompleted. Updated ${updatedCount} files.`);
}

processMarkdownFiles();
