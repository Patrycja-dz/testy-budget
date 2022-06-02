import React from "react";
import lady from "./../images/lady-in-yoga.jpg";
import instructor1 from "./../images/instructor1.jpg";
import instructor2 from "./../images/instructor2.jpg";
import instructor3 from "./../images/instructor3.jpg";
import instructor4 from "./../images/instructor4.jpg";
function Instructors() {
  return (
    <>
      <h2 className="heading heading--moved">Instructors</h2>
      <section className="section">
        <section className="gallery">
          <figure className="figure">
            <img src={instructor1} alt="Yoga instructor one"></img>
            <figcaption className="figure__caption">Belle Humpfree</figcaption>
          </figure>
          <figure>
            <img src={instructor2} alt="Yoga instructor two"></img>
            <figcaption className="figure__caption">Jacob Collern</figcaption>
          </figure>
          <figure className="figure">
            <img src={instructor3} alt="Yoga instructor three"></img>
            <figcaption className="figure__caption">Edward Blanche</figcaption>
          </figure>
          <figure className="figure">
            <img src={instructor4} alt="Yoga instructor four"></img>
            <figcaption className="figure__caption">Carrie Waldorf</figcaption>
          </figure>
        </section>
        <div className="women">
          <img src={lady} alt="lady in yoga"></img>
        </div>
      </section>
    </>
  );
}

export default Instructors;
