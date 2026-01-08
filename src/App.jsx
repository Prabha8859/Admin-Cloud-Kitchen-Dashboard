import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import AdminRoutes from "./Dasboard/routes/AdminRoutes";

// Website Components
import Navbar from "./Website/components/layout/Navbar";
import Footer from "./Website/components/layout/Footer";
import Home from "./Website/pages/home/Home";
import Register from "./Website/pages/auth/Register";
import SignupPage from "./Website/pages/auth/Signup";
import Login from "./Website/pages/auth/Login";
import AboutUs from "./Website/pages/AboutUs";
import CompanyPage from "./Website/pages/Partner";
import ServicesPage from "./Website/pages/ServicesPage ";
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
        <Route path="*" element={
          <>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/register" element={<Register />} />
              <Route path="/register-kitchen" element={<Register />} />
              <Route path="/signup" element={<SignupPage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/company" element={<CompanyPage />} />
              <Route path="/service" element={<ServicesPage />} />
            </Routes>
            <Footer />
          </>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
