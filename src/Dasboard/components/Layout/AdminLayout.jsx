import React, { useState, useEffect } from 'react';
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import GlobalOrderAlertBar from "./GlobalOrderAlertBar";

const AUTO_CANCEL_SECONDS = 120;

export default function AdminLayout({ children }) {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Mock data initialization
    const mockOrders = [
      {
        orderId: "ORDER123456",
        items: [{}, {}, {}],
        remaining: AUTO_CANCEL_SECONDS,
      },
      {
        orderId: "ORDER654321",
        items: [{}, {}],
        remaining: AUTO_CANCEL_SECONDS - 20,
      },
      {
        orderId: "ORDER999888",
        items: [{}],
        remaining: AUTO_CANCEL_SECONDS - 40,
      },
    ];
    setOrders(mockOrders);
  }, []);

  // Timer logic
  useEffect(() => {
    if (orders.length === 0) return;

    const interval = setInterval(() => {
      setOrders((prev) =>
        prev
          .map((o) => ({ ...o, remaining: o.remaining - 1 }))
          .filter((o) => o.remaining > 0)
      );
    }, 1000);

    return () => clearInterval(interval);
  }, [orders.length]);

  const handleAccept = (orderId) => {
    setOrders((prev) => prev.filter((o) => o.orderId !== orderId));
  };

  const handleReject = (orderId) => {
    setOrders((prev) => prev.filter((o) => o.orderId !== orderId));
  };

  const handleClearAll = () => {
    setOrders([]);
  };

  return (
    <div className="flex h-screen overflow-hidden bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        {orders.length > 0 ? (
          <GlobalOrderAlertBar 
            orders={orders} 
            onAccept={handleAccept} 
            onReject={handleReject} 
            onClearAll={handleClearAll}
          />
        ) : (
          <Navbar />
        )}
        <main className="flex-1 overflow-y-auto p-4 page-container">
          {children}
        </main>
      </div>
    </div>
  );
}
