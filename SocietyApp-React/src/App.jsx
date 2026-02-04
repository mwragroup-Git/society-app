import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Events from "./pages/Events";
import Rules from "./pages/Rules";
import Marketplace from "./pages/Marketplace";
import Maintenance from "./pages/Maintenance";
import Complaints from "./pages/Complaints";
import AdminDashboard from "./pages/AdminDashboard";
import About from "./pages/About";
import Profile from "./pages/Profile";
import { useAuth } from "./context/AuthContext";
import { useEffect, useState } from "react";

export default function App() {
  const { user } = useAuth();
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const classList = document.body.classList;
    if (darkMode) classList.add("dark-mode");
    else classList.remove("dark-mode");
  }, [darkMode]);

  return (
    <div className="app-shell">
      <Navbar darkMode={darkMode} onToggleDark={() => setDarkMode((v) => !v)} />
      <div className="app-body">
        <Sidebar darkMode={darkMode} />
        <main className="app-content container-fluid">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
            <Route
              path="/events"
              element={
                <ProtectedRoute>
                  <Events />
                </ProtectedRoute>
              }
            />
            <Route
              path="/rules"
              element={
                <ProtectedRoute>
                  <Rules />
                </ProtectedRoute>
              }
            />
            <Route
              path="/marketplace"
              element={
                <ProtectedRoute>
                  <Marketplace />
                </ProtectedRoute>
              }
            />
            <Route
              path="/maintenance"
              element={
                <ProtectedRoute>
                  <Maintenance />
                </ProtectedRoute>
              }
            />
            <Route
              path="/complaints"
              element={
                <ProtectedRoute>
                  <Complaints />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin"
              element={
                <ProtectedRoute adminOnly>
                  <AdminDashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/about"
              element={
                <ProtectedRoute>
                  <About />
                </ProtectedRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />
            <Route path="*" element={<Navigate to={user ? "/" : "/login"} />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}
