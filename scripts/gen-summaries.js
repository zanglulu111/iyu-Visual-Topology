import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ROOT = path.join(__dirname, '..');
const DETAILS_DIR = path.join(ROOT, 'public', 'data', 'codex', 'hegel', 'details');
const OUT_FILE = path.join(ROOT, 'public', 'data', 'codex', 'hegel', 'summaries.json');

// Using dynamic import or robust read
const content = fs.readFileSync(path.join(ROOT, 'data', 'codex', 'philosophy_refined.ts'), 'utf-8');

const conceptRegex = /\{\s*id:\s*"([^"]+)",\s*name:\s*"([^"]+)",\s*enName:\s*"([^"]+)",\s*category:\s*"([^"]+)",\s*shortDef:\s*"([^"]+)"\s*\}/g;

const summaries = [];
let match;
while ((match = conceptRegex.exec(content)) !== null) {
  const id = match[1];
  const item = {
    id: match[1],
    name: match[2],
    enName: match[3],
    category: match[4],
    shortDef: match[5]
  };

  const detailPath = path.join(DETAILS_DIR, `${id}.json`);
  let summaryText = "";
  if (fs.existsSync(detailPath)) {
    const detail = JSON.parse(fs.readFileSync(detailPath, 'utf8'));
    let text = detail.definition
        .replace(/###[^\n]*/g, '') 
        .replace(/\*\*/g, '') 
        .replace(/\n\n+/g, '\n')
        .replace(/`[^`]*`/g, '') 
        .replace(/^#+.*$/mg, '')
        .trim();
    
    let summary = text.substring(0, 500);
    const lastPeriod = summary.lastIndexOf('。');
    if (lastPeriod > 500 * 0.7) {
      summary = summary.substring(0, lastPeriod + 1);
    } else {
      summary = summary + '...';
    }
    summaryText = summary;
  }
  
  item.summary = summaryText;
  
  if (id.startsWith("h_")) {
    summaries.push(item);
  }
}

fs.writeFileSync(OUT_FILE, JSON.stringify(summaries, null, 2), 'utf-8');
console.log(`Generated summaries.json with ${summaries.length} entries.`);
