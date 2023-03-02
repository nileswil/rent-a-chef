import React, { useState, useEffect } from "react";
import { Route, Routes, Link } from "react-router-dom";
import Login from "./Login.jsx";

export default function App() {
  return (

    <div id="login">
      <Routes>
        <Route path="/login" element={<Login/>}>

        </Route>
      </Routes>
    </div>

  )
};