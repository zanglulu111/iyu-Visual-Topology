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
    try {
        const docRef = doc(db, "codex_entries", "l_big_other");
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            const data = docSnap.data();
            console.log("🔍 云端 ID 指纹确认:", data.id);
            console.log("🔍 云端内容确认:", data.detailed.definition.substring(0, 50));
            process.exit(0);
        } else {
            console.log("❌ 找不到文档");
            process.exit(1);
        }
    } catch (err) {
        console.error("error", err);
        process.exit(1);
    }
}

testFetch();
