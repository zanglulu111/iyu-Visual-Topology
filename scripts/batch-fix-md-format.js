import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ROOT = path.join(__dirname, '..');
const DEFINITIONS_DIR = path.join(ROOT, 'lexicon', 'hegel', 'definitions');
const CASES_DIR = path.join(ROOT, 'lexicon', 'hegel', 'cases');

function processMarkdownFiles(dir) {
  const files = fs.readdirSync(dir);
  let updatedCount = 0;

  for (const file of files) {
    if (!file.endsWith('.md')) continue;

    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;

    // We only want to replace Markdown headers in the BODY, not YAML.
    // A quick hack is to split by `---`, keep the first two parts as YAML,
    // and process the rest.
    const parts = content.split(/^---$/m);

    if (parts.length >= 3) {
      // The first element is empty string before the first `---`
      // The second element is YAML frontmatter
      const yamlPart = parts.slice(0, 3).join('---');
      let bodyPart = parts.slice(3).join('---'); // The rest, which may have contained inner `---`

      // 1. Remove all inner `---` in the body
      bodyPart = bodyPart.replace(/^---$/mg, '');

      // 2. Step down headers
      // Downgrade ### to ####
      bodyPart = bodyPart.replace(/^### /mg, '#### ');
      // Downgrade ## to ###
      bodyPart = bodyPart.replace(/^## /mg, '### ');

      content = yamlPart + bodyPart;
    } else {
      // If there's no proper YAML frontmatter (unlikely), just process whole thing
      content = content.replace(/^---$/mg, '');
      content = content.replace(/^### /mg, '#### ');
      content = content.replace(/^## /mg, '### ');
    }

    // Clean up excessive newlines where `---` used to be
    content = content.replace(/\n\n\n+/g, '\n\n');

    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      updatedCount++;
    }
  }

  return updatedCount;
}

const defsUpdated = processMarkdownFiles(DEFINITIONS_DIR);
const casesUpdated = processMarkdownFiles(CASES_DIR);

console.log(`\nCompleted. Updated ${defsUpdated} definitions and ${casesUpdated} cases.`);
