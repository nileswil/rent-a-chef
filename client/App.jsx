import React, { useState, useEffect } from "react";
import { Route, Routes, Link } from "react-router-dom";
import Login from "./containers/Login.jsx";
import UserHome from "./containers/UserHome.jsx";
import Profile from "./components/UserProfile.jsx";

export default function App() {
  return (
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/dashboard" element={<UserHome/>}/>
        <Route path="/profile" element={<Profile/>}/>
      </Routes>
  )
};