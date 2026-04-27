#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const SOURCE_ROOTS = [
  'codex-drafts/mist/00_总纲与宪法',
  'codex-drafts/mist/01_第一卷_迷雾学派与爱欲结构拓扑学',
  'codex-drafts/mist/02_第二卷_核心叙事引擎_M0-M7',
  'codex-drafts/mist/03_第三卷_SUR-SV表层设定与生产协议',
].map((p) => path.join(ROOT, p));
const DETAILS_DIR = path.join(ROOT, 'public/data/codex/mist/details');
const SUMMARIES_PATH = path.join(ROOT, 'public/data/codex/mist/summaries.json');
const INDEX_PATH = path.join(ROOT, 'data/codex/philosophy_refined.ts');

const pathIdFallback = new Map([
  ['03_03_02_正交公理与笛卡尔乘积.md', 'orthogonality_axiom_cartesian_product'],
]);

function walk(dir, out = []) {
  for (const entry of fs.readdirSync(dir)) {
    const full = path.join(dir, entry);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) walk(full, out);
    else if (entry.endsWith('.md')) out.push(full);
  }
  return out;
}

function parseIndex() {
  const fullText = fs.readFileSync(INDEX_PATH, 'utf8');
  const start = fullText.indexOf('export const MIST_INDEX');
  const end = fullText.indexOf('// 1. 黑格尔思想索引');
  const text = fullText.slice(start, end === -1 ? undefined : end);
  const meta = new Map();
  const conceptRegex = /\{\s*id:\s*"([^"]+)",\s*name:\s*"([^"]+)",\s*enName:\s*"([^"]+)",\s*category:\s*"([^"]+)",\s*shortDef:\s*"([^"]+)",\s*author:\s*"([^"]+)",\s*source:\s*"([^"]+)"/g;
  let match;
  while ((match = conceptRegex.exec(text))) {
    meta.set(match[1], {
      id: match[1],
      name: match[2],
      enName: match[3],
      category: match[4],
      shortDef: match[5],
      author: match[6],
      source: match[7],
    });
  }
  return meta;
}

function parseId(raw, file) {
  const match = raw.match(/^id[：:]\s*[“"']?([^“"'\n]+)[”"']?/m);
  if (match) return match[1].trim();
  return pathIdFallback.get(path.basename(file));
}

function stripFrontmatter(raw) {
  const normalized = raw.replace(/\r\n/g, '\n');
  const match = normalized.match(/^---\n[\s\S]*?\n---\n?/);
  if (!match) return normalized;
  return normalized.slice(match[0].length);
}

function removeInitialHeading(body) {
  const lines = body.replace(/^\s+/, '').split('\n');
  const idx = lines.findIndex((line) => line.startsWith('# '));
  if (idx === -1 || idx > 8) return body.trim();

  let end = idx + 1;
  while (end < lines.length) {
    const trimmed = lines[end].trim();
    if (!trimmed) {
      end++;
      continue;
    }
    if (trimmed === '|' || trimmed.startsWith('| ')) {
      end++;
      continue;
    }
    break;
  }
  lines.splice(idx, end - idx);
  return lines.join('\n').trim();
}

