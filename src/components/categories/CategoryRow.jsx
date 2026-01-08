import { Edit2, Power } from 'lucide-react';
import StatusBadge from '../../pages/StatusBadge';

export default function CategoryRow({ category, onEdit, onToggleStatus }) {
  return (
    <tr className="border-b border-gray-100 hover:bg-violet-50/30 transition-colors duration-150">
      <td className="py-4 px-6">
        <span className="font-semibold text-gray-800">{category.name}</span>
      </td>
      <td className="py-4 px-6">
        <span className="text-sm text-gray-600">{category.description}</span>
      </td>
      <td className="py-4 px-6 text-center">
        <StatusBadge status={category.status} />
      </td>
      <td className="py-4 px-6 text-center">
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-violet-100 text-violet-700 font-semibold text-sm">
          {category.totalItems}
        </span>
      </td>
      <td className="py-4 px-6">
        <span className="text-sm text-gray-600">
          {new Date(category.createdDate).toLocaleDateString('en-GB', { 
            day: '2-digit', 
            month: 'short', 
            year: 'numeric' 
          })}
        </span>
      </td>
      <td className="py-4 px-6">
        <div className="flex items-center justify-end gap-2">
          <button
            onClick={() => onEdit(category)}
            className="p-2 rounded-lg hover:bg-violet-100 text-violet-600 transition-colors duration-150 group"
            title="Edit"
          >
            <Edit2 className="w-4 h-4" />
          </button>
          <button
            onClick={() => onToggleStatus(category.id)}
            className={`p-2 rounded-lg transition-colors duration-150 ${
              category.status === "ACTIVE" 
                ? "hover:bg-red-100 text-red-600" 
                : "hover:bg-green-100 text-green-600"
            }`}
            title={category.status === "ACTIVE" ? "Disable" : "Enable"}
          >
            <Power className="w-4 h-4" />
          </button>
        </div>
      </td>
    </tr>
  );
}