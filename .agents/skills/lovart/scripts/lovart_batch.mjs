#!/usr/bin/env node
import crypto from 'node:crypto';
import fs from 'node:fs/promises';
import fssync from 'node:fs';
import path from 'node:path';

const LOVART_PREFIX = '/v1/openapi';

function usage() {
  return `Usage:
  node .agents/skills/lovart/scripts/lovart_batch.mjs --prompt "..." [--out DIR] [--download]
  node .agents/skills/lovart/scripts/lovart_batch.mjs --input prompts.jsonl [--out DIR] [--download]

Options:
  --prompt TEXT             Single prompt to submit.
  --input FILE              JSON, JSONL, Markdown, or plain text batch file.
  --out DIR                 Output directory. Default: outputs/lovart-<timestamp>
  --env FILE                Env file. Default: first .env found from cwd upward.
  --project-id ID           Reuse an existing Lovart project.
  --project-name NAME       Name for an auto-created project.
  --timeout-ms N            Per-task polling timeout. Default: 180000.
  --poll-ms N               Poll interval. Default: 3000.
  --concurrency N           Parallel submissions. Default: 1.
  --download                Download returned artifacts locally.
  --dry-run                 Parse inputs and print the planned tasks only.
  --prefer-models JSON      Tool preference object, or @path/to/file.json.
  --include-tools CSV       Comma-separated include_tools list.
  --exclude-tools CSV       Comma-separated exclude_tools list.
  --limit N                 Only run the first N parsed tasks.
  --help                    Show this help.
`;
}

function parseArgs(argv) {
  const args = {};
  for (let i = 0; i < argv.length; i += 1) {
    const token = argv[i];
    if (!token.startsWith('--')) {
      throw new Error(`Unexpected argument: ${token}`);
    }
    const key = token.slice(2);
    if (['download', 'dry-run', 'help'].includes(key)) {
      args[key] = true;
      continue;
    }
    const value = argv[i + 1];
    if (value === undefined || value.startsWith('--')) {
      throw new Error(`Missing value for --${key}`);
    }
    args[key] = value;
    i += 1;
  }
  return args;
}

function parseEnvText(text) {
  const env = {};
  for (const rawLine of text.split(/\r?\n/)) {
    const line = rawLine.trim();
    if (!line || line.startsWith('#')) continue;
    const match = line.match(/^([A-Za-z_][A-Za-z0-9_]*)\s*=\s*(.*)$/);
    if (!match) continue;
    let value = match[2].trim();
    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1);
    }
    env[match[1]] = value;
  }
  return env;
}

async function findEnvFile(startDir) {
  let current = path.resolve(startDir);
  while (true) {
    const candidate = path.join(current, '.env');
    if (fssync.existsSync(candidate)) return candidate;
    const parent = path.dirname(current);
    if (parent === current) return '';
    current = parent;
  }
}

async function loadEnv(args) {
  const envFile = args.env ? path.resolve(args.env) : await findEnvFile(process.cwd());
  const fileEnv = envFile && fssync.existsSync(envFile)
    ? parseEnvText(await fs.readFile(envFile, 'utf8'))
    : {};
  const merged = { ...process.env, ...fileEnv };
  return {
    ...merged,
    LOVART_BASE_URL: args['base-url'] || fileEnv.LOVART_BASE_URL || process.env.LOVART_BASE_URL || 'https://lgw.lovart.ai',
    __envFile: envFile
  };
}

async function loadOfficialLovartState() {
  const home = process.env.HOME || process.env.USERPROFILE || '';
  if (!home) return {};
  const statePath = path.join(home, '.lovart', 'state.json');
  try {
    return JSON.parse(await fs.readFile(statePath, 'utf8'));
  } catch {
    return {};
  }
}

function assertCredentials(env) {
  const missing = ['LOVART_ACCESS_KEY', 'LOVART_SECRET_KEY']
    .filter(key => !env[key]);
  if (missing.length) {
    throw new Error(`Missing Lovart credentials: ${missing.join(', ')}. Put them in .env or export them.`);
  }
}

