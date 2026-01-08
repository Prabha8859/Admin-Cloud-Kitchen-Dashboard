import { Edit2, Power, Clock } from 'lucide-react';
import TypeBadge from './TypeBadge';
import AvailabilityBadge from './AvailabilityBadge';
import StatusBadge from './StatusBadge';

export default function MenuCard({ item, onEdit, onToggleStatus }) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 group">
      {/* Image */}
      <div className="relative h-48 overflow-hidden bg-gray-100">
        <img 
          src={item.image} 
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute top-3 left-3 flex gap-2">
          <TypeBadge type={item.type} />
          <AvailabilityBadge availability={item.availability} />
        </div>
        <div className="absolute top-3 right-3">
          <StatusBadge status={item.status} />
        </div>
      </div>

      {/* Content */}
      <div className="p-4 space-y-3">
        <div>
          <h3 className="font-bold text-lg text-gray-800 line-clamp-1">{item.name}</h3>
          <p className="text-sm text-gray-600 line-clamp-2 mt-1">{item.description}</p>
        </div>

        <div className="flex items-center justify-between text-sm">
          <span className="px-3 py-1 bg-violet-100 text-violet-700 rounded-lg font-medium">
            {item.category}
          </span>
          <span className="flex items-center gap-1 text-gray-600">
            <Clock className="w-4 h-4" />
            {item.prepTime}
          </span>
        </div>

        <div className="flex items-center justify-between pt-3 border-t border-gray-100">
          <span className="text-2xl font-bold bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
            ₹{item.price}
          </span>
          <div className="flex gap-2">
            <button
              onClick={() => onEdit(item)}
              className="p-2 rounded-lg hover:bg-violet-100 text-violet-600 transition-colors duration-150"
              title="Edit"
            >
              <Edit2 className="w-4 h-4" />
            </button>
            <button
              onClick={() => onToggleStatus(item.id)}
              className={`p-2 rounded-lg transition-colors duration-150 ${
                item.status === "ACTIVE" 
                  ? "hover:bg-red-100 text-red-600" 
                  : "hover:bg-green-100 text-green-600"
              }`}
              title={item.status === "ACTIVE" ? "Disable" : "Enable"}
            >
              <Power className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}