import React, { useState, useEffect } from "react";
import { Route, Routes, Link } from "react-router-dom";

import '../../styles/profileHome.scss';

export default function UserThumbnail() {

  return (
    <div className="profile-thumbnail-container">
      <div className="thumbnail-profile-pic">
        <div className="head"></div>
        <div className="body"></div>
      </div>
      <p>Leo</p>
      <p>4.5 / 10</p>
      <div className="thumbnail-bio">Hello! I am a Bio! I tell you about me so you will hire me!</div>
      <button>Chat</button>
      <button>View</button>
      <button>Book</button>
    </div>
  )
}