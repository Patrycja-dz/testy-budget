import React from "react";
import lady from "./../images/lady-in-yoga.jpg";
function Home() {
  return (
    <>
      <div className="home">
        <div className="home__content">
          <p className="home__separator">Yoga</p>
          <div className="home__text">
            <span>For Better</span>
            <p> Health &amp; Flexibility</p>
          </div>
        </div>

        <div className="women">
          <img src={lady} alt="lady in yoga"></img>
        </div>
      </div>
    </>
  );
}

export default Home;
