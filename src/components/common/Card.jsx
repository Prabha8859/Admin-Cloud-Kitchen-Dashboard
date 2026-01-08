export default function Card({ title, value }) {
  return (
    <div className="card">
      <p className="text-sm text-gray-500">{title}</p>
      <h3 className="text-2xl font-bold">{value}</h3>
    </div>
  );
}
