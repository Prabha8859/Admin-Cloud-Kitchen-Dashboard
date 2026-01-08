export default function StatusBadge({ status }) {
  const isActive = status === "ACTIVE";
  
  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold ${
      isActive 
        ? "bg-green-100 text-green-700" 
        : "bg-red-100 text-red-700"
    }`}>
      <span className={`w-1.5 h-1.5 rounded-full ${isActive ? "bg-green-500" : "bg-red-500"}`}></span>
      {status}
    </span>
  );
}