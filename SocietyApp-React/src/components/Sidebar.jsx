import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Sidebar() {
  const { role } = useAuth();

  return (
    <div className="bg-dark text-white p-3" style={{ width: "230px", minHeight: "100vh" }}>
      <h5 className="text-center">Menu</h5>

      <Link className="side-link" to="/">🏠 Home</Link>
      <Link className="side-link" to="/about">📘 Journey</Link>
      <Link className="side-link" to="/events">🎉 Events</Link>
      <Link className="side-link" to="/rules">📜 Rules</Link>
      <Link className="side-link" to="/maintenance">💳 Maintenance</Link>
      <Link className="side-link" to="/marketplace">🛒 Marketplace</Link>
      <Link className="side-link" to="/complaints">⚠ Complaints</Link>

      {role === "admin" && (
        <Link className="side-link" to="/admin">👨‍💼 Admin Dashboard</Link>
      )}
    </div>
  );
}
