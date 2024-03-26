import React, { useEffect } from "react";
import Navigation from "./header/Navigation";
import Bannerrecipe from "./banner/Bannerrecipe";
import { BrowserRouter, Navigate, Route, Routes, useNavigate } from "react-router-dom";
import About from "./about/About";
import Contact from "./contact/Contact";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Recipesmenu from "./recipes/Recipesmenu";
import Footer from "./footer/Footer";
import Accessibility from "./policy/Accessibility";
import Privacy from "./policy/Privacy";
import Terms from "./policy/Terms";
import Login from "./auth/login/Login";
import CreateRecipes from "./recipes/CreateRecipes";
import ShowRecipes from "./recipes/ShowRecipes";
import Register from "./auth/register/Register";
import EditRecipes from "./recipes/EditRecipes";
import Profile from "./profile/Profile";


const App = () => {

  const token = localStorage.getItem('token');

  const navigate = useNavigate();

  // useEffect(() => {
  //   // Redirect to login if there's no token
  //   if (!token) {
  //     navigate('/login');
  //   }
  // }, [token, navigate]);

  return (
    <>



      <Navigation />
      <Routes>
        {/* <Route path="/" elemtent={<Navigation />} /> */}
        {!token && (
          <>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<Navigate to="/login" />} />
          </>
        )}

        {token && (
          <>
            <Route index element={<Bannerrecipe />} />
            <Route path="/home" element={<Bannerrecipe />} />
            <Route path="/about" element={<About />} />
            <Route path="/recipes" element={<Recipesmenu />} />
            <Route path="/create" element={<CreateRecipes />} />
            <Route path="/edit" element={<EditRecipes />} />
            <Route path="/show" element={<ShowRecipes />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/register" element={<Register />} />
            <Route path="/accessibility" element={<Accessibility />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/profile" element={<Profile/>} />
          </>
        )}

      </Routes>
      <Footer />
      {/* <Login/> */}

    </>
  );
};

export default App;
