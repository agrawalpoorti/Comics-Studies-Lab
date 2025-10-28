import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Bg from "./components/bg.jsx";
import Heading from "./components/heading.jsx";
import "./page2.css";
import visibility from "./assets/visibility.png";
import origin from "./assets/origin.png";
import activity from "./assets/activity.png";
import creativity from "./assets/creativity.png";
import s1 from "./assets/s1.png";
import s2 from "./assets/s2.png";
import s3 from "./assets/s3.png";

function Page2() {
  const navigate = useNavigate();


  return (
    <div>
      <Bg style={{ backgroundColor: "white" }} />
      <Heading style={{ color: "rgb(64,76,66)",fontSize:"45px" }} />

      <div className="bubbles-container">
        <div className="bubble activity">
          <img src={activity} alt="activity" />
          <div className="bubble-text">Activity</div>
        </div>
        <div className="bubble origin">
          <img src={origin} alt="origin" />
          <div className="bubble-text">Origin</div>
        </div>
        <div className="bubble visibility">
          <img src={visibility} alt="visibility" />
          <div className="bubble-text">Visibility</div>
        </div>
        <div className="bubble creativity">
          <img src={creativity} alt="creativity" />
          <div className="bubble-text">Creativity</div>
        </div>
      </div>

      <div className="statues-container">
        <img src={s1} alt="Statue 1" className="statue statue1" />
        <img src={s2} alt="Statue 2" className="statue statue2" />
        <img src={s3} alt="Statue 3" className="statue statue3" />
      </div>
    </div>
  );
}

export default Page2;