function sign(method, apiPath, secretKey) {
  const timestamp = String(Math.floor(Date.now() / 1000));
  const signature = crypto
    .createHmac('sha256', secretKey)
    .update(`${method}\n${apiPath}\n${timestamp}`)
    .digest('hex');
  return { timestamp, signature };
}

async function lovartRequest(env, method, apiPath, body, params) {
  const baseUrl = String(env.LOVART_BASE_URL || 'https://lgw.lovart.ai').replace(/\/$/, '');
  const query = params ? `?${new URLSearchParams(params).toString()}` : '';
  const { timestamp, signature } = sign(method, apiPath, env.LOVART_SECRET_KEY);
  const response = await fetch(`${baseUrl}${apiPath}${query}`, {
    method,
    headers: {
      'Content-Type': 'application/json',
      'User-Agent': 'MistSchoolLovartBatch/1.0',
      'X-Access-Key': env.LOVART_ACCESS_KEY,
      'X-Timestamp': timestamp,
      'X-Signature': signature,
      'X-Signed-Method': method,
      'X-Signed-Path': apiPath
    },
    body: body === undefined ? undefined : JSON.stringify(body)
  });

  const text = await response.text();
  let parsed = {};
  try {
    parsed = text ? JSON.parse(text) : {};
  } catch {
    throw new Error(`Lovart returned non-JSON response (${response.status}): ${text.slice(0, 300)}`);
  }

  if (!response.ok) {
    const reason = parsed?.message || parsed?.error || `Lovart HTTP ${response.status}`;
    throw new Error(`Lovart ${apiPath} failed: ${reason}`);
  }
  if (typeof parsed?.code === 'number' && parsed.code !== 0) {
    const reason = parsed.message || `Lovart error code ${parsed.code}`;
    throw new Error(`Lovart ${apiPath} failed: ${reason}`);
  }
  return parsed?.data || parsed;
}

async function createProject(env, projectName) {
  const body = {
    project_id: '',
    canvas: '',
    project_cover_list: [],
    pic_count: 0,
    project_type: 3
  };
  if (projectName) body.project_name = projectName;
  const data = await lovartRequest(env, 'POST', `${LOVART_PREFIX}/project/save`, body);
  return data?.project_id || '';
}

async function sendChat(env, task, projectId, defaults) {
  const toolConfig = {};
  if (task.preferModels || defaults.preferModels) {
    toolConfig.prefer_tool_categories = task.preferModels || defaults.preferModels;
  }
  if (task.includeTools?.length || defaults.includeTools?.length) {
    toolConfig.include_tools = task.includeTools || defaults.includeTools;
  }
  if (task.excludeTools?.length || defaults.excludeTools?.length) {
    toolConfig.exclude_tools = task.excludeTools || defaults.excludeTools;
  }

  const data = await lovartRequest(env, 'POST', `${LOVART_PREFIX}/chat`, {
    prompt: task.prompt,
    project_id: projectId,
    ...(task.attachments?.length ? { attachments: task.attachments } : {}),
    ...(Object.keys(toolConfig).length ? { tool_config: toolConfig } : {})
  });
  return data?.thread_id || '';
}

function getStatus(env, threadId) {
  return lovartRequest(env, 'GET', `${LOVART_PREFIX}/chat/status`, undefined, { thread_id: threadId });
}

function getResult(env, threadId) {
  return lovartRequest(env, 'GET', `${LOVART_PREFIX}/chat/result`, undefined, { thread_id: threadId });
}

