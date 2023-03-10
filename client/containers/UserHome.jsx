import React, { useState, useEffect } from "react";
import { Route, Routes, Link } from "react-router-dom";

import UserTopNavBar from "../components/UserTopNavBar.jsx";

import '../../styles/profileHome.scss';

export default function UserHome() {

  return (
    <>
      <UserTopNavBar />
      <div id="content-area">
        <div className="profile-thumbnail-container">

        </div>
      </div>
    </>
  )
}