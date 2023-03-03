import React, { useState, useEffect } from "react";
import { Route, Routes, Link } from "react-router-dom";

export default function UserTopNavBar() {
  return (

    <div id="navbar-box">
      <div>User Navigation Bar</div>
      <button id="navbar-button">Home</button>
      <button id="signup-button">Profile</button>
      <button id="signup-button">Logout</button>
    </div>

  )
}