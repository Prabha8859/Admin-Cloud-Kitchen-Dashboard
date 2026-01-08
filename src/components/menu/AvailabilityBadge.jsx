export default function AvailabilityBadge({ availability }) {
  const inStock = availability === "IN_STOCK";
  
  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold backdrop-blur-sm ${
      inStock 
        ? "bg-blue-500/90 text-white" 
        : "bg-orange-500/90 text-white"
    }`}>
      {inStock ? "In Stock" : "Out of Stock"}
    </span>
  );
}