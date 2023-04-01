import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../Pages/Login";
import PremiumRestaurant from "../Pages/Restaurant/PremiumRestaurant";
import RestaurantHome from "../Pages/Restaurant/RestaurantHome";
import Signup from "../Pages/Signup";
import Home from "../Pages/Homepage/Home";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/restaurant" element={<RestaurantHome/>} />
      <Route path="/restaurant/premium-restaurant" element={<PremiumRestaurant />} />
    </Routes>
  );
};

export default AllRoutes;
