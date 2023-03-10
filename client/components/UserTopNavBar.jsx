import React, { useState, useEffect } from "react";
import { Route, Routes, Link } from "react-router-dom";

import '../../styles/navbar.scss';

export default function UserTopNavBar() {

  return (
    <ul className="top-nav-bar">
      <Link to="/dashboard"><li className="home-tab">Home</li></Link>
      <Link to="/"><li className="right-tab">Logout</li></Link>
      <Link to="/profile"><li className="right-tab">Profile</li></Link>
    </ul>
  )
}