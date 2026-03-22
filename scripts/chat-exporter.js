#!/usr/bin/env node

/**
 * Claude Code 聊天记录导出器
 * 支持第三方API格式
 *
 * 使用方法:
 * 1. node scripts/chat-exporter.js --input chat.json
 * 2. node scripts/chat-exporter.js --clipboard
 * 3. node scripts/chat-exporter.js --watch
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import readline from 'readline';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const CHAT_HISTORY_DIR = path.join(__dirname, '../_chat-history');
const OBSIDIAN_VAULT = process.env.OBSIDIAN_VAULT || path.join(__dirname, '../_chat-history');

// 确保目录存在
if (!fs.existsSync(CHAT_HISTORY_DIR)) {
  fs.mkdirSync(CHAT_HISTORY_DIR, { recursive: true });
}

/**
 * 获取时间戳
 */
function getTimestamp() {
  const now = new Date();
  return now.toISOString().replace(/[:.]/g, '-').slice(0, -5);
}

/**
 * 获取格式化的日期
 */
function getFormattedDate() {
  return new Date().toLocaleString('zh-CN', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });
}

/**
 * 解析对话数据（支持多种格式）
 */
function parseConversation(data) {
  let messages = [];

  if (typeof data === 'string') {
    try {
      const parsed = JSON.parse(data);
      messages = Array.isArray(parsed) ? parsed : parsed.messages || [];
    } catch {
      // 如果不是JSON，尝试解析为文本格式
      messages = parseTextFormat(data);
    }
  } else if (Array.isArray(data)) {
    messages = data;
  } else if (data.messages) {
    messages = data.messages;
  }

  return messages;
}

/**
 * 解析文本格式的对话
 */
function parseTextFormat(text) {
  const messages = [];
  const lines = text.split('\n');
  let currentRole = null;
  let currentContent = [];

  for (const line of lines) {
    if (line.startsWith('User:') || line.startsWith('用户:')) {
      if (currentContent.length > 0) {
        messages.push({
          role: currentRole,
          content: currentContent.join('\n').trim()
        });
      }
      currentRole = 'user';
      currentContent = [line.replace(/^(User:|用户:)\s*/, '')];
    } else if (line.startsWith('Assistant:') || line.startsWith('助手:')) {
      if (currentContent.length > 0) {
        messages.push({
          role: currentRole,
          content: currentContent.join('\n').trim()
        });
      }
      currentRole = 'assistant';
      currentContent = [line.replace(/^(Assistant:|助手:)\s*/, '')];
    } else if (line.trim()) {
      currentContent.push(line);
    }
  }

  if (currentContent.length > 0) {
    messages.push({
      role: currentRole,
      content: currentContent.join('\n').trim()
    });
  }

  return messages;
}

/**
 * 生成Markdown内容
 */
function generateMarkdown(messages, title = '聊天记录') {
  const timestamp = getFormattedDate();
  let markdown = `# ${title}\n\n`;
  markdown += `**保存时间**: ${timestamp}\n\n`;
  markdown += `---\n\n`;

  for (const msg of messages) {
    const role = msg.role === 'user' ? '👤 User' : '🤖 Assistant';
    markdown += `## ${role}\n\n`;
    markdown += `${msg.content}\n\n`;
    markdown += `---\n\n`;
  }

  return markdown;
}

/**
 * 生成Obsidian格式（带frontmatter）
 */
function generateObsidianMarkdown(messages, title = '聊天记录') {
  const timestamp = getFormattedDate();
  const dateOnly = new Date().toISOString().split('T')[0];

  let markdown = `---\n`;
  markdown += `title: ${title}\n`;
  markdown += `date: ${dateOnly}\n`;
  markdown += `tags:\n`;
  markdown += `  - claude\n`;
  markdown += `  - chat-history\n`;
  markdown += `---\n\n`;

  markdown += `# ${title}\n\n`;
  markdown += `**保存时间**: ${timestamp}\n\n`;
  markdown += `---\n\n`;

  for (const msg of messages) {
    const role = msg.role === 'user' ? '👤 User' : '🤖 Assistant';
    markdown += `## ${role}\n\n`;
    markdown += `${msg.content}\n\n`;
    markdown += `---\n\n`;
  }

  return markdown;
}

