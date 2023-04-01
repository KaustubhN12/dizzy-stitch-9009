import React from "react";
import { Routes, Route } from "react-router-dom";


import GiftCards from "../Pages/GiftCards";
import Home from "../Pages/Home";

import Login from "../Pages/Login";
import Payment from "../Pages/Payment/Payment";
import PremiumRestaurant from "../Pages/Restaurant/PremiumRestaurant";
import RestaurantHome from "../Pages/Restaurant/RestaurantHome";
import Signup from "../Pages/Signup";

import Home from "../Pages/Homepage/Home";

import Singledetails from "../Pages/Singledetails"


const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/restaurant" element={<RestaurantHome />} />
      <Route
        path="/restaurant/premium-restaurant"
        element={<PremiumRestaurant />}
      />

      <Route path="/singledetails" element={<Singledetails/>}></Route>
      <Route
        path="/giftcards"
        element={<GiftCards />}
      />

    </Routes>
  );
};

export default AllRoutes;
