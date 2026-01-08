import { Plus } from 'lucide-react';
import SearchBar from '../../pages/SearchBar';
import FilterDropdown from './FilterDropdown';

export default function CategoryHeader({ onAddClick, searchQuery, onSearchChange, filterStatus, onFilterChange }) {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
      <div>
        <h1 className="text-3xl font-bold bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
          Categories
        </h1>
        <p className="text-gray-600 mt-1">Manage your food categories and menu items</p>
      </div>

      <div className="flex items-center gap-3">
        <SearchBar value={searchQuery} onChange={onSearchChange} />
        <FilterDropdown value={filterStatus} onChange={onFilterChange} />
        <button
          onClick={onAddClick}
          className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-violet-600 to-indigo-600 text-white rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-200 font-medium"
        >
          <Plus className="w-4 h-4" />
          Add Category
        </button>
      </div>
    </div>
  );
}