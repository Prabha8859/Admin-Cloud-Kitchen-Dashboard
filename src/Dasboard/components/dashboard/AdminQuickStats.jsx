import React from 'react';
import { User, Star, Tag, MessageSquare, AlertCircle } from 'lucide-react';

export default function AdminQuickStats({ order }) {
  return (
    <div className="space-y-6 h-full flex flex-col">
      {/* Customer Insights */}
      <div>
        <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4 flex items-center gap-2">
          <User className="w-3.5 h-3.5" /> Customer Insights
        </h4>
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-white p-3 rounded-xl border border-gray-100 shadow-sm">
            <p className="text-xs font-medium text-gray-500 mb-1">Total Orders</p>
            <p className="text-lg font-bold text-gray-800">12</p>
          </div>
          <div className="bg-white p-3 rounded-xl border border-gray-100 shadow-sm">
            <p className="text-xs font-medium text-gray-500 mb-1 flex items-center gap-1">
              Avg Rating <Star className="w-3 h-3 text-orange-400 fill-orange-400" />
            </p>
            <p className="text-lg font-bold text-gray-800">4.8</p>
          </div>
        </div>
      </div>

      {/* Admin Notes */}
      <div className="flex-1">
        <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3 flex items-center gap-2">
          <MessageSquare className="w-3.5 h-3.5" /> Admin Notes
        </h4>
        <textarea 
          className="w-full h-32 p-3 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500/20 resize-none bg-white shadow-sm transition-all"
          placeholder="Add internal notes for this order (e.g. 'Allergic to nuts', 'VIP client')..."
        ></textarea>
      </div>

      {/* Quick Tags */}
      <div>
        <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3 flex items-center gap-2">
          <Tag className="w-3.5 h-3.5" /> Quick Tags
        </h4>
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1.5 rounded-lg bg-red-50 text-red-600 text-xs font-bold border border-red-100 cursor-pointer hover:bg-red-100 transition-colors flex items-center gap-1"><AlertCircle className="w-3 h-3" /> Priority</span>
          <span className="px-3 py-1.5 rounded-lg bg-blue-50 text-blue-600 text-xs font-bold border border-blue-100 cursor-pointer hover:bg-blue-100 transition-colors">New Customer</span>
          <span className="px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-600 text-xs font-bold border border-emerald-100 cursor-pointer hover:bg-emerald-100 transition-colors">VIP</span>
        </div>
      </div>
    </div>
  );
}