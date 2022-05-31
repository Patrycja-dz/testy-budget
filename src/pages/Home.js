import React from "react";
import "../styles/home.css";
import lady from "./../images/lady-in-yoga.jpg";
function Home() {
  return (
    <div className="main-content">
      <div className="main-text">
        <h1>Yoga</h1>
        <p>
          For Better
          <br /> Health &amp;
          <br /> Flexibility
        </p>
      </div>
      <div className="women">
        <img src={lady} alt="lady in yoga" className="womenInYoga"></img>
      </div>
    </div>
  );
}

export default Home;
