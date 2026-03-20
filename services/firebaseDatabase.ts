
import { 
  collection, 
  getDocs, 
  getDoc, 
  doc, 
  query, 
  where, 
  setDoc, 
  deleteDoc,
  serverTimestamp 
} from "firebase/firestore";
import { db } from "./firebaseClient";
import { LacanConcept } from "../data/codex/philosophy_refined";

const CODEX_COLLECTION = "codex_entries";

export const firebaseDatabase = {
  /**
   * 按需获取单个词条的完整内容
   * 彻底解决前端打包过热问题
   */
  getEntryContent: async (id: string): Promise<LacanConcept | null> => {
    try {
      const docRef = doc(db, CODEX_COLLECTION, id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        return docSnap.data() as LacanConcept;
      }
      return null;
    } catch (err) {
      console.error("Firebase fetch error for id:", id, err);
      return null;
    }
  },

  /**
   * 获取某一个分类下的所有词条（仅包含索引信息，不含正文）
   * 极大减少初始加载负载
   */
  getEntriesByCategory: async (category: string): Promise<LacanConcept[]> => {
    try {
      const q = query(collection(db, CODEX_COLLECTION), where("category", "==", category.toLowerCase()));
      const querySnapshot = await getDocs(q);
      const entries: LacanConcept[] = [];
      querySnapshot.forEach((doc) => {
        entries.push(doc.data() as LacanConcept);
      });
      return entries;
    } catch (err) {
      console.error("Firebase category query error", err);
      return [];
    }
  },

  /**
   * 迁移用户历史：将 Supabase 时代的思维记录同步至 Firebase
   */
  saveCloudHistoryItem: async (userId: string, item: any) => {
    try {
      const historyRef = doc(db, "users", userId, "history", String(item.id));
      await setDoc(historyRef, {
        ...item,
        updatedAt: serverTimestamp()
      }, { merge: true });
    } catch (err) {
      console.error("Firebase history sync error", err);
    }
  }
};
