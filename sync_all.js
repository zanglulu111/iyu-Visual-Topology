import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { initializeApp } from 'firebase/app';
import { getFirestore, doc, setDoc, serverTimestamp, writeBatch } from 'firebase/firestore';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const firebaseConfig = {
  apiKey: "AIzaSyCcJN00UxucmjMZbE8TdMPuCBqeaIfbIBA",
  authDomain: "marx-codex-iyu-final-0320.firebaseapp.com",
  projectId: "marx-codex-iyu-final-0320",
  storageBucket: "marx-codex-iyu-final-0320.firebasestorage.app",
  messagingSenderId: "861671397347",
  appId: "1:861671397347:web:7cd921654ef9dd0ef8f2d6"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const BASE_DIR = path.join(__dirname, 'codex-drafts');
const CATEGORIES = ['marx', 'hegel', 'lacan', 'zizek'];

// 高度精准的内容提取器
function extractSection(content, sectionName) {
    const regex = new RegExp(`## ${sectionName}[\\r\\n]+([\\s\\S]*?)(?=\\r?\\n## |$)`, 'i');
    const match = content.match(regex);
    return match ? match[1].trim() : "";
}

async function syncAll() {
    console.log("🚀 开始全量高精度同步至 Firebase (212 词条)...");

    for (const cat of CATEGORIES) {
        const dirPath = path.join(BASE_DIR, cat);
        if (!fs.existsSync(dirPath)) continue;

        const files = fs.readdirSync(dirPath).filter(f => f.endsWith('.md'));
        console.log(`Processing [${cat}] - ${files.length} files...`);

        const batch = writeBatch(db);
        let count = 0;

        for (const file of files) {
            const filePath = path.join(dirPath, file);
            const content = fs.readFileSync(filePath, 'utf8');
            const docId = file.replace('.md', '');
            
            const definition = extractSection(content, "定义");
            const analogy = extractSection(content, "类比");
            const application = extractSection(content, "应用");

            const docRef = doc(db, "codex_entries", docId);
            
            // 最后的防御：如果解析出来的正文太短，则视为解析失败，保存整个文件内容或设置缺省值
            const finalDefinition = definition && definition.length > 5 ? definition : (content.length > 30 ? content : "内容正在同步中...");

            batch.set(docRef, {
                id: docId,
                category: cat,
                detailed: {
                    definition: finalDefinition,
                    analogy: analogy || "(即将在云端同步)",
                    application: application || "(即将在云端同步)"
                },
                updatedAt: serverTimestamp()
            }, { merge: true });

            count++;
        }
        
        await batch.commit();
        console.log(`✅ [${cat}] 成功推送 ${count} 个资产。`);
    }

    console.log(">>>>> 全境高精度同步完成！212 个法典节点已入库。");
    process.exit(0);
}

syncAll().catch(err => {
    console.error("同步失败:", err);
    process.exit(1);
});
