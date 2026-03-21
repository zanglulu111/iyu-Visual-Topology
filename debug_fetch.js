import { initializeApp } from 'firebase/app';
import { getFirestore, doc, getDoc } from 'firebase/firestore';

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

async function testFetch() {
    console.log("🕵️ 开始云端数据真实性检测 (ID: l_big_other)...");
    try {
        const docRef = doc(db, "codex_entries", "l_big_other");
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            const data = docSnap.data();
            console.log("✅ 成功！大他者词条已在云端显灵。具体内容如下：");
            console.log("-----------------------------------------");
            console.log(data.detailed.definition.substring(0, 100) + "...");
            process.exit(0);
        } else {
            console.log("❌ 失败！云端没找到 l_big_other 词条。");
            process.exit(1);
        }
    } catch (err) {
        console.error("🔥 崩溃！云端连接受阻:", err);
        process.exit(1);
    }
}

testFetch();
