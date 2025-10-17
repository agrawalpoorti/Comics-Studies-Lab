import React from "react";
import Bg from './components/bg.jsx'
import Heading from './components/heading.jsx'
import "./page2.css";
import visibility from './assets/visibility.png'
import origin from './assets/origin.png'
import activity from './assets/activity.png'
import creativity from './assets/creativity.png'



function Page2() {
  return (
    <div>
      <Bg></Bg>
      <Heading style = {{color:"Black"}}/>
    <div className="bubbles-container">
      {/* Activity */}
      <div className="bubble activity">
        <img src={activity} alt="activity" />
        <span>Activity</span>
      </div>

      {/* Origin */}
      <div className="bubble origin">
        <img src= {origin} alt="origin" />
        <span>Origin</span>
      </div>

      {/* Visibility */}
      <div className="bubble visibility">
        <img src={visibility} alt="visibility" />
        <span>Visibility</span>
      </div>

      {/* Creativity */}
      <div className="bubble creativity">
        <img src={creativity} alt="creativity" />
        <span>Creativity</span>
      </div>
    </div>
    </div>
    
  );
}

export default Page2;
