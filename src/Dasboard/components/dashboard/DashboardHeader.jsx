import React from 'react';
import { Calendar } from 'lucide-react';
import PageHeader from '../common/PageHeader';

export default function DashboardHeader() {
  const currentDate = new Date().toLocaleDateString('en-GB', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  return (
    <PageHeader 
      title="Dashboard"
      subtitle="Welcome back! Here's what's happening today"
      rightElement={
        <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-xl border border-gray-100 shadow-sm text-sm text-gray-600 shrink-0">
          <Calendar className="w-4 h-4 text-violet-600" />
          {currentDate}
        </div>
      }
    />
  );
}