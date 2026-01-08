import { Grid3x3, Power, Calendar } from 'lucide-react';

function StatCard({ title, value, icon: Icon, color }) {
  const colorClasses = {
    violet: "from-violet-500 to-indigo-500",
    green: "from-green-500 to-emerald-500",
    red: "from-red-500 to-rose-500",
    blue: "from-blue-500 to-cyan-500"
  };

  return (
    <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-600 mb-1">{title}</p>
          <p className="text-3xl font-bold text-gray-800">{value}</p>
        </div>
        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${colorClasses[color]} flex items-center justify-center shadow-lg`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
      </div>
    </div>
  );
}

export default function CategoryStats({ categories }) {
  const stats = {
    total: categories.length,
    active: categories.filter(c => c.status === "ACTIVE").length,
    inactive: categories.filter(c => c.status === "INACTIVE").length,
    totalItems: categories.reduce((sum, c) => sum + c.totalItems, 0)
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      <StatCard title="Total Categories" value={stats.total} icon={Grid3x3} color="violet" />
      <StatCard title="Active" value={stats.active} icon={Power} color="green" />
      <StatCard title="Inactive" value={stats.inactive} icon={Power} color="red" />
      <StatCard title="Total Items" value={stats.totalItems} icon={Calendar} color="blue" />
    </div>
  );
}