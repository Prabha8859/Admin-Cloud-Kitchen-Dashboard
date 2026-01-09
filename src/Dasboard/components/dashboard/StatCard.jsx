import React from 'react';
import { TrendingUp } from 'lucide-react';

export default function StatCard({ title, value, icon: Icon, color, trend }) {
  const colorClasses = {
    violet: {
      bg: "from-violet-500 to-indigo-500",
      light: "bg-violet-50",
      text: "text-violet-600"
    },
    green: {
      bg: "from-green-500 to-emerald-500",
      light: "bg-green-50",
      text: "text-green-600"
    },
    blue: {
      bg: "from-blue-500 to-cyan-500",
      light: "bg-blue-50",
      text: "text-blue-600"
    },
    orange: {
      bg: "from-orange-500 to-amber-500",
      light: "bg-orange-50",
      text: "text-orange-600"
    }
  };

  const colors = colorClasses[color];

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200">
      <div className="flex items-center justify-between mb-4">
        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${colors.bg} flex items-center justify-center shadow-lg`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
        {trend && (
          <span className={`flex items-center gap-1 text-sm font-semibold ${colors.text} ${colors.light} px-2 py-1 rounded-lg`}>
            <TrendingUp className="w-3 h-3" />
            {trend}
          </span>
        )}
      </div>
      <p className="text-sm text-gray-600 mb-1">{title}</p>
      <p className="text-3xl font-bold text-gray-800">{value}</p>
    </div>
  );
}