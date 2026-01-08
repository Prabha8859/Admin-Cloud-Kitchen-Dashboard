import { useState, useEffect } from 'react';
import MenuHeader from '../components/menu/MenuHeader';
import MenuStats from '../components/menu/MenuStats';
import MenuGrid from '../components/menu/MenuGrid';
import MenuModal from '../components/menu/MenuModal';
import Pagination from '../components/common/Pagination';

export default function Menu() {
  const [menuItems, setMenuItems] = useState([
    { 
      id: 1, 
      name: "Paneer Butter Masala", 
      category: "Lunch", 
      categoryId: 2,
      price: 220, 
      type: "VEG", 
      availability: "IN_STOCK",
      status: "ACTIVE",
      description: "Rich and creamy paneer curry",
      prepTime: "20 mins",
      image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400",
      createdDate: "2026-01-01"
    },
    { 
      id: 2, 
      name: "Chicken Biryani", 
      category: "Lunch", 
      categoryId: 2,
      price: 280, 
      type: "NON_VEG", 
      availability: "IN_STOCK",
      status: "ACTIVE",
      description: "Aromatic basmati rice with tender chicken",
      prepTime: "30 mins",
      image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400",
      createdDate: "2026-01-01"
    },
    { 
      id: 3, 
      name: "Masala Dosa", 
      category: "Breakfast", 
      categoryId: 1,
      price: 120, 
      type: "VEG", 
      availability: "OUT_OF_STOCK",
      status: "ACTIVE",
      description: "Crispy dosa with potato filling",
      prepTime: "15 mins",
      image: "https://images.unsplash.com/photo-1630383249896-424e482df921?w=400",
      createdDate: "2026-01-02"
    },
    { 
      id: 4, 
      name: "Dal Makhani", 
      category: "Dinner", 
      categoryId: 3,
      price: 180, 
      type: "VEG", 
      availability: "IN_STOCK",
      status: "INACTIVE",
      description: "Slow cooked black lentils",
      prepTime: "25 mins",
      image: "https://images.unsplash.com/photo-1546833998-877b37c2e5c6?w=400",
      createdDate: "2026-01-03"
    },
  ]);

  const categories = [
    { id: 1, name: "Breakfast" },
    { id: 2, name: "Lunch" },
    { id: 3, name: "Dinner" },
    { id: 4, name: "Beverages" },
    { id: 5, name: "Desserts" },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterCategory, setFilterCategory] = useState("ALL");
  const [filterType, setFilterType] = useState("ALL");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const handleAddItem = (newItem) => {
    const item = {
      id: Date.now(),
      ...newItem,
      createdDate: new Date().toISOString().split('T')[0]
    };
    setMenuItems([...menuItems, item]);
    setIsModalOpen(false);
  };

  const handleEditItem = (updatedItem) => {
    setMenuItems(menuItems.map(item => 
      item.id === updatedItem.id ? { ...item, ...updatedItem } : item
    ));
    setEditingItem(null);
    setIsModalOpen(false);
  };

  const handleToggleStatus = (id) => {
    setMenuItems(menuItems.map(item => 
      item.id === id ? { ...item, status: item.status === "ACTIVE" ? "INACTIVE" : "ACTIVE" } : item
    ));
  };

  const openEditModal = (item) => {
    setEditingItem(item);
    setIsModalOpen(true);
  };

  const openAddModal = () => {
    setEditingItem(null);
    setIsModalOpen(true);
  };

  // Filter items
  const filteredItems = menuItems.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = filterCategory === "ALL" || item.category === filterCategory;
    const matchesType = filterType === "ALL" || item.type === filterType;
    return matchesSearch && matchesCategory && matchesType;
  });

  // Reset to first page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, filterCategory, filterType]);

  // Pagination Logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="space-y-6">
      <MenuHeader 
        onAddClick={openAddModal}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        filterCategory={filterCategory}
        onCategoryChange={setFilterCategory}
        filterType={filterType}
        onTypeChange={setFilterType}
        categories={categories}
      />
      
      <MenuStats items={menuItems} />
      
      <MenuGrid 
        items={currentItems}
        onEdit={openEditModal}
        onToggleStatus={handleToggleStatus}
      />

      <Pagination 
        currentPage={currentPage}
        totalItems={filteredItems.length}
        itemsPerPage={itemsPerPage}
        onPageChange={setCurrentPage}
      />

      {isModalOpen && (
        <MenuModal
          item={editingItem}
          categories={categories}
          onClose={() => {
            setIsModalOpen(false);
            setEditingItem(null);
          }}
          onSubmit={editingItem ? handleEditItem : handleAddItem}
        />
      )}
    </div>
  );
}