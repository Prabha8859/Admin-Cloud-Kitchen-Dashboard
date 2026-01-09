import React, { useState } from 'react';
import { ShoppingBag } from 'lucide-react';
import PageHeader from '../components/common/PageHeader';
import OrderFilters from '../components/orders/OrderFilters';
import OrderTabs from '../components/orders/OrderTabs';
import OrderCard from '../components/orders/OrderCard';

export default function Orders() {
  const [activeTab, setActiveTab] = useState('Confirmed');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Mock Data - In a real app, this would come from an API or global state
  const [orders, setOrders] = useState([
    {
      id: "ORD-2024-001",
      customer: "Rahul Sharma",
      items: ["Paneer Butter Masala", "Butter Naan (2)", "Jeera Rice"],
      amount: 450,
      status: "Confirmed",
      time: "10 mins ago",
      type: "Dine-in",
      payment: "Paid",
      tableNo: "Table 4"
    },
    {
      id: "ORD-2024-002",
      customer: "Priya Singh",
      items: ["Chicken Biryani", "Raita", "Coke"],
      amount: 380,
      status: "Preparing",
      time: "25 mins ago",
      type: "Takeaway",
      payment: "Pending",
      tableNo: "-"
    },
    {
      id: "ORD-2024-003",
      customer: "Amit Kumar",
      items: ["Veg Thali", "Gulab Jamun"],
      amount: 220,
      status: "Ready",
      time: "40 mins ago",
      type: "Delivery",
      payment: "Paid",
      tableNo: "-"
    },
    {
      id: "ORD-2024-004",
      customer: "Sneha Gupta",
      items: ["Masala Dosa", "Filter Coffee"],
      amount: 180,
      status: "Delivered",
      time: "1 hour ago",
      type: "Dine-in",
      payment: "Paid",
      tableNo: "Table 12"
    },
    {
      id: "ORD-2024-005",
      customer: "Vikram Malhotra",
      items: ["Pizza", "Garlic Bread"],
      amount: 550,
      status: "Confirmed",
      time: "5 mins ago",
      type: "Delivery",
      payment: "Paid",
      tableNo: "-"
    }
  ]);

  const handleStatusChange = (orderId, newStatus) => {
    setOrders(orders.map(order => 
      order.id === orderId ? { ...order, status: newStatus } : order
    ));
  };

  const filteredOrders = orders.filter(order => order.status === activeTab && (order.customer.toLowerCase().includes(searchQuery.toLowerCase()) || order.id.toLowerCase().includes(searchQuery.toLowerCase())));

  return (
    <div className="space-y-6">
      <PageHeader 
        title="Order Management" 
        subtitle="Track and manage your kitchen orders"
        rightElement={
          <OrderFilters 
            searchQuery={searchQuery} 
            onSearchChange={setSearchQuery} 
          />
        }
      />

      <OrderTabs 
        activeTab={activeTab} 
        onTabChange={setActiveTab} 
        orders={orders} 
      />

      {/* Orders Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredOrders.map(order => (
          <OrderCard 
            key={order.id} 
            order={order} 
            onStatusChange={handleStatusChange}
          />
        ))}
        {filteredOrders.length === 0 && (
          <div className="col-span-full text-center py-12 bg-white rounded-2xl border border-dashed border-gray-200">
            <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <ShoppingBag className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-bold text-gray-800">No Orders Found</h3>
            <p className="text-gray-500">There are no orders in the {activeTab} stage.</p>
          </div>
        )}
      </div>
    </div>
  );
}