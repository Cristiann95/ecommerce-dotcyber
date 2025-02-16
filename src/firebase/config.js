import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "dotcyber-db.firebaseapp.com",
  projectId: "dotcyber-db",
  storageBucket: "dotcyber-db.firebasestorage.app",
  messagingSenderId: "581562652372",
  appId: "1:581562652372:web:de33765cccf4b860054d41"
};

export const app = initializeApp(firebaseConfig);
