import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBQ2McJpVLYkCRjJxVAhpM8bdoOniONqCo",
  authDomain: "heuristics-417f2.firebaseapp.com",
  projectId: "heuristics-417f2",
  storageBucket: "heuristics-417f2.appspot.com",
  messagingSenderId: "942610132755",
  appId: "1:942610132755:web:f8660c612fb461a01cb4e6",
  measurementId: "G-Q81WJP92V3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth =getAuth(app);
export default app;
