import { UtensilsCrossed, Power, Package } from 'lucide-react';

function StatCard({ title, value, icon: Icon, color }) {
  const colorClasses = {
    violet: "from-violet-500 to-indigo-500",
    green: "from-green-500 to-emerald-500",
    emerald: "from-emerald-500 to-teal-500",
    red: "from-red-500 to-rose-500",
    blue: "from-blue-500 to-cyan-500",
    orange: "from-orange-500 to-amber-500"
  };

  return (
    <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200">
      <div className="flex items-center justify-between mb-2">
        <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${colorClasses[color]} flex items-center justify-center shadow-md`}>
          <Icon className="w-5 h-5 text-white" />
        </div>
      </div>
      <p className="text-2xl font-bold text-gray-800">{value}</p>
      <p className="text-xs text-gray-600 mt-0.5">{title}</p>
    </div>
  );
}

export default function MenuStats({ items }) {
  const stats = {
    total: items.length,
    active: items.filter(i => i.status === "ACTIVE").length,
    veg: items.filter(i => i.type === "VEG").length,
    nonVeg: items.filter(i => i.type === "NON_VEG").length,
    inStock: items.filter(i => i.availability === "IN_STOCK").length,
    outOfStock: items.filter(i => i.availability === "OUT_OF_STOCK").length,
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      <StatCard title="Total Items" value={stats.total} icon={UtensilsCrossed} color="violet" />
      <StatCard title="Active" value={stats.active} icon={Power} color="green" />
      <StatCard title="Veg Items" value={stats.veg} icon={Package} color="emerald" />
      <StatCard title="Non-Veg" value={stats.nonVeg} icon={Package} color="red" />
      <StatCard title="In Stock" value={stats.inStock} icon={Package} color="blue" />
      <StatCard title="Out of Stock" value={stats.outOfStock} icon={Package} color="orange" />
    </div>
  );
}