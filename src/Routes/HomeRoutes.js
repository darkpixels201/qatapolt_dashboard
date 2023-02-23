import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../Components/Navbar";
import AuthenticationScreen from "../Screens/AuthenticationScreen";
import Home from "../Screens/Home";
import Login from "../Screens/Login/Login";
import Signup from "../Screens/SignUp/Signup";

const HomeRoutes = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<AuthenticationScreen />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        {/* <Route path="/" element={<Home />} /> */}
      </Routes>
    </div>
  );
};

export default HomeRoutes;
