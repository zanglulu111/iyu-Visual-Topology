const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const DEFINITIONS_DIR = path.join(ROOT, 'lexicon', 'hegel', 'definitions');
const CASES_DIR = path.join(ROOT, 'lexicon', 'hegel', 'cases');
const OUTPUT_DIR = path.join(ROOT, 'public', 'data', 'codex', 'hegel', 'details');

// Ensure output directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

function parseMarkdownWithYaml(content) {
  const match = content.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) {
    return { metadata: {}, body: content.trim() };
  }
  
  const yamlContent = match[1];
  const body = match[2].trim();
  
  const metadata = {};
  yamlContent.split('\n').forEach(line => {
    const colonIndex = line.indexOf(':');
    if (colonIndex !== -1) {
      const key = line.slice(0, colonIndex).trim();
      let value = line.slice(colonIndex + 1).trim();
      if (value.startsWith('"') && value.endsWith('"')) {
        value = value.slice(1, -1);
      }
      metadata[key] = value;
    }
  });

  return { metadata, body };
}

function getShortenedTitle(title) {
  // E.g. "【定义】实体即主体 (Substance is Subject)" -> "实体即主体 (Substance is Subject)"
  if (title.startsWith("【定义】")) {
    return title.replace("【定义】", "").trim();
  }
  return title;
}

function main() {
  const files = fs.readdirSync(DEFINITIONS_DIR).filter(f => f.endsWith('.md'));
  
  let successes = 0;
  
  for (const file of files) {
    const defPath = path.join(DEFINITIONS_DIR, file);
    const defContent = fs.readFileSync(defPath, 'utf-8');
    
    const { metadata: defMeta, body: defBody } = parseMarkdownWithYaml(defContent);
    const id = defMeta.id;
    
    if (!id) {
      console.warn(`Skipping ${file}: No 'id' found in frontmatter.`);
      continue;
    }

    let applicationBody = "";
    const caseFile = `${id}_cases.md`;
    const casePath = path.join(CASES_DIR, caseFile);
    
    if (fs.existsSync(casePath)) {
      const caseContent = fs.readFileSync(casePath, 'utf-8');
      const { body } = parseMarkdownWithYaml(caseContent);
      applicationBody = body;
    } else {
      console.warn(`Warning: No cases file found for ${id} expected at ${casePath}`);
    }

    const payload = {
      definition: defBody,
      analogy: "",
      application: applicationBody
    };

    const outputPath = path.join(OUTPUT_DIR, `${id}.json`);
    fs.writeFileSync(outputPath, JSON.stringify(payload, null, 2), 'utf-8');
    
    console.log(`Converted ${id} -> ${outputPath}`);
    successes++;
  }
  
  console.log(`\nMigration complete. Processed ${successes} files.`);
}

main();
