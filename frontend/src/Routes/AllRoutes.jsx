import React from "react";
import { Routes, Route } from "react-router-dom";
import GiftCards from "../Pages/GiftCards";
import Admin from "../Pages/Admin";
import Login from "../Pages/Login";
import Home from "../Pages/Homepage/Home";

import Payment from "../Pages/Payment/Payment";
import PremiumRestaurant from "../Pages/Restaurant/PremiumRestaurant";
import RestaurantHome from "../Pages/Restaurant/RestaurantHome";
import AdminLogin from "../Pages/AdminLogin";
import AdminSignup from "../Pages/AdminSignup";
import Signup from "../Pages/Signup";
import SingleCompany from "../Pages/SingleCompany";
import SingleHealthAdmin from "../Pages/SingleHealthAdmin";
import SingleSalonAdmin from "../Pages/SingleSalonAdmin";
import SingleGiftAdmin from "../Pages/SingleGiftAdmin";


import Health from "../Pages/Health";
import NightLife from "../Pages/NightLife";
import Orders from "../Pages/UserAccount/Orders";
import Credits from "../Pages/UserAccount/Credits";
import Profile from "../Pages/UserAccount/Profile";
import NewsLetter from "../Pages/UserAccount/NewsLetter";
import Refer from "../Pages/UserAccount/Refer";
import Promotion from "../Pages/UserAccount/Promotion";
import Salon from "../Pages/salon";
import Singledetails from "../Pages/Singledetails";
import OrderSuccess from "../Pages/OrderSuccess";
import Singledetailsalon from "../Pages/SingledetailsSalon";
import PrivateRoute from "./PrivateRoute";


const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/payment" element={<PrivateRoute><Payment /></PrivateRoute>} />
      <Route path="/adminlogin" element={<AdminLogin />} />
      <Route path="/adminsignup" element={<AdminSignup />} />
      <Route path="/restaurant" element={<RestaurantHome />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/update/:id" element={<SingleCompany />} />
      <Route path="/updatehealth/:id" element={<SingleHealthAdmin />} />
      <Route path="/updatesalon/:id" element={<SingleSalonAdmin />} />
      <Route path="/updategift/:id" element={<SingleGiftAdmin />} />
      <Route path="/restaurant/premium-restaurant" element={<PremiumRestaurant />}/>


      <Route
        path="/restaurant/premium-restaurant"
        element={<PremiumRestaurant />}
      />

      <Route path="/singledetails" element={<Singledetails />}></Route>
      <Route path="/singledetailsalon" element={<Singledetailsalon />}></Route>
      <Route path="/singledetailsalon/:userID" element={<Singledetailsalon />}></Route>
      <Route path="/singledetails/:userID" element={<Singledetails />}></Route>
      <Route path="/giftcards" element={<GiftCards />} />
      <Route path="/health" element={<Health />} />
      <Route path="/nightlife" element={<NightLife />} />
      <Route path="/restaurant" element={<RestaurantHome />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="/credits" element={<Credits />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/newsletter" element={<NewsLetter />} />
      <Route path="/refer" element={<Refer />} />
      <Route path="/promotion" element={<Promotion />} />
      <Route path="/salon" element={<Salon />} />
      <Route path="/ordersuccess" element={<OrderSuccess />} />
    </Routes>
  );
};

export default AllRoutes;