function collectArtifacts(result) {
  const artifacts = [];
  for (const item of result?.items || []) {
    for (const artifact of item?.artifacts || []) {
      if (artifact?.content) {
        artifacts.push({ type: artifact.type || 'unknown', url: artifact.content });
      }
    }
  }

  const seen = new Set(artifacts.map(item => item.url));
  function visit(value) {
    if (!value || typeof value !== 'object') return;
    if (Array.isArray(value)) {
      for (const item of value) visit(item);
      return;
    }
    for (const [key, child] of Object.entries(value)) {
      if (typeof child === 'string' && /^https?:\/\//i.test(child) && !seen.has(child)) {
        const type = key.toLowerCase().includes('video') ? 'video' : key.toLowerCase().includes('audio') ? 'audio' : 'unknown';
        seen.add(child);
        artifacts.push({ type, url: child });
      } else {
        visit(child);
      }
    }
  }
  visit(result);
  return artifacts;
}

async function pollUntilReady(env, threadId, timeoutMs, pollMs) {
  const deadline = Date.now() + timeoutMs;
  let finalStatus = 'timeout';
  let result = null;

  while (Date.now() < deadline) {
    const statusPayload = await getStatus(env, threadId);
    const status = statusPayload?.status || statusPayload?.state || '';
    if (status) finalStatus = status;

    if (status === 'abort' || status === 'failed') {
      result = await getResult(env, threadId).catch(() => null);
      return { finalStatus: status, result };
    }

    result = await getResult(env, threadId).catch(() => result);
    if (result?.pending_confirmation) {
      return { finalStatus: 'pending_confirmation', result };
    }

    if (status === 'done') {
      await sleep(2500);
      result = await getResult(env, threadId);
      return { finalStatus: 'done', result };
    }

    await sleep(pollMs);
  }

  result = await getResult(env, threadId).catch(() => result);
  return { finalStatus: 'timeout', result };
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function safeName(value, fallback) {
  const clean = String(value || fallback)
    .normalize('NFKD')
    .replace(/[^a-zA-Z0-9._-]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 80);
  return clean || fallback;
}

function extensionFromContentType(contentType, url) {
  const clean = String(contentType || '').split(';')[0].trim().toLowerCase();
  if (clean === 'image/png') return 'png';
  if (clean === 'image/webp') return 'webp';
  if (clean === 'image/gif') return 'gif';
  if (clean === 'image/svg+xml') return 'svg';
  if (clean === 'video/mp4') return 'mp4';
  if (clean === 'video/webm') return 'webm';
  if (clean === 'video/quicktime') return 'mov';
  if (clean === 'audio/mpeg') return 'mp3';
  if (clean === 'audio/wav') return 'wav';
  const fromUrl = String(url || '').split('?')[0].match(/\.([a-zA-Z0-9]{2,5})$/);
  return fromUrl ? fromUrl[1].toLowerCase() : 'bin';
}

async function downloadArtifacts(artifacts, taskDir) {
  await fs.mkdir(taskDir, { recursive: true });
  const downloads = [];
  for (let i = 0; i < artifacts.length; i += 1) {
    const artifact = artifacts[i];
    try {
      const response = await fetch(artifact.url);
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const contentType = response.headers.get('content-type') || '';
      const ext = extensionFromContentType(contentType, artifact.url);
      const file = path.join(taskDir, `${String(i + 1).padStart(2, '0')}-${safeName(artifact.type, 'artifact')}.${ext}`);
      const bytes = Buffer.from(await response.arrayBuffer());
      await fs.writeFile(file, bytes);
      downloads.push({ ...artifact, file, contentType, size: bytes.byteLength });
    } catch (error) {
      downloads.push({ ...artifact, error: error?.message || String(error) });
    }
  }
  return downloads;
}

function normalizeTask(task, index, defaults) {
  if (typeof task === 'string') {
    return { id: `task-${String(index + 1).padStart(3, '0')}`, prompt: task.trim() };
  }
  const normalized = {
    ...task,
    id: task.id || task.name || `task-${String(index + 1).padStart(3, '0')}`,
    prompt: String(task.prompt || '').trim()
  };
  if (typeof normalized.attachments === 'string') {
    normalized.attachments = normalized.attachments.split(',').map(item => item.trim()).filter(Boolean);
  }
  for (const key of ['includeTools', 'excludeTools']) {
    if (typeof normalized[key] === 'string') {
      normalized[key] = normalized[key].split(',').map(item => item.trim()).filter(Boolean);
    }
  }
  if (!normalized.preferModels && defaults.preferModels) normalized.preferModels = defaults.preferModels;
  if (!normalized.includeTools && defaults.includeTools) normalized.includeTools = defaults.includeTools;
  if (!normalized.excludeTools && defaults.excludeTools) normalized.excludeTools = defaults.excludeTools;
  return normalized;
}

async function parseJsonish(value) {
  if (!value) return undefined;
  if (String(value).startsWith('@')) {
    return JSON.parse(await fs.readFile(path.resolve(String(value).slice(1)), 'utf8'));
  }
  return JSON.parse(value);
}

function parseCsv(value) {
  return value ? String(value).split(',').map(item => item.trim()).filter(Boolean) : undefined;
}

async function loadTasks(args, defaults) {
  let rawTasks = [];
  if (args.prompt) {
    rawTasks = [{ prompt: args.prompt }];
  } else if (args.input) {
    const inputPath = path.resolve(args.input);
    const text = await fs.readFile(inputPath, 'utf8');
    const trimmed = text.trim();
    if (!trimmed) rawTasks = [];
    else if (path.extname(inputPath).toLowerCase() === '.jsonl') {
      rawTasks = trimmed.split(/\r?\n/)
        .map(line => line.trim())
        .filter(line => line && !line.startsWith('#'))
        .map(line => JSON.parse(line));
    }
    else if (trimmed.startsWith('{') || trimmed.startsWith('[')) {
      const parsed = JSON.parse(trimmed);
      rawTasks = Array.isArray(parsed) ? parsed : parsed.tasks ? parsed.tasks : [parsed];
    } else {
      rawTasks = trimmed.split(/\r?\n---\r?\n/)
        .map(block => block.trim())
        .filter(Boolean)
        .map((block, index) => {
          const lines = block.split(/\r?\n/);
          const idMatch = lines[0]?.match(/^id:\s*(.+)$/i);
          return idMatch
            ? { id: idMatch[1].trim(), prompt: lines.slice(1).join('\n').trim() }
            : { id: `task-${String(index + 1).padStart(3, '0')}`, prompt: block };
        });
    }
  } else {
    throw new Error('Provide --prompt or --input.');
  }

  const tasks = rawTasks
    .map((task, index) => normalizeTask(task, index, defaults))
    .filter(task => task.prompt);
  const limit = Number(args.limit || 0);
  return limit > 0 ? tasks.slice(0, limit) : tasks;
}

async function appendJsonl(file, value) {
  await fs.appendFile(file, `${JSON.stringify(value)}\n`, 'utf8');
}

async function runTask(task, context) {
  const startedAt = new Date().toISOString();
  const record = {
    id: task.id,
    prompt: task.prompt,
    startedAt,
    ok: false
  };

  try {
    const projectId = task.projectId || context.projectId;
    const threadId = await sendChat(context.env, task, projectId, context.defaults);
    if (!threadId) throw new Error('Lovart did not return thread_id.');

    console.log(`[lovart] ${task.id}: submitted thread ${threadId}`);
    const timeoutMs = Number(task.timeoutMs || context.timeoutMs);
    const { finalStatus, result } = await pollUntilReady(context.env, threadId, timeoutMs, context.pollMs);
    const artifacts = collectArtifacts(result);
    const downloads = context.download
      ? await downloadArtifacts(artifacts, path.join(context.outDir, 'downloads', safeName(task.id, 'task')))
      : [];

    return {
      ...record,
      ok: finalStatus === 'done' && artifacts.length > 0,
      finalStatus,
      projectId,
      threadId,
      artifacts,
      downloads,
      canvasUrl: `https://www.lovart.ai/canvas?projectId=${projectId}`,
      finishedAt: new Date().toISOString()
    };
  } catch (error) {
    return {
      ...record,
      ok: false,
      error: error?.message || String(error),
      finishedAt: new Date().toISOString()
    };
  }
}

async function runWithConcurrency(tasks, concurrency, worker) {
  const results = new Array(tasks.length);
  let next = 0;
  const runners = Array.from({ length: Math.min(concurrency, tasks.length) }, async () => {
    while (next < tasks.length) {
      const index = next;
      next += 1;
      results[index] = await worker(tasks[index], index);
    }
  });
  await Promise.all(runners);
  return results;
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  if (args.help) {
    console.log(usage());
    return;
  }

  const defaults = {
    preferModels: await parseJsonish(args['prefer-models']),
    includeTools: parseCsv(args['include-tools']),
    excludeTools: parseCsv(args['exclude-tools'])
  };
  const tasks = await loadTasks(args, defaults);
  if (!tasks.length) throw new Error('No runnable tasks found.');

  if (args['dry-run']) {
    console.log(JSON.stringify({ count: tasks.length, tasks }, null, 2));
    return;
  }

  const env = await loadEnv(args);
  assertCredentials(env);

  const stamp = new Date().toISOString().replace(/[:.]/g, '-');
  const outDir = path.resolve(args.out || `outputs/lovart-${stamp}`);
  await fs.mkdir(outDir, { recursive: true });
  const manifestPath = path.join(outDir, 'manifest.jsonl');
  await fs.writeFile(path.join(outDir, 'tasks.json'), JSON.stringify(tasks, null, 2), 'utf8');
  await fs.writeFile(manifestPath, '', 'utf8');

  const officialState = await loadOfficialLovartState();
  let projectId = args['project-id'] || env.LOVART_PROJECT_ID || officialState.active_project || '';
  if (!projectId) {
    projectId = await createProject(env, args['project-name'] || `Mist School Lovart Batch ${stamp}`);
    if (!projectId) throw new Error('Lovart project_id was not created.');
  }

  const context = {
    env,
    defaults,
    outDir,
    projectId,
    timeoutMs: Number(args['timeout-ms'] || 180000),
    pollMs: Number(args['poll-ms'] || 3000),
    download: Boolean(args.download)
  };
  const concurrency = Math.max(1, Number(args.concurrency || 1));

  console.log(`[lovart] env: ${env.__envFile || 'process environment'}`);
  console.log(`[lovart] project: ${projectId}`);
  console.log(`[lovart] tasks: ${tasks.length}, concurrency: ${concurrency}`);
  console.log(`[lovart] out: ${outDir}`);

  const results = await runWithConcurrency(tasks, concurrency, async (task, index) => {
    console.log(`[lovart] ${task.id}: starting (${index + 1}/${tasks.length})`);
    const result = await runTask(task, context);
    await appendJsonl(manifestPath, result);
    console.log(`[lovart] ${task.id}: ${result.ok ? 'ok' : result.finalStatus || 'failed'}`);
    if (result.error) console.log(`[lovart] ${task.id}: ${result.error}`);
    return result;
  });

  const summary = {
    ok: results.filter(item => item.ok).length,
    failed: results.filter(item => !item.ok).length,
    total: results.length,
    projectId,
    canvasUrl: `https://www.lovart.ai/canvas?projectId=${projectId}`,
    outDir,
    manifestPath,
    finishedAt: new Date().toISOString()
  };
  await fs.writeFile(path.join(outDir, 'summary.json'), JSON.stringify(summary, null, 2), 'utf8');
  console.log(`[lovart] summary: ${summary.ok}/${summary.total} ok`);
  console.log(JSON.stringify(summary, null, 2));
}

main().catch(error => {
  console.error(`[lovart] error: ${error?.message || String(error)}`);
  process.exit(1);
});
