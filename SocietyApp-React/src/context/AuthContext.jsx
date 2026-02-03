import { createContext, useContext, useEffect, useState } from "react";
import { auth, db, googleProvider } from "../firebase/firebaseConfig";

import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  signInWithPopup
} from "firebase/auth";

import { doc, getDoc } from "firebase/firestore";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [role, setRole] = useState("member");

  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  async function loginWithGoogle() {
    const result = await signInWithPopup(auth, googleProvider);
    return result;
  }

  function logout() {
    return signOut(auth);
  }

  async function fetchRole(uid) {
    const ref = doc(db, "users", uid);
    const snap = await getDoc(ref);
    if (snap.exists()) setRole(snap.data().role);
  }

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (user) => {
      setCurrentUser(user);
      if (user) fetchRole(user.uid);
    });
    return unsub;
  }, []);

  const value = {
    currentUser,
    login,
    loginWithGoogle,
    logout,
    role,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}
