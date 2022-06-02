import React from "react";
import { Link } from "react-router-dom";
import groupYoga from "./../images/group-yoga.jpg";
import yogaConcentraining from "./../images/yoga-concentrating.jpg";
import lyingYoga from "./../images/lying-yoga.jpg";

function Blog() {
  return (
    <>
      <h2 className="heading heading--padded">Blog</h2>
      <section className="blog">
        <article className="article__post">
          <div>
            <img src={groupYoga} alt="yoga in group" />
          </div>
          <div>
            <h3 className="article__postTitle">
              <Link to="/single-post">Summer Yoga Classes</Link>
            </h3>
            <span>April 7, 2023 </span>
            <p className="article__description article__postText">
              Duis ultrices tortor non felis convallis bibendum. Maecenas diam
              velit, sollicitudin at imperdiet ac, consectetur non nibh. Etiam
              eget dapibus nulla. Nulla placerat mauris ut elit placerat luctus.
              Aliquam porttitor leo non nisl scelerisque sollicitudin.
            </p>
          </div>
        </article>
        <article className="article__post">
          <div>
            <img src={yogaConcentraining} alt="yoga concentrating" />
          </div>
          <div>
            <h3 className="article__postTitle">
              <Link to="/single-post">Inner peace</Link>
            </h3>
            <span>April 6, 2023 </span>
			<p className="article__description article__postText">
              Nunc sit amet dapibus est, sit amet varius risus. Donec luctus
              lacinia mauris, at feugiat ligula facilisis ac. Class aptent
              taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos. Sed id ligula consectetur, iaculis dolor
              vitae, gravida mauris.
            </p>
          </div>
        </article>
        <article className="article__post">
          <div>
            <img src={lyingYoga} alt="yoga lying down legs in the air" />
          </div>
          <div>
            <h3 className="article__postTitle">
              <Link to="/single-post">A Strong and Flexible Body</Link>
            </h3>
            <span>April 5, 2023 </span>
			<p className="article__description article__postText">
              In felis ante, aliquet sit amet venenatis at, feugiat sed leo.
              Fusce pretium, velit in luctus ornare, elit lorem ultrices tortor,
              sed consectetur orci risus mollis ante. Cras ut aliquam nulla.
              Aliquam convallis sapien quis cursus condimentum.
            </p>
          </div>
        </article>
      </section>
    </>
  );
}

export default Blog;
