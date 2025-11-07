import React from "react";
import "./page6.css";
import Bg from "./components/bg.jsx";
import { Link } from "react-router-dom";


function Page6() {
  return (
    <div className="page6-container">
      <Bg />


      <h1 className="page6-heading">Comics Studies<br />Lab@IITJ</h1>

      <div className="register-section">
        <Link to="/page7" className="register-link">
          Please register
        </Link>
      </div>
    </div>
  );
}

export default Page6;
