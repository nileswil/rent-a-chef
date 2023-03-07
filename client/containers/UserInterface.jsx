import React, { useState, useEffect } from "react";
import { Route, Routes, Link } from "react-router-dom";
import UserDashboard from "../components/UserDashboard";
import UserTopNavBar from "../components/UserTopNavBar";

export default function UserInterface() {
  return (
    <div>
      <UserTopNavBar/>
      <UserDashboard/>
    </div>
  )
}