import React, { useState, useEffect } from "react";
import { Route, Link } from "react-router-dom";

export default function Login () {
  const [signup, setSignup] = useState(false);

  const login = async (event) => {
    const username = document.getElementsByTagName('input')[0].value;
    const password = document.getElementsByTagName('input')[1].value;

    await fetch('/api/login', {
      method: "POST",
      headers: {
        'Content-type': 'application/x-www-form-urlencoded'
      },
      body: {
        username: username,
        password: password,
      },
    })
    .then(res => res.json())
    .then(res => console.log(res))
    .catch(err => console.log(err))
  }

  return (

    <div id="login">
      <div id="login-box">
        <div>Hello</div>
        <form>
          <input type="text" placeholder="Username"/>
          <br/>
          <input type="text" placeholder="Password"/>
        </form>
        <Link to="/dashboard"><button id="login-button">Login</button></Link>
        <Link to="/dashboard"><button id="signup-button">Sign Up</button></Link>
      </div>
    </div>
  )
}