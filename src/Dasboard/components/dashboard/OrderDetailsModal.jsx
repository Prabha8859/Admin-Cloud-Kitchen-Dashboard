import React from 'react';
import { X, Phone, MapPin, Clock, CheckCircle, XCircle, BellRing, Receipt } from 'lucide-react';

export default function OrderDetailsModal({ order, onClose, onAccept, onReject }) {
  if (!order) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden animate-in zoom-in-95 duration-200 border border-gray-100">
        
        {/* Header */}
        <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between bg-gradient-to-r from-violet-50 to-indigo-50">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-white rounded-full shadow-sm text-red-600 relative group">
                <BellRing className="w-5 h-5 animate-bounce" />
                <span className="absolute top-0 right-0 flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
                </span>
            </div>
            <div>
                <h3 className="text-lg font-bold text-gray-800">New Order Request</h3>
                <p className="text-xs text-gray-500 font-medium">#{order.id} • {order.orderType}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button 
              onClick={onClose}
              className="p-2 rounded-full hover:bg-white/80 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Body */}
        <div className="p-6 space-y-6 max-h-[70vh] overflow-y-auto custom-scrollbar">
          
          {/* Customer & Location */}
          <div className="space-y-4">
            <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl border border-gray-100">
               <div className="w-10 h-10 rounded-full bg-violet-100 flex items-center justify-center text-violet-700 font-bold text-lg shrink-0">
                {order.userName.charAt(0)}
              </div>
              <div className="space-y-1 flex-1">
                <h4 className="font-bold text-gray-800">{order.userName}</h4>
                <div className="flex flex-col gap-1 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                        <Phone className="w-3.5 h-3.5 text-gray-400" />
                        {order.phone}
                    </div>
                    <div className="flex items-start gap-2">
                        <MapPin className="w-3.5 h-3.5 text-gray-400 mt-0.5 shrink-0" />
                        <span className="leading-snug">{order.address || "No address provided"}</span>
                    </div>
                </div>
              </div>
            </div>
          </div>

          {/* Order Items & Timing */}
          <div>
            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                <Receipt className="w-3.5 h-3.5" /> Order Details
            </h4>
            
            <div className="border border-gray-100 rounded-xl overflow-hidden">
                {/* Items List */}
                <div className="p-4 bg-white space-y-3">
                    <div className="flex justify-between items-start text-sm">
                        <span className="text-gray-700 font-medium leading-relaxed">{order.items}</span>
                        <span className="font-semibold text-gray-900 whitespace-nowrap">₹{order.amount}</span>
                    </div>
                    <div className="border-t border-dashed border-gray-200 my-2"></div>
                    <div className="flex justify-between items-center text-base font-bold">
                        <span className="text-gray-800">Total Amount</span>
                        <span className="text-violet-600">₹{order.amount}</span>
                    </div>
                </div>

                {/* Timing Footer */}
                <div className="bg-orange-50 px-4 py-3 flex items-center justify-between border-t border-orange-100">
                    <div className="flex items-center gap-2 text-orange-700">
                        <Clock className="w-4 h-4" />
                        <span className="text-sm font-semibold">Requested Time</span>
                    </div>
                    <span className="text-sm font-bold text-orange-800 bg-white px-2 py-0.5 rounded border border-orange-100 shadow-sm">
                        {order.dateTime.split(' ')[1]}
                    </span>
                </div>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 border-t border-gray-100 bg-gray-50 flex gap-3">
          <button
            onClick={() => { onReject(order.id); onClose(); }}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-red-200 text-red-600 hover:bg-red-50 font-bold transition-all active:scale-95"
          >
            <XCircle className="w-4 h-4" />
            Reject Order
          </button>
          <button
            onClick={() => { onAccept(order.id); onClose(); }}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-violet-600 text-white hover:bg-violet-700 font-bold shadow-lg shadow-violet-200 transition-all hover:scale-[1.02] active:scale-95"
          >
            <CheckCircle className="w-4 h-4" />
            Accept Order
          </button>
        </div>
      </div>
    </div>
  );
}