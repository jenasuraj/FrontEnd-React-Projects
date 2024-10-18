import React, { forwardRef } from 'react';
import './Login.css';

const UserInput = ({ setLogin, inputRef, emailRef, setDynamicName, setDynamicEmail }) => {
  function changePortal() {
    
      if (inputRef.current.value && emailRef.current.value) {
        // If input and email are available, log the user in and store their details
        setLogin(false);
        setDynamicName(inputRef.current.value);
        setDynamicEmail(emailRef.current.value);
      } else {
        // If not, reset to the login state
        alert("Fill up the credentials")
        setLogin(true);       
      }
  }

  return (
    <div className="fullscreen-container">
      <div className="LoginPage">
        <h1>Be a <span>Sykoon.ai</span> user</h1>
        <h1>Join us</h1>

        <div className="inputFields">
          <input type="text" ref={inputRef} placeholder="Enter your Name" />
          <input type="email" ref={emailRef} placeholder="Enter your Email ID" />
          <input type="password" placeholder="Enter your Password" />
          <button onClick={changePortal} className="login-button">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserInput;
