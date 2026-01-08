import { Search } from 'lucide-react';

export default function MenuSearchBar({ value, onChange }) {
  return (
    <div className="relative flex-1 min-w-[250px]">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search menu items..."
        className="pl-10 pr-4 py-2.5 w-full border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-200 transition-all duration-200"
      />
    </div>
  );
}