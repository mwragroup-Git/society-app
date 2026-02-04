import { useSociety } from "../context/SocietyContext";

export default function Maintenance() {
  const { maintenanceBills } = useSociety();

  return (
    <div className="container py-4">
      <h2 className="mb-4">Maintenance Dues</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Month</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {maintenanceBills.map((bill) => (
            <tr key={bill.id}>
              <td>{bill.month}</td>
              <td>${bill.amount}</td>
              <td>{bill.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
