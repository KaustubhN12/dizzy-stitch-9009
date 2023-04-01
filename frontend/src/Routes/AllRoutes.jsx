import React from "react";
import { Routes, Route } from "react-router-dom";
import Admin from "../Pages/Admin";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Payment from "../Pages/Payment/Payment";
import PremiumRestaurant from "../Pages/Restaurant/PremiumRestaurant";
import RestaurantHome from "../Pages/Restaurant/RestaurantHome";
import Signup from "../Pages/Signup";
import SingleCompany from "../Pages/SingleCompany";
import SingleHealthAdmin from "../Pages/SingleHealthAdmin";
import SingleSalonAdmin from "../Pages/SingleSalonAdmin";
import SingleGiftAdmin from "../Pages/SingleGiftAdmin";


const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/payment" element={<Payment />} />
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
    </Routes>
  );
};

export default AllRoutes;
