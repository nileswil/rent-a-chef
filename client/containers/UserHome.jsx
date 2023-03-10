import React, { useState, useEffect } from "react";
import { Route, Routes, Link } from "react-router-dom";

import UserTopNavBar from "../components/UserTopNavBar.jsx";
import UserThumbnail from "../components/UserThumbnail.jsx";


export default function UserHome() {

  return (
    <>
      <UserTopNavBar />
      <div id="content-area" style={{marginTop: "200px"}}>
        <UserThumbnail></UserThumbnail>
        <UserThumbnail></UserThumbnail>
        <UserThumbnail></UserThumbnail>
        <UserThumbnail></UserThumbnail>
      </div>
    </>
  )
}