import React, { useState, useEffect } from "react";
import { Route, Routes, Link } from "react-router-dom";

import '../../styles/profile.scss';

export default function Profile() {
  return (
    <div id="content-area">
      <div className="centered-box">
        <div style={{ marginTop: "100px" }}></div>
        <input className="input-design" id="bio-input" placeholder="About myself..."></input>
        <input className="input-design" id="email-input" placeholder="Email"></input>
        <input className="input-design" id="pass-input" placeholder="Password"></input>
        <div style={{ marginTop: "100px" }}></div>
        <Link to='/dashboard'><button>Update</button></Link>
        <Link to='/dashboard'><button style={{ backgroundColor: "red" }}>Cancel</button></Link>
      </div>
    </div>
  )
}