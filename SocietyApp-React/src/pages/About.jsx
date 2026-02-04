export default function About() {
  return (
    <div className="container py-4">
      <h2>How It All Started</h2>
      <p className="lead">
        Mahaveer Willet began as a close-knit community focused on shared values and collective growth.
      </p>
      <div className="row g-3">
        <div className="col-md-6">
          <div className="card">
            <img src="https://placehold.co/600x400" className="card-img-top" alt="Society history" />
            <div className="card-body">
              <p className="card-text">Our first gathering brought neighbors together to celebrate our new home.</p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card">
            <img src="https://placehold.co/600x400" className="card-img-top" alt="Community" />
            <div className="card-body">
              <p className="card-text">Today, we continue to build an inclusive, vibrant community.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
