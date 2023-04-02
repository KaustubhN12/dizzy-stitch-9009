import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import Home from "../Pages/Homepage/Home";
import GiftCards from "../Pages/GiftCards";
import Payment from "../Pages/Payment/Payment";
import Singledetails from "../Pages/Singledetails";
import PremiumRestaurant from "../Pages/Restaurant/PremiumRestaurant";
import RestaurantHome from "../Pages/Restaurant/RestaurantHome";
import AdminLogin from "../Pages/AdminLogin";
import AdminSignup from "../Pages/AdminSignup";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/adminlogin" element={<AdminLogin />} />
      <Route path="/adminsignup" element={<AdminSignup />} />
      <Route path="/restaurant" element={<RestaurantHome />} />
      <Route
        path="/restaurant/premium-restaurant"
        element={<PremiumRestaurant />}
      />
      <Route path="/singledetails" element={<Singledetails />}></Route>
      <Route path="/giftcards" element={<GiftCards />} />
    </Routes>
  );
};

export default AllRoutes;