/**
 * 保存到文件
 */
function saveToFile(content, filename, useObsidian = false) {
  const dir = useObsidian ? OBSIDIAN_VAULT : CHAT_HISTORY_DIR;
  const filepath = path.join(dir, filename);

  fs.writeFileSync(filepath, content, 'utf-8');
  console.log(`✅ 已保存: ${filepath}`);
  return filepath;
}

/**
 * 从文件读取对话
 */
function loadFromFile(filepath) {
  if (!fs.existsSync(filepath)) {
    console.error(`❌ 文件不存在: ${filepath}`);
    process.exit(1);
  }

  const data = fs.readFileSync(filepath, 'utf-8');
  return parseConversation(data);
}

/**
 * 交互式输入对话
 */
async function interactiveInput() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  const question = (prompt) => new Promise(resolve => rl.question(prompt, resolve));

  console.log('\n📝 Claude Code 聊天记录导出器\n');
  console.log('请选择输入方式:');
  console.log('1. 从JSON文件导入');
  console.log('2. 手动输入对话');
  console.log('3. 从文本文件导入\n');

  const choice = await question('请选择 (1-3): ');

  let messages = [];
  let title = '聊天记录';

  if (choice === '1') {
    const filepath = await question('请输入JSON文件路径: ');
    messages = loadFromFile(filepath);
  } else if (choice === '2') {
    console.log('\n输入对话内容 (输入 "END" 结束):');
    console.log('格式: User: 问题 / Assistant: 回答\n');

    let input = '';
    while (true) {
      const line = await question('> ');
      if (line === 'END') break;
      input += line + '\n';
    }

    messages = parseTextFormat(input);
  } else if (choice === '3') {
    const filepath = await question('请输入文本文件路径: ');
    const data = loadFromFile(filepath);
    messages = parseConversation(data);
  }

  if (messages.length === 0) {
    console.error('❌ 没有找到对话内容');
    rl.close();
    process.exit(1);
  }

  title = await question('\n请输入标题 (默认: 聊天记录): ') || '聊天记录';

  const useObsidian = await question('是否保存为Obsidian格式? (y/n): ');
  const isObsidian = useObsidian.toLowerCase() === 'y';

  const timestamp = getTimestamp();
  const filename = `chat-${timestamp}.md`;

  const markdown = isObsidian
    ? generateObsidianMarkdown(messages, title)
    : generateMarkdown(messages, title);

  saveToFile(markdown, filename, isObsidian);

  console.log(`\n📊 统计:`);
  console.log(`   总消息数: ${messages.length}`);
  console.log(`   用户消息: ${messages.filter(m => m.role === 'user').length}`);
  console.log(`   助手回复: ${messages.filter(m => m.role === 'assistant').length}`);

  rl.close();
}

/**
 * 命令行参数处理
 */
async function main() {
  const args = process.argv.slice(2);

  if (args.length === 0) {
    await interactiveInput();
    return;
  }

  const command = args[0];

  if (command === '--input' && args[1]) {
    const messages = loadFromFile(args[1]);
    const markdown = generateMarkdown(messages);
    const timestamp = getTimestamp();
    saveToFile(markdown, `chat-${timestamp}.md`);
  } else if (command === '--obsidian' && args[1]) {
    const messages = loadFromFile(args[1]);
    const markdown = generateObsidianMarkdown(messages);
    const timestamp = getTimestamp();
    saveToFile(markdown, `chat-${timestamp}.md`, true);
  } else if (command === '--help') {
    console.log(`
Claude Code 聊天记录导出器

用法:
  node scripts/chat-exporter.js                    # 交互式模式
  node scripts/chat-exporter.js --input <file>    # 从JSON导入
  node scripts/chat-exporter.js --obsidian <file> # 导出为Obsidian格式
  node scripts/chat-exporter.js --help             # 显示帮助

示例:
  node scripts/chat-exporter.js --input chat.json
  node scripts/chat-exporter.js --obsidian chat.json
    `);
  } else {
    console.error('❌ 未知命令。使用 --help 查看帮助');
    process.exit(1);
  }
}

main().catch(console.error);
