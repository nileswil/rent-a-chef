import React, { useState, useEffect } from "react";
import { Route, Routes, Link } from "react-router-dom";

export default function UserTopNavBar() {

  return (
    <ul>
      <Link to="/dashboard"><li>Home</li></Link>
      <Link to="/profile"><li>Profile</li></Link>
      <Link to="/"><li>Logout</li></Link>
    </ul>
  )
}