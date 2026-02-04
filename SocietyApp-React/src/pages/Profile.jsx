import { useState } from "react";
import { useAuth } from "../context/AuthContext";

export default function Profile() {
  const { user } = useAuth();
  const [name, setName] = useState(user?.name || "");
  const [message, setMessage] = useState("");

  const handleSave = (e) => {
    e.preventDefault();
    setMessage("Profile updated (dummy).\n");
  };

  return (
    <div className="container py-4" style={{ maxWidth: "600px" }}>
      <h2>Profile</h2>
      <form onSubmit={handleSave} className="card p-3 mt-3">
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input className="form-control" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input className="form-control" value={user?.email || ""} disabled />
        </div>
        <button className="btn btn-primary">Save</button>
        {message && <p className="text-success mt-2">{message}</p>}
      </form>
    </div>
  );
}
