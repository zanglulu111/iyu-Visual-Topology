#!/usr/bin/env node

/**
 * Claude Code 自动聊天记录保存系统
 *
 * 功能:
 * - 监听VSCode Claude Code扩展的聊天记录
 * - 自动保存每次对话
 * - 定期导出成Markdown
 * - 支持Obsidian集成
 *
 * 使用: node scripts/auto-save-chat.js
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { watch } from 'fs';
import readline from 'readline';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 配置
const CONFIG = {
  CHAT_HISTORY_DIR: path.join(__dirname, '../_chat-history'),
  SESSIONS_DIR: path.join(__dirname, '../_chat-sessions'),
  CURRENT_SESSION_FILE: path.join(__dirname, '../_chat-sessions/current-session.json'),
  AUTO_SAVE_INTERVAL: 30000, // 30秒自动保存一次
  VSCODE_STORAGE: path.expandUser('~/Library/Application Support/Code/User/globalStorage/emptyWindowChatSessions'),
};

// 确保目录存在
[CONFIG.CHAT_HISTORY_DIR, CONFIG.SESSIONS_DIR].forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

/**
 * 扩展用户路径
 */
function expandUser(filepath) {
  if (filepath[0] === '~') {
    return path.join(process.env.HOME, filepath.slice(1));
  }
  return filepath;
}

/**
 * 获取时间戳
 */
function getTimestamp() {
  return new Date().toISOString().replace(/[:.]/g, '-').slice(0, -5);
}

/**
 * 获取格式化日期
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
 * 当前会话管理
 */
class ChatSession {
  constructor() {
    this.sessionId = getTimestamp();
    this.messages = [];
    this.startTime = new Date();
    this.lastUpdate = new Date();
  }

  addMessage(role, content) {
    this.messages.push({
      role,
      content,
      timestamp: new Date().toISOString()
    });
    this.lastUpdate = new Date();
  }

  save() {
    const data = {
      sessionId: this.sessionId,
      startTime: this.startTime.toISOString(),
      lastUpdate: this.lastUpdate.toISOString(),
      messageCount: this.messages.length,
      messages: this.messages
    };

    fs.writeFileSync(
      CONFIG.CURRENT_SESSION_FILE,
      JSON.stringify(data, null, 2),
      'utf-8'
    );
  }

  toMarkdown(title = '聊天记录') {
    const timestamp = this.startTime.toLocaleString('zh-CN');
    let markdown = `# ${title}\n\n`;
    markdown += `**开始时间**: ${timestamp}\n`;
    markdown += `**消息数**: ${this.messages.length}\n\n`;
    markdown += `---\n\n`;

    for (const msg of this.messages) {
      const role = msg.role === 'user' ? '👤 User' : '🤖 Assistant';
      const time = new Date(msg.timestamp).toLocaleTimeString('zh-CN');
      markdown += `## ${role} (${time})\n\n`;
      markdown += `${msg.content}\n\n`;
      markdown += `---\n\n`;
    }

    return markdown;
  }

  export(useObsidian = false) {
    const timestamp = getTimestamp();
    const filename = `chat-${timestamp}.md`;
    const filepath = path.join(CONFIG.CHAT_HISTORY_DIR, filename);

    let markdown = this.toMarkdown();

    if (useObsidian) {
      const dateOnly = this.startTime.toISOString().split('T')[0];
      const frontmatter = `---
title: 聊天记录 ${dateOnly}
date: ${dateOnly}
tags:
  - claude
  - chat-history
  - auto-saved
---

`;
      markdown = frontmatter + markdown;
    }

    fs.writeFileSync(filepath, markdown, 'utf-8');
    console.log(`✅ 已导出: ${filename}`);
    return filepath;
  }
}

/**
 * 交互式聊天记录器
 */
class InteractiveChatRecorder {
  constructor() {
    this.session = new ChatSession();
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
    this.autoSaveTimer = null;
  }

  async start() {
    console.log('\n🤖 Claude Code 自动聊天记录系统\n');
    console.log('开始记录对话 (输入 "END" 结束, "SAVE" 保存, "EXPORT" 导出)\n');

    this.startAutoSave();
    await this.recordLoop();
  }

  async recordLoop() {
    while (true) {
      const userInput = await this.prompt('👤 User: ');

      if (userInput.toUpperCase() === 'END') {
        console.log('\n⏹️  停止记录');
        this.stopAutoSave();
        await this.handleEnd();
        break;
      }

      if (userInput.toUpperCase() === 'SAVE') {
        this.session.save();
        console.log('💾 已保存当前会话\n');
        continue;
      }

      if (userInput.toUpperCase() === 'EXPORT') {
        const useObsidian = await this.prompt('导出为Obsidian格式? (y/n): ');
        this.session.export(useObsidian.toLowerCase() === 'y');
        console.log('');
        continue;
      }

      this.session.addMessage('user', userInput);

      const assistantInput = await this.prompt('🤖 Assistant: ');
      this.session.addMessage('assistant', assistantInput);
      console.log('');
    }
  }

