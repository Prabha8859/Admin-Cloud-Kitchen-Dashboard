import React from 'react';
import { CheckCircle, XCircle, Clock, Activity } from 'lucide-react';

export default function RecentActivity({ activities }) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-100 flex items-center gap-2">
        <Activity className="w-5 h-5 text-violet-600" />
        <h2 className="text-lg font-bold text-gray-800">Recent Activity</h2>
      </div>
      <div className="divide-y divide-gray-100 max-h-[400px] overflow-y-auto custom-scrollbar">
        {activities.length === 0 ? (
            <div className="p-8 text-center text-gray-500 text-sm">No recent activity to show.</div>
        ) : (
            activities.map(activity => (
                <div key={activity.id} className="p-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
                    <div className="flex items-center gap-4">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${activity.type === 'accepted' ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'}`}>
                            {activity.type === 'accepted' ? <CheckCircle className="w-5 h-5" /> : <XCircle className="w-5 h-5" />}
                        </div>
                        <div>
                            <p className="text-sm font-medium text-gray-800">
                                Order <span className="font-bold">#{activity.orderId}</span> was {activity.type}
                            </p>
                            <p className="text-xs text-gray-500 mt-0.5">
                                {activity.customerName} • <span className="font-medium text-gray-700">₹{activity.amount}</span>
                            </p>
                        </div>
                    </div>
                    <div className="text-xs text-gray-400 flex items-center gap-1 whitespace-nowrap">
                        <Clock className="w-3 h-3" />
                        {activity.timestamp}
                    </div>
                </div>
            ))
        )}
      </div>
    </div>
  );
}