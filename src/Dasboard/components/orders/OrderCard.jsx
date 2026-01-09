import React from 'react';
import { Clock, CheckCircle, ChefHat, Package, Truck, MapPin } from 'lucide-react';

export default function OrderCard({ order, onStatusChange }) {
  const getNextStatus = (current) => {
    switch(current) {
      case 'Confirmed': return 'Preparing';
      case 'Preparing': return 'Ready';
      case 'Ready': return 'Delivered';
      default: return null;
    }
  };

  const nextStatus = getNextStatus(order.status);

  return (
    <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col h-full group">
      <div className="flex justify-between items-start mb-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="font-bold text-gray-800 text-lg">{order.id}</span>
            <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wide border ${
              order.type === 'Dine-in' ? 'bg-blue-50 text-blue-600 border-blue-100' :
              order.type === 'Takeaway' ? 'bg-purple-50 text-purple-600 border-purple-100' :
              'bg-orange-50 text-orange-600 border-orange-100'
            }`}>
              {order.type}
            </span>
          </div>
          <p className="text-sm text-gray-500 font-medium">{order.customer}</p>
        </div>
        <div className="text-right">
          <span className="block font-bold text-violet-600 text-lg">₹{order.amount}</span>
          <span className={`text-xs font-medium ${order.payment === 'Paid' ? 'text-green-600' : 'text-orange-600'}`}>
            {order.payment}
          </span>
        </div>
      </div>

      <div className="flex-1 mb-4">
        <div className="space-y-2">
          {order.items.map((item, idx) => (
            <div key={idx} className="flex items-center gap-2 text-sm text-gray-700">
              <div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div>
              {item}
            </div>
          ))}
        </div>
      </div>

      <div className="pt-4 border-t border-gray-50 mt-auto">
        <div className="flex items-center justify-between mb-4 text-xs text-gray-500">
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5" />
            {order.time}
          </div>
          <div className="flex items-center gap-1.5">
             <MapPin className="w-3.5 h-3.5" />
             {order.tableNo || "N/A"}
          </div>
        </div>

        {nextStatus ? (
          <button onClick={() => onStatusChange(order.id, nextStatus)} className="w-full py-2.5 rounded-xl bg-gray-900 hover:bg-gray-800 text-white font-semibold text-sm transition-colors flex items-center justify-center gap-2 shadow-lg shadow-gray-200">
            {order.status === 'Confirmed' && <><ChefHat className="w-4 h-4" /> Start Preparing</>}
            {order.status === 'Preparing' && <><Package className="w-4 h-4" /> Mark Ready</>}
            {order.status === 'Ready' && <><Truck className="w-4 h-4" /> Mark Delivered</>}
          </button>
        ) : <div className="w-full py-2.5 rounded-xl bg-green-50 text-green-600 font-semibold text-sm flex items-center justify-center gap-2 border border-green-100"><CheckCircle className="w-4 h-4" /> Completed</div>}
      </div>
    </div>
  );
}