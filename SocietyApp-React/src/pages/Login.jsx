import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const { login, loginWithGoogle, loading } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Email and password are required.");
      return;
    }
    setError("");
    await login(email, password);
    navigate("/");
  };

  const handleGoogle = async () => {
    setError("");
    await loginWithGoogle();
    navigate("/");
  };

  return (
    <div className="container py-5" style={{ maxWidth: "480px" }}>
      <h2 className="mb-3">Login</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      <form onSubmit={handleSubmit} className="card p-3 mb-3">
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="btn btn-primary w-100" disabled={loading}>
          {loading ? "Signing in..." : "Login"}
        </button>
      </form>

      <button className="btn btn-outline-dark w-100" onClick={handleGoogle} disabled={loading}>
        Sign in with Google
      </button>
    </div>
  );
}