  prompt(question) {
    return new Promise(resolve => {
      this.rl.question(question, resolve);
    });
  }

  startAutoSave() {
    this.autoSaveTimer = setInterval(() => {
      if (this.session.messages.length > 0) {
        this.session.save();
        console.log(`💾 自动保存 (${this.session.messages.length} 条消息)`);
      }
    }, CONFIG.AUTO_SAVE_INTERVAL);
  }

  stopAutoSave() {
    if (this.autoSaveTimer) {
      clearInterval(this.autoSaveTimer);
    }
  }

  async handleEnd() {
    if (this.session.messages.length === 0) {
      console.log('没有记录任何对话');
      this.rl.close();
      return;
    }

    const shouldExport = await this.prompt('\n是否导出为Markdown? (y/n): ');
    if (shouldExport.toLowerCase() === 'y') {
      const useObsidian = await this.prompt('导出为Obsidian格式? (y/n): ');
      this.session.export(useObsidian.toLowerCase() === 'y');
    }

    console.log(`\n📊 统计:`);
    console.log(`   总消息数: ${this.session.messages.length}`);
    console.log(`   用户消息: ${this.session.messages.filter(m => m.role === 'user').length}`);
    console.log(`   助手回复: ${this.session.messages.filter(m => m.role === 'assistant').length}`);

    this.rl.close();
  }
}

/**
 * 文件系统监听器（监听VSCode存储）
 */
class VSCodeStorageWatcher {
  constructor() {
    this.lastModified = {};
    this.sessions = new Map();
  }

  start() {
    console.log('👁️  监听VSCode Claude Code存储...\n');
    console.log(`监听目录: ${CONFIG.VSCODE_STORAGE}\n`);

    if (!fs.existsSync(CONFIG.VSCODE_STORAGE)) {
      console.error(`❌ 目录不存在: ${CONFIG.VSCODE_STORAGE}`);
      console.log('💡 请确保已安装Claude Code扩展');
      process.exit(1);
    }

    watch(CONFIG.VSCODE_STORAGE, (eventType, filename) => {
      if (filename && filename.endsWith('.json')) {
        this.handleFileChange(filename);
      }
    });

    // 定期检查
    setInterval(() => this.checkForUpdates(), 5000);
  }

  handleFileChange(filename) {
    const filepath = path.join(CONFIG.VSCODE_STORAGE, filename);

    try {
      const stats = fs.statSync(filepath);
      const lastMod = stats.mtimeMs;

      if (this.lastModified[filename] !== lastMod) {
        this.lastModified[filename] = lastMod;
        this.processFile(filepath, filename);
      }
    } catch (error) {
      // 文件可能被删除
    }
  }

  processFile(filepath, filename) {
    try {
      const data = fs.readFileSync(filepath, 'utf-8');
      const json = JSON.parse(data);

      if (json.requests && json.requests.length > 0) {
        console.log(`📝 检测到新对话: ${filename}`);
        this.extractMessages(json, filename);
      }
    } catch (error) {
      // 解析错误，忽略
    }
  }

  extractMessages(json, filename) {
    const sessionId = json.sessionId || filename;

    if (!this.sessions.has(sessionId)) {
      this.sessions.set(sessionId, new ChatSession());
    }

    const session = this.sessions.get(sessionId);

    // 提取消息（具体格式取决于VSCode存储结构）
    if (json.requests && Array.isArray(json.requests)) {
      for (const req of json.requests) {
        if (req.message) {
          session.addMessage('user', req.message);
        }
        if (req.response) {
          session.addMessage('assistant', req.response);
        }
      }

      session.save();
      console.log(`✅ 已保存 (${session.messages.length} 条消息)\n`);
    }
  }

  checkForUpdates() {
    try {
      const files = fs.readdirSync(CONFIG.VSCODE_STORAGE);
      for (const file of files) {
        if (file.endsWith('.json')) {
          this.handleFileChange(file);
        }
      }
    } catch (error) {
      // 忽略错误
    }
  }
}

/**
 * 主程序
 */
async function main() {
  const args = process.argv.slice(2);
  const command = args[0];

  if (command === '--watch') {
    const watcher = new VSCodeStorageWatcher();
    watcher.start();
  } else if (command === '--interactive') {
    const recorder = new InteractiveChatRecorder();
    await recorder.start();
  } else if (command === '--help') {
    console.log(`
Claude Code 自动聊天记录保存系统

用法:
  node scripts/auto-save-chat.js --interactive  # 交互式记录
  node scripts/auto-save-chat.js --watch        # 监听VSCode存储
  node scripts/auto-save-chat.js --help         # 显示帮助

示例:
  # 交互式模式 - 手动输入对话
  node scripts/auto-save-chat.js --interactive

  # 监听模式 - 自动监听VSCode Claude Code
  node scripts/auto-save-chat.js --watch
    `);
  } else {
    // 默认交互式模式
    const recorder = new InteractiveChatRecorder();
    await recorder.start();
  }
}

main().catch(console.error);
