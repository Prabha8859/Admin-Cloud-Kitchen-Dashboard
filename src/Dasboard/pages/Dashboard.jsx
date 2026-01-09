import React, { useState } from 'react';
import DashboardHeader from '../components/dashboard/DashboardHeader';
import DashboardNotifications from '../components/dashboard/DashboardNotifications';
import StatsCards from '../components/dashboard/StatsCards';
import OrderDetailsModal from '../components/dashboard/OrderDetailsModal';
import RecentActivity from '../components/dashboard/RecentActivity';

export default function Dashboard() {
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [pendingRequests, setPendingRequests] = useState([
    {
      id: 1,
      userName: "Rahul Sharma",
      phone: "+91 98765 43210",
      email: "rahul@example.com",
      address: "Flat 402, Krishna Heights, Civil Lines, Jaipur",
      orderType: "Dine-in",
      items: "Paneer Butter Masala, Naan (2)",
      amount: 450,
      dateTime: "2026-01-09 14:30",
      status: "PENDING"
    },
    {
      id: 2,
      userName: "Priya Singh",
      phone: "+91 87654 32109",
      email: "priya@example.com",
      address: "12, Malviya Nagar, Near GT Mall, Jaipur",
      orderType: "Takeaway",
      items: "Chicken Biryani, Raita",
      amount: 320,
      dateTime: "2026-01-09 15:15",
      status: "PENDING"
    },
    {
      id: 3,
      userName: "Amit Kumar",
      phone: "+91 76543 21098",
      email: "amit@example.com",
      address: "Plot 45, Vaishali Nagar, Jaipur",
      orderType: "Delivery",
      items: "Veg Thali, Gulab Jamun",
      amount: 280,
      dateTime: "2026-01-09 15:45",
      status: "PENDING"
    },
  ]);

  const [stats, setStats] = useState({
    totalOrdersToday: 24,
    revenue: 12450,
    menuItems: 128,
    activeUsers: 860
  });

  const [recentActivity, setRecentActivity] = useState([
    { id: 101, type: 'accepted', orderId: 1001, customerName: 'Sneha Gupta', amount: 1200, timestamp: '10:45 AM' },
    { id: 102, type: 'rejected', orderId: 1002, customerName: 'Vikram Singh', amount: 850, timestamp: '11:20 AM' },
    { id: 103, type: 'accepted', orderId: 1003, customerName: 'Anjali Desai', amount: 2100, timestamp: '12:15 PM' },
  ]);

  const handleAccept = (id) => {
    const order = pendingRequests.find(req => req.id === id);
    if (order) {
      const newActivity = {
        id: Date.now(),
        type: 'accepted',
        orderId: order.id,
        customerName: order.userName,
        amount: order.amount,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setRecentActivity(prev => [newActivity, ...prev]);
    }
    setPendingRequests(prevRequests => 
      prevRequests.filter(req => req.id !== id)
    );
    setStats(prev => ({ ...prev, totalOrdersToday: prev.totalOrdersToday + 1 }));
    // Here you would also send the accepted order to Orders module
    console.log(`Order ${id} ACCEPTED - Moved to Orders module`);
  };

  const handleReject = (id) => {
    const order = pendingRequests.find(req => req.id === id);
    if (order) {
      const newActivity = {
        id: Date.now(),
        type: 'rejected',
        orderId: order.id,
        customerName: order.userName,
        amount: order.amount,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setRecentActivity(prev => [newActivity, ...prev]);
    }
    setPendingRequests(prevRequests => 
      prevRequests.filter(req => req.id !== id)
    );
    console.log(`Order ${id} REJECTED - Process closed`);
  };

  return (
    <div className="p-6 space-y-6">
      <DashboardHeader />
     
      
      <div className="flex flex-col lg:flex-row items-start gap-6">
        <div className="flex-1 w-full">
          <RecentActivity activities={recentActivity} />
        </div> 
        <DashboardNotifications 
          pendingRequests={pendingRequests}
          onAccept={handleAccept}
          onReject={handleReject}
          onOrderClick={setSelectedOrder}
        />
      </div>

       <StatsCards stats={stats} />
      {selectedOrder && (
        <OrderDetailsModal 
          order={selectedOrder} 
          onClose={() => setSelectedOrder(null)}
          onAccept={handleAccept}
          onReject={handleReject}
        />
      )}
    </div>
  );
}
