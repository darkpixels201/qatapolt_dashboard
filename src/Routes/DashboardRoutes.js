import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import HeaderDashboard from "../Components/DashboardComponent/HeaderDashboard";
import NavbarDashboard from "../Components/DashboardComponent/NavbarDashboard";
import Dashboard from "../Screens/Dashboard/Dashboard";
import AddProduct from "../Screens/Dashboard/Products/AddProduct";
import EditModalProduct from "../Screens/Dashboard/Products/EditModalProduct";
import EditProduct from "../Screens/Dashboard/Products/EditProduct";
import ProductDetail from "../Screens/Dashboard/Products/ProductDetail";
import ProductsList from "../Screens/Dashboard/Products/ProductsList";
import Stock from "../Screens/Dashboard/Post";
import User from "../Screens/Dashboard/User";
import Trophies from "../Screens/Dashboard/Trophy/Trophies";
import TrophyDetail from "../Screens/Dashboard/Trophy/TrophyDetail";
import BreadCrumbs from "../Components/DashboardComponent/BreadCrumbs";

const DashboardRoutes = () => {
  const [sideBar, setSideBar] = useState(true)
  return (
    <div>
      <div style={{ display: "flex", flexDirection: "row",}}>
        <NavbarDashboard sideBar={sideBar} setSideBar={setSideBar} />
        <div style={{width:"100%"}} >
          <HeaderDashboard sideBar={sideBar} setSideBar={setSideBar} />
          {/* <BreadCrumbs /> */}
          <Routes>
            <Route path="" element={<Dashboard />} />
            <Route path="products">
              <Route index element={<ProductsList />} />
              <Route path=":id" element={<ProductDetail />} />
              <Route path="edit/:id" element={<EditProduct />} />
              {/* <Route path="edit/:id" element={<EditModalProduct />} /> */}
            </Route>
            <Route path="addproduct" element={<AddProduct />} />
            <Route path="user" element={<User />} />
            <Route path="post" element={<Stock />} />
            <Route path="trophy" element={<Trophies />} />
            <Route path="trophy/:id" element={<TrophyDetail />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default DashboardRoutes;
