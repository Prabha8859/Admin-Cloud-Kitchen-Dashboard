import { useState } from 'react';
import CategoryHeader from '../components/categories/CategoryHeader';
import CategoryStats from '../components/categories/CategoryStats';
import CategoryTable from '../components/categories/CategoryTable';
import CategoryModal from '../components/categories/CategoryModal';

export default function Categories() {
  const [categories, setCategories] = useState([
    { id: 1, name: "Breakfast", description: "Morning meals and beverages", status: "ACTIVE", totalItems: 24, createdDate: "2026-01-01" },
    { id: 2, name: "Lunch", description: "Afternoon main courses", status: "ACTIVE", totalItems: 32, createdDate: "2026-01-01" },
    { id: 3, name: "Dinner", description: "Evening dining options", status: "INACTIVE", totalItems: 18, createdDate: "2026-01-01" },
    { id: 4, name: "Beverages", description: "Drinks and refreshments", status: "ACTIVE", totalItems: 15, createdDate: "2026-01-02" },
    { id: 5, name: "Desserts", description: "Sweet treats", status: "INACTIVE", totalItems: 12, createdDate: "2026-01-03" },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingCategory, setEditingCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState("ALL");

  const handleAddCategory = (newCategory) => {
    const category = {
      id: Date.now(),
      ...newCategory,
      totalItems: 0,
      createdDate: new Date().toISOString().split('T')[0]
    };
    setCategories([...categories, category]);
    setIsModalOpen(false);
  };

  const handleEditCategory = (updatedCategory) => {
    setCategories(categories.map(cat => 
      cat.id === updatedCategory.id ? { ...cat, ...updatedCategory } : cat
    ));
    setEditingCategory(null);
    setIsModalOpen(false);
  };

  const handleToggleStatus = (id) => {
    setCategories(categories.map(cat => 
      cat.id === id ? { ...cat, status: cat.status === "ACTIVE" ? "INACTIVE" : "ACTIVE" } : cat
    ));
  };

  const openEditModal = (category) => {
    setEditingCategory(category);
    setIsModalOpen(true);
  };

  const openAddModal = () => {
    setEditingCategory(null);
    setIsModalOpen(true);
  };

  // Filter categories
  const filteredCategories = categories.filter(cat => {
    const matchesSearch = cat.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filterStatus === "ALL" || cat.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="space-y-6">
      <CategoryHeader 
        onAddClick={openAddModal}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        filterStatus={filterStatus}
        onFilterChange={setFilterStatus}
      />
      
      <CategoryStats categories={categories} />
      
      <CategoryTable 
        categories={filteredCategories}
        onEdit={openEditModal}
        onToggleStatus={handleToggleStatus}
      />

      {isModalOpen && (
        <CategoryModal
          category={editingCategory}
          onClose={() => {
            setIsModalOpen(false);
            setEditingCategory(null);
          }}
          onSubmit={editingCategory ? handleEditCategory : handleAddCategory}
        />
      )}
    </div>
  );
}
