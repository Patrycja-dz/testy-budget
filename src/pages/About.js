import React from "react";
import lady from "./../images/lady-in-yoga.jpg";
function About() {
  return (
    <>
      <h2 className="heading">About</h2>
      <section className="section">
        <section className="section__text">
          <article className="article">
            <h3 className="article__title">
              We Have Free Templates for Everyone
            </h3>
            <p className="article__description">
              We Have Free Templates for Everyone Our website templates are
              created with inspiration, checked for quality and originality and
              meticulously sliced and coded. What's more, they're absolutely
              free! You can do a lot with them. You can modify them. You can use
              them to design websites for clients, so long as you agree with the
              Terms of Use. You can even remove all our links if you want to.
            </p>
          </article>
          <article className="article">
            <h3 className="article__title">We Have More Templates for You</h3>
            <p className="article__description">
              Looking for more templates? Just browse through all our Free
              Website Templates and find what you're looking for. But if you
              don't find any website template you can use, you can try our Free
              Web Design service and tell us all about it. Maybe you're looking
              for something different, something special. And we love the
              challenge of doing something different and something special.
            </p>
          </article>
          <article className="article">
            <h3 className="article__title">Be Part of Our Community</h3>
            <p className="article__description">
              If you're experiencing issues and concerns about this website
              template, join the discussion on our forum and meet other people
              in the community who share the same interests with you.
            </p>
          </article>
          <article className="article">
            <h3 className="article__title">Template Details</h3>
            <p className="article__description">
              Design version 3. Code version 1. Website Template details,
              discussion and updates for this Belle & Carrie Rehabilitation Yoga
              Web Template. Website Template design by Free Website Templates.
              Please feel free to remove some or all the text and links of this
              page and replace it with your own About content.
            </p>
          </article>
        </section>

        <div className="women">
          <img src={lady} alt="lady in yoga" className="women"></img>
        </div>
      </section>
    </>
  );
}

export default About;
