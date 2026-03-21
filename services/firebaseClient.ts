import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Real Firebase Config for Mist School
const firebaseConfig = {
  apiKey: "AIzaSyCcJN00UxucmjMZbE8TdMPuCBqeaIfbIBA",
  authDomain: "marx-codex-iyu-final-0320.firebaseapp.com",
  projectId: "marx-codex-iyu-final-0320",
  storageBucket: "marx-codex-iyu-final-0320.firebasestorage.app",
  messagingSenderId: "861671397347",
  appId: "1:861671397347:web:7cd921654ef9dd0ef8f2d6"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export default app;
