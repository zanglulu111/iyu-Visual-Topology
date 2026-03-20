import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Real Firebase Config for Mist School
const firebaseConfig = {
  apiKey: "AIzaSyBUzXI033cgDkJVIb2lscHWuR1JK3vNgEw",
  authDomain: "marx-codex-iyu.firebaseapp.com",
  projectId: "marx-codex-iyu",
  storageBucket: "marx-codex-iyu.firebasestorage.app",
  messagingSenderId: "996452242527",
  appId: "1:996452242527:web:a4eb473879ca99447af7ea",
  measurementId: "G-GRRKZG929N"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export default app;
