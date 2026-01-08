import { UtensilsCrossed } from 'lucide-react';

export default function TypeFilter({ value, onChange }) {
  return (
    <div className="relative">
      <UtensilsCrossed className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="pl-10 pr-8 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-200 transition-all duration-200 appearance-none bg-white cursor-pointer"
      >
        <option value="ALL">All Types</option>
        <option value="VEG">Veg</option>
        <option value="NON_VEG">Non-Veg</option>
      </select>
    </div>
  );
}