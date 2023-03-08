import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  //const [sigin, setSignIn] = useState(false);
  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');
  const [wrongInfo, setWrongInfo] = useState(false);
  const navigate = useNavigate();

  const handleClick = async (event) => {
    try {
      event.preventDefault();
      const username = document.getElementsByTagName('input')[0].value;
      const password = document.getElementsByTagName('input')[1].value;
      let data;
      if (!username || !password) {
        setWrongInfo(true);
        data = false;
      }

      console.log('username: ', username);
      console.log('password: ', password);
      
      const response = await fetch('/api/login', {
        method: "POST",
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({
          username,
          password,
        })
      });
      data = await response.json();
      console.log(data);
   
      if(data){ 
        console.log(data)
        return navigate('/dashboard');
      }
      return null; 
    }
    catch (err) {
        console.log(err)
      }
      
  }
  // const changeUsername = (e) => {
  //   setUsername(e.target.value)
  // }
  

  return (
      <div id="login">
        <div id="login-box">
          <div>Hello</div>
            <div>
              <input type="text" placeholder="Username"/>
              <br />
              <input type="text" placeholder="Password"/>
            </div>
          <button id="login-button" onClick={(event) => handleClick(event)}>Login</button>
          <button id="signup-button">Sign Up</button>
          {wrongInfo && <div><p> invalid input </p> </div>}
        </div>
      </div>
    )
  }


 
