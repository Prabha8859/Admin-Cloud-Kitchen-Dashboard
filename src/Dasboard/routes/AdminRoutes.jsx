import { Routes, Route } from "react-router-dom";
import AdminLayout from "../components/Layout/AdminLayout";

import Dashboard from "../pages/Dashboard";
import Categories from "../pages/Categories";
import Menu from "../pages/Menu";
import Orders from "../pages/Orders";
import Payments from "../pages/Payments";
import Users from "../pages/Users";
import './style.css'

export default function AdminRoutes() {
  return (
      <AdminLayout>
        <Routes>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="categories" element={<Categories />} />
          <Route path="menu" element={<Menu />} />
          <Route path="orders" element={<Orders />} />
          <Route path="payments" element={<Payments />} />
          <Route path="users" element={<Users />} />
        </Routes>
      </AdminLayout>
  );
}
