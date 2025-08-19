import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "marlidu-b3b95.firebaseapp.com",
  projectId: "marlidu-b3b95",
  storageBucket: "marlidu-b3b95.appspot.com",
  messagingSenderId: "152143515296",
  appId: "1:152143515296:web:4509f8f8ca385bfa5a83c5"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
