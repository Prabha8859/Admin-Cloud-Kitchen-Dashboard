import React from 'react';

export default function PageHeader({ title, subtitle, rightElement }) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
      <div>
        <h1 className="text-2xl font-bold text-gray-800">{title}</h1>
        {subtitle && <p className="text-sm text-gray-500 mt-1">{subtitle}</p>}
      </div>
      {rightElement && (
        <div className="shrink-0">
          {rightElement}
        </div>
      )}
    </div>
  );
}
