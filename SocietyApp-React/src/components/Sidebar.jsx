import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Sidebar({ darkMode }) {
  const { user } = useAuth();
  const isAdmin = user?.role === "admin";

  return (
    <aside className={`sidebar ${darkMode ? "sidebar-dark" : "sidebar-light"}`}>
      <div className="sidebar-header">Menu</div>
      <nav className="nav flex-column">
        <Link className="nav-link" to="/">Dashboard</Link>
        <Link className="nav-link" to="/events">Events</Link>
        <Link className="nav-link" to="/marketplace">Marketplace</Link>
        <Link className="nav-link" to="/maintenance">Maintenance</Link>
        <Link className="nav-link" to="/complaints">Complaints</Link>
        <Link className="nav-link" to="/rules">Rules</Link>
        <Link className="nav-link" to="/about">About</Link>
        {isAdmin && <Link className="nav-link" to="/admin">Admin Menu</Link>}
      </nav>
    </aside>
  );
}
