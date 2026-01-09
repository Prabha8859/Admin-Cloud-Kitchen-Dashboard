import React, { useState, useRef, useEffect } from 'react';
import { Bell, CheckCircle, XCircle, ChevronDown, ChevronUp } from 'lucide-react';

export default function DashboardNotifications({ pendingRequests, onAccept, onReject, onOrderClick }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const notificationRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (notificationRef.current && !notificationRef.current.contains(event.target)) {
        setIsExpanded(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="w-full max-w-md" ref={notificationRef}>
      <div className="bg-white border border-red-100 rounded-2xl p-4 shadow-lg shadow-red-100/50 w-full relative overflow-hidden group">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 to-orange-500"></div>
        
        {pendingRequests.length === 0 ? (
          <div className="flex items-center justify-center py-2 gap-3">
            <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center shrink-0">
              <Bell className="w-5 h-5 text-gray-400" />
            </div>
            <p className="text-sm font-medium text-gray-500">No new orders at the moment</p>
          </div>
        ) : (
          <>
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-gray-50">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
                </span>
                <span className="text-xs font-bold text-red-600 uppercase tracking-wider">Pending Orders</span>
              </div>
              <span className="bg-orange-50 text-orange-600 text-xs font-bold px-2.5 py-1 rounded-full border border-orange-100">
                {pendingRequests.length} Pending
              </span>
            </div>

            <div className={`flex flex-col gap-2 overflow-y-auto pr-1 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none'] transition-all duration-300 ${isExpanded ? 'max-h-[400px]' : 'max-h-[130px]'}`}>
              {pendingRequests.map((order) => (
                <div 
                  key={order.id} 
                  onClick={() => onOrderClick(order)}
                  className="flex items-center justify-between gap-4 p-2 rounded-xl hover:bg-gray-50 transition-all duration-300 border border-transparent hover:border-gray-100 animate-in slide-in-from-top-2 fade-in cursor-pointer"
                >
                  <div className="flex items-center gap-4 overflow-hidden">
                    <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center shrink-0 text-red-600 border border-red-100">
                      <Bell className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-sm font-bold text-gray-800 truncate">{order.items}</h3>
                      <div className="flex items-center gap-2 text-xs text-gray-500 mt-0.5">
                        <span className="font-medium text-gray-700">{order.userName}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <button onClick={(e) => { e.stopPropagation(); onReject(order.id); }} className="w-8 h-8 flex items-center justify-center rounded-full border border-red-100 text-red-500 hover:bg-red-50 hover:border-red-200 transition-all duration-200" title="Reject"><XCircle className="w-5 h-5" /></button>
                    <button onClick={(e) => { e.stopPropagation(); onAccept(order.id); }} className="w-8 h-8 flex items-center justify-center rounded-full bg-violet-600 text-white hover:bg-violet-700 shadow-md shadow-violet-200 hover:shadow-violet-300 hover:scale-105 transition-all duration-200" title="Accept"><CheckCircle className="w-5 h-5" /></button>
                  </div>
                </div>
              ))}
            </div>

            {pendingRequests.length > 2 && (
              <button 
                onClick={() => setIsExpanded(!isExpanded)}
                className="w-full mt-2 flex items-center justify-center gap-1 text-xs font-medium text-violet-600 hover:text-violet-700 hover:bg-violet-50 py-1.5 rounded-lg transition-colors"
              >
                {isExpanded ? <>Show Less <ChevronUp className="w-3 h-3" /></> : <>View All ({pendingRequests.length}) <ChevronDown className="w-3 h-3" /></>}
              </button>
            )}
          </>
        )}
      </div>
    </div>
  );
}