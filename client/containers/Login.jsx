import React, { useState, useEffect } from "react";
import { Route, Link } from "react-router-dom";

import '../../styles/login.scss';

export default function Login () {
  const [signup, setSignup] = useState(false);

  const login = async (event) => {
    const username = document.getElementsByTagName('input')[0].value;
    const password = document.getElementsByTagName('input')[1].value;

    await fetch('/api/login', {
      method: "POST",
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        username,
        password,
      }),
    })
    .then(res => res.json())
    .then(res => console.log(res))
    .catch(err => console.log(err))
  }

  return (

    <div id="content-area">
      <div id="login">
        <div id="login-box">
          <div className="welcome">Welcome to</div>
          <div className="welcome">Rent-A-Chef</div>
          <form>
            <input className="login-input" type="text" placeholder="Username"/>
            <br/>
            <input className="login-input" type="text" placeholder="Password"/>
          </form>
          <Link to="/dashboard"><button id="login-button">Login</button></Link>
          <Link to="/dashboard"><button id="signup-button">Sign Up</button></Link>
        </div>
      </div>
    </div>
  )
}