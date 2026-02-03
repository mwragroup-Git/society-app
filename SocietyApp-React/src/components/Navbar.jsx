import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { logout, currentUser, role } = useAuth();

  return (
    <nav className="navbar navbar-dark bg-primary px-3">
      <span className="navbar-brand">🏡 Society Portal</span>

      <div className="d-flex text-white align-items-center">
        {role === "admin" && <span className="me-3">Admin</span>}
        <span className="me-3">{currentUser?.email}</span>
        <button onClick={logout} className="btn btn-light btn-sm">
          Logout
        </button>
      </div>
    </nav>
  );
}
