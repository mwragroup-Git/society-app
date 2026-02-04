import { useSociety } from "../context/SocietyContext";

export default function Events() {
  const { events } = useSociety();

  return (
    <div className="container py-4">
      <h2 className="mb-4">Events</h2>
      <div className="row g-3">
        {events.map((event) => (
          <div className="col-md-6" key={event.id}>
            <div className="card h-100">
              <img src={event.image} className="card-img-top" alt={event.title} />
              <div className="card-body">
                <h5 className="card-title">{event.title}</h5>
                <p className="text-muted">{event.date}</p>
                <p className="card-text">{event.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
