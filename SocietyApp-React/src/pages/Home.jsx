import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="container py-4">
      <div className="p-4 p-md-5 mb-4 rounded text-bg-primary">
        <h1>Welcome to Mahaveer Willet Society</h1>
        <p className="lead">
          Your one-stop portal for events, maintenance, complaints, and community updates.
        </p>
      </div>

      <div className="row g-3 mb-4">
        <div className="col-md-3">
          <Link to="/events" className="card quick-link text-decoration-none">
            <div className="card-body">Events</div>
          </Link>
        </div>
        <div className="col-md-3">
          <Link to="/rules" className="card quick-link text-decoration-none">
            <div className="card-body">Rules</div>
          </Link>
        </div>
        <div className="col-md-3">
          <Link to="/complaints" className="card quick-link text-decoration-none">
            <div className="card-body">Complaints</div>
          </Link>
        </div>
        <div className="col-md-3">
          <Link to="/marketplace" className="card quick-link text-decoration-none">
            <div className="card-body">Marketplace</div>
          </Link>
        </div>
      </div>

      <div className="row g-3">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Community Highlights</h5>
              <p className="card-text">
                Monthly get-togethers, volunteer drives, and safety initiatives to keep our society vibrant.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Quick Updates</h5>
              <p className="card-text">
                Stay updated with maintenance schedules, dues, and important notices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
