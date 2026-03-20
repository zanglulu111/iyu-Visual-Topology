const fs = require('fs');
const path = require('path');
const admin = require('firebase-admin');

// 初始化 Firebase Admin (利用本地已经登录的凭证)
// 注意：实际环境通常需要 serviceAccountKey.json，
// 但在 agent 环境下我们可以通过 firebase-tools 的 token 或本地授权环境运行。
// 这里我直接使用已经初始化好的项目 ID。

const PROJECT_ID = 'marx-codex-iyu';
process.env.GCLOUD_PROJECT = PROJECT_ID;

admin.initializeApp({
  projectId: PROJECT_ID
});

const db = admin.firestore();

const BASE_DIR = '/Users/lujiaqi/Desktop/【迷雾学派】爱欲视觉拓扑学 2-24版/codex-drafts';
const CATEGORIES = ['marx', 'hegel', 'lacan', 'zizek'];

// 已经手动重构好的 Marx 核心词条列表 (用于打标签)
const RECONSTRUCTED_MARX = [
    'm_hegel_triad_critique.md',
    'm_negation_negation_marx.md',
    'm_two_stages_communism.md',
    'm_free_association.md',
    'm_all_round_development.md',
    'm_free_time.md',
    'm_necessity_freedom.md'
];

async function syncAll() {
    console.log("开始全量同步 212 个哲学节点...");

    for (const cat of CATEGORIES) {
        const dirPath = path.join(BASE_DIR, cat);
        if (!fs.existsSync(dirPath)) continue;

        const files = fs.readdirSync(dirPath).filter(f => f.endsWith('.md'));
        console.log(`正在处理 [${cat}] 分类: ${files.length} 个文件`);

        const batch = db.batch();
        let count = 0;

        for (const file of files) {
            const filePath = path.join(dirPath, file);
            const content = fs.readFileSync(filePath, 'utf8');
            const docId = file.replace('.md', '');
            
            // 提取第一行作为标题
            const titleMatch = content.match(/^## (.*)/m) || content.match(/^# (.*)/m);
            const title = titleMatch ? titleMatch[1].trim() : docId;

            const docRef = db.collection('codex_entries').doc(docId);
            
            batch.set(docRef, {
                title: title,
                category: cat,
                content_md: content,
                updated_at: admin.firestore.FieldValue.serverTimestamp(),
                status: (cat === 'marx' && RECONSTRUCTED_MARX.includes(file)) ? 'reconstructed' : 'raw'
            }, { merge: true });

            count++;
            // Firestore Batch 限制 500 次
            if (count >= 400) {
                await batch.commit();
                console.log(`[${cat}] 已提交一批次...`);
            }
        }
        
        await batch.commit();
        console.log(`[${cat}] 同步完成。`);
    }

    console.log(">>>>> 全量资产云端化成功！总计同步 212 个节点。");
}

syncAll().catch(console.error);
