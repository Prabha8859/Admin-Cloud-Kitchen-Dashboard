export default function PageHeader({ title, subtitle, action }) {
  return (
    <div className="flex justify-between items-center mb-6">
      <div>
        <h1 className="page-title">{title}</h1>
        {subtitle && <p className="page-subtitle">{subtitle}</p>}
      </div>
      {action}
    </div>
  );
}
