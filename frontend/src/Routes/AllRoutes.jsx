import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../Pages/Login";
import Home from "../Pages/Homepage/Home";
import GiftCards from "../Pages/GiftCards";
import Payment from "../Pages/Payment/Payment";
import PremiumRestaurant from "../Pages/Restaurant/PremiumRestaurant";
import RestaurantHome from "../Pages/Restaurant/RestaurantHome";
import Signup from "../Pages/Signup";
import Singledetails from "../Pages/Singledetails";
import AdminLogin from "../Pages/AdminLogin";
import Health from "../Pages/Health";
import NightLife from "../Pages/NightLife";

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
      <Route path="/health" element={<Health />} />
      <Route path="/nightlife" element={<NightLife />} />
      <Route path="/restaurant" element={<RestaurantHome />} />
    </Routes>
  );
};

export default AllRoutes;
