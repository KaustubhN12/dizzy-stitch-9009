import React from "react";
import { Routes, Route } from "react-router-dom";
import GiftCards from "../Pages/GiftCards";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Payment from "../Pages/Payment/Payment";
import PremiumRestaurant from "../Pages/Restaurant/PremiumRestaurant";
import RestaurantHome from "../Pages/Restaurant/RestaurantHome";
import Signup from "../Pages/Signup";
import Singledetails from "../Pages/Singledetails";
import AdminLogin from "../Pages/AdminLogin";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/adminlogin" element={<AdminLogin />} />
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
