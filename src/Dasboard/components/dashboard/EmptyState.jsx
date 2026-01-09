import React from 'react';
import { CheckCircle } from 'lucide-react';

export default function EmptyState() {
  return (
    <div className="text-center py-16 px-6">
      <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-violet-100 to-indigo-100 rounded-full flex items-center justify-center">
        <CheckCircle className="w-10 h-10 text-violet-600" />
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-2">All Caught Up!</h3>
      <p className="text-gray-600 max-w-md mx-auto">
        No pending orders at the moment. New requests will appear here automatically.
      </p>
    </div>
  );
}