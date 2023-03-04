import React, { useState, useEffect } from "react";
import { Route, Routes, Link } from "react-router-dom";

export default function UserTopNavBar() {

  return (

    <div>
      <div>User Navigation Bar</div>
      <button id="navbar-button">Home</button>
      <button id="profile-button">Profile</button>
      <button id="logout-button">Logout</button>
    </div>

  )
}