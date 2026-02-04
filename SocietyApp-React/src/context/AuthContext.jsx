import { createContext, useContext, useMemo, useState } from "react";

const AuthContext = createContext();

const dummyUsers = [
  { id: 1, name: "Admin User", email: "admin@society.local", role: "admin" },
  { id: 2, name: "Member User", email: "member@society.local", role: "member" }
];

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const login = async (email, password) => {
    setLoading(true);
    const found = dummyUsers.find((u) => u.email.toLowerCase() === email.toLowerCase());
    const nextUser = found || { id: Date.now(), name: email.split("@")[0], email, role: "member" };
    setUser(nextUser);
    setLoading(false);
    return nextUser;
  };

  const loginWithGoogle = async () => {
    setLoading(true);
    const nextUser = { id: Date.now(), name: "Google User", email: "google.user@example.com", role: "member", provider: "google" };
    setUser(nextUser);
    setLoading(false);
    return nextUser;
  };

  const logout = async () => {
    setLoading(true);
    setUser(null);
    setLoading(false);
  };

  const value = useMemo(() => ({ user, login, loginWithGoogle, logout, loading }), [user, loading]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}
