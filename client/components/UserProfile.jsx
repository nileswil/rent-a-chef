import React, { useState, useEffect } from "react";
import { Route, Routes, Link } from "react-router-dom";

export default function Profile() {
  return (
    <div id="profile">
      <div>Bio
        <input></input>
      </div>
      <div>Email
        <input></input>
      </div>
      <div>Password
        <input></input>
      </div>
      <Link to='/dashboard'><button>Update</button></Link>
      <Link to='/dashboard'><button>Cancel</button></Link>
    </div>
  )
}