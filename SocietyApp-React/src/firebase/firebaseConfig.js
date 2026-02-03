// src/firebase.js

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAnCl1_eAthGqn_26sHu7rUY1yE6yGc_HI",
  authDomain: "mw-society-app.firebaseapp.com",
  projectId: "mw-society-app",
  storageBucket: "mw-society-app.firebasestorage.app",
  messagingSenderId: "37783963579",
  appId: "1:37783963579:web:1941b4e3c25b0e1813a69e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export services
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
