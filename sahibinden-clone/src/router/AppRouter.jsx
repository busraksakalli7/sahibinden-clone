import React from "react";
import { Routes, Route } from "react-router-dom";

// Sayfalar
import Home from "../pages/Home/Home";
import Listings from "../pages/Listings/Listings";
import Details from "../pages/Details/ListingDetail";
import Categories from "../pages/Categories/Categories";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import Profile from "../pages/Profile/Profile";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/listings" element={<Listings />} />
      <Route path="/ilan-detay/:id" element={<Details />} />
      <Route path="/categories" element={<Categories />} />
      
      {/* Auth sayfaları */}
      <Route path="/auth/login" element={<Login />} />
      <Route path="/auth/register" element={<Register />} />
      
      <Route path="/profile" element={<Profile />} />
      
      <Route path="*" element={<div>Sayfa Bulunamadı</div>} />
    </Routes>
  );
};

export default AppRouter;