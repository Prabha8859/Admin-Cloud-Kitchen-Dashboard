export default function StatusBadge({ status }) {
  const isActive = status === "ACTIVE";
  
  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold backdrop-blur-sm ${
      isActive 
        ? "bg-green-500/90 text-white" 
        : "bg-gray-500/90 text-white"
    }`}>
      <span className={`w-1.5 h-1.5 rounded-full ${isActive ? "bg-white" : "bg-white"}`}></span>
      {status}
    </span>
  );
}