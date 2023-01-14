import React from "react";
import { Route, Routes } from "react-router-dom";
import HeaderDashboard from "../Components/DashboardComponent/HeaderDashboard";
import NavbarDashboard from "../Components/DashboardComponent/NavbarDashboard";
import Dashboard from "../Screens/Dashboard/Dashboard";
import Order from "../Screens/Dashboard/Order";
import AddProduct from "../Screens/Dashboard/Products/AddProduct";
import ProductDetail from "../Screens/Dashboard/Products/ProductDetail";
import ProductsList from "../Screens/Dashboard/Products/ProductsList";
import Stock from "../Screens/Dashboard/Stock";

const DashboardRoutes = () => {
  return (
    <div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <NavbarDashboard />
        <div style={{width:"100%"}} >
          <HeaderDashboard />
          <Routes>
            <Route path="" element={<Dashboard />} />
            <Route path="products">
              <Route index element={<ProductsList />} />
              <Route path=":id" element={<ProductDetail />} />
            </Route>
            <Route path="addproduct" element={<AddProduct />} />
            <Route path="order" element={<Order />} />
            <Route path="stock" element={<Stock />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default DashboardRoutes;
