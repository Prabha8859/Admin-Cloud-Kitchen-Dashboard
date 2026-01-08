export default function Badge({ type, text }) {
  const styles = {
    success: "bg-green-100 text-green-600",
    warning: "bg-yellow-100 text-yellow-600",
    danger: "bg-red-100 text-red-600",
  };

  return (
    <span className={`px-2 py-1 rounded text-xs ${styles[type]}`}>
      {text}
    </span>
  );
}
