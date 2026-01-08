import { Plus } from 'lucide-react';
import MenuSearchBar from './MenuSearchBar';
import CategoryFilter from './CategoryFilter';
import TypeFilter from './TypeFilter';

export default function MenuHeader({ onAddClick, searchQuery, onSearchChange, filterCategory, onCategoryChange, filterType, onTypeChange, categories }) {
  return (
    <div className="space-y-4">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
            Menu Items
          </h1>
          <p className="text-gray-600 mt-1">Manage your restaurant menu and food items</p>
        </div>

        <button
          onClick={onAddClick}
          className="flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-violet-600 to-indigo-600 text-white rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-200 font-medium"
        >
          <Plus className="w-5 h-5" />
          Add Menu Item
        </button>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <MenuSearchBar value={searchQuery} onChange={onSearchChange} />
        <CategoryFilter value={filterCategory} onChange={onCategoryChange} categories={categories} />
        <TypeFilter value={filterType} onChange={onTypeChange} />
      </div>
    </div>
  );
}