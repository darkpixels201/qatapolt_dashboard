import React from "react";
import { Route, Routes } from "react-router-dom";
import NavbarDashboard from "../Components/NavbarDashboard";
import Dashboard from "../Screens/Dashboard/Dashboard";
import Order from "../Screens/Dashboard/Order";
import ProductDetail from "../Screens/Dashboard/Products/ProductDetail";
import Products from "../Screens/Dashboard/Products/Products";
import Stock from "../Screens/Dashboard/Stock";

const DashboardRoutes = () => {
  return (
    <div>
      <NavbarDashboard />
      <Routes>
        <Route path="" element={<Dashboard />} />
        <Route path="products">
          <Route index element={<Products />} />
          <Route path=":id" element={<ProductDetail />} />
        </Route>
        <Route path="order" element={<Order />} />
        <Route path="stock" element={<Stock />} />
      </Routes>
    </div>
  );
};

export default DashboardRoutes;
