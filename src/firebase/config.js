import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCECc__U1_Nb6NWGeTftdNs9cj8Kl0bS-0",
  authDomain: "dotcyber-db.firebaseapp.com",
  projectId: "dotcyber-db",
  storageBucket: "dotcyber-db.firebasestorage.app",
  messagingSenderId: "581562652372",
  appId: "1:581562652372:web:de33765cccf4b860054d41"
};

export const app = initializeApp(firebaseConfig);