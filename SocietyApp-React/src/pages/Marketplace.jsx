import { useSociety } from "../context/SocietyContext";

export default function Marketplace() {
  const { marketplace } = useSociety();

  return (
    <div className="container py-4">
      <h2 className="mb-4">Marketplace</h2>
      <div className="row g-3">
        {marketplace.map((item) => (
          <div className="col-md-4" key={item.id}>
            <div className="card h-100">
              <img src={item.image} className="card-img-top" alt={item.name} />
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">Seller: {item.seller}</p>
                <p className="card-text fw-bold">${item.price}</p>
                <button className="btn btn-sm btn-outline-primary">Contact Seller</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
