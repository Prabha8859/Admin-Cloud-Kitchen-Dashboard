import React from "react";
import { Check, X, Clock, Bell, Trash2 } from "lucide-react";

export default function GlobalOrderAlertBar({ orders, onAccept, onReject, onClearAll }) {
  if (!orders || orders.length === 0) return null;

  const currentOrder = orders[0];
  const remainingCount = orders.length - 1;

  return (
    <div className="bg-gradient-to-r from-red-600 to-red-700 text-white shadow-xl relative z-50 m-4 rounded-2xl overflow-hidden border border-red-500/50 animate-in slide-in-from-top-2">
      <div className="h-16 flex items-center justify-between px-6">
        {/* Left: Identifier */}
        <div className="flex items-center gap-4">
           <div className="relative">
             <div className="p-2 bg-white/10 rounded-full">
                <Bell className="w-6 h-6 animate-bounce" />
             </div>
             <span className="absolute top-0 right-0 w-3 h-3 bg-white rounded-full animate-ping"></span>
           </div>
           <div>
               <span className="font-bold text-lg tracking-tight block leading-none">
                 #{currentOrder.orderId.slice(-6)}
               </span>
               <span className="text-xs text-red-100 font-medium">New Request</span>
           </div>
        </div>

        {/* Center: Details (Time & Items) */}
        <div className="flex items-center gap-6 absolute left-1/2 -translate-x-1/2 hidden md:flex">
           <div className="flex items-center gap-3 bg-black/20 px-5 py-2 rounded-full border border-white/10 backdrop-blur-sm">
              <span className="font-semibold text-sm">{currentOrder.items.length} Items</span>
              <span className="w-1 h-1 bg-white/40 rounded-full"></span>
              <div className="flex items-center gap-1.5 font-mono text-sm font-bold text-red-100">
                <Clock className="w-4 h-4" />
                {currentOrder.remaining}s
              </div>
           </div>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 mr-4 border-r border-white/10 pr-4">
              <button
                onClick={() => onReject(currentOrder.orderId)}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-all active:scale-95"
                title="Reject"
              >
                <X className="w-5 h-5" />
              </button>
              <button
                onClick={() => onAccept(currentOrder.orderId)}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-red-600 hover:bg-gray-100 transition-all shadow-sm active:scale-95"
                title="Accept"
              >
                <Check className="w-5 h-5 stroke-[3]" />
              </button>
          </div>
          
          <button 
            onClick={onClearAll}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg hover:bg-white/10 text-xs font-medium transition-colors text-red-100 hover:text-white"
          >
            <Trash2 className="w-4 h-4" />
            Clear All
          </button>
        </div>
      </div>

      {/* Footer: Remaining Count */}
      {remainingCount > 0 && (
        <div className="bg-black/20 text-center py-1.5 text-[11px] font-bold uppercase tracking-wider text-red-100/80 backdrop-blur-sm">
          {remainingCount} more orders in queue
        </div>
      )}
    </div>
  );
}
