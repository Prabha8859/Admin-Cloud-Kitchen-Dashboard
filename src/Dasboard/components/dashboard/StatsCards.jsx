import React from 'react';
import { ShoppingBag, DollarSign, UtensilsCrossed, Users } from 'lucide-react';
import StatCard from './StatCard';

export default function StatsCards({ stats }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
      <StatCard 
        title="Total Orders Today"
        value={stats.totalOrdersToday}
        icon={ShoppingBag}
        color="violet"
        trend="+12%"
      />
      <StatCard 
        title="Revenue Today"
        value={`₹${stats.revenue.toLocaleString()}`}
        icon={DollarSign}
        color="green"
        trend="+8%"
      />
      <StatCard 
        title="Menu Items"
        value={stats.menuItems}
        icon={UtensilsCrossed}
        color="blue"
        trend="+3"
      />
      <StatCard 
        title="Active Users"
        value={stats.activeUsers}
        icon={Users}
        color="orange"
        trend="+24"
      />
    </div>
  );
}