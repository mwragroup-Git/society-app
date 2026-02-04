export default function Rules() {
  const rules = [
    "Maintain cleanliness in common areas.",
    "No loud music after 10 PM.",
    "Keep pets on a leash in shared spaces.",
    "Dispose of garbage in designated bins.",
    "Parking only in allotted spots."
  ];

  return (
    <div className="container py-4">
      <h2>Society Rules</h2>
      <ol className="mt-3">
        {rules.map((rule, idx) => (
          <li key={idx} className="mb-2">{rule}</li>
        ))}
      </ol>
    </div>
  );
}
