import React from 'react';
import { Phone, Mail, CheckCircle, XCircle, User, Clock } from 'lucide-react';
import OrderTypeBadge from '../components/dashboard/OrderTypeBadge';

export default function RequestRow({ request, onAccept, onReject }) {
  return (
    <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-200 group">
      <div className="flex flex-col md:flex-row gap-4">
        {/* Image Section */}
        <div className="w-full md:w-48 h-32 md:h-auto shrink-0 rounded-lg overflow-hidden relative">
          <img 
            src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&q=80" 
            alt="Food" 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute top-2 left-2">
            <OrderTypeBadge type={request.orderType} />
          </div>
        </div>

        {/* Content Section */}
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-bold text-gray-800 text-lg">{request.items}</h3>
                <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
                  <User className="w-4 h-4" />
                  <span className="font-medium text-gray-700">{request.userName}</span>
                  <span>•</span>
                  <Clock className="w-4 h-4" />
                  <span>{request.dateTime}</span>
                </div>
              </div>
              <div className="text-right">
                <span className="text-xl font-bold bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
                  ₹{request.amount}
                </span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mt-3">
              <div className="flex items-center gap-2 text-sm text-gray-600 bg-gray-50 px-3 py-1.5 rounded-lg">
                <Phone className="w-4 h-4 text-violet-500" />
                {request.phone}
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600 bg-gray-50 px-3 py-1.5 rounded-lg">
                <Mail className="w-4 h-4 text-violet-500" />
                {request.email}
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3 mt-4 pt-4 border-t border-gray-50 justify-end">
            <button
              onClick={() => onReject(request.id)}
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-red-100 text-red-600 hover:bg-red-50 font-medium transition-colors"
            >
              <XCircle className="w-4 h-4" />
              Reject
            </button>
            <button
              onClick={() => onAccept(request.id)}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-violet-600 text-white hover:bg-violet-700 font-medium shadow-sm shadow-violet-200 transition-all hover:shadow-md"
            >
              <CheckCircle className="w-4 h-4" />
              Accept Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}