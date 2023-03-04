import React, { useState, useEffect } from "react";
import { Route, Routes, Link } from "react-router-dom";
import Login from "./Login.jsx";
import UserTopNavBar from "./UserTopNavBar.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="dashboard" element={<UserTopNavBar/>}/>
    </Routes>
  )
};