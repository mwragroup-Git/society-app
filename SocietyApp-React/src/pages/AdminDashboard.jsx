import { useState } from "react";
import { useSociety } from "../context/SocietyContext";

export default function AdminDashboard() {
  const {
    members,
    events,
    complaints,
    addEvent,
    deleteEvent,
    updateComplaintStatus
  } = useSociety();

  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");

  const handleAddEvent = (e) => {
    e.preventDefault();
    if (!title || !date || !description) return;
    addEvent({ title, date, image: "https://placehold.co/600x400", description });
    setTitle("");
    setDate("");
    setDescription("");
  };

  return (
    <div className="container py-4">
      <h2 className="mb-4">Admin Dashboard</h2>

      <div className="row g-3 mb-4">
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5>Total Members</h5>
              <p className="display-6">{members.length}</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5>Pending Complaints</h5>
              <p className="display-6">{complaints.filter((c) => c.status === "Pending").length}</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5>Upcoming Events</h5>
              <p className="display-6">{events.length}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="row g-4">
        <div className="col-md-6">
          <div className="card p-3">
            <h5>Manage Events</h5>
            <form onSubmit={handleAddEvent} className="mb-3">
              <input className="form-control mb-2" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
              <input className="form-control mb-2" placeholder="Date" value={date} onChange={(e) => setDate(e.target.value)} />
              <textarea className="form-control mb-2" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
              <button className="btn btn-primary">Add Event</button>
            </form>
            <ul className="list-group">
              {events.map((event) => (
                <li key={event.id} className="list-group-item d-flex justify-content-between align-items-center">
                  <span>{event.title}</span>
                  <button className="btn btn-sm btn-outline-danger" onClick={() => deleteEvent(event.id)}>Delete</button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card p-3 mb-3">
            <h5>Manage Members</h5>
            <ul className="list-group">
              {members.map((m) => (
                <li key={m.id} className="list-group-item">{m.name}</li>
              ))}
            </ul>
          </div>

          <div className="card p-3">
            <h5>Manage Complaints</h5>
            <ul className="list-group">
              {complaints.map((c) => (
                <li key={c.id} className="list-group-item d-flex justify-content-between align-items-center">
                  <span>{c.title}</span>
                  <select
                    className="form-select form-select-sm"
                    style={{ width: "140px" }}
                    value={c.status}
                    onChange={(e) => updateComplaintStatus(c.id, e.target.value)}
                  >
                    <option>Pending</option>
                    <option>In Progress</option>
                    <option>Resolved</option>
                  </select>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
