import React from "react";
import { Routes, Route } from "react-router-dom";

import Admin from "../Pages/Admin";


import Login from "../Pages/Login";

import Home from "../Pages/Homepage/Home";
import GiftCards from "../Pages/GiftCards";
import Payment from "../Pages/Payment/Payment";
import Singledetails from "../Pages/Singledetails";
import PremiumRestaurant from "../Pages/Restaurant/PremiumRestaurant";
import RestaurantHome from "../Pages/Restaurant/RestaurantHome";
import Signup from "../Pages/Signup";

import SingleCompany from "../Pages/SingleCompany";
import SingleHealthAdmin from "../Pages/SingleHealthAdmin";
import SingleSalonAdmin from "../Pages/SingleSalonAdmin";
import SingleGiftAdmin from "../Pages/SingleGiftAdmin";


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
    </Routes>
  );
};

export default AllRoutes;
