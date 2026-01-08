import { useState } from 'react';
import { X } from 'lucide-react';

export default function MenuModal({ item, categories, onClose, onSubmit }) {
  const [formData, setFormData] = useState({
    name: item?.name || "",
    categoryId: item?.categoryId || "",
    category: item?.category || "",
    price: item?.price || "",
    type: item?.type || "VEG",
    availability: item?.availability || "IN_STOCK",
    status: item?.status || "ACTIVE",
    description: item?.description || "",
    prepTime: item?.prepTime || "",
    image: item?.image || ""
  });

  const [errors, setErrors] = useState({});
  const [imagePreview, setImagePreview] = useState(item?.image || "");

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Item name is required";
    if (!formData.categoryId) newErrors.categoryId = "Category is required";
    if (!formData.price || formData.price <= 0) newErrors.price = "Valid price is required";
    if (!formData.image.trim()) newErrors.image = "Image URL is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validate()) {
      const selectedCategory = categories.find(cat => cat.id === parseInt(formData.categoryId));
      onSubmit(item ? { 
        ...item, 
        ...formData,
        category: selectedCategory?.name || formData.category
      } : {
        ...formData,
        category: selectedCategory?.name || formData.category
      });
    }
  };

  const handleImageChange = (e) => {
    const url = e.target.value;
    setFormData({ ...formData, image: url });
    setImagePreview(url);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl my-8">
        <div className="p-6 border-b border-gray-100 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">
              {item ? "Edit Menu Item" : "Add New Menu Item"}
            </h2>
            <p className="text-sm text-gray-600 mt-1">
              {item ? "Update menu item information" : "Create a new food item"}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-5 max-h-[calc(100vh-200px)] overflow-y-auto">
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2 md:col-span-1">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Item Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g., Paneer Butter Masala"
                className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 transition-all duration-200 ${
                  errors.name ? "border-red-500 focus:ring-red-200" : "border-gray-200 focus:border-violet-500 focus:ring-violet-200"
                }`}
              />
              {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
            </div>

            <div className="col-span-2 md:col-span-1">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Category <span className="text-red-500">*</span>
              </label>
              <select
                value={formData.categoryId}
                onChange={(e) => setFormData({ ...formData, categoryId: e.target.value })}
                className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 transition-all duration-200 appearance-none ${
                  errors.categoryId ? "border-red-500 focus:ring-red-200" : "border-gray-200 focus:border-violet-500 focus:ring-violet-200"
                }`}
              >
                <option value="">Select Category</option>
                {categories.map(cat => (
                  <option key={cat.id} value={cat.id}>{cat.name}</option>
                ))}
              </select>
              {errors.categoryId && <p className="text-red-500 text-xs mt-1">{errors.categoryId}</p>}
            </div>

            <div className="col-span-2 md:col-span-1">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Price (₹) <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                value={formData.price}
                onChange={(e) => setFormData({ ...formData, price: parseFloat(e.target.value) })}
                placeholder="220"
                min="1"
                className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 transition-all duration-200 ${
                  errors.price ? "border-red-500 focus:ring-red-200" : "border-gray-200 focus:border-violet-500 focus:ring-violet-200"
                }`}
              />
              {errors.price && <p className="text-red-500 text-xs mt-1">{errors.price}</p>}
            </div>

            <div className="col-span-2 md:col-span-1">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Preparation Time
              </label>
              <input
                type="text"
                value={formData.prepTime}
                onChange={(e) => setFormData({ ...formData, prepTime: e.target.value })}
                placeholder="20 mins"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-200 transition-all duration-200"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Description
            </label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              placeholder="Brief description of the dish"
              rows="3"
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-200 transition-all duration-200 resize-none"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Image URL <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={formData.image}
              onChange={handleImageChange}
              placeholder="https://example.com/image.jpg"
              className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 transition-all duration-200 ${
                errors.image ? "border-red-500 focus:ring-red-200" : "border-gray-200 focus:border-violet-500 focus:ring-violet-200"
              }`}
            />
            {errors.image && <p className="text-red-500 text-xs mt-1">{errors.image}</p>}
            {imagePreview && (
              <div className="mt-3">
                <img 
                  src={imagePreview} 
                  alt="Preview" 
                  className="w-full h-48 object-cover rounded-xl border border-gray-200"
                  onError={() => setImagePreview("")}
                />
              </div>
            )}
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Type</label>
              <div className="space-y-2">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" value="VEG" checked={formData.type === "VEG"} onChange={(e) => setFormData({ ...formData, type: e.target.value })} className="w-4 h-4 text-violet-600" />
                  <span className="text-sm font-medium">Veg</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" value="NON_VEG" checked={formData.type === "NON_VEG"} onChange={(e) => setFormData({ ...formData, type: e.target.value })} className="w-4 h-4 text-violet-600" />
                  <span className="text-sm font-medium">Non-Veg</span>
                </label>
              </div>
            </div>
            {/* Add Availability and Status sections similarly if needed, based on your requirements */}
          </div>

          <div className="flex gap-3 pt-4">
            <button type="button" onClick={onClose} className="flex-1 px-4 py-3 border border-gray-300 rounded-xl text-gray-700 font-medium hover:bg-gray-50 transition-colors duration-200">
              Cancel
            </button>
            <button type="button" onClick={handleSubmit} className="flex-1 px-4 py-3 bg-gradient-to-r from-violet-600 to-indigo-600 text-white rounded-xl font-medium hover:shadow-lg hover:scale-105 transition-all duration-200">
              {item ? "Update Item" : "Add Item"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}