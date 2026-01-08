import { UtensilsCrossed } from 'lucide-react';
import MenuCard from './MenuCard';

export default function MenuGrid({ items, onEdit, onToggleStatus }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
      {items.length === 0 ? (
        <div className="col-span-full text-center py-16 text-gray-500">
          <UtensilsCrossed className="w-16 h-16 mx-auto mb-4 text-gray-300" />
          <p className="text-lg font-medium">No menu items found</p>
        </div>
      ) : (
        items.map(item => (
          <MenuCard
            key={item.id}
            item={item}
            onEdit={onEdit}
            onToggleStatus={onToggleStatus}
          />
        ))
      )}
    </div>
  );
}