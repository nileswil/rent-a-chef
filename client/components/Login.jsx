import React, { useState, useEffect } from "react";
import { Route, Link } from "react-router-dom";

export default function Login () {
  const [signup, setSignup] = useState(false);

  const login = async (event) => {
    const username = document.getElementsByTagName('input')[0].value;
    const password = document.getElementsByTagName('input')[1].value;

    await fetch('/login', {
      method: "POST",
      headers: {
        'Content-type': 'application/json'
      },
      body: {
        username: username,
        password: password,
      },
    })
    .then(res => {console.log(res)})
    .catch(err => console.log(err));
  }

  return (

    <div id="login-box">
      <div>Hello</div>
      <form>
        <input type="text" placeholder="Username"/>
        <br/>
        <input type="text" placeholder="Password"/>
      </form>
      <button id="login-button" onClick={login}>Login</button>
      <button id="signup-button">Sign Up</button>
    </div>

  )
}