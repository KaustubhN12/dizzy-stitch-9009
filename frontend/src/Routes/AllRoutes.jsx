import React from "react";
import { Routes, Route } from "react-router-dom";



import GiftCards from "../Pages/GiftCards";



import Admin from "../Pages/Admin";
import Login from "../Pages/Login";
import Home from "../Pages/Homepage/Home";
import GiftCards from "../Pages/GiftCards";
import Payment from "../Pages/Payment/Payment";
import PremiumRestaurant from "../Pages/Restaurant/PremiumRestaurant";
import RestaurantHome from "../Pages/Restaurant/RestaurantHome";

import AdminSignup from "../Pages/AdminSignup";
import Signup from "../Pages/Signup";
import SingleCompany from "../Pages/SingleCompany";
import SingleHealthAdmin from "../Pages/SingleHealthAdmin";
import SingleSalonAdmin from "../Pages/SingleSalonAdmin";
import SingleGiftAdmin from "../Pages/SingleGiftAdmin";
import AdminLogin from "../Pages/AdminLogin";
import Health from "../Pages/Health";
import NightLife from "../Pages/NightLife";
import Singledetails from "../Pages/Singledetails";

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
      <Route path="/admin" element={<Admin />} />
      <Route path="/update/:id" element={<SingleCompany />} />
      <Route path="/updatehealth/:id" element={<SingleHealthAdmin />} />
      <Route path="/updatesalon/:id" element={<SingleSalonAdmin />} />
      <Route path="/updategift/:id" element={<SingleGiftAdmin />} />
      <Route
        path="/restaurant/premium-restaurant"
        element={<PremiumRestaurant />}
      />
      <Route path="/singledetails" element={<Singledetails />}></Route>
      <Route path="/singledetails/:userID" element={<Singledetails />}></Route>
      <Route path="/giftcards" element={<GiftCards />} />
      <Route path="/health" element={<Health />} />
      <Route path="/nightlife" element={<NightLife />} />
      <Route path="/restaurant" element={<RestaurantHome />} />
    </Routes>
  );
};

export default AllRoutes;
