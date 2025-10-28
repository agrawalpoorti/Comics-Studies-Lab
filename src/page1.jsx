import React from "react";
import Bg from "./components/bg";
import Heading from "./components/heading";
import { Link } from "react-router-dom";
import s1 from "./assets/s1.png";
import s2 from "./assets/s2.png";
import s3 from "./assets/s3.png";
import s4 from "./assets/s4.png";
import "./page1.css";

function Page1() {
  return (
    <div>
      <Bg />
      <Heading />
      <p id="p1-main">Our Home in the World of Comics</p>

      {/* Proper working link */}
      <Link id="p1-end" to="/page2">
        Enter
      </Link>

      {/* Character images section */}
<div className="characters-container">
  <img src={s1} alt="Character 1" className="character s1" />
  <img src={s2} alt="Character 2" className="character s2" />
  <img src={s3} alt="Character 3" className="character s3" />
  <img src={s4} alt="Character 4" className="character s4" />
</div>

    </div>
  );
}

export default Page1;
