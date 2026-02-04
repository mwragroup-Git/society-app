import { useState } from "react";
import { useSociety } from "../context/SocietyContext";

export default function Complaints() {
  const { complaints, addComplaint } = useSociety();
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !details) return;
    addComplaint({ title, details });
    setTitle("");
    setDetails("");
  };

  return (
    <div className="container py-4">
      <h2 className="mb-4">Complaints</h2>

      <form onSubmit={handleSubmit} className="card p-3 mb-4">
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input className="form-control" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div className="mb-3">
          <label className="form-label">Details</label>
          <textarea className="form-control" rows="3" value={details} onChange={(e) => setDetails(e.target.value)} />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>

      <div className="list-group">
        {complaints.map((c) => (
          <div className="list-group-item" key={c.id}>
            <div className="d-flex justify-content-between">
              <h6 className="mb-1">{c.title}</h6>
              <span className="badge text-bg-secondary">{c.status}</span>
            </div>
            <p className="mb-1">{c.details}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
