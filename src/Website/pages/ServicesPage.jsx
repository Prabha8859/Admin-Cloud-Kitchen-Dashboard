import React from 'react';

const ServicesPage = () => {
  return (
    <div className="min-h-screen pt-24 pb-10 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">Comprehensive solutions designed to help your food business thrive in the digital age.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold text-[var(--primary)] mb-3">Cloud Kitchen Setup</h3>
            <p className="text-gray-600">Ready-to-move-in kitchen infrastructure with state-of-the-art equipment and compliance.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold text-[var(--primary)] mb-3">Order Management</h3>
            <p className="text-gray-600">Unified dashboard to manage orders from Swiggy, Zomato, and your own app in one place.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold text-[var(--primary)] mb-3">Growth & Marketing</h3>
            <p className="text-gray-600">Data-driven marketing strategies to increase your visibility and customer retention.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;