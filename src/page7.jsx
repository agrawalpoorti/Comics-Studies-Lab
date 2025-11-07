import React from "react";
import "./page7.css";
import Bg from "./components/bg.jsx";
import envelopeImage from "./assets/envelope.png"; 

function Page7() {
  return (
    <div className="page7-container">
      <Bg style={{backgroundColor:"White"}} />

      
      <h1 className="page7-heading">Comics Studies<br />Lab@IITJ</h1>

      <div className="envelope-wrapper">
        <img src={envelopeImage} alt="Envelope with @" className="envelope-img" />
      </div>

      <div className="signin-section">
        <p>Email</p>
        <p>Password</p>
        <p>Sign in</p>
      </div>

    
      <div className="signup-section">
        <p>Sign up</p>
        <p>Name</p>
        <p>Email</p>
        <p>Age</p>
        <p>Gender</p>
        <p>Country</p>
      </div>
    </div>
  );
}

export default Page7;
