import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import "./App.css";
import AdminRoutes from "./Dasboard/routes/AdminRoutes";
// Website Components
import WebRoutes from "./Website/routes/WebRoutes";

import ScrollToTop from "./Website/components/ui/ScrollToTop";


function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        {/* Redirect /admin to /admin/dashboard */}
        <Route path="/admin" element={<Navigate to="/admin/dashboard" replace />} />

        {/* Admin Dashboard Routes - Accessed via /admin */}
        <Route path="/admin/*" element={<AdminRoutes />} />
        {/* Public Website Routes - Accessed via / */}
        <Route path="/*" element={<WebRoutes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
