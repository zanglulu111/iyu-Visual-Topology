#!/usr/bin/env node

/**
 * Claude Code 自动保存脚本
 * 从剪贴板读取对话，自动转换成Markdown并保存
 *
 * 使用方法:
 * 1. 在Claude Code中复制对话
 * 2. node scripts/auto-save.js
 * 3. 完成！
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const CHAT_HISTORY_DIR = path.join(__dirname, '../_chat-history');

// 确保目录存在
if (!fs.existsSync(CHAT_HISTORY_DIR)) {
  fs.mkdirSync(CHAT_HISTORY_DIR, { recursive: true });
}

/**
 * 从剪贴板读取内容
 */
function getClipboardContent() {
  try {
    const content = execSync('pbpaste', { encoding: 'utf-8' });
    return content;
  } catch (error) {
    console.error('❌ 无法读取剪贴板。请确保已复制对话内容。');
    process.exit(1);
  }
}

/**
 * 解析对话内容
 */
function parseMessages(text) {
  const messages = [];
  const lines = text.split('\n');
  let currentRole = null;
  let currentContent = [];

  for (const line of lines) {
    // 检测用户消息
    if (line.match(/^(👤\s*User|用户|User)[\s:]/i)) {
      if (currentContent.length > 0 && currentRole) {
        messages.push({
          role: currentRole,
          content: currentContent.join('\n').trim()
        });
      }
      currentRole = 'user';
      currentContent = [line.replace(/^(👤\s*User|用户|User)[\s:]/i, '').trim()];
    }
    // 检测助手消息
    else if (line.match(/^(🤖\s*Assistant|助手|Assistant)[\s:]/i)) {
      if (currentContent.length > 0 && currentRole) {
        messages.push({
          role: currentRole,
          content: currentContent.join('\n').trim()
        });
      }
      currentRole = 'assistant';
      currentContent = [line.replace(/^(🤖\s*Assistant|助手|Assistant)[\s:]/i, '').trim()];
    }
    // 继续当前消息
    else if (line.trim() && currentRole) {
      currentContent.push(line);
    }
  }

  // 保存最后一条消息
  if (currentContent.length > 0 && currentRole) {
    messages.push({
      role: currentRole,
      content: currentContent.join('\n').trim()
    });
  }

  return messages;
}

/**
 * 生成Markdown
 */
function generateMarkdown(messages) {
  const now = new Date();
  const dateStr = now.toLocaleString('zh-CN', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });

  let md = `# Claude Code 聊天记录\n\n`;
  md += `**保存时间**: ${dateStr}\n`;
  md += `**消息数**: ${messages.length}\n\n`;
  md += `---\n\n`;

  for (const msg of messages) {
    const role = msg.role === 'user' ? '👤 User' : '🤖 Assistant';
    md += `## ${role}\n\n`;
    md += `${msg.content}\n\n`;
    md += `---\n\n`;
  }

  return md;
}

/**
 * 生成Obsidian格式
 */
function generateObsidianMarkdown(messages) {
  const now = new Date();
  const dateStr = now.toISOString().split('T')[0];
  const timeStr = now.toLocaleString('zh-CN', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });

  let md = `---\n`;
  md += `title: Claude Code 聊天记录\n`;
  md += `date: ${dateStr}\n`;
  md += `time: ${timeStr}\n`;
  md += `tags:\n`;
  md += `  - claude\n`;
  md += `  - chat\n`;
  md += `  - auto-saved\n`;
  md += `---\n\n`;

  md += `# Claude Code 聊天记录\n\n`;
  md += `**保存时间**: ${timeStr}\n`;
  md += `**消息数**: ${messages.length}\n\n`;
  md += `---\n\n`;

  for (const msg of messages) {
    const role = msg.role === 'user' ? '👤 User' : '🤖 Assistant';
    md += `## ${role}\n\n`;
    md += `${msg.content}\n\n`;
    md += `---\n\n`;
  }

  return md;
}

/**
 * 保存文件
 */
function saveFile(content, filename) {
  const filepath = path.join(CHAT_HISTORY_DIR, filename);
  fs.writeFileSync(filepath, content, 'utf-8');
  return filepath;
}

/**
 * 主函数
 */
function main() {
  console.log('📋 正在读取剪贴板...\n');

  const clipboardContent = getClipboardContent();

  if (!clipboardContent.trim()) {
    console.error('❌ 剪贴板为空。请先复制对话内容。');
    process.exit(1);
  }

  console.log('✅ 已读取剪贴板内容');
  console.log('🔍 正在解析对话...\n');

  const messages = parseMessages(clipboardContent);

  if (messages.length === 0) {
    console.error('❌ 未找到对话内容。请确保格式正确。');
    console.log('\n💡 预期格式:');
    console.log('👤 User: 你的问题');
    console.log('🤖 Assistant: 我的回答');
    process.exit(1);
  }

  // 生成文件名
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, -5);
  const filename = `chat-${timestamp}.md`;

  // 保存普通Markdown
  const markdown = generateMarkdown(messages);
  const filepath = saveFile(markdown, filename);

  // 同时保存Obsidian格式
  const obsidianFilename = `chat-obsidian-${timestamp}.md`;
  const obsidianMarkdown = generateObsidianMarkdown(messages);
  const obsidianPath = saveFile(obsidianMarkdown, obsidianFilename);

  // 显示统计信息
  console.log('📊 统计信息:');
  console.log(`   总消息数: ${messages.length}`);
  console.log(`   用户消息: ${messages.filter(m => m.role === 'user').length}`);
  console.log(`   助手回复: ${messages.filter(m => m.role === 'assistant').length}`);

  console.log('\n✅ 保存成功!');
  console.log(`   📄 普通格式: ${filepath}`);
  console.log(`   📝 Obsidian格式: ${obsidianPath}`);

  // 显示文件大小
  const size = (fs.statSync(filepath).size / 1024).toFixed(2);
  console.log(`   📦 文件大小: ${size} KB`);
}

main();
