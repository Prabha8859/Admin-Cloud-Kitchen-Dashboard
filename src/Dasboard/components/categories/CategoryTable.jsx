import CategoryRow from '../categories/CategoryRow';

export default function CategoryTable({ categories, onEdit, onToggleStatus }) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-100 bg-gray-50">
              <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Category Name</th>
              <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Description</th>
              <th className="text-center py-4 px-6 text-sm font-semibold text-gray-700">Status</th>
              <th className="text-center py-4 px-6 text-sm font-semibold text-gray-700">Total Items</th>
              <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Created Date</th>
              <th className="text-right py-4 px-6 text-sm font-semibold text-gray-700">Actions</th>
            </tr>
          </thead>
          <tbody>
            {categories.length === 0 ? (
              <tr>
                <td colSpan="6" className="text-center py-12 text-gray-500">
                  No categories found
                </td>
              </tr>
            ) : (
              categories.map(category => (
                <CategoryRow
                  key={category.id}
                  category={category}
                  onEdit={onEdit}
                  onToggleStatus={onToggleStatus}
                />
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}