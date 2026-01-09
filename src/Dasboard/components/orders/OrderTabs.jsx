import React from 'react';
import { CheckCircle, ChefHat, Package, Truck } from 'lucide-react';

export default function OrderTabs({ activeTab, onTabChange, orders }) {
  const tabs = [
    { id: 'Confirmed', label: 'Confirmed', icon: CheckCircle, count: orders.filter(o => o.status === 'Confirmed').length },
    { id: 'Preparing', label: 'Preparing', icon: ChefHat, count: orders.filter(o => o.status === 'Preparing').length },
    { id: 'Ready', label: 'Ready', icon: Package, count: orders.filter(o => o.status === 'Ready').length },
    { id: 'Delivered', label: 'Delivered', icon: Truck, count: orders.filter(o => o.status === 'Delivered').length },
  ];

  return (
    <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
      {tabs.map(tab => {
        const Icon = tab.icon;
        const isActive = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium transition-all whitespace-nowrap ${
              isActive 
                ? 'bg-violet-600 text-white shadow-lg shadow-violet-200' 
                : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-100'
            }`}
          >
            <Icon className="w-4 h-4" />
            {tab.label}
            <span className={`ml-1 px-2 py-0.5 rounded-full text-xs ${
              isActive ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-600'
            }`}>
              {tab.count}
            </span>
          </button>
        );
      })}
    </div>
  );
}