function replaceSection(text, headingPattern, replacement) {
  const match = text.match(headingPattern);
  if (!match || match.index == null) return text;
  const start = match.index;
  const after = start + match[0].length;
  const next = text.slice(after).search(/\n##\s+/);
  const end = next === -1 ? text.length : after + next;
  return `${text.slice(0, start)}${replacement.trim()}\n${text.slice(end)}`;
}

function cleanLegacyLanguage(text, id) {
  let out = text;

  out = out.replace(/\[!(IMPORTANT|TIP|CAUTION|NOTE|WARNING)\]/g, '');
  out = out.replace(/^```[a-zA-Z0-9_-]*\s*$/gm, '');
  out = out.replace(/^```\s*$/gm, '');
  out = out.replace(/^\s*---\s*$/gm, '');

  out = out.replace(/旧范式容易将缺失理解为["“]创伤["”]、["“]残缺["”]或["“]需要被治愈的疾病["”]。/g, '缺失不是“创伤”、“残缺”或“需要被治愈的疾病”。');
  out = out.replace(/旧范式容易将缺失理解为“创伤”、“残缺”或“需要被治愈的疾病”。/g, '缺失不是“创伤”、“残缺”或“需要被治愈的疾病”。');

  out = out.replace(/若第五卷继续复述缺失、对象 a、否定性、余痕等概念，它只会削弱系统。因此，/g, '');
  out = out.replace(/并吸收原第五卷中真正有原创生产功能的视觉概念：/g, '并在本体论层面整合真正具有原创生产功能的视觉概念：');
  out = out.replace(/卷三吸收原第五卷中真正属于生产方法的内容：/g, '卷三把真正属于生产方法的内容纳入 SUR/SV 工作流：');
  out = out.replace(/旧 M8 的有效理论进入 M7A，旧 M7 的余痕功能进入 M7B，旧 SUR11 降权为 SUR-END。/g, '第七位点内部拆分为 M7A 与 M7B：M7A 负责意义裁决，M7B 负责余痕沉积；SUR-END 只承担最后可见画面。');
  out = out.replace(/旧 M8 的理论发现已经进入 M7A；旧 M7 的余痕功能已经进入 M7B；SUR-END 降权为 SUR-END，只负责最后可见画面。/g, 'M7A 负责象征裁决，M7B 负责实在余痕；SUR-END 只负责最后可见画面。');
  out = out.replace(/因此不再需要第五卷以辞典形式重复这些概念。/g, '因此不再需要以辞典形式重复这些概念。');
  out = out.replace(/M0-M7 是公开骨架；第七位点内部拆分为 \*\*M7A 象征裁决\*\* 与 \*\*M7B 实在余痕\*\*。第七位点内部拆分为 M7A 与 M7B：M7A 负责意义裁决，M7B 负责余痕沉积；SUR-END 只承担最后可见画面。/g, 'M0-M7 是公开骨架；第七位点内部拆分为 **M7A 象征裁决** 与 **M7B 实在余痕**：M7A 负责意义裁决，M7B 负责余痕沉积；SUR-END 只承担最后可见画面。');

  out = out.replace(/第四卷/g, '第三卷');
  out = out.replace(/旧\s*`?SUR11`?\s*兼容路径/g, 'SUR-END');
  out = out.replace(/旧\s*SUR11/g, 'SUR-END');
  out = out.replace(/旧\s*`?SUR4X`?/g, 'SUR4X');
  out = out.replace(/旧方式：/g, '解释性用法：');
  out = out.replace(/新方式：/g, '生产性用法：');
  out = out.replace(/在旧方式中/g, '在解释性用法中');
  out = out.replace(/旧 UI 文案/g, '界面文案');
  out = out.replace(/旧式/g, '');
  out = out.replace(/旧版本/g, '既有写法');
  out = out.replace(/旧版/g, '既有写法');
  out = out.replace(/历史文档或代码归档中保留这些名称，只能作为迁移说明或兼容遗留，不得作为新理论依据。/g, '这些名称不进入公开理论的参数体系。');
  out = out.replace(/任何历史文档中把/g, '任何把');
  out = out.replace(/全部降级为单一写法。/g, '都必须回到本章的分层边界。');
  out = out.replace(/如果与此冲突，以本章为准。?/g, '均以本章的分层边界执行。');
  out = out.replace(/以本文的分层与边界为准。?/g, '按照本理论的分层与边界执行。');
  out = out.replace(/以本章为准。?/g, '按照本章的分层边界执行。');
  out = out.replace(/单一写法曾设有/g, '叙事调音台不额外设置');
  out = out.replace(/单一写法引擎将/g, '结项谱系将');
  out = out.replace(/单一写法名称/g, '结项名称');
  out = out.replace(/单一写法说法是：M7 落地后，M2-M6 的意义被回溯性确定。新版必须改写为：/g, 'M7A/M7B 双结项必须明确分工：');
  out = out.replace(/M7B 中剥离单一写法 M7 的"意义裁决"职责。/g, 'M7B 必须与 M7A 的“意义裁决”职责分离。');
  out = out.replace(/最终版全部降权或归档，原因很简单：/g, '这些强度推子不进入公开参数体系，原因很简单：');
  out = out.replace(/最终版不再使用/g, '本章不使用');
  out = out.replace(/active 数据层/g, '公开理论');
  out = out.replace(/active 参数/g, '公开参数');
  out = out.replace(/active 协议/g, '公开协议');
  out = out.replace(/_archive/g, '归档区');
  out = out.replace(/迁移进/g, '纳入');
  out = out.replace(/迁移至/g, '进入');
  out = out.replace(/迁移/g, '转入');

  out = out.replace(/^.*所属卷宗.*$/gm, '');
  out = out.replace(/^.*编纂节点.*$/gm, '');
  out = out.replace(/^.*拓扑状态.*$/gm, '');
  out = out.replace(/^.*配置说明.*$/gm, '');
  out = out.replace(/^.*可对接第三卷.*$/gm, '');

  out = out.replace(/SUR11（显性结局）/g, 'SUR-END（显性收场）');
  out = out.replace(/SUR11/g, 'SUR-END');
  out = out.replace(/降权后的 \*\*SUR-END\*\*/g, '作为表层收场的 **SUR-END**');
  out = out.replace(/降权后的 SUR-END/g, '作为表层收场的 SUR-END');
  out = out.replace(/SUR-END 降权后的正交层简化/g, 'SUR-END 的正交层边界');
  out = out.replace(/SUR-END 的降权是本次理论定稿的关键。/g, 'SUR-END 的边界是三轴分工的关键。');
  out = out.replace(/SUR-END 的问题在于它被命名为“显性大结局”/g, '如果显性收场被理解为“显性大结局”');
  out = out.replace(/拆分、降权或删除/g, '拆分、改写或删除');
  out = out.replace(/自 起，/g, '');
  out = out.replace(/迷雾引擎 的/g, '迷雾引擎的');
  out = out.replace(/（ 更新部分加粗）/g, '');
  out = out.replace(/（ 新增）/g, '');
  out = out.replace(/与 的关键区别/g, '双结项边界');
  out = out.replace(/\|\s*元素\s*\|\s*\|\s*\|/g, '| 元素 | 最终边界 | 说明 |');
  out = out.replace(/(?<!\*)\*([^*\n]+)\*(?!\*)/g, '$1');
  out = out.replace(/core 的穿刺点/g, '结构穿刺点');
  out = out.replace(/core 字段/g, '核心字段');
  out = out.replace(/核心 \(core\)/g, '核心字段');
  out = out.replace(/分类警示/g, '分类原则');
  out = out.replace(/重要提示/g, '结构提示');

  if (id === 'erotic_structural_topology') {
    out = out.replace(/基本判断是： 图像不是装饰结构的外壳/g, '基本判断是：\n\n图像不是装饰结构的外壳');
    out = out.replace(/(\*\*研究主体缺失如何形成欲望轨道[\s\S]*?被看见的理论。\*\*) 它是迷雾学派的根。/g, '$1\n\n它是迷雾学派的根。');
  }

  if (id === 'generative_engine') {
    out = out.replace(
      /发生器的意义在于完成一个方向翻转： 解释性用法：作品已经存在，理论解释它为什么有深度。\s*生产性用法：结构先被配置，作品由结构压力生成深度。/g,
      `发生器的意义在于完成一个方向翻转：

- **解释性用法**：作品已经存在，理论解释它为什么有深度。
- **生产性用法**：结构先被配置，作品由结构压力生成深度。`
    );
    out = out.replace(/(Story = M0 \{\[\(M1↔M2↔M3\)\/M4\]×M5\} ⇒Act M6 → \(M7A◇M7B\) ↺ M1')\s*其中/g, '$1\n\n其中');
    out = out.replace(/东西。 M7A 负责象征裁决/g, '东西。\n\nM7A 负责象征裁决');
    out = out.replace(/(M7A → M7B → M0 → M1 → M2 → M3 → M4 → M5 → M6 → SUR\/SV)\s*这个顺序/g, '$1\n\n这个顺序');
    out = out.replace(/结构精确性。 发生器的最低合格标准是：/g, '结构精确性。\n\n发生器的最低合格标准是：');
    out = out.replace(/^(M[1-7][AB]? 不是[^\n。]+。)$/gm, '- $1');
    out = out.replace(/^(SUR-END 不是[^\n。]+。)$/gm, '- $1');
    out = out.replace(/治愈感。\s*-\s*SUR-END/g, '治愈感。\n- SUR-END');
    out = out.replace(/意义。\s*当这些边界成立/g, '意义。\n\n当这些边界成立');
  }

  if (id === 'mist_school_complete_theory') {
    out = out.replace(/迷雾学派的本体论基础是\*\*爱欲结构拓扑学\*\*。 这里的/g, '迷雾学派的本体论基础是**爱欲结构拓扑学**。\n\n这里的');
    out = out.replace(/轨道。 这里的/g, '轨道。\n\n这里的');
    out = out.replace(/作品表面。 因此/g, '作品表面。\n\n因此');
    out = out.replace(/仍然成立。 爱欲结构拓扑学的最小公式可以写成： 主体 = 缺失 \+ 对缺失的防御 \+ 防御失败后的余痕\s*进一步写成创作公式： 作品 = 欲望运动的可见拓扑/g, '仍然成立。\n\n爱欲结构拓扑学的最小公式可以写成：\n\n主体 = 缺失 + 对缺失的防御 + 防御失败后的余痕\n\n进一步写成创作公式：\n\n作品 = 欲望运动的可见拓扑');
    out = out.replace(/(\*\*一种以爱欲结构拓扑学为本体[\s\S]*?硬核。\*\*) 迷雾作品的目标/g, '$1\n\n迷雾作品的目标');
    out = out.replace(/存在形状。 故事结束时/g, '存在形状。\n\n故事结束时');
  }

  if (id === 'mist_core_narrative_engine_canonical_theory') {
    out = out.replace(/设置\s+\*\*M7A\*\*。象征裁决不是/g, '设置 **M7A：象征裁决**。象征裁决不是');
    out = out.replace(/结构卫生。 第一，/g, '结构卫生。\n\n第一，');
    out = out.replace(/意义。 第二，/g, '意义。\n\n第二，');
    out = out.replace(/正交性。双结项架构正是为了解决这个过载：/g, '正交性。\n\n双结项架构正是为了解决这个过载：');
    out = out.replace(/物质显现。 例如，/g, '物质显现。\n\n例如，');
    out = out.replace(/物质折射率。 最终 SUR 分工如下：/g, '物质折射率。\n\n最终 SUR 分工如下：');
    out = out.replace(/同一个 SUR5 对象/g, '\n\n同一个 SUR5 对象');
    out = out.replace(/同一个审判法庭/g, '\n\n同一个审判法庭');
    out = out.replace(/SUR6 的合法句式是： 事件发生于/g, 'SUR6 的合法句式是：\n\n事件发生于');
    out = out.replace(/不同 M1，也/g, '不同 M1，也');
    out = out.replace(/最终裁定是：SUR-END/g, '最终裁定是：\n\nSUR-END');
    out = out.replace(/也不能说“身体留下了什么不可消化后效”，因为这属于 M7B。/g, '也不能说“身体留下了什么不可消化后效”，因为这属于 M7B。');
    out = out.replace(/公式的真理，只改变真理的显影方式。 这意味着：/g, '公式的真理，只改变真理的显影方式。\n\n这意味着：');
  }

  if (id === 'mist_m7a') {
    out = out.replace(/### 1\.2 为什么 M7A 必须从旧 M7 中独立出来：象征界 vs\. 实在界/g, '### 1.2 为什么终端结项必须拆分为 M7A/M7B：象征界 vs. 实在界');
    out = out.replace(
      /### 1\.5 缝合点与 SUR-END 的降权：结局权的回归[\s\S]*?(?=\n## 二、)/,
      `### 1.5 缝合点与 SUR-END 的边界：结局权的回归

M7A 的独立性来自一个清晰边界：**可见收场不能决定故事意义**。SUR-END 可以回答最后一帧看见什么，M7A 才回答这一切最终被裁决成什么故事。

| 层级 | 功能 | 理由 |
| :--- | :--- | :--- |
| SUR-END | 只保留可见收场 | 可见事件是皮肤，不是意义裁决 |
| M7A | 回溯性裁决意义 | 结局权必须留在 M 核心引擎 |
| M7B | 保存不可消化余痕 | 裁决无法吞并的部分必须独立保留 |

**SUR 层只负责皮肤**：时空、场景、人物外貌、年龄、视觉风格，以及可见层面的收场方式。它们决定“故事穿什么衣服”，不决定“故事是什么”。`
    );
    out = out.replace(
      /> \*\*架构升级公式\*\*：[\s\S]*?(?=\n### 1\.3)/,
      `> **双结项公式**：M6 → **M7A**（象征裁决）◇ **M7B**（实在余痕）。裁决与余痕彼此对抗，不能被压回同一个出口。\n`
    );
    out = out.replace(/拉康的公式在这里具有完全的操作效力：\s*S₁ → S₂\s*─────── \$ a\s*M7A 词条就是/g, '拉康的主人能指公式在这里具有完全的操作效力：S₁ → S₂；裂分主体与对象 a 被压入下方。M7A 词条就是');
    out = out.replace(/### 4\.1 命名法的悖论：给整个故事一句话判定 在配置\s+M7A 之前/g, '### 4.1 命名法的悖论：给整个故事一句话判定\n\n在配置 M7A 之前');
    out = out.replace(
      /\| 层级 \| 例子 \| 是否合格 \| 理由 \|\n\| :--- \| :--- \| :--- \| :--- \|\n\| 事件层 \| ["“]主角最后杀了坏人["”] \|[\s\S]*?\| 描述了欲望回路的封闭性——驱力绕行的轨道不通向任何["“]外部["”] \|/,
      `| 层级 | 例子 | 是否合格 | 理由 |
| :--- | :--- | :--- | :--- |
| 事件层 | “主角最后杀了坏人” | 不合格 | 这是 M5/M6 的输出，不是裁决。 |
| 情感层 | “主角找到了内心的平静” | 不合格 | 这是心理状态，不是结构。 |
| 主题层 | “爱战胜一切” | 不合格 | 这是道德训诫，不是缝合点。 |
| 结构层 | “穿越幻象” | 合格 | 描述主体与欲望关系的拓扑变换。 |
| 结构层 | “成为怪物” | 合格 | 描述主体被大他者逻辑不可逆地同化。 |
| 结构层 | “无限循环” | 合格 | 描述欲望回路的封闭性：驱力绕行的轨道不通向任何“外部”。 |`
    );
    out = out.replace(
      /### 4\.2 四维意义矩阵总览[\s\S]*?(?=\n\*\*矩阵解读\*\*：)/,
      `### 4.2 四维意义矩阵总览

幻灭、异化、超越、毁灭这四大组别不是随意分类。它们是二维意义矩阵在叙事空间中的四个象限投影。

**两个基础维度**：

- **横轴：欲望的命运 (Fate of Desire)**：M3（欲望幻想）在经历 M4-M6 的全过程后，最终被怎样处置。
- **欲望被否定 (Desire Negated)**：主体发现 M3 是虚假的、空洞的或不可能的。
- **欲望被超越 (Desire Transcended)**：主体穿越了 M3，获得了 M3 之外或之上的东西。
- **纵轴：主体的存续 (Survival of the Subject)**：M1（缺失主体 $）在经历全部冲击后，还能否维持连续性。
- **主体存续 ($ Survives)**：主体虽然被改变，但仍然是一个有连续性的自我。
- **主体瓦解 ($ Dissolves)**：主体连续性被不可逆地打断，可能是物理消灭，也可能是精神解体。

**四象限 = 四组裁决**：

| 维度 | 欲望被否定 | 欲望被超越 |
| --- | --- | --- |
| 主体存续 | **B. 异化的裁决**：欲望被否定，但主体以被系统收编的方式活着。 | **C. 超越的裁决**：欲望被超越，主体获得新的主体性位置。 |
| 主体瓦解 | **A. 幻灭的裁决**：欲望被否定，主体无法再维持自身，一切归于虚无。 | **D. 毁灭的裁决**：欲望指向超越方向，但主体在途中被碾碎。 |

`
    );
  }

  if (id === 'mist_m3') {
    out = out.replace(/### 5\.1 幻象的["“]脆弱性["”]原则 \(Fragility\) 不要设计一个无坚不摧的幻象。幻象必须有\s+\*\*缝隙\*\*。/g, '### 5.1 幻象的“脆弱性”原则 (Fragility)\n\n不要设计一个无坚不摧的幻象。幻象必须有**缝隙**。');
    out = out.replace(/### 5\.2 禁止["“]廉价梦想["”] \(Banality vs Fantasy\) M3 绝不是["“]我想发财["”]或["“]我想变强["”]。/g, '### 5.2 禁止“廉价梦想” (Banality vs Fantasy)\n\nM3 绝不是“我想发财”或“我想变强”。');
    out = out.replace(/### 5\.3 张力谱校准原则 配置 M3 时，创作者必须检查以下三点:/g, '### 5.3 张力谱校准原则\n\n配置 M3 时，创作者必须检查以下三点：');
    out = out.replace(/### 5\.4 幻象对 M0 的反馈调节 检查 M3 是否与主角的 M0 \(主体操作系统\) 兼容:\s*\*/g, '### 5.4 幻象对 M0 的反馈调节\n\n检查 M3 是否与主角的 M0（主体操作系统）相容。');
    out = out.replace(/### 5\.5 M1 x M3\s+正交性原则 M1 \(缺失方向\) 与 M3 \(幻想矢量\) 之间的关系是\s+\*\*正交的\*\*，而非镜像的:\s*\*\s*\*反例\*：/g, '### 5.5 M1 × M3 正交性原则\n\nM1（缺失方向）与 M3（幻想矢量）之间的关系是**正交的**，而非镜像的。\n\n* **反例**：');
    out = out.replace(/### 5\.6 象征界借词法则 \(The Law of Symbolic Borrowing\) 在引擎计算中，必须遵循\s+\*\*["“]逻辑优先于词语["”]\*\* 的金科玉律:/g, '### 5.6 象征界借词法则 (The Law of Symbolic Borrowing)\n\n在引擎计算中，必须遵循**“逻辑优先于词语”**的原则：');
    out = out.replace(/但\s+结构穿刺点会揭示/g, '但结构穿刺点会揭示');
  }

  if (id === 'mist_m5') {
    out = out.replace(
      /\*\*红线一：禁止将 M5 简化为["“]性格标签["”]\*\* M5 不是["“]角色的性格["”]。如果引擎输出一个可以被概括为["“]他很倔["”]、["“]她很执着["”]的单维度描述——那就说明 M5 被错误地使用了。驱力是结构性的运动姿态，它不等于性格特征。一个["“]冲撞型["”]角色并不总是在冲撞——他在日常中可能温柔得体，只在面对 M1 空洞时才启动冲撞模式。\*\*驱力不是全天候运转的——它在 M2（遭遇）触发时爆发。\*\* \*\*红线二：禁止去掉 A 面\*\* 每个 M5 词条都有 A 面（勇气\/坚持\/创造的可能性）。如果引擎只输出 B 面（偏执\/自毁\/成瘾），那不是迷雾叙事——那是病理学报告。最好的故事让观众理解一个人的运动姿态为什么同时是美丽的和危险的。\*\*一个母亲的牺牲式守候（B组）既是最深的爱也是最重的锁链——这两者不是["“]有时是A有时是B["”]，而是["“]同时是A和B["”]。\*\* \*\*红线三：禁止让 M5 拥有长远战略\*\* 驱力是当下的、结构性的、非理性的。如果一个角色因为["“]考虑到十年后的利益["”]而做出的行动，那是 M3 幻想的合理化，不是 M5。驱力必须是["“]我无法不做这件事["”]——而不是["“]我计算过做这件事是划算的["”]。\*\*即使角色表现出聪明才智（C 组穿透），这种聪明也必须服务于一种无法被刹车的追问。\*\*/,
      `**红线一：禁止将 M5 简化为“性格标签”**

M5 不是“角色的性格”。如果引擎输出一个可以被概括为“他很倔”、“她很执着”的单维度描述，就说明 M5 被错误地使用了。驱力是结构性的运动姿态，它不等于性格特征。一个“冲撞型”角色并不总是在冲撞；他在日常中可能温柔得体，只在面对 M1 空洞时才启动冲撞模式。**驱力不是全天候运转的，它在 M2（遭遇）触发时爆发。**

**红线二：禁止去掉 A 面**

每个 M5 词条都有 A 面（勇气、坚持、创造的可能性）。如果引擎只输出 B 面（偏执、自毁、成瘾），那不是迷雾叙事，而是病理学报告。最好的故事让观众理解一个人的运动姿态为什么同时是美丽的和危险的。**一个母亲的牺牲式守候（B 组）既是最深的爱也是最重的锁链；这两者不是“有时是 A 有时是 B”，而是“同时是 A 和 B”。**

**红线三：禁止让 M5 拥有长远战略**

驱力是当下的、结构性的、非理性的。如果一个角色因为“考虑到十年后的利益”而行动，那是 M3 幻想的合理化，不是 M5。驱力必须是“我无法不做这件事”，而不是“我计算过做这件事是划算的”。**即使角色表现出聪明才智（C 组穿透），这种聪明也必须服务于一种无法被刹车的追问。**`
    );
    out = out.replace(/### 5\.2 驱力消退的辩证法：穿越幻象后的["“]相移["”] 迷雾引擎对["“]治愈["”]和["“]成长["”]采取辩证立场/g, '### 5.2 驱力消退的辩证法：穿越幻象后的“相移”\n\n迷雾引擎对“治愈”和“成长”采取辩证立场');
    out = out.replace(/### 5\.3 过载熔断机制 \(Meltdown and Circuit Breaker\) 在驱力高速运转的极端场景中，创作者必须配置\s+\*\*["“]过载熔断点["”]\*\*：/g, '### 5.3 过载熔断机制 (Meltdown and Circuit Breaker)\n\n在驱力高速运转的极端场景中，创作者必须配置**“过载熔断点”**：');
    out = out.replace(/### 5\.4 与 M1 的["“]去病理化["”]的对称 M1 确立了["“]缺失不是疾病，而是风格["”]。M5 对称地确立：\s+> \*\*["“]驱力不是执念，而是姿态。["”]\*\* - 冲撞不是暴力——它是一种面对世界的方向。/g, '### 5.4 与 M1 的“去病理化”的对称\n\nM1 确立了“缺失不是疾病，而是风格”。M5 对称地确立：\n\n> **“驱力不是执念，而是姿态。”**\n\n- 冲撞不是暴力——它是一种面对世界的方向。');
    out = out.replace(/另一些条件下是毁灭。 \*\*判断驱力是/g, '另一些条件下是毁灭。\n\n**判断驱力是');
  }

  if (id === 'mist_m4') {
    out = out.replace(
      /### 6\.2 阻态拨盘实战 \[ M4 阻态拨盘 \] \| 高阻态 ←——————— M4 ———————→ 低阻态 \(极权\/教条\/严密\) \(无序\/真空\/放逐\) ↓ ↓ 叙事效果： 叙事效果： 每一步都踩在禁区上 每一步都踩在虚空上 张力来自“不被允许” 张力来自“没有边界” SUR色调：惊悚\/压抑\/反抗 SUR色调：存在\/漂流\/荒诞/g,
      `### 6.2 阻态拨盘实战

| 阻态 | 高阻态 | 低阻态 |
| --- | --- | --- |
| M4 形态 | 极权、教条、严密 | 无序、真空、放逐 |
| 叙事效果 | 每一步都踩在禁区上 | 每一步都踩在虚空上 |
| 张力来源 | 不被允许 | 没有边界 |
| SUR 色调 | 惊悚、压抑、反抗 | 存在、漂流、荒诞 |`
    );
    out = out.replace(/## 七、 结语：两个空洞之间的故事 迷雾叙事引擎的核心结构可以被浓缩为一个句子：/g, '## 七、结语：两个空洞之间的故事\n\n迷雾叙事引擎的核心结构可以被浓缩为一个句子：');
    out = out.replace(/(\*\*故事发生在两个空洞之间——主体的空洞（M1：\$）和大他者的空洞（M4：∄A）。\*\*) M1 说：/g, '$1\n\nM1 说：');
    out = out.replace(/M7B 是回注。 但 M1 和 M4/g, 'M7B 是回注。\n\n但 M1 和 M4');
    out = out.replace(/阴谋。” \*\*穿越之后不是幸福。/g, '阴谋。”\n\n**穿越之后不是幸福。');
  }

  if (id === 'mist_m7b') {
    out = out.replace(/### 5\.3 M7B 配置检查清单 配置 M7B 时，创作者必须通过以下四项测试：/g, '### 5.3 M7B 配置检查清单\n\n配置 M7B 时，创作者必须通过以下四项测试：');
    out = out.replace(/## 六、 结语：影子是你唯一带走的东西 迷雾叙事引擎的\s+M7B 可以被浓缩为一个画面：/g, '## 六、结语：影子是你唯一带走的东西\n\n迷雾叙事引擎的 M7B 可以被浓缩为一个画面：');
    out = out.replace(
      /> \*\*故事结束后，你站在空荡荡的舞台上。灯光已经灭了。观众已经走了。你低头看——你的影子还在脚下。它不是你。它不能代替你。它甚至不能证明你存在。但它是你穿越了一切之后，唯一带走的东西。\*\* M1 说：["“]我是空洞的。["”] M2 说：["“]现实穿刺了你。["”] M3 说：["“]你编了一个梦来遮蔽穿刺。["”] M4 说：["“]规则也是空的。["”] M5 说：["“]但你无法停止运动。["”] M6 说：["“]遮蔽被拆除了。["”] M7B 说：\*\*["“]在拆除之后，有一种东西留了下来。你说不出它是什么。但它在那里。它改变了你站立的方式。["”]\*\* 五个残余维度——隐秘的裂痕、凝固的图腾、死锁的齿轮、异化的倒影、蔓延的余烬——不是五种["“]结局["”]。它们是五种["“]拒绝结束的方式["”]。每一种都标定了故事在什么维度上穿透了["“]The End["”]这两个字，在黑屏之后继续存在。 最好的故事让观众理解：/,
      `> **故事结束后，你站在空荡荡的舞台上。灯光已经灭了。观众已经走了。你低头看：你的影子还在脚下。它不是你。它不能代替你。它甚至不能证明你存在。但它是你穿越了一切之后，唯一带走的东西。**

M1 说：“我是空洞的。”
M2 说：“现实穿刺了你。”
M3 说：“你编了一个梦来遮蔽穿刺。”
M4 说：“规则也是空的。”
M5 说：“但你无法停止运动。”
M6 说：“遮蔽被拆除了。”
M7B 说：**“在拆除之后，有一种东西留了下来。你说不出它是什么。但它在那里。它改变了你站立的方式。”**

五个残余维度——隐秘的裂痕、凝固的图腾、死锁的齿轮、异化的倒影、蔓延的余烬——不是五种“结局”。它们是五种“拒绝结束的方式”。每一种都标定了故事在什么维度上穿透了“The End”这两个字，在黑屏之后继续存在。

最好的故事让观众理解：`
    );
    out = out.replace(/\*\*M7B 的穿越 = 接受["“]在减去之后，剩下来的那个痕迹——它不是答案，不是真理，不是治愈——它只是一种纹理。你可以选择和它战斗，也可以选择带着它走下去。而最好的选择是：认领它。让它成为你的一部分。让它成为你那条独一无二的、不被任何人理解但只属于你的——圣状。["”]\*\* \*\*M7B 不贩卖结局。M7B 标定残余的维度——你自己决定怎么与那个残余共存。\*\* 有人把残余变成了仪式，有人把残余变成了沉默，有人把残余变成了一种看世界的新方式。无论哪种——\*\*它们都证明了你穿越过一切，而且你还在这里。\*\*/g, '**M7B 的穿越 = 接受“在减去之后，剩下来的那个痕迹不是答案，不是真理，不是治愈；它只是一种纹理。你可以选择和它战斗，也可以选择带着它走下去。最好的选择是认领它，让它成为你的一部分，让它成为那条独一无二、不被任何人理解但只属于你的圣状。”**\n\n**M7B 不贩卖结局。M7B 标定残余的维度，由主体决定如何与那个残余共存。**\n\n有人把残余变成了仪式，有人把残余变成了沉默，有人把残余变成了一种看世界的新方式。无论哪种，**它们都证明了主体穿越过一切，而且仍然在这里。**');
    out = out.replace(/\s+---$/g, '');
  }

  if (id === 'mist_topology_synthesizer') {
    out = replaceSection(
      out,
      /\n## 四、排除项[^\n]*/,
      `## 四、边界声明

调音台只调节 SUR10 的话语粘合度；不得重建 M 轴强度推子。压迫、驱力、创伤、阻断与结项强度，必须回到 M2、M4、M5、M6、M7A 与 M7B 的结构关系中处理。`
    );
  }

  if (id === 'mist_dynamic_suture_sentence') {
    out = replaceSection(
      out,
      /\n## 四、编译检查清单[^\n]*/,
      `## 四、编译检查清单

每次生成预览句前，系统必须确认：

- 是否把 SUR4 写成 M4 的实体化身。
- 是否把 SUR5 写成 M3 的欲望原因。
- 是否把 SUR6 写成 M2、M4 或 M6 的事件来源。
- 是否把 SUR7/SUR8 写成人物本质。
- 是否把 SUR9 写成 M1 缺失。
- 是否把 SUR10 写成哲学结论。
- 是否把 SUR-END 写成 M7A/M7B。

若任一项成立，缝合句不得交付生成端。

**边界声明**：缝合句只编译参数，不创造参数；只排列现象，不裁决意义。`
    );
  }

  if (id === 'order_and_object') {
    out = out.replace(/\| “这是压迫等级 L5。” \| [^|]+\| [^|]+\|/g, '| “这个社会通过多层门禁、配给卡和居住区隔离来运作。” | 合法写法 | 用具体社会外观呈现粘滞感。 |');
    out = out.replace(/5\. \*\*废除 SUR4X\*\*：第三卷公开协议中不再保留“物理阶层阻力”独立推子。社会的粘滞感应通过 SUR4 的具体外观、SV 的展开密度和 M4 的底层阻断共同呈现。/g, '5. **社会阻力必须具象化**：社会的粘滞感应通过 SUR4 的具体外观、SV 的展开密度和 M4 的底层阻断共同呈现。');
  }

  if (id === 'orthogonality_axiom_cartesian_product') {
    out = out.replace(/#### M7B 不是"剩余享乐"[\s\S]*?但 M7B 描述的是/, '#### M7B 不是“剩余享乐”\n\n将 M7B 等同于拉康的 *plus-de-jouir*（剩余享乐）并不精确。剩余享乐是一个**动态过程**：驱力每绕着对象 a 转一圈，就有一滴被榨取出来。它是正在发生的、持续运转的。\n\n但 M7B 描述的是');
    out = out.replace(/#### A面 ≠ 圣状[\s\S]*?> \*\*更精确的定位：A面和B面都是症状。只是视角不同。\*\*/g, '#### A面 ≠ 圣状\n\nA 面不等于圣状。拉康的**圣状**有严格定义：主体通过主动、创造性的行为发明第四环，用来扣合断裂的波罗米恩结。M7B 中的大多数余痕并不是主体主动创造的，而是被经验刻下的存在后效。\n\n> **更精确的定位：A面和B面都是症状。只是视角不同。**');
    out = out.replace(/> \*此节记录一段关键的设计演化史，它解释了 A\/B 双面结构的必要性。\*\n\n/g, '');
    out = out.replace(/迷雾学派在早期版本中经历过一个严重的误区：\*\*将拉康的"主体是被阉割的"误读为"一切都是缺失、破碎与虚无"。\*\* 这导致词库极度偏向黑暗面——所有词条都在描述残肢、血污、扭曲、破碎、虚空。 结果是：\*\*生成的故事全都是暗黑废墟式的，毫无变化。\*\* 这本身就是一种缝合——只不过方向相反。/g, '一种常见误读会把拉康的“主体是被阉割的”理解成“一切都是缺失、破碎与虚无”。这会把所有词条压向黑暗面：残肢、血污、扭曲、破碎、虚空。结果并不会更深刻，反而会变成单一方向的缝合。');
    out = out.replace(/好莱坞式缝合：把一切缝合向光明面 → "你的痛苦让你成长了"\n暗合版好莱坞：把一切缝合向黑暗面 → "一切都是虚无和崩溃"\n───────────────────────────────────────────────────\n结构完全相同：都是把多面性压缩成了单面性。\n/g, '光明缝合把一切压向“你的痛苦让你成长了”；黑暗缝合把一切压向“一切都是虚无和崩溃”。二者结构完全相同：都是把多面性压缩成单面性。\n\n');
    out = out.replace(/好莱坞说：/g, '光明缝合说：');
    out = out.replace(/暗合版好莱坞说：/g, '黑暗缝合说：');
    out = out.replace(/LLM 在生成叙事时/g, '生成叙事时');
    out = replaceSection(
      out,
      /\n## 5\.[^\n]*/,
      `## 5. SUR-END 的边界裁定

SUR-END 是第三卷中最容易越权的表层位点，因为它离“结尾意义”最近。正交公理要求它只保留可见收场，不进入 M7A 的象征裁决，也不代替 M7B 保存余痕。

### 5.1 可见收场的合法范围

SUR-END 可以回答：

- 最后一幕发生了什么外部事件。
- 画面停在哪里。
- 谁在场，谁缺席。
- 世界在表层上呈现出怎样的收束姿态。

SUR-END 不回答：

- 这是一个关于自由、堕落、救赎或虚无的故事。
- 主体是否完成和解、升华或认同。
- 身体、关系、语言和空间留下了什么不可消化后效。

### 5.2 与 M7A/M7B 的分权

结构性意义归入 **M7A 象征裁决**，身体余味归入 **M7B 实在余痕**。SUR-END 只提供可见层面的关门方式。

| 问题 | 负责位点 |
| --- | --- |
| 最后一帧看见什么？ | SUR-END |
| 这一切最终被判定成什么故事？ | M7A |
| 裁决之后还有什么不能被消化？ | M7B |

### 5.3 SUR-END 边界检查

- 若 SUR-END = “主角死亡”，引擎只检查 M6 是否足以支付死亡的物理或象征代价；它不能因此篡改 M7A 的裁决。
- 若 SUR-END = “主角活下来”，引擎只检查可见生存是否与 M6 的损失相容；它不能因此抹除 M7B 的余痕。
- 若 SUR-END = “开放收场”，引擎只保留事件层悬置；它不能把 M7A/M7B 也一并写成含混。

**最终裁定**：SUR-END 是皮肤的最后一帧，不是故事的判词。`
    );
  }

  return out;
}

function normalizeTypography(text) {
  return text
    .replace(/\(([^()\n]*[\u4e00-\u9fff][^()\n]*)\)/g, '（$1）')
    .replace(/\(([^()\n]*[\u4e00-\u9fff][^()\n]*)）/g, '（$1）')
    .replace(/（([^（）\n]*[\u4e00-\u9fff][^（）\n]*)\)/g, '（$1）')
    .replace(/"([^"\n]+)"/g, '“$1”')
    .replace(/\b(M\d[A-Z]?) x (M\d[A-Z]?)/g, '$1 × $2')
    .replace(/\b(\d+)\s*x\s*(\d+)\b/g, '$1 × $2')
    .replace(/\s+（/g, '（')
    .replace(/）\s+([A-Za-z0-9$])/g, '）$1')
    .replace(/->/g, '→');
}

function splitHeadingLine(line) {
  const match = line.match(/^(#{2,6}\s+)(.+)$/);
  if (!match || match[2].length < 18) return [line];
  const text = match[2];

  const numberedDefinition = text.match(/^([一二三四五六七八九十]+、[^ ]{1,16})\s+(?=\*\*)/);
  if (numberedDefinition) {
    return [`${match[1]}${numberedDefinition[1].trim()}`, text.slice(numberedDefinition[0].length).trim()];
  }

  const repeatedSubject = text.match(/^(.*?(M\d[A-Z]?|M轴|SUR\d+(?:X|-\w+)?|SUR-END|SV\d+|SV轴|SUR轴|Level\s+\d)[^ ]{0,120}?)\s+\2(?=\s|是|不|仍|与|=|：)/);
  if (repeatedSubject && repeatedSubject[1].length > 8) {
    return [`${match[1]}${repeatedSubject[1].trim()}`, text.slice(repeatedSubject[1].length).trim()];
  }

  const afterParen = text.match(/^(.{12,120}[\)）])\s+(?=(?:拉康|黑格尔|齐泽克|福柯|创作者|主体|故事|这种|这一|它|在|当|如果|答案|M\d|SUR\d|SV\d|迷雾|当前|好的|坏的))/);
  if (afterParen) {
    return [`${match[1]}${afterParen[1].trim()}`, text.slice(afterParen[1].length).trim()];
  }

  const bodyCue = text.match(/^(.{3,160}?)\s+(?=(?:M\d[A-Z]?\s|SUR\d|SUR-END|SV\d|Level\s+\d|描述了|拉康|黑格尔|齐泽克|福柯|迷雾引擎|迷雾学派|爱欲结构|发生器|主体|故事|这种|这一|这是|如果|答案是|在工程|在驱力|当前|合法句式|好的笛卡尔|坏的笛卡尔|每个|参数|视觉|词条|谁掌握|辩证法不在|一种|两种|普通精神病式|最丰富))/);
  if (bodyCue && !/^\d+(?:\.\d+)*$/.test(bodyCue[1].trim()) && !/^[一二三四五六七八九十]+[、.]?$/.test(bodyCue[1].trim())) {
    return [`${match[1]}${bodyCue[1].trim()}`, text.slice(bodyCue[1].length).trim()];
  }

  const hardTokens = [
    ' 迷雾学派',
    ' 传统理论',
    ' 在迷雾',
    ' SUR 轴',
    ' M 轴',
    ' “爱欲视觉拓扑学”',
    ' 调音台',
    ' 正交性',
  ];

  let hardSplit = -1;
  for (const token of hardTokens) {
    const idx = text.indexOf(token);
    if (idx > 8) hardSplit = hardSplit === -1 ? idx : Math.min(hardSplit, idx);
  }
  if (hardSplit !== -1) {
    return [`${match[1]}${text.slice(0, hardSplit).trim()}`, text.slice(hardSplit).trim()];
  }

  const patterns = [
    /\s(?=\*\*)/,
    /\s(?=在迷雾|迷雾学派|传统理论|这里的|它不是|主体|故事|调音台|动态缝合|正交|SUR\s|M\s?轴|爱欲结构|普通叙事|基础公式|可见|同一|如果|答案|一个|为什么|图像|卷一|卷二|卷三|M7A\s|M7B\s)/,
  ];

  let splitAt = -1;
  for (const pattern of patterns) {
    const m = text.match(pattern);
    if (m && m.index != null && m.index > 5) {
      splitAt = splitAt === -1 ? m.index : Math.min(splitAt, m.index);
    }
  }
  if (splitAt === -1) return [line];
  return [`${match[1]}${text.slice(0, splitAt).trim()}`, text.slice(splitAt).trim()];
}

function repairBareHeadings(text) {
  const lines = text.split('\n');
  const out = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();
    const bareHeading = trimmed.match(/^(#{2,6})\s+((?:\d+(?:\.\d+)*)|(?:[一二三四五六七八九十]+[、.]?))\s*$/);

    if (!bareHeading) {
      out.push(line);
      continue;
    }

    let j = i + 1;
    while (j < lines.length && lines[j].trim() === '') j++;
    const next = lines[j]?.trim() || '';
    if (!next || /^#{1,6}\s/.test(next) || /^\|/.test(next) || /^[\-\*]\s/.test(next) || /^\d+\.\s/.test(next)) {
      out.push(line);
      continue;
    }

    out.push(`${bareHeading[1]} ${bareHeading[2]} ${next}`);
    i = j;
  }

  return out.join('\n');
}

function improveMarkdownSpacing(text) {
  let out = normalizeTypography(text.replace(/\r\n/g, '\n'));
  out = out.replace(/([：。；])\s+(\d+\.\s+)/g, '$1\n\n$2');
  out = out.replace(/([：。；])\s+([-*]\s+)/g, '$1\n$2');
  out = out.replace(/([。！？])\s+(?=“(?:爱欲|结构|拓扑学|锚点|污点|裂缝))/g, '$1\n\n');
  out = out.replace(/([。！？])\s+(?=(?:因此，|这里的|第一，|第二，|第三，|例如，|同一个|最终裁定|这意味着|这里的关键|这就是|真正的创作|当一个视觉|当一个场景|M 轴：|SUR 轴：|SV 轴：))/g, '$1\n\n');
  out = out.replace(/([。！？])\s+(?=\*\*(?:锚点|污点|裂缝))/g, '$1\n\n');
  out = out.replace(/(\*\*)\s+(?=(?:它是迷雾|迷雾作品|故事结束))/g, '$1\n\n');
  out = out.replace(/：\s+(?=(?:欲望\s*=|对象不是|原因\s*→|缺失\s*→|M1 不是物质困难|M2 不是普通冲突|M3 不是普通目标|M4 不是反派|M5 不是性格|M6 不是痛苦|M7A 不是主题句|M7B 不是余味装饰))/g, '：\n\n');
  out = out.replace(/([。！？])\s+(?=\*\*(?:M\d|M7A|M7B|SUR|SV|第一|第二|第三|第四|第五|第六|第七|第八|第九|第十|核心|最终|公式|操作|创作者|关键|引擎))/g, '$1\n\n');
  out = out.replace(/：\s+(主体为什么不完整？)/g, '：\n\n$1');
  out = out.replace(/：\s+(迷雾学派是什么？)/g, '：\n\n$1');
  out = out.replace(/：\s+(结构在什么世界里可见？)/g, '：\n\n$1');
  out = out.replace(/：\s+(M 定义结构原因。)/g, '：\n\n$1');
  out = out.replace(/\s+(- \*\*)/g, '\n$1');
  out = out.replace(/([^\n])\s+(#{2,6}\s+)/g, '$1\n\n$2');
  out = out.replace(/([^\n])\s+(\$\$)/g, '$1\n\n$2');
  out = out.replace(/(\$\$)\s+([^\n])/g, '$1\n\n$2');

  const result = [];
  for (const originalLine of out.split('\n')) {
    let line = originalLine.trimEnd();
    if (line.trim() === '>') continue;

    const headingParts = splitHeadingLine(line);
    if (headingParts.length > 1) {
      result.push(headingParts[0], '', headingParts[1]);
      continue;
    }

    if (line.trim().startsWith('|') && !line.trim().endsWith('|')) {
      const lastPipe = line.lastIndexOf('|');
      if (lastPipe > 0) {
        const table = line.slice(0, lastPipe + 1).trim();
        const rest = line.slice(lastPipe + 1).trim();
        result.push(table);
        if (rest) result.push('', rest);
        continue;
      }
    }

    result.push(line);
  }

  out = repairTableSeparators(result.join('\n'));
  out = repairBareHeadings(out);
  out = out.replace(/\n{3,}/g, '\n\n');
  out = out.replace(/(\n\|[^\n]+\|\n)(?!\|)/g, '$1\n');
  out = out.replace(/([^\n])\n(#{1,6}\s)/g, '$1\n\n$2');
  return out.trim() + '\n';
}

function parseTableCells(line) {
  const trimmed = line.trim();
  if (!trimmed.startsWith('|')) return [];
  return trimmed.replace(/^\|/, '').replace(/\|$/, '').split('|').map((cell) => cell.trim());
}

function repairTableSeparators(text) {
  const lines = text.split('\n');
  const out = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const cells = parseTableCells(line);
    if (cells.length > 1 && lines[i + 1]?.trim() === '|') {
      let j = i + 1;
      let dashes = 0;
      while (j < lines.length && dashes < cells.length) {
        const t = lines[j].trim();
        if (t === '---' || /^:?-{3,}:?$/.test(t)) dashes++;
        j++;
      }
      if (dashes === cells.length) {
        while (j < lines.length && (lines[j].trim() === '' || lines[j].trim() === '|')) j++;
        out.push(line, `| ${Array(cells.length).fill('---').join(' | ')} |`);
        i = j - 1;
        continue;
      }
    }
    out.push(line);
  }

  return out.join('\n');
}

function titleFor(meta) {
  if (!meta.enName || meta.name.includes(meta.enName)) return meta.name;
  return `${meta.name} (${meta.enName})`;
}

function rebuildMarkdown(raw, file, meta) {
  let body = stripFrontmatter(raw);
  body = cleanLegacyLanguage(body, meta.id);
  body = removeInitialHeading(body);
  body = improveMarkdownSpacing(body);

  const fm = [
    '---',
    `title: "${titleFor(meta).replace(/"/g, '\\"')}"`,
    `id: "${meta.id}"`,
    `category: "${meta.category.replace(/"/g, '\\"')}"`,
    'thinker: "迷雾学派 (Mist School)"',
    'version: "final"',
    'status: "canonical"',
    '---',
    '',
    `# ${meta.name}`,
    '',
  ].join('\n');

  return fm + body.replace(/^\s+/, '');
}

function splitDetail(markdown) {
  const body = stripFrontmatter(markdown).trim();
  const lines = body.split('\n');
  const headingIndexes = [];
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].startsWith('## ')) headingIndexes.push(i);
  }
  if (headingIndexes.length === 0) return { definition: body, analogy: '', application: '' };

  const starts = headingIndexes.map((line, order) => ({
    line,
    end: order + 1 < headingIndexes.length ? headingIndexes[order + 1] : lines.length,
    title: lines[line],
  }));

  let splitA = 0;
  let splitB = 0;
  const four = starts.findIndex((s) => /^##\s*四[、.]/.test(s.title));
  const five = starts.findIndex((s) => /^##\s*五[、.]/.test(s.title));
  if (four !== -1 && five !== -1) {
    splitA = four;
    splitB = five;
  } else if (starts.some((s) => /^##\s*\d+\./.test(s.title))) {
    splitA = Math.min(5, Math.max(2, Math.ceil(starts.length * 0.45)));
    splitB = Math.min(starts.length - 1, Math.max(splitA + 1, Math.ceil(starts.length * 0.7)));
  } else {
    splitA = Math.min(3, Math.max(1, Math.ceil(starts.length * 0.4)));
    splitB = Math.min(starts.length - 1, Math.max(splitA + 1, Math.ceil(starts.length * 0.72)));
  }

  const introEnd = starts[0].line;
  const definitionStart = 0;
  const definitionEnd = starts[splitA]?.line ?? lines.length;
  const analogyEnd = starts[splitB]?.line ?? lines.length;

  return {
    definition: lines.slice(definitionStart, definitionEnd).join('\n').trim(),
    analogy: lines.slice(definitionEnd, analogyEnd).join('\n').trim(),
    application: lines.slice(analogyEnd).join('\n').trim(),
  };
}

function plainText(markdown) {
  return markdown
    .replace(/^---[\s\S]*?---/m, '')
    .replace(/^#{1,6}\s+/gm, '')
    .replace(/^\s*>+\s?/gm, '')
    .replace(/\|/g, ' ')
    .replace(/[*_`$]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function makeSummary(markdown, fallback) {
  const stripped = stripFrontmatter(markdown)
    .split('\n')
    .filter((line) => {
      const t = line.trim();
      return t && !t.startsWith('#') && t !== '---' && !t.startsWith('|') && !/^[-*]\s/.test(t);
    })
    .join('\n');
  let text = plainText(stripped);
  if (!text) text = fallback;
  let summary = text.slice(0, 280);
  const stop = Math.max(summary.lastIndexOf('。'), summary.lastIndexOf('：'));
  if (stop > 80) summary = summary.slice(0, stop + 1);
  return summary;
}

function main() {
  const metaById = parseIndex();
  const files = SOURCE_ROOTS.flatMap((dir) => walk(dir)).sort();
  const publicIds = new Set(metaById.keys());
  const seen = new Set();
  const cleanedById = new Map();

  for (const file of files) {
    const raw = fs.readFileSync(file, 'utf8');
    const id = parseId(raw, file);
    if (!id || !publicIds.has(id)) {
      throw new Error(`Cannot resolve public id for ${path.relative(ROOT, file)} (${id || 'missing'})`);
    }
    const meta = metaById.get(id);
    const cleaned = rebuildMarkdown(raw, file, meta);
    fs.writeFileSync(file, cleaned, 'utf8');
    cleanedById.set(id, cleaned);
    seen.add(id);
  }

  const missing = [...publicIds].filter((id) => !seen.has(id));
  if (missing.length) throw new Error(`Missing source markdown for ids: ${missing.join(', ')}`);

  fs.mkdirSync(DETAILS_DIR, { recursive: true });
  for (const [id, markdown] of cleanedById) {
    const detail = splitDetail(markdown);
    fs.writeFileSync(path.join(DETAILS_DIR, `${id}.json`), `${JSON.stringify(detail, null, 2)}\n`, 'utf8');
  }

  const summaries = [...metaById.values()].map((meta) => ({
    id: meta.id,
    name: meta.name,
    enName: meta.enName,
    category: meta.category,
    shortDef: meta.shortDef,
    summary: makeSummary(cleanedById.get(meta.id) || '', meta.shortDef),
  }));
  fs.writeFileSync(SUMMARIES_PATH, `${JSON.stringify(summaries, null, 2)}\n`, 'utf8');

  console.log(`Cleaned ${files.length} markdown files and ${cleanedById.size} public details.`);
}

main();
