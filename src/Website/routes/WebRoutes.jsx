import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Home from "../pages/home/Home";
import Register from "../pages/auth/Register";
import SignupPage from "../pages/auth/Signup";
import Login from "../pages/auth/Login";
import AboutUs from "../pages/AboutUs";
import CompanyPage from "../pages/Partner";
import ServicesPage from "../pages/ServicesPage .jsx";

import "../components/style/webstyle.css";
import "../Web-CSS/style.css";
const WebRoutes = () => {
  return (
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
  );
};

export default WebRoutes;
