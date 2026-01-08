export default function TypeBadge({ type }) {
  const isVeg = type === "VEG";
  
  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold backdrop-blur-sm ${
      isVeg 
        ? "bg-green-500/90 text-white" 
        : "bg-red-500/90 text-white"
    }`}>
      <span className={`w-2 h-2 rounded-full ${isVeg ? "bg-white" : "bg-white"}`}></span>
      {isVeg ? "VEG" : "NON-VEG"}
    </span>
  );
}